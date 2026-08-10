/**
 * Copyright (c) 2021 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Sukolsak Sakshuwong <sukolsak@stanford.edu>
 */

import { Box3D } from '../../mol-math/geometry';
import { PluginComponent } from '../../mol-plugin-state/component';
import { PluginContext } from '../../mol-plugin/context';
import { Task } from '../../mol-task';
import { PluginStateObject } from '../../mol-plugin-state/objects';
import { StateSelection } from '../../mol-state';
import { ParamDefinition as PD } from '../../mol-util/param-definition';
import { SetUtils } from '../../mol-util/set';
import { GlbExporter } from './glb-exporter';
import { ObjExporter } from './obj-exporter';
import { StlExporter } from './stl-exporter';
import { UsdzExporter } from './usdz-exporter';

export const GeometryParams = {
    format: PD.Select('glb', [
        ['glb', 'glTF 2.0 Binary (.glb)'],
        ['stl', 'Stl (.stl)'],
        ['obj', 'Wavefront (.obj)'],
        ['usdz', 'Universal Scene Description (.usdz)']
    ])
};

export class GeometryControls extends PluginComponent {
    readonly behaviors = {
        params: this.ev.behavior<PD.Values<typeof GeometryParams>>(PD.getDefaultValues(GeometryParams))
    };

    private getFilename() {
        const models = this.plugin.state.data.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Model)).map(s => s.obj!.data);
        const uniqueIds = new Set<string>();
        models.forEach(m => uniqueIds.add(m.entryId.toUpperCase()));
        const idString = SetUtils.toArray(uniqueIds).join('-');
        return `${idString || 'molstar-model'}`;
    }

    private createExporter(format: string, filename: string, boundingBox: Box3D, radius: number, scale?: number) {
        switch (format) {
            case 'glb':
                return new GlbExporter(boundingBox, scale);
            case 'obj':
                return new ObjExporter(filename, boundingBox, scale);
            case 'stl':
                return new StlExporter(boundingBox, scale);
            case 'usdz':
                return new UsdzExporter(boundingBox, radius, scale);
            default: throw new Error('Unsupported format.');
        }
    }

    exportGeometry(scale?: number): Promise<{ blob: Blob, filename: string, additionalFiles?: { blob: Blob, filename: string }[] }> {
        const task = Task.create('Export Geometry', async ctx => {
            try {
                const state = this.plugin.state.data;
                const cells = Array.from(state.cells.values());

                // Find support cells by transformer ID
                const strutsCell = cells.find(c => c.transform.transformer.id === '3dprint-struts.struts-from-structure');
                const baseCell = cells.find(c => c.transform.transformer.id === '3dprint-struts.stand-base-from-structure');
                const pillarsCell = cells.find(c => c.transform.transformer.id === '3dprint-struts.stand-pillars-from-structure');

                const strutsParams = strutsCell?.transform.params;
                const isDetachable = strutsParams?.showStand && strutsParams?.standPillarsDetachable;

                const format = this.behaviors.params.value.format;
                const filename = this.getFilename();

                if (!isDetachable) {
                    const renderObjects = this.plugin.canvas3d?.getRenderObjects()!;
                    const boundingSphere = this.plugin.canvas3d?.boundingSphereVisible!;
                    const boundingBox = Box3D.fromSphere3D(Box3D(), boundingSphere);
                    const renderObjectExporter = this.createExporter(format, filename, boundingBox, boundingSphere.radius, scale);

                    for (let i = 0, il = renderObjects.length; i < il; ++i) {
                        await ctx.update({ message: `Exporting object ${i}/${il}` });
                        await renderObjectExporter.add(renderObjects[i], this.plugin.canvas3d?.webgl!, ctx);
                    }

                    const blob = await renderObjectExporter.getBlob(ctx);
                    return {
                        blob,
                        filename: filename + '.' + renderObjectExporter.fileExtension
                    };
                }

                // Separated Export Logic for Detachable Stand
                const getRepCells = (parentCell: any) => {
                    if (!parentCell) return [];
                    const children = state.tree.children.get(parentCell.transform.ref);
                    if (!children) return [];
                    const refs = Array.from(children.values());
                    return cells.filter(c => refs.includes(c.transform.ref));
                };

                const supportReps = [
                    ...getRepCells(strutsCell),
                    ...getRepCells(baseCell),
                    ...getRepCells(pillarsCell)
                ];

                const proteinReps = cells.filter(c => c.transform.transformer.id.endsWith('structure-representation-3d'));

                const cleanName = strutsParams.standText && strutsParams.standText.trim()
                    ? strutsParams.standText.trim().replace(/[^a-z0-9_-]/gi, '_')
                    : filename;

                const runExportPass = async (passFilename: string) => {
                    const renderObjects = this.plugin.canvas3d?.getRenderObjects()!;
                    const boundingSphere = this.plugin.canvas3d?.boundingSphereVisible!;
                    const boundingBox = Box3D.fromSphere3D(Box3D(), boundingSphere);
                    const renderObjectExporter = this.createExporter(format, passFilename, boundingBox, boundingSphere.radius, scale);

                    for (let i = 0, il = renderObjects.length; i < il; ++i) {
                        await renderObjectExporter.add(renderObjects[i], this.plugin.canvas3d?.webgl!, ctx);
                    }
                    const blob = await renderObjectExporter.getBlob(ctx);
                    return { blob, filename: passFilename + '.' + renderObjectExporter.fileExtension };
                };

                // 1. Export Protein Only
                let proteinResult: { blob: Blob, filename: string } | null = null;
                try {
                    const update = state.build();
                    supportReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: true }));
                    proteinReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: false }));
                    await update.commit();

                    proteinResult = await runExportPass(`${cleanName}_protein`);
                } catch (e) {
                    console.error('Failed to export protein geometry:', e);
                }

                // 2. Export Stand Only
                let standResult: { blob: Blob, filename: string } | null = null;
                try {
                    const update = state.build();
                    supportReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: false }));
                    proteinReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: true }));
                    await update.commit();

                    standResult = await runExportPass(`${cleanName}_stand`);
                } catch (e) {
                    console.error('Failed to export stand geometry:', e);
                }

                // 3. Restore Visibility
                try {
                    const update = state.build();
                    supportReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: false }));
                    proteinReps.forEach(r => update.to(r.transform.ref).updateState({ isHidden: false }));
                    await update.commit();
                } catch (e) {
                    console.error('Failed to restore visibilities:', e);
                }

                if (!proteinResult) throw new Error('Protein export failed.');
                return {
                    blob: proteinResult.blob,
                    filename: proteinResult.filename,
                    additionalFiles: standResult ? [standResult] : []
                };

            } catch (e) {
                this.plugin.log.error('Error during geometry export');
                throw e;
            }
        });

        return this.plugin.runTask(task, { useOverlay: true });
    }

    constructor(private plugin: PluginContext) {
        super();
    }
}