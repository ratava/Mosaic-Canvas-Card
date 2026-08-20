import{C as Ye,a as jt,b as Kt,s as mi,c as v,B as qt,v as bi,f as vi,i as Zt,n as gt,r as y,d as fi,T as Pe,e as Xt,_ as kt,g as Jt,h as We,j as Q,k as at,l as Me,m as Ie,o as je,p as yi,q as Ke,t as wi,u as pe,w as St,x as xi,A as _,y as $i,z as ki,D as Si,E as Ci,F as Ei,G as Ti,H as Pi,I as r,J as Ri,K as Ct,L as zi,M as Mi,N as Ii,O as Ai,P as Di,Q as Qt,R as Et,S as Fi,U as Te,V as Oi,W as ei,X as ti,Y as se,Z as Ue,$ as ii,a0 as $e,a1 as Tt,a2 as Ni,a3 as qe,a4 as Pt,a5 as Ae,a6 as Ze,a7 as Li,a8 as Bi,a9 as Gi,aa as Hi,ab as De,ac as Wi,ad as Rt,ae as nt,af as me,ag as Ui,ah as rt,ai as Vi,aj as Yi}from"./mosaic-canvas-card.js";const Re=(e,t=0,i=1)=>e>i?i:e<t?t:e,X=(e,t=0,i=Math.pow(10,t))=>Math.round(i*e)/i,ji=e=>Ji(lt(e)),lt=e=>(e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?X(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?X(parseInt(e.substring(6,8),16)/255,2):1}),Ki=e=>Xi(Zi(e)),qi=({h:e,s:t,v:i,a:s})=>{const o=(200-t)*i/100;return{h:X(e),s:X(o>0&&o<200?t*i/100/(o<=100?o:200-o)*100:0),l:X(o/2),a:X(s,2)}},ct=e=>{const{h:t,s:i,l:s}=qi(e);return`hsl(${t}, ${i}%, ${s}%)`},Zi=({h:e,s:t,v:i,a:s})=>{e=e/360*6,t=t/100,i=i/100;const o=Math.floor(e),a=i*(1-t),n=i*(1-(e-o)*t),l=i*(1-(1-e+o)*t),c=o%6;return{r:X([i,n,a,a,l,i][c]*255),g:X([l,i,i,n,a,a][c]*255),b:X([a,a,l,i,i,n][c]*255),a:X(s,2)}},Fe=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},Xi=({r:e,g:t,b:i,a:s})=>{const o=s<1?Fe(X(s*255)):"";return"#"+Fe(e)+Fe(t)+Fe(i)+o},Ji=({r:e,g:t,b:i,a:s})=>{const o=Math.max(e,t,i),a=o-Math.min(e,t,i),n=a?o===e?(t-i)/a:o===t?2+(i-e)/a:4+(e-t)/a:0;return{h:X(60*(n<0?n+6:n)),s:X(o?a/o*100:0),v:X(o/255*100),a:s}},si=(e,t)=>{if(e===t)return!0;for(const i in e)if(e[i]!==t[i])return!1;return!0},Qi=(e,t)=>e.toLowerCase()===t.toLowerCase()?!0:si(lt(e),lt(t)),zt={},oi=e=>{let t=zt[e];return t||(t=document.createElement("template"),t.innerHTML=e,zt[e]=t),t},mt=(e,t,i)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:i}))};let ke=!1;const dt=e=>"touches"in e,es=e=>ke&&!dt(e)?!1:(ke||(ke=dt(e)),!0),Mt=(e,t)=>{const i=dt(t)?t.touches[0]:t,s=e.el.getBoundingClientRect();mt(e.el,"move",e.getMove({x:Re((i.pageX-(s.left+window.pageXOffset))/s.width),y:Re((i.pageY-(s.top+window.pageYOffset))/s.height)}))},ts=(e,t)=>{const i=t.keyCode;i>40||e.xy&&i<37||i<33||(t.preventDefault(),mt(e.el,"move",e.getMove({x:i===39?.01:i===37?-.01:i===34?.05:i===33?-.05:i===35?1:i===36?-1:0,y:i===40?.01:i===38?-.01:0},!0)))};class ai{constructor(t,i,s,o){const a=oi(`<div role="slider" tabindex="0" part="${i}" ${s}><div part="${i}-pointer"></div></div>`);t.appendChild(a.content.cloneNode(!0));const n=t.querySelector(`[part=${i}]`);n.addEventListener("mousedown",this),n.addEventListener("touchstart",this),n.addEventListener("keydown",this),this.el=n,this.xy=o,this.nodes=[n.firstChild,n]}set dragging(t){const i=t?document.addEventListener:document.removeEventListener;i(ke?"touchmove":"mousemove",this),i(ke?"touchend":"mouseup",this)}handleEvent(t){switch(t.type){case"mousedown":case"touchstart":if(t.preventDefault(),!es(t)||!ke&&t.button!=0)return;this.el.focus(),Mt(this,t),this.dragging=!0;break;case"mousemove":case"touchmove":t.preventDefault(),Mt(this,t);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":ts(this,t);break}}style(t){t.forEach((i,s)=>{for(const o in i)this.nodes[s].style.setProperty(o,i[o])})}}class is extends ai{constructor(t){super(t,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:t}){this.h=t,this.style([{left:`${t/360*100}%`,color:ct({h:t,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${X(t)}`)}getMove(t,i){return{h:i?Re(this.h+t.x*360,0,360):360*t.x}}}class ss extends ai{constructor(t){super(t,"saturation",'aria-label="Color"',!0)}update(t){this.hsva=t,this.style([{top:`${100-t.v}%`,left:`${t.s}%`,color:ct(t)},{"background-color":ct({h:t.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${X(t.s)}%, Brightness ${X(t.v)}%`)}getMove(t,i){return{s:i?Re(this.hsva.s+t.x*100,0,100):t.x*100,v:i?Re(this.hsva.v-t.y*100,0,100):Math.round(100-t.y*100)}}}const os=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',as="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",ns="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",Oe=Symbol("same"),Xe=Symbol("color"),It=Symbol("hsva"),Je=Symbol("update"),At=Symbol("parts"),Dt=Symbol("css"),Ft=Symbol("sliders");class rs extends HTMLElement{static get observedAttributes(){return["color"]}get[Dt](){return[os,as,ns]}get[Ft](){return[ss,is]}get color(){return this[Xe]}set color(t){if(!this[Oe](t)){const i=this.colorModel.toHsva(t);this[Je](i),this[Xe]=t}}constructor(){super();const t=oi(`<style>${this[Dt].join("")}</style>`),i=this.attachShadow({mode:"open"});i.appendChild(t.content.cloneNode(!0)),i.addEventListener("move",this),this[At]=this[Ft].map(s=>new s(i))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,i,s){const o=this.colorModel.fromAttr(s);this[Oe](o)||(this.color=o)}handleEvent(t){const i=this[It],s={...i,...t.detail};this[Je](s);let o;!si(s,i)&&!this[Oe](o=this.colorModel.fromHsva(s))&&(this[Xe]=o,mt(this,"color-changed",{value:o}))}[Oe](t){return this.color&&this.colorModel.equal(t,this.color)}[Je](t){this[It]=t,this[At].forEach(i=>i.update(t))}}const ls={defaultColor:"#000",toHsva:ji,fromHsva:({h:e,s:t,v:i})=>Ki({h:e,s:t,v:i,a:1}),equal:Qi,fromAttr:e=>e};class cs extends rs{get colorModel(){return ls}}class ds extends cs{}customElements.define("hex-color-picker",ds);const ht=1,hs=/^(entity|entity_id|entities|device_id|area_id)$|_entity$/,Ne=e=>typeof e=="string"&&e.startsWith("virtual:");function pt(e){if(Array.isArray(e))return e.map(i=>pt(i));if(typeof e!="object"||e===null)return e;const t={};for(const[i,s]of Object.entries(e))hs.test(i)?Ne(s)?t[i]=s:Array.isArray(s)&&s.some(Ne)&&(t[i]=s.filter(Ne)):i==="inputs"&&Array.isArray(s)&&s.every(o=>typeof o=="string")?t[i]=s.filter(Ne):t[i]=pt(s);return t}function ps(e,t,i={}){const{type:s,...o}=e;return{ec_template:!0,version:ht,card_version:Ye,name:t.trim()||"Mosaic Canvas Template",exported:new Date().toISOString(),config:i.includeEntities===!1?pt(o):o}}function us(e){const t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=`${e.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function _s(e){let t;try{t=JSON.parse(e)}catch{return{template:null,error:"Invalid JSON — could not parse file."}}if(typeof t!="object"||t===null||!t.ec_template)return{template:null,error:"Not a valid Mosaic Canvas template file."};const i=t;return typeof i.version!="number"?{template:null,error:"Template is missing a version number."}:i.version>ht?{template:null,error:`Template schema v${i.version} is newer than this card supports (v${ht}). Update the card first.`}:{template:i,error:null}}function gs(e,t){return{type:t,...e.config}}const ni=1;function ms(e,t){return{mosaic_control_variants:!0,version:ni,card_version:Ye,name:t.trim()||"Mosaic Control Variants",exported:new Date().toISOString(),variants:e}}function bs(e){const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=`${e.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}function vs(e){let t;try{t=JSON.parse(e)}catch{return{pack:null,error:"File is not valid JSON."}}if(typeof t!="object"||t===null)return{pack:null,error:"File is not a control variant pack."};const i=t;return i.mosaic_control_variants!==!0?{pack:null,error:"File is not a control variant pack. (Card layouts use Import Template instead.)"}:typeof i.version!="number"||i.version>ni?{pack:null,error:`Pack was made by a newer Mosaic version (schema ${String(i.version)}). Update the card first.`}:typeof i.variants!="object"||i.variants===null?{pack:null,error:"Pack contains no variants."}:{pack:{mosaic_control_variants:!0,version:i.version,card_version:i.card_version??"unknown",name:i.name?.trim()||"Imported variants",exported:i.exported??"",variants:i.variants},error:null}}function fs(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&t.id.length>0&&typeof t.label=="string"&&t.label.length>0}function ys(e,t){const i={...e};let s=0,o=0;for(const a of jt){const n=(t.variants[a]??[]).filter(fs);if(!n.length)continue;const l=[...i[a]??[]],c=new Set([...Kt(a).map(d=>d.id),...l.map(d=>d.id)]);for(const d of n){let h=d.id;if(c.has(h)){const u=mi(d.id);let g=2;for(;c.has(`${u}_${g}`);)g++;h=`${u}_${g}`,o++}c.add(h),l.push({...d,id:h}),s++}i[a]=l}return{merged:i,added:s,renamed:o}}var ws=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,te=(e,t,i,s)=>{for(var o=s>1?void 0:s?xs(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(o=(s?n(t,i,o):n(o))||o);return s&&o&&ws(t,i,o),o};const Ot=ei(at),ri=(()=>{try{return new URL("./hero-dashboard.png",import.meta.url).href}catch{return"/local/community/mosaic-canvas-card/hero-dashboard.png"}})();function li(e){const t=new Set,i=a=>{a&&!a.startsWith("virtual:")&&t.add(a)},s=a=>{i(a.entity),i(a.charging_entity),i(a.tank_pct_entity),i(a.tank_volume_entity),i(a.tank_capacity_entity);for(const n of a.graph_series??[])i(n.entity);for(const n of a.options??[])i(n.entity);i(a.slider_labels?.left?.entity),i(a.slider_labels?.center?.entity),i(a.slider_labels?.right?.entity)},o=e.background;o&&(o.source==="state"?i(o.entity):o.source==="entity"?i(o.mode_entity):o.source!=="day"&&o.source!=="night"&&o.source!=="single"&&i(o.sun_entity??v("sun_entity")??"sun.sun"));for(const a of e.cards??[]){i(a.visible_when?.entity),a.bg?.rules?.length&&i(a.bg.entity);for(const n of a.fields)s(n)}for(const a of e.extended_cards??[])for(const n of a.fields)s(n);for(const a of e.virtuals??[]){for(const n of a.inputs??[])i(n);i(a.entity),i(a.value_entity),i(a.rate_entity),i(a.capacity_entity),i(a.pct_entity),i(a.power_entity)}for(const a of e.flows??[])i(a.entity);return[...t]}console.info(`%c MOSAIC-CANVAS %c v${Ye} · build ${qt} `,"color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;");let G=class extends Xt{constructor(){super(...arguments),this.editor=!1,this._cardBoxes={},this._statsMap=new Map,this._historyMap=new Map,this._expandedCardId=null,this._expandScale=1,this._openExtendedId=null,this._extZoom=1,this._totalW=1e3,this._pendingScale=!1,this._pendingExpand=!1,this._pendingExtZoom=!1,this._extZoomPasses=0,this._statFetchGen=0,this._virtualsCache=new Map,this._pollTimers=[],this._sweepInFlight=!1,this._pollPaused=!1,this._editMode=!1,this._isPreview=!1,this._mediaUrls={},this._mediaPending=new Set,this._mediaAt={},this._offScreen=!1}static async getConfigElement(){return await kt(()=>Promise.resolve().then(()=>Yt),void 0),document.createElement(Jt)}static getStubConfig(){const e=ri;return{background:{source:"auto",sun_entity:"sun.sun",images:{day:{0:e},night:{0:e}}},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}}static _prefetchEditor(){if(G._editorPrefetched)return;G._editorPrefetched=!0,(typeof requestIdleCallback=="function"?requestIdleCallback:t=>setTimeout(t,250))(()=>{kt(()=>Promise.resolve().then(()=>Yt),void 0).catch(()=>{G._editorPrefetched=!1})})}get editMode(){return this._editMode}set editMode(e){this._editMode=e,e&&G._prefetchEditor()}get preview(){return this._isPreview}set preview(e){this._isPreview=e,e&&G._prefetchEditor()}setConfig(e){if(!e)throw new Error("Invalid configuration");if(!Array.isArray(e.cards))throw new Error("Mosaic Canvas: 'cards' must be a list (use cards: [] for an empty canvas)");this._config=e,We(e.defaults?.control_variants)}getCardSize(){if(!this._config)return 5;const{totalW:e,totalH:t}=Q(this._config,this._imgNatural);return!e||!t?5:Math.max(1,Math.round(500*t/e/50))}getGridOptions(){return{columns:12,rows:"auto"}}get cardBoxes(){return this._cardBoxes}shouldUpdate(e){if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass");if(!t||!this.hass)return!0;for(const i of this._referencedEntities())if(t.states[i]!==this.hass.states[i])return!0;return this._forwardHassToEmbedded(),!1}_forwardHassToEmbedded(){this.renderRoot?.querySelectorAll(at).forEach(e=>{e.hass=this.hass})}_referencedEntities(){const e=this._config;if(!e)return[];if(this._refEntityCache?.config===e)return this._refEntityCache.ids;const t=li(e);return this._refEntityCache={config:e,ids:t},t}_mediaIds(){const e=new Set,t=s=>{s?.startsWith("media-source://")&&e.add(s)},i=this._config?.background;t(i?.url);for(const s of i?.rules??[])t(s.url);for(const s of Object.values(i?.images??{}))for(const o of Object.values(s??{}))t(o);for(const s of this._config?.cards??[]){t(s.bg?.url);for(const o of s.bg?.rules??[])t(o.url)}return[...e]}async _ensureMediaResolved(){if(!this.hass)return;const e=this.hass,t=Date.now(),i=this._mediaIds().filter(o=>this._mediaPending.has(o)?!1:this._mediaUrls[o]?t-(this._mediaAt[o]??0)>=G.MEDIA_TTL_MS:!0);if(!i.length)return;i.forEach(o=>this._mediaPending.add(o));const s={};if(await Promise.all(i.map(async o=>{try{const a=await e.callWS({type:"media_source/resolve_media",media_content_id:o}),n=String(a?.url??"");n&&(s[o]=n)}catch{}finally{this._mediaPending.delete(o)}})),Object.keys(s).length){const o=Date.now();for(const a of Object.keys(s))this._mediaAt[a]=o;this._mediaUrls={...this._mediaUrls,...s}}}_startMediaRefresh(){this._mediaTimer===void 0&&(this._mediaTimer=setInterval(()=>{this._mediaIds().length&&this._ensureMediaResolved()},G.MEDIA_TTL_MS))}_stopMediaRefresh(){this._mediaTimer!==void 0&&(clearInterval(this._mediaTimer),this._mediaTimer=void 0)}_recomputeScale(){const e=this.renderRoot?.querySelector(".ec-host");if(!e||this._totalW===0)return;const t=e.clientWidth;t!==0&&this.style.setProperty("--mc-scale",String(t/this._totalW))}_ensureRo(){if(this._ro)return;const e=this.renderRoot?.querySelector(".ec-host");e&&(this._ro=new ResizeObserver(()=>{this._recomputeScale(),this._recomputeExpandScale(),this._extZoomPasses=0,this._recomputeExtZoom()}),this._ro.observe(e))}firstUpdated(){this._ensureRo(),this._ensureVisibilityWatch(),this._recomputeScale()}updated(e){this._ensureRo(),this._ensureVisibilityWatch(),(e.has("_config")||e.has("_imgNatural"))&&(this._pendingScale=!0,this._pendingExpand=!0),e.has("_expandedCardId")&&(this._pendingExpand=!0),e.has("_openExtendedId")&&(this._extZoomPasses=0,this._pendingExtZoom=!0),e.has("_extZoom")&&(this._pendingExtZoom=!0),this._measureRaf!==void 0&&cancelAnimationFrame(this._measureRaf),this._measureRaf=requestAnimationFrame(()=>{this._measureRaf=void 0,this._pendingScale&&(this._pendingScale=!1,this._recomputeScale()),this._pendingExpand&&(this._pendingExpand=!1,this._recomputeExpandScale()),this._pendingExtZoom&&(this._pendingExtZoom=!1,this._recomputeExtZoom()),this._measureCardBoxes()}),(e.has("_config")||e.has("hass")&&!e.get("hass"))&&this._restartStatPolling()}_canvasScale(){const e=this.renderRoot?.querySelector(".ec-host");if(!e||this._totalW<=0)return;const t=e.clientWidth;return t>0?t/this._totalW:void 0}_recomputeExpandScale(){if(!this._expandedCardId){this._expandScale!==1&&(this._expandScale=1);return}const e=this.renderRoot?.querySelector(".ec-expand-panel"),t=this.renderRoot?.querySelector(".ec-expand-card-wrap");if(!e||!t)return;const i=t.offsetWidth,s=t.offsetHeight;if(!i||!s)return;const o=Math.min(e.clientWidth/i,e.clientHeight/s),a=this._canvasScale(),n=a===void 0?o:Math.min(a,o);Number.isFinite(n)&&n>0&&Math.abs(n-this._expandScale)>.01&&(this._expandScale=n)}_recomputeExtZoom(){if(!this._openExtendedId){this._extZoom!==1&&(this._extZoom=1),this._extZoomPasses=0;return}const e=this.renderRoot?.querySelector(".ec-extended-panel");if(!e)return;if(this._extZoomPasses===0){this._extZoomPasses=1;const a=this._canvasScale();if(a!==void 0&&Math.abs(a-this._extZoom)>.01){this._extZoom=a;return}}if(this._extZoomPasses>=G.EXT_ZOOM_MAX_PASSES)return;const t=e.scrollHeight-e.clientHeight,i=e.scrollWidth-e.clientWidth;if(t<=1&&i<=1||!e.scrollHeight||!e.scrollWidth)return;const s=Math.min(t>1?e.clientHeight/e.scrollHeight:1,i>1?e.clientWidth/e.scrollWidth:1),o=this._extZoom*s;!Number.isFinite(o)||o<=0||(this._extZoomPasses++,Math.abs(o-this._extZoom)>.01&&(this._extZoom=o))}_stopStatPolling(){this._statDebounceTimer!==void 0&&(clearTimeout(this._statDebounceTimer),this._statDebounceTimer=void 0);for(const e of this._pollTimers)clearInterval(e);this._pollTimers=[],this._pollSig=void 0}async _runPoll(e,t){if(!this.hass||!this._config)return;const i=t===void 0;i&&(this._sweepInFlight=!0);try{await this._runPollInner(e,t)}finally{i&&(this._sweepInFlight=!1)}}async _runPollInner(e,t){if(!this.hass||!this._config)return;const i=c=>t===void 0?c:c.filter(d=>(d.refreshMs??t)===t),s=i(Me(this._config)),o=i(Ie(this._config)),a=je()?performance.now():0;let n=0,l=0;if(await Promise.all([(async()=>{if(!s.length||!this.hass)return;const c=je()?performance.now():0,d=await yi(this.hass,s,this._statsMap);n=Ke(c),e===this._statFetchGen&&(this._statsMap=d)})(),(async()=>{if(!o.length||!this.hass)return;const c=je()?performance.now():0,d=await wi(this.hass,o,this._historyMap);l=Ke(c),e===this._statFetchGen&&(this._historyMap=d)})()]),s.length||o.length){const c=this._lastPollAt?`, ${Math.round((Date.now()-this._lastPollAt)/1e3)}s since last`:"";this._lastPollAt=Date.now(),pe(`fetched ${s.length} stat + ${o.length} history target(s)${t===void 0?" (initial sweep)":` on the ${St(t)} timer`} in ${Ke(a)}ms (stats ${n}ms, history ${l}ms)${c}${e===this._statFetchGen?"":" — SUPERSEDED, result discarded"}`)}}_pollSignature(e,t){const i=s=>`${s.id}|${s.entity}|${s.refreshMs??""}|${JSON.stringify(s)}`;return[...e.map(i),...t.map(i)].sort().join(`
`)}_pollIsStale(){if(!this._lastPollAt)return!0;if(!this._config)return!1;const e=[...Me(this._config),...Ie(this._config)].map(t=>t.refreshMs).filter(t=>typeof t=="number"&&t>0);return e.length?Date.now()-this._lastPollAt>=Math.min(...e):!1}_restartStatPolling(e=!1){if(!this._config||!this.hass)return;const t=Me(this._config),i=Ie(this._config),s=this._pollSignature(t,i);if(!e&&s===this._pollSig&&this._pollTimers.length){pe("restart ignored — same targets, timers already running");return}if(this._sweepInFlight){pe(`restart declined — a full sweep is already in flight${e?" (force ignored)":""}`),this._stopStatPolling(),this._pollPaused||this._armTimers(this._statFetchGen,t,i);return}e||pe(`restarting — ${s!==this._pollSig?"targets changed":"no timers armed"}`),this._stopStatPolling(),this._pollSig=s;const o=++this._statFetchGen;!t.length&&!i.length||(e||this._statsMap.size===0&&this._historyMap.size===0?(pe(e?"refetching now":"cold start — fetching immediately"),this._runPoll(o)):this._statDebounceTimer=setTimeout(()=>{this._statDebounceTimer=void 0,this._runPoll(o)},250),this._pollPaused)||this._armTimers(o,t,i)}_armTimers(e,t,i){const s=new Set;for(const o of[...t,...i])o.refreshMs&&s.add(o.refreshMs);for(const o of s)this._pollTimers.push(setInterval(()=>void this._runPoll(e,o),o));this._pollSig=this._pollSignature(t,i),pe(`armed ${s.size} timer(s): ${[...s].sort((o,a)=>o-a).map(St).join(", ")} for ${t.length} stat + ${i.length} history target(s)`)}_setPollPaused(e){if(e!==this._pollPaused){if(this._pollPaused=e,e){pe(`paused — ${document.hidden?"tab hidden":"card off-screen"}`),this._stopStatPolling();return}if(pe("resumed"),this._pollIsStale()){this._restartStatPolling(!0);return}!this._config||!this.hass||(pe("resume within the refresh interval — re-arming timers, no fetch"),this._armTimers(this._statFetchGen,Me(this._config),Ie(this._config)))}}_ensureVisibilityWatch(){if(this._onVisibility||(this._onVisibility=()=>this._setPollPaused(document.hidden||this._offScreen),document.addEventListener("visibilitychange",this._onVisibility)),this._io)return;const e=this.renderRoot?.querySelector(".ec-host");e&&(this._io=new IntersectionObserver(t=>{const i=t[t.length-1];if(!i)return;const s=i.boundingClientRect;s.width===0&&s.height===0||(this._offScreen=!i.isIntersecting,this._setPollPaused(document.hidden||this._offScreen))},{rootMargin:"200px"}),this._io.observe(e))}_measureCardBoxes(){if(!this._config)return;const e=this.renderRoot?.querySelectorAll(".ec-card[data-card-id]"),{totalW:t,totalH:i}=Q(this._config,this._imgNatural),s={},o=(n,l)=>{const[c,d]=Te[l],h=n.offsetWidth,u=n.offsetHeight,g=n.offsetLeft-c*h,b=n.offsetTop-d*u;return{x:g/t,y:b/i,w:h/t,h:u/i}};for(const n of e??[]){const l=n.getAttribute("data-card-id");if(!l)continue;const c=this._config?.cards.find(d=>d.id===l);s[l]=o(n,c?.anchor??"top-left")}this.renderRoot?.querySelectorAll(`${at}[data-emb-id]`)?.forEach(n=>{const l=n.getAttribute("data-emb-id");if(!l)return;const c=this._config?.embedded_cards?.find(d=>d.id===l);s[l]=o(n,c?.anchor??"top-left")}),JSON.stringify(s)!==JSON.stringify(this._cardBoxes)&&(this._cardBoxes=s,this.dispatchEvent(new CustomEvent("ec-boxes-changed",{detail:{boxes:s}})))}connectedCallback(){super.connectedCallback(),xi.then(()=>this.requestUpdate()),this._config&&this.hass&&this._restartStatPolling(),this._ensureRo(),this._recomputeScale(),this._onKeyDown=e=>{if(e.key==="Escape"){if(this._openExtendedId!==null){this._openExtendedId=null;return}this._expandedCardId!==null&&(this._expandedCardId=null)}},window.addEventListener("keydown",this._onKeyDown),this._startMediaRefresh()}disconnectedCallback(){this._onKeyDown&&(window.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=void 0),super.disconnectedCallback(),this._stopMediaRefresh(),this._ro?.disconnect(),this._ro=void 0,this._io?.disconnect(),this._io=void 0,this._onVisibility&&(document.removeEventListener("visibilitychange",this._onVisibility),this._onVisibility=void 0),this._offScreen=!1,this._pollPaused=!1,this._measureRaf!==void 0&&(cancelAnimationFrame(this._measureRaf),this._measureRaf=void 0),this._stopStatPolling()}_svcData(e,t,i){const s={entity_id:i};for(const[o,a]of Object.entries(e??{}))s[o]=a==="{value}"?t:typeof a=="string"?a.split("{value}").join(String(t)):a;return s}_writeControl(e,t,i){const s=i??e.entity;if(!this.hass||!s)return;const o=s.split(".")[0],a=n=>e.value_scale!=null?n*e.value_scale:n;if(i){typeof t=="boolean"&&this.hass.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:s});return}if(e.control_service){const n=e.control_service.indexOf(".");if(n<=0)return;const l=e.control_service.slice(0,n),c=e.control_service.slice(n+1),d=typeof t=="number"?a(t):t;this.hass.callService(l,c,this._svcData(e.control_service_data,d,s));return}if(typeof t=="boolean"){this.hass.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:s});return}if(typeof t=="number"){(o==="input_number"||o==="number"||o==="counter")&&this.hass.callService(o,"set_value",{entity_id:s,value:a(t)});return}typeof t=="string"&&(o==="input_select"||o==="select"?this.hass.callService(o,"select_option",{entity_id:s,option:t}):(o==="input_text"||o==="text")&&this.hass.callService(o,"set_value",{entity_id:s,value:t}))}render(){if(!this._config)return _;const e=Q(this._config,this._imgNatural),{baseW:t,baseH:i,L:s,T:o,totalW:a,totalH:n}=e;this._totalW=a;const l=this._config.canvas,c=this._config.defaults,d=this._config.cards??[],h=$i(this._config,this.hass,this._mediaUrls),u=this._config.background?.fit??l?.fit??v("background_fit")??"cover",g=l?.box?ki(l.box):"",b=Si(this._config.virtuals,this.hass,this._virtualsCache,this._statsMap);this._virtualsCache=b;const m=(E,J,ee)=>{if(!this.hass)return;const oe=ee==="tap"?E.tap_action:ee==="hold"?E.hold_action:E.double_tap_action;if(oe?.action==="expand-card"&&"fields"in E){this._expandScale=1,this._expandedCardId=E.id;return}if(oe?.action==="open-extended"&&oe.extended_card_id){this._openExtendedId=oe.extended_card_id;return}Oi(this,this.hass,{...E,entity:J},ee)},z=(E,J,ee)=>{this.hass&&(ee??E.entity)&&this._writeControl(E,J,ee)};this._ensureMediaResolved();const P={hass:this.hass,virtuals:b,stats:this._statsMap,history:this._historyMap,onAction:m,onChange:z,mediaUrls:this._mediaUrls},k=Ci(l),x=this._expandedCardId?d.find(E=>E.id===this._expandedCardId):void 0,C=()=>{this._expandedCardId=null,this._expandScale=1},S=this._config.extended_cards??[],$=this._openExtendedId?S.find(E=>E.id===this._openExtendedId):void 0,D=()=>{this._openExtendedId=null},V=l?.box?.radius!=null?`border-radius:${l.box.radius}px;`:"";return r`
      <ha-card style=${V}>
        <div
          class="ec-host"
          style="position:relative; width:100%; aspect-ratio:${a}/${n}; overflow:hidden;${Ei(c)}${Ti(c)}"
        >
          <div
            class="ec-canvas"
            style="position:absolute; top:0; left:0; width:${a}px; height:${n}px; transform:scale(var(--mc-scale,1)); transform-origin:top left; ${g}${k?"cursor:pointer;":""}"
            ${Pi(l,m)}
          >
            ${h?r`<img
                  class="ec-bg"
                  src=${h}
                  @load=${E=>{const J=E.target;this._imgNatural={w:J.naturalWidth,h:J.naturalHeight}}}
                  style="position:absolute; left:${s}px; top:${o}px; width:${t}px; height:${i}px; object-fit:${u}; display:block;"
                  decoding="async"
                  alt=""
                />`:_}
            ${Ri(this._config,e,this.hass,this._cardBoxes,c)}
            ${d.map(E=>Ct(E,c,P,!1,this.editor))}
            ${zi(this._config.zones,m)}
            ${(this._config.embedded_cards??[]).filter(E=>this.editor||!E.visible_when||Mi(E.visible_when,this.hass,b)).map(E=>{const J=Ii(E,c);return Qt`<${Ot}
                  data-emb-id="${E.id}"
                  style="position:absolute;left:${E.position.x*100}%;top:${E.position.y*100}%;transform:${Ai[E.anchor??"top-left"]};width:${E.width}px;${E.height!=null?`height:${E.height}px;`:""}${Di(E,c)}"
                  .cardConfig=${E.card_config}
                  .hass=${this.hass}
                  ?transparent=${J.transparent}
                  .extraCss=${J.extraCss}
                ></${Ot}>`})}
          </div>
          ${x?r`
            <div class="ec-expand-backdrop" @click=${C}>
              <div class="ec-expand-panel"
                style="border-radius:${Et(x.box,c?.card)}px">
                <div class="ec-expand-card-wrap" style="transform:scale(${this._expandScale})" @click=${E=>E.stopPropagation()}>
                  ${Ct(x,c,P,!0,!1)}
                </div>
                <button class="ec-expand-close" title="Collapse (Esc)" @click=${C}>✕</button>
              </div>
            </div>
          `:_}
          ${$?(()=>{const E=this._config.extended_card_defaults,J=$.width??E?.width??70,ee=$.height??E?.height,oe=Et($.box,E?.card),ye=`width:${J}%;${ee!=null?`height:${ee}%`:"max-height:85%"};overflow:auto;border-radius:${oe}px;`;return r`
              <div class="ec-extended-backdrop" @click=${D}>
                <div class="ec-extended-panel" style=${ye} @click=${Se=>Se.stopPropagation()}>
                  <div class="ec-ext-zoom" style="zoom:${this._extZoom}">
                    ${Fi($,E,c,P)}
                  </div>
                  <button class="ec-ext-close" title="Close (Esc)" @click=${D}>✕</button>
                </div>
              </div>
            `})():_}
        </div>
      </ha-card>
    `}};G._editorPrefetched=!1;G.MEDIA_TTL_MS=600*1e3;G.EXT_ZOOM_MAX_PASSES=4;G.styles=[bi,vi,Zt`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
      }
    `];te([gt({attribute:!1})],G.prototype,"hass",2);te([gt({type:Boolean})],G.prototype,"editor",2);te([y()],G.prototype,"_config",2);te([y()],G.prototype,"_imgNatural",2);te([y()],G.prototype,"_cardBoxes",2);te([y()],G.prototype,"_statsMap",2);te([y()],G.prototype,"_historyMap",2);te([y()],G.prototype,"_expandedCardId",2);te([y()],G.prototype,"_expandScale",2);te([y()],G.prototype,"_openExtendedId",2);te([y()],G.prototype,"_extZoom",2);te([y()],G.prototype,"_mediaUrls",2);G=te([ti(Pe)],G);const ut=window;ut.customCards=ut.customCards||[];ut.customCards.push({type:Pe,name:fi,description:"Place cards freely over a background image (day/night, EV variants, animated flows).",preview:!0,image:ri});const ci=[{id:"popover-ref",label:"Dangling popover actions",hint:"Open Popover pointing at a card that no longer exists",icon:"mdi:picture-in-picture-bottom-right"},{id:"flow-endpoint",label:"Broken flow endpoints",hint:"Flow point anchored to a removed card",icon:"mdi:chart-timeline-variant"},{id:"no-write-target",label:"Nowhere to write",hint:"A value is set, but there is no entity to write it to",icon:"mdi:pencil-off-outline"},{id:"entity",label:"Missing entities",hint:"Entity not present in Home Assistant",icon:"mdi:database-off-outline"},{id:"virtual-ref",label:"Dangling virtual entities",hint:"A virtual: reference with no matching virtual entity",icon:"mdi:memory"},{id:"unreachable-key",label:"Not editable here",hint:"Set in YAML — this editor offers no screen for it",icon:"mdi:code-braces"},{id:"unpickable-value",label:"Value not offered",hint:"Legal in YAML but absent from this editor's picker",icon:"mdi:format-list-bulleted-type"},{id:"grid-placement",label:"Grid placement problems",hint:"A field outside its card's cells, or sharing one",icon:"mdi:view-grid-outline"}],$s=ci.reduce((e,t)=>(e[t.id]=t.icon,e),{}),ks=["entity","attribute"],Qe={card:["id","fields","position","group"],extCard:["id","fields"],field:["id","type","variant","svg","shape","display_name","column","column_end","row","row_end","time_until_layout",...ks],zone:["id"],flow:["id","points"],emb:["id","group"],virtual:["id","inputs"]},Ss=["tap_action","hold_action","double_tap_action"],Cs={tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double-tap action"},Es=ii;function di(e,t){return e!=="field"?Qe[e]:se(t.type)?[...Qe.field,...Es]:Qe.field}function Ts(e){return di("field",e)}const Nt="virtual:";function we(e){return t=>{const i=e.get(t);return i?{key:t,label:i}:{key:t}}}function Ps(e,t,i){const s=[],o=[],a=["Global Defaults and the config root are not scanned for keys this editor cannot reach — their override badges cover that ground instead.","Grid placement is checked for cells outside the card and for two fields sharing one. Whether a field is too big for its cell is not checked — that depends on the rendered text, which this screen cannot measure."],n=[...new Set(Object.values(i.offered).flatMap(f=>Object.keys(f??{})))].sort();if(n.length&&a.push(`Picker values are verified for ${n.join(", ")}. Other dropdowns build their option list inline and are not checked.`),!e)return{issues:s,skipped:o,coverage:a};const l=e.cards??[],c=e.extended_cards??[],d=e.embedded_cards??[],h=e.zones??[],u=e.flows??[],g=e.virtuals??[],b=new Set(l.map(f=>f.id)),m=new Set(c.map(f=>f.id)),z=new Set(g.map(f=>f.id)),P=new Set(e.health_ignore??[]),k=t?.states;k||o.push({check:"entity",reason:"Home Assistant state is not available to the editor yet, so entity references were not verified."});const x=f=>{const T=`${f.check}|${f.ref}|${f.slot}`;s.push({id:T,check:f.check,severity:f.severity,where:f.where,detail:f.detail,icon:$s[f.check],ignored:P.has(T),...f.target?{target:f.target}:{},...f.removal?{removal:f.removal}:{}})},C=(f,T)=>{if(f){if(f.startsWith(Nt)){const N=f.slice(Nt.length);z.has(N)||x({check:"virtual-ref",severity:"error",ref:T.ref,slot:T.slot,where:T.where,detail:`${T.label} points at virtual entity “${N}”, which is not in the Virtual Entities list.`,target:T.target});return}k&&(k[f]||x({check:"entity",severity:"error",ref:T.ref,slot:T.slot,where:T.where,detail:`${T.label} is set to “${f}”, which does not exist in Home Assistant.`,target:T.target}))}},S=(f,T)=>{for(const N of Ss){const I=f[N];if(!I)continue;const A=Cs[N],R=`${T.slotPfx??""}${N}`;I.action==="open-extended"&&(I.extended_card_id?m.has(I.extended_card_id)||x({check:"popover-ref",severity:"error",ref:T.ref,slot:R,where:T.where,detail:`${A} opens popover card “${I.extended_card_id}”, which is not in the Popover Cards list.`,target:T.target}):x({check:"popover-ref",severity:"error",ref:T.ref,slot:R,where:T.where,detail:`${A} opens a popover card but names none.`,target:T.target}));const L=[];I.entity&&L.push(I.entity);const B=I.target?.entity_id;typeof B=="string"?L.push(B):Array.isArray(B)&&L.push(...B.filter(Y=>typeof Y=="string")),L.forEach((Y,de)=>C(Y,{ref:T.ref,slot:`${R}.entity.${de}`,label:`${A} entity`,where:T.where,target:T.target}))}},$=f=>{const T=di(f.kind,f.item),N=i.offered[f.kind],I=we(f.screens.labels);for(const[A,R]of Object.entries(f.item)){if(R===void 0)continue;const L=f.screens.slots.get(A);if(L===void 0){if(T.includes(A))continue;x({check:"unreachable-key",severity:"info",ref:f.ref,slot:A,where:f.where,detail:`“${A}” is set in the YAML but no screen in this editor can show or change it.`,target:f.base,removal:f.removal(A)});continue}const B=N?.[A];B&&typeof R=="string"&&R!==""&&!B.includes(R)&&x({check:"unpickable-value",severity:"info",ref:f.ref,slot:A,where:f.where,detail:`“${A}” is “${R}”, which this editor's picker does not offer — it can only be changed in YAML.`,target:{...f.base,path:[...f.base.path,I(L)]},removal:f.removal(A)})}},D=(f,T,N,I,A,R)=>{const L=f==="popover",B=L?"egs":"gs",Y=L?"eopt":"opt",de=L?"xfield":"field";R.forEach(O=>{const he=i.fieldName(O),ae=`${T} › ${A} › ${he}`,H=`${de}:${I}/${O.id}`,q={key:`field:${O.id}`,label:he},ne=i.screens("field",O),j=we(ne.labels),ie=(...W)=>({tab:"cards",panel:f,path:[N,q,...W]}),wt=se(O.type),gi=j(wt?"fsec:control":"fsec:source");C(O.entity,{ref:H,slot:"entity",label:"Entity",where:ae,target:ie(gi)});for(const[W,Z]of[["charging_entity","Charging entity"],["tank_pct_entity","Tank % entity"],["tank_volume_entity","Tank volume entity"],["tank_capacity_entity","Tank capacity entity"]])C(O[W],{ref:H,slot:W,label:Z,where:ae,target:ie(j("fsec:source"))});(O.graph_series??[]).forEach((W,Z)=>{const le=W.label||W.entity||`Series ${Z+1}`;C(W.entity,{ref:H,slot:`graph_series.${Z}.entity`,label:"Series entity",where:`${ae} › ${le}`,target:ie(j("fsec:series"),{key:`${B}:${Z}`,label:le})})}),(O.options??[]).forEach((W,Z)=>{const le=W.label||W.value||`Option ${Z+1}`,xt=`${ae} › ${le}`,$t=ie(j("fsec:options"),{key:`${Y}:${Z}`,label:le});C(W.entity,{ref:H,slot:`options.${Z}.entity`,label:"Option entity",where:xt,target:$t}),S(W,{ref:H,where:xt,target:$t,slotPfx:`options.${Z}.`})});for(const W of["left","center","right"])C(O.slider_labels?.[W]?.entity,{ref:H,slot:`slider_labels.${W}.entity`,label:`${W} track label entity`,where:ae,target:ie(j("fsec:sliderpoints"))});if(S(O,{ref:H,where:ae,target:ie(j(wt?"fsec:control":"fsec:actions"))}),!O.entity){const W=(O.options??[]).filter(Z=>(Z.value??"")!==""&&(O.type==="dropdown"||!Z.entity)&&!(O.type==="button_group"&&Z.tap_action?.action==="open-extended"));if((O.type==="button_group"||O.type==="dropdown")&&W.length){const Z=W.length,le=Z===1;x({check:"no-write-target",severity:"error",ref:H,slot:"entity",where:ae,detail:`${Z} option${le?"":"s"} write${le?"s":""} a value to this field's entity, but the field has none — ${le?"it renders":"they render"} disabled and can do nothing. ${O.type==="dropdown"?"Set an entity on the field — a dropdown always writes to it and ignores an entity set on the option.":`Give ${le?"the option its own entity":"each option its own entity"}, or set one on the field.`}`,target:ie(j("fsec:options"))})}O.type==="button"&&(O.button_value??"")!==""&&x({check:"no-write-target",severity:"error",ref:H,slot:"button_value",where:ae,detail:`Press writes “${O.button_value}” to this field's entity, but the field has none — the button renders disabled.`,target:ie(j("fsec:options"))})}$({kind:"field",item:O,screens:ne,ref:H,where:ae,base:{tab:"cards",panel:f,path:[N,q]},removal:W=>({kind:"field",extended:L,cardId:I,itemId:O.id,key:W})})})},V=(f,T)=>{if(Ue(f,e.defaults)!=="grid")return;const N=f.grid?.columns??e.defaults?.card_grid_columns??v("card_grid_columns")??4,I=f.grid?.rows??e.defaults?.card_grid_rows??v("card_grid_rows")??4,A=new Map;(f.fields??[]).forEach(R=>{const L=i.fieldName(R),B=`field:${f.id}/${R.id}`,Y=`${T.where} › ${L}`,de={tab:"cards",panel:"mosaic",path:[T.crumb,{key:`field:${R.id}`,label:L}]},O=(H,q)=>x({check:"grid-placement",severity:"error",ref:B,slot:H,where:Y,detail:q,target:de});for(const[H,q,ne,j,ie]of[["column",R.column,R.column_end,N,"Column"],["row",R.row,R.row_end,I,"Row"]])q!=null&&(q<1||q>j)&&O(H,`${ie} ${q} is outside this card's grid, which is ${j} ${H}${j===1?"":"s"} — the field renders outside the cells the card sizes.`),ne!=null&&(ne>j?O(`${H}_end`,`${ie} span ends at ${ne}, past this card's ${j} ${H}${j===1?"":"s"} — the field renders outside the cells the card sizes.`):q!=null&&ne<=q&&O(`${H}_end`,`${ie} span ends at ${ne}, which is not past its start of ${q} — the span is ignored and the field occupies one cell.`));if(R.row==null||R.column==null)return;const he=R.row_end!=null&&R.row_end>R.row?R.row_end:R.row,ae=R.column_end!=null&&R.column_end>R.column?R.column_end:R.column;for(let H=R.row;H<=he;H++)for(let q=R.column;q<=ae;q++){const ne=`${H},${q}`,j=A.get(ne);if(j&&j!==L){O("row",`Shares row ${H}, column ${q} with “${j}” — both render, one on top of the other.`);return}A.set(ne,L)}})},E=i.screens("card"),J=we(E.labels);l.forEach((f,T)=>{const N=f.name??`Card ${T+1}`,I=`Mosaic Cards › ${N}`,A=`card:${f.id}`,R={key:`card:${f.id}`,label:N},L=B=>({tab:"cards",panel:"mosaic",path:B?[R,J(B)]:[R]});C(f.visible_when?.entity,{ref:A,slot:"visible_when.entity",label:"Visibility condition entity",where:I,target:L("sec:visibility")}),f.bg?.rules?.length&&C(f.bg.entity,{ref:A,slot:"bg.entity",label:"Background image entity",where:I,target:L("sec:bg")}),S(f,{ref:A,where:I,target:L("sec:actions")}),$({kind:"card",item:f,screens:E,ref:A,where:I,base:L(),removal:B=>({kind:"card",itemId:f.id,key:B})}),D("mosaic","Mosaic Cards",R,f.id,N,f.fields??[]),V(f,{where:I,crumb:R})});const ee=i.screens("extCard");c.forEach((f,T)=>{const N=f.name??`Popover Card ${T+1}`,I={key:`card:${f.id}`,label:N};$({kind:"extCard",item:f,screens:ee,ref:`xcard:${f.id}`,where:`Popover Cards › ${N}`,base:{tab:"cards",panel:"popover",path:[I]},removal:A=>({kind:"extCard",itemId:f.id,key:A})}),D("popover","Popover Cards",I,f.id,N,f.fields??[])});const oe=i.screens("emb");d.forEach((f,T)=>{const N=f.name??f.id??`Embedded ${T+1}`;$({kind:"emb",item:f,screens:oe,ref:`emb:${f.id}`,where:`Embedded External Cards › ${N}`,base:{tab:"cards",panel:"embedded",path:[{key:`emb:${f.id}`,label:N}]},removal:I=>({kind:"emb",itemId:f.id,key:I})})});const ye=i.screens("zone"),Se=we(ye.labels);h.forEach((f,T)=>{const N=f.name??f.id??`Zone ${T+1}`,I=`Clickable Zones › ${N}`,A=`zone:${f.id}`,R={key:`zone:${f.id}`,label:N},L=B=>({tab:"elements",panel:"zones",path:B?[R,Se(B)]:[R]});S(f,{ref:A,where:I,target:L("sec:actions")}),$({kind:"zone",item:f,screens:ye,ref:A,where:I,base:L(),removal:B=>({kind:"zone",itemId:f.id,key:B})})});const yt=i.screens("flow"),_i=we(yt.labels);u.forEach((f,T)=>{const N=f.name??f.id??`Flow ${T+1}`,I=`Animated Flow Lines › ${N}`,A=`flow:${f.id}`,R={key:`flow:${f.id}`,label:N},L=(...B)=>({tab:"elements",panel:"flows",path:[R,...B]});C(f.entity,{ref:A,slot:"entity",label:"Entity",where:I,target:L(_i("sec:defaults"))}),(f.points??[]).forEach((B,Y)=>{B.card&&!b.has(B.card)&&x({check:"flow-endpoint",severity:"error",ref:A,slot:`points.${Y}`,where:I,detail:`Point ${Y+1} is anchored to card “${B.card}”, which no longer exists — the point falls back to the canvas origin.`,target:L({key:`pt:${Y}`,label:`Point ${Y+1}`})})}),$({kind:"flow",item:f,screens:yt,ref:A,where:I,base:L(),removal:B=>({kind:"flow",itemId:f.id,key:B})})}),g.forEach((f,T)=>{const N=f.name||f.id||`Virtual ${T+1}`,I=`Virtual Entities › ${N}`,A=`virt:${f.id}`,R={key:`virt:${f.id}`,label:N},L=i.screens("virtual",f),B=we(L.labels),Y=(...O)=>({tab:"elements",panel:"virtuals",path:[R,...O]});(f.inputs??[]).forEach((O,he)=>{C(O,{ref:A,slot:`inputs.${he}`,label:`Input ${he+1}`,where:I,target:Y({key:`vin:${he}`,label:O||`Input ${he+1}`})})}),C(f.entity,{ref:A,slot:"entity",label:"Source entity",where:I,target:Y(B("sec:value"))});const de=B("sec:tu");C(f.value_entity??f.pct_entity,{ref:A,slot:"value_entity",label:"Value entity",where:I,target:Y(de)}),C(f.rate_entity??f.power_entity,{ref:A,slot:"rate_entity",label:"Rate entity",where:I,target:Y(de)}),C(f.capacity_entity,{ref:A,slot:"capacity_entity",label:"Capacity entity",where:I,target:Y(de)}),$({kind:"virtual",item:f,screens:L,ref:A,where:I,base:Y(),removal:O=>({kind:"virtual",itemId:f.id,key:O})})});const re=e.background;if(re){const T={ref:"background",where:"Canvas › Background",target:{tab:"settings",panel:"canvas",path:[we(i.screens("canvas").labels)("sec:bg")]}};re.source==="state"?re.rules?.length&&C(re.entity,{...T,slot:"entity",label:"Background image entity"}):re.source==="entity"?C(re.mode_entity,{...T,slot:"mode_entity",label:"Mode entity"}):re.source!=="day"&&re.source!=="night"&&re.source!=="single"&&C(re.sun_entity,{...T,slot:"sun_entity",label:"Sun entity"})}return e.canvas&&S(e.canvas,{ref:"canvas",where:"Canvas",target:{tab:"settings",panel:"canvas",path:[]}}),{issues:s,skipped:o,coverage:a}}function Rs(e){return e.issues.reduce((t,i)=>t+(i.severity==="error"&&!i.ignored?1:0),0)}var zs=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,w=(e,t,i,s)=>{for(var o=s>1?void 0:s?Ms(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(o=(s?n(t,i,o):n(o))||o);return s&&o&&zs(t,i,o),o};const Lt=ei(Pe);function be(e){return Math.round(e*10)/10}function M(e){return Math.round(e*1e4)/1e4}function K(e,t){const i={...e??{},...t};for(const s of Object.keys(t))t[s]===void 0&&delete i[s];return i}function F(e,t){return t.map(i=>`${e}.${i}`)}function ue(e,t){return t.map(i=>`${e}${i}`)}function Is(e,t){let i=e;for(const s of t.split(".")){if(i===null||typeof i!="object")return;i=i[s]}return i}function et(e,t){if(!t)return 0;let i=0;for(const s of t)Is(e,s)!==void 0&&i++;return i}function Le(e,t,i,s,o){const a=(e.split(".")[1]??"sensor").replace(/_/g," "),n=t.replace(/_/g," "),l=["# Add to configuration.yaml","sensor:","  - platform: statistics",`    name: "${a} ${n}"`,`    entity_id: ${e}`,`    state_characteristic: ${t}`];i&&(l.push("    max_age:"),l.push(`      hours: ${i}`)),s&&l.push(`    sampling_size: ${s}`),t==="percentile"&&o&&l.push(`    percentile: ${o}`);const c=`${e.split(".")[1]??"sensor"}_${t}`;return l.push(""),l.push("# Then set the field entity to:"),l.push(`# sensor.${c}`),l.join(`
`)}const tt=[{value:"average_linear",label:"Average (linear)",group:"Averages"},{value:"average_step",label:"Average (step)",group:"Averages",binary:!0},{value:"average_timeless",label:"Average (timeless)",group:"Averages",binary:!0},{value:"mean",label:"Mean",group:"Averages",binary:!0},{value:"mean_circular",label:"Mean (circular)",group:"Averages"},{value:"median",label:"Median",group:"Averages"},{value:"value_max",label:"Value maximum",group:"Extremes"},{value:"value_min",label:"Value minimum",group:"Extremes"},{value:"distance_absolute",label:"Range (max − min)",group:"Extremes"},{value:"standard_deviation",label:"Standard deviation",group:"Spread"},{value:"variance",label:"Variance",group:"Spread"},{value:"noisiness",label:"Noisiness",group:"Spread"},{value:"percentile",label:"Percentile",group:"Spread"},{value:"distance_95_percent_of_values",label:"Distance 95% of values",group:"Spread"},{value:"distance_99_percent_of_values",label:"Distance 99% of values",group:"Spread"},{value:"change",label:"Change",group:"Change"},{value:"change_sample",label:"Change per sample",group:"Change"},{value:"change_second",label:"Change per second",group:"Change"},{value:"sum",label:"Sum",group:"Sums"},{value:"sum_differences",label:"Sum of differences",group:"Sums"},{value:"sum_differences_nonnegative",label:"Sum of differences (positive)",group:"Sums"},{value:"total",label:"Total",group:"Sums"},{value:"count",label:"Count (samples)",group:"Counts",binary:!0},{value:"count_on",label:"Count (on)",group:"Counts",binary:!0},{value:"count_off",label:"Count (off)",group:"Counts",binary:!0},{value:"datetime_newest",label:"Timestamp (newest)",group:"Timestamps"},{value:"datetime_oldest",label:"Timestamp (oldest)",group:"Timestamps",binary:!0},{value:"datetime_value_max",label:"Timestamp (at max)",group:"Timestamps"},{value:"datetime_value_min",label:"Timestamp (at min)",group:"Timestamps"}],Be=["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],it={"top-left":"Top Left",top:"Top Center","top-right":"Top Right",left:"Left Middle",center:"Center",right:"Right Middle","bottom-left":"Bottom Left",bottom:"Bottom Center","bottom-right":"Bottom Right"},Ce=["left","center","right"],Ge={left:"Left",center:"Center",right:"Right"},As=[{name:"--primary-color",label:"Primary"},{name:"--text-primary-color",label:"Text on Primary"},{name:"--accent-color",label:"Accent"},{name:"--primary-text-color",label:"Primary text"},{name:"--secondary-text-color",label:"Secondary text"},{name:"--disabled-text-color",label:"Disabled text"},{name:"--primary-background-color",label:"Primary background"},{name:"--secondary-background-color",label:"Secondary background"},{name:"--card-background-color",label:"Card background"},{name:"--divider-color",label:"Divider"},{name:"--state-icon-color",label:"State icon"},{name:"--state-active-color",label:"State Active"},{name:"--state-inactive-color",label:"State Inactive"},{name:"--error-color",label:"Error"},{name:"--warning-color",label:"Warning"},{name:"--success-color",label:"Success"},{name:"--info-color",label:"Info"}],hi=["value","label","icon","svg","blank","rule","embedded_card","toggle","slider","dropdown","button_group","input","spinbox","button"],xe={value:"Value",label:"Label",icon:"Icon",svg:"Element Library",graph:"Graph / Gauge",blank:"Blank",rule:"Horizontal Rule",embedded_card:"Embedded Card",toggle:"Toggle",slider:"Slider",dropdown:"Dropdown",button_group:"Button Group",input:"Input",spinbox:"Spin Box",button:"Button"},Bt=[...hi].sort((e,t)=>xe[e].localeCompare(xe[t])),Ee={value:"mdi:function-variant",label:"mdi:format-title",icon:"mdi:image",svg:"mdi:shape-outline",graph:"mdi:chart-line",blank:"mdi:crop-square-outline",rule:"mdi:minus",embedded_card:"mdi:widgets",toggle:"mdi:toggle-switch-outline",slider:"mdi:tune-variant",dropdown:"mdi:form-dropdown",button_group:"mdi:view-dashboard-variant-outline",input:"mdi:form-textbox",spinbox:"mdi:numeric",button:"mdi:gesture-tap-button"};function st(e){const t=(...i)=>i.includes(e);return{history:Yi.includes(e),stroke:t("stat-line","line","area"),range:!t("bar-stacked","state-timeline"),yTitle:t("bar","bar-stacked","stat-line","line","area"),bars:t("bar","bar-h"),legend:!0,gauge:t("gauge","gauge-needle"),timeline:t("state-timeline"),statType:!t("state-timeline")}}const Ds=[{value:"above",label:"Above the bar"},{value:"left",label:"Left of the bar"},{value:"none",label:"Hidden"}],Fs=[{value:"bottom",label:"Below the chart"},{value:"top",label:"Above the chart"},{value:"left",label:"Left of the chart"},{value:"right",label:"Right of the chart"}],Os=[{value:"linear",label:"Straight"},{value:"smooth",label:"Smoothed"},{value:"step",label:"Stepped"}],ot=[{value:"stat-line",label:"Statistics — Line"},{value:"bar",label:"Statistics — Bar"},{value:"bar-h",label:"Statistics — Bar (horizontal)"},{value:"bar-stacked",label:"Statistics — Bar (stacked)"},{value:"line",label:"History — Line (with unit)"},{value:"area",label:"History — Area (with unit)"},{value:"state-timeline",label:"History — State timeline"},{value:"gauge",label:"Arc Gauge"},{value:"gauge-needle",label:"Arc Gauge (Needle)"}],fe="background gradient angle opacity color border width radius padding shadow drop box halo glow type offset spread blur css",ze="font size color weight family letter spacing css",Ve="tap hold double navigate url more info toggle service action perform assist popover expand dom event entity write override",pi="entity operator value condition show hide visible",Ns="Raw CSS declarations applied to this element, e.g. outline: 1px dashed red;. Applied after everything above, so it wins.",_t="tick minor major length thickness font size position grid line color temperature transparency opacity decimals value",U={tick_color:"Colour of the scale marks beside the tube.",tick_position:"Which side of the tube the scale sits on.",minor_tick_text:"Numbers the small ticks as well as the major ones.",tick_font_size:"Size of the numbers beside the ticks.",grid_color:"Colour of the lines running across the tube from each major tick. Leave blank for none.",decimals:"Decimal places on the temperature reading.",temp_color:"Colour of the temperature reading. Leave blank to follow the fill colour."},ce=["background","background_alpha","background2","background_angle","color","border","border_width","radius","padding","shadow","shadow_mode","shadow_x","shadow_y","shadow_blur","shadow_spread","shadow_color","extra_css","blur"],ge=["font_size","color","font_weight","font_family","letter_spacing","extra_css"],Ls=ce.filter(e=>e!=="extra_css"),Bs=ge.filter(e=>e!=="extra_css"),Gt=!1,bt=["tap_action","hold_action","double_tap_action"],Gs=["icon_position","show_state","state_position","icon_style","label_style","state_style"],_e={"sub:container":{sel:["button_group_text_size","button_group_icon_size","button_group_state_size"],btn:["button_border_color","button_border_width","button_radius","button_option_padding","button_text_size","button_icon_size","button_state_size"]},"sub:active":{sel:["button_group_selected_color","button_group_selected_color2","button_group_selected_angle","button_group_selected_text_color","button_group_selected_icon_color","button_group_selected_state_color"],btn:["button_selected_color","button_selected_color2","button_selected_angle","button_selected_text_color","button_selected_icon_color","button_selected_state_color"]},"sub:inactive":{sel:["button_group_bg","button_group_bg2","button_group_bg_angle","button_group_text_color","button_group_icon_color","button_group_state_color"],btn:["button_bg","button_bg2","button_bg_angle","button_text_color","button_icon_color","button_state_color"]}},vt=["button_group_option_gap","button_group_border_color","button_group_border_width","button_group_radius","button_group_option_padding","button_group_option_border","button_group_option_border_color","button_group_option_border_width","button_group_option_radius","button_group_option_extra_css"],ft=["button_option_padding"],Hs=_e["sub:container"].btn.filter(e=>!ft.includes(e)),ui=["major_tick_length","major_tick_width","minor_tick_length","minor_tick_width","show_minor_tick_text","tick_color","tick_font_size","text_position","grid_color","temp_color","temp_font_size","decimals","fill_opacity_above"],Ht=[...ui,"fill_color","fill_color2","fill_angle","extra_css"],He=["fill_color","fill_color2","fill_angle","fill_direction","tank_color","extra_css"],Wt=["fill_color","fill_color2","fill_angle","extra_css"],Ut="Blank runs the gradient along the fill direction. An SVG that defines its own gradient stops keeps its own direction — the angle only applies to gradients the card draws.",ve={accent:["accent_color","accent_color2","accent_angle"],toggle:["toggle_on_color","toggle_on_color2","toggle_on_angle","toggle_off_color","toggle_off_color2","toggle_off_angle","toggle_thumb_color","toggle_thumb_size","toggle_thumb_radius","toggle_thumb_padding","toggle_thumb_shadow"],slider:["slider_track_color","slider_track_color2","slider_track_angle","slider_fill_color","slider_fill_color2","slider_fill_angle","slider_height","slider_length","slider_radius","slider_border","slider_border_color","slider_border_width","slider_thumb_color","slider_thumb_size","slider_thumb_width","slider_thumb_radius","slider_thumb_padding","slider_thumb_shadow"],dropdown:["dropdown_border_color","dropdown_bg","dropdown_bg2","dropdown_bg_angle","dropdown_menu_bg","dropdown_menu_bg2","dropdown_menu_bg_angle","dropdown_menu_border_color","dropdown_selected_color","dropdown_selected_color2","dropdown_selected_angle","dropdown_radius","dropdown_text_size","dropdown_menu_radius","dropdown_menu_shadow","dropdown_option_radius","dropdown_option_text_color","dropdown_option_hover_color"],input:["input_border_color","input_bg","input_bg2","input_bg_angle","input_focus_color","input_placeholder_color","input_radius","input_text_size"],spinbox:["spinbox_border_color","spinbox_bg","spinbox_bg2","spinbox_bg_angle","spinbox_button_hover_color","spinbox_button_hover_color2","spinbox_button_hover_angle","spinbox_button_width","spinbox_button_font_size","spinbox_radius","spinbox_text_size"]},Ws=[{type:"alarm-panel",name:"Alarm Panel"},{type:"button",name:"Button"},{type:"calendar",name:"Calendar"},{type:"entities",name:"Entities"},{type:"entity",name:"Entity"},{type:"entity-filter",name:"Entity Filter"},{type:"gauge",name:"Gauge"},{type:"glance",name:"Glance"},{type:"history-graph",name:"History Graph"},{type:"horizontal-stack",name:"Horizontal Stack"},{type:"humidifier",name:"Humidifier"},{type:"iframe",name:"iFrame"},{type:"light",name:"Light"},{type:"logbook",name:"Logbook"},{type:"map",name:"Map"},{type:"markdown",name:"Markdown"},{type:"media-control",name:"Media Control"},{type:"picture",name:"Picture"},{type:"picture-elements",name:"Picture Elements"},{type:"picture-entity",name:"Picture Entity"},{type:"picture-glance",name:"Picture Glance"},{type:"plant-status",name:"Plant Status"},{type:"sensor",name:"Sensor"},{type:"shopping-list",name:"Shopping List"},{type:"statistics-graph",name:"Statistics Graph"},{type:"thermostat",name:"Thermostat"},{type:"tile",name:"Tile"},{type:"todo-list",name:"To-do List"},{type:"vertical-stack",name:"Vertical Stack"},{type:"weather-forecast",name:"Weather Forecast"},{type:"webpage",name:"Webpage"}];function Us(e){const t=(e??"").trim(),i=t.match(/^color-mix\(\s*in\s+srgb\s*,\s*(.+?)\s+([\d.]+)%\s*,\s*transparent\s*\)$/i);if(i)return{base:i[1].trim(),alpha:Math.max(0,Math.min(1,Number(i[2])/100))};const s=t.match(/^#([0-9a-f]{6})([0-9a-f]{2})$/i);if(s)return{base:`#${s[1]}`,alpha:parseInt(s[2],16)/255};const o=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*[,/]\s*([\d.]+)\s*\)$/i);return o?{base:"#"+[o[1],o[2],o[3]].map(n=>Math.max(0,Math.min(255,Math.round(Number(n)))).toString(16).padStart(2,"0")).join(""),alpha:Math.max(0,Math.min(1,Number(o[4])))}:{base:t,alpha:1}}function Vt(e,t){return t>=1?e:`color-mix(in srgb, ${e} ${Number((t*100).toFixed(1))}%, transparent)`}function Vs(e,t){const i=t?.isConnected?t:document.body,s=document.createElement("div");try{s.style.color=e,s.style.display="none",i.appendChild(s);const a=getComputedStyle(s).color.match(/\d+/g)?.map(Number);return!a||a.length<3?"#000000":"#"+a.slice(0,3).map(n=>n.toString(16).padStart(2,"0")).join("")}catch{return"#000000"}finally{s.remove()}}let p=class extends Xt{constructor(){super(...arguments),this._selCard=0,this._selField=-1,this._selCards=new Set,this._selEmbCards=new Set,this._selFlow=-1,this._showAddFlowInput=!1,this._newFlowName="",this._pendingFlowIdx=-1,this._showFlowCompleteModal=!1,this._selPoint=-1,this._selSeries=-1,this._selOption=-1,this._selBgRule=-1,this._selCanvasBgRule=-1,this._pickerLib=[],this._pickerTrail=[],this._pickerErr="",this._selExtOption=-1,this._selExtSeries=-1,this._selVirtual=-1,this._selVirtualInput=-1,this._selTrigger=-1,this._selZone=-1,this._selExtCard=0,this._selExtField=-1,this._templateName="",this._templateIncludeEntities=!1,this._templateError="",this._previewBoxes={},this._previewExpanded=!1,this._barAtTop=localStorage.getItem("mc-expanded-bar-top")==="1",this._onWindowResize=()=>this._sizeExpandedCanvas(),this._pickerStyleScheduled=!1,this._pickerStyleRetries=0,this._styledPickers=new WeakSet,this._mccustApplied=[],this._copiedFields=null,this._copySourceId=null,this._virtualClipboard=null,this._copiedField=null,this._copiedFieldSrc=null,this._copiedOption=null,this._dragSrc=null,this._cpOpenId=null,this._cpPos=null,this._cpFocusedId=null,this._ggOpen=!1,this._ggTarget=null,this._wizStep=-1,this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:"",bgStateEntity:"",bgRules:[]},this._wizardShown=!1,this._oneOwnerChecked=!1,this._dragCard=-1,this._startX=0,this._startY=0,this._dragMembers=[],this._embDragMembers=[],this._dragPoint=-1,this._pStartX=0,this._pStartY=0,this._pStartPos={x:0,y:0},this._snapAxis=null,this._snapAnchor=null,this._dragZone=-1,this._zStartX=0,this._zStartY=0,this._zStartPos={x:0,y:0},this._resizeZone=-1,this._resizeCorner="br",this._zResizeStartBox={x:0,y:0,w:0,h:0},this._bgSelected=!1,this._bgMode=null,this._bgStartX=0,this._bgStartY=0,this._bgStart={L:0,T:0,baseW:0,baseH:0,totalW:0,totalH:0},this._selEmbCard=-1,this._dragEmbCard=-1,this._ecStartX=0,this._ecStartY=0,this._embEditorOpen=!1,this._embEditorYaml="",this._embEditorYamlError="",this._embNativeEditor=null,this._embEditorTarget=null,this._embEditorConfig=null,this._embPickerOpen=!1,this._embPickerSearch="",this._embPickerTarget=null,this._variantOpen="",this._variantError="",this._saveVariantFor="",this._saveVariantLabel="",this._variantImportError="",this._navTab="cards",this._navPanel="",this._navPath=[],this._panelScroll=new Map,this._lastScrollKey="",this._lastScrollDepth=0,this._listFilter="",this._listFilterKey="",this._undoStack=[],this._redoStack=[],this._undoSrc=null,this._undoLastPush=0,this._restoring=!1,this._onUndoKeydown=e=>{if(!(e.ctrlKey||e.metaKey)||e.altKey)return;const t=e.key.toLowerCase(),i=t==="z"&&!e.shiftKey,s=t==="y"||t==="z"&&e.shiftKey;if(!i&&!s)return;const o=e.composedPath()[0];if(o instanceof HTMLElement){const a=o.tagName;if(a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||o.isContentEditable)return}e.preventDefault(),e.stopPropagation(),i?this._undo():this._redo()},this._toastMsg="",this._tutorialStep=-1,this._ptrDrag=null,this._dropKey=null,this._dropBefore=!1,this._suppressClick=!1,this._searchQuery="",this._searchActive=0,this._healthShowIgnored=!1,this._optionLayoutOn=new Set,this._colorOverridesOn=new Set,this._gradientOn=new Set,this._resetToWizard=()=>{window.confirm(`Reset all configuration and restart the setup wizard?

This will clear all cards, popover cards, embedded cards, virtuals, flows, zones, and background settings.

It also resets Global Defaults to their starting values — including your saved custom control variants — and clears the popover card defaults and EV count.`)&&(this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:"",bgStateEntity:"",bgRules:[]},this._wizStep=0,this._emit({type:this._config.type,background:{},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}))},this._cpMode="rgb"}_navPush(e,t,i){this._navPath=[...this._navPath,{key:e,label:t,...i?{hint:i}:{}}]}_crumbIndex(e,t){if(!t)return-1;const i=e.slice(e.indexOf(":")+1),s=t.findIndex(a=>{const n=a&&typeof a=="object"?a.id:void 0;return n!==void 0&&String(n)===i});if(s>=0)return s;const o=Number(i);return Number.isInteger(o)&&o>=0&&o<t.length?o:-1}_navScrollKey(){return`${this._navTab}|${this._navPanel}|${this._navPath.map(e=>e.key).join("/")}`}_navDeadEnd(e="This item no longer exists — it may have been removed in the YAML editor."){return r`
      <ha-alert alert-type="warning">${e}</ha-alert>
      <button class="ec-btn-add" style="margin-top:10px;" @click=${()=>this._navBack()}>← Back</button>
    `}_currentListFilter(){return this._listFilterKey===this._navScrollKey()?this._listFilter.trim().toLowerCase():""}_listFilterBox(e){return e<=7&&!this._currentListFilter()?_:r`
      <input class="ec-input ec-list-filter" type="search" placeholder="Filter…"
        .value=${this._listFilterKey===this._navScrollKey()?this._listFilter:""}
        @input=${t=>{this._listFilterKey=this._navScrollKey(),this._listFilter=t.target.value}}
      />
    `}_emptyAdd(e,t){return r`<button class="ec-empty ec-empty-action" @click=${t}>${e}</button>`}setConfig(e){this._assertOneOwnerInvariant();let t=!1;const i=(n,l)=>{let c=!1;const d=n.map((h,u)=>{const g={};return h.column==null&&(g.column=1),h.id||(g.id=`mc-auto-${l}f${u}`),Object.keys(g).length===0?h:(t=!0,c=!0,{...h,...g})});return c?d:n},s=(n,l)=>n.id?n:(t=!0,{...n,id:l}),o=(e.cards??[]).map((n,l)=>{const c=s(n,`mc-auto-card${l}`),d=i(c.fields,`card${l}-`);return d===c.fields?c:{...c,fields:d}}),a=(e.extended_cards??[]).map((n,l)=>{const c=s(n,`mc-auto-ext${l}`),d=i(c.fields,`ext${l}-`);return d===c.fields?c:{...c,fields:d}});if(t&&(e={...e,cards:o,...e.extended_cards?{extended_cards:a}:{}}),this._config&&e!==this._lastEmitted&&(this._config===this._lastEmitted?this._lastEmittedJson??=JSON.stringify(this._config):JSON.stringify(this._config))!==JSON.stringify(e)&&this._pushUndo(this._config,"external"),this._config=e,We(e.defaults?.control_variants),this._truncateStaleNavPath(),!this._wizardShown){this._wizardShown=!0;const n=e.background,l=!n?.images?.day&&!n?.images?.night&&!n?.url&&!n?.rules?.length,c=(e.cards??[]).length===0;l&&c&&(this._wizStep=0)}}_truncateStaleNavPath(){const e=this._config;if(!e)return;const t=this._navPanel;let i=-1,s=-1,o=-1,a=-1;const n={card:{list:()=>t==="popover"?this._extCards():e.cards??[],select:d=>{i=d,t==="popover"?this._selExtCard=d:this._selCard=d}},field:{list:()=>i<0?[]:(t==="popover"?this._extCards()[i]?.fields:e.cards?.[i]?.fields)??[],select:d=>{s=d,t==="popover"?this._selExtField=d:this._selField=d}},gs:{list:()=>i>=0&&s>=0?e.cards?.[i]?.fields[s]?.graph_series??[]:[],select:d=>{this._selSeries=d}},egs:{list:()=>i>=0&&s>=0?this._extCards()[i]?.fields[s]?.graph_series??[]:[],select:d=>{this._selExtSeries=d}},opt:{list:()=>i>=0&&s>=0?e.cards?.[i]?.fields[s]?.options??[]:[],select:d=>{this._selOption=d}},eopt:{list:()=>i>=0&&s>=0?this._extCards()[i]?.fields[s]?.options??[]:[],select:d=>{this._selExtOption=d}},bgr:{list:()=>i>=0?e.cards?.[i]?.bg?.rules??[]:[],select:d=>{this._selBgRule=d}},cbgr:{list:()=>e.background?.rules??[],select:d=>{this._selCanvasBgRule=d}},emb:{list:()=>this._embCards(),select:d=>{this._selEmbCard=d}},virt:{list:()=>this._virtuals(),select:d=>{o=d,this._selVirtual=d}},vin:{list:()=>o>=0?this._virtuals()[o]?.inputs??[]:[],select:d=>{this._selVirtualInput=d}},trig:{list:()=>o>=0?this._virtuals()[o]?.triggers??[]:[],select:d=>{this._selTrigger=d}},zone:{list:()=>this._zones(),select:d=>{this._selZone=d}},flow:{list:()=>this._flows(),select:d=>{a=d,this._selFlow=d}},pt:{list:()=>a>=0?this._flows()[a]?.points??[]:[],select:d=>{this._selPoint=d}}};let l=this._navPath.length;for(let d=0;d<this._navPath.length;d++){const h=this._navPath[d].key,u=h.indexOf(":"),g=u>0?h.slice(0,u):h,b=n[g];if(!b)continue;const m=this._crumbIndex(h,b.list());if(m<0){l=d;break}b.select(m)}l<this._navPath.length&&(this._navPath=this._navPath.slice(0,l));const c=(d,h)=>Math.min(d,h-1);this._selCard=c(this._selCard,e.cards?.length??0),this._selExtCard=c(this._selExtCard,this._extCards().length),this._selEmbCard=c(this._selEmbCard,this._embCards().length),this._selVirtual=c(this._selVirtual,this._virtuals().length),this._selZone=c(this._selZone,this._zones().length),this._selFlow=c(this._selFlow,this._flows().length)}_navigateTo(e,t,i=[]){this._navTab=e,this._navPanel=t,this._navPath=i.map(s=>({key:s.key,label:s.label??s.key.slice(s.key.indexOf(":")+1),...s.hint?{hint:s.hint}:{}})),this._selField=-1,this._selExtField=-1,this._selSeries=-1,this._selExtSeries=-1,this._selPoint=-1,this._selVirtualInput=-1,this._selTrigger=-1,this._truncateStaleNavPath()}_emit(e){const t=this._config;t&&t!==e&&!this._restoring&&this._pushUndo(t),this._config=e,this._lastEmitted=e,this._lastEmittedJson=void 0,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_cloneCfg(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}_undoEmitSource(){if(this._dragCard>=0)return`drag:card:${this._dragCard}:${this._startX},${this._startY}`;if(this._dragEmbCard>=0)return`drag:emb:${this._dragEmbCard}:${this._ecStartX},${this._ecStartY}`;if(this._dragZone>=0)return`drag:zone:${this._dragZone}:${this._zStartX},${this._zStartY}`;if(this._resizeZone>=0)return`resize:zone:${this._resizeZone}:${this._resizeCorner}:${this._zResizeStartBox.x},${this._zResizeStartBox.y}`;if(this._dragPoint>=0)return`drag:pt:${this._dragPoint}:${this._pStartX},${this._pStartY}`;if(this._bgMode)return`drag:bg:${this._bgMode}:${this._bgStartX},${this._bgStartY}`;const e=this.shadowRoot?.activeElement??null;return e?e.tagName==="BUTTON"?e.classList.contains("ec-num-step")?e:null:e:null}static _isGestureKey(e){return typeof e=="string"&&(e.startsWith("drag:")||e.startsWith("resize:"))}_endUndoGesture(){p._isGestureKey(this._undoSrc)&&(this._undoSrc=null)}_pushUndo(e,t){this._toastMsg="";const i=Date.now(),s=t??this._undoEmitSource(),o=s!==null&&s===this._undoSrc&&(p._isGestureKey(s)||i-this._undoLastPush<p._UNDO_COALESCE_MS);this._undoSrc=s,this._undoLastPush=i,o||(this._undoStack.push(this._cloneCfg(e)),this._undoStack.length>p._UNDO_LIMIT&&this._undoStack.shift()),this._redoStack=[]}_undo(){this._restore(this._undoStack,this._redoStack)}_redo(){this._restore(this._redoStack,this._undoStack)}_restore(e,t){const i=this._config;if(!e.length||!i)return;const s=e.pop();t.push(this._cloneCfg(i)),t.length>p._UNDO_LIMIT&&t.shift(),this._applySnapshot(s)}_applySnapshot(e){this._restoring=!0;try{this._emit(e)}finally{this._restoring=!1}this._undoSrc=null,this._toastMsg="",this._truncateStaleNavPath()}_showUndoToast(e){this._toastMsg=e,clearTimeout(this._toastTimer),this._toastTimer=window.setTimeout(()=>{this._toastMsg=""},6e3)}_renderUndoToast(){return this._toastMsg?r`
      <div class="ec-undo-toast" role="status">
        <span>${this._toastMsg}</span>
        <button class="ec-undo-toast-btn" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>Undo</button>
      </div>
    `:_}_finishWizard(){if(!this._config)return;const e=this._wiz;let t;if(e.cardType==="energy"){if(e.source!=="none"){t={source:e.source},e.source==="auto"&&(t.sun_entity=e.sunEntity||"sun.sun");const s={},o={};e.dayImg&&(s[0]=e.dayImg),e.nightImg&&e.source==="auto"&&(o[0]=e.nightImg);for(let a=0;a<e.evCount;a++){const n=e.evImgs[a];n?.day&&(s[String(a+1)]=n.day),n?.night&&e.source==="auto"&&(o[String(a+1)]=n.night)}t.images={},Object.keys(s).length>0&&(t.images.day=s),Object.keys(o).length>0&&(t.images.night=o)}}else if(e.bgCount==="single"&&e.singleImg)t={source:"single",url:e.singleImg};else if(e.bgCount==="state"){const s=e.bgRules.filter(o=>o.value.trim()&&o.url.trim()).map(o=>({value:o.value.trim(),url:o.url.trim()}));t={source:"state",entity:e.bgStateEntity||void 0},s.length&&(t.rules=s)}else if(e.bgCount==="multiple"){t=e.bgSwitchMode==="sun"?{source:"auto",sun_entity:e.sunEntity||"sun.sun"}:{source:"entity",mode_entity:e.bgEntity};const s={},o={};e.dayImg&&(s[0]=e.dayImg),e.nightImg&&(o[0]=e.nightImg),t.images={},Object.keys(s).length>0&&(t.images.day=s),Object.keys(o).length>0&&(t.images.night=o)}const i={...this._config};t&&(i.background=t),e.cardType==="energy"&&e.evCount>0&&(i.ev_count=e.evCount),this._wizStep=-1,this._emit(i),this._tutorialGo(0)}_tutorialGo(e){const t=p._TUTORIAL_STEPS;if(e<0||e>=t.length){this._tutorialStep=-1;return}const i=t[e].nav;this._navigateTo(i.tab,i.panel,i.path??[]),this._tutorialStep=e}_renderTutorial(){const e=p._TUTORIAL_STEPS,t=this._tutorialStep;if(t<0||t>=e.length)return _;const i=t===e.length-1;return r`
      <div class="ec-tour" role="dialog" aria-label="Editor tour">
        <div class="ec-tour-head">
          <span class="ec-tour-title">${e[t].title}</span>
          <span class="ec-tour-count">${t+1} / ${e.length}</span>
        </div>
        <p class="ec-tour-body">${e[t].body}</p>
        <div class="ec-tour-btns">
          <button class="ec-wiz-btn-ghost" @click=${()=>{this._tutorialStep=-1}}>Cancel</button>
          <span class="ec-tour-spacer"></span>
          ${t>0?r`<button class="ec-wiz-btn-ghost" @click=${()=>this._tutorialGo(t-1)}>← Back</button>`:_}
          <button class="ec-wiz-btn-primary" @click=${()=>i?this._tutorialStep=-1:this._tutorialGo(t+1)}>
            ${i?"Done":"Next →"}
          </button>
        </div>
      </div>
    `}_renderWizard(){const e=this._wizStep,t=this._wiz,i=l=>{this._wiz={...t,...l}},s=l=>{this._wizStep=l},o=(l,c)=>c===0?l==="day"?t.dayImg:t.nightImg:t.evImgs[c-1]?.[l]??"",a=(l,c,d)=>{if(c===0){i(l==="day"?{dayImg:d}:{nightImg:d});return}i({evImgs:t.evImgs.map((h,u)=>u===c-1?{...h,[l]:d}:h)})},n=l=>{const c=Math.max(0,Math.min(3,parseInt(l.target.value)||0));c!==t.evCount&&i({evCount:c,evImgs:Array.from({length:c},(d,h)=>t.evImgs[h]??{day:"",night:""})})};return r`
      <div class="ec-wizard">
        ${e===0?r`
          <div class="ec-wiz-welcome">
            <div class="ec-wiz-icon">🎨</div>
            <h2 class="ec-wiz-title">Welcome to Mosaic Canvas Card</h2>
            <p class="ec-wiz-desc">A few quick questions will tailor the setup to your use case — or skip to jump straight into the editor.</p>
            <div class="ec-wiz-row ec-wiz-end">
              <button class="ec-wiz-btn-ghost" @click=${()=>this._finishWizard()}>Skip setup</button>
              <button class="ec-wiz-btn-primary" @click=${()=>s(1)}>Get started →</button>
            </div>
          </div>

        `:e===1?r`
          <h3 class="ec-wiz-heading">What will this card be used for?</h3>
          <p class="ec-wiz-desc">This determines what setup options you'll be asked about.</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.cardType==="energy"?" selected":""}"
              @click=${()=>i({cardType:"energy"})}>
              <span class="ec-wiz-type-icon">⚡</span>
              <span class="ec-wiz-type-title">Energy Dashboard</span>
              <span class="ec-wiz-type-desc">Solar, battery, grid flows with day/night switching and EV variants</span>
            </button>
            <button class="ec-wiz-type-btn${t.cardType==="general"?" selected":""}"
              @click=${()=>i({cardType:"general"})}>
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

        `:e===2?r`
          <h3 class="ec-wiz-heading">Background</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Day/night switching</label>
            <select class="ec-wiz-select" .value=${t.source}
              @change=${l=>i({source:l.target.value})}>
              <option value="auto">Auto — follows sun entity</option>
              <option value="day">Day only — no switching</option>
              <option value="none">No background image</option>
            </select>
          </div>
          ${t.source==="auto"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${l=>i({sunEntity:l.detail.value})}
              ></ha-entity-picker>
            </div>
          `:_}
          ${t.source==="none"?_:r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">EV count (0 = no EV variants)</label>
              ${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0" max="3"
                  .value=${String(t.evCount)}
                  @input=${n} @change=${n}
                />`)}
            </div>

            <h3 class="ec-wiz-heading">Images</h3>
            <p class="ec-wiz-desc">One Day${t.source==="auto"?" and one Night":""} image per EV variant — raising EV count adds rows.</p>

            ${["day","night"].filter(l=>l==="day"||t.source==="auto").map(l=>r`
                  <div class="ec-wiz-ev-label">${l}</div>
                  ${Array.from({length:t.evCount+1},(c,d)=>r`
                    <div class="ec-wiz-field">
                      <label class="ec-wiz-label">${l} / ${d} EV</label>
                      <div style="display:flex;gap:4px;align-items:center;">
                        <input class="ec-wiz-input" type="text" style="flex:1;min-width:0;"
                          .placeholder=${`/local/energy-${l}${d?`-${d}ev`:""}.jpg`}
                          .value=${o(l,d)}
                          @input=${h=>a(l,d,h.target.value)}/>
                        ${this._imagePickBtn(h=>a(l,d,h))}
                      </div>
                    </div>
                  `)}
                `)}
          `}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(1)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:e===20?r`
          <h3 class="ec-wiz-heading">Background images</h3>
          <p class="ec-wiz-desc">Do you want a background image on this card?</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${t.bgCount==="none"?" selected":""}"
              @click=${()=>i({bgCount:"none"})}>
              <span class="ec-wiz-type-icon">⬜</span>
              <span class="ec-wiz-type-title">No background</span>
              <span class="ec-wiz-type-desc">Cards float over a plain or transparent background</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="single"?" selected":""}"
              @click=${()=>i({bgCount:"single"})}>
              <span class="ec-wiz-type-icon">🖼️</span>
              <span class="ec-wiz-type-title">One image</span>
              <span class="ec-wiz-type-desc">A single static background image</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="multiple"?" selected":""}"
              @click=${()=>i({bgCount:"multiple"})}>
              <span class="ec-wiz-type-icon">🔄</span>
              <span class="ec-wiz-type-title">Day / Night</span>
              <span class="ec-wiz-type-desc">Two images, swapped by the sun or by an entity</span>
            </button>
            <button class="ec-wiz-type-btn${t.bgCount==="state"?" selected":""}"
              @click=${()=>i({bgCount:"state",bgRules:t.bgRules.length?t.bgRules:[{value:"",url:""}]})}>
              <span class="ec-wiz-type-icon">🎛️</span>
              <span class="ec-wiz-type-title">Image by state</span>
              <span class="ec-wiz-type-desc">One image per state of an entity you choose</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(1)}>← Back</button>
            <button class="ec-wiz-btn-primary"
              @click=${()=>{t.bgCount==="none"?this._finishWizard():t.bgCount==="single"?s(21):t.bgCount==="state"?s(23):s(22)}}>Next →</button>
          </div>

        `:e===21?r`
          <h3 class="ec-wiz-heading">Background image</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Image URL</label>
            <div style="display:flex;gap:4px;align-items:center;">
              <input class="ec-wiz-input" type="text" placeholder="/local/my-background.jpg" style="flex:1;min-width:0;"
                .value=${t.singleImg} @input=${l=>i({singleImg:l.target.value})}/>
              ${this._imagePickBtn(l=>i({singleImg:l}))}
            </div>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:e===22?r`
          <h3 class="ec-wiz-heading">Multiple backgrounds</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">When should the image change?</label>
            <select class="ec-wiz-select" .value=${t.bgSwitchMode}
              @change=${l=>i({bgSwitchMode:l.target.value})}>
              <option value="sun">Time of day — follows the sun (day/night)</option>
              <option value="entity">Entity state — switches when an entity changes</option>
            </select>
          </div>
          ${t.bgSwitchMode==="sun"?r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.sunEntity} allow-custom-entity
                @value-changed=${l=>i({sunEntity:l.detail.value})}
              ></ha-entity-picker>
            </div>
          `:r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Trigger entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${t.bgEntity} allow-custom-entity
                @value-changed=${l=>i({bgEntity:l.detail.value})}
              ></ha-entity-picker>
            </div>
            <p class="ec-wiz-desc" style="font-size:11px;margin-top:-4px;">Alternate image shows when entity state is "on", "night", or "true".</p>
          `}
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Day":"Main"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-main.jpg"
              .value=${t.dayImg} @input=${l=>i({dayImg:l.target.value})}/>
          </div>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${t.bgSwitchMode==="sun"?"Night":"Alternate"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-alt.jpg"
              .value=${t.nightImg} @input=${l=>i({nightImg:l.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:e===23?r`
          <h3 class="ec-wiz-heading">Image by state</h3>
          <p class="ec-wiz-desc">Pick the entity that decides the background, then pair each state you care about with an image. A state with no rule shows no background.</p>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Entity</label>
            <ha-entity-picker .hass=${this.hass} .value=${t.bgStateEntity} allow-custom-entity
              @value-changed=${l=>i({bgStateEntity:l.detail.value})}
            ></ha-entity-picker>
          </div>
          ${t.bgRules.map((l,c)=>r`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">When the state is…</label>
              <input class="ec-wiz-input" type="text" placeholder="e.g. on, 21, heat"
                .value=${l.value}
                @input=${d=>i({bgRules:t.bgRules.map((h,u)=>u===c?{...h,value:d.target.value}:h)})}/>
              <div style="display:flex;gap:4px;align-items:center;margin-top:4px;">
                <input class="ec-wiz-input" type="text" placeholder="/local/my-background.jpg" style="flex:1;min-width:0;"
                  .value=${l.url}
                  @input=${d=>i({bgRules:t.bgRules.map((h,u)=>u===c?{...h,url:d.target.value}:h)})}/>
                ${this._imagePickBtn(d=>i({bgRules:t.bgRules.map((h,u)=>u===c?{...h,url:d}:h)}))}
                <button class="ec-btn-remove" title="Remove"
                  @click=${()=>i({bgRules:t.bgRules.filter((d,h)=>h!==c)})}>✕</button>
              </div>
            </div>
          `)}
          <button class="ec-btn-add" @click=${()=>i({bgRules:[...t.bgRules,{value:"",url:""}]})}>+ Image</button>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>s(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:_}
        ${this._renderImagePickerModal()}
      </div>
    `}_updateCard(e,t){if(!this._config)return;const i=this._config.cards.map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,cards:i})}_updateCardBox(e,t){if(!this._config)return;const i=this._config.cards[e];i&&this._updateCard(e,{box:K(i.box??{},t)})}_updateField(e,t,i){if(!this._config)return;const s=this._config.cards[e];if(!s)return;const o=s.fields.map((a,n)=>n===t?K(a,i):a);this._updateCard(e,{fields:o})}_updateDefaults(e){this._config&&this._emit({...this._config,defaults:K(this._config.defaults,e)})}_updateCanvas(e){this._config&&this._emit({...this._config,canvas:K(this._config.canvas,e)})}_gridGeom(){const e=this._config?.canvas;if(e?.layout_mode!=="grid"||!e.grid)return null;const{totalW:t,totalH:i}=Q(this._config),s=Math.max(1,e.grid.columns||1),o=Math.max(1,e.grid.rows||1),a=e.grid.padding??0;return{cols:s,rows:o,padding:a,cellW:t/s,cellH:i/o,totalW:t,totalH:i}}_setLayoutMode(e){if(!this._config)return;const t={...this._config.canvas??{}};if(t.layout_mode=e,e==="grid"){t.grid||(t.grid={columns:10,rows:15,padding:0});const i=Math.max(1,t.grid.columns),s=Math.max(1,t.grid.rows),o=t.grid.padding??0,{totalW:a}=Q(this._config),n=a/i,l=this._config.cards.map(h=>{const u=this._previewBoxes[h.id],g=u?u.x+u.w/2:h.position.x,b=u?u.y+u.h/2:h.position.y,m=Math.min(i,Math.max(0,Math.round(g*i))),z=Math.min(s,Math.max(0,Math.round(b*s))),P=h.grid_span??Math.max(1,Math.min(i,Math.round((u?.w??0)*i)||1)),k=Math.max(8,P*n-o);return{...h,anchor:"center",grid_span:P,width:k,position:{x:M(m/i),y:M(z/s)}}}),c=this._embCards().map(h=>{const u=this._previewBoxes[h.id],g=u?u.x+u.w/2:h.position.x,b=u?u.y+u.h/2:h.position.y,m=Math.min(i,Math.max(0,Math.round(g*i))),z=Math.min(s,Math.max(0,Math.round(b*s))),P=h.grid_span??Math.max(1,Math.min(i,Math.round((u?.w??0)*i)||1)),k=Math.max(8,P*n-o);return{...h,anchor:"center",grid_span:P,width:k,position:{x:M(m/i),y:M(z/s)}}});this._emit({...this._config,canvas:t,cards:l,embedded_cards:c});const d=l.length+c.length;d&&this._showUndoToast(`${d} card${d===1?"":"s"} re-laid out for Grid`)}else this._emit({...this._config,canvas:t})}_renderGridOverlay(){const e=this._gridGeom();if(!e)return _;const{cols:t,rows:i}=e,s=[];for(let o=0;o<=t;o++)for(let a=0;a<=i;a++)s.push(r`<div class="ec-grid-dot" style="left:${o/t*100}%;top:${a/i*100}%;"></div>`);return r`<div class="ec-grid-overlay">${s}</div>`}_renderBgOverlay(){if(!this._config)return _;const e=Q(this._config),t=e.L/e.totalW*100,i=e.T/e.totalH*100,s=e.baseW/e.totalW*100,o=e.baseH/e.totalH*100;return r`
      <div class="ec-bg-ov${this._bgSelected?" selected":""}"
        style="left:${t}%;top:${i}%;width:${s}%;height:${o}%;"
        @pointerdown=${a=>this._onBgDown(a,"move")}
        title="Background image — drag to move, corners to resize">
        ${this._bgSelected?["tl","tr","bl","br"].map(a=>r`
          <div class="ec-bg-resize ec-bg-resize-${a}"
            @pointerdown=${n=>this._onBgDown(n,a)}></div>`):_}
      </div>`}_updateBackground(e){this._config&&this._emit({...this._config,background:K(this._config.background,e)})}_flows(){return this._config?.flows??[]}_updateFlow(e,t){if(!this._config)return;const i=this._flows().map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,flows:i})}_addFlow(){if(!this._config)return;const e={id:"flow-"+Date.now().toString(36),name:"Flow",style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},t=[...this._flows(),e];this._selFlow=t.length-1,this._selPoint=-1,this._emit({...this._config,flows:t})}_addFlowFromExpanded(){if(!this._config)return;const e=this._newFlowName.trim()||"Flow",t={id:"flow-"+Date.now().toString(36),name:e,style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},i=[...this._flows(),t];this._selFlow=i.length-1,this._pendingFlowIdx=i.length-1,this._selPoint=-1,this._showAddFlowInput=!1,this._newFlowName="",this._emit({...this._config,flows:i})}_collapseExpanded(){this._pendingFlowIdx>=0?this._showFlowCompleteModal=!0:this._previewExpanded=!1}_goToFlow(){const e=this._pendingFlowIdx;this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1;const t=this._flows()[e];this._selFlow=t?e:-1,this._navigateTo("elements","flows",t?[{key:`flow:${t.id}`,label:t.name??t.id}]:[])}_removeFlow(e){if(!this._config)return;const t=this._flows().filter((i,s)=>s!==e);this._selFlow=Math.min(this._selFlow,Math.max(0,t.length-1)),t.length===0&&(this._selFlow=-1),this._selPoint=-1,this._emit({...this._config,flows:t}),this._showUndoToast("Flow removed")}_duplicateFlow(e){if(!this._config)return;const t=this._flows()[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("flow"),i.name&&(i.name+=" copy");const s=[...this._flows()];s.splice(e+1,0,i),this._selFlow=e+1,this._selPoint=-1,this._emit({...this._config,flows:s})}_updateFlowPoint(e,t,i){if(!this._config)return;const s=this._flows().map((o,a)=>{if(a!==e)return o;const n=o.points.map((l,c)=>c===t?K(l,i):l);return{...o,points:n}});this._emit({...this._config,flows:s})}_setPointKind(e,t,i){if(!this._config)return;const s=this._flows(),o=s[e];if(!o)return;const a=o.points[t];if(!a)return;const{dx:n,dy:l}=a;let c;if(i==="card")c={card:this._config.cards[0]?.id??"",side:"center",...n!=null?{dx:n}:{},...l!=null?{dy:l}:{}};else{const h=$e({...a,dx:void 0,dy:void 0},this._config.cards,this._previewBoxes);c={x:M(h.x),y:M(h.y),...n!=null?{dx:n}:{},...l!=null?{dy:l}:{}}}const d=s.map((h,u)=>{if(u!==e)return h;const g=h.points.map((b,m)=>m===t?c:b);return{...h,points:g}});this._emit({...this._config,flows:d})}_addFlowPoint(e){if(!this._config)return;const t=this._flows().map((i,s)=>s!==e?i:{...i,points:[...i.points,{x:0,y:0}]});this._emit({...this._config,flows:t})}_onFlowLayerClick(e){if(e.target!==e.currentTarget||!this._config)return;const t=this._flows(),i=t[this._selFlow];if(!i)return;const s=e.currentTarget,o=M(e.offsetX/s.clientWidth),a=M(e.offsetY/s.clientHeight),n=[...i.points],l=this._selPoint>=0?this._selPoint:n.length-1;n.splice(l+1,0,{x:o,y:a});const c=t.map((d,h)=>h===this._selFlow?{...d,points:n}:d);this._selPoint=l+1,this._emit({...this._config,flows:c})}_removeFlowPoint(e,t){if(!this._config)return;const i=this._flows().map((s,o)=>{if(o!==e)return s;const a=s.points.filter((n,l)=>l!==t);return{...s,points:a}});if(e===this._selFlow&&this._selPoint>=0){const s=i[e]?.points.length??0;this._selPoint=Math.min(this._selPoint>t?this._selPoint-1:this._selPoint,s-1)}this._emit({...this._config,flows:i}),this._showUndoToast("Point removed")}_duplicateFlowPoint(e,t){if(!this._config)return;const i=this._flows()[e],s=i?.points[t];if(!i||!s)return;const o=[...i.points];o.splice(t+1,0,p._deepClone(s)),e===this._selFlow&&(this._selPoint=t+1);const a=this._flows().map((n,l)=>l===e?{...n,points:o}:n);this._emit({...this._config,flows:a})}_virtuals(){return this._config?.virtuals??[]}_addVirtual(){if(!this._config)return;const t={id:`v${Date.now()}`,name:"New virtual",op:"add",inputs:[]},i=[...this._virtuals(),t];this._selVirtual=i.length-1,this._emit({...this._config,virtuals:i})}_updateVirtual(e,t){if(!this._config)return;const i=this._virtuals().map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,virtuals:i})}_removeVirtual(e){if(!this._config)return;const t=this._virtuals().filter((i,s)=>s!==e);this._selVirtual=Math.min(this._selVirtual,t.length-1),this._emit({...this._config,virtuals:t}),this._showUndoToast("Virtual entity removed")}_duplicateVirtual(e){if(!this._config)return;const t=this._virtuals()[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("v"),i.name&&(i.name+=" copy");const s=[...this._virtuals()];s.splice(e+1,0,i),this._selVirtual=e+1,this._emit({...this._config,virtuals:s})}_addVirtualInput(e){if(!this._config)return;const t=[...this._virtuals()[e]?.inputs??[],""];this._updateVirtual(e,{inputs:t})}_updateVirtualInput(e,t,i){const s=[...this._virtuals()[e]?.inputs??[]];s[t]=i,this._updateVirtual(e,{inputs:s})}_removeVirtualInput(e,t){const i=(this._virtuals()[e]?.inputs??[]).filter((s,o)=>o!==t);this._selVirtualInput>=0&&(this._selVirtualInput=Math.min(this._selVirtualInput>t?this._selVirtualInput-1:this._selVirtualInput,i.length-1)),this._updateVirtual(e,{inputs:i}),this._showUndoToast("Input removed")}_duplicateVirtualInput(e,t){const i=this._virtuals()[e];if(!i||i.inputs[t]===void 0)return;const s=[...i.inputs];s.splice(t+1,0,i.inputs[t]),this._selVirtualInput=t+1,this._updateVirtual(e,{inputs:s})}_duplicateTrigger(e,t){const i=this._virtuals()[e],s=i?.triggers?.[t];if(!i||!s)return;const o=p._deepClone(s);o.label&&(o.label+=" copy");const a=[...i.triggers??[]];a.splice(t+1,0,o),this._selTrigger=t+1,this._updateVirtual(e,{triggers:a})}_copyVirtual(e){const t=this._virtuals()[e];t&&(this._virtualClipboard={...t})}_pasteVirtual(){if(!this._config||!this._virtualClipboard)return;const e={...this._virtualClipboard,id:`v${Date.now()}`},t=[...this._virtuals(),e];this._selVirtual=t.length-1,this._emit({...this._config,virtuals:t})}_zones(){return this._config?.zones??[]}_addZone(){if(!this._config)return;const e={id:"zone-"+Date.now().toString(36),name:"Zone",position:{x:.5,y:.5},anchor:"center",width:120,height:70},t=[...this._zones(),e];this._selZone=t.length-1,this._emit({...this._config,zones:t})}_updateZone(e,t){if(!this._config)return;const i=this._zones().map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,zones:i})}_removeZone(e){if(!this._config)return;const t=this._zones().filter((i,s)=>s!==e);this._selZone=Math.min(this._selZone,t.length-1),t.length===0&&(this._selZone=-1),this._emit({...this._config,zones:t}),this._showUndoToast("Zone removed")}_duplicateZone(e){if(!this._config)return;const t=this._zones()[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("zone"),i.name&&(i.name+=" copy");const s=[...this._zones()];s.splice(e+1,0,i),this._selZone=e+1,this._emit({...this._config,zones:s})}_onZoneDown(e,t){e.preventDefault(),e.stopPropagation(),this._bgSelected=!1,this._selZone=t,this._syncNavTo("elements","zones",[{key:`zone:${this._zones()[t]?.id??t}`,label:this._zones()[t]?.name??this._zones()[t]?.id??`Zone ${t+1}`}]),this._dragZone=t,e.target.setPointerCapture(e.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=e.clientX,this._zStartY=e.clientY,this._zStartPos={...this._zones()[t]?.position??{x:0,y:0}}}_onZoneMove(e){if(this._dragZone<0||!this._zRect||!this._config)return;const t=M(this._zStartPos.x+(e.clientX-this._zStartX)/this._zRect.width),i=M(this._zStartPos.y+(e.clientY-this._zStartY)/this._zRect.height);this._updateZone(this._dragZone,{position:{x:t,y:i}})}_onZoneUp(e){this._dragZone>=0&&e.target.releasePointerCapture(e.pointerId),this._dragZone=-1}_zoneBox(e){const[t,i]=Te[e.anchor??v("anchor")??"top-left"],{totalW:s,totalH:o}=Q(this._config);return{x:e.position.x*s-t*e.width,y:e.position.y*o-i*e.height,w:e.width,h:e.height}}_onZoneResizeDown(e,t,i){e.preventDefault(),e.stopPropagation();const s=this._zones()[t];s&&(this._selZone=t,this._resizeZone=t,this._resizeCorner=i,e.target.setPointerCapture(e.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=e.clientX,this._zStartY=e.clientY,this._zResizeStartBox=this._zoneBox(s))}_onZoneResizeMove(e){if(this._resizeZone<0||!this._zRect||!this._config)return;const t=this._zones()[this._resizeZone];if(!t)return;const{totalW:i,totalH:s}=Q(this._config),o=(e.clientX-this._zStartX)/this._zRect.width*i,a=(e.clientY-this._zStartY)/this._zRect.height*s,n=this._zResizeStartBox,l=10,c=this._resizeCorner.includes("l")?n.x+n.w:n.x,d=this._resizeCorner.includes("t")?n.y+n.h:n.y,h=this._resizeCorner.includes("l")?n.x:n.x+n.w,u=this._resizeCorner.includes("t")?n.y:n.y+n.h;let g=h+o-c,b=u+a-d;const m=g>=0?1:-1,z=b>=0?1:-1;g=Math.max(l,Math.abs(g))*m,b=Math.max(l,Math.abs(b))*z;const P=m>=0?c:c+g,k=z>=0?d:d+b,x=Math.abs(g),C=Math.abs(b),[S,$]=Te[t.anchor??v("anchor")??"top-left"],D={x:M((P+S*x)/i),y:M((k+$*C)/s)};this._updateZone(this._resizeZone,{width:be(x),height:be(C),position:D})}_onZoneResizeUp(e){this._resizeZone>=0&&e.target.releasePointerCapture(e.pointerId),this._resizeZone=-1}_onBgDown(e,t){e.preventDefault(),e.stopPropagation(),this._bgSelected=!0,this._bgMode=t,e.target.setPointerCapture(e.pointerId),this._bgRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._bgStartX=e.clientX,this._bgStartY=e.clientY;const i=Q(this._config);this._bgStart={L:i.L,T:i.T,baseW:i.baseW,baseH:i.baseH,totalW:i.totalW,totalH:i.totalH}}_onBgMove(e){if(!this._bgMode||!this._bgRect||!this._config)return;const t=this._bgStart,i=(e.clientX-this._bgStartX)/this._bgRect.width*t.totalW,s=(e.clientY-this._bgStartY)/this._bgRect.height*t.totalH,o=this._gridGeom(),a=(b,m)=>Math.round(b/m)*m,n=20;let l,c,d,h;if(this._bgMode==="move")d=t.baseW,h=t.baseH,l=Math.min(Math.max(0,t.L+i),t.totalW-d),c=Math.min(Math.max(0,t.T+s),t.totalH-h),o&&(l=Math.min(Math.max(0,a(l,o.cellW)),t.totalW-d),c=Math.min(Math.max(0,a(c,o.cellH)),t.totalH-h));else{const b=this._bgMode.includes("l"),m=this._bgMode.includes("t"),z=b?-i:i,P=m?-s:s;let k=Math.abs(z)/t.baseW>=Math.abs(P)/t.baseH?(t.baseW+z)/t.baseW:(t.baseH+P)/t.baseH;const x=b?t.L+t.baseW:t.totalW-t.L,C=m?t.T+t.baseH:t.totalH-t.T,S=Math.min(x/t.baseW,C/t.baseH),$=Math.max(n/t.baseW,n/t.baseH);k=Math.min(Math.max(k,$),S),d=t.baseW*k,h=t.baseH*k,l=b?t.L+t.baseW-d:t.L,c=m?t.T+t.baseH-h:t.T,o&&(d=Math.min(t.totalW,Math.max(o.cellW,a(d,o.cellW))),h=Math.min(t.totalH,d*(t.baseH/t.baseW)),l=b?t.L+t.baseW-d:t.L,c=m?t.T+t.baseH-h:t.T,l=Math.min(Math.max(0,a(l,o.cellW)),t.totalW-d),c=Math.min(Math.max(0,a(c,o.cellH)),t.totalH-h))}const u=t.totalW-d-l,g=t.totalH-h-c;this._updateCanvas({width:be(d),height:be(h),extend:{left:l>.5?be(l):void 0,top:c>.5?be(c):void 0,right:u>.5?be(u):void 0,bottom:g>.5?be(g):void 0}})}_onBgUp(e){this._bgMode&&e.target.releasePointerCapture(e.pointerId),this._bgMode=null}_embCards(){return this._config?.embedded_cards??[]}_addEmbCard(){if(!this._config)return;const e={id:"emb-"+Date.now().toString(36),name:"Embedded Card",position:{x:.5,y:.5},anchor:"center",width:200,card_config:{}},t=this._gridGeom();if(t){const{cols:s,rows:o,cellW:a,padding:n}=t,l=Math.round(s/2),c=Math.round(o/2),d=Math.max(1,Math.min(s,2));e.grid_span=d,e.width=Math.max(8,d*a-n),e.position={x:M(l/s),y:M(c/o)}}const i=[...this._embCards(),e];this._selEmbCard=i.length-1,this._emit({...this._config,embedded_cards:i})}_updateEmbCard(e,t){if(!this._config)return;const i=this._embCards().map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,embedded_cards:i})}_updateEmbCardBox(e,t){const i=this._embCards()[e];i&&this._updateEmbCard(e,{box:K(i.box??{},t)})}_removeEmbCard(e){if(!this._config)return;const t=this._embCards().filter((i,s)=>s!==e);this._selEmbCard=Math.min(this._selEmbCard,t.length-1),t.length===0&&(this._selEmbCard=-1),this._selEmbCards=new Set([...this._selEmbCards].filter(i=>i!==e).map(i=>i>e?i-1:i)),this._emit({...this._config,embedded_cards:t}),this._showUndoToast("Embedded card removed")}_duplicateEmbCard(e){if(!this._config)return;const t=this._embCards()[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("emb"),i.name&&(i.name+=" copy");const s=[...this._embCards()];s.splice(e+1,0,i),this._selEmbCard=e+1,this._selEmbCards=new Set([e+1]),this._emit({...this._config,embedded_cards:s})}_onEmbCardDown(e,t){if(e.preventDefault(),e.stopPropagation(),this._bgSelected=!1,this._selEmbCard=t,this._syncNavTo("cards","embedded",[{key:`emb:${this._embCards()[t]?.id??t}`,label:this._embCards()[t]?.name??this._embCards()[t]?.id??`Embedded ${t+1}`}]),e.shiftKey||e.ctrlKey||e.metaKey){const a=new Set(this._selEmbCards);a.has(t)?a.delete(t):a.add(t),this._selEmbCards=a;return}const i=this._embCards(),s=i[t]?.group,o=s?i.map((a,n)=>({ec:a,i:n})).filter(({ec:a})=>a.group===s).map(({i:a})=>a):[t];if(this._selEmbCards=new Set(o),this._dragEmbCard=t,e.target.setPointerCapture(e.pointerId),this._ecRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._ecStartX=e.clientX,this._ecStartY=e.clientY,this._embDragMembers=o.map(a=>({idx:a,start:{...i[a]?.position??{x:0,y:0}}})),s){const a=this._config?.cards??[],n=a.map((l,c)=>({c:l,i:c})).filter(({c:l})=>l.group===s).map(({i:l})=>l);this._selCards=new Set(n),this._dragCard=n[0]??-1,this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=e.clientX,this._startY=e.clientY,this._dragMembers=n.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selCards=new Set,this._dragCard=-1,this._dragMembers=[]}_onEmbCardMove(e){if(this._dragEmbCard<0||!this._ecRect||!this._config)return;const t=(e.clientX-this._ecStartX)/this._ecRect.width,i=(e.clientY-this._ecStartY)/this._ecRect.height,s=this._embCards().map((a,n)=>{const l=this._embDragMembers.find(c=>c.idx===n);return l?{...a,position:{x:M(l.start.x+t),y:M(l.start.y+i)}}:a}),o=this._dragMembers.length>0?this._config.cards.map((a,n)=>{const l=this._dragMembers.find(c=>c.idx===n);return l?{...a,position:{x:M(l.start.x+t),y:M(l.start.y+i)}}:a}):this._config.cards;this._emit({...this._config,cards:o,embedded_cards:s})}_onEmbCardUp(e){this._dragEmbCard>=0&&e.target.releasePointerCapture(e.pointerId),this._dragEmbCard=-1}_embConfig(e){return e.kind==="std"?this._embCards()[e.idx]?.card_config:e.kind==="field"?this._config?.cards[e.ci]?.fields[e.fi]?.embed_card_config:this._extCards()[e.ci]?.fields[e.fi]?.embed_card_config}_embSetConfig(e,t){if(e.kind==="std"){this._updateEmbCard(e.idx,{card_config:t});return}if(e.kind==="field"){this._updateField(e.ci,e.fi,{embed_card_config:t});return}this._updateExtField(e.ci,e.fi,{embed_card_config:t})}async _openEmbEditor(e){this._embEditorTarget=e;const t=this._embConfig(e)??{};this._embEditorYaml=JSON.stringify(t,null,2),this._embNativeEditor=null;const i=String(t?.type??"");if(i)try{const s=await window.loadCardHelpers?.();if(s?.createCardElement)try{s.createCardElement(t)}catch{}const o=i.startsWith("custom:")?i.slice(7):`hui-${i}-card`;await Promise.race([customElements.whenDefined(o),new Promise(c=>setTimeout(c,5e3))]);const a=customElements.get(o);let n={...t};if(a?.getStubConfig)try{const c=Object.keys(this.hass?.states??{}),d=await a.getStubConfig(this.hass,c,c);d&&typeof d=="object"&&(n={...d,...n})}catch{}if(this._embEditorConfig=n,await Promise.race([customElements.whenDefined("hui-card-element-editor"),new Promise(c=>setTimeout(c,3e3))]),customElements.get("hui-card-element-editor")){const c=document.createElement("hui-card-element-editor");c.hass=this.hass,c.value=n,c.addEventListener("config-changed",d=>{d.stopPropagation();const h=d.detail;h?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,h.config)}),this._embNativeEditor=c}else{const c=a?.getConfigElement;if(c){const d=await c.call(a);if(d){try{d.setConfig?.(n)}catch{}d.hass=this.hass,d.addEventListener("config-changed",h=>{h.stopPropagation();const u=h.detail;u?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,u.config)}),this._embNativeEditor=d}}}}catch(s){console.warn("[mc-editor] native editor unavailable:",s)}this._embEditorOpen=!0}_closeEmbEditor(){this._embEditorOpen=!1,this._embEditorTarget=null,this._embNativeEditor=null,this._embEditorConfig=null,this._embEditorYamlError=""}_saveEmbEditorYaml(){if(this._embEditorTarget)try{const e=JSON.parse(this._embEditorYaml);this._embSetConfig(this._embEditorTarget,e),this._closeEmbEditor()}catch(e){this._embEditorYamlError="Invalid JSON: "+e.message}}async _openEmbPicker(e){this._embPickerTarget=e,this._embPickerSearch="",this._embPickerOpen=!0}async _pickEmbCardType(e){this._embPickerOpen=!1,this._embPickerSearch="";const t=this._embPickerTarget;if(!t)return;const i={...this._embConfig(t)??{},type:e};this._embSetConfig(t,i),await this._openEmbEditor(t)}_setBgImage(e,t,i){if(!this._config)return;const s=this._config.background??{},o={...s.images?.[e]??{}};i===""?delete o[t]:o[t]=i,this._updateBackground({images:{...s.images,[e]:o}})}_addCard(){if(!this._config)return;const e={id:"card-"+Date.now().toString(36),name:"Card",position:{x:.5,y:.5},anchor:"center",align:"center",fields:[]},t=this._gridGeom();if(t){const{cols:s,rows:o,cellW:a,padding:n}=t,l=Math.round(s/2),c=Math.round(o/2),d=Math.max(1,Math.min(s,2));e.grid_span=d,e.width=Math.max(8,d*a-n),e.position={x:M(l/s),y:M(c/o)}}const i=[...this._config.cards,e];this._selCard=i.length-1,this._selField=-1,this._emit({...this._config,cards:i})}_removeCard(e){if(!this._config)return;const t=this._config.cards.filter((i,s)=>s!==e);this._selCard=Math.min(this._selCard,Math.max(0,t.length-1)),this._selField=-1,this._selCards=new Set(Array.from(this._selCards).filter(i=>i!==e).map(i=>i>e?i-1:i)),this._emit({...this._config,cards:t}),this._showUndoToast("Card removed")}static _newId(e){return e+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)}static _deepClone(e){return JSON.parse(JSON.stringify(e))}_duplicateCard(e){if(!this._config)return;const t=this._config.cards[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("card"),i.fields=i.fields.map(o=>({...o,id:p._newId("f")})),i.name&&(i.name+=" copy");const s=[...this._config.cards];s.splice(e+1,0,i),this._selCard=e+1,this._selField=-1,this._selCards=new Set([e+1]),this._emit({...this._config,cards:s})}_copyFields(e){const t=this._config?.cards[e];t&&(this._copiedFields=t.fields.map(i=>({...i})),this._copySourceId=t.id)}_pasteFields(e){if(!this._copiedFields||!this._config)return;const t=this._copiedFields.map(s=>({...s,id:p._newId("f")})),i=this._config.cards.map((s,o)=>o===e?{...s,fields:[...s.fields,...t]}:s);this._emit({...this._config,cards:i})}_copyField(e,t,i=!1){const o=(i?this._extCards():this._config?.cards??[])[e],a=o?.fields[t];!o||!a||(this._copiedField={...a},this._copiedFieldSrc={isExt:i,cardId:o.id,fieldId:a.id})}_pasteField(e,t=!1){if(!this._copiedField||!this._config)return;const i={...this._copiedField,id:p._newId("f")};if(t){const s=this._extCards()[e];if(!s)return;this._selExtField=s.fields.length,this._updateExtCard(e,{fields:[...s.fields,i]})}else{const s=this._config.cards[e];if(!s)return;const o=[...s.fields,i],a=this._config.cards.map((n,l)=>l===e?{...n,fields:o}:n);this._selField=o.length-1,this._emit({...this._config,cards:a})}}_duplicateField(e,t,i=!1){if(!this._config)return;const s=i?this._extCards()[e]:this._config.cards[e],o=s?.fields[t];if(!s||!o)return;const a=p._deepClone(o);a.id=p._newId("f"),a.display_name&&(a.display_name+=" copy");const n=[...s.fields];n.splice(t+1,0,a),i?(this._selExtField=t+1,this._updateExtCard(e,{fields:n})):(this._selField=t+1,this._updateCard(e,{fields:n}))}_updSeries(e,t,i,s,o,a=!1){const n=[...s.graph_series??[]];n[i]&&(n[i]={...n[i],...o},this._updFor(e,t,a)({graph_series:n}))}_duplicateGraphSeries(e,t,i,s){const a=(s?this._extCards()[e]:this._config?.cards[e])?.fields[t],n=a?.graph_series?.[i];if(!a||!n)return;const l=p._deepClone(n);l.label&&(l.label+=" copy");const c=[...a.graph_series??[]];c.splice(i+1,0,l),s?this._selExtSeries=i+1:this._selSeries=i+1,this._updFor(e,t,s)({graph_series:c})}_addField(e){if(!this._config)return;const t=this._config.cards[e];if(!t)return;const i={id:"f-"+Date.now().toString(36),type:"value",column:1},s=[...t.fields,i];this._selField=s.length-1,this._updateCard(e,{fields:s})}_removeField(e,t){if(!this._config)return;const i=this._config.cards[e];if(!i)return;const s=i.fields.filter((o,a)=>a!==t);this._selField>=s.length&&(this._selField=s.length-1),this._updateCard(e,{fields:s}),this._showUndoToast("Field removed")}_extCards(){return this._config?.extended_cards??[]}_updateExtDefaults(e){this._config&&this._emit({...this._config,extended_card_defaults:K(this._config.extended_card_defaults??{},e)})}_addExtCard(){if(!this._config)return;const e={id:"ext-"+Date.now().toString(36),name:"Popover Card",columns:2,fields:[]},t=[...this._extCards(),e];this._selExtCard=t.length-1,this._selExtField=-1,this._emit({...this._config,extended_cards:t})}_removeExtCard(e){if(!this._config)return;const t=this._extCards().filter((i,s)=>s!==e);this._selExtCard=Math.min(this._selExtCard,Math.max(0,t.length-1)),this._selExtField=-1,this._emit({...this._config,extended_cards:t}),this._showUndoToast("Popover card removed")}_duplicateExtCard(e){if(!this._config)return;const t=this._extCards()[e];if(!t)return;const i=p._deepClone(t);i.id=p._newId("ext"),i.fields=i.fields.map(o=>({...o,id:p._newId("f")})),i.name&&(i.name+=" copy");const s=[...this._extCards()];s.splice(e+1,0,i),this._selExtCard=e+1,this._selExtField=-1,this._emit({...this._config,extended_cards:s})}_updateExtCard(e,t){if(!this._config)return;const i=this._extCards().map((s,o)=>o===e?K(s,t):s);this._emit({...this._config,extended_cards:i})}_updateExtCardBox(e,t){const i=this._extCards()[e];i&&this._updateExtCard(e,{box:K(i.box??{},t)})}_addExtField(e){if(!this._config)return;const t=this._extCards()[e];if(!t)return;const i={id:"f-"+Date.now().toString(36),type:"value",column:1},s=[...t.fields,i];this._selExtField=s.length-1,this._updateExtCard(e,{fields:s})}_removeExtField(e,t){const i=this._extCards()[e];if(!i)return;const s=i.fields.filter((o,a)=>a!==t);this._selExtField>=s.length&&(this._selExtField=s.length-1),this._updateExtCard(e,{fields:s}),this._showUndoToast("Field removed")}_stepNumInput(e,t){e.preventDefault();const s=e.currentTarget.closest(".ec-num-wrap")?.querySelector("input");if(s){try{t>0?s.stepUp():s.stepDown()}catch{const o=Number(s.step)||1,a=Number(s.value)||0;s.value=String(a+t*o)}s.dispatchEvent(new Event("change",{bubbles:!0}))}}_numWrap(e){return r`<span class="ec-num-wrap">${e}<span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${t=>this._stepNumInput(t,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${t=>this._stepNumInput(t,1)}>+</button></span></span>`}_numInput(e){return this._numWrap(r`<input class="ec-input ec-input-num" type="number"
      min=${e.min??_} max=${e.max??_} step=${e.step??_}
      placeholder=${e.placeholder??_} title=${e.title??_}
      .value=${e.value!=null?String(e.value):""}
      @change=${t=>{const i=t.target.value;e.onChange(i===""?void 0:Number(i))}}
    />`)}_numRow(e,t){return this._row(e,this._numInput(t),t.hint)}_reorderArray(e,t,i,s){const o=[...e],[a]=o.splice(t,1),n=t<i?s?i-1:i:s?i:i+1;return o.splice(n,0,a),{arr:o,target:n}}_remapSelectionAfterMove(e,t,i){if(t===i||e.size===0)return e;const s=new Set;for(const o of e)o===t?s.add(i):t<i&&o>t&&o<=i?s.add(o-1):t>i&&o>=i&&o<t?s.add(o+1):s.add(o);return s}_moveCard(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._config.cards,e,t,i);this._selCard=o,this._selCards=this._remapSelectionAfterMove(this._selCards,e,o),this._emit({...this._config,cards:s})}_moveExtCard(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._extCards(),e,t,i);this._selExtCard=o,this._emit({...this._config,extended_cards:s})}_moveVirtual(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._virtuals(),e,t,i);this._selVirtual=o,this._emit({...this._config,virtuals:s})}_moveZone(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._zones(),e,t,i);this._selZone=o,this._emit({...this._config,zones:s})}_moveFlow(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._flows(),e,t,i);this._selFlow=o,this._emit({...this._config,flows:s})}_moveEmbCard(e,t,i){if(!this._config)return;const{arr:s,target:o}=this._reorderArray(this._embCards(),e,t,i);this._selEmbCard=o,this._selEmbCards=this._remapSelectionAfterMove(this._selEmbCards,e,o),this._emit({...this._config,embedded_cards:s})}_movePoint(e,t,i,s){if(!this._config)return;const o=this._flows()[e];if(!o)return;const{arr:a,target:n}=this._reorderArray(o.points,t,i,s);this._selPoint=n,this._updateFlow(e,{points:a})}_moveVirtualInput(e,t,i,s){if(!this._config)return;const o=this._virtuals()[e];if(!o)return;const{arr:a,target:n}=this._reorderArray(o.inputs,t,i,s);this._selVirtualInput=n,this._updateVirtual(e,{inputs:a})}_moveTrigger(e,t,i,s){if(!this._config)return;const o=this._virtuals()[e];if(!o)return;const{arr:a,target:n}=this._reorderArray(o.triggers??[],t,i,s);this._selTrigger=n,this._updateVirtual(e,{triggers:a})}_moveOption(e,t,i,s,o,a){const n=a?this._extCards()[e]?.fields[t]:this._config?.cards[e]?.fields[t];if(!n)return;const{arr:l,target:c}=this._reorderArray(n.options??[],i,s,o);a?this._selExtOption=c:this._selOption=c,this._updFor(e,t,a)({options:l})}_moveTuItem(e,t,i,s,o,a){const n=a?this._extCards()[e]?.fields[t]:this._config?.cards[e]?.fields[t];if(!n)return;const{arr:l}=this._reorderArray(n.time_until_layout??[],i,s,o);this._updFor(e,t,a)({time_until_layout:l})}_moveGraphSeries(e,t,i,s,o){const a=this._config?.cards[e]?.fields[t];if(!a)return;const{arr:n,target:l}=this._reorderArray(a.graph_series??[],i,s,o);this._selSeries=l,this._updateField(e,t,{graph_series:n})}_moveExtGraphSeries(e,t,i,s,o){const a=this._extCards()[e]?.fields[t];if(!a)return;const{arr:n,target:l}=this._reorderArray(a.graph_series??[],i,s,o);this._selExtSeries=l,this._updateExtField(e,t,{graph_series:n})}_moveField(e,t,i,s){if(!this._config)return;const o=this._config.cards[e];if(!o)return;const{arr:a,target:n}=this._reorderArray(o.fields,t,i,s);this._selField=n,this._updateCard(e,{fields:a})}_moveExtField(e,t,i,s){const o=this._extCards()[e];if(!o)return;const{arr:a,target:n}=this._reorderArray(o.fields,t,i,s);this._selExtField=n,this._updateExtCard(e,{fields:a})}_onItemPointerDown(e,t){if(this._suppressClick=!1,e.button!==0)return;const i=e.target;if(i.closest(".ec-item-card-actions"))return;const s=!!i.closest(".ec-drag-handle");if(e.pointerType!=="mouse"&&!s)return;const o=e.currentTarget,n=[...t.split(":").slice(0,-1),""].join(":"),l=[...this.renderRoot.querySelectorAll(`[data-drag-key^="${n}"]`)];if(!(l.length<2)){try{o.setPointerCapture(e.pointerId)}catch{}this._ptrDrag={key:t,pointerId:e.pointerId,row:o,siblings:l,scroller:o.closest(".ec-panel-body"),startY:e.clientY,lastY:e.clientY,active:!1,raf:0},s&&(this._suppressClick=!0,e.preventDefault())}}_onItemPointerMove(e){const t=this._ptrDrag;if(!(!t||e.pointerId!==t.pointerId)){if(t.lastY=e.clientY,!t.active){if(Math.abs(e.clientY-t.startY)<p._PTR_DRAG_SLOP)return;t.active=!0,this._dragSrc=t.key,this._suppressClick=!0}e.preventDefault(),this._ptrTrack(),this._ptrTickScroll()}}_ptrTrack(){const e=this._ptrDrag;if(!e?.active)return;let t=null,i=!1;for(const s of e.siblings){const o=s.getBoundingClientRect();if(e.lastY>=o.top&&e.lastY<=o.bottom){t=s.dataset.dragKey??null,i=e.lastY<o.top+o.height/2;break}}if(!t&&e.siblings.length){const s=e.siblings[0].getBoundingClientRect(),o=e.siblings[e.siblings.length-1].getBoundingClientRect();e.lastY<s.top?(t=e.siblings[0].dataset.dragKey??null,i=!0):e.lastY>o.bottom&&(t=e.siblings[e.siblings.length-1].dataset.dragKey??null,i=!1)}t===e.key&&(t=null),(this._dropKey!==t||this._dropBefore!==i)&&(this._dropKey=t,this._dropBefore=i)}_ptrTickScroll(){const e=this._ptrDrag;if(!e?.active||!e.scroller)return;const t=p,i=e.scroller.getBoundingClientRect(),s=i.top+t._PTR_EDGE-e.lastY,o=e.lastY-(i.bottom-t._PTR_EDGE);if((s>0?-s:o>0?o:0)===0){e.raf&&(cancelAnimationFrame(e.raf),e.raf=0);return}if(e.raf)return;const n=()=>{const l=this._ptrDrag;if(!l?.active||!l.scroller)return;const c=l.scroller.getBoundingClientRect(),d=c.top+t._PTR_EDGE-l.lastY,h=l.lastY-(c.bottom-t._PTR_EDGE),u=d>0?-Math.min(d,t._PTR_EDGE):h>0?Math.min(h,t._PTR_EDGE):0;if(u===0){l.raf=0;return}l.scroller.scrollTop+=u/t._PTR_EDGE*t._PTR_SCROLL_MAX,this._ptrTrack(),l.raf=requestAnimationFrame(n)};e.raf=requestAnimationFrame(n)}_onItemPointerUp(e){const t=this._ptrDrag;if(!t||e.pointerId!==t.pointerId)return;const i=this._dropKey,s=this._dropBefore,o=t.active,a=t.key;this._ptrEndDrag(),o&&i&&i!==a&&this._moveByKeys(a,i,s)}_onItemPointerCancel(e){this._ptrDrag&&e.pointerId!==this._ptrDrag.pointerId||this._ptrEndDrag()}_ptrEndDrag(){const e=this._ptrDrag;if(e){e.raf&&cancelAnimationFrame(e.raf);try{e.row.releasePointerCapture(e.pointerId)}catch{}}this._ptrDrag=null,this._dragSrc=null,this._dropKey=null}_onItemCardKeydown(e,t,i){if(e.key==="Enter"||e.key===" "){if(e.target!==e.currentTarget)return;e.preventDefault(),i(e);return}if(t!=null&&e.altKey&&(e.key==="ArrowUp"||e.key==="ArrowDown")){e.preventDefault();const s=e.key==="ArrowUp",o=t.split(":"),a=Number(o[o.length-1])+(s?-1:1);if(a<0)return;const n=[...o.slice(0,-1),""].join(":"),l=this.renderRoot?.querySelectorAll(`[data-drag-key^="${n}"]`);if(!l||a>=l.length)return;const c=[...o.slice(0,-1),String(a)].join(":");this._moveByKeys(t,c,s),this.updateComplete.then(()=>{this.renderRoot?.querySelector(`[data-drag-key="${c}"]`)?.focus()})}}_moveByKeys(e,t,i){const[s,...o]=e.split(":"),[a,...n]=t.split(":");if(s!==a)return;const l=c=>c.every(d=>Number.isInteger(Number(d))&&Number(d)>=0);if(!(o.length===0||o.length!==n.length||!l(o)||!l(n))){if(s==="card")this._moveCard(Number(o[0]),Number(n[0]),i);else if(s==="field"){const[c,d]=o.map(Number),[h,u]=n.map(Number);if(c!==h)return;this._moveField(c,d,u,i)}else if(s==="extfield"){const[c,d]=o.map(Number),[h,u]=n.map(Number);if(c!==h)return;this._moveExtField(c,d,u,i)}else if(s==="extcard")this._moveExtCard(Number(o[0]),Number(n[0]),i);else if(s==="virt")this._moveVirtual(Number(o[0]),Number(n[0]),i);else if(s==="zone")this._moveZone(Number(o[0]),Number(n[0]),i);else if(s==="flow")this._moveFlow(Number(o[0]),Number(n[0]),i);else if(s==="emb")this._moveEmbCard(Number(o[0]),Number(n[0]),i);else if(s==="opt"||s==="eopt"){const[c,d,h]=o.map(Number),[u,g,b]=n.map(Number);if(c!==u||d!==g)return;this._moveOption(c,d,h,b,i,s==="eopt")}else if(s==="tu"||s==="etu"){const[c,d,h]=o.map(Number),[u,g,b]=n.map(Number);if(c!==u||d!==g)return;this._moveTuItem(c,d,h,b,i,s==="etu")}else if(s==="pt"){const[c,d]=o.map(Number),[h,u]=n.map(Number);if(c!==h)return;this._movePoint(c,d,u,i)}else if(s==="vin"){const[c,d]=o.map(Number),[h,u]=n.map(Number);if(c!==h)return;this._moveVirtualInput(c,d,u,i)}else if(s==="trig"){const[c,d]=o.map(Number),[h,u]=n.map(Number);if(c!==h)return;this._moveTrigger(c,d,u,i)}else if(s==="gs"){const[c,d,h]=o.map(Number),[u,g,b]=n.map(Number);if(c!==u||d!==g)return;this._moveGraphSeries(c,d,h,b,i)}else if(s==="egs"){const[c,d,h]=o.map(Number),[u,g,b]=n.map(Number);if(c!==u||d!==g)return;this._moveExtGraphSeries(c,d,h,b,i)}}}_updateExtField(e,t,i){const s=this._extCards()[e];if(!s)return;const o=s.fields.map((a,n)=>n===t?K(a,i):a);this._updateExtCard(e,{fields:o})}_alignCards(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards),i=this._config.cards,s=t.map(u=>({i:u,pos:{...i[u].position}})),o=s.map(u=>u.pos.x),a=s.map(u=>u.pos.y),n=Math.min(...o),l=Math.max(...o),c=Math.min(...a),d=Math.max(...a),h=i.map((u,g)=>{if(!this._selCards.has(g))return u;let{x:b,y:m}=u.position;return e==="left"&&(b=M(n)),e==="right"&&(b=M(l)),e==="centerH"&&(b=M((n+l)/2)),e==="top"&&(m=M(c)),e==="bottom"&&(m=M(d)),e==="middleV"&&(m=M((c+d)/2)),{...u,position:{x:b,y:m}}});this._emit({...this._config,cards:h})}_distribute(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((c,d)=>this._config.cards[c].position[e]-this._config.cards[d].position[e]),i=t.length,s=this._config.cards,o=s[t[0]].position[e],a=s[t[i-1]].position[e],n=i>1?(a-o)/(i-1):0,l=s.map((c,d)=>{const h=t.indexOf(d);if(h<0)return c;const u=M(o+n*h);return{...c,position:{...c.position,[e]:u}}});this._emit({...this._config,cards:l})}_distributeCanvas(e){if(!this._config||this._selCards.size<2)return;const t=Array.from(this._selCards).sort((a,n)=>this._config.cards[a].position[e]-this._config.cards[n].position[e]),i=t.length,o=this._config.cards.map((a,n)=>{const l=t.indexOf(n);if(l<0)return a;const c=M((l+1)/(i+1));return{...a,position:{...a.position,[e]:c}}});this._emit({...this._config,cards:o})}_alignGroupToCanvas(e){if(!this._config||this._selCards.size<1)return;const t=.5,i=Array.from(this._selCards),s=this._config.cards,o=i.map(c=>s[c].position[e]),a=(Math.min(...o)+Math.max(...o))/2,n=t-a,l=s.map((c,d)=>this._selCards.has(d)?{...c,position:{...c.position,[e]:M(c.position[e]+n)}}:c);this._emit({...this._config,cards:l})}_groupCards(){if(!this._config||this._selCards.size+this._selEmbCards.size<2)return;const e="g-"+Date.now().toString(36),t=this._config.cards.map((s,o)=>this._selCards.has(o)?{...s,group:e}:s),i=this._embCards().map((s,o)=>this._selEmbCards.has(o)?{...s,group:e}:s);this._emit({...this._config,cards:t,embedded_cards:i})}_ungroupCards(){if(!this._config)return;const e=this._config.cards.map((i,s)=>{if(!this._selCards.has(s))return i;const{group:o,...a}=i;return a}),t=this._embCards().map((i,s)=>{if(!this._selEmbCards.has(s))return i;const{group:o,...a}=i;return a});this._emit({...this._config,cards:e,embedded_cards:t})}_applyGroupGap(e,t){if(!this._config)return;const{totalW:i,totalH:s}=Q(this._config),o=e==="x"?i:s,a=e==="x"?s:i,n=this._config.cards,l=this._embCards(),c=[],d=(x,C,S)=>{const $=this._previewBoxes[S.id];if(!$)return;const D=S.anchor??v("anchor")??"top-left",V=(e==="x"?$.y:$.x)*a,E=V+(e==="x"?$.h:$.w)*a;c.push({kind:x,idx:C,box:$,anchor:D,crossStart:V,crossEnd:E})};for(const x of this._selCards){const C=n[x];C&&d("card",x,C)}for(const x of this._selEmbCards){const C=l[x];C&&d("emb",x,C)}if(c.length<2)return;const h=[...c].sort((x,C)=>x.crossStart-C.crossStart),u=[];let g=[],b=-1/0;for(const x of h)g.length===0||x.crossStart<b?(g.push(x),b=Math.max(b,x.crossEnd)):(u.push(g),g=[x],b=x.crossEnd);g.length>0&&u.push(g);const m=new Map,z=new Map;for(const x of u){if(x.length<2)continue;x.sort(($,D)=>e==="x"?$.box.x-D.box.x:$.box.y-D.box.y);const C=x[0];let S=(e==="x"?C.box.x:C.box.y)*o+(e==="x"?C.box.w:C.box.h)*o;for(let $=1;$<x.length;$++){const D=x[$],V=(e==="x"?D.box.w:D.box.h)*o,E=S+t,[J,ee]=Te[D.anchor],oe=M((E+(e==="x"?J:ee)*V)/o),ye=D.kind==="card"?n[D.idx]:l[D.idx],Se=e==="x"?{x:oe,y:ye.position.y}:{x:ye.position.x,y:oe};(D.kind==="card"?m:z).set(D.idx,Se),S=E+V}}if(m.size===0&&z.size===0)return;const P=n.map((x,C)=>m.has(C)?{...x,position:m.get(C)}:x),k=l.map((x,C)=>z.has(C)?{...x,position:z.get(C)}:x);this._emit({...this._config,cards:P,embedded_cards:k})}_syncNavTo(e,t,i){this._navigateTo(e,t,i)}_onCardDown(e,t){if(e.preventDefault(),this._bgSelected=!1,e.altKey){const a=this._config?.cards??[],n=this._previewBoxes,l=this.renderRoot.querySelector(".ec-canvas-area");if(l&&Object.keys(n).length>0){const c=l.getBoundingClientRect(),d=(e.clientX-c.left)/c.width,h=(e.clientY-c.top)/c.height,u=a.map((g,b)=>({idx:b,box:n[g.id]})).filter(g=>!!g.box&&d>=g.box.x&&d<=g.box.x+g.box.w&&h>=g.box.y&&h<=g.box.y+g.box.h).map(g=>g.idx).sort((g,b)=>g-b);if(u.length>0){const g=u.indexOf(this._selCard),b=g>=0?u[(g+1)%u.length]:u[0];this._selCard=b,this._selField=-1,this._syncNavTo("cards","mosaic",[{key:`card:${a[b]?.id??b}`,label:a[b]?.name??`Card ${b+1}`}]);const m=a[b]?.group;this._selCards=new Set(m?a.map((z,P)=>({c:z,idx:P})).filter(({c:z})=>z.group===m).map(({idx:z})=>z):[b])}}return}if(this._selCard=t,this._selField=-1,this._syncNavTo("cards","mosaic",[{key:`card:${this._config?.cards[t]?.id??t}`,label:this._config?.cards[t]?.name??`Card ${t+1}`}]),e.shiftKey||e.ctrlKey||e.metaKey){const a=new Set(this._selCards);a.has(t)?a.delete(t):a.add(t),this._selCards=a;return}const i=this._config?.cards??[],s=i[t]?.group,o=s?i.map((a,n)=>({c:a,idx:n})).filter(({c:a})=>a.group===s).map(({idx:a})=>a):[t];if(this._selCards=new Set(o),this._dragCard=t,e.target.setPointerCapture(e.pointerId),this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=e.clientX,this._startY=e.clientY,this._dragMembers=o.map(a=>({idx:a,start:{...i[a]?.position??{x:0,y:0}}})),s){const a=this._embCards(),n=a.map((l,c)=>({ec:l,idx:c})).filter(({ec:l})=>l.group===s).map(({idx:l})=>l);this._selEmbCards=new Set(n),this._embDragMembers=n.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selEmbCards=new Set,this._embDragMembers=[]}_onCardMove(e){if(this._dragCard<0||!this._hostRect||!this._config)return;const t=(e.clientX-this._startX)/this._hostRect.width,i=(e.clientY-this._startY)/this._hostRect.height,s=this._config.cards.map((a,n)=>{const l=this._dragMembers.find(c=>c.idx===n);return l?{...a,position:{x:M(l.start.x+t),y:M(l.start.y+i)}}:a}),o=this._embDragMembers.length>0?this._embCards().map((a,n)=>{const l=this._embDragMembers.find(c=>c.idx===n);return l?{...a,position:{x:M(l.start.x+t),y:M(l.start.y+i)}}:a}):this._embCards();this._emit({...this._config,cards:s,embedded_cards:o})}_onCardUp(e){const t=this._gridGeom();if(t&&this._config&&(this._dragMembers.length>0||this._embDragMembers.length>0)){const{cols:i,rows:s}=t,o=this._config.cards,a=this._embCards(),n=[];for(const l of this._dragMembers){const c=o[l.idx];c&&n.push({kind:"card",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}for(const l of this._embDragMembers){const c=a[l.idx];c&&n.push({kind:"emb",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}if(n.length===1){const l=n[0],c=(l.kind==="card"?o[l.idx]?.anchor:a[l.idx]?.anchor)??v("anchor")??"top-left",[d,h]=Te[c],u=l.box?l.box.x+d*l.box.w:l.pos.x,g=l.box?l.box.y+h*l.box.h:l.pos.y,b=Math.min(i,Math.max(0,Math.round(u*i))),m=Math.min(s,Math.max(0,Math.round(g*s))),z={x:M(b/i),y:M(m/s)};if(l.kind==="card"){const P=o.map((k,x)=>x===l.idx?{...k,position:z}:k);this._emit({...this._config,cards:P})}else{const P=a.map((k,x)=>x===l.idx?{...k,position:z}:k);this._emit({...this._config,embedded_cards:P})}}else if(n.length>=2){let l=1/0,c=1/0,d=-1/0,h=-1/0;for(const k of n)k.box?(l=Math.min(l,k.box.x),c=Math.min(c,k.box.y),d=Math.max(d,k.box.x+k.box.w),h=Math.max(h,k.box.y+k.box.h)):(l=Math.min(l,k.pos.x),c=Math.min(c,k.pos.y),d=Math.max(d,k.pos.x),h=Math.max(h,k.pos.y));const u={x:(l+d)/2,y:(c+h)/2},g=Math.min(i,Math.max(0,Math.round(u.x*i))),b=Math.min(s,Math.max(0,Math.round(u.y*s))),m={x:g/i-u.x,y:b/s-u.y},z=o.map((k,x)=>this._dragMembers.some(C=>C.idx===x)?{...k,position:{x:M(k.position.x+m.x),y:M(k.position.y+m.y)}}:k),P=a.map((k,x)=>this._embDragMembers.some(C=>C.idx===x)?{...k,position:{x:M(k.position.x+m.x),y:M(k.position.y+m.y)}}:k);this._emit({...this._config,cards:z,embedded_cards:P})}}e.target.releasePointerCapture(e.pointerId),this._dragCard=-1,this._dragMembers=[],this._embDragMembers=[]}_onPointDown(e,t){if(e.preventDefault(),e.stopPropagation(),this._selPoint=t,!this._config)return;const i=this._flows()[this._selFlow];if(!i)return;const s=i.points[t];if(s){if(e.shiftKey){this._removeFlowPoint(this._selFlow,t),this._selPoint=-1;return}this._syncNavTo("elements","flows",[{key:`flow:${i.id}`,label:i.name??i.id},{key:`pt:${t}`,label:`Point ${t+1}`}]),s.card==null&&(this._dragPoint=t,e.target.setPointerCapture(e.pointerId),this._pRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._pStartX=e.clientX,this._pStartY=e.clientY,this._pStartPos={x:s.x??0,y:s.y??0},this._snapAxis=null)}}_onPointMove(e){if(this._dragPoint<0||!this._pRect||!this._config)return;let t=M(this._pStartPos.x+(e.clientX-this._pStartX)/this._pRect.width),i=M(this._pStartPos.y+(e.clientY-this._pStartY)/this._pRect.height);const s=t,o=i;if(e.ctrlKey){const a=this._flows()[this._selFlow];if(a&&this._pRect){const n=this._config.cards,l=this._previewBoxes,c=this._dragPoint,d=c>0?a.points[c-1]:null,h=c<a.points.length-1?a.points[c+1]:null,u=d?$e(d,n,l):null,g=h?$e(h,n,l):null,b=this._pRect.width,m=this._pRect.height;if(u&&g){const z=Math.hypot((t-u.x)*b,(i-g.y)*m),P=Math.hypot((t-g.x)*b,(i-u.y)*m);z<=P?(t=u.x,i=g.y):(t=g.x,i=u.y)}else{const z=u??g;if(z){if(this._snapAxis===null){const P=e.clientX-this._pStartX,k=e.clientY-this._pStartY;Math.hypot(P,k)>4?this._snapAxis=Math.abs(P)>=Math.abs(k)?"y":"x":this._snapAxis=Math.abs(t-z.x)*b<Math.abs(i-z.y)*m?"x":"y"}this._snapAxis==="x"?t=z.x:i=z.y}}}}{let n=!1;e:for(const l of this._config.cards){const c=this._previewBoxes[l.id];if(c)for(const d of["top","right","bottom","left"]){let h,u;switch(d){case"top":h=c.x+c.w/2,u=c.y;break;case"right":h=c.x+c.w,u=c.y+c.h/2;break;case"bottom":h=c.x+c.w/2,u=c.y+c.h;break;case"left":h=c.x,u=c.y+c.h/2;break}if(Math.hypot((s-h)*this._pRect.width,(o-u)*this._pRect.height)<=24){t=h,i=u,this._snapAnchor={card:l.id,side:d},n=!0;break e}}}n||(this._snapAnchor=null)}this._updateFlowPoint(this._selFlow,this._dragPoint,{x:t,y:i})}_onPointUp(e){this._dragPoint>=0&&(e.target.releasePointerCapture(e.pointerId),this._snapAnchor&&this._updateFlowPoint(this._selFlow,this._dragPoint,{card:this._snapAnchor.card,side:this._snapAnchor.side,x:void 0,y:void 0})),this._dragPoint=-1,this._snapAnchor=null,this._snapAxis=null}_ptSegDist(e,t,i,s,o,a){const n=o-i,l=a-s,c=n*n+l*l,d=c===0?0:Math.max(0,Math.min(1,((e-i)*n+(t-s)*l)/c));return Math.hypot(e-i-d*n,t-s-d*l)}_onCanvasAreaClick(e){e.target.closest(".ec-bg-ov,.ec-bg-resize")||(this._bgSelected=!1);const t=this._flows();if(t.length===0||e.target.closest(".ec-handle,.ec-card-ov,.ec-emb-handle,.ec-emb-ov,.ec-zone-handle,.ec-flow-node,.ec-snap"))return;const s=e.currentTarget.getBoundingClientRect(),o=e.clientX-s.left,a=e.clientY-s.top,n=this._config?.cards??[],l=10;let c=-1,d=1/0;for(let h=0;h<t.length;h++){const u=t[h].points.map(g=>{const b=$e(g,n,this._previewBoxes);return{x:b.x*s.width,y:b.y*s.height}});for(let g=0;g<u.length-1;g++){const b=this._ptSegDist(o,a,u[g].x,u[g].y,u[g+1].x,u[g+1].y);b<d&&(d=b,c=h)}}if(c>=0&&d<=l){this._selFlow=c,this._selPoint=-1;const h=t[c];this._syncNavTo("elements","flows",[{key:`flow:${h.id}`,label:h.name??h.id}])}}_syncPreviewDialog(){const e=this.renderRoot?.querySelector("dialog.ec-preview");if(!e)return;const t=e.matches(":modal");this._previewExpanded&&!t?(e.open&&e.close(),e.showModal()):!this._previewExpanded&&(t||!e.open)&&(e.open&&e.close(),e.show())}_sizeExpandedCanvas(){const e=this.renderRoot?.querySelector(".ec-canvas-area");if(!e)return;if(!this._previewExpanded){e.style.width&&e.style.removeProperty("width");return}const t=this.renderRoot?.querySelector(".ec-preview");if(!t)return;this._previewRO||(this._previewRO=new ResizeObserver(()=>this._sizeExpandedCanvas()),this._previewRO.observe(t),window.addEventListener("resize",this._onWindowResize));const{totalW:i,totalH:s}=Q(this._config);if(!i||!s)return;const o=this.renderRoot?.querySelector(".ec-expanded-bottom-bar"),a=t.clientWidth,n=window.innerHeight-(o?.offsetHeight??0);if(a<=0||n<=0)return;const l=`${Math.floor(Math.min(a,n*i/s))}px`;e.style.width!==l&&(e.style.width=l)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onUndoKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onUndoKeydown),clearTimeout(this._toastTimer),this._previewRO?.disconnect(),this._previewRO=void 0,window.removeEventListener("resize",this._onWindowResize)}shouldUpdate(e){if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass");if(!t||!this.hass)return!0;for(const i of this._referencedEntities())if(t.states[i]!==this.hass.states[i])return!0;return this._forwardHass(),!1}_referencedEntities(){const e=this._config;if(!e)return[];if(this._refEntityCache?.config===e)return this._refEntityCache.ids;const t=li(e);return this._refEntityCache={config:e,ids:t},t}_forwardHass(){const e=this.renderRoot,t=this.hass;if(!e||!t)return;const i=(o,a)=>{o.hass=a};e.querySelectorAll("ha-entity-picker, ha-icon-picker, ha-selector, ha-service-control, ha-navigation-picker").forEach(o=>i(o,t));const s=e.querySelectorAll("ha-service-picker");if(s.length){const o=this._actionHass();s.forEach(a=>i(a,o))}e.querySelectorAll(Pe).forEach(o=>i(o,t)),this._embNativeEditor&&i(this._embNativeEditor,t)}updated(e){if(this._config&&(e.has("_config")||e.has("_previewExpanded"))&&this.renderRoot?.querySelectorAll(Pe).forEach(i=>i.setConfig(this._config)),this._syncPreviewDialog(),this._sizeExpandedCanvas(),!this._cpOpenId)this._cpFocusedId=null;else if(this._cpFocusedId!==this._cpOpenId){const i=this.renderRoot?.querySelector(".ec-cp-popup");i&&(i.focus({preventScroll:!0}),this._cpFocusedId=this._cpOpenId)}const t=this._navScrollKey();if(t!==this._lastScrollKey){const i=(this._navPanel?1:0)+this._navPath.length,s=this.renderRoot?.querySelector(".ec-panel-body");s&&(s.scrollTop=i<this._lastScrollDepth?this._panelScroll.get(t)??0:0),this.renderRoot?.querySelector(".ec-panel-header-title")?.focus({preventScroll:!0}),this._lastScrollKey=t,this._lastScrollDepth=i}if(this._previewExpanded&&(this._showAddFlowInput?this.renderRoot?.querySelector(".ec-flow-name-input")?.focus():this.renderRoot?.querySelector(".ec-preview")?.focus()),this._embEditorOpen&&this._embNativeEditor){const i=this.renderRoot.querySelector("#emb-native-slot");if(i&&!i.contains(this._embNativeEditor)){i.innerHTML="",i.appendChild(this._embNativeEditor);const s=this._embEditorConfig??(this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0);if(s){const o=this._embNativeEditor;try{o.setConfig?.(s)}catch{}o.value=s}this._embNativeEditor.hass=this.hass}}this._syncCustomColorVars(),this._pickerStyleRetries=0,this._stylePickers()}_syncCustomColorVars(){const e=Tt(this._config?.defaults),t=e.map(([i])=>i.slice(9));for(const i of this._mccustApplied)t.includes(i)||this.style.removeProperty(`--mccust_${i}`);for(const[i,s]of e)this.style.setProperty(i,s);this._mccustApplied=t}_stylePickers(){[this._styleEntityPickers(),this._styleWalkedPickers()].some(Boolean)&&!this._pickerStyleScheduled&&this._pickerStyleRetries<60&&(this._pickerStyleScheduled=!0,this._pickerStyleRetries++,requestAnimationFrame(()=>{this._pickerStyleScheduled=!1,this._stylePickers()}))}_injectPickerStyle(e){const t=e?.shadowRoot;if(!t)return!1;if(t.querySelector("style[data-mc-picker]"))return!0;const i=document.createElement("style");return i.setAttribute("data-mc-picker",""),i.textContent=`
      :host {
        border-radius: 6px !important;
        min-height: ${p.PICKER_HEIGHT}px !important;
      }
      :host::after, :host::before { content: none !important; }
      #item > md-item {
        border-radius: 6px !important;
        color: var(--mce-primary) !important;
        min-height: ${p.PICKER_HEIGHT}px !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        font-size: 15px !important;
        --mdc-icon-size: 20px;
      }
    `,t.appendChild(i),!0}_findInShadow(e,t,i=6){let s=[e];for(let o=0;o<i&&s.length;o++){const a=[];for(const n of s){const l=n.shadowRoot;if(!l)continue;const c=l.querySelector(t);if(c)return c;l.querySelectorAll("*").forEach(d=>{d.shadowRoot&&a.push(d)})}s=a}return null}_styleWalkedPickers(){let e=!1;for(const t of p._WALKED_PICKERS){const i=this.renderRoot?.querySelectorAll(t);!i||i.length===0||i.forEach(s=>{if(this._styledPickers.has(s))return;const o=this._findInShadow(s,"ha-combo-box-item",8);this._injectPickerStyle(o)?this._styledPickers.add(s):e=!0})}return e}_styleEntityPickers(){const e=this.renderRoot?.querySelectorAll("ha-entity-picker");if(!e||e.length===0)return!1;let t=!1;return e.forEach(i=>{if(this._styledPickers.has(i))return;const s=i.shadowRoot?.querySelector("ha-generic-picker")?.shadowRoot?.querySelector("ha-picker-field")?.shadowRoot?.querySelector("ha-combo-box-item");this._injectPickerStyle(s)?this._styledPickers.add(i):t=!0}),t}_iconPicker(e,t,i){return r`<ha-icon-picker
      .hass=${this.hass}
      .value=${e??""}
      .placeholder=${i??""}
      @value-changed=${s=>{const o=s.detail.value;t(o||void 0)}}
    ></ha-icon-picker>`}_entitySelector(e){const{label:t="Entity",entity:i,onEntity:s,includeVirtuals:o=!0,attribute:a,onAttribute:n,attributePlaceholder:l}=e,c=i?.startsWith("virtual:")??!1,d=!i||Object.keys(this.hass?.states[i]?.attributes??{}).length>0;return r`
      ${this._row(t,c?r`<div style="display:flex;gap:4px;align-items:center;">
              <span class="ec-input" style="flex:1;opacity:0.8;">
                ${this._virtuals().find(h=>`virtual:${h.id}`===i)?.name??i}
              </span>
              <button class="ec-btn-clear" @click=${()=>s(void 0)} title="Switch to real entity">✕</button>
            </div>`:r`<ha-entity-picker
              .hass=${this.hass}
              .value=${i??""}
              allow-custom-entity
              @value-changed=${h=>s(h.detail.value)}
            ></ha-entity-picker>`,"The entity this reads its value from.")}
      ${o&&!c&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
          .value=${""}
          @change=${h=>{const u=h.target.value;u&&s(u),h.target.value=""}}
        >
          <option value="">(pick a virtual)</option>
          ${this._virtuals().map(h=>r`<option value=${"virtual:"+h.id}>${h.name}</option>`)}
        </select>`,"Use a virtual entity from Elements ▸ Virtual Entities instead of a real one. Picking one replaces the entity above."):_}
      ${n&&!c&&d?this._row("Attribute",r`<ha-selector
          class="ec-attr-picker"
          .hass=${this.hass}
          .selector=${{attribute:{entity_id:i||void 0}}}
          .value=${a}
          .placeholder=${l}
          .required=${!1}
          @value-changed=${h=>{const u=h.detail.value;n(typeof u=="string"&&u?u:void 0)}}
        ></ha-selector>`,"Read one of the entity's attributes instead of its state."):_}
    `}_boxRows(e,t,i,s=!0,o="Rounds the corners of the box."){return r`
      ${this._gradientRows({id:`${e}-bg`,label:"Background",toLabel:"Gradient to",colorHint:"The box's fill colour. Leave blank for no fill, so whatever sits behind shows through.",color:t.background,color2:t.background2,angle:t.background_angle,setColor:a=>i({background:a}),setColor2:a=>i({background2:a}),setAngle:a=>i({background_angle:a}),clearGradient:()=>i({background2:void 0,background_angle:void 0}),onClearColor:()=>i({background:void 0,background_alpha:void 0})})}

      ${this._row("Opacity",r`<div class="ec-opacity-row">
          <input type="range" min="0" max="1" step="0.01"
            .value=${String(t.background_alpha??v("box_background_alpha")??1)}
            @input=${a=>{const n=parseFloat(a.target.value);i({background_alpha:n})}}
          />
          <span class="ec-opacity-val">${Math.round((t.background_alpha??v("box_background_alpha")??1)*100)}%</span>
          <button class="ec-btn-clear" @click=${()=>i({background_alpha:void 0})} title="Clear">✕</button>
        </div>`,"How opaque the background colour is. The border and contents are unaffected.")}

      ${this._row("Border",r`<input type="checkbox" .checked=${t.border??!1}
          @change=${a=>i({border:a.target.checked})}
        />`,"Draws a border around the box, in Border Color below.")}

      ${t.border?r`
        ${this._row("Border Color",this._colorPicker(`${e}-col`,t.color,a=>i({color:a})),"Colour of the border — not a fill. The fill is Background above.")}

        ${this._numRow("Border width (px)",{value:t.border_width,onChange:a=>i({border_width:a}),min:0,placeholder:"1",hint:"Thickness of the border line."})}
      `:_}

      ${this._numRow("Radius (px)",{value:t.radius,onChange:a=>i({radius:a}),min:0,placeholder:"0",hint:o})}

      ${this._numRow("Padding (px)",{value:t.padding,onChange:a=>i({padding:a}),min:0,placeholder:"0",hint:"Space between the edge of the box and its contents."})}

      ${this._row("Shadow",r`<input type="checkbox" .checked=${t.shadow??!1}
          @change=${a=>i({shadow:a.target.checked})}
        />`,"Casts a shadow behind the box, shaped by the rows below.")}

      ${t.shadow?r`
        ${this._row("Shadow type",r`<select class="ec-select"
            .value=${t.shadow_mode??v("box_shadow_mode")??"drop"}
            @change=${a=>{const n=a.target.value;i({shadow_mode:n==="box"?"box":void 0})}}
          >
            <option value="drop" .selected=${(t.shadow_mode??"drop")==="drop"}>Drop — offset, directional</option>
            <option value="box" .selected=${t.shadow_mode==="box"}>Box — even halo all round</option>
          </select>`,"Drop casts to one side, shaped by the offsets. Box surrounds the box evenly — the glow look, with blur and spread to tune its reach.")}

        ${this._row("Shadow color",this._colorPicker(`${e}-shcol`,t.shadow_color,a=>i({shadow_color:a})),"Colour of the shadow. Leave blank for a translucent black.")}

        ${(t.shadow_mode??v("box_shadow_mode")??"drop")!=="box"?r`
          ${this._numRow("Shadow offset X (px)",{value:t.shadow_x,onChange:a=>i({shadow_x:a}),placeholder:"0",hint:"Horizontal distance of the shadow. Negative moves it left."})}

          ${this._numRow("Shadow offset Y (px)",{value:t.shadow_y,onChange:a=>i({shadow_y:a}),placeholder:"2",hint:"Vertical distance of the shadow. Negative moves it up."})}
        `:_}

        ${this._numRow("Shadow blur (px)",{value:t.shadow_blur,onChange:a=>i({shadow_blur:a}),min:0,placeholder:"8",hint:"How soft the shadow edge is. 0 is a hard edge."})}

        ${this._numRow("Shadow spread (px)",{value:t.shadow_spread,onChange:a=>i({shadow_spread:a}),placeholder:"0",hint:"Grows the shadow in every direction. Negative shrinks it."})}
      `:_}

      ${s?this._cssRow(t.extra_css,a=>i({extra_css:a})):_}

      ${this._numRow("Blur (px)",{value:t.blur,onChange:a=>i({blur:a}),min:0,placeholder:"0",hint:"Blurs what is behind the box — the background image, or the dashboard behind a popover. The box's own contents stay sharp."})}
    `}_textRows(e,t,i,s=!0,o=!0,a=!0){return r`
      ${o?this._numRow("Font size (px)",{value:t.font_size,onChange:n=>i({font_size:n}),min:6,placeholder:"inherit",hint:"Unset keeps the size inherited from the style above this one."}):_}

      ${a?this._row("Color",this._colorPicker(`${e}-col`,t.color,n=>i({color:n})),"Unset follows the default text colour in Settings ▸ Global Defaults ▸ Mosaic Card Defaults."):_}

      ${this._row("Font weight",r`<select class="ec-select"
          .value=${t.font_weight!=null?String(t.font_weight):""}
          @change=${n=>{const l=n.target.value;i({font_weight:l===""?void 0:Number(l)})}}
        >
          <option value="" .selected=${t.font_weight==null}>(inherit)</option>
          <option value="400" .selected=${t.font_weight===400}>400 — Normal</option>
          <option value="600" .selected=${t.font_weight===600}>600 — Semi-bold</option>
          <option value="700" .selected=${t.font_weight===700}>700 — Bold</option>
        </select>`)}

      ${this._row("Font family",r`<input class="ec-input" type="text" .value=${t.font_family??""}
          placeholder="inherit"
          @change=${n=>{const l=n.target.value;i({font_family:l===""?void 0:l})}}
        />`,"A CSS font stack, e.g. Roboto, sans-serif. Unset follows Settings ▸ Global Defaults ▸ Layout & Fonts.")}

      ${this._numRow("Letter spacing (px)",{value:t.letter_spacing,onChange:n=>i({letter_spacing:n}),placeholder:"0",hint:"Extra space between characters; negative values tighten."})}

      ${s?this._cssRow(t.extra_css,n=>i({extra_css:n})):_}
    `}_cssRow(e,t,i="Additional CSS",s=Ns){return this._row(i,r`<textarea
      class="ec-input ec-css-input${this._isValidCss(e??"")?"":" ec-css-invalid"}"
      rows="2" spellcheck="false"
      placeholder="e.g. outline: 1px dashed red; --my-var: 4px;"
      .value=${e??""}
      @input=${o=>{const a=o.target;a.classList.toggle("ec-css-invalid",!this._isValidCss(a.value))}}
      @change=${o=>{const a=o.target.value.trim();t(a||void 0)}}
    ></textarea>`,s)}_isValidCss(e){const t=(e??"").trim();if(!t)return!0;if(/[{}]/.test(t))return!1;for(const i of t.split(";")){const s=i.trim();if(!s)continue;const o=s.indexOf(":");if(o<=0)return!1;const a=s.slice(0,o).trim();if(!s.slice(o+1).trim()||!/^(--[a-zA-Z0-9-]+|-?[a-zA-Z][a-zA-Z0-9-]*)$/.test(a))return!1}return!0}_renderAlignBar(){const e=Array.from(this._selCards).some(t=>this._config?.cards[t]?.group)||Array.from(this._selEmbCards).some(t=>this._embCards()[t]?.group);return r`
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
            ${this._numInput({value:this._groupColGap,onChange:t=>this._groupColGap=t,min:0,placeholder:"e.g. 12"})}
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each row by this many px"
            @click=${()=>{this._groupColGap!=null&&this._applyGroupGap("x",this._groupColGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupColGap=void 0}}>Clear</button>

          <label class="ec-quick-field">
            <span>Row gap (px)</span>
            ${this._numInput({value:this._groupRowGap,onChange:t=>this._groupRowGap=t,min:0,placeholder:"e.g. 12"})}
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each column by this many px"
            @click=${()=>{this._groupRowGap!=null&&this._applyGroupGap("y",this._groupRowGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupRowGap=void 0}}>Clear</button>
        </div>
        <p class="ec-hint">Column gap re-spaces cards whose rows overlap vertically (left-to-right neighbors); Row gap re-spaces cards whose columns overlap horizontally (top-to-bottom neighbors). Cards don't need to be pixel-perfectly aligned first.</p>
      `:_}
    `}_quickNum(e,t,i,s){return r`<label class="ec-quick-field">
      <span>${e}</span>
      ${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
        min=${s?.min??""} max=${s?.max??""}
        placeholder=${s?.placeholder??""}
        .value=${t!=null?String(t):""}
        @change=${o=>i(o.target.value)}
      />`)}
    </label>`}_renderCardQuickPanel(e){const t=this._config?.cards[e];if(!t)return _;const i=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${i?this._quickNum("Span",t.grid_span??1,s=>{const o=Math.max(1,Math.min(i.cols,Number(s)||1)),a=Math.max(8,o*i.cellW-i.padding);this._updateCard(e,{grid_span:o,width:a})},{min:1,max:i.cols}):_}
        ${this._quickNum("Width",t.width,s=>this._updateCard(e,{width:s===""?void 0:Number(s)}),{placeholder:"auto"})}
        ${this._quickNum("Field gap",t.field_gap,s=>this._updateCard(e,{field_gap:s===""?void 0:Number(s)}),{placeholder:"default"})}
        ${this._quickNum("Col gap",t.column_gap,s=>this._updateCard(e,{column_gap:s===""?void 0:Number(s)}),{placeholder:"default"})}
      </div>
    `}_renderEmbQuickPanel(e){const t=this._embCards()[e];if(!t)return _;const i=this._gridGeom();return r`
      <div class="ec-quick-panel">
        ${i?this._quickNum("Span",t.grid_span??1,s=>{const o=Math.max(1,Math.min(i.cols,Number(s)||1)),a=Math.max(8,o*i.cellW-i.padding);this._updateEmbCard(e,{grid_span:o,width:a})},{min:1,max:i.cols}):_}
        ${this._quickNum("Width",t.width,s=>this._updateEmbCard(e,{width:Number(s)}))}
        ${this._quickNum("Height",t.height,s=>this._updateEmbCard(e,{height:s===""?void 0:Number(s)}),{placeholder:"auto"})}
      </div>
    `}render(){if(!this._config)return _;if(this._wizStep>=0)return this._renderWizard();const{totalW:e,totalH:t}=Q(this._config),i=this._config.cards??[];return r`
      ${this._renderTutorial()}

      <!-- ── Live preview ── -->
      <dialog class="ec-preview${this._previewExpanded?" ec-preview--expanded":""}${this._previewExpanded&&this._barAtTop?" ec-bar-top":""}"
        @pointermove=${s=>{this._onCardMove(s),this._onPointMove(s),this._onZoneMove(s),this._onZoneResizeMove(s),this._onEmbCardMove(s),this._onBgMove(s)}}
        @pointerup=${s=>{this._onCardUp(s),this._onPointUp(s),this._onZoneUp(s),this._onZoneResizeUp(s),this._onEmbCardUp(s),this._onBgUp(s),this._endUndoGesture()}}
        @cancel=${s=>{s.preventDefault(),this._collapseExpanded()}}
        tabindex="-1"
      >
        ${this._previewExpanded?r`
        <div class="ec-canvas-area"
          @click=${s=>this._onCanvasAreaClick(s)}
        >
          ${Qt`<${Lt}
            class="ec-preview-card"
            .hass=${this.hass}
            ?editor=${!0}
            @ec-boxes-changed=${s=>{this._previewBoxes=s.detail.boxes}}
          ></${Lt}>`}
          ${this._renderGridOverlay()}
          <div class="ec-handles">
            ${this._renderBgOverlay()}
            ${i.map((s,o)=>{const a=`${o===this._selCard?" selected":""}${this._selCards.has(o)&&o!==this._selCard?" multi":""}${s.group?" grouped":""}`,n=this._previewBoxes[s.id];return n?r`
              <div
                class="ec-card-ov${a}"
                style="left:${n.x*100}%;top:${n.y*100}%;width:${n.w*100}%;height:${n.h*100}%;"
                @pointerdown=${l=>this._onCardDown(l,o)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${s.name??`Card ${o+1}`}
              ></div>`:r`
              <div
                class="ec-handle${a}"
                style="left:${s.position.x*100}%;top:${s.position.y*100}%;"
                @pointerdown=${l=>this._onCardDown(l,o)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${s.name??`Card ${o+1}`}
              ></div>`})}
            ${this._zones().map((s,o)=>{const a=this._zoneBox(s);return r`
              <div
                class="ec-zone-handle${o===this._selZone?" selected":""}"
                style="left:${a.x/e*100}%;top:${a.y/t*100}%;width:${a.w/e*100}%;height:${a.h/t*100}%;"
                @pointerdown=${n=>this._onZoneDown(n,o)}
                @dblclick=${()=>this._collapseExpanded()}
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
                @dblclick=${()=>this._collapseExpanded()}
                title=${s.name??`Embedded ${o+1}`}
              ></div>`:r`
              <div
                class="ec-emb-handle${a}"
                style="left:${s.position.x*100}%;top:${s.position.y*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,o)}
                @dblclick=${()=>this._collapseExpanded()}
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
              ${this._flows().map((s,o)=>{const a=s.points.map(l=>$e(l,i,this._previewBoxes)).map(l=>`${l.x},${l.y}`).join(" "),n=o===this._selFlow;return Ni`
                  <polyline
                    class="ec-flow-hit"
                    points="${a}"
                    fill="none"
                    stroke="transparent"
                    stroke-width="16"
                    pointer-events="stroke"
                    vector-effect="non-scaling-stroke"
                    @dblclick=${()=>{this._selFlow=o,this._syncNavTo("elements","flows",[{key:`flow:${s.id}`,label:s.name??s.id}]),this._collapseExpanded()}}
                  ></polyline>
                  <polyline
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
                ${this._selPoint>=0?i.map(a=>o.map(n=>{const l=this._previewBoxes[a.id];if(!l)return _;let c,d;switch(n){case"top":c=l.x+l.w/2,d=l.y;break;case"right":c=l.x+l.w,d=l.y+l.h/2;break;case"bottom":c=l.x+l.w/2,d=l.y+l.h;break;case"left":c=l.x,d=l.y+l.h/2;break;default:c=l.x+l.w/2,d=l.y+l.h/2;break}return r`<div
                    class="ec-snap"
                    style="left:${c*100}%;top:${d*100}%;"
                    @click=${h=>{h.stopPropagation(),this._updateFlowPoint(this._selFlow,this._selPoint,{card:a.id,side:n,x:void 0,y:void 0})}}
                  ></div>`})):_}
                ${s.points.map((a,n)=>{const l=$e(a,i,this._previewBoxes);return r`<div
                    class="ec-flow-node${n===this._selPoint?" selected":""}${a.card!=null?" anchored":" free"}"
                    style="left:${l.x*100}%;top:${l.y*100}%;"
                    @pointerdown=${c=>this._onPointDown(c,n)}
                    @dblclick=${()=>{this._syncNavTo("elements","flows",[{key:`flow:${s.id}`,label:s.name??s.id}]),this._collapseExpanded()}}
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
                        <span class="ec-hint-text">Click-drag a card to move it · Shift-click to multi-select · Double click to jump to configuration · Alt-click to cycle stacked cards</span>
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
              <button class="ec-undo-btn" title="Undo (Ctrl+Z)" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>
                <ha-icon icon="mdi:undo"></ha-icon>
              </button>
              <button class="ec-undo-btn" title="Redo (Ctrl+Y)" ?disabled=${!this._redoStack.length} @click=${()=>this._redo()}>
                <ha-icon icon="mdi:redo"></ha-icon>
              </button>
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
      ${this._renderImagePickerModal()}
        ${this._renderEmbEditorModal()}
        ${this._renderFlowCompleteModal()}
        ${this._previewExpanded?this._renderUndoToast():_}
      </dialog>

      ${this._previewExpanded?_:this._renderControls()}
      ${this._previewExpanded?_:this._renderUndoToast()}
    `}_navOpenPanel(e){this._navPanel=e,this._navPath=[]}_navBack(){this._navPath.length?this._navPath=this._navPath.slice(0,-1):this._navPanel=""}_navRow(e,t,i,s,o=0){return r`
      <button class="ec-nav-item" @click=${s}>
        <ha-icon class="ec-nav-item-icon" icon=${e}></ha-icon>
        <span class="ec-nav-item-text">
          <span class="ec-nav-item-label">${t}</span>
          ${i?r`<span class="ec-nav-item-hint">${i}</span>`:_}
        </span>
        ${o>0?r`<span class="ec-nav-card-badge"
          title="${o} item${o===1?"":"s"} to review">${o}</span>`:_}
        <ha-icon class="ec-nav-item-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_navBtn(e,t,i,s,o=0){return r`
      <button class="ec-nav-card" @click=${()=>this._navPush(e,t,i)}>
        <ha-icon class="ec-nav-card-icon" icon=${s}></ha-icon>
        <span class="ec-nav-card-text">
          <span class="ec-nav-card-label">${t}</span>
          ${i?r`<span class="ec-nav-card-hint">${i}</span>`:_}
        </span>
        ${_}
        <ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_navMenu(e,t){return r`${e.map(i=>this._navBtn(i.key,i.label,i.hint,i.icon,et(t?.root,i.paths)))}`}_clearOverridesBtn(e,t){return _}static _findDef(e,t){return e.find(i=>i.key===t)}_assertOneOwnerInvariant(){if(this._oneOwnerChecked)return;this._oneOwnerChecked=!0;const e=p,t=[],i=(a,n)=>{const l=new Map;for(const c of n)for(const d of c)for(const h of d.paths??[]){const u=l.get(h);u&&u!==d.key?t.push(`${a}: "${h}" claimed by both "${u}" and "${d.key}"`):l.set(h,d.key)}};i("Mosaic Card",[e._CARD_SECTIONS]),i("Zone",[e._ZONE_SECTIONS]),i("Flow",[e._FLOW_SECTIONS]),i("Embedded Card",[e._EMB_SECTIONS]),i("Popover Card",[e._POPOVER_CARD_SECTIONS]),i("Global Defaults",[e._DEFAULTS_SECTIONS,e._CONTROL_DEFAULTS_SECTIONS,e._ELEM_LIB_SECTIONS,e._selectorDefaultsDefs(!1),e._selectorDefaultsDefs(!0)]);const s=[{id:"x",type:"value"},{id:"x",type:"icon"},{id:"x",type:"label"},{id:"x",type:"svg"},{id:"x",type:"svg",svg:"thermometer-vertical.svg"},{id:"x",type:"svg",svg:"battery-horizontal.svg"},{id:"x",type:"svg",svg:"inverter.svg"},{id:"x",type:"svg",svg:"gauge-arc.svg"},{id:"x",type:"graph"},{id:"x",type:"embedded_card"},{id:"x",type:"toggle"},{id:"x",type:"slider"},{id:"x",type:"dropdown"},{id:"x",type:"button_group"},{id:"x",type:"button_group",options_source:"manual"},{id:"x",type:"input"},{id:"x",type:"spinbox"},{id:"x",type:"button"}];for(const a of s){const n=a.type==="button_group"||a.type==="button",l=[];a.type==="button_group"&&(a.options_source??"entity")!=="manual"&&l.push(e._OPTION_LAYOUT_DEF,...e._fscsDefs(!1)),a.type==="button"&&l.push(...e._fscsDefs(!0));const c=n?this._fieldSectionDefs(a).filter(d=>d.key!=="fsec:controlstyle"):this._fieldSectionDefs(a);i(`Field (${a.type}${a.svg?`:${a.svg}`:""}${a.options_source?`:${a.options_source}`:""})`,[c,l])}const o=[{id:"x",name:"x",op:"add",inputs:[]},{id:"x",name:"x",op:"time_until",inputs:[]},{id:"x",name:"x",op:"statistic",inputs:[]}];for(const a of o)i(`Virtual (${a.op})`,[this._virtualSectionDefs(a)]);t.length&&console.error(`[mosaic-canvas-card] #75 one-owner check failed:
${t.join(`
`)}`)}_itemCard(e){const{dragKey:t,icon:i,label:s,sub:o,selected:a,multi:n,onClick:l,actions:c}=e,d=t!=null&&this._dropKey===t;return r`
      <div
        class="ec-item-card${a?" selected":""}${n?" multi":""}${t!=null&&this._dragSrc===t?" ec-dragging":""}${d?this._dropBefore?" ec-drop-before":" ec-drop-after":""}"
        role="button"
        tabindex="0"
        data-drag-key=${t??_}
        @pointerdown=${t!=null?h=>this._onItemPointerDown(h,t):_}
        @pointermove=${t!=null?h=>this._onItemPointerMove(h):_}
        @pointerup=${t!=null?h=>this._onItemPointerUp(h):_}
        @pointercancel=${t!=null?h=>this._onItemPointerCancel(h):_}
        @click=${h=>{if(this._suppressClick){this._suppressClick=!1;return}l(h)}}
        @keydown=${h=>this._onItemCardKeydown(h,t,l)}
      >
        ${t!=null?r`<span class="ec-drag-handle" title="Drag to reorder"></span>`:_}
        <ha-icon class="ec-item-card-icon" icon=${i}></ha-icon>
        <span class="ec-item-card-text">
          <span class="ec-item-card-label">${s}</span>
          ${o?r`<span class="ec-item-card-sub">${o}</span>`:_}
        </span>
        <span class="ec-item-card-actions">${c??_}</span>
        <ha-icon class="ec-item-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </div>
    `}_liveCrumbLabel(e,t){const i=this._config;if(!i)return t;const s=this._navPath[e]?.key??"";if(e===0)switch(this._navPanel){case"mosaic":return s.startsWith("card:")?i.cards[this._selCard]?.name??t:t;case"popover":return s.startsWith("card:")?this._extCards()[this._selExtCard]?.name??t:t;case"flows":return s.startsWith("flow:")?i.flows?.[this._selFlow]?.name??i.flows?.[this._selFlow]?.id??t:t;case"zones":return s.startsWith("zone:")?i.zones?.[this._selZone]?.name??i.zones?.[this._selZone]?.id??t:t;case"virtuals":return s.startsWith("virt:")&&(i.virtuals?.[this._selVirtual]?.name||i.virtuals?.[this._selVirtual]?.id)||t;case"embedded":return s.startsWith("emb:")?i.embedded_cards?.[this._selEmbCard]?.name??i.embedded_cards?.[this._selEmbCard]?.id??t:t;default:return t}const o=a=>this._navPanel==="mosaic"?i.cards[this._selCard]?.fields[a]:this._navPanel==="popover"?this._extCards()[this._selExtCard]?.fields[a]:void 0;if(s.startsWith("field:")){const a=this._navPanel==="mosaic"?i.cards[this._selCard]?.fields:this._navPanel==="popover"?this._extCards()[this._selExtCard]?.fields:void 0,n=o(this._crumbIndex(s,a));return n?this._fieldName(n):t}if(s.startsWith("gs:")||s.startsWith("egs:")){const a=Number(s.slice(s.indexOf(":")+1)),n=this._navPanel==="mosaic"?this._selField:this._selExtField,l=o(n)?.graph_series?.[a];return l&&(l.label||l.entity)||t}if(s.startsWith("opt:")||s.startsWith("eopt:")){const a=Number(s.slice(s.indexOf(":")+1)),n=this._navPanel==="mosaic"?this._selField:this._selExtField,l=o(n)?.options?.[a];return l?p._optionName(l,a):t}return t}_renderBreadcrumb(){const e=[{label:p._TAB_LABEL[this._navTab],onClick:()=>{this._navPanel="",this._navPath=[]}}];return this._navPanel&&(e.push({label:p._PANEL_META[this._navPanel]?.title??this._navPanel,onClick:()=>{this._navPath=[]}}),this._navPath.forEach((t,i)=>e.push({label:this._liveCrumbLabel(i,t.label),onClick:()=>{this._navPath=this._navPath.slice(0,i+1)}}))),r`
      <div class="ec-nav-toolbar">
        <button class="ec-undo-btn" title="Undo (Ctrl+Z)" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>
          <ha-icon icon="mdi:undo"></ha-icon>
        </button>
        <button class="ec-undo-btn" title="Redo (Ctrl+Y)" ?disabled=${!this._redoStack.length} @click=${()=>this._redo()}>
          <ha-icon icon="mdi:redo"></ha-icon>
        </button>
        <!-- #93: the one place the tooltip convention is announced. Without it
             a title= that only appears on hover is a feature nobody finds. Not
             a button — there is nothing to click, and a disabled-looking
             control beside Undo/Redo would read as broken. -->
        <span class="ec-help-hint" role="note"
          title="Hover over any option's name to see what it does.">?</span>
      </div>
      <div class="ec-breadcrumb">
        ${e.map((t,i)=>r`
          <button class="ec-crumb${i===e.length-1?" ec-crumb--active":""}" @click=${t.onClick} title=${t.label}>${t.label}</button>
          ${i<e.length-1?r`<ha-icon class="ec-crumb-sep" icon="mdi:chevron-right"></ha-icon>`:_}
        `)}
      </div>
    `}_renderRibbonItems(){return r`${p._RIBBON_ITEMS.filter(e=>e.tab===this._navTab).map(e=>this._navRow(e.icon,e.label,e.hint,()=>this._navOpenPanel(e.panel),e.panel==="health"?this._health().issues.filter(t=>!t.ignored).length:0))}`}_searchIndex(){const e=this._config;if(!e)return[];if(this._searchIndexCache?.cfg===e)return this._searchIndexCache.index;const t=this._buildSearchIndex();return this._searchIndexCache={cfg:e,index:t},t}_buildSearchIndex(){const e=this._config;if(!e)return[];const t=p,i=[],s=d=>({key:d.key,label:d.label,hint:d.hint}),o=(d,h,u,g,b,m,z,P)=>{i.push({tab:d,panel:h,icon:u,label:g,hint:b,context:m,path:z,...P?{terms:P}:{}})},a=(d,h,u,g,b=[])=>{for(const m of g)o(d,h,m.icon,m.label,m.hint,u,[...b,s(m)],m.terms)};for(const d of t._RIBBON_ITEMS)o(d.tab,d.panel,d.icon,t._PANEL_META[d.panel]?.title??d.label,d.hint,t._TAB_LABEL[d.tab],[]);a("settings","canvas","Settings › Canvas",t._CANVAS_SECTIONS),a("settings","defaults","Settings › Global Defaults",t._DEFAULTS_SECTIONS);const n=t._DEFAULTS_SECTIONS.find(d=>d.key==="sec:control");if(n){a("settings","defaults","Global Defaults › Control Default",t._CONTROL_DEFAULTS_SECTIONS,[s(n)]);for(const d of t._CONTROL_DEFAULTS_SECTIONS)d.key!=="cd:selector"&&d.key!=="cd:button"||a("settings","defaults",`Control Default › ${d.label}`,t._selectorDefaultsDefs(d.key==="cd:button"),[s(n),s(d)])}const l=t._DEFAULTS_SECTIONS.find(d=>d.key==="sec:elements");l&&a("settings","defaults","Global Defaults › Element Library",t._ELEM_LIB_SECTIONS,[s(l)]),a("settings","templates","Settings › Templates",t._TEMPLATE_SECTIONS);const c=(d,h,u,g,b,m,z)=>{b.forEach((P,k)=>{const x=this._fieldName(P),C={key:`field:${P.id}`,label:x},S=!z&&this._cardLayoutMode(this._config?.cards[m])==="grid";o("cards",d,Ee[P.type],x,this._fieldSub(P,S),`${h} › ${g}`,[u,C]);for(const $ of this._fieldSectionDefs(P))if(o("cards",d,$.icon,$.label,$.hint,`${g} › ${x}`,[u,C,s($)],$.terms),$.key==="fsec:controlstyle"&&(P.type==="button_group"||P.type==="button")&&!this._controlStyleUsesGlobal(P,this._idFor(m,k,z)))for(const D of t._fscsDefs(P.type==="button"))o("cards",d,D.icon,D.label,D.hint,`${x} › ${$.label}`,[u,C,s($),s(D)],D.terms)})};return(e.cards??[]).forEach((d,h)=>{const u=d.name??`Card ${h+1}`,g={key:`card:${d.id}`,label:u};o("cards","mosaic","mdi:view-dashboard",u,`${d.fields.length} field${d.fields.length===1?"":"s"}`,"Cards › Mosaic Cards",[g]);for(const b of t._CARD_SECTIONS)o("cards","mosaic",b.icon,b.label,b.hint,`Mosaic Cards › ${u}`,[g,s(b)],b.terms);c("mosaic","Mosaic Cards",g,u,d.fields,h,!1)}),this._extCards().forEach((d,h)=>{const u=d.name??`Popover Card ${h+1}`,g={key:`card:${d.id}`,label:u};o("cards","popover","mdi:picture-in-picture-bottom-right",u,`${d.fields.length} field${d.fields.length===1?"":"s"}`,"Cards › Popover Cards",[g]);for(const b of t._POPOVER_CARD_SECTIONS)o("cards","popover",b.icon,b.label,b.hint,`Popover Cards › ${u}`,[g,s(b)],b.terms);c("popover","Popover Cards",g,u,d.fields,h,!0)}),this._embCards().forEach(d=>{const h=d.name??d.id,u={key:`emb:${d.id}`,label:h};o("cards","embedded","mdi:widgets",h,d.card_config?.type??"No card type set","Cards › Embedded External Cards",[u]);for(const g of t._EMB_SECTIONS)o("cards","embedded",g.icon,g.label,g.hint,`Embedded External Cards › ${h}`,[u,s(g)],g.terms)}),this._flows().forEach(d=>{const h=d.name??d.id,u={key:`flow:${d.id}`,label:h};o("elements","flows","mdi:chart-timeline-variant",h,d.style??"dashes","Elements › Animated Flow Lines",[u]);for(const g of t._FLOW_SECTIONS)o("elements","flows",g.icon,g.label,g.hint,`Animated Flow Lines › ${h}`,[u,s(g)],g.terms)}),this._zones().forEach(d=>{const h=d.name??d.id,u={key:`zone:${d.id}`,label:h};o("elements","zones","mdi:gesture-tap-box",h,`${d.width}×${d.height}px`,"Elements › Clickable Zones",[u]);for(const g of t._ZONE_SECTIONS)o("elements","zones",g.icon,g.label,g.hint,`Clickable Zones › ${h}`,[u,s(g)],g.terms)}),this._virtuals().forEach(d=>{const h=d.name||d.id,u={key:`virt:${d.id}`,label:h};o("elements","virtuals",d.op==="time_until"?"mdi:progress-clock":"mdi:memory",h,t._VIRTUAL_OPS.find(g=>g.value===d.op)?.label??d.op,"Elements › Virtual Entities",[u]);for(const g of this._virtualSectionDefs(d))o("elements","virtuals",g.icon,g.label,g.hint,`Virtual Entities › ${h}`,[u,s(g)],g.terms)}),i}_searchResults(e){const t=e.toLowerCase(),i=t.split(/\s+/).filter(Boolean);if(!i.length)return[];const s=[];for(const o of this._searchIndex()){const a=o.label.toLowerCase(),n=o.hint.toLowerCase(),l=o.terms?.toLowerCase()??"",c=o.context.toLowerCase();let d=0,h=0;for(const u of i)a.includes(u)?(d+=3,h++):n.includes(u)||l.includes(u)?(d+=2,h++):c.includes(u)&&(d+=1);h&&(a===t?d+=4:i.some(u=>a.startsWith(u))&&(d+=2),s.push({r:o,score:d}))}return s.sort((o,a)=>a.score-o.score),s.map(o=>o.r)}_searchNavigate(e){this._searchQuery="",this._searchActive=0,this._navigateTo(e.tab,e.panel,e.path)}_onSearchKeydown(e,t){const i=Math.min(t.length,p._SEARCH_LIMIT)-1,s=Math.max(0,Math.min(this._searchActive,i));if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(e.preventDefault(),i<0)return;this._searchActive=e.key==="ArrowDown"?Math.min(s+1,i):Math.max(s-1,0),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".ec-search-result.active")?.scrollIntoView({block:"nearest"})})}else if(e.key==="Enter"){const o=t[s];o&&(e.preventDefault(),this._searchNavigate(o))}else e.key==="Escape"&&this._searchQuery&&(e.preventDefault(),e.stopPropagation(),this._searchQuery="",this._searchActive=0)}_renderSearchResults(e){if(!e.length)return r`<p id="ec-search-results" class="ec-empty ec-search-results">No screens match — try a section name or a setting, e.g. "ticks" or "card style".</p>`;const t=e.slice(0,p._SEARCH_LIMIT),i=Math.min(this._searchActive,t.length-1);return r`
      <div id="ec-search-results" class="ec-search-results" role="listbox" aria-label="Search results">
        ${t.map((s,o)=>r`
          <button id=${`ec-search-opt-${o}`} class="ec-nav-card ec-search-result${o===i?" active":""}"
            role="option" aria-selected=${o===i}
            @click=${()=>this._searchNavigate(s)}
            @mousemove=${()=>{this._searchActive!==o&&(this._searchActive=o)}}
          >
            <ha-icon class="ec-nav-card-icon" icon=${s.icon}></ha-icon>
            <span class="ec-nav-card-text">
              <span class="ec-nav-card-label">${s.label}</span>
              ${s.hint?r`<span class="ec-nav-card-hint">${s.hint}</span>`:_}
              <span class="ec-search-result-ctx">${s.context}</span>
            </span>
            <ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>
          </button>
        `)}
        ${e.length>t.length?r`<p class="ec-search-more">${e.length-t.length} more — keep typing to narrow</p>`:_}
      </div>
    `}_renderRibbon(){const e=[{key:"cards",icon:"mdi:view-grid",label:"Cards"},{key:"elements",icon:"mdi:shape",label:"Elements"},{key:"settings",icon:"mdi:cog",label:"Settings"}],t=this._searchQuery.trim(),i=t?this._searchResults(t):[],s=i.length?Math.min(this._searchActive,Math.min(i.length,p._SEARCH_LIMIT)-1):-1,o=Rs(this._health());return r`
      <input class="ec-input ec-nav-search" type="search"
        placeholder="Search all editor screens…"
        aria-label="Search all editor screens"
        role="combobox"
        aria-expanded=${i.length>0?"true":"false"}
        aria-controls="ec-search-results"
        aria-activedescendant=${s>=0?`ec-search-opt-${s}`:_}
        .value=${this._searchQuery}
        @input=${a=>{this._searchQuery=a.target.value,this._searchActive=0}}
        @keydown=${a=>this._onSearchKeydown(a,i)}
      />
      ${t?this._renderSearchResults(i):r`
      <div class="ec-nav-shell">
        <div class="ec-nav-rail">
          ${e.map(a=>r`
            <button class="ec-nav-tab${this._navTab===a.key?" active":""}"
              @click=${()=>{this._navTab=a.key,this._navPanel="",this._navPath=[]}}
            >
              <ha-icon icon=${a.icon}></ha-icon>
              <span>${a.label}</span>
              ${a.key==="settings"&&o>0?r`<span class="ec-nav-tab-badge"
                title="${o} configuration problem${o===1?"":"s"} — see Config Health">${o}</span>`:_}
            </button>
          `)}
        </div>
        <div class="ec-nav-list">${this._renderRibbonItems()}</div>
      </div>`}
    `}_renderPanelHost(){const e=p._PANEL_META[this._navPanel],t=this._navPath.length?this._navPath[this._navPath.length-1].label:e?.title??"";return r`
      <div class="ec-panel-header">
        <button class="ec-panel-back" @click=${()=>this._navBack()}>
          <ha-icon icon="mdi:arrow-left"></ha-icon> ${this._navPath.length?"Back":"Ribbon"}
        </button>
        <ha-icon class="ec-panel-header-icon" icon=${e?.icon??"mdi:tune"}></ha-icon>
        <span class="ec-panel-header-title" tabindex="-1">${t}</span>
        <div class="ec-panel-header-spacer"></div>
      </div>
      <div class="ec-panel-body"
        @scroll=${i=>this._panelScroll.set(this._navScrollKey(),i.target.scrollTop)}
      >
        ${(()=>{const i=this._navPath.length?this._navPath[this._navPath.length-1]?.hint:e?.desc;return i?r`<p class="ec-panel-desc">${i}</p>`:_})()}
        ${this._renderPanelBody()}
      </div>
    `}_renderPanelBody(){switch(this._navPanel){case"mosaic":return this._renderMosaicPanel();case"popover":return this._renderPopoverPanel();case"embedded":return this._renderEmbeddedPanel();case"flows":return this._renderFlowsRibbonPanel();case"zones":return this._renderZonesRibbonPanel();case"virtuals":return this._renderVirtualsRibbonPanel();case"canvas":return this._renderCanvasRibbonPanel();case"defaults":return this._renderDefaultsRibbonPanel();case"templates":return this._renderTemplatesRibbonPanel();case"health":return this._renderHealthPanel();case"about":return this._renderAboutPanel();default:return r``}}_renderAboutPanel(){return r`
      <div class="ec-section ec-about">
        <div class="ec-about-version">Mosaic Canvas Card v${Ye} · build ${qt}</div>
        <a class="ec-about-link" href="https://github.com/ratava/mosaic-canvas-card" target="_blank" rel="noopener">
          <ha-icon icon="mdi:github"></ha-icon> Project repository
        </a>
        <a class="ec-about-link" href="https://ratava.github.io/mosaic-canvas-card/" target="_blank" rel="noopener">
          <ha-icon icon="mdi:book-open-variant"></ha-icon> Documentation
        </a>
        <a class="ec-about-link" href="https://ko-fi.com/brentwesley" target="_blank" rel="noopener">
          <ha-icon icon="mdi:coffee"></ha-icon> Support the project on Ko-fi
        </a>
        <a class="ec-about-kofi" href="https://ko-fi.com/brentwesley" target="_blank" rel="noopener">
          <img
            src="https://storage.ko-fi.com/cdn/useruploads/X8X31ME944/qrcode.png?v=22615b40-eb49-421a-8f13-03b424b5ba97?v=2"
            alt="Support Brent Wesley"
            title="Support Brent Wesley"
            width="60"
            height="60"
          />
        </a>
      </div>
    `}static _slotMap(e){const t=new Map;for(const i of e)for(const s of i.paths??[]){const o=s.split(".")[0];t.has(o)||t.set(o,i.key)}return t}static _labelMap(e){return new Map(e.map(t=>[t.key,t.label]))}_fieldSlotDefs(e){const t=p,i=[...this._fieldSectionDefs(e)];return e.type==="button_group"&&i.push(t._OPTION_LAYOUT_DEF),(e.type==="button_group"||e.type==="button")&&i.push(...t._fscsDefs(e.type==="button")),(e.type==="blank"||e.type==="rule")&&i.push(t._BLANK_RULE_DEF),i}static _healthOffered(){const e=Be,t=Ce;return{field:{type:[...hi,"graph"],graph_type:ot.map(i=>i.value),align:t,stat_characteristic:tt.map(i=>i.value)},card:{anchor:e,align:t},extCard:{align:t},zone:{anchor:e},emb:{anchor:e},flow:{style:p._FLOW_STYLES},virtual:{op:p._VIRTUAL_OPS.map(i=>i.value)}}}_healthDefs(e,t){const i=p;switch(e){case"card":return i._CARD_SECTIONS;case"extCard":return i._POPOVER_CARD_SECTIONS;case"zone":return i._ZONE_SECTIONS;case"flow":return i._FLOW_SECTIONS;case"emb":return i._EMB_SECTIONS;case"canvas":return i._CANVAS_SECTIONS;case"field":return this._fieldSlotDefs(t);case"virtual":return this._virtualSectionDefs(t);default:return[]}}_healthContext(){const e=p;return{screens:(t,i)=>{const s=this._healthDefs(t,i);return{slots:e._slotMap(s),labels:e._labelMap(s)}},offered:e._healthOffered(),fieldName:t=>this._fieldName(t)}}_entityExistKey(e){let t="";for(const i of this._referencedEntities())t+=e[i]?"1":"0";return t}_health(){const e=this._config,t=this.hass?.states,i=this._healthCache;if(i&&i.cfg===e&&i.states===t)return i.report;if(i&&i.cfg===e&&t&&i.existKey!==void 0&&i.existKey===this._entityExistKey(t))return i.states=t,i.report;const s=Ps(e,this.hass,this._healthContext());return this._healthCache={cfg:e,states:t,report:s,...t?{existKey:this._entityExistKey(t)}:{}},s}_healthRemovalScope(e){const t=this._config;if(!t)return;const i=(s,o)=>(s??[]).findIndex(a=>a.id===o);switch(e.kind){case"card":{const s=i(t.cards,e.itemId);return s<0?void 0:this._cardScope(s)}case"extCard":{const s=i(this._extCards(),e.itemId);return s<0?void 0:this._extCardScope(s)}case"field":{const s=e.extended?this._extCards():t.cards??[],o=i(s,e.cardId??"");if(o<0)return;const a=i(s[o]?.fields,e.itemId);return a<0?void 0:this._fieldScope(o,a,!!e.extended)}case"zone":{const s=i(this._zones(),e.itemId);return s<0?void 0:this._zoneScope(s)}case"flow":{const s=i(this._flows(),e.itemId);return s<0?void 0:this._flowScope(s)}case"emb":{const s=i(this._embCards(),e.itemId);return s<0?void 0:this._embScope(s)}case"virtual":{const s=i(this._virtuals(),e.itemId);return s<0?void 0:this._virtualScope(s)}default:return}}_healthRemove(e){const t=e.removal;if(!t)return;const i=this._healthRemovalScope(t);if(!i){this._showUndoToast("That item no longer exists — nothing removed");return}const s=i.root?.[t.key];window.confirm(`Remove “${t.key}” from the YAML?

${e.where}
Current value: ${JSON.stringify(s)??"unset"}

The key is deleted from the configuration and the slot falls back to whatever the defaults resolve. This editor has no screen for it, so putting it back means editing the YAML by hand.

Undo (Ctrl+Z) reverses this.`)&&(i.apply({[t.key]:void 0}),this._showUndoToast(`“${t.key}” removed`))}_healthIgnore(e,t){const i=this._config;if(!i)return;const s=i.health_ignore??[],o=t?s.includes(e)?s:[...s,e]:s.filter(a=>a!==e);this._emit(K(i,{health_ignore:o.length?o:void 0})),this._showUndoToast(t?"Row ignored":"Row restored")}_renderHealthPanel(){const e=this._health(),t=e.issues.filter(o=>!o.ignored),i=e.issues.filter(o=>o.ignored),s=ci.map(o=>({meta:o,rows:t.filter(a=>a.check===o.id)})).filter(o=>o.rows.length>0);return r`
      ${t.length===0?r`<ha-alert alert-type="success">${i.length?"No problems outside the ignored rows below.":"No problems found — every reference in this configuration resolves."}</ha-alert>`:_}
      ${s.map(o=>r`
        <div class="ec-section">
          <div class="ec-subsection-title ec-health-group-title">
            <ha-icon icon=${o.meta.icon}></ha-icon>
            <span>${o.meta.label}</span>
            <span class="ec-nav-card-badge">${o.rows.length}</span>
          </div>
          <p class="ec-hint">${o.meta.hint}</p>
          ${o.rows.map(a=>this._healthRow(a))}
        </div>
      `)}
      ${e.skipped.map(o=>r`<ha-alert alert-type="info">${o.reason}</ha-alert>`)}
      ${i.length?r`
        <div class="ec-section ec-health-ignored">
          <button class="ec-health-ignored-toggle"
            @click=${()=>{this._healthShowIgnored=!this._healthShowIgnored}}
          >
            <ha-icon icon=${this._healthShowIgnored?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            ${i.length} ignored — ${this._healthShowIgnored?"hide":"show"}
          </button>
          ${this._healthShowIgnored?i.map(o=>this._healthRow(o)):_}
        </div>
      `:_}
      ${e.coverage.map(o=>r`<p class="ec-hint ec-health-coverage">${o}</p>`)}
    `}_healthRow(e){const t=e.target;return r`
      <div class="ec-health-row ec-health-row--${e.severity}${e.ignored?" ec-health-row--ignored":""}">
        <button class="ec-health-row-body" ?disabled=${!t}
          title=${t?"Open the screen that owns this":"No screen holds this value"}
          @click=${()=>{t&&this._navigateTo(t.tab,t.panel,t.path)}}
        >
          <ha-icon class="ec-nav-card-icon"
            icon=${e.severity==="error"?"mdi:alert-circle-outline":"mdi:information-outline"}></ha-icon>
          <span class="ec-nav-card-text">
            <span class="ec-nav-card-label">${e.detail}</span>
            <span class="ec-health-row-where">${e.where}</span>
          </span>
          ${t?r`<ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>`:_}
        </button>
        <div class="ec-health-row-actions">
          ${e.removal&&!e.ignored?r`
            <button class="ec-health-btn ec-health-btn-remove"
              title="Delete this key from the YAML"
              @click=${()=>this._healthRemove(e)}
            >Remove</button>`:_}
          <button class="ec-health-btn ec-health-btn-ignore"
            title=${e.ignored?"Show this row again":"Hide this row from the Health screen"}
            @click=${()=>this._healthIgnore(e.id,!e.ignored)}
          >${e.ignored?"Un-ignore":"Ignore"}</button>
        </div>
      </div>
    `}_renderControls(){return r`
      <div class="ec-controls">
        ${this._renderBreadcrumb()}
        ${this._navPanel===""?this._renderRibbon():this._renderPanelHost()}
      </div>
    `}_renderMosaicPanel(){const e=this._config?.cards??[],t=this._navPath;if(t.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addCard}>+ Mosaic Card</button>
        </div>
        ${e.length===0?this._emptyAdd("No mosaic cards yet — add one",()=>this._addCard()):e.map((a,n)=>this._itemCard({dragKey:`card:${n}`,icon:"mdi:view-dashboard",label:a.name??`Card ${n+1}`,sub:`${a.fields.length} field${a.fields.length===1?"":"s"}`,selected:n===this._selCard,multi:this._selCards.has(n),onClick:l=>{if(l.ctrlKey||l.metaKey){const c=new Set(this._selCards);c.has(n)?c.delete(n):c.add(n),this._selCards=c,this._selCard=n}else this._selCard=n,this._selField=-1,this._selCards=new Set([n]),this._navPush(`card:${a.id}`,a.name??`Card ${n+1}`)},actions:r`
                  ${this._copySourceId===a.id?r`<span class="ec-copy-badge">Copied</span>`:r`<button
                        class="ec-btn-copy"
                        @click=${l=>{l.stopPropagation(),this._copyFields(n)}}
                        title="Copy fields from this card"
                      >⎘</button>`}
                  ${this._copiedFields&&this._copySourceId!==a.id?r`<button
                        class="ec-btn-paste"
                        @click=${l=>{l.stopPropagation(),this._pasteFields(n)}}
                        title="Paste fields onto this card (adds to its existing fields)"
                      >⎗</button>`:_}
                  <button
                    class="ec-btn-dup"
                    @click=${l=>{l.stopPropagation(),this._duplicateCard(n)}}
                    title="Duplicate card"
                  >⧉</button>
                  <button
                    class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeCard(n)}}
                    title="Remove card"
                  >✕</button>
                `}))}
      `;const i=this._crumbIndex(t[0].key,e);this._selCard=i;const s=e[i];if(!s)return this._navDeadEnd();if(t.length===1)return r`
        ${this._cardSectionMenu(i)}
        ${this._renderFieldList(i,s)}
      `;const o=t[1].key;if(o.startsWith("field:")){const a=this._crumbIndex(o,s.fields);this._selField=a;const n=s.fields[a];if(!n)return this._navDeadEnd();if(t.length===4&&t[2].key==="fsec:series"&&t[3].key.startsWith("gs:")){const l=this._crumbIndex(t[3].key,n.graph_series);return this._selSeries=l,this._fieldSecGraphSeriesItem(i,a,n,l)}if(t.length===4&&t[2].key==="fsec:options"){if(t[3].key.startsWith("opt:")){const l=this._crumbIndex(t[3].key,n.options);return this._selOption=l,this._fieldSecOptionItem(i,a,n,l)}if(t[3].key==="optlayout")return r`
            ${this._clearOverridesBtn(p._OPTION_LAYOUT_DEF,this._fieldScope(i,a,!1))}
            <div class="ec-section">${this._optionLayoutEditor(n,this._updFor(i,a,!1),this._idFor(i,a,!1))}</div>
          `}return t.length===4&&t[2].key==="fsec:controlstyle"&&t[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(i,a,n,t[3].key):t.length===3?this._fieldSection(i,a,n,t[2].key):this._renderFieldPanel(i,a,n)}if(o==="sec:bg"&&t.length===3&&t[2].key.startsWith("bgr:")){const a=this._crumbIndex(t[2].key,s.bg?.rules);return this._selBgRule=a,this._cardSecBgRule(i,s,a)}return this._cardSection(i,s,o)}_cardScope(e){return{root:this._config?.cards[e],apply:t=>this._updateCard(e,t)}}_cardSectionMenu(e){return this._navMenu(p._CARD_SECTIONS,this._cardScope(e))}_cardSection(e,t,i){const s=this._clearOverridesBtn(p._findDef(p._CARD_SECTIONS,i),this._cardScope(e));return r`${s}${(()=>{switch(i){case"sec:defaults":return this._cardSecDefaults(e,t);case"sec:style":return this._cardSecStyle(e,t);case"sec:text":return this._cardSecText(e,t);case"sec:visibility":return this._cardSecVisibility(e,t);case"sec:actions":return this._cardSecActions(e,t);case"sec:bg":return this._cardSecBg(e,t);default:return r``}})()}`}_cardSecDefaults(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${i=>this._updateCard(e,{name:i.target.value})}
          />`)}

        ${this._row("Canvas Anchor",r`<select class="ec-select"
            .value=${t.anchor??v("anchor")??"top-left"}
            @change=${i=>this._updateCard(e,{anchor:i.target.value})}
          >
            ${Be.map(i=>r`<option value=${i} .selected=${(t.anchor??v("anchor")??"top-left")===i}>${it[i]}</option>`)}
          </select>`,"Which point of the card sits at its X/Y position — drag the card and this is the corner that stays put.")}
        ${this._gridGeom()?r`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._row("Field Alignment",r`<select class="ec-select"
            .value=${t.align??v("align")??"left"}
            @change=${i=>this._updateCard(e,{align:i.target.value})}
          >
            ${Ce.map(i=>r`<option value=${i} .selected=${(t.align??v("align")??"left")===i}>${Ge[i]}</option>`)}
          </select>`,"Horizontal alignment of the card's fields within the card.")}

        ${this._cardPlacementRow(e,t)}

        ${this._cardLayoutMode(t)==="grid"?_:this._optRow("Columns","1–8 content columns",t.columns===void 0,r`<select class="ec-select"
            .value=${String(t.columns??v("card_columns")??1)}
            @change=${i=>{const s=Number(i.target.value);this._updateCard(e,{columns:s})}}
          >
            <option value="1" .selected=${(t.columns??v("card_columns")??1)===1}>1</option>
            <option value="2" .selected=${(t.columns??v("card_columns")??1)===2}>2</option>
            <option value="3" .selected=${(t.columns??v("card_columns")??1)===3}>3</option>
            <option value="4" .selected=${(t.columns??v("card_columns")??1)===4}>4</option>
            <option value="5" .selected=${(t.columns??v("card_columns")??1)===5}>5</option>
            <option value="6" .selected=${(t.columns??v("card_columns")??1)===6}>6</option>
            <option value="7" .selected=${(t.columns??v("card_columns")??1)===7}>7</option>
            <option value="8" .selected=${(t.columns??v("card_columns")??1)===8}>8</option>
          </select>`,i=>this._updateCard(e,{columns:i?void 0:t.columns??v("card_columns")??1}))}

        ${this._gridGeom()?this._row("Columns (span)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(t.grid_span??1)}
            @change=${i=>{const s=this._gridGeom();if(!s)return;const o=Math.max(1,Math.min(s.cols,Number(i.target.value)||1)),a=Math.max(8,o*s.cellW-s.padding);this._updateCard(e,{grid_span:o,width:a})}}
          />`)}`,"How many grid columns the card covers. Changing it resets Width to match."):_}

        ${this._numRow("Width (px)",{value:t.width,onChange:i=>this._updateCard(e,{width:i}),min:20,placeholder:"auto",hint:"Unset lets the card size itself to its contents."})}

        ${this._gridGeom()?this._row("Rows (span)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().rows}
            .value=${String(t.grid_row_span??1)}
            @change=${i=>{const s=this._gridGeom();if(!s)return;const o=Math.max(1,Math.min(s.rows,Number(i.target.value)||1)),a=Math.max(8,o*s.cellH-s.padding);this._updateCard(e,{grid_row_span:o,height:a})}}
          />`)}`,"How many grid rows the card covers. Changing it resets Height to match."):_}

        ${this._numRow("Height (px)",{value:t.height,onChange:i=>this._updateCard(e,{height:i}),min:20,placeholder:"auto",hint:"Unset lets the card size itself to its contents. In grid field placement this is the height the rows divide up; in flow placement it is only a minimum, so a card can still grow past it."})}

        ${this._cardGridSizeRows(e,t)}

        ${this._optRow("Field gap (px)",this._cardLayoutMode(t)==="grid"?"Space between a field’s own parts":"Vertical space between fields",t.field_gap===void 0,r`${this._numInput({value:t.field_gap??v("field_gap")??4,onChange:i=>this._updateCard(e,{field_gap:i}),min:0})}`,i=>this._updateCard(e,{field_gap:i?void 0:t.field_gap??v("field_gap")??4}))}
        ${this._cardLayoutMode(t)==="grid"?r`<p class="ec-hint">In grid placement the cells space the fields, so this
          only separates a field's own parts — its label from its value, or the lines of a time-until layout.</p>`:_}

        ${this._optRow("Column gap (px)","Space between field columns",t.column_gap===void 0,r`${this._numInput({value:t.column_gap??v("column_gap")??3,onChange:i=>this._updateCard(e,{column_gap:i}),min:0})}`,i=>this._updateCard(e,{column_gap:i?void 0:t.column_gap??v("column_gap")??3}))}

        ${this._cardRowGapRow(e,t)}

        ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent??!1}
            @change=${i=>this._updateCard(e,{transparent:i.target.checked||void 0})}
          />`)}
        <p class="ec-hint">Hides the card's box entirely — background, border, shadow and blur. <b>Card Style</b>
          is skipped while this is ticked.</p>
      </div>
    `}_mosaicFieldGap(){const e=this._config?.defaults;return e?.card_field_gap??v("card_field_gap")??e?.field_gap??v("field_gap")??4}_mosaicColumnGap(){const e=this._config?.defaults;return e?.card_column_gap??v("card_column_gap")??e?.column_gap??v("column_gap")??3}_cardLayoutMode(e){return Ue(e,this._config?.defaults)}_cardGridDefaults(e){const t=this._config?.defaults;return{cols:e.grid?.columns??t?.card_grid_columns??v("card_grid_columns")??4,rows:e.grid?.rows??t?.card_grid_rows??v("card_grid_rows")??4}}_patchCardGrid(e,t,i){const{cols:s,rows:o}=this._cardGridDefaults(t);this._updateCard(e,{grid:{columns:s,rows:o,...t.grid,...i}})}_cardPlacementRow(e,t){const i=this._cardLayoutMode(t),s=i==="grid",o=Ue(void 0,this._config?.defaults);return this._row("Field placement",r`<select class="ec-select"
        .value=${i}
        @change=${a=>{const n=a.target.value,{cols:l,rows:c}=this._cardGridDefaults(t);this._updateCard(e,{layout_mode:n===o?void 0:n,...n==="grid"&&!t.grid?{grid:{columns:l,rows:c}}:{}})}}
      >
        <option value="flow" .selected=${!s}>Flow</option>
        <option value="grid" .selected=${s}>Grid</option>
      </select>`,"Flow stacks fields in the order they are listed. Grid divides the card into cells and each field names the row and column it sits in. Switching between them keeps both layouts, so it is always reversible.")}_cardGridSizeRows(e,t){if(this._cardLayoutMode(t)!=="grid")return _;const{cols:i,rows:s}=this._cardGridDefaults(t);return r`
      ${this._row("Grid columns",r`${this._numInput({value:i,onChange:o=>this._patchCardGrid(e,t,{columns:Math.max(1,Math.min(8,o??4))}),min:1,max:8})}`,"Kept separate from the flow Columns setting, so switching back restores the layout the card was drawn with.")}

      ${this._row("Grid rows",r`${this._numInput({value:s,onChange:o=>this._patchCardGrid(e,t,{rows:Math.max(1,Math.min(20,o??4))}),min:1,max:20})}`)}
      <p class="ec-hint">The rows divide the card's <b>Height</b>. Without one the card still sizes to its
        contents and the rows will not be even.</p>
    `}_cardRowGapRow(e,t){if(this._cardLayoutMode(t)!=="grid")return _;const i=this._config?.defaults,s=t.grid?.row_gap??i?.card_grid_row_gap??v("card_grid_row_gap")??t.field_gap??i?.field_gap??v("field_gap")??4;return this._optRow("Row gap (px)","Space between grid rows",t.grid?.row_gap===void 0,r`${this._numInput({value:s,onChange:o=>this._patchCardGrid(e,t,{row_gap:o}),min:0})}`,o=>this._patchCardGrid(e,t,{row_gap:o?void 0:s}))}_visibilityRows(e,t){return r`
      ${this._row("Entity",r`<ha-entity-picker
          .hass=${this.hass}
          .value=${e?.entity??""}
          allow-custom-entity
          @value-changed=${i=>{const s=i.detail.value;t(s?{entity:s,operator:e?.operator??"==",value:e?.value??"on"}:void 0)}}
        ></ha-entity-picker>`,"The card is shown or hidden based on this entity's state. Leave blank and the card is always shown.")}
      ${e?r`
        ${this._row("Operator",r`<select class="ec-select"
            .value=${e.operator}
            @change=${i=>t({...e,operator:i.target.value})}
          >
            ${[["==","Equals"],["!=","Not Equal"],[">","Greater Than"],["<","Less Than"],[">=","Greater Than - Equal To"],["<=","Less Than - Equal To"]].map(([i,s])=>r`<option value=${i} .selected=${e.operator===i}>${s}</option>`)}
          </select>`,"How the entity's state is compared with Value below.")}
        ${this._row("Value",r`<input class="ec-input" type="text" .value=${e.value}
            placeholder="on / off / 100 / home …"
            @change=${i=>t({...e,value:i.target.value})}
          />`,"The state to compare against, written exactly as Home Assistant reports it — on, off, a number.")}
      `:_}
    `}_cardSecVisibility(e,t){return r`
      <div class="ec-section">
        ${this._visibilityRows(t.visible_when,i=>this._updateCard(e,{visible_when:i}))}
      </div>
    `}_cardSecStyle(e,t){return r`
      <div class="ec-section">
        ${t.transparent?r`<p class="ec-hint">This card is Transparent (set in Card Defaults) — box style is hidden while transparent.</p>`:r`
        ${this._row("Use global card style",r`<input type="checkbox" .checked=${t.box===void 0}
            @change=${i=>{i.target.checked?this._updateCard(e,{box:void 0}):this._updateCard(e,{box:{}})}}
          />`,"Ticked, this card follows Settings ▸ Global Defaults ▸ Mosaic Card Defaults. Unticking gives it a box of its own, starting empty.")}
        ${t.box!==void 0?r`
          <div class="ec-subsection-title">Box style</div>
          ${this._boxRows(`c${e}`,t.box,i=>this._updateCardBox(e,i))}
        `:_}
        `}
      </div>
    `}_cardSecText(e,t){return r`
      <div class="ec-section">
        ${this._row("Use global value style",r`<input type="checkbox" .checked=${t.value_style===void 0}
            @change=${i=>{i.target.checked?this._updateCard(e,{value_style:void 0}):this._updateCard(e,{value_style:{}})}}
          />`,"Ticked, values on this card follow Settings ▸ Global Defaults ▸ Value Default.")}
        ${t.value_style!==void 0?r`
          <div class="ec-subsection-title">Value text style</div>
          ${this._textRows(`c${e}-vs`,t.value_style,i=>this._updateCard(e,{value_style:{...t.value_style,...i}}))}
        `:_}

        ${this._row("Use global label style",r`<input type="checkbox" .checked=${t.label_style===void 0}
            @change=${i=>{i.target.checked?this._updateCard(e,{label_style:void 0}):this._updateCard(e,{label_style:{}})}}
          />`,"Ticked, labels on this card follow Settings ▸ Global Defaults ▸ Label Default.")}
        ${t.label_style!==void 0?r`
          <div class="ec-subsection-title">Label text style</div>
          ${this._textRows(`c${e}-ls`,t.label_style,i=>this._updateCard(e,{label_style:{...t.label_style,...i}}))}
        `:_}
      </div>
    `}_cardSecActions(e,t){return r`
      <div class="ec-section">
        ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},i=>this._updateCard(e,i))}
      </div>
    `}_cardSecBg(e,t){const i=t.bg?.rules??[],s=n=>{if(n){this._updateCard(e,{bg:{...t.bg,url:n}});return}const l={...t.bg,url:void 0},c=Object.values(l).every(d=>d==null||Array.isArray(d)&&d.length===0);this._updateCard(e,{bg:c?void 0:l})},o=n=>this._updateCard(e,{bg:{...t.bg,rules:n.length?n:void 0}}),a=!!t.bg?.url||i.some(n=>!!n.url);return r`
      <div class="ec-section">
            ${this._row("Image path",r`<div style="display:flex;gap:4px;align-items:center;">
                <input class="ec-input" type="text" style="flex:1;min-width:0;"
                  .value=${t.bg?.url??""}
                  placeholder="/local/image.png or https://…"
                  @change=${n=>s(n.target.value.trim())}
                />
                ${this._imagePickBtn(n=>s(n))}
              </div>`,t.bg?.entity?"The default image — shown when no rule below matches, or the entity is unavailable. Leave blank for none.":"An image drawn behind this card's fields, under the card box. Leave blank for none.")}

            <div class="ec-subsection-title">Image by state</div>
            ${this._entitySelector({entity:t.bg?.entity,onEntity:n=>this._updateCard(e,{bg:{...t.bg,entity:n||void 0}})})}
            <p class="ec-hint">Leave <b>Entity</b> blank for a single fixed background. Set one and the card shows the image whose rule matches that entity's state — falling back to the <b>Image path</b> above when nothing matches.</p>
            ${t.bg?.entity?r`
              <div class="ec-subsection-title">Rules</div>
              ${i.length===0?this._emptyAdd("No rules yet — add one",()=>o([...i,{}])):i.map((n,l)=>this._itemCard({icon:n.url?"mdi:image-check-outline":"mdi:image-off-outline",label:p._bgRuleName(n,l),sub:p._bgRuleSub(n),selected:l===this._selBgRule,onClick:()=>{this._selBgRule=l,this._navPush(`bgr:${l}`,p._bgRuleName(n,l))},actions:r`
                      <button class="ec-btn-remove" title="Remove rule"
                        @click=${c=>{c.stopPropagation(),o(i.filter((d,h)=>h!==l))}}>✕</button>
                    `}))}
              <div style="display:flex;gap:6px;margin-top:6px;">
                <button class="ec-btn-add" @click=${()=>o([...i,{}])}>+ Rule</button>
              </div>
              <p class="ec-hint">Each rule stands alone — one state value, one image. A value matches the state as text, as a number (<code>21</code> matches <code>21.0</code>) or as a boolean (<code>true</code> matches <code>on</code>).</p>
            `:_}

            ${a?r`
              <div class="ec-subsection-title">Display</div>
              <p class="ec-hint">These apply to whichever image is showing.</p>
              ${this._row("Fit",r`<select class="ec-select"
                  .value=${t.bg?.fit??"cover"}
                  @change=${n=>this._updateCard(e,{bg:{...t.bg,fit:n.target.value}})}
                >
                  <option value="cover"   .selected=${(t.bg?.fit??"cover")==="cover"}>cover (fill &amp; crop)</option>
                  <option value="contain" .selected=${t.bg?.fit==="contain"}>contain (letterbox)</option>
                  <option value="fill"    .selected=${t.bg?.fit==="fill"}>fill (stretch)</option>
                  <option value="none"    .selected=${t.bg?.fit==="none"}>none (natural size)</option>
                </select>`,"Whether the image covers the card and crops, or fits inside it whole.")}
              ${this._row("Opacity",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${String(t.bg?.opacity??1)}
                  @change=${n=>{const l=parseFloat(n.target.value);this._updateCard(e,{bg:{...t.bg,opacity:isNaN(l)?void 0:Math.min(1,Math.max(0,l))}})}}
                />`)}`,"How opaque the card's background image is.")}
              ${this._numRow("Width (px)",{value:t.bg?.width,onChange:n=>this._updateCard(e,{bg:{...t.bg,width:n}}),min:1,placeholder:"fill card",hint:"Unset sizes the image to the card."})}
              ${this._numRow("Height (px)",{value:t.bg?.height,onChange:n=>this._updateCard(e,{bg:{...t.bg,height:n}}),min:1,placeholder:"fill card",hint:"Unset sizes the image to the card."})}
              <div class="ec-subsection-title">Padding (px)</div>
              ${this._row("Top / Bottom",r`<div style="display:flex;gap:4px;">
                  ${this._numInput({value:t.bg?.padding_top,onChange:n=>this._updateCard(e,{bg:{...t.bg,padding_top:n}}),min:0,placeholder:"Top"})}
                  ${this._numInput({value:t.bg?.padding_bottom,onChange:n=>this._updateCard(e,{bg:{...t.bg,padding_bottom:n}}),min:0,placeholder:"Bottom"})}
                </div>`,"Vertical position of the image inside the card.")}
              ${this._row("Left / Right",r`<div style="display:flex;gap:4px;">
                  ${this._numInput({value:t.bg?.padding_left,onChange:n=>this._updateCard(e,{bg:{...t.bg,padding_left:n}}),min:0,placeholder:"Left"})}
                  ${this._numInput({value:t.bg?.padding_right,onChange:n=>this._updateCard(e,{bg:{...t.bg,padding_right:n}}),min:0,placeholder:"Right"})}
                </div>`,"Horizontal position of the image inside the card.")}
            `:_}
      </div>
    `}static _libImages(){return p._libCache||(p._libCache=fetch(qe+"backgrounds.json").then(e=>e.ok?e.json():{backgrounds:[]}).then(e=>Array.isArray(e?.backgrounds)?e.backgrounds:[]).then(e=>e.filter(t=>typeof t?.file=="string")).catch(()=>[])),p._libCache}_openImagePicker(e){this._pickerTarget=e,this._pickerFolder=void 0,this._pickerTrail=[],this._pickerErr="",this._browseMedia(),p._libImages().then(t=>{this._pickerLib=t})}_closeImagePicker(){this._pickerTarget=void 0}get _pickerHass(){return this.hass}async _browseMedia(e,t,i=!0){this._pickerErr="";try{const s=await this._pickerHass.callWS({type:"media_source/browse_media",...e?{media_content_id:e}:{}});this._pickerFolder=s,e?i&&(this._pickerTrail=[...this._pickerTrail,{id:e,title:t??e}]):this._pickerTrail=[]}catch{this._pickerFolder=void 0,this._pickerErr="The media library could not be opened."}}async _browseMediaUp(){const e=this._pickerTrail.slice(0,-1);this._pickerTrail=e;const t=e[e.length-1];await this._browseMedia(t?.id,t?.title,!1)}async _uploadMedia(e){const t=String(this._pickerFolder?.media_content_id??"");if(!t)return;this._pickerErr="";const i=new FormData;i.append("media_content_id",t),i.append("file",e);try{const s="/api/media_source/local_source/upload";if(!(this._pickerHass.fetchWithAuth?await this._pickerHass.fetchWithAuth(s,{method:"POST",body:i}):await fetch(s,{method:"POST",body:i,headers:{Authorization:`Bearer ${this._pickerHass.auth?.data?.access_token??""}`}})).ok){this._pickerErr="That image could not be uploaded.";return}await this._browseMedia(t,void 0,!1)}catch{this._pickerErr="That image could not be uploaded."}}_imagePickBtn(e){return r`<button class="ec-btn-clear" title="Pick an image"
      style="flex:0 0 auto;"
      @click=${()=>this._openImagePicker(e)}>
      <ha-icon icon="mdi:image-search-outline" style="--mdc-icon-size:18px;"></ha-icon>
    </button>`}_renderImagePickerModal(){if(!this._pickerTarget)return _;const e=this._pickerFolder,t=e?.children??[],i=String(e?.media_content_id??"").startsWith("media-source://media_source/"),s=o=>{this._pickerTarget?.(o),this._closeImagePicker()};return r`
      <div class="ec-lib-backdrop" @click=${()=>this._closeImagePicker()}></div>
      <div class="ec-lib-modal" style="width:min(600px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Select image</span>
          <button class="ec-btn-clear" @click=${()=>this._closeImagePicker()}>✕</button>
        </div>
        <div style="max-height:70vh;overflow-y:auto;padding:12px 16px 16px;">
          ${this._pickerErr?r`<p class="ec-hint" style="color:var(--error-color,#e45649);word-break:break-all;">
            ${this._pickerErr}</p>`:_}

          <div class="ec-subsection-title" style="margin-top:0;">Card library</div>
          <p class="ec-hint" style="margin-top:0;">Backgrounds that come with the card.</p>
          ${this._pickerLib.length===0?r`<p class="ec-hint">The images that ship with the card are not available.</p>`:_}
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-bottom:16px;">
            ${this._pickerLib.map(o=>r`
              <div role="button" tabindex="0" title=${o.file}
                style="cursor:pointer;border:1px solid var(--divider-color,rgba(0,212,255,0.14));border-radius:8px;overflow:hidden;"
                @click=${()=>s(o.file)}>
                <img src=${qe+o.file} alt=${o.name??o.file}
                  style="width:100%;height:66px;object-fit:cover;display:block;" />
                <div class="ec-item-card-sub" style="padding:4px 6px;font-size:11px;">
                  ${o.name??o.file}</div>
              </div>`)}
          </div>

          <div class="ec-subsection-title">Media library</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px;">
            <button class="ec-btn-clear" @click=${()=>void this._browseMedia()}>⌂ Root</button>
            ${this._pickerTrail.length?r`<button class="ec-btn-clear" @click=${()=>void this._browseMediaUp()}>↑ Up</button>`:_}
            ${i?r`
              <label class="ec-btn-add" style="cursor:pointer;">
                ⬆ Upload here
                <input type="file" accept="image/*" style="display:none;"
                  @change=${o=>{const a=o.target,n=a.files?.[0];a.value="",n&&this._uploadMedia(n)}} />
              </label>`:_}
          </div>
          ${e?r`
            <p class="ec-hint">
              <b>${String(e.title??"")}</b> · ${t.length}
              item${t.length===1?"":"s"}${i?"":" · this folder is read-only"}
            </p>`:_}
          ${t.map(o=>{const a=String(o.media_content_id??""),n=o.can_expand===!0,l=typeof o.thumbnail=="string"?o.thumbnail:"";return r`
              <div class="ec-item-card" role="button" tabindex="0"
                @click=${()=>{n?this._browseMedia(a,String(o.title??a)):s(a)}}>
                ${n||!l?r`<ha-icon class="ec-item-card-icon"
                      icon=${n?"mdi:folder-outline":"mdi:file-image-outline"}></ha-icon>`:r`<img src=${l} alt="" loading="lazy"
                      style="width:34px;height:34px;object-fit:cover;border-radius:4px;flex:0 0 auto;"
                      @error=${c=>{c.target.style.display="none"}} />`}
                <span class="ec-item-card-text">
                  <span class="ec-item-card-label">${String(o.title??a)}</span>
                </span>
              </div>`})}
        </div>
      </div>
    `}static _bgRuleName(e,t){return e.value?.trim()||`Rule ${t+1}`}static _bgRuleSub(e){return e.url?e.url.split("/").pop()||e.url:"no image"}_cardSecBgRule(e,t,i){const s=t.bg?.rules??[],o=s[i];if(!o)return this._navDeadEnd();const a=l=>this._updateCard(e,{bg:{...t.bg,rules:s.map((c,d)=>d===i?{...c,...l}:c)}}),n=t.bg?.entity?this.hass?.states[t.bg.entity]?.state:void 0;return r`
      <div class="ec-section">
        ${this._row("Value",r`<input class="ec-input" type="text"
            .value=${o.value??""}
            placeholder=${n??"e.g. on, 21, heat"}
            @change=${l=>a({value:l.target.value.trim()||void 0})}
          />`,"The entity state this rule matches. Text, a number, or a boolean.")}
        ${n!=null?r`<p class="ec-hint">${t.bg?.entity} is currently <b>${n}</b>.</p>`:_}
        ${this._row("Image path",r`<div style="display:flex;gap:4px;align-items:center;">
            <input class="ec-input" type="text" style="flex:1;min-width:0;"
              .value=${o.url??""}
              placeholder="/local/image.png or https://…"
              @change=${l=>a({url:l.target.value.trim()||void 0})}
            />
            ${this._imagePickBtn(l=>a({url:l}))}
          </div>`,"Shown while the state matches. Leave blank to skip this rule.")}
      </div>
    `}_fieldName(e){return e.display_name??e.text??(e.entity?.startsWith("virtual:")?this._virtuals().find(t=>`virtual:${t.id}`===e.entity)?.name??e.entity:this.hass?.states[e.entity??""]?.attributes?.friendly_name??e.entity)??e.icon??"(untitled field)"}_fieldSub(e,t=!1){const i=e.type==="graph"&&e.graph_type?e.graph_type:e.type==="svg"&&(e.shape||e.svg)?e.shape??e.svg.split("/").pop()?.replace(/\.svg$/i,"")??"":e.type==="embedded_card"&&e.embed_card_config?.type?String(e.embed_card_config.type):"",s=(n,l,c)=>l!=null?`${n}${l}${c!=null&&c>l?`-${c}`:""} · `:"",o=s("C",e.column,e.column_end),a=t?e.row!=null?s("R",e.row,e.row_end):"R auto · ":"";return`${o}${a}${xe[e.type]}${i?" · "+i:""}`}_renderFieldList(e,t){const i=t.fields,s=this._cardLayoutMode(t)==="grid";return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(e)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addField(e)}>+ Field</button>
        </div>
        ${this._listFilterBox(i.length)}
        ${i.length===0?this._emptyAdd("No fields yet — add one",()=>this._addField(e)):i.map((o,a)=>({f:o,fi:a})).filter(({f:o})=>{const a=this._currentListFilter();return!a||`${this._fieldName(o)} ${this._fieldSub(o,s)}`.toLowerCase().includes(a)}).map(({f:o,fi:a})=>this._itemCard({dragKey:`field:${e}:${a}`,icon:Ee[o.type],label:this._fieldName(o),sub:this._fieldSub(o,s),selected:a===this._selField,onClick:()=>{this._selField=a,this._navPush(`field:${o.id}`,`Field ${a+1}`)},actions:r`
                  ${this._copiedFieldSrc?.isExt===!1&&this._copiedFieldSrc.cardId===t.id&&this._copiedFieldSrc.fieldId===o.id?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                        @click=${n=>{n.stopPropagation(),this._copyField(e,a,!1)}}
                        title="Copy this field">⎘</button>`}
                  <button class="ec-btn-dup"
                    @click=${n=>{n.stopPropagation(),this._duplicateField(e,a,!1)}}
                    title="Duplicate field">⧉</button>
                  <button class="ec-btn-remove"
                    @click=${n=>{n.stopPropagation(),this._removeField(e,a)}}
                    title="Remove">✕</button>
                `}))}
      </div>
    `}_isTimeUntilVirtual(e){if(!e.entity?.startsWith("virtual:"))return!1;const t=e.entity.slice(8);return this._config?.virtuals?.find(i=>i.id===t)?.op==="time_until"}_displayUnit(e,t){if(t!==void 0)return t;if(!e||e.startsWith("virtual:")||!this.hass)return"";const i=this.hass.states[e];if(!i)return"";const s=i.attributes?.unit_of_measurement??"";if((i.attributes?.device_class??"")==="power"){const a=this._config?.defaults?.power_unit;return a==="W"||a==="kW"?a:"W or kW"}return s==="kWh"||s==="MWh"?"kWh or MWh":s}_entityDecimalsHint(e){if(!e||e.startsWith("virtual:")||!this.hass)return;const i=this.hass.states[e]?.state?.match(/^-?\d+\.(\d+)$/);return i?i[1].length:void 0}_defaultStatType(e){if(!e||e.startsWith("virtual:")||!this.hass)return;const t=this.hass.states[e]?.attributes;if(!t)return;const i=t.state_class;if(i==="total"||i==="total_increasing")return"sum";if(i==="measurement")return"mean";const s=t.device_class;if(s&&p._SUM_DEVICE_CLASSES.has(s))return"sum"}_isThermometerSvg(e){return!!e.svg?.toLowerCase().includes("thermometer")}_isHorizontalThermometerSvg(e){return!!e.svg?.toLowerCase().includes("thermometer-horizontal")}_isBatterySvg(e){return!!e.svg?.toLowerCase().includes("battery")}_isInverterSvg(e){return!!e.svg?.toLowerCase().includes("inverter")}_isGaugeSvg(e){return!!e.svg?.toLowerCase().includes("gauge")}_elementLabel(e){return e.type==="graph"?ot.find(t=>t.value===e.graph_type)?.label??e.graph_type??"Graph":e.svg?(e.svg.split("/").pop()?.replace(/\.svg$/i,"")??"").replace(/[-_]/g," ").replace(/\b\w/g,i=>i.toUpperCase())||"SVG element":"None selected"}_renderTuLayoutBuilder(e,t,i,s){const o=this._updFor(e,t,s),a=i.time_until_layout??[],n=h=>o({time_until_layout:[...a,h]}),l=h=>{const u=a.filter((g,b)=>b!==h);o({time_until_layout:u.length?u:void 0})},c=(h,u)=>{const g=[...a];g[h]={...g[h],...u},o({time_until_layout:g})},d=h=>h.type==="label"?r`<span class="ec-tu-chip ec-tu-chip--label">⏱ Time Until Label</span>`:h.type==="value"?r`<span class="ec-tu-chip ec-tu-chip--value">⟨value⟩</span>`:h.type==="newline"?r`<span class="ec-tu-chip ec-tu-chip--newline">↵ New Line</span>`:_;return r`
      <div class="ec-subsection-title">Time Until Layout</div>
      ${a.length===0?r`<p class="ec-empty">No items — use the buttons below to build the layout.</p>`:a.map((h,u)=>{const g=`${s?"etu":"tu"}:${e}:${t}:${u}`;return r`
            <div
              class="ec-list-row${this._dragSrc===g?" ec-dragging":""}${this._dropKey===g?this._dropBefore?" ec-drop-before":" ec-drop-after":""}"
              tabindex="0"
              data-drag-key=${g}
              @pointerdown=${b=>{b.target.closest(".ec-drag-handle")&&this._onItemPointerDown(b,g)}}
              @pointermove=${b=>this._onItemPointerMove(b)}
              @pointerup=${b=>this._onItemPointerUp(b)}
              @pointercancel=${b=>this._onItemPointerCancel(b)}
              @keydown=${b=>this._onItemCardKeydown(b,g,()=>{})}
            >
              <span class="ec-drag-handle" title="Drag to reorder"></span>
              <span class="ec-list-label" style="flex:1;min-width:0;">
                ${h.type==="text"?r`<input class="ec-input" type="text" .value=${h.text??""}
                      placeholder="enter text"
                      @input=${b=>c(u,{text:b.target.value})}
                      style="width:100%;box-sizing:border-box;" />`:d(h)}
              </span>
              <button class="ec-btn-remove" @click=${()=>l(u)} title="Remove">✕</button>
            </div>
          `})}
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
        <button class="ec-btn-add" @click=${()=>n({type:"text",text:""})}>+ Text</button>
        <button class="ec-btn-add" @click=${()=>n({type:"label"})}>+ Label</button>
        <button class="ec-btn-add" @click=${()=>n({type:"newline"})}>↵ New Line</button>
        <button class="ec-btn-add" @click=${()=>n({type:"value"})}>+ Value</button>
      </div>
    `}_fieldHeader(e,t,i,s){const o=this._cardLayoutMode(s)==="grid",{cols:a,rows:n}=this._cardGridDefaults(s??{});return r`
        ${this._row("Type",r`<select class="ec-select"
            .value=${i.type==="graph"?"svg":i.type}
            @change=${l=>{const c=l.target.value;if(se(c)){const d=Pt(c);if(d&&!this._confirmVariantOptionLoss(i,c,d)){l.target.value=i.type==="graph"?"svg":i.type;return}this._updateField(e,t,this._typeChangePatch(i,c,d?Ae(c,d):{}))}else{if(!this._confirmTypeOptionLoss(i,c)){l.target.value=i.type==="graph"?"svg":i.type;return}this._updateField(e,t,this._typeChangePatch(i,c)),c==="svg"&&this._openGGPicker(e,t)}}}
          >
            ${Bt.map(l=>r`<option value=${l} .selected=${(i.type==="graph"?"svg":i.type)===l}>${xe[l]}</option>`)}
          </select>`,"What kind of field this is. Changing it keeps the entity and drops settings the new type has no use for.")}

        ${se(i.type)&&Ze(i.type).length>1?this._row("Variant",r`<select class="ec-select"
            .value=${i.variant??""}
            @change=${l=>{const c=l.target.value;if(!this._confirmVariantOptionLoss(i,i.type,c)){l.target.value=i.variant??"";return}this._updateField(e,t,Ae(i.type,c))}}
          >
            ${this._variantOptions(i.type,i.variant)}
          </select>`,"A saved bundle of settings for this control type. Custom variants are built under Settings ▸ Global Defaults ▸ Control Default ▸ Variant Builder."):_}

        ${i.type==="svg"||i.type==="graph"?this._row("Element",r`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(i)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(e,t)}>Select SVG Element</button>
          </div>`,"Which graphic this field draws. Opens the Element Library picker."):_}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${i.display_name??""}
            placeholder=${(i.entity&&!i.entity.startsWith("virtual:")?this.hass?.states[i.entity]?.attributes?.friendly_name:void 0)??"Friendly name for the field list"}
            @change=${l=>{const c=l.target.value.trim();this._updateField(e,t,{display_name:c===""?void 0:c})}}
          />`,"Names the field in the editor's lists only — it is not shown on the card.")}

        ${this._fieldAxisRow(e,t,i,"column",o?a:8)}

        ${o?this._fieldAxisRow(e,t,i,"row",n):_}
    `}_fieldAxisRow(e,t,i,s,o){const a=s,n=s==="column"?"column_end":"row_end",l=s==="column"?"column":"row",c=i[a],d=i[n],h=u=>g=>{const b=g.target.value;this._updateField(e,t,{[u]:b===""?void 0:Number(b)})};return this._row(s==="column"?"Column":"Row",r`<div style="display:flex;gap:4px;align-items:center">
        ${this._numWrap(r`<input class="ec-input ec-input-num-small" type="number" min="1" max=${o}
          .value=${c!=null?String(c):""}
          placeholder="auto"
          title=${`The ${l} this field sits in. Blank lets it flow into the next free one.`}
          @change=${h(a)}
        />`)}
        <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
        ${this._numWrap(r`<input class="ec-input ec-input-num-small" type="number" min="2" max=${o}
          .value=${d!=null?String(d):""}
          placeholder="–"
          title=${`The last ${l} this field reaches, to span several. Blank keeps it in one.`}
          @change=${h(n)}
        />`)}
      </div>`,`Which of the card’s ${l}s this field sits in, and how many it spans. Each box has its own note.`)}_renderFieldPanel(e,t,i){return i.type==="blank"||i.type==="rule"?r`
        <div class="ec-section ec-section--fields">
          ${this._fieldHeader(e,t,i,this._config?.cards[e])}
          ${this._fieldSecBlankOrRule(e,t,i)}
        </div>
      `:r`
      <div class="ec-section ec-section--fields">
        ${this._fieldHeader(e,t,i,this._config?.cards[e])}
        ${this._fieldSectionMenu(i,e,t,!1)}
      </div>
    `}static _controlStylePathsFor(e){if(e==="button_group"||e==="button"){const i=e==="button"?"btn":"sel";return[...p._containerPathsForField(i),..._e["sub:active"][i],..._e["sub:inactive"][i]]}const t=ve;return[...ve.accent,...t[e]??[]]}static _containerPathsForField(e){return e==="btn"?Hs:_e["sub:container"].sel}_fieldSectionDefs(e){const t=p,i=[],s=()=>{e.type==="button_group"&&(e.options_source??"entity")==="manual"||i.push({key:"fsec:control",label:"Entity & Action",hint:"Controlled entity + write action",icon:"mdi:database",terms:Ve,paths:["entity","read_attribute","control_service"]})},o=(a="Colors & container (override global)")=>{i.push({key:"fsec:controlstyle",label:"Control Style",hint:a,icon:"mdi:palette",paths:[...F("control_style",t._controlStylePathsFor(e.type)),...F("control_box",Ls)]})};if(e.type==="value")i.push({key:"fsec:source",label:"Value Source",hint:"Entity, virtual entity, time-until layout",icon:"mdi:database",paths:["entity","attribute"]}),i.push({key:"fsec:label",label:"Value Label",hint:"Optional label text, position & icon",icon:"mdi:tag-text-outline",terms:"icon entity override mdi left right above below no icon position",paths:["label","label_position","label_column","icon","icon_position"]});else if(e.type==="icon")i.push({key:"fsec:icon",label:"Icon",hint:"mdi icon, entity & state rules",icon:"mdi:emoticon-outline",terms:"entity attribute state rule rules by state mdi match value",paths:["icon","entity","attribute","icon_rules"]});else if(e.type==="label")i.push({key:"fsec:content",label:"Content",hint:"Label text & icon",icon:"mdi:format-text",terms:"icon mdi left right above below position",paths:["text","icon","icon_position"]});else if(e.type==="svg")i.push({key:"fsec:source",label:"Value Source",hint:"Entity, fill source",icon:"mdi:database",paths:["entity","attribute","charging_entity","charging_attribute","tank_pct_entity","tank_pct_attribute","tank_volume_entity","tank_volume_attribute","tank_capacity_entity","tank_capacity_attribute"]}),this._isInverterSvg(e)||i.push({key:"fsec:range",label:"Range",hint:"Min / max value",icon:"mdi:arrow-expand-vertical",paths:["min","max"]}),i.push({key:"fsec:colors",label:"Colors",hint:"Fill direction, fill, gradient, svg color",icon:"mdi:palette",terms:"direction up down left right graduated tank line gradient angle degrees",paths:["fill_direction","fill_color","fill_color2","fill_angle","tank_color"]}),i.push({key:"fsec:size",label:"Size",hint:"Height, width",icon:"mdi:resize",paths:["width","height"]}),this._isInverterSvg(e)||i.push({key:"fsec:thresholds",label:"Color Thresholds",hint:"Value-driven fill color overrides",icon:"mdi:format-color-fill",paths:["thresholds"]}),this._isGaugeSvg(e)&&i.push({key:"fsec:gauge",label:"Gauge Labels",hint:"Min/max labels, value display",icon:"mdi:speedometer",terms:"size color centre center show current",paths:["gauge_min_label","gauge_max_label","gauge_show_value","gauge_label_size","gauge_label_color"]}),this._isThermometerSvg(e)&&i.push({key:"fsec:thermo",label:"Thermometer",hint:"Ticks, grid, temperature text",icon:"mdi:thermometer",terms:_t,paths:t._THERMO_PATHS});else if(e.type==="graph"){i.push({key:"fsec:graph",label:"Graph Settings",hint:"Type, axes, legend, range, size",icon:"mdi:chart-bar",terms:"type axes legend min max width height history hours stroke fill opacity bar line stacked timeline gauge needle zero baseline gridlines ticks decimals precision unit title curve smooth smoothed step stepped straight points markers dots latest last value horizontal sideways bar labels legend position above below left right gauge tick marks sweep degrees arc caption refresh poll interval update state names unavailable unknown entity name label",paths:["graph_type","graph_show_axes","graph_show_legend","graph_min","graph_max","graph_hours","graph_stroke_width","graph_fill_opacity","width","height","graph_include_zero","graph_tick_count","graph_precision","graph_unit","graph_y_title","graph_curve","graph_points","graph_last_point","graph_bar_labels","graph_legend_position","graph_gauge_ticks","graph_gauge_sweep","graph_gauge_label","graph_refresh_minutes","graph_show_state_names","graph_unavailable_color","graph_timeline_label"]}),i.push({key:"fsec:series",label:"Series",hint:"Entities plotted on the graph",icon:"mdi:chart-line",paths:["graph_series"]});const a=st(e.graph_type??v("graph_type")??"bar");a.timeline&&i.push({key:"fsec:graphstates",label:"State Colors",hint:"A colour per state name",icon:"mdi:palette-swatch",terms:"state states colour color map on off open closed home away heat cool timeline",paths:["graph_state_colors","graph_unavailable_color","graph_show_state_names"]}),a.gauge&&i.push({key:"fsec:graphbands",label:"Color Bands",hint:"Value-driven arc colours",icon:"mdi:format-color-fill",terms:"threshold thresholds band bands arc colour color level gauge",paths:["graph_thresholds"]}),i.push({key:"fsec:graphchrome",label:"Graph Style",hint:"Axis, grid, labels, gauge track, palette",icon:"mdi:format-paint",terms:"axis grid gridline zero baseline label unit legend track gauge palette colour color size chrome",paths:t._GRAPH_CHROME_PATHS})}else e.type==="embedded_card"?i.push({key:"fsec:embed",label:"Embedded Card",hint:"Card type, width, transparency",icon:"mdi:widgets",paths:["embed_card_config","width","embed_transparent","extra_css"]}):e.type==="toggle"?(s(),o()):e.type==="slider"?(s(),i.push({key:"fsec:sliderrange",label:"Range",hint:"Min / max / step, show value, unit",icon:"mdi:arrow-expand-horizontal",paths:["min","max","step","unit","show_value"]}),o()):e.type==="dropdown"||e.type==="button_group"?(s(),e.type==="button_group"&&(e.options_source??"entity")==="manual"&&i.push({key:"fsec:variant",label:"Variant",hint:"Save this field as a reusable variant",icon:"mdi:shape-plus",terms:"variant preset save custom reuse template"}),i.push({key:"fsec:options",label:"Options",hint:"Option source & manual list",icon:"mdi:format-list-bulleted",paths:["options_source","options_attribute","options","placeholder"]}),o()):e.type==="input"?(s(),i.push({key:"fsec:input",label:"Input",hint:"Mode, submit timing, placeholder",icon:"mdi:form-textbox",paths:["submit_on","placeholder","input_maxlength","input_password"]}),o()):e.type==="spinbox"?(s(),i.push({key:"fsec:sliderrange",label:"Range",hint:"Min / max / step, unit",icon:"mdi:arrow-expand-horizontal",paths:["min","max","step","unit","spinbox_decimals"]}),o()):e.type==="button"&&(s(),i.push({key:"fsec:options",label:"Button Layout",hint:"Icon & state position, text styles",icon:"mdi:gesture-tap-button",paths:["label","icon","button_value",...p._OPTION_LAYOUT_KEYS,...F("control_style",ft)]}),o("Colors, border, padding (override global)"));if(se(e.type)&&i.push({key:"fsec:labels",label:"Labels",hint:"Icon + text rows around the control",icon:"mdi:label-outline",paths:["control_labels","control_labels_position","control_labels_gap","align"]}),e.type==="slider"&&i.push({key:"fsec:sliderpoints",label:"Track Labels",hint:"Left / center / right labels",icon:"mdi:format-horizontal-align-center",paths:["slider_labels"]}),(e.type==="value"||e.type==="icon")&&(i.push({key:"fsec:stats",label:"HA Statistics",hint:"Advanced statistics integration",icon:"mdi:chart-box-outline",paths:t._STAT_PATHS}),i.push({key:"fsec:display",label:"Display",hint:"Unit, decimals, hide below",icon:"mdi:eye-outline",paths:["unit","decimals","hide_below","show_time_until_label"]})),e.type!=="embedded_card"&&e.type!=="blank"&&e.type!=="rule"){const a=[...F("style",Bs),"extra_css"];se(e.type)||a.push("align"),i.push({key:"fsec:style",label:"Text Style",hint:"Align & value/label text style",icon:"mdi:format-title",terms:ze,paths:a}),se(e.type)||i.push({key:"fsec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Ve,paths:bt})}return i}_fieldScope(e,t,i){const s=this._updFor(e,t,i);return{root:(i?this._extCards()[e]:this._config?.cards[e])?.fields[t],apply:s}}_fieldSectionMenu(e,t=-1,i=-1,s=!1){return this._navMenu(this._fieldSectionDefs(e),t<0?void 0:this._fieldScope(t,i,s))}_fieldSection(e,t,i,s,o=!1){return r`
      ${this._clearOverridesBtn(p._findDef(this._fieldSectionDefs(i),s),this._fieldScope(e,t,o))}
      ${this._fieldSectionBody(e,t,i,s,o)}
    `}_fieldSectionBody(e,t,i,s,o){switch(s){case"fsec:source":return i.type==="svg"?this._fieldSecSvgSource(e,t,i,o):this._fieldSecValueSource(e,t,i,o);case"fsec:control":return this._fieldSecControlSource(e,t,i,o);case"fsec:variant":return this._fieldSecVariant(e,t,i,o);case"fsec:embed":return this._fieldSecEmbed(e,t,i,o);case"fsec:sliderrange":return this._fieldSecSliderRange(e,t,i,o);case"fsec:options":return this._fieldSecOptions(e,t,i,o);case"fsec:input":return this._fieldSecInput(e,t,i,o);case"fsec:controlstyle":return this._fieldSecControlStyle(e,t,i,o);case"fsec:labels":return this._fieldSecControlLabels(e,t,i,o);case"fsec:sliderpoints":return this._fieldSecSliderPoints(e,t,i,o);case"fsec:label":return this._fieldSecValueLabel(e,t,i,o);case"fsec:icon":return this._fieldSecIcon(e,t,i,o);case"fsec:content":return this._fieldSecLabelContent(e,t,i,o);case"fsec:range":return this._fieldSecSvgRange(e,t,i,o);case"fsec:colors":return this._fieldSecSvgColors(e,t,i,o);case"fsec:size":return this._fieldSecSvgSize(e,t,i,o);case"fsec:thresholds":return this._fieldSecSvgThresholds(e,t,i,o);case"fsec:gauge":return this._fieldSecSvgGauge(e,t,i,o);case"fsec:thermo":return this._fieldSecSvgThermo(e,t,i,o);case"fsec:graph":return this._fieldSecGraphSettings(e,t,i,o);case"fsec:series":return this._fieldSecGraphSeries(e,t,i,o);case"fsec:graphstates":return this._fieldSecGraphStates(e,t,i,o);case"fsec:graphbands":return this._fieldSecGraphBands(e,t,i,o);case"fsec:graphchrome":return this._fieldSecGraphChrome(e,t,i,o);case"fsec:stats":return this._fieldSecStats(e,t,i,o);case"fsec:display":return this._fieldSecDisplay(e,t,i,o);case"fsec:style":return this._fieldSecStyle(e,t,i,o);case"fsec:actions":return this._fieldSecActions(e,t,i,o);default:return r``}}_fieldSecBlankOrRule(e,t,i,s=!1){const o=this._updFor(e,t,s);return i.type!=="blank"?r`<p class="ec-hint">Horizontal rule — no options.</p>`:r`
        ${this._numRow("Gap (px)",{value:i.blank_gap,onChange:a=>o({blank_gap:a}),min:0,placeholder:"10"})}
    `}_updFor(e,t,i){return s=>i?this._updateExtField(e,t,s):this._updateField(e,t,s)}_fieldSecEmbed(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?{kind:"extfield",ci:e,fi:t}:{kind:"field",ci:e,fi:t},n=i.embed_card_config?.type?String(i.embed_card_config.type):"";return r`
      <div class="ec-section">
        ${this._row("Card Type",r`<span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${n||r`<span style="color:#555;font-style:italic;">not set</span>`}
          </span>`,"Which Home Assistant card is embedded in this field.")}
        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker(a)}>
            ${n?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor(a)}>
            Edit Config…
          </button>
        </div>
        ${this._row("Width (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(i.width??300)}
            @change=${l=>o({width:Number(l.target.value)})}
          />`)}`,"How wide the embedded card is drawn. Unset lets it fill the field's column.")}
        <p class="ec-hint">Height is automatic — the embedded card sizes itself.</p>
        ${this._row("Transparent",r`<input type="checkbox" .checked=${i.embed_transparent??!1}
            @change=${l=>o({embed_transparent:l.target.checked})}
          />`)}
        <p class="ec-hint">Strips the embedded card's own background, border and shadow, so the Mosaic card
          behind it shows through. It paints nothing of its own.</p>
        ${this._cssRow(i.extra_css,l=>o({extra_css:l}))}
      </div>
    `}_idFor(e,t,i){const o=(i?this._extCards()[e]:this._config?.cards[e])?.fields[t]?.id,a=i?"e":"c";return o?`${a}${o}`:`${a}${e}f${t}`}_derivedService(e){const t=e.entity?.split(".")[0];if(!t)return"";const i=(...s)=>s.includes(t);switch(e.type){case"toggle":case"button":return"homeassistant.turn_on / turn_off";case"slider":case"spinbox":return i("input_number","number","counter")?`${t}.set_value`:"";case"dropdown":case"button_group":case"input":return i("input_select","select")?`${t}.select_option`:i("input_text","text")?`${t}.set_value`:"";default:return""}}_fieldSecControlSource(e,t,i,s=!1){const o=this._updFor(e,t,s),a=this._derivedService(i);return r`
      <div class="ec-section">
        ${this._entitySelector({entity:i.entity,onEntity:n=>o({entity:n}),attribute:i.read_attribute,onAttribute:n=>o({read_attribute:n}),attributePlaceholder:Li(i.options_attribute)})}
        <p class="ec-hint">The entity this control reads its value from and writes back to.</p>

        <div class="ec-subsection-title">When the value changes</div>
        <p class="ec-hint">Leave blank to drive the entity from its domain — a light toggles, an <code>input_number</code> takes a value, an <code>input_select</code> picks an option. Set one only when you need something else, e.g. <code>light.turn_on</code> to drive brightness rather than on/off. Variants like Brightness and Volume fill this in for you.</p>
        <p class="ec-hint">An option with its own entity ignores this and always uses that entity's domain default.</p>
        ${this._row("Action",r`<ha-service-picker
          .hass=${this.hass}
          .value=${i.control_service??""}
          placeholder=${a||"no automatic action for this entity"}
          @value-changed=${n=>{const l=n.detail.value;o({control_service:l||void 0})}}
        ></ha-service-picker>`)}

        ${this._saveAsVariantRows(i,this._idFor(e,t,s))}
      </div>
    `}_fieldSecVariant(e,t,i,s=!1){return r`
      <div class="ec-section">
        ${this._saveAsVariantRows(i,this._idFor(e,t,s))}
      </div>
    `}_saveAsVariantRows(e,t){if(!se(e.type))return r``;const i=e.type,s=Bi(i,e.variant)?Gi(i,e.variant):void 0;if(!(this._saveVariantFor===t))return r`
        <div class="ec-subsection-title">Save as Variant</div>
        <p class="ec-hint">Store this field's settings as a reusable variant on this card. It then appears under <b>Custom</b> in every control field's Variant dropdown.</p>
        ${s?r`<p class="ec-hint">This field uses the custom variant <b>${s.label}</b>, so you can also update it with the settings as they now stand.</p>`:_}
        <button class="ec-btn-add" style="width:100%;"
          @click=${()=>{this._saveVariantFor=t,this._saveVariantLabel=s?.label??"",this._variantError=""}}
        >＋ Save as Variant…</button>
      `;const a=Hi(e),n=()=>{this._saveVariantFor="",this._saveVariantLabel="",this._variantError=""},l=()=>this._saveVariantLabel.trim(),c=()=>{if(!l()){this._variantError="Label is required.";return}const u=De(i,l());this._updateVariants(i,g=>[...g,{id:u,label:l(),...e.icon?{icon:e.icon}:{},...Object.keys(a).length?{preset:a}:{}}]),n()},d=()=>{if(s){if(!l()){this._variantError="Label is required.";return}this._updateVariants(i,u=>u.map(g=>g.id===s.id?{...g,label:l(),...e.icon?{icon:e.icon}:{icon:void 0},preset:Object.keys(a).length?a:void 0}:g)),n()}},h=e.options?.length??0;return r`
      <div class="ec-subsection-title">Save as Variant</div>
      ${this._row("Label",r`<input class="ec-input" type="text" autofocus
          placeholder="e.g. Bedroom Dimmer"
          .value=${this._saveVariantLabel}
          @input=${u=>{this._saveVariantLabel=u.target.value}}
          @keydown=${u=>{u.key==="Enter"&&(s?d():c())}}
        />`)}
      <p class="ec-hint">
        Saves ${Object.keys(a).length} setting(s) from this field.
        ${s?r`<b>Update</b> rewrites <b>${s.label}</b> under its existing id, so every field using it follows.
                 <b>Save as New</b> creates a separate variant with id <code>${l()?De(i,l()):"…"}</code>.`:r`Id will be <code>${l()?De(i,l()):"…"}</code>.`}
      </p>
      <p class="ec-hint">
        The entity itself is not saved — a variant is a behaviour preset, not a binding.
        ${h?r`Its ${h} option(s) do travel with it, carrying their labels, icons and layout, but with
          each option's own entity stripped for the same reason — point them at your entities after applying it.`:_}
      </p>
      ${this._variantError?r`<p style="color:#f44;font-size:12px;margin:0 0 6px;">${this._variantError}</p>`:_}
      <div style="display:flex;gap:6px;">
        ${s?r`<button class="ec-btn-add" style="flex:1;" @click=${d}>Update “${s.label}”</button>`:_}
        <button class="ec-btn-add" style="flex:1;" @click=${c}>${s?"Save as New":"Save"}</button>
        <button class="ec-btn-add" style="flex:0 0 auto;" @click=${n}>Cancel</button>
      </div>
    `}_confirmVariantOptionLoss(e,t,i){if(!Wi(e,t,i))return!0;const s=e.options?.length??0;return window.confirm(`This variant brings no options of its own, so applying it will clear the ${s} option${s===1?"":"s"} on this field.

Undo restores them. Save the field as a variant first if you want to keep this list.`)}_typeChangePatch(e,t,i={}){const s=p,o=K(e,{type:t,...i}),a=new Set([...s._slotMap(this._fieldSlotDefs(o)).keys(),...Ts(o)]),n={type:t,...i};for(const l of Object.keys(e))!(l in n)&&!a.has(l)&&(n[l]=void 0);return n}_confirmTypeOptionLoss(e,t){if(se(t)||!e.options?.length)return!0;const i=e.options.length;return window.confirm(`A ${xe[t]??t} field has no options, so changing the type drops the ${i} option${i===1?"":"s"} on this field.

Undo restores them.`)}_numberEntityRange(e){if(!e||!e.startsWith("number.")&&!e.startsWith("input_number.")||!this.hass)return{};const t=this.hass.states[e]?.attributes;if(!t)return{};const i=s=>typeof s=="number"?s:void 0;return{min:i(t.min),max:i(t.max),step:i(t.step)}}_fieldSecSliderRange(e,t,i,s=!1){const o=this._updFor(e,t,s),a=this._numberEntityRange(i.entity),n=(l,c,d,h)=>this._numRow(l,{value:i[c],onChange:u=>o({[c]:u}),placeholder:a[c]?.toString()??d,hint:h});return r`
      <div class="ec-section">
        ${n("Min","min","0","Unset follows the entity's own minimum.")}
        ${n("Max","max","100","Unset follows the entity's own maximum.")}
        ${n("Step","step","1","Smallest change the control can make.")}
        ${i.type==="spinbox"?this._controlNumRow("Decimals",i.spinbox_decimals,"auto",l=>o({spinbox_decimals:l}),0,"How many decimal places the spin box shows."):_}
        ${this._row("Unit",r`<input class="ec-input" type="text" .value=${i.unit??""}
            placeholder=${this._displayUnit(i.entity,void 0)||"e.g. %"}
            @change=${l=>{const c=l.target.value;o({unit:c===""?void 0:c})}} />`,"Shown after the value. Unset uses the entity's own unit.")}
        ${i.type==="slider"?this._row("Show value",r`<input type="checkbox" class="ec-checkbox"
            .checked=${i.show_value??!0}
            @change=${l=>o({show_value:l.target.checked})} />`,"Shows the current value beside the slider."):_}
      </div>
    `}_controlLabelEditor(e,t,i){return r`
      ${this._row("Icon",this._iconPicker(t.icon,s=>i({icon:s})),"An mdi icon shown on this label row. Leave blank for text only.")}
      ${this._row("Text",r`<input class="ec-input" type="text" .value=${t.text??""}
          @change=${s=>{const o=s.target.value;i({text:o||void 0})}} />`,"Text shown on this label row.")}
      <div class="ec-subsection-title">Text style</div>
      ${this._textRows(`${e}-st`,t.style??{},s=>i({style:{...t.style,...s}}),!1)}
    `}_fieldSecControlLabels(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.control_labels??[],n=c=>o({control_labels:c.length?c:void 0}),l=i.control_labels_position??"above";return r`
      <div class="ec-section">
        <p class="ec-hint">Stacked icon + text rows placed around the control. Each row has its own text style.</p>
        ${this._row("Position",r`<select class="ec-select" .value=${l}
            @change=${c=>o({control_labels_position:c.target.value})}
          >
            ${["above","below","left","right"].map(c=>r`<option value=${c} .selected=${l===c}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`)}
          </select>`)}
        ${this._row("Alignment",r`<select class="ec-select" .value=${i.align??"left"}
            @change=${c=>o({align:c.target.value})}
          >
            ${Ce.map(c=>r`<option value=${c} .selected=${(i.align??"left")===c}>${Ge[c]}</option>`)}
          </select>`)}
        <p class="ec-hint">Horizontal placement of the label rows against the control — <b>Position</b> covers where they sit. Above or below, the rows align to the control's width; beside it, they align to each other.</p>
        ${this._controlNumRow("Gap to control (px)",i.control_labels_gap,String(this._config?.defaults?.control_gap??v("control_gap")??4),c=>o({control_labels_gap:c}),0)}
        ${a.length===0?r`<p class="ec-empty">No label rows — click "+ Label row".</p>`:_}
        ${a.map((c,d)=>r`
          <div class="ec-section-header">
            <span class="ec-section-title">Row ${d+1}</span>
            <button class="ec-btn-remove" title="Remove row" @click=${()=>n(a.filter((h,u)=>u!==d))}>✕</button>
          </div>
          ${this._controlLabelEditor(`${this._idFor(e,t,s)}-lbl${d}`,c,h=>{const u=[...a];u[d]={...c,...h},n(u)})}
        `)}
        <button class="ec-btn-add" @click=${()=>n([...a,{}])}>+ Label row</button>
      </div>
    `}_fieldSecSliderPoints(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.slider_labels??{},n=(l,c)=>o({slider_labels:{...a,[l]:{...a[l],...c}}});return r`
      <div class="ec-section">
        <p class="ec-hint">Labels anchored to the track — left (min), center, right (max). Each has its own text style and optional live value.</p>
        ${["left","center","right"].map(l=>{const c=a[l]??{},d=`${this._idFor(e,t,s)}-pt-${l}`;return r`
            <div class="ec-slider-pt">
              <div class="ec-section-header"><span class="ec-section-title">${l.charAt(0).toUpperCase()+l.slice(1)}</span></div>
              ${this._entitySelector({label:"Value entity",entity:c.entity,onEntity:h=>n(l,{entity:h}),attribute:c.attribute,onAttribute:h=>n(l,{attribute:h})})}
              ${c.entity?r`<p class="ec-hint">Showing this entity's live value instead of Text below.</p>`:_}
              ${l!=="center"?this._controlNumRow("Gap from edge (px)",c.gap,"0",h=>n(l,{gap:h}),0):_}
              ${this._controlLabelEditor(d,c,h=>n(l,h))}
            </div>
          `})}
      </div>
    `}_fieldSecOptions(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.options_source??"entity",n=i.options??[],l=d=>o({options:d.length?d:void 0}),c=s?"eopt":"opt";return i.type==="button"?r`<div class="ec-section">
        <p class="ec-hint">A button is a single cell. Its icon, label and state come from the field's own <b>Entity &amp; Action</b> settings; the layout below places them.</p>
        ${this._row("Label",r`<input class="ec-input" type="text" .value=${i.label??""}
            @change=${d=>{const h=d.target.value;o({label:h||void 0})}} />`,"Text on the button. Leave blank for an icon-only button.")}
        ${this._row("Icon",this._iconPicker(i.icon,d=>o({icon:d}),"from entity state"),"An mdi icon on the button.")}
        ${this._row("Press writes",r`<input class="ec-input" type="text" placeholder="toggle the entity" .value=${i.button_value??""}
            @change=${d=>{const h=d.target.value.trim();o({button_value:h||void 0})}} />`)}
        <p class="ec-hint">Leave <b>Press writes</b> blank to toggle the entity with its domain default action. Set a value and the button writes that instead, showing as active while the entity's state matches it.</p>
        ${this._optionLayoutEditor(i,o,this._idFor(e,t,s))}
      </div>`:r`
      <div class="ec-section">
        ${this._row("Options source",r`<select class="ec-select" .value=${a}
            @change=${d=>o({options_source:d.target.value})}
          >
            <option value="entity" .selected=${a==="entity"}>From entity</option>
            <option value="manual" .selected=${a==="manual"}>Manual list</option>
          </select>`,"Where the list of choices comes from.")}
        <p class="ec-hint"><b>From entity</b> reads the choices the entity itself offers (an <code>input_select</code>'s options, a light's effects, a climate's modes). <b>Manual list</b> lets you write your own options — the only source that can give an option its own entity, icon or line.</p>
        ${_}
        ${i.type==="dropdown"?this._row("Placeholder",r`<input class="ec-input" type="text" .value=${i.placeholder??""} placeholder="—"
            @change=${d=>{const h=d.target.value;o({placeholder:h===""?void 0:h})}}
          />`,"Shown on the closed dropdown when nothing matches."):_}
        ${i.type==="dropdown"?r`<p class="ec-hint">Shown on the closed dropdown when the entity's state doesn't match any option — usually because it is unavailable or mid-change.</p>`:_}
        ${a==="entity"?r`
            ${this._row("Options attribute",r`<input class="ec-input" type="text" placeholder="options" .value=${i.options_attribute??""}
                @change=${d=>{const h=d.target.value.trim();o({options_attribute:h||void 0})}} />`,"The entity attribute holding the option list — e.g. options, effect_list, source_list, hvac_modes.")}`:r`
            <div class="ec-subsection-title">Options — drag to reorder</div>
            <p class="ec-hint">Each option opens its own screen. Leave its <b>Entity</b> blank for a normal option that writes its value to the field's entity; set one and the option acts on <i>that</i> entity instead, showing its state and state icon — so one button group can drive several lights.</p>
            ${n.length===0?this._emptyAdd("No options yet — add one",()=>l([...n,{}])):n.map((d,h)=>this._itemCard({dragKey:`${c}:${e}:${t}:${h}`,icon:d.icon||(d.entity?"mdi:link-variant":"mdi:format-list-bulleted"),label:p._optionName(d,h),sub:p._optionSub(d),selected:h===(s?this._selExtOption:this._selOption),onClick:()=>{s?this._selExtOption=h:this._selOption=h,this._navPush(`${c}:${h}`,p._optionName(d,h))},actions:r`
                    <button class="ec-btn-copy" title="Copy this option"
                      @click=${u=>{u.stopPropagation(),this._copiedOption={...d}}}>⎘</button>
                    <button class="ec-btn-remove" title="Remove option"
                      @click=${u=>{u.stopPropagation(),l(n.filter((g,b)=>b!==h))}}>✕</button>
                  `}))}
            <div style="display:flex;gap:6px;margin-top:6px;">
              <button class="ec-btn-add" @click=${()=>l([...n,{}])}>+ Option</button>
              ${this._copiedOption?r`<button class="ec-btn-paste"
                @click=${()=>l([...n,{...this._copiedOption}])}
                title="Paste copied option">⎗ Option</button>`:_}
            </div>
            <p class="ec-hint"><b>Line</b> groups options into rows — options sharing a line number render on the same line, in order. Blank = line 1.</p>
          `}
        ${i.type==="button_group"?r`
          <div class="ec-subsection-title">Layout</div>
          ${(()=>{const d=p._OPTION_LAYOUT_DEF;return this._navBtn(d.key,d.label,d.hint,d.icon,et(i,d.paths))})()}
        `:_}
      </div>
    `}static _optionName(e,t){return e.label||e.value||e.entity||`Option ${t+1}`}static _optionSub(e){const t=[];return e.label&&e.value&&t.push(e.value),e.entity?t.push(e.entity):(e.value||e.label)&&t.push("writes to the field's entity"),e.line&&e.line>1&&t.push(`line ${e.line}`),(e.tap_action||e.hold_action||e.double_tap_action)&&t.push("has actions"),t.join(" · ")}_fieldSecOptionItem(e,t,i,s,o=!1){const a=this._updFor(e,t,o),n=i.options??[],l=n[s];if(!l)return this._navDeadEnd();const c=d=>{const h=[...n];h[s]={...l,...d},a({options:h})};return r`
      <div class="ec-section">
        ${this._row("Value",r`<input class="ec-input" type="text" placeholder="written to the entity" .value=${l.value??""}
            @change=${d=>{const h=d.target.value;c({value:h||void 0})}} />`,"The value written to the entity when this option is picked.")}
        ${this._row("Label",r`<input class="ec-input" type="text" placeholder="optional" .value=${l.label??""}
            @change=${d=>{const h=d.target.value;c({label:h||void 0})}} />`,"Text shown on the option. Unset shows the value.")}
        ${this._entitySelector({entity:l.entity,onEntity:d=>c({entity:d}),attribute:l.attribute,onAttribute:d=>c({attribute:d})})}
        <p class="ec-hint">Leave <b>Entity</b> blank and this option writes its value to the field's entity. Set one and it acts on that entity instead, with its domain default action.</p>
        ${this._row("Icon",this._iconPicker(l.icon,d=>c({icon:d}),"from entity state"),"An mdi icon on this option. An option with its own entity shows that entity's state icon unless this is set.")}
        ${this._controlNumRow("Line",l.line,"1",d=>c({line:d}),1,"Options sharing a line number render on the same row.")}
        ${i.type==="button_group"?r`
          <div class="ec-subsection-title">Cell layout</div>
          <p class="ec-hint">Overrides this option's placement only. <b>Inherit</b> follows the field's Option Layout.</p>
          ${this._row("Icon position",this._optionIconPosSelect(l.icon_position,d=>c({icon_position:d}),"Inherit"),"Where the icon sits relative to the label, for this option only.")}
          ${this._row("Show state",r`<select class="ec-select" .value=${l.show_state===void 0?"":l.show_state?"y":"n"}
              @change=${d=>{const h=d.target.value;c({show_state:h===""?void 0:h==="y"})}}
            >
              <option value="" .selected=${l.show_state===void 0}>Inherit</option>
              <option value="y" .selected=${l.show_state===!0}>Show</option>
              <option value="n" .selected=${l.show_state===!1}>Hide</option>
            </select>`,"Shows this option's entity state on the option. Needs an entity of its own, set above.")}
          ${l.show_state??i.option_show_state?this._row("State position",this._optionPosSelect(l.state_position,d=>c({state_position:d}),"Inherit"),"Where the state value sits relative to the label."):_}
          <div class="ec-subsection-title">Actions</div>
          <p class="ec-hint">Run instead of this option's normal write. In a Perform Action's data, type <code>{{value}}</code> into any field to send this option's own value instead of a fixed one — typing it switches that field to free text, same as a template in the automation editor.</p>
          ${this._actionRows({tap_action:l.tap_action,hold_action:l.hold_action,double_tap_action:l.double_tap_action},d=>c(d))}
        `:_}
      </div>
    `}_posSelect(e,t,i,s,o){const a=n=>n[0].toUpperCase()+n.slice(1);return r`<select class="ec-select" .value=${i??""}
      @change=${n=>{const l=n.target.value;s(l===""?void 0:l)}}
    >
      ${o?r`<option value="" .selected=${i===void 0}>${o}</option>`:_}
      ${e.map(n=>r`<option value=${n} .selected=${i===n}>${t[n]??a(n)}</option>`)}
    </select>`}_optionPosSelect(e,t,i){return this._posSelect(p._POS,{},e,t,i)}_optionIconPosSelect(e,t,i){return this._posSelect([...p._POS,"none"],{none:"No Icon"},e,t,i)}_optionLayoutEditor(e,t,i="f"){const s=(e.type==="button"?this._config?.defaults?.button_option_layout:this._config?.defaults?.option_layout)??{},o=p._OPTION_LAYOUT_KEYS.some(l=>e[l]!==void 0),a=p.SEPARATION_KEYS.some(l=>e.control_style?.[l]!==void 0),n=!o&&!a&&!this._optionLayoutOn.has(i);return r`
      <div class="ec-subsection-title">Option layout</div>
      ${this._row("Use global option layout",r`<input type="checkbox" .checked=${n}
          @change=${l=>{if(l.target.checked){this._optionLayoutOn.delete(i);const c={...e.control_style};for(const d of p.SEPARATION_KEYS)delete c[d];t({...Object.fromEntries(p._OPTION_LAYOUT_KEYS.map(d=>[d,void 0])),control_style:Object.keys(c).length?c:void 0})}else this._optionLayoutOn.add(i);this.requestUpdate()}}
        />`)}
      <p class="ec-hint">Inherits <b>Settings ▸ Global Defaults ▸ Control Default ▸ ${e.type==="button"?"Button":"Button Group"} ▸ Field Container</b>. Untick to set this field's own layout; each option can still override it individually.</p>
      ${n?_:this._optionLayoutRows({icon_position:e.option_icon_position,show_state:e.option_show_state,state_position:e.option_state_position,icon_style:e.option_icon_style,label_style:e.option_label_style,state_style:e.option_state_style},l=>{const c={};"icon_position"in l&&(c.option_icon_position=l.icon_position),"show_state"in l&&(c.option_show_state=l.show_state),"state_position"in l&&(c.option_state_position=l.state_position),"icon_style"in l&&(c.option_icon_style=l.icon_style),"label_style"in l&&(c.option_label_style=l.label_style),"state_style"in l&&(c.option_state_style=l.state_style),t(c)},`${i}-ol`,s)}
      ${n?_:this._optionSeparationRows(e.control_style??{},l=>t({control_style:{...e.control_style,...l}}),e.type==="button")}
    `}_optionLayoutRows(e,t,i,s={}){const o=e.show_state??s.show_state??!1;return r`
      <p class="ec-hint">The label is the anchor; the icon and state value sit around it. <b>Above</b> / <b>Below</b> take their own line, <b>Left</b> / <b>Right</b> share the label's line. <b>No Icon</b> leaves the icon out — the only way to drop it on an option with its own entity, which otherwise shows that entity's state icon.</p>
      ${this._row("Icon position",this._optionIconPosSelect(e.icon_position??s.icon_position??"left",a=>t({icon_position:a})),"Where the icon sits relative to the label.")}
      ${this._row("Show state value",r`<input type="checkbox" .checked=${o}
          @change=${a=>t({show_state:a.target.checked||void 0})}
        />`,"Shows each option's entity state alongside its label.")}
      <p class="ec-hint">The state value comes from the option's own entity, so options need an entity for this to show anything.</p>
      ${o?this._row("State position",this._optionPosSelect(e.state_position??s.state_position??"below",a=>t({state_position:a})),"Where the state value sits relative to the label."):_}

      <p class="ec-hint">Weight and font for the text parts. <b>Colors and sizes</b> are set per state in <b>Active</b> / <b>Inactive State</b>.</p>
      <div class="ec-subsection-title">Icon style</div>
      ${this._textRows(`${i}-icon`,e.icon_style??{},a=>t({icon_style:{...e.icon_style,...a}}),!1,!1,!1)}
      <div class="ec-subsection-title">Label style</div>
      ${this._textRows(`${i}-label`,e.label_style??{},a=>t({label_style:{...e.label_style,...a}}),!1,!1,!1)}
      ${o?r`
        <div class="ec-subsection-title">State style</div>
        ${this._textRows(`${i}-state`,e.state_style??{},a=>t({state_style:{...e.state_style,...a}}),!1,!1,!1)}
      `:_}
    `}_fieldSecInput(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.submit_on??"change";return r`
      <div class="ec-section">
        ${this._row("Submit on",r`<select class="ec-select" .value=${a}
            @change=${n=>o({submit_on:n.target.value})}
          >
            <option value="change" .selected=${a==="change"}>Change (click away or Enter)</option>
            <option value="blur" .selected=${a==="blur"}>Click away</option>
            <option value="enter" .selected=${a==="enter"}>Enter only</option>
          </select>`,"When the typed value is sent — as you type, on Enter, or when the field loses focus.")}
        ${this._row("Placeholder",r`<input class="ec-input" type="text" .value=${i.placeholder??""}
            @change=${n=>{const l=n.target.value;o({placeholder:l===""?void 0:l})}}
          />`,"Grey prompt text shown while the field is empty.")}
        ${this._controlNumRow("Max length",i.input_maxlength,"no limit",n=>o({input_maxlength:n}),1,"Longest value the field accepts.")}
        ${this._row("Password field",r`<input type="checkbox" .checked=${i.input_password??!1}
            @change=${n=>o({input_password:n.target.checked||void 0})}
          />`,"Masks what is typed. The value is still sent in clear text.")}
      </div>
    `}_fieldSecValueSource(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          ${this._entitySelector({entity:i.entity,onEntity:a=>o({entity:a}),attribute:i.attribute,onAttribute:a=>o({attribute:a})})}
          ${this._isTimeUntilVirtual(i)?this._renderTuLayoutBuilder(e,t,i,s):_}
      </div>
    `}_fieldSecValueLabel(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${i.label??""}
              placeholder="(optional)"
              @input=${a=>{const n=a.target.value;o({label:n||void 0})}}
            />`,"Text shown beside the value. Leave blank for none.")}
          ${i.label?r`
            ${this._row("Value Label position",r`<select class="ec-select"
                .value=${i.label_position??v("label_position")??"above"}
                @change=${a=>o({label_position:a.target.value})}
              >
                <option value="above"  .selected=${(i.label_position??v("label_position")??"above")==="above"}>Above value</option>
                <option value="below"  .selected=${i.label_position==="below"}>Below value</option>
                <option value="left"   .selected=${i.label_position==="left"}>Left of value</option>
                <option value="right"  .selected=${i.label_position==="right"}>Right of value</option>
              </select>`,"Where the label sits relative to the value.")}
            ${s?this._numRow("Label column",{value:i.label_column,onChange:a=>o({label_column:a}),min:1,max:4,placeholder:"(same cell)",hint:"Puts the label in its own column of the popover grid."}):_}
          `:_}
          ${this._row("Icon",r`<select class="ec-select"
              .value=${i.icon_position??"none"}
              @change=${a=>{const n=a.target.value;o({icon_position:n==="none"?void 0:n})}}
            >
              <option value="none"  .selected=${(i.icon_position??"none")==="none"}>No icon</option>
              <option value="left"  .selected=${i.icon_position==="left"}>Left of value</option>
              <option value="right" .selected=${i.icon_position==="right"}>Right of value</option>
              <option value="above" .selected=${i.icon_position==="above"}>Above value</option>
              <option value="below" .selected=${i.icon_position==="below"}>Below value</option>
            </select>`,"Shows the entity's own icon beside the value.")}
          ${i.icon_position&&i.icon_position!=="none"?this._row("Icon (override)",this._iconPicker(i.icon,a=>o({icon:a}),"(entity icon)"),"A picked icon shown instead of the entity's own."):_}
      </div>
    `}_fieldSecLabelContent(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          ${this._row("Text",r`<input class="ec-input" type="text" .value=${i.text??""}
                @change=${a=>o({text:a.target.value})}
              />`)}
          ${this._row("Icon",this._iconPicker(i.icon,a=>o({icon:a})),"Optional icon shown with the text.")}
          ${i.icon?this._row("Icon position",r`<select class="ec-select"
              .value=${i.icon_position??v("icon_position")??"left"}
              @change=${a=>o({icon_position:a.target.value})}
            >
              <option value="left"  .selected=${(i.icon_position??v("icon_position")??"left")==="left"}>Left of text</option>
              <option value="right" .selected=${i.icon_position==="right"}>Right of text</option>
              <option value="above" .selected=${i.icon_position==="above"}>Above text</option>
              <option value="below" .selected=${i.icon_position==="below"}>Below text</option>
            </select>`,"Where the icon sits relative to the text."):_}
      </div>
    `}_fieldSecIcon(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.icon_rules??[],n=l=>o({icon_rules:l.length?l:void 0});return r`
      <div class="ec-section">
          ${this._row("Icon",this._iconPicker(i.icon,l=>o({icon:l}),i.entity?"(entity icon)":""),i.entity?"Shown when no rule below matches. Leave blank to use the entity's own icon.":"An mdi icon name, e.g. mdi:lightbulb.")}

          <div class="ec-subsection-title">Icon by state</div>
          ${this._entitySelector({entity:i.entity,onEntity:l=>o({entity:l}),includeVirtuals:!1,attribute:i.attribute,onAttribute:l=>o({attribute:l})})}
          <p class="ec-hint">Leave <b>Entity</b> blank for a fixed icon. Set one and the field shows the icon whose rule matches that entity's state — falling back to the <b>Icon</b> above, or to the entity's own icon.</p>
          ${i.entity?r`
            <div class="ec-subsection-title">Rules</div>
            ${a.length===0?this._emptyAdd("No rules yet — add one",()=>n([...a,{}])):a.map((l,c)=>r`
                <div style="display:flex;gap:4px;align-items:center;margin-bottom:4px;">
                  <input class="ec-input" type="text" style="flex:1;min-width:0;" placeholder="state value"
                    .value=${l.value??""}
                    @change=${d=>n(a.map((h,u)=>u===c?{...h,value:d.target.value}:h))}
                  />
                  <div style="flex:1.4;min-width:0;">
                    ${this._iconPicker(l.icon,d=>n(a.map((h,u)=>u===c?{...h,icon:d}:h)))}
                  </div>
                  <button class="ec-btn-remove" title="Remove rule"
                    @click=${()=>n(a.filter((d,h)=>h!==c))}>✕</button>
                </div>
              `)}
            <div style="display:flex;gap:6px;margin-top:6px;">
              <button class="ec-btn-add" @click=${()=>n([...a,{}])}>+ Rule</button>
            </div>
            <p class="ec-hint">Each rule stands alone — one state value, one icon. A value matches the state as text, as a number (<code>21</code> matches <code>21.0</code>) or as a boolean (<code>true</code> matches <code>on</code>). A matching rule with no icon picked shows <b>no icon</b> for that state, instead of falling back.</p>
          `:_}
      </div>
    `}_fieldSecSvgSource(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">

          ${!i.svg||this._isThermometerSvg(i)||this._isBatterySvg(i)||this._isInverterSvg(i)||this._isGaugeSvg(i)?this._entitySelector({entity:i.entity,onEntity:a=>o({entity:a}),attribute:i.attribute,onAttribute:a=>o({attribute:a})}):_}
          ${this._isBatterySvg(i)?this._entitySelector({label:"Charging entity",entity:i.charging_entity,onEntity:a=>o({charging_entity:a}),attribute:i.charging_attribute,onAttribute:a=>o({charging_attribute:a})}):_}
          ${i.svg&&!this._isThermometerSvg(i)&&!this._isBatterySvg(i)&&!this._isInverterSvg(i)&&!this._isGaugeSvg(i)?r`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._entitySelector({label:"% entity",entity:i.tank_pct_entity,onEntity:a=>o({tank_pct_entity:a}),attribute:i.tank_pct_attribute,onAttribute:a=>o({tank_pct_attribute:a})})}
            ${this._entitySelector({label:"Flow In/Out Entity",entity:i.tank_volume_entity,onEntity:a=>o({tank_volume_entity:a}),attribute:i.tank_volume_attribute,onAttribute:a=>o({tank_volume_attribute:a})})}
            ${this._entitySelector({label:"Capacity entity",entity:i.tank_capacity_entity,onEntity:a=>o({tank_capacity_entity:a}),attribute:i.tank_capacity_attribute,onAttribute:a=>o({tank_capacity_attribute:a})})}
          `:_}
      </div>
    `}_fieldSecSvgRange(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
            ${this._numRow("Min value",{value:i.min,onChange:a=>o({min:a}),placeholder:"0",hint:"Entity value that draws the graphic empty."})}
            ${this._numRow("Max value",{value:i.max,onChange:a=>o({max:a}),placeholder:"100",hint:"Entity value that draws the graphic full."})}
      </div>
    `}_fieldSecSvgColors(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`;return r`
      <div class="ec-section">
          ${i.svg&&!this._isInverterSvg(i)?this._row("Fill direction",r`<select class="ec-select"
              .value=${i.fill_direction??v("fill_direction")??"up"}
              @change=${n=>o({fill_direction:n.target.value})}
            >
              <option value="up"    .selected=${(i.fill_direction??v("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
              <option value="down"  .selected=${i.fill_direction==="down"}>Down</option>
              <option value="left"  .selected=${i.fill_direction==="left"}>Left</option>
              <option value="right" .selected=${i.fill_direction==="right"}>Right</option>
            </select>`,"Which way the graphic fills as the value rises. It also sets a gradient’s direction unless Gradient angle overrides it."):_}
          ${this._isInverterSvg(i)?this._row("Line color",this._colorPicker(`${a}-fc`,i.fill_color,n=>o({fill_color:n})),"Colour of the graphic's outline."):this._gradientRows({id:`${a}-fc`,label:"Fill color",toLabel:"Gradient to",color:i.fill_color,color2:i.fill_color2,angle:i.fill_angle,anglePlaceholder:"fill direction",colorHint:"The colour the graphic fills with.",angleHint:Ut,setColor:n=>o({fill_color:n}),setColor2:n=>o({fill_color2:n}),setAngle:n=>o({fill_angle:n}),clearGradient:()=>o({fill_color2:void 0,fill_angle:void 0})})}
          ${i.svg&&!this._isThermometerSvg(i)&&!this._isBatterySvg(i)&&!this._isInverterSvg(i)&&!this._isGaugeSvg(i)?this._row("Tank color",this._colorPicker(`${a}-tkc`,i.tank_color,n=>o({tank_color:n}),{clearTitle:"Remove (use SVG default)",onClear:()=>o({tank_color:void 0})}),"Colour of the tank body behind the fill."):_}
      </div>
    `}_fieldSecSvgSize(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          ${this._numRow("Height (px)",{value:i.height,onChange:a=>o({height:a}),min:20,placeholder:"120"})}
          ${this._numRow("Width (px)",{value:i.width,onChange:a=>o({width:a}),min:10,placeholder:"auto"})}
      </div>
    `}_fieldSecSvgThresholds(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`;return r`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(i.thresholds??[]).map((n,l)=>r`
              <div class="ec-row">
                ${this._numWrap(r`<input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(n.value)}
                  @change=${c=>{const d=[...i.thresholds??[]];d[l]={...n,value:Number(c.target.value)},o({thresholds:d})}}
                />`)}
                <div style="flex:1">
                  ${this._colorPicker(`${a}-t${l}`,n.color,c=>{const d=[...i.thresholds??[]];d[l]={...n,color:c??n.color},o({thresholds:d})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const c=(i.thresholds??[]).filter((d,h)=>h!==l);o({thresholds:c.length?c:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const n=[...i.thresholds??[],{value:0,color:"#f44336"}];o({thresholds:n})}}>+ Threshold</button>
      </div>
    `}_fieldSecGraphStates(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`,n=i.graph_state_colors??[],l=c=>o({graph_state_colors:c.length?c:void 0});return r`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Pin a colour to a state by name — <code>on</code>, <code>off</code>,
              <code>heat</code>, <code>home</code>. Capitalisation does not matter. Any
              state you do not list still gets its own colour automatically.
            </p>
            ${n.map((c,d)=>r`
              <div class="ec-row">
                <input class="ec-input" type="text" style="width:100px" .value=${c.state}
                  placeholder="state"
                  @change=${h=>{const u=[...n];u[d]={...c,state:h.target.value},l(u)}}
                />
                <div style="flex:1">
                  ${this._colorPicker(`${a}-sc${d}`,c.color,h=>{const u=[...n];u[d]={...c,color:h??c.color},l(u)},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>l(n.filter((h,u)=>u!==d))}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>l([...n,{state:"",color:"#7ecb20"}])}>+ State</button>
      </div>
    `}_fieldSecGraphBands(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`,n=i.graph_thresholds??i.thresholds??[],l=c=>o({graph_thresholds:c.length?c:void 0,thresholds:void 0});return r`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each band colours the arc from its level upwards, so the gauge shows how far
              into which band the current value sits. Without any, the arc is one colour.
            </p>
            ${n.map((c,d)=>r`
              <div class="ec-row">
                ${this._numWrap(r`<input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(c.value)}
                  @change=${h=>{const u=[...n];u[d]={...c,value:Number(h.target.value)},l(u)}}
                />`)}
                <div style="flex:1">
                  ${this._colorPicker(`${a}-gb${d}`,c.color,h=>{const u=[...n];u[d]={...c,color:h??c.color},l(u)},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>l(n.filter((h,u)=>u!==d))}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>l([...n,{value:0,color:"#f44336"}])}>+ Band</button>
      </div>
    `}_fieldSecSvgGauge(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`;return r`
      <div class="ec-section">
            ${this._row("Min label",r`<input class="ec-input" type="text" .value=${i.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${n=>{const l=n.target.value;o({gauge_min_label:l||void 0})}}
              />`,"Text under the low end of the arc. Unset shows the Min value.")}
            ${this._row("Max label",r`<input class="ec-input" type="text" .value=${i.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${n=>{const l=n.target.value;o({gauge_max_label:l||void 0})}}
              />`,"Text under the high end of the arc. Unset shows the Max value.")}
            ${this._row("Show value",r`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${i.gauge_show_value??!1}
                  @change=${n=>o({gauge_show_value:n.target.checked||void 0})}
                />
                <span>Display current value in centre</span>
              </label>`,"Shows the current value in the middle of the gauge.")}
            ${this._numRow("Label size (px)",{value:i.gauge_label_size,onChange:n=>o({gauge_label_size:n}),min:6,max:48,placeholder:"11",hint:"Size of the min, max and centre text."})}
            ${this._row("Label color",this._colorPicker(`${a}-glc`,i.gauge_label_color,n=>o({gauge_label_color:n}),{clearTitle:"Reset to default"}),"Colour of the min, max and centre text.")}
      </div>
    `}_fieldSecSvgThermo(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`;return r`
      <div class="ec-section">
            ${this._row("Tick color",this._colorPicker(`${a}-ttc`,i.thermo_tick_color,n=>o({thermo_tick_color:n||void 0}),{clearTitle:"Reset to default"}),U.tick_color)}
            ${this._row("Tick position",r`<select class="ec-select"
                .value=${i.thermo_text_position??v("thermo_text_position")??"right"}
                @change=${n=>o({thermo_text_position:n.target.value})}
              >
                ${["right","left","both"].map(n=>r`<option value=${n} .selected=${(i.thermo_text_position??v("thermo_text_position")??"right")===n}>${this._isHorizontalThermometerSvg(i)?{right:"Bottom",left:"Top",both:"Both"}[n]:n.charAt(0).toUpperCase()+n.slice(1)}</option>`)}
              </select>`,U.tick_position)}
            ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                .checked=${i.thermo_show_minor_tick_text??v("thermo_show_minor_tick_text")??!1}
                @change=${n=>o({thermo_show_minor_tick_text:n.target.checked})} />`,U.minor_tick_text)}
            ${this._numRow("Tick font size",{hint:U.tick_font_size,value:i.thermo_tick_font_size,onChange:n=>o({thermo_tick_font_size:n}),min:1,max:20,step:.5,placeholder:"4"})}
            ${this._numRow("Major tick length",{value:i.thermo_major_tick_length,onChange:n=>o({thermo_major_tick_length:n}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
            ${this._numRow("Major tick thickness",{value:i.thermo_major_tick_width,onChange:n=>o({thermo_major_tick_width:n}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
            ${this._numRow("Minor tick length",{value:i.thermo_minor_tick_length,onChange:n=>o({thermo_minor_tick_length:n}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
            ${this._numRow("Minor tick thickness",{value:i.thermo_minor_tick_width,onChange:n=>o({thermo_minor_tick_width:n}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
            ${this._row("Grid line color",this._colorPicker(`${a}-tgc`,i.thermo_grid_color,n=>o({thermo_grid_color:n||void 0}),{clearTitle:"Reset to default"}),U.grid_color)}
            ${this._numRow("Above temperature transparency",{value:i.thermo_fill_opacity_above,onChange:n=>o({thermo_fill_opacity_above:n}),min:0,max:1,step:.05,placeholder:"0.5"})}
            <p class="ec-hint">How visible the tube is above the current reading — 0 hides the empty part
              entirely, 1 draws it in full.</p>
            ${this._numRow("Decimals",{hint:U.decimals,value:i.thermo_decimals,onChange:n=>o({thermo_decimals:n}),min:0,max:4,step:1,placeholder:"1"})}
            ${this._row("Temperature value color",this._colorPicker(`${a}-tvc`,i.thermo_temp_color,n=>o({thermo_temp_color:n||void 0}),{clearTitle:"Reset to default"}),U.temp_color)}
            ${this._numRow("Temperature value size",{value:i.thermo_temp_font_size,onChange:n=>o({thermo_temp_font_size:n}),min:4,max:30,step:.5,placeholder:"10"})}
      </div>
    `}_fieldSecGraphSettings(e,t,i,s=!1){const o=this._updFor(e,t,s),a=i.graph_type??v("graph_type")??"bar",n=st(a),{history:l,stroke:c,range:d,yTitle:h,bars:u,gauge:g,timeline:b}=n;return r`
      <div class="ec-section">

          ${this._row("Type",r`<select class="ec-select"
              .value=${i.graph_type??v("graph_type")??"bar"}
              @change=${m=>o({graph_type:m.target.value})}
            >
              ${ot.map(m=>r`<option value=${m.value} .selected=${(i.graph_type??v("graph_type")??"bar")===m.value}>${m.label}</option>`)}
            </select>`,"Which chart this field draws. Line and area charts read history; bar and gauge read statistics.")}
          ${this._row("Show axes",r`<input type="checkbox" .checked=${i.graph_show_axes??v("graph_show_axes")??!0}
              @change=${m=>o({graph_show_axes:m.target.checked||void 0})}
            />`,"Draws the axis lines and their labels.")}
          ${this._row("Show legend",r`<input type="checkbox" .checked=${i.graph_show_legend??v("graph_show_legend")??!1}
              @change=${m=>o({graph_show_legend:m.target.checked||void 0})}
            />`,"Names each series beside the chart.")}
          ${i.graph_show_legend??v("graph_show_legend")??!1?this._row("Legend position",r`<select class="ec-select"
              .value=${i.graph_legend_position??v("graph_legend_position")??"bottom"}
              @change=${m=>o({graph_legend_position:m.target.value})}
            >
              ${Fs.map(m=>r`<option value=${m.value} .selected=${(i.graph_legend_position??v("graph_legend_position")??"bottom")===m.value}>${m.label}</option>`)}
            </select>`,"Left and right stack the names in a column and take their width from the chart."):_}
          ${u?this._row("Bar value labels",r`<input type="checkbox" .checked=${i.graph_bar_labels??v("graph_bar_labels")??!1}
              @change=${m=>o({graph_bar_labels:m.target.checked||void 0})}
            />`,"Prints each bar’s value at its end."):_}
          ${d?this._numRow("Min value",{value:i.graph_min,onChange:m=>o({graph_min:m}),placeholder:"auto",hint:"Unset scales the axis to the data, rounded to a whole gridline."}):_}
          ${d?this._numRow("Max value",{value:i.graph_max,onChange:m=>o({graph_max:m}),placeholder:"auto",hint:"Unset scales the axis to the data, rounded to a whole gridline."}):_}
          ${c?this._row("Start axis at zero",r`<input type="checkbox" .checked=${i.graph_include_zero??v("graph_include_zero")??!1}
              @change=${m=>o({graph_include_zero:m.target.checked||void 0})}
            />`,"Off, the chart scales to its data — a sensor that only moves between 18 and 24 fills the chart instead of hugging the top of a 0–24 axis. Bars always start at zero."):_}
          ${d?this._numRow("Gridlines",{value:i.graph_tick_count,onChange:m=>o({graph_tick_count:m}),min:2,max:12,placeholder:"auto",hint:"Unset picks a count that suits the chart’s height and label size."}):_}
          ${this._numRow("Decimals",{value:i.graph_precision,onChange:m=>o({graph_precision:m}),min:0,max:6,placeholder:"from entity",hint:"Applies to axis labels, bar labels, gauge readouts and tooltips. Unset follows the entity’s own display precision."})}
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${i.graph_unit??""}
              placeholder="(from entity)"
              @change=${m=>o({graph_unit:m.target.value||void 0})}
            />`,"Shown against the axis. Unset takes the entity’s own unit.")}
          ${h?this._row("Y-axis title",r`<input class="ec-input" type="text" .value=${i.graph_y_title??""}
              placeholder="(none)"
              @change=${m=>o({graph_y_title:m.target.value||void 0})}
            />`,"Rotated label down the left of the plot."):_}
          ${this._numRow("Width (px)",{value:i.width,onChange:m=>o({width:m}),min:60,placeholder:"auto"})}
          ${this._numRow("Height (px)",{value:i.height,onChange:m=>o({height:m}),min:40,placeholder:"auto"})}
          ${l?this._numRow("History (hours)",{value:i.graph_hours,onChange:m=>o({graph_hours:m}),min:1,max:8760,placeholder:"24",hint:"How far back the chart reaches."}):_}
          ${c?this._numRow("Stroke width",{value:i.graph_stroke_width,onChange:m=>o({graph_stroke_width:m}),min:.5,max:10,step:.5,placeholder:"1.5"}):_}
          ${c?this._row("Line shape",r`<select class="ec-select"
              .value=${i.graph_curve??v("graph_curve")??"linear"}
              @change=${m=>o({graph_curve:m.target.value})}
            >
              ${Os.map(m=>r`<option value=${m.value} .selected=${(i.graph_curve??v("graph_curve")??"linear")===m.value}>${m.label}</option>`)}
            </select>`,"Straight joins the readings as they came. Smoothed rounds the corners without inventing peaks between them. Stepped holds each value until the next reading, which is what a meter or a setpoint actually does."):_}
          ${c?this._row("Point markers",r`<input type="checkbox" .checked=${i.graph_points??v("graph_points")??!1}
              @change=${m=>o({graph_points:m.target.checked||void 0})}
            />`,"A dot at every reading. Dropped automatically when the readings are too close together to tell apart."):_}
          ${c?this._row("Label latest value",r`<input type="checkbox" .checked=${i.graph_last_point??v("graph_last_point")??!1}
              @change=${m=>o({graph_last_point:m.target.checked||void 0})}
            />`,"Marks the most recent reading of each series and prints its value beside it."):_}
          ${this._numRow("Refresh (min)",{value:i.graph_refresh_minutes,onChange:m=>o({graph_refresh_minutes:m}),min:1,max:1440,placeholder:"from dashboard",hint:"How often this graph re-queries Home Assistant. Unset follows the dashboard’s Graph refresh. A week-long chart has no reason to poll as often as a live gauge."})}
          ${b?this._row("Entity name",r`<select class="ec-select"
              .value=${i.graph_timeline_label??v("graph_timeline_label")??"above"}
              @change=${m=>o({graph_timeline_label:m.target.value})}
            >
              ${Ds.map(m=>r`<option value=${m.value} .selected=${(i.graph_timeline_label??v("graph_timeline_label")??"above")===m.value}>${m.label}</option>`)}
            </select>`,"Where the plotted entity is named, above the state legend. The legend lists the states present, so without this nothing on the chart says which entity it is. Left of the bar only has the width the bar gives up, so it suits short names."):_}
          ${b?this._row("Show state names",r`<input type="checkbox" .checked=${i.graph_show_state_names??v("graph_show_state_names")??!1}
              @change=${m=>o({graph_show_state_names:m.target.checked||void 0})}
            />`,"Prints the state inside each block wide enough to hold it."):_}
          ${b?this._row("Unavailable colour",this._colorPicker(`${s?`ext${e}-f${t}`:`c${e}-f${t}`}-unav`,i.graph_unavailable_color,m=>o({graph_unavailable_color:m}),{clearTitle:"Reset to default"}),"Used for unavailable and unknown, so a gap in the record does not read as a real state."):_}
          ${g?this._row("Tick marks",r`<input type="checkbox" .checked=${i.graph_gauge_ticks??v("graph_gauge_ticks")??!1}
              @change=${m=>o({graph_gauge_ticks:m.target.checked||void 0})}
            />`,"Marks around the arc at the same values a chart axis would label."):_}
          ${g?this._numRow("Sweep (degrees)",{value:i.graph_gauge_sweep,onChange:m=>o({graph_gauge_sweep:m}),min:30,max:350,step:5,placeholder:"270",hint:"How far the arc travels, centred on twelve o’clock. 180 gives a half circle."}):_}
          ${g?this._row("Caption",r`<input class="ec-input" type="text" .value=${i.graph_gauge_label??""}
              placeholder="(none)"
              @change=${m=>o({graph_gauge_label:m.target.value||void 0})}
            />`,"Printed under the gauge’s value."):_}
          ${a==="area"?this._numRow("Fill opacity",{value:i.graph_fill_opacity,onChange:m=>o({graph_fill_opacity:m}),min:0,max:1,step:.05,placeholder:"0.2",hint:"How solid the area under a line is. 0 leaves the line alone."}):_}
      </div>
    `}_fieldSecGraphChrome(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`,n=(l,c,d,h,u)=>this._row(l,this._colorPicker(`${a}-${c}`,d,g=>o(h(g||void 0)),{clearTitle:"Reset to default"}),u);return r`
      <div class="ec-section">
        <p class="ec-hint">Empty means the shipped default. These stay fixed rather than following the
          theme — they sit over the card's background image, where the transparency is what keeps them legible.</p>
        ${n("Axis line","gac",i.graph_axis_color,l=>({graph_axis_color:l}),"Colour of the two axis lines.")}
        ${n("Grid lines","ggc",i.graph_grid_color,l=>({graph_grid_color:l}),"Colour of the lines across the plot area.")}
        ${n("Zero line","gzc",i.graph_zero_line_color,l=>({graph_zero_line_color:l}),"Colour of the line at zero, where the data crosses it.")}
        ${n("Empty-bar stub","gbc",i.graph_baseline_color,l=>({graph_baseline_color:l}),"Colour of the small marker drawn where a bar's value is zero.")}
        ${n("Axis labels","glc",i.graph_label_color,l=>({graph_label_color:l}),"Colour of the numbers and dates along the axes.")}
        ${this._numRow("Label size (px)",{value:i.graph_label_size,onChange:l=>o({graph_label_size:l}),min:5,max:24,placeholder:"auto (per chart)",hint:"Unset lets each chart keep its own natural label size."})}
        ${n("Unit label","guc",i.graph_unit_label_color,l=>({graph_unit_label_color:l}),"Colour of the unit shown beside the axis.")}
        ${n("Legend label","gllc",i.graph_legend_label_color,l=>({graph_legend_label_color:l}),"Colour of the series names under the chart.")}
        ${n("In-bar label","gblc",i.graph_bar_label_color,l=>({graph_bar_label_color:l}),"Colour of the value printed inside a bar.")}
        ${n("Gauge track","ggtc",i.graph_gauge_track_color,l=>({graph_gauge_track_color:l}),"Colour of the unfilled part of a gauge's arc.")}
        ${n("Gauge value text","ggvc",i.graph_gauge_value_color,l=>({graph_gauge_value_color:l}),"Colour of the number in the middle of a gauge.")}
        <div class="ec-subsection-title">Series palette</div>
        <p class="ec-hint">Colour cycle for series without a colour of their own. Series order picks
          from this list; a series with its own colour always wins.</p>
        ${(i.graph_palette??v("graph_palette")??[]).map((l,c)=>r`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            <span style="font-size:11px;opacity:0.6;white-space:nowrap;width:18px;">${c+1}</span>
            <div style="flex:1;min-width:0;">
              ${this._colorPicker(`${a}-gp${c}`,l,d=>{const h=[...i.graph_palette??v("graph_palette")??[]];h[c]=d??"",o({graph_palette:h})},{clearable:!1})}
            </div>
            <button class="ec-btn-remove" title="Remove" @click=${()=>{const d=[...i.graph_palette??v("graph_palette")??[]];d.splice(c,1),o({graph_palette:d.length?d:void 0})}}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>{const l=[...i.graph_palette??v("graph_palette")??[]];o({graph_palette:[...l,"#00d4ff"]})}}>+ Colour</button>
      </div>
    `}_fieldSecGraphSeries(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?"egs":"gs";return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Series — drag to reorder</div>
          ${(i.graph_series??[]).length===0?this._emptyAdd("No series yet — add one",()=>o({graph_series:[...i.graph_series??[],{}]})):(i.graph_series??[]).map((n,l)=>this._itemCard({dragKey:`${a}:${e}:${t}:${l}`,icon:"mdi:chart-line",label:n.label||n.entity||`Series ${l+1}`,sub:n.label&&n.entity?n.entity:n.entity?`Series ${l+1}`:"No entity selected",selected:l===(s?this._selExtSeries:this._selSeries),onClick:()=>{s?this._selExtSeries=l:this._selSeries=l,this._navPush(`${a}:${l}`,n.label||n.entity||`Series ${l+1}`)},actions:r`
                  <button class="ec-btn-dup" title="Duplicate series"
                    @click=${c=>{c.stopPropagation(),this._duplicateGraphSeries(e,t,l,s)}}>⧉</button>
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${c=>{c.stopPropagation();const d=(i.graph_series??[]).filter((h,u)=>u!==l);o({graph_series:d.length?d:void 0})}}>✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>{const n=[...i.graph_series??[],{}];o({graph_series:n})}}>+ Series</button>
      </div>
    `}_fieldSecGraphSeriesItem(e,t,i,s,o=!1){const a=o?`ext${e}-f${t}`:`c${e}-f${t}`,n=(i.graph_series??[])[s];if(!n)return this._navDeadEnd();const l=c=>this._updSeries(e,t,s,i,c,o);return r`
      <div class="ec-section">
              <div class="ec-subsection-title">Entity</div>
              ${this._entitySelector({entity:n.entity,onEntity:c=>{const d=n.stat_type?void 0:this._defaultStatType(c);l({entity:c,...d?{stat_type:d}:{}})},attribute:n.attribute,onAttribute:c=>l({attribute:c})})}
              <div class="ec-subsection-title">Appearance</div>
              ${this._row("Value Label (Optional)",r`<input class="ec-input" type="text" .value=${n.label??""}
                  placeholder="(from entity)"
                  @change=${c=>l({label:c.target.value||void 0})}
                />`,"Name for this series in the legend. Unset uses the entity's name.")}
              ${this._row("Color",this._colorPicker(`${a}-s${s}-col`,n.color,c=>l({color:c}),{clearTitle:"Reset to palette color"}),"Unset takes the next colour from the palette in Graph Style.")}
              <div class="ec-subsection-title">Data</div>
              ${this._row("Stat period",r`<select class="ec-select"
                  .value=${n.stat_period??""}
                  @change=${c=>l({stat_period:c.target.value||void 0})}
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
              ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(n.stat_period)?this._row(n.stat_period==="last_n_minutes"?"Number of minutes":n.stat_period==="last_n_hours"?"Number of hours":n.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(r`<input type="number" class="ec-input ec-input-num" min="1" step="1"
                  .value=${String(n.stat_period_n??"")}
                  placeholder="e.g. 3"
                  @change=${c=>{const d=parseInt(c.target.value,10);l({stat_period_n:isNaN(d)||d<1?void 0:d})}}
                />`)):_}
              ${(()=>{const c=i.graph_type??v("graph_type")??"bar",d=st(c);if(!d.statType)return _;const h=d.history,u=n.stat_type??(h?v("stat_type_history")??"mean":v("stat_type")??"sum"),g=!h||u==="difference";return r`
                  ${this._row("Stat type",r`<select class="ec-select"
                      .value=${u}
                      @change=${b=>l({stat_type:b.target.value})}
                    >
                      ${h?r`<option value="state" .selected=${u==="state"}>Raw value (no aggregation)</option>`:_}
                      ${h?r`<option value="change" .selected=${u==="change"}>Change (per bucket)</option>`:_}
                      <option value="sum"  .selected=${u==="sum"}>Sum (total)</option>
                      ${g?r`<option value="difference" .selected=${u==="difference"}>
                        Difference (end − start)${h?" — not supported here":""}
                      </option>`:_}
                      <option value="mean" .selected=${u==="mean"}>Mean (average)</option>
                      <option value="max"  .selected=${u==="max"}>Maximum</option>
                      <option value="min"  .selected=${u==="min"}>Minimum</option>
                    </select>`)}
                  ${h?r`<p class="ec-hint">Applied per history bucket.${u==="difference"?' "Difference" has no meaning for history buckets — pick another type.':u==="state"?" Shows the last reading every 5 minutes, unaveraged — only available for roughly the last 10 days (Home Assistant’s short-term statistics retention), and only for a cumulative meter entity (state_class total/total_increasing); an ordinary measurement sensor (e.g. instantaneous power) never has this and will show no data — use Mean/Max/Min for those.":u==="change"?" Shows how much the entity advanced during each bucket — also only recorded for a cumulative meter entity (state_class total/total_increasing); an ordinary measurement sensor never has this either.":""}</p>`:_}
                `})()}
      </div>
    `}_fieldSecStats(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Entity field at it.</p>
          ${this._row("Period",r`<select class="ec-select"
              .value=${i.stat_period??""}
              @change=${a=>{const n=a.target.value,l=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(n);o({stat_period:n||void 0,stat_period_n:l?i.stat_period_n??void 0:void 0,stat_period_start:n==="custom"?i.stat_period_start??void 0:void 0,stat_period_end:n==="custom"?i.stat_period_end??void 0:void 0})}}
            >
              <option value="">Live state (no stats)</option>
              <optgroup label="Calendar">
                <option value="today"      .selected=${i.stat_period==="today"}>Today</option>
                <option value="yesterday"  .selected=${i.stat_period==="yesterday"}>Yesterday</option>
                <option value="this_week"  .selected=${i.stat_period==="this_week"}>This week</option>
                <option value="last_week"  .selected=${i.stat_period==="last_week"}>Last week</option>
                <option value="this_month" .selected=${i.stat_period==="this_month"}>This month</option>
                <option value="last_month" .selected=${i.stat_period==="last_month"}>Last month</option>
                <option value="this_year"  .selected=${i.stat_period==="this_year"}>This year</option>
                <option value="last_year"  .selected=${i.stat_period==="last_year"}>Last year</option>
              </optgroup>
              <optgroup label="Rolling window">
                <option value="last_30_minutes" .selected=${i.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                <option value="last_hour"        .selected=${i.stat_period==="last_hour"}>Last hour</option>
                <option value="last_n_minutes"   .selected=${i.stat_period==="last_n_minutes"}>Last N minutes</option>
                <option value="last_n_hours"     .selected=${i.stat_period==="last_n_hours"}>Last N hours</option>
                <option value="last_n_days"      .selected=${i.stat_period==="last_n_days"}>Last N days</option>
                <option value="last_n_months"    .selected=${i.stat_period==="last_n_months"}>Last N months</option>
              </optgroup>
              <optgroup label="Custom range">
                <option value="custom" .selected=${i.stat_period==="custom"}>Custom date/time range</option>
              </optgroup>
            </select>`)}
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(i.stat_period)?this._row(i.stat_period==="last_n_minutes"?"Number of minutes":i.stat_period==="last_n_hours"?"Number of hours":i.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(r`<input type="number" class="ec-input ec-input-num" min="1" step="1"
              .value=${String(i.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${a=>{const n=parseInt(a.target.value,10);o({stat_period_n:isNaN(n)||n<1?void 0:n})}}
            />`)):_}
          ${i.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input"
              .value=${i.stat_period_start??""}
              @change=${a=>o({stat_period_start:a.target.value||void 0})}
            />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input"
              .value=${i.stat_period_end??""}
              @change=${a=>o({stat_period_end:a.target.value||void 0})}
            />`)}
          `:_}
          ${i.stat_period?this._row("Stat type",r`<select class="ec-select"
              .value=${i.stat_type??v("stat_type")??"sum"}
              @change=${a=>o({stat_type:a.target.value})}
            >
              <option value="sum"        .selected=${(i.stat_type??v("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${i.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${i.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${i.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${i.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${i.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${i.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",r`<select class="ec-select"
              .value=${i.stat_characteristic??""}
              @change=${a=>{const n=a.target.value;o({stat_characteristic:n||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(a=>r`
                <optgroup label="${a}">
                  ${tt.filter(n=>n.group===a).map(n=>r`
                    <option value=${n.value} .selected=${i.stat_characteristic===n.value}>
                      ${n.label}${n.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${i.stat_characteristic==="percentile"?this._numRow("Percentile (1–99)",{value:i.stat_percentile,onChange:a=>o({stat_percentile:a}),min:1,max:99,placeholder:"50"}):_}
          ${this._numRow("Max age (hours)",{value:i.stat_max_age_hours,onChange:a=>o({stat_max_age_hours:a}),min:1,placeholder:"(none)"})}
          ${this._numRow("Sampling size",{value:i.stat_sampling_size,onChange:a=>o({stat_sampling_size:a}),min:1,placeholder:"(none)"})}
          ${i.stat_characteristic&&i.entity?r`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const a=Le(i.entity,i.stat_characteristic,i.stat_max_age_hours,i.stat_sampling_size,i.stat_percentile);navigator.clipboard.writeText(a)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${Le(i.entity,i.stat_characteristic,i.stat_max_age_hours,i.stat_sampling_size,i.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_fieldSecDisplay(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",r`<input class="ec-input" type="text" .value=${i.unit??""}
              placeholder=${this._displayUnit(i.entity,void 0)||"(from entity)"}
              @change=${a=>{const n=a.target.value;o({unit:n===""?void 0:n})}}
            />`,"Shown after the value. Unset uses the entity's own unit.")}
          ${this._numRow("Decimals",{value:i.decimals,onChange:a=>o({decimals:a}),min:0,max:6,placeholder:this._entityDecimalsHint(i.entity)?.toString()??"auto",hint:"Decimal places shown. Unset follows the entity's own precision."})}
          ${this._numRow("Hide below",{value:i.hide_below,onChange:a=>o({hide_below:a}),min:0,placeholder:"(always show)",hint:"Hides the field while the value is under this, compared unsigned (applies to negative values too)."})}
          ${this._displayUnit(i.entity,i.unit)?r`<p class="ec-hint">Enter in ${this._displayUnit(i.entity,i.unit)}</p>`:_}
          ${i.entity?.startsWith("virtual:")&&!i.time_until_layout?.length?this._row("Show trigger label",r`<input type="checkbox"
              .checked=${i.show_time_until_label??!1}
              @change=${a=>o({show_time_until_label:a.target.checked||void 0})}
            />`,"Shows the matching trigger label from the virtual entity instead of the number."):_}
      </div>
    `}_fieldSecStyle(e,t,i,s=!1){const o=this._updFor(e,t,s),a=s?`ext${e}-f${t}`:`c${e}-f${t}`;return r`
      <div class="ec-section">
          ${se(i.type)?_:this._row("Align",r`<select class="ec-select"
              .value=${i.align??v("align")??"left"}
              @change=${n=>o({align:n.target.value})}
            >
              ${Ce.map(n=>r`<option value=${n} .selected=${(i.align??v("align")??"left")===n}>${Ge[n]}</option>`)}
            </select>`,"Horizontal alignment of this field's own content — its text, or an icon field's glyph. Where the field sits in its column follows the card's Align.")}
          ${this._row("Use global text style",r`<input type="checkbox" .checked=${i.style===void 0}
              @change=${n=>{n.target.checked?o({style:void 0}):o({style:{}})}}
            />`,"Ticked, this field follows the card's text styles. Unticking gives it its own, starting empty.")}
          ${i.style!==void 0?r`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`${a}-st`,i.style,n=>o({style:{...i.style,...n}}),Gt)}
          `:_}
          ${this._cssRow(i.extra_css,n=>o({extra_css:n}))}
      </div>
    `}_fieldSecActions(e,t,i,s=!1){const o=this._updFor(e,t,s);return r`
      <div class="ec-section">
          <div class="ec-subsection-title">Actions</div>
          ${this._actionRows({tap_action:i.tap_action,hold_action:i.hold_action,double_tap_action:i.double_tap_action},a=>o(a))}
      </div>
    `}_renderDefaultsRibbonPanel(){const e=this._navPath;if(e.length===0)return this._defaultsSectionMenu();if(e[0].key==="sec:elements")return e.length===1?this._elemLibMenu():this._elemLibSection(e[1].key);if(e[0].key==="sec:control"){if(e.length===1)return this._controlDefaultsMenu();const t=e[1].key;return t==="cd:selector"||t==="cd:button"?e.length===2?this._selectorDefaultsMenu(t):this._selectorDefaultsSection(t,e[2].key):this._controlDefaultsSection(t)}return this._defaultsSection(e[0].key)}_defaultsScope(){return{root:this._config?.defaults,apply:e=>this._updateDefaults(e)}}_defaultsSectionMenu(){return this._navMenu(p._DEFAULTS_SECTIONS,this._defaultsScope())}_defaultsSection(e){const t=this._config?.defaults??{},i=this._clearOverridesBtn(p._findDef(p._DEFAULTS_SECTIONS,e),this._defaultsScope());return r`${i}${this._defaultsSectionBody(t,e)}`}_defaultsSectionBody(e,t){return t==="sec:card"?this._defaultsSecCard(e):t==="sec:popover"?r`
        ${this._clearOverridesBtn(p._POPOVER_GLOBAL_DEFAULTS_DEF,this._extDefaultsScope())}
        ${this._popoverGlobalDefaults()}
      `:t==="sec:embedded"?this._defaultsSecEmbedded(e):t==="sec:value"?r`<div class="ec-section">${this._textRows("d-value",e.value??{},i=>this._updateDefaults({value:{...e.value,...i}}))}</div>`:t==="sec:label"?r`<div class="ec-section">${this._textRows("d-label",e.label??{},i=>this._updateDefaults({label:{...e.label,...i}}))}</div>`:t==="sec:customcolors"?this._defaultsSecCustomColors():t==="sec:customvars"?this._defaultsSecCustomVars():t==="sec:layout"?this._defaultsSecLayout():t==="sec:reset"?this._defaultsSecReset():r``}_defaultsSecEmbedded(e){return r`
      <div class="ec-section">
        <div class="ec-subsection-title">Frame</div>
        <p class="ec-hint">Drawn on the element that <i>holds</i> the card, not on the card itself. An embedded
          card paints its own background and border, and those stay its own — turn on <b>Transparent</b> below
          to take them away and let this frame show through. Additional CSS here styles the frame: size it,
          move it, layer it.</p>
        ${this._boxRows("d-emb",e.embedded_card??{},t=>this._updateDefaults({embedded_card:{...e.embedded_card,...t}}))}

        <div class="ec-subsection-title">The card itself</div>
        ${this._row("Transparent",r`<input type="checkbox" .checked=${e.embedded_card_transparent??!1}
            @change=${t=>this._updateDefaults({embedded_card_transparent:t.target.checked||void 0})}
          />`)}
        <p class="ec-hint">Removes every embedded card's own background, border and shadow. A card can still
          set its own — untick <b>Use global transparency</b> on it to do that.</p>
        ${this._cssRow(e.embedded_card_extra_css,t=>this._updateDefaults({embedded_card_extra_css:t}),"Card CSS")}
        <p class="ec-hint">Applied to the card itself, not to the frame — this is where a
          <code>--ha-card-…</code> override or a font change goes. A card's own <b>Card CSS</b> is added after
          this rather than replacing it, so it wins where the two name the same property.</p>
      </div>
    `}_defaultsSecReset(){return r`
      <div class="ec-section">
        <ha-alert alert-type="warning">Clears all cards, flows, zones, and background settings, then restarts the setup wizard. This cannot be undone.</ha-alert>
        <div class="ec-wiz-reset-row">
          <button class="ec-wiz-btn-reset" @click=${this._resetToWizard}>⟳ Reset &amp; rerun setup wizard</button>
        </div>
      </div>
    `}_defaultsSecCard(e){const t=Rt(e,nt),i=Ue(void 0,e);return r`
      <div class="ec-section">
        <div class="ec-subsection-title">Field layout</div>
        <p class="ec-hint">How a Mosaic card arranges its fields unless the card sets its own. These live here rather than
          on <b>Layout &amp; Fonts</b> because they are Mosaic-only — a popover and an embedded card have no field
          placement of their own.</p>

        ${this._row("Field placement",r`<select class="ec-select"
            .value=${i}
            @change=${s=>{const o=s.target.value;this._updateDefaults({card_layout_mode:o==="flow"?void 0:o})}}
          >
            <option value="flow" .selected=${i==="flow"}>Flow</option>
            <option value="grid" .selected=${i==="grid"}>Grid</option>
          </select>`,"Flow stacks fields in the order they are listed. Grid divides the card into cells and each field names the row and column it sits in.")}

        ${this._row("Columns (flow)",r`<select class="ec-select"
            .value=${String(e.card_columns??v("card_columns")??1)}
            @change=${s=>{const o=Number(s.target.value);this._updateDefaults({card_columns:o===1?void 0:o})}}
          >
            ${[1,2,3,4,5,6,7,8].map(s=>r`
              <option value=${String(s)} .selected=${(e.card_columns??v("card_columns")??1)===s}>${s}</option>`)}
          </select>`,"How many columns a card's fields flow into. Only used in flow placement.")}

        ${this._row("Grid columns",r`${this._numInput({value:e.card_grid_columns??v("card_grid_columns")??4,onChange:s=>this._updateDefaults({card_grid_columns:s==null?void 0:Math.max(1,Math.min(8,s))}),min:1,max:8})}`,"How many cells across a card has in grid placement.")}
        ${this._row("Grid rows",r`${this._numInput({value:e.card_grid_rows??v("card_grid_rows")??4,onChange:s=>this._updateDefaults({card_grid_rows:s==null?void 0:Math.max(1,Math.min(20,s))}),min:1,max:20})}`,"How many cells down a card has in grid placement. The card divides its own height between them.")}
        ${this._numRow("Field gap (px)",{value:e.card_field_gap,onChange:s=>this._updateDefaults({card_field_gap:s}),min:0,placeholder:String(this._mosaicFieldGap()),hint:"In flow placement, the vertical space between fields. In grid placement the cells do that, so it is only the space between a field's own parts — its label and its value."})}
        ${this._numRow("Column gap (px)",{value:e.card_column_gap,onChange:s=>this._updateDefaults({card_column_gap:s}),min:0,placeholder:String(this._mosaicColumnGap()),hint:"Horizontal space between columns, in both placements."})}
        ${this._numRow("Grid row gap (px)",{value:e.card_grid_row_gap,onChange:s=>this._updateDefaults({card_grid_row_gap:s}),min:0,placeholder:String(this._mosaicFieldGap()),hint:"Vertical space between grid rows. Unset follows Field gap, so one value still themes a whole card."})}

        <div class="ec-subsection-title">Card box</div>
        ${this._boxRows("d-card",e.card??{},s=>this._updateDefaults({card:{...e.card,...s}}))}

        <div class="ec-subsection-title">Card text</div>
        <p class="ec-hint">What every field, control label and popup title falls back to when nothing more specific is set. Cards sit over your background image, so this stays fixed rather than following the theme.</p>
        ${this._row("Default text color",this._colorPicker("d-cardtext",e.card_text_color,s=>this._updateDefaults({card_text_color:s||void 0}),{clearTitle:"Reset to default"}))}

        <div class="ec-subsection-title">Popups</div>
        <p class="ec-hint">How an expanded Mosaic card looks when it opens over the dashboard. A popover's own dimming is set in <b>Popover Card Defaults</b>; the close button below is shared by both.</p>
        ${this._row("Dimming",r`
          <select class="ec-select"
            @change=${s=>this._setPopupDimming(s.target.value,nt)}
          >
            ${t===void 0?r`<option value="" selected>Custom</option>`:_}
            ${Object.keys(me).map(s=>r`
              <option value=${s} .selected=${t===s}>${me[s].label} — ${me[s].hint}</option>`)}
          </select>`)}
        ${t===void 0?r`<p class="ec-hint">These colors were set by hand in YAML, so no preset describes them. Picking one replaces them.</p>`:_}
        <p class="ec-hint">An overlay's corners follow the card's own <b>Border radius</b> above — the panel behind it has no colour of its own, so a second radius here only fought the one setting that is visible.</p>
      </div>
    `}_setPopupDimming(e,t=Ui){if(!(e in me))return;const i=me[e].values,s={};for(const o of t)s[o]=v(o)===i[o]?void 0:i[o];this._updateDefaults(s)}static _custName(e){return e.trim().replace(/[^a-zA-Z0-9_-]/g,"_")}_custDuplicateNames(){const e=new Set,t=new Set;for(const[i]of Tt(this._config?.defaults)){const s=i.slice(9);e.has(s)&&t.add(s),e.add(s)}return t}_custNameInput(e,t,i){const s=e!==""&&t.has(e);return r`
      <span style="font-size:11px;opacity:0.6;white-space:nowrap;">mccust_</span>
      <input class="ec-input" type="text" placeholder="name" style="flex:0 1 110px;${s?"border-color:var(--error-color, #db4437);":""}"
        title=${s?"This name is used twice — colors and variables share one --mccust_ namespace, so only one of them will apply.":"Becomes --mccust_<name>."}
        .value=${e}
        @change=${o=>i(p._custName(o.target.value))} />
    `}_defaultsSecCustomColors(){const e=this._config?.defaults?.custom_colors??[],t=s=>this._updateDefaults({custom_colors:s.length?s:void 0}),i=this._custDuplicateNames();return r`
      <div class="ec-section">
        <p class="ec-hint">Reusable colors. Each becomes <code>--mccust_&lt;name&gt;</code>, and appears in every color picker's <b>CSS Mode</b> list. Specifying a custom theme variable is allowed in the RGB input field.</p>
        ${this._custDuplicateHint(i)}
        ${e.length===0?r`<p class="ec-empty">No custom colors — click "+ Color".</p>`:_}
        ${e.map((s,o)=>r`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            ${this._custNameInput(s.name,i,a=>{const n=[...e];n[o]={...s,name:a},t(n)})}
            <div style="flex:1;min-width:0;">
              ${this._colorPicker(`cust-${o}`,s.color,a=>{const n=[...e];n[o]={...s,color:a??""},t(n)},{clearable:!1})}
            </div>
            <button class="ec-btn-remove" title="Remove" @click=${()=>t(e.filter((a,n)=>n!==o))}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>t([...e,{name:`color${e.length+1}`,color:"#00d4ff"}])}>+ Color</button>
      </div>
    `}_custDuplicateHint(e){return e.size===0?_:r`<p class="ec-hint" style="color:var(--error-color, #db4437);">
      Used in both lists: ${[...e].map(t=>`mccust_${t}`).join(", ")}. Colors and variables
      share one <code>--mccust_</code> namespace, so only the variable will apply. Rename one of each pair.
    </p>`}_defaultsSecCustomVars(){const e=this._config?.defaults?.custom_vars??[],t=s=>this._updateDefaults({custom_vars:s.length?s:void 0}),i=this._custDuplicateNames();return r`
      <div class="ec-section">
        <p class="ec-hint">Reusable values of any kind — sizes, shadows, font stacks. Each becomes <code>--mccust_&lt;name&gt;</code> on the card, so <b>Extra CSS</b> anywhere in the card can use <code>var(--mccust_&lt;name&gt;)</code> instead of repeating the value.</p>
        <p class="ec-hint">These share the same namespace as <b>Custom Colors</b>, so a name can only be used in one list. Colors go in that list — only they appear in the color pickers' CSS Mode.</p>
        ${this._custDuplicateHint(i)}
        ${e.length===0?r`<p class="ec-empty">No custom variables — click "+ Variable".</p>`:_}
        ${e.map((s,o)=>r`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            ${this._custNameInput(s.name,i,a=>{const n=[...e];n[o]={...s,name:a},t(n)})}
            <input class="ec-input" type="text" placeholder="value (e.g. 8px, 0 2px 6px rgba(0,0,0,.4))" style="flex:1;min-width:0;"
              .value=${s.value}
              @change=${a=>{const n=[...e];n[o]={...s,value:a.target.value.trim()},t(n)}} />
            <button class="ec-btn-remove" title="Remove" @click=${()=>t(e.filter((a,n)=>n!==o))}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>t([...e,{name:`var${e.length+1}`,value:""}])}>+ Variable</button>
      </div>
    `}_controlNumRow(e,t,i,s,o=1,a){return this._numRow(e,{value:t,onChange:s,placeholder:i,min:o,hint:a})}static _separationOnly(e){if(!e)return;const t={};let i=!1;for(const s of p.SEPARATION_KEYS)e[s]!==void 0&&(t[s]=e[s],i=!0);return i?t:void 0}_optionSeparationRows(e,t,i=!1){if(i)return r`
        <div class="ec-subsection-title">Padding</div>
        ${this._csNumRow(e,t,"Button padding (px)","button_option_padding","5 / 10",0,"Vertical / horizontal padding inside the button.")}
      `;const s=(a,n,l)=>this._colorPicker(a,n,c=>l(c||void 0)),o=(e.button_group_option_gap??0)>0;return r`
      <div class="ec-subsection-title">Option separation</div>
      <p class="ec-hint">Set a gap to detach the options into discrete buttons — the shared outline and the divider lines between segments go away, and each option becomes its own cell. Leave the gap at 0 for the joined segmented look.</p>
      ${this._csNumRow(e,t,"Gap between options (px)","button_group_option_gap","0",0)}
      <div class="ec-subsection-title">${o?"Button group border (fallback for detached options)":"Segmented frame"}</div>
      <p class="ec-hint">${o?'The button group’s own border. It has no visible frame to draw once options are detached, but it stays the fallback for "Border per option" below whenever an option is left without its own override.':"The outline around the joined segmented row, and the divider lines between options."}</p>
      ${this._row("Border color",s("sel-bd",e.button_group_border_color,a=>t({button_group_border_color:a})),"Colour of the outline described above.")}
      ${this._csNumRow(e,t,"Border width (px)","button_group_border_width","1",0)}
      ${this._csNumRow(e,t,"Radius (px)","button_group_radius","7")}
      ${o?r`
        ${this._csNumRow(e,t,"Internal padding (px)","button_group_option_padding","5",0,"Space between the group's frame and the detached options.")}
        ${this._row("Border per option",r`<input type="checkbox" .checked=${e.button_group_option_border??!1}
            @change=${a=>t({button_group_option_border:a.target.checked||void 0})}
          />`,"Gives each detached option its own border settings.")}
        ${e.button_group_option_border?r`
          ${this._row("Option border color",s("sel-obd",e.button_group_option_border_color,a=>t({button_group_option_border_color:a})),"Unset reuses the button group's border colour above.")}
          ${this._csNumRow(e,t,"Option border width (px)","button_group_option_border_width","group width",0,"Unset reuses the button group's border width.")}
          ${this._csNumRow(e,t,"Option border radius (px)","button_group_option_radius","group radius",0,"Unset reuses the button group's radius.")}
        `:_}
        <div class="ec-subsection-title">Option extra CSS</div>
        ${this._cssRow(e.button_group_option_extra_css,a=>t({button_group_option_extra_css:a}),"Additional CSS","Raw CSS applied to each separated option cell, so detached buttons can be fully styled.")}
      `:_}
    `}_controlGradientAngleRow(e,t){return this._csNumRow(e,t,"Gradient angle (deg)","gradient_angle","180",0)}_gradientRows(e){const t=e.color2!=null||this._gradientOn.has(e.id),i=s=>{if(s){this._gradientOn.add(e.id),this.requestUpdate();return}this._gradientOn.delete(e.id),e.clearGradient()};return r`
      ${this._row(e.label,this._colorPicker(e.id,e.color,s=>e.setColor(s||void 0),{onClear:e.onClearColor,gradient:{on:t,onToggle:i}}),e.colorHint)}
      ${t?r`
        ${this._row(e.toLabel??`${e.label} gradient to`,this._colorPicker(`${e.id}-2`,e.color2,s=>e.setColor2(s||void 0)),"The colour the gradient ends on. Nothing renders as a gradient until this is set.")}
        ${this._controlNumRow("Gradient angle (deg)",e.angle,e.anglePlaceholder??"180",s=>e.setAngle(s),0,e.angleTooltip??"Direction the gradient runs — 0° fills upwards, 180° downwards.")}
        ${e.angleHint?r`<p class="ec-hint">${e.angleHint}</p>`:_}
      `:_}
    `}_libFillRows(e,t){const i=this._config?.defaults??{},s=(o,a)=>this._updateDefaults({[`${t}_${o}`]:a});return this._gradientRows({id:e,label:"Fill color",toLabel:"Gradient to",color:i[`${t}_fill_color`],color2:i[`${t}_fill_color2`],angle:i[`${t}_fill_angle`],anglePlaceholder:"fill direction",angleHint:Ut,setColor:o=>s("fill_color",o),setColor2:o=>s("fill_color2",o),setAngle:o=>s("fill_angle",o),clearGradient:()=>this._updateDefaults({[`${t}_fill_color2`]:void 0,[`${t}_fill_angle`]:void 0})})}_csGradientRows(e,t,i,s,o,a,n,l){const c=(d,h)=>n({[d]:h});return this._gradientRows({id:e,label:t,colorHint:l,color:a[i],color2:a[s],angle:a[o],anglePlaceholder:String(a.gradient_angle??180),angleTooltip:"Direction the gradient runs — 0° fills upwards, 180° downwards. Unset follows the control-wide Gradient angle in Settings ▸ Global Defaults ▸ Control Default ▸ Common.",setColor:d=>c(i,d),setColor2:d=>c(s,d),setAngle:d=>c(o,d),clearGradient:()=>n({[s]:void 0,[o]:void 0})})}_selectorStateRows(e,t,i,s,o){const a=(c,d,h)=>this._colorPicker(`${e}-${c}`,d,u=>h(u||void 0)),n="Colour of the option's icon. Unset follows the label colour.",l="Colour of the state value shown on the option. Unset follows the label colour.";if(s==="sub:active"||s==="sub:inactive"){const c=s==="sub:active";return o?c?r`
          <p class="ec-hint">Applied while the button's entity is on, or — with a value set — while the entity's state equals it.</p>
          ${this._csGradientRows(`${e}-sel-sel`,"Background","button_selected_color","button_selected_color2","button_selected_angle",t,i,"Fill behind the button in this state.")}
          ${this._row("Label color",a("sel-selt",t.button_selected_text_color,d=>i({button_selected_text_color:d})),"Colour of the button's text in this state.")}
          ${this._row("Icon color",a("sel-selic",t.button_selected_icon_color,d=>i({button_selected_icon_color:d})),n)}
          ${this._row("State value color",a("sel-selst",t.button_selected_state_color,d=>i({button_selected_state_color:d})),l)}
        `:r`
          ${this._csGradientRows(`${e}-sel-bg`,"Background","button_bg","button_bg2","button_bg_angle",t,i,"Fill behind the button in this state.")}
          ${this._row("Label color",a("sel-txt",t.button_text_color,d=>i({button_text_color:d})),"Colour of the button's text in this state.")}
          ${this._row("Icon color",a("sel-ic",t.button_icon_color,d=>i({button_icon_color:d})),n)}
          ${this._row("State value color",a("sel-st",t.button_state_color,d=>i({button_state_color:d})),l)}
        `:c?r`
        <p class="ec-hint">Applied to an option whose value is the entity's current state, or whose own entity is on.</p>
        ${this._csGradientRows(`${e}-sel-sel`,"Background","button_group_selected_color","button_group_selected_color2","button_group_selected_angle",t,i,"Fill behind the option in this state.")}
        ${this._row("Label color",a("sel-selt",t.button_group_selected_text_color,d=>i({button_group_selected_text_color:d})),"Colour of the option's text in this state.")}
        ${this._row("Icon color",a("sel-selic",t.button_group_selected_icon_color,d=>i({button_group_selected_icon_color:d})),n)}
        ${this._row("State value color",a("sel-selst",t.button_group_selected_state_color,d=>i({button_group_selected_state_color:d})),l)}
      `:r`
        ${this._csGradientRows(`${e}-sel-bg`,"Background","button_group_bg","button_group_bg2","button_group_bg_angle",t,i,"Fill behind the option in this state.")}
        ${this._row("Label color",a("sel-txt",t.button_group_text_color,d=>i({button_group_text_color:d})),"Colour of the option's text in this state.")}
        ${this._row("Icon color",a("sel-ic",t.button_group_icon_color,d=>i({button_group_icon_color:d})),n)}
        ${this._row("State value color",a("sel-st",t.button_group_state_color,d=>i({button_group_state_color:d})),l)}
      `}return o?r`
        ${this._row("Border color",a("sel-bd",t.button_border_color,c=>i({button_border_color:c})),"Colour of the button's outline.")}
        ${this._csNumRow(t,i,"Border width (px)","button_border_width","1",0)}
        ${this._csNumRow(t,i,"Radius (px)","button_radius","7")}
        ${this._csNumRow(t,i,"Padding (px)","button_option_padding","5 / 10",0,"Vertical / horizontal padding inside the button.")}
        ${this._csNumRow(t,i,"Label font size (px)","button_text_size","13")}
        ${this._csNumRow(t,i,"Icon font size (px)","button_icon_size","18")}
        ${this._csNumRow(t,i,"State value font size (px)","button_state_size","label size")}
      `:r`
      ${this._csNumRow(t,i,"Label font size (px)","button_group_text_size","13")}
      ${this._csNumRow(t,i,"Icon font size (px)","button_group_icon_size","18")}
      ${this._csNumRow(t,i,"State value font size (px)","button_group_state_size","label size")}
    `}_csNumRow(e,t,i,s,o,a=1,n){const l=v("control_style")?.[s];return this._controlNumRow(i,e[s],typeof l=="number"?String(l):o,c=>t({[s]:c}),a,n)}_csShadowRow(e,t,i,s,o){const a=v("control_style")?.[s];return this._row(i,r`<input class="ec-input" type="text" .value=${e[s]??""}
      placeholder=${typeof a=="string"?a:o}
      @change=${n=>t({[s]:n.target.value.trim()||void 0})}
    />`,"A full CSS box-shadow value. Use 'none' to remove the shadow.")}_controlStyleRows(e,t,i,s,o=!0){const a=(c,d,h)=>this._colorPicker(`${e}-${c}`,d,u=>h(u||void 0)),n=(c,d,h,u=1,g)=>this._csNumRow(t,s,c,d,h,u,g),l=(c,d,h)=>this._csShadowRow(t,s,c,d,h);return r`
      ${o?r`
        ${this._csGradientRows(`${e}-accent`,"Accent","accent_color","accent_color2","accent_angle",t,s)}
      `:_}
      ${i==="toggle"?r`
        <div class="ec-subsection-title">Toggle</div>
        ${this._csGradientRows(`${e}-on`,"On color","toggle_on_color","toggle_on_color2","toggle_on_angle",t,s,"Track colour while the toggle is on.")}
        ${this._csGradientRows(`${e}-off`,"Off color","toggle_off_color","toggle_off_color2","toggle_off_angle",t,s,"Track colour while the toggle is off.")}
        <div class="ec-subsection-title">Toggle thumb</div>
        ${this._row("Thumb color",a("th-col",t.toggle_thumb_color,c=>s({toggle_thumb_color:c})),"Colour of the moving knob.")}
        ${n("Thumb size (px)","toggle_thumb_size","18")}
        ${n("Thumb radius (px)","toggle_thumb_radius","circle",0,"Unset keeps the thumb round.")}
        ${n("Thumb padding (px)","toggle_thumb_padding","2",0)}
        ${l("Thumb shadow","toggle_thumb_shadow","0 1px 3px rgba(0,0,0,0.5)")}
      `:_}
      ${i==="slider"?r`
        <div class="ec-subsection-title">Slider</div>
        ${this._csGradientRows(`${e}-track`,"Track color","slider_track_color","slider_track_color2","slider_track_angle",t,s,"Colour of the slider's empty track.")}
        ${this._csGradientRows(`${e}-fill`,"Fill color","slider_fill_color","slider_fill_color2","slider_fill_angle",t,s,"Colour of the filled part up to the value.")}
        ${n("Track height (px)","slider_height","6")}
        ${n("Track length (px)","slider_length","fill width",0,"Unset lets the track fill the field's width.")}
        ${n("Track radius (px)","slider_radius","pill",0,"Unset gives the track fully rounded ends.")}
        ${this._row("Border",r`<input type="checkbox" .checked=${t.slider_border??!1}
            @change=${c=>s({slider_border:c.target.checked||void 0})}
          />`,"Draws a border around the track, using the track radius above.")}
        ${t.slider_border?r`
          ${this._row("Border color",a("track-bd",t.slider_border_color,c=>s({slider_border_color:c})),"Colour of the track's border.")}
          ${n("Border width (px)","slider_border_width","1",0)}
        `:_}
        <div class="ec-subsection-title">Slider thumb</div>
        ${this._row("Thumb color",a("thumb",t.slider_thumb_color,c=>s({slider_thumb_color:c})),"Colour of the moving knob.")}
        ${n("Thumb size (px)","slider_thumb_size","16")}
        ${n("Thumb width (px)","slider_thumb_width","thumb size",1,"Unset keeps the thumb square-on.")}
        ${n("Thumb radius (px)","slider_thumb_radius","circle",0,"Unset keeps the thumb round.")}
        ${n("Thumb padding (px)","slider_thumb_padding","0",0)}
        ${l("Thumb shadow","slider_thumb_shadow","0 1px 4px rgba(0,0,0,0.5)")}
      `:_}
      ${i==="dropdown"?r`
        <div class="ec-subsection-title">Dropdown</div>
        ${this._row("Border",a("dd-bd",t.dropdown_border_color,c=>s({dropdown_border_color:c})),"Colour of the control's outline.")}
        ${this._csGradientRows(`${e}-dd-bg`,"Background","dropdown_bg","dropdown_bg2","dropdown_bg_angle",t,s,"Fill of the closed control.")}
        ${this._csGradientRows(`${e}-dd-mbg`,"Menu background","dropdown_menu_bg","dropdown_menu_bg2","dropdown_menu_bg_angle",t,s,"Fill of the open dropdown menu.")}
        ${this._row("Menu border",a("dd-mbd",t.dropdown_menu_border_color,c=>s({dropdown_menu_border_color:c})),"Colour of the open menu's outline.")}
        ${this._csGradientRows(`${e}-dd-sel`,"Selected color","dropdown_selected_color","dropdown_selected_color2","dropdown_selected_angle",t,s,"Highlight behind the option matching the entity's state.")}
        ${n("Radius (px)","dropdown_radius","6")}
        ${n("Text size (px)","dropdown_text_size","13")}
        <div class="ec-subsection-title">Dropdown menu</div>
        ${n("Menu radius (px)","dropdown_menu_radius","8",0)}
        ${l("Menu shadow","dropdown_menu_shadow","0 6px 20px rgba(0,0,0,0.5)")}
        ${n("Option radius (px)","dropdown_option_radius","5",0)}
        ${this._row("Option text",a("dd-otx",t.dropdown_option_text_color,c=>s({dropdown_option_text_color:c})),"Colour of the options in the open menu.")}
        ${this._row("Option hover",a("dd-ohv",t.dropdown_option_hover_color,c=>s({dropdown_option_hover_color:c})),"Highlight behind the option under the pointer.")}
        <p class="ec-hint">The menu is opaque so it can cover the background image, which is why its
          option text is set here rather than inherited from the card.</p>
      `:_}
      ${i==="input"?r`
        <div class="ec-subsection-title">Input</div>
        ${this._row("Border",a("in-bd",t.input_border_color,c=>s({input_border_color:c})),"Colour of the control's outline.")}
        ${this._csGradientRows(`${e}-in-bg`,"Background","input_bg","input_bg2","input_bg_angle",t,s,"Fill of the input.")}
        ${this._row("Focus color",a("in-fc",t.input_focus_color,c=>s({input_focus_color:c})),"Outline colour while the input has focus.")}
        ${this._row("Placeholder",a("in-ph",t.input_placeholder_color,c=>s({input_placeholder_color:c})),"Colour of the prompt text shown while the input is empty.")}
        ${n("Radius (px)","input_radius","6")}
        ${n("Text size (px)","input_text_size","13")}
      `:_}
      ${i==="spinbox"?r`
        <div class="ec-subsection-title">Spin Box</div>
        ${this._row("Border",a("sp-bd",t.spinbox_border_color,c=>s({spinbox_border_color:c})),"Colour of the control's outline.")}
        ${this._csGradientRows(`${e}-sp-bg`,"Button background","spinbox_bg","spinbox_bg2","spinbox_bg_angle",t,s,"Fill of the spin box's + and − buttons.")}
        ${this._csGradientRows(`${e}-sp-hv`,"Button hover","spinbox_button_hover_color","spinbox_button_hover_color2","spinbox_button_hover_angle",t,s,"Fill of a spin box button under the pointer.")}
        ${n("Button width (px)","spinbox_button_width","30")}
        ${n("Button glyph size (px)","spinbox_button_font_size","18")}
        ${n("Radius (px)","spinbox_radius","7")}
        ${n("Text size (px)","spinbox_text_size","13")}
      `:_}
    `}_controlDefaultsMenu(){return this._navMenu(p._CONTROL_DEFAULTS_SECTIONS,this._defaultsScope())}_controlDefaultsSection(e){return r`
      ${this._clearOverridesBtn(p._findDef(p._CONTROL_DEFAULTS_SECTIONS,e),this._defaultsScope())}
      ${this._controlDefaultsSectionBody(e)}
    `}_controlDefaultsSectionBody(e){const t=this._config?.defaults??{},i=t.control_style??{},s=a=>this._updateDefaults({control_style:{...i,...a}});if(e==="cd:container")return r`<div class="ec-section">
        <p class="ec-hint">Box (background, border, radius, shadow) applied behind every control. Per-field <b>Control Style</b> can override it.</p>
        ${this._boxRows("d-ctl-box",t.control??{},a=>this._updateDefaults({control:{...t.control,...a}}))}
      </div>`;if(e==="cd:common")return r`<div class="ec-section">
        ${this._csGradientRows("d-ctl-accent","Accent","accent_color","accent_color2","accent_angle",i,s,"The colour slider fill, toggle-on, and each control's selected and focus state fall back to.")}
        <p class="ec-hint">Setting an accent gradient themes every surface that falls back to the accent — slider fill, toggle-on, dropdown / button group selected, spin box hover. Borders and focus outlines stay the flat accent color. Each surface stays flat until you tick <b>Gradient</b> on a color of its own.</p>
        <div class="ec-subsection-title">Default gradient angle</div>
        <p class="ec-hint">Used by every control gradient that has no angle of its own. Each <b>Gradient</b> checkbox reveals an angle beside its color — set one there to turn just that surface, or leave it blank to follow this.</p>
        ${this._controlGradientAngleRow(i,s)}
      </div>`;if(e==="cd:density")return this._controlDensitySection(t);if(e==="cd:variants")return this._controlVariantsSection();const o=e.slice(3);return r`<div class="ec-section">${this._controlStyleRows("d-ctl",i,o,s,!1)}</div>`}_controlDensitySection(e){return r`<div class="ec-section">
      <p class="ec-hint">One set of knobs for how tight or loose <b>every</b> control is. Each sits below the per-field
        and per-card settings, so it can never override something you set on a specific field. Set one and the whole
        control surface scales off it, keeping the proportions — a slider's value readout stays a step smaller than
        its label, two label rows stay tighter than the gap to the control.</p>
      ${this._controlNumRow("Text size (px)",e.control_font_size,"natural (13)",t=>this._updateDefaults({control_font_size:t}),1,"Unset keeps each part of a control at its own natural size.")}
      ${this._row("Padding",r`<input class="ec-input" type="text" .value=${e.control_padding??""}
          placeholder="natural (5px 8px)"
          @change=${t=>{const i=t.target.value.trim();this._updateDefaults({control_padding:i||void 0})}}
        />`,"A full CSS padding value for every control's field box — the input, the dropdown trigger and its options, and each button group or button cell.")}
      ${this._controlNumRow("Gap (px)",e.control_gap,"natural (4)",t=>this._updateDefaults({control_gap:t}),0)}
      <p class="ec-hint">Every gap inside a control is a fixed multiple of this one: label rows sit at half, a control and its label at double.</p>
    </div>`}static _selectorDefaultsDefs(e){const t=e?"btn":"sel",i=e?"button_option_layout":"option_layout",s=[{key:"sub:container",label:"Field Container",hint:"Sizes, placement, text",icon:"mdi:card-outline",paths:[...F("control_style",_e["sub:container"][t]),...F(i,Gs)]},{key:"sub:active",label:"Active State",hint:"Colors when the option is active",icon:"mdi:circle-slice-8",paths:F("control_style",_e["sub:active"][t])},{key:"sub:inactive",label:"Inactive State",hint:"Colors when the option is inactive",icon:"mdi:circle-outline",paths:F("control_style",_e["sub:inactive"][t])}];return e?s:[...s,{key:"sub:separation",label:"Option Separation",hint:"Frame border, gap, per-option style",icon:"mdi:dots-grid",paths:F("control_style",vt)}]}_selectorDefaultsMenu(e){return this._navMenu(p._selectorDefaultsDefs(e==="cd:button"),this._defaultsScope())}_selectorDefaultsSection(e,t){return r`
      ${this._clearOverridesBtn(p._findDef(p._selectorDefaultsDefs(e==="cd:button"),t),this._defaultsScope())}
      ${this._selectorDefaultsSectionBody(e,t)}
    `}_selectorDefaultsSectionBody(e,t){const i=this._config?.defaults??{},s=i.control_style??{},o=c=>this._updateDefaults({control_style:{...s,...c}}),a=e==="cd:button";if(t==="sub:separation")return r`<div class="ec-section">${this._optionSeparationRows(s,o)}</div>`;if(t==="sub:active"||t==="sub:inactive")return r`<div class="ec-section">${this._selectorStateRows("d-ctl",s,o,t,a)}</div>`;const n=(a?i.button_option_layout:i.option_layout)??{},l=c=>this._updateDefaults(a?{button_option_layout:{...n,...c}}:{option_layout:{...n,...c}});return r`<div class="ec-section">
      ${this._selectorStateRows("d-ctl",s,o,"sub:container",a)}
      <div class="ec-subsection-title">Placement &amp; text</div>
      ${this._optionLayoutRows(n,l,"d-ol")}
    </div>`}_variantOptions(e,t){const i=o=>r`<option value=${o.id} .selected=${t===o.id}>${o.label}</option>`,s=Vi(e);return s.length?r`
      <optgroup label="Built-in">${Kt(e).map(i)}</optgroup>
      <optgroup label="Custom">${s.map(i)}</optgroup>
    `:r`${Ze(e).map(i)}`}_updateVariants(e,t){const i=this._config?.defaults?.control_variants??{},s={...i,[e]:t([...i[e]??[]])};for(const a of Object.keys(s))s[a]?.length||delete s[a];const o=Object.keys(s).length?s:void 0;this._updateDefaults({control_variants:o}),We(o)}_controlVariantsSection(){const e=this._config?.defaults?.control_variants??{},t=jt.filter(s=>(e[s]??[]).length>0),i=t.reduce((s,o)=>s+(e[o]?.length??0),0);return r`
      <div class="ec-section">
        <p class="ec-hint">
          Custom variants are stored in <b>this card's configuration</b>, not in the Mosaic bundle — so
          installing a release that updates the built-in variants can never overwrite them. To reuse them on
          another card, use <b>Templates ▸ Export / Import Control Variants</b>.
        </p>
        <p class="ec-hint">
          To create one: configure a control field until it behaves the way you want, then use
          <b>Save as Variant</b> in that field's <b>Entity &amp; Action</b> section — or its
          <b>Variant</b> section, for a button group with manual options. If the field is already on a
          custom variant, the same panel can update it in place.
        </p>
        ${i===0?r`<p class="ec-empty">No custom variants yet.</p>`:t.map(s=>r`
              <div class="ec-subsection-title">${xe[s]}</div>
              ${(e[s]??[]).map((o,a)=>this._variantRow(s,o,a))}
            `)}
      </div>
    `}_variantRow(e,t,i){const s=`${e}:${t.id}`,o=this._variantOpen===s,a=l=>this._updateVariants(e,c=>c.map((d,h)=>h===i?{...d,...l}:d)),n=Object.keys(t.preset??{}).length;return r`
      <div class="ec-list-row" style="flex-direction:column;align-items:stretch;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <ha-icon icon=${t.icon||Ee[e]}></ha-icon>
          <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.label}</span>
          <span style="font-size:11px;opacity:0.55;white-space:nowrap;">${n} key${n===1?"":"s"}</span>
          <button class="ec-btn-add" style="padding:2px 8px;"
            @click=${()=>{this._variantOpen=o?"":s,this._variantError=""}}
          >${o?"Close":"Edit"}</button>
          <button class="ec-btn-add" style="padding:2px 8px;" title="Duplicate"
            @click=${()=>{const l=De(e,`${t.id}_copy`);this._updateVariants(e,c=>[...c,{...t,id:l,label:`${t.label} (copy)`}]),this._variantOpen=`${e}:${l}`}}
          >⧉</button>
          <button class="ec-btn-remove" title="Delete"
            @click=${()=>{window.confirm(`Delete variant "${t.label}"?

Fields already using it keep their current settings — they just lose the link to this variant.`)&&this._updateVariants(e,l=>l.filter((c,d)=>d!==i))}}
          >✕</button>
        </div>
        ${o?r`
          ${this._row("Label",r`<input class="ec-input" type="text" .value=${t.label}
              @change=${l=>{const c=l.target.value.trim();c?a({label:c}):l.target.value=t.label}} />`)}
          ${this._row("Icon",this._iconPicker(t.icon,l=>a({icon:l}),Ee[e]))}
          ${this._row("Id",r`<span class="ec-input" style="opacity:0.6;">${t.id}</span>`)}
          <p class="ec-hint">The id is fixed after creation — fields store it to remember which variant they use. Rename the <b>Label</b> instead; that's what the Variant dropdown shows.</p>
          ${this._row("Domains",r`<input class="ec-input" type="text" placeholder="light, switch — blank for any" .value=${(t.domain??[]).join(", ")}
              @change=${l=>{const c=l.target.value.split(",").map(d=>d.trim()).filter(Boolean);a({domain:c.length?c:void 0})}} />`)}
          <div class="ec-subsection-title">Preset</div>
          <p class="ec-hint">Captured from the field this variant was saved from. Richer settings (labels, track labels, option lists) are easiest to author on a real field and re-capture with <b>Save as Variant</b>; this JSON is the escape hatch.</p>
          <textarea class="ec-input" rows="8" spellcheck="false"
            style="font-family:ui-monospace,monospace;font-size:11px;line-height:1.4;resize:vertical;"
            .value=${JSON.stringify(t.preset??{},null,2)}
            @change=${l=>{const c=l.target.value.trim();try{const d=c?JSON.parse(c):{};if(typeof d!="object"||d===null||Array.isArray(d))throw new Error("Preset must be a JSON object.");const h=Object.keys(d).filter(u=>!ii.includes(u));if(h.length)throw new Error(`Not preset keys: ${h.join(", ")}`);this._variantError="",a({preset:Object.keys(d).length?d:void 0})}catch(d){this._variantError=d instanceof Error?d.message:"Invalid JSON."}}}
          ></textarea>
          ${this._variantError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._variantError}</p>`:_}
        `:_}
      </div>
    `}_controlStyleUsesGlobal(e,t){const i=e.control_style,s=p._separationOnly(i);return i===void 0||!this._colorOverridesOn.has(t)&&s!==void 0&&Object.keys(i).length===Object.keys(s).length}static _fscsDefs(e){const t=e?"btn":"sel";return[{key:"fscs:container",label:"Field Container",hint:"Border, radius, font sizes",icon:"mdi:card-outline",paths:F("control_style",p._containerPathsForField(t))},{key:"fscs:active",label:"Active State",hint:"Colors when the option is active",icon:"mdi:circle-slice-8",paths:F("control_style",_e["sub:active"][t])},{key:"fscs:inactive",label:"Inactive State",hint:"Colors when the option is inactive",icon:"mdi:circle-outline",paths:F("control_style",_e["sub:inactive"][t])}]}_fieldSecControlStyle(e,t,i,s=!1){const o=this._updFor(e,t,s),a=this._idFor(e,t,s),n=i.control_style,l=u=>o({control_style:{...i.control_style,...u}}),c=p._separationOnly(n),d=this._controlStyleUsesGlobal(i,a),h=i.type==="button_group"||i.type==="button";return r`
      <div class="ec-section">
        ${this._row("Use global control style",r`<input type="checkbox" .checked=${d}
            @change=${u=>{u.target.checked?(this._colorOverridesOn.delete(a),o({control_style:c})):(this._colorOverridesOn.add(a),o({control_style:{...n??{}}})),this.requestUpdate()}}
          />`)}
        <p class="ec-hint">Ticked, this control's colours follow <b>Settings ▸ Global Defaults ▸ Control
          Default</b>. Option separation is set in <b>Options</b> and is kept either way.</p>
        ${d?_:h?this._navMenu(p._fscsDefs(i.type==="button"),this._fieldScope(e,t,s)):r`
          <div class="ec-subsection-title">Color overrides</div>
          ${this._controlStyleRows(`${a}-ctl`,n??{},i.type,l)}
        `}
        <div class="ec-subsection-title">Container box</div>
        ${this._row("Override container",r`<input type="checkbox" .checked=${i.control_box!==void 0}
            @change=${u=>o({control_box:u.target.checked?{}:void 0})}
          />`,"Gives this control its own box, instead of the one in Control Default ▸ Container Box.")}
        ${i.control_box!==void 0?this._boxRows(`${a}-ctlbox`,i.control_box,u=>o({control_box:{...i.control_box,...u}}),Gt):_}
        ${this._cssRow(i.extra_css,u=>o({extra_css:u}))}
      </div>
    `}_fieldControlStyleStateSection(e,t,i,s,o=!1){const a=this._updFor(e,t,o),n=this._idFor(e,t,o),l=i.control_style??{},c=h=>a({control_style:{...i.control_style,...h}}),d=s==="fscs:active"?"sub:active":s==="fscs:inactive"?"sub:inactive":"sub:container";return r`
      ${this._clearOverridesBtn(p._findDef(p._fscsDefs(i.type==="button"),s),this._fieldScope(e,t,o))}
      <div class="ec-section">${this._selectorStateRows(`${n}-ctl`,l,c,d,i.type==="button")}</div>
    `}_defaultsSecLayout(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
          ${this._row("Power unit",r`<select class="ec-select"
              .value=${e.power_unit??""}
              @change=${t=>{const i=t.target.value;this._updateDefaults({power_unit:i||void 0})}}
            >
              <option value=""   .selected=${!e.power_unit}>Auto (W / kW)</option>
              <option value="W"  .selected=${e.power_unit==="W"}>Always W</option>
              <option value="kW" .selected=${e.power_unit==="kW"}>Always kW</option>
            </select>`,"Whether power values are shown in watts, kilowatts, or switched automatically as they grow.")}

          ${this._numRow("Graph refresh (min)",{value:e.stat_update_interval,onChange:t=>this._updateDefaults({stat_update_interval:t}),min:1,max:60,placeholder:"5",hint:"How often every graph, gauge and statistic value on this dashboard re-queries Home Assistant. A single graph can set its own on its Graph Settings screen. Nothing polls while the card is off-screen or its tab is in the background."})}

          ${this._row("Font family",r`<input class="ec-input" type="text" .value=${e.font_family??""}
              placeholder="inherit"
              @change=${t=>{const i=t.target.value;this._updateDefaults({font_family:i===""?void 0:i})}}
            />`,"A CSS font stack for every text on the card. Unset follows the dashboard theme.")}

          ${this._row("Font family – monospace",r`<input class="ec-input" type="text" .value=${e.mono_font_family??""}
              placeholder="'Courier New', monospace"
              @change=${t=>{const i=t.target.value;this._updateDefaults({mono_font_family:i===""?void 0:i})}}
            />`,"A CSS font stack for fixed-width text.")}
          <p class="ec-hint">Only used where a fixed-width font is required (e.g. numeric counters, timers).</p>

          <p class="ec-hint">Field spacing is not here: every card type owns its own. A Mosaic card's gaps and field
            placement are on <b>Mosaic Card Defaults</b>, a popover's on <b>Popover Card Defaults</b>, and an
            embedded card has no fields of its own to space.</p>
      </div>
    `}_elemLibMenu(){const e=p._ELEM_LIB_SECTIONS,t=this._currentListFilter(),i=this._config?.defaults;return r`
      ${this._listFilterBox(e.length)}
      ${e.filter(s=>!t||s.label.toLowerCase().includes(t)).map(s=>this._navBtn(s.key,s.label,s.hint,s.icon,et(i,s.paths)))}
    `}_elemLibSection(e){let t;switch(e){case"el:thermo-v":t=this._elemThermoV();break;case"el:thermo-h":t=this._elemThermoH();break;case"el:bat-h":t=this._elemBatH();break;case"el:bat-v":t=this._elemBatV();break;case"el:tank-cyl":t=this._elemTankCyl();break;case"el:tank-water":t=this._elemTankWater();break;case"el:tank-ferm":t=this._elemTankFerm();break;case"el:tank-cone":t=this._elemTankCone();break;case"el:inverter":t=this._elemInverter();break;case"el:gauge-arc":t=this._elemGaugeArc();break;default:return r``}const i=p.ELEM_CSS_KEY[e],s=this._config?.defaults??{};return r`
      ${this._clearOverridesBtn(p._findDef(p._ELEM_LIB_SECTIONS,e),this._defaultsScope())}
      ${t}
      <div class="ec-section">
        ${this._cssRow(s[i],o=>this._updateDefaults({[i]:o}))}
      </div>`}_elemThermoV(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-tc",e.thermo_tick_color,t=>this._updateDefaults({thermo_tick_color:t||void 0})),U.tick_color)}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${e.thermo_text_position??v("thermo_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(e.thermo_text_position??v("thermo_text_position")??"right")===t}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`)}
                </select>`,U.tick_position)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${e.thermo_show_minor_tick_text??v("thermo_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_show_minor_tick_text:t.target.checked})} />`,U.minor_tick_text)}
              ${this._numRow("Tick font size",{hint:U.tick_font_size,value:e.thermo_tick_font_size,onChange:t=>this._updateDefaults({thermo_tick_font_size:t}),min:1,max:20,step:.5,placeholder:"4"})}
              ${this._numRow("Major tick length",{value:e.thermo_major_tick_length,onChange:t=>this._updateDefaults({thermo_major_tick_length:t}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Major tick thickness",{value:e.thermo_major_tick_width,onChange:t=>this._updateDefaults({thermo_major_tick_width:t}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick length",{value:e.thermo_minor_tick_length,onChange:t=>this._updateDefaults({thermo_minor_tick_length:t}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick thickness",{value:e.thermo_minor_tick_width,onChange:t=>this._updateDefaults({thermo_minor_tick_width:t}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._row("Grid line color",this._colorPicker("d-thermo-gc",e.thermo_grid_color,t=>this._updateDefaults({thermo_grid_color:t||void 0})),U.grid_color)}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._numRow("Above temperature transparency",{value:e.thermo_fill_opacity_above,onChange:t=>this._updateDefaults({thermo_fill_opacity_above:t}),min:0,max:1,step:.05,placeholder:"0.5"})}
              <p class="ec-hint">How visible the tube is above the current reading — 0 hides the empty part
                entirely, 1 draws it in full.</p>
              ${this._numRow("Decimals",{hint:U.decimals,value:e.thermo_decimals,onChange:t=>this._updateDefaults({thermo_decimals:t}),min:0,max:4,step:1,placeholder:"1"})}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-ttc",e.thermo_temp_color,t=>this._updateDefaults({thermo_temp_color:t||void 0})),U.temp_color)}
              ${this._numRow("Temperature value size",{value:e.thermo_temp_font_size,onChange:t=>this._updateDefaults({thermo_temp_font_size:t}),min:4,max:30,step:.5,placeholder:"10"})}
              ${this._libFillRows("d-thermo-fc","thermo")}
      </div>
    `}_elemThermoH(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-h-tc",e.thermo_h_tick_color,t=>this._updateDefaults({thermo_h_tick_color:t||void 0})),U.tick_color)}
              ${this._row("Tick position",r`<select class="ec-select"
                  .value=${e.thermo_h_text_position??v("thermo_h_text_position")??"right"}
                  @change=${t=>this._updateDefaults({thermo_h_text_position:t.target.value})}
                >
                  ${["right","left","both"].map(t=>r`<option value=${t} .selected=${(e.thermo_h_text_position??v("thermo_h_text_position")??"right")===t}>${{right:"Bottom",left:"Top",both:"Both"}[t]}</option>`)}
                </select>`,U.tick_position)}
              ${this._row("Minor tick text",r`<input type="checkbox" class="ec-checkbox"
                  .checked=${e.thermo_h_show_minor_tick_text??v("thermo_h_show_minor_tick_text")??!1}
                  @change=${t=>this._updateDefaults({thermo_h_show_minor_tick_text:t.target.checked})} />`,U.minor_tick_text)}
              ${this._numRow("Tick font size",{hint:U.tick_font_size,value:e.thermo_h_tick_font_size,onChange:t=>this._updateDefaults({thermo_h_tick_font_size:t}),min:1,max:20,step:.5,placeholder:"4"})}
              ${this._numRow("Major tick length",{value:e.thermo_h_major_tick_length,onChange:t=>this._updateDefaults({thermo_h_major_tick_length:t}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Major tick thickness",{value:e.thermo_h_major_tick_width,onChange:t=>this._updateDefaults({thermo_h_major_tick_width:t}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick length",{value:e.thermo_h_minor_tick_length,onChange:t=>this._updateDefaults({thermo_h_minor_tick_length:t}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick thickness",{value:e.thermo_h_minor_tick_width,onChange:t=>this._updateDefaults({thermo_h_minor_tick_width:t}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._row("Grid line color",this._colorPicker("d-thermo-h-gc",e.thermo_h_grid_color,t=>this._updateDefaults({thermo_h_grid_color:t||void 0})),U.grid_color)}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._numRow("Above temperature transparency",{value:e.thermo_h_fill_opacity_above,onChange:t=>this._updateDefaults({thermo_h_fill_opacity_above:t}),min:0,max:1,step:.05,placeholder:"0.5"})}
              <p class="ec-hint">How visible the tube is above the current reading — 0 hides the empty part
                entirely, 1 draws it in full.</p>
              ${this._numRow("Decimals",{hint:U.decimals,value:e.thermo_h_decimals,onChange:t=>this._updateDefaults({thermo_h_decimals:t}),min:0,max:4,step:1,placeholder:"1"})}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-h-ttc",e.thermo_h_temp_color,t=>this._updateDefaults({thermo_h_temp_color:t||void 0})),U.temp_color)}
              ${this._numRow("Temperature value size",{value:e.thermo_h_temp_font_size,onChange:t=>this._updateDefaults({thermo_h_temp_font_size:t}),min:4,max:30,step:.5,placeholder:"10"})}
              ${this._libFillRows("d-thermo-h-fc","thermo_h")}
      </div>
    `}_elemBatH(){return r`
      <div class="ec-section">
              ${this._libFillRows("d-bh-fc","battery_h")}
      </div>
    `}_elemBatV(){return r`
      <div class="ec-section">
              ${this._libFillRows("d-bv-fc","battery_v")}
      </div>
    `}_elemTankCyl(){const e=this._config?.defaults??{};return r`
      <div class="ec-section">
              ${this._libFillRows("d-tc-fc","tank_cylinder")}
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
              ${this._libFillRows("d-tw-fc","tank_water")}
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
              ${this._libFillRows("d-tf-fc","tank_fermenter")}
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
              ${this._libFillRows("d-tn-fc","tank_cone")}
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
              ${this._numRow("Label size",{value:e.gauge_arc_label_size,onChange:t=>this._updateDefaults({gauge_arc_label_size:t}),min:6,max:24,step:1,placeholder:"11"})}
      </div>
    `}_extCardScope(e){return{root:this._extCards()[e],apply:t=>this._updateExtCard(e,t)}}_extDefaultsScope(){return{root:this._config?.extended_card_defaults,apply:e=>this._updateExtDefaults(e)}}_renderPopoverPanel(){const e=this._navPath,t=this._extCards();if(e.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addExtCard}>+ Popover Card</button>
        </div>
        ${t.length===0?this._emptyAdd("No popover cards yet — add one",()=>this._addExtCard()):t.map((a,n)=>this._itemCard({dragKey:`extcard:${n}`,icon:"mdi:picture-in-picture-bottom-right",label:a.name??`Popover Card ${n+1}`,sub:`${a.fields.length} field${a.fields.length===1?"":"s"}`,selected:n===this._selExtCard,onClick:()=>{this._selExtCard=n,this._selExtField=-1,this._navPush(`card:${a.id}`,a.name??`Popover Card ${n+1}`)},actions:r`
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateExtCard(n)}}
                  title="Duplicate card">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeExtCard(n)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selExtCard=i;const s=t[i];if(!s)return this._navDeadEnd();if(e.length===1)return r`
        ${this._navMenu(p._POPOVER_CARD_SECTIONS,this._extCardScope(i))}
        ${this._renderExtFieldList(i,s)}
      `;const o=e[1].key;if(o.startsWith("field:")){const a=this._crumbIndex(o,s.fields);this._selExtField=a;const n=s.fields[a];if(!n)return this._navDeadEnd();if(e.length===4&&e[2].key==="fsec:series"&&e[3].key.startsWith("egs:")){const l=this._crumbIndex(e[3].key,n.graph_series);return this._selExtSeries=l,this._fieldSecGraphSeriesItem(i,a,n,l,!0)}if(e.length===4&&e[2].key==="fsec:options"){if(e[3].key.startsWith("eopt:")){const l=this._crumbIndex(e[3].key,n.options);return this._selExtOption=l,this._fieldSecOptionItem(i,a,n,l,!0)}if(e[3].key==="optlayout")return r`
            ${this._clearOverridesBtn(p._OPTION_LAYOUT_DEF,this._fieldScope(i,a,!0))}
            <div class="ec-section">${this._optionLayoutEditor(n,this._updFor(i,a,!0),this._idFor(i,a,!0))}</div>
          `}return e.length===4&&e[2].key==="fsec:controlstyle"&&e[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(i,a,n,e[3].key,!0):e.length===3?this._fieldSection(i,a,n,e[2].key,!0):this._renderExtFieldPanel(i,a,n)}return this._popoverCardSection(i,s,o)}_popoverGlobalDefaults(){return this._config?r`
      <div class="ec-section">
              ${this._row("Columns (default)",r`<select class="ec-select"
                  .value=${String(this._config.extended_card_defaults?.columns??v("columns")??2)}
                  @change=${e=>this._updateExtDefaults({columns:Number(e.target.value)})}
                >
                  <option value="1">1</option>
                  <option value="2" .selected=${(this._config.extended_card_defaults?.columns??v("columns")??2)===2}>2</option>
                  <option value="3" .selected=${this._config.extended_card_defaults?.columns===3}>3</option>
                  <option value="4" .selected=${this._config.extended_card_defaults?.columns===4}>4</option>
                  <option value="5" .selected=${this._config.extended_card_defaults?.columns===5}>5</option>
                  <option value="6" .selected=${this._config.extended_card_defaults?.columns===6}>6</option>
                  <option value="7" .selected=${this._config.extended_card_defaults?.columns===7}>7</option>
                  <option value="8" .selected=${this._config.extended_card_defaults?.columns===8}>8</option>
                </select>`)}
              ${this._row("Width % (default)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="20" max="100"
                  .value=${this._config.extended_card_defaults?.width!=null?String(this._config.extended_card_defaults.width):""}
                  placeholder="70"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({width:t===""?void 0:Number(t)})}}
                />`)}`)}
              ${this._row("Height % (default)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="10" max="100"
                  .value=${this._config.extended_card_defaults?.height!=null?String(this._config.extended_card_defaults.height):""}
                  placeholder="auto"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({height:t===""?void 0:Number(t)})}}
                />`)}`)}
              ${this._row("Field gap (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.field_gap!=null?String(this._config.extended_card_defaults.field_gap):""}
                  placeholder="8"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({field_gap:t===""?void 0:Number(t)})}}
                />`)}`)}
              ${this._row("Column gap (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.column_gap!=null?String(this._config.extended_card_defaults.column_gap):""}
                  placeholder="(from global)"
                  @change=${e=>{const t=e.target.value;this._updateExtDefaults({column_gap:t===""?void 0:Number(t)})}}
                />`)}`)}
              <div class="ec-subsection-title">Card default</div>
              <p class="ec-hint">The box every popover starts from. Popovers do not inherit <b>Mosaic Card Defaults</b> — style them here, and each popover's own <b>Card Style</b> overrides this.</p>
              ${this._copyMosaicCardStyleRow()}
              ${this._boxRows("extd-card",this._config.extended_card_defaults?.card??{},e=>this._updateExtDefaults({card:{...this._config.extended_card_defaults?.card,...e}}))}
              ${this._popoverDimmingRows()}
              <div class="ec-subsection-title">Label default</div>
              <p class="ec-hint">Blank text styles here still cascade from <b>Global Defaults ▸ Label Default</b> and
                <b>Value Default</b> — only the card box above does not.</p>
              ${this._textRows("extd-lbl",this._config.extended_card_defaults?.label??{},e=>this._updateExtDefaults({label:{...this._config.extended_card_defaults?.label,...e}}))}
              <div class="ec-subsection-title">Value default</div>
              ${this._textRows("extd-val",this._config.extended_card_defaults?.value??{},e=>this._updateExtDefaults({value:{...this._config.extended_card_defaults?.value,...e}}))}
      </div>
    `:r``}_copyMosaicCardStyleRow(){const e=this._config?.defaults?.card??{},t=p._COPYABLE_CARD_STYLE_KEYS.filter(s=>e[s]!==void 0);return t.length?r`
      <button class="ec-btn-add" style="width:100%;" @click=${()=>{const s=t.length;if(!window.confirm(`Copy ${s} styling value${s===1?"":"s"} from Mosaic Card Defaults?

${t.join(", ")}

This overwrites those values on the popover defaults, and is a one-off — the two do not stay linked.`))return;const o={};for(const a of t)o[a]=e[a];this._updateExtDefaults({card:{...this._config?.extended_card_defaults?.card,...o}}),this._showUndoToast(`${s} value${s===1?"":"s"} copied from Mosaic Card Defaults`)}}>⧉ Copy styling from Mosaic Card Defaults</button>
      <p class="ec-hint">Copies the whole box style — background and gradient, border colour, border, width, radius, padding, shadow, additional CSS and blur. Nothing stays linked afterwards.</p>
    `:r`<p class="ec-hint">Nothing to copy — <b>Mosaic Card Defaults</b> has no box styling set.</p>`}_popoverDimmingRows(){const e=this._config?.defaults??{},t=Rt(e,rt);return r`
      <div class="ec-subsection-title">Dimming</div>
      <p class="ec-hint">How far the dashboard behind a popover is dimmed while it is open. Set independently of an expanded Mosaic card.</p>
      ${this._row("Dimming",r`
        <select class="ec-select"
          @change=${i=>this._setPopupDimming(i.target.value,rt)}
        >
          ${t===void 0?r`<option value="" selected>Custom</option>`:_}
          ${Object.keys(me).map(i=>r`
            <option value=${i} .selected=${t===i}>${me[i].label} — ${me[i].hint}</option>`)}
        </select>`)}
      ${t===void 0?r`<p class="ec-hint">This scrim was set by hand in YAML, so no preset describes it. Picking one replaces it.</p>`:_}
    `}_popoverCardSection(e,t,i){const s=()=>{switch(i){case"sec:defaults":return this._popoverSecDefaults(e,t);case"sec:style":return this._popoverSecStyle(e,t);case"sec:text":return this._popoverSecText(e,t);default:return r``}};return r`
      ${this._clearOverridesBtn(p._findDef(p._POPOVER_CARD_SECTIONS,i),this._extCardScope(e))}
      ${s()}
    `}_popoverSecDefaults(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${i=>this._updateExtCard(e,{name:i.target.value})}
          />`)}

        ${this._row("Columns",r`<select class="ec-select"
            .value=${String(t.columns??v("columns")??2)}
            @change=${i=>this._updateExtCard(e,{columns:Number(i.target.value)})}
          >
            <option value="1">1</option>
            <option value="2" .selected=${(t.columns??v("columns")??2)===2}>2</option>
            <option value="3" .selected=${t.columns===3}>3</option>
            <option value="4" .selected=${t.columns===4}>4</option>
            <option value="5" .selected=${t.columns===5}>5</option>
            <option value="6" .selected=${t.columns===6}>6</option>
            <option value="7" .selected=${t.columns===7}>7</option>
            <option value="8" .selected=${t.columns===8}>8</option>
          </select>`,"How many columns this popover's fields flow into.")}

        ${this._numRow("Width %",{value:t.width,onChange:i=>this._updateExtCard(e,{width:i}),min:20,max:100,placeholder:"(from defaults)",hint:"Width as a percentage of the dashboard."})}

        ${this._numRow("Height %",{value:t.height,onChange:i=>this._updateExtCard(e,{height:i}),min:10,max:100,placeholder:"auto",hint:"Unset lets the popover size itself to its contents."})}

        ${this._row("Align",r`<select class="ec-select"
            .value=${t.align??v("align")??"left"}
            @change=${i=>this._updateExtCard(e,{align:i.target.value})}
          >
            ${Ce.map(i=>r`<option value=${i} .selected=${(t.align??v("align")??"left")===i}>${Ge[i]}</option>`)}
          </select>`,"Horizontal alignment of the fields inside the popover.")}

        ${this._numRow("Field gap (px)",{value:t.field_gap,onChange:i=>this._updateExtCard(e,{field_gap:i}),min:0,placeholder:"(from defaults)",hint:"Vertical space between fields."})}

        ${this._numRow("Column gap (px)",{value:t.column_gap,onChange:i=>this._updateExtCard(e,{column_gap:i}),min:0,placeholder:"(from defaults)",hint:"Horizontal space between field columns."})}
      </div>
    `}_inheritRow(e,t,i,s){return r`
      ${this._row(e,r`<input type="checkbox" .checked=${!i}
          @change=${o=>s(o.target.checked)} />`,"Ticked, this follows the global default named below. Unticking gives it settings of its own, starting empty.")}
      ${i?_:r`<p class="ec-hint">${t}</p>`}
    `}_popoverSecStyle(e,t){return r`
      <div class="ec-section">
        ${this._inheritRow("Use global card style","Following Global Defaults ▸ Popover Card Defaults ▸ Card default.",t.box!==void 0,i=>this._updateExtCard(e,{box:i?void 0:{}}))}
        ${t.box!==void 0?r`
          <div class="ec-subsection-title">Box style</div>
          ${this._boxRows(`ext${e}`,t.box,i=>this._updateExtCardBox(e,i))}
        `:_}
      </div>
    `}_popoverSecText(e,t){return r`
      <div class="ec-section">
        ${this._inheritRow("Use global label style","Following Global Defaults ▸ Popover Card Defaults ▸ Label default.",t.label_style!==void 0,i=>this._updateExtCard(e,{label_style:i?void 0:{}}))}
        ${t.label_style!==void 0?r`
          <div class="ec-subsection-title">Label Default</div>
          ${this._textRows(`ext${e}-ls`,t.label_style,i=>this._updateExtCard(e,{label_style:{...t.label_style,...i}}))}
        `:_}

        ${this._inheritRow("Use global value style","Following Global Defaults ▸ Popover Card Defaults ▸ Value default.",t.value_style!==void 0,i=>this._updateExtCard(e,{value_style:i?void 0:{}}))}
        ${t.value_style!==void 0?r`
          <div class="ec-subsection-title">Value Default</div>
          ${this._textRows(`ext${e}-vs`,t.value_style,i=>this._updateExtCard(e,{value_style:{...t.value_style,...i}}))}
        `:_}
      </div>
    `}_renderExtFieldList(e,t){const i=t.fields;return r`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?r`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(e,!0)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addExtField(e)}>+ Field</button>
        </div>
        ${this._listFilterBox(i.length)}
        ${i.length===0?this._emptyAdd("No fields yet — add one",()=>this._addExtField(e)):i.map((s,o)=>({f:s,efi:o})).filter(({f:s})=>{const o=this._currentListFilter();return!o||`${this._fieldName(s)} ${this._fieldSub(s)}`.toLowerCase().includes(o)}).map(({f:s,efi:o})=>this._itemCard({dragKey:`extfield:${e}:${o}`,icon:Ee[s.type],label:this._fieldName(s),sub:this._fieldSub(s),selected:o===this._selExtField,onClick:()=>{this._selExtField=o,this._navPush(`field:${s.id}`,`Field ${o+1}`)},actions:r`
                ${this._copiedFieldSrc?.isExt===!0&&this._copiedFieldSrc.cardId===t.id&&this._copiedFieldSrc.fieldId===s.id?r`<span class="ec-copy-badge">Copied</span>`:r`<button class="ec-btn-copy"
                      @click=${a=>{a.stopPropagation(),this._copyField(e,o,!0)}}
                      title="Copy this field">⎘</button>`}
                <button class="ec-btn-dup"
                  @click=${a=>{a.stopPropagation(),this._duplicateField(e,o,!0)}}
                  title="Duplicate field">⧉</button>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeExtField(e,o)}}
                  title="Remove">✕</button>
              `}))}
      </div>
    `}_extFieldHeader(e,t,i){const s=o=>this._updateExtField(e,t,o);return r`
        <div class="ec-section-header">
          <span class="ec-section-title">Field ${t+1}</span>
        </div>

        ${this._row("Type",r`<select class="ec-select"
            .value=${i.type==="graph"?"svg":i.type}
            @change=${o=>{const a=o.target.value;if(se(a)){const n=Pt(a);if(n&&!this._confirmVariantOptionLoss(i,a,n)){o.target.value=i.type==="graph"?"svg":i.type;return}s(this._typeChangePatch(i,a,n?Ae(a,n):{}))}else{if(!this._confirmTypeOptionLoss(i,a)){o.target.value=i.type==="graph"?"svg":i.type;return}s(this._typeChangePatch(i,a)),a==="svg"&&this._openGGPicker(e,t,!0)}}}
          >
            ${Bt.map(o=>r`<option value=${o} .selected=${(i.type==="graph"?"svg":i.type)===o}>${xe[o]}</option>`)}
          </select>`)}

        ${se(i.type)&&Ze(i.type).length>1?this._row("Variant",r`<select class="ec-select"
            .value=${i.variant??""}
            @change=${o=>{const a=o.target.value;if(!this._confirmVariantOptionLoss(i,i.type,a)){o.target.value=i.variant??"";return}s(Ae(i.type,a))}}
          >
            ${this._variantOptions(i.type,i.variant)}
          </select>`):_}

        ${i.type==="svg"||i.type==="graph"?this._row("Element",r`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(i)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(e,t,!0)}>⊞ Change type…</button>
          </div>`):_}

        ${this._row("Display Name",r`<input class="ec-input" type="text"
            .value=${i.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${o=>{const a=o.target.value.trim();s({display_name:a===""?void 0:a})}}
          />`)}

        ${this._row("Column",r`<div style="display:flex;gap:4px;align-items:center">
            ${this._numWrap(r`<input class="ec-input ec-input-num-small" type="number" min="1" max="8"
              .value=${i.column!=null?String(i.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${o=>{const a=o.target.value;s({column:a===""?void 0:Number(a)})}}
            />`)}
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            ${this._numWrap(r`<input class="ec-input ec-input-num-small" type="number" min="2" max="8"
              .value=${i.column_end!=null?String(i.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${o=>{const a=o.target.value;s({column_end:a===""?void 0:Number(a)})}}
            />`)}
          </div>`)}
    `}_renderExtFieldPanel(e,t,i){return i.type==="blank"||i.type==="rule"?r`
        <div class="ec-section ec-section--fields">
          ${this._extFieldHeader(e,t,i)}
          ${this._fieldSecBlankOrRule(e,t,i,!0)}
        </div>
      `:r`
      <div class="ec-section ec-section--fields">
        ${this._extFieldHeader(e,t,i)}
        ${this._fieldSectionMenu(i,e,t,!0)}
      </div>
    `}_renderCanvasRibbonPanel(){const e=this._navPath;if(e.length===0)return this._canvasSectionMenu();if(e[0].key==="sec:bg"&&e.length===2&&e[1].key.startsWith("cbgr:")){const t=this._crumbIndex(e[1].key,this._config?.background?.rules);return this._selCanvasBgRule=t,this._canvasSecBgRule(t)}return this._canvasSection(e[0].key)}_canvasScope(){return{root:this._config,apply:e=>{this._config&&this._emit(K(this._config,e))}}}_canvasSectionMenu(){return this._navMenu(p._CANVAS_SECTIONS,this._canvasScope())}_canvasSection(e){const t=()=>{switch(e){case"sec:mode":return this._canvasSecMode();case"sec:size":return this._canvasSecSize();case"sec:box":return this._canvasSecBox();case"sec:bg":return r`<div class="ec-section">${this._renderBackgroundControls()}</div>`;default:return r``}};return r`
      ${this._clearOverridesBtn(p._findDef(p._CANVAS_SECTIONS,e),this._canvasScope())}
      ${t()}
    `}_gridEntryWarning(){const e=this._config?.cards?.length??0,t=this._embCards().length;if(!e&&!t)return _;const i=[];return e&&i.push(`${e} card${e===1?"":"s"}`),t&&i.push(`${t} embedded card${t===1?"":"s"}`),r`
      <ha-alert alert-type="warning">
        Switching to Grid re-lays out ${i.join(" and ")}: each one snaps to the nearest
        grid intersection, is re-anchored to its centre, and is resized to a whole number of
        columns. Switching back to Precision does not restore the old layout — use Ctrl+Z to
        undo.
      </ha-alert>
    `}_canvasSecMode(){const e=this._config?.canvas??{},t=e.layout_mode==="grid";return r`
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

          ${t?_:this._gridEntryWarning()}

          ${e.layout_mode==="grid"?r`
            ${this._row("Grid columns",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(e.grid?.columns??10)}
                @change=${i=>{const s=Math.max(1,Number(i.target.value)||1);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},columns:s}})}}
              />`)}`,"How many columns the canvas is divided into.")}

            ${this._row("Grid rows",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(e.grid?.rows??15)}
                @change=${i=>{const s=Math.max(1,Number(i.target.value)||1);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},rows:s}})}}
              />`)}`,"How many rows the canvas is divided into.")}

            ${this._row("Card padding (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
                .value=${String(e.grid?.padding??0)}
                @change=${i=>{const s=Math.max(0,Number(i.target.value)||0);this._updateCanvas({grid:{...e.grid??{columns:10,rows:15},padding:s}})}}
              />`)}`,"Space left inside each grid cell around a snapped card.")}
          `:_}
      </div>
    `}_canvasSecSize(){const e=this._config?.canvas??{};return r`
      <div class="ec-section">
          ${this._numRow("Width (px)",{value:e.width,onChange:t=>this._updateCanvas({width:t}),min:1,placeholder:"image width",hint:"The coordinate space cards are positioned in. Unset uses the background image's own width."})}

          ${this._numRow("Height (px)",{value:e.height,onChange:t=>this._updateCanvas({height:t}),min:1,placeholder:"from aspect",hint:"Unset keeps the background image's aspect ratio."})}

          ${this._row("Fit",r`<select class="ec-select"
              .value=${e.fit??v("background_fit")??"cover"}
              @change=${t=>this._updateCanvas({fit:t.target.value})}
            >
              <option value="cover" .selected=${(e.fit??v("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${e.fit==="contain"}>contain</option>
            </select>`)}
          <p class="ec-hint">The base fit for the background image. The Background section's own "Background fit" overrides this when set.</p>

          <div class="ec-subsection-title">Extend (px)</div>

          ${this._row("Top",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.top!=null?String(e.extend.top):""}
              placeholder="0"
              @change=${t=>{const i=t.target.value;this._updateCanvas({extend:{...e.extend,top:i===""?void 0:Number(i)}})}}
            />`)}`,"Adds canvas beyond the background image on this side, for cards that sit off the picture.")}

          ${this._row("Right",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.right!=null?String(e.extend.right):""}
              placeholder="0"
              @change=${t=>{const i=t.target.value;this._updateCanvas({extend:{...e.extend,right:i===""?void 0:Number(i)}})}}
            />`)}`,"Adds canvas beyond the background image on this side, for cards that sit off the picture.")}

          ${this._row("Bottom",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.bottom!=null?String(e.extend.bottom):""}
              placeholder="0"
              @change=${t=>{const i=t.target.value;this._updateCanvas({extend:{...e.extend,bottom:i===""?void 0:Number(i)}})}}
            />`)}`,"Adds canvas beyond the background image on this side, for cards that sit off the picture.")}

          ${this._row("Left",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${e.extend?.left!=null?String(e.extend.left):""}
              placeholder="0"
              @change=${t=>{const i=t.target.value;this._updateCanvas({extend:{...e.extend,left:i===""?void 0:Number(i)}})}}
            />`)}`,"Adds canvas beyond the background image on this side, for cards that sit off the picture.")}
      </div>
    `}_canvasSecBox(){const e=this._config?.canvas??{};return r`
      <div class="ec-section">
          ${this._boxRows("cv",e.box??{},t=>this._updateCanvas({box:{...e.box,...t}}),!0,"Rounds the corners of the canvas and the card itself. Leave blank to use the theme's radius.")}
      </div>
    `}static _bgMethod(e){return e.source==="single"?"single":e.source==="state"?"state":"daynight"}_setBgMethod(e){const t=this._config?.background??{};if(p._bgMethod(t)===e)return;const i=e==="single"?"single":e==="state"?"state":"auto";this._updateBackground({source:i})}_renderBackgroundControls(){if(!this._config)return r``;const e=this._config.background??{},t=e.source??"auto",i=p._bgMethod(e),s=e.rules??[],o=a=>this._updateBackground({rules:a.length?a:void 0});return r`
          <div class="ec-subsection-title">Background</div>

          <div class="ec-mode-tiles">
            <button type="button" class="ec-mode-tile${i==="single"?" active":""}"
              @click=${()=>this._setBgMethod("single")}>
              <ha-icon icon="mdi:image-outline"></ha-icon>
              <span>Single Image</span>
            </button>
            <button type="button" class="ec-mode-tile${i==="daynight"?" active":""}"
              @click=${()=>this._setBgMethod("daynight")}>
              <ha-icon icon="mdi:theme-light-dark"></ha-icon>
              <span>Day / Night</span>
            </button>
            <button type="button" class="ec-mode-tile${i==="state"?" active":""}"
              @click=${()=>this._setBgMethod("state")}>
              <ha-icon icon="mdi:image-multiple-outline"></ha-icon>
              <span>State Entity</span>
            </button>
          </div>
          <p class="ec-hint">${i==="single"?"One fixed background image.":i==="daynight"?"Two sets of images — one for day, one for night — with an EV variant per set.":"One image per entity state. Nothing matching paints no background, so cover every state you care about."}</p>

          ${i==="single"?r`
            ${this._row("Image path",r`<div style="display:flex;gap:4px;align-items:center;">
                <input class="ec-input" type="text" style="flex:1;min-width:0;"
                  .value=${e.url??""}
                  placeholder="/local/image.png or https://…"
                  @change=${a=>this._updateBackground({url:a.target.value.trim()||void 0})}
                />
                ${this._imagePickBtn(a=>this._updateBackground({url:a}))}
              </div>`,"The image drawn behind the whole canvas.")}
          `:_}

          ${i==="state"?r`
            ${this._entitySelector({entity:e.entity,onEntity:a=>this._updateBackground({entity:a||void 0})})}
            <div class="ec-subsection-title">Rules</div>
            ${s.length===0?this._emptyAdd("No rules yet — add one",()=>o([...s,{}])):s.map((a,n)=>this._itemCard({icon:a.url?"mdi:image-check-outline":"mdi:image-off-outline",label:p._bgRuleName(a,n),sub:p._bgRuleSub(a),selected:n===this._selCanvasBgRule,onClick:()=>{this._selCanvasBgRule=n,this._navPush(`cbgr:${n}`,p._bgRuleName(a,n))},actions:r`
                    <button class="ec-btn-remove" title="Remove rule"
                      @click=${l=>{l.stopPropagation(),o(s.filter((c,d)=>d!==n))}}>✕</button>
                  `}))}
            <div style="display:flex;gap:6px;margin-top:6px;">
              <button class="ec-btn-add" @click=${()=>o([...s,{}])}>+ Rule</button>
            </div>
            <p class="ec-hint">Each rule stands alone — one state value, one image. A value matches the state as text, as a number (<code>21</code> matches <code>21.0</code>) or as a boolean (<code>true</code> matches <code>on</code>).</p>
          `:_}

          ${i!=="daynight"?_:r`
          ${this._row("Source",r`<select class="ec-select"
              .value=${t}
              @change=${a=>this._updateBackground({source:a.target.value})}
            >
              <option value="auto" .selected=${t==="auto"}>auto (sun)</option>
              <option value="day" .selected=${t==="day"}>day</option>
              <option value="night" .selected=${t==="night"}>night</option>
              <option value="entity" .selected=${t==="entity"}>entity</option>
            </select>`)}

          ${t==="auto"||t===void 0?this._entitySelector({label:"Sun entity",entity:e.sun_entity,onEntity:a=>this._updateBackground({sun_entity:a}),attribute:e.sun_attribute,onAttribute:a=>this._updateBackground({sun_attribute:a})}):_}

          ${t==="entity"?this._entitySelector({label:"Mode entity",entity:e.mode_entity,onEntity:a=>this._updateBackground({mode_entity:a}),attribute:e.mode_attribute,onAttribute:a=>this._updateBackground({mode_attribute:a})}):_}

          ${this._numRow("EV count",{value:this._config.ev_count,onChange:a=>this._emit({...this._config,ev_count:a}),min:0,placeholder:"0"})}

          <div class="ec-subsection-title">Images</div>
          <p class="ec-hint">One Day and one Night image per EV variant — raising EV count adds rows.</p>

          ${(()=>{const a=Math.max(0,this._config?.ev_count??0),n=Array.from({length:a+1},(l,c)=>String(c));return["day","night"].map(l=>r`
              <div class="ec-subsection-title ec-subsection-title--minor">${l}</div>
              ${n.map(c=>this._row(`${l} / ${c} EV`,r`<div style="display:flex;gap:4px;align-items:center;">
                  <input class="ec-input" type="text" style="flex:1;min-width:0;"
                    .value=${e.images?.[l]?.[c]??""}
                    placeholder="/local/image.png or https://…"
                    @change=${d=>this._setBgImage(l,c,d.target.value)}
                  />
                  ${this._imagePickBtn(d=>this._setBgImage(l,c,d))}
                </div>`))}
            `)})()}
          `}

          ${this._row("Background fit",r`<select class="ec-select"
              .value=${e.fit??v("background_fit")??"cover"}
              @change=${a=>this._updateBackground({fit:a.target.value})}
            >
              <option value="cover" .selected=${(e.fit??v("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${e.fit==="contain"}>contain</option>
            </select>`)}
          <p class="ec-hint">Overrides the Canvas Size section's "Fit" when set. Leave unset to use that value.</p>
    `}_canvasSecBgRule(e){const t=this._config?.background??{},i=t.rules??[],s=i[e];if(!s)return this._navDeadEnd();const o=n=>this._updateBackground({rules:i.map((l,c)=>c===e?{...l,...n}:l)}),a=t.entity?this.hass?.states[t.entity]?.state:void 0;return r`
      <div class="ec-section">
        ${this._row("Value",r`<input class="ec-input" type="text"
            .value=${s.value??""}
            placeholder=${a??"e.g. on, 21, heat"}
            @change=${n=>o({value:n.target.value.trim()||void 0})}
          />`,"The entity state this rule matches. Text, a number, or a boolean.")}
        ${a!=null?r`<p class="ec-hint">${t.entity} is currently <b>${a}</b>.</p>`:_}
        ${this._row("Image path",r`<div style="display:flex;gap:4px;align-items:center;">
            <input class="ec-input" type="text" style="flex:1;min-width:0;"
              .value=${s.url??""}
              placeholder="/local/image.png or https://…"
              @change=${n=>o({url:n.target.value.trim()||void 0})}
            />
            ${this._imagePickBtn(n=>o({url:n}))}
          </div>`,"Shown while the state matches. Leave blank to skip this rule.")}
      </div>
    `}_renderTemplatesRibbonPanel(){const e=this._navPath;return e.length===0?this._navMenu(p._TEMPLATE_SECTIONS):e[0].key==="sec:import"?this._templatesSecImport():e[0].key==="sec:varexport"?this._templatesSecVariantExport():e[0].key==="sec:varimport"?this._templatesSecVariantImport():e[0].key==="sec:export"?this._templatesSecExport():(console.warn(`[mosaic-canvas-card] Templates panel: unknown section key "${e[0].key}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover."))}_templatesSecVariantExport(){const e=this._config?.defaults?.control_variants??{},t=Object.values(e).reduce((i,s)=>i+(s?.length??0),0);return r`
      <div class="ec-section">
        <p class="ec-hint">
          Exports only the custom control variants built in <b>Settings ▸ Global Defaults ▸ Control Default ▸ Variant Builder</b> —
          not the card layout. The file uses the same shape as Mosaic's built-in variant registry.
        </p>
        ${t===0?r`<p class="ec-empty">No custom variants to export.</p>`:r`
            ${this._row("Name",r`<input class="ec-input" type="text"
                .value=${this._templateName}
                placeholder="My Control Variants"
                @input=${i=>{this._templateName=i.target.value}}
              />`)}
            <p class="ec-hint">${t} variant${t===1?"":"s"} across ${Object.keys(e).length} control type${Object.keys(e).length===1?"":"s"}.</p>
            <button class="ec-btn-add" style="width:100%;"
              @click=${()=>bs(ms(e,this._templateName||"Mosaic Control Variants"))}
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
          @change=${e=>{const t=e.target.files?.[0];if(e.target.value="",!t||!this._config)return;const i=new FileReader;i.onload=s=>{const{pack:o,error:a}=vs(s.target?.result);if(a||!o){this._variantImportError=a??"Unknown error.";return}const n=this._config?.defaults?.control_variants??{},{merged:l,added:c,renamed:d}=ys(n,o);if(c===0){this._variantImportError="That file contained no control variants.";return}const h=d>0?`Import ${c} variant(s) from "${o.name}"?

${d} had an id already in use and will be imported under a new id.`:`Import ${c} variant(s) from "${o.name}"?`;window.confirm(h)&&(this._variantImportError="",this._updateDefaults({control_variants:l}),We(l))},i.readAsText(t)}}
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
              placeholder="My Mosaic Dashboard"
              @input=${e=>{this._templateName=e.target.value}}
            />`)}
          ${this._row("Include entities",r`<input type="checkbox" .checked=${this._templateIncludeEntities}
              @change=${e=>{this._templateIncludeEntities=e.target.checked}}
            />`)}
          ${this._templateIncludeEntities?_:r`<p class="ec-hint">Entity, device and area references are removed from the file, so the
                template can be shared — whoever imports it picks their own entities. References to this
                card's Virtuals are kept.</p>`}
          <button class="ec-btn-add" style="width:100%;margin-bottom:12px;"
            @click=${()=>{if(!this._config)return;const e=ps(this._config,this._templateName||"Mosaic Canvas Template",{includeEntities:this._templateIncludeEntities});us(e)}}
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
            @change=${e=>{const t=e.target.files?.[0];if(!t||!this._config)return;const i=new FileReader;i.onload=s=>{const o=s.target?.result,{template:a,error:n}=_s(o);if(n||!a){this._templateError=n??"Unknown error.";return}window.confirm(`Import "${a.name}"?

This will replace your entire card configuration.`)&&(this._templateError="",this._emit(gs(a,this._config.type)))},i.readAsText(t),e.target.value=""}}
          />
          <button class="ec-btn-add" style="width:100%;"
            @click=${()=>{this.shadowRoot?.querySelector("#ec-template-import")?.click()}}
          >⬆ Import from file</button>
          ${this._templateError?r`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._templateError}</p>`:_}
      </div>
    `:r``}_virtualSectionDefs(e){const t=[{key:"sec:defaults",label:"Virtual Defaults",hint:"Name, operation, unit",icon:"mdi:tune",paths:["name","op","unit"]}];return e.op==="time_until"?(t.push({key:"sec:tu",label:"Time Until Settings",hint:"Mode, entities, capacity, labels",icon:"mdi:progress-clock",paths:["mode","value_entity","pct_entity","rate_entity","power_entity","rate_unit_override","recalc_above","recalc_below","capacity_entity","capacity","capacity_kwh","label_max","label_full","label_min","label_empty"]}),t.push({key:"sec:trig",label:"Extra Triggers",hint:"Up to 2 labelled thresholds",icon:"mdi:flag-outline",paths:["triggers"]})):e.op==="statistic"&&(t.push({key:"sec:value",label:"Value",hint:"Source entity + attribute",icon:"mdi:database-outline",paths:["entity","attribute"]}),t.push({key:"sec:stats",label:"HA Statistics",hint:"Period, stat type, advanced characteristic",icon:"mdi:chart-box-outline",paths:p._STAT_PATHS})),t}_virtualScope(e){return{root:this._virtuals()[e],apply:t=>this._updateVirtual(e,t)}}_renderVirtualsRibbonPanel(){const e=this._navPath,t=this._virtuals();if(e.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <div style="display:flex;gap:4px;">
            ${this._virtualClipboard?r`<button class="ec-btn-add" @click=${this._pasteVirtual} title="Paste virtual">⎘ Paste</button>`:_}
            <button class="ec-btn-add" @click=${this._addVirtual}>+ Virtual</button>
          </div>
        </div>
        ${t.length===0?this._emptyAdd("No virtuals yet — add one",()=>this._addVirtual()):t.map((a,n)=>this._itemCard({dragKey:`virt:${n}`,icon:a.op==="time_until"?"mdi:progress-clock":"mdi:memory",label:a.name||a.id,sub:p._VIRTUAL_OPS.find(l=>l.value===a.op)?.label??a.op,selected:n===this._selVirtual,onClick:()=>{this._selVirtual=n,this._navPush(`virt:${a.id}`,a.name||a.id)},actions:r`
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._copyVirtual(n)}}
                  title="Copy">⎘</button>
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateVirtual(n)}}
                  title="Duplicate virtual">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeVirtual(n)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selVirtual=i;const s=t[i];if(!s)return this._navDeadEnd();if(e.length===1)return r`
        ${this._navMenu(this._virtualSectionDefs(s),this._virtualScope(i))}
        ${s.op==="time_until"||s.op==="statistic"?_:r`
          <div class="ec-subsection-title">Inputs (in order) — drag to reorder</div>
          ${s.inputs.length===0?this._emptyAdd("No inputs yet — add one",()=>this._addVirtualInput(i)):s.inputs.map((a,n)=>this._itemCard({dragKey:`vin:${i}:${n}`,icon:"mdi:import",label:a||`Input ${n+1}`,sub:a?`Input ${n+1}`:"No entity selected",selected:n===this._selVirtualInput,onClick:()=>{this._selVirtualInput=n,this._navPush(`vin:${n}`,a||`Input ${n+1}`)},actions:r`
                  <button class="ec-btn-dup"
                    @click=${l=>{l.stopPropagation(),this._duplicateVirtualInput(i,n)}}
                    title="Duplicate input">⧉</button>
                  <button class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeVirtualInput(i,n)}}
                    title="Remove input">✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:4px;"
            @click=${()=>this._addVirtualInput(i)}>+ Input</button>
        `}
      `;const o=e[1].key;if(o.startsWith("vin:")){const a=this._crumbIndex(o,s.inputs);return this._selVirtualInput=a,this._virtualSecInput(i,a)}if(e.length===3&&o==="sec:trig"&&e[2].key.startsWith("trig:")){const a=this._crumbIndex(e[2].key,s.triggers);return this._selTrigger=a,this._virtualSecTriggerItem(i,a)}return this._virtualSection(i,s,o)}_virtualSecInput(e,t){const i=this._virtuals()[e],s=i?.inputs[t];return!i||s===void 0?this._navDeadEnd():r`
      <div class="ec-section">
          ${this._row("Entity",r`<ha-entity-picker
              .hass=${this.hass}
              .value=${s}
              allow-custom-entity
              @value-changed=${o=>this._updateVirtualInput(e,t,o.detail.value)}
            ></ha-entity-picker>`,"An entity feeding this virtual entity's calculation.")}
      </div>
    `}_virtualSection(e,t,i){return r`
      ${this._clearOverridesBtn(p._findDef(this._virtualSectionDefs(t),i),this._virtualScope(e))}
      ${this._virtualSectionBody(e,t,i)}
    `}_virtualSectionBody(e,t,i){return i==="sec:defaults"?this._virtualSecDefaults(e,t):i==="sec:tu"?this._virtualSecTu(e,t):i==="sec:trig"?this._virtualSecTrig(e,t):i==="sec:value"?this._virtualSecValue(e,t):i==="sec:stats"?this._virtualSecStats(e,t):r``}_virtualSecValue(e,t){return r`
      <div class="ec-section">
          ${this._entitySelector({entity:t.entity,onEntity:i=>this._updateVirtual(e,{entity:i}),attribute:t.attribute,onAttribute:i=>this._updateVirtual(e,{attribute:i})})}
      </div>
    `}_virtualSecStats(e,t){return r`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Value entity at it.</p>
          ${this._row("Period",r`<select class="ec-select"
              .value=${t.stat_period??""}
              @change=${i=>{const s=i.target.value,o=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(s);this._updateVirtual(e,{stat_period:s||void 0,stat_period_n:o?t.stat_period_n??void 0:void 0,stat_period_start:s==="custom"?t.stat_period_start??void 0:void 0,stat_period_end:s==="custom"?t.stat_period_end??void 0:void 0})}}
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
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(t.stat_period)?this._row(t.stat_period==="last_n_minutes"?"Number of minutes":t.stat_period==="last_n_hours"?"Number of hours":t.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(r`<input type="number" class="ec-input ec-input-num" min="1" step="1"
              .value=${String(t.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${i=>{const s=parseInt(i.target.value,10);this._updateVirtual(e,{stat_period_n:isNaN(s)||s<1?void 0:s})}}
            />`)):_}
          ${t.stat_period==="custom"?r`
            ${this._row("Start",r`<input type="datetime-local" class="ec-input"
              .value=${t.stat_period_start??""}
              @change=${i=>this._updateVirtual(e,{stat_period_start:i.target.value||void 0})}
            />`)}
            ${this._row("End",r`<input type="datetime-local" class="ec-input"
              .value=${t.stat_period_end??""}
              @change=${i=>this._updateVirtual(e,{stat_period_end:i.target.value||void 0})}
            />`)}
          `:_}
          ${t.stat_period?this._row("Stat type",r`<select class="ec-select"
              .value=${t.stat_type??v("stat_type")??"sum"}
              @change=${i=>this._updateVirtual(e,{stat_type:i.target.value})}
            >
              <option value="sum"        .selected=${(t.stat_type??v("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${t.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${t.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${t.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${t.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${t.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${t.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",r`<select class="ec-select"
              .value=${t.stat_characteristic??""}
              @change=${i=>{const s=i.target.value;this._updateVirtual(e,{stat_characteristic:s||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(i=>r`
                <optgroup label="${i}">
                  ${tt.filter(s=>s.group===i).map(s=>r`
                    <option value=${s.value} .selected=${t.stat_characteristic===s.value}>
                      ${s.label}${s.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${t.stat_characteristic==="percentile"?this._numRow("Percentile (1–99)",{value:t.stat_percentile,onChange:i=>this._updateVirtual(e,{stat_percentile:i}),min:1,max:99,placeholder:"50"}):_}
          ${this._numRow("Max age (hours)",{value:t.stat_max_age_hours,onChange:i=>this._updateVirtual(e,{stat_max_age_hours:i}),min:1,placeholder:"(none)"})}
          ${this._numRow("Sampling size",{value:t.stat_sampling_size,onChange:i=>this._updateVirtual(e,{stat_sampling_size:i}),min:1,placeholder:"(none)"})}
          ${t.stat_characteristic&&t.entity?r`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const i=Le(t.entity,t.stat_characteristic,t.stat_max_age_hours,t.stat_sampling_size,t.stat_percentile);navigator.clipboard.writeText(i)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${Le(t.entity,t.stat_characteristic,t.stat_max_age_hours,t.stat_sampling_size,t.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_virtualSecDefaults(e,t){return r`
      <div class="ec-section">
              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name}
                  @change=${i=>this._updateVirtual(e,{name:i.target.value})}
                />`,"Names this virtual entity wherever it can be picked.")}

              ${this._row("Operation",r`<select class="ec-select"
                  .value=${t.op}
                  @change=${i=>this._updateVirtual(e,{op:i.target.value})}
                >
                  ${p._VIRTUAL_OPS.map(i=>r`<option value=${i.value} .selected=${t.op===i.value}>${i.label}</option>`)}
                </select>`,"How the input entities are combined into one value.")}

              ${t.op!=="time_until"?this._row("Unit override",r`<input class="ec-input" type="text" .value=${t.unit??""}
                  placeholder="(from inputs[0])"
                  @change=${i=>{const s=i.target.value;this._updateVirtual(e,{unit:s||void 0})}}
                />`,"Shown after the value. Unset uses the first input entity's unit."):_}
      </div>
    `}_virtualSecTu(e,t){return r`
      <div class="ec-section">
                ${this._row("Mode",r`<select class="ec-select"
                    .value=${t.mode??v("virtual_mode")??"percent"}
                    @change=${i=>this._updateVirtual(e,{mode:i.target.value})}
                  >
                    <option value="percent"  .selected=${(t.mode??v("virtual_mode")??"percent")==="percent"}>% based</option>
                    <option value="absolute" .selected=${t.mode==="absolute"}>Absolute value</option>
                  </select>`)}

                ${this._row((t.mode??v("virtual_mode")??"percent")==="percent"?"% entity":"Current value entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.value_entity??t.pct_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(e,{value_entity:i.detail.value||void 0,pct_entity:void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.rate_entity??t.power_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(e,{rate_entity:i.detail.value||void 0,power_entity:void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate unit override",r`<input class="ec-input" type="text"
                    .value=${t.rate_unit_override??""}
                    placeholder="auto-detect from entity"
                    @change=${i=>{const s=i.target.value;this._updateVirtual(e,{rate_unit_override:s||void 0})}}
                  />`)}
                <p class="ec-hint">Auto-detected from the rate entity; only set this if auto-detection fails.</p>

                ${this._row("Recalc above (rate)",this._numWrap(r`<input class="ec-input ec-input-num" type="number" step="any"
                    .value=${t.recalc_above!=null?String(t.recalc_above):""}
                    placeholder="e.g. 100"
                    @change=${i=>{const s=parseFloat(i.target.value);this._updateVirtual(e,{recalc_above:Number.isFinite(s)?s:void 0})}}
                  />`))}

                ${this._row("Recalc below (rate)",this._numWrap(r`<input class="ec-input ec-input-num" type="number" step="any"
                    .value=${t.recalc_below!=null?String(t.recalc_below):""}
                    placeholder="e.g. -160"
                    @change=${i=>{const s=parseFloat(i.target.value);this._updateVirtual(e,{recalc_below:Number.isFinite(s)?s:void 0})}}
                  />`))}
                <p class="ec-hint">Only recompute Time Until when the raw rate reading is above and/or below these (signed, in the rate entity's units). Inside the band the last value is frozen. Leave blank to always recalculate.</p>

                ${this._row("Capacity entity",r`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.capacity_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(e,{capacity_entity:i.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Capacity (Manual)",this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="0" step="0.1"
                    .value=${String(t.capacity??t.capacity_kwh??"")}
                    placeholder="e.g. 13.5"
                    @change=${i=>{const s=parseFloat(i.target.value);this._updateVirtual(e,{capacity:Number.isFinite(s)?s:void 0,capacity_kwh:void 0})}}
                  />`))}

                ${this._row("Maximum label",r`<input class="ec-input" type="text"
                    .value=${t.label_max??t.label_full??""}
                    placeholder="Full"
                    @change=${i=>{const s=i.target.value;this._updateVirtual(e,{label_max:s||void 0,label_full:void 0})}}
                  />`)}

                ${this._row("Minimum label",r`<input class="ec-input" type="text"
                    .value=${t.label_min??t.label_empty??""}
                    placeholder="Empty"
                    @change=${i=>{const s=i.target.value;this._updateVirtual(e,{label_min:s||void 0,label_empty:void 0})}}
                  />`)}
      </div>
    `}_virtualSecTrig(e,t){return r`
      ${(t.triggers??[]).length===0?this._emptyAdd("No extra triggers yet — add one",()=>{const i=[...t.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(e,{triggers:i})}):(t.triggers??[]).map((i,s)=>this._itemCard({dragKey:`trig:${e}:${s}`,icon:"mdi:flag-outline",label:i.label||`Trigger ${s+1}`,sub:`${i.percent??i.value}${(t.mode??v("virtual_mode")??"percent")==="percent"?"%":""}`,selected:s===this._selTrigger,onClick:()=>{this._selTrigger=s,this._navPush(`trig:${s}`,i.label||`Trigger ${s+1}`)},actions:r`
              ${(t.triggers??[]).length<2?r`<button class="ec-btn-dup" title="Duplicate trigger"
                @click=${o=>{o.stopPropagation(),this._duplicateTrigger(e,s)}}>⧉</button>`:_}
              <button class="ec-btn-remove" title="Remove trigger"
                @click=${o=>{o.stopPropagation();const a=(t.triggers??[]).filter((n,l)=>l!==s);this._updateVirtual(e,{triggers:a.length?a:void 0})}}>✕</button>
            `}))}
      ${(t.triggers??[]).length<2?r`
        <button class="ec-btn-add" style="margin-top:6px"
          @click=${()=>{const i=[...t.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(e,{triggers:i})}}>+ Trigger</button>
      `:_}
      <p class="ec-hint" style="margin-top:10px">Auto-switches to the nearest trigger ahead in the current direction.</p>
    `}_virtualSecTriggerItem(e,t){const i=this._virtuals()[e],s=i?.triggers?.[t];return!i||!s?this._navDeadEnd():r`
      <div class="ec-section">
          ${this._row((i.mode??v("virtual_mode")??"percent")==="percent"?"Percent":"Value",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
              step="${(i.mode??v("virtual_mode")??"percent")==="percent"?"1":"any"}"
              .value=${String(s.percent??s.value)}
              @change=${o=>{const a=parseFloat(o.target.value),n=[...i.triggers??[]];n[t]={...n[t],value:Number.isFinite(a)?a:s.value},this._updateVirtual(e,{triggers:n})}}
            />`)}`)}
          ${this._row("Label",r`<input class="ec-input" type="text" .value=${s.label}
              placeholder="Label"
              @change=${o=>{const a=[...i.triggers??[]];a[t]={...a[t],label:o.target.value},this._updateVirtual(e,{triggers:a})}}
            />`)}
      </div>
    `}_zoneScope(e){return{root:this._zones()[e],apply:t=>this._updateZone(e,t)}}_renderZonesRibbonPanel(){const e=this._navPath,t=this._zones();if(e.length===0)return r`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Invisible hotspot regions that trigger actions when tapped. Drag the dashed handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addZone}>+ Clickable Zone</button>
        </div>
        ${t.length===0?this._emptyAdd("No clickable zones yet — add one",()=>this._addZone()):t.map((a,n)=>this._itemCard({dragKey:`zone:${n}`,icon:"mdi:gesture-tap-box",label:a.name??a.id,sub:`${a.width}×${a.height}px`,selected:n===this._selZone,onClick:()=>{this._selZone=n,this._navPush(`zone:${a.id}`,a.name??a.id)},actions:r`
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateZone(n)}}
                  title="Duplicate zone">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeZone(n)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selZone=i;const s=t[i];if(!s)return this._navDeadEnd();if(e.length===1)return this._navMenu(p._ZONE_SECTIONS,this._zoneScope(i));const o=this._clearOverridesBtn(p._findDef(p._ZONE_SECTIONS,e[1].key),this._zoneScope(i));return e[1].key==="sec:actions"?r`${o}${this._zoneSecActions(i,s)}`:r`${o}${this._zoneSecDefaults(i,s)}`}_zoneSecDefaults(e,t){const{totalW:i,totalH:s}=Q(this._config);return r`
      <div class="ec-section">
              ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${o=>this._updateZone(e,{name:o.target.value||void 0})}
                />`)}

              ${this._row("X (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
                  .value=${String(Math.round(t.position.x*i))}
                  @change=${o=>this._updateZone(e,{position:{...t.position,x:Number(o.target.value)/i}})}
                />`)}`,"Distance from the left edge of the canvas to the zone's anchor point.")}

              ${this._row("Y (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
                  .value=${String(Math.round(t.position.y*s))}
                  @change=${o=>this._updateZone(e,{position:{...t.position,y:Number(o.target.value)/s}})}
                />`)}`,"Distance from the top edge of the canvas to the zone's anchor point.")}

              ${this._row("Anchor",r`<select class="ec-select"
                  .value=${t.anchor??v("anchor")??"top-left"}
                  @change=${o=>this._updateZone(e,{anchor:o.target.value})}
                >
                  ${Be.map(o=>r`<option value=${o} .selected=${(t.anchor??v("anchor")??"top-left")===o}>${it[o]}</option>`)}
                </select>`,"Which corner of the zone sits at its X/Y position.")}

              ${this._row("Width (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.width)}
                  @change=${o=>this._updateZone(e,{width:Math.max(1,Number(o.target.value))})}
                />`)}`)}

              ${this._row("Height (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(t.height)}
                  @change=${o=>this._updateZone(e,{height:Math.max(1,Number(o.target.value))})}
                />`)}`)}

              ${this._row("Overlay color",this._colorPicker(`zone-${e}-overlay`,t.color,o=>this._updateZone(e,{color:o}),{clearTitle:"Clear"}),"Tints the zone so it can be seen on the dashboard. Leave blank for an invisible tap target.")}

              ${this._numRow("Radius (px)",{value:t.radius,onChange:o=>this._updateZone(e,{radius:o}),min:0,placeholder:"0",hint:"Rounds the zone's corners. Only visible with an overlay colour set."})}
      </div>
    `}_zoneSecActions(e,t){return r`
      <div class="ec-section">
        ${this._actionRows({tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},i=>this._updateZone(e,i))}
      </div>
    `}_flowScope(e){return{root:this._flows()[e],apply:t=>this._updateFlow(e,t)}}_renderFlowsRibbonPanel(){const e=this._navPath,t=this._flows();if(e.length===0)return r`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addFlow}>+ Flow Line</button>
        </div>
        ${t.length===0?this._emptyAdd("No animated flow lines yet — add one",()=>this._addFlow()):t.map((n,l)=>this._itemCard({dragKey:`flow:${l}`,icon:"mdi:chart-timeline-variant",label:n.name??n.id,sub:`${n.style??"dashes"}${n.entity?" · "+(n.entity.startsWith("virtual:")?this._virtuals().find(c=>`virtual:${c.id}`===n.entity)?.name??n.entity:n.entity):""}`,selected:l===this._selFlow,onClick:()=>{this._selFlow=l,this._selPoint=-1,this._navPush(`flow:${n.id}`,n.name??n.id)},actions:r`
                <button class="ec-btn-dup"
                  @click=${c=>{c.stopPropagation(),this._duplicateFlow(l)}}
                  title="Duplicate flow">⧉</button>
                <button class="ec-btn-remove"
                  @click=${c=>{c.stopPropagation(),this._removeFlow(l)}}
                  title="Remove flow">✕</button>
              `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selFlow=i;const s=t[i];if(!s)return this._navDeadEnd();if(e.length===1)return r`
        ${this._navMenu(p._FLOW_SECTIONS,this._flowScope(i))}
        ${this._renderFlowPoints(s)}
      `;const o=e[1].key;if(o.startsWith("pt:")){const n=this._crumbIndex(o,s.points);return this._selPoint=n,this._flowSecPoint(i,n)}const a=this._clearOverridesBtn(p._findDef(p._FLOW_SECTIONS,o),this._flowScope(i));switch(o){case"sec:speed":return r`${a}${this._flowSecSpeed(s)}`;case"sec:style":return r`${a}${this._flowSecStyle(s)}`;case"sec:defaults":return r`${a}${this._flowSecDefaults(s)}`;default:return console.warn(`[mosaic-canvas-card] Flows panel: unknown section key "${o}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover.")}}_flowSecDefaults(e){return r`
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
                    ></ha-entity-picker>`,"The entity whose value drives this flow. A positive value runs it forwards, a negative value backwards.")}
              ${!e.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",r`<select class="ec-select"
                  .value=${""}
                  @change=${t=>{const i=t.target.value;i&&this._updateFlow(this._selFlow,{entity:i}),t.target.value=""}}
                >
                  <option value="">(pick a virtual)</option>
                  ${this._virtuals().map(t=>r`<option value=${"virtual:"+t.id}>${t.name}</option>`)}
                </select>`,"Use a virtual entity from Elements ▸ Virtual Entities instead of a real one."):_}

              ${this._numRow(`Min display power (${this._config?.defaults?.power_unit??"W"})`,{value:e.min_power,onChange:t=>this._updateFlow(this._selFlow,{min_power:t}),min:0,step:1,placeholder:"e.g. 5",hint:"Hides the flow while the entity value is below this, in your global power unit."})}

              ${this._row("Invert direction",r`<input type="checkbox"
                  .checked=${e.invert??!1}
                  @change=${t=>{const i=t.target.checked;this._updateFlow(this._selFlow,{invert:i||void 0})}}
                />`,"Swaps which way the flow runs, and swaps the forward and reverse colours with it.")}
      </div>
    `}_flowSecSpeed(e){const t=e.speed_min_duration??v("flow_speed_min_duration")??5,i=e.speed_max_duration??v("flow_speed_max_duration")??1;return r`
      <div class="ec-section">
              ${this._numRow(`Slowest animation value (${this._config?.defaults?.power_unit??"W"})`,{value:e.speed_min_value,onChange:s=>this._updateFlow(this._selFlow,{speed_min_value:s}),min:0,placeholder:"e.g. 100",hint:"Entity value at which the animation runs slowest."})}

              ${this._numRow(`Fastest animation value (${this._config?.defaults?.power_unit??"W"})`,{value:e.speed_max_value,onChange:s=>this._updateFlow(this._selFlow,{speed_max_value:s}),min:0,placeholder:"e.g. 5000",hint:"Entity value at which the animation runs fastest."})}

              ${this._row("Speed",r`<div class="ec-dual-range">
                  <span class="ec-dual-range-label">Slowest</span>
                  <div class="ec-dual-range-track">
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(t)}
                      style="direction:rtl"
                      @input=${s=>{const o=Number(s.target.value),a=e.speed_max_duration??v("flow_speed_max_duration")??1;this._updateFlow(this._selFlow,{speed_min_duration:Math.max(o,a)})}}
                    />
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(i)}
                      style="direction:rtl"
                      @input=${s=>{const o=Number(s.target.value),a=e.speed_min_duration??v("flow_speed_min_duration")??5;this._updateFlow(this._selFlow,{speed_max_duration:Math.min(o,a)})}}
                    />
                  </div>
                  <span class="ec-dual-range-label">Fastest</span>
                </div>`,"How far apart the slowest and fastest animation speeds are. Drag the left handle for the slow end, the right for the fast end.")}
              ${e.speed_min_value==null||e.speed_max_value==null?r`<p class="ec-hint">Has no effect until both "Slowest"/"Fastest animation value" above are set — the animation speed stays fixed at Duration below.</p>`:_}

              ${this._numRow("Duration (s)",{value:e.duration,onChange:s=>this._updateFlow(this._selFlow,{duration:s}),min:.1,step:.1,placeholder:"2",hint:"Time for one particle to travel the line when the speed range is not in use."})}
      </div>
    `}_flowSecStyle(e){return r`
      <div class="ec-section">
              ${this._row("Style",r`<select class="ec-select"
                  .value=${e.style??v("flow_style")??"dashes"}
                  @change=${t=>this._updateFlow(this._selFlow,{style:t.target.value})}
                >
                  ${p._FLOW_STYLES.map(t=>r`<option value=${t} .selected=${(e.style??v("flow_style")??"dashes")===t}>${t}</option>`)}
                </select>`,"How the line is drawn — dashes, dots, a fluid stream or discrete particles.")}

              ${this._row("Forward color",this._colorPicker(`flow-${this._selFlow}-fwd`,e.forward_color??e.color,t=>this._updateFlow(this._selFlow,{forward_color:t,color:void 0})),"Colour while the value is positive.")}

              ${this._row("Reverse color",this._colorPicker(`flow-${this._selFlow}-rev`,e.reverse_color,t=>this._updateFlow(this._selFlow,{reverse_color:t})),"Colour while the value is negative.")}

              ${this._numRow("Width (px)",{value:e.width,onChange:t=>this._updateFlow(this._selFlow,{width:t}),min:1,placeholder:"3"})}

              ${this._numRow("Particle count",{value:e.particle_count,onChange:t=>this._updateFlow(this._selFlow,{particle_count:t}),min:1,placeholder:"6",hint:"How many particles are in flight at once."})}

              ${this._row("Curve",r`<select class="ec-select"
                  .value=${e.curve??v("flow_curve")??"straight"}
                  @change=${t=>this._updateFlow(this._selFlow,{curve:t.target.value})}
                >
                  <option value="straight" .selected=${(e.curve??v("flow_curve")??"straight")==="straight"}>straight</option>
                  <option value="rounded" .selected=${e.curve==="rounded"}>rounded</option>
                </select>`,"Whether the line bows between its points or runs straight.")}
      </div>
    `}_pointLabel(e,t){if(e.card!=null){const i=this._config?.cards.find(s=>s.id===e.card);return{label:`Point ${t+1}`,sub:`Card · ${i?.name??e.card} · ${e.side??"center"}`}}return{label:`Point ${t+1}`,sub:`Free · ${e.x??0}, ${e.y??0}`}}_renderFlowPoints(e){return r`
      <div class="ec-subsection-title">Points — drag to reorder</div>
      ${e.points.length===0?this._emptyAdd("No points yet — add one",()=>this._addFlowPoint(this._selFlow)):e.points.map((t,i)=>{const{label:s,sub:o}=this._pointLabel(t,i);return this._itemCard({dragKey:`pt:${this._selFlow}:${i}`,icon:t.card!=null?"mdi:radio-button-on":"mdi:radio-button-off",label:s,sub:o,selected:i===this._selPoint,onClick:()=>{this._selPoint=i,this._navPush(`pt:${i}`,`Point ${i+1}`)},actions:r`
                <button class="ec-btn-dup"
                  @click=${a=>{a.stopPropagation(),this._duplicateFlowPoint(this._selFlow,i)}}
                  title="Duplicate point">⧉</button>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeFlowPoint(this._selFlow,i)}}
                  title="Remove">✕</button>
              `})})}
      <button class="ec-btn-add" style="margin-top:4px;"
        @click=${()=>this._addFlowPoint(this._selFlow)}>+ Point</button>
    `}_flowSecPoint(e,t){const i=this._flows()[e],s=i?.points[t];if(!i||!s)return this._navDeadEnd();const o=s.card!=null?"card":"free";return r`
      <div class="ec-section">
                    ${this._row("Kind",r`<select class="ec-select"
                        .value=${o}
                        @change=${a=>this._setPointKind(e,t,a.target.value)}
                      >
                        <option value="free" .selected=${o==="free"}>Free (x/y)</option>
                        <option value="card" .selected=${o==="card"}>Card</option>
                      </select>`)}

                    ${o==="card"?r`
                      ${this._row("Card",r`<select class="ec-select"
                          .value=${s.card??""}
                          @change=${a=>this._updateFlowPoint(e,t,{card:a.target.value})}
                        >
                          ${this._config.cards.map(a=>r`
                            <option value=${a.id} .selected=${s.card===a.id}>${a.name??a.id}</option>
                          `)}
                        </select>`)}

                      ${this._row("Side",r`<select class="ec-select"
                          .value=${s.side??"center"}
                          @change=${a=>this._updateFlowPoint(e,t,{side:a.target.value})}
                        >
                          ${p._FLOW_SIDES.map(a=>r`<option value=${a} .selected=${(s.side??"center")===a}>${a}</option>`)}
                        </select>`)}
                    `:r`
                      ${this._row("X",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
                          .value=${String(s.x??0)}
                          @change=${a=>this._updateFlowPoint(e,t,{x:Number(a.target.value)})}
                        />`)}`)}

                      ${this._row("Y",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
                          .value=${String(s.y??0)}
                          @change=${a=>this._updateFlowPoint(e,t,{y:Number(a.target.value)})}
                        />`)}`)}
                    `}

                    <div class="ec-subsection-title">Offset (px)</div>
                    <p class="ec-hint">Nudges this point away from its base position (card edge or x/y) without moving the card.</p>
                    ${this._numRow("dx",{value:s.dx??0,onChange:a=>this._updateFlowPoint(e,t,{dx:a})})}
                    ${this._numRow("dy",{value:s.dy??0,onChange:a=>this._updateFlowPoint(e,t,{dy:a})})}
      </div>
    `}_actionHass(){const e=this.hass;if(!e)return;this._mergedServicesSrc!==e.services&&(this._mergedServicesSrc=e.services,this._mergedServices={...e.services,...p._PSEUDO_SERVICES});const t=e.localize;return{...e,services:this._mergedServices,localize:((i,...s)=>p._PSEUDO_TITLES[i]??t(i,...s))}}static _actionToServiceId(e){return!e||e.action==="none"?"":e.action==="call-service"?e.service??"":p._PSEUDO_ACTIONS.find(t=>t.action===e.action)?.id??""}static _serviceIdToAction(e,t){if(!e)return;const i=p._PSEUDO_ACTIONS.find(s=>s.id===e);if(!i)return{action:"call-service",service:e,target:t?.target,service_data:t?.service_data};switch(i.action){case"more-info":case"toggle":return{action:i.action,entity:t?.entity};case"navigate":return{action:"navigate",navigation_path:t?.navigation_path};case"url":return{action:"url",url_path:t?.url_path};case"open-extended":return{action:"open-extended",extended_card_id:t?.extended_card_id};default:return{action:i.action}}}_popoverCardRow(e,t){const i=this._config?.extended_cards??[];if(i.length===0)return r`
        <p class="ec-hint">No popover cards exist yet, so there is nothing to open.</p>
        <button class="ec-btn-add" @click=${()=>{this._navTab="cards",this._navPanel="popover",this._navPath=[]}}>
          Go to Popover Cards
        </button>
      `;const s=e.extended_card_id,o=s!=null&&s!==""&&!i.some(a=>a.id===s);return r`
      ${this._row("Popover card",r`<select class="ec-select"
          .value=${s??""}
          @change=${a=>t({...e,extended_card_id:a.target.value||void 0})}
        >
          <option value="" .selected=${!s}>(select)</option>
          ${i.map(a=>r`
            <option value=${a.id} .selected=${s===a.id}>${a.name??a.id}</option>
          `)}
        </select>`)}
      ${o?r`<ha-alert alert-type="warning">This action points at <code>${s}</code>, which no longer exists. Pick another popover card.</ha-alert>`:_}
    `}_actionPicker(e,t,i,s="",o){const a=p._actionToServiceId(t);return r`
      ${this._row(e,r`<ha-service-picker
        .hass=${this._actionHass()}
        .value=${a}
        placeholder=${s}
        @value-changed=${n=>{n.stopPropagation();const l=n.detail.value??"";l!==a&&i(p._serviceIdToAction(l,t))}}
      ></ha-service-picker>`,o)}
      ${this._actionSubForm(t,i)}
    `}_actionSubForm(e,t){if(!e)return _;const i=(s,o,a,n)=>this._row(s,r`<input class="ec-input" type="text" .value=${o??""} placeholder=${a}
        @change=${l=>t(n(l.target.value.trim()||void 0))} />`);switch(e.action){case"call-service":return r`<ha-service-control
          .hass=${this.hass}
          .hidePicker=${!0}
          .value=${{action:e.service,target:e.target,data:e.service_data}}
          @value-changed=${s=>{s.stopPropagation();const o=s.detail.value??{};t({...e,service:o.action??e.service,target:o.target,service_data:o.data})}}
        ></ha-service-control>`;case"more-info":case"toggle":return this._row("Entity",r`<ha-entity-picker
          .hass=${this.hass}
          .value=${e.entity??""}
          allow-custom-entity
          @value-changed=${s=>t({...e,entity:s.detail.value||void 0})}
        ></ha-entity-picker>`);case"navigate":return this._row("Path",r`<ha-selector
          class="ec-nav-picker"
          .hass=${this.hass}
          .selector=${p._NAV_SELECTOR}
          .value=${e.navigation_path??""}
          @value-changed=${s=>{s.stopPropagation();const o=s.detail.value;t({...e,navigation_path:o||void 0})}}
        ></ha-selector>`);case"url":return i("URL",e.url_path,"https://…",s=>({...e,url_path:s}));case"open-extended":return this._popoverCardRow(e,t);default:return _}}_actionRows(e,t,i=["tap_action","hold_action","double_tap_action"],s=""){return r`${i.map(o=>this._actionPicker(p._ACTION_LABELS[o],e[o],a=>t({[o]:a}),s,p._ACTION_HINTS[o]))}`}_openGGPicker(e,t,i=!1){this._ggTarget={ci:e,fi:t,isExtended:i},this._ggOpen=!0}_pickGG(e,t){if(!this._ggTarget)return;const{ci:i,fi:s,isExtended:o}=this._ggTarget,a={type:e,...t};o?this._updateExtField(i,s,a):this._updateField(i,s,a),this._ggOpen=!1,this._ggTarget=null}_embScope(e){return{root:this._embCards()[e],apply:t=>this._updateEmbCard(e,t)}}_renderEmbeddedPanel(){const e=this._navPath,t=this._embCards();if(e.length===0)return r`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Embed any HA Lovelace card as a positioned canvas element. Drag the ◈ handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addEmbCard}>+ Embedded External Card</button>
        </div>
        ${t.length===0?this._emptyAdd("No embedded external cards yet — add one",()=>this._addEmbCard()):t.map((a,n)=>this._itemCard({dragKey:`emb:${n}`,icon:"mdi:widgets",label:a.name??a.id,sub:a.card_config?.type??"No card type set",selected:n===this._selEmbCard,onClick:()=>{this._selEmbCard=n,this._navPush(`emb:${a.id}`,a.name??a.id)},actions:r`
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateEmbCard(n)}}
                  title="Duplicate card">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeEmbCard(n)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selEmbCard=i;const s=t[i];if(!s)return this._navDeadEnd();if(e.length===1)return this._navMenu(p._EMB_SECTIONS,this._embScope(i));const o=this._clearOverridesBtn(p._findDef(p._EMB_SECTIONS,e[1].key),this._embScope(i));switch(e[1].key){case"sec:pos":return r`${o}${this._embSecPos(i,s)}`;case"sec:appear":return r`${o}${this._embSecAppear(i,s)}`;case"sec:visibility":return r`${o}${this._embSecVisibility(i,s)}`;case"sec:config":return r`${o}${this._embSecConfig(i,s)}`;default:return console.warn(`[mosaic-canvas-card] Embedded panel: unknown section key "${e[1].key}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover.")}}_embSecConfig(e,t){return r`
      <div class="ec-section">
        ${this._row("Name",r`<input class="ec-input" type="text" .value=${t.name??""}
            @change=${i=>this._updateEmbCard(e,{name:i.target.value||void 0})}
          />`)}

        ${this._row("Card Type",r`<span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${t.card_config?.type?String(t.card_config.type):r`<span style="color:#555;font-style:italic;">not set</span>`}
          </span>`,"Which Home Assistant card this is. Its own settings are edited in the config editor below.")}

        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker({kind:"std",idx:e})}>
            ${t.card_config?.type?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor({kind:"std",idx:e})}>
            Edit Config…
          </button>
        </div>
      </div>
    `}_embSecPos(e,t){const{totalW:i,totalH:s}=Q(this._config);return r`
      <div class="ec-section">
        ${this._row("X (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
            .value=${String(Math.round(t.position.x*i))}
            @change=${o=>this._updateEmbCard(e,{position:{...t.position,x:Number(o.target.value)/i}})}
          />`)}`,"Distance from the left edge of the canvas to the card's anchor point.")}

        ${this._row("Y (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number"
            .value=${String(Math.round(t.position.y*s))}
            @change=${o=>this._updateEmbCard(e,{position:{...t.position,y:Number(o.target.value)/s}})}
          />`)}`,"Distance from the top edge of the canvas to the card's anchor point.")}

        ${this._row("Anchor",r`<select class="ec-select"
            .value=${t.anchor??v("anchor")??"top-left"}
            @change=${o=>this._updateEmbCard(e,{anchor:o.target.value})}
          >
            ${Be.map(o=>r`<option value=${o} .selected=${(t.anchor??v("anchor")??"top-left")===o}>${it[o]}</option>`)}
          </select>`,"Which point of the card sits at its X/Y position.")}
        ${this._gridGeom()?r`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._gridGeom()?this._row("Columns (span)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(t.grid_span??1)}
            @change=${o=>{const a=this._gridGeom();if(!a)return;const n=Math.max(1,Math.min(a.cols,Number(o.target.value)||1)),l=Math.max(8,n*a.cellW-a.padding);this._updateEmbCard(e,{grid_span:n,width:l})}}
          />`)}`,"How many grid columns the card covers. Changing it resets Width to match."):_}

        ${this._row("Width (px)",r`${this._numWrap(r`<input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(t.width)}
            @change=${o=>this._updateEmbCard(e,{width:Number(o.target.value)})}
          />`)}`,"How wide the embedded card is drawn.")}

        ${this._numRow("Height (px)",{value:t.height,onChange:o=>this._updateEmbCard(e,{height:o}),min:20,placeholder:"auto",hint:"Unset lets the embedded card size itself."})}
      </div>
    `}_embSecAppear(e,t){return r`
      <div class="ec-section">
        <div class="ec-subsection-title">Frame</div>
        <p class="ec-hint">Mosaic's own frame, drawn on the element that <i>holds</i> the card. The card inside
          keeps painting itself — use <b>Transparent</b> below to take its background away and let this show
          through. Additional CSS here styles the frame: size it, move it, layer it.</p>
        ${this._inheritRow("Use global card style","Following Global Defaults ▸ Embedded Card Default.",t.box!==void 0,i=>this._updateEmbCard(e,{box:i?void 0:{}}))}
        ${t.box!==void 0?r`
              ${this._boxRows(`emb${e}`,t.box,i=>this._updateEmbCardBox(e,i))}
              <p class="ec-hint"><b>Padding</b> insets the card inside its footprint rather than making it
                wider — the frame keeps the width set in <b>Position &amp; Size</b>.</p>
            `:_}

        <div class="ec-subsection-title">The card itself</div>
        ${this._inheritRow("Use global transparency","Following Global Defaults ▸ Embedded Card Default.",t.transparent!==void 0,i=>this._updateEmbCard(e,{transparent:i?void 0:!1}))}
        ${t.transparent!==void 0?r`
              ${this._row("Transparent",r`<input type="checkbox" .checked=${t.transparent}
                  @change=${i=>this._updateEmbCard(e,{transparent:i.target.checked})}
                />`)}
              <p class="ec-hint">Removes the embedded card's own background, border and shadow. Its content
                stays; only the panel it sits on goes.</p>
            `:_}
        ${this._cssRow(t.extra_css,i=>this._updateEmbCard(e,{extra_css:i}),"Card CSS")}
        <p class="ec-hint">Applied to the card itself, not to the frame — this is where a
          <code>--ha-card-…</code> override or a font change goes. Anything that sizes, moves or layers the
          whole thing belongs in the frame's <b>Additional CSS</b> above. Added after the global <b>Card
          CSS</b> rather than replacing it, so this wins where the two name the same property.</p>
      </div>
    `}_embSecVisibility(e,t){return r`
      <div class="ec-section">
        ${this._visibilityRows(t.visible_when,i=>this._updateEmbCard(e,{visible_when:i}))}
        <p class="ec-hint">The card stays visible here in the editor whatever the condition says, so you can
          still select and edit it. It hides on the dashboard itself.</p>
      </div>
    `}_renderEmbEditorModal(){if(!this._embEditorOpen)return _;const e=!!this._embNativeEditor,t=this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0,i=t?String(t.type??""):"";return r`
      <div class="ec-lib-backdrop" @click=${this._closeEmbEditor}></div>
      <div class="ec-lib-modal" style="width:min(580px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">${i||"Embedded Card"} — Config</span>
          <div style="display:flex;align-items:center;gap:8px;">
            ${e?r`
              <button class="ec-btn-ghost ec-btn-ghost--sm"
                @click=${()=>{this._embNativeEditor=null}}>
                Use JSON
              </button>`:_}
            <button class="ec-btn-clear" @click=${this._closeEmbEditor}>✕</button>
          </div>
        </div>

        ${e?r`
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
              ${i?r`<span style="color:#c87aff;"> (no visual editor available for this card type)</span>`:_}
            </p>
            <textarea
              style="width:100%;box-sizing:border-box;min-height:220px;font-family:monospace;font-size:13px;background:#060e18;color:#c8d8e8;border:1px solid rgba(0,212,255,0.25);border-radius:6px;padding:10px;resize:vertical;outline:none;"
              .value=${this._embEditorYaml}
              @input=${s=>{this._embEditorYaml=s.target.value,this._embEditorYamlError=""}}
              spellcheck="false"
            ></textarea>
            ${this._embEditorYamlError?r`<p style="font-size:12px;color:#ff6b6b;margin:6px 0 0;">${this._embEditorYamlError}</p>`:_}
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-ghost" @click=${this._closeEmbEditor}>Cancel</button>
            <button class="ec-btn-add" style="padding:6px 16px;" @click=${this._saveEmbEditorYaml}>Save</button>
          </div>
        `}
      </div>
    `}_renderEmbPickerModal(){if(!this._embPickerOpen)return _;const e=window.customCards??[],t=Ws.map(c=>({...c,source:"Built-in"})),i=e.map(c=>({type:c.type.startsWith("custom:")?c.type:`custom:${c.type}`,name:c.name??c.type,description:c.description,source:"Custom"})),s=new Set(t.map(c=>c.type)),o=[...t,...i.filter(c=>!s.has(c.type))],a=this._embPickerSearch.trim().toLowerCase(),n=a?o.filter(c=>c.name.toLowerCase().includes(a)||c.type.toLowerCase().includes(a)):o,l=o.some(c=>c.type===a||c.name.toLowerCase()===a);return r`
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
    `}_renderGGModal(){if(!this._ggOpen)return _;const e=n=>r`<img class="ec-lib-preview" src="${qe+n}" alt=""
      @error=${l=>{const c=l.target,d=document.createElement("div");d.className="ec-lib-thumb-placeholder",c.parentNode?.replaceChild(d,c)}} />`,t=[{value:15,color:"#ef4444"},{value:35,color:"#f59e0b"},{value:100,color:"#22c55e"}],i=[{label:"Thermometer",file:"thermometer.svg",fill_direction:"up",width:60,height:200},{label:"Thermometer (Horizontal)",file:"thermometer-horizontal.svg",fill_direction:"left",width:200,height:60},{label:"Arc Gauge",file:"gauge-arc.svg",fill_direction:"up",width:200,height:120},{label:"Battery (Vertical)",file:"battery-vertical.svg",fill_direction:"up",width:44,height:100,thresholds:t},{label:"Battery (Horizontal)",file:"battery-horizontal.svg",fill_direction:"left",width:100,height:44,thresholds:t},{label:"Tank (Cylinder)",file:"tank-cylinder.svg",fill_direction:"up",width:100,height:150},{label:"Tank - Water",file:"tank-water.svg",fill_direction:"up",width:80,height:95},{label:"Tank (Fermenter)",file:"tank-fermenter.svg",fill_direction:"up",width:60,height:165},{label:"Tank (Cone)",file:"tank-cone.svg",fill_direction:"up",width:80,height:150},{label:"Inverter",file:"inverter.svg",fill_direction:"up",width:100,height:100}],s=[{label:"Line",graph_type:"stat-line",thumb:"thumb_stat_line.webp"},{label:"Bar",graph_type:"bar",thumb:"thumb_stat_bar.webp"},{label:"Bar (Horizontal)",graph_type:"bar-h",thumb:"thumb_stat_bar_h.webp"},{label:"Bar (Stacked)",graph_type:"bar-stacked",thumb:"thumb_statbar_stacked.webp"}],o=[{label:"With Unit (line)",graph_type:"line",thumb:"thumb_history_uom.webp"},{label:"No Unit (states)",graph_type:"state-timeline",thumb:"thumb_history_no_uom.webp"}],a=[{label:"Arc Gauge",graph_type:"gauge",thumb:"thumb_gauge_arc.webp"},{label:"Arc Gauge (Needle)",graph_type:"gauge-needle",thumb:"thumb_gauge_arc_needle.webp"}];return r`
      <div class="ec-lib-backdrop" @click=${()=>{this._ggOpen=!1}}></div>
      <div class="ec-lib-modal">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Element Library</span>
          <button class="ec-btn-clear" @click=${()=>{this._ggOpen=!1}}>✕</button>
        </div>

        <div class="ec-lib-cat">SVG Elements</div>
        <div class="ec-lib-grid">
          ${i.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("svg",{svg:n.file,fill_direction:n.fill_direction,width:n.width,height:n.height,...n.thresholds?{thresholds:n.thresholds}:{}})}>
              ${e(n.file)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Statistics Graph</div>
        <div class="ec-lib-grid">
          ${s.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${e(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">History Graph</div>
        <div class="ec-lib-grid">
          ${o.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${e(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Gauge</div>
        <div class="ec-lib-grid">
          ${a.map(n=>r`
            <button class="ec-lib-item" title="${n.label}"
              @click=${()=>this._pickGG("graph",{graph_type:n.graph_type})}>
              ${e(n.thumb)}
              <span class="ec-lib-name">${n.label}</span>
            </button>
          `)}
        </div>
      </div>
    `}_row(e,t,i){return r`
      <label class="ec-row">
        <span class="ec-label${i?" ec-label--hinted":""}" title=${i??_}>${e}</span>
        <div class="ec-control">${t}</div>
      </label>
    `}_optRow(e,t,i,s,o){return r`
      <div class="ec-row">
        <label class="ec-label">${e}${t?r`<span class="ec-label-hint">${t}</span>`:_}</label>
        <div class="ec-control ec-opt-control">
          <label class="ec-opt-inherit">
            <input type="checkbox" .checked=${i} @change=${a=>o(a.target.checked)} />
            Inherit
          </label>
          <div class="ec-opt-target${i?" ec-opt-target--disabled":""}">${s}</div>
        </div>
      </div>
    `}_colorPicker(e,t,i,s){const o=t??"",a=this._cpOpenId===e,{base:n,alpha:l}=Us(o),c=/^#[0-9a-fA-F]{6}$/.test(n)?n:n?Vs(n,this):"#000000",d=o||"transparent",h=s?.clearable!==!1&&t!=null,u=["#ff0000","#ff4500","#ff8800","#ffff00","#00ff00","#00ff7f","#00ffff","#0000ff","#9400d3","#ff00ff","#ffffff","#00d4ff","#22c55e","#888888","#333333","#000000"],g=parseInt(c.slice(1,3),16),b=parseInt(c.slice(3,5),16),m=parseInt(c.slice(5,7),16),z=(S,$,D)=>`#${[S,$,D].map(V=>Math.max(0,Math.min(255,V)).toString(16).padStart(2,"0")).join("")}`,P=n!==""&&!/^#[0-9a-fA-F]{6}$/.test(n)&&!/^rgb/i.test(n),k=(S,$)=>{if($>=1){i(S);return}const D=parseInt(S.slice(1,3),16),V=parseInt(S.slice(3,5),16),E=parseInt(S.slice(5,7),16);i(`rgba(${D},${V},${E},${Number($.toFixed(3))})`)},x=S=>{P?i(Vt(n,S)):k(c,S)};return r`
      <div class="ec-cp-wrap" @keydown=${S=>{S.key!=="Escape"||this._cpOpenId!==e||(S.preventDefault(),S.stopPropagation(),this._cpOrigValue!==t&&i(this._cpOrigValue),this._cpOpenId=null)}}
        @click=${S=>{this._cpOpenId===e&&S.preventDefault()}}>
        <div class="ec-color-row">
          <button class="ec-color-swatch-btn" title="Open color picker"
            style="--mce-swatch:${d}"
            @click=${S=>{if(S.stopPropagation(),!a){const $=S.currentTarget.getBoundingClientRect(),D=document.createElement("div");D.style.cssText="position:fixed;inset:0;pointer-events:none;visibility:hidden;",S.currentTarget.parentElement.appendChild(D);const V=D.getBoundingClientRect();D.remove();const E=Math.max(12,Math.min($.left,window.innerWidth-254))-V.left;this._cpPos=window.innerHeight-$.bottom<340?{left:E,bottom:V.bottom-$.top+4}:{left:E,top:$.bottom+4-V.top},this._cpOrigValue=t}this._cpOpenId=a?null:e}}
          ></button>
          <input type="text" class="ec-color-text"
            .value=${o}
            placeholder="#rrggbb · rgb() · name"
            @change=${S=>{const $=S.target.value.trim();i($||void 0)}}
          />
          ${h?r`<button class="ec-btn-clear" title="${s?.clearTitle??"Clear"}"
            @click=${s?.onClear??(()=>i(void 0))}>✕</button>`:_}
          ${s?.gradient?r`<label class="ec-cp-grad-toggle"
            title="Blends this colour into a second one. Unticking clears the end colour and its angle.">
            <input type="checkbox" .checked=${s.gradient.on}
              @change=${S=>s.gradient.onToggle(S.target.checked)} />
            Gradient
          </label>`:_}
        </div>
        ${a?r`
          <div class="ec-cp-backdrop" @click=${()=>{this._cpOpenId=null}}></div>
          <div class="ec-cp-popup"
            style="left:${this._cpPos?.left??0}px;${this._cpPos?.top!=null?`top:${this._cpPos.top}px`:`bottom:${this._cpPos?.bottom??0}px`}"
            role="dialog" aria-label="Color picker — Escape to cancel" tabindex="-1"
            @click=${S=>{S.preventDefault(),S.stopPropagation()}}>
            <div class="ec-cp-modes">
              <button class="ec-cp-mode${this._cpMode==="rgb"?" active":""}"
                @click=${()=>{this._cpMode="rgb"}}>RGB Mode</button>
              <button class="ec-cp-mode${this._cpMode==="css"?" active":""}"
                @click=${()=>{this._cpMode="css"}}>CSS Mode</button>
            </div>
            ${this._cpMode==="css"?this._renderCpVars(i,l):r`
            <div class="ec-cp-main">
            <hex-color-picker
              .color=${c}
              @color-changed=${S=>k(S.detail.value,l)}
              @dblclick=${()=>{this._cpOpenId=null}}
            ></hex-color-picker>
            <div class="ec-cp-rgb">
              ${["R","G","B"].map((S,$)=>{const D=[g,b,m][$];return r`<label class="ec-cp-rgb-label">${S}
                  <input type="number" class="ec-cp-rgb-input" min="0" max="255"
                    .value=${String(D)}
                    @change=${V=>{const E=Number(V.target.value);k(z($===0?E:g,$===1?E:b,$===2?E:m),l)}}
                  />
                </label>`})}
            </div>
            <div class="ec-cp-presets">
              ${u.map(S=>r`
                <button class="ec-cp-preset" style="background:${S}" title="${S}"
                  @click=${()=>{k(S,l),this._cpOpenId=null}}
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
                  @input=${S=>x(parseFloat(S.target.value))}
                />
                <span class="ec-opacity-val">${Math.round(l*100)}%</span>
              </div>
            </div>
          </div>
        `:_}
      </div>
    `}_renderCpVars(e,t=1){const i=this._config?.defaults?.custom_colors??[],s=o=>{e(Vt(o,t)),this._cpOpenId=null};return r`
      <div class="ec-cp-vars">
        <div class="ec-cp-vars-title">Theme color</div>
        <div class="ec-cp-vars-hint">Select a standard HA or custom color variable</div>
        <div class="ec-cp-vars-list">
          ${As.map(o=>r`
            <button class="ec-cp-var-row" title="var(${o.name})" @click=${()=>s(`var(${o.name})`)}>
              <span class="ec-cp-var-chip" style="background:var(${o.name})"></span>
              <span class="ec-cp-var-name">${o.label}</span>
            </button>`)}
          ${i.length?r`<div class="ec-cp-vars-sep">Custom</div>`:_}
          ${i.map(o=>r`
            <button class="ec-cp-var-row" title="var(--mccust_${o.name})" @click=${()=>s(`var(--mccust_${o.name})`)}>
              <span class="ec-cp-var-chip" style="background:${o.color}"></span>
              <span class="ec-cp-var-name">mccust_${o.name}</span>
            </button>`)}
        </div>
      </div>
    `}};p._UNDO_LIMIT=50;p._UNDO_COALESCE_MS=1e3;p._TUTORIAL_STEPS=[{title:"Take a quick tour?",body:"Your card is set up. This short tour points out where everything lives — each step jumps the editor to the place it describes. Cancel any time.",nav:{tab:"cards",panel:""}},{title:"The Cards tab",body:"Everything that displays data: Mosaic Cards (your own layouts of values, labels and library elements), Popover Cards shown on a trigger action, and Embedded External Cards for placing any native or custom HA card on the canvas.",nav:{tab:"cards",panel:""}},{title:"The Elements tab",body:"Things that live on the canvas around your cards: Animated Flow Lines driven by entity values, Clickable Zones for bounded tap actions, and Virtual Entities — helper-like values computed from other entities.",nav:{tab:"elements",panel:""}},{title:"The Settings tab",body:"Card-wide configuration: the Canvas itself, Global Defaults inherited by every element, Templates for saving and loading whole layouts, and Config Health for finding broken references.",nav:{tab:"settings",panel:""}},{title:"Canvas defaults",body:"The Canvas panel holds the background images, day/night switching, aspect ratio and placement mode. The background you chose during setup can be changed here at any time.",nav:{tab:"settings",panel:"canvas"}},{title:"Card Defaults",body:"Global Defaults ▸ Mosaic Card Defaults is the styling every Mosaic Card inherits — box style, text colour and popup behaviour. Set the look once here rather than per card; individual cards only need overrides. Popover cards have their own screen beside it and do not inherit this one.",nav:{tab:"settings",panel:"defaults",path:[{key:"sec:card",label:"Mosaic Card Defaults"}]}},{title:"Your first Mosaic Card",body:"This is the Mosaic Card list. Press “+ Mosaic Card” to create one, open it, then press “+ Field”, set the field’s Type to Value and pick an entity — that puts a live value on the canvas.",nav:{tab:"cards",panel:"mosaic"}},{title:"The Mosaic Editor",body:"“Open Mosaic Editor Window” (above the tabs) opens the fullscreen drag editor — position cards, zones and flow points directly on your background. Double-click any element there to jump straight to its settings.",nav:{tab:"cards",panel:""}}];p._PTR_DRAG_SLOP=6;p._PTR_EDGE=44;p._PTR_SCROLL_MAX=16;p.PICKER_HEIGHT=30;p._WALKED_PICKERS=["ha-icon-picker",".ec-attr-picker","ha-service-picker",".ec-nav-picker"];p._TAB_LABEL={cards:"Cards",elements:"Elements",settings:"Settings"};p._PANEL_META={mosaic:{icon:"mdi:view-dashboard",title:"Mosaic Cards",desc:"Canvas cards holding value, label, icon, Element Library (SVG fills & graphs), blank and rule fields. Reorder fields to stack them; style per-card or inherit the global defaults."},popover:{icon:"mdi:picture-in-picture-bottom-right",title:"Popover Cards",desc:"Popup panels opened by an Open Popover action from a card, field or zone. Column-based layout with their own defaults."},embedded:{icon:"mdi:widgets",title:"Embedded External Cards",desc:"Embed any native or custom Home Assistant dashboard card directly onto the canvas."},flows:{icon:"mdi:chart-timeline-variant",title:"Animated Flow Lines",desc:"CSS-animated lines between canvas points. An entity value drives speed and direction; style is dashes, dots, fluid or particles."},zones:{icon:"mdi:gesture-tap-box",title:"Clickable Zones",desc:"Bounded clickable hotspots pinned to canvas coordinates, used to trigger tap / hold / double-tap actions."},virtuals:{icon:"mdi:memory",title:"Virtual Entities",desc:"Computed helper entities — add, subtract, mean, signed net or time-until — usable across every card without a HA helper."},canvas:{icon:"mdi:image-size-select-actual",title:"Canvas",desc:"Placement mode (Precision or Grid), base size, fit, extend margins, the canvas box and the background image set."},defaults:{icon:"mdi:palette",title:"Global Defaults",desc:"Default box, value and label styling plus fonts, gaps and element fill colors. Cards and fields inherit these unless overridden."},templates:{icon:"mdi:bookmark-multiple",title:"Templates",desc:"Save the current layout as a portable template, or import one to replace the configuration."},health:{icon:"mdi:stethoscope",title:"Config Health",desc:"Read-only checks over the whole configuration: references that no longer resolve, entities Home Assistant does not have, and values only reachable from the YAML editor. Every row opens the screen that owns it."},about:{icon:"mdi:information-outline",title:"About",desc:"Card version, documentation and project links."}};p._RIBBON_ITEMS=[{tab:"cards",panel:"mosaic",icon:"mdi:view-dashboard",label:"Mosaic Card",hint:"Values, labels, icons & Element Library"},{tab:"cards",panel:"popover",icon:"mdi:picture-in-picture-bottom-right",label:"Popover Cards",hint:"Shown on a trigger action"},{tab:"cards",panel:"embedded",icon:"mdi:widgets",label:"Embedded External Cards",hint:"Any native or custom HA card"},{tab:"elements",panel:"flows",icon:"mdi:chart-timeline-variant",label:"Animated Flow Lines",hint:"Entity-driven CSS flows"},{tab:"elements",panel:"zones",icon:"mdi:gesture-tap-box",label:"Clickable Zones",hint:"Bounded action areas"},{tab:"elements",panel:"virtuals",icon:"mdi:memory",label:"Virtual Entities",hint:"Helper-like computed values"},{tab:"settings",panel:"canvas",icon:"mdi:image-size-select-actual",label:"Canvas",hint:"Background, aspect & placement mode"},{tab:"settings",panel:"defaults",icon:"mdi:palette",label:"Global Defaults",hint:"Inherited element styling"},{tab:"settings",panel:"templates",icon:"mdi:bookmark-multiple",label:"Templates",hint:"Import & export layout"},{tab:"settings",panel:"health",icon:"mdi:stethoscope",label:"Config Health",hint:"Broken references & YAML-only values"},{tab:"settings",panel:"about",icon:"mdi:information-outline",label:"About",hint:"Version, links & support"}];p._SEARCH_LIMIT=30;p._BLANK_RULE_DEF={key:"fsec:blankform",label:"Spacer",hint:"Gap height",icon:"mdi:crop-square-outline",paths:["blank_gap"]};p._CARD_BG_PATHS=["url","entity","rules","fit","opacity","width","height","padding_top","padding_bottom","padding_left","padding_right"];p._CARD_SECTIONS=[{key:"sec:defaults",label:"Card Defaults",hint:"Name, anchor, alignment, placement, size, gaps",icon:"mdi:tune",terms:"name anchor canvas align alignment columns span width height gap transparent placement flow grid rows cells row gap",paths:["name","anchor","align","columns","grid_span","grid_row_span","width","height","layout_mode","grid","field_gap","column_gap","transparent"]},{key:"sec:style",label:"Card Style",hint:"Transparent, background, border, shadow",icon:"mdi:palette",terms:fe,paths:F("box",ce)},{key:"sec:text",label:"Text Styles",hint:"Value & label style",icon:"mdi:format-title",terms:ze,paths:[...F("value_style",ge),...F("label_style",ge)]},{key:"sec:visibility",label:"Card Visibility",hint:"Show / hide by condition",icon:"mdi:eye-outline",terms:pi,paths:["visible_when"]},{key:"sec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Ve,paths:bt},{key:"sec:bg",label:"Background Image",hint:"Image behind the card fields",icon:"mdi:image-outline",terms:"url path image fit opacity width height padding cover contain stretch entity state value rules images swap",paths:F("bg",p._CARD_BG_PATHS)}];p._SUM_DEVICE_CLASSES=new Set(["energy","gas","water","volume","monetary"]);p._THERMO_PATHS=ue("thermo_",ui);p._GRAPH_CHROME_PATHS=["graph_axis_color","graph_grid_color","graph_zero_line_color","graph_baseline_color","graph_label_color","graph_label_size","graph_unit_label_color","graph_bar_label_color","graph_legend_label_color","graph_gauge_track_color","graph_gauge_value_color","graph_palette"];p._STAT_PATHS=["stat_type","stat_characteristic","stat_period","stat_period_start","stat_period_end","stat_period_n","stat_max_age_hours","stat_sampling_size","stat_percentile"];p._POS=["above","below","left","right"];p._OPTION_LAYOUT_KEYS=["option_icon_position","option_show_state","option_state_position","option_icon_style","option_label_style","option_state_style"];p._OPTION_LAYOUT_DEF={key:"optlayout",label:"Option Layout",hint:"Icon & state position, sizes, separation",icon:"mdi:view-grid-outline",paths:[...p._OPTION_LAYOUT_KEYS,...F("control_style",vt)]};p._DEFAULTS_SECTIONS=[{key:"sec:card",label:"Mosaic Card Defaults",hint:"Field placement, box style, text color and popup behaviour",icon:"mdi:view-dashboard-outline",terms:`${fe} text colour color white contrast photo scrim backdrop dim overlay expand modal close button radius placement flow grid columns rows cells row gap`,paths:[...F("card",ce),"card_text_color","card_columns","card_layout_mode","card_grid_columns","card_grid_rows","card_field_gap","card_column_gap","card_grid_row_gap",...nt]},{key:"sec:popover",label:"Popover Card Defaults",hint:"Default columns, size, gaps, style & dimming for every popover card",icon:"mdi:picture-in-picture-bottom-right",terms:`${fe} popover extended popup panel columns width height gap scrim backdrop dim`,paths:[...rt]},{key:"sec:embedded",label:"Embedded Card Default",hint:"Default frame, transparency & CSS for embedded cards",icon:"mdi:card-outline",terms:`${fe} embedded external third party lovelace frame surround host transparent chrome css`,paths:[...F("embedded_card",ce),"embedded_card_transparent","embedded_card_extra_css"]},{key:"sec:value",label:"Value Default",hint:"Default value text style",icon:"mdi:function-variant",terms:ze,paths:F("value",ge)},{key:"sec:label",label:"Label Default",hint:"Default label text style",icon:"mdi:format-title",terms:ze,paths:F("label",ge)},{key:"sec:control",label:"Control Default",hint:"Per-control style sections",icon:"mdi:toggle-switch-outline"},{key:"sec:customcolors",label:"Custom Colors",hint:"Reusable css color variables",icon:"mdi:language-css3",paths:["custom_colors"]},{key:"sec:customvars",label:"Custom Variables",hint:"Reusable sizes, shadows and other values",icon:"mdi:code-braces",paths:["custom_vars"]},{key:"sec:layout",label:"Layout & Fonts",hint:"Fonts and units, for every card type",icon:"mdi:format-size",paths:["power_unit","stat_update_interval","font_family","mono_font_family"]},{key:"sec:elements",label:"Element Library",hint:"Thermometer, battery, tank, inverter, gauge",icon:"mdi:palette-swatch-outline"},{key:"sec:reset",label:"Reset & Rerun Wizard",hint:"Clear all cards, flows, zones & background",icon:"mdi:restore-alert"}];p.SEPARATION_KEYS=[...vt,...ft];p._CONTROL_DEFAULTS_SECTIONS=[{key:"cd:common",label:"Common",hint:"Accent color — themes every control",icon:"mdi:palette",paths:F("control_style",[...ve.accent,"gradient_angle"])},{key:"cd:density",label:"Density",hint:"Text size, padding and gap for every control",icon:"mdi:arrow-collapse-vertical",paths:["control_font_size","control_padding","control_gap"]},{key:"cd:toggle",label:"Toggle",hint:"On / off colors",icon:"mdi:toggle-switch-outline",paths:F("control_style",ve.toggle)},{key:"cd:slider",label:"Slider",hint:"Track, fill, thumb, height",icon:"mdi:tune-variant",paths:F("control_style",ve.slider)},{key:"cd:dropdown",label:"Dropdown",hint:"Border, background, menu, selected",icon:"mdi:form-dropdown",paths:F("control_style",ve.dropdown)},{key:"cd:selector",label:"Button Group",hint:"Container, active / inactive, separation",icon:"mdi:view-dashboard-variant-outline",terms:"selector segmented options option cells row wrap"},{key:"cd:input",label:"Input",hint:"Border, background, focus",icon:"mdi:form-textbox",paths:F("control_style",ve.input)},{key:"cd:spinbox",label:"Spin Box",hint:"Border, button, hover, width",icon:"mdi:numeric",paths:F("control_style",ve.spinbox)},{key:"cd:button",label:"Button",hint:"Container, active / inactive",icon:"mdi:gesture-tap-button"},{key:"cd:container",label:"Container Box",hint:"Box behind every control",icon:"mdi:square-rounded-outline",terms:fe,paths:F("control",ce)},{key:"cd:variants",label:"Variant Builder",hint:"Create and manage custom control variants",icon:"mdi:shape-plus"}];p._ELEM_LIB_SECTIONS=[{key:"el:thermo-v",label:"Thermometer (Vertical)",hint:"Ticks, grid, fill, temperature text",icon:"mdi:thermometer",terms:_t,paths:ue("thermo_",Ht)},{key:"el:thermo-h",label:"Thermometer (Horizontal)",hint:"Ticks, grid, fill, temperature text",icon:"mdi:thermometer",terms:_t,paths:ue("thermo_h_",Ht)},{key:"el:bat-h",label:"Battery (Horizontal)",hint:"Fill & gradient",icon:"mdi:battery",paths:ue("battery_h_",Wt)},{key:"el:bat-v",label:"Battery (Vertical)",hint:"Fill & gradient",icon:"mdi:battery",paths:ue("battery_v_",Wt)},{key:"el:tank-cyl",label:"Tank (Cylinder)",hint:"Fill, direction, wall",icon:"mdi:barrel",paths:ue("tank_cylinder_",He)},{key:"el:tank-water",label:"Tank - Water",hint:"Fill, direction, wall",icon:"mdi:water",paths:ue("tank_water_",He)},{key:"el:tank-ferm",label:"Tank - Fermenter",hint:"Fill, direction, wall",icon:"mdi:flask-outline",paths:ue("tank_fermenter_",He)},{key:"el:tank-cone",label:"Tank - Cone",hint:"Fill, direction, wall",icon:"mdi:triangle-outline",paths:ue("tank_cone_",He)},{key:"el:inverter",label:"Inverter",hint:"Line color",icon:"mdi:sine-wave",paths:["inverter_line_color","inverter_extra_css"]},{key:"el:gauge-arc",label:"Gauge (Arc)",hint:"Needle, label color & size",icon:"mdi:speedometer",paths:["gauge_arc_needle_color","gauge_arc_label_color","gauge_arc_label_size","gauge_arc_extra_css"]}];p.ELEM_CSS_KEY={"el:thermo-v":"thermo_extra_css","el:thermo-h":"thermo_h_extra_css","el:bat-h":"battery_h_extra_css","el:bat-v":"battery_v_extra_css","el:tank-cyl":"tank_cylinder_extra_css","el:tank-water":"tank_water_extra_css","el:tank-ferm":"tank_fermenter_extra_css","el:tank-cone":"tank_cone_extra_css","el:inverter":"inverter_extra_css","el:gauge-arc":"gauge_arc_extra_css"};p._POPOVER_GLOBAL_DEFAULTS_DEF={key:"defaults-global",label:"Popover Card Defaults",hint:"Default columns, size, gaps & style for every popover card",icon:"mdi:tune",paths:["columns","width","height","field_gap","column_gap",...F("card",ce),...F("label",ge),...F("value",ge)]};p._POPOVER_CARD_SECTIONS=[{key:"sec:defaults",label:"Card Defaults",hint:"Columns, width %, height %, gaps",icon:"mdi:tune",paths:["name","columns","width","height","align","field_gap","column_gap"]},{key:"sec:style",label:"Card Style",hint:"Inherit or override background, border, shadow, blur",icon:"mdi:palette",terms:`${fe} use global inherit override`,paths:F("box",ce)},{key:"sec:text",label:"Text Styles",hint:"Inherit or override label & value style",icon:"mdi:format-title",terms:`${ze} use global inherit override`,paths:[...F("label_style",ge),...F("value_style",ge)]}];p._COPYABLE_CARD_STYLE_KEYS=ce;p._CANVAS_SECTIONS=[{key:"sec:mode",label:"Placement Mode",hint:"Precision or Grid",icon:"mdi:grid",paths:["canvas.layout_mode","canvas.grid.columns","canvas.grid.rows","canvas.grid.padding"]},{key:"sec:size",label:"Canvas Size",hint:"Base size, fit & extend",icon:"mdi:aspect-ratio",paths:["canvas.width","canvas.height","canvas.fit","canvas.extend.top","canvas.extend.right","canvas.extend.bottom","canvas.extend.left"]},{key:"sec:box",label:"Canvas Box",hint:"Canvas background & border",icon:"mdi:image-frame",terms:fe,paths:F("canvas.box",ce)},{key:"sec:bg",label:"Background",hint:"Method, images & EV count",icon:"mdi:image-multiple",terms:"method single image day night state entity rules value swap url path picker library media",paths:["background.source","background.sun_entity","background.sun_attribute","background.mode_entity","background.mode_attribute","background.fit","background.images","background.url","background.entity","background.rules","ev_count"]}];p._TEMPLATE_SECTIONS=[{key:"sec:export",label:"Export Template",hint:"Save the current layout as a file",icon:"mdi:download"},{key:"sec:import",label:"Import Template",hint:"Load a saved layout file",icon:"mdi:upload"},{key:"sec:varexport",label:"Export Control Variants",hint:"Save this card's custom variants as a file",icon:"mdi:shape-plus"},{key:"sec:varimport",label:"Import Control Variants",hint:"Merge custom variants from a file",icon:"mdi:shape-outline"}];p._VIRTUAL_OPS=[{value:"add",label:"Add (sum all)"},{value:"subtract",label:"Subtract (first − rest)"},{value:"mean",label:"Mean (average)"},{value:"signed_net",label:"Signed net (input[0] − input[1])"},{value:"time_until",label:"Time Until"},{value:"statistic",label:"Statistic"}];p._ZONE_SECTIONS=[{key:"sec:defaults",label:"Zone Defaults",hint:"Name, position, anchor, size, overlay",icon:"mdi:tune",terms:"name x y position width height color radius",paths:["name","position.x","position.y","anchor","width","height","color","radius"]},{key:"sec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Ve,paths:bt}];p._FLOW_STYLES=["dashes","dots","fluid","particles"];p._FLOW_SIDES=["top","right","bottom","left","center"];p._FLOW_SECTIONS=[{key:"sec:defaults",label:"Flow Defaults",hint:"Name, entity, min display power, invert",icon:"mdi:tune",paths:["name","entity","min_power","invert"]},{key:"sec:speed",label:"Speed",hint:"Slowest / fastest value → animation speed",icon:"mdi:speedometer",paths:["speed_min_value","speed_max_value","speed_min_duration","speed_max_duration","duration"]},{key:"sec:style",label:"Line Style",hint:"Style, colors, width, curve",icon:"mdi:brush-variant",terms:"dashes dots fluid particles duration count",paths:["style","forward_color","color","reverse_color","width","particle_count","curve"]}];p._ACTION_LABELS={tap_action:"Tap",hold_action:"Hold",double_tap_action:"Double tap"};p._ACTION_HINTS={tap_action:"What a single tap does. Leave blank for nothing.",hold_action:"What a press-and-hold does. Leave blank for nothing.",double_tap_action:"What two quick taps do. Leave blank for nothing."};p._PSEUDO_ACTIONS=[{id:"mosaic.open_popover",action:"open-extended",name:"Open Popover",description:"Show one of this card's popover cards."},{id:"mosaic.expand_card",action:"expand-card",name:"Expand Card",description:"Expand this card to fill the canvas."},{id:"mosaic.fire_dom_event",action:"fire-dom-event",name:"Fire DOM Event",description:"Fire a browser DOM event for another frontend add-on to pick up."},{id:"ui.more_info",action:"more-info",name:"More info",description:"Open the entity's more-info dialog."},{id:"ui.toggle",action:"toggle",name:"Toggle",description:"Toggle the entity."},{id:"ui.navigate",action:"navigate",name:"Navigate",description:"Go to another dashboard view."},{id:"ui.url",action:"url",name:"Open URL",description:"Open a link."},{id:"ui.assist",action:"assist",name:"Assist",description:"Open the Assist dialog."}];p._PSEUDO_SERVICES=(()=>{const e={};for(const t of p._PSEUDO_ACTIONS){const i=t.id.indexOf("."),s=t.id.slice(0,i);(e[s]??={})[t.id.slice(i+1)]={name:t.name,description:t.description,fields:{}}}return e})();p._PSEUDO_TITLES={"component.mosaic.title":"Mosaic","component.ui.title":"Interface"};p._NAV_SELECTOR={navigation:{}};p._EMB_SECTIONS=[{key:"sec:config",label:"Card Config",hint:"Pick card type & edit config",icon:"mdi:widgets",paths:["name","card_config"]},{key:"sec:pos",label:"Position & Size",hint:"Anchor, width, span, height",icon:"mdi:arrow-expand-all",paths:["position.x","position.y","anchor","grid_span","width","height"]},{key:"sec:appear",label:"Card Style",hint:"Frame, transparency & CSS",icon:"mdi:palette",terms:`${fe} transparent chrome frame surround use global inherit override embedded external card css`,paths:["transparent","extra_css",...F("box",ce)]},{key:"sec:visibility",label:"Card Visibility",hint:"Show / hide by condition",icon:"mdi:eye-outline",terms:pi,paths:["visible_when"]}];p.styles=[Zt`
      :host {
        display: block;
        font-size: 16px;
        color: var(--primary-text-color);

        

        --mce-field-h: 30px;
        --mce-field-radius: 6px;
        --mce-field-font-size: 15px;
        --mce-field-bg: var(--primary-background-color, rgba(0,8,18,0.7));
        --mce-field-border-color: var(--divider-color, rgba(0,212,255,0.18));
        --mce-field-focus-color: var(--mce-accent);
        --mce-field-text: var(--primary-text-color, #c8e0ec);

        

        --mce-accent: var(--accent-color, #00d4ff);
        --mce-accent-fill: color-mix(in srgb, var(--mce-accent) 8%, transparent);
        --mce-accent-fill-strong: color-mix(in srgb, var(--mce-accent) 16%, transparent);
        --mce-accent-line: color-mix(in srgb, var(--mce-accent) 45%, transparent);
        

        --mce-primary: var(--primary-color, #00d4ff);
        --mce-primary-fill: color-mix(in srgb, var(--mce-primary) 8%, transparent);
        --mce-primary-fill-strong: color-mix(in srgb, var(--mce-primary) 16%, transparent);
        --mce-primary-line: color-mix(in srgb, var(--mce-primary) 45%, transparent);
        

        --mce-fill-subtle: color-mix(in srgb, var(--primary-text-color, #fff) 5%, transparent);
        

        --mce-scrim: rgba(0,0,0,0.55);
        --mce-checker: var(--secondary-background-color, #444);
        --mce-checker-sq: color-mix(in srgb, var(--mce-checker) 78%, var(--primary-text-color, #fff));
        

        --mce-action-copy: #00d4ff;
        --mce-action-paste: #50c878;
        --mce-action-remove: #ff5050;
        

        --mce-chip-label: #00d4ff;
        --mce-chip-label-fg: #5aadcc;
        --mce-chip-value: #ffffff;
        --mce-chip-value-fg: #dddddd;
        --mce-chip-newline: #ffc800;
        --mce-chip-newline-fg: #b89900;
      }
       
      .ec-about {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .ec-about-version {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-family: monospace;
      }
      .ec-about-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--mce-primary);
        text-decoration: none;
        font-size: 14px;
      }
      .ec-about-link:hover {
        text-decoration: underline;
      }
      .ec-about-link ha-icon {
        --mdc-icon-size: 18px;
      }
      .ec-about-kofi img {
        display: block;
        border-radius: 6px;
      }

       
      .ec-tour {
        position: fixed; right: 18px; bottom: 18px; z-index: 9999;
        width: 340px; max-width: calc(100vw - 36px);
        background: var(--card-background-color, #0b1622);
        color: var(--primary-text-color, #e8f4ff);
        border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
        border-radius: 12px; padding: 14px 16px;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
      }
      .ec-tour-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px; }
      .ec-tour-title { font-weight: 600; font-size: 14px; flex: 1; }
      .ec-tour-count { font-size: 11px; opacity: 0.6; }
      .ec-tour-body { margin: 0 0 12px; font-size: 12.5px; line-height: 1.5; color: var(--secondary-text-color, #b8c8d8); }
      .ec-tour-btns { display: flex; gap: 8px; align-items: center; }
      .ec-tour-spacer { flex: 1; }

       
      

      .ec-wizard { padding: 24px; min-height: 280px; display: flex; flex-direction: column; background: var(--card-background-color, #0b131d); border-radius: 8px; }
      .ec-wiz-welcome { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; padding: 16px 0; }
      .ec-wiz-icon { font-size: 48px; line-height: 1; }
      .ec-wiz-title { font-size: 20px; font-weight: 700; color: var(--mce-primary); margin: 0; }
      .ec-wiz-heading { font-size: 15px; font-weight: 600; color: var(--mce-primary); margin: 0 0 16px; }
      .ec-wiz-desc { font-size: 13px; color: var(--secondary-text-color, #aaa); margin: 0 0 16px; line-height: 1.5; }
      .ec-wiz-field { display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; }
      .ec-wiz-label { font-size: 12px; color: var(--secondary-text-color, #aaa); font-weight: 500; }
      .ec-wiz-input {
        background: var(--mce-field-bg);
        border: 1px solid var(--mce-field-border-color);
        border-radius: 6px; color: var(--primary-text-color, #fff); font-size: 13px;
        padding: 7px 10px; width: 100%; box-sizing: border-box;
      }
      .ec-wiz-input:focus { outline: none; border-color: var(--mce-field-focus-color); }
      .ec-wiz-select {
        background: var(--mce-field-bg);
        border: 1px solid var(--mce-field-border-color);
        border-radius: 6px; color: var(--primary-text-color, #fff); font-size: 13px;
        padding: 7px 10px; width: 100%; cursor: pointer;
      }
      .ec-wiz-select:focus { outline: none; border-color: var(--mce-field-focus-color); }
      .ec-wiz-row { display: flex; gap: 10px; margin-top: 20px; }
      .ec-wiz-end { justify-content: flex-end; }
      .ec-wiz-space { justify-content: space-between; }
      .ec-wiz-btn-primary {
        background: var(--mce-primary-fill-strong); border: 1px solid var(--mce-primary-line);
        border-radius: 20px; color: var(--mce-primary); font-size: 13px; font-weight: 600;
        padding: 8px 20px; cursor: pointer; letter-spacing: 0.04em;
      }
      .ec-wiz-btn-primary:hover { background: var(--mce-primary-fill-strong); box-shadow: 0 0 10px var(--mce-primary-line); }
      .ec-wiz-btn-ghost {
        background: transparent; border: 1px solid var(--divider-color, rgba(255,255,255,0.2));
        border-radius: 20px; color: var(--secondary-text-color, #888); font-size: 13px;
        padding: 8px 16px; cursor: pointer;
      }
      .ec-wiz-btn-ghost:hover { border-color: var(--divider-color, rgba(255,255,255,0.4)); color: var(--primary-text-color, #ccc); }
      .ec-wiz-btn-primary:disabled { opacity: 0.4; cursor: default; pointer-events: none; }
      .ec-wiz-type-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 4px 0 8px; }
      .ec-wiz-type-btn {
        display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center;
        padding: 16px 10px; border-radius: 10px; cursor: pointer;
        border: 2px solid var(--divider-color, rgba(255,255,255,0.1)); background: var(--mce-fill-subtle);
        transition: border-color 0.15s, background 0.15s;
      }
      .ec-wiz-type-btn:hover { border-color: var(--mce-primary-line); background: var(--mce-primary-fill); }
      .ec-wiz-type-btn.selected { border-color: var(--mce-accent); background: var(--mce-accent-fill-strong); }
      .ec-wiz-type-icon { font-size: 26px; line-height: 1; }
      .ec-wiz-type-title { font-size: 13px; font-weight: 600; color: var(--primary-text-color, #fff); }
      .ec-wiz-type-desc { font-size: 11px; color: var(--secondary-text-color, #888); line-height: 1.4; }
      .ec-wiz-ev-label { font-size: 12px; font-weight: 600; color: var(--mce-primary); margin-bottom: 10px; }
      .ec-wiz-reset-row { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08)); display: flex; justify-content: flex-end; }
      .ec-wiz-btn-reset {
        background: var(--mce-accent);
        border: none;
        border-radius: 6px;
        color: var(--text-primary-color, #fff);
        font-size: 12px;
        padding: 5px 14px; cursor: pointer;
      }

       
      

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
        background: var(--mce-primary);
        color: var(--text-primary-color, #fff);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.02em;
        cursor: pointer;
        box-shadow: 0 3px 10px var(--mce-primary-line);
      }
      

      .ec-open-editor-btn:hover { filter: brightness(1.1); box-shadow: 0 5px 16px var(--mce-primary-line); }
      .ec-open-editor-btn ha-icon { --mdc-icon-size: 20px; }

       
      .ec-preview--expanded {
        position: relative;
        inset: 0;
        z-index: 9999;
        background: var(--primary-background-color, #111);
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
        border-top: 1px solid var(--divider-color, rgba(0,212,255,0.18));
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
        

        color: var(--secondary-text-color, #7fa7bd);
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
        color: var(--primary-text-color, #c8e0ec);
        white-space: nowrap;
      }
      .ec-quick-field input {
        width: 6em;
      }
      .ec-side-close {
        background: var(--mce-primary);
        border: none;
        border-radius: 6px;
        

        color: var(--text-primary-color, #fff);
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .ec-btn-done {
        background: var(--mce-primary);
        border: none;
        border-radius: 6px;
        color: var(--text-primary-color, #fff);
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
        border-bottom: 1px solid var(--divider-color, rgba(0,212,255,0.18));
      }
      .ec-bar-top.ec-preview--expanded .ec-expanded-bottom-bar {
        order: -1;
      }

       
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
        border: 2px solid var(--mce-accent);
        box-shadow: 0 0 4px var(--mce-accent);
      }
      .ec-handle.multi {
        width: 12px;
        height: 12px;
        background: transparent;
        border: 2px dashed var(--mce-accent);
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
        box-shadow: inset 0 0 0 2px var(--mce-accent);
      }
      .ec-card-ov.multi,
      .ec-emb-ov.multi {
        outline: 2px dashed var(--mce-accent);
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
        border-top: 1px solid var(--divider-color, rgba(0,212,255,0.3));
      }
      .ec-section {
        border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.05));
        padding: 10px 14px;
      }
      .ec-section--fields {
        background: var(--primary-background-color, rgba(0,180,220,0.07));
        min-height: 500px;
      }
      .ec-section:not(.ec-section--fields) + .ec-section--fields {
        margin-top: 8px;
        border-top: 1px solid var(--divider-color, rgba(0,212,255,0.18));
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
      .ec-tu-chip--label {
        background: color-mix(in srgb, var(--mce-chip-label) 12%, transparent);
        color: var(--mce-chip-label-fg);
        border: 1px solid color-mix(in srgb, var(--mce-chip-label) 28%, transparent);
      }
      .ec-tu-chip--value {
        background: color-mix(in srgb, var(--mce-chip-value) 9%, transparent);
        color: var(--mce-chip-value-fg);
        border: 1px solid color-mix(in srgb, var(--mce-chip-value) 18%, transparent);
      }
      .ec-tu-chip--newline {
        background: color-mix(in srgb, var(--mce-chip-newline) 9%, transparent);
        color: var(--mce-chip-newline-fg);
        border: 1px solid color-mix(in srgb, var(--mce-chip-newline) 22%, transparent);
      }
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

       
      

      .ec-nav-toolbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        padding: 4px 14px 0;
        background: var(--card-background-color, #070f1a);
      }
      

      .ec-help-hint {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        margin-left: 2px;
        border-radius: 50%;
        border: 1px solid color-mix(in srgb, var(--mce-accent) 45%, transparent);
        background: color-mix(in srgb, var(--mce-accent) 10%, transparent);
        color: var(--mce-accent);
        font-size: 13px;
        font-weight: 700;
        line-height: 1;
        cursor: help;
        user-select: none;
      }
      .ec-help-hint:hover {
        background: color-mix(in srgb, var(--mce-accent) 20%, transparent);
      }
      .ec-breadcrumb {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px;
        padding: 4px 14px 8px;
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
        font-weight: 500;
        font-size: 12px;
        font-family: inherit;
        color: var(--secondary-text-color, #6b93a8);
        

        max-width: 9em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-crumb:hover {
        background: var(--mce-primary-fill-strong);
      }
      .ec-crumb--active { color: var(--mce-accent); }
      .ec-crumb-sep {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color, #567788);
        opacity: 0.7;
      }
      .ec-undo-btn {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 3px 6px;
        border-radius: 4px;
        color: var(--secondary-text-color, #6b93a8);
        --mdc-icon-size: 16px;
        display: flex;
        align-items: center;
      }
      .ec-undo-btn:hover:not(:disabled) {
        background: var(--mce-primary-fill-strong);
        color: var(--mce-primary);
      }
      .ec-undo-btn:disabled { opacity: 0.35; cursor: default; }
      .ec-undo-toast {
        position: fixed;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 10px 16px;
        border-radius: 6px;
        background: var(--card-background-color, #0a1420);
        border: 1px solid var(--divider-color, rgba(0,212,255,0.25));
        box-shadow: 0 4px 16px rgba(0,0,0,0.45);
        color: var(--primary-text-color, #dceaf2);
        font-size: 13px;
      }
      .ec-undo-toast-btn {
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 3px 6px;
        border-radius: 4px;
        

        font-weight: 600;
        font-size: 13px;
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: var(--mce-primary);
      }
      .ec-undo-toast-btn:hover:not(:disabled) {
        background: var(--mce-primary-fill-strong);
      }
      .ec-undo-toast-btn:disabled { opacity: 0.35; cursor: default; }

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
      .ec-nav-tab:hover { background: var(--mce-primary-fill); }
      .ec-nav-tab.active { color: var(--mce-accent); }
      .ec-nav-tab.active::before {
        content: '';
        position: absolute;
        left: 0; top: 6px; bottom: 6px;
        width: 3px;
        background: var(--mce-accent);
        border-radius: 0 3px 3px 0;
      }
      .ec-nav-list { flex: 1; min-width: 0; overflow-y: auto; padding: 4px 0; }
      

      .ec-nav-tab-badge {
        position: absolute;
        top: 5px;
        right: 9px;
        min-width: 16px;
        height: 16px;
        line-height: 14px;
        font-size: 10px;
        background: var(--error-color, #db4437);
        border-color: var(--error-color, #db4437);
        color: var(--text-primary-color, #fff);
      }

      .ec-nav-item {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 11px 14px;
        border: none;
        border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.05));
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: inherit;
        font: inherit;
      }
      .ec-nav-item:hover { background: var(--mce-primary-fill); }
      .ec-nav-item-icon { --mdc-icon-size: 20px; color: var(--mce-primary); flex: 0 0 auto; }
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
        background: var(--mce-primary-fill);
        border-color: var(--mce-primary);
      }
      .ec-nav-card-icon { --mdc-icon-size: 20px; color: var(--mce-primary); flex: 0 0 auto; }
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

       
       
      .ec-nav-card-badge, .ec-nav-tab-badge {
        flex: 0 0 auto;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        box-sizing: border-box;
        border-radius: 9px;
        background: var(--mce-accent-fill);
        border: 1px solid var(--mce-accent);
        color: var(--mce-accent);
        font-size: 11px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        font-variant-numeric: tabular-nums;
      }
       
      .ec-health-group-title { display: flex; align-items: center; gap: 7px; }
      .ec-health-group-title ha-icon { --mdc-icon-size: 17px; color: var(--mce-primary); }
      

      .ec-health-row {
        border: 1px solid var(--divider-color, rgba(0,212,255,0.14));
        border-radius: 9px;
        margin-bottom: 7px;
        overflow: hidden;
      }
      .ec-health-row-body {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        gap: 11px;
        padding: 12px 12px 8px;
        border: none;
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: inherit;
        font: inherit;
        transition: background 0.15s;
      }
      .ec-health-row-body:hover:not([disabled]) { background: var(--mce-primary-fill); }
      .ec-health-row-body[disabled] { cursor: default; }
      

      .ec-health-row .ec-nav-card-label { white-space: normal; line-height: 1.35; }
      .ec-health-row--error .ec-nav-card-icon { color: var(--error-color, #db4437); }
      .ec-health-row--info .ec-nav-card-icon { color: var(--secondary-text-color, #6b93a8); }
      .ec-health-row--ignored { opacity: 0.6; }
      .ec-health-row-where {
        font-size: 11px;
        color: var(--secondary-text-color, #6b93a8);
        margin-top: 3px;
      }
      .ec-health-row-actions {
        display: flex;
        justify-content: flex-end;
        gap: 6px;
        padding: 0 10px 9px;
      }
      .ec-health-btn {
        border: 1px solid var(--divider-color, rgba(0,212,255,0.18));
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color, #6b93a8);
        font: inherit;
        font-size: 11.5px;
        line-height: 1.6;
        padding: 2px 10px;
        cursor: pointer;
        transition: color 0.12s, border-color 0.12s, background 0.12s;
      }
      .ec-health-btn:hover { border-color: var(--mce-primary); color: var(--mce-primary); }
      

      .ec-health-btn-remove {
        color: var(--mce-action-remove);
        border-color: color-mix(in srgb, var(--mce-action-remove) 45%, transparent);
      }
      .ec-health-btn-remove:hover {
        color: var(--mce-action-remove);
        border-color: var(--mce-action-remove);
        background: color-mix(in srgb, var(--mce-action-remove) 12%, transparent);
      }
      .ec-health-ignored { margin-top: 14px; }
      .ec-health-ignored-toggle {
        display: flex;
        align-items: center;
        gap: 5px;
        border: none;
        background: transparent;
        cursor: pointer;
        color: var(--secondary-text-color, #6b93a8);
        font: inherit;
        font-size: 12px;
        padding: 4px 0 8px;
      }
      .ec-health-ignored-toggle ha-icon { --mdc-icon-size: 16px; }
      .ec-health-ignored-toggle:hover { color: var(--mce-primary); }
      .ec-health-coverage { margin-top: 10px; }

      .ec-clear-overrides {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin: 0 0 12px;
        padding: 8px 10px;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.14));
        border-radius: 9px;
      }
      .ec-clear-overrides-count { font-size: 12px; color: var(--secondary-text-color, #6b93a8); }
      .ec-btn-clear-overrides {
        padding: 5px 11px;
        border-radius: 7px;
        border: 1px solid var(--mce-accent);
        background: var(--mce-accent-fill);
        color: var(--mce-accent);
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }
      .ec-btn-clear-overrides:hover { background: var(--mce-accent); color: var(--card-background-color, #070f1a); }

       
      .ec-nav-search { width: 100%; box-sizing: border-box; margin: 0 0 8px; }
      .ec-search-results { min-height: 50vh; }
      .ec-search-result.active {
        background: var(--mce-accent-fill);
        border-color: var(--mce-accent);
      }
      .ec-search-result-ctx {
        font-size: 10px;
        color: var(--secondary-text-color, #6b93a8);
        opacity: 0.8;
        margin-top: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ec-search-more {
        font-size: 11px;
        color: var(--secondary-text-color, #6b93a8);
        text-align: center;
        margin: 6px 0 0;
      }

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
      .ec-panel-back:hover { background: var(--mce-primary-fill); }
      .ec-panel-back ha-icon { --mdc-icon-size: 18px; color: var(--mce-accent); }
      .ec-panel-header-icon { --mdc-icon-size: 18px; color: var(--mce-primary); }
      .ec-panel-header-title { font-size: 14px; font-weight: 600; color: var(--primary-text-color, #dceaf2); }
      .ec-panel-header-spacer { flex: 1; }
      .ec-panel-body { flex: 1; min-height: 50vh; overflow-y: auto; padding: 10px 14px 16px; }
      .ec-panel-desc {
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color, #6b93a8);
        margin: 0 0 10px;
      }

       
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
        background: var(--mce-primary-fill);
        border-color: var(--mce-primary-line);
      }
      .ec-list-row.selected {
        background: var(--mce-accent-fill-strong);
        border-color: var(--mce-accent);
      }
      .ec-list-row.multi {
        background: var(--mce-accent-fill);
        border: 1px dashed var(--mce-accent);
      }
      .ec-list-label {
        flex: 1;
        font-size: 15px;
        color: var(--primary-text-color, #b8d4e0);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

       
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
        

        user-select: none;
        -webkit-user-select: none;
      }
      .ec-item-card:hover {
        background: var(--mce-primary-fill);
        border-color: var(--mce-primary);
      }
      .ec-item-card.selected {
        background: var(--mce-accent-fill-strong);
        border-color: var(--mce-accent);
      }
      .ec-item-card.multi {
        background: var(--mce-accent-fill);
        border-style: dashed;
        border-color: var(--mce-accent);
      }
      .ec-item-card.ec-dragging { opacity: 0.4; }
      .ec-item-card:focus-visible, .ec-nav-card:focus-visible, .ec-nav-item:focus-visible,
      .ec-list-row:focus-visible,
      .ec-crumb:focus-visible, .ec-nav-tab:focus-visible, .ec-panel-back:focus-visible {
        outline: 2px solid var(--mce-accent);
        outline-offset: -2px;
      }
      .ec-item-card-icon { --mdc-icon-size: 20px; color: var(--mce-primary); flex: 0 0 auto; }
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

       
      .ec-list-filter { width: 100%; box-sizing: border-box; margin: 0 0 8px; }
      .ec-panel-header-title:focus { outline: none; }
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
      

      .ec-label--hinted {
        cursor: help;
        text-decoration: underline dotted
          color-mix(in srgb, var(--primary-text-color, #dceaf2) 35%, transparent);
        text-underline-offset: 3px;
      }
      .ec-label--hinted:hover {
        text-decoration-color: var(--mce-primary, var(--primary-color));
      }
      .ec-label-hint { display: block; font-size: 10.5px; font-weight: 400; color: var(--secondary-text-color, #6b93a8); margin-top: 1px; }
      .ec-opt-control { display: flex; align-items: center; gap: 10px; }
      .ec-opt-inherit {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        

        color: var(--secondary-text-color, #7fa7bd);
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
        border-color: var(--mce-accent);
        background: var(--mce-accent-fill-strong);
        color: var(--mce-accent);
      }
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
        background: var(--mce-field-bg);
        border: 1px solid var(--mce-field-border-color);
        border-radius: var(--mce-field-radius);
        padding: 5px 8px;
        font-size: var(--mce-field-font-size);
        color: var(--mce-field-text);
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
        appearance: none;
      }
      .ec-input:focus, .ec-select:focus {
        border-color: var(--mce-field-focus-color);
        box-shadow: 0 0 0 2px var(--mce-accent-fill-strong);
      }
      .ec-input-num { width: 6em; }

      
--md-*/--mdc-* it maps to
              internally, since those are declared in the component's own :host
              and an inherited value loses to that (and HA is migrating off
              Material, so those names are disappearing);
           3. the Material row itself is 3-5 boundaries deep and reachable only
              by the stylesheet _injectPickerStyle pushes into its shadow root.
         .ec-attr-picker is the attribute <ha-selector> and .ec-nav-picker the
         navigate action's; both are two boundaries above their picker, so
         ::part(field) cannot reach them — properties and the injected style do. */
      ha-entity-picker, ha-icon-picker, ha-service-picker, .ec-attr-picker, .ec-nav-picker {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid var(--mce-field-border-color);
        border-radius: var(--mce-field-radius);
        transition: border-color 0.15s;
        --ha-color-form-background: var(--mce-field-bg);
        --ha-color-form-background-disabled: var(--mce-field-bg);
        --ha-border-radius-sm: var(--mce-field-radius);
        --ha-combo-box-item-min-height: var(--mce-field-h);
        --mdc-icon-size: 20px;
      }
      ha-entity-picker:hover, ha-icon-picker:hover,
      ha-service-picker:hover, .ec-attr-picker:hover, .ec-nav-picker:hover {
        border-color: var(--mce-field-focus-color);
      }
      ha-entity-picker::part(field), ha-icon-picker::part(field),
      ha-service-picker::part(field) { min-height: var(--mce-field-h); }

      

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

      

      .ec-num-wrap { display: inline-flex; align-items: center; gap: 3px; vertical-align: middle; }
      

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
        background: var(--mce-primary);
        color: var(--text-primary-color, #fff);
        font-size: 14px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      

      .ec-select {
        padding-right: 26px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b93a8' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 6px center;
        background-size: 16px;
      }

      

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
        background: var(--card-background-color, #f5f8fa);
        box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        transition: transform 0.15s, background 0.15s;
      }
      input[type="checkbox"]:checked {
        background: var(--mce-accent);
        border-color: var(--mce-accent);
      }
      input[type="checkbox"]:checked::before {
        transform: translateX(17px);
        background: var(--text-primary-color, #fff);
      }
      input[type="checkbox"]:focus-visible {
        box-shadow: 0 0 0 2px var(--mce-accent-fill-strong);
      }

       
      .ec-dual-range { display: flex; align-items: center; gap: 8px; width: 100%; }
      .ec-dual-range-label { font-size: 11px; color: var(--secondary-text-color, #aaa); white-space: nowrap; }
      .ec-dual-range-track { position: relative; flex: 1; height: 22px; }
      .ec-dual-range-track input[type=range] {
        position: absolute; top: 3px; left: 0; width: 100%; margin: 0;
        -webkit-appearance: none; appearance: none;
        background: transparent; pointer-events: none; height: 16px;
      }
      .ec-dual-range-track input[type=range]::-webkit-slider-runnable-track {
        background: var(--divider-color, rgba(255,255,255,0.15)); border-radius: 4px; height: 4px;
      }
      .ec-dual-range-track input[type=range]::-moz-range-track {
        background: var(--divider-color, rgba(255,255,255,0.15)); border-radius: 4px; height: 4px;
      }
      .ec-dual-range-track input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none; pointer-events: all; cursor: pointer;
        width: 16px; height: 16px; border-radius: 50%;
        background: var(--mce-primary); border: 2px solid rgba(0,0,0,0.35);
        margin-top: -6px;
      }
      .ec-dual-range-track input[type=range]::-moz-range-thumb {
        pointer-events: all; cursor: pointer;
        width: 14px; height: 14px; border-radius: 50%;
        background: var(--mce-primary); border: 2px solid rgba(0,0,0,0.35);
      }

       
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
        

        background-image: linear-gradient(45deg, var(--mce-checker-sq) 25%, transparent 25%),
          linear-gradient(-45deg, var(--mce-checker-sq) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, var(--mce-checker-sq) 75%),
          linear-gradient(-45deg, transparent 75%, var(--mce-checker-sq) 75%);
        background-size: 8px 8px;
        background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
        background-color: var(--mce-checker);
        position: relative;
      }
      

      .ec-color-swatch-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--mce-swatch, transparent);
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
        

        position: fixed;
        z-index: 9999;
        background: var(--card-background-color, #1a2332);
        border: 1px solid var(--divider-color, rgba(0,212,255,0.3));
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 8px 32px var(--mce-scrim);
        width: 220px;
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 24px);
        overflow-y: auto;
      }
       
      .ec-cp-popup:focus { outline: none; }
       
      .ec-cp-grad-toggle {
        display: inline-flex; align-items: center; gap: 4px;
        flex: 0 0 auto; white-space: nowrap; cursor: pointer;
        font-size: 11px; letter-spacing: 0.02em;
        color: var(--secondary-text-color, #aaa);
      }
      .ec-cp-grad-toggle:hover { color: var(--primary-text-color, #ddd); }
      .ec-cp-main { width: 100%; }
       
      .ec-cp-modes {
        display: flex; margin-bottom: 8px; border-radius: 6px; overflow: hidden;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.15));
      }
      .ec-cp-mode {
        flex: 1 1 0; padding: 5px 0; font-size: 11px; cursor: pointer;
        background: transparent; border: none; letter-spacing: 0.04em;
        color: var(--secondary-text-color, #aaa);
      }
      .ec-cp-mode + .ec-cp-mode { border-left: 1px solid var(--divider-color, rgba(255,255,255,0.15)); }
      .ec-cp-mode:hover { background: var(--mce-fill-subtle); color: var(--primary-text-color, #ddd); }
      .ec-cp-mode.active { background: var(--mce-accent-fill-strong); color: var(--mce-accent); font-weight: 600; }
      .ec-cp-popup hex-color-picker {
        width: 100%;
        --cp-border-radius: 6px;
        --cp-color-focus-color: var(--mce-accent);
      }
      .ec-cp-rgb {
        display: flex;
        gap: 6px;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
      }
      .ec-cp-rgb-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        font-size: 10px;
        color: var(--secondary-text-color, #aaa);
        gap: 3px;
      }
      .ec-cp-rgb-input {
        width: 100%;
        text-align: center;
        background: var(--mce-field-bg);
        border: 1px solid var(--mce-field-border-color);
        border-radius: 4px;
        color: var(--mce-field-text);
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
        border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
      }
      .ec-cp-preset {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.25));
        cursor: pointer;
        padding: 0;
        transition: transform 0.1s, border-color 0.1s;
      }
      .ec-cp-preset:hover { transform: scale(1.25); border-color: var(--primary-text-color, rgba(255,255,255,0.7)); }

       
      .ec-cp-vars { width: 100%; display: flex; flex-direction: column; }
      .ec-cp-vars-title {
        font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;
        color: var(--secondary-text-color, #888); padding: 0 2px 4px;
      }
      .ec-cp-vars-hint { font-size: 10px; color: var(--secondary-text-color, #888); line-height: 1.4; padding: 0 2px 8px; }
      .ec-cp-vars-list {
        max-height: 260px;
        overflow-y: auto; display: flex; flex-direction: column; gap: 2px;
      }
      .ec-cp-vars-list::-webkit-scrollbar { width: 8px; }
      .ec-cp-vars-list::-webkit-scrollbar-thumb { background: var(--divider-color, rgba(255,255,255,0.18)); border-radius: 4px; }
      .ec-cp-var-row {
        display: flex; align-items: center; gap: 8px; width: 100%; text-align: left;
        background: transparent; border: none; border-radius: 5px; cursor: pointer;
        padding: 5px 6px; color: var(--primary-text-color); font-size: 12px;
      }
      .ec-cp-var-row:hover { background: var(--mce-fill-subtle); }
      .ec-cp-var-chip {
        width: 18px; height: 18px; flex: 0 0 auto; border-radius: 4px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.3)); box-sizing: border-box;
      }
      .ec-cp-var-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .ec-cp-vars-sep { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--secondary-text-color, #888); padding: 6px 6px 2px; }

       
      .ec-flow-paths-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: visible;
        z-index: 2;
      }
      

      .ec-flow-hit { cursor: pointer; }
      .ec-flow-name-input {
        font-size: 12px;
        padding: 3px 8px;
        border: 1px solid var(--mce-field-border-color);
        border-radius: 4px;
        background: var(--mce-field-bg);
        color: var(--mce-field-text);
        width: 120px;
        outline: none;
      }
      .ec-flow-name-input:focus {
        border-color: var(--mce-accent);
        box-shadow: 0 0 6px var(--mce-accent-fill-strong);
      }
      .ec-btn-add {
        display: flex;
        align-items: center;
        gap: 4px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 6px 13px;
         
        margin: 8px 0 6px;
        font-size: 12.5px;
        font-weight: 600;
        background: var(--mce-primary);
        color: var(--text-primary-color, #fff);
      }
      .ec-btn-remove {
        font-size: 13px;
        padding: 2px 6px;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: color-mix(in srgb, var(--mce-action-remove) 60%, transparent);
        cursor: pointer;
        line-height: 1;
        transition: color 0.12s, background 0.12s;
        }
      .ec-btn-remove:hover {
        background: color-mix(in srgb, var(--mce-action-remove) 12%, transparent);
        color: var(--mce-action-remove);
      }
      .ec-btn-copy, .ec-btn-paste, .ec-btn-dup {
        font-size: 14px;
        padding: 2px 5px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        line-height: 1;
        transition: color 0.12s, background 0.12s;
      }
      .ec-btn-copy, .ec-btn-dup { color: color-mix(in srgb, var(--mce-action-copy) 55%, transparent); }
      .ec-btn-copy:hover, .ec-btn-dup:hover {
        background: color-mix(in srgb, var(--mce-action-copy) 12%, transparent);
        color: var(--mce-action-copy);
      }
      .ec-btn-paste { color: color-mix(in srgb, var(--mce-action-paste) 70%, transparent); }
      .ec-btn-paste:hover {
        background: color-mix(in srgb, var(--mce-action-paste) 12%, transparent);
        color: var(--mce-action-paste);
      }
      .ec-stat-yaml {
        margin: 6px 0 4px;
        border: 1px solid var(--mce-primary-line);
        border-radius: 6px;
        overflow: hidden;
      }
      .ec-stat-yaml-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        background: var(--mce-primary-fill);
        font-size: 11px;
        color: var(--secondary-text-color, rgba(255,255,255,0.5));
        font-weight: 600;
        letter-spacing: 0.04em;
      }
      .ec-stat-yaml-code {
        margin: 0;
        padding: 8px;
        font-size: 10px;
        font-family: 'Courier New', monospace;
        color: var(--primary-text-color, rgba(255,255,255,0.7));
        background: var(--mce-fill-subtle);
        white-space: pre;
        overflow-x: auto;
        line-height: 1.5;
      }
      .ec-copy-badge {
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 3px;
        background: var(--mce-accent-fill-strong);
        color: var(--mce-accent);
        letter-spacing: 0.04em;
      }
      

      .ec-drag-handle {
        width: 34px;
        flex-shrink: 0;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
        margin: -11px 0 -11px -12px;   
        padding: 2px 1px;
        cursor: grab;
        opacity: 0.35;
        border-radius: 3px;
        transition: opacity 0.12s;
        touch-action: none;
      }
      .ec-drag-handle::before, .ec-drag-handle::after {
        content: '';
        width: 14px;
        height: 2px;
        background: currentColor;
        border-radius: 1px;
      }
      .ec-drag-handle:hover { opacity: 0.75; }
      .ec-drag-handle:active { cursor: grabbing; }
      

      .ec-list-row .ec-drag-handle { margin: -5px 0 -5px -8px; }
      .ec-list-row.ec-dragging { opacity: 0.3; }
      

      .ec-item-card.ec-drop-before, .ec-list-row.ec-drop-before { box-shadow: inset 0 3px 0 0 var(--mce-accent); }
      .ec-item-card.ec-drop-after, .ec-list-row.ec-drop-after { box-shadow: inset 0 -3px 0 0 var(--mce-accent); }
      

      .ec-btn-clear {
        font-size: 13px;
        padding: 2px 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.1));
        border-radius: 4px;
        background: transparent;
        color: var(--secondary-text-color, #375f78);
        cursor: pointer;
        transition: border-color 0.12s, color 0.12s;
      }
      .ec-btn-clear:hover {
        border-color: var(--mce-primary);
        color: var(--mce-primary);
      }
      

      .ec-btn-ghost {
        font-size: 12.5px;
        font-weight: 600;
        padding: 6px 14px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.1));
        border-radius: 5px;
        background: transparent;
        color: var(--secondary-text-color, #375f78);
        cursor: pointer;
        transition: border-color 0.12s, color 0.12s;
      }
      .ec-btn-ghost:hover {
        border-color: var(--mce-primary);
        color: var(--mce-primary);
      }
      

      .ec-btn-ghost--sm { font-size: 11px; font-weight: 500; padding: 3px 10px; border-radius: 4px; }

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
        background: var(--mce-primary);
        

        color: var(--text-primary-color, #fff);
        cursor: pointer;
        white-space: nowrap;
      }
      .ec-empty {
        font-size: 14px;
        font-style: italic;
        color: var(--secondary-text-color, #375f78);
        margin: 4px 0;
      }
      button.ec-empty.ec-empty-action {
        display: block;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        background: transparent;
        border: 1px dashed var(--divider-color, rgba(0,212,255,0.2));
        border-radius: 8px;
        padding: 10px 12px;
        cursor: pointer;
      }
      button.ec-empty.ec-empty-action:hover {
        border-color: var(--mce-primary);
        background: var(--mce-primary-fill);
      }

       
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
        border: 1px solid var(--card-background-color, #1a2a36);
        border-radius: 2px;
        pointer-events: auto;
        z-index: 2;
      }
      .ec-zone-resize-tl { left: -5px; top: -5px; cursor: nwse-resize; }
      .ec-zone-resize-tr { right: -5px; top: -5px; cursor: nesw-resize; }
      .ec-zone-resize-bl { left: -5px; bottom: -5px; cursor: nesw-resize; }
      .ec-zone-resize-br { right: -5px; bottom: -5px; cursor: nwse-resize; }

       
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
        border: 1px solid var(--card-background-color, #10222e);
        border-radius: 2px;
        pointer-events: auto;
        z-index: 3;
      }
      .ec-bg-resize-tl { left: -6px; top: -6px; cursor: nwse-resize; }
      .ec-bg-resize-tr { right: -6px; top: -6px; cursor: nesw-resize; }
      .ec-bg-resize-bl { left: -6px; bottom: -6px; cursor: nesw-resize; }
      .ec-bg-resize-br { right: -6px; bottom: -6px; cursor: nwse-resize; }

       
      .ec-flow-layer {
        position: absolute;
        inset: 0;
        pointer-events: auto;
        cursor: crosshair;
        

        z-index: 3;
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

       
      .ec-lib-backdrop {
        position: fixed; inset: 0; z-index: 10100;
        background: var(--mce-scrim);
      }
      .ec-lib-modal {
        position: fixed; z-index: 10101;
        top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: min(520px, 94vw); max-height: 80vh;
        background: var(--card-background-color, rgba(10,18,28,0.97));
        border: 1px solid var(--mce-primary-line);
        border-radius: 12px;
        overflow-y: auto;
        padding: 0 0 12px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px var(--mce-primary-fill);
      }
      .ec-lib-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 16px 10px;
        border-bottom: 1px solid var(--divider-color, rgba(0,212,255,0.12));
        position: sticky; top: 0;
        background: var(--card-background-color, rgba(10,18,28,0.98));
        z-index: 1;
      }
      .ec-lib-title {
        font-size: 15px; font-weight: 700; color: var(--mce-primary); letter-spacing: 0.03em;
      }
      .ec-lib-cat {
        font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
        color: var(--secondary-text-color, #375f78); padding: 10px 16px 4px;
      }
      .ec-lib-grid {
        display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px; padding: 4px 12px 0;
      }
      .ec-lib-item {
        display: flex; flex-direction: column; align-items: center; gap: 6px;
        background: var(--mce-fill-subtle); border: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        border-radius: 8px; padding: 10px 6px 8px; cursor: pointer;
        transition: background 0.14s, border-color 0.14s, box-shadow 0.14s;
      }
      .ec-lib-item:hover {
        background: var(--mce-primary-fill-strong);
        border-color: var(--mce-primary-line);
        box-shadow: 0 0 12px var(--mce-primary-line);
      }
      .ec-lib-preview {
        width: 52px; height: 52px; object-fit: contain;
      }
      .ec-lib-thumb-placeholder {
        width: 52px; height: 52px;
        background: var(--mce-primary-fill);
        border: 1px dashed var(--mce-primary-line);
        border-radius: 4px;
      }
      .ec-lib-name {
        font-size: 10px; color: var(--secondary-text-color, #7aacbf); text-align: center;
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
        background: var(--mce-primary);
        color: var(--text-primary-color, #fff);
      }
    `];w([gt({attribute:!1})],p.prototype,"hass",2);w([y()],p.prototype,"_config",2);w([y()],p.prototype,"_selCard",2);w([y()],p.prototype,"_selField",2);w([y()],p.prototype,"_selCards",2);w([y()],p.prototype,"_selEmbCards",2);w([y()],p.prototype,"_groupColGap",2);w([y()],p.prototype,"_groupRowGap",2);w([y()],p.prototype,"_selFlow",2);w([y()],p.prototype,"_showAddFlowInput",2);w([y()],p.prototype,"_newFlowName",2);w([y()],p.prototype,"_pendingFlowIdx",2);w([y()],p.prototype,"_showFlowCompleteModal",2);w([y()],p.prototype,"_selPoint",2);w([y()],p.prototype,"_selSeries",2);w([y()],p.prototype,"_selOption",2);w([y()],p.prototype,"_selBgRule",2);w([y()],p.prototype,"_selCanvasBgRule",2);w([y()],p.prototype,"_pickerTarget",2);w([y()],p.prototype,"_pickerLib",2);w([y()],p.prototype,"_pickerFolder",2);w([y()],p.prototype,"_pickerTrail",2);w([y()],p.prototype,"_pickerErr",2);w([y()],p.prototype,"_selExtOption",2);w([y()],p.prototype,"_selExtSeries",2);w([y()],p.prototype,"_selVirtual",2);w([y()],p.prototype,"_selVirtualInput",2);w([y()],p.prototype,"_selTrigger",2);w([y()],p.prototype,"_selZone",2);w([y()],p.prototype,"_selExtCard",2);w([y()],p.prototype,"_selExtField",2);w([y()],p.prototype,"_templateName",2);w([y()],p.prototype,"_templateIncludeEntities",2);w([y()],p.prototype,"_templateError",2);w([y()],p.prototype,"_previewBoxes",2);w([y()],p.prototype,"_previewExpanded",2);w([y()],p.prototype,"_barAtTop",2);w([y()],p.prototype,"_copiedFields",2);w([y()],p.prototype,"_copySourceId",2);w([y()],p.prototype,"_virtualClipboard",2);w([y()],p.prototype,"_copiedField",2);w([y()],p.prototype,"_copiedFieldSrc",2);w([y()],p.prototype,"_copiedOption",2);w([y()],p.prototype,"_dragSrc",2);w([y()],p.prototype,"_cpOpenId",2);w([y()],p.prototype,"_cpPos",2);w([y()],p.prototype,"_ggOpen",2);w([y()],p.prototype,"_wizStep",2);w([y()],p.prototype,"_wiz",2);w([y()],p.prototype,"_bgSelected",2);w([y()],p.prototype,"_selEmbCard",2);w([y()],p.prototype,"_embEditorOpen",2);w([y()],p.prototype,"_embEditorYaml",2);w([y()],p.prototype,"_embEditorYamlError",2);w([y()],p.prototype,"_embNativeEditor",2);w([y()],p.prototype,"_embPickerOpen",2);w([y()],p.prototype,"_embPickerSearch",2);w([y()],p.prototype,"_variantOpen",2);w([y()],p.prototype,"_variantError",2);w([y()],p.prototype,"_saveVariantFor",2);w([y()],p.prototype,"_saveVariantLabel",2);w([y()],p.prototype,"_variantImportError",2);w([y()],p.prototype,"_navTab",2);w([y()],p.prototype,"_navPanel",2);w([y()],p.prototype,"_navPath",2);w([y()],p.prototype,"_listFilter",2);w([y()],p.prototype,"_toastMsg",2);w([y()],p.prototype,"_tutorialStep",2);w([y()],p.prototype,"_dropKey",2);w([y()],p.prototype,"_dropBefore",2);w([y()],p.prototype,"_searchQuery",2);w([y()],p.prototype,"_searchActive",2);w([y()],p.prototype,"_healthShowIgnored",2);w([y()],p.prototype,"_cpMode",2);p=w([ti(Jt)],p);const Yt=Object.freeze(Object.defineProperty({__proto__:null,get MosaicCanvasEditor(){return p}},Symbol.toStringTag,{value:"Module"}));export{p as MosaicCanvasEditor};
