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

  // Database Import UI Integration
  const dbSelect = document.getElementById('db-select');
  const dbInput = document.getElementById('db-input');
  const autocompleteList = document.getElementById('autocomplete-list');
  const importBtn = document.getElementById('import-btn');
  const searchResults = document.getElementById('search-results');

  // Handle dbSelect change
  dbSelect.addEventListener('change', () => {
    const db = dbSelect.value;
    searchResults.style.display = 'none';
    searchResults.innerHTML = '';
    autocompleteList.style.display = 'none';
    autocompleteList.innerHTML = '';
    dbInput.value = '';

    if (db === 'pdb') {
      dbInput.placeholder = 'Enter PDB ID (e.g., 1tqn) or name';
    } else if (db === 'afdb') {
      dbInput.placeholder = 'Enter UniProt ID (e.g., P00533)';
    } else if (db === 'esmatlas') {
      dbInput.placeholder = 'Enter MGnify ID (e.g., MGYP003670600000)';
    }
  });

  // Fetch PDBe Autocomplete suggestions
  let debounceTimeout = null;
  dbInput.addEventListener('input', () => {
    if (dbSelect.value !== 'pdb') {
      autocompleteList.style.display = 'none';
      return;
    }

    clearTimeout(debounceTimeout);
    const query = dbInput.value.trim();
    if (query.length < 2) {
      autocompleteList.style.display = 'none';
      return;
    }

    debounceTimeout = setTimeout(async () => {
      try {
        const res = await fetch(`https://www.ebi.ac.uk/pdbe/search/pdb-autocomplete/select?rows=10&wt=json&q=value:${encodeURIComponent(query)}*`);
        if (!res.ok) return;
        const data = await res.json();
        const docs = data.response && data.response.docs ? data.response.docs : [];

        if (docs.length === 0) {
          autocompleteList.style.display = 'none';
          return;
        }

        autocompleteList.innerHTML = '';
        docs.forEach(doc => {
          const div = document.createElement('div');
          div.className = 'autocomplete-item';

          let displayLabel = '';
          if (doc.var_name === 'pdb_id') {
            displayLabel = `<strong>PDB ID:</strong> ${doc.value}`;
          } else {
            const cat = doc.category || doc.var_name;
            const entries = doc.num_pdb_entries ? ` (${doc.num_pdb_entries} entries)` : '';
            displayLabel = `<strong>${cat}:</strong> ${doc.value}${entries}`;
          }

          div.innerHTML = displayLabel;
          div.addEventListener('click', () => {
            dbInput.value = doc.value;
            autocompleteList.style.display = 'none';
            if (doc.var_name === 'pdb_id') {
              loadPdb(doc.value);
            } else {
              searchPdbTerm(doc.value, doc.var_name);
            }
          });
          autocompleteList.appendChild(div);
        });
        autocompleteList.style.display = 'block';
      } catch (err) {
        console.error('Error fetching autocomplete:', err);
      }
    }, 250);
  });

  // Hide autocomplete when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target !== dbInput && e.target !== autocompleteList) {
      autocompleteList.style.display = 'none';
    }
  });

  // Search PDB entries by term
  async function searchPdbTerm(term, varName) {
    try {
      searchResults.innerHTML = '<div style="padding: 0.5rem; font-size: 0.8125rem; color: var(--text-secondary);">Searching matching structures...</div>';
      searchResults.style.display = 'block';

      const url = `https://www.ebi.ac.uk/pdbe/search/pdb/select?q=*:*&group=true&group.field=pdb_id&start=0&rows=10&group.ngroups=true&fl=pdb_id,title&json.nl=map&fq=${encodeURIComponent(varName)}:${encodeURIComponent('"' + term + '"')}&sort=overall_quality+desc&wt=json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Search request failed');
      const data = await res.json();

      const docs = data.response && data.response.docs ? data.response.docs : [];
      if (docs.length === 0) {
        searchResults.innerHTML = '<div style="padding: 0.5rem; font-size: 0.8125rem; color: var(--text-secondary);">No matching structures found.</div>';
        return;
      }

      searchResults.innerHTML = '<div style="padding: 0.5rem 0.5rem 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase;">Select a structure to load:</div>';
      docs.forEach(doc => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <div class="search-result-title">${doc.pdb_id.toUpperCase()}</div>
          <div class="search-result-desc" title="${doc.title}">${doc.title}</div>
        `;
        item.addEventListener('click', () => {
          dbInput.value = doc.pdb_id;
          searchResults.style.display = 'none';
          loadPdb(doc.pdb_id);
        });
        searchResults.appendChild(item);
      });
    } catch (err) {
      console.error(err);
      searchResults.innerHTML = `<div style="padding: 0.5rem; font-size: 0.8125rem; color: #ef4444;">Search failed: ${err.message}</div>`;
    }
  }

  // Load PDB structure
  async function loadPdb(id) {
    id = id.trim().toLowerCase();
    if (!id || id.length !== 4) {
      alert('PDB ID must be 4 characters.');
      return;
    }

    setLoadingState(true);
    // 1. Try PDBe BinaryCIF (fastest)
    const pdbeBcifUrl = `https://www.ebi.ac.uk/pdbe/entry-files/download/${id}.bcif`;
    try {
      await loadFromUrl(pdbeBcifUrl, 'bcif');
      setLoadingState(false);
      searchResults.style.display = 'none';
    } catch (err) {
      console.warn('PDBe BinaryCIF download failed, trying RCSB mmCIF fallback...', err);
      // 2. Fallback to RCSB mmCIF
      const rcsbCifUrl = `https://files.rcsb.org/download/${id.toUpperCase()}.cif`;
      try {
        await loadFromUrl(rcsbCifUrl, 'mmcif');
        setLoadingState(false);
        searchResults.style.display = 'none';
      } catch (errFallback) {
        console.error('Fallback RCSB mmCIF download failed:', errFallback);
        alert(`Failed to load PDB structure ${id.toUpperCase()}.`);
        setLoadingState(false);
      }
    }
  }

  // General load from URL helper
  async function loadFromUrl(url, format) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const isBinary = format === 'bcif';
    const data = isBinary ? await response.arrayBuffer() : await response.text();

    await viewer.plugin.clear();
    while (viewer.plugin.isBusy) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    await viewer.loadStructureFromData(data, format);
    try {
      viewer.plugin.managers.camera.reset();
    } catch (e) {
      console.warn('Camera reset error', e);
    }
    exportPanel.style.display = 'flex';
    btnSTL.disabled = btnOBJ.disabled = btnGLB.disabled = false;
  }

  function setLoadingState(loading) {
    if (loading) {
      importBtn.disabled = true;
      importBtn.textContent = 'Loading...';
    } else {
      importBtn.disabled = false;
      importBtn.textContent = 'Load Structure';
    }
  }

  // Load Button listener
  importBtn.addEventListener('click', () => {
    const db = dbSelect.value;
    const val = dbInput.value.trim();
    if (!val) {
      alert('Please enter an identifier.');
      return;
    }

    if (db === 'pdb') {
      loadPdb(val);
    } else if (db === 'afdb') {
      loadAfdb(val);
    } else if (db === 'esmatlas') {
      loadEsmAtlas(val);
    }
  });

  // Load AFDB structure
  async function loadAfdb(uniprot) {
    uniprot = uniprot.trim().toUpperCase();
    if (!uniprot) return;
    setLoadingState(true);
    try {
      await viewer.plugin.clear();
      while (viewer.plugin.isBusy) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      // Load using MolStar's native AlphaFold DB task (which resolves version dynamically)
      await viewer.loadAlphaFoldDb(uniprot);

      while (viewer.plugin.isBusy) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      try {
        viewer.plugin.managers.camera.reset();
      } catch (e) {
        console.warn('Camera reset error', e);
      }
      exportPanel.style.display = 'flex';
      btnSTL.disabled = btnOBJ.disabled = btnGLB.disabled = false;
      searchResults.style.display = 'none';
      setLoadingState(false);
    } catch (err) {
      console.error('Failed to load AlphaFold structure natively, trying fallback...', err);
      // Fallback: Fetch EBI API manually and load via loadFromUrl
      try {
        const apiRes = await fetch(`https://www.alphafold.ebi.ac.uk/api/prediction/${uniprot}`);
        if (!apiRes.ok) throw new Error(`EBI prediction API status ${apiRes.status}`);
        const apiData = await apiRes.json();
        if (Array.isArray(apiData) && apiData.length > 0) {
          const cifUrl = apiData[0].cifUrl;
          if (!cifUrl) throw new Error('No cifUrl found in prediction data');
          await loadFromUrl(cifUrl, 'mmcif');
          setLoadingState(false);
        } else {
          throw new Error('Empty prediction data array');
        }
      } catch (fallbackErr) {
        console.error('Fallback AlphaFold loader failed:', fallbackErr);
        alert(`Failed to load AlphaFold structure for UniProt ID ${uniprot}.`);
        setLoadingState(false);
      }
    }
  }

  // Load ESM Atlas structure
  async function loadEsmAtlas(id) {
    id = id.trim();
    if (!id) return;
    setLoadingState(true);
    // ESM Atlas fetch predicted structure endpoint does not expect ".pdb" extension in the path URL
    const url = `https://api.esmatlas.com/fetchPredictedStructure/${id}`;
    try {
      await loadFromUrl(url, 'pdb');
      setLoadingState(false);
    } catch (err) {
      console.error(err);
      alert(`Failed to load ESM Atlas structure for ID ${id}.`);
      setLoadingState(false);
    }
  }
})();
