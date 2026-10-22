/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * Developed in collaboration with Anyfold <https://anyfold.ai/>
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 * @author Karel Berka <karel.berka@upol.cz>
 */

import { Box3D } from '@molstar/core/math/geometry';
import { Task } from '@molstar/core/task';
import { ParamDefinition as PD } from '@molstar/core/util/param-definition';
import { type ApiContext, ApiArea, ApiResult } from '@molstar/prism-viewer/api/area';
import { operationCommand } from '@molstar/prism-viewer/commands/operations';
import type { ViewerExtension, ViewerSkill } from '@molstar/prism-viewer/spec';
import { downloadBlob } from '@molstar/prism-viewer/ui/download';

// Geometry export in the Prism viewer (parity.md §6: Export › Geometry; README decision 27, commands first):
// the `geo-export` area with `geo-export.export`, which writes what the canvas shows (its render objects, as Mol*'s
// geometry exporters read them) as GLB, STL, OBJ or USDZ and gives the file's bytes; saving it is the page's
// (`ui/download.ts`), in the command and the Export card's Geometry section. The geometry is the canvas's, so it needs
// one (`modules: ['canvas']`: headless it fails `unavailable`). The exporters are a chunk of their own, imported when a
// format is first written. Like model-export, `undoable: false` without `history: false`: no history step, and the
// agent's policy asks every time (agent.md §4).

declare module '@molstar/prism-viewer/api' {
  interface ExtensionApis {
    'geo-export': GeoExportApi;
  }
}

export type GeometryFormat = 'glb' | 'stl' | 'obj' | 'usdz';

export const GeometryExportParams = {
  format: PD.Select<GeometryFormat>(
    'glb',
    [
      ['glb', 'GLB (glTF binary)'],
      ['stl', 'STL'],
      ['obj', 'OBJ'],
      ['usdz', 'USDZ (AR)'],
    ],
    { description: 'GLB keeps colors for most 3D tools; STL is shape only (3D printing); OBJ; USDZ for AR' },
  ),
  name: PD.Text('', { description: 'The file name, without its extension (empty: from the loaded entries)' }),
  scale: PD.Numeric(
    1.0,
    { min: 0.001, max: 1000.0, step: 0.001 },
    { description: 'Scaling factor applied during export (e.g. 1.0 = 100%, 0.1 for 100mm model)' },
  ),
};

/** What `geo-export.export` gives: the file's bytes and name. */
export interface ExportedGeometry {
  blob: Blob;
  filename: string;
  additionalFiles?: { blob: Blob; filename: string }[];
}

