import * as React from 'react';
import { CollapsableControls, CollapsableState } from '../../mol-plugin-ui/base';
import { Button } from '../../mol-plugin-ui/controls/common';
import { GetAppSvg, CubeSendSvg, ClearSvg, BuildSvg } from '../../mol-plugin-ui/controls/icons';
import { ParameterControls } from '../../mol-plugin-ui/controls/parameters';
import { download } from '../../mol-util/download';
import { StateSelection } from '../../mol-state';
import { PluginStateObject } from '../../mol-plugin-state/objects';

import { StateTransforms } from '../../mol-plugin-state/transforms';
import { PresetStructureRepresentations } from '../../mol-plugin-state/builder/structure/representation-preset';
import { GeometryParams, GeometryControls } from '../geo-export/controls';
import { StrutsParams, StrutsProps, StrutsFromStructure } from './struts';
import { ParamDefinition as PD } from '../../mol-util/param-definition';

interface ThreeDPrintUIState {
    targetSizeInput: string;
    scaleFactorInput: string;
    strutsParams: StrutsProps;
    busy?: boolean;
}

export class ThreeDPrintPlanningUI extends CollapsableControls<{}, ThreeDPrintUIState> {
    private _geoControls: GeometryControls | undefined;
    private lastMaxDim = 0;

    get geoControls() {
        return this._geoControls || (this._geoControls = new GeometryControls(this.plugin));
    }

    protected defaultState(): ThreeDPrintUIState & CollapsableState {
        return {
            header: '3D-Print Planning',
            isCollapsed: false,
            brand: { accent: 'orange', svg: CubeSendSvg },
            targetSizeInput: '100',
            scaleFactorInput: '',
            strutsParams: PD.getDefaultValues(StrutsParams)
        };
    }

    private getStructureInfo() {
        const structures = this.plugin.managers.structure.hierarchy.current.structures;
        if (structures.length > 0) {
            const s = structures[0].cell.obj?.data;
            if (s) {
                const bbox = s.lookup3d.boundary.box;
                const sizeX = bbox.max[0] - bbox.min[0];
                const sizeY = bbox.max[1] - bbox.min[1];
                const sizeZ = bbox.max[2] - bbox.min[2];
                const maxDim = Math.max(sizeX, sizeY, sizeZ);
                return { x: sizeX, y: sizeY, z: sizeZ, maxDim };
            }
        }
        return { x: 0, y: 0, z: 0, maxDim: 0 };
    }

    applyPreset = async (presetType: 'spacefill' | 'ball-and-stick' | 'cartoon' | 'surface') => {
        try {
            this.setState({ busy: true });
            const structures = this.plugin.managers.structure.hierarchy.current.structures;
            if (structures.length === 0) return;

            // 1. Apply polymer-and-ligand preset as the base
            await this.plugin.managers.structure.component.applyPreset(structures, PresetStructureRepresentations['polymer-and-ligand']);

            // 2. Find and delete water components and branched SNFG 3D representations
            const waterComponents = this.plugin.state.data.select(
                StateSelection.Generators.ofTransformer(StateTransforms.Model.StructureComponent)
            ).filter(cell => {
                const type = cell.transform.params?.type;
                return type?.name === 'static' && type?.params === 'water';
            });

            const snfgRepresentations = this.plugin.state.data.select(
                StateSelection.Generators.ofTransformer(StateTransforms.Representation.StructureRepresentation3D)
            ).filter(cell => cell.transform.tags?.includes('branched-snfg-3d'));

            const deleteUpdate = this.plugin.state.data.build();
            for (const cell of waterComponents) {
                deleteUpdate.delete(cell.transform.ref);
            }
            for (const cell of snfgRepresentations) {
                deleteUpdate.delete(cell.transform.ref);
            }
            await deleteUpdate.commit();

            // 3. Customize remaining representations
            const reprCells = this.plugin.state.data.select(
                StateSelection.Generators.ofTransformer(StateTransforms.Representation.StructureRepresentation3D)
            );

            const reprUpdate = this.plugin.state.data.build();
            for (const cell of reprCells) {
                const params = cell.transform.params;
                if (!params) continue;

                const parentCell = this.plugin.state.data.cells.get(cell.transform.parent);
                const parentType = parentCell?.transform.params?.type;
                const isPolymer = parentType?.name === 'static' && parentType?.params === 'polymer';
                const isCoarse = parentType?.name === 'static' && parentType?.params === 'coarse';

                let newTypeName = params.type.name;
                let newTypeParams = { ...params.type.params };

                if (presetType === 'spacefill') {
                    newTypeName = 'spacefill';
                    newTypeParams = {
                        ...newTypeParams,
                        sizeFactor: 1.6
                    };
                } else if (presetType === 'ball-and-stick') {
                    newTypeName = 'ball-and-stick';
                    newTypeParams = {
                        ...newTypeParams,
                        sizeFactor: 1.2,
                        bondScale: 1.0,
                        bondRadius: 0.45
                    };
                } else if (presetType === 'cartoon') {
                    if (isPolymer) {
                        newTypeName = 'cartoon';
                        newTypeParams = {
                            ...newTypeParams,
                            sizeFactor: 0.6,
                            aspectRatio: 1.8,
                            tubularHelices: true
                        };
                    } else if (isCoarse) {
                        newTypeName = 'spacefill';
                        newTypeParams = {
                            ...newTypeParams,
                            sizeFactor: 1.6
                        };
                    } else {
                        // Ligand, ion, lipid, branched-ball-and-stick -> durable ball-and-stick
                        newTypeName = 'ball-and-stick';
                        newTypeParams = {
                            ...newTypeParams,
                            sizeFactor: 1.2,
                            bondScale: 1.0,
                            bondRadius: 0.45
                        };
                    }
                } else if (presetType === 'surface') {
                    newTypeName = 'molecular-surface';
                    newTypeParams = {
                        ...newTypeParams
                    };
                }

                reprUpdate.to(cell.transform.ref).update({
                    type: {
                        name: newTypeName,
                        params: newTypeParams
                    },
                    colorTheme: {
                        name: 'element-symbol',
                        params: {}
                    }
                });
            }
            await reprUpdate.commit();

        } catch (e) {
            console.error('Failed to apply thick print preset', e);
        } finally {
            this.setState({ busy: false });
        }
    };

