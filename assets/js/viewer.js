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
  let orbitalVolumePosNode = null;
  let orbitalVolumeNegNode = null;
  let orbitalVolumeData = null;
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
    xyz: 'xyz',
    cube: 'cube',
    cub: 'cube'
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
    if (format === 'cube') {
      await loadCubeFromData(data);
    } else {
      // Hide orbital controls for non-cube files
      document.getElementById('orbital-controls').style.display = 'none';

      await viewer.plugin.clear();
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
    }
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
      if (data.additionalFiles) {
        data.additionalFiles.forEach(f => downloadBlob(f.blob, f.filename));
      }
    } catch (e) {
      console.error('Failed to export STL:', e);
      alert('Failed to export STL geometry.');
    }
  }

  async function exportOBJ() {
    try {
      const data = await viewer.exportGeometry('obj');
      downloadBlob(data.blob, data.filename);
      if (data.additionalFiles) {
        data.additionalFiles.forEach(f => downloadBlob(f.blob, f.filename));
      }
    } catch (e) {
      console.error('Failed to export OBJ:', e);
      alert('Failed to export OBJ geometry.');
    }
  }

  async function exportGLB() {
    try {
      const data = await viewer.exportGeometry('glb');
      downloadBlob(data.blob, data.filename);
      if (data.additionalFiles) {
        data.additionalFiles.forEach(f => downloadBlob(f.blob, f.filename));
      }
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

    // Hide orbital controls unless we are switching to orbitals
    if (db !== 'orbitals') {
      document.getElementById('orbital-controls').style.display = 'none';
    }

    if (db === 'pdb') {
      dbInput.placeholder = 'Enter PDB ID (e.g., 1tqn) or name';
    } else if (db === 'afdb') {
      dbInput.placeholder = 'Enter UniProt ID (e.g., P00533)';
    } else if (db === 'esmatlas') {
      dbInput.placeholder = 'Enter MGnify ID (e.g., MGYP003670600000) or sequence';
    } else if (db === 'mddb') {
      dbInput.placeholder = 'Enter MDDB ID (e.g., A0001)';
    } else if (db === 'pubchem') {
      dbInput.placeholder = 'Enter Compound Name (e.g., aspirin) or CID';
    } else if (db === 'chembl') {
      dbInput.placeholder = 'Enter Molecule Name (e.g., caffeine) or ChEMBL ID';
    } else if (db === 'orbitals') {
      dbInput.placeholder = 'Enter "benzene" for demo, or InChIKey for PQR';
      // Show orbital controls
      document.getElementById('orbital-controls').style.display = 'flex';
    }
  });

  // Fetch PDBe Autocomplete suggestions
  let debounceTimeout = null;
  dbInput.addEventListener('input', () => {
    const db = dbSelect.value;
    if (db !== 'pdb' && db !== 'pubchem' && db !== 'chembl') {
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
        if (db === 'pdb') {
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
        } else if (db === 'pubchem') {
          const res = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/autocomplete/compound/${encodeURIComponent(query)}/json`);
          if (!res.ok) return;
          const data = await res.json();
          const terms = data.dictionary_terms || [];

          if (terms.length === 0) {
            autocompleteList.style.display = 'none';
            return;
          }

          autocompleteList.innerHTML = '';
          terms.forEach(term => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            div.innerHTML = `<strong>Compound:</strong> ${term}`;
            div.addEventListener('click', () => {
              dbInput.value = term;
              autocompleteList.style.display = 'none';
              loadPubChem(term);
            });
            autocompleteList.appendChild(div);
          });
          autocompleteList.style.display = 'block';
        } else if (db === 'chembl') {
          const res = await fetch(`https://www.ebi.ac.uk/chembl/api/data/molecule?q=${encodeURIComponent(query)}&format=json&limit=10`);
          if (!res.ok) return;
          const data = await res.json();
          const molecules = data.molecules || [];

          if (molecules.length === 0) {
            autocompleteList.style.display = 'none';
            return;
          }

          autocompleteList.innerHTML = '';
          molecules.forEach(mol => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            const name = mol.pref_name || mol.molecule_chembl_id;
            const extra = mol.pref_name ? ` (${mol.molecule_chembl_id})` : '';
            div.innerHTML = `<strong>Molecule:</strong> ${name}${extra}`;
            div.addEventListener('click', () => {
              dbInput.value = mol.molecule_chembl_id;
              autocompleteList.style.display = 'none';
              loadChEMBL(mol.molecule_chembl_id, mol.molecule_structures ? mol.molecule_structures.standard_inchi_key : undefined);
            });
            autocompleteList.appendChild(div);
          });
          autocompleteList.style.display = 'block';
        }
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
    const isStandard = /^[0-9a-z]{4}$/.test(id);
    const isExtended = /^pdb_[0-9a-z]{8}$/.test(id);
    if (!isStandard && !isExtended) {
      alert('PDB ID must be a standard 4-character ID (e.g., 1tqn) or a 12-character extended ID (e.g., pdb_00006vmt).');
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
    } else if (db === 'mddb') {
      loadMddb(val);
    } else if (db === 'pubchem') {
      loadPubChem(val);
    } else if (db === 'chembl') {
      loadChEMBL(val);
    } else if (db === 'orbitals') {
      loadOrbital(val);
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
  async function loadEsmAtlas(input) {
    input = input.trim();
    if (!input) return;

    // Check if input is a raw sequence or a FASTA format
    let isSequence = false;
    let sequenceData = input;
    if (input.startsWith('>')) {
      isSequence = true;
      const lines = input.split('\n');
      lines.shift();
      sequenceData = lines.join('').replace(/\s/g, '');
    } else if (/^[ACDEFGHIKLMNPQRSTVWY\s\n]+$/i.test(input) && input.length >= 10) {
      const cleaned = input.replace(/\s/g, '');
      if (/^[ACDEFGHIKLMNPQRSTVWY]+$/i.test(cleaned)) {
        isSequence = true;
        sequenceData = cleaned;
      }
    }

    setLoadingState(true);

    if (isSequence) {
      const url = 'https://api.esmatlas.com/foldSequence/v1/pdb/';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: sequenceData
        });
        if (!response.ok) {
          throw new Error(`ESM Fold API error! status: ${response.status}`);
        }
        const data = await response.text();

        await viewer.plugin.clear();
        while (viewer.plugin.isBusy) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        await viewer.loadStructureFromData(data, 'pdb');
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
        console.error(err);
        alert(`Failed to fold sequence via ESM Fold API: ${err.message}`);
        setLoadingState(false);
      }
    } else {
      const id = input;
      const url = `https://api.esmatlas.com/fetchPredictedStructure/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 403 || response.status === 404) {
            throw new Error(`Structure for ID ${id} was not found (403/404). It might not be precomputed in the ESM Metagenomic Atlas.`);
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

        await viewer.plugin.clear();
        while (viewer.plugin.isBusy) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        await viewer.loadStructureFromData(data, 'pdb');
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
        console.error(err);
        alert(`Failed to load ESM Atlas structure: ${err.message}`);
        setLoadingState(false);
      }
    }
  }

  // Load MDDB structure
  async function loadMddb(id) {
    id = id.trim().toUpperCase();
    if (!id) return;
    setLoadingState(true);
    const url = `https://mmb.mddbr.eu/api/rest/v1/projects/${id}/files/structure.pdb`;
    try {
      await loadFromUrl(url, 'pdb');
      setLoadingState(false);
    } catch (err) {
      console.error(err);
      alert(`Failed to load MDDB structure for project ID ${id}.`);
      setLoadingState(false);
    }
  }

  // Load PubChem structure
  async function loadPubChem(idOrName) {
    idOrName = idOrName.trim();
    if (!idOrName) return;
    setLoadingState(true);
    // Hide orbital controls
    document.getElementById('orbital-controls').style.display = 'none';

    let url;
    if (/^\d+$/.test(idOrName)) {
      url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${idOrName}/SDF?record_type=3d`;
    } else {
      url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(idOrName)}/SDF?record_type=3d`;
    }

    try {
      await loadFromUrl(url, 'sdf');
      setLoadingState(false);
    } catch (err) {
      console.error(err);
      alert(`Failed to load PubChem compound "${idOrName}". Make sure it has 3D coordinates available.`);
      setLoadingState(false);
    }
  }

  // Load ChEMBL structure
  async function loadChEMBL(chemblId, inchiKey) {
    chemblId = chemblId.trim().toUpperCase();
    if (!chemblId) return;
    setLoadingState(true);
    // Hide orbital controls
    document.getElementById('orbital-controls').style.display = 'none';

    try {
      if (!inchiKey) {
        const res = await fetch(`https://www.ebi.ac.uk/chembl/api/data/molecule/${chemblId}?format=json`);
        if (res.ok) {
          const data = await res.json();
          inchiKey = data.molecule_structures ? data.molecule_structures.standard_inchi_key : undefined;
        }
      }

      if (inchiKey) {
        const pubchemUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/inchikey/${inchiKey}/SDF?record_type=3d`;
        try {
          await loadFromUrl(pubchemUrl, 'sdf');
          setLoadingState(false);
          return;
        } catch (pubchemErr) {
          console.warn('Failed to load 3D SDF from PubChem using InChIKey, falling back to ChEMBL 2D SDF...', pubchemErr);
        }
      }

      const chemblUrl = `https://www.ebi.ac.uk/chembl/api/data/molecule/${chemblId}.sdf`;
      await loadFromUrl(chemblUrl, 'sdf');
      setLoadingState(false);
    } catch (err) {
      console.error(err);
      alert(`Failed to load ChEMBL molecule ${chemblId}.`);
      setLoadingState(false);
    }
  }

  // Load PQR Orbital file
  async function loadOrbital(query) {
    query = query.trim();
    if (!query) return;

    if (query.toLowerCase() === 'benzene') {
      setLoadingState(true);
      try {
        const res = await fetch('examples/benzene-homo.cube');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const text = await res.text();
        await loadCubeFromData(text);
      } catch (err) {
        console.error(err);
        alert('Failed to load local benzene demo orbital file.');
        setLoadingState(false);
      }
      return;
    }

    setLoadingState(true);
    try {
      let inchiKey = query;
      const isInChIKey = /^[A-Z]{14}-[A-Z]{10}-[A-Z]$/i.test(query);
      if (!isInChIKey) {
        const res = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/property/InChIKey/JSON`);
        if (res.ok) {
          const data = await res.json();
          inchiKey = (data.PropertyTable && data.PropertyTable.Properties && data.PropertyTable.Properties[0]) ? data.PropertyTable.Properties[0].InChIKey : undefined;
        }
        if (!inchiKey) {
          throw new Error(`Could not resolve compound name "${query}" to InChIKey`);
        }
      }

      const pqrUrl = `https://pqr.pitt.edu/api/cube/${inchiKey}`;
      const response = await fetch(pqrUrl);
      if (!response.ok) {
        throw new Error(`PQR API error! status: ${response.status}. The server might be down or file doesn't exist.`);
      }
      const text = await response.text();
      await loadCubeFromData(text);
    } catch (err) {
      console.error(err);
      alert(`Failed to load PQR orbital: ${err.message}`);
      setLoadingState(false);
    }
  }

  // Load Gaussian Cube data
  async function loadCubeFromData(cubeText) {
    setLoadingState(true);
    try {
      await viewer.plugin.clear();
      while (viewer.plugin.isBusy) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      const provider = viewer.plugin.dataFormats.get('cube');
      if (!provider) {
        throw new Error('Cube data provider not found in MolStar plugin.');
      }

      const rawData = await viewer.plugin.builders.data.rawData({ data: cubeText, label: 'Orbital Cube Data' });
      const parsed = await provider.parse(viewer.plugin, rawData);

      if (parsed.structure) {
        await viewer.plugin.builders.structure.representation.applyPreset(parsed.structure, 'auto');
      }

      const volumeNode = parsed.volume;
      if (volumeNode && volumeNode.cell && volumeNode.cell.obj) {
        orbitalVolumeData = volumeNode.cell.obj.data;
        const volumeData = orbitalVolumeData;

        const surfaces = viewer.plugin.build();
        const relativeVal = parseFloat(document.getElementById('orbital-isovalue').value);

        const StateTransforms = molstar.lib.plugin.StateTransforms;
        const Volume = molstar.lib.volume.Volume;

        orbitalVolumePosNode = surfaces.to(volumeNode).apply(StateTransforms.Representation.VolumeRepresentation3D, {
          type: {
            name: 'isosurface',
            params: {
              isoValue: Volume.IsoValue.relative(relativeVal),
              alpha: 0.4,
            }
          },
          colorTheme: {
            name: 'uniform',
            params: { value: 0x00aaff }
          },
          sizeTheme: { name: 'physical', params: {} }
        }, { tags: ['orbital-pos'] }).selector;

        orbitalVolumeNegNode = surfaces.to(volumeNode).apply(StateTransforms.Representation.VolumeRepresentation3D, {
          type: {
            name: 'isosurface',
            params: {
              isoValue: Volume.IsoValue.relative(-relativeVal),
              alpha: 0.4,
            }
          },
          colorTheme: {
            name: 'uniform',
            params: { value: 0xff3333 }
          },
          sizeTheme: { name: 'physical', params: {} }
        }, { tags: ['orbital-neg'] }).selector;

        await surfaces.commit();
        await updateOrbitalVisibility();
      }

      try {
        viewer.plugin.managers.camera.reset();
      } catch (e) {
        console.warn('Camera reset error', e);
      }

      document.getElementById('orbital-controls').style.display = 'flex';
      exportPanel.style.display = 'flex';
      btnSTL.disabled = btnOBJ.disabled = btnGLB.disabled = false;
      setLoadingState(false);
    } catch (err) {
      console.error('Failed to load Cube format:', err);
      alert('Failed to load orbital cube data: ' + err.message);
      setLoadingState(false);
    }
  }

  // Update Isovalue in representations
  async function updateOrbitalIsovalue(value) {
    if (!orbitalVolumePosNode || !orbitalVolumeNegNode) return;

    const Volume = molstar.lib.volume.Volume;
    const update = viewer.plugin.build();

    update.to(orbitalVolumePosNode).update(oldParams => {
      if (oldParams && oldParams.type && oldParams.type.params) {
        oldParams.type.params.isoValue = Volume.IsoValue.relative(value);
      }
      return oldParams;
    });

    update.to(orbitalVolumeNegNode).update(oldParams => {
      if (oldParams && oldParams.type && oldParams.type.params) {
        oldParams.type.params.isoValue = Volume.IsoValue.relative(-value);
      }
      return oldParams;
    });

    await update.commit();
  }

  // Update visibility
  async function updateOrbitalVisibility() {
    const togglePos = document.getElementById('toggle-positive').checked;
    const toggleNeg = document.getElementById('toggle-negative').checked;

    const update = viewer.plugin.build();
    if (orbitalVolumePosNode) {
      update.to(orbitalVolumePosNode).updateState({ isHidden: !togglePos });
    }
    if (orbitalVolumeNegNode) {
      update.to(orbitalVolumeNegNode).updateState({ isHidden: !toggleNeg });
    }
    await update.commit();
  }

  // Bind controls
  const orbitalIsovalueSlider = document.getElementById('orbital-isovalue');
  const orbitalIsovalueVal = document.getElementById('isovalue-val');
  const togglePosCheckbox = document.getElementById('toggle-positive');
  const toggleNegCheckbox = document.getElementById('toggle-negative');

  orbitalIsovalueSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    orbitalIsovalueVal.textContent = val.toFixed(2);
    updateOrbitalIsovalue(val);
  });

  togglePosCheckbox.addEventListener('change', () => {
    updateOrbitalVisibility();
  });

  toggleNegCheckbox.addEventListener('change', () => {
    updateOrbitalVisibility();
  });

  // Sidebar Collapse/Expand Logic
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebar && sidebarToggle) {
    if (window.innerWidth <= 768) {
      sidebar.classList.add('collapsed');
      sidebarToggle.textContent = '❯';
    }

    sidebarToggle.addEventListener('click', () => {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      sidebarToggle.textContent = isCollapsed ? '❯' : '❮';
      sidebarToggle.setAttribute('aria-expanded', !isCollapsed);

      // Trigger resize for smooth canvas updates during CSS transition
      let startTime = performance.now();
      function tick(time) {
        window.dispatchEvent(new Event('resize'));
        if (time - startTime < 350) {
          requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(tick);
    });
  }
})();
