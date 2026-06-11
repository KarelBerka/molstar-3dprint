import { PluginBehavior } from '../../mol-plugin/behavior/behavior';
import { ThreeDPrintPlanningUI } from './ui';

export const ThreeDPrintExport = PluginBehavior.create<{}>({
    name: 'extension-3dprint-export',
    category: 'misc',
    display: {
        name: '3D‑Print Model Export'
    },
    ctor: class extends PluginBehavior.Handler<{}> {
        register(): void {
            this.ctx.customStructureControls.set('3dprint-export', ThreeDPrintPlanningUI as any);
        }
        update() { return false; }
        unregister() {
            this.ctx.customStructureControls.delete('3dprint-export');
        }
    },
    params: () => ({})
});