    generateStruts = async () => {
        try {
            this.setState({ busy: true });
            const state = this.plugin.state.data;
            const structures = state.select(StateSelection.Generators.rootsOfType(PluginStateObject.Molecule.Structure));
            if (structures.length === 0) return;
            const structRef = structures[0].transform.ref;

            const update = state.build();
            const existing = state.select(StateSelection.Generators.ofTransformer(StrutsFromStructure));
            const strutsParams = this.state.strutsParams;

            if (existing.length > 0) {
                update.to(existing[0].transform.ref).update(strutsParams);
            } else {
                update.to(structRef)
                    .apply(StrutsFromStructure, strutsParams)
                    .apply(StateTransforms.Representation.ShapeRepresentation3D);
            }
            await update.commit();
        } catch (e) {
            console.error('Failed to generate support struts', e);
        } finally {
            this.setState({ busy: false });
        }
    };

    clearStruts = async () => {
        try {
            this.setState({ busy: true });
            const state = this.plugin.state.data;
            const existing = state.select(StateSelection.Generators.ofTransformer(StrutsFromStructure));
            if (existing.length > 0) {
                const update = state.build();
                update.delete(existing[0].transform.ref);
                await update.commit();
            }
        } catch (e) {
            console.error('Failed to clear support struts', e);
        } finally {
            this.setState({ busy: false });
        }
    };

    save = async () => {
        try {
            this.setState({ busy: true });
            const info = this.getStructureInfo();
            let scale = 1.0;
            if (info.maxDim > 0) {
                const scaleVal = parseFloat(this.state.scaleFactorInput);
                if (!isNaN(scaleVal) && scaleVal > 0) {
                    scale = scaleVal;
                } else {
                    const targetVal = parseFloat(this.state.targetSizeInput);
                    if (!isNaN(targetVal) && targetVal > 0) {
                        scale = targetVal / info.maxDim;
                    }
                }
            }
            const data = await this.geoControls.exportGeometry(scale);
            download(data.blob, data.filename);
        } catch (e) {
            console.error(e);
        } finally {
            this.setState({ busy: false });
        }
    };

    componentDidMount() {
        this.subscribe(this.plugin.state.data.events.changed, () => {
            if (!this.state.isCollapsed) this.forceUpdate();
        });
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this._geoControls?.dispose();
        this._geoControls = void 0;
    }

