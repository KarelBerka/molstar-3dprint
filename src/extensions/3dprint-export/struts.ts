import { Structure, StructureElement, StructureProperties, Unit } from '../../mol-model/structure';
import { Vec3, Mat4 } from '../../mol-math/linear-algebra';
import { getElementMoleculeType } from '../../mol-model/structure/util';
import { MoleculeType } from '../../mol-model/structure/model/types';
import { ParamDefinition as PD } from '../../mol-util/param-definition';
import { PluginStateObject } from '../../mol-plugin-state/objects';
import { StateTransformer } from '../../mol-state';
import { Mesh } from '../../mol-geo/geometry/mesh/mesh';
import { MeshBuilder } from '../../mol-geo/geometry/mesh/mesh-builder';
import { addCylinder } from '../../mol-geo/geometry/mesh/builder/cylinder';
import { Shape } from '../../mol-model/shape';
import { ShapeProvider } from '../../mol-model/shape/provider';
import { ColorNames } from '../../mol-util/color/names';
import { Box } from '../../mol-geo/primitive/box';

export const StrutsParams = {
    strutSpacing: PD.Numeric(6, { min: 1, max: 20, step: 1 }, { description: 'Minimum sequence distance between backbone struts' }),
    strutLengthMaximum: PD.Numeric(7.0, { min: 1, max: 20, step: 0.1 }, { description: 'Maximum backbone strut length (Å)' }),
    strutDefaultRadius: PD.Numeric(0.35, { min: 0.05, max: 2.0, step: 0.05 }, { description: 'Strut cylinder radius (Å)' }),
    strutsMultiple: PD.Boolean(false, { description: 'Allow multiple struts per atom' }),
    ligandStruts: PD.Boolean(true, { description: 'Connect ligands to nearby backbone atoms' }),
    ligandStrutLengthMax: PD.Numeric(10.0, { min: 1, max: 20, step: 0.1 }, { description: 'Maximum ligand strut length (Å)' }),
    color: PD.Color(ColorNames.orange, { description: 'Color of the support struts' }),
    standColor: PD.Color(ColorNames.grey, { description: 'Color of the stand/pedestal' }),
    showStand: PD.Boolean(false, { description: 'Generate a base stand/pedestal' }),
    standAlignToView: PD.Boolean(true, { description: 'Align stand to current camera view' }),
    standThickness: PD.Numeric(4.0, { min: 1.0, max: 15.0, step: 0.5 }, { description: 'Stand plate thickness (Å)' }),
    standOffset: PD.Numeric(10.0, { min: -20.0, max: 30.0, step: 1.0 }, { description: 'Distance below molecule (Å)' }),
    standPadding: PD.Numeric(6.0, { min: 2.0, max: 20.0, step: 1.0 }, { description: 'Horizontal margin around stand (Å)' }),
    standPillarRadius: PD.Numeric(0.8, { min: 0.2, max: 3.0, step: 0.1 }, { description: 'Radius of stand support pillars (Å)' }),
    standPillarCount: PD.Numeric(3, { min: 0, max: 8, step: 1 }, { description: 'Number of vertical support pillars' }),
    standPillarsDetachable: PD.Boolean(false, { description: 'Leave a small gap between pillars and molecule for easy detachment' }),
    standPillarGap: PD.Numeric(0.8, { min: -3.0, max: 3.0, step: 0.1 }, { description: 'Detachment clearance gap (Å, negative to overlap)' }),
    standText: PD.Text('', { description: 'Text to emboss/raise on the stand' }),
    standTextFont: PD.Select('3x5', [['3x5', '3x5 (Compact)'], ['5x7', '5x7 (Legible)']], { description: 'Pixel font size/style' }),
    standTextSize: PD.Numeric(0.8, { min: 0.2, max: 2.0, step: 0.1 }, { description: 'Text pixel size (Å)' }),
    standTextDepth: PD.Numeric(1.0, { min: -3.0, max: 3.0, step: 0.1 }, { description: 'Text protrusion height (Å, negative to engrave)' }),
};

export type StrutsParams = typeof StrutsParams
export type StrutsProps = PD.Values<StrutsParams>

export interface Strut {
    start: Vec3,
    end: Vec3
}

export interface StandPillar {
    start: Vec3;
    end: Vec3;
    radius: number;
}

