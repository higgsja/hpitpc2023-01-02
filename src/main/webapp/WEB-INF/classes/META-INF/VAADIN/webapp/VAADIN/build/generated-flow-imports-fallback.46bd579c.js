import{c as _l,D as De,t as Ae,w as S,m as we,p as Ku,d as $e,P as Ju,F as K,E as zn,b as Zu,l as at,r as ec,a as fi,g as tc,e as Yn,f as yl,O as vl,h as rc,s as ic,i as gl,j as y,k as xo,n as bl,o as Al,q as wl,u as ft,v as Hn,x as nc,M as oc,y as _,z as ac,A as Ve,B as sc,C as p,G as Un,K as Wn,H as T,T as g,I as pe,J as Hr,L as ie,N as xl,Q as me,R as lc,S as uc,U as Cl,V as Ur,W as Wr,X as re,Y as Sl,Z as qn,_ as El,$ as jn,a0 as Gn,a1 as qr,a2 as Tl,a3 as cc,a4 as dc,a5 as hc,a6 as Il,a7 as Pl,a8 as et,a9 as Q,aa as fc,ab as de,ac as Qn,ad as pc,ae as jr,af as mc,ag as Ol,ah as _c,ai as Xn,aj as Kn,ak as Jn,al as Gr,am as kl,an as Dl,ao as $l,ap as Ml,aq as yc,ar as vc,as as gc,at as bc,au as Ac,av as wc,aw as xc,ax as Cc,ay as Sc,az as Rl,aA as Ec,aB as Fl,aC as Tc,aD as Qr,aE as Ic,aF as Pc,aG as Oc,aH as Bl,aI as Nl,aJ as kc,aK as Dc,aL as $c,aM as Mc,aN as Rc,aO as Fc,aP as ti}from"./generated-flow-imports.9bd700c4.js";import{i as m,Z as Bc}from"./indexhtml.84e0f7c9.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xr=!(window.ShadyDOM&&window.ShadyDOM.inUse);let er;function Co(r){r&&r.shimcssproperties?er=!1:er=Xr||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Ke;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Ke=window.ShadyCSS.cssBuild);const Ll=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?er=window.ShadyCSS.nativeCss:window.ShadyCSS?(Co(window.ShadyCSS),window.ShadyCSS=void 0):Co(window.WebComponents&&window.WebComponents.flags);const Zn=er;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class So{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Vl(r){return r=Nc(r),zl(Lc(r),r)}function Nc(r){return r.replace(ae.comments,"").replace(ae.port,"")}function Lc(r){let e=new So;e.start=0,e.end=r.length;let t=e;for(let i=0,n=r.length;i<n;i++)if(r[i]===Hl){t.rules||(t.rules=[]);let o=t,a=o.rules[o.rules.length-1]||null;t=new So,t.start=i+1,t.parent=o,t.previous=a,o.rules.push(t)}else r[i]===Ul&&(t.end=i+1,t=t.parent||e);return e}function zl(r,e){let t=e.substring(r.start,r.end-1);if(r.parsedCssText=r.cssText=t.trim(),r.parent){let n=r.previous?r.previous.end:r.parent.start;t=e.substring(n,r.start-1),t=Vc(t),t=t.replace(ae.multipleSpaces," "),t=t.substring(t.lastIndexOf(";")+1);let o=r.parsedSelector=r.selector=t.trim();r.atRule=o.indexOf(qc)===0,r.atRule?o.indexOf(Wc)===0?r.type=ce.MEDIA_RULE:o.match(ae.keyframesRule)&&(r.type=ce.KEYFRAMES_RULE,r.keyframesName=r.selector.split(ae.multipleSpaces).pop()):o.indexOf(Wl)===0?r.type=ce.MIXIN_RULE:r.type=ce.STYLE_RULE}let i=r.rules;if(i)for(let n=0,o=i.length,a;n<o&&(a=i[n]);n++)zl(a,e);return r}function Vc(r){return r.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function Yl(r,e,t=""){let i="";if(r.cssText||r.rules){let n=r.rules;if(n&&!zc(n))for(let o=0,a=n.length,s;o<a&&(s=n[o]);o++)i=Yl(s,e,i);else i=e?r.cssText:Yc(r.cssText),i=i.trim(),i&&(i="  "+i+`
`)}return i&&(r.selector&&(t+=r.selector+" "+Hl+`
`),t+=i,r.selector&&(t+=Ul+`

