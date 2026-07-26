const Tt=window.customElements;if(Tt&&!Tt.__mcDefineGuard){const e=Tt.define.bind(Tt);Tt.define=(t,s,i)=>{Tt.get(t)||e(t,s,i)},Tt.__mcDefineGuard=!0}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=globalThis,os=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,as=Symbol(),$s=new WeakMap;let pi=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==as)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(os&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=$s.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$s.set(s,t))}return t}toString(){return this.cssText}};const Ki=e=>new pi(typeof e=="string"?e:e+"",void 0,as),it=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,n,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new pi(s,e,as)},Xi=(e,t)=>{if(os)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),n=Se.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}},xs=os?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return Ki(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zi,defineProperty:Ji,getOwnPropertyDescriptor:Qi,getOwnPropertyNames:tn,getOwnPropertySymbols:en,getPrototypeOf:sn}=Object,Pe=globalThis,ws=Pe.trustedTypes,nn=ws?ws.emptyScript:"",on=Pe.reactiveElementPolyfillSupport,oe=(e,t)=>e,Ee={toAttribute(e,t){switch(t){case Boolean:e=e?nn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},rs=(e,t)=>!Zi(e,t),ks={attribute:!0,type:String,converter:Ee,reflect:!1,useDefault:!1,hasChanged:rs};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;let jt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ks){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,s);n!==void 0&&Ji(this.prototype,t,n)}}static getPropertyDescriptor(t,s,i){const{get:n,set:o}=Qi(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:n,set(a){const l=n?.call(this);o?.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ks}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const t=sn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const s=this.properties,i=[...tn(s),...en(s)];for(const n of i)this.createProperty(n,s[n])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,n]of s)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const n=this._$Eu(s,i);n!==void 0&&this._$Eh.set(n,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)s.unshift(xs(n))}else t!==void 0&&s.push(xs(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:Ee).toAttribute(s,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ee;this._$Em=n;const l=a.fromAttribute(s,o.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,s,i,n=!1,o){if(t!==void 0){const a=this.constructor;if(n===!1&&(o=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??rs)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??s??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};jt.elementStyles=[],jt.shadowRootOptions={mode:"open"},jt[oe("elementProperties")]=new Map,jt[oe("finalized")]=new Map,on?.({ReactiveElement:jt}),(Pe.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=globalThis,Ss=e=>e,Ne=ls.trustedTypes,Cs=Ne?Ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,ui="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,di="?"+St,an=`<${di}>`,Ot=document,re=()=>Ot.createComment(""),le=e=>e===null||typeof e!="object"&&typeof e!="function",cs=Array.isArray,rn=e=>cs(e)||typeof e?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Es=/-->/g,Ns=/>/g,At=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Is=/'/g,zs=/"/g,hi=/^(?:script|style|textarea|title)$/i,_i=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),r=_i(1),T=_i(2),Kt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Fs=new WeakMap,Bt=Ot.createTreeWalker(Ot,129);function mi(e,t){if(!cs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cs!==void 0?Cs.createHTML(t):t}const ln=(e,t)=>{const s=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",a=ie;for(let l=0;l<s;l++){const c=e[l];let p,u,d=-1,h=0;for(;h<c.length&&(a.lastIndex=h,u=a.exec(c),u!==null);)h=a.lastIndex,a===ie?u[1]==="!--"?a=Es:u[1]!==void 0?a=Ns:u[2]!==void 0?(hi.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=At):u[3]!==void 0&&(a=At):a===At?u[0]===">"?(a=n??ie,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,p=u[1],a=u[3]===void 0?At:u[3]==='"'?zs:Is):a===zs||a===Is?a=At:a===Es||a===Ns?a=ie:(a=At,n=void 0);const b=a===At&&e[l+1].startsWith("/>")?" ":"";o+=a===ie?c+an:d>=0?(i.push(p),c.slice(0,d)+ui+c.slice(d)+St+b):c+St+(d===-2?l:b)}return[mi(e,o+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ce{constructor({strings:t,_$litType$:s},i){let n;this.parts=[];let o=0,a=0;const l=t.length-1,c=this.parts,[p,u]=ln(t,s);if(this.el=ce.createElement(p,i),Bt.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=Bt.nextNode())!==null&&c.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(ui)){const h=u[a++],b=n.getAttribute(d).split(St),v=/([.?@])?(.*)/.exec(h);c.push({type:1,index:o,name:v[2],strings:b,ctor:v[1]==="."?pn:v[1]==="?"?un:v[1]==="@"?dn:Me}),n.removeAttribute(d)}else d.startsWith(St)&&(c.push({type:6,index:o}),n.removeAttribute(d));if(hi.test(n.tagName)){const d=n.textContent.split(St),h=d.length-1;if(h>0){n.textContent=Ne?Ne.emptyScript:"";for(let b=0;b<h;b++)n.append(d[b],re()),Bt.nextNode(),c.push({type:2,index:++o});n.append(d[h],re())}}}else if(n.nodeType===8)if(n.data===di)c.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(St,d+1))!==-1;)c.push({type:7,index:o}),d+=St.length-1}o++}}static createElement(t,s){const i=Ot.createElement("template");return i.innerHTML=t,i}}function Xt(e,t,s=e,i){if(t===Kt)return t;let n=i!==void 0?s._$Co?.[i]:s._$Cl;const o=le(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,s,i)),i!==void 0?(s._$Co??=[])[i]=n:s._$Cl=n),n!==void 0&&(t=Xt(e,n._$AS(e,t.values),n,i)),t}class cn{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,n=(t?.creationScope??Ot).importNode(s,!0);Bt.currentNode=n;let o=Bt.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let p;c.type===2?p=new he(o,o.nextSibling,this,t):c.type===1?p=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(p=new hn(o,this,t)),this._$AV.push(p),c=i[++l]}a!==c?.index&&(o=Bt.nextNode(),a++)}return Bt.currentNode=Ot,n}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class he{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Xt(this,t,s),le(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&le(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ot.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ce.createElement(mi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(s);else{const o=new cn(n,this),a=o.u(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(t){let s=Fs.get(t.strings);return s===void 0&&Fs.set(t.strings,s=new ce(t)),s}k(t){cs(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,n=0;for(const o of t)n===s.length?s.push(i=new he(this.O(re()),this.O(re()),this,this.options)):i=s[n],i._$AI(o),n++;n<s.length&&(this._$AR(i&&i._$AB.nextSibling,n),s.length=n)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const i=Ss(t).nextSibling;Ss(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,n,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=s,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,s=this,i,n){const o=this.strings;let a=!1;if(o===void 0)t=Xt(this,t,s,0),a=!le(t)||t!==this._$AH&&t!==Kt,a&&(this._$AH=t);else{const l=t;let c,p;for(t=o[0],c=0;c<o.length-1;c++)p=Xt(this,l[i+c],s,c),p===Kt&&(p=this._$AH[c]),a||=!le(p)||p!==this._$AH[c],p===_?t=_:t!==_&&(t+=(p??"")+o[c+1]),this._$AH[c]=p}a&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pn extends Me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class un extends Me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class dn extends Me{constructor(t,s,i,n,o){super(t,s,i,n,o),this.type=5}_$AI(t,s=this){if((t=Xt(this,t,s,0)??_)===Kt)return;const i=this._$AH,n=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}let hn=class{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Xt(this,t)}};const _n=ls.litHtmlPolyfillSupport;_n?.(ce,he),(ls.litHtmlVersions??=[]).push("3.3.3");const mn=(e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=s?.renderBefore??null;i._$litPart$=n=new he(t.insertBefore(re(),o),o,void 0,s??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=globalThis;class vt extends jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Kt}}vt._$litElement$=!0,vt.finalized=!0,ps.litElementHydrateSupport?.({LitElement:vt});const bn=ps.litElementPolyfillSupport;bn?.({LitElement:vt});(ps.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:rs},vn=(e=gn,t,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(s.name,e),i==="accessor"){const{name:a}=s;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(i==="setter"){const{name:a}=s;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e,!0,l)}}throw Error("Unsupported decorator location: "+i)};function U(e){return(t,s)=>typeof s=="object"?vn(e,t,s):((i,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),a?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e){return U({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bi(e,t){return(s,i,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return fn(s,i,{get(){return o(this)}})}}var Ps,Ms;(function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"})(Ps||(Ps={})),(function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"})(Ms||(Ms={}));function yn(e){return e.substr(0,e.indexOf("."))}var $n=["closed","locked","off"],Ie=function(e,t,s,i){i=i||{},s=s??{};var n=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return n.detail=s,e.dispatchEvent(n),n},ve=function(e){Ie(window,"haptic",e)},xn=function(e,t,s){s===void 0&&(s=!1),s?history.replaceState(null,"",t):history.pushState(null,"",t),Ie(window,"location-changed",{replace:s})},wn=function(e,t,s){s===void 0&&(s=!0);var i,n=yn(t),o=n==="group"?"homeassistant":n;switch(n){case"lock":i=s?"unlock":"lock";break;case"cover":i=s?"open_cover":"close_cover";break;default:i=s?"turn_on":"turn_off"}return e.callService(o,i,{entity_id:t})},kn=function(e,t){var s=$n.includes(e.states[t].state);return wn(e,t,s)},Sn=function(e,t,s,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(o){return o.user===t.user.id})||(ve("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(s.entity||s.camera_image)&&Ie(e,"hass-more-info",{entityId:s.entity?s.entity:s.camera_image});break;case"navigate":i.navigation_path&&xn(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":s.entity&&(kn(t,s.entity),ve("success"));break;case"call-service":if(!i.service)return void ve("failure");var n=i.service.split(".",2);t.callService(n[0],n[1],i.service_data,i.target),ve("success");break;case"fire-dom-event":Ie(e,"ll-custom",i)}},Cn=function(e,t,s,i){var n;i==="double_tap"&&s.double_tap_action?n=s.double_tap_action:i==="hold"&&s.hold_action?n=s.hold_action:i==="tap"&&s.tap_action&&(n=s.tap_action),Sn(e,t,s,n)};const pe=(e,t=0,s=1)=>e>s?s:e<t?t:e,Y=(e,t=0,s=Math.pow(10,t))=>Math.round(s*e)/s,En=e=>Pn(Ze(e)),Ze=e=>(e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Y(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?Y(parseInt(e.substring(6,8),16)/255,2):1}),Nn=e=>Fn(zn(e)),In=({h:e,s:t,v:s,a:i})=>{const n=(200-t)*s/100;return{h:Y(e),s:Y(n>0&&n<200?t*s/100/(n<=100?n:200-n)*100:0),l:Y(n/2),a:Y(i,2)}},Je=e=>{const{h:t,s,l:i}=In(e);return`hsl(${t}, ${s}%, ${i}%)`},zn=({h:e,s:t,v:s,a:i})=>{e=e/360*6,t=t/100,s=s/100;const n=Math.floor(e),o=s*(1-t),a=s*(1-(e-n)*t),l=s*(1-(1-e+n)*t),c=n%6;return{r:Y([s,a,o,o,l,s][c]*255),g:Y([l,s,s,a,o,o][c]*255),b:Y([o,o,l,s,s,a][c]*255),a:Y(i,2)}},fe=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},Fn=({r:e,g:t,b:s,a:i})=>{const n=i<1?fe(Y(i*255)):"";return"#"+fe(e)+fe(t)+fe(s)+n},Pn=({r:e,g:t,b:s,a:i})=>{const n=Math.max(e,t,s),o=n-Math.min(e,t,s),a=o?n===e?(t-s)/o:n===t?2+(s-e)/o:4+(e-t)/o:0;return{h:Y(60*(a<0?a+6:a)),s:Y(n?o/n*100:0),v:Y(n/255*100),a:i}},gi=(e,t)=>{if(e===t)return!0;for(const s in e)if(e[s]!==t[s])return!1;return!0},Mn=(e,t)=>e.toLowerCase()===t.toLowerCase()?!0:gi(Ze(e),Ze(t)),Ts={},vi=e=>{let t=Ts[e];return t||(t=document.createElement("template"),t.innerHTML=e,Ts[e]=t),t},us=(e,t,s)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:s}))};let qt=!1;const Qe=e=>"touches"in e,Tn=e=>qt&&!Qe(e)?!1:(qt||(qt=Qe(e)),!0),As=(e,t)=>{const s=Qe(t)?t.touches[0]:t,i=e.el.getBoundingClientRect();us(e.el,"move",e.getMove({x:pe((s.pageX-(i.left+window.pageXOffset))/i.width),y:pe((s.pageY-(i.top+window.pageYOffset))/i.height)}))},An=(e,t)=>{const s=t.keyCode;s>40||e.xy&&s<37||s<33||(t.preventDefault(),us(e.el,"move",e.getMove({x:s===39?.01:s===37?-.01:s===34?.05:s===33?-.05:s===35?1:s===36?-1:0,y:s===40?.01:s===38?-.01:0},!0)))};class fi{constructor(t,s,i,n){const o=vi(`<div role="slider" tabindex="0" part="${s}" ${i}><div part="${s}-pointer"></div></div>`);t.appendChild(o.content.cloneNode(!0));const a=t.querySelector(`[part=${s}]`);a.addEventListener("mousedown",this),a.addEventListener("touchstart",this),a.addEventListener("keydown",this),this.el=a,this.xy=n,this.nodes=[a.firstChild,a]}set dragging(t){const s=t?document.addEventListener:document.removeEventListener;s(qt?"touchmove":"mousemove",this),s(qt?"touchend":"mouseup",this)}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":if(t.preventDefault(),!Tn(t)||!qt&&t.button!=0)return;this.el.focus(),As(this,t),this.dragging=!0;break;case"mousemove":case"touchmove":t.preventDefault(),As(this,t);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":An(this,t);break}}style(t){t.forEach((s,i)=>{for(const n in s)this.nodes[i].style.setProperty(n,s[n])})}}class Dn extends fi{constructor(t){super(t,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:t}){this.h=t,this.style([{left:`${t/360*100}%`,color:Je({h:t,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${Y(t)}`)}getMove(t,s){return{h:s?pe(this.h+t.x*360,0,360):360*t.x}}}class Rn extends fi{constructor(t){super(t,"saturation",'aria-label="Color"',!0)}update(t){this.hsva=t,this.style([{top:`${100-t.v}%`,left:`${t.s}%`,color:Je(t)},{"background-color":Je({h:t.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${Y(t.s)}%, Brightness ${Y(t.v)}%`)}getMove(t,s){return{s:s?pe(this.hsva.s+t.x*100,0,100):t.x*100,v:s?pe(this.hsva.v-t.y*100,0,100):Math.round(100-t.y*100)}}}const Bn=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',Ln="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",On="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",ye=Symbol("same"),Ge=Symbol("color"),Ds=Symbol("hsva"),He=Symbol("update"),Rs=Symbol("parts"),Bs=Symbol("css"),Ls=Symbol("sliders");class Gn extends HTMLElement{static get observedAttributes(){return["color"]}get[Bs](){return[Bn,Ln,On]}get[Ls](){return[Rn,Dn]}get color(){return this[Ge]}set color(t){if(!this[ye](t)){const s=this.colorModel.toHsva(t);this[He](s),this[Ge]=t}}constructor(){super();const t=vi(`<style>${this[Bs].join("")}</style>`),s=this.attachShadow({mode:"open"});s.appendChild(t.content.cloneNode(!0)),s.addEventListener("move",this),this[Rs]=this[Ls].map(i=>new i(s))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,s,i){const n=this.colorModel.fromAttr(i);this[ye](n)||(this.color=n)}handleEvent(t){const s=this[Ds],i={...s,...t.detail};this[He](i);let n;!gi(i,s)&&!this[ye](n=this.colorModel.fromHsva(i))&&(this[Ge]=n,us(this,"color-changed",{value:n}))}[ye](t){return this.color&&this.colorModel.equal(t,this.color)}[He](t){this[Ds]=t,this[Rs].forEach(s=>s.update(t))}}const Hn={defaultColor:"#000",toHsva:En,fromHsva:({h:e,s:t,v:s})=>Nn({h:e,s:t,v:s,a:1}),equal:Mn,fromAttr:e=>e};class Wn extends Gn{get colorModel(){return Hn}}class jn extends Wn{}customElements.define("hex-color-picker",jn);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=Symbol.for(""),Vn=e=>{if(e?.r===yi)return e?._$litStatic$},rt=e=>({_$litStatic$:e,r:yi}),Os=new Map,Un=e=>(t,...s)=>{const i=s.length;let n,o;const a=[],l=[];let c,p=0,u=!1;for(;p<i;){for(c=t[p];p<i&&(o=s[p],(n=Vn(o))!==void 0);)c+=n+t[++p],u=!0;p!==i&&l.push(o),a.push(c),p++}if(p===i&&a.push(t[i]),u){const d=a.join("$$lit$$");(t=Os.get(d))===void 0&&(a.raw=a,Os.set(d,t=a)),s=l}return e(t,...s)},ae=Un(r),pt="",Te=`mosaic-canvas${pt}`,$i=`mosaic-canvas-editor${pt}`,Ae=`mc-embedded-card${pt}`,xi=`mc-fill${pt}`,wi=`mc-toggle${pt}`,ki=`mc-slider${pt}`,Si=`mc-dropdown${pt}`,Ci=`mc-selector${pt}`,Ei=`mc-input${pt}`,Ni=`mc-spinbox${pt}`,Ii=`mc-button${pt}`,qn="Mosaic Canvas Card",ds=["toggle","slider","dropdown","selector","input","spinbox","button"];function ht(e){return ds.includes(e)}const Yn=[{id:"generic",label:"Button",icon:"mdi:gesture-tap-button",preset:{option_icon_position:"left"}},{id:"icon_above",label:"Icon above label",icon:"mdi:card-text-outline",preset:{option_icon_position:"above"}},{id:"with_state",label:"Icon, label and state",icon:"mdi:card-bulleted-outline",preset:{option_icon_position:"above",option_show_state:!0,option_state_position:"below"}}],Kn=[{id:"switch",label:"Switch",icon:"mdi:toggle-switch-outline",render:"switch",preset:{toggle_variant:"switch"}},{id:"checkbox",label:"Checkbox",icon:"mdi:checkbox-marked-outline",render:"checkbox",preset:{toggle_variant:"checkbox"}}],Xn=[{id:"generic",label:"Slider",icon:"mdi:tune-variant"},{id:"brightness",label:"Brightness",icon:"mdi:brightness-6",domain:["light"],preset:{control_service:"light.turn_on",control_service_data:{brightness_pct:"{value}"},read_attribute:"brightness",read_scale:2.55,min:0,max:100,step:1,unit:"%",control_labels:[{icon:"mdi:brightness-6"}],control_labels_position:"left",slider_labels:{left:{text:"0%"},center:{text:"50%"},right:{text:"100%"}}}},{id:"volume",label:"Volume",icon:"mdi:volume-high",domain:["media_player"],preset:{control_service:"media_player.volume_set",control_service_data:{volume_level:"{value}"},value_scale:.01,read_attribute:"volume_level",read_scale:.01,min:0,max:100,step:1,unit:"%",control_labels:[{icon:"mdi:volume-high"}],control_labels_position:"left",slider_labels:{left:{icon:"mdi:volume-low"},right:{icon:"mdi:volume-high"}}}},{id:"color_temp",label:"Colour Temperature",icon:"mdi:thermometer",domain:["light"],preset:{control_service:"light.turn_on",control_service_data:{color_temp_kelvin:"{value}"},read_attribute:"color_temp_kelvin",min:2e3,max:6500,step:100,unit:"K",control_labels:[{icon:"mdi:sun-thermometer-outline"}],control_labels_position:"left",slider_labels:{left:{text:"Warm"},right:{text:"Cool"}}}},{id:"cover_position",label:"Cover Position",icon:"mdi:window-shutter",domain:["cover"],preset:{control_service:"cover.set_cover_position",control_service_data:{position:"{value}"},read_attribute:"current_position",min:0,max:100,step:1,unit:"%",control_labels:[{icon:"mdi:window-shutter"}],control_labels_position:"left",slider_labels:{left:{text:"Closed"},right:{text:"Open"}}}},{id:"fan_speed",label:"Fan Speed",icon:"mdi:fan",domain:["fan"],preset:{control_service:"fan.set_percentage",control_service_data:{percentage:"{value}"},read_attribute:"percentage",min:0,max:100,step:1,unit:"%",control_labels:[{icon:"mdi:fan"}],control_labels_position:"left"}}],Zn=[{id:"generic",label:"Dropdown",icon:"mdi:form-dropdown",preset:{options_source:"entity"}},{id:"light_effect",label:"Light Effect",icon:"mdi:auto-fix",domain:["light"],preset:{control_service:"light.turn_on",control_service_data:{effect:"{value}"},options_source:"entity",options_attribute:"effect_list",read_attribute:"effect"}},{id:"media_source",label:"Media Source",icon:"mdi:import",domain:["media_player"],preset:{control_service:"media_player.select_source",control_service_data:{source:"{value}"},options_source:"entity",options_attribute:"source_list",read_attribute:"source"}},{id:"media_sound_mode",label:"Sound Mode",icon:"mdi:surround-sound",domain:["media_player"],preset:{control_service:"media_player.select_sound_mode",control_service_data:{sound_mode:"{value}"},options_source:"entity",options_attribute:"sound_mode_list",read_attribute:"sound_mode"}}],Jn=[{id:"generic",label:"Selector",icon:"mdi:view-dashboard-variant-outline",preset:{options_source:"entity",selector_layout:"row"}},{id:"hvac_mode",label:"HVAC Mode",icon:"mdi:thermostat",domain:["climate"],preset:{control_service:"climate.set_hvac_mode",control_service_data:{hvac_mode:"{value}"},options_source:"entity",options_attribute:"hvac_modes",selector_layout:"wrap"}},{id:"fan_preset",label:"Fan Preset",icon:"mdi:fan-auto",domain:["fan"],preset:{control_service:"fan.set_preset_mode",control_service_data:{preset_mode:"{value}"},options_source:"entity",options_attribute:"preset_modes",read_attribute:"preset_mode",selector_layout:"wrap"}}],Qn=[{id:"text",label:"Text",icon:"mdi:form-textbox",preset:{submit_on:"change"}}],to=[{id:"generic",label:"Spin Box",icon:"mdi:numeric",preset:{min:0,max:100,step:1}},{id:"target_temp",label:"Target Temperature",icon:"mdi:thermometer",domain:["climate"],preset:{control_service:"climate.set_temperature",control_service_data:{temperature:"{value}"},read_attribute:"temperature",min:7,max:35,step:.5,unit:"°",control_labels:[{icon:"mdi:thermometer"}],control_labels_position:"left"}}],eo={button:Yn,toggle:Kn,slider:Xn,dropdown:Zn,selector:Jn,input:Qn,spinbox:to},zi=eo;let hs={};function Ce(e){hs=e??{}}function Yt(e){return[...zi[e]??[],...hs[e]??[]]}function Fi(e){return zi[e]??[]}function so(e){return hs[e]??[]}function Gs(e,t){return Yt(e).some(s=>s.id===t)}function Pi(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"variant"}function We(e,t){const s=Pi(t);if(!Gs(e,s))return s;for(let i=2;;i++){const n=`${s}_${i}`;if(!Gs(e,n))return n}}function io(e,t){if(t)return Yt(e).find(s=>s.id===t)}function Hs(e){return Yt(e)[0]?.id}const _s=["control_service","control_service_data","value_scale","read_attribute","read_scale","min","max","step","unit","spinbox_decimals","toggle_variant","options_source","options_attribute","selector_layout","submit_on","input_maxlength","input_password","control_labels","control_labels_position","control_labels_gap","slider_labels","option_icon_position","option_show_state","option_state_position","option_icon_style","option_label_style","option_state_style","button_value"];function $e(e,t){const s=io(e,t);return{...Object.fromEntries(_s.map(n=>[n,void 0])),...s?.preset??{},variant:t}}function Ws(e){const t={};for(const s of _s){const i=e[s];i!==void 0&&(t[s]=i)}return t}let Mi={};const no=fetch(new URL("./defaults.json",import.meta.url).href).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}).then(e=>{Mi=e}).catch(e=>{console.error("[mosaic-canvas-card] Failed to load defaults.json — card-level and field-level overrides still apply.",e)});function m(e){return Mi[e]}function je(e,t,s,i,n=""){if(s.unit===void 0&&n==="power"){const l=t==="kW"?e*1e3:e,c=i?.power_unit;if(c==="W")return{value:l.toFixed(s.decimals??m("decimals_w")??0),unit:"W"};if(c==="kW"){const p=l/1e3,u=s.decimals??(Math.abs(p)<10?2:1);return{value:p.toFixed(u),unit:"kW"}}if(Math.abs(l)>=1e3){const p=l/1e3,u=s.decimals??(Math.abs(p)<10?2:1);return{value:p.toFixed(u),unit:"kW"}}return{value:l.toFixed(s.decimals??m("decimals_w")??0),unit:"W"}}if(s.unit===void 0&&(t==="kWh"||t==="MWh")&&Math.abs(e)>=1e3)return{value:((t==="MWh"?e*1e3:e)/1e3).toFixed(s.decimals??m("decimals_mwh")??2),unit:"MWh"};const o=s.unit!==void 0?s.unit:t;return{value:s.decimals!=null?e.toFixed(s.decimals):String(e),unit:o}}function oo(e){if(!Number.isFinite(e)||e<0)return{value:"--",unit:""};const t=Math.round(e*60),s=Math.floor(t/60),i=t%60;return s===0?{value:`${i}m`,unit:""}:i===0?{value:`${s}h`,unit:""}:{value:`${s}h ${i}m`,unit:""}}function Ti(e,t,s,i,n){if(!t.entity)return{value:"",unit:""};if(t.stat_period&&n){const d=n.get(t.id);if(!d)return{value:"—",unit:""};const h=e?.states[t.entity]?.attributes?.device_class??"";return je(d.value,d.unit,t,s,h)}if(t.entity.startsWith("virtual:")){const d=i?.get(t.entity);if(!d)return{value:"",unit:""};if(d.unit==="duration")return d.value<0&&d.label?{value:d.label,unit:""}:oo(d.value);const h=d.unit==="W"||d.unit==="kW";return je(d.value,d.unit,t,s,h?"power":"")}const o=e?.states[t.entity];if(!o)return{value:"",unit:""};const a=o.attributes?.unit_of_measurement??"",l=o.attributes?.device_class??"",c=t.attribute?o.attributes?.[t.attribute]:o.state,p=Number(c);return c!==""&&c!==null&&c!==void 0&&Number.isFinite(p)?je(p,a,t,s,l):{value:String(c??""),unit:t.unit??""}}function ao(e,t,s){const i=t>0?"increasing":t<0?"decreasing":"none";if(i==="none")return{hours:null,label:null,direction:"none"};let n;if(i==="increasing"?n=s.filter(c=>c.value>e).reduce((c,p)=>c===void 0||p.value<c.value?p:c,void 0):n=s.filter(c=>c.value<e).reduce((c,p)=>c===void 0||p.value>c.value?p:c,void 0),!n)return{hours:null,label:null,direction:i};const a=Math.abs(n.value-e)/Math.abs(t);return Number.isFinite(a)?{hours:a,label:n.label,direction:i}:{hours:null,label:null,direction:i}}const js=rt(xi),Vs=rt(Ae),ro={toggle:rt(wi),slider:rt(ki),dropdown:rt(Si),selector:rt(Ci),input:rt(Ei),spinbox:rt(Ni),button:rt(Ii)};function at(e,t){const s=e?.canvas,i=s?.width,n=s?.height,o=t,a=o&&o.h>0?o.w/o.h:1.94;let l,c;i!=null&&n!=null?(l=i,c=n):i!=null?(l=i,c=Math.round(i/a)):n!=null?(c=n,l=Math.round(n*a)):(l=m("canvas_fallback_width")??1e3,c=o&&o.w>0?Math.round(l/(o.w/o.h)):Math.round(l/1.94));const p=s?.extend,u=p?.left??0,d=p?.right??0,h=p?.top??0,b=p?.bottom??0;return{baseW:l,baseH:c,L:u,T:h,R:d,B:b,totalW:l+u+d,totalH:c+h+b}}const ms={center:"translate(-50%, -50%)",top:"translate(-50%, 0)",bottom:"translate(-50%, -100%)",left:"translate(0, -50%)",right:"translate(-100%, -50%)","top-left":"translate(0, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-right":"translate(-100%, -100%)"},Ut={center:[.5,.5],top:[.5,0],bottom:[.5,1],left:[0,.5],right:[1,.5],"top-left":[0,0],"top-right":[1,0],"bottom-left":[0,1],"bottom-right":[1,1]};function lo(e,t){switch(t){case"top":return{x:e.x+e.w/2,y:e.y};case"right":return{x:e.x+e.w,y:e.y+e.h/2};case"bottom":return{x:e.x+e.w/2,y:e.y+e.h};case"left":return{x:e.x,y:e.y+e.h/2};case"center":return{x:e.x+e.w/2,y:e.y+e.h/2}}}function kt(e){return e==="center"?"center":e==="right"?"flex-end":"flex-start"}function co(e,t){const s=e?.background;if(!s||s.source==="day")return"day";if(s.source==="night")return"night";if(s.source==="entity"){const o=s.mode_entity?t?.states[s.mode_entity]:void 0,a=o?s.mode_attribute?o.attributes?.[s.mode_attribute]:o.state:void 0;return a!=null&&/^(night|on|true)$/i.test(String(a))?"night":"day"}const i=t?.states[s.sun_entity??m("sun_entity")??"sun.sun"];return(i?s.sun_attribute?i.attributes?.[s.sun_attribute]:i.state:void 0)==="below_horizon"?"night":"day"}function po(e,t){const s=e?.background?.images?.[co(e,t)];if(!s)return;const i=Number(e?.ev_count??0);if(s[String(i)])return s[String(i)];const n=Object.keys(s).map(Number).filter(a=>!Number.isNaN(a)).sort((a,l)=>a-l);let o;for(const a of n)a<=i&&(o=a);return o===void 0&&n.length&&(o=n[0]),o!==void 0?s[String(o)]:void 0}function uo(e,t){return{...t?.card,...e.box,extra_css:yt(t?.card?.extra_css,e.box?.extra_css)||void 0}}function Ve(e,t,s){const i=e.type==="label"?s?.label??{}:s?.value??{},n=e.type==="label"?t.label_style??{}:t.value_style??{};return{font_family:s?.font_family,...i,...n,...e.style,extra_css:yt(i.extra_css,n.extra_css,e.style?.extra_css,e.extra_css)||void 0}}function ft(e,t){const s=t?.control_style,i=e.control_style,n=y=>i?.[y]??s?.[y],o=n("accent_color")??"#00d4ff",a="rgba(255,255,255,0.25)",l="rgba(255,255,255,0.06)",c=n("toggle_thumb_size")??18,p=n("slider_thumb_size")??16,u="rgba(255,255,255,0.22)",d="rgba(255,255,255,0.2)",h="#1c1f26",b=n("gradient_angle")??180,v=(y,g)=>`linear-gradient(${b}deg,${y},${g})`,x=n("accent_color2"),k=x?v(o,x):o,$=(y,g,w,S)=>{const f=n(y),E=n(g);return typeof E=="string"&&E?v(typeof f=="string"&&f?f:S,E):typeof f=="string"&&f?f:w};return{accent_color:o,accent_paint:k,gradient_angle:b,toggle_on_paint:$("toggle_on_color","toggle_on_color2",k,o),toggle_off_paint:$("toggle_off_color","toggle_off_color2",u,u),slider_track_paint:$("slider_track_color","slider_track_color2",d,d),slider_fill_paint:$("slider_fill_color","slider_fill_color2",k,o),dropdown_bg_paint:$("dropdown_bg","dropdown_bg2",l,l),dropdown_menu_bg_paint:$("dropdown_menu_bg","dropdown_menu_bg2",h,h),dropdown_selected_paint:$("dropdown_selected_color","dropdown_selected_color2",k,o),selector_bg_paint:$("selector_bg","selector_bg2","transparent","transparent"),selector_selected_paint:$("selector_selected_color","selector_selected_color2",k,o),button_bg_paint:$("button_bg","button_bg2","transparent","transparent"),button_selected_paint:$("button_selected_color","button_selected_color2",k,o),input_bg_paint:$("input_bg","input_bg2",l,l),spinbox_bg_paint:$("spinbox_bg","spinbox_bg2",l,l),spinbox_button_hover_paint:$("spinbox_button_hover_color","spinbox_button_hover_color2",k,o),toggle_on_color:n("toggle_on_color")??o,toggle_off_color:n("toggle_off_color")??"rgba(255,255,255,0.22)",toggle_thumb_color:n("toggle_thumb_color")??"#fff",toggle_thumb_size:c,toggle_thumb_radius:n("toggle_thumb_radius")??c/2,toggle_thumb_padding:n("toggle_thumb_padding")??2,slider_track_color:n("slider_track_color")??"rgba(255,255,255,0.2)",slider_fill_color:n("slider_fill_color")??o,slider_thumb_color:n("slider_thumb_color")??"#fff",slider_thumb_size:p,slider_thumb_width:n("slider_thumb_width")??p,slider_thumb_radius:n("slider_thumb_radius")??p/2,slider_thumb_padding:n("slider_thumb_padding")??0,slider_height:n("slider_height")??6,slider_length:n("slider_length"),slider_radius:n("slider_radius")??999,slider_border:n("slider_border")??!1,slider_border_color:n("slider_border_color")??a,slider_border_width:n("slider_border_width")??1,dropdown_border_color:n("dropdown_border_color")??a,dropdown_bg:n("dropdown_bg")??l,dropdown_radius:n("dropdown_radius")??6,dropdown_text_size:n("dropdown_text_size")??13,dropdown_menu_bg:n("dropdown_menu_bg")??"#1c1f26",dropdown_menu_border_color:n("dropdown_menu_border_color")??a,dropdown_selected_color:n("dropdown_selected_color")??o,selector_border_color:n("selector_border_color")??a,selector_bg:n("selector_bg")??"transparent",selector_radius:n("selector_radius")??7,selector_text_size:n("selector_text_size")??13,selector_selected_color:n("selector_selected_color")??o,selector_selected_text_color:n("selector_selected_text_color")??"#002",selector_text_color:n("selector_text_color")??"currentColor",selector_icon_color:n("selector_icon_color")??n("selector_text_color")??"currentColor",selector_state_color:n("selector_state_color")??n("selector_text_color")??"currentColor",selector_selected_icon_color:n("selector_selected_icon_color")??n("selector_selected_text_color")??"#002",selector_selected_state_color:n("selector_selected_state_color")??n("selector_selected_text_color")??"#002",selector_border_width:n("selector_border_width")??1,selector_icon_size:n("selector_icon_size")??18,selector_state_size:n("selector_state_size")??n("selector_text_size")??13,selector_option_gap:n("selector_option_gap")??0,selector_option_padding:n("selector_option_padding"),selector_option_border:n("selector_option_border")??!1,selector_option_border_color:n("selector_option_border_color")??n("selector_border_color")??a,selector_option_border_width:n("selector_option_border_width")??n("selector_border_width")??1,selector_option_radius:n("selector_option_radius")??n("selector_radius")??7,selector_option_extra_css:yt(s?.selector_option_extra_css,i?.selector_option_extra_css),button_border_color:n("button_border_color")??a,button_bg:n("button_bg")??"transparent",button_radius:n("button_radius")??7,button_text_size:n("button_text_size")??13,button_selected_color:n("button_selected_color")??o,button_selected_text_color:n("button_selected_text_color")??"#002",button_text_color:n("button_text_color")??"currentColor",button_icon_color:n("button_icon_color")??n("button_text_color")??"currentColor",button_state_color:n("button_state_color")??n("button_text_color")??"currentColor",button_selected_icon_color:n("button_selected_icon_color")??n("button_selected_text_color")??"#002",button_selected_state_color:n("button_selected_state_color")??n("button_selected_text_color")??"#002",button_border_width:n("button_border_width")??1,button_icon_size:n("button_icon_size")??18,button_state_size:n("button_state_size")??n("button_text_size")??13,button_option_padding:n("button_option_padding"),input_border_color:n("input_border_color")??a,input_bg:n("input_bg")??l,input_radius:n("input_radius")??6,input_text_size:n("input_text_size")??13,input_focus_color:n("input_focus_color")??o,spinbox_border_color:n("spinbox_border_color")??a,spinbox_bg:n("spinbox_bg")??l,spinbox_radius:n("spinbox_radius")??7,spinbox_text_size:n("spinbox_text_size")??13,spinbox_button_hover_color:n("spinbox_button_hover_color")??o,spinbox_button_width:n("spinbox_button_width")??30}}function ho(e,t){return{...t?.control,...e.control_box,extra_css:yt(t?.control?.extra_css,e.control_box?.extra_css,e.extra_css)||void 0}}function bs(e){return e?.endsWith("_list")?e.slice(0,-5):void 0}function _o(e,t){const s=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(s)return`rgba(${s[1]},${s[2]},${s[3]},${t})`;const i=e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);return i?`rgba(${parseInt(i[1],16)},${parseInt(i[2],16)},${parseInt(i[3],16)},${t})`:e}function yt(...e){return e.map(t=>(t??"").trim().replace(/;+\s*$/,"")).filter(t=>t.length>0).join(";")}function ue(e){const t=[];if(e.background||e.background2){const i=n=>e.background_alpha!==void 0?_o(n,e.background_alpha):n;t.push(`background:${e.background2?`linear-gradient(${e.background_angle??180}deg,${i(e.background??"transparent")},${i(e.background2)})`:i(e.background)}`)}else e.background_alpha!==void 0&&t.push(`background:rgba(0,0,0,${e.background_alpha})`);if(e.border===!0){const i=e.border_width??m("box_border_width")??1,n=e.color??m("box_border_color")??"#00d4ff";t.push(`border:${i}px solid ${n}`)}if(t.push(`border-radius:${e.radius??m("box_radius")??0}px`),t.push(`padding:${e.padding??m("box_padding")??0}px`),e.glow===!0){const i=e.color??m("box_border_color")??"#00d4ff";t.push(`box-shadow:0 0 8px ${i}, inset 0 0 6px ${i}`)}e.blur&&t.push(`backdrop-filter:blur(${e.blur}px);-webkit-backdrop-filter:blur(${e.blur}px)`);const s=yt(e.extra_css);return s&&t.push(s),t.join(";")}function wt(e){const t=[];t.push(`font-size:${e.font_size??m("font_size")??14}px`),e.color&&t.push(`color:${e.color}`),e.font_weight!=null&&t.push(`font-weight:${e.font_weight}`),e.font_family&&t.push(`font-family:${e.font_family}`),e.letter_spacing!=null&&t.push(`letter-spacing:${e.letter_spacing}px`);const s=yt(e.extra_css);return s&&t.push(s),t.join(";")}function mo(e,t,s){let i;if(e.entity.startsWith("virtual:")){const l=s.get(e.entity);if(l===void 0)return!0;i=String(l.value)}else{const l=t?.states[e.entity];if(!l)return!0;i=l.state}const n=Number(i),o=Number(e.value),a=Number.isFinite(n)&&Number.isFinite(o);switch(e.operator){case"==":return a?n===o:i===e.value;case"!=":return a?n!==o:i!==e.value;case">":return a&&n>o;case"<":return a&&n<o;case">=":return a&&n>=o;case"<=":return a&&n<=o;default:return!0}}function gs(e,t){const s=t.trim();if(s==="mW")return{value:e/1e6,unit:"kW"};if(s==="W")return{value:e/1e3,unit:"kW"};if(s==="kW")return{value:e,unit:"kW"};if(s==="MW")return{value:e*1e3,unit:"kW"};if(s==="GW")return{value:e*1e6,unit:"kW"};if(s==="Wh")return{value:e/1e3,unit:"kWh"};if(s==="kWh")return{value:e,unit:"kWh"};if(s==="MWh")return{value:e*1e3,unit:"kWh"};if(s==="GWh")return{value:e*1e6,unit:"kWh"};if(s==="kWh/h")return{value:e,unit:"kW"};if(s==="Wh/h")return{value:e/1e3,unit:"kW"};if(s==="mL"||s==="ml")return{value:e/1e3,unit:"L"};if(s==="L"||s==="l")return{value:e,unit:"L"};if(/^m[3³]$/.test(s))return{value:e*1e3,unit:"L"};if(/^f[tT][3³]$/.test(s))return{value:e*28.3168,unit:"L"};if(/^gal(lon)?s?$/i.test(s))return{value:e*3.78541,unit:"L"};if(/^imp\.?\s*gal(lon)?s?$/i.test(s))return{value:e*4.54609,unit:"L"};if(/^fl\.?\s*oz\.?s?$/i.test(s))return{value:e*.029574,unit:"L"};if(/^(pt|pint)s?$/i.test(s))return{value:e*.473176,unit:"L"};if(/^(qt|quart)s?$/i.test(s))return{value:e*.946353,unit:"L"};if(s==="mg")return{value:e/1e6,unit:"kg"};if(/^g$/.test(s))return{value:e/1e3,unit:"kg"};if(s==="kg")return{value:e,unit:"kg"};if(/^(t|tonne?)s?$/i.test(s))return{value:e*1e3,unit:"kg"};if(/^(lb|lbs|pound)s?$/i.test(s))return{value:e*.453592,unit:"kg"};if(/^oz$/.test(s))return{value:e*.02835,unit:"kg"};const i=s.lastIndexOf("/");if(i>0){const n=s.slice(0,i).trim(),o=s.slice(i+1).trim();if(n){let a=1,l=o;/^s(ec(ond)?s?)?$/i.test(o)?(a=3600,l="h"):/^(min|minute)s?$/i.test(o)&&(a=60,l="h");const{value:c,unit:p}=gs(e*a,n);return{value:c,unit:`${p}/${l}`}}}return{value:e,unit:s}}function Ue(e,t){const s=e.states[t];if(!s)return null;const i=Number(s.state);if(!Number.isFinite(i))return null;const n=s.attributes?.unit_of_measurement??"";return gs(i,n)}function bo(e,t,s,i){const n=new Map;if(!e||!t)return n;for(const o of e){if(o.op==="statistic"){const u=i?.get(`virt:${o.id}`);if(!u)continue;n.set(`virtual:${o.id}`,{value:u.value,unit:o.unit??u.unit});continue}if(o.op==="time_until"){const u=o.mode??m("virtual_mode")??"percent",d=o.value_entity??o.pct_entity??"",h=o.rate_entity??o.power_entity??"",b=Ue(t,d);if(!b)continue;const v=b.value,x=t.states[h];if(!x)continue;const k=Number(x.state);if(!Number.isFinite(k))continue;const{recalc_above:$,recalc_below:y}=o;if(($!=null||y!=null)&&!($!=null&&k>$||y!=null&&k<y)){const H=s?.get(`virtual:${o.id}`);if(H){n.set(`virtual:${o.id}`,H);continue}}const g=x.attributes?.unit_of_measurement??"",w=o.rate_unit_override??g,{value:S}=gs(k,w);if(!Number.isFinite(S))continue;let f;if(o.capacity_entity){const R=Ue(t,o.capacity_entity);if(!R)continue;f=R.value}else f=o.capacity??o.capacity_kwh??1;if(!Number.isFinite(f)||f<=0)continue;let E,I;if(u==="absolute"?(E=S,I=f):(E=S/f*100,I=100),!Number.isFinite(E))continue;const M=o.label_max??o.label_full??m("virtual_label_max")??"Full",P=o.label_min??o.label_empty??m("virtual_label_min")??"Empty",D=[{value:0,label:P},{value:I,label:M},...(o.triggers??[]).map(R=>({value:R.percent??R.value,label:R.label}))];if(v>=I){n.set(`virtual:${o.id}`,{value:-1,unit:"duration",label:M});continue}if(v<=0){n.set(`virtual:${o.id}`,{value:-1,unit:"duration",label:P});continue}const A=ao(v,E,D);if(A.direction==="none"||A.hours===null){const R=D.reduce((H,J)=>!H||Math.abs(J.value-v)<Math.abs(H.value-v)?J:H,void 0);n.set(`virtual:${o.id}`,{value:-1,unit:"duration",label:R?.label});continue}n.set(`virtual:${o.id}`,{value:A.hours,unit:"duration",label:A.label??void 0});continue}const a=o.inputs.map(u=>Ue(t,u)).filter(u=>u!==null);if(a.length===0)continue;const l=a.map(u=>u.value);let c;switch(o.op){case"add":c=l.reduce((u,d)=>u+d,0);break;case"subtract":c=l.slice(1).reduce((u,d)=>u-d,l[0]);break;case"mean":c=l.reduce((u,d)=>u+d,0)/l.length;break;case"signed_net":c=(l[0]??0)-(l[1]??0);break;default:c=l[0]}const p=o.unit??a[0].unit;n.set(`virtual:${o.id}`,{value:c,unit:p})}return n}const st=["#00d4ff","#ff6b35","#7ecb20","#9b59b6","#f39c12","#e74c3c","#1abc9c","#e91e63"];function $t(e){const t=Math.abs(e);return t>=1e6?`${+(e/1e6).toPrecision(3)}M`:t>=1e3?`${+(e/1e3).toPrecision(3)}k`:t<10?`${+e.toPrecision(3)}`:`${Math.round(e)}`}function Us(e,t,s,i,n,o){if(!e.entity)return null;if(e.stat_period)return o.get(`${t}:${s}`)?.value??null;if(e.entity.startsWith("virtual:"))return n.get(e.entity)?.value??null;const a=i?.states[e.entity];if(!a)return null;const l=e.attribute?a.attributes?.[e.attribute]:a.state,c=Number(l);return Number.isFinite(c)?c:null}function qs(e,t){return e.label?e.label:e.entity?e.entity.startsWith("virtual:")?e.entity.replace("virtual:",""):t?.states[e.entity]?.attributes?.friendly_name??e.entity.split(".")[1]?.replace(/_/g," ")??e.entity:""}function Ys(e,t,s,i,n){return e.stat_period?s.get(`${i}:${n}`)?.unit??"":!e.entity||e.entity.startsWith("virtual:")?"":t?.states[e.entity]?.attributes?.unit_of_measurement??""}function go(e,t,s,i){const n=e.width??m("graph_bar_v_width")??200,o=e.height??m("graph_bar_v_height")??130,a=e.graph_show_axes??m("graph_show_axes")??!0,l=a?32:2,c=a?22:2,p=6,d=n-l-4,h=o-p-c,b=Math.max(t.length,1),v=t.filter(f=>f!==null&&Number.isFinite(f)),x=e.graph_min??Math.min(0,...v),k=e.graph_max??(v.length?Math.max(...v):1),$=k-x||1,y=Math.max(2,Math.floor(d/b*.2)),g=(d-y*(b-1))/b,w=f=>h-(f-x)/$*h,S=w(Math.max(x,0));return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${n} ${o}" width="100%" height="${o}" style="display:block;overflow:visible">
    ${a?T`
      <line x1="${l}" y1="${p}" x2="${l}" y2="${p+h}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.5,1].map(f=>{const E=x+f*$,I=p+w(E);return T`
          <line x1="${l}" y1="${I}" x2="${l+d}" y2="${I}" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <text x="${l-4}" y="${I+3}" text-anchor="end" fill="rgba(255,255,255,0.45)" font-size="9">${$t(E)}</text>`})}
      ${i?T`<text x="${l-4}" y="${p-1}" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8">${i}</text>`:_}
    `:_}
    ${t.map((f,E)=>{const I=e.graph_series?.[E]?.color??st[E%st.length],M=l+E*(g+y),P=s[E]??"";if(f===null||!Number.isFinite(f))return T`
        <rect x="${M}" y="${p+h-2}" width="${g}" height="2" fill="rgba(255,255,255,0.12)" rx="1"/>
        ${a?T`<text x="${M+g/2}" y="${p+h+14}" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9">${P.length>8?P.slice(0,7)+"…":P}</text>`:_}`;const D=Math.max(Math.abs(w(f)-S),1),A=p+Math.min(w(f),S);return T`
        <rect x="${M}" y="${A}" width="${g}" height="${D}" fill="${I}" rx="2" opacity="0.85"/>
        ${a?T`<text x="${M+g/2}" y="${p+h+14}" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="9">${P.length>8?P.slice(0,7)+"…":P}</text>`:_}`})}
    ${x<0&&k>0?T`<line x1="${l}" y1="${p+S}" x2="${l+d}" y2="${p+S}" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>`:_}
  </svg>`}</div>`}const lt=-135,Lt=135;function Ct(e,t,s,i){const n=(i-90)*Math.PI/180;return[e+s*Math.cos(n),t+s*Math.sin(n)]}function Rt(e,t,s,i,n){const[o,a]=Ct(e,t,s,i),[l,c]=Ct(e,t,s,n),u=(n-i+360)%360>180?1:0;return`M ${o.toFixed(2)} ${a.toFixed(2)} A ${s} ${s} 0 ${u} 1 ${l.toFixed(2)} ${c.toFixed(2)}`}function vo(e,t,s){const i=e.width??m("graph_gauge_width")??180,n=e.height??Math.round(i*.72),o=e.graph_min??m("graph_min")??0,a=e.graph_max??m("graph_max")??100,l=a-o||1,c=t!==null?Math.max(0,Math.min(1,(t-o)/l)):0,p=lt+c*270,u=Math.min((i-20)/2,(n-28)/(1+Math.sin(135*Math.PI/180))),d=i/2,h=n-14-u*Math.sin((Lt-90)*Math.PI/180),b=e.graph_series?.[0]?.color??st[0],v="rgba(255,255,255,0.12)",[x,k]=Ct(d,h,u*.82,p),[$,y]=Ct(d,h,u*.12,p+180),[g,w]=Ct(d,h,u+10,lt),[S,f]=Ct(d,h,u+10,Lt);return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" style="display:block">
    <path d="${Rt(d,h,u,lt,Lt)}" fill="none" stroke="${v}" stroke-width="8" stroke-linecap="round"/>
    ${t!==null?T`<path d="${Rt(d,h,u,lt,p)}" fill="none" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>`:_}
    <line x1="${$.toFixed(2)}" y1="${y.toFixed(2)}" x2="${x.toFixed(2)}" y2="${k.toFixed(2)}" stroke="${b}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
    <circle cx="${d}" cy="${h}" r="5" fill="${b}" opacity="0.9"/>
    ${t!==null?T`<text x="${d}" y="${h+u*.28}" text-anchor="middle" fill="white" font-size="${Math.round(u*.28)}" font-weight="600">${$t(t)}${s?T`<tspan font-size="${Math.round(u*.17)}" fill="rgba(255,255,255,0.6)"> ${s}</tspan>`:_}</text>`:_}
    <text x="${g.toFixed(1)}" y="${(w+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${$t(o)}</text>
    <text x="${S.toFixed(1)}" y="${(f+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${$t(a)}</text>
  </svg>`}</div>`}function fo(e,t,s){const i=e.width??m("graph_gauge_width")??180,n=e.height??Math.round(i*.72),o=e.graph_min??m("graph_min")??0,a=e.graph_max??m("graph_max")??100,l=a-o||1,c=t!==null?Math.max(0,Math.min(1,(t-o)/l)):0,p=lt+c*270,u=Math.min((i-20)/2,(n-28)/(1+Math.sin(135*Math.PI/180))),d=i/2,h=n-14-u*Math.sin((Lt-90)*Math.PI/180),b=u*.72,v=e.thresholds??[],[x,k]=Ct(d,h,u+10,lt),[$,y]=Ct(d,h,u+10,Lt),g=[];if(v.length===0){const w=e.graph_series?.[0]?.color??st[0];g.push(T`
      <path d="${Rt(d,h,u,lt,Lt)}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="14"/>
      ${t!==null?T`<path d="${Rt(d,h,u,lt,p)}" fill="none" stroke="${w}" stroke-width="14" stroke-linecap="round" opacity="0.85"/>`:_}
    `)}else{const w=[...v].sort((E,I)=>E.value-I.value),S=[o,...w.map(E=>E.value),a],f=["rgba(255,255,255,0.1)",...w.map(E=>E.color)];for(let E=0;E<S.length-1;E++){const I=lt+(S[E]-o)/l*270,M=lt+(S[E+1]-o)/l*270;if(M<=I)continue;const P=t!==null&&S[E]<=t?f[E+1]:"rgba(255,255,255,0.08)";g.push(T`<path d="${Rt(d,h,u,I,Math.min(M,t!==null?p:I))}" fill="none" stroke="${P}" stroke-width="14" stroke-linecap="butt" opacity="0.85"/>`),g.push(T`<path d="${Rt(d,h,u,Math.min(M,t!==null?p:I),M)}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" stroke-linecap="butt"/>`)}}return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${i} ${n}" width="100%" height="${n}" style="display:block">
    ${g}
    <path d="${Rt(d,h,b,lt,Lt)}" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
    ${t!==null?T`<text x="${d}" y="${h+u*.22}" text-anchor="middle" fill="white" font-size="${Math.round(u*.28)}" font-weight="600">${$t(t)}${s?T`<tspan font-size="${Math.round(u*.17)}" fill="rgba(255,255,255,0.6)"> ${s}</tspan>`:_}</text>`:_}
    <text x="${x.toFixed(1)}" y="${(k+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${$t(o)}</text>
    <text x="${$.toFixed(1)}" y="${(y+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${$t(a)}</text>
  </svg>`}</div>`}function yo(e,t,s,i){const n=e.width??m("graph_time_chart_width")??260,o=e.height??m("graph_time_chart_height")??120,a=e.graph_show_axes??m("graph_show_axes")??!0,l=a?32:2,c=a?18:2,p=6,d=n-l-4,h=o-p-c,b=t.flat();if(b.length===0)return r`<div style="width:100%;height:${o}px;display:flex;align-items:center;justify-content:center;opacity:.4;font-size:11px">No data</div>`;const v=Math.min(...b.map(A=>A.t)),x=Math.max(...b.map(A=>A.t)),k=x-v||1,$=b.map(A=>A.v),y=e.graph_min??Math.min(0,...$),g=e.graph_max??Math.max(...$),w=g-y||1,S=A=>l+(A-v)/k*d,f=A=>p+h-(A-y)/w*h,E=f(Math.max(y,0)),I=(x-v)/36e5,M=I<=24?6:I<=72?12:24,P=[],D=new Date(v);for(D.setMinutes(0,0,0),D.setHours(D.getHours()+M-(D.getHours()%M||M));D.getTime()<=x;)P.push(D.getTime()),D.setHours(D.getHours()+M);return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${n} ${o}" width="100%" height="${o}" style="display:block;overflow:visible">
    ${a?T`
      <line x1="${l}" y1="${p}" x2="${l}" y2="${p+h}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.25,.5,.75,1].map(A=>{const R=y+A*w,H=f(R);return T`
          <line x1="${l}" y1="${H}" x2="${l+d}" y2="${H}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${l-4}" y="${H+3}" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="8">${$t(R)}</text>`})}
      ${P.map(A=>{const R=S(A),J=`${new Date(A).getHours()}:00`;return T`
          <line x1="${R}" y1="${p}" x2="${R}" y2="${p+h}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${R}" y="${p+h+11}" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="8">${J}</text>`})}
    `:_}
    ${t.map((A,R)=>{const H=e.graph_series?.[R]?.color??st[R%st.length],J=e.graph_stroke_width??m("graph_stroke_width")??1.5,F=A.filter(W=>Number.isFinite(W.v));if(F.length<2)return _;const K=F.map(W=>`${S(W.t).toFixed(1)},${f(W.v).toFixed(1)}`).join(" ");if(i){const W=F[0],dt=F[F.length-1],nt=`M ${S(W.t).toFixed(1)},${E.toFixed(1)} L ${K} L ${S(dt.t).toFixed(1)},${E.toFixed(1)} Z`,_t=e.graph_fill_opacity??m("graph_fill_opacity")??.2;return T`
          <path d="${nt}" fill="${H}" opacity="${_t}"/>
          <polyline points="${K}" fill="none" stroke="${H}" stroke-width="${J}" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}return T`<polyline points="${K}" fill="none" stroke="${H}" stroke-width="${J}" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`})}
    ${y<0&&g>0?T`<line x1="${l}" y1="${E}" x2="${l+d}" y2="${E}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>`:_}
    ${(e.graph_show_legend??m("graph_show_legend")??!1)&&s.some(Boolean)?s.map((A,R)=>{const H=e.graph_series?.[R]?.color??st[R%st.length];return T`<rect x="${l+R*70}" y="${p+2}" width="10" height="3" fill="${H}" rx="1"/>
        <text x="${l+R*70+13}" y="${p+6}" fill="rgba(255,255,255,0.6)" font-size="8">${A}</text>`}):_}
  </svg>`}</div>`}function $o(e,t,s,i){const n=e.width??m("graph_bar_v_width")??200,o=e.height??m("graph_bar_v_height")??130,a=e.graph_show_axes??m("graph_show_axes")??!0,l=a?32:4,c=a?10:4,p=6,u=a?20:4,d=n-l-c,h=o-p-u,v=t.filter(g=>g!==null&&Number.isFinite(g)&&g>0).reduce((g,w)=>g+w,0)||1,x=Math.min(d*.6,40),k=l+(d-x)/2;let $=p+h;const y=t.map((g,w)=>{const S=e.graph_series?.[w]?.color??st[w%st.length];if(g===null||!Number.isFinite(g)||g<=0)return{color:S,h:0,y:$,lbl:s[w]??"",v:g??0};const f=g/v*h;return $-=f,{color:S,h:f,y:$,lbl:s[w]??"",v:g}});return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${n} ${o}" width="100%" height="${o}" style="display:block;overflow:visible">
    ${a?T`
      ${i?T`<text x="${l-4}" y="${p-1}" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8">${i}</text>`:_}
      <line x1="${l}" y1="${p}" x2="${l}" y2="${p+h}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.5,1].map(g=>{const w=g*v,S=p+h-g*h;return T`
          <line x1="${l}" y1="${S}" x2="${l+d}" y2="${S}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${l-4}" y="${S+3}" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="8">${$t(w)}</text>`})}
    `:_}
    ${y.map(g=>g.h>0?T`
      <rect x="${k.toFixed(1)}" y="${g.y.toFixed(1)}" width="${x.toFixed(1)}" height="${g.h.toFixed(1)}" fill="${g.color}" opacity="0.85" rx="1"/>
      ${g.h>10?T`<text x="${(k+x/2).toFixed(1)}" y="${(g.y+g.h/2+3).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8">${g.lbl.length>8?g.lbl.slice(0,7)+"…":g.lbl}</text>`:_}
    `:_)}
  </svg>`}</div>`}function xo(e,t){const s=e.width??m("graph_time_chart_width")??260,i=e.height??36;if(t.length<1)return r`<div style="width:${s}px;height:${i}px"/>`;const n=t[0].t,o=t[t.length-1].t,a=o-n||1,l=p=>(p-n)/a*s,c=t.map((p,u)=>{const d=l(p.t),h=u+1<t.length?l(t[u+1].t):s,b=Math.abs(Math.round(p.v))%st.length;return{x1:d,x2:h,color:e.graph_series?.[b]?.color??st[b]}});return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${s} ${i}" width="100%" height="${i}" style="display:block">
    ${c.map(p=>T`
      <rect x="${p.x1.toFixed(1)}" y="0" width="${Math.max(p.x2-p.x1,.5).toFixed(1)}" height="${i}" fill="${p.color}" opacity="0.8"/>
    `)}
  </svg>`}</div>`}function wo(e,t,s,i,n){const o=e.graph_series??[],a=e.graph_type??m("graph_type")??"bar";if(a==="gauge-needle"||a==="gauge"){const u=o[0],d=u?Us(u,e.id,0,t,s,i):null,h=u?Ys(u,t,i,e.id,0):"";return a==="gauge-needle"?vo(e,d,h):fo(e,d,h)}if(a==="stat-line"||a==="line"||a==="area"){const u=o.map((h,b)=>n.get(`${e.id}:${b}`)??[]),d=o.map(h=>qs(h,t));return yo(e,u,d,a==="area")}if(a==="state-timeline"){const u=n.get(`${e.id}:0`)??[];return xo(e,u)}const l=o.map((u,d)=>Us(u,e.id,d,t,s,i)),c=o.map(u=>qs(u,t)),p=o.length>0?Ys(o[0],t,i,e.id,0):"";return a==="bar-stacked"?$o(e,l,c,p):go(e,l,c,p)}function ko(e,t,s,i){if(!e.entity)return 0;if(e.stat_period)return i.get(e.id)?.value??0;if(e.entity.startsWith("virtual:"))return s.get(e.entity)?.value??0;const n=t?.states[e.entity];if(!n)return 0;const o=e.attribute?n.attributes?.[e.attribute]:n.state;return Number(o)||0}function Dt(e,t,s,i,n,o=new Map,a=new Map,l,c){if(ht(e.type)){const y=ro[e.type];return y?ae`<${y} .field=${e} .defaults=${i} .hass=${n} .onChange=${c} .onAction=${l} .virtuals=${s}></${y}>`:r``}if(e.type==="blank")return r`<div style="height:${e.blank_gap??10}px"></div>`;if(e.type==="rule")return r`<hr style="border:none;border-top:2px solid currentColor;width:80%;margin:0;opacity:0.4">`;if(e.type==="graph"){const y=wo(e,n,s,o,a);return e.extra_css?r`<div style=${e.extra_css}>${y}</div>`:y}if(e.type==="embedded_card"){const y=e.width??300,g=ae`<${Vs}
      style="display:block;width:${y}px;"
      .cardConfig=${e.embed_card_config??{}}
      .hass=${n}
      ?transparent=${e.embed_transparent??!1}
    ></${Vs}>`;return e.extra_css?r`<div style=${e.extra_css}>${g}</div>`:g}if(e.type==="svg"){const y=e.margin,g=y!=null?e.dock==="right"?`margin-left:${y}px;`:e.dock==="left"?`margin-right:${y}px;`:`margin-top:${y}px;margin-bottom:${y}px;`:"",w=(P,D)=>{if(!P||!n)return;const A=n.states[P];if(!A)return;const R=D?A.attributes?.[D]:A.state;return R!=null?String(R):void 0};let S;if(e.tank_pct_entity&&n){const P=parseFloat(w(e.tank_pct_entity,e.tank_pct_attribute)??"");Number.isFinite(P)&&(S=Math.max(0,Math.min(100,P)))}else if(e.tank_volume_entity&&n){const P=parseFloat(w(e.tank_volume_entity,e.tank_volume_attribute)??""),D=e.tank_capacity_entity?parseFloat(w(e.tank_capacity_entity,e.tank_capacity_attribute)??""):e.tank_capacity;Number.isFinite(P)&&D!=null&&Number.isFinite(D)&&D>0&&(S=Math.max(0,Math.min(100,P/D*100)))}const f=e.charging_entity?w(e.charging_entity,e.charging_attribute)==="on":!1,E=ae`<${js}
      .field=${e}
      .defaults=${i}
      .rawValue=${ko(e,n,s,o)}
      .fillPct=${S}
      .entityUnit=${e.entity&&!e.entity.startsWith("virtual:")&&n?n.states[e.entity]?.attributes?.unit_of_measurement??"":""}
    ></${js}>`,I=e.height??100,M=f?r`<div style="position:relative;display:inline-block;line-height:0;">${E}<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;font-size:${Math.round(I*.35)}px;pointer-events:none;text-shadow:0 0 4px rgba(0,0,0,0.8);">⚡</div></div>`:E;return g?r`<div style=${g}>${M}</div>`:M}const p=Ve(e,t,i),u=e.align??t.align??"left",d=e.tap_action&&e.tap_action.action!=="none",h=d&&l?y=>{y.stopPropagation(),l(e,e.tap_action.entity,"tap")}:void 0,b=d?"cursor:pointer;":"";if(e.type==="icon"){const y=p.font_size??m("icon_size")??20,g=p.color??"";return r`<ha-icon
      icon=${e.icon??""}
      style="${b}--mdc-icon-size:${y}px;${g?`color:${g};`:""}${e.extra_css??""}"
      @click=${h}
    ></ha-icon>`}if(e.type==="label")return r`<span
      class="ec-label"
      style="${b}${wt(p)};text-align:${u}"
      @click=${h}
      >${e.text??""}</span
    >`;const{value:v,unit:x}=Ti(n,e,i,s,o);let k=v;if(e.hide_below!==void 0){const y=parseFloat(k);if(Number.isFinite(y)&&Math.abs(y)<e.hide_below)return _}if(e.show_time_until_label&&!e.time_until_layout?.length&&e.entity?.startsWith("virtual:")){const y=s.get(e.entity)?.label;y&&(k=`${y}: ${v}`)}if(e.time_until_layout?.length&&e.entity?.startsWith("virtual:")){const y=s.get(e.entity),g=y?.label??"",w=Ve({...e,type:"label"},t,i),S=t.field_gap??i?.field_gap??m("field_gap")??4;if(y&&y.value<0)return r`<span class="ec-label" style="${wt(w)}">${g}</span>`;const f=[[]];for(const P of e.time_until_layout)P.type==="newline"?f.push([]):f[f.length-1].push(P);const E=f.filter(P=>P.length>0),I=P=>P.type==="text"?r`<span class="ec-label" style="${wt(w)}">${P.text??""}</span>`:P.type==="label"?r`<span class="ec-label" style="${wt(w)}">${g}</span>`:P.type==="value"?r`<span class="ec-value" style="${b}${wt(p)}" @click=${h}>${k}${x?r`<span class="ec-unit">${x}</span>`:_}</span>`:_,M=P=>r`<span style="display:inline-flex;align-items:baseline;gap:${S}px;">${P.map(I)}</span>`;return E.length===1?M(E[0]):r`<div style="display:flex;flex-direction:column;align-items:${kt(u)};gap:${S}px;">${E.map(M)}</div>`}const $=r`<span
    class="ec-value"
    style="${b}${wt(p)};text-align:${u}"
    @click=${h}
    >${k}${x?r`<span class="ec-unit">${x}</span>`:_}</span
  >`;if(e.label){const y=Ve({...e,type:"label"},t,i),g=t.field_gap??i?.field_gap??m("field_gap")??4,w=e.label_position??m("label_position")??"above",S=w==="left"||w==="right",f=S?"row":"column",E=S?"baseline":kt(u),I=r`<span class="ec-label" style="${wt(y)};text-align:${u}">${e.label}</span>`;return r`<div style="display:flex;flex-direction:${f};align-items:${E};gap:${g}px;">${w==="below"||w==="right"?[$,I]:[I,$]}</div>`}return $}function So(e,t,s,i,n=new Map,o=new Map,a=new Map,l,c){const p={...s?.card,...t?.card,...e.box};p.extra_css=yt(s?.card?.extra_css,t?.card?.extra_css,e.box?.extra_css)||void 0;const u=e.columns??t?.columns??m("columns")??2,d=e.field_gap??t?.field_gap??s?.field_gap??m("extended_field_gap")??8,h=e.align??m("align")??"left",b={...s,label:{...s?.label,...t?.label,extra_css:yt(s?.label?.extra_css,t?.label?.extra_css)||void 0},value:{...s?.value,...t?.value,extra_css:yt(s?.value?.extra_css,t?.value?.extra_css)||void 0},field_gap:t?.field_gap??s?.field_gap,column_gap:e.column_gap??t?.column_gap??s?.column_gap},v={id:e.id,label_style:e.label_style,value_style:e.value_style,align:h},x=[];e.fields.forEach((w,S)=>{w.type==="value"&&w.label&&w.label_column!=null?(x.push({f:{...w,type:"label",text:w.label,column:w.label_column},i:S-.5}),x.push({f:{...w,label:void 0},i:S})):x.push({f:w,i:S})});const k=x.filter(w=>w.f.column!=null),$=x.filter(w=>w.f.column==null),y=Math.ceil($.length/u)||1,g=Array.from({length:u},()=>[]);return $.forEach((w,S)=>{const f=Math.min(u-1,Math.floor(S/y));g[f].push(w)}),k.forEach(w=>{const S=Math.min(u,Math.max(1,w.f.column))-1;g[S].push(w)}),g.forEach(w=>w.sort((S,f)=>S.i-f.i)),r`
    <div class="ec-ext-card" style="${ue(p)}">
      ${e.name?r`<div class="ec-ext-title">${e.name}</div>`:_}
      <div class="ec-ext-grid" style="display:flex;align-items:flex-start;gap:${d}px;">
        ${g.map(w=>r`
          <div style="flex:1 1 0;min-width:0;display:flex;flex-direction:column;gap:${d}px;">
            ${w.map(({f:S})=>Dt(S,v,n,b,i,o,a,l,c))}
          </div>
        `)}
      </div>
    </div>
  `}function Co(e,t){return e?.length?r`${e.map(s=>{const i=ms[s.anchor??"top-left"],n=["position:absolute",`left:${s.position.x*100}%`,`top:${s.position.y*100}%`,`width:${s.width}px`,`height:${s.height}px`,`transform:${i}`,s.color?`background:${s.color}`:"",s.radius?`border-radius:${s.radius}px`:"",s.tap_action||s.hold_action||s.double_tap_action?"cursor:pointer":"","box-sizing:border-box"].filter(Boolean).join(";");return r`<div
      class="ec-zone"
      data-zone-id="${s.id}"
      style=${n}
      @click=${o=>{!s.tap_action||s.tap_action.action==="none"||!t||(o.stopPropagation(),t(s,s.tap_action.entity,"tap"))}}
    ></div>`})}`:r``}function Ks(e,t,s,i=new Map,n=new Map,o=new Map,a,l=!1,c=!1,p){if(!c&&e.visible_when&&!mo(e.visible_when,s,i))return r``;const u=e.tap_action&&e.tap_action.action!=="none",d=u&&!l&&a?F=>{F.stopPropagation(),a(e,e.tap_action.entity,"tap")}:void 0,h=uo(e,t),b=e.field_gap??t?.field_gap??m("field_gap")??4,v=e.column_gap??t?.column_gap??m("column_gap")??3,x=e.align??m("align")??"left",k=e.columns??t?.card_columns??m("card_columns")??1,$=e.fields.filter(F=>F.dock==="left"),y=e.fields.filter(F=>F.dock==="right"),g=e.fields.filter(F=>!F.dock),w=$.length>0||y.length>0,S=!!e.bg?.url,f=l?["position:relative",e.width!=null?`width:${e.width}px`:"","box-sizing:border-box",e.transparent?"":ue(h)].filter(Boolean).join(";"):["position:absolute",`left:${e.position.x*100}%`,`top:${e.position.y*100}%`,`transform:${ms[e.anchor??m("anchor")??"top-left"]}`,e.width!=null?`width:${e.width}px`:"","box-sizing:border-box",e.transparent?"":ue(h),u?"cursor:pointer":""].filter(Boolean).join(";"),E=(()=>{if(!e.bg?.url)return _;const F=e.bg,K=F.padding_top??0,W=F.padding_right??0,dt=F.padding_bottom??0,nt=F.padding_left??0,_t=F.fit??"cover",j=F.opacity??1;if(F.width!=null||F.height!=null){const Nt=F.width!=null?`width:${F.width}px`:"",Zt=F.height!=null?`height:${F.height}px`:"";return r`<div style="grid-area:1/1;${Nt};${Zt};margin-top:${K}px;margin-left:${nt}px;justify-self:start;align-self:start;background-image:url('${F.url}');background-size:${_t};background-position:center;background-repeat:no-repeat;opacity:${j};pointer-events:none"></div>`}return r`<div style="grid-area:1/1;padding:${K}px ${W}px ${dt}px ${nt}px;background-image:url('${F.url}');background-size:${_t};background-position:center;background-repeat:no-repeat;background-origin:content-box;background-clip:content-box;opacity:${j};pointer-events:none"></div>`})(),I=[];let M=[];for(const F of g)F.column!=null&&F.column_end!=null&&F.column_end>F.column?(M.length&&(I.push({kind:"group",fields:M}),M=[]),I.push({kind:"span",field:F})):M.push(F);M.length&&I.push({kind:"group",fields:M});const P="display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0",D=`display:flex;flex-direction:column;gap:${b}px;align-items:${kt(x)};flex:1;min-width:0`,A=F=>{const K=F.filter(j=>j.column==null),W=F.filter(j=>j.column!=null),dt=Math.ceil(K.length/k)||1,nt=Array.from({length:k},()=>[]);K.forEach((j,Nt)=>{nt[Math.min(k-1,Math.floor(Nt/dt))].push(j)}),W.forEach(j=>{nt[Math.max(0,Math.min(k-1,j.column-1))].push(j)});const _t=`display:flex;flex-direction:column;gap:${b}px;align-items:${kt(x)}`;return r`<div style="display:flex;flex-direction:row;gap:${v}px;align-items:flex-start;justify-content:${kt(x)}">
      ${nt.map(j=>j.length?r`<div style=${_t}>${j.map(Nt=>Dt(Nt,e,i,t,s,n,o,a,p))}</div>`:_)}
    </div>`},R=F=>r`<div style="display:flex;flex-direction:column;align-items:${kt(F.align??x)}">${Dt(F,e,i,t,s,n,o,a,p)}</div>`,H=()=>r`<div style="display:flex;flex-direction:column;gap:${b}px">
    ${I.map(F=>F.kind==="span"?R(F.field):A(F.fields))}
  </div>`;if(w){const F=k>1?r`<div style="flex:1;min-width:0">${H()}</div>`:r`<div style=${D}>${g.map(W=>Dt(W,e,i,t,s,n,o,a,p))}</div>`,K=r`
      ${$.length?r`<div style=${P}>${$.map(W=>Dt(W,e,i,t,s,n,o,a,p))}</div>`:_}
      ${g.length?F:_}
      ${y.length?r`<div style=${P}>${y.map(W=>Dt(W,e,i,t,s,n,o,a,p))}</div>`:_}`;return S?r`<div class="ec-card" data-card-id="${e.id}" style="${f};display:grid;overflow:hidden" @click=${d}>
        ${E}
        <div style="grid-area:1/1;display:flex;flex-direction:row;gap:${v}px;align-items:center">${K}</div>
      </div>`:r`<div class="ec-card" data-card-id="${e.id}" style="${f};display:flex;flex-direction:row;gap:${v}px;align-items:center" @click=${d}>${K}</div>`}if(k>1)return S?r`<div class="ec-card" data-card-id="${e.id}" style="${f};display:grid;overflow:hidden" @click=${d}>
        ${E}
        <div style="grid-area:1/1">${H()}</div>
      </div>`:r`<div class="ec-card" data-card-id="${e.id}" style="${f}" @click=${d}>${H()}</div>`;const J=e.fields.map(F=>Dt(F,e,i,t,s,n,o,a,p));return S?r`<div class="ec-card" data-card-id="${e.id}" style="${f};display:grid;overflow:hidden" @click=${d}>
      ${E}
      <div style="grid-area:1/1;display:flex;flex-direction:column;gap:${b}px;align-items:${kt(x)}">${J}</div>
    </div>`:r`<div class="ec-card" data-card-id="${e.id}" style="${f};display:flex;flex-direction:column;gap:${b}px;align-items:${kt(x)}" @click=${d}>${J}</div>`}const Eo=it`
  .ec-card {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    color: #fff;
    white-space: nowrap;
    line-height: 1.15;
  }
  .ec-label {
    display: block;
  }
  .ec-value {
    display: block;
  }
  .ec-unit {
    font-size: 0.7em;
    opacity: 0.85;
    margin-left: 0.15em;
  }

  /* ── Expand overlay ── */
  .ec-expand-backdrop {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ec-expand-panel {
    position: relative;
    width: 80%;
    height: 80%;
    overflow: auto;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ec-expand-card-wrap {
    flex-shrink: 0;
    transform-origin: center center;
    transition: transform 0.15s ease-out;
  }
  .ec-expand-close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 13px;
    line-height: 1.4;
  }
  .ec-expand-close:hover {
    background: rgba(0, 0, 0, 0.75);
  }

  /* ── Extended card overlay ── */
  .ec-extended-backdrop {
    position: absolute;
    inset: 0;
    z-index: 51;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ec-extended-panel {
    position: relative;
    overflow: auto;
    border-radius: 8px;
    max-height: 85%;
  }
  .ec-ext-card {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    color: #fff;
    line-height: 1.15;
    box-sizing: border-box;
  }
  .ec-ext-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
  .ec-ext-close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 13px;
    line-height: 1.4;
  }
  .ec-ext-close:hover {
    background: rgba(0, 0, 0, 0.75);
  }
`;function Vt(e,t,s){let i;if(e.card!==void 0){const n=s?.[e.card];if(n!==void 0&&e.side!==void 0)i=lo(n,e.side);else{const o=t.find(a=>a.id===e.card);i=o?{x:o.position.x,y:o.position.y}:{x:0,y:0}}}else i={x:e.x??0,y:e.y??0};return{x:i.x+(e.dx??0),y:i.y+(e.dy??0)}}function Xs(e,t){if(e.length<2)return"";if(t==="straight")return e.map((o,a)=>`${a===0?"M":"L"} ${o.x} ${o.y}`).join(" ");const s=12,i=[`M ${e[0].x} ${e[0].y}`];for(let o=1;o<e.length-1;o++){const a=e[o-1],l=e[o],c=e[o+1],p=l.x-a.x,u=l.y-a.y,d=Math.sqrt(p*p+u*u),h=c.x-l.x,b=c.y-l.y,v=Math.sqrt(h*h+b*b);if(d<s*2||v<s*2)i.push(`L ${l.x} ${l.y}`);else{const x=s/d,k=l.x-p*x,$=l.y-u*x,y=s/v,g=l.x+h*y,w=l.y+b*y;i.push(`L ${k.toFixed(2)} ${$.toFixed(2)}`),i.push(`Q ${l.x} ${l.y} ${g.toFixed(2)} ${w.toFixed(2)}`)}}const n=e[e.length-1];return i.push(`L ${n.x} ${n.y}`),i.join(" ")}function Zs(e,t,s){const i=e.duration??m("flow_duration")??2;if(!e.entity||!t)return{duration:i,reverse:!1,hidden:!1};const n=t.states[e.entity],o=n?Number(n.state):NaN;if(!Number.isFinite(o))return{duration:i,reverse:!1,hidden:!1};const l=(n?.attributes?.unit_of_measurement??"")==="kW"?o*1e3:o,c=s?.power_unit==="kW"?l/1e3:l,p=Math.abs(c);if(e.min_power!==void 0&&p<e.min_power)return{duration:i,reverse:!1,hidden:!0};let u=c<0;e.invert&&(u=!u);const d=e.speed_min_value,h=e.speed_max_value;let b;if(d!==void 0&&h!==void 0&&h>d){const v=e.speed_min_duration??i,x=e.speed_max_duration??Math.max(.2,i*.1),k=Math.max(0,Math.min(1,(p-d)/(h-d)));b=v+k*(x-v)}else b=i;return{duration:b,reverse:u,hidden:!1}}function No(e,t,s,i,n){const o=e.flows??[],a=e.cards??[],{totalW:l,totalH:c}=t,p=o.map(h=>{if((h.points??[]).length<2)return null;const b=h.points.map(v=>Vt(v,a,i)).map(v=>({x:v.x*l,y:v.y*c}));return{flow:h,pts:b}}).filter(h=>h!==null),u=p.filter(({flow:h})=>h.style!=="particles"),d=p.filter(({flow:h})=>h.style==="particles");return r`
    <svg
      class="ec-flows"
      viewBox="0 0 ${l} ${c}"
      preserveAspectRatio="none"
      style="position:absolute;inset:0;width:${l}px;height:${c}px;overflow:visible;pointer-events:none;"
    >
      ${u.map(({flow:h,pts:b})=>{const v=h.style??m("flow_style")??"dashes",x=h.forward_color??h.color??m("flow_color")??"#00d4ff",k=h.reverse_color??x,$=h.width??m("flow_width")??3,{duration:y,reverse:g,hidden:w}=Zs(h,s,n),S=g?k:x,f=(Math.round(y*10)/10).toFixed(1),E=g?[...b].reverse():b,I=Xs(E,h.curve??m("flow_curve")??"straight");return T`<path
          d=${I}
          class="ecf ecf-${v}"
          style="fill:none;stroke:${S};stroke-width:${$}px;stroke-linecap:round;--ecf-dur:${f}s;${w?"opacity:0;":""}"
        ></path>`})}
    </svg>
    <div
      class="ec-particles"
      style="position:absolute;inset:0;pointer-events:none;"
    >
      ${d.map(({flow:h,pts:b})=>{const v=h.forward_color??h.color??m("flow_color")??"#00d4ff",x=h.reverse_color??v,k=h.width??m("flow_width")??3,{duration:$,reverse:y,hidden:g}=Zs(h,s,n),w=y?x:v;if(g)return _;const S=(Math.round($*10)/10).toFixed(1),f=y?[...b].reverse():b,E=Xs(f,h.curve??m("flow_curve")??"straight"),I=h.particle_count??m("flow_particle_count")??6;return Array.from({length:I},(M,P)=>{const D=-(P*Number(S)/I).toFixed(3);return r`<div
            class="ecf-dot"
            style="offset-path:path('${E}');--ecf-dur:${S}s;animation-delay:${D}s;background:${w};width:${k*2}px;height:${k*2}px;"
          ></div>`})})}
    </div>
  `}const Io=it`
  @keyframes ec-dash {
    to {
      stroke-dashoffset: -20;
    }
  }
  @keyframes ec-dash-fluid {
    to {
      stroke-dashoffset: -110;
    }
  }
  @keyframes ec-move {
    from {
      offset-distance: 0%;
    }
    to {
      offset-distance: 100%;
    }
  }

  .ecf {
    animation: ec-dash var(--ecf-dur, 2s) linear infinite;
  }
  .ecf-dashes {
    stroke-dasharray: 10 10;
  }
  .ecf-dots {
    stroke-dasharray: 1 12;
    stroke-linecap: round;
  }
  .ecf-fluid {
    stroke-dasharray: 30 80;
    animation-name: ec-dash-fluid;
  }

  .ecf-dot {
    position: absolute;
    border-radius: 50%;
    offset-rotate: 0deg;
    animation: ec-move var(--ecf-dur, 2s) linear infinite;
    box-shadow: 0 0 6px currentColor;
  }
`,De="0.60",Ai="26/07/2026",ts=1;function zo(e,t){const{type:s,...i}=e;return{ec_template:!0,version:ts,card_version:De,name:t.trim()||"Mosaic Canvas Template",exported:new Date().toISOString(),config:i}}function Fo(e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=`${e.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(i)}function Po(e){let t;try{t=JSON.parse(e)}catch{return{template:null,error:"Invalid JSON — could not parse file."}}if(typeof t!="object"||t===null||!t.ec_template)return{template:null,error:"Not a valid Mosaic Canvas template file."};const s=t;return typeof s.version!="number"?{template:null,error:"Template is missing a version number."}:s.version>ts?{template:null,error:`Template schema v${s.version} is newer than this card supports (v${ts}). Update the card first.`}:{template:s,error:null}}function Mo(e,t){return{type:t,...e.config}}const Di=1;function To(e,t){return{mosaic_control_variants:!0,version:Di,card_version:De,name:t.trim()||"Mosaic Control Variants",exported:new Date().toISOString(),variants:e}}function Ao(e){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(t),i=document.createElement("a");i.href=s,i.download=`${e.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s)}function Do(e){let t;try{t=JSON.parse(e)}catch{return{pack:null,error:"File is not valid JSON."}}if(typeof t!="object"||t===null)return{pack:null,error:"File is not a control variant pack."};const s=t;return s.mosaic_control_variants!==!0?{pack:null,error:"File is not a control variant pack. (Card layouts use Import Template instead.)"}:typeof s.version!="number"||s.version>Di?{pack:null,error:`Pack was made by a newer Mosaic version (schema ${String(s.version)}). Update the card first.`}:typeof s.variants!="object"||s.variants===null?{pack:null,error:"Pack contains no variants."}:{pack:{mosaic_control_variants:!0,version:s.version,card_version:s.card_version??"unknown",name:s.name?.trim()||"Imported variants",exported:s.exported??"",variants:s.variants},error:null}}function Ro(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&t.id.length>0&&typeof t.label=="string"&&t.label.length>0}function Bo(e,t){const s={...e};let i=0,n=0;for(const o of ds){const a=(t.variants[o]??[]).filter(Ro);if(!a.length)continue;const l=[...s[o]??[]],c=new Set([...Fi(o).map(p=>p.id),...l.map(p=>p.id)]);for(const p of a){let u=p.id;if(c.has(u)){const d=Pi(p.id);let h=2;for(;c.has(`${d}_${h}`);)h++;u=`${d}_${h}`,n++}c.add(u),l.push({...p,id:u}),i++}s[o]=l}return{merged:s,added:i,renamed:n}}var Lo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,z=(e,t,s,i)=>{for(var n=i>1?void 0:i?Oo(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Lo(t,s,n),n};const Js=rt(Te);function q(e){return Math.round(e*10)/10}function L(e){return Math.round(e*1e4)/1e4}function xe(e,t,s,i,n){const o=(e.split(".")[1]??"sensor").replace(/_/g," "),a=t.replace(/_/g," "),l=["# Add to configuration.yaml","sensor:","  - platform: statistics",`    name: "${o} ${a}"`,`    entity_id: ${e}`,`    state_characteristic: ${t}`];s&&(l.push("    max_age:"),l.push(`      hours: ${s}`)),i&&l.push(`    sampling_size: ${i}`),t==="percentile"&&n&&l.push(`    percentile: ${n}`);const c=`${e.split(".")[1]??"sensor"}_${t}`;return l.push(""),l.push("# Then set the field entity to:"),l.push(`# sensor.${c}`),l.join(`
`)}const Qs=[{value:"average_linear",label:"Average (linear)",group:"Averages"},{value:"average_step",label:"Average (step)",group:"Averages",binary:!0},{value:"average_timeless",label:"Average (timeless)",group:"Averages",binary:!0},{value:"mean",label:"Mean",group:"Averages",binary:!0},{value:"mean_circular",label:"Mean (circular)",group:"Averages"},{value:"median",label:"Median",group:"Averages"},{value:"value_max",label:"Value maximum",group:"Extremes"},{value:"value_min",label:"Value minimum",group:"Extremes"},{value:"distance_absolute",label:"Range (max − min)",group:"Extremes"},{value:"standard_deviation",label:"Standard deviation",group:"Spread"},{value:"variance",label:"Variance",group:"Spread"},{value:"noisiness",label:"Noisiness",group:"Spread"},{value:"percentile",label:"Percentile",group:"Spread"},{value:"distance_95_percent_of_values",label:"Distance 95% of values",group:"Spread"},{value:"distance_99_percent_of_values",label:"Distance 99% of values",group:"Spread"},{value:"change",label:"Change",group:"Change"},{value:"change_sample",label:"Change per sample",group:"Change"},{value:"change_second",label:"Change per second",group:"Change"},{value:"sum",label:"Sum",group:"Sums"},{value:"sum_differences",label:"Sum of differences",group:"Sums"},{value:"sum_differences_nonnegative",label:"Sum of differences (positive)",group:"Sums"},{value:"total",label:"Total",group:"Sums"},{value:"count",label:"Count (samples)",group:"Counts",binary:!0},{value:"count_on",label:"Count (on)",group:"Counts",binary:!0},{value:"count_off",label:"Count (off)",group:"Counts",binary:!0},{value:"datetime_newest",label:"Timestamp (newest)",group:"Timestamps"},{value:"datetime_oldest",label:"Timestamp (oldest)",group:"Timestamps",binary:!0},{value:"datetime_value_max",label:"Timestamp (at max)",group:"Timestamps"},{value:"datetime_value_min",label:"Timestamp (at min)",group:"Timestamps"}],qe=["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],Ye={"top-left":"Top Left",top:"Top Center","top-right":"Top Right",left:"Left Middle",center:"Center",right:"Right Middle","bottom-left":"Bottom Left",bottom:"Bottom Center","bottom-right":"Bottom Right"},ne=["left","center","right"],Go=[{name:"--primary-color",label:"Primary"},{name:"--text-primary-color",label:"Text on Primary"},{name:"--accent-color",label:"Accent"},{name:"--primary-text-color",label:"Primary text"},{name:"--secondary-text-color",label:"Secondary text"},{name:"--disabled-text-color",label:"Disabled text"},{name:"--primary-background-color",label:"Primary background"},{name:"--secondary-background-color",label:"Secondary background"},{name:"--card-background-color",label:"Card background"},{name:"--divider-color",label:"Divider"},{name:"--state-icon-color",label:"State icon"},{name:"--state-active-color",label:"State Active"},{name:"--state-inactive-color",label:"State Inactive"},{name:"--error-color",label:"Error"},{name:"--warning-color",label:"Warning"},{name:"--success-color",label:"Success"},{name:"--info-color",label:"Info"}],ti=["value","label","icon","svg","blank","rule","embedded_card","toggle","slider","dropdown","selector","input","spinbox","button"],we={value:"Value",label:"Label",icon:"Icon",svg:"Element Library",graph:"Graph / Gauge",blank:"Blank",rule:"Horizontal Rule",embedded_card:"Embedded Card",toggle:"Toggle",slider:"Slider",dropdown:"Dropdown",selector:"Selector",input:"Input",spinbox:"Spin Box",button:"Button"},ke={value:"mdi:function-variant",label:"mdi:format-title",icon:"mdi:image",svg:"mdi:shape-outline",graph:"mdi:chart-line",blank:"mdi:crop-square-outline",rule:"mdi:minus",embedded_card:"mdi:widgets",toggle:"mdi:toggle-switch-outline",slider:"mdi:tune-variant",dropdown:"mdi:form-dropdown",selector:"mdi:view-dashboard-variant-outline",input:"mdi:form-textbox",spinbox:"mdi:numeric",button:"mdi:gesture-tap-button"},Ke=[{value:"stat-line",label:"Statistics — Line"},{value:"bar",label:"Statistics — Bar"},{value:"bar-stacked",label:"Statistics — Bar (stacked)"},{value:"line",label:"History — Line (with unit)"},{value:"state-timeline",label:"History — State timeline"},{value:"gauge",label:"Arc Gauge"},{value:"gauge-needle",label:"Arc Gauge (Needle)"}],ei=(()=>{try{return new URL("./",import.meta.url).href}catch{return"/local/community/mosaic-canvas-card/"}})(),Ho=[{type:"alarm-panel",name:"Alarm Panel"},{type:"button",name:"Button"},{type:"calendar",name:"Calendar"},{type:"entities",name:"Entities"},{type:"entity",name:"Entity"},{type:"entity-filter",name:"Entity Filter"},{type:"gauge",name:"Gauge"},{type:"glance",name:"Glance"},{type:"history-graph",name:"History Graph"},{type:"horizontal-stack",name:"Horizontal Stack"},{type:"humidifier",name:"Humidifier"},{type:"iframe",name:"iFrame"},{type:"light",name:"Light"},{type:"logbook",name:"Logbook"},{type:"map",name:"Map"},{type:"markdown",name:"Markdown"},{type:"media-control",name:"Media Control"},{type:"picture",name:"Picture"},{type:"picture-elements",name:"Picture Elements"},{type:"picture-entity",name:"Picture Entity"},{type:"picture-glance",name:"Picture Glance"},{type:"plant-status",name:"Plant Status"},{type:"sensor",name:"Sensor"},{type:"shopping-list",name:"Shopping List"},{type:"statistics-graph",name:"Statistics Graph"},{type:"thermostat",name:"Thermostat"},{type:"tile",name:"Tile"},{type:"todo-list",name:"To-do List"},{type:"vertical-stack",name:"Vertical Stack"},{type:"weather-forecast",name:"Weather Forecast"},{type:"webpage",name:"Webpage"}];function Wo(e){const t=(e??"").trim(),s=t.match(/^color-mix\(\s*in\s+srgb\s*,\s*(.+?)\s+([\d.]+)%\s*,\s*transparent\s*\)$/i);if(s)return{base:s[1].trim(),alpha:Math.max(0,Math.min(1,Number(s[2])/100))};const i=t.match(/^#([0-9a-f]{6})([0-9a-f]{2})$/i);if(i)return{base:`#${i[1]}`,alpha:parseInt(i[2],16)/255};const n=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*[,/]\s*([\d.]+)\s*\)$/i);return n?{base:"#"+[n[1],n[2],n[3]].map(a=>Math.max(0,Math.min(255,Math.round(Number(a)))).toString(16).padStart(2,"0")).join(""),alpha:Math.max(0,Math.min(1,Number(n[4])))}:{base:t,alpha:1}}function si(e,t){return t>=1?e:`color-mix(in srgb, ${e} ${Number((t*100).toFixed(1))}%, transparent)`}function jo(e){try{const t=document.createElement("div");t.style.color=e,t.style.display="none",document.body.appendChild(t);const s=getComputedStyle(t).color;document.body.removeChild(t);const i=s.match(/\d+/g)?.map(Number);return!i||i.length<3?"#000000":"#"+i.slice(0,3).map(n=>n.toString(16).padStart(2,"0")).join("")}catch{return"#000000"}}let C=class extends vt{constructor(){super(...arguments),this._selCard=0,this._selField=-1,this._selCards=new Set,this._selEmbCards=new Set,this._selFlow=-1,this._showAddFlowInput=!1,this._newFlowName="",this._pendingFlowIdx=-1,this._showFlowCompleteModal=!1,this._selPoint=-1,this._selSeries=-1,this._selVirtual=-1,this._selVirtualInput=-1,this._selTrigger=-1,this._selZone=-1,this._selExtCard=0,this._selExtField=-1,this._templateName="",this._templateError="",this._previewBoxes={},this._previewExpanded=!1,this._barAtTop=localStorage.getItem("mc-expanded-bar-top")==="1",this._onWindowResize=()=>this._sizeExpandedCanvas(),this._pickerStyleScheduled=!1,this._pickerStyleRetries=0,this._copiedFields=null,this._copySourceIdx=-1,this._virtualClipboard=null,this._copiedField=null,this._copiedFieldSrc=null,this._copiedOption=null,this._dragSrc=null,this._cpOpenId=null,this._cpOpenAbove=!1,this._ggOpen=!1,this._ggTarget=null,this._wizStep=-1,this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizardShown=!1,this._dragCard=-1,this._startX=0,this._startY=0,this._dragMembers=[],this._embDragMembers=[],this._dragPoint=-1,this._pStartX=0,this._pStartY=0,this._pStartPos={x:0,y:0},this._snapAxis=null,this._snapAnchor=null,this._dragZone=-1,this._zStartX=0,this._zStartY=0,this._zStartPos={x:0,y:0},this._resizeZone=-1,this._resizeCorner="br",this._zResizeStartBox={x:0,y:0,w:0,h:0},this._bgSelected=!1,this._bgMode=null,this._bgStartX=0,this._bgStartY=0,this._bgStart={L:0,T:0,baseW:0,baseH:0,totalW:0,totalH:0},this._selEmbCard=-1,this._dragEmbCard=-1,this._ecStartX=0,this._ecStartY=0,this._embEditorOpen=!1,this._embEditorYaml="",this._embNativeEditor=null,this._embEditorTarget=null,this._embEditorConfig=null,this._embPickerOpen=!1,this._embPickerSearch="",this._embPickerTarget=null,this._variantOpen="",this._variantError="",this._saveVariantFor="",this._saveVariantLabel="",this._variantImportError="",this._navTab="cards",this._navPanel="",this._navPath=[],this._optionLayoutOn=new Set,this._colorOverridesOn=new Set,this._resetToWizard=()=>{window.confirm(`Reset all configuration and restart the setup wizard?

This will clear all cards, flows, zones, and background settings.`)&&(this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizStep=0,this._emit({type:this._config.type,background:{},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}))},this._cpMode="rgb"}_navPush(e,t){this._navPath=[...this._navPath,{key:e,label:t}]}setConfig(e){let t=!1;const s=o=>{let a=!1;const l=o.map(c=>c.column==null?(t=!0,a=!0,{...c,column:1}):c);return a?l:o},i=(e.cards??[]).map(o=>{const a=s(o.fields);return a===o.fields?o:{...o,fields:a}}),n=(e.extended_cards??[]).map(o=>{const a=s(o.fields);return a===o.fields?o:{...o,fields:a}});if(t&&(e={...e,cards:i,...e.extended_cards?{extended_cards:n}:{}}),this._config=e,Ce(e.defaults?.control_variants),t&&this._emit(e),!this._wizardShown){this._wizardShown=!0;const o=!e.background?.images?.day&&!e.background?.images?.night,a=(e.cards??[]).length===0;o&&a&&(this._wizStep=0)}}_emit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_finishWizard(){if(!this._config)return;const e=this._wiz;let t;if(e.cardType==="energy"){if(e.source!=="none"){t={source:e.source},e.source==="auto"&&(t.sun_entity=e.sunEntity||"sun.sun");const i={},n={};e.dayImg&&(i[0]=e.dayImg),e.nightImg&&e.source==="auto"&&(n[0]=e.nightImg);for(let o=0;o<e.evCount;o++){const a=e.evImgs[o];a?.day&&(i[String(o+1)]=a.day),a?.night&&e.source==="auto"&&(n[String(o+1)]=a.night)}t.images={},Object.keys(i).length>0&&(t.images.day=i),Object.keys(n).length>0&&(t.images.night=n)}}else if(e.bgCount==="single"&&e.singleImg)t={source:"day",images:{day:{0:e.singleImg}}};else if(e.bgCount==="multiple"){t=e.bgSwitchMode==="sun"?{source:"auto",sun_entity:e.sunEntity||"sun.sun"}:{source:"entity",mode_entity:e.bgEntity};const i={},n={};e.dayImg&&(i[0]=e.dayImg),e.nightImg&&(n[0]=e.nightImg),t.images={},Object.keys(i).length>0&&(t.images.day=i),Object.keys(n).length>0&&(t.images.night=n)}const s={...this._config};t&&(s.background=t),e.cardType==="energy"&&e.evCount>0&&(s.ev_count=e.evCount),this._wizStep=-1,this._emit(s)}_renderWizard(){const e=this._wizStep,t=this._wiz,s=n=>{this._wiz={...t,...n}},i=n=>{this._wizStep=n};return r`
      <div class="ec-wizard">
        ${e===0?r`
          <div class="ec-wiz-welcome">
            <div class="ec-wiz-icon">🎨</div>
            <h2 class="ec-wiz-title">Welcome to Mosaic Canvas Card</h2>
            <p class="ec-wiz-desc">A few quick questions will tailor the setup to your use case — or skip to jump straight into the editor.</p>
            <div class="ec-wiz-row ec-wiz-end">
              <button class="ec-wiz-btn-ghost" @click=${()=>this._finishWizard()}>Skip setup</button>
              <button class="ec-wiz-btn-primary" @click=${()=>i(1)}>Get started →</button>
            </div>
          </div>

        `:e===1?r`
          <h3 class="ec-wiz-heading">What will this card be used for?</h3>
          <p class="ec-wiz-desc">This determines what setup options you'll be asked about.</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.cardType==="energy"?" selected":""}"
              @click=${()=>s({cardType:"energy"})}>
              <span class="ec-wiz-type-icon">⚡</span>
              <span class="ec-wiz-type-title">Energy Dashboard</span>
              <span class="ec-wiz-type-desc">Solar, battery, grid flows with day/night switching and EV variants</span>
            </button>
            <button class="ec-wiz-type-btn${t.cardType==="general"?" selected":""}"
              @click=${()=>s({cardType:"general"})}>
              <span class="ec-wiz-type-icon">🗺️</span>
              <span class="ec-wiz-type-title">General Purpose</span>
              <span class="ec-wiz-type-desc">Any layout over a background image — floor plan, status board, custom display</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(0)}>← Back</button>
            <button class="ec-wiz-btn-primary" ?disabled=${!t.cardType}
              @click=${()=>i(t.cardType==="energy"?2:20)}>Next →</button>
          </div>

        `:e===2?r`
          <h3 class="ec-wiz-heading">Background</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Day/night switching</label>
            <select class="ec-wiz-select" .value=${t.source}
              @change=${n=>s({source:n.target.value})}>
              <option value="auto">Auto — follows sun entity</option>
              <option value="day">Day only — no switching</option>
              <option value="none">No background image</option>
            </select>
          </div>
          ${t.source==="auto"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${n=>s({sunEntity:n.detail.value})}
              ></ha-entity-picker>
            </div>
          `:_}
          ${t.source!=="none"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Day image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-day.jpg"
                .value=${t.dayImg} @input=${n=>s({dayImg:n.target.value})}/>
            </div>
          `:_}
          ${t.source==="auto"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Night image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-night.jpg"
                .value=${t.nightImg} @input=${n=>s({nightImg:n.target.value})}/>
            </div>
          `:_}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(1)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>i(3)}>Next →</button>
          </div>

        `:e===3?r`
          <h3 class="ec-wiz-heading">EV Variants <span class="ec-wiz-optional">(optional)</span></h3>
          <p class="ec-wiz-desc">Show different backgrounds based on how many EVs are home charging.</p>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">EV charging slots (0 = no EV switching)</label>
            <input class="ec-wiz-input ec-wiz-input--short" type="number" min="0" max="3"
              .value=${String(t.evCount)}
              @input=${n=>{const o=Math.max(0,Math.min(3,parseInt(n.target.value)||0)),a=Array.from({length:o},(l,c)=>t.evImgs[c]??{day:"",night:""});s({evCount:o,evImgs:a})}}/>
          </div>
          ${t.evImgs.map((n,o)=>r`
            <div class="ec-wiz-ev-group">
              <div class="ec-wiz-ev-label">${o+1} EV${o>0?"s":""} charging</div>
              ${t.source!=="none"?r`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Day image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-day-${o+1}ev.jpg`}
                    .value=${n.day}
                    @input=${a=>{const l=t.evImgs.map((c,p)=>p===o?{...c,day:a.target.value}:c);s({evImgs:l})}}/>
                </div>
              `:_}
              ${t.source==="auto"?r`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Night image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-night-${o+1}ev.jpg`}
                    .value=${n.night}
                    @input=${a=>{const l=t.evImgs.map((c,p)=>p===o?{...c,night:a.target.value}:c);s({evImgs:l})}}/>
                </div>
              `:_}
            </div>
          `)}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(2)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:e===20?r`
          <h3 class="ec-wiz-heading">Background images</h3>
          <p class="ec-wiz-desc">Do you want a background image on this card?</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.bgCount==="none"?" selected":""}"
              @click=${()=>s({bgCount:"none"})}>
              <span class="ec-wiz-type-icon">⬜</span>
              <span class="ec-wiz-type-title">No background</span>
              <span class="ec-wiz-type-desc">Cards float over a plain or transparent background</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="single"?" selected":""}"
              @click=${()=>s({bgCount:"single"})}>
              <span class="ec-wiz-type-icon">🖼️</span>
              <span class="ec-wiz-type-title">One image</span>
              <span class="ec-wiz-type-desc">A single static background image</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="multiple"?" selected":""}"
              @click=${()=>s({bgCount:"multiple"})}>
              <span class="ec-wiz-type-icon">🔄</span>
              <span class="ec-wiz-type-title">Multiple images</span>
              <span class="ec-wiz-type-desc">Background changes based on time of day or an entity state</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(1)}>← Back</button>
            <button class="ec-wiz-btn-primary"
              @click=${()=>{t.bgCount==="none"?this._finishWizard():t.bgCount==="single"?i(21):i(22)}}>Next →</button>
          </div>

        `:e===21?r`
          <h3 class="ec-wiz-heading">Background image</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/my-background.jpg"
              .value=${t.singleImg} @input=${n=>s({singleImg:n.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:e===22?r`
          <h3 class="ec-wiz-heading">Multiple backgrounds</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">When should the image change?</label>
            <select class="ec-wiz-select" .value=${t.bgSwitchMode}
              @change=${n=>s({bgSwitchMode:n.target.value})}>
              <option value="sun">Time of day — follows the sun (day/night)</option>
              <option value="entity">Entity state — switches when an entity changes</option>
            </select>
          </div>
          ${t.bgSwitchMode==="sun"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${n=>s({sunEntity:n.detail.value})}
              ></ha-entity-picker>
            </div>
          `:r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Trigger entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.bgEntity} allow-custom-entity
                @value-changed=${n=>s({bgEntity:n.detail.value})}
              ></ha-entity-picker>
            </div>
            <p class="ec-wiz-desc" style="font-size:11px;margin-top:-4px;">Alternate image shows when entity state is "on", "night", or "true".</p>
          `}
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Day":"Main"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-main.jpg"
              .value=${t.dayImg} @input=${n=>s({dayImg:n.target.value})}/>
          </div>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Night":"Alternate"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-alt.jpg"
              .value=${t.nightImg} @input=${n=>s({nightImg:n.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>i(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:_}
      </div>
    `}_updateCard(e,t){if(!this._config)return;const s=this._config.cards.map((i,n)=>{if(n!==e)return i;const o={...i,...t};for(const a of Object.keys(t))t[a]===void 0&&delete o[a];return o});this._emit({...this._config,cards:s})}_updateCardBox(e,t){if(!this._config)return;const s=this._config.cards[e];s&&this._updateCard(e,{box:{...s.box,...t}})}_updateField(e,t,s){if(!this._config)return;const i=this._config.cards[e];if(!i)return;const n=i.fields.map((o,a)=>a===t?{...o,...s}:o);this._updateCard(e,{fields:n})}_updateDefaults(e){this._config&&this._emit({...this._config,defaults:{...this._config.defaults,...e}})}_updateCanvas(e){this._config&&this._emit({...this._config,canvas:{...this._config.canvas,...e}})}_gridGeom(){const e=this._config?.canvas;if(e?.layout_mode!=="grid"||!e.grid)return null;const{totalW:t,totalH:s}=at(this._config),i=Math.max(1,e.grid.columns||1),n=Math.max(1,e.grid.rows||1),o=e.grid.padding??0;return{cols:i,rows:n,padding:o,cellW:t/i,cellH:s/n,totalW:t,totalH:s}}_setLayoutMode(e){if(!this._config)return;const t={...this._config.canvas??{}};if(t.layout_mode=e,e==="grid"){t.grid||(t.grid={columns:10,rows:15,padding:0});const s=Math.max(1,t.grid.columns),i=Math.max(1,t.grid.rows),n=t.grid.padding??0,{totalW:o}=at(this._config),a=o/s,l=this._config.cards.map(p=>{const u=this._previewBoxes[p.id],d=u?u.x+u.w/2:p.position.x,h=u?u.y+u.h/2:p.position.y,b=Math.min(s,Math.max(0,Math.round(d*s))),v=Math.min(i,Math.max(0,Math.round(h*i))),x=p.grid_span??Math.max(1,Math.min(s,Math.round((u?.w??0)*s)||1)),k=Math.max(8,x*a-n);return{...p,anchor:"center",grid_span:x,width:k,position:{x:L(b/s),y:L(v/i)}}}),c=this._embCards().map(p=>{const u=this._previewBoxes[p.id],d=u?u.x+u.w/2:p.position.x,h=u?u.y+u.h/2:p.position.y,b=Math.min(s,Math.max(0,Math.round(d*s))),v=Math.min(i,Math.max(0,Math.round(h*i))),x=p.grid_span??Math.max(1,Math.min(s,Math.round((u?.w??0)*s)||1)),k=Math.max(8,x*a-n);return{...p,anchor:"center",grid_span:x,width:k,position:{x:L(b/s),y:L(v/i)}}});this._emit({...this._config,canvas:t,cards:l,embedded_cards:c})}else this._emit({...this._config,canvas:t})}_renderGridOverlay(){const e=this._gridGeom();if(!e)return _;const{cols:t,rows:s}=e,i=[];for(let n=0;n<=t;n++)for(let o=0;o<=s;o++)i.push(r`<div class="ec-grid-dot" style="left:${n/t*100}%;top:${o/s*100}%;"></div>`);return r`<div class="ec-grid-overlay">${i}</div>`}_renderBgOverlay(){if(!this._config)return _;const e=at(this._config),t=e.L/e.totalW*100,s=e.T/e.totalH*100,i=e.baseW/e.totalW*100,n=e.baseH/e.totalH*100;return r`
      <div class="ec-bg-ov${this._bgSelected?" selected":""}"
        style="left:${t}%;top:${s}%;width:${i}%;height:${n}%;"
        @pointerdown=${o=>this._onBgDown(o,"move")}
        title="Background image — drag to move, corners to resize">
        ${this._bgSelected?["tl","tr","bl","br"].map(o=>r`
          <div class="ec-bg-resize ec-bg-resize-${o}"
            @pointerdown=${a=>this._onBgDown(a,o)}></div>`):_}
      </div>`}_updateBackground(e){this._config&&this._emit({...this._config,background:{...this._config.background,...e}})}_flows(){return this._config?.flows??[]}_updateFlow(e,t){if(!this._config)return;const s=this._flows().map((i,n)=>n===e?{...i,...t}:i);this._emit({...this._config,flows:s})}_addFlow(){if(!this._config)return;const e={id:"flow-"+Date.now().toString(36),name:"Flow",style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},t=[...this._flows(),e];this._selFlow=t.length-1,this._selPoint=-1,this._emit({...this._config,flows:t})}_addFlowFromExpanded(){if(!this._config)return;const e=this._newFlowName.trim()||"Flow",t={id:"flow-"+Date.now().toString(36),name:e,style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},s=[...this._flows(),t];this._selFlow=s.length-1,this._pendingFlowIdx=s.length-1,this._selPoint=-1,this._showAddFlowInput=!1,this._newFlowName="",this._emit({...this._config,flows:s})}_collapseExpanded(){this._pendingFlowIdx>=0?this._showFlowCompleteModal=!0:this._previewExpanded=!1}_goToFlow(){const e=this._pendingFlowIdx;this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1,this._selFlow=e;const t=this._flows()[e];this._navTab="elements",this._navPanel="flows",this._navPath=t?[{key:`flow:${e}`,label:t.name??t.id}]:[]}_removeFlow(e){if(!this._config)return;const t=this._flows().filter((s,i)=>i!==e);this._selFlow=Math.min(this._selFlow,Math.max(0,t.length-1)),t.length===0&&(this._selFlow=-1),this._emit({...this._config,flows:t})}_updateFlowPoint(e,t,s){if(!this._config)return;const i=this._flows().map((n,o)=>{if(o!==e)return n;const a=n.points.map((l,c)=>c===t?{...l,...s}:l);return{...n,points:a}});this._emit({...this._config,flows:i})}_setPointKind(e,t,s){if(!this._config)return;const i=this._flows(),n=i[e];if(!n)return;const o=n.points[t];if(!o)return;const{dx:a,dy:l}=o;let c;s==="card"?c={card:this._config.cards[0]?.id??"",side:"center",...a!=null?{dx:a}:{},...l!=null?{dy:l}:{}}:c={x:0,y:0,...a!=null?{dx:a}:{},...l!=null?{dy:l}:{}};const p=i.map((u,d)=>{if(d!==e)return u;const h=u.points.map((b,v)=>v===t?c:b);return{...u,points:h}});this._emit({...this._config,flows:p})}_addFlowPoint(e){if(!this._config)return;const t=this._flows().map((s,i)=>i!==e?s:{...s,points:[...s.points,{x:0,y:0}]});this._emit({...this._config,flows:t})}_onFlowLayerClick(e){if(e.target!==e.currentTarget||!this._config)return;const t=this._flows(),s=t[this._selFlow];if(!s)return;const i=e.currentTarget,n=L(e.offsetX/i.clientWidth),o=L(e.offsetY/i.clientHeight),a=[...s.points],l=this._selPoint>=0?this._selPoint:a.length-1;a.splice(l+1,0,{x:n,y:o});const c=t.map((p,u)=>u===this._selFlow?{...p,points:a}:p);this._selPoint=l+1,this._emit({...this._config,flows:c})}_removeFlowPoint(e,t){if(!this._config)return;const s=this._flows().map((i,n)=>{if(n!==e)return i;const o=i.points.filter((a,l)=>l!==t);return{...i,points:o}});this._emit({...this._config,flows:s})}_virtuals(){return this._config?.virtuals??[]}_addVirtual(){if(!this._config)return;const t={id:`v${Date.now()}`,name:"New virtual",op:"add",inputs:[]},s=[...this._virtuals(),t];this._selVirtual=s.length-1,this._emit({...this._config,virtuals:s})}_updateVirtual(e,t){if(!this._config)return;const s=this._virtuals().map((i,n)=>n===e?{...i,...t}:i);this._emit({...this._config,virtuals:s})}_removeVirtual(e){if(!this._config)return;const t=this._virtuals().filter((s,i)=>i!==e);this._selVirtual=Math.min(this._selVirtual,t.length-1),this._emit({...this._config,virtuals:t})}_addVirtualInput(e){if(!this._config)return;const t=[...this._virtuals()[e]?.inputs??"",""];this._updateVirtual(e,{inputs:t})}_updateVirtualInput(e,t,s){const i=[...this._virtuals()[e]?.inputs??[]];i[t]=s,this._updateVirtual(e,{inputs:i})}_removeVirtualInput(e,t){const s=(this._virtuals()[e]?.inputs??[]).filter((i,n)=>n!==t);this._updateVirtual(e,{inputs:s})}_copyVirtual(e){const t=this._virtuals()[e];t&&(this._virtualClipboard={...t})}_pasteVirtual(){if(!this._config||!this._virtualClipboard)return;const e={...this._virtualClipboard,id:`v${Date.now()}`},t=[...this._virtuals(),e];this._selVirtual=t.length-1,this._emit({...this._config,virtuals:t})}_zones(){return this._config?.zones??[]}_addZone(){if(!this._config)return;const e={id:"zone-"+Date.now().toString(36),name:"Zone",position:{x:.5,y:.5},anchor:"center",width:120,height:70},t=[...this._zones(),e];this._selZone=t.length-1,this._emit({...this._config,zones:t})}_updateZone(e,t){if(!this._config)return;const s=this._zones().map((i,n)=>n===e?{...i,...t}:i);this._emit({...this._config,zones:s})}_removeZone(e){if(!this._config)return;const t=this._zones().filter((s,i)=>i!==e);this._selZone=Math.min(this._selZone,t.length-1),t.length===0&&(this._selZone=-1),this._emit({...this._config,zones:t})}_onZoneDown(e,t){e.preventDefault(),e.stopPropagation(),this._bgSelected=!1,this._selZone=t,this._dragZone=t,e.target.setPointerCapture(e.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=e.clientX,this._zStartY=e.clientY,this._zStartPos={...this._zones()[t]?.position??{x:0,y:0}}}_onZoneMove(e){if(this._dragZone<0||!this._zRect||!this._config)return;const t=L(this._zStartPos.x+(e.clientX-this._zStartX)/this._zRect.width),s=L(this._zStartPos.y+(e.clientY-this._zStartY)/this._zRect.height);this._updateZone(this._dragZone,{position:{x:t,y:s}})}_onZoneUp(e){this._dragZone>=0&&e.target.releasePointerCapture(e.pointerId),this._dragZone=-1}_zoneBox(e){const[t,s]=Ut[e.anchor??m("anchor")??"top-left"],{totalW:i,totalH:n}=at(this._config);return{x:e.position.x*i-t*e.width,y:e.position.y*n-s*e.height,w:e.width,h:e.height}}_onZoneResizeDown(e,t,s){e.preventDefault(),e.stopPropagation();const i=this._zones()[t];i&&(this._selZone=t,this._resizeZone=t,this._resizeCorner=s,e.target.setPointerCapture(e.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=e.clientX,this._zStartY=e.clientY,this._zResizeStartBox=this._zoneBox(i))}_onZoneResizeMove(e){if(this._resizeZone<0||!this._zRect||!this._config)return;const t=this._zones()[this._resizeZone];if(!t)return;const{totalW:s,totalH:i}=at(this._config),n=(e.clientX-this._zStartX)/this._zRect.width*s,o=(e.clientY-this._zStartY)/this._zRect.height*i,a=this._zResizeStartBox,l=10,c=this._resizeCorner.includes("l")?a.x+a.w:a.x,p=this._resizeCorner.includes("t")?a.y+a.h:a.y,u=this._resizeCorner.includes("l")?a.x:a.x+a.w,d=this._resizeCorner.includes("t")?a.y:a.y+a.h;let h=u+n-c,b=d+o-p;const v=h>=0?1:-1,x=b>=0?1:-1;h=Math.max(l,Math.abs(h))*v,b=Math.max(l,Math.abs(b))*x;const k=v>=0?c:c+h,$=x>=0?p:p+b,y=Math.abs(h),g=Math.abs(b),[w,S]=Ut[t.anchor??m("anchor")??"top-left"],f={x:L((k+w*y)/s),y:L(($+S*g)/i)};this._updateZone(this._resizeZone,{width:q(y),height:q(g),position:f})}_onZoneResizeUp(e){this._resizeZone>=0&&e.target.releasePointerCapture(e.pointerId),this._resizeZone=-1}_onBgDown(e,t){e.preventDefault(),e.stopPropagation(),this._bgSelected=!0,this._bgMode=t,e.target.setPointerCapture(e.pointerId),this._bgRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._bgStartX=e.clientX,this._bgStartY=e.clientY;const s=at(this._config);this._bgStart={L:s.L,T:s.T,baseW:s.baseW,baseH:s.baseH,totalW:s.totalW,totalH:s.totalH}}_onBgMove(e){if(!this._bgMode||!this._bgRect||!this._config)return;const t=this._bgStart,s=(e.clientX-this._bgStartX)/this._bgRect.width*t.totalW,i=(e.clientY-this._bgStartY)/this._bgRect.height*t.totalH,n=this._gridGeom(),o=(b,v)=>Math.round(b/v)*v,a=20;let l,c,p,u;if(this._bgMode==="move")p=t.baseW,u=t.baseH,l=Math.min(Math.max(0,t.L+s),t.totalW-p),c=Math.min(Math.max(0,t.T+i),t.totalH-u),n&&(l=Math.min(Math.max(0,o(l,n.cellW)),t.totalW-p),c=Math.min(Math.max(0,o(c,n.cellH)),t.totalH-u));else{const b=this._bgMode.includes("l"),v=this._bgMode.includes("t"),x=b?-s:s,k=v?-i:i;let $=Math.abs(x)/t.baseW>=Math.abs(k)/t.baseH?(t.baseW+x)/t.baseW:(t.baseH+k)/t.baseH;const y=b?t.L+t.baseW:t.totalW-t.L,g=v?t.T+t.baseH:t.totalH-t.T,w=Math.min(y/t.baseW,g/t.baseH),S=Math.max(a/t.baseW,a/t.baseH);$=Math.min(Math.max($,S),w),p=t.baseW*$,u=t.baseH*$,l=b?t.L+t.baseW-p:t.L,c=v?t.T+t.baseH-u:t.T,n&&(p=Math.min(t.totalW,Math.max(n.cellW,o(p,n.cellW))),u=Math.min(t.totalH,p*(t.baseH/t.baseW)),l=b?t.L+t.baseW-p:t.L,c=v?t.T+t.baseH-u:t.T,l=Math.min(Math.max(0,o(l,n.cellW)),t.totalW-p),c=Math.min(Math.max(0,o(c,n.cellH)),t.totalH-u))}const d=t.totalW-p-l,h=t.totalH-u-c;this._updateCanvas({width:q(p),height:q(u),extend:{left:l>.5?q(l):void 0,top:c>.5?q(c):void 0,right:d>.5?q(d):void 0,bottom:h>.5?q(h):void 0}})}_onBgUp(e){this._bgMode&&e.target.releasePointerCapture(e.pointerId),this._bgMode=null}_embCards(){return this._config?.embedded_cards??[]}_addEmbCard(){if(!this._config)return;const e={id:"emb-"+Date.now().toString(36),name:"Embedded Card",position:{x:.5,y:.5},anchor:"center",width:200,card_config:{}},t=this._gridGeom();if(t){const{cols:i,rows:n,cellW:o,padding:a}=t,l=Math.round(i/2),c=Math.round(n/2),p=Math.max(1,Math.min(i,2));e.grid_span=p,e.width=Math.max(8,p*o-a),e.position={x:L(l/i),y:L(c/n)}}const s=[...this._embCards(),e];this._selEmbCard=s.length-1,this._emit({...this._config,embedded_cards:s})}_updateEmbCard(e,t){if(!this._config)return;const s=this._embCards().map((i,n)=>n===e?{...i,...t}:i);this._emit({...this._config,embedded_cards:s})}_removeEmbCard(e){if(!this._config)return;const t=this._embCards().filter((s,i)=>i!==e);this._selEmbCard=Math.min(this._selEmbCard,t.length-1),t.length===0&&(this._selEmbCard=-1),this._emit({...this._config,embedded_cards:t})}_onEmbCardDown(e,t){if(e.preventDefault(),e.stopPropagation(),this._bgSelected=!1,this._selEmbCard=t,e.shiftKey||e.ctrlKey||e.metaKey){const o=new Set(this._selEmbCards);o.has(t)?o.delete(t):o.add(t),this._selEmbCards=o;return}const s=this._embCards(),i=s[t]?.group,n=i?s.map((o,a)=>({ec:o,i:a})).filter(({ec:o})=>o.group===i).map(({i:o})=>o):[t];if(this._selEmbCards=new Set(n),this._dragEmbCard=t,e.target.setPointerCapture(e.pointerId),this._ecRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._ecStartX=e.clientX,this._ecStartY=e.clientY,this._embDragMembers=n.map(o=>({idx:o,start:{...s[o]?.position??{x:0,y:0}}})),i){const o=this._config?.cards??[],a=o.map((l,c)=>({c:l,i:c})).filter(({c:l})=>l.group===i).map(({i:l})=>l);this._selCards=new Set(a),this._dragCard=a[0]??-1,this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=e.clientX,this._startY=e.clientY,this._dragMembers=a.map(l=>({idx:l,start:{...o[l]?.position??{x:0,y:0}}}))}else this._selCards=new Set,this._dragCard=-1,this._dragMembers=[]}_onEmbCardMove(e){if(this._dragEmbCard<0||!this._ecRect||!this._config)return;const t=(e.clientX-this._ecStartX)/this._ecRect.width,s=(e.clientY-this._ecStartY)/this._ecRect.height,i=this._embCards().map((o,a)=>{const l=this._embDragMembers.find(c=>c.idx===a);return l?{...o,position:{x:L(l.start.x+t),y:L(l.start.y+s)}}:o}),n=this._dragMembers.length>0?this._config.cards.map((o,a)=>{const l=this._dragMembers.find(c=>c.idx===a);return l?{...o,position:{x:L(l.start.x+t),y:L(l.start.y+s)}}:o}):this._config.cards;this._emit({...this._config,cards:n,embedded_cards:i})}_onEmbCardUp(e){this._dragEmbCard>=0&&e.target.releasePointerCapture(e.pointerId),this._dragEmbCard=-1}_embConfig(e){return e.kind==="std"?this._embCards()[e.idx]?.card_config:e.kind==="field"?this._config?.cards[e.ci]?.fields[e.fi]?.embed_card_config:this._extCards()[e.ci]?.fields[e.fi]?.embed_card_config}_embSetConfig(e,t){if(e.kind==="std"){this._updateEmbCard(e.idx,{card_config:t});return}if(e.kind==="field"){this._updateField(e.ci,e.fi,{embed_card_config:t});return}this._updateExtField(e.ci,e.fi,{embed_card_config:t})}async _openEmbEditor(e){this._embEditorTarget=e;const t=this._embConfig(e)??{};this._embEditorYaml=JSON.stringify(t,null,2),this._embNativeEditor=null;const s=String(t?.type??"");if(s)try{const i=await window.loadCardHelpers?.();if(i?.createCardElement)try{i.createCardElement(t)}catch{}const n=s.startsWith("custom:")?s.slice(7):`hui-${s}-card`;await Promise.race([customElements.whenDefined(n),new Promise(c=>setTimeout(c,5e3))]);const o=customElements.get(n);let a={...t};if(o?.getStubConfig)try{const c=Object.keys(this.hass?.states??{}),p=await o.getStubConfig(this.hass,c,c);p&&typeof p=="object"&&(a={...p,...a})}catch{}if(this._embEditorConfig=a,await Promise.race([customElements.whenDefined("hui-card-element-editor"),new Promise(c=>setTimeout(c,3e3))]),customElements.get("hui-card-element-editor")){const c=document.createElement("hui-card-element-editor");c.hass=this.hass,c.value=a,c.addEventListener("config-changed",p=>{p.stopPropagation();const u=p.detail;u?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,u.config)}),this._embNativeEditor=c}else{const c=o?.getConfigElement;if(c){const p=await c.call(o);if(p){try{p.setConfig?.(a)}catch{}p.hass=this.hass,p.addEventListener("config-changed",u=>{u.stopPropagation();const d=u.detail;d?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,d.config)}),this._embNativeEditor=p}}}}catch(i){console.warn("[mc-editor] native editor unavailable:",i)}this._embEditorOpen=!0}_closeEmbEditor(){this._embEditorOpen=!1,this._embEditorTarget=null,this._embNativeEditor=null,this._embEditorConfig=null}_saveEmbEditorYaml(){if(this._embEditorTarget)try{const e=JSON.parse(this._embEditorYaml);this._embSetConfig(this._embEditorTarget,e),this._closeEmbEditor()}catch(e){alert("Invalid JSON: "+e.message)}}async _openEmbPicker(e){this._embPickerTarget=e,this._embPickerSearch="",this._embPickerOpen=!0}async _pickEmbCardType(e){this._embPickerOpen=!1,this._embPickerSearch="";const t=this._embPickerTarget;if(!t)return;const s={...this._embConfig(t)??{},type:e};this._embSetConfig(t,s),await this._openEmbEditor(t)}_setBgImage(e,t,s){if(!this._config)return;const i=this._config.background??{},n={...i.images?.[e]??{}};s===""?delete n[t]:n[t]=s,this._updateBackground({images:{...i.images,[e]:n}})}_addCard(){if(!this._config)return;const e={id:"card-"+Date.now().toString(36),name:"Card",position:{x:.5,y:.5},anchor:"center",align:"center",fields:[]},t=this._gridGeom();if(t){const{cols:i,rows:n,cellW:o,padding:a}=t,l=Math.round(i/2),c=Math.round(n/2),p=Math.max(1,Math.min(i,2));e.grid_span=p,e.width=Math.max(8,p*o-a),e.position={x:L(l/i),y:L(c/n)}}const s=[...this._config.cards,e];this._selCard=s.length-1,this._selField=-1,this._emit({...this._config,cards:s})}_removeCard(e){if(!this._config)return;const t=this._config.cards.filter((s,i)=>i!==e);this._selCard=Math.min(this._selCard,Math.max(0,t.length-1)),this._selField=-1,this._emit({...this._config,cards:t})}_copyFields(e){const t=this._config?.cards[e];t&&(this._copiedFields=t.fields.map(s=>({...s})),this._copySourceIdx=e)}_pasteFields(e){if(!this._copiedFields||!this._config)return;const t=this._copiedFields.map(i=>({...i,id:"f-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)})),s=this._config.cards.map((i,n)=>n===e?{...i,fields:t}:i);this._emit({...this._config,cards:s}),this._copiedFields=null,this._copySourceIdx=-1}_copyField(e,t,s=!1){const n=(s?this._extCards():this._config?.cards??[])[e]?.fields[t];n&&(this._copiedField={...n},this._copiedFieldSrc={isExt:s,ci:e,fi:t})}_pasteField(e,t=!1){if(!this._copiedField||!this._config)return;const s={...this._copiedField,id:"f-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)};if(t){const i=this._extCards()[e];if(!i)return;this._selExtField=i.fields.length,this._updateExtCard(e,{fields:[...i.fields,s]})}else{const i=this._config.cards[e];if(!i)return;const n=[...i.fields,s],o=this._config.cards.map((a,l)=>l===e?{...a,fields:n}:a);this._selField=n.length-1,this._emit({...this._config,cards:o})}}_addField(e){if(!this._config)return;const t=this._config.cards[e];if(!t)return;const s={id:"f-"+Date.now().toString(36),type:"value",column:1},i=[...t.fields,s];this._selField=i.length-1,this._updateCard(e,{fields:i})}_removeField(e,t){if(!this._config)return;const s=this._config.cards[e];if(!s)return;const i=s.fields.filter((n,o)=>o!==t);this._selField>=i.length&&(this._selField=i.length-1),this._updateCard(e,{fields:i})}_extCards(){return this._config?.extended_cards??[]}_updateExtDefaults(e){this._config&&this._emit({...this._config,extended_card_defaults:{...this._config.extended_card_defaults,...e}})}_addExtCard(){if(!this._config)return;const e={id:"ext-"+Date.now().toString(36),name:"Popover Card",columns:2,fields:[]},t=[...this._extCards(),e];this._selExtCard=t.length-1,this._selExtField=-1,this._emit({...this._config,extended_cards:t})}_removeExtCard(e){if(!this._config)return;const t=this._extCards().filter((s,i)=>i!==e);this._selExtCard=Math.min(this._selExtCard,Math.max(0,t.length-1)),this._selExtField=-1,this._emit({...this._config,extended_cards:t})}_updateExtCard(e,t){if(!this._config)return;const s=this._extCards().map((i,n)=>n===e?{...i,...t}:i);this._emit({...this._config,extended_cards:s})}_updateExtCardBox(e,t){const s=this._extCards()[e];s&&this._updateExtCard(e,{box:{...s.box,...t}})}_addExtField(e){if(!this._config)return;const t=this._extCards()[e];if(!t)return;const s={id:"f-"+Date.now().toString(36),type:"value",column:1},i=[...t.fields,s];this._selExtField=i.length-1,this._updateExtCard(e,{fields:i})}_removeExtField(e,t){const s=this._extCards()[e];if(!s)return;const i=s.fields.filter((n,o)=>o!==t);this._selExtField>=i.length&&(this._selExtField=i.length-1),this._updateExtCard(e,{fields:i})}_stepNumInput(e,t){e.preventDefault();const i=e.currentTarget.closest(".ec-num-wrap")?.querySelector("input");if(i){try{t>0?i.stepUp():i.stepDown()}catch{const n=Number(i.step)||1,o=Number(i.value)||0;i.value=String(o+t*n)}i.dispatchEvent(new Event("change",{bubbles:!0}))}}_reorderArray(e,t,s,i){const n=[...e],[o]=n.splice(t,1),a=t<s?i?s-1:s:i?s:s+1;return n.splice(a,0,o),{arr:n,target:a}}_moveCard(e,t,s){if(!this._config)return;const i=[...this._config.cards],[n]=i.splice(e,1),o=e<t?s?t-1:t:s?t:t+1;i.splice(o,0,n),this._selCard=o,this._emit({...this._config,cards:i})}_moveExtCard(e,t,s){if(!this._config)return;const{arr:i,target:n}=this._reorderArray(this._extCards(),e,t,s);this._selExtCard=n,this._emit({...this._config,extended_cards:i})}_moveVirtual(e,t,s){if(!this._config)return;const{arr:i,target:n}=this._reorderArray(this._virtuals(),e,t,s);this._selVirtual=n,this._emit({...this._config,virtuals:i})}_moveZone(e,t,s){if(!this._config)return;const{arr:i,target:n}=this._reorderArray(this._zones(),e,t,s);this._selZone=n,this._emit({...this._config,zones:i})}_moveFlow(e,t,s){if(!this._config)return;const{arr:i,target:n}=this._reorderArray(this._flows(),e,t,s);this._selFlow=n,this._emit({...this._config,flows:i})}_moveEmbCard(e,t,s){if(!this._config)return;const{arr:i,target:n}=this._reorderArray(this._embCards(),e,t,s);this._selEmbCard=n,this._emit({...this._config,embedded_cards:i})}_movePoint(e,t,s,i){if(!this._config)return;const n=this._flows()[e];if(!n)return;const o=[...n.points],[a]=o.splice(t,1),l=t<s?i?s-1:s:i?s:s+1;o.splice(l,0,a),this._selPoint=l,this._updateFlow(e,{points:o})}_moveVirtualInput(e,t,s,i){if(!this._config)return;const n=this._virtuals()[e];if(!n)return;const o=[...n.inputs],[a]=o.splice(t,1),l=t<s?i?s-1:s:i?s:s+1;o.splice(l,0,a),this._updateVirtual(e,{inputs:o})}_moveTrigger(e,t,s,i){if(!this._config)return;const n=this._virtuals()[e];if(!n)return;const o=[...n.triggers??[]],[a]=o.splice(t,1),l=t<s?i?s-1:s:i?s:s+1;o.splice(l,0,a),this._selTrigger=l,this._updateVirtual(e,{triggers:o})}_moveGraphSeries(e,t,s,i,n){const o=this._config?.cards[e]?.fields[t];if(!o)return;const a=[...o.graph_series??[]],[l]=a.splice(s,1),c=s<i?n?i-1:i:n?i:i+1;a.splice(c,0,l),this._selSeries=c,this._updateField(e,t,{graph_series:a})}_moveExtGraphSeries(e,t,s,i,n){const o=this._extCards()[e]?.fields[t];if(!o)return;const a=[...o.graph_series??[]],[l]=a.splice(s,1),c=s<i?n?i-1:i:n?i:i+1;a.splice(c,0,l),this._selSeries=c,this._updateExtField(e,t,{graph_series:a})}_moveField(e,t,s,i){if(!this._config)return;const n=this._config.cards[e];if(!n)return;const o=[...n.fields],[a]=o.splice(t,1),l=t<s?i?s-1:s:i?s:s+1;o.splice(l,0,a),this._selField=l,this._updateCard(e,{fields:o})}_moveExtField(e,t,s,i){const n=this._extCards()[e];if(!n)return;const o=[...n.fields],[a]=o.splice(t,1),l=t<s?i?s-1:s:i?s:s+1;o.splice(l,0,a),this._selExtField=l,this._updateExtCard(e,{fields:o})}_onDragStart(e,t){this._dragSrc=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t)}_onDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.currentTarget;t.classList.add("ec-drag-over");const s=t.getBoundingClientRect();t.dataset.dropPos=e.clientY<s.top+s.height/2?"before":"after"}_onDragLeave(e){e.currentTarget.classList.remove("ec-drag-over")}_onDragEnd(e){e.currentTarget.classList.remove("ec-dragging"),this.renderRoot.querySelectorAll(".ec-drag-over").forEach(t=>t.classList.remove("ec-drag-over")),this._dragSrc=null}_onDrop(e,t){e.preventDefault();const s=e.currentTarget;s.classList.remove("ec-drag-over");const i=e.dataTransfer?.getData("text/plain")??this._dragSrc;if(this._dragSrc=null,!i||i===t)return;const n=e.clientY<s.getBoundingClientRect().top+s.getBoundingClientRect().height/2,[o,...a]=i.split(":"),[l,...c]=t.split(":");if(o===l){if(o==="card")this._moveCard(Number(a[0]),Number(c[0]),n);else if(o==="field"){const[p,u]=a.map(Number),[d,h]=c.map(Number);if(p!==d)return;this._moveField(p,u,h,n)}else if(o==="extfield"){const[p,u]=a.map(Number),[d,h]=c.map(Number);if(p!==d)return;this._moveExtField(p,u,h,n)}else if(o==="extcard")this._moveExtCard(Number(a[0]),Number(c[0]),n);else if(o==="virt")this._moveVirtual(Number(a[0]),Number(c[0]),n);else if(o==="zone")this._moveZone(Number(a[0]),Number(c[0]),n);else if(o==="flow")this._moveFlow(Number(a[0]),Number(c[0]),n);else if(o==="emb")this._moveEmbCard(Number(a[0]),Number(c[0]),n);else if(o==="pt"){const[p,u]=a.map(Number),[d,h]=c.map(Number);if(p!==d)return;this._movePoint(p,u,h,n)}else if(o==="vin"){const[p,u]=a.map(Number),[d,h]=c.map(Number);if(p!==d)return;this._moveVirtualInput(p,u,h,n)}else if(o==="trig"){const[p,u]=a.map(Number),[d,h]=c.map(Number);if(p!==d)return;this._moveTrigger(p,u,h,n)}else if(o==="gs"){const[p,u,d]=a.map(Number),[h,b,v]=c.map(Number);if(p!==h||u!==b)return;this._moveGraphSeries(p,u,d,v,n)}else if(o==="egs"){const[p,u,d]=a.map(Number),[h,b,v]=c.map(Number);if(p!==h||u!==b)return;this._moveExtGraphSeries(p,u,d,v,n)}}}_updateExtField(e,t,s){const i=this._extCards()[e];if(!i)return;const n=i.fields.map((o,a)=>a===t?{...o,...s}:o);this._updateExtCard(e,{fields:n})}_alignCards(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards),s=this._config.cards,i=t.map(d=>({i:d,pos:{...s[d].position}})),n=i.map(d=>d.pos.x),o=i.map(d=>d.pos.y),a=Math.min(...n),l=Math.max(...n),c=Math.min(...o),p=Math.max(...o),u=s.map((d,h)=>{if(!this._selCards.has(h))return d;let{x:b,y:v}=d.position;return e==="left"&&(b=q(a)),e==="right"&&(b=q(l)),e==="centerH"&&(b=q((a+l)/2)),e==="top"&&(v=q(c)),e==="bottom"&&(v=q(p)),e==="middleV"&&(v=q((c+p)/2)),{...d,position:{x:b,y:v}}});this._emit({...this._config,cards:u})}_distribute(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((c,p)=>this._config.cards[c].position[e]-this._config.cards[p].position[e]),s=t.length,i=this._config.cards,n=i[t[0]].position[e],o=i[t[s-1]].position[e],a=s>1?(o-n)/(s-1):0,l=i.map((c,p)=>{const u=t.indexOf(p);if(u<0)return c;const d=q(n+a*u);return{...c,position:{...c.position,[e]:d}}});this._emit({...this._config,cards:l})}_distributeCanvas(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((o,a)=>this._config.cards[o].position[e]-this._config.cards[a].position[e]),s=t.length,n=this._config.cards.map((o,a)=>{const l=t.indexOf(a);if(l<0)return o;const c=L((l+1)/(s+1));return{...o,position:{...o.position,[e]:c}}});this._emit({...this._config,cards:n})}_alignGroupToCanvas(e){if(!this._config||this._selCards.size<1)return;const t=.5,s=Array.from(this._selCards),i=this._config.cards,n=s.map(c=>i[c].position[e]),o=(Math.min(...n)+Math.max(...n))/2,a=q(t-o),l=i.map((c,p)=>this._selCards.has(p)?{...c,position:{...c.position,[e]:q(c.position[e]+a)}}:c);this._emit({...this._config,cards:l})}_groupCards(){if(!this._config||this._selCards.size+this._selEmbCards.size<2)return;const e="g-"+Date.now().toString(36),t=this._config.cards.map((i,n)=>this._selCards.has(n)?{...i,group:e}:i),s=this._embCards().map((i,n)=>this._selEmbCards.has(n)?{...i,group:e}:i);this._emit({...this._config,cards:t,embedded_cards:s})}_ungroupCards(){if(!this._config)return;const e=this._config.cards.map((s,i)=>{if(!this._selCards.has(i))return s;const{group:n,...o}=s;return o}),t=this._embCards().map((s,i)=>{if(!this._selEmbCards.has(i))return s;const{group:n,...o}=s;return o});this._emit({...this._config,cards:e,embedded_cards:t})}_applyGroupGap(e,t){if(!this._config)return;const{totalW:s,totalH:i}=at(this._config),n=e==="x"?s:i,o=e==="x"?i:s,a=this._config.cards,l=this._embCards(),c=[],p=(y,g,w)=>{const S=this._previewBoxes[w.id];if(!S)return;const f=w.anchor??m("anchor")??"top-left",E=(e==="x"?S.y:S.x)*o,I=E+(e==="x"?S.h:S.w)*o;c.push({kind:y,idx:g,box:S,anchor:f,crossStart:E,crossEnd:I})};for(const y of this._selCards){const g=a[y];g&&p("card",y,g)}for(const y of this._selEmbCards){const g=l[y];g&&p("emb",y,g)}if(c.length<2)return;const u=[...c].sort((y,g)=>y.crossStart-g.crossStart),d=[];let h=[],b=-1/0;for(const y of u)h.length===0||y.crossStart<b?(h.push(y),b=Math.max(b,y.crossEnd)):(d.push(h),h=[y],b=y.crossEnd);h.length>0&&d.push(h);const v=new Map,x=new Map;for(const y of d){if(y.length<2)continue;y.sort((S,f)=>e==="x"?S.box.x-f.box.x:S.box.y-f.box.y);const g=y[0];let w=(e==="x"?g.box.x:g.box.y)*n+(e==="x"?g.box.w:g.box.h)*n;for(let S=1;S<y.length;S++){const f=y[S],E=(e==="x"?f.box.w:f.box.h)*n,I=w+t,[M,P]=Ut[f.anchor],D=L((I+(e==="x"?M:P)*E)/n),A=f.kind==="card"?a[f.idx]:l[f.idx],R=e==="x"?{x:D,y:A.position.y}:{x:A.position.x,y:D};(f.kind==="card"?v:x).set(f.idx,R),w=I+E}}if(v.size===0&&x.size===0)return;const k=a.map((y,g)=>v.has(g)?{...y,position:v.get(g)}:y),$=l.map((y,g)=>x.has(g)?{...y,position:x.get(g)}:y);this._emit({...this._config,cards:k,embedded_cards:$})}_onCardDown(e,t){if(e.preventDefault(),this._bgSelected=!1,e.altKey){const o=this._config?.cards??[],a=this._previewBoxes,l=this.renderRoot.querySelector(".ec-canvas-area");if(l&&Object.keys(a).length>0){const c=l.getBoundingClientRect(),p=(e.clientX-c.left)/c.width,u=(e.clientY-c.top)/c.height,d=o.map((h,b)=>({idx:b,box:a[h.id]})).filter(h=>!!h.box&&p>=h.box.x&&p<=h.box.x+h.box.w&&u>=h.box.y&&u<=h.box.y+h.box.h).map(h=>h.idx).sort((h,b)=>h-b);if(d.length>0){const h=d.indexOf(this._selCard),b=h>=0?d[(h+1)%d.length]:d[0];this._selCard=b,this._selField=-1;const v=o[b]?.group;this._selCards=new Set(v?o.map((x,k)=>({c:x,idx:k})).filter(({c:x})=>x.group===v).map(({idx:x})=>x):[b])}}return}if(this._selCard=t,this._selField=-1,e.shiftKey||e.ctrlKey||e.metaKey){const o=new Set(this._selCards);o.has(t)?o.delete(t):o.add(t),this._selCards=o;return}const s=this._config?.cards??[],i=s[t]?.group,n=i?s.map((o,a)=>({c:o,idx:a})).filter(({c:o})=>o.group===i).map(({idx:o})=>o):[t];if(this._selCards=new Set(n),this._dragCard=t,e.target.setPointerCapture(e.pointerId),this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=e.clientX,this._startY=e.clientY,this._dragMembers=n.map(o=>({idx:o,start:{...s[o]?.position??{x:0,y:0}}})),i){const o=this._embCards(),a=o.map((l,c)=>({ec:l,idx:c})).filter(({ec:l})=>l.group===i).map(({idx:l})=>l);this._selEmbCards=new Set(a),this._embDragMembers=a.map(l=>({idx:l,start:{...o[l]?.position??{x:0,y:0}}}))}else this._selEmbCards=new Set,this._embDragMembers=[]}_onCardMove(e){if(this._dragCard<0||!this._hostRect||!this._config)return;const t=(e.clientX-this._startX)/this._hostRect.width,s=(e.clientY-this._startY)/this._hostRect.height,i=this._config.cards.map((o,a)=>{const l=this._dragMembers.find(c=>c.idx===a);return l?{...o,position:{x:L(l.start.x+t),y:L(l.start.y+s)}}:o}),n=this._embDragMembers.length>0?this._embCards().map((o,a)=>{const l=this._embDragMembers.find(c=>c.idx===a);return l?{...o,position:{x:L(l.start.x+t),y:L(l.start.y+s)}}:o}):this._embCards();this._emit({...this._config,cards:i,embedded_cards:n})}_onCardUp(e){const t=this._gridGeom();if(t&&this._config&&(this._dragMembers.length>0||this._embDragMembers.length>0)){const{cols:s,rows:i}=t,n=this._config.cards,o=this._embCards(),a=[];for(const l of this._dragMembers){const c=n[l.idx];c&&a.push({kind:"card",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}for(const l of this._embDragMembers){const c=o[l.idx];c&&a.push({kind:"emb",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}if(a.length===1){const l=a[0],c=(l.kind==="card"?n[l.idx]?.anchor:o[l.idx]?.anchor)??m("anchor")??"top-left",[p,u]=Ut[c],d=l.box?l.box.x+p*l.box.w:l.pos.x,h=l.box?l.box.y+u*l.box.h:l.pos.y,b=Math.min(s,Math.max(0,Math.round(d*s))),v=Math.min(i,Math.max(0,Math.round(h*i))),x={x:L(b/s),y:L(v/i)};if(l.kind==="card"){const k=n.map(($,y)=>y===l.idx?{...$,position:x}:$);this._emit({...this._config,cards:k})}else{const k=o.map(($,y)=>y===l.idx?{...$,position:x}:$);this._emit({...this._config,embedded_cards:k})}}else if(a.length>=2){let l=1/0,c=1/0,p=-1/0,u=-1/0;for(const $ of a)$.box?(l=Math.min(l,$.box.x),c=Math.min(c,$.box.y),p=Math.max(p,$.box.x+$.box.w),u=Math.max(u,$.box.y+$.box.h)):(l=Math.min(l,$.pos.x),c=Math.min(c,$.pos.y),p=Math.max(p,$.pos.x),u=Math.max(u,$.pos.y));const d={x:(l+p)/2,y:(c+u)/2},h=Math.min(s,Math.max(0,Math.round(d.x*s))),b=Math.min(i,Math.max(0,Math.round(d.y*i))),v={x:h/s-d.x,y:b/i-d.y},x=n.map(($,y)=>this._dragMembers.some(g=>g.idx===y)?{...$,position:{x:L($.position.x+v.x),y:L($.position.y+v.y)}}:$),k=o.map(($,y)=>this._embDragMembers.some(g=>g.idx===y)?{...$,position:{x:L($.position.x+v.x),y:L($.position.y+v.y)}}:$);this._emit({...this._config,cards:x,embedded_cards:k})}}e.target.releasePointerCapture(e.pointerId),this._dragCard=-1}_onPointDown(e,t){if(e.preventDefault(),e.stopPropagation(),this._selPoint=t,!this._config)return;const s=this._flows()[this._selFlow];if(!s)return;const i=s.points[t];if(i){if(e.shiftKey){this._removeFlowPoint(this._selFlow,t),this._selPoint=-1;return}i.card==null&&(this._dragPoint=t,e.target.setPointerCapture(e.pointerId),this._pRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._pStartX=e.clientX,this._pStartY=e.clientY,this._pStartPos={x:i.x??0,y:i.y??0},this._snapAxis=null)}}_onPointMove(e){if(this._dragPoint<0||!this._pRect||!this._config)return;let t=L(this._pStartPos.x+(e.clientX-this._pStartX)/this._pRect.width),s=L(this._pStartPos.y+(e.clientY-this._pStartY)/this._pRect.height);const i=t,n=s;if(e.ctrlKey){const o=this._flows()[this._selFlow];if(o&&this._pRect){const a=this._config.cards,l=this._previewBoxes,c=this._dragPoint,p=c>0?o.points[c-1]:null,u=c<o.points.length-1?o.points[c+1]:null,d=p?Vt(p,a,l):null,h=u?Vt(u,a,l):null,b=this._pRect.width,v=this._pRect.height;if(d&&h){const x=Math.hypot((t-d.x)*b,(s-h.y)*v),k=Math.hypot((t-h.x)*b,(s-d.y)*v);x<=k?(t=d.x,s=h.y):(t=h.x,s=d.y)}else{const x=d??h;if(x){if(this._snapAxis===null){const k=e.clientX-this._pStartX,$=e.clientY-this._pStartY;Math.hypot(k,$)>4?this._snapAxis=Math.abs(k)>=Math.abs($)?"y":"x":this._snapAxis=Math.abs(t-x.x)*b<Math.abs(s-x.y)*v?"x":"y"}this._snapAxis==="x"?t=x.x:s=x.y}}}}{let a=!1;t:for(const l of this._config.cards){const c=this._previewBoxes[l.id];if(c)for(const p of["top","right","bottom","left"]){let u,d;switch(p){case"top":u=c.x+c.w/2,d=c.y;break;case"right":u=c.x+c.w,d=c.y+c.h/2;break;case"bottom":u=c.x+c.w/2,d=c.y+c.h;break;case"left":u=c.x,d=c.y+c.h/2;break}if(Math.hypot((i-u)*this._pRect.width,(n-d)*this._pRect.height)<=24){t=u,s=d,this._snapAnchor={card:l.id,side:p},a=!0;break t}}}a||(this._snapAnchor=null)}this._updateFlowPoint(this._selFlow,this._dragPoint,{x:t,y:s})}_onPointUp(e){this._dragPoint>=0&&(e.target.releasePointerCapture(e.pointerId),this._snapAnchor&&this._updateFlowPoint(this._selFlow,this._dragPoint,{card:this._snapAnchor.card,side:this._snapAnchor.side,x:void 0,y:void 0})),this._dragPoint=-1,this._snapAnchor=null,this._snapAxis=null}_ptSegDist(e,t,s,i,n,o){const a=n-s,l=o-i,c=a*a+l*l,p=c===0?0:Math.max(0,Math.min(1,((e-s)*a+(t-i)*l)/c));return Math.hypot(e-s-p*a,t-i-p*l)}_onCanvasAreaClick(e){e.target.closest(".ec-bg-ov,.ec-bg-resize")||(this._bgSelected=!1);const t=this._flows();if(t.length===0||e.target.closest(".ec-handle,.ec-card-ov,.ec-emb-handle,.ec-emb-ov,.ec-zone-handle,.ec-flow-node,.ec-snap"))return;const i=e.currentTarget.getBoundingClientRect(),n=e.clientX-i.left,o=e.clientY-i.top,a=this._config?.cards??[],l=10;let c=-1,p=1/0;for(let u=0;u<t.length;u++){const d=t[u].points.map(h=>{const b=Vt(h,a,this._previewBoxes);return{x:b.x*i.width,y:b.y*i.height}});for(let h=0;h<d.length-1;h++){const b=this._ptSegDist(n,o,d[h].x,d[h].y,d[h+1].x,d[h+1].y);b<p&&(p=b,c=u)}}c>=0&&p<=l&&(this._selFlow=c,this._selPoint=-1)}_syncPreviewDialog(){const e=this.renderRoot?.querySelector("dialog.ec-preview");if(!e)return;const t=e.matches(":modal");this._previewExpanded&&!t?(e.open&&e.close(),e.showModal()):!this._previewExpanded&&(t||!e.open)&&(e.open&&e.close(),e.show())}_sizeExpandedCanvas(){const e=this.renderRoot?.querySelector(".ec-canvas-area");if(!e)return;if(!this._previewExpanded){e.style.width&&e.style.removeProperty("width");return}const t=this.renderRoot?.querySelector(".ec-preview");if(!t)return;this._previewRO||(this._previewRO=new ResizeObserver(()=>this._sizeExpandedCanvas()),this._previewRO.observe(t),window.addEventListener("resize",this._onWindowResize));const{totalW:s,totalH:i}=at(this._config);if(!s||!i)return;const n=this.renderRoot?.querySelector(".ec-expanded-bottom-bar"),o=t.clientWidth,a=window.innerHeight-(n?.offsetHeight??0);if(o<=0||a<=0)return;const l=`${Math.floor(Math.min(o,a*s/i))}px`;e.style.width!==l&&(e.style.width=l)}disconnectedCallback(){super.disconnectedCallback(),this._previewRO?.disconnect(),this._previewRO=void 0,window.removeEventListener("resize",this._onWindowResize)}updated(){this.renderRoot?.activeElement?.closest?.(".ec-align-bar-gap")&&console.log("[gap-debug] updated() ran while a gap input is focused, at",new Date().toISOString());const t=this.renderRoot?.querySelectorAll(Te);if(this._config&&t?.forEach(s=>s.setConfig(this._config)),this._syncPreviewDialog(),this._sizeExpandedCanvas(),this._previewExpanded&&(this._showAddFlowInput?this.renderRoot?.querySelector(".ec-flow-name-input")?.focus():this.renderRoot?.querySelector(".ec-preview")?.focus()),this._embEditorOpen&&this._embNativeEditor){const s=this.renderRoot.querySelector("#emb-native-slot");if(s&&!s.contains(this._embNativeEditor)){s.innerHTML="",s.appendChild(this._embNativeEditor);const i=this._embEditorConfig??(this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0);if(i){const n=this._embNativeEditor;try{n.setConfig?.(i)}catch{}n.value=i}this._embNativeEditor.hass=this.hass}}this._pickerStyleRetries=0,this._stylePickers()}_stylePickers(){[this._styleEntityPickers(),this._styleIconPickers()].some(Boolean)&&!this._pickerStyleScheduled&&this._pickerStyleRetries<60&&(this._pickerStyleScheduled=!0,this._pickerStyleRetries++,requestAnimationFrame(()=>{this._pickerStyleScheduled=!1,this._stylePickers()}))}_injectPickerStyle(e){const t=e?.shadowRoot;if(!t)return!1;if(t.querySelector("style[data-mc-picker]"))return!0;const s=document.createElement("style");return s.setAttribute("data-mc-picker",""),s.textContent=`
      :host {
        border-radius: 6px !important;
        min-height: ${C.PICKER_HEIGHT}px !important;
      }
      :host::after, :host::before { content: none !important; }
      #item > md-item {
        border-radius: 6px !important;
        color: var(--primary-color) !important;
        min-height: ${C.PICKER_HEIGHT}px !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        font-size: 15px !important;
        --mdc-icon-size: 20px;
      }
    `,t.appendChild(s),!0}_findInShadow(e,t,s=6){let i=[e];for(let n=0;n<s&&i.length;n++){const o=[];for(const a of i){const l=a.shadowRoot;if(!l)continue;const c=l.querySelector(t);if(c)return c;l.querySelectorAll("*").forEach(p=>{p.shadowRoot&&o.push(p)})}i=o}return null}_styleIconPickers(){const e=this.renderRoot?.querySelectorAll("ha-icon-picker");if(!e||e.length===0)return!1;let t=!1;return e.forEach(s=>{const i=this._findInShadow(s,"ha-combo-box-item");this._injectPickerStyle(i)||(t=!0)}),t}_styleEntityPickers(){const e=this.renderRoot?.querySelectorAll("ha-entity-picker");if(!e||e.length===0)return!1;let t=!1;return e.forEach(s=>{const i=s.shadowRoot?.querySelector("ha-generic-picker")?.shadowRoot?.querySelector("ha-picker-field")?.shadowRoot?.querySelector("ha-combo-box-item");this._injectPickerStyle(i)||(t=!0)}),t}_iconPicker(e,t,s){return r`<ha-icon-picker
      .hass=${this.hass}
      .value=${e??""}
      .placeholder=${s??""}
      @value-changed=${i=>{const n=i.detail.value;t(n||void 0)}}
    ></ha-icon-picker>`}_entitySelector(e){const{label:t="Entity",entity:s,onEntity:i,includeVirtuals:n=!0,attribute:o,onAttribute:a,attributePlaceholder:l}=e,c=s?.startsWith("virtual:")??!1,p=!s||Object.keys(this.hass?.states[s]?.attributes??{}).length>0;return r`
      ${this._row(t,c?r`<div style="display:flex;gap:4px;align-items:center;">
              <span class="ec-input" style="flex:1;opacity:0.8;">
                ${this._virtuals().find(u=>`virtual:${u.id}`===s)?.name??s}
              </span>
              <button class="ec-btn-clear" @click=${()=>i(void 0)} title="Switch to real entity">✕</button>
            </div>`:r`<ha-entity-picker
              .hass=${this.hass}
              .value=${s??""}
              allow-custom-entity
              @value-changed=${u=>i(u.detail.value)}
            ></ha-entity-picker>`)}
      ${n&&!c&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
          .value=${""}
          @change=${u=>{const d=u.target.value;d&&i(d),u.target.value=""}}
        >
          <option value="">(pick a virtual)</option>
          ${this._virtuals().map(u=>r`<option value=${"virtual:"+u.id}>${u.name}</option>`)}
        </select>`):_}
      ${a&&!c&&p?this._row("Attribute",r`<ha-selector
          .hass=${this.hass}
          .selector=${{attribute:{entity_id:s||void 0}}}
          .value=${o}
          .placeholder=${l}
          .required=${!1}
          @value-changed=${u=>{const d=u.detail.value;a(typeof d=="string"&&d?d:void 0)}}
        ></ha-selector>`):_}
    `}_boxRows(e,t,s,i=!0){return r`
      ${this._row("Background",this._colorPicker(`${e}-bg`,t.background,n=>s({background:n}),{onClear:()=>s({background:void 0,background_alpha:void 0})}))}

      ${this._row("Gradient to",this._colorPicker(`${e}-bg2`,t.background2,n=>s({background2:n}),{onClear:()=>s({background2:void 0,background_angle:void 0})}))}

      ${t.background2?this._controlNumRow("Gradient angle (deg)",t.background_angle,"180",n=>s({background_angle:n}),0):_}

      ${this._row("Opacity",r`<div class="ec-opacity-row">
          <input type="range" min="0" max="1" step="0.01"
            .value=${String(t.background_alpha??m("box_background_alpha")??1)}
            @input=${n=>{const o=parseFloat(n.target.value);s({background_alpha:o})}}
          />
          <span class="ec-opacity-val">${Math.round((t.background_alpha??m("box_background_alpha")??1)*100)}%</span>
          <button class="ec-btn-clear" @click=${()=>s({background_alpha:void 0})} title="Clear">✕</button>
        </div>`)}

      ${this._row("Color",this._colorPicker(`${e}-col`,t.color,n=>s({color:n})))}

      ${this._row("Border",r`<input type="checkbox" .checked=${t.border??!1}
          @change=${n=>s({border:n.target.checked})}
        />`)}

      ${this._row("Border width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.border_width!=null?String(t.border_width):""}
          placeholder="1"
          @change=${n=>{const o=n.target.value;s({border_width:o===""?void 0:Number(o)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}

      ${this._row("Radius (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.radius!=null?String(t.radius):""}
          placeholder="0"
          @change=${n=>{const o=n.target.value;s({radius:o===""?void 0:Number(o)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}

      ${this._row("Padding (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.padding!=null?String(t.padding):""}
          placeholder="0"
          @change=${n=>{const o=n.target.value;s({padding:o===""?void 0:Number(o)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}

      ${this._row("Glow",r`<input type="checkbox" .checked=${t.glow??!1}
          @change=${n=>s({glow:n.target.checked})}
        />`)}

      ${i?this._cssRow(t.extra_css,n=>s({extra_css:n})):_}

      ${this._row("Blur (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.blur!=null?String(t.blur):""}
          placeholder="0"
          @change=${n=>{const o=n.target.value;s({blur:o===""?void 0:Number(o)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
    `}_textRows(e,t,s,i=!0,n=!0,o=!0){return r`
      ${n?this._row("Font size (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="6"
          .value=${t.font_size!=null?String(t.font_size):""}
          placeholder="inherit"
          @change=${a=>{const l=a.target.value;s({font_size:l===""?void 0:Number(l)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${a=>this._stepNumInput(a,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${a=>this._stepNumInput(a,1)}>+</button></span></span>`):_}

      ${o?this._row("Color",this._colorPicker(`${e}-col`,t.color,a=>s({color:a}))):_}

      ${this._row("Font weight",r`<select class="ec-select"
          .value=${t.font_weight!=null?String(t.font_weight):""}
          @change=${a=>{const l=a.target.value;s({font_weight:l===""?void 0:Number(l)})}}
        >
          <option value="" .selected=${t.font_weight==null}>(inherit)</option>
          <option value="400" .selected=${t.font_weight===400}>400 — Normal</option>
          <option value="600" .selected=${t.font_weight===600}>600 — Semi-bold</option>
          <option value="700" .selected=${t.font_weight===700}>700 — Bold</option>
        </select>`)}

      ${this._row("Font family",r`<input class="ec-input" type="text" .value=${t.font_family??""}
          placeholder="inherit"
          @change=${a=>{const l=a.target.value;s({font_family:l===""?void 0:l})}}
        />`)}

      ${this._row("Letter spacing (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
          .value=${t.letter_spacing!=null?String(t.letter_spacing):""}
          placeholder="0"
          @change=${a=>{const l=a.target.value;s({letter_spacing:l===""?void 0:Number(l)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${a=>this._stepNumInput(a,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${a=>this._stepNumInput(a,1)}>+</button></span></span>`)}

      ${i?this._cssRow(t.extra_css,a=>s({extra_css:a})):_}
    `}_cssRow(e,t){return this._row("Additional CSS",r`<textarea
      class="ec-input ec-css-input${this._isValidCss(e??"")?"":" ec-css-invalid"}"
      rows="2" spellcheck="false"
      placeholder="e.g. box-shadow: 0 0 8px red; --my-var: 4px;"
      .value=${e??""}
      @input=${s=>{const i=s.target;i.classList.toggle("ec-css-invalid",!this._isValidCss(i.value))}}
      @change=${s=>{const i=s.target.value.trim();t(i||void 0)}}
    ></textarea>`)}_isValidCss(e){const t=(e??"").trim();if(!t)return!0;if(/[{}]/.test(t))return!1;for(const s of t.split(";")){const i=s.trim();if(!i)continue;const n=i.indexOf(":");if(n<=0)return!1;const o=i.slice(0,n).trim();if(!i.slice(n+1).trim()||!/^(--[a-zA-Z0-9-]+|-?[a-zA-Z][a-zA-Z0-9-]*)$/.test(o))return!1}return!0}_renderAlignBar(){const e=Array.from(this._selCards).some(t=>this._config?.cards[t]?.group)||Array.from(this._selEmbCards).some(t=>this._embCards()[t]?.group);return r`
      <div class="ec-align-bar">
        <button class="ec-btn-align" @click=${()=>this._alignCards("left")} title="Align left edges">⇤ Left</button>
        <button class="ec-btn-align" @click=${()=>this._alignCards("centerH")} title="Center horizontally">↔ Center H</button>
        <button class="ec-btn-align" @click=${()=>this._alignCards("right")} title="Align right edges">⇥ Right</button>
        <button class="ec-btn-align" @click=${()=>this._alignCards("top")} title="Align top edges">⇡ Top</button>
        <button class="ec-btn-align" @click=${()=>this._alignCards("middleV")} title="Center vertically">↕ Middle V</button>
        <button class="ec-btn-align" @click=${()=>this._alignCards("bottom")} title="Align bottom edges">⇣ Bottom</button>
        <button class="ec-btn-align" @click=${()=>this._distribute("x")} title="Distribute horizontally within selection">⇔ Dist H (grp)</button>
        <button class="ec-btn-align" @click=${()=>this._distribute("y")} title="Distribute vertically within selection">⇕ Dist V (grp)</button>
        <button class="ec-btn-align" @click=${()=>this._distributeCanvas("x")} title="Distribute horizontally across full canvas">⇔ Dist H (canvas)</button>
        <button class="ec-btn-align" @click=${()=>this._distributeCanvas("y")} title="Distribute vertically across full canvas">⇕ Dist V (canvas)</button>
        <button class="ec-btn-align" @click=${()=>this._alignGroupToCanvas("x")} title="Center group horizontally on canvas">↔ Align H (canvas)</button>
        <button class="ec-btn-align" @click=${()=>this._alignGroupToCanvas("y")} title="Center group vertically on canvas">↕ Align V (canvas)</button>
        <button class="ec-btn-align" @click=${()=>this._groupCards()} title="Group selected cards — drag one to move all">Group</button>
        ${e?r`<button class="ec-btn-align" @click=${()=>this._ungroupCards()} title="Remove group from selected cards">Ungroup</button>`:_}
      </div>
      ${e?r`
        <div class="ec-align-bar ec-align-bar-gap">
          <label class="ec-quick-field">
            <span>Column gap (px)</span>
            <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              placeholder="e.g. 12"
              .value=${this._groupColGap!=null?String(this._groupColGap):""}
              @change=${t=>{const s=t.target.value;this._groupColGap=s===""?void 0:Number(s)}}
              @focusout=${t=>console.log("[gap-debug] col-gap focusout, relatedTarget=",t.relatedTarget,"newActiveElement=",document.activeElement)}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each row by this many px"
            @click=${()=>{this._groupColGap!=null&&this._applyGroupGap("x",this._groupColGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupColGap=void 0}}>Clear</button>

          <label class="ec-quick-field">
            <span>Row gap (px)</span>
            <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              placeholder="e.g. 12"
              .value=${this._groupRowGap!=null?String(this._groupRowGap):""}
              @change=${t=>{const s=t.target.value;this._groupRowGap=s===""?void 0:Number(s)}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each column by this many px"
            @click=${()=>{this._groupRowGap!=null&&this._applyGroupGap("y",this._groupRowGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupRowGap=void 0}}>Clear</button>
        </div>
        <p class="ec-hint">Column gap re-spaces cards whose rows overlap vertically (left-to-right neighbors); Row gap re-spaces cards whose columns overlap horizontally (top-to-bottom neighbors). Cards don't need to be pixel-perfectly aligned first.</p>
      `:_}
    `}_quickNum(e,t,s,i){return r`<label class="ec-quick-field">
      <span>${e}</span>
      <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
        min=${i?.min??""} max=${i?.max??""}
        placeholder=${i?.placeholder??""}
        .value=${t!=null?String(t):""}
        @change=${n=>s(n.target.value)}
      /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>
    </label>`}_renderCardQuickPanel(e){const t=this._config?.cards[e];if(!t)return _;const s=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${s?this._quickNum("Span",t.grid_span??1,i=>{const n=Math.max(1,Math.min(s.cols,Number(i)||1)),o=Math.max(8,n*s.cellW-s.padding);this._updateCard(e,{grid_span:n,width:o})},{min:1,max:s.cols}):_}
        ${this._quickNum("Width",t.width,i=>this._updateCard(e,{width:i===""?void 0:Number(i)}),{placeholder:"auto"})}
        ${this._quickNum("Field gap",t.field_gap,i=>this._updateCard(e,{field_gap:i===""?void 0:Number(i)}),{placeholder:"default"})}
        ${this._quickNum("Col gap",t.column_gap,i=>this._updateCard(e,{column_gap:i===""?void 0:Number(i)}),{placeholder:"default"})}
      </div>
    `}_renderEmbQuickPanel(e){const t=this._embCards()[e];if(!t)return _;const s=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${s?this._quickNum("Span",t.grid_span??1,i=>{const n=Math.max(1,Math.min(s.cols,Number(i)||1)),o=Math.max(8,n*s.cellW-s.padding);this._updateEmbCard(e,{grid_span:n,width:o})},{min:1,max:s.cols}):_}
        ${this._quickNum("Width",t.width,i=>this._updateEmbCard(e,{width:Number(i)}))}
        ${this._quickNum("Height",t.height,i=>this._updateEmbCard(e,{height:i===""?void 0:Number(i)}),{placeholder:"auto"})}
      </div>
    `}render(){if(!this._config)return _;if(this._wizStep>=0)return this._renderWizard();const{totalW:e,totalH:t}=at(this._config),s=this._config.cards??[];return r`
      <div class="ec-version-bar">
        <span class="ec-version">Mosaic Canvas Card v${De} · build ${Ai}</span>
      </div>

      <!-- ── Live preview ── -->
      <dialog class="ec-preview${this._previewExpanded?" ec-preview--expanded":""}${this._previewExpanded&&this._barAtTop?" ec-bar-top":""}"
        @pointermove=${i=>{this._onCardMove(i),this._onPointMove(i),this._onZoneMove(i),this._onZoneResizeMove(i),this._onEmbCardMove(i),this._onBgMove(i)}}
        @pointerup=${i=>{this._onCardUp(i),this._onPointUp(i),this._onZoneUp(i),this._onZoneResizeUp(i),this._onEmbCardUp(i),this._onBgUp(i)}}
        @cancel=${i=>{i.preventDefault(),this._collapseExpanded()}}
        tabindex="-1"
      >
        ${this._previewExpanded?r`
        <div class="ec-canvas-area"
          @click=${i=>this._onCanvasAreaClick(i)}
        >
          ${ae`<${Js}
            class="ec-preview-card"
            .hass=${this.hass}
            ?editor=${!0}
            @ec-boxes-changed=${i=>{this._previewBoxes=i.detail.boxes}}
          ></${Js}>`}
          ${this._renderGridOverlay()}
          <div class="ec-handles">
            ${this._renderBgOverlay()}
            ${s.map((i,n)=>{const o=`${n===this._selCard?" selected":""}${this._selCards.has(n)&&n!==this._selCard?" multi":""}${i.group?" grouped":""}`,a=this._previewBoxes[i.id];return a?r`
              <div
                class="ec-card-ov${o}"
                style="left:${a.x*100}%;top:${a.y*100}%;width:${a.w*100}%;height:${a.h*100}%;"
                @pointerdown=${l=>this._onCardDown(l,n)}
                title=${i.name??`Card ${n+1}`}
              ></div>`:r`
              <div
                class="ec-handle${o}"
                style="left:${i.position.x*100}%;top:${i.position.y*100}%;"
                @pointerdown=${l=>this._onCardDown(l,n)}
                title=${i.name??`Card ${n+1}`}
              ></div>`})}
            ${this._zones().map((i,n)=>{const o=this._zoneBox(i);return r`
              <div
                class="ec-zone-handle${n===this._selZone?" selected":""}"
                style="left:${o.x/e*100}%;top:${o.y/t*100}%;width:${o.w/e*100}%;height:${o.h/t*100}%;"
                @pointerdown=${a=>this._onZoneDown(a,n)}
                title=${i.name??`Zone ${n+1}`}
              >
                <span class="ec-zone-label">${i.name??`Zone ${n+1}`}</span>
                ${n===this._selZone?["tl","tr","bl","br"].map(a=>r`
                  <div
                    class="ec-zone-resize ec-zone-resize-${a}"
                    @pointerdown=${l=>this._onZoneResizeDown(l,n,a)}
                  ></div>`):_}
              </div>`})}
            ${this._embCards().map((i,n)=>{const o=`${n===this._selEmbCard?" selected":""}${this._selEmbCards.has(n)&&n!==this._selEmbCard?" multi":""}${i.group?" grouped":""}`,a=this._previewBoxes[i.id];return a?r`
              <div
                class="ec-emb-ov${o}"
                style="left:${a.x*100}%;top:${a.y*100}%;width:${a.w*100}%;height:${a.h*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,n)}
                title=${i.name??`Embedded ${n+1}`}
              ></div>`:r`
              <div
                class="ec-emb-handle${o}"
                style="left:${i.position.x*100}%;top:${i.position.y*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,n)}
                title=${i.name??`Embedded ${n+1}`}
              ></div>`})}
          </div>
          ${this._flows().length>0?r`
            <svg class="ec-flow-paths-overlay" viewBox="0 0 1 1" preserveAspectRatio="none">
              <defs>
                <filter id="ec-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.003" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              ${this._flows().map((i,n)=>{const o=i.points.map(l=>Vt(l,s,this._previewBoxes)).map(l=>`${l.x},${l.y}`).join(" "),a=n===this._selFlow;return T`<polyline
                  points="${o}"
                  fill="none"
                  stroke="${a?"rgba(0,212,255,0.9)":"rgba(0,180,255,0.55)"}"
                  stroke-width="${a?3:2.5}"
                  stroke-dasharray="6 4"
                  vector-effect="non-scaling-stroke"
                  filter="url(#ec-flow-glow)"
                ></polyline>`})}
            </svg>
          `:_}
          ${this._selFlow>=0?(()=>{const i=this._flows()[this._selFlow];if(!i)return _;const n=["top","right","bottom","left"];return r`
              <div class="ec-flow-layer"
                @click=${o=>this._onFlowLayerClick(o)}
              >
                ${this._selPoint>=0?s.map(o=>n.map(a=>{const l=this._previewBoxes[o.id];if(!l)return _;let c,p;switch(a){case"top":c=l.x+l.w/2,p=l.y;break;case"right":c=l.x+l.w,p=l.y+l.h/2;break;case"bottom":c=l.x+l.w/2,p=l.y+l.h;break;case"left":c=l.x,p=l.y+l.h/2;break;default:c=l.x+l.w/2,p=l.y+l.h/2;break}return r`<div
                    class="ec-snap"
                    style="left:${c*100}%;top:${p*100}%;"
                    @click=${u=>{u.stopPropagation(),this._updateFlowPoint(this._selFlow,this._selPoint,{card:o.id,side:a,x:void 0,y:void 0})}}
                  ></div>`})):_}
                ${i.points.map((o,a)=>{const l=Vt(o,s,this._previewBoxes);return r`<div
                    class="ec-flow-node${a===this._selPoint?" selected":""}${o.card!=null?" anchored":" free"}"
                    style="left:${l.x*100}%;top:${l.y*100}%;"
                    @pointerdown=${c=>this._onPointDown(c,a)}
                  ></div>`})}
              </div>
            `})():_}
        </div>
        <div class="ec-expanded-bottom-bar">
            <div class="ec-bottom-bar-left">
              ${this._showAddFlowInput?r`
                <input class="ec-flow-name-input" type="text"
                  placeholder="Flow name"
                  .value=${this._newFlowName}
                  @input=${i=>{this._newFlowName=i.target.value}}
                  @keydown=${i=>{i.key==="Enter"&&this._addFlowFromExpanded(),i.key==="Escape"&&(i.preventDefault(),i.stopPropagation(),this._showAddFlowInput=!1,this._newFlowName="")}}
                >
                <button class="ec-btn-add" @click=${()=>this._addFlowFromExpanded()}>Add</button>
                <button class="ec-btn-remove" @click=${()=>{this._showAddFlowInput=!1,this._newFlowName=""}}>✕</button>
              `:r`
                <button class="ec-btn-add" @click=${()=>{this._showAddFlowInput=!0}}>+ Add Flow Line</button>
              `}
            </div>
            <div class="ec-bottom-bar-center">
              ${this._selCards.size+this._selEmbCards.size>=2?this._renderAlignBar():this._selCards.size===1&&this._selEmbCards.size===0?this._renderCardQuickPanel(Array.from(this._selCards)[0]):this._selEmbCards.size===1&&this._selCards.size===0?this._renderEmbQuickPanel(Array.from(this._selEmbCards)[0]):this._selFlow>=0?r`<span class="ec-hint-text">Flow selected — click card anchor points to connect endpoints</span>`:r`
                        <span class="ec-hint-text">Click on a flow to select it for editing or Add Flow to create a new one</span>
                        <span class="ec-hint-text">Click-drag a card to move it · Shift-click to multi-select · Alt-click to cycle stacked cards</span>
                      `}
            </div>
            ${this._selCards.size+this._selEmbCards.size>=2?r`
              <button class="ec-btn-done" title="Finish multi-card editing"
                @click=${()=>{this._selCards=new Set,this._selEmbCards=new Set}}>✓ Done</button>
            `:this._selCards.size===1&&this._selEmbCards.size===0||this._selEmbCards.size===1&&this._selCards.size===0?r`
              <button class="ec-btn-done" title="Finish card editing"
                @click=${()=>{this._selCards=new Set,this._selEmbCards=new Set,this._selCard=-1,this._selEmbCard=-1}}>✓ Done</button>
            `:this._selFlow>=0?r`
              <button class="ec-btn-done" title="Finish flow editing"
                @click=${()=>{this._selFlow=-1}}>✓ Done</button>
            `:_}
            ${this._previewExpanded?r`
              <button class="ec-side-close" title="Close Mosaic Editor Window" @click=${()=>this._collapseExpanded()}>Close Window</button>
            `:_}
          </div>
        `:r`
        <div class="ec-open-editor-wrap">
          <button class="ec-open-editor-btn" @click=${()=>{this._previewExpanded=!0}}>
            <ha-icon icon="mdi:arrow-expand-all"></ha-icon>
            Open Mosaic Editor Window
          </button>
        </div>
        `}
        ${this._renderGGModal()}
        ${this._renderEmbPickerModal()}
        ${this._renderEmbEditorModal()}
        ${this._renderFlowCompleteModal()}
      </dialog>

      ${this._previewExpanded?_:this._renderControls()}
    `}_navOpenPanel(e){this._navPanel=e,this._navPath=[]}_navBack(){this._navPath.length?this._navPath=this._navPath.slice(0,-1):this._navPanel=""}_navRow(e,t,s,i){return r`
      <button class="ec-nav-item" @click=${i}>
        <ha-icon class="ec-nav-item-icon" icon=${e}></ha-icon>
        <span class="ec-nav-item-text">
          <span class="ec-nav-item-label">${t}</span>
          ${s?r`<span class="ec-nav-item-hint">${s}</span>`:_}
        </span>
        <ha-icon class="ec-nav-item-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_navBtn(e,t,s,i){return r`
      <button class="ec-nav-card" @click=${()=>this._navPush(e,t)}>
        <ha-icon class="ec-nav-card-icon" icon=${i}></ha-icon>
        <span class="ec-nav-card-text">
          <span class="ec-nav-card-label">${t}</span>
          ${s?r`<span class="ec-nav-card-hint">${s}</span>`:_}
        </span>
        <ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_itemCard(e){const{dragKey:t,icon:s,label:i,sub:n,selected:o,multi:a,onClick:l,actions:c}=e;return r`
      <div
        class="ec-item-card${o?" selected":""}${a?" multi":""}${this._dragSrc===t?" ec-dragging":""}"
        draggable="true"
        @dragstart=${p=>this._onDragStart(p,t)}
        @dragover=${p=>this._onDragOver(p)}
        @dragleave=${p=>this._onDragLeave(p)}
        @drop=${p=>this._onDrop(p,t)}
        @dragend=${p=>this._onDragEnd(p)}
        @click=${l}
      >
        <span class="ec-drag-handle" title="Drag to reorder"></span>
        <ha-icon class="ec-item-card-icon" icon=${s}></ha-icon>
        <span class="ec-item-card-text">
          <span class="ec-item-card-label">${i}</span>
          ${n?r`<span class="ec-item-card-sub">${n}</span>`:_}
        </span>
        <span class="ec-item-card-actions">${c??_}</span>
        <ha-icon class="ec-item-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </div>
    `}_renderBreadcrumb(){const e=[{label:C._TAB_LABEL[this._navTab],onClick:()=>{this._navPanel="",this._navPath=[]}}];return this._navPanel&&(e.push({label:C._PANEL_META[this._navPanel]?.title??this._navPanel,onClick:()=>{this._navPath=[]}}),this._navPath.forEach((t,s)=>e.push({label:t.label,onClick:()=>{this._navPath=this._navPath.slice(0,s+1)}}))),r`
      <div class="ec-breadcrumb">
        ${e.map((t,s)=>r`
          <button class="ec-crumb${s===e.length-1?" ec-crumb--active":""}" @click=${t.onClick}>${t.label}</button>
          ${s<e.length-1?r`<ha-icon class="ec-crumb-sep" icon="mdi:chevron-right"></ha-icon>`:_}
        `)}
      </div>
    `}_renderRibbonItems(){return this._navTab==="cards"?r`
        ${this._navRow("mdi:view-dashboard","Mosaic Card","Values, labels, icons & Element Library",()=>this._navOpenPanel("mosaic"))}
        ${this._navRow("mdi:picture-in-picture-bottom-right","Popover Cards","Shown on a trigger action",()=>this._navOpenPanel("popover"))}
        ${this._navRow("mdi:widgets","Embedded External Cards","Any native or custom HA card",()=>this._navOpenPanel("embedded"))}
      `:this._navTab==="elements"?r`
        ${this._navRow("mdi:chart-timeline-variant","Animated Flow Lines","Entity-driven CSS flows",()=>this._navOpenPanel("flows"))}
        ${this._navRow("mdi:gesture-tap-box","Clickable Zones","Bounded action areas",()=>this._navOpenPanel("zones"))}
        ${this._navRow("mdi:memory","Virtual Entities","Helper-like computed values",()=>this._navOpenPanel("virtuals"))}
      `:r`
      ${this._navRow("mdi:image-size-select-actual","Canvas","Background, aspect & placement mode",()=>this._navOpenPanel("canvas"))}
      ${this._navRow("mdi:palette","Global Defaults","Inherited element styling",()=>this._navOpenPanel("defaults"))}
      ${this._navRow("mdi:bookmark-multiple","Templates","Import & export layout",()=>this._navOpenPanel("templates"))}
    `}_renderRibbon(){return r`
      <div class="ec-nav-shell">
        <div class="ec-nav-rail">
          ${[{key:"cards",icon:"mdi:view-grid",label:"Cards"},{key:"elements",icon:"mdi:shape",label:"Elements"},{key:"settings",icon:"mdi:cog",label:"Settings"}].map(t=>r`
            <button class="ec-nav-tab${this._navTab===t.key?" active":""}"
              @click=${()=>{this._navTab=t.key,this._navPanel="",this._navPath=[]}}
            >
              <ha-icon icon=${t.icon}></ha-icon>
              <span>${t.label}</span>
            </button>
          `)}
        </div>
        <div class="ec-nav-list">${this._renderRibbonItems()}</div>
      </div>
    `}_renderPanelHost(){const e=C._PANEL_META[this._navPanel],t=this._navPath.length?this._navPath[this._navPath.length-1].label:e?.title??"";return r`
      <div class="ec-panel-header">
        <button class="ec-panel-back" @click=${()=>this._navBack()}>
          <ha-icon icon="mdi:arrow-left"></ha-icon> ${this._navPath.length?"Back":"Ribbon"}
        </button>
        <ha-icon class="ec-panel-header-icon" icon=${e?.icon??"mdi:tune"}></ha-icon>
        <span class="ec-panel-header-title">${t}</span>
        <div class="ec-panel-header-spacer"></div>
        <button class="ec-panel-done" @click=${()=>{this._navPanel="",this._navPath=[]}}>
          <ha-icon icon="mdi:check"></ha-icon> Done
        </button>
      </div>
      <div class="ec-panel-body">
        ${this._navPath.length===0&&e?.desc?r`<p class="ec-panel-desc">${e.desc}</p>`:_}
        ${this._renderPanelBody()}
      </div>
    `}_renderPanelBody(){switch(this._navPanel){case"mosaic":return this._renderMosaicPanel();case"popover":return this._renderPopoverPanel();case"embedded":return this._renderEmbeddedPanel();case"flows":return this._renderFlowsRibbonPanel();case"zones":return this._renderZonesRibbonPanel();case"virtuals":return this._renderVirtualsRibbonPanel();case"canvas":return this._renderCanvasRibbonPanel();case"defaults":return this._renderDefaultsRibbonPanel();case"templates":return this._renderTemplatesRibbonPanel();default:return r``}}_renderControls(){return r`
      <div class="ec-controls">
        ${this._renderBreadcrumb()}
        ${this._navPanel===""?this._renderRibbon():this._renderPanelHost()}
      </div>
    `}_renderMosaicPanel(){const e=this._config?.cards??[],t=this._navPath;if(t.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addCard}>+ Mosaic Card</button>
        </div>
        ${e.length===0?r`<p class="ec-empty">No mosaic cards yet — click "+ Mosaic Card" to add one.</p>`:e.map((o,a)=>this._itemCard({dragKey:`card:${a}`,icon:"mdi:view-dashboard",label:o.name??`Card ${a+1}`,sub:`${o.fields.length} field${o.fields.length===1?"":"s"}`,selected:a===this._selCard,multi:this._selCards.has(a),onClick:l=>{if(l.ctrlKey||l.metaKey){const c=new Set(this._selCards);c.has(a)?c.delete(a):c.add(a),this._selCards=c,this._selCard=a}else this._selCard=a,this._selField=-1,this._selCards=new Set([a]),this._navPush(`card:${a}`,o.name??`Card ${a+1}`)},actions:r`
                  ${this._copySourceIdx===a?r`<span class="ec-copy-badge">Copied</span>`:r`<button
                        class="ec-btn-copy"
                        @click=${l=>{l.stopPropagation(),this._copyFields(a)}}
                        title="Copy fields from this card"
                      >⎘</button>`}
                  ${this._copiedFields&&a!==this._copySourceIdx?r`<button
                        class="ec-btn-paste"
                        @click=${l=>{l.stopPropagation(),this._pasteFields(a)}}
                        title="Paste fields onto this card (replaces existing fields)"
                      >⎗</button>`:_}
                  <button
                    class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeCard(a)}}
                    title="Remove card"
                  >✕</button>
                `}))}
      `;const s=this._selCard,i=e[s];if(!i)return r``;if(t.length===1)return r`
        ${this._cardSectionMenu()}
        ${this._renderFieldList(s,i)}
      `;const n=t[1].key;if(n.startsWith("field:")){const o=this._selField,a=i.fields[o];return a?t.length===4&&t[2].key==="fsec:series"&&t[3].key.startsWith("gs:")?this._fieldSecGraphSeriesItem(s,o,a,this._selSeries):t.length===4&&t[2].key==="fsec:controlstyle"&&t[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(s,o,a,t[3].key):t.length===3?this._fieldSection(s,o,a,t[2].key):this._renderFieldPanel(s,o,a):r``}return this._cardSection(s,i,n)}_cardSectionMenu(){return r`
      ${this._navBtn("sec:defaults","Card Defaults","Name, anchor, align, columns, gaps","mdi:tune")}
      ${this._navBtn("sec:style","Card Style","Transparent, background, border, glow","mdi:palette")}
      ${this._navBtn("sec:text","Text Styles","Value & label style","mdi:format-title")}
      ${this._navBtn("sec:visibility","Card Visibility","Show / hide by condition","mdi:eye-outline")}
      ${this._navBtn("sec:actions","Actions","Tap · hold · double tap","mdi:gesture-tap")}
      ${this._navBtn("sec:bg","Background Image","Image behind the card fields","mdi:image-outline")}
    `}_cardSection(e,t,s){switch(s){case"sec:defaults":return this._cardSecDefaults(e,t);case"sec:style":return this._cardSecStyle(e,t);case"sec:text":return this._cardSecText(e,t);case"sec:visibility":return this._cardSecVisibility(e,t);case"sec:actions":return this._cardSecActions(e,t);case"sec:bg":return this._cardSecBg(e,t);default:return r``}}_cardSecDefaults(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${s=>this._updateCard(e,{name:s.target.value})}
          />`)}

        ${this._row("Anchor",r`<select class="ec-select"
            .value=${t.anchor??m("anchor")??"top-left"}
            @change=${s=>this._updateCard(e,{anchor:s.target.value})}
          >
            ${qe.map(s=>r`<option value=${s} .selected=${(t.anchor??m("anchor")??"top-left")===s}>${Ye[s]}</option>`)}
          </select>`)}
        ${this._gridGeom()?r`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._row("Align",r`<select class="ec-select"
            .value=${t.align??m("align")??"left"}
            @change=${s=>this._updateCard(e,{align:s.target.value})}
          >
            ${ne.map(s=>r`<option value=${s} .selected=${(t.align??m("align")??"left")===s}>${s}</option>`)}
          </select>`)}

        ${this._optRow("Columns","1–8 content columns",t.columns===void 0,r`<select class="ec-select"
            .value=${String(t.columns??m("card_columns")??1)}
            @change=${s=>{const i=Number(s.target.value);this._updateCard(e,{columns:i})}}
          >
            <option value="1" .selected=${(t.columns??m("card_columns")??1)===1}>1</option>
            <option value="2" .selected=${(t.columns??m("card_columns")??1)===2}>2</option>
            <option value="3" .selected=${(t.columns??m("card_columns")??1)===3}>3</option>
            <option value="4" .selected=${(t.columns??m("card_columns")??1)===4}>4</option>
            <option value="5" .selected=${(t.columns??m("card_columns")??1)===5}>5</option>
            <option value="6" .selected=${(t.columns??m("card_columns")??1)===6}>6</option>
            <option value="7" .selected=${(t.columns??m("card_columns")??1)===7}>7</option>
            <option value="8" .selected=${(t.columns??m("card_columns")??1)===8}>8</option>
          </select>`,s=>this._updateCard(e,{columns:s?void 0:t.columns??m("card_columns")??1}))}

        ${this._gridGeom()?this._row("Columns (span)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(t.grid_span??1)}
            @change=${s=>{const i=this._gridGeom();if(!i)return;const n=Math.max(1,Math.min(i.cols,Number(s.target.value)||1)),o=Math.max(8,n*i.cellW-i.padding);this._updateCard(e,{grid_span:n,width:o})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`):_}

        ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
            .value=${t.width!=null?String(t.width):""}
            placeholder="auto"
            @change=${s=>{const i=s.target.value;this._updateCard(e,{width:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

        ${this._optRow("Field gap (px)","Vertical space between fields",t.field_gap===void 0,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${String(t.field_gap??m("field_gap")??4)}
            @change=${s=>{const i=s.target.value;this._updateCard(e,{field_gap:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`,s=>this._updateCard(e,{field_gap:s?void 0:t.field_gap??m("field_gap")??4}))}

        ${this._optRow("Column gap (px)","Space between field columns",t.column_gap===void 0,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${String(t.column_gap??m("column_gap")??3)}
            @change=${s=>{const i=s.target.value;this._updateCard(e,{column_gap:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`,s=>this._updateCard(e,{column_gap:s?void 0:t.column_gap??m("column_gap")??3}))}

        ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent??!1}
            @change=${s=>this._updateCard(e,{transparent:s.target.checked||void 0})}
          />`)}
      </div>
    `}_cardSecVisibility(e,t){return r`
      <div class="ec-section">
        ${this._row("Entity",r`<ha-entity-picker
            .hass=${this.hass}
            .value=${t.visible_when?.entity??""}
            allow-custom-entity
            @value-changed=${s=>{const i=s.detail.value;i?this._updateCard(e,{visible_when:{entity:i,operator:t.visible_when?.operator??"==",value:t.visible_when?.value??"on"}}):this._updateCard(e,{visible_when:void 0})}}
          ></ha-entity-picker>`)}
        ${t.visible_when?r`
          ${this._row("Operator",r`<select class="ec-select"
              .value=${t.visible_when.operator}
              @change=${s=>this._updateCard(e,{visible_when:{...t.visible_when,operator:s.target.value}})}
            >
              ${[["==","Equals"],["!=","Not Equal"],[">","Greater Than"],["<","Less Than"],[">=","Greater Than - Equal To"],["<=","Less Than - Equal To"]].map(([s,i])=>r`<option value=${s} .selected=${t.visible_when.operator===s}>${i}</option>`)}
            </select>`)}
          ${this._row("Value",r`<input class="ec-input" type="text" .value=${t.visible_when.value}
              placeholder="on / off / 100 / home …"
              @change=${s=>this._updateCard(e,{visible_when:{...t.visible_when,value:s.target.value}})}
            />`)}
        `:_}
      </div>
    `}_cardSecStyle(e,t){return r`
      <div class="ec-section">
        ${t.transparent?r`<p class="ec-hint">This card is Transparent (set in Card Defaults) — box style is hidden while transparent.</p>`:r`
        ${this._row("Use global card style",r`<input type="checkbox" .checked=${t.box===void 0}
            @change=${s=>{s.target.checked?this._updateCard(e,{box:void 0}):this._updateCard(e,{box:{}})}}
          />`)}
        ${t.box!==void 0?r`
          <div class="ec-subsection-title">Box style</div>
          ${this._boxRows(`c${e}`,t.box,s=>this._updateCardBox(e,s))}
        `:_}
        `}
      </div>
    `}_cardSecText(e,t){return r`
      <div class="ec-section">
        ${this._row("Use global value style",r`<input type="checkbox" .checked=${t.value_style===void 0}
            @change=${s=>{s.target.checked?this._updateCard(e,{value_style:void 0}):this._updateCard(e,{value_style:{}})}}
          />`)}
        ${t.value_style!==void 0?r`
          <div class="ec-subsection-title">Value text style</div>
          ${this._textRows(`c${e}-vs`,t.value_style,s=>this._updateCard(e,{value_style:{...t.value_style,...s}}))}
        `:_}

        ${this._row("Use global label style",r`<input type="checkbox" .checked=${t.label_style===void 0}
            @change=${s=>{s.target.checked?this._updateCard(e,{label_style:void 0}):this._updateCard(e,{label_style:{}})}}
          />`)}
        ${t.label_style!==void 0?r`
          <div class="ec-subsection-title">Label text style</div>
          ${this._textRows(`c${e}-ls`,t.label_style,s=>this._updateCard(e,{label_style:{...t.label_style,...s}}))}
        `:_}
      </div>
    `}_cardSecActions(e,t){return r`
      <div class="ec-section">
        ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},s=>this._updateCard(e,s))}
      </div>
    `}_cardSecBg(e,t){return r`
      <div class="ec-section">
            ${this._row("URL",r`<input class="ec-input" type="text"
                .value=${t.bg?.url??""}
                placeholder="/local/image.png or https://…"
                @change=${s=>{const i=s.target.value.trim();this._updateCard(e,{bg:i?{...t.bg,url:i}:void 0})}}
              />`)}
            ${t.bg?.url?r`
              ${this._row("Fit",r`<select class="ec-select"
                  .value=${t.bg.fit??"cover"}
                  @change=${s=>this._updateCard(e,{bg:{...t.bg,fit:s.target.value}})}
                >
                  <option value="cover"   .selected=${(t.bg.fit??"cover")==="cover"}>cover (fill &amp; crop)</option>
                  <option value="contain" .selected=${t.bg.fit==="contain"}>contain (letterbox)</option>
                  <option value="fill"    .selected=${t.bg.fit==="fill"}>fill (stretch)</option>
                  <option value="none"    .selected=${t.bg.fit==="none"}>none (natural size)</option>
                </select>`)}
              ${this._row("Opacity",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${String(t.bg.opacity??1)}
                  @change=${s=>{const i=parseFloat(s.target.value);this._updateCard(e,{bg:{...t.bg,opacity:isNaN(i)?void 0:Math.min(1,Math.max(0,i))}})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
              ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.bg.width!=null?String(t.bg.width):""}
                  placeholder="fill card"
                  @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,width:i===""?void 0:Number(i)}})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
              ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.bg.height!=null?String(t.bg.height):""}
                  placeholder="fill card"
                  @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,height:i===""?void 0:Number(i)}})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
              <div class="ec-subsection-title">Padding (px)</div>
              ${this._row("Top / Bottom",r`<div style="display:flex;gap:4px;">
                  <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" placeholder="Top"
                    .value=${t.bg.padding_top!=null?String(t.bg.padding_top):""}
                    @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,padding_top:i===""?void 0:Number(i)}})}}
                  /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>
                  <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" placeholder="Bottom"
                    .value=${t.bg.padding_bottom!=null?String(t.bg.padding_bottom):""}
                    @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,padding_bottom:i===""?void 0:Number(i)}})}}
                  /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>
                </div>`)}
              ${this._row("Left / Right",r`<div style="display:flex;gap:4px;">
                  <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" placeholder="Left"
                    .value=${t.bg.padding_left!=null?String(t.bg.padding_left):""}
                    @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,padding_left:i===""?void 0:Number(i)}})}}
                  /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>
                  <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" placeholder="Right"
                    .value=${t.bg.padding_right!=null?String(t.bg.padding_right):""}
                    @change=${s=>{const i=s.target.value;this._updateCard(e,{bg:{...t.bg,padding_right:i===""?void 0:Number(i)}})}}
                  /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>
                </div>`)}
            `:_}
      </div>
    `}_fieldName(e){return e.display_name??e.text??(e.entity?.startsWith("virtual:")?this._virtuals().find(t=>`virtual:${t.id}`===e.entity)?.name??e.entity:this.hass?.states[e.entity??""]?.attributes?.friendly_name??e.entity)??e.icon??"(untitled field)"}_fieldSub(e){const t=e.type==="graph"&&e.graph_type?e.graph_type:e.type==="svg"&&(e.shape||e.svg)?e.shape??e.svg.split("/").pop()?.replace(/\.svg$/i,"")??"":e.type==="embedded_card"&&e.embed_card_config?.type?String(e.embed_card_config.type):"";return`${e.column!=null?`C${e.column} · `:""}${we[e.type]}${t?" · "+t:""}`}_renderFieldList(e,t){const s=t.fields;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(e)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addField(e)}>+ Field</button>
        </div>
        ${s.length===0?r`<p class="ec-empty">No fields — click "+ Field".</p>`:s.map((i,n)=>this._itemCard({dragKey:`field:${e}:${n}`,icon:ke[i.type],label:this._fieldName(i),sub:this._fieldSub(i),selected:n===this._selField,onClick:()=>{this._selField=n,this._navPush(`field:${n}`,`Field ${n+1}`)},actions:r`
                  ${this._copiedFieldSrc?.isExt===!1&&this._copiedFieldSrc.ci===e&&this._copiedFieldSrc.fi===n?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                        @click=${o=>{o.stopPropagation(),this._copyField(e,n,!1)}}
                        title="Copy this field">⎘</button>`}
                  <button class="ec-btn-remove"
                    @click=${o=>{o.stopPropagation(),this._removeField(e,n)}}
                    title="Remove">✕</button>
                `}))}
      </div>
    `}_isTimeUntilVirtual(e){if(!e.entity?.startsWith("virtual:"))return!1;const t=e.entity.slice(8);return this._config?.virtuals?.find(s=>s.id===t)?.op==="time_until"}_displayUnit(e,t){if(t!==void 0)return t;if(!e||e.startsWith("virtual:")||!this.hass)return"";const s=this.hass.states[e];if(!s)return"";const i=s.attributes?.unit_of_measurement??"";if((s.attributes?.device_class??"")==="power"){const o=this._config?.defaults?.power_unit;return o==="W"||o==="kW"?o:"W or kW"}return i==="kWh"||i==="MWh"?"kWh or MWh":i}_isThermometerSvg(e){return!!e.svg?.toLowerCase().includes("thermometer")}_isHorizontalThermometerSvg(e){return!!e.svg?.toLowerCase().includes("thermometer-horizontal")}_isBatterySvg(e){return!!e.svg?.toLowerCase().includes("battery")}_isInverterSvg(e){return!!e.svg?.toLowerCase().includes("inverter")}_isGaugeSvg(e){return!!e.svg?.toLowerCase().includes("gauge")}_elementLabel(e){return e.type==="graph"?Ke.find(t=>t.value===e.graph_type)?.label??e.graph_type??"Graph":e.svg?(e.svg.split("/").pop()?.replace(/\.svg$/i,"")??"").replace(/[-_]/g," ").replace(/\b\w/g,s=>s.toUpperCase())||"SVG element":"None selected"}_renderTuLayoutBuilder(e,t){const s=e.time_until_layout??[],i=c=>t({time_until_layout:[...s,c]}),n=c=>{const p=s.filter((u,d)=>d!==c);t({time_until_layout:p.length?p:void 0})},o=(c,p)=>{const u=[...s],d=c+p;d<0||d>=u.length||([u[c],u[d]]=[u[d],u[c]],t({time_until_layout:u}))},a=(c,p)=>{const u=[...s];u[c]={...u[c],...p},t({time_until_layout:u})},l=c=>c.type==="label"?r`<span class="ec-tu-chip ec-tu-chip--label">⏱ Time Until Label</span>`:c.type==="value"?r`<span class="ec-tu-chip ec-tu-chip--value">⟨value⟩</span>`:c.type==="newline"?r`<span class="ec-tu-chip ec-tu-chip--newline">↵ New Line</span>`:_;return r`
      <div class="ec-subsection-title">Time Until Layout</div>
      ${s.length===0?r`<p class="ec-empty">No items — use the buttons below to build the layout.</p>`:s.map((c,p)=>r`
            <div class="ec-list-row">
              <button class="ec-btn-reorder" ?disabled=${p===0}
                @click=${()=>o(p,-1)} title="Move up">▲</button>
              <button class="ec-btn-reorder" ?disabled=${p===s.length-1}
                @click=${()=>o(p,1)} title="Move down">▼</button>
              <span class="ec-list-label" style="flex:1;min-width:0;">
                ${c.type==="text"?r`<input class="ec-input" type="text" .value=${c.text??""}
                      placeholder="enter text"
                      @input=${u=>a(p,{text:u.target.value})}
                      style="width:100%;box-sizing:border-box;" />`:l(c)}
              </span>
              <button class="ec-btn-remove" @click=${()=>n(p)} title="Remove">✕</button>
            </div>
          `)}
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
        <button class="ec-btn-add" @click=${()=>i({type:"text",text:""})}>+ Text</button>
        <button class="ec-btn-add" @click=${()=>i({type:"label"})}>+ Label</button>
        <button class="ec-btn-add" @click=${()=>i({type:"newline"})}>↵ New Line</button>
        <button class="ec-btn-add" @click=${()=>i({type:"value"})}>+ Value</button>
      </div>
    `}_fieldHeader(e,t,s){return r`
        ${this._row("Type",r`<select class="ec-select"
            .value=${s.type==="graph"?"svg":s.type}
            @change=${i=>{const n=i.target.value;if(ht(n)){const o=Hs(n);this._updateField(e,t,{type:n,...o?$e(n,o):{}})}else this._updateField(e,t,{type:n}),n==="svg"&&this._openGGPicker(e,t)}}
          >
            ${ti.map(i=>r`<option value=${i} .selected=${(s.type==="graph"?"svg":s.type)===i}>${we[i]}</option>`)}
          </select>`)}

        ${ht(s.type)&&Yt(s.type).length>1?this._row("Variant",r`<select class="ec-select"
            .value=${s.variant??""}
            @change=${i=>{const n=i.target.value;this._updateField(e,t,$e(s.type,n))}}
          >
            ${this._variantOptions(s.type,s.variant)}
          </select>`):_}

        ${s.type==="svg"||s.type==="graph"?this._row("Element",r`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(s)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(e,t)}>Select SVG Element</button>
          </div>`):_}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${s.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${i=>{const n=i.target.value.trim();this._updateField(e,t,{display_name:n===""?void 0:n})}}
          />`)}

        ${this._row("Column",r`<div style="display:flex;gap:4px;align-items:center">
            <span class="ec-num-wrap"><input class="ec-input ec-input-num-small" type="number" min="1" max="8"
              .value=${s.column!=null?String(s.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{column:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            <span class="ec-num-wrap"><input class="ec-input ec-input-num-small" type="number" min="2" max="8"
              .value=${s.column_end!=null?String(s.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{column_end:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>
          </div>`)}
    `}_renderFieldPanel(e,t,s){return s.type==="blank"||s.type==="rule"?r`
        <div class="ec-section ec-section--fields">
          ${this._fieldHeader(e,t,s)}
          ${this._fieldSecBlankOrRule(e,t,s)}
        </div>
      `:r`
      <div class="ec-section ec-section--fields">
        ${this._fieldHeader(e,t,s)}
        ${this._fieldSectionMenu(s)}
      </div>
    `}_fieldSectionMenu(e){const t=[];return e.type==="value"?(t.push(this._navBtn("fsec:source","Value Source","Entity, virtual entity, time-until layout","mdi:database")),t.push(this._navBtn("fsec:label","Value Label","Optional label text & position","mdi:tag-text-outline"))):e.type==="icon"?t.push(this._navBtn("fsec:icon","Icon","mdi icon name","mdi:emoticon-outline")):e.type==="label"?t.push(this._navBtn("fsec:content","Content","Label text","mdi:format-text")):e.type==="svg"?(t.push(this._navBtn("fsec:source","Value Source","Entity, fill source","mdi:database")),this._isInverterSvg(e)||t.push(this._navBtn("fsec:range","Range","Min / max value","mdi:arrow-expand-vertical")),t.push(this._navBtn("fsec:colors","Colors","Fill direction, fill, gradient, svg color","mdi:palette")),t.push(this._navBtn("fsec:size","Size","Height, width","mdi:resize")),this._isInverterSvg(e)||t.push(this._navBtn("fsec:thresholds","Color Thresholds","Value-driven fill color overrides","mdi:format-color-fill")),this._isGaugeSvg(e)&&t.push(this._navBtn("fsec:gauge","Gauge Labels","Min/max labels, value display","mdi:speedometer")),this._isThermometerSvg(e)&&t.push(this._navBtn("fsec:thermo","Thermometer","Ticks, grid, temperature text","mdi:thermometer"))):e.type==="graph"?(t.push(this._navBtn("fsec:graph","Graph Settings","Type, axes, legend, range, size","mdi:chart-bar")),t.push(this._navBtn("fsec:series","Series","Entities plotted on the graph","mdi:chart-line"))):e.type==="embedded_card"?t.push(this._navBtn("fsec:embed","Embedded Card","Card type, width, transparency","mdi:widgets")):e.type==="toggle"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="slider"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:sliderrange","Range","Min / max / step, show value, unit","mdi:arrow-expand-horizontal")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="dropdown"||e.type==="selector"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:options","Options","Option source & manual list","mdi:format-list-bulleted")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="input"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:input","Input","Mode, submit timing, placeholder","mdi:form-textbox")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="spinbox"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:sliderrange","Range","Min / max / step, unit","mdi:arrow-expand-horizontal")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="button"&&(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:options","Button Layout","Icon & state position, text styles","mdi:gesture-tap-button")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors, border, padding (override global)","mdi:palette"))),ht(e.type)&&t.push(this._navBtn("fsec:labels","Labels","Icon + text rows around the control","mdi:label-outline")),e.type==="slider"&&t.push(this._navBtn("fsec:sliderpoints","Track Labels","Left / center / right labels","mdi:format-horizontal-align-center")),(e.type==="value"||e.type==="icon")&&(t.push(this._navBtn("fsec:stats","HA Statistics","Advanced statistics integration","mdi:chart-box-outline")),t.push(this._navBtn("fsec:display","Display","Unit, decimals, hide below","mdi:eye-outline"))),e.type!=="embedded_card"&&(t.push(this._navBtn("fsec:style","Text Style","Align & value/label text style","mdi:format-title")),t.push(this._navBtn("fsec:actions","Actions","Tap · hold · double tap","mdi:gesture-tap"))),r`${t}`}_fieldSection(e,t,s,i){switch(i){case"fsec:source":return s.type==="svg"?this._fieldSecSvgSource(e,t,s):this._fieldSecValueSource(e,t,s);case"fsec:control":return this._fieldSecControlSource(e,t,s);case"fsec:embed":return this._fieldSecEmbed(e,t,s);case"fsec:sliderrange":return this._fieldSecSliderRange(e,t,s);case"fsec:options":return this._fieldSecOptions(e,t,s);case"fsec:input":return this._fieldSecInput(e,t,s);case"fsec:controlstyle":return this._fieldSecControlStyle(e,t,s);case"fsec:labels":return this._fieldSecControlLabels(e,t,s);case"fsec:sliderpoints":return this._fieldSecSliderPoints(e,t,s);case"fsec:label":return this._fieldSecValueLabel(e,t,s);case"fsec:icon":return this._fieldSecIcon(e,t,s);case"fsec:content":return this._fieldSecLabelContent(e,t,s);case"fsec:range":return this._fieldSecSvgRange(e,t,s);case"fsec:colors":return this._fieldSecSvgColors(e,t,s);case"fsec:size":return this._fieldSecSvgSize(e,t,s);case"fsec:thresholds":return this._fieldSecSvgThresholds(e,t,s);case"fsec:gauge":return this._fieldSecSvgGauge(e,t,s);case"fsec:thermo":return this._fieldSecSvgThermo(e,t,s);case"fsec:graph":return this._fieldSecGraphSettings(e,t,s);case"fsec:series":return this._fieldSecGraphSeries(e,t,s);case"fsec:stats":return this._fieldSecStats(e,t,s);case"fsec:display":return this._fieldSecDisplay(e,t,s);case"fsec:style":return this._fieldSecStyle(e,t,s);case"fsec:actions":return this._fieldSecActions(e,t,s);default:return r``}}_fieldSecBlankOrRule(e,t,s){return s.type!=="blank"?r`<p class="ec-hint">Horizontal rule — no options.</p>`:r`
        ${this._row("Gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${s.blank_gap!=null?String(s.blank_gap):""}
            placeholder="10"
            @change=${i=>{const n=i.target.value;this._updateField(e,t,{blank_gap:n===""?void 0:Number(n)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
    `}_updFor(e,t,s){return i=>s?this._updateExtField(e,t,i):this._updateField(e,t,i)}_fieldSecEmbed(e,t,s,i=!1){const n=this._updFor(e,t,i),o=i?{kind:"extfield",ci:e,fi:t}:{kind:"field",ci:e,fi:t},a=s.embed_card_config?.type?String(s.embed_card_config.type):"";return r`
      <div class="ec-section">
        ${this._row("Card Type",r`<span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${a||r`<span style="color:#555;font-style:italic;">not set</span>`}
          </span>`)}
        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker(o)}>
            ${a?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor(o)}>
            Edit Config…
          </button>
        </div>
        ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(s.width??300)}
            @change=${l=>n({width:Number(l.target.value)})}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${l=>this._stepNumInput(l,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${l=>this._stepNumInput(l,1)}>+</button></span></span>`)}
        <p class="ec-hint">Height is automatic — the embedded card sizes itself.</p>
        ${this._row("Transparent",r`<input type="checkbox" .checked=${s.embed_transparent??!1}
            @change=${l=>n({embed_transparent:l.target.checked})}
          />`)}
        ${this._cssRow(s.extra_css,l=>n({extra_css:l}))}
      </div>
    `}_idFor(e,t,s){return`${s?"e":"c"}${e}f${t}`}_fieldSecControlSource(e,t,s,i=!1){const n=this._updFor(e,t,i);return r`
      <div class="ec-section">
        ${this._entitySelector({entity:s.entity,onEntity:o=>n({entity:o}),attribute:s.read_attribute,onAttribute:o=>n({read_attribute:o}),attributePlaceholder:bs(s.options_attribute)})}
        <p class="ec-hint">The entity this control reads its value from and writes back to.</p>
        <div class="ec-subsection-title">Action override (optional)</div>
        <p class="ec-hint">Leave blank to control the entity automatically from its domain — a light toggles, an <code>input_number</code> takes a value, an <code>input_select</code> picks an option. Set <code>domain.action</code> only when you need something else, e.g. <code>light.turn_on</code> to drive brightness rather than on/off. Variants like Brightness and Volume fill this in for you.</p>
        <p class="ec-hint">Note: an option with its own entity ignores this and always uses that entity's domain default action.</p>
        ${this._row("Action",r`<ha-service-picker
            .hass=${this.hass}
            .value=${s.control_service??""}
            placeholder="e.g. light.turn_on"
            @value-changed=${o=>{const a=o.detail.value;n({control_service:a||void 0})}}
          ></ha-service-picker>`)}
        ${this._saveAsVariantRows(s,this._idFor(e,t,i))}
      </div>
    `}_saveAsVariantRows(e,t){if(!ht(e.type))return r``;if(!(this._saveVariantFor===t))return r`
        <div class="ec-subsection-title">Save as Variant</div>
        <p class="ec-hint">Store this field's settings as a reusable variant on this card. It then appears under <b>Custom</b> in every control field's Variant dropdown.</p>
        <button class="ec-btn-add" style="width:100%;"
          @click=${()=>{this._saveVariantFor=t,this._saveVariantLabel="",this._variantError=""}}
        >＋ Save as Variant…</button>
      `;const i=()=>{const n=this._saveVariantLabel.trim();if(!n){this._variantError="Label is required.";return}const o=e.type,a=We(o,n),l=Ws(e);this._updateVariants(o,c=>[...c,{id:a,label:n,...e.icon?{icon:e.icon}:{},...Object.keys(l).length?{preset:l}:{}}]),this._saveVariantFor="",this._saveVariantLabel="",this._variantError=""};return r`
      <div class="ec-subsection-title">Save as Variant</div>
      ${this._row("Label",r`<input class="ec-input" type="text" autofocus
          placeholder="e.g. Bedroom Dimmer"
          .value=${this._saveVariantLabel}
          @input=${n=>{this._saveVariantLabel=n.target.value}}
          @keydown=${n=>{n.key==="Enter"&&i()}}
        />`)}
      <p class="ec-hint">
        Saves ${Object.keys(Ws(e)).length} setting(s) from this field.
        Id will be <code>${this._saveVariantLabel.trim()?We(e.type,this._saveVariantLabel):"…"}</code>.
        The entity itself is not saved — a variant is a behaviour preset, not a binding.
      </p>
      ${this._variantError?r`<p style="color:#f44;font-size:12px;margin:0 0 6px;">${this._variantError}</p>`:_}
      <div style="display:flex;gap:6px;">
        <button class="ec-btn-add" style="flex:1;" @click=${i}>Save</button>
        <button class="ec-btn-add" style="flex:0 0 auto;"
          @click=${()=>{this._saveVariantFor="",this._variantError=""}}
        >Cancel</button>
      </div>
    `}_fieldSecSliderRange(e,t,s,i=!1){const n=this._updFor(e,t,i),o=(a,l,c)=>this._row(a,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
          .value=${s[l]!=null?String(s[l]):""}
          placeholder=${c}
          @change=${p=>{const u=p.target.value;n({[l]:u===""?void 0:Number(u)})}}
        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${p=>this._stepNumInput(p,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${p=>this._stepNumInput(p,1)}>+</button></span></span>`);return r`
      <div class="ec-section">
        ${o("Min","min","0")}
        ${o("Max","max","100")}
        ${o("Step","step","1")}
        ${s.type==="spinbox"?this._controlNumRow("Decimals",s.spinbox_decimals,"auto",a=>n({spinbox_decimals:a}),0):_}
        ${this._row("Unit",r`<input class="ec-input" type="text" .value=${s.unit??""} placeholder="e.g. %"
            @change=${a=>{const l=a.target.value;n({unit:l===""?void 0:l})}} />`)}
        ${s.type==="slider"?this._row("Show value",r`<input type="checkbox" class="ec-checkbox"
            .checked=${s.show_value??!0}
            @change=${a=>n({show_value:a.target.checked})} />`):_}
      </div>
    `}_controlLabelEditor(e,t,s){return r`
      ${this._row("Icon",this._iconPicker(t.icon,i=>s({icon:i})))}
      ${this._row("Text",r`<input class="ec-input" type="text" .value=${t.text??""}
          @change=${i=>{const n=i.target.value;s({text:n||void 0})}} />`)}
      <div class="ec-subsection-title">Text style</div>
      ${this._textRows(`${e}-st`,t.style??{},i=>s({style:{...t.style,...i}}),!1)}
    `}_fieldSecControlLabels(e,t,s,i=!1){const n=this._updFor(e,t,i),o=s.control_labels??[],a=c=>n({control_labels:c.length?c:void 0}),l=s.control_labels_position??"above";return r`
      <div class="ec-section">
        <p class="ec-hint">Stacked icon + text rows placed around the control. Each row has its own text style.</p>
        ${this._row("Position",r`<select class="ec-select" .value=${l}
            @change=${c=>n({control_labels_position:c.target.value})}
          >
            ${["above","below","left","right"].map(c=>r`<option value=${c} .selected=${l===c}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`)}
          </select>`)}
        ${this._row("Alignment",r`<select class="ec-select" .value=${s.align??"left"}
            @change=${c=>n({align:c.target.value})}
          >
            ${ne.map(c=>r`<option value=${c} .selected=${(s.align??"left")===c}>${c}</option>`)}
          </select>`)}
        <p class="ec-hint">Horizontal placement of the label rows against the control — <b>Position</b> covers where they sit. Above or below, the rows align to the control's width; beside it, they align to each other.</p>
        ${this._controlNumRow("Gap to control (px)",s.control_labels_gap,"4",c=>n({control_labels_gap:c}),0)}
        ${o.length===0?r`<p class="ec-empty">No label rows — click "+ Label row".</p>`:_}
        ${o.map((c,p)=>r`
          <div class="ec-section-header">
            <span class="ec-section-title">Row ${p+1}</span>
            <button class="ec-btn-remove" title="Remove row" @click=${()=>a(o.filter((u,d)=>d!==p))}>✕</button>
          </div>
          ${this._controlLabelEditor(`${this._idFor(e,t,i)}-lbl${p}`,c,u=>{const d=[...o];d[p]={...c,...u},a(d)})}
        `)}
        <button class="ec-btn-add" @click=${()=>a([...o,{}])}>+ Label row</button>
      </div>
    `}_fieldSecSliderPoints(e,t,s,i=!1){const n=this._updFor(e,t,i),o=s.slider_labels??{},a=(l,c)=>n({slider_labels:{...o,[l]:{...o[l],...c}}});return r`
      <div class="ec-section">
        <p class="ec-hint">Labels anchored to the track — left (min), center, right (max). Each has its own text style and optional live value.</p>
        ${["left","center","right"].map(l=>{const c=o[l]??{},p=`${this._idFor(e,t,i)}-pt-${l}`;return r`
            <div class="ec-slider-pt">
              <div class="ec-section-header"><span class="ec-section-title">${l.charAt(0).toUpperCase()+l.slice(1)}</span></div>
              ${this._entitySelector({label:"Value entity",entity:c.entity,onEntity:u=>a(l,{entity:u}),attribute:c.attribute,onAttribute:u=>a(l,{attribute:u})})}
              ${c.entity?r`<p class="ec-hint">Showing this entity's live value instead of Text below.</p>`:_}
              ${l!=="center"?this._controlNumRow("Gap from edge (px)",c.gap,"0",u=>a(l,{gap:u}),0):_}
              ${this._controlLabelEditor(p,c,u=>a(l,u))}
            </div>
          `})}
      </div>
    `}_fieldSecOptions(e,t,s,i=!1){const n=this._updFor(e,t,i),o=s.options_source??"entity",a=s.options??[],l=c=>n({options:c.length?c:void 0});return s.type==="button"?r`<div class="ec-section">
        <p class="ec-hint">A button is a single cell. Its icon, label and state come from the field's own <b>Entity &amp; Action</b> settings; the layout below places them.</p>
        ${this._row("Label",r`<input class="ec-input" type="text" .value=${s.label??""}
            @change=${c=>{const p=c.target.value;n({label:p||void 0})}} />`)}
        ${this._row("Icon",this._iconPicker(s.icon,c=>n({icon:c}),"from entity state"))}
        ${this._row("Press writes",r`<input class="ec-input" type="text" placeholder="toggle the entity" .value=${s.button_value??""}
            @change=${c=>{const p=c.target.value.trim();n({button_value:p||void 0})}} />`)}
        <p class="ec-hint">Leave <b>Press writes</b> blank to toggle the entity with its domain default action. Set a value and the button writes that instead, showing as active while the entity's state matches it.</p>
        ${this._optionLayoutEditor(s,n,this._idFor(e,t,i))}
      </div>`:r`
      <div class="ec-section">
        ${this._row("Options source",r`<select class="ec-select" .value=${o}
            @change=${c=>n({options_source:c.target.value})}
          >
            <option value="entity" .selected=${o==="entity"}>From entity</option>
            <option value="manual" .selected=${o==="manual"}>Manual list</option>
          </select>`)}
        <p class="ec-hint"><b>From entity</b> reads the choices the entity itself offers (an <code>input_select</code>'s options, a light's effects, a climate's modes). <b>Manual list</b> lets you write your own options — the only source that can give an option its own entity, icon or line.</p>
        ${_}
        ${s.type==="selector"?r`<p class="ec-hint">Give each option a <b>Line</b> number to place it. Options sharing a line render together, in order.</p>`:_}
        ${s.type==="dropdown"?this._row("Placeholder",r`<input class="ec-input" type="text" .value=${s.placeholder??""} placeholder="—"
            @change=${c=>{const p=c.target.value;n({placeholder:p===""?void 0:p})}}
          />`):_}
        ${s.type==="dropdown"?r`<p class="ec-hint">Shown on the closed dropdown when the entity's state doesn't match any option — usually because it is unavailable or mid-change.</p>`:_}
        ${o==="entity"?r`
            ${this._row("Options attribute",r`<input class="ec-input" type="text" placeholder="options" .value=${s.options_attribute??""}
                @change=${c=>{const p=c.target.value.trim();n({options_attribute:p||void 0})}} />`)}
            <p class="ec-hint">Entity attribute holding the option list — e.g. <code>options</code>, <code>effect_list</code>, <code>source_list</code>, <code>hvac_modes</code>.</p>`:r`
            <div class="ec-subsection-title">Options</div>
            <p class="ec-hint">Leave <b>Entity</b> blank for a normal option that writes its value to the field's entity. Set one and the option acts on <i>that</i> entity instead, with its domain default action, showing its state and state icon — so one selector can drive several lights.</p>
            ${a.length===0?r`<p class="ec-empty">No options — click "+ Option".</p>`:_}
            ${a.map((c,p)=>{const u=d=>{const h=[...a];h[p]={...c,...d},l(h)};return r`
              <div class="ec-list-row" style="flex-direction:column;align-items:stretch;gap:4px;">
                <div style="display:flex;gap:4px;align-items:center;">
                  <input class="ec-input" type="text" placeholder="value" .value=${c.value??""}
                    @change=${d=>{const h=d.target.value;u({value:h||void 0})}} />
                  <input class="ec-input" type="text" placeholder="label (optional)" .value=${c.label??""}
                    @change=${d=>{const h=d.target.value;u({label:h||void 0})}} />
                  <button class="ec-btn-copy" title="Copy this option" @click=${()=>{this._copiedOption={...c}}}>⎘</button>
                  <button class="ec-btn-remove" title="Remove" @click=${()=>l(a.filter((d,h)=>h!==p))}>✕</button>
                </div>
                ${this._entitySelector({entity:c.entity,onEntity:d=>u({entity:d}),attribute:c.attribute,onAttribute:d=>u({attribute:d})})}
                ${this._row("Icon",this._iconPicker(c.icon,d=>u({icon:d}),"from entity state"))}
                ${this._controlNumRow("Line",c.line,"1",d=>u({line:d}),1)}
                ${s.type==="selector"?r`
                  ${this._row("Icon position",this._optionPosSelect(c.icon_position,d=>u({icon_position:d}),"Inherit"))}
                  ${this._row("Show state",r`<select class="ec-select" .value=${c.show_state===void 0?"":c.show_state?"y":"n"}
                      @change=${d=>{const h=d.target.value;u({show_state:h===""?void 0:h==="y"})}}
                    >
                      <option value="" .selected=${c.show_state===void 0}>Inherit</option>
                      <option value="y" .selected=${c.show_state===!0}>Show</option>
                      <option value="n" .selected=${c.show_state===!1}>Hide</option>
                    </select>`)}
                  ${c.show_state??s.option_show_state?this._row("State position",this._optionPosSelect(c.state_position,d=>u({state_position:d}),"Inherit")):_}
                  <div class="ec-subsection-title">Action</div>
                  <p class="ec-hint">Runs instead of the option's normal write when set. In a Perform Action's data, type <code>{{value}}</code> into any field to send this option's own value instead of a fixed one — typing it switches that field to free text, same as a template in the automation editor.</p>
                  ${this._actionRows({tap_action:c.tap_action},d=>u(d),["tap_action"])}
                `:_}
              </div>`})}
            <div style="display:flex;gap:6px;">
              <button class="ec-btn-add" @click=${()=>l([...a,{}])}>+ Option</button>
              ${this._copiedOption?r`<button class="ec-btn-paste"
                @click=${()=>l([...a,{...this._copiedOption}])}
                title="Paste copied option">⎗ Option</button>`:_}
            </div>
            <p class="ec-hint"><b>Line</b> groups options into rows — options sharing a line number render on the same line, in order. Blank = line 1.</p>
          `}
        ${s.type==="selector"?this._optionLayoutEditor(s,n,this._idFor(e,t,i)):_}
      </div>
    `}_optionPosSelect(e,t,s){const i=["above","below","left","right"],n=o=>o[0].toUpperCase()+o.slice(1);return r`<select class="ec-select" .value=${e??""}
      @change=${o=>{const a=o.target.value;t(a===""?void 0:a)}}
    >
      ${s?r`<option value="" .selected=${e===void 0}>${s}</option>`:_}
      ${i.map(o=>r`<option value=${o} .selected=${e===o}>${n(o)}</option>`)}
    </select>`}_optionLayoutEditor(e,t,s="f"){const i=this._config?.defaults?.option_layout??{},n=C._OPTION_LAYOUT_KEYS.some(l=>e[l]!==void 0),o=C.SEPARATION_KEYS.some(l=>e.control_style?.[l]!==void 0),a=!n&&!o&&!this._optionLayoutOn.has(s);return r`
      <div class="ec-subsection-title">Option layout</div>
      ${this._row("Use global option layout",r`<input type="checkbox" .checked=${a}
          @change=${l=>{if(l.target.checked){this._optionLayoutOn.delete(s);const c={...e.control_style};for(const p of C.SEPARATION_KEYS)delete c[p];t({...Object.fromEntries(C._OPTION_LAYOUT_KEYS.map(p=>[p,void 0])),control_style:Object.keys(c).length?c:void 0})}else this._optionLayoutOn.add(s);this.requestUpdate()}}
        />`)}
      <p class="ec-hint">Inherits <b>Settings ▸ Global Defaults ▸ Control Default ▸ Option Layout</b>. Untick to set this field's own layout; each option can still override it individually.</p>
      ${a?_:this._optionLayoutRows({icon_position:e.option_icon_position,show_state:e.option_show_state,state_position:e.option_state_position,icon_style:e.option_icon_style,label_style:e.option_label_style,state_style:e.option_state_style},l=>{const c={};"icon_position"in l&&(c.option_icon_position=l.icon_position),"show_state"in l&&(c.option_show_state=l.show_state),"state_position"in l&&(c.option_state_position=l.state_position),"icon_style"in l&&(c.option_icon_style=l.icon_style),"label_style"in l&&(c.option_label_style=l.label_style),"state_style"in l&&(c.option_state_style=l.state_style),t(c)},`${s}-ol`,i)}
      ${a?_:this._optionSeparationRows(e.control_style??{},l=>t({control_style:{...e.control_style,...l}}),e.type==="button")}
    `}_optionLayoutRows(e,t,s,i={}){const n=e.show_state??i.show_state??!1;return r`
      <p class="ec-hint">The label is the anchor; the icon and state value sit around it. <b>Above</b> / <b>Below</b> take their own line, <b>Left</b> / <b>Right</b> share the label's line.</p>
      ${this._row("Icon position",this._optionPosSelect(e.icon_position??i.icon_position??"left",o=>t({icon_position:o})))}
      ${this._row("Show state value",r`<input type="checkbox" .checked=${n}
          @change=${o=>t({show_state:o.target.checked||void 0})}
        />`)}
      <p class="ec-hint">The state value comes from the option's own entity, so options need an entity for this to show anything.</p>
      ${n?this._row("State position",this._optionPosSelect(e.state_position??i.state_position??"below",o=>t({state_position:o}))):_}

      <p class="ec-hint">Weight and font for the text parts. <b>Colors and sizes</b> are set per state in <b>Active</b> / <b>Inactive State</b>. The icon has no text weight/font — its color and size are set with the other colors and sizes.</p>
      <div class="ec-subsection-title">Label style</div>
      ${this._textRows(`${s}-label`,e.label_style??{},o=>t({label_style:{...e.label_style,...o}}),!1,!1,!1)}
      ${n?r`
        <div class="ec-subsection-title">State style</div>
        ${this._textRows(`${s}-state`,e.state_style??{},o=>t({state_style:{...e.state_style,...o}}),!1,!1,!1)}
      `:_}
    `}_fieldSecInput(e,t,s,i=!1){const n=this._updFor(e,t,i),o=s.submit_on??"change";return r`
      <div class="ec-section">
        ${this._row("Submit on",r`<select class="ec-select" .value=${o}
            @change=${a=>n({submit_on:a.target.value})}
          >
            <option value="change" .selected=${o==="change"}>Change (click away or Enter)</option>
            <option value="blur" .selected=${o==="blur"}>Click away</option>
            <option value="enter" .selected=${o==="enter"}>Enter only</option>
          </select>`)}
        ${this._row("Placeholder",r`<input class="ec-input" type="text" .value=${s.placeholder??""}
            @change=${a=>{const l=a.target.value;n({placeholder:l===""?void 0:l})}}
          />`)}
        ${this._controlNumRow("Max length",s.input_maxlength,"no limit",a=>n({input_maxlength:a}),1)}
        ${this._row("Password field",r`<input type="checkbox" .checked=${s.input_password??!1}
            @change=${a=>n({input_password:a.target.checked||void 0})}
          />`)}
      </div>
    `}_fieldSecValueSource(e,t,s){return r`
      <div class="ec-section">
          ${this._entitySelector({entity:s.entity,onEntity:i=>this._updateField(e,t,{entity:i}),attribute:s.attribute,onAttribute:i=>this._updateField(e,t,{attribute:i})})}
          ${this._isTimeUntilVirtual(s)?this._renderTuLayoutBuilder(s,i=>this._updateField(e,t,i)):_}
      </div>
    `}_fieldSecValueLabel(e,t,s){return r`
      <div class="ec-section">
          ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${s.label??""}
              placeholder="(optional)"
              @input=${i=>{const n=i.target.value;this._updateField(e,t,{label:n||void 0})}}
            />`)}
          ${s.label?this._row("Value Label position",r`<select class="ec-select"
              .value=${s.label_position??m("label_position")??"above"}
              @change=${i=>this._updateField(e,t,{label_position:i.target.value})}
            >
              <option value="above"  .selected=${(s.label_position??m("label_position")??"above")==="above"}>Above value</option>
              <option value="below"  .selected=${s.label_position==="below"}>Below value</option>
              <option value="left"   .selected=${s.label_position==="left"}>Left of value</option>
              <option value="right"  .selected=${s.label_position==="right"}>Right of value</option>
            </select>`):_}
      </div>
    `}_fieldSecLabelContent(e,t,s){return r`
      <div class="ec-section">
          ${this._row("Text",r`<input class="ec-input" type="text" .value=${s.text??""}
                @change=${i=>this._updateField(e,t,{text:i.target.value})}
              />`)}
      </div>
    `}_fieldSecIcon(e,t,s){return r`
      <div class="ec-section">
          ${this._row("Icon",this._iconPicker(s.icon,i=>this._updateField(e,t,{icon:i})))}
      </div>
    `}_fieldSecSvgSource(e,t,s){return r`
      <div class="ec-section">

          ${!s.svg||this._isThermometerSvg(s)||this._isBatterySvg(s)||this._isInverterSvg(s)||this._isGaugeSvg(s)?this._entitySelector({entity:s.entity,onEntity:i=>this._updateField(e,t,{entity:i}),attribute:s.attribute,onAttribute:i=>this._updateField(e,t,{attribute:i})}):_}
          ${this._isBatterySvg(s)?this._entitySelector({label:"Charging entity",entity:s.charging_entity,onEntity:i=>this._updateField(e,t,{charging_entity:i}),attribute:s.charging_attribute,onAttribute:i=>this._updateField(e,t,{charging_attribute:i})}):_}
          ${s.svg&&!this._isThermometerSvg(s)&&!this._isBatterySvg(s)&&!this._isInverterSvg(s)&&!this._isGaugeSvg(s)?r`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._entitySelector({label:"% entity",entity:s.tank_pct_entity,onEntity:i=>this._updateField(e,t,{tank_pct_entity:i}),attribute:s.tank_pct_attribute,onAttribute:i=>this._updateField(e,t,{tank_pct_attribute:i})})}
            ${this._entitySelector({label:"Flow In/Out Entity",entity:s.tank_volume_entity,onEntity:i=>this._updateField(e,t,{tank_volume_entity:i}),attribute:s.tank_volume_attribute,onAttribute:i=>this._updateField(e,t,{tank_volume_attribute:i})})}
            ${this._entitySelector({label:"Capacity entity",entity:s.tank_capacity_entity,onEntity:i=>this._updateField(e,t,{tank_capacity_entity:i}),attribute:s.tank_capacity_attribute,onAttribute:i=>this._updateField(e,t,{tank_capacity_attribute:i})})}
          `:_}
      </div>
    `}_fieldSecSvgRange(e,t,s){return r`
      <div class="ec-section">
            ${this._row("Min value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                .value=${s.min!=null?String(s.min):""} placeholder="0"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{min:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Max value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                .value=${s.max!=null?String(s.max):""} placeholder="100"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{max:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
      </div>
    `}_fieldSecSvgColors(e,t,s){return r`
      <div class="ec-section">
          ${s.svg&&!this._isInverterSvg(s)?this._row("Fill direction",r`<select class="ec-select"
              .value=${s.fill_direction??m("fill_direction")??"up"}
              @change=${i=>this._updateField(e,t,{fill_direction:i.target.value})}
            >
              <option value="up"    .selected=${(s.fill_direction??m("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
              <option value="down"  .selected=${s.fill_direction==="down"}>Down</option>
              <option value="left"  .selected=${s.fill_direction==="left"}>Left</option>
              <option value="right" .selected=${s.fill_direction==="right"}>Right</option>
            </select>`):_}
          ${this._row(this._isInverterSvg(s)?"Line color":"Fill color",this._colorPicker(`c${e}-f${t}-fc`,s.fill_color,i=>this._updateField(e,t,{fill_color:i})))}
          ${this._isInverterSvg(s)?_:this._row("Top Graduated Color (Opt)",s.fill_color2?this._colorPicker(`c${e}-f${t}-fc2`,s.fill_color2,i=>this._updateField(e,t,{fill_color2:i}),{clearTitle:"Remove gradient",onClear:()=>this._updateField(e,t,{fill_color2:void 0})}):r`<button class="ec-lib-browse-btn" style="font-size:12px"
                  @click=${()=>this._updateField(e,t,{fill_color2:s.fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
          ${s.svg&&!this._isThermometerSvg(s)&&!this._isBatterySvg(s)&&!this._isInverterSvg(s)&&!this._isGaugeSvg(s)?this._row("Tank color",this._colorPicker(`c${e}-f${t}-tkc`,s.tank_color,i=>this._updateField(e,t,{tank_color:i}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateField(e,t,{tank_color:void 0})})):_}
      </div>
    `}_fieldSecSvgSize(e,t,s){return r`
      <div class="ec-section">
          ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
              .value=${s.height!=null?String(s.height):""} placeholder="120"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{height:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="10"
              .value=${s.width!=null?String(s.width):""} placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{width:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
      </div>
    `}_fieldSecSvgThresholds(e,t,s){return r`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(s.thresholds??[]).map((i,n)=>r`
              <div class="ec-row">
                <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(i.value)}
                  @change=${o=>{const a=[...s.thresholds??[]];a[n]={...i,value:Number(o.target.value)},this._updateField(e,t,{thresholds:a})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>
                <div style="flex:1">
                  ${this._colorPicker(`c${e}-f${t}-t${n}`,i.color,o=>{const a=[...s.thresholds??[]];a[n]={...i,color:o??i.color},this._updateField(e,t,{thresholds:a})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const o=(s.thresholds??[]).filter((a,l)=>l!==n);this._updateField(e,t,{thresholds:o.length?o:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const i=[...s.thresholds??[],{value:0,color:"#f44336"}];this._updateField(e,t,{thresholds:i})}}>+ Threshold</button>
      </div>
    `}_fieldSecSvgGauge(e,t,s){return r`
      <div class="ec-section">
            ${this._row("Min label",r`<input class="ec-input" type="text" .value=${s.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{gauge_min_label:n||void 0})}}
              />`)}
            ${this._row("Max label",r`<input class="ec-input" type="text" .value=${s.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{gauge_max_label:n||void 0})}}
              />`)}
            ${this._row("Show value",r`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${s.gauge_show_value??!1}
                  @change=${i=>this._updateField(e,t,{gauge_show_value:i.target.checked||void 0})}
                />
                <span>Display current value in centre</span>
              </label>`)}
            ${this._row("Label size (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="6" max="48"
                .value=${s.gauge_label_size!=null?String(s.gauge_label_size):""}
                placeholder="11"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{gauge_label_size:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Label color",this._colorPicker(`c${e}-f${t}-glc`,s.gauge_label_color,i=>this._updateField(e,t,{gauge_label_color:i}),{clearTitle:"Reset to default"}))}
      </div>
    `}_fieldSecSvgThermo(e,t,s){return r`
      <div class="ec-section">
            ${this._row("Tick color",this._colorPicker(`c${e}-f${t}-ttc`,s.thermo_tick_color,i=>this._updateField(e,t,{thermo_tick_color:i||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Tick position",r`<select class="ec-select"
                .value=${s.thermo_text_position??m("thermo_text_position")??"right"}
                @change=${i=>this._updateField(e,t,{thermo_text_position:i.target.value})}
              >
                ${["right","left","both"].map(i=>r`<option value=${i} .selected=${(s.thermo_text_position??m("thermo_text_position")??"right")===i}>${this._isHorizontalThermometerSvg(s)?{right:"Bottom",left:"Top",both:"Both"}[i]:i.charAt(0).toUpperCase()+i.slice(1)}</option>`)}
              </select>`)}
            ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                .checked=${s.thermo_show_minor_tick_text??m("thermo_show_minor_tick_text")??!1}
                @change=${i=>this._updateField(e,t,{thermo_show_minor_tick_text:i.target.checked})} />`)}
            ${this._row("Tick font size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                .value=${s.thermo_tick_font_size!=null?String(s.thermo_tick_font_size):""}
                placeholder="4"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_tick_font_size:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Major tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${s.thermo_major_tick_length!=null?String(s.thermo_major_tick_length):""}
                placeholder="auto (from SVG)"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_major_tick_length:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Major tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${s.thermo_major_tick_width!=null?String(s.thermo_major_tick_width):""}
                placeholder="auto (from SVG)"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_major_tick_width:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Minor tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${s.thermo_minor_tick_length!=null?String(s.thermo_minor_tick_length):""}
                placeholder="auto (from SVG)"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_minor_tick_length:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Minor tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${s.thermo_minor_tick_width!=null?String(s.thermo_minor_tick_width):""}
                placeholder="auto (from SVG)"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_minor_tick_width:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Grid line color",this._colorPicker(`c${e}-f${t}-tgc`,s.thermo_grid_color,i=>this._updateField(e,t,{thermo_grid_color:i||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Above temperature transparency",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${s.thermo_fill_opacity_above!=null?String(s.thermo_fill_opacity_above):""}
                placeholder="0.5"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_fill_opacity_above:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                .value=${s.thermo_decimals!=null?String(s.thermo_decimals):""}
                placeholder="1"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_decimals:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${this._row("Temperature value color",this._colorPicker(`c${e}-f${t}-ttc`,s.thermo_temp_color,i=>this._updateField(e,t,{thermo_temp_color:i||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Temperature value size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                .value=${s.thermo_temp_font_size!=null?String(s.thermo_temp_font_size):""}
                placeholder="10"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{thermo_temp_font_size:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
      </div>
    `}_fieldSecGraphSettings(e,t,s){return r`
      <div class="ec-section">

          ${this._row("Type",r`<select class="ec-select"
              .value=${s.graph_type??m("graph_type")??"bar"}
              @change=${i=>this._updateField(e,t,{graph_type:i.target.value})}
            >
              ${Ke.map(i=>r`<option value=${i.value} .selected=${(s.graph_type??m("graph_type")??"bar")===i.value}>${i.label}</option>`)}
            </select>`)}
          ${this._row("Show axes",r`<input type="checkbox" .checked=${s.graph_show_axes??m("graph_show_axes")??!0}
              @change=${i=>this._updateField(e,t,{graph_show_axes:i.target.checked||void 0})}
            />`)}
          ${this._row("Show legend",r`<input type="checkbox" .checked=${s.graph_show_legend??m("graph_show_legend")??!1}
              @change=${i=>this._updateField(e,t,{graph_show_legend:i.target.checked||void 0})}
            />`)}
          ${this._row("Min value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
              .value=${s.graph_min!=null?String(s.graph_min):""} placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{graph_min:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Max value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
              .value=${s.graph_max!=null?String(s.graph_max):""} placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{graph_max:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="60"
              .value=${s.width!=null?String(s.width):""} placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{width:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="40"
              .value=${s.height!=null?String(s.height):""} placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{height:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${["line","area","state-timeline"].includes(s.graph_type??"")?this._row("History (hours)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="8760"
              .value=${s.graph_hours!=null?String(s.graph_hours):""} placeholder="24"
              title="How many hours of history to fetch for line/area/sparkline charts"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{graph_hours:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`):_}
          ${["line","area","state-timeline"].includes(s.graph_type??"")?r`
            ${this._row("Stroke width",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="10" step="0.5"
                .value=${s.graph_stroke_width!=null?String(s.graph_stroke_width):""} placeholder="1.5"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{graph_stroke_width:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
            ${s.graph_type==="area"?this._row("Fill opacity",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${s.graph_fill_opacity!=null?String(s.graph_fill_opacity):""} placeholder="0.2"
                @change=${i=>{const n=i.target.value;this._updateField(e,t,{graph_fill_opacity:n===""?void 0:Number(n)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`):_}
          `:_}
      </div>
    `}_fieldSecGraphSeries(e,t,s){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Series — drag to reorder</div>
          ${(s.graph_series??[]).length===0?r`<p class="ec-empty">No series — click "+ Series".</p>`:(s.graph_series??[]).map((i,n)=>this._itemCard({dragKey:`gs:${e}:${t}:${n}`,icon:"mdi:chart-line",label:i.label||i.entity||`Series ${n+1}`,sub:i.entity?`Series ${n+1}`:"No entity selected",selected:n===this._selSeries,onClick:()=>{this._selSeries=n,this._navPush(`gs:${n}`,i.label||i.entity||`Series ${n+1}`)},actions:r`
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${o=>{o.stopPropagation();const a=(s.graph_series??[]).filter((l,c)=>c!==n);this._updateField(e,t,{graph_series:a.length?a:void 0})}}>✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>{const i=[...s.graph_series??[],{}];this._updateField(e,t,{graph_series:i})}}>+ Series</button>
      </div>
    `}_fieldSecGraphSeriesItem(e,t,s,i){const n=(s.graph_series??[])[i];return n?r`
      <div class="ec-section">
              ${this._entitySelector({entity:n.entity,onEntity:o=>{const a=[...s.graph_series??[]];a[i]={...a[i],entity:o},this._updateField(e,t,{graph_series:a})},attribute:n.attribute,onAttribute:o=>{const a=[...s.graph_series??[]];a[i]={...a[i],attribute:o},this._updateField(e,t,{graph_series:a})}})}
               ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${n.label??""}
                  placeholder="(from entity)"
                  @change=${o=>{const a=[...s.graph_series??[]],l=o.target.value;a[i]={...a[i],label:l||void 0},this._updateField(e,t,{graph_series:a})}}
                />`)}
              ${this._row("Color",this._colorPicker(`c${e}-f${t}-s${i}-col`,n.color,o=>{const a=[...s.graph_series??[]];a[i]={...a[i],color:o},this._updateField(e,t,{graph_series:a})},{clearTitle:"Reset to palette color"}))}
              ${this._row("Stat period",r`<select class="ec-select"
                  .value=${n.stat_period??""}
                  @change=${o=>{const a=[...s.graph_series??[]],l=o.target.value;a[i]={...a[i],stat_period:l||void 0},this._updateField(e,t,{graph_series:a})}}
                >
                  <option value="">Live state</option>
                  <optgroup label="Calendar">
                    <option value="today"       .selected=${n.stat_period==="today"}>Today</option>
                    <option value="yesterday"   .selected=${n.stat_period==="yesterday"}>Yesterday</option>
                    <option value="this_week"   .selected=${n.stat_period==="this_week"}>This week</option>
                    <option value="last_week"   .selected=${n.stat_period==="last_week"}>Last week</option>
                    <option value="this_month"  .selected=${n.stat_period==="this_month"}>This month</option>
                    <option value="last_month"  .selected=${n.stat_period==="last_month"}>Last month</option>
                    <option value="this_year"   .selected=${n.stat_period==="this_year"}>This year</option>
                    <option value="last_year"   .selected=${n.stat_period==="last_year"}>Last year</option>
                  </optgroup>
                  <optgroup label="Rolling window">
                    <option value="last_30_minutes" .selected=${n.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                    <option value="last_hour"        .selected=${n.stat_period==="last_hour"}>Last hour</option>
                    <option value="last_n_minutes"   .selected=${n.stat_period==="last_n_minutes"}>Last N minutes</option>
                    <option value="last_n_hours"     .selected=${n.stat_period==="last_n_hours"}>Last N hours</option>
                    <option value="last_n_days"      .selected=${n.stat_period==="last_n_days"}>Last N days</option>
                    <option value="last_n_months"    .selected=${n.stat_period==="last_n_months"}>Last N months</option>
                  </optgroup>
                </select>`)}
              ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(n.stat_period)?this._row(n.stat_period==="last_n_minutes"?"Number of minutes":n.stat_period==="last_n_hours"?"Number of hours":n.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
                  .value=${String(n.stat_period_n??"")}
                  placeholder="e.g. 3"
                  @change=${o=>{const a=parseInt(o.target.value,10),l=[...s.graph_series??[]];l[i]={...l[i],stat_period_n:isNaN(a)||a<1?void 0:a},this._updateField(e,t,{graph_series:l})}}
                />`):_}
              ${n.stat_period?this._row("Stat type",r`<select class="ec-select"
                  .value=${n.stat_type??m("stat_type")??"sum"}
                  @change=${o=>{const a=[...s.graph_series??[]];a[i]={...a[i],stat_type:o.target.value},this._updateField(e,t,{graph_series:a})}}
                >
                  <option value="sum"        .selected=${(n.stat_type??m("stat_type")??"sum")==="sum"}>Sum (total)</option>
                  <option value="difference" .selected=${n.stat_type==="difference"}>Difference (end − start)</option>
                  <option value="mean"       .selected=${n.stat_type==="mean"}>Mean (average)</option>
                  <option value="max"        .selected=${n.stat_type==="max"}>Maximum</option>
                  <option value="min"        .selected=${n.stat_type==="min"}>Minimum</option>
                </select>`):_}
      </div>
    `:r``}_fieldSecStats(e,t,s){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Entity field at it.</p>
          ${this._row("Period",r`<select class="ec-select"
              .value=${s.stat_period??""}
              @change=${i=>{const n=i.target.value,o=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(n);this._updateField(e,t,{stat_period:n||void 0,stat_period_n:o?s.stat_period_n??void 0:void 0,stat_period_start:n==="custom"?s.stat_period_start??void 0:void 0,stat_period_end:n==="custom"?s.stat_period_end??void 0:void 0})}}
            >
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${s.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${s.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${s.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${s.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${s.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${s.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${s.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${s.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${s.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${s.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${s.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${s.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${s.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${s.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${s.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(s.stat_period)?this._row(s.stat_period==="last_n_minutes"?"Number of minutes":s.stat_period==="last_n_hours"?"Number of hours":s.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
              .value=${String(s.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${i=>{const n=parseInt(i.target.value,10);this._updateField(e,t,{stat_period_n:isNaN(n)||n<1?void 0:n})}}
            />`):_}
          ${s.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input"
              .value=${s.stat_period_start??""}
              @change=${i=>this._updateField(e,t,{stat_period_start:i.target.value||void 0})}
            />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input"
              .value=${s.stat_period_end??""}
              @change=${i=>this._updateField(e,t,{stat_period_end:i.target.value||void 0})}
            />`)}
          `:_}
          ${s.stat_period?this._row("Stat type",r`<select class="ec-select"
              .value=${s.stat_type??m("stat_type")??"sum"}
              @change=${i=>this._updateField(e,t,{stat_type:i.target.value})}
            >
              <option value="sum"        .selected=${(s.stat_type??m("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${s.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${s.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${s.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${s.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${s.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${s.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",r`<select class="ec-select"
              .value=${s.stat_characteristic??""}
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{stat_characteristic:n||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(i=>r`
                <optgroup label="${i}">
                  ${Qs.filter(n=>n.group===i).map(n=>r`
                    <option value=${n.value} .selected=${s.stat_characteristic===n.value}>
                      ${n.label}${n.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${s.stat_characteristic==="percentile"?this._row("Percentile (1–99)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="99"
              .value=${s.stat_percentile!=null?String(s.stat_percentile):""} placeholder="50"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{stat_percentile:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`):_}
          ${this._row("Max age (hours)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${s.stat_max_age_hours!=null?String(s.stat_max_age_hours):""} placeholder="(none)"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{stat_max_age_hours:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Sampling size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${s.stat_sampling_size!=null?String(s.stat_sampling_size):""} placeholder="(none)"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{stat_sampling_size:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${s.stat_characteristic&&s.entity?r`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const i=xe(s.entity,s.stat_characteristic,s.stat_max_age_hours,s.stat_sampling_size,s.stat_percentile);navigator.clipboard.writeText(i)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${xe(s.entity,s.stat_characteristic,s.stat_max_age_hours,s.stat_sampling_size,s.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_fieldSecDisplay(e,t,s){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${s.unit??""}
              placeholder="(from entity)"
              @change=${i=>this._updateField(e,t,{unit:i.target.value})}
            />`)}
          ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="6"
              .value=${s.decimals!=null?String(s.decimals):""}
              placeholder="auto"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{decimals:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._row("Hide below",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${s.hide_below!=null?String(s.hide_below):""}
              placeholder="(always show)"
              title="Suppress this field when the absolute value is below this threshold"
              @change=${i=>{const n=i.target.value;this._updateField(e,t,{hide_below:n===""?void 0:Number(n)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
          ${this._displayUnit(s.entity,s.unit)?r`<p class="ec-hint">Enter in ${this._displayUnit(s.entity,s.unit)}</p>`:_}
          ${s.entity?.startsWith("virtual:")&&!s.time_until_layout?.length?this._row("Show trigger label",r`<input type="checkbox"
              .checked=${s.show_time_until_label??!1}
              title="Prefix the value with the active trigger label (e.g. 'Reserve: 2h 10m')"
              @change=${i=>this._updateField(e,t,{show_time_until_label:i.target.checked||void 0})}
            />`):_}
      </div>
    `}_fieldSecStyle(e,t,s){return r`
      <div class="ec-section">
          ${ht(s.type)?_:this._row("Align",r`<select class="ec-select"
              .value=${s.align??m("align")??"left"}
              @change=${i=>this._updateField(e,t,{align:i.target.value})}
            >
              ${ne.map(i=>r`<option value=${i} .selected=${(s.align??m("align")??"left")===i}>${i}</option>`)}
            </select>`)}
          ${this._row("Use global text style",r`<input type="checkbox" .checked=${s.style===void 0}
              @change=${i=>{i.target.checked?this._updateField(e,t,{style:void 0}):this._updateField(e,t,{style:{}})}}
            />`)}
          ${s.style!==void 0?r`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`c${e}-f${t}-st`,s.style,i=>this._updateField(e,t,{style:{...s.style,...i}}),!1)}
          `:_}
          ${this._cssRow(s.extra_css,i=>this._updateField(e,t,{extra_css:i}))}
      </div>
    `}_fieldSecActions(e,t,s){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Actions</div>
          ${this._actionRows({tap_action:s.tap_action,hold_action:s.hold_action,double_tap_action:s.double_tap_action},i=>this._updateField(e,t,i))}
      </div>
    `}_renderDefaultsRibbonPanel(){const e=this._navPath;if(e.length===0)return this._defaultsSectionMenu();if(e[0].key==="sec:elements")return e.length===1?this._elemLibMenu():this._elemLibSection(e[1].key);if(e[0].key==="sec:control"){if(e.length===1)return this._controlDefaultsMenu();const t=e[1].key;return t==="cd:selector"||t==="cd:button"?e.length===2?this._selectorDefaultsMenu(t):this._selectorDefaultsSection(t,e[2].key):this._controlDefaultsSection(t)}return this._defaultsSection(e[0].key)}_defaultsSectionMenu(){return r`
      ${this._navBtn("sec:card","Card Default","Default box style for cards","mdi:view-dashboard-outline")}
      ${this._navBtn("sec:value","Value Default","Default value text style","mdi:function-variant")}
      ${this._navBtn("sec:label","Label Default","Default label text style","mdi:format-title")}
      ${this._navBtn("sec:control","Control Default","Per-control style sections","mdi:toggle-switch-outline")}
      ${this._navBtn("sec:customcolors","Custom Colors","Reusable css color variables","mdi:language-css3")}
      ${this._navBtn("sec:layout","Layout & Fonts","Fonts, gaps, columns, units","mdi:format-size")}
      ${this._navBtn("sec:elements","Element Library","Thermometer, battery, tank, inverter, gauge","mdi:palette-swatch-outline")}
      <div class="ec-wiz-reset-row">
        <button class="ec-wiz-btn-reset" @click=${this._resetToWizard}>⟳ Reset &amp; rerun setup wizard</button>
      </div>
    `}_defaultsSection(e){const t=this._config?.defaults??{};return e==="sec:card"?r`<div class="ec-section">${this._boxRows("d-card",t.card??{},s=>this._updateDefaults({card:{...t.card,...s}}))}</div>`:e==="sec:value"?r`<div class="ec-section">${this._textRows("d-value",t.value??{},s=>this._updateDefaults({value:{...t.value,...s}}))}</div>`:e==="sec:label"?r`<div class="ec-section">${this._textRows("d-label",t.label??{},s=>this._updateDefaults({label:{...t.label,...s}}))}</div>`:e==="sec:customcolors"?this._defaultsSecCustomColors():e==="sec:layout"?this._defaultsSecLayout():r``}_defaultsSecCustomColors(){const e=this._config?.defaults?.custom_colors??[],t=i=>this._updateDefaults({custom_colors:i.length?i:void 0}),s=i=>i.trim().replace(/[^a-zA-Z0-9_-]/g,"_");return r`
      <div class="ec-section">
        <p class="ec-hint">Reusable colors. Each becomes <code>--mccust_&lt;name&gt;</code>, and appears in every color picker's <b>CSS Mode</b> list. Specifying a custom theme variable is allowed in the RGB input field.</p>
        ${e.length===0?r`<p class="ec-empty">No custom colors — click "+ Color".</p>`:_}
        ${e.map((i,n)=>r`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            <span style="font-size:11px;opacity:0.6;white-space:nowrap;">mccust_</span>
            <input class="ec-input" type="text" placeholder="name" style="flex:0 1 110px;" .value=${i.name}
              @change=${o=>{const a=[...e];a[n]={...i,name:s(o.target.value)},t(a)}} />
            <div style="flex:1;min-width:0;">
              ${this._colorPicker(`cust-${n}`,i.color,o=>{const a=[...e];a[n]={...i,color:o??""},t(a)},{clearable:!1})}
            </div>
            <button class="ec-btn-remove" title="Remove" @click=${()=>t(e.filter((o,a)=>a!==n))}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>t([...e,{name:`color${e.length+1}`,color:"#00d4ff"}])}>+ Color</button>
      </div>
    `}_controlNumRow(e,t,s,i,n=1){return this._row(e,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min=${String(n)}
        .value=${t!=null?String(t):""}
        placeholder=${s}
        @change=${o=>{const a=o.target.value;i(a===""?void 0:Number(a))}}
      /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}static _separationOnly(e){if(!e)return;const t={};let s=!1;for(const i of C.SEPARATION_KEYS)e[i]!==void 0&&(t[i]=e[i],s=!0);return s?t:void 0}_optionSeparationRows(e,t,s=!1){if(s)return r`
        <div class="ec-subsection-title">Padding</div>
        ${this._controlNumRow("Button padding (px)",e.button_option_padding,"5 / 10",o=>t({button_option_padding:o}),0)}
      `;const i=(o,a,l)=>this._colorPicker(o,a,c=>l(c||void 0)),n=(e.selector_option_gap??0)>0;return r`
      <div class="ec-subsection-title">Option separation</div>
      <p class="ec-hint">Set a gap to detach the options into discrete buttons — the shared outline and the divider lines between segments go away, and each option becomes its own cell. Leave the gap at 0 for the joined segmented look.</p>
      ${this._controlNumRow("Gap between options (px)",e.selector_option_gap,"0",o=>t({selector_option_gap:o}),0)}
      ${n?_:r`
        <div class="ec-subsection-title">Segmented frame</div>
        <p class="ec-hint">The outline around the joined segmented row, and the divider lines between options.</p>
        ${this._row("Border color",i("sel-bd",e.selector_border_color,o=>t({selector_border_color:o})))}
        ${this._controlNumRow("Border width (px)",e.selector_border_width,"1",o=>t({selector_border_width:o}),0)}
        ${this._controlNumRow("Radius (px)",e.selector_radius,"7",o=>t({selector_radius:o}))}
      `}
      ${n?r`
        ${this._controlNumRow("Internal padding (px)",e.selector_option_padding,"5",o=>t({selector_option_padding:o}),0)}
        ${this._row("Border per option",r`<input type="checkbox" .checked=${e.selector_option_border??!1}
            @change=${o=>t({selector_option_border:o.target.checked||void 0})}
          />`)}
        ${e.selector_option_border?r`
          <p class="ec-hint">Each option's own border. Leave these unset to reuse the selector's border color, width and radius.</p>
          ${this._row("Option border color",i("sel-obd",e.selector_option_border_color,o=>t({selector_option_border_color:o})))}
          ${this._controlNumRow("Option border width (px)",e.selector_option_border_width,"selector width",o=>t({selector_option_border_width:o}),0)}
          ${this._controlNumRow("Option border radius (px)",e.selector_option_radius,"selector radius",o=>t({selector_option_radius:o}),0)}
        `:_}
        <div class="ec-subsection-title">Option extra CSS</div>
        <p class="ec-hint">Raw CSS applied to each separated option cell, so detached buttons can be fully styled.</p>
        ${this._cssRow(e.selector_option_extra_css,o=>t({selector_option_extra_css:o}))}
      `:_}
    `}_controlGradientAngleRow(e,t){return this._controlNumRow("Gradient angle (deg)",e.gradient_angle,"180",s=>t({gradient_angle:s}),0)}_gradientToRow(e,t,s,i,n,o){return r`
      ${this._row(t,this._colorPicker(e,s,a=>i(a||void 0)))}
      ${s?r`
        ${this._controlGradientAngleRow(n,o)}
        <p class="ec-hint">Shared by every gradient on this control.</p>
      `:_}
    `}_selectorStateRows(e,t,s,i,n){const o=(a,l,c)=>this._colorPicker(`${e}-${a}`,l,p=>c(p||void 0));if(i==="sub:active"||i==="sub:inactive"){const a=i==="sub:active";return n?a?r`
          <p class="ec-hint">Applied while the button's entity is on, or — with a value set — while the entity's state equals it.</p>
          ${this._row("Background",o("sel-sel",t.button_selected_color,l=>s({button_selected_color:l})))}
          ${this._gradientToRow(`${e}-sel-sel2`,"Background gradient to",t.button_selected_color2,l=>s({button_selected_color2:l}),t,s)}
          ${this._row("Label color",o("sel-selt",t.button_selected_text_color,l=>s({button_selected_text_color:l})))}
          ${this._row("Icon color",o("sel-selic",t.button_selected_icon_color,l=>s({button_selected_icon_color:l})))}
          ${this._row("State value color",o("sel-selst",t.button_selected_state_color,l=>s({button_selected_state_color:l})))}
        `:r`
          ${this._row("Background",o("sel-bg",t.button_bg,l=>s({button_bg:l})))}
          ${this._gradientToRow(`${e}-sel-bg2`,"Background gradient to",t.button_bg2,l=>s({button_bg2:l}),t,s)}
          ${this._row("Label color",o("sel-txt",t.button_text_color,l=>s({button_text_color:l})))}
          ${this._row("Icon color",o("sel-ic",t.button_icon_color,l=>s({button_icon_color:l})))}
          ${this._row("State value color",o("sel-st",t.button_state_color,l=>s({button_state_color:l})))}
          <p class="ec-hint">Icon and state value follow the label color unless given one of their own.</p>
        `:a?r`
        <p class="ec-hint">Applied to an option whose value is the entity's current state, or whose own entity is on.</p>
        ${this._row("Background",o("sel-sel",t.selector_selected_color,l=>s({selector_selected_color:l})))}
        ${this._gradientToRow(`${e}-sel-sel2`,"Background gradient to",t.selector_selected_color2,l=>s({selector_selected_color2:l}),t,s)}
        ${this._row("Label color",o("sel-selt",t.selector_selected_text_color,l=>s({selector_selected_text_color:l})))}
        ${this._row("Icon color",o("sel-selic",t.selector_selected_icon_color,l=>s({selector_selected_icon_color:l})))}
        ${this._row("State value color",o("sel-selst",t.selector_selected_state_color,l=>s({selector_selected_state_color:l})))}
      `:r`
        ${this._row("Background",o("sel-bg",t.selector_bg,l=>s({selector_bg:l})))}
        ${this._gradientToRow(`${e}-sel-bg2`,"Background gradient to",t.selector_bg2,l=>s({selector_bg2:l}),t,s)}
        ${this._row("Label color",o("sel-txt",t.selector_text_color,l=>s({selector_text_color:l})))}
        ${this._row("Icon color",o("sel-ic",t.selector_icon_color,l=>s({selector_icon_color:l})))}
        ${this._row("State value color",o("sel-st",t.selector_state_color,l=>s({selector_state_color:l})))}
        <p class="ec-hint">Icon and state value follow the label color unless given one of their own.</p>
      `}return n?r`
        ${this._row("Border color",o("sel-bd",t.button_border_color,a=>s({button_border_color:a})))}
        ${this._controlNumRow("Border width (px)",t.button_border_width,"1",a=>s({button_border_width:a}),0)}
        ${this._controlNumRow("Radius (px)",t.button_radius,"7",a=>s({button_radius:a}))}
        ${this._controlNumRow("Padding (px)",t.button_option_padding,"5 / 10",a=>s({button_option_padding:a}),0)}
        ${this._controlNumRow("Label font size (px)",t.button_text_size,"13",a=>s({button_text_size:a}))}
        ${this._controlNumRow("Icon font size (px)",t.button_icon_size,"18",a=>s({button_icon_size:a}))}
        ${this._controlNumRow("State value font size (px)",t.button_state_size,"label size",a=>s({button_state_size:a}))}
      `:r`
      ${this._controlNumRow("Label font size (px)",t.selector_text_size,"13",a=>s({selector_text_size:a}))}
      ${this._controlNumRow("Icon font size (px)",t.selector_icon_size,"18",a=>s({selector_icon_size:a}))}
      ${this._controlNumRow("State value font size (px)",t.selector_state_size,"label size",a=>s({selector_state_size:a}))}
    `}_controlStyleRows(e,t,s,i,n=!0){const o=s===void 0,a=(l,c,p)=>this._colorPicker(`${e}-${l}`,c,u=>p(u||void 0));return r`
      ${n?r`
        ${this._row("Accent",a("accent",t.accent_color,l=>i({accent_color:l})))}
        ${this._gradientToRow(`${e}-accent2`,"Accent gradient to",t.accent_color2,l=>i({accent_color2:l}),t,i)}
      `:_}
      ${o||s==="toggle"?r`
        <div class="ec-subsection-title">Toggle</div>
        ${this._row("On color",a("on",t.toggle_on_color,l=>i({toggle_on_color:l})))}
        ${this._gradientToRow(`${e}-on2`,"On gradient to",t.toggle_on_color2,l=>i({toggle_on_color2:l}),t,i)}
        ${this._row("Off color",a("off",t.toggle_off_color,l=>i({toggle_off_color:l})))}
        ${this._gradientToRow(`${e}-off2`,"Off gradient to",t.toggle_off_color2,l=>i({toggle_off_color2:l}),t,i)}
        <div class="ec-subsection-title">Toggle thumb</div>
        ${this._row("Thumb color",a("th-col",t.toggle_thumb_color,l=>i({toggle_thumb_color:l})))}
        ${this._controlNumRow("Thumb size (px)",t.toggle_thumb_size,"18",l=>i({toggle_thumb_size:l}))}
        ${this._controlNumRow("Thumb radius (px)",t.toggle_thumb_radius,"circle",l=>i({toggle_thumb_radius:l}),0)}
        ${this._controlNumRow("Thumb padding (px)",t.toggle_thumb_padding,"2",l=>i({toggle_thumb_padding:l}),0)}
      `:_}
      ${o||s==="slider"?r`
        <div class="ec-subsection-title">Slider</div>
        ${this._row("Track color",a("track",t.slider_track_color,l=>i({slider_track_color:l})))}
        ${this._gradientToRow(`${e}-track2`,"Track gradient to",t.slider_track_color2,l=>i({slider_track_color2:l}),t,i)}
        ${this._row("Fill color",a("fill",t.slider_fill_color,l=>i({slider_fill_color:l})))}
        ${this._gradientToRow(`${e}-fill2`,"Fill gradient to",t.slider_fill_color2,l=>i({slider_fill_color2:l}),t,i)}
        ${this._controlNumRow("Track height (px)",t.slider_height,"6",l=>i({slider_height:l}))}
        ${this._controlNumRow("Track length (px)",t.slider_length,"fill width",l=>i({slider_length:l}),0)}
        ${this._controlNumRow("Track radius (px)",t.slider_radius,"pill",l=>i({slider_radius:l}),0)}
        ${this._row("Border",r`<input type="checkbox" .checked=${t.slider_border??!1}
            @change=${l=>i({slider_border:l.target.checked||void 0})}
          />`)}
        ${t.slider_border?r`
          ${this._row("Border color",a("track-bd",t.slider_border_color,l=>i({slider_border_color:l})))}
          ${this._controlNumRow("Border width (px)",t.slider_border_width,"1",l=>i({slider_border_width:l}),0)}
          <p class="ec-hint">Uses the track radius above.</p>
        `:_}
        <div class="ec-subsection-title">Slider thumb</div>
        ${this._row("Thumb color",a("thumb",t.slider_thumb_color,l=>i({slider_thumb_color:l})))}
        ${this._controlNumRow("Thumb size (px)",t.slider_thumb_size,"16",l=>i({slider_thumb_size:l}))}
        ${this._controlNumRow("Thumb width (px)",t.slider_thumb_width,"thumb size",l=>i({slider_thumb_width:l}))}
        ${this._controlNumRow("Thumb radius (px)",t.slider_thumb_radius,"circle",l=>i({slider_thumb_radius:l}),0)}
        ${this._controlNumRow("Thumb padding (px)",t.slider_thumb_padding,"0",l=>i({slider_thumb_padding:l}),0)}
      `:_}
      ${o||s==="dropdown"?r`
        <div class="ec-subsection-title">Dropdown</div>
        ${this._row("Border",a("dd-bd",t.dropdown_border_color,l=>i({dropdown_border_color:l})))}
        ${this._row("Background",a("dd-bg",t.dropdown_bg,l=>i({dropdown_bg:l})))}
        ${this._gradientToRow(`${e}-dd-bg2`,"Background gradient to",t.dropdown_bg2,l=>i({dropdown_bg2:l}),t,i)}
        ${this._row("Menu background",a("dd-mbg",t.dropdown_menu_bg,l=>i({dropdown_menu_bg:l})))}
        ${this._gradientToRow(`${e}-dd-mbg2`,"Menu gradient to",t.dropdown_menu_bg2,l=>i({dropdown_menu_bg2:l}),t,i)}
        ${this._row("Menu border",a("dd-mbd",t.dropdown_menu_border_color,l=>i({dropdown_menu_border_color:l})))}
        ${this._row("Selected color",a("dd-sel",t.dropdown_selected_color,l=>i({dropdown_selected_color:l})))}
        ${this._gradientToRow(`${e}-dd-sel2`,"Selected gradient to",t.dropdown_selected_color2,l=>i({dropdown_selected_color2:l}),t,i)}
        ${this._controlNumRow("Radius (px)",t.dropdown_radius,"6",l=>i({dropdown_radius:l}))}
        ${this._controlNumRow("Text size (px)",t.dropdown_text_size,"13",l=>i({dropdown_text_size:l}))}
      `:_}
      ${o||s==="input"?r`
        <div class="ec-subsection-title">Input</div>
        ${this._row("Border",a("in-bd",t.input_border_color,l=>i({input_border_color:l})))}
        ${this._row("Background",a("in-bg",t.input_bg,l=>i({input_bg:l})))}
        ${this._gradientToRow(`${e}-in-bg2`,"Background gradient to",t.input_bg2,l=>i({input_bg2:l}),t,i)}
        ${this._row("Focus color",a("in-fc",t.input_focus_color,l=>i({input_focus_color:l})))}
        ${this._controlNumRow("Radius (px)",t.input_radius,"6",l=>i({input_radius:l}))}
        ${this._controlNumRow("Text size (px)",t.input_text_size,"13",l=>i({input_text_size:l}))}
      `:_}
      ${o||s==="spinbox"?r`
        <div class="ec-subsection-title">Spin Box</div>
        ${this._row("Border",a("sp-bd",t.spinbox_border_color,l=>i({spinbox_border_color:l})))}
        ${this._row("Button background",a("sp-bg",t.spinbox_bg,l=>i({spinbox_bg:l})))}
        ${this._gradientToRow(`${e}-sp-bg2`,"Button gradient to",t.spinbox_bg2,l=>i({spinbox_bg2:l}),t,i)}
        ${this._row("Button hover",a("sp-hv",t.spinbox_button_hover_color,l=>i({spinbox_button_hover_color:l})))}
        ${this._gradientToRow(`${e}-sp-hv2`,"Hover gradient to",t.spinbox_button_hover_color2,l=>i({spinbox_button_hover_color2:l}),t,i)}
        ${this._controlNumRow("Button width (px)",t.spinbox_button_width,"30",l=>i({spinbox_button_width:l}))}
        ${this._controlNumRow("Radius (px)",t.spinbox_radius,"7",l=>i({spinbox_radius:l}))}
        ${this._controlNumRow("Text size (px)",t.spinbox_text_size,"13",l=>i({spinbox_text_size:l}))}
      `:_}
    `}_controlDefaultsMenu(){return r`
      ${this._navBtn("cd:common","Common","Accent color — themes every control","mdi:palette")}
      ${this._navBtn("cd:toggle","Toggle","On / off colors","mdi:toggle-switch-outline")}
      ${this._navBtn("cd:slider","Slider","Track, fill, thumb, height","mdi:tune-variant")}
      ${this._navBtn("cd:dropdown","Dropdown","Border, background, menu, selected","mdi:form-dropdown")}
      ${this._navBtn("cd:selector","Selector","Container, active / inactive, separation","mdi:view-dashboard-variant-outline")}
      ${this._navBtn("cd:input","Input","Border, background, focus","mdi:form-textbox")}
      ${this._navBtn("cd:spinbox","Spin Box","Border, button, hover, width","mdi:numeric")}
      ${this._navBtn("cd:button","Button","Container, active / inactive","mdi:gesture-tap-button")}
      ${this._navBtn("cd:container","Container Box","Box behind every control","mdi:square-rounded-outline")}
      ${this._navBtn("cd:variants","Variant Builder","Create and manage custom control variants","mdi:shape-plus")}
    `}_controlDefaultsSection(e){const t=this._config?.defaults??{},s=t.control_style??{},i=o=>this._updateDefaults({control_style:{...s,...o}});if(e==="cd:container")return r`<div class="ec-section">
        <p class="ec-hint">Box (background, border, radius, glow) applied behind every control. Per-field <b>Control Style</b> can override it.</p>
        ${this._boxRows("d-ctl-box",t.control??{},o=>this._updateDefaults({control:{...t.control,...o}}))}
      </div>`;if(e==="cd:common")return r`<div class="ec-section">
        <p class="ec-hint">The accent color is the fallback for slider fill, toggle-on, and each control's selected / focus state.</p>
        ${this._row("Accent",this._colorPicker("d-ctl-accent",s.accent_color,o=>i({accent_color:o||void 0})))}
        ${this._row("Accent gradient to",this._colorPicker("d-ctl-accent2",s.accent_color2,o=>i({accent_color2:o||void 0})))}
        <p class="ec-hint">Setting an accent gradient themes every surface that falls back to the accent — slider fill, toggle-on, dropdown / selector selected, spin box hover. Borders and focus outlines stay the flat accent color. Each surface stays flat until you give it a <b>gradient to</b> color of its own.</p>
        <div class="ec-subsection-title">Gradient angle</div>
        <p class="ec-hint">One angle for every gradient on every control. It also appears beside each <b>gradient to</b> color so you can adjust it there — they all edit this same value.</p>
        ${this._controlGradientAngleRow(s,i)}
      </div>`;if(e==="cd:variants")return this._controlVariantsSection();const n=e.slice(3);return r`<div class="ec-section">${this._controlStyleRows("d-ctl",s,n,i,!1)}</div>`}_selectorDefaultsMenu(e){const t=e==="cd:button";return r`
      ${this._navBtn("sub:container","Field Container","Sizes, placement, text","mdi:card-outline")}
      ${this._navBtn("sub:active","Active State","Colors when the option is active","mdi:circle-slice-8")}
      ${this._navBtn("sub:inactive","Inactive State","Colors when the option is inactive","mdi:circle-outline")}
      ${t?_:this._navBtn("sub:separation","Option Separation","Frame border, gap, per-option style","mdi:dots-grid")}
    `}_selectorDefaultsSection(e,t){const s=this._config?.defaults??{},i=s.control_style??{},n=c=>this._updateDefaults({control_style:{...i,...c}}),o=e==="cd:button";if(t==="sub:separation")return r`<div class="ec-section">${this._optionSeparationRows(i,n)}</div>`;if(t==="sub:active"||t==="sub:inactive")return r`<div class="ec-section">${this._selectorStateRows("d-ctl",i,n,t,o)}</div>`;const a=s.option_layout??{},l=c=>this._updateDefaults({option_layout:{...a,...c}});return r`<div class="ec-section">
      ${this._selectorStateRows("d-ctl",i,n,"sub:container",o)}
      <div class="ec-subsection-title">Placement &amp; text</div>
      ${this._optionLayoutRows(a,l,"d-ol")}
    </div>`}_variantOptions(e,t){const s=n=>r`<option value=${n.id} .selected=${t===n.id}>${n.label}</option>`,i=so(e);return i.length?r`
      <optgroup label="Built-in">${Fi(e).map(s)}</optgroup>
      <optgroup label="Custom">${i.map(s)}</optgroup>
    `:r`${Yt(e).map(s)}`}_updateVariants(e,t){const s=this._config?.defaults?.control_variants??{},i={...s,[e]:t([...s[e]??[]])};for(const o of Object.keys(i))i[o]?.length||delete i[o];const n=Object.keys(i).length?i:void 0;this._updateDefaults({control_variants:n}),Ce(n)}_controlVariantsSection(){const e=this._config?.defaults?.control_variants??{},t=ds.filter(i=>(e[i]??[]).length>0),s=t.reduce((i,n)=>i+(e[n]?.length??0),0);return r`
      <div class="ec-section">
        <p class="ec-hint">
          Custom variants are stored in <b>this card's configuration</b>, not in the Mosaic bundle — so
          installing a release that updates the built-in variants can never overwrite them. To reuse them on
          another card, use <b>Templates ▸ Export / Import Control Variants</b>.
        </p>
        <p class="ec-hint">
          To create one: configure a control field until it behaves the way you want, then use
          <b>Save as Variant</b> in that field's <b>Entity &amp; Action</b> section.
        </p>
        ${s===0?r`<p class="ec-empty">No custom variants yet.</p>`:t.map(i=>r`
              <div class="ec-subsection-title">${we[i]}</div>
              ${(e[i]??[]).map((n,o)=>this._variantRow(i,n,o))}
            `)}
      </div>
    `}_variantRow(e,t,s){const i=`${e}:${t.id}`,n=this._variantOpen===i,o=l=>this._updateVariants(e,c=>c.map((p,u)=>u===s?{...p,...l}:p)),a=Object.keys(t.preset??{}).length;return r`
      <div class="ec-list-row" style="flex-direction:column;align-items:stretch;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <ha-icon icon=${t.icon||ke[e]}></ha-icon>
          <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.label}</span>
          <span style="font-size:11px;opacity:0.55;white-space:nowrap;">${a} key${a===1?"":"s"}</span>
          <button class="ec-btn-add" style="padding:2px 8px;"
            @click=${()=>{this._variantOpen=n?"":i,this._variantError=""}}
          >${n?"Close":"Edit"}</button>
          <button class="ec-btn-add" style="padding:2px 8px;" title="Duplicate"
            @click=${()=>{const l=We(e,`${t.id}_copy`);this._updateVariants(e,c=>[...c,{...t,id:l,label:`${t.label} (copy)`}]),this._variantOpen=`${e}:${l}`}}
          >⧉</button>
          <button class="ec-btn-remove" title="Delete"
            @click=${()=>{window.confirm(`Delete variant "${t.label}"?

Fields already using it keep their current settings — they just lose the link to this variant.`)&&this._updateVariants(e,l=>l.filter((c,p)=>p!==s))}}
          >✕</button>
        </div>
        ${n?r`
          ${this._row("Label",r`<input class="ec-input" type="text" .value=${t.label}
              @change=${l=>{const c=l.target.value.trim();c?o({label:c}):l.target.value=t.label}} />`)}
          ${this._row("Icon",this._iconPicker(t.icon,l=>o({icon:l}),ke[e]))}
          ${this._row("Id",r`<span class="ec-input" style="opacity:0.6;">${t.id}</span>`)}
          <p class="ec-hint">The id is fixed after creation — fields store it to remember which variant they use. Rename the <b>Label</b> instead; that's what the Variant dropdown shows.</p>
          ${this._row("Domains",r`<input class="ec-input" type="text" placeholder="light, switch — blank for any" .value=${(t.domain??[]).join(", ")}
              @change=${l=>{const c=l.target.value.split(",").map(p=>p.trim()).filter(Boolean);o({domain:c.length?c:void 0})}} />`)}
          <div class="ec-subsection-title">Preset</div>
          <p class="ec-hint">Captured from the field this variant was saved from. Richer settings (labels, track labels, option lists) are easiest to author on a real field and re-capture with <b>Save as Variant</b>; this JSON is the escape hatch.</p>
          <textarea class="ec-input" rows="8" spellcheck="false"
            style="font-family:ui-monospace,monospace;font-size:11px;line-height:1.4;resize:vertical;"
            .value=${JSON.stringify(t.preset??{},null,2)}
            @change=${l=>{const c=l.target.value.trim();try{const p=c?JSON.parse(c):{};if(typeof p!="object"||p===null||Array.isArray(p))throw new Error("Preset must be a JSON object.");const u=Object.keys(p).filter(d=>!_s.includes(d));if(u.length)throw new Error(`Not preset keys: ${u.join(", ")}`);this._variantError="",o({preset:Object.keys(p).length?p:void 0})}catch(p){this._variantError=p instanceof Error?p.message:"Invalid JSON."}}}
          ></textarea>
          ${this._variantError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._variantError}</p>`:_}
        `:_}
      </div>
    `}_fieldSecControlStyle(e,t,s,i=!1){const n=this._updFor(e,t,i),o=this._idFor(e,t,i),a=s.control_style,l=d=>n({control_style:{...s.control_style,...d}}),c=C._separationOnly(a),p=a===void 0||!this._colorOverridesOn.has(o)&&c!==void 0&&Object.keys(a).length===Object.keys(c).length,u=s.type==="selector"||s.type==="button";return r`
      <div class="ec-section">
        ${this._row("Use global control style",r`<input type="checkbox" .checked=${p}
            @change=${d=>{d.target.checked?(this._colorOverridesOn.delete(o),n({control_style:c})):(this._colorOverridesOn.add(o),n({control_style:{...a??{}}})),this.requestUpdate()}}
          />`)}
        ${p?_:u?r`
          ${this._navBtn("fscs:container","Field Container","Border, radius, font sizes","mdi:card-outline")}
          ${this._navBtn("fscs:active","Active State","Colors when the option is active","mdi:circle-slice-8")}
          ${this._navBtn("fscs:inactive","Inactive State","Colors when the option is inactive","mdi:circle-outline")}
        `:r`
          <div class="ec-subsection-title">Color overrides</div>
          ${this._controlStyleRows(`${o}-ctl`,a??{},s.type,l)}
        `}
        <div class="ec-subsection-title">Container box</div>
        ${this._row("Override container",r`<input type="checkbox" .checked=${s.control_box!==void 0}
            @change=${d=>n({control_box:d.target.checked?{}:void 0})}
          />`)}
        ${s.control_box!==void 0?this._boxRows(`${o}-ctlbox`,s.control_box,d=>n({control_box:{...s.control_box,...d}}),!1):_}
        ${this._cssRow(s.extra_css,d=>n({extra_css:d}))}
      </div>
    `}_fieldControlStyleStateSection(e,t,s,i,n=!1){const o=this._updFor(e,t,n),a=this._idFor(e,t,n),l=s.control_style??{},c=u=>o({control_style:{...s.control_style,...u}}),p=i==="fscs:active"?"sub:active":i==="fscs:inactive"?"sub:inactive":"sub:container";return r`<div class="ec-section">${this._selectorStateRows(`${a}-ctl`,l,c,p,s.type==="button")}</div>`}_defaultsSecLayout(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
          ${this._row("Power unit",r`<select class="ec-select"
              .value=${e.power_unit??""}
              @change=${t=>{const s=t.target.value;this._updateDefaults({power_unit:s||void 0})}}
            >
              <option value=""   .selected=${!e.power_unit}>Auto (W / kW)</option>
              <option value="W"  .selected=${e.power_unit==="W"}>Always W</option>
              <option value="kW" .selected=${e.power_unit==="kW"}>Always kW</option>
            </select>`)}

          ${this._row("Stats refresh (min)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="60"
              .value=${e.stat_update_interval!=null?String(e.stat_update_interval):""}
              placeholder="5"
              @change=${t=>{const s=t.target.value;this._updateDefaults({stat_update_interval:s===""?void 0:Number(s)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Font family",r`<input class="ec-input" type="text" .value=${e.font_family??""}
              placeholder="inherit"
              @change=${t=>{const s=t.target.value;this._updateDefaults({font_family:s===""?void 0:s})}}
            />`)}

          ${this._row("Font family – monospace",r`<input class="ec-input" type="text" .value=${e.mono_font_family??""}
              placeholder="'Courier New', monospace"
              @change=${t=>{const s=t.target.value;this._updateDefaults({mono_font_family:s===""?void 0:s})}}
            />`)}
          <p class="ec-hint">Only used where a fixed-width font is required (e.g. numeric counters, timers).</p>

          ${this._row("Card columns",r`<select class="ec-select"
              .value=${String(e.card_columns??m("card_columns")??1)}
              @change=${t=>{const s=Number(t.target.value);this._updateDefaults({card_columns:s===1?void 0:s})}}
            >
              <option value="1" .selected=${(e.card_columns??1)===1}>1</option>
              <option value="2" .selected=${(e.card_columns??1)===2}>2</option>
              <option value="3" .selected=${(e.card_columns??1)===3}>3</option>
              <option value="4" .selected=${(e.card_columns??1)===4}>4</option>
              <option value="5" .selected=${(e.card_columns??1)===5}>5</option>
              <option value="6" .selected=${(e.card_columns??1)===6}>6</option>
              <option value="7" .selected=${(e.card_columns??1)===7}>7</option>
              <option value="8" .selected=${(e.card_columns??1)===8}>8</option>
            </select>`)}

          ${this._row("Field gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.field_gap!=null?String(e.field_gap):""}
              placeholder="4"
              @change=${t=>{const s=t.target.value;this._updateDefaults({field_gap:s===""?void 0:Number(s)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
          ${this._row("Column gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.column_gap!=null?String(e.column_gap):""}
              placeholder="3"
              @change=${t=>{const s=t.target.value;this._updateDefaults({column_gap:s===""?void 0:Number(s)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
      </div>
    `}_elemLibMenu(){return r`
      ${this._navBtn("el:thermo-v","Thermometer (Vertical)","Ticks, grid, fill, temperature text","mdi:thermometer")}
      ${this._navBtn("el:thermo-h","Thermometer (Horizontal)","Ticks, grid, fill, temperature text","mdi:thermometer")}
      ${this._navBtn("el:bat-h","Battery (Horizontal)","Fill & gradient","mdi:battery")}
      ${this._navBtn("el:bat-v","Battery (Vertical)","Fill & gradient","mdi:battery")}
      ${this._navBtn("el:tank-cyl","Tank (Cylinder)","Fill, direction, wall","mdi:barrel")}
      ${this._navBtn("el:tank-water","Tank - Water","Fill, direction, wall","mdi:water")}
      ${this._navBtn("el:tank-ferm","Tank - Fermenter","Fill, direction, wall","mdi:flask-outline")}
      ${this._navBtn("el:tank-cone","Tank - Cone","Fill, direction, wall","mdi:triangle-outline")}
      ${this._navBtn("el:inverter","Inverter","Line color","mdi:sine-wave")}
      ${this._navBtn("el:gauge-arc","Gauge (Arc)","Needle, label color & size","mdi:speedometer")}
    `}_elemLibSection(e){let t;switch(e){case"el:thermo-v":t=this._elemThermoV();break;case"el:thermo-h":t=this._elemThermoH();break;case"el:bat-h":t=this._elemBatH();break;case"el:bat-v":t=this._elemBatV();break;case"el:tank-cyl":t=this._elemTankCyl();break;case"el:tank-water":t=this._elemTankWater();break;case"el:tank-ferm":t=this._elemTankFerm();break;case"el:tank-cone":t=this._elemTankCone();break;case"el:inverter":t=this._elemInverter();break;case"el:gauge-arc":t=this._elemGaugeArc();break;default:return r``}const s=C.ELEM_CSS_KEY[e],i=this._config?.defaults??{};return r`${t}
      <div class="ec-section">
        ${this._cssRow(i[s],n=>this._updateDefaults({[s]:n}))}
      </div>`}_elemThermoV(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-tc",e.thermo_tick_color,t=>this._updateDefaults({thermo_tick_color:t||void 0})))}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${e.thermo_text_position??m("thermo_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(e.thermo_text_position??m("thermo_text_position")??"right")===t}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${e.thermo_show_minor_tick_text??m("thermo_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_show_minor_tick_text:t.target.checked})} />`)}
              ${this._row("Tick font size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                  .value=${e.thermo_tick_font_size!=null?String(e.thermo_tick_font_size):""}
                  placeholder="4"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_tick_font_size:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Major tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${e.thermo_major_tick_length!=null?String(e.thermo_major_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_major_tick_length:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Major tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${e.thermo_major_tick_width!=null?String(e.thermo_major_tick_width):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_major_tick_width:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Minor tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${e.thermo_minor_tick_length!=null?String(e.thermo_minor_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_minor_tick_length:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Minor tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${e.thermo_minor_tick_width!=null?String(e.thermo_minor_tick_width):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_minor_tick_width:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Grid line color",this._colorPicker("d-thermo-gc",e.thermo_grid_color,t=>this._updateDefaults({thermo_grid_color:t||void 0})))}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._row("Above temperature transparency",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${e.thermo_fill_opacity_above!=null?String(e.thermo_fill_opacity_above):""}
                  placeholder="0.5"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_fill_opacity_above:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                  .value=${e.thermo_decimals!=null?String(e.thermo_decimals):""}
                  placeholder="1"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_decimals:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-ttc",e.thermo_temp_color,t=>this._updateDefaults({thermo_temp_color:t||void 0})))}
              ${this._row("Temperature value size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                  .value=${e.thermo_temp_font_size!=null?String(e.thermo_temp_font_size):""}
                  placeholder="10"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_temp_font_size:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Fill color",this._colorPicker("d-thermo-fc",e.thermo_fill_color,t=>this._updateDefaults({thermo_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.thermo_fill_color2?r`${this._colorPicker("d-thermo-fc2",e.thermo_fill_color2,t=>this._updateDefaults({thermo_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_fill_color2:e.thermo_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemThermoH(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-h-tc",e.thermo_tick_color,t=>this._updateDefaults({thermo_tick_color:t||void 0})))}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${e.thermo_text_position??m("thermo_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(e.thermo_text_position??m("thermo_text_position")??"right")===t}>${{right:"Bottom",left:"Top",both:"Both"}[t]}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${e.thermo_show_minor_tick_text??m("thermo_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_show_minor_tick_text:t.target.checked})} />`)}
              ${this._row("Tick font size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                  .value=${e.thermo_tick_font_size!=null?String(e.thermo_tick_font_size):""}
                  placeholder="4"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_tick_font_size:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Major tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${e.thermo_major_tick_length!=null?String(e.thermo_major_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_major_tick_length:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Major tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${e.thermo_major_tick_width!=null?String(e.thermo_major_tick_width):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_major_tick_width:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Minor tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${e.thermo_minor_tick_length!=null?String(e.thermo_minor_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_minor_tick_length:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Minor tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${e.thermo_minor_tick_width!=null?String(e.thermo_minor_tick_width):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_minor_tick_width:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Grid line color",this._colorPicker("d-thermo-h-gc",e.thermo_grid_color,t=>this._updateDefaults({thermo_grid_color:t||void 0})))}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._row("Above temperature transparency",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${e.thermo_fill_opacity_above!=null?String(e.thermo_fill_opacity_above):""}
                  placeholder="0.5"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_fill_opacity_above:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                  .value=${e.thermo_decimals!=null?String(e.thermo_decimals):""}
                  placeholder="1"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_decimals:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-h-ttc",e.thermo_temp_color,t=>this._updateDefaults({thermo_temp_color:t||void 0})))}
              ${this._row("Temperature value size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                  .value=${e.thermo_temp_font_size!=null?String(e.thermo_temp_font_size):""}
                  placeholder="10"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({thermo_temp_font_size:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
              ${this._row("Fill color",this._colorPicker("d-thermo-h-fc",e.thermo_h_fill_color,t=>this._updateDefaults({thermo_h_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.thermo_h_fill_color2?r`${this._colorPicker("d-thermo-h-fc2",e.thermo_h_fill_color2,t=>this._updateDefaults({thermo_h_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_h_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_h_fill_color2:e.thermo_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemBatH(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-bh-fc",e.battery_h_fill_color,t=>this._updateDefaults({battery_h_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.battery_h_fill_color2?r`${this._colorPicker("d-bh-fc2",e.battery_h_fill_color2,t=>this._updateDefaults({battery_h_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_h_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_h_fill_color2:e.battery_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemBatV(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-bv-fc",e.battery_v_fill_color,t=>this._updateDefaults({battery_v_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.battery_v_fill_color2?r`${this._colorPicker("d-bv-fc2",e.battery_v_fill_color2,t=>this._updateDefaults({battery_v_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_v_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_v_fill_color2:e.battery_v_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemTankCyl(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tc-fc",e.tank_cylinder_fill_color,t=>this._updateDefaults({tank_cylinder_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.tank_cylinder_fill_color2?r`${this._colorPicker("d-tc-fc2",e.tank_cylinder_fill_color2,t=>this._updateDefaults({tank_cylinder_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cylinder_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_fill_color2:e.tank_cylinder_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${e.tank_cylinder_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_cylinder_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",e.tank_cylinder_tank_color?r`${this._colorPicker("d-tc-wc",e.tank_cylinder_tank_color,t=>this._updateDefaults({tank_cylinder_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cylinder_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankWater(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tw-fc",e.tank_water_fill_color,t=>this._updateDefaults({tank_water_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.tank_water_fill_color2?r`${this._colorPicker("d-tw-fc2",e.tank_water_fill_color2,t=>this._updateDefaults({tank_water_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_water_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_fill_color2:e.tank_water_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${e.tank_water_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_water_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",e.tank_water_tank_color?r`${this._colorPicker("d-tw-wc",e.tank_water_tank_color,t=>this._updateDefaults({tank_water_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_water_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankFerm(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tf-fc",e.tank_fermenter_fill_color,t=>this._updateDefaults({tank_fermenter_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.tank_fermenter_fill_color2?r`${this._colorPicker("d-tf-fc2",e.tank_fermenter_fill_color2,t=>this._updateDefaults({tank_fermenter_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_fermenter_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_fill_color2:e.tank_fermenter_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${e.tank_fermenter_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_fermenter_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",e.tank_fermenter_tank_color?r`${this._colorPicker("d-tf-wc",e.tank_fermenter_tank_color,t=>this._updateDefaults({tank_fermenter_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_fermenter_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankCone(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tn-fc",e.tank_cone_fill_color,t=>this._updateDefaults({tank_cone_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",e.tank_cone_fill_color2?r`${this._colorPicker("d-tn-fc2",e.tank_cone_fill_color2,t=>this._updateDefaults({tank_cone_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cone_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_fill_color2:e.tank_cone_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${e.tank_cone_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_cone_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",e.tank_cone_tank_color?r`${this._colorPicker("d-tn-wc",e.tank_cone_tank_color,t=>this._updateDefaults({tank_cone_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cone_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemInverter(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Line color",this._colorPicker("d-inv-lc",e.inverter_line_color,t=>this._updateDefaults({inverter_line_color:t||void 0})))}
      </div>
    `}_elemGaugeArc(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._row("Needle color",this._colorPicker("d-ga-nc",e.gauge_arc_needle_color,t=>this._updateDefaults({gauge_arc_needle_color:t||void 0})))}
              ${this._row("Label color",this._colorPicker("d-ga-lc",e.gauge_arc_label_color,t=>this._updateDefaults({gauge_arc_label_color:t||void 0})))}
              ${this._row("Label size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="6" max="24" step="1"
                  .value=${e.gauge_arc_label_size!=null?String(e.gauge_arc_label_size):""}
                  placeholder="11"
                  @change=${t=>{const s=t.target.value;this._updateDefaults({gauge_arc_label_size:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
      </div>
    `}_renderPopoverPanel(){const e=this._navPath,t=this._extCards();if(e.length===0)return r`
        ${this._navBtn("defaults-global","Popover Card Defaults","Default columns, size, gaps & style for every popover card","mdi:tune")}
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addExtCard}>+ Popover Card</button>
        </div>
        ${t.length===0?r`<p class="ec-empty">No popover cards — click "+ Popover Card".</p>`:t.map((o,a)=>this._itemCard({dragKey:`extcard:${a}`,icon:"mdi:picture-in-picture-bottom-right",label:o.name??`Popover Card ${a+1}`,sub:`${o.fields.length} field${o.fields.length===1?"":"s"}`,selected:a===this._selExtCard,onClick:()=>{this._selExtCard=a,this._selExtField=-1,this._navPush(`card:${a}`,o.name??`Popover Card ${a+1}`)},actions:r`
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeExtCard(a)}}
                  title="Remove">✕</button>
              `}))}
      `;if(e[0].key==="defaults-global")return this._popoverGlobalDefaults();const s=this._selExtCard,i=t[s];if(!i)return r``;if(e.length===1)return r`
        ${this._navBtn("sec:defaults","Card Defaults","Columns, width %, height %, gaps","mdi:tune")}
        ${this._navBtn("sec:style","Box Style","Background, border, glow, blur","mdi:palette")}
        ${this._navBtn("sec:text","Text Styles","Label & value style","mdi:format-title")}
        ${this._renderExtFieldList(s,i)}
      `;const n=e[1].key;if(n.startsWith("field:")){const o=this._selExtField,a=i.fields[o];return a?e.length===4&&e[2].key==="fsec:series"&&e[3].key.startsWith("egs:")?this._extFieldSecGraphSeriesItem(s,o,a,this._selSeries):e.length===4&&e[2].key==="fsec:controlstyle"&&e[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(s,o,a,e[3].key,!0):e.length===3?this._extFieldSection(s,o,a,e[2].key):this._renderExtFieldPanel(s,o,a):r``}return this._popoverCardSection(s,i,n)}_popoverGlobalDefaults(){return this._config?r`
      <div class="ec-section">
              ${this._row("Columns (default)",r`<select class="ec-select"
                  .value=${String(this._config.extended_card_defaults?.columns??m("columns")??2)}
                  @change=${e=>this._updateExtDefaults({columns:Number(e.target.value)})}
                >
                  <option value="1">1</option>
                  <option value="2" .selected=${(this._config.extended_card_defaults?.columns??m("columns")??2)===2}>2</option>
                  <option value="3" .selected=${this._config.extended_card_defaults?.columns===3}>3</option>
                  <option value="4" .selected=${this._config.extended_card_defaults?.columns===4}>4</option>
                  <option value="5" .selected=${this._config.extended_card_defaults?.columns===5}>5</option>
                  <option value="6" .selected=${this._config.extended_card_defaults?.columns===6}>6</option>
                  <option value="7" .selected=${this._config.extended_card_defaults?.columns===7}>7</option>
                  <option value="8" .selected=${this._config.extended_card_defaults?.columns===8}>8</option>
                </select>`)}
              ${this._row("Width % (default)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20" max="100"
                  .value=${this._config.extended_card_defaults?.width!=null?String(this._config.extended_card_defaults.width):""}
                  placeholder="70"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({width:t===""?void 0:Number(t)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${e=>this._stepNumInput(e,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${e=>this._stepNumInput(e,1)}>+</button></span></span>`)}
              ${this._row("Height % (default)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="10" max="100"
                  .value=${this._config.extended_card_defaults?.height!=null?String(this._config.extended_card_defaults.height):""}
                  placeholder="auto"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({height:t===""?void 0:Number(t)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${e=>this._stepNumInput(e,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${e=>this._stepNumInput(e,1)}>+</button></span></span>`)}
              ${this._row("Field gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.field_gap!=null?String(this._config.extended_card_defaults.field_gap):""}
                  placeholder="8"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({field_gap:t===""?void 0:Number(t)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${e=>this._stepNumInput(e,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${e=>this._stepNumInput(e,1)}>+</button></span></span>`)}
              ${this._row("Column gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.column_gap!=null?String(this._config.extended_card_defaults.column_gap):""}
                  placeholder="(from global)"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({column_gap:t===""?void 0:Number(t)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${e=>this._stepNumInput(e,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${e=>this._stepNumInput(e,1)}>+</button></span></span>`)}
              <div class="ec-subsection-title">Card default</div>
              ${this._boxRows("extd-card",this._config.extended_card_defaults?.card??{},e=>this._updateExtDefaults({card:{...this._config.extended_card_defaults?.card,...e}}))}
              <div class="ec-subsection-title">Label default</div>
              ${this._textRows("extd-lbl",this._config.extended_card_defaults?.label??{},e=>this._updateExtDefaults({label:{...this._config.extended_card_defaults?.label,...e}}))}
              <div class="ec-subsection-title">Value default</div>
              ${this._textRows("extd-val",this._config.extended_card_defaults?.value??{},e=>this._updateExtDefaults({value:{...this._config.extended_card_defaults?.value,...e}}))}
      </div>
    `:r``}_popoverCardSection(e,t,s){switch(s){case"sec:defaults":return this._popoverSecDefaults(e,t);case"sec:style":return this._popoverSecStyle(e,t);case"sec:text":return this._popoverSecText(e,t);default:return r``}}_popoverSecDefaults(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${s=>this._updateExtCard(e,{name:s.target.value})}
          />`)}

        ${this._row("Columns",r`<select class="ec-select"
            .value=${String(t.columns??m("columns")??2)}
            @change=${s=>this._updateExtCard(e,{columns:Number(s.target.value)})}
          >
            <option value="1">1</option>
            <option value="2" .selected=${(t.columns??m("columns")??2)===2}>2</option>
            <option value="3" .selected=${t.columns===3}>3</option>
            <option value="4" .selected=${t.columns===4}>4</option>
            <option value="5" .selected=${t.columns===5}>5</option>
            <option value="6" .selected=${t.columns===6}>6</option>
            <option value="7" .selected=${t.columns===7}>7</option>
            <option value="8" .selected=${t.columns===8}>8</option>
          </select>`)}

        ${this._row("Width %",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20" max="100"
            .value=${t.width!=null?String(t.width):""}
            placeholder="(from defaults)"
            @change=${s=>{const i=s.target.value;this._updateExtCard(e,{width:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

        ${this._row("Height %",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="10" max="100"
            .value=${t.height!=null?String(t.height):""}
            placeholder="auto"
            @change=${s=>{const i=s.target.value;this._updateExtCard(e,{height:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

        ${this._row("Align",r`<select class="ec-select"
            .value=${t.align??m("align")??"left"}
            @change=${s=>this._updateExtCard(e,{align:s.target.value})}
          >
            ${ne.map(s=>r`<option value=${s} .selected=${(t.align??m("align")??"left")===s}>${s}</option>`)}
          </select>`)}

        ${this._row("Field gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.field_gap!=null?String(t.field_gap):""}
            placeholder="(from defaults)"
            @change=${s=>{const i=s.target.value;this._updateExtCard(e,{field_gap:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

        ${this._row("Column gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.column_gap!=null?String(t.column_gap):""}
            placeholder="(from defaults)"
            @change=${s=>{const i=s.target.value;this._updateExtCard(e,{column_gap:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
      </div>
    `}_popoverSecStyle(e,t){return r`
      <div class="ec-section">
        ${this._boxRows(`ext${e}`,t.box??{},s=>this._updateExtCardBox(e,s))}
      </div>
    `}_popoverSecText(e,t){return r`
      <div class="ec-section">
        <div class="ec-subsection-title">Label Default</div>
        ${this._textRows(`ext${e}-ls`,t.label_style??{},s=>this._updateExtCard(e,{label_style:{...t.label_style,...s}}))}

        <div class="ec-subsection-title">Value Default</div>
        ${this._textRows(`ext${e}-vs`,t.value_style??{},s=>this._updateExtCard(e,{value_style:{...t.value_style,...s}}))}
      </div>
    `}_renderExtFieldList(e,t){const s=t.fields;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(e,!0)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addExtField(e)}>+ Field</button>
        </div>
        ${s.length===0?r`<p class="ec-empty">No fields — click "+ Field".</p>`:s.map((i,n)=>this._itemCard({dragKey:`extfield:${e}:${n}`,icon:ke[i.type],label:this._fieldName(i),sub:this._fieldSub(i),selected:n===this._selExtField,onClick:()=>{this._selExtField=n,this._navPush(`field:${n}`,`Field ${n+1}`)},actions:r`
                ${this._copiedFieldSrc?.isExt===!0&&this._copiedFieldSrc.ci===e&&this._copiedFieldSrc.fi===n?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                      @click=${o=>{o.stopPropagation(),this._copyField(e,n,!0)}}
                      title="Copy this field">⎘</button>`}
                <button class="ec-btn-remove"
                  @click=${o=>{o.stopPropagation(),this._removeExtField(e,n)}}
                  title="Remove">✕</button>
              `}))}
      </div>
    `}_extFieldHeader(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
        <div class="ec-section-header">
          <span class="ec-section-title">Field ${t+1}</span>
        </div>

        ${this._row("Type",r`<select class="ec-select"
            .value=${s.type==="graph"?"svg":s.type}
            @change=${n=>{const o=n.target.value;if(ht(o)){const a=Hs(o);i({type:o,...a?$e(o,a):{}})}else i({type:o}),o==="svg"&&this._openGGPicker(e,t,!0)}}
          >
            ${ti.map(n=>r`<option value=${n} .selected=${(s.type==="graph"?"svg":s.type)===n}>${we[n]}</option>`)}
          </select>`)}

        ${ht(s.type)&&Yt(s.type).length>1?this._row("Variant",r`<select class="ec-select"
            .value=${s.variant??""}
            @change=${n=>{const o=n.target.value;i($e(s.type,o))}}
          >
            ${this._variantOptions(s.type,s.variant)}
          </select>`):_}

        ${s.type==="svg"||s.type==="graph"?this._row("Element",r`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(s)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(e,t,!0)}>⊞ Change type…</button>
          </div>`):_}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${s.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${n=>{const o=n.target.value.trim();i({display_name:o===""?void 0:o})}}
          />`)}

        ${this._row("Column",r`<div style="display:flex;gap:4px;align-items:center">
            <span class="ec-num-wrap"><input class="ec-input ec-input-num-small" type="number" min="1" max="8"
              .value=${s.column!=null?String(s.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${n=>{const o=n.target.value;i({column:o===""?void 0:Number(o)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            <span class="ec-num-wrap"><input class="ec-input ec-input-num-small" type="number" min="2" max="8"
              .value=${s.column_end!=null?String(s.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${n=>{const o=n.target.value;i({column_end:o===""?void 0:Number(o)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>
          </div>`)}
    `}_renderExtFieldPanel(e,t,s){return s.type==="blank"||s.type==="rule"?r`
        <div class="ec-section ec-section--fields">
          ${this._extFieldHeader(e,t,s)}
          ${this._extFieldSecBlankOrRule(e,t,s)}
        </div>
      `:r`
      <div class="ec-section ec-section--fields">
        ${this._extFieldHeader(e,t,s)}
        ${this._extFieldSectionMenu(s)}
      </div>
    `}_extFieldSectionMenu(e){const t=[];return e.type==="value"?(t.push(this._navBtn("fsec:source","Value Source","Entity, virtual entity, time-until layout","mdi:database")),t.push(this._navBtn("fsec:label","Value Label","Optional label text & position","mdi:tag-text-outline"))):e.type==="icon"?t.push(this._navBtn("fsec:icon","Icon","mdi icon name","mdi:emoticon-outline")):e.type==="label"?t.push(this._navBtn("fsec:content","Content","Label text","mdi:format-text")):e.type==="svg"?(t.push(this._navBtn("fsec:source","Value Source","Entity, tank fill source","mdi:database")),this._isInverterSvg(e)||t.push(this._navBtn("fsec:range","Range","Min / max value","mdi:arrow-expand-vertical")),t.push(this._navBtn("fsec:colors","Colors","Fill direction, fill, gradient, tank color","mdi:palette")),t.push(this._navBtn("fsec:size","Size","Height, width","mdi:resize")),this._isInverterSvg(e)||t.push(this._navBtn("fsec:thresholds","Color Thresholds","Value-driven fill color overrides","mdi:format-color-fill")),this._isGaugeSvg(e)&&t.push(this._navBtn("fsec:gauge","Gauge Labels","Min/max labels, value display","mdi:speedometer")),this._isThermometerSvg(e)&&t.push(this._navBtn("fsec:thermo","Thermometer","Ticks, grid, temperature text","mdi:thermometer"))):e.type==="graph"?(t.push(this._navBtn("fsec:graph","Graph Settings","Type, axes, legend, range, size","mdi:chart-bar")),t.push(this._navBtn("fsec:series","Series","Entities plotted on the graph","mdi:chart-line"))):e.type==="embedded_card"?t.push(this._navBtn("fsec:embed","Embedded Card","Card type, width, transparency","mdi:widgets")):e.type==="toggle"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="slider"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:sliderrange","Range","Min / max / step, show value, unit","mdi:arrow-expand-horizontal")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="dropdown"||e.type==="selector"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:options","Options","Option source & manual list","mdi:format-list-bulleted")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="input"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:input","Input","Mode, submit timing, placeholder","mdi:form-textbox")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="spinbox"?(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:sliderrange","Range","Min / max / step, unit","mdi:arrow-expand-horizontal")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors & container (override global)","mdi:palette"))):e.type==="button"&&(t.push(this._navBtn("fsec:control","Entity & Action","Controlled entity + optional action override","mdi:database")),t.push(this._navBtn("fsec:options","Button Layout","Icon & state position, text styles","mdi:gesture-tap-button")),t.push(this._navBtn("fsec:controlstyle","Control Style","Colors, border, padding (override global)","mdi:palette"))),ht(e.type)&&t.push(this._navBtn("fsec:labels","Labels","Icon + text rows around the control","mdi:label-outline")),e.type==="slider"&&t.push(this._navBtn("fsec:sliderpoints","Track Labels","Left / center / right labels","mdi:format-horizontal-align-center")),(e.type==="value"||e.type==="icon")&&(t.push(this._navBtn("fsec:stats","HA Statistics","Advanced statistics integration","mdi:chart-box-outline")),t.push(this._navBtn("fsec:display","Display","Unit, decimals, hide below","mdi:eye-outline"))),e.type!=="embedded_card"&&(t.push(this._navBtn("fsec:style","Text Style","Align & value/label text style","mdi:format-title")),t.push(this._navBtn("fsec:actions","Actions","Tap · hold · double tap","mdi:gesture-tap"))),r`${t}`}_extFieldSection(e,t,s,i){switch(i){case"fsec:source":return s.type==="svg"?this._extFieldSecSvgSource(e,t,s):this._extFieldSecValueSource(e,t,s);case"fsec:control":return this._fieldSecControlSource(e,t,s,!0);case"fsec:embed":return this._fieldSecEmbed(e,t,s,!0);case"fsec:sliderrange":return this._fieldSecSliderRange(e,t,s,!0);case"fsec:options":return this._fieldSecOptions(e,t,s,!0);case"fsec:input":return this._fieldSecInput(e,t,s,!0);case"fsec:controlstyle":return this._fieldSecControlStyle(e,t,s,!0);case"fsec:labels":return this._fieldSecControlLabels(e,t,s,!0);case"fsec:sliderpoints":return this._fieldSecSliderPoints(e,t,s,!0);case"fsec:label":return this._extFieldSecValueLabel(e,t,s);case"fsec:icon":return this._extFieldSecIcon(e,t,s);case"fsec:content":return this._extFieldSecLabelContent(e,t,s);case"fsec:range":return this._extFieldSecSvgRange(e,t,s);case"fsec:colors":return this._extFieldSecSvgColors(e,t,s);case"fsec:size":return this._extFieldSecSvgSize(e,t,s);case"fsec:thresholds":return this._extFieldSecSvgThresholds(e,t,s);case"fsec:gauge":return this._extFieldSecSvgGauge(e,t,s);case"fsec:thermo":return this._extFieldSecSvgThermo(e,t,s);case"fsec:graph":return this._extFieldSecGraphSettings(e,t,s);case"fsec:series":return this._extFieldSecGraphSeries(e,t,s);case"fsec:stats":return this._extFieldSecStats(e,t,s);case"fsec:display":return this._extFieldSecDisplay(e,t,s);case"fsec:style":return this._extFieldSecStyle(e,t,s);case"fsec:actions":return this._extFieldSecActions(e,t,s);default:return r``}}_extFieldSecBlankOrRule(e,t,s){const i=n=>this._updateExtField(e,t,n);return s.type!=="blank"?r`<p class="ec-hint">Horizontal rule — no options.</p>`:r`
        ${this._row("Gap (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
            .value=${s.blank_gap!=null?String(s.blank_gap):""}
            placeholder="10"
            @change=${n=>{const o=n.target.value;i({blank_gap:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
    `}_extFieldSecValueSource(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          ${this._entitySelector({entity:s.entity,onEntity:n=>i({entity:n}),attribute:s.attribute,onAttribute:n=>i({attribute:n})})}
          ${this._isTimeUntilVirtual(s)?this._renderTuLayoutBuilder(s,i):_}
      </div>
    `}_extFieldSecValueLabel(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
           ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${s.label??""}
              placeholder="(optional)"
              @input=${n=>{const o=n.target.value;i({label:o||void 0})}}
            />`)}
          ${s.label?r`
            ${this._row("Value Label position",r`<select class="ec-select"
                .value=${s.label_position??m("label_position")??"above"}
                @change=${n=>i({label_position:n.target.value})}
              >
                <option value="above"  .selected=${(s.label_position??m("label_position")??"above")==="above"}>Above value</option>
                <option value="below"  .selected=${s.label_position==="below"}>Below value</option>
                <option value="left"   .selected=${s.label_position==="left"}>Left of value</option>
                <option value="right"  .selected=${s.label_position==="right"}>Right of value</option>
              </select>`)}
            ${this._row("Label column",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="4"
                .value=${s.label_column!=null?String(s.label_column):""}
                placeholder="(same cell)"
                @change=${n=>{const o=n.target.value;i({label_column:o===""?void 0:Number(o)})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          `:_}
      </div>
    `}_extFieldSecLabelContent(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          ${this._row("Text",r`<input class="ec-input" type="text" .value=${s.text??""}
              @change=${n=>i({text:n.target.value})} />`)}
      </div>
    `}_extFieldSecIcon(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          ${this._row("Icon",this._iconPicker(s.icon,n=>i({icon:n})))}
      </div>
    `}_extFieldSecSvgSource(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">

      ${!s.svg||this._isThermometerSvg(s)||this._isBatterySvg(s)?this._entitySelector({entity:s.entity,onEntity:n=>i({entity:n}),attribute:s.attribute,onAttribute:n=>i({attribute:n})}):_}
          ${this._isBatterySvg(s)?this._entitySelector({label:"Charging entity",entity:s.charging_entity,onEntity:n=>i({charging_entity:n}),attribute:s.charging_attribute,onAttribute:n=>i({charging_attribute:n})}):_}
          ${s.svg&&!this._isThermometerSvg(s)&&!this._isBatterySvg(s)&&!this._isInverterSvg(s)&&!this._isGaugeSvg(s)?r`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._entitySelector({label:"% entity",entity:s.tank_pct_entity,onEntity:n=>i({tank_pct_entity:n}),attribute:s.tank_pct_attribute,onAttribute:n=>i({tank_pct_attribute:n})})}
            ${this._entitySelector({label:"Flow In/Out Entity",entity:s.tank_volume_entity,onEntity:n=>i({tank_volume_entity:n}),attribute:s.tank_volume_attribute,onAttribute:n=>i({tank_volume_attribute:n})})}
            ${this._entitySelector({label:"Capacity entity",entity:s.tank_capacity_entity,onEntity:n=>i({tank_capacity_entity:n}),attribute:s.tank_capacity_attribute,onAttribute:n=>i({tank_capacity_attribute:n})})}
          `:_}
      </div>
    `}_extFieldSecSvgRange(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
            ${this._row("Min value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                .value=${s.min!=null?String(s.min):""} placeholder="0"
                @change=${n=>{const o=n.target.value;i({min:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
            ${this._row("Max value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                .value=${s.max!=null?String(s.max):""} placeholder="100"
                @change=${n=>{const o=n.target.value;i({max:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
      </div>
    `}_extFieldSecSvgColors(e,t,s){const i=o=>this._updateExtField(e,t,o),n=`ext${e}-f${t}`;return r`
      <div class="ec-section">
          ${s.svg&&!this._isInverterSvg(s)?this._row("Fill direction",r`<select class="ec-select" .value=${s.fill_direction??m("fill_direction")??"up"}
              @change=${o=>i({fill_direction:o.target.value})}>
              <option value="up"    .selected=${(s.fill_direction??m("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
              <option value="down"  .selected=${s.fill_direction==="down"}>Down</option>
              <option value="left"  .selected=${s.fill_direction==="left"}>Left</option>
              <option value="right" .selected=${s.fill_direction==="right"}>Right</option>
            </select>`):_}
          ${this._row(this._isInverterSvg(s)?"Line color":"Fill color",this._colorPicker(`${n}-fc`,s.fill_color,o=>i({fill_color:o})))}
          ${this._isInverterSvg(s)?_:this._row("Top Graduated Color (Opt)",s.fill_color2?this._colorPicker(`${n}-fc2`,s.fill_color2,o=>i({fill_color2:o}),{clearTitle:"Remove gradient",onClear:()=>i({fill_color2:void 0})}):r`<button class="ec-lib-browse-btn" style="font-size:12px"
                  @click=${()=>i({fill_color2:s.fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
          ${s.svg&&!this._isThermometerSvg(s)&&!this._isBatterySvg(s)&&!this._isInverterSvg(s)&&!this._isGaugeSvg(s)?this._row("Tank color",this._colorPicker(`${n}-tkc`,s.tank_color,o=>i({tank_color:o}),{clearTitle:"Remove (use SVG default)",onClear:()=>i({tank_color:void 0})})):_}
      </div>
    `}_extFieldSecSvgSize(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
              .value=${s.height!=null?String(s.height):""} placeholder="120"
              @change=${n=>{const o=n.target.value;i({height:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="10"
              .value=${s.width!=null?String(s.width):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({width:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
      </div>
    `}_extFieldSecSvgThresholds(e,t,s){const i=o=>this._updateExtField(e,t,o),n=`ext${e}-f${t}`;return r`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(s.thresholds??[]).map((o,a)=>r`
              <div class="ec-row">
                <span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(o.value)}
                  @change=${l=>{const c=[...s.thresholds??[]];c[a]={...o,value:Number(l.target.value)},i({thresholds:c})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${l=>this._stepNumInput(l,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${l=>this._stepNumInput(l,1)}>+</button></span></span>
                <div style="flex:1">
                  ${this._colorPicker(`${n}-t${a}`,o.color,l=>{const c=[...s.thresholds??[]];c[a]={...o,color:l??o.color},i({thresholds:c})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const l=(s.thresholds??[]).filter((c,p)=>p!==a);i({thresholds:l.length?l:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const o=[...s.thresholds??[],{value:0,color:"#f44336"}];i({thresholds:o})}}>+ Threshold</button>
      </div>
    `}_extFieldSecSvgGauge(e,t,s){const i=o=>this._updateExtField(e,t,o),n=`ext${e}-f${t}`;return r`
      <div class="ec-section">
            ${this._row("Min label",r`<input class="ec-input" type="text" .value=${s.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${o=>{const a=o.target.value;i({gauge_min_label:a||void 0})}} />`)}
            ${this._row("Max label",r`<input class="ec-input" type="text" .value=${s.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${o=>{const a=o.target.value;i({gauge_max_label:a||void 0})}} />`)}
            ${this._row("Show value",r`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${s.gauge_show_value??!1}
                  @change=${o=>i({gauge_show_value:o.target.checked||void 0})} />
                <span>Display current value in centre</span>
              </label>`)}
            ${this._row("Label size (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="6" max="48"
                .value=${s.gauge_label_size!=null?String(s.gauge_label_size):""} placeholder="11"
                @change=${o=>{const a=o.target.value;i({gauge_label_size:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Label color",this._colorPicker(`${n}-glc`,s.gauge_label_color,o=>i({gauge_label_color:o}),{clearTitle:"Reset to default"}))}
      </div>
    `}_extFieldSecSvgThermo(e,t,s){const i=o=>this._updateExtField(e,t,o),n=`ext${e}-f${t}`;return r`
      <div class="ec-section">
            ${this._row("Tick color",this._colorPicker(`${n}-ttc`,s.thermo_tick_color,o=>i({thermo_tick_color:o||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Tick position",r`<select class="ec-select"
                .value=${s.thermo_text_position??m("thermo_text_position")??"right"}
                @change=${o=>i({thermo_text_position:o.target.value})}
              >
                ${["right","left","both"].map(o=>r`<option value=${o} .selected=${(s.thermo_text_position??m("thermo_text_position")??"right")===o}>${this._isHorizontalThermometerSvg(s)?{right:"Bottom",left:"Top",both:"Both"}[o]:o.charAt(0).toUpperCase()+o.slice(1)}</option>`)}
              </select>`)}
            ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                .checked=${s.thermo_show_minor_tick_text??m("thermo_show_minor_tick_text")??!1}
                @change=${o=>i({thermo_show_minor_tick_text:o.target.checked})} />`)}
            ${this._row("Tick font size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                .value=${s.thermo_tick_font_size!=null?String(s.thermo_tick_font_size):""} placeholder="4"
                @change=${o=>{const a=o.target.value;i({thermo_tick_font_size:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Major tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${s.thermo_major_tick_length!=null?String(s.thermo_major_tick_length):""} placeholder="auto (from SVG)"
                @change=${o=>{const a=o.target.value;i({thermo_major_tick_length:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Major tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${s.thermo_major_tick_width!=null?String(s.thermo_major_tick_width):""} placeholder="auto (from SVG)"
                @change=${o=>{const a=o.target.value;i({thermo_major_tick_width:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Minor tick length",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${s.thermo_minor_tick_length!=null?String(s.thermo_minor_tick_length):""} placeholder="auto (from SVG)"
                @change=${o=>{const a=o.target.value;i({thermo_minor_tick_length:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Minor tick thickness",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${s.thermo_minor_tick_width!=null?String(s.thermo_minor_tick_width):""} placeholder="auto (from SVG)"
                @change=${o=>{const a=o.target.value;i({thermo_minor_tick_width:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Grid line color",this._colorPicker(`${n}-tgc`,s.thermo_grid_color,o=>i({thermo_grid_color:o||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Above temperature transparency",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${s.thermo_fill_opacity_above!=null?String(s.thermo_fill_opacity_above):""} placeholder="0.5"
                @change=${o=>{const a=o.target.value;i({thermo_fill_opacity_above:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                .value=${s.thermo_decimals!=null?String(s.thermo_decimals):""} placeholder="1"
                @change=${o=>{const a=o.target.value;i({thermo_decimals:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
            ${this._row("Temperature value color",this._colorPicker(`${n}-ttc`,s.thermo_temp_color,o=>i({thermo_temp_color:o||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Temperature value size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                .value=${s.thermo_temp_font_size!=null?String(s.thermo_temp_font_size):""} placeholder="10"
                @change=${o=>{const a=o.target.value;i({thermo_temp_font_size:a===""?void 0:Number(a)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
      </div>
    `}_extFieldSecGraphSettings(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">

          ${this._row("Type",r`<select class="ec-select" .value=${s.graph_type??m("graph_type")??"bar"}
              @change=${n=>i({graph_type:n.target.value})}>
              ${Ke.map(n=>r`<option value=${n.value} .selected=${(s.graph_type??m("graph_type")??"bar")===n.value}>${n.label}</option>`)}
            </select>`)}
          ${this._row("Show axes",r`<input type="checkbox" .checked=${s.graph_show_axes??m("graph_show_axes")??!0}
              @change=${n=>i({graph_show_axes:n.target.checked||void 0})} />`)}
          ${this._row("Show legend",r`<input type="checkbox" .checked=${s.graph_show_legend??m("graph_show_legend")??!1}
              @change=${n=>i({graph_show_legend:n.target.checked||void 0})} />`)}
          ${this._row("Min value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
              .value=${s.graph_min!=null?String(s.graph_min):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({graph_min:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Max value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
              .value=${s.graph_max!=null?String(s.graph_max):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({graph_max:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="60"
              .value=${s.width!=null?String(s.width):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({width:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="40"
              .value=${s.height!=null?String(s.height):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({height:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${["line","area","state-timeline"].includes(s.graph_type??"")?r`
            ${this._row("History (hours)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="8760"
                .value=${s.graph_hours!=null?String(s.graph_hours):""} placeholder="24"
                @change=${n=>{const o=n.target.value;i({graph_hours:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
            ${this._row("Stroke width",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.5" max="10" step="0.5"
                .value=${s.graph_stroke_width!=null?String(s.graph_stroke_width):""} placeholder="1.5"
                @change=${n=>{const o=n.target.value;i({graph_stroke_width:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
            ${s.graph_type==="area"?this._row("Fill opacity",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${s.graph_fill_opacity!=null?String(s.graph_fill_opacity):""} placeholder="0.2"
                @change=${n=>{const o=n.target.value;i({graph_fill_opacity:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`):_}
          `:_}
      </div>
    `}_extFieldSecGraphSeries(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Series — drag to reorder</div>
          ${(s.graph_series??[]).length===0?r`<p class="ec-empty">No series — click "+ Series".</p>`:(s.graph_series??[]).map((n,o)=>this._itemCard({dragKey:`egs:${e}:${t}:${o}`,icon:"mdi:chart-line",label:n.label||n.entity||`Series ${o+1}`,sub:n.entity?`Series ${o+1}`:"No entity selected",selected:o===this._selSeries,onClick:()=>{this._selSeries=o,this._navPush(`egs:${o}`,n.label||n.entity||`Series ${o+1}`)},actions:r`
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${a=>{a.stopPropagation();const l=(s.graph_series??[]).filter((c,p)=>p!==o);i({graph_series:l.length?l:void 0})}}>✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>i({graph_series:[...s.graph_series??[],{}]})}>+ Series</button>
      </div>
    `}_extFieldSecGraphSeriesItem(e,t,s,i){const n=l=>this._updateExtField(e,t,l),o=`ext${e}-f${t}`,a=(s.graph_series??[])[i];return a?r`
      <div class="ec-section">
              ${this._entitySelector({entity:a.entity,onEntity:l=>{const c=[...s.graph_series??[]];c[i]={...c[i],entity:l},n({graph_series:c})},attribute:a.attribute,onAttribute:l=>{const c=[...s.graph_series??[]];c[i]={...c[i],attribute:l},n({graph_series:c})}})}
               ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${a.label??""} placeholder="(from entity)"
                  @change=${l=>{const c=[...s.graph_series??[]];c[i]={...c[i],label:l.target.value||void 0},n({graph_series:c})}} />`)}
              ${this._row("Color",this._colorPicker(`${o}-s${i}-col`,a.color,l=>{const c=[...s.graph_series??[]];c[i]={...c[i],color:l},n({graph_series:c})},{clearTitle:"Reset to palette color"}))}
              ${this._row("Stat period",r`<select class="ec-select" .value=${a.stat_period??""}
                  @change=${l=>{const c=[...s.graph_series??[]];c[i]={...c[i],stat_period:l.target.value||void 0},n({graph_series:c})}}>
                  <option value="">Live state</option>
                  <optgroup label="Calendar">
                    <option value="today"      .selected=${a.stat_period==="today"}>Today</option>
                    <option value="yesterday"  .selected=${a.stat_period==="yesterday"}>Yesterday</option>
                    <option value="this_week"  .selected=${a.stat_period==="this_week"}>This week</option>
                    <option value="last_week"  .selected=${a.stat_period==="last_week"}>Last week</option>
                    <option value="this_month" .selected=${a.stat_period==="this_month"}>This month</option>
                    <option value="last_month" .selected=${a.stat_period==="last_month"}>Last month</option>
                    <option value="this_year"  .selected=${a.stat_period==="this_year"}>This year</option>
                    <option value="last_year"  .selected=${a.stat_period==="last_year"}>Last year</option>
                  </optgroup>
                  <optgroup label="Rolling window">
                    <option value="last_30_minutes" .selected=${a.stat_period==="last_30_minutes"}>Last 30 min</option>
                    <option value="last_hour"       .selected=${a.stat_period==="last_hour"}>Last hour</option>
                    <option value="last_n_minutes"  .selected=${a.stat_period==="last_n_minutes"}>Last N minutes</option>
                    <option value="last_n_hours"    .selected=${a.stat_period==="last_n_hours"}>Last N hours</option>
                    <option value="last_n_days"     .selected=${a.stat_period==="last_n_days"}>Last N days</option>
                    <option value="last_n_months"   .selected=${a.stat_period==="last_n_months"}>Last N months</option>
                  </optgroup>
                </select>`)}
              ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(a.stat_period)?this._row(a.stat_period==="last_n_minutes"?"Number of minutes":a.stat_period==="last_n_hours"?"Number of hours":a.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
                  .value=${String(a.stat_period_n??"")} placeholder="e.g. 3"
                  @change=${l=>{const c=parseInt(l.target.value,10),p=[...s.graph_series??[]];p[i]={...p[i],stat_period_n:isNaN(c)||c<1?void 0:c},n({graph_series:p})}} />`):_}
              ${a.stat_period?this._row("Stat type",r`<select class="ec-select" .value=${a.stat_type??m("stat_type")??"sum"}
                  @change=${l=>{const c=[...s.graph_series??[]];c[i]={...c[i],stat_type:l.target.value},n({graph_series:c})}}>
                  <option value="sum"        .selected=${(a.stat_type??m("stat_type")??"sum")==="sum"}>Sum (total)</option>
                  <option value="difference" .selected=${a.stat_type==="difference"}>Difference</option>
                  <option value="mean"       .selected=${a.stat_type==="mean"}>Mean</option>
                  <option value="max"        .selected=${a.stat_type==="max"}>Maximum</option>
                  <option value="min"        .selected=${a.stat_type==="min"}>Minimum</option>
                </select>`):_}
      </div>
    `:r``}_extFieldSecStats(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          ${this._row("Period",r`<select class="ec-select" .value=${s.stat_period??""}
              @change=${n=>{const o=n.target.value,a=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(o);i({stat_period:o||void 0,stat_period_n:a?s.stat_period_n??void 0:void 0,stat_period_start:o==="custom"?s.stat_period_start??void 0:void 0,stat_period_end:o==="custom"?s.stat_period_end??void 0:void 0})}}>
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${s.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${s.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${s.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${s.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${s.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${s.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${s.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${s.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${s.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${s.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${s.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${s.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${s.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${s.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${s.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(s.stat_period)?this._row(s.stat_period==="last_n_minutes"?"Number of minutes":s.stat_period==="last_n_hours"?"Number of hours":s.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
              .value=${String(s.stat_period_n??"")} placeholder="e.g. 3"
              @change=${n=>{const o=parseInt(n.target.value,10);i({stat_period_n:isNaN(o)||o<1?void 0:o})}} />`):_}
          ${s.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input" .value=${s.stat_period_start??""}
              @change=${n=>i({stat_period_start:n.target.value||void 0})} />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input" .value=${s.stat_period_end??""}
              @change=${n=>i({stat_period_end:n.target.value||void 0})} />`)}
          `:_}
          ${s.stat_period?this._row("Stat type",r`<select class="ec-select" .value=${s.stat_type??m("stat_type")??"sum"}
              @change=${n=>i({stat_type:n.target.value})}>
              <option value="sum"        .selected=${(s.stat_type??m("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${s.stat_type==="difference"}>Difference</option>
              <option value="mean"       .selected=${s.stat_type==="mean"}>Mean</option>
              <option value="max"        .selected=${s.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${s.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${s.stat_type==="count"}>Count</option>
              <option value="range"      .selected=${s.stat_type==="range"}>Range</option>
            </select>`):_}
      </div>
    `}_extFieldSecDisplay(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${s.unit??""} placeholder="(from entity)"
              @change=${n=>i({unit:n.target.value})} />`)}
          ${this._row("Decimals",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" max="6"
              .value=${s.decimals!=null?String(s.decimals):""} placeholder="auto"
              @change=${n=>{const o=n.target.value;i({decimals:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Hide below",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${s.hide_below!=null?String(s.hide_below):""} placeholder="(always show)"
              @change=${n=>{const o=n.target.value;i({hide_below:o===""?void 0:Number(o)})}} /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._displayUnit(s.entity,s.unit)?r`<p class="ec-hint">Enter in ${this._displayUnit(s.entity,s.unit)}</p>`:_}
          ${s.entity?.startsWith("virtual:")&&!s.time_until_layout?.length?this._row("Show trigger label",r`<input type="checkbox" .checked=${s.show_time_until_label??!1}
              @change=${n=>i({show_time_until_label:n.target.checked||void 0})} />`):_}
      </div>
    `}_extFieldSecStyle(e,t,s){const i=o=>this._updateExtField(e,t,o),n=`ext${e}-f${t}`;return r`
      <div class="ec-section">
          ${ht(s.type)?_:this._row("Align",r`<select class="ec-select" .value=${s.align??m("align")??"left"}
              @change=${o=>i({align:o.target.value})}>
              ${ne.map(o=>r`<option value=${o} .selected=${(s.align??m("align")??"left")===o}>${o}</option>`)}
            </select>`)}
          ${this._row("Use global text style",r`<input type="checkbox" .checked=${s.style===void 0}
              @change=${o=>{o.target.checked?i({style:void 0}):i({style:{}})}} />`)}
          ${s.style!==void 0?r`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`${n}-st`,s.style,o=>i({style:{...s.style,...o}}),!1)}
          `:_}
          ${this._cssRow(s.extra_css,o=>i({extra_css:o}))}
      </div>
    `}_extFieldSecActions(e,t,s){const i=n=>this._updateExtField(e,t,n);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Actions</div>
          ${this._actionRows({tap_action:s.tap_action,hold_action:s.hold_action,double_tap_action:s.double_tap_action},n=>i(n))}
      </div>
    `}_renderCanvasRibbonPanel(){const e=this._navPath;return e.length===0?this._canvasSectionMenu():this._canvasSection(e[0].key)}_canvasSectionMenu(){return r`
      ${this._navBtn("sec:mode","Placement Mode","Precision or Grid","mdi:grid")}
      ${this._navBtn("sec:size","Canvas Size","Base size, fit & extend","mdi:aspect-ratio")}
      ${this._navBtn("sec:box","Canvas Box","Canvas background & border","mdi:image-frame")}
      ${this._navBtn("sec:bg","Background","Source, images & EV count","mdi:image-multiple")}
    `}_canvasSection(e){switch(e){case"sec:mode":return this._canvasSecMode();case"sec:size":return this._canvasSecSize();case"sec:box":return this._canvasSecBox();case"sec:bg":return r`<div class="ec-section">${this._renderBackgroundControls()}</div>`;default:return r``}}_canvasSecMode(){const e=this._config?.canvas??{},t=e.layout_mode==="grid";return r`
      <div class="ec-section">
          <div class="ec-mode-tiles">
            <button type="button" class="ec-mode-tile${t?"":" active"}"
              @click=${()=>this._setLayoutMode("precision")}
            >
              <ha-icon icon="mdi:crosshairs-gps"></ha-icon>
              <span>Precision</span>
            </button>
            <button type="button" class="ec-mode-tile${t?" active":""}"
              @click=${()=>this._setLayoutMode("grid")}
            >
              <ha-icon icon="mdi:grid"></ha-icon>
              <span>Grid</span>
            </button>
          </div>

          ${e.layout_mode==="grid"?r`
            ${this._row("Grid columns",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(e.grid?.columns??10)}
                @change=${s=>{const i=Math.max(1,Number(s.target.value)||1);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},columns:i}})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

            ${this._row("Grid rows",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(e.grid?.rows??15)}
                @change=${s=>{const i=Math.max(1,Number(s.target.value)||1);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},rows:i}})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

            ${this._row("Card padding (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                .value=${String(e.grid?.padding??0)}
                @change=${s=>{const i=Math.max(0,Number(s.target.value)||0);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},padding:i}})}}
              /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
          `:_}
      </div>
    `}_canvasSecSize(){const e=this._config?.canvas??{};return r`
      <div class="ec-section">
          ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${e.width!=null?String(e.width):""}
              placeholder="image width"
              @change=${t=>{const s=t.target.value;this._updateCanvas({width:s===""?void 0:Number(s)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${e.height!=null?String(e.height):""}
              placeholder="from aspect"
              @change=${t=>{const s=t.target.value;this._updateCanvas({height:s===""?void 0:Number(s)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Fit",r`<select class="ec-select"
              .value=${e.fit??m("background_fit")??"cover"}
              @change=${t=>this._updateCanvas({fit:t.target.value})}
            >
              <option value="cover" .selected=${(e.fit??m("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${e.fit==="contain"}>contain</option>
            </select>`)}

          <div class="ec-subsection-title">Extend (px)</div>

          ${this._row("Top",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.top!=null?String(e.extend.top):""}
              placeholder="0"
              @change=${t=>{const s=t.target.value;this._updateCanvas({extend:{...e.extend,top:s===""?void 0:Number(s)}})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Right",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.right!=null?String(e.extend.right):""}
              placeholder="0"
              @change=${t=>{const s=t.target.value;this._updateCanvas({extend:{...e.extend,right:s===""?void 0:Number(s)}})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Bottom",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.bottom!=null?String(e.extend.bottom):""}
              placeholder="0"
              @change=${t=>{const s=t.target.value;this._updateCanvas({extend:{...e.extend,bottom:s===""?void 0:Number(s)}})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

          ${this._row("Left",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.left!=null?String(e.extend.left):""}
              placeholder="0"
              @change=${t=>{const s=t.target.value;this._updateCanvas({extend:{...e.extend,left:s===""?void 0:Number(s)}})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}
      </div>
    `}_canvasSecBox(){const e=this._config?.canvas??{};return r`
      <div class="ec-section">
          ${this._boxRows("cv",e.box??{},t=>this._updateCanvas({box:{...e.box,...t}}))}
      </div>
    `}_renderBackgroundControls(){if(!this._config)return r``;const e=this._config.background??{},t=e.source??"auto";return r`
          <div class="ec-subsection-title">Background</div>

          ${this._row("Source",r`<select class="ec-select"
              .value=${t}
              @change=${s=>this._updateBackground({source:s.target.value})}
            >
              <option value="auto" .selected=${t==="auto"}>auto (sun)</option>
              <option value="day" .selected=${t==="day"}>day</option>
              <option value="night" .selected=${t==="night"}>night</option>
              <option value="entity" .selected=${t==="entity"}>entity</option>
            </select>`)}

          ${t==="auto"||t===void 0?this._entitySelector({label:"Sun entity",entity:e.sun_entity,onEntity:s=>this._updateBackground({sun_entity:s}),attribute:e.sun_attribute,onAttribute:s=>this._updateBackground({sun_attribute:s})}):_}

          ${t==="entity"?this._entitySelector({label:"Mode entity",entity:e.mode_entity,onEntity:s=>this._updateBackground({mode_entity:s}),attribute:e.mode_attribute,onAttribute:s=>this._updateBackground({mode_attribute:s})}):_}

          ${this._row("Background fit",r`<select class="ec-select"
              .value=${e.fit??m("background_fit")??"cover"}
              @change=${s=>this._updateBackground({fit:s.target.value})}
            >
              <option value="cover" .selected=${(e.fit??m("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${e.fit==="contain"}>contain</option>
            </select>`)}

          ${this._row("EV count",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
              .value=${this._config.ev_count!=null?String(this._config.ev_count):""}
              placeholder="0"
              @change=${s=>{const i=s.target.value;this._emit({...this._config,ev_count:i===""?void 0:Number(i)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

          <div class="ec-subsection-title">Images</div>
          <p class="ec-hint">One Day and one Night image per EV variant — raising EV count adds rows.</p>

          ${(()=>{const s=Math.max(0,this._config?.ev_count??0),i=Array.from({length:s+1},(n,o)=>String(o));return["day","night"].map(n=>r`
              <div class="ec-subsection-title ec-subsection-title--minor">${n}</div>
              ${i.map(o=>this._row(`${n} / ${o} EV`,r`<input class="ec-input" type="text"
                  .value=${e.images?.[n]?.[o]??""}
                  placeholder="https://…"
                  @change=${a=>this._setBgImage(n,o,a.target.value)}
                />`))}
            `)})()}
    `}_renderTemplatesRibbonPanel(){const e=this._navPath;return e.length===0?r`
        ${this._navBtn("sec:export","Export Template","Save the current layout as a file","mdi:download")}
        ${this._navBtn("sec:import","Import Template","Load a saved layout file","mdi:upload")}
        ${this._navBtn("sec:varexport","Export Control Variants","Save this card's custom variants as a file","mdi:shape-plus")}
        ${this._navBtn("sec:varimport","Import Control Variants","Merge custom variants from a file","mdi:shape-outline")}
      `:e[0].key==="sec:import"?this._templatesSecImport():e[0].key==="sec:varexport"?this._templatesSecVariantExport():e[0].key==="sec:varimport"?this._templatesSecVariantImport():this._templatesSecExport()}_templatesSecVariantExport(){const e=this._config?.defaults?.control_variants??{},t=Object.values(e).reduce((s,i)=>s+(i?.length??0),0);return r`
      <div class="ec-section">
        <p class="ec-hint">
          Exports only the custom control variants built in <b>Settings ▸ Global Defaults ▸ Control Default ▸ Variant Builder</b> —
          not the card layout. The file uses the same shape as Mosaic's built-in variant registry.
        </p>
        ${t===0?r`<p class="ec-empty">No custom variants to export.</p>`:r`
            ${this._row("Name",r`<input class="ec-input" type="text"
                .value=${this._templateName}
                placeholder="My Control Variants"
                @input=${s=>{this._templateName=s.target.value}}
              />`)}
            <p class="ec-hint">${t} variant${t===1?"":"s"} across ${Object.keys(e).length} control type${Object.keys(e).length===1?"":"s"}.</p>
            <button class="ec-btn-add" style="width:100%;"
              @click=${()=>Ao(To(e,this._templateName||"Mosaic Control Variants"))}
            >⬇ Download control variants</button>
          `}
      </div>
    `}_templatesSecVariantImport(){return this._config?r`
      <div class="ec-section">
        <p class="ec-hint">
          Merges variants from a file into this card. Unlike <b>Import Template</b>, this
          <b>does not touch your layout</b> — it only adds control variants. An incoming variant whose
          id is already used is imported under a new id, so nothing is overwritten.
        </p>
        <input type="file" accept=".json,application/json" style="display:none" id="ec-variant-import"
          @change=${e=>{const t=e.target.files?.[0];if(e.target.value="",!t||!this._config)return;const s=new FileReader;s.onload=i=>{const{pack:n,error:o}=Do(i.target?.result);if(o||!n){this._variantImportError=o??"Unknown error.";return}const a=this._config?.defaults?.control_variants??{},{merged:l,added:c,renamed:p}=Bo(a,n);if(c===0){this._variantImportError="That file contained no control variants.";return}const u=p>0?`Import ${c} variant(s) from "${n.name}"?

${p} had an id already in use and will be imported under a new id.`:`Import ${c} variant(s) from "${n.name}"?`;window.confirm(u)&&(this._variantImportError="",this._updateDefaults({control_variants:l}),Ce(l))},s.readAsText(t)}}
        />
        <button class="ec-btn-add" style="width:100%;"
          @click=${()=>this.shadowRoot?.querySelector("#ec-variant-import")?.click()}
        >⬆ Import from file</button>
        ${this._variantImportError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._variantImportError}</p>`:_}
      </div>
    `:r``}_templatesSecExport(){return this._config?r`
      <div class="ec-section">
          ${this._row("Name",r`<input class="ec-input" type="text"
              .value=${this._templateName}
              placeholder="My Energy Dashboard"
              @input=${e=>{this._templateName=e.target.value}}
            />`)}
          <button class="ec-btn-add" style="width:100%;margin-bottom:12px;"
            @click=${()=>{if(!this._config)return;const e=zo(this._config,this._templateName||"Energy Canvas Template");Fo(e)}}
          >⬇ Download template</button>
      </div>
    `:r``}_templatesSecImport(){return this._config?r`
      <div class="ec-section">
          <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
            Importing will replace the entire card configuration.
          </p>
          <input type="file" accept=".json,application/json"
            style="display:none"
            id="ec-template-import"
            @change=${e=>{const t=e.target.files?.[0];if(!t||!this._config)return;const s=new FileReader;s.onload=i=>{const n=i.target?.result,{template:o,error:a}=Po(n);if(a||!o){this._templateError=a??"Unknown error.";return}window.confirm(`Import "${o.name}"?

This will replace your entire card configuration.`)&&(this._templateError="",this._emit(Mo(o,this._config.type)))},s.readAsText(t),e.target.value=""}}
          />
          <button class="ec-btn-add" style="width:100%;"
            @click=${()=>{this.shadowRoot?.querySelector("#ec-template-import")?.click()}}
          >⬆ Import from file</button>
          ${this._templateError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._templateError}</p>`:_}
      </div>
    `:r``}_renderVirtualsRibbonPanel(){const e=this._navPath,t=this._virtuals();if(e.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <div style="display:flex;gap:4px;">
            ${this._virtualClipboard?r`<button class="ec-btn-add" @click=${this._pasteVirtual} title="Paste virtual">⎘ Paste</button>`:_}
            <button class="ec-btn-add" @click=${this._addVirtual}>+ Virtual</button>
          </div>
        </div>
        ${t.length===0?r`<p class="ec-empty">No virtuals — click "+ Virtual" to add one.</p>`:t.map((o,a)=>this._itemCard({dragKey:`virt:${a}`,icon:o.op==="time_until"?"mdi:progress-clock":"mdi:memory",label:o.name||o.id,sub:C._VIRTUAL_OPS.find(l=>l.value===o.op)?.label??o.op,selected:a===this._selVirtual,onClick:()=>{this._selVirtual=a,this._navPush(`virt:${a}`,o.name||o.id)},actions:r`
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._copyVirtual(a)}}
                  title="Copy">⎘</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeVirtual(a)}}
                  title="Remove">✕</button>
              `}))}
      `;const s=this._selVirtual,i=t[s];if(!i)return r``;if(e.length===1)return r`
        ${this._navBtn("sec:defaults","Virtual Defaults","Name, operation, unit","mdi:tune")}
        ${i.op==="time_until"?r`
          ${this._navBtn("sec:tu","Time Until Settings","Mode, entities, capacity, labels","mdi:progress-clock")}
          ${this._navBtn("sec:trig","Extra Triggers","Up to 2 labelled thresholds","mdi:flag-outline")}
        `:i.op==="statistic"?r`
          ${this._navBtn("sec:value","Value","Source entity + attribute","mdi:database-outline")}
          ${this._navBtn("sec:stats","HA Statistics","Period, stat type, advanced characteristic","mdi:chart-box-outline")}
        `:r`
          <div class="ec-subsection-title">Inputs (in order) — drag to reorder</div>
          ${i.inputs.length===0?r`<p class="ec-empty">No inputs — click "+ Input".</p>`:i.inputs.map((o,a)=>this._itemCard({dragKey:`vin:${s}:${a}`,icon:"mdi:import",label:o||`Input ${a+1}`,sub:o?`Input ${a+1}`:"No entity selected",selected:a===this._selVirtualInput,onClick:()=>{this._selVirtualInput=a,this._navPush(`vin:${a}`,o||`Input ${a+1}`)},actions:r`
                  <button class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeVirtualInput(s,a)}}
                    title="Remove input">✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:4px;"
            @click=${()=>this._addVirtualInput(s)}>+ Input</button>
        `}
      `;const n=e[1].key;return n.startsWith("vin:")?this._virtualSecInput(s,this._selVirtualInput):e.length===3&&n==="sec:trig"&&e[2].key.startsWith("trig:")?this._virtualSecTriggerItem(s,this._selTrigger):this._virtualSection(s,i,n)}_virtualSecInput(e,t){const s=this._virtuals()[e],i=s?.inputs[t];return!s||i===void 0?r``:r`
      <div class="ec-section">
          ${this._row("Entity",r`<ha-entity-picker
              .hass=${this.hass}
              .value=${i}
              allow-custom-entity
              @value-changed=${n=>this._updateVirtualInput(e,t,n.detail.value)}
            ></ha-entity-picker>`)}
      </div>
    `}_virtualSection(e,t,s){return s==="sec:defaults"?this._virtualSecDefaults(e,t):s==="sec:tu"?this._virtualSecTu(e,t):s==="sec:trig"?this._virtualSecTrig(e,t):s==="sec:value"?this._virtualSecValue(e,t):s==="sec:stats"?this._virtualSecStats(e,t):r``}_virtualSecValue(e,t){return r`
      <div class="ec-section">
          ${this._entitySelector({entity:t.entity,onEntity:s=>this._updateVirtual(e,{entity:s}),attribute:t.attribute,onAttribute:s=>this._updateVirtual(e,{attribute:s})})}
      </div>
    `}_virtualSecStats(e,t){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Value entity at it.</p>
          ${this._row("Period",r`<select class="ec-select"
              .value=${t.stat_period??""}
              @change=${s=>{const i=s.target.value,n=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(i);this._updateVirtual(e,{stat_period:i||void 0,stat_period_n:n?t.stat_period_n??void 0:void 0,stat_period_start:i==="custom"?t.stat_period_start??void 0:void 0,stat_period_end:i==="custom"?t.stat_period_end??void 0:void 0})}}
            >
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${t.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${t.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${t.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${t.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${t.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${t.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${t.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${t.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${t.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${t.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${t.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${t.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${t.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${t.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${t.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(t.stat_period)?this._row(t.stat_period==="last_n_minutes"?"Number of minutes":t.stat_period==="last_n_hours"?"Number of hours":t.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
              .value=${String(t.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${s=>{const i=parseInt(s.target.value,10);this._updateVirtual(e,{stat_period_n:isNaN(i)||i<1?void 0:i})}}
            />`):_}
          ${t.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input"
              .value=${t.stat_period_start??""}
              @change=${s=>this._updateVirtual(e,{stat_period_start:s.target.value||void 0})}
            />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input"
              .value=${t.stat_period_end??""}
              @change=${s=>this._updateVirtual(e,{stat_period_end:s.target.value||void 0})}
            />`)}
          `:_}
          ${t.stat_period?this._row("Stat type",r`<select class="ec-select"
              .value=${t.stat_type??m("stat_type")??"sum"}
              @change=${s=>this._updateVirtual(e,{stat_type:s.target.value})}
            >
              <option value="sum"        .selected=${(t.stat_type??m("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${t.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${t.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${t.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${t.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${t.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${t.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",r`<select class="ec-select"
              .value=${t.stat_characteristic??""}
              @change=${s=>{const i=s.target.value;this._updateVirtual(e,{stat_characteristic:i||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(s=>r`
                <optgroup label="${s}">
                  ${Qs.filter(i=>i.group===s).map(i=>r`
                    <option value=${i.value} .selected=${t.stat_characteristic===i.value}>
                      ${i.label}${i.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${t.stat_characteristic==="percentile"?this._row("Percentile (1–99)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max="99"
              .value=${t.stat_percentile!=null?String(t.stat_percentile):""} placeholder="50"
              @change=${s=>{const i=s.target.value;this._updateVirtual(e,{stat_percentile:i===""?void 0:Number(i)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`):_}
          ${this._row("Max age (hours)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${t.stat_max_age_hours!=null?String(t.stat_max_age_hours):""} placeholder="(none)"
              @change=${s=>{const i=s.target.value;this._updateVirtual(e,{stat_max_age_hours:i===""?void 0:Number(i)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
          ${this._row("Sampling size",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
              .value=${t.stat_sampling_size!=null?String(t.stat_sampling_size):""} placeholder="(none)"
              @change=${s=>{const i=s.target.value;this._updateVirtual(e,{stat_sampling_size:i===""?void 0:Number(i)})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
          ${t.stat_characteristic&&t.entity?r`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const s=xe(t.entity,t.stat_characteristic,t.stat_max_age_hours,t.stat_sampling_size,t.stat_percentile);navigator.clipboard.writeText(s)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${xe(t.entity,t.stat_characteristic,t.stat_max_age_hours,t.stat_sampling_size,t.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_virtualSecDefaults(e,t){return r`
      <div class="ec-section">
              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name}
                  @change=${s=>this._updateVirtual(e,{name:s.target.value})}
                />`)}

              ${this._row("Operation",r`<select class="ec-select"
                  .value=${t.op}
                  @change=${s=>this._updateVirtual(e,{op:s.target.value})}
                >
                  ${C._VIRTUAL_OPS.map(s=>r`<option value=${s.value} .selected=${t.op===s.value}>${s.label}</option>`)}
                </select>`)}

              ${t.op!=="time_until"?this._row("Unit override",r`<input class="ec-input" type="text" .value=${t.unit??""}
                  placeholder="(from inputs[0])"
                  @change=${s=>{const i=s.target.value;this._updateVirtual(e,{unit:i||void 0})}}
                />`):_}
      </div>
    `}_virtualSecTu(e,t){return r`
      <div class="ec-section">
                ${this._row("Mode",r`<select class="ec-select"
                    .value=${t.mode??m("virtual_mode")??"percent"}
                    @change=${s=>this._updateVirtual(e,{mode:s.target.value})}
                  >
                    <option value="percent"  .selected=${(t.mode??m("virtual_mode")??"percent")==="percent"}>% based</option>
                    <option value="absolute" .selected=${t.mode==="absolute"}>Absolute value</option>
                  </select>`)}

                ${this._row((t.mode??m("virtual_mode")??"percent")==="percent"?"% entity":"Current value entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.value_entity??t.pct_entity??""}
                    allow-custom-entity
                    @value-changed=${s=>this._updateVirtual(e,{value_entity:s.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.rate_entity??t.power_entity??""}
                    allow-custom-entity
                    @value-changed=${s=>this._updateVirtual(e,{rate_entity:s.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate unit override",r`<input class="ec-input" type="text"
                    .value=${t.rate_unit_override??""}
                    placeholder="auto-detect from entity"
                    @change=${s=>{const i=s.target.value;this._updateVirtual(e,{rate_unit_override:i||void 0})}}
                  />`)}
                <p class="ec-hint">Auto-detected from the rate entity; only set this if auto-detection fails.</p>

                ${this._row("Recalc above (rate)",r`<input class="ec-input" type="number" step="any"
                    .value=${t.recalc_above!=null?String(t.recalc_above):""}
                    placeholder="e.g. 100"
                    @change=${s=>{const i=parseFloat(s.target.value);this._updateVirtual(e,{recalc_above:Number.isFinite(i)?i:void 0})}}
                  />`)}

                ${this._row("Recalc below (rate)",r`<input class="ec-input" type="number" step="any"
                    .value=${t.recalc_below!=null?String(t.recalc_below):""}
                    placeholder="e.g. -160"
                    @change=${s=>{const i=parseFloat(s.target.value);this._updateVirtual(e,{recalc_below:Number.isFinite(i)?i:void 0})}}
                  />`)}
                <p class="ec-hint">Only recompute Time Until when the raw rate reading is above and/or below these (signed, in the rate entity's units). Inside the band the last value is frozen. Leave blank to always recalculate.</p>

                ${this._row("Capacity entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.capacity_entity??""}
                    allow-custom-entity
                    @value-changed=${s=>this._updateVirtual(e,{capacity_entity:s.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row(((t.mode??m("virtual_mode")??"percent")==="percent","Capacity (Manual)"),r`<input class="ec-input" type="number" min="0" step="0.1"
                    .value=${String(t.capacity??t.capacity_kwh??"")}
                    placeholder="e.g. 13.5"
                    @change=${s=>{const i=parseFloat(s.target.value);this._updateVirtual(e,{capacity:Number.isFinite(i)?i:void 0})}}
                  />`)}

                ${this._row("Maximum label",r`<input class="ec-input" type="text"
                    .value=${t.label_max??t.label_full??""}
                    placeholder="Full"
                    @change=${s=>{const i=s.target.value;this._updateVirtual(e,{label_max:i||void 0})}}
                  />`)}

                ${this._row("Minimum label",r`<input class="ec-input" type="text"
                    .value=${t.label_min??t.label_empty??""}
                    placeholder="Empty"
                    @change=${s=>{const i=s.target.value;this._updateVirtual(e,{label_min:i||void 0})}}
                  />`)}
      </div>
    `}_virtualSecTrig(e,t){return r`
      ${(t.triggers??[]).length===0?r`<p class="ec-empty">No extra triggers — click "+ Trigger".</p>`:(t.triggers??[]).map((s,i)=>this._itemCard({dragKey:`trig:${e}:${i}`,icon:"mdi:flag-outline",label:s.label||`Trigger ${i+1}`,sub:`${s.percent??s.value}${(t.mode??m("virtual_mode")??"percent")==="percent"?"%":""}`,selected:i===this._selTrigger,onClick:()=>{this._selTrigger=i,this._navPush(`trig:${i}`,s.label||`Trigger ${i+1}`)},actions:r`
              <button class="ec-btn-remove" title="Remove trigger"
                @click=${n=>{n.stopPropagation();const o=(t.triggers??[]).filter((a,l)=>l!==i);this._updateVirtual(e,{triggers:o.length?o:void 0})}}>✕</button>
            `}))}
      ${(t.triggers??[]).length<2?r`
        <button class="ec-btn-add" style="margin-top:6px"
          @click=${()=>{const s=[...t.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(e,{triggers:s})}}>+ Trigger</button>
      `:_}
      <p class="ec-hint" style="margin-top:10px">Auto-switches to the nearest trigger ahead in the current direction.</p>
    `}_virtualSecTriggerItem(e,t){const s=this._virtuals()[e],i=s?.triggers?.[t];return!s||!i?r``:r`
      <div class="ec-section">
          ${this._row((s.mode??m("virtual_mode")??"percent")==="percent"?"Percent":"Value",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
              step="${(s.mode??m("virtual_mode")??"percent")==="percent"?"1":"any"}"
              .value=${String(i.percent??i.value)}
              @change=${n=>{const o=parseFloat(n.target.value),a=[...s.triggers??[]];a[t]={...a[t],value:Number.isFinite(o)?o:i.value},this._updateVirtual(e,{triggers:a})}}
            /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${n=>this._stepNumInput(n,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${n=>this._stepNumInput(n,1)}>+</button></span></span>`)}
          ${this._row("Label",r`<input class="ec-input" type="text" .value=${i.label}
              placeholder="Label"
              @change=${n=>{const o=[...s.triggers??[]];o[t]={...o[t],label:n.target.value},this._updateVirtual(e,{triggers:o})}}
            />`)}
      </div>
    `}_renderZonesRibbonPanel(){const e=this._navPath,t=this._zones();if(e.length===0)return r`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Invisible hotspot regions that trigger actions when tapped. Drag the dashed handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addZone}>+ Clickable Zone</button>
        </div>
        ${t.length===0?r`<p class="ec-empty">No clickable zones — click "+ Clickable Zone" to add one.</p>`:t.map((n,o)=>this._itemCard({dragKey:`zone:${o}`,icon:"mdi:gesture-tap-box",label:n.name??n.id,sub:`${n.width}×${n.height}px`,selected:o===this._selZone,onClick:()=>{this._selZone=o,this._navPush(`zone:${o}`,n.name??n.id)},actions:r`
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeZone(o)}}
                  title="Remove">✕</button>
              `}))}
      `;const s=this._selZone,i=t[s];return i?e.length===1?r`
        ${this._navBtn("sec:defaults","Zone Defaults","Name, position, anchor, size, overlay","mdi:tune")}
        ${this._navBtn("sec:actions","Actions","Tap · hold · double tap","mdi:gesture-tap")}
      `:e[1].key==="sec:actions"?this._zoneSecActions(s,i):this._zoneSecDefaults(s,i):r``}_zoneSecDefaults(e,t){return r`
      <div class="ec-section">
              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${s=>this._updateZone(e,{name:s.target.value||void 0})}
                />`)}

              ${this._row("X (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                  .value=${String(t.position.x)}
                  @change=${s=>this._updateZone(e,{position:{...t.position,x:Number(s.target.value)}})}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

              ${this._row("Y (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                  .value=${String(t.position.y)}
                  @change=${s=>this._updateZone(e,{position:{...t.position,y:Number(s.target.value)}})}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

              ${this._row("Anchor",r`<select class="ec-select"
                  .value=${t.anchor??m("anchor")??"top-left"}
                  @change=${s=>this._updateZone(e,{anchor:s.target.value})}
                >
                  ${qe.map(s=>r`<option value=${s} .selected=${(t.anchor??m("anchor")??"top-left")===s}>${Ye[s]}</option>`)}
                </select>`)}

              ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.width)}
                  @change=${s=>this._updateZone(e,{width:Math.max(1,Number(s.target.value))})}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

              ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.height)}
                  @change=${s=>this._updateZone(e,{height:Math.max(1,Number(s.target.value))})}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

              ${this._row("Overlay color",r`<div class="ec-color-row">
                  <input class="ec-input" type="text" .value=${t.color??""}
                    placeholder="rgba(0,212,255,0.15)"
                    style="flex:1"
                    @change=${s=>{const i=s.target.value;this._updateZone(e,{color:i||void 0})}}
                  />
                  <button class="ec-btn-clear" @click=${()=>this._updateZone(e,{color:void 0})} title="Clear">✕</button>
                </div>`)}

              ${this._row("Radius (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                  .value=${t.radius!=null?String(t.radius):""}
                  placeholder="0"
                  @change=${s=>{const i=s.target.value;this._updateZone(e,{radius:i===""?void 0:Number(i)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
      </div>
    `}_zoneSecActions(e,t){return r`
      <div class="ec-section">
        ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},s=>this._updateZone(e,s))}
      </div>
    `}_renderFlowsRibbonPanel(){const e=this._navPath,t=this._flows();if(e.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addFlow}>+ Flow Line</button>
        </div>
        ${t.length===0?r`<p class="ec-empty">No animated flow lines — click "+ Flow Line" to add one.</p>`:t.map((n,o)=>this._itemCard({dragKey:`flow:${o}`,icon:"mdi:chart-timeline-variant",label:n.name??n.id,sub:`${n.style??"dashes"}${n.entity?" · "+(n.entity.startsWith("virtual:")?this._virtuals().find(a=>`virtual:${a.id}`===n.entity)?.name??n.entity:n.entity):""}`,selected:o===this._selFlow,onClick:()=>{this._selFlow=o,this._selPoint=-1,this._navPush(`flow:${o}`,n.name??n.id)},actions:r`
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeFlow(o)}}
                  title="Remove flow">✕</button>
              `}))}
      `;const s=t[this._selFlow];if(!s)return r``;if(e.length===1)return r`
        ${this._navBtn("sec:defaults","Flow Defaults","Name, entity, min display power, invert","mdi:tune")}
        ${this._navBtn("sec:speed","Speed","Slowest / fastest value → animation speed","mdi:speedometer")}
        ${this._navBtn("sec:style","Line Style","Style, colors, width, curve","mdi:brush-variant")}
        ${this._renderFlowPoints(s)}
      `;const i=e[1].key;if(i.startsWith("pt:"))return this._flowSecPoint(this._selFlow,this._selPoint);switch(i){case"sec:speed":return this._flowSecSpeed(s);case"sec:style":return this._flowSecStyle(s);default:return this._flowSecDefaults(s)}}_flowSecDefaults(e){return r`
      <div class="ec-section">
              ${this._row("Name",r`<input class="ec-input" type="text" .value=${e.name??""}
                  @change=${t=>this._updateFlow(this._selFlow,{name:t.target.value})}
                />`)}

              ${this._row("Entity",e.entity?.startsWith("virtual:")?r`<div style="display:flex;gap:4px;align-items:center;">
                      <span class="ec-input" style="flex:1;opacity:0.8;">
                        ${this._virtuals().find(t=>`virtual:${t.id}`===e.entity)?.name??e.entity}
                      </span>
                      <button class="ec-btn-clear"
                        @click=${()=>this._updateFlow(this._selFlow,{entity:void 0})}
                        title="Switch to real entity">✕</button>
                    </div>`:r`<ha-entity-picker
                      .hass=${this.hass}
                      .value=${e.entity??""}
                      allow-custom-entity
                      @value-changed=${t=>this._updateFlow(this._selFlow,{entity:t.detail.value})}
                    ></ha-entity-picker>`)}
              ${!e.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
                  .value=${""}
                  @change=${t=>{const s=t.target.value;s&&this._updateFlow(this._selFlow,{entity:s}),t.target.value=""}}
                >
                  <option value="">(pick a virtual)</option>
                  ${this._virtuals().map(t=>r`<option value=${"virtual:"+t.id}>${t.name}</option>`)}
                </select>`):_}

              ${this._row(`Min display power (${this._config?.defaults?.power_unit??"W"})`,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0" step="1"
                  .value=${e.min_power!=null?String(e.min_power):""}
                  placeholder="e.g. 5"
                  title="Hide flow when entity value is below this threshold — in your global power unit"
                  @change=${t=>{const s=t.target.value;this._updateFlow(this._selFlow,{min_power:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

              ${this._row("Invert direction",r`<input type="checkbox"
                  .checked=${e.invert??!1}
                  @change=${t=>{const s=t.target.checked;this._updateFlow(this._selFlow,{invert:s||void 0})}}
                />`)}
      </div>
    `}_flowSecSpeed(e){const t=e.speed_min_duration??m("flow_speed_min_duration")??5,s=e.speed_max_duration??m("flow_speed_max_duration")??1;return r`
      <div class="ec-section">
              ${this._row(`Slowest animation value (${this._config?.defaults?.power_unit??"W"})`,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                  .value=${e.speed_min_value!=null?String(e.speed_min_value):""}
                  placeholder="e.g. 100"
                  title="Entity value at which animation is slowest"
                  @change=${i=>{const n=i.target.value;this._updateFlow(this._selFlow,{speed_min_value:n===""?void 0:Number(n)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}

              ${this._row(`Fastest animation value (${this._config?.defaults?.power_unit??"W"})`,r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0"
                  .value=${e.speed_max_value!=null?String(e.speed_max_value):""}
                  placeholder="e.g. 5000"
                  title="Entity value at which animation is fastest"
                  @change=${i=>{const n=i.target.value;this._updateFlow(this._selFlow,{speed_max_value:n===""?void 0:Number(n)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}

              ${this._row("Speed",r`<div class="ec-dual-range">
                  <span class="ec-dual-range-label">Slowest</span>
                  <div class="ec-dual-range-track">
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(t)}
                      style="direction:rtl"
                      @input=${i=>{const n=Number(i.target.value),o=e.speed_max_duration??m("flow_speed_max_duration")??1;this._updateFlow(this._selFlow,{speed_min_duration:Math.max(n,o)})}}
                    />
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(s)}
                      style="direction:rtl"
                      @input=${i=>{const n=Number(i.target.value),o=e.speed_min_duration??m("flow_speed_min_duration")??5;this._updateFlow(this._selFlow,{speed_max_duration:Math.min(n,o)})}}
                    />
                  </div>
                  <span class="ec-dual-range-label">Fastest</span>
                </div>`)}

              ${this._row("Duration (s)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="0.1" step="0.1"
                  .value=${e.duration!=null?String(e.duration):""}
                  placeholder="2"
                  @change=${i=>{const n=i.target.value;this._updateFlow(this._selFlow,{duration:n===""?void 0:Number(n)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${i=>this._stepNumInput(i,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${i=>this._stepNumInput(i,1)}>+</button></span></span>`)}
      </div>
    `}_flowSecStyle(e){return r`
      <div class="ec-section">
              ${this._row("Style",r`<select class="ec-select"
                  .value=${e.style??m("flow_style")??"dashes"}
                  @change=${t=>this._updateFlow(this._selFlow,{style:t.target.value})}
                >
                  ${C._FLOW_STYLES.map(t=>r`<option value=${t} .selected=${(e.style??m("flow_style")??"dashes")===t}>${t}</option>`)}
                </select>`)}

              ${this._row("Forward color",this._colorPicker(`flow-${this._selFlow}-fwd`,e.forward_color??e.color,t=>this._updateFlow(this._selFlow,{forward_color:t})))}

              ${this._row("Reverse color",this._colorPicker(`flow-${this._selFlow}-rev`,e.reverse_color,t=>this._updateFlow(this._selFlow,{reverse_color:t})))}

              ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${e.width!=null?String(e.width):""}
                  placeholder="3"
                  @change=${t=>{const s=t.target.value;this._updateFlow(this._selFlow,{width:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

              ${this._row("Particle count",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1"
                  .value=${e.particle_count!=null?String(e.particle_count):""}
                  placeholder="6"
                  @change=${t=>{const s=t.target.value;this._updateFlow(this._selFlow,{particle_count:s===""?void 0:Number(s)})}}
                /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`)}

              ${this._row("Curve",r`<select class="ec-select"
                  .value=${e.curve??m("flow_curve")??"straight"}
                  @change=${t=>this._updateFlow(this._selFlow,{curve:t.target.value})}
                >
                  <option value="straight" .selected=${(e.curve??m("flow_curve")??"straight")==="straight"}>straight</option>
                  <option value="rounded" .selected=${e.curve==="rounded"}>rounded</option>
                </select>`)}
      </div>
    `}_pointLabel(e,t){if(e.card!=null){const s=this._config?.cards.find(i=>i.id===e.card);return{label:`Point ${t+1}`,sub:`Card · ${s?.name??e.card} · ${e.side??"center"}`}}return{label:`Point ${t+1}`,sub:`Free · ${e.x??0}, ${e.y??0}`}}_renderFlowPoints(e){return r`
      <div class="ec-subsection-title">Points — drag to reorder</div>
      ${e.points.length===0?r`<p class="ec-empty">No points — click "+ Point".</p>`:e.points.map((t,s)=>{const{label:i,sub:n}=this._pointLabel(t,s);return this._itemCard({dragKey:`pt:${this._selFlow}:${s}`,icon:t.card!=null?"mdi:radio-button-on":"mdi:radio-button-off",label:i,sub:n,selected:s===this._selPoint,onClick:()=>{this._selPoint=s,this._navPush(`pt:${s}`,`Point ${s+1}`)},actions:r`
                <button class="ec-btn-remove"
                  @click=${o=>{o.stopPropagation(),this._removeFlowPoint(this._selFlow,s)}}
                  title="Remove">✕</button>
              `})})}
      <button class="ec-btn-add" style="margin-top:4px;"
        @click=${()=>this._addFlowPoint(this._selFlow)}>+ Point</button>
    `}_flowSecPoint(e,t){const s=this._flows()[e],i=s?.points[t];if(!s||!i)return r``;const n=i.card!=null?"card":"free";return r`
      <div class="ec-section">
                    ${this._row("Kind",r`<select class="ec-select"
                        .value=${n}
                        @change=${o=>this._setPointKind(e,t,o.target.value)}
                      >
                        <option value="free" .selected=${n==="free"}>Free (x/y)</option>
                        <option value="card" .selected=${n==="card"}>Card</option>
                      </select>`)}

                    ${n==="card"?r`
                      ${this._row("Card",r`<select class="ec-select"
                          .value=${i.card??""}
                          @change=${o=>this._updateFlowPoint(e,t,{card:o.target.value})}
                        >
                          ${this._config.cards.map(o=>r`
                            <option value=${o.id} .selected=${i.card===o.id}>${o.name??o.id}</option>
                          `)}
                        </select>`)}

                      ${this._row("Side",r`<select class="ec-select"
                          .value=${i.side??"center"}
                          @change=${o=>this._updateFlowPoint(e,t,{side:o.target.value})}
                        >
                          ${C._FLOW_SIDES.map(o=>r`<option value=${o} .selected=${(i.side??"center")===o}>${o}</option>`)}
                        </select>`)}
                    `:r`
                      ${this._row("X",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                          .value=${String(i.x??0)}
                          @change=${o=>this._updateFlowPoint(e,t,{x:Number(o.target.value)})}
                        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}

                      ${this._row("Y",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number"
                          .value=${String(i.y??0)}
                          @change=${o=>this._updateFlowPoint(e,t,{y:Number(o.target.value)})}
                        /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${o=>this._stepNumInput(o,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${o=>this._stepNumInput(o,1)}>+</button></span></span>`)}
                    `}
      </div>
    `}_actionRows(e,t,s=["tap_action","hold_action","double_tap_action"]){const i=(n,o)=>{const a=e[n],l=a?.action??"none";return r`
        ${this._row(o,r`<select class="ec-select"
          .value=${l}
          @change=${c=>{const p=c.target.value;t(p==="none"?{[n]:void 0}:{[n]:{...a??{},action:p}})}}
        >
          <option value="none"           .selected=${l==="none"}>None</option>
          <option value="expand-card"   .selected=${l==="expand-card"}>Expand Card</option>
          <option value="open-extended" .selected=${l==="open-extended"}>Open Popover</option>
          <option value="more-info"     .selected=${l==="more-info"}>More Info</option>
          <option value="toggle"        .selected=${l==="toggle"}>Toggle</option>
          <option value="navigate"      .selected=${l==="navigate"}>Navigate</option>
          <option value="url"           .selected=${l==="url"}>Url</option>
          <option value="call-service"  .selected=${l==="call-service"}>Perform Action</option>
          <option value="assist"        .selected=${l==="assist"}>Assist</option>
          <option value="fire-dom-event" .selected=${l==="fire-dom-event"}>Fire Dom Event</option>
        </select>`)}
        ${(l==="more-info"||l==="toggle")&&a?this._row("Entity",r`<ha-entity-picker
                .hass=${this.hass}
                .value=${a.entity??""}
                allow-custom-entity
                @value-changed=${c=>t({[n]:{...a,entity:c.detail.value||void 0}})}
              ></ha-entity-picker>`):_}
        ${l==="navigate"&&a?this._row("Path",r`<input class="ec-input" type="text" .value=${a.navigation_path??""}
                placeholder="/lovelace/0"
                @change=${c=>t({[n]:{...a,navigation_path:c.target.value}})}
              />`):_}
        ${l==="url"&&a?this._row("URL",r`<input class="ec-input" type="text" .value=${a.url_path??""}
                placeholder="https://…"
                @change=${c=>t({[n]:{...a,url_path:c.target.value}})}
              />`):_}
        ${l==="call-service"&&a?r`
            <ha-service-control
              .hass=${this.hass}
              .value=${{action:a.service??"",target:a.target,data:a.service_data}}
              .showAdvanced=${!0}
              @value-changed=${c=>{const p=c.detail.value;t({[n]:{...a,service:p.action||void 0,target:p.target,service_data:p.data}})}}
            ></ha-service-control>
          `:_}
        ${l==="open-extended"&&a?this._row("Popover card",r`<select class="ec-select"
                .value=${a.extended_card_id??""}
                @change=${c=>t({[n]:{...a,extended_card_id:c.target.value||void 0}})}
              >
                <option value="">(select)</option>
                ${(this._config?.extended_cards??[]).map(c=>r`
                  <option value=${c.id} .selected=${a.extended_card_id===c.id}>${c.name??c.id}</option>
                `)}
              </select>`):_}
      `};return r`${s.map(n=>i(n,C._ACTION_LABELS[n]))}`}_openGGPicker(e,t,s=!1){this._ggTarget={ci:e,fi:t,isExtended:s},this._ggOpen=!0}_pickGG(e,t){if(!this._ggTarget)return;const{ci:s,fi:i,isExtended:n}=this._ggTarget,o={type:e,...t};n?this._updateExtField(s,i,o):this._updateField(s,i,o),this._ggOpen=!1,this._ggTarget=null}_renderEmbeddedPanel(){const e=this._navPath,t=this._embCards();if(e.length===0)return r`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Embed any HA Lovelace card as a positioned canvas element. Drag the ◈ handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addEmbCard}>+ Embedded External Card</button>
        </div>
        ${t.length===0?r`<p class="ec-empty">No embedded external cards — click "+ Embedded External Card" to add one.</p>`:t.map((n,o)=>this._itemCard({dragKey:`emb:${o}`,icon:"mdi:widgets",label:n.name??n.id,sub:n.card_config?.type??"No card type set",selected:o===this._selEmbCard,onClick:()=>{this._selEmbCard=o,this._navPush(`emb:${o}`,n.name??n.id)},actions:r`
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeEmbCard(o)}}
                  title="Remove">✕</button>
              `}))}
      `;const s=this._selEmbCard,i=t[s];if(!i)return r``;if(e.length===1)return r`
        ${this._navBtn("sec:config","Card Config","Pick card type & edit config","mdi:widgets")}
        ${this._navBtn("sec:pos","Position & Size","Anchor, width, span, height","mdi:arrow-expand-all")}
        ${this._navBtn("sec:appear","Appearance","Transparent background","mdi:palette")}
      `;switch(e[1].key){case"sec:pos":return this._embSecPos(s,i);case"sec:appear":return this._embSecAppear(s,i);default:return this._embSecConfig(s,i)}}_embSecConfig(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${s=>this._updateEmbCard(e,{name:s.target.value||void 0})}
          />`)}

        ${this._row("Card Type",r`<div style="display:flex;gap:6px;align-items:center;min-width:0;">
            <span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              ${t.card_config?.type?String(t.card_config.type):r`<span style="color:#555;font-style:italic;">not set</span>`}
            </span>
            <button class="ec-btn-add" style="white-space:nowrap;padding:2px 8px;font-size:11px;"
              @click=${()=>this._openEmbPicker({kind:"std",idx:e})}>Change…</button>
          </div>`)}

        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker({kind:"std",idx:e})}>
            ${t.card_config?.type?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor({kind:"std",idx:e})}>
            Edit Config…
          </button>
        </div>
      </div>
    `}_embSecPos(e,t){return r`
      <div class="ec-section">
        ${this._row("Anchor",r`<select class="ec-select"
            .value=${t.anchor??m("anchor")??"top-left"}
            @change=${s=>this._updateEmbCard(e,{anchor:s.target.value})}
          >
            ${qe.map(s=>r`<option value=${s} .selected=${(t.anchor??m("anchor")??"top-left")===s}>${Ye[s]}</option>`)}
          </select>`)}
        ${this._gridGeom()?r`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._gridGeom()?this._row("Columns (span)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(t.grid_span??1)}
            @change=${s=>{const i=this._gridGeom();if(!i)return;const n=Math.max(1,Math.min(i.cols,Number(s.target.value)||1)),o=Math.max(8,n*i.cellW-i.padding);this._updateEmbCard(e,{grid_span:n,width:o})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`):_}

        ${this._row("Width (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(t.width)}
            @change=${s=>this._updateEmbCard(e,{width:Number(s.target.value)})}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}

        ${this._row("Height (px)",r`<span class="ec-num-wrap"><input class="ec-input ec-input-num" type="number" min="20"
            .value=${t.height!=null?String(t.height):""}
            placeholder="auto"
            @change=${s=>{const i=s.target.value;this._updateEmbCard(e,{height:i===""?void 0:Number(i)})}}
          /><span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${s=>this._stepNumInput(s,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${s=>this._stepNumInput(s,1)}>+</button></span></span>`)}
      </div>
    `}_embSecAppear(e,t){return r`
      <div class="ec-section">
        ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent??!1}
            @change=${s=>this._updateEmbCard(e,{transparent:s.target.checked})}
          />`)}
        ${this._cssRow(t.extra_css,s=>this._updateEmbCard(e,{extra_css:s}))}
      </div>
    `}_renderEmbEditorModal(){if(!this._embEditorOpen)return _;const e=!!this._embNativeEditor,t=this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0,s=t?String(t.type??""):"";return r`
      <div class="ec-lib-backdrop" @click=${this._closeEmbEditor}></div>
      <div class="ec-lib-modal" style="width:min(580px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">${s||"Embedded Card"} — Config</span>
          <div style="display:flex;align-items:center;gap:8px;">
            ${e?r`
              <button class="ec-btn-clear" style="font-size:11px;padding:3px 10px;border-radius:4px;"
                @click=${()=>{this._embNativeEditor=null}}>
                Use JSON
              </button>`:_}
            <button class="ec-btn-clear" @click=${this._closeEmbEditor}>✕</button>
          </div>
        </div>

        ${e?r`
          <div id="emb-native-slot"
            style="padding:12px 16px;max-height:62vh;overflow-y:auto;box-sizing:border-box;"
            @config-changed=${i=>i.stopPropagation()}
          ></div>
          <div style="display:flex;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-add" style="padding:6px 18px;" @click=${this._closeEmbEditor}>Done</button>
          </div>
        `:r`
          <div style="padding:12px 16px;">
            <p style="font-size:12px;color:#888;margin:0 0 8px;">
              JSON object — <code style="color:#5aadcc">"type"</code> plus card-specific properties.
              ${!e&&s?r`<span style="color:#c87aff;"> (no visual editor available for this card type)</span>`:_}
            </p>
            <textarea
              style="width:100%;box-sizing:border-box;min-height:220px;font-family:monospace;font-size:13px;background:#060e18;color:#c8d8e8;border:1px solid rgba(0,212,255,0.25);border-radius:6px;padding:10px;resize:vertical;outline:none;"
              .value=${this._embEditorYaml}
              @input=${i=>{this._embEditorYaml=i.target.value}}
              spellcheck="false"
            ></textarea>
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-clear" style="padding:6px 14px;border-radius:5px;" @click=${this._closeEmbEditor}>Cancel</button>
            <button class="ec-btn-add" style="padding:6px 16px;" @click=${this._saveEmbEditorYaml}>Save</button>
          </div>
        `}
      </div>
    `}_renderEmbPickerModal(){if(!this._embPickerOpen)return _;const e=window.customCards??[],t=Ho.map(c=>({...c,source:"Built-in"})),s=e.map(c=>({type:c.type.startsWith("custom:")?c.type:`custom:${c.type}`,name:c.name??c.type,description:c.description,source:"Custom"})),i=new Set(t.map(c=>c.type)),n=[...t,...s.filter(c=>!i.has(c.type))],o=this._embPickerSearch.trim().toLowerCase(),a=o?n.filter(c=>c.name.toLowerCase().includes(o)||c.type.toLowerCase().includes(o)):n,l=n.some(c=>c.type===o||c.name.toLowerCase()===o);return r`
      <div class="ec-lib-backdrop" @click=${()=>{this._embPickerOpen=!1}}></div>
      <div class="ec-lib-modal" style="width:min(480px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Select Card Type</span>
          <button class="ec-btn-clear" @click=${()=>{this._embPickerOpen=!1}}>✕</button>
        </div>
        <div style="padding:10px 16px 6px;">
          <input class="ec-input" type="search" placeholder="Search by name or type…"
            style="width:100%;box-sizing:border-box;"
            .value=${this._embPickerSearch}
            @input=${c=>{this._embPickerSearch=c.target.value}}
          />
        </div>
        <div style="max-height:52vh;overflow-y:auto;padding:2px 8px 10px;">
          ${a.map(c=>r`
            <div class="ec-list-row" style="cursor:pointer;padding:8px 10px;"
              @click=${()=>void this._pickEmbCardType(c.type)}>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;color:#c8d8e8;font-weight:500;">${c.name}</div>
                <div style="font-size:11px;color:#5aadcc;font-family:monospace;">${c.type}</div>
                ${c.description?r`<div style="font-size:11px;color:#666;margin-top:1px;">${c.description}</div>`:_}
              </div>
              <span style="font-size:10px;color:#375f78;padding-left:10px;white-space:nowrap;">${c.source}</span>
            </div>
          `)}
          ${o&&!l?r`
            <div class="ec-list-row" style="cursor:pointer;padding:8px 10px;border-top:1px solid rgba(255,255,255,0.06);margin-top:4px;"
              @click=${()=>void this._pickEmbCardType(o)}>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;color:#c8d8e8;">Use "<strong>${o}</strong>"</div>
                <div style="font-size:11px;color:#666;">Enter type manually</div>
              </div>
            </div>
          `:_}
        </div>
      </div>
    `}_renderFlowCompleteModal(){if(!this._showFlowCompleteModal)return _;const e=this._flows()[this._pendingFlowIdx]?.name??"Flow";return r`
      <div class="ec-lib-backdrop"></div>
      <div class="ec-lib-modal" style="width:min(420px,92vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Complete Flow Configuration</span>
        </div>
        <div style="padding:16px 20px;line-height:1.5;">
          <p style="margin:0 0 12px;">
            <strong>${e}</strong> was added. To set the entity, direction, and style,
            complete its configuration in the <strong>Flows</strong> section below.
          </p>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:0 20px 16px;">
          <button class="ec-btn-add" @click=${()=>this._goToFlow()}>Take Me There</button>
          <button class="ec-btn-align" @click=${()=>{this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1}}>Close</button>
        </div>
      </div>
    `}_renderGGModal(){if(!this._ggOpen)return _;const e=a=>r`<img class="ec-lib-preview" src="${ei+a}" alt=""
      @error=${l=>{const c=l.target,p=document.createElement("div");p.className="ec-lib-thumb-placeholder",c.parentNode?.replaceChild(p,c)}} />`,t=[{value:15,color:"#ef4444"},{value:35,color:"#f59e0b"},{value:100,color:"#22c55e"}],s=[{label:"Thermometer",file:"thermometer.svg",fill_direction:"up",width:60,height:200},{label:"Thermometer (Horizontal)",file:"thermometer-horizontal.svg",fill_direction:"left",width:200,height:60},{label:"Arc Gauge",file:"gauge-arc.svg",fill_direction:"up",width:200,height:120},{label:"Battery (Vertical)",file:"battery-vertical.svg",fill_direction:"up",width:44,height:100,thresholds:t},{label:"Battery (Horizontal)",file:"battery-horizontal.svg",fill_direction:"left",width:100,height:44,thresholds:t},{label:"Tank (Cylinder)",file:"tank-cylinder.svg",fill_direction:"up",width:100,height:150},{label:"Tank - Water",file:"tank-water.svg",fill_direction:"up",width:80,height:95},{label:"Tank (Fermenter)",file:"tank-fermenter.svg",fill_direction:"up",width:60,height:165},{label:"Tank (Cone)",file:"tank-cone.svg",fill_direction:"up",width:80,height:150},{label:"Inverter",file:"inverter.svg",fill_direction:"up",width:100,height:100}],i=[{label:"Line",graph_type:"stat-line",thumb:"thumb_stat_line.webp"},{label:"Bar",graph_type:"bar",thumb:"thumb_stat_bar.webp"},{label:"Bar (Stacked)",graph_type:"bar-stacked",thumb:"thumb_statbar_stacked.webp"}],n=[{label:"With Unit (line)",graph_type:"line",thumb:"thumb_history_uom.webp"},{label:"No Unit (states)",graph_type:"state-timeline",thumb:"thumb_history_no_uom.webp"}],o=[{label:"Arc Gauge",graph_type:"gauge",thumb:"thumb_gauge_arc.webp"},{label:"Arc Gauge (Needle)",graph_type:"gauge-needle",thumb:"thumb_gauge_arc_needle.webp"}];return r`
      <div class="ec-lib-backdrop" @click=${()=>{this._ggOpen=!1}}></div>
      <div class="ec-lib-modal">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Element Library</span>
          <button class="ec-btn-clear" @click=${()=>{this._ggOpen=!1}}>✕</button>
        </div>

        <div class="ec-lib-cat">SVG Elements</div>
        <div class="ec-lib-grid">
          ${s.map(a=>r`
            <button class="ec-lib-item" title="${a.label}"
              @click=${()=>this._pickGG("svg",{svg:ei+a.file,fill_direction:a.fill_direction,width:a.width,height:a.height,...a.thresholds?{thresholds:a.thresholds}:{}})}>
              ${e(a.file)}
              <span class="ec-lib-name">${a.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Statistics Graph</div>
        <div class="ec-lib-grid">
          ${i.map(a=>r`
            <button class="ec-lib-item" title="${a.label}"
              @click=${()=>this._pickGG("graph",{graph_type:a.graph_type})}>
              ${e(a.thumb)}
              <span class="ec-lib-name">${a.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">History Graph</div>
        <div class="ec-lib-grid">
          ${n.map(a=>r`
            <button class="ec-lib-item" title="${a.label}"
              @click=${()=>this._pickGG("graph",{graph_type:a.graph_type})}>
              ${e(a.thumb)}
              <span class="ec-lib-name">${a.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Gauge</div>
        <div class="ec-lib-grid">
          ${o.map(a=>r`
            <button class="ec-lib-item" title="${a.label}"
              @click=${()=>this._pickGG("graph",{graph_type:a.graph_type})}>
              ${e(a.thumb)}
              <span class="ec-lib-name">${a.label}</span>
            </button>
          `)}
        </div>
      </div>
    `}_row(e,t){return r`
      <div class="ec-row">
        <label class="ec-label">${e}</label>
        <div class="ec-control">${t}</div>
      </div>
    `}_optRow(e,t,s,i,n){return r`
      <div class="ec-row">
        <label class="ec-label">${e}${t?r`<span class="ec-label-hint">${t}</span>`:_}</label>
        <div class="ec-control ec-opt-control">
          <label class="ec-opt-inherit">
            <input type="checkbox" .checked=${s} @change=${o=>n(o.target.checked)} />
            Inherit
          </label>
          <div class="ec-opt-target${s?" ec-opt-target--disabled":""}">${i}</div>
        </div>
      </div>
    `}_colorPicker(e,t,s,i){const n=t??"",o=this._cpOpenId===e,{base:a,alpha:l}=Wo(n),c=/^#[0-9a-fA-F]{6}$/.test(a)?a:a?jo(a):"#000000",p=n||"transparent",u=i?.clearable!==!1&&t!=null,d=["#ff0000","#ff4500","#ff8800","#ffff00","#00ff00","#00ff7f","#00ffff","#0000ff","#9400d3","#ff00ff","#ffffff","#00d4ff","#22c55e","#888888","#333333","#000000"],h=parseInt(c.slice(1,3),16),b=parseInt(c.slice(3,5),16),v=parseInt(c.slice(5,7),16),x=(g,w,S)=>`#${[g,w,S].map(f=>Math.max(0,Math.min(255,f)).toString(16).padStart(2,"0")).join("")}`,k=a!==""&&!/^#[0-9a-fA-F]{6}$/.test(a)&&!/^rgb/i.test(a),$=(g,w)=>{if(w>=1){s(g);return}const S=parseInt(g.slice(1,3),16),f=parseInt(g.slice(3,5),16),E=parseInt(g.slice(5,7),16);s(`rgba(${S},${f},${E},${Number(w.toFixed(3))})`)},y=g=>{k?s(si(a,g)):$(c,g)};return r`
      <div class="ec-cp-wrap">
        <div class="ec-color-row">
          <button class="ec-color-swatch-btn" title="Open color picker"
            style="--ec-swatch:${p}"
            @click=${g=>{if(g.stopPropagation(),!o){const w=g.currentTarget.getBoundingClientRect();this._cpOpenAbove=window.innerHeight-w.bottom<340}this._cpOpenId=o?null:e}}
          ></button>
          <input type="text" class="ec-color-text"
            .value=${n}
            placeholder="#rrggbb · rgb() · name"
            @change=${g=>{const w=g.target.value.trim();s(w||void 0)}}
          />
          ${u?r`<button class="ec-btn-clear" title="${i?.clearTitle??"Clear"}"
            @click=${i?.onClear??(()=>s(void 0))}>✕</button>`:_}
        </div>
        ${o?r`
          <div class="ec-cp-backdrop" @click=${()=>{this._cpOpenId=null}}></div>
          <div class="ec-cp-popup${this._cpOpenAbove?" ec-cp-popup--above":""}" @click=${g=>g.stopPropagation()}>
            <div class="ec-cp-modes">
              <button class="ec-cp-mode${this._cpMode==="rgb"?" active":""}"
                @click=${()=>{this._cpMode="rgb"}}>RGB Mode</button>
              <button class="ec-cp-mode${this._cpMode==="css"?" active":""}"
                @click=${()=>{this._cpMode="css"}}>CSS Mode</button>
            </div>
            ${this._cpMode==="css"?this._renderCpVars(s,l):r`
            <div class="ec-cp-main">
            <hex-color-picker
              .color=${c}
              @color-changed=${g=>$(g.detail.value,l)}
            ></hex-color-picker>
            <div class="ec-cp-rgb">
              ${["R","G","B"].map((g,w)=>{const S=[h,b,v][w];return r`<label class="ec-cp-rgb-label">${g}
                  <input type="number" class="ec-cp-rgb-input" min="0" max="255"
                    .value=${String(S)}
                    @change=${f=>{const E=Number(f.target.value);$(x(w===0?E:h,w===1?E:b,w===2?E:v),l)}}
                  />
                </label>`})}
            </div>
            <div class="ec-cp-presets">
              ${d.map(g=>r`
                <button class="ec-cp-preset" style="background:${g}" title="${g}"
                  @click=${()=>{$(g,l),this._cpOpenId=null}}
                ></button>
              `)}
            </div>
            </div>
            `}
            <div class="ec-cp-alpha">
              <span class="ec-cp-alpha-label">Opacity</span>
              <div class="ec-opacity-row">
                <input type="range" min="0" max="1" step="0.01"
                  .value=${String(l)}
                  @input=${g=>y(parseFloat(g.target.value))}
                />
                <span class="ec-opacity-val">${Math.round(l*100)}%</span>
              </div>
            </div>
          </div>
        `:_}
      </div>
    `}_renderCpVars(e,t=1){const s=this._config?.defaults?.custom_colors??[],i=n=>{e(si(n,t)),this._cpOpenId=null};return r`
      <div class="ec-cp-vars">
        <div class="ec-cp-vars-title">Theme color</div>
        <div class="ec-cp-vars-hint">Select a standard HA or custom color variable</div>
        <div class="ec-cp-vars-list">
          ${Go.map(n=>r`
            <button class="ec-cp-var-row" title="var(${n.name})" @click=${()=>i(`var(${n.name})`)}>
              <span class="ec-cp-var-chip" style="background:var(${n.name})"></span>
              <span class="ec-cp-var-name">${n.label}</span>
            </button>`)}
          ${s.length?r`<div class="ec-cp-vars-sep">Custom</div>`:_}
          ${s.map(n=>r`
            <button class="ec-cp-var-row" title="var(--mccust_${n.name})" @click=${()=>i(`var(--mccust_${n.name})`)}>
              <span class="ec-cp-var-chip" style="background:${n.color}"></span>
              <span class="ec-cp-var-name">mccust_${n.name}</span>
            </button>`)}
        </div>
      </div>
    `}};C.PICKER_HEIGHT=30;C._TAB_LABEL={cards:"Cards",elements:"Elements",settings:"Settings"};C._PANEL_META={mosaic:{icon:"mdi:view-dashboard",title:"Mosaic Cards",desc:"Canvas cards holding value, label, icon, Element Library (SVG fills & graphs), blank and rule fields. Reorder fields to stack them; style per-card or inherit the global defaults."},popover:{icon:"mdi:picture-in-picture-bottom-right",title:"Popover Cards",desc:"Popup panels opened by an Open Popover action from a card, field or zone. Column-based layout with their own defaults."},embedded:{icon:"mdi:widgets",title:"Embedded External Cards",desc:"Embed any native or custom Home Assistant dashboard card directly onto the canvas."},flows:{icon:"mdi:chart-timeline-variant",title:"Animated Flow Lines",desc:"CSS-animated lines between canvas points. An entity value drives speed and direction; style is dashes, dots, fluid or particles."},zones:{icon:"mdi:gesture-tap-box",title:"Clickable Zones",desc:"Bounded clickable hotspots pinned to canvas coordinates, used to trigger tap / hold / double-tap actions."},virtuals:{icon:"mdi:memory",title:"Virtual Entities",desc:"Computed helper entities — add, subtract, mean, signed net or time-until — usable across every card without a HA helper."},canvas:{icon:"mdi:image-size-select-actual",title:"Canvas",desc:"Placement mode (Precision or Grid), base size, fit, extend margins, the canvas box and the background image set."},defaults:{icon:"mdi:palette",title:"Global Defaults",desc:"Default box, value and label styling plus fonts, gaps and element fill colors. Cards and fields inherit these unless overridden."},templates:{icon:"mdi:bookmark-multiple",title:"Templates",desc:"Save the current layout as a portable template, or import one to replace the configuration."}};C._OPTION_LAYOUT_KEYS=["option_icon_position","option_show_state","option_state_position","option_icon_style","option_label_style","option_state_style"];C.SEPARATION_KEYS=["selector_option_gap","selector_option_padding","selector_option_border","selector_option_border_color","selector_option_border_width","selector_option_radius","button_option_padding"];C.ELEM_CSS_KEY={"el:thermo-v":"thermo_extra_css","el:thermo-h":"thermo_h_extra_css","el:bat-h":"battery_h_extra_css","el:bat-v":"battery_v_extra_css","el:tank-cyl":"tank_cylinder_extra_css","el:tank-water":"tank_water_extra_css","el:tank-ferm":"tank_fermenter_extra_css","el:tank-cone":"tank_cone_extra_css","el:inverter":"inverter_extra_css","el:gauge-arc":"gauge_arc_extra_css"};C._VIRTUAL_OPS=[{value:"add",label:"Add (sum all)"},{value:"subtract",label:"Subtract (first − rest)"},{value:"mean",label:"Mean (average)"},{value:"signed_net",label:"Signed net (input[0] − input[1])"},{value:"time_until",label:"Time Until"},{value:"statistic",label:"Statistic"}];C._FLOW_STYLES=["dashes","dots","fluid","particles"];C._FLOW_SIDES=["top","right","bottom","left","center"];C._ACTION_LABELS={tap_action:"Tap",hold_action:"Hold",double_tap_action:"Double tap"};C.styles=[it`
      :host {
        display: block;
        font-size: 16px;
        color: var(--primary-text-color);
      }
      .ec-version-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px 0;
      }
      .ec-version {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-family: monospace;
      }
      .ec-expand-btn {
        font-size: 12px;
        padding: 3px 10px;
        border: 1px solid rgba(0,212,255,0.35);
        border-radius: 4px;
        background: rgba(0,212,255,0.06);
        color: #00c8f0;
        cursor: pointer;
        white-space: nowrap;
      }
      .ec-expand-btn:hover {
        background: rgba(0,212,255,0.14);
        border-color: rgba(0,212,255,0.65);
      }

      /* ── Onboarding wizard ── */
      .ec-wizard { padding: 24px; min-height: 280px; display: flex; flex-direction: column; }
      .ec-wiz-welcome { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 16px 0; }
      .ec-wiz-icon { font-size: 48px; line-height: 1; }
      .ec-wiz-title { font-size: 20px; font-weight: 700; color: #00d4ff; margin: 0; }
      .ec-wiz-heading { font-size: 15px; font-weight: 600; color: #00d4ff; margin: 0 0 16px; }
      .ec-wiz-optional { font-size: 12px; font-weight: 400; color: #777; }
      .ec-wiz-desc { font-size: 13px; color: #aaa; margin: 0 0 16px; line-height: 1.5; }
      .ec-wiz-field { display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; }
      .ec-wiz-label { font-size: 12px; color: #aaa; font-weight: 500; }
      .ec-wiz-input {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 6px; color: #fff; font-size: 13px;
        padding: 7px 10px; width: 100%; box-sizing: border-box;
      }
      .ec-wiz-input:focus { outline: none; border-color: rgba(0,212,255,0.5); }
      .ec-wiz-input--short { width: 80px; }
      .ec-wiz-select {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 6px; color: #fff; font-size: 13px;
        padding: 7px 10px; width: 100%; cursor: pointer;
      }
      .ec-wiz-select:focus { outline: none; border-color: rgba(0,212,255,0.5); }
      .ec-wiz-row { display: flex; gap: 10px; margin-top: 20px; }
      .ec-wiz-end { justify-content: flex-end; }
      .ec-wiz-space { justify-content: space-between; }
      .ec-wiz-btn-primary {
        background: rgba(0,212,255,0.15); border: 1px solid rgba(0,212,255,0.5);
        border-radius: 20px; color: #00d4ff; font-size: 13px; font-weight: 600;
        padding: 8px 20px; cursor: pointer; letter-spacing: 0.04em;
      }
      .ec-wiz-btn-primary:hover { background: rgba(0,212,255,0.25); box-shadow: 0 0 10px rgba(0,212,255,0.3); }
      .ec-wiz-btn-ghost {
        background: transparent; border: 1px solid rgba(255,255,255,0.2);
        border-radius: 20px; color: #888; font-size: 13px;
        padding: 8px 16px; cursor: pointer;
      }
      .ec-wiz-btn-ghost:hover { border-color: rgba(255,255,255,0.4); color: #ccc; }
      .ec-wiz-btn-primary:disabled { opacity: 0.4; cursor: default; pointer-events: none; }
      .ec-wiz-type-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 4px 0 8px; }
      .ec-wiz-type-btn {
        display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center;
        padding: 16px 10px; border-radius: 10px; cursor: pointer;
        border: 2px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
        transition: border-color 0.15s, background 0.15s;
      }
      .ec-wiz-type-btn:hover { border-color: rgba(0,212,255,0.4); background: rgba(0,212,255,0.07); }
      .ec-wiz-type-btn.selected { border-color: #00d4ff; background: rgba(0,212,255,0.12); }
      .ec-wiz-type-icon { font-size: 26px; line-height: 1; }
      .ec-wiz-type-title { font-size: 13px; font-weight: 600; color: #fff; }
      .ec-wiz-type-desc { font-size: 11px; color: #888; line-height: 1.4; }
      .ec-wiz-ev-group {
        background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
        border-radius: 8px; padding: 12px; margin-bottom: 10px;
      }
      .ec-wiz-ev-label { font-size: 12px; font-weight: 600; color: #00d4ff; margin-bottom: 10px; }
      .ec-wiz-reset-row { margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: flex-end; }
      .ec-wiz-btn-reset {
        background: var(--primary-color); 
        border: none;
        border-radius: 6px; 
        color: var (--primary-text-color); 
        font-size: 12px;
        padding: 5px 14px; cursor: pointer;
      }
      //.ec-wiz-btn-reset:hover { background: rgba(255,80,80,0.1); border-color: rgba(255,80,80,0.7); color: #ff6464; }

      /* ── Preview wrapper ── */
      /* .ec-preview is a native <dialog>: kept open (non-modal) inline when
         collapsed, promoted to the top layer via showModal() when expanded.
         Reset the UA dialog styles so the collapsed state lays out like the
         plain div it used to be. */
      .ec-preview {
        position: relative;
        inset: auto;
        width: 100%;
        height: auto;
        max-width: none;
        max-height: none;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        color: inherit;
      }
      .ec-preview-card {
        display: block;
        width: 100%;
        --ha-card-padding: 0px;
        --ha-card-border-width: 0px;
        --ha-card-box-shadow: none;
      }
      .ec-canvas-area {
        position: relative;
        width: 100%;
      }
      .ec-open-editor-wrap {
        padding: 14px;
      }
      .ec-open-editor-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 13px;
        border: none;
        border-radius: 8px;
        background: #00a8e0;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.02em;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0,168,224,0.35);
      }
      .ec-open-editor-btn:hover { background: #00bcf0; box-shadow: 0 5px 16px rgba(0,188,240,0.4); }
      .ec-open-editor-btn ha-icon { --mdc-icon-size: 20px; }

      /* ── Fullscreen expanded preview ── */
      .ec-preview--expanded {
        position: relative;
        inset: 0;
        z-index: 9999;
        background: #111;
        outline: none;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 70vw;
        height: auto;
        margin: auto;
      }
      .ec-expanded-bottom-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: var(--card-background-color, rgba(8,18,28,0.92));
        color: var(--primary-text-color);
        border-top: 1px solid rgba(0,212,255,0.18);
        padding: 6px 10px;
        box-sizing: border-box;
        gap: 8px;
        min-height: 80px;
      }
      .ec-preview--expanded .ec-expanded-bottom-bar {
        flex: 0 0 auto;
        z-index: 10;
      }
      .ec-preview--expanded .ec-canvas-area {
        flex: 0 0 auto;
        margin: auto;
      }
      .ec-bottom-bar-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }
      .ec-bottom-bar-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 0 8px;
        gap: 2px;
      }
      .ec-hint-text {
        font-size: 12px;
        color: var(--primary-text-color, rgba(0,212,255,0.45));
        font-style: italic;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ec-quick-panel {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
      }
      .ec-quick-field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
      }
      .ec-quick-field span {
        font-size: 14px;
        color: var(--primary-text-color, rgba(0,212,255,0.6));
        white-space: nowrap;
      }
      .ec-quick-field input {
        width: 6em;
      }
      .ec-side-close {
        background: var(--primary-color);
        border: none;
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .ec-btn-done {
        background: var(--primary-color);
        border: none;
        border-radius: 6px;
        color: var(--primary-text-color);
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .ec-bar-top .ec-expanded-bottom-bar {
        border-top: none;
        border-bottom: 1px solid rgba(0,212,255,0.18);
      }
      .ec-bar-top.ec-preview--expanded .ec-expanded-bottom-bar {
        order: -1;
      }
      .ec-canvas-tools-divider-v {
        width: 1px;
        height: 20px;
        background: rgba(0,212,255,0.2);
        flex-shrink: 0;
      }
      .ec-canvas-tools-divider {
        width: 100%;
        border: none;
        border-top: 1px solid rgba(0,212,255,0.15);
        margin: 8px 0 2px;
      }

      /* ── Grid-mode overlay ── */
      .ec-grid-overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }
      .ec-grid-dot {
        position: absolute;
        width: 4px;
        height: 4px;
        margin: -2px 0 0 -2px;
        border-radius: 50%;
        background: rgba(0,212,255,0.35);
      }

      /* ── Preview handles ── */
      .ec-handles {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .ec-handle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.8);
        transform: translate(-50%, -50%);
        pointer-events: auto;
        cursor: grab;
        box-sizing: border-box;
        transition: width 0.1s, height 0.1s, background 0.1s;
      }
      .ec-handle.selected {
        width: 12px;
        height: 12px;
        background: transparent;
        border: 2px solid var(--primary-color, #03a9f4);
        box-shadow: 0 0 4px var(--primary-color, #03a9f4);
      }
      .ec-handle.multi {
        width: 12px;
        height: 12px;
        background: transparent;
        border: 2px dashed var(--primary-color, #03a9f4);
        opacity: 0.7;
      }
      .ec-handle:active {
        cursor: grabbing;
      }
      .ec-handle.grouped::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 50%;
        border: 1px dotted rgba(255, 200, 0, 0.8);
        pointer-events: none;
      }
      .ec-card-ov,
      .ec-emb-ov {
        position: absolute;
        box-sizing: border-box;
        pointer-events: auto;
        cursor: grab;
        background: transparent;
        border-radius: 4px;
      }
      .ec-card-ov:hover,
      .ec-emb-ov:hover {
        box-shadow: inset 0 0 0 1px rgba(0, 212, 255, 0.35);
      }
      .ec-card-ov:active,
      .ec-emb-ov:active {
        cursor: grabbing;
      }
      .ec-card-ov.selected,
      .ec-emb-ov.selected {
        box-shadow: inset 0 0 0 2px var(--primary-color, #00d4ff);
      }
      .ec-card-ov.multi,
      .ec-emb-ov.multi {
        outline: 2px dashed var(--primary-color, #00d4ff);
        outline-offset: -2px;
      }
      .ec-card-ov.grouped,
      .ec-emb-ov.grouped {
        outline: 1px dotted rgba(255, 200, 0, 0.8);
        outline-offset: -1px;
      }
      .ec-emb-handle.grouped::after {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 3px;
        border: 1px dotted rgba(255, 200, 0, 0.8);
        pointer-events: none;
      }
      .ec-emb-handle {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 3px;
        background: rgba(180, 100, 255, 0.35);
        border: 1px solid rgba(200, 130, 255, 0.85);
        transform: translate(-50%, -50%) rotate(45deg);
        pointer-events: auto;
        cursor: grab;
        box-sizing: border-box;
        transition: width 0.1s, height 0.1s, background 0.1s;
      }
      .ec-emb-handle.selected {
        width: 14px;
        height: 14px;
        background: transparent;
        border: 2px solid #c87aff;
        box-shadow: 0 0 6px rgba(180, 100, 255, 0.7);
      }
      .ec-emb-handle:active { cursor: grabbing; }

      /* ── Controls chrome ── */
      .ec-controls {
        background: var(--card-background-color, #070f1a);
        padding: 0;
        border-top: 1px solid var(--divider-color, rgba(0,212,255,0.1));
      }
      .ec-preview--expanded .ec-controls {
        position: absolute;
        bottom: 41px;
        left: 0;
        right: 0;
        max-height: 45%;
        overflow-y: auto;
        z-index: 10;
        border-top: 1px solid rgba(0,212,255,0.3);
      }
      .ec-section {
        border-bottom: 1px solid rgba(255,255,255,0.05);
        padding: 10px 14px;
      }
      .ec-section--fields {
        background: var(--secondary-background-color, rgba(0,180,220,0.07));
        min-height: 500px;
      }
      .ec-section:not(.ec-section--fields) + .ec-section--fields {
        margin-top: 8px;
        border-top: 1px solid rgba(0,212,255,0.18);
      }
      .ec-tu-chip {
        display: inline-flex;
        align-items: center;
        padding: 2px 9px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        white-space: nowrap;
      }
      .ec-tu-chip--label { background: rgba(0,212,255,0.12); color: #5aadcc; border: 1px solid rgba(0,212,255,0.28); }
      .ec-tu-chip--value { background: rgba(255,255,255,0.09); color: #dddddd; border: 1px solid rgba(255,255,255,0.18); }
      .ec-tu-chip--newline { background: rgba(255,200,0,0.09); color: #b89900; border: 1px solid rgba(255,200,0,0.22); }
      .ec-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }
      .ec-section-title {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--secondary-text-color, #4a8aaa);
      }
      .ec-hint { font-size: 11px; color: var(--secondary-text-color, #777); margin: -6px 0 8px; line-height: 1.4; }
      .ec-subsection-title {
        font-size: 12px;
        font-weight: 700;
        color: var(--secondary-text-color, #5aadcc);
        margin: 18px 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 10px 0 0;
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
      }
      .ec-section > .ec-subsection-title:first-child {
        border-top: none;
        padding-top: 0;
        margin-top: 4px;
      }
      /* Slider track-label blocks (left/center/right): the rule belongs between
         one label's Letter spacing and the next label's header, not mid-block
         at "Text style" — so the divider moves to the block boundary instead. */
      .ec-slider-pt .ec-subsection-title {
        border-top: none;
        padding-top: 0;
      }
      .ec-slider-pt + .ec-slider-pt {
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        margin-top: 12px;
        padding-top: 16px;
      }
      .ec-subsection-title--minor {
        font-size: 11.5px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin: 12px 0 5px;
        color: var(--secondary-text-color, #4a8aaa);
        padding: 0;
        border: none;
      }

      /* ── Ribbon navigation shell ── */
      .ec-breadcrumb {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px;
        padding: 8px 14px;
        font-size: 12px;
        border-bottom: 1px solid var(--divider-color, rgba(0,212,255,0.12));
        background: var(--card-background-color, #070f1a);
      }
      .ec-crumb {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 3px 6px;
        border-radius: 4px;
        font: 500 12px inherit;
        color: var(--secondary-text-color, #6b93a8);
      }
      .ec-crumb:hover {
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 12%, transparent);
      }
      .ec-crumb--active { color: var(--primary-color, #00d4ff); }
      .ec-crumb-sep {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color, #567788);
        opacity: 0.7;
      }

      .ec-nav-shell { display: flex; min-height: 50vh; }
      .ec-nav-rail {
        flex: 0 0 76px;
        display: flex;
        flex-direction: column;
        padding: 6px 0;
        gap: 2px;
        border-right: 1px solid var(--divider-color, rgba(0,212,255,0.12));
        background: var(--secondary-background-color, #0a1420);
      }
      .ec-nav-tab {
        position: relative;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 12px 4px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color, #6b93a8);
      }
      .ec-nav-tab ha-icon { --mdc-icon-size: 21px; }
      .ec-nav-tab:hover { background: color-mix(in srgb, var(--primary-color, #03a9f4) 8%, transparent); }
      .ec-nav-tab.active { color: var(--primary-color, #00d4ff); }
      .ec-nav-tab.active::before {
        content: '';
        position: absolute;
        left: 0; top: 6px; bottom: 6px;
        width: 3px;
        background: var(--primary-color, #00d4ff);
        border-radius: 0 3px 3px 0;
      }
      .ec-nav-list { flex: 1; min-width: 0; overflow-y: auto; padding: 4px 0; }

      .ec-nav-item {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 11px 14px;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: inherit;
        font: inherit;
      }
      .ec-nav-item:hover { background: color-mix(in srgb, var(--primary-color, #03a9f4) 8%, transparent); }
      .ec-nav-item-icon { --mdc-icon-size: 20px; color: var(--primary-color, #4a8aaa); flex: 0 0 auto; }
      .ec-nav-item-text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
      .ec-nav-item-label { font-size: 13.5px; font-weight: 500; color: var(--primary-text-color, #dceaf2); }
      .ec-nav-item-hint {
        font-size: 11px;
        color: var(--secondary-text-color, #6b93a8);
        margin-top: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-nav-item-chevron { --mdc-icon-size: 18px; color: var(--secondary-text-color, #567788); flex: 0 0 auto; }

      /* ── In-panel "Sections" nav cards (one level deeper than the flat ribbon item list) ── */
      .ec-nav-card {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 12px;
        margin-bottom: 7px;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.14));
        border-radius: 9px;
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: inherit;
        font: inherit;
        transition: background 0.15s, border-color 0.15s;
      }
      .ec-nav-card:hover {
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 8%, transparent);
        border-color: var(--primary-color, #03a9f4);
      }
      .ec-nav-card-icon { --mdc-icon-size: 20px; color: var(--primary-color, #4a8aaa); flex: 0 0 auto; }
      .ec-nav-card-text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
      .ec-nav-card-label { font-size: 13.5px; font-weight: 500; color: var(--primary-text-color, #dceaf2); }
      .ec-nav-card-hint {
        font-size: 11px;
        color: var(--secondary-text-color, #6b93a8);
        margin-top: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-nav-card-chevron { --mdc-icon-size: 18px; color: var(--secondary-text-color, #567788); flex: 0 0 auto; }

      .ec-panel-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-bottom: 1px solid var(--divider-color, rgba(0,212,255,0.12));
        background: var(--secondary-background-color, #0a1420);
      }
      .ec-panel-back {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 6px 8px 6px 4px;
        border-radius: 6px;
        color: var(--primary-text-color, #dceaf2);
        font-size: 12.5px;
        font-weight: 500;
      }
      .ec-panel-back:hover { background: color-mix(in srgb, var(--primary-color, #03a9f4) 10%, transparent); }
      .ec-panel-back ha-icon { --mdc-icon-size: 18px; }
      .ec-panel-header-icon { --mdc-icon-size: 18px; color: var(--primary-color, #4a8aaa); }
      .ec-panel-header-title { font-size: 14px; font-weight: 600; color: var(--primary-text-color, #dceaf2); }
      .ec-panel-header-spacer { flex: 1; }
      .ec-panel-done {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 6px 13px;
        font-size: 12.5px;
        font-weight: 600;
        background: var(--primary-color, #03a9f4);
        color: #fff;
      }
      .ec-panel-done ha-icon { --mdc-icon-size: 16px; }
      .ec-panel-body { flex: 1; min-height: 50vh; overflow-y: auto; padding: 10px 14px 16px; }
      .ec-panel-desc {
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color, #6b93a8);
        margin: 0 0 10px;
      }

      /* ── List rows ── */
      .ec-list-row {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 8px;
        border-radius: 6px;
        cursor: pointer;
        margin-bottom: 2px;
        border: 1px solid transparent;
        transition: background 0.15s, border-color 0.15s;
      }
      .ec-list-row:hover {
        background: rgba(0,212,255,0.06);
        border-color: rgba(0,212,255,0.14);
      }
      .ec-list-row.selected {
        background: rgba(0,212,255,0.12);
        border-color: rgba(0,212,255,0.3);
      }
      .ec-list-row.multi {
        background: rgba(0,212,255,0.07);
        border: 1px dashed rgba(0,212,255,0.3);
      }
      .ec-list-label {
        flex: 1;
        font-size: 15px;
        color: var(--primary-text-color, #b8d4e0);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* ── Item cards (bordered, icon + label + sub + chevron; matches ribbon-redesign mock) ── */
      .ec-item-card {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 12px;
        margin-bottom: 6px;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.14));
        border-radius: 9px;
        background: transparent;
        cursor: pointer;
        transition: background 0.15s, border-color 0.15s;
      }
      .ec-item-card:hover {
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 8%, transparent);
        border-color: var(--primary-color, rgba(0,212,255,0.3));
      }
      .ec-item-card.selected {
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 14%, transparent);
        border-color: var(--primary-color, rgba(0,212,255,0.4));
      }
      .ec-item-card.multi {
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 9%, transparent);
        border-style: dashed;
        border-color: var(--primary-color, rgba(0,212,255,0.4));
      }
      .ec-item-card.ec-dragging { opacity: 0.4; }
      .ec-item-card-icon { --mdc-icon-size: 20px; color: var(--primary-color, #4a8aaa); flex: 0 0 auto; }
      .ec-item-card-text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
      .ec-item-card-label {
        font-size: 13.5px;
        font-weight: 500;
        color: var(--primary-text-color, #dceaf2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-item-card-sub {
        font-size: 11px;
        color: var(--secondary-text-color, #6b93a8);
        margin-top: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-item-card-actions { display: flex; align-items: center; gap: 2px; flex: 0 0 auto; }
      .ec-item-card-chevron { --mdc-icon-size: 18px; color: var(--secondary-text-color, #567788); flex: 0 0 auto; }

      /* ── Form rows ── */
      .ec-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 7px;
        min-height: 30px;
      }
      .ec-label {
        flex: 0 0 130px;
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color, #dceaf2);
        letter-spacing: 0.01em;
      }
      .ec-control { flex: 1; min-width: 0; }
      .ec-label-hint { display: block; font-size: 10.5px; font-weight: 400; color: var(--secondary-text-color, #6b93a8); margin-top: 1px; }
      .ec-opt-control { display: flex; align-items: center; gap: 10px; }
      .ec-opt-inherit {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        color: #6b93a8;
        white-space: nowrap;
        cursor: pointer;
        flex: 0 0 auto;
      }
      .ec-opt-target { flex: 1; min-width: 0; }
      .ec-opt-target--disabled { opacity: 0.4; pointer-events: none; }
      .ec-mode-tiles { display: flex; gap: 8px; margin: 6px 0 14px; }
      .ec-mode-tile {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.14));
        background: transparent;
        color: var(--secondary-text-color, #6b93a8);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
      }
      .ec-mode-tile ha-icon { --mdc-icon-size: 24px; }
      .ec-mode-tile.active {
        border-color: var(--primary-color, rgba(0,212,255,0.4));
        background: color-mix(in srgb, var(--primary-color, #03a9f4) 12%, transparent);
        color: var(--primary-color, #00d4ff);
      }
      ha-entity-picker { display: block; width: 100%; }
      .ec-row:has(ha-entity-picker) {
        flex-direction: column;
        align-items: stretch;
        min-height: unset;
      }
      .ec-row:has(ha-entity-picker) .ec-label {
        flex: none;
        margin-bottom: 2px;
      }
      .ec-input, .ec-select {
        width: 100%;
        box-sizing: border-box;
        background: var(--secondary-background-color, rgba(0,8,18,0.7));
        border: 1px solid var(--divider-color, rgba(0,212,255,0.18));
        border-radius: 6px;
        padding: 5px 8px;
        font-size: 15px;
        color: var(--primary-text-color, #c8e0ec);
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
        appearance: none;
      }
      .ec-input:focus, .ec-select:focus {
        border-color: var(--primary-color, rgba(0,212,255,0.55));
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color, #03a9f4) 18%, transparent);
      }
      .ec-input-num { width: 6em; }
      /* HA pickers sit in our shadow root, so their outer box is reachable here.
         The inner Material row is sized to match by _injectPickerStyle. */
      ha-entity-picker, ha-icon-picker {
        display: block;
        width: 100%;
        --ha-combo-box-item-min-height: 30px;
      }
      ha-entity-picker::part(field), ha-icon-picker::part(field) { min-height: 30px; }

      /* Additional CSS textarea (issue #12) — monospace, resizable; invalid
         declarations highlighted in var(--error-color) via .ec-css-invalid. */
      .ec-css-input {
        font-family: monospace;
        font-size: 12px;
        line-height: 1.4;
        resize: vertical;
        min-height: 38px;
        white-space: pre;
      }
      .ec-css-invalid {
        border-color: var(--error-color, #db4437) !important;
        color: var(--error-color, #db4437) !important;
      }

      /* Number stepper — mock's "Number fields: stepper style" control pattern. Wraps the
         existing editable input (unchanged) with +/- buttons that call its native
         stepUp()/stepDown(); direct typing still works. */
      .ec-num-wrap { display: inline-flex; align-items: center; gap: 3px; vertical-align: middle; }
      /* Our own +/- steppers replace the browser's. "appearance: none" on the
         input does not remove the inner spin button, so it has to be hidden
         explicitly or the field shows two sets of arrows. Scoped to
         .ec-num-wrap so the color picker's RGB inputs keep their native ones. */
      .ec-num-wrap input[type='number'] { -moz-appearance: textfield; }
      .ec-num-wrap input[type='number']::-webkit-inner-spin-button,
      .ec-num-wrap input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
      .ec-num-wrap .ec-input-num { width: 6em; }
      .ec-num-wrap .ec-input-num-small { width: 3em; }
      .ec-num-steppers { display: flex; gap: 2px; flex: 0 0 auto; }
      .ec-num-step {
        width: 20px;
        height: 24px;
        padding: 0;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.2));
        border-radius: 5px;
        background: var(--primary-color, #03a9f4);
        color: var(--primary-text-color, #8fc8dc);
        font-size: 14px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      // .ec-num-step:hover { background: color-mix(in srgb, var(--primary-color, #03a9f4) 16%, transparent); border-color: var(--primary-color, rgba(0,212,255,0.45)); }
      // .ec-num-step:active { background: color-mix(in srgb, var(--primary-color, #03a9f4) 28%, transparent); }

      /* Select chevron — mock's "Select (chevron)" control pattern, per the ribbon-redesign
         README control-pattern spec. Pure CSS so every existing <select class="ec-select">
         picks it up with no markup changes. */
      .ec-select {
        padding-right: 26px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b93a8' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 6px center;
        background-size: 16px;
      }

      /* Toggle switch — mock's "Switch/toggle" control pattern. Pure CSS restyle of every
         existing <input type="checkbox">; no markup or state-handling changes required. */
      input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        width: 38px;
        height: 21px;
        flex: 0 0 auto;
        border-radius: 11px;
        background: color-mix(in srgb, var(--primary-text-color, #ffffff) 12%, transparent);
        border: 1px solid var(--divider-color, rgba(0,212,255,0.2));
        position: relative;
        cursor: pointer;
        outline: none;
        vertical-align: middle;
        transition: background 0.15s, border-color 0.15s;
      }
      input[type="checkbox"]::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #f5f8fa;
        box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        transition: transform 0.15s, background 0.15s;
      }
      input[type="checkbox"]:checked {
        background: var(--primary-color, #03a9f4);
        border-color: var(--primary-color, #03a9f4);
      }
      input[type="checkbox"]:checked::before {
        transform: translateX(17px);
        background: #fff;
      }
      input[type="checkbox"]:focus-visible {
        box-shadow: 0 0 0 2px rgba(0,212,255,0.25);
      }

      /* ── Dual-range speed slider ── */
      .ec-dual-range { display: flex; align-items: center; gap: 8px; width: 100%; }
      .ec-dual-range-label { font-size: 11px; color: var(--secondary-text-color, #aaa); white-space: nowrap; }
      .ec-dual-range-track { position: relative; flex: 1; height: 22px; }
      .ec-dual-range-track input[type=range] {
        position: absolute; top: 3px; left: 0; width: 100%; margin: 0;
        -webkit-appearance: none; appearance: none;
        background: transparent; pointer-events: none; height: 16px;
      }
      .ec-dual-range-track input[type=range]::-webkit-slider-runnable-track {
        background: rgba(255,255,255,0.15); border-radius: 4px; height: 4px;
      }
      .ec-dual-range-track input[type=range]::-moz-range-track {
        background: rgba(255,255,255,0.15); border-radius: 4px; height: 4px;
      }
      .ec-dual-range-track input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none; pointer-events: all; cursor: pointer;
        width: 16px; height: 16px; border-radius: 50%;
        background: var(--primary-color, #00d4ff); border: 2px solid rgba(0,0,0,0.35);
        margin-top: -6px;
      }
      .ec-dual-range-track input[type=range]::-moz-range-thumb {
        pointer-events: all; cursor: pointer;
        width: 14px; height: 14px; border-radius: 50%;
        background: var(--primary-color, #00d4ff); border: 2px solid rgba(0,0,0,0.35);
      }

      /* ── Color picker ── */
      .ec-cp-wrap { position: relative; }
      .ec-color-row { display: flex; align-items: center; gap: 6px; }
      .ec-cp-alpha { padding: 6px 8px 2px; }
      .ec-cp-alpha-label {
        display: block; font-size: 11px; margin-bottom: 3px;
        color: var(--secondary-text-color, #aaa);
      }
      .ec-cp-alpha .ec-opacity-row input[type=range] { max-width: none; }
      .ec-opacity-row { display: flex; align-items: center; gap: 6px; }
      .ec-opacity-row input[type=range] { flex: 1; min-width: 80px; max-width: 140px; }
      .ec-opacity-val { min-width: 36px; text-align: right; font-size: 12px; color: var(--secondary-text-color, #aaa); }
      .ec-color-swatch-btn {
        width: 36px;
        height: 28px;
        flex-shrink: 0;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.3));
        border-radius: 6px;
        cursor: pointer;
        padding: 0;
        background-image: linear-gradient(45deg, #666 25%, transparent 25%),
          linear-gradient(-45deg, #666 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #666 75%),
          linear-gradient(-45deg, transparent 75%, #666 75%);
        background-size: 8px 8px;
        background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
        background-color: #444;
        position: relative;
      }
      /* The colour sits on an overlay rather than the button's own background,
         so the checkerboard stays visible behind a translucent value. */
      .ec-color-swatch-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--ec-swatch, transparent);
      }
      .ec-color-text {
        flex: 1;
        min-width: 0;
        max-width: 6em;
        font-family: monospace;
        font-size: 12px;
        background: var(--secondary-background-color, rgba(255,255,255,0.06));
        border: 1px solid var(--divider-color, rgba(255,255,255,0.15));
        border-radius: 4px;
        color: var(--primary-text-color, #fff);
        padding: 3px 6px;
        height: 28px;
        box-sizing: border-box;
      }
      .ec-color-text::placeholder { color: var(--secondary-text-color, rgba(255,255,255,0.3)); }
      .ec-cp-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9998;
      }
      .ec-cp-popup {
        position: absolute;
        top: calc(100% + 4px);
        bottom: auto;
        left: 0;
        z-index: 9999;
        background: var(--card-background-color, #1a2332);
        border: 1px solid var(--divider-color, rgba(0,212,255,0.3));
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        width: 220px;
        max-width: calc(100vw - 24px);
      }
      .ec-cp-main { width: 100%; }
      /* RGB / CSS mode switch */
      .ec-cp-modes {
        display: flex; margin-bottom: 8px; border-radius: 6px; overflow: hidden;
        border: 1px solid rgba(255,255,255,0.15);
      }
      .ec-cp-mode {
        flex: 1 1 0; padding: 5px 0; font-size: 11px; cursor: pointer;
        background: transparent; border: none; color: #aaa; letter-spacing: 0.04em;
      }
      .ec-cp-mode + .ec-cp-mode { border-left: 1px solid rgba(255,255,255,0.15); }
      .ec-cp-mode:hover { background: rgba(255,255,255,0.06); color: #ddd; }
      .ec-cp-mode.active { background: rgba(0,212,255,0.18); color: #00d4ff; font-weight: 600; }
      .ec-cp-popup--above { top: auto; bottom: calc(100% + 4px); }
      .ec-cp-popup hex-color-picker {
        width: 100%;
        --cp-border-radius: 6px;
        --cp-color-focus-color: rgba(0,212,255,0.5);
      }
      .ec-cp-rgb {
        display: flex;
        gap: 6px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(255,255,255,0.08);
      }
      .ec-cp-rgb-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        font-size: 10px;
        color: #aaa;
        gap: 3px;
      }
      .ec-cp-rgb-input {
        width: 100%;
        text-align: center;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 4px;
        color: #fff;
        font-size: 11px;
        padding: 3px 0;
        -moz-appearance: textfield;
      }
      .ec-cp-rgb-input::-webkit-inner-spin-button,
      .ec-cp-rgb-input::-webkit-outer-spin-button { opacity: 0.4; }
      .ec-cp-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(255,255,255,0.08);
      }
      .ec-cp-preset {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.25);
        cursor: pointer;
        padding: 0;
        transition: transform 0.1s, border-color 0.1s;
      }
      .ec-cp-preset:hover { transform: scale(1.25); border-color: rgba(255,255,255,0.7); }

      /* ── Color-picker theme/custom variable column (right of the picker) ── */
      .ec-cp-vars { width: 100%; display: flex; flex-direction: column; }
      .ec-cp-vars-title {
        font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;
        color: #888; padding: 0 2px 4px;
      }
      .ec-cp-vars-hint { font-size: 10px; color: #888; line-height: 1.4; padding: 0 2px 8px; }
      .ec-cp-vars-list {
        max-height: 260px;
        overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
      }
      .ec-cp-vars-list::-webkit-scrollbar { width: 8px; }
      .ec-cp-vars-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.18); border-radius: 4px; }
      .ec-cp-var-row {
        display: flex; align-items: center; gap: 8px; width: 100%; text-align: left;
        background: transparent; border: none; border-radius: 5px; cursor: pointer;
        padding: 5px 6px; color: var(--primary-text-color); font-size: 12px;
      }
      .ec-cp-var-row:hover { background: rgba(255,255,255,0.08); }
      .ec-cp-var-chip {
        width: 18px; height: 18px; flex: 0 0 auto; border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.3); box-sizing: border-box;
      }
      .ec-cp-var-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .ec-cp-vars-sep { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: #888; padding: 6px 6px 2px; }

      /* ── Buttons ── */
      .ec-flow-paths-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: visible;
        z-index: 2;
      }
      .ec-flow-name-input {
        font-size: 12px;
        padding: 3px 8px;
        border: 1px solid rgba(0,212,255,0.4);
        border-radius: 4px;
        background: rgba(0,0,0,0.3);
        color: #e0e0e0;
        width: 120px;
        outline: none;
      }
      .ec-flow-name-input:focus {
        border-color: rgba(0,212,255,0.8);
        box-shadow: 0 0 6px rgba(0,212,255,0.2);
      }
      .ec-align-section-divider {
        border: none;
        border-top: 1px solid rgba(255,255,255,0.08);
        margin: 6px 0 4px;
      }
      .ec-btn-add {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 6px 13px;
        /* Separate the button from the list row above and any hint below it. */
        margin: 8px 0 6px;
        font-size: 12.5px;
        font-weight: 600;
        background: var(--primary-color, #03a9f4);
        color: #fff;

        // font-size: 13px;
        // font-weight: 600;
        // letter-spacing: 0.05em;
        // padding: 4px 12px;
        // border: 1px solid rgba(0,212,255,0.45);
        // border-radius: 20px;
        // background: rgba(0,212,255,0.06);
        // color: #00c8f0;
        // cursor: pointer;
        // transition: background 0.15s, box-shadow 0.15s, border-color 0.15s;
      }
      // .ec-btn-add:hover {
      //   background: rgba(0,212,255,0.14);
      //   border-color: rgba(0,212,255,0.7);
      //   box-shadow: 0 0 10px rgba(0,212,255,0.2);
      // }
      .ec-btn-remove {
        font-size: 13px;
        padding: 2px 6px;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: rgba(255,80,80,0.6);
        cursor: pointer;
        line-height: 1;
        transition: color 0.12s, background 0.12s;
        }
      .ec-btn-remove:hover {
        background: rgba(255,80,80,0.12);
        color: #ff5050;
      }
      .ec-btn-copy, .ec-btn-paste {
        font-size: 14px;
        padding: 2px 5px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        line-height: 1;
        transition: color 0.12s, background 0.12s;
      }
      .ec-btn-copy { color: rgba(0,212,255,0.55); }
      .ec-btn-copy:hover { background: rgba(0,212,255,0.12); color: #00d4ff; }
      .ec-btn-paste { color: rgba(80,200,120,0.7); }
      .ec-btn-paste:hover { background: rgba(80,200,120,0.12); color: #50c878; }
      .ec-stat-yaml {
        margin: 6px 0 4px;
        border: 1px solid rgba(0,212,255,0.2);
        border-radius: 6px;
        overflow: hidden;
      }
      .ec-stat-yaml-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        background: rgba(0,212,255,0.08);
        font-size: 11px;
        color: rgba(255,255,255,0.5);
        font-weight: 600;
        letter-spacing: 0.04em;
      }
      .ec-stat-yaml-code {
        margin: 0;
        padding: 8px;
        font-size: 10px;
        font-family: 'Courier New', monospace;
        color: rgba(255,255,255,0.7);
        background: rgba(0,0,0,0.3);
        white-space: pre;
        overflow-x: auto;
        line-height: 1.5;
      }
      .ec-graph-series {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 6px;
        padding: 6px 8px;
        margin-bottom: 6px;
      }
      .ec-graph-series-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
      }
      .ec-graph-series-actions {
        display: flex;
        align-items: center;
        gap: 2px;
      }
      .ec-btn-reorder {
        background: rgba(255,255,255,0.08);
        border: none;
        border-radius: 3px;
        color: rgba(255,255,255,0.6);
        cursor: pointer;
        font-size: 10px;
        line-height: 1;
        padding: 2px 5px;
      }
      .ec-btn-reorder:hover:not(:disabled) {
        background: rgba(255,255,255,0.16);
        color: #fff;
      }
      .ec-btn-reorder:disabled {
        opacity: 0.25;
        cursor: default;
      }
      .ec-graph-series-num {
        font-size: 11px;
        font-weight: 600;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .ec-copy-badge {
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 3px;
        background: rgba(0,212,255,0.15);
        color: #00d4ff;
        letter-spacing: 0.04em;
      }
      .ec-col-badge {
        font-size: 10px;
        padding: 1px 4px;
        border-radius: 3px;
        background: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.6);
        font-weight: 600;
        letter-spacing: 0.04em;
      }
      .ec-type-badge {
        font-size: 10px;
        padding: 1px 4px;
        border-radius: 3px;
        background: rgba(0,180,120,0.2);
        color: rgba(0,220,150,0.9);
        font-weight: 600;
        letter-spacing: 0.04em;
      }
      .ec-drag-handle {
        width: 14px;
        flex-shrink: 0;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3px;
        padding: 2px 1px;
        cursor: grab;
        opacity: 0.35;
        border-radius: 3px;
        transition: opacity 0.12s;
      }
      .ec-drag-handle::before, .ec-drag-handle::after {
        content: '';
        height: 2px;
        background: currentColor;
        border-radius: 1px;
      }
      .ec-drag-handle:hover { opacity: 0.75; }
      .ec-list-row.ec-dragging { opacity: 0.3; }
      .ec-list-row.ec-drag-over {
        outline: 1px solid rgba(0,212,255,0.5);
        background: rgba(0,212,255,0.07);
        border-radius: 4px;
      }
      .ec-btn-reorder {
        font-size: 12px;
        padding: 2px 5px;
        border: 1px solid rgba(0,212,255,0.15);
        border-radius: 4px;
        background: transparent;
        color: #375f78;
        cursor: pointer;
        line-height: 1;
        transition: border-color 0.12s, color 0.12s;
      }
      .ec-btn-reorder:hover {
        border-color: rgba(0,212,255,0.45);
        color: #00c8f0;
      }
      .ec-btn-reorder:disabled { opacity: 0.2; cursor: default; }
      .ec-btn-clear {
        font-size: 13px;
        padding: 2px 6px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 4px;
        background: transparent;
        color: #375f78;
        cursor: pointer;
        transition: border-color 0.12s, color 0.12s;
      }
      .ec-btn-clear:hover {
        border-color: rgba(0,212,255,0.3);
        color: #00c8f0;
      }

      .ec-align-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 2px 0 4px;
      }
      .ec-btn-align {
        font-size: 13px;
        font-weight: 500;
        padding: 4px 8px;
        border: none;
        border-radius: 6px;
        background: var(--primary-color);
        color: var(--primary-text-color);
        cursor: pointer;
        white-space: nowrap;
      }
      .ec-empty {
        font-size: 14px;
        font-style: italic;
        color: #375f78;
        margin: 4px 0;
      }

      ha-entity-picker {
        display: block;
        width: 100%;
        border-radius: 4px;
        border: 1px solid;
        --md-sys-color-surface: var(--primary-color);
      }
      ha-entity-picker:hover {
        border-radius: 4px;
        border: 1px solid var(--primary-color);
      }

      /* ── Zone handles ── */
      .ec-zone-handle {
        position: absolute;
        border: 1px dashed rgba(255, 200, 0, 0.5);
        border-radius: 3px;
        pointer-events: auto;
        cursor: grab;
        box-sizing: border-box;
        transition: border-color 0.15s;
      }
      .ec-zone-handle:hover {
        border-color: rgba(255, 200, 0, 0.85);
      }
      .ec-zone-handle.selected {
        border: 2px dashed #ffd23f;
        box-shadow: 0 0 6px rgba(255, 210, 63, 0.4);
      }
      .ec-zone-handle:active { cursor: grabbing; }
      .ec-zone-label {
        position: absolute;
        top: 3px;
        left: 4px;
        font-size: 10px;
        font-weight: 600;
        color: rgba(255, 210, 63, 0.9);
        pointer-events: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: calc(100% - 8px);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
        letter-spacing: 0.03em;
      }

      .ec-zone-resize {
        position: absolute;
        width: 9px;
        height: 9px;
        background: #ffd23f;
        border: 1px solid #1a2a36;
        border-radius: 2px;
        pointer-events: auto;
        z-index: 2;
      }
      .ec-zone-resize-tl { left: -5px; top: -5px; cursor: nwse-resize; }
      .ec-zone-resize-tr { right: -5px; top: -5px; cursor: nesw-resize; }
      .ec-zone-resize-bl { left: -5px; bottom: -5px; cursor: nesw-resize; }
      .ec-zone-resize-br { right: -5px; bottom: -5px; cursor: nwse-resize; }

      /* ── Background (canvas image) overlay ── */
      .ec-bg-ov {
        position: absolute;
        box-sizing: border-box;
        pointer-events: auto;
        cursor: grab;
        border: 1px dashed rgba(120, 200, 255, 0);
        transition: border-color 0.15s;
      }
      .ec-bg-ov:hover {
        border-color: rgba(120, 200, 255, 0.45);
      }
      .ec-bg-ov.selected {
        border: 2px dashed #57c7ff;
        box-shadow: 0 0 6px rgba(87, 199, 255, 0.35), inset 0 0 20px rgba(87, 199, 255, 0.08);
      }
      .ec-bg-ov:active { cursor: grabbing; }
      .ec-bg-resize {
        position: absolute;
        width: 11px;
        height: 11px;
        background: #57c7ff;
        border: 1px solid #10222e;
        border-radius: 2px;
        pointer-events: auto;
        z-index: 3;
      }
      .ec-bg-resize-tl { left: -6px; top: -6px; cursor: nwse-resize; }
      .ec-bg-resize-tr { right: -6px; top: -6px; cursor: nesw-resize; }
      .ec-bg-resize-bl { left: -6px; bottom: -6px; cursor: nesw-resize; }
      .ec-bg-resize-br { right: -6px; bottom: -6px; cursor: nwse-resize; }

      /* ── Flow overlay ── */
      .ec-flow-layer {
        position: absolute;
        inset: 0;
        pointer-events: auto;
        cursor: crosshair;
      }
      .ec-snap {
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 230, 120, 0.55);
        border: 1px solid #0f9;
        pointer-events: auto;
        cursor: pointer;
      }
      .ec-snap:hover {
        width: 13px;
        height: 13px;
      }
      .ec-flow-node {
        position: absolute;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: auto;
        box-sizing: border-box;
      }
      .ec-flow-node.free {
        background: #ffd23f;
        border: 1px solid #fff;
        cursor: grab;
      }
      .ec-flow-node.anchored {
        background: transparent;
        border: 2px solid #ffd23f;
        cursor: pointer;
      }
      .ec-flow-node.selected {
        box-shadow: 0 0 5px #ffd23f, 0 0 0 2px rgba(255, 255, 255, 0.5);
      }

      /* ── SVG library browser ── */
      .ec-lib-backdrop {
        position: fixed; inset: 0; z-index: 10100;
        background: rgba(4,8,14,0.72);
      }
      .ec-lib-modal {
        position: fixed; z-index: 10101;
        top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: min(520px, 94vw); max-height: 80vh;
        background: rgba(10,18,28,0.97);
        border: 1px solid rgba(0,212,255,0.28);
        border-radius: 12px;
        overflow-y: auto;
        padding: 0 0 12px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,212,255,0.08);
      }
      .ec-lib-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 16px 10px;
        border-bottom: 1px solid rgba(0,212,255,0.12);
        position: sticky; top: 0;
        background: rgba(10,18,28,0.98);
        z-index: 1;
      }
      .ec-lib-title {
        font-size: 15px; font-weight: 700; color: #00d4ff; letter-spacing: 0.03em;
      }
      .ec-lib-cat {
        font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
        color: #375f78; padding: 10px 16px 4px;
      }
      .ec-lib-grid {
        display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px; padding: 4px 12px 0;
      }
      .ec-lib-item {
        display: flex; flex-direction: column; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
        border-radius: 8px; padding: 10px 6px 8px; cursor: pointer;
        transition: background 0.14s, border-color 0.14s, box-shadow 0.14s;
      }
      .ec-lib-item:hover {
        background: rgba(0,212,255,0.1);
        border-color: rgba(0,212,255,0.45);
        box-shadow: 0 0 12px rgba(0,212,255,0.18);
      }
      .ec-lib-preview {
        width: 52px; height: 52px; object-fit: contain;
      }
      .ec-lib-thumb-placeholder {
        width: 52px; height: 52px;
        background: rgba(0,212,255,0.06);
        border: 1px dashed rgba(0,212,255,0.2);
        border-radius: 4px;
      }
      .ec-lib-name {
        font-size: 10px; color: #7aacbf; text-align: center;
        line-height: 1.3; word-break: break-word;
      }
      .ec-lib-browse-row {
        padding: 2px 0 6px;
        display: flex;
      }
      .ec-lib-browse-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 5px 14px;
        font-size: 12px;
        font-weight: 600;
        background: var(--primary-color, #03a9f4);
        color: #fff;
      }
    `];z([U({attribute:!1})],C.prototype,"hass",2);z([N()],C.prototype,"_config",2);z([N()],C.prototype,"_selCard",2);z([N()],C.prototype,"_selField",2);z([N()],C.prototype,"_selCards",2);z([N()],C.prototype,"_selEmbCards",2);z([N()],C.prototype,"_groupColGap",2);z([N()],C.prototype,"_groupRowGap",2);z([N()],C.prototype,"_selFlow",2);z([N()],C.prototype,"_showAddFlowInput",2);z([N()],C.prototype,"_newFlowName",2);z([N()],C.prototype,"_pendingFlowIdx",2);z([N()],C.prototype,"_showFlowCompleteModal",2);z([N()],C.prototype,"_selPoint",2);z([N()],C.prototype,"_selSeries",2);z([N()],C.prototype,"_selVirtual",2);z([N()],C.prototype,"_selVirtualInput",2);z([N()],C.prototype,"_selTrigger",2);z([N()],C.prototype,"_selZone",2);z([N()],C.prototype,"_selExtCard",2);z([N()],C.prototype,"_selExtField",2);z([N()],C.prototype,"_templateName",2);z([N()],C.prototype,"_templateError",2);z([N()],C.prototype,"_previewBoxes",2);z([N()],C.prototype,"_previewExpanded",2);z([N()],C.prototype,"_barAtTop",2);z([N()],C.prototype,"_copiedFields",2);z([N()],C.prototype,"_copySourceIdx",2);z([N()],C.prototype,"_virtualClipboard",2);z([N()],C.prototype,"_copiedField",2);z([N()],C.prototype,"_copiedFieldSrc",2);z([N()],C.prototype,"_copiedOption",2);z([N()],C.prototype,"_dragSrc",2);z([N()],C.prototype,"_cpOpenId",2);z([N()],C.prototype,"_cpOpenAbove",2);z([N()],C.prototype,"_ggOpen",2);z([N()],C.prototype,"_wizStep",2);z([N()],C.prototype,"_wiz",2);z([N()],C.prototype,"_bgSelected",2);z([N()],C.prototype,"_selEmbCard",2);z([N()],C.prototype,"_embEditorOpen",2);z([N()],C.prototype,"_embEditorYaml",2);z([N()],C.prototype,"_embNativeEditor",2);z([N()],C.prototype,"_embPickerOpen",2);z([N()],C.prototype,"_embPickerSearch",2);z([N()],C.prototype,"_variantOpen",2);z([N()],C.prototype,"_variantError",2);z([N()],C.prototype,"_saveVariantFor",2);z([N()],C.prototype,"_saveVariantLabel",2);z([N()],C.prototype,"_variantImportError",2);z([N()],C.prototype,"_navTab",2);z([N()],C.prototype,"_navPanel",2);z([N()],C.prototype,"_navPath",2);z([N()],C.prototype,"_cpMode",2);C=z([ct($i)],C);const Vo="modulepreload",Uo=function(e){return"/"+e},ii={},qo=function(t,s,i){let n=Promise.resolve();if(s&&s.length>0){let a=function(p){return Promise.all(p.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");n=a(s.map(p=>{if(p=Uo(p),p in ii)return;ii[p]=!0;const u=p.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Vo,u||(h.as="script"),h.crossOrigin="",h.href=p,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((b,v)=>{h.addEventListener("load",b),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return n.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};var Yo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Et=(e,t,s,i)=>{for(var n=i>1?void 0:i?Ko(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Yo(t,s,n),n};const Xe=new Map;function Xo(e,t,s){return s<=t?0:Math.max(0,Math.min(100,(e-t)/(s-t)*100))}function Zo(e,t,s){if(!t?.length)return s;const i=[...t].sort((o,a)=>o.value-a.value);let n=s;for(const o of i)e>=o.value&&(n=o.color);return n}let Z=class extends vt{constructor(){super(...arguments),this.rawValue=0,this.entityUnit="",this._svgText="",this._shapesReady=!1,this._svgNatW=0,this._svgNatH=0}connectedCallback(){super.connectedCallback(),this._load()}updated(e){if(e.has("field")&&this._load(),this._applyExtraCss(),this.field?.svg&&this._svgText){const t=this.renderRoot.querySelector(".fill");t&&(t.style.filter=""),this.field.svg?.toLowerCase().includes("thermometer")?this._applyThermometerFill():t?.querySelector("[data-needle]")?this._applyNeedleFill():this._svgKey==="inverter"?this._applyInverterFill():(this._applyExternalFill(),this._updateSvgLabels()),this._applyTankColor()}}_applyExtraCss(){const e=this._svgKey,s=[e?this.defaults?.[`${e}_extra_css`]:void 0,this.field?.extra_css].map(i=>(i??"").trim().replace(/;+\s*$/,"")).filter(i=>i.length>0).join(";");s?this.setAttribute("style",s):this.getAttribute("style")&&this.removeAttribute("style")}async _load(){const e=this.field;e&&(e.svg?await this._fetchSvg(e.svg):e.shape&&await this._loadShapes())}async _fetchSvg(e){let t=Xe.get(e);if(!t){const i=fetch(e).then(n=>n.text()).catch(()=>"");Xe.set(e,i),t=i}const s=await t;if(typeof t!="string"&&Xe.set(e,s),this._svgText!==s){this._svgText=s;const i=s.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);i&&(this._svgNatW=parseFloat(i[1]),this._svgNatH=parseFloat(i[2]))}}async _loadShapes(){Z._shapesModule||(Z._shapesModule=await qo(()=>import("./mosaic-canvas-shapes.js"),[])),this._shapesReady||(this._shapesReady=!0)}get _pct(){return this.fillPct!=null?Math.max(0,Math.min(100,this.fillPct)):Xo(this.rawValue,this.field?.min??m("fill_min")??0,this.field?.max??m("fill_max")??100)}get _svgKey(){const e=this.field?.svg?.toLowerCase()??"";return e.includes("thermometer-horizontal")?"thermo_h":e.includes("thermometer")?"thermo":e.includes("battery-horizontal")?"battery_h":e.includes("battery-vertical")?"battery_v":e.includes("tank-cylinder")?"tank_cylinder":e.includes("tank-water")?"tank_water":e.includes("tank-fermenter")?"tank_fermenter":e.includes("tank-cone")?"tank_cone":e.includes("gauge-arc")?"gauge_arc":e.includes("inverter")?"inverter":null}get _color(){const e=this._svgKey,t=e?this.defaults?.[`${e}_fill_color`]:void 0;return Zo(this.rawValue,this.field?.thresholds,this.field?.fill_color??t??m("fill_color")??"#00d4ff")}get _fillColor2(){const e=this._svgKey,t=e?this.defaults?.[`${e}_fill_color2`]:void 0;return this.field?.fill_color2??t}get _w(){const e=this.field;if(!e)return 60;if(e.width!=null)return e.width;const t=this._h;return e.svg&&this._svgNatW&&this._svgNatH?Math.round(t*this._svgNatW/this._svgNatH):e.shape==="bar-h"?Math.round(t*4):Math.round(t*.5)}get _h(){const e=this.field;return e?e.height!=null?e.height:e.svg&&this._svgNatH?this._svgNatH:e.shape==="bar-h"?40:120:120}_applyExternalFill(){const e=this.field;if(!e)return;const t=this.renderRoot.querySelector(".fill");if(!t)return;const s=t.querySelector("svg");s&&(s.setAttribute("width","100%"),s.setAttribute("height","100%"));const i=e.fill_id,n=(i?t.querySelector(`#${CSS.escape(i)}`):null)??t.querySelector("[data-fill]")??t.querySelector("#fill");if(!n)return;const o=this._pct,a=e.fill_direction??m("fill_direction")??"up",l={up:`polygon(0% ${100-o}%, 100% ${100-o}%, 100% 100%, 0% 100%)`,down:`polygon(0% 0%, 100% 0%, 100% ${o}%, 0% ${o}%)`,left:`polygon(0% 0%, ${o}% 0%, ${o}% 100%, 0% 100%)`,right:`polygon(${100-o}% 0%, 100% 0%, 100% 100%, ${100-o}% 100%)`},c=n;c.style.transition||(c.style.transition="clip-path 0.6s ease"),c.style.clipPath=l[a]??l.up;const p=(e.thresholds?.length??0)>0,u=this._fillColor2,d=t.querySelector('[data-fill-stop="0"]'),h=t.querySelector('[data-fill-stop="1"]');if(!p&&u)if(d&&h){d.setAttribute("stop-color",this._color),h.setAttribute("stop-color",u);const b=d.closest("linearGradient,radialGradient");b?.id&&(c.style.fill=`url(#${b.id})`)}else this._applyInjectedGradient(s,c,this._color,u,a);else this._removeInjectedGradient(s),d&&d.setAttribute("stop-color",this._color),h&&h.setAttribute("stop-color",this._color),c.style.fill=this._color}_applyInjectedGradient(e,t,s,i,n){if(!e){t.style.fill=s;return}const o="_mc_fg";let a=e.querySelector("defs");a||(a=document.createElementNS("http://www.w3.org/2000/svg","defs"),e.insertBefore(a,e.firstChild));let l=a.querySelector(`#${o}`);if(!l){l=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),l.setAttribute("id",o),l.setAttribute("gradientUnits","objectBoundingBox");const v=document.createElementNS("http://www.w3.org/2000/svg","stop");v.setAttribute("offset","0%");const x=document.createElementNS("http://www.w3.org/2000/svg","stop");x.setAttribute("offset","100%"),l.appendChild(v),l.appendChild(x),a.appendChild(l)}const c={up:["0.5","1","0.5","0"],down:["0.5","0","0.5","1"],left:["0","0.5","1","0.5"],right:["1","0.5","0","0.5"]},[p,u,d,h]=c[n]??c.up;l.setAttribute("x1",p),l.setAttribute("y1",u),l.setAttribute("x2",d),l.setAttribute("y2",h);const b=l.querySelectorAll("stop");b[0].setAttribute("stop-color",s),b[1].setAttribute("stop-color",i),t.style.fill=`url(#${o})`}_removeInjectedGradient(e){e?.querySelector("#_mc_fg")?.remove()}_applyInverterFill(){const e=this.renderRoot.querySelector(".fill");if(!e)return;const t=e.querySelector("svg");if(!t)return;if(!t.getAttribute("viewBox")){const n=t.getAttribute("width"),o=t.getAttribute("height");n&&o&&t.setAttribute("viewBox",`0 0 ${parseFloat(n)} ${parseFloat(o)}`)}t.setAttribute("width","100%"),t.setAttribute("height","100%");const s=t.querySelector("#line");if(!s)return;const i=this.field?.fill_color??this.defaults?.inverter_line_color??m("inverter_line_color")??"#00d4ff";s.style.fill=i}_applyTankColor(){const e=this._svgKey,t=e?this.defaults?.[`${e}_tank_color`]:void 0,s=this.field?.tank_color??t;if(!s)return;const i=this.renderRoot.querySelector(".fill");if(!i)return;const n=i.querySelector("#tank"),o=i.querySelector("#tank-top");n&&(o?n.style.stroke=s:n.style.fill=s),o&&(o.style.fill=s)}_applyNeedleFill(){const e=this.renderRoot.querySelector(".fill");if(!e)return;const t=e.querySelector("[data-needle]");if(!t)return;const s=-90+this._pct*1.8;t.style.transition="transform 0.6s ease",t.style.transformBox="fill-box",t.style.transformOrigin="50% 100%",t.style.transform=`rotate(${s}deg)`;const i=t.querySelector("path");i&&(i.style.fill=this._color)}_updateSvgLabels(){const e=this.renderRoot.querySelector(".fill");if(!e)return;const t=this.field;if(!t)return;const s=this._svgKey,i=s?this.defaults?.[`${s}_label_color`]:void 0,n=s?this.defaults?.[`${s}_label_size`]:void 0,o=t.gauge_label_color??i??m("gauge_label_color")??"#cccccc",a=t.gauge_label_size??n??m("gauge_label_size")??11,l=e.querySelector("[data-min-label]"),c=e.querySelector("[data-max-label]"),p=e.querySelector("[data-value]");if(l&&(l.textContent=t.gauge_min_label??"",l.setAttribute("fill",o),l.setAttribute("font-size",String(a)),l.style.display=t.gauge_min_label?"":"none"),c&&(c.textContent=t.gauge_max_label??"",c.setAttribute("fill",o),c.setAttribute("font-size",String(a)),c.style.display=t.gauge_max_label?"":"none"),p)if(t.gauge_show_value){const u=t.decimals!=null?this.rawValue.toFixed(t.decimals):String(this.rawValue);p.textContent=t.unit?`${u} ${t.unit}`:u,p.setAttribute("fill",t.gauge_label_color??m("gauge_label_color")??"#cccccc"),p.setAttribute("font-size",String(Math.round(a*1.5))),p.style.display=""}else p.style.display="none"}_applyThermometerFill(){const e=this.renderRoot.querySelector(".fill");if(!e)return;const t=this.field;if(!t)return;const s=e.querySelector("svg");if(!s)return;s.setAttribute("width","100%"),s.setAttribute("height","100%");const i="http://www.w3.org/2000/svg",n=e.querySelector("#fill-area"),o=e.querySelector("#tick-major-right")??e.querySelector("#tick-major"),a=e.querySelector("#tick-minor-right")??e.querySelector("#tick-minor"),l=e.querySelector("#tick-text-right")??e.querySelector("#tick-text"),c=e.querySelector("#tick-major-left"),p=e.querySelector("#tick-minor-left"),u=e.querySelector("#tick-text-left"),d=e.querySelector("#fill"),h=e.querySelector("#outer"),b=e.querySelector("#temp"),v=e.querySelector("#degrees-c"),x=e.querySelector("#degrees-f");if(!n||!d)return;const k=n.x.baseVal.value,$=n.y.baseVal.value,y=n.width.baseVal.value,g=n.height.baseVal.value,w=t.min??m("fill_min")??0,S=t.max??m("fill_max")??100,f=S-w,E=this._svgKey==="thermo_h",I=t.fill_color??(E?this.defaults?.thermo_h_fill_color:this.defaults?.thermo_fill_color)??m(E?"thermo_h_fill_color":"thermo_fill_color")??m("fill_color")??"#00d4ff",M=f>0?Math.max(0,Math.min(1,(this.rawValue-w)/f)):0,P=$+g*(1-M),D=t.thermo_tick_color??this.defaults?.thermo_tick_color??m("thermo_tick_color")??"rgba(255,255,255,0.7)",A=t.thermo_tick_font_size??this.defaults?.thermo_tick_font_size??m("thermo_tick_font_size")??4,R=t.thermo_fill_opacity_above??this.defaults?.thermo_fill_opacity_above??m("thermo_fill_opacity_above")??.5,H=t.thermo_grid_color??this.defaults?.thermo_grid_color??m("thermo_grid_color")??"rgba(255,255,255,0.25)",J=t.thermo_minor_tick_width??this.defaults?.thermo_minor_tick_width??m("thermo_minor_tick_width")??.5,F=t.thermo_major_tick_width??this.defaults?.thermo_major_tick_width??m("thermo_major_tick_width")??.75,K=t.thermo_temp_color??this.defaults?.thermo_temp_color??m("thermo_temp_color")??"#ffffff",W=t.thermo_temp_font_size??this.defaults?.thermo_temp_font_size??m("thermo_temp_font_size")??10,dt=this.defaults?.font_family??"inherit",nt=this.defaults?.mono_font_family??m("mono_font_family")??"'Courier New', monospace";h&&(h.style.stroke="none");const _t=B=>{B.style.fill=D,B.style.stroke="none",B.style.fontFamily=dt,B.removeAttribute("fill");const O=B.querySelector("tspan");if(O){if(O.getAttribute("x")==="0"&&O.getAttribute("y")==="0"){const G=B.getAttribute("x"),V=B.getAttribute("y");G&&O.setAttribute("x",G),V&&O.setAttribute("y",V)}O.style.fill=D,O.style.stroke="none",O.style.fontFamily=dt,O.removeAttribute("fill")}},j=this.entityUnit.includes("F");if(v&&(v.style.display=j?"none":"inline",j||_t(v)),x&&(x.style.display=j?"inline":"none",j&&_t(x)),b){const B=t.thermo_decimals??this.defaults?.thermo_decimals??m("thermo_decimals")??t.decimals,O=B!=null?this.rawValue.toFixed(B):String(this.rawValue);b.style.fill=K,b.style.stroke="none",b.style.fontFamily=nt,b.style.fontSize=`${W}px`,b.removeAttribute("fill");const G=b.querySelector("tspan");G?(G.textContent=O,G.style.fill=K,G.style.stroke="none",G.style.fontFamily=nt,G.style.fontSize=`${W}px`,G.removeAttribute("fill")):b.textContent=O}e.querySelector("#thermo-clip-below")?.closest("clipPath")?.remove(),e.querySelector("#thermo-clip-above")?.closest("clipPath")?.remove(),e.querySelector("#thermo-fill-group")?.remove(),e.querySelector("#thermo-fill-below")?.remove(),e.querySelector("#thermo-fill-above")?.remove(),s.querySelector("#thermo-fill-gradient")?.remove();const Nt=$+g+200,Zt=document.createElementNS(i,"clipPath");Zt.id="thermo-clip-below";const Jt=document.createElementNS(i,"rect");Jt.setAttribute("x","0"),Jt.setAttribute("width","100"),Jt.setAttribute("y",String(P)),Jt.setAttribute("height",String(Math.max(0,Nt-P))),Zt.appendChild(Jt);const Re=document.createElementNS(i,"clipPath");Re.id="thermo-clip-above";const Qt=document.createElementNS(i,"rect");Qt.setAttribute("x","0"),Qt.setAttribute("width","100"),Qt.setAttribute("y","0"),Qt.setAttribute("height",String(Math.max(0,P))),Re.appendChild(Qt);let It=s.querySelector("defs");It||(It=document.createElementNS(i,"defs"),s.prepend(It)),It.appendChild(Zt),It.appendChild(Re);let te;const Be=t.thresholds;if(Be&&Be.length>0){const B=[...Be].sort((Q,X)=>Q.value-X.value),O=document.createElementNS(i,"linearGradient");O.id="thermo-fill-gradient",O.setAttribute("gradientUnits","userSpaceOnUse"),O.setAttribute("x1","0"),O.setAttribute("x2","0"),O.setAttribute("y1",String($+g)),O.setAttribute("y2",String($));const G=(Q,X)=>{const xt=document.createElementNS(i,"stop");xt.setAttribute("offset",String(Math.max(0,Math.min(1,Q)))),xt.setAttribute("stop-color",X),O.appendChild(xt)};let V=I;for(const Q of B){const X=f>0?(Q.value-w)/f:0;if(X<=0){V=Q.color;continue}if(X>=1)break;G(X,V),G(X,Q.color),V=Q.color}G(1,V),It.appendChild(O),te="url(#thermo-fill-gradient)"}else if(this._fillColor2){const B=document.createElementNS(i,"linearGradient");B.id="thermo-fill-gradient",B.setAttribute("gradientUnits","userSpaceOnUse"),B.setAttribute("x1","0"),B.setAttribute("x2","0"),B.setAttribute("y1",String($+g)),B.setAttribute("y2",String($));const O=document.createElementNS(i,"stop");O.setAttribute("offset","0"),O.setAttribute("stop-color",I);const G=document.createElementNS(i,"stop");G.setAttribute("offset","1"),G.setAttribute("stop-color",this._fillColor2),B.appendChild(O),B.appendChild(G),It.appendChild(B),te="url(#thermo-fill-gradient)"}else te=I;d.style.display="none";const zt=d.cloneNode(!0);zt.id="thermo-fill-below",zt.style.removeProperty("filter"),zt.style.display="",zt.style.fill=te,zt.style.opacity="1",zt.setAttribute("clip-path","url(#thermo-clip-below)");const Ft=d.cloneNode(!0);Ft.id="thermo-fill-above",Ft.style.removeProperty("filter"),Ft.style.display="",Ft.style.fill=te,Ft.style.opacity=String(R),Ft.setAttribute("clip-path","url(#thermo-clip-above)");const ee=document.createElementNS(i,"g");ee.id="thermo-fill-group",ee.setAttribute("filter","url(#filter47)"),ee.appendChild(zt),ee.appendChild(Ft),d.after(ee),s.style.overflow="visible",e.querySelector("#thermo-ticks")?.remove();const me=t.thermo_text_position??this.defaults?.thermo_text_position??m("thermo_text_position")??"right",Oi=me==="right"||me==="both",Gi=me==="left"||me==="both",vs=!!(o&&a&&l),fs=!!(c&&p&&u);if(!vs&&!fs)return;const Hi=t.thermo_major_tick_length??this.defaults?.thermo_major_tick_length??m("thermo_major_tick_length"),Wi=t.thermo_minor_tick_length??this.defaults?.thermo_minor_tick_length??m("thermo_minor_tick_length"),ji=t.thermo_show_minor_tick_text??this.defaults?.thermo_show_minor_tick_text??m("thermo_show_minor_tick_text")??!1,be=[1,2,5,10,20,25,50,100,200,250,500,1e3].find(B=>Math.ceil(f/B)<=5)??10,Le=be/2,Pt=document.createElementNS(i,"g");Pt.id="thermo-ticks";const ys=B=>$+g*(1-(B-w)/f),se=[];if(Oi&&vs&&se.push({tmEl:o,tnEl:a,ttEl:l,anchorEnd:!1}),Gi&&fs&&se.push({tmEl:c,tnEl:p,ttEl:u,anchorEnd:!0}),se.length===0)return;const Vi=Math.ceil(w/Le),Ui=Math.floor(S/Le);for(const{tnEl:B,ttEl:O,anchorEnd:G}of se){const V=B.x.baseVal.value,Q=Wi??B.width.baseVal.value,X=O.x.baseVal.value,xt=O.width.baseVal.value;for(let Mt=Vi;Mt<=Ui;Mt++){if(Mt%2===0)continue;const ge=Mt*Le,Wt=ys(ge),mt=document.createElementNS(i,"line");if(mt.setAttribute("x1",String(V)),mt.setAttribute("x2",String(V+Q)),mt.setAttribute("y1",String(Wt)),mt.setAttribute("y2",String(Wt)),mt.setAttribute("stroke",D),mt.setAttribute("stroke-width",String(J)),Pt.appendChild(mt),ji){const bt=G?X+xt:X,ot=document.createElementNS(i,"text");ot.setAttribute("x",String(bt)),ot.setAttribute("y",String(Wt)),ot.setAttribute("dominant-baseline","middle"),ot.setAttribute("text-anchor",G?"end":"start"),ot.setAttribute("font-size",String(A)),ot.setAttribute("fill",D),ot.style.fontFamily=dt,ot.textContent=String(ge),Pt.appendChild(ot)}}}const qi=Math.ceil(w/be),Yi=Math.floor(S/be);for(let B=qi;B<=Yi;B++){const O=B*be,G=ys(O),V=document.createElementNS(i,"line");V.setAttribute("x1",String(k)),V.setAttribute("x2",String(k+y)),V.setAttribute("y1",String(G)),V.setAttribute("y2",String(G)),V.setAttribute("stroke",H),V.setAttribute("stroke-width",String(J)),Pt.appendChild(V);for(const{tmEl:Q,ttEl:X,anchorEnd:xt}of se){const Mt=Q.x.baseVal.value,ge=Hi??Q.width.baseVal.value,Wt=X.x.baseVal.value,mt=X.width.baseVal.value,bt=document.createElementNS(i,"line");bt.setAttribute("x1",String(Mt)),bt.setAttribute("x2",String(Mt+ge)),bt.setAttribute("y1",String(G)),bt.setAttribute("y2",String(G)),bt.setAttribute("stroke",D),bt.setAttribute("stroke-width",String(F)),Pt.appendChild(bt);const ot=xt?Wt+mt:Wt,gt=document.createElementNS(i,"text");gt.setAttribute("x",String(ot)),gt.setAttribute("y",String(G)),gt.setAttribute("dominant-baseline","middle"),gt.setAttribute("text-anchor",xt?"end":"start"),gt.setAttribute("font-size",String(A)),gt.setAttribute("fill",D),gt.style.fontFamily=dt,gt.textContent=String(O),Pt.appendChild(gt)}}(o?.parentElement??c?.parentElement??s).appendChild(Pt)}render(){const e=this.field;if(!e)return _;const t=this._w,s=this._h,i=r`<div class="fill" style="width:${t}px;height:${s}px;background:rgba(0,0,0,0.2);border-radius:4px;"></div>`;if(e.svg)return this._svgText?r`<div class="fill" style="width:${t}px;height:${s}px;overflow:hidden;"
        .innerHTML=${this._svgText}></div>`:i;if(e.shape){const n=Z._shapesModule;if(!n)return i;const o=n.SHAPES[e.shape];return o?r`<div class="fill"
        .innerHTML=${o({pct:this._pct,color:this._color,width:t,height:s})}
      ></div>`:_}return _}};Z._shapesModule=null;Z.styles=it`
    :host { display: block; line-height: 0; }
    .fill { display: inline-block; }
  `;Et([U({attribute:!1})],Z.prototype,"field",2);Et([U({attribute:!1})],Z.prototype,"defaults",2);Et([U({type:Number})],Z.prototype,"rawValue",2);Et([U({type:String})],Z.prototype,"entityUnit",2);Et([U({type:Number})],Z.prototype,"fillPct",2);Et([N()],Z.prototype,"_svgText",2);Et([N()],Z.prototype,"_shapesReady",2);Z=Et([ct(xi)],Z);var Jo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,_e=(e,t,s,i)=>{for(var n=i>1?void 0:i?Qo(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&Jo(t,s,n),n};let Gt=class extends vt{constructor(){super(...arguments),this.transparent=!1,this._cardEl=null,this._lastType=""}render(){return r`<div id="slot"></div>`}updated(e){e.has("cardConfig")?this._rebuildCard():e.has("hass")&&this._cardEl&&(this._cardEl.hass=this.hass),e.has("transparent")&&this._cardEl&&this._applyTransparent()}_applyTransparent(){this._cardEl&&(this.transparent?(this._cardEl.style.setProperty("--ha-card-background","transparent"),this._cardEl.style.setProperty("--ha-card-box-shadow","none"),this._cardEl.style.setProperty("--ha-card-border-width","0px"),this._cardEl.style.setProperty("--ha-card-border-color","transparent")):(this._cardEl.style.removeProperty("--ha-card-background"),this._cardEl.style.removeProperty("--ha-card-box-shadow"),this._cardEl.style.removeProperty("--ha-card-border-width"),this._cardEl.style.removeProperty("--ha-card-border-color")))}async _rebuildCard(){await this.updateComplete;const e=this.cardConfig,t=this._slot;if(!t)return;if(!e?.type){t.innerHTML="",this._cardEl=null;return}const s=String(e.type);if(this._cardEl&&s===this._lastType){try{this._cardEl.setConfig(e)}catch{}this._cardEl.hass=this.hass,this._applyTransparent();return}try{const i=await window.loadCardHelpers?.();if(!i?.createCardElement)return;t.innerHTML="";const n=i.createCardElement(e);n.hass=this.hass,this._lastType=s,this._cardEl=n,t.appendChild(n),this._applyTransparent()}catch(i){console.error("[mc-embedded-card] failed to create card:",i)}}};Gt.styles=it`
    :host { display: block; }
    #slot { width: 100%; }
  `;_e([U({attribute:!1})],Gt.prototype,"cardConfig",2);_e([U({attribute:!1})],Gt.prototype,"hass",2);_e([U({type:Boolean})],Gt.prototype,"transparent",2);_e([bi("#slot")],Gt.prototype,"_slot",2);Gt=_e([ct(Ae)],Gt);var ta=Object.defineProperty,Ht=(e,t,s,i)=>{for(var n=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(t,s,n)||n);return n&&ta(t,s,n),n};class et extends vt{constructor(){super(...arguments),this._editing=!1}get entityId(){return this.field?.entity}get stateObj(){const t=this.entityId;return t&&this.hass?this.hass.states[t]:void 0}displayValue(){return this._pending!==void 0?this._pending:this.readValue()}commit(t,s){s||(this._pending=t),this.field&&this.onChange?.(this.field,t,s)}reconciled(t,s){return s===void 0?!1:typeof t=="number"&&typeof s=="number"?Math.abs(t-s)<=1:t===s}updated(t){t.has("hass")&&!this._editing&&this._pending!==void 0&&this.reconciled(this._pending,this.readValue())&&(this._pending=void 0)}options(){const t=this.field,s=(t?.options??[]).map(n=>({value:n.value??n.entity??"",label:n.label??"",icon:n.icon,entity:n.entity,attribute:n.attribute,line:n.line,icon_position:n.icon_position,show_state:n.show_state,state_position:n.state_position,tap_action:n.tap_action}));if(t?.options_source==="manual")return s;const i=this.stateObj?.attributes?.[t?.options_attribute??"options"];return Array.isArray(i)&&i.length?i.map(n=>({value:String(n),label:String(n)})):s}optionLines(t){const s=new Map;for(const i of t){const n=i.line&&i.line>0?Math.floor(i.line):1,o=s.get(n);o?o.push(i):s.set(n,[i])}return[...s.keys()].sort((i,n)=>i-n).map(i=>s.get(i))}entityActive(t,s){const i=this.hass?.states[t];if(!i)return!1;const n=s?i.attributes?.[s]:i.state;if(n==null)return!1;const o=String(n).toLowerCase();return o!=="off"&&o!=="unavailable"&&o!=="unknown"&&o!=="closed"&&o!=="idle"&&o!=="false"&&o!=="0"}containerStyle(){return this.field?ue(ho(this.field,this.defaults)):""}containerDisplay(){return"inline-flex"}labelInline(t){const s=t.style?.font_size??16,i=t.style?.color?`color:${t.style.color};`:"";return r`
      ${t.icon?r`<ha-icon icon=${t.icon} style="--mdc-icon-size:${s}px;${i}"></ha-icon>`:_}
      ${t.text?r`<span style=${t.style?wt(t.style):_}>${t.text}</span>`:_}
    `}_labelItems(){const t=this.field?.align;return t==="center"?"center":t==="right"?"flex-end":"flex-start"}_renderLabelRows(t){return r`<div class="mc-labels" style="display:flex;flex-direction:column;gap:2px;align-items:${this._labelItems()};">
      ${t.map(s=>r`<span class="mc-label-row" style="display:inline-flex;align-items:center;gap:4px;">${this.labelInline(s)}</span>`)}
    </div>`}render(){const t=this.renderControl(),s=this.field,i=this.containerStyle(),n=s?.control_labels?.length?s.control_labels:void 0;if(!n)return r`<div class="mc-control-box" style="box-sizing:border-box;display:${this.containerDisplay()};${i}">${t}</div>`;const o=s?.control_labels_position??"above",a=o==="left"||o==="right"?"row":"column",l=s?.control_labels_gap??4,c=this._renderLabelRows(n);return r`<div class="mc-control-wrap" style="box-sizing:border-box;display:flex;flex-direction:${a};gap:${l}px;${a==="row"?"align-items:center;":""}${i}">${o==="below"||o==="right"?[t,c]:[c,t]}</div>`}}Ht([U({attribute:!1})],et.prototype,"field");Ht([U({attribute:!1})],et.prototype,"defaults");Ht([U({attribute:!1})],et.prototype,"hass");Ht([U({attribute:!1})],et.prototype,"onChange");Ht([U({attribute:!1})],et.prototype,"onAction");Ht([U({attribute:!1})],et.prototype,"virtuals");Ht([N()],et.prototype,"_pending");var ea=Object.getOwnPropertyDescriptor,sa=(e,t,s,i)=>{for(var n=i>1?void 0:i?ea(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let es=class extends et{constructor(){super(...arguments),this._toggle=()=>{this.entityId&&(this._editing=!1,this.commit(this.displayValue()!==!0))},this._onKey=e=>{(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._toggle())}}readValue(){const e=this.stateObj;if(!e)return!1;const t=this.field?.read_attribute;if(!t)return e.state==="on";const s=e.attributes?.[t];if(s==null)return!1;const i=String(s).toLowerCase();return i!=="off"&&i!=="false"&&i!=="0"&&i!=="unavailable"&&i!=="unknown"}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("keydown",this._onKey)}disconnectedCallback(){this.removeEventListener("keydown",this._onKey),super.disconnectedCallback()}renderControl(){const e=this.field,t=this.displayValue()===!0,s=e?.toggle_variant??"switch",i=ft(e??{},this.defaults),n=i.toggle_on_paint,o=i.toggle_off_paint,a=i.toggle_on_color,l=i.toggle_off_color,c=e?.label,p=i.toggle_thumb_padding,u=i.toggle_thumb_size,d=i.toggle_thumb_radius,h=`--mc-pad:${p}px;--mc-th-size:${u}px;--mc-th-r:${d}px;--mc-th-color:${i.toggle_thumb_color};--mc-th-shift:${u}px;--mc-tr-w:${u*2+p*2}px;--mc-tr-h:${u+p*2}px;--mc-tr-r:${d+p}px;`,b=s==="checkbox"?r`<span class="box" style="background:${t?n:"transparent"};border-color:${t?a:l}">
          ${t?r`<ha-icon icon="mdi:check"></ha-icon>`:_}
        </span>`:r`<span class="track ${t?"on":""}" style="${h}background:${t?n:o}">
          <span class="thumb"></span>
        </span>`;return r`
      <span class="wrap" role="switch" aria-checked=${t?"true":"false"}
        aria-disabled=${this.entityId?"false":"true"}
        @click=${this._toggle}
      >
        ${b}
        ${c?r`<span class="label">${c}</span>`:_}
      </span>
    `}};es.styles=it`
    :host { display: inline-flex; align-items: center; line-height: 0; }
    .wrap { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
    .wrap[aria-disabled='true'] { cursor: default; opacity: 0.5; }
    .label { font-size: 13px; color: currentColor; white-space: nowrap; }

    /* switch */
    .track {
      position: relative; width: var(--mc-tr-w, 40px); height: var(--mc-tr-h, 22px);
      border-radius: var(--mc-tr-r, 11px);
      transition: background 0.18s ease; box-sizing: border-box;
    }
    .thumb {
      position: absolute; top: var(--mc-pad, 2px); left: var(--mc-pad, 2px);
      width: var(--mc-th-size, 18px); height: var(--mc-th-size, 18px);
      border-radius: var(--mc-th-r, 9px); background: var(--mc-th-color, #fff);
      transition: transform 0.18s ease; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    .track.on .thumb { transform: translateX(var(--mc-th-shift, 18px)); }

    /* checkbox */
    .box {
      width: 20px; height: 20px; border-radius: 4px; box-sizing: border-box;
      border: 2px solid currentColor; display: inline-flex;
      align-items: center; justify-content: center; transition: background 0.15s ease, border-color 0.15s ease;
    }
    .box ha-icon { --mdc-icon-size: 16px; color: #fff; }

    :host(:focus-visible) .track,
    :host(:focus-visible) .box { outline: 2px solid var(--mc-accent, #00d4ff); outline-offset: 2px; }
  `;es=sa([ct(wi)],es);var ia=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Ri=(e,t,s,i)=>{for(var n=i>1?void 0:i?na(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ia(t,s,n),n};const ni=(e,t,s)=>Math.max(t,Math.min(s,e));let ze=class extends et{constructor(){super(...arguments),this._onPointerDown=e=>{this.entityId&&(e.preventDefault(),this._editing=!0,this._trackEl?.setPointerCapture(e.pointerId),this._pending=this._valueFromClientX(e.clientX))},this._onPointerMove=e=>{this._editing&&(this._pending=this._valueFromClientX(e.clientX))},this._onPointerUp=e=>{if(!this._editing)return;this._editing=!1,this._trackEl?.releasePointerCapture(e.pointerId);const t=this._valueFromClientX(e.clientX);this.commit(t)},this._onKey=e=>{if(!this.entityId)return;const t=typeof this.displayValue()=="number"?this.displayValue():this._min;let s=t;if(e.key==="ArrowRight"||e.key==="ArrowUp")s=t+this._step;else if(e.key==="ArrowLeft"||e.key==="ArrowDown")s=t-this._step;else if(e.key==="Home")s=this._min;else if(e.key==="End")s=this._max;else return;e.preventDefault(),this.commit(this._quantize(s))}}get _min(){return this.field?.min??0}get _max(){return this.field?.max??100}get _step(){return this.field?.step??1}containerDisplay(){return ft(this.field??{},this.defaults).slider_length!=null?"inline-block":"block"}readValue(){const e=this.stateObj;if(!e)return;const t=this.field?.read_attribute,s=Number(t?e.attributes?.[t]:e.state);if(Number.isFinite(s))return s/(this.field?.read_scale??1)}_quantize(e){const t=this._step||1,s=Math.round((e-this._min)/t)*t+this._min;return ni(Number(s.toFixed(4)),this._min,this._max)}get _inset(){const e=ft(this.field??{},this.defaults);return e.slider_thumb_padding+e.slider_thumb_width/2}_pointStyle(e,t){return e==="left"?`left:${t??0}px;transform:translateY(-50%);`:e==="right"?`right:${t??0}px;transform:translateY(-50%);`:"left:50%;transform:translate(-50%,-50%);"}_resolvedLabel(e){if(!e.entity)return e;const t={id:"",entity:e.entity,attribute:e.attribute},{value:s,unit:i}=Ti(this.hass,t,this.defaults,this.virtuals);return{...e,text:s?`${s}${i}`:e.text}}_valueFromClientX(e){const t=this._trackEl?.getBoundingClientRect();if(!t||t.width===0)return this._min;const s=this._inset,i=t.width-s*2;if(i<=0)return this._min;const n=ni((e-t.left-s)/i,0,1);return this._quantize(this._min+n*(this._max-this._min))}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("keydown",this._onKey)}disconnectedCallback(){this.removeEventListener("keydown",this._onKey),super.disconnectedCallback()}renderControl(){const e=this.field,t=this.displayValue(),s=typeof t=="number"?t:this._min,i=this._max>this._min?(s-this._min)/(this._max-this._min)*100:0,n=ft(e??{},this.defaults),o=n.accent_color,a=n.slider_track_paint,l=n.slider_fill_paint,c=n.slider_thumb_color,p=n.slider_height,u=e?.show_value??!0,d=e?.unit??"",h=e?.slider_labels,b=r`
      ${h?.left?r`<span class="point" style="${this._pointStyle("left",h.left.gap)}">${this.labelInline(this._resolvedLabel(h.left))}</span>`:_}
      ${h?.center?r`<span class="point" style="${this._pointStyle("center",void 0)}">${this.labelInline(this._resolvedLabel(h.center))}</span>`:_}
      ${h?.right?r`<span class="point" style="${this._pointStyle("right",h.right.gap)}">${this.labelInline(this._resolvedLabel(h.right))}</span>`:_}
    `,v=n.slider_length,x=n.slider_thumb_padding+n.slider_thumb_width/2;return r`
      <div style="width:${v!=null?"max-content":"100%"};">
        <div class="wrap"
          role="slider" aria-valuemin=${this._min} aria-valuemax=${this._max} aria-valuenow=${Math.round(s)}
        >
          <div class="track ${v!=null?"fixed":""}"
            style="--mc-slider-h:${p}px;--mc-slider-r:${n.slider_radius}px;${v!=null?`--mc-slider-len:${v}px;`:""}--mc-slider-thumb:${c};--mc-th-size:${n.slider_thumb_size}px;--mc-th-w:${n.slider_thumb_width}px;--mc-th-r:${n.slider_thumb_radius}px;--mc-accent:${o};background:${a}${n.slider_border?`;border:${n.slider_border_width}px solid ${n.slider_border_color}`:""}"
            @pointerdown=${this._onPointerDown}
            @pointermove=${this._onPointerMove}
            @pointerup=${this._onPointerUp}
            @pointercancel=${this._onPointerUp}
          >
            <div class="fill" style="width:calc(${x}px + (100% - ${x*2}px) * ${i/100});background:${l}"></div>
            <div class="thumb" style="left:calc(${x}px + (100% - ${x*2}px) * ${i/100})"></div>
            ${b}
          </div>
          ${u?r`<span class="val">${Math.round(s)}${d}</span>`:_}
        </div>
      </div>
    `}};ze.styles=it`
    :host { display: block; width: 100%; }
    .wrap { display: flex; align-items: center; gap: 8px; }
    .track {
      position: relative; flex: 1 1 auto; min-width: 60px; height: var(--mc-slider-h, 6px);
      border-radius: var(--mc-slider-r, 999px); cursor: pointer; touch-action: none;
      box-sizing: border-box;
    }
    /* A set track length pins the width instead of flexing to the field's. */
    .track.fixed { flex: 0 0 auto; width: var(--mc-slider-len); min-width: 0; }
    /* The fill shares the track's radius so a squared-off track fills square. */
    .fill { position: absolute; top: 0; left: 0; bottom: 0; border-radius: var(--mc-slider-r, 999px); }
    .thumb {
      position: absolute; top: 50%; width: var(--mc-th-w, 16px); height: var(--mc-th-size, 16px);
      border-radius: var(--mc-th-r, 8px);
      background: var(--mc-slider-thumb, #fff); transform: translate(-50%, -50%);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5); cursor: grab;
    }
    .track:active .thumb { cursor: grabbing; }
    .val { font-size: 12px; min-width: 2.5em; text-align: right; white-space: nowrap; color: currentColor; }
    .point {
      position: absolute; top: 50%; display: inline-flex; align-items: center; gap: 3px;
      white-space: nowrap; font-size: 11px; pointer-events: none;
    }
    :host(:focus-visible) .track { outline: 2px solid var(--mc-accent, #00d4ff); outline-offset: 3px; }
  `;Ri([bi(".track")],ze.prototype,"_trackEl",2);ze=Ri([ct(ki)],ze);var oa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,Bi=(e,t,s,i)=>{for(var n=i>1?void 0:i?aa(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&oa(t,s,n),n};let Fe=class extends et{constructor(){super(...arguments),this._open=!1,this._onDocPointerDown=e=>{this._open&&!e.composedPath().includes(this)&&(this._open=!1)},this._toggle=()=>{this.entityId&&(this._open=!this._open)},this._onKey=e=>{this.entityId&&(e.key==="Enter"||e.key===" "?(e.preventDefault(),this._open=!this._open):e.key==="Escape"&&(this._open=!1))}}readValue(){const e=this.stateObj;if(!e)return;const t=this.field?.read_attribute??bs(this.field?.options_attribute);return t?e.attributes?.[t]!=null?String(e.attributes[t]):void 0:e.state}_select(e){this._open=!1,this.commit(e)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("keydown",this._onKey),document.addEventListener("pointerdown",this._onDocPointerDown,!0)}disconnectedCallback(){this.removeEventListener("keydown",this._onKey),document.removeEventListener("pointerdown",this._onDocPointerDown,!0),super.disconnectedCallback()}renderControl(){const e=ft(this.field??{},this.defaults),t=this.displayValue(),s=this.options(),i=s.find(a=>a.value===t),n=this.field?.placeholder??"—",o=`--mc-accent:${e.accent_color};--mc-border:${e.dropdown_border_color};--mc-bg:${e.dropdown_bg_paint};--mc-radius:${e.dropdown_radius}px;--mc-ts:${e.dropdown_text_size}px;--mc-menu-bg:${e.dropdown_menu_bg_paint};--mc-menu-border:${e.dropdown_menu_border_color};--mc-selected:${e.dropdown_selected_paint};`;return r`
      <div class="trigger" role="button" aria-haspopup="listbox" aria-expanded=${this._open?"true":"false"}
        aria-disabled=${this.entityId?"false":"true"}
        style="${o}"
        @click=${this._toggle}
      >
        ${i?.icon?r`<ha-icon icon=${i.icon}></ha-icon>`:_}
        <span class="label">${i?.label??n}</span>
        <ha-icon icon=${this._open?"mdi:menu-up":"mdi:menu-down"}></ha-icon>
      </div>
      ${this._open?r`
        <div class="menu" role="listbox" style="${o}">
          ${s.map(a=>r`
            <div class="opt ${a.value===t?"sel":""}" role="option" aria-selected=${a.value===t?"true":"false"}
              @click=${()=>this._select(a.value)}
            >
              ${a.icon?r`<ha-icon icon=${a.icon}></ha-icon>`:_}
              <span>${a.label}</span>
            </div>
          `)}
        </div>
      `:_}
    `}};Fe.styles=it`
    :host { display: inline-block; position: relative; }
    .trigger {
      display: inline-flex; align-items: center; gap: 6px; box-sizing: border-box;
      min-width: 90px; padding: 4px 8px; border-radius: var(--mc-radius, 6px); cursor: pointer;
      border: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25));
      background: var(--mc-bg, rgba(255, 255, 255, 0.06)); color: currentColor; font-size: var(--mc-ts, 13px);
    }
    .trigger[aria-disabled='true'] { cursor: default; opacity: 0.5; }
    .trigger .label { flex: 1 1 auto; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .trigger ha-icon { --mdc-icon-size: 18px; flex: 0 0 auto; }
    .menu {
      position: absolute; z-index: 20; top: calc(100% + 4px); left: 0; min-width: 100%;
      max-height: 240px; overflow: auto; box-sizing: border-box; padding: 4px;
      border-radius: 8px; border: 1px solid var(--mc-menu-border, rgba(255, 255, 255, 0.25));
      background: var(--mc-menu-bg, #1c1f26); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    }
    .opt {
      display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 5px;
      cursor: pointer; white-space: nowrap; color: #fff; font-size: var(--mc-ts, 13px);
    }
    .opt:hover { background: rgba(255, 255, 255, 0.08); }
    .opt.sel { background: var(--mc-selected, #00d4ff); color: #002; }
    .opt ha-icon { --mdc-icon-size: 18px; }
    :host(:focus-visible) .trigger { outline: 2px solid var(--mc-accent, #00d4ff); outline-offset: 2px; }
  `;Bi([N()],Fe.prototype,"_open",2);Fe=Bi([ct(Si)],Fe);var ra=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Li=(e,t,s,i)=>{for(var n=i>1?void 0:i?la(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ra(t,s,n),n};let de=class extends et{constructor(){super(...arguments),this._pendingEnt={}}readValue(){const e=this.stateObj;if(!e)return;const t=this.field?.read_attribute??bs(this.field?.options_attribute);return t?e.attributes?.[t]!=null?String(e.attributes[t]):void 0:e.state}updated(e){if(super.updated(e),!e.has("hass"))return;const t=Object.keys(this._pendingEnt);if(!t.length)return;const s={...this._pendingEnt};let i=!1;for(const n of t){const o=s[n];(typeof o=="boolean"?this.entityActive(n,this._attrForEntity(n)):this._rawState(n,this._attrForEntity(n)))===o&&(delete s[n],i=!0)}i&&(this._pendingEnt=s)}_isActive(e,t){if(e.entity){const s=this._pendingEnt[e.entity];return e.tap_action?(s!==void 0?s:this._rawState(e.entity,e.attribute))===e.value:s??this.entityActive(e.entity,e.attribute)}return e.value===t}_attrForEntity(e){return this.options().find(t=>t.entity===e)?.attribute}_rawState(e,t){const s=this.hass?.states[e];if(!s)return;const i=t?s.attributes?.[t]:s.state;return i!=null?String(i):void 0}_resolveAction(e,t){if(e.action!=="call-service"||!e.service_data)return e;const s=/\{\{\s*value\s*\}\}/g,i={};for(const[n,o]of Object.entries(e.service_data))i[n]=typeof o=="string"?o.replace(s,t):o;return{...e,service_data:i}}_activate(e){if(e.tap_action){e.entity&&(this._pendingEnt={...this._pendingEnt,[e.entity]:e.value}),this.onAction?.({tap_action:this._resolveAction(e.tap_action,e.value)},e.entity??this.entityId,"tap");return}if(e.entity){const t=!this._isActive(e,void 0);this._pendingEnt={...this._pendingEnt,[e.entity]:t},this.commit(t,e.entity);return}this.entityId&&this.commit(e.value)}_partStyle(e){if(!e)return"";const t=[];e.font_weight!=null&&t.push(`font-weight:${e.font_weight}`),e.font_family&&t.push(`font-family:${e.font_family}`),e.letter_spacing!=null&&t.push(`letter-spacing:${e.letter_spacing}px`);const s=(e.extra_css??"").trim().replace(/;+\s*$/,"");return s&&t.push(s),t.join(";")}_stateText(e,t){const s=e?this.hass?.states[e]:void 0;if(!s)return"";const i=s.attributes?.unit_of_measurement;if(t){const o=s.attributes?.[t];return o==null?"":i?`${o} ${i}`:String(o)}const n=this.hass;if(typeof n?.formatEntityState=="function")try{return n.formatEntityState(s)}catch{}return i?`${s.state} ${i}`:s.state}_optionIcon(e,t){const s=this._partStyle(t);if(e.icon)return r`<ha-icon icon=${e.icon} style=${s||_}></ha-icon>`;const i=e.entity?this.hass?.states[e.entity]:void 0;return i?r`<ha-state-icon .hass=${this.hass} .stateObj=${i} style=${s||_}></ha-state-icon>`:_}renderCell(e,t,s=""){const i=this.field,n=this._isActive(e,t),o=e.entity?!this.hass?.states[e.entity]:!this.entityId,a=this.defaults?.option_layout,l=e.icon_position??i?.option_icon_position??a?.icon_position??"left",c=e.state_position??i?.option_state_position??a?.state_position??"below",p=e.show_state??i?.option_show_state??a?.show_state??!1,u=i?.option_icon_style??a?.icon_style,d=i?.option_label_style??a?.label_style,h=i?.option_state_style??a?.state_style,b=this._optionIcon(e,u),v=e.entity?e.attribute:i?.read_attribute,x=p?this._stateText(e.entity??this.entityId,v):"",k=[];b!==_&&k.push({pos:l,node:r`<span class="part">${b}</span>`}),x&&k.push({pos:c,node:r`<span class="part state" style=${this._partStyle(h)||_}>${x}</span>`});const $=E=>k.filter(I=>I.pos===E).map(I=>I.node),y=e.label?r`<span class="part" style=${this._partStyle(d)||_}>${e.label}</span>`:_,g=r`<span class="cline">${$("left")}${y}${$("right")}</span>`,w=$("above"),S=$("below"),f=w.length>0||S.length>0;return r`
      <button class="opt ${f?"stacked":""} ${n?"sel":""}"
        role=${e.entity?"switch":"radio"}
        aria-checked=${n?"true":"false"}
        ?disabled=${o}
        style=${s||_}
        @click=${()=>this._activate(e)}
      >
        ${w.map(E=>r`<span class="cline">${E}</span>`)}
        ${g}
        ${S.map(E=>r`<span class="cline">${E}</span>`)}
      </button>
    `}renderControl(){const e=ft(this.field??{},this.defaults),t=this.displayValue(),s=this.options(),i=this.field?.selector_layout==="wrap",n=this.optionLines(s),o=e.selector_option_gap,a=o>0,l=e.selector_option_padding,c=`--mc-accent:${e.accent_color};--mc-border:${e.selector_border_color};--mc-bg:${e.selector_bg_paint};--mc-radius:${e.selector_radius}px;--mc-ts:${e.selector_text_size}px;--mc-selected:${e.selector_selected_paint};--mc-selected-text:${e.selector_selected_text_color};--mc-text:${e.selector_text_color};--mc-icon:${e.selector_icon_color};--mc-selected-icon:${e.selector_selected_icon_color};--mc-bw:${e.selector_border_width}px;--mc-state-color:${e.selector_state_color};--mc-selected-state-color:${e.selector_selected_state_color};--mc-icon-size:${e.selector_icon_size}px;--mc-state-size:${e.selector_state_size}px;--mc-opt-border:${e.selector_option_border_color};--mc-opt-bw:${e.selector_option_border_width}px;--mc-opt-radius:${e.selector_option_radius}px;--mc-opt-gap:${o}px;--mc-line-gap:${a?o:4}px;`+(l!=null?`--mc-opt-pad:${l}px;`:""),p=a?e.selector_option_extra_css??"":"";return r`
      <div class="lines" style="${c}">
        ${n.map(u=>r`
          <div class="row ${i?"wrap":""} ${a?"sep":""} ${a&&e.selector_option_border?"bordered":""}" role="radiogroup">
            ${u.map(d=>this.renderCell(d,t,p))}
          </div>
        `)}
      </div>
    `}};de.styles=it`
    :host { display: inline-block; }
    .lines { display: inline-flex; flex-direction: column; gap: var(--mc-line-gap, 4px); }
    .row {
      display: inline-flex; box-sizing: border-box; border-radius: var(--mc-radius, 7px); overflow: hidden;
      border: var(--mc-bw, 1px) solid var(--mc-border, rgba(255, 255, 255, 0.25));
    }
    .row.wrap { flex-wrap: wrap; }
    /* Separated: the options become discrete buttons, so the shared outline and
       the divider lines between segments both go away. */
    .row.sep {
      border: none; overflow: visible; border-radius: 0;
      gap: var(--mc-opt-gap, 0px);
    }
    .opt {
      display: inline-flex; align-items: center; gap: 5px; padding: var(--mc-opt-pad, 5px 10px); cursor: pointer;
      font-size: var(--mc-ts, 13px); color: var(--mc-text, currentColor); background: var(--mc-bg, transparent); border: none;
      border-right: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25)); white-space: nowrap;
      font-family: inherit;
      /* Each option is its own content width — never stretched to share the line
         evenly with its neighbours, however many are on it. */
      flex: 0 0 auto;
    }
    .opt ha-icon, .opt ha-state-icon {
      color: var(--mc-icon, currentColor);
      --mdc-icon-size: var(--mc-icon-size, 18px);
    }
    .opt.sel ha-icon, .opt.sel ha-state-icon { color: var(--mc-selected-icon, currentColor); }
    /* The label inherits the cell's font-size and color; the state value has its own. */
    .part.state { font-size: var(--mc-state-size, inherit); color: var(--mc-state-color, currentColor); }
    .opt.sel .part.state { color: var(--mc-selected-state-color, currentColor); }
    /* Stacked cells centre their rows; width follows their own content. */
    .opt.stacked { flex-direction: column; align-items: center; justify-content: center; gap: 2px; }
    .opt:last-child { border-right: none; }
    /* Joined: the frame's radius shapes the container's outer corners only — the
       row clips its children, so the end cells round and every internal corner
       stays square. The cells must never carry the radius themselves. */
    .row:not(.sep) .opt { border-radius: 0; }
    .row.sep .opt { border-right: none; border-radius: var(--mc-opt-radius, 7px); box-sizing: border-box; }
    .row.sep.bordered .opt {
      border: var(--mc-opt-bw, 1px) solid var(--mc-opt-border, rgba(255, 255, 255, 0.25));
    }
    .opt.sel { background: var(--mc-selected, #00d4ff); color: var(--mc-selected-text, #002); }
    .opt[disabled] { cursor: default; opacity: 0.5; }
    /* One horizontal line inside a cell: the label's line, or an above/below line. */
    .cline { display: inline-flex; align-items: center; justify-content: center; gap: 5px; line-height: 1.15; }
    .part { display: inline-flex; align-items: center; }
    :host(:focus-visible) .row { outline: 2px solid var(--mc-accent, #00d4ff); outline-offset: 2px; }
  `;Li([N()],de.prototype,"_pendingEnt",2);de=Li([ct(Ci)],de);var ca=Object.getOwnPropertyDescriptor,pa=(e,t,s,i)=>{for(var n=i>1?void 0:i?ca(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let ss=class extends et{constructor(){super(...arguments),this._onInput=e=>{this._editing=!0,this._pending=e.target.value},this._onChange=e=>{(this.field?.submit_on??"change")==="change"&&this._submit(e.target.value)},this._onBlur=e=>{this.field?.submit_on==="blur"?this._submit(e.target.value):this._editing=!1},this._onKey=e=>{e.key==="Enter"&&(e.preventDefault(),this._submit(e.target.value),e.target.blur())}}containerDisplay(){return"block"}readValue(){const e=this.stateObj;if(!e)return;const t=this.field?.read_attribute;if(!t)return e.state;const s=e.attributes?.[t];return s!=null?String(s):void 0}_submit(e){this._editing=!1,this.commit(e)}renderControl(){const e=ft(this.field??{},this.defaults),t=this.displayValue(),s=t===void 0?"":String(t),i=`--mc-border:${e.input_border_color};--mc-bg:${e.input_bg_paint};--mc-radius:${e.input_radius}px;--mc-ts:${e.input_text_size}px;--mc-focus:${e.input_focus_color};`;return r`
      <input
        type=${this.field?.input_password?"password":"text"}
        .value=${s}
        .maxLength=${this.field?.input_maxlength??-1}
        placeholder=${this.field?.placeholder??""}
        ?disabled=${!this.entityId}
        style="${i}"
        @input=${this._onInput}
        @change=${this._onChange}
        @blur=${this._onBlur}
        @keydown=${this._onKey}
      />
    `}};ss.styles=it`
    :host { display: inline-block; width: 100%; }
    input {
      box-sizing: border-box; width: 100%; padding: 5px 8px; font-size: var(--mc-ts, 13px);
      color: currentColor; border-radius: var(--mc-radius, 6px); font-family: inherit;
      border: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25));
      background: var(--mc-bg, rgba(255, 255, 255, 0.06));
    }
    input:focus-visible { outline: none; border-color: var(--mc-focus, #00d4ff); }
    input::placeholder { color: rgba(255, 255, 255, 0.4); }
  `;ss=pa([ct(Ei)],ss);var ua=Object.getOwnPropertyDescriptor,da=(e,t,s,i)=>{for(var n=i>1?void 0:i?ua(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};const oi=(e,t,s)=>Math.max(t,Math.min(s,e));let is=class extends et{constructor(){super(...arguments),this._onInput=e=>{const t=Number(e.target.value);Number.isFinite(t)&&(this._editing=!0,this._pending=oi(t,this._min,this._max))},this._onChange=e=>{const t=Number(e.target.value);this._editing=!1,Number.isFinite(t)&&this.commit(this._quantize(t))}}get _min(){return this.field?.min??Number.NEGATIVE_INFINITY}get _max(){return this.field?.max??Number.POSITIVE_INFINITY}get _step(){return this.field?.step??1}readValue(){const e=this.stateObj;if(!e)return;const t=this.field?.read_attribute,s=Number(t?e.attributes?.[t]:e.state);if(Number.isFinite(s))return s/(this.field?.read_scale??1)}_quantize(e){const t=this._step||1,s=Number.isFinite(this._min)?this._min:0,i=Math.round((e-s)/t)*t+s;return oi(Number(i.toFixed(this.field?.spinbox_decimals??4)),this._min,this._max)}_current(){const e=this.displayValue();return typeof e=="number"?e:Number.isFinite(this._min)?this._min:0}_bump(e){this.entityId&&this.commit(this._quantize(this._current()+e*this._step))}renderControl(){const e=ft(this.field??{},this.defaults),t=this._current(),s=this.field?.spinbox_decimals,i=s!=null?t.toFixed(s):String(t),n=this.field?.unit??"",o=!this.entityId,a=`--mc-border:${e.spinbox_border_color};--mc-bg:${e.spinbox_bg_paint};--mc-radius:${e.spinbox_radius}px;--mc-ts:${e.spinbox_text_size}px;--mc-hover:${e.spinbox_button_hover_paint};--mc-btn-w:${e.spinbox_button_width}px;`;return r`
      <div class="wrap" style="${a}">
        <button class="dec" ?disabled=${o||t<=this._min} title="Decrease" @click=${()=>this._bump(-1)}>−</button>
        <input type="number" .value=${i} ?disabled=${o}
          @input=${this._onInput} @change=${this._onChange} />
        ${n?r`<span class="unit">${n}</span>`:""}
        <button class="inc" ?disabled=${o||t>=this._max} title="Increase" @click=${()=>this._bump(1)}>+</button>
      </div>
    `}};is.styles=it`
    :host { display: inline-block; }
    .wrap {
      display: inline-flex; align-items: stretch; box-sizing: border-box; border-radius: var(--mc-radius, 7px); overflow: hidden;
      border: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25));
    }
    button {
      width: var(--mc-btn-w, 30px); border: none; cursor: pointer; font-size: 18px; line-height: 1; color: currentColor;
      background: var(--mc-bg, rgba(255, 255, 255, 0.06));
    }
    button:hover:not([disabled]) { background: var(--mc-hover, #00d4ff); color: #002; }
    button[disabled] { opacity: 0.4; cursor: default; }
    .dec { border-right: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25)); }
    .inc { border-left: 1px solid var(--mc-border, rgba(255, 255, 255, 0.25)); }
    input {
      width: 3.5em; text-align: center; border: none; background: transparent; color: currentColor;
      font-size: var(--mc-ts, 13px); font-family: inherit; box-sizing: border-box;
      appearance: textfield; -moz-appearance: textfield;
    }
    input:focus-visible { outline: none; }
    /* The −/+ buttons are the only stepper this control shows — the browser's
       native one would otherwise double up right next to them. */
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
      -webkit-appearance: none; margin: 0;
    }
    .unit { align-self: center; padding-right: 6px; font-size: 11px; opacity: 0.7; }
  `;is=da([ct(Ni)],is);var ha=Object.getOwnPropertyDescriptor,_a=(e,t,s,i)=>{for(var n=i>1?void 0:i?ha(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=a(n)||n);return n};let ai=class extends de{_selfOption(){const e=this.field,t=e?.button_value!=null&&e.button_value!=="";return{value:t?e.button_value:"",label:e?.label??"",icon:e?.icon,entity:t?void 0:e?.entity,attribute:t?void 0:e?.read_attribute,icon_position:e?.option_icon_position,show_state:e?.option_show_state,state_position:e?.option_state_position}}renderControl(){const e=ft(this.field??{},this.defaults),t=e.button_option_padding,s=`--mc-accent:${e.accent_color};--mc-bg:${e.button_bg_paint};--mc-ts:${e.button_text_size}px;--mc-selected:${e.button_selected_paint};--mc-selected-text:${e.button_selected_text_color};--mc-text:${e.button_text_color};--mc-icon:${e.button_icon_color};--mc-selected-icon:${e.button_selected_icon_color};--mc-state-color:${e.button_state_color};--mc-selected-state-color:${e.button_selected_state_color};--mc-icon-size:${e.button_icon_size}px;--mc-state-size:${e.button_state_size}px;--mc-opt-border:${e.button_border_color};--mc-opt-bw:${e.button_border_width}px;--mc-opt-radius:${e.button_radius}px;`+(t!=null?`--mc-opt-pad:${t}px;`:"");return r`
      <div class="lines" style="${s}">
        <div class="row sep bordered">
          ${this.renderCell(this._selfOption(),this.displayValue(),"")}
        </div>
      </div>
    `}};ai=_a([ct(Ii)],ai);function ma(e){const{stat_period:t,stat_period_n:s,stat_period_start:i,stat_period_end:n}=e,o=new Date,a=new Date(o.getFullYear(),o.getMonth(),o.getDate()),l=new Date(a.getTime()-864e5),c=a.getDay(),p=c===0?6:c-1,u=new Date(a.getTime()-p*864e5),d=new Date(u.getTime()-7*864e5),h=new Date(o.getFullYear(),o.getMonth(),1),b=new Date(o.getFullYear(),o.getMonth()-1,1),v=new Date(o.getFullYear(),0,1),x=new Date(o.getFullYear()-1,0,1);switch(t){case"today":return{start:a,end:o,bucketPeriod:"day"};case"yesterday":return{start:l,end:a,bucketPeriod:"day"};case"this_week":return{start:u,end:o,bucketPeriod:"week"};case"last_week":return{start:d,end:u,bucketPeriod:"week"};case"this_month":return{start:h,end:o,bucketPeriod:"month"};case"last_month":return{start:b,end:h,bucketPeriod:"month"};case"this_year":return{start:v,end:o,bucketPeriod:"month"};case"last_year":return{start:x,end:v,bucketPeriod:"month"};case"last_30_minutes":return{start:new Date(o.getTime()-30*6e4),end:o,bucketPeriod:"hour"};case"last_hour":return{start:new Date(o.getTime()-36e5),end:o,bucketPeriod:"hour"};case"last_n_minutes":{const k=s??m("stat_period_minutes_n")??60;return{start:new Date(o.getTime()-k*6e4),end:o,bucketPeriod:"hour"}}case"last_n_hours":{const k=s??m("stat_period_hours_n")??1;return{start:new Date(o.getTime()-k*36e5),end:o,bucketPeriod:k<=48?"hour":"day"}}case"last_n_days":{const k=s??m("stat_period_days_n")??7;return{start:new Date(o.getTime()-k*864e5),end:o,bucketPeriod:k<=60?"day":"month"}}case"last_n_months":{const k=s??m("stat_period_months_n")??1;return{start:new Date(o.getFullYear(),o.getMonth()-k,o.getDate()),end:o,bucketPeriod:"month"}}case"custom":{if(!i||!n)return null;const k=new Date(i),$=new Date(n);if(isNaN(k.getTime())||isNaN($.getTime())||$<=k)return null;const y=($.getTime()-k.getTime())/864e5,g=y<=2?"hour":y<=60?"day":"month";return{start:k,end:$,bucketPeriod:g}}default:return null}}function ba(e,t){return e.states[t]?.attributes?.unit_of_measurement??""}function ri(e){const t=[];for(const s of e.cards??[])for(const i of s.fields)i.type==="value"&&i.stat_period&&i.entity&&t.push({id:i.id,entity:i.entity,stat_period:i.stat_period,stat_type:i.stat_type,stat_period_n:i.stat_period_n,stat_period_start:i.stat_period_start,stat_period_end:i.stat_period_end}),i.type==="graph"&&i.graph_series&&i.graph_series.forEach((n,o)=>{n.entity&&n.stat_period&&t.push({id:`${i.id}:${o}`,entity:n.entity,stat_period:n.stat_period,stat_type:n.stat_type,stat_period_n:n.stat_period_n})});for(const s of e.virtuals??[])s.op==="statistic"&&s.stat_period&&s.entity&&t.push({id:`virt:${s.id}`,entity:s.entity,stat_period:s.stat_period,stat_type:s.stat_type,stat_period_n:s.stat_period_n,stat_period_start:s.stat_period_start,stat_period_end:s.stat_period_end});return t}async function ga(e,t,s){const i=new Map(s);for(const n of t){const o=ma(n);if(!o)continue;const a=n.stat_type??m("stat_type")??"sum",l=a==="difference"?"hour":o.bucketPeriod;try{const c=await e.connection.sendMessagePromise({type:"recorder/statistics_during_period",start_time:o.start.toISOString(),end_time:o.end.toISOString(),statistic_ids:[n.entity],period:l,units:{},types:["sum","mean","state","max","min"]}),p=c&&c[n.entity]||[];if(!p.length){i.set(n.id,null);continue}let u;if(a==="sum")u=p.reduce((d,h)=>d+(h.sum??0),0);else if(a==="difference"){const d=p.filter(h=>h.state!==null&&h.state!==void 0&&Number.isFinite(Number(h.state)));if(d.length<2){i.set(n.id,null);continue}u=Number(d[d.length-1].state)-Number(d[0].state)}else if(a==="max"){const d=p.map(h=>h.max).filter(h=>h!=null&&Number.isFinite(h));if(!d.length){i.set(n.id,null);continue}u=Math.max(...d)}else if(a==="min"){const d=p.map(h=>h.min).filter(h=>h!=null&&Number.isFinite(h));if(!d.length){i.set(n.id,null);continue}u=Math.min(...d)}else if(a==="count")u=p.filter(d=>d.mean!==null&&d.mean!==void 0).length;else if(a==="range"){const d=p.map(b=>b.max).filter(b=>b!=null&&Number.isFinite(b)),h=p.map(b=>b.min).filter(b=>b!=null&&Number.isFinite(b));if(!d.length||!h.length){i.set(n.id,null);continue}u=Math.max(...d)-Math.min(...h)}else u=p.reduce((d,h)=>d+(h.mean??0),0)/p.length;i.set(n.id,{value:u,unit:ba(e,n.entity)})}catch{}}return i}const va=["stat-line","line","area","state-timeline"];function li(e){const t=[];for(const s of e.cards??[])for(const i of s.fields){if(i.type!=="graph"||!va.includes(i.graph_type??m("graph_type")??"bar"))continue;const n=i.graph_hours??m("graph_hours")??24;(i.graph_series??[]).forEach((o,a)=>{o.entity&&t.push({id:`${i.id}:${a}`,entity:o.entity,hours:n,stat_type:o.stat_type})})}return t}async function fa(e,t,s){const i=new Map(s),n=e.connection;for(const o of t){const a=new Date,l=new Date(a.getTime()-o.hours*36e5);try{const p=(await n.sendMessagePromise({type:"recorder/statistics_during_period",start_time:l.toISOString(),end_time:a.toISOString(),statistic_ids:[o.entity],period:"hour",units:{},types:["mean","sum","state","max","min"]}))?.[o.entity]??[],u=o.stat_type??m("stat_type_history")??"mean",d=p.flatMap(h=>{const b=u==="sum"?h.sum:u==="max"?h.max:u==="min"?h.min:u==="mean"?h.mean:h.state,v=Number(b);return Number.isFinite(v)?[{t:new Date(h.start).getTime(),v}]:[]});i.set(o.id,d)}catch{}}return i}var ya=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,ut=(e,t,s,i)=>{for(var n=i>1?void 0:i?$a(t,s):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(t,s,n):a(n))||n);return i&&n&&ya(t,s,n),n};const ci=rt(Ae);console.info(`%c MOSAIC-CANVAS %c v${De} · build ${Ai} `,"color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let tt=class extends vt{constructor(){super(...arguments),this.editor=!1,this._cardBoxes={},this._statsMap=new Map,this._historyMap=new Map,this._expandedCardId=null,this._expandScale=1,this._openExtendedId=null,this._totalW=1e3,this._virtualsCache=new Map}static getConfigElement(){return document.createElement($i)}static getStubConfig(){return{background:{source:"auto",sun_entity:"sun.sun",images:{}},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e,Ce(e.defaults?.control_variants)}getCardSize(){return 5}get cardBoxes(){return this._cardBoxes}shouldUpdate(e){if(e.has("_config")||e.has("_imgNatural")||!e.has("hass"))return!0;const t=e.get("hass");if(!t||!this.hass)return!0;for(const s of this._referencedEntities())if(t.states[s]!==this.hass.states[s])return!0;return!1}_referencedEntities(){const e=new Set,t=this._config?.background;t?.sun_entity&&e.add(t.sun_entity),t?.mode_entity&&e.add(t.mode_entity);for(const s of this._config?.cards??[])for(const i of s.fields)i.entity&&e.add(i.entity);for(const s of this._config?.flows??[])s.entity&&e.add(s.entity);return[...e]}_recomputeScale(){const e=this.renderRoot?.querySelector(".ec-host");if(!e||this._totalW===0)return;const t=e.clientWidth/this._totalW;e.style.setProperty("--ec-scale",String(t))}firstUpdated(){const e=this.renderRoot?.querySelector(".ec-host");e&&(this._ro=new ResizeObserver(()=>{this._recomputeScale(),this._recomputeExpandScale()}),this._ro.observe(e),this._recomputeScale())}updated(e){this._recomputeScale(),this._measureCardBoxes(),this._recomputeExpandScale(),(e.has("_config")||e.has("hass")&&!e.get("hass"))&&this._restartStatPolling()}_recomputeExpandScale(){if(!this._expandedCardId){this._expandScale!==1&&(this._expandScale=1);return}const e=this.renderRoot?.querySelector(".ec-expand-panel"),t=this.renderRoot?.querySelector(".ec-expand-card-wrap");if(!e||!t)return;const s=t.offsetWidth,i=t.offsetHeight;if(!s||!i)return;const n=Math.min(e.clientWidth/s,e.clientHeight/i);Number.isFinite(n)&&n>0&&Math.abs(n-this._expandScale)>.01&&(this._expandScale=n)}_restartStatPolling(){if(this._statsPollTimer!==void 0&&(clearInterval(this._statsPollTimer),this._statsPollTimer=void 0),!this._config||!this.hass)return;if(ri(this._config).length>0){const s=async()=>{!this.hass||!this._config||(this._statsMap=await ga(this.hass,ri(this._config),this._statsMap))};s();const i=Math.max(1,this._config.defaults?.stat_update_interval??m("stat_update_interval")??5)*6e4;this._statsPollTimer=setInterval(()=>void s(),i)}if(this._historyPollTimer!==void 0&&(clearInterval(this._historyPollTimer),this._historyPollTimer=void 0),li(this._config).length>0){const s=async()=>{!this.hass||!this._config||(this._historyMap=await fa(this.hass,li(this._config),this._historyMap))};s(),this._historyPollTimer=setInterval(()=>void s(),5*6e4)}}_measureCardBoxes(){const e=this.renderRoot?.querySelectorAll(".ec-card[data-card-id]"),{totalW:t,totalH:s}=at(this._config,this._imgNatural),i={};for(const o of e??[]){const a=o.getAttribute("data-card-id");if(!a)continue;const c=this._config?.cards.find(x=>x.id===a)?.anchor??"top-left",[p,u]=Ut[c],d=o.offsetWidth,h=o.offsetHeight,b=o.offsetLeft-p*d,v=o.offsetTop-u*h;i[a]={x:b/t,y:v/s,w:d/t,h:h/s}}this.renderRoot?.querySelectorAll(`${Ae}[data-emb-id]`)?.forEach(o=>{const a=o.getAttribute("data-emb-id");if(!a)return;const l=this._config?.embedded_cards?.find(v=>v.id===a),[c,p]=Ut[l?.anchor??"top-left"],u=o.offsetWidth,d=o.offsetHeight,h=o.offsetLeft-c*u,b=o.offsetTop-p*d;i[a]={x:h/t,y:b/s,w:u/t,h:d/s}}),JSON.stringify(i)!==JSON.stringify(this._cardBoxes)&&(this._cardBoxes=i,this.dispatchEvent(new CustomEvent("ec-boxes-changed",{detail:{boxes:i}})))}connectedCallback(){super.connectedCallback(),no.then(()=>this.requestUpdate()),this._onKeyDown=e=>{if(e.key==="Escape"){if(this._openExtendedId!==null){this._openExtendedId=null;return}this._expandedCardId!==null&&(this._expandedCardId=null)}},window.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){this._onKeyDown&&(window.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=void 0),super.disconnectedCallback(),this._ro?.disconnect(),this._ro=void 0,this._statsPollTimer!==void 0&&(clearInterval(this._statsPollTimer),this._statsPollTimer=void 0),this._historyPollTimer!==void 0&&(clearInterval(this._historyPollTimer),this._historyPollTimer=void 0)}_svcData(e,t,s){const i={entity_id:s};for(const[n,o]of Object.entries(e??{}))i[n]=o==="{value}"?t:typeof o=="string"?o.replace("{value}",String(t)):o;return i}_writeControl(e,t,s){const i=s??e.entity;if(!this.hass||!i)return;const n=i.split(".")[0],o=a=>e.value_scale!=null?a*e.value_scale:a;if(s){typeof t=="boolean"&&this.hass.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:i});return}if(e.control_service){const a=e.control_service.indexOf(".");if(a<=0)return;const l=e.control_service.slice(0,a),c=e.control_service.slice(a+1),p=typeof t=="number"?o(t):t;this.hass.callService(l,c,this._svcData(e.control_service_data,p,i));return}if(typeof t=="boolean"){this.hass.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:i});return}if(typeof t=="number"){(n==="input_number"||n==="number"||n==="counter")&&this.hass.callService(n,"set_value",{entity_id:i,value:o(t)});return}typeof t=="string"&&(n==="input_select"||n==="select"?this.hass.callService(n,"select_option",{entity_id:i,option:t}):(n==="input_text"||n==="text")&&this.hass.callService(n,"set_value",{entity_id:i,value:t}))}render(){if(!this._config)return _;const e=at(this._config,this._imgNatural),{baseW:t,baseH:s,L:i,T:n,totalW:o,totalH:a}=e;this._totalW=o;const l=this._config.canvas,c=this._config.defaults,p=this._config.cards??[],u=po(this._config,this.hass),d=this._config.background?.fit??l?.fit??m("background_fit")??"cover",h=l?.box?ue(l.box):"",b=bo(this._config.virtuals,this.hass,this._virtualsCache,this._statsMap);this._virtualsCache=b;const v=(f,E,I)=>{if(!this.hass)return;const M=I==="tap"?f.tap_action:I==="hold"?f.hold_action:f.double_tap_action;if(M?.action==="expand-card"&&"fields"in f){this._expandScale=1,this._expandedCardId=f.id;return}if(M?.action==="open-extended"&&M.extended_card_id){this._openExtendedId=M.extended_card_id;return}Cn(this,this.hass,{...f,entity:E},I)},x=(f,E,I)=>{this.hass&&(I??f.entity)&&this._writeControl(f,E,I)},k=l?.tap_action&&l.tap_action.action!=="none",$=this._expandedCardId?p.find(f=>f.id===this._expandedCardId):void 0,y=()=>{this._expandedCardId=null,this._expandScale=1},g=this._config.extended_cards??[],w=this._openExtendedId?g.find(f=>f.id===this._openExtendedId):void 0,S=()=>{this._openExtendedId=null};return r`
      <ha-card>
        <div
          class="ec-host"
          style="position:relative; width:100%; aspect-ratio:${o}/${a}; overflow:hidden;${(c?.custom_colors??[]).map(f=>`--mccust_${f.name}:${f.color};`).join("")}"
        >
          <div
            class="ec-canvas"
            style="position:absolute; top:0; left:0; width:${o}px; height:${a}px; transform:scale(var(--ec-scale,1)); transform-origin:top left; ${h}${k?"cursor:pointer;":""}"
            @click=${k&&l?()=>v(l,l.tap_action.entity,"tap"):_}
          >
            ${u?r`<img
                  class="ec-bg"
                  src=${u}
                  @load=${f=>{const E=f.target;this._imgNatural={w:E.naturalWidth,h:E.naturalHeight}}}
                  style="position:absolute; left:${i}px; top:${n}px; width:${t}px; height:${s}px; object-fit:${d}; display:block;"
                  decoding="async"
                  alt=""
                />`:_}
            ${No(this._config,e,this.hass,this._cardBoxes,c)}
            ${p.map(f=>Ks(f,c,this.hass,b,this._statsMap,this._historyMap,v,!1,this.editor,x))}
            ${Co(this._config.zones,v)}
            ${(this._config.embedded_cards??[]).map(f=>ae`<${ci}
                data-emb-id="${f.id}"
                style="position:absolute;left:${f.position.x*100}%;top:${f.position.y*100}%;transform:${ms[f.anchor??"top-left"]};width:${f.width}px;${f.height!=null?`height:${f.height}px;`:""}${f.extra_css??""}"
                .cardConfig=${f.card_config}
                .hass=${this.hass}
                ?transparent=${f.transparent??!1}
              ></${ci}>`)}
          </div>
          ${$?r`
            <div class="ec-expand-backdrop" @click=${y}>
              <div class="ec-expand-panel">
                <div class="ec-expand-card-wrap" style="transform:scale(${this._expandScale})" @click=${f=>f.stopPropagation()}>
                  ${Ks($,c,this.hass,b,this._statsMap,this._historyMap,v,!0,!1,x)}
                </div>
                <button class="ec-expand-close" title="Collapse (Esc)" @click=${y}>✕</button>
              </div>
            </div>
          `:_}
          ${w?(()=>{const f=this._config.extended_card_defaults,E=w.width??f?.width??70,I=w.height??f?.height,M=`width:${E}%;${I!=null?`height:${I}%`:"max-height:85%"};overflow:auto;`;return r`
              <div class="ec-extended-backdrop" @click=${S}>
                <div class="ec-extended-panel" style=${M} @click=${P=>P.stopPropagation()}>
                  ${So(w,f,c,this.hass,b,this._statsMap,this._historyMap,v,x)}
                  <button class="ec-ext-close" title="Close (Esc)" @click=${S}>✕</button>
                </div>
              </div>
            `})():_}
        </div>
      </ha-card>
    `}};tt.styles=[Eo,Io,it`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
      }
    `];ut([U({attribute:!1})],tt.prototype,"hass",2);ut([U({type:Boolean})],tt.prototype,"editor",2);ut([N()],tt.prototype,"_config",2);ut([N()],tt.prototype,"_imgNatural",2);ut([N()],tt.prototype,"_cardBoxes",2);ut([N()],tt.prototype,"_statsMap",2);ut([N()],tt.prototype,"_historyMap",2);ut([N()],tt.prototype,"_expandedCardId",2);ut([N()],tt.prototype,"_expandScale",2);ut([N()],tt.prototype,"_openExtendedId",2);tt=ut([ct(Te)],tt);const ns=window;ns.customCards=ns.customCards||[];ns.customCards.push({type:Te,name:qn,description:"Place cards freely over a background image (day/night, EV variants, animated flows).",preview:!0});
