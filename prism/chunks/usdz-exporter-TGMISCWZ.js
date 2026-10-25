import{a as P}from"./chunk-BNEIWNC3.js";import{c as K}from"./chunk-QT6MSK7W.js";import{a as G}from"./chunk-RXLR3BK6.js";import"./chunk-DXYIZPIU.js";import"./chunk-B6CXHM77.js";import"./chunk-2ZKRK7RB.js";import"./chunk-JY64XCWB.js";import"./chunk-RTCD34ML.js";import"./chunk-CXZDK4AO.js";import"./chunk-OIP3E2I6.js";import"./chunk-UASFW2HM.js";import"./chunk-KHBNYRDQ.js";import{La as E,R as u,S as v,i as r,oa as S,z as D}from"./chunk-ITHV5DKV.js";import"./chunk-DCANE7XH.js";var q=v.fromArray,te=v.transformMat4,re=v.transformMat3,ae=D.directionTransform,L=class f extends P{constructor(i,n,t){super();this.fileExtension="usdz";this.meshes=[];this.materials=[];this.materialMap=new Map;let a=u();u.fromUniformScaling(a,Math.min(1/(n*2),1)),u.translate(a,a,v.create(-(i.min[0]+i.max[0])/2,-i.min[1],-(i.min[2]+i.max[2])/2)),typeof t=="number"&&t>0&&u.scale(a,a,v.create(t,t,t)),this.centerTransform=a}addMaterial(i,n,t,a){let p=`${i}|${n}|${t}|${a}`;if(this.materialMap.has(p))return this.materialMap.get(p);let s=this.materialMap.size;this.materialMap.set(p,s);let[g,d,x]=S.toRgbNormalized(i).map(o=>Math.round(o*1e3)/1e3);return this.materials.push(`
def Material "material${s}"
{
    token outputs:surface.connect = </material${s}/shader.outputs:surface>
    def Shader "shader"
    {
        uniform token info:id = "UsdPreviewSurface"
        color3f inputs:diffuseColor = (${g},${d},${x})
        float inputs:opacity = ${n}
        float inputs:metallic = ${t}
        float inputs:roughness = ${a}
        token outputs:surface
    }
}
`),s}async addMeshWithColors(i){let{mesh:n,values:t,isGeoTexture:a,mode:p,graphics:s,ctx:g}=i;if(p!=="triangles")return;let d=u(),x=D(),o=v(),T=a?4:3,b=t.colorType.ref.value,U=t.overpaintType.ref.value,B=t.transparencyType.ref.value,W=t.uAlpha.ref.value,H=t.aTransform.ref.value,k=t.uInstanceCount.ref.value,J=t.uMetalness.ref.value,Q=t.uRoughness.ref.value,j;s&&n&&(b==="volume"||b==="volumeInstance")&&(j=await f.getInterpolatedColors(s,{vertices:n.vertices,vertexCount:n.vertexCount,values:t,stride:T,colorType:b}));let F;if(s&&n&&U==="volumeInstance"){let c=a?4:3;F=await f.getInterpolatedOverpaint(s,{vertices:n.vertices,vertexCount:n.vertexCount,values:t,stride:c,colorType:U})}let R;if(s&&n&&B==="volumeInstance"){let c=a?4:3;R=await f.getInterpolatedTransparency(s,{vertices:n.vertices,vertexCount:n.vertexCount,values:t,stride:c,colorType:B})}await g.update({isIndeterminate:!1,current:0,max:k});for(let c=0;c<k;++c){g.shouldUpdate&&await g.update({current:c+1});let{vertices:X,normals:Y,indices:O,groups:Z,vertexCount:C,drawCount:w,vertexMapping:_}=f.getInstance(i,c);u.fromArray(d,H,c*16),u.mul(d,this.centerTransform,d),ae(x,d);let l=r.create(),m=r.create(),I=r.create();for(let e=0;e<C;++e)te(o,q(o,X,e*T),d),r.writeSafe(l,e===0?"(":",("),r.writeFloat(l,o[0],1e4),r.writeSafe(l,","),r.writeFloat(l,o[1],1e4),r.writeSafe(l,","),r.writeFloat(l,o[2],1e4),r.writeSafe(l,")");for(let e=0;e<C;++e)re(o,q(o,Y,e*T),x),r.writeSafe(m,e===0?"(":",("),r.writeFloat(m,o[0],100),r.writeSafe(m,","),r.writeFloat(m,o[1],100),r.writeSafe(m,","),r.writeFloat(m,o[2],100),r.writeSafe(m,")");let V={values:t,groups:Z,vertexCount:C,instanceIndex:c,isGeoTexture:a,mode:p,vertexMapping:_};for(let e=0;e<w;++e){let h=a?e:O[e];e>0&&r.writeSafe(I,","),r.writeInteger(I,h)}let A=new Uint8Array(w*3);for(let e=0;e<w;e+=3){let h=a?e:O[e],y=f.getColor(h,V,j,F);S.toArray(y,A,e)}f.quantizeColors(A,C);let M=new Map;for(let e=0;e<w;e+=3){let h=S.fromArray(A,e),y=f.getTransparency(e,V,R),ee=Math.round(W*(1-y)*10)/10,N=this.addMaterial(h,ee,J,Q),$=M.get(N);$===void 0&&($=[],M.set(N,$)),$.push(e/3)}let z;if(M.size===1)z=`rel material:binding = </material${M.keys().next().value}>`;else{let e=[];M.forEach((h,y)=>{e.push(`
    def GeomSubset "g${y}"
    {
        uniform token elementType = "face"
        uniform token familyName = "materialBind"
        int[] indices = [${h.join(",")}]
        rel material:binding = </material${y}>
    }
`)}),z=e.join("")}this.meshes.push(`
def Mesh "mesh${this.meshes.length}"
{
    int[] faceVertexCounts = [${new Array(w/3).fill(3).join(",")}]
    int[] faceVertexIndices = [${r.getString(I)}]
    point3f[] points = [${r.getString(l)}]
    normal3f[] primvars:normals = [${r.getString(m)}] (
        interpolation = "vertex"
    )
    uniform token subdivisionScheme = "none"
    ${z}
}
`)}}async getData(i){let t=[`#usda 1.0
(
    customLayerData = {
        string creator = "Mol* ${G}"
    }
    metersPerUnit = 1
)
`,...this.materials,...this.meshes].join(""),a=new Uint8Array(t.length);return K(a,t),{usdz:await E(i,{"model.usda":a},!0)}}async getBlob(i){let{usdz:n}=await this.getData(i);return new Blob([n],{type:"model/vnd.usdz+zip"})}};export{L as UsdzExporter};
