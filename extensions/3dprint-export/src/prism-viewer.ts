/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Karel Berka <karel.berka@upol.cz>
 */

import { ParamDefinition as PD } from '@molstar/core/util/param-definition';
import { StateSelection } from '@molstar/core/state';
import { PluginStateObject } from '@molstar/plugin/state/objects';
import { ShapeRepresentation3D } from '@molstar/plugin/state/transforms/shape/representation';
import { ApiArea, ApiResult } from '@molstar/prism-viewer/api/area';
import { operationCommand } from '@molstar/prism-viewer/commands/operations';
import type { ViewerExtension, ViewerSkill } from '@molstar/prism-viewer/spec';
import { StrutsParams, StrutsFromStructure, StandBaseFromStructure, StandPillarsFromStructure } from './struts.js';

declare module '@molstar/prism-viewer/api' {
  interface ExtensionApis {
    '3dprint': ThreeDPrintApi;
  }
}

export const SectionId = '3dprint.section.planning';

export class ThreeDPrintApi extends ApiArea {
  readonly id = '3dprint';

  readonly generate = this.operation({
    id: '3dprint.generate',
    title: 'Generate 3D-Print supports',
    params: StrutsParams,
    modules: ['canvas'],
    run: async (params, ctx): Promise<ApiResult<void>> => {
      const state = ctx.plugin.state.data;
      const structures = state.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Structure));
      if (!structures.length) {
        return ApiResult.fail('not-found', 'No molecular structure is loaded to generate supports for.');
      }

      const structRef = structures[0].transform.ref;
      const update = state.build();

      // 1. Internal connecting struts
      const existingStruts = state.select(StateSelection.Generators.ofTransformer(StrutsFromStructure));
      if (existingStruts.length > 0) {
        update.to(existingStruts[0].transform.ref).update(params);
      } else {
        update.to(structRef).apply(StrutsFromStructure, params).apply(ShapeRepresentation3D);
      }

      // 2. Stand base plate
      const existingBase = state.select(StateSelection.Generators.ofTransformer(StandBaseFromStructure));
      if (params.showStand) {
        if (existingBase.length > 0) {
          update.to(existingBase[0].transform.ref).update(params);
        } else {
          update.to(structRef).apply(StandBaseFromStructure, params).apply(ShapeRepresentation3D);
        }
      } else if (existingBase.length > 0) {
        update.delete(existingBase[0].transform.ref);
      }

      // 3. Stand pillars
      const existingPillars = state.select(StateSelection.Generators.ofTransformer(StandPillarsFromStructure));
      if (params.showStand && params.standPillarCount > 0) {
        if (existingPillars.length > 0) {
          update.to(existingPillars[0].transform.ref).update(params);
        } else {
          update.to(structRef).apply(StandPillarsFromStructure, params).apply(ShapeRepresentation3D);
        }
      } else if (existingPillars.length > 0) {
        update.delete(existingPillars[0].transform.ref);
      }

      await update.commit();
      return ApiResult.ok('Generated support struts and stand for 3D printing.');
    },
  });

  readonly clear = this.operation({
    id: '3dprint.clear',
    title: 'Clear 3D-Print supports',
    params: {},
    modules: ['canvas'],
    run: async (_, ctx): Promise<ApiResult<void>> => {
      const state = ctx.plugin.state.data;
      const update = state.build();

      for (const t of [StrutsFromStructure, StandBaseFromStructure, StandPillarsFromStructure]) {
        const cells = state.select(StateSelection.Generators.ofTransformer(t));
        for (const c of cells) {
          update.delete(c.transform.ref);
        }
      }

      await update.commit();
      return ApiResult.ok('Cleared 3D-print supports.');
    },
  });

  readonly applyPreset = this.operation({
    id: '3dprint.preset',
    title: 'Apply 3D-Print preset',
    params: {
      preset: PD.Select('spacefill', [
        ['spacefill', 'Spacefill (Solid)'],
        ['ball-and-stick', 'Ball & Stick (Thick)'],
        ['cartoon', 'Cartoon (Thick)'],
        ['surface', 'Molecular Surface'],
      ]),
    },
    modules: ['canvas'],
    run: async ({ preset }, ctx): Promise<ApiResult<void>> => {
      let presetId = 'preset-structure-representation-illustrative';
      if (preset === 'cartoon') presetId = 'preset-structure-representation-polymer-and-ligand';
      else if (preset === 'surface') presetId = 'preset-structure-representation-molecular-surface';
      else if (preset === 'ball-and-stick') presetId = 'preset-structure-representation-atomic-detail';

      const r = await ctx.api.structure.preset({ preset: presetId });
      if (!r.ok) return ApiResult.fail(r.code, r.message, r.hint);
      return ApiResult.ok(`Applied durable 3D-print preset: ${preset}.`);
    },
  });
}

export const ThreeDPrintSkill: ViewerSkill = {
  id: '3dprint-planning',
  title: '3D-Print Planning',
  summary:
    'plans and generates internal support struts, stands with embossed text, and durable presets for 3D printing',
  guidance: [
    'Skill 3dprint-planning: prepares macromolecular structures for FDM/SLA 3D printing.',
    '- generate adds internal support struts, a sturdy pedestal stand, and vertical pillars.',
    '- stand text can emboss PDB IDs or molecule names along the base rim.',
    '- applyPreset sets durable thick representations that resist delamination and breakage.',
  ].join('\n'),
  tools: [
    {
      id: 'generate_supports',
      operation: '3dprint.generate',
      description: 'Generates support struts and pedestal stand for 3D printing.',
    },
    {
      id: 'clear_supports',
      operation: '3dprint.clear',
      description: 'Removes 3D printing support struts and pedestal stand.',
    },
  ],
};

export const ThreeDPrintExtension: ViewerExtension = {
  id: '3dprint-export',
  title: '3D-Print Planning',
  api: { '3dprint': (ctx) => new ThreeDPrintApi(ctx) },
  commands: (api) => {
    const x = api['3dprint'];
    if (!x) return [];
    return [
      {
        ...operationCommand(api, x.generate, {
          category: 'Export',
          icon: 'box',
          title: '3D-Print Planning…',
          alias: ['3d print', 'struts', 'stand', 'pedestal', '3d printing', 'supports'],
          action: 'Export',
          view: { title: 'Export › 3D-Print Planning', card: 'core.overlay.export', section: SectionId },
        }),
        async run(args) {
          const r = await api['3dprint']!.generate(args as never);
          if (!r.ok) throw new Error(r.hint ? `${r.message} ${r.hint}` : r.message);
          return { message: r.did, ops: `3dprint.generate(${JSON.stringify(args)})` };
        },
      },
    ];
  },
  skills: [ThreeDPrintSkill],
  ui: async (ctx) => (await import('./prism-viewer-ui.js')).threeDPrintUI(ctx),
};
