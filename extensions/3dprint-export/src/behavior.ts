/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Karel Berka <karel.berka@upol.cz>
 */

import { PluginBehavior } from '@molstar/plugin/behavior/behavior';
import { StrutsFromStructure, StandBaseFromStructure, StandPillarsFromStructure } from './struts.js';

export const ThreeDPrintExport = PluginBehavior.create({
  name: 'threedprint-export',
  category: 'misc',
  display: {
    name: '3D-Print Planning',
    description: 'Planning tools for 3D printing molecular models',
  },
  ctor: class extends PluginBehavior.Handler {
    register(): void {
      this.ctx.state.data.actions.add(StrutsFromStructure);
      this.ctx.state.data.actions.add(StandBaseFromStructure);
      this.ctx.state.data.actions.add(StandPillarsFromStructure);
    }
    unregister(): void {
      this.ctx.state.data.actions.remove(StrutsFromStructure);
      this.ctx.state.data.actions.remove(StandBaseFromStructure);
      this.ctx.state.data.actions.remove(StandPillarsFromStructure);
    }
  },
});
