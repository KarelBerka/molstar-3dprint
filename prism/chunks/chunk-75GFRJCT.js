import{a as Is}from"./chunk-KHBNYRDQ.js";import{G as Os,I as ao,M as qt,N as vn,O as Rt,P as oo,R as ro,S as io,a as Vt,b as Ya,c as Ds,e as Ns,f as b,g as Xa,h as ct,i as j,j as Ze,l as _a,m as Qa,n as Je,o as dt,p as Et,q as Za,r as Ja,s as eo,t as to,u as no,v as so}from"./chunk-GGDIKJEP.js";import{c as Ga,g as Ka,h as fn,q as Ua}from"./chunk-FY6Y25VJ.js";import{Aa as Wa,Ta as un,ea as Va,pb as Gn,qa}from"./chunk-ITHV5DKV.js";function lo(n,e){let t=n.listen;if(typeof t=="function")return t.call(n,e);if(!fn(n))throw new Error("listen: not a state or a stream");let s=!0,a=n.subscribe(()=>{s||e()});return s=!1,()=>a.unsubscribe()}var Kn=!1,bn=class{},Vs=class extends bn{constructor(t,s){super();this.stream=t;this.fn=s}#e;#n=!1;#a=!1;start(){if(this.#n||this.#a)return;this.#n=!0;let t=Kn,s=et.starting;Kn=!0,this.site&&(et.starting=this.site);try{this.#r()}finally{Kn=t,et.starting=s}}#r(){let t=this.stream;if(typeof t.listen=="function"){this.#e=t.listen(this.fn);let a=t.value;if(this.fn(a),!this.#n)return;let o=t.value;Object.is(o,a)||this.fn(o);return}let s=this.stream.subscribe(this.fn);this.#n?this.#e=s:s.unsubscribe()}stop(){this.#n=!1;let t=this.#e;this.#e=void 0,typeof t=="function"?t():t?.unsubscribe()}unsubscribe(){this.#a=!0,this.stop()}},et={},gn=[],mt=0,co=[],qs=[],Ws=0,mo=[],$s=!1;Ja.flush=()=>Ue();_a.after=()=>{if(Ue(),!$s){$s=!0;try{let n=qs,e=Ws;qs=mo,Ws=0,mo=n,uo(n,e)}finally{$s=!1}Ue()}};var Bs=new Int32Array(64),ci=[];function di(n,e){let t=!0,s=0;for(let r=0;r<e;r++){let i=n[r].depth;i>s&&(s=i),r>0&&i<n[r-1].depth&&(t=!1)}if(t)return;Bs.length<=s+1&&(Bs=new Int32Array(2*(s+1)));let a=Bs;a.fill(0,0,s+2);for(let r=0;r<e;r++)a[n[r].depth+1]++;for(let r=1;r<=s+1;r++)a[r]+=a[r-1];let o=ci;for(let r=0;r<e;r++){let i=n[r];o[a[i.depth]++]=i}for(let r=0;r<e;r++)n[r]=o[r],o[r]=void 0}function uo(n,e){di(n,e);for(let t=0;t<e;t++){let s=n[t];n[t]=void 0,s.queued&&(s.queued=!1,s.run())}}var Gs=!1,js=!1,mi=100;function pi(n){if(!n.queued){if(n.queued=!0,n.frame){qs[Ws++]=n,Qa();return}gn[mt++]=n,!Gs&&(Gs=!0,queueMicrotask(hi))}}function hi(){Gs=!1,Ue()}function Ue(){if(!js){js=!0;try{for(let n=0;mt>0||to("task");n++){if(n===mi){console.error("watch: renders kept marking watches (a render sets what it watches?); dropped",mt);for(let s=0;s<mt;s++)gn[s].queued=!1,gn[s]=void 0;mt=0,eo();break}if(no("task"),mt===0)continue;let e=gn,t=mt;gn=co,mt=0,co=e,uo(e,t)}}finally{js=!1}}}var Ks=class extends bn{constructor(t,s,a){super();this.depth=t;this.#r=!1;this.#t=!1;this.queued=!1;this.frame=!1;this.#o=()=>{this.#r&&(this.because?.add(Ds.source),pi(this))};this.#e=s,this.#n=a,this.frame=ho(s)}#e;#n;#a;#r;#t;#o;retarget(t){if(this.#t)return;let s=this.#r;this.stop(),this.#e=vo(t),this.frame=ho(this.#e),s&&this.start()}start(){if(this.#r||this.#t)return;this.#r=!0;let t=this.#e,s=new Array(t.length),a=et.starting;this.site&&(et.starting=this.site);try{for(let o=0;o<t.length;o++)s[o]=lo(t[o],this.#o)}finally{et.starting=a}this.#a=s,this.run()}run(){if(!this.#r)return;Ya.render++;let t=nt;nt=void 0;try{this.#n()}catch(s){console.error(s)}finally{nt=t}}stop(){this.#r=!1,this.queued=!1;let t=this.#a;if(this.#a=void 0,t)for(let s=0;s<t.length;s++)t[s]()}unsubscribe(){this.#t=!0,this.stop()}},yn=class n{#e;#n;#a;#r=!1;#t=!1;#o=!0;#s=!0;#i;constructor(e){this.#e=e,this.depth=e?e.depth+1:0,this.#s=e?e.#s:!0}get active(){return this.#s}setActive(e){this.#o!==e&&(this.#o=e,this.#h())}#h(){if(this.#r)return;let e=this.#o&&(this.#e?this.#e.#s:!0);if(e===this.#s)return;this.#s=e,e&&this.#u(!0),this.#f(e),e||this.#u(!1);let t=this.#n;if(t)for(let s of t)s.#h()}#u(e){let t=this.#a;if(t)for(let s=0;s<t.length;s++){let a=t[s];a instanceof bn&&(e?a.start():a.stop())}}#f(e){let t=this.#i;if(t)for(let s=0;s<t.length;s++)try{t[s](e)}catch(a){console.error(a)}}onActive(e){if(!this.#r){(this.#i??=[]).push(e);try{e(this.#s)}catch(t){console.error(t)}}}follow(e){let t=De(e);t?this.own(t.subscribe(s=>this.setActive(!!s))):this.setActive(!!e)}bind(e,t,s=!1){let a=et.on,o=s?void 0:et.run,r=o?new Error().stack??"":"",i=o?p=>o("write",r,[Kn?void 0:Ds.source],()=>t(p)):t,c=new Vs(e,a?p=>{a("write",this),i(p)}:i);o&&(c.site=r),this.own(c),this.#s&&c.start()}watch(e,t){let s=vo(e),a=et.on,o=et.run,r=o?new Error().stack??"":"",i,c=o?()=>{let p=i.because.size?[...i.because]:[void 0];i.because.clear(),o("render",r,p,t)}:t;return i=new Ks(this.depth,s,a?()=>{a("render",this),c()}:c),o&&(i.because=new Set,i.site=r),this.own(i),this.#s&&i.start(),i}get disposed(){return this.#r}child(){let e=new n(this);return this.#r?e.dispose():(this.#n??=new Set).add(e),e}onCleanup(e){if(this.#r){po(e);return}(this.#a??=[]).push(e)}own(e){if(this.#r){e.unsubscribe();return}(this.#a??=[]).push(e)}dispose(){if(this.#r)return;this.#r=!0,this.#t=!0,this.#i=void 0;let e=this.#n;if(e){let a=[...e];for(let o=a.length-1;o>=0;o--)a[o].dispose();this.#n=void 0}let t=this.#a;if(this.#a=void 0,t)for(let a=t.length-1;a>=0;a--){let o=t[a];typeof o=="function"?po(o):o.unsubscribe()}let s=this.#e;s&&!s.#t&&s.#n?.delete(this)}};function po(n){try{n()}catch(e){console.error(e)}}var nt;function Un(){return nt}function ge(n="A binding"){if(!nt)throw new Error(`${n} was created outside a render scope; render with \`render\` or in an element.`);return nt}function Ae(n,e){let t=nt;nt=n;try{return e()}finally{nt=t}}function te(n){ge("onCleanup").onCleanup(n)}function fo(n){let e=new yn;return Ae(e,()=>n(()=>e.dispose()))}function De(n){if(fn(n))return n;if(n&&typeof n=="object"&&"asReadonly"in n&&fn(n.asReadonly))return n.asReadonly}function Wt(n){ge("onActive").onActive(n)}function he(n,e){let t=De(n);if(!t){e(n);return}ge().bind(t,e)}function D(n,e){return ge("watch").watch(n,e)}function Me(n,e){let t=De(n);if(!t){e(n);return}ge("effect").bind(t,e,!0)}function ho(n){for(let e=0;e<n.length;e++)if(n[e].frameLane===!0)return!0;return!1}function Ve(n,e){let t=new Za(n,e);return Un()?.onCleanup(()=>t.dispose()),t}function vo(n){let e=[];for(let t of n){let s=De(t)??(typeof t.listen=="function"?t:void 0);s&&e.push(s)}return e}var ui="http://www.w3.org/2000/svg",fi=new Set(["svg","animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","tspan","use","view"]),vi=new Set(["list","form","download","role","width","height"]),xo=Symbol("Passthrough");function wo(n,e){if(typeof n=="function"){let a=n(e??{});return a&&typeof a=="object"&&xo in a?a:Ys(a)}let t=fi.has(n),s=t?document.createElementNS(ui,n):document.createElement(n);if(e){let a=n==="select"&&"value"in e;yo(s,e,t,n.includes("-"),a);let o=e.children;typeof o=="string"||typeof o=="number"?s.textContent=String(o):o!==void 0&&qe(s,o,null),a&&yo(s,{value:e.value},t,!1),typeof e.ref=="function"&&e.ref(s)}return s}function ye(n){let e=document.createDocumentFragment();return qe(e,n.children,null),e}function Ys(n){if(n instanceof Node)return n;let e=document.createDocumentFragment();return qe(e,n,null),e}function qe(n,e,t){if(!(e==null||typeof e=="boolean"))if(e instanceof Node)n.insertBefore(e,t);else if(Array.isArray(e))for(let s of e)qe(n,s,t);else if(typeof e=="function")qe(n,e(),t);else if(typeof e=="object"){let s=De(e);s?Xs(n,s,t):console.warn("Cannot render",e)}else n.insertBefore(document.createTextNode(String(e)),t)}function gi(n){let e=typeof n;return n===null||e==="undefined"||e==="string"||e==="number"||e==="bigint"||e==="boolean"}function Xs(n,e,t,s=!1){let a=ge("A reactive child"),o=document.createTextNode("");n.insertBefore(o,t);let r,i,c,p;he(e,d=>{if(s&&typeof d=="function"&&d===p)return;if(p=d,gi(d)){let f=d==null||typeof d=="boolean"?"":String(d);if(o){o.data!==f&&(o.data=f);return}h(),o=document.createTextNode(f),i.parentNode.insertBefore(o,i);return}if(!r){r=document.createComment(""),i=document.createComment("");let f=o;f.parentNode.insertBefore(r,f),f.parentNode.insertBefore(i,f.nextSibling)}o&&(o.remove(),o=void 0),h();let m=a.child();c=m;let u=document.createDocumentFragment();Ae(m,()=>qe(u,d,null)),i.parentNode.insertBefore(u,i)});function h(){c?.dispose(),c=void 0,r&&i&&wn(r,i)}}function wn(n,e){let t=n.parentNode;if(!t)return;let s=n.nextSibling;for(;s&&s!==e;){let a=s.nextSibling;t.removeChild(s),s=a}}var ko=new Set(["click","dblclick","contextmenu","input","change","beforeinput","keydown","keyup","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","mousedown","mouseup","mousemove","mouseover","mouseout","focusin","focusout"]),_s=Symbol("handlers"),Yn=Symbol("walked"),go=new WeakSet,bo=new Map;function Mo(n){if(!go.has(n)){go.add(n);for(let e of ko)n.addEventListener(e,yi),n.addEventListener(e,bi,!0)}}function bi(n){if(n.bubbles||n[Yn])return;n[Yn]=n.currentTarget;let e=n.target,t=e[_s]?.[n.type];if(t){Object.defineProperty(n,"currentTarget",{configurable:!0,value:e});try{t.call(e,n)}finally{delete n.currentTarget,Ue()}}}function yi(n){if(!n.bubbles)return;let e=n.currentTarget,t=n.composedPath(),s=t.indexOf(e);if(s<0)return;let a=n[Yn],o=a?t.indexOf(a):-1,r=!1;try{for(let i=a?o<0?s+1:o+1:0;i<=s;i++){let c=t[i],p=c[_s]?.[n.type];if(p&&(Object.defineProperty(n,"currentTarget",{configurable:!0,value:c}),r=!0,p.call(c,n),n.cancelBubble))break}}finally{n[Yn]=e,r&&(delete n.currentTarget,Ue())}}function xi(n,e,t){if(!ko.has(e)){n.addEventListener(e,t);return}(n[_s]??={})[e]=t,typeof document<"u"&&Mo(document)}var Us=n=>n===null||typeof n!="object"&&typeof n!="function";function yo(n,e,t,s,a=!1){let o;for(let r in e){let i=e[r];if(!(r==="children"||r==="ref"||i===void 0||a&&r==="value")){if(r==="class"&&typeof i=="string"&&e.classList===void 0){i&&n.setAttribute("class",i);continue}if(r.startsWith("on:"))n.addEventListener(r.slice(3),i);else if(r.length>2&&r.startsWith("on")&&r.charCodeAt(2)<91&&typeof i=="function"){let c=bo.get(r);c===void 0&&bo.set(r,c=r.slice(2).toLowerCase()),xi(n,c,i)}else if(r==="class"||r==="className")o??=new Xn(n),he(i,c=>o.setBase(c));else if(r==="classList"){o??=new Xn(n);for(let c of Object.keys(i))he(i[c],p=>o.setFlag(c,!!p))}else if(r==="style")wi(n,i);else if(r.startsWith("attr:")){let c=r.slice(5);he(i,p=>xn(n,c,p))}else if(r.startsWith("prop:")){let c=r.slice(5);he(i,p=>{n[c]=p})}else if(t||r.includes("-"))Us(i)?xn(n,r,i):he(i,c=>xn(n,r,c));else if(s)he(i,c=>{n[r]=c});else if(r in n&&!vi.has(r)){if(Us(i)){n[r]=i===null?"":i,(i===null||i===!1)&&n.removeAttribute(r);continue}he(i,c=>{n[r]=c??"",(c==null||c===!1)&&n.removeAttribute(r)})}else Us(i)?xn(n,r,i):he(i,c=>xn(n,r,c))}}}function xn(n,e,t){typeof t=="boolean"&&e.startsWith("aria-")?n.setAttribute(e,String(t)):t==null||t===!1?n.removeAttribute(e):n.setAttribute(e,t===!0?"":String(t))}var Xn=class{constructor(e){this.el=e}#e="";#n=new Map;setBase(e){this.#e=e??"",this.#a()}setFlag(e,t){this.#n.set(e,t),this.#a()}#a(){let e=this.#e;for(let[t,s]of this.#n)s&&(e=e?`${e} ${t}`:t);e?this.el.setAttribute("class",e):this.el.removeAttribute("class")}};function wi(n,e){if(typeof e=="string"||De(e)){he(e,s=>{s?n.setAttribute("style",s):n.removeAttribute("style")});return}let t=e;for(let s of Object.keys(t)){let a=s.startsWith("--")||s.includes("-")?s:Mi(s),o=!a.startsWith("--")&&!ki.has(a);he(t[s],r=>{r==null||r===""?n.style.removeProperty(a):n.style.setProperty(a,typeof r=="number"&&o&&r!==0?`${r}px`:String(r))})}}var ki=new Set(["opacity","z-index","flex","flex-grow","flex-shrink","order","line-height","font-weight","zoom","aspect-ratio","scale","fill-opacity","stroke-opacity","stroke-width","grid-row","grid-column","tab-size","orphans","widows","columns","column-count"]);function Mi(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Qs(n,e,t){Mo(e);let s=t?t.child():new yn,a=document.createComment(""),o=document.createComment(""),r=document.createDocumentFragment();return r.append(a),Ae(s,()=>qe(r,n(),null)),r.append(o),e.appendChild(r),()=>{s.dispose(),wn(a,o),a.remove(),o.remove()}}function _n(n,e){if(typeof n.animate!="function"||!n.isConnected||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let t=getComputedStyle(n),s=t.getPropertyValue("--msp-ease-reveal").trim()||"ease";if(e==="fade"){let r=So(t.getPropertyValue("--msp-motion-fade"))||360;return n.animate([{opacity:1},{opacity:0}],{duration:r,easing:s,fill:"forwards"})}let a=So(t.getPropertyValue("--msp-motion-base"))||220,o=e==="side"?[{opacity:1,translate:"0 0"},{opacity:0,translate:"12px 0"}]:[{height:`${n.getBoundingClientRect().height}px`,opacity:1,overflow:"clip"},{height:"0px",paddingBlock:"0px",marginBlock:"0px",opacity:0,overflow:"clip"}];return n.animate(o,{duration:a,easing:s,fill:"forwards"})}function Co(n,e){let t=n?.startViewTransition;if(!n?.isConnected||typeof t!="function"||globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches){e();return}t.call(n,e)}function So(n){let e=n.trim(),t=Number.parseFloat(e);return e.endsWith("ms")?t:e.endsWith("s")?t*1e3:t}function Si(n){return De(n)??Ka(n)}function Ci(n){let e=document.createDocumentFragment();return Xs(e,n,null,!0),e}function P(n){let e=!0,t=!1,s=[],a,o,r=(i,c)=>()=>{let p=n.children(i);if(s=na(p),c)for(let h of s)h.setAttribute("data-reveal",n.reveal===!0?"":String(n.reveal));return p};return Ci(new Ga(i=>{let c,p=!0,h=Si(n.when).pipe(Ua()).subscribe(d=>{if(c)for(let C of c)C.cancel();c=void 0;let m=t,u=!e&&!m&&!!d,f=!e&&m&&!d;e=!1,t=!!d;let v=p;if(p=!1,d){if(!(m&&o&&(Object.is(d,a)||v&&Vt(d,a)))&&(a=d,o=r(d,!!n.reveal&&u),m&&n.swap)){let E=o;Co(n.swap(),()=>{o===E&&i.next(E)});return}i.next(o);return}a=o=void 0;let g=n.reveal===!0?"grow":n.reveal,x=f&&g?s.map(C=>_n(C,g)):[];if(x.length===0||x.some(C=>!C)){i.next(n.fallback??null);return}let M=x;c=M;for(let C of s)Zs(C,!0);Promise.all(M.map(C=>C.finished)).then(()=>{c!==M||i.closed||(c=void 0,i.next(n.fallback??null))},()=>{})});return()=>{if(h.unsubscribe(),c)for(let d of c)d.cancel()}}))}function Zs(n,e){n.toggleAttribute("inert",e)}function pt(n,e){let t=ge("activity"),s=t.child();s.follow(n);let a=Ae(s,e),o=na(a),r=De(n);if(r)o.length>0&&t.own(r.subscribe(i=>{for(let c of o)Zs(c,!i)}));else if(!n)for(let i of o)Zs(i,!0);return a}function na(n){return n instanceof Element?[n]:n instanceof DocumentFragment?[...n.children]:Array.isArray(n)?n.flatMap(e=>na(e)):[]}var Ti=12,Eo=64,Lt=0,Js=0,ea=new Set,ta=!1,To="auto";function Ei(){return To!=="auto"?To:typeof document<"u"&&!/jsdom/i.test(globalThis.navigator?.userAgent??"")}function kn(){return Ei()?(Lt===0&&(Lt=performance.now()+Ti,Js=0,queueMicrotask(()=>{Lt=0})),++Js<=Eo||performance.now()<Lt):!0}function Qn(n){ea.add(n),!ta&&(ta=!0,Wa.setImmediate(Ri))}function Ri(){ta=!1,Lt=0;let n=[...ea];ea.clear();for(let e of n)Li()?Qn(e):e()}function Li(){return Lt!==0&&Js>Eo&&performance.now()>=Lt}function ie(n){let e=ge("For"),t=n.by??n.key??(A=>A),s=document.createComment("for"),a=document.createComment("/for"),o=document.createDocumentFragment();o.append(s,a);let r=new Map,i,c=!1,p=n.children.length>1,h=(A,S,N)=>{let w=e.child(),T=p?j(N):void 0,I=document.createDocumentFragment();Ae(w,()=>qe(I,n.children(S,T?.asReadonly),null));let $,Y;return I.childNodes.length===1&&I.firstChild.nodeType===Node.ELEMENT_NODE?$=Y=I.firstChild:($=document.createComment(""),Y=document.createComment(""),I.insertBefore($,I.firstChild),I.appendChild(Y)),{key:A,item:S,scope:w,index:T,first:$,last:Y,pos:-1,at:N}},d=A=>{let S=[A.first],N=A.first;for(;N!==A.last&&(N=N.nextSibling);)S.push(N);return S},m=A=>{A.scope.dispose();for(let S of d(A))S.parentNode?.removeChild(S)},u=[],f,v=!1,g=!1;te(()=>{g=!0});let x=()=>{v||(v=!0,Qn(()=>{v=!1,!(g||!e.active)&&(f?.items===u?O(f):E(u))}))},M=[],C=A=>{let S=A.length;if(S===0||S!==M.length)return!1;for(let N=0;N<S;N++)if(M[N].item!==A[N])return!1;return!0},E=A=>{if(u=A,f=void 0,C(A))return;let S=a.parentNode;if(A.length===0&&r.size>0){for(let R of r.values())R.scope.dispose();r=new Map;let W=document.createRange();W.setStartAfter(s),W.setEndBefore(a),W.deleteContents()}let N=new Map,w=[],T,I;for(let W=0;W<A.length;W++){let R=A[W],U=t(R);if(N.has(U)){c||(c=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",U));continue}let J=r.get(U);if(J&&J.item!==R&&(m(J),J=void 0),!J){if(!kn()){(T??=[]).push(W),(I??=[]).push(U);continue}J=h(U,R,W)}J.index?.set(W),J.at=W,N.set(U,J),w.push(J)}for(let[W,R]of r)N.has(W)||m(R);r=N;let $=Pi(w),Y=a;for(let W=w.length-1;W>=0;W--){let R=w[W];if(!$[W]||R.last.parentNode!==S)for(let U of d(R))S.insertBefore(U,Y);Y=R.first}for(let W=0;W<w.length;W++)w[W].pos=w[W].at;if(M=T?[]:w,w.length===0&&n.fallback&&!i){i=e.child();let W=document.createDocumentFragment();Ae(i,()=>qe(W,n.fallback(),null)),S.insertBefore(W,a)}else w.length>0&&i&&(i.dispose(),i=void 0,wn(s,w[0].first));T&&(f=F(A,w,T,I),x())},F=(A,S,N,w)=>{let T=new Array(N.length);for(let $=N.length-1,Y=S.length-1,W=a;$>=0;$--){for(;Y>=0&&S[Y].at>N[$];)W=S[Y--].first;T[$]=W}let I=new Array(A.length);for(let $ of S)I[$.at]=$;return{items:A,at:N,keys:w,before:T,slots:I,next:0}},O=A=>{let S=a.parentNode,N;for(;A.next<A.at.length;A.next++){let T=A.at[A.next],I=A.keys[A.next];if(r.has(I)){c||(c=!0,console.warn("For: duplicate key; later items with the same key are not rendered.",I));continue}if(!kn())break;let $=h(I,A.items[T],T);$.pos=T,r.set(I,$),A.slots[T]=$;let Y=A.before[A.next];for(let W of d($))S.insertBefore(W,Y);N??=$}if(N&&i&&(i.dispose(),i=void 0,wn(s,N.first)),A.next<A.at.length){x();return}f=void 0;let w=[];for(let T of A.slots)T&&w.push(T);M=w};return he(n.each,E),o}function Pi(n){let e=n.length,t=new Array(e).fill(!1),s=!0;for(let r=0,i=-1;r<e;r++){let c=n[r].pos;if(!(c<0)){if(c<i){s=!1;break}i=c}}if(s){for(let r=0;r<e;r++)t[r]=n[r].pos>=0;return t}let a=[],o=new Int32Array(e).fill(-1);for(let r=0;r<e;r++){let i=n[r].pos;if(i<0)continue;let c=0,p=a.length;for(;c<p;){let h=c+p>>1;n[a[h]].pos<i?c=h+1:p=h}c>0&&(o[r]=a[c-1]),a[c]=r}for(let r=a.length?a[a.length-1]:-1;r>=0;r=o[r])t[r]=!0;return t}function ym(n){return{mount:(e,t,s)=>Qs(()=>n({ctx:t}),e,s)}}var Ai="@layer msp.reset, msp.theme, msp.components, msp.overrides;",oa=new Map,Gt=new Set,sa=new Map,Zn=new Map,aa=!1;function zi(){aa||(aa=!0,queueMicrotask(()=>{aa=!1;for(let n of Gt)n()}))}function _(n,e){oa.get(n)!==e&&(oa.set(n,e),Gt.size&&zi())}function Ro(){return[Ai,...oa.values()].join(`
`)}function wm(n=document){let e=Zn.get(n);if(e){e.users++;return}let t=Lo(n)?n:n.ownerDocument,s=t.defaultView,a;if(s&&"adoptedStyleSheets"in n&&typeof s.CSSStyleSheet?.prototype.replaceSync=="function"){let o=sa.get(t);if(!o){let i=new s.CSSStyleSheet,c=()=>i.replaceSync(Ro());c(),o={sheet:i,update:c,users:0},sa.set(t,o),Gt.add(c)}let r=o;r.users++,n.adoptedStyleSheets=[...n.adoptedStyleSheets,r.sheet],a=()=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(i=>i!==r.sheet),!(--r.users>0)&&(sa.delete(t),Gt.delete(r.update))}}else{let o=t.createElement("style");o.setAttribute("data-msp-styles",""),Lo(n)?n.head.appendChild(o):n.prepend(o);let r=()=>{o.textContent=Ro()};r(),Gt.add(r),a=()=>{o.remove(),Gt.delete(r)}}Zn.set(n,{users:1,remove:a})}function km(n){let e=Zn.get(n);!e||--e.users>0||(e.remove(),Zn.delete(n))}function Lo(n){return n.nodeType===9}var ra={icon:"msp-icon-icon"};_("components/icon/icon.module.css",`@layer msp.components {
.msp-icon-icon {
  flex-shrink: 0;
}
}
`);var Po={"align-left":'<path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/>',"app-window":'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/>',"arrow-down":'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',"arrow-up":'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',"axis-3d":'<path d="M13.5 10.5 15 9"/><path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="M4.293 19.707 6 18"/><path d="m9 15 1.5-1.5"/>',ban:'<circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>',"book-open":'<path d="M12 5v16"/><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"/>',bot:'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',camera:'<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',"chart-gantt":'<path d="M10 6h8"/><path d="M12 16h6"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 11h7"/>',check:'<path d="M20 6 9 17l-5-5"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-up":'<path d="m18 15-6-6-6 6"/>',"chevrons-left":'<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',"chevrons-right":'<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',"circle-alert":'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',"circle-help":'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',clapperboard:'<path d="m12.296 3.464 3.02 3.956"/><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m6.18 5.276 3.1 3.899"/>',clipboard:'<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',"cloud-upload":'<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',command:'<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',crop:'<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',ellipsis:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',"ellipsis-vertical":'<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',eye:'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',"eye-off":'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',file:'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/>',"file-code":'<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/>',film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',focus:'<circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"folder-open":'<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',fullscreen:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/>',gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',glasses:'<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',"grip-vertical":'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',history:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',hourglass:'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',images:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',keyboard:'<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',layers:'<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',"list-restart":'<path d="M21 5H3"/><path d="M7 12H3"/><path d="M7 19H3"/><path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/>',"list-tree":'<path d="M8 5h13"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/>',"loader-circle":'<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',locate:'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',"maximize-2":'<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',minus:'<path d="M5 12h14"/>',"monitor-cog":'<path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/>',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',"mouse-pointer-2":'<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>',"mouse-pointer-click":'<path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>',"move-3d":'<path d="M5 3v16h16"/><path d="m5 19 6-6"/><path d="m2 6 3-3 3 3"/><path d="m18 16 3 3-3 3"/>',orbit:'<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>',paintbrush:'<path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>',palette:'<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',"panel-bottom":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/>',"panel-left":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',"panel-right":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/>',"panel-top":'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>',pause:'<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',play:'<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',"redo-2":'<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',"refresh-cw":'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',"rotate-3d":'<path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"/><path d="M21.79796 11 A 10 5 0 1 0 19 15.57071"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',save:'<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',"scroll-text":'<path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',settings:'<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',shapes:'<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',"share-2":'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',"skip-back":'<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M3 20V4"/>',"skip-forward":'<path d="M21 4v16"/><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>',"sliders-horizontal":'<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',square:'<rect width="18" height="18" x="3" y="3" rx="2"/>',"squares-exclude":'<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"/><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/>',"squares-intersect":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M14 2a2 2 0 0 1 2 2"/><path d="M16 22h-2"/><path d="M2 10V8"/><path d="M2 4a2 2 0 0 1 2-2"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/><path d="M4 16a2 2 0 0 1-2-2"/><path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"/><path d="M8 2h2"/>',"squares-subtract":'<path d="M10 22a2 2 0 0 1-2-2"/><path d="M16 22h-2"/><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"/><path d="M20 8a2 2 0 0 1 2 2"/><path d="M22 14v2"/><path d="M22 20a2 2 0 0 1-2 2"/>',"squares-unite":'<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/>',"step-back":'<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/><path d="M21 20V4"/>',"step-forward":'<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/><path d="M3 4v16"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',"sun-moon":'<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',"swatch-book":'<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>',tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',"text-cursor-input":'<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"/><path d="M9 6v12"/>',"toggle-right":'<circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/>',"trash-2":'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',"undo-2":'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',upload:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',"volume-2":'<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',"volume-x":'<path d="M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"/><path d="m16.5 14.5 5-5"/><path d="m16.5 9.5 5 5"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',"zoom-in":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',"zoom-out":'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>'};var Ao={"ball-and-stick":'<circle cx="5" cy="18" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="19" cy="17" r="2.5"/><path d="m6.3 15.8 4.2-7.2"/><path d="m13.6 8.5 4 6.4"/>',cartoon:'<path d="M3 15c3-10 6-10 9 0s6 10 9 0"/><path d="M3 9c3 10 6 10 9 0s6-10 9 0"/>',ligand:'<path d="M10 7l5.2 3v6L10 19l-5.2-3v-6z"/><path d="m15.2 10 3.5-2"/><circle cx="20" cy="7" r="1.5"/>',snapshots:'<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h12"/><path d="M13 6.4l2.6 1.5v3L13 12.4l-2.6-1.5v-3z"/><path d="m15.6 10.9 1.6 1"/><circle cx="18.1" cy="12.5" r="1.1"/>',"measure-distance":'<path d="M3 6v12M21 6v12M3 12h18M7 9l-4 3 4 3M17 9l4 3-4 3"/>',"measure-angle":'<path d="M4 20h17M4 20 17 6M12 20a8 8 0 0 0-2.54-5.85"/>',sequence:'<rect x="2" y="9" width="5" height="8" rx="1"/><rect x="9.5" y="9" width="5" height="8" rx="1"/><rect x="17" y="9" width="5" height="8" rx="1"/><path d="M4.5 4v2M12 4v2M19.5 4v2"/>',kinemage:'<circle cx="6.5" cy="15.5" r="4"/><circle cx="17.5" cy="8.5" r="4"/><path d="M10 9h.01M12.5 11.5h.01M15 14h.01M9 12h.01M14.5 17h.01M11.5 15h.01"/>',structure:'<circle cx="12" cy="8" r="5"/><circle cx="7.5" cy="15.5" r="5"/><circle cx="16.5" cy="15.5" r="5"/>',spacefill:'<circle cx="9" cy="10" r="6"/><circle cx="16" cy="15" r="5"/>',surface:'<path d="M12 3c3 0 4 2 7 3s3 4 2 7-1 5-4 6-5 3-8 2-6-3-6-6 0-5 2-7 4-5 7-5z"/><path d="M9 11.5c1.5-2 4-2 6 0"/>',superpose:'<path d="M9.5 3.5l5.63 3.25v6.5L9.5 16.5l-5.63-3.25v-6.5z"/><path d="M14.5 7.5l5.63 3.25v6.5L14.5 20.5l-5.63-3.25v-6.5z"/>',trajectory:'<rect x="3" y="10" width="12" height="11" rx="2"/><path d="M6 7h10a2 2 0 0 1 2 2v9"/><path d="M9 4h10a2 2 0 0 1 2 2v9"/>',volume:'<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M8.5 12.5c0-2.5 2-4 3.5-4s3.5 1.5 3.5 4-1.5 3-3.5 3-3.5-.5-3.5-3z"/>',prism:'<path stroke-linejoin="miter" d="M12 3 21.5 19.5h-19z"/><path stroke-width="2.6" stroke-linejoin="miter" d="M12 11.2 14.6 15.7H9.4z"/>',molstar:'<path stroke-linejoin="miter" d="M9.7 1.4h4.6v5.05l3.57-3.57 3.25 3.25-3.57 3.57h5.05v4.6h-5.05l3.57 3.57-3.25 3.25-3.57-3.57v5.05H9.7v-5.05l-3.57 3.57-3.25-3.25 3.57-3.57H1.4V9.7h5.05L2.88 6.13l3.25-3.25 3.57 3.57z"/>',"pick-atom":'<circle cx="12" cy="12" r="4"/>',"pick-residue":'<path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5z"/>',"pick-chain":'<circle cx="5" cy="15" r="2.5"/><circle cx="12" cy="9" r="2.5"/><circle cx="19" cy="15" r="2.5"/><path d="m7 13.3 3-2.6M14 10.7l3 2.6"/>',"pick-entity":'<circle cx="6" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="12" cy="16" r="2"/><circle cx="18" cy="16" r="2"/>',"pick-model":'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>'};var Hi="http://www.w3.org/2000/svg",Fi=18,Ii={...Po,...Ao},zo=new Map;function Di(n){let e=zo.get(n);if(e)return e;let t=Ii[n];if(t===void 0)throw new Error(`Unknown icon "${n}"`);return e=document.createElementNS(Hi,"svg"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.setAttribute("stroke","currentColor"),e.setAttribute("stroke-width","2"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-linejoin","round"),e.setAttribute("focusable","false"),e.innerHTML=t,zo.set(n,e),e}function H(n){let e=Di(n.name).cloneNode(!0),t=String(n.size??Fi);return e.setAttribute("width",t),e.setAttribute("height",t),e.setAttribute("class",n.class?`${ra.icon} ${n.class}`:ra.icon),n.label!==void 0?(e.setAttribute("role","img"),e.setAttribute("aria-label",n.label)):e.setAttribute("aria-hidden","true"),e}function l(n,e,t){return wo(n,e)}var y=l;function G(n,e,t,s){let a=ge("on"),o=!1,r=!1,i=t,c=h=>{r||h===o||(o=h,h?n.addEventListener(e,i,s):n.removeEventListener(e,i,s))};a.onActive(c);let p=()=>{c(!1),r=!0};return a.onCleanup(p),p}function ze(n,e){if(typeof ResizeObserver>"u")return;let t=new ResizeObserver(e);return n&&t.observe(n),ge("observeResize").onCleanup(()=>t.disconnect()),t}function Ho(n,e,t){if(typeof IntersectionObserver>"u")return;let s=new IntersectionObserver(e,t);return s.observe(n),ge("observeIntersection").onCleanup(()=>s.disconnect()),s}function Jn(n){let e=ge("frame"),t=!1,s=0,a=!1,o=!1,r=c=>{if(!(t||e.disposed)){if(!e.active){a=!0,o||(o=!0,e.onActive(p=>{!p||!a||t||(a=!1,s=Je(r))}));return}t=!0,n(c)}};s=Je(r);let i=()=>{t||(t=!0,dt(s))};return e.onCleanup(i),i}function Om(n,e){let t=setTimeout(n,e),s=()=>clearTimeout(t);return ge("timeout").onCleanup(s),s}function Kt(n){let e=ge("restartable"),t,s=0,a=!1,o=()=>{clearTimeout(t),t=setTimeout(()=>{t=void 0,a=!1,n()},s)},r=()=>{clearTimeout(t),t=void 0,a=!1};return e.onActive(i=>{i?a&&o():(clearTimeout(t),t=void 0)}),e.onCleanup(r),{start(i){s=i,a=!0,e.active&&o()},cancel:r}}function $m(n){let e=so(n),t=ge("workQueue");return t.onActive(s=>e.setActive(s)),t.onCleanup(()=>e.dispose()),e}function ht(n,e){let t=ge("drag"),s,a=-1,o=(r,i)=>{if(s===void 0)return;let c=s;if(s=void 0,a>=0&&"releasePointerCapture"in n)try{n.hasPointerCapture?.(a)&&n.releasePointerCapture(a)}catch{}a=-1,e.end?.(c,r,i)};return G(n,"pointerdown",r=>{if(s!==void 0){if(r.pointerId!==a&&n.hasPointerCapture?.(a))return;o("cancel",r)}let i=e.start(r);if(i!==void 0){s=i,a=r.pointerId;try{n.setPointerCapture?.(r.pointerId)}catch{}}}),G(n,"pointermove",r=>{if(!(s===void 0||r.pointerId!==a)){if(r.buttons===0&&r.pointerType!=="touch")return o("cancel",r);e.move?.(r,s)}}),G(n,"pointerup",r=>{r.pointerId===a&&o("up",r)}),G(n,"pointercancel",r=>{r.pointerId===a&&o("cancel",r)}),G(n,"lostpointercapture",r=>{r.pointerId===a&&o("cancel",r)}),t.onActive(r=>{r||o("cancel")}),t.onCleanup(()=>o("cancel")),{get active(){return s!==void 0},cancel:()=>o("cancel")}}function Ut(n){let e=ge("frames"),t=0,s=!1,a=!1,o=c=>{if(t=0,!a){if(!e.active){s=!0;return}n(c)}},r=()=>{if(!(a||t)){if(!e.active){s=!0;return}t=Je(o)}},i=()=>{s=!1,t&&(dt(t),t=0)};return e.onActive(c=>{c?s&&(s=!1,r()):t&&(dt(t),t=0,s=!0)}),e.onCleanup(()=>{i(),a=!0}),{request:r,cancel:i}}var Pt={apply:"msp-action-footer-apply",footer:"msp-action-footer-footer",info:"msp-action-footer-info",reset:"msp-action-footer-reset",secondary:"msp-action-footer-secondary",spin:"msp-action-footer-spin"};_("components/action-footer/action-footer.module.css",`@layer msp.components {
.msp-action-footer-footer {
  height: 30px;
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-3)) calc(-1 * var(--msp-space-3));
  display: flex;
}

.msp-action-footer-reset {
  width: 32px;
  color: var(--msp-color-text-subtle);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    color: var(--msp-color-text);
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-action-footer-apply {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-4);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  margin-left: auto;
  font-weight: 600;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-accent-strong);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-accent-strong);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-info {
  min-width: 0;
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  align-self: center;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-action-footer-reset + .msp-action-footer-info {
  padding-left: 0;
}

.msp-action-footer-secondary {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover:not(:disabled) {
    color: var(--msp-color-text);

    & > span {
      text-underline-offset: 3px;
      text-decoration: underline 1.5px;
    }
  }

  &:focus-visible {
    color: var(--msp-color-text);
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-action-footer-footer:not(:has(.msp-action-footer-info)) .msp-action-footer-secondary {
  margin-left: auto;
}

.msp-action-footer-secondary ~ .msp-action-footer-apply {
  margin-left: 0;
}

.msp-action-footer-spin {
  animation: .9s linear infinite msp-action-footer-spin;
}

@keyframes msp-action-footer-spin {
  to {
    transform: rotate(360deg);
  }
}
}
`);function Ni(n){let e=Fo(n.busy),t=b([e,Fo(n.disabled)],(r,i)=>r||i),s=ge("ActionFooter"),a=r=>{if(r.key!=="Enter"||r.defaultPrevented||r.isComposing||r.altKey||r.ctrlKey||r.metaKey)return;let i=r.target;!Oi(i)||t.value||(r.preventDefault(),i.dispatchEvent(new Event("change",{bubbles:!0})),queueMicrotask(()=>{t.value||n.onApply()}))},o=r=>queueMicrotask(()=>{let i=r.parentElement;i&&!s.disposed&&Ae(s,()=>G(i,"keydown",a))});return y("div",{class:Pt.footer,ref:r=>o(r),children:[n.onReset?l("button",{type:"button",class:Pt.reset,"data-tip":"Set defaults","aria-label":"Set defaults",onClick:()=>n.onReset?.(),children:l(H,{name:"list-restart",size:15})}):null,n.info!==void 0?l("span",{class:Pt.info,children:n.info}):null,n.secondary?l("button",{type:"button",class:Pt.secondary,disabled:e,onClick:()=>n.secondary?.onClick(),children:l("span",{children:n.secondary.label})}):null,y("button",{type:"button",class:Pt.apply,disabled:t,onClick:()=>n.onApply(),children:[l(P,{when:e,children:()=>l(H,{name:"loader-circle",size:15,class:Pt.spin})}),l("span",{children:n.label})]})]})}function Oi(n){return!(n instanceof HTMLInputElement)||n.getAttribute("role")==="combobox"||n.getAttribute("aria-expanded")==="true"?!1:["text","number","search","url","email","tel",""].includes(n.type)}function Fo(n){if(ct(n))return n;let e=j(!1);return Me(n??!1,t=>e.set(t)),e.asReadonly}var ut={block:"msp-button-block",button:"msp-button-button",danger:"msp-button-danger",ghost:"msp-button-ghost",icon:"msp-button-icon",iconOnly:"msp-button-iconOnly",primary:"msp-button-primary",small:"msp-button-small",tiny:"msp-button-tiny"};_("components/button/button.module.css",`@layer msp.components {
.msp-button-button {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  white-space: nowrap;
  display: inline-flex;

  &:hover:not(:disabled) {
    background: var(--msp-color-hover);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: var(--msp-color-pressed);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-primary {
  background: color-mix(in oklab, var(--msp-color-accent), transparent 84%);
  color: var(--msp-color-accent-strong);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 76%);
  }

  &:active:not(:disabled), &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 70%);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
  }

  &:disabled {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 92%);
    color: var(--msp-color-text-subtle);
  }
}

.msp-button-block {
  width: 100%;
}

.msp-button-ghost {
  background: none;
}

.msp-button-danger:hover:not(:disabled) {
  background: var(--msp-color-danger);
  color: #fff;
}

.msp-button-small {
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-inset);
  font-size: var(--msp-font-size-sm);
}

.msp-button-tiny {
  gap: var(--msp-space-1);
  height: max(24px, var(--msp-touch-target, 0px));
  padding: 0 var(--msp-space-2);
  font-size: var(--msp-font-size-xs);

  & .msp-button-icon {
    width: 14px;
    height: 14px;
  }
}

.msp-button-iconOnly {
  width: var(--msp-control-height);
  padding: 0;

  &.msp-button-small, &.msp-button-tiny {
    width: max(24px, var(--msp-touch-target, 0px));
  }
}

.msp-button-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
}
`);function Re(n){let e=n.variant??"default",t=n.icon!==void 0&&n.children===void 0,s=[ut.button,e!=="default"?ut[e]:"",n.size==="sm"?ut.small:n.size==="xs"?ut.tiny:"",t?ut.iconOnly:"",n.block?ut.block:"",n.class??""].filter(Boolean).join(" ");return y("button",{type:"button",class:s,"data-tip":n.title,"aria-label":t?n.title:void 0,disabled:n.disabled,"aria-pressed":n.pressed,onClick:n.onClick,children:[n.icon!==void 0?l("span",{class:ut.icon,children:n.icon}):null,n.children]})}function st(n){return(typeof n.composedPath=="function"?n.composedPath():[])[0]??n.target}function He(n,e){if(!e)return!1;let t=typeof n.composedPath=="function"?n.composedPath():[];return t.length?t.includes(e):e.contains(n.target)}function ft(n){let t=n.getRootNode().activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function $i(n){let e=n.getRootNode();return typeof ShadowRoot<"u"&&e instanceof ShadowRoot?e.host:n.closest?.(".msp-root")??n.parentElement?.closest(".msp-root")??void 0}function Ye(n,e){let t=$i(n);if(!t||He(e,t))return!0;let s=t.ownerDocument,a=s.activeElement;return a&&a!==s.body&&a!==s.documentElement?!1:t.matches(":hover")}function Io(n){return typeof HTMLElement>"u"||!(n instanceof HTMLElement)?!1:n.isContentEditable||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement?!0:n instanceof HTMLInputElement&&!["checkbox","radio","range","button","color"].includes(n.type)}var Bi='a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',ji='[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';function We(n=document){let e=n.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;if(!(!e||e===n.body||e===n.documentElement)&&!(e.shadowRoot&&!e.shadowRoot.activeElement&&e.tabIndex<0))return e}function ia(n){return[...n.querySelectorAll(Bi)].filter(e=>!e.closest("[hidden], [inert]"))}function es(n,e){if(n.key!=="Tab"||n.defaultPrevented)return;let t=ia(e);if(!t.length)return;let s=We(e.ownerDocument),a=!!s&&e.contains(s);n.shiftKey&&(!a||s===t[0])?(n.preventDefault(),t[t.length-1].focus()):!n.shiftKey&&(!a||s===t[t.length-1])&&(n.preventDefault(),t[0].focus())}function at(n){let e=We();return t=>{let s=We();if(s&&!(t&&t.contains(s)))return;let a=e?.isConnected?e:n?.();a?.isConnected&&a.focus({preventScroll:!0})}}function Do(n){if(!n)return!1;try{return n.matches(":focus-visible")}catch{return We(n.ownerDocument)===n}}function No(n){return[...n.querySelectorAll(ji)].filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("aria-disabled")!=="true"&&!e.closest("[hidden]"))}function At(n,e=!1){let t=No(n),s=(e?t.find(a=>a.getAttribute("aria-checked")==="true"):void 0)??t[0];return s?.focus(),!!s}function vt(n){if(n.defaultPrevented)return;let e=n.currentTarget,t=No(e);if(!t.length)return;let s=t.indexOf(We(e.ownerDocument)),a=t.length,o;switch(n.key){case"ArrowDown":o=t[s<0?0:(s+1)%a];break;case"ArrowUp":o=t[s<0?a-1:(s-1+a)%a];break;case"Home":o=t[0];break;case"End":o=t[a-1];break;default:return}n.preventDefault(),o.focus()}function Mn(n){let e=()=>[...n.querySelectorAll('[role="tab"]')].filter(i=>!i.closest("[hidden]")),t=()=>{let i=e(),c=We(n.ownerDocument),p=i.find(h=>h===c)??i.find(h=>h.getAttribute("aria-selected")==="true")??i[0];for(let h of i){let d=h===p?0:-1;h.tabIndex!==d&&(h.tabIndex=d)}},a=G(n,"keydown",i=>{if(i.defaultPrevented)return;let c=e(),p=c.indexOf(i.target);if(p<0)return;let h;switch(i.key){case"ArrowDown":case"ArrowRight":h=c[(p+1)%c.length];break;case"ArrowUp":case"ArrowLeft":h=c[(p-1+c.length)%c.length];break;case"Home":h=c[0];break;case"End":h=c[c.length-1];break;default:return}i.preventDefault(),h.focus()}),o=G(n,"focusin",t),r=new MutationObserver(t);return r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["aria-selected"]}),t(),()=>{a(),o(),r.disconnect()}}var Vi=0;function Xe(n="msp"){return`${n}-${++Vi}`}var ts={keys:"msp-context-menu-keys",menu:"msp-context-menu-menu",row:"msp-context-menu-row"};_("components/context-menu/context-menu.module.css",`@layer msp.components {
.msp-context-menu-menu {
  z-index: var(--msp-z-overlay);
  min-width: 180px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
}

.msp-context-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  text-align: left;
  grid-template-columns: 15px 1fr auto;
  display: grid;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-context-menu-keys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
}
}
`);function la(n,e,t,s){let a=!1,o=()=>{},r=at(),i=()=>{a||(a=!0,o(),r(h),h.remove(),s?.())},c=v=>{He(v,h)||i()},p=v=>{v.key==="Escape"&&(!He(v,h)&&!Ye(n,v)||(v.preventDefault(),v.stopPropagation(),i()))},h;fo(v=>{o=v,h=l("div",{class:ts.menu,role:"menu",onKeyDown:vt,onContextMenu:g=>g.preventDefault(),children:t.map(g=>y("button",{type:"button",role:"menuitem",class:ts.row,disabled:!!g.disabled,title:g.disabled,onClick:()=>{i(),g.run()},children:[g.icon?l(H,{name:g.icon,size:15}):l("span",{}),l("span",{children:g.label}),g.shortcut?l("kbd",{class:ts.keys,children:g.shortcut}):l("span",{})]}))}),G(document,"pointerdown",c,{capture:!0}),G(document,"keydown",p,{capture:!0}),G(window,"resize",i),G(window,"scroll",i,{capture:!0})}),n.append(h);let d=h.offsetWidth,m=h.offsetHeight,u=e.x+d>window.innerWidth-4?Math.max(4,e.x-d):e.x,f=e.y+m>window.innerHeight-4?Math.max(4,e.y-m):e.y;return h.style.transform=`translate(${Math.round(u)}px, ${Math.round(f)}px)`,h.querySelector("button:not(:disabled)")?.focus({preventScroll:!0}),i}var ns=class{constructor(e,t=Gn.getDefaultValues(e),s={}){this.params=e;this.options=s;this.#n=Gn.getDefaultValues(e),this.#e=j({...this.#n,...t},{compare:Object.is})}#e;#n;#a=new Map;#r=new Map;get values(){return this.#e.asReadonly}field(e){let t=this.#a.get(e);return t||(t=b(this.#e.asReadonly,s=>s[e]),this.#a.set(e,t)),t}visible(e){let t=this.params[e];return t.hideIf?b(this.#e.asReadonly,s=>!t.hideIf(s)):b(this.#e.asReadonly,()=>!0)}set(e,t){let s=this.#e.value;if(Object.is(s[e],t))return;let a={...s,[e]:t};this.#e.set(a),this.options.onChange?.(a,e)}load(e){this.#e.set({...this.#n,...e})}reset(){let e=this.#e.value,t={...this.#n};this.#e.set(t);for(let s of Object.keys(this.params))Gn.isParamEqual(this.params[s],e[s],t[s])||this.options.onChange?.(t,s)}layout(){let e=[],t=[];for(let s of Object.keys(this.params)){let a=this.params[s];a.isHidden||(a.isEssential?e.push(s):t.push(s))}return e.length?{essentials:e,advanced:t}:{essentials:t,advanced:[]}}fold(e,t=!1){let s=this.#r.get(e);return s||(s=j(t),this.#r.set(e,s)),s}};function Oo(n){let e=t=>{let s={names:[]},a=new Map;for(let r of Object.keys(n)){let i=n[r];if(i.isHidden||i.type==="value"||!!i.isEssential!==t)continue;if(!i.category){s.names.push(r);continue}let c=a.get(i.category);c||(c={category:i.category,names:[]},a.set(i.category,c)),c.names.push(r)}let o=[...a.values()].sort((r,i)=>r.category<i.category?-1:1);return s.names.length?[s,...o]:o};return{essentials:e(!0),advanced:e(!1)}}var Yt={content:"msp-scroll-area-content",root:"msp-scroll-area-root",scrollbar:"msp-scroll-area-scrollbar",thumb:"msp-scroll-area-thumb",viewport:"msp-scroll-area-viewport"};_("components/scroll-area/scroll-area.module.css",`@layer msp.components {
.msp-scroll-area-root {
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.msp-scroll-area-root[data-edge] {
  margin-inline-end: calc(-1 * var(--msp-scroll-edge, var(--msp-space-2)));
}

.msp-scroll-area-viewport {
  overscroll-behavior: contain;
  scrollbar-width: none;
  flex: auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .msp-scroll-area-root[data-chain] > & {
    overscroll-behavior: auto;
  }

  .msp-scroll-area-root[data-axis="y"] > & {
    overflow-x: hidden;
  }

  .msp-scroll-area-root[data-axis="x"] > & {
    overflow-y: hidden;
  }

  .msp-scroll-area-root:not([data-axis="x"], [data-no-fade]) > & {
    mask-image: linear-gradient(to bottom,
      transparent,
      #000 var(--msp-fade-top),
      #000 calc(100% - var(--msp-fade-bottom)),
      transparent);
    animation-name: msp-fade-scroll-top, msp-fade-scroll-bottom;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-timeline: scroll(self);
    animation-range: 0 24px, calc(100% - 24px) 100%;
  }
}

.msp-scroll-area-content {
  min-width: 0;

  .msp-scroll-area-root[data-edge] > .msp-scroll-area-viewport > & {
    padding-inline-end: var(--msp-scroll-edge, var(--msp-space-2));
  }

  .msp-scroll-area-root[data-axis="x"] > .msp-scroll-area-viewport > &, .msp-scroll-area-root[data-axis="both"] > .msp-scroll-area-viewport > & {
    width: max-content;
    min-width: 100%;
  }
}

.msp-scroll-area-scrollbar {
  z-index: 1;
  opacity: 0;
  transition: opacity var(--msp-motion-base) var(--msp-ease);
  touch-action: none;
  user-select: none;
  display: flex;
  position: absolute;

  &[data-orientation="vertical"] {
    justify-content: center;
    width: 10px;
    top: 2px;
    bottom: 2px;
    right: 1px;
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    justify-content: center;
    height: 10px;
    bottom: 1px;
    left: 2px;
    right: 2px;
  }

  .msp-scroll-area-root:hover > &, .msp-scroll-area-root:focus-within > &, .msp-scroll-area-root[data-scrolling] > &, &[data-dragging] {
    opacity: 1;
  }

  .msp-scroll-area-root[data-edge] > &[data-orientation="vertical"] {
    width: 8px;
    right: 0;
  }

  .msp-scroll-area-root:not([data-overflow-y]) > &[data-orientation="vertical"], .msp-scroll-area-root:not([data-overflow-x]) > &[data-orientation="horizontal"] {
    display: none;
  }
}

.msp-scroll-area-thumb {
  background: color-mix(in oklab, var(--msp-color-text), transparent 72%);
  transition: scale var(--msp-motion-fast) var(--msp-ease);
  border-radius: 3px;
  flex: none;

  [data-orientation="vertical"] > & {
    transform-origin: 100%;
    width: 4px;
  }

  [data-orientation="horizontal"] > & {
    transform-origin: bottom;
    height: 4px;
  }

  .msp-scroll-area-scrollbar:hover > &, [data-dragging] > & {
    background: color-mix(in oklab, var(--msp-color-text), transparent 52%);
  }

  [data-orientation="vertical"]:hover > &, [data-orientation="vertical"][data-dragging] > & {
    scale: 1.5 1;
  }

  [data-orientation="horizontal"]:hover > &, [data-orientation="horizontal"][data-dragging] > & {
    scale: 1 1.5;
  }
}
}
`);var qi=16,Wi=500;function we(n){let{class:e,contentClass:t,axis:s="y",viewportRef:a,edge:o,chain:r,fade:i=!0,children:c,...p}=n,h,d,m,u={},f=()=>{d&&(u.y&&v(u.y,d.clientHeight,d.scrollHeight,d.scrollTop),u.x&&v(u.x,d.clientWidth,d.scrollWidth,d.scrollLeft))},v=(S,N,w,T)=>{let I=w-N>1;if(I!==S.overflows&&(S.overflows=I,h.toggleAttribute(S.axis==="y"?"data-overflow-y":"data-overflow-x",I)),!I)return;let $=S.axis==="y"?S.track.clientHeight:S.track.clientWidth,Y=Math.max(qi,Math.round($*N/w));Y!==S.size&&(S.size=Y,S.axis==="y"?S.thumb.style.height=`${Y}px`:S.thumb.style.width=`${Y}px`),S.travel=$-Y,S.range=w-N;let W=Math.round(S.travel*Math.min(Math.max(T,0),S.range)/S.range);W!==S.offset&&(S.offset=W,S.thumb.style.transform=S.axis==="y"?`translateY(${W}px)`:`translateX(${W}px)`)},g,x=()=>{g=void 0,h.removeAttribute("data-scrolling")},M=()=>{f(),g===void 0?h.setAttribute("data-scrolling",""):clearTimeout(g),g=setTimeout(x,Wi)},C=(S,N)=>{S.axis==="y"?d.scrollTop=N:d.scrollLeft=N},E=S=>S.axis==="y"?d.scrollTop:d.scrollLeft,F=(S,N)=>S.axis==="y"?N.clientY:N.clientX,O=S=>ht(S.track,{start:N=>{if(!(N.button!==0||!S.overflows)){if(N.preventDefault(),N.target!==S.thumb&&S.travel>0){let w=S.track.getBoundingClientRect(),T=F(S,N)-(S.axis==="y"?w.top:w.left)-S.size/2;C(S,Math.min(Math.max(T,0),S.travel)/S.travel*S.range)}return S.track.setAttribute("data-dragging",""),{start:F(S,N),scroll:E(S)}}},move:(N,w)=>{S.travel>0&&C(S,w.scroll+(F(S,N)-w.start)/S.travel*S.range)},end:()=>S.track.removeAttribute("data-dragging")}),A=S=>{let N=l("div",{class:Yt.thumb}),w=l("div",{class:Yt.scrollbar,"data-orientation":S==="y"?"vertical":"horizontal","aria-hidden":"true",onMouseDown:I=>I.preventDefault(),children:N}),T={axis:S,track:w,thumb:N,overflows:!1,size:-1,offset:-1,travel:0,range:0};return O(T),u[S]=T,w};return h=y("div",{class:`${Yt.root} ${e??""}`,"data-axis":s,"data-edge":o?"":void 0,"data-chain":r?"":void 0,"data-no-fade":i?void 0:"",children:[l("div",{class:Yt.viewport,ref:S=>{d=S,a?.(S)},onScroll:M,children:l("div",{...p,class:`${Yt.content} ${t??""}`,ref:S=>{m=S,p.ref?.(S)},children:c})}),s!=="x"?A("y"):null,s!=="y"?A("x"):null]}),ze(d,f)?.observe(m),te(()=>{g!==void 0&&clearTimeout(g)}),queueMicrotask(f),h}var Fe={button:"msp-select-button",check:"msp-select-check",chevron:"msp-select-chevron",floating:"msp-select-floating",group:"msp-select-group",groupBody:"msp-select-groupBody",groupChevron:"msp-select-groupChevron",groupHead:"msp-select-groupHead",label:"msp-select-label",list:"msp-select-list","list-in":"msp-select-list-in",listContent:"msp-select-listContent",menuPopover:"msp-select-menuPopover",option:"msp-select-option",select:"msp-select-select"};_("components/select/select.module.css",`@layer msp.components {
.msp-select-select {
  gap: var(--msp-space-1);
  min-width: 0;
  display: grid;
}

.msp-select-button {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-select-label {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-select-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-select-list {
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  max-height: 240px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
}

.msp-select-listContent {
  padding: var(--msp-space-1);
  display: grid;
}

@keyframes msp-select-list-in {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.msp-select-option {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-select-group {
  display: grid;
}

.msp-select-groupHead {
  align-items: center;
  gap: var(--msp-space-1);
  min-height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }
}

.msp-select-groupChevron {
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-select-groupBody {
  padding-left: var(--msp-space-3);
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-select-check {
  visibility: hidden;
  flex: none;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-select-floating {
  color: inherit;
  background: none;
  border: 0;
  width: max-content;
  max-width: calc(100vw - 16px);
  margin: 0;
  padding: 0;
  position: fixed;
  inset: auto;
  overflow: visible;

  & .msp-select-option {
    white-space: nowrap;
    min-height: 24px;
  }

  & > .msp-select-list {
    background: var(--msp-color-raised);
    box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
      var(--msp-shadow-overlay);
  }
}

.msp-select-menuPopover {
  min-width: 180px;
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-raised);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-overlay);
  font-size: var(--msp-font-size-sm);
  animation: msp-select-list-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
}
}
`);function ca(n){let e=j(!1),t=Gi(n.value),s;return y("span",{class:`${Fe.select} ${n.class??""}`,ref:a=>{s=a},children:[l(ss,{label:b(t,a=>n.options.find(o=>o[0]===a)?.[1]??""),open:e,size:n.size,title:n.title,"aria-label":n["aria-label"]}),l(P,{when:e,children:()=>{let a=l(Xt,{options:n.options,value:t,onPick:o=>{e.set(!1),n.onChange?.(o)},onClose:()=>e.set(!1),floating:n.over,"aria-label":n["aria-label"]??n.title});return n.over?l(zt,{anchor:s,children:a}):a}})]})}function ss(n){return y("button",{type:"button",class:Fe.button,"data-size":n.size??"md","aria-haspopup":"listbox","aria-expanded":n.open,"aria-label":n["aria-label"],title:n.title,onClick:()=>n.open.set(!n.open.value),children:[l("span",{class:Fe.label,children:n.label}),l(H,{name:"chevron-down",size:14,class:Fe.chevron})]})}function Xt(n){let e;he(n.value,d=>{e=d});let t=new Map,s=()=>[...p.querySelectorAll('[role="option"], [data-group-head]')].filter(d=>!d.closest("[hidden]")),a=d=>{let m=s();m[Math.max(0,Math.min(m.length-1,d))]?.focus()},o=([d,m])=>{let u=y("button",{type:"button",role:"option",class:Fe.option,"aria-selected":b(n.value,f=>f===d),onClick:()=>n.onPick(d),children:[l("span",{children:m}),l(H,{name:"check",size:14,class:Fe.check})]});return t.set(d,u),u},r=new Map,i=[];for(let d of n.options)d[2]?r.has(d[2])?r.get(d[2]).push(d):r.set(d[2],[d]):i.push(d);let c=(d,m)=>{let u=j(m.some(f=>f[0]===e));return y("div",{class:Fe.group,role:"group","aria-label":d,children:[y("button",{type:"button",class:Fe.groupHead,"data-group-head":"","aria-expanded":u,onClick:()=>u.set(!u.value),children:[l(H,{name:"chevron-right",size:13,class:Fe.groupChevron}),l("span",{children:d})]}),l("div",{class:Fe.groupBody,hidden:b(u.asReadonly,f=>!f),children:m.map(o)})]})},p=y(we,{class:Fe.list,contentClass:Fe.listContent,chain:!n.floating,role:"listbox","aria-label":n["aria-label"],onKeyDown:d=>{let m=s(),u=m.indexOf(ft(p));if(d.key==="ArrowDown")a(u+1);else if(d.key==="ArrowUp")a(u-1);else if(d.key==="Home")a(0);else if(d.key==="End")a(m.length-1);else if(d.key==="Escape")n.onClose();else return;d.preventDefault(),d.stopPropagation()},children:[i.map(o),[...r].map(([d,m])=>c(d,m))]});return queueMicrotask(()=>{let d=e===void 0?void 0:t.get(e);d&&!d.closest("[hidden]")?d.focus():a(0)}),G(document,"pointerdown",d=>{let m=st(d);He(d,p)||m.closest?.('[aria-haspopup="listbox"][aria-expanded="true"]')||n.onClose()},{capture:!0}),p}function Gi(n){if(ct(n))return n;let e=De(n),t=j(e?void 0:n);return e&&Me(e,s=>t.set(s)),t.asReadonly}function Ki(n){let e,t=a=>{a.key!=="Escape"||a.defaultPrevented||(a.preventDefault(),n.onClose(!0))},s=a=>{He(a,e)||He(a,n.anchor)||n.onClose()};return G(document,"keydown",t,{capture:!0}),G(document,"pointerdown",s,{capture:!0}),l(zt,{anchor:n.anchor,align:"end",children:l("div",{class:Fe.menuPopover,role:"menu","aria-label":n["aria-label"],ref:a=>{e=a,Jn(()=>a.querySelector("button:not(:disabled)")?.focus())},children:n.children})})}function zt(n){let e=l("div",{class:Fe.floating,"attr:popover":"manual",children:n.children}),t=-1,s=()=>{let o=n.anchor.getBoundingClientRect();o.width!==t&&(t=o.width,e.style.minWidth=`${o.width}px`);let r=e.offsetHeight,i=e.offsetWidth,c=window.innerHeight-o.bottom,p=c>=r+8||c>=o.top?o.bottom+2:o.top-r-2,h=n.align==="end"?o.right-i:o.left;e.style.left=`${Math.max(8,Math.min(h,window.innerWidth-8-i))}px`,e.style.top=`${Math.max(4,p)}px`},a=o=>{He(o,e)||s()};return queueMicrotask(()=>{e.isConnected&&(e.showPopover?.(),s(),(e.querySelector('[aria-selected="true"]')??e.querySelector("[role=option]"))?.focus())}),G(window,"scroll",a,{capture:!0}),G(window,"resize",s),e}function fe(n,e){n.data!==e&&(n.data=e)}function q(n,e,t){if(t==null||t===!1){n.hasAttribute(e)&&n.removeAttribute(e);return}let s=t===!0?"":String(t);n.getAttribute(e)!==s&&n.setAttribute(e,s)}function _t(n,e,t){n.classList.toggle(e,t)}function Te(n,e,t){let s=n.style;if(!t){s.getPropertyValue(e)&&s.removeProperty(e);return}s.getPropertyValue(e)!==t&&s.setProperty(e,t)}function Bp(n,e){let t=e?"":"none";n.style.display!==t&&(n.style.display=t)}var $e={custom:"msp-color-color-picker-custom",field:"msp-color-color-picker-field",greys:"msp-color-color-picker-greys",marker:"msp-color-color-picker-marker",palette:"msp-color-color-picker-palette",picker:"msp-color-color-picker-picker",preview:"msp-color-color-picker-preview",swatch:"msp-color-color-picker-swatch",text:"msp-color-color-picker-text"};_("components/color/color-picker.module.css",`@layer msp.components {
.msp-color-color-picker-picker {
  gap: var(--msp-space-3);
  margin-block: var(--msp-space-1) var(--msp-space-2);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-color-color-picker-field, .msp-color-color-picker-greys {
  border-radius: var(--msp-radius-sm);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  cursor: crosshair;
  touch-action: none;
  position: relative;
}

.msp-color-color-picker-field {
  background: linear-gradient(#ffffffe6, #fff0 50%, #0000 50%, #000000e6), linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red);
  height: 96px;
}

.msp-color-color-picker-greys {
  background: linear-gradient(to right, #000, #fff);
  height: 12px;
}

.msp-color-color-picker-marker {
  pointer-events: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  translate: -50% -50%;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 2.5px #00000080;
}

.msp-color-color-picker-palette {
  gap: var(--msp-space-2);
  grid-template-columns: repeat(8, minmax(0, 1fr));
  display: grid;
}

.msp-color-color-picker-swatch {
  border-radius: var(--msp-radius-sm);
  min-width: 0;
  height: 16px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  &:hover {
    transform: scale(1.08);
  }

  &[aria-selected="true"] {
    box-shadow: 0 0 0 1.5px var(--msp-color-bg),
      0 0 0 3px var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-color-color-picker-custom {
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-color-color-picker-preview {
  border-radius: var(--msp-radius-sm);
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-color-color-picker-text {
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  border: 0;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}
}
`);var Bo=[15026253,16214805,16762173,4630360,1222036,37119,7231183,14041247];function $o(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=(Math.max(e,t,s)+Math.min(e,t,s))/510,o=Math.round(7*(1-a)),r=7-o,i=[];for(let c=o;c>0;c--)i.push(as(n,.9*c/o));i.push(n);for(let c=1;c<=r;c++)i.push(as(n,-.85*c/r));return i}function _e(n){return`#${(n>>>0&16777215).toString(16).padStart(6,"0")}`}function gt(n){return`${n>>16&255}, ${n>>8&255}, ${n&255}`}var ot=(n,e,t)=>n<<16|e<<8|t,bt=n=>Math.max(0,Math.min(255,Math.round(n)));function Ui(n){let e=n.trim().toLowerCase();if(!e)return;let t=/^(?:#|0x)?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(e);if(t){let o=t[1].length===3?t[1].replace(/./g,r=>r+r):t[1];return Number.parseInt(o,16)}let s=/^(rgba?|hsla?)?\s*\(?\s*([^()]*?)\s*\)?$/.exec(e);if(s){let o=s[2].split(/\s*[,;/\s]\s*/).filter(Boolean);if(o.length===3||o.length===4){let r=o.slice(0,3);if(r.every(i=>/^[+]?(\d+\.?\d*|\.\d+)%?$/.test(i))){if(s[1]?.startsWith("hsl"))return Yi(r);let i=r.some(d=>d.endsWith("%")),c=r.map(d=>Number.parseFloat(d)),p=!i&&c.every(d=>d<=1)&&r.some(d=>d.includes(".")),h=d=>i?d*255/100:p?d*255:d;return!i&&!p&&c.some(d=>d>255)?void 0:ot(bt(h(c[0])),bt(h(c[1])),bt(h(c[2])))}}}let a=e.replace(/[\s_-]/g,"");return Object.hasOwn(Is,a)?Is[a]:void 0}function Yi(n){let e=(Number.parseFloat(n[0])%360+360)%360/60,t=Math.min(1,Number.parseFloat(n[1])/100),s=Math.min(1,Number.parseFloat(n[2])/100),a=(1-Math.abs(2*s-1))*t,o=a*(1-Math.abs(e%2-1)),r=s-a/2,[i,c,p]=e<1?[a,o,0]:e<2?[o,a,0]:e<3?[0,a,o]:e<4?[0,o,a]:e<5?[o,0,a]:[a,0,o];return ot(bt((i+r)*255),bt((c+r)*255),bt((p+r)*255))}function as(n,e){let t=e>0?255:0,s=Math.abs(e),a=o=>{let r=n>>o&255;return Math.round(r+(t-r)*s)<<o};return a(16)|a(8)|a(0)}var os=.9;function Xi(n){let e=n*6%6,t=e-Math.floor(e),s=bt(t*255),a=255-s;switch(Math.floor(e)){case 0:return ot(255,s,0);case 1:return ot(a,255,0);case 2:return ot(0,255,s);case 3:return ot(0,a,255);case 4:return ot(s,0,255);default:return ot(255,0,a)}}function _i(n,e){let t=Xi(Math.max(0,Math.min(1,n))),s=Math.max(0,Math.min(1,e));return s<.5?as(t,os*(1-s/.5)):as(t,-os*((s-.5)/.5))}function Qi(n){let e=n>>16&255,t=n>>8&255,s=n&255,a=Math.max(e,t,s),o=Math.min(e,t,s);if(a-o<16)return{greys:!0,x:(e+t+s)/765,y:.5};let r=a-o,i=a===e?((t-s)/r+6)%6:a===t?(s-e)/r+2:(e-t)/r+4,c=(a+o)/510,p=c>=.5?.5*(1-(2*c-1)/os):.5+.5*(1-2*c)/os;return{greys:!1,x:i/6,y:Math.max(0,Math.min(1,p))}}function da(n){let e=Zi(n.value),t=b(e,Qi),s=0,a,o=j(0),r=!1,i=b(o.asReadonly,$o);he(e,h=>{s=h,r||o.set(h),a&&ft(a)!==a&&(a.value=gt(h))});let c=h=>d=>{let m=u=>{let f=d.getBoundingClientRect();n.onChange(h((u.clientX-f.left)/f.width,(u.clientY-f.top)/f.height))};ht(d,{start(u){if(u.button===0)return m(u),!0},move:m})},p=h=>{let d=h<.03?0:h>.97?255:bt(h*255);return ot(d,d,d)};return y("div",{class:$e.picker,children:[l("div",{class:$e.field,"aria-hidden":"true",ref:c(_i),children:l("span",{class:$e.marker,hidden:b(t,h=>h.greys),style:{left:b(t,h=>`${h.x*100}%`),top:b(t,h=>`${h.y*100}%`)}})}),l("div",{class:$e.greys,"aria-hidden":"true",ref:c(h=>p(h)),children:l("span",{class:$e.marker,hidden:b(t,h=>!h.greys),style:{left:b(t,h=>`${h.x*100}%`),top:"50%"}})}),l("div",{class:$e.palette,role:"listbox","aria-label":"Palette",children:Bo.map(h=>l("button",{type:"button",role:"option",class:$e.swatch,style:{background:_e(h)},"aria-label":gt(h),"aria-selected":b(e,d=>d===h),onClick:()=>n.onChange(h)}))}),l("div",{class:$e.palette,role:"listbox","aria-label":"Weights",children:[0,1,2,3,4,5,6,7].map(h=>{let d=b(i,m=>m[h]);return l("button",{type:"button",role:"option",class:$e.swatch,style:{background:b(d,_e)},"aria-label":b(d,gt),"aria-selected":b([d,e],(m,u)=>m===u),onClick:()=>{r=!0,n.onChange($o(o.value)[h]),r=!1}})})}),y("div",{class:$e.custom,children:[l("span",{class:$e.preview,style:{background:b(e,_e)}}),l("input",{ref:h=>{a=h,h.value=gt(s)},type:"text",class:$e.text,"aria-label":"Color",placeholder:"r, g, b \xB7 #hex \xB7 rgb() \xB7 name","data-tip":"r, g, b; hex, rgb(), hsl() or a name",spellcheck:!1,onInput:h=>{let d=Ui(h.currentTarget.value);d!==void 0&&n.onChange(d)},onKeyDown:h=>{h.key==="Enter"&&(h.currentTarget.value=gt(s))},onBlur:h=>{h.currentTarget.value=gt(s)}})]})]})}function Zi(n){if(ct(n))return n;let e=j(0);return Me(n,t=>e.set(t)),e.asReadonly}var K={afterSelect:"msp-params-params-form-afterSelect",channels:"msp-params-params-form-channels",chevron:"msp-params-params-form-chevron",collapsible:"msp-params-params-form-collapsible",collapsibleBar:"msp-params-params-form-collapsibleBar",collapsibleHeader:"msp-params-params-form-collapsibleHeader",collapsibleMeta:"msp-params-params-form-collapsibleMeta",color:"msp-params-params-form-color",control:"msp-params-params-form-control",count:"msp-params-params-form-count",fields:"msp-params-params-form-fields",file:"msp-params-params-form-file",fileClear:"msp-params-params-form-fileClear",fileNames:"msp-params-params-form-fileNames",filePick:"msp-params-params-form-filePick",form:"msp-params-params-form-form",input:"msp-params-params-form-input",item:"msp-params-params-form-item",itemActions:"msp-params-params-form-itemActions",itemAdd:"msp-params-params-form-itemAdd",itemForm:"msp-params-params-form-itemForm",itemLabel:"msp-params-params-form-itemLabel",itemRow:"msp-params-params-form-itemRow",items:"msp-params-params-form-items",knob:"msp-params-params-form-knob",label:"msp-params-params-form-label",mapped:"msp-params-params-form-mapped",nested:"msp-params-params-form-nested",number:"msp-params-params-form-number",presets:"msp-params-params-form-presets",presetsList:"msp-params-params-form-presetsList",range:"msp-params-params-form-range",row:"msp-params-params-form-row",select:"msp-params-params-form-select",settings:"msp-params-params-form-settings",slider:"msp-params-params-form-slider",subSettings:"msp-params-params-form-subSettings",swatch:"msp-params-params-form-swatch",switch:"msp-params-params-form-switch",textarea:"msp-params-params-form-textarea",unsupported:"msp-params-params-form-unsupported"};_("components/params/params-form.module.css",`@layer msp.components {
.msp-params-params-form-form {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-row {
  grid-template-columns: var(--msp-label-width) minmax(0, 1fr);
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 24px;
  display: grid;

  &[hidden] {
    display: none;
  }
}

.msp-params-params-form-label {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}

.msp-params-params-form-control {
  align-items: center;
  min-width: 0;
  display: flex;
}

.msp-params-params-form-input, .msp-params-params-form-number, .msp-params-params-form-textarea {
  width: 100%;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  border: 0;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-params-params-form-textarea {
  height: auto;
  min-height: 56px;
  padding: var(--msp-space-2) var(--msp-space-3);
  resize: vertical;
  font-family: inherit;
  line-height: 1.45;
}

.msp-params-params-form-row:has(.msp-params-params-form-textarea) {
  align-items: start;

  & .msp-params-params-form-label {
    padding-top: var(--msp-space-2);
  }
}

.msp-params-params-form-select {
  width: 100%;
}

.msp-params-params-form-slider {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 52px;
  width: 100%;
  display: grid;
}

.msp-params-params-form-range {
  --msp-range-fill: color-mix(in oklab, var(--msp-color-text-muted), transparent 45%);
  width: calc(100% - var(--msp-space-3));
  height: 16px;
  margin: 0 0 0 var(--msp-space-3);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-range-fill) var(--msp-progress, 0%),
      var(--msp-color-pressed) var(--msp-progress, 0%));
    border-radius: 1.5px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    transition: transform var(--msp-motion-fast) var(--msp-ease);
    border-radius: 50%;
    margin-top: -3.5px;
  }

  &:hover::-webkit-slider-thumb, &:active::-webkit-slider-thumb {
    transform: scale(1.25);
  }

  &::-moz-range-track {
    background: var(--msp-color-pressed);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-progress {
    background: var(--msp-range-fill);
    border-radius: 1.5px;
    height: 3px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-params-params-form-number {
  padding: 0 var(--msp-space-2);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.msp-params-params-form-switch {
  width: 24px;
  height: 14px;
  margin-left: var(--msp-space-3);
  background: var(--msp-color-pressed);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  border-radius: 7px;
  flex: none;
  position: relative;

  &[aria-checked="true"] {
    background: var(--msp-color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
  }
}

.msp-params-params-form-knob {
  background: var(--msp-color-bg);
  width: 10px;
  height: 10px;
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 0 1px 1px #0000001f;

  [aria-checked="true"] > & {
    transform: translateX(10px);
  }
}

.msp-params-params-form-color {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }
}

.msp-params-params-form-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-text), transparent 88%);
  flex: none;
}

.msp-params-params-form-channels {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-unsupported {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-params-params-form-mapped, .msp-params-params-form-fields, .msp-params-params-form-nested {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: var(--msp-space-3);
}

.msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(2 * var(--msp-space-3));
}

.msp-params-params-form-nested .msp-params-params-form-nested .msp-params-params-form-nested :is(.msp-params-params-form-label, .msp-params-params-form-collapsibleHeader) {
  padding-left: calc(3 * var(--msp-space-3));
}

.msp-params-params-form-collapsible {
  display: grid;
}

.msp-params-params-form-collapsibleBar {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-params-form-collapsibleHeader {
  align-items: center;
  gap: var(--msp-space-1);
  min-width: 0;
  height: 24px;
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: auto;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(90deg);
  }
}

.msp-params-params-form-collapsibleMeta {
  min-width: 0;
  margin-left: var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-presets {
  align-items: center;
  gap: var(--msp-space-1);
  height: 20px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-params-form-presetsList {
  margin: var(--msp-space-1) 0;
  display: block;

  & > * {
    animation: none;
  }
}

.msp-params-params-form-settings {
  border-radius: var(--msp-radius-md);
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  place-items: center;
  margin-left: auto;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-afterSelect {
  margin-left: var(--msp-space-1);
  flex: none;
}

.msp-params-params-form-subSettings {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);

  & .msp-params-params-form-label {
    padding-left: var(--msp-space-3);
  }
}

.msp-params-params-form-file {
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  width: 100%;
  min-width: 0;
  height: 24px;
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-dragging] {
    background: var(--msp-color-hover);
    outline: 1.5px dashed var(--msp-color-border-strong);
    outline-offset: -1.5px;
  }
}

.msp-params-params-form-filePick {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 100%;
  padding: 0 var(--msp-inset);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: 1;
  display: flex;

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
    border-radius: var(--msp-radius-md);
  }
}

.msp-params-params-form-fileNames {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-empty] {
    color: var(--msp-color-text-muted);
  }
}

.msp-params-params-form-fileClear {
  width: 20px;
  height: 20px;
  margin-right: var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-pressed);
    color: var(--msp-color-text);
  }
}

.msp-params-params-form-count {
  padding-left: var(--msp-space-3);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  flex: 1;
}

.msp-params-params-form-items {
  margin: var(--msp-space-1) calc(-1 * var(--msp-space-2)) var(--msp-space-1);
  padding: var(--msp-space-1) var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  display: grid;
}

.msp-params-params-form-item {
  display: grid;
}

.msp-params-params-form-itemRow {
  cursor: pointer;
  align-items: center;
  gap: var(--msp-space-1);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  & .msp-params-params-form-settings {
    opacity: 0;
    width: 22px;
    height: 22px;
  }

  &:hover .msp-params-params-form-settings, & .msp-params-params-form-settings:focus-visible, [data-open] > & .msp-params-params-form-settings {
    opacity: 1;
  }
}

.msp-params-params-form-itemLabel {
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-params-form-itemForm {
  padding: var(--msp-space-1) 0 var(--msp-space-2);

  & .msp-params-params-form-label {
    padding-left: calc(2 * var(--msp-space-3));
  }
}

.msp-params-params-form-itemActions {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  display: flex;
}

.msp-params-params-form-itemAdd {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  margin: 0 calc(-1 * var(--msp-space-1));
  padding: 0 var(--msp-space-1) 0 calc(var(--msp-space-1) + var(--msp-space-3));
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}
}
`);var ce={check:"msp-params-extra-controls-check",chevron:"msp-params-extra-controls-chevron",curve:"msp-params-extra-controls-curve",field:"msp-params-extra-controls-field",fieldContent:"msp-params-extra-controls-fieldContent",graph:"msp-params-extra-controls-graph",graphArea:"msp-params-extra-controls-graphArea",graphAt:"msp-params-extra-controls-graphAt",graphEditor:"msp-params-extra-controls-graphEditor",graphFoot:"msp-params-extra-controls-graphFoot",graphHint:"msp-params-extra-controls-graphHint",grid:"msp-params-extra-controls-grid",interval:"msp-params-extra-controls-interval",intervalRange:"msp-params-extra-controls-intervalRange",intervalTrack:"msp-params-extra-controls-intervalTrack",intervalValue:"msp-params-extra-controls-intervalValue",matrix:"msp-params-extra-controls-matrix",option:"msp-params-extra-controls-option",options:"msp-params-extra-controls-options",optionsContent:"msp-params-extra-controls-optionsContent",point:"msp-params-extra-controls-point",spark:"msp-params-extra-controls-spark",strip:"msp-params-extra-controls-strip",stripName:"msp-params-extra-controls-stripName",under:"msp-params-extra-controls-under",vec:"msp-params-extra-controls-vec"};_("components/params/extra-controls.module.css",`@layer msp.components {
.msp-params-extra-controls-field {
  align-items: center;
  gap: var(--msp-space-2);
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }
}

.msp-params-extra-controls-fieldContent {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  display: flex;
  overflow: hidden;
}

.msp-params-extra-controls-chevron {
  color: var(--msp-color-text-muted);
  transition: transform var(--msp-motion-fast) var(--msp-ease);
  flex: none;

  [aria-expanded="true"] > & {
    transform: rotate(180deg);
  }
}

.msp-params-extra-controls-under {
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
}

.msp-params-extra-controls-options {
  max-height: 240px;
}

.msp-params-extra-controls-optionsContent {
  display: grid;
}

.msp-params-extra-controls-option {
  align-items: center;
  gap: var(--msp-space-2);
  min-height: 26px;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  border-radius: var(--msp-radius-sm);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  display: flex;

  & > span:first-child:not(.msp-params-extra-controls-strip) {
    flex: 1;
  }

  &:hover, &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
    outline: none;
  }

  &[aria-selected="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;
  }
}

.msp-params-extra-controls-check {
  visibility: hidden;
  flex: none;
  margin-left: auto;

  [aria-selected="true"] > & {
    visibility: visible;
  }
}

.msp-params-extra-controls-vec {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-matrix {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}

.msp-params-extra-controls-interval {
  align-items: center;
  gap: var(--msp-space-2);
  grid-template-columns: minmax(0, 1fr) 72px;
  width: 100%;
  display: grid;
}

.msp-params-extra-controls-intervalTrack {
  height: 16px;
  margin-left: var(--msp-space-3);
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(90deg,
      var(--msp-color-pressed) var(--msp-from),
      color-mix(in oklab, var(--msp-color-text-muted), transparent 45%) var(--msp-from) var(--msp-to),
      var(--msp-color-pressed) var(--msp-to));
    border-radius: 1.5px;
    height: 3px;
    margin-top: -1.5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}

.msp-params-extra-controls-intervalRange {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  background: none;
  width: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &::-webkit-slider-runnable-track {
    background: none;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text-muted);
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -3.5px;
  }

  &::-moz-range-track {
    background: none;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text-muted);
    pointer-events: auto;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: none;
  }
}

.msp-params-extra-controls-intervalValue {
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: right;
  line-height: 24px;
}

.msp-params-extra-controls-strip {
  width: 56px;
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-extra-controls-stripName {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-extra-controls-spark {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2px;
  vector-effect: non-scaling-stroke;
  flex: none;
  width: 56px;
  height: 14px;
}

.msp-params-extra-controls-graphEditor {
  gap: var(--msp-space-1);
  padding: var(--msp-space-1);
  display: grid;
}

.msp-params-extra-controls-graph {
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-panel);
  cursor: crosshair;
  touch-action: none;
  width: 100%;
  height: 96px;
  display: block;
}

.msp-params-extra-controls-grid {
  stroke: var(--msp-glass-edge);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-curve {
  fill: none;
  stroke: var(--msp-color-text-muted);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
}

.msp-params-extra-controls-point {
  fill: var(--msp-color-panel);
  stroke: var(--msp-color-text);
  stroke-width: 1.5px;
  vector-effect: non-scaling-stroke;
  cursor: grab;

  &:hover {
    fill: var(--msp-color-accent);
  }
}

.msp-params-extra-controls-graphArea {
  position: relative;
}

.msp-params-extra-controls-graphAt {
  top: var(--msp-space-1);
  right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  position: absolute;
}

.msp-params-extra-controls-graphFoot {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;

  & > .msp-params-extra-controls-graphHint {
    flex: auto;
    min-width: 0;
  }
}

.msp-params-extra-controls-graphHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  margin: 0;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function Qt(n){let{open:e}=n,t=y("button",{type:"button",class:K.presets,ref:s=>Vo.set(e,s),"aria-label":`${n.label} presets`,"aria-haspopup":"listbox",onClick:s=>{s.stopPropagation(),e.set(!e.value)},children:[l(H,{name:"swatch-book",size:12}),"Presets"]});return D([e],()=>q(t,"aria-expanded",String(e.value))),t}var Vo=new WeakMap;function Ht(n){let{open:e}=n;return l(P,{when:e,children:()=>{let t=n.presets(),s=n.anchor?.()??Vo.get(e),a=l(Xt,{"aria-label":s?.getAttribute("aria-label")??"Presets",options:t.map(([,o],r)=>[String(r),o]),value:b(n.current,o=>o===void 0?void 0:String(o)),onPick:o=>{e.set(!1);let r=t[Number(o)];r&&n.onPick(r[0])},onClose:()=>e.set(!1),floating:!0});return s?l(zt,{anchor:s,children:a}):l("div",{class:K.presetsList,children:a})}})}var jo=(n,e)=>JSON.stringify(n)===JSON.stringify(e);function Zt(n,e,t=!1){let s=n.findIndex(([a])=>t&&a&&typeof a=="object"&&e&&typeof e=="object"?Object.entries(a).every(([o,r])=>jo(e[o],r)):jo(a,e));return s<0?void 0:s}function ls(n){let e=j(!1);return y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:n.head}),l("div",{class:K.control,children:n.field(e)})]}),l(P,{when:e,reveal:!0,children:()=>l("div",{class:ce.under,children:n.body(()=>e.set(!1))})})]})}function cs(n){let e=y("button",{type:"button",class:ce.field,"aria-label":n.label,onClick:()=>n.open.set(!n.open.value),children:[l("span",{class:ce.fieldContent,children:n.children}),l(H,{name:"chevron-down",size:14,class:ce.chevron})]});return D([n.open],()=>q(e,"aria-expanded",String(n.open.value))),e}function qo(n){let{param:e,binding:t}=n,s=document.createTextNode("");return D([t.value],()=>{let a=t.get(),o=e.options.filter(([r])=>a?.includes(r)).map(([,r])=>r);fe(s,o.length?o.join(", "):e.emptyValue??"None")}),l(ls,{head:n.head,field:a=>l(cs,{open:a,label:n.label,children:s}),body:()=>{let a=[],o=l(we,{class:ce.options,contentClass:ce.optionsContent,role:"listbox","aria-multiselectable":"true","aria-label":n.label,children:e.options.map(([r,i])=>y("button",{type:"button",role:"option",class:ce.option,ref:c=>a.push(c),onClick:()=>{let c=t.get()??[];t.set(c.includes(r)?c.filter(p=>p!==r):[...c,r])},children:[l("span",{children:i}),l(H,{name:"check",size:14,class:ce.check})]}))});return D([t.value],()=>{let r=t.get();for(let i=0;i<a.length;i++)q(a[i],"aria-selected",String(!!r?.includes(e.options[i][0])))}),o}})}function Wo(n){let{binding:e}=n,t=[],s=l("div",{class:ce.vec,children:["x","y","z"].map((a,o)=>l("input",{class:K.number,"aria-label":n.label?`${n.label} ${a}`:a,"data-tip":a,ref:r=>t.push(r),onChange:r=>{let i=r.currentTarget,c=Number(i.value),p=[...e.get()??[0,0,0]];Number.isFinite(c)&&(p[o]=c,e.set(p)),i.value=rs(p[o])}}))});return D([e.value],()=>{let a=e.get();for(let o=0;o<t.length;o++)Sn(t[o],rs(a?.[o]))}),s}function Sn(n,e){n.value!==e&&(n.value=e)}function rs(n){return n===void 0||!Number.isFinite(n)?"":String(Math.round(n*1e4)/1e4)}function Go(n){let{binding:e}=n,t=a=>{for(let o=0;o<16;o++)if(a[o]!==(o%5===0?1:0))return!1;return!0},s=document.createTextNode("");return D([e.value],()=>{let a=e.get();fe(s,a&&t(a)?"Identity":"4 \xD7 4 matrix")}),l(ls,{head:n.head,field:a=>l(cs,{open:a,label:n.label,children:s}),body:()=>{let a=[],o=l("div",{class:ce.matrix,children:Array.from({length:16},(r,i)=>{let c=i%4*4+Math.floor(i/4);return l("input",{class:K.number,"aria-label":`${n.label}, row ${Math.floor(i/4)+1}, column ${i%4+1}`,ref:p=>a.push(p),onChange:p=>{let h=p.currentTarget,d=Number(h.value),m=Array.from(e.get());Number.isFinite(d)&&(m[c]=d,e.set(m)),h.value=rs(m[c])}})})});return D([e.value],()=>{let r=e.get();for(let i=0;i<16;i++)Sn(a[i],rs(r?.[i%4*4+Math.floor(i/4)]))}),o}})}function Ko(n){let{param:e,binding:t}=n,s=e.min??0,a=e.max??1,o=e.step??(a-s)/100,r=u=>`${100*(u-s)/(a-s||1)}%`,i=o<1?Math.min(4,Math.ceil(-Math.log10(o))):0,c=[],p,h=document.createTextNode(""),d=u=>l("input",{class:ce.intervalRange,type:"range",min:String(s),max:String(a),step:String(o),"aria-label":`${n.label?`${n.label} `:""}${u===0?"from":"to"}`,ref:f=>c[u]=f,onInput:f=>{let v=Number(f.currentTarget.value),g=[...t.get()??[s,a]];g[u]=u===0?Math.min(v,g[1]):Math.max(v,g[0]),t.set(g),f.currentTarget.value=String(g[u])}}),m=y("div",{class:ce.interval,children:[y("div",{class:ce.intervalTrack,ref:u=>p=u,children:[d(0),d(1)]}),l("span",{class:ce.intervalValue,children:h})]});return D([t.value],()=>{let u=t.get(),f=u?.[0]??s,v=u?.[1]??a;Sn(c[0],String(u?.[0]??s)),Sn(c[1],String(u?.[1]??a)),Te(p,"--msp-from",r(f)),Te(p,"--msp-to",r(v)),fe(h,`${f.toFixed(i)}\u2013${v.toFixed(i)}`)}),m}function is(n){let e=n?.colors??[];if(!e.length)return"none";let t=e.map((s,a)=>Array.isArray(s)?{color:_e(s[0]),at:s[1]}:{color:_e(s),at:e.length===1?0:a/(e.length-1)});if(n?.kind==="set"){let s=t.length;return`linear-gradient(90deg, ${t.map((a,o)=>`${a.color} ${100*o/s}% ${100*(o+1)/s}%`).join(", ")})`}return`linear-gradient(90deg, ${t.map(s=>`${s.color} ${100*s.at}%`).join(", ")})`}var Ji=Object.entries(qa);function Uo(n){let{param:e,binding:t}=n,s=e.presetKind??"all",a=Ji.filter(([,h])=>s==="all"?!0:s==="set"?h.type==="qualitative":h.type!=="qualitative"),o=h=>a.find(([,d])=>JSON.stringify(d.list)===JSON.stringify(h?.colors))?.[1].label??"Custom",r,i=document.createTextNode(""),c=b(t.value,o),p=l(ls,{head:n.head,field:h=>y(cs,{open:h,label:n.label,children:[l("span",{class:ce.strip,ref:d=>r=d}),l("span",{class:ce.stripName,children:i})]}),body:h=>{let d=[],m=l(we,{class:ce.options,contentClass:ce.optionsContent,role:"listbox","aria-label":n.label,children:a.map(([,u])=>{let f={kind:u.type==="qualitative"?"set":"interpolate",colors:u.list};return y("button",{type:"button",role:"option",class:ce.option,ref:v=>d.push(v),onClick:()=>{t.set({kind:f.kind,colors:[...f.colors]}),h()},children:[l("span",{class:ce.strip,style:{background:is(f)}}),l("span",{class:ce.stripName,children:u.label}),l(H,{name:"check",size:14,class:ce.check})]})})});return D([c],()=>{for(let u=0;u<d.length;u++)q(d[u],"aria-selected",String(c.value===a[u][1].label))}),m}});return D([t.value],()=>{Te(r,"background",is(t.get())),fe(i,o(t.get()))}),p}function Yo(n){let{binding:e}=n,t=l("input",{class:K.input,"aria-labelledby":n.labelId,placeholder:"https://\u2026",onChange:s=>e.set(un.Url(s.currentTarget.value))});return D([e.value],()=>Sn(t,e.get()?.url??"")),t}function Xo(n){let{binding:e}=n,t=(r,i,c)=>(r??[]).map(([p,h],d)=>`${d?"L":"M"}${(p*i).toFixed(1)} ${((1-h)*c).toFixed(1)}`).join(" "),s,a=document.createTextNode(""),o=l(ls,{head:n.head,field:r=>y(cs,{open:r,label:n.label,children:[l("svg",{class:ce.spark,viewBox:"0 0 56 14",preserveAspectRatio:"none","aria-hidden":"true",children:l("path",{ref:i=>s=i})}),l("span",{class:ce.stripName,children:a})]}),body:()=>l(el,{param:n.param,binding:e,pathOf:t})});return D([e.value],()=>{let r=e.get();q(s,"d",t(r,56,14)),fe(a,`${r?.length??0} points`)}),o}function el(n){let{binding:e}=n,t=240,s=96,a=Ve(""),o=document.createTextNode(""),r=e.value,i=n.param.getPresets,c=j(!1),p,h=y("svg",{class:ce.graph,viewBox:`0 0 ${t} ${s}`,preserveAspectRatio:"none",children:[[.25,.5,.75].map(u=>l("line",{class:ce.grid,x1:String(u*t),x2:String(u*t),y1:"0",y2:String(s)})),[.25,.5,.75].map(u=>l("line",{class:ce.grid,y1:String(u*s),y2:String(u*s),x1:"0",x2:String(t)})),l("path",{class:ce.curve,ref:u=>p=u}),l(ie,{each:b(r,u=>(u??[]).map((f,v)=>v)),children:u=>{let f=b(r,g=>g?.[u]),v=l("circle",{class:ce.point,r:"4","data-index":String(u)});return D([f],()=>{q(v,"cx",String((f.value?.[0]??0)*t)),q(v,"cy",String((1-(f.value?.[1]??0))*s))}),v}})]});D([e.value],()=>q(p,"d",n.pathOf(e.get(),t,s))),D([a],()=>fe(o,a.value));let d=u=>{let f=h.getBoundingClientRect(),v=Math.min(1,Math.max(0,(u.clientX-f.left)/f.width)),g=Math.min(1,Math.max(0,1-(u.clientY-f.top)/f.height));return[Math.round(v*1e3)/1e3,Math.round(g*1e3)/1e3]};return ht(h,{start(u){let f=u.target;if(f.tagName==="circle")return Number(f.dataset.index);let v=[...e.get()??[]],g=d(u),x=v.findIndex(([M])=>M>g[0]);v.splice(x<0?v.length:x,0,g),e.set(v)},move(u,f){let v=d(u),g=[...e.get()??[]],x=f>0?g[f-1][0]:0,M=f<g.length-1?g[f+1][0]:1;g[f]=[Math.min(M,Math.max(x,v[0])),v[1]],e.set(g)}}),G(h,"pointermove",u=>{let f=d(u);a.offer(`${f[0].toFixed(2)}, ${f[1].toFixed(2)}`)}),G(h,"dblclick",u=>{let f=u.target;if(f.tagName!=="circle")return;let v=Number(f.dataset.index),g=[...e.get()??[]];g.length<=2||(g.splice(v,1),e.set(g))}),G(h,"pointerleave",()=>a.offer("")),y("div",{class:ce.graphEditor,children:[y("div",{class:ce.graphArea,children:[h,l("span",{class:ce.graphAt,children:o})]}),y("div",{class:ce.graphFoot,children:[l("p",{class:ce.graphHint,children:"Drag a point \xB7 click to add \xB7 double-click to remove"}),i?l(Qt,{open:c,label:"Curve"}):null]}),i?l(Ht,{open:c,presets:i,current:b(e.value,u=>Zt(i(),u)),onPick:u=>e.set(u)}):null]})}var Be={bar:"msp-params-help-bar",description:"msp-params-help-description",ends:"msp-params-help-ends",entry:"msp-params-help-entry",help:"msp-params-help-help",name:"msp-params-help-name",scale:"msp-params-help-scale",swatch:"msp-params-help-swatch",table:"msp-params-help-table",text:"msp-params-help-text",toggle:"msp-params-help-toggle"};_("components/params/help.module.css",`@layer msp.components {
.msp-params-help-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  &[data-help] {
    text-decoration: underline dotted color-mix(in oklab, currentColor, transparent 45%);
    text-underline-offset: 3px;
    cursor: help;
    text-decoration-thickness: 1px;
  }
}

.msp-params-help-toggle {
  width: 16px;
  height: 16px;
  color: var(--msp-color-text-subtle);
  opacity: 0;
  border-radius: 50%;
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:after {
    content: "";
    width: max(24px, var(--msp-touch-target, 0px));
    height: max(24px, var(--msp-touch-target, 0px));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover > * > &, :hover > &, &[aria-expanded="true"], &:focus-visible {
    opacity: 1;
  }

  &:hover, &[aria-expanded="true"] {
    color: var(--msp-color-text);
  }
}

.msp-params-help-help {
  gap: var(--msp-space-2);
  margin: var(--msp-space-1) 0 var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-control), transparent 40%);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  display: grid;
}

.msp-params-help-description {
  color: var(--msp-color-text-muted);
  margin: 0;
  line-height: 1.45;

  & code {
    padding: 0 var(--msp-space-1);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    border-radius: 2px;
    font-size: .95em;
  }
}

.msp-params-help-table {
  gap: var(--msp-space-1) var(--msp-space-3);
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}

.msp-params-help-entry {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  display: flex;
}

.msp-params-help-swatch {
  width: 12px;
  height: 12px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
  flex: none;
}

.msp-params-help-name {
  min-width: 0;
  color: var(--msp-color-text);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-params-help-scale {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-params-help-bar {
  height: 10px;
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge);
  border-radius: 2px;
}

.msp-params-help-ends {
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
}
`);function _o(n,e){let t=a=>a&&(a.description||a.legend)?a:void 0;if(n.help){let a=n.help;return b(e,o=>{try{return t(a(o))}catch{return}},(o,r)=>o?.description===r?.description&&o?.legend===r?.legend)}let s=t({description:n.description,legend:n.legend});return s?j(s).asReadonly:void 0}function Qo(n,e,t){if(!e)return{head:l("span",{class:Be.text,id:t,"data-tip-overflow":"",children:n}),block:null};let s=j(!1),a=b(e,i=>!!i),o,r=y(ye,{children:[l("span",{class:Be.text,id:t,"data-tip-overflow":"",ref:i=>o=i,onClick:i=>{i.currentTarget.hasAttribute("data-help")&&(i.stopPropagation(),s.set(!s.value))},children:n}),l(P,{when:a,children:()=>{let i=l("button",{type:"button",class:Be.toggle,"aria-label":`About ${n}`,title:`About ${n}`,onClick:c=>{c.stopPropagation(),s.set(!s.value)},children:l(H,{name:"circle-help",size:12})});return D([s],()=>q(i,"aria-expanded",String(s.value))),i}})]});return D([a],()=>q(o,"data-help",a.value)),{head:r,block:l(tl,{help:e,open:s})}}function tl(n){return l(P,{when:n.open,reveal:!0,children:()=>l(P,{when:n.help,children:e=>y("div",{class:Be.help,children:[e.description?l("p",{class:Be.description,children:nl(e.description)}):null,e.legend?l(sl,{legend:e.legend}):null]})})})}function nl(n){return n.split(/(`[^`]+`)/).map(e=>e.startsWith("`")&&e.endsWith("`")&&e.length>1?l("code",{children:e.slice(1,-1)}):e)}function sl(n){let{legend:e}=n;return e.kind==="table-legend"?l("ul",{class:Be.table,children:e.table.map(([t,s])=>y("li",{class:Be.entry,children:[l("span",{class:Be.swatch,style:{background:_e(s)}}),l("span",{class:Be.name,children:t})]}))}):y("div",{class:Be.scale,children:[l("span",{class:Be.bar,style:{background:is({kind:"interpolate",colors:e.colors})}}),y("span",{class:Be.ends,children:[l("span",{children:e.minLabel}),l("span",{children:e.maxLabel})]})]})}function ps(n){let{form:e}=n;return l("div",{class:K.form,children:l(Jo,{params:e.params,field:t=>({value:e.field(t),get:()=>e.values.value[t],set:s=>e.set(t,s)}),visible:t=>e.params[t].hideIf?e.visible(t):void 0,filter:al(n.filter),place:{form:e,path:""}})})}function En(n){return Object.keys(n).some(e=>!n[e].isHidden&&n[e].type!=="value")}function Jo(n){let{params:e,filter:t,place:s}=n,{essentials:a,advanced:o}=Oo(e),r=ma(t),i=new Map,c=m=>(i.has(m)||i.set(m,n.visible(m)),i.get(m)),p=(m,u)=>{if(!t&&u.some(v=>!c(v)))return m;let f=[];for(let v of u){let g=c(v);g&&f.push(g)}return t&&f.push(t),D(f,()=>{let v=t?.value??"";q(m,"hidden",!u.some(g=>c(g)?.value!==!1&&Jt(g,e[g],v)))}),m},h=m=>l(hs,{name:m,param:e[m],binding:n.field(m),visible:c(m),filter:t,place:{form:s.form,path:`${s.path}/${m}`}}),d=(m,u)=>m.flatMap(f=>f.category?[p(l("div",{children:l(Tn,{title:f.category,state:s.form.fold(`${s.path}#${u}${f.category}`),force:r,children:()=>f.names.map(h)})}),f.names)]:f.names.map(h));return!a.length||!o.length?l(ye,{children:d(a.length?a:o,"")}):y(ye,{children:[d(a,""),p(l("div",{children:l(Tn,{title:"Advanced",state:s.form.fold(`${s.path}#advanced`),force:r,children:()=>d(o,"advanced/")})}),o.flatMap(m=>m.names))]})}function al(n){return n&&b(n,e=>e.trim().toLowerCase())}function ma(n){return n&&b(n,e=>e.length>0)}function er(n,e){return e.label||Va(n)}function pa(n,e){let t=e.trim().toLowerCase();return Object.keys(n).some(s=>!n[s].isHidden&&Jt(s,n[s],t))}function Jt(n,e,t){return!t||er(n,e).toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)?!0:e.type==="group"?Object.keys(e.params).some(s=>Jt(s,e.params[s],t)):e.type==="mapped"?e.select.options.some(([s])=>{let a=e.map(s);return a.type==="group"?Object.keys(a.params).some(o=>Jt(o,a.params[o],t)):Jt(s,a,t)}):!1}function hs(n){let{name:e,param:t,binding:s,filter:a,place:o}=n,r=er(e,t),i=n.visible,c=[];i&&c.push(i),a&&c.push(a);let p=(...v)=>{let g=l("div",{children:v});return c.length&&D(c,()=>q(g,"hidden",!((i?.value??!0)&&Jt(e,t,a?.value??"")))),g},h=a&&b(a,v=>r.toLowerCase().includes(v)?"":v);if(t.type==="group")return p(l(dl,{label:r,param:t,binding:s,filter:h,force:ma(a),place:o}));let d=Xe("msp-field"),{head:m,block:u}=Qo(r,_o(t,s.value),d),f=v=>p(v,u);if(t.type==="mapped")return f(pl(t)?l(hl,{label:r,labelId:d,head:m,description:t.description,param:t,binding:s,place:o}):l(ul,{label:r,head:m,param:t,binding:s,filter:h,force:ma(a),place:o}));if(t.type==="select")return f(l(us,{label:r,head:m,description:t.description,options:t.options,binding:s}));if(t.type==="color")return f(l(ol,{label:r,labelId:d,head:m,description:t.description,binding:s}));if(t.type==="multi-select")return f(l(qo,{head:m,label:r,param:t,binding:s}));if(t.type==="mat4")return f(l(Go,{head:m,label:r,param:t,binding:s}));if(t.type==="line-graph")return f(l(Xo,{head:m,label:r,param:t,binding:s}));if(t.type==="color-list")return f(l(Uo,{head:m,label:r,param:t,binding:s}));if(t.type==="object-list")return f(l(bl,{head:m,label:r,param:t,binding:s}));if(t.type==="conditioned")return f(l(fl,{head:m,label:r,param:t,binding:s,place:o}));if(t.type==="script")return f(l(gl,{head:m,label:r,binding:s}));if(t.type==="converted"){let v={value:b(s.value,x=>t.fromValue(x)),get:()=>t.fromValue(s.get()),set:x=>s.set(t.toValue(x))},g={...t.converted,label:t.converted.label??r};return l(hs,{name:e,param:g,binding:v,visible:n.visible,filter:a,place:o})}return t.type==="value"?null:f(y("div",{class:K.row,children:[l("span",{class:K.label,children:m}),l("div",{class:K.control,children:il(t,s,d,r)})]}))}function ol(n){let{binding:e,labelId:t}=n,s=j(!1),a,o,r=document.createTextNode(""),i=y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:n.head??l("span",{id:t,children:n.label})}),l("div",{class:K.control,children:y("button",{type:"button",class:K.color,"aria-labelledby":`${t} ${t}-value`,ref:c=>o=c,onClick:()=>s.set(!s.value),children:[l("span",{class:K.swatch,ref:c=>a=c}),l("span",{class:K.channels,id:`${t}-value`,"data-tip-overflow":"",children:r})]})})]}),l(P,{when:s,reveal:!0,children:()=>l(da,{value:e.value,onChange:c=>e.set(c)})})]});return D([e.value,s],()=>{let c=e.get();Te(a,"background",_e(c)),fe(r,gt(c)),q(o,"aria-expanded",String(s.value))}),i}function rl(n){let{param:e,binding:t,labelId:s}=n,a=e.type==="file-list",o=j(!1),r=u=>{u.length&&t.set(a?u.map(f=>un.File(f)):un.File(u[0]))},i=l("input",{type:"file",hidden:!0,multiple:a,accept:e.accept,onChange:u=>{r([...u.currentTarget.files??[]]),u.currentTarget.value=""}}),c=b(t.value,u=>(u?Array.isArray(u)?u:[u]:[]).map(f=>f.name)),p,h,d=document.createTextNode(""),m=y("div",{class:K.file,ref:u=>p=u,children:[l("button",{type:"button",class:K.filePick,"aria-labelledby":s?`${s} ${s}-value`:void 0,onClick:()=>i.click(),onDragOver:u=>{u.preventDefault(),o.set(!0)},onDragLeave:()=>o.set(!1),onDrop:u=>{u.preventDefault(),u.stopPropagation(),o.set(!1),r([...u.dataTransfer?.files??[]])},children:l("span",{class:K.fileNames,id:s?`${s}-value`:void 0,ref:u=>h=u,children:d})}),l(P,{when:b(c,u=>u.length>0),children:()=>l("button",{type:"button",class:K.fileClear,"aria-label":"Clear",title:"Clear",onClick:()=>t.set(null),children:l(H,{name:"x",size:13})})}),i]});return D([c,o],()=>{let u=c.value;q(p,"data-dragging",o.value),q(h,"data-empty",u.length===0),fe(d,u.length===0?a?"Select files\u2026":"Select a file\u2026":u.length===1?u[0]:`${u.length} files \xB7 ${u.join(", ")}`)}),m}function il(n,e,t,s){switch(n.type){case"boolean":return l(tr,{binding:e,labelId:t});case"number":return l(cl,{param:n,binding:e,labelId:t});case"text":return l(ll,{binding:e,labelId:t,placeholder:n.placeholder,multiline:n.multiline});case"file":case"file-list":return l(rl,{param:n,binding:e,labelId:t});case"vec3":return l(Wo,{param:n,binding:e,label:s});case"interval":return l(Ko,{param:n,binding:e,label:s});case"url":return l(Yo,{binding:e,labelId:t});default:return l("span",{class:K.unsupported,children:n.type})}}function ll(n){let{binding:e}=n,t=n.multiline?l("textarea",{class:K.textarea,rows:3,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)}):l("input",{class:K.input,"aria-labelledby":n.labelId,placeholder:n.placeholder,onChange:s=>e.set(s.currentTarget.value)});return D([e.value],()=>Cn(t,e.get())),t}function Cn(n,e){let t=e==null?"":String(e);n.value!==t&&(n.value=t)}function tr(n){let{binding:e}=n,t=l("button",{type:"button",role:"switch",class:K.switch,"aria-labelledby":n.labelId,onClick:()=>e.set(!e.get()),children:l("span",{class:K.knob})});return D([e.value],()=>q(t,"aria-checked",String(!!e.get()))),t}function cl(n){let{param:e,binding:t,labelId:s}=n;if(e.min===void 0||e.max===void 0){let h=l("input",{class:K.input,type:"text",inputMode:"decimal","aria-labelledby":s,onChange:d=>{let m=Zo(d.currentTarget.value);Number.isFinite(m)&&t.set(m),d.currentTarget.value=ds(Number.isFinite(m)?m:t.get(),e.step)}});return D([t.value],()=>Cn(h,ds(t.get(),e.step))),h}let a=e.min,o=e.max,r=Ve(Number.NaN,(h,d)=>Object.is(h,d));Me(r,h=>{Number.isNaN(h)||t.set(h)});let i,c,p=y("div",{class:K.slider,children:[l("input",{class:K.range,type:"range","aria-labelledby":s,min:String(a),max:String(o),step:String(e.step??(o-a)/100),ref:h=>i=h,onInput:h=>r.offer(Number(h.currentTarget.value))}),l("input",{class:K.number,"aria-labelledby":s,ref:h=>c=h,onChange:h=>{let d=Zo(h.currentTarget.value),m=Number.isFinite(d)?Math.min(o,Math.max(a,d)):t.get();Number.isFinite(d)&&t.set(m),h.currentTarget.value=ds(m,e.step)}})]});return D([t.value],()=>{let h=t.get();Cn(i,h),Te(i,"--msp-progress",`${100*(h-a)/(o-a||1)}%`),Cn(c,ds(h,e.step))}),p}function ds(n,e){if(!Number.isFinite(n))return"";if(e===void 0)return String(Number(n.toFixed(4)));let t=e<1?Math.min(4,Math.ceil(-Math.log10(e))):0;return n.toFixed(t)}function Zo(n){let e=n.trim().replace(",",".");return e===""?Number.NaN:Number(e)}function us(n){let{options:e,binding:t}=n,s=j(!1),a=b(t.value,p=>String(e.findIndex(h=>h[0]===p))),o=e.map(([,p,h],d)=>[String(d),p,h]),r,i=document.createTextNode(""),c=y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:n.head??n.label}),y("div",{class:K.control,ref:p=>r=p,children:[l(ss,{size:"sm",open:s,"aria-label":n.label,label:i}),n.after]})]}),l(P,{when:s,children:()=>{let p=l(Xt,{options:o,value:a,onPick:h=>{s.set(!1),t.set(e[Number(h)][0])},onClose:()=>s.set(!1),floating:!0,"aria-label":n.label});return r?l(zt,{anchor:r,children:p}):p}})]});return D([a],()=>fe(i,o[Number(a.value)]?.[1]??"")),c}function dl(n){let{param:e,binding:t,filter:s,place:a}=n;if(!En(e.params))return null;let o=e.presets,r=u=>l(ms,{params:u,binding:t,filter:s,place:a}),i=a.form.fold(`${a.path}#open`,!!e.isExpanded),c=u=>t.set({...t.get()??{},...u}),p=o?b(t.value,u=>Zt(o,u,!0)):void 0;if(e.isFlat)return y(ye,{children:[o&&p?l(ml,{label:n.label,presets:o,current:p,onPick:c}):null,r(e.params)]});let h=typeof e.pivot=="string"&&e.params[e.pivot]?e.pivot:void 0;if(h&&(!o||!p)){let{[h]:u,...f}=e.params;return y(ye,{children:[r({[h]:u}),En(f)?l(Tn,{title:n.label,state:i,force:n.force,children:()=>r(f)}):null]})}if(!o||!p)return l(Tn,{title:n.label,state:i,force:n.force,children:()=>r(e.params)});let d=j(!1),m=j(!1);return l(Tn,{title:n.label,state:i,force:n.force,openWhen:m.asReadonly,meta:b(p,u=>u===void 0?"":o[u][1]),action:l(Qt,{open:d,label:n.label}),below:()=>l(Ht,{open:d,presets:()=>o,current:p,onPick:u=>{c(u),m.set(!0)}}),children:()=>r(e.params)})}function ml(n){let e=j(!1),t,s=document.createTextNode(""),a=y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:"Presets"}),l("div",{class:K.control,ref:o=>t=o,children:l(ss,{size:"sm",open:e,"aria-label":`${n.label} presets`,label:s})})]}),l(Ht,{open:e,presets:()=>n.presets,current:n.current,onPick:n.onPick,anchor:()=>t})]});return D([n.current],()=>{let o=n.current.value;fe(s,o===void 0?"Custom":n.presets[o][1])}),a}function pl(n){let e=n.select.options.map(t=>t[0]).sort();return e.length===2&&e[0]==="off"&&e[1]==="on"}function hl(n){let{param:e,binding:t,place:s}=n,a=b(t.value,d=>d?.name==="on"),o=s.form.fold(`${s.path}#params`),r=d=>t.set({name:d,params:sr(e.map(d))}),i={value:a,get:()=>t.get()?.name==="on",set:d=>{r(d?"on":"off"),d||o.set(!1)}},c=e.map("on"),p=c.type==="group"&&En(c.params),h={value:b(t.value,d=>d?.params),get:()=>t.get()?.params,set:d=>t.set({name:"on",params:d})};return y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:n.head??l("span",{id:n.labelId,children:n.label})}),y("div",{class:K.control,children:[l(tr,{binding:i,labelId:n.labelId}),p?l(P,{when:a,children:()=>l(nr,{open:o.asReadonly,label:`${n.label} settings`,onClick:()=>o.set(!o.value)})}):null]})]}),p?l(P,{when:b([a,o.asReadonly],(d,m)=>d&&m),children:()=>l("div",{class:K.subSettings,children:l(ms,{params:c.params,binding:h,place:{form:s.form,path:`${s.path}:on`}})})}):null]})}function ul(n){let{param:e,binding:t,place:s}=n,a=b(t.value,d=>d?.name),o={value:a,get:()=>t.get()?.name,set:d=>{let m=e.map(d);t.set({name:d,params:sr(m)})}},i=b(a,d=>{if(d===void 0)return!1;let m=e.map(d);return m.type==="group"&&!m.isFlat&&En(m.params)}),c=s.form.fold(`${s.path}#params`),p=n.force?b([c.asReadonly,n.force],(d,m)=>d||m):c.asReadonly,h=l(P,{when:i,children:()=>l(nr,{open:p,label:`${n.label} settings`,extraClass:K.afterSelect,onClick:()=>c.set(!c.value)})});return y("div",{class:K.mapped,children:[l(us,{label:n.label,head:n.head,options:e.select.options,binding:o,after:h}),l(P,{when:a,children:d=>{let m=e.map(d),u={value:b(t.value,v=>v?.params),get:()=>t.get()?.params,set:v=>t.set({name:d,params:v})},f={form:s.form,path:`${s.path}:${d}`};return m.type==="group"?m.isFlat?l(ms,{params:m.params,binding:u,filter:n.filter,place:f}):En(m.params)?l(P,{when:p,reveal:!0,children:()=>l(ms,{params:m.params,binding:u,filter:n.filter,place:f,nested:!0})}):null:l(hs,{name:d,param:m,binding:u,filter:n.filter,place:f})}})]})}function ms(n){let{params:e,binding:t}=n;return l("div",{class:n.nested?K.nested:K.fields,children:l(Jo,{params:e,field:s=>({value:b(t.value,a=>a?.[s]),get:()=>t.get()?.[s],set:a=>t.set({...t.get(),[s]:a})}),visible:s=>{let a=e[s].hideIf;if(a)return b(t.value,o=>!a(o??{}))},filter:n.filter,place:n.place})})}function fl(n){let{param:e,binding:t,place:s}=n,a=b(t.value,r=>String(e.conditionForValue(r))),o={value:a,get:()=>String(e.conditionForValue(t.get())),set:r=>t.set(e.conditionedValue(t.get(),r))};return y("div",{class:K.mapped,children:[l(us,{label:n.label,head:n.head,options:e.select.options,binding:o}),l(P,{when:a,children:r=>l("div",{class:K.nested,children:l(hs,{name:r,param:e.conditionParams[r],binding:t,place:{form:s.form,path:`${s.path}:${r}`}})})})]})}var vl=[["mol-script","MolScript"],["pymol","PyMOL"],["vmd","VMD"],["jmol","Jmol"]];function gl(n){let{binding:e}=n,t=i=>({value:b(e.value,c=>c?.[i]??""),get:()=>e.get()?.[i],set:c=>e.set({...e.get(),[i]:c})}),s=t("expression"),a=Xe("msp-field"),o,r=y("div",{class:K.mapped,children:[l(us,{label:n.label,head:n.head,options:vl,binding:t("language")}),l("div",{class:K.nested,children:y("div",{class:K.row,children:[l("span",{class:K.label,id:a,children:"Expression"}),l("div",{class:K.control,children:l("textarea",{class:K.textarea,"aria-labelledby":a,rows:3,spellcheck:!1,ref:i=>o=i,onChange:i=>s.set(i.currentTarget.value)})})]})})]});return D([s.value],()=>Cn(o,s.get())),r}function bl(n){let{param:e,binding:t}=n,s=e.presets,a=j(!1),o=b(t.value,p=>p??[]),r=(p,h)=>{let d=[...t.get()??[]];d[p]=h,t.set(d)},i=document.createTextNode(""),c=y(ye,{children:[y("div",{class:K.row,children:[l("span",{class:K.label,children:n.head}),l("div",{class:K.control,children:l("span",{class:K.count,children:i})})]}),y("div",{class:K.items,children:[l(ie,{each:b(o,p=>p.map((h,d)=>d)),children:p=>l(yl,{param:e,binding:t,index:p,replace:r})}),y("div",{class:K.itemActions,children:[y("button",{type:"button",class:K.itemAdd,"aria-label":`Add to ${n.label}`,onClick:()=>t.set([...t.get()??[],e.ctor()]),children:[l(H,{name:"plus",size:13}),"Add"]}),s?l(Qt,{open:a,label:n.label}):null]}),s?l(Ht,{open:a,presets:()=>s,current:b(t.value,p=>Zt(s,p)),onPick:p=>t.set(p)}):null]})]});return D([o],()=>{let p=o.value.length;fe(i,p===1?"1 item":`${p} items`)}),c}function yl(n){let{param:e,binding:t,index:s}=n,a=j(!1),o,r,i=document.createTextNode(""),c=y("div",{class:K.item,ref:h=>o=h,children:[y("div",{class:K.itemRow,onClick:()=>a.set(!a.value),children:[l("span",{class:K.itemLabel,children:i}),l("button",{type:"button",class:K.settings,title:"Edit","aria-label":"Edit",ref:h=>r=h,onClick:h=>{h.stopPropagation(),a.set(!a.value)},children:l(H,{name:"sliders-horizontal",size:14})}),l("button",{type:"button",class:K.settings,title:"Remove","aria-label":"Remove",onClick:h=>{h.stopPropagation(),t.set((t.get()??[]).filter((d,m)=>m!==s))},children:l(H,{name:"x",size:13})})]}),l(P,{when:a,reveal:!0,children:()=>{let h=new ns(e.element,t.get()?.[s],{onChange:d=>n.replace(s,d)});return l("div",{class:K.itemForm,children:l(ps,{form:h})})}})]}),p=b(t.value,h=>h?.[s]!==void 0?e.getLabel(h[s]):"");return D([p,a],()=>{fe(i,p.value),q(o,"data-open",a.value),q(r,"aria-expanded",String(a.value))}),c}function nr(n){let e=l("button",{type:"button",class:n.extraClass?`${K.settings} ${n.extraClass}`:K.settings,title:n.label,"aria-label":n.label,onClick:n.onClick,children:l(H,{name:"sliders-horizontal",size:14})});return D([n.open],()=>q(e,"aria-expanded",String(n.open.value))),e}function sr(n){if(n.type==="group"){let e={};for(let t of Object.keys(n.params))e[t]=n.params[t].defaultValue;return e}return n.defaultValue}function Tn(n){let e=n.state??j(!!n.open),t=n.openWhen;if(t){let c=t.value;Me(t,p=>{p&&!c&&e.set(!0),c=p})}let s=n.force?b([e.asReadonly,n.force],(c,p)=>c||p):e.asReadonly,a=n.meta,o,r=document.createTextNode(""),i=y("div",{class:K.collapsible,children:[y("div",{class:K.collapsibleBar,children:[y("button",{type:"button",class:K.collapsibleHeader,ref:c=>o=c,onClick:()=>e.set(!e.value),children:[n.title,l(H,{name:"chevron-right",size:12,class:K.chevron}),a?l("span",{class:K.collapsibleMeta,children:r}):null]}),n.action]}),n.below?.(),l(P,{when:s,reveal:!0,children:()=>l("div",{class:K.nested,children:n.children()})})]});return D(a?[s,a]:[s],()=>{q(o,"aria-expanded",String(s.value)),a&&fe(r,a.value)}),i}var ar={input:"msp-text-input-input"};_("components/text-input/text-input.module.css",`@layer msp.components {
.msp-text-input-input {
  min-width: 0;
  height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  box-shadow: inset 0 0 0 1px var(--msp-field-edge);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-sm);
  border: 0;
  margin: 0;

  &[data-size="sm"] {
    height: 24px;
  }

  &:hover {
    background: var(--msp-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: -2px;
  }

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}
}
`);function Rn(n){return l("input",{type:n.type??"text",class:`${ar.input} ${n.class??""}`,"data-size":n.size??"md",value:n.value,placeholder:n.placeholder,"aria-label":n["aria-label"],onInput:e=>n.onInput?.(e.currentTarget.value),onKeyDown:e=>{let t=e.currentTarget;e.key==="Enter"?n.onSubmit?.(t.value):e.key==="Escape"&&n.search&&t.value&&(t.value="",n.onInput?.(""),e.preventDefault(),e.stopPropagation())}})}var fs={markdown:"msp-markdown-markdown",media:"msp-markdown-media",table:"msp-markdown-table"};_("components/markdown/markdown.module.css",`@layer msp.components {
.msp-markdown-markdown {
  gap: var(--msp-space-3);
  line-height: 1.5;
  display: grid;

  & h3, & h4, & h5, & h6 {
    font-size: var(--msp-font-size-md);
    font-weight: 600;
  }

  & ul, & ol {
    gap: var(--msp-space-1);
    padding-left: var(--msp-space-5);
    display: grid;
  }

  & ul {
    list-style: outside;
  }

  & ol {
    list-style: decimal;
  }

  & code {
    padding: 0 var(--msp-space-1);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    font-family: var(--msp-font-mono);
    font-size: .92em;
  }

  & pre {
    padding: var(--msp-space-2);
    border-radius: var(--msp-radius-sm);
    background: var(--msp-color-control);
    overflow-x: auto;

    & code {
      background: none;
      padding: 0;
    }
  }

  & hr {
    border: 0;
    border-top: 1px solid var(--msp-color-border);
  }

  & img {
    border-radius: var(--msp-radius-sm);
    max-width: 100%;
  }

  & a {
    color: var(--msp-color-accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.msp-markdown-media {
  display: grid;

  & audio {
    width: 100%;
    height: 32px;
  }
}

.msp-markdown-table {
  overflow-x: auto;

  & table {
    border-collapse: collapse;
    font-variant-numeric: tabular-nums;
  }

  & th, & td {
    padding: var(--msp-space-1) var(--msp-space-2);
    border-bottom: 1px solid var(--msp-color-border);
    text-align: left;
  }

  & th {
    font-weight: 600;
  }
}
}
`);function ha(n){let e=document.createElement("div");e.className=fs.markdown;let t={onLink:n.onLink,host:n.host},s=n.host?.media;if(s){let i=document.createElement("div");i.className=fs.media,e.appendChild(i);let c=p=>{i.replaceChildren(...p?[p]:[]),i.hidden=!p};Un()?he(s,c):c(s.value)}let a=n.source.split(`
`),o,r;for(let i=0;i<a.length;i++){let c=a[i].trimEnd(),p=/^(#{1,4})\s+(.*)$/.exec(c),h=/^\s*[-*]\s+(.*)$/.exec(c),d=/^\s*\d+\.\s+(.*)$/.exec(c);if(!c.trim())o=r=void 0;else if(/^\s*```/.test(c)){o=r=void 0;let m=[];for(i++;i<a.length&&!/^\s*```/.test(a[i]);i++)m.push(a[i]);let u=document.createElement("pre");u.appendChild(vs("code",m.join(`
`))),e.appendChild(u)}else if(wl(a,i))o=r=void 0,i=kl(e,a,i,t)-1;else if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(c))o=r=void 0,e.appendChild(document.createElement("hr"));else if(p){o=r=void 0;let m=document.createElement(`h${Math.min(6,p[1].length+2)}`);Ln(m,p[2],t),e.appendChild(m)}else if(h||d){r=void 0;let m=h?"UL":"OL";(!o||o.tagName!==m)&&(o=document.createElement(h?"ul":"ol"),e.appendChild(o));let u=document.createElement("li");Ln(u,(h??d)[1],t),o.appendChild(u)}else o=void 0,r?r.appendChild(document.createTextNode(" ")):(r=document.createElement("p"),e.appendChild(r)),Ln(r,c.trim(),t)}return e}var xl=/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;function wl(n,e){return n[e].includes("|")&&e+1<n.length&&xl.test(n[e+1])&&n[e+1].includes("-")}function or(n){let e=n.trim();return e.startsWith("|")&&(e=e.slice(1)),e.endsWith("|")&&!e.endsWith("\\|")&&(e=e.slice(0,-1)),e.split(/(?<!\\)\|/).map(t=>t.trim().replace(/\\\|/g,"|"))}function kl(n,e,t,s){let a=or(e[t+1]).map(d=>d.startsWith(":")&&d.endsWith(":")?"center":d.endsWith(":")?"right":""),o=document.createElement("table"),r=(d,m,u)=>{let f=document.createElement("tr"),v=or(m);for(let g=0;g<a.length;g++){let x=document.createElement(u);a[g]&&(x.style.textAlign=a[g]),Ln(x,v[g]??"",s),f.appendChild(x)}d.appendChild(f)},i=document.createElement("thead");r(i,e[t],"th"),o.appendChild(i);let c=document.createElement("tbody"),p=t+2;for(;p<e.length&&e[p].trim()&&e[p].includes("|");p++)r(c,e[p],"td");c.childNodes.length&&o.appendChild(c);let h=document.createElement("div");return h.className=fs.table,h.appendChild(o),n.appendChild(h),p}var Ml=/\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]+)\]\(([^)\s]+)\)/g;function Ln(n,e,t){let s=0,a=new RegExp(Ml.source,"g");for(let o=a.exec(e);o;o=a.exec(e))o.index>s&&n.appendChild(document.createTextNode(e.slice(s,o.index))),o[1]!==void 0?n.appendChild(vs("strong",o[1])):o[2]!==void 0?n.appendChild(vs("em",o[2])):o[3]!==void 0?n.appendChild(vs("code",o[3])):o[5]!==void 0?n.appendChild(Cl(o[5],o[4],t)):n.appendChild(Sl(o[7],o[6],t)),s=o.index+o[0].length;s<e.length&&n.appendChild(document.createTextNode(e.slice(s)))}function Sl(n,e,t){let s=document.createElement("a");Ln(s,e,t);let a=t.host?.link?.(n);if(a){s.href="#",s.addEventListener("click",i=>{i.preventDefault(),a("click")});let r=!1;return s.addEventListener("pointerenter",()=>{r=!0,a("enter")}),s.addEventListener("pointerleave",()=>{r=!1,a("leave")}),Un()&&te(()=>r&&a("leave")),s}let o=/^https?:/i.test(n);return s.href=n.startsWith("#")||o?n:"#",o?(s.target="_blank",s.rel="noopener noreferrer"):s.addEventListener("click",r=>{r.preventDefault(),t.onLink?.(n)}),s}function Cl(n,e,t){let s=t.host?.image?.(n,e);if(s instanceof Node)return s;let a=document.createElement("img");return a.alt=e,typeof s=="string"?a.src=s:s?(a.hidden=!0,s.then(o=>{o&&(a.src=o,a.hidden=!1)},()=>{})):a.src=n,a}function vs(n,e){let t=document.createElement(n);return t.textContent=e,t}var le={bar:"msp-canvas-playback-bar",bare:"msp-canvas-playback-bare",card:"msp-canvas-playback-card",counter:"msp-canvas-playback-counter",deck:"msp-canvas-playback-deck",description:"msp-canvas-playback-description",descriptionContent:"msp-canvas-playback-descriptionContent",dot:"msp-canvas-playback-dot",dots:"msp-canvas-playback-dots",lead:"msp-canvas-playback-lead",list:"msp-canvas-playback-list",listIndex:"msp-canvas-playback-listIndex",listRow:"msp-canvas-playback-listRow",listRows:"msp-canvas-playback-listRows",listRowsContent:"msp-canvas-playback-listRowsContent",plain:"msp-canvas-playback-plain",position:"msp-canvas-playback-position",rowTitle:"msp-canvas-playback-rowTitle",scrubber:"msp-canvas-playback-scrubber",snapshots:"msp-canvas-playback-snapshots",time:"msp-canvas-playback-time",title:"msp-canvas-playback-title",trajectoryLabel:"msp-canvas-playback-trajectoryLabel"};_("views/canvas/playback.module.css",`@layer msp.components {
.msp-canvas-playback-card {
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
}

.msp-canvas-playback-deck {
  width: fit-content;
  max-width: 100%;
  font-size: var(--msp-font-size-sm);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  grid-template-columns: minmax(0, 1fr);
  justify-self: start;
  display: grid;
  overflow: clip;

  &:not(:has([data-row])) {
    display: none;
  }

  & [data-row] {
    box-shadow: 0 -1px 0 var(--msp-color-border);
  }

  & .msp-canvas-playback-bar {
    height: 32px;
    padding: 0 var(--msp-space-1);
    gap: 0;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-trajectoryLabel) {
    max-width: 168px;
    padding: 0 var(--msp-space-2);
    flex: 0 auto;
    font-weight: 500;
  }

  & :is(.msp-canvas-playback-rowTitle, .msp-canvas-playback-position) {
    margin-right: auto;
  }

  & :is(.msp-canvas-playback-counter, .msp-canvas-playback-position, .msp-canvas-playback-time) {
    font-size: var(--msp-font-size-xs);
  }

  & .msp-canvas-playback-counter {
    min-width: 36px;
  }

  & .msp-canvas-playback-time {
    min-width: 56px;
    padding-right: var(--msp-space-1);
  }

  & .msp-canvas-playback-scrubber {
    flex: 1 0 96px;
  }
}

.msp-canvas-playback-bare {
  min-width: 0;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;

  & > .msp-canvas-playback-snapshots {
    flex: 1 1 0;
  }

  & .msp-canvas-playback-description {
    flex: 1 1 0;
    max-height: none;
  }
}

.msp-canvas-playback-snapshots {
  flex-direction: column;
  min-height: 0;
  display: flex;
}

.msp-canvas-playback-bar {
  align-items: center;
  gap: var(--msp-space-1);
  height: 34px;
  padding: 0 var(--msp-space-2);
  display: flex;

  & button {
    color: var(--msp-color-text-muted);

    &:hover:not(:disabled) {
      color: var(--msp-color-text);
    }

    &[aria-pressed="true"] {
      color: var(--msp-color-accent);
    }
  }

  & svg {
    width: 16px;
    height: 16px;
  }
}

.msp-canvas-playback-lead {
  width: 24px;
  height: 24px;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
}

.msp-canvas-playback-counter {
  min-width: 44px;
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  text-align: center;
  color: var(--msp-color-text-muted);
}

.msp-canvas-playback-title {
  min-width: 0;
  padding: 0 var(--msp-space-2) 0 var(--msp-space-3);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-description {
  max-height: 40cqh;
}

.msp-canvas-playback-descriptionContent {
  min-width: 0;
  padding: 0 var(--msp-space-4) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  overflow-wrap: anywhere;
}

.msp-canvas-playback-plain {
  white-space: pre-wrap;
  margin: 0;
  line-height: 1.5;
}

.msp-canvas-playback-scrubber {
  min-width: 40px;
  height: 16px;
  margin: 0 var(--msp-space-2);
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: none;
  flex: 1;

  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      var(--msp-color-text-muted) var(--msp-progress, 0%),
      var(--msp-color-border-strong) var(--msp-progress, 0%));
    border-radius: 1px;
    height: 2px;
  }

  &::-webkit-slider-thumb {
    background: var(--msp-color-text);
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-top: -4px;
  }

  &::-moz-range-track {
    background: var(--msp-color-border-strong);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-progress {
    background: var(--msp-color-text-muted);
    border-radius: 1px;
    height: 2px;
  }

  &::-moz-range-thumb {
    background: var(--msp-color-text);
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:focus-visible {
    outline: 2px solid var(--msp-color-focus-ring);
    outline-offset: 2px;
    border-radius: var(--msp-radius-sm);
  }
}

.msp-canvas-playback-rowTitle {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-time {
  min-width: 64px;
  color: var(--msp-color-text-muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
  flex: none;
}

.msp-canvas-playback-trajectoryLabel {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  font-weight: 600;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-canvas-playback-dots {
  margin-right: var(--msp-space-2);
  align-items: center;
  display: flex;
}

.msp-canvas-playback-dot {
  place-items: center;
  width: 14px;
  height: 24px;
  display: grid;

  &:before {
    content: "";
    background: var(--msp-color-border-strong);
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }

  &:hover:before {
    background: var(--msp-color-text-muted);
  }

  &[aria-selected="true"]:before {
    background: var(--msp-color-text);
  }
}

.msp-canvas-playback-position {
  white-space: nowrap;
  height: 24px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
  flex: none;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-canvas-playback-list {
  gap: var(--msp-space-2);
  padding: 0 var(--msp-space-2) var(--msp-space-2);
  display: grid;
}

.msp-canvas-playback-listRows {
  max-height: 220px;
}

.msp-canvas-playback-listRowsContent {
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-canvas-playback-listRow {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 24px 1fr;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    color: var(--msp-color-text);
    font-weight: 600;
  }
}

.msp-canvas-playback-listIndex {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
}
`);var Tl=7;function El(n){return l(P,{when:b(n.model.count,e=>e>0),children:()=>l("section",{class:n.bare?le.bare:le.card,"aria-label":"Snapshots",children:l(Hl,{model:n.model})})})}function Rl(n){return l("section",{class:le.deck,"aria-label":"Playback",children:n.children})}function Ll(n){return l(P,{when:b(n.model.count,e=>e>1),children:()=>l(Nl,{model:n.model,compact:n.compact})})}function Pl(n){let{model:e}=n;return l(P,{when:b(e.count,t=>t>1),children:()=>{let t=j(!1);return y("div",{"data-row":!0,children:[y("div",{class:le.bar,role:"group","aria-label":"Snapshots",children:[l("span",{class:le.lead,children:l(H,{name:"snapshots",size:16})}),l("button",{type:"button",class:le.position,"aria-expanded":t,"aria-label":b(e.title,s=>s?`Snapshots: ${s}`:"Snapshots"),"data-tip":b(e.title,s=>s??"No snapshot applied"),onClick:()=>t.set(!t.value),children:b([e.index,e.count],(s,a)=>`${s<0?"\u2013":s+1} / ${a}`)}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),l(gs,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),n.actions?.()]}),l(P,{when:t,children:()=>l(cr,{model:e,onClose:()=>t.set(!1)})})]})}})}function lr(n){return l(Re,{variant:"ghost",size:"sm",icon:l(P,{when:n.muted,fallback:()=>l(H,{name:"volume-2"}),children:()=>l(H,{name:"volume-x"})}),title:b(n.muted,e=>e?"Unmute":"Mute"),pressed:n.muted,onClick:()=>n.onClick()})}function Al(n){return y("div",{class:le.bar,role:"group","aria-label":"Audio","data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"volume-2",size:16})}),l("span",{class:le.rowTitle,children:"Audio"}),l(lr,{muted:n.muted,onClick:n.onToggleMute})]})}var rr=n=>(n/1e3).toFixed(1);function zl(n){let{model:e}=n;return l(P,{when:b(e.duration,t=>t>0),children:()=>{let t=b([e.time,e.duration],(s,a)=>`${a>0?100*Math.min(s,a)/a:0}%`);return y("div",{class:le.bar,role:"group","aria-label":"Transition","data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"film",size:16})}),l("input",{class:le.scrubber,type:"range",min:"0",max:b(e.duration,String),step:b(e.step,s=>String(Math.max(1,Math.round(s)))),value:b(e.time,s=>String(Math.round(s))),style:{"--msp-progress":t},"aria-label":"Transition time",onInput:s=>e.seek(Number(s.currentTarget.value))}),l("span",{class:le.time,children:b([e.time,e.duration],(s,a)=>`${rr(s)} / ${rr(a)} s`)}),l(Re,{variant:"ghost",size:"sm",icon:l(P,{when:e.isPlaying,fallback:()=>l(H,{name:"play"}),children:()=>l(H,{name:"square"})}),title:b(e.isPlaying,s=>s?"Stop the transition":"Play the transition"),onClick:()=>e.togglePlay()})]})}})}function Hl(n){let{model:e}=n,t=j(!1),s=b(e.count,i=>i>Tl),a=j(void 0),o,r=Kt(()=>a.set(o));return Me(b([e.description,e.title],(i,c)=>i&&Fl(i,c??"")),i=>{o=i,r.start(0)}),y("div",{class:le.snapshots,children:[y("div",{class:le.bar,children:[l("span",{class:le.title,children:e.title}),l(P,{when:b(e.count,i=>i>1),children:()=>y(ye,{children:[l(P,{when:s,fallback:()=>l(Il,{model:e}),children:()=>l("button",{type:"button",class:le.position,"aria-expanded":t,"aria-label":"Snapshots",onClick:()=>t.set(!t.value),children:b([e.index,e.count],(i,c)=>`${i+1} / ${c}`)})}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:"Previous snapshot",onClick:()=>e.previous()}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:"Next snapshot",onClick:()=>e.next()}),l(gs,{playing:e.isPlaying,title:"Play snapshots",onClick:()=>e.togglePlay()})]})})]}),l(P,{when:t,children:()=>l(cr,{model:e,onClose:()=>t.set(!1)})}),l(P,{when:a.asReadonly,children:i=>l(we,{class:le.description,contentClass:le.descriptionContent,children:l(P,{when:e.plainText??!1,fallback:()=>l(ha,{source:i,onLink:c=>e.openLink(c),host:e.markdown}),children:()=>l("p",{class:le.plain,children:i})})})})]})}function Fl(n,e){let t=/^\s*#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n|$)/.exec(n);if(!t)return n;let s=ir(t[1]),a=ir(e);return!s||!(a===s||a.startsWith(`${s} `)||a.includes(` ${s} `)||a.endsWith(` ${s}`))?n:n.slice(t[0].length).replace(/^\s+/,"")}function ir(n){return n.replace(/[[(]\s*\d+\s*\/\s*\d+\s*[\])]/g," ").replace(/[*_`~]/g,"").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim()}function Il(n){let{model:e}=n;return l("span",{class:le.dots,role:"tablist","aria-label":"Snapshots",children:l(ie,{each:e.titles,children:(t,s)=>l("button",{type:"button",role:"tab",class:le.dot,"data-tip":t,"aria-label":t,"aria-selected":b([e.index,s],(a,o)=>a===o),onClick:()=>e.goTo(s.value)})})})}function cr(n){let{model:e}=n,t=j(""),s=b([e.titles,t.asReadonly],(o,r)=>{let i=r.trim().toLowerCase();return o.map((c,p)=>({title:c,index:p})).filter(c=>!i||c.title.toLowerCase().includes(i))}),a=Ze(e.index);return y("div",{class:le.list,children:[l(P,{when:b(e.count,o=>o>12),children:()=>l(Rn,{search:!0,size:"sm","aria-label":"Filter snapshots",placeholder:"Filter",value:t,onInput:o=>t.set(o)})}),l(we,{class:le.listRows,contentClass:le.listRowsContent,role:"listbox","aria-label":"Snapshots",children:l(ie,{each:s,children:o=>y("button",{type:"button",role:"option",class:le.listRow,"aria-selected":a.key(o.index),onClick:()=>{e.goTo(o.index),n.onClose()},children:[l("span",{class:le.listIndex,children:String(o.index+1)}),l("span",{children:o.title})]})},o=>o.index)})]})}var Dl=new Ns("models").asReadonly;function Nl(n){let{model:e}=n,t=e.unit??Dl,s=b(t,c=>c==="models"?"Models":"Frames"),a=b(t,c=>c==="models"?"model":"frame"),o=b(s,c=>`${c.slice(0,-1)} shown`);if(n.compact)return y("div",{class:le.bar,role:"group","aria-label":s,"data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"trajectory",size:16})}),l("span",{class:le.trajectoryLabel,children:e.label}),l("span",{class:le.counter,children:b([e.index,e.count],(c,p)=>`${c+1} / ${p}`)}),l(gs,{playing:e.isPlaying,title:b(t,c=>`Play ${c}`),onClick:()=>e.togglePlay()})]});let r=c=>{let p=e.count.value;p>1&&e.seek(((e.index.value+c)%p+p)%p)},i=b([e.index,e.count],(c,p)=>`${p>1?100*c/(p-1):0}%`);return y("div",{class:le.bar,role:"group","aria-label":s,"data-row":!0,children:[l("span",{class:le.lead,children:l(H,{name:"trajectory",size:16})}),l("span",{class:le.trajectoryLabel,children:e.label}),l("span",{class:le.counter,children:b([e.index,e.count],(c,p)=>`${c+1} / ${p}`)}),l("input",{class:le.scrubber,type:"range",min:"0",max:b(e.count,c=>String(c-1)),value:b(e.index,String),style:{"--msp-progress":i},"aria-label":o,"aria-valuetext":b([s,e.index,e.count],(c,p,h)=>`${c.slice(0,-1)} ${p+1} of ${h}`),onInput:c=>e.seek(Number(c.currentTarget.value))}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-left"}),title:b(a,c=>`Previous ${c}`),onClick:()=>r(-1)}),l(gs,{playing:e.isPlaying,title:b(t,c=>`Play ${c}`),onClick:()=>e.togglePlay()}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"chevron-right"}),title:b(a,c=>`Next ${c}`),onClick:()=>r(1)})]})}function gs(n){let e=typeof n.title=="string"?new Ns(n.title).asReadonly:n.title;return l(Re,{variant:"ghost",size:"sm",icon:l(P,{when:n.playing,fallback:()=>l(H,{name:"play"}),children:()=>l(H,{name:"pause"})}),title:b([n.playing,e],(t,s)=>t?"Pause":s),pressed:n.playing,onClick:()=>n.onClick()})}function Qe(n){let e=l("div",{class:n.class,style:"display: contents"}),t=n.renderer.mount(e,n.ctx,ge("ViewHost"));return te(t),e}var Ft={body:"msp-shell-section-list-body",chevron:"msp-shell-section-list-chevron",header:"msp-shell-section-list-header",list:"msp-shell-section-list-list",section:"msp-shell-section-list-section",title:"msp-shell-section-list-title"};_("views/shell/section-list.module.css",`@layer msp.components {
.msp-shell-section-list-list {
  font-size: var(--msp-font-size-sm);
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  display: grid;
}

.msp-shell-section-list-section {
  border-radius: var(--msp-radius-md);

  &:has([aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-shell-section-list-header {
  align-items: center;
  gap: var(--msp-space-3);
  width: 100%;
  height: var(--msp-row-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  text-align: left;
  font-weight: 600;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-expanded="true"] {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-shell-section-list-title {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-section-list-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-shell-section-list-body {
  padding: var(--msp-space-2) var(--msp-space-3) var(--msp-space-3);
}

.msp-shell-section-list-list[data-bare] {
  padding: 0;

  & .msp-shell-section-list-header {
    height: 32px;
  }
}

.msp-shell-section-list-list[data-flat] {
  padding: 0;

  & .msp-shell-section-list-section {
    background: none;
  }

  & .msp-shell-section-list-header {
    height: 26px;
    font-size: var(--msp-font-size-sm);
    padding: 0;

    &:hover {
      color: var(--msp-color-accent);
      background: none;
    }
  }

  & .msp-shell-section-list-body {
    padding: 0 0 var(--msp-space-2);
  }
}
}
`);function Ol(n){let{shell:e,subject:t}=n,s={shell:e,subject:t},a=e.sections(n.slot),r=b(a,h=>h.filter(d=>!d.when||d.when(s))),i=n.focus,c=h=>!!i&&(i===h||i.startsWith(`${h}/`)),p=h=>i?.startsWith(`${h}/`)?i.slice(h.length+1):void 0;return l("div",{class:Ft.list,"data-flat":n.flat?"":void 0,"data-bare":n.bare?"":void 0,children:l(ie,{each:r,children:h=>l($l,{ctx:p(h.id)?{...s,focus:p(h.id)}:s,slot:n.slot,section:h,open:i?c(h.id):e.sectionOpen(n.slot,h.id)??(!n.collapsed||!!h.open),focused:c(h.id)})},h=>h.id)})}function $l(n){let{ctx:e,section:t}=n,s=j(n.open),a=j(n.open),o=j(!1),r,i,c,p=()=>{o.set(!0),c?.cancel(),c=void 0,a.set(!a.value);let d=!a.value&&s.value&&r?_n(r,"grow"):void 0;if(d){c=d,e.shell.setSectionOpen(n.slot,t.id,!1),d.finished.then(()=>{c===d&&(c=void 0,s.set(!1),d.cancel())},()=>{});return}s.set(a.value),e.shell.setSectionOpen(n.slot,t.id,s.value)},h=y("section",{class:Ft.section,"data-section":t.id,children:[y("button",{type:"button",class:Ft.header,ref:d=>i=d,onClick:p,children:[l("span",{class:Ft.title,children:t.heading??t.title}),l(H,{name:"chevron-down",size:14,class:Ft.chevron})]}),l("div",{class:Ft.body,ref:d=>{r=d},children:pt(s.asReadonly,()=>l(Qe,{renderer:t.render,ctx:e}))})]});return D([a,s,o],()=>{q(i,"aria-expanded",String(a.value)),q(r,"hidden",!s.value),q(r,"data-reveal",o.value)}),n.focused&&(e.shell.setSectionOpen(n.slot,t.id,!0),queueMicrotask(()=>h.scrollIntoView({block:"nearest"}))),h}var dr=class{constructor(e){this.target=e;this.available=typeof document<"u"&&!!document.fullscreenEnabled,this.embedded=typeof window<"u"&&window.self!==window.top,typeof document<"u"&&document.addEventListener("fullscreenchange",this.#n)}#e=j(!1);#n=()=>this.#e.set(this.#a());#a(){let e=this.target();return!e||typeof document>"u"?!1:(e.getRootNode().fullscreenElement??document.fullscreenElement)===e}get mode(){return this.embedded&&this.available?"fullscreen":"expand"}get active(){return this.#e.asReadonly}get unavailableReason(){return this.available?void 0:"Not allowed by the page Mol* is embedded in"}async toggle(){if(this.available)try{this.#a()?await document.exitFullscreen():await this.target()?.requestFullscreen()}catch(e){console.error(e)}}dispose(){typeof document<"u"&&document.removeEventListener("fullscreenchange",this.#n)}};var en={choice:"msp-choices-choice",group:"msp-choices-group",label:"msp-choices-label",row:"msp-choices-row",text:"msp-choices-text"};_("components/choices/choices.module.css",`@layer msp.components {
.msp-choices-group {
  gap: var(--msp-space-1);
  grid-template-columns: minmax(0, 1fr);
  min-width: 0;
  display: grid;
}

.msp-choices-label {
  padding: 0 var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-choices-row {
  gap: var(--msp-space-1);
  grid-template-columns: repeat(auto-fit, minmax(min(64px, 100%), 1fr));
  display: grid;
}

.msp-choices-choice {
  justify-content: center;
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 28px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[aria-pressed="true"] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 82%);
    color: var(--msp-color-accent);
  }

  & > svg {
    flex: none;
  }
}

.msp-choices-text {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}
}
`);function Bl(n){let{active:e}=n;return y("div",{class:en.group,children:[n.label?l("span",{class:en.label,children:n.label}):null,l("div",{class:en.row,role:"group","aria-label":n.label,children:n.choices.map(t=>y("button",{type:"button",class:en.choice,title:t.title,"aria-pressed":e&&b(e,s=>s===t.id),onClick:()=>n.onPick(t.id),children:[t.icon?l(H,{name:t.icon,size:15}):null,l("span",{class:en.text,"data-tip-overflow":"",children:t.label})]}))})]})}var je={bar:"msp-legend-bar",caption:"msp-legend-caption",dot:"msp-legend-dot",ends:"msp-legend-ends",item:"msp-legend-item",label:"msp-legend-label",legend:"msp-legend-legend",line:"msp-legend-line",mark:"msp-legend-mark",none:"msp-legend-none",ramp:"msp-legend-ramp",swatch:"msp-legend-swatch",title:"msp-legend-title"};_("components/legend/legend.module.css",`@layer msp.components {
.msp-legend-legend {
  gap: var(--msp-space-2);
  min-width: 0;
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  line-height: 1.3;
  display: flex;
}

.msp-legend-title {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-item {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  display: flex;
}

.msp-legend-label {
  white-space: nowrap;
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-legend-mark {
  background: var(--legend-color, transparent);
  flex: none;
}

.msp-legend-swatch {
  border-radius: var(--msp-radius-sm);
  width: 12px;
  height: 12px;
}

.msp-legend-dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}

.msp-legend-line {
  border-radius: 2px;
  width: 14px;
  height: 3px;
}

.msp-legend-none {
  background: color-mix(in oklab, var(--msp-color-text), transparent 85%);
}

.msp-legend-ramp {
  gap: var(--msp-space-1);
  flex-direction: column;
  display: flex;
}

.msp-legend-caption {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
}

.msp-legend-bar {
  border-radius: var(--msp-radius-sm);
  height: 8px;
  display: block;
}

.msp-legend-ends {
  justify-content: space-between;
  gap: var(--msp-space-3);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}
}
`);function jl(n){return`linear-gradient(to right, ${(n.stops.length>0?n.stops:[{t:0,color:"transparent"}]).map(s=>`${s.color} ${(Math.min(1,Math.max(0,s.t))*100).toFixed(1)}%`).join(", ")})`}function Vl(n){let e=n.items??[],t=n.ramps??[];return y("div",{class:n.class?`${je.legend} ${n.class}`:je.legend,role:"group","aria-label":"Legend",children:[l(P,{when:n.title,children:s=>l("span",{class:je.title,children:s})}),l(ie,{each:e,children:s=>y("div",{class:je.item,children:[l("span",{class:`${je.mark} ${je[s.glyph??"swatch"]}`,classList:{[je.none]:s.color===null},style:{"--legend-color":s.color??void 0},"aria-hidden":"true"}),l("span",{class:je.label,children:s.label})]})}),l(ie,{each:t,children:s=>y("div",{class:je.ramp,children:[s.caption?l("span",{class:je.caption,children:s.caption}):null,l("span",{class:je.bar,style:{background:jl(s)},role:"img","aria-label":`${s.lo} to ${s.hi}`}),y("span",{class:je.ends,children:[l("span",{children:s.lo}),l("span",{children:s.hi})]})]})})]})}var tn={core:"msp-icon-wordmark-core",flash:"msp-icon-wordmark-flash","flash-hover":"msp-icon-wordmark-flash-hover","flash-often":"msp-icon-wordmark-flash-often","flash-rare":"msp-icon-wordmark-flash-rare","flash-reveal":"msp-icon-wordmark-flash-reveal",live:"msp-icon-wordmark-live",outline:"msp-icon-wordmark-outline",wordmark:"msp-icon-wordmark-wordmark"};_("components/icon/wordmark.module.css",`@layer msp.components {
.msp-icon-wordmark-wordmark {
  width: calc(var(--msp-wordmark-width, 72) * 1px * var(--msp-wordmark-scale, 1));
  height: calc(22px * var(--msp-wordmark-scale, 1));
  flex: none;
  display: block;
  position: relative;

  & svg {
    stroke-width: calc(1.5 / sqrt(var(--msp-wordmark-scale, 1)));
    position: absolute;
    inset: 0;
    overflow: visible;
  }
}

.msp-icon-wordmark-core {
  stroke-width: calc(2.4 / sqrt(var(--msp-wordmark-scale, 1)));
}

.msp-icon-wordmark-outline {
  color: inherit;
}

.msp-icon-wordmark-flash {
  animation: 14s ease-in-out .3s infinite both msp-icon-wordmark-flash-rare;
  mask-image: linear-gradient(100deg, #0000 0 38%, #000 47% 53%, #0000 62% 100%);
  mask-position: 100% 0;
  mask-size: 300% 100%;
  mask-repeat: no-repeat;

  [data-flash="often"] > & {
    animation: 7s ease-in-out .3s infinite both msp-icon-wordmark-flash-often;
  }

  [data-flash="reveal"] > & {
    animation: 1.4s ease-out both msp-icon-wordmark-flash-reveal;
    mask-image: linear-gradient(100deg, #000 0 42%, #0000 58% 100%);
  }

  .msp-icon-wordmark-wordmark:not([data-flash="reveal"], [data-live]):hover & {
    animation: 2.8s ease-in-out both msp-icon-wordmark-flash-hover;
  }
}

@keyframes msp-icon-wordmark-flash-rare {
  0% {
    mask-position: 100% 0;
  }

  20%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-often {
  0% {
    mask-position: 100% 0;
  }

  40%, 100% {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-reveal {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

@keyframes msp-icon-wordmark-flash-hover {
  from {
    mask-position: 100% 0;
  }

  to {
    mask-position: 0 0;
  }
}

.msp-icon-wordmark-wordmark[data-live] {
  pointer-events: auto;
}

.msp-icon-wordmark-live {
  opacity: 0;
  --msp-wordmark-strip: calc(14px * var(--msp-wordmark-scale, 1));
  mask-image: linear-gradient(90deg,
    transparent calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip)),
    #000 calc(var(--msp-wordmark-x, 50%) - var(--msp-wordmark-strip) / 3),
    #000 calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip) / 3),
    transparent calc(var(--msp-wordmark-x, 50%) + var(--msp-wordmark-strip)));
  transition: opacity .6s var(--msp-ease);

  .msp-icon-wordmark-wordmark:hover > & {
    opacity: 1;
    transition-duration: .2s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-icon-wordmark-flash {
    animation: none;
  }
}
}
`);var mr="M0.5 1.5 3.5 1.5 8.5 10.5 13.5 1.5 16.5 1.5 16.5 19.5 13.5 19.5 13.5 7.68 8.5 16.68 3.5 7.68 3.5 19.5 0.5 19.5Z",pr="M46.5 3.5 49.5 3.5 49.5 6.38 51.54 4.34 53.66 6.46 51.62 8.5 54.5 8.5 54.5 11.5 51.62 11.5 53.66 13.54 51.54 15.66 49.5 13.62 49.5 16.5 46.5 16.5 46.5 13.62 44.46 15.66 42.34 13.54 44.38 11.5 36.5 11.5 36.5 19.5 33.5 19.5 33.5 0.5 36.5 0.5 36.5 8.5 44.38 8.5 42.34 6.46 44.46 4.34 46.5 6.38Z",ql="M57.5 3.5 68.76 10 57.5 16.5Z",Wl="M60 7.83 63.76 10 60 12.17Z",Gl=72,hr=57,ur=48,fr=10,Kl="M24.5 6.5H25.5A5 5 0 0 1 30.5 11.5V14.5A5 5 0 0 1 25.5 19.5H24.5A5 5 0 0 1 19.5 14.5V11.5A5 5 0 0 1 24.5 6.5Z",Ul="M25 9.5A2.5 2.5 0 0 1 27.5 12V14A2.5 2.5 0 0 1 25 16.5A2.5 2.5 0 0 1 22.5 14V12A2.5 2.5 0 0 1 25 9.5Z",ve={paths:[mr,Kl,Ul,pr],width:hr,height:22,star:{x:ur,y:fr},stroke:n=>1.5/Math.sqrt(n)},Yl=0;function vr(n){return y(ye,{children:[l("path",{d:mr}),l("rect",{x:"19.5",y:"6.5",width:"11",height:"13",rx:"5"}),l("rect",{x:"22.5",y:"9.5",width:"5",height:"7",rx:"2.5"}),l("path",{d:pr}),n.prism?l("path",{d:ql,"data-part":"prism"}):null,n.prism?l("path",{d:Wl,class:tn.core}):null]})}function ua(n){let e=`msp-wordmark-${++Yl}`,t=Math.max(1,Math.round(n.scale??1)),s=n.prism??!0,a=s?Gl:hr,o=c=>y("svg",{class:c.class,viewBox:`-1 -1 ${a} 22`,width:a*t,height:22*t,fill:"none",stroke:c.stroke,"stroke-linejoin":"miter","aria-hidden":c.hidden?"true":void 0,children:[c.hidden?l("defs",{children:y("linearGradient",{id:e,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:String(a-2),y2:"0",children:[l("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),l("stop",{offset:"0.35",style:{"stop-color":"var(--msp-color-brand-2)"}}),l("stop",{offset:"0.6",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]})}):null,l(vr,{prism:s}),c.hidden?null:l("rect",{"data-part":"star",x:ur-.5,y:fr-.5,width:"1",height:"1",stroke:"none",visibility:"hidden"})]}),r=n.live?Xl(e,t,a,s):void 0,i=y("span",{class:`${tn.wordmark} ${n.class??""}`,style:{"--msp-wordmark-scale":t,"--msp-wordmark-width":a},"data-flash":n.flash??"rare","data-live":n.live?"":void 0,role:"img","aria-label":"Mol* Prism",children:[o({class:tn.outline,stroke:"currentColor"}),o({class:tn.flash,stroke:`url(#${e})`,hidden:!0}),r?.svg]});return r&&G(i,"pointermove",c=>{let p=i.getBoundingClientRect(),h=c.clientX-p.left,d=h/t-1;r.gradient.setAttribute("x1",String(d-14)),r.gradient.setAttribute("x2",String(d+14)),i.style.setProperty("--msp-wordmark-x",`${h}px`)}),i}function Xl(n,e,t,s){let a=y("linearGradient",{id:`${n}-live`,gradientUnits:"userSpaceOnUse",x1:"13",y1:"0",x2:"41",y2:"0",children:[l("stop",{offset:"0",style:{"stop-color":"var(--msp-color-brand-1)"}}),l("stop",{offset:"0.3",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"0.5",style:{"stop-color":"var(--msp-color-brand-2)"}}),l("stop",{offset:"0.7",style:{"stop-color":"var(--msp-color-brand-3)"}}),l("stop",{offset:"1",style:{"stop-color":"var(--msp-color-brand-4)"}})]});return{svg:y("svg",{class:tn.live,viewBox:`-1 -1 ${t} 22`,width:t*e,height:22*e,fill:"none",stroke:`url(#${n}-live)`,"stroke-linejoin":"miter","aria-hidden":"true",children:[l("defs",{children:a}),l(vr,{prism:s})]}),gradient:a}}var bs={canvas:"msp-shell-glass-wordmark-canvas",wordmark:"msp-shell-glass-wordmark-wordmark"};_("views/shell/glass-wordmark.module.css",`@layer msp.components {
.msp-shell-glass-wordmark-wordmark {
  flex: none;
  display: block;
  position: relative;
}

.msp-shell-glass-wordmark-canvas {
  pointer-events: none;
  position: absolute;
}
}
`);var It=11,an=4,be=It*an*2,gr={duration:2.4,stagger:.7},nn={duration:.45,stagger:.12},_l=.8,Ql=3,br=14,yr=1.4,Zl=.1,fa=140,va=11,sn=11,Jl=3;function ec(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function tc(n){let t=n-1;return 1+(1.4+1)*t*t*t+1.4*t*t}var yt=class{constructor(e=11,t=1){this.#a=[];this.#r=new Float32Array(be);this.#t=new Float32Array(be);this.#o=new Float32Array(be);this.#s=new Float32Array(be);this.#i=new Float32Array(be);this.#h=new Float32Array(be);this.#u=new Float32Array(be);this.#f=new Float32Array(be);this.#T=new Float32Array(be);this.#E=new Float32Array(be);this.#P=new Float32Array(be);this.#A=new Float32Array(be);this.#p=new Float32Array(be);this.#d=new Float32Array(be);this.#g=new Float32Array(be);this.#v=new Float32Array(be);this.#_=new Float32Array(be);this.#W=new Float32Array(be);this.#m=gr;this.#l="whole";this.#O=0;this.#b=0;this.#c=!1;this.#y=!1;this.#G=0;this.#$=0;this.#I=!0;this.#z=!1;this.onWhole=()=>{};this.onSnap=()=>{};this.count=be;this.#K=0;this.#w=0;this.#R=0;this.corners=new Float32Array(be*6);this.#e=ec(e),this.#x=t,this.#n=ve.paths.map(m=>new Path2D(m));let s=-1,a=-1,o=ve.width,r=ve.height,i=[],c=[];for(let m=0;m<=an;m++)for(let u=0;u<=It;u++){let f=m>0&&m<an&&u>0&&u<It;i.push(s+u/It*o+(f?(this.#e()-.5)*.7*(o/It):0)),c.push(a+m/an*r+(f?(this.#e()-.5)*.7*(r/an):0))}let p=(m,u)=>u*(It+1)+m,h=0,d=(m,u,f)=>{let v=(i[m]+i[u]+i[f])/3,g=(c[m]+c[u]+c[f])/3,x=new Path2D;x.moveTo(i[m]-v,c[m]-g),x.lineTo(i[u]-v,c[u]-g),x.lineTo(i[f]-v,c[f]-g),x.closePath(),this.#a.push(x),this.corners.set([i[m]-v,c[m]-g,i[u]-v,c[u]-g,i[f]-v,c[f]-g],h*6),this.#r[h]=v,this.#t[h]=g,h++};for(let m=0;m<an;m++)for(let u=0;u<It;u++){let[f,v,g,x]=[p(u,m),p(u+1,m),p(u,m+1),p(u+1,m+1)];this.#e()<.5?(d(f,v,x),d(f,x,g)):(d(f,v,g),d(v,x,g))}}#e;#n;#a;#r;#t;#o;#s;#i;#h;#u;#f;#T;#E;#P;#A;#p;#d;#g;#v;#_;#W;#m;#l;#O;#b;#c;#y;#G;#$;#I;#z;#x;#D;#K;#U;#w;#R;place(e,t){t[0]=this.#r[e]+this.#o[e]+this.#p[e],t[1]=this.#t[e]+this.#s[e]+this.#d[e],t[2]=this.#i[e]+this.#g[e],t[3]=this.#r[e],t[4]=this.#t[e]}get assembled(){let e=0;for(let t=0;t<be;t++){let s=this.#o[t],a=this.#s[t];e+=Math.sqrt(s*s+a*a)+Math.abs(this.#i[t])*6}return Math.exp(-e/be/Jl)}get pull(){if(this.#l!=="assembling"||this.#m!==nn)return 0;let e=nn.duration+nn.stagger,t=Math.min(1,(this.#b-this.#O)/e);return(1-t)*(1-t)}get resting(){return this.#I}get animating(){return this.#l!=="whole"||this.#z}get phase(){return this.#l}get whole(){return this.#l==="whole"}scatter(e=gr){for(let t=0;t<be;t++){let s=this.#e()*Math.PI*2,a=(18+this.#e()*36)*this.#x;this.#T[t]=Math.cos(s)*a,this.#E[t]=Math.sin(s)*a*.7,this.#P[t]=(this.#e()*2-1)*1.6,this.#A[t]=this.#e()*e.stagger}this.#m=e,this.#c=!0,this.#k("assembling")}setPointer(e,t){this.#y=!0,this.#G=e,this.#$=t}clearPointer(){this.#y=!1}shatter(e,t){let s=this.#l==="broken";for(let a=0;a<be;a++){let o=this.#r[a]+this.#o[a]-e,r=this.#t[a]+this.#s[a]-t,i=Math.hypot(o,r)||1,c=(26+this.#e()*34)/(1+i*.04)*this.#x,p=s?1:0;this.#h[a]=this.#h[a]*p+o/i*c+(this.#e()-.5)*6,this.#u[a]=this.#u[a]*p+r/i*c+(this.#e()-.5)*6,this.#f[a]=this.#f[a]*p+(this.#e()*2-1)*6}this.#k("broken")}hits(e,t){if(this.#l==="whole")return e>=-2&&e<=ve.width+1&&t>=-2&&t<=ve.height+1;for(let s=0;s<be;s++){let a=this.#r[s]+this.#o[s]-e,o=this.#t[s]+this.#s[s]-t;if(a*a+o*o<36)return!0}return!1}#k(e){let t=this.#l==="whole";this.#l=e,this.#O=this.#b,this.#I=!1,t&&e!=="whole"&&this.onWhole(!1)}#M(){for(let e=0;e<be;e++)this.#T[e]=this.#o[e],this.#E[e]=this.#s[e],this.#P[e]=this.#i[e],this.#A[e]=this.#e()*nn.stagger;this.#m=nn,this.#c=!1,this.#k("assembling")}step(e){this.#b+=e;let t=this.#b-this.#O;if(this.#S(e),this.#l==="broken"){let s=Math.exp(-Ql*e);for(let a=0;a<be;a++)this.#o[a]+=this.#h[a]*e,this.#s[a]+=this.#u[a]*e,this.#i[a]+=this.#f[a]*e,this.#h[a]*=s,this.#u[a]*=s,this.#f[a]*=s;t>=_l&&this.#M()}else if(this.#l==="assembling"){let s=!0;for(let a=0;a<be;a++){let o=Math.min(1,Math.max(0,(t-this.#A[a])/this.#m.duration));o<1&&(s=!1);let r=1-o,i=this.#m===nn?1-tc(o):r*r*r*r*r;this.#o[a]=this.#T[a]*i,this.#s[a]=this.#E[a]*i,this.#i[a]=this.#P[a]*i}s&&(this.#o.fill(0),this.#s.fill(0),this.#i.fill(0),this.#l="whole",this.onWhole(!0),this.onSnap())}}#S(e){let t=Math.min(e,.03333333333333333),s=!1,a=!1;for(let o=0;o<be;o++){let r=0,i=0,c=0;if(this.#y){let p=this.#r[o]+this.#o[o]-this.#G,h=this.#t[o]+this.#s[o]-this.#$,d=Math.sqrt(p*p+h*h);if(d<br){let m=1-d/br,u=m*m,f=1/(d||1);r=p*f*yr*u,i=h*f*yr*u,c=(p>=0?1:-1)*Zl*u}}(Math.abs(r-this.#p[o])+Math.abs(i-this.#d[o])>.01||Math.abs(c-this.#g[o])>.001||Math.abs(this.#v[o])+Math.abs(this.#_[o])>.02)&&(a=!0),this.#v[o]+=(fa*(r-this.#p[o])-va*this.#v[o])*t,this.#_[o]+=(fa*(i-this.#d[o])-va*this.#_[o])*t,this.#W[o]+=(fa*(c-this.#g[o])-va*this.#W[o])*t,this.#p[o]+=this.#v[o]*t,this.#d[o]+=this.#_[o]*t,this.#g[o]+=this.#W[o]*t,(Math.abs(this.#p[o])+Math.abs(this.#d[o])>.01||Math.abs(this.#g[o])>.001||Math.abs(this.#v[o])+Math.abs(this.#_[o])>.02)&&(s=!0)}this.#I=this.#l==="whole"&&!s,this.#z=a}draw(e,t,s,a,o,r,i,c=1){let p=this.#b-this.#O;if(this.#I){e.save(),e.translate(t,s),e.scale(a,a),e.globalAlpha=i,e.strokeStyle=o,e.lineWidth=ve.stroke(a),e.lineJoin="miter";for(let m=0;m<this.#n.length;m++)e.stroke(this.#n[m]);e.restore(),e.globalAlpha=1;return}let h=this.#B(a,c,o),d=a*c;e.save(),e.lineWidth=.35,e.strokeStyle=r;for(let m=0;m<be;m++){let u=this.#o[m]+this.#p[m],f=this.#s[m]+this.#d[m],v=this.#i[m]+this.#g[m],g=this.#l==="assembling"&&this.#c?Math.min(1,Math.max(0,(p-this.#A[m])/(this.#m.duration*.35))):1;if(g<=0)continue;let x=Math.cos(v)*d,M=Math.sin(v)*d;e.setTransform(x,M,-M,x,(t+(this.#r[m]+u)*a)*c,(s+(this.#t[m]+f)*a)*c);let C=Math.abs(this.#o[m])+Math.abs(this.#s[m])+Math.abs(this.#i[m])*6,E=Math.abs(this.#p[m])+Math.abs(this.#d[m])+Math.abs(this.#g[m])*6,F=Math.min(1,C/8+E/3)*.22*i*g;if(F>.01&&(e.globalAlpha=F,e.stroke(this.#a[m])),e.globalAlpha=i*g,h){let O=this.#w,A=this.#R;e.drawImage(h,m%sn*O,(m/sn|0)*A,O,A,-O/(2*d),-A/(2*d),O/d,A/d)}else{e.save(),e.clip(this.#a[m]),e.translate(-this.#r[m],-this.#t[m]),e.strokeStyle=o,e.lineWidth=ve.stroke(a),e.lineJoin="miter";for(let O=0;O<this.#n.length;O++)e.stroke(this.#n[O]);e.restore()}}e.restore(),e.globalAlpha=1}#B(e,t,s){let a=e*t;if(this.#D&&this.#K===a&&this.#U===s)return this.#D;if(typeof document>"u")return;let o=this.#D??document.createElement("canvas"),r=o.getContext("2d");if(!r)return;let i=0;for(let h=0;h<this.corners.length;h++)i=Math.max(i,Math.abs(this.corners[h]));let c=ve.stroke(e)/2+.5,p=Math.ceil(2*(i+c)*a);this.#w=p,this.#R=p,o.width=p*sn,o.height=p*Math.ceil(be/sn),r.clearRect(0,0,o.width,o.height),r.strokeStyle=s,r.lineWidth=ve.stroke(e),r.lineJoin="miter";for(let h=0;h<be;h++){r.setTransform(a,0,0,a,h%sn*p+p/2,(h/sn|0)*p+p/2),r.save(),r.clip(this.#a[h]),r.translate(-this.#r[h],-this.#t[h]);for(let d=0;d<this.#n.length;d++)r.stroke(this.#n[d]);r.restore()}return r.setTransform(1,0,0,1,0,0),this.#D=o,this.#K=a,this.#U=s,o}};var nc=.35,sc={duration:.9,stagger:.3},ac=22;function oc(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function rc(n){let e=Math.max(1,Math.round(n.scale??1)),t=ve.width*e,s=ve.height*e,a=ac*e,o=l("canvas",{class:bs.canvas,"aria-hidden":"true",style:{left:`${-a}px`,top:`${-a}px`,width:`${t+2*a}px`,height:`${s+2*a}px`}}),r=l("span",{class:n.class?`${bs.wordmark} ${n.class}`:bs.wordmark,style:{width:`${t}px`,height:`${s}px`},role:"img","aria-label":"Mol*",children:o}),i=o.getContext("2d"),p=oc()||typeof Path2D!="function"||!i?void 0:new yt(23,nc),h=a+e,d=1,m="currentColor",u="currentColor",f=()=>{if(!i)return;d=Math.min(2,globalThis.devicePixelRatio||1),o.width=Math.round((t+2*a)*d),o.height=Math.round((s+2*a)*d);let w=I=>(o.style.color=`var(${I})`,getComputedStyle(o).color),T=i.createLinearGradient(0,0,ve.width-2,0);T.addColorStop(0,w("--msp-color-brand-1")),T.addColorStop(.35,w("--msp-color-brand-2")),T.addColorStop(.6,w("--msp-color-brand-3")),T.addColorStop(1,w("--msp-color-brand-4")),m=T,u=w("--msp-color-text-subtle"),o.style.color=""},v,g=()=>{if(i){if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,o.width,o.height),i.setTransform(d,0,0,d,0,0),p){p.draw(i,h,h,e,m,u,1,d);return}i.translate(h,h),i.scale(e,e),i.strokeStyle=m,i.lineWidth=ve.stroke(e),i.lineJoin="miter",v??=ve.paths.map(w=>new Path2D(w));for(let w=0;w<v.length;w++)i.stroke(v[w])}},x=0,M=!0,C=!1,F=Ut(w=>{if(!M)return;if(C){if(C=!1,f(),p&&(n.assemble?.()??!0)){p.scatter(sc),O();return}g(),p&&!p.resting&&O();return}if(!p)return;let T=x?Math.min(.05,(w-x)/1e3):1/60;x=w,p.step(T),g(),p.resting?x=0:O()}),O=()=>F.request(),A=()=>{!p||!M||O()},S,N=w=>(S??=r.getBoundingClientRect(),{u:(w.clientX-S.left)/e-1,v:(w.clientY-S.top)/e-1});return p&&(G(r,"pointerenter",()=>{S=r.getBoundingClientRect()}),G(r,"pointermove",w=>{let T=N(w);p.setPointer(T.u,T.v),A()}),G(r,"pointerleave",()=>{p.clearPointer(),S=void 0,A()}),G(r,"pointerdown",w=>{let T=N(w);p.shatter(T.u,T.v),A()})),Wt(w=>{if(M=w,!w){F.cancel(),x=0;return}C=!0,O()}),te(()=>{M=!1}),r}var Ge={content:"msp-virtual-list-content",enter:"msp-virtual-list-enter",glide:"msp-virtual-list-glide",list:"msp-virtual-list-list",row:"msp-virtual-list-row",window:"msp-virtual-list-window"};_("components/virtual-list/virtual-list.module.css",`@layer msp.components {
.msp-virtual-list-list {
  flex: 1 1 0;
}

.msp-virtual-list-content {
  contain: strict;
  background-image: linear-gradient(to bottom,
    transparent 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 38%,
    color-mix(in srgb, var(--msp-color-text) 7%, transparent) 62%,
    transparent 62%);
  background-size: calc(100% - 2 * var(--msp-space-6)) var(--msp-virtual-row, 26px);
  background-repeat: repeat-y;
  background-position: var(--msp-space-6) 0;
  width: 100%;
  position: relative;
}

.msp-virtual-list-window {
  will-change: transform;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-row {
  contain: layout style;
  background-color: var(--msp-surface, var(--msp-color-panel));
  position: absolute;
  inset: 0 0 auto;
}

.msp-virtual-list-glide {
  z-index: 1;
  transition: transform var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-enter {
  animation: msp-reveal-fade var(--msp-motion-base) var(--msp-ease-reveal);
}

.msp-virtual-list-list[data-edge] .msp-virtual-list-window, .msp-virtual-list-list[data-edge] .msp-virtual-list-row {
  right: var(--msp-scroll-edge, var(--msp-space-2));
}
}
`);function xt(n,e,t,s){let a=Math.ceil(2*n/e);return Math.max(s,Math.min(a,3*Math.max(1,t)))}var ys=240;function xs(n,e,t){let s=e.length-n.length;if(s<=0||n.length===0)return;let a=0;for(;a<n.length&&t(n[a])===t(e[a]);)a++;for(let o=a;o<n.length;o++)if(t(n[o])!==t(e[o+s]))return;return{at:a,count:s}}function ic(n){let e=n.overscan??8,t=Ve(0),s=j(0),a=j(n.rowHeight),o,r=()=>{if(!o)return;let w=o.scrollTop,T=o.clientHeight;t.offer(w),T!==s.value&&s.set(T)},i=w=>w||800,c=j({first:0,last:0}),p=[],h=0,d=Number.NEGATIVE_INFINITY,m=()=>{d=performance.now()},u,f=120,v=w=>{let T=p.length,I=a.value,$=t.value,Y=Math.min(T,Math.floor($/I)),W=Math.min(T,Math.ceil(($+i(s.value))/I)),R=W-Y,U=$>=h,J=performance.now()-d<200?Math.abs($-h):0;h=$;let{first:oe,last:Se}=c.value,k=xt(J,I,R,Math.max(e,Math.ceil(R/2))),V=oe<=Math.max(0,Y-(U?e:k))&&Se>=Math.min(T,W+(U?k:e))&&Se<=T,Q,me;if(w)Q=Y-R,me=W+R;else{if(V)return;if(W<=oe||Y>=Se){let ue=xt(J,I,R,2);Q=Y-(U?2:ue),me=W+(U?ue:2)}else{let ue=xt(J,I,R,Math.max(e,R));Q=Y-(U?e:ue),me=W+(U?ue:e)}}Q=Math.max(0,Q),me=Math.min(T,me),(Q!==oe||me!==Se)&&c.set({first:Q,last:me})},g=()=>{E(),v(!1),u!==void 0&&clearTimeout(u),u=setTimeout(()=>{u=void 0,v(!0)},f)},x=new Set,M=[],C;function E(){if(C!==void 0){clearTimeout(C),C=void 0,x.clear();for(let w of M)w.removeAttribute("data-reveal");M.length=0}}let F=w=>n.itemKey(w),O=[],A=w=>{if(!n.reveal||w===O)return;let T=xs(O,w,F);if(O=w,!!T){E();for(let I=T.at;I<T.at+T.count;I++)x.add(F(w[I]));C=setTimeout(E,ys)}};te(()=>{u!==void 0&&clearTimeout(u),E()}),he(b([n.items,s.asReadonly,a.asReadonly],(w,T,I)=>({list:w,h:T,rh:I})),({list:w})=>{p=w,v(!0)}),he(t,g);let S=b([n.items,c.asReadonly,a.asReadonly],(w,T,I)=>(A(w),{items:w,first:Math.min(T.first,w.length),last:Math.min(T.last,w.length),rh:I}),(w,T)=>w.items===T.items&&w.first===T.first&&w.last===T.last&&w.rh===T.rh),N=b(S,w=>w.items.slice(w.first,w.last));return n.ref?.({scrollToIndex(w){let T=a.value,I=i(s.value),$=w*T,Y=t.value;$<Y?Y=$:$+T>Y+I&&(Y=$+T-I),Y!==t.value&&(h=Y,o&&(o.scrollTop=Y),t.offer(Y)),Et(),Ue()}}),l(we,{class:`${Ge.list} ${n.class??""}`,contentClass:Ge.content,edge:n.edge,fade:!1,viewportRef:w=>{o=w,G(w,"scroll",r,{passive:!0}),G(w,"wheel",m,{passive:!0}),G(w,"touchmove",m,{passive:!0}),ze(w,r),queueMicrotask(r)},role:n.role,"aria-label":n["aria-label"],ref:w=>n.contentRef?.(w),style:{height:b([n.items,a.asReadonly],(w,T)=>`${w.length*T}px`),"--msp-virtual-row":b(a.asReadonly,w=>`${w}px`)},children:l("div",{class:Ge.window,style:{transform:b(S,w=>`translateY(${w.first*w.rh}px)`)},ref:w=>{ze(w,T=>{let I=T[T.length-1].contentRect.height,$=w.childElementCount;if($<=0||I<=0||C!==void 0)return;let Y=I/$;Math.abs(Y-a.value)>.5&&a.set(Y)})},children:l(ie,{each:N,by:n.itemKey,children:w=>{let T=n.children(w);return x.size&&T instanceof Element&&x.has(F(w))&&(T.setAttribute("data-reveal",""),M.push(T)),T}})})})}function lc(n,e,t){let s=[],a=(o,r)=>{for(let i=0;i<o.length;i++){let c=o[i];s.push({node:c,depth:r,posinset:i+1,setsize:o.length});let p=e(c);p?.length&&t(c)&&a(p,r+1)}};return a(n,0),s}function ba(n,e){let t=new Map;return s=>{let a=new Map,o=s.map(r=>{let i=n(r),c=t.get(i),p=c!==void 0&&e(c,r)?c:r;return a.set(i,p),p});return t=a,o}}var ws={settles:0,moved:0,lastMs:0};function cc(n){let e=ge("RecycledList"),t=n.overscan??8,s=Ve(0),a=j(0),o=j(n.rowHeight),r,i=()=>{if(!r)return;let B=r.scrollTop,X=r.clientHeight;s.offer(B),X!==a.value&&a.set(X)},c=B=>B||800,p=j({first:0,last:0}),h=[],d=0,m=Number.NEGATIVE_INFINITY,u=()=>{m=performance.now()},f,v=120,g=B=>{let X=h.length,se=o.value,ae=s.value,ee=Math.min(X,Math.floor(ae/se)),Ce=Math.min(X,Math.ceil((ae+c(a.value))/se)),pe=Ce-ee,Pe=ae>=d,re=performance.now()-m<200?Math.abs(ae-d):0;d=ae;let{first:ne,last:ke}=p.value,St=xt(re,se,pe,Math.max(t,Math.ceil(pe/2))),tt=ne<=Math.max(0,ee-(Pe?t:St))&&ke>=Math.min(X,Ce+(Pe?St:t))&&ke<=X,Ct,Tt;if(B)Ct=ee-pe,Tt=Ce+pe;else{if(tt)return;if(Ce<=ne||ee>=ke){let hn=xt(re,se,pe,2);Ct=ee-(Pe?2:hn),Tt=Ce+(Pe?hn:2)}else{let hn=xt(re,se,pe,Math.max(t,pe));Ct=ee-(Pe?t:hn),Tt=Ce+(Pe?hn:t)}}Ct=Math.max(0,Ct),Tt=Math.min(X,Tt),(Ct!==ne||Tt!==ke)&&p.set({first:Ct,last:Tt})},x=()=>{E(),g(!1),f!==void 0&&clearTimeout(f),f=setTimeout(()=>{f=void 0,g(!0),ue()},v)},M=[],C;function E(){if(C!==void 0){clearTimeout(C),C=void 0;for(let B of M)B.classList.remove(Ge.glide,Ge.enter);M.length=0}}let F=!1;te(()=>{f!==void 0&&clearTimeout(f),E()}),he(b([n.items,a.asReadonly,o.asReadonly],(B,X,se)=>({list:B,h:X,rh:se})),({list:B})=>{h=B,g(!0)}),he(s,x);let O,A=new Map,S=[],N=B=>!!n.slot&&(!n.recycle||n.recycle(B)),w,T=ze(void 0,B=>{let X=B[B.length-1].contentRect.height;X>0&&Math.abs(X-o.value)>.5&&o.set(X)}),I=B=>{w||!T||(w=B,T.observe(B))},$=()=>{let B=document.createElement("div");return B.className=Ge.row,B},Y=()=>{let B=e.child(),X=Ae(B,()=>n.slot()),se=$();return se.append(X.el),O.append(se),I(se),{el:se,view:X,shown:!0}},W=(B,X)=>{let se=e.child(),ae=$();return Ae(se,()=>qe(ae,n.children?.(X),null)),O.append(ae),I(ae),{key:B,item:X,el:ae,y:Number.NaN,scope:se}},R=B=>{B.scope.dispose(),B.el.remove(),w===B.el&&(T?.unobserve(B.el),w=void 0)},U=(B,X,se)=>{let ae=X*se;B.y!==ae&&(F&&(B.el.classList.add(Number.isNaN(B.y)?Ge.enter:Ge.glide),M.push(B.el)),B.y=ae,B.el.style.transform=`translateY(${ae}px)`)},J=(B,X,se)=>{let ae=h[X],ee=n.itemKey(ae);if(B.has(ee))return!0;let Ce;if(N(ae)){let pe=S.pop();if(pe)pe.shown||(pe.shown=!0,pe.el.hidden=!1);else{if(!kn())return!1;pe=Y()}pe.view.show(ae),Ce={key:ee,item:ae,el:pe.el,y:Number.NaN,slot:pe}}else{if(!kn())return!1;Ce=W(ee,ae)}return B.set(ee,Ce),U(Ce,X,se),!0},oe=!1,Se=!1,k=(B,X,se)=>{if(!O)return;let ae=new Map;for(let ne=B;ne<X;ne++){let ke=h[ne],St=n.itemKey(ke);if(ae.has(St)){Se||(Se=!0,console.warn("VirtualList: duplicate key; later items with the same key are not rendered.",St));continue}let tt=A.get(St);if(tt){if(tt.item!==ke)if(tt.slot&&N(ke))tt.item=ke,tt.slot.view.show(ke);else continue;ae.set(St,tt),U(tt,ne,se)}}let ee=S.length;for(let[ne,ke]of A)ae.get(ne)!==ke&&(ke.slot?S.push(ke.slot):R(ke));A=ae;let Ce=s.value,pe=Math.max(B,Math.min(X,Math.floor(Ce/se))),Pe=Math.max(pe,Math.min(X,Math.ceil((Ce+c(a.value))/se))),re=!1;for(let ne=pe;ne<Pe&&!re;ne++)J(ae,ne,se)||(re=!0);for(let ne=B;ne<pe&&!re;ne++)J(ae,ne,se)||(re=!0);for(let ne=Pe;ne<X&&!re;ne++)J(ae,ne,se)||(re=!0);for(let ne=S.length-1;ne>=ee;ne--){let ke=S[ne];ke.shown&&(ke.shown=!1,ke.view.show(void 0),ke.el.hidden=!0)}re&&!oe&&(oe=!0,Qn(()=>{oe=!1,!e.disposed&&e.active&&k(V.first,V.last,V.rh)}))},V={first:0,last:0,rh:n.rowHeight},Q=[],me=b([n.items,p.asReadonly,o.asReadonly],(B,X,se)=>({list:B,first:Math.min(X.first,B.length),last:Math.min(X.last,B.length),rh:se}),(B,X)=>B.list===X.list&&B.first===X.first&&B.last===X.last&&B.rh===X.rh);te(()=>{for(let B of A.values())B.slot||B.scope.dispose();A.clear()});let ue=()=>{if(!O)return;let B=performance.now(),X=[...A.values()].sort((re,ne)=>re.y-ne.y),se=new Set;for(let re of X)se.add(re.el);let ee=O.getRootNode().activeElement,Ce,pe=O.firstChild,Pe=0;for(let re of X){for(;pe&&!se.has(pe);)pe=pe.nextSibling;if(re.el===pe){pe=pe.nextSibling;continue}ee&&!Ce&&re.el.contains(ee)&&(Ce=ee),O.insertBefore(re.el,pe),Pe++}Ce?.focus({preventScroll:!0}),ws.settles++,ws.moved+=Pe,ws.lastMs=performance.now()-B};return n.ref?.({scrollToIndex(B){let X=o.value,se=c(a.value),ae=B*X,ee=s.value;ae<ee?ee=ae:ae+X>ee+se&&(ee=ae+X-se),ee!==s.value&&(d=ee,r&&(r.scrollTop=ee),s.offer(ee)),Et(),Ue()}}),l(we,{class:`${Ge.list} ${n.class??""}`,contentClass:Ge.content,edge:n.edge,fade:!1,viewportRef:B=>{r=B,G(B,"scroll",i,{passive:!0}),G(B,"wheel",u,{passive:!0}),G(B,"touchmove",u,{passive:!0}),ze(B,i),queueMicrotask(i)},role:n.role,"aria-label":n["aria-label"],ref:B=>{O=B,n.contentRef?.(B),he(me,X=>{let se=n.reveal&&X.list!==Q?xs(Q,X.list,n.itemKey):void 0;Q=X.list,h=X.list,V=X,se&&(E(),F=!0,C=setTimeout(E,ys)),k(X.first,X.last,X.rh),F=!1})},style:{height:b([n.items,o.asReadonly],(B,X)=>`${B.length*X}px`),"--msp-virtual-row":b(o.asReadonly,B=>`${B}px`)}})}var Ne={body:"msp-canvas-hover-label-body",code:"msp-canvas-hover-label-code",corner:"msp-canvas-hover-label-corner",item:"msp-canvas-hover-label-item",label:"msp-canvas-hover-label-label",link:"msp-canvas-hover-label-link",out:"msp-canvas-hover-label-out",primary:"msp-canvas-hover-label-primary",secondary:"msp-canvas-hover-label-secondary"};_("views/canvas/hover-label.module.css",`@layer msp.components {
.msp-canvas-hover-label-label {
  z-index: var(--msp-z-tooltip);
  max-width: 280px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-sm);
  pointer-events: none;
  will-change: transform;
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  transition: none;
  position: absolute;
  top: 0;
  left: 0;
}

.msp-canvas-hover-label-body {
  --cap: var(--msp-hover-label-height, 16rem);
  max-height: var(--cap);
  mask-image: linear-gradient(to bottom, #000 calc(var(--cap) - 2.5em), transparent var(--cap));
  gap: 1px;
  display: grid;
  overflow: hidden;
}

.msp-canvas-hover-label-out {
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--msp-motion-fast) ease-out,
    visibility 0s var(--msp-motion-fast);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.msp-canvas-hover-label-corner {
  top: auto;
  left: auto;
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge, var(--msp-space-3)));
  bottom: calc(var(--msp-canvas-edge, var(--msp-space-3)) + var(--msp-corner-room, 0px));
  will-change: auto;
}

.msp-canvas-hover-label-primary {
  font-weight: 600;
}

.msp-canvas-hover-label-secondary {
  color: var(--msp-color-text-muted);
}

.msp-canvas-hover-label-item {
  text-indent: -1em;
  padding-inline-start: 1em;
}

.msp-canvas-hover-label-link {
  color: var(--msp-color-accent);
  text-decoration: underline;
}

.msp-canvas-hover-label-code {
  font-family: var(--msp-font-mono, ui-monospace, monospace);
  font-size: .95em;
}
}
`);var on=14;function dc(n,e){let t=document.createElement("span");if(typeof n=="string")return t.className=e===0?Ne.primary:Ne.secondary,t.textContent=n,t;t.className=n.role==="title"?Ne.primary:n.role==="item"?`${Ne.secondary} ${Ne.item}`:Ne.secondary;for(let s of n.runs)t.append(mc(s));return t}function mc(n){let e=document.createTextNode(n.text),t=(s,a)=>{let o=document.createElement(s);a&&(o.className=a),o.append(e),e=o};return n.code&&t("code",Ne.code),n.sub&&t("sub"),n.sup&&t("sup"),n.small&&t("small"),n.italic&&t("em"),n.bold&&t("strong"),n.link&&t("span",Ne.link),e}function pc(n){let e=(n.placement??"corner")==="corner",t=l("div",{class:Ne.body}),s=l("div",{class:`${Ne.label} ${Ne.out}${e?` ${Ne.corner}`:""}`,role:"tooltip","aria-hidden":"true",children:t}),a=j([]),o=Ut(()=>a.set([]));he(n.model.lines,C=>{C.length?(o.cancel(),a.set(C)):a.value.length&&o.request()});let r=0,i=0,c=!1,p=!1,h=!1,d=!1,m=C=>{d!==C&&(d=C,s.classList.toggle(Ne.out,!C),C?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden","true"))},u=()=>c&&!p&&h,f=()=>{u()?(g.cancel(),e?m(!0):x.request()):p||!h?(g.cancel(),m(!1)):d&&g.request()},v=()=>{if(!u())return;let C=s.offsetParent;if(C){let E=C.getBoundingClientRect(),F=r-E.left,O=i-E.top,A=s.offsetWidth,S=s.offsetHeight,N=F+on+A>C.clientWidth?F-on-A:F+on,w=O+on+S>C.clientHeight?O-on-S:O+on;s.style.transform=`translate(${Math.max(0,N)}px, ${Math.max(0,w)}px)`}m(!0)},g=Ut(()=>{u()||m(!1)}),x=Ut(v);he(a.asReadonly,C=>{C.length&&t.replaceChildren(...C.map(dc)),h=C.length>0,f()});let M=ge("HoverLabel");return queueMicrotask(()=>{if(M.disposed)return;let C=n.area();if(!C)return;let E=n.over;Ae(M,()=>{G(C,"pointermove",F=>{r=F.clientX,i=F.clientY,c=!E||E(F.target),p=F.buttons!==0,f()}),G(C,"pointerleave",()=>{c=!1,f()})})}),s}var Z={ask:"msp-command-menu-ask",askIcon:"msp-command-menu-askIcon",askKeys:"msp-command-menu-askKeys",askLabel:"msp-command-menu-askLabel",askText:"msp-command-menu-askText",before:"msp-command-menu-before",caption:"msp-command-menu-caption",command:"msp-command-menu-command",crumb:"msp-command-menu-crumb",empty:"msp-command-menu-empty",error:"msp-command-menu-error",footer:"msp-command-menu-footer",head:"msp-command-menu-head",headIcon:"msp-command-menu-headIcon",hint:"msp-command-menu-hint",input:"msp-command-menu-input",keys:"msp-command-menu-keys",list:"msp-command-menu-list",listContent:"msp-command-menu-listContent",menu:"msp-command-menu-menu","menu-fade":"msp-command-menu-menu-fade","menu-in":"msp-command-menu-menu-in",message:"msp-command-menu-message",more:"msp-command-menu-more",proposed:"msp-command-menu-proposed",rest:"msp-command-menu-rest",row:"msp-command-menu-row",rowChevron:"msp-command-menu-rowChevron",rowIcon:"msp-command-menu-rowIcon",rowMeta:"msp-command-menu-rowMeta",rowTitle:"msp-command-menu-rowTitle",run:"msp-command-menu-run",scrim:"msp-command-menu-scrim",sentence:"msp-command-menu-sentence",shared:"msp-command-menu-shared",sharedOption:"msp-command-menu-sharedOption",sharedTitle:"msp-command-menu-sharedTitle",spacer:"msp-command-menu-spacer",srOnly:"msp-command-menu-srOnly",tail:"msp-command-menu-tail",token:"msp-command-menu-token",value:"msp-command-menu-value",view:"msp-command-menu-view"};_("views/command-menu/command-menu.module.css",`@layer msp.components {
.msp-command-menu-scrim {
  z-index: var(--msp-z-dialog);
  padding: 12vh var(--msp-space-4) var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 75%);
  animation: msp-command-menu-menu-fade var(--msp-motion-fast) var(--msp-ease);
  justify-content: center;
  align-items: flex-start;
  display: flex;
  position: absolute;
  inset: 0;
}

@keyframes msp-command-menu-menu-fade {
  from {
    opacity: 0;
  }
}

.msp-command-menu-menu {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  width: min(560px, 100%);
  max-height: min(480px, 76vh);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  font-size: var(--msp-font-size-sm);
  animation: msp-command-menu-menu-in var(--msp-motion-base) var(--msp-ease);
  flex-direction: column;
  display: flex;
  overflow: hidden;
}

@keyframes msp-command-menu-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.msp-command-menu-head {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex: none;
  display: flex;
}

.msp-command-menu-headIcon {
  color: var(--msp-color-text-subtle);
  flex: none;
}

.msp-command-menu-input {
  min-width: 0;
  height: 100%;
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-md);
  background: none;
  border: 0;
  outline: none;
  flex: 1;

  &::placeholder {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-command {
  align-items: center;
  gap: var(--msp-space-2);
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 85%);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-sm);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-command-menu-message, .msp-command-menu-error {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  margin: 0;
}

.msp-command-menu-error {
  color: var(--msp-color-danger);
}

.msp-command-menu-hint {
  color: var(--msp-color-text-muted);
}

.msp-command-menu-list {
  flex: 1;
  min-height: 0;

  &:has(.msp-command-menu-listContent:empty) {
    display: none;
  }
}

.msp-command-menu-listContent {
  padding: var(--msp-space-2);
}

.msp-command-menu-empty {
  padding: var(--msp-space-5) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
  text-align: center;
  margin: 0;
}

.msp-command-menu-rest {
  pointer-events: none;
}

.msp-command-menu-caption {
  padding: var(--msp-space-3) var(--msp-space-3) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-command-menu-row {
  align-items: center;
  gap: var(--msp-space-3);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  cursor: default;
  grid-template-columns: 16px minmax(0, 1fr) auto auto;
  grid-auto-flow: column;
  display: grid;

  &[aria-selected="true"] {
    background: var(--msp-color-hover);
  }

  &[aria-selected="true"] .msp-command-menu-rowMeta {
    color: var(--msp-color-text-muted);
  }

  &[aria-disabled="true"] {
    color: var(--msp-color-text-subtle);
  }
}

.msp-command-menu-rowIcon {
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;
}

.msp-command-menu-rowTitle {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;

  & mark {
    color: var(--msp-color-accent-strong);
    background: none;
    font-weight: 600;
  }
}

.msp-command-menu-tail {
  margin-left: var(--msp-space-2);
  color: var(--msp-color-text-muted);
}

.msp-command-menu-rowMeta {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-sentence {
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-3) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}

.msp-command-menu-token {
  align-items: center;
  gap: var(--msp-space-2);
  display: inline-flex;
}

.msp-command-menu-before {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-sm);
}

.msp-command-menu-value {
  height: 26px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-empty] {
    color: var(--msp-color-text-subtle);
  }

  &[data-missing] {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-danger), transparent 50%);
  }

  &[data-active] {
    box-shadow: inset 0 0 0 1.5px var(--msp-color-accent);
  }
}

.msp-command-menu-spacer {
  flex: 1;
}

.msp-command-menu-view {
  align-items: center;
  gap: var(--msp-space-1);
  height: 28px;
  padding: 0 var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-run {
  align-items: center;
  gap: var(--msp-space-2);
  height: 28px;
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-accent);
  color: var(--msp-color-on-accent);
  font-size: var(--msp-font-size-sm);
  font-weight: 600;
  display: flex;

  & kbd {
    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--msp-color-on-accent), transparent 50%);
    color: inherit;
    background: none;
  }
}

.msp-command-menu-more {
  padding: var(--msp-space-2) var(--msp-space-4);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
}

.msp-command-menu-footer {
  gap: var(--msp-space-2) var(--msp-space-4);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-top: 1px solid var(--msp-glass-edge);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  flex-wrap: wrap;
  flex: none;
  display: flex;

  & > span {
    align-items: center;
    gap: var(--msp-space-1);
    display: inline-flex;
  }
}

.msp-command-menu-footer kbd, .msp-command-menu-keys, .msp-command-menu-run kbd {
  min-width: 18px;
  height: 18px;
  padding: 0 var(--msp-space-1);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-bg);
  box-shadow: inset 0 0 0 1px var(--msp-glass-edge),
    inset 0 -1px 0 var(--msp-glass-edge);
  color: var(--msp-color-text-muted);
  font: inherit;
  font-family: var(--msp-font-mono);
  place-items: center;
  font-size: 10px;
  line-height: 1;
  display: inline-grid;
}

.msp-command-menu-crumb {
  align-items: center;
  gap: var(--msp-space-1);
  height: 24px;
  padding: 0 var(--msp-space-1) 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  flex: none;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-command-menu-rowChevron {
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-ask {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  margin: 0 var(--msp-space-2) var(--msp-space-2);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  flex: none;
  grid-template-columns: 16px auto minmax(0, 1fr) auto;
  display: grid;

  &:hover, &[data-default] {
    background: var(--msp-color-hover);
  }

  &[data-setup] {
    color: var(--msp-color-text-muted);
    grid-template-columns: 16px minmax(0, 1fr);

    & .msp-command-menu-askIcon {
      color: var(--msp-color-text-subtle);
    }
  }
}

.msp-command-menu-askIcon {
  color: var(--msp-color-accent);
  justify-self: center;
}

.msp-command-menu-askLabel {
  color: var(--msp-color-text);
  font-weight: 500;
}

.msp-command-menu-askText {
  min-width: 0;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  color: var(--msp-color-text-muted);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-command-menu-askKeys {
  color: var(--msp-color-text-subtle);
  font-family: inherit;
  font-size: var(--msp-font-size-xs);
  flex: none;
}

.msp-command-menu-proposed {
  align-items: center;
  gap: var(--msp-space-2);
  margin: var(--msp-space-2) var(--msp-space-2) 0;
  padding: var(--msp-space-1) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-accent), transparent 90%);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-xs);
  display: flex;
}

.msp-command-menu-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-command-menu-shared {
  align-items: center;
  gap: var(--msp-space-1);
  padding: var(--msp-space-2) var(--msp-space-4);
  border-bottom: 1px solid var(--msp-glass-edge);
  font-size: var(--msp-font-size-xs);
  flex: none;
  display: flex;
}

.msp-command-menu-sharedTitle {
  margin-right: var(--msp-space-2);
  color: var(--msp-color-text-subtle);
}

.msp-command-menu-sharedOption {
  height: 22px;
  padding: 0 var(--msp-space-2);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-accent);
  }
}
}
`);function hc(n,e,t,s){let a=n.assistant,o=t.trim();return a.ready()?{id:"assistant-ask",label:"Ask AI assistant",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>{let r=a.propose(o);if(r)return s(o),e.open(r.command,r.tail).kind==="form";a.ask(o)}}:{id:"assistant-setup",label:"Set up the assistant to ask",detail:`\u201C${o}\u201D`,icon:"sparkles",run:()=>a.setup()}}var uc=n=>n.kind==="caption"?`caption:${n.label}`:n.kind==="group"?`group:${n.group.id}:${n.index}`:n.kind==="item"?`item:${n.item.label}:${n.index}`:`match:${n.match.command.id}:${n.match.preset?.id??""}:${n.index}:${n.tail??""}`,fc=(n,e)=>{if(n.kind!==e.kind)return!1;if(n.kind==="caption")return n.label===e.label;if(n.kind==="group")return n.group===e.group&&n.index===e.index;if(n.kind==="item")return n.item===e.item&&n.index===e.index;let t=e;return n.match.command===t.match.command&&n.match.preset===t.match.preset&&n.match.blocked===t.match.blocked&&n.index===t.index&&n.tail===t.tail},Pn=24,xr=28;function vc(n){let{manager:e}=n;te(e.want());let t=j(void 0);Me(e.active,o=>{o||t.set(void 0)}),Me(e.outcomes,o=>{o.kind==="done"&&n.onClose()}),te(()=>e.close());let s=at(),a;return te(()=>s(a)),l("div",{class:Z.scrim,"data-keeps-card":"",onPointerDown:o=>{o.target===o.currentTarget&&n.onClose()},children:l("div",{class:Z.menu,role:"dialog","aria-modal":"true","aria-label":"Commands",ref:o=>{a=o},onKeyDown:o=>{es(o,o.currentTarget),!(o.key!=="Escape"||o.defaultPrevented)&&(o.preventDefault(),o.stopPropagation(),n.onClose())},children:l(P,{when:e.active,fallback:()=>l(gc,{...n,onPropose:o=>t.set(o)}),children:o=>l(Tc,{manager:e,invocation:o,proposed:t.asReadonly,onClose:n.onClose,...n.direct?{direct:!0}:{}})})})})}function gc(n){let{manager:e}=n,t=j(n.initial??""),s=Ve(t.value),a=()=>{s.latest!==s.value&&Et()},o=j(n.group),r=j(0),i=j(void 0),c=Xe("msp-command-list"),p=k=>`${c}-${k}`,h=[...n.prefixes??[],wc(n,k=>Y(k))],d=k=>h.find(V=>k.startsWith(V.char)),m=ba(k=>`${o.value??""}|${uc(k)}`,fc),u,f=b([s,o.asReadonly,e.commands,e.groups],(k,V,Q,me)=>{if(u&&u.t===k&&u.g===V&&u.c===Q&&u.gs===me)return u.rows;let ue=m(v(k,V));return u?(u.t=k,u.g=V,u.c=Q,u.gs=me,u.rows=ue):u={t:k,g:V,c:Q,gs:me,rows:ue},ue});function v(k,V){let Q=[],me=0,ue=ee=>{ee.kind!=="caption"&&(ee.index=me++),Q.push(ee)},B=d(k);if(B){for(let ee of B.items(k.slice(B.char.length).trimStart()))ue({kind:"item",item:ee,index:0});return Q}if(!k.trim()){let{groups:ee,commands:Ce}=e.children(V);if(V===void 0){let re=e.query("");if(re.recent.length){ue({kind:"caption",label:"Recent"});for(let ne of re.recent)ue({kind:"match",match:ne,index:0})}ee.length&&ue({kind:"caption",label:"Browse"})}for(let re of ee)ue({kind:"group",group:re,index:0});if(V!==void 0){let re=new Set(Ce.map(ke=>ke.command.category)),ne;for(let ke of Ce)re.size>1&&ke.command.category!==ne&&(ne=ke.command.category,ue({kind:"caption",label:ne})),ue({kind:"match",match:ke,index:0});return Q}let pe=new Set(e.query("").recent.map(re=>re.command)),Pe=new Map;for(let re of Ce){if(pe.has(re.command))continue;let ne=Pe.get(re.command.category);ne?ne.push(re):Pe.set(re.command.category,[re])}for(let[re,ne]of Pe){ue({kind:"caption",label:re});for(let ke of ne)ue({kind:"match",match:ke,index:0})}return Q}let X=e.query(k),se=ee=>V===void 0||e.inGroup(ee.command,V);X.direct&&se(X.direct)&&ue({kind:"match",match:X.direct,tail:X.direct.tail,index:0});let ae=e.groups.value.filter(ee=>(V===void 0||e.groupPath(ee.id).some(Ce=>Ce.id===V))&&ee.id!==V&&(ro(ee.title,k)??-1)>=0);for(let ee of ae)ue({kind:"group",group:ee,index:0});for(let ee of X.matches)ee.command!==X.direct?.command&&se(ee)&&ue({kind:"match",match:ee,index:0});return Q}let g=[],x=()=>g.filter(k=>k.kind!=="caption"),M=()=>{if(!n.assistant)return;if(!n.assistant.ready()){n.assistant.setup(),n.onClose();return}if(!t.value.trim()||d(t.value))return;!hc(n,e,t.value,n.onPropose).run()&&!e.active.value&&n.onClose()},C=b([s,f],(k,V)=>!!k.trim()&&!d(k)&&!V.some(Q=>Q.kind!=="caption"));Me(f,k=>{g=k,r.value>=x().length&&r.set(0)});let E=j({n:Pn}),F=b([f,E.asReadonly],(k,V)=>k.length<=(V.of===k?V.n:Pn)?k:k.slice(0,V.of===k?V.n:Pn),(k,V)=>k.length===V.length&&k.every((Q,me)=>Q===V[me])),O=b([f,F],(k,V)=>(k.length-V.length)*xr),A=k=>{let V=E.value,Q=V.of===g?V.n:Pn;k>Q&&Q<g.length&&E.set({of:g,n:Math.max(k,Q+Pn)})};Me(r.asReadonly,k=>{let V=g.findIndex(Q=>Q.kind!=="caption"&&Q.index===k);V>=0&&A(V+1)});let S=Ze(r.asReadonly);Me(b([r.asReadonly,f],(k,V)=>{let Q=V.find(me=>me.kind==="match"&&me.index===k);return Q?.kind==="match"&&!Q.match.preset&&!Q.tail&&!Q.match.blocked?Q.match.command.id:void 0}),k=>e.browse(k)),te(()=>e.browse(void 0));let N=b([o.asReadonly,e.groups],k=>[...e.groupPath(k)].reverse().find(V=>V.shared)),w=b([r.asReadonly,f],(k,V)=>V.some(Q=>Q.kind!=="caption")?p(k):void 0),T=j(""),$=Kt(()=>{if(!s.value.trim())return T.set("");let V=0;for(let Q of f.value)Q.kind!=="caption"&&V++;if(V)return T.set(V===1?"1 result":`${V} results`);T.set(n.assistant?"No command matches: ask AI assistant.":"Nothing matches.")});Me(f,()=>$.start(400));let Y=k=>{t.set(k),s.offer(k),a(),oe.value=k,r.set(0),i.set(void 0)},W=k=>{o.set(k),Y("")},R=k=>{if(a(),k.kind==="group")return W(k.group.id);if(k.kind==="item"){!k.item.run()&&!e.active.value&&n.onClose();return}if(k.match.blocked)return i.set(k.match.blocked);let V=e.open(k.match.command.id,k.tail,k.match.preset?.id);V.kind==="blocked"?i.set(V.reason):V.kind==="ran"&&n.onClose()},U=()=>{let k=e.groupPath(o.value);return k.length?(W(k[k.length-2]?.id),!0):!1},J=b([t.asReadonly,o.asReadonly],(k,V)=>{let Q=d(k);return Q?Q.placeholder??Q.title:V===void 0?"Search commands, or type ? for help":`Search in ${e.groupPath(V).pop()?.title}`}),oe=l("input",{class:Z.input,type:"text",role:"combobox","aria-expanded":"true","aria-controls":c,"aria-autocomplete":"list","aria-label":"Command",spellcheck:!1,onInput:k=>{t.set(k.currentTarget.value),s.offer(k.currentTarget.value),r.set(0),i.set(void 0)},onKeyDown:k=>{a();let V=x().length,Q=!k.currentTarget.value;if(k.key==="ArrowDown"||k.key==="ArrowUp")k.preventDefault(),V&&r.set((r.value+(k.key==="ArrowDown"?1:V-1))%V);else if(k.key==="Enter"){k.preventDefault();let me=x()[r.value];k.metaKey||k.ctrlKey?M():me?R(me):M()}else if(k.key==="ArrowRight"&&Q){let me=x()[r.value];me?.kind==="group"&&(k.preventDefault(),W(me.group.id))}else(k.key==="Backspace"||k.key==="ArrowLeft")&&Q?U()&&k.preventDefault():k.key==="Escape"&&(k.preventDefault(),k.stopPropagation(),n.onClose())}});queueMicrotask(()=>oe.focus()),D([w,J,t.asReadonly],()=>{q(oe,"aria-activedescendant",w.value),q(oe,"placeholder",J.value),wr(oe,t.value)});let Se=document.createTextNode("");return D([T.asReadonly],()=>fe(Se,T.value)),y(ye,{children:[y("div",{class:Z.head,children:[l(H,{name:"search",size:15,class:Z.headIcon}),l(ie,{each:b(o.asReadonly,k=>e.groupPath(k)),children:k=>y("button",{type:"button",class:Z.crumb,onClick:()=>W(k.id),children:[k.title,l(H,{name:"chevron-right",size:12})]})}),oe]}),l(P,{when:N,children:k=>l(yc,{manager:e,group:k})}),l(P,{when:i,children:k=>l("p",{class:Z.message,role:"alert",children:k})}),l("span",{class:Z.srOnly,role:"status","aria-live":"polite",children:Se}),y(we,{class:Z.list,contentClass:Z.listContent,id:c,role:"listbox","aria-label":"Commands",viewportRef:k=>{G(k,"scroll",()=>A(Math.ceil((k.scrollTop+2*k.clientHeight)/xr)),{passive:!0})},children:[l(ie,{each:F,fallback:()=>l("p",{class:Z.empty,children:n.assistant?"No command matches: ask AI assistant.":"Nothing matches."}),children:k=>{if(k.kind==="caption")return l("div",{class:Z.caption,role:"presentation",children:k.label});let V=k.index,Q={id:p(V),index:V,highlight:r.asReadonly,selected:S.key(V),onPick:()=>R(k),onHover:()=>r.set(V)};return k.kind==="group"?l(kc,{...Q,manager:e,group:k.group}):k.kind==="item"?l(Mc,{...Q,item:k.item}):l(Sc,{...Q,manager:e,row:k,path:xc(e,k.match.command.group,o.value),inGroup:o.value!==void 0,query:s})}}),l(P,{when:b(O,k=>k>0),children:()=>{let k=l("div",{class:Z.rest,role:"presentation"});return D([O],()=>Te(k,"height",`${O.value}px`)),k}})]}),n.assistant?l(bc,{ready:n.assistant.ready(),text:b(t.asReadonly,k=>d(k)?"":k.trim()),unmatched:C,onAsk:()=>{n.assistant?.ready()?t.value.trim()?M():oe.focus():(n.assistant?.setup(),n.onClose())}}):null,l(kr,{hints:[["\u2191\u2193","move"],["\u21B5","run"],...n.assistant?.ready()?[[qt()?"\u2318\u21B5":"Ctrl+\u21B5","ask"]]:[],["\u2192","open group"],["?","help"],["esc","close"]]})]})}function bc(n){if(!n.ready)return y("button",{type:"button",class:Z.ask,"data-setup":"",onClick:()=>n.onAsk(),children:[l(H,{name:"sparkles",size:15,class:Z.askIcon}),l("span",{class:Z.askText,children:"Set up an AI assistant"})]});let e=document.createTextNode(""),t=document.createTextNode(""),s=y("button",{type:"button",class:Z.ask,onClick:()=>n.onAsk(),children:[l(H,{name:"sparkles",size:15,class:Z.askIcon}),l("span",{class:Z.askLabel,children:"Ask AI assistant"}),l("span",{class:Z.askText,children:e}),l("kbd",{class:Z.askKeys,children:t})]});return D([n.text,n.unmatched],()=>{let a=n.text.value,o=n.unmatched.value;q(s,"data-default",o),fe(e,a?`\u201C${a}\u201D`:"describe what you want, in your words"),fe(t,o?"\u21B5":qt()?"\u2318\u21B5":"Ctrl+\u21B5")}),s}function yc(n){let{manager:e,group:t}=n,s=t.shared,a=b(e.shared,()=>e.sharedValue(t.id)),o=[],r=y("div",{class:Z.shared,role:"group","aria-label":`${t.title}: ${s.title}`,children:[l("span",{class:Z.sharedTitle,children:s.title}),s.options.map(([i,c])=>l("button",{type:"button",class:Z.sharedOption,ref:p=>o.push(p),onClick:()=>e.setShared(t.id,i),children:c}))]});return D([a],()=>{for(let i=0;i<o.length;i++)q(o[i],"aria-pressed",a.value===s.options[i][0]?"true":"false")}),r}function xc(n,e,t){let s=n.groupPath(e),a=t===void 0?-1:s.findIndex(o=>o.id===t);return s.slice(a+1).map(o=>o.title)}function wc(n,e){return{char:"?",title:"Help",placeholder:"Prefixes and shortcuts",items:t=>{let s=t.toLowerCase(),a=(n.prefixes??[]).map(i=>({id:`prefix:${i.char}`,label:`${i.char}  ${i.title}`,detail:i.placeholder,icon:"command",run:()=>(e(i.char),!0)})),o=n.manager.commands.value.flatMap(i=>{let c=n.manager.shortcut(i);return c?[{c:i,chord:c}]:[]}).map(({c:i,chord:c})=>({id:`keys:${i.id}`,label:i.title,detail:Rt(c),icon:i.icon??"keyboard",run:()=>{n.manager.open(i.id)}}));return[...n.manager.get("help.show")?[{id:"help:card",label:"Keyboard and mouse",detail:"The Help card",icon:"circle-help",run:()=>{n.manager.open("help.show")}}]:[],...a,...o].filter(i=>!s||i.label.toLowerCase().includes(s))}}}function wr(n,e){n.value!==e&&(n.value=e)}function ya(n,e,t){return q(n,"aria-selected",String(e)),e&&!t&&queueMicrotask(()=>n.scrollIntoView?.({block:"nearest"})),e}function kc(n){let e=n.manager.groupPath(n.group.parent).map(a=>a.title),t=y("div",{id:n.id,class:Z.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:l(H,{name:n.group.icon??"list-tree",size:15})}),l("span",{class:Z.rowTitle,children:n.group.title}),l("span",{class:Z.rowMeta,children:e.join(" \u203A ")}),l(H,{name:"chevron-right",size:14,class:Z.rowChevron})]}),s=!1;return D([n.selected],()=>{s=ya(t,n.highlight.value===n.index,s)}),t}function Mc(n){let{item:e}=n,t=y("div",{id:n.id,class:Z.row,role:"option",onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:e.icon?l(H,{name:e.icon,size:15}):null}),l("span",{class:Z.rowTitle,children:e.label}),l("span",{class:Z.rowMeta,children:e.detail})]}),s=!1;return D([n.selected],()=>{s=ya(t,n.highlight.value===n.index,s)}),t}function Sc(n){let{manager:e,query:t}=n,{match:s,tail:a}=n.row,o=s.command,r=s.preset?`${o.title.replace(/…$/,"")} ${s.preset.title}`:o.title,i=e.shortcut(o),c=s.blocked??(n.path.length?n.path.join(" \u203A "):n.inGroup?"":o.category),p=document.createElement("span"),h=document.createTextNode(c),d=y("div",{id:n.id,class:Z.row,role:"option","aria-disabled":s.blocked?"true":void 0,onClick:()=>n.onPick(),onPointerMove:()=>n.onHover(),children:[l("span",{class:Z.rowIcon,children:o.icon?l(H,{name:o.icon,size:15}):null}),y("span",{class:Z.rowTitle,children:[p,a?l("span",{class:Z.tail,children:a}):null]}),l("span",{class:Z.rowMeta,children:h}),i?l("kbd",{class:Z.keys,children:Rt(i)}):null]}),m=!1,u=[n.selected];o.count&&!s.preset&&u.push(e.browsing),D(u,()=>{if(m=ya(d,n.highlight.value===n.index,m),o.count&&!s.preset){let g=e.browsing.value;fe(h,(g?.id===o.id?g.count:void 0)??c)}});let f,v=g=>{if(g===f)return;f=g;let x=Cc(r,g);typeof x=="string"?p.textContent=x:p.replaceChildren(Ys(x))};return a?v(""):D([t],()=>v(t.value)),d}function Cc(n,e){let t=new Set(io(n,e));if(!t.size)return n;let s=[],a="",o=!1,r=()=>{a&&(s.push(o?l("mark",{children:a}):a),a="")};for(let i=0;i<n.length;i++){let c=t.has(i);c!==o&&(r(),o=c),a+=n[i]}return r(),l(ye,{children:s})}function Tc(n){let{manager:e,invocation:t}=n,s=t.state,a=t.command,o=Xe("msp-command-options"),r=b(s,m=>m.pick),i=m=>`${o}-${m}`,c=l("input",{class:Z.input,type:"text",role:"combobox","aria-controls":o,"aria-autocomplete":"list",spellcheck:!1,onInput:m=>t.type(m.currentTarget.value),onKeyDown:m=>{m.key==="Enter"&&m.altKey&&a.view?(m.preventDefault(),d()):m.key==="Enter"?(m.preventDefault(),t.enter()):m.key==="Tab"?(m.preventDefault(),t.tab(m.shiftKey?-1:1)):m.key==="ArrowDown"||m.key==="ArrowUp"?(m.preventDefault(),t.move(m.key==="ArrowDown"?1:-1)):m.key==="Backspace"&&!m.currentTarget.value?(m.preventDefault(),t.back()||h()):m.key==="Escape"&&(m.preventDefault(),m.stopPropagation(),h())}});queueMicrotask(()=>c.focus());let p=document.createTextNode("");D([s],()=>{let m=s.value;fe(p,m.action);let u=m.fields.find(f=>f.id===m.field);q(c,"aria-expanded",String(m.completions.length>0)),q(c,"aria-activedescendant",m.pick>=0&&m.pick<m.completions.length?i(m.pick):void 0),q(c,"aria-label",u?.label??a.title),q(c,"placeholder",u?u.label:"Enter to run"),wr(c,m.text)});let h=()=>{e.close(),n.direct&&n.onClose()},d=()=>{let m=a.view;m&&(e.close(),n.onClose(),m.open(e.context.value))};return y(ye,{children:[l(P,{when:n.proposed,children:m=>y("p",{class:Z.proposed,children:[l(H,{name:"sparkles",size:13,class:Z.askIcon}),"Proposed by the assistant from \u201C",m,"\u201D: check it, then Enter to run"]})}),y("div",{class:Z.head,children:[y("span",{class:Z.command,children:[a.icon?l(H,{name:a.icon,size:15}):null,a.title.replace(/…$/,"")]}),c]}),y("div",{class:Z.sentence,"aria-label":"Arguments",children:[l(ie,{each:b(s,m=>m.fields),children:m=>l(Ec,{field:m,state:s,onFocus:()=>{t.focus(m.id),c.focus()}})},m=>m.id),l("span",{class:Z.spacer}),a.view?y("button",{type:"button",class:Z.view,title:`Open ${a.view.title} (\u2325\u21B5)`,onClick:d,children:[a.view.title,l(H,{name:"chevron-right",size:13})]}):null,y("button",{type:"button",class:Z.run,onClick:()=>{t.enter()},children:[p,l("kbd",{children:"\u21B5"})]})]}),l(P,{when:b(s,m=>m.error),children:m=>y("p",{class:Z.error,role:"alert",children:[m.message,m.hint?y("span",{class:Z.hint,children:[" ",m.hint]}):null]})}),l(we,{class:Z.list,contentClass:Z.listContent,id:o,role:"listbox","aria-label":"Options",children:l(ie,{each:b(s,m=>m.completions),children:(m,u)=>{let f=y("div",{class:Z.row,role:"option",onClick:()=>t.accept(u.value),onPointerMove:()=>t.point(u.value),children:[l("span",{class:Z.rowIcon}),l("span",{class:Z.rowTitle,children:m.label}),l("span",{class:Z.rowMeta,children:m.detail??(m.value!==m.label?m.value:"")})]});return D([r,u],()=>{q(f,"id",i(u.value)),q(f,"aria-selected",String(r.value===u.value))}),f}})}),l(P,{when:b(s,m=>m.formOnly.length>0),children:()=>{let m=document.createTextNode("");return D([s],()=>{let u=s.value.formOnly.length;fe(m,`+ ${u} more option${u>1?"s":""} at their defaults`)}),l("p",{class:Z.more,children:m})}}),l(kr,{hints:[["tab","next field"],["\u21B5","run"],...a.view?[["\u2325\u21B5","open in the UI"]]:[],["\u232B","back"],n.direct?["esc","close"]:["esc","commands"]]})]})}function Ec(n){let{field:e}=n,t=b(n.state,i=>{let c=i.values[e.id];if(!(c===void 0||c===""))return e.options?.find(p=>p.value===String(c))?.label??String(c)}),s=b(n.state,i=>i.field===e.id),a=b(n.state,i=>i.missing.includes(e.id)),o=document.createTextNode(""),r=l("button",{type:"button",class:Z.value,onClick:()=>n.onFocus(),children:o});return D([t,s,a],()=>{let i=t.value;q(r,"data-active",s.value),q(r,"data-missing",a.value),q(r,"data-empty",i===void 0),fe(o,i??e.label)}),y("span",{class:Z.token,children:[e.before?l("span",{class:Z.before,children:e.before}):null,r]})}function kr(n){return l("div",{class:Z.footer,children:n.hints.map(([e,t])=>y("span",{children:[l("kbd",{children:e})," ",t]}))})}var L={announce:"msp-shell-canvas-announce",bar:"msp-shell-canvas-bar",bottom:"msp-shell-canvas-bottom",bottomGrid:"msp-shell-canvas-bottomGrid",busy:"msp-shell-canvas-busy","busy-in":"msp-shell-canvas-busy-in","busy-slide":"msp-shell-canvas-busy-slide","busy-spin":"msp-shell-canvas-busy-spin",busyActions:"msp-shell-canvas-busyActions",busyBar:"msp-shell-canvas-busyBar",busyCard:"msp-shell-canvas-busyCard",busyHead:"msp-shell-canvas-busyHead",busyLabel:"msp-shell-canvas-busyLabel",busyPercent:"msp-shell-canvas-busyPercent",busySpin:"msp-shell-canvas-busySpin",busyTrack:"msp-shell-canvas-busyTrack",caption:"msp-shell-canvas-caption",card:"msp-shell-canvas-card","card-in":"msp-shell-canvas-card-in",cardBody:"msp-shell-canvas-cardBody",cardBodyContent:"msp-shell-canvas-cardBodyContent",cardBodyFill:"msp-shell-canvas-cardBodyFill",cardDocked:"msp-shell-canvas-cardDocked",cardHeader:"msp-shell-canvas-cardHeader",cardSlot:"msp-shell-canvas-cardSlot",cardTitle:"msp-shell-canvas-cardTitle",chip:"msp-shell-canvas-chip",context:"msp-shell-canvas-context",corner:"msp-shell-canvas-corner",countdown:"msp-shell-canvas-countdown",face:"msp-shell-canvas-face",folded:"msp-shell-canvas-folded",frame:"msp-shell-canvas-frame",lead:"msp-shell-canvas-lead",menuMark:"msp-shell-canvas-menuMark",message:"msp-shell-canvas-message",pill:"msp-shell-canvas-pill","pill-in":"msp-shell-canvas-pill-in",pillButton:"msp-shell-canvas-pillButton",pillMain:"msp-shell-canvas-pillMain",progress:"msp-shell-canvas-progress",railMenu:"msp-shell-canvas-railMenu",railMenuAnchor:"msp-shell-canvas-railMenuAnchor",railMenuButton:"msp-shell-canvas-railMenuButton",railMenuDivider:"msp-shell-canvas-railMenuDivider",railMenuList:"msp-shell-canvas-railMenuList",railToggle:"msp-shell-canvas-railToggle",sections:"msp-shell-canvas-sections",spin:"msp-shell-canvas-spin",stack:"msp-shell-canvas-stack",stackTools:"msp-shell-canvas-stackTools",status:"msp-shell-canvas-status",text:"msp-shell-canvas-text",tool:"msp-shell-canvas-tool","tool-menu-in":"msp-shell-canvas-tool-menu-in",toolMenu:"msp-shell-canvas-toolMenu",toolMenuCard:"msp-shell-canvas-toolMenuCard",toolMenuCheck:"msp-shell-canvas-toolMenuCheck",toolMenuChevron:"msp-shell-canvas-toolMenuChevron",toolMenuDivider:"msp-shell-canvas-toolMenuDivider",toolMenuHeading:"msp-shell-canvas-toolMenuHeading",toolMenuHint:"msp-shell-canvas-toolMenuHint",toolMenuLabel:"msp-shell-canvas-toolMenuLabel",toolMenuRow:"msp-shell-canvas-toolMenuRow",toolMenuScroll:"msp-shell-canvas-toolMenuScroll",toolMenuScrollContent:"msp-shell-canvas-toolMenuScrollContent",toolSubmenu:"msp-shell-canvas-toolSubmenu",toolbar:"msp-shell-canvas-toolbar",toolbarSlot:"msp-shell-canvas-toolbarSlot"};_("views/shell/canvas.module.css",`@layer msp.components {
.msp-shell-canvas-frame {
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-bg);
  width: 44px;
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  overflow: hidden;

  & > * + *, & .msp-shell-canvas-stackTools > * + *, & .msp-shell-canvas-sections > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }

  & .msp-shell-canvas-sections:empty, & .msp-shell-canvas-toolbar:not(:has(button)) {
    display: none;
  }
}

.msp-shell-canvas-sections, .msp-shell-canvas-toolbar {
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool {
  width: 100%;
  height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-pressed="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-canvas-card {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-panel-right, 64px);
  bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  z-index: var(--msp-z-overlay);
  width: min(var(--msp-right-panel-width, 340px), calc(100% - 96px));
  border-radius: var(--msp-radius-lg);
  contain: content;
  animation: msp-shell-canvas-card-in var(--msp-motion-base) var(--msp-ease);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;

  [data-right-panel="open"] & {
    animation: none;
  }

  [data-pinned] & {
    top: 0;
    right: calc(var(--msp-canvas-rail-inset, 52px) - var(--msp-canvas-edge));
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
    border-radius: 0;
    bottom: 0;
  }
}

@keyframes msp-shell-canvas-card-in {
  from {
    opacity: 0;
    transform: translateX(8px);
  }
}

.msp-shell-canvas-cardHeader {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-canvas-cardTitle {
  font-size: inherit;
  font-weight: inherit;
  flex: 1;
}

.msp-shell-canvas-cardBody {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-canvas-cardBodyFill {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

.msp-shell-canvas-cardBodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-canvas-stack:not(:has(button)) {
  display: none;
}

.msp-shell-canvas-stack {
  --msp-stack-row: max(34px, min(var(--msp-touch-target, 0px), 38px));
  transition: opacity var(--msp-motion-fade) var(--msp-ease-reveal);
  position: relative;

  @starting-style {
    opacity: 0;
  }

  &[data-quiet] {
    opacity: 0;
    pointer-events: none;
  }
}

.msp-shell-canvas-railToggle {
  right: calc((44px - var(--msp-stack-row)) / 2);
  bottom: var(--msp-canvas-edge);
  z-index: var(--msp-z-overlay);
  pointer-events: auto;
  position: absolute;
}

.msp-shell-canvas-corner {
  justify-self: end;
  align-items: flex-end;
  gap: var(--msp-space-3);
  flex-flow: row-reverse wrap-reverse;
  grid-area: corner;
  max-width: 100%;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-frame {
  width: auto;
  height: var(--msp-stack-row);
  flex-direction: row;
  max-width: 100%;

  & > * + *, & .msp-shell-canvas-stackTools > * + * {
    border-top: 0;
    border-left: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-canvas-stackTools, .msp-shell-canvas-stack .msp-shell-canvas-sections, .msp-shell-canvas-stack .msp-shell-canvas-toolbar {
  flex-direction: row;
  display: flex;
}

.msp-shell-canvas-stack .msp-shell-canvas-sections > * + * {
  border-top: 0;
  border-left: 1px solid var(--msp-glass-edge);
}

.msp-shell-canvas-stack .msp-shell-canvas-tool {
  width: var(--msp-stack-row);
  height: var(--msp-stack-row);

  [data-mode="compact"] & svg {
    width: 18px;
    height: 18px;
  }

  flex: none;
}

.msp-shell-canvas-stack :is(.msp-shell-canvas-tool, button) > svg:first-child {
  width: 18px;
  height: 18px;
}

.msp-shell-canvas-tool[data-captioned] {
  justify-content: center;
  gap: var(--msp-space-1);
  height: var(--msp-rail-button-captioned, 46px);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-tool > svg, .msp-shell-canvas-tool > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon, 20px);
  height: var(--msp-rail-icon, 20px);
}

.msp-shell-canvas-tool[data-captioned] > svg, .msp-shell-canvas-tool[data-captioned] > .msp-shell-canvas-face > svg {
  width: var(--msp-rail-icon-captioned, 16px);
  height: var(--msp-rail-icon-captioned, 16px);
}

.msp-shell-canvas-caption {
  color: var(--msp-color-text-subtle);
  font-variant-numeric: tabular-nums;
  font-size: 10px;
  line-height: 1;
}

.msp-shell-canvas-tool {
  position: relative;
}

.msp-shell-canvas-face {
  display: contents;
}

.msp-shell-canvas-menuMark {
  opacity: .45;
  border-top: 4px solid #0000;
  border-right: 4px solid;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.msp-shell-canvas-toolMenu {
  z-index: var(--msp-z-overlay);
  padding-bottom: var(--msp-space-3);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  bottom: 100%;
}

@keyframes msp-shell-canvas-tool-menu-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.msp-shell-canvas-toolMenuCard {
  min-width: 200px;
  max-height: calc(var(--msp-menu-room) - var(--msp-space-3));
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-glass-panel-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  flex-direction: column;
  display: flex;
}

.msp-shell-canvas-toolMenuScroll {
  flex: auto;
  min-height: 0;
}

.msp-shell-canvas-toolMenuScrollContent {
  display: grid;
}

.msp-shell-canvas-toolMenuRow {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: 32px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  text-align: left;
  grid-template-columns: 16px 1fr auto;
  display: grid;

  &:hover:not(:disabled), &:focus-visible {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[data-choice][aria-checked="true"] {
    color: var(--msp-color-accent);
    font-weight: 600;

    & .msp-shell-canvas-toolMenuLabel {
      color: inherit;
    }
  }

  &:disabled {
    opacity: .55;
  }
}

.msp-shell-canvas-toolMenuDivider {
  height: 1px;
  margin: var(--msp-space-2) var(--msp-space-3);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-toolMenuLabel {
  color: var(--msp-color-text);
  display: grid;
}

.msp-shell-canvas-toolMenuCheck {
  color: var(--msp-color-accent);
}

.msp-shell-canvas-toolMenuHint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolMenuChevron {
  color: var(--msp-color-text-subtle);
}

.msp-shell-canvas-toolSubmenu {
  margin-right: var(--msp-space-2);
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  position: absolute;
  right: 100%;
}

.msp-shell-canvas-toolMenuHeading {
  padding: var(--msp-space-2) var(--msp-space-3) 0;
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-canvas-toolbarSlot {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  position: absolute;
}

.msp-shell-canvas-lead {
  top: var(--msp-canvas-top-inset, var(--msp-canvas-edge));
  left: var(--msp-canvas-edge);
  gap: var(--msp-space-3);
  width: min(320px, 100% - 96px);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-lead {
  width: min(320px, calc(100% - 36px - 3 * var(--msp-canvas-edge)));
}

.msp-shell-canvas-bottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-corner-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  pointer-events: none;
  position: absolute;
  container: bottom-bar / inline-size;
}

:where([data-mode="compact"]) .msp-shell-canvas-bottom {
  right: var(--msp-canvas-edge);
}

.msp-shell-canvas-bottomGrid {
  align-items: end;
  gap: var(--msp-space-3);
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "status corner";
  display: grid;

  & > * {
    pointer-events: auto;
  }
}

@container bottom-bar (width < 560px) {
  .msp-shell-canvas-bottomGrid {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "corner";
    position: relative;
  }

  .msp-shell-canvas-bottomGrid > .msp-shell-canvas-status {
    left: 0;
    right: 0;
    bottom: calc(100% + var(--msp-space-2));
    position: absolute;
  }
}

.msp-shell-canvas-context {
  justify-content: flex-end;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  display: flex;
}

.msp-shell-canvas-chip {
  height: 30px;
  padding: 0 var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  font-size: var(--msp-font-size-md);
}

.msp-shell-canvas-status {
  pointer-events: none;
  flex-direction: column;
  grid-area: status;
  align-self: end;
  align-items: flex-start;
  display: flex;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvas-pill {
  align-items: center;
  gap: var(--msp-space-2);
  max-width: 100%;
  height: max(34px, var(--msp-touch-target, 0px));
  padding: 0 0 0 var(--msp-space-3);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-sm);
  white-space: nowrap;
  background: var(--msp-glass-bg);
  box-shadow: var(--msp-glass-shadow);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  display: inline-flex;
  overflow: hidden;
}

.msp-shell-canvas-message {
  animation: msp-shell-canvas-pill-in var(--msp-motion-base) var(--msp-ease);

  &[data-kind="error"] {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] {
    color: var(--msp-color-success);
  }
}

@keyframes msp-shell-canvas-pill-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}

.msp-shell-canvas-text {
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-canvas-progress {
  background: var(--msp-color-border);
  border-radius: 2px;
  width: 48px;
  height: 4px;
  overflow: hidden;

  & > div {
    background: var(--msp-color-accent);
    height: 100%;
  }
}

.msp-shell-canvas-spin {
  animation: 1s linear infinite msp-shell-canvas-spin;
}

@keyframes msp-shell-canvas-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-pillMain {
  align-items: center;
  gap: var(--msp-space-2);
  min-width: 0;
  height: 100%;
  color: inherit;
  text-align: left;
  display: inline-flex;

  &:hover .msp-shell-canvas-text {
    text-underline-offset: 3px;
    text-decoration: underline;
  }
}

.msp-shell-canvas-pillButton {
  width: max(34px, var(--msp-touch-target, 0px));
  height: 100%;
  color: var(--msp-color-text-muted);
  flex: none;
  place-items: center;
  display: grid;
  position: relative;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-countdown {
  pointer-events: none;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);

  & circle {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    opacity: .6;
    animation: msp-shell-canvas-countdown var(--msp-countdown, 8s) linear forwards;
  }

  .msp-shell-canvas-pill:hover &, .msp-shell-canvas-pill:focus-within & {
    & circle {
      animation-play-state: paused;
    }
  }
}

@keyframes msp-shell-canvas-countdown {
  to {
    stroke-dashoffset: 100px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-canvas-countdown {
    display: none;
  }
}

.msp-shell-canvas-status .msp-shell-canvas-announce {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}

.msp-shell-canvas-status .msp-shell-canvas-pill {
  height: auto;
  min-height: 24px;
  padding-left: var(--msp-space-3);
  box-shadow: none;
  -webkit-backdrop-filter: none;
  text-shadow: 0 0 2px var(--msp-color-bg),
    0 0 6px var(--msp-color-bg);
  background: none;
}

.msp-shell-canvas-status .msp-shell-canvas-pillButton {
  width: 24px;
  height: 24px;
  margin-left: var(--msp-space-1);
  border-radius: var(--msp-radius-md);
}

.msp-shell-canvas-pill:not(:has(.msp-shell-canvas-pillButton)) {
  padding-right: var(--msp-space-3);
}

.msp-shell-canvas-railMenu {
  display: contents;
}

.msp-shell-canvas-railMenuAnchor {
  display: grid;
  position: relative;
}

.msp-shell-canvas-railMenuButton {
  width: 44px;
  height: max(40px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover, &[aria-expanded="true"] {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }
}

.msp-shell-canvas-railMenuList {
  right: 0;
  bottom: calc(100% + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  min-width: 220px;
  padding: var(--msp-space-2);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 8px 24px #0000001f;
  animation: msp-shell-canvas-tool-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
}

:where([data-mode="compact"]) .msp-shell-canvas-card {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-edge);
  width: auto;
}

.msp-shell-canvas-cardSlot {
  display: contents;
}

.msp-shell-canvas-cardDocked {
  contain: content;
  flex-direction: column;
  height: min(45cqh, 420px);
  min-height: 0;
  display: flex;
  overflow: hidden;
}

.msp-shell-canvas-busy {
  z-index: var(--msp-z-dialog);
  padding: var(--msp-space-4);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 30%);
  -webkit-backdrop-filter: blur(2px);
  animation: msp-shell-canvas-busy-in var(--msp-motion-base) var(--msp-ease);
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
}

@keyframes msp-shell-canvas-busy-in {
  from {
    opacity: 0;
  }
}

.msp-shell-canvas-busyCard {
  gap: var(--msp-space-3);
  width: min(360px, 100%);
  padding: var(--msp-space-4);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-panel);
  box-shadow: var(--msp-glass-shadow),
    0 12px 32px #0000001f;
  display: grid;
}

.msp-shell-canvas-busyHead {
  align-items: center;
  gap: var(--msp-space-3);
  display: flex;
}

.msp-shell-canvas-busySpin {
  color: var(--msp-color-accent);
  flex: none;
  animation: .9s linear infinite msp-shell-canvas-busy-spin;
}

@keyframes msp-shell-canvas-busy-spin {
  to {
    transform: rotate(360deg);
  }
}

.msp-shell-canvas-busyLabel {
  flex: 1;
  font-weight: 600;
}

.msp-shell-canvas-busyPercent {
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  font-variant-numeric: tabular-nums;
}

.msp-shell-canvas-busyTrack {
  background: var(--msp-color-control);
  border-radius: 2px;
  height: 4px;
  overflow: hidden;
}

.msp-shell-canvas-busyBar {
  background: var(--msp-color-accent);
  transform-origin: 0;
  width: 100%;
  height: 100%;
  transition: scale var(--msp-motion-fast) linear;
  border-radius: 2px;
  display: block;

  &[data-indeterminate] {
    animation: msp-shell-canvas-busy-slide 1.2s var(--msp-ease) infinite;
  }
}

@keyframes msp-shell-canvas-busy-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(340%);
  }
}

.msp-shell-canvas-busyActions {
  justify-content: flex-end;
  display: flex;
}

.msp-shell-canvas-railMenuDivider {
  height: 1px;
  margin: var(--msp-space-1) var(--msp-space-2);
  background: var(--msp-glass-edge);
}

.msp-shell-canvas-bar, .msp-shell-canvas-folded {
  min-width: 0;
}
}
`);var de={band:"msp-shell-dock-band",barTab:"msp-shell-dock-barTab",body:"msp-shell-dock-body",bodyContent:"msp-shell-dock-bodyContent",bottom:"msp-shell-dock-bottom",collapsedBar:"msp-shell-dock-collapsedBar",compact:"msp-shell-dock-compact",content:"msp-shell-dock-content",dock:"msp-shell-dock-dock",floating:"msp-shell-dock-floating",floatingBottom:"msp-shell-dock-floatingBottom",floatingLeft:"msp-shell-dock-floatingLeft",floatingRight:"msp-shell-dock-floatingRight",floatingTop:"msp-shell-dock-floatingTop",frameless:"msp-shell-dock-frameless",header:"msp-shell-dock-header",left:"msp-shell-dock-left",pin:"msp-shell-dock-pin",rail:"msp-shell-dock-rail","rail-menu-in":"msp-shell-dock-rail-menu-in",railFoot:"msp-shell-dock-railFoot",railMenu:"msp-shell-dock-railMenu",railMenuRows:"msp-shell-dock-railMenuRows",railMenuScroll:"msp-shell-dock-railMenuScroll",right:"msp-shell-dock-right",splitter:"msp-shell-dock-splitter",strip:"msp-shell-dock-strip",tab:"msp-shell-dock-tab",title:"msp-shell-dock-title",top:"msp-shell-dock-top"};_("views/shell/dock.module.css",`@layer msp.components {
.msp-shell-dock-dock {
  background: var(--msp-color-panel);
  min-width: 0;
  min-height: 0;
  display: flex;
}

.msp-shell-dock-right {
  flex-direction: row;
  grid-area: right;
}

.msp-shell-dock-left {
  flex-direction: row-reverse;
  grid-area: left;
}

.msp-shell-dock-top, .msp-shell-dock-bottom {
  flex-direction: row-reverse;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: 1;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-tab {
    width: 28px;
    height: 28px;
  }
}

.msp-shell-dock-top {
  grid-area: top;
}

.msp-shell-dock-bottom {
  grid-area: bottom;
}

.msp-shell-dock-content {
  contain: layout style;
  width: var(--msp-dock-size);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
  position: relative;
}

.msp-shell-dock-header {
  align-items: center;
  gap: var(--msp-space-3);
  height: 40px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-4);
  font-weight: 600;
  display: flex;
}

.msp-shell-dock-title {
  min-width: 0;
  font-size: inherit;
  font-weight: inherit;
  mask-image: linear-gradient(to right, #000 calc(100% - var(--msp-fade)), transparent);
  white-space: nowrap;
  flex: 1;
  animation-name: msp-fade-overflow;
  animation-fill-mode: both;
  animation-timeline: scroll(self inline);
  overflow: hidden;
}

.msp-shell-dock-body {
  contain: layout paint;
  flex: 1;
  min-height: 0;
}

.msp-shell-dock-bodyContent {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}

.msp-shell-dock-strip {
  gap: var(--msp-space-1);
  padding: var(--msp-space-2);
  background: var(--msp-color-bg);
  flex-direction: column;
  display: flex;
}

.msp-shell-dock-tab {
  width: max(36px, var(--msp-touch-target, 0px));
  height: max(36px, var(--msp-touch-target, 0px));
  border-radius: var(--msp-radius-md);
  color: var(--msp-color-text-muted);
  place-items: center;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
    color: var(--msp-color-text);
  }

  &[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: inset 0 0 0 1px var(--msp-selected-edge);
    color: var(--msp-color-accent);
  }
}

.msp-shell-dock-splitter {
  z-index: 1;
  cursor: col-resize;
  touch-action: none;
  width: 6px;
  position: absolute;
  top: 0;
  bottom: 0;

  &[data-active] {
    background: color-mix(in oklab, var(--msp-color-accent), transparent 60%);
  }
}

.msp-shell-dock-right .msp-shell-dock-splitter {
  left: -3px;
}

.msp-shell-dock-left .msp-shell-dock-splitter {
  right: -3px;
}

.msp-shell-dock-collapsedBar {
  align-items: center;
  gap: var(--msp-space-3);
  height: 24px;
  padding: 0 var(--msp-inset);
  flex: 1;
  display: flex;
}

.msp-shell-dock-barTab {
  align-items: center;
  gap: var(--msp-space-1);
  color: var(--msp-color-text-muted);
  font-size: var(--msp-font-size-sm);
  display: inline-flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-shell-dock-compact {
  flex-direction: column;

  & .msp-shell-dock-content {
    width: auto;
    height: min(45cqh, 420px);
  }

  & .msp-shell-dock-strip {
    flex-direction: row;
    justify-content: space-around;
  }

  & .msp-shell-dock-splitter, &[data-covered] > .msp-shell-dock-content {
    display: none;
  }
}

.msp-shell-dock-floating {
  top: var(--msp-canvas-edge);
  bottom: var(--msp-canvas-edge);
  align-items: flex-start;
  gap: var(--msp-space-3);
  pointer-events: none;
  display: flex;
  position: absolute;

  & > * {
    pointer-events: auto;
  }

  & .msp-shell-dock-content {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-panel-bg);
    --msp-surface: var(--msp-glass-panel-bg);
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    align-self: stretch;
    overflow: hidden;
  }

  & .msp-shell-dock-frameless {
    box-shadow: none;
    -webkit-backdrop-filter: none;
    background: none;
    border-radius: 0;
    overflow: visible;
  }

  & .msp-shell-dock-strip {
    background: none;
    gap: 0;
    padding: 0;
  }

  & .msp-shell-dock-tab {
    width: 100%;
    height: max(var(--msp-rail-button, 40px), var(--msp-touch-target, 0px));
    border-radius: 0;
  }

  & .msp-shell-dock-tab > svg {
    width: var(--msp-rail-icon, 20px);
    height: var(--msp-rail-icon, 20px);
  }

  & .msp-shell-dock-tab[aria-selected="true"] {
    background: var(--msp-color-control);
    box-shadow: none;
  }

  & .msp-shell-dock-header {
    height: max(var(--msp-rail-head, 40px), var(--msp-touch-target, 0px));
  }
}

.msp-shell-dock-floatingRight {
  gap: var(--msp-canvas-edge);
  transition: transform var(--msp-motion-base) var(--msp-ease),
    opacity var(--msp-motion-base) var(--msp-ease);
  flex-direction: row-reverse;
  top: 0;
  bottom: 0;
  right: 0;

  &[data-rail-hidden] {
    opacity: 0;
    transform: translateX(100%);
  }

  & .msp-shell-dock-rail {
    background: var(--msp-glass-panel-bg);
    box-shadow: none;
    border-radius: 0;
    position: relative;

    &:before {
      content: "";
      z-index: 1;
      background: var(--msp-glass-edge);
      pointer-events: none;
      width: 1px;
      position: absolute;
      inset: 0 auto 0 0;
    }
  }

  &[data-rail-overlay] {
    bottom: calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));

    & .msp-shell-dock-rail {
      border-bottom-left-radius: var(--msp-radius-lg);
    }

    & .msp-shell-dock-content {
      margin-bottom: var(--msp-canvas-edge);
    }
  }

  & .msp-shell-dock-content {
    margin: var(--msp-canvas-edge) 0 calc(var(--msp-canvas-edge) + var(--msp-corner-room, 0px));
  }

  [data-overlay="open"] > & .msp-shell-dock-content {
    visibility: hidden;
  }
}

[data-pinned] {
  --msp-pinned-bg: var(--msp-color-panel);
  --msp-pinned-edge: -1px 0 0 var(--msp-glass-edge);
}

[data-pinned] > .msp-shell-dock-floatingRight {
  gap: 0;

  & .msp-shell-dock-content {
    background: var(--msp-pinned-bg);
    --msp-surface: var(--msp-pinned-bg);
    -webkit-backdrop-filter: none;
    box-shadow: var(--msp-pinned-edge);
    border-radius: 0;
    margin: 0;
  }
}

.msp-shell-dock-floatingLeft {
  left: var(--msp-canvas-edge);
  flex-direction: row;
}

.msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom {
  left: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  flex-direction: column;
  align-items: stretch;

  & .msp-shell-dock-content {
    width: auto;
    height: var(--msp-dock-size);
    flex: none;
  }

  & .msp-shell-dock-header, & .msp-shell-dock-splitter {
    display: none;
  }

  & .msp-shell-dock-collapsedBar {
    border-radius: var(--msp-radius-lg);
    background: var(--msp-glass-bg);
    height: 28px;
    box-shadow: var(--msp-glass-shadow);
    -webkit-backdrop-filter: var(--msp-glass-filter);
    flex: none;
    align-self: flex-start;
  }
}

.msp-shell-dock-floatingTop {
  bottom: auto;
}

.msp-shell-dock-floating:is(.msp-shell-dock-floatingRight, .msp-shell-dock-floatingLeft, .msp-shell-dock-floatingTop, .msp-shell-dock-floatingBottom) {
  pointer-events: none;
}

.msp-shell-dock-floatingTop.msp-shell-dock-band, .msp-shell-dock-floatingBottom.msp-shell-dock-band {
  left: 0;
  right: calc(var(--msp-canvas-end, 0px) - var(--msp-canvas-pinned, 0px));
  background: linear-gradient(to bottom,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  pointer-events: none;

  & .msp-shell-dock-content {
    pointer-events: none;
  }
}

.msp-shell-dock-floatingTop.msp-shell-dock-band {
  top: 0;
}

.msp-shell-dock-floatingBottom.msp-shell-dock-band {
  background: linear-gradient(to top,
    var(--msp-color-bg) calc(100% - var(--msp-band-fade, 0px) - var(--msp-band-dissolve, 0px)),
    color-mix(in srgb, var(--msp-color-bg) 60%, transparent) calc(100% - var(--msp-band-fade, 0px) * .6),
    transparent);
  bottom: 0;
}

.msp-shell-dock-floatingBottom {
  flex-direction: column-reverse;
  top: auto;
}

.msp-shell-dock-rail {
  flex: none;
  align-self: stretch;
  container-type: size;
}

@container (height <= 619px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 34px;
    --msp-rail-button-captioned: 40px;
    --msp-rail-icon: 18px;
    --msp-rail-icon-captioned: 15px;
  }
}

@container (height <= 529px) {
  .msp-shell-dock-rail > * {
    --msp-rail-button: 30px;
    --msp-rail-button-captioned: 36px;
    --msp-rail-icon: 16px;
    --msp-rail-icon-captioned: 14px;
  }
}

.msp-shell-dock-railMenu {
  right: calc(44px + var(--msp-space-2));
  z-index: var(--msp-z-overlay);
  max-height: 100%;
  animation: msp-shell-dock-rail-menu-in var(--msp-motion-fast) var(--msp-ease);
  display: flex;
  position: absolute;

  & > * {
    grid-template-rows: minmax(0, 1fr);
    min-height: 0;
  }
}

.msp-shell-dock-railMenuScroll {
  min-height: 0;
}

.msp-shell-dock-railMenuRows {
  display: grid;
}

@keyframes msp-shell-dock-rail-menu-in {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
}

.msp-shell-dock-railFoot {
  flex-direction: column;
  margin-top: auto;
  display: flex;

  & > :last-child {
    background: color-mix(in oklab, var(--msp-color-control), transparent 30%);
  }

  & > * + * {
    border-top: 1px solid var(--msp-glass-edge);
  }
}

.msp-shell-dock-pin > span {
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
  }
}
}
`);var An=[{name:"normal",min:620,button:40,captioned:46},{name:"compact",min:530,button:34,captioned:40},{name:"small",min:0,button:30,captioned:36}];function xa(n){return An.find(e=>n>=e.min)??An[An.length-1]}var Mr=new Set;function Rc(n,e){let t=xa(e);if(e<=0)return{step:t,hidden:Mr};let s=(i,c)=>{let p=new Set(i.map(d=>d.section)),h=0;for(let d of i)h+=d.captioned?t.captioned:t.button;return c&&(h+=t.button,p.add("more")),h+Math.max(0,p.size-1)};if(s(n,!1)<=e)return{step:t,hidden:Mr};let a=n.map((i,c)=>({e:i,i:c})).sort((i,c)=>c.e.priority-i.e.priority||c.i-i.i).map(i=>i.e),o=new Set,r=n;for(let i of a)if(o.add(i.id),r=r.filter(c=>c!==i),s(r,!0)<=e)break;return{step:t,hidden:o}}function Ms(n){let e=[];for(let t of n){let s=t.group,a=e.find(o=>o.group===s);a?a.items.push(t):e.push({group:s,items:[t]})}return e.sort((t,s)=>t.group===void 0?-1:s.group===void 0?1:0)}function Lc(n,e){let t=(r,i)=>({id:`tab:${r.id}`,section:i,priority:r.priority,captioned:!1,kind:"tab",tab:r}),s=(r,i)=>({id:`tool:${r.id}`,section:i,priority:r.priority,captioned:!!r.caption,kind:"tool",item:r}),a=[];for(let r of n.filter(i=>i.place==="head"))a.push(t(r,"head"));for(let r of n.filter(i=>!i.place||i.place==="strip"))a.push(t(r,"strip"));let o=Ms(e);for(let r of o)if(r.group!==void 0)for(let i of r.items)a.push(s(i,`group:${r.group}`));for(let r of n.filter(i=>i.place==="foot"))a.push(t(r,"foot"));for(let r of o)if(r.group===void 0)for(let i of r.items)a.push(s(i,"lead"));return a.map((r,i)=>r.priority===void 0?{...r,priority:i}:r)}function wa(n){let e=j([]),t=new Map,s=[],a=()=>e.set(s.filter(r=>!r.visible||t.get(r.visible)?.on===!0)),o=()=>{for(let r of t.values())r.stop();t.clear()};return Me(n,r=>{s=r;let i=new Set;for(let c of r){let p=c.visible;if(!p||(i.add(p),t.has(p)))continue;let h={on:void 0,stop:()=>{}};t.set(p,h);let d=!0,m=p.subscribe(u=>{h.on=u,d||a()});d=!1,h.stop=()=>m.unsubscribe()}for(let[c,p]of t)i.has(c)||(p.stop(),t.delete(c));a()}),Wt(r=>{r||o()}),te(o),e.asReadonly}var Pc=(n,e)=>n.size===e.size&&[...n].every(t=>e.has(t)),Ac=(n,e)=>n.length===e.length&&n.every((t,s)=>t===e[s]),ks=class{constructor(e,t){this.height=j(0);this.menu=j(void 0);let s=wa(b(e.toolbar,o=>o.filter(r=>r.place!=="canvas")));this.entries=b([t.tabs,s],(o,r)=>Lc(o,r));let a=b([this.entries,this.height.asReadonly],(o,r)=>({entries:o,fit:Rc(o,r)}));this.hidden=b(a,o=>o.fit.hidden,Pc),this.overflow=b(a,o=>o.entries.filter(r=>o.fit.hidden.has(r.id)),Ac)}toggleMenu(e,t){let s=this.menu.value;if(s&&s.anchor===e)return this.menu.set(void 0);let a=this.#e?.parentElement,o=a?a.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom:0;this.menu.set({bottom:o,anchor:e,...t?{item:t}:{}})}#e;observe(e){this.#e=e;let t=ze(e,s=>{let a=Math.round(s[s.length-1].contentRect.height);a!==this.height.value&&this.height.set(a)});return()=>t?.disconnect()}};var Sr=new WeakMap;function rt(n,e){let t=Sr.get(e);if(t)return t;let s=b(e.state,r=>r,(r,i)=>r.size===i.size&&r.pinned===i.pinned&&r.floating===i.floating),a=b(s,r=>r.size),o=e.id==="right"?b([e.state,n.overlay],(r,i)=>i||r.collapsed?void 0:r.active):b(e.state,r=>r.collapsed?void 0:r.active);return t={size:a,sizePx:b(a,r=>`${r}px`),pinned:b(s,r=>r.pinned),floating:b(s,r=>r.floating),selected:Ze(o)},Sr.set(e,t),t}function zn(n){let{shell:e,dock:t}=n,s=t.id==="top"||t.id==="bottom",a=b(t.tabs,d=>d.length>0),o=b(e.mode,d=>d==="compact"&&t.id==="right"),r=b([e.overlay,o],(d,m)=>m?d:void 0),i=b([t.tabs,o],(d,m)=>m&&d.some(u=>u.compactBar)?d.filter(u=>u.compactBar):d),c=s?b([t.tabs,t.active],(d,m)=>d.length>1&&!!m):!0,p=Xe("msp-panel"),h;return l(P,{when:a,children:()=>{let d=rt(e,t).sizePx,m=y("div",{class:`${de.dock} ${de[t.id]}`,ref:u=>{h=u},children:[l(P,{when:t.active,reveal:!0,swap:()=>h,fallback:s?()=>l(Ic,{shell:e,dock:t}):void 0,children:u=>l(ka,{shell:e,dock:t,tab:u,id:p,...t.id==="right"?{coveredBy:r}:{}})}),l(P,{when:o,children:()=>l(Er,{shell:e})}),l(P,{when:c,children:()=>{let u,f=y("div",{class:de.strip,children:[l("div",{role:"tablist","aria-label":"Panels",style:"display: contents",ref:v=>{u=v,te(Mn(v))},children:l(ie,{each:i,children:v=>l(Ss,{shell:e,dock:t,tab:v,panel:p})})}),n.stripEnd]});return D([o],()=>q(u,"aria-orientation",o.value||s?"horizontal":"vertical")),f}})]});return D([d,o,r],()=>{_t(m,de.compact,o.value),q(m,"data-covered",!!r.value),Te(m,"--msp-dock-size",d.value)}),m}})}function Ma(n){let{shell:e,dock:t}=n,s=rt(e,t).sizePx,a=new ks(e,t),o=b([t.tabs,a.hidden],(m,u)=>u.size?m.filter(f=>!u.has(`tab:${f.id}`)):m),r=b(o,m=>m.filter(u=>u.place==="head"),Vt),i=b(o,m=>m.filter(u=>!u.place||u.place==="strip"),Vt),c=b(o,m=>m.filter(u=>u.place==="foot"),Vt),p=Xe("msp-panel");if(t.id==="top"||t.id==="bottom"){let m=b(t.active,f=>f?.frame==="none"),u=l("div",{class:`${de.floating} ${t.id==="top"?de.floatingTop:de.floatingBottom}`,children:l(P,{when:t.active,reveal:"fade",children:f=>l(ka,{shell:e,dock:t,tab:f,id:p})})});return D([m,s],()=>{_t(u,de.band,m.value),Te(u,"--msp-dock-size",s.value)}),u}let h=b(a.height.asReadonly,m=>`${(m>0?xa(m):An[0]).button}px`),d=y("div",{class:`${de.floating} ${t.id==="left"?de.floatingLeft:de.floatingRight}`,children:[y("div",{class:`${de.rail} ${L.frame}`,ref:m=>{te(a.observe(m))},children:[n.railLead,l(P,{when:b(r,m=>m.length>0),children:()=>l("div",{class:de.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Home",ref:m=>te(Mn(m)),children:l(ie,{each:r,children:m=>l(Ss,{shell:e,dock:t,tab:m,panel:p})})})}),l(P,{when:b(i,m=>m.length>0),children:()=>l("div",{class:de.strip,role:"tablist","aria-orientation":"vertical","aria-label":"Panels",ref:m=>te(Mn(m)),children:l(ie,{each:i,children:m=>l(Ss,{shell:e,dock:t,tab:m,panel:p})})})}),n.railItems?.(a),l(zc,{shell:e,dock:t,rail:a,root:()=>d}),y("div",{class:de.railFoot,children:[l(P,{when:b(c,m=>m.length>0),children:()=>l("div",{class:de.strip,role:"tablist","aria-orientation":"vertical","aria-label":"More panels",ref:m=>te(Mn(m)),children:l(ie,{each:c,children:m=>l(Ss,{shell:e,dock:t,tab:m,panel:p})})})}),n.railFoot?.(a)]})]}),l(P,{when:t.active,reveal:"side",swap:()=>d,children:m=>l(ka,{shell:e,dock:t,tab:m,id:p,pinnable:!0,coveredBy:e.overlay})}),l(Hc,{shell:e,dock:t,rail:a})]});return D([s,h],()=>{Te(d,"--msp-dock-size",s.value),Te(d,"--msp-rail-head",h.value)}),d}function Tr(n,e,t){e.id==="right"&&n.overlay.value?(n.closeOverlay(),n.show(t.id)):n.select(t.id)}function zc(n){let{rail:e}=n,t=e.menu,s=b(t.asReadonly,a=>!!a);return l(P,{when:b(e.overflow,a=>a.length>0),children:()=>{te(()=>t.set(void 0));let a=l("button",{type:"button",class:de.tab,"data-tip":"More","data-tip-side":"left","aria-label":"More","aria-haspopup":"menu",onClick:o=>e.toggleMenu(o.currentTarget),onKeyDown:o=>{o.key!=="ArrowDown"&&o.key!=="ArrowUp"||t.value||(o.preventDefault(),o.currentTarget.click())},children:l(H,{name:"ellipsis",size:20})});return D([s],()=>q(a,"aria-expanded",String(s.value))),l("nav",{class:de.strip,"aria-label":"More buttons",children:a})}})}function Hc(n){let{shell:e,dock:t,rail:s}=n,a=s.menu,o=b([a.asReadonly,s.overflow],(p,h)=>p&&(p.item?p.item.menu?.length:h.length>0)?p:void 0),r=(p,h)=>{if(a.set(void 0),p.tab)return Tr(e,t,p.tab);let d=p.item;d.overlay?e.toggleOverlay(d.overlay,h):d.run?.(h)},i=p=>{if(p.key!=="Escape"||!a.value||!Ye(a.value.anchor,p))return;let h=a.value.anchor;a.set(void 0),h.focus(),p.preventDefault()},c=p=>{let h=a.value;if(!h)return;let d=st(p);He(p,h.anchor)||d.closest?.(`.${de.railMenu}`)||a.set(void 0)};return G(document,"keydown",i),G(document,"pointerdown",c),l(P,{when:o,children:p=>{let h=at(()=>p.anchor),d;te(()=>h(d));let m=p.item?Dt(p.item):void 0,u=l("div",{class:L.toolMenuCard,role:"menu","aria-label":p.item?rn(p.item):"More",onKeyDown:vt,ref:f=>{d=f,queueMicrotask(()=>At(f))},children:l(we,{class:de.railMenuScroll,contentClass:de.railMenuRows,children:p.item?l(ln,{items:p.item.menu,onRun:()=>a.set(void 0)}):l(ie,{each:s.overflow,children:f=>l(Fc,{entry:f,onRun:()=>r(f,p.anchor)})},f=>f.id)})});return m&&D([m],()=>q(u,"aria-label",m.value.title)),l("div",{class:de.railMenu,style:{bottom:`${p.bottom}px`},children:u})}})}function Fc(n){let{entry:e}=n,t=e.item?Dt(e.item):void 0,s=document.createTextNode(e.tab?e.tab.title:t?t.value.title:rn(e.item));return t&&D([t],()=>fe(s,t.value.title)),y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,onClick:()=>n.onRun(),children:[e.tab?l(H,{name:e.tab.icon,size:16}):l(Hn,{item:e.item,size:16,...t?{face:t}:{}}),l("span",{class:L.toolMenuLabel,children:s}),l("span",{})]})}function Ic(n){let{shell:e,dock:t}=n;return l("div",{class:de.collapsedBar,children:l(ie,{each:t.tabs,children:s=>y("button",{type:"button",class:de.barTab,onClick:()=>e.show(s.id),title:`Show ${s.title}`,children:[l(H,{name:t.id==="top"?"chevron-down":"chevron-up",size:14}),s.title]})})})}function Dc(n,e){return[{id:"hide",label:`Hide ${e.title}`,icon:"eye-off",run:()=>n.hideTab(e.id)},...n.hiddenTabs.value.map(t=>({id:`show:${t.id}`,label:`Show ${t.title}`,icon:"eye",run:()=>n.showTab(t.id)})),{id:"reset",label:"Reset layout",icon:"rotate-ccw",run:()=>n.resetLayout()}]}function Cr(n,e,t,s){let a=t.closest(".msp-root")??document.body,o=t.getBoundingClientRect();la(a,s??{x:o.left,y:o.bottom},Dc(n,e))}function Ss(n){let{shell:e,dock:t,tab:s}=n,a=rt(e,t).selected.key(s.id),o=l("button",{type:"button",role:"tab",class:de.tab,"data-tip":s.title,"data-tip-side":"left","aria-label":s.title,"aria-controls":n.panel,"data-tab":s.id,onClick:()=>Tr(e,t,s),onContextMenu:r=>{r.preventDefault(),Cr(e,s,r.currentTarget,{x:r.clientX,y:r.clientY})},onKeyDown:r=>{r.key!=="ContextMenu"&&!(r.shiftKey&&r.key==="F10")||(r.preventDefault(),Cr(e,s,r.currentTarget))},children:l(H,{name:s.icon,size:20})});return D([a],()=>q(o,"aria-selected",String(a.value))),o}function Sa(n){let{shell:e}=n,t=e.dock(n.dock),s=b([e.mode,e.compactRail],(a,o)=>!o&&a!=="embedded"&&a!=="compact");return l(P,{when:s,children:()=>l(Re,{variant:"ghost",size:"sm",class:de.pin,icon:l(H,{name:"pin"}),title:"Pin beside the canvas",pressed:rt(e,t).pinned,onClick:()=>e.setPinned(n.dock,!t.state.value.pinned)})})}function ka(n){let{shell:e,dock:t,tab:s}=n,a=n.coveredBy?b(n.coveredBy,c=>!c):!0,o,r=!1,i=c=>{let p=c.relatedTarget;if(p){r=!!o?.contains(p);return}let h=st(c);queueMicrotask(()=>{let d=We();d&&o?.contains(d)||h.isConnected&&!h.closest("[inert]")&&(r=!1)})};return te(()=>{if(!r)return;let c=We();if(c&&!o?.contains(c))return;let p=o?.closest(".msp-root")??o?.getRootNode();(p?[...p.querySelectorAll('[role="tab"]')]:[]).find(d=>d.dataset.tab===s.id)?.focus({preventScroll:!0})}),pt(a,()=>y("section",{class:s.frame==="none"?`${de.content} ${de.frameless}`:de.content,role:"tabpanel",id:n.id,"aria-label":s.title,"data-msp-scope":`panel:${s.id}`,ref:c=>{o=c},onFocusIn:()=>{r=!0},onFocusOut:i,children:[l(Nc,{shell:e,dock:t}),y("header",{class:de.header,children:[l("h2",{class:de.title,children:typeof s.heading=="function"?s.heading():s.heading??s.title}),n.pinnable?l(Sa,{shell:e,dock:t.id}):null,l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close panel",onClick:()=>e.toggle(t.id)})]}),l(we,{class:de.body,contentClass:de.bodyContent,children:l(P,{when:b(e.tabFocus,c=>({section:c?.tab===s.id?c.section:void 0}),(c,p)=>c.section===p.section&&!p.section),children:c=>l(Qe,{renderer:s.render,ctx:{shell:e,dock:t.id,...c.section?{focus:c.section}:{}}})})})]}))}function Nc(n){let{shell:e,dock:t}=n,s=t.id==="left"?1:-1,a=Ve(-1);Me(a,c=>{c>=0&&e.setSize(t.id,c)});let o,r=rt(e,t).size,i=l("div",{class:de.splitter,role:"separator","aria-orientation":"vertical",tabIndex:0,"aria-label":"Panel width",onKeyDown:c=>{if(c.key!=="ArrowLeft"&&c.key!=="ArrowRight")return;c.preventDefault();let p=(c.shiftKey?64:16)*(c.key==="ArrowRight"?1:-1);e.setSize(t.id,t.state.value.size+s*p)},onPointerEnter:c=>c.currentTarget.setAttribute("data-active",""),onPointerLeave:c=>{o?.active||c.currentTarget.removeAttribute("data-active")},ref:c=>{o=ht(c,{start:p=>(c.setAttribute("data-active",""),{x:p.clientX,size:t.state.value.size}),move:(p,h)=>a.offer(h.size+s*(p.clientX-h.x)),end:(p,h,d)=>{if(h==="up"&&d){let m=c.getBoundingClientRect();if(d.clientX>=m.left&&d.clientX<=m.right&&d.clientY>=m.top&&d.clientY<=m.bottom)return}c.removeAttribute("data-active")}})},onDblClick:()=>e.setSize(t.id,t.id==="left"?300:340)});return D([r],()=>q(i,"aria-valuenow",Math.round(r.value))),i}function In(n,e){let t=De(n);if(!t)return j(n).asReadonly;if(ct(t))return t;let s=Xa(t,e);return te(()=>s.dispose()),s}function Dt(n){return n.face?In(n.face,{icon:n.icon,title:n.title}):void 0}function rn(n){return n.caption?`${n.title} (${n.caption})`:n.title}function Hn(n){let{item:e}=n,t=n.face??Dt(e);if(!t)return l(H,{name:e.icon,size:n.size});let s,a=l("span",{class:n.class});return D([t],()=>{let o=t.value.icon;o!==s&&(s=o,a.replaceChildren(H({name:o,size:n.size})))}),a}function Dn(n){let{shell:e}=n,t=n.part??"all",s=t==="canvas",a=n.hidden?b([e.toolbar,n.hidden],(r,i)=>i.size?r.filter(c=>!i.has(`tool:${c.id}`)):r):e.toolbar,o=b(a,r=>{let i=Ms(r.filter(c=>c.place==="canvas"===s));return t==="all"||s?i:i.filter(c=>t==="lead"?c.group===void 0:c.group!==void 0)});return l("div",{class:L.sections,children:l(ie,{each:o,children:r=>l("div",{class:L.toolbar,role:"toolbar","aria-orientation":n.menus?"horizontal":"vertical","aria-label":r.group??"commands",children:r.items.map(i=>i.visible?l(P,{when:i.visible,children:()=>l(Rr,{shell:e,item:i,menus:n.menus,railMenu:n.railMenu})}):l(Rr,{shell:e,item:i,menus:n.menus,railMenu:n.railMenu}))})},r=>r.group??"")})}function Pr(n,e){let t=In(e.pressed??!1,!1),s=e.overlay;return s?b([n.overlay,t],(a,o)=>a?.overlay.id===s||o):t}function Rr(n){let{shell:e,item:t,menus:s}=n,a=!s&&t.menu?.length?n.railMenu:void 0,o=s&&t.menu?.length?s:void 0,r=t.pressed||t.overlay?Pr(e,t):void 0,i=Dt(t),c=i?void 0:rn(t),p=o?.shown.key(t),h=y("button",{type:"button",class:L.tool,"data-captioned":t.caption?"":void 0,"data-tip":o?void 0:c,"data-tip-side":t.place==="canvas"?"top":"left","aria-label":c,"aria-haspopup":o||a?"menu":void 0,"data-overlay-trigger":t.overlay?"":void 0,"data-keeps-card":t.keepsCard?"":void 0,onClick:m=>{if(o&&!t.overlay&&!t.run)return o.show(t,m.currentTarget,m.detail===0);if(o&&Ta())return o.open.value?.item===t?o.hide():o.show(t,m.currentTarget,m.detail===0);if(a)return a(t,m.currentTarget);o?.hide(),t.overlay?e.toggleOverlay(t.overlay,m.currentTarget):t.run?.(m.currentTarget)},onKeyDown:o?m=>{m.key!=="ArrowDown"&&m.key!=="ArrowUp"||(m.preventDefault(),o.show(t,m.currentTarget,!0))}:void 0,onPointerEnter:o?m=>m.pointerType==="mouse"&&o.show(t,m.currentTarget):void 0,onPointerLeave:o?()=>o.hideSoon():void 0,onBlur:o?()=>o.hideSoon():void 0,children:[l(Hn,{item:t,size:t.caption?16:20,class:L.face,...i?{face:i}:{}}),t.caption?l("span",{class:L.caption,children:t.caption}):null,o?l("span",{class:L.menuMark,"aria-hidden":"true"}):null]}),d=[];return i&&d.push(i),r&&d.push(r),p&&d.push(p),d.length&&D(d,()=>{i&&(q(h,"aria-label",i.value.title),o||q(h,"data-tip",i.value.title)),r&&q(h,"aria-pressed",String(r.value)),p&&q(h,"aria-expanded",String(p.value))}),h}var Ta=()=>typeof matchMedia=="function"&&matchMedia("(hover: none)").matches;function Oc(n,e){let t=n.menu??[];return!n.run||!Ta()?t:[{id:`${n.id}:self`,label:n.title,icon:n.icon,group:"",run:()=>n.run?.(e)},...t]}function ln(n){let{onSubmenu:e}=n;return l(ye,{children:n.items.map((t,s,a)=>y(ye,{children:[s>0&&t.group!==a[s-1].group?l("div",{class:L.toolMenuDivider,role:"separator"}):null,t.items&&!e?y(ye,{children:[l("div",{class:L.toolMenuHeading,role:"presentation",children:t.label}),l(P,{when:t.items,children:o=>l(ln,{items:o,onRun:n.onRun})})]}):t.items&&e?y("button",{type:"button",role:"menuitem","aria-haspopup":"menu",class:L.toolMenuRow,disabled:!!t.disabled,onPointerEnter:o=>e(t,o.currentTarget),onClick:o=>e(t,o.currentTarget,!0),onKeyDown:o=>{o.key==="ArrowRight"&&(o.preventDefault(),e(t,o.currentTarget,!0))},children:[t.icon?l(H,{name:t.icon,size:16}):l("span",{}),y("span",{class:L.toolMenuLabel,children:[t.label,t.disabled||t.hint?l("span",{class:L.toolMenuHint,children:t.disabled??t.hint}):null]}),l(H,{name:"chevron-right",size:14,class:L.toolMenuChevron})]}):y("button",{type:"button",role:t.pressed?t.choice?"menuitemradio":"menuitemcheckbox":"menuitem","aria-checked":t.pressed,class:L.toolMenuRow,disabled:!!t.disabled,onPointerEnter:e?()=>e(void 0):void 0,onClick:()=>{n.onRun(),t.run()},children:[t.icon?l(H,{name:t.icon,size:16}):l("span",{}),y("span",{class:L.toolMenuLabel,children:[t.label,t.disabled||t.hint?l("span",{class:L.toolMenuHint,children:t.disabled??t.hint}):null]}),t.pressed?l(P,{when:t.pressed,children:()=>l(H,{name:"check",size:14,class:L.toolMenuCheck})}):null]})]}))})}function $c(n,e,t){let s=e.pressed||e.overlay?Pr(n,e):void 0,a=()=>{e.overlay?n.toggleOverlay(e.overlay,t()):e.run?.(t())},o={id:e.id,label:e.title,icon:e.icon,group:e.group??""},r=e.menu??[];if(!r.length)return{...o,...s?{pressed:s}:{},run:a};let i=(e.run||e.overlay)&&!r.some(c=>c.label===e.title)?[{id:`${e.id}:self`,label:e.title,icon:e.icon,group:"",...s?{pressed:s}:{},run:a}]:[];return{...o,run:()=>{},items:j([...i,...r]).asReadonly}}function Bc(n,e,t){let s=ge("collapsedRows"),a=new Map,o=i=>{let c=a.get(i);if(!c){let p=s.child();a.set(i,c={row:Ae(p,()=>$c(n,i,t)),scope:p})}return c.row},r=wa(b(n.toolbar,i=>Ms(i.filter(c=>c.place==="canvas")).flatMap(c=>c.items)));return b([In(e??[],[]),r],(i,c)=>{let p=[...i.map(h=>({...h,group:h.group??"lead"})),...c.map(o)];if(a.size>c.length){let h=new Set(c);for(let[d,m]of a)h.has(d)||(m.scope.dispose(),a.delete(d))}return p})}var Fn={id:"toolbar",place:"canvas",icon:"wrench",title:"Toolbar"};function Ar(n){let{shell:e}=n,t=new Ca,s,a,o={rows:Bc(e,n.leadMenu,()=>a??s)},r=e.toolbarCollapsed,i=pt(b(r,d=>!d),()=>y("div",{class:L.bar,children:[l("div",{class:L.frame,children:y(we,{axis:"x",contentClass:L.stackTools,children:[n.lead,l(Dn,{shell:e,part:"canvas",menus:t})]})}),n.aside]})),c=b(o.rows,d=>d.length>0),p=n.quiet===void 0?void 0:In(n.quiet,!1),h=y("div",{class:L.stack,children:[i,l(P,{when:r,children:()=>l(P,{when:c,children:()=>l("div",{class:`${L.frame} ${L.folded}`,children:l(jc,{menus:t,popup:o,ref:d=>{a=d}})})})}),l(qc,{menus:t})]});return s=h,D(p?[r,p]:[r],()=>{q(i,"hidden",r.value),p&&q(h,"data-quiet",p.value)}),Me(r,()=>t.hide()),t.stack=h,te(()=>t.dispose()),h}function jc(n){let{menus:e,popup:t}=n,s=e.shown.key(Fn),a=y("button",{type:"button",class:L.tool,"data-stack-collapsed":"","aria-label":"Toolbar","aria-haspopup":"menu",ref:n.ref,onClick:o=>{if(Ta()&&e.open.value?.item===Fn)return e.hide();e.show(Fn,o.currentTarget,o.detail===0,t)},onKeyDown:o=>{o.key!=="ArrowDown"&&o.key!=="ArrowUp"||(o.preventDefault(),e.show(Fn,o.currentTarget,!0,t))},onPointerEnter:o=>o.pointerType==="mouse"&&e.show(Fn,o.currentTarget,!1,t),onPointerLeave:()=>e.hideSoon(),onBlur:()=>e.hideSoon(),children:[l(H,{name:"wrench",size:18}),l("span",{class:L.menuMark,"aria-hidden":"true"})]});return D([s],()=>q(a,"aria-expanded",String(s.value))),a}var Vc=8,Ca=class{constructor(){this.open=j(void 0);this.shown=Ze(b(this.open.asReadonly,e=>e?.item))}#e;show(e,t,s=!1,a){this.keep();let o=this.stack?this.stack.getBoundingClientRect().right-t.getBoundingClientRect().right:0,r=this.roomAbove(this.stack),i=this.open.value;(i?.item!==e||i.right!==o||i.room!==r)&&this.open.set({item:e,right:o,room:r,button:t,...a?{popup:a}:{}}),s&&queueMicrotask(()=>this.menu&&At(this.menu))}roomAbove(e,t){if(!e)return 0;let s=e.closest("[data-msp-viewport]"),a=(t??e.getBoundingClientRect().top)-(s?.getBoundingClientRect().top??0)-Vc;return a>0?Math.round(a):0}keep(){this.#e!==void 0&&clearTimeout(this.#e),this.#e=void 0}hideSoon(){this.keep(),this.#e=setTimeout(()=>this.hide(),160)}hide(){this.keep(),this.open.value&&this.open.set(void 0)}dispose(){this.keep()}};function qc(n){let{menus:e}=n,t=a=>{a.key!=="Escape"||a.defaultPrevented||!e.open.value||e.stack&&!Ye(e.stack,a)||(e.hide(),a.preventDefault())},s=a=>{let o=e.open.value;if(!o)return;let r=a.composedPath();e.menu&&r.includes(e.menu)||r.includes(o.button)||e.hide()};return G(document,"keydown",t),G(document,"pointerdown",s,{capture:!0}),l(P,{when:e.open,children:a=>{let o=!1,r;te(()=>{if(e.menu===r&&(e.menu=void 0),!o)return;let d=We();(!d||r?.contains(d))&&a.button.focus({preventScroll:!0})});let i=j(void 0),c,p=(d,m,u=!1)=>{if(!d||!m||!r){i.value&&i.set(void 0);return}let f=m.getBoundingClientRect().bottom,v=Math.round(r.getBoundingClientRect().bottom-f),g=e.roomAbove(e.stack,f);(i.value?.item!==d||i.value.bottom!==v||i.value.room!==g)&&i.set({item:d,row:m,bottom:v,room:g}),u&&queueMicrotask(()=>c&&At(c))},h=d=>{if(d.key==="ArrowLeft"||d.key==="Escape"){d.preventDefault();let m=i.value?.row;i.set(void 0),m?.focus({preventScroll:!0});return}vt(d)};return y("div",{class:L.toolMenu,style:{right:`${a.right}px`,...a.room?{"--msp-menu-room":`${a.room}px`}:{}},role:"menu","aria-label":a.item.title,ref:d=>{r=d,e.menu=d},onPointerEnter:()=>e.keep(),onPointerLeave:()=>e.hideSoon(),onFocusIn:()=>{o=!0,e.keep()},onFocusOut:()=>e.hideSoon(),children:[l("div",{class:L.toolMenuCard,onKeyDown:vt,children:a.popup?l(ye,{children:l(P,{when:a.popup.rows,children:d=>l(we,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:l(ln,{items:d,onRun:()=>e.hide(),onSubmenu:p})})})}):l(we,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:l(ln,{items:Oc(a.item,a.button),onRun:()=>e.hide(),onSubmenu:p})})}),l(P,{when:i,children:d=>l("div",{class:L.toolSubmenu,style:{bottom:`${d.bottom}px`,...d.room?{"--msp-menu-room":`${d.room}px`}:{}},role:"menu","aria-label":d.item.label,ref:m=>{c=m},onKeyDown:h,children:l("div",{class:L.toolMenuCard,children:l(we,{class:L.toolMenuScroll,contentClass:L.toolMenuScrollContent,children:l(P,{when:d.item.items,children:m=>l(ln,{items:m,onRun:()=>e.hide()})})})})})})]})}})}function zr(n){let{shell:e}=n,t=j(!1),s=e.dock("right"),a=b(e.toolbar,m=>m.filter(u=>u.place!=="canvas"&&!u.group)),o=b(e.toolbar,m=>m.filter(u=>u.place!=="canvas"&&u.group)),r=b(s.tabs,m=>m.some(u=>u.compactBar)?m.filter(u=>!u.compactBar):[]),i,c=(m,u)=>{t.set(!1),m.overlay?e.toggleOverlay(m.overlay,u):m.run?.(u)},p,h=y("div",{class:L.railMenu,children:[l(ie,{each:a,children:m=>{let u=Dt(m),f=u?void 0:rn(m),v=l("button",{type:"button",class:L.railMenuButton,"aria-label":f,"data-tip":f,onClick:g=>c(m,g.currentTarget),children:l(Hn,{item:m,size:20,class:L.face,...u?{face:u}:{}})});return u&&D([u],()=>{q(v,"aria-label",u.value.title),q(v,"data-tip",u.value.title)}),v}},m=>m.id),y("div",{class:L.railMenuAnchor,children:[l("button",{type:"button",class:L.railMenuButton,"aria-label":"More","aria-haspopup":"menu","data-tip":"More",ref:m=>p=m,onClick:m=>{t.set(!t.value),t.value&&m.detail===0&&queueMicrotask(()=>i&&At(i))},onKeyDown:m=>{m.key!=="ArrowDown"&&m.key!=="ArrowUp"||(m.preventDefault(),t.set(!0),queueMicrotask(()=>i&&At(i)))},children:l(H,{name:"ellipsis",size:20})}),l(P,{when:t,children:()=>{let m=at();return te(()=>m(i)),y("div",{class:L.railMenuList,role:"menu","aria-label":"More",ref:u=>{i=u},onKeyDown:u=>{vt(u),u.key==="Escape"&&(u.preventDefault(),u.stopPropagation(),t.set(!1))},children:[l(ie,{each:r,children:u=>y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,onClick:()=>{t.set(!1),e.show(u.id)},children:[l(H,{name:u.icon,size:16}),l("span",{class:L.toolMenuLabel,children:u.title}),l("span",{})]})},u=>u.id),l(P,{when:b([r,o],(u,f)=>u.length>0&&f.length>0),children:()=>l("div",{class:L.railMenuDivider})}),l(ie,{each:o,children:u=>{let f=Dt(u),v=u.visible?In(u.visible,!0):void 0,g=document.createTextNode(f?f.value.title:rn(u)),x=y("button",{type:"button",role:"menuitem",class:L.toolMenuRow,onClick:C=>c(u,C.currentTarget),children:[l(Hn,{item:u,size:16,class:L.face,...f?{face:f}:{}}),l("span",{class:L.toolMenuLabel,children:g}),l("span",{})]}),M=[];return f&&M.push(f),v&&M.push(v),M.length&&D(M,()=>{f&&fe(g,f.value.title),v&&q(x,"hidden",!v.value)}),x}},u=>u.id)]})}})]})]});return D([t.asReadonly],()=>q(p,"aria-expanded",String(t.value))),G(document,"pointerdown",m=>{t.value&&!He(m,h)&&t.set(!1)}),h}function Hr(n){let e=b(n.status.tasks,t=>t.find(s=>s.overlay),(t,s)=>t?.id===s?.id);return l(P,{when:e,children:t=>{let s=b(n.status.tasks,h=>h.find(d=>d.id===t.id)??t),a=b(s,h=>h.progress===void 0?void 0:Math.round(h.progress*100)),o=document.createTextNode(""),r=document.createTextNode(""),i,c,p=l("div",{class:L.busy,role:"alertdialog","aria-modal":"true","aria-label":t.label,children:y("div",{class:L.busyCard,children:[y("div",{class:L.busyHead,children:[l(H,{name:"loader-circle",size:18,class:L.busySpin}),l("span",{class:L.busyLabel,children:o}),l("span",{class:L.busyPercent,children:r})]}),l("div",{class:L.busyTrack,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,ref:h=>i=h,children:l("span",{class:L.busyBar,ref:h=>c=h})}),t.abort?l("div",{class:L.busyActions,children:l(Re,{size:"sm",onClick:()=>t.abort?.(),children:"Cancel"})}):null]})});return D([s,a],()=>{let h=a.value;fe(o,s.value.label),fe(r,h===void 0?"":`${h}%`),q(i,"aria-valuenow",h),q(c,"data-indeterminate",h===void 0),Te(c,"scale",`${(h??30)/100} 1`)}),p}})}var Lr=new WeakMap;function Fr(n){let e=Lr.get(n);return e||Lr.set(n,e=j(void 0,{compare:Object.is})),e}function Er(n){let e=Fr(n.shell),t=l("div",{class:L.cardSlot});return e.set(t),te(()=>{e.value===t&&e.set(void 0)}),t}function Ir(n){let{shell:e}=n,t=b(e.overlay,s=>!!s);return l(P,{when:t,children:()=>l(Wc,{shell:e})})}function Wc(n){let{shell:e}=n,s=e.overlay.value.anchor,a=at(()=>s),o=Xe("msp-card-title"),r=b(e.dock("right").state,M=>M.pinned),i=document.createTextNode(""),c,p=Fr(e),h=()=>!!p.value,d=y("section",{class:L.card,role:"dialog","aria-labelledby":o,onKeyDown:M=>{f()||es(M,M.currentTarget)},children:[y("header",{class:L.cardHeader,children:[l("h2",{class:L.cardTitle,id:o,children:i}),l(Sa,{shell:e,dock:"right"}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close",onClick:()=>e.closeOverlay()})]}),l(P,{when:e.overlay,children:M=>{s=M.anchor,Do(M.anchor)&&(c?.(),c=Jn(()=>{c=void 0;let E=d.querySelector(`.${L.cardBody}, .${L.cardBodyFill}`),F=ia(d);(F.find(O=>E?.contains(O))??F[F.length-1])?.focus()}));let C={shell:e,...M.focus?{focus:M.focus}:{}};return M.overlay.fill?l("div",{class:L.cardBodyFill,children:l(Qe,{renderer:M.overlay.render,ctx:C})}):l(we,{class:L.cardBody,contentClass:L.cardBodyContent,children:l(Qe,{renderer:M.overlay.render,ctx:C})})}})]}),m=l("div",{style:"display: contents",children:d});D([p.asReadonly],()=>{let M=p.value??m;if(d.parentElement===M)return;let C=We(),E=C&&d.contains(C)?C:void 0;M.append(d),_t(d,L.card,!p.value),_t(d,L.cardDocked,!!p.value),E?.focus({preventScroll:!0})}),te(()=>d.remove()),D([r,p.asReadonly,e.overlay],()=>{q(d,"aria-modal",String(!p.value&&!r.value)),fe(i,e.overlay.value?.overlay.title??"")});let u=()=>e.dock("right").state.value.pinned,f=()=>h()||u(),v=document,g=M=>{M.key!=="Escape"||M.defaultPrevented||u()||!Ye(d,M)||(e.closeOverlay(),M.preventDefault())},x=M=>{let C=e.overlay.value;if(!C)return;let E=st(M);u()||C.overlay.persistent||He(M,d)||He(M,C.anchor)||E.closest?.("[data-overlay-trigger], [role=tab]")||E.closest?.("[data-keeps-card], [data-msp-canvas]")||e.closeOverlay()};return G(v,"keydown",g),G(v,"pointerdown",x,{capture:!0}),te(()=>a(d)),m}var Cs={info:"info",success:"circle-check",warning:"triangle-alert",error:"circle-alert"};function Ea(n){let{status:e}=n,t=document.createTextNode("");return D([e.spoken],()=>fe(t,e.spoken.value)),y("div",{class:L.status,children:[l("div",{class:L.announce,role:"status","aria-live":"polite",children:t}),l(P,{when:e.current,children:s=>s.kind==="error"?y("span",{class:`${L.pill} ${L.message}`,"data-kind":s.kind,children:[y("button",{type:"button",class:L.pillMain,title:"Show the log",onClick:()=>n.onOpenLog?.(),children:[l(H,{name:Cs[s.kind],size:14}),l("span",{class:L.text,children:s.text})]}),l("button",{type:"button",class:L.pillButton,"aria-label":"Dismiss","data-tip":"Dismiss",onClick:()=>e.dismiss(s.id),children:l(H,{name:"x",size:14})})]}):y("button",{type:"button",class:`${L.pill} ${L.message}`,"data-kind":s.kind,title:"Show the log",onClick:()=>n.onOpenLog?.(),children:[l(H,{name:Cs[s.kind],size:14}),l("span",{class:L.text,children:s.text})]})}),l(ie,{each:b(e.tasks,s=>s.filter(a=>!a.overlay)),children:s=>l(Kc,{task:s})}),n.after]})}function Gc(n){let e,t=0,s=0,a=!1,o=j(void 0),r=()=>{e&&clearTimeout(e),e=void 0},i=()=>{r(),!(a||t<=0)&&(s=performance.now(),e=setTimeout(()=>n.onDismiss?.(),t))},c=h=>{h!==a&&(a=h,h&&e&&(t-=performance.now()-s),h?r():i())};n.autoDismiss&&n.onDismiss&&(Me(n.autoDismiss,h=>{r(),t=h??0,o.set(h),i()}),te(r));let p=y(ye,{children:[n.icon,l("span",{class:L.text,children:n.text}),n.after]});return y("span",{class:L.pill,onPointerEnter:()=>c(!0),onPointerLeave:()=>c(!1),onFocusIn:()=>c(!0),onFocusOut:h=>{h.currentTarget.contains(h.relatedTarget)||c(!1)},children:[n.onClick?l("button",{type:"button",class:L.pillMain,"aria-label":n.label,onClick:()=>n.onClick?.(),children:p}):p,n.onDismiss?y("button",{type:"button",class:L.pillButton,"aria-label":n.dismissLabel??"Dismiss","data-tip":n.dismissLabel??"Dismiss",onClick:()=>n.onDismiss?.(),children:[l(H,{name:"x",size:14}),l(P,{when:o.asReadonly,children:h=>l("svg",{class:L.countdown,viewBox:"0 0 20 20","aria-hidden":"true",style:{"--msp-countdown":`${h}ms`},children:l("circle",{cx:"10",cy:"10",r:"9",pathLength:"100"})})})]}):null]})}function Dr(n){return y("div",{class:L.context,children:[n.lead,l(ie,{each:n.status.chips,children:e=>y("span",{class:`${L.pill} ${L.chip}`,children:[l("button",{type:"button",class:L.text,onClick:()=>e.activate?.(),children:e.label}),e.dismiss?l("button",{type:"button",class:L.pillButton,title:"Clear",onClick:()=>e.dismiss?.(),children:l(H,{name:"x",size:14})}):null]})})]})}function Kc(n){let{task:e}=n;return y("span",{class:L.pill,children:[l(H,{name:"loader-circle",size:14,class:L.spin}),l("span",{class:L.text,children:e.label}),e.progress!==void 0?l("span",{class:L.progress,children:l("div",{style:{width:`${Math.round(e.progress*100)}%`}})}):null,e.abort?l("button",{type:"button",class:L.pillButton,title:"Cancel",onClick:()=>e.abort?.(),children:l(H,{name:"x",size:14})}):null]})}function Nr(n){let{shell:e}=n,t=b(e.dock("right").tabs,i=>i.find(c=>c.place==="head")?.icon??"prism"),s,a,o=l("div",{class:`${L.stack} ${L.railToggle}`,children:l("div",{class:L.frame,children:l("button",{type:"button",class:L.tool,"data-tip-side":"top",ref:i=>s=i,onClick:()=>e.toggleRail(),children:l("span",{class:L.face,ref:i=>a=i})})})}),r;return D([t,e.railOpen],()=>{let i=e.railOpen.value,c=i?"Hide the panel rail":"Show the panel rail";q(s,"data-tip",c),q(s,"aria-label",c),q(s,"aria-pressed",String(i)),t.value!==r&&(r=t.value,a.replaceChildren(H({name:r,size:18})))}),o}var Le={action:"msp-shell-help-panel-action",conflict:"msp-shell-help-panel-conflict",conflicts:"msp-shell-help-panel-conflicts",content:"msp-shell-help-panel-content",edit:"msp-shell-help-panel-edit",editBar:"msp-shell-help-panel-editBar",group:"msp-shell-help-panel-group",heading:"msp-shell-help-panel-heading",headingRow:"msp-shell-help-panel-headingRow",help:"msp-shell-help-panel-help",input:"msp-shell-help-panel-input",key:"msp-shell-help-panel-key",keys:"msp-shell-help-panel-keys",list:"msp-shell-help-panel-list",or:"msp-shell-help-panel-or",recorder:"msp-shell-help-panel-recorder",row:"msp-shell-help-panel-row",srOnly:"msp-shell-help-panel-srOnly"};_("views/shell/help-panel.module.css",`@layer msp.components {
.msp-shell-help-panel-help {
  flex: 1 1 0;
  min-height: 0;
}

.msp-shell-help-panel-content {
  gap: var(--msp-space-4);
  padding: 0 var(--msp-panel-inset) var(--msp-space-4);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-help-panel-group {
  gap: var(--msp-space-1);
  display: grid;
}

.msp-shell-help-panel-heading {
  padding: 0 var(--msp-inset) var(--msp-space-1);
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  margin: 0;
  font-weight: 500;
}

.msp-shell-help-panel-list {
  margin: 0;
  display: grid;
}

.msp-shell-help-panel-row {
  align-items: center;
  gap: var(--msp-space-3);
  min-height: var(--msp-control-height);
  padding: 0 var(--msp-inset);
  border-radius: var(--msp-radius-md);
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }
}

.msp-shell-help-panel-action {
  flex: 1;
  min-width: 0;
}

.msp-shell-help-panel-input {
  justify-content: flex-end;
  align-items: center;
  gap: var(--msp-space-2);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}

.msp-shell-help-panel-keys {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-key {
  min-width: 18px;
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  background: var(--msp-color-control);
  color: var(--msp-color-text);
  font: inherit;
  font-size: var(--msp-font-size-xs);
  text-align: center;
  white-space: nowrap;
}

.msp-shell-help-panel-or {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}

.msp-shell-help-panel-conflicts {
  gap: var(--msp-space-3);
  margin: 0 var(--msp-space-1);
  padding: var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: color-mix(in oklab, var(--msp-color-warning), transparent 85%);
  color: var(--msp-color-text);
  display: flex;
}

.msp-shell-help-panel-conflict {
  margin: 0;
}

.msp-shell-help-panel-headingRow {
  padding-right: var(--msp-space-1);
  justify-content: space-between;
  align-items: center;
  display: flex;

  & .msp-shell-help-panel-heading {
    padding-bottom: 0;
  }
}

.msp-shell-help-panel-edit {
  gap: var(--msp-space-1);
  display: flex;
}

.msp-shell-help-panel-recorder {
  padding: 1px var(--msp-space-2);
  border-radius: var(--msp-radius-sm);
  outline: 1px solid var(--msp-color-accent);
  color: var(--msp-color-accent);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
}

.msp-shell-help-panel-editBar {
  justify-content: space-between;
  align-items: center;
  gap: var(--msp-space-2);
  padding: var(--msp-space-1) var(--msp-inset) 0;
  display: flex;
}

.msp-shell-help-panel-srOnly {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
}
`);var Uc=()=>[{action:"Command menu",input:vn({key:"k",mod:!0}),or:vn({key:"p",mod:!0,shift:!0})},{action:"Help (this card)",input:["?"]},{action:"Close a menu, a card or the command menu",input:["Esc"]}];function Yc(n){let e=n.commands,t=e.keymap,s=j(!1),a=j(void 0),o=Ze(a.asReadonly),r=j(""),i=b([e.commands,t.layers,a.asReadonly],(d,m,u)=>d.filter(f=>e.shortcut(f)||t.isRemapped(f.id)||f.id===u)),c=b([e.commands,t.layers],d=>{let m=t.conflicts(d);return m.length?m:void 0}),p=(d,m)=>{t.remap(d.id,m),a.set(void 0);let u=t.sharing(d.id,m,e.commands.value);r.set(`${d.title}: ${Rt(m)}${u.length?`, also used by ${u.map(f=>f.title).join(" and ")}`:""}.`)},h=document.createTextNode("");return D([r.asReadonly],()=>fe(h,r.value)),y(we,{edge:!0,class:Le.help,contentClass:Le.content,"aria-label":"Help",children:[n.intro?.(),l(P,{when:c,children:d=>y("section",{class:Le.conflicts,"aria-label":"Shortcut conflicts",children:[l(H,{name:"triangle-alert",size:14}),l("div",{children:d.map(m=>y("p",{class:Le.conflict,children:[l(Ts,{input:vn(m.chord)})," is used by ",m.commands.map(u=>u.title).join(" and "),m.scope==="global"?"":` (in ${m.scope})`,": only the first that can run takes it."]}))})]})}),l(ie,{each:n.bindings,children:d=>l(Or,{title:d.title,bindings:d.bindings})}),l(Or,{title:"Everywhere",bindings:Uc()}),y("section",{class:Le.group,"aria-label":"Commands",children:[y("div",{class:Le.headingRow,children:[l("h3",{class:Le.heading,children:"Commands"}),l(Re,{size:"xs",variant:"ghost",pressed:s.asReadonly,onClick:()=>{s.set(!s.value),a.set(void 0)},children:"Change keys"})]}),l("dl",{class:Le.list,children:l(ie,{each:i,children:d=>l(Xc,{manager:e,command:d,editing:s.asReadonly,recording:o.key(d.id),onRecord:()=>a.set(d.id),onRecorded:m=>m?p(d,m):a.set(void 0),onChanged:m=>r.set(m)})},d=>d.id)}),l(P,{when:b(s.asReadonly,d=>d?!0:void 0),children:()=>y("div",{class:Le.editBar,children:[l(ca,{size:"sm","aria-label":"Give a key to a command",options:[["","Give a key to\u2026"],...e.commands.value.filter(d=>!e.shortcut(d)).map(d=>[d.id,d.title]).sort((d,m)=>d[1].localeCompare(m[1]))],value:"",onChange:d=>d&&a.set(d)}),l(Re,{size:"xs",variant:"ghost",onClick:()=>(t.resetAll(),r.set("Every key is back to its default.")),children:"Reset all"})]})}),l("span",{class:Le.srOnly,role:"status","aria-live":"polite",children:h})]})]})}function Xc(n){let{manager:e,command:t}=n,s=e.keymap,a=b(s.layers,()=>({chord:e.shortcut(t),remapped:s.isRemapped(t.id)})),o=qt();return y("div",{class:Le.row,children:[l("dt",{class:Le.action,children:t.title}),y("dd",{class:Le.input,children:[l(P,{when:b(n.recording,r=>r?!0:void 0),fallback:()=>l(P,{when:b(a,r=>r.chord),fallback:()=>l("span",{class:Le.or,children:"no key"}),children:r=>l(Ts,{input:vn(r,o)})}),children:()=>l("span",{class:Le.recorder,tabIndex:0,role:"button","aria-label":`Press the new keys for ${t.title}; Escape cancels`,ref:r=>setTimeout(()=>r.isConnected&&r.focus()),onBlur:()=>n.onRecorded(void 0),onKeyDown:r=>{if(r.preventDefault(),r.stopPropagation(),r.key==="Escape")return n.onRecorded(void 0);let i=oo(r,o);i&&n.onRecorded(i)},children:"Press keys\u2026"})}),l(P,{when:b(n.editing,r=>r?!0:void 0),children:()=>y("span",{class:Le.edit,children:[l(Re,{size:"xs",variant:"ghost",title:`Change the key of ${t.title}`,onClick:()=>n.onRecord(),children:"Change"}),l(P,{when:b(a,r=>r.chord?!0:void 0),children:()=>l(Re,{size:"xs",variant:"ghost",title:`Remove the key of ${t.title}`,onClick:()=>{s.remap(t.id,null),n.onChanged(`${t.title}: no key.`)},children:"Clear"})}),l(P,{when:b(a,r=>r.remapped?!0:void 0),children:()=>l(Re,{size:"xs",variant:"ghost",title:`Back to the default key of ${t.title}`,onClick:()=>{s.reset(t.id);let r=s.defaultShortcut(t);n.onChanged(`${t.title}: ${r?Rt(r,o):"no key"} again.`)},children:"Reset"})})]})})]})]})}function Or(n){return y("section",{class:Le.group,"aria-label":n.title,children:[l("h3",{class:Le.heading,children:n.title}),l("dl",{class:Le.list,children:n.bindings.map(e=>y("div",{class:Le.row,children:[l("dt",{class:Le.action,children:e.action}),y("dd",{class:Le.input,children:[l(Ts,{input:e.input}),e.or?y(ye,{children:[l("span",{class:Le.or,children:"or"}),l(Ts,{input:e.or})]}):null]})]}))})]})}function Ts(n){return l("span",{class:Le.keys,children:n.input.map(e=>l("kbd",{class:Le.key,children:e}))})}var Nt={empty:"msp-shell-log-view-empty",entry:"msp-shell-log-view-entry",kind:"msp-shell-log-view-kind",log:"msp-shell-log-view-log",text:"msp-shell-log-view-text",time:"msp-shell-log-view-time"};_("views/shell/log-view.module.css",`@layer msp.components {
.msp-shell-log-view-log {
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  font-size: var(--msp-font-size-sm);
  display: grid;
}

.msp-shell-log-view-empty {
  padding: var(--msp-space-4);
  color: var(--msp-color-text-muted);
}

.msp-shell-log-view-entry {
  align-items: baseline;
  gap: var(--msp-space-3);
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  grid-template-columns: auto minmax(0, 1fr) auto;
  display: grid;

  &:hover {
    background: var(--msp-color-hover);
  }

  &[data-kind="error"] .msp-shell-log-view-kind {
    color: var(--msp-color-danger);
  }

  &[data-kind="warning"] .msp-shell-log-view-kind {
    color: var(--msp-color-warning);
  }

  &[data-kind="success"] .msp-shell-log-view-kind {
    color: var(--msp-color-success);
  }
}

.msp-shell-log-view-kind {
  color: var(--msp-color-text-subtle);
  align-self: center;
}

.msp-shell-log-view-text {
  overflow-wrap: anywhere;
}

.msp-shell-log-view-time {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
  font-variant-numeric: tabular-nums;
}
}
`);var _c=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"});function Qc(n){return l("div",{class:Nt.log,role:"log","aria-live":"off","aria-label":"Log",children:l(ie,{each:n.status.history,fallback:()=>l("p",{class:Nt.empty,children:"No messages yet."}),children:e=>y("div",{class:Nt.entry,"data-kind":e.kind,children:[l(H,{name:Cs[e.kind],size:14,class:Nt.kind}),l("span",{class:Nt.text,children:e.text}),l("time",{class:Nt.time,dateTime:e.time.toISOString(),children:_c.format(e.time)})]})},e=>e.id)})}var Oe={body:"msp-settings-settings-tab-body",chevron:"msp-settings-settings-tab-chevron",group:"msp-settings-settings-tab-group",groups:"msp-settings-settings-tab-groups",groupsContent:"msp-settings-settings-tab-groupsContent",header:"msp-settings-settings-tab-header",none:"msp-settings-settings-tab-none",search:"msp-settings-settings-tab-search",searchIcon:"msp-settings-settings-tab-searchIcon",searchInput:"msp-settings-settings-tab-searchInput",tab:"msp-settings-settings-tab-tab",title:"msp-settings-settings-tab-title",toggle:"msp-settings-settings-tab-toggle"};_("views/settings/settings-tab.module.css",`@layer msp.components {
.msp-settings-settings-tab-tab {
  height: 100%;
  min-height: 0;
  font-size: var(--msp-font-size-sm);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}

.msp-settings-settings-tab-search {
  align-items: center;
  gap: var(--msp-space-2);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  flex: none;
  display: flex;
  position: relative;
}

.msp-settings-settings-tab-searchIcon {
  left: calc(var(--msp-space-2) + var(--msp-space-3));
  color: var(--msp-color-text-subtle);
  pointer-events: none;
  position: absolute;
}

.msp-settings-settings-tab-searchInput {
  min-width: 0;
  padding-left: calc(var(--msp-space-3) + var(--msp-icon-sm) + var(--msp-space-2));
  flex: 1;
}

.msp-settings-settings-tab-groups {
  flex: 1 1 0;
  min-height: 0;
}

.msp-settings-settings-tab-groupsContent {
  align-content: start;
  gap: var(--msp-space-1);
  padding: 0 var(--msp-panel-inset) var(--msp-panel-inset);
  grid-template-columns: minmax(0, 1fr);
  display: grid;
}

.msp-settings-settings-tab-group {
  border-radius: var(--msp-radius-md);

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    background: var(--msp-color-well);
  }
}

.msp-settings-settings-tab-header {
  border-radius: var(--msp-radius-md);
  align-items: center;
  display: flex;

  &:hover {
    background: var(--msp-color-hover);
  }

  &:has(.msp-settings-settings-tab-toggle[aria-expanded="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.msp-settings-settings-tab-toggle {
  align-items: center;
  gap: var(--msp-space-3);
  min-width: 0;
  height: 32px;
  padding: 0 var(--msp-space-2);
  color: var(--msp-color-text-muted);
  text-align: left;
  flex: 1;
  display: flex;

  &:hover {
    color: var(--msp-color-text);
  }
}

.msp-settings-settings-tab-title {
  color: var(--msp-color-text);
  flex: 1;
  font-weight: 600;
}

.msp-settings-settings-tab-chevron {
  color: var(--msp-color-text-subtle);
  transition: transform var(--msp-motion-fast) var(--msp-ease);

  [aria-expanded="false"] > & {
    transform: rotate(-90deg);
  }
}

.msp-settings-settings-tab-body {
  --msp-label-width: 46%;
  padding: var(--msp-space-1) var(--msp-space-3) var(--msp-space-3);

  &[data-wide-labels] {
    --msp-label-width: calc(100% - 64px);
  }
}

.msp-settings-settings-tab-none {
  padding: var(--msp-space-4) var(--msp-space-2);
  color: var(--msp-color-text-subtle);
  text-align: center;
  margin: 0;
}
}
`);function Zc(n){let{model:e}=n,t=j(""),s=t.asReadonly,a=b(s,o=>o.trim().length>0&&!e.groups.some(r=>pa(r.form.params,o)));return y("div",{class:Oe.tab,children:[y("div",{class:Oe.search,children:[l(H,{name:"search",size:14,class:Oe.searchIcon}),l(Rn,{search:!0,size:"sm",class:Oe.searchInput,"aria-label":"Search settings",placeholder:"Search settings",value:s,onInput:o=>t.set(o)})]}),y(we,{class:Oe.groups,contentClass:Oe.groupsContent,children:[e.groups.map((o,r)=>l(Jc,{group:o,query:s,open:r===0})),l(P,{when:a,children:()=>y("p",{class:Oe.none,children:["No setting matches \u201C",s,"\u201D."]})}),n.more?.()]})]})}function Jc(n){let{group:e,query:t}=n,s=j(n.open),a=b(t,i=>i.trim().length>0),o=b([s.asReadonly,a],(i,c)=>i||c),r=b(t,i=>!pa(e.form.params,i));return y("section",{class:Oe.group,hidden:r,"aria-label":e.title,children:[l("div",{class:Oe.header,children:y("button",{type:"button",class:Oe.toggle,"aria-expanded":o,onClick:()=>s.set(!s.value),children:[l("span",{class:Oe.title,children:e.title}),l(H,{name:"chevron-down",size:14,class:Oe.chevron})]})}),l(P,{when:o,reveal:!0,children:()=>l("div",{class:Oe.body,"data-wide-labels":e.wideLabels?"":void 0,children:l(ps,{form:e.form,filter:t})})})]})}var Ot={canvas:"msp-shell-canvas",canvasLayer:"msp-shell-canvasLayer",layer:"msp-shell-layer",shell:"msp-shell-shell",viewport:"msp-shell-viewport"};_("views/shell/shell.module.css",`@layer msp.components {
.msp-shell-shell {
  background: var(--msp-color-bg);
  grid-template: "left top right"
                 "left viewport right" minmax(0, 1fr)
                 "left bottom right"
                 / auto minmax(0, 1fr) auto;
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  overflow: hidden;
  container-type: size;

  &[data-mode="compact"] {
    --msp-row-height: 44px;
    --msp-control-height: 40px;
    --msp-touch-target: 44px;
    grid-template: "top"
                   "viewport" minmax(0, 1fr)
                   "bottom"
                   "right"
                   / minmax(0, 1fr);
  }
}

.msp-shell-viewport {
  grid-area: viewport;
  min-width: 0;
  min-height: 0;
  position: relative;
  overflow: hidden;
  container: canvas / inline-size;
}

.msp-shell-canvas {
  inset: 0 var(--msp-canvas-end, var(--msp-canvas-pinned, 0px)) 0 0;
  transition: opacity var(--msp-motion-reveal) var(--msp-ease);
  position: absolute;

  &[data-quiet] {
    opacity: 0;
  }
}

.msp-shell-layer {
  pointer-events: none;
  color: var(--msp-color-text);
  position: absolute;
  inset: 0;

  & > * {
    pointer-events: auto;
  }
}

.msp-shell-canvasLayer {
  right: var(--msp-canvas-pinned, 0px);
}
}
`);var Ra={muted:"msp-tooltip-muted",tooltip:"msp-tooltip-tooltip","tooltip-in":"msp-tooltip-tooltip-in"};_("components/tooltip/tooltip.module.css",`@layer msp.components {
.msp-tooltip-tooltip {
  z-index: var(--msp-z-tooltip);
  max-width: 240px;
  padding: var(--msp-space-2) var(--msp-space-3);
  border-radius: var(--msp-radius-md);
  background: var(--msp-color-text);
  color: var(--msp-color-bg);
  font-size: var(--msp-font-size-xs);
  white-space: nowrap;
  pointer-events: none;
  animation: msp-tooltip-tooltip-in var(--msp-motion-fast) var(--msp-ease);
  line-height: 1.3;
  position: fixed;
  top: 0;
  left: 0;

  &[hidden] {
    display: none;
  }
}

.msp-tooltip-tooltip[data-kind="row"] {
  max-width: 320px;
  padding: var(--msp-space-2) var(--msp-inset);
  border-radius: var(--msp-radius-lg);
  background: var(--msp-color-raised);
  color: var(--msp-color-text);
  box-shadow: 0 0 0 1px var(--msp-glass-edge),
    var(--msp-shadow-float);
  font-size: var(--msp-font-size-sm);
  white-space: normal;
  line-height: 1.4;
}

.msp-tooltip-muted {
  color: var(--msp-color-text-muted);
}

@keyframes msp-tooltip-tooltip-in {
  from {
    opacity: 0;
  }
}
}
`);var ed=350;function Br(n){let e=document.createElement("div");e.className=Ra.tooltip,e.setAttribute("role","tooltip"),e.hidden=!0,n.append(e);let t,s=!1,a,o=ze(void 0,()=>!$r(t)&&i()),r=v=>{let g=v.dataset.tipRow!==void 0;g?nd(e,v):e.textContent=v.dataset.tip??v.textContent??"",e.dataset.kind=g?"row":"",e.hidden=!1;let x=g?"beside":v.dataset.tipSide??"bottom",M=v.getBoundingClientRect(),C=e.getBoundingClientRect(),E=8,F,O,A;if(x==="beside"){let S=v.closest('[data-tip-edge], [role="tabpanel"]')?.getBoundingClientRect()??M;A=S;let N=8;F=S.left-N-C.width,F<4&&(F=S.right+N),O=M.top+(M.height-C.height)/2}else x==="left"?(F=M.left-E-C.width,O=M.top+(M.height-C.height)/2):x==="top"?(F=M.left+(M.width-C.width)/2,O=M.top-E-C.height):(F=M.left+(M.width-C.width)/2,O=M.bottom+E);if(F=Math.max(4,Math.min(F,window.innerWidth-C.width-4)),O=Math.max(4,Math.min(O,window.innerHeight-C.height-4)),A&&F<A.right&&F+C.width>A.left&&A!==M)return i();e.style.transform=`translate(${Math.round(F)}px, ${Math.round(O)}px)`,e.dataset.side=x},i=()=>{a!==void 0&&clearTimeout(a),a=void 0,o?.disconnect(),t=void 0,e.hidden=!0},c=(v,g,x)=>{if(a!==void 0&&clearTimeout(a),s=x,v.dataset.tip===void 0&&!td(v)){t=void 0,e.hidden=!0;return}t=v;let M=()=>{if(t!==v||!$r(v))return i();r(v),!e.hidden&&(o?.disconnect(),o?.observe(v))};g?M():a=setTimeout(M,ed)},p=v=>{let g=v.target,x=g?.closest?.("[data-tip], [data-tip-overflow], [data-tip-row]")??void 0;if(!x?.closest("[inert]")&&!(x?.dataset.tipRow!==void 0&&!g?.closest("[data-tip-part]")))return x},h=v=>{t&&!t.isConnected&&i();let g=p(v);!g||g===t||c(g,!e.hidden,!0)},d=v=>{let g=p(v);g&&!g.contains(v.relatedTarget)&&i()},m=v=>{let g=p(v);g?.matches(":focus-visible")&&c(g,!0,!1)},u=v=>{t&&(!t.isConnected||s&&!t.contains(v.target))&&i()},f=[G(n,"pointerover",h),G(n,"pointermove",u,{passive:!0}),G(n,"pointerout",d),G(n,"focusin",m),G(n,"focusout",i),G(n,"pointerdown",i),G(window,"keydown",i),G(window,"scroll",i,{capture:!0})];return()=>{i(),e.remove(),o?.disconnect();for(let v of f)v()}}function $r(n){return!!n&&n.isConnected&&(n.checkVisibility?.()??!0)&&!n.closest("[inert]")}function td(n){if(n.dataset.tipRow===void 0)return n.scrollWidth-n.clientWidth>1;for(let e of n.querySelectorAll("[data-tip-part]"))if(e.scrollWidth-e.clientWidth>1)return!0;return!1}function nd(n,e){n.textContent="";let t=!0;for(let s of e.querySelectorAll("[data-tip-part]")){let a=s.textContent?.trim();if(!a)continue;let o=document.createElement("span");o.textContent=a,t||(o.className=Ra.muted),t||n.append(" "),n.append(o),t=!1}}var Es={empty:"msp-shell-empty-canvas-empty","fade-in":"msp-shell-empty-canvas-fade-in","fade-out":"msp-shell-empty-canvas-fade-out",mark:"msp-shell-empty-canvas-mark",splash:"msp-shell-empty-canvas-splash"};_("views/shell/empty-canvas.module.css",`@layer msp.components {
.msp-shell-empty-canvas-empty {
  inset: 0 var(--msp-canvas-right-inset, 0) 0 0;
  pointer-events: none;
  animation: msp-shell-empty-canvas-fade-in .9s var(--msp-ease) both;
  position: absolute;

  &[data-phase="out"] {
    animation: msp-shell-empty-canvas-fade-out .25s var(--msp-ease) forwards;
  }
}

.msp-shell-empty-canvas-splash {
  inset: 0 calc(-1 * var(--msp-canvas-right-inset, 0px)) 0 0;
  animation: msp-shell-empty-canvas-fade-in 1.2s var(--msp-ease) both;
  position: absolute;
}

.msp-shell-empty-canvas-mark {
  color: var(--msp-color-text-subtle);
  position: absolute;
  top: round(down, 50% - 33px, 1px);
  left: round(down, 50% - 85.5px, 1px);
}

@keyframes msp-shell-empty-canvas-fade-in {
  from {
    opacity: 0;
  }
}

@keyframes msp-shell-empty-canvas-fade-out {
  to {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-empty-canvas-empty {
    animation: none;
  }
}
}
`);var La={splash:"msp-shell-prism-splash-splash"};_("views/shell/prism-splash.module.css",`@layer msp.components {
.msp-shell-prism-splash-splash {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
}
`);var Rs=class{constructor(){this.su=0;this.sv=0;this.drag=.6;this.confinement=0;this.#e=0;this.#n=0;this.#a=0;this.#r=0;this.#t=12;this.#o=new Float32Array(0);this.#s=new Float32Array(0);this.#i=new Float32Array(0);this.#h=new Float32Array(0);this.#u=new Float32Array(0);this.#f=new Float32Array(0);this.#T=0;this.#E=0;this.#P=0}#e;#n;#a;#r;#t;#o;#s;#i;#h;#u;#f;#T;#E;#P;get on(){return this.#a>=2&&this.#r>=2}layout(e,t,s,a){this.#e=e,this.#n=t;let o=12;s/o*(a/o)>4800&&(o=Math.sqrt(s*a/4800));let r=Math.max(0,Math.ceil(s/o)),i=Math.max(0,Math.ceil(a/o));if(r===this.#a&&i===this.#r&&o===this.#t)return;this.#a=r,this.#r=i,this.#t=o;let c=r*i;this.#o.length<c&&(this.#o=new Float32Array(c),this.#s=new Float32Array(c),this.#i=new Float32Array(c),this.#h=new Float32Array(c),this.#u=new Float32Array(c),this.#f=new Float32Array(c)),this.clear()}clear(){this.#o.fill(0),this.#s.fill(0),this.#u.fill(0)}sample(e,t){if(!this.on){this.su=0,this.sv=0;return}this.#g((e-this.#e)/this.#t-.5,(t-this.#n)/this.#t-.5),this.su=this.#v(this.#o),this.sv=this.#v(this.#s)}drive(e,t,s,a,o,r){if(!this.on)return;let i=this.#a,c=this.#t,p=o*o,h=Math.max(0,Math.floor((e-o-this.#e)/c)),d=Math.min(i-1,Math.ceil((e+o-this.#e)/c)),m=Math.max(0,Math.floor((t-o-this.#n)/c)),u=Math.min(this.#r-1,Math.ceil((t+o-this.#n)/c));for(let f=m;f<=u;f++){let v=this.#n+(f+.5)*c-t;for(let g=h;g<=d;g++){let x=this.#e+(g+.5)*c-e,M=x*x+v*v;if(M>=p)continue;let C=1-Math.sqrt(M)/o,E=r*C*C,F=f*i+g;this.#o[F]+=(s-this.#o[F])*E,this.#s[F]+=(a-this.#s[F])*E}}}swirl(e,t,s,a){if(!this.on)return;let o=this.#a,r=this.#t,i=a*a,c=Math.max(0,Math.floor((e-a-this.#e)/r)),p=Math.min(o-1,Math.ceil((e+a-this.#e)/r)),h=Math.max(0,Math.floor((t-a-this.#n)/r)),d=Math.min(this.#r-1,Math.ceil((t+a-this.#n)/r));for(let m=h;m<=d;m++){let u=this.#n+(m+.5)*r-t;for(let f=c;f<=p;f++){let v=this.#e+(f+.5)*r-e,g=v*v+u*u;if(g>=i||g<1e-6)continue;let x=Math.sqrt(g),M=x/a,C=s*6.75*M*(1-M)*(1-M)/x,E=m*o+f;this.#o[E]-=u*C,this.#s[E]+=v*C}}}step(e){this.on&&(this.#A(e),this.confinement>0&&this.#p(e),this.#d())}#A(e){let t=this.#a,s=this.#r,a=t*s,o=this.#o,r=this.#s,i=this.#i,c=this.#h;i.set(o.subarray(0,a)),c.set(r.subarray(0,a));let p=e/this.#t,h=Math.exp(-this.drag*e);for(let d=0,m=0;d<s;d++)for(let u=0;u<t;u++,m++){this.#g(u-.5*p*i[m],d-.5*p*c[m]);let f=this.#v(i),v=this.#v(c);this.#g(u-p*f,d-p*v),o[m]=this.#v(i)*h,r[m]=this.#v(c)*h}}#p(e){let t=this.#a,s=this.#r,a=this.#o,o=this.#s,r=this.#f,i=this.#i,c=2*this.#t;for(let h=0,d=0;h<s;h++)for(let m=0;m<t;m++,d++){let u=m<t-1?d+1:d,f=m>0?d-1:d,v=h<s-1?d+t:d,g=h>0?d-t:d;r[d]=(o[u]-o[f]-(a[v]-a[g]))/c,i[d]=Math.abs(r[d])}let p=this.confinement*this.#t*e;for(let h=1;h<s-1;h++)for(let d=1,m=h*t+1;d<t-1;d++,m++){let u=i[m+1]-i[m-1],f=i[m+t]-i[m-t],v=Math.sqrt(u*u+f*f)+1e-5;a[m]+=p*(f/v)*r[m],o[m]-=p*(u/v)*r[m]}}#d(){let e=this.#a,t=this.#r,s=this.#o,a=this.#s,o=this.#u,r=this.#f,i=this.#t,c=2*i;for(let p=0,h=0;p<t;p++)for(let d=0;d<e;d++,h++){let m=d<e-1?s[h+1]:s[h],u=d>0?s[h-1]:s[h],f=p<t-1?a[h+e]:a[h],v=p>0?a[h-e]:a[h];r[h]=(m-u+f-v)/c*i*i}for(let p=0;p<10;p++)for(let h=0,d=0;h<t;h++)for(let m=0;m<e;m++,d++){let u=m<e-1?o[d+1]:0,f=m>0?o[d-1]:0,v=h<t-1?o[d+e]:0,g=h>0?o[d-e]:0;o[d]=(u+f+v+g-r[d])*.25}for(let p=0,h=0;p<t;p++)for(let d=0;d<e;d++,h++){let m=d<e-1?o[h+1]:0,u=d>0?o[h-1]:0,f=p<t-1?o[h+e]:0,v=p>0?o[h-e]:0;s[h]-=(m-u)/c,a[h]-=(f-v)/c}}#g(e,t){let s=this.#a,a=this.#r;e<0?e=0:e>s-1&&(e=s-1),t<0?t=0:t>a-1&&(t=a-1);let o=e|0,r=t|0;o>s-2&&(o=s-2),r>a-2&&(r=a-2),this.#E=e-o,this.#P=t-r,this.#T=r*s+o}#v(e){let t=this.#T,s=this.#a,a=this.#E,o=this.#P;return(e[t]*(1-a)+e[t+1]*a)*(1-o)+(e[t+s]*(1-a)+e[t+s+1]*a)*o}};var it=4,sd=.8,cn=class{#e;#n=0;#a=0;#r=new Float32Array(5);constructor(){if(typeof document>"u"||typeof Path2D!="function")return;let e=(ve.width+2)*it,t=(ve.height+2)*it,s=document.createElement("canvas");s.width=e,s.height=t;let a=s.getContext("2d",{willReadFrequently:!0});if(!a)return;a.filter=`blur(${sd*it}px)`,a.setTransform(it,0,0,it,it,it),a.fillStyle="#000",a.strokeStyle="#000",a.lineWidth=ve.stroke(3),a.lineJoin="miter";for(let i of ve.paths){let c=new Path2D(i);a.fill(c),a.stroke(c)}let o=a.getImageData(0,0,e,t).data,r=new Float32Array(e*t);for(let i=0;i<r.length;i++)r[i]=o[i*4+3]/255;this.#e=r,this.#n=e,this.#a=t}get ready(){return!!this.#e}rasterize(e,t,s,a,o,r,i,c,p,h){h.fill(0,0,c*p);let d=this.#e;if(!d)return;let m=this.#r,u=e.corners,f=this.#n,v=this.#a;for(let g=0;g<e.count;g++){e.place(g,m);let x=m[0],M=m[1],C=Math.cos(m[2]),E=Math.sin(m[2]),F=m[3],O=m[4],A=u[g*6],S=u[g*6+1],N=u[g*6+2],w=u[g*6+3],T=u[g*6+4],I=u[g*6+5],$=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,W=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;for(let k=0;k<3;k++){let V=u[g*6+2*k],Q=u[g*6+2*k+1],me=(t+(x+V*C-Q*E)*a-o)/i,ue=(s+(M+V*E+Q*C)*a-r)/i;me<$&&($=me),me>Y&&(Y=me),ue<W&&(W=ue),ue>R&&(R=ue)}let U=Math.max(0,Math.floor($)),J=Math.min(c-1,Math.ceil(Y)),oe=Math.max(0,Math.floor(W)),Se=Math.min(p-1,Math.ceil(R));for(let k=oe;k<=Se;k++)for(let V=U;V<=J;V++){let Q=0;for(let ue=0;ue<2;ue++)for(let B=0;B<2;B++){let X=(o+(V+.25+.5*B)*i-t)/a-x,se=(r+(k+.25+.5*ue)*i-s)/a-M,ae=X*C+se*E,ee=-X*E+se*C,Ce=(N-A)*(ee-S)-(w-S)*(ae-A),pe=(T-N)*(ee-w)-(I-w)*(ae-N),Pe=(A-T)*(ee-I)-(S-I)*(ae-T);if(!(Ce>=0&&pe>=0&&Pe>=0||Ce<=0&&pe<=0&&Pe<=0))continue;let re=Math.round((F+ae+1)*it),ne=Math.round((O+ee+1)*it);re>=0&&ne>=0&&re<f&&ne<v&&(Q+=d[ne*f+re])}let me=k*c+V;Q/4>h[me]&&(h[me]=Q/4)}}}};var Pa=()=>performance.now(),dn=class{constructor(e={}){this.#r=Number.NEGATIVE_INFINITY;this.#t=Number.NaN;this.#o=0;this.#s=1;this.#i=!1;this.steps=0;this.#e=e.activeMs??1500,this.#n=e.restAfterMs??12e3,this.#a=e.fadeMs??400}#e;#n;#a;#r;#t;#o;#s;#i;get level(){return this.#s}get asleep(){return this.#i}input(){this.#r=Pa(),this.#i=!1}advance(e){let t=Pa(),s=Number.isNaN(this.#t)?0:Math.min(100,Math.max(0,t-this.#t));return this.#t=t,this.#o+=s,!e&&t-this.#r>=this.#e&&this.#o>=this.#n?(this.#s=Math.max(0,this.#s-s/this.#a),this.#s===0&&(this.#i=!0)):this.#s=Math.min(1,this.#s+s/this.#a),this.#s}stepped(){this.steps++}reset(){this.#t=Number.NaN,this.#i||(this.#r=Pa())}};var Ur={rate:24,speed:26,beam:260,width:10,spread:7,reach:320,alpha:.55,size:1.4,variety:.7,bob:.35,twinkle:.45,colors:!0,pulse:.55,intro:2.4,curl:.6,breathe:.3,interactive:!0,radius:90,push:520,wake:.5,swirl:.5,follow:.5,burst:36,seed:3},Ie=1536,wt=12,Ls=5,ad=30,od=22,jr=140,rd=1.6,id=260,$t=[0,1,2,3,5,6,7].map(n=>n*Math.PI/4),Aa=new Float32Array($t.length),za=220,Vr=260,Ha=360,ld=900,Ps=60,cd=.5,dd=5,md=700,qr=3,pd=150,hd=30,Wr=36,Gr=110,Kr=160,Nn=4,As=200,ud=1.6,fd=8,vd=.8,gd=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],bd=gd.map(n=>`var(${n})`);function Fa(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var zs=class{#e;#n;#a;#r;#t;#o=new Float32Array(Ie);#s=new Float32Array(Ie);#i=new Float32Array(Ie);#h=new Float32Array(Ie);#u=new Float32Array(Ie);#f=new Float32Array(Ie);#T=new Float32Array(Ie);#E=new Float32Array(Ie);#P=new Float32Array(Ie);#A=new Float32Array(Ie);#p=new Uint8Array(Ie);#d=0;#g=new Uint16Array(Ie);#v=new Uint16Array(Ie);#_=new Uint16Array(Ls*wt);#W=new Uint16Array(Ls*wt);#m=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#l=0;#O=0;#b=1;#c=0;#y=0;#G=0;#$=0;#I=0;#z=0;#x;#D=!1;#K=!0;#U=Number.NEGATIVE_INFINITY;#w;#R=0;#k=0;#M=0;#S=0;#B=!1;#j=0;#Q=0;#ee=0;#V=0;#L;#Z=0;#te=0;#H=1;#ue;#ne=0;#re;#N=new Float32Array(0);#Y=0;#ke=0;#ie=0;#Me=0;#fe=!0;#le;#oe=new Float32Array(qr*2);constructor(e,t={},s={}){if(this.#n=e,this.#a=e.getContext("2d"),this.#e={...Ur,...t},this.#t=Fa(this.#e.seed),this.#w=!!s.still,this.#x=new dn(s.pace),!this.#w){this.#le=new Rs;for(let a=0;a<this.#oe.length;a++)this.#oe[a]=this.#t()*Math.PI*2}}setOptions(e){this.#se();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=Fa(this.#e.seed),this.#d=0),this.#ce(),this.#w&&this.#C()}setOrigin(e,t){this.#c=e,this.#y=t,this.#ce(),this.#w&&this.#C()}#ce(){let e=this.#le;if(!e)return;let t=this.#e,s=Math.max(0,this.#c-Math.max(t.beam,t.reach)-Ps),a=Math.min(this.#l,this.#c+t.reach+Ps),o=Math.max(0,this.#y-t.reach-Ps),r=Math.min(this.#O,this.#y+t.reach+Ps);e.layout(s,o,Math.max(0,a-s),Math.max(0,r-o))}resize(){this.#se();let e=this.#n.clientWidth,t=this.#n.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#l&&t===this.#O&&s===this.#b||(this.#l=e,this.#O=t,this.#b=s,this.#n.width=Math.round(e*s),this.#n.height=Math.round(t*s),this.readColors(),this.#ce(),this.#w&&this.#C())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#n,t=e.style.color,s=!this.#ue;for(let a=0;a<Ls;a++){e.style.color=bd[a],this.#r??=getComputedStyle(e);let o=this.#r.color;o&&o!==this.#m[a]&&(this.#m[a]=o,s=!0)}if(e.style.color=t,this.#a&&s){let a=this.#a.createLinearGradient(0,0,ve.width-2,0);a.addColorStop(0,this.#m[1]),a.addColorStop(.35,this.#m[2]),a.addColorStop(.6,this.#m[3]),a.addColorStop(1,this.#m[4]),this.#ue=a}}setWord(e,t,s){if(this.#Z=e,this.#te=t,this.#H=s,this.#Se(),this.#L)return!0;if(this.#w||typeof Path2D!="function")return!1;let a=new yt(this.#e.seed+8);return a.onSnap=()=>{this.#ne+=this.#e.burst*.6},this.#L=a,this.#re=new cn,a.scatter(),!0}#Se(){let e=Math.ceil((ve.width*this.#H+2*As)/Nn),t=Math.ceil((ve.height*this.#H+2*As)/Nn);this.#N.length<e*t&&(this.#N=new Float32Array(e*t)),this.#Y=this.#Z-As,this.#ke=this.#te-As,this.#ie=e,this.#Me=t,this.#fe=!0}#Te(e,t){let s=(e-this.#Y)/Nn,a=(t-this.#ke)/Nn;return s<0||a<0||s>=this.#ie||a>=this.#Me?1:1-Math.min(1,this.#N[(a|0)*this.#ie+(s|0)]*ud)}shatterAt(e,t){let s=this.#L;if(!s||!this.#e.interactive||this.#w)return!1;let a=(e-this.#Z)/this.#H,o=(t-this.#te)/this.#H;if(!s.hits(a,o))return!1;this.#se(),s.shatter(a,o);let r=za*za;for(let c=0;c<this.#d;c++){let p=this.#o[c]-e,h=this.#s[c]-t,d=p*p+h*h;if(d>=r)continue;let m=Math.sqrt(d)+.001,u=1-m/za;this.#i[c]+=p/m*Vr*u,this.#h[c]+=h/m*Vr*u}let i=this.#le;if(i){let c=this.#t()*Math.PI*2,p=Math.cos(c)*Wr,h=Math.sin(c)*Wr;i.swirl(e+p,t+h,Kr,Gr),i.swirl(e-p,t-h,-Kr,Gr)}return this.#ne+=this.#e.burst,!0}pointerMove(e,t,s){if(!(!this.#e.interactive||this.#w)){if(this.#se(),this.#B&&this.#j){let a=Math.max(.008,(s-this.#j)/1e3);this.#M+=((e-this.#R)/a-this.#M)*.35,this.#S+=((t-this.#k)/a-this.#S)*.35,this.#Q=Math.min(1,this.#Q+Math.hypot(e-this.#R,t-this.#k)/id)}this.#R=e,this.#k=t,this.#j=s,this.#B=!0,this.#L?.setPointer((e-this.#Z)/this.#H,(t-this.#te)/this.#H)}}pointerLeave(){this.#B=!1,this.#L?.clearPointer(),this.#M=0,this.#S=0}pointerDown(e,t,s){!this.#e.interactive||this.#w||(this.pointerMove(e,t,s),this.#ne+=this.#e.burst)}start(){this.#D=!0,this.#x.input(),this.#w?this.#C():this.#de()}stop(){this.#D=!1,this.#z&&dt(this.#z),this.#z=0}setVisible(e){this.#K=e,e&&this.#de()}dispose(){this.stop()}get steps(){return this.#x.steps}get asleep(){return this.#x.asleep}#se(){this.#x.input(),this.#de()}#de(){this.#w||!this.#D||!this.#K||this.#z||this.#x.asleep||(this.#I=0,this.#x.reset(),this.#z=Je(this.#me))}#me=e=>{if(this.#z=0,!this.#D||!this.#K)return;let t=this.#x.advance(!!this.#L?.animating);if(this.#x.asleep){this.#ge(0);return}this.#x.stepped();let s=this.#I?Math.min(.1,(e-this.#I)/1e3):1/60;this.#I=e,e-this.#U>1500&&(this.#U=e,this.readColors()),e-this.#j>80&&(this.#M*=.85,this.#S*=.85),this.#he(s),this.#ge(t),this.#z=Je(this.#me)};#C(){if(this.#l){this.#d=0,this.#$=0,this.#t=Fa(this.#e.seed);for(let e=0;e<ad;e+=1/30)this.#he(1/30);this.#ge(1)}}#F(){if(this.#d>=Ie)return;let e=this.#e,t=this.#d++;this.#o[t]=this.#c-e.beam,this.#s[t]=this.#y+(this.#t()*2-1)*e.width;let s=this.#y-this.#s[t],a=Math.hypot(e.beam,s)||1,o=e.speed*(.8+this.#t()*.4);this.#i[t]=o*e.beam/a,this.#h[t]=o*s/a,this.#u[t]=o,this.#p[t]=0,this.#E[t]=this.#t()*Math.PI*2,this.#P[t]=.55+this.#t()*.35,this.#A[t]=.6+this.#t()*.9}#ve(e){if(this.#d>=Ie)return;let t=this.#e,s=this.#d++,a=1+Math.floor(this.#t()*4),o=this.#J(a,e*1.6),r=t.speed*(2.2+this.#t()*1.6);this.#o[s]=this.#c,this.#f[s]=this.#c,this.#s[s]=this.#y,this.#T[s]=this.#y,this.#i[s]=r*Math.cos(o),this.#h[s]=r*Math.sin(o),this.#u[s]=t.speed*(.8+this.#t()*.4),this.#p[s]=a,this.#E[s]=this.#t()*Math.PI*2,this.#P[s]=this.#pe(),this.#A[s]=.6+this.#t()*.9}#pe(){let e=this.#t();return 1+this.#e.variety*2*e*e*e}#J(e,t){let s=0;for(let r=0;r<$t.length;r++){let i=Math.max(0,Math.cos($t[r]-this.#ee));Aa[r]=1+this.#V*6*i*i*i,s+=Aa[r]}let a=this.#t()*s,o=$t[$t.length-1];for(let r=0;r<$t.length;r++)if(a-=Aa[r],a<=0){o=$t[r];break}return o+t*((e-1)/1.5-1)+(this.#t()*2-1)*t*.22}#q(e){let t=--this.#d;this.#o[e]=this.#o[t],this.#s[e]=this.#s[t],this.#i[e]=this.#i[t],this.#h[e]=this.#h[t],this.#u[e]=this.#u[t],this.#f[e]=this.#f[t],this.#T[e]=this.#T[t],this.#p[e]=this.#p[t],this.#E[e]=this.#E[t],this.#P[e]=this.#P[t],this.#A[e]=this.#A[t]}#he(e){let t=this.#e;this.#$+=e;let s=this.#$;this.#Q=Math.max(0,this.#Q-e/rd),this.#L?.step(e);let a=this.#L;a&&this.#re?.ready&&this.#ie&&(this.#fe||!a.resting)&&(this.#re.rasterize(a,this.#Z,this.#te,this.#H,this.#Y,this.#ke,Nn,this.#ie,this.#Me,this.#N),this.#fe=!1);let o=!this.#L||this.#L.whole,r=t.intro>0?Math.min(1,Math.max(0,(s/t.intro-.5)*2)):1,i=1+(fd-1)*(1-r*r*(3-2*r)),c=t.spread*Math.PI/180*(1+t.breathe*Math.sin(s*.37)),p=this.#B&&t.interactive?t.follow:0;p&&(this.#ee=Math.atan2(this.#k-this.#y,this.#R-this.#c)),this.#V+=(p-this.#V)*Math.min(1,e*1.5);let h=.5+.35*Math.sin(s*.83)+.15*Math.sin(s*2.1+1.3);for(this.#G+=e*t.rate*(1-t.pulse+t.pulse*2*h)*(1+2*this.#Q)*i;this.#G>=1;)this.#G-=1,this.#F();for(;this.#ne>=1;)this.#ne-=1,this.#ve(c);let d=this.#B&&t.interactive,m=this.#le;if(m){if(t.curl>0)for(let E=0;E<qr;E++){let F=this.#c+t.reach*.55*Math.sin(s*(.05+.03*E)+this.#oe[2*E]),O=this.#y+t.reach*.45*Math.cos(s*(.04+.025*E)+this.#oe[2*E+1]);m.swirl(F,O,(E%2?-1:1)*t.curl*hd*e,pd)}if(d&&t.wake>0&&(this.#M||this.#S)){let E=t.wake*Math.min(1,md/(Math.sqrt(this.#M*this.#M+this.#S*this.#S)||1));m.drive(this.#R,this.#k,this.#M*E,this.#S*E,t.radius*.7,Math.min(1,e*12))}m.drag=cd,m.confinement=t.swirl*dd,m.step(e)}let u=this.#L?this.#L.pull:0,f=this.#Z+(ve.width/2-1)*this.#H,v=this.#te+(ve.height/2-1)*this.#H,g=Ha*Ha,x=t.radius,M=x*x,C=Math.min(1,e/vd);for(let E=0;E<this.#d;E++){let F=this.#i[E],O=this.#h[E],A=this.#o[E],S=this.#s[E];if(d){let R=A-this.#R,U=S-this.#k,J=R*R+U*U;if(J<M){let oe=Math.sqrt(J)+.001,Se=1-oe/x,k=Se*Se;F+=R/oe*t.push*k*e,O+=U/oe*t.push*k*e}}let N=Math.sqrt(F*F+O*O)||1,w=1+(this.#u[E]/N-1)*C;if(F*=w,O*=w,u>0){let R=f-A,U=v-S,J=R*R+U*U;if(J<g){let oe=Math.sqrt(J)+.001,Se=ld*u*(1-oe/Ha)*e;F+=R/oe*Se,O+=U/oe*Se}}let T=this.#p[E]===0?i:1,I=F*T,$=O*T,Y=A+I*e,W=S+$*e;if(m?.on){let R=e/2;m.sample(A,S);let U=m.su,J=m.sv;m.sample(A+(I+U)*R,S+($+J)*R);let oe=m.su,Se=m.sv;m.sample(A+(I+oe)*R,S+($+Se)*R);let k=m.su,V=m.sv;m.sample(A+(I+k)*e,S+($+V)*e),Y+=(U+2*oe+2*k+m.su)*e/6,W+=(J+2*Se+2*V+m.sv)*e/6}if(this.#i[E]=F,this.#h[E]=O,this.#o[E]=Y,this.#s[E]=W,this.#p[E]===0)if(o&&A<this.#c&&Y>=this.#c&&Math.abs(W-this.#y)<=od){let R=1+Math.floor(this.#t()*4);this.#p[E]=R;let U=this.#J(R,c),J=Math.hypot(F,O)*Math.min(3,i);this.#i[E]=J*Math.cos(U),this.#h[E]=J*Math.sin(U),this.#f[E]=Y,this.#T[E]=W,this.#P[E]=this.#pe()}else(Y>this.#c+jr||Y<this.#c-t.beam*1.5||Math.abs(W-this.#y)>t.reach)&&(this.#q(E),E--);else{let R=Y-this.#f[E],U=W-this.#T[E];R*R+U*U>t.reach*t.reach&&(this.#q(E),E--)}}}#Ce(e){let t=this.#e,s;if(this.#p[e]===0){let a=this.#o[e],o=1-(this.#c-a)/t.beam;s=t.alpha/3*Math.min(1,Math.max(0,o*3)),a>this.#c&&(s*=Math.max(0,1-(a-this.#c)/jr))}else{let a=Math.hypot(this.#o[e]-this.#f[e],this.#s[e]-this.#T[e])/t.reach;s=t.alpha*Math.min(1,a*12)*(1-a)**1.6}return s*=this.#Te(this.#o[e],this.#s[e]),s*=1-t.twinkle+t.twinkle*(.5+.5*Math.sin(this.#$*(1.4+2.6*this.#A[e])+this.#E[e])),Math.max(0,Math.min(wt-1,Math.round(s/Math.max(t.alpha,1e-6)*(wt-1))))}#ge(e){let t=this.#a;if(!t)return;let s=this.#e,a=this.#b;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#n.width,this.#n.height),t.setTransform(a,0,0,a,0,0);let o=this.#_;o.fill(0);for(let c=0;e>0&&c<this.#d;c++){let h=(s.colors?this.#p[c]:0)*wt+this.#Ce(c);this.#v[c]=h,o[h]++}let r=0;for(let c=0;c<o.length;c++)this.#W[c]=r,r+=o[c];o.fill(0);for(let c=0;e>0&&c<this.#d;c++){let p=this.#v[c];this.#g[this.#W[p]+o[p]++]=c}let i=this.#$;for(let c=0;c<Ls;c++){t.fillStyle=this.#m[c];for(let p=1;p<wt;p++){let h=c*wt+p,d=o[h];if(!d)continue;t.globalAlpha=s.alpha*p*e/(wt-1),t.beginPath();let m=this.#W[h];for(let u=0;u<d;u++){let f=this.#g[m+u],v=this.#o[f],g=this.#s[f],x=s.size*this.#P[f];this.#p[f]!==0&&(x*=1+s.bob*Math.sin(i*(1.5+2*this.#A[f])+this.#E[f])),!(x<.2)&&(t.moveTo(v+x,g),t.arc(v,g,x,0,Math.PI*2))}t.fill()}}t.globalAlpha=1,this.#L?.draw(t,this.#Z,this.#te,this.#H,this.#ue??this.#m[1],this.#m[0],1,this.#b)}};var si={rate:3.4,k:1.1,spectrum:.4,speed:64,prism:1.2,glow:.35,ripples:.45,spawn:160,decay:1.6,alpha:.6,size:1.3,colors:!0,interactive:!0,radius:36,barrier:2,kick:1.4,seed:3},z=128,Yr=7,xe=5,Ee=z*z,Bt=.15,Xr=4,jt=14,yd=.18,Ia=1.6,xd=34,_r=.45,Qr=1.5,lt=12,wd=20,Zr=7,Jr=8,kd=.07,ei=14,Md=.8,ti=10,ni=10,Sd=.5,Cd=.25,Td=1.5,Ed=.45,Da=jt+6,Rd=.45,Ld=5,Pd=3,Ad=1.2,zd=320,Hd=1.6,kt=1500,Fd=5,Id=.3,Dd=.25,Nd=.22,Mt=10,On=5,Od=3,Hs=.5,$d=["--msp-color-text-subtle","--msp-color-brand-1","--msp-color-brand-2","--msp-color-brand-3","--msp-color-brand-4"],Bd=$d.map(n=>`var(${n})`);function Na(n){let e=n>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Oa=new Uint16Array(z);for(let n=0;n<z;n++){let e=0;for(let t=0;t<Yr;t++)e|=(n>>t&1)<<Yr-1-t;Oa[n]=e}var Vn=new Float64Array(z/2),qn=new Float64Array(z/2);for(let n=0;n<z/2;n++)Vn[n]=Math.cos(-2*Math.PI*n/z),qn[n]=Math.sin(-2*Math.PI*n/z);function jd(n,e){for(let t=0;t<Ee;t+=z)for(let s=z;s>=2;s>>=1){let a=s>>1,o=z/s;for(let r=0;r<z;r+=s)for(let i=0;i<a;i++){let c=Vn[i*o],p=qn[i*o],h=t+r+i,d=h+a,m=n[h],u=e[h],f=m-n[d],v=u-e[d];n[h]=m+n[d],e[h]=u+e[d],n[d]=f*c-v*p,e[d]=f*p+v*c}}for(let t=z;t>=2;t>>=1){let s=t>>1,a=z/t;for(let o=0;o<z;o+=t)for(let r=0;r<s;r++){let i=Vn[r*a],c=qn[r*a],p=(o+r)*z,h=p+s*z;for(let d=0;d<z;d++){let m=p+d,u=h+d,f=n[m],v=e[m],g=f-n[u],x=v-e[u];n[m]=f+n[u],e[m]=v+e[u],n[u]=g*i-x*c,e[u]=g*c+x*i}}}}function Vd(n,e){for(let t=2;t<=z;t<<=1){let s=t>>1,a=z/t;for(let o=0;o<z;o+=t)for(let r=0;r<s;r++){let i=Vn[r*a],c=-qn[r*a],p=(o+r)*z,h=p+s*z;for(let d=0;d<z;d++){let m=p+d,u=h+d,f=n[u]*i-e[u]*c,v=n[u]*c+e[u]*i;n[u]=n[m]-f,e[u]=e[m]-v,n[m]+=f,e[m]+=v}}}for(let t=0;t<Ee;t+=z)for(let s=2;s<=z;s<<=1){let a=s>>1,o=z/s;for(let r=0;r<z;r+=s)for(let i=0;i<a;i++){let c=Vn[i*o],p=-qn[i*o],h=t+r+i,d=h+a,m=n[d]*c-e[d]*p,u=n[d]*p+e[d]*c;n[d]=n[h]-m,e[d]=e[h]-u,n[h]+=m,e[h]+=u}}}function $n(n,e){let t=Math.abs(e),s=Math.abs(n),a=t>s?t:s;if(a===0)return 0;let o=(t<s?t:s)/a,r=o*o,i=((-.0464964749*r+.15931422)*r-.327622764)*r*o+o;return s>t&&(i=1.5707963267948966-i),e<0&&(i=3.141592653589793-i),n<0?-i:i}var $a=new Float64Array(Ee),Ba=new Float64Array(Ee),Bn=new Float32Array(Ee),ja=new Float32Array(Ee),jn=new Float32Array(Ee);for(let n=0;n<z;n++){let e=Oa[n],t=2*Math.PI*(e<z/2?e:e-z)/z,s=Math.max(0,jt-Math.min(n,z-1-n))/jt;for(let a=0;a<z;a++){let o=Oa[a],r=2*Math.PI*(o<z/2?o:o-z)/z,i=-(r*r+t*t)*Bt/2;$a[n*z+a]=Math.cos(i)/Ee,Ba[n*z+a]=Math.sin(i)/Ee;let c=Math.max(0,jt-Math.min(a,z-1-a))/jt,p=Math.max(c,s);Bn[n*z+a]=1-yd*p*p,ja[n*z+a]=Math.sqrt(Bn[n*z+a]);let h=Math.hypot(a+.5-z/2,n+.5-z/2)/(z/2-jt),d=Math.min(1,Math.max(0,(1-h)/Rd));jn[n*z+a]=d*d*(3-2*d)}}var mn=(()=>{let n=[];for(let e=1;e<z-1;e++)for(let t=1;t<z-1;t++)jn[e*z+t]>0&&n.push(e*z+t);return Int32Array.from(n)})(),Fs=class{#e;#n;#a;#r;#t;#o;#s=new Float64Array(Ee);#i=new Float64Array(Ee);#h=new Float32Array(Ee);#u=new Float64Array(Ee);#f=new Float64Array(Ee);#T=new Float64Array(Ee);#E=new Float64Array(Ee);#P=new Float32Array(z);#A=new Float32Array(z);#p=new Float32Array(z);#d=new Float32Array(z);#g=new Float32Array(Ee);#v=new Float32Array(Ee);#_=new Float32Array(Ee);#W=new Float32Array(mn.length);#m=Hs;#l=0;#O=!1;#b=!0;#c=0;#y=0;#G=0;#$=new Float32Array(lt);#I=new Float32Array(lt);#z=new Float32Array(lt);#x=new Float32Array(lt);#D=new Float32Array(lt);#K=new Float32Array(lt);#U=new Float32Array(lt);#w=new Uint8Array(lt);#R=0;#k=new Float32Array(kt);#M=new Float32Array(kt);#S=new Float32Array(kt);#B=0;#j=0;#Q=new Float32Array(kt);#ee=new Uint8Array(kt);#V=0;#L=new Uint16Array(kt);#Z=new Uint16Array(kt);#te=new Uint16Array(On*Mt);#H=new Uint16Array(On*Mt);#ue;#ne;#re=null;#N=["#888","#7a4f2f","#e0ae2c","#6f9a80","#3f86ad"];#Y=new Uint8Array(On*3);#ke=new Float32Array(Ee);#ie=new Float32Array(Ee);#Me=new Float32Array(Ee);#fe=!1;#le=1/60;#oe=!1;#ce;#Se=0;#Te=0;#se=1;#de=0;#me=0;#C=0;#F=0;#ve=0;#pe=0;#J=0;#q;#he=!1;#Ce=!0;#ge=Number.NEGATIVE_INFINITY;#Ie=0;#De=0;#Le=!1;#X;#be=0;#ye=0;#ae=1;#Ne=!0;#Pe;#xe=new Float32Array(Ee);#Oe=0;#Ae=0;constructor(e,t={},s={}){if(this.#n=e,this.#a=e.getContext("2d"),this.#e={...si,...t},this.#t=Na(this.#e.seed),this.#o=!!s.still,this.#q=new dn(s.pace),typeof document<"u"&&this.#a){let a=document.createElement("canvas");a.width=z,a.height=z;let o=a.getContext("2d");o&&(this.#ne=a,this.#re=o,this.#ue=o.createImageData(z,z))}}setOptions(e){this.#Ee();let t=this.#e.seed;this.#e={...this.#e,...e},this.#e.seed!==t&&(this.#t=Na(this.#e.seed),this.#s.fill(0),this.#i.fill(0),this.#V=0,this.#R=0,this.#B=0,this.#j=0,this.#l=0,this.#m=Hs,this.#O=!1),this.#b=!0,this.#o&&this.#Re()}setOrigin(e,t){this.#de=e,this.#me=t,this.#C=e-.47*z*xe,this.#F=t-.5*z*xe,this.#b=!0,this.#o&&this.#Re()}resize(){this.#Ee();let e=this.#n.clientWidth,t=this.#n.clientHeight,s=Math.min(2,globalThis.devicePixelRatio||1);e===this.#Se&&t===this.#Te&&s===this.#se||(this.#Se=e,this.#Te=t,this.#se=s,this.#n.width=Math.round(e*s),this.#n.height=Math.round(t*s),this.readColors(),this.#o&&this.#Re())}readColors(){if(typeof getComputedStyle!="function")return;let e=this.#n,t=e.style.color,s=!this.#ce;for(let a=0;a<On;a++){e.style.color=Bd[a],this.#r??=getComputedStyle(e);let o=this.#r.color;if(!o||o===this.#N[a])continue;this.#N[a]=o,s=!0;let r=/rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(o);r&&(this.#Y[a*3]=+r[1],this.#Y[a*3+1]=+r[2],this.#Y[a*3+2]=+r[3])}if(e.style.color=t,this.#oe=.299*this.#Y[0]+.587*this.#Y[1]+.114*this.#Y[2]>128,this.#a&&s){let a=this.#a.createLinearGradient(0,0,ve.width-2,0);a.addColorStop(0,this.#N[1]),a.addColorStop(.35,this.#N[2]),a.addColorStop(.6,this.#N[3]),a.addColorStop(1,this.#N[4]),this.#ce=a}}setWord(e,t,s){if(this.#be=e,this.#ye=t,this.#ae=s,this.#X)return!0;if(this.#o||typeof Path2D!="function")return!1;let a=new yt(this.#e.seed+8);return a.onSnap=()=>{this.#Ae+=3},this.#X=a,this.#Pe=new cn,a.scatter(),!0}shatterAt(e,t){let s=this.#X;if(!s||!this.#e.interactive||this.#o)return!1;let a=(e-this.#be)/this.#ae,o=(t-this.#ye)/this.#ae;return s.hits(a,o)?(this.#Ee(),s.shatter(a,o),this.#qe(e,t,this.#e.kick*1.6,90),this.#b=!0,!0):!1}pointerMove(e,t,s){!this.#e.interactive||this.#o||(this.#Ee(),this.#Ie=e,this.#De=t,this.#Le=!0,this.#b=!0,this.#X?.setPointer((e-this.#be)/this.#ae,(t-this.#ye)/this.#ae))}pointerLeave(){this.#Le=!1,this.#b=!0,this.#X?.clearPointer()}pointerDown(e,t,s){!this.#e.interactive||this.#o||(this.pointerMove(e,t,s),this.#qe(e,t,this.#e.kick,70))}start(){this.#he=!0,this.#q.input(),this.#o?this.#Re():this.#ze()}stop(){this.#he=!1,this.#J&&dt(this.#J),this.#J=0}setVisible(e){this.#Ce=e,e&&this.#ze()}dispose(){this.stop()}get steps(){return this.#q.steps}get asleep(){return this.#q.asleep}#Ee(){this.#q.input(),this.#ze()}#ze(){this.#o||!this.#he||!this.#Ce||this.#J||this.#q.asleep||(this.#pe=0,this.#q.reset(),this.#J=Je(this.#$e))}#$e=e=>{if(this.#J=0,!this.#he||!this.#Ce)return;let t=this.#q.advance(!!this.#X?.animating);if(this.#q.asleep){this.#Fe(0);return}this.#q.stepped();let s=this.#pe?Math.min(.1,(e-this.#pe)/1e3):1/60;this.#pe=e,e-this.#ge>1500&&(this.#ge=e,this.readColors()),this.#le=s,this.#Ge(s),this.#Fe(t),this.#J=Je(this.#$e)};#Re(){if(this.#Se){this.#s.fill(0),this.#i.fill(0),this.#V=0,this.#R=0,this.#B=0,this.#j=0,this.#l=0,this.#m=Hs,this.#O=!1,this.#ve=0,this.#t=Na(this.#e.seed);for(let e=0;e<6;e+=1/20)this.#Ge(1/20);this.#Fe(1)}}#Be(){let e=this.#e;return e.speed/(Math.max(.2,e.k)*xe)}#Ke(){let e=this.#e,t=this.#s,s=this.#i,a=2*ni*ni;for(let o=0;o<ti;o++){let r=(this.#me-this.#F)/xe,i=Da+(o+.3+.4*this.#t())/ti*(z-jt-Da),c=r+(this.#t()*2-1)*ei*1.4,p=(this.#t()*2-1)*Cd,h=e.k*(1+e.spectrum*(this.#t()*2-1)),d=h*Math.cos(p),m=h*Math.sin(p),u=this.#t()*Math.PI*2;for(let f=0;f<z;f++){let v=f-c;for(let g=0;g<z;g++){let x=g-i,M=Sd*Math.exp(-(x*x+v*v)/a);if(M<1e-4)continue;let C=d*x+m*v+u,E=f*z+g;t[E]+=M*Math.cos(C),s[E]+=M*Math.sin(C)}}}}#je(e,t,s,a,o,r){let i=this.#R;i>=lt||(this.#$[i]=e,this.#I[i]=t,this.#z[i]=Math.cos(s),this.#x[i]=Math.sin(s),this.#D[i]=a,this.#K[i]=o,this.#U[i]=this.#G,this.#w[i]=r?1:0,this.#R=i+1)}#Ve(){let e=this.#s,t=this.#i;for(let s=0;s<this.#R;s++){let a=(this.#G-this.#U[s])/wd;if(a>=1){let T=--this.#R;this.#$[s]=this.#$[T],this.#I[s]=this.#I[T],this.#z[s]=this.#z[T],this.#x[s]=this.#x[T],this.#D[s]=this.#D[T],this.#K[s]=this.#K[T],this.#U[s]=this.#U[T],this.#w[s]=this.#w[T],s--;continue}let o=Math.sin(Math.PI*a),r=this.#K[s]*kd*o*o*Bt*(this.#w[s]?this.#l:1),i=this.#D[s],c=this.#z[s],p=this.#x[s],h=this.#$[s],d=this.#I[s],m=Math.abs(p)<.001,u=m?Zr:(Zr+Jr)/2,f=m?Jr:u,v=i*c,g=i*p,x=Math.max(1,Math.floor(h-3*u)),M=Math.min(z-2,Math.ceil(h+3*u)),C=Math.max(1,Math.floor(d-3*f)),E=Math.min(z-2,Math.ceil(d+3*f)),F=this.#P,O=this.#A;for(let T=x;T<=M;T++){let I=T-h,$=Math.exp(-(I*I)/(2*u*u));F[T]=$*Math.cos(v*I),O[T]=$*Math.sin(v*I)}let A=this.#G-this.#U[s],S=-i*i*A/2,N=this.#p,w=this.#d;for(let T=C;T<=E;T++){let I=T-d,$=r*Math.exp(-(I*I)/(2*f*f));N[T]=$*Math.cos(g*I+S),w[T]=$*Math.sin(g*I+S)}for(let T=C;T<=E;T++){let I=N[T],$=w[T];if(Math.abs(I)+Math.abs($)<1e-7)continue;let Y=T*z;for(let W=x;W<=M;W++)e[Y+W]+=I*F[W]-$*O[W],t[Y+W]+=I*O[W]+$*F[W]}}}#qe(e,t,s,a){let o=(e-this.#C)/xe,r=(t-this.#F)/xe,i=a/xe,c=Math.max(0,Math.floor(o-i)),p=Math.min(z-1,Math.ceil(o+i)),h=Math.max(0,Math.floor(r-i)),d=Math.min(z-1,Math.ceil(r+i));for(let m=h;m<=d;m++)for(let u=c;u<=p;u++){let f=u-o,v=m-r,g=Math.sqrt(f*f+v*v);if(g>=i)continue;let x=1-g/i,M=s*g*x*x,C=m*z+u,E=Math.cos(M),F=Math.sin(M),O=this.#s[C],A=this.#i[C];this.#s[C]=O*E-A*F,this.#i[C]=O*F+A*E}}#Ue(e){let t=this.#e,s=this.#h;s.fill(0);let a=t.k*t.k/2,o=(this.#de-this.#C)/xe,r=(this.#me-this.#F)/xe;if(this.#X&&this.#Pe?.ready){this.#Pe.rasterize(this.#X,this.#be,this.#ye,this.#ae,this.#C,this.#F,xe,z,z,this.#xe);let d=t.prism*a;for(let m=0;m<Ee;m++)s[m]-=d*this.#xe[m]}else{this.#xe.fill(0);let d=xd/xe,m=t.prism*a,u=Math.ceil(d+Qr+1);for(let f=Math.max(0,Math.floor(r-u));f<=Math.min(z-1,r+u);f++)for(let v=Math.max(0,Math.floor(o-u));v<=Math.min(z-1,o+u);v++){let g=v-o,x=f-r,M=Math.sqrt(g*g+x*x),C=Math.cos(4*Math.atan2(x,g)),E=d*(1-_r+_r*C*C),F=Math.min(1,Math.max(0,(E-M)/Qr+.5));F>0&&(s[f*z+v]-=m*F*F*(3-2*F))}}if(this.#Le&&t.interactive&&t.barrier>0){let d=(this.#Ie-this.#C)/xe,m=(this.#De-this.#F)/xe,u=Math.max(1,t.radius/xe/1.5),f=2*u*u,v=3*u,g=t.barrier*a;for(let x=Math.max(0,Math.floor(m-v));x<=Math.min(z-1,m+v);x++)for(let M=Math.max(0,Math.floor(d-v));M<=Math.min(z-1,d+v);M++){let C=M-d,E=x-m;s[x*z+M]+=g*Math.exp(-(C*C+E*E)/f)}}if(e>0){let d=(this.#be+(ve.width/2-1)*this.#ae-this.#C)/xe,m=(this.#ye+(ve.height/2-1)*this.#ae-this.#F)/xe,u=zd/xe,f=Hd*a*e;for(let v=0;v<z;v++)for(let g=0;g<z;g++){let x=g-d,M=v-m,C=Math.sqrt(x*x+M*M);C<u&&(s[v*z+g]-=f*(1-C/u))}}let i=this.#u,c=this.#f,p=this.#T,h=this.#E;for(let d=0;d<Ee;d++){if(s[d]===0){i[d]=ja[d],c[d]=0,p[d]=Bn[d],h[d]=0;continue}let m=-s[d]*Bt/2,u=ja[d],f=Math.cos(m),v=Math.sin(m);i[d]=f*u,c[d]=v*u,p[d]=(f*f-v*v)*Bn[d],h[d]=2*f*v*Bn[d]}}#He(e,t){let s=this.#s,a=this.#i;for(let o=0;o<Ee;o++){let r=s[o],i=a[o];s[o]=r*e[o]-i*t[o],a[o]=r*t[o]+i*e[o]}}#Ye(e){let t=this.#s,s=this.#i;this.#Ve(),this.#G+=Bt,this.#He(this.#u,this.#f);for(let a=0;a<e;a++){jd(t,s);for(let o=0;o<Ee;o++){let r=t[o],i=s[o];t[o]=r*$a[o]-i*Ba[o],s[o]=r*Ba[o]+i*$a[o]}Vd(t,s),a===e-1?this.#He(this.#u,this.#f):(this.#He(this.#T,this.#E),this.#Ve(),this.#G+=Bt)}}#Xe(e){let t=this.#s,s=this.#i,a=this.#_,o=this.#g,r=this.#v,i=2.5*Math.max(.2,this.#e.k),c=i*i,p=0,h=0,d=this.#W,m=this.#xe;for(let u=0;u<mn.length;u++){let f=mn[u],v=t[f],g=s[f],x=v*v+g*g;a[f]=x;let M=m[f]*Ia,C=M>=1?0:x*(1-M);if(C>p&&(p=C),h+=C,d[u]=h,x<1e-9){o[f]=0,r[f]=0;continue}let E=t[f+1],F=s[f+1],O=t[f-1],A=s[f-1],S=($n(F*v-E*g,E*v+F*g)+$n(g*O-v*A,v*O+g*A))/2,N=t[f+z],w=s[f+z],T=t[f-z],I=s[f-z],$=($n(w*v-N*g,N*v+w*g)+$n(g*T-v*I,v*T+g*I))/2,Y=S*S+$*$;if(Y>c){let W=i/Math.sqrt(Y);S*=W,$*=W}o[f]=S,r[f]=$}this.#m=Math.max(Hs,this.#m+(p-this.#m)*Math.min(1,e*Ad))}#we(e,t,s){let a=(t-this.#C)/xe,o=(s-this.#F)/xe;a<0?a=0:a>z-1.001&&(a=z-1.001),o<0?o=0:o>z-1.001&&(o=z-1.001);let r=a|0,i=o|0,c=a-r,p=o-i,h=i*z+r;return(e[h]*(1-c)+e[h+1]*c)*(1-p)+(e[h+z]*(1-c)+e[h+z+1]*c)*p}#We(e,t){let s=this.#e,a=Math.sqrt(e*e+t*t);if(a<.001||Math.abs($n(t,e))<Nd)return 0;let o=s.k*(1-s.spectrum),r=(a-o)/Math.max(.001,2*s.k*s.spectrum);return 1+Math.min(3,Math.max(0,Math.floor(r*4)))}#_e(e){let t=this.#W,s=t[t.length-1];if(s<.001)return!1;let a=this.#t()*s,o=0,r=t.length-1;for(;o<r;){let h=o+r>>1;t[h]<a?o=h+1:r=h}let i=mn[o],c=i%z,p=i/z|0;return this.#k[e]=this.#C+(c+this.#t())*xe,this.#M[e]=this.#F+(p+this.#t())*xe,this.#S[e]=0,this.#Q[e]=this.#t()*Math.PI*2,this.#ee[e]=this.#We(this.#g[i],this.#v[i]),!0}#Ge(e){let t=this.#e;this.#ve+=e,this.#X?.step(e);let s=this.#X,a=s?s.pull:0;this.#l+=((s?s.assembled:1)-this.#l)*Math.min(1,e*Od);let o=!s||s.whole;(o!==this.#Ne||a>0||this.#Oe>0||s&&!s.resting)&&(this.#b=!0),this.#Ne=o,this.#Oe=a,this.#b&&(this.#Ue(a),this.#b=!1);let r=(this.#de-this.#C)/xe,i=(this.#me-this.#F)/xe;for(this.#O||(this.#O=!0,this.#Ke()),this.#y+=e*t.rate;this.#y>=1;){this.#y-=1;let g=i+(this.#t()*2-1)*ei,x=t.k*(1+t.spectrum*(this.#t()*2-1));this.#je(Da,g,0,x,Md,!0)}for(;this.#Ae>=1;){this.#Ae-=1;let g=Math.floor(this.#t()*8)*Math.PI/4,x=t.k*(1+t.spectrum*(this.#t()*2-1));this.#je(r+Math.cos(g)*4,i+Math.sin(g)*4,g,x,Ed,!1)}this.#c+=e*this.#Be();let c=0;for(;this.#c>=Bt&&c<Xr;)this.#c-=Bt,c++;c===Xr&&(this.#c=0),c&&this.#Ye(c),this.#Xe(e);let p=this.#Be()*xe,h=Fd*Math.max(.1,t.decay),d=this.#C,m=this.#F,u=this.#C+z*xe,f=this.#F+z*xe;for(let g=0;g<this.#V;g++){let x=this.#k[g],M=this.#M[g],C=this.#we(this.#g,x,M)*p,E=this.#we(this.#v,x,M)*p,F=x+C*e/2,O=M+E*e/2,A=this.#we(this.#g,F,O),S=this.#we(this.#v,F,O),N=x+A*p*e,w=M+S*p*e;this.#k[g]=N,this.#M[g]=w,this.#S[g]+=e,this.#ee[g]===0&&(this.#ee[g]=this.#We(A,S)),(this.#S[g]>h||N<d||w<m||N>=u||w>=f||jn[((w-m)/xe|0)*z+((N-d)/xe|0)|0]===0)&&(this.#Qe(g),g--)}let v=this.#W[this.#W.length-1];for(this.#l>.9&&(this.#j=this.#j?this.#j+(v-this.#j)*Math.min(1,e*Dd):v),this.#B+=e*t.spawn*(this.#j>1e-6?v/this.#j:this.#l);this.#B>=1;)this.#B-=1,!(this.#V>=kt||!this.#_e(this.#V))&&this.#V++}#Qe(e){let t=--this.#V;this.#k[e]=this.#k[t],this.#M[e]=this.#M[t],this.#S[e]=this.#S[t],this.#Q[e]=this.#Q[t],this.#ee[e]=this.#ee[t]}#Ze(){let e=this.#ue;if(!e||!this.#re)return;let t=this.#e,s=e.data,a=this.#_,o=1/this.#m,r=Math.min(1,t.glow)*(this.#oe?Pd:1)*255*Math.min(1,this.#ve/Td),i=this.#Y,c=this.#ke,p=this.#ie,h=this.#Me;if(!this.#fe){let f=t.colors?6:0,v=t.colors?9:0;c.fill((i[f]+i[v])/2),p.fill((i[f+1]+i[v+1])/2),h.fill((i[f+2]+i[v+2])/2),this.#fe=!0}let d=Math.min(1,this.#le*Ld),m=t.k*(1-t.spectrum),u=Math.max(.001,2*t.k*t.spectrum);for(let f=0;f<mn.length;f++){let v=mn[f],g=a[v]*o,x=v*4;if(g<1e-4){s[x+3]=0;continue}let M=i[0],C=i[1],E=i[2],F=1;if(t.colors){let N=this.#g[v],w=this.#v[v],T=Math.min(2.999,Math.max(0,(Math.sqrt(N*N+w*w)-m)/u*4-.5)),I=T|0,$=T-I,Y=(1+I)*3,W=(2+I)*3;M=i[Y]*(1-$)+i[W]*$,C=i[Y+1]*(1-$)+i[W+1]*$,E=i[Y+2]*(1-$)+i[W+2]*$,F=Math.min(1,g*12)}let O=d*F;c[v]+=(M-c[v])*O,p[v]+=(C-p[v])*O,h[v]+=(E-h[v])*O,s[x]=c[v],s[x+1]=p[v],s[x+2]=h[v];let A=1-t.ripples*.5*(1-this.#s[v]/Math.sqrt(a[v])),S=1-Math.min(1,this.#xe[v]*Ia);s[x+3]=Math.min(255,r*Math.min(1,Math.sqrt(g))*A*jn[v]*S)}this.#re.putImageData(e,0,0)}#Fe(e){let t=this.#a;if(!t)return;let s=this.#e,a=this.#se;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.#n.width,this.#n.height),t.setTransform(a,0,0,a,0,0),e>0&&s.glow>0&&this.#ne&&(this.#Ze(),t.imageSmoothingEnabled=!0,t.globalAlpha=e,this.#oe&&(t.globalCompositeOperation="lighter"),t.drawImage(this.#ne,this.#C,this.#F,z*xe,z*xe),t.globalCompositeOperation="source-over",t.globalAlpha=1);let o=this.#te;o.fill(0);let r=-Math.LN2/Math.max(.1,s.decay);for(let p=0;e>0&&p<this.#V;p++){let h=this.#S[p],d=this.#k[p],m=this.#M[p],u=1-Math.min(1,this.#we(this.#xe,d,m)*Ia),f=Math.min(1,h/Id)*Math.exp(h*r)*this.#we(jn,d,m)*u,v=Math.max(0,Math.min(Mt-1,Math.round(f*(Mt-1)))),x=(s.colors?this.#ee[p]:0)*Mt+v;this.#Z[p]=x,o[x]++}let i=0;for(let p=0;p<o.length;p++)this.#H[p]=i,i+=o[p];o.fill(0);for(let p=0;e>0&&p<this.#V;p++){let h=this.#Z[p];this.#L[this.#H[h]+o[h]++]=p}let c=this.#ve;for(let p=0;p<On;p++){t.fillStyle=this.#N[p];for(let h=1;h<Mt;h++){let d=p*Mt+h,m=o[d];if(!m)continue;t.globalAlpha=(p===0?.5:1)*s.alpha*h*e/(Mt-1),t.beginPath();let u=this.#H[d];for(let f=0;f<m;f++){let v=this.#L[u+f],g=s.size*(p===0?.7:1)*(1+.25*Math.sin(c*2.2+this.#Q[v])),x=this.#k[v],M=this.#M[v];t.moveTo(x+g,M),t.arc(x,M,g,0,Math.PI*2)}t.fill()}}t.globalAlpha=1,this.#X?.draw(t,this.#be,this.#ye,this.#ae,this.#ce??this.#N[1],this.#N[0],1,this.#se)}};function qd(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function ai(n){let e=l("canvas",{class:n.class?`${La.splash} ${n.class}`:La.splash,"aria-hidden":"true"}),t={still:qd()},s=n.field==="quantum"?new Fs(e,{},t):new zs(e,{},t);n.options&&he(n.options,v=>s.setOptions(v));let a=0,o=0,r=()=>{let v=e.getBoundingClientRect();a=v.left,o=v.top},i=()=>{s.resize();let v=e.getBoundingClientRect();a=v.left,o=v.top;let x=n.mark?.()?.querySelector('[data-part="star"]')?.getBoundingClientRect();x?.width?s.setOrigin(x.left+x.width/2-v.left,x.top+x.height/2-v.top):s.setOrigin(v.width/2,v.height/2);let M=c(),C=M?.getBoundingClientRect();if(M&&C?.width){let E=C.width/ve.width;s.setWord(C.left-v.left+E,C.top-v.top+E,E)&&(M.style.visibility="hidden")}},c=()=>{let v=n.mark?.();if(v)return v.matches("[role=img]")?v:v.querySelector("[role=img]")},p=ge("PrismSplash"),h=!1;ze(e,()=>{i(),h||(h=!0,p.disposed||Ae(p,f),s.start())});let d=!0,m=!0,u=()=>s.setVisible(d&&m&&document.visibilityState==="visible");Ho(e,([v])=>{d=v?.isIntersecting??!0,u()}),G(document,"visibilitychange",u),G(window,"scroll",r,{capture:!0,passive:!0}),Wt(v=>{m=v,u()});function f(){let v=n.pointer?.();if(!v)return;let g={passive:!0};G(v,"pointermove",M=>s.pointerMove(M.clientX-a,M.clientY-o,M.timeStamp),g),G(v,"pointerdown",M=>{let C=M.clientX-a,E=M.clientY-o;s.shatterAt(C,E)||s.pointerDown(C,E,M.timeStamp)},g);let x=M=>{(M.type!=="pointerup"||M.pointerType!=="mouse")&&s.pointerLeave()};G(v,"pointerleave",x,g),G(v,"pointerup",x,g),G(v,"pointercancel",x,g)}return te(()=>{let v=c();v&&(v.style.visibility=""),s.dispose()}),e}var Wd=700,Gd=2/3,Kd=250;function oi(n){let e=j("gone"),t=d=>{let m=e.value,u=d==="out"&&m!=="in"?"gone":d;u!==m&&(e.set(u),u==="in"?n.onCanvasShown?.(!1):u==="out"&&n.onCanvasShown?.(!0))},s="gone",a=Kt(()=>t(s)),o=(d,m)=>{s=m,a.start(d)},r,i=!1,c=()=>{a.cancel(),r!==void 0&&(r?i||o(Wd,"in"):(t("out"),o(Kd,"gone")))};Me(n.empty,d=>{d!==r&&(r=d,c())}),n.busy!==void 0&&Me(n.busy,d=>{i=d,c()}),n.onCanvasShown&&he(n.empty,d=>!d&&n.onCanvasShown?.(!0));let p=n.splash??!0,h=()=>{if(typeof p=="object")return"light";let d=n.field??"random";return d==="random"?Math.random()<Gd?"quantum":"light":d};return l(P,{when:b(e.asReadonly,d=>d!=="gone"),children:()=>{let d=l(ua,{scale:3,flash:"reveal",live:!p,prism:!p,class:Es.mark});return y("div",{class:Es.empty,"data-phase":e.asReadonly,children:[p?l("div",{class:Es.splash,children:l(ai,{field:h(),mark:()=>d,pointer:()=>d.closest("[data-msp-viewport]")??d.parentElement,options:p===!0?{}:p})}):null,d]})}})}var Wn={"drop-in":"msp-shell-file-drop-drop-in",hint:"msp-shell-file-drop-hint",overlay:"msp-shell-file-drop-overlay",target:"msp-shell-file-drop-target",title:"msp-shell-file-drop-title"};_("views/shell/file-drop.module.css",`@layer msp.components {
.msp-shell-file-drop-overlay {
  z-index: var(--msp-z-overlay);
  padding: var(--msp-canvas-edge);
  background: color-mix(in oklab, var(--msp-color-bg), transparent 25%);
  -webkit-backdrop-filter: var(--msp-glass-filter);
  animation: msp-shell-file-drop-drop-in var(--msp-motion-fast) var(--msp-ease);
  display: grid;
  position: absolute;
  inset: 0;

  &[hidden] {
    display: none;
  }
}

@keyframes msp-shell-file-drop-drop-in {
  from {
    opacity: 0;
  }
}

.msp-shell-file-drop-target {
  place-content: center;
  justify-items: center;
  gap: var(--msp-space-2);
  border: 1.5px dashed var(--msp-color-border-strong);
  border-radius: var(--msp-radius-lg);
  color: var(--msp-color-text-muted);
  pointer-events: none;
  display: grid;
}

.msp-shell-file-drop-title {
  color: var(--msp-color-text);
  font-size: var(--msp-font-size-md);
  font-weight: 600;
}

.msp-shell-file-drop-hint {
  color: var(--msp-color-text-subtle);
  font-size: var(--msp-font-size-xs);
}
}
`);function ri(n){let e=j(!1),t=o=>{Ud(o)&&e.set(!0)};G(n.target,"dragenter",t);let s=o=>{o.preventDefault(),o.stopPropagation(),o.dataTransfer&&(o.dataTransfer.dropEffect="copy")},a=l("div",{class:Wn.overlay,onDragEnter:s,onDragOver:s,onDragLeave:()=>e.set(!1),onDrop:o=>{s(o),e.set(!1);let r=[...o.dataTransfer?.files??[]];r.length&&n.onDrop(r)},children:y("div",{class:Wn.target,children:[l(H,{name:"folder-open",size:24}),l("span",{class:Wn.title,children:"Drop to open"}),n.formats?.length?l("span",{class:Wn.hint,children:n.formats.join(", ")}):null]})});return D([e],()=>q(a,"hidden",!e.value)),a}function Ud(n){let e=n.dataTransfer?.types;if(!e)return!1;for(let t=0;t<e.length;t++)if(e[t]==="Files")return!0;return!1}var pn={body:"msp-shell-page-body",header:"msp-shell-page-header",headerContent:"msp-shell-page-headerContent",page:"msp-shell-page-page","page-in":"msp-shell-page-page-in",title:"msp-shell-page-title"};_("views/shell/page.module.css",`@layer msp.components {
.msp-shell-page-page {
  top: var(--msp-canvas-edge);
  right: var(--msp-canvas-right-inset, var(--msp-canvas-edge));
  bottom: var(--msp-canvas-edge);
  left: var(--msp-canvas-edge);
  z-index: var(--msp-z-dialog);
  border-radius: var(--msp-radius-lg);
  --msp-color-bg: var(--msp-color-panel);
  background: var(--msp-color-bg);
  min-width: 0;
  box-shadow: var(--msp-glass-shadow);
  color: var(--msp-color-text);
  animation: msp-shell-page-page-in var(--msp-motion-base) var(--msp-ease-reveal);
  flex-direction: column;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.msp-shell-page-header {
  align-items: center;
  gap: var(--msp-space-4);
  min-width: 0;
  height: 44px;
  padding: 0 var(--msp-space-3) 0 var(--msp-space-5);
  display: flex;
}

.msp-shell-page-title {
  align-items: center;
  gap: var(--msp-space-3);
  flex: none;
  font-weight: 600;
  display: flex;
}

.msp-shell-page-headerContent {
  align-items: center;
  gap: var(--msp-space-4);
  flex: auto;
  min-width: 0;
  display: flex;
}

.msp-shell-page-body {
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
}

:where([data-mode="compact"]) .msp-shell-page-page {
  right: var(--msp-canvas-edge);
}

@keyframes msp-shell-page-page-in {
  from {
    opacity: 0;
    transform: scale(.99);
  }
}

@media (prefers-reduced-motion: reduce) {
  .msp-shell-page-page {
    animation: none;
  }
}
}
`);function ii(n){let{shell:e}=n,t=b(e.page,s=>s?.page);return l(P,{when:t,children:s=>l(Yd,{shell:e,page:s})})}function Yd(n){let{shell:e}=n,t={page:n.page,focus:e.page.value?.focus},s={shell:e,...t.focus?{focus:t.focus}:{}},a=y("section",{class:pn.page,role:"region","aria-label":t.page.title,tabIndex:-1,"data-msp-page":"",children:[y("header",{class:pn.header,children:[y("span",{class:pn.title,children:[t.page.icon?l(H,{name:t.page.icon}):null,t.page.title]}),l("div",{class:pn.headerContent,children:t.page.header?l(Qe,{renderer:t.page.header,ctx:s}):null}),l(Re,{variant:"ghost",size:"sm",icon:l(H,{name:"x"}),title:"Close (Esc)",onClick:()=>e.closePage()})]}),l("div",{class:pn.body,children:l(Qe,{renderer:t.page.render,ctx:s})})]}),o=ft(document);return G(document,"keydown",i=>{if(i.key!=="Escape"||i.defaultPrevented||!Ye(a,i))return;let c=ft(a);c&&c!==document.body&&!a.contains(c)||(e.closePage(),i.preventDefault())}),queueMicrotask(()=>{a.contains(ft(a))||a.focus({preventScroll:!0})}),te(()=>{o?.isConnected&&o.focus({preventScroll:!0})}),a}var li=44,Ke=8,Xd=34+Ke;function _d(n){let{shell:e,status:t}=n,s=e.dock("right"),a=b(e.mode,R=>R==="compact"),o=e.dock("top"),r=e.expanded,i=b(r,R=>!R),c=rt(e,s),p=b([c.floating,e.mode],(R,U)=>R&&U!=="compact"),h=rt(e,o).floating,d=b([rt(e,o).size,o.active,h,r],(R,U,J,oe)=>`${J&&U&&!oe?U.frame==="none"?R-Os+Ke:Ke+R+Ke:Ke}px`),m=b([p,e.railShown,r],(R,U,J)=>R&&!U||J?0:li),u=b([p,e.compactRail,r],(R,U,J)=>R&&U&&!J),f=b([m,u],(R,U)=>U?0:R),v=u,g=b([c.pinned,p,r],(R,U,J)=>U&&R&&!J),x=b([c.size,s.active,e.overlay,g,m],(R,U,J,oe,Se)=>oe?Se+(U||J?R:0):0),M=b([x,p,f],(R,U,J)=>R>0?R:U?J:0),C=b([c.size,s.active,e.overlay,p,g,m,r,a],(R,U,J,oe,Se,k,V,Q)=>`${Se||V?Ke:(Q?0:k)+Ke+(oe&&(U||J)?R+Ke:0)}px`),E=b([g,a,f,u,r],(R,U,J,oe,Se)=>`${R||U||Se?Ke:(oe?li:J)+Ke}px`),F=b([s.active,p,r],(R,U,J)=>U&&R&&!J?"open":void 0),O=c.sizePx,A=b(m,R=>`${R+Ke}px`),S=l("div",{class:Ot.canvas,"data-msp-canvas":"","data-msp-scope":"canvas","data-quiet":n.empty?"":void 0,children:n.canvas}),N=R=>S.toggleAttribute("data-quiet",!R),w,T,I,$=y("div",{class:Ot.shell,children:[l(P,{when:b([h,r],(R,U)=>!R&&!U),children:()=>l(zn,{shell:e,dock:o})}),l(P,{when:i,children:()=>l(zn,{shell:e,dock:e.dock("left")})}),y("main",{class:Ot.viewport,"data-msp-viewport":"",style:{"--msp-canvas-edge":`${Ke}px`,"--msp-corner-room":`${Xd}px`,"--msp-band-fade":`${Os}px`,"--msp-band-dissolve":`${ao}px`},ref:R=>w=R,children:[S,y("div",{class:`${Ot.layer} ${Ot.canvasLayer}`,"data-msp-theme":n.ink?void 0:"light",ref:R=>T=R,children:[l(P,{when:b([h,r],(R,U)=>R&&!U),children:()=>l(Ma,{shell:e,dock:o})}),n.empty?l(oi,{empty:n.empty,splash:n.splash??!0,field:n.splashField??"random",onCanvasShown:N,...n.busy?{busy:n.busy}:{}}):null,l("div",{class:L.lead,children:n.playback}),n.overlays,l(P,{when:v,children:()=>l(Nr,{shell:e})}),l("div",{class:L.bottom,"data-keeps-card":"",children:y("div",{class:L.bottomGrid,children:[l(Ea,{status:t,onOpenLog:n.onOpenLog,after:n.agent}),y("div",{class:L.corner,children:[l(Ar,{shell:e,lead:n.canvasLead,aside:n.canvasAside,...n.canvasLeadMenu?{leadMenu:n.canvasLeadMenu}:{},quiet:n.empty}),l(Dr,{status:t,lead:n.context?.()})]})]})})]}),y("div",{class:Ot.layer,ref:R=>I=R,children:[l(Ir,{shell:e}),l(ii,{shell:e}),l(P,{when:i,children:()=>l(P,{when:p,fallback:()=>l(P,{when:b(a,R=>!R),children:()=>l("div",{class:`${L.toolbarSlot} ${L.frame}`,children:l(Dn,{shell:e})})}),children:()=>{let R=pt(e.railShown,()=>l(Ma,{shell:e,dock:s,railItems:U=>l(Dn,{shell:e,part:"rest",hidden:U.hidden,railMenu:(J,oe)=>U.toggleMenu(oe,J)}),railFoot:U=>l(Dn,{shell:e,part:"lead",hidden:U.hidden,railMenu:(J,oe)=>U.toggleMenu(oe,J)})}));return D([e.railShown,e.compactRail],()=>{q(R,"data-rail-hidden",!e.railShown.value),q(R,"data-rail-overlay",e.compactRail.value)}),R}})})]})]}),l(P,{when:b([p,r],(R,U)=>!R&&!U),children:()=>l(zn,{shell:e,dock:s,stripEnd:l(P,{when:a,children:()=>l(zr,{shell:e})})})}),l(P,{when:i,children:()=>l(zn,{shell:e,dock:e.dock("bottom")})}),n.commandMenu,l(Hr,{status:t})]});D([e.mode,r],()=>{q($,"data-mode",e.mode.value),q($,"data-expanded",r.value)});let Y=[C,E,d,M,A,O,x];if(n.ink&&Y.push(n.ink),D(Y,()=>{Te(w,"--msp-canvas-right-inset",C.value),Te(w,"--msp-canvas-corner-inset",E.value),Te(w,"--msp-canvas-top-inset",d.value),Te(w,"--msp-canvas-end",`${M.value}px`),Te(w,"--msp-canvas-rail-inset",A.value),Te(w,"--msp-canvas-panel-right",A.value),Te(w,"--msp-right-panel-width",O.value),Te(w,"--msp-canvas-pinned",`${x.value}px`),Te(w,"background",n.ink?.value.color)}),n.ink){let R=n.ink;D([R],()=>{q(T,"data-msp-theme",R.value.theme),Te(T,"--msp-color-bg",R.value.color)})}return D([F,g,e.overlay],()=>{q(I,"data-right-panel",F.value),q(I,"data-pinned",g.value),q(I,"data-overlay",e.overlay.value?"open":null)}),n.onDropFiles&&$.appendChild(l(ri,{target:$,onDrop:n.onDropFiles,formats:n.dropFormats})),G(document,"keydown",R=>{if(!(R.key!=="Escape"||R.defaultPrevented||e.overlay.value||Io(st(R)))&&Ye($,R)){if(r.value){e.setExpanded(!1),R.preventDefault();return}s.state.value.pinned||!s.state.value.collapsed&&s.active.value!==void 0&&(e.toggle("right"),R.preventDefault())}}),te(Br($)),ze($,R=>e.setWidth(R[0].contentRect.width)),$}export{lo as a,Ue as b,Un as c,ge as d,Ae as e,te as f,fo as g,Wt as h,he as i,D as j,Me as k,Ve as l,ye as m,Qs as n,P as o,ie as p,G as q,Jn as r,Om as s,$m as t,ht as u,Ut as v,We as w,At as x,vt as y,Xe as z,ym as A,dr as B,_ as C,wm as D,km as E,H as F,l as G,y as H,Ni as I,Re as J,Bl as K,Ye as L,Bo as M,_e as N,da as O,la as P,Vl as Q,rc as R,fe as S,q as T,_t as U,Te as V,Bp as W,ns as X,we as Y,ca as Z,Ki as _,zt as $,Qt as aa,Ht as ba,ps as ca,Rn as da,ic as ea,lc as fa,ba as ga,cc as ha,pc as ia,El as ja,Rl as ka,Ll as la,Pl as ma,lr as na,Al as oa,zl as pa,vc as qa,Qe as ra,Gc as sa,Yc as ta,Qc as ua,Ol as va,Zc as wa,_d as xa};
