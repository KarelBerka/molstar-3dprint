import { Structure, StructureElement, StructureProperties, Unit } from '../../mol-model/structure';
import { Vec3 } from '../../mol-math/linear-algebra';
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

export const StrutsParams = {
    strutSpacing: PD.Numeric(6, { min: 1, max: 20, step: 1 }, { description: 'Minimum sequence distance between backbone struts' }),
    strutLengthMaximum: PD.Numeric(7.0, { min: 1, max: 20, step: 0.1 }, { description: 'Maximum backbone strut length (Å)' }),
    strutDefaultRadius: PD.Numeric(0.35, { min: 0.05, max: 2.0, step: 0.05 }, { description: 'Strut cylinder radius (Å)' }),
    strutsMultiple: PD.Boolean(false, { description: 'Allow multiple struts per atom' }),
    ligandStruts: PD.Boolean(true, { description: 'Connect ligands to nearby backbone atoms' }),
    ligandStrutLengthMax: PD.Numeric(10.0, { min: 1, max: 20, step: 0.1 }, { description: 'Maximum ligand strut length (Å)' }),
    color: PD.Color(ColorNames.orange, { description: 'Color of the support struts' }),
};

export type StrutsParams = typeof StrutsParams
export type StrutsProps = PD.Values<StrutsParams>

export interface Strut {
    start: Vec3,
    end: Vec3
}

export interface StrutsData {
    struts: Strut[],
    props: StrutsProps
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

function getStrutsShape(data: StrutsData): Shape<Mesh> {
    const struts = data.struts;
    const radius = data.props.strutDefaultRadius;
    const color = data.props.color;

    const state = MeshBuilder.createState(struts.length * 16, struts.length * 8);
    const cylinderProps = { radiusTop: radius, radiusBottom: radius, radialSegments: 8 };
    for (const s of struts) {
        addCylinder(state, s.start, s.end, 1, cylinderProps);
    }
    const mesh = MeshBuilder.getMesh(state);
    return Shape.create(
        'Support Struts',
        data,
        mesh,
        () => color,
        () => 1,
        () => 'Support Strut'
    );
}

const strutsMeshParams: Mesh.Params = {
    ...Mesh.Params,
};

type StrutsShapeProvider = ShapeProvider<StrutsData, Mesh, Mesh.Params>;

const StrutsShapeProvider = {
    fromStructure(structure: Structure, props: StrutsProps): StrutsShapeProvider {
        const struts = computeStruts(structure, props);
        const data: StrutsData = { struts, props };
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
    apply({ a, params }) {
        const shapeProvider = StrutsShapeProvider.fromStructure(a.data, params);
        return new PluginStateObject.Shape.Provider(shapeProvider, {
            label: 'Support Struts',
            description: `${shapeProvider.data.struts.length} struts`
        });
    }
});