`)),t}function zc(r){let e=r[0];return Boolean(e)&&Boolean(e.selector)&&e.selector.indexOf(Wl)===0}function Yc(r){return r=Hc(r),Uc(r)}function Hc(r){return r.replace(ae.customProp,"").replace(ae.mixinProp,"")}function Uc(r){return r.replace(ae.mixinApply,"").replace(ae.varApply,"")}const ce={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Hl="{",Ul="}",ae={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Wl="--",Wc="@media",qc="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pi=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,tr=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,jc=/@media\s(.*)/;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eo=new Set,Gc="shady-unscoped";function Qc(r){const e=r.textContent;if(!Eo.has(e)){Eo.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function Xc(r){return r.hasAttribute(Gc)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function mi(r,e){return r?(typeof r=="string"&&(r=Vl(r)),e&&qe(r,e),Yl(r,Zn)):""}function To(r){return!r.__cssRules&&r.textContent&&(r.__cssRules=Vl(r.textContent)),r.__cssRules||null}function qe(r,e,t,i){if(!r)return;let n=!1,o=r.type;if(i&&o===ce.MEDIA_RULE){let s=r.selector.match(jc);s&&(window.matchMedia(s[1]).matches||(n=!0))}o===ce.STYLE_RULE?e(r):t&&o===ce.KEYFRAMES_RULE?t(r):o===ce.MIXIN_RULE&&(n=!0);let a=r.rules;if(a&&!n)for(let s=0,l=a.length,u;s<l&&(u=a[s]);s++)qe(u,e,t,i)}function Kc(r,e){let t=0;for(let i=e,n=r.length;i<n;i++)if(r[i]==="(")t++;else if(r[i]===")"&&--t===0)return i;return-1}function ql(r,e){let t=r.indexOf("var(");if(t===-1)return e(r,"","","");let i=Kc(r,t+3),n=r.substring(t+4,i),o=r.substring(0,t),a=ql(r.substring(i+1),e),s=n.indexOf(",");if(s===-1)return e(o,n.trim(),"",a);let l=n.substring(0,s).trim(),u=n.substring(s+1).trim();return e(o,l,u,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function Jc(r){let e=r.localName,t="",i="";return e?e.indexOf("-")>-1?t=e:(i=e,t=r.getAttribute&&r.getAttribute("is")||""):(t=r.is,i=r.extends),{is:t,typeExtension:i}}function Zc(r){const e=[],t=r.querySelectorAll("style");for(let i=0;i<t.length;i++){const n=t[i];Xc(n)?Xr||(Qc(n),n.parentNode.removeChild(n)):(e.push(n.textContent),n.parentNode.removeChild(n))}return e.join("").trim()}const jl="css-build";function ed(r){if(Ke!==void 0)return Ke;if(r.__cssBuild===void 0){const e=r.getAttribute(jl);if(e)r.__cssBuild=e;else{const t=td(r);t!==""&&rd(r),r.__cssBuild=t}}return r.__cssBuild||""}function Io(r){return ed(r)!==""}function td(r){const e=r.localName==="template"?r.content.firstChild:r.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===jl)return t[1]}return""}function rd(r){const e=r.localName==="template"?r.content.firstChild:r.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _i(r,e){for(let t in e)t===null?r.style.removeProperty(t):r.style.setProperty(t,e[t])}function Gl(r,e){const t=window.getComputedStyle(r).getPropertyValue(e);return t?t.trim():""}function id(r){const e=tr.test(r)||pi.test(r);return tr.lastIndex=0,pi.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nd=/;\s*/m,od=/^\s*(initial)|(inherit)\s*$/,Po=/\s*!important/,yi="_-_";class ad{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let rr=null;class z{constructor(){this._currentElement=null,this._measureElement=null,this._map=new ad}detectMixin(e){return id(e)}gatherStyles(e){const t=Zc(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=To(e);return this.transformRules(i,t),e.textContent=mi(i),i}transformCustomStyle(e){let t=To(e);return qe(t,i=>{i.selector===":root"&&(i.selector="html"),this.transformRule(i)}),e.textContent=mi(t),t}transformRules(e,t){this._currentElement=t,qe(e,i=>{this.transformRule(i)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(pi,(i,n,o,a)=>this._produceCssProperties(i,n,o,a,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return qe(t,o=>{n=n||o===e,!n&&o.selector===e.selector&&Object.assign(i,this._cssTextToMap(o.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=tr.exec(e);){let n=i[0],o=i[1],a=i.index,s=a+n.indexOf("@apply"),l=a+n.length,u=e.slice(0,s),c=e.slice(l),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(u));let h=this._atApplyToCssProperties(o,d);e=`${u}${h}${c}`,tr.lastIndex=a+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(nd,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let o,a,s;const l=n.properties;for(o in l)s=t&&t[o],a=[o,": var(",e,yi,o],s&&a.push(",",s.replace(Po,"")),a.push(")"),Po.test(l[o])&&a.push(" !important"),i.push(a.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=od.exec(t);return i&&(i[1]?t=this._getInitialValueForProperty(e):t="apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i=e.split(";"),n,o,a={};for(let s=0,l,u;s<i.length;s++)l=i[s],l&&(u=l.split(":"),u.length>1&&(n=u[0].trim(),o=u.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(n,o)),a[n]=o));return a}_invalidateMixinEntry(e){if(!!rr)for(let t in e.dependants)t!==this._currentElement&&rr(t)}_produceCssProperties(e,t,i,n,o){if(i&&ql(i,(w,I)=>{I&&this._map.get(I)&&(n=`@apply ${I};`)}),!n)return e;let a=this._consumeCssProperties(""+n,o),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),u=l,c=this._map.get(t),d=c&&c.properties;d?u=Object.assign(Object.create(d),l):this._map.set(t,u);let h=[],f,v,A=!1;for(f in u)v=l[f],v===void 0&&(v="initial"),d&&!(f in d)&&(A=!0),h.push(`${t}${yi}${f}: ${v}`);return A&&this._invalidateMixinEntry(c),c&&(c.properties=u),i&&(s=`${e};${s}`),`${s}${h.join("; ")};`}}z.prototype.detectMixin=z.prototype.detectMixin;z.prototype.transformStyle=z.prototype.transformStyle;z.prototype.transformCustomStyle=z.prototype.transformCustomStyle;z.prototype.transformRules=z.prototype.transformRules;z.prototype.transformRule=z.prototype.transformRule;z.prototype.transformTemplate=z.prototype.transformTemplate;z.prototype._separator=yi;Object.defineProperty(z.prototype,"invalidCallback",{get(){return rr},set(r){rr=r}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const vi={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ir="_applyShimCurrentVersion",Pe="_applyShimNextVersion",nr="_applyShimValidatingVersion",sd=Promise.resolve();function ld(r){let e=vi[r];e&&ud(e)}function ud(r){r[ir]=r[ir]||0,r[nr]=r[nr]||0,r[Pe]=(r[Pe]||0)+1}function Ql(r){return r[ir]===r[Pe]}function cd(r){return!Ql(r)&&r[nr]===r[Pe]}function dd(r){r[nr]=r[Pe],r._validating||(r._validating=!0,sd.then(function(){r[ir]=r[Pe],r._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ri=null,Oo=window.HTMLImports&&window.HTMLImports.whenReady||null,ii;function ko(r){requestAnimationFrame(function(){Oo?Oo(r):(ri||(ri=new Promise(e=>{ii=e}),document.readyState==="complete"?ii():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&ii()})),ri.then(function(){r&&r()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Do="__seenByShadyCSS",st="__shadyCSSCachedStyle";let or=null,je=null;class fe{constructor(){this.customStyles=[],this.enqueued=!1,ko(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!je||(this.enqueued=!0,ko(je))}addCustomStyle(e){e[Do]||(e[Do]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[st])return e[st];let t;return e.getStyle?t=e.getStyle():t=e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[st])continue;const n=this.getStyleForCustomStyle(i);if(n){const o=n.__appliedElement||n;or&&or(o),i[st]=o}}return e}}fe.prototype.addCustomStyle=fe.prototype.addCustomStyle;fe.prototype.getStyleForCustomStyle=fe.prototype.getStyleForCustomStyle;fe.prototype.processStyles=fe.prototype.processStyles;Object.defineProperties(fe.prototype,{transformCallback:{get(){return or},set(r){or=r}},validateCallback:{get(){return je},set(r){let e=!1;je||(e=!0),je=r,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const We=new z;class hd{constructor(){this.customStyleInterface=null,We.invalidCallback=ld}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{We.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Io(e))return;vi[t]=e;let i=We.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(!!this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&We.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&_i(e,t),e.shadowRoot){this.styleElement(e);let i=e.shadowRoot.children||e.shadowRoot.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}else{let i=e.children||e.childNodes;for(let n=0;n<i.length;n++)this.styleSubtree(i[n])}}styleElement(e){this.ensure();let{is:t}=Jc(e),i=vi[t];if(!(i&&Io(i))&&i&&!Ql(i)){cd(i)||(this.prepareTemplate(i,t),dd(i));let n=e.shadowRoot;if(n){let o=n.querySelector("style");o&&(o.__cssRules=i._styleAst,o.textContent=mi(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const r=new hd;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){r.flushCustomStyles(),r.prepareTemplate(t,i)},prepareTemplateStyles(t,i,n){window.ShadyCSS.prepareTemplate(t,i,n)},prepareTemplateDom(t,i){},styleSubtree(t,i){r.flushCustomStyles(),r.styleSubtree(t,i)},styleElement(t){r.flushCustomStyles(),r.styleElement(t)},styleDocument(t){r.flushCustomStyles(),r.styleDocument(t)},getComputedStyleValue(t,i){return Gl(t,i)},flushCustomStyles(){r.flushCustomStyles()},nativeCss:Zn,nativeShadow:Xr,cssBuild:Ke,disableRuntime:Ll},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=We;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let eo=typeof document.head.style.touchAction=="string",ar="__polymerGestures",pt="__polymerGesturesHandled",gi="__polymerGesturesTouchAction",$o=25,Mo=5,fd=2,pd=2500,Xl=["mousedown","mousemove","mouseup","click"],md=[0,1,4,2],_d=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function to(r){return Xl.indexOf(r)>-1}let ro=!1;(function(){try{let r=Object.defineProperty({},"passive",{get(){ro=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function Kl(r){if(!(to(r)||r==="touchend")&&eo&&ro&&Ku)return{passive:!0}}let Jl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const bi=[],yd={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},vd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function gd(r){return yd[r.localName]||!1}function bd(r){let e=Array.prototype.slice.call(r.labels||[]);if(!e.length){e=[];try{let t=r.getRootNode();if(r.id){let i=t.querySelectorAll(`label[for = '${r.id}']`);for(let n=0;n<i.length;n++)e.push(i[n])}}catch{}}return e}let Ro=function(r){let e=r.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(r[pt]={skip:!0},r.type==="click")){let t=!1,i=Kr(r);for(let n=0;n<i.length;n++){if(i[n].nodeType===Node.ELEMENT_NODE){if(i[n].localName==="label")bi.push(i[n]);else if(gd(i[n])){let o=bd(i[n]);for(let a=0;a<o.length;a++)t=t||bi.indexOf(o[a])>-1}}if(i[n]===N.mouse.target)return}if(t)return;r.preventDefault(),r.stopPropagation()}};function Fo(r){let e=Jl?["click"]:Xl;for(let t=0,i;t<e.length;t++)i=e[t],r?(bi.length=0,document.addEventListener(i,Ro,!0)):document.removeEventListener(i,Ro,!0)}function Ad(r){if(!_l)return;N.mouse.mouseIgnoreJob||Fo(!0);let e=function(){Fo(),N.mouse.target=null,N.mouse.mouseIgnoreJob=null};N.mouse.target=Kr(r)[0],N.mouse.mouseIgnoreJob=De.debounce(N.mouse.mouseIgnoreJob,Ae.after(pd),e)}function xe(r){let e=r.type;if(!to(e))return!1;if(e==="mousemove"){let t=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!_d&&(t=md[r.which]||0),Boolean(t&1)}else return(r.button===void 0?0:r.button)===0}function wd(r){if(r.type==="click"){if(r.detail===0)return!0;let e=he(r);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let t=e.getBoundingClientRect(),i=r.pageX,n=r.pageY;return!(i>=t.left&&i<=t.right&&n>=t.top&&n<=t.bottom)}return!1}let N={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function xd(r){let e="auto",t=Kr(r);for(let i=0,n;i<t.length;i++)if(n=t[i],n[gi]){e=n[gi];break}return e}function Zl(r,e,t){r.movefn=e,r.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function Ie(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}_l&&document.addEventListener("touchend",Ad,ro?{passive:!0}:!1);const Kr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],tt={},be=[];function Cd(r,e){let t=document.elementFromPoint(r,e),i=t;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let n=i;if(i=i.shadowRoot.elementFromPoint(r,e),n===i)break;i&&(t=i)}return t}function he(r){const e=Kr(r);return e.length>0?e[0]:r.target}function eu(r){let e,t=r.type,n=r.currentTarget[ar];if(!n)return;let o=n[t];if(!!o){if(!r[pt]&&(r[pt]={},t.slice(0,5)==="touch")){r=r;let a=r.changedTouches[0];if(t==="touchstart"&&r.touches.length===1&&(N.touch.id=a.identifier),N.touch.id!==a.identifier)return;eo||(t==="touchstart"||t==="touchmove")&&Sd(r)}if(e=r[pt],!e.skip){for(let a=0,s;a<be.length;a++)s=be[a],o[s.name]&&!e[s.name]&&s.flow&&s.flow.start.indexOf(r.type)>-1&&s.reset&&s.reset();for(let a=0,s;a<be.length;a++)s=be[a],o[s.name]&&!e[s.name]&&(e[s.name]=!0,s[t](r))}}}function Sd(r){let e=r.changedTouches[0],t=r.type;if(t==="touchstart")N.touch.x=e.clientX,N.touch.y=e.clientY,N.touch.scrollDecided=!1;else if(t==="touchmove"){if(N.touch.scrollDecided)return;N.touch.scrollDecided=!0;let i=xd(r),n=!1,o=Math.abs(N.touch.x-e.clientX),a=Math.abs(N.touch.y-e.clientY);r.cancelable&&(i==="none"?n=!0:i==="pan-x"?n=a>o:i==="pan-y"&&(n=o>a)),n?r.preventDefault():sr("track")}}function Ed(r,e,t){return tt[e]?(Id(r,e,t),!0):!1}function Td(r,e,t){return tt[e]?(Pd(r,e,t),!0):!1}function Id(r,e,t){let i=tt[e],n=i.deps,o=i.name,a=r[ar];a||(r[ar]=a={});for(let s=0,l,u;s<n.length;s++)l=n[s],!(Jl&&to(l)&&l!=="click")&&(u=a[l],u||(a[l]=u={_count:0}),u._count===0&&r.addEventListener(l,eu,Kl(l)),u[o]=(u[o]||0)+1,u._count=(u._count||0)+1);r.addEventListener(e,t),i.touchAction&&tu(r,i.touchAction)}function Pd(r,e,t){let i=tt[e],n=i.deps,o=i.name,a=r[ar];if(a)for(let s=0,l,u;s<n.length;s++)l=n[s],u=a[l],u&&u[o]&&(u[o]=(u[o]||1)-1,u._count=(u._count||1)-1,u._count===0&&r.removeEventListener(l,eu,Kl(l)));r.removeEventListener(e,t)}function io(r){be.push(r);for(let e=0;e<r.emits.length;e++)tt[r.emits[e]]=r}function Od(r){for(let e=0,t;e<be.length;e++){t=be[e];for(let i=0,n;i<t.emits.length;i++)if(n=t.emits[i],n===r)return t}return null}function tu(r,e){eo&&r instanceof HTMLElement&&we.run(()=>{r.style.touchAction=e}),r[gi]=e}function no(r,e,t){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=t,S(r).dispatchEvent(i),i.defaultPrevented){let n=t.preventer||t.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function sr(r){let e=Od(r);e.info&&(e.info.prevent=!0)}io({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ie(this.info)},mousedown:function(r){if(!xe(r))return;let e=he(r),t=this,i=function(a){xe(a)||(ze("up",e,a),Ie(t.info))},n=function(a){xe(a)&&ze("up",e,a),Ie(t.info)};Zl(this.info,i,n),ze("down",e,r)},touchstart:function(r){ze("down",he(r),r.changedTouches[0],r)},touchend:function(r){ze("up",he(r),r.changedTouches[0],r)}});function ze(r,e,t,i){!e||no(e,r,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i,prevent:function(n){return sr(n)}})}io({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(r){this.moves.length>fd&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ie(this.info)},mousedown:function(r){if(!xe(r))return;let e=he(r),t=this,i=function(a){let s=a.clientX,l=a.clientY;Bo(t.info,s,l)&&(t.info.state=t.info.started?a.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&sr("tap"),t.info.addMove({x:s,y:l}),xe(a)||(t.info.state="end",Ie(t.info)),e&&ni(t.info,e,a),t.info.started=!0)},n=function(a){t.info.started&&i(a),Ie(t.info)};Zl(this.info,i,n),this.info.x=r.clientX,this.info.y=r.clientY},touchstart:function(r){let e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(r){let e=he(r),t=r.changedTouches[0],i=t.clientX,n=t.clientY;Bo(this.info,i,n)&&(this.info.state==="start"&&sr("tap"),this.info.addMove({x:i,y:n}),ni(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(r){let e=he(r),t=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),ni(this.info,e,t))}});function Bo(r,e,t){if(r.prevent)return!1;if(r.started)return!0;let i=Math.abs(r.x-e),n=Math.abs(r.y-t);return i>=Mo||n>=Mo}function ni(r,e,t){if(!e)return;let i=r.moves[r.moves.length-2],n=r.moves[r.moves.length-1],o=n.x-r.x,a=n.y-r.y,s,l=0;i&&(s=n.x-i.x,l=n.y-i.y),no(e,"track",{state:r.state,x:t.clientX,y:t.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:t,hover:function(){return Cd(t.clientX,t.clientY)}})}io({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(r){xe(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click:function(r){xe(r)&&No(this.info,r)},touchstart:function(r){const e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(r){No(this.info,r.changedTouches[0],r)}});function No(r,e,t){let i=Math.abs(e.clientX-r.x),n=Math.abs(e.clientY-r.y),o=he(t||e);!o||vd[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=$o&&n<=$o||wd(e))&&(r.prevent||no(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ru=$e(r=>{class e extends r{_addEventListenerToNode(i,n,o){Ed(i,n,o)||super._addEventListenerToNode(i,n,o)}_removeEventListenerFromNode(i,n,o){Td(i,n,o)||super._removeEventListenerFromNode(i,n,o)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const kd=/:host\(:dir\((ltr|rtl)\)\)/g,Dd=':host([dir="$1"])',$d=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Md=':host([dir="$2"]) $1',Rd=/:dir\((?:ltr|rtl)\)/,Lo=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Ge=[];let Qe=null,oo="";function iu(){oo=document.documentElement.getAttribute("dir")}function nu(r){r.__autoDirOptOut||r.setAttribute("dir",oo)}function ou(){iu(),oo=document.documentElement.getAttribute("dir");for(let r=0;r<Ge.length;r++)nu(Ge[r])}function Fd(){Qe&&Qe.takeRecords().length&&ou()}const Bd=$e(r=>{Lo||Qe||(iu(),Qe=new MutationObserver(ou),Qe.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Ju(r);class t extends e{static _processStyleText(n,o){return n=e._processStyleText.call(this,n,o),!Lo&&Rd.test(n)&&(n=this._replaceDirInCssText(n),this.__activateDir=!0),n}static _replaceDirInCssText(n){let o=n;return o=o.replace(kd,Dd),o=o.replace($d,Md),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Fd(),Ge.push(this),nu(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const n=Ge.indexOf(this);n>-1&&Ge.splice(n,1)}}}return t.__activateDir=!1,t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Vo(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Vo():window.addEventListener("DOMContentLoaded",Vo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Se=Element.prototype,Nd=Se.matches||Se.matchesSelector||Se.mozMatchesSelector||Se.msMatchesSelector||Se.oMatchesSelector||Se.webkitMatchesSelector,au=function(r,e){return Nd.call(r,e)};class C{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new K(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(S(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=S(t).parentNode||S(t).host;return t===this.node}getOwnerRoot(){return S(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?S(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=S(this.node).assignedSlot;for(;t;)e.push(t),t=S(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return S(i).importNode(e,t)}getEffectiveChildNodes(){return K.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n=0,o=t.length,a;n<o&&(a=t[n]);n++)a.nodeType===Node.ELEMENT_NODE&&au(a,e)&&i.push(a);return i}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function Ld(r,e){for(let t=0;t<e.length;t++){let i=e[t];r[i]=function(){return this.node[i].apply(this.node,arguments)}}}function zo(r,e){for(let t=0;t<e.length;t++){let i=e[t];Object.defineProperty(r,i,{get:function(){return this.node[i]},configurable:!0})}}function Vd(r,e){for(let t=0;t<e.length;t++){let i=e[t];Object.defineProperty(r,i,{get:function(){return this.node[i]},set:function(n){this.node[i]=n},configurable:!0})}}class Ai{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}C.prototype.cloneNode;C.prototype.appendChild;C.prototype.insertBefore;C.prototype.removeChild;C.prototype.replaceChild;C.prototype.setAttribute;C.prototype.removeAttribute;C.prototype.querySelector;C.prototype.querySelectorAll;C.prototype.parentNode;C.prototype.firstChild;C.prototype.lastChild;C.prototype.nextSibling;C.prototype.previousSibling;C.prototype.firstElementChild;C.prototype.lastElementChild;C.prototype.nextElementSibling;C.prototype.previousElementSibling;C.prototype.childNodes;C.prototype.children;C.prototype.classList;C.prototype.textContent;C.prototype.innerHTML;let wi=C;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class r extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(C.prototype).forEach(e=>{e!="activeElement"&&(r.prototype[e]=C.prototype[e])}),zo(r.prototype,["classList"]),wi=r,Object.defineProperties(Ai.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&V(e).getOwnerRoot(),i=this.path;for(let n=0;n<i.length;n++){const o=i[n];if(V(o).getOwnerRoot()===t)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Ld(C.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),zo(C.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Vd(C.prototype,["textContent","innerHTML","className"]);const V=function(r){if(r=r||document,r instanceof wi||r instanceof Ai)return r;let e=r.__domApi;return e||(r instanceof Event?e=new Ai(r):e=new wi(r),r.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oi=window.ShadyDOM,Yo=window.ShadyCSS;function Ho(r,e){return S(r).getRootNode()===e}function zd(r,e=!1){if(!oi||!Yo||!oi.handlesDynamicScoping)return null;const t=Yo.ScopingShim;if(!t)return null;const i=t.scopeForNode(r),n=S(r).getRootNode(),o=a=>{if(!Ho(a,n))return;const s=Array.from(oi.nativeMethods.querySelectorAll.call(a,"*"));s.push(a);for(let l=0;l<s.length;l++){const u=s[l];if(!Ho(u,n))continue;const c=t.currentScopeForNode(u);c!==i&&(c!==""&&t.unscopeNode(u,c),t.scopeNode(u,i))}};if(o(r),e){const a=new MutationObserver(s=>{for(let l=0;l<s.length;l++){const u=s[l];for(let c=0;c<u.addedNodes.length;c++){const d=u.addedNodes[c];d.nodeType===Node.ELEMENT_NODE&&o(d)}}});return a.observe(r,{childList:!0,subtree:!0}),a}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ai="disable-upgrade",su=r=>{for(;r;){const e=Object.getOwnPropertyDescriptor(r,"observedAttributes");if(e)return e.get;r=Object.getPrototypeOf(r.prototype).constructor}return()=>[]},Yd=$e(r=>{const e=zn(r);let t=su(e);class i extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return t.call(this).concat(ai)}_initializeProperties(){this.hasAttribute(ai)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}attributeChangedCallback(o,a,s,l){o==ai?this.__isUpgradeDisabled&&s==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,S(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(o,a,s,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lt="disable-upgrade";let Hd=window.ShadyCSS;const lu=$e(r=>{const e=ru(zn(r)),t=Zu?e:Bd(e),i=su(t),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(s,l,u){(this.__dataAttributes&&this.__dataAttributes[s]||s===lt)&&this.attributeChangedCallback(s,l,u,null)}setAttribute(s,l){if(at&&!this._legacyForceObservedAttributes){const u=this.getAttribute(s);super.setAttribute(s,l),this.__attributeReaction(s,u,String(l))}else super.setAttribute(s,l)}removeAttribute(s){if(at&&!this._legacyForceObservedAttributes){const l=this.getAttribute(s);super.removeAttribute(s),this.__attributeReaction(s,l,null)}else super.removeAttribute(s)}static get observedAttributes(){return at&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],ec(this.prototype)),this.__observedAttributes):i.call(this).concat(lt)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(s,l,u,c){l!==u&&(s==lt?this.__isUpgradeDisabled&&u==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,S(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(s,l,u,c),this.attributeChanged(s,l,u)))}attributeChanged(s,l,u){}_initializeProperties(){if(fi&&this.hasAttribute(lt))this.__isUpgradeDisabled=!0;else{let s=Object.getPrototypeOf(this);s.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",s))||(this._registered(),s.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),at&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const s=this.attributes;for(let l=0,u=s.length;l<u;l++){const c=s[l];this.__attributeReaction(c.name,null,c.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(s){return this._serializeValue(s)}deserialize(s,l){return this._deserializeValue(s,l)}reflectPropertyToAttribute(s,l,u){this._propertyToAttribute(s,l,u)}serializeValueToAttribute(s,l,u){this._valueToNodeAttribute(u||this,s,l)}extend(s,l){if(!(s&&l))return s||l;let u=Object.getOwnPropertyNames(l);for(let c=0,d;c<u.length&&(d=u[c]);c++){let h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(s,d,h)}return s}mixin(s,l){for(let u in l)s[u]=l[u];return s}chainObject(s,l){return s&&l&&s!==l&&(s.__proto__=l),s}instanceTemplate(s){let l=this.constructor._contentForTemplate(s);return document.importNode(l,!0)}fire(s,l,u){u=u||{},l=l==null?{}:l;let c=new Event(s,{bubbles:u.bubbles===void 0?!0:u.bubbles,cancelable:Boolean(u.cancelable),composed:u.composed===void 0?!0:u.composed});c.detail=l;let d=u.node||this;return S(d).dispatchEvent(c),c}listen(s,l,u){s=s||this;let c=this.__boundListeners||(this.__boundListeners=new WeakMap),d=c.get(s);d||(d={},c.set(s,d));let h=l+u;d[h]||(d[h]=this._addMethodEventListenerToNode(s,l,u,this))}unlisten(s,l,u){s=s||this;let c=this.__boundListeners&&this.__boundListeners.get(s),d=l+u,h=c&&c[d];h&&(this._removeEventListenerFromNode(s,l,h),c[d]=null)}setScrollDirection(s,l){tu(l||this,n[s]||"auto")}$$(s){return this.root.querySelector(s)}get domHost(){let s=S(this).getRootNode();return s instanceof DocumentFragment?s.host:s}distributeContent(){const l=V(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return V(this).getEffectiveChildNodes()}queryDistributedElements(s){return V(this).queryDistributedElements(s)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let s=this.getEffectiveChildNodes(),l=[];for(let u=0,c;c=s[u];u++)c.nodeType!==Node.COMMENT_NODE&&l.push(c.textContent);return l.join("")}queryEffectiveChildren(s){let l=this.queryDistributedElements(s);return l&&l[0]}queryAllEffectiveChildren(s){return this.queryDistributedElements(s)}getContentChildNodes(s){let l=this.root.querySelector(s||"slot");return l?V(l).getDistributedNodes():[]}getContentChildren(s){return this.getContentChildNodes(s).filter(function(u){return u.nodeType===Node.ELEMENT_NODE})}isLightDescendant(s){const l=this;return l!==s&&S(l).contains(s)&&S(l).getRootNode()===S(s).getRootNode()}isLocalDescendant(s){return this.root===S(s).getRootNode()}scopeSubtree(s,l=!1){return zd(s,l)}getComputedStyleValue(s){return Hd.getComputedStyleValue(this,s)}debounce(s,l,u){return this._debouncers=this._debouncers||{},this._debouncers[s]=De.debounce(this._debouncers[s],u>0?Ae.after(u):we,l.bind(this))}isDebouncerActive(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];return!!(l&&l.isActive())}flushDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.flush()}cancelDebouncer(s){this._debouncers=this._debouncers||{};let l=this._debouncers[s];l&&l.cancel()}async(s,l){return l>0?Ae.run(s.bind(this),l):~we.run(s.bind(this))}cancelAsync(s){s<0?we.cancel(~s):Ae.cancel(s)}create(s,l){let u=document.createElement(s);if(l)if(u.setProperties)u.setProperties(l);else for(let c in l)u[c]=l[c];return u}elementMatches(s,l){return au(l||this,s)}toggleAttribute(s,l){let u=this;return arguments.length===3&&(u=arguments[2]),arguments.length==1&&(l=!u.hasAttribute(s)),l?(S(u).setAttribute(s,""),!0):(S(u).removeAttribute(s),!1)}toggleClass(s,l,u){u=u||this,arguments.length==1&&(l=!u.classList.contains(s)),l?u.classList.add(s):u.classList.remove(s)}transform(s,l){l=l||this,l.style.webkitTransform=s,l.style.transform=s}translate3d(s,l,u,c){c=c||this,this.transform("translate3d("+s+","+l+","+u+")",c)}arrayDelete(s,l){let u;if(Array.isArray(s)){if(u=s.indexOf(l),u>=0)return s.splice(u,1)}else if(u=tc(this,s).indexOf(l),u>=0)return this.splice(s,u,1);return null}_logger(s,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),s){case"log":case"warn":case"error":console[s](...l)}}_log(...s){this._logger("log",s)}_warn(...s){this._logger("warn",s)}_error(...s){this._logger("error",s)}_logf(s,...l){return["[%s::%s]",this.is,s,...l]}}return o.prototype.is="",o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ud={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},uu={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Wd=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},uu);function qd(r,e,t){const i=r._noAccessors,n=Object.getOwnPropertyNames(r);for(let o=0;o<n.length;o++){let a=n[o];if(!(a in t))if(i)e[a]=r[a];else{let s=Object.getOwnPropertyDescriptor(r,a);s&&(s.configurable=!0,Object.defineProperty(e,a,s))}}}function jd(r,e,t){for(let i=0;i<e.length;i++)cu(r,e[i],t,Wd)}function cu(r,e,t,i){qd(e,r,i);for(let n in Ud)e[n]&&(t[n]=t[n]||[],t[n].push(e[n]))}function du(r,e,t){e=e||[];for(let i=r.length-1;i>=0;i--){let n=r[i];n?Array.isArray(n)?du(n,e):e.indexOf(n)<0&&(!t||t.indexOf(n)<0)&&e.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return e}function Uo(r,e){for(const t in e){const i=r[t],n=e[t];!("value"in n)&&i&&"value"in i?r[t]=Object.assign({value:i.value},n):r[t]=n}}const Wo=lu(HTMLElement);function Gd(r,e,t){let i;const n={};class o extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(i)for(let l=0,u;l<i.length;l++)u=i[l],u.properties&&this.createProperties(u.properties),u.observers&&this.createObservers(u.observers,u.properties);r.properties&&this.createProperties(r.properties),r.observers&&this.createObservers(r.observers,r.properties),this._prepareTemplate()}}static get properties(){const l={};if(i)for(let u=0;u<i.length;u++)Uo(l,i[u].properties);return Uo(l,r.properties),l}static get observers(){let l=[];if(i)for(let u=0,c;u<i.length;u++)c=i[u],c.observers&&(l=l.concat(c.observers));return r.observers&&(l=l.concat(r.observers)),l}created(){super.created();const l=n.created;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}_registered(){const l=o.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),fi&&a(l);const u=Object.getPrototypeOf(this);let c=n.beforeRegister;if(c)for(let d=0;d<c.length;d++)c[d].call(u);if(c=n.registered,c)for(let d=0;d<c.length;d++)c[d].call(u)}}_applyListeners(){super._applyListeners();const l=n.listeners;if(l)for(let u=0;u<l.length;u++){const c=l[u];if(c)for(let d in c)this._addMethodEventListenerToNode(this,d,c[d])}}_ensureAttributes(){const l=n.hostAttributes;if(l)for(let u=l.length-1;u>=0;u--){const c=l[u];for(let d in c)this._ensureAttribute(d,c[d])}super._ensureAttributes()}ready(){super.ready();let l=n.ready;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attached(){super.attached();let l=n.attached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}detached(){super.detached();let l=n.detached;if(l)for(let u=0;u<l.length;u++)l[u].call(this)}attributeChanged(l,u,c){super.attributeChanged();let d=n.attributeChanged;if(d)for(let h=0;h<d.length;h++)d[h].call(this,l,u,c)}}if(t){Array.isArray(t)||(t=[t]);let s=e.prototype.behaviors;i=du(t,null,s),o.prototype.behaviors=s?s.concat(t):i}const a=s=>{i&&jd(s,i,n),cu(s,r,n,uu)};return fi||a(o.prototype),o.generatedFrom=r,o}const Qd=function(r,e){r||console.warn("Polymer.Class requires `info` argument");let t=e?e(Wo):Wo;return t=Gd(r,t,r.behaviors),t.is=t.prototype.is=r.is,t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rt=function(r){let e;return typeof r=="function"?e=r:e=rt.Class(r),r._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=r._legacyForceObservedAttributes),customElements.define(e.is,e),e};rt.Class=Qd;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xd={templatize(r,e){this._templatizerTemplate=r,this.ctor=Yn(r,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(r){return new this.ctor(r)},modelForElement(r){return yl(this._templatizerTemplate,r)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kd=ru(vl(rc(HTMLElement)));class Jd extends Kd{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ic)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,n){this.mutableData=!0}connectedCallback(){gl()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){S(S(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),e)t.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});t.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",Jd);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zd=vl(y);class qo extends Zd{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!xo,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),gl()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=S(S(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Yn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(n,o){let a=this.__instances;for(let s=0,l;s<a.length&&(l=a[s]);s++)l.forwardHostProp(n,o)},notifyInstanceProp:function(n,o,a){if(bl(this.as,o)){let s=n[this.itemsIndexAs];o==this.as&&(this.items[s]=a);let l=Al(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,o);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)e.indexOf(t[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=De.debounce(this.__renderDebouncer,t>0?Ae.after(t):we,e.bind(this)),wl(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ft()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!xo||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter((i,n,o)=>this.__filterFn(e[i],n,o))),this.__sortFn&&t.sort((i,n)=>this.__sortFn(e[i],e[n])),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const n=this.__itemsIdxToInstIdx={};let o;for(o=0;o<t;o++){let a=this.__instances[o],s=i[o],l=e[s];n[s]=o,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,o),a._setPendingProperty(this.itemsIndexAs,s),a._flushProperties()):this.__insertInstance(l,o,s)}for(let a=this.__instances.length-1;a>=o;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let t=this.__instances[e];const i=S(t.root);for(let n=0;n<t.children.length;n++){let o=t.children[n];i.appendChild(o)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){const n=this.__stampInstance(e,t,i);let o=this.__instances[t+1],a=o?o.children[0]:this;return S(S(this).parentNode).insertBefore(n.root,a),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),o=n<0?i:i.substring(0,n);if(o==parseInt(o,10)){let a=n<0?"":i.substring(n+1);this.__handleObservedPaths(a);let s=this.__itemsIdxToInstIdx[o],l=this.__instances[s];if(l){let u=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(u,t,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return yl(this.template,e)}}customElements.define(qo.is,qo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let eh=$e(r=>{let e=zn(r);class t extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,o){let a=o.path;if(a==JSCompiler_renameProperty("items",this)){let s=o.base||[],l=this.__lastItems,u=this.__lastMulti;if(n!==u&&this.clearSelection(),l){let c=Hn(s,l);this.__applySplices(c)}this.__lastItems=s,this.__lastMulti=n}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let s=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(s,10);s.indexOf(".")<0&&s==l&&this.__deselectChangedIdx(l)}}__applySplices(n){let o=this.__selectedMap;for(let s=0;s<n.length;s++){let l=n[s];o.forEach((u,c)=>{u<l.index||(u>=l.index+l.removed.length?o.set(c,u+l.addedCount-l.removed.length):o.set(c,-1))});for(let u=0;u<l.addedCount;u++){let c=l.index+u;o.has(this.items[c])&&o.set(this.items[c],c)}}this.__updateLinks();let a=0;o.forEach((s,l)=>{s<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,o.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let o=this.__selectedIndexForItemIndex(n);if(o>=0){let a=0;this.__selectedMap.forEach((s,l)=>{o==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(n){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let o=this.__selectedMap.get(n);if(o>=0){this.__selectedMap.delete(n);let a;this.multi&&(a=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let o=this.items[n];this.isSelected(o)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return t}),th=eh(y);class jo extends th{static get is(){return"array-selector"}static get template(){return null}}customElements.define(jo.is,jo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mt=new fe;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(r,e,t){},prepareTemplateDom(r,e){},prepareTemplateStyles(r,e,t){},styleSubtree(r,e){mt.processStyles(),_i(r,e)},styleElement(r){mt.processStyles()},styleDocument(r){mt.processStyles(),_i(document.body,r)},getComputedStyleValue(r,e){return Gl(r,e)},flushCustomStyles(){},nativeCss:Zn,nativeShadow:Xr,cssBuild:Ke,disableRuntime:Ll});window.ShadyCSS.CustomStyleInterface=mt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Go="include",rh=window.ShadyCSS.CustomStyleInterface;class ih extends HTMLElement{constructor(){super(),this._style=null,rh.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(Go);return t&&(e.removeAttribute(Go),e.textContent=nc(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ih);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let hu;hu=oc._mutablePropertyChange;const nh={properties:{mutableData:Boolean},_shouldPropertyChange(r,e,t){return hu(this,r,e,t,this.mutableData)}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oh=lu(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const fu=_`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;fu.setAttribute("style","display: none;");document.head.appendChild(fu.content);var pu=document.createElement("style");pu.textContent="[hidden] { display: none !important; }";document.head.appendChild(pu);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class G{constructor(e){G[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return G.types[e]&&G.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=G.types[t]=G.types[t]||{},e==null?delete t[i]:t[i]=e)}get list(){var e=this.type;if(e){var t=G.types[this.type];return t?Object.keys(t).map(function(i){return ah[this.type][i]},this):[]}}byKey(e){return this.key=e,this.value}}G[" "]=function(){};G.types={};var ah=G.types;rt({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(r,e,t){var i=new G({type:r,key:e});return t!==void 0&&t!==i.value?i.value=t:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(r){r&&(this.value=this)},byKey:function(r){return new G({type:this.type,key:r}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/rt({_template:_`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:oh.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(r){var e=(r||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(r){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&V(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,V(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ut=new Set;const sh={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ut.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(r){this.resizerShouldNotify(r)&&this._notifyDescendant(r)},this),this._fireResize())},assignParentResizable:function(r){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=r,r&&r._interestedResizables.indexOf(this)===-1&&(r._interestedResizables.push(this),r._subscribeIronResize(this))},stopResizeNotificationsFor:function(r){var e=this._interestedResizables.indexOf(r);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(r))},_subscribeIronResize:function(r){r.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(r){r.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(r){return!0},_onDescendantIronResize:function(r){if(this._notifyingDescendant){r.stopPropagation();return}ac||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(r){var e=V(r).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),r.stopPropagation())},_parentResizableChanged:function(r){r&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(r){!this.isAttached||(this._notifyingDescendant=!0,r.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var r=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),r()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(ut.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ut.delete(this):ut.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const lh={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(r,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!e)if(r==="document")this.scrollTarget=this._doc;else if(typeof r=="string"){var t=this.domHost;this.scrollTarget=t&&t.$?t.$[r]:V(this.ownerDocument).querySelector("#"+r)}else this._isValidScrollTarget()&&(this._oldScrollTarget=r,this._toggleScrollListener(this._shouldHaveListener,r))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(r){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,r):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=r)},set _scrollLeft(r){this.scrollTarget===this._doc?window.scrollTo(r,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=r)},scroll:function(r,e){var t;typeof r=="object"?(t=r.left,e=r.top):t=r,t=t||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(t,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(r,e){var t=e===this._doc?window:e;r?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),t.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(t.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(r){this._shouldHaveListener=r,this._toggleScrollListener(r,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Qo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),uh=Qo&&Qo[1]>=8,Xo=3,Ko="-10000px",Ye=-100;rt({_template:_`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Xd,sh,lh,nh],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var r=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return r-this._viewportHeight},get _itemsParent(){return V(V(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var r=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,r-this._physicalCount)},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this.grid&&(r=r-r%this._itemsPerRow),this._virtualStartVal=r},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(r){r=r%this._physicalCount,r<0&&(r=this._physicalCount+r),this.grid&&(r=r-r%this._itemsPerRow),this._physicalStartVal=r},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(r){this._physicalCountVal=r},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var r=this._firstVisibleIndexVal;if(r==null){var e=this._physicalTop+this._scrollOffset;r=this._iterateItems(function(t,i){if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return this.grid?i-i%this._itemsPerRow:i;if(this.grid&&this._virtualCount-1===i)return i-i%this._itemsPerRow})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){var r=this._lastVisibleIndexVal;if(r==null){if(this.grid)r=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems(function(t,i){e<this._scrollBottom&&(r=i),e+=this._getPhysicalSizeIncrement(t)})}this._lastVisibleIndexVal=r}return r},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,Ve),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(r){this.style.webkitOverflowScrolling=r===this?"touch":"",this.style.overflowY=r===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,Ve)},updateViewportBoundaries:function(){var r=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(r["padding-top"],10),this._isRTL=Boolean(r.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=r-this._scrollPosition,t=e>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e=e-this._scrollOffset;var i=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+i,this._physicalStart=this._physicalStart+i,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var n=this._getReusables(t);t?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,t?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),we)}},_getReusables:function(r){var e,t,i,n=[],o=this._hiddenContentSize*this._ratio,a=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,u=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,h=this._scrollBottom;for(r?(e=this._physicalStart,this._physicalEnd,t=d-u):(e=this._physicalEnd,this._physicalStart,t=c-h);i=this._getPhysicalSizeIncrement(e),t=t-i,!(n.length>=l||t<=o);)if(r){if(s+n.length+1>=this._virtualCount||u+i>=d-this._scrollOffset)break;n.push(e),u=u+i,e=(e+1)%l}else{if(a-n.length<=0||u+this._physicalSize-i<=h)break;n.push(e),u=u-i,e=e===0?l-1:e-1}return{indexes:n,physicalTop:u-this._scrollOffset}},_update:function(r,e){if(!(r&&r.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(r),this._updateMetrics(r),e)for(;e.length;){var t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(r){this._ensureTemplatized();var e,t,i=new Array(r);for(e=0;e<r;e++)t=this.stamp(null),i[e]=t.root.querySelector("*"),this._itemsParent.appendChild(t.root);return i},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(r){var e=this._clamp(this._physicalCount+r,Xo,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var t=e%this._itemsPerRow;t&&e-t<=this._physicalCount&&(e+=this._itemsPerRow),e-=t}var i=e-this._physicalCount,n=Math.round(this._physicalCount*.5);if(!(i<0)){if(i>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var a=0;a<i;a++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-o)/i,n=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||n===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),sc):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),we))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Xo))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var r={};r.__key__=!0,r[this.as]=!0,r[this.indexAs]=!0,r[this.selectedAs]=!0,r.tabIndex=!0,this._instanceProps=r,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(r,e){typeof e>"u"||(this.notifyResize(),ft(),r&&this._updateGridMetrics())},_itemsChanged:function(r){if(r.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,Ve);else if(r.path==="items.splices"){this._adjustVirtualIndex(r.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var e=r.value.indexSplices.some(function(n){return n.addedCount>0||n.removed.length>0});if(e){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=r.value.indexSplices.some(function(n){return n.index+n.addedCount>=this._virtualStart&&n.index<=this._virtualEnd},this);(!this._isClientFull()||i)&&this._debounce("_render",this._render,Ve)}else r.path!=="items.length"&&this._forwardItemPath(r.path,r.value)},_forwardItemPath:function(r,e){r=r.slice(6);var t=r.indexOf(".");t===-1&&(t=r.length);var i,n,o,a=this.modelForElement(this._offscreenFocusedItem),s=parseInt(r.substring(0,t),10);i=this._isIndexRendered(s),i?(n=this._getPhysicalIndex(s),o=this.modelForElement(this._physicalItems[n])):a&&(o=a),!(!o||o[this.indexAs]!==s)&&(r=r.substring(t+1),r=this.as+(r?"."+r:""),o._setPendingPropertyOrPath(r,e,!1,!0),o._flushProperties&&o._flushProperties(),i&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(r){r.forEach(function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}},this)},_removeItem:function(r){this.$.selector.deselect(r),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===r&&this._removeFocusedItem()},_iterateItems:function(r,e){var t,i,n,o;if(arguments.length===2&&e){for(o=0;o<e.length;o++)if(t=e[o],i=this._computeVidx(t),(n=r.call(this,t,i))!=null)return n}else{for(t=this._physicalStart,i=this._virtualStart;t<this._physicalCount;t++,i++)if((n=r.call(this,t,i))!=null)return n;for(t=0;t<this._physicalStart;t++,i++)if((n=r.call(this,t,i))!=null)return n}},_computeVidx:function(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_assignModels:function(r){this._iterateItems(function(e,t){var i=this._physicalItems[e],n=this.items&&this.items[t];if(n!=null){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,n),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(o,this.indexAs,t),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[o.__key__]=e,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")},r)},_updateMetrics:function(r){ft();var e=0,t=0,i=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems(function(o,a){t+=this._physicalSizes[o],this._physicalSizes[o]=this._physicalItems[o].offsetHeight,e+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},r),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(t=this._itemsPerRow===1?t:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-t,this._itemsPerRow=1),this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((n*i+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var r=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,t=(this._viewportWidth-e)/2;this._iterateItems(function(i,n){var o=n%this._itemsPerRow,a=Math.floor(o*this._itemWidth+t);this._isRTL&&(a=a*-1),this.translate3d(a+"px",r+"px",0,this._physicalItems[i]),this._shouldRenderNextRow(n)&&(r+=this._rowHeight)})}else{const i=[];this._iterateItems(function(n,o){const a=this._physicalItems[n];this.translate3d(0,r+"px",0,a),r+=this._physicalSizes[n];const s=a.id;s&&i.push(s)}),i.length&&this.setAttribute("aria-owns",i.join(" "))}},_getPhysicalSizeIncrement:function(r){return this.grid?this._computeVidx(r)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[r]},_shouldRenderNextRow:function(r){return r%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop=this._physicalTop-r;var e=this._scrollPosition;!uh&&e>0&&this._resetScrollPosition(e-r)}},_resetScrollPosition:function(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(r){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,r=r||this.grid&&this.$.items.style.height<this._estScrollHeight,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(r){return this.scrollToIndex(this.items.indexOf(r))},scrollToIndex:function(r){if(!(typeof r!="number"||r<0||r>this.items.length-1)&&(ft(),this._physicalCount!==0)){r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=this.grid?r-this._itemsPerRow*2:r-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,t=this._virtualStart,i=0,n=this._hiddenContentSize;t<r&&i<=n;)i=i+this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,t++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Ve)},selectItem:function(r){return this.selectIndex(this.items.indexOf(r))},selectIndex:function(r){if(!(r<0||r>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(r)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(r)]);e&&(e[this.selectedAs]=!0),this.updateSizeForIndex(r)}this.$.selector.selectIndex(r)}},deselectItem:function(r){return this.deselectIndex(this.items.indexOf(r))},deselectIndex:function(r){if(!(r<0||r>=this._virtualCount)){if(this._isIndexRendered(r)){var e=this.modelForElement(this._physicalItems[this._getPhysicalIndex(r)]);e[this.selectedAs]=!1,this.updateSizeForIndex(r)}this.$.selector.deselectIndex(r)}},toggleSelectionForItem:function(r){return this.toggleSelectionForIndex(this.items.indexOf(r))},toggleSelectionForIndex:function(r){var e=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(r):this.$.selector.isSelected(this.items[r]);e?this.deselectIndex(r):this.selectIndex(r)},clearSelection:function(){this._iterateItems(function(r,e){this.modelForElement(this._physicalItems[r])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(r){var e=r?this.listen:this.unlisten;e.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(r){var e=this.modelForElement(r.target);if(!!e){var t,i,n=V(r).path[0],o=this._getActiveElement(),a=this._physicalItems[this._getPhysicalIndex(e[this.indexAs])];n.localName==="input"||n.localName==="button"||n.localName==="select"||(t=e.tabIndex,e.tabIndex=Ye,i=o?o.tabIndex:-1,e.tabIndex=t,!(o&&a!==o&&a.contains(o)&&i!==Ye)&&this.toggleSelectionForItem(e[this.as]))}},_multiSelectionChanged:function(r){this.clearSelection(),this.$.selector.multi=r},updateSizeForItem:function(r){return this.updateSizeForIndex(this.items.indexOf(r))},updateSizeForIndex:function(r){return this._isIndexRendered(r)&&(this._updateMetrics([this._getPhysicalIndex(r)]),this._positionItems()),null},_manageFocus:function(){var r=this._focusedVirtualIndex;r>=0&&r<this._virtualCount?this._isIndexRendered(r)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(r){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(r/this._itemsPerRow)*this._itemsPerRow:r},_isIndexRendered:function(r){return r>=this._virtualStart&&r<=this._virtualEnd},_isIndexVisible:function(r){return r>=this.firstVisibleIndex&&r<=this.lastVisibleIndex},_getPhysicalIndex:function(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},focusItem:function(r){this._focusPhysicalItem(r)},_focusPhysicalItem:function(r){if(!(r<0||r>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(r)||this.scrollToIndex(r);var e=this._physicalItems[this._getPhysicalIndex(r)],t=this.modelForElement(e),i;t.tabIndex=Ye,e.tabIndex===Ye&&(i=e),i||(i=V(e).querySelector('[tabindex="'+Ye+'"]')),t.tabIndex=0,this._focusedVirtualIndex=r,i&&i.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var r=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var e=this.stamp(null);this._focusBackfillItem=e.root.querySelector("*"),this._itemsParent.appendChild(e.root)}this._offscreenFocusedItem=this._physicalItems[r],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[r]=this._focusBackfillItem,this._focusedPhysicalIndex=r,this.translate3d(0,Ko,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var r=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),e=this._physicalItems[r];if(!!e){var t=this.modelForElement(e),i=this.modelForElement(this._offscreenFocusedItem);t[this.as]===i[this.as]?(this._focusBackfillItem=e,t.tabIndex=-1,this._physicalItems[r]=this._offscreenFocusedItem,this.translate3d(0,Ko,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(r){var e=this.modelForElement(r.target),t=this.modelForElement(this._focusedItem),i=this._offscreenFocusedItem!==null,n=this._focusedVirtualIndex;!e||(t===e?this._isIndexVisible(n)||this.scrollToIndex(n):(this._restoreFocusedItem(),t&&(t.tabIndex=-1),e.tabIndex=0,n=e[this.indexAs],this._focusedVirtualIndex=n,this._focusedPhysicalIndex=this._getPhysicalIndex(n),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],i&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(r){switch(r.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&r.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&r.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(r);break}},_clamp:function(r,e,t){return Math.min(t,Math.max(e,r))},_debounce:function(r,e,t){this._debouncers=this._debouncers||{},this._debouncers[r]=De.debounce(this._debouncers[r],t,e.bind(this)),wl(this._debouncers[r])},_forwardProperty:function(r,e,t){r._setPendingProperty(e,t)},_forwardHostPropV2:function(r,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&this.modelForElement(t).forwardHostProp(r,e)},this)},_notifyInstancePropV2:function(r,e,t){if(bl(this.as,e)){var i=r[this.indexAs];e==this.as&&(this.items[i]=t),this.notifyPath(Al(this.as,"items."+i,e),t)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(r,e,t){e.indexOf(this.as+".")===0&&this.notifyPath("items."+r.__key__+"."+e.slice(this.as.length+1),t)},_forwardParentPath:function(r,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&this.modelForElement(t).notifyPath(r,e)},this)},_forwardParentProp:function(r,e){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(t){t&&(this.modelForElement(t)[r]=e)},this)},_getActiveElement:function(){var r=this._itemsParent.node.domHost;return V(r?r.root:document).activeElement}});const mu=m`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;p("vaadin-details",mu,{moduleId:"lumo-details"});const ch=m`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;p("vaadin-accordion-panel",[mu,ch],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dh=r=>class extends Un(Wn(r)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(t){super._onKeyDown(t),!t.defaultPrevented&&t.keyCode===9&&t.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(t){if(!this.disabled&&this.focusElement){const i=t.composedPath();if(i[0]===this&&this._keyboardActive&&this.focusElement.focus(),i[0]===this||i.includes(this.focusElement))return!0}return!1}_tabindexChanged(t){t!==void 0&&(this.focusElement.tabIndex=t),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xi extends dh(T(g(pe(y)))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
        <slot name="tooltip"></slot>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready(),this._contentId=`${this.constructor.is}-content-${Hr()}`,this._collapsible.addEventListener("keydown",e=>{e.shiftKey&&e.keyCode===9&&e.stopPropagation()}),this._tooltipController=new ie(this),this.addController(this._tooltipController),this._tooltipController.setTarget(this.focusElement),this._tooltipController.setPosition("bottom-start")}_getAriaExpanded(e){return e?"true":"false"}_getAriaHidden(e){return e?"false":"true"}_openedChanged(e){this._collapsible.style.maxHeight=e?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(e){[13,32].indexOf(e.keyCode)>-1&&(e.preventDefault(),this.opened=!this.opened)}}customElements.define(xi.is,xi);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ci extends xi{static get is(){return"vaadin-accordion-panel"}}customElements.define(Ci.is,Ci);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jo extends xl(g(T(y))){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}focus(){this._observer&&this._observer.flush(),super.focus()}ready(){super.ready(),this._observer=new K(this,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(t=>{t.addEventListener("opened-changed",this._boundUpdateOpened)})})}_getItems(){return this.items}_filterItems(e){return e.filter(t=>t instanceof Ci)}_updateItems(e,t){if(e){const i=e[t];e.forEach(n=>{n.opened=n===i})}}_onKeyDown(e){const t=e.composedPath()[0];!this.items.some(i=>i.focusElement===t)||super._onKeyDown(e)}_updateOpened(e){const t=this._filterItems(e.composedPath())[0],i=this.items.indexOf(t);if(e.detail.value){if(t.disabled||i===-1)return;this.opened=i}else this.items.some(n=>n.opened)||(this.opened=null)}}customElements.define(Jo.is,Jo);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hh=m`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,_u=document.createElement("template");_u.innerHTML=`<style>${hh.toString().replace(":host","html")}</style>`;document.head.appendChild(_u.content);const yu=document.createElement("style");yu.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(yu);p("vaadin-avatar",m`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vu=document.createElement("template");vu.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(vu.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Si extends me(T(g(pe(y)))){static get template(){return _`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new ie(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(e){if(e!=null){const t=`--vaadin-user-color-${e}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(t))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${t})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,t,i){this.__updateVisibility(),!(t&&t!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(n=>n.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(e,t,i){e&&(i&&i!==this.__generatedAbbr?this.__setTooltip(t?`${t} (${i})`:i):this.__setTooltip(t))}__withTooltipChanged(e,t){if(e){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else t&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(e){const t=this.__tooltipNode;t&&(t.text=e||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(Si.is,Si);p("vaadin-avatar-group",m`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const fh=m`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;p("vaadin-avatar-group-overlay",[lc,uc,fh],{moduleId:"lumo-avatar-group-overlay"});p("vaadin-avatar-group-list-box",m`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});p("vaadin-item",m`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zo extends Cl{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(Zo.is,Zo);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ea extends Ur(Wr){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(ea.is,ea);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const X=document.createElement("div");X.style.position="fixed";X.style.clip="rect(0px, 0px, 0px, 0px)";X.setAttribute("aria-live","polite");document.body.appendChild(X);let ct;function oe(r,e={}){const t=e.mode||"polite",i=e.timeout===void 0?150:e.timeout;t==="alert"?(X.removeAttribute("aria-live"),X.removeAttribute("role"),ct=re.debounce(ct,Sl,()=>{X.setAttribute("role","alert")})):(ct&&ct.cancel(),X.removeAttribute("role"),X.setAttribute("aria-live",t)),X.textContent="",setTimeout(()=>{X.textContent=r},i)}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const si=2;class ta extends qn(T(g(y))){static get template(){return _`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[_theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
            with-tooltip
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[_theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        >
          <vaadin-tooltip slot="tooltip" generator="[[__overflowTextGenerator]]"></vaadin-tooltip>
        </vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      >
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[_theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1},__overflowTextGenerator:Object}}static get observers(){return["__computeMoreTooltip(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),this._overlayElement.positionTarget=this.$.overflow,El(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(e,t){return t.replace("{user}",e.name||e.abbr||this.i18n.anonymous)}_onOverflowClick(e){e.stopPropagation(),this._opened?this.$.overlay.close():e.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(e){this._opened||/^(Enter|SpaceBar|\s)$/.test(e.key)&&(e.preventDefault(),this._opened=!0)}_onListKeyDown(e){(e.key==="Escape"||e.key==="Esc"||/^(Tab)$/.test(e.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}__computeItems(e,t,i){const n=e.base||[],o=this.__getLimit(n.length,t,i);return o?n.slice(0,o):n}__computeExtraItems(e,t,i){const n=e.base||[],o=this.__getLimit(n.length,t,i);return o?n.slice(o):n}__computeMaxReached(e,t){return t!=null&&e>this.__getMax(t)}__computeMore(e,t,i){return`+${e-this.__getLimit(e,t,i)}`}__computeMoreHidden(e,t,i){return!i&&!(t&&t<e)}__computeMoreTooltip(e,t,i){const n=this.__getLimit(e,t,i);if(n==null)return;const o=[];for(let a=n;a<e;a++){const s=this.items[a];s&&o.push(s.name||s.abbr||"anonymous")}this.__overflowTextGenerator=()=>o.join(`
`)}__getLimit(e,t,i){let n=null;const o=this.__getMax(i);return i!=null&&o<e?n=o-1:t&&t<e&&(n=t),Math.min(n,this.__calculateAvatarsFitWidth())}__getMax(e){return Math.max(e,si)}__itemsChanged(e,t){const i=t.base;this.$.items.render(),this.__setItemsInView(),e&&Array.isArray(e.indexSplices)?e.indexSplices.forEach(n=>{this.__announceItemsChange(i,n)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&Hn(i,this.__oldItems).forEach(o=>{this.__announceItemsChange(i,o)}),this.__oldItems=i}__announceItemsChange(e,t){const{addedCount:i,index:n,removed:o}=t;let a=[],s=[];i&&(a=e.slice(n,n+i).map(u=>this.__getMessage(u,this.i18n.joined||"{user} joined"))),o&&(s=o.map(u=>this.__getMessage(u,this.i18n.left||"{user} left")));const l=s.concat(a);l.length>0&&oe(l.join(", "))}__i18nItemsChanged(e,t){const{base:i}=e;if(i&&i.activeUsers){const n=t===1?"one":"many";i.activeUsers[n]&&this.setAttribute("aria-label",i.activeUsers[n].replace("{count}",t||0))}}__openedChanged(e,t){e?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.focus()):t&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring","")),this.$.overflow.setAttribute("aria-expanded",e===!0)}__setItemsInView(){const e=this._avatars,t=this.items;if(!t||!e||e.length<3)return;let i=this.__calculateAvatarsFitWidth();i===t.length-1&&(i=t.length),i>=t.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<si)return si;const e=this._avatars,t=e[0].clientWidth,{marginLeft:i,marginRight:n}=getComputedStyle(e[1]),o=this.getAttribute("dir")==="rtl"?parseInt(n,0)-parseInt(i,0):parseInt(i,0)-parseInt(n,0);return Math.floor((this.$.container.offsetWidth-t)/(t+o))}}customElements.define(ta.is,ta);const ph=m`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;p("vaadin-checkbox-group",[jn,Gn,ph],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ra extends qr(me(Tl(T(g(y))))){static get is(){return"vaadin-checkbox-group"}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new K(this,({addedNodes:e,removedNodes:t})=>{const i=this.__filterCheckboxes(e),n=this.__filterCheckboxes(t);i.forEach(this.__registerCheckbox),n.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)}),this._tooltipController=new ie(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(e){return e.filter(t=>t instanceof cc)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(e){e.some(i=>{const{value:n}=i;return!i.hasAttribute("value")&&(!n||n==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(e){e.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(e.disabled=!0),e.checked?this.__addCheckboxToValue(e.value):this.value.includes(e.value)&&(e.checked=!0)}__unregisterCheckbox(e){e.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),e.checked&&this.__removeCheckboxFromValue(e.value)}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__checkboxes.forEach(i=>{i.disabled=e})}__addCheckboxToValue(e){this.value.includes(e)||(this.value=[...this.value,e])}__removeCheckboxFromValue(e){this.value.includes(e)&&(this.value=this.value.filter(t=>t!==e))}__onCheckboxCheckedChanged(e){const t=e.target;t.checked?this.__addCheckboxToValue(t.value):this.__removeCheckboxFromValue(t.value)}__valueChanged(e,t){e.length===0&&t===void 0||(this.toggleAttribute("has-value",e.length>0),this.__checkboxes.forEach(i=>{i.checked=e.includes(i.value)}),t!==void 0&&this.validate())}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}}customElements.define(ra.is,ra);p("vaadin-confirm-dialog-overlay",m`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-confirm-dialog-overlay",m`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let Ee;const mh=_`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class ia extends dc{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!Ee){Ee=super.template.cloneNode(!0);const e=Ee.content.querySelector('[part="header"]');e.innerHTML="";const t=document.createElement("slot");t.setAttribute("name","header"),e.appendChild(t);const i=Ee.content.querySelector('[part="content"]'),n=i.querySelector("slot:not([name])"),o=document.createElement("div");o.setAttribute("part","message"),i.appendChild(o),o.appendChild(n);const a=Ee.content.querySelector('[part="footer"]');a.setAttribute("role","toolbar");const s=a.querySelector("slot");a.removeChild(s),a.appendChild(mh.content.cloneNode(!0))}return Ee}_finishClosing(){super._finishClosing(),this.dispatchEvent(new CustomEvent("vaadin-confirm-dialog-close"))}_headerFooterRendererChange(e,t,i){super._headerFooterRendererChange(e,t,i),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(ia.is,ia);class na extends hc{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return _`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}customElements.define(na.is,na);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gu=$e(r=>class extends r{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(t=>{if(!(this._getDirectSlotChild(t)!==void 0)){const n=this.slots[t],o=n();o instanceof Element&&(t!==""&&o.setAttribute("slot",t),this.appendChild(o))}})}_getDirectSlotChild(t){return Array.from(this.childNodes).find(i=>i.nodeType===Node.ELEMENT_NODE&&i.slot===t||i.nodeType===Node.TEXT_NODE&&i.textContent.trim()&&t==="")}});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oa extends gu(T(Il(y))){static get template(){return _`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},reject:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancel:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},_cancelButton:{type:HTMLElement,observer:"_cancelButtonChanged"},_confirmButton:{type:HTMLElement,observer:"_confirmButtonChanged"},_headerNode:{type:HTMLElement},_messageNode:{type:HTMLElement},_rejectButton:{type:HTMLElement,observer:"_rejectButtonChanged"}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancel)","__updateHeaderNode(_headerNode, header)","__updateMessageNode(_messageNode, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, reject)"]}get slots(){return{...super.slots,header:()=>{const e=document.createElement("h3");return this.__defaultHeader=e,e},"":()=>{const e=document.createElement("div");return this.__defaultMessage=e,e},"cancel-button":()=>{const e=document.createElement("vaadin-button");return e.setAttribute("theme",this.cancelTheme),e.textContent=this.cancelText,e._isDefaultButton=!0,e},"reject-button":()=>{const e=document.createElement("vaadin-button");return e.setAttribute("theme",this.rejectTheme),e.textContent=this.rejectText,e._isDefaultButton=!0,e},"confirm-button":()=>{const e=document.createElement("vaadin-button");return e._isDefaultButton=!0,e}}}constructor(){super(),this.__slottedNodes=[],this._observer=new K(this,e=>{this.__onDomChange(e.addedNodes)})}ready(){super.ready(),this.__boundCancel=this._cancel.bind(this),this.__boundConfirm=this._confirm.bind(this),this.__boundReject=this._reject.bind(this),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-confirm-dialog-close",()=>this.__onDialogClosed()),this._dimensions&&Object.keys(this._dimensions).forEach(e=>{this._setDimension(e,this._dimensions[e])})}__onDialogOpened(){const e=this._overlayElement;this.__slottedNodes.forEach(i=>{e.appendChild(i)});const t=e.querySelector('[slot="confirm-button"]');t&&t.focus()}__onDialogClosed(){const e=this.__slottedNodes;this.__slottedNodes=[],e.forEach(t=>{this.appendChild(t)})}__onDomChange(e){e.forEach(t=>{this.__slottedNodes.push(t);const i=t.nodeType===Node.ELEMENT_NODE,n=i?t.getAttribute("slot"):"";if(n)if(n.indexOf("button")>=0){const[o]=n.split("-");this[`_${o}Button`]=t}else n==="header"&&(this._headerNode=t);else(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==""||i&&t.slot==="")&&(this._messageNode=t)})}_cancelButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundCancel)}_confirmButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundConfirm)}_rejectButtonChanged(e,t){this.__setupSlottedButton(e,t,this.__boundReject)}__setupSlottedButton(e,t,i){t&&t.parentElement&&t.remove(),e.addEventListener("click",i)}__updateCancelButton(e,t,i,n){e&&(e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}__updateConfirmButton(e,t,i){e&&e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i))}__updateHeaderNode(e,t){e&&e===this.__defaultHeader&&(e.textContent=t)}__updateMessageNode(e,t){e&&e===this.__defaultMessage&&(e.textContent=t)}__updateRejectButton(e,t,i,n){e&&(e._isDefaultButton&&(e.textContent=t,e.setAttribute("theme",i)),e.toggleAttribute("hidden",!n))}_escPressed(e){e.defaultPrevented||this._cancel()}_confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}_cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}_reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(e){return e||"confirmation"}_setWidth(e){this._setDimensionIfAttached("width",e)}_setHeight(e){this._setDimensionIfAttached("height",e)}_setDimensionIfAttached(e,t){this._overlayElement?this._setDimension(e,t):(this._dimensions=this._dimensions||{},this._dimensions[e]=t)}_setDimension(e,t){this._overlayElement.style.setProperty(`--_vaadin-confirm-dialog-content-${e}`,t)}}customElements.define(oa.is,oa);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bu=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;p("vaadin-custom-field",[jn,Gn,bu],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class aa extends qr(me(Wn(g(T(y))))){static get is(){return"vaadin-custom-field"}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function},i18n:{type:Object,value:()=>({parseValue(e){return e.split("	")},formatValue(e){return e.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new K(this.$.slot,()=>{this.__setInputsFromSlot()}),this._tooltipController=new ie(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(e=>!(e.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return!this.inputs.some(i=>t===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(t=>!(t.validate||t.checkValidity).call(t)).length||this.required&&!this.value.trim())}_onKeyDown(e){e.key==="Tab"&&(this.inputs.indexOf(e.target)<this.inputs.length-1&&!e.shiftKey||this.inputs.indexOf(e.target)>0&&e.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(e){e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const e=this.formatValue||this.i18n.formatValue;this.value=e.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let i;return e.tagName==="SLOT"?i=e.assignedElements({flatten:!0}):(t.push(e),i=Array.from(e.children)),i.forEach(n=>t.push(...this.__queryAllAssignedElements(n))),t}__isInput(e){return!(e.getAttribute("slot")==="input"||e.getAttribute("slot")==="textarea")&&(e.validate||e.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>this.__isInput(e))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(e){this.toggleAttribute("has-value",e!==null&&e.trim()!=="")}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(e);const n=(this.parseValue||this.i18n.parseValue).apply(this,[e]);if(!n||n.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((o,a)=>{o.value=n[a]}),t!==void 0&&this.validate()}}customElements.define(aa.is,aa);const _h=m`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;p("vaadin-date-picker-overlay",[Pl,_h],{moduleId:"lumo-date-picker-overlay"});p("vaadin-date-picker-overlay-content",m`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});p("vaadin-month-calendar",m`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const Au=document.createElement("template");Au.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(Au.content);const yh=m`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;p("vaadin-date-picker",[et,yh],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vh=m`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,gh=m`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-date-picker-overlay",gh,{moduleId:"vaadin-date-picker-overlay-styles"});let dt;class sa extends Yd(Ur(Wr)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return dt||(dt=super.template.cloneNode(!0),dt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),dt}}customElements.define(sa.is,sa);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function bh(r){let e=r.getDay();e===0&&(e=7);const t=4-e,i=new Date(r.getTime()+t*24*3600*1e3),n=new Date(0,0);n.setFullYear(i.getFullYear());const o=i.getTime()-n.getTime(),a=Math.round(o/(24*3600*1e3));return Math.floor(a/7+1)}function W(r,e){return r instanceof Date&&e instanceof Date&&r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()&&r.getDate()===e.getDate()}function Xe(r,e,t){return(!e||r>=e)&&(!t||r<=t)}function wu(r,e){return e.filter(t=>t!==void 0).reduce((t,i)=>{if(!i)return t;if(!t)return i;const n=Math.abs(r.getTime()-i.getTime()),o=Math.abs(t.getTime()-r.getTime());return n<o?i:t})}function ao(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}function Ah(r,e,t=0,i=1){if(e>99)throw new Error("The provided year cannot have more than 2 digits.");if(e<0)throw new Error("The provided year cannot be negative.");let n=e+Math.floor(r.getFullYear()/100)*100;return r<new Date(n-50,t,i)?n-=100:r>new Date(n+50,t,i)&&(n+=100),n}function ge(r){const e=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(r);if(!e)return;const t=new Date(0,0);return t.setFullYear(parseInt(e[1],10)),t.setMonth(parseInt(e[2],10)-1),t.setDate(parseInt(e[3],10)),t}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class la extends me(g(y)){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),Q(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(e=>W(e.date,this.focusedDate))}_isDisabled(e,t,i){const n=new Date(0,0);n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);const o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0?!1:!Xe(n,t,i)&&!Xe(o,t,i)}_getTitle(e,t){if(!(e===void 0||t===void 0))return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(!(e===void 0||t===void 0))return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,n){if(!(e===void 0||t===void 0||i===void 0||n===void 0))return e=this._applyFirstDayOfWeek(e,n),t=this._applyFirstDayOfWeek(t,n),e=e.map((o,a)=>({weekDay:o,weekDayShort:t[a]})),e}__focusedDateChanged(e,t){t.some(i=>W(i,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&t===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&t===1}_isToday(e){return W(new Date,e)}_getDays(e,t){if(e===void 0||t===void 0)return;const i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);const n=[],o=i.getMonth(),a=e.getMonth();for(;i.getMonth()===a||i.getMonth()===o;)n.push(i.getMonth()===a?new Date(i.getTime()):null),this._dateAdd(i,1);return n}_getWeeks(e){return e.reduce((t,i,n)=>(n%7===0&&t.push([]),t[t.length-1].push(i),t),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const t=e.reduce((i,n)=>!i&&n?n:i);return bh(t)}__isDayFocused(e,t){return W(e,t)}__isDaySelected(e,t){return W(e,t)}__getDayAriaSelected(e,t){if(this.__isDaySelected(e,t))return"true"}__isDayDisabled(e,t,i){return!Xe(e,t,i)}__getDayAriaDisabled(e,t,i){if(!(e===void 0||t===void 0||i===void 0)&&this.__isDayDisabled(e,t,i))return"true"}__getDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=`, ${this.i18n.today}`),t}__getDayTabindex(e,t){return this.__isDayFocused(e,t)?"0":"-1"}}customElements.define(la.is,la);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Je extends y{static get template(){return _`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`;const e=this.querySelector("template");this._TemplateClass=Yn(e,this,{forwardHostProp(t,i){t!=="index"&&this._buffers.forEach(n=>{[...n.children].forEach(o=>{o._itemWrapper.instance[t]=i})})}}),fc&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[...e.children].forEach(t=>{this._ensureStampedInstance(t._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){const t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform=`translate3d(0, ${this._buffers[t].translateY}px, 0)`,this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const t=this.itemHeight+this.bufferOffset,i=e>this._buffers[1].translateY+t,n=e<this._buffers[0].translateY+t;(i||n)&&(this._translateBuffer(n),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=re.debounce(this._debouncerScrollFinish,de.after(200),()=>{const o=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],o)&&!this._isVisible(this._buffers[1],o)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const e=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform=`translate3d(0, ${e.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=re.debounce(this._debouncerUpdateClones,de.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(let i=0;i<this.bufferSize;i++){const n=document.createElement("div");n.style.height=`${this.itemHeight}px`,n.instance={};const a=`vaadin-infinite-scroller-item-content-${Je._contentIndex=Je._contentIndex+1||0}`,s=document.createElement("slot");s.setAttribute("name",a),s._itemWrapper=n,t.appendChild(s),n.setAttribute("slot",a),this.appendChild(n),setTimeout(()=>{this._isVisible(n,e)&&this._ensureStampedInstance(n)},1)}}),setTimeout(()=>{El(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(e.firstElementChild)return;const t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,n)=>{if(!i.updated){const o=this._firstIndex+this.bufferSize*n;[...i.children].forEach((a,s)=>{const l=a._itemWrapper;(!e||this._isVisible(l,t))&&(l.instance.index=o+s)}),i.updated=!0}})}_isVisible(e,t){const i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(Je.is,Je);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ua extends pe(g(jr(y))){static get template(){return _`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get __useSubMonthScrolling(){return this.$.monthScroller.clientHeight<this.$.monthScroller.itemHeight+this.$.monthScroller.bufferOffset}get calendars(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")]}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),Q(this.$.scrollers,"track",this._track.bind(this)),Q(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),Q(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),Q(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),Q(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),Q(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),Q(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new Qn(this._desktopMediaQuery,e=>{this._desktopMode=e}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),pc(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){const i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+i,t),this.$.monthScroller.forceUpdate()}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return e===0}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e,t=!0){if(!e)return;const i=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const l=this._calculateWeekScrollOffset(e);this._scrollToPosition(i+l,t);return}const n=this.$.monthScroller.position>i,a=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,s=this.$.monthScroller.position+a-1<i;n?this._scrollToPosition(i,t):s&&this._scrollToPosition(i-a+1,t)}_calculateWeekScrollOffset(e){const t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);let i=0;for(;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=re.debounce(this._debouncer,de.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(e,t,i){return e?t(ao(e)):i}_onTodayTap(){const e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const i=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+i*12,!0)}}_scrollToPosition(e,t){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!t){this.$.monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let i;this._revealPromise=new Promise(l=>{i=l});const n=(l,u,c,d)=>(l/=d/2,l<1?c/2*l*l+u:(l-=1,-c/2*(l*(l-2)-1)+u));let o=0;const a=this.$.monthScroller.position,s=l=>{o=o||l;const u=l-o;if(u<this.scrollDuration){const c=n(u,a,this._targetPosition-a,this.scrollDuration);this.$.monthScroller.position=c,window.requestAnimationFrame(s)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:a}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(s)}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXYears(e){const t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){const t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return(e.getFullYear()-t.getFullYear())*12-t.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){W(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),t=!0;break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.$.cancelButton.focus():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const t=this.focusableDateElement;t&&W(t.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,t.focus())}}async focusDate(e,t){const i=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,t||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(t=>{setTimeout(t)}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(wu(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){const t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){const t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);const n=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==n&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i,!0):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){const i=new Date(0,0);i.setFullYear(e.getFullYear()),t==="minDate"?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){const i=new Date,n=new Date(0,0);return n.setFullYear(i.getFullYear()),n.setMonth(i.getMonth()),n.setDate(i.getDate()),this._dateAllowed(n,e,t)}}customElements.define(ua.is,ua);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wh=r=>class extends pe(Un(mc(Wn(r)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",referenceDate:"",formatDate(t){const i=String(t.year).replace(/\d+/,n=>"0000".substr(n.length)+n);return[t.month+1,t.day,i].join("/")},parseDate(t){const i=t.split("/"),n=new Date;let o,a=n.getMonth(),s=n.getFullYear();if(i.length===3){if(a=parseInt(i[0])-1,o=parseInt(i[1]),s=parseInt(i[2]),i[2].length<3&&s>=0){const l=this.referenceDate?ge(this.referenceDate):new Date;s=Ah(l,s,a,o)}}else i.length===2?(a=parseInt(i[0])-1,o=parseInt(i[1])):i.length===1&&(o=parseInt(i[0]));if(o!==void 0)return{day:o,month:a,year:s}},formatTitle:(t,i)=>`${t} ${i}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Ol},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(t){this.inputElement&&(this.inputElement.value=t)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(t){super._onFocus(t),this._noInput&&t.target.blur()}_onBlur(t){super._onBlur(t),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),this.validate(),this._inputValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Qn(this._fullscreenMediaQuery,t=>{this._fullscreen=t})),this.addController(new _c(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(t,i,n){super._propertiesChanged(t,i,n),"value"in i&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",t=>{this.opened=t.detail.value}),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",()=>{this._close()}),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",t=>{this.__userConfirmedDate=!0,this._selectDate(t.detail.date),this._close()}),this._overlayContent.addEventListener("date-selected",t=>{this.__userConfirmedDate=!0,this._selectDate(t.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}checkValidity(){const t=!this._inputValue||!!this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),i=!this._selectedDate||Xe(this._selectedDate,this._minDate,this._maxDate);let n=!0;return this.inputElement&&(this.inputElement.checkValidity?n=this.inputElement.checkValidity():this.inputElement.validate&&(n=this.inputElement.validate())),t&&i&&n}_shouldSetFocus(t){return!this._shouldKeepFocusRing}_shouldRemoveFocus(t){return!this.opened}_setFocused(t){super._setFocused(t),this._shouldKeepFocusRing=t&&this._keyboardActive}_selectDate(t){const i=this._formatISO(t);this.value!==i&&(this.__dispatchChange=!0),this._selectedDate=t}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(t,i,n,o,a,s){return!t||i&&(!s||a)||n&&a||!o.parseDate}_formatISO(t){if(!(t instanceof Date))return"";const i=(c,d="00")=>(d+c).substr((d+c).length-d.length);let n="",o="0000",a=t.getFullYear();a<0?(a=-a,n="-",o="000000"):t.getFullYear()>=1e4&&(n="+",o="000000");const s=n+i(a,o),l=i(t.getMonth()+1),u=i(t.getDate());return[s,l,u].join("-")}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.autocomplete="off",t.setAttribute("role","combobox"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(t){t&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=t),this.inputElement&&this.inputElement.setAttribute("aria-expanded",t)}_selectedDateChanged(t,i){if(t===void 0||i===void 0)return;const n=this._formatISO(t);this.__keepInputValue||this._applyInputValue(t),n!==this.value&&(this.validate(),this.value=n),this._ignoreFocusedDateChange=!0,this._focusedDate=t,this._ignoreFocusedDateChange=!1}_focusedDateChanged(t,i){t===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(t)}__getOverlayTheme(t,i){if(i)return t}_valueChanged(t,i){const n=ge(t);if(t&&!n){this.value=i;return}t?W(this._selectedDate,n)||(this._selectedDate=n,i!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}_onOverlayOpened(){const t=ge(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||t||new Date;t||Xe(i,this._minDate,this._maxDate)?this._overlayContent.initialPosition=i:this._overlayContent.initialPosition=wu(i,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const t=this._inputValue||"",i=this._getParsedDate(t);this._isValidDate(i)?this._selectDate(i):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(t){(t.target===window||!this._overlayContent.contains(t.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(t){this._inputValue=t?this._getFormattedDate(this.i18n.formatDate,t):""}_getFormattedDate(t,i){return t(ao(i))}_setSelectionRange(t,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(t,i)}_isValidDate(t){return t&&!isNaN(t.getTime())}_onChange(t){this._inputValue===""&&(this.__dispatchChange=!0),t.stopPropagation()}_onClick(t){this._isClearButton(t)||this._onHostClick(t)}_onHostClick(t){(!this.autoOpenDisabled||this._noInput)&&(t.preventDefault(),this.open())}_onClearButtonClick(t){t.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(t){switch(super._onKeyDown(t),this._noInput&&[9].indexOf(t.keyCode)===-1&&t.preventDefault(),t.key){case"ArrowDown":case"ArrowUp":t.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(t.preventDefault(),t.stopPropagation(),this._setSelectionRange(0,0),t.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(t){const i=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),i===this.value&&this.validate()}_onEscape(t){if(!this.opened){if(this.clearButtonVisible&&!!this.value){t.stopPropagation(),this._onClearButtonClick(t);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(t=this._inputValue){const i=this.i18n.parseDate&&this.i18n.parseDate(t);return i&&ge(`${i.year}-${i.month+1}-${i.day}`)}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputValue){const t=this._getParsedDate();this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,W(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}__computeMinOrMaxDate(t){return ge(t)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-date-picker",[Gr,vh],{moduleId:"vaadin-date-picker-styles"});class Ei extends wh(Xn(g(T(y)))){static get is(){return"vaadin-date-picker"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Kn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Jn(this.inputElement,this._labelController)),this._tooltipController=new ie(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",t=>t.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(e){super._openedChanged(e),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(Ei.is,Ei);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xh=m`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;p("vaadin-time-picker",[et,xh],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ca extends kl{static get is(){return"vaadin-time-picker-item"}}customElements.define(ca.is,ca);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class da extends Dl{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(da.is,da);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-time-picker-overlay",m`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class ha extends $l{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(ha.is,ha);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fa extends Ml(g(y)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(fa.is,fa);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pa="00:00:00.000",ma="23:59:59.999";p("vaadin-time-picker",Gr,{moduleId:"vaadin-time-picker-styles"});class Oe extends yc(Xn(g(T(y)))){static get is(){return"vaadin-time-picker"}static get template(){return _`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(n=0,o="00")=>(o+n).substr((o+n).length-o.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return e.seconds!==void 0&&(i+=`:${t(e.seconds)}`),e.milliseconds!==void 0&&(i+=`.${t(e.milliseconds,"000")}`),i},parseTime:e=>{const t="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",n=i,o="(\\d{1,3})",s=new RegExp(`^${t}(?::${i}(?::${n}(?:\\.${o})?)?)?$`).exec(e);if(s){if(s[4])for(;s[4].length<3;)s[4]+="0";return{hours:s[1],minutes:s[2],seconds:s[3],milliseconds:s[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Kn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Jn(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new ie(this),this._tooltipController.setShouldShow(e=>!e.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(e){super._setFocused(e),e||this.validate()}__validDayDivisor(e){return!e||24*3600%e===0||e<1&&e%1*1e3%1===0}_onKeyDown(e){if(super._onKeyDown(e),this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;e.keyCode===40?this.__onArrowPressWithStep(-t):e.keyCode===38&&this.__onArrowPressWithStep(t)}_onEscape(){}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=(e&&e.hours||0)*60*60*1e3;return t+=(e&&e.minutes||0)*60*1e3,t+=(e&&e.seconds||0)*1e3,t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=(e&&e.hours||0)*60*60;return t+=(e&&e.minutes||0)*60,t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,i){e===0&&t<0&&(e=24*60*60*1e3);const n=t*1e3,o=e%n;n<0&&o&&i?e-=o:n>0&&o&&i?e-=o-n:e+=n;const a=Math.floor(e/1e3/60/60);e-=a*1e3*60*60;const s=Math.floor(e/1e3/60);e-=s*1e3*60;const l=Math.floor(e/1e3);return e-=l*1e3,{hours:a<24?a:0,minutes:s,seconds:l,milliseconds:e}}__updateDropdownItems(e,t,i,n){const o=this.__validateTime(this.__parseISO(t||pa)),a=this.__getSec(o),s=this.__validateTime(this.__parseISO(i||ma)),l=this.__getSec(s);if(this.__adjustValue(a,l,o,s),this.__dropdownItems=this.__generateDropdownList(a,l,n),n!==this.__oldStep){this.__oldStep=n;const u=this.__validateTime(this.__parseISO(this.value));this.__updateValue(u)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<15*60||!this.__validDayDivisor(i))return[];const n=[];i=i||3600;let o=-i+e;for(;o+i>=e&&o+i<=t;){const a=this.__validateTime(this.__addStep(o*1e3,i));o+=i;const s=this.i18n.formatTime(a);n.push({label:s,value:s})}return n}__adjustValue(e,t,i,n){if(!this.__memoValue)return;const o=this.__getSec(this.__memoValue);o<e?this.__updateValue(i):o>t&&this.__updateValue(n)}_valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),n=this.__formatISO(i)||"";e!==""&&e!==null&&!i?this.value=t===void 0?"":t:e!==n?this.value=n:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(i),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(e,t){if(e===""&&t===void 0)return;const i=this.i18n.parseTime(e),n=this.i18n.formatTime(i)||"";i?e!==n?this._comboBoxValue=n:this.__updateValue(i):(e!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(e){e.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this._comboBoxValue=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(e){return Oe.properties.i18n.value().formatTime(e)}__parseISO(e){return Oe.properties.i18n.value().parseTime(e)}_timeAllowed(e){const t=this.i18n.parseTime(this.min||pa),i=this.i18n.parseTime(this.max||ma);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(Oe.is,Oe);p("vaadin-date-time-picker",[jn,Gn,bu],{moduleId:"lumo-date-time-picker"});p("vaadin-date-time-picker-date-picker",m`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});p("vaadin-date-time-picker-time-picker",m`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _a extends Ei{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(_a.is,_a);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ya extends Oe{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(ya.is,ya);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-date-time-picker",Gr,{moduleId:"vaadin-date-time-picker"});function xu(r,e){for(;r;){if(r.properties&&r.properties[e])return r.properties[e];r=Object.getPrototypeOf(r)}}const Cu=customElements.get("vaadin-date-time-picker-date-picker"),Ch=customElements.get("vaadin-date-time-picker-time-picker"),Su=xu(Cu,"i18n").value(),_t=xu(Ch,"i18n").value(),va=Object.keys(Su),ga=Object.keys(_t);class ba extends qr(gu(Tl(me(g(T(y)))))){static get template(){return _`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Su,..._t})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const e=document.createElement("vaadin-date-time-picker-date-picker");return e.__defaultPicker=!0,e},"time-picker":()=>{const e=document.createElement("vaadin-date-time-picker-time-picker");return e.__defaultPicker=!0,e}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new K(this,e=>{this.__onDomChange(e.addedNodes)})}ready(){super.ready(),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new ie(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>e.__datePicker&&!e.__datePicker.opened&&e.__timePicker&&!e.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const t=e.relatedTarget;return!(this.__datePicker.contains(t)||this.__timePicker.contains(t)||t===this.__datePicker.$.overlay)}__syncI18n(e,t,i){i=i||Object.keys(t.i18n),i.forEach(n=>{t.i18n&&t.i18n.hasOwnProperty(n)&&e.set(`i18n.${n}`,t.i18n[n])})}__changeEventHandler(e){e.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(e){e.addEventListener("change",this.__changeEventHandler),e.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(e){e.removeEventListener("change",this.__changeEventHandler),e.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(e){e.filter(t=>t.nodeType===Node.ELEMENT_NODE).forEach(t=>{const i=t.getAttribute("slot");i==="date-picker"?this.__datePicker=t:i==="time-picker"&&(this.__timePicker=t)}),this.value&&(this.min||this.max)&&this.validate()}__datePickerChanged(e,t){!e||(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.datePlaceholder,e.invalid=this.invalid,e.initialPosition=this.initialPosition,e.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(e,this,va)):(this.datePlaceholder=e.placeholder,this.initialPosition=e.initialPosition,this.showWeekNumbers=e.showWeekNumbers,this.__syncI18n(this,e,va)),e.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),e.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{},e._validateInput=()=>{})}__timePickerChanged(e,t){!e||(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.timePlaceholder,e.step=this.step,e.invalid=this.invalid,this.__syncI18n(e,this,ga)):(this.timePlaceholder=e.placeholder,this.step=e.step,this.__syncI18n(this,e,ga)),this.__updateTimePickerMinMax(),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=this.__parseDate(this.__datePicker.value),t=W(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&W(e,this.__minDateTime)||t?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&W(e,this.__maxDateTime)||t?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){this.__timePicker&&this.__timePicker.step!==e&&(this.__timePicker.step=e)}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return ge(e)}__formatDateISO(e,t){return e?Cu.prototype._formatISO(e):t}__formatTimeISO(e){return _t.formatTime(e)}__parseTimeISO(e){return _t.parseTime(e)}__parseDateTime(e){const[t,i]=e.split("T");if(!(t&&i))return;const n=this.__parseDate(t);if(!n)return;const o=this.__parseTimeISO(i);if(!!o)return n.setHours(parseInt(o.hours)),n.setMinutes(parseInt(o.minutes||0)),n.setSeconds(parseInt(o.seconds||0)),n.setMilliseconds(parseInt(o.milliseconds||0)),n}__formatDateTime(e){if(!e)return"";const t=this.__formatDateISO(e,""),i=this.__dateToIsoTimeString(e);return`${t}T${i}`}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const e=this.__inputs.some(i=>!i.checkValidity()),t=this.required&&this.__inputs.some(i=>!i.value);return!(e||t)}get __stepSegment(){const e=this.step==null?60:parseFloat(this.step);if(e%3600===0)return 1;if(e%60===0||!e)return 2;if(e%1===0)return 3;if(e<1)return 4}__dateTimeEquals(e,t){return W(e,t)?e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds():!1}__handleDateTimeChange(e,t,i,n){if(!i){this[e]="",this[t]="";return}const o=this.__parseDateTime(i);if(!o){this[e]=n;return}this.__dateTimeEquals(this[t],o)||(this[t]=o)}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),t!==void 0&&(this.__dispatchChangeForValue=e),this.toggleAttribute("has-value",!!e),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);if(this.value!==t&&(this.value=t),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[n,o]=this.value.split("T");this.__datePicker.value=n||"",this.__timePicker.value=o||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const e=this.__datePicker.value,t=this.__timePicker.value;return e&&t?[e,t].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const e=this.__formattedValue,[t,i]=e.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),t&&i?e!==this.value&&(this.value=e):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}__themeChanged(e,t,i){!t||!i||[t,i].forEach(n=>{e?n.setAttribute("theme",e):n.removeAttribute("theme")})}__pickersChanged(e,t){!e||!t||e.__defaultPicker===t.__defaultPicker&&(e.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(ba.is,ba);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sh=m`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;p("vaadin-email-field",[et,Sh],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-email-field",m`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class Eh extends vc{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",Eh);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-field-outline",m`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-user-tags-overlay",m`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});p("vaadin-user-tag",m`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Aa extends g(jr(y)){static get is(){return"vaadin-user-tag"}static get template(){return _`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(e){e!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${e})`)}_onClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(Aa.is,Aa);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-user-tags-overlay",m`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class wa extends Ur(Wr){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(wa.is,wa);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xa=(r,e)=>new Promise(t=>{const i=()=>{r.removeEventListener(e,i),t()};r.addEventListener(e,i)});class Ca extends y{static get is(){return"vaadin-user-tags"}static get template(){return _`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([e])=>{this.__onTargetVisibilityChange(e.isIntersecting)},{threshold:1})}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=e=>{if(!e.firstChild){const t=document.createElement("div");t.setAttribute("part","tags"),e.appendChild(t)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(e){if(this.__isTargetVisible=e,e&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(e&&this.hasFocus){this.opened=!0;return}!e&&this.opened&&(this.opened=!1)}__targetChanged(e,t){this.$.overlay.positionTarget=e,t&&this.__targetVisibilityObserver.unobserve(t),e&&this.__targetVisibilityObserver.observe(e)}_hasFocusChanged(e){e&&this.flashing&&this.stopFlash()}get wrapper(){return this.$.overlay.content.querySelector('[part="tags"]')}createUserTag(e){const t=document.createElement("vaadin-user-tag");return t.name=e.name,t.uid=e.id,t.colorIndex=e.colorIndex,t}getTagForUser(e){return Array.from(this.wrapper.children).find(t=>t.uid===e.id)}getChangedTags(e,t){const i=t.map(o=>this.getTagForUser(o));return{added:e.map(o=>this.getTagForUser(o)||this.createUserTag(o)),removed:i}}getChangedUsers(e,t){const i=[],n=[];t.forEach(s=>{for(let l=0;l<s.removed.length;l++)n.push(s.removed[l]);for(let l=s.addedCount-1;l>=0;l--)i.push(e[s.index+l])});const o=i.filter(s=>!n.some(l=>s.id===l.id)),a=n.filter(s=>!i.some(l=>s.id===l.id));return{addedUsers:o,removedUsers:a}}applyTagsStart({added:e,removed:t}){const i=this.wrapper;t.forEach(n=>{n&&(n.classList.add("removing"),n.classList.remove("show"))}),e.forEach(n=>i.insertBefore(n,i.firstChild))}applyTagsEnd({added:e,removed:t}){const i=this.wrapper;t.forEach(n=>{n&&n.parentNode===i&&i.removeChild(n)}),e.forEach(n=>n&&n.classList.add("show"))}setUsers(e){this.requestContentUpdate();const t=Hn(e,this.users);if(t.length===0)return;const{addedUsers:i,removedUsers:n}=this.getChangedUsers(e,t);if(i.length===0&&n.length===0)return;const o=this.getChangedTags(i,n);if(this.__flashQueue.length>0){for(let a=0;a<n.length;a++)if(o.removed[a]===null)for(let s=0;s<this.__flashQueue.length;s++)this.__flashQueue[s].some(l=>l.uid===n[a].id)&&this.splice("__flashQueue",a,1)}if(this.opened&&this.hasFocus)this.updateTags(e,o);else if(i.length>0&&document.visibilityState!=="hidden"){const a=o.added,s=o.removed;this.updateTagsSync(e,{added:[],removed:s}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",a):this.flashTags(a)}else this.updateTagsSync(e,o)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(e=>{e.classList.contains("removing")||e.classList.add("show")})}flashTags(e){this.flashing=!0;const t=this.wrapper,i=Array.from(t.children);i.forEach(n=>{n.style.display="none"}),e.forEach(n=>{t.insertBefore(n,t.firstChild)}),this.flashPromise=new Promise(n=>{xa(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=re.debounce(this._debounceFlashStart,de.after(this.duration+this.delay),()=>{this.hasFocus||e.forEach(o=>o.classList.remove("show")),this._debounceFlashEnd=re.debounce(this._debounceFlashEnd,de.after(this.duration),()=>{const o=()=>{i.forEach(a=>{a.style.display="block"}),this.flashing=!1,n()};this.hasFocus?o():(xa(this.$.overlay,"animationend").then(()=>{o()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const n=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(n)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(e,t){this.applyTagsStart(t),this._debounceRender=re.debounce(this._debounceRender,de.after(this.duration),()=>{this.set("users",e),this.applyTagsEnd(t),e.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(e,t){this.applyTagsStart(t),this.set("users",e),this.applyTagsEnd(t)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(Ca.is,Ca);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sa extends g(jr(y)){static get is(){return"vaadin-field-outline"}static get template(){return _`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(e){this.toggleAttribute("has-active-user",Boolean(e));const t=e?`var(--vaadin-user-color-${e.colorIndex})`:"transparent",i="--_active-user-color";this.style.setProperty(i,t),this._field&&this._field.style.setProperty(i,t)}}customElements.define(Sa.is,Sa);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Th=(r,e)=>{switch(e){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-date-time-picker-date-picker":case"vaadin-date-time-picker-time-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return r.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return r.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return r.shadowRoot.querySelector('[part="radio"]');default:return r}},li=new WeakMap,Ih=r=>{if(!li.has(r)){const e=r.tagName.toLowerCase(),t=Th(r,e);t.style.position="relative",e.endsWith("text-area")&&(t.style.overflow="visible");const i=document.createElement("style");i.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,r.shadowRoot.appendChild(i);const n=document.createElement("vaadin-field-outline");(t===r?r.shadowRoot:t).appendChild(n),n.setAttribute("context",e),li.set(r,{root:r,target:t,outline:n})}return li.get(r)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class so{constructor(e){this.component=e,this.initTags(e)}getFields(){return[this.component]}getFieldIndex(e){return this.getFields().indexOf(e)}getFocusTarget(e){return this.component}initTags(e){const t=document.createElement("vaadin-user-tags");e.shadowRoot.appendChild(t),t.target=e,this._tags=t,e.addEventListener("mouseenter",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=re.debounce(this._mouseDebouncer,de.after(200),()=>{this._mouse&&this._tags.show()}))}),e.addEventListener("mouseleave",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),e.addEventListener("vaadin-highlight-show",i=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),e.addEventListener("vaadin-highlight-hide",i=>{this._hasFocus=!1,this._mouse||(this._debouncer=re.debounce(this._debouncer,de.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",i=>{i.relatedTarget!==e&&(this._mouse=!1,e.hasAttribute("focused")||this._tags.hide())})}setOutlines(e){const t=this.getFields();t.forEach((i,n)=>{const{outline:o}=Ih(i),a=t.length===1?0:e.map(s=>s.fieldIndex).indexOf(n);o.user=e[a]})}showOutline(e){this.fire("show",e)}hideOutline(e){this.fire("hide",e)}fire(e,t){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${e}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(t)}}))}redraw(e){this._tags.setUsers(e),this.setOutlines(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Me extends so{constructor(e){super(e),this.addListeners(e)}addListeners(e){e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}onFocusIn(e){const t=this.getFocusTarget(e);this.showOutline(t)}onFocusOut(e){const t=this.getFocusTarget(e);this.hideOutline(t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ph extends Me{getFields(){return this.component.__checkboxes}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Eu extends so{constructor(e){super(e),this.datePicker=e,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(e)}addListeners(e){this.overlay=e.$.overlay,e.addEventListener("blur",t=>this.onBlur(t),!0),e.addEventListener("opened-changed",t=>this.onOpenedChanged(t)),this.overlay.addEventListener("focusout",t=>this.onOverlayFocusOut(t)),e.addEventListener("focusin",t=>this.onFocusIn(t)),e.addEventListener("focusout",t=>this.onFocusOut(t))}onBlur(e){this.datePicker._fullscreen&&e.relatedTarget!==this.overlay&&(this.fullscreenFocus=!0)}onFocusIn(e){if(e.relatedTarget!==this.overlay){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(e){this.fullscreenFocus||e.relatedTarget===this.overlay||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(e){this.datePicker.contains(e.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(e){e.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),e.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oh extends Eu{constructor(e,t){super(e),this.component=t}getFieldIndex(){return 0}}class kh extends Me{constructor(e,t){super(e),this.component=t,this.timePicker=e}getFocusTarget(e){return this.timePicker}getFieldIndex(){return 1}}class Dh extends so{constructor(e){super(e);const[t,i]=this.getFields();this.dateObserver=new Oh(t,e),this.timeObserver=new kh(i,e)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $h extends Me{getFields(){return this.component.items||[]}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mh extends Me{getFields(){return this.component.__radioButtons}getFocusTarget(e){const t=this.getFields();return Array.from(e.composedPath()).find(i=>t.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rh extends Me{constructor(e){super(e),this.blurWhileOpened=!1,this.overlay=e._overlayElement}addListeners(e){super.addListeners(e),e.addEventListener("opened-changed",t=>{e._phone&&t.detail.value===!1&&this.hideOutline(e)})}onFocusIn(e){this.overlay.contains(e.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(e)}onFocusOut(e){this.overlay.contains(e.relatedTarget)||super.onFocusOut(e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fh=r=>{let e;switch(r.tagName.toLowerCase()){case"vaadin-date-picker":e=new Eu(r);break;case"vaadin-date-time-picker":e=new Dh(r);break;case"vaadin-select":e=new Rh(r);break;case"vaadin-checkbox-group":e=new Ph(r);break;case"vaadin-radio-group":e=new Mh(r);break;case"vaadin-list-box":e=new $h(r);break;default:e=new Me(r)}return e};class Bh{get user(){return this._user}set user(e){if(this._user=e,e){const t=`${e.name} started editing`,{label:i}=this.host;oe(i?`${t} ${i}`:t)}}constructor(e){this.host=e,this.user=null,this.users=[]}hostConnected(){this.redraw()}addUser(e){e&&(this.users.push(e),this.redraw(),this.user=e)}setUsers(e){Array.isArray(e)&&(this.users=e,this.redraw(),this.user=e[e.length-1]||null)}removeUser(e){if(e&&e.id!==void 0){let t;for(let i=0;i<this.users.length;i++)if(this.users[i].id===e.id){t=i;break}t!==void 0&&(this.users.splice(t,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class Nh extends HTMLElement{static init(e){if(!e._highlighterController){const t=new Bh(e);e.setAttribute("has-highlighter",""),t.observer=Fh(e),e.addController(t),e._highlighterController=t}return e._highlighterController}static addUser(e,t){this.init(e).addUser(t)}static removeUser(e,t){this.init(e).removeUser(t)}static setUsers(e,t){this.init(e).setUsers(t)}}customElements.define("vaadin-field-highlighter",Nh);p("vaadin-form-item",m`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ea extends g(y){static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(e){return e.ariaTarget||e}__linkLabelToField(e){gc(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(e){bc(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__onLabelClick(){const e=this.__fieldNode;e&&(e.focus(),e.click())}__getValidateFunction(e){return e.validate||e.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const e=this.$.labelSlot.assignedElements()[0];e&&(this.__labelNode=e,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${Hr()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const e=this.$.contentSlot.assignedElements();e.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const t=e.find(i=>!!this.__getValidateFunction(i));t&&(this.__fieldNode=t,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(e){e?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const e=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",e===!1)}}customElements.define(Ea.is,Ea);p("vaadin-form-layout",m`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ta extends qn(T(g(y))){static get template(){return _`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&(i.attributeName==="colspan"||i.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new K(this,t=>{const i=this._getObservableNodes(t.addedNodes),n=this._getObservableNodes(t.removedNodes);i.forEach(o=>{this.__mutationObserver.observe(o,e)}),(i.length>0||n.length>0)&&this._updateLayout()})}_getObservableNodes(e){const t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(i=>i.nodeType===Node.ELEMENT_NODE&&t.indexOf(i.localName.toLowerCase())===-1)}_naturalNumberOrOne(e){return typeof e=="number"&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return e==="inherit"||e==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(i=>{if(this._naturalNumberOrOne(i.columns)!==i.columns)throw new Error(`Invalid 'columns' value of ${i.columns}, a natural number is required.`);if(i.minWidth!==void 0&&!this._isValidCSSLength(i.minWidth))throw new Error(`Invalid 'minWidth' value of ${i.minWidth}, a valid CSS length required.`);if(i.labelsPosition!==void 0&&["aside","top"].indexOf(i.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${i.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){t&&t!==e?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){e.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;const t="background-position";this.responsiveSteps.forEach(i=>{this.$.layout.style.setProperty(t,i.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(t))<=this.offsetWidth&&(e=i)}),this.$.layout.style.removeProperty(t),e&&(this._columnCount=e.columns,this._labelsOnTop=e.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(e={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(e).forEach(([t,i])=>{this.style.setProperty(t,i)}),this._updateLayout()}_updateLayout(){const e=getComputedStyle(this),t=e.getPropertyValue("--vaadin-form-layout-column-spacing"),i=e.direction,n=`margin-${i==="ltr"?"left":"right"}`,o=`margin-${i==="ltr"?"right":"left"}`,a=this.offsetWidth;let s=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,u,c)=>{if(l.localName==="br"){s=0;return}let d;d=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),d=Math.min(d,this._columnCount);const h=d/this._columnCount;l.style.width=`calc(${h*99.9}% - ${1-h} * ${t})`,s+d>this._columnCount&&(s=0),s===0?l.style.setProperty(n,"0px"):l.style.removeProperty(n);const f=u+1,v=f<c.length&&c[f].localName==="br";if(s+d===this._columnCount)l.style.setProperty(o,"0px");else if(v){const A=(this._columnCount-s-d)/this._columnCount;l.style.setProperty(o,`calc(${A*a}px + ${A} * ${t})`)}else l.style.removeProperty(o);s=(s+d)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}customElements.define(Ta.is,Ta);p("vaadin-grid-tree-toggle",m`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=document.createElement("template");Tu.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Tu.content);class Ia extends g(jr(y)){static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||Ac(e.target)||e.target instanceof HTMLLabelElement||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style.setProperty("---level",t)}}customElements.define(Ia.is,Ia);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pa extends wc{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(e,t){if(e!==""&&!this.__isInteger(e)){console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(e,t)}_stepChanged(e,t){if(e!=null&&!this.__hasOnlyDigits(e)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${e}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d+$/.test(String(e))}}customElements.define(Pa.is,Pa);p("vaadin-message-input",m`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});p("vaadin-message-input-text-area",m`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-message-input-text-area",m`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class Oa extends xc{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(e)}__updateAriaLabel(e){e?this.inputElement.setAttribute("aria-label",e):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(e){!this.inputElement||this.__updateAriaLabel(e)}}customElements.define(Oa.is,Oa);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-message-input-button",m`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class ka extends Cc{static get is(){return"vaadin-message-input-button"}}customElements.define(ka.is,ka);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Da extends T(g(pe(y))){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return _`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}ready(){super.ready(),this._tooltipController=new ie(this),this.addController(this._tooltipController)}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(Da.is,Da);p("vaadin-message-avatar",m`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});p("vaadin-message",m`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});p("vaadin-message-list",m``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-message-avatar",m`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class $a extends Si{static get is(){return"vaadin-message-avatar"}}customElements.define($a.is,$a);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ti extends me(T(g(y))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return _`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(Ti.is,Ti);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ma extends xl(T(g(y))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return _`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(e,t){const i=this._getIndexOfFocusableElement();if(e&&e.length){const n=!t||e.length>t.length,o=this.scrollHeight<this.clientHeight+this.scrollTop+50;Sc.run(()=>{this._setTabIndexesByIndex(i),n&&o&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_handleFocusEvent(e){const t=e.composedPath().find(i=>i instanceof Ti);this._setTabIndexesByMessage(t)}_setTabIndexesByIndex(e){const t=this._messages[e]||this._messages[0];this._setTabIndexesByMessage(t)}_setTabIndexesByMessage(e){this._messages.forEach(t=>{t.tabIndex=t===e?0:-1})}_getIndexOfFocusableElement(){const e=this._messages.findIndex(t=>t.tabIndex===0);return e!==-1?e:0}}customElements.define(Ma.is,Ma);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lh=m`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
  }

  :host([focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host(:not([part~='overflow']):not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([part~='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([part~='overflow'])::before,
  :host([part~='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([part~='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([part~='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([part~='overflow-two']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([part~='overflow-two'])::after {
    display: none;
  }

  :host([part~='overflow-one']) {
    margin-inline-start: 0;
  }

  :host([part~='overflow-one'])::before,
  :host([part~='overflow-one'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;p("vaadin-multi-select-combo-box-chip",[Rl,Lh],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-multi-select-combo-box-item",m`
    @media (any-hover: hover) {
      :host(:hover[readonly]) {
        background-color: transparent;
        cursor: default;
      }
    }
  `,{moduleId:"lumo-multi-select-combo-box-item"});const Vh=m`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part~='chip']:not(:last-of-type) {
    margin-inline-end: var(--lumo-space-xs);
  }

  [part~='overflow']:not([hidden]) + :not(:empty) {
    margin-inline-start: var(--lumo-space-xs);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;p("vaadin-multi-select-combo-box",[et,Vh],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ra extends g(y){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return _`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host(:is([readonly], [disabled], [part~='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(Ra.is,Ra);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-multi-select-combo-box-container",m`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let ht;class Fa extends Ec{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!ht){ht=super.template.cloneNode(!0);const e=ht.content,t=e.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),e.insertBefore(i,t[2]),i.appendChild(t[0]),i.appendChild(t[1])}return ht}}customElements.define(Fa.is,Fa);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ba extends kl{static get is(){return"vaadin-multi-select-combo-box-item"}}customElements.define(Ba.is,Ba);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-multi-select-combo-box-overlay",m`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class Na extends $l{static get is(){return"vaadin-multi-select-combo-box-overlay"}}customElements.define(Na.is,Na);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class La extends Dl{static get is(){return"vaadin-multi-select-combo-box-scroller"}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}__getAriaSelected(e,t){const i=this.items[t];return this.__isItemSelected(i,null,this.itemIdPath).toString()}__isItemSelected(e,t,i){return e instanceof Fl||this.comboBox.readonly?!1:this.comboBox._findIndex(e,this.comboBox.selectedItems,i)>-1}__updateElement(e,t){super.__updateElement(e,t),e.toggleAttribute("readonly",this.comboBox.readonly)}}customElements.define(La.is,La);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Va extends Tc(Ml(g(y))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return _`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const e=this.getRootNode().host;super._initScroller(e)}clear(){super.clear(),this.inputElement&&(this.inputElement.value="")}_onEnter(e){this.__enterPressed=!0,super._onEnter(e)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const e=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(e);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(e){this._ignoreCommitValue=!0,super._onFocusout(e),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(e){e.stopPropagation(),!this.readonly&&(e.detail.item instanceof Fl||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:e.detail.item}})))}_shouldLoadPage(e){return this.readonly?!1:super._shouldLoadPage(e)}clearCache(){this.readonly||super.clearCache()}}customElements.define(Va.is,Va);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zh=m`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  [hidden] {
    display: none !important;
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  [part='chip'] {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;p("vaadin-multi-select-combo-box",[Gr,zh],{moduleId:"vaadin-multi-select-combo-box-styles"});class za extends qn(Xn(g(T(y)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return _`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <vaadin-multi-select-combo-box-chip
              id="overflow"
              slot="prefix"
              part$="[[_getOverflowPart(_overflowItems.length)]]"
              disabled="[[disabled]]"
              readonly="[[readonly]]"
              label="[[_getOverflowLabel(_overflowItems.length)]]"
              title$="[[_getOverflowTitle(_overflowItems)]]"
              hidden$="[[_isOverflowHidden(_overflowItems.length)]]"
              on-mousedown="_preventBlur"
            ></vaadin-multi-select-combo-box-chip>
            <div id="chips" part="chips" slot="prefix"></div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e}[has-value] input::placeholder {
          color: transparent !important;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return this.shadowRoot.querySelectorAll('[part~="chip"]')}ready(){super.ready(),this.addController(new Kn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Jn(this.inputElement,this._labelController)),this._tooltipController=new ie(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this.__updateChips(),Qr(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),oe(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(e,t){super._disabledChanged(e,t),(e||t)&&this.__updateChips()}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}_setFocused(e){super._setFocused(e),e||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(e,t){if(!!this.stateTarget){if(e==="required"){this._delegateAttribute("aria-required",t?"true":!1);return}super._delegateAttribute(e,t)}}_clearButtonVisibleChanged(e,t){(e||t)&&this.__updateChips()}_onFilteredItemsChanged(e){const{value:t}=e.detail;(Array.isArray(t)||t==null)&&(this.filteredItems=t)}_readonlyChanged(e,t){(e||t)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(e,t){(Math.floor(e)!==e||e<=0)&&(this.pageSize=t,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(e){const t=this.__tmpA11yPlaceholder;t!==e&&(this.__savedPlaceholder=e,t&&(this.placeholder=t))}_selectedItemsChanged(e){if(this._toggleHasValue(this._hasValue),this._hasValue){const t=this._mergeItemLabels(e);this.__tmpA11yPlaceholder=t,this.placeholder=t}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(e){return this.$.comboBox._getItemLabel(e)}_getOverflowLabel(e){return e}_getOverflowPart(e){let t="chip overflow";return e===1?t+=" overflow-one":e===2&&(t+=" overflow-two"),t}_getOverflowTitle(e){return this._mergeItemLabels(e)}_isOverflowHidden(e){return e===0}_mergeItemLabels(e){return e.map(t=>this._getItemLabel(t)).join(", ")}_findIndex(e,t,i){if(i&&e){for(let n=0;n<t.length;n++)if(t[n]&&t[n][i]===e[i])return n;return-1}return t.indexOf(e)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(e,t,i){const n=t?"selected":"deselected",o=this.i18n.total.replace("{count}",i||0);oe(`${e} ${this.i18n[n]} ${o}`)}__removeItem(e){const t=[...this.selectedItems];t.splice(t.indexOf(e),1),this.__updateSelection(t);const i=this._getItemLabel(e);this.__announceItem(i,!1,t.length)}__selectItem(e){const t=[...this.selectedItems],i=this._findIndex(e,t,this.itemIdPath),n=this._getItemLabel(e);let o=!1;if(i!==-1){const a=this._lastFilter;if(a&&a.toLowerCase()===n.toLowerCase()){this.__clearFilter();return}t.splice(i,1)}else t.push(e),o=!0;this.__updateSelection(t),this.__clearFilter(),this.__announceItem(n,o,t.length)}__updateSelection(e){this.selectedItems=e,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(e){const t=document.createElement("vaadin-multi-select-combo-box-chip");t.setAttribute("part","chip"),t.setAttribute("slot","prefix"),t.item=e,t.disabled=this.disabled,t.readonly=this.readonly;const i=this._getItemLabel(e);return t.label=i,t.setAttribute("title",i),t.addEventListener("item-removed",n=>this._onItemRemoved(n)),t.addEventListener("mousedown",n=>this._preventBlur(n)),t}__getOverflowWidth(){const e=this.$.overflow;e.style.visibility="hidden",e.removeAttribute("hidden"),e.setAttribute("part","chip overflow");const t=getComputedStyle(e),i=e.clientWidth+parseInt(t.marginInlineStart);return e.setAttribute("hidden",""),e.style.visibility="",i}__updateChips(){if(!this._inputField)return;Array.from(this._chips).forEach(o=>{o!==this.$.overflow&&o.remove()});const e=[...this.selectedItems],t=this._inputField.$.wrapper.clientWidth,i=parseInt(getComputedStyle(this.inputElement).flexBasis);let n=t-i;e.length>1&&(n-=this.__getOverflowWidth());for(let o=e.length-1,a=null;o>=0;o--){const s=this.__createChip(e[o]);if(this.$.chips.insertBefore(s,a),this.$.chips.clientWidth>n){s.remove();break}e.pop(),a=s}this._overflowItems=e}_onClearButtonTouchend(e){e.preventDefault(),this.clear()}_onClearButtonClick(e){e.stopPropagation(),this.clear()}_onChange(e){e.stopPropagation()}_onEscape(e){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(e.stopPropagation(),this.selectedItems=[])}_onKeyDown(e){super._onKeyDown(e);const t=Array.from(this._chips).slice(1);if(!this.readonly&&t.length>0)switch(e.key){case"Backspace":this._onBackSpace(t);break;case"ArrowLeft":this._onArrowLeft(t,e);break;case"ArrowRight":this._onArrowRight(t,e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let n;this.getAttribute("dir")!=="rtl"?i===-1?n=e.length-1:i>0&&(n=i-1):i===e.length-1?n=-1:i>-1&&(n=i+1),n!==void 0&&(this._focusedChipIndex=n)}_onArrowRight(e,t){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&t.preventDefault();let n;this.getAttribute("dir")==="rtl"?i===-1?n=e.length-1:i>0&&(n=i-1):i===e.length-1?n=-1:i>-1&&(n=i+1),n!==void 0&&(this._focusedChipIndex=n)}_onBackSpace(e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t===-1?this._focusedChipIndex=e.length-1:(this.__removeItem(e[t].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(e,t){if(e>-1||t>-1){const i=Array.from(this._chips).slice(1);if(i.forEach((n,o)=>{n.toggleAttribute("focused",o===e)}),e>-1){const n=i[e].item,o=this._getItemLabel(n);oe(`${o} ${this.i18n.focused}`)}}}_onComboBoxChange(){const e=this.$.comboBox.selectedItem;e&&this.__selectItem(e)}_onComboBoxItemSelected(e){this.__selectItem(e.detail.item)}_onCustomValueSet(e){e.preventDefault(),e.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:e.detail,composed:!0,bubbles:!0}))}_onItemRemoved(e){this.__removeItem(e.detail.item)}_preventBlur(e){e.preventDefault()}__computeEffectiveItems(e,t,i){return e&&i?t:e}__computeEffectiveFilteredItems(e,t,i,n){return!e&&n?i:t}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}}customElements.define(za.is,za);p("vaadin-notification-card",m`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ya extends g(T(y)){static get template(){return _`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),Ol&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(e){e?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const e=window.innerHeight,i=window.innerWidth>e,n=document.documentElement.clientHeight;i&&n>e?this.style.bottom=`${n-e}px`:this.style.bottom="0"}_onVaadinOverlayClose(e){const t=e.detail.sourceEvent;t&&t.composedPath().indexOf(this)>=0&&e.preventDefault()}}class Ha extends g(y){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class Z extends Il(T(y)){static get template(){return _`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(e,t){return Ic(e)?Z._createAndShowNotification(i=>{Bc(e,i)},t):Z._createAndShowNotification(i=>{i.innerText=e},t)}static _createAndShowNotification(e,t){const i=document.createElement(Z.is);return t&&Number.isFinite(t.duration)&&(i.duration=t.duration),t&&t.position&&(i.position=t.position),t&&t.theme&&i.setAttribute("theme",t.theme),i.renderer=e,document.body.appendChild(i),i.opened=!0,i.addEventListener("opened-changed",n=>{n.detail.value||i.remove()}),i}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),Qr(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(e,t,i){if(!i)return;const n=this._oldRenderer!==e;this._oldRenderer=e,n&&(i.innerHTML="",delete i._$litPart$),t&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return Z._container||(Z._container=document.createElement("vaadin-notification-container"),document.body.appendChild(Z._container)),Z._container}_openedChanged(e){e?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&e!=="none"){const t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}}customElements.define(Ya.is,Ya);customElements.define(Ha.is,Ha);customElements.define(Z.is,Z);p("vaadin-progress-bar",m`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const Iu=document.createElement("template");Iu.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(Iu.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yh=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(t,i,n){const o=this._normalizeValue(t,i,n);this.style.setProperty("--vaadin-progress-value",o)}_valueChanged(t){this.setAttribute("aria-valuenow",t)}_minChanged(t){this.setAttribute("aria-valuemin",t)}_maxChanged(t){this.setAttribute("aria-valuemax",t)}_normalizeValue(t,i,n){let o;return!t&&t!==0?o=0:i>=n?o=1:(o=(t-i)/(n-i),o=Math.min(Math.max(o,0),1)),o}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ua extends T(g(Yh(y))){static get template(){return _`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(Ua.is,Ua);const Hh=m`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;p("vaadin-scroller",Hh,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lo{constructor(e,t){this.host=e,this.scrollTarget=t||e,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=re.debounce(this.__debounceOverflow,Sl,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new K(this.host,e=>{e.addedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(t)}),e.removedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(t)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const e=this.scrollTarget;let t="";e.scrollTop>0&&(t+=" top"),Math.ceil(e.scrollTop)<Math.ceil(e.scrollHeight-e.clientHeight)&&(t+=" bottom");const i=Math.abs(e.scrollLeft);i>0&&(t+=" start"),Math.ceil(i)<Math.ceil(e.scrollWidth-e.clientWidth)&&(t+=" end"),t=t.trim(),t.length>0&&this.host.getAttribute("overflow")!==t?this.host.setAttribute("overflow",t):t.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ii extends me(T(pe(g(y)))){static get template(){return _`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new lo(this),this.addController(this.__overflowController)}_shouldSetFocus(e){return e.target===this}}customElements.define(Ii.is,Ii);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uh=m`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;p("vaadin-select",[et,Uh],{moduleId:"lumo-select"});p("vaadin-select-value-button",m`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Wh=m`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;p("vaadin-select-overlay",[Pl,Wh],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wa extends Pc{static get is(){return"vaadin-select-item"}}customElements.define(Wa.is,Wa);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qa extends Cl{static get is(){return"vaadin-select-list-box"}}customElements.define(qa.is,qa);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-select-overlay",m`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class ja extends Ur(Wr){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const e=this._getMenuElement();this.owner._assignMenuElement(e)}}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}}customElements.define(ja.is,ja);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ga extends Oc(g(y)){static get is(){return"vaadin-select-value-button"}static get template(){return _`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(Ga.is,Ga);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */p("vaadin-select",[kc,Dc],{moduleId:"vaadin-select-styles"});class Qa extends Un(Bl(qr(T(g(y))))){static get is(){return"vaadin-select"}static get template(){return _`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get _valueButton(){return this._valueButtonController&&this._valueButtonController.node}constructor(){super(),this._fieldId=`${this.localName}-${Hr()}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new Nl(this,"value",()=>document.createElement("vaadin-select-value-button"),(e,t)=>{this._setFocusElement(t),this.ariaTarget=t,this.stateTarget=t,t.setAttribute("aria-haspopup","listbox"),t.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaExpanded(e.opened),t.addEventListener("keydown",this._boundOnKeyDown)}),this.addController(this._valueButtonController),this.addController(new Qn(this._phoneMediaQuery,e=>{this._phone=e})),Qr(this),this._tooltipController=new ie(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this.validate()}_rendererChanged(e,t){!t||(t.setProperties({owner:this,renderer:e||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(e,t){(e||t)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),e.setAttribute("role","listbox"),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items,this._items.forEach(t=>t.setAttribute("role","option")))}_valueChanged(e,t){this.toggleAttribute("has-value",Boolean(e)),t!==void 0&&this.validate()}_onClick(e){e.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,i=t!==void 0?t:-1,n=this._menuElement._searchKey(i,e.key);n>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else t&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(e){this._valueButton&&this._valueButton.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this._valueButton&&(e?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const i=e.getAttribute("label");i?t=this.__createItemElement({label:i}):t=e.cloneNode(!0),t._sourceItem=e,this.__appendValueItemElement(t),t.selected=!0}__createItemElement(e){const t=document.createElement(e.component||"vaadin-select-item");return e.label&&(t.textContent=e.label),e.value&&(t.value=e.value),e.disabled&&(t.disabled=e.disabled),t}__appendValueItemElement(e){e.removeAttribute("tabindex"),e.removeAttribute("role"),e.setAttribute("id",this._fieldId),this._valueButton.appendChild(e)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const e=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),e)this.__attachSelectedItem(e),this._valueChanging||(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const t=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(t),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(e,t){if(t){const i=e==null?e:e.toString();this._menuElement.selected=t.reduce((n,o,a)=>n===void 0&&o.value===i?a:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),e||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,t){if(!this.items||this.items.length===0){e.textContent="";return}let i=e.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),e.appendChild(i)),i.textContent="",this.items.forEach(n=>{i.appendChild(this.__createItemElement(n))})}}customElements.define(Qa.is,Qa);p("vaadin-split-layout",m`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lr extends T(g(y)){static get template(){return _`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new K(this,t=>{this._cleanupNodes(t.removedNodes),this._processChildren()});const e=this.$.splitter;Q(e,"track",this._onHandleTrack.bind(this)),Q(e,"down",this._setPointerEventsNone.bind(this)),Q(e,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(e){e.forEach(t=>{t.parentElement instanceof lr||t.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((e,t)=>{t===0?(this._primaryChild=e,e.setAttribute("slot","primary")):t===1?(this._secondaryChild=e,e.setAttribute("slot","secondary")):e.removeAttribute("slot")})}_setFlexBasis(e,t,i){t=Math.max(0,Math.min(t,i)),t===0&&(t=1e-6),e.style.flex=`1 1 ${t}px`}_setPointerEventsNone(e){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(!this._primaryChild||!this._secondaryChild)return;const t=this.orientation==="vertical"?"height":"width";if(e.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[t]-this.$.splitter.getBoundingClientRect()[t],primary:this._primaryChild.getBoundingClientRect()[t],secondary:this._secondaryChild.getBoundingClientRect()[t]};return}const i=this.orientation==="vertical"?e.detail.dy:e.detail.dx,o=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+o,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-o,this._startSize.container),e.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(lr.is,lr);const qh=m`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;p("vaadin-tabsheet",[qh,$c],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xa extends Ii{static get is(){return"vaadin-tabsheet-scroller"}}customElements.define(Xa.is,Xa);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jh extends Nl{constructor(e){super(e,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(e){if(!(e instanceof Mc))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=e,e.addEventListener("items-changed",this.__tabsItemsChangedListener),e.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=e,this.host.stateTarget=e,this.__tabsItemsChangedListener()}teardownNode(e){this.tabs=null,e.removeEventListener("items-changed",this.__tabsItemsChangedListener),e.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class Ka extends pe(Bl(T(g(y)))){static get template(){return _`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new lo(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new jh(this),this.addController(this._tabsSlotController);const e=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new K(e,()=>{this.__panels=Array.from(e.assignedNodes({flatten:!0})).filter(t=>t.nodeType===Node.ELEMENT_NODE)})}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}__itemsOrPanelsChanged(e,t){!e||!t||e.forEach(i=>{const n=t.find(o=>o.getAttribute("tab")===i.id);n&&(n.role="tabpanel",n.id=n.id||`tabsheet-panel-${Hr()}`,n.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",n.id))})}__selectedTabItemChanged(e,t,i){if(!t||!i||e===void 0)return;const n=this.shadowRoot.querySelector('[part="content"]'),o=t[e],a=o?o.id:"",s=i.find(u=>u.getAttribute("tab")===a);this.toggleAttribute("loading",!s);const l=i.filter(u=>!u.hidden).length===1;s?n.style.minHeight="":l&&(n.style.minHeight=`${n.offsetHeight}px`),i.forEach(u=>{u.hidden=u!==s})}}customElements.define(Ka.is,Ka);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pu=document.createElement("template");Pu.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Pu.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ja extends me(g(y)){static get template(){return _`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(Ja.is,Ja);p("vaadin-upload",m`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const Gh=m`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;p("vaadin-upload-file",[Rl,Gh],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Za extends T(g(y)){static get template(){return _`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]</slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:Rc},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/t**i).toFixed(n))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(let n=0;n<t.length&&e>0;n++)i[n]=e%t[n],e=Math.floor(e/t[n]);return i}_formatTime(e,t){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([t,i])=>{e.setRequestHeader(t,i)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,n){e.elapsed=n,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(n*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/n/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=e||this.files,e=e.filter(t=>!t.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr();let n,o;i.upload.onprogress=u=>{clearTimeout(n),o=Date.now();const c=(o-t)/1e3,d=u.loaded,h=u.total,f=~~(d/h*100);e.loaded=d,e.progress=f,e.indeterminate=d<=0||d>=h,e.error?e.indeterminate=e.status=void 0:e.abort||(f<100?(this._setStatus(e,h,d,c),n=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(n),e.indeterminate=e.uploading=!1,e.abort){this._notifyFileChanges(e);return}if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;i.status===0?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const a=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;a.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:a},cancelable:!0}))&&i.send(a)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){const t=`files.${this.files.indexOf(e)}.`;Object.keys(e).forEach(i=>{this.notifyPath(t+i,e[i])})}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const t=e.name.match(/\.[^.]*$|$/)[0],i=this.accept.replace(/[+.]/g,"\\$&"),n=new RegExp(`^(${i.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")})$`,"i");if(this.accept&&!(n.test(e.type)||n.test(t))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_onFileReject(e){oe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_onUploadStart(e){oe(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){oe(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){oe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return e===1?t.one:t.many}_isMultiple(e){return e!==1}}customElements.define(Za.is,Za);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class es extends T(pe(g(y))){static get template(){return _`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Fc({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new lo(this),this.addController(this.__overflowController),Qr(this)}scrollToIndex(e){this.__virtualizer.scrollToIndex(e)}__createElements(e){return[...Array(e)].map(()=>document.createElement("div"))}__updateElement(e,t){e.__renderer!==this.renderer&&(e.__renderer=this.renderer,this.__clearRenderTargetContent(e)),this.renderer&&this.renderer(e,this,{item:this.items[t],index:t})}__clearRenderTargetContent(e){e.innerHTML="",delete e._$litPart$}__itemsOrRendererChanged(e,t,i){const n=this.childElementCount>0;(t||n)&&i&&(i.size=(e||[]).length,i.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(es.is,es);(function(){function r(t){const i=t._overlayElement;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&r(i.target)})});window.Vaadin.Flow.confirmDialogConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&r(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),r(t))}}})();function M(r,e){if(e.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+e.length+" present")}function yt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yt=function(t){return typeof t}:yt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(r)}function Qh(r){return M(1,arguments),r instanceof Date||yt(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function vt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vt=function(t){return typeof t}:vt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(r)}function L(r){M(1,arguments);var e=Object.prototype.toString.call(r);return r instanceof Date||vt(r)==="object"&&e==="[object Date]"?new Date(r.getTime()):typeof r=="number"||e==="[object Number]"?new Date(r):((typeof r=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Pi(r){if(M(1,arguments),!Qh(r)&&typeof r!="number")return!1;var e=L(r);return!isNaN(Number(e))}function Y(r){if(r===null||r===!0||r===!1)return NaN;var e=Number(r);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Xh(r,e){M(2,arguments);var t=L(r).getTime(),i=Y(e);return new Date(t+i)}function Ou(r,e){M(2,arguments);var t=Y(e);return Xh(r,-t)}var Kh=864e5;function Jh(r){M(1,arguments);var e=L(r),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),n=t-i;return Math.floor(n/Kh)+1}function ke(r){M(1,arguments);var e=1,t=L(r),i=t.getUTCDay(),n=(i<e?7:0)+i-e;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function ku(r){M(1,arguments);var e=L(r),t=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(t+1,0,4),i.setUTCHours(0,0,0,0);var n=ke(i),o=new Date(0);o.setUTCFullYear(t,0,4),o.setUTCHours(0,0,0,0);var a=ke(o);return e.getTime()>=n.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Zh(r){M(1,arguments);var e=ku(r),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var i=ke(t);return i}var ef=6048e5;function Du(r){M(1,arguments);var e=L(r),t=ke(e).getTime()-Zh(e).getTime();return Math.round(t/ef)+1}var tf={};function Re(){return tf}function Ce(r,e){var t,i,n,o,a,s,l,u;M(1,arguments);var c=Re(),d=Y((t=(i=(n=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(a=e.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&i!==void 0?i:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=L(r),f=h.getUTCDay(),v=(f<d?7:0)+f-d;return h.setUTCDate(h.getUTCDate()-v),h.setUTCHours(0,0,0,0),h}function uo(r,e){var t,i,n,o,a,s,l,u;M(1,arguments);var c=L(r),d=c.getUTCFullYear(),h=Re(),f=Y((t=(i=(n=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(a=e.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&i!==void 0?i:(l=h.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(d+1,0,f),v.setUTCHours(0,0,0,0);var A=Ce(v,e),w=new Date(0);w.setUTCFullYear(d,0,f),w.setUTCHours(0,0,0,0);var I=Ce(w,e);return c.getTime()>=A.getTime()?d+1:c.getTime()>=I.getTime()?d:d-1}function rf(r,e){var t,i,n,o,a,s,l,u;M(1,arguments);var c=Re(),d=Y((t=(i=(n=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(a=e.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:c.firstWeekContainsDate)!==null&&i!==void 0?i:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),h=uo(r,e),f=new Date(0);f.setUTCFullYear(h,0,d),f.setUTCHours(0,0,0,0);var v=Ce(f,e);return v}var nf=6048e5;function $u(r,e){M(1,arguments);var t=L(r),i=Ce(t,e).getTime()-rf(t,e).getTime();return Math.round(i/nf)+1}function x(r,e){for(var t=r<0?"-":"",i=Math.abs(r).toString();i.length<e;)i="0"+i;return t+i}var of={y:function(e,t){var i=e.getUTCFullYear(),n=i>0?i:1-i;return x(t==="yy"?n%100:n,t.length)},M:function(e,t){var i=e.getUTCMonth();return t==="M"?String(i+1):x(i+1,2)},d:function(e,t){return x(e.getUTCDate(),t.length)},a:function(e,t){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h:function(e,t){return x(e.getUTCHours()%12||12,t.length)},H:function(e,t){return x(e.getUTCHours(),t.length)},m:function(e,t){return x(e.getUTCMinutes(),t.length)},s:function(e,t){return x(e.getUTCSeconds(),t.length)},S:function(e,t){var i=t.length,n=e.getUTCMilliseconds(),o=Math.floor(n*Math.pow(10,i-3));return x(o,t.length)}};const ue=of;var Te={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},af={G:function(e,t,i){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"});case"GGGGG":return i.era(n,{width:"narrow"});case"GGGG":default:return i.era(n,{width:"wide"})}},y:function(e,t,i){if(t==="yo"){var n=e.getUTCFullYear(),o=n>0?n:1-n;return i.ordinalNumber(o,{unit:"year"})}return ue.y(e,t)},Y:function(e,t,i,n){var o=uo(e,n),a=o>0?o:1-o;if(t==="YY"){var s=a%100;return x(s,2)}return t==="Yo"?i.ordinalNumber(a,{unit:"year"}):x(a,t.length)},R:function(e,t){var i=ku(e);return x(i,t.length)},u:function(e,t){var i=e.getUTCFullYear();return x(i,t.length)},Q:function(e,t,i){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return x(n,2);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,i){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return x(n,2);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,i){var n=e.getUTCMonth();switch(t){case"M":case"MM":return ue.M(e,t);case"Mo":return i.ordinalNumber(n+1,{unit:"month"});case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,i){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return x(n+1,2);case"Lo":return i.ordinalNumber(n+1,{unit:"month"});case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,i,n){var o=$u(e,n);return t==="wo"?i.ordinalNumber(o,{unit:"week"}):x(o,t.length)},I:function(e,t,i){var n=Du(e);return t==="Io"?i.ordinalNumber(n,{unit:"week"}):x(n,t.length)},d:function(e,t,i){return t==="do"?i.ordinalNumber(e.getUTCDate(),{unit:"date"}):ue.d(e,t)},D:function(e,t,i){var n=Jh(e);return t==="Do"?i.ordinalNumber(n,{unit:"dayOfYear"}):x(n,t.length)},E:function(e,t,i){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"});case"EEEE":default:return i.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,i,n){var o=e.getUTCDay(),a=(o-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return x(a,2);case"eo":return i.ordinalNumber(a,{unit:"day"});case"eee":return i.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(o,{width:"short",context:"formatting"});case"eeee":default:return i.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,i,n){var o=e.getUTCDay(),a=(o-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return x(a,t.length);case"co":return i.ordinalNumber(a,{unit:"day"});case"ccc":return i.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(o,{width:"narrow",context:"standalone"});case"cccccc":return i.day(o,{width:"short",context:"standalone"});case"cccc":default:return i.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,i){var n=e.getUTCDay(),o=n===0?7:n;switch(t){case"i":return String(o);case"ii":return x(o,t.length);case"io":return i.ordinalNumber(o,{unit:"day"});case"iii":return i.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(n,{width:"short",context:"formatting"});case"iiii":default:return i.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,i){var n=e.getUTCHours(),o=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,i){var n=e.getUTCHours(),o;switch(n===12?o=Te.noon:n===0?o=Te.midnight:o=n/12>=1?"pm":"am",t){case"b":case"bb":return i.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,i){var n=e.getUTCHours(),o;switch(n>=17?o=Te.evening:n>=12?o=Te.afternoon:n>=4?o=Te.morning:o=Te.night,t){case"B":case"BB":case"BBB":return i.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,i){if(t==="ho"){var n=e.getUTCHours()%12;return n===0&&(n=12),i.ordinalNumber(n,{unit:"hour"})}return ue.h(e,t)},H:function(e,t,i){return t==="Ho"?i.ordinalNumber(e.getUTCHours(),{unit:"hour"}):ue.H(e,t)},K:function(e,t,i){var n=e.getUTCHours()%12;return t==="Ko"?i.ordinalNumber(n,{unit:"hour"}):x(n,t.length)},k:function(e,t,i){var n=e.getUTCHours();return n===0&&(n=24),t==="ko"?i.ordinalNumber(n,{unit:"hour"}):x(n,t.length)},m:function(e,t,i){return t==="mo"?i.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):ue.m(e,t)},s:function(e,t,i){return t==="so"?i.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):ue.s(e,t)},S:function(e,t){return ue.S(e,t)},X:function(e,t,i,n){var o=n._originalDate||e,a=o.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return rs(a);case"XXXX":case"XX":return ve(a);case"XXXXX":case"XXX":default:return ve(a,":")}},x:function(e,t,i,n){var o=n._originalDate||e,a=o.getTimezoneOffset();switch(t){case"x":return rs(a);case"xxxx":case"xx":return ve(a);case"xxxxx":case"xxx":default:return ve(a,":")}},O:function(e,t,i,n){var o=n._originalDate||e,a=o.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ts(a,":");case"OOOO":default:return"GMT"+ve(a,":")}},z:function(e,t,i,n){var o=n._originalDate||e,a=o.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ts(a,":");case"zzzz":default:return"GMT"+ve(a,":")}},t:function(e,t,i,n){var o=n._originalDate||e,a=Math.floor(o.getTime()/1e3);return x(a,t.length)},T:function(e,t,i,n){var o=n._originalDate||e,a=o.getTime();return x(a,t.length)}};function ts(r,e){var t=r>0?"-":"+",i=Math.abs(r),n=Math.floor(i/60),o=i%60;if(o===0)return t+String(n);var a=e||"";return t+String(n)+a+x(o,2)}function rs(r,e){if(r%60===0){var t=r>0?"-":"+";return t+x(Math.abs(r)/60,2)}return ve(r,e)}function ve(r,e){var t=e||"",i=r>0?"-":"+",n=Math.abs(r),o=x(Math.floor(n/60),2),a=x(n%60,2);return i+o+t+a}const sf=af;var is=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Mu=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},lf=function(e,t){var i=e.match(/(P+)(p+)?/)||[],n=i[1],o=i[2];if(!o)return is(e,t);var a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",is(n,t)).replace("{{time}}",Mu(o,t))},uf={p:Mu,P:lf};const Oi=uf;function Ru(r){var e=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return e.setUTCFullYear(r.getFullYear()),r.getTime()-e.getTime()}var cf=["D","DD"],df=["YY","YYYY"];function Fu(r){return cf.indexOf(r)!==-1}function Bu(r){return df.indexOf(r)!==-1}function ur(r,e,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var hf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ff=function(e,t,i){var n,o=hf[e];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",t.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+n:n+" ago":n};const pf=ff;function ui(r){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):r.defaultWidth,i=r.formats[t]||r.formats[r.defaultWidth];return i}}var mf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_f={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vf={date:ui({formats:mf,defaultWidth:"full"}),time:ui({formats:_f,defaultWidth:"full"}),dateTime:ui({formats:yf,defaultWidth:"full"})};const gf=vf;var bf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Af=function(e,t,i,n){return bf[e]};const wf=Af;function He(r){return function(e,t){var i=t!=null&&t.context?String(t.context):"standalone",n;if(i==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,a=t!=null&&t.width?String(t.width):o;n=r.formattingValues[a]||r.formattingValues[o]}else{var s=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;n=r.values[l]||r.values[s]}var u=r.argumentCallback?r.argumentCallback(e):e;return n[u]}}var xf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Cf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Sf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ef={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},If={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Pf=function(e,t){var i=Number(e),n=i%100;if(n>20||n<10)switch(n%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},Of={ordinalNumber:Pf,era:He({values:xf,defaultWidth:"wide"}),quarter:He({values:Cf,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:He({values:Sf,defaultWidth:"wide"}),day:He({values:Ef,defaultWidth:"wide"}),dayPeriod:He({values:Tf,defaultWidth:"wide",formattingValues:If,defaultFormattingWidth:"wide"})};const kf=Of;function Ue(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,n=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],o=e.match(n);if(!o)return null;var a=o[0],s=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?$f(s,function(d){return d.test(a)}):Df(s,function(d){return d.test(a)}),u;u=r.valueCallback?r.valueCallback(l):l,u=t.valueCallback?t.valueCallback(u):u;var c=e.slice(a.length);return{value:u,rest:c}}}function Df(r,e){for(var t in r)if(r.hasOwnProperty(t)&&e(r[t]))return t}function $f(r,e){for(var t=0;t<r.length;t++)if(e(r[t]))return t}function Mf(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(r.matchPattern);if(!i)return null;var n=i[0],o=e.match(r.parsePattern);if(!o)return null;var a=r.valueCallback?r.valueCallback(o[0]):o[0];a=t.valueCallback?t.valueCallback(a):a;var s=e.slice(n.length);return{value:a,rest:s}}}var Rf=/^(\d+)(th|st|nd|rd)?/i,Ff=/\d+/i,Bf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Nf={any:[/^b/i,/^(a|c)/i]},Lf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vf={any:[/1/i,/2/i,/3/i,/4/i]},zf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Yf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Hf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Uf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wf={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jf={ordinalNumber:Mf({matchPattern:Rf,parsePattern:Ff,valueCallback:function(e){return parseInt(e,10)}}),era:Ue({matchPatterns:Bf,defaultMatchWidth:"wide",parsePatterns:Nf,defaultParseWidth:"any"}),quarter:Ue({matchPatterns:Lf,defaultMatchWidth:"wide",parsePatterns:Vf,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ue({matchPatterns:zf,defaultMatchWidth:"wide",parsePatterns:Yf,defaultParseWidth:"any"}),day:Ue({matchPatterns:Hf,defaultMatchWidth:"wide",parsePatterns:Uf,defaultParseWidth:"any"}),dayPeriod:Ue({matchPatterns:Wf,defaultMatchWidth:"any",parsePatterns:qf,defaultParseWidth:"any"})};const Gf=jf;var Qf={code:"en-US",formatDistance:pf,formatLong:gf,formatRelative:wf,localize:kf,match:Gf,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Nu=Qf;var Xf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jf=/^'([^]*?)'?$/,Zf=/''/g,ep=/[a-zA-Z]/;function tp(r,e,t){var i,n,o,a,s,l,u,c,d,h,f,v,A,w,I,R,q,H;M(2,arguments);var _e=String(e),$=Re(),J=(i=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:$.locale)!==null&&i!==void 0?i:Nu,ne=Y((o=(a=(s=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(u=t.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:$.firstWeekContainsDate)!==null&&a!==void 0?a:(d=$.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(ne>=1&&ne<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var se=Y((f=(v=(A=(w=t==null?void 0:t.weekStartsOn)!==null&&w!==void 0?w:t==null||(I=t.locale)===null||I===void 0||(R=I.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&A!==void 0?A:$.weekStartsOn)!==null&&v!==void 0?v:(q=$.locale)===null||q===void 0||(H=q.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&f!==void 0?f:0);if(!(se>=0&&se<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!J.localize)throw new RangeError("locale must contain localize property");if(!J.formatLong)throw new RangeError("locale must contain formatLong property");var le=L(r);if(!Pi(le))throw new RangeError("Invalid time value");var Fe=Ru(le),Be=Ou(le,Fe),Ne={firstWeekContainsDate:ne,weekStartsOn:se,locale:J,_originalDate:le},Jr=_e.match(Kf).map(function(B){var U=B[0];if(U==="p"||U==="P"){var ye=Oi[U];return ye(B,J.formatLong)}return B}).join("").match(Xf).map(function(B){if(B==="''")return"'";var U=B[0];if(U==="'")return rp(B);var ye=sf[U];if(ye)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Bu(B)&&ur(B,e,String(r)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Fu(B)&&ur(B,e,String(r)),ye(Be,B,J.localize,Ne);if(U.match(ep))throw new RangeError("Format string contains an unescaped latin alphabet character `"+U+"`");return B}).join("");return Jr}function rp(r){var e=r.match(Jf);return e?e[1].replace(Zf,"'"):r}function ip(r,e){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function gt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gt=function(t){return typeof t}:gt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(r)}function Lu(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&ki(r,e)}function ki(r,e){return ki=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},ki(r,e)}function Vu(r){var e=op();return function(){var i=cr(r),n;if(e){var o=cr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return np(this,n)}}function np(r,e){return e&&(gt(e)==="object"||typeof e=="function")?e:Di(r)}function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function op(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cr(r){return cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},cr(r)}function co(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ns(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function ho(r,e,t){return e&&ns(r.prototype,e),t&&ns(r,t),r}function $i(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ap=10,zu=function(){function r(){co(this,r),$i(this,"subPriority",0)}return ho(r,[{key:"validate",value:function(t,i){return!0}}]),r}(),sp=function(r){Lu(t,r);var e=Vu(t);function t(i,n,o,a,s){var l;return co(this,t),l=e.call(this),l.value=i,l.validateValue=n,l.setValue=o,l.priority=a,s&&(l.subPriority=s),l}return ho(t,[{key:"validate",value:function(n,o){return this.validateValue(n,this.value,o)}},{key:"set",value:function(n,o,a){return this.setValue(n,o,this.value,a)}}]),t}(zu),lp=function(r){Lu(t,r);var e=Vu(t);function t(){var i;co(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),$i(Di(i),"priority",ap),$i(Di(i),"subPriority",-1),i}return ho(t,[{key:"set",value:function(n,o){if(o.timestampIsSet)return n;var a=new Date(0);return a.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),a.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),a}}]),t}(zu);function up(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function os(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function cp(r,e,t){return e&&os(r.prototype,e),t&&os(r,t),r}var b=function(){function r(){up(this,r)}return cp(r,[{key:"run",value:function(t,i,n,o){var a=this.parse(t,i,n,o);return a?{setter:new sp(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}},{key:"validate",value:function(t,i,n){return!0}}]),r}();function bt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bt=function(t){return typeof t}:bt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bt(r)}function dp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function as(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function hp(r,e,t){return e&&as(r.prototype,e),t&&as(r,t),r}function fp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Mi(r,e)}function Mi(r,e){return Mi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Mi(r,e)}function pp(r){var e=_p();return function(){var i=dr(r),n;if(e){var o=dr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return mp(this,n)}}function mp(r,e){return e&&(bt(e)==="object"||typeof e=="function")?e:Ri(r)}function Ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dr(r){return dr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},dr(r)}function ss(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var yp=function(r){fp(t,r);var e=pp(t);function t(){var i;dp(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ss(Ri(i),"priority",140),ss(Ri(i),"incompatibleTokens",["R","u","t","T"]),i}return hp(t,[{key:"parse",value:function(n,o,a){switch(o){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})||a.era(n,{width:"abbreviated"})||a.era(n,{width:"narrow"})}}},{key:"set",value:function(n,o,a){return o.era=a,n.setUTCFullYear(a,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(b),vp=6e4,gp=36e5,bp=1e3,k={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ee={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function D(r,e){return r&&{value:e(r.value),rest:r.rest}}function P(r,e){var t=e.match(r);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function te(r,e){var t=e.match(r);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};var i=t[1]==="+"?1:-1,n=t[2]?parseInt(t[2],10):0,o=t[3]?parseInt(t[3],10):0,a=t[5]?parseInt(t[5],10):0;return{value:i*(n*gp+o*vp+a*bp),rest:e.slice(t[0].length)}}function Yu(r){return P(k.anyDigitsSigned,r)}function O(r,e){switch(r){case 1:return P(k.singleDigit,e);case 2:return P(k.twoDigits,e);case 3:return P(k.threeDigits,e);case 4:return P(k.fourDigits,e);default:return P(new RegExp("^\\d{1,"+r+"}"),e)}}function hr(r,e){switch(r){case 1:return P(k.singleDigitSigned,e);case 2:return P(k.twoDigitsSigned,e);case 3:return P(k.threeDigitsSigned,e);case 4:return P(k.fourDigitsSigned,e);default:return P(new RegExp("^-?\\d{1,"+r+"}"),e)}}function fo(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Hu(r,e){var t=e>0,i=t?e:1-e,n;if(i<=50)n=r||100;else{var o=i+50,a=Math.floor(o/100)*100,s=r>=o%100;n=r+a-(s?100:0)}return t?n:1-n}function Uu(r){return r%400===0||r%4===0&&r%100!==0}function At(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?At=function(t){return typeof t}:At=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(r)}function Ap(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ls(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function wp(r,e,t){return e&&ls(r.prototype,e),t&&ls(r,t),r}function xp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Fi(r,e)}function Fi(r,e){return Fi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Fi(r,e)}function Cp(r){var e=Ep();return function(){var i=fr(r),n;if(e){var o=fr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Sp(this,n)}}function Sp(r,e){return e&&(At(e)==="object"||typeof e=="function")?e:Bi(r)}function Bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ep(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fr(r){return fr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},fr(r)}function us(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Tp=function(r){xp(t,r);var e=Cp(t);function t(){var i;Ap(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),us(Bi(i),"priority",130),us(Bi(i),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),i}return wp(t,[{key:"parse",value:function(n,o,a){var s=function(u){return{year:u,isTwoDigitYear:o==="yy"}};switch(o){case"y":return D(O(4,n),s);case"yo":return D(a.ordinalNumber(n,{unit:"year"}),s);default:return D(O(o.length,n),s)}}},{key:"validate",value:function(n,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(n,o,a){var s=n.getUTCFullYear();if(a.isTwoDigitYear){var l=Hu(a.year,s);return n.setUTCFullYear(l,0,1),n.setUTCHours(0,0,0,0),n}var u=!("era"in o)||o.era===1?a.year:1-a.year;return n.setUTCFullYear(u,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function wt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wt=function(t){return typeof t}:wt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(r)}function Ip(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function cs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Pp(r,e,t){return e&&cs(r.prototype,e),t&&cs(r,t),r}function Op(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ni(r,e)}function Ni(r,e){return Ni=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ni(r,e)}function kp(r){var e=$p();return function(){var i=pr(r),n;if(e){var o=pr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Dp(this,n)}}function Dp(r,e){return e&&(wt(e)==="object"||typeof e=="function")?e:Li(r)}function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pr(r){return pr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},pr(r)}function ds(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Mp=function(r){Op(t,r);var e=kp(t);function t(){var i;Ip(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ds(Li(i),"priority",130),ds(Li(i),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),i}return Pp(t,[{key:"parse",value:function(n,o,a){var s=function(u){return{year:u,isTwoDigitYear:o==="YY"}};switch(o){case"Y":return D(O(4,n),s);case"Yo":return D(a.ordinalNumber(n,{unit:"year"}),s);default:return D(O(o.length,n),s)}}},{key:"validate",value:function(n,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(n,o,a,s){var l=uo(n,s);if(a.isTwoDigitYear){var u=Hu(a.year,l);return n.setUTCFullYear(u,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Ce(n,s)}var c=!("era"in o)||o.era===1?a.year:1-a.year;return n.setUTCFullYear(c,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Ce(n,s)}}]),t}(b);function xt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xt=function(t){return typeof t}:xt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(r)}function Rp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Fp(r,e,t){return e&&hs(r.prototype,e),t&&hs(r,t),r}function Bp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Vi(r,e)}function Vi(r,e){return Vi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Vi(r,e)}function Np(r){var e=Vp();return function(){var i=mr(r),n;if(e){var o=mr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Lp(this,n)}}function Lp(r,e){return e&&(xt(e)==="object"||typeof e=="function")?e:zi(r)}function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mr(r){return mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},mr(r)}function fs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var zp=function(r){Bp(t,r);var e=Np(t);function t(){var i;Rp(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),fs(zi(i),"priority",130),fs(zi(i),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),i}return Fp(t,[{key:"parse",value:function(n,o){return hr(o==="R"?4:o.length,n)}},{key:"set",value:function(n,o,a){var s=new Date(0);return s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0),ke(s)}}]),t}(b);function Ct(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ct=function(t){return typeof t}:Ct=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(r)}function Yp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ps(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Hp(r,e,t){return e&&ps(r.prototype,e),t&&ps(r,t),r}function Up(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Yi(r,e)}function Yi(r,e){return Yi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Yi(r,e)}function Wp(r){var e=jp();return function(){var i=_r(r),n;if(e){var o=_r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return qp(this,n)}}function qp(r,e){return e&&(Ct(e)==="object"||typeof e=="function")?e:Hi(r)}function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _r(r){return _r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_r(r)}function ms(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Gp=function(r){Up(t,r);var e=Wp(t);function t(){var i;Yp(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ms(Hi(i),"priority",130),ms(Hi(i),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),i}return Hp(t,[{key:"parse",value:function(n,o){return hr(o==="u"?4:o.length,n)}},{key:"set",value:function(n,o,a){return n.setUTCFullYear(a,0,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function St(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?St=function(t){return typeof t}:St=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(r)}function Qp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _s(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Xp(r,e,t){return e&&_s(r.prototype,e),t&&_s(r,t),r}function Kp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ui(r,e)}function Ui(r,e){return Ui=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ui(r,e)}function Jp(r){var e=em();return function(){var i=yr(r),n;if(e){var o=yr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Zp(this,n)}}function Zp(r,e){return e&&(St(e)==="object"||typeof e=="function")?e:Wi(r)}function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function em(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yr(r){return yr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},yr(r)}function ys(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var tm=function(r){Kp(t,r);var e=Jp(t);function t(){var i;Qp(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ys(Wi(i),"priority",120),ys(Wi(i),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),i}return Xp(t,[{key:"parse",value:function(n,o,a){switch(o){case"Q":case"QQ":return O(o.length,n);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})||a.quarter(n,{width:"abbreviated",context:"formatting"})||a.quarter(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,o){return o>=1&&o<=4}},{key:"set",value:function(n,o,a){return n.setUTCMonth((a-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function Et(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Et=function(t){return typeof t}:Et=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(r)}function rm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function vs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function im(r,e,t){return e&&vs(r.prototype,e),t&&vs(r,t),r}function nm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&qi(r,e)}function qi(r,e){return qi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},qi(r,e)}function om(r){var e=sm();return function(){var i=vr(r),n;if(e){var o=vr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return am(this,n)}}function am(r,e){return e&&(Et(e)==="object"||typeof e=="function")?e:ji(r)}function ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vr(r){return vr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},vr(r)}function gs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var lm=function(r){nm(t,r);var e=om(t);function t(){var i;rm(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),gs(ji(i),"priority",120),gs(ji(i),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),i}return im(t,[{key:"parse",value:function(n,o,a){switch(o){case"q":case"qq":return O(o.length,n);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})||a.quarter(n,{width:"abbreviated",context:"standalone"})||a.quarter(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,o){return o>=1&&o<=4}},{key:"set",value:function(n,o,a){return n.setUTCMonth((a-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function Tt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tt=function(t){return typeof t}:Tt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(r)}function um(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function bs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function cm(r,e,t){return e&&bs(r.prototype,e),t&&bs(r,t),r}function dm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Gi(r,e)}function Gi(r,e){return Gi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Gi(r,e)}function hm(r){var e=pm();return function(){var i=gr(r),n;if(e){var o=gr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return fm(this,n)}}function fm(r,e){return e&&(Tt(e)==="object"||typeof e=="function")?e:Qi(r)}function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gr(r){return gr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},gr(r)}function As(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var mm=function(r){dm(t,r);var e=hm(t);function t(){var i;um(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),As(Qi(i),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),As(Qi(i),"priority",110),i}return cm(t,[{key:"parse",value:function(n,o,a){var s=function(u){return u-1};switch(o){case"M":return D(P(k.month,n),s);case"MM":return D(O(2,n),s);case"Mo":return D(a.ordinalNumber(n,{unit:"month"}),s);case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})||a.month(n,{width:"abbreviated",context:"formatting"})||a.month(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,o){return o>=0&&o<=11}},{key:"set",value:function(n,o,a){return n.setUTCMonth(a,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function It(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?It=function(t){return typeof t}:It=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},It(r)}function _m(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ws(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function ym(r,e,t){return e&&ws(r.prototype,e),t&&ws(r,t),r}function vm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Xi(r,e)}function Xi(r,e){return Xi=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Xi(r,e)}function gm(r){var e=Am();return function(){var i=br(r),n;if(e){var o=br(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return bm(this,n)}}function bm(r,e){return e&&(It(e)==="object"||typeof e=="function")?e:Ki(r)}function Ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Am(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function br(r){return br=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},br(r)}function xs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var wm=function(r){vm(t,r);var e=gm(t);function t(){var i;_m(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),xs(Ki(i),"priority",110),xs(Ki(i),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),i}return ym(t,[{key:"parse",value:function(n,o,a){var s=function(u){return u-1};switch(o){case"L":return D(P(k.month,n),s);case"LL":return D(O(2,n),s);case"Lo":return D(a.ordinalNumber(n,{unit:"month"}),s);case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})||a.month(n,{width:"abbreviated",context:"standalone"})||a.month(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,o){return o>=0&&o<=11}},{key:"set",value:function(n,o,a){return n.setUTCMonth(a,1),n.setUTCHours(0,0,0,0),n}}]),t}(b);function xm(r,e,t){M(2,arguments);var i=L(r),n=Y(e),o=$u(i,t)-n;return i.setUTCDate(i.getUTCDate()-o*7),i}function Pt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pt=function(t){return typeof t}:Pt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt(r)}function Cm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Cs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Sm(r,e,t){return e&&Cs(r.prototype,e),t&&Cs(r,t),r}function Em(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ji(r,e)}function Ji(r,e){return Ji=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ji(r,e)}function Tm(r){var e=Pm();return function(){var i=Ar(r),n;if(e){var o=Ar(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Im(this,n)}}function Im(r,e){return e&&(Pt(e)==="object"||typeof e=="function")?e:Zi(r)}function Zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ar(r){return Ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ar(r)}function Ss(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Om=function(r){Em(t,r);var e=Tm(t);function t(){var i;Cm(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Ss(Zi(i),"priority",100),Ss(Zi(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),i}return Sm(t,[{key:"parse",value:function(n,o,a){switch(o){case"w":return P(k.week,n);case"wo":return a.ordinalNumber(n,{unit:"week"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=1&&o<=53}},{key:"set",value:function(n,o,a,s){return Ce(xm(n,a,s),s)}}]),t}(b);function km(r,e){M(2,arguments);var t=L(r),i=Y(e),n=Du(t)-i;return t.setUTCDate(t.getUTCDate()-n*7),t}function Ot(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ot=function(t){return typeof t}:Ot=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot(r)}function Dm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Es(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function $m(r,e,t){return e&&Es(r.prototype,e),t&&Es(r,t),r}function Mm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&en(r,e)}function en(r,e){return en=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},en(r,e)}function Rm(r){var e=Bm();return function(){var i=wr(r),n;if(e){var o=wr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Fm(this,n)}}function Fm(r,e){return e&&(Ot(e)==="object"||typeof e=="function")?e:tn(r)}function tn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wr(r){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},wr(r)}function Ts(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Nm=function(r){Mm(t,r);var e=Rm(t);function t(){var i;Dm(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Ts(tn(i),"priority",100),Ts(tn(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),i}return $m(t,[{key:"parse",value:function(n,o,a){switch(o){case"I":return P(k.week,n);case"Io":return a.ordinalNumber(n,{unit:"week"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=1&&o<=53}},{key:"set",value:function(n,o,a){return ke(km(n,a))}}]),t}(b);function kt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?kt=function(t){return typeof t}:kt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kt(r)}function Lm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Is(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Vm(r,e,t){return e&&Is(r.prototype,e),t&&Is(r,t),r}function zm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&rn(r,e)}function rn(r,e){return rn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},rn(r,e)}function Ym(r){var e=Um();return function(){var i=xr(r),n;if(e){var o=xr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Hm(this,n)}}function Hm(r,e){return e&&(kt(e)==="object"||typeof e=="function")?e:Dt(r)}function Dt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Um(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xr(r){return xr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},xr(r)}function ci(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Wm=[31,28,31,30,31,30,31,31,30,31,30,31],qm=[31,29,31,30,31,30,31,31,30,31,30,31],jm=function(r){zm(t,r);var e=Ym(t);function t(){var i;Lm(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ci(Dt(i),"priority",90),ci(Dt(i),"subPriority",1),ci(Dt(i),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),i}return Vm(t,[{key:"parse",value:function(n,o,a){switch(o){case"d":return P(k.date,n);case"do":return a.ordinalNumber(n,{unit:"date"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){var a=n.getUTCFullYear(),s=Uu(a),l=n.getUTCMonth();return s?o>=1&&o<=qm[l]:o>=1&&o<=Wm[l]}},{key:"set",value:function(n,o,a){return n.setUTCDate(a),n.setUTCHours(0,0,0,0),n}}]),t}(b);function $t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$t=function(t){return typeof t}:$t=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(r)}function Gm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ps(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Qm(r,e,t){return e&&Ps(r.prototype,e),t&&Ps(r,t),r}function Xm(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&nn(r,e)}function nn(r,e){return nn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},nn(r,e)}function Km(r){var e=Zm();return function(){var i=Cr(r),n;if(e){var o=Cr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Jm(this,n)}}function Jm(r,e){return e&&($t(e)==="object"||typeof e=="function")?e:Mt(r)}function Mt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cr(r){return Cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Cr(r)}function di(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var e_=function(r){Xm(t,r);var e=Km(t);function t(){var i;Gm(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),di(Mt(i),"priority",90),di(Mt(i),"subpriority",1),di(Mt(i),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),i}return Qm(t,[{key:"parse",value:function(n,o,a){switch(o){case"D":case"DD":return P(k.dayOfYear,n);case"Do":return a.ordinalNumber(n,{unit:"date"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){var a=n.getUTCFullYear(),s=Uu(a);return s?o>=1&&o<=366:o>=1&&o<=365}},{key:"set",value:function(n,o,a){return n.setUTCMonth(0,a),n.setUTCHours(0,0,0,0),n}}]),t}(b);function po(r,e,t){var i,n,o,a,s,l,u,c;M(2,arguments);var d=Re(),h=Y((i=(n=(o=(a=t==null?void 0:t.weekStartsOn)!==null&&a!==void 0?a:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&o!==void 0?o:d.weekStartsOn)!==null&&n!==void 0?n:(u=d.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&i!==void 0?i:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=L(r),v=Y(e),A=f.getUTCDay(),w=v%7,I=(w+7)%7,R=(I<h?7:0)+v-A;return f.setUTCDate(f.getUTCDate()+R),f}function Rt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rt=function(t){return typeof t}:Rt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rt(r)}function t_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Os(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function r_(r,e,t){return e&&Os(r.prototype,e),t&&Os(r,t),r}function i_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&on(r,e)}function on(r,e){return on=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},on(r,e)}function n_(r){var e=a_();return function(){var i=Sr(r),n;if(e){var o=Sr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return o_(this,n)}}function o_(r,e){return e&&(Rt(e)==="object"||typeof e=="function")?e:an(r)}function an(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function a_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sr(r){return Sr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Sr(r)}function ks(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var s_=function(r){i_(t,r);var e=n_(t);function t(){var i;t_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ks(an(i),"priority",90),ks(an(i),"incompatibleTokens",["D","i","e","c","t","T"]),i}return r_(t,[{key:"parse",value:function(n,o,a){switch(o){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,o){return o>=0&&o<=6}},{key:"set",value:function(n,o,a,s){return n=po(n,a,s),n.setUTCHours(0,0,0,0),n}}]),t}(b);function Ft(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ft=function(t){return typeof t}:Ft=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ft(r)}function l_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ds(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function u_(r,e,t){return e&&Ds(r.prototype,e),t&&Ds(r,t),r}function c_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&sn(r,e)}function sn(r,e){return sn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},sn(r,e)}function d_(r){var e=f_();return function(){var i=Er(r),n;if(e){var o=Er(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return h_(this,n)}}function h_(r,e){return e&&(Ft(e)==="object"||typeof e=="function")?e:ln(r)}function ln(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function f_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Er(r){return Er=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Er(r)}function $s(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var p_=function(r){c_(t,r);var e=d_(t);function t(){var i;l_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),$s(ln(i),"priority",90),$s(ln(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),i}return u_(t,[{key:"parse",value:function(n,o,a,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(o){case"e":case"ee":return D(O(o.length,n),l);case"eo":return D(a.ordinalNumber(n,{unit:"day"}),l);case"eee":return a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,o){return o>=0&&o<=6}},{key:"set",value:function(n,o,a,s){return n=po(n,a,s),n.setUTCHours(0,0,0,0),n}}]),t}(b);function Bt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bt=function(t){return typeof t}:Bt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(r)}function m_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ms(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function __(r,e,t){return e&&Ms(r.prototype,e),t&&Ms(r,t),r}function y_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&un(r,e)}function un(r,e){return un=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},un(r,e)}function v_(r){var e=b_();return function(){var i=Tr(r),n;if(e){var o=Tr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return g_(this,n)}}function g_(r,e){return e&&(Bt(e)==="object"||typeof e=="function")?e:cn(r)}function cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function b_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tr(r){return Tr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Tr(r)}function Rs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var A_=function(r){y_(t,r);var e=v_(t);function t(){var i;m_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Rs(cn(i),"priority",90),Rs(cn(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),i}return __(t,[{key:"parse",value:function(n,o,a,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(o){case"c":case"cc":return D(O(o.length,n),l);case"co":return D(a.ordinalNumber(n,{unit:"day"}),l);case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})||a.day(n,{width:"abbreviated",context:"standalone"})||a.day(n,{width:"short",context:"standalone"})||a.day(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,o){return o>=0&&o<=6}},{key:"set",value:function(n,o,a,s){return n=po(n,a,s),n.setUTCHours(0,0,0,0),n}}]),t}(b);function w_(r,e){M(2,arguments);var t=Y(e);t%7===0&&(t=t-7);var i=1,n=L(r),o=n.getUTCDay(),a=t%7,s=(a+7)%7,l=(s<i?7:0)+t-o;return n.setUTCDate(n.getUTCDate()+l),n}function Nt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Nt=function(t){return typeof t}:Nt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nt(r)}function x_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Fs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function C_(r,e,t){return e&&Fs(r.prototype,e),t&&Fs(r,t),r}function S_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&dn(r,e)}function dn(r,e){return dn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},dn(r,e)}function E_(r){var e=I_();return function(){var i=Ir(r),n;if(e){var o=Ir(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return T_(this,n)}}function T_(r,e){return e&&(Nt(e)==="object"||typeof e=="function")?e:hn(r)}function hn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function I_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ir(r){return Ir=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ir(r)}function Bs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var P_=function(r){S_(t,r);var e=E_(t);function t(){var i;x_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Bs(hn(i),"priority",90),Bs(hn(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),i}return C_(t,[{key:"parse",value:function(n,o,a){var s=function(u){return u===0?7:u};switch(o){case"i":case"ii":return O(o.length,n);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return D(a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return D(a.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return D(a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return D(a.day(n,{width:"wide",context:"formatting"})||a.day(n,{width:"abbreviated",context:"formatting"})||a.day(n,{width:"short",context:"formatting"})||a.day(n,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(n,o){return o>=1&&o<=7}},{key:"set",value:function(n,o,a){return n=w_(n,a),n.setUTCHours(0,0,0,0),n}}]),t}(b);function Lt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Lt=function(t){return typeof t}:Lt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lt(r)}function O_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ns(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function k_(r,e,t){return e&&Ns(r.prototype,e),t&&Ns(r,t),r}function D_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&fn(r,e)}function fn(r,e){return fn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},fn(r,e)}function $_(r){var e=R_();return function(){var i=Pr(r),n;if(e){var o=Pr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return M_(this,n)}}function M_(r,e){return e&&(Lt(e)==="object"||typeof e=="function")?e:pn(r)}function pn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function R_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pr(r){return Pr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Pr(r)}function Ls(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var F_=function(r){D_(t,r);var e=$_(t);function t(){var i;O_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Ls(pn(i),"priority",80),Ls(pn(i),"incompatibleTokens",["b","B","H","k","t","T"]),i}return k_(t,[{key:"parse",value:function(n,o,a){switch(o){case"a":case"aa":case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,o,a){return n.setUTCHours(fo(a),0,0,0),n}}]),t}(b);function Vt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Vt=function(t){return typeof t}:Vt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vt(r)}function B_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Vs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function N_(r,e,t){return e&&Vs(r.prototype,e),t&&Vs(r,t),r}function L_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&mn(r,e)}function mn(r,e){return mn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},mn(r,e)}function V_(r){var e=Y_();return function(){var i=Or(r),n;if(e){var o=Or(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return z_(this,n)}}function z_(r,e){return e&&(Vt(e)==="object"||typeof e=="function")?e:_n(r)}function _n(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Y_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Or(r){return Or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Or(r)}function zs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var H_=function(r){L_(t,r);var e=V_(t);function t(){var i;B_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),zs(_n(i),"priority",80),zs(_n(i),"incompatibleTokens",["a","B","H","k","t","T"]),i}return N_(t,[{key:"parse",value:function(n,o,a){switch(o){case"b":case"bb":case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,o,a){return n.setUTCHours(fo(a),0,0,0),n}}]),t}(b);function zt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zt=function(t){return typeof t}:zt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zt(r)}function U_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ys(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function W_(r,e,t){return e&&Ys(r.prototype,e),t&&Ys(r,t),r}function q_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&yn(r,e)}function yn(r,e){return yn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},yn(r,e)}function j_(r){var e=Q_();return function(){var i=kr(r),n;if(e){var o=kr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return G_(this,n)}}function G_(r,e){return e&&(zt(e)==="object"||typeof e=="function")?e:vn(r)}function vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Q_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function kr(r){return kr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},kr(r)}function Hs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var X_=function(r){q_(t,r);var e=j_(t);function t(){var i;U_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Hs(vn(i),"priority",80),Hs(vn(i),"incompatibleTokens",["a","b","t","T"]),i}return W_(t,[{key:"parse",value:function(n,o,a){switch(o){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})||a.dayPeriod(n,{width:"abbreviated",context:"formatting"})||a.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,o,a){return n.setUTCHours(fo(a),0,0,0),n}}]),t}(b);function Yt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yt=function(t){return typeof t}:Yt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yt(r)}function K_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Us(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function J_(r,e,t){return e&&Us(r.prototype,e),t&&Us(r,t),r}function Z_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&gn(r,e)}function gn(r,e){return gn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},gn(r,e)}function ey(r){var e=ry();return function(){var i=Dr(r),n;if(e){var o=Dr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return ty(this,n)}}function ty(r,e){return e&&(Yt(e)==="object"||typeof e=="function")?e:bn(r)}function bn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ry(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Dr(r){return Dr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Dr(r)}function Ws(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var iy=function(r){Z_(t,r);var e=ey(t);function t(){var i;K_(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Ws(bn(i),"priority",70),Ws(bn(i),"incompatibleTokens",["H","K","k","t","T"]),i}return J_(t,[{key:"parse",value:function(n,o,a){switch(o){case"h":return P(k.hour12h,n);case"ho":return a.ordinalNumber(n,{unit:"hour"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=1&&o<=12}},{key:"set",value:function(n,o,a){var s=n.getUTCHours()>=12;return s&&a<12?n.setUTCHours(a+12,0,0,0):!s&&a===12?n.setUTCHours(0,0,0,0):n.setUTCHours(a,0,0,0),n}}]),t}(b);function Ht(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ht=function(t){return typeof t}:Ht=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht(r)}function ny(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function qs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function oy(r,e,t){return e&&qs(r.prototype,e),t&&qs(r,t),r}function ay(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&An(r,e)}function An(r,e){return An=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},An(r,e)}function sy(r){var e=uy();return function(){var i=$r(r),n;if(e){var o=$r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return ly(this,n)}}function ly(r,e){return e&&(Ht(e)==="object"||typeof e=="function")?e:wn(r)}function wn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function uy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $r(r){return $r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},$r(r)}function js(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var cy=function(r){ay(t,r);var e=sy(t);function t(){var i;ny(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),js(wn(i),"priority",70),js(wn(i),"incompatibleTokens",["a","b","h","K","k","t","T"]),i}return oy(t,[{key:"parse",value:function(n,o,a){switch(o){case"H":return P(k.hour23h,n);case"Ho":return a.ordinalNumber(n,{unit:"hour"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=0&&o<=23}},{key:"set",value:function(n,o,a){return n.setUTCHours(a,0,0,0),n}}]),t}(b);function Ut(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ut=function(t){return typeof t}:Ut=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(r)}function dy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Gs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function hy(r,e,t){return e&&Gs(r.prototype,e),t&&Gs(r,t),r}function fy(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&xn(r,e)}function xn(r,e){return xn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},xn(r,e)}function py(r){var e=_y();return function(){var i=Mr(r),n;if(e){var o=Mr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return my(this,n)}}function my(r,e){return e&&(Ut(e)==="object"||typeof e=="function")?e:Cn(r)}function Cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Mr(r){return Mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Mr(r)}function Qs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var yy=function(r){fy(t,r);var e=py(t);function t(){var i;dy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Qs(Cn(i),"priority",70),Qs(Cn(i),"incompatibleTokens",["h","H","k","t","T"]),i}return hy(t,[{key:"parse",value:function(n,o,a){switch(o){case"K":return P(k.hour11h,n);case"Ko":return a.ordinalNumber(n,{unit:"hour"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=0&&o<=11}},{key:"set",value:function(n,o,a){var s=n.getUTCHours()>=12;return s&&a<12?n.setUTCHours(a+12,0,0,0):n.setUTCHours(a,0,0,0),n}}]),t}(b);function Wt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wt=function(t){return typeof t}:Wt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(r)}function vy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Xs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function gy(r,e,t){return e&&Xs(r.prototype,e),t&&Xs(r,t),r}function by(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Sn(r,e)}function Sn(r,e){return Sn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Sn(r,e)}function Ay(r){var e=xy();return function(){var i=Rr(r),n;if(e){var o=Rr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return wy(this,n)}}function wy(r,e){return e&&(Wt(e)==="object"||typeof e=="function")?e:En(r)}function En(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Rr(r){return Rr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Rr(r)}function Ks(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Cy=function(r){by(t,r);var e=Ay(t);function t(){var i;vy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Ks(En(i),"priority",70),Ks(En(i),"incompatibleTokens",["a","b","h","H","K","t","T"]),i}return gy(t,[{key:"parse",value:function(n,o,a){switch(o){case"k":return P(k.hour24h,n);case"ko":return a.ordinalNumber(n,{unit:"hour"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=1&&o<=24}},{key:"set",value:function(n,o,a){var s=a<=24?a%24:a;return n.setUTCHours(s,0,0,0),n}}]),t}(b);function qt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qt=function(t){return typeof t}:qt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qt(r)}function Sy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Js(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Ey(r,e,t){return e&&Js(r.prototype,e),t&&Js(r,t),r}function Ty(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Tn(r,e)}function Tn(r,e){return Tn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Tn(r,e)}function Iy(r){var e=Oy();return function(){var i=Fr(r),n;if(e){var o=Fr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Py(this,n)}}function Py(r,e){return e&&(qt(e)==="object"||typeof e=="function")?e:In(r)}function In(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Oy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Fr(r){return Fr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Fr(r)}function Zs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ky=function(r){Ty(t,r);var e=Iy(t);function t(){var i;Sy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),Zs(In(i),"priority",60),Zs(In(i),"incompatibleTokens",["t","T"]),i}return Ey(t,[{key:"parse",value:function(n,o,a){switch(o){case"m":return P(k.minute,n);case"mo":return a.ordinalNumber(n,{unit:"minute"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=0&&o<=59}},{key:"set",value:function(n,o,a){return n.setUTCMinutes(a,0,0),n}}]),t}(b);function jt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?jt=function(t){return typeof t}:jt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jt(r)}function Dy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function el(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function $y(r,e,t){return e&&el(r.prototype,e),t&&el(r,t),r}function My(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Pn(r,e)}function Pn(r,e){return Pn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Pn(r,e)}function Ry(r){var e=By();return function(){var i=Br(r),n;if(e){var o=Br(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Fy(this,n)}}function Fy(r,e){return e&&(jt(e)==="object"||typeof e=="function")?e:On(r)}function On(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function By(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Br(r){return Br=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Br(r)}function tl(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ny=function(r){My(t,r);var e=Ry(t);function t(){var i;Dy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),tl(On(i),"priority",50),tl(On(i),"incompatibleTokens",["t","T"]),i}return $y(t,[{key:"parse",value:function(n,o,a){switch(o){case"s":return P(k.second,n);case"so":return a.ordinalNumber(n,{unit:"second"});default:return O(o.length,n)}}},{key:"validate",value:function(n,o){return o>=0&&o<=59}},{key:"set",value:function(n,o,a){return n.setUTCSeconds(a,0),n}}]),t}(b);function Gt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gt=function(t){return typeof t}:Gt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt(r)}function Ly(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function rl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Vy(r,e,t){return e&&rl(r.prototype,e),t&&rl(r,t),r}function zy(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&kn(r,e)}function kn(r,e){return kn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},kn(r,e)}function Yy(r){var e=Uy();return function(){var i=Nr(r),n;if(e){var o=Nr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Hy(this,n)}}function Hy(r,e){return e&&(Gt(e)==="object"||typeof e=="function")?e:Dn(r)}function Dn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Uy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Nr(r){return Nr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Nr(r)}function il(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Wy=function(r){zy(t,r);var e=Yy(t);function t(){var i;Ly(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),il(Dn(i),"priority",30),il(Dn(i),"incompatibleTokens",["t","T"]),i}return Vy(t,[{key:"parse",value:function(n,o){var a=function(l){return Math.floor(l*Math.pow(10,-o.length+3))};return D(O(o.length,n),a)}},{key:"set",value:function(n,o,a){return n.setUTCMilliseconds(a),n}}]),t}(b);function Qt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qt=function(t){return typeof t}:Qt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qt(r)}function qy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function nl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function jy(r,e,t){return e&&nl(r.prototype,e),t&&nl(r,t),r}function Gy(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&$n(r,e)}function $n(r,e){return $n=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},$n(r,e)}function Qy(r){var e=Ky();return function(){var i=Lr(r),n;if(e){var o=Lr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Xy(this,n)}}function Xy(r,e){return e&&(Qt(e)==="object"||typeof e=="function")?e:Mn(r)}function Mn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ky(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Lr(r){return Lr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Lr(r)}function ol(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Jy=function(r){Gy(t,r);var e=Qy(t);function t(){var i;qy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ol(Mn(i),"priority",10),ol(Mn(i),"incompatibleTokens",["t","T","x"]),i}return jy(t,[{key:"parse",value:function(n,o){switch(o){case"X":return te(ee.basicOptionalMinutes,n);case"XX":return te(ee.basic,n);case"XXXX":return te(ee.basicOptionalSeconds,n);case"XXXXX":return te(ee.extendedOptionalSeconds,n);case"XXX":default:return te(ee.extended,n)}}},{key:"set",value:function(n,o,a){return o.timestampIsSet?n:new Date(n.getTime()-a)}}]),t}(b);function Xt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xt=function(t){return typeof t}:Xt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xt(r)}function Zy(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function al(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function ev(r,e,t){return e&&al(r.prototype,e),t&&al(r,t),r}function tv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Rn(r,e)}function Rn(r,e){return Rn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Rn(r,e)}function rv(r){var e=nv();return function(){var i=Vr(r),n;if(e){var o=Vr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return iv(this,n)}}function iv(r,e){return e&&(Xt(e)==="object"||typeof e=="function")?e:Fn(r)}function Fn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vr(r){return Vr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Vr(r)}function sl(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ov=function(r){tv(t,r);var e=rv(t);function t(){var i;Zy(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),sl(Fn(i),"priority",10),sl(Fn(i),"incompatibleTokens",["t","T","X"]),i}return ev(t,[{key:"parse",value:function(n,o){switch(o){case"x":return te(ee.basicOptionalMinutes,n);case"xx":return te(ee.basic,n);case"xxxx":return te(ee.basicOptionalSeconds,n);case"xxxxx":return te(ee.extendedOptionalSeconds,n);case"xxx":default:return te(ee.extended,n)}}},{key:"set",value:function(n,o,a){return o.timestampIsSet?n:new Date(n.getTime()-a)}}]),t}(b);function Kt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kt=function(t){return typeof t}:Kt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kt(r)}function av(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ll(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function sv(r,e,t){return e&&ll(r.prototype,e),t&&ll(r,t),r}function lv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Bn(r,e)}function Bn(r,e){return Bn=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Bn(r,e)}function uv(r){var e=dv();return function(){var i=zr(r),n;if(e){var o=zr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return cv(this,n)}}function cv(r,e){return e&&(Kt(e)==="object"||typeof e=="function")?e:Nn(r)}function Nn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function dv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zr(r){return zr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},zr(r)}function ul(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var hv=function(r){lv(t,r);var e=uv(t);function t(){var i;av(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),ul(Nn(i),"priority",40),ul(Nn(i),"incompatibleTokens","*"),i}return sv(t,[{key:"parse",value:function(n){return Yu(n)}},{key:"set",value:function(n,o,a){return[new Date(a*1e3),{timestampIsSet:!0}]}}]),t}(b);function Jt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jt=function(t){return typeof t}:Jt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jt(r)}function fv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function cl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function pv(r,e,t){return e&&cl(r.prototype,e),t&&cl(r,t),r}function mv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ln(r,e)}function Ln(r,e){return Ln=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ln(r,e)}function _v(r){var e=vv();return function(){var i=Yr(r),n;if(e){var o=Yr(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return yv(this,n)}}function yv(r,e){return e&&(Jt(e)==="object"||typeof e=="function")?e:Vn(r)}function Vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yr(r){return Yr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Yr(r)}function dl(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var gv=function(r){mv(t,r);var e=_v(t);function t(){var i;fv(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=e.call.apply(e,[this].concat(o)),dl(Vn(i),"priority",20),dl(Vn(i),"incompatibleTokens","*"),i}return pv(t,[{key:"parse",value:function(n){return Yu(n)}},{key:"set",value:function(n,o,a){return[new Date(a),{timestampIsSet:!0}]}}]),t}(b),bv={G:new yp,y:new Tp,Y:new Mp,R:new zp,u:new Gp,Q:new tm,q:new lm,M:new mm,L:new wm,w:new Om,I:new Nm,d:new jm,D:new e_,E:new s_,e:new p_,c:new A_,i:new P_,a:new F_,b:new H_,B:new X_,h:new iy,H:new cy,K:new yy,k:new Cy,m:new ky,s:new Ny,S:new Wy,X:new Jy,x:new ov,t:new hv,T:new gv};function Zt(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zt=function(t){return typeof t}:Zt=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zt(r)}function hl(r,e){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=Av(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(u){throw u},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,s;return{s:function(){t=r[Symbol.iterator]()},n:function(){var u=t.next();return o=u.done,u},e:function(u){a=!0,s=u},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(a)throw s}}}}function Av(r,e){if(!!r){if(typeof r=="string")return fl(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fl(r,e)}}function fl(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}var wv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,xv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cv=/^'([^]*?)'?$/,Sv=/''/g,Ev=/\S/,Tv=/[a-zA-Z]/;function pl(r,e,t,i){var n,o,a,s,l,u,c,d,h,f,v,A,w,I,R,q,H,_e;M(3,arguments);var $=String(r),J=String(e),ne=Re(),se=(n=(o=i==null?void 0:i.locale)!==null&&o!==void 0?o:ne.locale)!==null&&n!==void 0?n:Nu;if(!se.match)throw new RangeError("locale must contain match property");var le=Y((a=(s=(l=(u=i==null?void 0:i.firstWeekContainsDate)!==null&&u!==void 0?u:i==null||(c=i.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:ne.firstWeekContainsDate)!==null&&s!==void 0?s:(h=ne.locale)===null||h===void 0||(f=h.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(le>=1&&le<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Fe=Y((v=(A=(w=(I=i==null?void 0:i.weekStartsOn)!==null&&I!==void 0?I:i==null||(R=i.locale)===null||R===void 0||(q=R.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&w!==void 0?w:ne.weekStartsOn)!==null&&A!==void 0?A:(H=ne.locale)===null||H===void 0||(_e=H.options)===null||_e===void 0?void 0:_e.weekStartsOn)!==null&&v!==void 0?v:0);if(!(Fe>=0&&Fe<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(J==="")return $===""?L(t):new Date(NaN);var Be={firstWeekContainsDate:le,weekStartsOn:Fe,locale:se},Ne=[new lp],Jr=J.match(xv).map(function(F){var E=F[0];if(E in Oi){var j=Oi[E];return j(F,se.formatLong)}return F}).join("").match(wv),B=[],U=hl(Jr),ye;try{var Qu=function(){var E=ye.value;!(i!=null&&i.useAdditionalWeekYearTokens)&&Bu(E)&&ur(E,J,r),!(i!=null&&i.useAdditionalDayOfYearTokens)&&Fu(E)&&ur(E,J,r);var j=E[0],ot=bv[j];if(ot){var bo=ot.incompatibleTokens;if(Array.isArray(bo)){var Ao=B.find(function(wo){return bo.includes(wo.token)||wo.token===j});if(Ao)throw new RangeError("The format string mustn't contain `".concat(Ao.fullToken,"` and `").concat(E,"` at the same time"))}else if(ot.incompatibleTokens==="*"&&B.length>0)throw new RangeError("The format string mustn't contain `".concat(E,"` and any other token at the same time"));B.push({token:j,fullToken:E});var ei=ot.run($,E,se.match,Be);if(!ei)return{v:new Date(NaN)};Ne.push(ei.setter),$=ei.rest}else{if(j.match(Tv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");if(E==="''"?E="'":j==="'"&&(E=Iv(E)),$.indexOf(E)===0)$=$.slice(E.length);else return{v:new Date(NaN)}}};for(U.s();!(ye=U.n()).done;){var _o=Qu();if(Zt(_o)==="object")return _o.v}}catch(F){U.e(F)}finally{U.f()}if($.length>0&&Ev.test($))return new Date(NaN);var Xu=Ne.map(function(F){return F.priority}).sort(function(F,E){return E-F}).filter(function(F,E,j){return j.indexOf(F)===E}).map(function(F){return Ne.filter(function(E){return E.priority===F}).sort(function(E,j){return j.subPriority-E.subPriority})}).map(function(F){return F[0]}),Zr=L(t);if(isNaN(Zr.getTime()))return new Date(NaN);var Le=Ou(Zr,Ru(Zr)),yo={},it=hl(Xu),vo;try{for(it.s();!(vo=it.n()).done;){var go=vo.value;if(!go.validate(Le,Be))return new Date(NaN);var nt=go.set(Le,yo,Be);Array.isArray(nt)?(Le=nt[0],ip(yo,nt[1])):Le=nt}}catch(F){it.e(F)}finally{it.f()}return Le}function Iv(r){return r.match(Cv)[1].replace(Sv,"'")}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:e=>r(function(t){if(t.$connector)return;t.$connector={};const i=function(a){try{new Date().toLocaleDateString(a)}catch{return console.warn("The locale is not supported, using default locale setting(en-US)."),"M/d/yyyy"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(a,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default locale setting(en-US)."),"M/d/yyyy")},n=r(function(a){if(!a||a.length===0)throw new Error("Array of custom date formats is null or empty");function s(d){if(d.includes("yyyy")&&!d.includes("yyyyy"))return d.replace("yyyy","yy");if(d.includes("YYYY")&&!d.includes("YYYYY"))return d.replace("YYYY","YY")}function l(d){return d.includes("y")?!d.includes("yyy"):d.includes("Y")?!d.includes("YYY"):!1}function u(d){const h=a[0],f=ge(`${d.year}-${d.month+1}-${d.day}`);return tp(f,h)}function c(d){const h=o();for(let f of a){const v=s(f);if(v){const w=pl(d,v,h);if(Pi(w)){let I=w.getFullYear();return t.$connector._lastParsedYear&&I===t.$connector._lastParsedYear%100&&(I=t.$connector._lastParsedYear),{day:w.getDate(),month:w.getMonth(),year:I}}}const A=pl(d,f,h);if(Pi(A)){let w=A.getFullYear();return t.$connector._lastParsedYear&&w%100===t.$connector._lastParsedYear%100&&l(f)?w=t.$connector._lastParsedYear:t.$connector._lastParsedYear=w,{day:A.getDate(),month:A.getMonth(),year:w}}}return t.$connector._lastParsedYear=void 0,!1}return{formatDate:u,parseDate:c}});function o(){const{referenceDate:a}=t.i18n;return a?new Date(a.year,a.month-1,a.day):new Date}t.$connector.updateI18n=r(function(a,s){const l=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=ao(new Date(s.referenceDate)));const u=l?s.dateFormats:[i(a)],c=n(u);t.i18n=Object.assign({},t.i18n,s,c)})})(e)}})();window.Vaadin.Flow.ironListConnector={initLazy:function(r){if(r.$connector)return;const e=20;let t=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){let s=r._virtualStart,l=r._virtualEnd,u=Math.max(0,s-e),c=Math.min(l+e,r.items.length);if(t[0]!=u||t[1]!=c){t=[u,c];const d=1+c-u;r.$server.setRequestedRange(u,d)}};let n;const o=function(){n=De.debounce(n,Ae.after(10),i)},a=r._assignModels;r._assignModels=function(){const s=[],l=r._virtualStart,u=Math.min(r.items.length,r._physicalCount);for(let c=0;c<u;c++)r.items[l+c]===void 0&&(s.push(c),r.items[l+c]=r.$connector.placeholderItem);a.apply(r,arguments);for(let c=0;c<s.length;c++)delete r.items[l+s[c]];o()},r.items=[],r.$connector.set=function(s,l){for(let u=0;u<l.length;u++){const c=s+u;r.items[c]=l[u]}r._render()},r.$connector.updateData=function(s){const l=r.items,u={};let c=s.length;for(let d=0;d<s.length;d++){const h=s[d];u[h.key]=h}for(let d=0;d<l.length;d++){const h=l[d],f=u[h.key];if(f&&(r.items[d]=f,r.notifyPath("items."+d),c--,c==0))break}},r.$connector.clear=function(s,l){for(let u=0;u<l;u++){const c=s+u;delete r.items[c],r.notifyPath("items."+c)}},r.$connector.updateSize=function(s){const l=s-r.items.length;if(l>0)r.items.length=s,r.notifySplices("items",[{index:s-l,removed:[],addedCount:l,object:r.items,type:"splice"}]);else if(l<0){const u=r.items.slice(s,r.items.length);r.items.splice(s),r.notifySplices("items",[{index:s,removed:u,addedCount:0,object:r.items,type:"splice"}])}},r.$connector.setPlaceholderItem=function(s){s||(s={}),s.__placeholder=!0,r.$connector.placeholderItem=s}}};const Wu=document.createElement("template");Wu.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild(Wu.content);(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(e,t,i)=>r(function(n,o,a){const s=new Intl.DateTimeFormat(a,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.items=o.map(l=>l.time?Object.assign(l,{time:s.format(new Date(l.time))}):l)})(e,t,i)}})();(function(){function r(t){const i=t._card;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&r(i.target)})});window.Vaadin.Flow.notificationConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&r(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),r(t))}}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:e=>r(function(t){const i=r(function(){for(let n=0;n<t.childElementCount;n++){const o=t.children[n];if(o.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return o}});t.$connector||(t.$connector={},t.renderer=r(function(n){const o=i();o&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(o))}))})(e)}})();const Ze=window;Ze.Vaadin=Ze.Vaadin||{};Ze.Vaadin.Flow=Ze.Vaadin.Flow||{};Ze.Vaadin.Flow.tooltip={setDefaultHideDelay:r=>ti.setDefaultHideDelay(r),setDefaultFocusDelay:r=>ti.setDefaultFocusDelay(r),setDefaultHoverDelay:r=>ti.setDefaultHoverDelay(r)};(function(){let r;customElements.whenDefined("vaadin-text-field").then(()=>{class e extends customElements.get("vaadin-text-field"){static get template(){return r||(r=super.template.cloneNode(!0),r.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),r}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,n){this.allowedCharPattern="[\\d-+"+i+"]",this.value&&n&&(this.value=this.value.split(n).join(i))}}customElements.define(e.is,e)})})();const Pv={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function Ov(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qu(r){return r.replace(/[\u0660-\u0669]/g,function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return Pv[t]})}function ju(r,e){const t=e.toLocaleTimeString(r),i=/[^\d\u0660-\u0669]/,n=t.match(new RegExp(`${i.source}+$`,"g"))||t.match(new RegExp(`^${i.source}+`,"g"));return n&&n[0].trim()}function kv(r){let e=mo.toLocaleTimeString(r);const t=Gu(r);t&&e.startsWith(t)&&(e=e.replace(t,""));const i=e.match(/[^\u0660-\u0669\s\d]/);return i&&i[0]}function ml(r,e){if(!e)return null;const t=e.split(/\s*/).map(Ov).join("\\s*"),i=new RegExp(t,"i"),n=r.match(i);if(n)return n[0]}const mo=new Date("August 19, 1975 23:15:30"),Dv=new Date("August 19, 1975 05:15:30");function Gu(r){return ju(r,mo)}function $v(r){return ju(r,Dv)}function hi(r){return parseInt(qu(r))}function Mv(r){return r=qu(r),r.length===1?r+="00":r.length===2&&(r+="0"),parseInt(r)}function Rv(r,e,t,i){let n=r;if(r.endsWith(t)?n=r.replace(" "+t,""):r.endsWith(i)&&(n=r.replace(" "+i,"")),e){let o=e<10?"0":"";o+=e<100?"0":"",o+=e,n+="."+o}else n+=".000";return r.endsWith(t)?n=n+" "+t:r.endsWith(i)&&(n=n+" "+i),n}(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Time Picker")};function e(t,i,n=0){t()?i():setTimeout(()=>e(t,i,200),n)}window.Vaadin.Flow.timepickerConnector={initLazy:t=>r(function(i){i.$connector||(i.$connector={},i.$connector.setLocale=r(function(n){let o;i.value&&i.value!==""&&(o=i.i18n.parseTime(i.value));try{mo.toLocaleTimeString(n)}catch{throw n="en-US",new Error("vaadin-time-picker: The locale "+n+" is not supported, falling back to default locale setting(en-US).")}const a=Gu(n),s=$v(n),l=kv(n),u=function(){return i.step&&i.step<60},c=function(){return i.step&&i.step<1};let d,h;i.i18n={formatTime:r(function(f){if(!f)return;const v=new Date;v.setHours(f.hours),v.setMinutes(f.minutes),v.setSeconds(f.seconds!==void 0?f.seconds:0);let A=v.toLocaleTimeString(n,{hour:"numeric",minute:"numeric",second:u()?"numeric":void 0});return c()&&(A=Rv(A,f.milliseconds,s,a)),A}),parseTime:r(function(f){if(f&&f===d&&h)return h;if(!f)return;const v=ml(f,s),A=ml(f,a),w=f.replace(v||"","").replace(A||"","").trim(),I=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+l+")?","g");let R=I.exec(w);if(R){R=hi(R[0].replace(l,"")),v!==A&&(R===12&&v&&(R=0),R!==12&&A&&(R+=12));const q=I.exec(w),H=q&&I.exec(w),_e=/[[\.][\d\u0660-\u0669]{1,3}$/;let $=H&&c()&&_e.exec(w);return $&&$.index<=H.index&&($=void 0),h=R!==void 0&&{hours:R,minutes:q?hi(q[0].replace(l,"")):0,seconds:H?hi(H[0].replace(l,"")):0,milliseconds:q&&H&&$?Mv($[0].replace(".","")):0},d=f,h}})},o&&e(()=>i.$,()=>{const f=i.i18n.formatTime(o);i.inputElement.value!==f&&(i.inputElement.value=f,i.$.comboBox.value=f)})}))})(t)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(r){if(r.$connector)return;const e=20;let t=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){const o=[...r.children].filter(c=>"__virtualListIndex"in c).map(c=>c.__virtualListIndex),a=Math.min(...o),s=Math.max(...o);let l=Math.max(0,a-e),u=Math.min(s+e,r.items.length);if(t[0]!=l||t[1]!=u){t=[l,u];const c=1+u-l;r.$server.setRequestedRange(l,c)}},n=function(){r.__requestDebounce=De.debounce(r.__requestDebounce,Ae.after(50),i)};requestAnimationFrame(()=>i),r.patchVirtualListRenderer=function(){if(!r.renderer||r.renderer.__virtualListConnectorPatched)return;const o=r.renderer,a=(s,l,u)=>{s.__virtualListIndex=u.index,u.item===void 0?o.call(l,s,l,{...u,item:l.$connector.placeholderItem}):o.call(l,s,l,u),n()};a.__virtualListConnectorPatched=!0,a.__rendererId=o.__rendererId,r.renderer=a},r._createPropertyObserver("renderer","patchVirtualListRenderer",!0),r.patchVirtualListRenderer(),r.items=[],r.$connector.set=function(o,a){r.items.splice(o,a.length,...a),r.items=[...r.items]},r.$connector.clear=function(o,a){const s=Math.min(a,r.items.length-o);r.$connector.set(o,[...Array(s)])},r.$connector.updateData=function(o){const a=o.reduce((s,l)=>(s[l.key]=l,s),{});r.items=r.items.map(s=>s&&(a[s.key]||s))},r.$connector.updateSize=function(o){const a=o-r.items.length;a>0?r.items=[...r.items,...Array(a)]:a<0&&(r.items=r.items.slice(0,o))},r.$connector.setPlaceholderItem=function(o={}){o.__placeholder=!0,r.$connector.placeholderItem=o}}};const Yv=function(r,e=!1){const t=document.createElement("template");t.innerHTML=r,document.head[e?"insertBefore":"appendChild"](t.content,document.head.firstChild)};export{Yv as addCssBlock};
