const t="stencil-docs-not-working";let n;let e;let s=false;const o=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const c="{visibility:hidden}.hydrated{visibility:inherit}";const i="slot-fb{display:contents}slot-fb[hidden]{display:none}";const f={};const r=t=>t!=null;const u=t=>{t=typeof t;return t==="object"||t==="function"};function a(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const d=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!u(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?y(null,s):s)}l=o}}};i(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const f=y(t,null);f.o=n;if(c.length>0){f.l=c}return f};const y=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const h={};const p=t=>t&&t.u===h;const v=(t,n)=>{if(t!=null&&!u(t)){if(n&1){return String(t)}return t}return t};const $=(t,n,e)=>{const s=ut.ce(n,e);t.dispatchEvent(s);return s};const m=new WeakMap;const b=(t,n,e)=>{let s=it.get(t);if(dt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}it.set(t,s)};const w=(t,n,e)=>{var s;const o=g(n);const l=it.get(o);t=t.nodeType===11?t:rt;if(l){if(typeof l==="string"){t=t.head||t;let e=m.get(t);let c;if(!e){m.set(t,e=new Set)}if(!e.has(o)){{c=rt.createElement("style");c.innerHTML=l;const n=(s=ut.p)!==null&&s!==void 0?s:a(rt);if(n!=null){c.setAttribute("nonce",n)}t.insertBefore(c,t.querySelector("link"))}if(n.i&4){c.innerHTML+=i}if(e){e.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const S=t=>{const n=t.v;const e=t.$hostElement$;const s=n.i;const l=o("attachStyles",n.$);const c=w(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}l()};const g=(t,n)=>"sc-"+t.$;const j=(t,n,e,s,o,l)=>{if(e!==s){n.toLowerCase();if(n==="class"){const n=t.classList;const o=M(e);const l=M(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}}};const k=/\s/;const M=t=>!t?[]:t.split(k);const O=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||f;const c=n.o||f;{for(s in l){if(!(s in c)){j(o,s,l[s],undefined)}}}for(s in c){j(o,s,l[s],c[s])}};const C=(t,s,o,l)=>{const c=s.l[o];let i=0;let f;let u;if(c.t!==null){f=c.h=rt.createTextNode(c.t)}else{f=c.h=rt.createElement(c.u);{O(null,c)}if(r(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(c.l){for(i=0;i<c.l.length;++i){u=C(t,c,i);if(u){f.appendChild(u)}}}}f["s-hn"]=e;return f};const P=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=C(null,s,l);if(f){o[l].h=f;i.insertBefore(f,n)}}}};const U=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const x=(t,n,e,s,o=false)=>{let l=0;let c=0;let i=n.length-1;let f=n[0];let r=n[i];let u=s.length-1;let a=s[0];let d=s[u];let y;while(l<=i&&c<=u){if(f==null){f=n[++l]}else if(r==null){r=n[--i]}else if(a==null){a=s[++c]}else if(d==null){d=s[--u]}else if(A(f,a,o)){E(f,a,o);f=n[++l];a=s[++c]}else if(A(r,d,o)){E(r,d,o);r=n[--i];d=s[--u]}else if(A(f,d,o)){E(f,d,o);t.insertBefore(f.h,r.h.nextSibling);f=n[++l];d=s[--u]}else if(A(r,a,o)){E(r,a,o);t.insertBefore(r.h,f.h);r=n[--i];a=s[++c]}else{{y=C(n&&n[c],e,c);a=s[++c]}if(y){{f.h.parentNode.insertBefore(y,f.h)}}}}if(l>i){P(t,s[u+1]==null?null:s[u+1].h,e,s,c,u)}else if(c>u){U(n,l,i)}};const A=(t,n,e=false)=>{if(t.u===n.u){return true}return false};const E=(t,n,e=false)=>{const s=n.h=t.h;const o=t.l;const l=n.l;const c=n.t;if(c===null){{{O(t,n)}}if(o!==null&&l!==null){x(s,o,n,l,e)}else if(l!==null){if(t.t!==null){s.textContent=""}P(s,null,n,l,0,l.length-1)}else if(o!==null){U(o,0,o.length-1)}}else if(t.t!==c){s.data=c}};const N=(t,s,o=false)=>{const l=t.$hostElement$;const c=t.m||y(null,null);const i=p(s)?s:d(null,null,s);e=l.tagName;if(o&&i.o){for(const t of Object.keys(i.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){i.o[t]=l[t]}}}i.u=null;i.i|=4;t.m=i;i.h=c.h=l.shadowRoot||l;{n=l["s-sc"]}E(c,i,o)};const T=(t,n)=>{if(n&&!t.S&&n["s-p"]){n["s-p"].push(new Promise((n=>t.S=n)))}};const H=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}T(t,t.j);const e=()=>L(t,n);return bt(e)};const L=(t,n)=>{const e=o("scheduleUpdate",t.v.$);const s=t.k;let l;e();return R(l,(()=>q(t,s,n)))};const R=(t,n)=>W(t)?t.then(n):n();const W=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const q=async(t,n,e)=>{var s;const l=t.$hostElement$;const c=o("update",t.v.$);const i=l["s-rc"];if(e){S(t)}const f=o("render",t.v.$);{F(t,n,l,e)}if(i){i.map((t=>t()));l["s-rc"]=undefined}f();c();{const n=(s=l["s-p"])!==null&&s!==void 0?s:[];const e=()=>I(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const F=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{N(t,n,s)}}}}catch(n){ot(n,t.$hostElement$)}return null};const I=t=>{const n=t.v.$;const e=t.$hostElement$;const s=o("postUpdate",n);const l=t.j;if(!(t.i&64)){t.i|=64;{_(e)}s();{t.M(e);if(!l){V()}}}else{s()}{if(t.S){t.S();t.S=undefined}if(t.i&512){mt((()=>H(t,false)))}t.i&=~(4|512)}};const V=n=>{{_(rt.documentElement)}mt((()=>$(ft,"appload",{detail:{namespace:t}})))};const _=t=>t.classList.add("hydrated");const z=(t,n)=>nt(t).O.get(n);const B=(t,n,e,s)=>{const o=nt(t);const l=o.O.get(n);const c=o.i;const i=o.k;e=v(e,s.C[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.O.set(n,e);if(i){if((c&(2|16))===2){H(o,false)}}}};const D=(t,n,e)=>{var s;const o=t.prototype;if(n.C){const l=Object.entries(n.C);l.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return z(this,t)},set(e){B(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,s,l){ut.jmp((()=>{var c;const i=e.get(t);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(o.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const e=nt(this);const o=e===null||e===void 0?void 0:e.i;if(o&&!(o&8)&&o&128&&l!==s){const o=e.k;const i=(c=n.P)===null||c===void 0?void 0:c[t];i===null||i===void 0?void 0:i.forEach((n=>{if(o[n]!=null){o[n].call(o,l,s,t)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=n.P)!==null&&s!==void 0?s:{}),...l.filter((([t,n])=>n[0]&15)).map((([t,n])=>{const s=n[1]||t;e.set(s,t);return s}))]))}}return t};const G=async(t,n,e,s)=>{let c;if((n.i&32)===0){n.i|=32;{c=ct(e);if(c.then){const t=l();c=await c;t()}if(!c.isProxied){D(c,e,2);c.isProxied=true}const t=o("createInstance",e.$);{n.i|=8}try{new c(n)}catch(t){ot(t)}{n.i&=~8}t()}if(c.style){let t=c.style;const n=g(e);if(!it.has(n)){const s=o("registerStyles",e.$);b(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>H(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{};const K=t=>{if((ut.i&1)===0){const n=nt(t);const e=n.v;const s=o("connectedCallback",e.$);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){T(n,n.j=e);break}}}if(e.C){Object.entries(e.C).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{G(t,n,e)}}else{if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>J()))}}s()}};const Q=t=>{};const X=async t=>{if((ut.i&1)===0){const n=nt(t);if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>Q()))}}};const Y=(t,n={})=>{var e;const s=o();const l=[];const f=n.exclude||[];const r=ft.customElements;const u=rt.head;const d=u.querySelector("meta[charset]");const y=rt.createElement("style");const h=[];let p;let v=true;Object.assign(ut,n);ut.A=new URL(n.resourcesUrl||"./",rt.baseURI).href;let $=false;t.map((t=>{t[1].map((n=>{const e={i:n[0],$:n[1],C:n[2],N:n[3]};if(e.i&4){$=true}{e.C=n[2]}const s=e.$;const o=class extends HTMLElement{constructor(t){super(t);t=this;st(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(v){h.push(this)}else{ut.jmp((()=>K(this)))}}disconnectedCallback(){ut.jmp((()=>X(this)))}componentOnReady(){return nt(this).U}};e.T=t[0];if(!f.includes(s)&&!r.get(s)){l.push(s);r.define(s,D(o,e,1))}}))}));if($){y.innerHTML+=i}{y.innerHTML+=l+c}if(y.innerHTML.length){y.setAttribute("data-styles","");const t=(e=ut.p)!==null&&e!==void 0?e:a(rt);if(t!=null){y.setAttribute("nonce",t)}u.insertBefore(y,d?d.nextSibling:u.firstChild)}v=false;if(h.length){h.map((t=>t.connectedCallback()))}else{{ut.jmp((()=>p=setTimeout(V,30)))}}s()};const Z=t=>ut.p=t;const tt=new WeakMap;const nt=t=>tt.get(t);const et=(t,n)=>tt.set(n.k=t,n);const st=(t,n)=>{const e={i:0,$hostElement$:t,v:n,O:new Map};{e.U=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return tt.set(t,e)};const ot=(t,n)=>(0,console.error)(t,n);const lt=new Map;const ct=(t,n,e)=>{const s=t.$.replace(/-/g,"_");const o=t.T;const l=lt.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{lt.set(o,t)}return t[s]}),ot)};const it=new Map;const ft=typeof window!=="undefined"?window:{};const rt=ft.document||{head:{}};const ut={i:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const at=t=>Promise.resolve(t);const dt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const yt=[];const ht=[];const pt=(t,n)=>e=>{t.push(e);if(!s){s=true;if(n&&ut.i&4){mt($t)}else{ut.raf($t)}}};const vt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){ot(t)}}t.length=0};const $t=()=>{vt(yt);{vt(ht);if(s=yt.length>0){ut.raf($t)}}};const mt=t=>at().then(t);const bt=pt(ht,true);export{h as H,Y as b,d as h,at as p,et as r,Z as s};
//# sourceMappingURL=p-b794fe06.js.map