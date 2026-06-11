// viewer.js – ES module version
// Import Mol* Viewer (built-in geometry exporter is used directly)
const Viewer = molstar.Viewer;

(async function () {
  const fileInput = document.getElementById('file-input');
  const exportPanel = document.querySelector('.export-panel');
  const btnSTL = document.getElementById('export-stl');
  const btnOBJ = document.getElementById('export-obj');
  const btnGLB = document.getElementById('export-glb');

  // Initialize Mol* viewer
  const viewerDiv = document.getElementById('viewer');
  let viewer;
  try {
    viewer = await Viewer.create(viewerDiv, {
      layoutIsExpanded: false,
      layoutShowControls: true,
      layoutShowRemoteState: false,
      layoutShowSequence: false,
      layoutShowLog: false,
      layoutShowLeftPanel: false,
      collapseLeftPanel: true,
      collapseRightPanel: false,
      disabledExtensions: ['mp4-export', 'geo-export'],
    });
  } catch (err) {
    console.error('Failed to initialize MolStar viewer:', err);
    return;
  }

  // Map file extensions to Mol* format identifiers
  const formatMap = {
    pdb: 'pdb',
    cif: 'mmcif',
    mmcif: 'mmcif',
    bcif: 'bcif',
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

    const isBinary = ext === 'bcif';
    const data = isBinary ? await file.arrayBuffer() : await file.text();
    await viewer.plugin.clear();

    // Wait for the clear state update to be fully completed
    while (viewer.plugin.isBusy) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    try {
      await viewer.loadStructureFromData(data, format);
    } catch (err) {
      console.error(err);
      alert('Failed to load structure.');
      return;
    }
    // Center and orient for printing
    try {
      viewer.plugin.managers.camera.reset();
    } catch (e) { console.warn('Camera command error', e); }
    exportPanel.style.display = 'flex';
    btnSTL.disabled = btnOBJ.disabled = btnGLB.disabled = false;
  });

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
    try {
      const data = await viewer.exportGeometry('stl');
      downloadBlob(data.blob, data.filename);
    } catch (e) {
      console.error('Failed to export STL:', e);
      alert('Failed to export STL geometry.');
    }
  }

  async function exportOBJ() {
    try {
      const data = await viewer.exportGeometry('obj');
      downloadBlob(data.blob, data.filename);
    } catch (e) {
      console.error('Failed to export OBJ:', e);
      alert('Failed to export OBJ geometry.');
    }
  }

  async function exportGLB() {
    try {
      const data = await viewer.exportGeometry('glb');
      downloadBlob(data.blob, data.filename);
    } catch (e) {
      console.error('Failed to export GLB:', e);
      alert('Failed to export GLB geometry.');
    }
  }

  btnSTL.addEventListener('click', exportSTL);
  btnOBJ.addEventListener('click', exportOBJ);
  btnGLB.addEventListener('click', exportGLB);
})();
