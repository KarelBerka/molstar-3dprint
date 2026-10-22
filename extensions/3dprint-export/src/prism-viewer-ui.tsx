/** @jsxImportSource @molstar/prism-ui/dom */

/**
 * Copyright (c) 2026 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Karel Berka <karel.berka@upol.cz>
 */

import { Button, domView, observableState, ParamsForm } from '@molstar/prism-ui';
import { ParamsFormModel } from '@molstar/prism-ui/forms/params-form';
import type { ViewerExtensionUI, ViewerUIContext } from '@molstar/prism-viewer/spec';
import { SectionId } from './prism-viewer.js';
import { StrutsParams } from './struts.js';

export function threeDPrintUI(ctx: ViewerUIContext): ViewerExtensionUI {
  return {
    sections: [
      {
        id: SectionId,
        slot: 'export',
        title: '3D-Print Planning',
        icon: 'box',
        order: 10,
        keywords: ['3d print', 'struts', 'stand', 'pedestal', 'pillars', 'emboss', 'maker'],
        render: domView(() => {
          const form = new ParamsFormModel(StrutsParams);
          const busy = observableState(false);

          const applyPreset = async (preset: 'spacefill' | 'ball-and-stick' | 'cartoon' | 'surface') => {
            const op = ctx.api['3dprint']?.applyPreset;
            if (busy.value || !op) return;
            busy.set(true);
            try {
              await op({ preset });
            } finally {
              busy.set(false);
            }
          };

          const generate = async () => {
            const op = ctx.api['3dprint']?.generate;
            if (busy.value || !op) return;
            busy.set(true);
            try {
              await op(form.values.value);
            } finally {
              busy.set(false);
            }
          };

          const clear = async () => {
            const op = ctx.api['3dprint']?.clear;
            if (busy.value || !op) return;
            busy.set(true);
            try {
              await op({});
            } finally {
              busy.set(false);
            }
          };

          const useEntryId = () => {
            const structs = ctx.sources.structures.value;
            if (structs.length > 0) {
              const id = structs[0].model;
              if (id) form.set('standText' as any, id.toUpperCase() as any);
            }
          };

          const useEntryTitle = () => {
            const structs = ctx.sources.structures.value;
            if (structs.length > 0) {
              const label = structs[0].label;
              if (label) {
                const clean = label.length > 20 ? label.substring(0, 17) + '...' : label;
                form.set('standText' as any, clean as any);
              }
            }
          };

          return (
            <div style="display: grid; gap: var(--msp-space-3); min-width: 0">
              <div style="font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--msp-color-text-secondary)">
                Durable Presets
              </div>
              <div style="display: flex; gap: var(--msp-space-1); flex-wrap: wrap">
                <Button size="sm" onClick={() => void applyPreset('spacefill')} disabled={busy}>
                  Spacefill
                </Button>
                <Button size="sm" onClick={() => void applyPreset('ball-and-stick')} disabled={busy}>
                  B&S
                </Button>
                <Button size="sm" onClick={() => void applyPreset('cartoon')} disabled={busy}>
                  Cartoon
                </Button>
                <Button size="sm" onClick={() => void applyPreset('surface')} disabled={busy}>
                  Surface
                </Button>
              </div>

              <div style="font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--msp-color-text-secondary); margin-top: var(--msp-space-2)">
                Supports & Stand
              </div>
              <ParamsForm form={form} />

              <div style="display: flex; gap: var(--msp-space-2)">
                <Button size="xs" variant="ghost" onClick={useEntryId} title="Copy entry ID to stand text">
                  Use ID
                </Button>
                <Button size="xs" variant="ghost" onClick={useEntryTitle} title="Copy title to stand text">
                  Use Title
                </Button>
              </div>

              <div style="display: flex; gap: var(--msp-space-2); margin-top: var(--msp-space-2)">
                <Button variant="primary" block onClick={() => void generate()} disabled={busy}>
                  Generate Supports
                </Button>
                <Button variant="default" onClick={() => void clear()} disabled={busy}>
                  Clear
                </Button>
              </div>
            </div>
          );
        }),
      },
    ],
  };
}
