import{a as De}from"./chunk-J2IWN7W3.js";import{B as mo,E as fo,F as ga,G as bo,H as ya,I as $r,L as xo,M as vo,N as So,g as Fc,i as Mc,j as Bc,l as ao,m as so,n as kt,r as co,s as uo,t as lo,v as Vc,w as kc,y as po}from"./chunk-DVDKKAAG.js";import{A as jc,C as Wc,D as lr,E as Hc,a as Us,b as zs,d as Ns,e as js,g as Ic,h as io,i as Oe,j as Qt,k as ho,l as cr,m as ur,n as go,o as yo,p as fa,q as ha,r as yt,s as Hr,t as mr,u as He,y as fr,z as zc}from"./chunk-JJTIKC6Z.js";import{a as Oc}from"./chunk-FS5BLXNE.js";import{a as tt,b as Ve,d as Wr,g as sr}from"./chunk-L4AEPC5H.js";import{a as Nc}from"./chunk-RXLR3BK6.js";import{b as Le,c as Gc}from"./chunk-ZDFZWBYB.js";import{a as no,c as ma,s as Rn,t as Ec,u as Ac,x as oo,y as wc,z as Lc}from"./chunk-DCVLNKHZ.js";import{A as xe,i as Se,j as Ye,k as Ke,l as ye,m as Je,n as et,o as ze,z as jr}from"./chunk-DR64BJ2J.js";import{a as Jn,b as eo,c as Ue}from"./chunk-DXYIZPIU.js";import{a as rc,j as Pc,k as pr,l as _c}from"./chunk-JBML3UIW.js";import{b as Tt,d as ht,p as Pe}from"./chunk-YRMZIWAW.js";import{A as Ks,Aa as gc,Ac as de,Bb as ro,C as ca,Ca as Ct,Cb as da,D as Yn,Db as pa,E as Js,F as ec,G as tc,Gb as Sc,H as ua,Lb as Xt,Mb as Zt,Ob as Tc,Tb as Cc,X as Nr,c as ia,cc as Rc,e as Ht,f as Ws,g as Hs,h as $s,i as qs,j as Xs,k as Zn,l as Zs,m as Qs,mb as yc,n as ir,nb as bc,ob as xc,p as he,pb as vc,qb as Me,r as aa,s as je,t as Qn,tb as qt,u as We,ub as Vt,w as sa,wb as st,x as Ys,xc as Dc,y as $t,za as gt,zb as to}from"./chunk-B6CXHM77.js";import{c as fc,e as hc,f as at,i as $}from"./chunk-OXQVWEY2.js";import{f as or}from"./chunk-2ZKRK7RB.js";import{a as Uc,b as be}from"./chunk-RBX2QZYW.js";import{a as S,b as ne}from"./chunk-ZA5UL3MF.js";import{a as Qe,c as St,d as Os,e as $n,g as _,h as bn,i as Ms,j as Ce,k as Ur,l as Vs,m as vn}from"./chunk-X5HRKX4H.js";import{$a as la,$b as Kn,Bb as ar,Ha as ce,Hb as Cn,Ib as Ar,Kb as le,Ob as mc,Pb as R,R as nc,T as _r,Y as oc,Z as ic,_a as Er,aa as ac,ba as sc,bb as cc,cb as uc,d as zr,db as lc,eb as dc,fb as pc,gb as we,w as Gs,x as Tn,y as oa}from"./chunk-RTCD34ML.js";import{g as nr,k as Wt,l as it,n as Xn,o as _e,q as na,x as ks,y as Sn}from"./chunk-OIP3E2I6.js";import{e as yn,i as Fs}from"./chunk-UASFW2HM.js";import{a as Ie}from"./chunk-KHBNYRDQ.js";import{d as xn,e as Bs,l as qn,m as Ji,o as ea,p as ta,x as ra}from"./chunk-FY6Y25VJ.js";import{A as Yi,Aa as Gr,B as jt,Ba as _s,C as Ps,Ca as Es,Ea as Q,K as Ki,M as Nn,N as gn,Na as As,P as jn,Qa as ws,R as oe,S as x,U as Ds,Ua as Ls,W as Wn,Z as ot,a as tr,ab as Is,b as N,bb as Hn,c as pe,cb as Dr,db as rr,j as vt,l as fn,m as Fe,o as I,oa as Bt,pb as p,u as Rs,w as Qi,y as hn,z as q}from"./chunk-ITHV5DKV.js";import{b as Zi}from"./chunk-DCANE7XH.js";var Ee=class extends Error{constructor(t,r){super(r===void 0?t:`${t} (line ${r})`),this.name="ShaderPreprocessorError"}},Sf=/^\s*#\s*(\w+)\s*(.*)$/,Tf=/^([A-Za-z_]\w*)(\(([^)]*)\))?(?:\s+(.*))?$/,Pn=/^[A-Za-z_]\w*$/,$c=/^\d+$/;function Zc(e,t,r={}){let n=!!r.expandMacros,o=new Map;for(let[u,l]of t)o.set(u,{body:l});let i=[],a=()=>i.length===0||i[i.length-1].active,s=[],c=Rf(e).split(`
`);for(let u=0;u<c.length;++u){let l=c[u],d=u+1,m=l.match(Sf);if(!m){a()&&s.push(n?Ro(l,o,new Set,d):l);continue}let f=m[1],h=m[2].replace(/\/\/.*$/,"").trim(),g=i[i.length-1];switch(f){case"if":case"ifdef":case"ifndef":{let T=a(),b=!1;if(T)if(f==="if")b=Xc(h,o,d);else{if(!Pn.test(h))throw new Ee(`#${f} expects a name`,d);b=f==="ifdef"?o.has(h):!o.has(h)}i.push({active:b,taken:b,parentActive:T,seenElse:!1,line:d});break}case"elif":{if(!g)throw new Ee("#elif without #if",d);if(g.seenElse)throw new Ee("#elif after #else",d);let T=g.parentActive&&!g.taken&&Xc(h,o,d);g.active=T,g.taken||=T;break}case"else":{if(!g)throw new Ee("#else without #if",d);if(g.seenElse)throw new Ee("#else after #else",d);if(h)throw new Ee("unexpected text after #else",d);g.active=g.parentActive&&!g.taken,g.taken=!0,g.seenElse=!0;break}case"endif":{if(!g)throw new Ee("#endif without #if",d);if(h)throw new Ee("unexpected text after #endif",d);i.pop();break}case"define":{if(!a())break;let T=h.match(Tf);if(!T)throw new Ee(`invalid #define '${h}'`,d);let[,b,,D,P=""]=T;if(P.includes("#"))throw new Ee("'#' and '##' are not supported in macros",d);let F=D===void 0?{body:P.trim()}:{params:D.split(",").map(B=>B.trim()).filter(B=>B.length>0),body:P.trim()};if(F.params?.some(B=>!Pn.test(B)))throw new Ee(`invalid parameters of macro '${b}'`,d);o.set(b,F),n||s.push(l);break}case"undef":{if(!a())break;if(!Pn.test(h))throw new Ee("#undef expects a name",d);o.delete(h),n||s.push(l);break}case"pragma":throw new Ee(`unsupported pragma '${h}'`,d);default:throw new Ee(`unsupported directive '#${f}'`,d)}}if(i.length>0)throw new Ee("missing #endif",i[i.length-1].line);return s.join(`
`)}var Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*\+\+i\s*\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(e){return e.replace(Cf,Pf)}function Pf(e,t,r,n){let o="";for(let i=parseInt(t);i<parseInt(r);++i)o+=n.replace(/\[\s*i\s*\]/g,`[${i}]`).replace(/UNROLLED_LOOP_INDEX/g,`${i}`);return o}var To=/\s*(defined\b|[A-Za-z_]\w*|\d+(?:\.\d*)?|&&|\|\||==|!=|<=|>=|[<>!()])/y,qc={"||":1,"&&":2,"==":3,"!=":3,"<":4,">":4,"<=":4,">=":4};function Df(e,t){let r=[];To.lastIndex=0;let n=0;for(;n<e.length&&!/^\s*$/.test(e.slice(n));){To.lastIndex=n;let o=To.exec(e);if(!o)throw new Ee(`unsupported token in '${e}' at '${e.slice(n).trim()}'`,t);r.push(o[1]),n=To.lastIndex}return r}function Xc(e,t,r){if(!e)throw new Ee("empty expression",r);let n=Df(e,r),o=0,i=d=>{throw new Ee(`${d} in '${e}'`,r)},a=()=>o<n.length?n[o++]:i("unexpected end"),s=d=>{let m=t.get(d);return m?m.params?i(`function-like macro '${d}'`):$c.test(m.body)?parseInt(m.body):i(`'${d}' is not an integer ('${m.body}')`):i(`undefined name '${d}'`)},c=()=>{let d=a();if(d==="!")return c()?0:1;if(d==="("){let m=u(0);return a()!==")"&&i("expected ')'"),m}if(d==="defined"){let m=n[o]==="(";m&&o++;let f=a();return Pn.test(f)||i("defined expects a name"),m&&a()!==")"&&i("expected ')'"),t.has(f)?1:0}return $c.test(d)?parseInt(d):Pn.test(d)?s(d):i(`unexpected '${d}'`)},u=d=>{let m=c();for(;o<n.length&&(qc[n[o]]??0)>d;){let f=n[o++],h=u(qc[f]);m=_f(f,m,h)}return m},l=u(0);return o<n.length&&i(`unexpected '${n[o]}'`),l!==0}function _f(e,t,r){switch(e){case"||":return t||r?1:0;case"&&":return t&&r?1:0;case"==":return t===r?1:0;case"!=":return t!==r?1:0;case"<":return t<r?1:0;case">":return t>r?1:0;case"<=":return t<=r?1:0;case">=":return t>=r?1:0}throw new Ee(`unsupported operator '${e}'`)}var Co=/[A-Za-z_]\w*/g;function Ro(e,t,r,n){let o="",i=0;for(Co.lastIndex=0;;){Co.lastIndex=i;let a=Co.exec(e);if(!a)break;let s=a[0],c=a.index,u=c+s.length;if(c>0&&/[\w.]/.test(e[c-1])){o+=e.slice(i,u),i=u;continue}let l=t.get(s);if(!l||r.has(s)){o+=e.slice(i,u),i=u;continue}let d=new Set(r).add(s);if(!l.params){o+=e.slice(i,c)+Ro(l.body,t,d,n),i=u;continue}let m=e.slice(u).match(/^\s*\(/);if(!m){o+=e.slice(i,u),i=u;continue}let{args:f,close:h}=Ef(e,u+m[0].length,s,n);if(f.length!==l.params.length&&!(l.params.length===0&&f.length===1&&!f[0]))throw new Ee(`macro '${s}' expects ${l.params.length} arguments, got ${f.length}`,n);let g=f.map(D=>Ro(D,t,r,n).trim()),T=l.params,b=l.body.replace(Co,D=>{let P=T.indexOf(D);return P>=0?g[P]:D});o+=e.slice(i,c)+Ro(b,t,d,n),i=h+1,u=i}return o+e.slice(i)}function Ef(e,t,r,n){let o=[],i=0,a="";for(let s=t;s<e.length;++s){let c=e[s];if(c==="(")i++;else if(c===")"){if(i===0)return o.push(a),{args:o,close:s};i--}else if(c===","&&i===0){o.push(a),a="";continue}a+=c}throw new Ee(`unterminated invocation of macro '${r}'`,n)}var Qc=`
precision mediump float;

varying vec4 vPosition;

// TODO: add as general pp option to remove banding?
// Iestyn's RGB dither from http://alex.vlachos.com/graphics/Alex_Vlachos_Advanced_VR_Rendering_GDC2015.pdf
vec3 ScreenSpaceDither(vec2 vScreenPos) {
    vec3 vDither = vec3(dot(vec2(171.0, 231.0), vScreenPos.xy));
    vDither.rgb = fract(vDither.rgb / vec3(103.0, 71.0, 97.0));
    return vDither.rgb / 255.0;
}

vec3 saturateColor(vec3 c, float amount) {
    // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(c, W));
    return mix(intensity, c, 1.0 + amount);
}

vec3 lightenColor(vec3 c, float amount) {
    return c + amount;
}

void main() {
    #if defined(dVariant_skybox)
        vec4 t = uViewDirectionProjectionInverse * vPosition;
        #ifdef enabledShaderTextureLod
            gl_FragColor = textureCubeLodEXT(tSkybox, uRotation * normalize(t.xyz / t.w), uBlur * 8.0);
        #else
            gl_FragColor = textureCube(tSkybox, uRotation * normalize(t.xyz / t.w));
        #endif
        gl_FragColor.a = uOpacity;
        gl_FragColor.rgb = lightenColor(saturateColor(gl_FragColor.rgb, uSaturation), uLightness);
    #elif defined(dVariant_image)
        vec2 coords;
        if (uViewportAdjusted) {
            coords = ((gl_FragCoord.xy - uViewport.xy) * (uTexSize / uViewport.zw) / uImageScale) + uImageOffset;
        } else {
            coords = (gl_FragCoord.xy / uImageScale) + uImageOffset;
        }
        #ifdef enabledShaderTextureLod
            gl_FragColor = texture2DLodEXT(tImage, vec2(coords.x, 1.0 - coords.y), uBlur * 8.0);
        #else
            gl_FragColor = texture2D(tImage, vec2(coords.x, 1.0 - coords.y));
        #endif
        gl_FragColor.a = uOpacity;
        gl_FragColor.rgb = lightenColor(saturateColor(gl_FragColor.rgb, uSaturation), uLightness);
    #elif defined(dVariant_horizontalGradient)
        float d;
        if (uViewportAdjusted) {
            d = ((gl_FragCoord.y - uViewport.y) * (uTexSize.y / uViewport.w) / uTexSize.y) + 1.0 - (uGradientRatio * 2.0);
        } else {
            d = (gl_FragCoord.y / uTexSize.y) + 1.0 - (uGradientRatio * 2.0);
        }
        gl_FragColor = vec4(mix(uGradientColorB, uGradientColorA, clamp(d, 0.0, 1.0)), 1.0);
        gl_FragColor.rgb += ScreenSpaceDither(gl_FragCoord.xy);
    #elif defined(dVariant_radialGradient)
        float d;
        if (uViewportAdjusted) {
            d = distance(vec2(0.5), (gl_FragCoord.xy - uViewport.xy) * (uTexSize / uViewport.zw) / uTexSize) + uGradientRatio - 0.5;
        } else {
            d = distance(vec2(0.5), gl_FragCoord.xy / uTexSize) + uGradientRatio - 0.5;
        }
        gl_FragColor = vec4(mix(uGradientColorB, uGradientColorA, 1.0 - clamp(d, 0.0, 1.0)), 1.0);
        gl_FragColor.rgb += ScreenSpaceDither(gl_FragCoord.xy);
    #endif
}
`;var Yc=`
precision mediump float;

varying vec4 vPosition;

void main() {
    vPosition = vec4(aPosition, 1.0, 1.0);
    gl_Position = vec4(aPosition, 1.0, 1.0);
}
`;var Kc=`
    precision highp float;

    void main() {
        vec2 coords = gl_FragCoord.xy / uTexSize;
        gl_FragColor = texture2D(tDpoitBackColor, coords);
        if (gl_FragColor.a == 0.0) {
            discard;
        }
    }
`;var Jc=`
precision highp float;
precision highp int;

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    float weightSum = uGaussianCoefficients[0];
    vec4 diffuseSum = texture2D(tInput, coords) * weightSum;

    for(int i = 1; i < dKernelRadius; ++i) {
        float x = float(i);
        float w = uGaussianCoefficients[i];
        vec2 offset = uDirection * uTexSizeInv * x;
        vec4 sample1 = texture2D(tInput, coords + offset);
        vec4 sample2 = texture2D(tInput, coords - offset);
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }

    gl_FragColor = diffuseSum / weightSum;
}
`;var eu=`
precision highp float;
precision highp int;

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, uBloomRadius);
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    gl_FragColor = uBloomStrength * (
        lerpBloomFactor(uBloomFactors[0]) * vec4(uBloomTints[0], 1.0) * texture2D(tBlur1, coords) +
        lerpBloomFactor(uBloomFactors[1]) * vec4(uBloomTints[1], 1.0) * texture2D(tBlur2, coords) +
        lerpBloomFactor(uBloomFactors[2]) * vec4(uBloomTints[2], 1.0) * texture2D(tBlur3, coords) +
        lerpBloomFactor(uBloomFactors[3]) * vec4(uBloomTints[3], 1.0) * texture2D(tBlur4, coords) +
        lerpBloomFactor(uBloomFactors[4]) * vec4(uBloomTints[4], 1.0) * texture2D(tBlur5, coords)
    );
}
`;var z=`
// TODO find a better place for these convenience defines

#if defined(dRenderVariant_colorBlended) || defined(dRenderVariant_colorWboit) || defined(dRenderVariant_colorDpoit)
    #define dRenderVariant_color
#endif

#if defined(dColorType_texture) || defined(dColorType_grid)
    #define dColorType_varying
#endif

#if ((defined(dRenderVariant_color) || defined(dRenderVariant_tracing)) && defined(dColorMarker)) || defined(dRenderVariant_marking)
    #define dNeedsMarker
#endif

#if defined(dXrayShaded_on) || defined(dXrayShaded_inverted)
    #define dXrayShaded
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || ((defined(dRenderVariant_depth) || defined(dRenderVariant_pick) || defined(dRenderVariant_marking)) && defined(dXrayShaded))
    #define dNeedsNormal
#endif

#define MaskAll 0
#define MaskOpaque 1
#define MaskTransparent 2

//

#define PI 3.14159265
#define RECIPROCAL_PI 0.31830988618
#define EPSILON 1e-6
#define ONE_MINUS_EPSILON 1.0 - EPSILON
#define TWO_PI 6.2831853
#define HALF_PI 1.570796325

#define PALETTE_SCALE 16777214.0 // (1 << 24) - 2

#define saturate(a) clamp(a, 0.0, 1.0)

#if __VERSION__ == 100
    #define round(x) floor((x) + 0.5)
#endif

float intDiv(const in float a, const in float b) { return float(int(a) / int(b)); }
vec2 ivec2Div(const in vec2 a, const in vec2 b) { return vec2(ivec2(a) / ivec2(b)); }
float intMod(const in float a, const in float b) { return a - b * float(int(a) / int(b)); }
int imod(const in int a, const in int b) { return a - b * (a / b); }

float pow2(const in float x) { return x * x; }

vec3 packIntToRGB(in float value) {
    value = clamp(round(value), 0.0, 16777216.0 - 1.0) + 1.0;
    vec3 c = vec3(0.0);
    c.b = mod(value, 256.0);
    value = floor(value / 256.0);
    c.g = mod(value, 256.0);
    value = floor(value / 256.0);
    c.r = mod(value, 256.0);
    return c / 255.0;
}
float unpackRGBToInt(const in vec3 rgb) {
    return (floor(rgb.r * 255.0 + 0.5) * 256.0 * 256.0 + floor(rgb.g * 255.0 + 0.5) * 256.0 + floor(rgb.b * 255.0 + 0.5)) - 1.0;
}

vec2 packUnitIntervalToRG(const in float v) {
    vec2 enc;
    enc.xy = vec2(fract(v * 256.0), v);
    enc.y -= enc.x * (1.0 / 256.0);
    enc.xy *=  256.0 / 255.0;

    return enc;
}

float unpackRGToUnitInterval(const in vec2 enc) {
    return dot(enc, vec2(255.0 / (256.0 * 256.0), 255.0 / 256.0));
}

// occlusion factor from a packed SSAO texel, values close to 0.0 are treated as errors (no occlusion)
float unpackSsao(const in vec4 v) {
    float ssao = unpackRGToUnitInterval(v.xy);
    return ssao > 0.001 && ssao <= 0.999 ? ssao : 1.0;
}

// one texel of a packed SSAO target for \`getSsaoUpsampled\`: its occlusion times its weight, the weight added to
// \`weightSum\` (bilinear, and by how close its linear depth in \`zw\` is to \`viewZ\`)
float ssaoUpsampleTexel(const in sampler2D tex, const in vec2 size, vec2 texel, const in float bilinear, const in float viewZ, const in float near, const in float far, inout float weightSum) {
    texel = clamp(texel, vec2(0.0), size - 1.0);
    vec4 v = texture2D(tex, (texel + 0.5) / size);
    float texelViewZ = unpackRGToUnitInterval(v.zw) * (far - near) - far;
    float weight = bilinear / (0.001 + abs(texelViewZ - viewZ));
    weightSum += weight;
    return unpackSsao(v) * weight;
}

// occlusion of a packed SSAO target of a lower resolution (\`size\` texels) at \`coords\`, for a pixel at view z
// \`viewZ\`: the four nearest texels weighted bilinearly and by their depth, so that occlusion does not bleed across
// depth edges
float getSsaoUpsampled(const in sampler2D tex, const in vec2 size, const in vec2 coords, const in float viewZ, const in float near, const in float far) {
    vec2 p = coords * size - 0.5;
    vec2 i = floor(p);
    vec2 f = p - i;
    float weightSum = 0.0;
    float sum = ssaoUpsampleTexel(tex, size, i, (1.0 - f.x) * (1.0 - f.y), viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(1.0, 0.0), f.x * (1.0 - f.y), viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(0.0, 1.0), (1.0 - f.x) * f.y, viewZ, near, far, weightSum);
    sum += ssaoUpsampleTexel(tex, size, i + vec2(1.0, 1.0), f.x * f.y, viewZ, near, far, weightSum);
    return weightSum > 0.0 ? sum / weightSum : 1.0;
}

float pack2x4(vec2 v) {
    vec2 clamped_v = clamp(v, 0.0, 1.0);
    vec2 scaled_v = floor(clamped_v * 15.0 + 0.5); // round to 0\u201315
    float c = scaled_v.x + scaled_v.y * 16.0;
    return c / 255.0;
}

vec2 unpack2x4(float f) {
    float c = floor(f * 255.0 + 0.5);
    float lo = mod(c, 16.0);
    float hi = floor(c / 16.0);
    return vec2(lo, hi) / 15.0;
}

// window depth of a clip z / w, and back: the clip depth range is [0, 1] with \`clipZeroToOne\`, [-1, 1] otherwise
float clipZToDepth(const in float z) {
    #ifdef clipZeroToOne
        return z;
    #else
        return 0.5 + 0.5 * z;
    #endif
}

float depthToClipZ(const in float depth) {
    #ifdef clipZeroToOne
        return depth;
    #else
        return depth * 2.0 - 1.0;
    #endif
}

vec3 screenSpaceToViewSpace(const in vec3 ssPos, const in mat4 invProjection) {
    vec4 p = vec4(ssPos.xy * 2.0 - 1.0, depthToClipZ(ssPos.z), 1.0);
    p = invProjection * p;
    return p.xyz / p.w;
}

const float PackUpscale = 256.0 / 255.0; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255.0 / 256.0; // 0..1 -> fraction (excluding 1)
const vec3 PackFactors = vec3(256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);
const vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);
const float ShiftRight8 = 1.0 / 256.0;

vec4 packDepthToRGBA(const in float v) {
    vec4 r = vec4(fract(v * PackFactors), v);
    r.yzw -= r.xyz * ShiftRight8; // tidy overflow
    return r * PackUpscale;
}
float unpackRGBAToDepth(const in vec4 v) {
    return dot(v, UnpackFactors);
}

vec4 packDepthWithAlphaToRGBA(const in float depth, const in float alpha){
    vec3 r = vec3(fract(depth * PackFactors.yz), depth);
    r.yz -= r.xy * ShiftRight8; // tidy overflow
    return vec4(r * PackUpscale, alpha);
}
vec2 unpackRGBAToDepthWithAlpha(const in vec4 v) {
    return vec2(dot(v.xyz, UnpackFactors.yzw), v.w);
}

// Green stays below 0.5 for visible fragments and above it for hidden ones.
// Opaque fragments retain the original 0/1 values; opacity uses the outer quarters.
vec4 packMarkingMask(const in float hidden, const in bool highlight, const in float fogAlpha, const in float opacity) {
    float g = hidden + (1.0 - 2.0 * hidden) * (1.0 - opacity) * 0.25;
    return vec4(0.0, g, highlight ? 1.0 : 0.0, fogAlpha);
}
float unpackMarkingOpacity(const in float g) {
    return clamp(1.0 - 4.0 * min(g, 1.0 - g), 0.0, 1.0);
}

vec4 sRGBToLinear(const in vec4 c) {
    return vec4(mix(pow(c.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), c.rgb * 0.0773993808, vec3(lessThanEqual(c.rgb, vec3(0.04045)))), c.a);
}
vec4 linearTosRGB(const in vec4 c) {
    return vec4(mix(pow(c.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), c.rgb * 12.92, vec3(lessThanEqual(c.rgb, vec3(0.0031308)))), c.a);
}

float luminance(vec3 c) {
    // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(c, W);
}

float linearizeDepth(const in float depth, const in float near, const in float far) {
    return (2.0 * near) / (2.0 * near + depth * (far - near));
}

// window depth is reversed (near 1, far 0, see \`DepthRangeTag\`), which keeps the precision of small (far) depths
float perspectiveDepthToViewZ(const in float depth, const in float near, const in float far) {
    return -(near * far) / (near + (far - near) * depth);
}

float orthographicDepthToViewZ(const in float depth, const in float near, const in float far) {
    return depth * (far - near) - far;
}

float depthToViewZ(const in float isOrtho, const in float linearClipZ, const in float near, const in float far) {
    return isOrtho == 1.0 ? orthographicDepthToViewZ(linearClipZ, near, far) : perspectiveDepthToViewZ(linearClipZ, near, far);
}

// see https://github.com/graphitemaster/normals_revisited and https://www.shadertoy.com/view/3s33zj
mat3 adjoint(const in mat4 m) {
    return mat3(
        cross(m[1].xyz, m[2].xyz),
        cross(m[2].xyz, m[0].xyz),
        cross(m[0].xyz, m[1].xyz)
    );
}

#if __VERSION__ == 100
    // transpose

    float transpose(const in float m) {
        return m;
    }

    mat2 transpose2(const in mat2 m) {
        return mat2(
            m[0][0], m[1][0],
            m[0][1], m[1][1]
        );
    }

    mat3 transpose3(const in mat3 m) {
        return mat3(
            m[0][0], m[1][0], m[2][0],
            m[0][1], m[1][1], m[2][1],
            m[0][2], m[1][2], m[2][2]
        );
    }

    mat4 transpose4(const in mat4 m) {
        return mat4(
            m[0][0], m[1][0], m[2][0], m[3][0],
            m[0][1], m[1][1], m[2][1], m[3][1],
            m[0][2], m[1][2], m[2][2], m[3][2],
            m[0][3], m[1][3], m[2][3], m[3][3]
        );
    }

    // inverse

    float inverse(const in float m) {
        return 1.0 / m;
    }

    mat2 inverse2(const in mat2 m) {
        return mat2(m[1][1],-m[0][1],
                -m[1][0], m[0][0]) / (m[0][0]*m[1][1] - m[0][1]*m[1][0]);
    }

    mat3 inverse3(const in mat3 m) {
        float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];
        float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];
        float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];

        float b01 = a22 * a11 - a12 * a21;
        float b11 = -a22 * a10 + a12 * a20;
        float b21 = a21 * a10 - a11 * a20;

        float det = a00 * b01 + a01 * b11 + a02 * b21;

        return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),
                    b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),
                    b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;
    }

    mat4 inverse4(const in mat4 m) {
        float
            a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
            a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
            a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
            a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],

            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,

            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        return mat4(
            a11 * b11 - a12 * b10 + a13 * b09,
            a02 * b10 - a01 * b11 - a03 * b09,
            a31 * b05 - a32 * b04 + a33 * b03,
            a22 * b04 - a21 * b05 - a23 * b03,
            a12 * b08 - a10 * b11 - a13 * b07,
            a00 * b11 - a02 * b08 + a03 * b07,
            a32 * b02 - a30 * b05 - a33 * b01,
            a20 * b05 - a22 * b02 + a23 * b01,
            a10 * b10 - a11 * b08 + a13 * b06,
            a01 * b08 - a00 * b10 - a03 * b06,
            a30 * b04 - a31 * b02 + a33 * b00,
            a21 * b02 - a20 * b04 - a23 * b00,
            a11 * b07 - a10 * b09 - a12 * b06,
            a00 * b09 - a01 * b07 + a02 * b06,
            a31 * b01 - a30 * b03 - a32 * b00,
            a20 * b03 - a21 * b01 + a22 * b00) / det;
    }

    #define isNaN(x) ((x) != (x))
    #define isInf(x) ((x) == (x) + 1.0)
#else
    #define transpose2(m) transpose(m)
    #define transpose3(m) transpose(m)
    #define transpose4(m) transpose(m)

    #define inverse2(m) inverse(m)
    #define inverse3(m) inverse(m)
    #define inverse4(m) inverse(m)

    #define isNaN isnan
    #define isInf isinf
#endif

float hash(in float h) {
    return fract(sin(h) * 43758.5453123);
}

float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 157.0 + 113.0 * p.z;
    return mix(
        mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

float fbm(in vec3 p) {
    float f = 0.0;
    f += 0.5 * noise(p);
    p *= 2.01;
    f += 0.25 * noise(p);
    p *= 2.02;
    f += 0.125 * noise(p);

    return f;
}
`;var tu=`
precision highp float;
precision highp int;

${z}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

float getDepth(const in vec2 coords) {
    return max(getDepthOpaque(coords), getDepthTransparent(coords));
}

bool isBackground(const in float depth) {
    // the far plane (depth is reversed), packed or raw
    return depth == 0.0;
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec4 opaqueTexel = texture2D(tColorOpaque, coords);
    vec4 transparentTexel = texture2D(tColorTransparent, coords);
    // fog illumination's un-fogged opaque seed by the opaque depth, matching standard's per-layer fog
    if (!uOpaqueFogged) {
        opaqueTexel.rgb *= 1.0 - smoothstep(uFogNear, uFogFar, abs(depthToViewZ(uIsOrtho, getDepthOpaque(coords), uNear, uFar)));
    }
    // PMA OVER composite, matches postprocessing's final transparency blend.
    vec4 texel = transparentTexel + opaqueTexel * (1.0 - transparentTexel.a);
    float emissive = texture2D(tEmissive, coords).a;
    float depth = getDepth(coords);

    if (isBackground(depth)) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
    }

    vec4 outputColor = vec4(uDefaultColor.rgb, uDefaultOpacity);

    #if defined(dMode_luminosity)
        vec3 luma = vec3(0.299, 0.587, 0.114);
        float v = dot(texel.xyz, luma);
        float alpha = smoothstep(uLuminosityThreshold, uLuminosityThreshold + uSmoothWidth, v);

        gl_FragColor = mix(outputColor, texel, alpha);
    #elif defined(dMode_emissive)
        // the prepass already holds the fogged emissive color, free of lighting/exposure
        gl_FragColor = texture2D(tEmissive, coords);
    #endif
}
`;var ru=`
precision mediump float;

// adapted from https://www.shadertoy.com/view/stXSWB

/*
* FidelityFX Super Resolution scales up a low resolution
* image, while adding fine detail.
*
* MIT Open License
*
* https://gpuopen.com/fsr
*
* Left: FSR processed
* Right: Original texture, bilinear interpolation
*
* Mouse at top: Sharpness 0 stops (maximum)
* Mouse at bottom: Sharpness 2 stops (minimum)
*
* It works in two passes-
*   EASU upsamples the image with a clamped Lanczos kernel.
*   RCAS sharpens the image at the target resolution.
*
* I needed to make a few changes to improve readability and
* WebGL compatibility in an algorithm I don't fully understand.
* Expect bugs.
*
* Shader not currently running for WebGL1 targets (eg. mobile Safari)
*
* There is kind of no point to using FSR in Shadertoy, as it renders buffers
* at full target resolution. But this might be useful for WebGL based demos
* running smaller-than-target render buffers.
*
* For sharpening with a full resolution render buffer,
* FidelityFX CAS is a better option.
* https://www.shadertoy.com/view/ftsXzM
*
* For readability and compatibility, these optimisations have been removed:
*   * Fast approximate inverse and inversesqrt
*   * textureGather fetches (not WebGL compatible)
*   * Multiplying by reciprocal instead of division
*
* Apologies to AMD for the numerous slowdowns and errors I have introduced.
*
*/

/***** RCAS *****/
#define FSR_RCAS_LIMIT (0.25-(1.0/16.0))

// Input callback prototypes that need to be implemented by calling shader
vec4 FsrRcasLoadF(vec2 p);
//------------------------------------------------------------------------------------------------------------------------------
void FsrRcasCon(
    out float con,
    // The scale is {0.0 := maximum, to N>0, where N is the number of stops (halving) of the reduction of sharpness}.
    float sharpness
) {
    // Transform from stops to linear value.
    con = exp2(-sharpness);
}

vec3 FsrRcasF(
    vec2 ip, // Integer pixel position in output.
    float con
) {
    // Constant generated by RcasSetup().
    // Algorithm uses minimal 3x3 pixel neighborhood.
    //    b
    //  d e f
    //    h
    vec2 sp = vec2(ip);
    vec3 b = FsrRcasLoadF(sp + vec2( 0,-1)).rgb;
    vec3 d = FsrRcasLoadF(sp + vec2(-1, 0)).rgb;
    vec3 e = FsrRcasLoadF(sp).rgb;
    vec3 f = FsrRcasLoadF(sp + vec2( 1, 0)).rgb;
    vec3 h = FsrRcasLoadF(sp + vec2( 0, 1)).rgb;

    // Luma times 2.
    float bL = b.g + .5 * (b.b + b.r);
    float dL = d.g + .5 * (d.b + d.r);
    float eL = e.g + .5 * (e.b + e.r);
    float fL = f.g + .5 * (f.b + f.r);
    float hL = h.g + .5 * (h.b + h.r);

    // Noise detection.
    #ifdef dDenoise
        float nz = .25 * (bL + dL + fL + hL) - eL;
        nz=clamp(
            abs(nz)
            /(
                max(max(bL,dL),max(eL,max(fL,hL)))
                -min(min(bL,dL),min(eL,min(fL,hL)))
            ),
            0., 1.
        );
        nz=1.-.5*nz;
    #endif

    // Min and max of ring.
    vec3 mn4 = min(b, min(f, h));
    vec3 mx4 = max(b, max(f, h));

    // Immediate constants for peak range.
    vec2 peakC = vec2(1., -4.);

    // Limiters, these need to be high precision RCPs.
    vec3 hitMin = mn4 / (4. * mx4);
    vec3 hitMax = (peakC.x - mx4) / (4.* mn4 + peakC.y);
    vec3 lobeRGB = max(-hitMin, hitMax);
    float lobe = max(
        -FSR_RCAS_LIMIT,
        min(max(lobeRGB.r, max(lobeRGB.g, lobeRGB.b)), 0.)
    )*con;

    // Apply noise removal.
    #ifdef dDenoise
        lobe *= nz;
    #endif

    // Resolve, which needs the medium precision rcp approximation to avoid visible tonality changes.
    return (lobe * (b + d + h + f) + e) / (4. * lobe + 1.);
}


vec4 FsrRcasLoadF(vec2 p) {
    return texture2D(tColor, p * uTexSizeInv);
}

void main() {
    // Set up constants
    float con;
    FsrRcasCon(con, uSharpness);

    // Perform RCAS pass
    vec3 col = FsrRcasF(gl_FragCoord.xy, con);

    gl_FragColor = vec4(col, FsrRcasLoadF(gl_FragCoord.xy).a);
}
`;var ba=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var nu=`
precision highp float;

varying vec3 vPosition;
varying vec4 vColor;

const float p = 2.0;

void main() {
    vec2 v = gl_FragCoord.xy - vec2(uCurrentX, uCurrentY) - 0.5;
    vec3 fragPos = vec3(v.x, v.y, uCurrentSlice);
    float dist = distance(fragPos, vPosition);
    if (dist > p) discard;

    float f = p - dist;
    gl_FragColor = vColor * f;
    gl_FragData[1] = vec4(f);
}
`;var ke=`
vec4 readFromTexture(const in sampler2D tex, const in float i, const in vec2 dim) {
    float x = intMod(i, dim.x);
    float y = floor(intDiv(i, dim.x));
    vec2 uv = (vec2(x, y) + 0.5) / dim;
    return texture2D(tex, uv);
}

vec4 readFromTexture(const in sampler2D tex, const in int i, const in vec2 dim) {
    int x = imod(i, int(dim.x));
    int y = i / int(dim.x);
    vec2 uv = (vec2(x, y) + 0.5) / dim;
    return texture2D(tex, uv);
}
`;var ou=`
precision highp float;

${z}
${ke}

#define SampleID int(aSample)

varying vec3 vPosition;
varying vec4 vColor;

void main() {
    vec3 position = readFromTexture(tPosition, SampleID, uGeoTexDim).xyz;
    float group = unpackRGBToInt(readFromTexture(tGroup, SampleID, uGeoTexDim).rgb);

    position = (aTransform * vec4(position, 1.0)).xyz;
    gl_PointSize = 7.0;
    vPosition = (position - uBboxMin) / uResolution;
    gl_Position = vec4(((position - uBboxMin) / uBboxSize) * 2.0 - 1.0, 1.0);
    #ifdef clipZeroToOne
        // z inside the clip depth range, as with [-1, 1]
        gl_Position.z = gl_Position.z * 0.5 + 0.5;
    #endif

    #if defined(dColorType_group)
        vColor = readFromTexture(tColor, group, uColorTexDim);
    #elif defined(dColorType_groupInstance)
        vColor = readFromTexture(tColor, aInstance * float(uGroupCount) + group, uColorTexDim);
    #endif
}
`;var iu=`
precision highp float;

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, coords);
    float count = texture2D(tCount, coords).r;

    gl_FragColor = color / count;
}
`;var au=`
precision highp float;

${z}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    #ifdef dPackDepth
        gl_FragColor = packDepthToRGBA(texture2D(tColor, coords).r);
    #else
        gl_FragColor = texture2D(tColor, coords);
    #endif
}
`;var ct=`
#if dClipObjectCount != 0
    #if defined(dClipping)
        #if __VERSION__ == 100 || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat in float vClipping;
        #endif
    #endif
#endif

#if defined(dNeedsMarker)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat in float vMarker;
    #endif
#endif

#if defined(dRenderVariant_colorDpoit)
    #define MAX_DPOIT_DEPTH 99999.0 // NOTE constant also set in TypeScript
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

bool interior;

float getDepthPacked(const in vec2 coords) {
    return unpackRGBAToDepth(texture2D(tDepth, coords));
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

float calcDepth(const in vec3 pos) {
    vec2 clipZW = pos.z * uProjection[2].zw + uProjection[3].zw;
    return clipZToDepth(clipZW.x / clipZW.y);
}

vec3 perturbNormal(in vec3 modelPosition, in vec3 viewPosition, in vec3 normal, in float frequency, in float scale) {
    vec3 t1 = normalize(cross(normal, abs(normal.x) < 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0)));
    vec3 t2 = cross(normal, t1);
    float e = max((uIsOrtho == 1.0 ? 2.0 : 2.0 * abs(viewPosition.z)) / (uProjection[1][1] * uDrawingBufferSize.y), 0.01 / frequency);
    vec3 p = modelPosition * frequency;
    float h0 = fbm(p);
    float h1 = fbm(p + (mat3(uInvView) * t1) * (e * frequency));
    float h2 = fbm(p + (mat3(uInvView) * t2) * (e * frequency));
    return normalize(normal - scale * ((h1 - h0) * t1 + (h2 - h0) * t2) / e);
}

#ifdef dXrayShaded
    float calcXrayShadedAlpha(in float alpha, const in vec3 normal) {
        #if defined(dXrayShaded_on)
            alpha *= 1.0 - pow(abs(dot(normal, vec3(0.0, 0.0, 1.0))), uXrayEdgeFalloff);
        #elif defined(dXrayShaded_inverted)
            alpha *= pow(abs(dot(normal, vec3(0.0, 0.0, 1.0))), uXrayEdgeFalloff);
        #endif
        return clamp(alpha, 0.001, 0.999);
    }
#endif
`;var Rt=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_varying)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
        varying float vPaletteV;
    #endif

    #ifdef dOverpaint
        varying vec4 vOverpaint;
    #endif

    #ifdef dEmissive
        varying float vEmissive;
    #endif

    #ifdef dSubstance
        varying vec4 vSubstance;
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        varying float vEmissive;
    #endif
#elif defined(dRenderVariant_pick)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        #ifdef requiredDrawBuffers
            varying vec4 vObject;
            varying vec4 vInstance;
            varying vec4 vGroup;
        #else
            varying vec4 vColor;
        #endif
    #else
        #ifdef requiredDrawBuffers
            flat in vec4 vObject;
            flat in vec4 vInstance;
            flat in vec4 vGroup;
        #else
            flat in vec4 vColor;
        #endif
    #endif
#endif

#ifdef dTransparency
    varying float vTransparency;
#endif
`;var hr=`
struct PhysicalMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
};

struct IncidentLight {
    vec3 color;
    vec3 direction;
};

struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};

struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
};

vec3 BRDF_Lambert(const in vec3 diffuseColor) {
    return RECIPROCAL_PI * diffuseColor;
}

vec3 F_Schlick(const in vec3 f0, const in float f90, const in float dotVH) {
    // Original approximation by Christophe Schlick '94
    // float fresnel = pow( 1.0 - dotVH, 5.0 );
    // Optimized variant (presented by Epic at SIGGRAPH '13)
    // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
    float fresnel = exp2((-5.55473 * dotVH - 6.98316) * dotVH);
    return f0 * (1.0 - fresnel) + (f90 * fresnel);
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV) {
    float a2 = pow2(alpha);
    float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
    float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
    return 0.5 / max(gv + gl, EPSILON);
}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX(const in float alpha, const in float dotNH) {
    float a2 = pow2(alpha);
    float denom = pow2(dotNH) * (a2 - 1.0) + 1.0; // avoid alpha = 0 with dotNH = 1
    return RECIPROCAL_PI * a2 / pow2(denom);
}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX(const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness) {
    float alpha = pow2(roughness); // UE4's roughness
    vec3 halfDir = normalize( lightDir + viewDir);
    float dotNL = saturate(dot(normal, lightDir));
    float dotNV = saturate(dot(normal, viewDir));
    float dotNH = saturate(dot(normal, halfDir));
    float dotVH = saturate(dot(viewDir, halfDir));
    vec3 F = F_Schlick(f0, f90, dotVH);
    float V = V_GGX_SmithCorrelated(alpha, dotNL, dotNV);
    float D = D_GGX(alpha, dotNH);
    return F * (V * D);
}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
    float dotNV = saturate(dot(normal, viewDir));
    const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
    const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
    vec4 r = roughness * c0 + c1;
    float a004 = min(r.x * r.x, exp2(-9.28 * dotNV)) * r.x + r.y;
    vec2 fab = vec2(-1.04, 1.04) * a004 + r.zw;
    return fab;
}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
    vec2 fab = DFGApprox(normal, viewDir, roughness);
    vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
    float Ess = fab.x + fab.y;
    float Ems = 1.0 - Ess;
    vec3 Favg = specularColor + (1.0 - specularColor) * 0.047619; // 1/21
    vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
    singleScatter += FssEss;
    multiScatter += Fms * Ems;
}

void RE_Direct_Physical(const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    float dotNL = saturate(dot(geometry.normal, directLight.direction));
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directSpecular += irradiance * BRDF_GGX(directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness);
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse_Physical(const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    // Both indirect specular and indirect diffuse light accumulate here
    vec3 singleScattering = vec3(0.0);
    vec3 multiScattering = vec3(0.0);
    vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
    computeMultiscattering(geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering);
    vec3 diffuse = material.diffuseColor * (1.0 - ( singleScattering + multiScattering));
    reflectedLight.indirectSpecular += radiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
`;var Te=`
vec3 quaternionTransform(const in vec4 q, const in vec3 v) {
    vec3 t = 2.0 * cross(q.xyz, v);
    return v + q.w * t + cross(q.xyz, t);
}

vec4 computePlane(const in vec3 normal, const in vec3 inPoint) {
    return vec4(normalize(normal), -dot(normal, inPoint));
}

float planeSD(const in vec4 plane, const in vec3 center) {
    return -dot(plane.xyz, center - plane.xyz * -plane.w);
}

float sphereSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    return (
        length(quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position) / size) - 1.0
    ) * min(min(size.x, size.y), size.z);
}

float cubeSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 d = abs(quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position)) - size;
    return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
}

float cylinderSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 t = quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position);

    vec2 d = abs(vec2(length(t.xz), t.y)) - size.xy;
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}

float infiniteConeSD(const in vec3 position, const in vec4 rotation, const in vec3 size, const in vec3 center) {
    vec3 t = quaternionTransform(vec4(-rotation.x, -rotation.y, -rotation.z, rotation.w), center - position);

    float q = length(t.xy);
    return dot(size.xy, vec2(q, t.z));
}

float getSignedDistance(const in vec3 center, const in int type, const in vec3 position, const in vec4 rotation, const in vec3 scale, const in mat4 transform) {
    vec3 c = (transform * vec4(center, 1.0)).xyz;
    if (type == 1) {
        vec3 normal = quaternionTransform(rotation, vec3(0.0, 1.0, 0.0));
        vec4 plane = computePlane(normal, position);
        return planeSD(plane, c);
    } else if (type == 2) {
        return sphereSD(position, rotation, scale * 0.5, c);
    } else if (type == 3) {
        return cubeSD(position, rotation, scale * 0.5, c);
    } else if (type == 4) {
        return cylinderSD(position, rotation, scale * 0.5, c);
    } else if (type == 5) {
        return infiniteConeSD(position, rotation, scale * 0.5, c);
    } else {
        return 0.1;
    }
}

#if __VERSION__ == 100
    // 8-bit
    int bitwiseAnd(in int a, in int b) {
        int d = 128;
        int result = 0;
        for (int i = 0; i < 8; ++i) {
            if (d <= 0) break;
            if (a >= d && b >= d) result += d;
            if (a >= d) a -= d;
            if (b >= d) b -= d;
            d /= 2;
        }
        return result;
    }

    bool hasBit(const in int mask, const in int bit) {
        return bitwiseAnd(mask, bit) == 0;
    }

    // bit of the clip object \`index\` in the clipping groups flag
    int clipBit(const in int index) {
        int bit = 1;
        for (int i = 0; i < 16; ++i) {
            if (i == index) break;
            bit *= 2;
        }
        return bit;
    }
#else
    bool hasBit(const in int mask, const in int bit) {
        return (mask & bit) == 0;
    }

    // bit of the clip object \`index\` in the clipping groups flag
    int clipBit(const in int index) {
        return 1 << index;
    }
#endif

#if dClipObjectCount != 0
    bool clipIgnored(const in int index) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
            return flag != 0 && !hasBit(flag, clipBit(index));
        #else
            return false;
        #endif
    }

    bool clipTest(const in vec3 center) {
        // flag is a bit-flag for clip-objects to ignore
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
                bool test = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]) <= 0.0;
                if ((!uClipObjectInvert[i] && test) || (uClipObjectInvert[i] && !test)) {
                    return true;
                }
            }
        }
        #pragma unroll_loop_end
        return false;
    }

    float clipDistance(const in vec3 center) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        float d = 1.0e10;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
                float sd = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]);
                d = min(d, uClipObjectInvert[i] ? -sd : sd);
            }
        }
        #pragma unroll_loop_end
        return d;
    }

    vec3 clipNormal(const in vec3 center) {
        vec2 e = vec2(0.01, 0.0);
        return normalize(vec3(
            clipDistance(center + e.xyy) - clipDistance(center - e.xyy),
            clipDistance(center + e.yxy) - clipDistance(center - e.yxy),
            clipDistance(center + e.yyx) - clipDistance(center - e.yyx)
        ));
    }

    vec2 clipHalfLine(const in float f0, const in float f1) {
        float df = f1 - f0;
        if (abs(df) < 1.0e-12) return f0 <= 0.0 ? vec2(-1.0e6, 1.0e6) : vec2(1.0e6, -1.0e6);
        float sr = -f0 / df;
        return df < 0.0 ? vec2(sr, 1.0e6) : vec2(-1.0e6, sr);
    }

    vec2 clipSlab(const in float q0, const in float q1, const in float size) {
        vec2 a = clipHalfLine(q0 - size, q1 - size);
        vec2 b = clipHalfLine(-q0 - size, -q1 - size);
        return vec2(max(a.x, b.x), min(a.y, b.y));
    }

    vec2 clipQuadratic(const in float a, const in float b, const in float c) {
        if (a < 1.0e-12) return c <= 0.0 ? vec2(-1.0e6, 1.0e6) : vec2(1.0e6, -1.0e6);
        float disc = b * b - a * c;
        if (disc < 0.0) return vec2(1.0e6, -1.0e6);
        float sq = sqrt(disc);
        return vec2((-b - sq) / a, (-b + sq) / a);
    }

    vec2 clipObjectInterval(const in int type, const in vec3 position, const in vec4 rotation, const in vec3 scale, const in mat4 transform, const in vec3 pFront, const in vec3 pBack) {
        vec3 cF = (transform * vec4(pFront, 1.0)).xyz;
        vec3 cB = (transform * vec4(pBack, 1.0)).xyz;
        if (type == 1) {
            vec4 plane = computePlane(quaternionTransform(rotation, vec3(0.0, 1.0, 0.0)), position);
            return clipHalfLine(planeSD(plane, cF), planeSD(plane, cB));
        }
        vec4 invRotation = vec4(-rotation.xyz, rotation.w);
        vec3 qF = quaternionTransform(invRotation, cF - position);
        vec3 qB = quaternionTransform(invRotation, cB - position);
        vec3 size = scale * 0.5;
        if (type == 2) {
            vec3 o = qF / size, d = (qB - qF) / size;
            return clipQuadratic(dot(d, d), dot(o, d), dot(o, o) - 1.0);
        } else if (type == 3) {
            vec2 x = clipSlab(qF.x, qB.x, size.x), y = clipSlab(qF.y, qB.y, size.y), z = clipSlab(qF.z, qB.z, size.z);
            return vec2(max(x.x, max(y.x, z.x)), min(x.y, min(y.y, z.y)));
        } else if (type == 4) {
            vec2 o = qF.xz, d = (qB - qF).xz;
            vec2 body = clipQuadratic(dot(d, d), dot(o, d), dot(o, o) - size.x * size.x);
            vec2 slab = clipSlab(qF.y, qB.y, size.y);
            return vec2(max(body.x, slab.x), min(body.y, slab.y));
        } else if (type == 5) {
            vec2 xyF = qF.xy, xyd = (qB - qF).xy;
            float hF = -size.y * qF.z, hd = -size.y * (qB.z - qF.z);
            vec2 nappe = clipHalfLine(-hF, -hF - hd);
            float a = size.x * size.x * dot(xyd, xyd) - hd * hd;
            float b = size.x * size.x * dot(xyF, xyd) - hF * hd;
            float c = size.x * size.x * dot(xyF, xyF) - hF * hF;
            if (a > 1.0e-12) {
                vec2 g = clipQuadratic(a, b, c);
                return vec2(max(g.x, nappe.x), min(g.y, nappe.y));
            }
            float disc = b * b - a * c;
            if (a < -1.0e-12 && disc >= 0.0) {
                float sq = sqrt(disc);
                float s1 = (-b + sq) / a, s2 = (-b - sq) / a;
                vec2 lo = vec2(max(-1.0e6, nappe.x), min(s1, nappe.y));
                vec2 hi = vec2(max(s2, nappe.x), min(1.0e6, nappe.y));
                return lo.x <= lo.y ? lo : hi;
            }
            vec2 lin = clipHalfLine(c, 2.0 * b + a + c);
            return vec2(max(lin.x, nappe.x), min(lin.y, nappe.y));
        }
        return vec2(1.0e6, -1.0e6);
    }

    float clipExit(const in vec3 pFront, const in vec3 pBack, const in float sStart) {
        #if defined(dClipping)
            int flag = int(floor(vClipping * 255.0 + 0.5));
        #else
            int flag = 0;
        #endif

        float s = sStart;
        for (int k = 0; k <= dClipObjectCount; ++k) {
            float sNext = s;
            #pragma unroll_loop_start
            for (int i = 0; i < dClipObjectCount; ++i) {
                if (UNROLLED_LOOP_INDEX != uSolidInteriorClip && (flag == 0 || hasBit(flag, clipBit(UNROLLED_LOOP_INDEX)))) {
                    vec2 iv = clipObjectInterval(uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i], pFront, pBack);
                    if (uClipObjectInvert[i]) {
                        if (iv.x > iv.y || s > iv.y) sNext = 1.0e6;
                        else if (s < iv.x) sNext = max(sNext, iv.x);
                    } else if (s > iv.x && s < iv.y) {
                        sNext = max(sNext, iv.y);
                    }
                }
            }
            #pragma unroll_loop_end
            if (sNext == s) return s;
            s = sNext;
            if (s >= 1.0) return -1.0;
        }
        return -1.0;
    }

    float clipCapExit(const in vec3 pFront, const in vec3 pBack, const in bool back) {
        float s = -1.0;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX == uSolidInteriorClip) {
                vec2 iv = clipObjectInterval(uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i], pFront, pBack);
                if (iv.x < iv.y) s = uClipObjectInvert[i] != back ? iv.x : iv.y;
            }
        }
        #pragma unroll_loop_end
        return s;
    }

    float clipCapDistance(const in vec3 center) {
        float d = 0.0;
        #pragma unroll_loop_start
        for (int i = 0; i < dClipObjectCount; ++i) {
            if (UNROLLED_LOOP_INDEX == uSolidInteriorClip) {
                float sd = getSignedDistance(center, uClipObjectType[i], uClipObjectPosition[i], uClipObjectRotation[i], uClipObjectScale[i], uClipObjectTransform[i]);
                d = uClipObjectInvert[i] ? -sd : sd;
            }
        }
        #pragma unroll_loop_end
        return d;
    }

    vec3 clipCapNormal(const in vec3 center) {
        vec2 e = vec2(0.01, 0.0);
        return normalize(vec3(
            clipCapDistance(center + e.xyy) - clipCapDistance(center - e.xyy),
            clipCapDistance(center + e.yxy) - clipCapDistance(center - e.yxy),
            clipCapDistance(center + e.yyx) - clipCapDistance(center - e.yyx)
        ));
    }
#endif
`;var rt=`
if (uLod.w == 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
    float d = (dot(uCameraPlane.xyz, vModelPosition) + uCameraPlane.w) / uModelScale;
    float ta = min(
        smoothstep(uLod.x, uLod.x + uLod.z, d),
        1.0 - smoothstep(uLod.y - uLod.z, uLod.y, d)
    );

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        float at = 0.0;

        // shift by view-offset during multi-sample rendering to allow for blending
        vec2 coord = gl_FragCoord.xy + uViewOffset * 0.25;

        const mat4 thresholdMatrix = mat4(
            1.0 / 17.0,  9.0 / 17.0,  3.0 / 17.0, 11.0 / 17.0,
            13.0 / 17.0,  5.0 / 17.0, 15.0 / 17.0,  7.0 / 17.0,
            4.0 / 17.0, 12.0 / 17.0,  2.0 / 17.0, 10.0 / 17.0,
            16.0 / 17.0,  8.0 / 17.0, 14.0 / 17.0,  6.0 / 17.0
        );
        int ci = int(intMod(coord.x, 4.0));
        int ri = int(intMod(coord.y, 4.0));
        #if __VERSION__ == 100
            vec4 i = vec4(float(ci * 4 + ri));
            vec4 v = thresholdMatrix[0] * vec4(equal(i, vec4(0.0, 1.0, 2.0, 3.0))) +
                thresholdMatrix[1] * vec4(equal(i, vec4(4.0, 5.0, 6.0, 7.0))) +
                thresholdMatrix[2] * vec4(equal(i, vec4(8.0, 9.0, 10.0, 11.0))) +
                thresholdMatrix[3] * vec4(equal(i, vec4(12.0, 13.0, 14.0, 15.0)));
            at = v.x + v.y + v.z + v.w;
        #else
            at = thresholdMatrix[ci][ri];
        #endif

        if (ta < 0.99 && (ta < 0.01 || ta < at)) {
            discard;
        }
    #else
        if (ta < uPickingAlphaThreshold) {
            discard;
        }
    #endif
}
`;var ut=`
#if defined(dClipVariant_pixel) && dClipObjectCount != 0
    if (clipTest(vModelPosition / uModelScale))
        discard;
#endif
`;var Pt=`
#if defined(dNeedsMarker)
    float marker = uMarker;
    if (uMarker == -1.0) {
        marker = floor(vMarker * 255.0 + 0.5); // rounding required to work on some cards on win
    }
#endif

// optional per-fragment opacity multiplier; defaults to 1.0
#ifndef dHasMaterialOpacity
    float materialOpacity = 1.0;
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #if defined(dUsePalette)
        vec4 material = vec4(texture2D(tPalette, vec2(vPaletteV, 0.5)).rgb, uAlpha);
    #elif defined(dColorType_uniform)
        vec4 material = vec4(uColor, uAlpha);
    #elif defined(dColorType_varying)
        vec4 material = vec4(vColor.rgb, uAlpha);
    #endif

    // mix material with overpaint
    #if defined(dOverpaint)
        material.rgb = mix(material.rgb, vOverpaint.rgb, vOverpaint.a);
    #endif

    float emissive = uEmissive;
    #ifdef dEmissive
        emissive += vEmissive;
    #endif

    float metalness = uMetalness;
    float roughness = uRoughness;
    float bumpiness = uBumpiness;
    #ifdef dSubstance
        float sf = clamp(vSubstance.a, 0.0, 0.99); // clamp to avoid artifacts
        metalness = mix(metalness, vSubstance.r, sf);
        roughness = mix(roughness, vSubstance.g, sf);
        bumpiness = mix(bumpiness, vSubstance.b, sf);
    #endif

    #if defined(dXrayShaded)
        material.a = calcXrayShadedAlpha(material.a, normal);
    #endif
#elif defined(dRenderVariant_depth)
    // behind the opaque depth (depth is reversed)
    if (fragmentDepth < getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
        discard;
    }
    vec4 material;
    if (uRenderMask == MaskOpaque) {
        #if defined(dXrayShaded)
            discard;
        #endif
        #if defined(dTransparency)
            float dta = 1.0 - vTransparency;
            #if __VERSION__ == 100 || defined(dVaryingGroup)
                if (vTransparency < 0.1) dta = 1.0; // hard cutoff to avoid artifacts
            #endif

            if (uAlpha * materialOpacity * dta < 1.0) {
                discard;
            }
        #else
            if (uAlpha * materialOpacity < 1.0) {
                discard;
            }
        #endif
        material = packDepthToRGBA(fragmentDepth);
    } else if (uRenderMask == MaskTransparent) {
        float alpha = uAlpha * materialOpacity;
        #if defined(dTransparency)
            float dta = 1.0 - vTransparency;
            alpha *= dta;
        #endif

        #ifdef dXrayShaded
            alpha = calcXrayShadedAlpha(alpha, normal);
        #else
            if (alpha == 1.0) {
                discard;
            }
        #endif
        material = packDepthWithAlphaToRGBA(fragmentDepth, alpha);
    } else {
        material = packDepthToRGBA(fragmentDepth);
    }
#elif defined(dRenderVariant_marking)
    vec4 material = vec4(0.0, 0.0, 0.0, uAlpha * materialOpacity);
    #if defined(dXrayShaded)
        material.a = calcXrayShadedAlpha(material.a, normal);
    #endif
#elif defined(dRenderVariant_emissive)
    float emissive = uEmissive;
    #ifdef dEmissive
        emissive += vEmissive;
    #endif
    float emissiveAlpha = uAlpha;
    #if defined(dXrayShaded)
        emissiveAlpha = calcXrayShadedAlpha(emissiveAlpha, normal);
    #endif
    // fade emissive bloom with fog so the glow dims into the background like the geometry
    if (uFog) {
        float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
        emissiveAlpha *= 1.0 - smoothstep(uFogNear, uFogFar, abs(viewZ));
    }
    // dim emitters behind a transparent blocker by its coverage (tDepthAlpha packs front depth+alpha)
    vec2 emissiveBlocker = unpackRGBAToDepthWithAlpha(texture2D(tDepthAlpha, gl_FragCoord.xy / uDrawingBufferSize));
    if (fragmentDepth < emissiveBlocker.x - 0.0001) {
        emissiveAlpha *= 1.0 - emissiveBlocker.y;
    }
    // glow with the object's own color so emissive isn't double-counted via the lit buffer
    #if defined(dUsePalette)
        vec3 emissiveColor = texture2D(tPalette, vec2(vPaletteV, 0.5)).rgb;
    #elif defined(dColorType_uniform)
        vec3 emissiveColor = uColor;
    #elif defined(dColorType_varying)
        vec3 emissiveColor = vColor.rgb;
    #else
        vec3 emissiveColor = vec3(1.0);
    #endif
    #ifdef dOverpaint
        emissiveColor = mix(emissiveColor, vOverpaint.rgb, vOverpaint.a);
    #endif
    float e = emissive * emissiveAlpha;
    vec4 material = vec4(emissiveColor * e, e);
#endif

// apply per-group transparency
#if defined(dTransparency) && (defined(dRenderVariant_pick) || defined(dRenderVariant_color) || defined(dRenderVariant_emissive) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
    float ta = 1.0 - vTransparency;
    if (vTransparency < 0.09) ta = 1.0; // hard cutoff looks better

    #if defined(dRenderVariant_pick)
        if (ta * uAlpha < uPickingAlphaThreshold)
            discard; // ignore so the element below can be picked
    #elif defined(dRenderVariant_emissive)
        material *= ta;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
        material.a *= ta;
    #endif
#endif
`;var Dt=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #if defined(dTransparentBackfaces_off)
        if (interior && material.a < 1.0) discard;
    #elif defined(dTransparentBackfaces_opaque)
        if (interior) material.a = 1.0;
    #endif

    #if !defined(dXrayShaded)
        if ((uRenderMask == MaskOpaque && material.a < 1.0) ||
            (uRenderMask == MaskTransparent && material.a == 1.0)
        ) {
            discard;
        }
    #endif
#endif

#if defined(dRenderVariant_marking)
    #if defined(dTransparentBackfaces_off)
        if (interior && material.a < 1.0) material.a = 0.0;
    #elif defined(dTransparentBackfaces_opaque)
        if (interior) material.a = 1.0;
    #endif
#endif

#if defined(dRenderVariant_depth)
    #if defined(dTransparentBackfaces_off)
        // interior fragments are the surface of interest in the back-depth pass
        if (interior && !uDepthBack && uRenderMask != MaskOpaque) discard;
    #endif
#endif
`;var lt=`
float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
float fogAlpha = (1.0 - fogFactor) * uAlpha;
float alpha = uAlpha;
#ifdef dXrayShaded
    // add bias to make picking xray shaded elements easier
    alpha = calcXrayShadedAlpha(alpha, normal) + (0.3 * uPickingAlphaThreshold);
#endif
// if not opaque enough ignore so the element below can be picked
if (alpha < uPickingAlphaThreshold || fogAlpha < 0.1) {
    #ifdef dTransparentBackfaces_opaque
        if (!interior) discard;
    #else
        discard;
    #endif
}
`;var dt=`
float markingOpacity = clamp(material.a, 0.0, 1.0);
if (uMarkingType == 1) {
    if (marker > 0.0 || markingOpacity == 0.0)
        discard;
    material = packDepthWithAlphaToRGBA(fragmentDepth, markingOpacity);
} else {
    if (marker == 0.0)
        discard;
    float depthTest = 1.0;
    if (uMarkingDepthTest) {
        float markingDepth = unpackRGBAToDepthWithAlpha(texture2D(tDepthAlpha, gl_FragCoord.xy / uDrawingBufferSize)).x;
        depthTest = fragmentDepth <= markingDepth ? 1.0 : 0.0;
    }
    bool isHighlight = (uMarkerPriority == 1 && marker != 2.0) || (uMarkerPriority != 1 && marker == 1.0);
    float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
    if (fogFactor == 1.0)
        discard;
    material = packMarkingMask(depthTest, isHighlight, 1.0 - fogFactor, markingOpacity);
}
`;var qr=`
if (interior) {
    material.rgb = mix(material.rgb, uInteriorColor.rgb, uInteriorColor.a);

    float isf = clamp(uInteriorSubstance.a, 0.0, 0.99); // clamp to avoid artifacts
    metalness = mix(metalness, uInteriorSubstance.r, isf);
    roughness = mix(roughness, uInteriorSubstance.g, isf);
    bumpiness = mix(bumpiness, uInteriorSubstance.b, isf);

    #ifdef dTransparentBackfaces_opaque
        material.a = 1.0;
    #endif
}
`;var gr=`
#if defined(dIgnoreLight)
    #ifdef bumpEnabled
        if (uBumpFrequency > 0.0 && uBumpAmplitude > 0.0 && bumpiness > 0.0) {
            material.rgb += fbm(vModelPosition * uBumpFrequency) * uBumpAmplitude * bumpiness;
            material.rgb -= 0.5 * uBumpAmplitude * bumpiness;
        }
    #endif

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        material.rgb += material.rgb * emissive;
    #endif

    gl_FragColor = material;
#else
    #ifdef bumpEnabled
        if (uBumpFrequency > 0.0 && uBumpAmplitude > 0.0 && bumpiness > 0.0) {
            normal = perturbNormal(vModelPosition, vViewPosition, normal, uBumpFrequency, (uBumpAmplitude * bumpiness) / uBumpFrequency);
        }
    #endif

    vec4 color = material;

    #if defined(dCelShaded)
        // clamp to avoid artifacts
        metalness = clamp(metalness, 0.0, 0.99);
        roughness = clamp(roughness, 0.05, 1.0);
    #endif

    GeometricContext geometry;
    geometry.position = -vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize(vViewPosition);

    PhysicalMaterial physicalMaterial;
    physicalMaterial.diffuseColor = color.rgb * (1.0 - metalness);
    #ifdef enabledFragDepth
        physicalMaterial.roughness = min(max(roughness, 0.0525), 1.0);
    #else
        vec3 dxy = max(abs(dFdx(normal)), abs(dFdy(normal)));
        float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
        physicalMaterial.roughness = min(max(roughness, 0.0525) + geometryRoughness, 1.0);
    #endif
    physicalMaterial.specularColor = mix(vec3(0.04), color.rgb, metalness);
    physicalMaterial.specularF90 = 1.0;

    IncidentLight directLight;

    vec3 outgoingLight = vec3(0.0);

    #if defined(dCelShaded)
        float celDiffuse;
        float celSpecular;
        float celIntensity;

        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            directLight.direction = uLightDirection[i];
            directLight.color = uLightColor[i] * PI; // * PI for punctual light

            celDiffuse = RECIPROCAL_PI * max(dot(geometry.normal, directLight.direction), 0.0) * (1.0 - metalness);
            celSpecular = luminance(saturate(dot(geometry.normal, directLight.direction)) * BRDF_GGX(directLight.direction, geometry.viewDir, geometry.normal, physicalMaterial.specularColor, physicalMaterial.specularF90, roughness));

            celIntensity = celDiffuse + celSpecular;
            celIntensity = ceil(celIntensity * uCelSteps) / uCelSteps;

            outgoingLight += color.rgb * directLight.color * celIntensity;
        }
        #pragma unroll_loop_end

        outgoingLight += physicalMaterial.diffuseColor * uAmbientColor;
    #else
        ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));

        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            directLight.direction = uLightDirection[i];
            directLight.color = uLightColor[i] * PI; // * PI for punctual light
            RE_Direct_Physical(directLight, geometry, physicalMaterial, reflectedLight);
        }
        #pragma unroll_loop_end

        vec3 irradiance = uAmbientColor * PI; // * PI for punctual light
        RE_IndirectDiffuse_Physical(irradiance, geometry, physicalMaterial, reflectedLight);

        // indirect specular only metals
        vec3 radiance = uAmbientColor * metalness;
        vec3 iblIrradiance = uAmbientColor * metalness;
        vec3 clearcoatRadiance = vec3(0.0);
        RE_IndirectSpecular_Physical(radiance, iblIrradiance, clearcoatRadiance, geometry, physicalMaterial, reflectedLight);

        outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #endif
    outgoingLight = clamp(outgoingLight, 0.01, 0.99); // prevents black artifacts on specular highlight with transparent background

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        outgoingLight += color.rgb * emissive;
    #endif

    gl_FragColor = vec4(outgoingLight, color.a);
#endif

gl_FragColor.rgb *= uExposure;
`;var $e=`

#if defined(dColorMarker)
    if (marker > 0.0) {
        if ((uMarkerPriority == 1 && marker != 2.0) || (uMarkerPriority != 1 && marker == 1.0)) {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uHighlightColor, uHighlightStrength);
            gl_FragColor.a = max(gl_FragColor.a, uHighlightStrength * 0.002); // for direct-volume rendering
        } else {
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uSelectColor, uSelectStrength);
            gl_FragColor.a = max(gl_FragColor.a, uSelectStrength * 0.002); // for direct-volume rendering
        }
    } else if (uMarkerAverage > 0.0) {
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uDimColor, uDimStrength);
        gl_FragColor.a = max(gl_FragColor.a, uDimStrength * 0.002); // for direct-volume rendering
    }
#endif
`;var qe=`
float preFogAlpha = gl_FragColor.a;
if (uFog) {
    float viewZ = depthToViewZ(uIsOrtho, fragmentDepth, uNear, uFar);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(viewZ));
    float fogAlpha = (1.0 - fogFactor) * gl_FragColor.a;
    if (!uTransparentBackground) {
        if (gl_FragColor.a < 1.0) {
            // transparent objects are blended with background color
            gl_FragColor.a = fogAlpha;
        } else {
            // mix opaque objects with background color
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, fogFactor);
        }
    } else {
        #if defined(dRenderVariant_colorDpoit) && !defined(dGeometryType_directVolume)
            if (gl_FragColor.a < 1.0) {
                // transparent objects are blended with background color
                gl_FragColor.a = fogAlpha;
            } else {
                // opaque objects need to be pre-multiplied alpha
                gl_FragColor.rgb *= fogAlpha;
                gl_FragColor.a = fogAlpha;
            }
        #else
            // pre-multiplied alpha expected for transparent background
            gl_FragColor.rgb *= fogAlpha;
            gl_FragColor.a = fogAlpha;
        #endif
    }
} else if (uTransparentBackground) {
    #if !defined(dRenderVariant_colorDpoit) && !defined(dGeometryType_directVolume)
        // pre-multiplied alpha expected for transparent background
        gl_FragColor.rgb *= gl_FragColor.a;
    #endif
}
`;var Xe=`
#if defined(dRenderVariant_colorWboit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        if (preFogAlpha != 1.0 && fragmentDepth > getDepth(gl_FragCoord.xy / uDrawingBufferSize)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif
            float alpha = gl_FragColor.a;
            // depth is reversed: larger in front
            float wboitWeight = alpha * clamp(pow(fragmentDepth, 2.0), 0.01, 1.0);
            gl_FragColor = vec4(gl_FragColor.rgb * alpha * wboitWeight, alpha);
            // extra alpha is to handle pre-multiplied alpha
            #ifndef dGeometryType_directVolume
                gl_FragData[1] = vec4((uTransparentBackground ? alpha : 1.0) * alpha * wboitWeight);
            #else
                gl_FragData[1] = vec4(alpha * alpha * wboitWeight);
            #endif
        } else {
            discard;
        }
    }
#endif
`;var pt=`
#if defined(dRenderVariant_colorDpoit)
    if (uRenderMask == MaskOpaque) {
        if (preFogAlpha < 1.0) {
            discard;
        }
    } else if (uRenderMask == MaskTransparent) {
        vec2 coords = gl_FragCoord.xy / uDrawingBufferSize;
        if (preFogAlpha != 1.0 && fragmentDepth > getDepth(coords)) {
            #ifdef dTransparentBackfaces_off
                if (interior) discard;
            #endif

            // adapted from https://github.com/tsherif/webgl2examples
            // The MIT License, Copyright 2017 Tarek Sherif, Shuai Shao

            // peeling works with depth increasing away from the camera (depth is reversed)
            float peelDepth = 1.0 - fragmentDepth;
            vec2 lastDepth = texture2D(tDpoitDepth, coords).rg;
            vec4 lastFrontColor = texture2D(tDpoitFrontColor, coords);

            vec4 fragColor = gl_FragColor;

            // depth value always increases
            // so we can use MAX blend equation
            gl_FragData[2].rg = vec2(-MAX_DPOIT_DEPTH);

            // front color always increases
            // so we can use MAX blend equation
            gl_FragColor = lastFrontColor;

            // back color is separately blend afterwards each pass
            gl_FragData[1] = vec4(0.0);

            float nearestDepth = -lastDepth.x;
            float furthestDepth = lastDepth.y;
            float alphaMultiplier = 1.0 - lastFrontColor.a;

            if (peelDepth < nearestDepth || peelDepth > furthestDepth) {
                // Skip this depth since it's been peeled.
                return;
            }

            if (peelDepth > nearestDepth && peelDepth < furthestDepth) {
                // This needs to be peeled.
                // The ones remaining after MAX blended for
                // all need-to-peel will be peeled next pass.
                gl_FragData[2].rg = vec2(-peelDepth, peelDepth);
                return;
            }

            // write to back and front color buffer
            if (peelDepth == nearestDepth) {
                gl_FragColor.rgb += fragColor.rgb * fragColor.a * alphaMultiplier;
                gl_FragColor.a = 1.0 - alphaMultiplier * (1.0 - fragColor.a);
            } else {
                gl_FragData[1] += fragColor;
            }

        } else {
            discard;
        }
    }
#endif
`;var su=`
precision highp float;
precision highp int;

#define bumpEnabled

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

${z}
${ct}
${Rt}
${hr}
${Te}

#ifdef dSolidInterior
    const bool solidInterior = true;
#else
    const bool solidInterior = false;
#endif

bool isCap = false;

#ifdef dSolidInterior
    bool solidInteriorCap(
        in vec3 rayOrigin, in vec3 rayDir, in float frontT, in float t,
        in float frontDepth, in bool objectClipped, in vec3 frontModelPosition,
        inout vec3 cameraNormal, inout vec3 modelPosition, inout vec3 viewPosition, inout float fragmentDepth
    ){
        vec3 cameraRayOrigin = (uView * vec4(rayOrigin, 1.0)).xyz;
        vec3 cameraRayDir = (uView * vec4(rayDir, 0.0)).xyz;
        float nearT = - (uNear + cameraRayOrigin.z) / cameraRayDir.z;
        float sNear = frontDepth < 1.0 ? 0.0 : clamp((nearT - frontT) / (t - frontT), 0.0, 1.0);
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            float sCap = objectClipped || frontDepth >= 1.0 ? clipExit(frontModelPosition / uModelScale, modelPosition / uModelScale, sNear) : sNear;
            if (sCap < 0.0) return false;
        #else
            float sCap = sNear;
        #endif
        if (sCap == sNear && frontDepth >= 1.0) {
            fragmentDepth = 1.0 - (0.0000002 / vSize);
            cameraNormal = -rayDir;
            viewPosition = cameraRayOrigin + nearT * cameraRayDir;
            modelPosition = (uInvView * vec4(viewPosition, 1.0)).xyz;
        }
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            else if (objectClipped || frontDepth >= 1.0) {
                modelPosition = mix(frontModelPosition, modelPosition, sCap);
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition) - (0.0000002 / vSize);
                cameraNormal = -clipNormal(modelPosition / uModelScale);
                isCap = true;
            }
        #endif
        return true;
    }

    // back-depth pass: move the exit point towards the entry until it is not clipped
    bool solidInteriorBackCap(in vec3 entryPosition, inout vec3 cameraNormal, inout vec3 modelPosition, inout vec3 viewPosition, inout float fragmentDepth) {
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            float s = clipExit(modelPosition / uModelScale, entryPosition / uModelScale, 0.0);
            if (s < 0.0) return false;
            if (s > 0.0) {
                modelPosition = mix(modelPosition, entryPosition, s);
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                cameraNormal = -clipNormal(modelPosition / uModelScale);
                isCap = true;
            }
        #endif
        return fragmentDepth < 1.0;
    }
#endif

// adapted from https://www.shadertoy.com/view/4lcSRn
// The MIT License, Copyright 2016 Inigo Quilez
bool CylinderImpostor(
    in vec3 rayOrigin, in vec3 rayDir,
    in vec3 start, in vec3 end, in float radius,
    out vec3 cameraNormal, out bool interior,
    out vec3 modelPosition, out vec3 viewPosition, out float fragmentDepth
){
    vec3 ba = end - start;
    vec3 oc = rayOrigin - start;

    float baba = dot(ba, ba);
    float bard = dot(ba, rayDir);
    float baoc = dot(ba, oc);

    float k2 = baba - bard * bard;
    float k1 = baba * dot(oc, rayDir) - baoc * bard;
    float k0 = baba * dot(oc, oc) - baoc * baoc - radius * radius * baba;

    float h = k1 * k1 - k2 * k0;
    if (h < 0.0) return false;

    bool topCap = (vCap > 0.9 && vCap < 1.1) || vCap >= 2.9;
    bool bottomCap = (vCap > 1.9 && vCap < 2.1) || vCap >= 2.9;

    #ifdef dSolidInterior
        bool topInterior = !topCap;
        bool bottomInterior = !bottomCap;
        topCap = true;
        bottomCap = true;
    #else
        bool topInterior = false;
        bool bottomInterior = false;
    #endif

    bool clipped = false;
    bool objectClipped = false;
    float frontT = 0.0;
    // no front yet: at the far plane (depth is reversed)
    float frontDepth = 0.0;
    vec3 frontModelPosition = rayOrigin;

    #if defined(dRenderVariant_depth)
        // back-depth pass wants the farthest intersection
        bool depthBack = uDepthBack;
    #else
        bool depthBack = false;
    #endif

    // body outside
    h = sqrt(h);
    float t = (-k1 - h) / k2;
    float y = baoc + t * bard;
    #ifdef dSolidInterior
        // entry into the closed cylinder: body entry clamped to the end-cap slab
        vec3 entryPosition = rayOrigin + (abs(bard) > 0.0 ? max(t, min(-baoc / bard, (baba - baoc) / bard)) : t) * rayDir;
    #endif
    if (!depthBack && y > 0.0 && y < baba) {
        interior = false;
        cameraNormal = (oc + t * rayDir - ba * y / baba) / radius;
        modelPosition = rayOrigin + t * rayDir;
        viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
        fragmentDepth = calcDepth(viewPosition);
        frontT = t;
        frontDepth = fragmentDepth;
        frontModelPosition = modelPosition;
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            if (clipTest(modelPosition / uModelScale)) {
                objectClipped = true;
                fragmentDepth = 2.0;
            }
        #endif
        if (fragmentDepth < 1.0) return true;
        clipped = true;
    }

    if (!clipped && !depthBack) {
        if (topCap && y < 0.0) {
            // top cap
            t = -baoc / bard;
            if (abs(k1 + k2 * t) < h) {
                interior = topInterior;
                cameraNormal = -ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                frontT = t;
                frontDepth = fragmentDepth;
                frontModelPosition = modelPosition;
                #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                    if (clipTest(modelPosition / uModelScale)) {
                        objectClipped = true;
                        fragmentDepth = 2.0;
                    }
                #endif
                if (fragmentDepth < 1.0) {
                    #ifdef dSolidInterior
                        if (interior) cameraNormal = -rayDir;
                    #endif
                    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                        return true;
                    #else
                        return !interior;
                    #endif
                }
            }
        } else if (bottomCap && y >= 0.0) {
            // bottom cap
            t = (baba - baoc) / bard;
            if (abs(k1 + k2 * t) < h) {
                interior = bottomInterior;
                cameraNormal = ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                frontT = t;
                frontDepth = fragmentDepth;
                frontModelPosition = modelPosition;
                #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                    if (clipTest(modelPosition / uModelScale)) {
                        objectClipped = true;
                        fragmentDepth = 2.0;
                    }
                #endif
                if (fragmentDepth < 1.0) {
                    #ifdef dSolidInterior
                        if (interior) cameraNormal = -rayDir;
                    #endif
                    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
                        return true;
                    #else
                        return !interior;
                    #endif
                }
            }
        }
    }

    if (uDoubleSided || solidInterior || depthBack) {
        // body inside
        h = -h;
        t = (-k1 - h) / k2;
        y = baoc + t * bard;
        if (y > 0.0 && y < baba) {
            interior = true;
            cameraNormal = -(oc + t * rayDir - ba * y / baba) / radius;
            modelPosition = rayOrigin + t * rayDir;
            viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
            fragmentDepth = calcDepth(viewPosition);
            if (fragmentDepth < 1.0) {
                #ifdef dSolidInterior
                    if (depthBack) {
                        if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                #endif
                return true;
            }
        }

        if (topCap && y < 0.0) {
            // top cap
            t = -baoc / bard;
            if (abs(k1 + k2 * t) < -h) {
                interior = true;
                cameraNormal = ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                if (fragmentDepth < 1.0) {
                    #ifdef dSolidInterior
                        if (depthBack) {
                            if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                        } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    #endif
                    return true;
                }
            }
        } else if (bottomCap && y >= 0.0) {
            // bottom cap
            t = (baba - baoc) / bard;
            if (abs(k1 + k2 * t) < -h) {
                interior = true;
                cameraNormal = -ba / baba;
                modelPosition = rayOrigin + t * rayDir;
                viewPosition = (uView * vec4(modelPosition, 1.0)).xyz;
                fragmentDepth = calcDepth(viewPosition);
                if (fragmentDepth < 1.0) {
                    #ifdef dSolidInterior
                        if (depthBack) {
                            if (!solidInteriorBackCap(entryPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                        } else if (!solidInteriorCap(rayOrigin, rayDir, frontT, t, frontDepth, objectClipped, frontModelPosition, cameraNormal, modelPosition, viewPosition, fragmentDepth)) return false;
                    #endif
                    return true;
                }
            }
        }
    }

    return false;
}

void main() {
    vec3 rayOrigin = vModelPosition;
    vec3 rayDir = mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);

    vec3 cameraNormal;
    vec3 modelPosition;
    vec3 viewPosition;
    float fragmentDepth;
    bool hit = CylinderImpostor(rayOrigin, rayDir, vStart, vEnd, vSize, cameraNormal, interior, modelPosition, viewPosition, fragmentDepth);
    if (!hit) discard;

    if (fragmentDepth < 0.0) discard;
    if (fragmentDepth > 1.0) discard;

    gl_FragDepthEXT = fragmentDepth;

    vec3 vViewPosition = viewPosition;
    vec3 vModelPosition = modelPosition;

    ${rt}
    if (!isCap) {
        ${ut}
    }

    #ifdef dNeedsNormal
        mat3 normalMatrix = adjoint(uView);
        vec3 normal = normalize(normalMatrix * -normalize(cameraNormal));
    #endif

    ${Pt}
    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${qr}
        ${gr}
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var mt=`
#if dClipObjectCount != 0
    #if defined(dClipping)
        #if __VERSION__ == 100 || !defined(dVaryingGroup)
            varying float vClipping;
        #else
            flat out float vClipping;
        #endif
    #endif
#endif

#if defined(dNeedsMarker)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        varying float vMarker;
    #else
        flat out float vMarker;
    #endif
#endif

varying vec3 vModelPosition;
varying vec3 vViewPosition;

#if defined(emulateVertexId)
    #define VertexID int(aVertex)
#else
    // int() is needed for some Safari versions
    // see https://bugs.webkit.org/show_bug.cgi?id=244152
    #define VertexID int(gl_VertexID)
#endif

#if defined(enabledMultiDraw)
    #define DrawID gl_DrawID
#else
    #define DrawID uDrawId
#endif

#if defined(dSegmented)
    // per-instance segment data for merged render items, see SegmentSchema
    #define groupInstanceIndex(inst, grp) (aSegment.y + (inst) * aSegment.x + (grp))
    #define groupIndex(grp) (aSegment.z + (grp))
    #define InvariantBoundingSphere aSegmentSphere
#else
    #define groupInstanceIndex(inst, grp) ((inst) * float(uGroupCount) + (grp))
    #define groupIndex(grp) (grp)
    #define InvariantBoundingSphere uInvariantBoundingSphere
#endif
// the index of the marker and layer data, per instance or group instance (uInstanceGranularity)
#define granularityIndex(inst, grp) (uInstanceGranularity ? (inst) : groupInstanceIndex(inst, grp))
`;var _t=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_texture) || defined(dColorType_grid) || defined(dColorType_direct)
        varying vec4 vColor;
    #endif

    #ifdef dUsePalette
        varying float vPaletteV;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_texture) || defined(dOverpaintType_vertexInstance) || defined(dOverpaintType_volumeInstance)
            varying vec4 vOverpaint;
        #endif
    #endif

    #ifdef dEmissive
        #if defined(dEmissiveType_texture) || defined(dEmissiveType_vertexInstance) || defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
        #endif
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_texture) || defined(dSubstanceType_vertexInstance) || defined(dSubstanceType_volumeInstance)
            varying vec4 vSubstance;
        #endif
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_texture) || defined(dEmissiveType_vertexInstance) || defined(dEmissiveType_volumeInstance)
            varying float vEmissive;
        #endif
    #endif
#elif defined(dRenderVariant_pick)
    #if __VERSION__ == 100 || !defined(dVaryingGroup)
        #ifdef requiredDrawBuffers
            varying vec4 vObject;
            varying vec4 vInstance;
            varying vec4 vGroup;
        #else
            varying vec4 vColor;
        #endif
    #else
        #ifdef requiredDrawBuffers
            flat out vec4 vObject;
            flat out vec4 vInstance;
            flat out vec4 vGroup;
        #else
            flat out vec4 vColor;
        #endif
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_texture) || defined(dTransparencyType_vertexInstance) || defined(dTransparencyType_volumeInstance)
        varying float vTransparency;
    #endif
#endif
`;var Yt=`
vec3 applyWiggle(vec3 pos, float groupId, float instanceId) {
    if (!uEnableAnimation) return pos;
    float amplitude = uWiggleAmplitude;
    #ifdef dWiggle
        amplitude += readFromTexture(tWiggle, granularityIndex(instanceId, groupId), uWiggleTexDim).r * uWiggleStrength;
    #endif
    if (amplitude > 0.0 && uWiggleSpeed > 0.0 && uWiggleFrequency > 0.0) {
        float t = uTime * uWiggleSpeed;
        vec3 s;
        if (uWiggleMode == 0) {
            // Position mode: spatial position correlates nearby atoms
            s = pos;
        } else {
            // Group mode: per-group independent noise
            // Hash groupId into a well-distributed 3D seed to avoid repetition
            s = vec3(
                fract(sin(groupId * 127.1) * 43758.5453) * 1000.0,
                fract(sin(groupId * 269.5) * 21639.7182) * 1000.0,
                fract(sin(groupId * 419.2) * 32517.3926) * 1000.0
            );
        }
        s *= uWiggleFrequency;
        pos.x += (fbm(vec3(s.x, s.y + t, s.z)) / 0.4375 - 1.0) * amplitude;
        pos.y += (fbm(vec3(s.x + 37.0, s.y, s.z + t)) / 0.4375 - 1.0) * amplitude;
        pos.z += (fbm(vec3(s.x + t, s.y + 73.0, s.z)) / 0.4375 - 1.0) * amplitude;
    }
    return pos;
}

mat4 applyTumble(mat4 transform, float instanceIndex, float objectId) {
    if (!uEnableAnimation) return transform;
    if (uTumbleAmplitude > 0.0 && uTumbleSpeed > 0.0 && uTumbleFrequency > 0.0) {
        // Scale amplitude inversely with bounding-sphere radius (Stokes-Einstein: D ~ 1/r)
        float amplitude = uTumbleAmplitude / max(InvariantBoundingSphere.w, 1.0);
        float t = uTime * uTumbleSpeed;
        float seed = (instanceIndex * 127.1 + objectId * 311.7) * uTumbleFrequency;

        // Per-instance rotation angles from layered noise (Brownian-like)
        float angleX = (fbm(vec3(seed, t, 0.0)) / 0.4375 - 1.0) * amplitude;
        float angleY = (fbm(vec3(seed, 0.0, t)) / 0.4375 - 1.0) * amplitude;
        float angleZ = (fbm(vec3(0.0, seed, t)) / 0.4375 - 1.0) * amplitude;

        float cx = cos(angleX); float sx = sin(angleX);
        float cy = cos(angleY); float sy = sin(angleY);
        float cz = cos(angleZ); float sz = sin(angleZ);

        // Combined rotation matrix (Rz * Ry * Rx)
        mat3 rot = mat3(
            cy * cz, cx * sz + sx * sy * cz, sx * sz - cx * sy * cz,
            -cy * sz, cx * cz - sx * sy * sz, sx * cz + cx * sy * sz,
            sy, -sx * cy, cx * cy
        );

        // Per-instance translation offset from layered noise (Brownian-like)
        vec3 offset = vec3(
            (fbm(vec3(seed + 31.7, t, 0.0)) / 0.4375 - 1.0),
            (fbm(vec3(seed + 31.7, 0.0, t)) / 0.4375 - 1.0),
            (fbm(vec3(0.0, seed + 31.7, t)) / 0.4375 - 1.0)
        ) * amplitude;

        // Bounding-sphere center transformed by the linear part only (no translation)
        vec3 localCenter = mat3(transform) * InvariantBoundingSphere.xyz;

        // Rotate basis vectors
        mat4 result = transform;
        result[0].xyz = rot * transform[0].xyz;
        result[1].xyz = rot * transform[1].xyz;
        result[2].xyz = rot * transform[2].xyz;

        // Adjust translation so rotation pivots around the transformed center
        result[3].xyz = transform[3].xyz + localCenter - rot * localCenter + offset;

        return result;
    }
    return transform;
}
`;var yr=`
#ifdef dGeometryType_textureMesh
    float group = unpackRGBToInt(readFromTexture(tGroup, vertexId, uGeoTexDim).rgb);
#else
    float group = aGroup;
#endif
`;var Et=`
#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #if defined(dColorType_texture)
        // the texture's index by the color type (\`ColorTypeIndex\`): instance, group, groupInstance, vertex,
        // vertexInstance
        float colorIndex = aInstance;
        if (uColorIndexType == 1) {
            colorIndex = groupIndex(group);
        } else if (uColorIndexType == 2) {
            colorIndex = groupInstanceIndex(aInstance, group);
        } else if (uColorIndexType == 3) {
            colorIndex = float(vertexId);
        } else if (uColorIndexType == 4) {
            colorIndex = float(int(aInstance) * uVertexCount + vertexId);
        }
        #if defined(dDualColor)
            // two colors per group, except for color mode 2 (cylinders)
            bool dualColor = uColorIndexType == 1 || uColorIndexType == 2;
            vec4 color2;
            if (dualColor && aColorMode != 2.0) {
                vColor.rgb = readFromTexture(tColor, colorIndex * 2.0, uColorTexDim).rgb;
                color2.rgb = readFromTexture(tColor, colorIndex * 2.0 + 1.0, uColorTexDim).rgb;
            } else {
                vColor.rgb = readFromTexture(tColor, colorIndex, uColorTexDim).rgb;
            }
        #else
            vColor.rgb = readFromTexture(tColor, colorIndex, uColorTexDim).rgb;
        #endif
    #elif defined(dColorType_grid)
        // the local position (volume) or the model position (volumeInstance), see \`ColorTypeIndex\`
        vec3 cgridSource = uColorIndexType == 1 ? vModelPosition / uModelScale : position;
        vec3 cgridPos = (uColorGridTransform.w * (cgridSource - uColorGridTransform.xyz)) / uColorGridDim;
        vColor.rgb = texture3dFrom2dLinear(tColorGrid, cgridPos, uColorGridDim, uColorTexDim).rgb;
    #endif

    #ifdef dUsePalette
        vPaletteV = ((vColor.r * 256.0 * 256.0 * 255.0 + vColor.g * 256.0 * 255.0 + vColor.b * 255.0) - 1.0) / PALETTE_SCALE;
    #endif

    #ifdef dOverpaint
        #if defined(dOverpaintType_texture)
            vOverpaint = readFromTexture(tOverpaint, granularityIndex(aInstance, group), uOverpaintTexDim);
        #elif defined(dOverpaintType_vertexInstance)
            vOverpaint = readFromTexture(tOverpaint, int(aInstance) * uVertexCount + vertexId, uOverpaintTexDim);
        #elif defined(dOverpaintType_volumeInstance)
            vec3 ogridPos = (uOverpaintGridTransform.w * (vModelPosition / uModelScale - uOverpaintGridTransform.xyz)) / uOverpaintGridDim;
            vOverpaint = texture3dFrom2dLinear(tOverpaintGrid, ogridPos, uOverpaintGridDim, uOverpaintTexDim);
        #endif

        // pre-mix to avoid darkening due to empty overpaint
        #ifdef dColorType_uniform
            vOverpaint.rgb = mix(uColor.rgb, vOverpaint.rgb, vOverpaint.a);
        #else
            vOverpaint.rgb = mix(vColor.rgb, vOverpaint.rgb, vOverpaint.a);
        #endif
        vOverpaint *= uOverpaintStrength;
    #endif

    #ifdef dEmissive
        #if defined(dEmissiveType_texture)
            vEmissive = readFromTexture(tEmissive, granularityIndex(aInstance, group), uEmissiveTexDim).r;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).r;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).r;
        #endif
        vEmissive *= uEmissiveStrength;
    #endif

    #ifdef dSubstance
        #if defined(dSubstanceType_texture)
            vSubstance = readFromTexture(tSubstance, granularityIndex(aInstance, group), uSubstanceTexDim);
        #elif defined(dSubstanceType_vertexInstance)
            vSubstance = readFromTexture(tSubstance, int(aInstance) * uVertexCount + vertexId, uSubstanceTexDim);
        #elif defined(dSubstanceType_volumeInstance)
            vec3 sgridPos = (uSubstanceGridTransform.w * (vModelPosition / uModelScale - uSubstanceGridTransform.xyz)) / uSubstanceGridDim;
            vSubstance = texture3dFrom2dLinear(tSubstanceGrid, sgridPos, uSubstanceGridDim, uSubstanceTexDim);
        #endif

        // pre-mix to avoid artifacts due to empty substance
        vSubstance.rgb = mix(vec3(uMetalness, uRoughness, uBumpiness), vSubstance.rgb, vSubstance.a);
        vSubstance *= uSubstanceStrength;
    #endif
#elif defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_texture)
            vEmissive = readFromTexture(tEmissive, granularityIndex(aInstance, group), uEmissiveTexDim).r;
        #elif defined(dEmissiveType_vertexInstance)
            vEmissive = readFromTexture(tEmissive, int(aInstance) * uVertexCount + vertexId, uEmissiveTexDim).r;
        #elif defined(dEmissiveType_volumeInstance)
            vec3 egridPos = (uEmissiveGridTransform.w * (vModelPosition / uModelScale - uEmissiveGridTransform.xyz)) / uEmissiveGridDim;
            vEmissive = texture3dFrom2dLinear(tEmissiveGrid, egridPos, uEmissiveGridDim, uEmissiveTexDim).r;
        #endif
        vEmissive *= uEmissiveStrength;
    #endif
#elif defined(dRenderVariant_pick)
    #ifdef requiredDrawBuffers
        vObject = vec4(packIntToRGB(float(uObjectId)), 1.0);
        vInstance = vec4(packIntToRGB(aInstance), 1.0);
        vGroup = vec4(packIntToRGB(group), 1.0);
    #else
        if (uPickType == 1) {
            vColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
        } else if (uPickType == 2) {
            vColor = vec4(packIntToRGB(aInstance), 1.0);
        } else {
            vColor = vec4(packIntToRGB(group), 1.0);
        }
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_texture)
        vTransparency = readFromTexture(tTransparency, granularityIndex(aInstance, group), uTransparencyTexDim).r;
    #elif defined(dTransparencyType_vertexInstance)
        vTransparency = readFromTexture(tTransparency, int(aInstance) * uVertexCount + vertexId, uTransparencyTexDim).r;
    #elif defined(dTransparencyType_volumeInstance)
        vec3 tgridPos = (uTransparencyGridTransform.w * (vModelPosition / uModelScale - uTransparencyGridTransform.xyz)) / uTransparencyGridDim;
        vTransparency = texture3dFrom2dLinear(tTransparencyGrid, tgridPos, uTransparencyGridDim, uTransparencyTexDim).r;
    #endif
    vTransparency *= uTransparencyStrength;
#endif
`;var At=`
#if defined(dNeedsMarker)
    vMarker = readFromTexture(tMarker, granularityIndex(aInstance, group), uMarkerTexDim).r;
#endif
`;var wt=`
#if dClipObjectCount != 0 && defined(dClipping)
    vClipping = readFromTexture(tClipping, granularityIndex(aInstance, group), uClippingTexDim).r;
#endif
`;var Kt=`
#if defined(dSizeType_uniform)
    float size = uSize;
#elif defined(dSizeType_texture)
    // the texture's index by the size type (SizeTypeIndex): instance, group, groupInstance, vertex, vertexInstance
    float sizeIndex = aInstance;
    if (uSizeIndexType == 1) {
        sizeIndex = groupIndex(group);
    } else if (uSizeIndexType == 2) {
        sizeIndex = groupInstanceIndex(aInstance, group);
    } else if (uSizeIndexType == 3) {
        sizeIndex = float(vertexId);
    } else if (uSizeIndexType == 4) {
        sizeIndex = float(int(aInstance) * uVertexCount + vertexId);
    }
    float size = unpackRGBToInt(readFromTexture(tSize, sizeIndex, uSizeTexDim).rgb);
    size /= 100.0; // NOTE factor also set in TypeScript
#endif

size *= uSizeFactor;
`;var Lt=`
#if defined(dClipVariant_instance) && dClipObjectCount != 0
    vec3 mCenter = (uModel * aTransform * vec4(InvariantBoundingSphere.xyz, 1.0)).xyz;
    if (clipTest(mCenter / uModelScale)) {
        // move out of [ -w, +w ] to 'discard' in vert shader
        gl_Position.z = 2.0 * gl_Position.w;
    }
#endif
`;var cu=`
precision highp float;
precision highp int;

${z}
${ke}
${mt}
${_t}
${Te}
${Yt}

varying mat4 vTransform;
varying vec3 vStart;
varying vec3 vEnd;
varying float vSize;
varying float vCap;

void main() {
    int vertexId = VertexID;

    ${yr}
    ${Et}
    ${At}
    ${wt}
    ${Kt}

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    vec3 wigStart = applyWiggle(aStart, aGroup, aInstance);
    vec3 wigEnd = applyWiggle(aEnd, aGroup, aInstance);
    mat4 modelTransform = uModel * transform;

    vTransform = modelTransform;
    vStart = (modelTransform * vec4(wigStart, 1.0)).xyz;
    vEnd = (modelTransform * vec4(wigEnd, 1.0)).xyz;
    vSize = size * aScale * uModelScale;
    vCap = aCap;

    vModelPosition = (vStart + vEnd) * 0.5;
    vec3 camDir = -mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);
    vec3 dir = vEnd - vStart;
    float f = aMapping.x > 0.0 ? 1.0 : 0.0;
    // ensure cylinder 'dir' is pointing towards the camera
    if(dot(camDir, dir) < 0.0) {
        dir = -dir;
        f = 1.0 - f;
    }

    vec3 left = cross(camDir, dir);
    vec3 up = cross(left, dir);
    left = vSize * normalize(left);
    up = vSize * normalize(up);

    // move vertex in object-space from center to corner
    vModelPosition += aMapping.x * dir + aMapping.y * left + aMapping.z * up;

    vec4 mvPosition = uView * vec4(vModelPosition, 1.0);
    vViewPosition = mvPosition.xyz;
    gl_Position = uProjection * mvPosition;

    // in front of the near plane (clip z is reversed): onto it, to avoid clipping the box; the fragment depth is the
    // impostor's
    if (gl_Position.z > gl_Position.w) {
        gl_Position.z = gl_Position.w;
    }

    #if defined(dDualColor) && defined(dRenderVariant_color) && defined(dColorType_texture)
        // dual-color mixing (group color types)
        // - for aColorMode between 0 and 1 use aColorMode to interpolate
        // - for aColorMode == 2 do nothing, i.e., use vColor
        // - for aColorMode == 3 use position on cylinder axis to interpolate
        if (dualColor) {
            if (aColorMode <= 1.0) {
                vColor.rgb = mix(vColor.rgb, color2.rgb, aColorMode);
            } else if (aColorMode == 3.0) {
                vColor.rgb = mix(vColor.rgb, color2.rgb, mix(-0.25, 1.25, f / 1.5));
            }
        }
    #endif

    ${Lt}
}
`;var uu=`
vec4 texture3dFrom1dTrilinear(const in sampler2D tex, const in vec3 pos, const in vec3 gridDim, const in vec2 texDim, const in float offset) {
    float gdYZ = gridDim.z * gridDim.y;
    float gdZ = gridDim.z;
    vec3 p0 = floor(pos * gridDim);
    vec3 p1 = ceil(pos * gridDim);
    vec3 pd = (pos * gridDim - p0) / (p1 - p0);
    vec4 s000 = readFromTexture(tex, offset + p0.z + p0.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s100 = readFromTexture(tex, offset + p0.z + p0.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s001 = readFromTexture(tex, offset + p1.z + p0.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s101 = readFromTexture(tex, offset + p1.z + p0.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s010 = readFromTexture(tex, offset + p0.z + p1.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s110 = readFromTexture(tex, offset + p0.z + p1.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s011 = readFromTexture(tex, offset + p1.z + p1.y * gdZ + p0.x * gdYZ, texDim);
    vec4 s111 = readFromTexture(tex, offset + p1.z + p1.y * gdZ + p1.x * gdYZ, texDim);
    vec4 s00 = mix(s000, s100, pd.x);
    vec4 s01 = mix(s001, s101, pd.x);
    vec4 s10 = mix(s010, s110, pd.x);
    vec4 s11 = mix(s011, s111, pd.x);
    vec4 s0 = mix(s00, s10, pd.y);
    vec4 s1 = mix(s01, s11, pd.y);
    return mix(s0, s1, pd.z);
}
`;var lu=`
vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intMod(zSlice * gridDim.x, texDim.x) / gridDim.x;
    float row = floor(intDiv(zSlice * gridDim.x, texDim.x));
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    return texture2D(tex, coord);
}
`;var Po=`
vec4 texture3dFrom2dLinear(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice0 = floor(pos.z * gridDim.z);
    float column0 = intMod(zSlice0 * gridDim.x, texDim.x) / gridDim.x;
    float row0 = floor(intDiv(zSlice0 * gridDim.x, texDim.x));
    vec2 coord0 = (vec2(column0 * gridDim.x, row0 * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    vec4 color0 = texture2D(tex, coord0);

    float zSlice1 = zSlice0 + 1.0;
    float column1 = intMod(zSlice1 * gridDim.x, texDim.x) / gridDim.x;
    float row1 = floor(intDiv(zSlice1 * gridDim.x, texDim.x));
    vec2 coord1 = (vec2(column1 * gridDim.x, row1 * gridDim.y) + (pos.xy * gridDim.xy)) / texDim;
    vec4 color1 = texture2D(tex, coord1);

    float delta0 = abs((pos.z * gridDim.z) - zSlice0);
    return mix(color0, color1, delta0);
}
`;var du=`
precision highp float;
precision highp int;

${z}
${hr}

// per-group clip flags come from a varying, which direct volumes don't have
#undef dClipping
${Te}

${ke}
${uu}
${lu}
${Po}

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

#if defined(dGridTexType_2d)
    vec4 textureVal(vec3 pos) {
        return texture3dFrom2dLinear(tGridTex, pos + (vec3(0.5, 0.5, 0.0) / uGridDim), uGridDim, uGridTexDim.xy);
    }
    vec4 textureGroup(vec3 pos) {
        return texture3dFrom2dNearest(tGridTex, pos + (vec3(0.5, 0.5, 0.0) / uGridDim), uGridDim, uGridTexDim.xy);
    }
#elif defined(dGridTexType_3d)
    vec4 textureVal(vec3 pos) {
        return texture(tGridTex, pos + (vec3(0.5) / uGridDim));
    }
    vec4 textureGroup(vec3 pos) {
        return texelFetch(tGridTex, ivec3(pos * uGridDim), 0);
    }
#endif

float calcDepth(const in vec3 pos) {
    vec2 clipZW = pos.z * uProjection[2].zw + uProjection[3].zw;
    return clipZToDepth(clipZW.x / clipZW.y);
}

float transferFunction(float value) {
    return texture2D(tTransferTex, vec2(value, 0.0)).r;
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

const float gradOffset = 0.5;

vec3 v3m4(vec3 p, mat4 m) {
    return (m * vec4(p, 1.0)).xyz;
}

float preFogAlphaBlended = 0.0;

vec4 raymarch(vec3 startLoc, vec3 step, vec3 rayDir) {
    mat3 normalMatrix = adjoint(uModelView * vTransform);
    mat4 cartnToUnit = uCartnToUnit * inverse4(vTransform);
    #if defined(dClipVariant_pixel) && dClipObjectCount != 0
        mat4 modelTransform = uModel * vTransform * uTransform;
    #endif
    mat4 modelViewTransform = uModelView * vTransform * uTransform;

    vec3 scaleVol = vec3(1.0) / uGridDim;
    vec3 pos = startLoc;
    vec4 cell;
    float prevValue = -1.0;
    float value = 0.0;
    vec4 src = vec4(0.0);
    vec4 dst = vec4(0.0);
    float fragmentDepth;

    vec3 posMin = vec3(0.0);
    vec3 posMax = vec3(1.0) - vec3(1.0) / uGridDim;

    vec3 unitPos;

    vec3 nextPos;
    float nextValue;

    vec4 material;
    vec4 overpaint;
    float metalness = uMetalness;
    float roughness = uRoughness;
    float emissive = uEmissive;

    vec3 gradient = vec3(1.0);
    vec3 dx = vec3(gradOffset * scaleVol.x, 0.0, 0.0);
    vec3 dy = vec3(0.0, gradOffset * scaleVol.y, 0.0);
    vec3 dz = vec3(0.0, 0.0, gradOffset * scaleVol.z);

    float maxDist = min(vBoundingSphere.w * 2.0, uFar - uNear);
    float maxDistSq = maxDist * maxDist;

    for (int i = 0; i < uMaxSteps; ++i) {
        // break when beyond bounding-sphere or far-plane
        vec3 distVec = startLoc - pos;
        if (dot(distVec, distVec) > maxDistSq) break;

        unitPos = v3m4(pos / uModelScale, cartnToUnit);

        // continue when outside of grid
        if (unitPos.x > posMax.x || unitPos.y > posMax.y || unitPos.z > posMax.z ||
            unitPos.x < posMin.x || unitPos.y < posMin.y || unitPos.z < posMin.z
        ) {
            prevValue = value;
            pos += step;
            continue;
        }

        cell = textureVal(unitPos);
        value = cell.a; // current voxel value

        if (uJumpLength > 0.0 && value < 0.01) {
            nextPos = pos + rayDir * uJumpLength;
            nextValue = textureVal(v3m4(nextPos / uModelScale, cartnToUnit)).a;
            if (nextValue < 0.01) {
                prevValue = nextValue;
                pos = nextPos;
                continue;
            }
        }

        vec4 mvPosition = modelViewTransform * vec4(unitPos * uGridDim, 1.0);
        // behind the opaque depth (depth is reversed)
        if (calcDepth(mvPosition.xyz) < getDepth(gl_FragCoord.xy / uDrawingBufferSize))
            break;

        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            vec3 modelPosition = v3m4(unitPos * uGridDim, modelTransform);
            if (clipTest(modelPosition)) {
                prevValue = value;
                pos += step;
                continue;
            }
        #endif

        vec3 vViewPosition = mvPosition.xyz;
        material.a = transferFunction(value);

        #ifdef dPackedGroup
            float group = unpackRGBToInt(textureGroup(floor(unitPos * uGridDim + 0.5) / uGridDim).rgb);
        #else
            vec3 g = floor(unitPos * uGridDim + 0.5);
            // note that we swap x and z because the texture is flipped around y
            #if defined(dAxisOrder_012)
                float group = g.z + g.y * uGridDim.z + g.x * uGridDim.z * uGridDim.y; // 210
            #elif defined(dAxisOrder_021)
                float group = g.y + g.z * uGridDim.y + g.x * uGridDim.y * uGridDim.z; // 120
            #elif defined(dAxisOrder_102)
                float group = g.z + g.x * uGridDim.z + g.y * uGridDim.z * uGridDim.x; // 201
            #elif defined(dAxisOrder_120)
                float group = g.x + g.z * uGridDim.x + g.y * uGridDim.x * uGridDim.z; // 021
            #elif defined(dAxisOrder_201)
                float group = g.y + g.x * uGridDim.y + g.z * uGridDim.y * uGridDim.x; // 102
            #elif defined(dAxisOrder_210)
                float group = g.x + g.y * uGridDim.x + g.z * uGridDim.x * uGridDim.y; // 012
            #endif
        #endif

        #if defined(dColorType_direct) && defined(dUsePalette)
            float paletteValue = (value - uPaletteDomain[0]) / (uPaletteDomain[1] - uPaletteDomain[0]);
            material.rgb = texture2D(tPalette, vec2(clamp(paletteValue, 0.0, 1.0), 0.0)).rgb;
        #elif defined(dColorType_uniform)
            material.rgb = uColor;
        #elif defined(dColorType_texture)
            // by the color type (\`ColorTypeIndex\`): instance, group, groupInstance, vertex, vertexInstance
            if (uColorIndexType == 0) {
                material.rgb = readFromTexture(tColor, vInstance, uColorTexDim).rgb;
            } else if (uColorIndexType == 1) {
                material.rgb = readFromTexture(tColor, group, uColorTexDim).rgb;
            } else if (uColorIndexType == 2) {
                material.rgb = readFromTexture(tColor, vInstance * float(uGroupCount) + group, uColorTexDim).rgb;
            } else if (uColorIndexType == 3) {
                material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, 0.0).rgb;
            } else {
                material.rgb = texture3dFrom1dTrilinear(tColor, unitPos, uGridDim, uColorTexDim, vInstance * float(uVertexCount)).rgb;
            }
        #endif

        #ifdef dOverpaint
            #if defined(dOverpaintType_texture)
                overpaint = readFromTexture(tOverpaint, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uOverpaintTexDim);
            #elif defined(dOverpaintType_vertexInstance)
                overpaint = texture3dFrom1dTrilinear(tOverpaint, unitPos, uGridDim, uOverpaintTexDim, vInstance * float(uVertexCount));
            #endif

            material.rgb = mix(material.rgb, overpaint.rgb, overpaint.a);
        #endif

        #if defined(dIgnoreLight)
            gl_FragColor.rgb = material.rgb;
        #else
            if (material.a >= 0.01) {
                #ifdef dPackedGroup
                    // compute gradient by central differences
                    gradient.x = textureVal(unitPos - dx).a - textureVal(unitPos + dx).a;
                    gradient.y = textureVal(unitPos - dy).a - textureVal(unitPos + dy).a;
                    gradient.z = textureVal(unitPos - dz).a - textureVal(unitPos + dz).a;
                #else
                    gradient = cell.xyz * 2.0 - 1.0;
                #endif
                vec3 normal = -normalize(normalMatrix * normalize(gradient));
                ${gr}
            } else {
                gl_FragColor.rgb = material.rgb;
            }
        #endif

        gl_FragColor.a = material.a * uAlpha * uTransferScale;

        #if defined(dColorMarker)
            float marker = uMarker;
            if (uMarker == -1.0) {
                marker = readFromTexture(tMarker, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uMarkerTexDim).r;
                marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
            }
        #endif
        ${$e}

        preFogAlphaBlended = (1.0 - preFogAlphaBlended) * gl_FragColor.a + preFogAlphaBlended;
        fragmentDepth = calcDepth(mvPosition.xyz);
        ${qe}

        src = gl_FragColor;

        if (!uTransparentBackground || !uFog) {
            // done in 'apply_fog' otherwise
            src.rgb *= src.a;
        }
        dst = (1.0 - dst.a) * src + dst; // standard blending

        // break if the color is opaque enough
        if (dst.a > 0.95)
            break;

        pos += step;
    }

    return dst;
}

// TODO: support float texture for higher precision values???
// TODO: support clipping exclusion texture support

void main() {
    #if defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
        discard;
    #else
        if (gl_FrontFacing)
            discard;

        vec3 rayDir = mix(normalize(vModelPosition - uCameraPosition), uCameraDir, uIsOrtho);
        vec3 step = rayDir * uStepScale * uModelScale;

        float boundingSphereNear = distance(vBoundingSphere.xyz, uCameraPosition) - vBoundingSphere.w;
        float d = max(uNear, boundingSphereNear) - mix(0.0, distance(vModelPosition, uCameraPosition), uIsOrtho);
        vec3 start = mix(uCameraPosition, vModelPosition, uIsOrtho) + (d * rayDir);
        gl_FragColor = raymarch(start, step, rayDir);

        float fragmentDepth = calcDepth((uView * vec4(start, 1.0)).xyz);
        float preFogAlpha = clamp(preFogAlphaBlended, 0.0, 1.0);
        ${Xe}
    #endif
}
`;var pu=`
precision highp float;

varying vec3 vModelPosition;
varying float vInstance;
varying vec4 vBoundingSphere;
varying mat4 vTransform;

void main() {
    vec4 unitCoord = vec4(aPosition + vec3(0.5), 1.0);
    vec4 mvPosition = uModelView * aTransform * uUnitToCartn * unitCoord;

    vModelPosition = (uModel * aTransform * uUnitToCartn * unitCoord).xyz;
    vInstance = aInstance;
    vBoundingSphere = vec4(
        (uModel * aTransform * vec4(uInvariantBoundingSphere.xyz, 1.0)).xyz,
        uModelScale * uInvariantBoundingSphere.w
    );
    vTransform = aTransform;

    gl_Position = uProjection * mvPosition;

    // move z position to the far clip plane (but not too close to get precision issues; clip z is reversed)
    #ifdef clipZeroToOne
        gl_Position.z = 0.005;
    #else
        gl_Position.z = -gl_Position.w + 0.01;
    #endif
}
`;var mu=`
precision highp float;
precision highp int;

${z}

// Function to convert depth value from depth buffer to view space Z
float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

// Retrieve depth from opaque depth texture
float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

// Retrieve depth from transparent depth texture
float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

bool isBackground(const in float depth) {
    return depth == 0.0;
}

float getDepth(const in vec2 coords) {
    return max(getDepthOpaque(coords), getDepthTransparent(coords));
}

float getCOC(vec2 uv) {
    float depth = getDepth(uv);
    float viewDist = getViewZ(depth);
    vec3 aposition = screenSpaceToViewSpace(vec3(uv.xy, depth), uInvProjection);
    float focusDist = length(aposition - uCenter);
    float coc = 0.0;  // Circle of Confusion
    if (uMode == 0) { // planar Depth of field
        coc = (abs(viewDist) - uInFocus) / uPPM;  //focus distance, focus range
    } else if(uMode == 1) { // spherical Depth of field
        coc = focusDist / uPPM ;
    }
    coc = clamp(coc, -1.0, 1.0);
    return coc;
}

// Simple box blur for blurring the image
vec3 getBlurredImage(vec2 coords) {
    vec4 blurColor = vec4(0);
    vec2 texelSize = vec2(1.0 / uTexSize.x, 1.0 / uTexSize.y);
    float count = 0.0;
    for (int x = 0; x < int(dBlurSize); x++) {
        for (int y = 0; y < int(dBlurSize); y++) {
            vec2 offset = vec2(float(x) - float(dBlurSize) / 2.0, float(y) - float(dBlurSize) / 2.0);
            vec2 uvPixel = coords.xy + offset * texelSize * uBlurSpread;
            float coc = getCOC(uvPixel);
            coc = smoothstep(0.0, 1.0, abs(coc));
            // mix blurColor with new color with weight coc
            blurColor.rgb = blurColor.rgb + texture2D(tColor, uvPixel).xyz * coc;
            count+=coc;
        }
    }
    blurColor = blurColor / count;
    return blurColor.rgb;
}

// simplification from https://catlikecoding.com/unity/tutorials/advanced-rendering/depth-of-field/
void main() {
    vec2 uv = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, uv);
    float depth = getDepth(uv);

    float viewDist = getViewZ(depth);

    vec3 aposition = screenSpaceToViewSpace(vec3(uv.xy, depth), uInvProjection);
    float focusDist = length(aposition - uCenter);
    vec3 blurColor = getBlurredImage(uv);

    float coc = getCOC(uv); // Circle of Confusion

    // for debugging the coc
    // color.rgb = (coc < 0.0) ? (1.0 - abs(coc)) * vec3(1.0,0.0,0.0) : vec3(0.0, 1.0 - coc, 0.0) ;//mix(color.rgb, blurColor.rgb, abs(coc));
    color.rgb = mix(color.rgb, blurColor, smoothstep(0.0, 1.0, abs(coc))); // Smooth blending based on CoC
    gl_FragColor = color;
}
`;var fu=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tDpoitFrontColor, coords);
}
`;var hu=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    vec4 accum = texture2D(tWboitA, coords);
    float r = 1.0 - accum.a;

    accum.a = texture2D(tWboitB, coords).r;
    // divisor needs to allow very small values for nice fading
    gl_FragColor = vec4(accum.rgb / clamp(accum.a, 0.00000001, 50000.0), r);
}
`;var gu=`
precision highp float;
precision highp int;

// adapted from https://github.com/kosua20/Rendu
// MIT License Copyright (c) 2017 Simon Rodriguez

#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))

float rgb2luma(vec3 rgb){
    return sqrt(dot(rgb, vec3(0.299, 0.587, 0.114)));
}

float sampleLuma(vec2 uv) {
    return rgb2luma(texture2D(tColor, uv).rgb);
}

float sampleLuma(vec2 uv, float offsetX, float offsetY) {
    uv += uTexSizeInv * vec2(offsetX, offsetY);
    return sampleLuma(uv);
}

void main(void) {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec2 inverseScreenSize = uTexSizeInv;

    vec4 colorCenter = texture2D(tColor, coords);

    // Luma at the current fragment
    float lumaCenter = rgb2luma(colorCenter.rgb);

    // Luma at the four direct neighbours of the current fragment.
    float lumaDown = sampleLuma(coords, 0.0, -1.0);
    float lumaUp = sampleLuma(coords, 0.0, 1.0);
    float lumaLeft = sampleLuma(coords, -1.0, 0.0);
    float lumaRight = sampleLuma(coords, 1.0, 0.0);

    // Find the maximum and minimum luma around the current fragment.
    float lumaMin = min(lumaCenter, min(min(lumaDown, lumaUp), min(lumaLeft, lumaRight)));
    float lumaMax = max(lumaCenter, max(max(lumaDown, lumaUp), max(lumaLeft, lumaRight)));

    // Compute the delta.
    float lumaRange = lumaMax - lumaMin;

    // If the luma variation is lower that a threshold (or if we are in a really dark area),
    // we are not on an edge, don't perform any AA.
    if (lumaRange < max(dEdgeThresholdMin, lumaMax * dEdgeThresholdMax)) {
        gl_FragColor = colorCenter;
        return;
    }

    // Query the 4 remaining corners lumas.
    float lumaDownLeft = sampleLuma(coords, -1.0, -1.0);
    float lumaUpRight = sampleLuma(coords, 1.0, 1.0);
    float lumaUpLeft = sampleLuma(coords, -1.0, 1.0);
    float lumaDownRight = sampleLuma(coords, 1.0, -1.0);

    // Combine the four edges lumas (using intermediary variables for future computations
    // with the same values).
    float lumaDownUp = lumaDown + lumaUp;
    float lumaLeftRight = lumaLeft + lumaRight;

    // Same for corners
    float lumaLeftCorners = lumaDownLeft + lumaUpLeft;
    float lumaDownCorners = lumaDownLeft + lumaDownRight;
    float lumaRightCorners = lumaDownRight + lumaUpRight;
    float lumaUpCorners = lumaUpRight + lumaUpLeft;

    // Compute an estimation of the gradient along the horizontal and vertical axis.
    float edgeHorizontal = abs(-2.0 * lumaLeft + lumaLeftCorners) + abs(-2.0 * lumaCenter + lumaDownUp) * 2.0 + abs(-2.0 * lumaRight + lumaRightCorners);
    float edgeVertical = abs(-2.0 * lumaUp + lumaUpCorners) + abs(-2.0 * lumaCenter + lumaLeftRight) * 2.0 + abs(-2.0 * lumaDown + lumaDownCorners);

    // Is the local edge horizontal or vertical ?
    bool isHorizontal = (edgeHorizontal >= edgeVertical);

    // Choose the step size (one pixel) accordingly.
    float stepLength = isHorizontal ? inverseScreenSize.y : inverseScreenSize.x;

    // Select the two neighboring texels lumas in the opposite direction to the local edge.
    float luma1 = isHorizontal ? lumaDown : lumaLeft;
    float luma2 = isHorizontal ? lumaUp : lumaRight;
    // Compute gradients in this direction.
    float gradient1 = luma1 - lumaCenter;
    float gradient2 = luma2 - lumaCenter;

    // Which direction is the steepest ?
    bool is1Steepest = abs(gradient1) >= abs(gradient2);

    // Gradient in the corresponding direction, normalized.
    float gradientScaled = 0.25 * max(abs(gradient1), abs(gradient2));

    // Average luma in the correct direction.
    float lumaLocalAverage = 0.0;
    if(is1Steepest){
        // Switch the direction
        stepLength = -stepLength;
        lumaLocalAverage = 0.5 * (luma1 + lumaCenter);
    } else {
        lumaLocalAverage = 0.5 * (luma2 + lumaCenter);
    }

    // Shift UV in the correct direction by half a pixel.
    vec2 currentUv = coords;
    if(isHorizontal){
        currentUv.y += stepLength * 0.5;
    } else {
        currentUv.x += stepLength * 0.5;
    }

    // Compute offset (for each iteration step) in the right direction.
    vec2 offset = isHorizontal ? vec2(inverseScreenSize.x, 0.0) : vec2(0.0, inverseScreenSize.y);
    // Compute UVs to explore on each side of the edge, orthogonally.
    // The QUALITY allows us to step faster.
    vec2 uv1 = currentUv - offset * QUALITY(0);
    vec2 uv2 = currentUv + offset * QUALITY(0);

    // Read the lumas at both current extremities of the exploration segment,
    // and compute the delta wrt to the local average luma.
    float lumaEnd1 = sampleLuma(uv1);
    float lumaEnd2 = sampleLuma(uv2);
    lumaEnd1 -= lumaLocalAverage;
    lumaEnd2 -= lumaLocalAverage;

    // If the luma deltas at the current extremities is larger than the local gradient,
    // we have reached the side of the edge.
    bool reached1 = abs(lumaEnd1) >= gradientScaled;
    bool reached2 = abs(lumaEnd2) >= gradientScaled;
    bool reachedBoth = reached1 && reached2;

    // If the side is not reached, we continue to explore in this direction.
    if(!reached1){
        uv1 -= offset * QUALITY(1);
    }
    if(!reached2){
        uv2 += offset * QUALITY(1);
    }

    // If both sides have not been reached, continue to explore.
    if(!reachedBoth){
        for(int i = 2; i < dIterations; i++){
            // If needed, read luma in 1st direction, compute delta.
            if(!reached1){
                lumaEnd1 = sampleLuma(uv1);
                lumaEnd1 = lumaEnd1 - lumaLocalAverage;
            }
            // If needed, read luma in opposite direction, compute delta.
            if(!reached2){
                lumaEnd2 = sampleLuma(uv2);
                lumaEnd2 = lumaEnd2 - lumaLocalAverage;
            }
            // If the luma deltas at the current extremities is larger than the local gradient,
            // we have reached the side of the edge.
            reached1 = abs(lumaEnd1) >= gradientScaled;
            reached2 = abs(lumaEnd2) >= gradientScaled;
            reachedBoth = reached1 && reached2;

            // If the side is not reached, we continue to explore in this direction,
            // with a variable quality.
            if(!reached1){
                uv1 -= offset * QUALITY(i);
            }
            if(!reached2){
                uv2 += offset * QUALITY(i);
            }

            // If both sides have been reached, stop the exploration.
            if(reachedBoth){
                break;
            }
        }
    }

    // Compute the distances to each side edge of the edge (!).
    float distance1 = isHorizontal ? (coords.x - uv1.x) : (coords.y - uv1.y);
    float distance2 = isHorizontal ? (uv2.x - coords.x) : (uv2.y - coords.y);

    // In which direction is the side of the edge closer ?
    bool isDirection1 = distance1 < distance2;
    float distanceFinal = min(distance1, distance2);

    // Thickness of the edge.
    float edgeThickness = (distance1 + distance2);

    // Is the luma at center smaller than the local average ?
    bool isLumaCenterSmaller = lumaCenter < lumaLocalAverage;

    // If the luma at center is smaller than at its neighbour,
    // the delta luma at each end should be positive (same variation).
    bool correctVariation1 = (lumaEnd1 < 0.0) != isLumaCenterSmaller;
    bool correctVariation2 = (lumaEnd2 < 0.0) != isLumaCenterSmaller;

    // Only keep the result in the direction of the closer side of the edge.
    bool correctVariation = isDirection1 ? correctVariation1 : correctVariation2;

    // UV offset: read in the direction of the closest side of the edge.
    float pixelOffset = - distanceFinal / edgeThickness + 0.5;

    // If the luma variation is incorrect, do not offset.
    float finalOffset = correctVariation ? pixelOffset : 0.0;

    // Sub-pixel shifting
    // Full weighted average of the luma over the 3x3 neighborhood.
    float lumaAverage = (1.0 / 12.0) * (2.0 * (lumaDownUp + lumaLeftRight) + lumaLeftCorners + lumaRightCorners);
    // Ratio of the delta between the global average and the center luma,
    // over the luma range in the 3x3 neighborhood.
    float subPixelOffset1 = clamp(abs(lumaAverage - lumaCenter) / lumaRange, 0.0, 1.0);
    float subPixelOffset2 = (-2.0 * subPixelOffset1 + 3.0) * subPixelOffset1 * subPixelOffset1;
    // Compute a sub-pixel offset based on this delta.
    float subPixelOffsetFinal = subPixelOffset2 * subPixelOffset2 * float(dSubpixelQuality);

    // Pick the biggest of the two offsets.
    finalOffset = max(finalOffset, subPixelOffsetFinal);

    // Compute the final UV coordinates.
    vec2 finalUv = coords;
    if(isHorizontal){
        finalUv.y += finalOffset * stepLength;
    } else {
        finalUv.x += finalOffset * stepLength;
    }

    // Read the color at the new UV coordinates, and use it.
    gl_FragColor = texture2D(tColor, finalUv);
}
`;var yu=`
precision highp float;

varying vec3 vPosition;
varying float vRadiusSqInv;
#if defined(dCalcType_groupId)
    varying float vGroup;
#endif

${z}

void main() {
    vec2 v = gl_FragCoord.xy - vec2(uCurrentX, uCurrentY) - 0.5;
    vec3 fragPos = vec3(v.x, v.y, uCurrentSlice);
    float dist = distance(fragPos, vPosition) * uResolution;

    #if defined(dCalcType_density)
        float density = exp(-uAlpha * ((dist * dist) * vRadiusSqInv));
        gl_FragColor.a = density * uRadiusFactorInv;
    #elif defined(dCalcType_minDistance)
        gl_FragColor.a = 1.0 - dist * uRadiusFactorInv;
    #elif defined(dCalcType_groupId)
        #if defined(dGridTexType_2d)
            float minDistance = 1.0 - texture2D(tMinDistanceTex, (gl_FragCoord.xy) / (uGridTexDim.xy / uGridTexScale)).a;
        #elif defined(dGridTexType_3d)
            float minDistance = 1.0 - texelFetch(tMinDistanceTex, ivec3(gl_FragCoord.xy, uCurrentSlice), 0).a;
        #endif
        if (dist * uRadiusFactorInv > minDistance + uResolution * 0.05)
            discard;
        gl_FragColor.rgb = packIntToRGB(vGroup);
    #endif
}
`;var bu=`
precision highp float;

varying vec3 vPosition;
varying float vRadiusSqInv;

#if defined(dCalcType_groupId)
    varying float vGroup;
#endif

void main() {
    vRadiusSqInv = 1.0 / (aRadius * aRadius);
    #if defined(dCalcType_groupId)
        vGroup = aGroup;
    #endif
    // a quad around the atom covering its splat, in pixels of the slice (uGridDim.xy)
    float size = ceil(((aRadius * 3.0) / uResolution) + uResolution);
    vPosition = (aPosition - uBboxMin) / uResolution;
    gl_Position = vec4(((aPosition - uBboxMin) / uBboxSize) * 2.0 - 1.0, 1.0);
    #ifdef clipZeroToOne
        // z inside the clip depth range, as with [-1, 1]
        gl_Position.z = gl_Position.z * 0.5 + 0.5;
    #endif
    gl_Position.xy += aMapping * size / uGridDim.xy;
}
`;var xu=`
precision highp float;

void main(void) {
    vec2 position = gl_FragCoord.xy * uInvSize + uRect.xy;

    float x = texture(tPreviousLevel, position).r;
    float y = textureOffset(tPreviousLevel, position, ivec2(-1, 0)).r;
    float z = textureOffset(tPreviousLevel, position, ivec2(-1, -1)).r;
    float w = textureOffset(tPreviousLevel, position, ivec2(0, -1)).r;

    // the farthest depth (depth is reversed)
    gl_FragColor = vec4(min(min(x, y), min(z, w)));
}
`;var vu=`
precision highp float;
precision highp int;

${z}

void main(void) {
    float k = 0.5 * uSize;
    vec2 position = floor((gl_FragCoord.xy / uTexSize) / uSize) * uSize;

    #if __VERSION__ == 100
        float a, b, c, d;

        if (uFirst) {
            a = texture2D(tInputLevel, position).r * 255.0;
            b = texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0;
            c = texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0;
            d = texture2D(tInputLevel, position + vec2(k, k)).r * 255.0;
        } else {
            a = unpackRGBToInt(texture2D(tPreviousLevel, position).rgb);
            b = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, 0.0)).rgb);
            c = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(0.0, k)).rgb);
            d = unpackRGBToInt(texture2D(tPreviousLevel, position + vec2(k, k)).rgb);
        }
        gl_FragColor = vec4(packIntToRGB(a + b + c + d), 1.0);
    #else
        int a, b, c, d;

        if (uFirst) {
            a = int(texture2D(tInputLevel, position).r * 255.0);
            b = int(texture2D(tInputLevel, position + vec2(k, 0.0)).r * 255.0);
            c = int(texture2D(tInputLevel, position + vec2(0.0, k)).r * 255.0);
            d = int(texture2D(tInputLevel, position + vec2(k, k)).r * 255.0);
        } else {
            a = texture2D(tPreviousLevel, position).r;
            b = texture2D(tPreviousLevel, position + vec2(k, 0.0)).r;
            c = texture2D(tPreviousLevel, position + vec2(0.0, k)).r;
            d = texture2D(tPreviousLevel, position + vec2(k, k)).r;
        }
        gl_FragColor = ivec4(a + b + c + d);
    #endif
}
`;var Su=`
precision highp float;
precision highp int;

void main(void) {
    #if __VERSION__ == 100
        gl_FragColor = texture2D(tTexture, vec2(0.5));
    #else
        gl_FragColor = ivec4(texture2D(tTexture, vec2(0.5)).r);
    #endif
}
`;var Tu=`
precision highp float;

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    gl_FragColor = texture2D(tColor, coords) * uWeight;
}
`;var Cu=`
precision highp float;
precision highp sampler2D;

${z}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    #if defined(dTransparentOutline) || defined(dOcclusionEnable) || defined(dBloomEnable)
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
    #else
        return 0.0;
    #endif
}

bool isBackground(const in float depth) {
    // the far plane (depth is reversed), packed or raw
    return depth == 0.0;
}

// occlusion at \`coords\` of a pixel at view z \`viewZ\`, depth-aware upsampled from a lower SSAO resolution
float getSsao(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords));
    #endif
}

float getSsaoTransparent(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepthTransparent, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
    #endif
}

//

// TODO: investigate
// https://interplayoflight.wordpress.com/2022/03/26/raytraced-global-illumination-denoising/

//

#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439  // 1.0/SQRT_OF_2PI
#define INV_PI 0.31830988618379067153776752674503

// https://github.com/BrutPitt/glslSmartDeNoise
//
//  smartDeNoise - parameters
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  sampler2D tex     - sampler image / texture
//  vec2 uv           - actual fragment coord
//  float sigma  >  0 - sigma Standard Deviation
//  float kSigma >= 0 - sigma coefficient
//      kSigma * sigma  -->  radius of the circular kernel
//  float threshold   - edge sharpening threshold

float NormalWeightStrength = 6.0;

vec4 smartDeNoise(sampler2D tex, vec2 uv) {
    float sigma = 3.0;
    float kSigma = 2.0;
    float threshold = uDenoiseThreshold;

    vec4 centrPx = texture2D(tex, uv);
    if (threshold == 0.0) return centrPx;

    float invSigmaQx2 = 0.5 / (sigma * sigma);      // 1.0 / (sigma^2 * 2.0)
    float invSigmaQx2PI = INV_PI * invSigmaQx2;    // 1.0 / (sqrt(PI) * sigma)

    float invThresholdSqx2 = 0.5 / (threshold * threshold);     // 1.0 / (sigma^2 * 2.0)
    float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;   // 1.0 / (sqrt(2*PI) * sigma)

    float zBuff = 0.0;
    vec4 colorBuff = vec4(0.0);

    vec3 normal = texture2D(tNormal, uv).xyz;

    for (int x = -6; x <= 6; ++x) {
        for (int y = -6; y <= 6; ++y) {
            vec2 d = vec2(float(x), float(y));

            float blurFactor = exp(-dot(d , d) * invSigmaQx2) * invSigmaQx2PI;
            vec2 uvSample = uv + d / uTexSize;

            vec3 normalSample = texture2D(tNormal, uvSample).xyz;
            float normalW = saturate(dot(normal, normalSample));
            normalW = pow(normalW, NormalWeightStrength);
            blurFactor *= normalW;

            vec4 walkPx = texture2D(tex, uvSample);

            vec4 dC = walkPx - centrPx;
            float deltaFactor = exp(-dot(dC, dC) * invThresholdSqx2) * invThresholdSqrt2PI * blurFactor;

            zBuff += deltaFactor;
            colorBuff += deltaFactor * walkPx;
        }
    }

    if (zBuff <= EPSILON) {
        return centrPx;
    }

    return colorBuff / zBuff;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 0.0;
    transparentDepth = 0.0;
    alpha = 0.0;
    for (int y = -dOutlineScale; y <= dOutlineScale; y++) {
        for (int x = -dOutlineScale; x <= dOutlineScale; x++) {
            if (x * x + y * y > squaredOutlineScale) {
                continue;
            }

            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            vec4 sampleOutlineCombined = texture2D(tOutlines, sampleCoords);
            float sampleOpaqueDepth = unpackRGToUnitInterval(sampleOutlineCombined.gb);
            float sampleTransparentDepth = sampleOutlineCombined.a;
            vec2 sampleFlagWithAlpha = unpack2x4(sampleOutlineCombined.r);

            float sampleFlag = sampleFlagWithAlpha.x;
            float sampleAlpha = clamp(sampleFlagWithAlpha.y * 0.5, 0.01, 1.0);

            if ((sampleFlag > 0.20 && sampleFlag < 0.30) || (sampleFlag > 0.70 && sampleFlag < 0.80)) { // transparent || both
                if (sampleOpaqueDepth > opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth > transparentDepth) { // transparent || both
                hasTransparent = true;
                transparentDepth = sampleTransparentDepth;
                alpha = sampleAlpha;
            }
        }
    }
}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    #ifdef dDenoise
        vec4 color = smartDeNoise(tColor, coords);
    #else
        vec4 color = texture2D(tColor, coords);
    #endif

    float opaqueDepth = getDepthOpaque(coords);
    float backgroundViewZ = 2.0 * uFar;
    float opaqueSelfViewZ = isBackground(opaqueDepth) ? backgroundViewZ : getViewZ(opaqueDepth);
    float fogFactor = smoothstep(uFogNear, uFogFar, abs(opaqueSelfViewZ));
    float fogAlpha = 1.0 - fogFactor;

    float transparentDepth = 0.0;
    #ifdef dBlendTransparency
        bool blendTransparency = true;
        vec4 transparentColor = texture2D(tTransparentColor, coords);

        transparentDepth = getDepthTransparent(coords);
    #endif

    float alpha = 1.0;
    if (!uTransparentBackground) {
        // mix opaque objects with background color
        color.rgb = mix(color.rgb, uFogColor, fogFactor);
    } else {
        // pre-multiplied alpha expected for transparent background
        alpha = fogAlpha;
        color.rgb *= fogAlpha;
    }

    #if defined(dOcclusionEnable)
        if (!isBackground(opaqueDepth)) {
            float occlusionFactor = getSsao(coords, opaqueSelfViewZ);

            if (!uTransparentBackground) {
                color.rgb = mix(mix(uOcclusionColor, uFogColor, fogFactor), color.rgb, occlusionFactor);
            } else {
                color.rgb = mix(uOcclusionColor * (1.0 - fogFactor), color.rgb, occlusionFactor);
            }
        }
        #ifdef dBlendTransparency
            if (!isBackground(transparentDepth)) {
                float viewDist = abs(getViewZ(transparentDepth));
                float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                float occlusionFactor = getSsaoTransparent(coords, getViewZ(transparentDepth));
                transparentColor.rgb = mix(uOcclusionColor * (1.0 - fogFactor), transparentColor.rgb, occlusionFactor);
            }
        #endif
    #endif

    #ifdef dOutlineEnable
        bool hasOpaque;
        bool hasTransparent;
        float outlineOpaqueDepth;
        float outlineTransparentDepth;
        float outlineAlpha;
        getOutline(coords, hasOpaque, hasTransparent, outlineOpaqueDepth, outlineTransparentDepth, outlineAlpha);

        if (hasOpaque) {
            float viewDist = abs(getViewZ(outlineOpaqueDepth));
            float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
            if (!uTransparentBackground) {
                color.rgb = mix(uOutlineColor, uFogColor, fogFactor);
            } else {
                alpha = 1.0 - fogFactor;
                color.rgb = mix(uOutlineColor, vec3(0.0), fogFactor);
            }
        }

        #ifdef dBlendTransparency
            if (hasTransparent) {
                if (hasOpaque && outlineOpaqueDepth > outlineTransparentDepth) {
                    blendTransparency = false;
                } else {
                    float finalOutlineAlpha = clamp(outlineAlpha * 2.0, 0.0, 1.0);
                    float viewDist = abs(getViewZ(outlineTransparentDepth));
                    float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                    float finalAlpha = max(transparentColor.a, finalOutlineAlpha * (1.0 - fogFactor));
                    transparentColor.a = finalAlpha;
                    transparentColor.rgb = uOutlineColor * finalAlpha;
                }
            }
        #endif
    #endif

    #ifdef dBlendTransparency
        if (blendTransparency) {
            if (transparentColor.a != 0.0) {
                // blending
                color = transparentColor + color * (1.0 - transparentColor.a);
                alpha = transparentColor.a + alpha * (1.0 - transparentColor.a);
            }
        }
    #endif

    #ifdef dBloomEnable
        vec4 bloom = texture2D(tBloom, coords);
        // additive glow over geometry and background alike; alpha just covers the premultiplied rgb
        color.rgb += bloom.rgb;
        alpha = min(max(alpha, max(color.r, max(color.g, color.b))), 1.0);
    #endif

    gl_FragColor = vec4(color.rgb, alpha);
}
`;var Ru=`
precision highp int;
precision highp float;

${z}

// parts adapted from
// - https://blog.demofox.org/2020/05/25/casual-shadertoy-path-tracing-1-basic-camera-diffuse-emissive/
// - https://github.com/0beqz/realism-effects/blob/v2-debug/src/ssgi/shader/ssgi.frag

//

// after a hit, it moves the ray this far along the normal away from a surface.
// Helps prevent incorrect intersections when rays bounce off of objects.
#define RayPosNormalNudge 0.0001

#if __VERSION__ == 100
    #define StateType float

    // from https://www.shadertoy.com/view/4djSRW
    float hash14(vec4 p4) {
        p4 = fract(p4  * vec4(0.1031, 0.1030, 0.0973, 0.1099));
        p4 += dot(p4, p4.wzxy + 33.33);
        return fract((p4.x + p4.y) * (p4.z + p4.w));
    }

    float randomFloat(inout float state) {
        state += 0.06711056;
        return 1.0 - hash14(vec4(gl_FragCoord.xy, float(uFrameNo), state));
    }
#else
    #define StateType uint

    // https://www.pcg-random.org/
    // https://jcgt.org/published/0009/03/02/
    uint pcg(inout uint seed) {
        seed = seed * 747796405u + 2891336453u;
        uint word = ((seed >> ((seed >> 28u) + 4u)) ^ seed) * 277803737u;
        return (word >> 22u) ^ word;
    }

    float randomFloat(inout uint state) {
        return float(pcg(state)) / 4294967296.0;
    }
#endif

vec3 randomUnitVector(inout StateType state) {
    float z = randomFloat(state) * 2.0 - 1.0;
    float a = randomFloat(state) * TWO_PI;
    float r = sqrt(1.0 - z * z);
    float x = r * cos(a);
    float y = r * sin(a);
    return vec3(x, y, z);
}

struct RayHitInfo {
    bool missed;
    vec3 position;
    vec3 normal;
    vec3 color;
    vec3 emissive;
};

//

// inset by half a texel to avoid sampling texels outside the viewport
vec2 clampToBounds(const in vec2 coords) {
    vec2 halfTexel = 0.5 / uTexSize;
    return clamp(coords, uBounds.xy + halfTexel, uBounds.zw - halfTexel);
}

float getDepth(const in vec2 coords) {
    return texture2D(tDepth, clampToBounds(coords)).r;
}

float getThickness(const in vec2 coords) {
    return unpackRGBAToDepth(texture2D(tThickness, clampToBounds(coords)));
}

bool isBackground(const in float depth) {
    return depth == 0.0;
}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

vec2 viewSpaceToScreenSpace(const vec3 position) {
    vec4 projectedCoord = uProjection * vec4(position, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    // [-1, 1] --> [0, 1] (NDC to screen position)
    projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
    return projectedCoord.xy;
}

float getRayOffset(const vec3 position) {
    vec4 projectedCoord = uProjection * vec4(position, 1.0);
    projectedCoord.xyz /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
    projectedCoord.z = clipZToDepth(projectedCoord.z);
    float viewportWidth = uTexSize.x * (uBounds.z - uBounds.x);
    vec3 adjacentPosition = screenSpaceToViewSpace(vec3(projectedCoord.xy + vec2(1.0 / viewportWidth, 0.0), projectedCoord.z), uInvProjection);
    return max(distance(position, adjacentPosition) * 0.1, 0.001);
}

vec2 binarySearch(inout vec3 dir, inout vec3 hitPos) {
    float rayHitDepthDifference;
    vec2 coords;

    dir *= 0.5;
    hitPos -= dir;

    for (int i = 0; i < uRefineSteps; i++) {
        coords = viewSpaceToScreenSpace(hitPos);
        float depth = getDepth(coords);
        float z = getViewZ(depth);
        rayHitDepthDifference = z - hitPos.z;

        dir *= 0.5;
        if (rayHitDepthDifference >= 0.0) {
            hitPos -= dir;
        } else {
            hitPos += dir;
        }
    }

    coords = clampToBounds(viewSpaceToScreenSpace(hitPos));

    return coords;
}

float calculateGrowthFactor(float begin, float end, float steps) {
    return pow(end / begin, 1.0 / steps);
}

vec2 rayMarch(in vec3 dir, in float thickness, inout vec3 hitPos, out bool missed) {
    float rayHitDepthDifference;
    vec2 coords;

    float begin = getRayOffset(hitPos);
    dir *= begin;
    missed = false;
    float gf = calculateGrowthFactor(begin, uRayDistance, float(uSteps));

    for (int i = 1; i < uSteps; i++) {
        hitPos += dir;
        float stepZ = abs(dir.z);
        dir *= gf;

        coords = clampToBounds(viewSpaceToScreenSpace(hitPos));
        float depth = getDepth(coords);
        float z = getViewZ(depth);
        rayHitDepthDifference = z - hitPos.z;

        if (rayHitDepthDifference >= 0.0) {
            float t = thickness;
            if (t == 0.0) {
                #ifdef dThicknessMode_auto
                    t = max(uMinThickness, (z - getViewZ(getThickness(coords))) * uThicknessFactor * texture2D(tColor, coords).a);
                #else
                    t = uThickness;
                #endif
            }

            if (rayHitDepthDifference < max(t, stepZ)) {
                if (uRefineSteps == 0) {
                    return coords;
                } else {
                    return binarySearch(dir, hitPos);
                }
            }
        }
    }

    missed = true;

    return coords;
}

//

void trace(in vec3 rayPos, in vec3 rayDir, inout RayHitInfo hitInfo) {
    vec3 hitPos = vec3(rayPos);
    bool missed;
    vec2 coords;
    coords = rayMarch(rayDir, 0.0, hitPos, missed);

    hitInfo.missed = missed;
    hitInfo.position = hitPos;
    hitInfo.normal = -texture2D(tNormal, coords).rgb;
    hitInfo.color = texture2D(tColor, coords).rgb;
    hitInfo.emissive = texture2D(tColor, coords).rgb * texture2D(tNormal, coords).a * 2.0;

    float depth = getDepth(coords);
    if (isBackground(depth)) {
        hitInfo.emissive = vec3(0.0);
    }
}

vec3 viewPos;

vec3 colorForRay(in vec3 startRayPos, in vec3 startRayDir, inout StateType rngState) {
    vec3 ret = vec3(0.0, 0.0, 0.0);

    vec3 throughput = vec3(1.0, 1.0, 1.0);
    vec3 rayPos = startRayPos;
    vec3 rayDir = startRayDir;

    RayHitInfo hitInfo;
    RayHitInfo prevHitInfo;

    for (int bounceIndex = 0; bounceIndex <= dBounces; ++bounceIndex) {
        // shoot a ray out into the world
        if (bounceIndex == 0) {
            vec2 coords = gl_FragCoord.xy / uTexSize;
            float depth = getDepth(coords);

            hitInfo.missed = false;
            hitInfo.position = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
            hitInfo.normal = -texture2D(tNormal, coords).rgb;
            hitInfo.color = texture2D(tShaded, coords).rgb;
            hitInfo.emissive = texture2D(tColor, coords).rgb * texture2D(tNormal, coords).a;

            // shadow
            #ifdef dShadowEnable
                #if dLightCount != 0
                    // attenuate by the fraction of unoccluded irradiance, weighting each
                    // light by its actual contribution so back-facing lights don't darken
                    vec3 directLight = uAmbientColor;
                    vec3 fullLight = uAmbientColor;
                    vec3 irradiance;
                    float ndotl;
                    bool missed;
                    vec3 hitPos;
                    #pragma unroll_loop_start
                    for (int i = 0; i < dLightCount; ++i) {
                        ndotl = saturate(dot(hitInfo.normal, -uLightDirection[i]));
                        irradiance = ndotl * uLightColor[i];
                        fullLight += irradiance;
                        if (ndotl > 0.0) {
                            missed = false;
                            hitPos = viewPos + hitInfo.normal * RayPosNormalNudge;
                            hitPos += -uLightDirection[i] * (randomFloat(rngState));
                            rayMarch(-uLightDirection[i] + randomUnitVector(rngState) * uShadowSoftness, uShadowThickness, hitPos, missed);
                            if (missed) directLight += irradiance;
                        }
                    }
                    #pragma unroll_loop_end
                    hitInfo.color *= directLight / max(fullLight, vec3(0.0001));
                #endif
            #endif

            if (hitInfo.normal == vec3(0.0)) {
                hitInfo.missed = true;
            }
        } else {
            prevHitInfo = hitInfo;
            trace(rayPos, rayDir, hitInfo);
        }

        // if the ray missed, we are done
        if (hitInfo.missed) {
            vec3 escapeColor = prevHitInfo.color;
            if (bounceIndex > 1) {
                vec3 accIrradiance = uAmbientColor;
                #if dLightCount != 0
                    #pragma unroll_loop_start
                    for (int i = 0; i < dLightCount; ++i) {
                        accIrradiance += saturate(dot(prevHitInfo.normal, -uLightDirection[i])) * uLightColor[i];
                    }
                    #pragma unroll_loop_end
                #endif
                escapeColor = min(prevHitInfo.color * accIrradiance, 0.99) * uExposure;
            }
            ret += escapeColor * throughput;
            break;
        }

        // add emissive light
        ret += hitInfo.emissive * throughput;

        // update the ray position
        rayPos = hitInfo.position + hitInfo.normal * RayPosNormalNudge;

        // new ray direction from normal oriented cosine weighted hemisphere sample
        rayDir = normalize(hitInfo.normal + randomUnitVector(rngState));

        if (bounceIndex == 0) {
            continue;
        }

        // update the colorMultiplier.
        throughput *= hitInfo.color;

        // Russian Roulette
        // As the throughput gets smaller, the ray is more likely to get terminated early.
        // Survivors have their value boosted to make up for fewer samples being in the average.
        {
            float p = max(throughput.r, max(throughput.g, throughput.b));
            if (randomFloat(rngState) > p)
                break;

            // Add the energy we 'lose' by randomly terminating paths
            throughput *= 1.0 / p;
        }
    }

    // return pixel color
    return ret;
}

void main() {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    float depth = getDepth(coords);

    if (isBackground(depth)) {
        gl_FragColor = texture2D(tColor, coords);
        return;
    }

    #if __VERSION__ == 100
        float rngState = 26699.0;
    #else
        // initialize a random number state based on gl_FragCoord and uFrameNo
        uint rngState = uint(uint(gl_FragCoord.x) * 1973u + uint(gl_FragCoord.y) * 9277u + uint(uFrameNo) * 26699u) | 1u;
    #endif

    vec3 cameraPos = vec3(0.0, 0.0, 0.0);
    viewPos = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 rayDir = normalize(viewPos);

    // raytrace for this pixel
    vec3 color = vec3(0.0, 0.0, 0.0);
    for (int index = 0; index < int(uRendersPerFrame); ++index) {
        color += colorForRay(cameraPos, rayDir, rngState) / float(uRendersPerFrame);
    }

    // average the frames together
    vec4 lastFrameColor = texture2D(tAccumulate, coords);
    float blend = (uFrameNo < 1 || lastFrameColor.a == 0.0) ? 1.0 : 1.0 / (1.0 + (1.0 / lastFrameColor.a));
    color = mix(lastFrameColor.rgb, color, blend);

    // show the result
    gl_FragColor = vec4(color, blend);
}
`;var Pu=`
precision highp float;
precision highp int;

${z}
${ke}
${ct}
${Te}

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
    #ifdef dOverpaint
        #if defined(dOverpaintType_texture)
            varying vec4 vOverpaint;
        #endif
    #endif
#endif

#if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
    #ifdef dEmissive
        #if defined(dEmissiveType_texture)
            varying float vEmissive;
        #endif
    #endif
#endif

#ifdef dTransparency
    #if defined(dTransparencyType_texture)
        varying float vTransparency;
    #endif
#endif

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

#if defined(dInterpolation_catmulrom) || defined(dInterpolation_mitchell) || defined(dInterpolation_bspline)
    #define dInterpolation_cubic
#endif

#if defined(dInterpolation_cubic)
    #if defined(dInterpolation_catmulrom) || defined(dInterpolation_mitchell)
        #if defined(dInterpolation_catmulrom)
            const float B = 0.0;
            const float C = 0.5;
        #elif defined(dInterpolation_mitchell)
            const float B = 0.333;
            const float C = 0.333;
        #endif

        float cubicFilter(float x){
            float f = x;
            if (f < 0.0) {
                f = -f;
            }
            if (f < 1.0) {
                return ((12.0 - 9.0 * B - 6.0 * C) * (f * f * f) +
                    (-18.0 + 12.0 * B + 6.0 * C) * (f * f) +
                    (6.0 - 2.0 * B)) / 6.0;
            }else if (f >= 1.0 && f < 2.0){
                return ((-B - 6.0 * C) * ( f * f * f)
                    + (6.0 * B + 30.0 * C) * (f * f) +
                    (-(12.0 * B) - 48.0 * C) * f +
                    8.0 * B + 24.0 * C) / 6.0;
            }else{
                return 0.0;
            }
        }
    #elif defined(dInterpolation_bspline)
        float cubicFilter(float x) {
            float f = x;
            if (f < 0.0) {
                f = -f;
            }
            if (f >= 0.0 && f <= 1.0){
                return (2.0 / 3.0) + (0.5) * (f * f * f) - (f * f);
            } else if (f > 1.0 && f <= 2.0) {
                return 1.0 / 6.0 * pow((2.0 - f), 3.0);
            }
            return 1.0;
        }
    #endif

    vec4 biCubic(sampler2D tex, vec2 texCoord) {
        vec2 texelSize = 1.0 / uImageTexDim;
        texCoord -= texelSize / 2.0;
        vec4 nSum = vec4(0.0);
        float nDenom = 0.0;
        vec2 cell = fract(texCoord * uImageTexDim);
        for (float m = -1.0; m <= 2.0; ++m) {
            for (float n = -1.0; n <= 2.0; ++n) {
                vec4 vecData = texture2D(tex, texCoord + texelSize * vec2(m, n));
                float c = abs(cubicFilter(m - cell.x) * cubicFilter(-n + cell.y));
                nSum += vecData * c;
                nDenom += c;
            }
        }
        return nSum / nDenom;
    }
#endif

void main() {
    if (uTrimType != 0 && getSignedDistance(vPosition, uTrimType, uTrimCenter, uTrimRotation, uTrimScale, uTrimTransform) > 0.0) discard;

    ${rt}
    ${ut}

    #if defined(dInterpolation_cubic)
        #ifdef dUsePalette
            vec4 material = texture2D(tImageTex, vUv);
            if (material.rgb != vec3(1.0)) {
                material = biCubic(tImageTex, vUv);
            }
        #else
            vec4 material = biCubic(tImageTex, vUv);
        #endif
    #else
        vec4 material = texture2D(tImageTex, vUv);
    #endif

    if (uIsoLevel >= 0.0) {
        if (texture2D(tValueTex, vUv).r < uIsoLevel) discard;

        material.a = uAlpha;
    } else {
        if (material.a == 0.0) discard;

        material.a *= uAlpha;
    }

    float fragmentDepth = gl_FragCoord.z;

    vec3 packedGroup = texture2D(tGroupTex, vUv).rgb;
    float group = packedGroup == vec3(0.0) ? -1.0 : unpackRGBToInt(packedGroup);

    // apply per-group transparency
    #if defined(dTransparency) && (defined(dRenderVariant_pick) || defined(dRenderVariant_color) || defined(dRenderVariant_emissive) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
        float transparency = 0.0;
        #if defined(dTransparencyType_texture)
            transparency = readFromTexture(tTransparency, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uTransparencyTexDim).r;
        #endif
        transparency *= uTransparencyStrength;

        float ta = 1.0 - transparency;
        if (transparency < 0.09) ta = 1.0; // hard cutoff looks better

        #if defined(dRenderVariant_pick)
            if (ta * uAlpha < uPickingAlphaThreshold)
                discard; // ignore so the element below can be picked
        #elif defined(dRenderVariant_emissive)
            if (ta < 1.0)
                discard; // emissive not supported with transparency
        #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
            material.a *= ta;
        #endif
    #endif

    if ((uRenderMask == MaskOpaque && material.a < 1.0) ||
        (uRenderMask == MaskTransparent && material.a == 1.0)
    ) {
        discard;
    }

    #if defined(dNeedsMarker)
        float marker = uMarker;
        if (group == -1.0) {
            marker = 0.0;
        } else if (uMarker == -1.0) {
            marker = readFromTexture(tMarker, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uMarkerTexDim).r;
            marker = floor(marker * 255.0 + 0.5); // rounding required to work on some cards on win
        }
    #endif

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_emissive)
        float emissive = uEmissive;
        if (group == -1.0) {
            emissive = 0.0;
        } else {
            #ifdef dEmissive
                #if defined(dEmissiveType_texture)
                    emissive += readFromTexture(tEmissive, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uEmissiveTexDim).r * uEmissiveStrength;
                #endif
            #endif
        }
    #endif

    #if defined(dRenderVariant_pick)
        if (group == -1.0) discard;

        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
            gl_FragData[1] = vec4(packIntToRGB(vInstance), 1.0);
            gl_FragData[2] = vec4(packIntToRGB(group), 1.0);
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            if (uPickType == 1) {
                gl_FragColor = vec4(packIntToRGB(float(uObjectId)), 1.0);
            } else if (uPickType == 2) {
                gl_FragColor = vec4(packIntToRGB(vInstance), 1.0);
            } else {
                gl_FragColor = vec4(packIntToRGB(group), 1.0);
            }
        #endif
    #elif defined(dRenderVariant_depth)
        if (uRenderMask == MaskOpaque) {
            gl_FragColor = packDepthToRGBA(fragmentDepth);
        } else if (uRenderMask == MaskTransparent) {
            gl_FragColor = packDepthWithAlphaToRGBA(fragmentDepth, material.a);
        }
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = vec4(emissive);
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        #ifdef dUsePalette
            if (material.rgb == vec3(1.0)) {
                material.rgb = uPaletteDefault;
            } else {
                float v = ((material.r * 256.0 * 256.0 * 255.0 + material.g * 256.0 * 255.0 + material.b * 255.0) - 1.0) / PALETTE_SCALE;
                material.rgb = texture2D(tPalette, vec2(v, 0.0)).rgb;
            }
        #endif

        // mix material with overpaint
        #if defined(dOverpaint)
            vec4 overpaint = vec4(0.0);
            if (group != -1.0) {
                #if defined(dOverpaintType_texture)
                    overpaint = readFromTexture(tOverpaint, (uInstanceGranularity ? vInstance : vInstance * float(uGroupCount) + group), uOverpaintTexDim);
                #endif
                overpaint *= uOverpaintStrength;
            }
            material.rgb = mix(material.rgb, overpaint.rgb, overpaint.a);
        #endif

        gl_FragColor = material;
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Do=`
#ifdef dGeometryType_image
    mat4 transform = aTransform;
#else
    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
#endif
mat4 model = uModel * transform;
mat4 modelView = uView * model;
#ifdef dGeometryType_textureMesh
    vec3 position = readFromTexture(tPosition, vertexId, uGeoTexDim).xyz;
#else
    vec3 position = aPosition;
#endif
#ifndef dGeometryType_image
    position = applyWiggle(position, group, aInstance);
#endif
vec4 position4 = vec4(position, 1.0);
// for accessing tColorGrid in vert shader and for clipping in frag shader
vModelPosition = (model * position4).xyz;
vec4 mvPosition = modelView * position4;
vViewPosition = mvPosition.xyz;
gl_Position = uProjection * mvPosition;
`;var Du=`
precision highp float;
precision highp int;

${z}
${mt}

varying vec2 vUv;
varying float vInstance;
varying vec3 vPosition;

void main() {
    int vertexId = VertexID;

    ${Do}

    vUv = aUv;
    vInstance = aInstance;
    vPosition = aPosition;
}
`;var _u=`
precision highp float;
precision highp int;

${z}
${ct}
${Rt}
${Te}

void main(){
    ${rt}
    ${ut}

    float fragmentDepth = gl_FragCoord.z;
    ${Pt}
    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Eu=`
precision highp float;
precision highp int;

${z}
${ke}
${mt}
${_t}
${Te}
${Yt}

void trimSegment(const in vec4 start, inout vec4 end) {
    // trim end segment so it terminates between the camera plane and the near plane
    // conservative estimate of the near plane, from the z row of the GL projection (the sign of the reversed rows
    // cancels in the ratio)
    #ifdef clipZeroToOne
        float a = 2.0 * uProjection[2][2] + 1.0;
        float b = 2.0 * uProjection[3][2];
    #else
        float a = uProjection[2][2];  // 3rd entry in 3rd column
        float b = uProjection[3][2];  // 3rd entry in 4th column
    #endif
    float nearEstimate = -0.5 * b / a;
    float alpha = (nearEstimate - start.z) / (end.z - start.z);
    end.xyz = mix(start.xyz, end.xyz, alpha);
}

void main(){
    float aspect = uViewport.z / uViewport.w;
    int vertexId = VertexID;

    ${yr}
    ${Et}
    ${At}
    ${wt}
    ${Kt}

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    vec3 wigStart = applyWiggle(aStart, group, aInstance);
    vec3 wigEnd = applyWiggle(aEnd, group, aInstance);
    mat4 modelView = uView * uModel * transform;

    // camera space
    vec4 start = modelView * vec4(wigStart, 1.0);
    vec4 end = modelView * vec4(wigEnd, 1.0);

    // assign position
    vec4 position4 = vec4((aMapping.y < 0.5) ? wigStart : wigEnd, 1.0);
    vViewPosition = (aMapping.y < 0.5) ? start.xyz : end.xyz;

    vModelPosition = (uModel * transform * position4).xyz; // for clipping in frag shader

    // special case for perspective projection, and segments that terminate either in, or behind, the camera plane
    // clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
    // but we need to perform ndc-space calculations in the shader, so we must address this issue directly
    // perhaps there is a more elegant solution -- WestLangley
    bool perspective = (uProjection[2][3] == -1.0); // 4th entry in the 3rd column
    if (perspective) {
        if (start.z < 0.0 && end.z >= 0.0) {
            trimSegment(start, end);
        } else if (end.z < 0.0 && start.z >= 0.0) {
            trimSegment(end, start);
        }
    }

    // clip space
    vec4 clipStart = uProjection * start;
    vec4 clipEnd = uProjection * end;

    // ndc space
    vec2 ndcStart = clipStart.xy / clipStart.w;
    vec2 ndcEnd = clipEnd.xy / clipEnd.w;

    // direction
    vec2 dir = ndcEnd - ndcStart;

    // account for clip-space aspect ratio
    dir.x *= aspect;
    dir = normalize(dir);

    // perpendicular to dir
    vec2 offset = vec2(dir.y, - dir.x);

    // undo aspect ratio adjustment
    dir.x /= aspect;
    offset.x /= aspect;

    // sign flip
    if (aMapping.x < 0.0) offset *= -1.0;

    // calculate linewidth
    float linewidth;
    #ifdef dLineSizeAttenuation
        linewidth = size * uPixelRatio * ((uViewport.w / 2.0) / -start.z) * 5.0;
    #else
        linewidth = size * uPixelRatio;
    #endif
    linewidth = max(1.0, linewidth);

    // adjust for linewidth
    offset *= linewidth;

    // adjust for clip-space to screen-space conversion
    offset /= uViewport.w;

    // select end
    vec4 clip = (aMapping.y < 0.5) ? clipStart : clipEnd;

    // back to clip space
    offset *= clip.w;
    clip.xy += offset;
    gl_Position = clip;

    ${Lt}
}
`;var Au=`
precision highp float;
precision highp int;
precision highp sampler2D;

${z}

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord);
}

float voxelValue(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / uGridTexDim.xy;
    vec3 posXYZ = index3dFrom2d(uv);

    // get MC case as the sum of corners that are below the given iso level
    float c = step(voxelValue(posXYZ), uIsoValue)
        + 2. * step(voxelValue(posXYZ + c1), uIsoValue)
        + 4. * step(voxelValue(posXYZ + c2), uIsoValue)
        + 8. * step(voxelValue(posXYZ + c3), uIsoValue)
        + 16. * step(voxelValue(posXYZ + c4), uIsoValue)
        + 32. * step(voxelValue(posXYZ + c5), uIsoValue)
        + 64. * step(voxelValue(posXYZ + c6), uIsoValue)
        + 128. * step(voxelValue(posXYZ + c7), uIsoValue);
    c *= step(c, 254.);

    // handle out of bounds positions
    posXYZ += 1.0;
    posXYZ.xy += 1.0; // pixel padding (usually ok even if the texture has no padding)
    if (posXYZ.x >= uGridDim.x || posXYZ.y >= uGridDim.y || posXYZ.z >= uGridDim.z)
        c = 0.0;

    // get total triangles to generate for calculated MC case from triCount texture
    float totalTrianglesToGenerate = texture2D(tTriCount, vec2(intMod(c, 16.), floor(c / 16.)) / 16.).r;
    gl_FragColor = vec4(vec3(totalTrianglesToGenerate * 3.0), c / 255.0);
}
`;var wu=`
precision highp float;
precision highp int;
precision highp sampler2D;

${z}

// cube corners (excluding origin)
const vec3 c1 = vec3(1., 0., 0.);
const vec3 c2 = vec3(1., 1., 0.);
const vec3 c3 = vec3(0., 1., 0.);
const vec3 c4 = vec3(0., 0., 1.);
const vec3 c5 = vec3(1., 0., 1.);
const vec3 c6 = vec3(1., 1., 1.);
const vec3 c7 = vec3(0., 1., 1.);

vec3 index3dFrom2d(vec2 coord) {
    vec2 gridTexPos = coord * uGridTexDim.xy;
    vec2 columnRow = ivec2Div(gridTexPos, uGridDim.xy);
    vec2 posXY = gridTexPos - columnRow * uGridDim.xy;
    float posZ = columnRow.y * intDiv(uGridTexDim.x, uGridDim.x) + columnRow.x;
    return vec3(posXY, posZ);
}

vec4 texture3dFrom2dNearest(sampler2D tex, vec3 pos, vec3 gridDim, vec2 texDim) {
    float zSlice = floor(pos.z * gridDim.z + 0.5); // round to nearest z-slice
    float column = intDiv(intMod(zSlice * gridDim.x, texDim.x), gridDim.x);
    float row = intDiv(zSlice * gridDim.x, texDim.x);
    vec2 coord = (vec2(column * gridDim.x, row * gridDim.y) + (pos.xy * gridDim.xy)) / (texDim / uScale);
    return texture2D(tex, coord + 0.5 / (texDim / uScale));
}

vec4 voxel(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(1.0));
    return texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
}

float voxelValuePadded(vec3 pos) {
    pos = min(max(vec3(0.0), pos), uGridDim - vec3(vec2(2.0), 1.0)); // remove xy padding
    vec4 v = texture3dFrom2dNearest(tVolumeData, pos / uGridDim, uGridDim, uGridTexDim.xy);
    #ifdef dValueChannel_red
        return v.r;
    #else
        return v.a;
    #endif
}

int idot2(const in ivec2 a, const in ivec2 b) {
    return a.x * b.x + a.y * b.y;
}

int idot4(const in ivec4 a, const in ivec4 b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}

#if __VERSION__ == 100
    int pyramidVoxel(vec2 pos) {
        return int(unpackRGBToInt(texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).rgb));
    }
#else
    int pyramidVoxel(vec2 pos) {
        return texture2D(tActiveVoxelsPyramid, pos / (vec2(1.0, 0.5) * uSize)).r;
    }
#endif

vec4 baseVoxel(vec2 pos) {
    return texture2D(tActiveVoxelsBase, pos / uSize);
}

vec4 getGroup(const in vec3 p) {
    // note that we swap x and z because the texture is flipped around y
    #if defined(dAxisOrder_012)
        float group = p.z + p.y * uGridDataDim.z + p.x * uGridDataDim.z * uGridDataDim.y; // 210
    #elif defined(dAxisOrder_021)
        float group = p.y + p.z * uGridDataDim.y + p.x * uGridDataDim.y * uGridDataDim.z; // 120
    #elif defined(dAxisOrder_102)
        float group = p.z + p.x * uGridDataDim.z + p.y * uGridDataDim.z * uGridDataDim.x; // 201
    #elif defined(dAxisOrder_120)
        float group = p.x + p.z * uGridDataDim.x + p.y * uGridDataDim.x * uGridDataDim.z; // 021
    #elif defined(dAxisOrder_201)
        float group = p.y + p.x * uGridDataDim.y + p.z * uGridDataDim.y * uGridDataDim.x; // 102
    #elif defined(dAxisOrder_210)
        float group = p.x + p.y * uGridDataDim.x + p.z * uGridDataDim.x * uGridDataDim.y; // 012
    #endif
    return vec4(group > 16777215.5 ? vec3(1.0) : packIntToRGB(group), 1.0);
}

void main(void) {
    // get 1D index
    int vI = int(gl_FragCoord.x) + int(gl_FragCoord.y) * int(uSize);

    // ignore 1D indices outside of the grid
    if(vI >= int(uCount)) discard;

    ivec2 offset = ivec2(int(uSize) - 2, 0);

    int start = 0;
    ivec4 starts = ivec4(0);
    ivec4 ends = ivec4(0);
    int diff = 2;
    ivec4 m = ivec4(0);
    ivec2 position = ivec2(0);
    ivec4 vI4 = ivec4(vI);

    ivec2 relativePosition = ivec2(0);
    int end = 0;
    ivec2 pos1 = ivec2(0);
    ivec2 pos2 = ivec2(0);
    ivec2 pos3 = ivec2(0);
    ivec2 pos4 = ivec2(0);
    ivec3 vI3 = ivec3(vI);
    ivec3 mask = ivec3(0);

    // traverse the different levels of the pyramid
    for(int i = 1; i < 14; i++) {
        if(float(i) >= uLevels) break;

        offset.x -= diff;
        diff *= 2;
        relativePosition = position + offset;

        end = start + pyramidVoxel(vec2(relativePosition));
        pos1 = ivec2(relativePosition);
        starts.x = start;
        ends.x = end;
        pos2 = ivec2(relativePosition + ivec2(1, 0));
        starts.y = ends.x;
        ends.y = ends.x + pyramidVoxel(vec2(pos2));
        pos3 = relativePosition + ivec2(0, 1);
        starts.z = ends.y;
        ends.z = ends.y + pyramidVoxel(vec2(pos3));
        pos4 = relativePosition + ivec2(1, 1);
        starts.w = ends.z;
        mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
        m = ivec4(mask, 1 - int(any(bvec3(mask))));

        relativePosition = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;
        start = idot4(m, starts);
        position = 2 * (relativePosition - offset);
    }

    end = start + int(baseVoxel(vec2(position)).r * 255.0);
    pos1 = position;
    starts.x = start;
    ends.x = end;
    pos2 = position + ivec2(1, 0);
    starts.y = ends.x;
    ends.y = ends.x + int(baseVoxel(vec2(pos2)).r * 255.0);
    pos3 = position + ivec2(0, 1);
    starts.z = ends.y;
    ends.z = ends.y + int(baseVoxel(vec2(pos3)).r * 255.0);
    pos4 = position + ivec2(1, 1);
    starts.w = ends.z;
    mask = ivec3(greaterThanEqual(vI3, starts.rgb)) * ivec3(lessThan(vI3, ends.rgb));
    m = ivec4(mask, 1 - int(any(bvec3(mask))));
    position = m.x * pos1 + m.y * pos2 + m.z * pos3 + m.w * pos4;

    vec2 coord2d = (vec2(position) / uSize) / uScale;
    vec3 coord3d = floor(index3dFrom2d(coord2d) + 0.5);

    float edgeIndex = floor(baseVoxel(vec2(position)).a * 255.0 + 0.5);

    // current vertex for the up to 15 MC cases
    int currentVertex = vI - idot4(m, starts);

    // ensure winding-order is the same for negative and positive iso-levels
    if (uInvert) {
        int v = imod(currentVertex + 1, 3);
        if (v == 1) currentVertex += 2;
        else if (v == 0) currentVertex -= 2;
    }

    // get index into triIndices table
    int mcIndex = 16 * int(edgeIndex) + currentVertex;
    vec4 mcData = texture2D(tTriIndices, vec2(imod(mcIndex, 64), mcIndex / 64) / 64.);

    // bit mask to avoid conditionals (see comment below) for getting MC case corner
    vec4 m0 = vec4(floor(mcData.r * 255.0 + 0.5));

    // get edge value masks
    vec4 m1 = vec4(equal(m0, vec4(0., 1., 2., 3.)));
    vec4 m2 = vec4(equal(m0, vec4(4., 5., 6., 7.)));
    vec4 m3 = vec4(equal(m0, vec4(8., 9., 10., 11.)));

    // apply bit masks
    vec3 b0 = coord3d +
                m1.y * c1 +
                m1.z * c2 +
                m1.w * c3 +
                m2.x * c4 +
                m2.y * c5 +
                m2.z * c6 +
                m2.w * c7 +
                m3.y * c1 +
                m3.z * c2 +
                m3.w * c3;
    vec3 b1 = coord3d +
                m1.x * c1 +
                m1.y * c2 +
                m1.z * c3 +
                m2.x * c5 +
                m2.y * c6 +
                m2.z * c7 +
                m2.w * c4 +
                m3.x * c4 +
                m3.y * c5 +
                m3.z * c6 +
                m3.w * c7;

    // the conditionals that are avoided by above bitmasks
    // vec3 b0 = coord3d;
    // vec3 b1 = coord3d;
    // if (mcIndex == 0.0) {
    //     b1 += c1;
    // } else if (mcIndex == 1.0) {
    //     b0 += c1; b1 += c2;
    // } else if (mcIndex == 2.0) {
    //     b0 += c2; b1 += c3;
    // } else if (mcIndex == 3.0) {
    //     b0 += c3;
    // } else if (mcIndex == 4.0) {
    //     b0 += c4; b1 += c5;
    // } else if (mcIndex == 5.0) {
    //     b0 += c5; b1 += c6;
    // } else if (mcIndex == 6.0) {
    //     b0 += c6; b1 += c7;
    // } else if (mcIndex == 7.0) {
    //     b0 += c7; b1 += c4;
    // } else if (mcIndex == 8.0) {
    //     b1 += c4;
    // } else if (mcIndex == 9.0) {
    //     b0 += c1; b1 += c5;
    // } else if (mcIndex == 10.0) {
    //     b0 += c2; b1 += c6;
    // } else if (mcIndex == 11.0) {
    //     b0 += c3; b1 += c7;
    // }
    // b0 = floor(b0 + 0.5);
    // b1 = floor(b1 + 0.5);

    vec4 d0 = voxel(b0);
    vec4 d1 = voxel(b1);

    #ifdef dValueChannel_red
        float v0 = d0.r;
        float v1 = d1.r;
    #else
        float v0 = d0.a;
        float v1 = d1.a;
    #endif

    float t = (uIsoValue - v0) / (v0 - v1);
    gl_FragData[0].xyz = (uGridTransform * vec4(b0 + t * (b0 - b1), 1.0)).xyz;

    // group id
    #if __VERSION__ == 100 || defined(dConstantGroup)
        // webgl1 does not support 'flat' interpolation (i.e. no interpolation)
        // ensure a constant group id per triangle as needed
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(voxel(coord3d).rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(coord3d);
        #endif
    #else
        #ifdef dPackedGroup
            gl_FragData[1] = vec4(t < 0.5 ? d0.rgb : d1.rgb, 1.0);
        #else
            gl_FragData[1] = getGroup(t < 0.5 ? b0 : b1);
        #endif
    #endif

    // normals from gradients
    vec3 n0 = -normalize(vec3(
        voxelValuePadded(b0 - c1) - voxelValuePadded(b0 + c1),
        voxelValuePadded(b0 - c3) - voxelValuePadded(b0 + c3),
        voxelValuePadded(b0 - c4) - voxelValuePadded(b0 + c4)
    ));
    vec3 n1 = -normalize(vec3(
        voxelValuePadded(b1 - c1) - voxelValuePadded(b1 + c1),
        voxelValuePadded(b1 - c3) - voxelValuePadded(b1 + c3),
        voxelValuePadded(b1 - c4) - voxelValuePadded(b1 + c4)
    ));
    gl_FragData[2].xyz = -vec3(
        n0.x + t * (n0.x - n1.x),
        n0.y + t * (n0.y - n1.y),
        n0.z + t * (n0.z - n1.z)
    );

    // ensure normal-direction is the same for negative and positive iso-levels
    if (uInvert) {
        gl_FragData[2].xyz *= -1.0;
    }

    // apply normal matrix
    gl_FragData[2].xyz = uGridTransformAdjoint * gl_FragData[2].xyz;
}
`;var Lu=`
precision highp float;

${z}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    // depth of the front-most unmarked fragment, cleared to 0.0 (the far plane) in every channel where there is none
    vec4 packedDepth = texture2D(tDepthTexture, coords);
    if (packedDepth == vec4(0.0))
        discard;

    // mask values are 0.0 where marked, green is 0.0 where the marked fragment is in front
    vec4 m = texture2D(tMaskTexture, coords);
    if (m.r < 0.5 && m.g < 0.5)
        discard;

    vec2 depthWithAlpha = unpackRGBAToDepthWithAlpha(packedDepth);
    float viewZ = depthToViewZ(uIsOrtho, depthWithAlpha.x, uNear, uFar);
    float fogAlpha = 1.0 - smoothstep(uFogNear, uFogFar, abs(viewZ));
    // after antialiasing: r = coverage * opacity * fogAlpha, g = coverage * opacity
    gl_FragColor = vec4(fogAlpha * depthWithAlpha.y, depthWithAlpha.y, 0.0, 1.0);
}
`;var Iu=`
precision highp float;

// the mask is antialiased, so the coverage can be taken from a single texel
vec4 getMask(vec2 coords) {
    return texture2D(tMaskTexture, coords);
}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;
    vec4 offset = vec4(uEdgeScale, 0.0, 0.0, uEdgeScale) * vec4(uTexSizeInv, uTexSizeInv);

    vec4 m1 = getMask(coords + offset.xy);
    vec4 m2 = getMask(coords - offset.xy);
    vec4 m3 = getMask(coords + offset.yw);
    vec4 m4 = getMask(coords - offset.yw);

    float edge = max(abs(m1.r - m2.r), abs(m3.r - m4.r));
    if (edge <= 0.0)
        discard;

    // the sample covering the most of the marked region, mask values are 0.0 where marked
    vec4 mx = m1.r < m2.r ? m1 : m2;
    vec4 my = m3.r < m4.r ? m3 : m4;
    vec4 m = mx.r < my.r ? mx : my;

    // the samples average marked and unmarked texels and unmarked ones are 1.0 in every channel,
    // so the values of the marked texels can be recovered from how much they are covered
    vec3 marked = clamp((m.gba - m.r) / max(1.0 - m.r, 0.001), 0.0, 1.0);

    float visibility = marked.x > 0.5 ? 1.0 : 0.0;
    float mask = texture2D(tMaskTexture, coords).r;
    float marker = marked.y > 0.5 ? 1.0 : 0.0;
    float fogAlpha = marked.z;
    // premultiplied, so that a blurred sample of this can be decoded the same way
    gl_FragColor = vec4(visibility, mask, marker, 1.0) * (edge * fogAlpha);
}
`;var Ou=`
precision highp float;

${z}

// occlusion at \`coords\`, depth-aware upsampled from a lower SSAO resolution with the scene's opaque depth
float getOcclusion(const in vec2 coords) {
    #ifdef dOcclusionUpsample
        #ifdef dPackedDepth
            float depth = unpackRGBAToDepth(texture2D(tDepth, coords));
        #else
            float depth = texture2D(tDepth, coords).r;
        #endif
        float viewZ = depthToViewZ(uIsOrtho, depth, uNear, uFar);
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords + uOcclusionOffset, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords + uOcclusionOffset));
    #endif
}

// mixes toward the SSAO occlusion color, like the postprocessing pass
vec3 applyOcclusion(const in vec3 color, const in float occlusion, const in float fogAlpha) {
    vec3 occlusionColor = uTransparentBackground ? uOcclusionColor * fogAlpha : mix(uFogColor, uOcclusionColor, fogAlpha);
    return mix(occlusionColor, color, occlusion);
}

// the path traced occlusion and shadows, i.e. the base image relative to the direct shading
float getTracedShading(const in float baseLuminance, const in float shadedLuminance, const in float fogAlpha) {
    float a = max(fogAlpha, 0.001);
    // undo the fog of the base image
    float l = uTransparentBackground ? baseLuminance / a : (baseLuminance - luminance(uFogColor) * (1.0 - fogAlpha)) / a;
    return clamp(l / max(shadedLuminance, 0.001), 0.0, 1.0);
}

void main() {
    vec2 coords = gl_FragCoord.xy * uTexSizeInv;

    // coverage of the visible unmarked geometry, see dim.frag
    float dimAlpha = 0.0;
    float dimFogAlpha = 1.0;
    if (uDimStrength > 0.0) {
        vec4 d = texture2D(tDimTexture, coords);
        dimAlpha = d.r * uDimStrength;
        dimFogAlpha = d.r / max(d.g, 0.001);
    }

    // solid fill covering the interior of marked regions, sampled directly from the mask
    vec3 fillRgb = vec3(0.0);
    float fillAlpha = 0.0;
    float fillFogAlpha = 1.0;
    if (uHighlightFillStrength > 0.0 || uSelectFillStrength > 0.0) {
        vec4 m = texture2D(tMaskTexture, coords);
        float coverage = 1.0 - m.r;
        if (coverage > 0.0) {
            vec3 marked = clamp((m.gba - m.r) / max(coverage, 0.001), 0.0, 1.0);
            bool isHighlight = marked.y > 0.5;
            fillRgb = isHighlight ? uHighlightFillColor : uSelectFillColor;
            float fillStrength = isHighlight ? uHighlightFillStrength : uSelectFillStrength;
            fillFogAlpha = marked.z;
            // marked.x: 1.0 = hidden, 0.0 = visible; without depth test every marked texel reads as hidden
            float visibility = uDepthTest && marked.x > 0.5 ? 0.0 : 1.0;
            fillAlpha = coverage * fillStrength * visibility * fillFogAlpha * unpackMarkingOpacity(marked.x);
        }
    }

    // keep the shading of the image, so that blending toward the color does not wash it out
    vec3 dimRgb = uDimColor;
    if (dimAlpha > 0.0 || fillAlpha > 0.0) {
        #if defined(dMarkingShading_ssao)
            float occlusion = getOcclusion(coords);
            dimRgb = applyOcclusion(dimRgb, occlusion, dimFogAlpha);
            fillRgb = applyOcclusion(fillRgb, occlusion, fillFogAlpha);
        #elif defined(dMarkingShading_traced)
            float baseLuminance = luminance(texture2D(tBase, coords).rgb);
            float shadedLuminance = luminance(texture2D(tShaded, coords).rgb);
            dimRgb *= getTracedShading(baseLuminance, shadedLuminance, dimFogAlpha);
            fillRgb *= getTracedShading(baseLuminance, shadedLuminance, fillFogAlpha);
        #endif
    }

    vec4 e = texture2D(tEdgeTexture, coords);
    vec3 edgeRgb = vec3(0.0);
    float edgeAlpha = 0.0;
    if (e.a > 0.0) {
        // the edge is stored premultiplied, see edge.frag
        vec3 edgeValue = e.rgb / e.a;
        bool isHighlight = edgeValue.z > 0.5;
        edgeRgb = isHighlight ? uHighlightEdgeColor : uSelectEdgeColor;
        edgeRgb = edgeValue.y > 0.5 ? edgeRgb : edgeRgb * uInnerEdgeFactor;
        edgeAlpha = (edgeValue.x > 0.5 ? uGhostEdgeStrength : 1.0) * e.a;
        edgeAlpha *= isHighlight ? uHighlightEdgeStrength : uSelectEdgeStrength;
    }

    // premultiplied, so that partially covered pixels are not weighted by alpha twice; dim, fill, edge from bottom to top
    vec3 rgb = fillRgb * fillAlpha + dimRgb * dimAlpha * (1.0 - fillAlpha);
    float alpha = fillAlpha + dimAlpha * (1.0 - fillAlpha);
    gl_FragColor.rgb = edgeRgb * edgeAlpha + rgb * (1.0 - edgeAlpha);
    gl_FragColor.a = edgeAlpha + alpha * (1.0 - edgeAlpha);
}
`;var Fu=`
varying vec3 vNormal;
`;var Mu=`
precision highp float;
precision highp int;

#define bumpEnabled

${z}
${ct}
${Rt}
${hr}
${Fu}
${Te}

void main() {
    #ifdef dSolidInterior
        float fragmentDepth = gl_FragCoord.z;
        bool capPass = uSolidInteriorPass != 0;
        vec3 viewPosition = vViewPosition;
        vec3 modelPosition = vModelPosition;
        #ifdef enabledFragDepth
            if (capPass) {
                float nearZ = -uNear * 1.0001;
                vec3 nearPosition = vec3(mix(vViewPosition.xy * (nearZ / vViewPosition.z), vViewPosition.xy, uIsOrtho), nearZ);
                float s = 0.0;
                #if dClipObjectCount != 0
                    if (uSolidInteriorClip >= 0) {
                        // exempt parts are not cut by this clip object, so they neither count nor fill
                        if (clipIgnored(uSolidInteriorClip)) discard;
                        s = clipCapExit((uInvView * vec4(nearPosition, 1.0)).xyz / uModelScale, vModelPosition / uModelScale, uDepthBack);
                        if (s < 0.0 || s > 1.0) discard;
                    }
                #endif
                if (uSolidInteriorPass == 2) {
                    gl_FragColor = vec4(0.0);
                    gl_FragDepthEXT = fragmentDepth;
                    return;
                }
                viewPosition = mix(nearPosition, vViewPosition, s);
                modelPosition = (uInvView * vec4(viewPosition, 1.0)).xyz;
                fragmentDepth = mix(calcDepth(viewPosition), gl_FragCoord.z, 0.0001);
                // beyond the far plane (depth is reversed)
                if (fragmentDepth < 0.0) discard;
            }
            gl_FragDepthEXT = fragmentDepth;
        #endif
        #if defined(dClipVariant_pixel) && dClipObjectCount != 0
            if (clipTest(modelPosition / uModelScale)) discard;
        #endif
        vec3 vViewPosition = viewPosition;
        vec3 vModelPosition = modelPosition;
        // after the mark pass returned (it needs every face) and at the cap position
        ${rt}
    #else
        ${rt}
        ${ut}
        float fragmentDepth = gl_FragCoord.z;
    #endif

    interior = !gl_FrontFacing;
    #ifdef dSolidInterior
        // the fill may draw front faces (reflected instances), a cap is always interior
        #if defined(dRenderVariant_depth)
            // a cap is the visible surface, so the depth passes must not discard it as interior
            if (capPass) interior = false;
        #else
            if (capPass) interior = true;
        #endif
    #endif

    #ifdef dNeedsNormal
        #if defined(dFlatShaded)
            vec3 fdx = dFdx(vViewPosition);
            vec3 fdy = dFdy(vViewPosition);
            vec3 normal = -normalize(cross(fdx,fdy));
        #else
            vec3 normal = -normalize(vNormal);
            if (uDoubleSided) normal *= float(gl_FrontFacing) * 2.0 - 1.0;
        #endif

        #if defined(dFlipSided)
            normal *= -1.0;
        #endif

        #ifdef dSolidInterior
            if (capPass) {
                normal = vec3(0.0, 0.0, -1.0);
                #if dClipObjectCount != 0
                    if (uSolidInteriorClip >= 0) normal = normalize(clipCapNormal(vModelPosition / uModelScale) * mat3(uInvView));
                #endif
            }
        #endif
    #endif

    ${Pt}
    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            #ifdef dSolidInterior
                // 16777214 is PickingId.Null, the cap picks the whole instance
                gl_FragData[2] = capPass ? vec4(packIntToRGB(16777214.0), 1.0) : vGroup;
            #else
                gl_FragData[2] = vGroup;
            #endif
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
            #ifdef dSolidInterior
                if (capPass && uPickType == 3) gl_FragColor = vec4(packIntToRGB(16777214.0), 1.0);
            #endif
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${qr}
        ${gr}
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Bu=`
precision highp float;
precision highp int;
precision highp sampler2D;

${z}
${ke}
${mt}
${_t}
${Te}
${Yt}
${Po}

varying vec3 vNormal;

void main(){
    int vertexId = VertexID;

    ${yr}
    ${At}
    ${wt}
    ${Do}

    #ifdef dSolidInterior
        if (uSolidInteriorPass != 0) {
            // in front of the far plane (clip z is reversed)
            #ifdef clipZeroToOne
                gl_Position.z = max(gl_Position.z, gl_Position.w * 0.00005);
            #else
                gl_Position.z = max(gl_Position.z, -gl_Position.w * 0.9999);
            #endif
        }
    #endif

    ${Et}
    ${Lt}

    #ifdef dGeometryType_textureMesh
        vec3 normal = readFromTexture(tNormal, vertexId, uGeoTexDim).xyz;
    #else
        vec3 normal = aNormal;
    #endif
    mat3 normalMatrix = adjoint(modelView);
    vec3 transformedNormal = normalize(normalMatrix * normalize(normal));
    #if defined(dFlipSided)
        if (!uDoubleSided) { // TODO checking uDoubleSided should not be required, ASR
            transformedNormal = -transformedNormal;
        }
    #endif
    vNormal = transformedNormal;
}
`;var Vu=`
precision highp float;
precision highp int;

${z}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

vec2 getDepthTransparentWithAlpha(const in vec2 coords) {
    #ifdef dTransparentOutline
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
    #else
        return vec2(0.0, 0.0);
    #endif
}

// depth is reversed: the background (far plane) at 0, nearer is greater
bool isBackground(const in float depth) {
    return depth == 0.0;
}

float getPixelSize(const in vec2 coords, const in float depth) {
    vec3 viewPos0 = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 viewPos1 = screenSpaceToViewSpace(vec3(coords + vec2(1.0, 0.0) / uTexSize, depth), uInvProjection);
    return distance(viewPos0, viewPos1);
}

void main(void) {
    float backgroundViewZ = 2.0 * uFar;

    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec2 invTexSize = 1.0 / uTexSize;

    float selfDepthOpaque = getDepthOpaque(coords);
    float selfViewZOpaque = isBackground(selfDepthOpaque) ? backgroundViewZ : getViewZ(selfDepthOpaque);
    float pixelSizeOpaque = getPixelSize(coords, selfDepthOpaque) * uOutlineThreshold;

    vec2 selfDepthTransparentWithAlpha = getDepthTransparentWithAlpha(coords);
    float selfDepthTransparent = selfDepthTransparentWithAlpha.x;
    float selfViewZTransparent = isBackground(selfDepthTransparent) ? backgroundViewZ : getViewZ(selfDepthTransparent);
    float pixelSizeTransparent = getPixelSize(coords, selfDepthTransparent) * uOutlineThreshold;

    float bestOpaqueDepth = 0.0;
    float bestTransparentDepth = 0.0;
    float bestTransparentAlpha = 0.0;

    float opaqueOutlineFlag = 0.0;
    float transparentOutlineFlag = 0.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            // Opaque
            float sampleDepthOpaque = getDepthOpaque(sampleCoords);
            float sampleViewZOpaque = isBackground(sampleDepthOpaque) ? backgroundViewZ : getViewZ(sampleDepthOpaque);
            if (abs(selfViewZOpaque - sampleViewZOpaque) > pixelSizeOpaque && selfDepthOpaque < sampleDepthOpaque && sampleDepthOpaque >= bestOpaqueDepth) {
                bestOpaqueDepth = sampleDepthOpaque;
                opaqueOutlineFlag = 1.0;
            }

            // Transparent
            vec2 sampleDepthTransparentWithAlpha = getDepthTransparentWithAlpha(sampleCoords);
            float sampleDepthTransparent = sampleDepthTransparentWithAlpha.x;
            float sampleAlphaTransparent = sampleDepthTransparentWithAlpha.y;
            float sampleViewZTransparent = isBackground(sampleDepthTransparent) ? backgroundViewZ : getViewZ(sampleDepthTransparent);
            if (abs(selfViewZTransparent - sampleViewZTransparent) > pixelSizeTransparent && selfDepthTransparent < sampleDepthTransparent && sampleDepthTransparent >= bestTransparentDepth) {
                bestTransparentDepth = sampleDepthTransparent;
                bestTransparentAlpha = sampleAlphaTransparent;
                transparentOutlineFlag = 1.0;
            }
        }
    }

    if (transparentOutlineFlag > 0.0 && abs(selfViewZOpaque - getViewZ(bestTransparentDepth)) < pixelSizeOpaque) { // Disable transparent outline close to opaque elements
        transparentOutlineFlag = 0.0;
    }

    // lazy curvature veto: only compute if an outline was found and center is not background
    const float kCurvatureGate = 0.75;
    vec2 dx = vec2(invTexSize.x, 0.0);
    vec2 dy = vec2(0.0, invTexSize.y);

    if (opaqueOutlineFlag > 0.0 && !isBackground(selfDepthOpaque)) {
        float dL = getDepthOpaque(coords - dx);
        float dR = getDepthOpaque(coords + dx);
        float dU = getDepthOpaque(coords + dy);
        float dD = getDepthOpaque(coords - dy);

        float vzL = isBackground(dL) ? backgroundViewZ : getViewZ(dL);
        float vzR = isBackground(dR) ? backgroundViewZ : getViewZ(dR);
        float vzU = isBackground(dU) ? backgroundViewZ : getViewZ(dU);
        float vzD = isBackground(dD) ? backgroundViewZ : getViewZ(dD);

        float ddx = abs(vzL + vzR - 2.0 * selfViewZOpaque);
        float ddy = abs(vzU + vzD - 2.0 * selfViewZOpaque);
        float curvOpaque = max(ddx, ddy);

        if (curvOpaque < pixelSizeOpaque * kCurvatureGate) {
            opaqueOutlineFlag = 0.0;
            bestOpaqueDepth = 0.0;
        }
    }

    if (transparentOutlineFlag > 0.0 && !isBackground(selfDepthTransparent)) {
        vec2 daL = getDepthTransparentWithAlpha(coords - dx);
        vec2 daR = getDepthTransparentWithAlpha(coords + dx);
        vec2 daU = getDepthTransparentWithAlpha(coords + dy);
        vec2 daD = getDepthTransparentWithAlpha(coords - dy);

        float dL = daL.x;
        float dR = daR.x;
        float dU = daU.x;
        float dD = daD.x;

        float vzL = isBackground(dL) ? backgroundViewZ : getViewZ(dL);
        float vzR = isBackground(dR) ? backgroundViewZ : getViewZ(dR);
        float vzU = isBackground(dU) ? backgroundViewZ : getViewZ(dU);
        float vzD = isBackground(dD) ? backgroundViewZ : getViewZ(dD);

        float ddx = abs(vzL + vzR - 2.0 * selfViewZTransparent);
        float ddy = abs(vzU + vzD - 2.0 * selfViewZTransparent);
        float curvTransparent = max(ddx, ddy);

        if (curvTransparent < pixelSizeTransparent * kCurvatureGate) {
            transparentOutlineFlag = 0.0;
            bestTransparentDepth = 0.0;
            bestTransparentAlpha = 0.0;
        }
    }

    vec2 depthPacked; // Pack depth in G/B channels
    float outlineTypeFlag = 0.0;
    if (opaqueOutlineFlag > 0.0 && transparentOutlineFlag > 0.0) {
        outlineTypeFlag = 0.75; // Both
        depthPacked = packUnitIntervalToRG(bestOpaqueDepth);
    } else if (transparentOutlineFlag > 0.0) {
        outlineTypeFlag = 0.5;  // Transparent only
        depthPacked = packUnitIntervalToRG(bestTransparentDepth);
    } else if (opaqueOutlineFlag > 0.0) {
        outlineTypeFlag = 0.25; // Opaque only
        depthPacked = packUnitIntervalToRG(bestOpaqueDepth);
    }

    float alpha = clamp(bestTransparentAlpha, 0.0, 0.5) * 2.0; // limiting to range [0.0, 0.5] to improve alpha precision since we don't need a wider range
    float packedFlagWithAlpha = pack2x4(vec2(outlineTypeFlag, alpha)); // pack outlineType with alpha
    gl_FragColor = vec4(packedFlagWithAlpha, depthPacked.x, depthPacked.y, bestTransparentDepth);
}
`;var ku=`
precision highp float;
precision highp int;

${z}
${ct}
${Rt}
${Te}

/** position of the fragment within the point quad, from (0, 0) to (1, 1) */
varying vec2 vPointCoord;

const vec2 center = vec2(0.5);
const float radius = 0.5;

void main(){
    ${rt}
    ${ut}

    float fragmentDepth = gl_FragCoord.z;
    ${Pt}

    #if defined(dPointStyle_circle)
        float dist = distance(vPointCoord, center);
        if (dist > radius) discard;
    #elif defined(dPointStyle_fuzzy)
        float dist = distance(vPointCoord, center);
        float fuzzyAlpha = 1.0 - smoothstep(0.0, radius, dist);
        if (fuzzyAlpha < 0.0001) discard;
    #endif

    #if defined(dPointStyle_fuzzy) && (defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking))
        material.a *= fuzzyAlpha;
    #endif

    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var _o=`
vec2 mapping = vec2(1.0, 1.0); // vertices 2 and 5
#if __VERSION__ == 100
    int m = imod(VertexID, 6);
#else
    int m = VertexID % 6;
#endif
if (m == 0) {
    mapping = vec2(-1.0, 1.0);
} else if (m == 1 || m == 3) {
    mapping = vec2(-1.0, -1.0);
} else if (m == 4) {
    mapping = vec2(1.0, -1.0);
}

int vertexId = VertexID / 6;

vec4 positionGroup = readFromTexture(tPositionGroup, vertexId, uTexDim);
vec3 position = positionGroup.rgb;
float group = positionGroup.a;
`;var Gu=`
precision highp float;
precision highp int;

${z}
${ke}
${mt}
${_t}
${Te}
${Yt}

/** position of the fragment within the point, from (0, 0) to (1, 1) */
varying vec2 vPointCoord;

void main(){
    ${_o}

    ${Et}
    ${At}
    ${wt}

    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));
    mat4 model = uModel * transform;
    mat4 modelView = uView * model;
    position = applyWiggle(position, group, aInstance);
    vec4 position4 = vec4(position, 1.0);
    // for clipping in frag shader
    vModelPosition = (model * position4).xyz;
    vec4 mvPosition = modelView * position4;
    vViewPosition = mvPosition.xyz;

    ${Kt}

    #ifdef dPointSizeAttenuation
        float pointSize = size * uPixelRatio * ((uViewport.w / 2.0) / -mvPosition.z) * 5.0;
    #else
        float pointSize = size * uPixelRatio;
    #endif
    pointSize = max(1.0, pointSize);

    gl_Position = uProjection * mvPosition;
    // offset the corner by half the point size in pixels, in clip space
    gl_Position.xy += mapping * (pointSize / uViewport.zw) * gl_Position.w;
    vPointCoord = mapping * 0.5 + 0.5;

    ${Lt}
}
`;var Uu=`
precision highp float;
precision highp int;

${z}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepthOpaque(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepthOpaque, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepthOpaque, coords));
    #endif
}

float getDepthTransparent(const in vec2 coords) {
    return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
}

// depth is reversed: the background (far plane) at 0, exact also when packed; nearer is greater
bool isBackground(const in float depth) {
    return depth == 0.0;
}

int squaredOutlineScale = dOutlineScale * dOutlineScale;
void getOutline(const in vec2 coords, out bool hasOpaque, out bool hasTransparent, out float opaqueDepth, out float transparentDepth, out float alpha) {
    vec2 invTexSize = 1.0 / uTexSize;

    hasOpaque = false;
    hasTransparent = false;
    opaqueDepth = 0.0;
    transparentDepth = 0.0;
    alpha = 0.0;
    for (int y = -dOutlineScale; y <= dOutlineScale; y++) {
        for (int x = -dOutlineScale; x <= dOutlineScale; x++) {
            if (x * x + y * y > squaredOutlineScale) {
                continue;
            }

            vec2 sampleCoords = coords + vec2(float(x), float(y)) * invTexSize;

            vec4 sampleOutlineCombined = texture2D(tOutlines, sampleCoords);
            float sampleOpaqueDepth = unpackRGToUnitInterval(sampleOutlineCombined.gb);
            float sampleTransparentDepth = sampleOutlineCombined.a;
            vec2 sampleFlagWithAlpha = unpack2x4(sampleOutlineCombined.r);

            float sampleFlag = sampleFlagWithAlpha.x;
            float sampleAlpha = clamp(sampleFlagWithAlpha.y * 0.5, 0.01, 1.0);

            if ((sampleFlag > 0.20 && sampleFlag < 0.30) || (sampleFlag > 0.70 && sampleFlag < 0.80)) { // transparent || both
                if (sampleOpaqueDepth > opaqueDepth) {
                    hasOpaque = true;
                    opaqueDepth = sampleOpaqueDepth;
                }
            }

            if ((((sampleFlag > 0.45 && sampleFlag < 0.55) || (sampleFlag > 0.70 && sampleFlag < 0.80))) && sampleTransparentDepth > transparentDepth) { // transparent || both
                hasTransparent = true;
                transparentDepth = sampleTransparentDepth;
                alpha = sampleAlpha;
            }
        }
    }
}

// occlusion at \`coords\` of a pixel at view z \`viewZ\`, depth-aware upsampled from a lower SSAO resolution
float getSsao(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepth, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepth, coords));
    #endif
}

float getSsaoTransparent(vec2 coords, float viewZ) {
    #ifdef dOcclusionUpsample
        return getSsaoUpsampled(tSsaoDepthTransparent, uOcclusionTexSize, coords, viewZ, uNear, uFar);
    #else
        return unpackSsao(texture2D(tSsaoDepthTransparent, coords));
    #endif
}

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;
    vec4 color = texture2D(tColor, coords);

    float opaqueDepth = getDepthOpaque(coords);
    float transparentDepth = 0.0;
    #ifdef dBlendTransparency
        bool blendTransparency = true;
        vec4 transparentColor = texture2D(tTransparentColor, coords);

        #if defined(dOutlineEnable) || defined(dOcclusionEnable) && defined(dOcclusionIncludeTransparency)
            transparentDepth = getDepthTransparent(coords);
        #endif
    #endif

    #if defined(dOcclusionEnable) || defined(dShadowEnable)
        bool isOpaqueBackground = isBackground(opaqueDepth);
        float viewDist = abs(getViewZ(opaqueDepth));
        float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
    #endif

    #if defined(dOcclusionEnable)
        if (!isOpaqueBackground) {
            float occlusionFactor = getSsao(coords + uOcclusionOffset, getViewZ(opaqueDepth));

            if (!uTransparentBackground) {
                color.rgb = mix(mix(uOcclusionColor, uFogColor, fogFactor), color.rgb, occlusionFactor);
            } else {
                color.rgb = mix(uOcclusionColor * (1.0 - fogFactor), color.rgb, occlusionFactor);
            }
        }
        #if defined(dBlendTransparency) && defined(dOcclusionIncludeTransparency)
            if (!isBackground(transparentDepth)) {
                float viewDist = abs(getViewZ(transparentDepth));
                float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                float occlusionFactor = getSsaoTransparent(coords + uOcclusionOffset, getViewZ(transparentDepth));
                transparentColor.rgb = mix(uOcclusionColor * (1.0 - fogFactor), transparentColor.rgb, occlusionFactor);
            }
        #endif
    #endif

    #ifdef dShadowEnable
        if (!isOpaqueBackground) {
            vec4 shadow = texture2D(tShadows, coords);
            if (!uTransparentBackground) {
                color.rgb = mix(mix(vec3(0), uFogColor, fogFactor), color.rgb, shadow.a);
            } else {
                color.rgb = mix(vec3(0) * (1.0 - fogFactor), color.rgb, shadow.a);
            }
        }
    #endif

    // outline needs to be handled after occlusion and shadow to keep them clean
    #ifdef dOutlineEnable
        bool hasOpaque;
        bool hasTransparent;
        float outlineOpaqueDepth;
        float outlineTransparentDepth;
        float outlineAlpha;
        getOutline(coords, hasOpaque, hasTransparent, outlineOpaqueDepth, outlineTransparentDepth, outlineAlpha);

        if (hasOpaque) {
            float viewDist = abs(getViewZ(outlineOpaqueDepth));
            float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
            if (!uTransparentBackground) {
                color.rgb = mix(uOutlineColor, uFogColor, fogFactor);
            } else {
                color.a = 1.0 - fogFactor;
                color.rgb = mix(uOutlineColor, vec3(0.0), fogFactor);
            }
        }

        #ifdef dBlendTransparency
            if (hasTransparent) {
                if (hasOpaque && outlineOpaqueDepth > outlineTransparentDepth) {
                    blendTransparency = false;
                } else {
                    float finalOutlineAlpha = clamp(outlineAlpha * 2.0, 0.0, 1.0);
                    float viewDist = abs(getViewZ(outlineTransparentDepth));
                    float fogFactor = smoothstep(uFogNear, uFogFar, viewDist);
                    float finalAlpha = max(transparentColor.a, finalOutlineAlpha * (1.0 - fogFactor));
                    transparentColor.a = finalAlpha;
                    transparentColor.rgb = uOutlineColor * finalAlpha;
                }
            }
        #endif
    #endif

    #ifdef dBlendTransparency
        if (blendTransparency) {
            float alpha = transparentColor.a;
            if (alpha != 0.0) {
                // blending
                color = transparentColor + color * (1.0 - alpha);
            }
        }
    #endif

    #ifdef dBloomEnable
        vec4 bloom = texture2D(tBloom, coords);
        // additive glow over geometry and background alike; alpha just covers the premultiplied rgb
        color.rgb += bloom.rgb;
        color.a = min(max(color.a, max(color.r, max(color.g, color.b))), 1.0);
    #endif

    gl_FragColor = color;
}
`;var me=`
precision highp float;

void main(void) {
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var zu=`
precision highp float;
precision highp int;

${z}

// Map full [0,1] coords -> bounds [0,1] coords
vec2 fullCoordsToBoundsCoords(vec2 fullCoords) {
    return (fullCoords - uBounds.xy) / (uBounds.zw - uBounds.xy);
}

// Map bounds [0,1] coords -> full [0,1] coords
vec2 boundsCoordsToFullCoords(vec2 boundsCoords) {
    return uBounds.xy + (uBounds.zw - uBounds.xy) * boundsCoords;
}

bool isBackground(const in float depth) {
    return depth == 0.0;
}

bool outsideBounds(const in vec2 p) {
    return p.x < uBounds.x || p.y < uBounds.y || p.x > uBounds.z || p.y > uBounds.w;
}

float getViewZ(const in float depth) {
    #if dOrthographic == 1
        return orthographicDepthToViewZ(depth, uNear, uFar);
    #else
        return perspectiveDepthToViewZ(depth, uNear, uFar);
    #endif
}

float getDepth(const in vec2 coords) {
    #ifdef depthTextureSupport
        return texture2D(tDepth, coords).r;
    #else
        return unpackRGBAToDepth(texture2D(tDepth, coords));
    #endif
}

float screenFade(const in vec2 coords) {
    vec2 c = (coords - uBounds.xy) / (uBounds.zw - uBounds.xy);
    vec2 fade = max(12.0 * abs(c - 0.5) - 5.0, vec2(0.0));
    return saturate(1.0 - dot(fade, fade));
}

// based on https://panoskarabelas.com/posts/screen_space_shadows/
vec3 screenSpaceShadow(const in vec3 position, const in vec3 lightDirection, const in vec3 lightColor, const in float stepLength) {
    // Ray position and direction (in view-space)
    vec3 rayPos = position;
    vec3 rayDir = -lightDirection;

    // Compute ray step
    vec3 rayStep = rayDir * stepLength;

    // Ray march towards the light
    vec4 rayCoords = vec4(0.0);
    for (int i = 0; i < dSteps; ++i) {
        // Step the ray
        rayPos += rayStep;

        rayCoords = uProjection * vec4(rayPos, 1.0);
        rayCoords.xyz = (rayCoords.xyz / rayCoords.w) * 0.5 + 0.5;
        rayCoords.xy = boundsCoordsToFullCoords(rayCoords.xy);

        if (outsideBounds(rayCoords.xy)) {
            return lightColor;
        }

        // Compute the difference between the ray's and the camera's depth
        float depth = getDepth(rayCoords.xy);
        float viewZ = getViewZ(depth);
        float zDelta = rayPos.z - viewZ;

        if (zDelta < uTolerance) {
            // Fade out as we approach the edges of the screen
            return mix(vec3(0.0), lightColor, 1.0 - screenFade(rayCoords.xy));
        }
    }

    return lightColor;
}

void main(void) {
    vec2 invTexSize = 1.0 / uTexSize;
    vec2 selfCoords = gl_FragCoord.xy * invTexSize;
    float selfDepth = getDepth(selfCoords);

    if (isBackground(selfDepth)) {
        gl_FragColor = vec4(0.0);
        return;
    }

    vec2 selfBoundsCoords = fullCoordsToBoundsCoords(selfCoords);
    if (any(lessThan(selfBoundsCoords, vec2(0.0))) || any(greaterThan(selfBoundsCoords, vec2(1.0)))) {
        gl_FragColor = vec4(0.0);
        return;
    }

    vec3 selfViewPos = screenSpaceToViewSpace(vec3(selfBoundsCoords, selfDepth), uInvProjection);
    float stepLength = uMaxDistance / float(dSteps);

    float l = length(uAmbientColor);
    float a = l;
    #if dLightCount != 0
        vec3 s;
        #pragma unroll_loop_start
        for (int i = 0; i < dLightCount; ++i) {
            s = screenSpaceShadow(selfViewPos, uLightDirection[i], uLightColor[i], stepLength);
            l += length(s);
            a += length(uLightColor[i]);
        }
        #pragma unroll_loop_end
    #endif

    gl_FragColor = vec4(l / a);
}
`;var Nu=`
precision highp float;
precision highp int;
precision highp sampler2D;

varying vec2 vUv;
varying vec4 vOffset[2];

vec4 SMAANeighborhoodBlendingPS(vec2 texCoord, vec4 offset[2], sampler2D colorTex, sampler2D blendTex) {
    // Fetch the blending weights for current pixel:
    vec4 a;
    a.xz = texture2D(blendTex, texCoord).xz;
    a.y = texture2D(blendTex, offset[1].zw).g;
    a.w = texture2D(blendTex, offset[1].xy).a;

    // Is there any blending weight with a value greater than 0.0?
    if (dot(a, vec4(1.0, 1.0, 1.0, 1.0)) < 1e-5) {
        return texture2D(colorTex, texCoord, 0.0);
    } else {
        // Up to 4 lines can be crossing a pixel (one through each edge). We
        // favor blending by choosing the line with the maximum weight for each
        // direction:
        vec2 offset;
        offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
        offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

        // Then we go in the direction that has the maximum weight:
        if (abs(offset.x) > abs(offset.y)) { // horizontal vs. vertical
            offset.y = 0.0;
        } else {
            offset.x = 0.0;
        }

        // Fetch the opposite color and lerp by hand:
        vec4 C = texture2D(colorTex, texCoord, 0.0);
        texCoord += sign(offset) * uTexSizeInv;
        vec4 Cop = texture2D(colorTex, texCoord, 0.0);
        float s = abs(offset.x) > abs(offset.y) ? abs(offset.x) : abs(offset.y);

        // WebGL port note: Added gamma correction
        C.xyz = pow(C.xyz, vec3(2.2));
        Cop.xyz = pow(Cop.xyz, vec3(2.2));
        vec4 mixed = mix(C, Cop, s);
        mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

        return mixed;
    }
}

void main() {
    gl_FragColor = SMAANeighborhoodBlendingPS(vUv, vOffset, tColor, tWeights);
}
`;var ju=`
precision highp float;

varying vec2 vUv;
varying vec4 vOffset[2];

void SMAANeighborhoodBlendingVS(vec2 texCoord) {
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-1.0, 0.0, 0.0, 1.0); // WebGL port note: Changed sign in W component
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(1.0, 0.0, 0.0, -1.0); // WebGL port note: Changed sign in W component
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAANeighborhoodBlendingVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var Wu=`
precision highp float;
precision highp int;
precision highp sampler2D;

varying vec2 vUv;
varying vec4 vOffset[3];

vec4 SMAAColorEdgeDetectionPS(vec2 texcoord, vec4 offset[3], sampler2D colorTex) {
    vec2 threshold = vec2(dEdgeThreshold, dEdgeThreshold);

    // Calculate color deltas:
    vec4 delta;
    vec3 C = texture2D(colorTex, texcoord).rgb;

    vec3 Cleft = texture2D(colorTex, offset[0].xy).rgb;
    vec3 t = abs(C - Cleft);
    delta.x = max(max(t.r, t.g), t.b);

    vec3 Ctop = texture2D(colorTex, offset[0].zw).rgb;
    t = abs(C - Ctop);
    delta.y = max(max(t.r, t.g), t.b);

    // We do the usual threshold:
    vec2 edges = step(threshold, delta.xy);

    // Then discard if there is no edge:
    if (dot(edges, vec2(1.0, 1.0 )) == 0.0)
        discard;

    // Calculate right and bottom deltas:
    vec3 Cright = texture2D(colorTex, offset[1].xy).rgb;
    t = abs( C - Cright );
    delta.z = max(max(t.r, t.g), t.b);

    vec3 Cbottom  = texture2D(colorTex, offset[1].zw).rgb;
    t = abs(C - Cbottom);
    delta.w = max(max(t.r, t.g), t.b);

    // Calculate the maximum delta in the direct neighborhood:
    float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w );

    // Calculate left-left and top-top deltas:
    vec3 Cleftleft  = texture2D(colorTex, offset[2].xy).rgb;
    t = abs( C - Cleftleft );
    delta.z = max(max(t.r, t.g), t.b);

    vec3 Ctoptop = texture2D(colorTex, offset[2].zw).rgb;
    t = abs(C - Ctoptop);
    delta.w = max(max(t.r, t.g), t.b);

    // Calculate the final maximum delta:
    maxDelta = max(max(maxDelta, delta.z), delta.w);

    // Local contrast adaptation in action:
    edges.xy *= step(0.5 * maxDelta, delta.xy);

    return vec4(edges, 0.0, 0.0);
}

void main() {
    gl_FragColor = SMAAColorEdgeDetectionPS(vUv, vOffset, tColor);
}
`;var Hu=`
precision highp float;

varying vec2 vUv;
varying vec4 vOffset[3];

void SMAAEdgeDetectionVS(vec2 texCoord) {
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-1.0, 0.0, 0.0, 1.0); // WebGL port note: Changed sign in W component
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(1.0, 0.0, 0.0, -1.0); // WebGL port note: Changed sign in W component
    vOffset[2] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-2.0, 0.0, 0.0, 2.0); // WebGL port note: Changed sign in W component
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAAEdgeDetectionVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var $u=`
precision highp float;
precision highp int;
precision highp sampler2D;

#define SMAASampleLevelZeroOffset(tex, coord, offset) texture2D(tex, coord + float(offset) * uTexSizeInv, 0.0)

#define SMAA_AREATEX_MAX_DISTANCE 16
#define SMAA_AREATEX_PIXEL_SIZE (1.0 / vec2(160.0, 560.0))
#define SMAA_AREATEX_SUBTEX_SIZE (1.0 / 7.0)

varying vec2 vUv;
varying vec4 vOffset[3];
varying vec2 vPixCoord;

#if __VERSION__ == 100
    vec2 round(vec2 x) {
        return sign(x) * floor(abs(x) + 0.5);
    }
#endif

float SMAASearchLength(sampler2D searchTex, vec2 e, float bias, float scale) {
    // Not required if searchTex accesses are set to point:
    // float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
    // e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
    //     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
    e.r = bias + e.r * scale;
    return 255.0 * texture2D(searchTex, e, 0.0).r;
}

float SMAASearchXLeft(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    /**
     * @PSEUDO_GATHER4
     * This texCoord has been offset by (-0.25, -0.125) in the vertex shader to
     * sample between edge, thus fetching four edges in a row.
     * Sampling with different offsets in each direction allows to disambiguate
     * which edges are active from the four fetched ones.
     */
    vec2 e = vec2(0.0, 1.0);

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D( edgesTex, texCoord, 0.0).rg;
        texCoord -= vec2(2.0, 0.0) * uTexSizeInv;
        if (!(texCoord.x > end && e.g > 0.8281 && e.r == 0.0)) break;
    }

    // We correct the previous (-0.25, -0.125) offset we applied:
    texCoord.x += 0.25 * uTexSizeInv.x;

    // The searches are bias by 1, so adjust the coords accordingly:
    texCoord.x += uTexSizeInv.x;

    // Disambiguate the length added by the last step:
    texCoord.x += 2.0 * uTexSizeInv.x; // Undo last step
    texCoord.x -= uTexSizeInv.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

    return texCoord.x;
}

float SMAASearchXRight(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 0.0, 1.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord += vec2(2.0, 0.0) * uTexSizeInv;
        if (!(texCoord.x < end && e.g > 0.8281 && e.r == 0.0)) break;
    }

    texCoord.x -= 0.25 * uTexSizeInv.x;
    texCoord.x -= uTexSizeInv.x;
    texCoord.x -= 2.0 * uTexSizeInv.x;
    texCoord.x += uTexSizeInv.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

    return texCoord.x;
}

float SMAASearchYUp(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 1.0, 0.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord += vec2(0.0, 2.0) * uTexSizeInv; // WebGL port note: Changed sign
        if (!(texCoord.y > end && e.r > 0.8281 && e.g == 0.0)) break;
    }

    texCoord.y -= 0.25 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= 2.0 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += uTexSizeInv.y * SMAASearchLength(searchTex, e.gr, 0.0, 0.5); // WebGL port note: Changed sign

    return texCoord.y;
}

float SMAASearchYDown(sampler2D edgesTex, sampler2D searchTex, vec2 texCoord, float end) {
    vec2 e = vec2( 1.0, 0.0 );

    for (int i = 0; i < dMaxSearchSteps; i++) { // WebGL port note: Changed while to for
        e = texture2D(edgesTex, texCoord, 0.0).rg;
        texCoord -= vec2( 0.0, 2.0 ) * uTexSizeInv; // WebGL port note: Changed sign
        if (!(texCoord.y < end && e.r > 0.8281 && e.g == 0.0)) break;
    }

    texCoord.y += 0.25 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y += 2.0 * uTexSizeInv.y; // WebGL port note: Changed sign
    texCoord.y -= uTexSizeInv.y * SMAASearchLength(searchTex, e.gr, 0.5, 0.5); // WebGL port note: Changed sign

    return texCoord.y;
}

vec2 SMAAArea(sampler2D areaTex, vec2 dist, float e1, float e2, float offset) {
    // Rounding prevents precision errors of bilinear filtering:
    vec2 texCoord = float(SMAA_AREATEX_MAX_DISTANCE) * round(4.0 * vec2(e1, e2)) + dist;

    // We do a scale and bias for mapping to texel space:
    texCoord = SMAA_AREATEX_PIXEL_SIZE * texCoord + (0.5 * SMAA_AREATEX_PIXEL_SIZE);

    // Move to proper place, according to the subpixel offset:
    texCoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

    return texture2D(areaTex, texCoord, 0.0).rg;
}

vec4 SMAABlendingWeightCalculationPS(vec2 texCoord, vec2 pixCoord, vec4 offset[3], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices) {
    vec4 weights = vec4(0.0, 0.0, 0.0, 0.0);

    vec2 e = texture2D(edgesTex, texCoord).rg;

    if (e.g > 0.0) { // Edge at north
        vec2 d;

        // Find the distance to the left:
        vec2 coords;
        coords.x = SMAASearchXLeft(edgesTex, searchTex, offset[0].xy, offset[2].x );
        coords.y = offset[1].y; // offset[1].y = texCoord.y - 0.25 * uTexSizeInv.y (@CROSSING_OFFSET)
        d.x = coords.x;

        // Now fetch the left crossing edges, two at a time using bilinear
        // filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
        // discern what value each edge has:
        float e1 = texture2D(edgesTex, coords, 0.0).r;

        // Find the distance to the right:
        coords.x = SMAASearchXRight(edgesTex, searchTex, offset[0].zw, offset[2].y);
        d.y = coords.x;

        // We want the distances to be in pixel units (doing this here allow to
        // better interleave arithmetic and memory accesses):
        d = d / uTexSizeInv.x - pixCoord.x;

        // SMAAArea below needs a sqrt, as the areas texture is compressed
        // quadratically:
        vec2 sqrt_d = sqrt(abs(d));

        // Fetch the right crossing edges:
        coords.y -= 1.0 * uTexSizeInv.y; // WebGL port note: Added
        float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(1, 0)).r;

        // Ok, we know how this pattern looks like, now it is time for getting
        // the actual area:
        weights.rg = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.y));
    }

    if (e.r > 0.0) { // Edge at west
        vec2 d;

        // Find the distance to the top:
        vec2 coords;

        coords.y = SMAASearchYUp(edgesTex, searchTex, offset[1].xy, offset[2].z );
        coords.x = offset[0].x; // offset[1].x = texCoord.x - 0.25 * uTexSizeInv.x;
        d.x = coords.y;

        // Fetch the top crossing edges:
        float e1 = texture2D(edgesTex, coords, 0.0).g;

        // Find the distance to the bottom:
        coords.y = SMAASearchYDown(edgesTex, searchTex, offset[1].zw, offset[2].w);
        d.y = coords.y;

        // We want the distances to be in pixel units:
        d = d / uTexSizeInv.y - pixCoord.y;

        // SMAAArea below needs a sqrt, as the areas texture is compressed
        // quadratically:
        vec2 sqrt_d = sqrt(abs(d));

        // Fetch the bottom crossing edges:
        coords.y -= 1.0 * uTexSizeInv.y; // WebGL port note: Added
        float e2 = SMAASampleLevelZeroOffset(edgesTex, coords, ivec2(0, 1)).g;

        // Get the area for this direction:
        weights.ba = SMAAArea(areaTex, sqrt_d, e1, e2, float(subsampleIndices.x));
    }

    return weights;
}

void main() {
    gl_FragColor = SMAABlendingWeightCalculationPS(vUv, vPixCoord, vOffset, tEdges, tArea, tSearch, ivec4(0.0));
}
`;var qu=`
precision highp float;

varying vec2 vUv;
varying vec4 vOffset[3];
varying vec2 vPixCoord;

void SMAABlendingWeightCalculationVS(vec2 texCoord) {
    vPixCoord = texCoord / uTexSizeInv;

    // We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
    vOffset[0] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-0.25, 0.125, 1.25, 0.125); // WebGL port note: Changed sign in Y and W components
    vOffset[1] = texCoord.xyxy + uTexSizeInv.xyxy * vec4(-0.125, 0.25, -0.125, -1.25); // WebGL port note: Changed sign in Y and W components

    // And these for the searches, they indicate the ends of the loops:
    vOffset[2] = vec4(vOffset[0].xz, vOffset[1].yw) + vec4(-2.0, 2.0, -2.0, 2.0) * uTexSizeInv.xxyy * float(dMaxSearchSteps);
}

void main() {
    vec2 scale = uViewport.zw * uTexSizeInv;
    vec2 shift = uViewport.xy * uTexSizeInv;
    vUv = (aPosition + 1.0) * 0.5 * scale + shift;
    SMAABlendingWeightCalculationVS(vUv);
    vec2 position = aPosition * uQuadScale - vec2(1.0, 1.0) + uQuadScale;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;var Xu=`
precision highp float;
precision highp int;

#define bumpEnabled

${z}
${ct}
${Rt}
${hr}
${Te}

varying float vRadius;
varying vec3 vPoint;
varying vec3 vPointViewPosition;

#ifdef dSolidInterior
    const bool solidInterior = true;
#else
    const bool solidInterior = false;
#endif

bool isCap = false;

bool SphereImpostor(out vec3 modelPos, out vec3 cameraPos, out vec3 cameraNormal, out bool interior, out float fragmentDepth){
    vec3 cameraSpherePos = -vPointViewPosition;

    vec3 rayOrigin = mix(vec3(0.0, 0.0, 0.0), vPoint, uIsOrtho);
    vec3 rayDirection = mix(normalize(vPoint), vec3(0.0, 0.0, 1.0), uIsOrtho);
    vec3 cameraSphereDir = mix(cameraSpherePos, rayOrigin - cameraSpherePos, uIsOrtho);

    float B = dot(rayDirection, cameraSphereDir);
    float det = B * B + vRadius * vRadius - dot(cameraSphereDir, cameraSphereDir);

    if (det < 0.0) return false;

    float sqrtDet = sqrt(det);
    float posT = mix(B + sqrtDet, B - sqrtDet, uIsOrtho);
    float negT = mix(B - sqrtDet, B + sqrtDet, uIsOrtho);

    #if defined(dRenderVariant_depth)
        if (uDepthBack) {
            // back-depth pass wants the farthest point that is not clipped
            cameraPos = rayDirection * posT + rayOrigin;
            modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
            cameraNormal = -normalize(cameraPos - cameraSpherePos);
            interior = true;
            #if defined(dSolidInterior) && !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                vec3 frontModelPos = (uInvView * vec4(rayDirection * negT + rayOrigin, 1.0)).xyz;
                float s = clipExit(modelPos / uModelScale, frontModelPos / uModelScale, 0.0);
                if (s < 0.0) return false;
                if (s > 0.0) {
                    cameraPos = rayDirection * mix(posT, negT, s) + rayOrigin;
                    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                    cameraNormal = -normalize(clipNormal(modelPos / uModelScale) * mat3(uInvView));
                    isCap = true;
                }
            #endif
            fragmentDepth = calcDepth(cameraPos);
            // depth is reversed: in front of the near plane above 1
            return fragmentDepth < 1.0;
        }
    #endif

    cameraPos = rayDirection * negT + rayOrigin;
    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
    fragmentDepth = calcDepth(cameraPos);
    float frontDepth = fragmentDepth;
    vec3 frontModelPos = modelPos;

    bool objectClipped = false;

    #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
        if (clipTest(modelPos / uModelScale)) {
            objectClipped = true;
            fragmentDepth = 2.0;
        }
    #endif

    if (fragmentDepth < 1.0) {
        cameraNormal = normalize(cameraPos - cameraSpherePos);
        interior = false;
        return true;
    } else if (uDoubleSided || solidInterior) {
        cameraPos = rayDirection * posT + rayOrigin;
        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
        fragmentDepth = calcDepth(cameraPos);
        cameraNormal = -normalize(cameraPos - cameraSpherePos);
        interior = true;
        if (fragmentDepth < 1.0) {
            #ifdef dSolidInterior
                float nearT = - (uNear + rayOrigin.z) / rayDirection.z;
                float sNear = frontDepth < 1.0 ? 0.0 : clamp((nearT - negT) / (posT - negT), 0.0, 1.0);
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    float sCap = clipExit(frontModelPos / uModelScale, modelPos / uModelScale, sNear);
                    if (sCap < 0.0) return false;
                #else
                    float sCap = sNear;
                #endif
                if (sCap == sNear && frontDepth >= 1.0) {
                    fragmentDepth = 1.0 - (0.0000001 / vRadius);
                    cameraNormal = -mix(normalize(vPoint), vec3(0.0, 0.0, -1.0), uIsOrtho);
                    cameraPos = rayDirection * nearT + rayOrigin;
                    modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                }
                #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
                    else {
                        cameraPos = rayDirection * mix(negT, posT, sCap) + rayOrigin;
                        modelPos = (uInvView * vec4(cameraPos, 1.0)).xyz;
                        fragmentDepth = calcDepth(cameraPos) - (0.0000001 / vRadius);
                        cameraNormal = -normalize(clipNormal(modelPos / uModelScale) * mat3(uInvView));
                        isCap = true;
                    }
                #endif
            #endif
            return true;
        }
    }

    return false;
}

void main(void){
    vec3 cameraNormal;
    float fragmentDepth;

    #ifdef dApproximate
        vec3 pointDir = -vPointViewPosition - vPoint;
        if (dot(pointDir, pointDir) > vRadius * vRadius) discard;
        vec3 vViewPosition = -vPointViewPosition;
        fragmentDepth = gl_FragCoord.z;
        #if !defined(dIgnoreLight) || defined(dXrayShaded) || defined(dRenderVariant_tracing)
            pointDir.z -= cos(length(pointDir)) * vRadius * 0.5;
            cameraNormal = -normalize(pointDir);
        #endif
        interior = false;
    #else
        vec3 modelPos;
        vec3 cameraPos;
        bool hit = SphereImpostor(modelPos, cameraPos, cameraNormal, interior, fragmentDepth);
        if (!hit) discard;

        if (fragmentDepth < 0.0) discard;
        if (fragmentDepth > 1.0) discard;

        gl_FragDepthEXT = fragmentDepth;

        vec3 vModelPosition = modelPos;
        vec3 vViewPosition = cameraPos;
    #endif

    ${rt}
    #if !defined(dClipPrimitive) && defined(dClipVariant_pixel) && dClipObjectCount != 0
        if (!isCap) {
            ${ut}
        }
    #endif

    #ifdef dNeedsNormal
        vec3 normal = -cameraNormal;
    #endif

    ${Pt}

    #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing) || defined(dRenderVariant_marking)
        #if defined(dRenderVariant_marking)
        if (material.a < 1.0 && uAlphaThickness > 0.0) {
        #else
        if (uRenderMask == MaskTransparent && uAlphaThickness > 0.0) {
        #endif
            material.a *= min(1.0, vRadius / (uAlphaThickness * uModelScale));
        }
    #endif

    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        ${qr}
        ${gr}
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(normal, emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Zu=`
precision highp float;
precision highp int;

${z}
${ke}
${mt}
${_t}
${Te}
${Yt}

varying float vRadius;
varying vec3 vPoint;
varying vec3 vPointViewPosition;

/**
 * Bounding rectangle of a clipped, perspective-projected 3D Sphere.
 * Michael Mara, Morgan McGuire. 2013
 *
 * Specialization by Arseny Kapoulkine, MIT License Copyright (c) 2018
 * https://github.com/zeux/niagara
 *
 * Only works for for symmetric projections.
 */
void sphereProjection(const in vec3 p, const in float r, const in vec2 mapping) {
    vec3 pr = p * r;
    float pzr2 = p.z * p.z - r * r;

    float vx = sqrt(p.x * p.x + pzr2);
    float minx = ((vx * p.x - pr.z) / (vx * p.z + pr.x)) * uProjection[0][0];
    float maxx = ((vx * p.x + pr.z) / (vx * p.z - pr.x)) * uProjection[0][0];

    float vy = sqrt(p.y * p.y + pzr2);
    float miny = ((vy * p.y - pr.z) / (vy * p.z + pr.y)) * uProjection[1][1];
    float maxy = ((vy * p.y + pr.z) / (vy * p.z - pr.y)) * uProjection[1][1];

    gl_Position.xy = vec2(maxx + minx, maxy + miny) * -0.5;
    gl_Position.xy -= mapping * vec2(maxx - minx, maxy - miny) * 0.5;
    gl_Position.xy *= gl_Position.w;
}

const mat4 D = mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, -1.0
);

/**
 * Compute point size and center using the technique described in:
 * "GPU-Based Ray-Casting of Quadratic Surfaces" http://dl.acm.org/citation.cfm?id=2386396
 * by Christian Sigg, Tim Weyrich, Mario Botsch, Markus Gross.
 */
void quadraticProjection(const in vec3 position, const in float radius, const in vec2 mapping, const in mat4 transform) {
    vec2 xbc, ybc;

    mat4 T = mat4(
        radius, 0.0, 0.0, 0.0,
        0.0, radius, 0.0, 0.0,
        0.0, 0.0, radius, 0.0,
        position.x, position.y, position.z, 1.0
    );

    mat4 R = transpose4(uProjection * uModelView * transform * T);
    float A = dot(R[3], D * R[3]);
    float B = -2.0 * dot(R[0], D * R[3]);
    float C = dot(R[0], D * R[0]);
    xbc[0] = (-B - sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    xbc[1] = (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    float sx = abs(xbc[0] - xbc[1]) * 0.5;

    A = dot(R[3], D * R[3]);
    B = -2.0 * dot(R[1], D * R[3]);
    C = dot(R[1], D * R[1]);
    ybc[0] = (-B - sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    ybc[1] = (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A);
    float sy = abs(ybc[0] - ybc[1]) * 0.5;

    gl_Position.xy = vec2(0.5 * (xbc.x + xbc.y), 0.5 * (ybc.x + ybc.y));
    gl_Position.xy -= mapping * vec2(sx, sy);
    gl_Position.xy *= gl_Position.w;
}

void main(void){
    ${_o}

    position = applyWiggle(position, group, aInstance);
    mat4 transform = applyTumble(aTransform, aInstance, float(uObjectId));

    ${Et}
    ${At}
    ${wt}
    ${Kt}

    vRadius = size * uModelScale;

    vec4 position4 = vec4(position, 1.0);
    vModelPosition = (uModel * transform * position4).xyz; // for clipping in frag shader

    float d;
    if (uLod.w != 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
        // members of a merged item can have different scales for the same lod level (sphere-count dependent)
        #if defined(dSegmented)
            float lodScale = uLodLevel == 0 ? aSegmentLod.x : (uLodLevel == 1 ? aSegmentLod.y : (uLodLevel == 2 ? aSegmentLod.z : aSegmentLod.w));
        #else
            float lodScale = uLod.w;
        #endif
        if (uModelScale != 1.0) {
            vRadius *= lodScale;
        } else {
            d = (dot(uCameraPlane.xyz, vModelPosition) + uCameraPlane.w) / uModelScale;
            float f = min(
                smoothstep(uLod.x, uLod.x + uLod.z, d),
                1.0 - smoothstep(uLod.y - uLod.z, uLod.y, d)
            ) * lodScale;
            vRadius *= f;
        }
    }

    vec4 mvPosition = uModelView * transform * position4;

    #ifdef dApproximate
        vec4 mvCorner = vec4(mvPosition.xyz, 1.0);
        mvCorner.xy += mapping * vRadius;
        gl_Position = uProjection * mvCorner;
    #else
        if (uIsOrtho == 1.0) {
            vec4 mvCorner = vec4(mvPosition.xyz, 1.0);
            mvCorner.xy += mapping * vRadius;
            gl_Position = uProjection * mvCorner;
        } else if (uIsAsymmetricProjection) {
            gl_Position = uProjection * vec4(mvPosition.xyz, 1.0);
            quadraticProjection(position, vRadius / uModelScale, mapping, transform);
        } else {
            gl_Position = uProjection * vec4(mvPosition.xyz, 1.0);
            sphereProjection(mvPosition.xyz, vRadius, mapping);
        }
    #endif

    vec4 vPoint4 = uInvProjection * gl_Position;
    vPoint = vPoint4.xyz / vPoint4.w;
    vPointViewPosition = -mvPosition.xyz / mvPosition.w;

    // in front of the near plane (clip z is reversed)
    if (gl_Position.z > gl_Position.w) {
        mvPosition.z -= 2.0 * vRadius; // avoid clipping
        gl_Position.z = (uProjection * vec4(mvPosition.xyz, 1.0)).z;
    }

    if (uModelScale == 1.0) {
        if (uLod.w != 0.0 && (uLod.x != 0.0 || uLod.y != 0.0)) {
            if (d < uLod.x || d > uLod.y) {
                // move out of [ -w, +w ] to 'discard' in vert shader
                gl_Position.z = 2.0 * gl_Position.w;
            }
        }
    }

    #if defined(dClipPrimitive) && !defined(dClipVariant_instance) && dClipObjectCount != 0
        if (clipTest(vModelPosition / uModelScale)) {
            // move out of [ -w, +w ] to 'discard' in vert shader
            gl_Position.z = 2.0 * gl_Position.w;
        }
    #else
        ${Lt}
    #endif
}
`;var Qu=`
precision highp float;
precision highp int;

${z}

// the packed depth is linear and reversed (see the SSAO pass)
float getViewZ(const in float depth) {
    return depth * (uFar - uNear) - uFar;
}

// the background (far plane) at 0, packed as (0, 0); the near plane at 1, which
// packUnitIntervalToRG stores as (0, 1) in the uint8 target and unpacks to 255/256, never 1.0, so the packed bytes
// are tested
bool isBackgroundPacked(const in vec2 packedDepth) {
    return packedDepth.x == 0.0 && packedDepth.y == 0.0;
}

bool isNearClipPacked(const in vec2 packedDepth) {
    return packedDepth.x == 0.0 && packedDepth.y == 1.0;
}

bool outsideBounds(const in vec2 p) {
    return p.x < uBounds.x || p.y < uBounds.y || p.x > uBounds.z || p.y > uBounds.w;
}

// view space size of a pixel at view z
float getPixelSize(const in float viewZ) {
    #if dOrthographic == 1
        return 2.0 * uInvProjection[0][0] / uTexSize.x;
    #else
        return 2.0 * uInvProjection[0][0] * -viewZ / uTexSize.x;
    #endif
}

void main(void) {
    vec2 coords = gl_FragCoord.xy / uTexSize;

    vec2 packedDepth = texture2D(tSsaoDepth, coords).zw;

    if (outsideBounds(coords)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packedDepth);
        return;
    }

    float selfDepth = unpackRGToUnitInterval(packedDepth);
    // (if background and if second pass) or if near clip
    if ((isBackgroundPacked(packedDepth) && uBlurDirectionY != 0.0) || isNearClipPacked(packedDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packedDepth);
        return;
    }

    float selfViewZ = getViewZ(selfDepth);
    float pixelSize = getPixelSize(selfViewZ);

    vec2 offset = vec2(uBlurDirectionX, uBlurDirectionY) / uTexSize;

    float sum = 0.0;
    float kernelSum = 0.0;
    const int halfKernelSize = dOcclusionKernelSize / 2;
    // only if kernelSize is odd
    for (int i = -halfKernelSize; i <= halfKernelSize; i++) {
        if (abs(float(i)) > 1.0 && abs(float(i)) * pixelSize > 0.8) continue;

        vec2 sampleCoords = coords + float(i) * offset;
        if (outsideBounds(sampleCoords)) {
            continue;
        }

        vec4 sampleSsaoDepth = texture2D(tSsaoDepth, sampleCoords);

        float sampleDepth = unpackRGToUnitInterval(sampleSsaoDepth.zw);
        if (isBackgroundPacked(sampleSsaoDepth.zw) || isNearClipPacked(sampleSsaoDepth.zw)) {
            continue;
        }

        float sampleViewZ = getViewZ(sampleDepth);
        if (abs(selfViewZ - sampleViewZ) >= uBlurDepthBias) {
            continue;
        }

        float kernel = uKernel[int(abs(float(i)))]; // abs is not defined for int in webgl1
        float sampleValue = unpackRGToUnitInterval(sampleSsaoDepth.xy);

        sum += kernel * sampleValue;
        kernelSum += kernel;
    }
    gl_FragColor = vec4(packUnitIntervalToRG(sum / kernelSum), packedDepth);
}
`;var Yu=`
precision highp float;
precision highp int;
precision highp sampler2D;

${z}

float smootherstep(float edge0, float edge1, float x) {
    x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
    return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

// ordered dither of a 2x2 and a 4x4 block (values k / 4 and k / 16), \`pixel\` in whole pixels
float bayer2(vec2 pixel) {
    pixel = floor(pixel);
    return fract(dot(pixel, vec2(0.5, pixel.y * 0.75)));
}

float bayer4(const in vec2 pixel) {
    return bayer2(0.5 * pixel) * 0.25 + bayer2(pixel);
}

// rotation of the sample kernel at \`pixel\`: the 16 angles of a 4x4 block in ordered dither, so that the blur
// (wider than a block) averages all of them
vec2 getKernelRotation(const in vec2 pixel) {
    float angle = 2.0 * PI * (bayer4(pixel) + 0.5 / 16.0);
    return vec2(cos(angle), sin(angle));
}

// depth is reversed: the background (far plane) at 0
bool isBackground(const in float depth) {
    return depth == 0.0;
}

// inset by half a texel to avoid sampling texels outside the viewport
vec2 clampToBounds(const in vec2 coords) {
    vec2 halfTexel = 0.5 / uTexSize;
    return clamp(coords, uBounds.xy + halfTexel, uBounds.zw - halfTexel);
}

float getDepth(const in vec2 coords, const in int transparentFlag) {
    if (transparentFlag == 1){
        #if defined(dIncludeTransparent)
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords)).x;
        #else
            return 0.0;
        #endif
    } else {
        #ifdef dPackedDepth
            return unpackRGBAToDepth(texture2D(tDepth, coords));
        #else
            return texture2D(tDepth, coords).r;
        #endif
    }
}

#if defined(dIncludeTransparent)
    vec2 getDepthTransparentWithAlpha(const in vec2 coords){
        return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
    }
#endif

#define dQuarterThreshold 0.1
#define dHalfThreshold 0.05

float getLevelDepth(const in sampler2D tex, const in vec2 coords) {
    #ifdef dPackedDepthLevels
        return unpackRGBAToDepth(texture2D(tex, coords));
    #else
        return texture2D(tex, coords).r;
    #endif
}

float getMappedDepth(const in vec2 coords, const in vec2 selfCoords) {
    float d = distance(coords, selfCoords);
    if (d > dQuarterThreshold) {
        return getLevelDepth(tDepthQuarter, coords);
    } else if (d > dHalfThreshold) {
        return getLevelDepth(tDepthHalf, coords);
    } else {
        return getDepth(coords, 0);
    }
}

#if defined(dIncludeTransparent)
    vec2 getMappedDepthTransparentWithAlpha(const in vec2 coords, const in vec2 selfCoords) {
        float d = distance(coords, selfCoords);
        if (d > dQuarterThreshold) {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthQuarterTransparent, coords));
        } else if (d > dHalfThreshold) {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthHalfTransparent, coords));
        } else {
            return unpackRGBAToDepthWithAlpha(texture2D(tDepthTransparent, coords));
        }
    }
#endif

// adapted from https://gist.github.com/bgolus/a07ed65602c009d5e2f753826e8078a0
vec3 viewNormalAtPixelPositionAccurate(const in vec2 vpos, const in int transparentFlag) {
    // current pixel's depth
    float c = getDepth(vpos, transparentFlag);

    // get current pixel's view space position
    vec3 viewSpacePos_c = screenSpaceToViewSpace(vec3(vpos, c), uInvProjection);

    // get view space position at 1 pixel offsets in each major direction
    vec3 viewSpacePos_l = screenSpaceToViewSpace(vec3(vpos + vec2(-1.0, 0.0) / uTexSize, getDepth(vpos + vec2(-1.0, 0.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_r = screenSpaceToViewSpace(vec3(vpos + vec2( 1.0, 0.0) / uTexSize, getDepth(vpos + vec2( 1.0, 0.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_d = screenSpaceToViewSpace(vec3(vpos + vec2( 0.0,-1.0) / uTexSize, getDepth(vpos + vec2( 0.0,-1.0) / uTexSize, transparentFlag)), uInvProjection);
    vec3 viewSpacePos_u = screenSpaceToViewSpace(vec3(vpos + vec2( 0.0, 1.0) / uTexSize, getDepth(vpos + vec2( 0.0, 1.0) / uTexSize, transparentFlag)), uInvProjection);

    // get the difference between the current and each offset position
    vec3 l = viewSpacePos_c - viewSpacePos_l;
    vec3 r = viewSpacePos_r - viewSpacePos_c;
    vec3 d = viewSpacePos_c - viewSpacePos_d;
    vec3 u = viewSpacePos_u - viewSpacePos_c;

    // get depth values at 1 & 2 pixels offsets from current along the horizontal axis
    vec4 H = vec4(
        getDepth(vpos + vec2(-1.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2( 1.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(-2.0, 0.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2( 2.0, 0.0) / uTexSize, transparentFlag)
    );

    // get depth values at 1 & 2 pixels offsets from current along the vertical axis
    vec4 V = vec4(
        getDepth(vpos + vec2(0.0,-1.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0, 1.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0,-2.0) / uTexSize, transparentFlag),
        getDepth(vpos + vec2(0.0, 2.0) / uTexSize, transparentFlag)
    );

    // current pixel's depth difference from slope of offset depth samples
    // differs from original article because we're using non-linear depth values
    // see article's comments
    vec2 he = abs((2.0 * H.xy - H.zw) - c);
    vec2 ve = abs((2.0 * V.xy - V.zw) - c);

    // pick horizontal and vertical diff with the smallest depth difference from slopes
    vec3 hDeriv = he.x < he.y ? l : r;
    vec3 vDeriv = ve.x < ve.y ? d : u;

    // get view space normal from the cross product of the best derivatives
    vec3 viewNormal = normalize(cross(hDeriv, vDeriv));

    return viewNormal;
}

float getPixelSize(const in vec2 coords, const in float depth) {
    vec3 viewPos0 = screenSpaceToViewSpace(vec3(coords, depth), uInvProjection);
    vec3 viewPos1 = screenSpaceToViewSpace(vec3(coords + vec2(1.0, 0.0) / uTexSize, depth), uInvProjection);
    return distance(viewPos0, viewPos1);
}

// StarCraft II Ambient Occlusion by [Filion and McNaughton 2008]
void main(void) {
    vec2 invTexSize = 1.0 / uTexSize;
    vec2 selfCoords = gl_FragCoord.xy * invTexSize;
    float selfDepth = getDepth(selfCoords, uTransparencyFlag);
    if (isBackground(selfDepth)) {
        gl_FragColor = vec4(packUnitIntervalToRG(1.0), packUnitIntervalToRG(0.0));
        return;
    }

    vec3 selfViewNormal = viewNormalAtPixelPositionAccurate(selfCoords, uTransparencyFlag);
    vec3 selfViewPos = screenSpaceToViewSpace(vec3(selfCoords, selfDepth), uInvProjection);
    // linear depth for the blur, reversed (the near plane at 1, the far plane and the background at 0): 16-bit fixed
    // point keeps a constant view z precision, unlike the window depth
    vec2 selfPackedDepth = packUnitIntervalToRG(clamp((uFar + selfViewPos.z) / (uFar - uNear), 0.0, 1.0));

    vec3 randomVec = vec3(getKernelRotation(gl_FragCoord.xy), 0.0);
    vec3 tangent = normalize(randomVec - selfViewNormal * dot(randomVec, selfViewNormal));
    vec3 bitangent = cross(selfViewNormal, tangent);
    mat3 TBN = mat3(tangent, bitangent, selfViewNormal);

    float occlusion = 0.0;
    #ifdef dMultiScale
        float pixelSize = getPixelSize(selfCoords, selfDepth);

        for(int l = 0; l < dLevels; l++) {
            // TODO: smooth transition
            if (pixelSize * uNearThreshold > uLevelRadius[l]) continue;
            if (pixelSize * uFarThreshold < uLevelRadius[l]) continue;

            float levelOcclusion = 0.0;
            for(int i = 0; i < dNSamples; i++) {
                // get sample position:
                vec3 sampleViewPos = TBN * uSamples[i];
                sampleViewPos = selfViewPos + sampleViewPos * uLevelRadius[l];

                // project sample position:
                vec4 offset = vec4(sampleViewPos, 1.0);
                offset = uProjection * offset;
                offset.xyz = (offset.xyz / offset.w) * 0.5 + 0.5;
                offset.xy = clampToBounds(offset.xy);

                // get sample depth:
                float sampleOcc = 0.0;
                #ifdef dIllumination
                    if (uTransparencyFlag == 1) {
                #endif
                        float sampleDepth = getMappedDepth(offset.xy, selfCoords);
                        if (!isBackground(sampleDepth)) {
                            float sampleViewZ = screenSpaceToViewSpace(vec3(offset.xy, sampleDepth), uInvProjection).z;
                            sampleOcc = step(sampleViewPos.z + 0.025, sampleViewZ) * smootherstep(0.0, 1.0, uLevelRadius[l] / abs(selfViewPos.z - sampleViewZ)) * uLevelBias[l];
                        }
                #ifdef dIllumination
                    }
                #endif
                #if defined(dIncludeTransparent)
                    vec2 sampleDepthWithAlpha = getMappedDepthTransparentWithAlpha(offset.xy, selfCoords);
                    if (!isBackground(sampleDepthWithAlpha.x))  {
                        float sampleViewZWithAlpha = screenSpaceToViewSpace(vec3(offset.xy, sampleDepthWithAlpha.x), uInvProjection).z;
                        sampleOcc = max(sampleOcc, step(sampleViewPos.z + 0.025, sampleViewZWithAlpha) * smootherstep(0.0, 1.0, uLevelRadius[l] / abs(selfViewPos.z - sampleViewZWithAlpha)) * uLevelBias[l] * sampleDepthWithAlpha.y);
                    }
                #endif

                levelOcclusion += sampleOcc;
            }
            levelOcclusion /= float(dNSamples);
            occlusion = max(occlusion, levelOcclusion);
        }
    #else
        for(int i = 0; i < dNSamples; i++) {
            vec3 sampleViewPos = TBN * uSamples[i];
            sampleViewPos = selfViewPos + sampleViewPos * uRadius;

            vec4 offset = vec4(sampleViewPos, 1.0);
            offset = uProjection * offset;
            offset.xyz = (offset.xyz / offset.w) * 0.5 + 0.5;
            offset.xy = clampToBounds(offset.xy);

            float sampleOcc = 0.0;
            #ifdef dIllumination
                if (uTransparencyFlag == 1) {
            #endif
                    // NOTE: using getMappedDepth here causes issues on some mobile devices
                    float sampleDepth = getDepth(offset.xy, 0);
                    if (!isBackground(sampleDepth)) {
                        float sampleViewZ = screenSpaceToViewSpace(vec3(offset.xy, sampleDepth), uInvProjection).z;
                        sampleOcc = step(sampleViewPos.z + 0.025, sampleViewZ) * smootherstep(0.0, 1.0, uRadius / abs(selfViewPos.z - sampleViewZ));
                    }
            #ifdef dIllumination
                }
            #endif
            #if defined(dIncludeTransparent)
                vec2 sampleDepthWithAlpha = getDepthTransparentWithAlpha(offset.xy);
                if (!isBackground(sampleDepthWithAlpha.x)) {
                    float sampleViewZWithAlpha = screenSpaceToViewSpace(vec3(offset.xy, sampleDepthWithAlpha.x), uInvProjection).z;
                    sampleOcc = max(sampleOcc, step(sampleViewPos.z + 0.025, sampleViewZWithAlpha) * smootherstep(0.0, 1.0, uRadius / abs(selfViewPos.z - sampleViewZWithAlpha)) * sampleDepthWithAlpha.y);
                }
            #endif

            occlusion += sampleOcc;
        }

        occlusion /= float(dNSamples);
    #endif
    occlusion = 1.0 - (uBias * occlusion);

    vec2 packedOcclusion = packUnitIntervalToRG(clamp(occlusion, 0.01, 1.0));

    gl_FragColor = vec4(packedOcclusion, selfPackedDepth);
}
`;var Ku=`
precision highp float;
precision highp int;

${z}
${ct}
${Rt}
${Te}

varying vec2 vTexCoord;

void main(){
    ${rt}
    ${ut}

    float fragmentDepth = gl_FragCoord.z;

    // determine if this is a background or glyph fragment
    bool isBackground = vTexCoord.x > 1.0;

    // discard background for pick/marking/emissive, but keep it in depth
    #if !defined(dRenderVariant_color) && !defined(dRenderVariant_tracing) && !defined(dRenderVariant_depth)
        if (isBackground) discard;
    #endif

    // SDF test for glyph fragments \u2014 discard pixels outside glyph+border
    float rawSdf = 0.0;
    if (!isBackground) {
        rawSdf = texture2D(tFont, vTexCoord).r;
        float sdf = rawSdf + min(uBorderWidth, 0.49); // clamp to avoid exceeding max SDF range
        if (sdf < 0.5) discard;
    }

    #ifdef enabledFragDepth
        gl_FragDepthEXT = fragmentDepth;
    #endif

    // background writes its own opacity into depth alpha; glyphs stay opaque
    #define dHasMaterialOpacity
    float materialOpacity = isBackground ? uBackgroundOpacity : 1.0;
    ${Pt}

    if (isBackground) {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            material = vec4(uBackgroundColor, uBackgroundOpacity * material.a);
        #endif
    } else {
        #if defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
            if (uBorderWidth > 0.0 && rawSdf < 0.5) {
                material.xyz = uBorderColor;
            } else {
                // push text fragments forward in depth so they render in front of border (depth is reversed)
                #ifdef enabledFragDepth
                    gl_FragDepthEXT = fragmentDepth + 0.0001;
                #endif
            }
        #endif
    }

    ${Dt}

    #if defined(dRenderVariant_pick)
        ${lt}
        #ifdef requiredDrawBuffers
            gl_FragColor = vObject;
            gl_FragData[1] = vInstance;
            gl_FragData[2] = vGroup;
            gl_FragData[3] = packDepthToRGBA(fragmentDepth);
        #else
            gl_FragColor = vColor;
        #endif
    #elif defined(dRenderVariant_depth)
        gl_FragColor = material;
    #elif defined(dRenderVariant_marking)
        ${dt}
        gl_FragColor = material;
    #elif defined(dRenderVariant_emissive)
        gl_FragColor = material;
    #elif defined(dRenderVariant_color) || defined(dRenderVariant_tracing)
        gl_FragColor = material;
        ${$e}

        #if defined(dRenderVariant_color)
            ${qe}
            ${Xe}
            ${pt}
        #elif defined(dRenderVariant_tracing)
            gl_FragData[1] = vec4(-normalize(vViewPosition), emissive);
            gl_FragData[2] = vec4(material.rgb, uDensity);
        #endif
    #endif
}
`;var Ju=`
precision highp float;
precision highp int;

${z}
${ke}
${mt}
${_t}
${Te}

varying vec2 vTexCoord;

void main(void){
    int vertexId = VertexID;

    ${yr}
    ${Et}
    ${At}
    ${wt}
    ${Kt}

    vTexCoord = aTexCoord;

    float scale = uModelScale;

    float offsetX = uOffsetX * scale;
    float offsetY = uOffsetY * scale;
    float offsetZ = (uOffsetZ + aDepth * 0.95) * scale;

    vec4 position4 = vec4(aPosition, 1.0);
    vec4 mvPosition = uHasEyeCamera
         ? uModelViewEye * aTransform * position4
         : uModelView * aTransform * position4;

    vModelPosition = (uModel * aTransform * position4).xyz; // for clipping in frag shader

    // TODO
    // #ifdef FIXED_SIZE
    //     if (ortho) {
    //         scale /= pixelRatio * ((uViewport.w / 2.0) / -uCameraPosition.z) * 0.1;
    //     } else {
    //         scale /= pixelRatio * ((uViewport.w / 2.0) / -mvPosition.z) * 0.1;
    //     }
    // #endif

    vec4 mvCenter = vec4(mvPosition.xyz, 1.0);

    if (vTexCoord.x == 10.0) { // indicates background plane
        // move a bit to the back, taking distance to camera into account to avoid z-fighting
        offsetZ -= 0.001 * distance(uCameraPosition, (uProjection * mvCenter).xyz);
    }

    // apply Z offset in view space
    if (!uHasEyeCamera) {
        if (uIsOrtho == 1.0) {
            mvCenter.z += offsetZ;
        } else {
            mvCenter.xyz += normalize(-mvCenter.xyz) * offsetZ;
        }
    }

    if (uHasEyeCamera) {
        mvCenter = uModelView * uInvModelViewEye * mvCenter;
    }

    // project center to clip space
    vec4 clip = uProjection * mvCenter;

    // compute corner offset in screen-space units
    vec2 cornerOffset = aMapping * size * scale;
    cornerOffset.x += offsetX;
    cornerOffset.y += offsetY;

    if (uHasHeadRotation) {
        vec3 rotatedOffset = (uInvHeadRotation * vec4(cornerOffset, 0.0, 0.0)).xyz;
        clip += uProjection * vec4(rotatedOffset, 0.0);
    } else {
        // apply offset in clip space to avoid perspective distortion on the quad
        clip.xy += vec2(uProjection[0][0], uProjection[1][1]) * cornerOffset;
    }

    gl_Position = clip;

    vViewPosition = -mvCenter.xyz;

    ${Lt}
}
`;var Af=/[ \t]*\/\/.*\n/g,wf=/[ \t]*\/\*[\s\S]*?\*\//g,Lf=/\n{2,}/g;function el(e){if(/^\s*#include\b/m.test(e))throw new Error("'#include' is not supported, shader sources compose their chunks in TS");return e.trim().replace(Af,`
`).replace(wf,`
`).replace(Lf,`
`)}var tl=new Map;function re(e,t,r,n={}){tl.set(e,{vert:el(t),frag:el(r),outTypes:n})}function rl(e){let t=tl.get(e);if(!t)throw new Error(`no GLSL sources for program '${e}'`);return t}re("points",Gu,ku);re("spheres",Zu,Xu);re("cylinders",cu,su);re("text",Ju,Ku);re("lines",Eu,_u);re("mesh",Bu,Mu);re("direct-volume",pu,du);re("image",Du,Pu);re("background",Yc,Qc);re("Bloom Luminosity",me,tu);re("Bloom Blur",me,Jc);re("Bloom Composite",me,eu);re("cas",me,ru);re("dof",me,mu);re("blend-back-dpoit",me,Kc);re("evaluate-dpoit",me,fu);re("fxaa",me,gu);re("illumination-compose",me,Cu);re("illumination-multi-sample-compose",me,ba);re("edge",me,Iu);re("dim",me,Lu);re("overlay",me,Ou);re("multi-sample-compose",me,ba);re("outlines",me,Vu);re("postprocessing",me,Uu);re("shadows",me,zu);re("smaa-edges",Hu,Wu);re("smaa-weights",qu,$u);re("smaa-blend",ju,Nu);re("ssao",me,Yu);re("ssao_blur",me,Qu);re("trace",me,Ru);re("trace-accumulate",me,Tu);re("evaluate-wboit",me,hu);re("copy",me,au);re("hi-z",me,xu);re("gaussian-density",bu,yu);re("color-smoothing-accumulate",ou,nu);re("normalize",me,iu);re("reduction",me,vu,{0:"ivec4"});re("sum",me,Su,{0:"ivec4"});re("active-voxels",me,Au);re("isosurface",me,wu);function If(e,t){return t.dLightCount&&(e=e.replace(/dLightCount/g,`${t.dLightCount.ref.value}`)),t.dClipObjectCount&&(e=e.replace(/dClipObjectCount/g,`${t.dClipObjectCount.ref.value}`)),e}function nl(e,t){let r=new Map([["__VERSION__",t]]);for(let n of e.matchAll(/^[ \t]*#define[ \t]+(\w+)(\()?[ \t]*(.*)$/gm)){if(n[2])throw new Error(`function-like macro '${n[1]}' in shader prefix or header`);r.set(n[1],n[3].trim())}return r}function Eo(e,t,r){return Zc(If(e,t),r)}function ol(e,t){if(e===void 0)return"";let r=e.dRenderVariant?.ref.value||"",n=[];for(let o in e){if(t?.(o,r,e))continue;let a=e[o].ref.value;a!==void 0&&(typeof a=="string"?n.push(`#define ${o}_${a}`):typeof a=="number"?n.push(`#define ${o} ${a}`):typeof a=="boolean"?a&&n.push(`#define ${o}`):jt(a))}return n.join(`
`)+`
`}function Of(e,t){let r=["#define emulateVertexId"];if(t.drawBuffers){if(e.drawBuffers)r.push("#define requiredDrawBuffers");else if(t.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(t.multiDraw){if(e.multiDraw)r.push("#extension GL_ANGLE_multi_draw : require"),r.push("#define enabledMultiDraw");else if(t.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}return e.clipControl&&r.push("#define clipZeroToOne"),r.join(`
`)+`
`}function Ff(e,t){let r=["#extension GL_OES_standard_derivatives : enable"];if(t.fragDepth){if(e.fragDepth)r.push("#extension GL_EXT_frag_depth : enable"),r.push("#define enabledFragDepth");else if(t.fragDepth==="required")throw new Error("required 'GL_EXT_frag_depth' extension not available")}if(t.drawBuffers){if(e.drawBuffers)r.push("#extension GL_EXT_draw_buffers : require"),r.push("#define requiredDrawBuffers"),r.push("#define gl_FragColor gl_FragData[0]");else if(t.drawBuffers==="required")throw new Error("required 'GL_EXT_draw_buffers' extension not available")}if(t.shaderTextureLod){if(e.shaderTextureLod)r.push("#extension GL_EXT_shader_texture_lod : enable"),r.push("#define enabledShaderTextureLod");else if(t.shaderTextureLod==="required")throw new Error("required 'GL_EXT_shader_texture_lod' extension not available")}return e.depthTexture&&r.push("#define depthTextureSupport"),e.clipControl&&r.push("#define clipZeroToOne"),r.join(`
`)+`
`}var Mf=`
#define attribute in
#define varying out
#define texture2D texture
`,Bf=`
#define varying in
#define texture2D texture
#define textureCube texture
#define texture2DLodEXT textureLod
#define textureCubeLodEXT textureLod

#define gl_FragColor out_FragData0
#define gl_FragDepthEXT gl_FragDepth
`;function Vf(e,t){let r=["#version 300 es"];if(t.drawBuffers&&e.drawBuffers&&r.push("#define requiredDrawBuffers"),t.multiDraw){if(e.multiDraw)r.push("#extension GL_ANGLE_multi_draw : require"),r.push("#define enabledMultiDraw");else if(t.multiDraw==="required")throw new Error("required 'GL_ANGLE_multi_draw' extension not available")}if(t.clipCullDistance){if(e.clipCullDistance)r.push("#extension GL_ANGLE_clip_cull_distance : enable"),r.push("#define enabledClipCullDistance");else if(t.clipCullDistance==="required")throw new Error("required 'GL_ANGLE_clip_cull_distance' extension not available")}if(t.multiview2){if(e.multiview2)r.push("#extension GL_OVR_multiview2 : require"),r.push("#define enabledMultiview2");else if(t.multiview2==="required")throw new Error("required 'GL_OVR_multiview2' extension not available")}return e.noNonInstancedActiveAttribs||r.push("#define emulateVertexId"),e.clipControl&&r.push("#define clipZeroToOne"),r.push(Mf),r.join(`
`)+`
`}function sl(e){return t=>{if(t==="emulateVertexId")return!e.noNonInstancedActiveAttribs;if(t==="clipZeroToOne")return!!e.clipControl}}function kf(e,t,r,n){let o=["#version 300 es"];if(r.conservativeDepth){if(e.conservativeDepth)o.push("#extension GL_EXT_conservative_depth : enable"),o.push("#define enabledConservativeDepth");else if(r.conservativeDepth==="required")throw new Error("required 'GL_EXT_conservative_depth' extension not available")}if(o.push(`layout(location = 0) out highp ${n[0]||"vec4"} out_FragData0;`),r.fragDepth&&e.fragDepth&&o.push("#define enabledFragDepth"),r.drawBuffers&&e.drawBuffers){o.push("#define requiredDrawBuffers");for(let i=1,a=t.maxDrawBuffers;i<a;++i)o.push(`layout(location = ${i}) out highp ${n[i]||"vec4"} out_FragData${i};`)}return r.shaderTextureLod&&e.shaderTextureLod&&o.push("#define enabledShaderTextureLod"),e.depthTexture&&o.push("#define depthTextureSupport"),e.clipControl&&o.push("#define clipZeroToOne"),o.push(Bf),o.join(`
`)+`
`}function Gf(e){return e.replace(/gl_FragData\[([0-9]+)\]/g,"out_FragData$1")}var Uf=/^[ \t]*uniform\s+((?:highp\s+|mediump\s+|lowp\s+)?\w+)\s+([^;{}]+);/gm;function il(e,t){return e.replace(Uf,(r,n,o)=>{if(n.includes("sampler"))return r;let i=n.replace(/^(highp|mediump|lowp)\s+/,""),a=[];for(let s of o.split(",")){let c=s.trim(),u=t.get(c.replace(/\[[^\]]*\]$/,"").trim());if(u===void 0)a.push(c);else if(u!==i)throw new Error(`uniform '${c}' is declared as '${i}' in the shader but as '${u}' in the schema`)}return a.length===0?"":`uniform ${n} ${a.join(", ")};`})}var zf=/^[ \t]*uniform\s+(?:(?:highp|mediump|lowp)\s+)?(\w*sampler\w+)\s+(\w+)\s*;/gm;function al(e,t){return e.replace(zf,(r,n,o)=>{let i=t.get(o);if(i===void 0)return r;if(!i.includes(n))throw new Error(`sampler '${o}' is declared as '${n}' in the shader, expected one of '${i}'`);return""})}var Nf=/^[ \t]*attribute\s+(?:(?:highp|mediump|lowp)\s+)?(\w+)\s+(\w+)\s*;/gm;function jf(e,t){return e.replace(Nf,(r,n,o)=>{let i=t.get(o);if(i===void 0)return r;if(i!==n)throw new Error(`attribute '${o}' is declared as '${n}' in the shader but as '${i}' in the schema`);return""})}function cl(e,t,r,n,o,i){let a=rl(o.name),s=ol(n,o.ignoreDefine),c=ol(n,o.ignoreDefine),u=A(e)?Vf(t,o.extensions):Of(t,o.extensions),l=A(e)?kf(t,r,o.extensions,a.outTypes):Ff(t,o.extensions),d=A(e)?"300":"100",m=nl(`${u}${s}`,d),f=nl(`${l}${c}`,d),h=Eo(a.vert,n,m),g=Eo(A(e)?Gf(a.frag):a.frag,n,f);if(i){let{uniformTypes:T,samplerTypes:b,attributeTypes:D}=i,P=Eo(i.vert,n,m),F=Eo(i.frag,n,f);h=il(al(h,b),T),h=`${P}
${jf(h,D)}`,g=`${F}
${il(al(g,b),T)}`}return{vert:`${u}${s}${h}`,frag:`${l}${c}${g}`}}function dl(e,t){switch(t){case"b":case"b[]":return e.BOOL;case"f":case"f[]":return e.FLOAT;case"i":case"i[]":return e.INT;case"v2":case"v2[]":return e.FLOAT_VEC2;case"v3":case"v3[]":return e.FLOAT_VEC3;case"v4":case"v4[]":return e.FLOAT_VEC4;case"q":case"q[]":return e.FLOAT_VEC4;case"iv2":case"iv2[]":return e.INT_VEC2;case"iv3":case"iv3[]":return e.INT_VEC3;case"iv4":case"iv4[]":return e.INT_VEC4;case"m3":case"m3[]":return e.FLOAT_MAT3;case"m4":case"m4[]":return e.FLOAT_MAT4;default:console.error(`unknown uniform kind '${t}'`)}}function Wf(e,t,r){e.uniform1f(t,r)}function Hf(e,t,r){e.uniform1fv(t,r)}function $f(e,t,r){e.uniform1i(t,r)}function qf(e,t,r){e.uniform1iv(t,r)}function Xf(e,t,r){e.uniform2fv(t,r)}function Zf(e,t,r){e.uniform3fv(t,r)}function ul(e,t,r){e.uniform4fv(t,r)}function Qf(e,t,r){e.uniform2iv(t,r)}function Yf(e,t,r){e.uniform3iv(t,r)}function Kf(e,t,r){e.uniform4iv(t,r)}function Jf(e,t,r){e.uniformMatrix3fv(t,!1,r)}function eh(e,t,r){e.uniformMatrix4fv(t,!1,r)}function ll(e){switch(e){case"f":return Wf;case"f[]":return Hf;case"i":case"t":case"b":return $f;case"i[]":case"t[]":case"b[]":return qf;case"v2":case"v2[]":return Xf;case"v3":case"v3[]":return Zf;case"v4":case"v4[]":return ul;case"q":case"q[]":return ul;case"iv2":case"iv2[]":return Qf;case"iv3":case"iv3[]":return Yf;case"iv4":case"iv4[]":return Kf;case"m3":case"m3[]":return Jf;case"m4":case"m4[]":return eh}}function pl(e){let t={};return Object.keys(e).forEach(r=>{let n=e[r];n.type==="uniform"?t[r]=ll(n.kind):n.type==="texture"&&(t[r]=ll("t"))}),t}function Ao(e){switch(e){case"f":return"float";case"i":return"int";case"t":return"sampler2D";case"b":return"bool";case"v2":return"vec2";case"v3":return"vec3";case"v4":return"vec4";case"iv2":return"ivec2";case"iv3":return"ivec3";case"iv4":return"ivec4";case"q":return"vec4";case"m3":return"mat3";case"m4":return"mat4"}throw new Error(`${e} has no primitive GLSL type.`)}function ml(e){return e.endsWith("[]")}function fl(e){switch(e){case"f":case"i":case"b":return!0;default:return!1}}function hl(e){let t={};return Object.keys(e).forEach(r=>{t[r]=I.create(Wn(e[r].ref.value))}),t}var br={global:{name:"Global",bindingIndex:0},material:{name:"Material",bindingIndex:1},object:{name:"Object",bindingIndex:2}},Xr=["global","material","object"];function wr(e,t){return Math.ceil(e/t)*t}function Zr(e){return e.endsWith("[]")?e.slice(0,-2):e}function th(e){switch(e){case"f":case"i":case"b":return[4,4];case"v2":case"iv2":return[8,8];case"v3":case"iv3":return[16,12];case"v4":case"iv4":case"q":return[16,16];case"m3":return[16,48];case"m4":return[16,64];default:throw new Error(`unsupported uniform block member kind '${e}'`)}}function rh(e){switch(e){case"f":case"i":case"b":return 1;case"v2":case"iv2":return 2;case"v3":case"iv3":return 3;case"v4":case"iv4":case"q":return 4;case"m3":return 9;case"m4":return 16;default:throw new Error(`unsupported uniform block member kind '${e}'`)}}function It(e,t){let r=gl.get(t);if(r===void 0&&(r=new Map,gl.set(t,r)),r.has(e))return r.get(e);let n=nh(e,t);return r.set(e,n),n}var gl=new WeakMap;function nh(e,t){if(e==="global"&&t!==sa){if(!Object.keys(t).some(a=>{let s=t[a];return s.type==="uniform"&&s.block==="global"}))return;t=sa}let r=oh(e,t);if(r===void 0)return;let{members:n,size:o}=r;return{block:e,members:n,size:o,hash:`${e}|${n.map(i=>`${i.name}:${i.kind}${i.length?i.length:""}`).join(",")}`}}function oh(e,t){let r=[],n=0;for(let o of Object.keys(t)){let i=t[o];if(i.type!=="uniform"||i.block!==e)continue;let[a,s]=th(Zr(i.kind));if(i.length!==void 0){let c=wr(s,16);n=wr(n,16),r.push({name:o,kind:i.kind,offset:n,length:i.length,stride:c}),n+=c*i.length}else n=wr(n,a),r.push({name:o,kind:i.kind,offset:n,length:0,stride:0}),n+=s}if(r.length!==0)return{members:r,size:wr(n,16)}}function wo(e){if(!(e.type!=="uniform"||e.block===void 0||e.block==="draw"))return e.block}function bl(e,t){let r={global:[],material:[],object:[]};for(let n of Object.keys(e)){let o=e[n];if(o.type!=="texture"||t&&!ir(o,t))continue;let a=Ys[n]===o?r.global:o.variant==="material"?r.material:r.object;a.push({name:n,binding:a.length+1,dimension:Qn(o,t),sampleType:o.sampleType,filter:o.filter})}return{global:{uniforms:It("global",e),textures:r.global},material:{uniforms:It("material",e),textures:r.material},object:{uniforms:It("object",e),textures:r.object}}}function xa(e,t,r){return{f32:new Float32Array(e,t,r/4),i32:new Int32Array(e,t,r/4)}}function yl(e,t,r,n,o,i){switch(r){case"f":e[n]=o[i];break;case"i":t[n]=o[i];break;case"b":t[n]=o[i]?1:0;break;case"v2":e[n]=o[i],e[n+1]=o[i+1];break;case"v3":e[n]=o[i],e[n+1]=o[i+1],e[n+2]=o[i+2];break;case"v4":case"q":e[n]=o[i],e[n+1]=o[i+1],e[n+2]=o[i+2],e[n+3]=o[i+3];break;case"iv2":t[n]=o[i],t[n+1]=o[i+1];break;case"iv3":t[n]=o[i],t[n+1]=o[i+1],t[n+2]=o[i+2];break;case"iv4":t[n]=o[i],t[n+1]=o[i+1],t[n+2]=o[i+2],t[n+3]=o[i+3];break;case"m3":for(let a=0;a<3;++a)e[n+a*4]=o[i+a*3],e[n+a*4+1]=o[i+a*3+1],e[n+a*4+2]=o[i+a*3+2];break;case"m4":for(let a=0;a<16;++a)e[n+a]=o[i+a];break}}function ih(e,{f32:t,i32:r}){let n=e.offset>>2;if(e.length){let o=Zr(e.kind),i=rh(o),a=e.stride>>2,{length:s}=e;return c=>{let u=Math.min(s,Math.floor(c.length/i));for(let l=0;l<u;++l)yl(t,r,o,n+l*a,c,l*i)}}switch(e.kind){case"f":return o=>{t[n]=o};case"i":return o=>{r[n]=o};case"b":return o=>{r[n]=o?1:0};default:return o=>yl(t,r,e.kind,n,o,0)}}function va(e,t,r,n){let o=new Map;for(let m of e.members)o.set(m.name,m);let i=[],a=[];for(let m=0,f=r.length;m<f;++m){let[h,g]=r[m];if(!g)continue;let T=o.get(h);T!==void 0&&(i.push(g),a.push(ih(T,t)))}let s=i.length,c=new Int32Array(s).fill(-1),u={changed:!0};for(let m of i)I.observe(m,u);let l=i.some(m=>m.volatile);return Object.assign(()=>{if(!u.changed&&!l)return;u.changed=!1;let m=!1;for(let f=0;f<s;++f){let h=i[f].ref;h.version!==c[f]&&(a[f](h.value),c[f]=h.version,m=!0)}m&&n()},{dispose:()=>{for(let m of i)I.unobserve(m,u)}})}function Qr(e){let t=xl.get(e);return t===void 0&&(t=ah(e),xl.set(e,t)),t}var xl=new WeakMap;function ah(e){let t=[];for(let a of Object.keys(e)){let s=e[a];s.type==="attribute"&&t.push([a,s])}let r=t.findIndex(([,a])=>!a.usedIf&&a.divisor===0);r===-1&&(r=t.findIndex(([,a])=>!a.usedIf)),r>0&&t.unshift(...t.splice(r,1));let n=[],o={},i=0;for(let[a,s]of t){let c=s.itemSize===16?4:1,u={name:a,kind:s.kind,itemSize:s.itemSize,divisor:s.divisor,location:i,locationCount:c};n.push(u),o[a]=u,i+=c}return{entries:n,byName:o,size:i,hash:n.map(a=>`${a.name}:${a.location}`).join(",")}}function sh(e){let t=[`layout(std140) uniform ${br[e.block].name} {`];for(let r of e.members){let n=Ao(Zr(r.kind));t.push(r.length?`    ${n} ${r.name}[${r.length}];`:`    ${n} ${r.name};`)}return t.push("};"),t.join(`
`)}function ch(e,t){let r=t?uh:lh;if(r.has(e))return r.get(e);let n=["precision highp float;","precision highp int;"],o=new Map;if(t)for(let a of Xr){let s=It(a,e);if(s){n.push(sh(s));for(let c of s.members)o.set(c.name,Ao(Zr(c.kind)))}}for(let a of Object.keys(e)){let s=e[a];if(s.type!=="uniform"||s.kind==="t"||t&&wo(s)!==void 0)continue;let c=Ao(Zr(s.kind));if(!s.kind.endsWith("[]"))n.push(`uniform ${c} ${a};`);else if(s.lengthDefine!==void 0)n.push(`#if ${s.lengthDefine} > 0`,`uniform ${c} ${a}[${s.lengthDefine}];`,"#endif");else if(s.length!==void 0)n.push(`uniform ${c} ${a}[${s.length}];`);else continue;o.set(a,c)}let i=o.size>0?{code:n.join(`
`),types:o}:void 0;return r.set(e,i),i}var uh=new WeakMap,lh=new WeakMap;function vl(e,t,r){if(t==="3d"&&!r)return;let n=t==="2d"?"sampler2D":t==="3d"?"sampler3D":"samplerCube";return r?e==="sint"?`i${n}`:e==="uint"?`u${n}`:n:n}function dh(e){switch(e){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4";case 16:return"mat4"}}function Lo(e,t,r,n=t){let o=[],i=`${t}|${n}`;for(let h of Object.keys(e)){let g=e[h];if(g.type!=="texture")continue;let T=typeof g.dimension=="string"?[g.dimension]:aa,b=typeof g.dimension=="string"?g.dimension:aa.find(F=>r(`${g.dimension.define}_${F}`));typeof g.dimension!="string"&&(i+=`|${h}:${b}`);let D=b&&vl(g.sampleType,b,t);if(!D)continue;let P=new Set;for(let F of T)for(let B of[!0,!1]){let V=vl(g.sampleType,F,B);V&&P.add(V)}o.push([h,D,Array.from(P)])}let a=Sl.get(e);a||(a=new Map,Sl.set(e,a));let s=a.get(i);if(s)return s;let c=ch(e,t&&n),u=c?[c.code]:[],l=new Map;for(let[h,g,T]of o)u.push(`uniform highp ${g} ${h};`),l.set(h,T);let d=[],m=new Map;for(let{name:h,itemSize:g,location:T}of Qr(e).entries){let b=dh(g);d.push(t?`layout(location = ${T}) in ${b} ${h};`:`attribute ${b} ${h};`),m.set(h,b)}let f={vert:[...u,...d].join(`
`),frag:u.join(`
`),uniformTypes:c?.types??new Map,samplerTypes:l,attributeTypes:m};return a.set(i,f),f}var Sl=new WeakMap;function Be(e){e.inRenderPass&&e.onRenderPassEnd?.(),e.inRenderPass=!1}function Io(e,t){if(N&&!e.inRenderPass)throw new Error(`${t} outside of a render pass, call 'beginRenderPass' first`)}var Tl=Fe();function ph(e,t){switch(t){case e.FRAMEBUFFER_COMPLETE:return"complete";case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"incomplete attachment";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"incomplete missing attachment";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"incomplete dimensions";case e.FRAMEBUFFER_UNSUPPORTED:return"unsupported"}if(A(e))switch(t){case e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"incomplete multisample";case e.RENDERBUFFER_SAMPLES:return"renderbuffer samples"}return"unknown error"}function Yr(e,t){let r=e.checkFramebufferStatus(e.FRAMEBUFFER);if(r!==e.FRAMEBUFFER_COMPLETE){let n=ph(e,r);throw new Error(`Framebuffer status: ${n}${t?` (${t})`:""}`)}}function mh(e){let t=e.createFramebuffer();if(t===null)throw new Error("Could not create WebGL framebuffer");return t}var Cl=new WeakMap;function Oo(e,t){Cl.set(e,t)}function Fo(e){return Cl.get(e)?.()??0}var Sa=new WeakSet;function Ta(e,t){let r=e.getParameter(e.FRAMEBUFFER_BINDING);r&&(t?Sa.add(r):Sa.delete(r))}function Rl(e){let t=e.getParameter(e.FRAMEBUFFER_BINDING);return!!t&&Sa.has(t)}function fh(e,t){let{drawBuffers:r}=e;if(!r){if(t>1)throw new Error("multiple draw buffers not supported");return}let n=[];for(let o=0;o<t;++o)n.push(r.COLOR_ATTACHMENT0+o);r.drawBuffers(n)}function Pl(e,t,r){let n=mh(e),o=!1;return{id:Tl(),bind:()=>e.bindFramebuffer(e.FRAMEBUFFER,n),setDrawBuffers:i=>{Be(r),e.bindFramebuffer(e.FRAMEBUFFER,n),fh(t,i)},destroy:()=>{o||(e.deleteFramebuffer(n),o=!0)}}}function Dl(){return{id:Tl(),bind:()=>{},setDrawBuffers:()=>{},destroy:()=>{}}}function hh(e,t){switch(t){case"image-uint8":return e.TEXTURE_2D;case"image-float32":return e.TEXTURE_2D;case"image-float16":return e.TEXTURE_2D;case"image-depth":return e.TEXTURE_2D}if(A(e))switch(t){case"image-int32":return e.TEXTURE_2D;case"volume-uint8":return e.TEXTURE_3D;case"volume-float32":return e.TEXTURE_3D;case"volume-float16":return e.TEXTURE_3D}throw new Error(`unknown texture kind '${t}'`)}function Bo(e,t,r){switch(t){case"r":return A(e)?r==="int"?e.RED_INTEGER:e.RED:e.LUMINANCE;case"rg":if(A(e)&&(r==="float"||r==="fp16"))return e.RG;if(A(e)&&r==="int")return e.RG_INTEGER;throw new Error('texture format "rg" requires webgl2 and type "float" or int"');case"rgba":return A(e)&&r==="int"?e.RGBA_INTEGER:e.RGBA;case"depth":return e.DEPTH_COMPONENT;case"depth-stencil":return e.DEPTH_STENCIL}}function gh(e,t,r){if(A(e))switch(t){case"r":switch(r){case"ubyte":return e.R8;case"float":return e.R32F;case"fp16":return e.R16F;case"int":return e.R32I}case"rg":switch(r){case"ubyte":return e.RG;case"float":return e.RG32F;case"fp16":return e.RG16F;case"int":return e.RG32I}case"rgba":switch(r){case"ubyte":return e.RGBA;case"float":return e.RGBA32F;case"fp16":return e.RGBA16F;case"int":return e.RGBA32I}case"depth":switch(r){case"ushort":return e.DEPTH_COMPONENT16;case"float":return e.DEPTH_COMPONENT32F}break;case"depth-stencil":switch(r){case"float-stencil":return e.DEPTH32F_STENCIL8;case"uint24-8":return e.DEPTH24_STENCIL8}break}return Bo(e,t,r)}function wl(e,t,r,n,o){return Yn(e,t)*r*n*(o||1)}function Ca(e,t,r){switch(r){case"ubyte":return e.UNSIGNED_BYTE;case"ushort":return e.UNSIGNED_SHORT;case"float":return e.FLOAT;case"fp16":if(t.textureHalfFloat)return t.textureHalfFloat.HALF_FLOAT;throw new Error('extension "texture_half_float" unavailable');case"int":if(A(e))return e.INT;throw new Error('texture type "int" requires webgl2');case"float-stencil":if(A(e))return e.FLOAT_32_UNSIGNED_INT_24_8_REV;throw new Error('texture type "float-stencil" requires webgl2');case"uint24-8":if(t.depthTexture)return t.depthTexture.UNSIGNED_INT_24_8;throw new Error('extension "depth_texture" unavailable')}}function _l(e,t){switch(t){case"nearest":return e.NEAREST;case"linear":return e.LINEAR}}function Mo(e,t,r){switch(r){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":case 0:return e.COLOR_ATTACHMENT0}if(t.drawBuffers)switch(r){case"color1":case 1:return t.drawBuffers.COLOR_ATTACHMENT1;case"color2":case 2:return t.drawBuffers.COLOR_ATTACHMENT2;case"color3":case 3:return t.drawBuffers.COLOR_ATTACHMENT3;case"color4":case 4:return t.drawBuffers.COLOR_ATTACHMENT4;case"color5":case 5:return t.drawBuffers.COLOR_ATTACHMENT5;case"color6":case 6:return t.drawBuffers.COLOR_ATTACHMENT6;case"color7":case 7:return t.drawBuffers.COLOR_ATTACHMENT7}throw new Error("unknown texture attachment")}function El(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement}function yh(e,t,r){return t===r.TEXTURE_2D}function Al(e,t,r){return t===r.TEXTURE_3D}var Ll=new WeakSet;function Ra(e){return Ll.add(e),e}function bh(e){return Ll.has(e)}function Vo(e){if(!bh(e))throw new Error("expected a WebGL texture, got a texture of another backend");return e}function xh(e){let t=e.createTexture();if(t===null)throw new Error("Could not create WebGL texture");return t}function Il(e,t,r,n,o,i,a){let s=ca(),c=xh(e);if(!A(e)&&(n==="depth"||n==="depth-stencil")&&(o==="float"?o="ushort":o==="float-stencil"&&(o="uint24-8")),r.endsWith("float32")&&o!=="float"||r.endsWith("float16")&&o!=="fp16"||r.endsWith("uint8")&&o!=="ubyte"||r.endsWith("int32")&&o!=="int"||r.endsWith("depth")&&o!=="ushort"&&o!=="float"&&o!=="float-stencil"&&o!=="uint24-8")throw new Error(`texture kind '${r}' and type '${o}' are incompatible`);if(!t.depthTexture&&(n==="depth"||n==="depth-stencil"))throw new Error("extension 'WEBGL_depth_texture' needed for 'depth' texture format");let u=hh(e,r),l=_l(e,i),d=Bo(e,n,o),m=gh(e,n,o),f=Ca(e,t,o);function h(){a.currentRenderItemId=-1}function g(){h(),e.bindTexture(u,c),e.texParameteri(u,e.TEXTURE_MAG_FILTER,l),e.texParameteri(u,e.TEXTURE_MIN_FILTER,l),e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(u,null)}g();let T=0,b=0,D=0,P=!1,F,B=!1,V=null;function W(C,O,M){if(C===0||O===0||A(e)&&u===e.TEXTURE_3D&&M===0)throw new Error("empty textures are not allowed");if(!(T===C&&b===O&&D===(M||0)))if(F=void 0,T=C,b=O,D=M||0,h(),e.bindTexture(u,c),u===e.TEXTURE_2D)e.texImage2D(u,0,m,T,b,0,d,f,null);else if(A(e)&&u===e.TEXTURE_3D&&D!==void 0)e.texImage3D(u,0,m,T,b,D,0,d,f,null);else throw new Error("unknown texture target")}W(1,1,A(e)&&u===e.TEXTURE_3D?1:0);function K(C,O=!1){if(C.width===0||C.height===0||!El(C)&&A(e)&&Al(C,u,e)&&C.depth===0)throw new Error("empty textures are not allowed");if(h(),e.bindTexture(u,c),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),El(C))T=C.width,b=C.height,e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,m,d,f,C);else if(yh(C,u,e)){let M=C.filter?_l(e,C.filter):l;e.texParameteri(u,e.TEXTURE_MAG_FILTER,M),e.texParameteri(u,e.TEXTURE_MIN_FILTER,M),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!!C.flipY),O?e.texSubImage2D(u,0,0,0,C.width,C.height,d,f,C.array):(T=C.width,b=C.height,e.texImage2D(u,0,m,T,b,0,d,f,C.array))}else if(A(e)&&Al(C,u,e))e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),O?e.texSubImage3D(u,0,0,0,0,C.width,C.height,C.depth,d,f,C.array):(T=C.width,b=C.height,D=C.depth,e.texImage3D(u,0,m,T,b,D,0,d,f,C.array));else throw new Error("unknown texture target");e.bindTexture(u,null),F=O?void 0:C}function ae(){if(u!==e.TEXTURE_2D)throw new Error("mipmap only supported for 2d textures");(A(e)||gn(T)&&gn(b))&&(h(),e.bindTexture(u,c),e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(u),e.bindTexture(u,null),P=!0)}function ge(C){return n==="depth-stencil"&&C==="depth"?"depth-stencil":C}function y(C,O,M){let X=ge(O);if(Be(a),C.bind(),X==="depth-stencil"&&e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,null),u===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,Mo(e,t,X),e.TEXTURE_2D,c,0);else if(A(e)&&u===e.TEXTURE_3D){if(M===void 0)throw new Error("need `layer` to attach 3D texture");e.framebufferTextureLayer(e.FRAMEBUFFER,Mo(e,t,X),c,0,M)}else throw new Error("unknown/unsupported texture target");(X===0||X==="color0")&&Ta(e,o==="int"),Oo(C,()=>b)}return{id:s,target:u,format:d,internalFormat:m,type:f,filter:l,getWidth:()=>T,getHeight:()=>b,getDepth:()=>D,getByteCount:()=>wl(n,o,T,b,D),define:W,load:K,mipmap:ae,getSource:()=>({kind:r,format:n,type:o,filter:i,data:F,mipmap:P}),bind:C=>{e.activeTexture(e.TEXTURE0+C),e.bindTexture(u,c)},unbind:C=>{e.activeTexture(e.TEXTURE0+C),e.bindTexture(u,null)},attachFramebuffer:y,detachFramebuffer:(C,O)=>{let M=ge(O);if(Be(a),C.bind(),u===e.TEXTURE_2D)e.framebufferTexture2D(e.FRAMEBUFFER,Mo(e,t,M),e.TEXTURE_2D,null,0);else if(A(e)&&u===e.TEXTURE_3D)e.framebufferTextureLayer(e.FRAMEBUFFER,Mo(e,t,M),null,0,0);else throw new Error("unknown texture target");(M===0||M==="color0")&&Ta(e,!1)},copyFromFramebuffer:(C,O,M,X,Y,ve,J)=>{if(u!==e.TEXTURE_2D)throw new Error("copy only supported for 2d textures");let w=Fo(C)-M-Y,H=b-J-Y;if(Be(a),C.bind(),A(e)){V?e.bindFramebuffer(e.DRAW_FRAMEBUFFER,V):(V=e.createFramebuffer(),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,V),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0));let G=e.isEnabled(e.SCISSOR_TEST);G&&e.disable(e.SCISSOR_TEST),e.blitFramebuffer(O,w,O+X,w+Y,ve,H,ve+X,H+Y,e.COLOR_BUFFER_BIT,e.NEAREST),G&&e.enable(e.SCISSOR_TEST),C.bind()}else h(),e.activeTexture(e.TEXTURE0),e.bindTexture(u,c),e.copyTexSubImage2D(u,0,ve,H,O,w,X,Y),e.bindTexture(u,null)},destroy:()=>{B||(e.deleteTexture(c),V&&e.deleteFramebuffer(V),B=!0)}}}function Pa(e,t,r){let{resources:n}=e,o=[];return Object.keys(t).forEach(i=>{let a=t[i];if(a.type==="texture"){let s=r[i];if(s)if(a.kind==="texture")o[o.length]=[i,s.ref.value];else{let c=n.texture(a.kind,a.format,a.dataType,a.filter);c.load(s.ref.value),o[o.length]=[i,c]}}}),o}function vh(e,t){switch(t){case"nx":return e.TEXTURE_CUBE_MAP_NEGATIVE_X;case"ny":return e.TEXTURE_CUBE_MAP_NEGATIVE_Y;case"nz":return e.TEXTURE_CUBE_MAP_NEGATIVE_Z;case"px":return e.TEXTURE_CUBE_MAP_POSITIVE_X;case"py":return e.TEXTURE_CUBE_MAP_POSITIVE_Y;case"pz":return e.TEXTURE_CUBE_MAP_POSITIVE_Z}}function Ol(e,t,r,n){let o=e.TEXTURE_CUBE_MAP,i=e.LINEAR,a=e.RGBA,s=e.RGBA,c=e.UNSIGNED_BYTE,u=0,l=e.createTexture();e.bindTexture(o,l);function d(g,T,b,D){u===0&&(u=b.width),e.bindTexture(o,l),e.texImage2D(g,T,a,u,u,0,s,c,null),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.bindTexture(o,l),e.texImage2D(g,T,a,s,c,b),f+=1,f===6&&(h||(r?(e.texParameteri(o,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.generateMipmap(o)):e.texParameteri(o,e.TEXTURE_MIN_FILTER,i),e.texParameteri(o,e.TEXTURE_MAG_FILTER,i)),D||n?.(h))}let m=[],f=0;ot(t,(g,T)=>{if(!g)return;let b=0,D=vh(e,T),P=new Image;g instanceof File?P.src=URL.createObjectURL(g):Ps(g)?g.then(F=>{P.src=URL.createObjectURL(F)}):P.src=g,m.push({cubeTarget:D,level:b,image:P}),P.addEventListener("load",()=>{d(D,b,P,!1)}),P.addEventListener("error",()=>{n?.(!0)})});let h=!1;return{id:ca(),target:o,format:s,internalFormat:a,type:c,filter:i,getWidth:()=>u,getHeight:()=>u,getDepth:()=>0,getByteCount:()=>wl("rgba","ubyte",u,u,0)*6*(r?2:1),define:()=>{},load:()=>{},mipmap:()=>{},bind:g=>{e.activeTexture(e.TEXTURE0+g),e.bindTexture(o,l)},unbind:g=>{e.activeTexture(e.TEXTURE0+g),e.bindTexture(o,null)},attachFramebuffer:()=>{},detachFramebuffer:()=>{},copyFromFramebuffer:()=>{throw new Error("copy not supported for cube textures")},destroy:()=>{h||(e.deleteTexture(l),h=!0)}}}var Fl=Fe();function Sh(e,t){switch(t){case"static":return e.STATIC_DRAW;case"dynamic":return e.DYNAMIC_DRAW;case"stream":return e.STREAM_DRAW;default:jt(t)}}function Th(e,t){if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int32Array)return e.INT;if(t instanceof Float32Array)return e.FLOAT;jt(t)}function Ch(e,t){switch(t){case"attribute":return e.ARRAY_BUFFER;case"elements":return e.ELEMENT_ARRAY_BUFFER;case"uniform":if(A(e))return e.UNIFORM_BUFFER;throw new Error("WebGL2 is required for uniform buffers");case"pixel-pack":if(A(e))return e.PIXEL_PACK_BUFFER;throw new Error("WebGL2 is required for pixel-pack buffers")}}function Ml(e){let t=e.createBuffer();if(t===null)throw new Error("Could not create WebGL buffer");return t}function Bl(e,t,r,n){let o=Ml(e),i=Sh(e,r),a=Ch(e,n),s=Th(e,t),c=t.BYTES_PER_ELEMENT,u=t.length;function l(m){e.bindBuffer(a,o),e.bufferData(a,m,i)}l(t);let d=!1;return{id:Fl(),_usageHint:i,_bufferType:a,_dataType:s,_bpe:c,length:u,getByteCount:()=>c*u,getBuffer:()=>o,updateData:l,updateSubData:(m,f,h)=>{e.bindBuffer(a,o),h-f===m.length?e.bufferSubData(a,0,m):e.bufferSubData(a,f*c,m.subarray(f,f+h))},destroy:()=>{d||(e.deleteBuffer(o),d=!0)}}}function Vl(e,t,r){switch(t){case"float32":switch(r){case 1:return e.FLOAT;case 2:return e.FLOAT_VEC2;case 3:return e.FLOAT_VEC3;case 4:return e.FLOAT_VEC4;case 16:return e.FLOAT_MAT4}default:jt(t)}}function kl(e,t,r,n,o,i,a="static"){let{instancedArrays:s}=r,c=Bl(e,n,a,"attribute"),{_bufferType:u,_dataType:l,_bpe:d}=c;return{...c,itemSize:o,divisor:i,bind:m=>{if(e.bindBuffer(u,c.getBuffer()),o===16)for(let f=0;f<4;++f)t.enableVertexAttrib(m+f),e.vertexAttribPointer(m+f,4,l,!1,16*d,f*4*d),s.vertexAttribDivisor(m+f,i);else t.enableVertexAttrib(m),e.vertexAttribPointer(m,o,l,!1,0,0),s.vertexAttribDivisor(m,i)},changeOffset:(m,f)=>{let h=f*d*o;if(e.bindBuffer(u,c.getBuffer()),o===16)for(let g=0;g<4;++g)e.vertexAttribPointer(m+g,4,l,!1,16*d,g*4*d+h);else e.vertexAttribPointer(m,o,l,!1,0,h)}}}function ko(e,t,r){e.clearVertexAttribsState();for(let n=0,o=r.length;n<o;++n){let[i,a]=r[n],s=t.byName[i];if(N&&(a.itemSize!==s?.itemSize||a.divisor!==s.divisor))throw new Error(`attribute '${i}' buffer (itemSize ${a.itemSize}, divisor ${a.divisor}) does not match the layout (itemSize ${s?.itemSize}, divisor ${s?.divisor})`);a.bind(s.location)}e.disableUnusedVertexAttribs()}function Gl(e,t,r,n){let o=[];return Object.keys(t).forEach(i=>{let a=t[i];a.type==="attribute"&&ir(a,n)&&(o[o.length]=[i,e.resources.attribute(r[i].ref.value,a.itemSize,a.divisor)])}),o}function Ul(e,t,r="static"){let n=Bl(e,t,r,"elements");return{...n,bind:()=>{e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.getBuffer())}}}function zl(e,t,r,n){let o=Ml(e),i=Ca(e,t,n),a=Bo(e,r,n),s=Yn(r,n),c=0,u=0;function l(f,h,g,T){c=g,u=T,e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.bufferData(e.PIXEL_PACK_BUFFER,g*T*s,e.STREAM_READ),e.readPixels(f,h,g,T,a,i,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}function d(f){e.bindBuffer(e.PIXEL_PACK_BUFFER,o),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,f),e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}let m=!1;return{id:Fl(),_type:i,_format:a,_bpe:s,getByteCount:()=>s*c*u,read:l,getSubData:d,destroy:()=>{m||(e.deleteBuffer(o),m=!0)}}}var Rh=Fe();function Ph(e,t,r,n){let o={};return Object.keys(r).forEach(i=>{let a=r[i];if(a.type==="uniform"){if(n&&wo(a)!==void 0)return;let s=e.getUniformLocation(t,i);s===null&&ml(a.kind)&&(s=e.getUniformLocation(t,i+"[0]")),o[i]=s}else if(a.type==="texture"){let s=e.getUniformLocation(t,i);o[i]=s}}),o}function Dh(e,t,r,n){let o=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<o;++i){let a=e.getActiveAttrib(t,i);if(a){let{name:s,type:c}=a;if(s.startsWith("__activeAttribute")||s==="gl_InstanceID"||s==="gl_VertexID"||s==="gl_DrawID"||s==="gl_ViewID_OVR")continue;let u=r[s];if(u===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${s}' in schema`);if(u.type!=="attribute")throw new Error(`'${s}' must be of type 'attribute' but is '${u.type}'`);let l=Vl(e,u.kind,u.itemSize);if(l!==c)throw new Error(`unexpected attribute type '${l}' for ${s}, expected '${c}'`);if(!ir(u,n))throw new Error(`attribute '${s}' is used, but its spec 'usedIf' condition does not hold`)}}}function _h(e,t,r,n){let o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<o;++i){let a=e.getActiveUniform(t,i);if(a){let{name:s,type:c}=a;if(s.startsWith("__activeUniform")||s==="gl_InstanceID"||s==="gl_VertexID"||s==="gl_DrawID"||s==="gl_ViewID_OVR")continue;let u=s.replace(/[[0-9]+\]$/,""),l=r[u];if(l===void 0)throw new Error(`missing 'uniform' or 'texture' with name '${s}' in schema`);if(l.type==="uniform"){if(dl(e,l.kind)!==c)throw new Error(`unexpected uniform type for ${s}`)}else if(l.type==="texture"){let d=Ah(e,Qn(l,n));if(Hl(e,c)!==d)throw new Error(`sampler type of '${s}' does not match the spec dimension`);let m=l.sampleType==="sint"||l.sampleType==="uint";if(A(e)&&$l(e,c)!==m)throw new Error(`sampler type of '${s}' does not match the spec sample type '${l.sampleType}'`);if(!ir(l,n))throw new Error(`texture '${s}' is used, but its spec 'usedIf' condition does not hold`)}else throw new Error(`'${s}' must be of type 'uniform' or 'texture' but is '${l.type}'`)}}}function Eh(e,t,r){let n={},o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<o;++i){let a=e.getActiveUniform(t,i);a&&r[a.name]?.type==="texture"&&(n[a.name]=a.type)}return n}function Hl(e,t){if(t===e.SAMPLER_2D)return e.TEXTURE_2D;if(t===e.SAMPLER_CUBE)return e.TEXTURE_CUBE_MAP;if(A(e))switch(t){case e.INT_SAMPLER_2D:case e.UNSIGNED_INT_SAMPLER_2D:case e.SAMPLER_2D_SHADOW:return e.TEXTURE_2D;case e.SAMPLER_3D:case e.INT_SAMPLER_3D:case e.UNSIGNED_INT_SAMPLER_3D:return e.TEXTURE_3D;case e.INT_SAMPLER_CUBE:case e.UNSIGNED_INT_SAMPLER_CUBE:case e.SAMPLER_CUBE_SHADOW:return e.TEXTURE_CUBE_MAP;case e.SAMPLER_2D_ARRAY:case e.INT_SAMPLER_2D_ARRAY:case e.UNSIGNED_INT_SAMPLER_2D_ARRAY:case e.SAMPLER_2D_ARRAY_SHADOW:return e.TEXTURE_2D_ARRAY}throw new Error(`unknown sampler type '${t}'`)}function Ah(e,t){switch(t){case"2d":return e.TEXTURE_2D;case"3d":return e.TEXTURE_3D;case"cube":return e.TEXTURE_CUBE_MAP}}function wh(e,t,r){let n=bl(e,t),o={},i=0;for(let a of Xr)for(let{name:s}of n[a].textures)r(s)&&(o[s]=i++);for(let a of Object.keys(e))e[a].type==="texture"&&r(a)&&o[a]===void 0&&(o[a]=i++);return o}function Nl(e){let t=`${e.vert}
${e.frag}`.matchAll(/^[ \t]*#define[ \t]+(\w+)/gm);return Zn(Array.from(t,r=>r[1]))}function $l(e,t){if(!A(e))return!1;switch(t){case e.INT_SAMPLER_2D:case e.INT_SAMPLER_3D:case e.INT_SAMPLER_CUBE:case e.INT_SAMPLER_2D_ARRAY:case e.UNSIGNED_INT_SAMPLER_2D:case e.UNSIGNED_INT_SAMPLER_3D:case e.UNSIGNED_INT_SAMPLER_CUBE:case e.UNSIGNED_INT_SAMPLER_2D_ARRAY:return!0}return!1}function Lh(e,t){return A(e)?t===e.RED_INTEGER||t===e.RG_INTEGER||t===e.RGB_INTEGER||t===e.RGBA_INTEGER:!1}function Ih(e,t,r,n){let o=Hl(e,n);if(r.target!==o)throw new Error(`texture '${t}' has target ${r.target}, but the sampler requires ${o}`);if($l(e,n)!==Lh(e,r.format))throw new Error(`texture '${t}' format ${r.format} does not match the sampler (integer vs. float)`)}function Oh(e,t,r){for(let{name:n,location:o}of r.entries){let i=e.getAttribLocation(t,n);if(i!==-1&&i!==o)throw new Error(`attribute '${n}' is at location ${i}, expected ${o}`)}}function Fh(e,t){if(!e.getProgramParameter(t,e.LINK_STATUS))throw new Error(`Could not compile WebGL program. 

${e.getProgramInfoLog(t)}`)}function jl(e){throw new Error(`uniform '${e}' has no location, it is either not in the schema or a uniform block member`)}var Wl=new Set;function Mh(e){for(let t of Object.keys(e)){let r=e[t];r.type!=="uniform"||r.kind==="t"||r.block!==void 0||Wl.has(t)||(Wl.add(t),console.warn(`uniform '${t}' is not in a uniform block, array uniforms need a 'length'`))}}function Bh(e,t,r){for(let n of Xr){let o=It(n,r);if(!o)continue;let{name:i}=br[n],a=e.getUniformBlockIndex(t,i);if(a===e.INVALID_INDEX)continue;let s=e.getActiveUniformBlockParameter(t,a,e.UNIFORM_BLOCK_DATA_SIZE);if(s>o.size)throw new Error(`uniform block '${i}' data size mismatch, expected ${o.size} got ${s}`);let c=e.getUniformIndices(t,o.members.map(f=>f.length?`${f.name}[0]`:f.name));if(c===null)continue;let u=[],l=[];for(let f=0;f<c.length;++f)c[f]!==e.INVALID_INDEX&&(u.push(c[f]),l.push(f));if(u.length===0)continue;let d=e.getActiveUniforms(t,u,e.UNIFORM_OFFSET),m=e.getActiveUniforms(t,u,e.UNIFORM_ARRAY_STRIDE);for(let f=0;f<u.length;++f){let h=o.members[l[f]];if(d[f]!==h.offset)throw new Error(`uniform block '${i}' offset mismatch for '${h.name}', expected ${h.offset} got ${d[f]}`);if(h.length&&m[f]!==h.stride)throw new Error(`uniform block '${i}' array stride mismatch for '${h.name}', expected ${h.stride} got ${m[f]}`)}}}function Da(e){let t=e.createProgram();if(t===null)throw new Error("Could not create WebGL program");return t}function Vh(e){if(typeof e!="string")throw new Error(`unknown program variant: ${e}`);return e.startsWith("color")?"color":e.startsWith("pick")?"pick":e}function ql(e,t,r,n,o,i,a){let{defineValues:s,shaderCode:c,schema:u}=i,l=Da(e),d=Rh(),m=Vh(s.dRenderVariant.ref.value),f=cl(e,r,n,s,c,Lo(u,A(e),Qs(s),a)),h=o("vert",f.vert),g=o("frag",f.frag),T=Qr(u);if(T.size>n.maxVertexAttribs)throw new Error(`'${c.name}' needs ${T.size} attribute locations, only ${n.maxVertexAttribs} are available`);let b,D,P,F,B=!1,V=!1,W=!1;function K(){h.attach(l),g.attach(l);for(let{name:y,location:C}of T.entries)e.bindAttribLocation(l,C,y);e.linkProgram(l),N&&Fh(e,l),B=!0}m==="compute"&&K();function ae(y){P=wh(u,y,O=>b[O]!==null&&b[O]!==void 0);let C=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(l);for(let O of Object.keys(P))e.uniform1i(b[O],P[O]);e.useProgram(C)}function ge(){if(b=Ph(e,l,u,a),D=pl(u),ae(Nl(f)),a&&A(e))for(let y of Xr){let C=br[y],O=e.getUniformBlockIndex(l,C.name);O!==e.INVALID_INDEX&&e.uniformBlockBinding(l,O,C.bindingIndex)}if(N){let y=Nl(f);Dh(e,l,u,y),Oh(e,l,T),_h(e,l,u,y),F=Eh(e,l,u),a&&A(e)&&(Bh(e,l,u),Mh(u))}V=!0}return{id:d,variant:m,isReady:()=>V,isCompiled:()=>V||W||!r.parallelShaderCompile?!0:B&&!!e.getProgramParameter(l,r.parallelShaderCompile.COMPLETION_STATUS),link:()=>{B||K()},finalize(y){return B||K(),!V&&(y||!r.parallelShaderCompile||e.getProgramParameter(l,r.parallelShaderCompile.COMPLETION_STATUS))&&ge(),V},use:()=>{if(N&&!V)throw new Error(`program not finalized: ${m}`);t.currentProgramId=d,e.useProgram(l)},setUniforms:y=>{for(let C=0,O=y.length;C<O;++C){let[M,X]=y[C];if(X){let Y=b[M];Y===void 0?N&&jl(M):Y!==null&&D[M](e,Y,X.ref.value)}}},uniform:(y,C)=>{let O=b[y];O===void 0?N&&jl(y):O!==null&&D[y](e,O,C)},bindAttributes:y=>{ko(t,T,y)},offsetAttributes:(y,C)=>{for(let O=0,M=y.length;O<M;++O){let[X,Y]=y[O];Y.changeOffset(T.byName[X].location,C)}},bindTextures:y=>{for(let C=0,O=y.length;C<O;++C){let[M,X]=y[C],Y=P[M];if(Y!==void 0)if(Js(X))e.activeTexture(e.TEXTURE0+Y),e.bindTexture(e.TEXTURE_2D,null);else{let ve=Vo(X);F?.[M]!==void 0&&Ih(e,M,ve,F[M]),ve.bind(Y)}}},destroy:()=>{W||(h.destroy(),g.destroy(),e.deleteProgram(l),W=!0)}}}var kh=Fe();function Gh(e){let t=e.split(`
`);for(let r=0;r<t.length;++r)t[r]=r+1+": "+t[r];return t.join(`
`)}function Go(e,t){let{type:r,source:n}=t,o=e.createShader(r==="vert"?e.VERTEX_SHADER:e.FRAGMENT_SHADER);if(o===null)throw new Error(`Error creating ${r} shader`);if(e.shaderSource(o,n),e.compileShader(o),N&&e.getShaderParameter(o,e.COMPILE_STATUS)===!1)throw console.warn(`'${r}' shader info log '${e.getShaderInfoLog(o)}'
${Gh(n)}`),new Error(`Error compiling ${r} shader`);return o}function Xl(e,t){let r=Go(e,t);return{id:kh(),attach:n=>{e.attachShader(n,r)},destroy:()=>{e.deleteShader(r)}}}function A(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext}function Zl(e){if(A(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e),VERTEX_ATTRIB_ARRAY_DIVISOR:e.VERTEX_ATTRIB_ARRAY_DIVISOR};{let t=e.getExtension("ANGLE_instanced_arrays");return t===null?null:{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t),VERTEX_ATTRIB_ARRAY_DIVISOR:t.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE}}}function Ql(e){if(A(e))return{FRAGMENT_SHADER_DERIVATIVE_HINT:e.FRAGMENT_SHADER_DERIVATIVE_HINT};{let t=e.getExtension("OES_standard_derivatives");return t===null?null:{FRAGMENT_SHADER_DERIVATIVE_HINT:t.FRAGMENT_SHADER_DERIVATIVE_HINT_OES}}}function Yl(e){return A(e)?{}:e.getExtension("OES_element_index_uint")}function Kl(e){if(A(e))return{VERTEX_ARRAY_BINDING:e.VERTEX_ARRAY_BINDING,bindVertexArray:e.bindVertexArray.bind(e),createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),isVertexArray:e.isVertexArray.bind(e)};{let t=e.getExtension("OES_vertex_array_object");return t===null?null:{VERTEX_ARRAY_BINDING:t.VERTEX_ARRAY_BINDING_OES,bindVertexArray:t.bindVertexArrayOES.bind(t),createVertexArray:t.createVertexArrayOES.bind(t),deleteVertexArray:t.deleteVertexArrayOES.bind(t),isVertexArray:t.isVertexArrayOES.bind(t)}}}function Jl(e){return A(e)?{}:e.getExtension("OES_texture_float")}function ed(e){return e.getExtension("OES_texture_float_linear")}function td(e){if(A(e))return{HALF_FLOAT:e.HALF_FLOAT};{let t=e.getExtension("OES_texture_half_float");return t===null?null:{HALF_FLOAT:t.HALF_FLOAT_OES}}}function rd(e){return e.getExtension("OES_texture_half_float_linear")}function nd(e){if(A(e))return{MIN:e.MIN,MAX:e.MAX};{let t=e.getExtension("EXT_blend_minmax");return t===null?null:{MIN:t.MIN_EXT,MAX:t.MAX_EXT}}}function od(e){return A(e)?{}:e.getExtension("EXT_frag_depth")}function id(e){if(A(e))return e.getExtension("EXT_color_buffer_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA32F:e.RGBA32F});{let t=e.getExtension("WEBGL_color_buffer_float");return t===null?e.getExtension("OES_texture_float")===null?null:wd(e,e.FLOAT)?{RGBA32F:34836}:null:(e.getExtension("EXT_float_blend"),{RGBA32F:t.RGBA32F_EXT})}}function ad(e){return e.getExtension("EXT_float_blend")===null?null:{}}function sd(e){if(A(e))return e.getExtension("EXT_color_buffer_half_float")===null?null:(e.getExtension("EXT_float_blend"),{RGBA16F:e.RGBA16F});{let t=e.getExtension("EXT_color_buffer_half_float");return t===null?e.getExtension("OES_texture_half_float")===null?null:wd(e,36193)?{RGBA16F:34842}:null:(e.getExtension("EXT_float_blend"),{RGBA16F:t.RGBA16F_EXT})}}function cd(e){if(A(e))return{drawBuffers:e.drawBuffers.bind(e),COLOR_ATTACHMENT0:e.COLOR_ATTACHMENT0,COLOR_ATTACHMENT1:e.COLOR_ATTACHMENT1,COLOR_ATTACHMENT2:e.COLOR_ATTACHMENT2,COLOR_ATTACHMENT3:e.COLOR_ATTACHMENT3,COLOR_ATTACHMENT4:e.COLOR_ATTACHMENT4,COLOR_ATTACHMENT5:e.COLOR_ATTACHMENT5,COLOR_ATTACHMENT6:e.COLOR_ATTACHMENT6,COLOR_ATTACHMENT7:e.COLOR_ATTACHMENT7,DRAW_BUFFER0:e.DRAW_BUFFER0,DRAW_BUFFER1:e.DRAW_BUFFER1,DRAW_BUFFER2:e.DRAW_BUFFER2,DRAW_BUFFER3:e.DRAW_BUFFER3,DRAW_BUFFER4:e.DRAW_BUFFER4,DRAW_BUFFER5:e.DRAW_BUFFER5,DRAW_BUFFER6:e.DRAW_BUFFER6,DRAW_BUFFER7:e.DRAW_BUFFER7,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS,MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS};{let t=e.getExtension("WEBGL_draw_buffers");return t===null?null:{drawBuffers:t.drawBuffersWEBGL.bind(t),COLOR_ATTACHMENT0:t.COLOR_ATTACHMENT0_WEBGL,COLOR_ATTACHMENT1:t.COLOR_ATTACHMENT1_WEBGL,COLOR_ATTACHMENT2:t.COLOR_ATTACHMENT2_WEBGL,COLOR_ATTACHMENT3:t.COLOR_ATTACHMENT3_WEBGL,COLOR_ATTACHMENT4:t.COLOR_ATTACHMENT4_WEBGL,COLOR_ATTACHMENT5:t.COLOR_ATTACHMENT5_WEBGL,COLOR_ATTACHMENT6:t.COLOR_ATTACHMENT6_WEBGL,COLOR_ATTACHMENT7:t.COLOR_ATTACHMENT7_WEBGL,DRAW_BUFFER0:t.DRAW_BUFFER0_WEBGL,DRAW_BUFFER1:t.DRAW_BUFFER1_WEBGL,DRAW_BUFFER2:t.DRAW_BUFFER2_WEBGL,DRAW_BUFFER3:t.DRAW_BUFFER3_WEBGL,DRAW_BUFFER4:t.DRAW_BUFFER4_WEBGL,DRAW_BUFFER5:t.DRAW_BUFFER5_WEBGL,DRAW_BUFFER6:t.DRAW_BUFFER6_WEBGL,DRAW_BUFFER7:t.DRAW_BUFFER7_WEBGL,MAX_COLOR_ATTACHMENTS:t.MAX_COLOR_ATTACHMENTS_WEBGL,MAX_DRAW_BUFFERS:t.MAX_DRAW_BUFFERS_WEBGL}}}function ud(e){let t=e.getExtension("OES_draw_buffers_indexed");return t===null?null:{enablei:t.enableiOES.bind(t),disablei:t.disableiOES.bind(t),blendEquationi:t.blendEquationiOES.bind(t),blendEquationSeparatei:t.blendEquationSeparateiOES.bind(t),blendFunci:t.blendFunciOES.bind(t),blendFuncSeparatei:t.blendFuncSeparateiOES.bind(t),colorMaski:t.colorMaskiOES.bind(t)}}function ld(e){return A(e)?{}:e.getExtension("EXT_shader_texture_lod")}function dd(e){if(A(e))return{UNSIGNED_INT_24_8:e.UNSIGNED_INT_24_8};{let t=e.getExtension("WEBGL_depth_texture");return t===null?null:{UNSIGNED_INT_24_8:t.UNSIGNED_INT_24_8_WEBGL}}}function pd(e){if(A(e))return{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,SRGB8_ALPHA8:e.SRGB8_ALPHA8,SRGB8:e.SRGB8,SRGB:e.SRGB};{let t=e.getExtension("EXT_sRGB");return t===null?null:{FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT,SRGB8_ALPHA8:t.SRGB8_ALPHA8_EXT,SRGB8:t.SRGB_ALPHA_EXT,SRGB:t.SRGB_EXT}}}function md(e){if(A(e)){let t=e.getExtension("EXT_disjoint_timer_query_webgl2")||e.getExtension("EXT_disjoint_timer_query");return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:e.CURRENT_QUERY,QUERY_RESULT:e.QUERY_RESULT,QUERY_RESULT_AVAILABLE:e.QUERY_RESULT_AVAILABLE,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:e.createQuery.bind(e),deleteQuery:e.deleteQuery.bind(e),isQuery:e.isQuery.bind(e),beginQuery:e.beginQuery.bind(e),endQuery:e.endQuery.bind(e),queryCounter:t.queryCounterEXT.bind(t),getQuery:e.getQuery.bind(e),getQueryParameter:e.getQueryParameter.bind(e)}}else{let t=e.getExtension("EXT_disjoint_timer_query");return t===null?null:{QUERY_COUNTER_BITS:t.QUERY_COUNTER_BITS_EXT,CURRENT_QUERY:t.CURRENT_QUERY_EXT,QUERY_RESULT:t.QUERY_RESULT_EXT,QUERY_RESULT_AVAILABLE:t.QUERY_RESULT_AVAILABLE_EXT,TIME_ELAPSED:t.TIME_ELAPSED_EXT,TIMESTAMP:t.TIMESTAMP_EXT,GPU_DISJOINT:t.GPU_DISJOINT_EXT,createQuery:t.createQueryEXT.bind(t),deleteQuery:t.deleteQueryEXT.bind(t),isQuery:t.isQueryEXT.bind(t),beginQuery:t.beginQueryEXT.bind(t),endQuery:t.endQueryEXT.bind(t),queryCounter:t.queryCounterEXT.bind(t),getQuery:t.getQueryEXT.bind(t),getQueryParameter:t.getQueryObjectEXT.bind(t)}}}function fd(e){let t=e.getExtension("WEBGL_multi_draw");return t?{multiDrawArrays:t.multiDrawArraysWEBGL.bind(t),multiDrawElements:t.multiDrawElementsWEBGL.bind(t),multiDrawArraysInstanced:t.multiDrawArraysInstancedWEBGL.bind(t),multiDrawElementsInstanced:t.multiDrawElementsInstancedWEBGL.bind(t)}:null}function hd(e){let t=e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");return t?{drawArraysInstancedBaseInstance:t.drawArraysInstancedBaseInstanceWEBGL.bind(t),drawElementsInstancedBaseVertexBaseInstance:t.drawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function gd(e){let t=e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");return t?{multiDrawArraysInstancedBaseInstance:t.multiDrawArraysInstancedBaseInstanceWEBGL.bind(t),multiDrawElementsInstancedBaseVertexBaseInstance:t.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL.bind(t)}:null}function yd(e){let t=e.getExtension("KHR_parallel_shader_compile");return t===null?null:{COMPLETION_STATUS:t.COMPLETION_STATUS_KHR}}function bd(e){return A(e)?{}:e.getExtension("OES_fbo_render_mipmap")}function xd(e){if(A(e)){let t=e.getExtension("WEBGL_provoking_vertex");if(t)return{FIRST_VERTEX_CONVENTION:t.FIRST_VERTEX_CONVENTION_WEBGL,LAST_VERTEX_CONVENTION:t.LAST_VERTEX_CONVENTION_WEBGL,PROVOKING_VERTEX:t.PROVOKING_VERTEX_WEBGL,provokingVertex:t.provokingVertexWEBGL.bind(t)}}return null}function vd(e){if(A(e)){let t=e.getExtension("WEBGL_clip_cull_distance");if(t)return{MAX_CLIP_DISTANCES:t.MAX_CLIP_DISTANCES_WEBGL,MAX_CULL_DISTANCES:t.MAX_CULL_DISTANCES_WEBGL,MAX_COMBINED_CLIP_AND_CULL_DISTANCES:t.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL,CLIP_DISTANCE0:t.CLIP_DISTANCE0_WEBGL,CLIP_DISTANCE1:t.CLIP_DISTANCE1_WEBGL,CLIP_DISTANCE2:t.CLIP_DISTANCE2_WEBGL,CLIP_DISTANCE3:t.CLIP_DISTANCE3_WEBGL,CLIP_DISTANCE4:t.CLIP_DISTANCE4_WEBGL,CLIP_DISTANCE5:t.CLIP_DISTANCE5_WEBGL,CLIP_DISTANCE6:t.CLIP_DISTANCE6_WEBGL,CLIP_DISTANCE7:t.CLIP_DISTANCE7_WEBGL}}return null}function Sd(e){return A(e)&&e.getExtension("EXT_conservative_depth")?{}:null}function Td(e){if(A(e)){let t=e.getExtension("WEBGL_stencil_texturing");if(t)return{DEPTH_STENCIL_TEXTURE_MODE:t.DEPTH_STENCIL_TEXTURE_MODE_WEBGL,STENCIL_INDEX:t.STENCIL_INDEX_WEBGL}}return null}function Cd(e){let t=e.getExtension("EXT_clip_control");return t?{LOWER_LEFT:t.LOWER_LEFT_EXT,UPPER_LEFT:t.UPPER_LEFT_EXT,NEGATIVE_ONE_TO_ONE:t.NEGATIVE_ONE_TO_ONE_EXT,ZERO_TO_ONE:t.ZERO_TO_ONE_EXT,CLIP_ORIGIN:t.CLIP_ORIGIN_EXT,CLIP_DEPTH_MODE:t.CLIP_DEPTH_MODE_EXT,clipControl:t.clipControlEXT.bind(t)}:null}function Rd(e){return A(e)&&e.getExtension("EXT_render_snorm")?{}:null}function Pd(e){return A(e)&&e.getExtension("WEBGL_render_shared_exponent")?{}:null}function Dd(e){let t=e.getExtension("EXT_texture_norm16");return t?{R16:t.R16_EXT,RG16:t.RG16_EXT,RGB16:t.RGB16_EXT,RGBA16:t.RGBA16_EXT,R16_SNORM:t.R16_SNORM_EXT,RG16_SNORM:t.RG16_SNORM_EXT,RGB16_SNORM:t.RGB16_SNORM_EXT,RGBA16_SNORM:t.RGBA16_SNORM_EXT}:null}function _d(e){let t=e.getExtension("EXT_depth_clamp");return t?{DEPTH_CLAMP:t.DEPTH_CLAMP_EXT}:null}function Ed(e){if(A(e)){let t=e.getExtension("OVR_multiview2");if(t)return{FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR,FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX:t.FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR,MAX_VIEWS:t.MAX_VIEWS_OVR,FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS:t.FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR,framebufferTextureMultiview:t.framebufferTextureMultiviewOVR.bind(t)}}return null}function Ad(e){if(!A(e))return!1;if(typeof navigator<"u"){let t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);return t?parseInt(t[1])>=85:!0}return!1}var Uh=`
attribute vec4 aPosition;

void main() {
    gl_Position = aPosition;
}`,zh=`
precision mediump float;
uniform vec4 uColor;
uniform sampler2D uTexture;

void main() {
    gl_FragColor = texture2D(uTexture, vec2(0.5, 0.5)) * uColor;
}`,Nh=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function wd(e,t){let r=Go(e,{type:"vert",source:Uh}),n=Go(e,{type:"frag",source:zh});if(!r||!n)return!1;let o=Da(e);e.attachShader(o,r),e.attachShader(o,n),e.linkProgram(o),e.useProgram(o);let i=e.getAttribLocation(o,"aPosition"),a=e.getUniformLocation(o,"uColor");if(!a)return N&&console.log("error getting 'uColor' uniform location"),!1;let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,Nh,e.STATIC_DRAW),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0);let c=e.createTexture(),u=new Uint8Array([255,255,255,255]);e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,u);let l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,t,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);let d=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)return N&&console.log(`error creating framebuffer for '${t}'`),!1;e.bindTexture(e.TEXTURE_2D,c),e.uniform4fv(a,[0,10,20,1]),e.drawArrays(e.TRIANGLES,0,6),e.bindTexture(e.TEXTURE_2D,l),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.uniform4fv(a,[0,1/10,1/20,1]),e.drawArrays(e.TRIANGLES,0,6);let f=new Uint8Array(4);if(e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,f),f[0]!==0||f[1]<248||f[2]<248||f[3]<254)return N&&console.log(`not able to actually render to '${t}' texture`),!1;if(t===e.FLOAT){e.bindFramebuffer(e.FRAMEBUFFER,d);let h=new Float32Array(4);e.readPixels(0,0,1,1,e.RGBA,e.FLOAT,h);let g=e.getError();if(g)return N&&console.log(`error reading float pixels: '${_a(e,g)}'`),!1}return!0}function Ld(e){let t=Zl(e);if(t===null)throw new Error('Could not find support for "instanced_arrays"');let r=Yl(e);if(r===null)throw new Error('Could not find support for "element_index_uint"');let n=Ql(e);if(n===null)throw new Error('Could not find support for "standard_derivatives"');let o=Jl(e);if(o===null)throw new Error('Could not find support for "texture_float"');let i=nd(e);if(i===null)throw new Error('Could not find support for "blend_minmax"');let a=ed(e);N&&a===null&&console.log('Could not find support for "texture_float_linear"');let s=td(e);N&&s===null&&console.log('Could not find support for "texture_half_float"');let c=rd(e);N&&c===null&&console.log('Could not find support for "texture_half_float_linear"');let u=dd(e);N&&u===null&&console.log('Could not find support for "depth_texture"');let l=Kl(e);N&&l===null&&console.log('Could not find support for "vertex_array_object"');let d=od(e);N&&d===null&&console.log('Could not find support for "frag_depth"');let m=id(e);N&&m===null&&console.log('Could not find support for "color_buffer_float"');let f=ad(e);N&&f===null&&console.log('Could not find support for "float_blend"');let h=sd(e);N&&h===null&&console.log('Could not find support for "color_buffer_half_float"');let g=cd(e);N&&g===null&&console.log('Could not find support for "draw_buffers"');let T=ud(e);N&&T===null&&console.log('Could not find support for "draw_buffers_indexed"');let b=ld(e);N&&b===null&&console.log('Could not find support for "shader_texture_lod"');let D=pd(e);N&&D===null&&console.log('Could not find support for "sRGB"');let P=md(e);N&&P===null&&console.log('Could not find support for "disjoint_timer_query"');let F=fd(e);N&&F===null&&console.log('Could not find support for "multi_draw"');let B=hd(e);N&&B===null&&console.log('Could not find support for "draw_instanced_base_vertex_base_instance"');let V=gd(e);N&&V===null&&console.log('Could not find support for "multi_draw_instanced_base_vertex_base_instance"');let W=yd(e);N&&W===null&&console.log('Could not find support for "parallel_shader_compile"');let K=bd(e);N&&K===null&&console.log('Could not find support for "fbo_render_mipmap"');let ae=xd(e);N&&ae===null&&console.log('Could not find support for "provoking_vertex"');let ge=vd(e);N&&ge===null&&console.log('Could not find support for "clip_cull_distance"');let y=Sd(e);N&&y===null&&console.log('Could not find support for "conservative_depth"');let C=Td(e);N&&C===null&&console.log('Could not find support for "stencil_texturing"');let O=Cd(e);N&&O===null&&console.log('Could not find support for "clip_control"');let M=Rd(e);N&&M===null&&console.log('Could not find support for "render_snorm"');let X=Pd(e);N&&X===null&&console.log('Could not find support for "render_shared_exponent"');let Y=Dd(e);N&&Y===null&&console.log('Could not find support for "texture_norm16"');let ve=_d(e);N&&ve===null&&console.log('Could not find support for "depth_clamp"');let J=Ed(e);N&&J===null&&console.log('Could not find support for "multiview2"');let w=Ad(e);return{instancedArrays:t,standardDerivatives:n,elementIndexUint:r,textureFloat:o,blendMinMax:i,textureFloatLinear:a,textureHalfFloat:s,textureHalfFloatLinear:c,depthTexture:u,vertexArrayObject:l,fragDepth:d,colorBufferFloat:m,floatBlend:f,colorBufferHalfFloat:h,drawBuffers:g,drawBuffersIndexed:T,shaderTextureLod:b,sRGB:D,disjointTimerQuery:P,multiDraw:F,drawInstancedBaseVertexBaseInstance:B,multiDrawInstancedBaseVertexBaseInstance:V,parallelShaderCompile:W,fboRenderMipmap:K,provokingVertex:ae,clipCullDistance:ge,conservativeDepth:y,stencilTexturing:C,clipControl:O,renderSnorm:M,renderSharedExponent:X,textureNorm16:Y,depthClamp:ve,multiview2:J,noNonInstancedActiveAttribs:w}}function Id(e,t){let r={},n=e.getParameter(e.FRONT_FACE),o=e.getParameter(e.CULL_FACE_MODE),i=e.getParameter(e.DEPTH_WRITEMASK),a=e.getParameter(e.DEPTH_CLEAR_VALUE),s=e.getParameter(e.DEPTH_FUNC),c=e.getParameter(e.COLOR_WRITEMASK),u=e.getParameter(e.COLOR_CLEAR_VALUE),l=e.getParameter(e.BLEND_SRC_RGB),d=e.getParameter(e.BLEND_DST_RGB),m=e.getParameter(e.BLEND_SRC_ALPHA),f=e.getParameter(e.BLEND_DST_ALPHA),h=e.getParameter(e.BLEND_COLOR),g=e.getParameter(e.BLEND_EQUATION_RGB),T=e.getParameter(e.BLEND_EQUATION_ALPHA),b=e.getParameter(e.STENCIL_FUNC),D=e.getParameter(e.STENCIL_VALUE_MASK),P=e.getParameter(e.STENCIL_REF),F=e.getParameter(e.STENCIL_BACK_FUNC),B=e.getParameter(e.STENCIL_BACK_VALUE_MASK),V=e.getParameter(e.STENCIL_BACK_REF),W=e.getParameter(e.STENCIL_WRITEMASK),K=e.getParameter(e.STENCIL_BACK_WRITEMASK),ae=e.getParameter(e.STENCIL_FAIL),ge=e.getParameter(e.STENCIL_PASS_DEPTH_PASS),y=e.getParameter(e.STENCIL_PASS_DEPTH_FAIL),C=e.getParameter(e.STENCIL_BACK_FAIL),O=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_PASS),M=e.getParameter(e.STENCIL_BACK_PASS_DEPTH_FAIL),X=e.getParameter(e.STENCIL_CLEAR_VALUE),Y=e.getParameter(e.MAX_VERTEX_ATTRIBS),ve=[],J=[],w=[],H=e.getParameter(e.VIEWPORT),G=e.getParameter(e.SCISSOR_BOX),Z=t.clipControl?e.getParameter(t.clipControl.CLIP_ORIGIN):-1,se=t.clipControl?e.getParameter(t.clipControl.CLIP_DEPTH_MODE):-1,Ae=()=>{for(let v=0;v<Y;++v)ve[v]=0};return Ae(),{currentProgramId:-1,currentMaterialId:-1,currentRenderItemId:-1,inRenderPass:!1,onRenderPassEnd:void 0,enable:v=>{r[v]!==!0&&(e.enable(v),r[v]=!0)},disable:v=>{r[v]!==!1&&(e.disable(v),r[v]=!1)},frontFace:v=>{v!==n&&(e.frontFace(v),n=v)},cullFace:v=>{v!==o&&(e.cullFace(v),o=v)},depthMask:v=>{v!==i&&(e.depthMask(v),i=v)},clearDepth:v=>{v!==a&&(e.clearDepth(v),a=v)},depthFunc:v=>{v!==s&&(e.depthFunc(v),s=v)},colorMask:(v,E,k,j)=>{(v!==c[0]||E!==c[1]||k!==c[2]||j!==c[3])&&(e.colorMask(v,E,k,j),c[0]=v,c[1]=E,c[2]=k,c[3]=j)},clearColor:(v,E,k,j)=>{(v!==u[0]||E!==u[1]||k!==u[2]||j!==u[3])&&(e.clearColor(v,E,k,j),u[0]=v,u[1]=E,u[2]=k,u[3]=j)},blendFunc:(v,E)=>{(v!==l||E!==d||v!==m||E!==f)&&(e.blendFunc(v,E),l=v,d=E,m=v,f=E)},blendFuncSeparate:(v,E,k,j)=>{(v!==l||E!==d||k!==m||j!==f)&&(e.blendFuncSeparate(v,E,k,j),l=v,d=E,m=k,f=j)},blendEquation:v=>{(v!==g||v!==T)&&(e.blendEquation(v),g=v,T=v)},blendEquationSeparate:(v,E)=>{(v!==g||E!==T)&&(e.blendEquationSeparate(v,E),g=v,T=E)},blendColor:(v,E,k,j)=>{(v!==h[0]||E!==h[1]||k!==h[2]||j!==h[3])&&(e.blendColor(v,E,k,j),h[0]=v,h[1]=E,h[2]=k,h[3]=j)},stencilFunc:(v,E,k)=>{(v!==b||E!==P||k!==D||v!==F||E!==V||k!==B)&&(e.stencilFunc(v,E,k),b=v,P=E,D=k,F=v,V=E,B=k)},stencilFuncSeparate:(v,E,k,j)=>{v===e.FRONT?(E!==b||k!==P||j!==D)&&(e.stencilFuncSeparate(v,E,k,j),b=E,P=k,D=j):v===e.BACK?(E!==F||k!==V||j!==B)&&(e.stencilFuncSeparate(v,E,k,j),F=E,V=k,B=j):v===e.FRONT_AND_BACK&&(E!==b||k!==P||j!==D||E!==F||k!==V||j!==B)&&(e.stencilFuncSeparate(v,E,k,j),b=E,P=k,D=j,F=E,V=k,B=j)},stencilMask:v=>{(v!==W||v!==K)&&(e.stencilMask(v),W=v,K=v)},stencilMaskSeparate:(v,E)=>{v===e.FRONT?E!==W&&(e.stencilMaskSeparate(v,E),W=E):v===e.BACK?E!==K&&(e.stencilMaskSeparate(v,E),K=E):v===e.FRONT_AND_BACK&&(E!==W||E!==K)&&(e.stencilMaskSeparate(v,E),W=E,K=E)},stencilOp:(v,E,k)=>{(v!==ae||E!==y||k!==ge||v!==C||E!==M||k!==O)&&(e.stencilOp(v,E,k),ae=v,y=E,ge=k,C=v,M=E,O=k)},stencilOpSeparate:(v,E,k,j)=>{v===e.FRONT?(E!==ae||k!==y||j!==ge)&&(e.stencilOpSeparate(v,E,k,j),ae=E,y=k,ge=j):v===e.BACK?(E!==C||k!==M||j!==O)&&(e.stencilOpSeparate(v,E,k,j),C=E,M=k,O=j):v===e.FRONT_AND_BACK&&(E!==ae||k!==y||j!==ge||E!==C||k!==M||j!==O)&&(e.stencilOpSeparate(v,E,k,j),ae=E,y=k,ge=j,C=E,M=k,O=j)},clearStencil:v=>{v!==X&&(e.clearStencil(v),X=v)},enableVertexAttrib:v=>{e.enableVertexAttribArray(v),ve[v]=1},clearVertexAttribsState:Ae,disableUnusedVertexAttribs:()=>{for(let v=0;v<Y;++v)ve[v]===0&&e.disableVertexAttribArray(v)},bindUniformBufferRange:A(e)?(v,E,k,j,Nt)=>{(J[v]!==E||w[v]!==j)&&(e.bindBufferRange(e.UNIFORM_BUFFER,v,k,j,Nt),J[v]=E,w[v]=j)}:()=>{throw new Error("WebGL2 is required for uniform buffers")},viewport:(v,E,k,j)=>{(v!==H[0]||E!==H[1]||k!==H[2]||j!==H[3])&&(e.viewport(v,E,k,j),H[0]=v,H[1]=E,H[2]=k,H[3]=j)},scissor:(v,E,k,j)=>{(v!==G[0]||E!==G[1]||k!==G[2]||j!==G[3])&&(e.scissor(v,E,k,j),G[0]=v,G[1]=E,G[2]=k,G[3]=j)},clipControl:t.clipControl?(v,E)=>{(v!==Z||E!==se)&&(t.clipControl.clipControl(v,E),Z=v,se=E)}:void 0}}function jh(e,t=0){return{value:e,usageCount:t}}function Wh(e){return{free:()=>{e.usageCount-=1},value:e.value}}function Uo(e,t,r){let n=new Map,o=[];return{get:i=>{let a=e(i),s=n.get(a);return s||(s=jh(t(i)),n.set(a,s),o.push(s.value)),s.usageCount+=1,Wh(s)},clear:()=>{n.forEach((i,a)=>{i.usageCount<=0&&(i.usageCount<0&&console.warn("Reference usageCount below zero."),r(i.value),n.delete(a),Hn(o,i.value))})},get count(){return n.size},values:o,dispose:()=>{n.forEach(i=>r(i.value)),n.clear(),o.length=0}}}var Hh=Fe();function $h(e,t){switch(t){case"depth16":return e.DEPTH_COMPONENT16;case"stencil8":return e.STENCIL_INDEX8;case"rgba4":return e.RGBA4;case"depth-stencil":return e.DEPTH_STENCIL;case"depth24":if(A(e))return e.DEPTH_COMPONENT24;throw new Error("WebGL2 needed for `depth24` renderbuffer format");case"depth32f":if(A(e))return e.DEPTH_COMPONENT32F;throw new Error("WebGL2 needed for `depth32f` renderbuffer format");case"depth24-stencil8":if(A(e))return e.DEPTH24_STENCIL8;throw new Error("WebGL2 needed for `depth24-stencil8` renderbuffer format");case"depth32f-stencil8":if(A(e))return e.DEPTH32F_STENCIL8;throw new Error("WebGL2 needed for `depth32f-stencil8` renderbuffer format")}}function qh(e){switch(e){case"depth16":return 4;case"stencil8":return 2;case"rgba4":return 4;case"depth-stencil":return 4;case"depth24":return 3;case"depth32f":return 4;case"depth24-stencil8":return 4;case"depth32f-stencil8":return 5}}function Xh(e,t){switch(t){case"depth":return e.DEPTH_ATTACHMENT;case"stencil":return e.STENCIL_ATTACHMENT;case"depth-stencil":return e.DEPTH_STENCIL_ATTACHMENT;case"color0":return e.COLOR_ATTACHMENT0}}function Zh(e){let t=e.createRenderbuffer();if(t===null)throw new Error("Could not create WebGL renderbuffer");return t}function Qh(e,t){if(A(e))return t;switch(t){case"depth24":case"depth32f":return"depth16";case"depth24-stencil8":case"depth32f-stencil8":return"depth-stencil"}return t}function Od(e,t,r,n,o,i){let a=Zh(e);t=Qh(e,t);let s=()=>e.bindRenderbuffer(e.RENDERBUFFER,a),c=$h(e,t),u=Xh(e,r);function l(){s(),e.renderbufferStorage(e.RENDERBUFFER,c,n,o)}l();let d=!1;return{id:Hh(),getByteCount:()=>qh(t)*n*o,bind:s,attachFramebuffer:m=>{Be(i),m.bind(),s(),e.framebufferRenderbuffer(e.FRAMEBUFFER,u,e.RENDERBUFFER,a),Oo(m,()=>o),N&&Yr(e)},detachFramebuffer:m=>{Be(i),m.bind(),s(),e.framebufferRenderbuffer(e.FRAMEBUFFER,u,e.RENDERBUFFER,null),N&&Yr(e)},setSize:(m,f)=>{n=m,o=f,l()},destroy:()=>{d||(e.deleteRenderbuffer(a),d=!0)}}}var Yh=64;function Fd(){let e=new Map,t=new xn,r=[],n=0,o=[],i=()=>{let a=r;r=[];for(let s of a)s()};return{track:(a,s)=>{e.set(a,s),n+=1,o.push(s),o.length>Yh&&o.shift();let c=()=>{e.delete(a)&&(t.next(),e.size===0&&i())};return a.then(c,u=>{e.has(a)&&console.error(`'${s}' failed`,u),c()}),a},isReady:()=>e.size===0,get trackedCount(){return n},trackedSince:a=>o.slice(Math.max(0,o.length-(n-a))),whenReady:()=>e.size===0?Promise.resolve():new Promise(a=>r.push(a)),settled:t,clear:()=>{e.clear(),i()}}}var Kh=Fe();function Jh(e){let{vertexArrayObject:t}=e;if(!t)throw new Error("VertexArrayObject not supported");let r=t.createVertexArray();if(!r)throw new Error("Could not create WebGL vertex array");return r}function eg(e){let{vertexArrayObject:t}=e;if(t===null)throw new Error("VertexArrayObject not supported");return t}function Md(e,t,r,n,o,i){let a=Kh(),s=Jh(r),c=eg(r);function u(){c.bindVertexArray(s),i&&i.bind(),ko(t,n,o),c.bindVertexArray(null),l=!0}let l=!1,d=!1;return{id:a,bind:()=>{l||u(),c.bindVertexArray(s)},update:u,destroy:()=>{d||(i&&(c.bindVertexArray(s),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),c.deleteVertexArray(s),d=!0)}}}var tg=Fe(),Bd=Fe(),rg=64*1024;function ng(e){return Math.pow(2,Math.ceil(Math.log2(e)))}function Vd(e,t){let r=e.getParameter(e.UNIFORM_BUFFER_OFFSET_ALIGNMENT),n=new Set,o=new Map;function i(c){let u=e.createBuffer();if(u===null)throw new Error("Could not create WebGL buffer");return e.bindBuffer(e.UNIFORM_BUFFER,u),e.bufferData(e.UNIFORM_BUFFER,c,e.DYNAMIC_DRAW),u}function a(c){let u={id:tg(),data:new ArrayBuffer(c),buffer:i(c),dirtyStart:c,dirtyEnd:0};return n.add(u),u}function s(c,u,l){u<c.dirtyStart&&(c.dirtyStart=u),l>c.dirtyEnd&&(c.dirtyEnd=l)}return{alignment:r,allocate:c=>{let u=wr(ng(Math.max(c,r)),r),l=o.get(u);if(l===void 0&&(l=[],o.set(u,l)),l.length===0){let m=a(Math.max(rg,u));for(let f=m.data.byteLength-u;f>=0;f-=u)l.push({slab:m,offset:f,size:u})}let d=l.pop();return new Uint8Array(d.slab.data,d.offset,u).fill(0),s(d.slab,d.offset,d.offset+u),d},free:c=>{o.get(c.size).push(c)},createSlab:a,releaseSlab:c=>{e.deleteBuffer(c.buffer),n.delete(c)},markDirty:s,flush:c=>{c.dirtyEnd<=c.dirtyStart||(e.bindBuffer(e.UNIFORM_BUFFER,c.buffer),e.bufferSubData(e.UNIFORM_BUFFER,c.dirtyStart,new Uint8Array(c.data),c.dirtyStart,c.dirtyEnd-c.dirtyStart),c.dirtyStart=c.data.byteLength,c.dirtyEnd=0)},bind:(c,u,l,d)=>{t.bindUniformBufferRange(c,u.id,u.buffer,l,d)},getByteCount:()=>{let c=0;return n.forEach(u=>c+=u.data.byteLength),c},destroy:()=>{n.forEach(c=>e.deleteBuffer(c.buffer)),n.clear(),o.clear()}}}function kd(e,t){let r=Bd(),{size:n}=t,{bindingIndex:o}=br[t.block],i=e.allocate(n),{slab:a,offset:s}=i,c=xa(a.data,s,n),u=()=>e.markDirty(a,s,s+n),l=!1;return{id:r,getByteCount:()=>n,createWriter:d=>va(t,c,d,u),sync:()=>e.flush(a),bind:()=>e.bind(o,a,s,i.size),destroy:()=>{l||(e.free(i),l=!0)}}}function Gd(e,t,r=64){let n=Bd(),{size:o}=t,{bindingIndex:i}=br[t.block],a=wr(o,e.alignment),s=e.createSlab(a*r),c=new Uint8Array(s.data),u=new ArrayBuffer(o),l=new Uint8Array(u),d=xa(u,0,o),m=!0,f=-1,h=!1;function g(){if(!m)return;f=(f+1)%r;let T=f*a;c.set(l,T),e.markDirty(s,T,T+o),e.flush(s),m=!1}return{id:n,getByteCount:()=>o,createWriter:T=>va(t,d,T,()=>{m=!0}),sync:g,bind:()=>{f===-1&&g(),e.bind(i,s,f*a,a)},destroy:()=>{h||(e.releaseSlab(s),h=!0)}}}function og(e){return typeof e=="boolean"?e?1:0:typeof e=="number"?e*1e4:yn(e)}function Ea(e){return{...e.value,destroy:()=>{e.free()}}}function Ud(e,t,r,n,o,i,a=()=>!1){let s={attribute:new Set,elements:new Set,pixelPack:new Set,uniform:new Set,framebuffer:new Set,program:new Set,renderbuffer:new Set,shader:new Set,texture:new Set,cubeTexture:new Set,vertexArray:new Set,storageBuffer:new Set,kernel:new Set};function c(y,C){return s[y].add(C),r.resourceCounts[y]+=1,{...C,destroy:()=>{s[y].has(C)&&(a()||C.destroy(),s[y].delete(C),r.resourceCounts[y]-=1)}}}let u=Uo(y=>JSON.stringify(y),y=>c("shader",Xl(e,y)),y=>{y.destroy()});function l(y,C){return Ea(u.get({type:y,source:C}))}let d=new WeakSet,m=new Set,f=Fd(),h=new Set,g;function T(){for(let y of h)y.isCompiled()&&h.delete(y);h.size>0?setTimeout(T,4):(g?.(),g=void 0)}function b(y){!n.parallelShaderCompile||y.isCompiled()||(h.add(y),!g&&(f.track(new Promise(C=>g=C),"programs"),setTimeout(T,0)))}function D(){h.clear(),g?.(),g=void 0}let P=new WeakMap;function F(y,C){let O=P.get(y);O||P.set(y,O=new Map);let M=Zs(C),X=M.join(" "),Y=O.get(X);if(!Y){let ve=Lo(y,A(e),Zn(M),i);Y=[yn(ve.vert),yn(ve.frag)],O.set(X,Y)}return Y}let B=Uo(y=>{let C=[y.shaderCode.id],O=y.defineValues.dRenderVariant?.ref.value||"";Object.keys(y.defineValues).forEach(Y=>{y.shaderCode.ignoreDefine?.(Y,O,y.defineValues)||C.push(yn(Y),og(y.defineValues[Y].ref.value))});let[M,X]=F(y.schema,y.defineValues);return C.push(M,X),Fs(C).toString()},y=>{let C=ql(e,t,n,o,l,y,i);return C.variant!=="compute"&&m.add(C),c("program",C)},y=>{m.delete(y),y.destroy()}),V;function W(){if(!A(e))throw new Error("WebGL2 is required for uniform buffers");return V||(V=Vd(e,t)),V}function K(y){return c("uniform",kd(W(),y))}let ae=Uo(y=>`${y.materialId}|${y.layout.hash}`,y=>K(y.layout),y=>{y.destroy()});return{limits:{maxTextureSize:o.maxTextureSize,max3dTextureSize:o.max3dTextureSize,maxRenderbufferSize:o.maxRenderbufferSize,maxDrawBuffers:o.maxDrawBuffers,maxTextureImageUnits:o.maxTextureImageUnits},attribute:(y,C,O,M)=>c("attribute",kl(e,t,n,y,C,O,M)),elements:(y,C)=>c("elements",Ul(e,y,C)),pixelPack:(y,C)=>{if(!A(e))throw new Error("WebGL2 is required for pixel-pack buffers");return c("pixelPack",zl(e,n,y,C))},uniformBuffer:K,uniformRingBuffer:y=>c("uniform",Gd(W(),y)),materialUniformBuffer:(y,C)=>y===-1?K(C):Ea(ae.get({materialId:y,layout:C})),framebuffer:()=>c("framebuffer",Pl(e,n,t)),program:(y,C,O)=>Ea(B.get({defineValues:y,shaderCode:C,schema:O})),renderbuffer:(y,C,O,M)=>c("renderbuffer",Od(e,y,C,O,M,t)),shader:l,texture:(y,C,O,M)=>{let X=Ra(c("texture",Il(e,n,y,C,O,M,t)));return d.add(X),X},ownsTexture:y=>d.has(y),cubeTexture:(y,C,O)=>{let M;f.track(new Promise(Y=>M=Y),"cube texture");let X=Ol(e,y,C,Y=>{O?.(Y),M?.(),M=void 0});return Ra(c("cubeTexture",X))},vertexArray:(y,C,O)=>c("vertexArray",Md(e,t,n,y,C,O)),getByteCounts:()=>{let y=0;s.texture.forEach(J=>{y+=J.getByteCount()});let C=0;s.cubeTexture.forEach(J=>{C+=J.getByteCount()});let O=0;s.attribute.forEach(J=>{O+=J.getByteCount()});let M=0;s.elements.forEach(J=>{M+=J.getByteCount()});let X=0;s.pixelPack.forEach(J=>{X+=J.getByteCount()});let Y=V?.getByteCount()??0,ve=0;return s.renderbuffer.forEach(J=>{ve+=J.getByteCount()}),{texture:y,cubeTexture:C,attribute:O,elements:M,pixelPack:X,uniform:Y,renderbuffer:ve,storageBuffer:0}},pending:f,loadImage:(y,C,O,M="image")=>{let X=tc(C).then(Y=>{y.load(Y),O&&I.update(O,y)});return f.track(X,M)},linkPrograms:y=>{for(let C of m)y&&!y.includes(C.variant)||(C.link(),b(C))},preparePipelines:y=>{for(let{item:C,variant:O}of y){let M=C.getProgram(O);M.link(),b(M)}return f.whenReady()},finalizePrograms:(y,C)=>{let O=!0,M=0;for(let J of m)J.isReady()&&m.delete(J),(!y||y.includes(J.variant))&&(O=!1,M+=1);if(O)return!0;let X=!0,Y=0,ve=vt();for(let J of m)if(!(y&&!y.includes(J.variant))&&(J.finalize(C)?(m.delete(J),Y+=1):X=!1,!C&&vt()-ve>16)){X=!1;break}return pe&&console.log(`Finalized ${Y} of ${M} programs (${y?y.join(", "):"all"}) in ${(vt()-ve).toFixed(2)} ms`),X},destroy:()=>{D(),f.clear(),s.attribute.forEach(y=>y.destroy()),s.elements.forEach(y=>y.destroy()),s.pixelPack.forEach(y=>y.destroy()),s.uniform.forEach(y=>y.destroy()),s.framebuffer.forEach(y=>y.destroy()),s.renderbuffer.forEach(y=>y.destroy()),s.shader.forEach(y=>y.destroy()),s.program.forEach(y=>y.destroy()),s.vertexArray.forEach(y=>y.destroy()),s.texture.forEach(y=>y.destroy()),s.cubeTexture.forEach(y=>y.destroy()),u.clear(),B.clear(),ae.clear(),V?.destroy(),m.clear()}}}var ig=Fe();function zd(e,t,r,n="depth",o="uint8",i="nearest",a="rgba"){let s=e.framebuffer(),c=o==="fp16"?e.texture("image-float16",a,"fp16",i):o==="float32"?e.texture("image-float32",a,"float",i):e.texture("image-uint8",a,"ubyte",i),u=n==="none"?null:n==="depth-stencil"?e.renderbuffer("depth32f-stencil8","depth-stencil",t,r):e.renderbuffer("depth32f","depth",t,r);function l(){c.define(t,r),c.attachFramebuffer(s,"color0"),u&&u.attachFramebuffer(s)}l();let d=!1;return{id:ig(),texture:c,framebuffer:s,depthRenderbuffer:u,getByteCount:()=>c.getByteCount()+(u?u.getByteCount():0),getWidth:()=>t,getHeight:()=>r,bind:()=>{s.bind()},setSize:(m,f)=>{t===m&&r===f||(t=m,r=f,c.define(t,r),u&&u.setSize(t,r))},destroy:()=>{d||(c.destroy(),s.destroy(),u&&u.destroy(),d=!0)}}}function Nd(e,t,r,n,o="depth",i="uint8",a="nearest",s="rgba"){return s==="r"&&!A(e)&&(s="rgba"),zd(t,r,n,o,i,a,s)}function ag(e,t){let r=t.disjointTimerQuery;if(!r)return;let n=new Map,o=0,i=-1;return{begin:()=>{let a=r.createQuery();if(!a)return-1;r.beginQuery(r.TIME_ELAPSED,a);let s=o++;return n.set(s,a),i=s,s},end:()=>{i!==-1&&(r.endQuery(r.TIME_ELAPSED),i=-1)},poll:()=>{let a=[];return n.forEach((s,c)=>{if(c===i)return;let u=r.getQueryParameter(s,r.QUERY_RESULT_AVAILABLE),l=e.getParameter(r.GPU_DISJOINT);u&&!l?a.push([c,r.getQueryParameter(s,r.QUERY_RESULT)]):l&&a.push([c,void 0]),(u||l)&&(r.deleteQuery(s),n.delete(c))}),a},clear:()=>{i!==-1&&r.endQuery(r.TIME_ELAPSED),i=-1,n.forEach(a=>r.deleteQuery(a)),n.clear()}}}function jd(e,t,r,n){return Ec(ag(e,t),r,n)}function Wd(e,t){if(!N)return;let{capabilities:r}=e;console.log({graphics:{backend:r.backend,capabilities:r,limits:e.resources.limits},[r.backend]:t})}var Hd=new WeakSet;function sg(e){return Hd.has(e)}function $d(e){if(!sg(e))throw new Error("expected WebGL global bindings, got global bindings of another backend");return e}function qd(e,t,r,n){let{state:o,resources:i}=e;r=r.map(([d,m])=>[d,$s(t,d,m,e.depthRangeConversion)]);let a=e.uniformBlocks?It("global",t):void 0,s;if(a){let d=i.uniformRingBuffer(a);s={buffer:d,write:d.createWriter(r)}}let c=s?r.filter(([d])=>{let m=t[d];return!(m?.type==="uniform"&&m.block==="global")}):r,u=!0,l={textures:n,invalidate:()=>{u=!0,o.currentRenderItemId=-1},apply:d=>{o.currentProgramId!==d.id&&(u=!0,d.use()),u&&(s&&(s.write(),s.buffer.sync(),s.buffer.bind()),d.setUniforms(c),d.bindTextures(n),u=!1)},destroy:()=>{s?.write.dispose(),s?.buffer.destroy()}};return Hd.add(l),l}function Xd(e,t){let r=A(e),n=t;return{backend:r?"webgl2":"webgl",texture3d:r,flatInterpolation:r,integerTextures:r,mixedAttachmentFormats:r,floatTextureLinear:!!n.textureFloatLinear,halfFloatTexture:!!n.textureHalfFloat,halfFloatTextureLinear:!!n.textureHalfFloat&&!!n.textureHalfFloatLinear,floatRenderTarget:!!n.colorBufferFloat,floatBlend:!!n.colorBufferFloat&&!!n.floatBlend,halfFloatRenderTarget:!!n.textureHalfFloat&&!!n.colorBufferHalfFloat,depthTexture:!!n.depthTexture,fragDepth:!!n.fragDepth,multipleRenderTargets:!!n.drawBuffers,textureLod:!!n.shaderTextureLod,multiDraw:!!n.multiDraw,clipControl:!!n.clipControl,depthClamp:!!n.depthClamp,compute:!1}}function Zd(){return{resourceCounts:{attribute:0,elements:0,pixelPack:0,uniform:0,framebuffer:0,program:0,renderbuffer:0,shader:0,texture:0,cubeTexture:0,vertexArray:0,storageBuffer:0,kernel:0},skippedDraws:0,drawCount:0,instanceCount:0,instancedDrawCount:0,calls:{drawInstanced:0,drawInstancedBase:0,multiDrawInstancedBase:0,counts:0},culled:{lod:0,frustum:0,occlusion:0},cacheHits:{cull:0}}}var cg={color:"",pick:"",depth:"",marking:"",emissive:"",tracing:""},Qd=Object.keys(cg),ug={compute:""},Yd=Object.keys(ug);var Kd=new WeakMap;function Jd(e,t){Kd.set(e,t)}function zo(e){let t=Kd.get(e);if(!t)throw new Error("not a WebGL context");return t()}function dr(e,t,r,n,o){e.setViewport(t,zo(e)-r-o,n,o)}function Lr(e,t,r,n,o){e.setScissor(t,zo(e)-r-o,n,o)}var lg=3e7,dg=Fe();function pg(e,t){let{gl:r}=e;switch(t){case"points":return r.POINTS;case"lines":return r.LINES;case"line-strip":return r.LINE_STRIP;case"line-loop":return r.LINE_LOOP;case"triangles":return r.TRIANGLES;case"triangle-strip":return r.TRIANGLE_STRIP;case"triangle-fan":return r.TRIANGLE_FAN}}function No(e,t,r,n,o){return r={...r,dRenderVariant:I.create(t)},o.dRenderVariant===void 0&&Object.defineProperty(o,"dRenderVariant",{value:We("string")}),e.resources.program(r,n,o)}function mg(){return{attributes:!1,defines:!1,elements:!1,textures:!1}}function fg(e){e.attributes=!1,e.defines=!1,e.elements=!1,e.textures=!1}function jo(e,t){if(e==="color")switch(t){case"blended":return"colorBlended";case"wboit":return"colorWboit";case"dpoit":return"colorDpoit"}return e}var hg=Fe();function rp(e,t,r,n,o){let i=new Map,a=s=>{let c=i.get(s);return c||(c=No(e,jo(s,o),n,t,r),i.set(s,c)),c};return{id:hg(),getProgram:a,destroy:()=>{for(let s of i.values())s.destroy();i.clear()}}}function np(e,t,r,n,o,i,a){return ip(e,t,r,n,o,i,Qd,a)}function op(e,t,r,n,o,i=-1){return ip(e,t,r,n,o,i,Yd,void 0)}var ep=2**24,tp=new WeakMap;function gg(e){let t=tp.get(e);if(t)return t;let r;for(let o of Object.keys(e)){let i=e[o];i.type!=="uniform"||!i.loopBound||(r??={...e},r[o]=We("number"))}let n=r??e;return tp.set(e,n),n}function ip(e,t,r,n,o,i,a,s){let c=dg(),{stats:u,state:l,resources:d}=e;e.isWebGL2||(n=gg(n));let{instancedArrays:m,vertexArrayObject:f,multiDrawInstancedBaseVertexBaseInstance:h,drawInstancedBaseVertexBaseInstance:g}=e.extensions;a=a.filter(L=>L==="tracing"?!!e.extensions.drawBuffers:!0);let T=sl(e.extensions),b=n.aVertex?.type==="attribute"&&ir(n.aVertex,T),D=()=>n.elements?o.uVertexCount.ref.value:Math.max(o.uVertexCount.ref.value,o.drawCount.ref.value),P=L=>{o.aVertex.ref.value.length>=L||(L>ep&&console.warn(`${L} vertices with an emulated vertex id (WebGL1): ids above ${ep} are not exact`),I.update(o.aVertex,Is(new Float32Array(L))))};b&&P(D());let{attributeValues:F,defineValues:B,textureValues:V,materialTextureValues:W,uniformValues:K,materialUniformValues:ae,bufferedUniformValues:ge}=qs(n,o,{depthRange:e.depthRangeConversion,targetHeight:()=>zo(e)}),y=e.uniformBlocks,C=L=>{let{block:te}=n[L];return!y||te==="draw"?void 0:te},O=[],M=[];for(let L of Object.entries(K)){let te=C(L[0]);if(te===void 0)O.push(L);else if(te==="object")M.push(L);else throw new Error(`uniform '${L[0]}' of block '${te}' cannot be set by a render item`)}let X=[],Y=[];for(let L of Object.entries(ae))C(L[0])==="material"?Y.push(L):X.push(L);let ve=Object.entries(ge),J=Object.entries(hl(ge)),w=[];for(let L of J)C(L[0])==="object"?M.push(L):w.push(L);let H=Object.entries(B),G,Z=y?It("object",n):void 0;if(Z){let L=d.uniformBuffer(Z);G={buffer:L,write:L.createWriter(M)},G.write()}let se,Ae=y?It("material",n):void 0;if(Ae){let L=d.materialUniformBuffer(i,Ae);se={buffer:L,write:L.createWriter(Y)},se.write()}let v=Xs(o),E=pg(e,t),k={};for(let L of a)k[L]=No(e,jo(L,s),B,r,n);let j=Pa(e,n,V),Nt=Pa(e,n,W),Mt=Gl(e,n,F,T),Un=[];for(let L=0,te=Mt.length;L<te;++L){let ue=Mt[L];ue[1].divisor===1&&Un.push(ue)}let Re,Xi=o.elements;Xi&&Xi.ref.value&&(Re=d.elements(Xi.ref.value));let Ts=Qr(n),Pr=f?d.vertexArray(Ts,Mt,Re):null,xt=o.drawCount.ref.value,ft=o.instanceCount.ref.value;u.drawCount+=xt,u.instanceCount+=ft,u.instancedDrawCount+=ft*xt;let er=mg(),Cs=!1,zn=-1;return{id:c,materialId:i,getByteCount(){let L=0;for(let te=0,ue=Mt.length;te<ue;++te)L+=Mt[te][1].getByteCount();Re&&(L+=Re.getByteCount()),G&&(L+=G.buffer.getByteCount());for(let te=0,ue=j.length;te<ue;++te)L+=j[te][1].getByteCount();for(let te=0,ue=Nt.length;te<ue;++te)L+=Nt[te][1].getByteCount();return L},getProgram:L=>k[L],getLinearTextures:()=>{let L=[];for(let te of[j,Nt])for(let[ue,ie]of te)ie.filter===e.gl.LINEAR&&L.push(ue);return L},setTransparency:L=>{if(L!==s){s=L;for(let te of a)k[te].destroy(),k[te]=No(e,jo(te,s),B,r,n)}},render:(L,te,ue)=>{if(xt===0||ft===0)return;Io(l,"draw");let ie=k[L];if(te&&$d(te).apply(ie),ie.id===zn&&l.currentRenderItemId===c?(ie.setUniforms(O),G&&(G.write(),G.buffer.sync(),G.buffer.bind()),ie.bindTextures(j)):((ie.id!==l.currentProgramId||ie.id!==zn||i===-1||i!==l.currentMaterialId)&&(ie.id!==l.currentProgramId&&ie.use(),ie.setUniforms(X),se&&(se.write(),se.buffer.sync(),se.buffer.bind()),ie.bindTextures(Nt),l.currentMaterialId=i,zn=ie.id),ie.setUniforms(O),ie.setUniforms(w),G&&(G.write(),G.buffer.sync(),G.buffer.bind()),ie.bindTextures(j),Pr?(Pr.bind(),Re&&Re.bind()):(Re&&Re.bind(),ie.bindAttributes(Mt)),l.currentRenderItemId=c),N&&e.checkFramebufferStatus(`Framebuffer error rendering item id ${c}`),ue){for(let U of ue)if(U.count!==0){if(ie.setUniforms(U.uniforms),h)Re?h.multiDrawElementsInstancedBaseVertexBaseInstance(E,U.counts,0,Re._dataType,U.offsets,0,U.instanceCounts,0,U.baseVertices,0,U.baseInstances,0,U.count):h.multiDrawArraysInstancedBaseInstance(E,U.firsts,0,U.counts,0,U.instanceCounts,0,U.baseInstances,0,U.count);else if(g)if(Re)for(let ee=0;ee<U.count;++ee)U.counts[ee]>0&&(ie.uniform("uDrawId",ee),g.drawElementsInstancedBaseVertexBaseInstance(E,U.counts[ee],Re._dataType,U.offsets[ee],U.instanceCounts[ee],U.baseVertices[ee],U.baseInstances[ee]));else for(let ee=0;ee<U.count;++ee)U.counts[ee]>0&&(ie.uniform("uDrawId",ee),g.drawArraysInstancedBaseInstance(E,U.firsts[ee],U.counts[ee],U.instanceCounts[ee],U.baseInstances[ee]));else if(Re)for(let ee=0;ee<U.count;++ee)U.counts[ee]>0&&(ie.uniform("uDrawId",ee),ie.offsetAttributes(Un,U.baseInstances[ee]),m.drawElementsInstanced(E,U.counts[ee],Re._dataType,U.offsets[ee],U.instanceCounts[ee]));else for(let ee=0;ee<U.count;++ee)U.counts[ee]>0&&(ie.uniform("uDrawId",ee),ie.offsetAttributes(Un,U.baseInstances[ee]),m.drawArraysInstanced(E,U.firsts[ee],U.counts[ee],U.instanceCounts[ee]));if(pe){h?u.calls.multiDrawInstancedBase+=1:g?u.calls.drawInstancedBase+=U.count:u.calls.drawInstanced+=U.count;for(let ee=0;ee<U.count;++ee)u.calls.counts+=U.instanceCounts[ee]}}!h&&!g&&ie.offsetAttributes(Un,0)}else{let U=0;for(;;){let ee=Math.min(xt-U,lg);if(Re?m.drawElementsInstanced(E,ee,Re._dataType,U*Re._bpe,ft):m.drawArraysInstanced(E,U,ee,ft),U+=ee,U>=xt)break}pe&&(u.calls.drawInstanced+=1,u.calls.counts+=ft)}N&&e.checkError(`Draw error rendering item id ${c}`)},update:()=>{fg(er),zn=-1,b&&P(D());for(let L=0,te=H.length;L<te;++L){let[ue,ie]=H[L];ie.ref.version!==v[ue]&&(er.defines=!0,v[ue]=ie.ref.version)}if(er.defines)for(let L of a)k[L].destroy(),k[L]=No(e,jo(L,s),B,r,n);o.drawCount.ref.version!==v.drawCount&&(u.drawCount+=o.drawCount.ref.value-xt,u.instancedDrawCount+=ft*o.drawCount.ref.value-ft*xt,xt=o.drawCount.ref.value,v.drawCount=o.drawCount.ref.version),o.instanceCount.ref.version!==v.instanceCount&&(u.instanceCount+=o.instanceCount.ref.value-ft,u.instancedDrawCount+=o.instanceCount.ref.value*xt-ft*xt,ft=o.instanceCount.ref.value,v.instanceCount=o.instanceCount.ref.version);for(let L=0,te=Mt.length;L<te;++L){let[ue,ie]=Mt[L],U=F[ue];if(U.ref.version!==v[ue]){if(ie.length>=U.ref.value.length)ie.updateSubData(U.ref.value,0,ie.length);else{ie.destroy();let{itemSize:ee,divisor:vf}=n[ue];Mt[L][1]=d.attribute(U.ref.value,ee,vf),er.attributes=!0}v[ue]=U.ref.version}}Re&&o.elements.ref.version!==v.elements&&(Re.length>=o.elements.ref.value.length?Re.updateSubData(o.elements.ref.value,0,Re.length):(Re.destroy(),Re=d.elements(o.elements.ref.value),er.elements=!0),v.elements=o.elements.ref.version),(er.attributes||er.elements)&&(Pr&&Pr.destroy(),Pr=f?d.vertexArray(Ts,Mt,Re):null);for(let L=0,te=j.length;L<te;++L){let[ue,ie]=j[L],U=V[ue];U.ref.version!==v[ue]&&(n[ue].kind!=="texture"?(ie.load(U.ref.value),er.textures=!0):j[L][1]=U.ref.value,v[ue]=U.ref.version)}for(let L=0,te=Nt.length;L<te;++L){let[ue,ie]=Nt[L],U=W[ue];U.ref.version!==v[ue]&&(n[ue].kind!=="texture"?(ie.load(U.ref.value),er.textures=!0):Nt[L][1]=U.ref.value,v[ue]=U.ref.version)}for(let L=0,te=ve.length;L<te;++L){let[ue,ie]=ve[L];ie.ref.version!==v[ue]&&(I.update(J[L][1],Wn(ie.ref.value)),v[ue]=ie.ref.version)}},destroy:()=>{if(!Cs){for(let L of a)k[L].destroy();Pr&&Pr.destroy(),j.forEach(([L,te])=>{n[L].kind!=="texture"&&te.destroy()}),Nt.forEach(([L,te])=>{n[L].kind!=="texture"&&te.destroy()}),Mt.forEach(([L,te])=>te.destroy()),Re&&Re.destroy(),G&&(G.write.dispose(),G.buffer.destroy()),se&&(se.write.dispose(),se.buffer.destroy()),u.drawCount-=xt,u.instanceCount-=ft,u.instancedDrawCount-=ft*xt,Cs=!0}}}}function Wo(e,t){switch(t){case"zero":return e.ZERO;case"one":return e.ONE;case"src":return e.SRC_COLOR;case"one-minus-src":return e.ONE_MINUS_SRC_COLOR;case"src-alpha":return e.SRC_ALPHA;case"one-minus-src-alpha":return e.ONE_MINUS_SRC_ALPHA;case"dst":return e.DST_COLOR;case"one-minus-dst":return e.ONE_MINUS_DST_COLOR;case"dst-alpha":return e.DST_ALPHA;case"one-minus-dst-alpha":return e.ONE_MINUS_DST_ALPHA;case"constant":return e.CONSTANT_COLOR;case"one-minus-constant":return e.ONE_MINUS_CONSTANT_COLOR}}function ap(e,t,r){switch(r){case"add":return e.FUNC_ADD;case"subtract":return e.FUNC_SUBTRACT;case"reverse-subtract":return e.FUNC_REVERSE_SUBTRACT;case"min":return t.blendMinMax.MIN;case"max":return t.blendMinMax.MAX}}function Aa(e,t){switch(t){case"never":return e.NEVER;case"less":return e.LESS;case"equal":return e.EQUAL;case"less-equal":return e.LEQUAL;case"greater":return e.GREATER;case"not-equal":return e.NOTEQUAL;case"greater-equal":return e.GEQUAL;case"always":return e.ALWAYS}}function Kr(e,t){switch(t){case"keep":return e.KEEP;case"zero":return e.ZERO;case"replace":return e.REPLACE;case"invert":return e.INVERT;case"increment-clamp":return e.INCR;case"decrement-clamp":return e.DECR;case"increment-wrap":return e.INCR_WRAP;case"decrement-wrap":return e.DECR_WRAP}}function sp(e,t,r){let n=new Int32Array(4),o={},i=!1;return{setDepthReadOnly:a=>{i=a},setRenderState:a=>{o=a;let{blend:s,colorWrite:c,depth:u,stencil:l,cull:d,frontFace:m}=a;if(s){t.enable(e.BLEND);let{color:f,alpha:h}=s;t.blendFuncSeparate(Wo(e,f.srcFactor),Wo(e,f.dstFactor),Wo(e,h.srcFactor),Wo(e,h.dstFactor)),t.blendEquationSeparate(ap(e,r,f.operation),ap(e,r,h.operation))}else t.disable(e.BLEND);if(c?t.colorMask(c[0],c[1],c[2],c[3]):t.colorMask(!0,!0,!0,!0),u?(t.enable(e.DEPTH_TEST),t.depthFunc(Aa(e,u.compare)),t.depthMask(u.write&&!i)):(t.disable(e.DEPTH_TEST),t.depthMask(!1)),l){t.enable(e.STENCIL_TEST);let{front:f,back:h,readMask:g,writeMask:T,reference:b}=l;t.stencilFuncSeparate(e.FRONT,Aa(e,f.compare),b,g),t.stencilFuncSeparate(e.BACK,Aa(e,h.compare),b,g),t.stencilOpSeparate(e.FRONT,Kr(e,f.failOp),Kr(e,f.depthFailOp),Kr(e,f.passOp)),t.stencilOpSeparate(e.BACK,Kr(e,h.failOp),Kr(e,h.depthFailOp),Kr(e,h.passOp)),t.stencilMask(i?0:T)}else t.disable(e.STENCIL_TEST);d==="front"||d==="back"?(t.enable(e.CULL_FACE),t.cullFace(d==="front"?e.FRONT:e.BACK)):t.disable(e.CULL_FACE),t.frontFace(m==="cw"?e.CW:e.CCW)},setViewport:(a,s,c,u)=>{t.viewport(a,s,c,u)},setScissor:(a,s,c,u)=>{t.enable(e.SCISSOR_TEST),t.scissor(a,s,c,u)},disableScissor:()=>{t.disable(e.SCISSOR_TEST)},clear:a=>{Io(t,"clear");let{color:s,depth:c,stencil:u}=a;if(i&&(c!==void 0||u!==void 0))throw new Error("clearing the depth or stencil of a render pass with a read-only depth attachment");let l=0;if(s&&(t.colorMask(!0,!0,!0,!0),A(e)&&Rl(e)?(n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],e.clearBufferiv(e.COLOR,0,n)):(t.clearColor(s[0],s[1],s[2],s[3]),l|=e.COLOR_BUFFER_BIT)),c!==void 0&&(t.depthMask(!0),t.clearDepth(c),l|=e.DEPTH_BUFFER_BIT),u!==void 0&&(t.stencilMask(255),t.clearStencil(u),l|=e.STENCIL_BUFFER_BIT),l&&e.clear(l),s){let d=o.colorWrite;d&&t.colorMask(d[0],d[1],d[2],d[3])}c!==void 0&&t.depthMask((o.depth?.write??!1)&&!i),u!==void 0&&o.stencil&&t.stencilMask(i?0:o.stencil.writeMask)}}}var yg={...Xt,tTexture:je("texture","rgba","float","nearest",void 0,{sampleType:"sint"})},bg=$t("sum"),Ot="histopyramid-sum";function xg(e,t){if(e.namedComputeRenderables[Ot]){let r=e.namedComputeRenderables[Ot].values;I.update(r.tTexture,t),e.namedComputeRenderables[Ot].update()}else e.namedComputeRenderables[Ot]=vg(e,t);return e.namedComputeRenderables[Ot]}function vg(e,t){let r={...Zt,tTexture:I.create(t)},n={...yg},o=e.createComputeRenderItem("triangles",bg,n,r);return Ht(o,r)}var Ho=new Uint8Array(4),cp=new Int32Array(4);function up(e,t){pe&&e.timer.group("getHistopyramidSum");let{gl:r,resources:n,capabilities:o}=e,i=xg(e,t);e.namedFramebuffers[Ot]||(e.namedFramebuffers[Ot]=n.framebuffer());let a=e.namedFramebuffers[Ot];return e.namedTextures[Ot]||(e.namedTextures[Ot]=o.integerTextures?n.texture("image-int32","rgba","int","nearest"):n.texture("image-uint8","rgba","ubyte","nearest"),e.namedTextures[Ot].define(1,1)),e.namedTextures[Ot].attachFramebuffer(a,0),e.beginRenderPass(a,{label:"histogram pyramid sum"}),e.setRenderState(Tt.Default),e.disableScissor(),dr(e,0,0,1,1),i.render(),e.readPixels(0,0,1,1,o.integerTextures?cp:Ho),r.bindFramebuffer(r.FRAMEBUFFER,null),pe&&e.timer.groupEnd("getHistopyramidSum"),o.integerTextures?cp[0]:Cc(Ho[0],Ho[1],Ho[2])}var Sg={...Xt,tInputLevel:je("texture","rgba","float","nearest"),tPreviousLevel:je("texture","rgba","float","nearest",void 0,{sampleType:"sint"}),uSize:he("f"),uTexSize:he("f"),uFirst:he("b")},Tg=$t("reduction"),xr="histogram-pyramid";function Cg(e,t,r){if(e.namedComputeRenderables[xr]){let n=e.namedComputeRenderables[xr].values;I.update(n.tInputLevel,t),I.update(n.tPreviousLevel,r),e.namedComputeRenderables[xr].update()}else e.namedComputeRenderables[xr]=Rg(e,t,r);return e.namedComputeRenderables[xr]}function Rg(e,t,r){let n={...Zt,tInputLevel:I.create(t),tPreviousLevel:I.create(r),uSize:I.create(0),uTexSize:I.create(0),uFirst:I.create(!0)},o={...Sg},i=e.createComputeRenderItem("triangles",Tg,o,n);return Ht(i,n)}function Pg(e,t){let r=Math.pow(2,t),n=`level${t}`,o=e.capabilities.integerTextures?$o(n,e,"image-int32","r","int","nearest"):$o(n,e,"image-uint8","rgba","ubyte","nearest");o.define(r,r);let i=Dg(n,e);return i||(i=lp(n,e)),o.attachFramebuffer(i,0),{texture:o,framebuffer:i}}function lp(e,t){let r=`${xr}-${e}`;return t.namedFramebuffers[r]||(t.namedFramebuffers[r]=t.resources.framebuffer()),t.namedFramebuffers[r]}function $o(e,t,r,n,o,i){let a=`${xr}-${e}`;return t.namedTextures[a]||(t.namedTextures[a]=t.resources.texture(r,n,o,i)),t.namedTextures[a]}function Dg(e,t){let r=`${xr}-${e}`;return t.namedFramebuffers[r]}function dp(e,t,r,n){pe&&e.timer.group("createHistogramPyramid");let o=t.getWidth(),i=t.getHeight();if(o!==i||!gn(o))throw new Error("inputTexture must be of square power-of-two size");let a=Math.ceil(Math.log(o)/Math.log(2)),s=Math.pow(2,a),c=Math.pow(2,a),u=Math.pow(2,a-1),l=e.capabilities.integerTextures?$o("pyramid",e,"image-int32","r","int","nearest"):$o("pyramid",e,"image-uint8","rgba","ubyte","nearest");l.define(c,u);let d=lp("pyramid",e);l.attachFramebuffer(d,0),e.beginRenderPass(d,{label:"histogram pyramid"}),e.setRenderState(Tt.Default),dr(e,0,0,c,u),Lr(e,0,0,c,u),e.clear({color:[0,0,0,0]});let m=[];for(let b=0;b<a;++b)m.push(Pg(e,b));let f=Cg(e,t,m[0].texture),h=0;for(let b=0;b<a;b++){let D=a-1-b,P=m[D];e.beginRenderPass(P.framebuffer,{label:"histogram pyramid"});let F=Math.pow(2,D);I.update(f.values.uSize,Math.pow(2,b+1)/s),I.update(f.values.uTexSize,F),I.updateIfChanged(f.values.uFirst,b===0),b>0&&(I.update(f.values.tPreviousLevel,m[a-b].texture),f.update()),dr(e,0,0,F,F),Lr(e,0,0,F,F),e.clear({color:[0,0,0,0]}),Lr(e,0,0,n[0],n[1]),f.render(),l.copyFromFramebuffer(P.framebuffer,0,P.texture.getHeight()-F,F,F,h,l.getHeight()-F),h+=F}pe&&e.timer.groupEnd("createHistogramPyramid");let g=Math.max(1,up(e,m[0].texture)),T=Math.ceil(g/Math.pow(2,a));return{pyramidTex:l,count:g,height:T,levels:a,scale:r}}var Dn;function pp(){if(Dn!==void 0)return Dn;Dn=ua(256,1,Uint8Array);let{array:e}=Dn;for(let t=0,r=Nr.length;t<r;++t)e[t]=Nr[t].length/3;return Dn}var _n;function mp(){if(_n!==void 0)return _n;_n=ua(4096,1,Uint8Array);let{array:e}=_n;for(let t=0,r=Nr.length;t<r;++t)for(let n=0;n<16;++n)n<Nr[t].length?e[t*16+n]=Nr[t][n]:e[t*16+n]=255;return _n}var _g={...Xt,tTriCount:je("image-uint8","r","ubyte","nearest"),tVolumeData:je("texture","rgba","ubyte","nearest"),dValueChannel:We("string",["red","alpha"]),uIsoValue:he("f"),uGridDim:he("v3"),uGridTexDim:he("v3"),uScale:he("v2")},Eg=$t("active-voxels"),Gt="active-voxels";function Ag(e,t,r,n,o,i,a){if(e.namedComputeRenderables[Gt]){let s=e.namedComputeRenderables[Gt].values;I.update(s.uQuadScale,a),I.update(s.tVolumeData,t),I.update(s.dValueChannel,r),I.updateIfChanged(s.uIsoValue,i),I.update(s.uGridDim,n),I.update(s.uGridTexDim,o),I.update(s.uScale,a),e.namedComputeRenderables[Gt].update()}else e.namedComputeRenderables[Gt]=wg(e,t,r,n,o,i,a);return e.namedComputeRenderables[Gt]}function wg(e,t,r,n,o,i,a){let s={...Zt,tTriCount:I.create(pp()),uQuadScale:I.create(a),tVolumeData:I.create(t),dValueChannel:I.create(r),uIsoValue:I.create(i),uGridDim:I.create(n),uGridTexDim:I.create(o),uScale:I.create(a)},c={..._g},u=e.createComputeRenderItem("triangles",Eg,c,s);return Ht(u,s)}function fp(e,t,r,n,o,i,a){pe&&e.timer.group("calcActiveVoxels");let{resources:s}=e,c=t.getWidth(),u=t.getHeight();e.namedFramebuffers[Gt]||(e.namedFramebuffers[Gt]=s.framebuffer());let l=e.namedFramebuffers[Gt];e.namedTextures[Gt]||(e.namedTextures[Gt]=s.texture("image-uint8","rgba","ubyte","nearest"));let d=e.namedTextures[Gt];d.define(c,u);let m=Ag(e,t,r,n,o,i,a);return d.attachFramebuffer(l,0),e.beginRenderPass(l,{label:"active voxels"}),e.setRenderState(Tt.Default),dr(e,0,0,c,u),Lr(e,0,0,c,u),e.clear({color:[0,0,0,0]}),Lr(e,0,0,o[0],o[1]),m.render(),pe&&e.timer.groupEnd("calcActiveVoxels"),d}var Lg={...Xt,tTriIndices:je("image-uint8","r","ubyte","nearest"),tActiveVoxelsPyramid:je("texture","rgba","float","nearest",void 0,{sampleType:"sint"}),tActiveVoxelsBase:je("texture","rgba","float","nearest"),tVolumeData:je("texture","rgba","ubyte","nearest"),dValueChannel:We("string",["red","alpha"]),uIsoValue:he("f"),uSize:he("f"),uLevels:he("f"),uCount:he("f"),uInvert:he("b"),uGridDim:he("v3"),uGridTexDim:he("v3"),uGridDataDim:he("v3"),uGridTransform:he("m4"),uGridTransformAdjoint:he("m3"),uScale:he("v2"),dPackedGroup:We("boolean"),dAxisOrder:We("string",["012","021","102","120","201","210"]),dConstantGroup:We("boolean")},Ig=$t("isosurface",{drawBuffers:"required"}),vr="isosurface";function Og(e,t,r,n,o,i,a,s,c,u,l,d,m,f,h,g,T){if(e.namedComputeRenderables[vr]){let b=e.namedComputeRenderables[vr].values;I.update(b.tActiveVoxelsPyramid,t),I.update(b.tActiveVoxelsBase,r),I.update(b.tVolumeData,n),I.update(b.dValueChannel,o),I.updateIfChanged(b.uIsoValue,u),I.updateIfChanged(b.uSize,Math.pow(2,l)),I.updateIfChanged(b.uLevels,l),I.updateIfChanged(b.uCount,m),I.updateIfChanged(b.uInvert,f),I.update(b.uGridDim,i),I.update(b.uGridTexDim,a),I.update(b.uGridDataDim,s),I.update(b.uGridTransform,c),I.update(b.uGridTransformAdjoint,q.adjointFromMat4(q(),c)),I.update(b.uScale,d),I.updateIfChanged(b.dPackedGroup,h),I.updateIfChanged(b.dAxisOrder,g.join("")),I.updateIfChanged(b.dConstantGroup,T),e.namedComputeRenderables[vr].update()}else e.namedComputeRenderables[vr]=Fg(e,t,r,n,o,i,a,s,c,u,l,d,m,f,h,g,T);return e.namedComputeRenderables[vr]}function Fg(e,t,r,n,o,i,a,s,c,u,l,d,m,f,h,g,T){let b={...Zt,tTriIndices:I.create(mp()),tActiveVoxelsPyramid:I.create(t),tActiveVoxelsBase:I.create(r),tVolumeData:I.create(n),dValueChannel:I.create(o),uIsoValue:I.create(u),uSize:I.create(Math.pow(2,l)),uLevels:I.create(l),uCount:I.create(m),uInvert:I.create(f),uGridDim:I.create(i),uGridTexDim:I.create(a),uGridDataDim:I.create(s),uGridTransform:I.create(c),uGridTransformAdjoint:I.create(q.adjointFromMat4(q(),c)),uScale:I.create(d),dPackedGroup:I.create(h),dAxisOrder:I.create(g.join("")),dConstantGroup:I.create(T)},D={...Lg},P=e.createComputeRenderItem("triangles",Ig,D,b);return Ht(P,b)}function Mg(e,t,r,n,o,i,a,s,c,u,l,d,m,f,h,g,T){if(!e.capabilities.multipleRenderTargets)throw new Error("need multiple render targets");pe&&e.timer.group("createIsosurfaceBuffers");let{resources:b,capabilities:D}=e,{pyramidTex:P,height:F,levels:B,scale:V,count:W}=o,K=P.getWidth();e.namedFramebuffers[vr]||(e.namedFramebuffers[vr]=b.framebuffer());let ae=e.namedFramebuffers[vr];D.mixedAttachmentFormats?(h||(h=b.texture("image-float32","rgba","float","nearest")),g||(g=b.texture("image-uint8","rgba","ubyte","nearest")),T||(T=D.halfFloatRenderTarget?b.texture("image-float16","rgba","fp16","nearest"):b.texture("image-float32","rgba","float","nearest"))):(h||(h=b.texture("image-float32","rgba","float","nearest")),g||(g=b.texture("image-float32","rgba","float","nearest")),T||(T=b.texture("image-float32","rgba","float","nearest"))),h.define(K,F),g.define(K,F),T.define(K,F),h.attachFramebuffer(ae,0),g.attachFramebuffer(ae,1),T.attachFramebuffer(ae,2);let ge=Og(e,P,t,r,n,i,a,s,c,u,B,V,W,l,d,m,f);return ae.setDrawBuffers(3),e.beginRenderPass(ae,{label:"isosurface"}),e.setRenderState(Tt.Default),e.disableScissor(),dr(e,0,0,K,F),e.clear({color:[0,0,0,0]}),ge.render(),pe&&e.timer.groupEnd("createIsosurfaceBuffers"),{vertexTexture:h,groupTexture:g,normalTexture:T,vertexCount:W}}function Bg(e,t,r,n,o,i,a,s,c,u,l,d,m,f,h,g){pe&&e.timer.group("extractIsosurface");let T=fp(e,t,r,n,o,c,a),b=dp(e,T,a,o),D=Mg(e,T,t,r,b,n,o,i,s,c,u,l,d,m,f,h,g);return pe&&e.timer.groupEnd("extractIsosurface"),D}var hp={isSupported:e=>Jr(e),extract:(e,t,r)=>{if(!Jr(e))throw new Error("not a WebGL context");return Bg(e,t.texture,t.channel,t.gridDim,t.gridTexDim,t.gridDataDim,t.gridTexScale,t.transform,t.isoValue,t.invert,t.packedGroup,t.axisOrder,t.constantGroup,r?.vertex,r?.group,r?.normal)}};var gp=[];function yp(e){gp.includes(e)||gp.push(e)}var qA={uDimensions:he("v3"),uMin:he("v3"),uDelta:he("v3"),outValues:Ks("f32","read-write"),dCumulative:We("boolean")};function bp(){let e=new ArrayBuffer(2),t=new Uint8Array(e),r=new Uint16Array(e);return t[0]=170,t[1]=187,r[0]===48042}var xp=`
    // floatToRgba adapted from https://github.com/equinor/glsl-float-to-rgba
    // MIT License, Copyright (c) 2020 Equinor

    float shiftRight (float v, float amt) {
    v = floor(v) + 0.5;
    return floor(v / exp2(amt));
    }
    float shiftLeft (float v, float amt) {
        return floor(v * exp2(amt) + 0.5);
    }
    float maskLast (float v, float bits) {
        return mod(v, shiftLeft(1.0, bits));
    }
    float extractBits (float num, float from, float to) {
        from = floor(from + 0.5); to = floor(to + 0.5);
        return maskLast(shiftRight(num, from), to - from);
    }

    vec4 floatToRgba(float texelFloat, bool littleEndian) {
        if (texelFloat == 0.0) return vec4(0.0, 0.0, 0.0, 0.0);
        float sign = texelFloat > 0.0 ? 0.0 : 1.0;
        texelFloat = abs(texelFloat);
        float exponent = floor(log2(texelFloat));
        float biased_exponent = exponent + 127.0;
        float fraction = ((texelFloat / exp2(exponent)) - 1.0) * 8388608.0;
        float t = biased_exponent / 2.0;
        float last_bit_of_biased_exponent = fract(t) * 2.0;
        float remaining_bits_of_biased_exponent = floor(t);
        float byte4 = extractBits(fraction, 0.0, 8.0) / 255.0;
        float byte3 = extractBits(fraction, 8.0, 16.0) / 255.0;
        float byte2 = (last_bit_of_biased_exponent * 128.0 + extractBits(fraction, 16.0, 23.0)) / 255.0;
        float byte1 = (sign * 128.0 + remaining_bits_of_biased_exponent) / 255.0;
        return (
            littleEndian
                ? vec4(byte4, byte3, byte2, byte1)
                : vec4(byte1, byte2, byte3, byte4)
        );
    }
`;var vp=`
    // rgbaToFloat adapted from https://github.com/ihmeuw/glsl-rgba-to-float
    // BSD 3-Clause License
    //
    // Copyright (c) 2019, Institute for Health Metrics and Evaluation All rights reserved.
    // Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    //  - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    //  - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    //  - Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    //
    // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
    // INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    // IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    // OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
    // OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    // OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
    // OF THE POSSIBILITY OF SUCH DAMAGE.

    ivec4 floatsToBytes(vec4 inputFloats, bool littleEndian) {
        ivec4 bytes = ivec4(inputFloats * 255.0);
        return (
            littleEndian
                ? bytes.abgr
                : bytes
        );
    }

    // Break the four bytes down into an array of 32 bits.
    void bytesToBits(const in ivec4 bytes, out bool bits[32]) {
        for (int channelIndex = 0; channelIndex < 4; ++channelIndex) {
            float acc = float(bytes[channelIndex]);
            for (int indexInByte = 7; indexInByte >= 0; --indexInByte) {
                float powerOfTwo = exp2(float(indexInByte));
                bool bit = acc >= powerOfTwo;
                bits[channelIndex * 8 + (7 - indexInByte)] = bit;
                acc = mod(acc, powerOfTwo);
            }
        }
    }

    // Compute the exponent of the 32-bit float.
    float getExponent(bool bits[32]) {
        const int startIndex = 1;
        const int bitStringLength = 8;
        const int endBeforeIndex = startIndex + bitStringLength;
        float acc = 0.0;
        int pow2 = bitStringLength - 1;
        for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
            acc += float(bits[bitIndex]) * exp2(float(pow2--));
        }
        return acc;
    }

    // Compute the mantissa of the 32-bit float.
    float getMantissa(bool bits[32], bool subnormal) {
        const int startIndex = 9;
        const int bitStringLength = 23;
        const int endBeforeIndex = startIndex + bitStringLength;
        // Leading/implicit/hidden bit convention:
        // If the number is not subnormal (with exponent 0), we add a leading 1 digit.
        float acc = float(!subnormal) * exp2(float(bitStringLength));
        int pow2 = bitStringLength - 1;
        for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
            acc += float(bits[bitIndex]) * exp2(float(pow2--));
        }
        return acc;
    }

    // Parse the float from its 32 bits.
    float bitsToFloat(bool bits[32]) {
        float signBit = float(bits[0]) * -2.0 + 1.0;
        float exponent = getExponent(bits);
        bool subnormal = abs(exponent - 0.0) < 0.01;
        float mantissa = getMantissa(bits, subnormal);
        float exponentBias = 127.0;
        return signBit * mantissa * exp2(exponent - exponentBias - 23.0);
    }

    float rgbaToFloat(vec4 texelRGBA, bool littleEndian) {
        ivec4 rgbaBytes = floatsToBytes(texelRGBA, littleEndian);
        bool bits[32];
        bytesToBits(rgbaBytes, bits);
        return bitsToFloat(bits);
    }
`;var Sp=`
precision highp float;
precision highp int;

{UTILS}

${xp}
#ifdef CUMULATIVE
    ${vp}
#endif

float intDiv(float a, float b) { return float(int(a) / int(b)); }
float intMod(float a, float b) { return a - b * float(int(a) / int(b)); }

void main(void) {
    float offset = floor(gl_FragCoord.x) + floor(gl_FragCoord.y) * uWidth;

    // axis order fast to slow Z, Y, X
    // TODO: support arbitrary axis orders?
    float k = intMod(offset, uDimensions.z), kk = intDiv(offset, uDimensions.z);
    float j = intMod(kk, uDimensions.y);
    float i = intDiv(kk, uDimensions.y);

    vec3 xyz = uMin + uDelta * vec3(i, j, k);

    {MAIN}

    #ifdef CUMULATIVE
        float current = rgbaToFloat(texture2D(tCumulativeSum, gl_FragCoord.xy / vec2(uWidth, uWidth)), uLittleEndian);
    #endif
    gl_FragColor = floatToRgba({RETURN}, uLittleEndian);
}
`;var wa="grid3d-computable",La="grid3d-computable-0",Ia="grid3d-computable-1",Vg={...Xt,uDimensions:he("v3"),uMin:he("v3"),uDelta:he("v3"),uWidth:he("f"),uLittleEndian:he("b")},kg={tCumulativeSum:je("texture","rgba","ubyte","nearest")};function Gg(e){return Sp.replace("{UTILS}",e.utilCode??"").replace("{MAIN}",e.mainCode).replace("{RETURN}",e.returnCode)}function Ug(e,t){let r={...Vg,...e.cumulative?kg:{},...e.schema};if(!t){for(let n of e.loopBounds??[])r[n]=We("number");r.WEBGL1=We("boolean")}return e.cumulative&&(r.CUMULATIVE=We("boolean")),r}function zg(e,t){let r=$t(e);return re(e,me,Gg(t)),async(n,o,i,a)=>{if(!Jr(o))throw new Error("not a WebGL context");let s=o,c=Ug(t,s.isWebGL2);s.namedFramebuffers[wa]||(s.namedFramebuffers[wa]=s.resources.framebuffer());let u=s.namedFramebuffers[wa];s.namedTextures[La]||(s.namedTextures[La]=s.resources.texture("image-uint8","rgba","ubyte","nearest")),t.cumulative&&!s.namedTextures[Ia]&&(s.namedTextures[Ia]=s.resources.texture("image-uint8","rgba","ubyte","nearest"));let l=[s.namedTextures[La],s.namedTextures[Ia]],[d,m,f]=i.dimensions,h=Math.ceil(Math.sqrt(d*m*f)),g={uDimensions:i.dimensions,uMin:i.box.min,uDelta:na(i),uWidth:h,uLittleEndian:bp(),...t.values(a,i)};s.isWebGL2||(g.WEBGL1=!0),t.cumulative&&(g.tCumulativeSum=l[0],g.CUMULATIVE=!0);let T=s.namedComputeRenderables[e],b;T?(b=T.values,ot(g,(P,F)=>{let B=c[F];B?.type==="value"||B?.type==="attribute"||(!B||!fl(B.kind)?I.update(b[F],P):I.updateIfChanged(b[F],P))})):(b={},ot(Zt,(P,F)=>b[F]=P),ot(g,(P,F)=>b[F]=I.create(P)),T=Ht(s.createComputeRenderItem("triangles",r,c,b),b));let D=new Uint8Array(h*h*4);if(t.cumulative){pe&&s.timer.group("Grid3dCompute.renderCumulative");let P=t.cumulative.states(a);l[0].define(h,h),l[1].define(h,h),Oa(s,h),l[0].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d clear",clear:{color:[0,0,0,0]}}),l[1].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d clear",clear:{color:[0,0,0,0]}}),t.cumulative.yieldPeriod&&!pe&&await n.update({message:"Computing...",isIndeterminate:!1,current:0,max:P.length});let F=Math.max(1,t.cumulative.yieldPeriod??1);pe&&s.timer.group("Grid3dCompute.renderBatch");for(let B=0;B<P.length;B++)I.update(b.tCumulativeSum,l[(B+1)%2]),l[B%2].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d"}),Oa(s,h),t.cumulative.update(a,P[B],b),T.update(),T.render(),t.cumulative.yieldPeriod&&B!==P.length-1&&(B%F===F-1&&(s.waitForGpuCommandsCompleteSync(),pe&&s.timer.groupEnd("Grid3dCompute.renderBatch"),pe&&s.timer.group("Grid3dCompute.renderBatch")),n.shouldUpdate&&!pe&&await n.update({current:B+1}));pe&&s.timer.groupEnd("Grid3dCompute.renderBatch"),pe&&s.timer.groupEnd("Grid3dCompute.renderCumulative")}else l[0].define(h,h),l[0].attachFramebuffer(u,"color0"),s.beginRenderPass(u,{label:"grid3d"}),Oa(s,h),T.update(),T.render();return pe&&s.timer.group("Grid3dCompute.readPixels"),s.readPixels(0,0,h,h,D),pe&&s.timer.groupEnd("Grid3dCompute.readPixels"),new Float32Array(D.buffer,D.byteOffset,d*m*f)}}var Tp={isSupported:e=>Jr(e),create:zg};function Oa(e,t){e.setViewport(0,0,t,t),e.disableScissor(),e.setRenderState(Tt.Default)}function Cp(e,t,r){let n=e.slice(0,t);for(let o=0,i=r-1;o<i;++o,--i){let a=o*t,s=i*t;n.set(e.subarray(a,a+t)),e.copyWithin(a,s,s+t),e.set(n,s)}}function Rp(e,t={}){let{gl:r,resources:n,state:o}=e,i=t.format==="r32f",a=n.framebuffer(),s=[],c,u=new Float32Array(0),l=null,d=0,m=0,f=0,h=i?1:4;function g(P){P.attachFramebuffer(a,"color0"),a.bind(),i&&c===void 0&&(c=r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)===r.RED&&r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)===r.FLOAT)}function T(P){return u.length<P*4&&(u=new Float32Array(P*4)),u.subarray(0,P*4)}function b(P,F,B){for(let V=0;V<B;++V)F[V]=P[V*4]}function D(){l!==null&&A(r)&&r.deleteSync(l),l=null}return{synchronous:!0,asynchronous:A(r),read:(P,F,B,V,W,K)=>{Be(o);for(let ae=0;ae<P.length;++ae){g(P[ae]);let ge=P[ae].getHeight()-B-W;if(!i)e.readPixels(F,ge,V,W,K[ae]);else if(c&&A(r))r.readPixels(F,ge,V,W,r.RED,r.FLOAT,K[ae]);else{let y=T(V*W);e.readPixels(F,ge,V,W,y),b(y,K[ae],V*W)}Cp(K[ae],V*h,W)}},start:(P,F,B,V,W)=>{if(A(r)){Be(o),D(),d=0,m=V,f=W;for(let K=0;K<P.length;++K)g(P[K]),s[K]||(s[K]=i?n.pixelPack(c?"r":"rgba","float"):n.pixelPack("rgba","ubyte")),s[K].read(F,P[K].getHeight()-B-W,V,W),d+=s[K].getByteCount();l=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0),r.flush()}},check:P=>{if(l===null||!A(r))return"failed";let F=r.clientWaitSync(l,0,0);if(F===r.WAIT_FAILED)return D(),"failed";if(F===r.TIMEOUT_EXPIRED)return"pending";for(let B=0;B<P.length;++B){if(i&&!c){let V=P[B].length,W=T(V);s[B].getSubData(W),b(W,P[B],V)}else s[B].getSubData(P[B]);Cp(P[B],m*h,f)}return D(),"resolved"},reset:()=>{D()},getByteCount:()=>d,dispose:()=>{D();for(let P of s)P.destroy();s.length=0,d=0,a.destroy()}}}function _a(e,t){switch(t){case e.NO_ERROR:return"no error";case e.INVALID_ENUM:return"invalid enum";case e.INVALID_VALUE:return"invalid value";case e.INVALID_OPERATION:return"invalid operation";case e.INVALID_FRAMEBUFFER_OPERATION:return"invalid framebuffer operation";case e.OUT_OF_MEMORY:return"out of memory";case e.CONTEXT_LOST_WEBGL:return"context lost"}return"unknown error"}function _p(e,t){let r=e.getError();r!==e.NO_ERROR&&console.log(`WebGL error: '${_a(e,r)}'${t?` (${t})`:""}`)}function Ng(e){let t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(let o=0;o<t;++o)e.activeTexture(e.TEXTURE0+o),e.bindTexture(e.TEXTURE_2D,null),e.bindTexture(e.TEXTURE_CUBE_MAP,null),A(e)&&(e.bindTexture(e.TEXTURE_2D_ARRAY,null),e.bindTexture(e.TEXTURE_3D,null));let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);let n=e.getParameter(e.MAX_VERTEX_ATTRIBS);for(let o=0;o<n;++o)e.vertexAttribPointer(o,1,e.FLOAT,!1,0,0);e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),A(e)&&(e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null))}var jg={key:"webgl",hasStencil:!0},Ep=new Uint8Array(4);function Ap(e,t,r){e.getSyncParameter(t,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(t),r()):Gr.setImmediate(Ap,e,t,r)}function Wg(e,t){let r=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);r?Gr.setImmediate(Ap,e,r,t):(console.warn("Could not create a WebGLSync object"),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,Ep),t())}var Pp=!1;function Hg(e){return new Promise(t=>{A(e)?Wg(e,t):(Pp||(console.info("Sync object not supported in WebGL"),Pp=!0),wp(e),t())})}function wp(e){e.bindFramebuffer(e.FRAMEBUFFER,null),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,Ep)}function qo(e,t,r,n,o,i){if(N&&Yr(e),i instanceof Uint8Array)e.readPixels(t,r,n,o,e.RGBA,e.UNSIGNED_BYTE,i);else if(i instanceof Float32Array)e.readPixels(t,r,n,o,e.RGBA,e.FLOAT,i);else if(i instanceof Int32Array&&A(e))e.readPixels(t,r,n,o,e.RGBA_INTEGER,e.INT,i);else throw new Error("unsupported readPixels buffer type");N&&_p(e)}function Fa(e,t){t?e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer):e.bindFramebuffer(e.FRAMEBUFFER,null)}function Xo(e,t,r){let n=t?.framebufferWidth??e.drawingBufferWidth;r==="screen-space"&&(n*=2);let o=t?.framebufferHeight??e.drawingBufferHeight;return{width:n,height:o}}function en(e,t,r,n){let o=t==="vertex"?e.VERTEX_SHADER:e.FRAGMENT_SHADER,i=e[`${r.toUpperCase()}_${n.toUpperCase()}`];return e.getShaderPrecisionFormat(o,i)}function Dp(e,t){return{lowFloat:en(e,t,"low","float"),mediumFloat:en(e,t,"medium","float"),highFloat:en(e,t,"high","float"),lowInt:en(e,t,"low","int"),mediumInt:en(e,t,"medium","int"),highInt:en(e,t,"high","int")}}function $g(e,t){return{maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),max3dTextureSize:A(e)?e.getParameter(e.MAX_3D_TEXTURE_SIZE):0,maxRenderbufferSize:e.getParameter(e.MAX_RENDERBUFFER_SIZE),maxDrawBuffers:t.drawBuffers?e.getParameter(t.drawBuffers.MAX_DRAW_BUFFERS):0,maxTextureImageUnits:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextureImageUnits:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttribs:e.getParameter(e.MAX_VERTEX_ATTRIBS)}}function Jr(e){return e.gl!==void 0}var Zo="read-texture-rgba";function qg(e,t,r,n){let o=Tc(e,t);e.namedFramebuffers[Zo]??=e.resources.framebuffer();let i=e.namedFramebuffers[Zo];e.namedTextures[Zo]??=e.resources.texture("image-uint8","rgba","ubyte","nearest");let a=e.namedTextures[Zo];return a.define(r,n),a.attachFramebuffer(i,"color0"),e.beginRenderPass(i,{label:"read texture (rgba copy)"}),e.setRenderState(Tt.Default),e.setViewport(0,0,r,n),e.setScissor(0,0,r,n),e.clear({color:[0,0,0,0]}),o.render(),a}function Ma(e,t={}){Rc(hp),yp(Tp);let r=Ld(e),n=Xd(e,r),o=Id(e,r),i=Zd(),a=$g(e,r),s=A(e)&&t.uniformBlocks!==!1,c=Ud(e,o,i,r,a,s,()=>K),u,l=jd(e,r,i);o.onRenderPassEnd=l.passEnd;let d=sp(e,o,r),m=!!e.getContextAttributes()?.stencil;if(a.maxVertexTextureImageUnits<8)throw new Error('Need "MAX_VERTEX_TEXTURE_IMAGE_UNITS" >= 8');let f={vertex:Dp(e,"vertex"),fragment:Dp(e,"fragment")},h=!!r.clipControl,g=h?Ws:Hs,T="drawing-buffer",b=()=>T==="drawing-buffer"?Xo(e,y.layer,y.session?.interactionMode).height:"getHeight"in T?T.getHeight():Fo(T),D={x:0,y:0,width:0,height:0,set:!1},P={x:0,y:0,width:0,height:0,enabled:!1},F=()=>{if(!D.set)return;let{x:w,y:H,width:G,height:Z}=D;d.setViewport(w,b()-H-Z,G,Z)},B=()=>{if(!P.enabled)return;let{x:w,y:H,width:G,height:Z}=P;d.setScissor(w,b()-H-Z,G,Z)},V=r.provokingVertex;V?.provokingVertex(V.FIRST_VERTEX_CONVENTION);let W=r.clipControl;h&&W&&o.clipControl?.(W.LOWER_LEFT,W.ZERO_TO_ONE);let K=!1,ae=new xn,ge=t.pixelScale||1,y={session:void 0,layer:void 0,changed:new xn,clear:()=>{y.layer=void 0,y.session=void 0,y.changed.next()}},C=e.canvas,O=typeof C?.addEventListener=="function",M,X,Y=w=>{w.preventDefault(),J.setContextLost()},ve=()=>{if(!J.isContextLost)return;let w=M;M=void 0,w?.resolve(!0)};O&&(C.addEventListener("webglcontextlost",Y,!1),C.addEventListener("webglcontextrestored",ve,!1));let J={gl:e,isWebGL2:A(e),uniformBlocks:s,depthRangeConversion:g,get pixelRatio(){return(typeof window<"u"&&window.devicePixelRatio||1)*(ge||1)},capabilities:n,extensions:r,state:o,stats:i,resources:c,timer:l,get shaderPrecisionFormats(){return f},namedComputeRenderables:Object.create(null),namedFramebuffers:Object.create(null),namedTextures:Object.create(null),isProgramSupported:()=>!0,createGraphicsRenderItem:(w,H,G,Z,se,Ae)=>np(J,w,H,G,Z,se,Ae),createProgramItem:(w,H,G,Z,se,Ae)=>rp(J,H,G,Z,Ae),createComputeRenderItem:(w,H,G,Z,se)=>op(J,w,H,G,Z,se),createGlobalBindings:(w,H,G)=>qd(J,w,H,G),get isContextLost(){return K||e.isContextLost()},contextLost:ae,setContextLost:()=>{K=!0,l.clear(),ae.next(vt())},recreate:async()=>!J.isContextLost||!O?void 0:(M?.resolve(!1),await new Promise(H=>{M={resolve:H};let G=X;if(X=void 0,!!G)try{G.restoreContext()}catch{M=void 0,H(!1)}})?Ma(e,t):void 0),simulateContextLoss:()=>{let w=e.getExtension("WEBGL_lose_context");return!w||J.isContextLost?!1:(w.loseContext(),setTimeout(()=>{J.isContextLost&&w.restoreContext()},1e3),!0)},release:()=>{let w=e.getExtension("WEBGL_lose_context");return!w||J.isContextLost?!1:(X=w,w.loseContext(),!0)},xr:{get session(){return y.session},changed:y.changed,set:async(w,H)=>{if(y.session!==w&&(await y.session?.end(),w!==void 0))try{await e.makeXRCompatible(),y.session=w,y.layer=new XRWebGLLayer(y.session,e,{antialias:!0,alpha:!0,depth:!0,stencil:!0,framebufferScaleFactor:ge*(H?.resolutionScale??1)}),await y.session.updateRenderState({baseLayer:y.layer}),y.session.addEventListener("end",y.clear),y.changed.next()}catch(G){throw w?await w.end():(y.layer=void 0,y.session=void 0),G}},end:async()=>y.session?.end(),isPresenting:()=>!!y.session&&!!y.layer&&y.session.renderState.baseLayer===y.layer,getView:(w,H)=>{let{layer:G}=y,Z=G?.getViewport(w);return!G||!Z?!1:(rc.set(H.viewport,Z.x,G.framebufferHeight-Z.y-Z.height,Z.width,Z.height),oe.fromArray(H.projection,w.projectionMatrix,0),!0)}},setPixelScale:w=>{ge=w},createRenderTarget:(w,H,G,Z,se,Ae)=>Nd(e,c,w,H,G,Z,se,Ae),createDrawTarget:()=>({id:-1,texture:ec(),framebuffer:Dl(),depthRenderbuffer:null,getByteCount:()=>0,getWidth:()=>Xo(e,y.layer,y.session?.interactionMode).width,getHeight:()=>Xo(e,y.layer,y.session?.interactionMode).height,bind:()=>{Fa(e,y.layer)},setSize:()=>{},destroy:()=>{}}),bindDrawingBuffer:()=>Fa(e,y.layer),getDrawingBufferSize:()=>Xo(e,y.layer,y.session?.interactionMode),readPixels:(w,H,G,Z,se)=>{Be(o),qo(e,w,H,G,Z,se)},waitForGpuCommandsComplete:()=>Hg(e),readRenderTarget:async(w,H,G,Z,se)=>{Be(o),w.bind();let Ae=new Uint8Array(Z*se*4);return qo(e,H,w.getHeight()-G-se,Z,se,Ae),Rn.flipY(Rn.create(Ae,Z,se)),Ae},readTextureAsync:async(w,H,G,Z,se)=>{Be(o),u??=c.framebuffer(),w.attachFramebuffer(u,"color0"),u.bind();let Ae=new Uint8Array(Z*se*4);return qo(e,H,w.getHeight()-G-se,Z,se,Ae),Rn.flipY(Rn.create(Ae,Z,se)),Ae},createTextureReader:w=>Rp(J,w),readTextureData:async w=>{Be(o);let{format:H,type:G}=Vo(w),Z=w.getWidth(),se=w.getHeight();if(G===e.INT||A(e)&&G===e.UNSIGNED_INT)throw new Error("reading integer textures is not supported");let Ae=G!==e.UNSIGNED_BYTE,v=w;if(H!==e.RGBA){if(Ae)throw new Error("reading single-channel float textures is not supported");v=qg(J,w,Z,se)}u??=c.framebuffer(),v.attachFramebuffer(u,"color0"),u.bind();let E=Ae?new Float32Array(Z*se*4):new Uint8Array(Z*se*4);return qo(e,0,0,Z,se,E),{array:E,width:Z,height:se}},waitForGpuCommandsCompleteSync:()=>wp(e),getFenceSync:()=>A(e)?e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0):null,checkSyncStatus:w=>A(e)?e.getSyncParameter(w,e.SYNC_STATUS)===e.SIGNALED?(e.deleteSync(w),!0):!1:!0,deleteSync:w=>{A(e)&&e.deleteSync(w)},setRenderState:d.setRenderState,setBlendConstant:(w,H,G,Z)=>{o.blendColor(w,H,G,Z)},setViewport:(w,H,G,Z)=>{Object.assign(D,{x:w,y:H,width:G,height:Z,set:!0}),o.inRenderPass&&F()},setScissor:(w,H,G,Z)=>{Object.assign(P,{x:w,y:H,width:G,height:Z,enabled:!0}),o.inRenderPass&&B()},disableScissor:()=>{P.enabled=!1,d.disableScissor()},describeTarget:()=>jg,beginRenderPass:(w,H)=>{l.passBegin(w,H?.label),w==="drawing-buffer"?Fa(e,y.layer):w.bind(),T=w,F(),B(),o.inRenderPass=!0,d.setDepthReadOnly(!!H?.depthReadOnly),H?.clear&&d.clear(H.clear)},endRenderPass:()=>Be(o),hasRenderPassStencil:()=>m||e.getParameter(e.FRAMEBUFFER_BINDING)!==null,clear:d.clear,flush:()=>{Be(o),e.flush()},checkError:w=>{_p(e,w)},checkFramebufferStatus:w=>{Yr(e,w)},destroy:w=>{O&&(C.removeEventListener("webglcontextlost",Y,!1),C.removeEventListener("webglcontextrestored",ve,!1)),M?.resolve(!1),M=void 0,w?.lost||(c.destroy(),Ng(e)),y.session?.removeEventListener("end",y.clear),y.session?.end(),ae.complete(),y.changed.complete(),!w?.doNotForceWebGLContextLoss&&!w?.lost&&(e.getExtension("WEBGL_lose_context")?.loseContext(),e.getExtension("STACKGL_destroy_context")?.destroy())}};return Wd(J,{parameters:a,extensions:Object.keys(r).filter(w=>!!r[w]).sort(),shaderPrecisionFormats:f}),Jd(J,b),J}var Xg={alpha:!0,depth:!0,stencil:!0,premultipliedAlpha:!0};function Lp(e,t={}){return{id:e,isAvailable:()=>typeof(e==="webgl2"?globalThis.WebGL2RenderingContext:globalThis.WebGLRenderingContext)<"u",create:async(r,n)=>{let{powerPreference:o,failIfMajorPerformanceCaveat:i,antialias:a,preserveDrawingBuffer:s,pixelScale:c}=n,u={...Xg,powerPreference:o,failIfMajorPerformanceCaveat:i,antialias:a,preserveDrawingBuffer:s},l=null;try{l=r.getContext(e,u),!l&&e==="webgl"&&(l=r.getContext("experimental-webgl",u))}catch{l=null}return l?Ma(l,{pixelScale:c,uniformBlocks:t.uniformBlocks}):void 0}}}var Ip=Lp("webgl2"),Ba=Lp("webgl");function Va(e={}){return e.preferWebGl1?[Ba]:[Ip,Ba]}var En;(t=>{class e{constructor(){this.providers=$n().asMutable();this.defaultAutoAttachValues=new Map}getParams(n){let o={},i=[],a=[];if(n){let s=this.providers.values();for(;;){let c=s.next();if(c.done)break;let u=c.value;u.isApplicable(n)&&(u.isHidden||(i.push([u.descriptor.name,u.label]),this.defaultAutoAttachValues.get(u.descriptor.name)&&a.push(u.descriptor.name)),o[u.descriptor.name]=p.Group({...u.getParams(n)},{label:u.isHidden?`[Hidden] ${u.label}`:u.label,isHidden:u.isHidden&&tr}))}}return{autoAttach:p.MultiSelect(a,i),properties:p.Group(o,{isFlat:!0})}}setDefaultAutoAttach(n,o){this.defaultAutoAttachValues.set(n,o)}get(n){if(!this.providers.get(n))throw new Error(`Custom property '${n}' is not registered.`);return this.providers.get(n)}register(n,o){this.providers.set(n.descriptor.name,n),this.defaultAutoAttachValues.set(n.descriptor.name,o)}unregister(n){this.providers.delete(n),this.defaultAutoAttachValues.delete(n)}}t.Registry=e})(En||={});var Qo=class{constructor(t){this.plugin=t}get dataState(){return this.plugin.state.data}rawData(t,r){return this.dataState.build().toRoot().apply(Ns,t,r).commit({revertOnError:!0})}download(t,r){return this.dataState.build().toRoot().apply(Us,t,r).commit({revertOnError:!0})}downloadBlob(t,r){return this.dataState.build().toRoot().apply(zs,t,r).commit({revertOnError:!0})}async readFile(t,r){let n=await this.dataState.build().toRoot().apply(js,t,r).commit({revertOnError:!0}),o=Oc(t.file?.file?.name??"");return{data:n,fileInfo:o}}};var Zg=oe.fromTranslation(oe(),x.create(.5,.5,.5)),Qg=pa(da(Sc()),Zg),Ut=x(),Op=oe(),Yg={origin:"Origin",model:"Model"},Kg={corner:"Corner",center:"Center"},Jg={...Me.Params,cellColor:p.Color(Ie.orange),cellScale:p.Numeric(2,{min:.1,max:5,step:.1}),ref:p.Select("model",p.objectToOptions(Yg),{isEssential:!0}),attachment:p.Select("corner",p.objectToOptions(Kg),{isEssential:!0})},ey={mesh:(e,t)=>De(ny,Me.Utils)},Yo={...Jg};function ty(e,t,r){let n=de.createState(256,128,r),{fromFractional:o}=e.cell;x.copy(Ut,e.ref),t.attachment==="center"?(x.trunc(Ut,Ut),x.subScalar(Ut,Ut,.5)):x.floor(Ut,Ut),oe.fromTranslation(Op,Ut);let i=pa(da(Qg),Op),a=Math.cbrt(e.cell.volume)/300*t.cellScale;n.currentGroup=1,de.addCage(n,o,i,a,2,20);let s=_e.fromDimensionsAndTransform(_e(),x.unit,o);x.transformMat4(Ut,Ut,o),_e.translate(s,s,Ut),_e.expand(s,s,a);let c=de.getMesh(n);return c.setBoundingSphere(s),c}function ry(e){return Sn.is(e)?Sn.getLabel(e):ks.getLabel(e)}function ny(e,t,r,n){let o=ty(t,r,n&&n.geometry),i=ry(t.cell);return Pe(i,t,o,()=>r.cellColor,()=>1,()=>i)}function ka(e,t,r){let n=x();return r.ref==="model"&&x.transformMat4(n,Kn.getCenter(e),t.toFractional),{cell:t,ref:n}}function PL(e,t,r){let n=x();return r.ref==="model"&&x.transformMat4(n,t,e.toFractional),{cell:e,ref:n}}function Ga(e,t){return xe.createMulti("Unit Cell",e,t,xe.StateBuilder,ey)}var An=ne.BuiltIn({name:"model-unitcell-3d",display:"Model Unit Cell",from:S.Molecule.Model,to:S.Shape.Representation3D,params:()=>({...Yo})})({isApplicable:e=>!!Er.Provider.get(e.data),canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Model Unit Cell",async n=>{let o=Er.Provider.get(e.data);if(!o)return Qe.Null;let i=ka(e.data,o.spacegroup.cell,t),a=Ga({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Yo);return await a.createOrUpdate(t,i).runInContext(n),new S.Shape.Representation3D({repr:a,sourceData:i},{label:"Unit Cell",description:o.spacegroup.name})})},update({a:e,b:t,newParams:r}){return Q.create("Model Unit Cell",async n=>{let o=Er.Provider.get(e.data);if(!o)return _.UpdateResult.Null;let i={...t.data.repr.props,...r},a=ka(e.data,o.spacegroup.cell,i);return await t.data.repr.createOrUpdate(i,a).runInContext(n),t.data.sourceData=a,_.UpdateResult.Updated})}});tt(An,(e,t)=>sr(r=>Ga(r,()=>Yo),e,t));var Ne;(a=>{function e(s,c,u){return s.currentStructure!==u?!1:Se.is(c)?!!s.script&&Se.areEqual(s.script,c):s.expression===c}a.isUnchanged=e;function t(s,c){let u=Se.is(c)?c:void 0,l=Se.is(c)?Se.toExpression(c):c,d=mc(l);return{script:u,expression:l,compiled:d,originalStructure:s,currentStructure:s}}a.create=t;function r(s,c){return s.compiled(new ar(c))}a.run=r;function n(s,c){let u=t(s,c);return{entry:u,selection:r(u,s)}}a.createAndRun=n;function o(s,c){return s.currentStructure=c,s.compiled(new ar(c))}a.updateStructure=o;function i(s,c,u){let l=we.unionStructure(c);s.label=`${u||"Selection"}`,s.description=le.elementDescription(l),s.data=l}a.updateStructureObject=i})(Ne||={});function Ua([e,t],r,n=0){let o=e.length===1&&!oy.has(e[0])?`[${e[0]}] ${t}`:`${t} (${e.join(", ")})`;return kt(o,ce.struct.modifier.union([ce.struct.generator.atomGroups({"residue-test":ce.core.set.has([ce.set(...e),ce.ammp("auth_comp_id")])})]),{category:r,priority:n,description:o})}function HL([e,t],r,n){let o=`${t} (${e.join(", ")})`;return kt(o,ce.struct.modifier.union([ce.struct.generator.atomGroups({"atom-test":ce.core.set.has([ce.set(...e),ce.acp("elementSymbol")])})]),{category:r,priority:n,description:o})}function $L([e,t],r,n){let o=`${t}`;return kt(`${t}`,ce.struct.modifier.union([ce.struct.generator.atomGroups({"entity-test":ce.core.list.equal([ce.list(...e),ce.ammp("entityDescription")])})]),{category:r,priority:n,description:o})}var oy=_r.unionMany(ic,ac,sc,oc);var wn=kt("Non-standard Residues in Polymers",ce.struct.modifier.union([ce.struct.generator.atomGroups({"entity-test":ce.core.rel.eq([ce.ammp("entityType"),"polymer"]),"chain-test":ce.core.rel.eq([ce.ammp("objectPrimitive"),"atomistic"]),"residue-test":ce.ammp("isNonStandard")})]),{category:"Residue Property"}),iy=kt("Rings in Residues",ce.struct.modifier.union([ce.struct.generator.rings()]),{category:"Residue Property"}),ay=kt("Aromatic Rings in Residues",ce.struct.modifier.union([ce.struct.generator.rings({"only-aromatic":!0})]),{category:"Residue Property"}),sy=[[["HIS"],"Histidine"],[["ARG"],"Arginine"],[["LYS"],"Lysine"],[["ILE"],"Isoleucine"],[["PHE"],"Phenylalanine"],[["LEU"],"Leucine"],[["TRP"],"Tryptophan"],[["ALA"],"Alanine"],[["MET"],"Methionine"],[["PRO"],"Proline"],[["CYS"],"Cysteine"],[["ASN"],"Asparagine"],[["VAL"],"Valine"],[["GLY"],"Glycine"],[["SER"],"Serine"],[["GLN"],"Glutamine"],[["TYR"],"Tyrosine"],[["ASP"],"Aspartic Acid"],[["GLU"],"Glutamic Acid"],[["THR"],"Threonine"],[["SEC"],"Selenocysteine"],[["PYL"],"Pyrrolysine"],[["UNK"],"Unknown"]].sort((e,t)=>e[1]<t[1]?-1:e[1]>t[1]?1:0),cy=[[["A","DA"],"Adenosine"],[["C","DC"],"Cytidine"],[["T","DT"],"Thymidine"],[["G","DG"],"Guanosine"],[["I","DI"],"Inosine"],[["U","DU"],"Uridine"],[["N","DN"],"Unknown"]].sort((e,t)=>e[1]<t[1]?-1:e[1]>t[1]?1:0),uy=sy.map(e=>Ua(e,"Amino Acid")),ly=cy.map(e=>Ua(e,"Nucleic Base")),KL=[wn,iy,ay,...uy,...ly];var Fp=kt("All",ce.struct.generator.all(),{category:"",priority:1e3}),za=kt("Current Selection",ce.internal.generator.current(),{category:"",referencesCurrent:!0});var hI=["all","polymer","protein","nucleic","water","ion","lipid","branched","ligand","non-standard","coarse"],Mp=()=>({type:p.MappedStatic("static",{static:p.Text("polymer"),expression:p.Value(ce.struct.generator.all),bundle:p.Value(R.Bundle.Empty),script:p.Script({language:"mol-script",expression:"(sel.atom.all)"})},{isHidden:!0}),nullIfEmpty:p.Optional(p.Boolean(!0,{isHidden:!0})),label:p.Text("",{isHidden:!0})});function Bp(e,t,r){r.source=e;let n=le.Empty,o;switch(t.type.name){case"static":{let a;switch(t.type.params){case"all":a=Fp.query,o="All";break;case"polymer":a=co.query,o="Polymer";break;case"protein":a=uo.query,o="Protein";break;case"nucleic":a=lo.query,o="Nucleic";break;case"water":a=Ar.internal.water(),o="Water";break;case"ion":a=Vc.query,o="Ion";break;case"lipid":a=kc.query,o="Lipid";break;case"branched":a=po.query,o="Branched";break;case"ligand":a=mo.query,o="Ligand";break;case"non-standard":a=wn.query,o="Non-standard";break;case"coarse":a=fo.query,o="Coarse";break;default:jt(t.type)}let s=a(new ar(e));n=we.unionStructure(s);break}case"script":case"expression":{let{selection:a,entry:s}=Ne.createAndRun(e,t.type.params);r.entry=s,n=we.unionStructure(a);break}case"bundle":{if(t.type.params.hash!==e.hashCode)break;n=R.Bundle.toStructure(t.type.params,e);break}}if(t.nullIfEmpty&&n.elementCount===0)return Qe.Null;let i={label:`${t.label||o||"Component"}`,description:le.elementDescription(n)};return r.isSource=n===e,new S.Molecule.Structure(n,i)}function Vp(e,t,r,n,o){if(r.type.name!==n.type.name)return _.UpdateResult.Recreate;let i=!1;switch(n.type.name){case"static":{if(r.type.params!==n.type.params)return _.UpdateResult.Recreate;if(!le.areEquivalent(e,o.source))return _.UpdateResult.Recreate;if(t.data.model===e.model||!t.data.model)break;if(!Kn.areHierarchiesEqual(e.model,t.data.model))return _.UpdateResult.Recreate;t.data=t.data.remapModel(e.model),o.isSource=!1,i=!0;break}case"script":if(!Se.areEqual(r.type.params,n.type.params))return _.UpdateResult.Recreate;case"expression":{if(r.type.params!==n.type.params)return _.UpdateResult.Recreate;if(e===o.source)break;let a=o.entry,s=Ne.updateStructure(a,e);o.source=e,t.data=we.unionStructure(s),o.isSource=t.data===e,Ne.updateStructureObject(t,s,n.label),i=!0;break}case"bundle":{if(e===o.source&&R.Bundle.areEqual(r.type.params,n.type.params))break;o.source=e,n.type.params.hash!==e.hashCode?(i=t.data.elementCount!==0,t.data=t.data.elementCount===0?t.data:le.Empty):(i=!0,t.data=R.Bundle.toStructure(n.type.params,e)),o.isSource=t.data===e;break}}if(i){if(n.nullIfEmpty&&t.data.elementCount===0)return _.UpdateResult.Null;t.description=le.elementDescription(t.data)}return r.label!==n.label&&(i=!0,t.label=`${n.label||t.label}`),i?_.UpdateResult.Updated:_.UpdateResult.Unchanged}var EI=ne.BuiltIn({name:"structure-selection-from-expression",display:{name:"Selection",description:"Create a molecular structure from the specified expression."},from:S.Molecule.Structure,to:S.Molecule.Structure,params:()=>({expression:p.Value(ce.struct.generator.all,{isHidden:!0}),label:p.Optional(p.Text("",{isHidden:!0}))})})({apply({a:e,params:t,cache:r}){let{selection:n,entry:o}=Ne.createAndRun(e.data,t.expression);if(r.entry=o,we.isEmpty(n))return Qe.Null;let i=we.unionStructure(n),a={label:`${t.label||"Selection"}`,description:le.elementDescription(i)};return new S.Molecule.Structure(i,a)},update:({a:e,b:t,oldParams:r,newParams:n,cache:o})=>{if(r.expression!==n.expression)return _.UpdateResult.Recreate;let i=o.entry;if(i.currentStructure===e.data)return _.UpdateResult.Unchanged;let a=Ne.updateStructure(i,e.data);return we.isEmpty(a)?_.UpdateResult.Null:(Ne.updateStructureObject(t,a,n.label),_.UpdateResult.Updated)},dispose({b:e}){e?.data.customPropertyDescriptors.dispose()}});var AI=ne.BuiltIn({name:"structure-multi-selection-from-expression",display:{name:"Multi-structure Measurement Selection",description:"Create selection object from multiple structures."},from:S.Root,to:S.Molecule.Structure.Selections,params:()=>({selections:p.ObjectList({key:p.Text(void 0,{description:"A unique key."}),ref:p.Text(),groupId:p.Optional(p.Text()),expression:p.Value(ce.struct.generator.empty)},e=>e.ref,{isHidden:!0}),isTransitive:p.Optional(p.Boolean(!1,{isHidden:!0,description:"Remap the selections from the original structure if structurally equivalent."})),label:p.Optional(p.Text("",{isHidden:!0}))})})({apply({params:e,cache:t,dependencies:r}){let n=new Map,o=[],i=0;for(let s of e.selections){let{selection:c,entry:u}=Ne.createAndRun(r[s.ref].data,s.expression);n.set(s.key,u);let l=we.toLociWithSourceUnits(c);o.push({key:s.key,structureRef:s.ref,loci:l,groupId:s.groupId}),i+=R.Loci.size(l)}t.entries=n;let a={label:`${e.label||"Multi-selection"}`,description:`${e.selections.length} source(s), ${i} element(s) total`};return new S.Molecule.Structure.Selections(o,a)},update:({b:e,oldParams:t,newParams:r,cache:n,dependencies:o})=>{if(!!t.isTransitive!=!!r.isTransitive)return _.UpdateResult.Recreate;let i=n.entries,a=new Map,s=new Map;for(let d of e.data)s.set(d.key,d);let c=!1,u=0,l=[];for(let d of r.selections){let m=o[d.ref].data,f=!1;if(i.has(d.key)){let h=i.get(d.key);if(Ne.isUnchanged(h,d.expression,m)&&s.has(d.key)){let g=s.get(d.key);g.groupId!==d.groupId&&(g.groupId=d.groupId,c=!0),a.set(d.key,h),l.push(g),u+=R.Loci.size(g.loci);continue}if(h.expression!==d.expression)f=!0;else{let g=!1;if(r.isTransitive)if(le.areUnitIdsAndIndicesEqual(h.originalStructure,m)){let T=Ne.run(h,h.originalStructure);h.currentStructure=m,a.set(d.key,h);let b=R.Loci.remap(we.toLociWithSourceUnits(T),m);l.push({key:d.key,structureRef:d.ref,loci:b,groupId:d.groupId}),u+=R.Loci.size(b),c=!0}else g=!0;else g=!0;if(g){c=!0;let T=Ne.updateStructure(h,m);a.set(d.key,h);let b=we.toLociWithSourceUnits(T);l.push({key:d.key,structureRef:d.ref,loci:b,groupId:d.groupId}),u+=R.Loci.size(b)}}}else f=!0;if(f){c=!0;let{selection:h,entry:g}=Ne.createAndRun(m,d.expression);a.set(d.key,g);let T=we.toLociWithSourceUnits(h);l.push({key:d.key,structureRef:d.ref,loci:T,groupId:d.groupId}),u+=R.Loci.size(T)}}return c?(n.entries=a,e.data=l,e.label=`${r.label||"Multi-selection"}`,e.description=`${l.length} source(s), ${u} element(s) total`,_.UpdateResult.Updated):_.UpdateResult.Unchanged}});var Sr=ne.BuiltIn({name:"structure-multi-selection-from-bundle",display:{name:"Multi-structure Measurement Selection",description:"Create selection object from multiple structures."},from:S.Root,to:S.Molecule.Structure.Selections,params:()=>({selections:p.ObjectList({key:p.Text(void 0,{description:"A unique key."}),ref:p.Text(),groupId:p.Optional(p.Text()),bundle:p.Value(R.Bundle.Empty)},e=>e.ref,{isHidden:!0}),isTransitive:p.Optional(p.Boolean(!1,{isHidden:!0,description:"Remap the selections from the original structure if structurally equivalent."})),label:p.Optional(p.Text("",{isHidden:!0}))})})({apply({params:e,cache:t,dependencies:r}){let n=new Map,o=[],i=0;for(let s of e.selections){let c=r[s.ref].data,u=R.Bundle.toLoci(s.bundle,c);o.push({key:s.key,structureRef:s.ref,loci:u,groupId:s.groupId}),i+=R.Loci.size(u),n.set(s.key,{source:c})}t.entries=n;let a={label:`${e.label||"Multi-selection"}`,description:`${e.selections.length} source(s), ${i} element(s) total`};return new S.Molecule.Structure.Selections(o,a)},update:({b:e,oldParams:t,newParams:r,cache:n,dependencies:o})=>{if(!!t.isTransitive!=!!r.isTransitive)return _.UpdateResult.Recreate;let i=n.entries,a=new Map,s=new Map;for(let m of t.selections)s.set(m.key,m.bundle);let c=new Map;for(let m of e.data)c.set(m.key,m);let u=!1,l=0,d=[];for(let m of r.selections){let f=!1;if(i.has(m.key)){let h=o[m.ref].data,g=i.get(m.key),T=s.get(m.key);if(T&&h===g.source&&m.bundle.hash===g.source.hashCode&&R.Bundle.areEqual(m.bundle,T)){let b=c.get(m.key);b.groupId!==m.groupId&&(b.groupId=m.groupId,u=!0),a.set(m.key,g),d.push(b),l+=R.Loci.size(b.loci);continue}f=!0}else f=!0;if(f){u=!0;let h=o[m.ref].data,g=R.Bundle.toLoci(m.bundle,h);d.push({key:m.key,structureRef:m.ref,loci:g,groupId:m.groupId}),l+=R.Loci.size(g),a.set(m.key,{source:h})}}return u?(n.entries=a,e.data=d,e.label=`${r.label||"Multi-selection"}`,e.description=`${d.length} source(s), ${l} element(s) total`,_.UpdateResult.Updated):_.UpdateResult.Unchanged}});var wI=ne.BuiltIn({name:"structure-selection-from-script",display:{name:"Selection",description:"Create a molecular structure from the specified script."},from:S.Molecule.Structure,to:S.Molecule.Structure,params:()=>({script:p.Script({language:"mol-script",expression:"(sel.atom.atom-groups :residue-test (= atom.resname ALA))"}),label:p.Optional(p.Text(""))})})({apply({a:e,params:t,cache:r}){let{selection:n,entry:o}=Ne.createAndRun(e.data,t.script);r.entry=o;let i=we.unionStructure(n),a={label:`${t.label||"Selection"}`,description:le.elementDescription(i)};return new S.Molecule.Structure(i,a)},update:({a:e,b:t,oldParams:r,newParams:n,cache:o})=>{if(!Se.areEqual(r.script,n.script))return _.UpdateResult.Recreate;let i=o.entry;if(i.currentStructure===e.data)return _.UpdateResult.Unchanged;let a=Ne.updateStructure(i,e.data);return Ne.updateStructureObject(t,a,n.label),_.UpdateResult.Updated},dispose({b:e}){e?.data.customPropertyDescriptors.dispose()}});var LI=ne.BuiltIn({name:"structure-selection-from-bundle",display:{name:"Selection",description:"Create a molecular structure from the specified structure-element bundle."},from:S.Molecule.Structure,to:S.Molecule.Structure,params:()=>({bundle:p.Value(R.Bundle.Empty,{isHidden:!0}),label:p.Optional(p.Text("",{isHidden:!0}))})})({apply({a:e,params:t,cache:r}){if(t.bundle.hash!==e.data.hashCode)return Qe.Null;r.source=e.data;let n=R.Bundle.toStructure(t.bundle,e.data);if(n.elementCount===0)return Qe.Null;let o={label:`${t.label||"Selection"}`,description:le.elementDescription(n)};return new S.Molecule.Structure(n,o)},update:({a:e,b:t,oldParams:r,newParams:n,cache:o})=>{if(!R.Bundle.areEqual(r.bundle,n.bundle))return _.UpdateResult.Recreate;if(n.bundle.hash!==e.data.hashCode)return _.UpdateResult.Null;if(o.source===e.data)return _.UpdateResult.Unchanged;o.source=e.data;let i=R.Bundle.toStructure(n.bundle,e.data);return i.elementCount===0?_.UpdateResult.Null:(t.label=`${n.label||"Selection"}`,t.description=le.elementDescription(i),t.data=i,_.UpdateResult.Updated)},dispose({b:e}){e?.data.customPropertyDescriptors.dispose()}}),dy={polymer:"polymer",protein:"protein",nucleic:"nucleic",water:"water",branched:"branched",ligand:"ligand","non-standard":"non-standard",coarse:"coarse","atomic-sequence":"atomic-sequence","atomic-het":"atomic-het",spheres:"spheres"},py=p.objectToOptions(dy);var II=ne.BuiltIn({name:"structure-complex-element",display:{name:"Complex Element",description:"Create a molecular structure from the specified model."},from:S.Molecule.Structure,to:S.Molecule.Structure,params:{type:p.Select("atomic-sequence",py,{isHidden:!0})}})({apply({a:e,params:t}){let r,n;switch(t.type){case"polymer":r=co.query,n="Polymer";break;case"protein":r=uo.query,n="Protein";break;case"nucleic":r=lo.query,n="Nucleic";break;case"water":r=Ar.internal.water(),n="Water";break;case"branched":r=po.query,n="Branched";break;case"ligand":r=mo.query,n="Ligand";break;case"non-standard":r=wn.query,n="Non-standard";break;case"coarse":r=fo.query,n="Coarse";break;case"atomic-sequence":r=Ar.internal.atomicSequence(),n="Sequence";break;case"atomic-het":r=Ar.internal.atomicHet(),n="HET Groups/Ligands";break;case"spheres":r=Ar.internal.spheres(),n="Coarse Spheres";break;default:jt(t.type)}let o=r(new ar(e.data)),i=we.unionStructure(o);return i.elementCount===0?Qe.Null:new S.Molecule.Structure(i,{label:n,description:le.elementDescription(i)})},dispose({b:e}){e?.data.customPropertyDescriptors.dispose()}});var Na=ne.BuiltIn({name:"structure-component",display:{name:"Component",description:"A molecular structure component."},from:S.Molecule.Structure,to:S.Molecule.Structure,params:Mp})({apply({a:e,params:t,cache:r}){return Bp(e.data,t,r)},update:({a:e,b:t,oldParams:r,newParams:n,cache:o})=>Vp(e.data,t,r,n,o),dispose({b:e,cache:t}){!e||t?.isSource||e.data===le.Empty||e.data.customPropertyDescriptors.dispose()}});function Ko(e){return e.endsWith("-surface")}function kp(e,t,r={}){let n=e.representation.structure;if(t)yt("structure",n);else if(!go(n))return{type:Qt(),colorTheme:Qt(),sizeTheme:Qt()};return Hr(e,"structure",n,{type:r.type||void 0,color:r.color||void 0,size:r.size||void 0,checkColor:!0,checkSize:!0}),my(e,t||le.Empty,r)}function ja(e,t,r,n,o){let i=e.representation.structure,{registry:a,themes:s}=i;if(t)yo("structure",i),fa("structure",i);else if(!(ho(i)&&cr(i)))return Qt();Hr(e,"structure",i,{type:r||void 0,color:n||void 0,checkColor:!0,checkSize:!1});let c=a.get(r||a.default.name),u=s.colorThemeRegistry.get(n||c.defaultColorTheme.name),l=p.getDefaultValues(u.getParams({structure:t||le.Empty}));return u.name===c.defaultColorTheme.name&&Object.assign(l,c.defaultColorTheme.props),{name:u.name,params:Object.assign(l,o)}}function Wa(e,t,r,n,o){let i=e.representation.structure,{registry:a,themes:s}=i;if(t)yo("structure",i),ha("structure",i);else if(!(ho(i)&&ur(i)))return Qt();Hr(e,"structure",i,{type:r||void 0,size:n||void 0,checkSize:!0,checkColor:!1});let c=a.get(r||a.default.name),u=s.sizeThemeRegistry.get(n||c.defaultSizeTheme.name),l=p.getDefaultValues(u.getParams({structure:t||le.Empty}));return u.name===c.defaultSizeTheme.name&&Object.assign(l,c.defaultSizeTheme.props),{name:u.name,params:Object.assign(l,o)}}function my(e,t,r={}){let{registry:n,themes:o}=e.representation.structure,i={structure:t},a=(typeof r.type=="string"?r.type&&n.get(r.type):r.type)||n.get(n.default.name),s=p.getDefaultValues(a.getParams(o,t)),c=Object.assign(s,r.typeParams),u=(typeof r.color=="string"?r.color&&o.colorThemeRegistry.get(r.color):r.color)||o.colorThemeRegistry.get(a.defaultColorTheme.name),l=p.getDefaultValues(u.getParams(i));u.name===a.defaultColorTheme.name&&Object.assign(l,a.defaultColorTheme.props);let d=Object.assign(l,r.colorParams),m=(typeof r.size=="string"?r.size&&o.sizeThemeRegistry.get(r.size):r.size)||o.sizeThemeRegistry.get(a.defaultSizeTheme.name),f=p.getDefaultValues(m.getParams(i));m.name===a.defaultSizeTheme.name&&Object.assign(f,a.defaultSizeTheme.props);let h=Object.assign(f,r.sizeParams);return{type:{name:a.name,params:c},colorTheme:{name:u.name,params:d},sizeTheme:{name:m.name,params:h}}}var rn=ne.BuiltIn({name:"structure-representation-3d",display:"3D Representation",from:S.Molecule.Structure,to:S.Molecule.Structure.Representation3D,params:(e,t)=>{let r=t.representation.structure,{registry:n,themes:o}=r,i=n.default?.provider,a=!!i&&cr(r),s=!!i&&ur(r);if(!e){let l={help:d=>{let{name:m,params:f}=d,g=o.colorThemeRegistry.get(m).factory({},f);return{description:g.description,legend:g.legend}}};return{type:n.default?p.Mapped(n.default.name,n.types,d=>p.Group(n.get(d).getParams(o,le.Empty))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.types,d=>p.Group(o.colorThemeRegistry.get(d).getParams({structure:le.Empty})),l):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.types,d=>p.Group(o.sizeThemeRegistry.get(d).getParams({structure:le.Empty}))):Oe()}}let c={structure:e.data},u={help:l=>{let{name:d,params:m}=l,h=o.colorThemeRegistry.get(d).factory(c,m);return{description:h.description,legend:h.legend}}};return{type:n.default?p.Mapped(n.default.name,n.getApplicableTypes(e.data),l=>p.Group(n.get(l).getParams(o,e.data))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.getApplicableTypes(c),l=>p.Group(o.colorThemeRegistry.get(l).getParams(c)),u):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.getApplicableTypes(c),l=>p.Group(o.sizeThemeRegistry.get(l).getParams(c))):Oe()}}})({canAutoUpdate({a:e,oldParams:t,newParams:r}){return e.data.elementCount<1e4||t.type.name===r.type.name&&r.type.params.quality!=="custom"},apply({a:e,params:t,cache:r},n){return yt("structure",n.representation.structure),Q.create("Structure Representation",async o=>{let i={runtime:o,assetManager:n.managers.asset,errorContext:n.errorContext},a=n.representation.structure.registry.get(t.type.name),s=a.getData?.(e.data,t.type.params)||e.data;a.ensureCustomProperties&&await a.ensureCustomProperties.attach(i,s);let c=a.factory({graphics:n.canvas3d?.graphics,...n.representation.structure.themes},a.getParams);await Ue.ensureDependencies(i,n.representation.structure.themes,{structure:s},t),c.setTheme(Ue.create(n.representation.structure.themes,{structure:s},t));let u=t.type.params||{};return await c.createOrUpdate(u,s).runInContext(o),new S.Molecule.Structure.Representation3D({repr:c,sourceData:e.data},{label:a.label})})},update({a:e,b:t,oldParams:r,newParams:n,cache:o},i){return yt("structure",i.representation.structure),Q.create("Structure Representation",async a=>{if(n.type.name!==r.type.name)return _.UpdateResult.Recreate;let s=i.representation.structure.registry.get(n.type.name);if(s.mustRecreate?.(r.type.params,n.type.params))return _.UpdateResult.Recreate;let c=s.getData?.(e.data,n.type.params)||e.data,u={runtime:a,assetManager:i.managers.asset,errorContext:i.errorContext};s.ensureCustomProperties&&await s.ensureCustomProperties.attach(u,c),Ue.releaseDependencies(i.representation.structure.themes,{structure:t.data.sourceData},r),await Ue.ensureDependencies(u,i.representation.structure.themes,{structure:c},n),t.data.repr.setTheme(Ue.create(i.representation.structure.themes,{structure:c},n));let l={...t.data.repr.props,...n.type.params};return await t.data.repr.createOrUpdate(l,c).runInContext(a),t.data.sourceData=e.data,_.UpdateResult.Updated})},dispose({b:e,params:t},r){if(!e||!t)return;let n=e.data.sourceData,o=r.representation.structure.registry.get(t.type.name);o.ensureCustomProperties&&o.ensureCustomProperties.detach(n),Ue.releaseDependencies(r.representation.structure.themes,{structure:n},t)},interpolate(e,t,r){if(e.colorTheme.name!=="uniform"||t.colorTheme.name!=="uniform")return r<=.5?e:t;let n=e.colorTheme.params.value,o=t.colorTheme.params.value,i=Bt.interpolate(n,o,r);return{type:r<=.5?e.type:t.type,colorTheme:{name:"uniform",params:{value:i}},sizeTheme:r<=.5?e.sizeTheme:t.sizeTheme}}});tt(rn,(e,t)=>{let{registry:r,themes:n}=t.plugin.representation.structure;return Wr(r.get(e.type.name),n,e,t)});var nn=class{constructor(t){this.name=t;this._providers=[];this.keys=new Map;this.counts=new Map}get providers(){return this._providers}findConflict(t){let r=(o,i)=>{let a=this.keys.get(o);if(a&&a!==t)return`${this.name}: ${i} '${o}' of preset '${t.id}' is already registered by a different preset ('${a.id}')`},n=r(t.id,"id");if(n)return n;if(t.alias!==void 0)return r(t.alias,"alias")}register(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.counts.get(t);if(n!==void 0){this.counts.set(t,n+1);return}this.counts.set(t,1),this._providers.push(t),this.keys.set(t.id,t),t.alias!==void 0&&this.keys.set(t.alias,t)}unregister(t){let r=typeof t=="string"?this.getById(t):t;if(!r)return;let n=this.counts.get(r);if(n===void 0)return;if(n>1){this.counts.set(r,n-1);return}this.counts.delete(r),this.keys.delete(r.id),r.alias!==void 0&&this.keys.delete(r.alias);let o=this._providers.indexOf(r);o>=0&&this._providers.splice(o,1)}has(t){return this.keys.has(t)}resolve(t){return this.keys.get(t)}getById(t){let r=this.keys.get(t);return r&&r.id===t?r:void 0}};var Jo=class{constructor(t){this.plugin=t;this.registry=new nn("Structure representation preset registry")}get dataState(){return this.plugin.state.data}resolveProvider(t){return typeof t=="string"?this.registry.resolve(t):t}hasPreset(t){for(let r of this.registry.providers)if(!r.isApplicable||r.isApplicable(t,this.plugin))return!0;return!1}get providers(){return this.registry.providers}getPresets(t){if(!t)return this.providers;let r=[];for(let n of this.registry.providers)n.isApplicable&&!n.isApplicable(t,this.plugin)||r.push(n);return r}getPresetSelect(t){let r=[];for(let i of this.registry.providers)t&&i.isApplicable&&!i.isApplicable(t,this.plugin)||r.push([i.id,i.display.name,i.display.group]);let n=this.registry.resolve(this.plugin.config.get(Le.Structure.DefaultRepresentationPreset)??"")?.id,o=r.some(i=>i[0]===n)?n:r[0]?.[0]??"";return p.Select(o,r)}getPresetsWithOptions(t){let r=[],n=Object.create(null);for(let o of this.registry.providers)o.isApplicable&&!o.isApplicable(t,this.plugin)||(r.push([o.id,o.display.name]),n[o.id]=o.params?p.Group(o.params(t,this.plugin)):p.EmptyGroup());return r.length===0?p.MappedStatic("",{"":p.EmptyGroup()}):p.MappedStatic(r[0][0],n,{options:r})}findConflict(t){return this.registry.findConflict(t)}has(t){return this.registry.has(t)}registerPreset(t){this.registry.register(t)}unregisterPreset(t){this.registry.unregister(t)}applyPreset(t,r,n){let o=this.resolveProvider(r);if(!o)throw new Error(`Preset '${r}' is not registered in this plugin`);let i=this.plugin.state.data,a=St.resolveAndCheck(i,t);if(!a){tr||console.warn("Applying structure repr. provider to bad cell.");return}let s=o.params?.(a.obj,this.plugin)||{},c=n||(o.params?p.getDefaultValues(s):{}),u=this.plugin.config.get(Le.Structure.DefaultRepresentationPresetParams);c=p.merge(s,u,c);let l=Q.create(`${o.display.name}`,()=>o.apply(a,c,this.plugin));return this.plugin.runTask(l)}async addRepresentation(t,r,n){let o=this.dataState.build(),i=this.buildRepresentation(o,t,r,n);if(i)return await o.commit(),i}buildRepresentation(t,r,n,o){if(!r)return;let i=St.resolveAndCheck(this.dataState,r)?.obj?.data;if(!i)return;let a=kp(this.plugin,i,n);return o?.tag?t.to(r).applyOrUpdateTagged(o.tag,rn,a,{state:o?.initialState}).selector:t.to(r).apply(rn,a,{state:o?.initialState}).selector}};var ei=class{constructor(t){this.plugin=t;this.registry=new nn("Trajectory hierarchy preset registry")}resolveProvider(t){return typeof t=="string"?this.registry.resolve(t):t}hasPreset(t){for(let r of this.registry.providers)if(!r.isApplicable||r.isApplicable(t,this.plugin))return!0;return!1}get providers(){return this.registry.providers}getPresets(t){if(!t)return this.providers;let r=[];for(let n of this.registry.providers)n.isApplicable&&!n.isApplicable(t,this.plugin)||r.push(n);return r}getPresetSelect(t){let r=[];for(let i of this.registry.providers)t&&i.isApplicable&&!i.isApplicable(t,this.plugin)||r.push([i.id,i.display.name]);let n=this.registry.resolve(this.plugin.config.get(Le.Structure.DefaultHierarchyPreset)??"")?.id,o=r.some(i=>i[0]===n)?n:r[0]?.[0]??"";return p.Select(o,r)}getPresetsWithOptions(t){let r=[],n=Object.create(null);for(let o of this.registry.providers)o.isApplicable&&!o.isApplicable(t,this.plugin)||(r.push([o.id,o.display.name]),n[o.id]=o.params?p.Group(o.params(t,this.plugin)):p.EmptyGroup());return r.length===0?p.MappedStatic("",{"":p.EmptyGroup()}):p.MappedStatic(r[0][0],n,{options:r})}findConflict(t){return this.registry.findConflict(t)}has(t){return this.registry.has(t)}registerPreset(t){this.registry.register(t)}unregisterPreset(t){this.registry.unregister(t)}applyPreset(t,r,n){let o=this.resolveProvider(r);if(!o)throw new Error(`Preset '${r}' is not registered in this plugin`);let i=this.plugin.state.data,a=St.resolveAndCheck(i,t);if(!a){tr||console.warn("Applying hierarchy preset provider to bad cell.");return}let s=n||(o.params?p.getDefaultValues(o.params(a.obj,this.plugin)):{}),c=Q.create(`${o.display.name}`,()=>o.apply(a,s,this.plugin));return this.plugin.runTask(c)}};function ti(e){return e}var Gp=new WeakMap;(t=>{function e(r,n){if(r.name===n)return r;let o=Gp.get(r);o||(o=new Map,Gp.set(r,o));let i=o.get(n);return i||(i={...r,name:n},o.set(n,i)),i}t.withName=e})(ti||={});function b1(e){return e instanceof Uint8Array?new S.Data.Binary(e):new S.Data.String(e)}function x1(e,t,r,n,o){let i=r.createDefaultParams(n,e);if(o)for(let s of Object.keys(o))o[s]!==void 0&&(i[s]=o[s]);let a=r.definition.apply({a:n,params:i,cache:{},spine:void 0},e);return Q.is(a)?Q.resolveInContext(a,t):a}function v1(e,t){if(e.ext==="bcif")try{let r=Gs(t);if(r.encoder.startsWith("VolumeServer"))return"dscif";if(r.encoder.startsWith("volseg-volume-server"))return"segcif";if(Tn(r,"_volume_data_3d_info")){if(Tn(r,"_volume_data_3d"))return"dscif";if(Tn(r,"_segmentation_data_3d"))return"segcif"}if(Tn(r,"_refln")&&(oa(r,"_refln","pdbx_FWT")||oa(r,"_refln","pdbx_DELFWT")))return"sfcif"}catch(r){console.error(r)}else if(e.ext==="cif"){let r=t;if(r.startsWith(`data_SERVER
#
_density_server_result`))return"dscif";if(r.startsWith(`data_SERVER
#
data_SEGMENTATION_DATA`))return"segcif";if(Ha(r,"volume_data_3d_info")){if(Ha(r,"volume_data_3d"))return"dscif";if(Ha(r,"segmentation_data_3d"))return"segcif"}if(r.includes("_refln.pdbx_FWT")||r.includes("_refln.pdbx_DELFWT"))return"sfcif";if(r.includes("atom_site_fract_x")||r.includes("atom_site.fract_x"))return"coreCif"}return-1}function Ha(e,t){return e.includes(`_${t}.`)}var Up=new WeakMap;function fy(e,t){let r=Up.get(e);r||(r=new Set,Up.set(e,r)),!r.has(t)&&(r.add(t),console.warn(`DataFormatRegistry.add(name, provider) with a name that differs from provider.name ('${e.name??""}') is deprecated. Register DataFormatProvider.withName(provider, '${t}') instead.`))}var ri=class{constructor(){this._list=[];this._map=new Map;this._extensions=void 0;this._binaryExtensions=void 0;this._options=void 0;this._autoOrder=void 0}get types(){return this._list.map(t=>[t.name,t.provider.label])}get extensions(){if(this._extensions)return this._extensions;let t=new Set;return this._list.forEach(({provider:r})=>{r.stringExtensions?.forEach(n=>t.add(n)),r.binaryExtensions?.forEach(n=>t.add(n))}),this._extensions=t,t}get binaryExtensions(){if(this._binaryExtensions)return this._binaryExtensions;let t=new Set;return this._list.forEach(({provider:r})=>r.binaryExtensions?.forEach(n=>t.add(n))),this._binaryExtensions=t,t}get options(){if(this._options)return this._options;let t=[];return this._list.forEach(({name:r,provider:n})=>t.push([r,n.label,n.category||""])),this._options=t,t}get autoOrder(){return this._autoOrder?this._autoOrder:(this._autoOrder=this._list.map((t,r)=>({entry:t,index:r})).sort((t,r)=>(r.entry.provider.priority??0)-(t.entry.provider.priority??0)||t.index-r.index).map(({entry:t})=>t),this._autoOrder)}_invalidate(){this._extensions=void 0,this._binaryExtensions=void 0,this._options=void 0,this._autoOrder=void 0}findConflict(t){let r=this._map.get(t.name);if(r&&r.provider!==t)return`Data format registry: '${t.name}' is already registered by a different provider.`}add(t,r){let n;if(typeof t=="string"){let a=t,s=r;n=ti.withName(s,a),n!==s&&fy(s,a)}else n=t;let o=this.findConflict(n);if(o)throw new Error(o);let i=this._map.get(n.name);if(i){i.count++;return}this._invalidate(),this._map.set(n.name,{provider:n,count:1}),this._list.push({name:n.name,provider:n})}remove(t){let r=typeof t=="string"?t:t.name,n=this._map.get(r);if(!n||typeof t!="string"&&n.provider!==t||--n.count>0)return;this._invalidate(),this._map.delete(r);let o=this._list.findIndex(i=>i.name===r);o>=0&&this._list.splice(o,1)}clear(){this._invalidate(),this._map.clear(),this._list=[]}has(t){return this._map.has(t)}auto(t,r){let n=this.autoOrder;for(let o=0,i=n.length;o<i;++o){let a=n[o].provider,s=!1;if((a.binaryExtensions?.includes(t.ext)||a.stringExtensions?.includes(t.ext))&&(s=!0),s&&(!a.isApplicable||a.isApplicable(t,r.data)))return a}}get(t){let r=this._map.get(t);if(!r)throw new Error($a(t,this._list.length===0));return r.provider}get list(){return this._list}};function $a(e,t){let r=`Data format '${e}' is not registered in this plugin.`;return t?`${r} No data formats are registered: plugin registries start empty, so add format entries to \`spec.registry\` (for the full built-in set, use \`DefaultRegistry\` from '@molstar/plugin/default-registry' or \`DefaultPluginSpec()\`).`:r}var ni=class{constructor(t){this.plugin=t;this.hierarchy=new ei(this.plugin);this.representation=new Jo(this.plugin)}get dataState(){return this.plugin.state.data}async parseTrajectoryData(t,r){if(typeof r=="string"&&!this.plugin.dataFormats.has(r))throw new Error($a(r,this.plugin.dataFormats.list.length===0));let n=typeof r=="string"?this.plugin.dataFormats.get(r):r,{trajectory:o}=await n.parse(this.plugin,t);return o}async parseTrajectoryBlob(t,r){let n=this.plugin.dataFormats.has("mmcif")?this.plugin.dataFormats.get("mmcif"):void 0;if(!n?.parseBlob)throw new Error("parseTrajectory(blob) requires the 'mmcif' data format to be registered in this plugin.");return n.parseBlob(this.plugin,t,r)}parseTrajectory(t,r){let n=St.resolveAndCheck(this.dataState,t);if(!n)throw new Error("Invalid data cell.");return S.Data.Blob.is(n.obj)?this.parseTrajectoryBlob(t,r):this.parseTrajectoryData(t,r)}createModel(t,r,n){return this.dataState.build().to(t).apply(Fc,r||{modelIndex:0},{state:n}).commit({revertOnError:!0})}insertModelProperties(t,r,n){return this.dataState.build().to(t).apply(ao,r,{state:n}).commit({revertOnError:!0})}tryCreateUnitcell(t,r,n){let o=this.dataState,i=St.resolveAndCheck(o,t)?.obj?.data;if(!i)return;let a=Er.Provider.get(i)?.spacegroup.cell;return Sn.isZero(a)?void 0:o.build().to(t).apply(An,r,{state:n}).commit({revertOnError:!0})}createStructure(t,r,n,o){let i=this.dataState;if(!r){let s=St.resolveAndCheck(i,t);if(s){let c=Er.Provider.get(s.obj?.data);(!c||c?.assemblies.length===0)&&(r={name:"model",params:{}})}}return i.build().to(t).apply(Mc,{type:r||{name:"assembly",params:{}}},{state:n,tags:o}).commit({revertOnError:!0})}insertStructureProperties(t,r){return this.dataState.build().to(t).apply(so,r).commit({revertOnError:!0})}isComponentTransform(t){return t.transform.transformer===Na}async tryCreateComponent(t,r,n,o){let i=this.dataState,a=i.build().to(t),s=`structure-component-${n}`,c=a.applyOrUpdateTagged(s,Na,r,{tags:o?[...o,s]:[s]});await c.commit();let u=c.selector;if(!u.isOk||u.cell?.obj?.data.elementCount===0){await i.build().delete(u.ref).commit();return}return u}tryCreateComponentFromExpression(t,r,n,o){return this.tryCreateComponent(t,{type:{name:"expression",params:r},nullIfEmpty:!0,label:(o?.label||"").trim()},n,o?.tags)}tryCreateComponentStatic(t,r,n){return this.tryCreateComponent(t,{type:{name:"static",params:r},nullIfEmpty:!0,label:(n?.label||"").trim()},`static-${r}`,n?.tags)}tryCreateComponentFromSelection(t,r,n,o){return this.plugin.runTask(Q.create("Query Component",async i=>{let{label:a,tags:s}=o||{};a=(a||"").trim();let c=St.resolveAndCheck(this.dataState,t)?.obj?.data;if(!c)return;let u=r.referencesCurrent?{type:{name:"bundle",params:R.Bundle.fromSelection(await r.getSelection(this.plugin,i,c))},nullIfEmpty:!0,label:a||r.label}:{type:{name:"expression",params:r.expression},nullIfEmpty:!0,label:a||r.label};return r.ensureCustomProperties&&await r.ensureCustomProperties({runtime:i,assetManager:this.plugin.managers.asset,errorContext:this.plugin.errorContext},c),this.tryCreateComponent(t,u,n,s)}))}};var oi=class{constructor(){this.list=[];this.options=[];this.version=1;this.counts=new Map}findConflict(t){}add(t){let r=this.counts.get(t);if(r!==void 0){this.counts.set(t,r+1);return}this.counts.set(t,1),this.list.push(t),this.options.push([t,t.label,t.category]),this.version+=1}remove(t){let r=this.counts.get(t);if(r===void 0)return;if(r>1){this.counts.set(t,r-1);return}this.counts.delete(t);let n=this.list.indexOf(t);n!==-1&&(this.list.splice(n,1),this.options.splice(n,1),this.version+=1)}};var ii=class extends He{constructor(r){super({params:{current:""},animationState:"stopped"});this.context=r;this.map=new Map;this._animations=[];this.counts=new Map;this.currentTime=0;this._current=void 0;this._params=void 0;this.events={updated:this.ev(),applied:this.ev()};this.isStopped=!0;this.isApplying=!1;this.applying=Promise.resolve()}get isEmpty(){return this._animations.length===0}get current(){return this._current}get animations(){return this._animations}get isAnimatingStateTransition(){return!!this._current&&this._current.anim.name==="built-in.animate-state-snapshot-transition"}triggerUpdate(){this.events.updated.next(void 0)}triggerApply(){this.events.applied.next(void 0)}getParams(){return this._params||(this._params={current:p.Select(this._animations[0]&&this._animations[0].name,this._animations.map(r=>[r.name,r.display.name]),{label:"Animation"})}),this._params}updateParams(r){if(this.isEmpty)return;this.updateState({params:{...this.state.params,...r}});let n=this.map.get(this.state.params.current);if(!n){N&&console.warn(`Animation '${this.state.params.current}' not found. State might be from a different plugin instance.`);return}let o=n.params(this.context);this._current={anim:n,params:o,paramValues:p.getDefaultValues(o),state:{},startedTime:-1,lastTime:0},this.triggerUpdate()}updateCurrentParams(r){this._current&&(this._current.paramValues={...this._current.paramValues,...r},this.triggerUpdate())}findConflict(r){let n=this.map.get(r.name);if(n&&n!==r)return`PluginAnimationManager: a different animation is already registered under the name '${r.name}'.`}register(r){let n=this.findConflict(r);if(n)throw new Error(n);if(this.map.has(r.name)){this.counts.set(r.name,(this.counts.get(r.name)??0)+1);return}this.counts.set(r.name,1),this.add(r)}unregister(r){if(this.map.get(r.name)!==r)return;let n=this.counts.get(r.name)??0;if(!(n<=0)){if(n>1){this.counts.set(r.name,n-1);return}this.counts.delete(r.name),this.remove(r)}}add(r){this._params=void 0,this.map.set(r.name,r),this._animations.push(r),this._animations.length===1?this.updateParams({current:r.name}):this.triggerUpdate()}remove(r){this.map.delete(r.name);let n=this._animations.indexOf(r);n>=0&&this._animations.splice(n,1),this._params=void 0;let o=this._current;if(!o||o.anim!==r){this.triggerUpdate();return}this.isStopped=!0,this.state.animationState!=="stopped"&&(this.updateState({animationState:"stopped"}),this.context.behaviors.state.isAnimating.value&&this.context.behaviors.state.isAnimating.next(!1),r.teardown&&Promise.resolve(r.teardown(o.paramValues,o.state,this.context)).catch(a=>console.error(`Failed to tear down animation '${r.name}'`,a)));let i=this._animations[0];i?this.updateParams({current:i.name}):(this._current=void 0,this.updateState({params:{...this.state.params,current:""}}),this.triggerUpdate())}async play(r,n){await this.stop(),this.map.has(r.name)||(this.counts.set(r.name,0),this.add(r)),this.updateParams({current:r.name}),this.updateCurrentParams(n),await this.start()}async tick(r,n,o){this.currentTime=r,!this.isStopped&&(n||o?await this.applyFrame(o):this.applyAsync())}async start(){if(!this._current)return;this.updateState({animationState:"playing"}),this.context.behaviors.state.isAnimating.value||this.context.behaviors.state.isAnimating.next(!0),this.triggerUpdate();let r=this._current;if(!r)return;let n=r.anim,o=n.initialState(r.paramValues,this.context);if(n.setup){let i=await n.setup(r.paramValues,o,this.context);i&&(o=i)}r.lastTime=0,r.startedTime=-1,r.state=o,this.isStopped=!1}async stop(){if(this.isStopped=!0,await this.applying,this.state.animationState!=="stopped"){let r=this._current;r?.anim.teardown&&await r.anim.teardown(r.paramValues,r.state,this.context),this.updateState({animationState:"stopped"}),this.triggerUpdate()}this.context.behaviors.state.isAnimating.value&&this.context.behaviors.state.isAnimating.next(!1)}stopStateTransitionAnimation(){if(this.isAnimatingStateTransition)return this.stop()}get isAnimating(){return this.state.animationState==="playing"}applyAsync(){this.isApplying||(this.isApplying=!0,this.applying=this.applyFrame().catch(r=>console.error("Failed to apply an animation frame",r)).finally(()=>{this.isApplying=!1}))}async applyFrame(r){let n=this._current;if(!n)return;let o=this.currentTime;n.startedTime<0&&(n.startedTime=o);let i=await n.anim.apply(n.state,{lastApplied:n.lastTime,current:o-n.startedTime,animation:r},{params:n.paramValues,plugin:this.context});i.kind==="finished"?this.stop():i.kind==="next"&&(n.state=i.state,n.lastTime=o-n.startedTime),this.triggerApply()}getSnapshot(){let r=this._current;return r?{state:this.state,current:{paramValues:r.paramValues,state:r.anim.stateSerialization?r.anim.stateSerialization.toJSON(r.state):r.state}}:{state:this.state}}setSnapshot(r){if(!this.isEmpty&&(this.updateState({animationState:r.state.animationState}),this.updateParams(r.state.params),r.current)){let n=r.state.params.current,o=this._current;if(!o||o.anim.name!==n){this.context.log.warn(`Animation '${n}' of the snapshot is not registered; skipping its state.`);return}o.paramValues=r.current.paramValues,o.state=o.anim.stateSerialization?o.anim.stateSerialization.fromJSON(r.current.state):r.current.state,this.triggerUpdate(),this.state.animationState==="playing"&&this.resume()}}async resume(){let r=this._current;if(!r)return;r.lastTime=0,r.startedTime=-1;let n=r.anim;this.context.behaviors.state.isAnimating.value||this.context.behaviors.state.isAnimating.next(!0),n.setup&&await n.setup(r.paramValues,r.state,this.context),this.isStopped=!1}};function hy(e,t){if(Array.isArray(e))for(let r of e)t(r[0],r[1],r[2]);else{let{x:r,y:n,z:o}=e,i=Math.min(r.length,n.length,o.length);for(let a=0;a<i;a++)t(r[a],n[a],o[a])}}function zp(e,t={}){let r=t.origin,n=t.minDistance??1e-6,o=n*n,i=t.sigma,a=i!==void 0&&i>0,s=a?2*i*i:1,c=ga.createCache(3),u=c.matrix;it.makeZero(u);let l=x.zero(),d=0,m=0;if(hy(e,(h,g,T)=>{let b=h,D=g,P=T;r&&(b-=r[0],D-=r[1],P-=r[2]);let F=b*b+D*D+P*P;if(F<=o)return;let V=1/Math.sqrt(F);b*=V,D*=V,P*=V;let W=a?Math.exp(-F/s):1;it.add(u,0,0,W*b*b),it.add(u,0,1,W*b*D),it.add(u,0,2,W*b*P),it.add(u,1,0,W*D*b),it.add(u,1,1,W*D*D),it.add(u,1,2,W*D*P),it.add(u,2,0,W*P*b),it.add(u,2,1,W*P*D),it.add(u,2,2,W*P*P),l[0]+=W*b,l[1]+=W*D,l[2]+=W*P,d++,m+=W}),d===0||m<=0)return;ga.compute(c);let f=x.create(it.get(u,0,0),it.get(u,1,0),it.get(u,2,0));if(!(x.magnitude(f)<1e-6))return x.normalize(f,f),x.dot(f,l)>0&&x.scale(f,f,-1),f}function Np(e,t,r){let n=r[0],o=r[1],i=r[2],a=-n*t[0]-o*t[1]-i*t[2],s=e[0],c=e[1],u=e[2];return(n*s+o*c+i*u+a)/Math.sqrt(n*n+o*o+i*i)}function gy(e,t,r,n){let o=Np(e,t,n);return{aroundX:Np(e,t,r)<0,aroundY:o<0}}function jp(e,t,r){if(!e.canvas3d)return;let{origin:n,dirA:o,dirB:i,dirC:a}=r.principalAxes.boxAxes,s=x.clone(o),c=x.clone(a);if(r.positionToFlip){let{aroundX:l,aroundY:d}=gy(r.positionToFlip,n,s,i);l&&(x.negate(c,c),x.negate(s,s)),d&&x.negate(c,c)}let u=x.scale(x(),n,-100);return x.dot(u,s)<=0&&x.negate(c,c),x.dot(x.unitY,c)<=0&&x.negate(s,s),e.canvas3d.camera.getFocus(n,t,s,c,Pc.createDefaultSnapshot())}function Hp(e,t){if(!e.canvas3d)return;let r=t.targets?.map(o=>{if(o.center!==void 0&&o.radius!==void 0)return _e.create(o.center,o.radius);let i=o.targetRef!==void 0?xy(e,o.targetRef):Wp(e);if(!i)return;let a=o.center??i.center,s=o.radius??i.radius*(o.radiusFactor??1)+(o.extraRadius??0);return _e.create(a,s)}).filter(o=>o!==void 0),n=r&&r.length>0?qa(r):Wp(e);return by(e.canvas3d.camera,{center:n.center,radius:Math.max(n.radius,t.minRadius??0),up:t.up,direction:t.direction})}var yy=x();function by(e,t){let r=t.center,n=Math.max(t.radius,.01),o=t.direction??x.sub(x(),e.target,e.position),i=x.orthogonalize(x(),o,t.up??e.up),a=e.getTargetDistance(n),s=x.setMagnitude(yy,o,a),c=x.sub(x(),r,s);return{target:r,position:c,up:i,radius:n}}function xy(e,t){let r=$p([],e,t);if(r.length!==0)return r.length===1?r[0]:qa(r)}function $p(e,t,r){let n=t.state.data.cells.get(r),o=vy(t,n);return o?e.push(...o):t.state.data.tree.children.get(r).forEach(a=>$p(e,t,a)),e}function vy(e,t){let r=t?.obj;if(r){if(!r.data){console.warn("Focus: no data");return}if(r.data instanceof le){let o=Ce.getDecorated(e.state.data,t.transform.ref)?.obj?.data??r?.data;if(o.isEmpty)return[];let i=$.getBoundingSphere(le.Loci(o));return i?[i]:[]}else if(S.isRepresentation3D(r)){let n=[];for(let o of r.data.repr.renderObjects){let i=o.values.boundingSphere.ref.value;i.radius>0&&n.push(i)}return n}}}function Wp(e){let r=Sy(e,!1).map(n=>n.values.boundingSphere.ref.value).filter(n=>n.radius>0);return qa(r)}function Sy(e,t){let r=Array.from(e.state.data.cells.values()).filter(o=>o.obj&&S.isRepresentation3D(o.obj));return t||(r=r.filter(o=>!o.state.isHidden)),r.flatMap(o=>o.obj.data.repr.renderObjects)}var on;function qa(e){on??=new zr("98"),on.reset();for(let t of e)on.includeSphere(t);on.finishedIncludeStep();for(let t of e)on.radiusSphere(t);return on.getSphere()}var Ty=3,Jt={identity:q.create(1,0,0,0,1,0,0,0,1),rotX90:q.create(1,0,0,0,0,1,0,-1,0),rotY90:q.create(0,0,-1,0,1,0,1,0,0),rotZ90:q.create(0,1,0,-1,0,0,0,0,1),rotX270:q.create(1,0,0,0,0,-1,0,1,0),rotY270:q.create(0,0,1,0,1,0,-1,0,0),rotZ270:q.create(0,-1,0,1,0,0,0,0,1),rotX180:q.create(1,0,0,0,-1,0,0,0,-1),rotY180:q.create(-1,0,0,0,1,0,0,0,-1),rotZ180:q.create(-1,0,0,0,-1,0,0,0,1)};function qp(e,t){let r=Ry(e,Ty);return Cy(r,t)}function Cy(e,t){if(e.length===0)return console.warn("Skipping PCA, no atoms"),{rotation:Jt.identity,origin:x.zero()};let r=Xn.calculateMomentsAxes(e),n=Xn.calculateNormalizedAxes(r),o=Ey(n.dirA,n.dirB,n.dirC);Ay(o);let i=t?Py(o,t):Dy(e,o,r.origin);return q.mul(o,i,o),{rotation:o,origin:n.origin}}function Ry(e,t){let r;return r=Xa(e,{onlyTrace:!0}),r.length>=3*t||(r=Xa(e,{skipHydrogens:!0,skipWater:!0}),r.length>=3*t)||(r=Xa(e,{})),r}function Xa(e,t){let{onlyTrace:r,skipHydrogens:n,skipWater:o}=t,{x:i,y:a,z:s,type_symbol:c,label_comp_id:u}=Cn.atom,l=[];for(let d of e){let m=R.Location.create(d);for(let f of d.units){m.unit=f;let h=r?f.polymerElements:f.elements;for(let g=0;g<h.length;g++)m.element=h[g],!(n&&c(m)==="H")&&(o&&u(m)==="HOH"||l.push(i(m),a(m),s(m)))}}return l}function Py(e,t){let r=Jt.identity,n=0,o=q();for(let i of[Jt.identity,Jt.rotX180,Jt.rotY180,Jt.rotZ180]){let a=q.innerProduct(q.mul(o,i,e),t);a>n&&(r=i,n=a)}return r}function Dy(e,t,r){let n=x.create(q.getValue(t,0,0),q.getValue(t,0,1),q.getValue(t,0,2)),o=x.create(q.getValue(t,1,0),q.getValue(t,1,1),q.getValue(t,1,2)),i=x.create(q.getValue(t,2,0),q.getValue(t,2,1),q.getValue(t,2,2)),a=Math.floor(e.length/3),s=x(),c=0,u=0,l=0;for(let f=0;f<a;f++)x.fromArray(s,e,3*f),x.sub(s,s,r),c+=f*x.dot(s,n),u+=f*x.dot(s,o),l+=_y(f,a)*x.dot(s,i);let d=l<0,m=d?c+u<0:c-u<0;return m&&d?Jt.rotY180:d?Jt.rotX180:m?Jt.rotZ180:Jt.identity}function _y(e,t){let r=Math.floor(t/2);return e<r?t%2?r-e:r-e-1:e-r}function Ey(e,t,r){let n=q();return q.setValue(n,0,0,e[0]),q.setValue(n,0,1,e[1]),q.setValue(n,0,2,e[2]),q.setValue(n,1,0,t[0]),q.setValue(n,1,1,t[1]),q.setValue(n,1,2,t[2]),q.setValue(n,2,0,r[0]),q.setValue(n,2,1,r[1]),q.setValue(n,2,2,r[2]),n}function Ay(e){q.determinant(e)<0&&(q.setValue(e,2,0,-q.getValue(e,2,0)),q.setValue(e,2,1,-q.getValue(e,2,1)),q.setValue(e,2,2,-q.getValue(e,2,2)))}function Za(e,t){let r=q.invert(q(),t),n=x.distance(e.position,e.target),o=x.transformMat3(x(),x.create(0,0,n),r),i=x.transformMat3(x(),x.create(0,1,0),r),a=x.add(x(),e.target,o);return{...e,position:a,up:i}}var Ir={minRadius:1,extraRadius:4,durationMs:250,zoomOut:!1,zoomOutOptions:{durationFactor:3.5},easing:"linear",trajectory:"linear"},wy={...Ir,optimizeDirection:!1,optimizeDirectionUp:"current"},ai=class{constructor(t){this.plugin=t;this.boundaryHelper=new zr("98")}transformedLoci(t){if(R.Loci.is(t)){let r=this.plugin.helpers.substructureParent.get(t.structure)?.obj?.data;r&&(t=R.Loci.remap(t,r))}return t}focusRenderObjects(t,r){if(!t)return;let n=[];for(let o of t){let i=o.values.boundingSphere.ref.value;i.radius!==0&&n.push(i)}this.focusSpheres(n,o=>o,r)}getFocusSphere(t){let r;if(Array.isArray(t)&&t.length>1){let n=[];for(let o of t){let i=$.getBoundingSphere(this.transformedLoci(o));i&&n.push(i)}if(n.length===0)return;this.boundaryHelper.reset();for(let o of n)this.boundaryHelper.includeSphere(o);this.boundaryHelper.finishedIncludeStep();for(let o of n)this.boundaryHelper.radiusSphere(o);r=this.boundaryHelper.getSphere()}else if(Array.isArray(t)){if(t.length===0)return;r=$.getBoundingSphere(this.transformedLoci(t[0]))}else r=$.getBoundingSphere(this.transformedLoci(t));return r}getFocusLociOptimized(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let o=this.getFocusSphere(t);if(!o)return;let i=Array.isArray(t)?t:[t],a={x:[],y:[],z:[]},s=x(),{extraRadius:c,minRadius:u}={...Ir,...r},l=Math.max(o.radius+c,u);if(l<=.001)return this.getFocusSphereSnapshot(o,r);let d=Cn.entity.type;for(let h of i){if(!R.Loci.is(h))continue;let g=R.Loci.extendToRadius(h,l);R.Loci.forEachLocation(g,T=>{d(T)!=="water"&&(T.unit.conformation.position(T.element,s),a.x.push(s[0]),a.y.push(s[1]),a.z.push(s[2]))})}if(a.x.length===0)return this.getFocusSphereSnapshot(o,r);let m=zp(a,{origin:o.center,minDistance:.001,sigma:o.radius});if(!m)return this.getFocusSphereSnapshot(o,r);x.negate(m,m);let f=r?.optimizeDirectionUp==="default"?x.unitY:x.is(r?.optimizeDirectionUp)?r.optimizeDirectionUp:void 0;return f?n.camera.getInvariantFocus(o.center,l,f,m):n.camera.getFocus(o.center,l,void 0,m)}getFocusLociBase(t,r){let n=this.getFocusSphere(t);if(n)return this.getFocusSphereSnapshot(n,r)}focusLoci(t,r){if(!this.plugin.canvas3d)return;let n={...wy,...r},o;n.optimizeDirection?o=this.getFocusLociOptimized(t,n):o=this.getFocusLociBase(t,n),this.focusSnapshot(o,n)}focusSpheres(t,r,n){let o=[];for(let i of t){let a=r(i);a&&o.push(a)}if(o.length!==0){if(o.length===1)return this.focusSphere(o[0],n);this.boundaryHelper.reset();for(let i of o)this.boundaryHelper.includeSphere(i);this.boundaryHelper.finishedIncludeStep();for(let i of o)this.boundaryHelper.radiusSphere(i);this.focusSphere(this.boundaryHelper.getSphere(),n)}}getFocusSphereSnapshot(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let{extraRadius:o,minRadius:i}={...Ir,...r},a=Math.max(t.radius+o,i);return r?.principalAxes?jp(this.plugin,a,r):n.camera.getFocus(t.center,a)}focusSnapshot(t,r){if(!this.plugin.canvas3d||!t)return;let n=r?.durationMs??Ir.durationMs;if(!r?.zoomOut){this.plugin.canvas3d.requestCameraReset({snapshot:t,durationMs:n,easing:r?.easing,trajectory:r?.trajectory});return}let o=this.plugin.canvas3d.boundingSphere,i=this.getFocusSphereSnapshot(o,r),a=this.plugin.canvas3d?.camera.getSnapshot(),s=x.distance(a.position,i.position),c=x.distance(i.position,t.position),u=s/(s+c),d=1+(r?.zoomOutOptions?.durationFactor??Ir.zoomOutOptions.durationFactor)*Math.min(u,.5);this.plugin.canvas3d.requestCameraReset({snapshot:t,durationMs:d*n,easing:r.easing,trajectory:r.trajectory,keyframes:u>.05?[{t:u,snapshot:i,easing:"cubic-out"},{t:1,snapshot:t,easing:"cubic-in"}]:void 0})}focusSphere(t,r){let{canvas3d:n}=this.plugin;if(!n)return;let o=this.getFocusSphereSnapshot(t,r);o&&this.focusSnapshot(o,r)}focusObject(t){if(!this.plugin.canvas3d)return;let r=Hp(this.plugin,{...t,targets:t.targets?.map(n=>({...n,extraRadius:n.extraRadius??Ir.extraRadius})),minRadius:t.minRadius??Ir.minRadius});this.focusSnapshot(r,t)}orientAxes(t,r,n){if(!this.plugin.canvas3d)return;t||(t=this.plugin.state.data.selectQ(c=>c.ofType(S.Molecule.Structure)).filter(c=>c.obj&&!c.transform.transformer.definition.isDecorator&&!c.obj.data.parent).map(c=>c.obj?.data).filter(c=>!!c));let{rotation:o}=qp(t),i=Za(this.plugin.canvas3d.camera.getSnapshot(),o);this.setSnapshot(i,r,n)}resetAxes(t,r){if(!this.plugin.canvas3d)return;let n=Za(this.plugin.canvas3d.camera.getSnapshot(),q.Identity);this.setSnapshot(n,t,r)}setSnapshot(t,r,n){this.plugin.canvas3d?.requestCameraReset({snapshot:t,durationMs:r,...n})}reset(t,r,n){this.plugin.canvas3d?.requestCameraReset({snapshot:t,durationMs:r,...n})}};var an=class e extends He{constructor(r,n={}){super({props:{...p.getDefaultValues(e.Params),...n}});this.plugin=r;this._props=p.getDefaultValues(e.Params);this.events={propsUpdated:this.ev()};this.lociSelects=new e.LociSelectManager(r,this._props),this.lociHighlights=new e.LociHighlightManager(r,this._props)}get props(){return{...this.state.props}}setProps(r){let n=this.props,o={...this.state.props,...r};Ds(n,o)||(this.updateState({props:o}),this.lociSelects.setProps(o),this.lociHighlights.setProps(o),this.events.propsUpdated.next(void 0))}dispose(){super.dispose(),this.lociSelects.dispose(),this.lociHighlights.dispose()}};(o=>{o.Params={granularity:p.Select("residue",$.GranularityOptions,{label:"Picking Level",description:"Controls if selections are expanded upon picking to whole residues, chains, structures, instances, or left as atoms and coarse elements"})};class t{constructor(a,s={}){this.ctx=a;this.providers=[];this.props=p.getDefaultValues(o.Params);this.sel=a.managers.structure.selection,this.setProps(s)}setProps(a){Object.assign(this.props,a)}addProvider(a){this.providers.push(a)}removeProvider(a){this.providers=this.providers.filter(s=>s!==a)}normalizedLoci(a,s,c=!1){let{loci:u,repr:l}=a,d=s?this.props.granularity:void 0;return{loci:$.normalize(u,d,c),repr:l}}mark(a,s,c=!1){if(!$.isEmpty(a.loci))for(let u of this.providers)u(a,s,c)}dispose(){this.providers.length=0,this.sel.dispose()}}o.LociMarkManager=t;class r extends t{constructor(){super(...arguments);this.prev=[];this.clearHighlights=(s=!1)=>{for(let c of this.prev)this.mark(c,2,s);this.prev.length=0}}isHighlighted(s){for(let c of this.prev)if(xe.Loci.areEqual(c,s))return!0;return!1}addHighlight(s){this.mark(s,1),this.prev.push(s)}highlight(s,c=!0){let u=this.normalizedLoci(s,c);this.isHighlighted(u)||this.addHighlight(u)}highlightOnly(s,c=!0){let u=this.normalizedLoci(s,c);this.isHighlighted(u)||($.isEmpty(u.loci)?this.clearHighlights():(this.clearHighlights(!0),this.addHighlight(u)))}highlightOnlyExtend(s,c=!0){let u=this.normalizedLoci(s,c);if(R.Loci.is(u.loci)){let d={loci:(this.ctx.selectionMode?this.sel.tryGetRange(u.loci):this.ctx.managers.structure.focus.tryGetRange(u.loci))??u.loci,repr:u.repr};this.isHighlighted(d)||($.isEmpty(d.loci)?this.clearHighlights():(this.clearHighlights(!0),this.addHighlight(d)))}}dispose(){super.dispose(),this.prev.length=0}}o.LociHighlightManager=r;class n extends t{toggle(a,s=!0){if($.isEmpty(a.loci))return;let c=this.normalizedLoci(a,s,!0);R.Loci.is(c.loci)?this.toggleSel(c):super.mark(c,16)}toggleExtend(a,s=!0){if($.isEmpty(a.loci))return;let c=this.normalizedLoci(a,s,!0);if(R.Loci.is(c.loci)){let u=this.sel.tryGetRange(c.loci)||c.loci;this.toggleSel({loci:u,repr:c.repr})}}select(a,s=!0){let c=this.normalizedLoci(a,s,!0);R.Loci.is(c.loci)&&this.sel.modify("add",c.loci),this.mark(c,4)}selectJoin(a,s=!0){let c=this.normalizedLoci(a,s,!0);R.Loci.is(c.loci)&&this.sel.modify("intersect",c.loci),this.mark(c,4)}selectOnly(a,s=!0){let c=this.normalizedLoci(a,s,!0);R.Loci.is(c.loci)&&(this.mark({loci:le.Loci(c.loci.structure),repr:c.repr},8),this.sel.modify("set",c.loci)),this.mark(c,4)}deselect(a,s=!0){let c=this.normalizedLoci(a,s,!0);R.Loci.is(c.loci)&&this.sel.modify("remove",c.loci),this.mark(c,8)}deselectAll(){this.sel.clear(),this.mark({loci:fc},8)}deselectAllOnEmpty(a){at(a.loci)&&this.deselectAll()}mark(a,s){let{loci:c}=a;if(!$.isEmpty(c))if(R.Loci.is(c)){let u=this.sel.getLoci(c.structure);super.mark({loci:le.Loci(c.structure)},8,!$.isEmpty(u)),super.mark({loci:u},4)}else super.mark(a,s)}toggleSel(a){this.sel.has(a.loci)?(this.sel.modify("remove",a.loci),this.mark(a,8)):(this.sel.modify("add",a.loci),this.mark(a,4))}}o.LociSelectManager=n})(an||={});var si=class{constructor(t){this.ctx=t;this.providers=[];this.counts=new Map;this.locis=[];this.isDirty=!1;this.labels=[];this.groupedLabels=new Map;t.managers.interactivity.lociHighlights.addProvider((r,n,o)=>{this.providers.length!==0&&(this.mark(r,n),o||this.showLabels())})}clearProviders(){this.providers=[],this.counts.clear(),this.isDirty=!0,this.showLabels()}findConflict(t){}addProvider(t){let r=this.counts.get(t);if(r!==void 0){this.counts.set(t,r+1);return}this.counts.set(t,1),this.providers.push(t),this.providers.sort((n,o)=>(o.priority||0)-(n.priority||0)),this.isDirty=!0,this.showLabels()}removeProvider(t){let r=this.counts.get(t);if(r!==void 0){if(r>1){this.counts.set(t,r-1);return}this.counts.delete(t),this.providers=this.providers.filter(n=>n!==t),this.isDirty=!0,this.showLabels()}}refresh(){this.locis.length!==0&&(this.isDirty=!0,this.showLabels())}mark(t,r){let n=this.locis.findIndex(o=>xe.Loci.areEqual(t,o));n===-1&&r===1?(this.locis.push(t),this.isDirty=!0):n!==-1&&r===2&&(Dr(this.locis,n),this.isDirty=!0)}showLabels(){this.ctx.behaviors.labels.highlight.next({labels:this.getLabels()})}getLabels(){if(this.isDirty){this.groupedLabels.clear(),this.labels.length=0;for(let t of this.providers)for(let r of this.locis){if($.isEmpty(r.loci))continue;let n=t.label(r.loci,r.repr);if(n){let o=t.group?t.group(n):n.toString(),i=this.groupedLabels.get(o);i?i.push(n):this.groupedLabels.set(o,[n])}}this.labels.length=0,this.groupedLabels.forEach((t,r)=>{let n=t.length,o=n>1&&t[0]!==t[1]?r:t[0];this.labels.push(n===1?o:`${o} <small>|| \xD7 ${n}</small>`)}),this.isDirty=!1}return this.labels}};var Ly={lineOfSightDistFactor:p.Numeric(1,{min:0,max:3,step:.1})},Iy={distanceMax:p.Numeric(5,{min:0,max:8,step:.1})},Oy={distanceMax:p.Numeric(5.5,{min:1,max:8,step:.1}),offsetMax:p.Numeric(2,{min:0,max:4,step:.1}),angleDevMax:p.Numeric(30,{min:0,max:180,step:1})},Fy={distanceMax:p.Numeric(6,{min:1,max:8,step:.1}),offsetMax:p.Numeric(2,{min:0,max:4,step:.1})},My={distanceMax:p.Numeric(4,{min:1,max:5,step:.1}),angleMax:p.Numeric(30,{min:0,max:60,step:1})},Qp={distanceMax:p.Numeric(3.5,{min:1,max:5,step:.1}),backbone:p.Boolean(!0,{description:"Include backbone-to-backbone hydrogen bonds"}),accAngleDevMax:p.Numeric(45,{min:0,max:180,step:1},{description:"Max deviation from ideal acceptor angle"}),ignoreHydrogens:p.Boolean(!1,{description:"Ignore explicit hydrogens in geometric constraints"}),donAngleDevMax:p.Numeric(45,{min:0,max:180,step:1},{description:"Max deviation from ideal donor angle"}),accOutOfPlaneAngleMax:p.Numeric(90,{min:0,max:180,step:1}),donOutOfPlaneAngleMax:p.Numeric(45,{min:0,max:180,step:1})},By={...Qp,water:p.Boolean(!1,{description:"Include water-to-water hydrogen bonds"}),sulfurDistanceMax:p.Numeric(4.1,{min:1,max:5,step:.1})},Vy={...Qp},ky={distanceMax:p.Numeric(4,{min:1,max:5,step:.1})},Gy={distanceMax:p.Numeric(3,{min:1,max:5,step:.1})},Uy={backbone:p.Boolean(!0,{description:"Include backbone hydrogen bonds"}),ignoreHydrogens:p.Boolean(!0,{description:"Ignore explicit hydrogens in geometric constraints"}),legDistMin:p.Numeric(2.5,{min:1,max:4,step:.1},{description:"Minimum leg distance (\xC5)"}),legDistMax:p.Numeric(4.1,{min:1,max:6,step:.1},{description:"Maximum leg distance (\xC5)"}),donAngleDevMax:p.Numeric(80,{min:0,max:180,step:1},{description:"Max deviation from ideal donor angle"}),accAngleDevMax:p.Numeric(50,{min:0,max:180,step:1},{description:"Max deviation from ideal acceptor angle"}),donOutOfPlaneAngleMax:p.Numeric(45,{min:0,max:180,step:1}),accOutOfPlaneAngleMax:p.Numeric(90,{min:0,max:180,step:1}),omegaMin:p.Numeric(71,{min:0,max:180,step:1},{description:"Minimum A\u2013W\u2013B angle (\xB0)"}),omegaMax:p.Numeric(140,{min:0,max:180,step:1},{description:"Maximum A\u2013W\u2013B angle (\xB0)"})},Xp={ionic:Iy,"pi-stacking":Oy,"cation-pi":Fy,"halogen-bonds":My,"hydrogen-bonds":By,"weak-hydrogen-bonds":Vy,hydrophobic:ky,"metal-coordination":Gy};function zy(e=[]){let t=Object.create(null);return Object.keys(Xp).forEach(r=>{t[r]=p.MappedStatic(e.includes(r)?"on":"off",{on:p.Group(Xp[r]),off:p.Group({})},{cycle:!0})}),t}var Ny=zy(["cation-pi","pi-stacking","hydrogen-bonds","halogen-bonds","metal-coordination"]),Zp={"water-bridges":Uy};function jy(e=[]){let t=Object.create(null);return Object.keys(Zp).forEach(r=>{t[r]=p.MappedStatic(e.includes(r)?"on":"off",{on:p.Group(Zp[r]),off:p.Group({})},{cycle:!0})}),t}var Wy=jy([]),Yp={providers:p.Group(Ny,{isFlat:!0}),bridges:p.Group(Wy,{isFlat:!0}),contacts:p.Group(Ly,{label:"Advanced Options"})};var Hy=ne.BuiltIn({name:"overpaint-structure-representation-3d-from-script",display:"Overpaint 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),color:p.Color(Ie.blueviolet),clear:p.Boolean(!1)},e=>`${e.clear?"Clear":Bt.toRgbString(e.color)}`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),color:Ie.blueviolet,clear:!1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ye.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{overpaint:o},initialState:{overpaint:Ye.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Overpaint (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.overpaint,c=Ye.ofScript(r.layers,i);return Ye.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.overpaint=c,t.data.repr=e.data.repr,t.label=`Overpaint (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});var ci=ne.BuiltIn({name:"overpaint-structure-representation-3d-from-bundle",display:"Overpaint 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),color:p.Color(Ie.blueviolet),clear:p.Boolean(!1)},e=>`${e.clear?"Clear":Bt.toRgbString(e.color)}`,{defaultValue:[{bundle:R.Bundle.Empty,color:Ie.blueviolet,clear:!1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ye.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{overpaint:o},initialState:{overpaint:Ye.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Overpaint (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.overpaint,c=Ye.ofBundle(r.layers,i);return Ye.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.overpaint=c,t.data.repr=e.data.repr,t.label=`Overpaint (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(Hy,"overpaint");Ve(ci,"overpaint");var Jp="overpaint-controls";async function Qa(e,t,r,n,o){await $y(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),color:r===-1?0:r,clear:r===-1};if(s){let d=[...s.params.values.layers,l],m=Kp(d,c);i.to(s).update(Ye.toBundle(m))}else{let d=Kp([l],c);i.to(a.transform.ref).apply(ci,Ye.toBundle(d),{tags:Jp})}})}async function $y(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(ci,a.cell.transform.ref).withTag(Jp));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Kp(e,t){let r=Ye.ofBundle(e,t.root),n=Ye.merge(r);return Ye.filter(n,t)}var qy=ne.BuiltIn({name:"clipping-structure-representation-3d-from-script",display:"Clipping 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),groups:p.Converted(e=>ye.Groups.toNames(e),e=>ye.Groups.fromNames(e),p.MultiSelect(Yi(ye.Groups.Names),p.objectToOptions(ye.Groups.Names)))},e=>`${ye.Groups.toNames(e.groups).length} group(s)`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),groups:ye.Groups.Flag.None}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=ye.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{clipping:n},initialState:{clipping:ye.Empty},info:r,repr:e.data.repr},{label:`Clipping (${n.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info;if(e.data.sourceData!==o)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let i=t.data.state.clipping,a=ye.ofScript(r.layers,o);return ye.areEqual(i,a)?_.UpdateResult.Unchanged:(t.data.state.clipping=a,t.data.repr=e.data.repr,t.label=`Clipping (${a.layers.length} Layers)`,_.UpdateResult.Updated)}});var ui=ne.BuiltIn({name:"clipping-structure-representation-3d-from-bundle",display:"Clipping 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),groups:p.Converted(e=>ye.Groups.toNames(e),e=>ye.Groups.fromNames(e),p.MultiSelect(Yi(ye.Groups.Names),p.objectToOptions(ye.Groups.Names)))},e=>`${ye.Groups.toNames(e.groups).length} group(s)`,{defaultValue:[{bundle:R.Bundle.Empty,groups:ye.Groups.Flag.None}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=ye.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{clipping:n},initialState:{clipping:ye.Empty},info:r,repr:e.data.repr},{label:`Clipping (${n.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info;if(e.data.sourceData!==o)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let i=t.data.state.clipping,a=ye.ofBundle(r.layers,o);return ye.areEqual(i,a)?_.UpdateResult.Unchanged:(t.data.state.clipping=a,t.data.repr=e.data.repr,t.label=`Clipping (${a.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(qy,"clipping");Ve(ui,"clipping");var tm="clipping-controls";async function rm(e,t,r,n,o){await Xy(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),groups:r};if(s){let d=[...s.params.values.layers,l],m=em(d,c);i.to(s).update(ye.toBundle(m))}else{let d=em([l],c);i.to(a.transform.ref).apply(ui,ye.toBundle(d),{tags:tm})}})}async function Xy(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(ui,a.cell.transform.ref).withTag(tm));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function em(e,t){let r=ye.ofBundle(e,t.root),n=ye.merge(r);return ye.filter(n,t)}var Zy=ne.BuiltIn({name:"transparency-structure-representation-3d-from-script",display:"Transparency 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),value:p.Numeric(.5,{min:0,max:1,step:.01},{label:"Transparency"})},e=>`Transparency (${e.value})`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),value:.5}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ke.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{transparency:o},initialState:{transparency:Ke.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Transparency (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.transparency,c=Ke.ofScript(r.layers,i);return Ke.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.transparency=c,t.data.repr=e.data.repr,t.label=`Transparency (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});var li=ne.BuiltIn({name:"transparency-structure-representation-3d-from-bundle",display:"Transparency 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),value:p.Numeric(.5,{min:0,max:1,step:.01},{label:"Transparency"})},e=>`Transparency (${e.value})`,{defaultValue:[{bundle:R.Bundle.Empty,value:.5}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Ke.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{transparency:o},initialState:{transparency:Ke.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Transparency (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.transparency,c=Ke.ofBundle(r.layers,i);return Ke.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.transparency=c,t.data.repr=e.data.repr,t.label=`Transparency (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(Zy,"transparency");Ve(li,"transparency");var om="transparency-controls";async function im(e,t,r,n,o){await Qy(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],m=nm(d,c);i.to(s).update(Ke.toBundle(m))}else{let d=nm([l],c);i.to(a.transform.ref).apply(li,Ke.toBundle(d),{tags:om})}})}async function Qy(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(li,a.cell.transform.ref).withTag(om));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function nm(e,t){let r=Ke.ofBundle(e,t.root),n=Ke.merge(r);return Ke.filter(n,t)}var Yy="create-structure-focus-representation",Ya=`ms-plugin.${Yy}`;var Ky=ne.BuiltIn({name:"substance-structure-representation-3d-from-script",display:"Substance 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),material:gt.getParam(),clear:p.Boolean(!1)},e=>`${e.clear?"Clear":gt.toString(e.material)}`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),material:gt({roughness:1}),clear:!1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Je.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{substance:o},initialState:{substance:Je.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Substance (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.substance,c=Je.ofScript(r.layers,i);return Je.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.substance=c,t.data.repr=e.data.repr,t.label=`Substance (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});var di=ne.BuiltIn({name:"substance-structure-representation-3d-from-bundle",display:"Substance 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),material:gt.getParam(),clear:p.Boolean(!1)},e=>`${e.clear?"Clear":gt.toString(e.material)}`,{defaultValue:[{bundle:R.Bundle.Empty,material:gt({roughness:1}),clear:!1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=Je.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{substance:o},initialState:{substance:Je.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Substance (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.substance,c=Je.ofBundle(r.layers,i);return Je.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.substance=c,t.data.repr=e.data.repr,t.label=`Substance (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(Ky,"substance");Ve(di,"substance");var sm="substance-controls";async function Ka(e,t,r,n,o){await Jy(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),material:r??gt(),clear:!r};if(s){let d=[...s.params.values.layers,l],m=am(d,c);i.to(s).update(Je.toBundle(m))}else{let d=am([l],c);i.to(a.transform.ref).apply(di,Je.toBundle(d),{tags:sm})}})}async function Jy(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(di,a.cell.transform.ref).withTag(sm));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function am(e,t){let r=Je.ofBundle(e,t.root),n=Je.merge(r);return Je.filter(n,t)}var eb=ne.BuiltIn({name:"emissive-structure-representation-3d-from-script",display:"Emissive 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),value:p.Numeric(.5,{min:0,max:1,step:.01},{label:"Emissive"})},e=>`Emissive (${e.value})`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),value:.5}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=et.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{emissive:o},initialState:{emissive:et.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Emissive (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.emissive,c=et.ofScript(r.layers,i);return et.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.emissive=c,t.data.repr=e.data.repr,t.label=`Emissive (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});var pi=ne.BuiltIn({name:"emissive-structure-representation-3d-from-bundle",display:"Emissive 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),value:p.Numeric(.5,{min:0,max:1,step:.01},{label:"Emissive"})},e=>`Emissive (${e.value})`,{defaultValue:[{bundle:R.Bundle.Empty,value:.5}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=et.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{emissive:o},initialState:{emissive:et.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Emissive (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=e.data.repr.geometryVersion;if(a!==o.geometryVersion&&Ct(e.data.repr.props))return _.UpdateResult.Recreate;let s=t.data.state.emissive,c=et.ofBundle(r.layers,i);return et.areEqual(s,c)?_.UpdateResult.Unchanged:(o.geometryVersion=a,t.data.state.emissive=c,t.data.repr=e.data.repr,t.label=`Emissive (${c.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(eb,"emissive");Ve(pi,"emissive");var um="emissive-controls";async function lm(e,t,r,n,o){await tb(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],m=cm(d,c);i.to(s).update(et.toBundle(m))}else{let d=cm([l],c);i.to(a.transform.ref).apply(pi,et.toBundle(d),{tags:um})}})}async function tb(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(pi,a.cell.transform.ref).withTag(um));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function cm(e,t){let r=et.ofBundle(e,t.root),n=et.merge(r);return et.filter(n,t)}var rb=ne.BuiltIn({name:"wiggle-structure-representation-3d-from-script",display:"Wiggle 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({script:p.Script(Se("(sel.atom.all)","mol-script")),value:p.Numeric(5,{min:0,max:1,step:.01},{label:"Wiggle"})},e=>`Wiggle (${e.value})`,{defaultValue:[{script:Se("(sel.atom.all)","mol-script"),value:1}]})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=ze.ofScript(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{wiggle:o},initialState:{wiggle:ze.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Wiggle (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=t.data.state.wiggle,s=ze.ofScript(r.layers,i);return ze.areEqual(a,s)?_.UpdateResult.Unchanged:(o.geometryVersion=e.data.repr.geometryVersion,t.data.state.wiggle=s,t.data.repr=e.data.repr,t.label=`Wiggle (${s.layers.length} Layers)`,_.UpdateResult.Updated)}});var In=ne.BuiltIn({name:"wiggle-structure-representation-3d-from-bundle",display:"Wiggle 3D Representation",from:S.Molecule.Structure.Representation3D,to:S.Molecule.Structure.Representation3DState,params:()=>({layers:p.ObjectList({bundle:p.Value(R.Bundle.Empty),value:p.Numeric(5,{min:0,max:1,step:.01},{label:"Wiggle"})},e=>`Wiggle (${e.value})`,{defaultValue:[{bundle:R.Bundle.Empty,value:1}],isHidden:!0})})})({canAutoUpdate(){return!0},apply({a:e,params:t}){let r=e.data.sourceData,n=e.data.repr.geometryVersion,o=ze.ofBundle(t.layers,r);return new S.Molecule.Structure.Representation3DState({state:{wiggle:o},initialState:{wiggle:ze.Empty},info:{structure:r,geometryVersion:n},repr:e.data.repr},{label:`Wiggle (${o.layers.length} Layers)`})},update({a:e,b:t,newParams:r,oldParams:n}){let o=t.data.info,i=e.data.sourceData;if(i!==o.structure)return _.UpdateResult.Recreate;if(e.data.repr!==t.data.repr)return _.UpdateResult.Recreate;let a=t.data.state.wiggle,s=ze.ofBundle(r.layers,i);return ze.areEqual(a,s)?_.UpdateResult.Unchanged:(o.geometryVersion=e.data.repr.geometryVersion,t.data.state.wiggle=s,t.data.repr=e.data.repr,t.label=`Wiggle (${s.layers.length} Layers)`,_.UpdateResult.Updated)}});Ve(rb,"wiggle");Ve(In,"wiggle");var es="wiggle-controls";async function dm(e,t,r,n,o){await ts(e,t,async(i,a,s)=>{if(o&&o.length>0&&!o.includes(a.params.values.type.name))return;let c=a.obj.data.sourceData,u=await n(c.root);if($.isEmpty(u)||at(u))return;let l={bundle:R.Bundle.fromLoci(u),value:r};if(s){let d=[...s.params.values.layers,l],m=Ja(d,c);i.to(s).update(ze.toBundle(m))}else{let d=Ja([l],c);i.to(a.transform.ref).apply(In,ze.toBundle(d),{tags:es})}})}async function iM(e,t,r){await ts(e,t,async(n,o,i)=>{r&&r.length>0&&!r.includes(o.params.values.type.name)||i&&n.delete(i.transform.ref)})}async function ts(e,t,r){let n=e.state.data,o=n.build();for(let i of t)for(let a of i.representations){let s=n.select(Ce.Generators.ofTransformer(In,a.cell.transform.ref).withTag(es));await r(o,a.cell,s[0])}return o.commit({doNotUpdateCurrent:!0})}function Ja(e,t){let r=ze.ofBundle(e,t.root),n=ze.merge(r);return ze.filter(n,t)}function pm(e,t){return la.isAtomic(e)?e.model.atomicConformation.B_iso_or_equiv.value(t):la.isSpheres(e)?e.model.coarseConformation.spheres.rmsf[t]:0}function nb(e){let t=1/0,r=-1/0;for(let n of e.units){let o=n.elements;for(let i=0,a=o.length;i<a;i++){let s=pm(n,o[i]);s<t&&(t=s),s>r&&(r=s)}}return isFinite(t)||(t=0),isFinite(r)||(r=0),{min:t,max:r}}async function aM(e,t,r=1,n){await ts(e,t,async(o,i,a)=>{if(n&&n.length>0&&!n.includes(i.params.values.type.name))return;let s=i.obj.data.sourceData,c=s.root,{min:u,max:l}=nb(c),d=l-u;if(d<=0)return;let m=new Map;for(let g of c.units){let T=g.elements,b=new Map;for(let D=0,P=T.length;D<P;D++){let B=(pm(g,T[D])-u)/d,V=Math.min(255,Math.round(B*255));b.has(V)||b.set(V,[]),b.get(V).push(D)}for(let[D,P]of b)m.has(D)||m.set(D,[]),m.get(D).push({unit:g,indices:P})}let f=[];for(let[g,T]of m){let b=g/255*r,D=[];for(let{unit:F,indices:B}of T)D.push({unit:F,indices:nr.ofSortedArray(new Int32Array(B))});let P=R.Loci(c,D);R.Loci.isEmpty(P)||f.push({bundle:R.Bundle.fromLoci(P),value:b})}if(f.length===0)return;let h=Ja(f,s);a?o.to(a).update(ze.toBundle(h)):o.to(i.transform.ref).apply(In,ze.toBundle(h),{tags:es})})}var sn=class e extends He{constructor(r){super({options:p.getDefaultValues(e.OptionsParams)});this.plugin=r;this.events={optionsUpdated:this.ev()};this.optionHandlers=new Map}get currentStructures(){return this.plugin.managers.structure.hierarchy.selection.structures}get pivotStructure(){return this.currentStructures[0]}_setSnapshotState(r){this.updateState({options:r}),this.events.optionsUpdated.next(void 0)}async setOptions(r){let n=Object.keys(r).filter(i=>r[i]!==this.state.options[i]);this.updateState({options:r}),this.events.optionsUpdated.next(void 0);let o=this.dataState.build();for(let i of this.currentStructures)for(let a of i.components)this.updateReprParams(o,a);return this.plugin.dataTransaction(async()=>{await o.commit(),this.plugin.state.hasBehavior(Ya)&&await this.plugin.state.updateBehavior(Ya,i=>{i.ignoreHydrogens=r.hydrogens!=="all",i.ignoreHydrogensVariant=r.hydrogens==="only-polar"?"non-polar":"all",i.ignoreLight=r.ignoreLight,i.material=r.materialStyle,i.clip=r.clipObjects,i.interior=r.interior,i.animation=r.animation});for(let i of n)for(let a of[...this.optionHandlers.get(i)??[]])await a(r[i],this)})}registerOptionHandler(r,n){let o=this.optionHandlers.get(r)??[];return o.push(n),this.optionHandlers.set(r,o),()=>{let i=this.optionHandlers.get(r);if(!i)return;let a=i.indexOf(n);a>=0&&i.splice(a,1),i.length===0&&this.optionHandlers.delete(r)}}updateReprParams(r,n){let{hydrogens:o,visualQuality:i,ignoreLight:a,materialStyle:s,clipObjects:c,solidSurface:u,interior:l,animation:d}=this.state.options,m=o!=="all",f=o==="only-polar"?"non-polar":"all";for(let h of n.representations){if(h.cell.transform.transformer!==rn)continue;let g=h.cell.transform.params,T=Ko(g.type.name),b=g.type.params.interior,D=g.type.params.animation;(!!g.type.params.ignoreHydrogens!==m||g.type.params.ignoreHydrogensVariant!==f||g.type.params.quality!==i||g.type.params.ignoreLight!==a||!gt.areEqual(g.type.params.material,s)||!p.areEqual(ia.Params,g.type.params.clip,c)||T&&g.type.params.solidInterior!==u||b&&!bc(b,l)||D&&!vc(D,d))&&r.to(h.cell).update(P=>{P.type.params.ignoreHydrogens=m,P.type.params.ignoreHydrogensVariant=f,P.type.params.quality=i,P.type.params.ignoreLight=a,P.type.params.material=s,P.type.params.clip=c,T&&(P.type.params.solidInterior=u),b&&(P.type.params.interior=l),D&&(P.type.params.animation=d)})}}applyPreset(r,n,o){return this.plugin.dataTransaction(async()=>{for(let i of r){let a=await this.plugin.builders.structure.representation.applyPreset(i.cell,n,o);await this.syncPreset(i,a)}},{canUndo:"Preset"})}syncPreset(r,n){if(!n||!n.components)return this.clearComponents([r]);let o=new Set;if(ot(n.components,c=>{c&&o.add(c.ref)}),n.representations&&ot(n.representations,c=>{c&&o.add(c.ref)}),o.size===0)return this.clearComponents([r]);let i=!1,a=this.dataState.build(),s=c=>{o.has(c.cell.transform.ref)||(i=!0,a.delete(c.cell))};for(let c of r.components){s(c);for(let u of c.representations)s(u);if(c.genericRepresentations)for(let u of c.genericRepresentations)s(u)}if(r.genericRepresentations)for(let c of r.genericRepresentations)s(c);if(i)return a.commit()}clear(r){return this.clearComponents(r)}selectThis(r){let n=this.plugin.managers.structure.selection;n.clear();for(let o of r){let i=le.toSubStructureElementLoci(o.structure.cell.obj.data,o.cell.obj?.data);n.fromLoci("set",i)}}canBeModified(r){return this.plugin.builders.structure.isComponentTransform(r.cell)}modifyByCurrentSelection(r,n){return this.plugin.runTask(Q.create("Modify Component",async o=>{let i=this.dataState.build();for(let a of r){if(!this.canBeModified(a))continue;let s=this.plugin.managers.structure.selection.getStructure(a.structure.cell.obj.data);!s||s.elementCount===0||this.modifyComponent(i,a,s,n)}await this.dataState.updateTree(i,{canUndo:"Modify Selection"}).runInContext(o)}))}toggleVisibility(r,n){if(r.length!==0)if(n){let o=r[0].representations.indexOf(n),i=!n.cell.state.isHidden;for(let a of r){let s=a.representations[o];s&&lr(this.dataState,s.cell.transform.ref,i)}}else{let o=!r[0].cell.state.isHidden;for(let i of r)lr(this.dataState,i.cell.transform.ref,o)}}removeRepresentations(r,n){if(r.length===0)return;let o=[];if(n){let i=r[0].representations.indexOf(n);if(i<0)return;for(let a of r)a.representations[i]&&o.push(a.representations[i])}else for(let i of r)for(let a of i.representations)o.push(a);return this.plugin.managers.structure.hierarchy.remove(o,!0)}updateRepresentations(r,n,o){if(r.length===0)return Promise.resolve();let i=r[0].representations.indexOf(n);if(i<0)return Promise.resolve();let a=this.dataState.build();for(let s of r){let c=s.representations[i];c&&c.cell.transform.transformer===n.cell.transform.transformer&&a.to(c.cell).update(o)}return a.commit({canUndo:"Update Representation"})}updateRepresentationsTheme(r,n){if(r.length===0)return;let o=this.dataState.build();for(let i of r)for(let a of i.representations){let s=a.cell.transform.params,c=typeof n=="function"?n(i,a):n,u=c.color==="default"?ja(this.plugin,i.structure.cell.obj?.data,s?.type.name):c.color?ja(this.plugin,i.structure.cell.obj?.data,s?.type.name,c.color,c.colorParams):void 0,l=c.size==="default"?Wa(this.plugin,i.structure.cell.obj?.data,s?.type.name):c.size?Wa(this.plugin,i.structure.cell.obj?.data,s?.type.name,c.size,c.sizeParams):void 0;(u||l)&&o.to(a.cell).update(d=>{u&&(d.colorTheme=u),l&&(d.sizeTheme=l)})}return o.commit({canUndo:"Update Theme"})}addRepresentation(r,n){if(r.length===0)return;let{hydrogens:o,visualQuality:i,ignoreLight:a,materialStyle:s,clipObjects:c,solidSurface:u,interior:l,animation:d}=this.state.options,h={ignoreHydrogens:o!=="all",ignoreHydrogensVariant:o==="only-polar"?"non-polar":"all",quality:i,ignoreLight:a,material:s,clip:c,interior:l,animation:d,...Ko(n)&&{solidInterior:u}};return this.plugin.dataTransaction(async()=>{for(let g of r)await this.plugin.builders.structure.representation.addRepresentation(g.cell,{type:this.plugin.representation.structure.registry.get(n),typeParams:h})},{canUndo:"Add Representation"})}tryFindComponent(r,n){if(r.components.length!==0)return this.plugin.runTask(Q.create("Find Component",async o=>{let i=r.cell.obj?.data;if(!i)return;let a=we.unionStructure(await n.getSelection(this.plugin,o,i));for(let s of r.components){let c=s.cell.obj?.data;if(!(!c||!s.cell.parent)&&uc(a,c))return s.cell}}))}async add(r,n){return this.plugin.dataTransaction(async()=>{let o=n||this.currentStructures;if(o.length===0)return;let{hydrogens:i,visualQuality:a,ignoreLight:s,materialStyle:c,clipObjects:u,solidSurface:l,interior:d,animation:m}=this.state.options,g={ignoreHydrogens:i!=="all",ignoreHydrogensVariant:i==="only-polar"?"non-polar":"all",quality:a,ignoreLight:s,material:c,clip:u,interior:d,animation:m,...Ko(r.representation)&&{solidInterior:l}},T=fn.create22();for(let b of o){let D;r.options.checkExisting&&(D=await this.tryFindComponent(b,r.selection)),D||(D=await this.plugin.builders.structure.tryCreateComponentFromSelection(b.cell,r.selection,T,{label:r.options.label||(r.selection===za?"Custom Selection":"")})),!(r.representation==="none"||!D)&&await this.plugin.builders.structure.representation.addRepresentation(D,{type:this.plugin.representation.structure.registry.get(r.representation),typeParams:g})}},{canUndo:"Add Selection"})}async applyTheme(r,n){return this.plugin.dataTransaction(async o=>{let i=n||this.currentStructures;if(i.length===0)return;let a=async s=>we.toLociWithSourceUnits(await r.selection.getSelection(this.plugin,o,s));for(let s of i)if(r.action.name==="color"){let c=r.action.params;await Qa(this.plugin,s.components,c.color,a,r.representations)}else if(r.action.name==="resetColor")await Qa(this.plugin,s.components,-1,a,r.representations);else if(r.action.name==="transparency"){let c=r.action.params;await im(this.plugin,s.components,c.value,a,r.representations)}else if(r.action.name==="emissive"){let c=r.action.params;await lm(this.plugin,s.components,c.value,a,r.representations)}else if(r.action.name==="material"){let c=r.action.params;await Ka(this.plugin,s.components,c.material,a,r.representations)}else if(r.action.name==="resetMaterial")await Ka(this.plugin,s.components,void 0,a,r.representations);else if(r.action.name==="clipping"){let c=r.action.params;await rm(this.plugin,s.components,ye.Groups.fromNames(c.excludeGroups),a,r.representations)}else if(r.action.name==="wiggle"){let c=r.action.params;await dm(this.plugin,s.components,c.value,a,r.representations)}},{canUndo:"Apply Theme"})}modifyComponent(r,n,o,i){let a=n.cell.obj?.data;if(!a||(i==="subtract"||i==="intersect")&&!lc(a,o))return;let s=n.structure.cell.obj?.data,c=i==="union"?cc(s,[a,o]):i==="intersect"?dc(a,o):pc(a,o);if(c.elementCount===0)r.delete(n.cell.transform.ref);else{let l={type:{name:"bundle",params:R.Bundle.fromSubStructure(s,c)},nullIfEmpty:!0,label:n.cell.obj?.label};r.to(n.cell).update(l)}}updateLabel(r,n){let o={type:r.cell.params?.values.type,nullIfEmpty:r.cell.params?.values.nullIfEmpty,label:n};this.dataState.build().to(r.cell).update(o).commit()}get dataState(){return this.plugin.state.data}clearComponents(r){let n=this.dataState.build();for(let o of r)for(let i of o.components)n.delete(i.cell.transform.ref);return n.commit({canUndo:"Clear Selections"})}};(s=>{s.OptionsParams={hydrogens:p.Select("all",[["all","Show All"],["hide-all","Hide All"],["only-polar","Only Polar"]],{description:"Determine display of hydrogen atoms in representations"}),visualQuality:p.Select("auto",gc,{description:"Control the visual/rendering quality of representations"}),ignoreLight:p.Boolean(!1,{description:"Ignore light for stylized rendering of representations"}),solidSurface:p.Boolean(!0,{description:"Render a solid cap where the camera near plane or a clip object cuts a surface representation"}),materialStyle:gt.getParam(),clipObjects:p.Group(ia.Params),interactions:p.Group(Yp,{label:"Non-covalent Interactions"}),interior:yc(),animation:xc()};function t(c){return c.find(u=>u[0]===za)?.[0]??c[0]?.[0]}s.getDefaultSelectionQuery=t;function r(c,u){let{options:l}=c.query.structure.registry;return p.Select(t(l),l,{isHidden:u})}function n(c,u){return u={pivot:c.managers.structure.component.pivotStructure,allowNone:!0,hideSelection:!1,checkExisting:!1,...u},{selection:r(c,u?.hideSelection),representation:a(c,u?.pivot,u?.allowNone?[["none","< Create Later >"]]:[]),options:p.Group({label:p.Text(""),checkExisting:p.Boolean(!!u?.checkExisting,{help:()=>({description:"Checks if a selection with the specifield elements already exists to avoid creating duplicate components."})})})}}s.getAddParams=n;function o(c,u){return{selection:r(c,!1),action:p.MappedStatic("color",{color:p.Group({color:p.Color(Ie.blue,{isExpanded:!0})},{isFlat:!0}),resetColor:p.EmptyGroup({label:"Reset Color"}),transparency:p.Group({value:p.Numeric(.5,{min:0,max:1,step:.01})},{isFlat:!0}),emissive:p.Group({value:p.Numeric(.5,{min:0,max:1,step:.01})},{isFlat:!0}),material:p.Group({material:gt.getParam({isFlat:!0})},{isFlat:!0}),resetMaterial:p.EmptyGroup({label:"Reset Material"}),clipping:p.Group({excludeGroups:p.MultiSelect([],p.objectToOptions(ye.Groups.Names))},{isFlat:!0}),wiggle:p.Group({value:p.Numeric(1,{min:0,max:5,step:.01})},{isFlat:!0})}),representations:p.MultiSelect([],i(c,u),{emptyValue:"All"})}}s.getThemeParams=o;function i(c,u){return u?.cell.obj?.data?c.representation.structure.registry.getApplicableTypes(u.cell.obj?.data):c.representation.structure.registry.types}s.getRepresentationTypes=i;function a(c,u,l,d){let m=[...l,...i(c,u)];return p.Select(m[0][0],m,{label:d})}})(sn||={});var On=new zr("98"),ob=24,mi=class extends He{constructor(r){super({entries:new Map,additionsHistory:[],stats:ib()});this.plugin=r;this.events={changed:this.ev(),additionsHistoryUpdated:this.ev(),loci:{add:this.ev(),remove:this.ev(),clear:this.ev()}};r.helpers.substructureParent.events.removed.subscribe(n=>this.onRemove(n.ref,n.obj)),r.helpers.substructureParent.events.updated.subscribe(n=>this.onUpdate(n.ref,n.oldObj,n.obj))}get entries(){return this.state.entries}get additionsHistory(){return this.state.additionsHistory}get stats(){return this.state.stats?this.state.stats:(this.state.stats=this.calcStats(),this.state.stats)}getEntry(r){let n=this.plugin.helpers.substructureParent.get(r,!0);if(!n)return;let o=n.transform.ref;if(!this.entries.has(o)){let i=new Fn(R.Loci(r,[]));return this.entries.set(o,i),i}return this.entries.get(o)}calcStats(){let r=0,n=0,o=R.Stats.create();this.entries.forEach(a=>{let{elements:s}=a.selection;if(s.length){r+=1;for(let c=0,u=s.length;c<u;++c)n+=nr.size(s[c].indices);R.Stats.add(o,o,R.Stats.ofLoci(a.selection))}});let i=ya(o,{countsOnly:!0});return{structureCount:r,elementCount:n,label:i}}add(r){if(!R.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=R.Loci.union(n.selection,r),this.tryAddHistory(r),this.referenceLoci=r,this.events.loci.add.next(r),!R.Loci.areEqual(o,n.selection)}remove(r){if(!R.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=R.Loci.subtract(n.selection,r),this.referenceLoci=r,this.events.loci.remove.next(r),!R.Loci.areEqual(o,n.selection)}intersect(r){if(!R.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=R.Loci.intersect(n.selection,r),this.referenceLoci=r,!R.Loci.areEqual(o,n.selection)}set(r){if(!R.Loci.is(r))return!1;let n=this.getEntry(r.structure);if(!n)return!1;let o=n.selection;return n.selection=r,this.tryAddHistory(r),this.referenceLoci=void 0,!R.Loci.areEqual(o,n.selection)}modifyHistory(r,n,o,i=!1){let a=this.additionsHistory,s=a.indexOf(r);if(s<0)return;let c;switch(n){case"remove":Dr(a,s);break;case"up":c=s-1;break;case"down":c=s+1;break}if(c!==void 0){let u=o?Math.min(a.length,o):a.length;for(;;)if(c=c%u,c<0&&(c+=u),!i||a[s].loci.structure===a[c].loci.structure){let l=a[s];a[s]=a[c],a[c]=l;break}else c+=n==="up"?-1:1}this.events.additionsHistoryUpdated.next(void 0)}tryAddHistory(r){if($.isEmpty(r))return;let n=0,o;for(let s of this.additionsHistory){if($.areEqual(s.loci,r)){o=s;break}n++}if(o){Dr(this.additionsHistory,n),this.additionsHistory.unshift(o),this.events.additionsHistoryUpdated.next(void 0);return}let i=R.Stats.ofLoci(r),a=ya(i,{reverse:!0});this.additionsHistory.unshift({id:fn.create22(),loci:r,label:a}),this.additionsHistory.length>ob&&this.additionsHistory.pop(),this.events.additionsHistoryUpdated.next(void 0)}clearHistory(){this.state.additionsHistory.length!==0&&(this.state.additionsHistory=[],this.events.additionsHistoryUpdated.next(void 0))}clearHistoryForStructure(r){let n=[];for(let o of this.state.additionsHistory)o.loci.structure.root===r.root&&n.push(o);for(let o of n)this.modifyHistory(o,"remove");n.length!==0&&this.events.additionsHistoryUpdated.next(void 0)}onRemove(r,n){this.entries.has(r)&&(this.entries.delete(r),n?.data&&this.clearHistoryForStructure(n.data),this.referenceLoci?.structure===n?.data&&(this.referenceLoci=void 0),this.state.stats=void 0,this.events.changed.next(void 0))}onUpdate(r,n,o){if(n===o||n?.data===o.data)return;let i=this.plugin.helpers.substructureParent.get(o.data,!0);if(!i||r!==i.transform.ref||!this.entries.has(r))return;let a=this.plugin.helpers.substructureParent.get(o.data)?.obj?.data;if(a)if(!n?.data||le.areUnitIdsAndIndicesEqual(n.data,o.data)){this.entries.set(r,ab(this.entries.get(r),a)),this.referenceLoci?.structure.root===a.root&&(this.referenceLoci=R.Loci.remap(this.referenceLoci,a));let s=!1;for(let c of this.state.additionsHistory)c.loci.structure.root===a.root&&(c.loci=R.Loci.remap(c.loci,a),s=!0);s&&this.events.additionsHistoryUpdated.next(void 0)}else this.entries.set(r,new Fn(R.Loci(a,[]))),this.referenceLoci?.structure.root===a.root&&(this.referenceLoci=void 0),this.clearHistoryForStructure(a),this.state.stats=void 0,this.events.changed.next(void 0)}clear(){let r=this.entries.keys(),n=[];for(;;){let o=r.next();if(o.done)break;let i=this.entries.get(o.value);R.Loci.isEmpty(i.selection)||n.push(i.selection),i.selection=R.Loci(i.selection.structure,[])}return this.referenceLoci=void 0,this.state.stats=void 0,this.events.changed.next(void 0),this.events.loci.clear.next(void 0),this.clearHistory(),n}getLoci(r){let n=this.getEntry(r);return n?n.selection:hc}getStructure(r){let n=this.getEntry(r);if(n)return n.structure}structureHasSelection(r){let n=r.cell?.obj?.data;if(!n)return!1;let o=this.getEntry(n);return!!o&&!R.Loci.isEmpty(o.selection)}has(r){if(R.Loci.is(r)){let n=this.getEntry(r.structure);if(n)return R.Loci.isSubset(n.selection,r)}return!1}tryGetRange(r){if(R.Loci.is(r)&&this.getEntry(r.structure))return rs(this.referenceLoci,r)}elementCount(){let r=0;return this.entries.forEach(n=>{r+=R.Loci.size(n.selection)}),r}getBoundary(){let r=x.create(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n=x.create(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);On.reset();let o=[];this.entries.forEach(i=>{let a=i.selection;R.Loci.isEmpty(a)||o.push(R.Loci.getBoundary(a))});for(let i=0,a=o.length;i<a;++i){let{box:s,sphere:c}=o[i];x.min(r,r,s.min),x.max(n,n,s.max),On.includePositionRadius(c.center,c.radius)}On.finishedIncludeStep();for(let i=0,a=o.length;i<a;++i){let{sphere:s}=o[i];On.radiusPositionRadius(s.center,s.radius)}return{box:{min:r,max:n},sphere:On.getSphere()}}getPrincipalAxes(){let r=ws(this.entries.values());return R.Loci.getPrincipalAxesMany(r.map(n=>n.selection))}modify(r,n){let o=!1;switch(r){case"add":o=this.add(n);break;case"remove":o=this.remove(n);break;case"intersect":o=this.intersect(n);break;case"set":o=this.set(n);break}o&&(this.state.stats=void 0,this.events.changed.next(void 0))}get applicableStructures(){return this.plugin.managers.structure.hierarchy.selection.structures.filter(r=>!!r.cell.obj).map(r=>r.cell.obj.data)}triggerInteraction(r,n,o=!0){switch(r){case"add":this.plugin.managers.interactivity.lociSelects.select({loci:n},o);break;case"remove":this.plugin.managers.interactivity.lociSelects.deselect({loci:n},o);break;case"intersect":this.plugin.managers.interactivity.lociSelects.selectJoin({loci:n},o);break;case"set":this.plugin.managers.interactivity.lociSelects.selectOnly({loci:n},o);break}}fromLoci(r,n,o=!0){this.triggerInteraction(r,n,o)}fromCompiledQuery(r,n,o=!0){for(let i of this.applicableStructures){let a=n(new ar(i));this.triggerInteraction(r,we.toLociWithSourceUnits(a),o)}}fromSelectionQuery(r,n,o=!0){this.plugin.runTask(Q.create("Structure Selection",async i=>{for(let a of this.applicableStructures){let s=await n.getSelection(this.plugin,i,a);this.triggerInteraction(r,we.toLociWithSourceUnits(s),o)}}))}fromSelections(r){let n=St.resolveAndCheck(this.plugin.state.data,r);if(!(!n||!n.obj)){if(!S.Molecule.Structure.Selections.is(n.obj)){console.warn("fromSelections applied to wrong object type.",n.obj);return}this.clear();for(let o of n.obj?.data)this.fromLoci("set",o.loci)}}getSnapshot(){let r=[];return this.entries.forEach((n,o)=>{r.push({ref:o,bundle:R.Bundle.fromLoci(n.selection)})}),{entries:r}}setSnapshot(r){this.entries.clear();for(let{ref:n,bundle:o}of r.entries){let i=this.plugin.state.data.select(Ce.Generators.byRef(n))[0]?.obj?.data;if(!i)continue;let a=R.Bundle.toLoci(o,i);this.fromLoci("set",a,!1)}}};function ib(){return{structureCount:0,elementCount:0,label:"Nothing Selected"}}var Fn=class{constructor(t){this._structure=void 0;this._selection=t}get selection(){return this._selection}set selection(t){this._selection=t,this._structure=void 0}get structure(){return this._structure?this._structure:($.isEmpty(this._selection)?this._structure=void 0:this._structure=R.Loci.toStructure(this._selection),this._structure)}};function ab(e,t){return new Fn(R.Loci.remap(e.selection,t))}function rs(e,t){if(!R.Loci.is(e)||!R.Loci.is(t)||e.structure!==t.structure||t.elements.length!==1)return;let r=t.elements[0];if(!r)return;let n;for(let o of e.elements)if(r.unit===o.unit){n=o;break}if(n&&r.unit===n.unit)return sb(t.structure,n,r)}function sb(e,t,r){let n=Math.min(nr.min(t.indices),nr.min(r.indices)),o=Math.max(nr.max(t.indices),nr.max(r.indices));return R.Loci(e,[{unit:t.unit,indices:nr.ofRange(n,o)}])}var cb=8,fi=class extends He{constructor(r){super({history:[]});this.plugin=r;this.events={historyUpdated:this.ev()};this.behaviors={current:this.ev.behavior(void 0)};r.state.data.events.object.removed.subscribe(({obj:o})=>{if(!S.Molecule.Structure.is(o))return;this.current?.loci.structure===o.data&&this.clear();let i=[];for(let a of this.history)a.loci.structure===o.data&&i.push(a);i.length!==this.history.length&&(this.history.length=0,this.history.push(...i),this.events.historyUpdated.next(void 0))});let n=_e();r.state.data.events.object.updated.subscribe(({oldData:o,obj:i,action:a})=>{if(S.Molecule.Structure.is(i)&&o!==i.data&&a==="in-place"){let s=this.state.current,c=i.data;if(s&&s.loci.structure===o){let u=R.Loci.remap(s.loci,c);this.state.current={...s,loci:u},this.behaviors.current.next(this.state.current),$.getBoundingSphere(u,n);let l=this.plugin.canvas3d?.camera,d=l.getTargetDistance(n.radius+4);(x.distance(l.target,n.center)>n.radius||d>l.viewport.height/l.zoom)&&this.plugin.managers.camera.focusSphere(n,{durationMs:0})}}})}get current(){return this.state.current}get history(){return this.state.history}tryAddHistory(r){if(R.Loci.isEmpty(r.loci))return;let n=0,o;for(let i of this.state.history){if(R.Loci.areEqual(i.loci,r.loci)){o=i;break}n++}if(o){Dr(this.state.history,n),this.state.history.unshift(r),this.events.historyUpdated.next(void 0);return}this.state.history.unshift(r),this.state.history.length>cb&&this.state.history.pop(),this.events.historyUpdated.next(void 0)}set(r){this.tryAddHistory(r),(!this.state.current||!R.Loci.areEqual(this.state.current.loci,r.loci))&&(this.state.current=r,this.behaviors.current.next(r))}tryGetRange(r){return rs(this.referenceLoci,r)}setFromLoci(r){let n=$.normalize(r);if(!R.Loci.is(n)||R.Loci.isEmpty(n)){this.clear();return}this.set({loci:n,label:bo(n,{reverse:!0,hidePrefix:!0,htmlStyling:!1})}),this.referenceLoci=n}addFromLoci(r){let n=this.state.current&&R.Loci.is(r)&&r.structure===this.state.current.loci.structure?R.Loci.union(r,this.state.current.loci):r;this.setFromLoci(n);let o=$.normalize(r);this.referenceLoci=R.Loci.is(o)?o:void 0}toggleFromLoci(r){let{kind:n,loci:o}=ub(this.state.current?.loci,r);this.setFromLoci(o);let i=$.normalize(r);this.referenceLoci=R.Loci.is(i)&&n!=="subtract"?i:void 0}extendFromLoci(r){let n=this.tryGetRange(r)??r;this.toggleFromLoci(n)}clear(){this.state.current&&(this.state.current=void 0,this.behaviors.current.next(void 0)),this.referenceLoci=void 0}getSnapshot(){if(!this.current)return{};let n=this.plugin.helpers.substructureParent.get(this.current.loci.structure)?.transform.ref;return n?{current:{label:this.current.label,ref:n,bundle:R.Bundle.fromLoci(this.current.loci),category:this.current.category}}:{}}setSnapshot(r){if(!r.current){this.clear();return}let{label:n,ref:o,bundle:i,category:a}=r.current,s=this.plugin.state.data.select(Ce.Generators.byRef(o))[0]?.obj?.data;if(!s)return;let c=R.Bundle.toLoci(i,s);this.set({label:n,loci:c,category:a})}};function ub(e,t){return e&&R.Loci.is(t)&&t.structure===e.structure?R.Loci.isSubset(e,t)?{kind:"subtract",loci:R.Loci.subtract(e,t)}:{kind:"add",loci:R.Loci.union(t,e)}:{kind:"new",loci:t}}var lb={name:"Volume Streaming",typeClass:"Behavior"};function mm(e){return!!e&&e.type===lb}function ym(e,t){let r=Sb(e,t||gi());return Db(e.tree,r),t&&t.refs.forEach(Rb,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function gi(){return{trajectories:[],models:[],structures:[],refs:new Map}}function db(e){return{kind:"trajectory",cell:e,version:e.transform.version,models:[]}}function fm(e,t){return{kind:"model",cell:e,version:e.transform.version,trajectory:t,structures:[]}}function pb(e,t){return{kind:"model-properties",cell:e,version:e.transform.version,model:t}}function mb(e,t){return{kind:"model-unitcell",cell:e,version:e.transform.version,model:t}}function hm(e,t){return{kind:"structure",cell:e,version:e.transform.version,model:t,components:[]}}function fb(e,t){return{kind:"structure-properties",cell:e,version:e.transform.version,structure:t}}function hb(e,t){return{kind:"structure-transform",cell:e,version:e.transform.version,structure:t}}function gb(e,t){return{kind:"structure-volume-streaming",cell:e,version:e.transform.version,structure:t}}function yb(e){return e.transform.tags?[...e.transform.tags].sort().join():e.transform.ref}function bb(e,t){return{kind:"structure-component",cell:e,version:e.transform.version,structure:t,key:yb(e),representations:[]}}function xb(e,t){return{kind:"structure-representation",cell:e,version:e.transform.version,component:t}}function vb(e,t){return{kind:"generic-representation",cell:e,version:e.transform.version,parent:t}}function Sb(e,t){return{state:e,oldHierarchy:t,hierarchy:gi(),changed:!1,added:new Set}}function cn(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function Or(e,t,r,...n){let o=r(...n);e.hierarchy.refs.set(t.transform.ref,o);let i=e.oldHierarchy.refs.get(t.transform.ref);return i?i.version!==t.transform.version&&(e.changed=!0):(e.added.add(o.cell.transform.ref),e.changed=!0),o}function Tb(e){return t=>e.is(t.obj)}function gm(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function hi(e){return t=>t.transform.transformer===e}function Fr(){}var Cb=[[Tb(S.Molecule.Trajectory),(e,t)=>{e.currentTrajectory=cn(e,t,e.hierarchy.trajectories,db,t)},e=>e.currentTrajectory=void 0],[gm(S.Molecule.Model,e=>e.currentModel),(e,t)=>{e.currentTrajectory?e.currentModel=cn(e,t,e.currentTrajectory.models,fm,t,e.currentTrajectory):e.currentModel=Or(e,t,fm,t),e.hierarchy.models.push(e.currentModel)},e=>e.currentModel=void 0],[hi(ao),(e,t)=>{if(!e.currentModel)return!1;e.currentModel.properties=Or(e,t,pb,t,e.currentModel)},Fr],[hi(An),(e,t)=>{if(!e.currentModel)return!1;e.currentModel.unitcell=Or(e,t,mb,t,e.currentModel)},Fr],[gm(S.Molecule.Structure,e=>e.currentStructure),(e,t)=>{e.currentModel?e.currentStructure=cn(e,t,e.currentModel.structures,hm,t,e.currentModel):e.currentStructure=Or(e,t,hm,t),e.hierarchy.structures.push(e.currentStructure)},e=>e.currentStructure=void 0],[hi(so),(e,t)=>{if(!e.currentStructure)return!1;e.currentStructure.properties=Or(e,t,fb,t,e.currentStructure)},Fr],[hi(Bc),(e,t)=>{if(!e.currentStructure)return!1;e.currentStructure.transform=Or(e,t,hb,t,e.currentStructure)},Fr],[e=>mm(e.obj),(e,t)=>(e.currentStructure&&(e.currentStructure.volumeStreaming=Or(e,t,gb,t,e.currentStructure)),!1),Fr],[(e,t)=>!t.currentStructure||e.transform.transformer.definition.isDecorator?!1:S.Molecule.Structure.is(e.obj),(e,t)=>{e.currentStructure&&(e.currentComponent&&(e.parentComponents||(e.parentComponents=[]),e.parentComponents.push(e.currentComponent)),e.currentComponent=cn(e,t,e.currentStructure.components,bb,t,e.currentStructure))},e=>{e.parentComponents&&e.parentComponents.length>0?e.currentComponent=e.parentComponents.pop():e.currentComponent=void 0}],[(e,t)=>!e.state.isGhost&&!!t.currentComponent&&S.Molecule.Structure.Representation3D.is(e.obj),(e,t)=>(e.currentComponent&&cn(e,t,e.currentComponent.representations,xb,t,e.currentComponent),!1),Fr],[e=>!e.state.isGhost&&S.isRepresentation3D(e.obj),(e,t)=>{let r=e.currentComponent||e.currentStructure||e.currentModel;r&&(r.genericRepresentations||(r.genericRepresentations=[]),cn(e,t,r.genericRepresentations,vb,t,r))},Fr]];function bm(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Qe.Null||e.status!=="ok"&&e.status!=="error")}function Rb(e){let{cell:t}=e;bm(t)||(this.changed=!0)}function Pb(e){xm(this,this.tree.transforms.get(e))}function xm(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!bm(n))return;let o,i=!1;for(let[s,c,u]of Cb)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(Pb,e),o&&o(r)}function Db(e,t){let r={tree:e,state:t};return xm(r,e.root),r.state}var un=class e extends mr{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:gi(),selection:{trajectories:[],models:[],structures:[]}};this.behaviors={selection:this.ev.behavior({hierarchy:this.current,trajectories:this.selection.trajectories,models:this.selection.models,structures:this.selection.structures})};this._currentComponentGroups=void 0;this._currentSelectionSet=void 0;this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get currentComponentGroups(){return this._currentComponentGroups?this._currentComponentGroups:(this._currentComponentGroups=e.getComponentGroups(this.selection.structures),this._currentComponentGroups)}get seletionSet(){if(this._currentSelectionSet)return this._currentSelectionSet;this._currentSelectionSet=new Set;for(let r of this.selection.trajectories)this._currentSelectionSet.add(r.cell.transform.ref);for(let r of this.selection.models)this._currentSelectionSet.add(r.cell.transform.ref);for(let r of this.selection.structures)this._currentSelectionSet.add(r.cell.transform.ref);return this._currentSelectionSet}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}getStructuresWithSelection(){let r=this.plugin.managers.structure.hierarchy.current.structures,n=[];for(let o of r)this.plugin.managers.structure.selection.structureHasSelection(o)&&n.push(o);return n}findStructure(r){if(!r)return;let n=this.plugin.helpers.substructureParent.get(r);if(!n)return;let o=this.plugin.state.data.selectQ(i=>i.byValue(n).rootOfType(S.Molecule.Structure))[0];if(o)return this.behaviors.selection.value.structures.find(i=>i.cell===o)}syncCurrent(r,n){let o=this.seletionSet,i=[];for(let a of r){let s=a.cell.transform.ref;(o.has(s)||n.has(s))&&i.push(a)}return i.length===0?r.length>0?[r[0]]:[]:i}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,...this.state.selection}));return}this.state.syncedTree=this.dataState.tree;let n=ym(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n,i=this.syncCurrent(o.trajectories,n.added),a=this.syncCurrent(o.models,n.added),s=this.syncCurrent(o.structures,n.added);this._currentComponentGroups=void 0,this._currentSelectionSet=void 0,this.state.hierarchy=o,this.state.selection.trajectories=i,this.state.selection.models=a,this.state.selection.structures=s,r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,trajectories:i,models:a,structures:s})):this.state.notified=!1}updateCurrent(r,n){let o=this.current,i=n==="add"?_r.union(this.seletionSet,new Set(r.map(u=>u.cell.transform.ref))):_r.difference(this.seletionSet,new Set(r.map(u=>u.cell.transform.ref))),a=[],s=[],c=[];for(let u of o.trajectories)i.has(u.cell.transform.ref)&&a.push(u);for(let u of o.models)i.has(u.cell.transform.ref)&&s.push(u);for(let u of o.structures)i.has(u.cell.transform.ref)&&c.push(u);this._currentComponentGroups=void 0,this._currentSelectionSet=void 0,this.state.selection.trajectories=a,this.state.selection.models=s,this.state.selection.structures=c,this.behaviors.selection.next({hierarchy:o,trajectories:a,models:s,structures:c})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)lr(this.dataState,i.cell.transform.ref,o)}applyPreset(r,n,o){return this.plugin.dataTransaction(async()=>{for(let i of r)i.models.length>0&&await this.clearTrajectory(i),await this.plugin.builders.structure.hierarchy.applyPreset(i.cell,n,o)})}async updateStructure(r,n){await this.plugin.dataTransaction(async()=>{let o=Ms.getDecoratorRoot(this.dataState.tree,r.cell.transform.ref),i=this.dataState.tree.children.get(o).toArray();await this.remove(i,!1),await this.plugin.state.updateTransform(this.plugin.state.data,r.cell.transform.ref,n,"Structure Type"),await this.plugin.builders.structure.representation.applyPreset(r.cell.transform.ref,this.plugin.config.get(Le.Structure.DefaultRepresentationPreset)??"")},{canUndo:"Structure Type"}),be.Camera.Reset(this.plugin)}clearTrajectory(r){let n=this.dataState.build();for(let o of r.models)n.delete(o.cell);return n.commit()}};(r=>{function e(n){if(!n.length)return[];if(n.length===1)return n[0].components.map(a=>[a]);let o=[],i=new Map;for(let a of n)for(let s of a.components){let c=s.key;if(!c)continue;let u=i.get(c);u||(u=[],i.set(c,u),o.push(u)),u.push(s)}return o}r.getComponentGroups=e;function t(n){let{structures:o}=n.managers.structure.hierarchy.selection;if(o.length===0)return"";if(o.length===1){let c=o[0],u=c.cell.obj?.data;if(!u)return c.cell.obj?.label||"Structure";let l=u.models[0]||u.representativeModel||u.masterModel;if(!l)return c.cell.obj?.label||"Structure";let d=l.entryId;return c.model?.trajectory?.models&&c.model.trajectory.models.length===1?d:c.model?`${c.model.cell.obj?.label} | ${d}`:d}let a=o[0]?.model?.trajectory,s=!0;for(let c of o)if(c?.model?.trajectory!==a){s=!1;break}return s&&a?`${a.cell.obj?.label} | ${o.length} structures`:`${o.length} structures`}r.getSelectedStructuresDescription=t})(un||={});var vm=ne.BuiltIn({name:"create-group",display:{name:"Group"},from:[],to:S.Group,params:{label:p.Text("Group"),description:p.Optional(p.Text(""))}})({apply({params:e}){return new S.Group({},e)},update({oldParams:e,newParams:t,b:r}){return Rs(e,t)?_.UpdateResult.Unchanged:(r.label=t.label,r.description=t.description,_.UpdateResult.Updated)}});var ns={customText:p.Text("",{label:"Text",description:"Override the label with custom value.",isEssential:!0}),textColor:p.Color(Ie.black,{isEssential:!0}),textSize:p.Numeric(.5,{min:.1,max:10,step:.1},{isEssential:!0})},Tr={...qt.Params,...ns,borderWidth:p.Numeric(.2,{min:0,max:.5,step:.01})};var Sm={unitLabel:p.Text("\u212B",{isEssential:!0})},_b={...st.Params,...Sm,lineSizeAttenuation:p.Boolean(!0),linesColor:p.Color(Ie.lightgreen,{isEssential:!0}),linesSize:p.Numeric(.075,{min:.01,max:5,step:.01}),dashLength:p.Numeric(.2,{min:.01,max:.2,step:.01})},Eb={...Tr,...Sm},Tm={lines:(e,t)=>De(Lb,st.Utils,{modifyState:r=>({...r,markerActions:ht.Highlighting})}),text:(e,t)=>De(Ob,qt.Utils,{modifyState:r=>({...r,markerActions:0})})},yi={..._b,...Eb,visuals:p.MultiSelect(["lines","text"],p.objectToOptions(Tm))};function Ab(){return{sphereA:_e(),sphereB:_e(),center:x(),distance:0}}function Cm(e,t){let{sphereA:r,sphereB:n,center:o}=t,[i,a]=e.loci;return $.getBoundingSphere(i,r),$.getBoundingSphere(a,n),x.add(o,r.center,n.center),x.scale(o,o,.5),t.distance=x.distance(r.center,n.center),t}var Mn=Ab();function Rm(e,t){return e.pairs.length===1?`Distance ${xo(e.pairs[0],{unitLabel:t,measureOnly:!0})}`:`${e.pairs.length} Distances`}function wb(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.pairs.length;o<i;++o)Cm(e.pairs[o],Mn),n.addFixedLengthDashes(Mn.sphereA.center,Mn.sphereB.center,t.dashLength,o);return n.getLines()}function Lb(e,t,r,n){let o=wb(t,r,n&&n.geometry),i=Rm(t,r.unitLabel);return Pe(i,t,o,()=>r.linesColor,()=>r.linesSize,s=>xo(t.pairs[s],r))}function Ib(e,t,r){let n=pr.create(t,128,64,r);for(let o=0,i=e.pairs.length;o<i;++o){Cm(e.pairs[o],Mn);let{center:a,distance:s,sphereA:c,sphereB:u}=Mn,l=t.customText||`${s.toFixed(2)} ${t.unitLabel}`,m=Math.max(2,c.radius,u.radius)/2;n.add(l,a[0],a[1],a[2],1,m,o)}return n.getText()}function Ob(e,t,r,n){let o=Ib(t,r,n&&n.geometry),i=Rm(t,r.unitLabel);return Pe(i,t,o,()=>r.textColor,()=>r.textSize,s=>xo(t.pairs[s],r))}function os(e,t){return xe.createMulti("Distance",e,t,xe.StateBuilder,Tm)}var Fb={radius:1,segments:36,thetaStart:0,thetaLength:Math.PI*2};function ln(e){let{radius:t,segments:r,thetaStart:n,thetaLength:o}={...Fb,...e},i=o===Math.PI*2,a=i?r+1:r+2,s=new Float32Array(a*3),c=new Float32Array(a*3),u=new Uint32Array(r*3);s[0]=0,s[1]=0,s[2]=0,c[0]=0,c[1]=1,c[2]=0;for(let l=0,d=3;l<r;++l,d+=3){let m=n+l/r*o;s[d]=t*Math.sin(m),s[d+1]=0,s[d+2]=t*Math.cos(m),c[d]=0,c[d+1]=1,c[d+2]=0}for(let l=1,d=0;l<r;++l,d+=3)u[d]=l,u[d+1]=l+1,u[d+2]=0;if(i){let l=(r-1)*3;u[l]=r,u[l+1]=1,u[l+2]=0}else{let l=n+o,d=(r+1)*3;s[d]=t*Math.sin(l),s[d+1]=0,s[d+2]=t*Math.cos(l),c[d]=0,c[d+1]=1,c[d+2]=0;let m=(r-1)*3;u[m]=r,u[m+1]=r+1,u[m+2]=0}return{vertices:s,normals:c,indices:u}}var Pm={color:p.Color(Ie.lightgreen),arcScale:p.Numeric(.7,{min:.01,max:1,step:.01})},Dm={...st.Params,...Pm,lineSizeAttenuation:p.Boolean(!0),linesSize:p.Numeric(.04,{min:.01,max:5,step:.01}),dashLength:p.Numeric(.04,{min:.01,max:.2,step:.01})},Mb={...Dm},Bb={...Dm},Vb={...Me.Params,...Pm,ignoreLight:p.Boolean(!0),sectorOpacity:p.Numeric(.75,{min:0,max:1,step:.01})},_m={vectors:(e,t)=>De(Ub,st.Utils,{modifyState:r=>({...r,pickable:!1})}),arc:(e,t)=>De(Nb,st.Utils,{modifyState:r=>({...r,pickable:!1})}),sector:(e,t)=>De(Wb,Me.Utils,{modifyProps:r=>({...r,alpha:r.sectorOpacity}),modifyState:r=>({...r,markerActions:ht.Highlighting})}),text:(e,t)=>De($b,qt.Utils,{modifyState:r=>({...r,markerActions:0})})},bi={...Mb,...Bb,...Vb,...Tr,visuals:p.MultiSelect(["vectors","sector","text"],p.objectToOptions(_m))};function kb(){return{sphereA:_e(),sphereB:_e(),sphereC:_e(),arcDirA:x(),arcDirC:x(),arcNormal:x(),radius:0,angle:0}}var Cr=x(),Bn=oe();function xi(e,t,r){let{sphereA:n,sphereB:o,sphereC:i}=t,{arcDirA:a,arcDirC:s,arcNormal:c}=t,[u,l,d]=e.loci;$.getBoundingSphere(u,n),$.getBoundingSphere(l,o),$.getBoundingSphere(d,i),x.sub(a,n.center,o.center),x.sub(s,i.center,o.center),x.cross(c,a,s);let f=Math.min(x.magnitude(a),x.magnitude(s))*r;return t.radius=f,t.angle=x.angle(a,s),t}function Em(e,t){let{radius:r,angle:n}=e,o=t?jn(n,r)/t:32;oe.targetTo(Bn,e.sphereB.center,e.sphereA.center,e.arcNormal),oe.setTranslation(Bn,e.sphereB.center),oe.mul(Bn,Bn,oe.rotY180);let i=ln({radius:r,thetaLength:n,segments:o});return to(i,Bn)}var Ge=kb();function vi(e){return e.triples.length===1?`Angle ${vo(e.triples[0],{measureOnly:!0})}`:`${e.triples.length} Angles`}function Gb(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.triples.length;o<i;++o)xi(e.triples[o],Ge,t.arcScale),n.addFixedLengthDashes(Ge.sphereB.center,Ge.sphereA.center,t.dashLength,o),n.addFixedLengthDashes(Ge.sphereB.center,Ge.sphereC.center,t.dashLength,o);return n.getLines()}function Ub(e,t,r,n){let o=Gb(t,r,n&&n.geometry),i=vi(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function zb(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.triples.length;o<i;++o){xi(e.triples[o],Ge,t.arcScale);let a=Em(Ge,t.dashLength),{indices:s,vertices:c}=a;for(let u=0,l=s.length;u<l;u+=3){if(u%2===1)continue;let d=s[u]*3,m=s[u+1]*3,f=c[d],h=c[d+1],g=c[d+2],T=c[m],b=c[m+1],D=c[m+2];n.add(f,h,g,T,b,D,o)}}return n.getLines()}function Nb(e,t,r,n){let o=zb(t,r,n&&n.geometry),i=vi(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function jb(e,t,r){let n=de.createState(128,64,r);for(let o=0,i=e.triples.length;o<i;++o){xi(e.triples[o],Ge,t.arcScale);let a=Em(Ge);n.currentGroup=o,de.addPrimitive(n,oe.id,a),de.addPrimitiveFlipped(n,oe.id,a)}return de.getMesh(n)}function Wb(e,t,r,n){let o=jb(t,r,n&&n.geometry),i=vi(t);return Pe(i,t,o,()=>r.color,()=>1,s=>vo(t.triples[s]))}function Hb(e,t,r){let n=pr.create(t,128,64,r);for(let o=0,i=e.triples.length;o<i;++o){xi(e.triples[o],Ge,t.arcScale),x.add(Cr,Ge.arcDirA,Ge.arcDirC),x.setMagnitude(Cr,Cr,Ge.radius),x.add(Cr,Ge.sphereB.center,Cr);let a=Nn(Ge.angle).toFixed(2),s=t.customText||`${a}\xB0`,u=Math.max(2,Ge.sphereA.radius,Ge.sphereB.radius,Ge.sphereC.radius)/2;n.add(s,Cr[0],Cr[1],Cr[2],.1,u,o)}return n.getText()}function $b(e,t,r,n){let o=Hb(t,r,n&&n.geometry),i=vi(t);return Pe(i,t,o,()=>r.textColor,()=>r.textSize,s=>vo(t.triples[s]))}function is(e,t){return xe.createMulti("Angle",e,t,xe.StateBuilder,_m)}var Am={color:p.Color(Ie.lightgreen),arcScale:p.Numeric(.7,{min:.01,max:1,step:.01})},Si={...st.Params,...Am,lineSizeAttenuation:p.Boolean(!0),linesSize:p.Numeric(.04,{min:.01,max:5,step:.01}),dashLength:p.Numeric(.04,{min:.01,max:.2,step:.01})},qb={...Si},Xb={...Si},Zb={...Si},Qb={...Si},Yb={...Me.Params,...Am,ignoreLight:p.Boolean(!0),sectorOpacity:p.Numeric(.75,{min:0,max:1,step:.01})},wm={vectors:(e,t)=>De(ex,st.Utils,{modifyState:r=>({...r,pickable:!1})}),extenders:(e,t)=>De(ax,st.Utils,{modifyState:r=>({...r,pickable:!1})}),connector:(e,t)=>De(rx,st.Utils,{modifyState:r=>({...r,pickable:!1})}),arms:(e,t)=>De(ox,st.Utils,{modifyState:r=>({...r,pickable:!1})}),arc:(e,t)=>De(cx,st.Utils,{modifyState:r=>({...r,pickable:!1})}),sector:(e,t)=>De(lx,Me.Utils,{modifyProps:r=>({...r,alpha:r.sectorOpacity}),modifyState:r=>({...r,markerActions:ht.Highlighting})}),text:(e,t)=>De(px,qt.Utils,{modifyState:r=>({...r,markerActions:0})})},Ti={...qb,...Xb,...Zb,...Qb,...Yb,...Tr,visuals:p.MultiSelect(["extenders","arms","sector","text"],p.objectToOptions(wm))};function Kb(){return{sphereA:_e(),sphereB:_e(),sphereC:_e(),sphereD:_e(),dirBA:x(),dirCD:x(),projA:x(),projD:x(),arcPointA:x(),arcPointD:x(),arcDirA:x(),arcDirD:x(),arcCenter:x(),arcNormal:x(),radius:0,angle:0}}var Ze=x(),Vn=oe();function Mr(e,t,r){let{sphereA:n,sphereB:o,sphereC:i,sphereD:a,dirBA:s,dirCD:c,projA:u,projD:l}=t,{arcPointA:d,arcPointD:m,arcDirA:f,arcDirD:h,arcCenter:g,arcNormal:T}=t,[b,D,P,F]=e.loci;$.getBoundingSphere(b,n),$.getBoundingSphere(D,o),$.getBoundingSphere(P,i),$.getBoundingSphere(F,a),x.add(g,o.center,i.center),x.scale(g,g,.5),x.sub(s,n.center,o.center),x.sub(c,a.center,i.center),x.add(d,g,s),x.add(m,g,c),x.sub(T,i.center,o.center),x.orthogonalize(f,T,s),x.orthogonalize(h,T,c),x.projectPointOnVector(u,d,f,g),x.projectPointOnVector(l,m,h,g);let V=Math.min(x.distance(u,g),x.distance(l,g))*r;x.setMagnitude(f,f,V),x.setMagnitude(h,h,V),x.add(d,g,f),x.add(m,g,h),t.radius=V,t.angle=x.dihedralAngle(n.center,o.center,i.center,a.center),x.matchDirection(Ze,T,x.sub(Ze,d,n.center));let W=x.angle(s,Ze),K=V/Math.cos(W-Ki);x.add(u,o.center,x.setMagnitude(Ze,s,K)),x.matchDirection(Ze,T,x.sub(Ze,m,a.center));let ae=x.angle(c,Ze),ge=V/Math.cos(ae-Ki);return x.add(l,i.center,x.setMagnitude(Ze,c,ge)),t}function Lm(e,t){let{radius:r,angle:n}=e,o=t?jn(n,r)/t:32;oe.targetTo(Vn,e.arcCenter,n<0?e.arcPointD:e.arcPointA,e.arcNormal),oe.setTranslation(Vn,e.arcCenter),oe.mul(Vn,Vn,oe.rotY180);let i=ln({radius:r,thetaLength:Math.abs(n),segments:o});return to(i,Vn)}var fe=Kb();function Br(e){return e.quads.length===1?`Dihedral ${So(e.quads[0],{measureOnly:!0})}`:`${e.quads.length} Dihedrals`}function Jb(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Mr(e.quads[o],fe,t.arcScale),n.addFixedLengthDashes(fe.arcCenter,fe.arcPointA,t.dashLength,o),n.addFixedLengthDashes(fe.arcCenter,fe.arcPointD,t.dashLength,o);return n.getLines()}function ex(e,t,r,n){let o=Jb(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function tx(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Mr(e.quads[o],fe,t.arcScale),n.addFixedLengthDashes(fe.sphereB.center,fe.sphereC.center,t.dashLength,o);return n.getLines()}function rx(e,t,r,n){let o=tx(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function nx(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Mr(e.quads[o],fe,t.arcScale),n.addFixedLengthDashes(fe.sphereB.center,fe.sphereA.center,t.dashLength,o),n.addFixedLengthDashes(fe.sphereC.center,fe.sphereD.center,t.dashLength,o);return n.getLines()}function ox(e,t,r,n){let o=nx(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function ix(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o)Mr(e.quads[o],fe,t.arcScale),n.addFixedLengthDashes(fe.arcPointA,fe.projA,t.dashLength,o),n.addFixedLengthDashes(fe.arcPointD,fe.projD,t.dashLength,o);return n.getLines()}function ax(e,t,r,n){let o=ix(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function sx(e,t,r){let n=Vt.create(128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Mr(e.quads[o],fe,t.arcScale);let a=Lm(fe,t.dashLength),{indices:s,vertices:c}=a;for(let u=0,l=s.length;u<l;u+=3){if(u%2===1)continue;let d=s[u]*3,m=s[u+1]*3,f=c[d],h=c[d+1],g=c[d+2],T=c[m],b=c[m+1],D=c[m+2];n.add(f,h,g,T,b,D,o)}}return n.getLines()}function cx(e,t,r,n){let o=sx(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>r.linesSize,()=>"")}function ux(e,t,r){let n=de.createState(128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Mr(e.quads[o],fe,t.arcScale);let a=Lm(fe);n.currentGroup=o,de.addPrimitive(n,oe.id,a),de.addPrimitiveFlipped(n,oe.id,a)}return de.getMesh(n)}function lx(e,t,r,n){let o=ux(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.color,()=>1,s=>So(t.quads[s]))}function dx(e,t,r){let n=pr.create(t,128,64,r);for(let o=0,i=e.quads.length;o<i;++o){Mr(e.quads[o],fe,t.arcScale),x.add(Ze,fe.arcDirA,fe.arcDirD),x.setMagnitude(Ze,Ze,fe.radius),x.add(Ze,fe.arcCenter,Ze);let a=Nn(fe.angle).toFixed(2);a==="-0.00"&&(a="0.00");let s=t.customText||`${a}\xB0`,u=Math.max(2,fe.sphereA.radius,fe.sphereB.radius,fe.sphereC.radius,fe.sphereD.radius)/2;n.add(s,Ze[0],Ze[1],Ze[2],.1,u,o)}return n.getText()}function px(e,t,r,n){let o=dx(t,r,n&&n.geometry),i=Br(t);return Pe(i,t,o,()=>r.textColor,()=>r.textSize,s=>So(t.quads[s]))}function as(e,t){return xe.createMulti("Dihedral",e,t,xe.StateBuilder,wm)}var mx={...Tr},Im={text:(e,t)=>De(yx,qt.Utils)},Ci={...mx,scaleByRadius:p.Boolean(!0),visuals:p.MultiSelect(["text"],p.objectToOptions(Im)),snapshotKey:p.Text("",{isEssential:!0,disableInteractiveUpdates:!0,description:"Activate the snapshot with the provided key when clicking on the label"}),tooltip:p.Text("",{isEssential:!0,multiline:!0,disableInteractiveUpdates:!0,placeholder:"Tooltip",description:"Tooltip text to be displayed when hovering over the label"})},fx=_e();function ss(e,t=!1){return e.label||bo(e.loci,{hidePrefix:!0,htmlStyling:!1,condensed:t})}function hx(e){return e.infos.length===1?ss(e.infos[0]):`${e.infos.length} Labels`}function gx(e,t,r){let n=pr.create(t,128,64,r),o=t.customText.trim();for(let i=0,a=e.infos.length;i<a;++i){let s=e.infos[i],c=$.getBoundingSphere(s.loci,fx);if(!c)continue;let{center:u,radius:l}=c,d=o||ss(s,!0);n.add(d,u[0],u[1],u[2],t.scaleByRadius?l/.9:0,t.scaleByRadius?Math.max(1,l):1,i)}return n.getText()}function yx(e,t,r,n){let o=gx(t,r,n&&n.geometry),i=hx(t),a=r.tooltip?.trim()??"",s=r.customText.trim(),c;return a?c=u=>a:s?c=u=>s:c=u=>ss(t.infos[u]),Pe(i,t,o,()=>r.textColor,()=>r.textSize,c)}function cs(e,t){return xe.createMulti("Label",e,t,xe.StateBuilder,Im)}var Vr=x(),bx=oe.identity(),kr=new Float32Array(18),xx=new Uint8Array([0,1,2,3,4,5]);function Om(e,t,r,n,o){let{origin:i,dirA:a,dirB:s,dirC:c}=t;x.add(Vr,i,a),x.toArray(x.add(Vr,i,a),kr,0),x.toArray(x.sub(Vr,i,a),kr,3),x.toArray(x.add(Vr,i,s),kr,6),x.toArray(x.sub(Vr,i,s),kr,9),x.toArray(x.add(Vr,i,c),kr,12),x.toArray(x.sub(Vr,i,c),kr,15);let u=ro(kr,xx),l=Wt.volume(t),d=Math.cbrt(l)/300*r;de.addCage(e,bx,u,d,n,o)}var pV=x.zero(),mV=x.zero();var Rr=x(),vx=x(),Sx=x(),Tx=x(),Cx=oe.identity(),Fm=new Float32Array(24),Rx=new Uint8Array([0,1,0,3,0,6,1,2,1,7,2,3,2,4,3,5,4,5,4,7,5,6,6,7]);function Mm(e,t,r,n,o){let{origin:i,dirA:a,dirB:s,dirC:c}=t,u=x.negate(vx,a),l=x.negate(Sx,s),d=x.negate(Tx,c),m=0,f=function(b,D,P){x.copy(Rr,i),x.add(Rr,Rr,b),x.add(Rr,Rr,D),x.add(Rr,Rr,P),x.toArray(Rr,Fm,m),m+=3};f(a,s,c),f(a,s,d),f(a,l,d),f(a,l,c),f(u,l,d),f(u,l,c),f(u,s,c),f(u,s,d);let h=ro(Fm,Rx),g=Wt.volume(t),T=Math.cbrt(g)/300*r;de.addCage(e,Cx,h,T,n,o)}var Px=oe.identity(),Bm=x();function Dx(e,t,r,n,o){return x.add(Bm,t,r),oe.targetTo(e,t,Bm,n),oe.setTranslation(e,t),oe.scale(e,e,o)}function Vm(e,t,r,n,o,i){de.addPrimitive(e,Dx(Px,t,r,n,o),Dc(i))}var us={color:p.Color(Ie.orange),scaleFactor:p.Numeric(1,{min:.1,max:10,step:.1}),radiusScale:p.Numeric(2,{min:.1,max:10,step:.1})},_x={...Me.Params,...us},Ex={...Me.Params,...us},Ax={...Me.Params,...us},km={axes:(e,t)=>De(Ix,Me.Utils),box:(e,t)=>De(Mx,Me.Utils),ellipsoid:(e,t)=>De(kx,Me.Utils)},Ri={..._x,...Ex,...Ax,visuals:p.MultiSelect(["box"],p.objectToOptions(km))};function wx(e){return`Principal Axes of ${$r(e,{countsOnly:!0})}`}function Lx(e,t,r){let n=de.createState(256,128,r),o=R.Loci.getPrincipalAxesMany(e.locis);return Wt.scale(o.momentsAxes,o.momentsAxes,t.scaleFactor),n.currentGroup=0,Om(n,o.momentsAxes,t.radiusScale,2,20),de.getMesh(n)}function Ix(e,t,r,n){let o=Lx(t,r,n&&n.geometry),i=wx(t.locis);return Pe(i,t,o,()=>r.color,()=>1,()=>i)}function Ox(e){return`Oriented Box of ${$r(e,{countsOnly:!0})}`}function Fx(e,t,r){let n=de.createState(256,128,r),o=R.Loci.getPrincipalAxesMany(e.locis);return Wt.scale(o.boxAxes,o.boxAxes,t.scaleFactor),n.currentGroup=0,Mm(n,o.boxAxes,t.radiusScale,2,20),de.getMesh(n)}function Mx(e,t,r,n){let o=Fx(t,r,n&&n.geometry),i=Ox(t.locis);return Pe(i,t,o,()=>r.color,()=>1,()=>i)}function Bx(e){return`Oriented Ellipsoid of ${$r(e,{countsOnly:!0})}`}function Vx(e,t,r){let n=de.createState(256,128,r),i=R.Loci.getPrincipalAxesMany(e.locis).boxAxes,{origin:a,dirA:s,dirB:c}=i,u=Wt.size(x(),i);x.scale(u,u,.5*t.scaleFactor);let l=x.create(u[2],u[1],u[0]);return n.currentGroup=0,Vm(n,a,s,c,l,2),de.getMesh(n)}function kx(e,t,r,n){let o=Vx(t,r,n&&n.geometry),i=Bx(t.locis);return Pe(i,t,o,()=>r.color,()=>1,()=>i)}function ls(e,t){let r=xe.createMulti("Orientation",e,t,xe.StateBuilder,km);return r.setState({markerActions:ht.Highlighting}),r}var Gm={vertices:new Float32Array([-.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),normals:new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),indices:new Uint32Array([0,2,1,1,2,3])},FV={vertices:Gm.vertices,edges:new Uint32Array([0,1,2,3,3,1,2,0])};function Um(){return Gm}var Gx={...Me.Params,color:p.Color(Ie.orange),scaleFactor:p.Numeric(1,{min:.1,max:10,step:.1}),variant:p.Select("rectangle",p.arrayToOptions(["rectangle","circle"]),{label:"Shape"}),radialSegments:p.Numeric(64,{min:12,max:256,step:1},{hideIf:e=>e.variant!=="circle"})},zm={plane:(e,t)=>De(Nx,Me.Utils)},Pi={...Gx,visuals:p.MultiSelect(["plane"],p.objectToOptions(zm))};function Ux(e){return`Best Fit Plane of ${$r(e,{countsOnly:!0})}`}var nt=oe(),ds=x();function zx(e,t,r){let n=de.createState(256,128,r),i=R.Loci.getPrincipalAxesMany(e.locis).boxAxes;if(x.add(ds,i.origin,i.dirC),oe.targetTo(nt,ds,i.origin,i.dirB),n.currentGroup=0,t.variant==="circle"){oe.mul(nt,nt,oe.rotX90),oe.scaleUniformly(nt,nt,t.scaleFactor),oe.setTranslation(nt,i.origin);let a=Math.max(x.magnitude(i.dirA),x.magnitude(i.dirB)),s=ln({radius:a,segments:t.radialSegments});de.addPrimitive(n,nt,s),de.addPrimitiveFlipped(n,nt,s)}else{let a=Um();oe.scale(nt,nt,Wt.size(ds,i)),oe.scaleUniformly(nt,nt,t.scaleFactor),oe.setTranslation(nt,i.origin),de.addPrimitive(n,nt,a),de.addPrimitiveFlipped(n,nt,a)}return de.getMesh(n)}function Nx(e,t,r,n){let o=zx(t,r,n&&n.geometry),i=Ux(t.locis);return Pe(i,t,o,()=>r.color,()=>1,()=>i)}function ps(e,t){let r=xe.createMulti("Plane",e,t,xe.StateBuilder,zm);return r.setState({markerActions:ht.Highlighting}),r}var Di=ne.BuiltIn({name:"structure-selections-distance-3d",display:"3D Distance",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...yi})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Distance",async n=>{let o=Nm(e.data),i=os({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>yi);return await i.createOrUpdate(t,o).runInContext(n),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Distance"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Distance",async i=>{let a={...t.data.repr.props,...n},s=Nm(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,_.UpdateResult.Updated})}});var _i=ne.BuiltIn({name:"structure-selections-angle-3d",display:"3D Angle",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...bi})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Angle",async n=>{let o=jm(e.data),i=is({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>bi);return await i.createOrUpdate(t,o).runInContext(n),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Angle"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Angle",async i=>{let a={...t.data.repr.props,...n},s=jm(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,_.UpdateResult.Updated})}});var Ei=ne.BuiltIn({name:"structure-selections-dihedral-3d",display:"3D Dihedral",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...Ti})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Dihedral",async n=>{let o=Wm(e.data),i=as({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Ti);return await i.createOrUpdate(t,o).runInContext(n),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Dihedral"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Dihedral",async i=>{let a={...t.data.repr.props,...n},s=Wm(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,_.UpdateResult.Updated})}});var kn=ne.BuiltIn({name:"structure-selections-label-3d",display:"3D Label",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...Ci})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Label",async n=>{let o=Hm(e.data),i=cs({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Ci);await i.createOrUpdate(t,o).runInContext(n);let a=!!(t.snapshotKey?.trim()||t.tooltip?.trim());return i.setState({pickable:a,markerActions:a?ht.Highlighting:0}),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Label"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Label",async i=>{let a={...t.data.repr.props,...n},s=Hm(e.data);await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s;let c=!!(n.snapshotKey?.trim()||n.tooltip?.trim());return t.data.repr.setState({pickable:c,markerActions:c?ht.Highlighting:0}),_.UpdateResult.Updated})}});var Ai=ne.BuiltIn({name:"structure-selections-orientation-3d",display:"3D Orientation",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...Ri})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Orientation",async n=>{let o=$m(e.data),i=ls({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Ri);return await i.createOrUpdate(t,o).runInContext(n),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Orientation"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Orientation",async i=>{let a={...t.data.repr.props,...n},s=$m(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,_.UpdateResult.Updated})}});var wi=ne.BuiltIn({name:"structure-selections-plane-3d",display:"3D Plane",from:S.Molecule.Structure.Selections,to:S.Shape.Representation3D,params:()=>({...Pi})})({canAutoUpdate({oldParams:e,newParams:t}){return!0},apply({a:e,params:t},r){return Q.create("Structure Plane",async n=>{let o=qm(e.data),i=ps({graphics:r.canvas3d?.graphics,...r.representation.structure.themes},()=>Pi);return await i.createOrUpdate(t,o).runInContext(n),new S.Shape.Representation3D({repr:i,sourceData:o},{label:"Plane"})})},update({a:e,b:t,oldParams:r,newParams:n},o){return Q.create("Structure Plane",async i=>{let a={...t.data.repr.props,...n},s=qm(e.data);return await t.data.repr.createOrUpdate(a,s).runInContext(i),t.data.sourceData=s,_.UpdateResult.Updated})}});function Nm(e){let t=e[0].loci,r=e[1].loci;return{pairs:[{loci:[t,r]}]}}function jm(e){let t=e[0].loci,r=e[1].loci,n=e[2].loci;return{triples:[{loci:[t,r,n]}]}}function Wm(e){let t=e[0].loci,r=e[1].loci,n=e[2].loci,o=e[3].loci;return{quads:[{loci:[t,r,n,o]}]}}function Hm(e){return{infos:[{loci:e[0].loci}]}}function $m(e){return{locis:e.map(t=>t.loci)}}function qm(e){return{locis:e.map(t=>t.loci)}}tt(Di,(e,t)=>sr(r=>os(r,()=>yi),e,t));tt(_i,(e,t)=>sr(r=>is(r,()=>bi),e,t));tt(Ei,(e,t)=>sr(r=>as(r,()=>Ti),e,t));tt(kn,(e,t)=>sr(r=>cs(r,()=>Ci),e,t));tt(Ai,(e,t)=>sr(r=>ls(r,()=>Ri),e,t));tt(wi,(e,t)=>sr(r=>ps(r,()=>Pi),e,t));var ms="measurement-group",Li="measurement-order-label",jx={distanceUnitLabel:p.Text("\u212B",{isEssential:!0}),textColor:ns.textColor},Wx=p.getDefaultValues(jx);function bt(e){return{bundle:R.Bundle.fromLoci(e)}}var Ii=class extends He{constructor(r){super({labels:[],distances:[],angles:[],dihedrals:[],orientations:[],planes:[],options:Wx});this.plugin=r;this.behaviors={state:this.ev.behavior(this.state)};this._empty=[];r.state.data.events.changed.subscribe(n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync()}),r.behaviors.state.isAnimating.subscribe(n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync()})}stateUpdated(){this.behaviors.state.next(this.state)}getGroup(){let r=this.plugin.state.data,n=Ce.findTagInSubtree(r.tree,bn.RootRef,ms),o=this.plugin.state.data.build();return n?o.to(n):o.toRoot().group(vm,{label:"Measurements"},{tags:ms})}async setOptions(r){this.updateState({options:r})&&this.stateUpdated();let n=this.plugin.state.data.build();for(let o of this.state.distances)n.to(o).update(i=>{i.unitLabel=r.distanceUnitLabel,i.textColor=r.textColor});for(let o of this.state.labels)n.to(o).update(i=>{i.textColor=r.textColor});for(let o of this.state.angles)n.to(o).update(i=>{i.textColor=r.textColor});for(let o of this.state.dihedrals)n.to(o).update(i=>{i.textColor=r.textColor});n.editInfo.count!==0&&await be.State.Update(this.plugin,{state:this.plugin.state.data,tree:n,options:{doNotLogTiming:!0}})}async addDistance(r,n,o){let i=this.plugin.helpers.substructureParent.get(r.structure),a=this.plugin.helpers.substructureParent.get(n.structure);if(!i||!a)return;let s=[i.transform.ref];rr(s,a.transform.ref);let u=this.getGroup().apply(Sr,{selections:[{key:"a",groupId:"a",ref:i.transform.ref,...bt(r)},{key:"b",groupId:"b",ref:a.transform.ref,...bt(n)}],isTransitive:!0,label:"Distance"},{dependsOn:s,tags:o?.selectionTags}),l=u.apply(Di,{customText:o?.customText||"",unitLabel:this.state.options.distanceUnitLabel,textColor:this.state.options.textColor,...o?.lineParams,...o?.labelParams,...o?.visualParams},{tags:o?.reprTags}),d=this.plugin.state.data;return await be.State.Update(this.plugin,{state:d,tree:l,options:{doNotLogTiming:!0}}),{selection:u.selector,representation:l.selector}}async addAngle(r,n,o,i){let a=this.plugin.helpers.substructureParent.get(r.structure),s=this.plugin.helpers.substructureParent.get(n.structure),c=this.plugin.helpers.substructureParent.get(o.structure);if(!a||!s||!c)return;let u=[a.transform.ref];rr(u,s.transform.ref),rr(u,c.transform.ref);let d=this.getGroup().apply(Sr,{selections:[{key:"a",ref:a.transform.ref,...bt(r)},{key:"b",ref:s.transform.ref,...bt(n)},{key:"c",ref:c.transform.ref,...bt(o)}],isTransitive:!0,label:"Angle"},{dependsOn:u,tags:i?.selectionTags}),m=d.apply(_i,{customText:i?.customText||"",textColor:this.state.options.textColor,...i?.lineParams,...i?.labelParams,...i?.visualParams},{tags:i?.reprTags}),f=this.plugin.state.data;return await be.State.Update(this.plugin,{state:f,tree:m,options:{doNotLogTiming:!0}}),{selection:d.selector,representation:m.selector}}async addDihedral(r,n,o,i,a){let s=this.plugin.helpers.substructureParent.get(r.structure),c=this.plugin.helpers.substructureParent.get(n.structure),u=this.plugin.helpers.substructureParent.get(o.structure),l=this.plugin.helpers.substructureParent.get(i.structure);if(!s||!c||!u||!l)return;let d=[s.transform.ref];rr(d,c.transform.ref),rr(d,u.transform.ref),rr(d,l.transform.ref);let f=this.getGroup().apply(Sr,{selections:[{key:"a",ref:s.transform.ref,...bt(r)},{key:"b",ref:c.transform.ref,...bt(n)},{key:"c",ref:u.transform.ref,...bt(o)},{key:"d",ref:l.transform.ref,...bt(i)}],isTransitive:!0,label:"Dihedral"},{dependsOn:d,tags:a?.selectionTags}),h=f.apply(Ei,{customText:a?.customText||"",textColor:this.state.options.textColor,...a?.lineParams,...a?.labelParams,...a?.visualParams},{tags:a?.reprTags}),g=this.plugin.state.data;return await be.State.Update(this.plugin,{state:g,tree:h,options:{doNotLogTiming:!0}}),{selection:f.selector,representation:h.selector}}async addLabel(r,n){let o=this.plugin.helpers.substructureParent.get(r.structure);if(!o)return;let i=[o.transform.ref],s=this.getGroup().apply(Sr,{selections:[{key:"a",ref:o.transform.ref,...bt(r)}],isTransitive:!0,label:"Label"},{dependsOn:i,tags:n?.selectionTags}),c=s.apply(kn,{textColor:this.state.options.textColor,...n?.labelParams,...n?.visualParams},{tags:n?.reprTags}),u=this.plugin.state.data;return await be.State.Update(this.plugin,{state:u,tree:c,options:{doNotLogTiming:!0}}),{selection:s.selector,representation:c.selector}}async addOrientation(r){let n=[],o=[];for(let u=0,l=r.length;u<l;++u){let d=r[u],m=this.plugin.helpers.substructureParent.get(d.structure);m&&(rr(o,m.transform.ref),n.push({key:`l${u}`,ref:m.transform.ref,...bt(d)}))}if(n.length===0)return;let a=this.getGroup().apply(Sr,{selections:n,isTransitive:!0,label:"Orientation"},{dependsOn:o}),s=a.apply(Ai),c=this.plugin.state.data;return await be.State.Update(this.plugin,{state:c,tree:s,options:{doNotLogTiming:!0}}),{selection:a.selector,representation:s.selector}}async addPlane(r){let n=[],o=[];for(let u=0,l=r.length;u<l;++u){let d=r[u],m=this.plugin.helpers.substructureParent.get(d.structure);m&&(rr(o,m.transform.ref),n.push({key:`l${u}`,ref:m.transform.ref,...bt(d)}))}if(n.length===0)return;let i=this.getGroup(),a=i.apply(Sr,{selections:n,isTransitive:!0,label:"Plane"},{dependsOn:o}),s=a.apply(wi),c=this.plugin.state.data;return await be.State.Update(this.plugin,{state:c,tree:i,options:{doNotLogTiming:!0}}),{selection:a.selector,representation:s.selector}}async addOrderLabels(r){let n=this.getGroup(),o=this.plugin.state.data.select(Ce.Generators.ofType(S.Molecule.Structure.Selections).withTag(Li));for(let s of o)n.delete(s);let i=1;for(let s of r){let c=this.plugin.helpers.substructureParent.get(s.structure);if(!c)continue;let u=[c.transform.ref];n.apply(Sr,{selections:[{key:"a",ref:c.transform.ref,...bt(s)}],isTransitive:!0,label:"Order"},{dependsOn:u,tags:Li}).apply(kn,{textColor:Bt.fromRgb(255,255,255),borderColor:Bt.fromRgb(0,0,0),textSize:.33,borderWidth:.3,offsetZ:.75,customText:`${i++}`},{tags:Li})}let a=this.plugin.state.data;return await be.State.Update(this.plugin,{state:a,tree:n,options:{doNotLogTiming:!0}}),{representation:n.selector}}getTransforms(r){let n=this.plugin.state.data,o=Ce.findTagInSubtree(n.tree,bn.RootRef,ms),i=o?n.select(Ce.Generators.ofTransformer(r,o)):this._empty;return i.length===0?this._empty:i}sync(){let r=[];for(let o of this.getTransforms(kn)){let i=o.obj.tags;(!i||!i.includes(Li))&&r.push(o)}this.updateState({labels:r,distances:this.getTransforms(Di),angles:this.getTransforms(_i),dihedrals:this.getTransforms(Ei),orientations:this.getTransforms(Ai),planes:this.getTransforms(wi)})&&this.stateUpdated()}};function Zm(e,t){let r=qx(e,t||Oi());return Jx(e.tree,r),t&&t.refs.forEach(Yx,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function Oi(){return{lists:[],refs:new Map}}function Hx(e){return{kind:"particle-list",cell:e,version:e.transform.version,representations:[]}}function $x(e,t){return{kind:"particle-representation",cell:e,version:e.transform.version,list:t}}function qx(e,t){return{state:e,oldHierarchy:t,hierarchy:Oi(),changed:!1,added:new Set}}function Xm(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function Xx(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function Zx(){}var Qx=[[Xx(S.Particle.List,e=>e.currentList),(e,t)=>{e.currentList=Xm(e,t,e.hierarchy.lists,Hx,t)},e=>e.currentList=void 0],[(e,t)=>!e.state.isGhost&&!!t.currentList&&S.Particle.Representation3D.is(e.obj),(e,t)=>(e.currentList&&Xm(e,t,e.currentList.representations,$x,t,e.currentList),!1),Zx]];function Qm(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Qe.Null||e.status!=="ok"&&e.status!=="error")}function Yx(e){let{cell:t}=e;Qm(t)||(this.changed=!0)}function Kx(e){Ym(this,this.tree.transforms.get(e))}function Ym(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!Qm(n))return;let o,i=!1;for(let[s,c,u]of Qx)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(Kx,e),o&&o(r)}function Jx(e,t){let r={tree:e,state:t};return Ym(r,e.root),r.state}var fs=ne.BuiltIn({name:"particles-representation-3d",display:"3D Representation",from:S.Particle.List,to:S.Particle.Representation3D,params:(e,t)=>{let r=t.representation.particles,{registry:n,themes:o}=r,i=n.default?.provider,a=!!i&&cr(r),s=!!i&&ur(r);if(!e){let l={help:d=>{let{name:m,params:f}=d,g=o.colorThemeRegistry.get(m).factory({},f);return{description:g.description,legend:g.legend}}};return{type:n.default?p.Mapped(n.default.name,n.types,d=>p.Group(n.get(d).getParams(o,void 0))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.types,d=>p.Group(o.colorThemeRegistry.get(d).getParams({})),l):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.types,d=>p.Group(o.sizeThemeRegistry.get(d).getParams({}))):Oe()}}let c={particles:e.data},u={help:l=>{let{name:d,params:m}=l,h=o.colorThemeRegistry.get(d).factory(c,m);return{description:h.description,legend:h.legend}}};return{type:n.default?p.Mapped(n.default.name,n.getApplicableTypes(e.data),l=>p.Group(n.get(l).getParams(o,e.data))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.getApplicableTypes(c),l=>p.Group(o.colorThemeRegistry.get(l).getParams(c)),u):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.getApplicableTypes(c),l=>p.Group(o.sizeThemeRegistry.get(l).getParams(c))):Oe()}}})({canAutoUpdate({oldParams:e,newParams:t}){return e.type.name===t.type.name},apply({a:e,params:t},r){return yt("particles",r.representation.particles),Q.create("Particles Representation",async n=>{let o=r.representation.particles.themes,i=r.representation.particles.registry.get(t.type.name),a=i.factory({graphics:r.canvas3d?.graphics,...o},i.getParams);a.setTheme(Ue.create(o,{particles:e.data},t));let s=t.type.params||{};return await a.createOrUpdate(s,e.data).runInContext(n),new S.Particle.Representation3D({repr:a,sourceData:e.data},{label:i.label})})},update({a:e,b:t,oldParams:r,newParams:n},o){return yt("particles",o.representation.particles),Q.create("Particles Representation",async i=>{if(n.type.name!==r.type.name)return _.UpdateResult.Recreate;if(o.representation.particles.registry.get(n.type.name).mustRecreate?.(r.type.params,n.type.params))return _.UpdateResult.Recreate;let s=o.representation.particles.themes;t.data.repr.setTheme(Ue.create(s,{particles:e.data},n));let c={...t.data.repr.props,...n.type.params};return await t.data.repr.createOrUpdate(c,e.data).runInContext(i),t.data.sourceData=e.data,_.UpdateResult.Updated})}});tt(fs,(e,t)=>{let{registry:r,themes:n}=t.plugin.representation.particles;return Wr(r.get(e.type.name),n,e,t)});var dn=class extends mr{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:Oi(),selection:void 0};this.behaviors={selection:this.ev.behavior({hierarchy:this.current,list:this.selection})};this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,list:this.state.selection}));return}this.state.syncedTree=this.dataState.tree;let n=Zm(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n;this.state.hierarchy=o,this.state.selection?this.state.selection=o.refs.has(this.state.selection.cell.transform.ref)?o.refs.get(this.state.selection.cell.transform.ref):o.lists[0]:this.state.selection=o.lists[0],r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,list:this.state.selection})):this.state.notified=!1}setCurrent(r){this.state.selection=r||this.state.hierarchy.lists[0],this.behaviors.selection.next({hierarchy:this.state.hierarchy,list:r||this.state.hierarchy.lists[0]})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)lr(this.dataState,i.cell.transform.ref,o)}addRepresentation(r,n){return this.dataState.build().to(r.cell).apply(fs,{type:{name:n,params:{}}}).commit({canUndo:"Add Representation"})}};(t=>{function e(r,n){return n?.cell.obj?.data?r.representation.particles.registry.getApplicableTypes(n.cell.obj?.data):r.representation.particles.registry.types}t.getRepresentationTypes=e})(dn||={});function Jm(e,t){let r=nv(e,t||Fi());return cv(e.tree,r),t&&t.refs.forEach(av,r),{hierarchy:r.hierarchy,added:r.added,changed:r.changed}}function Fi(){return{volumes:[],lazyVolumes:[],refs:new Map}}function ev(e){return{kind:"volume",cell:e,version:e.transform.version,representations:[]}}function tv(e){return{kind:"lazy-volume",cell:e,version:e.transform.version}}function rv(e,t){return{kind:"volume-representation",cell:e,version:e.transform.version,volume:t}}function nv(e,t){return{state:e,oldHierarchy:t,hierarchy:Fi(),changed:!1,added:new Set}}function hs(e,t,r,n,...o){let i=n(...o);r.push(i),e.hierarchy.refs.set(t.transform.ref,i);let a=e.oldHierarchy.refs.get(t.transform.ref);return a?a.version!==t.transform.version&&(e.changed=!0):(e.added.add(i.cell.transform.ref),e.changed=!0),i}function ov(e,t){return(r,n)=>!t(n)&&e.is(r.obj)}function Km(){}var iv=[[ov(S.Volume.Data,e=>e.currentVolume),(e,t)=>{e.currentVolume=hs(e,t,e.hierarchy.volumes,ev,t)},e=>e.currentVolume=void 0],[e=>S.Volume.Lazy.is(e.obj),(e,t)=>{hs(e,t,e.hierarchy.lazyVolumes,tv,t)},Km],[(e,t)=>!e.state.isGhost&&!!t.currentVolume&&S.Volume.Representation3D.is(e.obj),(e,t)=>(e.currentVolume&&hs(e,t,e.currentVolume.representations,rv,t,e.currentVolume),!1),Km]];function ef(e){if(!e||!e?.parent||!e.parent.cells.has(e.transform.ref))return!1;let{obj:t}=e;return!(!t||t===Qe.Null||e.status!=="ok"&&e.status!=="error")}function av(e){let{cell:t}=e;ef(t)||(this.changed=!0)}function sv(e){tf(this,this.tree.transforms.get(e))}function tf(e,t){let{state:r}=e,n=r.state.cells.get(t.ref);if(!ef(n))return;let o,i=!1;for(let[s,c,u]of iv)if(s(n,r)){if(c(r,n)===!1){i=!0;break}o=u;break}if(i)return;let a=e.tree.children.get(t.ref);a&&a.size&&a.forEach(sv,e),o&&o(r)}function cv(e,t){let r={tree:e,state:t};return tf(r,e.root),r.state}function rf(e,t,r={}){let n=e.representation.volume;if(t)yt("volume",n);else if(!go(n))return{type:Qt(),colorTheme:Qt(),sizeTheme:Qt()};return Hr(e,"volume",n,{type:r.type||void 0,color:r.color||void 0,size:r.size||void 0,checkColor:!0,checkSize:!0}),uv(e,t||or.One,r)}function uv(e,t,r={}){let{registry:n,themes:o}=e.representation.volume,i={volume:t},a=(typeof r.type=="string"?r.type&&n.get(r.type):r.type)||n.get(n.default.name),s=p.getDefaultValues(a.getParams(o,t)),c=Object.assign(s,r.typeParams),u=(typeof r.color=="string"?r.color&&o.colorThemeRegistry.get(r.color):r.color)||o.colorThemeRegistry.get(a.defaultColorTheme.name),l=p.getDefaultValues(u.getParams(i));u.name===a.defaultColorTheme.name&&Object.assign(l,a.defaultColorTheme.props);let d=Object.assign(l,r.colorParams),m=(typeof r.size=="string"?r.size&&o.sizeThemeRegistry.get(r.size):r.size)||o.sizeThemeRegistry.get(a.defaultSizeTheme.name),f=p.getDefaultValues(m.getParams(i));m.name===a.defaultSizeTheme.name&&Object.assign(f,a.defaultSizeTheme.props);let h=Object.assign(f,r.sizeParams);return{type:{name:a.name,params:c},colorTheme:{name:u.name,params:d},sizeTheme:{name:m.name,params:h}}}function nf(e,t){return typeof t=="string"?e.representation.volume.registry.get(t):t}function of(e,t){return typeof t=="string"?e.representation.volume.themes.colorThemeRegistry.get(t):t}function af(e,t){return typeof t=="string"?e.representation.volume.themes.sizeThemeRegistry.get(t):t}var Mi;(n=>{function e(o,i,a,s,c,u,l,d){let m=nf(o,i),f=of(o,c||m.defaultColorTheme.name),h=af(o,l||m.defaultSizeTheme.name),g=p.getDefaultValues(m.getParams(o.representation.volume.themes,a));return{type:{name:m.name,params:s?{...g,...s}:g},colorTheme:{name:f.name,params:u?{...f.defaultValues,...u}:f.defaultValues},sizeTheme:{name:h.name,params:d?{...h.defaultValues,...d}:h.defaultValues}}}n.getDefaultParams=e;function t(o,i,a,s,c,u,l){let d=nf(o,i),m=of(o,s||d.defaultColorTheme.name),f=af(o,u||d.defaultSizeTheme.name);return{type:{name:d.name,params:a?{...d.defaultValues,...a}:d.defaultValues},colorTheme:{name:d.defaultColorTheme.name,params:c?{...m.defaultValues,...c}:m.defaultValues},sizeTheme:{name:d.defaultSizeTheme.name,params:l?{...f.defaultValues,...l}:f.defaultValues}}}n.getDefaultParamsStatic=t;function r(o){if(o.isoValue)return or.IsoValue.toString(o.isoValue);if(o.renderMode?.params?.isoValue)return or.IsoValue.toString(o.renderMode?.params?.isoValue)}n.getDescription=r})(Mi||={});var gs=ne.BuiltIn({name:"volume-representation-3d",display:"3D Representation",from:S.Volume.Data,to:S.Volume.Representation3D,params:(e,t)=>{let r=t.representation.volume,{registry:n,themes:o}=r,i=n.default?.provider,a=!!i&&cr(r),s=!!i&&ur(r);if(!e)return{type:n.default?p.Mapped(n.default.name,n.types,u=>p.Group(n.get(u).getParams(o,or.One))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.types,u=>p.Group(o.colorThemeRegistry.get(u).getParams({volume:or.One}))):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.types,u=>p.Group(o.sizeThemeRegistry.get(u).getParams({volume:or.One}))):Oe()};let c={volume:e.data};return{type:n.default?p.Mapped(n.default.name,n.types,u=>p.Group(n.get(u).getParams(o,e.data))):Oe(),colorTheme:a?p.Mapped(i.defaultColorTheme.name,o.colorThemeRegistry.getApplicableTypes(c),u=>p.Group(o.colorThemeRegistry.get(u).getParams(c))):Oe(),sizeTheme:s?p.Mapped(i.defaultSizeTheme.name,o.sizeThemeRegistry.getApplicableTypes(c),u=>p.Group(o.sizeThemeRegistry.get(u).getParams(c))):Oe()}}})({canAutoUpdate({oldParams:e,newParams:t}){return e.type.name===t.type.name},apply({a:e,params:t},r){return yt("volume",r.representation.volume),Q.create("Volume Representation",async n=>{let o={runtime:n,assetManager:r.managers.asset,errorContext:r.errorContext},i=r.representation.volume.registry.get(t.type.name);i.ensureCustomProperties&&await i.ensureCustomProperties.attach(o,e.data);let a=i.factory({graphics:r.canvas3d?.graphics,...r.representation.volume.themes},i.getParams);await Ue.ensureDependencies(o,r.representation.volume.themes,{volume:e.data},t),a.setTheme(Ue.create(r.representation.volume.themes,{volume:e.data,locationKinds:i.locationKinds},t));let s=t.type.params||{};return await a.createOrUpdate(s,e.data).runInContext(n),new S.Volume.Representation3D({repr:a,sourceData:e.data},{label:i.label,description:Mi.getDescription(s)})})},update({a:e,b:t,oldParams:r,newParams:n},o){return yt("volume",o.representation.volume),Q.create("Volume Representation",async i=>{if(n.type.name!==r.type.name)return _.UpdateResult.Recreate;let a=o.representation.volume.registry.get(n.type.name);if(a.mustRecreate?.(r.type.params,n.type.params))return _.UpdateResult.Recreate;let s={runtime:i,assetManager:o.managers.asset,errorContext:o.errorContext};a.ensureCustomProperties&&await a.ensureCustomProperties.attach(s,e.data),Ue.releaseDependencies(o.representation.volume.themes,{volume:t.data.sourceData},r),await Ue.ensureDependencies(s,o.representation.volume.themes,{volume:e.data},n),t.data.repr.setTheme(Ue.create(o.representation.volume.themes,{volume:e.data,locationKinds:a.locationKinds},n));let c={...t.data.repr.props,...n.type.params};return await t.data.repr.createOrUpdate(c,e.data).runInContext(i),t.data.sourceData=e.data,t.description=Mi.getDescription(c),_.UpdateResult.Updated})},dispose({b:e,params:t},r){if(!e||!t)return;let n=e.data.sourceData,o=r.representation.volume.registry.get(t.type.name);o.ensureCustomProperties&&o.ensureCustomProperties.detach(n),Ue.releaseDependencies(r.representation.volume.themes,{volume:n},t)}});tt(gs,(e,t)=>{let{registry:r,themes:n}=t.plugin.representation.volume;return Wr(r.get(e.type.name),n,e,t)});var pn=class extends mr{constructor(r){super();this.plugin=r;this.state={syncedTree:this.dataState.tree,notified:!1,hierarchy:Fi(),selection:void 0};this.behaviors={selection:this.ev.behavior({hierarchy:this.current,volume:this.selection})};this.subscribe(r.state.data.events.changed,n=>{n.inTransaction||r.behaviors.state.isAnimating.value||this.sync(!0)}),this.subscribe(r.behaviors.state.isAnimating,n=>{!n&&!r.behaviors.state.isUpdating.value&&this.sync(!0)})}get dataState(){return this.plugin.state.data}get current(){return this.sync(!1),this.state.hierarchy}get selection(){return this.sync(!1),this.state.selection}sync(r){if(!r&&this.dataState.inUpdate)return;if(this.state.syncedTree===this.dataState.tree){r&&!this.state.notified&&(this.state.notified=!0,this.behaviors.selection.next({hierarchy:this.state.hierarchy,volume:this.state.selection}));return}this.state.syncedTree=this.dataState.tree;let n=Jm(this.plugin.state.data,this.current);if(!n.changed)return;let{hierarchy:o}=n;this.state.hierarchy=o,this.state.selection?this.state.selection=o.refs.has(this.state.selection.cell.transform.ref)?o.refs.get(this.state.selection.cell.transform.ref):o.volumes[0]:this.state.selection=o.volumes[0],r?(this.state.notified=!0,this.behaviors.selection.next({hierarchy:o,volume:this.state.selection})):this.state.notified=!1}setCurrent(r){this.state.selection=r||this.state.hierarchy.volumes[0],this.behaviors.selection.next({hierarchy:this.state.hierarchy,volume:r||this.state.hierarchy.volumes[0]})}remove(r,n){if(r.length===0)return;let o=this.plugin.state.data.build();for(let i of r)o.delete(typeof i=="string"?i:i.cell.transform.ref);return o.commit({canUndo:n?"Remove":!1})}toggleVisibility(r,n){if(r.length===0)return;let o=n!==void 0?n!=="show":!r[0].cell.state.isHidden;for(let i of r)lr(this.dataState,i.cell.transform.ref,o)}addRepresentation(r,n){return this.dataState.build().to(r.cell).apply(gs,rf(this.plugin,r.cell.obj?.data,{type:n})).commit({canUndo:"Add Representation"})}};(t=>{function e(r,n){return n?.cell.obj?.data?r.representation.volume.registry.getApplicableTypes(n.cell.obj?.data):r.representation.volume.registry.types}t.getRepresentationTypes=e})(pn||={});var Bi=class{constructor(t){this.plugin=t;this.state={audioPlayer:new Bs(null)};this.extension=[];this.extensionCounts=new Map;this.refResolvers={default:(t,r)=>r.map(n=>t.state.data.cells.get(n)).filter(n=>!!n)};this.uriResolvers={};this.argsParsers=[["default",100,lv]];this.audio={play:async(t,r)=>{try{let n=this.resolveAudioPlayer(),o=!1;if(t?.trim()){let i=this.tryResolveUri(t),a=t;typeof i?.then=="function"?a=await i:i&&(a=i),o=n.src!==a,o&&(n.src=a,n.load())}!o&&r?.toggle?n.paused?await n.play():n.pause():(n.currentTime=0,await n.play())}catch(n){console.error("Failed to play audio",n)}},pause:()=>{this.audioPlayer?.pause()},stop:()=>{this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer.currentTime=0)},dispose:()=>{this.audioPlayer&&(this.audioPlayer.pause(),this.audioPlayer.currentTime=0,this.state.audioPlayer.next(null))}}}registerArgsParser(t,r,n){this.removeArgsParser(t),this.argsParsers.push([t,r,n]),this.argsParsers.sort((o,i)=>i[1]-o[1])}removeArgsParser(t){let r=this.argsParsers.findIndex(n=>n[0]===t);r>=0&&this.argsParsers.splice(r,1)}parseArgs(t){for(let[,,r]of this.argsParsers){let n=r(t);if(n)return n}}registerRefResolver(t,r){this.refResolvers[t]=r}removeRefResolver(t){delete this.refResolvers[t]}registerUriResolver(t,r){this.uriResolvers[t]=r}removeUriResolver(t){delete this.uriResolvers[t]}findConflict(t){let r=this.extension.find(n=>n.name===t.name);if(r&&r!==t)return`MarkdownExtensionManager: a different extension is already registered under the name '${t.name}'.`}registerExtension(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.extensionCounts.get(t.name);n!==void 0?this.extensionCounts.set(t.name,n+1):(this.extensionCounts.set(t.name,1),this.extension.push(t))}removeExtension(t){let r=typeof t=="string"?t:t.name,n=this.extension.findIndex(i=>i.name===r);if(n<0||typeof t!="string"&&this.extension[n]!==t)return;let o=this.extensionCounts.get(r)??1;o>1?this.extensionCounts.set(r,o-1):(this.extensionCounts.delete(r),this.extension.splice(n,1))}_tryRender(t,r){try{return t.reactRenderFn?.(r)}catch(n){return console.error(`Failed to render markdown extension '${t.name}'`,n),null}}tryRender(t,r){let n={args:t,manager:this};for(let o of this.extension){let i=this._tryRender(o,n);if(i)return i}for(let o of r){let i=this._tryRender(o,n);if(i)return i}return null}tryExecute(t,r){let n={event:t,args:r,manager:this};for(let o of this.extension)try{o.execute?.(n)}catch(i){console.error(`Failed to execute markdown extension '${o.name}'`,i)}}tryResolveUri(t){for(let r of Object.values(this.uriResolvers)){let n=r(this.plugin,t);if(n)return n}}findCells(t){let r=new Set,n=[];for(let o of Object.values(this.refResolvers))for(let i of o(this.plugin,t))i&&!r.has(i.transform.ref)&&(r.add(i.transform.ref),n.push(i));return n}resolveAudioPlayer(){if(this.state.audioPlayer.value)return this.state.audioPlayer.value;let t=document.createElement("audio");return t.controls=!0,t.preload="auto",t.style.width="100%",t.style.height="32px",this.state.audioPlayer.next(t),t}get audioPlayer(){return this.state.audioPlayer.value}};function lv(e){if(!e?.startsWith("!"))return;let t=decodeURIComponent(e.substring(1)).split("&").map(r=>r.trim()).filter(r=>r.length>0).map(r=>r.split("=",2).map(n=>n.trim()));if(t.length!==0)return Object.fromEntries(t)}var dv=[["full","Full"],["collapsed","Collapsed"],["hidden","Hidden"]],ys=[["full","Full"],["hidden","Hidden"]],pv={isExpanded:p.Boolean(!1),showControls:p.Boolean(!0),regionState:p.Group({left:p.Select("full",dv),top:p.Select("full",ys),right:p.Select("full",ys),bottom:p.Select("full",ys)}),controlsDisplay:p.Value("outside",{isHidden:!0}),expandToFullscreen:p.Boolean(!1)},Vi=class extends He{constructor(r){super({...p.getDefaultValues(pv),...r.spec.layout&&r.spec.layout.initial});this.context=r;this.events={updated:this.ev()};this.rootState=void 0;this.fullscreenChangeHandler=()=>{document.fullscreenElement||this.updateProps({expandToFullscreen:!1})};typeof document<"u"&&(document.addEventListener("fullscreenchange",this.fullscreenChangeHandler),document.addEventListener("webkitfullscreenchange",this.fullscreenChangeHandler)),be.Layout.Update.subscribe(r,n=>this.updateProps(n.state)),typeof document<"u"&&(this.expandedViewport=document.createElement("meta"),this.expandedViewport.name="viewport",this.expandedViewport.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")}updateProps(r){let n=!!this.state.isExpanded;if(this.updateState(r),this.root&&typeof r.isExpanded=="boolean"&&r.isExpanded!==n&&this.handleExpand(),typeof document<"u")if(this.state.expandToFullscreen){let o=document.getElementsByTagName("body")[0];o&&this.tryRequestFullscreen(o)}else document.fullscreenElement&&this.tryExitFullscreen();this.events.updated.next(void 0)}setProps(r){this.updateState(r)}setRoot(r){this.root=r,this.state.isExpanded&&this.handleExpand()}getScrollElement(){return document.scrollingElement?document.scrollingElement:document.documentElement?document.documentElement:document.body}async tryRequestFullscreen(r){if(!document.fullscreenElement)try{await r.requestFullscreen()}catch(n){console.error(n)}}async tryExitFullscreen(){if(document.fullscreenElement)try{await document.exitFullscreen()}catch(r){console.error(r)}}handleExpand(){try{let r=document.getElementsByTagName("body")[0],n=document.getElementsByTagName("head")[0];if(!r||!n||!this.root)return;if(this.state.isExpanded){let o=n.children,i=[],a=!1;for(let d=0;d<o.length;d++)o[d]===this.expandedViewport?a=!0:(o[d].name||"").toLowerCase()==="viewport"&&i.push(o[d]);for(let d of i)n.removeChild(d);a||n.appendChild(this.expandedViewport);let s=r.style,c=this.getScrollElement(),u=c.scrollLeft,l=c.scrollTop;this.rootState={top:s.top,bottom:s.bottom,right:s.right,left:s.left,scrollTop:l,scrollLeft:u,position:s.position,overflow:s.overflow,viewports:i,zIndex:this.root.style.zIndex,width:s.width,height:s.height,maxWidth:s.maxWidth,maxHeight:s.maxHeight,margin:s.margin,marginLeft:s.marginLeft,marginRight:s.marginRight,marginTop:s.marginTop,marginBottom:s.marginBottom},s.overflow="hidden",s.position="fixed",s.top="0",s.bottom="0",s.right="0",s.left="0",s.width="100%",s.height="100%",s.maxWidth="100%",s.maxHeight="100%",s.margin="0",s.marginLeft="0",s.marginRight="0",s.marginTop="0",s.marginBottom="0"}else{let o=n.children;for(let i=0;i<o.length;i++)if(o[i]===this.expandedViewport){n.removeChild(this.expandedViewport);break}if(this.state.expandToFullscreen&&document.fullscreenElement&&document.exitFullscreen(),this.rootState){let i=this.rootState;for(let c of i.viewports)n.appendChild(c);let a=r.style;a.top=i.top,a.bottom=i.bottom,a.left=i.left,a.right=i.right,a.width=i.width,a.height=i.height,a.maxWidth=i.maxWidth,a.maxHeight=i.maxHeight,a.margin=i.margin,a.marginLeft=i.marginLeft,a.marginRight=i.marginRight,a.marginTop=i.marginTop,a.marginBottom=i.marginBottom,a.position=i.position,a.overflow=i.overflow||"";let s=this.getScrollElement();s.scrollTop=i.scrollTop,s.scrollLeft=i.scrollLeft,this.rootState=void 0,this.root.style.zIndex=i.zIndex}}}catch(r){let n="Layout change error, you might have to reload the page.";this.context.log.error(n),console.error(n,r)}}dispose(){super.dispose(),typeof document<"u"&&(document.removeEventListener("fullscreenchange",this.fullscreenChangeHandler),document.removeEventListener("webkitfullscreenchange",this.fullscreenChangeHandler))}};var ki=class extends jr{};var Gi=class extends jr{};var Ui=class extends jr{};var mv=1e3/30,fv=250,zi=class{constructor(t){this.plugin=t;this.lastTickT=0;this.properTimeT=0;this.currentFrame=void 0;this._isAnimating=!1;this.pausesWhenIdle=!1;this.sleeping=!1;this.idleSince=-1;this.wakeSubs=void 0;this.frame=(t,r)=>{let n=vt(),o=n-this.lastTickT;if(this.lastTickT=n,this.properTimeT+=Math.min(o,mv),this.currentFrame=void 0,this.sleeping=!1,this.tick(this.properTimeT,{xrFrame:r}),!!this._isAnimating){if(this.idleFor(n)>=fv){this.sleeping=!0,this.plugin.canvas3d?.cancelAnimationFrame(0);return}this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame)}};this.wake=()=>{this.idleSince=-1,!(!this.sleeping||!this._isAnimating)&&(this.sleeping=!1,this.lastTickT=vt(),this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame))}}get isAnimating(){return this._isAnimating}get isSleeping(){return this.sleeping}async tick(t,r){if(await this.plugin.managers.animation.tick(t,r?.isSynchronous,r?.animation),this.plugin.canvas3d?.tick(t,r),pe){let n=this.plugin.canvas3d?.graphics.timer.resolve();if(n)for(let o of n)Ac([o])}}idleFor(t){let r=this.plugin.canvas3d;return!this.pausesWhenIdle||!r?.isIdle||r.xr.isPresenting.value||this.plugin.managers.animation.isAnimating?(this.idleSince=-1,0):(this.idleSince<0&&(this.idleSince=t),t-this.idleSince)}followWake(){let t=this.plugin.canvas3d;this.wakeSubs||!t||(this.wakeSubs=[t.wake.subscribe(this.wake),this.plugin.behaviors.state.isAnimating.subscribe(r=>{r&&this.wake()})])}resetTime(t){this.plugin.canvas3d?.resetTime(t)}start(t){this.plugin.canvas3d?.resume(),this.pausesWhenIdle=!!this.plugin.config.get(Le.General.PauseLoopWhenIdle),this.pausesWhenIdle&&this.followWake(),this.sleeping=!1,this.idleSince=-1,this._isAnimating=!0,this.resetTime(0),this.properTimeT=0,this.lastTickT=vt(),t?.immediate?this.frame():this.currentFrame=this.plugin.canvas3d?.requestAnimationFrame(this.frame)}stop(t){this._isAnimating=!1,this.sleeping=!1,this.currentFrame!==void 0&&(this.plugin.canvas3d?.cancelAnimationFrame(this.currentFrame),this.currentFrame=void 0),t?.noDraw&&this.plugin.canvas3d?.pause(t?.noDraw)}dispose(){if(this.stop(),this.wakeSubs)for(let t of this.wakeSubs)t.unsubscribe();this.wakeSubs=void 0}};var xs={};Zi(xs,{SyncRepresentationToCanvas:()=>sf,SyncStructureRepresentation3DState:()=>cf,UpdateRepresentationVisibility:()=>uf,registerDefault:()=>hv});function hv(e){sf(e),cf(e),uf(e)}function sf(e){let t=e.state.data.events;t.object.created.subscribe(r=>{S.isRepresentation3D(r.obj)&&(bs(r.state.cells.get(r.ref),r.obj.data.repr),r.obj.data.repr.setState({syncManually:!0}),e.canvas3d?.add(r.obj.data.repr))}),t.object.updated.subscribe(r=>{r.oldObj&&S.isRepresentation3D(r.oldObj)&&(e.canvas3d?.remove(r.oldObj.data.repr),r.oldObj.data.repr.destroy()),S.isRepresentation3D(r.obj)&&(bs(r.state.cells.get(r.ref),r.obj.data.repr),r.action==="recreate"&&r.obj.data.repr.setState({syncManually:!0}),e.canvas3d?.add(r.obj.data.repr))}),t.object.removed.subscribe(r=>{S.isRepresentation3D(r.obj)&&(e.canvas3d?.remove(r.obj.data.repr),r.obj.data.repr.destroy())})}function cf(e){let t=e.state.data.events;t.object.created.subscribe(r=>{if(!S.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.state),e.canvas3d?.update(n.repr)}),t.object.updated.subscribe(r=>{if(!S.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.state),e.canvas3d?.update(n.repr)}),t.object.removed.subscribe(r=>{if(!S.Molecule.Structure.Representation3DState.is(r.obj))return;let n=r.obj.data;n.repr.setState(n.initialState),e.canvas3d?.update(n.repr)})}function uf(e){e.state.data.events.cell.stateUpdated.subscribe(t=>{let r=t.state.cells.get(t.ref);S.isRepresentation3D(r.obj)&&bs(r,r.obj.data.repr)&&e.canvas3d?.syncVisibility()})}function bs(e,t){return t.state.visible===!!e.state.isHidden?(t.setState({visible:!e.state.isHidden}),!0):!1}var vs={};Zi(vs,{Focus:()=>pf,FocusObject:()=>mf,OrientAxes:()=>ff,Reset:()=>lf,ResetAxes:()=>hf,SetSnapshot:()=>df,registerDefault:()=>gv});function gv(e){lf(e),pf(e),mf(e),df(e),ff(e),hf(e)}function lf(e){be.Camera.Reset.subscribe(e,({snapshot:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.reset(t,r,{easing:n,trajectory:o})})}function df(e){be.Camera.SetSnapshot.subscribe(e,({snapshot:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.setSnapshot(t,r,{easing:n,trajectory:o})})}function pf(e){be.Camera.Focus.subscribe(e,({center:t,radius:r,durationMs:n,easing:o,trajectory:i})=>{e.managers.camera.focusSphere({center:t,radius:r},{durationMs:n,easing:o,trajectory:i}),e.events.canvas3d.settingsUpdated.next(void 0)})}function mf(e){be.Camera.FocusObject.subscribe(e,t=>{e.managers.camera.focusObject(t)})}function ff(e){be.Camera.OrientAxes.subscribe(e,({structures:t,durationMs:r,easing:n,trajectory:o})=>{e.managers.camera.orientAxes(t,r,{easing:n,trajectory:o})})}function hf(e){be.Camera.ResetAxes.subscribe(e,({durationMs:t,easing:r,trajectory:n})=>{e.managers.camera.resetAxes(t,{easing:r,trajectory:n})})}var Ss={};Zi(Ss,{Canvas3DSetSettings:()=>gf,registerDefault:()=>yv});function yv(e){gf(e)}function gf(e){be.Canvas3D.ResetSettings.subscribe(e,()=>{e.canvas3d?.setProps(oo),e.events.canvas3d.settingsUpdated.next(void 0)}),be.Canvas3D.SetSettings.subscribe(e,t=>{e.canvas3d&&(e.canvas3d?.setProps(t.settings),e.events.canvas3d.settingsUpdated.next(void 0))})}var Gn={State:Hc,Representation:xs,Camera:vs,Misc:Ss};function Ft(e,t,r,n=[]){return{label:e.label,scope:e.scope,identity:r,keys:n,findConflict:()=>e.findConflict(t),add:()=>e.add(t),remove:()=>e.remove(t)}}function zt(e,t){return{label:e,scope:t,findConflict:r=>t.findConflict(r),add:r=>t.add(r),remove:r=>t.remove(r)}}function bv(e){let{structure:t,volume:r,particles:n}=e.representation,{hierarchy:o,representation:i}=e.builders.structure,{dataFormats:a}=e,{lociLabels:s,markdownExtensions:c,dragAndDrop:u,animation:l}=e.managers,d=e.query.structure.registry,m=e.state.data.actions;return{scopes:{structure:{colorThemes:zt("Structure color theme",t.themes.colorThemeRegistry),sizeThemes:zt("Structure size theme",t.themes.sizeThemeRegistry),representations:zt("Structure representation",t.registry)},volume:{colorThemes:zt("Volume color theme",r.themes.colorThemeRegistry),sizeThemes:zt("Volume size theme",r.themes.sizeThemeRegistry),representations:zt("Volume representation",r.registry)},particles:{colorThemes:zt("Particles color theme",n.themes.colorThemeRegistry),sizeThemes:zt("Particles size theme",n.themes.sizeThemeRegistry),representations:zt("Particles representation",n.registry)}},formats:zt("Data format",a),hierarchyPresets:{label:"Trajectory hierarchy preset",scope:o,findConflict:f=>o.findConflict(f),add:f=>o.registerPreset(f),remove:f=>o.unregisterPreset(f)},representationPresets:{label:"Structure representation preset",scope:i,findConflict:f=>i.findConflict(f),add:f=>i.registerPreset(f),remove:f=>i.unregisterPreset(f)},selectionQueries:zt("Structure selection query",d),lociLabels:{label:"Loci label provider",scope:s,findConflict:f=>s.findConflict(f),add:f=>s.addProvider(f),remove:f=>s.removeProvider(f)},markdownExtensions:{label:"Markdown extension",scope:c,findConflict:f=>c.findConflict(f),add:f=>c.registerExtension(f),remove:f=>c.removeExtension(f)},dragAndDrop:{label:"Drag and drop handler",scope:u,findConflict:f=>u.findConflict(f),add:f=>u.addEntry(f),remove:f=>u.removeEntry(f)},actions:{label:"Action",scope:m,findConflict:f=>m.findConflict(f),add:f=>m.add(f),remove:f=>m.remove(f)},animations:{label:"Animation",scope:l,findConflict:f=>l.findConflict(f),add:f=>l.register(f),remove:f=>l.unregister(f)}}}function xv(e){return"definition"in e?e:e.action}function vv(e,t,r){let n=[[t.structure,e.scopes.structure],[t.volume,e.scopes.volume],[t.particles,e.scopes.particles]];for(let[o,i]of n){for(let a of o?.themes?.color??[])r.push(Ft(i.colorThemes,a,a,[a.name]));for(let a of o?.themes?.size??[])r.push(Ft(i.sizeThemes,a,a,[a.name]));for(let a of o?.representations??[])r.push(Ft(i.representations,a,a,[a.name]))}for(let o of t.formats??[])r.push(Ft(e.formats,o,o,[o.name]));for(let o of t.structure?.presets?.hierarchy??[])r.push(Ft(e.hierarchyPresets,o,o,o.alias===void 0?[o.id]:[o.id,o.alias]));for(let o of t.structure?.presets?.representation??[])r.push(Ft(e.representationPresets,o,o,o.alias===void 0?[o.id]:[o.id,o.alias]));for(let o of t.structure?.selectionQueries??[])r.push(Ft(e.selectionQueries,o,o));for(let o of t.lociLabels??[])r.push(Ft(e.lociLabels,o,o));for(let o of t.markdownExtensions??[])r.push(Ft(e.markdownExtensions,o,o,[o.name]));for(let o of t.dragAndDrop??[])r.push(Ft(e.dragAndDrop,o,o.handle,[o.name]));for(let o of t.actions??[]){let i=xv(o);r.push(Ft(e.actions,i,i))}for(let o of t.animations??[])r.push(Ft(e.animations,o,o,[o.name]))}function Sv(e){let t=[],r=new Map;for(let n of e){let o=n.findConflict();o&&t.push(o);let i=r.get(n.scope);i||r.set(n.scope,i=new Map);for(let a of n.keys){let s=i.get(a);s&&s.identity!==n.identity?t.push(`${n.label} '${a}' is listed more than once with different providers.`):s||i.set(a,n)}}return t}function yf(e,t){let r=bv(e),n=Array.isArray(t)?t:[t],o=[];for(let c of n)vv(r,c,o);let i=Sv(o);if(i.length>0)throw new Error(`PluginContext.register: ${i.length===1?"1 conflict":`${i.length} conflicts`}, nothing was registered:
${i.map(c=>`  - ${c}`).join(`
`)}`);let a=[];try{for(let c of o)c.add(),a.push(c)}catch(c){for(let u=a.length-1;u>=0;u--)a[u].remove();throw c}let s=!1;return()=>{if(!s){s=!0;for(let c=a.length-1;c>=0;c--)a[c].remove()}}}var Tv=[["Structure","structure"],["Volume","volume"],["Particles","particles"]];function bf(e,t){let r=[];for(let[n,o]of Tv){let{registry:i,themes:a}=e.representation[o];for(let{name:s,provider:c}of i.list){let u=[["color",c.defaultColorTheme?.name,a.colorThemeRegistry],["size",c.defaultSizeTheme?.name,a.sizeThemeRegistry]];for(let[l,d,m]of u){if(!d||m.has(d))continue;let f=`${o}/${s}/${l}/${d}`;if(t.has(f))continue;t.add(f);let h=`${n} representation '${s}' default ${l} theme '${d}' is not registered`;r.push(h),e.log.warn(h)}}}return r}var Ni=class{constructor(t){this.plugin=t;this.ev=Ur.create();this.events={updated:this.ev(),removed:this.ev()};this.root=new Map;this.tracked=new Map;t.state.data.events.object.created.subscribe(r=>{this.addMapping(r.state,r.ref,r.obj)}),t.state.data.events.object.removed.subscribe(r=>{this.removeMapping(r.ref)&&this.events.removed.next({ref:r.ref,obj:r.obj})}),t.state.data.events.object.updated.subscribe(r=>{this.updateMapping(r.state,r.ref,r.oldObj,r.obj)&&this.events.updated.next({ref:r.ref,oldObj:r.oldObj,obj:r.obj})})}getDecorator(t){let r=this.plugin.state.data.tree,n=r.children.get(t);if(n.size!==1)return t;let o=n.first();return o&&r.transforms.get(o).transformer.definition.isDecorator?this.getDecorator(o):t}get(t,r=!1){let n=this.root.get(t);if(n)return r?this.plugin.state.data.cells.get(n.ref):this.plugin.state.data.cells.get(this.getDecorator(n.ref))}addMapping(t,r,n){if(!S.Molecule.Structure.is(n))return!1;if(this.tracked.set(r,n.data),this.root.has(n.data)){let o=this.root.get(n.data);o.count++}else{let o=t.select(Ce.Generators.byRef(r).rootOfType([S.Molecule.Structure]))[0];o?this.root.set(n.data,{ref:o.transform.ref,count:1}):this.root.set(n.data,{ref:r,count:1})}return!0}removeMapping(t){if(!this.tracked.has(t))return!1;let r=this.tracked.get(t);this.tracked.delete(t);let n=this.root.get(r);return n.count>1?n.count--:this.root.delete(r),!0}updateMapping(t,r,n,o){return S.Molecule.Structure.is(o)?(this.removeMapping(r),this.addMapping(t,r,o),!0):!1}dispose(){this.ev.dispose()}};var mn=class{constructor(){this.ev=Ur.create();this.id=0;this.runningTasks=new Set;this.abortRequests=new Map;this.options=new Map;this.currentContext=[];this.events={progress:this.ev(),finished:this.ev()}}tryGetAbortTaskId(t){if(this.abortRequests.has(t.progress.taskId))return t.progress.taskId;for(let r of t.children){let n=this.tryGetAbortTaskId(r);if(n!==void 0)return n}}track(t,r){return n=>{if(n.canAbort&&n.requestAbort){let i=this.tryGetAbortTaskId(n.root);i!==void 0&&n.requestAbort(this.abortRequests.get(i))}let o=vt()-n.root.progress.startedTime;this.events.progress.next({id:t,useOverlay:this.options.get(r)?.useOverlay,level:o<250?"none":"background",progress:n})}}async run(t,r){let n=this.id++,o;r?.createNewContext||this.currentContext.length===0?o={ctx:_s(t,this.track(n,t.id),100),refCount:1}:(o=this.currentContext[this.currentContext.length-1],o.refCount++);try{return this.options.set(t.id,{useOverlay:!!r?.useOverlay}),this.runningTasks.add(t.id),await Es(o.ctx,t)}finally{this.options.delete(t.id),this.runningTasks.delete(t.id),this.events.finished.next({id:n}),this.abortRequests.delete(t.id),o.refCount--,o.refCount===0&&Hn(this.currentContext,o)}}requestAbortAll(t){this.runningTasks.forEach(r=>this.abortRequests.set(r,t))}requestAbort(t,r){let n=typeof t=="number"?t:t.root.progress.taskId;this.abortRequests.set(n,r)}dispose(){this.ev.dispose()}};(r=>{function e(n){return new Promise(o=>setTimeout(o,n))}function t(n){return Q.create("Test",async o=>{let i=0;for(;i<n;)await e(100+Math.random()*200),o.shouldUpdate&&await o.update({message:"Step "+i,current:i,max:n,isIndeterminate:!1}),i++})}r.testTask=t})(mn||={});var ji=class extends He{constructor(r){super({entries:$n()});this.events={changed:this.ev()};this.serialNumber=0;this.serialId=0;be.Toast.Show.subscribe(r,n=>this.show(n)),be.Toast.Hide.subscribe(r,n=>this.hide(this.findByKey(n.key)))}findByKey(r){return this.state.entries.find(n=>!!n&&n.key===r)}show(r){let n=this.state.entries,o,i=++this.serialId,a;r.key&&(o=this.findByKey(r.key))?(o.timeout!==void 0&&clearTimeout(o.timeout),a=o.serialNumber,n=n.remove(o.id)):a=++this.serialNumber,o={id:i,serialNumber:a,key:r.key,title:r.title,message:r.message,timeout:this.timeout(i,r.timeoutMs),hide:()=>this.hideId(i)},this.updateState({entries:n.set(i,o)})&&this.events.changed.next(void 0)}timeout(r,n){if(n!==void 0)return n<0&&(n=500),setTimeout(()=>{let o=this.state.entries.get(r);o.timeout=void 0,this.hide(o)},n)}hideId(r){this.hide(this.state.entries.get(r))}hide(r){r&&(r.timeout!==void 0&&clearTimeout(r.timeout),r.hide=void 0,this.updateState({entries:this.state.entries.delete(r.id)})&&this.events.changed.next(void 0))}};function Cv(){let e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1}var Wi=class extends mr{constructor(r){super();this.plugin=r;this._params=void 0;this.behaviors={values:this.ev.behavior({transparent:this.params.transparent.defaultValue,format:{name:"png",params:{}},axes:{name:"off",params:{}},resolution:this.params.resolution.defaultValue,illumination:this.params.illumination.defaultValue}),cropParams:this.ev.behavior({auto:!0,relativePadding:.1}),relativeCrop:this.ev.behavior({x:0,y:0,width:1,height:1})};this.events={previewed:this.ev()};this.canvas=(function(){return document.createElement("canvas")})();this.previewCanvas=(function(){return document.createElement("canvas")})();this.previewData={image:{data:new Uint8ClampedArray(1),width:1,height:0},background:0,transparent:!1}}createParams(){let r=8192;if(this.plugin.canvas3d){let{limits:n}=this.plugin.canvas3d.graphics.resources;r=Math.floor(Math.min(n.maxRenderbufferSize,n.maxTextureSize)/2)}return{resolution:p.MappedStatic("viewport",{viewport:p.Group({}),hd:p.Group({}),"full-hd":p.Group({}),"ultra-hd":p.Group({}),"8k-ultra-hd":p.Group({}),custom:p.Group({width:p.Numeric(1920,{min:128,max:r,step:1}),height:p.Numeric(1080,{min:128,max:r,step:1})},{isFlat:!0})},{options:[["viewport","Viewport"],["hd","HD (1280 x 720)"],["full-hd","Full HD (1920 x 1080)"],["ultra-hd","Ultra HD (3840 x 2160)"],["8k-ultra-hd","8K Ultra HD (7680 x 4320)"],["custom","Custom"]]}),format:p.MappedStatic("png",{png:p.Group({}),webp:p.Group({quality:p.Numeric(.9,{min:0,max:1,step:.01})}),jpeg:p.Group({quality:p.Numeric(.9,{min:0,max:1,step:.01})})},{options:[["png","PNG"],["jpeg","JPEG"],...Cv()?[["webp","WebP"]]:[]]}),transparent:p.Boolean(!1),axes:_c.axes,illumination:p.Group({extraIterations:p.Numeric(1,{min:0,max:5,step:1}),targetIterationTimeMs:p.Numeric(300,{min:100,max:3e3,step:10})})}}get params(){return this._params?this._params:this._params=this.createParams()}get values(){return this.behaviors.values.value}get cropParams(){return this.behaviors.cropParams.value}get relativeCrop(){return this.behaviors.relativeCrop.value}getCanvasSize(){let r=this.plugin.canvas3d?.graphics.getDrawingBufferSize();return{width:r?.width||0,height:r?.height||0}}getSize(){let r=this.values;switch(r.resolution.name){case"viewport":return this.getCanvasSize();case"hd":return{width:1280,height:720};case"full-hd":return{width:1920,height:1080};case"ultra-hd":return{width:3840,height:2160};case"8k-ultra-hd":return{width:7680,height:4320};default:return{width:r.resolution.params.width,height:r.resolution.params.height}}}getPostprocessingProps(){let r=this.plugin.canvas3d,n=r.props.postprocessing.occlusion;return{...r.props.postprocessing,occlusion:n.name==="on"?{name:"on",params:{...n.params,samples:128,resolutionScale:r.graphics.pixelRatio,transparentThreshold:1}}:n}}getIlluminationProps(r){let o=this.plugin.canvas3d.props.illumination,{extraIterations:i,targetIterationTimeMs:a}=this.values.illumination;return{...o,enabled:r?!1:o.enabled,maxIterations:Math.ceil(Math.log2(Math.pow(2,o.maxIterations+i)*o.rendersPerFrame[1])),targetFps:1e3/a,denoiseThreshold:[o.denoiseThreshold[0],o.denoiseThreshold[0]],rendersPerFrame:[1,1]}}createPass(r){let n=this.plugin.canvas3d,{floatRenderTarget:o}=n.graphics.capabilities;return n.getImagePass({transparentBackground:this.values.transparent,cameraHelper:{axes:this.values.axes},multiSample:{...n.props.multiSample,mode:r?"off":"on",sampleLevel:o?4:2,reuseOcclusion:!1},postprocessing:this.getPostprocessingProps(),marking:{...n.props.marking},illumination:this.getIlluminationProps(r)})}get previewPass(){return this._previewPass||(this._previewPass=this.createPass(!0))}get imagePass(){if(this._imagePass){let r=this.plugin.canvas3d;return this._imagePass.setProps({cameraHelper:{axes:this.values.axes},transparentBackground:this.values.transparent,postprocessing:this.getPostprocessingProps(),marking:{...r.props.marking},illumination:this.getIlluminationProps(!1)}),this._imagePass}return this._imagePass=this.createPass(!1)}getFilename(r){typeof r!="string"&&(r=this.extension);let n=this.plugin.state.data.select(Ce.Generators.rootsOfType(S.Molecule.Model)).map(a=>a.obj.data),o=new Set;return n.forEach(a=>o.add(a.entryId.toUpperCase())),`${_r.toArray(o).join("-")||"molstar-image"}${r}`}resetCrop(){this.behaviors.relativeCrop.next({x:0,y:0,width:1,height:1})}toggleAutocrop(){this.cropParams.auto?(this.behaviors.cropParams.next({...this.cropParams,auto:!1}),this.resetCrop()):this.behaviors.cropParams.next({...this.cropParams,auto:!0})}get isFullFrame(){let r=this.relativeCrop;return hn(r.x,0,1e-5)&&hn(r.y,0,1e-5)&&hn(r.width,1,1e-5)&&hn(r.height,1,1e-5)}autocrop(r=this.cropParams.relativePadding){let{data:n,width:o,height:i}=this.previewData.image,a=this.previewData.transparent,s=a?this.previewData.background:4278190080|this.previewData.background,c=o,u=0,l=i,d=0;for(let g=0;g<i;g++){let T=g*o;for(let b=0;b<o;b++){let D=4*(T+b);if(a){if(n[D+3]===0)continue}else if((n[D]<<16|n[D+1]<<8|n[D+2]|n[D+3]<<24)===s)continue;b<c&&(c=b),b>u&&(u=b),g<l&&(l=g),g>d&&(d=g)}}if(c>u){let g=c;c=u,u=g}if(l>d){let g=l;l=d,d=g}let m=u-c+1,f=d-l+1;c-=r*m,u+=r*m,l-=r*f,d+=r*f;let h={x:Math.max(0,c/o),y:Math.max(0,l/i),width:Math.min(1,(u-c+1)/o),height:Math.min(1,(d-l+1)/i)};this.behaviors.relativeCrop.next(h)}async getPreview(r,n=320){let{width:o,height:i}=this.getSize();if(o<=0||i<=0)return;let a=o/i,s=0,c=0;a>1?(s=n,c=Math.round(n/a)):(c=n,s=Math.round(n*a));let u=this.plugin.canvas3d.props;this.previewPass.setProps({cameraHelper:{axes:this.values.axes},transparentBackground:this.values.transparent,postprocessing:u.postprocessing,marking:u.marking});let l=await this.previewPass.getImageData(r,s,c),d=this.previewCanvas;d.width=l.width,d.height=l.height,this.previewData.image=l,this.previewData.background=u.renderer.backgroundColor,this.previewData.transparent=this.values.transparent;let m=d.getContext("2d");if(!m)throw new Error("Could not create canvas 2d context");return m.putImageData(l,0,0),this.cropParams.auto&&this.autocrop(),this.events.previewed.next(void 0),{canvas:d,width:s,height:c}}getSizeAndViewport(){let{width:r,height:n}=this.getSize(),o=this.relativeCrop,i={x:Math.floor(o.x*r),y:Math.floor(o.y*n),width:Math.ceil(o.width*r),height:Math.ceil(o.height*n)};return i.width+i.x>r&&(i.width=r-i.x),i.height+i.y>n&&(i.height=n-i.y),{width:r,height:n,viewport:i}}async draw(r){let{width:n,height:o,viewport:i}=this.getSizeAndViewport();if(!(n<=0||o<=0)){this.plugin.animationLoop.stop({noDraw:!0});try{await r.update("Rendering image...");let a=this.imagePass;await a.updateBackground();let s=await a.getImageData(r,n,o,i);await r.update("Encoding image...");let c=this.canvas;c.width=s.width,c.height=s.height;let u=c.getContext("2d");if(!u)throw new Error("Could not create canvas 2d context");u.putImageData(s,0,0)}finally{this.plugin.animationLoop.start({immediate:!0})}}}copyToClipboardTask(){let r=navigator.clipboard;if(!r?.write){this.plugin.log.error("clipboard.write not supported!");return}return Q.create("Copy Image",async n=>{await this.draw(n),await n.update("Converting image...");let o=this.mimeType,i=await io(this.canvas,o,this.quality),a=new ClipboardItem({[o]:i});await r.write([a]),this.plugin.log.message("Image copied to clipboard.")})}get mimeType(){return`image/${this.values.format?.name??"png"}`}get extension(){return this.values.format?.name==="jpeg"?".jpg":`.${this.values.format?.name??"png"}`}get quality(){switch(this.values.format?.name){case"webp":case"jpeg":return this.values.format?.params?.quality??.9;default:return}}getImageDataUri(){return this.plugin.runTask(Q.create("Generate Image",async r=>(await this.draw(r),await r.update("Converting image..."),this.canvas.toDataURL(this.mimeType))))}getImageBlob(){return this.plugin.runTask(Q.create("Generate Image",async r=>(await this.draw(r),await r.update("Converting image..."),io(this.canvas,this.mimeType,this.quality))))}copyToClipboard(){let r=this.copyToClipboardTask();if(r)return this.plugin.runTask(r)}downloadTask(r){return Q.create("Download Image",async n=>{await this.draw(n),await n.update("Downloading image...");let o=await io(this.canvas,this.mimeType,this.quality);Wc(o,r??this.getFilename(this.extension))})}download(r){return this.plugin.runTask(this.downloadTask(r),{useOverlay:!0})}};var Hi=class{constructor(t){this.plugin=t;this.entries=[]}findConflict(t){let r=this.entries.find(n=>n.entry.name===t.name);if(r&&r.entry.handle!==t.handle)return`DragAndDropManager: a different handler is already registered under the name '${t.name}'.`}addEntry(t){let r=this.findConflict(t);if(r)throw new Error(r);let n=this.entries.find(o=>o.entry.name===t.name);n?n.count++:this.entries.push({entry:t,count:1})}removeEntry(t){let r=this.entries.findIndex(n=>n.entry.name===t.name&&n.entry.handle===t.handle);r>=0&&this.decrement(r)}addHandler(t,r,n){this.addEntry({name:t,handle:r,...n})}removeHandler(t){let r=this.entries.findIndex(n=>n.entry.name===t);r>=0&&this.decrement(r)}list(){return this.entries.map(t=>t.entry)}decrement(t){--this.entries[t].count<=0&&this.entries.splice(t,1)}async handle(t){await this.tryHandlers(t,!1)||Rv(this.plugin,t)||await this.tryHandlers(t,!0)}async tryHandlers(t,r){let n=this.entries.filter(o=>!!o.entry.fallback===r).map(o=>o.entry);for(let o=n.length-1;o>=0;o--)if(await n[o].handle(t,this.plugin))return!0;return!1}dispose(){this.entries.length=0}};function Rv(e,t){let r=t.filter(n=>{let o=n.name.toLowerCase();return o.endsWith(".molx")||o.endsWith(".molj")});return r.length===0?!1:(be.State.Snapshots.OpenFile(e,{file:r[0]}),!0)}var $i=class{constructor(){this.errors=Object.create(null)}get(t){return this.errors[t]??[]}add(t,r){t in this.errors&&Array.isArray(this.errors[t])?this.errors[t].push(r):this.errors[t]=[r]}clear(t){delete this.errors[t]}};var qi=class{constructor(t){this.options=t;let r=document.createElement("div");Object.assign(r.style,{position:"absolute",left:0,top:0,right:0,bottom:0,"-webkit-user-select":"none","user-select":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none","touch-action":"manipulation"});let n=t?.canvas;n||(n=document.createElement("canvas"),r.appendChild(n)),this.canvas=n,this.parent=r}mount(t){this.parent.parentElement!==t&&this.parent.parentElement?.removeChild(this.parent),t.appendChild(this.parent)}unmount(){this.parent.parentElement?.removeChild(this.parent)}};var Pv=["actions","animations","customFormats"],xf=class{constructor(t){this.spec=t;this.runTask=(t,r)=>this.managers.task.run(t,r);this.resolveTask=t=>{if(t)return Q.is(t)?this.runTask(t):t};this.subs=[];this.initCanvas3dPromiseCallbacks=[()=>{},()=>{}];this._isInitialized=!1;this.initializedPromiseCallbacks=[()=>{},()=>{}];this.disposed=!1;this.container=void 0;this.ev=Ur.create();this.config=new Gc(this.spec.config);this.state=new zc(this);this.commands=new Uc;this.canvas3dInit=this.ev.behavior(!1);this.behaviors={state:{isAnimating:this.ev.behavior(!1),isUpdating:this.ev.behavior(!1),isBusy:this.ev.behavior(!1)},interaction:{hover:this.ev.behavior({current:xe.Loci.Empty,modifiers:no.None,buttons:0,button:0}),click:this.ev.behavior({current:xe.Loci.Empty,modifiers:no.None,buttons:0,button:0}),drag:this.ev.behavior({current:xe.Loci.Empty,modifiers:no.None,buttons:0,button:0,pageStart:Qi(),pageEnd:Qi()}),key:this.ev.behavior(ma),keyReleased:this.ev.behavior(ma),selectionMode:this.ev.behavior(!1)},labels:{highlight:this.ev.behavior({labels:[]})},layout:{leftPanelTabName:this.ev.behavior("root")},canvas3d:{initialized:this.canvas3dInit.pipe(Ji(t=>!!t),ta(1))}};this.canvas3dInitialized=new Promise((t,r)=>{this.initCanvas3dPromiseCallbacks=[t,r]});this.initialized=new Promise((t,r)=>{this.initializedPromiseCallbacks=[t,r]});this.layout=new Vi(this);this.animationLoop=new zi(this);this.representation={structure:{registry:new Gi,themes:{colorThemeRegistry:Jn.createRegistry(),sizeThemeRegistry:eo.createRegistry()}},volume:{registry:new Ui,themes:{colorThemeRegistry:Jn.createRegistry(),sizeThemeRegistry:eo.createRegistry()}},particles:{registry:new ki,themes:{colorThemeRegistry:Jn.createRegistry(),sizeThemeRegistry:eo.createRegistry()}}};this.query={structure:{registry:new oi}};this.dataFormats=new ri;this.builders={data:new Qo(this),structure:void 0};this.helpers={substructureParent:new Ni(this),viewportScreenshot:void 0};this.managers={structure:{hierarchy:new un(this),component:new sn(this),measurement:new Ii(this),selection:new mi(this),focus:new fi(this)},volume:{hierarchy:new pn(this)},particles:{hierarchy:new dn(this)},interactivity:void 0,camera:new ai(this),animation:new ii(this),snapshot:new jc(this),lociLabels:void 0,toast:new ji(this),asset:new Ls,task:new mn,markdownExtensions:new Bi(this),dragAndDrop:new Hi(this)};this.events={log:this.ev(),task:this.managers.task.events,canvas3d:{settingsUpdated:this.ev(),backendChanged:this.ev()}};this.customModelProperties=new En.Registry;this.customStructureProperties=new En.Registry;this.customVolumeProperties=new En.Registry;this.customStructureControls=new Map;this.customImportControls=new Map;this.genericRepresentationControls=new Map;this.errorContext=new $i;this.customState=Object.create(null);this._graphicsBackends=[];this.handleResize=()=>{let t=this.canvas3dContext?.canvas,r=this.layout.root;r&&t&&(Ic(t,r,this.canvas3dContext.pixelScale),this.canvas3dContext.syncPixelScale(),this.canvas3d?.requestResize())};this.log={entries:Os(),entry:t=>this.events.log.next(t),error:t=>this.events.log.next(vn.error(t)),message:t=>this.events.log.next(vn.message(t)),info:t=>this.events.log.next(vn.info(t)),warn:t=>this.events.log.next(vn.warning(t))};this.fetch=As;this.warnedDefaultThemes=new Set;for(let r of Pv)if(t[r]!==void 0)throw new Error(`PluginSpec.${r} was removed in 6.0; use registry entries (see the migration guide)`);nc(this.config.get(Le.Structure.SaccharideCompIdMapType)??"default")}get isInitialized(){return this._isInitialized}build(){return this.state.data.build()}setCanvas3DProps(t){this.canvas3d&&(this.canvas3d.setProps(t),this.events.canvas3d.settingsUpdated.next(void 0))}setCanvas3DContextProps(t){this.canvas3dContext&&(this.canvas3dContext.setProps(t),this.events.canvas3d.settingsUpdated.next(void 0))}async initViewerAsync(t,r,n){return await this._initViewer(t,r,n)}async initContainerAsync(t){return await this._initContainer(t)}async mountAsync(t,r){return await this._mount(t,r)}_initContainer(t){return this.container?Promise.resolve(!0):(this.containerInit??=this._createContainer(t).finally(()=>{this.containerInit=void 0}),this.containerInit)}async _createContainer(t){let r=new qi({checkeredCanvasBackground:t?.checkeredCanvasBackground,canvas:t?.canvas3dContext?.canvas});return await this._initViewer(r.canvas,r.parent,t?.canvas3dContext)?(t?.checkeredCanvasBackground&&this.setCanvas3DProps({checkeredTransparentBackground:!0}),this.container=r,!0):!1}async _mount(t,r){if(this.disposed)throw new Error("Cannot mount a disposed context");return await this._initContainer(r)?(this.container?.mount(t),this.handleResize(),!0):!1}unmount(){this.container?.unmount()}async _initViewer(t,r,n){try{if(this.layout.setRoot(r),this.spec.layout&&this.spec.layout.initial&&this.layout.setProps(this.spec.layout.initial),!n){let a=this.config.get(Le.General.PreferWebGl1)||!1,s=this.config.get(Le.General.GraphicsBackends)??Va({preferWebGl1:a});if(this._graphicsBackends=s,n=await wc.create(t,this.managers.asset,s,{antialias:!(this.config.get(Le.General.DisableAntialiasing)??!1),preserveDrawingBuffer:!(this.config.get(Le.General.DisablePreserveDrawingBuffer)??!1),preferWebGl1:a,failIfMajorPerformanceCaveat:!(this.config.get(Le.General.AllowMajorPerformanceCaveat)??!1),powerPreference:this.config.get(Le.General.PowerPreference)||"high-performance",handleResize:this.handleResize},{pixelScale:this.config.get(Le.General.PixelScale)||1,pickScale:this.config.get(Le.General.PickScale)||.25,transparency:this.config.get(Le.General.Transparency)||"wboit",resolutionMode:this.config.get(Le.General.ResolutionMode)||"auto"}),this.disposed)return n.dispose(),!1}this.canvas3dContext=n,this.canvas3d=Lc.create(this.canvas3dContext),this.canvas3dInit.next(!0);let o=this.spec.canvas3d,i=16579577;return o?(o.renderer?.backgroundColor===void 0&&(o=Vs(o,a=>{a.renderer?a.renderer.backgroundColor=i:a.renderer={backgroundColor:i}})),this.setCanvas3DProps(o)):this.setCanvas3DProps({renderer:{backgroundColor:i}}),this.animationLoop.start(),this.helpers.viewportScreenshot=new Wi(this),this.subs.push(this.canvas3d.interaction.click.subscribe(a=>this.behaviors.interaction.click.next(a))),this.subs.push(this.canvas3d.interaction.drag.subscribe(a=>this.behaviors.interaction.drag.next(a))),this.subs.push(this.canvas3d.interaction.hover.subscribe(a=>this.behaviors.interaction.hover.next(a))),this.subs.push(this.canvas3d.input.resize.pipe(ea(50),ra(100,void 0,{leading:!1,trailing:!0})).subscribe(()=>this.handleResize())),this.subs.push(this.canvas3d.input.keyDown.subscribe(a=>this.behaviors.interaction.key.next(a))),this.subs.push(this.canvas3d.input.keyUp.subscribe(a=>this.behaviors.interaction.keyReleased.next(a))),this.subs.push(this.canvas3d.xr.isPresenting.subscribe(a=>this.log.info(`WebXR ${a?"enabled":"disabled"}`))),this.subs.push(this.canvas3d.xr.requestFailed.subscribe(a=>this.log.error(`WebXR request failed: ${a}`))),this.subs.push(this.layout.events.updated.subscribe(()=>requestAnimationFrame(()=>this.handleResize()))),this.subs.push(this.canvas3d.contextChanged.subscribe(({reason:a})=>{let s=this.canvas3d?.graphics.capabilities.backend;a==="fallback"?this.log.warn(`Graphics context lost, continuing with ${s}`):a==="restore"?this.log.info(`Graphics context restored (${s})`):this.log.info(`Graphics backend: ${s}`),this.events.canvas3d.backendChanged.next(void 0)})),this.handleResize(),Gr.setImmediate(()=>this.initCanvas3dPromiseCallbacks[0]()),!0}catch(o){return this.log.error(""+o),console.error(o),Gr.setImmediate(()=>this.initCanvas3dPromiseCallbacks[1](o)),!1}}get graphicsBackends(){return this._graphicsBackends}async setGraphicsBackends(t){return this.canvas3dContext?.setBackend?this.canvas3dContext.setBackend(t):!1}get isBusy(){return this.behaviors.state.isAnimating.value||this.behaviors.state.isUpdating.value}get selectionMode(){return this.behaviors.interaction.selectionMode.value}set selectionMode(t){this.behaviors.interaction.selectionMode.next(t)}dataTransaction(t,r){return this.runTask(this.state.data.transaction(t,r))}clear(t=!1){return t&&this.setCanvas3DProps(oo),be.State.RemoveObject(this,{state:this.state.data,ref:bn.RootRef})}dispose(t){if(!this.disposed){for(let r of this.subs)r.unsubscribe();this.subs=[],this.layout.dispose(),this.managers.markdownExtensions.audio.dispose(),this.animationLoop.dispose(),this.commands.dispose(),this.canvas3d?.dispose(),t?.doNotDisposeCanvas3DContext||this.canvas3dContext?.dispose(t),this.ev.dispose(),this.state.dispose(),this.helpers.substructureParent.dispose(),ot(this.managers,r=>r?.dispose?.()),ot(this.managers.structure,r=>r?.dispose?.()),ot(this.managers.volume,r=>r?.dispose?.()),this.unmount(),this.container=void 0,this.customState={},this.disposed=!0}}initBehaviorEvents(){this.subs.push(qn(this.state.data.behaviors.isUpdating,this.state.behaviors.behaviors.isUpdating).subscribe(a=>{this.behaviors.state.isUpdating.value!==a&&this.behaviors.state.isUpdating.next(a)}));let t=this.config.get(Le.General.IsBusyTimeoutMs)||750,r=this.behaviors.state.isBusy,n,o=()=>{r.value||r.next(!0)},i=()=>{n!==void 0&&clearTimeout(n),n=void 0};this.subs.push(qn(this.behaviors.state.isUpdating,this.behaviors.state.isAnimating).subscribe(a=>{let s=this.behaviors.state.isUpdating.value,c=this.behaviors.state.isAnimating.value;s||c?r.value||(i(),n=setTimeout(o,t)):(i(),r.next(!1))})),this.subs.push(this.behaviors.interaction.selectionMode.subscribe(a=>{a||this.managers.interactivity?.lociSelects.deselectAll()}))}initBuiltInBehavior(){Gn.State.registerDefault(this),Gn.Representation.registerDefault(this),Gn.Camera.registerDefault(this),Gn.Misc.registerDefault(this),this.subs.push(qn(this.state.data.events.log,this.state.behaviors.events.log).subscribe(t=>this.events.log.next(t)))}async initBehaviors(){let t=this.state.behaviors.build();for(let r of Object.keys(fr.Categories))t.toRoot().apply(fr.CreateCategory,{label:fr.Categories[r]},{ref:r,state:{isLocked:!0}});for(let r of this.spec.behaviors)fr.getCategoryId(r.transformer)==="custom-props"&&t.to(fr.getCategoryId(r.transformer)).apply(r.transformer,r.defaultParams,{ref:r.transformer.id});await this.runTask(this.state.behaviors.updateTree(t,{doNotUpdateCurrent:!0,doNotLogTiming:!0})),t=this.state.behaviors.build();for(let r of this.spec.behaviors)fr.getCategoryId(r.transformer)!=="custom-props"&&t.to(fr.getCategoryId(r.transformer)).apply(r.transformer,r.defaultParams,{ref:r.transformer.id});await this.runTask(this.state.behaviors.updateTree(t,{doNotUpdateCurrent:!0,doNotLogTiming:!0}))}register(t){if(!this.managers.interactivity||!this.managers.lociLabels||!this.builders.structure)throw new Error("PluginContext.register called before init()");let r=yf(this,t);return this._isInitialized&&this.checkDefaultThemes(),r}checkDefaultThemes(){if(!tr)try{bf(this,this.warnedDefaultThemes)}catch(t){this.log.error(`Default theme check failed: ${t}`)}}async init(){try{this.subs.push(this.events.log.subscribe(t=>this.log.entries=this.log.entries.push(t))),this.initBehaviorEvents(),this.initBuiltInBehavior(),this.managers.interactivity=new an(this),this.managers.lociLabels=new si(this),this.builders.structure=new ni(this),this.spec.registry?.length&&this.register(this.spec.registry),await this.initBehaviors(),this.log.message(`Mol* Plugin ${Nc}`),tr||this.log.message("Development mode enabled"),N&&this.log.message("Debug mode enabled"),this.checkDefaultThemes(),this._isInitialized=!0,this.initializedPromiseCallbacks[0]()}catch(t){throw this.initializedPromiseCallbacks[1](t),t}}};export{b1 as a,x1 as b,v1 as c,Zc as d,br as e,Xr as f,wr as g,Zr as h,It as i,oh as j,wo as k,bl as l,xa as m,va as n,Qr as o,Fd as p,zd as q,Wd as r,Zd as s,Qd as t,Yd as u,Ip as v,Ba as w,Va as x,Yo as y,PL as z,Ga as A,An as B,Ne as C,Ua as D,HL as E,$L as F,wn as G,iy as H,ay as I,uy as J,ly as K,Fp as L,za as M,hI as N,Bp as O,EI as P,wI as Q,LI as R,Na as S,Ko as T,kp as U,ja as V,rn as W,xy as X,Wp as Y,an as Z,Iy as _,Oy as $,Fy as aa,My as ba,By as ca,Vy as da,ky as ea,Gy as fa,Uy as ga,Yp as ha,Hy as ia,ci as ja,Qa as ka,qy as la,ui as ma,rm as na,Zy as oa,li as pa,im as qa,Yy as ra,Ya as sa,Ky as ta,di as ua,pi as va,lm as wa,rb as xa,In as ya,iM as za,aM as Aa,sn as Ba,lb as Ca,ln as Da,Vm as Ea,Di as Fa,_i as Ga,Ei as Ha,kn as Ia,Ai as Ja,jx as Ka,fs as La,rf as Ma,Mi as Na,gs as Oa,xf as Pa};
