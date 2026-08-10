# 3DP-Mol* – Web-Based 3D-Printing Planning for Molecules

**3DP-Mol\*** is an interactive tool designed for structural biologists, educators, and makers to prepare macromolecular structures for 3D printing directly in their web browser. 

This repository is a customized fork of **[Mol\*](https://github.com/molstar/molstar)**, integrating the automated printing planning algorithms originally developed in the JSmol/Jmol-based **[3DP-Jmol](https://github.com/mariusmihasan/3DP-Jmol)** tool.

🚀 **[Live Demo Page](https://karelberka.github.io/molstar-3dprint/)**

---

## Features

- **Dynamic Print Sizing**: Specify target sizes in millimeters or define a scale factor; both input fields are fully interactive and update one another in real time.
- **Thick Presets**: One-click durable representations (Spacefill, Ball & Stick, Cartoon, and Surface) configured to generate print-stable meshes that resist delamination and breakage.
- **Support Struts Engine**: Automatically calculates internal support struts for protein and nucleic acid backbones, as well as multi-point stabilization struts for small molecules/ligands.
- **Printable Pedestal/Stand & Pillars**: Automatically generates a circular base stand and vertical support pillars beneath the molecule. Stand thickness, horizontal padding, and pillar count/radius are fully adjustable.
- **Circumference Text Embossing**: Embosses or engraves 3D text (such as PDB entry IDs or molecule names) directly onto the outer circumference of the stand plate.
- **Detachable Stand option**: Leaves a configurable physical gap between the pillars and the molecule for easy post-print removal.
- **Multi-pass Exporting**: When using a detachable stand, the exporter splits the output into two separate files (e.g. `{name}_protein` and `{name}_stand`), allowing them to be printed in different colors or materials.
- **Molecule Database Imports**: Built-in autocompletion and structural downloading for PDB, AlphaFold DB, ESM Metagenomic Atlas, MDDB, PubChem, and ChEMBL. Pulls true 3D conformers for small molecules from PubChem via name or InChIKey translation.
- **Volumetric Orbital Visualization**: Parses Gaussian Cube (`.cube` / `.cub`) files to render dual-phase volumetric isosurfaces representing positive wave phases (cyan/blue) and negative wave phases (red). Includes real-time Isovalue adjustments and lobe visibility toggles in the sidebar.
- **Pre-Scaled Exports**: Exports STL, OBJ, GLB, and USDZ files with vertices already scaled to the chosen physical size in millimeters.

---

## Changes to Original Mol*

The following modifications were made to the core [Mol\*](https://molstar.org) project to support 3D-print planning:

### 1. 3D-Printing planning & Struts/Stand Engine (`src/extensions/3dprint-export/`)
- **`struts.ts`**:
  - Implements the backbone-to-backbone support strut calculation by checking Euclidean distances between sequential anchors (`CA` for proteins, `P` for DNA/RNA).
  - Implements ligand stabilization using up to three polymer backbone anchor points to ensure small molecule ligands remain rigid during slicing and printing.
  - Implements circular stand base plate (`StandBaseFromStructure`) and vertical support pillars (`StandPillarsFromStructure`) calculation.
  - Implements 3D text generation warped along the stand's circumference (`generateCircumferenceText`).
  - Registers the state transformers `StrutsFromStructure`, `StandBaseFromStructure`, and `StandPillarsFromStructure` to render struts, base, and pillars dynamically in the viewport.
- **`ui.tsx`**:
  - Implements the "3D-Print Planning" React component.
  - Manages dual, synchronized target size and scale factor input boxes.
  - Provides controls for support stand, pillars, text embossing, and detachable clearance gap.
  - Adds helper buttons to copy PDB ID or title to the stand text input.
  - Updates the active scale factor globally in the plugin's `customState.printScaleFactor`.

### 2. Physical Scale Exporters & Multi-pass Support (`src/extensions/geo-export/`)
- Updated **`StlExporter`**, **`ObjExporter`**, **`GlbExporter`**, and **`UsdzExporter`** to accept a `scale` parameter in their constructors to scale molecular coordinate vectors to the selected physical size (in millimeters) directly in the exported files.
- **`controls.ts`**:
  - Implements multi-pass export. If a detachable stand is active, it hides support representations to export the protein only, then hides protein representations to export the stand only, returning both files in a single download action.
  - Modified `GeometryControls` to propagate the scale factor during the export task.

### 3. Application Viewer Integration (`src/apps/viewer/`)
- **`app.ts`**: Updated `exportGeometry` to pull the active scale factor from the plugin's custom state registry and feed it into the geometry exporter, returning additional files if multi-pass export is triggered.
- **`controls.tsx`**: Configured custom structure controls so that default panels (Source, Measurements, Components) start collapsed, while keeping the **3D-Print Planning** panel expanded.
- **`extensions.ts`**: Registered our custom `ThreeDPrintExport` behavior.

### 4. Direct Web Exporter Page Integration
- Configured a split-screen webpage layout in `index.html` with a glassmorphism sidebar for files and downloads, leaving the remaining screen as a full-height viewport canvas. Included selectors for new database options and controls for molecular orbital isovalues and toggles.
- Configured `assets/js/viewer.js` to initialize Mol* and enable direct STL, OBJ, and GLB geometry exports with correct physical scaling. Added autocomplete APIs and loading routines for PubChem, ChEMBL (via InChIKey lookup to PubChem 3D conformers), and PQR Gaussian Cube files (with volumetric isosurfaces).
- Configured `.gitignore` to track the custom built `build/viewer/molstar.js` and `build/viewer/molstar.css` files, allowing GitHub Pages to serve them.

---

## Local Development & Building

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the application**:
   ```bash
   npm run build:apps
   ```

3. **Run a local server**:
   ```bash
   npm run serve
   ```
   Navigate to `http://localhost:1338` in your browser.