const clean = (s: string) =>
  s
    .trim()
    .replace(/[\\/:*?"<>|\s]+/g, '_')
    .replace(/^_+|_+$/g, '');

function sizeOf(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** The loaded entries' ids, as v5's export named the file. */
function entriesName(ctx: ApiContext): string {
  const ids = new Set<string>();
  for (const m of ctx.plugin.managers.structure.hierarchy.current.models) {
    const id = m.cell.obj?.data.entryId;
    if (id) ids.add(id.toUpperCase());
  }
  return [...ids].join('-') || 'molstar-model';
}

/** The format's exporter, from its own chunk. */
async function exporterFor(format: GeometryFormat, name: string, box: Box3D, radius: number, scale?: number) {
  switch (format) {
    case 'glb':
      return new (await import('./glb-exporter.js')).GlbExporter(box, scale);
    case 'stl':
      return new (await import('./stl-exporter.js')).StlExporter(box, scale);
    case 'obj':
      return new (await import('./obj-exporter.js')).ObjExporter(name, box, scale);
    case 'usdz':
      return new (await import('./usdz-exporter.js')).UsdzExporter(box, radius, scale);
  }
}

export class GeoExportApi extends ApiArea {
  readonly id = 'geo-export';

  readonly export = this.operation({
    id: 'geo-export.export',
    title: 'Export geometry',
    params: GeometryExportParams,
    modules: ['canvas'],
    undoable: false,
    run: async ({ format, name, scale }, ctx): Promise<ApiResult<ExportedGeometry>> => {
      const canvas3d = ctx.plugin.canvas3d;
      if (!canvas3d) {
        return ApiResult.fail('unavailable', 'There is no canvas to export geometry from.', 'Use a viewer with one.');
      }
      // Hidden objects are skipped by the exporters too.
      const objects = canvas3d.getRenderObjects().filter((o) => o.state.visible);
      if (!objects.length) {
        return ApiResult.fail('not-found', 'Nothing is shown to export.', 'Load a structure, or show what is hidden.');
      }
      const base = clean(name.replace(/\.(glb|stl|obj|usdz|zip)$/i, '')) || entriesName(ctx);

      const state = ctx.plugin.state.data;
      const cells = Array.from(state.cells.values());
      const strutsCell = cells.find((c) => c.transform?.transformer?.id === '3dprint-struts.struts-from-structure');
      const baseCell = cells.find((c) => c.transform?.transformer?.id === '3dprint-struts.stand-base-from-structure');
      const pillarsCell = cells.find(
        (c) => c.transform?.transformer?.id === '3dprint-struts.stand-pillars-from-structure',
      );
      const strutsParams = strutsCell?.transform?.params as any;
      const isDetachable = strutsParams?.showStand && strutsParams?.standPillarsDetachable;

      if (!isDetachable) {
        try {
          const sphere = canvas3d.boundingSphereVisible;
          const exporter = await exporterFor(format, base, Box3D.fromSphere3D(Box3D(), sphere), sphere.radius, scale);
          const blob = await ctx.plugin.runTask(
            Task.create('Export geometry', async (rt) => {
              for (let i = 0, il = objects.length; i < il; i++) {
                if (ctx.signal.aborted) return undefined;
                await rt.update({
                  message: `Exporting object ${i + 1}/${il}`,
                  isIndeterminate: false,
                  current: i,
                  max: il,
                });
                await exporter.add(objects[i], canvas3d.graphics, rt);
              }
              return exporter.getBlob(rt);
            }),
            { useOverlay: true },
          );
          if (!blob || ctx.signal.aborted) return ApiResult.fail('aborted', 'Stopped.', 'Nothing was exported.');
          const filename = `${base}.${exporter.fileExtension}`;
          return ApiResult.ok(
            `Exported the geometry as ${filename} (${sizeOf(blob.size)}).`,
            {},
            {
              value: { blob, filename },
            },
          );
        } catch (e) {
          return ApiResult.fail(
            'failed',
            `Could not export the geometry: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
      }

      // Detachable stand: 2-pass export (Protein and Stand separately)
      try {
        const getRepCells = (parentCell: any) => {
          if (!parentCell) return [];
          const children = state.tree.children.get(parentCell.transform.ref);
          if (!children) return [];
          const refs = children.toArray ? children.toArray() : Array.from(children.values());
          return cells.filter((c) => refs.includes(c.transform.ref));
        };

        const supportReps = [...getRepCells(strutsCell), ...getRepCells(baseCell), ...getRepCells(pillarsCell)];

        const runExportPass = async (passName: string) => {
          const currentObjects = canvas3d.getRenderObjects().filter((o) => o.state.visible);
          const sphere = canvas3d.boundingSphereVisible;
          const exporter = await exporterFor(
            format,
            passName,
            Box3D.fromSphere3D(Box3D(), sphere),
            sphere.radius,
            scale,
          );
          const blob = await ctx.plugin.runTask(
            Task.create(`Export ${passName}`, async (rt) => {
              for (let i = 0, il = currentObjects.length; i < il; i++) {
                if (ctx.signal.aborted) return undefined;
                await rt.update({
                  message: `Exporting object ${i + 1}/${il}`,
                  isIndeterminate: false,
                  current: i,
                  max: il,
                });
                await exporter.add(currentObjects[i], canvas3d.graphics, rt);
              }
              return exporter.getBlob(rt);
            }),
            { useOverlay: true },
          );
          if (!blob) throw new Error(`Pass ${passName} produced no data.`);
          return { blob, filename: `${passName}.${exporter.fileExtension}` };
        };

        while (ctx.plugin.behaviors.state.isBusy.value) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }

        // Pass 1: Hide support representations -> export protein
        let proteinResult: { blob: Blob; filename: string } | null = null;
        try {
          const update = state.build();
          for (const r of supportReps) update.to(r.transform.ref).updateState({ isHidden: true });
          await update.commit();
          while (ctx.plugin.behaviors.state.isBusy.value) {
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          await new Promise((resolve) => setTimeout(resolve, 100));
          proteinResult = await runExportPass(`${base}_protein`);
        } catch (e) {
          console.error('Failed to export protein geometry pass:', e);
        }

        // Pass 2: Show supports, hide other representations -> export stand
        let standResult: { blob: Blob; filename: string } | null = null;
        try {
          const allReps = cells.filter(
            (c) =>
              c.transform.transformer.id.endsWith('structure-representation-3d') ||
              c.transform.transformer.id.endsWith('volume-representation-3d') ||
              c.transform.transformer.id.endsWith('shape-representation-3d'),
          );
          const supportRefs = new Set(supportReps.map((r) => r.transform.ref));
          const repsToHide = allReps.filter((r) => !supportRefs.has(r.transform.ref));

          const update = state.build();
          for (const r of supportReps) update.to(r.transform.ref).updateState({ isHidden: false });
          for (const r of repsToHide) update.to(r.transform.ref).updateState({ isHidden: true });
          await update.commit();
          while (ctx.plugin.behaviors.state.isBusy.value) {
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          await new Promise((resolve) => setTimeout(resolve, 100));
          standResult = await runExportPass(`${base}_stand`);
        } catch (e) {
          console.error('Failed to export stand geometry pass:', e);
        }

        // Restore visibilities
        try {
          const allReps = cells.filter(
            (c) =>
              c.transform.transformer.id.endsWith('structure-representation-3d') ||
              c.transform.transformer.id.endsWith('volume-representation-3d') ||
              c.transform.transformer.id.endsWith('shape-representation-3d'),
          );
          const update = state.build();
          for (const r of allReps) update.to(r.transform.ref).updateState({ isHidden: false });
          await update.commit();
          while (ctx.plugin.behaviors.state.isBusy.value) {
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (e) {
          console.error('Failed to restore visibilities:', e);
        }

        if (!proteinResult) {
          return ApiResult.fail('failed', 'Detachable protein geometry export failed.');
        }

        const additionalFiles = standResult ? [standResult] : [];
        return ApiResult.ok(
          `Exported detachable geometry as ${proteinResult.filename}${standResult ? ` and ${standResult.filename}` : ''} (${sizeOf(proteinResult.blob.size)}).`,
          {},
          {
            value: {
              blob: proteinResult.blob,
              filename: proteinResult.filename,
              additionalFiles,
            },
          },
        );
      } catch (e) {
        return ApiResult.fail(
          'failed',
          `Could not export detachable geometry: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    },
  });
}

export const GeoExportSkill: ViewerSkill = {
  id: 'export-geometry',
  title: 'Export geometry',
  summary: 'the 3D scene as GLB, STL, OBJ or USDZ (3D printing, AR, other 3D tools)',
  guidance: [
    'Skill export-geometry: export_geometry writes what is shown (its surfaces, cartoons, …) as a 3D file for the person.',
    '- format glb (colors, most 3D tools), stl (shape only, 3D printing), obj, usdz (AR on Apple devices).',
    '- scale factor sets physical model size (e.g. 0.1 scales 1Å to 0.1mm for 3D printing).',
    '- Only what is visible is written: show or hide parts first.',
  ].join('\n'),
  tools: [
    {
      id: 'export_geometry',
      operation: 'geo-export.export',
      description: 'Writes the shown 3D scene as a GLB, STL, OBJ or USDZ file.',
    },
  ],
};

export const SectionId = 'geo-export.section.export';

export const GeoExportExtension: ViewerExtension = {
  id: 'geo-export',
  title: 'Geometry export',
  api: { 'geo-export': (ctx) => new GeoExportApi(ctx) },
  commands: (api) => {
    const x = api['geo-export'];
    if (!x) return [];
    return [
      {
        ...operationCommand(api, x.export, {
          category: 'Export',
          icon: 'box',
          title: 'Export geometry…',
          alias: ['glb', 'gltf', 'stl', 'obj', 'usdz', '3d print', 'mesh', 'export geometry'],
          action: 'Export',
          view: { title: 'Export › Geometry', card: 'core.overlay.export', section: SectionId },
        }),
        // The operation gives the file's bytes; the command saves it through the page.
        async run(args) {
          const r = await api['geo-export']!.export(args as never);
          if (!r.ok) throw new Error(r.hint ? `${r.message} ${r.hint}` : r.message);
          if (r.value) {
            downloadBlob(r.value.blob, r.value.filename);
            if (r.value.additionalFiles) {
              for (let fi = 0; fi < r.value.additionalFiles.length; fi++) {
                const f = r.value.additionalFiles[fi];
                setTimeout(() => downloadBlob(f.blob, f.filename), (fi + 1) * 200);
              }
            }
          }
          return { message: r.did, ops: `geo-export.export(${JSON.stringify(args)})` };
        },
      },
      {
        id: 'geo-export.open',
        title: 'Show the Geometry export',
        category: 'Export',
        icon: 'box',
        alias: ['geometry export', '3d export'],
        // Opens the card: a view, not a change.
        async run() {
          const r = await api.view.open({ card: 'core.overlay.export', section: SectionId });
          if (ApiResult.isFailure(r)) throw new Error(r.message);
          return { message: 'Opened the Export card.', ops: `view.open({ card: "export", section: "${SectionId}" })` };
        },
      },
    ];
  },
  skills: [GeoExportSkill],
  ui: async (ctx) => (await import('./prism-viewer-ui.js')).geoExportUI(ctx),
};
