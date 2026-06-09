// viewer.js – ES module version
// Import Mol* Viewer and Three.js (module builds)
import { Viewer } from 'https://cdn.jsdelivr.net/npm/molstar@latest/build/viewer/molstar.js';
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { STLExporter } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/exporters/STLExporter.js';
import { OBJExporter } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/exporters/OBJExporter.js';
import { GLTFExporter } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/exporters/GLTFExporter.js';

(function () {
  const fileInput = document.getElementById('file-input');
  const exportPanel = document.querySelector('.export-panel');
  const btnSTL = document.getElementById('export-stl');
  const btnOBJ = document.getElementById('export-obj');
  const btnGLB = document.getElementById('export-glb');

  // Initialize Mol* viewer
  const viewerDiv = document.getElementById('viewer');
  const viewer = new Viewer(viewerDiv, {
    layoutIsExpanded: false,
    hideControls: false,
    // Minimal UI for a clean look
    controls: { default: true },
  });

  // Map file extensions to Mol* format identifiers
  const formatMap = {
    pdb: 'pdb',
    cif: 'mmcif',
    mmcif: 'mmcif',
    sdf: 'sdf',
    mol2: 'mol2',
    xyz: 'xyz'
  };

  const MAX_SIZE = 100 * 1024 * 1024; // 100 MB

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_SIZE) {
      alert('File exceeds 100 MB limit.');
      return;
    }
    const ext = file.name.split('.').pop().toLowerCase();
    const format = formatMap[ext];
    if (!format) {
      alert('Unsupported file format.');
      return;
    }
    const arrayBuffer = await file.arrayBuffer();
    await viewer.clear();
    try {
      await viewer.loadStructureFromData(arrayBuffer, { ext: format });
    } catch (err) {
      console.error(err);
      alert('Failed to load structure.');
      return;
    }
    // Center and orient for printing
    try {
      await viewer.plugin.commands.execute('camera.reset', {});
      await viewer.plugin.commands.execute('camera.focus', {});
    } catch (e) { console.warn('Camera command error', e); }
    exportPanel.style.display = 'flex';
    btnSTL.disabled = btnOBJ.disabled = btnGLB.disabled = false;
  });

  function collectExportMesh() {
    const scene = viewer.plugin.canvas3d.scene;
    const group = new THREE.Group();
    scene.traverse((obj) => {
      if (obj.isMesh) {
        const cloned = obj.clone();
        group.add(cloned);
      }
    });
    return group;
  }

  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  async function exportSTL() {
    const mesh = collectExportMesh();
    const exporter = new STLExporter();
    const data = exporter.parse(mesh);
    const blob = new Blob([data], { type: 'application/vnd.ms-pki.stl' });
    downloadBlob(blob, 'model.stl');
  }

  async function exportOBJ() {
    const mesh = collectExportMesh();
    const exporter = new OBJExporter();
    const data = exporter.parse(mesh);
    const blob = new Blob([data], { type: 'text/plain' });
    downloadBlob(blob, 'model.obj');
  }

  async function exportGLB() {
    const mesh = collectExportMesh();
    const exporter = new GLTFExporter();
    exporter.parse(
      mesh,
      (result) => {
        const blob = new Blob([result], { type: 'model/gltf-binary' });
        downloadBlob(blob, 'model.glb');
      },
      { binary: true }
    );
  }

  btnSTL.addEventListener('click', exportSTL);
  btnOBJ.addEventListener('click', exportOBJ);
  btnGLB.addEventListener('click', exportGLB);
})();