    renderControls(): JSX.Element {
        const info = this.getStructureInfo();

        if (info.maxDim !== this.lastMaxDim) {
            this.lastMaxDim = info.maxDim;
            if (info.maxDim > 0) {
                const targetVal = parseFloat(this.state.targetSizeInput) || 100;
                const scaleVal = targetVal / info.maxDim;
                setTimeout(() => {
                    this.setState({
                        scaleFactorInput: scaleVal.toFixed(4)
                    });
                }, 0);
            }
        }

        let scale = 0;
        if (info.maxDim > 0) {
            const scaleVal = parseFloat(this.state.scaleFactorInput);
            if (!isNaN(scaleVal) && scaleVal > 0) {
                scale = scaleVal;
            } else {
                const targetVal = parseFloat(this.state.targetSizeInput);
                if (!isNaN(targetVal) && targetVal > 0) {
                    scale = targetVal / info.maxDim;
                }
            }
        }

        // Write scale factor to customState for global access
        (this.plugin.customState as any).printScaleFactor = scale;

        const printX = (info.x * scale).toFixed(1);
        const printY = (info.y * scale).toFixed(1);
        const printZ = (info.z * scale).toFixed(1);

        const ctrl = this.geoControls;

        return <React.Fragment>
            <div className='msp-section-header'>Model Sizing & Scale</div>
            <div className='msp-control-row' style={{ padding: '4px 8px' }}>
                <span className='msp-control-label'>Molecule Size</span>
                <span style={{ float: 'right', fontSize: '0.9em', color: '#aaa' }}>
                    {info.x.toFixed(1)} × {info.y.toFixed(1)} × {info.z.toFixed(1)} Å
                </span>
            </div>

            <div className='msp-control-row' style={{ padding: '4px 8px' }}>
                <span className='msp-control-label'>Target Size (mm)</span>
                <input
                    type='number'
                    step='any'
                    className='msp-form-control'
                    style={{ width: '80px', float: 'right', textAlign: 'right' }}
                    value={this.state.targetSizeInput}
                    onChange={e => {
                        const valStr = e.target.value;
                        const val = parseFloat(valStr);
                        const nextState: Partial<ThreeDPrintUIState> = { targetSizeInput: valStr };
                        if (!isNaN(val) && val > 0 && info.maxDim > 0) {
                            nextState.scaleFactorInput = (val / info.maxDim).toFixed(4);
                        }
                        this.setState(nextState as ThreeDPrintUIState);
                    }}
                    disabled={this.state.busy || info.maxDim === 0}
                />
            </div>

            <div className='msp-control-row' style={{ padding: '4px 8px' }}>
                <span className='msp-control-label'>Print Size</span>
                <span style={{ float: 'right', fontSize: '0.9em', color: '#ffa500', fontWeight: 'bold' }}>
                    {printX} × {printY} × {printZ} mm
                </span>
            </div>

            <div className='msp-control-row' style={{ padding: '4px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className='msp-control-label'>Scale Factor (mm/Å)</span>
                <input
                    type='number'
                    step='any'
                    className='msp-form-control'
                    style={{ width: '80px', float: 'right', textAlign: 'right' }}
                    value={this.state.scaleFactorInput}
                    onChange={e => {
                        const valStr = e.target.value;
                        const val = parseFloat(valStr);
                        const nextState: Partial<ThreeDPrintUIState> = { scaleFactorInput: valStr };
                        if (!isNaN(val) && val > 0 && info.maxDim > 0) {
                            nextState.targetSizeInput = (val * info.maxDim).toFixed(1);
                        }
                        this.setState(nextState as ThreeDPrintUIState);
                    }}
                    disabled={this.state.busy || info.maxDim === 0}
                />
            </div>

            <div className='msp-section-header'>Durable Print Presets</div>
            <div className='msp-btn-row' style={{ margin: '8px 0' }}>
                <Button onClick={() => this.applyPreset('spacefill')} disabled={this.state.busy || info.maxDim === 0} style={{ width: '23%', marginRight: '2%' }}>
                    Spacefill
                </Button>
                <Button onClick={() => this.applyPreset('ball-and-stick')} disabled={this.state.busy || info.maxDim === 0} style={{ width: '23%', marginRight: '2%' }}>
                    B&S
                </Button>
                <Button onClick={() => this.applyPreset('cartoon')} disabled={this.state.busy || info.maxDim === 0} style={{ width: '23%', marginRight: '2%' }}>
                    Cartoon
                </Button>
                <Button onClick={() => this.applyPreset('surface')} disabled={this.state.busy || info.maxDim === 0} style={{ width: '25%' }}>
                    Surface
                </Button>
            </div>

            <div className='msp-section-header'>Mechanical Struts Support</div>
            <ParameterControls
                params={StrutsParams}
                values={this.state.strutsParams}
                onChangeValues={xs => this.setState({ strutsParams: xs })}
                isDisabled={this.state.busy || info.maxDim === 0}
            />
            <div className='msp-btn-row' style={{ margin: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                <Button icon={BuildSvg} onClick={this.generateStruts} disabled={this.state.busy || info.maxDim === 0} style={{ width: '48%', marginRight: '4%' }}>
                    Generate
                </Button>
                <Button icon={ClearSvg} onClick={this.clearStruts} disabled={this.state.busy || info.maxDim === 0} style={{ width: '48%' }}>
                    Clear
                </Button>
            </div>

            <div className='msp-section-header'>Export printable File</div>
            <ParameterControls
                params={GeometryParams}
                values={ctrl.behaviors.params.value}
                onChangeValues={xs => {
                    ctrl.behaviors.params.next(xs);
                    this.forceUpdate();
                }}
                isDisabled={this.state.busy}
            />
            <Button icon={GetAppSvg}
                onClick={this.save} style={{ marginTop: '6px' }}
                disabled={this.state.busy || !this.plugin.canvas3d?.reprCount.value}>
                Save Printable Model
            </Button>
        </React.Fragment>;
    }
}
