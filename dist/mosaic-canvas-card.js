/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=globalThis,Ne=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Ge=new WeakMap;let ki=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ne&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Ge.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ge.set(e,t))}return t}toString(){return this.cssText}};const ji=i=>new ki(typeof i=="string"?i:i+"",void 0,Te),It=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new ki(e,i,Te)},Gi=(i,t)=>{if(Ne)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),o=ae.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},Ue=Ne?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ji(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ui,defineProperty:qi,getOwnPropertyDescriptor:Yi,getOwnPropertyNames:Zi,getOwnPropertySymbols:Xi,getPrototypeOf:Ki}=Object,pe=globalThis,qe=pe.trustedTypes,Ji=qe?qe.emptyScript:"",Qi=pe.reactiveElementPolyfillSupport,Gt=(i,t)=>i,ne={toAttribute(i,t){switch(t){case Boolean:i=i?Ji:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ae=(i,t)=>!Ui(i,t),Ye={attribute:!0,type:String,converter:ne,reflect:!1,useDefault:!1,hasChanged:Ae};Symbol.metadata??=Symbol("metadata"),pe.litPropertyMetadata??=new WeakMap;let Tt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ye){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&qi(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:a}=Yi(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const l=o?.call(this);a?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ye}static _$Ei(){if(this.hasOwnProperty(Gt("elementProperties")))return;const t=Ki(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gt("properties"))){const e=this.properties,s=[...Zi(e),...Xi(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(Ue(o))}else t!==void 0&&e.push(Ue(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:ne).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=s.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ne;this._$Em=o;const l=n.fromAttribute(e,a.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,s,o=!1,a){if(t!==void 0){const n=this.constructor;if(o===!1&&(a=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Ae)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:a},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},Tt[Gt("elementProperties")]=new Map,Tt[Gt("finalized")]=new Map,Qi?.({ReactiveElement:Tt}),(pe.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=globalThis,Ze=i=>i,re=De.trustedTypes,Xe=re?re.createPolicy("lit-html",{createHTML:i=>i}):void 0,Si="$lit$",gt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ci="?"+gt,ts=`<${Ci}>`,Ft=document,Ut=()=>Ft.createComment(""),qt=i=>i===null||typeof i!="object"&&typeof i!="function",Re=Array.isArray,es=i=>Re(i)||typeof i?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Je=/>/g,kt=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,ti=/"/g,Ei=/^(?:script|style|textarea|title)$/i,zi=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),r=zi(1),T=zi(2),Rt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ei=new WeakMap,zt=Ft.createTreeWalker(Ft,129);function Mi(i,t){if(!Re(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(t):t}const is=(i,t)=>{const e=i.length-1,s=[];let o,a=t===2?"<svg>":t===3?"<math>":"",n=jt;for(let l=0;l<e;l++){const c=i[l];let d,p,h=-1,u=0;for(;u<c.length&&(n.lastIndex=u,p=n.exec(c),p!==null);)u=n.lastIndex,n===jt?p[1]==="!--"?n=Ke:p[1]!==void 0?n=Je:p[2]!==void 0?(Ei.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=kt):p[3]!==void 0&&(n=kt):n===kt?p[0]===">"?(n=o??jt,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?kt:p[3]==='"'?ti:Qe):n===ti||n===Qe?n=kt:n===Ke||n===Je?n=jt:(n=kt,o=void 0);const m=n===kt&&i[l+1].startsWith("/>")?" ":"";a+=n===jt?c+ts:h>=0?(s.push(d),c.slice(0,h)+Si+c.slice(h)+gt+m):c+gt+(h===-2?l:m)}return[Mi(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Yt{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let a=0,n=0;const l=t.length-1,c=this.parts,[d,p]=is(t,e);if(this.el=Yt.createElement(d,s),zt.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=zt.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Si)){const u=p[n++],m=o.getAttribute(h).split(gt),b=/([.?@])?(.*)/.exec(u);c.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?os:b[1]==="?"?as:b[1]==="@"?ns:ue}),o.removeAttribute(h)}else h.startsWith(gt)&&(c.push({type:6,index:a}),o.removeAttribute(h));if(Ei.test(o.tagName)){const h=o.textContent.split(gt),u=h.length-1;if(u>0){o.textContent=re?re.emptyScript:"";for(let m=0;m<u;m++)o.append(h[m],Ut()),zt.nextNode(),c.push({type:2,index:++a});o.append(h[u],Ut())}}}else if(o.nodeType===8)if(o.data===Ci)c.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(gt,h+1))!==-1;)c.push({type:7,index:a}),h+=gt.length-1}a++}}static createElement(t,e){const s=Ft.createElement("template");return s.innerHTML=t,s}}function Lt(i,t,e=i,s){if(t===Rt)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl;const a=qt(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=Lt(i,o._$AS(i,t.values),o,s)),t}class ss{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??Ft).importNode(e,!0);zt.currentNode=o;let a=zt.nextNode(),n=0,l=0,c=s[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new Xt(a,a.nextSibling,this,t):c.type===1?d=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(d=new rs(a,this,t)),this._$AV.push(d),c=s[++l]}n!==c?.index&&(a=zt.nextNode(),n++)}return zt.currentNode=Ft,o}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Xt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Lt(this,t,e),qt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):es(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ft.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Yt.createElement(Mi(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{const a=new ss(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=ei.get(t.strings);return e===void 0&&ei.set(t.strings,e=new Yt(t)),e}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const a of t)o===e.length?e.push(s=new Xt(this.O(Ut()),this.O(Ut()),this,this.options)):s=e[o],s._$AI(a),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=Ze(t).nextSibling;Ze(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ue{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(t,e=this,s,o){const a=this.strings;let n=!1;if(a===void 0)t=Lt(this,t,e,0),n=!qt(t)||t!==this._$AH&&t!==Rt,n&&(this._$AH=t);else{const l=t;let c,d;for(t=a[0],c=0;c<a.length-1;c++)d=Lt(this,l[s+c],e,c),d===Rt&&(d=this._$AH[c]),n||=!qt(d)||d!==this._$AH[c],d===_?t=_:t!==_&&(t+=(d??"")+a[c+1]),this._$AH[c]=d}n&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class os extends ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class as extends ue{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class ns extends ue{constructor(t,e,s,o,a){super(t,e,s,o,a),this.type=5}_$AI(t,e=this){if((t=Lt(this,t,e,0)??_)===Rt)return;const s=this._$AH,o=t===_&&s!==_||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==_&&(s===_||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}let rs=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Lt(this,t)}};const ls=De.litHtmlPolyfillSupport;ls?.(Yt,Xt),(De.litHtmlVersions??=[]).push("3.3.3");const cs=(i,t,e)=>{const s=e?.renderBefore??t;let o=s._$litPart$;if(o===void 0){const a=e?.renderBefore??null;s._$litPart$=o=new Xt(t.insertBefore(Ut(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=globalThis;class bt extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cs(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Rt}}bt._$litElement$=!0,bt.finalized=!0,Le.litElementHydrateSupport?.({LitElement:bt});const ds=Le.litElementPolyfillSupport;ds?.({LitElement:bt});(Le.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Ae},us=(i=ps,t,e)=>{const{kind:s,metadata:o}=e;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,c,i,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,i,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const c=this[n];t.call(this,l),this.requestUpdate(n,c,i,!0,l)}}throw Error("Unsupported decorator location: "+s)};function it(i){return(t,e)=>typeof e=="object"?us(i,t,e):((s,o,a)=>{const n=o.hasOwnProperty(a);return o.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(o,a):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(i){return it({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _s(i,t){return(e,s,o)=>{const a=n=>n.renderRoot?.querySelector(i)??null;return hs(e,s,{get(){return a(this)}})}}var ii,si;(function(i){i.language="language",i.system="system",i.comma_decimal="comma_decimal",i.decimal_comma="decimal_comma",i.space_comma="space_comma",i.none="none"})(ii||(ii={})),(function(i){i.language="language",i.system="system",i.am_pm="12",i.twenty_four="24"})(si||(si={}));function gs(i){return i.substr(0,i.indexOf("."))}var ms=["closed","locked","off"],le=function(i,t,e,s){s=s||{},e=e??{};var o=new Event(t,{bubbles:s.bubbles===void 0||s.bubbles,cancelable:!!s.cancelable,composed:s.composed===void 0||s.composed});return o.detail=e,i.dispatchEvent(o),o},ee=function(i){le(window,"haptic",i)},bs=function(i,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),le(window,"location-changed",{replace:e})},vs=function(i,t,e){e===void 0&&(e=!0);var s,o=gs(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":s=e?"unlock":"lock";break;case"cover":s=e?"open_cover":"close_cover";break;default:s=e?"turn_on":"turn_off"}return i.callService(a,s,{entity_id:t})},fs=function(i,t){var e=ms.includes(i.states[t].state);return vs(i,t,e)},ys=function(i,t,e,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(ee("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(e.entity||e.camera_image)&&le(i,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":s.navigation_path&&bs(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":e.entity&&(fs(t,e.entity),ee("success"));break;case"call-service":if(!s.service)return void ee("failure");var o=s.service.split(".",2);t.callService(o[0],o[1],s.service_data,s.target),ee("success");break;case"fire-dom-event":le(i,"ll-custom",s)}},$s=function(i,t,e,s){var o;s==="double_tap"&&e.double_tap_action?o=e.double_tap_action:s==="hold"&&e.hold_action?o=e.hold_action:s==="tap"&&e.tap_action&&(o=e.tap_action),ys(i,t,e,o)};const Zt=(i,t=0,e=1)=>i>e?e:i<t?t:i,U=(i,t=0,e=Math.pow(10,t))=>Math.round(e*i)/e,xs=i=>Es(Ee(i)),Ee=i=>(i[0]==="#"&&(i=i.substring(1)),i.length<6?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?U(parseInt(i[3]+i[3],16)/255,2):1}:{r:parseInt(i.substring(0,2),16),g:parseInt(i.substring(2,4),16),b:parseInt(i.substring(4,6),16),a:i.length===8?U(parseInt(i.substring(6,8),16)/255,2):1}),ws=i=>Cs(Ss(i)),ks=({h:i,s:t,v:e,a:s})=>{const o=(200-t)*e/100;return{h:U(i),s:U(o>0&&o<200?t*e/100/(o<=100?o:200-o)*100:0),l:U(o/2),a:U(s,2)}},ze=i=>{const{h:t,s:e,l:s}=ks(i);return`hsl(${t}, ${e}%, ${s}%)`},Ss=({h:i,s:t,v:e,a:s})=>{i=i/360*6,t=t/100,e=e/100;const o=Math.floor(i),a=e*(1-t),n=e*(1-(i-o)*t),l=e*(1-(1-i+o)*t),c=o%6;return{r:U([e,n,a,a,l,e][c]*255),g:U([l,e,e,n,a,a][c]*255),b:U([a,a,l,e,e,n][c]*255),a:U(s,2)}},ie=i=>{const t=i.toString(16);return t.length<2?"0"+t:t},Cs=({r:i,g:t,b:e,a:s})=>{const o=s<1?ie(U(s*255)):"";return"#"+ie(i)+ie(t)+ie(e)+o},Es=({r:i,g:t,b:e,a:s})=>{const o=Math.max(i,t,e),a=o-Math.min(i,t,e),n=a?o===i?(t-e)/a:o===t?2+(e-i)/a:4+(i-t)/a:0;return{h:U(60*(n<0?n+6:n)),s:U(o?a/o*100:0),v:U(o/255*100),a:s}},Fi=(i,t)=>{if(i===t)return!0;for(const e in i)if(i[e]!==t[e])return!1;return!0},zs=(i,t)=>i.toLowerCase()===t.toLowerCase()?!0:Fi(Ee(i),Ee(t)),oi={},Pi=i=>{let t=oi[i];return t||(t=document.createElement("template"),t.innerHTML=i,oi[i]=t),t},Ie=(i,t,e)=>{i.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e}))};let Dt=!1;const Me=i=>"touches"in i,Ms=i=>Dt&&!Me(i)?!1:(Dt||(Dt=Me(i)),!0),ai=(i,t)=>{const e=Me(t)?t.touches[0]:t,s=i.el.getBoundingClientRect();Ie(i.el,"move",i.getMove({x:Zt((e.pageX-(s.left+window.pageXOffset))/s.width),y:Zt((e.pageY-(s.top+window.pageYOffset))/s.height)}))},Fs=(i,t)=>{const e=t.keyCode;e>40||i.xy&&e<37||e<33||(t.preventDefault(),Ie(i.el,"move",i.getMove({x:e===39?.01:e===37?-.01:e===34?.05:e===33?-.05:e===35?1:e===36?-1:0,y:e===40?.01:e===38?-.01:0},!0)))};class Ni{constructor(t,e,s,o){const a=Pi(`<div role="slider" tabindex="0" part="${e}" ${s}><div part="${e}-pointer"></div></div>`);t.appendChild(a.content.cloneNode(!0));const n=t.querySelector(`[part=${e}]`);n.addEventListener("mousedown",this),n.addEventListener("touchstart",this),n.addEventListener("keydown",this),this.el=n,this.xy=o,this.nodes=[n.firstChild,n]}set dragging(t){const e=t?document.addEventListener:document.removeEventListener;e(Dt?"touchmove":"mousemove",this),e(Dt?"touchend":"mouseup",this)}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":if(t.preventDefault(),!Ms(t)||!Dt&&t.button!=0)return;this.el.focus(),ai(this,t),this.dragging=!0;break;case"mousemove":case"touchmove":t.preventDefault(),ai(this,t);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":Fs(this,t);break}}style(t){t.forEach((e,s)=>{for(const o in e)this.nodes[s].style.setProperty(o,e[o])})}}class Ps extends Ni{constructor(t){super(t,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:t}){this.h=t,this.style([{left:`${t/360*100}%`,color:ze({h:t,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${U(t)}`)}getMove(t,e){return{h:e?Zt(this.h+t.x*360,0,360):360*t.x}}}class Ns extends Ni{constructor(t){super(t,"saturation",'aria-label="Color"',!0)}update(t){this.hsva=t,this.style([{top:`${100-t.v}%`,left:`${t.s}%`,color:ze(t)},{"background-color":ze({h:t.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${U(t.s)}%, Brightness ${U(t.v)}%`)}getMove(t,e){return{s:e?Zt(this.hsva.s+t.x*100,0,100):t.x*100,v:e?Zt(this.hsva.v-t.y*100,0,100):Math.round(100-t.y*100)}}}const Ts=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',As="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",Ds="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",se=Symbol("same"),ye=Symbol("color"),ni=Symbol("hsva"),$e=Symbol("update"),ri=Symbol("parts"),li=Symbol("css"),ci=Symbol("sliders");class Rs extends HTMLElement{static get observedAttributes(){return["color"]}get[li](){return[Ts,As,Ds]}get[ci](){return[Ns,Ps]}get color(){return this[ye]}set color(t){if(!this[se](t)){const e=this.colorModel.toHsva(t);this[$e](e),this[ye]=t}}constructor(){super();const t=Pi(`<style>${this[li].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[ri]=this[ci].map(s=>new s(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,s){const o=this.colorModel.fromAttr(s);this[se](o)||(this.color=o)}handleEvent(t){const e=this[ni],s={...e,...t.detail};this[$e](s);let o;!Fi(s,e)&&!this[se](o=this.colorModel.fromHsva(s))&&(this[ye]=o,Ie(this,"color-changed",{value:o}))}[se](t){return this.color&&this.colorModel.equal(t,this.color)}[$e](t){this[ni]=t,this[ri].forEach(e=>e.update(t))}}const Ls={defaultColor:"#000",toHsva:xs,fromHsva:({h:i,s:t,v:e})=>ws({h:i,s:t,v:e,a:1}),equal:zs,fromAttr:i=>i};class Is extends Rs{get colorModel(){return Ls}}class Ws extends Is{}customElements.define("hex-color-picker",Ws);let Ti={};const Hs=fetch(new URL("./defaults.json",import.meta.url).href).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.json()}).then(i=>{Ti=i}).catch(i=>{console.error("[mosaic-canvas-card] Failed to load defaults.json — card-level and field-level overrides still apply.",i)});function g(i){return Ti[i]}function xe(i,t,e,s,o=""){if(e.unit===void 0&&o==="power"){const l=t==="kW"?i*1e3:i,c=s?.power_unit;if(c==="W")return{value:l.toFixed(e.decimals??g("decimals_w")??0),unit:"W"};if(c==="kW"){const d=l/1e3,p=e.decimals??(Math.abs(d)<10?2:1);return{value:d.toFixed(p),unit:"kW"}}if(Math.abs(l)>=1e3){const d=l/1e3,p=e.decimals??(Math.abs(d)<10?2:1);return{value:d.toFixed(p),unit:"kW"}}return{value:l.toFixed(e.decimals??g("decimals_w")??0),unit:"W"}}if(e.unit===void 0&&(t==="kWh"||t==="MWh")&&Math.abs(i)>=1e3)return{value:((t==="MWh"?i*1e3:i)/1e3).toFixed(e.decimals??g("decimals_mwh")??2),unit:"MWh"};const a=e.unit!==void 0?e.unit:t;return{value:e.decimals!=null?i.toFixed(e.decimals):String(i),unit:a}}function Bs(i){if(!Number.isFinite(i)||i<0)return{value:"--",unit:""};const t=Math.round(i*60),e=Math.floor(t/60),s=t%60;return e===0?{value:`${s}m`,unit:""}:s===0?{value:`${e}h`,unit:""}:{value:`${e}h ${s}m`,unit:""}}function Os(i,t,e,s,o){if(!t.entity)return{value:"",unit:""};if(t.stat_period&&o){const h=o.get(t.id);if(!h)return{value:"—",unit:""};const u=i?.states[t.entity]?.attributes?.device_class??"";return xe(h.value,h.unit,t,e,u)}if(t.entity.startsWith("virtual:")){const h=s?.get(t.entity);if(!h)return{value:"",unit:""};if(h.unit==="duration")return Bs(h.value);const u=h.unit==="W"||h.unit==="kW";return xe(h.value,h.unit,t,e,u?"power":"")}const a=i?.states[t.entity];if(!a)return{value:"",unit:""};const n=a.attributes?.unit_of_measurement??"",l=a.attributes?.device_class??"",c=t.attribute?a.attributes?.[t.attribute]:a.state,d=Number(c);return c!==""&&c!==null&&c!==void 0&&Number.isFinite(d)?xe(d,n,t,e,l):{value:String(c??""),unit:t.unit??""}}function Vs(i,t,e){const s=t>0?"increasing":t<0?"decreasing":"none";if(s==="none")return{hours:null,label:null,direction:"none"};let o;if(s==="increasing"?o=e.filter(c=>c.value>i).reduce((c,d)=>c===void 0||d.value<c.value?d:c,void 0):o=e.filter(c=>c.value<i).reduce((c,d)=>c===void 0||d.value>c.value?d:c,void 0),!o)return{hours:null,label:null,direction:s};const n=Math.abs(o.value-i)/Math.abs(t);return Number.isFinite(n)?{hours:n,label:o.label,direction:s}:{hours:null,label:null,direction:s}}function rt(i,t){const e=i?.canvas,s=e?.width,o=e?.height,a=t,n=a&&a.h>0?a.w/a.h:1.94;let l,c;s!=null&&o!=null?(l=s,c=o):s!=null?(l=s,c=Math.round(s/n)):o!=null?(c=o,l=Math.round(o*n)):(l=g("canvas_fallback_width")??1e3,c=a&&a.w>0?Math.round(l/(a.w/a.h)):Math.round(l/1.94));const d=e?.extend,p=d?.left??0,h=d?.right??0,u=d?.top??0,m=d?.bottom??0;return{baseW:l,baseH:c,L:p,T:u,R:h,B:m,totalW:l+p+h,totalH:c+u+m}}const We={center:"translate(-50%, -50%)",top:"translate(-50%, 0)",bottom:"translate(-50%, -100%)",left:"translate(0, -50%)",right:"translate(-100%, -50%)","top-left":"translate(0, 0)","top-right":"translate(-100%, 0)","bottom-left":"translate(0, -100%)","bottom-right":"translate(-100%, -100%)"},ce={center:[.5,.5],top:[.5,0],bottom:[.5,1],left:[0,.5],right:[1,.5],"top-left":[0,0],"top-right":[1,0],"bottom-left":[0,1],"bottom-right":[1,1]};function js(i,t){switch(t){case"top":return{x:i.x+i.w/2,y:i.y};case"right":return{x:i.x+i.w,y:i.y+i.h/2};case"bottom":return{x:i.x+i.w/2,y:i.y+i.h};case"left":return{x:i.x,y:i.y+i.h/2};case"center":return{x:i.x+i.w/2,y:i.y+i.h/2}}}function _t(i){return i==="center"?"center":i==="right"?"flex-end":"flex-start"}function Gs(i,t){const e=i?.background;if(!e||e.source==="day")return"day";if(e.source==="night")return"night";if(e.source==="entity"){const o=e.mode_entity?t?.states[e.mode_entity]:void 0;return o&&/^(night|on|true)$/i.test(String(o.state))?"night":"day"}return t?.states[e.sun_entity??g("sun_entity")??"sun.sun"]?.state==="below_horizon"?"night":"day"}function Us(i,t){const e=i?.background?.images?.[Gs(i,t)];if(!e)return;const s=Number(i?.ev_count??0);if(e[String(s)])return e[String(s)];const o=Object.keys(e).map(Number).filter(n=>!Number.isNaN(n)).sort((n,l)=>n-l);let a;for(const n of o)n<=s&&(a=n);return a===void 0&&o.length&&(a=o[0]),a!==void 0?e[String(a)]:void 0}function qs(i,t){return{...t?.card,...i.box}}function we(i,t,e){const s=i.type==="label"?e?.label??{}:e?.value??{},o=i.type==="label"?t.label_style??{}:t.value_style??{};return{font_family:e?.font_family,...s,...o,...i.style}}function Ys(i,t){const e=i.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(e)return`rgba(${e[1]},${e[2]},${e[3]},${t})`;const s=i.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);return s?`rgba(${parseInt(s[1],16)},${parseInt(s[2],16)},${parseInt(s[3],16)},${t})`:i}function de(i){const t=[];if(i.background){const e=i.background_alpha!==void 0?Ys(i.background,i.background_alpha):i.background;t.push(`background:${e}`)}else i.background_alpha!==void 0&&t.push(`background:rgba(0,0,0,${i.background_alpha})`);if(i.border===!0){const e=i.border_width??g("box_border_width")??1,s=i.color??g("box_border_color")??"#00d4ff";t.push(`border:${e}px solid ${s}`)}if(t.push(`border-radius:${i.radius??g("box_radius")??0}px`),t.push(`padding:${i.padding??g("box_padding")??0}px`),i.glow===!0){const e=i.color??g("box_border_color")??"#00d4ff";t.push(`box-shadow:0 0 8px ${e}, inset 0 0 6px ${e}`)}return i.blur&&t.push(`backdrop-filter:blur(${i.blur}px);-webkit-backdrop-filter:blur(${i.blur}px)`),t.join(";")}function St(i){const t=[];return t.push(`font-size:${i.font_size??g("font_size")??14}px`),i.color&&t.push(`color:${i.color}`),i.font_weight!=null&&t.push(`font-weight:${i.font_weight}`),i.font_family&&t.push(`font-family:${i.font_family}`),i.letter_spacing!=null&&t.push(`letter-spacing:${i.letter_spacing}px`),t.join(";")}function Zs(i,t,e){let s;if(i.entity.startsWith("virtual:")){const l=e.get(i.entity);if(l===void 0)return!0;s=String(l.value)}else{const l=t?.states[i.entity];if(!l)return!0;s=l.state}const o=Number(s),a=Number(i.value),n=Number.isFinite(o)&&Number.isFinite(a);switch(i.operator){case"==":return n?o===a:s===i.value;case"!=":return n?o!==a:s!==i.value;case">":return n&&o>a;case"<":return n&&o<a;case">=":return n&&o>=a;case"<=":return n&&o<=a;default:return!0}}function He(i,t){const e=t.trim();if(e==="mW")return{value:i/1e6,unit:"kW"};if(e==="W")return{value:i/1e3,unit:"kW"};if(e==="kW")return{value:i,unit:"kW"};if(e==="MW")return{value:i*1e3,unit:"kW"};if(e==="GW")return{value:i*1e6,unit:"kW"};if(e==="Wh")return{value:i/1e3,unit:"kWh"};if(e==="kWh")return{value:i,unit:"kWh"};if(e==="MWh")return{value:i*1e3,unit:"kWh"};if(e==="GWh")return{value:i*1e6,unit:"kWh"};if(e==="kWh/h")return{value:i,unit:"kW"};if(e==="Wh/h")return{value:i/1e3,unit:"kW"};if(e==="mL"||e==="ml")return{value:i/1e3,unit:"L"};if(e==="L"||e==="l")return{value:i,unit:"L"};if(/^m[3³]$/.test(e))return{value:i*1e3,unit:"L"};if(/^f[tT][3³]$/.test(e))return{value:i*28.3168,unit:"L"};if(/^gal(lon)?s?$/i.test(e))return{value:i*3.78541,unit:"L"};if(/^imp\.?\s*gal(lon)?s?$/i.test(e))return{value:i*4.54609,unit:"L"};if(/^fl\.?\s*oz\.?s?$/i.test(e))return{value:i*.029574,unit:"L"};if(/^(pt|pint)s?$/i.test(e))return{value:i*.473176,unit:"L"};if(/^(qt|quart)s?$/i.test(e))return{value:i*.946353,unit:"L"};if(e==="mg")return{value:i/1e6,unit:"kg"};if(/^g$/.test(e))return{value:i/1e3,unit:"kg"};if(e==="kg")return{value:i,unit:"kg"};if(/^(t|tonne?)s?$/i.test(e))return{value:i*1e3,unit:"kg"};if(/^(lb|lbs|pound)s?$/i.test(e))return{value:i*.453592,unit:"kg"};if(/^oz$/.test(e))return{value:i*.02835,unit:"kg"};const s=e.lastIndexOf("/");if(s>0){const o=e.slice(0,s).trim(),a=e.slice(s+1).trim();if(o){let n=1,l=a;/^s(ec(ond)?s?)?$/i.test(a)?(n=3600,l="h"):/^(min|minute)s?$/i.test(a)&&(n=60,l="h");const{value:c,unit:d}=He(i*n,o);return{value:c,unit:`${d}/${l}`}}}return{value:i,unit:e}}function ke(i,t){const e=i.states[t];if(!e)return null;const s=Number(e.state);if(!Number.isFinite(s))return null;const o=e.attributes?.unit_of_measurement??"";return He(s,o)}function Xs(i,t,e){const s=new Map;if(!i||!t)return s;for(const o of i){if(o.op==="time_until"){const d=o.mode??g("virtual_mode")??"percent",p=o.value_entity??o.pct_entity??"",h=o.rate_entity??o.power_entity??"",u=ke(t,p);if(!u)continue;const m=u.value,b=t.states[h];if(!b)continue;const y=Number(b.state);if(!Number.isFinite(y))continue;const{recalc_above:x,recalc_below:f}=o;if((x!=null||f!=null)&&!(x!=null&&y>x||f!=null&&y<f)){const I=e?.get(`virtual:${o.id}`);if(I){s.set(`virtual:${o.id}`,I);continue}}const k=b.attributes?.unit_of_measurement??"",v=o.rate_unit_override??k,{value:w}=He(y,v);if(!Number.isFinite(w))continue;let $;if(o.capacity_entity){const A=ke(t,o.capacity_entity);if(!A)continue;$=A.value}else $=o.capacity??o.capacity_kwh??1;if(!Number.isFinite($)||$<=0)continue;let S,C;if(d==="absolute"?(S=w,C=$):(S=w/$*100,C=100),!Number.isFinite(S))continue;const z=o.label_max??o.label_full??g("virtual_label_max")??"Full",B=[{value:0,label:o.label_min??o.label_empty??g("virtual_label_min")??"Empty"},{value:C,label:z},...(o.triggers??[]).map(A=>({value:A.percent??A.value,label:A.label}))],H=Vs(m,S,B);if(H.direction==="none"||H.hours===null){const A=B.reduce((I,V)=>!I||Math.abs(V.value-m)<Math.abs(I.value-m)?V:I,void 0);s.set(`virtual:${o.id}`,{value:-1,unit:"duration",label:A?.label});continue}s.set(`virtual:${o.id}`,{value:H.hours,unit:"duration",label:H.label??void 0});continue}const a=o.inputs.map(d=>ke(t,d)).filter(d=>d!==null);if(a.length===0)continue;const n=a.map(d=>d.value);let l;switch(o.op){case"add":l=n.reduce((d,p)=>d+p,0);break;case"subtract":l=n.slice(1).reduce((d,p)=>d-p,n[0]);break;case"mean":l=n.reduce((d,p)=>d+p,0)/n.length;break;case"signed_net":l=(n[0]??0)-(n[1]??0);break;default:l=n[0]}const c=o.unit??a[0].unit;s.set(`virtual:${o.id}`,{value:l,unit:c})}return s}const et=["#00d4ff","#ff6b35","#7ecb20","#9b59b6","#f39c12","#e74c3c","#1abc9c","#e91e63"];function ut(i){const t=Math.abs(i);return t>=1e6?`${+(i/1e6).toPrecision(3)}M`:t>=1e3?`${+(i/1e3).toPrecision(3)}k`:t<10?`${+i.toPrecision(3)}`:`${Math.round(i)}`}function di(i,t,e,s,o,a){if(!i.entity)return null;if(i.stat_period)return a.get(`${t}:${e}`)?.value??null;if(i.entity.startsWith("virtual:"))return o.get(i.entity)?.value??null;const n=s?.states[i.entity];if(!n)return null;const l=i.attribute?n.attributes?.[i.attribute]:n.state,c=Number(l);return Number.isFinite(c)?c:null}function pi(i,t){return i.label?i.label:i.entity?i.entity.startsWith("virtual:")?i.entity.replace("virtual:",""):t?.states[i.entity]?.attributes?.friendly_name??i.entity.split(".")[1]?.replace(/_/g," ")??i.entity:""}function ui(i,t,e,s,o){return i.stat_period?e.get(`${s}:${o}`)?.unit??"":!i.entity||i.entity.startsWith("virtual:")?"":t?.states[i.entity]?.attributes?.unit_of_measurement??""}function Ks(i,t,e,s){const o=i.width??g("graph_bar_v_width")??200,a=i.height??g("graph_bar_v_height")??130,n=i.graph_show_axes??g("graph_show_axes")??!0,l=n?32:2,c=n?22:2,d=6,h=o-l-4,u=a-d-c,m=Math.max(t.length,1),b=t.filter(S=>S!==null&&Number.isFinite(S)),y=i.graph_min??Math.min(0,...b),x=i.graph_max??(b.length?Math.max(...b):1),f=x-y||1,k=Math.max(2,Math.floor(h/m*.2)),v=(h-k*(m-1))/m,w=S=>u-(S-y)/f*u,$=w(Math.max(y,0));return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" style="display:block;overflow:visible">
    ${n?T`
      <line x1="${l}" y1="${d}" x2="${l}" y2="${d+u}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.5,1].map(S=>{const C=y+S*f,z=d+w(C);return T`
          <line x1="${l}" y1="${z}" x2="${l+h}" y2="${z}" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
          <text x="${l-4}" y="${z+3}" text-anchor="end" fill="rgba(255,255,255,0.45)" font-size="9">${ut(C)}</text>`})}
      ${s?T`<text x="${l-4}" y="${d-1}" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8">${s}</text>`:_}
    `:_}
    ${t.map((S,C)=>{const z=i.graph_series?.[C]?.color??et[C%et.length],P=l+C*(v+k),B=e[C]??"";if(S===null||!Number.isFinite(S))return T`
        <rect x="${P}" y="${d+u-2}" width="${v}" height="2" fill="rgba(255,255,255,0.12)" rx="1"/>
        ${n?T`<text x="${P+v/2}" y="${d+u+14}" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9">${B.length>8?B.slice(0,7)+"…":B}</text>`:_}`;const H=Math.max(Math.abs(w(S)-$),1),A=d+Math.min(w(S),$);return T`
        <rect x="${P}" y="${A}" width="${v}" height="${H}" fill="${z}" rx="2" opacity="0.85"/>
        ${n?T`<text x="${P+v/2}" y="${d+u+14}" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="9">${B.length>8?B.slice(0,7)+"…":B}</text>`:_}`})}
    ${y<0&&x>0?T`<line x1="${l}" y1="${d+$}" x2="${l+h}" y2="${d+$}" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>`:_}
  </svg>`}</div>`}const ot=-135,Mt=135;function mt(i,t,e,s){const o=(s-90)*Math.PI/180;return[i+e*Math.cos(o),t+e*Math.sin(o)]}function Et(i,t,e,s,o){const[a,n]=mt(i,t,e,s),[l,c]=mt(i,t,e,o),p=(o-s+360)%360>180?1:0;return`M ${a.toFixed(2)} ${n.toFixed(2)} A ${e} ${e} 0 ${p} 1 ${l.toFixed(2)} ${c.toFixed(2)}`}function Js(i,t,e){const s=i.width??g("graph_gauge_width")??180,o=i.height??Math.round(s*.72),a=i.graph_min??g("graph_min")??0,n=i.graph_max??g("graph_max")??100,l=n-a||1,c=t!==null?Math.max(0,Math.min(1,(t-a)/l)):0,d=ot+c*270,p=Math.min((s-20)/2,(o-28)/(1+Math.sin(135*Math.PI/180))),h=s/2,u=o-14-p*Math.sin((Mt-90)*Math.PI/180),m=i.graph_series?.[0]?.color??et[0],b="rgba(255,255,255,0.12)",[y,x]=mt(h,u,p*.82,d),[f,k]=mt(h,u,p*.12,d+180),[v,w]=mt(h,u,p+10,ot),[$,S]=mt(h,u,p+10,Mt);return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" style="display:block">
    <path d="${Et(h,u,p,ot,Mt)}" fill="none" stroke="${b}" stroke-width="8" stroke-linecap="round"/>
    ${t!==null?T`<path d="${Et(h,u,p,ot,d)}" fill="none" stroke="${m}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>`:_}
    <line x1="${f.toFixed(2)}" y1="${k.toFixed(2)}" x2="${y.toFixed(2)}" y2="${x.toFixed(2)}" stroke="${m}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>
    <circle cx="${h}" cy="${u}" r="5" fill="${m}" opacity="0.9"/>
    ${t!==null?T`<text x="${h}" y="${u+p*.28}" text-anchor="middle" fill="white" font-size="${Math.round(p*.28)}" font-weight="600">${ut(t)}${e?T`<tspan font-size="${Math.round(p*.17)}" fill="rgba(255,255,255,0.6)"> ${e}</tspan>`:_}</text>`:_}
    <text x="${v.toFixed(1)}" y="${(w+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${ut(a)}</text>
    <text x="${$.toFixed(1)}" y="${(S+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${ut(n)}</text>
  </svg>`}</div>`}function Qs(i,t,e){const s=i.width??g("graph_gauge_width")??180,o=i.height??Math.round(s*.72),a=i.graph_min??g("graph_min")??0,n=i.graph_max??g("graph_max")??100,l=n-a||1,c=t!==null?Math.max(0,Math.min(1,(t-a)/l)):0,d=ot+c*270,p=Math.min((s-20)/2,(o-28)/(1+Math.sin(135*Math.PI/180))),h=s/2,u=o-14-p*Math.sin((Mt-90)*Math.PI/180),m=p*.72,b=i.thresholds??[],[y,x]=mt(h,u,p+10,ot),[f,k]=mt(h,u,p+10,Mt),v=[];if(b.length===0){const w=i.graph_series?.[0]?.color??et[0];v.push(T`
      <path d="${Et(h,u,p,ot,Mt)}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="14"/>
      ${t!==null?T`<path d="${Et(h,u,p,ot,d)}" fill="none" stroke="${w}" stroke-width="14" stroke-linecap="round" opacity="0.85"/>`:_}
    `)}else{const w=[...b].sort((C,z)=>C.value-z.value),$=[a,...w.map(C=>C.value),n],S=["rgba(255,255,255,0.1)",...w.map(C=>C.color)];for(let C=0;C<$.length-1;C++){const z=ot+($[C]-a)/l*270,P=ot+($[C+1]-a)/l*270;if(P<=z)continue;const B=t!==null&&$[C]<=t?S[C+1]:"rgba(255,255,255,0.08)";v.push(T`<path d="${Et(h,u,p,z,Math.min(P,t!==null?d:z))}" fill="none" stroke="${B}" stroke-width="14" stroke-linecap="butt" opacity="0.85"/>`),v.push(T`<path d="${Et(h,u,p,Math.min(P,t!==null?d:z),P)}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" stroke-linecap="butt"/>`)}}return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" style="display:block">
    ${v}
    <path d="${Et(h,u,m,ot,Mt)}" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
    ${t!==null?T`<text x="${h}" y="${u+p*.22}" text-anchor="middle" fill="white" font-size="${Math.round(p*.28)}" font-weight="600">${ut(t)}${e?T`<tspan font-size="${Math.round(p*.17)}" fill="rgba(255,255,255,0.6)"> ${e}</tspan>`:_}</text>`:_}
    <text x="${y.toFixed(1)}" y="${(x+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${ut(a)}</text>
    <text x="${f.toFixed(1)}" y="${(k+12).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9">${ut(n)}</text>
  </svg>`}</div>`}function to(i,t,e,s){const o=i.width??g("graph_time_chart_width")??260,a=i.height??g("graph_time_chart_height")??120,n=i.graph_show_axes??g("graph_show_axes")??!0,l=n?32:2,c=n?18:2,d=6,h=o-l-4,u=a-d-c,m=t.flat();if(m.length===0)return r`<div style="width:100%;height:${a}px;display:flex;align-items:center;justify-content:center;opacity:.4;font-size:11px">No data</div>`;const b=Math.min(...m.map(A=>A.t)),y=Math.max(...m.map(A=>A.t)),x=y-b||1,f=m.map(A=>A.v),k=i.graph_min??Math.min(0,...f),v=i.graph_max??Math.max(...f),w=v-k||1,$=A=>l+(A-b)/x*h,S=A=>d+u-(A-k)/w*u,C=S(Math.max(k,0)),z=(y-b)/36e5,P=z<=24?6:z<=72?12:24,B=[],H=new Date(b);for(H.setMinutes(0,0,0),H.setHours(H.getHours()+P-(H.getHours()%P||P));H.getTime()<=y;)B.push(H.getTime()),H.setHours(H.getHours()+P);return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" style="display:block;overflow:visible">
    ${n?T`
      <line x1="${l}" y1="${d}" x2="${l}" y2="${d+u}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.25,.5,.75,1].map(A=>{const I=k+A*w,V=S(I);return T`
          <line x1="${l}" y1="${V}" x2="${l+h}" y2="${V}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${l-4}" y="${V+3}" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="8">${ut(I)}</text>`})}
      ${B.map(A=>{const I=$(A),E=`${new Date(A).getHours()}:00`;return T`
          <line x1="${I}" y1="${d}" x2="${I}" y2="${d+u}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${I}" y="${d+u+11}" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="8">${E}</text>`})}
    `:_}
    ${t.map((A,I)=>{const V=i.graph_series?.[I]?.color??et[I%et.length],E=i.graph_stroke_width??g("graph_stroke_width")??1.5,q=A.filter(K=>Number.isFinite(K.v));if(q.length<2)return _;const Y=q.map(K=>`${$(K.t).toFixed(1)},${S(K.v).toFixed(1)}`).join(" ");if(s){const K=q[0],J=q[q.length-1],lt=`M ${$(K.t).toFixed(1)},${C.toFixed(1)} L ${Y} L ${$(J.t).toFixed(1)},${C.toFixed(1)} Z`,O=i.graph_fill_opacity??g("graph_fill_opacity")??.2;return T`
          <path d="${lt}" fill="${V}" opacity="${O}"/>
          <polyline points="${Y}" fill="none" stroke="${V}" stroke-width="${E}" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`}return T`<polyline points="${Y}" fill="none" stroke="${V}" stroke-width="${E}" stroke-linejoin="round" stroke-linecap="round" opacity="0.9"/>`})}
    ${k<0&&v>0?T`<line x1="${l}" y1="${C}" x2="${l+h}" y2="${C}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>`:_}
    ${(i.graph_show_legend??g("graph_show_legend")??!1)&&e.some(Boolean)?e.map((A,I)=>{const V=i.graph_series?.[I]?.color??et[I%et.length];return T`<rect x="${l+I*70}" y="${d+2}" width="10" height="3" fill="${V}" rx="1"/>
        <text x="${l+I*70+13}" y="${d+6}" fill="rgba(255,255,255,0.6)" font-size="8">${A}</text>`}):_}
  </svg>`}</div>`}function eo(i,t,e,s){const o=i.width??g("graph_bar_v_width")??200,a=i.height??g("graph_bar_v_height")??130,n=i.graph_show_axes??g("graph_show_axes")??!0,l=n?32:4,c=n?10:4,d=6,p=n?20:4,h=o-l-c,u=a-d-p,b=t.filter(v=>v!==null&&Number.isFinite(v)&&v>0).reduce((v,w)=>v+w,0)||1,y=Math.min(h*.6,40),x=l+(h-y)/2;let f=d+u;const k=t.map((v,w)=>{const $=i.graph_series?.[w]?.color??et[w%et.length];if(v===null||!Number.isFinite(v)||v<=0)return{color:$,h:0,y:f,lbl:e[w]??"",v:v??0};const S=v/b*u;return f-=S,{color:$,h:S,y:f,lbl:e[w]??"",v}});return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" style="display:block;overflow:visible">
    ${n?T`
      ${s?T`<text x="${l-4}" y="${d-1}" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8">${s}</text>`:_}
      <line x1="${l}" y1="${d}" x2="${l}" y2="${d+u}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      ${[0,.5,1].map(v=>{const w=v*b,$=d+u-v*u;return T`
          <line x1="${l}" y1="${$}" x2="${l+h}" y2="${$}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <text x="${l-4}" y="${$+3}" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="8">${ut(w)}</text>`})}
    `:_}
    ${k.map(v=>v.h>0?T`
      <rect x="${x.toFixed(1)}" y="${v.y.toFixed(1)}" width="${y.toFixed(1)}" height="${v.h.toFixed(1)}" fill="${v.color}" opacity="0.85" rx="1"/>
      ${v.h>10?T`<text x="${(x+y/2).toFixed(1)}" y="${(v.y+v.h/2+3).toFixed(1)}" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="8">${v.lbl.length>8?v.lbl.slice(0,7)+"…":v.lbl}</text>`:_}
    `:_)}
  </svg>`}</div>`}function io(i,t){const e=i.width??g("graph_time_chart_width")??260,s=i.height??36;if(t.length<1)return r`<div style="width:${e}px;height:${s}px"/>`;const o=t[0].t,a=t[t.length-1].t,n=a-o||1,l=d=>(d-o)/n*e,c=t.map((d,p)=>{const h=l(d.t),u=p+1<t.length?l(t[p+1].t):e,m=Math.abs(Math.round(d.v))%et.length;return{x1:h,x2:u,color:i.graph_series?.[m]?.color??et[m]}});return r`<div style="width:100%;overflow:hidden">${T`<svg viewBox="0 0 ${e} ${s}" width="100%" height="${s}" style="display:block">
    ${c.map(d=>T`
      <rect x="${d.x1.toFixed(1)}" y="0" width="${Math.max(d.x2-d.x1,.5).toFixed(1)}" height="${s}" fill="${d.color}" opacity="0.8"/>
    `)}
  </svg>`}</div>`}function so(i,t,e,s,o){const a=i.graph_series??[],n=i.graph_type??g("graph_type")??"bar";if(n==="gauge-needle"||n==="gauge"){const p=a[0],h=p?di(p,i.id,0,t,e,s):null,u=p?ui(p,t,s,i.id,0):"";return n==="gauge-needle"?Js(i,h,u):Qs(i,h,u)}if(n==="stat-line"||n==="line"||n==="area"){const p=a.map((u,m)=>o.get(`${i.id}:${m}`)??[]),h=a.map(u=>pi(u,t));return to(i,p,h,n==="area")}if(n==="state-timeline"){const p=o.get(`${i.id}:0`)??[];return io(i,p)}const l=a.map((p,h)=>di(p,i.id,h,t,e,s)),c=a.map(p=>pi(p,t)),d=a.length>0?ui(a[0],t,s,i.id,0):"";return n==="bar-stacked"?eo(i,l,c,d):Ks(i,l,c,d)}function oo(i,t,e,s){if(!i.entity)return 0;if(i.stat_period)return s.get(i.id)?.value??0;if(i.entity.startsWith("virtual:"))return e.get(i.entity)?.value??0;const o=t?.states[i.entity];if(!o)return 0;const a=i.attribute?o.attributes?.[i.attribute]:o.state;return Number(a)||0}function Ct(i,t,e,s,o,a=new Map,n=new Map,l){if(i.type==="blank")return r`<div style="height:${i.blank_gap??10}px"></div>`;if(i.type==="rule")return r`<hr style="border:none;border-top:2px solid currentColor;width:80%;margin:0;opacity:0.4">`;if(i.type==="graph")return so(i,o,e,a,n);if(i.type==="svg"){const f=i.margin,k=f!=null?i.dock==="right"?`margin-left:${f}px;`:i.dock==="left"?`margin-right:${f}px;`:`margin-top:${f}px;margin-bottom:${f}px;`:"";let v;if(i.tank_pct_entity&&o){const z=parseFloat(o.states[i.tank_pct_entity]?.state??"");Number.isFinite(z)&&(v=Math.max(0,Math.min(100,z)))}else if(i.tank_volume_entity&&o){const z=parseFloat(o.states[i.tank_volume_entity]?.state??""),P=i.tank_capacity_entity?parseFloat(o.states[i.tank_capacity_entity]?.state??""):i.tank_capacity;Number.isFinite(z)&&P!=null&&Number.isFinite(P)&&P>0&&(v=Math.max(0,Math.min(100,z/P*100)))}const w=i.charging_entity?o?.states[i.charging_entity]?.state==="on":!1,$=r`<mc-fill
      .field=${i}
      .defaults=${s}
      .rawValue=${oo(i,o,e,a)}
      .fillPct=${v}
      .entityUnit=${i.entity&&!i.entity.startsWith("virtual:")&&o?o.states[i.entity]?.attributes?.unit_of_measurement??"":""}
    ></mc-fill>`,S=i.height??100,C=w?r`<div style="position:relative;display:inline-block;line-height:0;">${$}<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;font-size:${Math.round(S*.35)}px;pointer-events:none;text-shadow:0 0 4px rgba(0,0,0,0.8);">⚡</div></div>`:$;return k?r`<div style=${k}>${C}</div>`:C}const c=we(i,t,s),d=i.align??t.align??"left",p=i.tap_action&&i.tap_action.action!=="none",h=p&&l?f=>{f.stopPropagation(),l(i,i.tap_action.entity,"tap")}:void 0,u=p?"cursor:pointer;":"";if(i.type==="icon"){const f=c.font_size??g("icon_size")??20,k=c.color??"";return r`<ha-icon
      icon=${i.icon??""}
      style="${u}--mdc-icon-size:${f}px;${k?`color:${k}`:""}"
      @click=${h}
    ></ha-icon>`}if(i.type==="label")return r`<span
      class="ec-label"
      style="${u}${St(c)};text-align:${d}"
      @click=${h}
      >${i.text??""}</span
    >`;const{value:m,unit:b}=Os(o,i,s,e,a);let y=m;if(i.hide_below!==void 0){const f=parseFloat(y);if(Number.isFinite(f)&&Math.abs(f)<i.hide_below)return _}if(i.show_time_until_label&&!i.time_until_layout?.length&&i.entity?.startsWith("virtual:")){const f=e.get(i.entity)?.label;f&&(y=`${f}: ${m}`)}if(i.time_until_layout?.length&&i.entity?.startsWith("virtual:")){const f=e.get(i.entity),k=f?.label??"",v=we({...i,type:"label"},t,s),w=t.field_gap??s?.field_gap??g("field_gap")??4;if(f&&f.value<0)return r`<span class="ec-label" style="${St(v)}">${k}</span>`;const $=[[]];for(const P of i.time_until_layout)P.type==="newline"?$.push([]):$[$.length-1].push(P);const S=$.filter(P=>P.length>0),C=P=>P.type==="text"?r`<span class="ec-label" style="${St(v)}">${P.text??""}</span>`:P.type==="label"?r`<span class="ec-label" style="${St(v)}">${k}</span>`:P.type==="value"?r`<span class="ec-value" style="${u}${St(c)}" @click=${h}>${y}${b?r`<span class="ec-unit">${b}</span>`:_}</span>`:_,z=P=>r`<span style="display:inline-flex;align-items:baseline;gap:${w}px;">${P.map(C)}</span>`;return S.length===1?z(S[0]):r`<div style="display:flex;flex-direction:column;align-items:${_t(d)};gap:${w}px;">${S.map(z)}</div>`}const x=r`<span
    class="ec-value"
    style="${u}${St(c)};text-align:${d}"
    @click=${h}
    >${y}${b?r`<span class="ec-unit">${b}</span>`:_}</span
  >`;if(i.label){const f=we({...i,type:"label"},t,s),k=t.field_gap??s?.field_gap??g("field_gap")??4,v=i.label_position??g("label_position")??"above",w=v==="left"||v==="right",$=w?"row":"column",S=w?"baseline":_t(d),C=r`<span class="ec-label" style="${St(f)};text-align:${d}">${i.label}</span>`;return r`<div style="display:flex;flex-direction:${$};align-items:${S};gap:${k}px;">${v==="below"||v==="right"?[x,C]:[C,x]}</div>`}return x}function ao(i,t,e,s,o=new Map,a=new Map,n=new Map,l){const c={...e?.card,...t?.card,...i.box},d=i.columns??t?.columns??g("columns")??2,p=i.field_gap??t?.field_gap??e?.field_gap??g("extended_field_gap")??8,h=i.align??g("align")??"left",u={...e,label:{...e?.label,...t?.label},value:{...e?.value,...t?.value},field_gap:t?.field_gap??e?.field_gap,column_gap:i.column_gap??t?.column_gap??e?.column_gap},m={id:i.id,label_style:i.label_style,value_style:i.value_style,align:h},b=[];i.fields.forEach((v,w)=>{v.type==="value"&&v.label&&v.label_column!=null?(b.push({f:{...v,type:"label",text:v.label,column:v.label_column},i:w-.5}),b.push({f:{...v,label:void 0},i:w})):b.push({f:v,i:w})});const y=b.filter(v=>v.f.column!=null),x=b.filter(v=>v.f.column==null),f=Math.ceil(x.length/d)||1,k=Array.from({length:d},()=>[]);return x.forEach((v,w)=>{const $=Math.min(d-1,Math.floor(w/f));k[$].push(v)}),y.forEach(v=>{const w=Math.min(d,Math.max(1,v.f.column))-1;k[w].push(v)}),k.forEach(v=>v.sort((w,$)=>w.i-$.i)),r`
    <div class="ec-ext-card" style="${de(c)}">
      ${i.name?r`<div class="ec-ext-title">${i.name}</div>`:_}
      <div class="ec-ext-grid" style="display:flex;align-items:flex-start;gap:${p}px;">
        ${k.map(v=>r`
          <div style="flex:1 1 0;min-width:0;display:flex;flex-direction:column;gap:${p}px;">
            ${v.map(({f:w})=>Ct(w,m,o,u,s,a,n,l))}
          </div>
        `)}
      </div>
    </div>
  `}function no(i,t){return i?.length?r`${i.map(e=>{const s=We[e.anchor??"top-left"],o=["position:absolute",`left:${e.position.x*100}%`,`top:${e.position.y*100}%`,`width:${e.width}px`,`height:${e.height}px`,`transform:${s}`,e.color?`background:${e.color}`:"",e.radius?`border-radius:${e.radius}px`:"",e.tap_action||e.hold_action||e.double_tap_action?"cursor:pointer":"","box-sizing:border-box"].filter(Boolean).join(";");return r`<div
      class="ec-zone"
      data-zone-id="${e.id}"
      style=${o}
      @click=${a=>{!e.tap_action||e.tap_action.action==="none"||!t||(a.stopPropagation(),t(e,e.tap_action.entity,"tap"))}}
    ></div>`})}`:r``}function hi(i,t,e,s=new Map,o=new Map,a=new Map,n,l=!1,c=!1){if(!c&&i.visible_when&&!Zs(i.visible_when,e,s))return r``;const d=i.tap_action&&i.tap_action.action!=="none",p=d&&!l&&n?E=>{E.stopPropagation(),n(i,i.tap_action.entity,"tap")}:void 0,h=qs(i,t),u=i.field_gap??t?.field_gap??g("field_gap")??4,m=i.column_gap??t?.column_gap??g("column_gap")??3,b=i.align??g("align")??"left",y=i.columns??t?.card_columns??g("card_columns")??1,x=i.fields.filter(E=>E.dock==="left"),f=i.fields.filter(E=>E.dock==="right"),k=i.fields.filter(E=>!E.dock),v=x.length>0||f.length>0,w=!!i.bg?.url,$=l?["position:relative",i.width!=null?`width:${i.width}px`:"","box-sizing:border-box",i.transparent?"":de(h)].filter(Boolean).join(";"):["position:absolute",`left:${i.position.x*100}%`,`top:${i.position.y*100}%`,`transform:${We[i.anchor??g("anchor")??"top-left"]}`,i.width!=null?`width:${i.width}px`:"","box-sizing:border-box",i.transparent?"":de(h),d?"cursor:pointer":""].filter(Boolean).join(";"),S=(()=>{if(!i.bg?.url)return _;const E=i.bg,q=E.padding_top??0,Y=E.padding_right??0,K=E.padding_bottom??0,J=E.padding_left??0,lt=E.fit??"cover",O=E.opacity??1;if(E.width!=null||E.height!=null){const nt=E.width!=null?`width:${E.width}px`:"",_e=E.height!=null?`height:${E.height}px`:"";return r`<div style="grid-area:1/1;${nt};${_e};margin-top:${q}px;margin-left:${J}px;justify-self:start;align-self:start;background-image:url('${E.url}');background-size:${lt};background-position:center;background-repeat:no-repeat;opacity:${O};pointer-events:none"></div>`}return r`<div style="grid-area:1/1;padding:${q}px ${Y}px ${K}px ${J}px;background-image:url('${E.url}');background-size:${lt};background-position:center;background-repeat:no-repeat;background-origin:content-box;background-clip:content-box;opacity:${O};pointer-events:none"></div>`})(),C=[];let z=[];for(const E of k)E.column!=null&&E.column_end!=null&&E.column_end>E.column?(z.length&&(C.push({kind:"group",fields:z}),z=[]),C.push({kind:"span",field:E})):z.push(E);z.length&&C.push({kind:"group",fields:z});const P="display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0",B=`display:flex;flex-direction:column;gap:${u}px;align-items:${_t(b)};flex:1;min-width:0`,H=E=>{const q=E.filter(O=>O.column==null),Y=E.filter(O=>O.column!=null),K=Math.ceil(q.length/y)||1,J=Array.from({length:y},()=>[]);q.forEach((O,nt)=>{J[Math.min(y-1,Math.floor(nt/K))].push(O)}),Y.forEach(O=>{J[Math.max(0,Math.min(y-1,O.column-1))].push(O)});const lt=`display:flex;flex-direction:column;gap:${u}px;align-items:${_t(b)}`;return r`<div style="display:flex;flex-direction:row;gap:${m}px;align-items:flex-start;justify-content:${_t(b)}">
      ${J.map(O=>O.length?r`<div style=${lt}>${O.map(nt=>Ct(nt,i,s,t,e,o,a,n))}</div>`:_)}
    </div>`},A=E=>r`<div style="display:flex;flex-direction:column;align-items:${_t(E.align??b)}">${Ct(E,i,s,t,e,o,a,n)}</div>`,I=()=>r`<div style="display:flex;flex-direction:column;gap:${u}px">
    ${C.map(E=>E.kind==="span"?A(E.field):H(E.fields))}
  </div>`;if(v){const E=y>1?r`<div style="flex:1;min-width:0">${I()}</div>`:r`<div style=${B}>${k.map(Y=>Ct(Y,i,s,t,e,o,a,n))}</div>`,q=r`
      ${x.length?r`<div style=${P}>${x.map(Y=>Ct(Y,i,s,t,e,o,a,n))}</div>`:_}
      ${k.length?E:_}
      ${f.length?r`<div style=${P}>${f.map(Y=>Ct(Y,i,s,t,e,o,a,n))}</div>`:_}`;return w?r`<div class="ec-card" data-card-id="${i.id}" style="${$};display:grid;overflow:hidden" @click=${p}>
        ${S}
        <div style="grid-area:1/1;display:flex;flex-direction:row;gap:${m}px;align-items:center">${q}</div>
      </div>`:r`<div class="ec-card" data-card-id="${i.id}" style="${$};display:flex;flex-direction:row;gap:${m}px;align-items:center" @click=${p}>${q}</div>`}if(y>1)return w?r`<div class="ec-card" data-card-id="${i.id}" style="${$};display:grid;overflow:hidden" @click=${p}>
        ${S}
        <div style="grid-area:1/1">${I()}</div>
      </div>`:r`<div class="ec-card" data-card-id="${i.id}" style="${$}" @click=${p}>${I()}</div>`;const V=i.fields.map(E=>Ct(E,i,s,t,e,o,a,n));return w?r`<div class="ec-card" data-card-id="${i.id}" style="${$};display:grid;overflow:hidden" @click=${p}>
      ${S}
      <div style="grid-area:1/1;display:flex;flex-direction:column;gap:${u}px;align-items:${_t(b)}">${V}</div>
    </div>`:r`<div class="ec-card" data-card-id="${i.id}" style="${$};display:flex;flex-direction:column;gap:${u}px;align-items:${_t(b)}" @click=${p}>${V}</div>`}const ro=It`
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
`;function At(i,t,e){let s;if(i.card!==void 0){const o=e?.[i.card];if(o!==void 0&&i.side!==void 0)s=js(o,i.side);else{const a=t.find(n=>n.id===i.card);s=a?{x:a.position.x,y:a.position.y}:{x:0,y:0}}}else s={x:i.x??0,y:i.y??0};return{x:s.x+(i.dx??0),y:s.y+(i.dy??0)}}function _i(i,t){if(i.length<2)return"";if(t==="straight")return i.map((a,n)=>`${n===0?"M":"L"} ${a.x} ${a.y}`).join(" ");const e=12,s=[`M ${i[0].x} ${i[0].y}`];for(let a=1;a<i.length-1;a++){const n=i[a-1],l=i[a],c=i[a+1],d=l.x-n.x,p=l.y-n.y,h=Math.sqrt(d*d+p*p),u=c.x-l.x,m=c.y-l.y,b=Math.sqrt(u*u+m*m);if(h<e*2||b<e*2)s.push(`L ${l.x} ${l.y}`);else{const y=e/h,x=l.x-d*y,f=l.y-p*y,k=e/b,v=l.x+u*k,w=l.y+m*k;s.push(`L ${x.toFixed(2)} ${f.toFixed(2)}`),s.push(`Q ${l.x} ${l.y} ${v.toFixed(2)} ${w.toFixed(2)}`)}}const o=i[i.length-1];return s.push(`L ${o.x} ${o.y}`),s.join(" ")}function gi(i,t,e){const s=i.duration??g("flow_duration")??2;if(!i.entity||!t)return{duration:s,reverse:!1,hidden:!1};const o=t.states[i.entity],a=o?Number(o.state):NaN;if(!Number.isFinite(a))return{duration:s,reverse:!1,hidden:!1};const l=(o?.attributes?.unit_of_measurement??"")==="kW"?a*1e3:a,c=e?.power_unit==="kW"?l/1e3:l,d=Math.abs(c);if(i.min_power!==void 0&&d<i.min_power)return{duration:s,reverse:!1,hidden:!0};let p=c<0;i.invert&&(p=!p);const h=i.speed_min_value,u=i.speed_max_value;let m;if(h!==void 0&&u!==void 0&&u>h){const b=i.speed_min_duration??s,y=i.speed_max_duration??Math.max(.2,s*.1),x=Math.max(0,Math.min(1,(d-h)/(u-h)));m=b+x*(y-b)}else m=s;return{duration:m,reverse:p,hidden:!1}}function lo(i,t,e,s,o){const a=i.flows??[],n=i.cards??[],{totalW:l,totalH:c}=t,d=a.map(u=>{if((u.points??[]).length<2)return null;const m=u.points.map(b=>At(b,n,s)).map(b=>({x:b.x*l,y:b.y*c}));return{flow:u,pts:m}}).filter(u=>u!==null),p=d.filter(({flow:u})=>u.style!=="particles"),h=d.filter(({flow:u})=>u.style==="particles");return r`
    <svg
      class="ec-flows"
      viewBox="0 0 ${l} ${c}"
      preserveAspectRatio="none"
      style="position:absolute;inset:0;width:${l}px;height:${c}px;overflow:visible;pointer-events:none;"
    >
      ${p.map(({flow:u,pts:m})=>{const b=u.style??g("flow_style")??"dashes",y=u.forward_color??u.color??g("flow_color")??"#00d4ff",x=u.reverse_color??y,f=u.width??g("flow_width")??3,{duration:k,reverse:v,hidden:w}=gi(u,e,o),$=v?x:y,S=(Math.round(k*10)/10).toFixed(1),C=v?[...m].reverse():m,z=_i(C,u.curve??g("flow_curve")??"straight");return T`<path
          d=${z}
          class="ecf ecf-${b}"
          style="fill:none;stroke:${$};stroke-width:${f}px;stroke-linecap:round;--ecf-dur:${S}s;${w?"opacity:0;":""}"
        ></path>`})}
    </svg>
    <div
      class="ec-particles"
      style="position:absolute;inset:0;pointer-events:none;"
    >
      ${h.map(({flow:u,pts:m})=>{const b=u.forward_color??u.color??g("flow_color")??"#00d4ff",y=u.reverse_color??b,x=u.width??g("flow_width")??3,{duration:f,reverse:k,hidden:v}=gi(u,e,o),w=k?y:b;if(v)return _;const $=(Math.round(f*10)/10).toFixed(1),S=k?[...m].reverse():m,C=_i(S,u.curve??g("flow_curve")??"straight"),z=u.particle_count??g("flow_particle_count")??6;return Array.from({length:z},(P,B)=>{const H=-(B*Number($)/z).toFixed(3);return r`<div
            class="ecf-dot"
            style="offset-path:path('${C}');--ecf-dur:${$}s;animation-delay:${H}s;background:${w};width:${x*2}px;height:${x*2}px;"
          ></div>`})})}
    </div>
  `}const co=It`
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
`,Be="0.1.0",Ai="18/07/2026, 22:17:28",Fe=1;function po(i,t){const{type:e,...s}=i;return{ec_template:!0,version:Fe,card_version:Be,name:t.trim()||"Mosaic Canvas Template",exported:new Date().toISOString(),config:s}}function uo(i){const t=JSON.stringify(i,null,2),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),o=document.createElement("a");o.href=s,o.download=`${i.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function ho(i){let t;try{t=JSON.parse(i)}catch{return{template:null,error:"Invalid JSON — could not parse file."}}if(typeof t!="object"||t===null||!t.ec_template)return{template:null,error:"Not a valid Mosaic Canvas template file."};const e=t;return typeof e.version!="number"?{template:null,error:"Template is missing a version number."}:e.version>Fe?{template:null,error:`Template schema v${e.version} is newer than this card supports (v${Fe}). Update the card first.`}:{template:e,error:null}}function _o(i,t){return{type:t,...i.config}}var go=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,N=(i,t,e,s)=>{for(var o=s>1?void 0:s?mo(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&go(t,e,o),o};function G(i){return Math.round(i*10)/10}function L(i){return Math.round(i*1e4)/1e4}function mi(i,t,e,s,o){const a=(i.split(".")[1]??"sensor").replace(/_/g," "),n=t.replace(/_/g," "),l=["# Add to configuration.yaml","sensor:","  - platform: statistics",`    name: "${a} ${n}"`,`    entity_id: ${i}`,`    state_characteristic: ${t}`];e&&(l.push("    max_age:"),l.push(`      hours: ${e}`)),s&&l.push(`    sampling_size: ${s}`),t==="percentile"&&o&&l.push(`    percentile: ${o}`);const c=`${i.split(".")[1]??"sensor"}_${t}`;return l.push(""),l.push("# Then set the field entity to:"),l.push(`# sensor.${c}`),l.join(`
`)}const bo=[{value:"average_linear",label:"Average (linear)",group:"Averages"},{value:"average_step",label:"Average (step)",group:"Averages",binary:!0},{value:"average_timeless",label:"Average (timeless)",group:"Averages",binary:!0},{value:"mean",label:"Mean",group:"Averages",binary:!0},{value:"mean_circular",label:"Mean (circular)",group:"Averages"},{value:"median",label:"Median",group:"Averages"},{value:"value_max",label:"Value maximum",group:"Extremes"},{value:"value_min",label:"Value minimum",group:"Extremes"},{value:"distance_absolute",label:"Range (max − min)",group:"Extremes"},{value:"standard_deviation",label:"Standard deviation",group:"Spread"},{value:"variance",label:"Variance",group:"Spread"},{value:"noisiness",label:"Noisiness",group:"Spread"},{value:"percentile",label:"Percentile",group:"Spread"},{value:"distance_95_percent_of_values",label:"Distance 95% of values",group:"Spread"},{value:"distance_99_percent_of_values",label:"Distance 99% of values",group:"Spread"},{value:"change",label:"Change",group:"Change"},{value:"change_sample",label:"Change per sample",group:"Change"},{value:"change_second",label:"Change per second",group:"Change"},{value:"sum",label:"Sum",group:"Sums"},{value:"sum_differences",label:"Sum of differences",group:"Sums"},{value:"sum_differences_nonnegative",label:"Sum of differences (positive)",group:"Sums"},{value:"total",label:"Total",group:"Sums"},{value:"count",label:"Count (samples)",group:"Counts",binary:!0},{value:"count_on",label:"Count (on)",group:"Counts",binary:!0},{value:"count_off",label:"Count (off)",group:"Counts",binary:!0},{value:"datetime_newest",label:"Timestamp (newest)",group:"Timestamps"},{value:"datetime_oldest",label:"Timestamp (oldest)",group:"Timestamps",binary:!0},{value:"datetime_value_max",label:"Timestamp (at max)",group:"Timestamps"},{value:"datetime_value_min",label:"Timestamp (at min)",group:"Timestamps"}],Se=["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],oe=["left","center","right"],bi=["value","label","icon","svg","blank","rule"],vi={value:"Value",label:"Label",icon:"Icon",svg:"Element Library",graph:"Graph / Gauge",blank:"Blank",rule:"Horizontal Rule"},fi=[{value:"stat-line",label:"Statistics — Line"},{value:"bar",label:"Statistics — Bar"},{value:"bar-stacked",label:"Statistics — Bar (stacked)"},{value:"line",label:"History — Line (with unit)"},{value:"state-timeline",label:"History — State timeline"},{value:"gauge",label:"Arc Gauge"},{value:"gauge-needle",label:"Arc Gauge (Needle)"}],yi=(()=>{try{return new URL("./",import.meta.url).href}catch{return"/local/community/mosaic-canvas-card/"}})(),vo=[{type:"alarm-panel",name:"Alarm Panel"},{type:"button",name:"Button"},{type:"calendar",name:"Calendar"},{type:"entities",name:"Entities"},{type:"entity",name:"Entity"},{type:"entity-filter",name:"Entity Filter"},{type:"gauge",name:"Gauge"},{type:"glance",name:"Glance"},{type:"history-graph",name:"History Graph"},{type:"horizontal-stack",name:"Horizontal Stack"},{type:"humidifier",name:"Humidifier"},{type:"iframe",name:"iFrame"},{type:"light",name:"Light"},{type:"logbook",name:"Logbook"},{type:"map",name:"Map"},{type:"markdown",name:"Markdown"},{type:"media-control",name:"Media Control"},{type:"picture",name:"Picture"},{type:"picture-elements",name:"Picture Elements"},{type:"picture-entity",name:"Picture Entity"},{type:"picture-glance",name:"Picture Glance"},{type:"plant-status",name:"Plant Status"},{type:"sensor",name:"Sensor"},{type:"shopping-list",name:"Shopping List"},{type:"statistics-graph",name:"Statistics Graph"},{type:"thermostat",name:"Thermostat"},{type:"tile",name:"Tile"},{type:"todo-list",name:"To-do List"},{type:"vertical-stack",name:"Vertical Stack"},{type:"weather-forecast",name:"Weather Forecast"},{type:"webpage",name:"Webpage"}];function fo(i){try{const t=document.createElement("div");t.style.color=i,t.style.display="none",document.body.appendChild(t);const e=getComputedStyle(t).color;document.body.removeChild(t);const s=e.match(/\d+/g)?.map(Number);return!s||s.length<3?"#000000":"#"+s.slice(0,3).map(o=>o.toString(16).padStart(2,"0")).join("")}catch{return"#000000"}}let F=class extends bt{constructor(){super(...arguments),this._selCard=0,this._selField=-1,this._selCards=new Set,this._selEmbCards=new Set,this._selFlow=-1,this._showAddFlowInput=!1,this._newFlowName="",this._pendingFlowIdx=-1,this._showFlowCompleteModal=!1,this._selPoint=-1,this._selVirtual=-1,this._selZone=-1,this._selExtCard=0,this._selExtField=-1,this._templateName="",this._templateError="",this._previewBoxes={},this._previewExpanded=!1,this._barAtTop=localStorage.getItem("mc-expanded-bar-top")==="1",this._onWindowResize=()=>this._sizeExpandedCanvas(),this._copiedFields=null,this._copySourceIdx=-1,this._virtualClipboard=null,this._copiedField=null,this._copiedFieldSrc=null,this._dragSrc=null,this._cpOpenId=null,this._cpOpenAbove=!1,this._ggOpen=!1,this._ggTarget=null,this._wizStep=-1,this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizardShown=!1,this._dragCard=-1,this._startX=0,this._startY=0,this._dragMembers=[],this._embDragMembers=[],this._dragPoint=-1,this._pStartX=0,this._pStartY=0,this._pStartPos={x:0,y:0},this._snapAxis=null,this._snapAnchor=null,this._dragZone=-1,this._zStartX=0,this._zStartY=0,this._zStartPos={x:0,y:0},this._resizeZone=-1,this._resizeCorner="br",this._zResizeStartBox={x:0,y:0,w:0,h:0},this._bgSelected=!1,this._bgMode=null,this._bgStartX=0,this._bgStartY=0,this._bgStart={L:0,T:0,baseW:0,baseH:0,totalW:0,totalH:0},this._selEmbCard=-1,this._dragEmbCard=-1,this._ecStartX=0,this._ecStartY=0,this._embEditorOpen=!1,this._embEditorYaml="",this._embNativeEditor=null,this._embEditorIdx=-1,this._embEditorConfig=null,this._embPickerOpen=!1,this._embPickerSearch="",this._embPickerTargetIdx=-1,this._resetToWizard=()=>{window.confirm(`Reset all configuration and restart the setup wizard?

This will clear all cards, flows, zones, and background settings.`)&&(this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizStep=0,this._emit({type:this._config.type,background:{},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}))}}setConfig(i){let t=!1;const e=a=>{let n=!1;const l=a.map(c=>c.column==null?(t=!0,n=!0,{...c,column:1}):c);return n?l:a},s=(i.cards??[]).map(a=>{const n=e(a.fields);return n===a.fields?a:{...a,fields:n}}),o=(i.extended_cards??[]).map(a=>{const n=e(a.fields);return n===a.fields?a:{...a,fields:n}});if(t&&(i={...i,cards:s,...i.extended_cards?{extended_cards:o}:{}}),this._config=i,t&&this._emit(i),!this._wizardShown){this._wizardShown=!0;const a=!i.background?.images?.day&&!i.background?.images?.night,n=(i.cards??[]).length===0;a&&n&&(this._wizStep=0)}}_emit(i){this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}_finishWizard(){if(!this._config)return;const i=this._wiz;let t;if(i.cardType==="energy"){if(i.source!=="none"){t={source:i.source},i.source==="auto"&&(t.sun_entity=i.sunEntity||"sun.sun");const s={},o={};i.dayImg&&(s[0]=i.dayImg),i.nightImg&&i.source==="auto"&&(o[0]=i.nightImg);for(let a=0;a<i.evCount;a++){const n=i.evImgs[a];n?.day&&(s[String(a+1)]=n.day),n?.night&&i.source==="auto"&&(o[String(a+1)]=n.night)}t.images={},Object.keys(s).length>0&&(t.images.day=s),Object.keys(o).length>0&&(t.images.night=o)}}else if(i.bgCount==="single"&&i.singleImg)t={source:"day",images:{day:{0:i.singleImg}}};else if(i.bgCount==="multiple"){t=i.bgSwitchMode==="sun"?{source:"auto",sun_entity:i.sunEntity||"sun.sun"}:{source:"entity",mode_entity:i.bgEntity};const s={},o={};i.dayImg&&(s[0]=i.dayImg),i.nightImg&&(o[0]=i.nightImg),t.images={},Object.keys(s).length>0&&(t.images.day=s),Object.keys(o).length>0&&(t.images.night=o)}const e={...this._config};t&&(e.background=t),i.cardType==="energy"&&i.evCount>0&&(e.ev_count=i.evCount),this._wizStep=-1,this._emit(e)}_renderWizard(){const i=this._wizStep,t=this._wiz,e=o=>{this._wiz={...t,...o}},s=o=>{this._wizStep=o};return r`
      <div class="ec-wizard">
        ${i===0?r`
          <div class="ec-wiz-welcome">
            <div class="ec-wiz-icon">🎨</div>
            <h2 class="ec-wiz-title">Welcome to Mosaic Canvas Card</h2>
            <p class="ec-wiz-desc">A few quick questions will tailor the setup to your use case — or skip to jump straight into the editor.</p>
            <div class="ec-wiz-row ec-wiz-end">
              <button class="ec-wiz-btn-ghost" @click=${()=>this._finishWizard()}>Skip setup</button>
              <button class="ec-wiz-btn-primary" @click=${()=>s(1)}>Get started →</button>
            </div>
          </div>

        `:i===1?r`
          <h3 class="ec-wiz-heading">What will this card be used for?</h3>
          <p class="ec-wiz-desc">This determines what setup options you'll be asked about.</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.cardType==="energy"?" selected":""}"
              @click=${()=>e({cardType:"energy"})}>
              <span class="ec-wiz-type-icon">⚡</span>
              <span class="ec-wiz-type-title">Energy Dashboard</span>
              <span class="ec-wiz-type-desc">Solar, battery, grid flows with day/night switching and EV variants</span>
            </button>
            <button class="ec-wiz-type-btn${t.cardType==="general"?" selected":""}"
              @click=${()=>e({cardType:"general"})}>
              <span class="ec-wiz-type-icon">🗺️</span>
              <span class="ec-wiz-type-title">General Purpose</span>
              <span class="ec-wiz-type-desc">Any layout over a background image — floor plan, status board, custom display</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(0)}>← Back</button>
            <button class="ec-wiz-btn-primary" ?disabled=${!t.cardType}
              @click=${()=>s(t.cardType==="energy"?2:20)}>Next →</button>
          </div>

        `:i===2?r`
          <h3 class="ec-wiz-heading">Background</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Day/night switching</label>
            <select class="ec-wiz-select" .value=${t.source}
              @change=${o=>e({source:o.target.value})}>
              <option value="auto">Auto — follows sun entity</option>
              <option value="day">Day only — no switching</option>
              <option value="none">No background image</option>
            </select>
          </div>
          ${t.source==="auto"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${o=>e({sunEntity:o.detail.value})}
              ></ha-entity-picker>
            </div>
          `:_}
          ${t.source!=="none"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Day image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-day.jpg"
                .value=${t.dayImg} @input=${o=>e({dayImg:o.target.value})}/>
            </div>
          `:_}
          ${t.source==="auto"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Night image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-night.jpg"
                .value=${t.nightImg} @input=${o=>e({nightImg:o.target.value})}/>
            </div>
          `:_}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(1)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>s(3)}>Next →</button>
          </div>

        `:i===3?r`
          <h3 class="ec-wiz-heading">EV Variants <span class="ec-wiz-optional">(optional)</span></h3>
          <p class="ec-wiz-desc">Show different backgrounds based on how many EVs are home charging.</p>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">EV charging slots (0 = no EV switching)</label>
            <input class="ec-wiz-input ec-wiz-input--short" type="number" min="0" max="3"
              .value=${String(t.evCount)}
              @input=${o=>{const a=Math.max(0,Math.min(3,parseInt(o.target.value)||0)),n=Array.from({length:a},(l,c)=>t.evImgs[c]??{day:"",night:""});e({evCount:a,evImgs:n})}}/>
          </div>
          ${t.evImgs.map((o,a)=>r`
            <div class="ec-wiz-ev-group">
              <div class="ec-wiz-ev-label">${a+1} EV${a>0?"s":""} charging</div>
              ${t.source!=="none"?r`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Day image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-day-${a+1}ev.jpg`}
                    .value=${o.day}
                    @input=${n=>{const l=t.evImgs.map((c,d)=>d===a?{...c,day:n.target.value}:c);e({evImgs:l})}}/>
                </div>
              `:_}
              ${t.source==="auto"?r`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Night image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-night-${a+1}ev.jpg`}
                    .value=${o.night}
                    @input=${n=>{const l=t.evImgs.map((c,d)=>d===a?{...c,night:n.target.value}:c);e({evImgs:l})}}/>
                </div>
              `:_}
            </div>
          `)}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(2)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:i===20?r`
          <h3 class="ec-wiz-heading">Background images</h3>
          <p class="ec-wiz-desc">Do you want a background image on this card?</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.bgCount==="none"?" selected":""}"
              @click=${()=>e({bgCount:"none"})}>
              <span class="ec-wiz-type-icon">⬜</span>
              <span class="ec-wiz-type-title">No background</span>
              <span class="ec-wiz-type-desc">Cards float over a plain or transparent background</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="single"?" selected":""}"
              @click=${()=>e({bgCount:"single"})}>
              <span class="ec-wiz-type-icon">🖼️</span>
              <span class="ec-wiz-type-title">One image</span>
              <span class="ec-wiz-type-desc">A single static background image</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="multiple"?" selected":""}"
              @click=${()=>e({bgCount:"multiple"})}>
              <span class="ec-wiz-type-icon">🔄</span>
              <span class="ec-wiz-type-title">Multiple images</span>
              <span class="ec-wiz-type-desc">Background changes based on time of day or an entity state</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(1)}>← Back</button>
            <button class="ec-wiz-btn-primary"
              @click=${()=>{t.bgCount==="none"?this._finishWizard():t.bgCount==="single"?s(21):s(22)}}>Next →</button>
          </div>

        `:i===21?r`
          <h3 class="ec-wiz-heading">Background image</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/my-background.jpg"
              .value=${t.singleImg} @input=${o=>e({singleImg:o.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:i===22?r`
          <h3 class="ec-wiz-heading">Multiple backgrounds</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">When should the image change?</label>
            <select class="ec-wiz-select" .value=${t.bgSwitchMode}
              @change=${o=>e({bgSwitchMode:o.target.value})}>
              <option value="sun">Time of day — follows the sun (day/night)</option>
              <option value="entity">Entity state — switches when an entity changes</option>
            </select>
          </div>
          ${t.bgSwitchMode==="sun"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${o=>e({sunEntity:o.detail.value})}
              ></ha-entity-picker>
            </div>
          `:r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Trigger entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.bgEntity} allow-custom-entity
                @value-changed=${o=>e({bgEntity:o.detail.value})}
              ></ha-entity-picker>
            </div>
            <p class="ec-wiz-desc" style="font-size:11px;margin-top:-4px;">Alternate image shows when entity state is "on", "night", or "true".</p>
          `}
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Day":"Main"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-main.jpg"
              .value=${t.dayImg} @input=${o=>e({dayImg:o.target.value})}/>
          </div>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Night":"Alternate"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-alt.jpg"
              .value=${t.nightImg} @input=${o=>e({nightImg:o.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:_}
      </div>
    `}_updateCard(i,t){if(!this._config)return;const e=this._config.cards.map((s,o)=>{if(o!==i)return s;const a={...s,...t};for(const n of Object.keys(t))t[n]===void 0&&delete a[n];return a});this._emit({...this._config,cards:e})}_updateCardBox(i,t){if(!this._config)return;const e=this._config.cards[i];e&&this._updateCard(i,{box:{...e.box,...t}})}_updateField(i,t,e){if(!this._config)return;const s=this._config.cards[i];if(!s)return;const o=s.fields.map((a,n)=>n===t?{...a,...e}:a);this._updateCard(i,{fields:o})}_updateDefaults(i){this._config&&this._emit({...this._config,defaults:{...this._config.defaults,...i}})}_updateCanvas(i){this._config&&this._emit({...this._config,canvas:{...this._config.canvas,...i}})}_gridGeom(){const i=this._config?.canvas;if(i?.layout_mode!=="grid"||!i.grid)return null;const{totalW:t,totalH:e}=rt(this._config),s=Math.max(1,i.grid.columns||1),o=Math.max(1,i.grid.rows||1),a=i.grid.padding??0;return{cols:s,rows:o,padding:a,cellW:t/s,cellH:e/o,totalW:t,totalH:e}}_setLayoutMode(i){if(!this._config)return;const t={...this._config.canvas??{}};if(t.layout_mode=i,i==="grid"){t.grid||(t.grid={columns:10,rows:15,padding:0});const e=Math.max(1,t.grid.columns),s=Math.max(1,t.grid.rows),o=t.grid.padding??0,{totalW:a}=rt(this._config),n=a/e,l=this._config.cards.map(d=>{const p=this._previewBoxes[d.id],h=p?p.x+p.w/2:d.position.x,u=p?p.y+p.h/2:d.position.y,m=Math.min(e,Math.max(0,Math.round(h*e))),b=Math.min(s,Math.max(0,Math.round(u*s))),y=d.grid_span??Math.max(1,Math.min(e,Math.round((p?.w??0)*e)||1)),x=Math.max(8,y*n-o);return{...d,anchor:"center",grid_span:y,width:x,position:{x:L(m/e),y:L(b/s)}}}),c=this._embCards().map(d=>{const p=this._previewBoxes[d.id],h=p?p.x+p.w/2:d.position.x,u=p?p.y+p.h/2:d.position.y,m=Math.min(e,Math.max(0,Math.round(h*e))),b=Math.min(s,Math.max(0,Math.round(u*s))),y=d.grid_span??Math.max(1,Math.min(e,Math.round((p?.w??0)*e)||1)),x=Math.max(8,y*n-o);return{...d,anchor:"center",grid_span:y,width:x,position:{x:L(m/e),y:L(b/s)}}});this._emit({...this._config,canvas:t,cards:l,embedded_cards:c})}else this._emit({...this._config,canvas:t})}_renderGridOverlay(){const i=this._gridGeom();if(!i)return _;const{cols:t,rows:e}=i,s=[];for(let o=0;o<=t;o++)for(let a=0;a<=e;a++)s.push(r`<div class="ec-grid-dot" style="left:${o/t*100}%;top:${a/e*100}%;"></div>`);return r`<div class="ec-grid-overlay">${s}</div>`}_renderBgOverlay(){if(!this._config)return _;const i=rt(this._config),t=i.L/i.totalW*100,e=i.T/i.totalH*100,s=i.baseW/i.totalW*100,o=i.baseH/i.totalH*100;return r`
      <div class="ec-bg-ov${this._bgSelected?" selected":""}"
        style="left:${t}%;top:${e}%;width:${s}%;height:${o}%;"
        @pointerdown=${a=>this._onBgDown(a,"move")}
        title="Background image — drag to move, corners to resize">
        ${this._bgSelected?["tl","tr","bl","br"].map(a=>r`
          <div class="ec-bg-resize ec-bg-resize-${a}"
            @pointerdown=${n=>this._onBgDown(n,a)}></div>`):_}
      </div>`}_updateBackground(i){this._config&&this._emit({...this._config,background:{...this._config.background,...i}})}_flows(){return this._config?.flows??[]}_updateFlow(i,t){if(!this._config)return;const e=this._flows().map((s,o)=>o===i?{...s,...t}:s);this._emit({...this._config,flows:e})}_addFlow(){if(!this._config)return;const i={id:"flow-"+Date.now().toString(36),name:"Flow",style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},t=[...this._flows(),i];this._selFlow=t.length-1,this._selPoint=-1,this._emit({...this._config,flows:t})}_addFlowFromExpanded(){if(!this._config)return;const i=this._newFlowName.trim()||"Flow",t={id:"flow-"+Date.now().toString(36),name:i,style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},e=[...this._flows(),t];this._selFlow=e.length-1,this._pendingFlowIdx=e.length-1,this._selPoint=-1,this._showAddFlowInput=!1,this._newFlowName="",this._emit({...this._config,flows:e})}_collapseExpanded(){this._pendingFlowIdx>=0?this._showFlowCompleteModal=!0:this._previewExpanded=!1}_goToFlow(){const i=this._pendingFlowIdx;this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1,this._selFlow=i,this.updateComplete.then(()=>{const e=Array.from(this.renderRoot.querySelectorAll("details.ec-details")).find(s=>s.querySelector("summary")?.textContent?.trim()==="Flows");e&&(e.open=!0,e.scrollIntoView({behavior:"smooth",block:"start"}))})}_removeFlow(i){if(!this._config)return;const t=this._flows().filter((e,s)=>s!==i);this._selFlow=Math.min(this._selFlow,Math.max(0,t.length-1)),t.length===0&&(this._selFlow=-1),this._emit({...this._config,flows:t})}_updateFlowPoint(i,t,e){if(!this._config)return;const s=this._flows().map((o,a)=>{if(a!==i)return o;const n=o.points.map((l,c)=>c===t?{...l,...e}:l);return{...o,points:n}});this._emit({...this._config,flows:s})}_setPointKind(i,t,e){if(!this._config)return;const s=this._flows(),o=s[i];if(!o)return;const a=o.points[t];if(!a)return;const{dx:n,dy:l}=a;let c;e==="card"?c={card:this._config.cards[0]?.id??"",side:"center",...n!=null?{dx:n}:{},...l!=null?{dy:l}:{}}:c={x:0,y:0,...n!=null?{dx:n}:{},...l!=null?{dy:l}:{}};const d=s.map((p,h)=>{if(h!==i)return p;const u=p.points.map((m,b)=>b===t?c:m);return{...p,points:u}});this._emit({...this._config,flows:d})}_addFlowPoint(i){if(!this._config)return;const t=this._flows().map((e,s)=>s!==i?e:{...e,points:[...e.points,{x:0,y:0}]});this._emit({...this._config,flows:t})}_onFlowLayerClick(i){if(i.target!==i.currentTarget||!this._config)return;const t=this._flows(),e=t[this._selFlow];if(!e)return;const s=i.currentTarget,o=L(i.offsetX/s.clientWidth),a=L(i.offsetY/s.clientHeight),n=[...e.points],l=this._selPoint>=0?this._selPoint:n.length-1;n.splice(l+1,0,{x:o,y:a});const c=t.map((d,p)=>p===this._selFlow?{...d,points:n}:d);this._selPoint=l+1,this._emit({...this._config,flows:c})}_removeFlowPoint(i,t){if(!this._config)return;const e=this._flows().map((s,o)=>{if(o!==i)return s;const a=s.points.filter((n,l)=>l!==t);return{...s,points:a}});this._emit({...this._config,flows:e})}_reorderFlowPoint(i,t,e){if(!this._config)return;const s=this._flows().map((o,a)=>{if(a!==i)return o;const n=[...o.points],l=t+e;return l<0||l>=n.length?o:([n[t],n[l]]=[n[l],n[t]],{...o,points:n})});this._selPoint=s[i]?.points[t+e]!==void 0?t+e:t,this._emit({...this._config,flows:s})}_virtuals(){return this._config?.virtuals??[]}_addVirtual(){if(!this._config)return;const t={id:`v${Date.now()}`,name:"New virtual",op:"add",inputs:[]},e=[...this._virtuals(),t];this._selVirtual=e.length-1,this._emit({...this._config,virtuals:e})}_updateVirtual(i,t){if(!this._config)return;const e=this._virtuals().map((s,o)=>o===i?{...s,...t}:s);this._emit({...this._config,virtuals:e})}_removeVirtual(i){if(!this._config)return;const t=this._virtuals().filter((e,s)=>s!==i);this._selVirtual=Math.min(this._selVirtual,t.length-1),this._emit({...this._config,virtuals:t})}_addVirtualInput(i){if(!this._config)return;const t=[...this._virtuals()[i]?.inputs??"",""];this._updateVirtual(i,{inputs:t})}_updateVirtualInput(i,t,e){const s=[...this._virtuals()[i]?.inputs??[]];s[t]=e,this._updateVirtual(i,{inputs:s})}_removeVirtualInput(i,t){const e=(this._virtuals()[i]?.inputs??[]).filter((s,o)=>o!==t);this._updateVirtual(i,{inputs:e})}_copyVirtual(i){const t=this._virtuals()[i];t&&(this._virtualClipboard={...t})}_pasteVirtual(){if(!this._config||!this._virtualClipboard)return;const i={...this._virtualClipboard,id:`v${Date.now()}`},t=[...this._virtuals(),i];this._selVirtual=t.length-1,this._emit({...this._config,virtuals:t})}_zones(){return this._config?.zones??[]}_addZone(){if(!this._config)return;const i={id:"zone-"+Date.now().toString(36),name:"Zone",position:{x:.5,y:.5},anchor:"center",width:120,height:70},t=[...this._zones(),i];this._selZone=t.length-1,this._emit({...this._config,zones:t})}_updateZone(i,t){if(!this._config)return;const e=this._zones().map((s,o)=>o===i?{...s,...t}:s);this._emit({...this._config,zones:e})}_removeZone(i){if(!this._config)return;const t=this._zones().filter((e,s)=>s!==i);this._selZone=Math.min(this._selZone,t.length-1),t.length===0&&(this._selZone=-1),this._emit({...this._config,zones:t})}_onZoneDown(i,t){i.preventDefault(),i.stopPropagation(),this._bgSelected=!1,this._selZone=t,this._dragZone=t,i.target.setPointerCapture(i.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=i.clientX,this._zStartY=i.clientY,this._zStartPos={...this._zones()[t]?.position??{x:0,y:0}}}_onZoneMove(i){if(this._dragZone<0||!this._zRect||!this._config)return;const t=L(this._zStartPos.x+(i.clientX-this._zStartX)/this._zRect.width),e=L(this._zStartPos.y+(i.clientY-this._zStartY)/this._zRect.height);this._updateZone(this._dragZone,{position:{x:t,y:e}})}_onZoneUp(i){this._dragZone>=0&&i.target.releasePointerCapture(i.pointerId),this._dragZone=-1}_zoneBox(i){const[t,e]=ce[i.anchor??g("anchor")??"top-left"],{totalW:s,totalH:o}=rt(this._config);return{x:i.position.x*s-t*i.width,y:i.position.y*o-e*i.height,w:i.width,h:i.height}}_onZoneResizeDown(i,t,e){i.preventDefault(),i.stopPropagation();const s=this._zones()[t];s&&(this._selZone=t,this._resizeZone=t,this._resizeCorner=e,i.target.setPointerCapture(i.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=i.clientX,this._zStartY=i.clientY,this._zResizeStartBox=this._zoneBox(s))}_onZoneResizeMove(i){if(this._resizeZone<0||!this._zRect||!this._config)return;const t=this._zones()[this._resizeZone];if(!t)return;const{totalW:e,totalH:s}=rt(this._config),o=(i.clientX-this._zStartX)/this._zRect.width*e,a=(i.clientY-this._zStartY)/this._zRect.height*s,n=this._zResizeStartBox,l=10,c=this._resizeCorner.includes("l")?n.x+n.w:n.x,d=this._resizeCorner.includes("t")?n.y+n.h:n.y,p=this._resizeCorner.includes("l")?n.x:n.x+n.w,h=this._resizeCorner.includes("t")?n.y:n.y+n.h;let u=p+o-c,m=h+a-d;const b=u>=0?1:-1,y=m>=0?1:-1;u=Math.max(l,Math.abs(u))*b,m=Math.max(l,Math.abs(m))*y;const x=b>=0?c:c+u,f=y>=0?d:d+m,k=Math.abs(u),v=Math.abs(m),[w,$]=ce[t.anchor??g("anchor")??"top-left"],S={x:L((x+w*k)/e),y:L((f+$*v)/s)};this._updateZone(this._resizeZone,{width:G(k),height:G(v),position:S})}_onZoneResizeUp(i){this._resizeZone>=0&&i.target.releasePointerCapture(i.pointerId),this._resizeZone=-1}_onBgDown(i,t){i.preventDefault(),i.stopPropagation(),this._bgSelected=!0,this._bgMode=t,i.target.setPointerCapture(i.pointerId),this._bgRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._bgStartX=i.clientX,this._bgStartY=i.clientY;const e=rt(this._config);this._bgStart={L:e.L,T:e.T,baseW:e.baseW,baseH:e.baseH,totalW:e.totalW,totalH:e.totalH}}_onBgMove(i){if(!this._bgMode||!this._bgRect||!this._config)return;const t=this._bgStart,e=(i.clientX-this._bgStartX)/this._bgRect.width*t.totalW,s=(i.clientY-this._bgStartY)/this._bgRect.height*t.totalH,o=this._gridGeom(),a=(m,b)=>Math.round(m/b)*b,n=20;let l,c,d,p;if(this._bgMode==="move")d=t.baseW,p=t.baseH,l=Math.min(Math.max(0,t.L+e),t.totalW-d),c=Math.min(Math.max(0,t.T+s),t.totalH-p),o&&(l=Math.min(Math.max(0,a(l,o.cellW)),t.totalW-d),c=Math.min(Math.max(0,a(c,o.cellH)),t.totalH-p));else{const m=this._bgMode.includes("l"),b=this._bgMode.includes("t"),y=m?-e:e,x=b?-s:s;let f=Math.abs(y)/t.baseW>=Math.abs(x)/t.baseH?(t.baseW+y)/t.baseW:(t.baseH+x)/t.baseH;const k=m?t.L+t.baseW:t.totalW-t.L,v=b?t.T+t.baseH:t.totalH-t.T,w=Math.min(k/t.baseW,v/t.baseH),$=Math.max(n/t.baseW,n/t.baseH);f=Math.min(Math.max(f,$),w),d=t.baseW*f,p=t.baseH*f,l=m?t.L+t.baseW-d:t.L,c=b?t.T+t.baseH-p:t.T,o&&(d=Math.min(t.totalW,Math.max(o.cellW,a(d,o.cellW))),p=Math.min(t.totalH,d*(t.baseH/t.baseW)),l=m?t.L+t.baseW-d:t.L,c=b?t.T+t.baseH-p:t.T,l=Math.min(Math.max(0,a(l,o.cellW)),t.totalW-d),c=Math.min(Math.max(0,a(c,o.cellH)),t.totalH-p))}const h=t.totalW-d-l,u=t.totalH-p-c;this._updateCanvas({width:G(d),height:G(p),extend:{left:l>.5?G(l):void 0,top:c>.5?G(c):void 0,right:h>.5?G(h):void 0,bottom:u>.5?G(u):void 0}})}_onBgUp(i){this._bgMode&&i.target.releasePointerCapture(i.pointerId),this._bgMode=null}_embCards(){return this._config?.embedded_cards??[]}_addEmbCard(){if(!this._config)return;const i={id:"emb-"+Date.now().toString(36),name:"Embedded Card",position:{x:.5,y:.5},anchor:"center",width:200,card_config:{}},t=this._gridGeom();if(t){const{cols:s,rows:o,cellW:a,padding:n}=t,l=Math.round(s/2),c=Math.round(o/2),d=Math.max(1,Math.min(s,2));i.grid_span=d,i.width=Math.max(8,d*a-n),i.position={x:L(l/s),y:L(c/o)}}const e=[...this._embCards(),i];this._selEmbCard=e.length-1,this._emit({...this._config,embedded_cards:e})}_updateEmbCard(i,t){if(!this._config)return;const e=this._embCards().map((s,o)=>o===i?{...s,...t}:s);this._emit({...this._config,embedded_cards:e})}_removeEmbCard(i){if(!this._config)return;const t=this._embCards().filter((e,s)=>s!==i);this._selEmbCard=Math.min(this._selEmbCard,t.length-1),t.length===0&&(this._selEmbCard=-1),this._emit({...this._config,embedded_cards:t})}_onEmbCardDown(i,t){if(i.preventDefault(),i.stopPropagation(),this._bgSelected=!1,this._selEmbCard=t,i.shiftKey||i.ctrlKey||i.metaKey){const a=new Set(this._selEmbCards);a.has(t)?a.delete(t):a.add(t),this._selEmbCards=a;return}const e=this._embCards(),s=e[t]?.group,o=s?e.map((a,n)=>({ec:a,i:n})).filter(({ec:a})=>a.group===s).map(({i:a})=>a):[t];if(this._selEmbCards=new Set(o),this._dragEmbCard=t,i.target.setPointerCapture(i.pointerId),this._ecRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._ecStartX=i.clientX,this._ecStartY=i.clientY,this._embDragMembers=o.map(a=>({idx:a,start:{...e[a]?.position??{x:0,y:0}}})),s){const a=this._config?.cards??[],n=a.map((l,c)=>({c:l,i:c})).filter(({c:l})=>l.group===s).map(({i:l})=>l);this._selCards=new Set(n),this._dragCard=n[0]??-1,this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=i.clientX,this._startY=i.clientY,this._dragMembers=n.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selCards=new Set,this._dragCard=-1,this._dragMembers=[]}_onEmbCardMove(i){if(this._dragEmbCard<0||!this._ecRect||!this._config)return;const t=(i.clientX-this._ecStartX)/this._ecRect.width,e=(i.clientY-this._ecStartY)/this._ecRect.height,s=this._embCards().map((a,n)=>{const l=this._embDragMembers.find(c=>c.idx===n);return l?{...a,position:{x:L(l.start.x+t),y:L(l.start.y+e)}}:a}),o=this._dragMembers.length>0?this._config.cards.map((a,n)=>{const l=this._dragMembers.find(c=>c.idx===n);return l?{...a,position:{x:L(l.start.x+t),y:L(l.start.y+e)}}:a}):this._config.cards;this._emit({...this._config,cards:o,embedded_cards:s})}_onEmbCardUp(i){this._dragEmbCard>=0&&i.target.releasePointerCapture(i.pointerId),this._dragEmbCard=-1}async _openEmbEditor(i){const t=this._embCards()[i];if(!t)return;this._embEditorIdx=i,this._embEditorYaml=JSON.stringify(t.card_config,null,2),this._embNativeEditor=null;const e=t.card_config,s=String(e?.type??"");if(s)try{const o=await window.loadCardHelpers?.();if(o?.createCardElement)try{o.createCardElement(e)}catch{}const a=s.startsWith("custom:")?s.slice(7):`hui-${s}-card`;await Promise.race([customElements.whenDefined(a),new Promise(d=>setTimeout(d,5e3))]);const n=customElements.get(a);let l={...e};if(n?.getStubConfig)try{const d=Object.keys(this.hass?.states??{}),p=await n.getStubConfig(this.hass,d,d);p&&typeof p=="object"&&(l={...p,...l})}catch{}if(this._embEditorConfig=l,await Promise.race([customElements.whenDefined("hui-card-element-editor"),new Promise(d=>setTimeout(d,3e3))]),customElements.get("hui-card-element-editor")){const d=document.createElement("hui-card-element-editor");d.hass=this.hass,d.value=l,d.addEventListener("config-changed",p=>{p.stopPropagation();const h=p.detail;h?.config&&this._embEditorIdx>=0&&this._updateEmbCard(this._embEditorIdx,{card_config:h.config})}),this._embNativeEditor=d}else{const d=n?.getConfigElement;if(d){const p=await d.call(n);if(p){try{p.setConfig?.(l)}catch{}p.hass=this.hass,p.addEventListener("config-changed",h=>{h.stopPropagation();const u=h.detail;u?.config&&this._embEditorIdx>=0&&this._updateEmbCard(this._embEditorIdx,{card_config:u.config})}),this._embNativeEditor=p}}}}catch(o){console.warn("[mc-editor] native editor unavailable:",o)}this._embEditorOpen=!0}_closeEmbEditor(){this._embEditorOpen=!1,this._embEditorIdx=-1,this._embNativeEditor=null,this._embEditorConfig=null}_saveEmbEditorYaml(){if(!(this._embEditorIdx<0))try{const i=JSON.parse(this._embEditorYaml);this._updateEmbCard(this._embEditorIdx,{card_config:i}),this._closeEmbEditor()}catch(i){alert("Invalid JSON: "+i.message)}}async _openEmbPicker(i){this._embPickerTargetIdx=i,this._embPickerSearch="",this._embPickerOpen=!0}async _pickEmbCardType(i){this._embPickerOpen=!1,this._embPickerSearch="";const t=this._embPickerTargetIdx;if(t<0)return;const s={...this._embCards()[t].card_config,type:i};this._updateEmbCard(t,{card_config:s}),await this._openEmbEditor(t)}_setBgImage(i,t,e){if(!this._config)return;const s=this._config.background??{},o={...s.images?.[i]??{}};e===""?delete o[t]:o[t]=e,this._updateBackground({images:{...s.images,[i]:o}})}_addCard(){if(!this._config)return;const i={id:"card-"+Date.now().toString(36),name:"Card",position:{x:.5,y:.5},anchor:"center",align:"center",fields:[]},t=this._gridGeom();if(t){const{cols:s,rows:o,cellW:a,padding:n}=t,l=Math.round(s/2),c=Math.round(o/2),d=Math.max(1,Math.min(s,2));i.grid_span=d,i.width=Math.max(8,d*a-n),i.position={x:L(l/s),y:L(c/o)}}const e=[...this._config.cards,i];this._selCard=e.length-1,this._selField=-1,this._emit({...this._config,cards:e})}_removeCard(i){if(!this._config)return;const t=this._config.cards.filter((e,s)=>s!==i);this._selCard=Math.min(this._selCard,Math.max(0,t.length-1)),this._selField=-1,this._emit({...this._config,cards:t})}_copyFields(i){const t=this._config?.cards[i];t&&(this._copiedFields=t.fields.map(e=>({...e})),this._copySourceIdx=i)}_pasteFields(i){if(!this._copiedFields||!this._config)return;const t=this._copiedFields.map(s=>({...s,id:"f-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)})),e=this._config.cards.map((s,o)=>o===i?{...s,fields:t}:s);this._emit({...this._config,cards:e}),this._copiedFields=null,this._copySourceIdx=-1}_copyField(i,t,e=!1){const o=(e?this._extCards():this._config?.cards??[])[i]?.fields[t];o&&(this._copiedField={...o},this._copiedFieldSrc={isExt:e,ci:i,fi:t})}_pasteField(i,t=!1){if(!this._copiedField||!this._config)return;const e={...this._copiedField,id:"f-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)};if(t){const s=this._extCards()[i];if(!s)return;this._selExtField=s.fields.length,this._updateExtCard(i,{fields:[...s.fields,e]})}else{const s=this._config.cards[i];if(!s)return;const o=[...s.fields,e],a=this._config.cards.map((n,l)=>l===i?{...n,fields:o}:n);this._selField=o.length-1,this._emit({...this._config,cards:a})}}_addField(i){if(!this._config)return;const t=this._config.cards[i];if(!t)return;const e={id:"f-"+Date.now().toString(36),type:"value",column:1},s=[...t.fields,e];this._selField=s.length-1,this._updateCard(i,{fields:s})}_removeField(i,t){if(!this._config)return;const e=this._config.cards[i];if(!e)return;const s=e.fields.filter((o,a)=>a!==t);this._selField>=s.length&&(this._selField=s.length-1),this._updateCard(i,{fields:s})}_extCards(){return this._config?.extended_cards??[]}_updateExtDefaults(i){this._config&&this._emit({...this._config,extended_card_defaults:{...this._config.extended_card_defaults,...i}})}_addExtCard(){if(!this._config)return;const i={id:"ext-"+Date.now().toString(36),name:"Popover Card",columns:2,fields:[]},t=[...this._extCards(),i];this._selExtCard=t.length-1,this._selExtField=-1,this._emit({...this._config,extended_cards:t})}_removeExtCard(i){if(!this._config)return;const t=this._extCards().filter((e,s)=>s!==i);this._selExtCard=Math.min(this._selExtCard,Math.max(0,t.length-1)),this._selExtField=-1,this._emit({...this._config,extended_cards:t})}_updateExtCard(i,t){if(!this._config)return;const e=this._extCards().map((s,o)=>o===i?{...s,...t}:s);this._emit({...this._config,extended_cards:e})}_updateExtCardBox(i,t){const e=this._extCards()[i];e&&this._updateExtCard(i,{box:{...e.box,...t}})}_addExtField(i){if(!this._config)return;const t=this._extCards()[i];if(!t)return;const e={id:"f-"+Date.now().toString(36),type:"value",column:1},s=[...t.fields,e];this._selExtField=s.length-1,this._updateExtCard(i,{fields:s})}_removeExtField(i,t){const e=this._extCards()[i];if(!e)return;const s=e.fields.filter((o,a)=>a!==t);this._selExtField>=s.length&&(this._selExtField=s.length-1),this._updateExtCard(i,{fields:s})}_moveCard(i,t,e){if(!this._config)return;const s=[...this._config.cards],[o]=s.splice(i,1),a=i<t?e?t-1:t:e?t:t+1;s.splice(a,0,o),this._selCard=a,this._emit({...this._config,cards:s})}_moveField(i,t,e,s){if(!this._config)return;const o=this._config.cards[i];if(!o)return;const a=[...o.fields],[n]=a.splice(t,1),l=t<e?s?e-1:e:s?e:e+1;a.splice(l,0,n),this._selField=l,this._updateCard(i,{fields:a})}_moveExtField(i,t,e,s){const o=this._extCards()[i];if(!o)return;const a=[...o.fields],[n]=a.splice(t,1),l=t<e?s?e-1:e:s?e:e+1;a.splice(l,0,n),this._selExtField=l,this._updateExtCard(i,{fields:a})}_onDragStart(i,t){this._dragSrc=t,i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",t)}_onDragOver(i){i.preventDefault(),i.dataTransfer.dropEffect="move";const t=i.currentTarget;t.classList.add("ec-drag-over");const e=t.getBoundingClientRect();t.dataset.dropPos=i.clientY<e.top+e.height/2?"before":"after"}_onDragLeave(i){i.currentTarget.classList.remove("ec-drag-over")}_onDragEnd(i){i.currentTarget.classList.remove("ec-dragging"),this.renderRoot.querySelectorAll(".ec-drag-over").forEach(t=>t.classList.remove("ec-drag-over")),this._dragSrc=null}_onDrop(i,t){i.preventDefault();const e=i.currentTarget;e.classList.remove("ec-drag-over");const s=i.dataTransfer?.getData("text/plain")??this._dragSrc;if(this._dragSrc=null,!s||s===t)return;const o=i.clientY<e.getBoundingClientRect().top+e.getBoundingClientRect().height/2,[a,...n]=s.split(":"),[l,...c]=t.split(":");if(a===l){if(a==="card")this._moveCard(Number(n[0]),Number(c[0]),o);else if(a==="field"){const[d,p]=n.map(Number),[h,u]=c.map(Number);if(d!==h)return;this._moveField(d,p,u,o)}else if(a==="extfield"){const[d,p]=n.map(Number),[h,u]=c.map(Number);if(d!==h)return;this._moveExtField(d,p,u,o)}}}_updateExtField(i,t,e){const s=this._extCards()[i];if(!s)return;const o=s.fields.map((a,n)=>n===t?{...a,...e}:a);this._updateExtCard(i,{fields:o})}_alignCards(i){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards),e=this._config.cards,s=t.map(h=>({i:h,pos:{...e[h].position}})),o=s.map(h=>h.pos.x),a=s.map(h=>h.pos.y),n=Math.min(...o),l=Math.max(...o),c=Math.min(...a),d=Math.max(...a),p=e.map((h,u)=>{if(!this._selCards.has(u))return h;let{x:m,y:b}=h.position;return i==="left"&&(m=G(n)),i==="right"&&(m=G(l)),i==="centerH"&&(m=G((n+l)/2)),i==="top"&&(b=G(c)),i==="bottom"&&(b=G(d)),i==="middleV"&&(b=G((c+d)/2)),{...h,position:{x:m,y:b}}});this._emit({...this._config,cards:p})}_distribute(i){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((c,d)=>this._config.cards[c].position[i]-this._config.cards[d].position[i]),e=t.length,s=this._config.cards,o=s[t[0]].position[i],a=s[t[e-1]].position[i],n=e>1?(a-o)/(e-1):0,l=s.map((c,d)=>{const p=t.indexOf(d);if(p<0)return c;const h=G(o+n*p);return{...c,position:{...c.position,[i]:h}}});this._emit({...this._config,cards:l})}_distributeCanvas(i){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((a,n)=>this._config.cards[a].position[i]-this._config.cards[n].position[i]),e=t.length,o=this._config.cards.map((a,n)=>{const l=t.indexOf(n);if(l<0)return a;const c=L((l+1)/(e+1));return{...a,position:{...a.position,[i]:c}}});this._emit({...this._config,cards:o})}_alignGroupToCanvas(i){if(!this._config||this._selCards.size<1)return;const t=.5,e=Array.from(this._selCards),s=this._config.cards,o=e.map(c=>s[c].position[i]),a=(Math.min(...o)+Math.max(...o))/2,n=G(t-a),l=s.map((c,d)=>this._selCards.has(d)?{...c,position:{...c.position,[i]:G(c.position[i]+n)}}:c);this._emit({...this._config,cards:l})}_groupCards(){if(!this._config||this._selCards.size+this._selEmbCards.size<2)return;const i="g-"+Date.now().toString(36),t=this._config.cards.map((s,o)=>this._selCards.has(o)?{...s,group:i}:s),e=this._embCards().map((s,o)=>this._selEmbCards.has(o)?{...s,group:i}:s);this._emit({...this._config,cards:t,embedded_cards:e})}_ungroupCards(){if(!this._config)return;const i=this._config.cards.map((e,s)=>{if(!this._selCards.has(s))return e;const{group:o,...a}=e;return a}),t=this._embCards().map((e,s)=>{if(!this._selEmbCards.has(s))return e;const{group:o,...a}=e;return a});this._emit({...this._config,cards:i,embedded_cards:t})}_onCardDown(i,t){if(i.preventDefault(),this._bgSelected=!1,i.altKey){const a=this._config?.cards??[],n=this._previewBoxes,l=this.renderRoot.querySelector(".ec-canvas-area");if(l&&Object.keys(n).length>0){const c=l.getBoundingClientRect(),d=(i.clientX-c.left)/c.width,p=(i.clientY-c.top)/c.height,h=a.map((u,m)=>({idx:m,box:n[u.id]})).filter(u=>!!u.box&&d>=u.box.x&&d<=u.box.x+u.box.w&&p>=u.box.y&&p<=u.box.y+u.box.h).map(u=>u.idx).sort((u,m)=>u-m);if(h.length>0){const u=h.indexOf(this._selCard),m=u>=0?h[(u+1)%h.length]:h[0];this._selCard=m,this._selField=-1;const b=a[m]?.group;this._selCards=new Set(b?a.map((y,x)=>({c:y,idx:x})).filter(({c:y})=>y.group===b).map(({idx:y})=>y):[m])}}return}if(this._selCard=t,this._selField=-1,i.shiftKey||i.ctrlKey||i.metaKey){const a=new Set(this._selCards);a.has(t)?a.delete(t):a.add(t),this._selCards=a;return}const e=this._config?.cards??[],s=e[t]?.group,o=s?e.map((a,n)=>({c:a,idx:n})).filter(({c:a})=>a.group===s).map(({idx:a})=>a):[t];if(this._selCards=new Set(o),this._dragCard=t,i.target.setPointerCapture(i.pointerId),this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=i.clientX,this._startY=i.clientY,this._dragMembers=o.map(a=>({idx:a,start:{...e[a]?.position??{x:0,y:0}}})),s){const a=this._embCards(),n=a.map((l,c)=>({ec:l,idx:c})).filter(({ec:l})=>l.group===s).map(({idx:l})=>l);this._selEmbCards=new Set(n),this._embDragMembers=n.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selEmbCards=new Set,this._embDragMembers=[]}_onCardMove(i){if(this._dragCard<0||!this._hostRect||!this._config)return;const t=(i.clientX-this._startX)/this._hostRect.width,e=(i.clientY-this._startY)/this._hostRect.height,s=this._config.cards.map((a,n)=>{const l=this._dragMembers.find(c=>c.idx===n);return l?{...a,position:{x:L(l.start.x+t),y:L(l.start.y+e)}}:a}),o=this._embDragMembers.length>0?this._embCards().map((a,n)=>{const l=this._embDragMembers.find(c=>c.idx===n);return l?{...a,position:{x:L(l.start.x+t),y:L(l.start.y+e)}}:a}):this._embCards();this._emit({...this._config,cards:s,embedded_cards:o})}_onCardUp(i){const t=this._gridGeom();if(t&&this._config&&(this._dragMembers.length>0||this._embDragMembers.length>0)){const{cols:e,rows:s}=t,o=this._config.cards,a=this._embCards(),n=[];for(const l of this._dragMembers){const c=o[l.idx];c&&n.push({kind:"card",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}for(const l of this._embDragMembers){const c=a[l.idx];c&&n.push({kind:"emb",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}if(n.length===1){const l=n[0],c=l.box?l.box.x+l.box.w/2:l.pos.x,d=l.box?l.box.y+l.box.h/2:l.pos.y,p=Math.min(e,Math.max(0,Math.round(c*e))),h=Math.min(s,Math.max(0,Math.round(d*s))),u={x:L(p/e),y:L(h/s)};if(l.kind==="card"){const m=o.map((b,y)=>y===l.idx?{...b,anchor:"center",position:u}:b);this._emit({...this._config,cards:m})}else{const m=a.map((b,y)=>y===l.idx?{...b,anchor:"center",position:u}:b);this._emit({...this._config,embedded_cards:m})}}else if(n.length>=2){let l=1/0,c=1/0,d=-1/0,p=-1/0;for(const f of n)f.box?(l=Math.min(l,f.box.x),c=Math.min(c,f.box.y),d=Math.max(d,f.box.x+f.box.w),p=Math.max(p,f.box.y+f.box.h)):(l=Math.min(l,f.pos.x),c=Math.min(c,f.pos.y),d=Math.max(d,f.pos.x),p=Math.max(p,f.pos.y));const h={x:(l+d)/2,y:(c+p)/2},u=Math.min(e,Math.max(0,Math.round(h.x*e))),m=Math.min(s,Math.max(0,Math.round(h.y*s))),b={x:u/e-h.x,y:m/s-h.y},y=o.map((f,k)=>this._dragMembers.some(v=>v.idx===k)?{...f,position:{x:L(f.position.x+b.x),y:L(f.position.y+b.y)}}:f),x=a.map((f,k)=>this._embDragMembers.some(v=>v.idx===k)?{...f,position:{x:L(f.position.x+b.x),y:L(f.position.y+b.y)}}:f);this._emit({...this._config,cards:y,embedded_cards:x})}}i.target.releasePointerCapture(i.pointerId),this._dragCard=-1}_onPointDown(i,t){if(i.preventDefault(),i.stopPropagation(),this._selPoint=t,!this._config)return;const e=this._flows()[this._selFlow];if(!e)return;const s=e.points[t];if(s){if(i.shiftKey){this._removeFlowPoint(this._selFlow,t),this._selPoint=-1;return}s.card==null&&(this._dragPoint=t,i.target.setPointerCapture(i.pointerId),this._pRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._pStartX=i.clientX,this._pStartY=i.clientY,this._pStartPos={x:s.x??0,y:s.y??0},this._snapAxis=null)}}_onPointMove(i){if(this._dragPoint<0||!this._pRect||!this._config)return;let t=L(this._pStartPos.x+(i.clientX-this._pStartX)/this._pRect.width),e=L(this._pStartPos.y+(i.clientY-this._pStartY)/this._pRect.height);const s=t,o=e;if(i.ctrlKey){const a=this._flows()[this._selFlow];if(a&&this._pRect){const n=this._config.cards,l=this._previewBoxes,c=this._dragPoint,d=c>0?a.points[c-1]:null,p=c<a.points.length-1?a.points[c+1]:null,h=d?At(d,n,l):null,u=p?At(p,n,l):null,m=this._pRect.width,b=this._pRect.height;if(h&&u){const y=Math.hypot((t-h.x)*m,(e-u.y)*b),x=Math.hypot((t-u.x)*m,(e-h.y)*b);y<=x?(t=h.x,e=u.y):(t=u.x,e=h.y)}else{const y=h??u;if(y){if(this._snapAxis===null){const x=i.clientX-this._pStartX,f=i.clientY-this._pStartY;Math.hypot(x,f)>4?this._snapAxis=Math.abs(x)>=Math.abs(f)?"y":"x":this._snapAxis=Math.abs(t-y.x)*m<Math.abs(e-y.y)*b?"x":"y"}this._snapAxis==="x"?t=y.x:e=y.y}}}}{let n=!1;t:for(const l of this._config.cards){const c=this._previewBoxes[l.id];if(c)for(const d of["top","right","bottom","left"]){let p,h;switch(d){case"top":p=c.x+c.w/2,h=c.y;break;case"right":p=c.x+c.w,h=c.y+c.h/2;break;case"bottom":p=c.x+c.w/2,h=c.y+c.h;break;case"left":p=c.x,h=c.y+c.h/2;break}if(Math.hypot((s-p)*this._pRect.width,(o-h)*this._pRect.height)<=24){t=p,e=h,this._snapAnchor={card:l.id,side:d},n=!0;break t}}}n||(this._snapAnchor=null)}this._updateFlowPoint(this._selFlow,this._dragPoint,{x:t,y:e})}_onPointUp(i){this._dragPoint>=0&&(i.target.releasePointerCapture(i.pointerId),this._snapAnchor&&this._updateFlowPoint(this._selFlow,this._dragPoint,{card:this._snapAnchor.card,side:this._snapAnchor.side,x:void 0,y:void 0})),this._dragPoint=-1,this._snapAnchor=null,this._snapAxis=null}_ptSegDist(i,t,e,s,o,a){const n=o-e,l=a-s,c=n*n+l*l,d=c===0?0:Math.max(0,Math.min(1,((i-e)*n+(t-s)*l)/c));return Math.hypot(i-e-d*n,t-s-d*l)}_onCanvasAreaClick(i){i.target.closest(".ec-bg-ov,.ec-bg-resize")||(this._bgSelected=!1);const t=this._flows();if(t.length===0||i.target.closest(".ec-handle,.ec-card-ov,.ec-emb-handle,.ec-emb-ov,.ec-zone-handle,.ec-flow-node,.ec-snap"))return;const s=i.currentTarget.getBoundingClientRect(),o=i.clientX-s.left,a=i.clientY-s.top,n=this._config?.cards??[],l=10;let c=-1,d=1/0;for(let p=0;p<t.length;p++){const h=t[p].points.map(u=>{const m=At(u,n,this._previewBoxes);return{x:m.x*s.width,y:m.y*s.height}});for(let u=0;u<h.length-1;u++){const m=this._ptSegDist(o,a,h[u].x,h[u].y,h[u+1].x,h[u+1].y);m<d&&(d=m,c=p)}}c>=0&&d<=l&&(this._selFlow=c,this._selPoint=-1)}_syncPreviewDialog(){const i=this.renderRoot?.querySelector("dialog.ec-preview");if(!i)return;const t=i.matches(":modal");this._previewExpanded&&!t?(i.open&&i.close(),i.showModal()):!this._previewExpanded&&(t||!i.open)&&(i.open&&i.close(),i.show())}_sizeExpandedCanvas(){const i=this.renderRoot?.querySelector(".ec-canvas-area");if(!i)return;if(!this._previewExpanded){i.style.width&&i.style.removeProperty("width");return}const t=this.renderRoot?.querySelector(".ec-preview");if(!t)return;this._previewRO||(this._previewRO=new ResizeObserver(()=>this._sizeExpandedCanvas()),this._previewRO.observe(t),window.addEventListener("resize",this._onWindowResize));const{totalW:e,totalH:s}=rt(this._config);if(!e||!s)return;const o=this.renderRoot?.querySelector(".ec-expanded-bottom-bar"),a=t.clientWidth,n=window.innerHeight-(o?.offsetHeight??0);if(a<=0||n<=0)return;const l=`${Math.floor(Math.min(a,n*e/s))}px`;i.style.width!==l&&(i.style.width=l)}disconnectedCallback(){super.disconnectedCallback(),this._previewRO?.disconnect(),this._previewRO=void 0,window.removeEventListener("resize",this._onWindowResize)}updated(){const i=this.renderRoot?.querySelectorAll("mosaic-canvas");if(this._config&&i?.forEach(t=>t.setConfig(this._config)),this._syncPreviewDialog(),this._sizeExpandedCanvas(),this._previewExpanded&&(this._showAddFlowInput?this.renderRoot?.querySelector(".ec-flow-name-input")?.focus():this.renderRoot?.querySelector(".ec-preview")?.focus()),this._embEditorOpen&&this._embNativeEditor){const t=this.renderRoot.querySelector("#emb-native-slot");if(t&&!t.contains(this._embNativeEditor)){t.innerHTML="",t.appendChild(this._embNativeEditor);const e=this._embEditorConfig??this._embCards()[this._embEditorIdx]?.card_config;if(e){const s=this._embNativeEditor;try{s.setConfig?.(e)}catch{}s.value=e}this._embNativeEditor.hass=this.hass}}}_boxRows(i,t,e){return r`
      ${this._row("Background",this._colorPicker(`${i}-bg`,t.background,s=>e({background:s}),{onClear:()=>e({background:void 0,background_alpha:void 0})}))}

      ${this._row("Opacity",r`<div class="ec-opacity-row">
          <input type="range" min="0" max="1" step="0.01"
            .value=${String(t.background_alpha??g("box_background_alpha")??1)}
            @input=${s=>{const o=parseFloat(s.target.value);e({background_alpha:o})}}
          />
          <span class="ec-opacity-val">${Math.round((t.background_alpha??g("box_background_alpha")??1)*100)}%</span>
          <button class="ec-btn-clear" @click=${()=>e({background_alpha:void 0})} title="Clear">✕</button>
        </div>`)}

      ${this._row("Color",this._colorPicker(`${i}-col`,t.color,s=>e({color:s})))}

      ${this._row("Border",r`<input type="checkbox" .checked=${t.border??!1}
          @change=${s=>e({border:s.target.checked})}
        />`)}

      ${this._row("Border width (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.border_width!=null?String(t.border_width):""}
          placeholder="1"
          @change=${s=>{const o=s.target.value;e({border_width:o===""?void 0:Number(o)})}}
        />`)}

      ${this._row("Radius (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.radius!=null?String(t.radius):""}
          placeholder="0"
          @change=${s=>{const o=s.target.value;e({radius:o===""?void 0:Number(o)})}}
        />`)}

      ${this._row("Padding (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.padding!=null?String(t.padding):""}
          placeholder="0"
          @change=${s=>{const o=s.target.value;e({padding:o===""?void 0:Number(o)})}}
        />`)}

      ${this._row("Glow",r`<input type="checkbox" .checked=${t.glow??!1}
          @change=${s=>e({glow:s.target.checked})}
        />`)}

      ${this._row("Blur (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
          .value=${t.blur!=null?String(t.blur):""}
          placeholder="0"
          @change=${s=>{const o=s.target.value;e({blur:o===""?void 0:Number(o)})}}
        />`)}
    `}_textRows(i,t,e){return r`
      ${this._row("Font size (px)",r`<input class="ec-input ec-input-num" type="number" min="6"
          .value=${t.font_size!=null?String(t.font_size):""}
          placeholder="inherit"
          @change=${s=>{const o=s.target.value;e({font_size:o===""?void 0:Number(o)})}}
        />`)}

      ${this._row("Color",this._colorPicker(`${i}-col`,t.color,s=>e({color:s})))}

      ${this._row("Font weight",r`<select class="ec-select"
          .value=${t.font_weight!=null?String(t.font_weight):""}
          @change=${s=>{const o=s.target.value;e({font_weight:o===""?void 0:Number(o)})}}
        >
          <option value="" .selected=${t.font_weight==null}>(inherit)</option>
          <option value="400" .selected=${t.font_weight===400}>400 — Normal</option>
          <option value="600" .selected=${t.font_weight===600}>600 — Semi-bold</option>
          <option value="700" .selected=${t.font_weight===700}>700 — Bold</option>
        </select>`)}

      ${this._row("Font family",r`<input class="ec-input" type="text" .value=${t.font_family??""}
          placeholder="inherit"
          @change=${s=>{const o=s.target.value;e({font_family:o===""?void 0:o})}}
        />`)}

      ${this._row("Letter spacing (px)",r`<input class="ec-input ec-input-num" type="number"
          .value=${t.letter_spacing!=null?String(t.letter_spacing):""}
          placeholder="0"
          @change=${s=>{const o=s.target.value;e({letter_spacing:o===""?void 0:Number(o)})}}
        />`)}
    `}_renderAlignBar(){return r`
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
        ${Array.from(this._selCards).some(i=>this._config?.cards[i]?.group)||Array.from(this._selEmbCards).some(i=>this._embCards()[i]?.group)?r`<button class="ec-btn-align" @click=${()=>this._ungroupCards()} title="Remove group from selected cards">Ungroup</button>`:_}
      </div>
    `}_quickNum(i,t,e,s){return r`<label class="ec-quick-field">
      <span>${i}</span>
      <input class="ec-input ec-input-num" type="number"
        min=${s?.min??""} max=${s?.max??""}
        placeholder=${s?.placeholder??""}
        .value=${t!=null?String(t):""}
        @change=${o=>e(o.target.value)}
      />
    </label>`}_renderCardQuickPanel(i){const t=this._config?.cards[i];if(!t)return _;const e=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${e?this._quickNum("Span",t.grid_span??1,s=>{const o=Math.max(1,Math.min(e.cols,Number(s)||1)),a=Math.max(8,o*e.cellW-e.padding);this._updateCard(i,{grid_span:o,width:a})},{min:1,max:e.cols}):_}
        ${this._quickNum("Width",t.width,s=>this._updateCard(i,{width:s===""?void 0:Number(s)}),{placeholder:"auto"})}
        ${this._quickNum("Field gap",t.field_gap,s=>this._updateCard(i,{field_gap:s===""?void 0:Number(s)}),{placeholder:"default"})}
        ${this._quickNum("Col gap",t.column_gap,s=>this._updateCard(i,{column_gap:s===""?void 0:Number(s)}),{placeholder:"default"})}
      </div>
    `}_renderEmbQuickPanel(i){const t=this._embCards()[i];if(!t)return _;const e=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${e?this._quickNum("Span",t.grid_span??1,s=>{const o=Math.max(1,Math.min(e.cols,Number(s)||1)),a=Math.max(8,o*e.cellW-e.padding);this._updateEmbCard(i,{grid_span:o,width:a})},{min:1,max:e.cols}):_}
        ${this._quickNum("Width",t.width,s=>this._updateEmbCard(i,{width:Number(s)}))}
        ${this._quickNum("Height",t.height,s=>this._updateEmbCard(i,{height:s===""?void 0:Number(s)}),{placeholder:"auto"})}
      </div>
    `}render(){if(!this._config)return _;if(this._wizStep>=0)return this._renderWizard();const{totalW:i,totalH:t}=rt(this._config),e=this._config.cards??[];return r`
      <div class="ec-version-bar">
        <span class="ec-version">Energy Canvas v${Be} · build ${Ai}</span>
        <button class="ec-expand-btn"
          @click=${()=>{this._previewExpanded?this._collapseExpanded():this._previewExpanded=!0}}
          title=${this._previewExpanded?"Exit fullscreen":"Fullscreen mosaic editor"}
        >${this._previewExpanded?"✕ Collapse":"⛶ Expand"}</button>
      </div>

      <!-- ── Live preview ── -->
      <dialog class="ec-preview${this._previewExpanded?" ec-preview--expanded":""}${this._previewExpanded&&this._barAtTop?" ec-bar-top":""}"
        @pointermove=${s=>{this._onCardMove(s),this._onPointMove(s),this._onZoneMove(s),this._onZoneResizeMove(s),this._onEmbCardMove(s),this._onBgMove(s)}}
        @pointerup=${s=>{this._onCardUp(s),this._onPointUp(s),this._onZoneUp(s),this._onZoneResizeUp(s),this._onEmbCardUp(s),this._onBgUp(s)}}
        @cancel=${s=>{s.preventDefault(),this._collapseExpanded()}}
        tabindex="-1"
      >
        <div class="ec-canvas-area"
          @click=${s=>this._onCanvasAreaClick(s)}
        >
          <mosaic-canvas
            class="ec-preview-card"
            .hass=${this.hass}
            ?editor=${!0}
            @ec-boxes-changed=${s=>{this._previewBoxes=s.detail.boxes}}
          ></mosaic-canvas>
          ${this._renderGridOverlay()}
          <div class="ec-handles">
            ${this._renderBgOverlay()}
            ${e.map((s,o)=>{const a=`${o===this._selCard?" selected":""}${this._selCards.has(o)&&o!==this._selCard?" multi":""}${s.group?" grouped":""}`,n=this._previewBoxes[s.id];return n?r`
              <div
                class="ec-card-ov${a}"
                style="left:${n.x*100}%;top:${n.y*100}%;width:${n.w*100}%;height:${n.h*100}%;"
                @pointerdown=${l=>this._onCardDown(l,o)}
                title=${s.name??`Card ${o+1}`}
              ></div>`:r`
              <div
                class="ec-handle${a}"
                style="left:${s.position.x*100}%;top:${s.position.y*100}%;"
                @pointerdown=${l=>this._onCardDown(l,o)}
                title=${s.name??`Card ${o+1}`}
              ></div>`})}
            ${this._zones().map((s,o)=>{const a=this._zoneBox(s);return r`
              <div
                class="ec-zone-handle${o===this._selZone?" selected":""}"
                style="left:${a.x/i*100}%;top:${a.y/t*100}%;width:${a.w/i*100}%;height:${a.h/t*100}%;"
                @pointerdown=${n=>this._onZoneDown(n,o)}
                title=${s.name??`Zone ${o+1}`}
              >
                <span class="ec-zone-label">${s.name??`Zone ${o+1}`}</span>
                ${o===this._selZone?["tl","tr","bl","br"].map(n=>r`
                  <div
                    class="ec-zone-resize ec-zone-resize-${n}"
                    @pointerdown=${l=>this._onZoneResizeDown(l,o,n)}
                  ></div>`):_}
              </div>`})}
            ${this._embCards().map((s,o)=>{const a=`${o===this._selEmbCard?" selected":""}${this._selEmbCards.has(o)&&o!==this._selEmbCard?" multi":""}${s.group?" grouped":""}`,n=this._previewBoxes[s.id];return n?r`
              <div
                class="ec-emb-ov${a}"
                style="left:${n.x*100}%;top:${n.y*100}%;width:${n.w*100}%;height:${n.h*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,o)}
                title=${s.name??`Embedded ${o+1}`}
              ></div>`:r`
              <div
                class="ec-emb-handle${a}"
                style="left:${s.position.x*100}%;top:${s.position.y*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,o)}
                title=${s.name??`Embedded ${o+1}`}
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
              ${this._flows().map((s,o)=>{const a=s.points.map(l=>At(l,e,this._previewBoxes)).map(l=>`${l.x},${l.y}`).join(" "),n=o===this._selFlow;return T`<polyline
                  points="${a}"
                  fill="none"
                  stroke="${n?"rgba(0,212,255,0.9)":"rgba(0,180,255,0.55)"}"
                  stroke-width="${n?3:2.5}"
                  stroke-dasharray="6 4"
                  vector-effect="non-scaling-stroke"
                  filter="url(#ec-flow-glow)"
                ></polyline>`})}
            </svg>
          `:_}
          ${this._selFlow>=0?(()=>{const s=this._flows()[this._selFlow];if(!s)return _;const o=["top","right","bottom","left"];return r`
              <div class="ec-flow-layer"
                @click=${a=>this._onFlowLayerClick(a)}
              >
                ${this._selPoint>=0?e.map(a=>o.map(n=>{const l=this._previewBoxes[a.id];if(!l)return _;let c,d;switch(n){case"top":c=l.x+l.w/2,d=l.y;break;case"right":c=l.x+l.w,d=l.y+l.h/2;break;case"bottom":c=l.x+l.w/2,d=l.y+l.h;break;case"left":c=l.x,d=l.y+l.h/2;break;default:c=l.x+l.w/2,d=l.y+l.h/2;break}return r`<div
                    class="ec-snap"
                    style="left:${c*100}%;top:${d*100}%;"
                    @click=${p=>{p.stopPropagation(),this._updateFlowPoint(this._selFlow,this._selPoint,{card:a.id,side:n,x:void 0,y:void 0})}}
                  ></div>`})):_}
                ${s.points.map((a,n)=>{const l=At(a,e,this._previewBoxes);return r`<div
                    class="ec-flow-node${n===this._selPoint?" selected":""}${a.card!=null?" anchored":" free"}"
                    style="left:${l.x*100}%;top:${l.y*100}%;"
                    @pointerdown=${c=>this._onPointDown(c,n)}
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
                  @input=${s=>{this._newFlowName=s.target.value}}
                  @keydown=${s=>{s.key==="Enter"&&this._addFlowFromExpanded(),s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),this._showAddFlowInput=!1,this._newFlowName="")}}
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
              <button class="ec-bar-flip" title=${this._barAtTop?"Move bar to bottom":"Move bar to top"}
                @click=${()=>{this._barAtTop=!this._barAtTop,localStorage.setItem("mc-expanded-bar-top",this._barAtTop?"1":"0")}}
              >${this._barAtTop?"▼":"▲"}</button>
              <button class="ec-side-close" title="Collapse (Esc)" @click=${()=>this._collapseExpanded()}>✕</button>
            `:_}
          </div>
        ${this._renderGGModal()}
        ${this._renderEmbPickerModal()}
        ${this._renderEmbEditorModal()}
        ${this._renderFlowCompleteModal()}
      </dialog>

      ${this._previewExpanded?_:this._renderControls()}
    `}_renderControls(){const i=this._config?.cards??[],t=i[this._selCard],e=t?.fields[this._selField];return r`
      <div class="ec-controls">

        <!-- Align & distribute is shown in the shared bottom bar (both modes),
             so it is intentionally not duplicated here (issue #11). -->

        <!-- Cards (collapsible) -->
        <details class="ec-details">
          <summary>Mosaic Cards</summary>
          <div class="ec-details-body">
            <div class="ec-section-header">
              <span></span>
              <button class="ec-btn-add" @click=${this._addCard}>+ Mosaic Card</button>
            </div>
            ${i.length===0?r`<p class="ec-empty">No mosaic cards yet — click "+ Mosaic Card" to add one.</p>`:i.map((s,o)=>r`
                    <div
                      class="ec-list-row${o===this._selCard?" selected":""}${this._selCards.has(o)?" multi":""}${this._dragSrc===`card:${o}`?" ec-dragging":""}"
                      draggable="true"
                      @dragstart=${a=>this._onDragStart(a,`card:${o}`)}
                      @dragover=${a=>this._onDragOver(a)}
                      @dragleave=${a=>this._onDragLeave(a)}
                      @drop=${a=>this._onDrop(a,`card:${o}`)}
                      @dragend=${a=>this._onDragEnd(a)}
                      @click=${a=>{if(a.ctrlKey||a.metaKey){const n=new Set(this._selCards);n.has(o)?n.delete(o):n.add(o),this._selCards=n,this._selCard=o}else this._selCard=o,this._selField=-1,this._selCards=new Set([o])}}
                    >
                      <span class="ec-drag-handle" title="Drag to reorder"></span>
                      <span class="ec-list-label">${s.name??`Card ${o+1}`}</span>
                      ${this._copySourceIdx===o?r`<span class="ec-copy-badge">Copied</span>`:r`<button
                            class="ec-btn-copy"
                            @click=${a=>{a.stopPropagation(),this._copyFields(o)}}
                            title="Copy fields from this card"
                          >⎘</button>`}
                      ${this._copiedFields&&o!==this._copySourceIdx?r`<button
                            class="ec-btn-paste"
                            @click=${a=>{a.stopPropagation(),this._pasteFields(o)}}
                            title="Paste fields onto this card (replaces existing fields)"
                          >⎗</button>`:_}
                      <button
                        class="ec-btn-remove"
                        @click=${a=>{a.stopPropagation(),this._removeCard(o)}}
                        title="Remove card"
                      >✕</button>
                    </div>
                  `)}

            ${t?this._renderCardPanel(this._selCard,t):_}
            ${t?this._renderFieldList(this._selCard,t):_}
            ${t&&e!==void 0&&this._selField>=0?this._renderFieldPanel(this._selCard,this._selField,e):_}
          </div>
        </details>

        <!-- Extended Cards panel -->
        ${this._renderExtendedCardsPanel()}

        <!-- Flows panel -->
        ${this._renderFlowsPanel()}

        <!-- Virtuals panel -->
        ${this._renderVirtualsPanel()}

        <!-- Zones panel -->
        ${this._renderZonesPanel()}

        <!-- Embedded Cards panel -->
        ${this._renderEmbeddedCardsPanel()}

        <!-- Canvas panel (Background controls merged in at the bottom) -->
        ${this._renderCanvasPanel()}

        <!-- Global defaults panel -->
        ${this._renderDefaultsPanel()}

        <!-- Templates panel -->
        ${this._renderTemplatesPanel()}
      </div>
    `}_renderCardPanel(i,t){return r`
      <div class="ec-section">
        <div class="ec-section-header">
          <span class="ec-section-title">Card: ${t.name??`Card ${i+1}`}</span>
        </div>

        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${e=>this._updateCard(i,{name:e.target.value})}
          />`)}

        ${this._gridGeom()?_:this._row("Anchor",r`<select class="ec-select"
            .value=${t.anchor??g("anchor")??"top-left"}
            @change=${e=>this._updateCard(i,{anchor:e.target.value})}
          >
            ${Se.map(e=>r`<option value=${e} .selected=${(t.anchor??g("anchor")??"top-left")===e}>${e}</option>`)}
          </select>`)}

        ${this._row("Align",r`<select class="ec-select"
            .value=${t.align??g("align")??"left"}
            @change=${e=>this._updateCard(i,{align:e.target.value})}
          >
            ${oe.map(e=>r`<option value=${e} .selected=${(t.align??g("align")??"left")===e}>${e}</option>`)}
          </select>`)}

        ${this._row("Columns",r`<select class="ec-select"
            .value=${String(t.columns??g("card_columns")??1)}
            @change=${e=>{const s=Number(e.target.value);this._updateCard(i,{columns:s===1?void 0:s})}}
          >
            <option value="1" .selected=${(t.columns??g("card_columns")??1)===1}>1</option>
            <option value="2" .selected=${(t.columns??g("card_columns")??1)===2}>2</option>
            <option value="3" .selected=${(t.columns??g("card_columns")??1)===3}>3</option>
            <option value="4" .selected=${(t.columns??g("card_columns")??1)===4}>4</option>
            <option value="5" .selected=${(t.columns??g("card_columns")??1)===5}>5</option>
            <option value="6" .selected=${(t.columns??g("card_columns")??1)===6}>6</option>
            <option value="7" .selected=${(t.columns??g("card_columns")??1)===7}>7</option>
            <option value="8" .selected=${(t.columns??g("card_columns")??1)===8}>8</option>
          </select>`)}

        ${this._gridGeom()?this._row("Columns (span)",r`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(t.grid_span??1)}
            @change=${e=>{const s=this._gridGeom();if(!s)return;const o=Math.max(1,Math.min(s.cols,Number(e.target.value)||1)),a=Math.max(8,o*s.cellW-s.padding);this._updateCard(i,{grid_span:o,width:a})}}
          />`):_}

        ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="20"
            .value=${t.width!=null?String(t.width):""}
            placeholder="auto"
            @change=${e=>{const s=e.target.value;this._updateCard(i,{width:s===""?void 0:Number(s)})}}
          />`)}

        ${this._row("Field gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.field_gap!=null?String(t.field_gap):""}
            placeholder="default"
            @change=${e=>{const s=e.target.value;this._updateCard(i,{field_gap:s===""?void 0:Number(s)})}}
          />`)}

        ${this._row("Column gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.column_gap!=null?String(t.column_gap):""}
            placeholder="default"
            @change=${e=>{const s=e.target.value;this._updateCard(i,{column_gap:s===""?void 0:Number(s)})}}
          />`)}

        <!-- Card box -->
        ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent??!1}
            @change=${e=>this._updateCard(i,{transparent:e.target.checked||void 0})}
          />`)}

        <!-- Visibility condition -->
        <div class="ec-subsection-title">Card Visibility</div>
        ${this._row("Entity",r`<ha-entity-picker
            .hass=${this.hass}
            .value=${t.visible_when?.entity??""}
            allow-custom-entity
            @value-changed=${e=>{const s=e.detail.value;s?this._updateCard(i,{visible_when:{entity:s,operator:t.visible_when?.operator??"==",value:t.visible_when?.value??"on"}}):this._updateCard(i,{visible_when:void 0})}}
          ></ha-entity-picker>`)}
        ${t.visible_when?r`
          ${this._row("Operator",r`<select class="ec-select"
              .value=${t.visible_when.operator}
              @change=${e=>this._updateCard(i,{visible_when:{...t.visible_when,operator:e.target.value}})}
            >
              ${[["==","Equals"],["!=","Not Equal"],[">","Greater Than"],["<","Less Than"],[">=","Greater Than - Equal To"],["<=","Less Than - Equal To"]].map(([e,s])=>r`<option value=${e} .selected=${t.visible_when.operator===e}>${s}</option>`)}
            </select>`)}
          ${this._row("Value",r`<input class="ec-input" type="text" .value=${t.visible_when.value}
              placeholder="on / off / 100 / home …"
              @change=${e=>this._updateCard(i,{visible_when:{...t.visible_when,value:e.target.value}})}
            />`)}
        `:_}

        ${t.transparent?_:r`
        ${this._row("Use global card style",r`<input type="checkbox" .checked=${t.box===void 0}
            @change=${e=>{e.target.checked?this._updateCard(i,{box:void 0}):this._updateCard(i,{box:{}})}}
          />`)}
        ${t.box!==void 0?r`
          <div class="ec-subsection-title">Box style</div>
          ${this._boxRows(`c${i}`,t.box,e=>this._updateCardBox(i,e))}
        `:_}
        `}

        ${this._row("Use global value style",r`<input type="checkbox" .checked=${t.value_style===void 0}
            @change=${e=>{e.target.checked?this._updateCard(i,{value_style:void 0}):this._updateCard(i,{value_style:{}})}}
          />`)}
        ${t.value_style!==void 0?r`
          <div class="ec-subsection-title">Value text style</div>
          ${this._textRows(`c${i}-vs`,t.value_style,e=>this._updateCard(i,{value_style:{...t.value_style,...e}}))}
        `:_}

        ${this._row("Use global label style",r`<input type="checkbox" .checked=${t.label_style===void 0}
            @change=${e=>{e.target.checked?this._updateCard(i,{label_style:void 0}):this._updateCard(i,{label_style:{}})}}
          />`)}
        ${t.label_style!==void 0?r`
          <div class="ec-subsection-title">Label text style</div>
          ${this._textRows(`c${i}-ls`,t.label_style,e=>this._updateCard(i,{label_style:{...t.label_style,...e}}))}
        `:_}


        <!-- Actions -->
        <div class="ec-subsection-title">Actions</div>
        ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},e=>this._updateCard(i,e))}


        <!-- Card background image -->
        <details class="ec-details" style="margin-top:8px">
          <summary>Background image</summary>
          <div class="ec-details-body">
            ${this._row("URL",r`<input class="ec-input" type="text"
                .value=${t.bg?.url??""}
                placeholder="/local/image.png or https://…"
                @change=${e=>{const s=e.target.value.trim();this._updateCard(i,{bg:s?{...t.bg,url:s}:void 0})}}
              />`)}
            ${t.bg?.url?r`
              ${this._row("Fit",r`<select class="ec-select"
                  .value=${t.bg.fit??"cover"}
                  @change=${e=>this._updateCard(i,{bg:{...t.bg,fit:e.target.value}})}
                >
                  <option value="cover"   .selected=${(t.bg.fit??"cover")==="cover"}>cover (fill &amp; crop)</option>
                  <option value="contain" .selected=${t.bg.fit==="contain"}>contain (letterbox)</option>
                  <option value="fill"    .selected=${t.bg.fit==="fill"}>fill (stretch)</option>
                  <option value="none"    .selected=${t.bg.fit==="none"}>none (natural size)</option>
                </select>`)}
              ${this._row("Opacity",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${String(t.bg.opacity??1)}
                  @change=${e=>{const s=parseFloat(e.target.value);this._updateCard(i,{bg:{...t.bg,opacity:isNaN(s)?void 0:Math.min(1,Math.max(0,s))}})}}
                />`)}
              ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.bg.width!=null?String(t.bg.width):""}
                  placeholder="fill card"
                  @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,width:s===""?void 0:Number(s)}})}}
                />`)}
              ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.bg.height!=null?String(t.bg.height):""}
                  placeholder="fill card"
                  @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,height:s===""?void 0:Number(s)}})}}
                />`)}
              <div class="ec-subsection-title">Padding (px)</div>
              ${this._row("Top / Bottom",r`<div style="display:flex;gap:4px;">
                  <input class="ec-input ec-input-num" type="number" min="0" placeholder="Top"
                    .value=${t.bg.padding_top!=null?String(t.bg.padding_top):""}
                    @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,padding_top:s===""?void 0:Number(s)}})}}
                  />
                  <input class="ec-input ec-input-num" type="number" min="0" placeholder="Bottom"
                    .value=${t.bg.padding_bottom!=null?String(t.bg.padding_bottom):""}
                    @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,padding_bottom:s===""?void 0:Number(s)}})}}
                  />
                </div>`)}
              ${this._row("Left / Right",r`<div style="display:flex;gap:4px;">
                  <input class="ec-input ec-input-num" type="number" min="0" placeholder="Left"
                    .value=${t.bg.padding_left!=null?String(t.bg.padding_left):""}
                    @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,padding_left:s===""?void 0:Number(s)}})}}
                  />
                  <input class="ec-input ec-input-num" type="number" min="0" placeholder="Right"
                    .value=${t.bg.padding_right!=null?String(t.bg.padding_right):""}
                    @change=${e=>{const s=e.target.value;this._updateCard(i,{bg:{...t.bg,padding_right:s===""?void 0:Number(s)}})}}
                  />
                </div>`)}
            `:_}
          </div>
        </details>
      </div>
    `}_renderFieldList(i,t){const e=t.fields;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(i)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addField(i)}>+ Field</button>
        </div>
        ${e.length===0?r`<p class="ec-empty">No fields — click "+ Field".</p>`:e.map((s,o)=>r`
                <div
                  class="ec-list-row${o===this._selField?" selected":""}${this._dragSrc===`field:${i}:${o}`?" ec-dragging":""}"
                  draggable="true"
                  @dragstart=${a=>this._onDragStart(a,`field:${i}:${o}`)}
                  @dragover=${a=>this._onDragOver(a)}
                  @dragleave=${a=>this._onDragLeave(a)}
                  @drop=${a=>this._onDrop(a,`field:${i}:${o}`)}
                  @dragend=${a=>this._onDragEnd(a)}
                  @click=${()=>{this._selField=o}}
                >
                  <span class="ec-drag-handle" title="Drag to reorder"></span>
                  <span class="ec-list-label">${s.column!=null?r`<span class="ec-col-badge">C${s.column}</span> `:_}[${s.type}] ${s.display_name??s.text??(s.entity?.startsWith("virtual:")?this._virtuals().find(a=>`virtual:${a.id}`===s.entity)?.name??s.entity:this.hass?.states[s.entity??""]?.attributes?.friendly_name??s.entity)??s.icon??""}${s.type==="graph"&&s.graph_type?r` <span class="ec-type-badge">${s.graph_type}</span>`:s.type==="svg"&&(s.shape||s.svg)?r` <span class="ec-type-badge">${s.shape??s.svg.split("/").pop()?.replace(/\.svg$/i,"")??""}</span>`:_}</span>
                  ${this._copiedFieldSrc?.isExt===!1&&this._copiedFieldSrc.ci===i&&this._copiedFieldSrc.fi===o?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                        @click=${a=>{a.stopPropagation(),this._copyField(i,o,!1)}}
                        title="Copy this field">⎘</button>`}
                  <button class="ec-btn-remove"
                    @click=${a=>{a.stopPropagation(),this._removeField(i,o)}}
                    title="Remove">✕</button>
                </div>
              `)}
      </div>
    `}_isTimeUntilVirtual(i){if(!i.entity?.startsWith("virtual:"))return!1;const t=i.entity.slice(8);return this._config?.virtuals?.find(e=>e.id===t)?.op==="time_until"}_displayUnit(i,t){if(t!==void 0)return t;if(!i||i.startsWith("virtual:")||!this.hass)return"";const e=this.hass.states[i];if(!e)return"";const s=e.attributes?.unit_of_measurement??"";if((e.attributes?.device_class??"")==="power"){const a=this._config?.defaults?.power_unit;return a==="W"||a==="kW"?a:"W or kW"}return s==="kWh"||s==="MWh"?"kWh or MWh":s}_isThermometerSvg(i){return!!i.svg?.toLowerCase().includes("thermometer")}_isHorizontalThermometerSvg(i){return!!i.svg?.toLowerCase().includes("thermometer-horizontal")}_isBatterySvg(i){return!!i.svg?.toLowerCase().includes("battery")}_isInverterSvg(i){return!!i.svg?.toLowerCase().includes("inverter")}_renderTuLayoutBuilder(i,t){const e=i.time_until_layout??[],s=c=>t({time_until_layout:[...e,c]}),o=c=>{const d=e.filter((p,h)=>h!==c);t({time_until_layout:d.length?d:void 0})},a=(c,d)=>{const p=[...e],h=c+d;h<0||h>=p.length||([p[c],p[h]]=[p[h],p[c]],t({time_until_layout:p}))},n=(c,d)=>{const p=[...e];p[c]={...p[c],...d},t({time_until_layout:p})},l=c=>c.type==="label"?r`<span class="ec-tu-chip ec-tu-chip--label">⏱ Time Until Label</span>`:c.type==="value"?r`<span class="ec-tu-chip ec-tu-chip--value">⟨value⟩</span>`:c.type==="newline"?r`<span class="ec-tu-chip ec-tu-chip--newline">↵ New Line</span>`:_;return r`
      <div class="ec-subsection-title">Time Until Layout</div>
      ${e.length===0?r`<p class="ec-empty">No items — use the buttons below to build the layout.</p>`:e.map((c,d)=>r`
            <div class="ec-list-row">
              <button class="ec-btn-reorder" ?disabled=${d===0}
                @click=${()=>a(d,-1)} title="Move up">▲</button>
              <button class="ec-btn-reorder" ?disabled=${d===e.length-1}
                @click=${()=>a(d,1)} title="Move down">▼</button>
              <span class="ec-list-label" style="flex:1;min-width:0;">
                ${c.type==="text"?r`<input class="ec-input" type="text" .value=${c.text??""}
                      placeholder="enter text"
                      @input=${p=>n(d,{text:p.target.value})}
                      style="width:100%;box-sizing:border-box;" />`:l(c)}
              </span>
              <button class="ec-btn-remove" @click=${()=>o(d)} title="Remove">✕</button>
            </div>
          `)}
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
        <button class="ec-btn-add" @click=${()=>s({type:"text",text:""})}>+ Text</button>
        <button class="ec-btn-add" @click=${()=>s({type:"label"})}>+ Label</button>
        <button class="ec-btn-add" @click=${()=>s({type:"newline"})}>↵ New Line</button>
        <button class="ec-btn-add" @click=${()=>s({type:"value"})}>+ Value</button>
      </div>
    `}_renderFieldPanel(i,t,e){return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Field ${t+1}</span>
        </div>

        ${this._row("Type",r`<select class="ec-select"
            .value=${e.type==="graph"?"svg":e.type}
            @change=${s=>{const o=s.target.value;this._updateField(i,t,{type:o}),o==="svg"&&this._openGGPicker(i,t)}}
          >
            ${bi.map(s=>r`<option value=${s} .selected=${(e.type==="graph"?"svg":e.type)===s}>${vi[s]}</option>`)}
          </select>`)}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${e.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${s=>{const o=s.target.value.trim();this._updateField(i,t,{display_name:o===""?void 0:o})}}
          />`)}

        ${this._row("Column",r`<div style="display:flex;gap:4px;align-items:center">
            <input class="ec-input ec-input-num" type="number" min="1" max="8"
              .value=${e.column!=null?String(e.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{column:o===""?void 0:Number(o)})}}
            />
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            <input class="ec-input ec-input-num" type="number" min="2" max="8"
              .value=${e.column_end!=null?String(e.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{column_end:o===""?void 0:Number(o)})}}
            />
          </div>`)}

        ${e.type==="value"?r`
          ${this._row("Entity",e.entity?.startsWith("virtual:")?r`<div style="display:flex;gap:4px;align-items:center;">
                  <span class="ec-input" style="flex:1;opacity:0.8;">
                    ${this._virtuals().find(s=>`virtual:${s.id}`===e.entity)?.name??e.entity}
                  </span>
                  <button class="ec-btn-clear"
                    @click=${()=>this._updateField(i,t,{entity:void 0})}
                    title="Switch to real entity">✕</button>
                </div>`:r`<ha-entity-picker
                  .hass=${this.hass}
                  .value=${e.entity??""}
                  allow-custom-entity
                  @value-changed=${s=>this._updateField(i,t,{entity:s.detail.value})}
                ></ha-entity-picker>`)}
          ${!e.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
              .value=${""}
              @change=${s=>{const o=s.target.value;o&&this._updateField(i,t,{entity:o}),s.target.value=""}}
            >
              <option value="">(pick a virtual)</option>
              ${this._virtuals().map(s=>r`<option value=${"virtual:"+s.id}>${s.name}</option>`)}
            </select>`):_}
          ${this._isTimeUntilVirtual(e)?this._renderTuLayoutBuilder(e,s=>this._updateField(i,t,s)):_}
           ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${e.label??""}
              placeholder="(optional)"
              @input=${s=>{const o=s.target.value;this._updateField(i,t,{label:o||void 0})}}
            />`)}
          ${e.label?this._row("Value Label position",r`<select class="ec-select"
              .value=${e.label_position??g("label_position")??"above"}
              @change=${s=>this._updateField(i,t,{label_position:s.target.value})}
            >
              <option value="above"  .selected=${(e.label_position??g("label_position")??"above")==="above"}>Above value</option>
              <option value="below"  .selected=${e.label_position==="below"}>Below value</option>
              <option value="left"   .selected=${e.label_position==="left"}>Left of value</option>
              <option value="right"  .selected=${e.label_position==="right"}>Right of value</option>
            </select>`):_}
        `:_}

        ${e.type==="blank"?this._row("Gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
                .value=${e.blank_gap!=null?String(e.blank_gap):""}
                placeholder="10"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{blank_gap:o===""?void 0:Number(o)})}}
              />`):_}

        ${e.type==="label"?this._row("Text",r`<input class="ec-input" type="text" .value=${e.text??""}
                @change=${s=>this._updateField(i,t,{text:s.target.value})}
              />`):_}

        ${e.type==="icon"?this._row("Icon",r`<input class="ec-input" type="text" .value=${e.icon??""}
                placeholder="mdi:lightning-bolt"
                @change=${s=>this._updateField(i,t,{icon:s.target.value})}
              />`):_}

        ${e.type==="svg"?r`
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div class="ec-subsection-title" style="margin:0">Element Library</div>
            <button class="ec-lib-browse-btn" @click=${()=>this._openGGPicker(i,t)}>⊞ Change type…</button>
          </div>

          ${e.svg?_:this._row("Shape",r`<select class="ec-select"
              .value=${e.shape??g("fill_shape")??"cylinder"}
              @change=${s=>this._updateField(i,t,{shape:s.target.value})}
            >
              <option value="cylinder" .selected=${(e.shape??g("fill_shape")??"cylinder")==="cylinder"}>Cylinder / Tank</option>
              <option value="bar-v"    .selected=${e.shape==="bar-v"}>Bar — vertical</option>
              <option value="bar-h"    .selected=${e.shape==="bar-h"}>Bar — horizontal</option>
            </select>`)}

          ${e.svg&&!this._isInverterSvg(e)?r`
            ${this._row("Fill direction",r`<select class="ec-select"
                .value=${e.fill_direction??g("fill_direction")??"up"}
                @change=${s=>this._updateField(i,t,{fill_direction:s.target.value})}
              >
                <option value="up"    .selected=${(e.fill_direction??g("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
                <option value="down"  .selected=${e.fill_direction==="down"}>Down</option>
                <option value="left"  .selected=${e.fill_direction==="left"}>Left</option>
                <option value="right" .selected=${e.fill_direction==="right"}>Right</option>
              </select>`)}
          `:_}


          ${!e.svg||this._isThermometerSvg(e)||this._isBatterySvg(e)?this._row("Entity",r`<ha-entity-picker
              .hass=${this.hass} .value=${e.entity??""} allow-custom-entity
              @value-changed=${s=>this._updateField(i,t,{entity:s.detail.value||void 0})}
            />`):_}
          ${this._isBatterySvg(e)?this._row("Charging entity",r`<ha-entity-picker
              .hass=${this.hass} .value=${e.charging_entity??""} allow-custom-entity
              @value-changed=${s=>this._updateField(i,t,{charging_entity:s.detail.value||void 0})}
            />`):_}
          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?r`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._row("% entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_pct_entity??""} allow-custom-entity
                @value-changed=${s=>this._updateField(i,t,{tank_pct_entity:s.detail.value||void 0})}
              />`)}
            ${this._row("Volume entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_volume_entity??""} allow-custom-entity
                @value-changed=${s=>this._updateField(i,t,{tank_volume_entity:s.detail.value||void 0})}
              />`)}
            ${this._row("Capacity entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_capacity_entity??""} allow-custom-entity
                @value-changed=${s=>this._updateField(i,t,{tank_capacity_entity:s.detail.value||void 0})}
              />`)}
          `:_}
          ${this._isInverterSvg(e)?_:r`
            ${this._row("Min value",r`<input class="ec-input ec-input-num" type="number"
                .value=${e.min!=null?String(e.min):""} placeholder="0"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{min:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Max value",r`<input class="ec-input ec-input-num" type="number"
                .value=${e.max!=null?String(e.max):""} placeholder="100"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{max:o===""?void 0:Number(o)})}}
              />`)}
          `}
          ${this._row(this._isInverterSvg(e)?"Line color":"Fill color",this._colorPicker(`c${i}-f${t}-fc`,e.fill_color,s=>this._updateField(i,t,{fill_color:s})))}
          ${this._isInverterSvg(e)?_:this._row("Top Graduated Color (Opt)",e.fill_color2?this._colorPicker(`c${i}-f${t}-fc2`,e.fill_color2,s=>this._updateField(i,t,{fill_color2:s}),{clearTitle:"Remove gradient",onClear:()=>this._updateField(i,t,{fill_color2:void 0})}):r`<button class="ec-lib-browse-btn" style="font-size:12px"
                  @click=${()=>this._updateField(i,t,{fill_color2:e.fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?this._row("Tank color",this._colorPicker(`c${i}-f${t}-tkc`,e.tank_color,s=>this._updateField(i,t,{tank_color:s}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateField(i,t,{tank_color:void 0})})):_}
          ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="20"
              .value=${e.height!=null?String(e.height):""} placeholder="120"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{height:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="10"
              .value=${e.width!=null?String(e.width):""} placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{width:o===""?void 0:Number(o)})}}
            />`)}

          ${this._isInverterSvg(e)?_:r`
            <div class="ec-subsection-title">Color thresholds</div>
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(e.thresholds??[]).map((s,o)=>r`
              <div class="ec-row">
                <input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(s.value)}
                  @change=${a=>{const n=[...e.thresholds??[]];n[o]={...s,value:Number(a.target.value)},this._updateField(i,t,{thresholds:n})}}
                />
                <div style="flex:1">
                  ${this._colorPicker(`c${i}-f${t}-t${o}`,s.color,a=>{const n=[...e.thresholds??[]];n[o]={...s,color:a??s.color},this._updateField(i,t,{thresholds:n})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const a=(e.thresholds??[]).filter((n,l)=>l!==o);this._updateField(i,t,{thresholds:a.length?a:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const s=[...e.thresholds??[],{value:0,color:"#f44336"}];this._updateField(i,t,{thresholds:s})}}>+ Threshold</button>
          `}

          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?r`
            <div class="ec-subsection-title">Gauge labels</div>
            ${this._row("Min label",r`<input class="ec-input" type="text" .value=${e.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{gauge_min_label:o||void 0})}}
              />`)}
            ${this._row("Max label",r`<input class="ec-input" type="text" .value=${e.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{gauge_max_label:o||void 0})}}
              />`)}
            ${this._row("Show value",r`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${e.gauge_show_value??!1}
                  @change=${s=>this._updateField(i,t,{gauge_show_value:s.target.checked||void 0})}
                />
                <span>Display current value in centre</span>
              </label>`)}
            ${this._row("Label size (px)",r`<input class="ec-input ec-input-num" type="number" min="6" max="48"
                .value=${e.gauge_label_size!=null?String(e.gauge_label_size):""}
                placeholder="11"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{gauge_label_size:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Label color",this._colorPicker(`c${i}-f${t}-glc`,e.gauge_label_color,s=>this._updateField(i,t,{gauge_label_color:s}),{clearTitle:"Reset to default"}))}
          `:_}
          ${this._isThermometerSvg(e)?r`
            <div class="ec-subsection-title">Thermometer</div>
            ${this._row("Tick color",this._colorPicker(`c${i}-f${t}-ttc`,e.thermo_tick_color,s=>this._updateField(i,t,{thermo_tick_color:s||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Tick position",r`<select class="ec-select"
                .value=${e.thermo_text_position??g("thermo_text_position")??"right"}
                @change=${s=>this._updateField(i,t,{thermo_text_position:s.target.value})}
              >
                ${["right","left","both"].map(s=>r`<option value=${s} .selected=${(e.thermo_text_position??g("thermo_text_position")??"right")===s}>${this._isHorizontalThermometerSvg(e)?{right:"Bottom",left:"Top",both:"Both"}[s]:s.charAt(0).toUpperCase()+s.slice(1)}</option>`)}
              </select>`)}
            ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                .checked=${e.thermo_show_minor_tick_text??g("thermo_show_minor_tick_text")??!1}
                @change=${s=>this._updateField(i,t,{thermo_show_minor_tick_text:s.target.checked})} />`)}
            ${this._row("Tick font size",r`<input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                .value=${e.thermo_tick_font_size!=null?String(e.thermo_tick_font_size):""}
                placeholder="4"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_tick_font_size:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Major tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${e.thermo_major_tick_length!=null?String(e.thermo_major_tick_length):""}
                placeholder="auto (from SVG)"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_major_tick_length:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Major tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${e.thermo_major_tick_width!=null?String(e.thermo_major_tick_width):""}
                placeholder="0.75"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_major_tick_width:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Minor tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${e.thermo_minor_tick_length!=null?String(e.thermo_minor_tick_length):""}
                placeholder="auto (from SVG)"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_minor_tick_length:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Minor tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${e.thermo_minor_tick_width!=null?String(e.thermo_minor_tick_width):""}
                placeholder="0.5"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_minor_tick_width:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Grid line color",this._colorPicker(`c${i}-f${t}-tgc`,e.thermo_grid_color,s=>this._updateField(i,t,{thermo_grid_color:s||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Above temperature transparency",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${e.thermo_fill_opacity_above!=null?String(e.thermo_fill_opacity_above):""}
                placeholder="0.5"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_fill_opacity_above:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                .value=${e.thermo_decimals!=null?String(e.thermo_decimals):""}
                placeholder="1"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_decimals:o===""?void 0:Number(o)})}}
              />`)}
            ${this._row("Temperature value color",this._colorPicker(`c${i}-f${t}-ttc`,e.thermo_temp_color,s=>this._updateField(i,t,{thermo_temp_color:s||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Temperature value size",r`<input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                .value=${e.thermo_temp_font_size!=null?String(e.thermo_temp_font_size):""}
                placeholder="10"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{thermo_temp_font_size:o===""?void 0:Number(o)})}}
              />`)}
          `:_}

        `:_}

        ${e.type==="graph"?r`
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div class="ec-subsection-title" style="margin:0">Element Library</div>
            <button class="ec-lib-browse-btn" @click=${()=>this._openGGPicker(i,t)}>⊞ Change type…</button>
          </div>
          ${this._row("Type",r`<select class="ec-select"
              .value=${e.graph_type??g("graph_type")??"bar"}
              @change=${s=>this._updateField(i,t,{graph_type:s.target.value})}
            >
              ${fi.map(s=>r`<option value=${s.value} .selected=${(e.graph_type??g("graph_type")??"bar")===s.value}>${s.label}</option>`)}
            </select>`)}
          ${this._row("Show axes",r`<input type="checkbox" .checked=${e.graph_show_axes??g("graph_show_axes")??!0}
              @change=${s=>this._updateField(i,t,{graph_show_axes:s.target.checked||void 0})}
            />`)}
          ${this._row("Show legend",r`<input type="checkbox" .checked=${e.graph_show_legend??g("graph_show_legend")??!1}
              @change=${s=>this._updateField(i,t,{graph_show_legend:s.target.checked||void 0})}
            />`)}
          ${this._row("Min value",r`<input class="ec-input ec-input-num" type="number"
              .value=${e.graph_min!=null?String(e.graph_min):""} placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{graph_min:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Max value",r`<input class="ec-input ec-input-num" type="number"
              .value=${e.graph_max!=null?String(e.graph_max):""} placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{graph_max:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="60"
              .value=${e.width!=null?String(e.width):""} placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{width:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="40"
              .value=${e.height!=null?String(e.height):""} placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{height:o===""?void 0:Number(o)})}}
            />`)}
          ${["line","area","state-timeline"].includes(e.graph_type??"")?this._row("History (hours)",r`<input class="ec-input ec-input-num" type="number" min="1" max="8760"
              .value=${e.graph_hours!=null?String(e.graph_hours):""} placeholder="24"
              title="How many hours of history to fetch for line/area/sparkline charts"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{graph_hours:o===""?void 0:Number(o)})}}
            />`):_}
          ${["line","area","state-timeline"].includes(e.graph_type??"")?r`
            ${this._row("Stroke width",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="10" step="0.5"
                .value=${e.graph_stroke_width!=null?String(e.graph_stroke_width):""} placeholder="1.5"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{graph_stroke_width:o===""?void 0:Number(o)})}}
              />`)}
            ${e.graph_type==="area"?this._row("Fill opacity",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${e.graph_fill_opacity!=null?String(e.graph_fill_opacity):""} placeholder="0.2"
                @change=${s=>{const o=s.target.value;this._updateField(i,t,{graph_fill_opacity:o===""?void 0:Number(o)})}}
              />`):_}
          `:_}

          <div class="ec-subsection-title">Series</div>
          ${(e.graph_series??[]).map((s,o)=>r`
            <div class="ec-graph-series">
              <div class="ec-graph-series-header">
                <span class="ec-graph-series-num">Series ${o+1}</span>
                <div class="ec-graph-series-actions">
                  <button class="ec-btn-reorder" title="Move up" ?disabled=${o===0}
                    @click=${()=>{if(o===0)return;const a=[...e.graph_series??[]];[a[o-1],a[o]]=[a[o],a[o-1]],this._updateField(i,t,{graph_series:a})}}>▲</button>
                  <button class="ec-btn-reorder" title="Move down" ?disabled=${o===(e.graph_series??[]).length-1}
                    @click=${()=>{const a=[...e.graph_series??[]];o>=a.length-1||([a[o],a[o+1]]=[a[o+1],a[o]],this._updateField(i,t,{graph_series:a}))}}>▼</button>
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${()=>{const a=(e.graph_series??[]).filter((n,l)=>l!==o);this._updateField(i,t,{graph_series:a.length?a:void 0})}}>✕</button>
                </div>
              </div>
              ${this._row("Entity",r`<ha-entity-picker
                  .hass=${this.hass}
                  .value=${s.entity??""}
                  allow-custom-entity
                  @value-changed=${a=>{const n=[...e.graph_series??[]];n[o]={...n[o],entity:a.detail.value||void 0},this._updateField(i,t,{graph_series:n})}}
                ></ha-entity-picker>`)}
               ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${s.label??""}
                  placeholder="(from entity)"
                  @change=${a=>{const n=[...e.graph_series??[]],l=a.target.value;n[o]={...n[o],label:l||void 0},this._updateField(i,t,{graph_series:n})}}
                />`)}
              ${this._row("Color",this._colorPicker(`c${i}-f${t}-s${o}-col`,s.color,a=>{const n=[...e.graph_series??[]];n[o]={...n[o],color:a},this._updateField(i,t,{graph_series:n})},{clearTitle:"Reset to palette color"}))}
              ${this._row("Stat period",r`<select class="ec-select"
                  .value=${s.stat_period??""}
                  @change=${a=>{const n=[...e.graph_series??[]],l=a.target.value;n[o]={...n[o],stat_period:l||void 0},this._updateField(i,t,{graph_series:n})}}
                >
                  <option value="">Live state</option>
                  <optgroup label="Calendar">
                    <option value="today"       .selected=${s.stat_period==="today"}>Today</option>
                    <option value="yesterday"   .selected=${s.stat_period==="yesterday"}>Yesterday</option>
                    <option value="this_week"   .selected=${s.stat_period==="this_week"}>This week</option>
                    <option value="last_week"   .selected=${s.stat_period==="last_week"}>Last week</option>
                    <option value="this_month"  .selected=${s.stat_period==="this_month"}>This month</option>
                    <option value="last_month"  .selected=${s.stat_period==="last_month"}>Last month</option>
                    <option value="this_year"   .selected=${s.stat_period==="this_year"}>This year</option>
                    <option value="last_year"   .selected=${s.stat_period==="last_year"}>Last year</option>
                  </optgroup>
                  <optgroup label="Rolling window">
                    <option value="last_30_minutes" .selected=${s.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                    <option value="last_hour"        .selected=${s.stat_period==="last_hour"}>Last hour</option>
                    <option value="last_n_minutes"   .selected=${s.stat_period==="last_n_minutes"}>Last N minutes</option>
                    <option value="last_n_hours"     .selected=${s.stat_period==="last_n_hours"}>Last N hours</option>
                    <option value="last_n_days"      .selected=${s.stat_period==="last_n_days"}>Last N days</option>
                    <option value="last_n_months"    .selected=${s.stat_period==="last_n_months"}>Last N months</option>
                  </optgroup>
                </select>`)}
              ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(s.stat_period)?this._row(s.stat_period==="last_n_minutes"?"Number of minutes":s.stat_period==="last_n_hours"?"Number of hours":s.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
                  .value=${String(s.stat_period_n??"")}
                  placeholder="e.g. 3"
                  @change=${a=>{const n=parseInt(a.target.value,10),l=[...e.graph_series??[]];l[o]={...l[o],stat_period_n:isNaN(n)||n<1?void 0:n},this._updateField(i,t,{graph_series:l})}}
                />`):_}
              ${s.stat_period?this._row("Stat type",r`<select class="ec-select"
                  .value=${s.stat_type??g("stat_type")??"sum"}
                  @change=${a=>{const n=[...e.graph_series??[]];n[o]={...n[o],stat_type:a.target.value},this._updateField(i,t,{graph_series:n})}}
                >
                  <option value="sum"        .selected=${(s.stat_type??g("stat_type")??"sum")==="sum"}>Sum (total)</option>
                  <option value="difference" .selected=${s.stat_type==="difference"}>Difference (end − start)</option>
                  <option value="mean"       .selected=${s.stat_type==="mean"}>Mean (average)</option>
                  <option value="max"        .selected=${s.stat_type==="max"}>Maximum</option>
                  <option value="min"        .selected=${s.stat_type==="min"}>Minimum</option>
                </select>`):_}
            </div>
          `)}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>{const s=[...e.graph_series??[],{}];this._updateField(i,t,{graph_series:s})}}>+ Series</button>
        `:_}

        ${e.type!=="svg"&&e.type!=="label"&&e.type!=="graph"&&e.type!=="blank"&&e.type!=="rule"?r`
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Entity field at it.</p>
          ${this._row("Period",r`<select class="ec-select"
              .value=${e.stat_period??""}
              @change=${s=>{const o=s.target.value,a=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(o);this._updateField(i,t,{stat_period:o||void 0,stat_period_n:a?e.stat_period_n??void 0:void 0,stat_period_start:o==="custom"?e.stat_period_start??void 0:void 0,stat_period_end:o==="custom"?e.stat_period_end??void 0:void 0})}}
            >
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${e.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${e.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${e.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${e.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${e.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${e.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${e.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${e.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${e.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${e.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${e.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${e.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${e.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${e.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${e.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(e.stat_period)?this._row(e.stat_period==="last_n_minutes"?"Number of minutes":e.stat_period==="last_n_hours"?"Number of hours":e.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
              .value=${String(e.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${s=>{const o=parseInt(s.target.value,10);this._updateField(i,t,{stat_period_n:isNaN(o)||o<1?void 0:o})}}
            />`):_}
          ${e.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input"
              .value=${e.stat_period_start??""}
              @change=${s=>this._updateField(i,t,{stat_period_start:s.target.value||void 0})}
            />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input"
              .value=${e.stat_period_end??""}
              @change=${s=>this._updateField(i,t,{stat_period_end:s.target.value||void 0})}
            />`)}
          `:_}
          ${e.stat_period?this._row("Stat type",r`<select class="ec-select"
              .value=${e.stat_type??g("stat_type")??"sum"}
              @change=${s=>this._updateField(i,t,{stat_type:s.target.value})}
            >
              <option value="sum"        .selected=${(e.stat_type??g("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${e.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${e.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${e.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${e.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${e.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${e.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",r`<select class="ec-select"
              .value=${e.stat_characteristic??""}
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{stat_characteristic:o||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(s=>r`
                <optgroup label="${s}">
                  ${bo.filter(o=>o.group===s).map(o=>r`
                    <option value=${o.value} .selected=${e.stat_characteristic===o.value}>
                      ${o.label}${o.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${e.stat_characteristic==="percentile"?this._row("Percentile (1–99)",r`<input class="ec-input ec-input-num" type="number" min="1" max="99"
              .value=${e.stat_percentile!=null?String(e.stat_percentile):""} placeholder="50"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{stat_percentile:o===""?void 0:Number(o)})}}
            />`):_}
          ${this._row("Max age (hours)",r`<input class="ec-input ec-input-num" type="number" min="1"
              .value=${e.stat_max_age_hours!=null?String(e.stat_max_age_hours):""} placeholder="(none)"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{stat_max_age_hours:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Sampling size",r`<input class="ec-input ec-input-num" type="number" min="1"
              .value=${e.stat_sampling_size!=null?String(e.stat_sampling_size):""} placeholder="(none)"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{stat_sampling_size:o===""?void 0:Number(o)})}}
            />`)}
          ${e.stat_characteristic&&e.entity?r`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const s=mi(e.entity,e.stat_characteristic,e.stat_max_age_hours,e.stat_sampling_size,e.stat_percentile);navigator.clipboard.writeText(s)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${mi(e.entity,e.stat_characteristic,e.stat_max_age_hours,e.stat_sampling_size,e.stat_percentile)}</pre>
            </div>
          `:_}

          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${e.unit??""}
              placeholder="(from entity)"
              @change=${s=>this._updateField(i,t,{unit:s.target.value})}
            />`)}
          ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="6"
              .value=${e.decimals!=null?String(e.decimals):""}
              placeholder="auto"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{decimals:o===""?void 0:Number(o)})}}
            />`)}
          ${this._row("Hide below",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.hide_below!=null?String(e.hide_below):""}
              placeholder="(always show)"
              title="Suppress this field when the absolute value is below this threshold"
              @change=${s=>{const o=s.target.value;this._updateField(i,t,{hide_below:o===""?void 0:Number(o)})}}
            />`)}
          ${this._displayUnit(e.entity,e.unit)?r`<p class="ec-hint">Enter in ${this._displayUnit(e.entity,e.unit)}</p>`:_}
          ${e.entity?.startsWith("virtual:")&&!e.time_until_layout?.length?this._row("Show trigger label",r`<input type="checkbox"
              .checked=${e.show_time_until_label??!1}
              title="Prefix the value with the active trigger label (e.g. 'Reserve: 2h 10m')"
              @change=${s=>this._updateField(i,t,{show_time_until_label:s.target.checked||void 0})}
            />`):_}
        `:_}

        ${e.type!=="blank"&&e.type!=="rule"?r`
          ${this._row("Align",r`<select class="ec-select"
              .value=${e.align??g("align")??"left"}
              @change=${s=>this._updateField(i,t,{align:s.target.value})}
            >
              ${oe.map(s=>r`<option value=${s} .selected=${(e.align??g("align")??"left")===s}>${s}</option>`)}
            </select>`)}
          ${this._row("Use global text style",r`<input type="checkbox" .checked=${e.style===void 0}
              @change=${s=>{s.target.checked?this._updateField(i,t,{style:void 0}):this._updateField(i,t,{style:{}})}}
            />`)}
          ${e.style!==void 0?r`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`c${i}-f${t}-st`,e.style,s=>this._updateField(i,t,{style:{...e.style,...s}}))}
          `:_}
        `:_}

        <!-- Actions -->
        <div class="ec-subsection-title">Actions</div>
        ${this._actionRows({tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},s=>this._updateField(i,t,s))}
      </div>
    `}_renderDefaultsPanel(){if(!this._config)return r``;const i=this._config.defaults??{};return r`
      <details class="ec-details">
        <summary>Global defaults</summary>
        <div class="ec-details-body">

          ${this._row("Power unit",r`<select class="ec-select"
              .value=${i.power_unit??""}
              @change=${t=>{const e=t.target.value;this._updateDefaults({power_unit:e||void 0})}}
            >
              <option value=""   .selected=${!i.power_unit}>Auto (W / kW)</option>
              <option value="W"  .selected=${i.power_unit==="W"}>Always W</option>
              <option value="kW" .selected=${i.power_unit==="kW"}>Always kW</option>
            </select>`)}

          ${this._row("Stats refresh (min)",r`<input class="ec-input ec-input-num" type="number" min="1" max="60"
              .value=${i.stat_update_interval!=null?String(i.stat_update_interval):""}
              placeholder="5"
              @change=${t=>{const e=t.target.value;this._updateDefaults({stat_update_interval:e===""?void 0:Number(e)})}}
            />`)}

          ${this._row("Font family",r`<input class="ec-input" type="text" .value=${i.font_family??""}
              placeholder="inherit"
              @change=${t=>{const e=t.target.value;this._updateDefaults({font_family:e===""?void 0:e})}}
            />`)}

          ${this._row("Font family – monospace",r`<input class="ec-input" type="text" .value=${i.mono_font_family??""}
              placeholder="'Courier New', monospace"
              @change=${t=>{const e=t.target.value;this._updateDefaults({mono_font_family:e===""?void 0:e})}}
            />`)}
          <p class="ec-hint">Only used where a fixed-width font is required (e.g. numeric counters, timers).</p>

          ${this._row("Card columns",r`<select class="ec-select"
              .value=${String(i.card_columns??g("card_columns")??1)}
              @change=${t=>{const e=Number(t.target.value);this._updateDefaults({card_columns:e===1?void 0:e})}}
            >
              <option value="1" .selected=${(i.card_columns??1)===1}>1</option>
              <option value="2" .selected=${(i.card_columns??1)===2}>2</option>
              <option value="3" .selected=${(i.card_columns??1)===3}>3</option>
              <option value="4" .selected=${(i.card_columns??1)===4}>4</option>
              <option value="5" .selected=${(i.card_columns??1)===5}>5</option>
              <option value="6" .selected=${(i.card_columns??1)===6}>6</option>
              <option value="7" .selected=${(i.card_columns??1)===7}>7</option>
              <option value="8" .selected=${(i.card_columns??1)===8}>8</option>
            </select>`)}

          ${this._row("Field gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.field_gap!=null?String(i.field_gap):""}
              placeholder="4"
              @change=${t=>{const e=t.target.value;this._updateDefaults({field_gap:e===""?void 0:Number(e)})}}
            />`)}
          ${this._row("Column gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.column_gap!=null?String(i.column_gap):""}
              placeholder="3"
              @change=${t=>{const e=t.target.value;this._updateDefaults({column_gap:e===""?void 0:Number(e)})}}
            />`)}

          <div class="ec-subsection-title">Card default</div>
          ${this._boxRows("d-card",i.card??{},t=>this._updateDefaults({card:{...i.card,...t}}))}

          <div class="ec-subsection-title">Label default</div>
          ${this._textRows("d-label",i.label??{},t=>this._updateDefaults({label:{...i.label,...t}}))}

          <div class="ec-subsection-title">Value default</div>
          ${this._textRows("d-value",i.value??{},t=>this._updateDefaults({value:{...i.value,...t}}))}

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Thermometer (Vertical)</summary>
            <div class="ec-details-body">
              ${this._row("Tick color",this._colorPicker("d-thermo-tc",i.thermo_tick_color,t=>this._updateDefaults({thermo_tick_color:t||void 0})))}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${i.thermo_text_position??g("thermo_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(i.thermo_text_position??g("thermo_text_position")??"right")===t}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${i.thermo_show_minor_tick_text??g("thermo_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_show_minor_tick_text:t.target.checked})} />`)}
              ${this._row("Tick font size",r`<input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                  .value=${i.thermo_tick_font_size!=null?String(i.thermo_tick_font_size):""}
                  placeholder="4"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_tick_font_size:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Major tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${i.thermo_major_tick_length!=null?String(i.thermo_major_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_major_tick_length:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Major tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${i.thermo_major_tick_width!=null?String(i.thermo_major_tick_width):""}
                  placeholder="0.75"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_major_tick_width:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Minor tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${i.thermo_minor_tick_length!=null?String(i.thermo_minor_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_minor_tick_length:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Minor tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${i.thermo_minor_tick_width!=null?String(i.thermo_minor_tick_width):""}
                  placeholder="0.5"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_minor_tick_width:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Grid line color",this._colorPicker("d-thermo-gc",i.thermo_grid_color,t=>this._updateDefaults({thermo_grid_color:t||void 0})))}
              ${this._row("Above temperature transparency",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${i.thermo_fill_opacity_above!=null?String(i.thermo_fill_opacity_above):""}
                  placeholder="0.5"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_fill_opacity_above:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                  .value=${i.thermo_decimals!=null?String(i.thermo_decimals):""}
                  placeholder="1"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_decimals:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-ttc",i.thermo_temp_color,t=>this._updateDefaults({thermo_temp_color:t||void 0})))}
              ${this._row("Temperature value size",r`<input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                  .value=${i.thermo_temp_font_size!=null?String(i.thermo_temp_font_size):""}
                  placeholder="10"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_temp_font_size:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Fill color",this._colorPicker("d-thermo-fc",i.thermo_fill_color,t=>this._updateDefaults({thermo_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.thermo_fill_color2?r`${this._colorPicker("d-thermo-fc2",i.thermo_fill_color2,t=>this._updateDefaults({thermo_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_fill_color2:i.thermo_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Thermometer (Horizontal)</summary>
            <div class="ec-details-body">
              ${this._row("Tick color",this._colorPicker("d-thermo-h-tc",i.thermo_tick_color,t=>this._updateDefaults({thermo_tick_color:t||void 0})))}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${i.thermo_text_position??g("thermo_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(i.thermo_text_position??g("thermo_text_position")??"right")===t}>${{right:"Bottom",left:"Top",both:"Both"}[t]}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${i.thermo_show_minor_tick_text??g("thermo_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_show_minor_tick_text:t.target.checked})} />`)}
              ${this._row("Tick font size",r`<input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                  .value=${i.thermo_tick_font_size!=null?String(i.thermo_tick_font_size):""}
                  placeholder="4"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_tick_font_size:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Major tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${i.thermo_major_tick_length!=null?String(i.thermo_major_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_major_tick_length:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Major tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${i.thermo_major_tick_width!=null?String(i.thermo_major_tick_width):""}
                  placeholder="0.75"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_major_tick_width:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Minor tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                  .value=${i.thermo_minor_tick_length!=null?String(i.thermo_minor_tick_length):""}
                  placeholder="auto (from SVG)"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_minor_tick_length:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Minor tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                  .value=${i.thermo_minor_tick_width!=null?String(i.thermo_minor_tick_width):""}
                  placeholder="0.5"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_minor_tick_width:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Grid line color",this._colorPicker("d-thermo-h-gc",i.thermo_grid_color,t=>this._updateDefaults({thermo_grid_color:t||void 0})))}
              ${this._row("Above temperature transparency",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${i.thermo_fill_opacity_above!=null?String(i.thermo_fill_opacity_above):""}
                  placeholder="0.5"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_fill_opacity_above:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                  .value=${i.thermo_decimals!=null?String(i.thermo_decimals):""}
                  placeholder="1"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_decimals:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-h-ttc",i.thermo_temp_color,t=>this._updateDefaults({thermo_temp_color:t||void 0})))}
              ${this._row("Temperature value size",r`<input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                  .value=${i.thermo_temp_font_size!=null?String(i.thermo_temp_font_size):""}
                  placeholder="10"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({thermo_temp_font_size:e===""?void 0:Number(e)})}}
                />`)}
              ${this._row("Fill color",this._colorPicker("d-thermo-h-fc",i.thermo_h_fill_color,t=>this._updateDefaults({thermo_h_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.thermo_h_fill_color2?r`${this._colorPicker("d-thermo-h-fc2",i.thermo_h_fill_color2,t=>this._updateDefaults({thermo_h_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_h_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_h_fill_color2:i.thermo_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Battery (Horizontal)</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-bh-fc",i.battery_h_fill_color,t=>this._updateDefaults({battery_h_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.battery_h_fill_color2?r`${this._colorPicker("d-bh-fc2",i.battery_h_fill_color2,t=>this._updateDefaults({battery_h_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_h_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_h_fill_color2:i.battery_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Battery (Vertical)</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-bv-fc",i.battery_v_fill_color,t=>this._updateDefaults({battery_v_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.battery_v_fill_color2?r`${this._colorPicker("d-bv-fc2",i.battery_v_fill_color2,t=>this._updateDefaults({battery_v_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_v_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_v_fill_color2:i.battery_v_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Tank (Cylinder)</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-tc-fc",i.tank_cylinder_fill_color,t=>this._updateDefaults({tank_cylinder_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.tank_cylinder_fill_color2?r`${this._colorPicker("d-tc-fc2",i.tank_cylinder_fill_color2,t=>this._updateDefaults({tank_cylinder_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cylinder_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_fill_color2:i.tank_cylinder_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${i.tank_cylinder_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_cylinder_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",i.tank_cylinder_tank_color?r`${this._colorPicker("d-tc-wc",i.tank_cylinder_tank_color,t=>this._updateDefaults({tank_cylinder_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cylinder_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_tank_color:"#808080"})}>+ Set wall color</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Tank - Water</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-tw-fc",i.tank_water_fill_color,t=>this._updateDefaults({tank_water_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.tank_water_fill_color2?r`${this._colorPicker("d-tw-fc2",i.tank_water_fill_color2,t=>this._updateDefaults({tank_water_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_water_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_fill_color2:i.tank_water_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${i.tank_water_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_water_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",i.tank_water_tank_color?r`${this._colorPicker("d-tw-wc",i.tank_water_tank_color,t=>this._updateDefaults({tank_water_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_water_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_tank_color:"#808080"})}>+ Set wall color</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Tank - Fermenter</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-tf-fc",i.tank_fermenter_fill_color,t=>this._updateDefaults({tank_fermenter_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.tank_fermenter_fill_color2?r`${this._colorPicker("d-tf-fc2",i.tank_fermenter_fill_color2,t=>this._updateDefaults({tank_fermenter_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_fermenter_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_fill_color2:i.tank_fermenter_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${i.tank_fermenter_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_fermenter_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",i.tank_fermenter_tank_color?r`${this._colorPicker("d-tf-wc",i.tank_fermenter_tank_color,t=>this._updateDefaults({tank_fermenter_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_fermenter_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_tank_color:"#808080"})}>+ Set wall color</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Tank - Cone</summary>
            <div class="ec-details-body">
              ${this._row("Fill color",this._colorPicker("d-tn-fc",i.tank_cone_fill_color,t=>this._updateDefaults({tank_cone_fill_color:t||void 0})))}
              ${this._row("Top Graduated Color (Opt)",i.tank_cone_fill_color2?r`${this._colorPicker("d-tn-fc2",i.tank_cone_fill_color2,t=>this._updateDefaults({tank_cone_fill_color2:t||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cone_fill_color2:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_fill_color2:i.tank_cone_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",r`<select class="ec-select"
                  .value=${i.tank_cone_fill_direction??"up"}
                  @change=${t=>this._updateDefaults({tank_cone_fill_direction:t.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",i.tank_cone_tank_color?r`${this._colorPicker("d-tn-wc",i.tank_cone_tank_color,t=>this._updateDefaults({tank_cone_tank_color:t||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cone_tank_color:void 0})})}`:r`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_tank_color:"#808080"})}>+ Set wall color</button>`)}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Inverter</summary>
            <div class="ec-details-body">
              ${this._row("Line color",this._colorPicker("d-inv-lc",i.inverter_line_color,t=>this._updateDefaults({inverter_line_color:t||void 0})))}
            </div>
          </details>

          <details class="ec-details ec-details-nested">
            <summary>Element Library – Gauge (Arc)</summary>
            <div class="ec-details-body">
              ${this._row("Needle color",this._colorPicker("d-ga-nc",i.gauge_arc_needle_color,t=>this._updateDefaults({gauge_arc_needle_color:t||void 0})))}
              ${this._row("Label color",this._colorPicker("d-ga-lc",i.gauge_arc_label_color,t=>this._updateDefaults({gauge_arc_label_color:t||void 0})))}
              ${this._row("Label size",r`<input class="ec-input ec-input-num" type="number" min="6" max="24" step="1"
                  .value=${i.gauge_arc_label_size!=null?String(i.gauge_arc_label_size):""}
                  placeholder="11"
                  @change=${t=>{const e=t.target.value;this._updateDefaults({gauge_arc_label_size:e===""?void 0:Number(e)})}}
                />`)}
            </div>
          </details>

          <div class="ec-wiz-reset-row">
            <button class="ec-wiz-btn-reset" @click=${this._resetToWizard}>⟳ Reset &amp; rerun setup wizard</button>
          </div>
        </div>
      </details>
    `}_renderExtendedCardsPanel(){if(!this._config)return r``;const i=this._extCards(),t=i[this._selExtCard],e=t?.fields[this._selExtField];return r`
      <details class="ec-details">
        <summary>Popover Cards</summary>
        <div class="ec-details-body">

          <!-- Defaults sub-section -->
          <details class="ec-details" style="margin-bottom:8px">
            <summary style="font-size:12px">Popover Card Defaults</summary>
            <div class="ec-details-body">
              ${this._row("Columns (default)",r`<select class="ec-select"
                  .value=${String(this._config.extended_card_defaults?.columns??g("columns")??2)}
                  @change=${s=>this._updateExtDefaults({columns:Number(s.target.value)})}
                >
                  <option value="1">1</option>
                  <option value="2" .selected=${(this._config.extended_card_defaults?.columns??g("columns")??2)===2}>2</option>
                  <option value="3" .selected=${this._config.extended_card_defaults?.columns===3}>3</option>
                  <option value="4" .selected=${this._config.extended_card_defaults?.columns===4}>4</option>
                  <option value="5" .selected=${this._config.extended_card_defaults?.columns===5}>5</option>
                  <option value="6" .selected=${this._config.extended_card_defaults?.columns===6}>6</option>
                  <option value="7" .selected=${this._config.extended_card_defaults?.columns===7}>7</option>
                  <option value="8" .selected=${this._config.extended_card_defaults?.columns===8}>8</option>
                </select>`)}
              ${this._row("Width % (default)",r`<input class="ec-input ec-input-num" type="number" min="20" max="100"
                  .value=${this._config.extended_card_defaults?.width!=null?String(this._config.extended_card_defaults.width):""}
                  placeholder="70"
                  @change=${s=>{const o=s.target.value;this._updateExtDefaults({width:o===""?void 0:Number(o)})}}
                />`)}
              ${this._row("Height % (default)",r`<input class="ec-input ec-input-num" type="number" min="10" max="100"
                  .value=${this._config.extended_card_defaults?.height!=null?String(this._config.extended_card_defaults.height):""}
                  placeholder="auto"
                  @change=${s=>{const o=s.target.value;this._updateExtDefaults({height:o===""?void 0:Number(o)})}}
                />`)}
              ${this._row("Field gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.field_gap!=null?String(this._config.extended_card_defaults.field_gap):""}
                  placeholder="8"
                  @change=${s=>{const o=s.target.value;this._updateExtDefaults({field_gap:o===""?void 0:Number(o)})}}
                />`)}
              ${this._row("Column gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.column_gap!=null?String(this._config.extended_card_defaults.column_gap):""}
                  placeholder="(from global)"
                  @change=${s=>{const o=s.target.value;this._updateExtDefaults({column_gap:o===""?void 0:Number(o)})}}
                />`)}
              <div class="ec-subsection-title">Card default</div>
              ${this._boxRows("extd-card",this._config.extended_card_defaults?.card??{},s=>this._updateExtDefaults({card:{...this._config.extended_card_defaults?.card,...s}}))}
              <div class="ec-subsection-title">Label default</div>
              ${this._textRows("extd-lbl",this._config.extended_card_defaults?.label??{},s=>this._updateExtDefaults({label:{...this._config.extended_card_defaults?.label,...s}}))}
              <div class="ec-subsection-title">Value default</div>
              ${this._textRows("extd-val",this._config.extended_card_defaults?.value??{},s=>this._updateExtDefaults({value:{...this._config.extended_card_defaults?.value,...s}}))}
            </div>
          </details>

          <!-- Card list -->
          <div class="ec-section-header">
            <span></span>
            <button class="ec-btn-add" @click=${this._addExtCard}>+ Popover Card</button>
          </div>
          ${i.length===0?r`<p class="ec-empty">No popover cards — click "+ Popover Card".</p>`:i.map((s,o)=>r`
                <div
                  class="ec-list-row${o===this._selExtCard?" selected":""}"
                  @click=${()=>{this._selExtCard=o,this._selExtField=-1}}
                >
                  <span class="ec-list-label">${s.name??`Popover Card ${o+1}`}</span>
                  <button class="ec-btn-remove"
                    @click=${a=>{a.stopPropagation(),this._removeExtCard(o)}}
                    title="Remove">✕</button>
                </div>
              `)}

          ${t?this._renderExtCardPanel(this._selExtCard,t):_}
          ${t?this._renderExtFieldList(this._selExtCard,t):_}
          ${t&&e!==void 0&&this._selExtField>=0?this._renderExtFieldPanel(this._selExtCard,this._selExtField,e):_}
        </div>
      </details>
    `}_renderExtCardPanel(i,t){return r`
      <div class="ec-section">
        <div class="ec-section-header">
          <span class="ec-section-title">Card: ${t.name??`Popover Card ${i+1}`}</span>
        </div>

        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${e=>this._updateExtCard(i,{name:e.target.value})}
          />`)}

        ${this._row("Columns",r`<select class="ec-select"
            .value=${String(t.columns??g("columns")??2)}
            @change=${e=>this._updateExtCard(i,{columns:Number(e.target.value)})}
          >
            <option value="1">1</option>
            <option value="2" .selected=${(t.columns??g("columns")??2)===2}>2</option>
            <option value="3" .selected=${t.columns===3}>3</option>
            <option value="4" .selected=${t.columns===4}>4</option>
            <option value="5" .selected=${t.columns===5}>5</option>
            <option value="6" .selected=${t.columns===6}>6</option>
            <option value="7" .selected=${t.columns===7}>7</option>
            <option value="8" .selected=${t.columns===8}>8</option>
          </select>`)}

        ${this._row("Width %",r`<input class="ec-input ec-input-num" type="number" min="20" max="100"
            .value=${t.width!=null?String(t.width):""}
            placeholder="(from defaults)"
            @change=${e=>{const s=e.target.value;this._updateExtCard(i,{width:s===""?void 0:Number(s)})}}
          />`)}

        ${this._row("Height %",r`<input class="ec-input ec-input-num" type="number" min="10" max="100"
            .value=${t.height!=null?String(t.height):""}
            placeholder="auto"
            @change=${e=>{const s=e.target.value;this._updateExtCard(i,{height:s===""?void 0:Number(s)})}}
          />`)}

        ${this._row("Align",r`<select class="ec-select"
            .value=${t.align??g("align")??"left"}
            @change=${e=>this._updateExtCard(i,{align:e.target.value})}
          >
            ${oe.map(e=>r`<option value=${e} .selected=${(t.align??g("align")??"left")===e}>${e}</option>`)}
          </select>`)}

        ${this._row("Field gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.field_gap!=null?String(t.field_gap):""}
            placeholder="(from defaults)"
            @change=${e=>{const s=e.target.value;this._updateExtCard(i,{field_gap:s===""?void 0:Number(s)})}}
          />`)}

        ${this._row("Column gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
            .value=${t.column_gap!=null?String(t.column_gap):""}
            placeholder="(from defaults)"
            @change=${e=>{const s=e.target.value;this._updateExtCard(i,{column_gap:s===""?void 0:Number(s)})}}
          />`)}

        <details class="ec-details">
          <summary>Style Default Override</summary>
          <div class="ec-details-body">
            <div class="ec-subsection-title">Popover Card Style</div>
            ${this._boxRows(`ext${i}`,t.box??{},e=>this._updateExtCardBox(i,e))}

            <div class="ec-subsection-title">Label Default</div>
            ${this._textRows(`ext${i}-ls`,t.label_style??{},e=>this._updateExtCard(i,{label_style:{...t.label_style,...e}}))}

            <div class="ec-subsection-title">Value Default</div>
            ${this._textRows(`ext${i}-vs`,t.value_style??{},e=>this._updateExtCard(i,{value_style:{...t.value_style,...e}}))}
          </div>
        </details>
      </div>
    `}_renderExtFieldList(i,t){const e=t.fields;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(i,!0)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addExtField(i)}>+ Field</button>
        </div>
        ${e.length===0?r`<p class="ec-empty">No fields — click "+ Field".</p>`:e.map((s,o)=>r`
              <div
                class="ec-list-row${o===this._selExtField?" selected":""}${this._dragSrc===`extfield:${i}:${o}`?" ec-dragging":""}"
                draggable="true"
                @dragstart=${a=>this._onDragStart(a,`extfield:${i}:${o}`)}
                @dragover=${a=>this._onDragOver(a)}
                @dragleave=${a=>this._onDragLeave(a)}
                @drop=${a=>this._onDrop(a,`extfield:${i}:${o}`)}
                @dragend=${a=>this._onDragEnd(a)}
                @click=${()=>{this._selExtField=o}}
              >
                <span class="ec-drag-handle" title="Drag to reorder"></span>
                <span class="ec-list-label">${s.column!=null?r`<span class="ec-col-badge">C${s.column}</span> `:_}[${s.type}] ${s.display_name??s.text??(s.entity?.startsWith("virtual:")?this._virtuals().find(a=>`virtual:${a.id}`===s.entity)?.name??s.entity:this.hass?.states[s.entity??""]?.attributes?.friendly_name??s.entity)??s.icon??""}${s.type==="graph"&&s.graph_type?r` <span class="ec-type-badge">${s.graph_type}</span>`:s.type==="svg"&&(s.shape||s.svg)?r` <span class="ec-type-badge">${s.shape??s.svg.split("/").pop()?.replace(/\.svg$/i,"")??""}</span>`:_}</span>
                ${this._copiedFieldSrc?.isExt===!0&&this._copiedFieldSrc.ci===i&&this._copiedFieldSrc.fi===o?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                      @click=${a=>{a.stopPropagation(),this._copyField(i,o,!0)}}
                      title="Copy this field">⎘</button>`}
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeExtField(i,o)}}
                  title="Remove">✕</button>
              </div>
            `)}
      </div>
    `}_renderExtFieldPanel(i,t,e){const s=a=>this._updateExtField(i,t,a),o=`ext${i}-f${t}`;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Field ${t+1}</span>
        </div>

        ${this._row("Type",r`<select class="ec-select"
            .value=${e.type==="graph"?"svg":e.type}
            @change=${a=>{const n=a.target.value;s({type:n}),n==="svg"&&this._openGGPicker(i,t,!0)}}
          >
            ${bi.map(a=>r`<option value=${a} .selected=${(e.type==="graph"?"svg":e.type)===a}>${vi[a]}</option>`)}
          </select>`)}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${e.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${a=>{const n=a.target.value.trim();s({display_name:n===""?void 0:n})}}
          />`)}

        ${this._row("Column",r`<div style="display:flex;gap:4px;align-items:center">
            <input class="ec-input ec-input-num" type="number" min="1" max="8"
              .value=${e.column!=null?String(e.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${a=>{const n=a.target.value;s({column:n===""?void 0:Number(n)})}}
            />
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            <input class="ec-input ec-input-num" type="number" min="2" max="8"
              .value=${e.column_end!=null?String(e.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${a=>{const n=a.target.value;s({column_end:n===""?void 0:Number(n)})}}
            />
          </div>`)}

        ${e.type==="value"?r`
          ${this._row("Entity",e.entity?.startsWith("virtual:")?r`<div style="display:flex;gap:4px;align-items:center;">
                  <span class="ec-input" style="flex:1;opacity:0.8;">
                    ${this._virtuals().find(a=>`virtual:${a.id}`===e.entity)?.name??e.entity}
                  </span>
                  <button class="ec-btn-clear" @click=${()=>s({entity:void 0})} title="Switch to real entity">✕</button>
                </div>`:r`<ha-entity-picker
                  .hass=${this.hass} .value=${e.entity??""} allow-custom-entity
                  @value-changed=${a=>s({entity:a.detail.value})}
                ></ha-entity-picker>`)}
          ${!e.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select" .value=${""} @change=${a=>{const n=a.target.value;n&&s({entity:n}),a.target.value=""}}>
              <option value="">(pick a virtual)</option>
              ${this._virtuals().map(a=>r`<option value=${"virtual:"+a.id}>${a.name}</option>`)}
            </select>`):_}
          ${this._isTimeUntilVirtual(e)?this._renderTuLayoutBuilder(e,s):_}
           ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${e.label??""}
              placeholder="(optional)"
              @input=${a=>{const n=a.target.value;s({label:n||void 0})}}
            />`)}
          ${e.label?r`
            ${this._row("Value Label position",r`<select class="ec-select"
                .value=${e.label_position??g("label_position")??"above"}
                @change=${a=>s({label_position:a.target.value})}
              >
                <option value="above"  .selected=${(e.label_position??g("label_position")??"above")==="above"}>Above value</option>
                <option value="below"  .selected=${e.label_position==="below"}>Below value</option>
                <option value="left"   .selected=${e.label_position==="left"}>Left of value</option>
                <option value="right"  .selected=${e.label_position==="right"}>Right of value</option>
              </select>`)}
            ${this._row("Label column",r`<input class="ec-input ec-input-num" type="number" min="1" max="4"
                .value=${e.label_column!=null?String(e.label_column):""}
                placeholder="(same cell)"
                @change=${a=>{const n=a.target.value;s({label_column:n===""?void 0:Number(n)})}}
              />`)}
          `:_}
        `:_}

        ${e.type==="blank"?this._row("Gap (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.blank_gap!=null?String(e.blank_gap):""}
              placeholder="10"
              @change=${a=>{const n=a.target.value;s({blank_gap:n===""?void 0:Number(n)})}} />`):_}

        ${e.type==="label"?this._row("Text",r`<input class="ec-input" type="text" .value=${e.text??""}
              @change=${a=>s({text:a.target.value})} />`):_}

        ${e.type==="icon"?this._row("Icon",r`<input class="ec-input" type="text" .value=${e.icon??""}
              placeholder="mdi:lightning-bolt"
              @change=${a=>s({icon:a.target.value})} />`):_}

        ${e.type==="svg"?r`
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div class="ec-subsection-title" style="margin:0">Element Library</div>
            <button class="ec-lib-browse-btn" @click=${()=>this._openGGPicker(i,t,!0)}>⊞ Change type…</button>
          </div>
          ${e.svg?_:this._row("Shape",r`<select class="ec-select" .value=${e.shape??g("fill_shape")??"cylinder"}
              @change=${a=>s({shape:a.target.value})}>
              <option value="cylinder" .selected=${(e.shape??g("fill_shape")??"cylinder")==="cylinder"}>Cylinder / Tank</option>
              <option value="bar-v"    .selected=${e.shape==="bar-v"}>Bar — vertical</option>
              <option value="bar-h"    .selected=${e.shape==="bar-h"}>Bar — horizontal</option>
            </select>`)}
          ${e.svg&&!this._isInverterSvg(e)?r`
            ${this._row("Fill direction",r`<select class="ec-select" .value=${e.fill_direction??g("fill_direction")??"up"}
                @change=${a=>s({fill_direction:a.target.value})}>
                <option value="up"    .selected=${(e.fill_direction??g("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
                <option value="down"  .selected=${e.fill_direction==="down"}>Down</option>
                <option value="left"  .selected=${e.fill_direction==="left"}>Left</option>
                <option value="right" .selected=${e.fill_direction==="right"}>Right</option>
              </select>`)}
          `:_}

          ${!e.svg||this._isThermometerSvg(e)||this._isBatterySvg(e)?this._row("Entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.entity??""} allow-custom-entity
              @value-changed=${a=>s({entity:a.detail.value||void 0})} />`):_}
          ${this._isBatterySvg(e)?this._row("Charging entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.charging_entity??""} allow-custom-entity
              @value-changed=${a=>s({charging_entity:a.detail.value||void 0})} />`):_}
          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?r`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._row("% entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_pct_entity??""} allow-custom-entity
                @value-changed=${a=>s({tank_pct_entity:a.detail.value||void 0})}
              />`)}
            ${this._row("Volume entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_volume_entity??""} allow-custom-entity
                @value-changed=${a=>s({tank_volume_entity:a.detail.value||void 0})}
              />`)}
            ${this._row("Capacity entity",r`<ha-entity-picker .hass=${this.hass} .value=${e.tank_capacity_entity??""} allow-custom-entity
                @value-changed=${a=>s({tank_capacity_entity:a.detail.value||void 0})}
              />`)}
          `:_}
          ${this._isInverterSvg(e)?_:r`
            ${this._row("Min value",r`<input class="ec-input ec-input-num" type="number"
                .value=${e.min!=null?String(e.min):""} placeholder="0"
                @change=${a=>{const n=a.target.value;s({min:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Max value",r`<input class="ec-input ec-input-num" type="number"
                .value=${e.max!=null?String(e.max):""} placeholder="100"
                @change=${a=>{const n=a.target.value;s({max:n===""?void 0:Number(n)})}} />`)}
          `}
          ${this._row(this._isInverterSvg(e)?"Line color":"Fill color",this._colorPicker(`${o}-fc`,e.fill_color,a=>s({fill_color:a})))}
          ${this._isInverterSvg(e)?_:this._row("Top Graduated Color (Opt)",e.fill_color2?this._colorPicker(`${o}-fc2`,e.fill_color2,a=>s({fill_color2:a}),{clearTitle:"Remove gradient",onClear:()=>s({fill_color2:void 0})}):r`<button class="ec-lib-browse-btn" style="font-size:12px"
                  @click=${()=>s({fill_color2:e.fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?this._row("Tank color",this._colorPicker(`${o}-tkc`,e.tank_color,a=>s({tank_color:a}),{clearTitle:"Remove (use SVG default)",onClear:()=>s({tank_color:void 0})})):_}
          ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="20"
              .value=${e.height!=null?String(e.height):""} placeholder="120"
              @change=${a=>{const n=a.target.value;s({height:n===""?void 0:Number(n)})}} />`)}
          ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="10"
              .value=${e.width!=null?String(e.width):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({width:n===""?void 0:Number(n)})}} />`)}
          ${this._isInverterSvg(e)?_:r`
            <div class="ec-subsection-title">Color thresholds</div>
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(e.thresholds??[]).map((a,n)=>r`
              <div class="ec-row">
                <input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(a.value)}
                  @change=${l=>{const c=[...e.thresholds??[]];c[n]={...a,value:Number(l.target.value)},s({thresholds:c})}} />
                <div style="flex:1">
                  ${this._colorPicker(`${o}-t${n}`,a.color,l=>{const c=[...e.thresholds??[]];c[n]={...a,color:l??a.color},s({thresholds:c})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const l=(e.thresholds??[]).filter((c,d)=>d!==n);s({thresholds:l.length?l:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const a=[...e.thresholds??[],{value:0,color:"#f44336"}];s({thresholds:a})}}>+ Threshold</button>
          `}
          ${e.svg&&!this._isThermometerSvg(e)&&!this._isBatterySvg(e)&&!this._isInverterSvg(e)?r`
            <div class="ec-subsection-title">Gauge labels</div>
            ${this._row("Min label",r`<input class="ec-input" type="text" .value=${e.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${a=>{const n=a.target.value;s({gauge_min_label:n||void 0})}} />`)}
            ${this._row("Max label",r`<input class="ec-input" type="text" .value=${e.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${a=>{const n=a.target.value;s({gauge_max_label:n||void 0})}} />`)}
            ${this._row("Show value",r`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${e.gauge_show_value??!1}
                  @change=${a=>s({gauge_show_value:a.target.checked||void 0})} />
                <span>Display current value in centre</span>
              </label>`)}
            ${this._row("Label size (px)",r`<input class="ec-input ec-input-num" type="number" min="6" max="48"
                .value=${e.gauge_label_size!=null?String(e.gauge_label_size):""} placeholder="11"
                @change=${a=>{const n=a.target.value;s({gauge_label_size:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Label color",this._colorPicker(`${o}-glc`,e.gauge_label_color,a=>s({gauge_label_color:a}),{clearTitle:"Reset to default"}))}
          `:_}
          ${this._isThermometerSvg(e)?r`
            <div class="ec-subsection-title">Thermometer</div>
            ${this._row("Tick color",this._colorPicker(`${o}-ttc`,e.thermo_tick_color,a=>s({thermo_tick_color:a||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Tick position",r`<select class="ec-select"
                .value=${e.thermo_text_position??g("thermo_text_position")??"right"}
                @change=${a=>s({thermo_text_position:a.target.value})}
              >
                ${["right","left","both"].map(a=>r`<option value=${a} .selected=${(e.thermo_text_position??g("thermo_text_position")??"right")===a}>${this._isHorizontalThermometerSvg(e)?{right:"Bottom",left:"Top",both:"Both"}[a]:a.charAt(0).toUpperCase()+a.slice(1)}</option>`)}
              </select>`)}
            ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                .checked=${e.thermo_show_minor_tick_text??g("thermo_show_minor_tick_text")??!1}
                @change=${a=>s({thermo_show_minor_tick_text:a.target.checked})} />`)}
            ${this._row("Tick font size",r`<input class="ec-input ec-input-num" type="number" min="1" max="20" step="0.5"
                .value=${e.thermo_tick_font_size!=null?String(e.thermo_tick_font_size):""} placeholder="4"
                @change=${a=>{const n=a.target.value;s({thermo_tick_font_size:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Major tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${e.thermo_major_tick_length!=null?String(e.thermo_major_tick_length):""} placeholder="auto (from SVG)"
                @change=${a=>{const n=a.target.value;s({thermo_major_tick_length:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Major tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${e.thermo_major_tick_width!=null?String(e.thermo_major_tick_width):""} placeholder="0.75"
                @change=${a=>{const n=a.target.value;s({thermo_major_tick_width:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Minor tick length",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="20" step="0.5"
                .value=${e.thermo_minor_tick_length!=null?String(e.thermo_minor_tick_length):""} placeholder="auto (from SVG)"
                @change=${a=>{const n=a.target.value;s({thermo_minor_tick_length:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Minor tick thickness",r`<input class="ec-input ec-input-num" type="number" min="0.1" max="5" step="0.05"
                .value=${e.thermo_minor_tick_width!=null?String(e.thermo_minor_tick_width):""} placeholder="0.5"
                @change=${a=>{const n=a.target.value;s({thermo_minor_tick_width:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Grid line color",this._colorPicker(`${o}-tgc`,e.thermo_grid_color,a=>s({thermo_grid_color:a||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Above temperature transparency",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${e.thermo_fill_opacity_above!=null?String(e.thermo_fill_opacity_above):""} placeholder="0.5"
                @change=${a=>{const n=a.target.value;s({thermo_fill_opacity_above:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="4" step="1"
                .value=${e.thermo_decimals!=null?String(e.thermo_decimals):""} placeholder="1"
                @change=${a=>{const n=a.target.value;s({thermo_decimals:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Temperature value color",this._colorPicker(`${o}-ttc`,e.thermo_temp_color,a=>s({thermo_temp_color:a||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Temperature value size",r`<input class="ec-input ec-input-num" type="number" min="4" max="30" step="0.5"
                .value=${e.thermo_temp_font_size!=null?String(e.thermo_temp_font_size):""} placeholder="10"
                @change=${a=>{const n=a.target.value;s({thermo_temp_font_size:n===""?void 0:Number(n)})}} />`)}
          `:_}
        `:_}

        ${e.type==="graph"?r`
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div class="ec-subsection-title" style="margin:0">Element Library</div>
            <button class="ec-lib-browse-btn" @click=${()=>this._openGGPicker(i,t,!0)}>⊞ Change type…</button>
          </div>
          ${this._row("Type",r`<select class="ec-select" .value=${e.graph_type??g("graph_type")??"bar"}
              @change=${a=>s({graph_type:a.target.value})}>
              ${fi.map(a=>r`<option value=${a.value} .selected=${(e.graph_type??g("graph_type")??"bar")===a.value}>${a.label}</option>`)}
            </select>`)}
          ${this._row("Show axes",r`<input type="checkbox" .checked=${e.graph_show_axes??g("graph_show_axes")??!0}
              @change=${a=>s({graph_show_axes:a.target.checked||void 0})} />`)}
          ${this._row("Show legend",r`<input type="checkbox" .checked=${e.graph_show_legend??g("graph_show_legend")??!1}
              @change=${a=>s({graph_show_legend:a.target.checked||void 0})} />`)}
          ${this._row("Min value",r`<input class="ec-input ec-input-num" type="number"
              .value=${e.graph_min!=null?String(e.graph_min):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({graph_min:n===""?void 0:Number(n)})}} />`)}
          ${this._row("Max value",r`<input class="ec-input ec-input-num" type="number"
              .value=${e.graph_max!=null?String(e.graph_max):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({graph_max:n===""?void 0:Number(n)})}} />`)}
          ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="60"
              .value=${e.width!=null?String(e.width):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({width:n===""?void 0:Number(n)})}} />`)}
          ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="40"
              .value=${e.height!=null?String(e.height):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({height:n===""?void 0:Number(n)})}} />`)}
          ${["line","area","state-timeline"].includes(e.graph_type??"")?r`
            ${this._row("History (hours)",r`<input class="ec-input ec-input-num" type="number" min="1" max="8760"
                .value=${e.graph_hours!=null?String(e.graph_hours):""} placeholder="24"
                @change=${a=>{const n=a.target.value;s({graph_hours:n===""?void 0:Number(n)})}} />`)}
            ${this._row("Stroke width",r`<input class="ec-input ec-input-num" type="number" min="0.5" max="10" step="0.5"
                .value=${e.graph_stroke_width!=null?String(e.graph_stroke_width):""} placeholder="1.5"
                @change=${a=>{const n=a.target.value;s({graph_stroke_width:n===""?void 0:Number(n)})}} />`)}
            ${e.graph_type==="area"?this._row("Fill opacity",r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                .value=${e.graph_fill_opacity!=null?String(e.graph_fill_opacity):""} placeholder="0.2"
                @change=${a=>{const n=a.target.value;s({graph_fill_opacity:n===""?void 0:Number(n)})}} />`):_}
          `:_}
          <div class="ec-subsection-title">Series</div>
          ${(e.graph_series??[]).map((a,n)=>r`
            <div class="ec-graph-series">
              <div class="ec-graph-series-header">
                <span class="ec-graph-series-num">Series ${n+1}</span>
                <div class="ec-graph-series-actions">
                  <button class="ec-btn-reorder" title="Move up" ?disabled=${n===0}
                    @click=${()=>{if(n===0)return;const l=[...e.graph_series??[]];[l[n-1],l[n]]=[l[n],l[n-1]],s({graph_series:l})}}>▲</button>
                  <button class="ec-btn-reorder" title="Move down" ?disabled=${n===(e.graph_series??[]).length-1}
                    @click=${()=>{const l=[...e.graph_series??[]];n>=l.length-1||([l[n],l[n+1]]=[l[n+1],l[n]],s({graph_series:l}))}}>▼</button>
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${()=>{const l=(e.graph_series??[]).filter((c,d)=>d!==n);s({graph_series:l.length?l:void 0})}}>✕</button>
                </div>
              </div>
              ${this._row("Entity",r`<ha-entity-picker .hass=${this.hass} .value=${a.entity??""} allow-custom-entity
                  @value-changed=${l=>{const c=[...e.graph_series??[]];c[n]={...c[n],entity:l.detail.value||void 0},s({graph_series:c})}}></ha-entity-picker>`)}
               ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${a.label??""} placeholder="(from entity)"
                  @change=${l=>{const c=[...e.graph_series??[]];c[n]={...c[n],label:l.target.value||void 0},s({graph_series:c})}} />`)}
              ${this._row("Color",this._colorPicker(`${o}-s${n}-col`,a.color,l=>{const c=[...e.graph_series??[]];c[n]={...c[n],color:l},s({graph_series:c})},{clearTitle:"Reset to palette color"}))}
              ${this._row("Stat period",r`<select class="ec-select" .value=${a.stat_period??""}
                  @change=${l=>{const c=[...e.graph_series??[]];c[n]={...c[n],stat_period:l.target.value||void 0},s({graph_series:c})}}>
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
                  @change=${l=>{const c=parseInt(l.target.value,10),d=[...e.graph_series??[]];d[n]={...d[n],stat_period_n:isNaN(c)||c<1?void 0:c},s({graph_series:d})}} />`):_}
              ${a.stat_period?this._row("Stat type",r`<select class="ec-select" .value=${a.stat_type??g("stat_type")??"sum"}
                  @change=${l=>{const c=[...e.graph_series??[]];c[n]={...c[n],stat_type:l.target.value},s({graph_series:c})}}>
                  <option value="sum"        .selected=${(a.stat_type??g("stat_type")??"sum")==="sum"}>Sum (total)</option>
                  <option value="difference" .selected=${a.stat_type==="difference"}>Difference</option>
                  <option value="mean"       .selected=${a.stat_type==="mean"}>Mean</option>
                  <option value="max"        .selected=${a.stat_type==="max"}>Maximum</option>
                  <option value="min"        .selected=${a.stat_type==="min"}>Minimum</option>
                </select>`):_}
            </div>
          `)}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>s({graph_series:[...e.graph_series??[],{}]})}>+ Series</button>
        `:_}

        ${e.type!=="svg"&&e.type!=="label"&&e.type!=="graph"&&e.type!=="blank"&&e.type!=="rule"?r`
          <div class="ec-subsection-title">HA Statistics integration</div>
          ${this._row("Period",r`<select class="ec-select" .value=${e.stat_period??""}
              @change=${a=>{const n=a.target.value,l=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(n);s({stat_period:n||void 0,stat_period_n:l?e.stat_period_n??void 0:void 0,stat_period_start:n==="custom"?e.stat_period_start??void 0:void 0,stat_period_end:n==="custom"?e.stat_period_end??void 0:void 0})}}>
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${e.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${e.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${e.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${e.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${e.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${e.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${e.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${e.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${e.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${e.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${e.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${e.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${e.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${e.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${e.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(e.stat_period)?this._row(e.stat_period==="last_n_minutes"?"Number of minutes":e.stat_period==="last_n_hours"?"Number of hours":e.stat_period==="last_n_days"?"Number of days":"Number of months",r`<input type="number" class="ec-input" min="1" step="1"
              .value=${String(e.stat_period_n??"")} placeholder="e.g. 3"
              @change=${a=>{const n=parseInt(a.target.value,10);s({stat_period_n:isNaN(n)||n<1?void 0:n})}} />`):_}
          ${e.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input" .value=${e.stat_period_start??""}
              @change=${a=>s({stat_period_start:a.target.value||void 0})} />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input" .value=${e.stat_period_end??""}
              @change=${a=>s({stat_period_end:a.target.value||void 0})} />`)}
          `:_}
          ${e.stat_period?this._row("Stat type",r`<select class="ec-select" .value=${e.stat_type??g("stat_type")??"sum"}
              @change=${a=>s({stat_type:a.target.value})}>
              <option value="sum"        .selected=${(e.stat_type??g("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${e.stat_type==="difference"}>Difference</option>
              <option value="mean"       .selected=${e.stat_type==="mean"}>Mean</option>
              <option value="max"        .selected=${e.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${e.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${e.stat_type==="count"}>Count</option>
              <option value="range"      .selected=${e.stat_type==="range"}>Range</option>
            </select>`):_}

          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${e.unit??""} placeholder="(from entity)"
              @change=${a=>s({unit:a.target.value})} />`)}
          ${this._row("Decimals",r`<input class="ec-input ec-input-num" type="number" min="0" max="6"
              .value=${e.decimals!=null?String(e.decimals):""} placeholder="auto"
              @change=${a=>{const n=a.target.value;s({decimals:n===""?void 0:Number(n)})}} />`)}
          ${this._row("Hide below",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.hide_below!=null?String(e.hide_below):""} placeholder="(always show)"
              @change=${a=>{const n=a.target.value;s({hide_below:n===""?void 0:Number(n)})}} />`)}
          ${this._displayUnit(e.entity,e.unit)?r`<p class="ec-hint">Enter in ${this._displayUnit(e.entity,e.unit)}</p>`:_}
          ${e.entity?.startsWith("virtual:")&&!e.time_until_layout?.length?this._row("Show trigger label",r`<input type="checkbox" .checked=${e.show_time_until_label??!1}
              @change=${a=>s({show_time_until_label:a.target.checked||void 0})} />`):_}
        `:_}

        ${e.type!=="blank"&&e.type!=="rule"?r`
          ${this._row("Align",r`<select class="ec-select" .value=${e.align??g("align")??"left"}
              @change=${a=>s({align:a.target.value})}>
              ${oe.map(a=>r`<option value=${a} .selected=${(e.align??g("align")??"left")===a}>${a}</option>`)}
            </select>`)}
          ${this._row("Use global text style",r`<input type="checkbox" .checked=${e.style===void 0}
              @change=${a=>{a.target.checked?s({style:void 0}):s({style:{}})}} />`)}
          ${e.style!==void 0?r`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`${o}-st`,e.style,a=>s({style:{...e.style,...a}}))}
          `:_}
        `:_}

        <div class="ec-subsection-title">Actions</div>
        ${this._actionRows({tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},a=>s(a))}
      </div>
    `}_renderCanvasPanel(){if(!this._config)return r``;const i=this._config.canvas??{};return r`
      <details class="ec-details">
        <summary>Canvas</summary>
        <div class="ec-details-body">

          ${this._row("Layout mode",r`<select class="ec-select"
              .value=${i.layout_mode??"precision"}
              @change=${t=>this._setLayoutMode(t.target.value)}
            >
              <option value="precision" .selected=${(i.layout_mode??"precision")==="precision"}>precision</option>
              <option value="grid" .selected=${i.layout_mode==="grid"}>grid</option>
            </select>`)}

          ${i.layout_mode==="grid"?r`
            ${this._row("Grid columns",r`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(i.grid?.columns??10)}
                @change=${t=>{const e=Math.max(1,Number(t.target.value)||1);this._updateCanvas({grid:{...i.grid??{columns:10,rows:15},columns:e}})}}
              />`)}

            ${this._row("Grid rows",r`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(i.grid?.rows??15)}
                @change=${t=>{const e=Math.max(1,Number(t.target.value)||1);this._updateCanvas({grid:{...i.grid??{columns:10,rows:15},rows:e}})}}
              />`)}

            ${this._row("Card padding (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
                .value=${String(i.grid?.padding??0)}
                @change=${t=>{const e=Math.max(0,Number(t.target.value)||0);this._updateCanvas({grid:{...i.grid??{columns:10,rows:15},padding:e}})}}
              />`)}
          `:_}

          ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
              .value=${i.width!=null?String(i.width):""}
              placeholder="image width"
              @change=${t=>{const e=t.target.value;this._updateCanvas({width:e===""?void 0:Number(e)})}}
            />`)}

          ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
              .value=${i.height!=null?String(i.height):""}
              placeholder="from aspect"
              @change=${t=>{const e=t.target.value;this._updateCanvas({height:e===""?void 0:Number(e)})}}
            />`)}

          ${this._row("Fit",r`<select class="ec-select"
              .value=${i.fit??g("background_fit")??"cover"}
              @change=${t=>this._updateCanvas({fit:t.target.value})}
            >
              <option value="cover" .selected=${(i.fit??g("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${i.fit==="contain"}>contain</option>
            </select>`)}

          <div class="ec-subsection-title">Extend (px)</div>

          ${this._row("Top",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.extend?.top!=null?String(i.extend.top):""}
              placeholder="0"
              @change=${t=>{const e=t.target.value;this._updateCanvas({extend:{...i.extend,top:e===""?void 0:Number(e)}})}}
            />`)}

          ${this._row("Right",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.extend?.right!=null?String(i.extend.right):""}
              placeholder="0"
              @change=${t=>{const e=t.target.value;this._updateCanvas({extend:{...i.extend,right:e===""?void 0:Number(e)}})}}
            />`)}

          ${this._row("Bottom",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.extend?.bottom!=null?String(i.extend.bottom):""}
              placeholder="0"
              @change=${t=>{const e=t.target.value;this._updateCanvas({extend:{...i.extend,bottom:e===""?void 0:Number(e)}})}}
            />`)}

          ${this._row("Left",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${i.extend?.left!=null?String(i.extend.left):""}
              placeholder="0"
              @change=${t=>{const e=t.target.value;this._updateCanvas({extend:{...i.extend,left:e===""?void 0:Number(e)}})}}
            />`)}

          <div class="ec-subsection-title">Canvas box</div>
          ${this._boxRows("cv",i.box??{},t=>this._updateCanvas({box:{...i.box,...t}}))}

          ${this._renderBackgroundControls()}
        </div>
      </details>
    `}_renderBackgroundControls(){if(!this._config)return r``;const i=this._config.background??{},t=i.source??"auto";return r`
          <div class="ec-subsection-title">Background</div>

          ${this._row("Source",r`<select class="ec-select"
              .value=${t}
              @change=${e=>this._updateBackground({source:e.target.value})}
            >
              <option value="auto" .selected=${t==="auto"}>auto (sun)</option>
              <option value="day" .selected=${t==="day"}>day</option>
              <option value="night" .selected=${t==="night"}>night</option>
              <option value="entity" .selected=${t==="entity"}>entity</option>
            </select>`)}

          ${t==="auto"||t===void 0?this._row("Sun entity",r`<ha-entity-picker
                  .hass=${this.hass}
                  .value=${i.sun_entity??""}
                  allow-custom-entity
                  @value-changed=${e=>this._updateBackground({sun_entity:e.detail.value})}
                ></ha-entity-picker>`):_}

          ${t==="entity"?this._row("Mode entity",r`<ha-entity-picker
                  .hass=${this.hass}
                  .value=${i.mode_entity??""}
                  allow-custom-entity
                  @value-changed=${e=>this._updateBackground({mode_entity:e.detail.value})}
                ></ha-entity-picker>`):_}

          ${this._row("Background fit",r`<select class="ec-select"
              .value=${i.fit??g("background_fit")??"cover"}
              @change=${e=>this._updateBackground({fit:e.target.value})}
            >
              <option value="cover" .selected=${(i.fit??g("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${i.fit==="contain"}>contain</option>
            </select>`)}

          ${this._row("EV count",r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${this._config.ev_count!=null?String(this._config.ev_count):""}
              placeholder="0"
              @change=${e=>{const s=e.target.value;this._emit({...this._config,ev_count:s===""?void 0:Number(s)})}}
            />`)}

          <div class="ec-subsection-title">Images</div>

          ${["day","night"].map(e=>r`
            <div class="ec-subsection-title ec-subsection-title--minor">${e}</div>
            ${["0","1","2"].map(s=>this._row(`${e} / ${s} EV`,r`<input class="ec-input" type="text"
                .value=${i.images?.[e]?.[s]??""}
                placeholder="https://…"
                @change=${o=>this._setBgImage(e,s,o.target.value)}
              />`))}
          `)}
    `}_renderTemplatesPanel(){return this._config?r`
      <details class="ec-details">
        <summary>Templates</summary>
        <div class="ec-details-body">

          <div class="ec-subsection-title">Export</div>
          ${this._row("Name",r`<input class="ec-input" type="text"
              .value=${this._templateName}
              placeholder="My Energy Dashboard"
              @input=${i=>{this._templateName=i.target.value}}
            />`)}
          <button class="ec-btn-add" style="width:100%;margin-bottom:12px;"
            @click=${()=>{if(!this._config)return;const i=po(this._config,this._templateName||"Energy Canvas Template");uo(i)}}
          >⬇ Download template</button>

          <div class="ec-subsection-title">Import</div>
          <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
            Importing will replace the entire card configuration.
          </p>
          <input type="file" accept=".json,application/json"
            style="display:none"
            id="ec-template-import"
            @change=${i=>{const t=i.target.files?.[0];if(!t||!this._config)return;const e=new FileReader;e.onload=s=>{const o=s.target?.result,{template:a,error:n}=ho(o);if(n||!a){this._templateError=n??"Unknown error.";return}window.confirm(`Import "${a.name}"?

This will replace your entire card configuration.`)&&(this._templateError="",this._emit(_o(a,this._config.type)))},e.readAsText(t),i.target.value=""}}
          />
          <button class="ec-btn-add" style="width:100%;"
            @click=${()=>{this.shadowRoot?.querySelector("#ec-template-import")?.click()}}
          >⬆ Import from file</button>
          ${this._templateError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._templateError}</p>`:_}

        </div>
      </details>
    `:r``}_renderVirtualsPanel(){if(!this._config)return r``;const i=this._virtuals(),t=i[this._selVirtual],e=this._selVirtual,s=[{value:"add",label:"Add (sum all)"},{value:"subtract",label:"Subtract (first − rest)"},{value:"mean",label:"Mean (average)"},{value:"signed_net",label:"Signed net (input[0] − input[1])"},{value:"time_until",label:"Time Until"}];return r`
      <details class="ec-details">
        <summary>Virtual Entities</summary>
        <div class="ec-details-body">

          <div class="ec-section-header">
            <span></span>
            <div style="display:flex;gap:4px;">
              ${this._virtualClipboard?r`<button class="ec-btn-add" @click=${this._pasteVirtual} title="Paste virtual">⎘ Paste</button>`:_}
              <button class="ec-btn-add" @click=${this._addVirtual}>+ Virtual</button>
            </div>
          </div>
          ${i.length===0?r`<p class="ec-empty">No virtuals — click "+ Virtual" to add one.</p>`:i.map((o,a)=>r`
              <div
                class="ec-list-row${a===e?" selected":""}"
                @click=${()=>{this._selVirtual=a}}
              >
                <span class="ec-list-label">${o.name||o.id}</span>
                <button class="ec-btn-remove"
                  @click=${n=>{n.stopPropagation(),this._copyVirtual(a)}}
                  title="Copy">⎘</button>
                <button class="ec-btn-remove"
                  @click=${n=>{n.stopPropagation(),this._removeVirtual(a)}}
                  title="Remove">✕</button>
              </div>
            `)}

          ${t!==void 0?r`
            <div style="margin-top:8px;">

              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name}
                  @change=${o=>this._updateVirtual(e,{name:o.target.value})}
                />`)}


              ${this._row("Operation",r`<select class="ec-select"
                  .value=${t.op}
                  @change=${o=>this._updateVirtual(e,{op:o.target.value})}
                >
                  ${s.map(o=>r`<option value=${o.value} .selected=${t.op===o.value}>${o.label}</option>`)}
                </select>`)}

              ${t.op!=="time_until"?this._row("Unit override",r`<input class="ec-input" type="text" .value=${t.unit??""}
                  placeholder="(from inputs[0])"
                  @change=${o=>{const a=o.target.value;this._updateVirtual(e,{unit:a||void 0})}}
                />`):_}

              ${t.op==="time_until"?r`
                <div class="ec-subsection-title">Time Until settings</div>

                ${this._row("Mode",r`<select class="ec-select"
                    .value=${t.mode??g("virtual_mode")??"percent"}
                    @change=${o=>this._updateVirtual(e,{mode:o.target.value})}
                  >
                    <option value="percent"  .selected=${(t.mode??g("virtual_mode")??"percent")==="percent"}>% based</option>
                    <option value="absolute" .selected=${t.mode==="absolute"}>Absolute value</option>
                  </select>`)}

                ${this._row((t.mode??g("virtual_mode")??"percent")==="percent"?"% entity":"Current value entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.value_entity??t.pct_entity??""}
                    allow-custom-entity
                    @value-changed=${o=>this._updateVirtual(e,{value_entity:o.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.rate_entity??t.power_entity??""}
                    allow-custom-entity
                    @value-changed=${o=>this._updateVirtual(e,{rate_entity:o.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate unit override",r`<input class="ec-input" type="text"
                    .value=${t.rate_unit_override??""}
                    placeholder="auto-detect from entity"
                    @change=${o=>{const a=o.target.value;this._updateVirtual(e,{rate_unit_override:a||void 0})}}
                  />`)}
                <p class="ec-hint">Auto-detected from the rate entity; only set this if auto-detection fails.</p>

                ${this._row("Recalc above (rate)",r`<input class="ec-input" type="number" step="any"
                    .value=${t.recalc_above!=null?String(t.recalc_above):""}
                    placeholder="e.g. 100"
                    @change=${o=>{const a=parseFloat(o.target.value);this._updateVirtual(e,{recalc_above:Number.isFinite(a)?a:void 0})}}
                  />`)}

                ${this._row("Recalc below (rate)",r`<input class="ec-input" type="number" step="any"
                    .value=${t.recalc_below!=null?String(t.recalc_below):""}
                    placeholder="e.g. -160"
                    @change=${o=>{const a=parseFloat(o.target.value);this._updateVirtual(e,{recalc_below:Number.isFinite(a)?a:void 0})}}
                  />`)}
                <p class="ec-hint">Only recompute Time Until when the raw rate reading is above and/or below these (signed, in the rate entity's units). Inside the band the last value is frozen. Leave blank to always recalculate.</p>

                ${this._row("Capacity entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.capacity_entity??""}
                    allow-custom-entity
                    @value-changed=${o=>this._updateVirtual(e,{capacity_entity:o.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row(((t.mode??g("virtual_mode")??"percent")==="percent","Capacity (Manual)"),r`<input class="ec-input" type="number" min="0" step="0.1"
                    .value=${String(t.capacity??t.capacity_kwh??"")}
                    placeholder="e.g. 13.5"
                    @change=${o=>{const a=parseFloat(o.target.value);this._updateVirtual(e,{capacity:Number.isFinite(a)?a:void 0})}}
                  />`)}

                ${this._row("Maximum label",r`<input class="ec-input" type="text"
                    .value=${t.label_max??t.label_full??""}
                    placeholder="Full"
                    @change=${o=>{const a=o.target.value;this._updateVirtual(e,{label_max:a||void 0})}}
                  />`)}

                ${this._row("Minimum label",r`<input class="ec-input" type="text"
                    .value=${t.label_min??t.label_empty??""}
                    placeholder="Empty"
                    @change=${o=>{const a=o.target.value;this._updateVirtual(e,{label_min:a||void 0})}}
                  />`)}

                <div class="ec-subsection-title">Extra triggers (max 2)</div>
                ${(t.triggers??[]).map((o,a)=>r`
                  <div class="ec-row">
                    <input class="ec-input ec-input-num" type="number"
                      step="${(t.mode??g("virtual_mode")??"percent")==="percent"?"1":"any"}"
                      .value=${String(o.percent??o.value)}
                      placeholder="${(t.mode??g("virtual_mode")??"percent")==="percent"?"%":"value"}"
                      @change=${n=>{const l=parseFloat(n.target.value),c=[...t.triggers??[]];c[a]={...c[a],value:Number.isFinite(l)?l:o.value},this._updateVirtual(e,{triggers:c})}}
                    />
                    <input class="ec-input" type="text" .value=${o.label}
                      placeholder="Label"
                      style="flex:1"
                      @change=${n=>{const l=[...t.triggers??[]];l[a]={...l[a],label:n.target.value},this._updateVirtual(e,{triggers:l})}}
                    />
                    <button class="ec-btn-remove" title="Remove trigger"
                      @click=${()=>{const n=(t.triggers??[]).filter((l,c)=>c!==a);this._updateVirtual(e,{triggers:n.length?n:void 0})}}>✕</button>
                  </div>
                `)}
                ${(t.triggers??[]).length<2?r`
                  <button class="ec-btn-add" style="margin-top:6px"
                    @click=${()=>{const o=[...t.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(e,{triggers:o})}}>+ Trigger</button>
                `:_}
                <p class="ec-hint" style="margin-top:10px">Auto-switches to the nearest trigger ahead in the current direction.</p>
              `:r`
                <div class="ec-subsection-title">Inputs (in order)</div>
                ${t.inputs.map((o,a)=>r`
                  <div class="ec-row">
                    <label class="ec-label-col">${a+1}</label>
                    <div class="ec-input-col" style="display:flex;gap:4px;align-items:center;">
                      <ha-entity-picker
                        style="flex:1"
                        .hass=${this.hass}
                        .value=${o}
                        allow-custom-entity
                        @value-changed=${n=>this._updateVirtualInput(e,a,n.detail.value)}
                      ></ha-entity-picker>
                      <button class="ec-btn-remove"
                        @click=${()=>this._removeVirtualInput(e,a)}
                        title="Remove input">✕</button>
                    </div>
                  </div>
                `)}
                <button class="ec-btn-add" style="margin-top:4px;"
                  @click=${()=>this._addVirtualInput(e)}>+ Input</button>
              `}

            </div>
          `:_}

        </div>
      </details>
    `}_renderZonesPanel(){if(!this._config)return r``;const i=this._zones(),t=i[this._selZone],e=this._selZone;return r`
      <details class="ec-details">
        <summary>Clickable Zones</summary>
        <div class="ec-details-body">
          <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
            Invisible hotspot regions that trigger actions when tapped. Drag the dashed handles in the preview to reposition.
          </p>

          <div class="ec-section-header">
            <span></span>
            <button class="ec-btn-add" @click=${this._addZone}>+ Clickable Zone</button>
          </div>
          ${i.length===0?r`<p class="ec-empty">No clickable zones — click "+ Clickable Zone" to add one.</p>`:i.map((s,o)=>r`
              <div
                class="ec-list-row${o===e?" selected":""}"
                @click=${()=>{this._selZone=o}}
              >
                <span class="ec-list-label">${s.name??s.id}</span>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeZone(o)}}
                  title="Remove">✕</button>
              </div>
            `)}

          ${t!==void 0?r`
            <div style="margin-top:8px;">

              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${s=>this._updateZone(e,{name:s.target.value||void 0})}
                />`)}

              ${this._row("X (px)",r`<input class="ec-input ec-input-num" type="number"
                  .value=${String(t.position.x)}
                  @change=${s=>this._updateZone(e,{position:{...t.position,x:Number(s.target.value)}})}
                />`)}

              ${this._row("Y (px)",r`<input class="ec-input ec-input-num" type="number"
                  .value=${String(t.position.y)}
                  @change=${s=>this._updateZone(e,{position:{...t.position,y:Number(s.target.value)}})}
                />`)}

              ${this._row("Anchor",r`<select class="ec-select"
                  .value=${t.anchor??g("anchor")??"top-left"}
                  @change=${s=>this._updateZone(e,{anchor:s.target.value})}
                >
                  ${Se.map(s=>r`<option value=${s} .selected=${(t.anchor??g("anchor")??"top-left")===s}>${s}</option>`)}
                </select>`)}

              ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.width)}
                  @change=${s=>this._updateZone(e,{width:Math.max(1,Number(s.target.value))})}
                />`)}

              ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.height)}
                  @change=${s=>this._updateZone(e,{height:Math.max(1,Number(s.target.value))})}
                />`)}

              ${this._row("Overlay color",r`<div class="ec-color-row">
                  <input class="ec-input" type="text" .value=${t.color??""}
                    placeholder="rgba(0,212,255,0.15)"
                    style="flex:1"
                    @change=${s=>{const o=s.target.value;this._updateZone(e,{color:o||void 0})}}
                  />
                  <button class="ec-btn-clear" @click=${()=>this._updateZone(e,{color:void 0})} title="Clear">✕</button>
                </div>`)}

              ${this._row("Radius (px)",r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${t.radius!=null?String(t.radius):""}
                  placeholder="0"
                  @change=${s=>{const o=s.target.value;this._updateZone(e,{radius:o===""?void 0:Number(o)})}}
                />`)}

              <div class="ec-subsection-title">Actions</div>
              ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},s=>this._updateZone(e,s))}

            </div>
          `:_}

        </div>
      </details>
    `}_renderFlowsPanel(){if(!this._config)return r``;const i=this._flows(),t=i[this._selFlow],e=["dashes","dots","fluid","particles"],s=["top","right","bottom","left","center"],o=t?.speed_min_duration??g("flow_speed_min_duration")??5,a=t?.speed_max_duration??g("flow_speed_max_duration")??1;return r`
      <details class="ec-details">
        <summary>Animated Flow Lines</summary>
        <div class="ec-details-body">

          <!-- Flow list -->
          <div class="ec-section-header">
            <span></span>
            <button class="ec-btn-add" @click=${this._addFlow}>+ Flow Line</button>
          </div>
          ${i.length===0?r`<p class="ec-empty">No animated flow lines — click "+ Flow Line" to add one.</p>`:i.map((n,l)=>r`
              <div
                class="ec-list-row${l===this._selFlow?" selected":""}"
                @click=${()=>{this._selFlow=l,this._selPoint=-1}}
              >
                <span class="ec-list-label">${n.name??n.id}</span>
                <button class="ec-btn-remove"
                  @click=${c=>{c.stopPropagation(),this._removeFlow(l)}}
                  title="Remove flow">✕</button>
              </div>
            `)}

          <!-- Selected-flow panel -->
          ${t!==void 0?r`
            <div style="margin-top:8px;">

              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${n=>this._updateFlow(this._selFlow,{name:n.target.value})}
                />`)}

              ${this._row("Entity",t.entity?.startsWith("virtual:")?r`<div style="display:flex;gap:4px;align-items:center;">
                      <span class="ec-input" style="flex:1;opacity:0.8;">
                        ${this._virtuals().find(n=>`virtual:${n.id}`===t.entity)?.name??t.entity}
                      </span>
                      <button class="ec-btn-clear"
                        @click=${()=>this._updateFlow(this._selFlow,{entity:void 0})}
                        title="Switch to real entity">✕</button>
                    </div>`:r`<ha-entity-picker
                      .hass=${this.hass}
                      .value=${t.entity??""}
                      allow-custom-entity
                      @value-changed=${n=>this._updateFlow(this._selFlow,{entity:n.detail.value})}
                    ></ha-entity-picker>`)}
              ${!t.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
                  .value=${""}
                  @change=${n=>{const l=n.target.value;l&&this._updateFlow(this._selFlow,{entity:l}),n.target.value=""}}
                >
                  <option value="">(pick a virtual)</option>
                  ${this._virtuals().map(n=>r`<option value=${"virtual:"+n.id}>${n.name}</option>`)}
                </select>`):_}

              ${this._row(`Min display power (${this._config?.defaults?.power_unit??"W"})`,r`<input class="ec-input ec-input-num" type="number" min="0" step="1"
                  .value=${t.min_power!=null?String(t.min_power):""}
                  placeholder="e.g. 5"
                  title="Hide flow when entity value is below this threshold — in your global power unit"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{min_power:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row(`Slowest animation value (${this._config?.defaults?.power_unit??"W"})`,r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${t.speed_min_value!=null?String(t.speed_min_value):""}
                  placeholder="e.g. 100"
                  title="Entity value at which animation is slowest"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{speed_min_value:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row(`Fastest animation value (${this._config?.defaults?.power_unit??"W"})`,r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${t.speed_max_value!=null?String(t.speed_max_value):""}
                  placeholder="e.g. 5000"
                  title="Entity value at which animation is fastest"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{speed_max_value:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row("Speed",r`<div class="ec-dual-range">
                  <span class="ec-dual-range-label">Slowest</span>
                  <div class="ec-dual-range-track">
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(o)}
                      style="direction:rtl"
                      @input=${n=>{const l=Number(n.target.value),c=t.speed_max_duration??g("flow_speed_max_duration")??1;this._updateFlow(this._selFlow,{speed_min_duration:Math.max(l,c)})}}
                    />
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(a)}
                      style="direction:rtl"
                      @input=${n=>{const l=Number(n.target.value),c=t.speed_min_duration??g("flow_speed_min_duration")??5;this._updateFlow(this._selFlow,{speed_max_duration:Math.min(l,c)})}}
                    />
                  </div>
                  <span class="ec-dual-range-label">Fastest</span>
                </div>`)}

              ${this._row("Invert direction",r`<input type="checkbox"
                  .checked=${t.invert??!1}
                  @change=${n=>{const l=n.target.checked;this._updateFlow(this._selFlow,{invert:l||void 0})}}
                />`)}

              ${this._row("Style",r`<select class="ec-select"
                  .value=${t.style??g("flow_style")??"dashes"}
                  @change=${n=>this._updateFlow(this._selFlow,{style:n.target.value})}
                >
                  ${e.map(n=>r`<option value=${n} .selected=${(t.style??g("flow_style")??"dashes")===n}>${n}</option>`)}
                </select>`)}

              ${this._row("Forward color",this._colorPicker(`flow-${this._selFlow}-fwd`,t.forward_color??t.color,n=>this._updateFlow(this._selFlow,{forward_color:n})))}

              ${this._row("Reverse color",this._colorPicker(`flow-${this._selFlow}-rev`,t.reverse_color,n=>this._updateFlow(this._selFlow,{reverse_color:n})))}

              ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.width!=null?String(t.width):""}
                  placeholder="3"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{width:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row("Duration (s)",r`<input class="ec-input ec-input-num" type="number" min="0.1" step="0.1"
                  .value=${t.duration!=null?String(t.duration):""}
                  placeholder="2"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{duration:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row("Particle count",r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${t.particle_count!=null?String(t.particle_count):""}
                  placeholder="6"
                  @change=${n=>{const l=n.target.value;this._updateFlow(this._selFlow,{particle_count:l===""?void 0:Number(l)})}}
                />`)}

              ${this._row("Curve",r`<select class="ec-select"
                  .value=${t.curve??g("flow_curve")??"straight"}
                  @change=${n=>this._updateFlow(this._selFlow,{curve:n.target.value})}
                >
                  <option value="straight" .selected=${(t.curve??g("flow_curve")??"straight")==="straight"}>straight</option>
                  <option value="rounded" .selected=${t.curve==="rounded"}>rounded</option>
                </select>`)}

              <!-- Points -->
              <div class="ec-subsection-title">Points</div>
              ${t.points.map((n,l)=>{const c=n.card!=null?"card":"free",d=l===this._selPoint;return r`
                  <div class="ec-point-row${d?" selected":""}" @click=${()=>{this._selPoint=l}}>
                    <div class="ec-point-row-header">
                      <span class="ec-list-label">Point ${l+1}</span>
                      <button class="ec-btn-reorder" ?disabled=${l===0}
                        @click=${p=>{p.stopPropagation(),this._reorderFlowPoint(this._selFlow,l,-1)}}
                        title="Move up">▲</button>
                      <button class="ec-btn-reorder" ?disabled=${l===t.points.length-1}
                        @click=${p=>{p.stopPropagation(),this._reorderFlowPoint(this._selFlow,l,1)}}
                        title="Move down">▼</button>
                      <button class="ec-btn-remove"
                        @click=${p=>{p.stopPropagation(),this._removeFlowPoint(this._selFlow,l)}}
                        title="Remove">✕</button>
                    </div>

                    ${this._row("Kind",r`<select class="ec-select"
                        .value=${c}
                        @change=${p=>this._setPointKind(this._selFlow,l,p.target.value)}
                      >
                        <option value="free" .selected=${c==="free"}>Free (x/y)</option>
                        <option value="card" .selected=${c==="card"}>Card</option>
                      </select>`)}

                    ${c==="card"?r`
                      ${this._row("Card",r`<select class="ec-select"
                          .value=${n.card??""}
                          @change=${p=>this._updateFlowPoint(this._selFlow,l,{card:p.target.value})}
                        >
                          ${this._config.cards.map(p=>r`
                            <option value=${p.id} .selected=${n.card===p.id}>${p.name??p.id}</option>
                          `)}
                        </select>`)}

                      ${this._row("Side",r`<select class="ec-select"
                          .value=${n.side??"center"}
                          @change=${p=>this._updateFlowPoint(this._selFlow,l,{side:p.target.value})}
                        >
                          ${s.map(p=>r`<option value=${p} .selected=${(n.side??"center")===p}>${p}</option>`)}
                        </select>`)}
                    `:r`
                      ${this._row("X",r`<input class="ec-input ec-input-num" type="number"
                          .value=${String(n.x??0)}
                          @change=${p=>this._updateFlowPoint(this._selFlow,l,{x:Number(p.target.value)})}
                        />`)}

                      ${this._row("Y",r`<input class="ec-input ec-input-num" type="number"
                          .value=${String(n.y??0)}
                          @change=${p=>this._updateFlowPoint(this._selFlow,l,{y:Number(p.target.value)})}
                        />`)}
                    `}
                  </div>
                `})}
              <button class="ec-btn-add" style="margin-top:4px;"
                @click=${()=>this._addFlowPoint(this._selFlow)}>+ Point</button>
            </div>
          `:_}
        </div>
      </details>
    `}_actionRows(i,t){const e=(s,o)=>{const a=i[s],n=a?.action??"none";return r`
        ${this._row(o,r`<select class="ec-select"
          .value=${n}
          @change=${l=>{const c=l.target.value;t(c==="none"?{[s]:void 0}:{[s]:{...a??{},action:c}})}}
        >
          <option value="none"           .selected=${n==="none"}>none</option>
          <option value="expand-card"   .selected=${n==="expand-card"}>expand-card</option>
          <option value="open-extended" .selected=${n==="open-extended"}>open-extended</option>
          <option value="more-info"     .selected=${n==="more-info"}>more-info</option>
          <option value="toggle"        .selected=${n==="toggle"}>toggle</option>
          <option value="navigate"      .selected=${n==="navigate"}>navigate</option>
          <option value="url"           .selected=${n==="url"}>url</option>
          <option value="call-service"  .selected=${n==="call-service"}>call-service</option>
          <option value="assist"        .selected=${n==="assist"}>assist</option>
          <option value="fire-dom-event" .selected=${n==="fire-dom-event"}>fire-dom-event</option>
        </select>`)}
        ${(n==="more-info"||n==="toggle")&&a?this._row("Entity",r`<ha-entity-picker
                .hass=${this.hass}
                .value=${a.entity??""}
                allow-custom-entity
                @value-changed=${l=>t({[s]:{...a,entity:l.detail.value||void 0}})}
              ></ha-entity-picker>`):_}
        ${n==="navigate"&&a?this._row("Path",r`<input class="ec-input" type="text" .value=${a.navigation_path??""}
                placeholder="/lovelace/0"
                @change=${l=>t({[s]:{...a,navigation_path:l.target.value}})}
              />`):_}
        ${n==="url"&&a?this._row("URL",r`<input class="ec-input" type="text" .value=${a.url_path??""}
                placeholder="https://…"
                @change=${l=>t({[s]:{...a,url_path:l.target.value}})}
              />`):_}
        ${n==="call-service"&&a?this._row("Service",r`<input class="ec-input" type="text" .value=${a.service??""}
                placeholder="domain.service"
                @change=${l=>t({[s]:{...a,service:l.target.value}})}
              />`):_}
        ${n==="open-extended"&&a?this._row("Popover card",r`<select class="ec-select"
                .value=${a.extended_card_id??""}
                @change=${l=>t({[s]:{...a,extended_card_id:l.target.value||void 0}})}
              >
                <option value="">(select)</option>
                ${(this._config?.extended_cards??[]).map(l=>r`
                  <option value=${l.id} .selected=${a.extended_card_id===l.id}>${l.name??l.id}</option>
                `)}
              </select>`):_}
      `};return r`
      ${e("tap_action","Tap")}
      ${e("hold_action","Hold")}
      ${e("double_tap_action","Double tap")}
    `}_openGGPicker(i,t,e=!1){this._ggTarget={ci:i,fi:t,isExtended:e},this._ggOpen=!0}_pickGG(i,t){if(!this._ggTarget)return;const{ci:e,fi:s,isExtended:o}=this._ggTarget,a={type:i,...t};o?this._updateExtField(e,s,a):this._updateField(e,s,a),this._ggOpen=!1,this._ggTarget=null}_renderEmbeddedCardsPanel(){if(!this._config)return r``;const i=this._embCards(),t=i[this._selEmbCard],e=this._selEmbCard;return r`
      <details class="ec-details">
        <summary>Embedded External Cards</summary>
        <div class="ec-details-body">
          <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
            Embed any HA Lovelace card as a positioned canvas element. Drag the ◈ handles in the preview to reposition.
          </p>

          <div class="ec-section-header">
            <span></span>
            <button class="ec-btn-add" @click=${this._addEmbCard}>+ Embedded External Card</button>
          </div>
          ${i.length===0?r`<p class="ec-empty">No embedded external cards — click "+ Embedded External Card" to add one.</p>`:i.map((s,o)=>r`
              <div
                class="ec-list-row${o===e?" selected":""}"
                @click=${()=>{this._selEmbCard=o}}
              >
                <span class="ec-list-label">${s.name??s.id}</span>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeEmbCard(o)}}
                  title="Remove">✕</button>
              </div>
            `)}

          ${t!==void 0?r`
            <div style="margin-top:8px;">

              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${s=>this._updateEmbCard(e,{name:s.target.value||void 0})}
                />`)}

              ${this._row("Card Type",r`<div style="display:flex;gap:6px;align-items:center;min-width:0;">
                  <span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                    ${t.card_config?.type?String(t.card_config.type):r`<span style="color:#555;font-style:italic;">not set</span>`}
                  </span>
                  <button class="ec-btn-add" style="white-space:nowrap;padding:2px 8px;font-size:11px;"
                    @click=${()=>this._openEmbPicker(e)}>Change…</button>
                </div>`)}

              ${this._gridGeom()?_:this._row("Anchor",r`<select class="ec-select"
                  .value=${t.anchor??g("anchor")??"top-left"}
                  @change=${s=>this._updateEmbCard(e,{anchor:s.target.value})}
                >
                  ${Se.map(s=>r`<option value=${s} .selected=${(t.anchor??g("anchor")??"top-left")===s}>${s}</option>`)}
                </select>`)}

              ${this._gridGeom()?this._row("Columns (span)",r`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
                  .value=${String(t.grid_span??1)}
                  @change=${s=>{const o=this._gridGeom();if(!o)return;const a=Math.max(1,Math.min(o.cols,Number(s.target.value)||1)),n=Math.max(8,a*o.cellW-o.padding);this._updateEmbCard(e,{grid_span:a,width:n})}}
                />`):_}

              ${this._row("Width (px)",r`<input class="ec-input ec-input-num" type="number" min="20"
                  .value=${String(t.width)}
                  @change=${s=>this._updateEmbCard(e,{width:Number(s.target.value)})}
                />`)}

              ${this._row("Height (px)",r`<input class="ec-input ec-input-num" type="number" min="20"
                  .value=${t.height!=null?String(t.height):""}
                  placeholder="auto"
                  @change=${s=>{const o=s.target.value;this._updateEmbCard(e,{height:o===""?void 0:Number(o)})}}
                />`)}

              ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent??!1}
                  @change=${s=>this._updateEmbCard(e,{transparent:s.target.checked})}
                />`)}

              <div style="margin-top:8px;display:flex;gap:6px;">
                <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker(e)}>
                  ${t.card_config?.type?"Change Type":"Pick Card Type"}
                </button>
                <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor(e)}>
                  Edit Config…
                </button>
              </div>
            </div>
          `:_}
        </div>
      </details>
    `}_renderEmbEditorModal(){if(!this._embEditorOpen)return _;const i=!!this._embNativeEditor,t=this._embCards()[this._embEditorIdx],e=t?String(t.card_config?.type??""):"";return r`
      <div class="ec-lib-backdrop" @click=${this._closeEmbEditor}></div>
      <div class="ec-lib-modal" style="width:min(580px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">${e||"Embedded Card"} — Config</span>
          <div style="display:flex;align-items:center;gap:8px;">
            ${i?r`
              <button class="ec-btn-clear" style="font-size:11px;padding:3px 10px;border-radius:4px;"
                @click=${()=>{this._embNativeEditor=null}}>
                Use JSON
              </button>`:_}
            <button class="ec-btn-clear" @click=${this._closeEmbEditor}>✕</button>
          </div>
        </div>

        ${i?r`
          <div id="emb-native-slot"
            style="padding:12px 16px;max-height:62vh;overflow-y:auto;box-sizing:border-box;"
            @config-changed=${s=>s.stopPropagation()}
          ></div>
          <div style="display:flex;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-add" style="padding:6px 18px;" @click=${this._closeEmbEditor}>Done</button>
          </div>
        `:r`
          <div style="padding:12px 16px;">
            <p style="font-size:12px;color:#888;margin:0 0 8px;">
              JSON object — <code style="color:#5aadcc">"type"</code> plus card-specific properties.
              ${!i&&e?r`<span style="color:#c87aff;"> (no visual editor available for this card type)</span>`:_}
            </p>
            <textarea
              style="width:100%;box-sizing:border-box;min-height:220px;font-family:monospace;font-size:13px;background:#060e18;color:#c8d8e8;border:1px solid rgba(0,212,255,0.25);border-radius:6px;padding:10px;resize:vertical;outline:none;"
              .value=${this._embEditorYaml}
              @input=${s=>{this._embEditorYaml=s.target.value}}
              spellcheck="false"
            ></textarea>
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-clear" style="padding:6px 14px;border-radius:5px;" @click=${this._closeEmbEditor}>Cancel</button>
            <button class="ec-btn-add" style="padding:6px 16px;" @click=${this._saveEmbEditorYaml}>Save</button>
          </div>
        `}
      </div>
    `}_renderEmbPickerModal(){if(!this._embPickerOpen)return _;const i=window.customCards??[],t=vo.map(c=>({...c,source:"Built-in"})),e=i.map(c=>({type:c.type.startsWith("custom:")?c.type:`custom:${c.type}`,name:c.name??c.type,description:c.description,source:"Custom"})),s=new Set(t.map(c=>c.type)),o=[...t,...e.filter(c=>!s.has(c.type))],a=this._embPickerSearch.trim().toLowerCase(),n=a?o.filter(c=>c.name.toLowerCase().includes(a)||c.type.toLowerCase().includes(a)):o,l=o.some(c=>c.type===a||c.name.toLowerCase()===a);return r`
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
          ${n.map(c=>r`
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
          ${a&&!l?r`
            <div class="ec-list-row" style="cursor:pointer;padding:8px 10px;border-top:1px solid rgba(255,255,255,0.06);margin-top:4px;"
              @click=${()=>void this._pickEmbCardType(a)}>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;color:#c8d8e8;">Use "<strong>${a}</strong>"</div>
                <div style="font-size:11px;color:#666;">Enter type manually</div>
              </div>
            </div>
          `:_}
        </div>
      </div>
    `}_renderFlowCompleteModal(){if(!this._showFlowCompleteModal)return _;const i=this._flows()[this._pendingFlowIdx]?.name??"Flow";return r`
      <div class="ec-lib-backdrop"></div>
      <div class="ec-lib-modal" style="width:min(420px,92vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Complete Flow Configuration</span>
        </div>
        <div style="padding:16px 20px;line-height:1.5;">
          <p style="margin:0 0 12px;">
            <strong>${i}</strong> was added. To set the entity, direction, and style,
            complete its configuration in the <strong>Flows</strong> section below.
          </p>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:0 20px 16px;">
          <button class="ec-btn-add" @click=${()=>this._goToFlow()}>Take Me There</button>
          <button class="ec-btn-align" @click=${()=>{this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1}}>Close</button>
        </div>
      </div>
    `}_renderGGModal(){if(!this._ggOpen)return _;const i=n=>r`<img class="ec-lib-preview" src="${yi+n}" alt=""
      @error=${l=>{const c=l.target,d=document.createElement("div");d.className="ec-lib-thumb-placeholder",c.parentNode?.replaceChild(d,c)}} />`,t=[{value:15,color:"#ef4444"},{value:35,color:"#f59e0b"},{value:100,color:"#22c55e"}],e=[{label:"Thermometer",file:"thermometer.svg",fill_direction:"up",width:60,height:200},{label:"Thermometer (Horizontal)",file:"thermometer-horizontal.svg",fill_direction:"left",width:200,height:60},{label:"Arc Gauge",file:"gauge-arc.svg",fill_direction:"up",width:200,height:120},{label:"Battery (Vertical)",file:"battery-vertical.svg",fill_direction:"up",width:44,height:100,thresholds:t},{label:"Battery (Horizontal)",file:"battery-horizontal.svg",fill_direction:"left",width:100,height:44,thresholds:t},{label:"Tank (Cylinder)",file:"tank-cylinder.svg",fill_direction:"up",width:100,height:150},{label:"Tank - Water",file:"tank-water.svg",fill_direction:"up",width:80,height:95},{label:"Tank (Fermenter)",file:"tank-fermenter.svg",fill_direction:"up",width:60,height:165},{label:"Tank (Cone)",file:"tank-cone.svg",fill_direction:"up",width:80,height:150},{label:"Inverter",file:"inverter.svg",fill_direction:"up",width:100,height:100}],s=[{label:"Line",graph_type:"stat-line",thumb:"thumb_stat_line.webp"},{label:"Bar",graph_type:"bar",thumb:"thumb_stat_bar.webp"},{label:"Bar (Stacked)",graph_type:"bar-stacked",thumb:"thumb_statbar_stacked.webp"}],o=[{label:"With Unit (line)",graph_type:"line",thumb:"thumb_history_uom.webp"},{label:"No Unit (states)",graph_type:"state-timeline",thumb:"thumb_history_no_uom.webp"}],a=[{label:"Arc Gauge",graph_type:"gauge",thumb:"thumb_gauge_arc.webp"},{label:"Arc Gauge (Needle)",graph_type:"gauge-needle",thumb:"thumb_gauge_arc_needle.webp"}];return r`
      <div class="ec-lib-backdrop" @click=${()=>{this._ggOpen=!1}}></div>
      <div class="ec-lib-modal">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Element Library</span>
          <button class="ec-btn-clear" @click=${()=>{this._ggOpen=!1}}>✕</button>
        </div>

        <div class="ec-lib-cat">SVG Elements</div>
        <div class="ec-lib-grid">
          ${e.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("svg",{svg:yi+n.file,fill_direction:n.fill_direction,width:n.width,height:n.height,...n.thresholds?{thresholds:n.thresholds}:{}})}>
              ${i(n.file)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Statistics Graph</div>
        <div class="ec-lib-grid">
          ${s.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${i(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">History Graph</div>
        <div class="ec-lib-grid">
          ${o.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${i(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Gauge</div>
        <div class="ec-lib-grid">
          ${a.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${i(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>
      </div>
    `}_row(i,t){return r`
      <div class="ec-row">
        <label class="ec-label">${i}</label>
        <div class="ec-control">${t}</div>
      </div>
    `}_colorPicker(i,t,e,s){const o=t??"",a=this._cpOpenId===i,n=/^#[0-9a-fA-F]{6}$/.test(o)?o:o?fo(o):"#000000",l=o||"transparent",c=s?.clearable!==!1&&t!=null,d=["#ff0000","#ff4500","#ff8800","#ffff00","#00ff00","#00ff7f","#00ffff","#0000ff","#9400d3","#ff00ff","#ffffff","#00d4ff","#22c55e","#888888","#333333","#000000"],p=parseInt(n.slice(1,3),16),h=parseInt(n.slice(3,5),16),u=parseInt(n.slice(5,7),16),m=(b,y,x)=>`#${[b,y,x].map(f=>Math.max(0,Math.min(255,f)).toString(16).padStart(2,"0")).join("")}`;return r`
      <div class="ec-cp-wrap">
        <div class="ec-color-row">
          <button class="ec-color-swatch-btn" title="Open color picker"
            style="background:${l}"
            @click=${b=>{if(b.stopPropagation(),!a){const y=b.currentTarget.getBoundingClientRect();this._cpOpenAbove=window.innerHeight-y.bottom<340}this._cpOpenId=a?null:i}}
          ></button>
          <input type="text" class="ec-color-text"
            .value=${o}
            placeholder="#rrggbb · rgb() · name"
            @change=${b=>{const y=b.target.value.trim();e(y||void 0)}}
          />
          ${c?r`<button class="ec-btn-clear" title="${s?.clearTitle??"Clear"}"
            @click=${s?.onClear??(()=>e(void 0))}>✕</button>`:_}
        </div>
        ${a?r`
          <div class="ec-cp-backdrop" @click=${()=>{this._cpOpenId=null}}></div>
          <div class="ec-cp-popup${this._cpOpenAbove?" ec-cp-popup--above":""}" @click=${b=>b.stopPropagation()}>
            <hex-color-picker
              .color=${n}
              @color-changed=${b=>e(b.detail.value)}
            ></hex-color-picker>
            <div class="ec-cp-rgb">
              ${["R","G","B"].map((b,y)=>{const x=[p,h,u][y];return r`<label class="ec-cp-rgb-label">${b}
                  <input type="number" class="ec-cp-rgb-input" min="0" max="255"
                    .value=${String(x)}
                    @change=${f=>{const k=Number(f.target.value);e(m(y===0?k:p,y===1?k:h,y===2?k:u))}}
                  />
                </label>`})}
            </div>
            <div class="ec-cp-presets">
              ${d.map(b=>r`
                <button class="ec-cp-preset" style="background:${b}" title="${b}"
                  @click=${()=>{e(b),this._cpOpenId=null}}
                ></button>
              `)}
            </div>
          </div>
        `:_}
      </div>
    `}};F.styles=[It`
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
        background: transparent; border: 1px solid rgba(255,80,80,0.4);
        border-radius: 16px; color: rgba(255,100,100,0.8); font-size: 12px;
        padding: 5px 14px; cursor: pointer;
      }
      .ec-wiz-btn-reset:hover { background: rgba(255,80,80,0.1); border-color: rgba(255,80,80,0.7); color: #ff6464; }

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
        background: rgba(8,18,28,0.92);
        border-top: 1px solid rgba(0,212,255,0.18);
        padding: 6px 10px;
        box-sizing: border-box;
        gap: 8px;
        min-height: 60px;
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
        font-size: 11px;
        color: rgba(0,212,255,0.45);
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
        font-size: 10px;
        color: rgba(0,212,255,0.6);
        white-space: nowrap;
      }
      .ec-quick-field input {
        width: 64px;
      }
      .ec-side-close {
        background: rgba(8,18,28,0.85);
        border: 1px solid rgba(0,212,255,0.4);
        border-radius: 50%;
        color: #00d4ff;
        font-size: 14px;
        font-weight: 700;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .ec-side-close:hover {
        background: rgba(0,212,255,0.2);
        box-shadow: 0 0 8px rgba(0,212,255,0.4);
      }
      .ec-btn-done {
        background: rgba(0,212,255,0.12);
        border: 1px solid rgba(0,212,255,0.5);
        border-radius: 6px;
        color: #00d4ff;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 12px;
        cursor: pointer;
        flex-shrink: 0;
        white-space: nowrap;
      }
      .ec-btn-done:hover {
        background: rgba(0,212,255,0.25);
        box-shadow: 0 0 8px rgba(0,212,255,0.3);
      }
      .ec-bar-flip {
        background: transparent;
        border: 1px solid rgba(0,212,255,0.25);
        border-radius: 4px;
        color: rgba(0,212,255,0.5);
        font-size: 11px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .ec-bar-flip:hover {
        border-color: rgba(0,212,255,0.6);
        color: #00d4ff;
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
        background: #070f1a;
        padding: 0;
        border-top: 1px solid rgba(0,212,255,0.1);
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
        background: rgba(0,180,220,0.07);
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
        color: #4a8aaa;
      }
      .ec-hint { font-size: 11px; color: #777; margin: -6px 0 8px; line-height: 1.4; }
      .ec-subsection-title {
        font-size: 12px;
        font-weight: 800;
        color: #5aadcc;
        margin: 20px 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 5px 10px;
        border: 1px solid rgba(0,212,255,0.28);
        border-radius: 5px;
        background: rgba(0,212,255,0.06);
        position: relative;
      }
      .ec-subsection-title::before {
        content: '';
        position: absolute;
        left: 5%;
        width: 90%;
        top: -11px;
        border-top: 1px solid rgba(0,212,255,0.14);
      }
      .ec-details-body > .ec-subsection-title:first-child::before,
      .ec-section > .ec-subsection-title:first-child::before {
        display: none;
      }
      .ec-subsection-title--minor {
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin: 12px 0 5px;
        color: #4a8aaa;
        padding: 3px 8px;
        border: 1px solid rgba(0,212,255,0.14);
        border-radius: 4px;
        background: rgba(0,212,255,0.03);
      }
      .ec-subsection-title--minor::before { display: none; }

      /* ── Collapsible details panels ── */
      .ec-details {
        border-bottom: 1px solid rgba(255,255,255,0.04);
      }
      .ec-details summary {
        cursor: pointer;
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #7dd8f0;
        background: linear-gradient(90deg, rgba(0,212,255,0.14) 0%, rgba(0,212,255,0.03) 70%);
        list-style: none;
        display: flex;
        align-items: center;
        gap: 8px;
        user-select: none;
        transition: background 0.2s, color 0.2s;
      }
      .ec-details summary:hover {
        background: linear-gradient(90deg, rgba(0,212,255,0.22) 0%, rgba(0,212,255,0.06) 70%);
        color: #b0ecff;
      }
      .ec-details summary::-webkit-details-marker { display: none; }
      .ec-details summary::before {
        content: '▶';
        font-size: 9px;
        color: rgba(0,212,255,0.7);
        transition: transform 0.2s ease, color 0.2s;
        display: inline-block;
      }
      .ec-details summary:hover::before { color: #00d4ff; }
      .ec-details[open] summary::before { transform: rotate(90deg); }
      .ec-details-body {
        padding: 10px 14px 12px;
        background: rgba(0,0,0,0.2);
        border-top: 1px solid rgba(0,212,255,0.06);
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
        color: #b8d4e0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

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
        color: #4a8aaa;
        letter-spacing: 0.01em;
      }
      .ec-control { flex: 1; min-width: 0; }
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
        background: rgba(0,8,18,0.7);
        border: 1px solid rgba(0,212,255,0.18);
        border-radius: 6px;
        padding: 5px 8px;
        font-size: 15px;
        color: #c8e0ec;
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
        appearance: none;
      }
      .ec-input:focus, .ec-select:focus {
        border-color: rgba(0,212,255,0.55);
        box-shadow: 0 0 0 2px rgba(0,212,255,0.1);
      }
      .ec-input-num { width: 80px; }

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
      .ec-opacity-row { display: flex; align-items: center; gap: 6px; }
      .ec-opacity-row input[type=range] { flex: 1; min-width: 80px; max-width: 140px; }
      .ec-opacity-val { min-width: 36px; text-align: right; font-size: 12px; color: #aaa; }
      .ec-color-swatch-btn {
        width: 36px;
        height: 28px;
        flex-shrink: 0;
        border: 1px solid rgba(0,212,255,0.3);
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
      }
      .ec-color-text {
        flex: 1;
        min-width: 0;
        font-family: monospace;
        font-size: 12px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 4px;
        color: #fff;
        padding: 3px 6px;
        height: 28px;
        box-sizing: border-box;
      }
      .ec-color-text::placeholder { color: rgba(255,255,255,0.3); }
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
        background: #1a2332;
        border: 1px solid rgba(0,212,255,0.3);
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        width: 220px;
      }
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
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.05em;
        padding: 4px 12px;
        border: 1px solid rgba(0,212,255,0.45);
        border-radius: 20px;
        background: rgba(0,212,255,0.06);
        color: #00c8f0;
        cursor: pointer;
        transition: background 0.15s, box-shadow 0.15s, border-color 0.15s;
      }
      .ec-btn-add:hover {
        background: rgba(0,212,255,0.14);
        border-color: rgba(0,212,255,0.7);
        box-shadow: 0 0 10px rgba(0,212,255,0.2);
      }
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
        border: 1px solid rgba(0,212,255,0.25);
        border-radius: 5px;
        background: rgba(0,212,255,0.04);
        color: #6aaac0;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.12s, border-color 0.12s, color 0.12s;
      }
      .ec-btn-align:hover {
        background: rgba(0,212,255,0.14);
        border-color: rgba(0,212,255,0.55);
        color: #00d4ff;
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
        --primary-color: #00d4ff;
        --secondary-text-color: #4a8aaa;
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

      /* ── Flow point rows ── */
      .ec-point-row {
        border: 1px solid rgba(0,212,255,0.12);
        border-radius: 6px;
        padding: 5px 8px;
        margin-bottom: 4px;
        cursor: pointer;
        transition: background 0.15s, border-color 0.15s;
      }
      .ec-point-row:hover {
        background: rgba(0,212,255,0.06);
        border-color: rgba(0,212,255,0.25);
      }
      .ec-point-row.selected {
        background: rgba(0,212,255,0.1);
        border-color: rgba(0,212,255,0.4);
      }
      .ec-point-row-header {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 4px;
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
        font-size: 12px; font-weight: 600; letter-spacing: 0.03em;
        padding: 5px 14px; border: 1px solid rgba(0,212,255,0.35);
        border-radius: 16px; background: rgba(0,212,255,0.05);
        color: #00c8f0; cursor: pointer;
        transition: background 0.13s, border-color 0.13s;
      }
      .ec-lib-browse-btn:hover {
        background: rgba(0,212,255,0.14);
        border-color: rgba(0,212,255,0.65);
      }
    `];N([it({attribute:!1})],F.prototype,"hass",2);N([M()],F.prototype,"_config",2);N([M()],F.prototype,"_selCard",2);N([M()],F.prototype,"_selField",2);N([M()],F.prototype,"_selCards",2);N([M()],F.prototype,"_selEmbCards",2);N([M()],F.prototype,"_selFlow",2);N([M()],F.prototype,"_showAddFlowInput",2);N([M()],F.prototype,"_newFlowName",2);N([M()],F.prototype,"_pendingFlowIdx",2);N([M()],F.prototype,"_showFlowCompleteModal",2);N([M()],F.prototype,"_selPoint",2);N([M()],F.prototype,"_selVirtual",2);N([M()],F.prototype,"_selZone",2);N([M()],F.prototype,"_selExtCard",2);N([M()],F.prototype,"_selExtField",2);N([M()],F.prototype,"_templateName",2);N([M()],F.prototype,"_templateError",2);N([M()],F.prototype,"_previewBoxes",2);N([M()],F.prototype,"_previewExpanded",2);N([M()],F.prototype,"_barAtTop",2);N([M()],F.prototype,"_copiedFields",2);N([M()],F.prototype,"_copySourceIdx",2);N([M()],F.prototype,"_virtualClipboard",2);N([M()],F.prototype,"_copiedField",2);N([M()],F.prototype,"_copiedFieldSrc",2);N([M()],F.prototype,"_dragSrc",2);N([M()],F.prototype,"_cpOpenId",2);N([M()],F.prototype,"_cpOpenAbove",2);N([M()],F.prototype,"_ggOpen",2);N([M()],F.prototype,"_wizStep",2);N([M()],F.prototype,"_wiz",2);N([M()],F.prototype,"_bgSelected",2);N([M()],F.prototype,"_selEmbCard",2);N([M()],F.prototype,"_embEditorOpen",2);N([M()],F.prototype,"_embEditorYaml",2);N([M()],F.prototype,"_embNativeEditor",2);N([M()],F.prototype,"_embPickerOpen",2);N([M()],F.prototype,"_embPickerSearch",2);F=N([he("mosaic-canvas-editor")],F);const yo="modulepreload",$o=function(i){return"/"+i},$i={},xo=function(t,e,s){let o=Promise.resolve();if(e&&e.length>0){let n=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");o=n(e.map(d=>{if(d=$o(d),d in $i)return;$i[d]=!0;const p=d.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${h}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":yo,p||(u.as="script"),u.crossOrigin="",u.href=d,c&&u.setAttribute("nonce",c),document.head.appendChild(u),p)return new Promise((m,b)=>{u.addEventListener("load",m),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return o.then(n=>{for(const l of n||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};var wo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,vt=(i,t,e,s)=>{for(var o=s>1?void 0:s?ko(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&wo(t,e,o),o};const Ce=new Map;function So(i,t,e){return e<=t?0:Math.max(0,Math.min(100,(i-t)/(e-t)*100))}function Co(i,t,e){if(!t?.length)return e;const s=[...t].sort((a,n)=>a.value-n.value);let o=e;for(const a of s)i>=a.value&&(o=a.color);return o}let X=class extends bt{constructor(){super(...arguments),this.rawValue=0,this.entityUnit="",this._svgText="",this._shapesReady=!1,this._svgNatW=0,this._svgNatH=0}connectedCallback(){super.connectedCallback(),this._load()}updated(i){if(i.has("field")&&this._load(),this.field?.svg&&this._svgText){const t=this.renderRoot.querySelector(".fill");t&&(t.style.filter=""),this.field.svg?.toLowerCase().includes("thermometer")?this._applyThermometerFill():t?.querySelector("[data-needle]")?this._applyNeedleFill():this._svgKey==="inverter"?this._applyInverterFill():(this._applyExternalFill(),this._updateSvgLabels()),this._applyTankColor()}}async _load(){const i=this.field;i&&(i.svg?await this._fetchSvg(i.svg):i.shape&&await this._loadShapes())}async _fetchSvg(i){let t=Ce.get(i);if(!t){const s=fetch(i).then(o=>o.text()).catch(()=>"");Ce.set(i,s),t=s}const e=await t;if(typeof t!="string"&&Ce.set(i,e),this._svgText!==e){this._svgText=e;const s=e.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);s&&(this._svgNatW=parseFloat(s[1]),this._svgNatH=parseFloat(s[2]))}}async _loadShapes(){X._shapesModule||(X._shapesModule=await xo(()=>import("./mosaic-canvas-shapes.js"),[])),this._shapesReady||(this._shapesReady=!0)}get _pct(){return this.fillPct!=null?Math.max(0,Math.min(100,this.fillPct)):So(this.rawValue,this.field?.min??g("fill_min")??0,this.field?.max??g("fill_max")??100)}get _svgKey(){const i=this.field?.svg?.toLowerCase()??"";return i.includes("thermometer-horizontal")?"thermo_h":i.includes("thermometer")?"thermo":i.includes("battery-horizontal")?"battery_h":i.includes("battery-vertical")?"battery_v":i.includes("tank-cylinder")?"tank_cylinder":i.includes("tank-water")?"tank_water":i.includes("tank-fermenter")?"tank_fermenter":i.includes("tank-cone")?"tank_cone":i.includes("gauge-arc")?"gauge_arc":i.includes("inverter")?"inverter":null}get _color(){const i=this._svgKey,t=i?this.defaults?.[`${i}_fill_color`]:void 0;return Co(this.rawValue,this.field?.thresholds,this.field?.fill_color??t??g("fill_color")??"#00d4ff")}get _fillColor2(){const i=this._svgKey,t=i?this.defaults?.[`${i}_fill_color2`]:void 0;return this.field?.fill_color2??t}get _w(){const i=this.field;if(!i)return 60;if(i.width!=null)return i.width;const t=this._h;return i.svg&&this._svgNatW&&this._svgNatH?Math.round(t*this._svgNatW/this._svgNatH):i.shape==="bar-h"?Math.round(t*4):Math.round(t*.5)}get _h(){const i=this.field;return i?i.height!=null?i.height:i.svg&&this._svgNatH?this._svgNatH:i.shape==="bar-h"?40:120:120}_applyExternalFill(){const i=this.field;if(!i)return;const t=this.renderRoot.querySelector(".fill");if(!t)return;const e=t.querySelector("svg");e&&(e.setAttribute("width","100%"),e.setAttribute("height","100%"));const s=i.fill_id,o=(s?t.querySelector(`#${CSS.escape(s)}`):null)??t.querySelector("[data-fill]")??t.querySelector("#fill");if(!o)return;const a=this._pct,n=i.fill_direction??g("fill_direction")??"up",l={up:`polygon(0% ${100-a}%, 100% ${100-a}%, 100% 100%, 0% 100%)`,down:`polygon(0% 0%, 100% 0%, 100% ${a}%, 0% ${a}%)`,left:`polygon(0% 0%, ${a}% 0%, ${a}% 100%, 0% 100%)`,right:`polygon(${100-a}% 0%, 100% 0%, 100% 100%, ${100-a}% 100%)`},c=o;c.style.transition||(c.style.transition="clip-path 0.6s ease"),c.style.clipPath=l[n]??l.up;const d=(i.thresholds?.length??0)>0,p=this._fillColor2,h=t.querySelector('[data-fill-stop="0"]'),u=t.querySelector('[data-fill-stop="1"]');if(!d&&p)if(h&&u){h.setAttribute("stop-color",this._color),u.setAttribute("stop-color",p);const m=h.closest("linearGradient,radialGradient");m?.id&&(c.style.fill=`url(#${m.id})`)}else this._applyInjectedGradient(e,c,this._color,p,n);else this._removeInjectedGradient(e),h&&h.setAttribute("stop-color",this._color),u&&u.setAttribute("stop-color",this._color),c.style.fill=this._color}_applyInjectedGradient(i,t,e,s,o){if(!i){t.style.fill=e;return}const a="_mc_fg";let n=i.querySelector("defs");n||(n=document.createElementNS("http://www.w3.org/2000/svg","defs"),i.insertBefore(n,i.firstChild));let l=n.querySelector(`#${a}`);if(!l){l=document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),l.setAttribute("id",a),l.setAttribute("gradientUnits","objectBoundingBox");const b=document.createElementNS("http://www.w3.org/2000/svg","stop");b.setAttribute("offset","0%");const y=document.createElementNS("http://www.w3.org/2000/svg","stop");y.setAttribute("offset","100%"),l.appendChild(b),l.appendChild(y),n.appendChild(l)}const c={up:["0.5","1","0.5","0"],down:["0.5","0","0.5","1"],left:["0","0.5","1","0.5"],right:["1","0.5","0","0.5"]},[d,p,h,u]=c[o]??c.up;l.setAttribute("x1",d),l.setAttribute("y1",p),l.setAttribute("x2",h),l.setAttribute("y2",u);const m=l.querySelectorAll("stop");m[0].setAttribute("stop-color",e),m[1].setAttribute("stop-color",s),t.style.fill=`url(#${a})`}_removeInjectedGradient(i){i?.querySelector("#_mc_fg")?.remove()}_applyInverterFill(){const i=this.renderRoot.querySelector(".fill");if(!i)return;const t=i.querySelector("svg");if(!t)return;if(!t.getAttribute("viewBox")){const o=t.getAttribute("width"),a=t.getAttribute("height");o&&a&&t.setAttribute("viewBox",`0 0 ${parseFloat(o)} ${parseFloat(a)}`)}t.setAttribute("width","100%"),t.setAttribute("height","100%");const e=t.querySelector("#line");if(!e)return;const s=this.field?.fill_color??this.defaults?.inverter_line_color??g("inverter_line_color")??"#00d4ff";e.style.fill=s}_applyTankColor(){const i=this._svgKey,t=i?this.defaults?.[`${i}_tank_color`]:void 0,e=this.field?.tank_color??t;if(!e)return;const s=this.renderRoot.querySelector(".fill");if(!s)return;const o=s.querySelector("#tank"),a=s.querySelector("#tank-top");o&&(a?o.style.stroke=e:o.style.fill=e),a&&(a.style.fill=e)}_applyNeedleFill(){const i=this.renderRoot.querySelector(".fill");if(!i)return;const t=i.querySelector("[data-needle]");if(!t)return;const e=-90+this._pct*1.8;t.style.transition="transform 0.6s ease",t.style.transformBox="fill-box",t.style.transformOrigin="50% 100%",t.style.transform=`rotate(${e}deg)`;const s=t.querySelector("path");s&&(s.style.fill=this._color)}_updateSvgLabels(){const i=this.renderRoot.querySelector(".fill");if(!i)return;const t=this.field;if(!t)return;const e=this._svgKey,s=e?this.defaults?.[`${e}_label_color`]:void 0,o=e?this.defaults?.[`${e}_label_size`]:void 0,a=t.gauge_label_color??s??g("gauge_label_color")??"#cccccc",n=t.gauge_label_size??o??g("gauge_label_size")??11,l=i.querySelector("[data-min-label]"),c=i.querySelector("[data-max-label]"),d=i.querySelector("[data-value]");if(l&&(l.textContent=t.gauge_min_label??"",l.setAttribute("fill",a),l.setAttribute("font-size",String(n)),l.style.display=t.gauge_min_label?"":"none"),c&&(c.textContent=t.gauge_max_label??"",c.setAttribute("fill",a),c.setAttribute("font-size",String(n)),c.style.display=t.gauge_max_label?"":"none"),d)if(t.gauge_show_value){const p=t.decimals!=null?this.rawValue.toFixed(t.decimals):String(this.rawValue);d.textContent=t.unit?`${p} ${t.unit}`:p,d.setAttribute("fill",t.gauge_label_color??g("gauge_label_color")??"#cccccc"),d.setAttribute("font-size",String(Math.round(n*1.5))),d.style.display=""}else d.style.display="none"}_applyThermometerFill(){const i=this.renderRoot.querySelector(".fill");if(!i)return;const t=this.field;if(!t)return;const e=i.querySelector("svg");if(!e)return;e.setAttribute("width","100%"),e.setAttribute("height","100%");const s="http://www.w3.org/2000/svg",o=i.querySelector("#fill-area"),a=i.querySelector("#tick-major-right")??i.querySelector("#tick-major"),n=i.querySelector("#tick-minor-right")??i.querySelector("#tick-minor"),l=i.querySelector("#tick-text-right")??i.querySelector("#tick-text"),c=i.querySelector("#tick-major-left"),d=i.querySelector("#tick-minor-left"),p=i.querySelector("#tick-text-left"),h=i.querySelector("#fill"),u=i.querySelector("#outer"),m=i.querySelector("#temp"),b=i.querySelector("#degrees-c"),y=i.querySelector("#degrees-f");if(!o||!h)return;const x=o.x.baseVal.value,f=o.y.baseVal.value,k=o.width.baseVal.value,v=o.height.baseVal.value,w=t.min??g("fill_min")??0,$=t.max??g("fill_max")??100,S=$-w,C=this._svgKey==="thermo_h",z=t.fill_color??(C?this.defaults?.thermo_h_fill_color:this.defaults?.thermo_fill_color)??g(C?"thermo_h_fill_color":"thermo_fill_color")??g("fill_color")??"#00d4ff",P=S>0?Math.max(0,Math.min(1,(this.rawValue-w)/S)):0,B=f+v*(1-P),H=t.thermo_tick_color??this.defaults?.thermo_tick_color??g("thermo_tick_color")??"rgba(255,255,255,0.7)",A=t.thermo_tick_font_size??this.defaults?.thermo_tick_font_size??g("thermo_tick_font_size")??4,I=t.thermo_fill_opacity_above??this.defaults?.thermo_fill_opacity_above??g("thermo_fill_opacity_above")??.5,V=t.thermo_grid_color??this.defaults?.thermo_grid_color??g("thermo_grid_color")??"rgba(255,255,255,0.25)",E=t.thermo_minor_tick_width??this.defaults?.thermo_minor_tick_width??g("thermo_minor_tick_width")??.5,q=t.thermo_major_tick_width??this.defaults?.thermo_major_tick_width??g("thermo_major_tick_width")??.75,Y=t.thermo_temp_color??this.defaults?.thermo_temp_color??g("thermo_temp_color")??"#ffffff",K=t.thermo_temp_font_size??this.defaults?.thermo_temp_font_size??g("thermo_temp_font_size")??10,J=this.defaults?.font_family??"inherit",lt=this.defaults?.mono_font_family??g("mono_font_family")??"'Courier New', monospace";u&&(u.style.stroke="none");const O=D=>{D.style.fill=H,D.style.stroke="none",D.style.fontFamily=J,D.removeAttribute("fill");const R=D.querySelector("tspan");if(R){if(R.getAttribute("x")==="0"&&R.getAttribute("y")==="0"){const W=D.getAttribute("x"),j=D.getAttribute("y");W&&R.setAttribute("x",W),j&&R.setAttribute("y",j)}R.style.fill=H,R.style.stroke="none",R.style.fontFamily=J,R.removeAttribute("fill")}},nt=this.entityUnit.includes("F");if(b&&(b.style.display=nt?"none":"inline",nt||O(b)),y&&(y.style.display=nt?"inline":"none",nt&&O(y)),m){const D=t.thermo_decimals??this.defaults?.thermo_decimals??g("thermo_decimals")??t.decimals,R=D!=null?this.rawValue.toFixed(D):String(this.rawValue);m.style.fill=Y,m.style.stroke="none",m.style.fontFamily=lt,m.style.fontSize=`${K}px`,m.removeAttribute("fill");const W=m.querySelector("tspan");W?(W.textContent=R,W.style.fill=Y,W.style.stroke="none",W.style.fontFamily=lt,W.style.fontSize=`${K}px`,W.removeAttribute("fill")):m.textContent=R}i.querySelector("#thermo-clip-below")?.closest("clipPath")?.remove(),i.querySelector("#thermo-clip-above")?.closest("clipPath")?.remove(),i.querySelector("#thermo-fill-group")?.remove(),i.querySelector("#thermo-fill-below")?.remove(),i.querySelector("#thermo-fill-above")?.remove(),e.querySelector("#thermo-fill-gradient")?.remove();const _e=f+v+200,ge=document.createElementNS(s,"clipPath");ge.id="thermo-clip-below";const Wt=document.createElementNS(s,"rect");Wt.setAttribute("x","0"),Wt.setAttribute("width","100"),Wt.setAttribute("y",String(B)),Wt.setAttribute("height",String(Math.max(0,_e-B))),ge.appendChild(Wt);const me=document.createElementNS(s,"clipPath");me.id="thermo-clip-above";const Ht=document.createElementNS(s,"rect");Ht.setAttribute("x","0"),Ht.setAttribute("width","100"),Ht.setAttribute("y","0"),Ht.setAttribute("height",String(Math.max(0,B))),me.appendChild(Ht);let ft=e.querySelector("defs");ft||(ft=document.createElementNS(s,"defs"),e.prepend(ft)),ft.appendChild(ge),ft.appendChild(me);let Bt;const be=t.thresholds;if(be&&be.length>0){const D=[...be].sort((Q,Z)=>Q.value-Z.value),R=document.createElementNS(s,"linearGradient");R.id="thermo-fill-gradient",R.setAttribute("gradientUnits","userSpaceOnUse"),R.setAttribute("x1","0"),R.setAttribute("x2","0"),R.setAttribute("y1",String(f+v)),R.setAttribute("y2",String(f));const W=(Q,Z)=>{const ht=document.createElementNS(s,"stop");ht.setAttribute("offset",String(Math.max(0,Math.min(1,Q)))),ht.setAttribute("stop-color",Z),R.appendChild(ht)};let j=z;for(const Q of D){const Z=S>0?(Q.value-w)/S:0;if(Z<=0){j=Q.color;continue}if(Z>=1)break;W(Z,j),W(Z,Q.color),j=Q.color}W(1,j),ft.appendChild(R),Bt="url(#thermo-fill-gradient)"}else if(this._fillColor2){const D=document.createElementNS(s,"linearGradient");D.id="thermo-fill-gradient",D.setAttribute("gradientUnits","userSpaceOnUse"),D.setAttribute("x1","0"),D.setAttribute("x2","0"),D.setAttribute("y1",String(f+v)),D.setAttribute("y2",String(f));const R=document.createElementNS(s,"stop");R.setAttribute("offset","0"),R.setAttribute("stop-color",z);const W=document.createElementNS(s,"stop");W.setAttribute("offset","1"),W.setAttribute("stop-color",this._fillColor2),D.appendChild(R),D.appendChild(W),ft.appendChild(D),Bt="url(#thermo-fill-gradient)"}else Bt=z;h.style.display="none";const yt=h.cloneNode(!0);yt.id="thermo-fill-below",yt.style.removeProperty("filter"),yt.style.display="",yt.style.fill=Bt,yt.style.opacity="1",yt.setAttribute("clip-path","url(#thermo-clip-below)");const $t=h.cloneNode(!0);$t.id="thermo-fill-above",$t.style.removeProperty("filter"),$t.style.display="",$t.style.fill=Bt,$t.style.opacity=String(I),$t.setAttribute("clip-path","url(#thermo-clip-above)");const Ot=document.createElementNS(s,"g");Ot.id="thermo-fill-group",Ot.setAttribute("filter","url(#filter47)"),Ot.appendChild(yt),Ot.appendChild($t),h.after(Ot),e.style.overflow="visible",i.querySelector("#thermo-ticks")?.remove();const Jt=t.thermo_text_position??this.defaults?.thermo_text_position??g("thermo_text_position")??"right",Di=Jt==="right"||Jt==="both",Ri=Jt==="left"||Jt==="both",Oe=!!(a&&n&&l),Ve=!!(c&&d&&p);if(!Oe&&!Ve)return;const Li=t.thermo_major_tick_length??this.defaults?.thermo_major_tick_length??g("thermo_major_tick_length"),Ii=t.thermo_minor_tick_length??this.defaults?.thermo_minor_tick_length??g("thermo_minor_tick_length"),Wi=t.thermo_show_minor_tick_text??this.defaults?.thermo_show_minor_tick_text??g("thermo_show_minor_tick_text")??!1,Qt=[1,2,5,10,20,25,50,100,200,250,500,1e3].find(D=>Math.ceil(S/D)<=5)??10,ve=Qt/2,xt=document.createElementNS(s,"g");xt.id="thermo-ticks";const je=D=>f+v*(1-(D-w)/S),Vt=[];if(Di&&Oe&&Vt.push({tmEl:a,tnEl:n,ttEl:l,anchorEnd:!1}),Ri&&Ve&&Vt.push({tmEl:c,tnEl:d,ttEl:p,anchorEnd:!0}),Vt.length===0)return;const Hi=Math.ceil(w/ve),Bi=Math.floor($/ve);for(const{tnEl:D,ttEl:R,anchorEnd:W}of Vt){const j=D.x.baseVal.value,Q=Ii??D.width.baseVal.value,Z=R.x.baseVal.value,ht=R.width.baseVal.value;for(let wt=Hi;wt<=Bi;wt++){if(wt%2===0)continue;const te=wt*ve,Nt=je(te),ct=document.createElementNS(s,"line");if(ct.setAttribute("x1",String(j)),ct.setAttribute("x2",String(j+Q)),ct.setAttribute("y1",String(Nt)),ct.setAttribute("y2",String(Nt)),ct.setAttribute("stroke",H),ct.setAttribute("stroke-width",String(E)),xt.appendChild(ct),Wi){const dt=W?Z+ht:Z,st=document.createElementNS(s,"text");st.setAttribute("x",String(dt)),st.setAttribute("y",String(Nt)),st.setAttribute("dominant-baseline","middle"),st.setAttribute("text-anchor",W?"end":"start"),st.setAttribute("font-size",String(A)),st.setAttribute("fill",H),st.style.fontFamily=J,st.textContent=String(te),xt.appendChild(st)}}}const Oi=Math.ceil(w/Qt),Vi=Math.floor($/Qt);for(let D=Oi;D<=Vi;D++){const R=D*Qt,W=je(R),j=document.createElementNS(s,"line");j.setAttribute("x1",String(x)),j.setAttribute("x2",String(x+k)),j.setAttribute("y1",String(W)),j.setAttribute("y2",String(W)),j.setAttribute("stroke",V),j.setAttribute("stroke-width",String(E)),xt.appendChild(j);for(const{tmEl:Q,ttEl:Z,anchorEnd:ht}of Vt){const wt=Q.x.baseVal.value,te=Li??Q.width.baseVal.value,Nt=Z.x.baseVal.value,ct=Z.width.baseVal.value,dt=document.createElementNS(s,"line");dt.setAttribute("x1",String(wt)),dt.setAttribute("x2",String(wt+te)),dt.setAttribute("y1",String(W)),dt.setAttribute("y2",String(W)),dt.setAttribute("stroke",H),dt.setAttribute("stroke-width",String(q)),xt.appendChild(dt);const st=ht?Nt+ct:Nt,pt=document.createElementNS(s,"text");pt.setAttribute("x",String(st)),pt.setAttribute("y",String(W)),pt.setAttribute("dominant-baseline","middle"),pt.setAttribute("text-anchor",ht?"end":"start"),pt.setAttribute("font-size",String(A)),pt.setAttribute("fill",H),pt.style.fontFamily=J,pt.textContent=String(R),xt.appendChild(pt)}}(a?.parentElement??c?.parentElement??e).appendChild(xt)}render(){const i=this.field;if(!i)return _;const t=this._w,e=this._h,s=r`<div class="fill" style="width:${t}px;height:${e}px;background:rgba(0,0,0,0.2);border-radius:4px;"></div>`;if(i.svg)return this._svgText?r`<div class="fill" style="width:${t}px;height:${e}px;overflow:hidden;"
        .innerHTML=${this._svgText}></div>`:s;if(i.shape){const o=X._shapesModule;if(!o)return s;const a=o.SHAPES[i.shape];return a?r`<div class="fill"
        .innerHTML=${a({pct:this._pct,color:this._color,width:t,height:e})}
      ></div>`:_}return _}};X._shapesModule=null;X.styles=It`
    :host { display: block; line-height: 0; }
    .fill { display: inline-block; }
  `;vt([it({attribute:!1})],X.prototype,"field",2);vt([it({attribute:!1})],X.prototype,"defaults",2);vt([it({type:Number})],X.prototype,"rawValue",2);vt([it({type:String})],X.prototype,"entityUnit",2);vt([it({type:Number})],X.prototype,"fillPct",2);vt([M()],X.prototype,"_svgText",2);vt([M()],X.prototype,"_shapesReady",2);X=vt([he("mc-fill")],X);var Eo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Kt=(i,t,e,s)=>{for(var o=s>1?void 0:s?zo(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&Eo(t,e,o),o};let Pt=class extends bt{constructor(){super(...arguments),this.transparent=!1,this._cardEl=null,this._lastType=""}render(){return r`<div id="slot"></div>`}updated(i){i.has("cardConfig")?this._rebuildCard():i.has("hass")&&this._cardEl&&(this._cardEl.hass=this.hass),i.has("transparent")&&this._cardEl&&this._applyTransparent()}_applyTransparent(){this._cardEl&&(this.transparent?(this._cardEl.style.setProperty("--ha-card-background","transparent"),this._cardEl.style.setProperty("--ha-card-box-shadow","none"),this._cardEl.style.setProperty("--ha-card-border-width","0px"),this._cardEl.style.setProperty("--ha-card-border-color","transparent")):(this._cardEl.style.removeProperty("--ha-card-background"),this._cardEl.style.removeProperty("--ha-card-box-shadow"),this._cardEl.style.removeProperty("--ha-card-border-width"),this._cardEl.style.removeProperty("--ha-card-border-color")))}async _rebuildCard(){await this.updateComplete;const i=this.cardConfig,t=this._slot;if(!t)return;if(!i?.type){t.innerHTML="",this._cardEl=null;return}const e=String(i.type);if(this._cardEl&&e===this._lastType){try{this._cardEl.setConfig(i)}catch{}this._cardEl.hass=this.hass,this._applyTransparent();return}try{const s=await window.loadCardHelpers?.();if(!s?.createCardElement)return;t.innerHTML="";const o=s.createCardElement(i);o.hass=this.hass,this._lastType=e,this._cardEl=o,t.appendChild(o),this._applyTransparent()}catch(s){console.error("[mc-embedded-card] failed to create card:",s)}}};Pt.styles=It`
    :host { display: block; }
    #slot { width: 100%; }
  `;Kt([it({attribute:!1})],Pt.prototype,"cardConfig",2);Kt([it({attribute:!1})],Pt.prototype,"hass",2);Kt([it({type:Boolean})],Pt.prototype,"transparent",2);Kt([_s("#slot")],Pt.prototype,"_slot",2);Pt=Kt([he("mc-embedded-card")],Pt);function Mo(i){const{stat_period:t,stat_period_n:e,stat_period_start:s,stat_period_end:o}=i,a=new Date,n=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=new Date(n.getTime()-864e5),c=n.getDay(),d=c===0?6:c-1,p=new Date(n.getTime()-d*864e5),h=new Date(p.getTime()-7*864e5),u=new Date(a.getFullYear(),a.getMonth(),1),m=new Date(a.getFullYear(),a.getMonth()-1,1),b=new Date(a.getFullYear(),0,1),y=new Date(a.getFullYear()-1,0,1);switch(t){case"today":return{start:n,end:a,bucketPeriod:"day"};case"yesterday":return{start:l,end:n,bucketPeriod:"day"};case"this_week":return{start:p,end:a,bucketPeriod:"week"};case"last_week":return{start:h,end:p,bucketPeriod:"week"};case"this_month":return{start:u,end:a,bucketPeriod:"month"};case"last_month":return{start:m,end:u,bucketPeriod:"month"};case"this_year":return{start:b,end:a,bucketPeriod:"month"};case"last_year":return{start:y,end:b,bucketPeriod:"month"};case"last_30_minutes":return{start:new Date(a.getTime()-30*6e4),end:a,bucketPeriod:"hour"};case"last_hour":return{start:new Date(a.getTime()-36e5),end:a,bucketPeriod:"hour"};case"last_n_minutes":{const x=e??g("stat_period_minutes_n")??60;return{start:new Date(a.getTime()-x*6e4),end:a,bucketPeriod:"hour"}}case"last_n_hours":{const x=e??g("stat_period_hours_n")??1;return{start:new Date(a.getTime()-x*36e5),end:a,bucketPeriod:x<=48?"hour":"day"}}case"last_n_days":{const x=e??g("stat_period_days_n")??7;return{start:new Date(a.getTime()-x*864e5),end:a,bucketPeriod:x<=60?"day":"month"}}case"last_n_months":{const x=e??g("stat_period_months_n")??1;return{start:new Date(a.getFullYear(),a.getMonth()-x,a.getDate()),end:a,bucketPeriod:"month"}}case"custom":{if(!s||!o)return null;const x=new Date(s),f=new Date(o);if(isNaN(x.getTime())||isNaN(f.getTime())||f<=x)return null;const k=(f.getTime()-x.getTime())/864e5,v=k<=2?"hour":k<=60?"day":"month";return{start:x,end:f,bucketPeriod:v}}default:return null}}function Fo(i,t){return i.states[t]?.attributes?.unit_of_measurement??""}function xi(i){const t=[];for(const e of i.cards??[])for(const s of e.fields)s.type==="value"&&s.stat_period&&s.entity&&t.push({id:s.id,entity:s.entity,stat_period:s.stat_period,stat_type:s.stat_type,stat_period_n:s.stat_period_n,stat_period_start:s.stat_period_start,stat_period_end:s.stat_period_end}),s.type==="graph"&&s.graph_series&&s.graph_series.forEach((o,a)=>{o.entity&&o.stat_period&&t.push({id:`${s.id}:${a}`,entity:o.entity,stat_period:o.stat_period,stat_type:o.stat_type,stat_period_n:o.stat_period_n})});return t}async function Po(i,t,e){const s=new Map(e);for(const o of t){const a=Mo(o);if(!a)continue;const n=o.stat_type??g("stat_type")??"sum",l=n==="difference"?"hour":a.bucketPeriod;try{const c=await i.connection.sendMessagePromise({type:"recorder/statistics_during_period",start_time:a.start.toISOString(),end_time:a.end.toISOString(),statistic_ids:[o.entity],period:l,units:{},types:["sum","mean","state","max","min"]}),d=c&&c[o.entity]||[];if(!d.length){s.set(o.id,null);continue}let p;if(n==="sum")p=d.reduce((h,u)=>h+(u.sum??0),0);else if(n==="difference"){const h=d.filter(u=>u.state!==null&&u.state!==void 0&&Number.isFinite(Number(u.state)));if(h.length<2){s.set(o.id,null);continue}p=Number(h[h.length-1].state)-Number(h[0].state)}else if(n==="max"){const h=d.map(u=>u.max).filter(u=>u!=null&&Number.isFinite(u));if(!h.length){s.set(o.id,null);continue}p=Math.max(...h)}else if(n==="min"){const h=d.map(u=>u.min).filter(u=>u!=null&&Number.isFinite(u));if(!h.length){s.set(o.id,null);continue}p=Math.min(...h)}else if(n==="count")p=d.filter(h=>h.mean!==null&&h.mean!==void 0).length;else if(n==="range"){const h=d.map(m=>m.max).filter(m=>m!=null&&Number.isFinite(m)),u=d.map(m=>m.min).filter(m=>m!=null&&Number.isFinite(m));if(!h.length||!u.length){s.set(o.id,null);continue}p=Math.max(...h)-Math.min(...u)}else p=d.reduce((h,u)=>h+(u.mean??0),0)/d.length;s.set(o.id,{value:p,unit:Fo(i,o.entity)})}catch{}}return s}const No=["stat-line","line","area","state-timeline"];function wi(i){const t=[];for(const e of i.cards??[])for(const s of e.fields){if(s.type!=="graph"||!No.includes(s.graph_type??g("graph_type")??"bar"))continue;const o=s.graph_hours??g("graph_hours")??24;(s.graph_series??[]).forEach((a,n)=>{a.entity&&t.push({id:`${s.id}:${n}`,entity:a.entity,hours:o,stat_type:a.stat_type})})}return t}async function To(i,t,e){const s=new Map(e),o=i.connection;for(const a of t){const n=new Date,l=new Date(n.getTime()-a.hours*36e5);try{const d=(await o.sendMessagePromise({type:"recorder/statistics_during_period",start_time:l.toISOString(),end_time:n.toISOString(),statistic_ids:[a.entity],period:"hour",units:{},types:["mean","sum","state","max","min"]}))?.[a.entity]??[],p=a.stat_type??g("stat_type_history")??"mean",h=d.flatMap(u=>{const m=p==="sum"?u.sum:p==="max"?u.max:p==="min"?u.min:p==="mean"?u.mean:u.state,b=Number(m);return Number.isFinite(b)?[{t:new Date(u.start).getTime(),v:b}]:[]});s.set(a.id,h)}catch{}}return s}var Ao=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,at=(i,t,e,s)=>{for(var o=s>1?void 0:s?Do(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&Ao(t,e,o),o};console.info(`%c MOSAIC-CANVAS %c v${Be} · build ${Ai} `,"color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let tt=class extends bt{constructor(){super(...arguments),this.editor=!1,this._cardBoxes={},this._statsMap=new Map,this._historyMap=new Map,this._expandedCardId=null,this._expandScale=1,this._openExtendedId=null,this._totalW=1e3,this._virtualsCache=new Map}static getConfigElement(){return document.createElement("mosaic-canvas-editor")}static getStubConfig(){return{background:{source:"auto",sun_entity:"sun.sun",images:{}},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}}setConfig(i){if(!i)throw new Error("Invalid configuration");this._config=i}getCardSize(){return 5}get cardBoxes(){return this._cardBoxes}shouldUpdate(i){if(i.has("_config")||i.has("_imgNatural")||!i.has("hass"))return!0;const t=i.get("hass");if(!t||!this.hass)return!0;for(const e of this._referencedEntities())if(t.states[e]!==this.hass.states[e])return!0;return!1}_referencedEntities(){const i=new Set,t=this._config?.background;t?.sun_entity&&i.add(t.sun_entity),t?.mode_entity&&i.add(t.mode_entity);for(const e of this._config?.cards??[])for(const s of e.fields)s.entity&&i.add(s.entity);for(const e of this._config?.flows??[])e.entity&&i.add(e.entity);return[...i]}_recomputeScale(){const i=this.renderRoot?.querySelector(".ec-host");if(!i||this._totalW===0)return;const t=i.clientWidth/this._totalW;i.style.setProperty("--ec-scale",String(t))}firstUpdated(){const i=this.renderRoot?.querySelector(".ec-host");i&&(this._ro=new ResizeObserver(()=>{this._recomputeScale(),this._recomputeExpandScale()}),this._ro.observe(i),this._recomputeScale())}updated(i){this._recomputeScale(),this._measureCardBoxes(),this._recomputeExpandScale(),(i.has("_config")||i.has("hass")&&!i.get("hass"))&&this._restartStatPolling()}_recomputeExpandScale(){if(!this._expandedCardId){this._expandScale!==1&&(this._expandScale=1);return}const i=this.renderRoot?.querySelector(".ec-expand-panel"),t=this.renderRoot?.querySelector(".ec-expand-card-wrap");if(!i||!t)return;const e=t.offsetWidth,s=t.offsetHeight;if(!e||!s)return;const o=Math.min(i.clientWidth/e,i.clientHeight/s);Number.isFinite(o)&&o>0&&Math.abs(o-this._expandScale)>.01&&(this._expandScale=o)}_restartStatPolling(){if(this._statsPollTimer!==void 0&&(clearInterval(this._statsPollTimer),this._statsPollTimer=void 0),!this._config||!this.hass)return;if(xi(this._config).length>0){const e=async()=>{!this.hass||!this._config||(this._statsMap=await Po(this.hass,xi(this._config),this._statsMap))};e();const s=Math.max(1,this._config.defaults?.stat_update_interval??g("stat_update_interval")??5)*6e4;this._statsPollTimer=setInterval(()=>void e(),s)}if(this._historyPollTimer!==void 0&&(clearInterval(this._historyPollTimer),this._historyPollTimer=void 0),wi(this._config).length>0){const e=async()=>{!this.hass||!this._config||(this._historyMap=await To(this.hass,wi(this._config),this._historyMap))};e(),this._historyPollTimer=setInterval(()=>void e(),5*6e4)}}_measureCardBoxes(){const i=this.renderRoot?.querySelectorAll(".ec-card[data-card-id]"),{totalW:t,totalH:e}=rt(this._config,this._imgNatural),s={};for(const a of i??[]){const n=a.getAttribute("data-card-id");if(!n)continue;const c=this._config?.cards.find(y=>y.id===n)?.anchor??"top-left",[d,p]=ce[c],h=a.offsetWidth,u=a.offsetHeight,m=a.offsetLeft-d*h,b=a.offsetTop-p*u;s[n]={x:m/t,y:b/e,w:h/t,h:u/e}}this.renderRoot?.querySelectorAll("mc-embedded-card[data-emb-id]")?.forEach(a=>{const n=a.getAttribute("data-emb-id");if(!n)return;const l=this._config?.embedded_cards?.find(b=>b.id===n),[c,d]=ce[l?.anchor??"top-left"],p=a.offsetWidth,h=a.offsetHeight,u=a.offsetLeft-c*p,m=a.offsetTop-d*h;s[n]={x:u/t,y:m/e,w:p/t,h:h/e}}),JSON.stringify(s)!==JSON.stringify(this._cardBoxes)&&(this._cardBoxes=s,this.dispatchEvent(new CustomEvent("ec-boxes-changed",{detail:{boxes:s}})))}connectedCallback(){super.connectedCallback(),Hs.then(()=>this.requestUpdate()),this._onKeyDown=i=>{if(i.key==="Escape"){if(this._openExtendedId!==null){this._openExtendedId=null;return}this._expandedCardId!==null&&(this._expandedCardId=null)}},window.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){this._onKeyDown&&(window.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=void 0),super.disconnectedCallback(),this._ro?.disconnect(),this._ro=void 0,this._statsPollTimer!==void 0&&(clearInterval(this._statsPollTimer),this._statsPollTimer=void 0),this._historyPollTimer!==void 0&&(clearInterval(this._historyPollTimer),this._historyPollTimer=void 0)}render(){if(!this._config)return _;const i=rt(this._config,this._imgNatural),{baseW:t,baseH:e,L:s,T:o,totalW:a,totalH:n}=i;this._totalW=a;const l=this._config.canvas,c=this._config.defaults,d=this._config.cards??[],p=Us(this._config,this.hass),h=this._config.background?.fit??l?.fit??g("background_fit")??"cover",u=l?.box?de(l.box):"",m=Xs(this._config.virtuals,this.hass,this._virtualsCache);this._virtualsCache=m;const b=($,S,C)=>{if(!this.hass)return;const z=C==="tap"?$.tap_action:C==="hold"?$.hold_action:$.double_tap_action;if(z?.action==="expand-card"&&"fields"in $){this._expandScale=1,this._expandedCardId=$.id;return}if(z?.action==="open-extended"&&z.extended_card_id){this._openExtendedId=z.extended_card_id;return}$s(this,this.hass,{...$,entity:S},C)},y=l?.tap_action&&l.tap_action.action!=="none",x=this._expandedCardId?d.find($=>$.id===this._expandedCardId):void 0,f=()=>{this._expandedCardId=null,this._expandScale=1},k=this._config.extended_cards??[],v=this._openExtendedId?k.find($=>$.id===this._openExtendedId):void 0,w=()=>{this._openExtendedId=null};return r`
      <ha-card>
        <div
          class="ec-host"
          style="position:relative; width:100%; aspect-ratio:${a}/${n}; overflow:hidden;"
        >
          <div
            class="ec-canvas"
            style="position:absolute; top:0; left:0; width:${a}px; height:${n}px; transform:scale(var(--ec-scale,1)); transform-origin:top left; ${u}${y?"cursor:pointer;":""}"
            @click=${y&&l?()=>b(l,l.tap_action.entity,"tap"):_}
          >
            ${p?r`<img
                  class="ec-bg"
                  src=${p}
                  @load=${$=>{const S=$.target;this._imgNatural={w:S.naturalWidth,h:S.naturalHeight}}}
                  style="position:absolute; left:${s}px; top:${o}px; width:${t}px; height:${e}px; object-fit:${h}; display:block;"
                  decoding="async"
                  alt=""
                />`:_}
            ${lo(this._config,i,this.hass,this._cardBoxes,c)}
            ${d.map($=>hi($,c,this.hass,m,this._statsMap,this._historyMap,b,!1,this.editor))}
            ${no(this._config.zones,b)}
            ${(this._config.embedded_cards??[]).map($=>r`<mc-embedded-card
                data-emb-id="${$.id}"
                style="position:absolute;left:${$.position.x*100}%;top:${$.position.y*100}%;transform:${We[$.anchor??"top-left"]};width:${$.width}px;${$.height!=null?`height:${$.height}px;`:""}"
                .cardConfig=${$.card_config}
                .hass=${this.hass}
                ?transparent=${$.transparent??!1}
              ></mc-embedded-card>`)}
          </div>
          ${x?r`
            <div class="ec-expand-backdrop" @click=${f}>
              <div class="ec-expand-panel">
                <div class="ec-expand-card-wrap" style="transform:scale(${this._expandScale})" @click=${$=>$.stopPropagation()}>
                  ${hi(x,c,this.hass,m,this._statsMap,this._historyMap,b,!0)}
                </div>
                <button class="ec-expand-close" title="Collapse (Esc)" @click=${f}>✕</button>
              </div>
            </div>
          `:_}
          ${v?(()=>{const $=this._config.extended_card_defaults,S=v.width??$?.width??70,C=v.height??$?.height,z=`width:${S}%;${C!=null?`height:${C}%`:"max-height:85%"};overflow:auto;`;return r`
              <div class="ec-extended-backdrop" @click=${w}>
                <div class="ec-extended-panel" style=${z} @click=${P=>P.stopPropagation()}>
                  ${ao(v,$,c,this.hass,m,this._statsMap,this._historyMap,b)}
                  <button class="ec-ext-close" title="Close (Esc)" @click=${w}>✕</button>
                </div>
              </div>
            `})():_}
        </div>
      </ha-card>
    `}};tt.styles=[ro,co,It`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
      }
    `];at([it({attribute:!1})],tt.prototype,"hass",2);at([it({type:Boolean})],tt.prototype,"editor",2);at([M()],tt.prototype,"_config",2);at([M()],tt.prototype,"_imgNatural",2);at([M()],tt.prototype,"_cardBoxes",2);at([M()],tt.prototype,"_statsMap",2);at([M()],tt.prototype,"_historyMap",2);at([M()],tt.prototype,"_expandedCardId",2);at([M()],tt.prototype,"_expandScale",2);at([M()],tt.prototype,"_openExtendedId",2);tt=at([he("mosaic-canvas")],tt);const Pe=window;Pe.customCards=Pe.customCards||[];Pe.customCards.push({type:"mosaic-canvas",name:"Mosaic Canvas Card",description:"Place cards freely over a background image (day/night, EV variants, animated flows).",preview:!0});