export interface StandBase {
    start: Vec3;
    end: Vec3;
    radius: number;
}

export interface StrutsData {
    struts: Strut[];
    props: StrutsProps;
    standBase?: StandBase;
    standPillars?: StandPillar[];
    textTransforms?: Mat4[];
}

interface BackboneAtom {
    pos: Vec3;
    chainId: string;
    seqId: number;
    unitIndex: number;
    elementIndex: number;
}

interface LigandAtom {
    pos: Vec3;
    residueKey: string;
}

function computeStruts(structure: Structure, props: StrutsProps): Strut[] {
    const { label_atom_id, label_comp_id, x, y, z } = StructureProperties.atom;
    const { label_seq_id } = StructureProperties.residue;
    const { label_asym_id } = StructureProperties.chain;
    const l = StructureElement.Location.create(structure);

    const backbone: BackboneAtom[] = [];
    const ligandAtoms: LigandAtom[] = [];

    for (let i = 0, il = structure.units.length; i < il; ++i) {
        const unit = structure.units[i];
        if (!Unit.isAtomic(unit)) continue;
        const { elements } = unit;
        l.unit = unit;
        for (let j = 0, jl = elements.length; j < jl; ++j) {
            const eI = elements[j];
            l.element = eI;

            const molType = getElementMoleculeType(unit, eI);
            const atomId = label_atom_id(l);

            if (molType === MoleculeType.Protein && atomId === 'CA') {
                backbone.push({
                    pos: Vec3.create(x(l), y(l), z(l)),
                    chainId: label_asym_id(l),
                    seqId: label_seq_id(l),
                    unitIndex: i,
                    elementIndex: eI
                });
            } else if ((molType === MoleculeType.DNA || molType === MoleculeType.RNA) && atomId === 'P') {
                backbone.push({
                    pos: Vec3.create(x(l), y(l), z(l)),
                    chainId: label_asym_id(l),
                    seqId: label_seq_id(l),
                    unitIndex: i,
                    elementIndex: eI
                });
            } else if (
                molType !== MoleculeType.Protein &&
                molType !== MoleculeType.DNA &&
                molType !== MoleculeType.RNA &&
                molType !== MoleculeType.Water &&
                molType !== MoleculeType.Ion
            ) {
                const residueKey = `${label_asym_id(l)}_${label_comp_id(l)}_${label_seq_id(l)}`;
                ligandAtoms.push({
                    pos: Vec3.create(x(l), y(l), z(l)),
                    residueKey
                });
            }
        }
    }

    const struts: Strut[] = [];
    interface Candidate {
        a: BackboneAtom;
        b: BackboneAtom;
        dist: number;
    }
    const candidates: Candidate[] = [];

    // Backbone-backbone candidates
    for (let i = 0; i < backbone.length; ++i) {
        const a = backbone[i];
        for (let j = i + 1; j < backbone.length; ++j) {
            const b = backbone[j];
            if (a.chainId === b.chainId) {
                if (Math.abs(a.seqId - b.seqId) < props.strutSpacing) continue;
            }
            const dist = Vec3.distance(a.pos, b.pos);
            if (dist <= props.strutLengthMaximum) {
                candidates.push({ a, b, dist });
            }
        }
    }

    // Sort by distance (shortest first)
    candidates.sort((x, y) => x.dist - y.dist);

    const connected = new Set<string>();
    const getAtomKey = (atom: BackboneAtom) => `${atom.unitIndex}_${atom.elementIndex}`;

    for (const c of candidates) {
        const keyA = getAtomKey(c.a);
        const keyB = getAtomKey(c.b);
        if (!props.strutsMultiple) {
            if (connected.has(keyA) || connected.has(keyB)) continue;
            struts.push({ start: c.a.pos, end: c.b.pos });
            connected.add(keyA);
            connected.add(keyB);
        } else {
            struts.push({ start: c.a.pos, end: c.b.pos });
        }
    }

    // Ligand struts
    if (props.ligandStruts && ligandAtoms.length > 0 && backbone.length > 0) {
        const ligandResidues = new Map<string, LigandAtom[]>();
        for (const atom of ligandAtoms) {
            if (!ligandResidues.has(atom.residueKey)) {
                ligandResidues.set(atom.residueKey, []);
            }
            ligandResidues.get(atom.residueKey)!.push(atom);
        }

        for (const [_, atoms] of ligandResidues.entries()) {
            interface Contact {
                ligAtom: LigandAtom;
                backAtom: BackboneAtom;
                dist: number;
            }
            const contacts: Contact[] = [];
            for (const la of atoms) {
                for (const ba of backbone) {
                    const dist = Vec3.distance(la.pos, ba.pos);
                    if (dist <= props.ligandStrutLengthMax) {
                        contacts.push({ ligAtom: la, backAtom: ba, dist });
                    }
                }
            }

            contacts.sort((x, y) => x.dist - y.dist);

            const chosenBackbones = new Set<string>();
            let strutCount = 0;
            for (const c of contacts) {
                const baKey = getAtomKey(c.backAtom);
                if (chosenBackbones.has(baKey)) continue;

                struts.push({ start: c.ligAtom.pos, end: c.backAtom.pos });
                chosenBackbones.add(baKey);
                strutCount++;
                if (strutCount >= 3) break;
            }
        }
    }

    return struts;
}

