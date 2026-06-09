// viewer.js – Handles file upload, Mol* loading, mesh generation, and export
// Assumes global Molstar (from CDN) and THREE (from CDN)

(function () {
  const fileInput = document.getElementById('file-input');
  const exportPanel = document.querySelector('.export-panel');
  const btnSTL = document.getElementById('export-stl');
  const btnOBJ = document.getElementById('export-obj');
  const btnGLB = document.getElementById('export-glb');

  // Initialize Mol* viewer
  const viewerDiv = document.getElementById('viewer');
  const viewer = new Molstar.Viewer(viewerDiv, {
    layoutIsExpanded: false,
    hideControls: false,
    // Use a minimal UI to keep design clean
    controls: { default: true },
  });

  // Helper: map extension to Mol* format name
  const formatMap = {
    pdb: 'pdb',
    cif: 'mmcif',
    mmcif: 'mmcif',
    sdf: 'sdf',
    mol2: 'mol2',
    xyz: 'xyz'
  };

  // File size limit – 100 MB
  const MAX_SIZE = 100 * 1024 * 1024;

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
    // Clear any previous structure
    await viewer.clear();
    // Load the structure from binary data
    try {
      await viewer.loadStructureFromData(arrayBuffer, { ext: format });
    } catch (err) {
      console.error(err);
      alert('Failed to load structure.');
      return;
    }
    // Center and orient the model for printable view
    try {
      // Focus camera on the model and reset orientation
      await viewer.plugin.commands.execute('camera.reset', {});
      await viewer.plugin.commands.execute('camera.focus', {});
    } catch (e) { console.warn('Camera commands unavailable', e); }
    // Enable export UI
    exportPanel.style.display = 'flex';
    btnSTL.disabled = false;
    btnOBJ.disabled = false;
    btnGLB.disabled = false;
  });

  // Helper to collect meshes from Mol* scene
  function collectExportMesh() {
    const scene = viewer.plugin.canvas3d.scene;
    const group = new THREE.Group();
    scene.traverse((obj) => {
      if (obj.isMesh) {
        // Clone geometry and material to avoid reference issues
        const clone = obj.clone();
        group.add(clone);
      }
    });
    return group;
  }

  // Export functions
  async function exportSTL() {
    const mesh = collectExportMesh();
    const exporter = new THREE.STLExporter();
    const data = exporter.parse(mesh);
    const blob = new Blob([data], { type: 'application/vnd.ms-pki.stl' });
    downloadBlob(blob, 'model.stl');
  }

  async function exportOBJ() {
    const mesh = collectExportMesh();
    const exporter = new THREE.OBJExporter();
    const data = exporter.parse(mesh);
    const blob = new Blob([data], { type: 'text/plain' });
    downloadBlob(blob, 'model.obj');
  }

  async function exportGLB() {
    const mesh = collectExportMesh();
    const exporter = new THREE.GLTFExporter();
    exporter.parse(
      mesh,
      (result) => {
        const output = JSON.stringify(result);
        const blob = new Blob([output], { type: 'model/gltf+json' });
        downloadBlob(blob, 'model.glb');
      },
      { binary: true }
    );
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

  // Bind export buttons
  btnSTL.addEventListener('click', exportSTL);
  btnOBJ.addEventListener('click', exportOBJ);
  btnGLB.addEventListener('click', exportGLB);
})();