const pixelFont3x5: { [key: string]: number[] } = {
    '0': [7, 5, 5, 5, 7],
    '1': [2, 6, 2, 2, 7],
    '2': [7, 1, 7, 4, 7],
    '3': [7, 1, 7, 1, 7],
    '4': [5, 5, 7, 1, 1],
    '5': [7, 4, 7, 1, 7],
    '6': [7, 4, 7, 5, 7],
    '7': [7, 1, 2, 4, 4],
    '8': [7, 5, 7, 5, 7],
    '9': [7, 5, 7, 1, 7],
    'A': [7, 5, 7, 5, 5],
    'B': [6, 5, 6, 5, 6],
    'C': [7, 4, 4, 4, 7],
    'D': [6, 5, 5, 5, 6],
    'E': [7, 4, 7, 4, 7],
    'F': [7, 4, 7, 4, 4],
    'G': [7, 4, 5, 5, 7],
    'H': [5, 5, 7, 5, 5],
    'I': [7, 2, 2, 2, 7],
    'J': [1, 1, 1, 5, 7],
    'K': [5, 5, 6, 5, 5],
    'L': [4, 4, 4, 4, 7],
    'M': [5, 7, 7, 5, 5],
    'N': [5, 7, 7, 5, 5],
    'O': [7, 5, 5, 5, 7],
    'P': [7, 5, 7, 4, 4],
    'Q': [7, 5, 7, 3, 3],
    'R': [7, 5, 7, 6, 5],
    'S': [7, 4, 7, 1, 7],
    'T': [7, 2, 2, 2, 2],
    'U': [5, 5, 5, 5, 7],
    'V': [5, 5, 5, 5, 2],
    'W': [5, 5, 7, 7, 5],
    'X': [5, 5, 2, 5, 5],
    'Y': [5, 5, 2, 2, 2],
    'Z': [7, 1, 2, 4, 7],
    '-': [0, 0, 7, 0, 0],
    '_': [0, 0, 0, 0, 7],
    '.': [0, 0, 0, 0, 2],
    ',': [0, 0, 0, 2, 4],
    ':': [0, 2, 0, 2, 0],
    '(': [2, 4, 4, 4, 2],
    ')': [4, 2, 2, 2, 4],
    '/': [1, 1, 2, 4, 4],
    '+': [0, 2, 7, 2, 0],
    '=': [0, 7, 0, 7, 0],
    ' ': [0, 0, 0, 0, 0]
};

const pixelFont5x7: { [key: string]: number[] } = {
    '0': [14, 17, 17, 17, 17, 17, 14],
    '1': [4, 12, 4, 4, 4, 4, 14],
    '2': [14, 17, 1, 2, 4, 8, 31],
    '3': [31, 1, 1, 14, 1, 1, 31],
    '4': [2, 6, 10, 18, 31, 2, 2],
    '5': [31, 16, 30, 1, 1, 17, 14],
    '6': [14, 17, 16, 30, 17, 17, 14],
    '7': [31, 1, 2, 4, 8, 8, 8],
    '8': [14, 17, 17, 14, 17, 17, 14],
    '9': [14, 17, 17, 15, 1, 1, 14],
    'A': [14, 17, 17, 31, 17, 17, 17],
    'B': [30, 17, 17, 30, 17, 17, 30],
    'C': [14, 17, 16, 16, 16, 17, 14],
    'D': [30, 17, 17, 17, 17, 17, 30],
    'E': [31, 16, 16, 30, 16, 16, 31],
    'F': [31, 16, 16, 30, 16, 16, 16],
    'G': [14, 17, 16, 23, 17, 17, 14],
    'H': [17, 17, 17, 31, 17, 17, 17],
    'I': [14, 4, 4, 4, 4, 4, 14],
    'J': [7, 2, 2, 2, 2, 18, 12],
    'K': [17, 18, 20, 24, 20, 18, 17],
    'L': [16, 16, 16, 16, 16, 16, 31],
    'M': [17, 27, 21, 17, 17, 17, 17],
    'N': [17, 25, 21, 19, 17, 17, 17],
    'O': [14, 17, 17, 17, 17, 17, 14],
    'P': [30, 17, 17, 30, 16, 16, 16],
    'Q': [14, 17, 17, 17, 21, 18, 13],
    'R': [30, 17, 17, 30, 20, 18, 17],
    'S': [14, 17, 16, 14, 1, 17, 14],
    'T': [31, 4, 4, 4, 4, 4, 4],
    'U': [17, 17, 17, 17, 17, 17, 14],
    'V': [17, 17, 17, 17, 17, 10, 4],
    'W': [17, 17, 17, 21, 21, 27, 17],
    'X': [17, 17, 10, 4, 10, 17, 17],
    'Y': [17, 17, 10, 4, 4, 4, 4],
    'Z': [31, 1, 2, 4, 8, 16, 31],
    '-': [0, 0, 0, 31, 0, 0, 0],
    '_': [0, 0, 0, 0, 0, 0, 31],
    '.': [0, 0, 0, 0, 0, 0, 4],
    ',': [0, 0, 0, 0, 0, 4, 8],
    ':': [0, 4, 0, 0, 0, 4, 0],
    '(': [2, 4, 4, 4, 4, 4, 2],
    ')': [8, 4, 4, 4, 4, 4, 8],
    '/': [2, 4, 4, 8, 16, 16, 0],
    '+': [0, 4, 4, 31, 4, 4, 0],
    '=': [0, 0, 31, 0, 31, 0, 0],
    ' ': [0, 0, 0, 0, 0, 0, 0]
};

function generateCircumferenceText(
    text: string,
    centerX: number,
    centerY: number,
    centerZ: number,
    standRadius: number,
    standThickness: number,
    pixelSize: number,
    depth: number,
    isAlignedToView: boolean,
    fontType: '3x5' | '5x7',
    invViewMat?: Mat4
): Mat4[] {
    const matrices: Mat4[] = [];
    const cleanText = text.toUpperCase();
    const L = cleanText.length;
    if (L === 0) return matrices;

    const font = fontType === '5x7' ? pixelFont5x7 : pixelFont3x5;
    const charW = fontType === '5x7' ? 5 : 3;
    const charH = fontType === '5x7' ? 7 : 5;

    const charWidth = charW * pixelSize;
    const charSpacing = 1 * pixelSize;
    const W = charWidth + charSpacing;
    const dTheta = W / standRadius;

    const isEngrave = depth < 0;
    const absDepth = Math.abs(depth);
    // Deep penetration into the cylinder wall ensures zero gap between text and stand cylinder,
    // bridging any polygonal faceting and providing solid infill bond for 3D printing.
    const embedDepth = Math.max(1.5, pixelSize * 1.2);
    const protrusion = Math.max(0.4, absDepth);

    let boxDepth: number;
    let rCenter: number;
    if (isEngrave) {
        boxDepth = absDepth + 0.4;
        rCenter = standRadius - absDepth / 2 + 0.2;
    } else {
        boxDepth = protrusion + embedDepth;
        rCenter = standRadius + (protrusion - embedDepth) / 2;
    }

    const pixelScaleX = pixelSize * 1.06;
    const pixelScaleY = pixelSize * 1.06;

    for (let charIdx = 0; charIdx < L; ++charIdx) {
        const char = cleanText[charIdx];
        const pattern = font[char] || font[' '];

        let theta = 0;
        if (isAlignedToView) {
            theta = Math.PI / 2 - (charIdx - (L - 1) / 2) * dTheta;
        } else {
            theta = -Math.PI / 2 + (charIdx - (L - 1) / 2) * dTheta;
        }

        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);

        let dirRight = Vec3.zero();
        let dirUp = Vec3.zero();
        let dirNormal = Vec3.zero();

        if (isAlignedToView) {
            dirRight = Vec3.create(sinT, 0, -cosT);
            dirUp = Vec3.create(0, 1, 0);
            dirNormal = Vec3.create(cosT, 0, sinT);
        } else {
            dirRight = Vec3.create(-sinT, cosT, 0);
            dirUp = Vec3.create(0, 0, 1);
            dirNormal = Vec3.create(cosT, sinT, 0);
        }

        for (let py = 0; py < charH; ++py) {
            const rowVal = pattern[py];
            for (let px = 0; px < charW; ++px) {
                const bitMask = 1 << ((charW - 1) - px);
                if ((rowVal & bitMask) !== 0) {
                    const dx = (px - (charW - 1) / 2) * pixelSize;
                    const dy = -(py - (charH - 1) / 2) * pixelSize;

                    const pixelPos = Vec3.zero();
                    if (isAlignedToView) {
                        const standCenterY = centerY + standThickness / 2;
                        pixelPos[0] = centerX + rCenter * cosT + dx * sinT;
                        pixelPos[1] = standCenterY + dy;
                        pixelPos[2] = centerZ + rCenter * sinT + dx * (-cosT);
                    } else {
                        const standCenterZ = centerZ + standThickness / 2;
                        pixelPos[0] = centerX + rCenter * cosT + dx * (-sinT);
                        pixelPos[1] = centerY + rCenter * sinT + dx * cosT;
                        pixelPos[2] = standCenterZ + dy;
                    }

                    const rMat = Mat4.identity();
                    rMat[0] = dirRight[0]; rMat[1] = dirRight[1]; rMat[2] = dirRight[2];
                    rMat[4] = dirUp[0]; rMat[5] = dirUp[1]; rMat[6] = dirUp[2];
                    rMat[8] = dirNormal[0]; rMat[9] = dirNormal[1]; rMat[10] = dirNormal[2];

                    const localMat = Mat4.fromTranslation(Mat4(), pixelPos);
                    Mat4.mul(localMat, localMat, rMat);
                    Mat4.scale(localMat, localMat, Vec3.create(pixelScaleX, pixelScaleY, boxDepth));

                    if (isAlignedToView && invViewMat) {
                        matrices.push(Mat4.mul(Mat4(), invViewMat, localMat));
                    } else {
                        matrices.push(localMat);
                    }
                }
            }
        }
    }
    return matrices;
}

function getStrutsShape(data: StrutsData): Shape<Mesh> {
    const struts = data.struts;
    const radius = data.props.strutDefaultRadius;
    const color = data.props.color;
    const state = MeshBuilder.createState(struts.length * 64, struts.length * 64);
    const cylinderProps = { radiusTop: radius, radiusBottom: radius, radialSegments: 8, topCap: true, bottomCap: true };
    for (const s of struts) {
        addCylinder(state, s.start, s.end, 1, cylinderProps);
    }
    const mesh = MeshBuilder.getMesh(state);
    Mesh.computeNormals(mesh);
    return Shape.create('Connecting Struts', data, mesh, () => color, () => 1, () => 'Strut');
}

function getStandBaseShape(data: StrutsData): Shape<Mesh> {
    const color = data.props.standColor;
    let totalBoxes = data.textTransforms ? data.textTransforms.length : 0;
    const vertexCount = (data.standBase ? 256 : 0) + totalBoxes * 8;
    const triangleCount = (data.standBase ? 256 : 0) + totalBoxes * 12;
    const state = MeshBuilder.createState(vertexCount, triangleCount);
    if (data.standBase) {
        const baseProps = { radiusTop: data.standBase.radius, radiusBottom: data.standBase.radius, radialSegments: 64, topCap: true, bottomCap: true };
        addCylinder(state, data.standBase.start, data.standBase.end, 1, baseProps);
    }
    if (data.textTransforms) {
        const box = Box();
        for (const mat of data.textTransforms) {
            MeshBuilder.addPrimitive(state, mat, box);
        }
    }
    const mesh = MeshBuilder.getMesh(state);
    Mesh.computeNormals(mesh);
    return Shape.create('Stand Base Plate', data, mesh, () => color, () => 1, () => 'Stand Base');
}

function getStandPillarsShape(data: StrutsData): Shape<Mesh> {
    const color = data.props.standColor;
    const pillars = data.standPillars || [];
    const state = MeshBuilder.createState(pillars.length * 64, pillars.length * 64);
    for (const p of pillars) {
        const pillarProps = { radiusTop: p.radius, radiusBottom: p.radius, radialSegments: 12, topCap: true, bottomCap: true };
        addCylinder(state, p.start, p.end, 1, pillarProps);
    }
    const mesh = MeshBuilder.getMesh(state);
    Mesh.computeNormals(mesh);
    return Shape.create('Stand Pillars', data, mesh, () => color, () => 1, () => 'Pillar');
}

const strutsMeshParams: Mesh.Params = {
    ...Mesh.Params,
};

type StrutsShapeProvider = ShapeProvider<StrutsData, Mesh, Mesh.Params>;

const StrutsShapeProvider = {
    fromStructure(structure: Structure, props: StrutsProps, plugin?: any): StrutsShapeProvider {
        const struts = computeStruts(structure, props);
        
        let standBase: StandBase | undefined;
        let standPillars: StandPillar[] | undefined;
        let textTransforms: Mat4[] | undefined;

        if (props.showStand) {
            const { x, y, z } = StructureProperties.atom;
            const l = StructureElement.Location.create(structure);
            const allPositions: Vec3[] = [];

            for (let i = 0, il = structure.units.length; i < il; ++i) {
                const unit = structure.units[i];
                if (!Unit.isAtomic(unit)) continue;
                const { elements } = unit;
                l.unit = unit;
                for (let j = 0, jl = elements.length; j < jl; ++j) {
                    const eI = elements[j];
                    const molType = getElementMoleculeType(unit, eI);
                    if (
                        molType !== MoleculeType.Water &&
                        molType !== MoleculeType.Ion
                    ) {
                        l.element = eI;
                        allPositions.push(Vec3.create(x(l), y(l), z(l)));
                    }
                }
            }

            if (allPositions.length > 0) {
                const camera = plugin?.canvas3d?.camera;
                const alignToView = props.standAlignToView && camera;

                if (alignToView) {
                    const viewMat = camera.view;
                    const invViewMat = Mat4.invert(Mat4(), viewMat);
                    const camPositions = allPositions.map(pos => Vec3.transformMat4(Vec3(), pos, viewMat));

                    let minX = Infinity, maxX = -Infinity;
                    let minY = Infinity, maxY = -Infinity;
                    let minZ = Infinity, maxZ = -Infinity;
                    for (const pos of camPositions) {
                        if (pos[0] < minX) minX = pos[0];
                        if (pos[0] > maxX) maxX = pos[0];
                        if (pos[1] < minY) minY = pos[1];
                        if (pos[1] > maxY) maxY = pos[1];
                        if (pos[2] < minZ) minZ = pos[2];
                        if (pos[2] > maxZ) maxZ = pos[2];
                    }

                    const centerX = (minX + maxX) / 2;
                    const centerZ = (minZ + maxZ) / 2;

                    const sortedIndices = camPositions
                        .map((pos, idx) => ({ pos, idx }))
                        .sort((a, b) => a.pos[1] - b.pos[1]);

                    const selected: { pos: Vec3, idx: number }[] = [];
                    const minSpacingSq = 12.0 * 12.0;

                    for (const item of sortedIndices) {
                        if (selected.length >= props.standPillarCount) break;
                        let farEnough = true;
                        for (const sel of selected) {
                            const dx = item.pos[0] - sel.pos[0];
                            const dz = item.pos[2] - sel.pos[2];
                            if (dx * dx + dz * dz < minSpacingSq) {
                                farEnough = false;
                                break;
                            }
                        }
                        if (farEnough) {
                            selected.push(item);
                        }
                    }

                    if (selected.length < props.standPillarCount) {
                        for (const item of sortedIndices) {
                            if (selected.length >= props.standPillarCount) break;
                            if (!selected.some(s => s.idx === item.idx)) {
                                selected.push(item);
                            }
                        }
                    }

                    const charH = props.standTextFont === '5x7' ? 7 : 5;
                    const minThickness = (charH + 1) * props.standTextSize;
                    const effectiveThickness = (props.standText && props.standText.trim().length > 0)
                        ? Math.max(props.standThickness, minThickness)
                        : props.standThickness;

                    const standTopY = minY - props.standOffset;
                    const standBottomY = standTopY - effectiveThickness;

                    let maxDist = 0;
                    for (const item of selected) {
                        const dx = item.pos[0] - centerX;
                        const dz = item.pos[2] - centerZ;
                        const dist = Math.sqrt(dx * dx + dz * dz);
                        if (dist > maxDist) maxDist = dist;
                    }
                    const standRadius = Math.max(10.0, maxDist + props.standPadding);

                    const camBaseStart = Vec3.create(centerX, standBottomY, centerZ);
                    const camBaseEnd = Vec3.create(centerX, standTopY, centerZ);

                    standBase = {
                        start: Vec3.transformMat4(Vec3(), camBaseStart, invViewMat),
                        end: Vec3.transformMat4(Vec3(), camBaseEnd, invViewMat),
                        radius: standRadius
                    };

                    standPillars = selected.map(item => {
                        const originalPos = allPositions[item.idx];
                        const camPillarEnd = Vec3.create(item.pos[0], standTopY, item.pos[2]);
                        const start = Vec3.clone(originalPos);
                        const end = Vec3.transformMat4(Vec3(), camPillarEnd, invViewMat);

                        if (props.standPillarsDetachable) {
                            const dir = Vec3.sub(Vec3(), start, end);
                            const len = Vec3.magnitude(dir);
                            const gap = props.standPillarGap;
                            if (len > gap) {
                                Vec3.scaleAndAdd(start, end, dir, (len - gap) / len);
                            }
                        }

                        return { start, end, radius: props.standPillarRadius };
                    });

                    if (props.standText && props.standText.trim().length > 0) {
                        textTransforms = generateCircumferenceText(
                            props.standText,
                            centerX,
                            standBottomY,
                            centerZ,
                            standRadius,
                            effectiveThickness,
                            props.standTextSize,
                            props.standTextDepth,
                            true,
                            props.standTextFont as any,
                            invViewMat
                        );
                    }

                } else {
                    let minX = Infinity, maxX = -Infinity;
                    let minY = Infinity, maxY = -Infinity;
                    let minZ = Infinity, maxZ = -Infinity;
                    for (const pos of allPositions) {
                        if (pos[0] < minX) minX = pos[0];
                        if (pos[0] > maxX) maxX = pos[0];
                        if (pos[1] < minY) minY = pos[1];
                        if (pos[1] > maxY) maxY = pos[1];
                        if (pos[2] < minZ) minZ = pos[2];
                        if (pos[2] > maxZ) maxZ = pos[2];
                    }

                    const centerX = (minX + maxX) / 2;
                    const centerY = (minY + maxY) / 2;

                    allPositions.sort((a, b) => a[2] - b[2]);
                    const selected: Vec3[] = [];
                    const minSpacingSq = 12.0 * 12.0; // 12 Å horizontal spacing

                    for (const pos of allPositions) {
                        if (selected.length >= props.standPillarCount) break;
                        let farEnough = true;
                        for (const sel of selected) {
                            const dx = pos[0] - sel[0];
                            const dy = pos[1] - sel[1];
                            if (dx * dx + dy * dy < minSpacingSq) {
                                farEnough = false;
                                break;
                            }
                        }
                        if (farEnough) {
                            selected.push(pos);
                        }
                    }

                    if (selected.length < props.standPillarCount) {
                        for (const pos of allPositions) {
                            if (selected.length >= props.standPillarCount) break;
                            if (!selected.includes(pos)) {
                                selected.push(pos);
                            }
                        }
                    }

                    const charH = props.standTextFont === '5x7' ? 7 : 5;
                    const minThickness = (charH + 1) * props.standTextSize;
                    const effectiveThickness = (props.standText && props.standText.trim().length > 0)
                        ? Math.max(props.standThickness, minThickness)
                        : props.standThickness;

                    const standTopZ = minZ - props.standOffset;
                    const standBottomZ = standTopZ - effectiveThickness;

                    let maxDist = 0;
                    for (const pos of selected) {
                        const dx = pos[0] - centerX;
                        const dy = pos[1] - centerY;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist > maxDist) maxDist = dist;
                    }
                    const standRadius = Math.max(10.0, maxDist + props.standPadding);

                    standBase = {
                        start: Vec3.create(centerX, centerY, standBottomZ),
                        end: Vec3.create(centerX, centerY, standTopZ),
                        radius: standRadius
                    };

                    standPillars = selected.map(pos => {
                        const start = Vec3.clone(pos);
                        const end = Vec3.create(pos[0], pos[1], standTopZ);

                        if (props.standPillarsDetachable) {
                            const dir = Vec3.sub(Vec3(), start, end);
                            const len = Vec3.magnitude(dir);
                            const gap = props.standPillarGap;
                            if (len > gap) {
                                Vec3.scaleAndAdd(start, end, dir, (len - gap) / len);
                            }
                        }

                        return { start, end, radius: props.standPillarRadius };
                    });

                    if (props.standText && props.standText.trim().length > 0) {
                        textTransforms = generateCircumferenceText(
                            props.standText,
                            centerX,
                            centerY,
                            standBottomZ,
                            standRadius,
                            effectiveThickness,
                            props.standTextSize,
                            props.standTextDepth,
                            false,
                            props.standTextFont as any
                        );
                    }
                }
            }
        }

        const data: StrutsData = { struts, props, standBase, standPillars, textTransforms };
        return {
            label: 'Struts',
            data,
            params: strutsMeshParams,
            geometryUtils: Mesh.Utils,
            getShape: (_, d: StrutsData) => getStrutsShape(d)
        };
    }
};

const StrutsFactory = StateTransformer.builderFactory('3dprint-struts');

export const StrutsFromStructure = StrutsFactory({
    name: 'struts-from-structure',
    display: { name: 'Support Struts', description: 'Calculates support struts for 3D printing.' },
    from: PluginStateObject.Molecule.Structure,
    to: PluginStateObject.Shape.Provider,
    params: StrutsParams
})({
    apply({ a, params }, plugin) {
        const shapeProvider = StrutsShapeProvider.fromStructure(a.data, params, plugin);
        return new PluginStateObject.Shape.Provider(shapeProvider, {
            label: 'Support Struts',
            description: `${shapeProvider.data.struts.length} struts`
        });
    }
});

export const StandBaseFromStructure = StrutsFactory({
    name: 'stand-base-from-structure',
    display: { name: 'Stand Base Plate', description: 'Calculates stand base plate for 3D printing.' },
    from: PluginStateObject.Molecule.Structure,
    to: PluginStateObject.Shape.Provider,
    params: StrutsParams
})({
    apply({ a, params }, plugin) {
        const shapeProvider = {
            ...StrutsShapeProvider.fromStructure(a.data, params, plugin),
            label: 'Stand Base',
            getShape: (_, d: StrutsData) => getStandBaseShape(d)
        };
        return new PluginStateObject.Shape.Provider(shapeProvider, {
            label: 'Stand Base Plate',
            description: shapeProvider.data.standBase ? `Radius ${shapeProvider.data.standBase.radius.toFixed(1)} Å` : 'No stand'
        });
    }
});

export const StandPillarsFromStructure = StrutsFactory({
    name: 'stand-pillars-from-structure',
    display: { name: 'Stand Pillars', description: 'Calculates vertical stand pillars for 3D printing.' },
    from: PluginStateObject.Molecule.Structure,
    to: PluginStateObject.Shape.Provider,
    params: StrutsParams
})({
    apply({ a, params }, plugin) {
        const shapeProvider = {
            ...StrutsShapeProvider.fromStructure(a.data, params, plugin),
            label: 'Stand Pillars',
            getShape: (_, d: StrutsData) => getStandPillarsShape(d)
        };
        const pCount = shapeProvider.data.standPillars ? shapeProvider.data.standPillars.length : 0;
        return new PluginStateObject.Shape.Provider(shapeProvider, {
            label: 'Stand Pillars',
            description: `${pCount} pillars`
        });
    }
});
