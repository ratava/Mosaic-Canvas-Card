import{C as Zt,a as xe,b as $e,s as Ie,i as j,M as ke,c as Ae,d as n,A as _,e as Mt,f as Y,r as dt,g as wt,h as v,T as Se,j as ne,B as Oe,u as Ne,w as Le,k as re,v as xt,l as It,m as Be,n as le,o as At,H as Ge,p as He,P as ut,q as Ce,t as We,x as Ve,y as Ue,z as Ye,D as x,E as je,F as Ke}from"./mosaic-canvas-card.js";const mt=(t,e=0,i=1)=>t>i?i:t<e?e:t,W=(t,e=0,i=Math.pow(10,e))=>Math.round(i*t)/i,qe=t=>ti(Vt(t)),Vt=t=>(t[0]==="#"&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?W(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:t.length===8?W(parseInt(t.substring(6,8),16)/255,2):1}),Ze=t=>Qe(Je(t)),Xe=({h:t,s:e,v:i,a:o})=>{const s=(200-e)*i/100;return{h:W(t),s:W(s>0&&s<200?e*i/100/(s<=100?s:200-s)*100:0),l:W(s/2),a:W(o,2)}},Ut=t=>{const{h:e,s:i,l:o}=Xe(t);return`hsl(${e}, ${i}%, ${o}%)`},Je=({h:t,s:e,v:i,a:o})=>{t=t/360*6,e=e/100,i=i/100;const s=Math.floor(t),a=i*(1-e),r=i*(1-(t-s)*e),l=i*(1-(1-t+s)*e),c=s%6;return{r:W([i,r,a,a,l,i][c]*255),g:W([l,i,i,r,a,a][c]*255),b:W([a,a,l,i,i,r][c]*255),a:W(o,2)}},$t=t=>{const e=t.toString(16);return e.length<2?"0"+e:e},Qe=({r:t,g:e,b:i,a:o})=>{const s=o<1?$t(W(o*255)):"";return"#"+$t(t)+$t(e)+$t(i)+s},ti=({r:t,g:e,b:i,a:o})=>{const s=Math.max(t,e,i),a=s-Math.min(t,e,i),r=a?s===t?(e-i)/a:s===e?2+(i-t)/a:4+(t-e)/a:0;return{h:W(60*(r<0?r+6:r)),s:W(s?a/s*100:0),v:W(s/255*100),a:o}},Ee=(t,e)=>{if(t===e)return!0;for(const i in t)if(t[i]!==e[i])return!1;return!0},ei=(t,e)=>t.toLowerCase()===e.toLowerCase()?!0:Ee(Vt(t),Vt(e)),ce={},Te=t=>{let e=ce[t];return e||(e=document.createElement("template"),e.innerHTML=t,ce[t]=e),e},Xt=(t,e,i)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:i}))};let pt=!1;const Yt=t=>"touches"in t,ii=t=>pt&&!Yt(t)?!1:(pt||(pt=Yt(t)),!0),de=(t,e)=>{const i=Yt(e)?e.touches[0]:e,o=t.el.getBoundingClientRect();Xt(t.el,"move",t.getMove({x:mt((i.pageX-(o.left+window.pageXOffset))/o.width),y:mt((i.pageY-(o.top+window.pageYOffset))/o.height)}))},oi=(t,e)=>{const i=e.keyCode;i>40||t.xy&&i<37||i<33||(e.preventDefault(),Xt(t.el,"move",t.getMove({x:i===39?.01:i===37?-.01:i===34?.05:i===33?-.05:i===35?1:i===36?-1:0,y:i===40?.01:i===38?-.01:0},!0)))};class ze{constructor(e,i,o,s){const a=Te(`<div role="slider" tabindex="0" part="${i}" ${o}><div part="${i}-pointer"></div></div>`);e.appendChild(a.content.cloneNode(!0));const r=e.querySelector(`[part=${i}]`);r.addEventListener("mousedown",this),r.addEventListener("touchstart",this),r.addEventListener("keydown",this),this.el=r,this.xy=s,this.nodes=[r.firstChild,r]}set dragging(e){const i=e?document.addEventListener:document.removeEventListener;i(pt?"touchmove":"mousemove",this),i(pt?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!ii(e)||!pt&&e.button!=0)return;this.el.focus(),de(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),de(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":oi(this,e);break}}style(e){e.forEach((i,o)=>{for(const s in i)this.nodes[o].style.setProperty(s,i[s])})}}class si extends ze{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:Ut({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${W(e)}`)}getMove(e,i){return{h:i?mt(this.h+e.x*360,0,360):360*e.x}}}class ai extends ze{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:Ut(e)},{"background-color":Ut({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${W(e.s)}%, Brightness ${W(e.v)}%`)}getMove(e,i){return{s:i?mt(this.hsva.s+e.x*100,0,100):e.x*100,v:i?mt(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const ni=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',ri="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",li="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",kt=Symbol("same"),Ot=Symbol("color"),pe=Symbol("hsva"),Nt=Symbol("update"),he=Symbol("parts"),ue=Symbol("css"),_e=Symbol("sliders");class ci extends HTMLElement{static get observedAttributes(){return["color"]}get[ue](){return[ni,ri,li]}get[_e](){return[ai,si]}get color(){return this[Ot]}set color(e){if(!this[kt](e)){const i=this.colorModel.toHsva(e);this[Nt](i),this[Ot]=e}}constructor(){super();const e=Te(`<style>${this[ue].join("")}</style>`),i=this.attachShadow({mode:"open"});i.appendChild(e.content.cloneNode(!0)),i.addEventListener("move",this),this[he]=this[_e].map(o=>new o(i))}connectedCallback(){if(this.hasOwnProperty("color")){const e=this.color;delete this.color,this.color=e}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(e,i,o){const s=this.colorModel.fromAttr(o);this[kt](s)||(this.color=s)}handleEvent(e){const i=this[pe],o={...i,...e.detail};this[Nt](o);let s;!Ee(o,i)&&!this[kt](s=this.colorModel.fromHsva(o))&&(this[Ot]=s,Xt(this,"color-changed",{value:s}))}[kt](e){return this.color&&this.colorModel.equal(e,this.color)}[Nt](e){this[pe]=e,this[he].forEach(i=>i.update(e))}}const di={defaultColor:"#000",toHsva:qe,fromHsva:({h:t,s:e,v:i})=>Ze({h:t,s:e,v:i,a:1}),equal:ei,fromAttr:t=>t};class pi extends ci{get colorModel(){return di}}class hi extends pi{}customElements.define("hex-color-picker",hi);const jt=1,ui=/^(entity|entity_id|entities|device_id|area_id)$|_entity$/,St=t=>typeof t=="string"&&t.startsWith("virtual:");function Kt(t){if(Array.isArray(t))return t.map(i=>Kt(i));if(typeof t!="object"||t===null)return t;const e={};for(const[i,o]of Object.entries(t))ui.test(i)?St(o)?e[i]=o:Array.isArray(o)&&o.some(St)&&(e[i]=o.filter(St)):i==="inputs"&&Array.isArray(o)&&o.every(s=>typeof s=="string")?e[i]=o.filter(St):e[i]=Kt(o);return e}function _i(t,e,i={}){const{type:o,...s}=t;return{ec_template:!0,version:jt,card_version:Zt,name:e.trim()||"Mosaic Canvas Template",exported:new Date().toISOString(),config:i.includeEntities===!1?Kt(s):s}}function gi(t){const e=JSON.stringify(t,null,2),i=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(i),s=document.createElement("a");s.href=o,s.download=`${t.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}function mi(t){let e;try{e=JSON.parse(t)}catch{return{template:null,error:"Invalid JSON — could not parse file."}}if(typeof e!="object"||e===null||!e.ec_template)return{template:null,error:"Not a valid Mosaic Canvas template file."};const i=e;return typeof i.version!="number"?{template:null,error:"Template is missing a version number."}:i.version>jt?{template:null,error:`Template schema v${i.version} is newer than this card supports (v${jt}). Update the card first.`}:{template:i,error:null}}function bi(t,e){return{type:e,...t.config}}const Pe=1;function vi(t,e){return{mosaic_control_variants:!0,version:Pe,card_version:Zt,name:e.trim()||"Mosaic Control Variants",exported:new Date().toISOString(),variants:t}}function fi(t){const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(e),o=document.createElement("a");o.href=i,o.download=`${t.name.replace(/[^a-z0-9]+/gi,"_").toLowerCase()}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)}function yi(t){let e;try{e=JSON.parse(t)}catch{return{pack:null,error:"File is not valid JSON."}}if(typeof e!="object"||e===null)return{pack:null,error:"File is not a control variant pack."};const i=e;return i.mosaic_control_variants!==!0?{pack:null,error:"File is not a control variant pack. (Card layouts use Import Template instead.)"}:typeof i.version!="number"||i.version>Pe?{pack:null,error:`Pack was made by a newer Mosaic version (schema ${String(i.version)}). Update the card first.`}:typeof i.variants!="object"||i.variants===null?{pack:null,error:"Pack contains no variants."}:{pack:{mosaic_control_variants:!0,version:i.version,card_version:i.card_version??"unknown",name:i.name?.trim()||"Imported variants",exported:i.exported??"",variants:i.variants},error:null}}function wi(t){if(typeof t!="object"||t===null)return!1;const e=t;return typeof e.id=="string"&&e.id.length>0&&typeof e.label=="string"&&e.label.length>0}function xi(t,e){const i={...t};let o=0,s=0;for(const a of xe){const r=(e.variants[a]??[]).filter(wi);if(!r.length)continue;const l=[...i[a]??[]],c=new Set([...$e(a).map(d=>d.id),...l.map(d=>d.id)]);for(const d of r){let p=d.id;if(c.has(p)){const u=Ie(d.id);let g=2;for(;c.has(`${u}_${g}`);)g++;p=`${u}_${g}`,s++}c.add(p),l.push({...d,id:p}),o++}i[a]=l}return{merged:i,added:o,renamed:s}}const Re=[{id:"popover-ref",label:"Dangling popover actions",hint:"Open Popover pointing at a card that no longer exists",icon:"mdi:picture-in-picture-bottom-right"},{id:"flow-endpoint",label:"Broken flow endpoints",hint:"Flow point anchored to a removed card",icon:"mdi:chart-timeline-variant"},{id:"no-write-target",label:"Nowhere to write",hint:"A value is set, but there is no entity to write it to",icon:"mdi:pencil-off-outline"},{id:"entity",label:"Missing entities",hint:"Entity not present in Home Assistant",icon:"mdi:database-off-outline"},{id:"virtual-ref",label:"Dangling virtual entities",hint:"A virtual: reference with no matching virtual entity",icon:"mdi:memory"},{id:"unreachable-key",label:"Not editable here",hint:"Set in YAML — this editor offers no screen for it",icon:"mdi:code-braces"},{id:"unpickable-value",label:"Value not offered",hint:"Legal in YAML but absent from this editor's picker",icon:"mdi:format-list-bulleted-type"}],$i=Re.reduce((t,e)=>(t[e.id]=e.icon,t),{}),ki=["entity","attribute"],Lt={card:["id","fields","position","group"],extCard:["id","fields"],field:["id","type","variant","svg","shape","display_name","column","column_end","time_until_layout",...ki],zone:["id"],flow:["id","points"],emb:["id","group"],virtual:["id","inputs"]},Si=["tap_action","hold_action","double_tap_action"],Ci={tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double-tap action"},Ei=ke;function Ti(t,e){return t!=="field"?Lt[t]:j(e.type)?[...Lt.field,...Ei]:Lt.field}const ge="virtual:";function nt(t){return e=>{const i=t.get(e);return i?{key:e,label:i}:{key:e}}}function zi(t,e,i){const o=[],s=[],a=["Global Defaults and the config root are not scanned for keys this editor cannot reach — their override badges cover that ground instead."],r=[...new Set(Object.values(i.offered).flatMap(b=>Object.keys(b??{})))].sort();if(r.length&&a.push(`Picker values are verified for ${r.join(", ")}. Other dropdowns build their option list inline and are not checked.`),!t)return{issues:o,skipped:s,coverage:a};const l=t.cards??[],c=t.extended_cards??[],d=t.embedded_cards??[],p=t.zones??[],u=t.flows??[],g=t.virtuals??[],m=new Set(l.map(b=>b.id)),f=new Set(c.map(b=>b.id)),S=new Set(g.map(b=>b.id)),F=new Set(t.health_ignore??[]),$=e?.states;$||s.push({check:"entity",reason:"Home Assistant state is not available to the editor yet, so entity references were not verified."});const k=b=>{const C=`${b.check}|${b.ref}|${b.slot}`;o.push({id:C,check:b.check,severity:b.severity,where:b.where,detail:b.detail,icon:$i[b.check],ignored:F.has(C),...b.target?{target:b.target}:{},...b.removal?{removal:b.removal}:{}})},y=(b,C)=>{if(b){if(b.startsWith(ge)){const M=b.slice(ge.length);S.has(M)||k({check:"virtual-ref",severity:"error",ref:C.ref,slot:C.slot,where:C.where,detail:`${C.label} points at virtual entity “${M}”, which is not in the Virtual Entities list.`,target:C.target});return}$&&($[b]||k({check:"entity",severity:"error",ref:C.ref,slot:C.slot,where:C.where,detail:`${C.label} is set to “${b}”, which does not exist in Home Assistant.`,target:C.target}))}},D=(b,C)=>{for(const M of Si){const z=b[M];if(!z)continue;const P=Ci[M],L=`${C.slotPfx??""}${M}`;z.action==="open-extended"&&(z.extended_card_id?f.has(z.extended_card_id)||k({check:"popover-ref",severity:"error",ref:C.ref,slot:L,where:C.where,detail:`${P} opens popover card “${z.extended_card_id}”, which is not in the Popover Cards list.`,target:C.target}):k({check:"popover-ref",severity:"error",ref:C.ref,slot:L,where:C.where,detail:`${P} opens a popover card but names none.`,target:C.target}));const N=[];z.entity&&N.push(z.entity);const A=z.target?.entity_id;typeof A=="string"?N.push(A):Array.isArray(A)&&N.push(...A.filter(G=>typeof G=="string")),N.forEach((G,st)=>y(G,{ref:C.ref,slot:`${L}.entity.${st}`,label:`${P} entity`,where:C.where,target:C.target}))}},T=b=>{const C=Ti(b.kind,b.item),M=i.offered[b.kind],z=nt(b.screens.labels);for(const[P,L]of Object.entries(b.item)){if(L===void 0)continue;const N=b.screens.slots.get(P);if(N===void 0){if(C.includes(P))continue;k({check:"unreachable-key",severity:"info",ref:b.ref,slot:P,where:b.where,detail:`“${P}” is set in the YAML but no screen in this editor can show or change it.`,target:b.base,removal:b.removal(P)});continue}const A=M?.[P];A&&typeof L=="string"&&L!==""&&!A.includes(L)&&k({check:"unpickable-value",severity:"info",ref:b.ref,slot:P,where:b.where,detail:`“${P}” is “${L}”, which this editor's picker does not offer — it can only be changed in YAML.`,target:{...b.base,path:[...b.base.path,z(N)]},removal:b.removal(P)})}},I=(b,C,M,z,P,L)=>{const N=b==="popover",A=N?"egs":"gs",G=N?"eopt":"opt",st=N?"xfield":"field";L.forEach(O=>{const at=i.fieldName(O),Z=`${C} › ${P} › ${at}`,K=`${st}:${z}/${O.id}`,ee={key:`field:${O.id}`,label:at},ie=i.screens("field",O),tt=nt(ie.labels),et=(...B)=>({tab:"cards",panel:b,path:[M,ee,...B]}),oe=j(O.type),Me=tt(oe?"fsec:control":"fsec:source");y(O.entity,{ref:K,slot:"entity",label:"Entity",where:Z,target:et(Me)});for(const[B,V]of[["charging_entity","Charging entity"],["tank_pct_entity","Tank % entity"],["tank_volume_entity","Tank volume entity"],["tank_capacity_entity","Tank capacity entity"]])y(O[B],{ref:K,slot:B,label:V,where:Z,target:et(tt("fsec:source"))});(O.graph_series??[]).forEach((B,V)=>{const q=B.label||B.entity||`Series ${V+1}`;y(B.entity,{ref:K,slot:`graph_series.${V}.entity`,label:"Series entity",where:`${Z} › ${q}`,target:et(tt("fsec:series"),{key:`${A}:${V}`,label:q})})}),(O.options??[]).forEach((B,V)=>{const q=B.label||B.value||`Option ${V+1}`,se=`${Z} › ${q}`,ae=et(tt("fsec:options"),{key:`${G}:${V}`,label:q});y(B.entity,{ref:K,slot:`options.${V}.entity`,label:"Option entity",where:se,target:ae}),D(B,{ref:K,where:se,target:ae,slotPfx:`options.${V}.`})});for(const B of["left","center","right"])y(O.slider_labels?.[B]?.entity,{ref:K,slot:`slider_labels.${B}.entity`,label:`${B} track label entity`,where:Z,target:et(tt("fsec:sliderpoints"))});if(D(O,{ref:K,where:Z,target:et(tt(oe?"fsec:control":"fsec:actions"))}),!O.entity){const B=(O.options??[]).filter(V=>(V.value??"")!==""&&(O.type==="dropdown"||!V.entity));if((O.type==="button_group"||O.type==="dropdown")&&B.length){const V=B.length,q=V===1;k({check:"no-write-target",severity:"error",ref:K,slot:"entity",where:Z,detail:`${V} option${q?"":"s"} write${q?"s":""} a value to this field's entity, but the field has none — ${q?"it renders":"they render"} disabled and can do nothing. ${O.type==="dropdown"?"Set an entity on the field — a dropdown always writes to it and ignores an entity set on the option.":`Give ${q?"the option its own entity":"each option its own entity"}, or set one on the field.`}`,target:et(tt("fsec:options"))})}O.type==="button"&&(O.button_value??"")!==""&&k({check:"no-write-target",severity:"error",ref:K,slot:"button_value",where:Z,detail:`Press writes “${O.button_value}” to this field's entity, but the field has none — the button renders disabled.`,target:et(tt("fsec:options"))})}T({kind:"field",item:O,screens:ie,ref:K,where:Z,base:{tab:"cards",panel:b,path:[M,ee]},removal:B=>({kind:"field",extended:N,cardId:z,itemId:O.id,key:B})})})},U=i.screens("card"),lt=nt(U.labels);l.forEach((b,C)=>{const M=b.name??`Card ${C+1}`,z=`Mosaic Cards › ${M}`,P=`card:${b.id}`,L={key:`card:${b.id}`,label:M},N=A=>({tab:"cards",panel:"mosaic",path:A?[L,lt(A)]:[L]});y(b.visible_when?.entity,{ref:P,slot:"visible_when.entity",label:"Visibility condition entity",where:z,target:N("sec:visibility")}),D(b,{ref:P,where:z,target:N("sec:actions")}),T({kind:"card",item:b,screens:U,ref:P,where:z,base:N(),removal:A=>({kind:"card",itemId:b.id,key:A})}),I("mosaic","Mosaic Cards",L,b.id,M,b.fields??[])});const Ft=i.screens("extCard");c.forEach((b,C)=>{const M=b.name??`Popover Card ${C+1}`,z={key:`card:${b.id}`,label:M};T({kind:"extCard",item:b,screens:Ft,ref:`xcard:${b.id}`,where:`Popover Cards › ${M}`,base:{tab:"cards",panel:"popover",path:[z]},removal:P=>({kind:"extCard",itemId:b.id,key:P})}),I("popover","Popover Cards",z,b.id,M,b.fields??[])});const Dt=i.screens("emb");d.forEach((b,C)=>{const M=b.name??b.id??`Embedded ${C+1}`;T({kind:"emb",item:b,screens:Dt,ref:`emb:${b.id}`,where:`Embedded External Cards › ${M}`,base:{tab:"cards",panel:"embedded",path:[{key:`emb:${b.id}`,label:M}]},removal:z=>({kind:"emb",itemId:b.id,key:z})})});const ht=i.screens("zone"),ft=nt(ht.labels);p.forEach((b,C)=>{const M=b.name??b.id??`Zone ${C+1}`,z=`Clickable Zones › ${M}`,P=`zone:${b.id}`,L={key:`zone:${b.id}`,label:M},N=A=>({tab:"elements",panel:"zones",path:A?[L,ft(A)]:[L]});D(b,{ref:P,where:z,target:N("sec:actions")}),T({kind:"zone",item:b,screens:ht,ref:P,where:z,base:N(),removal:A=>({kind:"zone",itemId:b.id,key:A})})});const yt=i.screens("flow"),De=nt(yt.labels);u.forEach((b,C)=>{const M=b.name??b.id??`Flow ${C+1}`,z=`Animated Flow Lines › ${M}`,P=`flow:${b.id}`,L={key:`flow:${b.id}`,label:M},N=(...A)=>({tab:"elements",panel:"flows",path:[L,...A]});y(b.entity,{ref:P,slot:"entity",label:"Entity",where:z,target:N(De("sec:defaults"))}),(b.points??[]).forEach((A,G)=>{A.card&&!m.has(A.card)&&k({check:"flow-endpoint",severity:"error",ref:P,slot:`points.${G}`,where:z,detail:`Point ${G+1} is anchored to card “${A.card}”, which no longer exists — the point falls back to the canvas origin.`,target:N({key:`pt:${G}`,label:`Point ${G+1}`})})}),T({kind:"flow",item:b,screens:yt,ref:P,where:z,base:N(),removal:A=>({kind:"flow",itemId:b.id,key:A})})}),g.forEach((b,C)=>{const M=b.name||b.id||`Virtual ${C+1}`,z=`Virtual Entities › ${M}`,P=`virt:${b.id}`,L={key:`virt:${b.id}`,label:M},N=i.screens("virtual",b),A=nt(N.labels),G=(...O)=>({tab:"elements",panel:"virtuals",path:[L,...O]});(b.inputs??[]).forEach((O,at)=>{y(O,{ref:P,slot:`inputs.${at}`,label:`Input ${at+1}`,where:z,target:G({key:`vin:${at}`,label:O||`Input ${at+1}`})})}),y(b.entity,{ref:P,slot:"entity",label:"Source entity",where:z,target:G(A("sec:value"))});const st=A("sec:tu");y(b.value_entity??b.pct_entity,{ref:P,slot:"value_entity",label:"Value entity",where:z,target:G(st)}),y(b.rate_entity??b.power_entity,{ref:P,slot:"rate_entity",label:"Rate entity",where:z,target:G(st)}),y(b.capacity_entity,{ref:P,slot:"capacity_entity",label:"Capacity entity",where:z,target:G(st)}),T({kind:"virtual",item:b,screens:N,ref:P,where:z,base:G(),removal:O=>({kind:"virtual",itemId:b.id,key:O})})});const ct=t.background;if(ct){const C={ref:"background",where:"Canvas › Background",target:{tab:"settings",panel:"canvas",path:[nt(i.screens("canvas").labels)("sec:bg")]}};ct.source==="entity"?y(ct.mode_entity,{...C,slot:"mode_entity",label:"Mode entity"}):ct.source!=="day"&&ct.source!=="night"&&y(ct.sun_entity,{...C,slot:"sun_entity",label:"Sun entity"})}return t.canvas&&D(t.canvas,{ref:"canvas",where:"Canvas",target:{tab:"settings",panel:"canvas",path:[]}}),{issues:o,skipped:s,coverage:a}}function Pi(t){return t.issues.reduce((e,i)=>e+(i.severity==="error"&&!i.ignored?1:0),0)}var Ri=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,w=(t,e,i,o)=>{for(var s=o>1?void 0:o?Fi(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&Ri(e,i,s),s};const me=Ve(Se);function it(t){return Math.round(t*10)/10}function E(t){return Math.round(t*1e4)/1e4}function H(t,e){const i={...t??{},...e};for(const o of Object.keys(e))e[o]===void 0&&delete i[o];return i}function R(t,e){return e.map(i=>`${t}.${i}`)}function X(t,e){return e.map(i=>`${t}${i}`)}function Di(t,e){let i=t;for(const o of e.split(".")){if(i===null||typeof i!="object")return;i=i[o]}return i}function Ct(t,e){if(!e)return 0;let i=0;for(const o of e)Di(t,o)!==void 0&&i++;return i}function Et(t,e,i,o,s){const a=(t.split(".")[1]??"sensor").replace(/_/g," "),r=e.replace(/_/g," "),l=["# Add to configuration.yaml","sensor:","  - platform: statistics",`    name: "${a} ${r}"`,`    entity_id: ${t}`,`    state_characteristic: ${e}`];i&&(l.push("    max_age:"),l.push(`      hours: ${i}`)),o&&l.push(`    sampling_size: ${o}`),e==="percentile"&&s&&l.push(`    percentile: ${s}`);const c=`${t.split(".")[1]??"sensor"}_${e}`;return l.push(""),l.push("# Then set the field entity to:"),l.push(`# sensor.${c}`),l.join(`
`)}const Bt=[{value:"average_linear",label:"Average (linear)",group:"Averages"},{value:"average_step",label:"Average (step)",group:"Averages",binary:!0},{value:"average_timeless",label:"Average (timeless)",group:"Averages",binary:!0},{value:"mean",label:"Mean",group:"Averages",binary:!0},{value:"mean_circular",label:"Mean (circular)",group:"Averages"},{value:"median",label:"Median",group:"Averages"},{value:"value_max",label:"Value maximum",group:"Extremes"},{value:"value_min",label:"Value minimum",group:"Extremes"},{value:"distance_absolute",label:"Range (max − min)",group:"Extremes"},{value:"standard_deviation",label:"Standard deviation",group:"Spread"},{value:"variance",label:"Variance",group:"Spread"},{value:"noisiness",label:"Noisiness",group:"Spread"},{value:"percentile",label:"Percentile",group:"Spread"},{value:"distance_95_percent_of_values",label:"Distance 95% of values",group:"Spread"},{value:"distance_99_percent_of_values",label:"Distance 99% of values",group:"Spread"},{value:"change",label:"Change",group:"Change"},{value:"change_sample",label:"Change per sample",group:"Change"},{value:"change_second",label:"Change per second",group:"Change"},{value:"sum",label:"Sum",group:"Sums"},{value:"sum_differences",label:"Sum of differences",group:"Sums"},{value:"sum_differences_nonnegative",label:"Sum of differences (positive)",group:"Sums"},{value:"total",label:"Total",group:"Sums"},{value:"count",label:"Count (samples)",group:"Counts",binary:!0},{value:"count_on",label:"Count (on)",group:"Counts",binary:!0},{value:"count_off",label:"Count (off)",group:"Counts",binary:!0},{value:"datetime_newest",label:"Timestamp (newest)",group:"Timestamps"},{value:"datetime_oldest",label:"Timestamp (oldest)",group:"Timestamps",binary:!0},{value:"datetime_value_max",label:"Timestamp (at max)",group:"Timestamps"},{value:"datetime_value_min",label:"Timestamp (at min)",group:"Timestamps"}],Tt=["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],Gt={"top-left":"Top Left",top:"Top Center","top-right":"Top Right",left:"Left Middle",center:"Center",right:"Right Middle","bottom-left":"Bottom Left",bottom:"Bottom Center","bottom-right":"Bottom Right"},_t=["left","center","right"],Mi=[{name:"--primary-color",label:"Primary"},{name:"--text-primary-color",label:"Text on Primary"},{name:"--accent-color",label:"Accent"},{name:"--primary-text-color",label:"Primary text"},{name:"--secondary-text-color",label:"Secondary text"},{name:"--disabled-text-color",label:"Disabled text"},{name:"--primary-background-color",label:"Primary background"},{name:"--secondary-background-color",label:"Secondary background"},{name:"--card-background-color",label:"Card background"},{name:"--divider-color",label:"Divider"},{name:"--state-icon-color",label:"State icon"},{name:"--state-active-color",label:"State Active"},{name:"--state-inactive-color",label:"State Inactive"},{name:"--error-color",label:"Error"},{name:"--warning-color",label:"Warning"},{name:"--success-color",label:"Success"},{name:"--info-color",label:"Info"}],Ht=["value","label","icon","svg","blank","rule","embedded_card","toggle","slider","dropdown","button_group","input","spinbox","button"],zt={value:"Value",label:"Label",icon:"Icon",svg:"Element Library",graph:"Graph / Gauge",blank:"Blank",rule:"Horizontal Rule",embedded_card:"Embedded Card",toggle:"Toggle",slider:"Slider",dropdown:"Dropdown",button_group:"Button Group",input:"Input",spinbox:"Spin Box",button:"Button"},gt={value:"mdi:function-variant",label:"mdi:format-title",icon:"mdi:image",svg:"mdi:shape-outline",graph:"mdi:chart-line",blank:"mdi:crop-square-outline",rule:"mdi:minus",embedded_card:"mdi:widgets",toggle:"mdi:toggle-switch-outline",slider:"mdi:tune-variant",dropdown:"mdi:form-dropdown",button_group:"mdi:view-dashboard-variant-outline",input:"mdi:form-textbox",spinbox:"mdi:numeric",button:"mdi:gesture-tap-button"},Wt=[{value:"stat-line",label:"Statistics — Line"},{value:"bar",label:"Statistics — Bar"},{value:"bar-stacked",label:"Statistics — Bar (stacked)"},{value:"line",label:"History — Line (with unit)"},{value:"area",label:"History — Area (with unit)"},{value:"state-timeline",label:"History — State timeline"},{value:"gauge",label:"Arc Gauge"},{value:"gauge-needle",label:"Arc Gauge (Needle)"}],vt="background gradient angle opacity color border width radius padding glow blur css",bt="font size color weight family letter spacing css",Rt="tap hold double navigate url more info toggle service action perform assist popover expand dom event entity write override",qt="tick minor major length thickness font size position grid line color temperature transparency opacity decimals value",rt=["background","background_alpha","background2","background_angle","color","border","border_width","radius","padding","glow","extra_css","blur"],Q=["font_size","color","font_weight","font_family","letter_spacing","extra_css"],Ii=rt.filter(t=>t!=="extra_css"),Ai=Q.filter(t=>t!=="extra_css"),be=!1,Jt=["tap_action","hold_action","double_tap_action"],Oi=["icon_position","show_state","state_position","icon_style","label_style","state_style"],J={"sub:container":{sel:["button_group_text_size","button_group_icon_size","button_group_state_size"],btn:["button_border_color","button_border_width","button_radius","button_option_padding","button_text_size","button_icon_size","button_state_size"]},"sub:active":{sel:["button_group_selected_color","button_group_selected_color2","button_group_selected_text_color","button_group_selected_icon_color","button_group_selected_state_color"],btn:["button_selected_color","button_selected_color2","button_selected_text_color","button_selected_icon_color","button_selected_state_color"]},"sub:inactive":{sel:["button_group_bg","button_group_bg2","button_group_text_color","button_group_icon_color","button_group_state_color"],btn:["button_bg","button_bg2","button_text_color","button_icon_color","button_state_color"]}},Qt=["button_group_option_gap","button_group_border_color","button_group_border_width","button_group_radius","button_group_option_padding","button_group_option_border","button_group_option_border_color","button_group_option_border_width","button_group_option_radius","button_group_option_extra_css"],te=["button_option_padding"],Ni=J["sub:container"].btn.filter(t=>!te.includes(t)),Fe=["major_tick_length","major_tick_width","minor_tick_length","minor_tick_width","show_minor_tick_text","tick_color","tick_font_size","text_position","grid_color","temp_color","temp_font_size","decimals","fill_opacity_above"],ve=[...Fe,"fill_color","fill_color2","extra_css"],Pt=["fill_color","fill_color2","fill_direction","tank_color","extra_css"],fe=["fill_color","fill_color2","extra_css"],ot={accent:["accent_color","accent_color2"],toggle:["toggle_on_color","toggle_on_color2","toggle_off_color","toggle_off_color2","toggle_thumb_color","toggle_thumb_size","toggle_thumb_radius","toggle_thumb_padding","toggle_thumb_shadow"],slider:["slider_track_color","slider_track_color2","slider_fill_color","slider_fill_color2","slider_height","slider_length","slider_radius","slider_border","slider_border_color","slider_border_width","slider_thumb_color","slider_thumb_size","slider_thumb_width","slider_thumb_radius","slider_thumb_padding","slider_thumb_shadow"],dropdown:["dropdown_border_color","dropdown_bg","dropdown_bg2","dropdown_menu_bg","dropdown_menu_bg2","dropdown_menu_border_color","dropdown_selected_color","dropdown_selected_color2","dropdown_radius","dropdown_text_size","dropdown_menu_radius","dropdown_menu_shadow","dropdown_option_radius","dropdown_option_text_color","dropdown_option_hover_color"],input:["input_border_color","input_bg","input_bg2","input_focus_color","input_placeholder_color","input_radius","input_text_size"],spinbox:["spinbox_border_color","spinbox_bg","spinbox_bg2","spinbox_button_hover_color","spinbox_button_hover_color2","spinbox_button_width","spinbox_button_font_size","spinbox_radius","spinbox_text_size"]},ye=(()=>{try{return new URL("./",import.meta.url).href}catch{return"/local/community/mosaic-canvas-card/"}})(),Li=[{type:"alarm-panel",name:"Alarm Panel"},{type:"button",name:"Button"},{type:"calendar",name:"Calendar"},{type:"entities",name:"Entities"},{type:"entity",name:"Entity"},{type:"entity-filter",name:"Entity Filter"},{type:"gauge",name:"Gauge"},{type:"glance",name:"Glance"},{type:"history-graph",name:"History Graph"},{type:"horizontal-stack",name:"Horizontal Stack"},{type:"humidifier",name:"Humidifier"},{type:"iframe",name:"iFrame"},{type:"light",name:"Light"},{type:"logbook",name:"Logbook"},{type:"map",name:"Map"},{type:"markdown",name:"Markdown"},{type:"media-control",name:"Media Control"},{type:"picture",name:"Picture"},{type:"picture-elements",name:"Picture Elements"},{type:"picture-entity",name:"Picture Entity"},{type:"picture-glance",name:"Picture Glance"},{type:"plant-status",name:"Plant Status"},{type:"sensor",name:"Sensor"},{type:"shopping-list",name:"Shopping List"},{type:"statistics-graph",name:"Statistics Graph"},{type:"thermostat",name:"Thermostat"},{type:"tile",name:"Tile"},{type:"todo-list",name:"To-do List"},{type:"vertical-stack",name:"Vertical Stack"},{type:"weather-forecast",name:"Weather Forecast"},{type:"webpage",name:"Webpage"}];function Bi(t){const e=(t??"").trim(),i=e.match(/^color-mix\(\s*in\s+srgb\s*,\s*(.+?)\s+([\d.]+)%\s*,\s*transparent\s*\)$/i);if(i)return{base:i[1].trim(),alpha:Math.max(0,Math.min(1,Number(i[2])/100))};const o=e.match(/^#([0-9a-f]{6})([0-9a-f]{2})$/i);if(o)return{base:`#${o[1]}`,alpha:parseInt(o[2],16)/255};const s=e.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*[,/]\s*([\d.]+)\s*\)$/i);return s?{base:"#"+[s[1],s[2],s[3]].map(r=>Math.max(0,Math.min(255,Math.round(Number(r)))).toString(16).padStart(2,"0")).join(""),alpha:Math.max(0,Math.min(1,Number(s[4])))}:{base:e,alpha:1}}function we(t,e){return e>=1?t:`color-mix(in srgb, ${t} ${Number((e*100).toFixed(1))}%, transparent)`}function Gi(t,e){const i=e?.isConnected?e:document.body,o=document.createElement("div");try{o.style.color=t,o.style.display="none",i.appendChild(o);const a=getComputedStyle(o).color.match(/\d+/g)?.map(Number);return!a||a.length<3?"#000000":"#"+a.slice(0,3).map(r=>r.toString(16).padStart(2,"0")).join("")}catch{return"#000000"}finally{o.remove()}}let h=class extends Ae{constructor(){super(...arguments),this._selCard=0,this._selField=-1,this._selCards=new Set,this._selEmbCards=new Set,this._selFlow=-1,this._showAddFlowInput=!1,this._newFlowName="",this._pendingFlowIdx=-1,this._showFlowCompleteModal=!1,this._selPoint=-1,this._selSeries=-1,this._selOption=-1,this._selExtOption=-1,this._selExtSeries=-1,this._selVirtual=-1,this._selVirtualInput=-1,this._selTrigger=-1,this._selZone=-1,this._selExtCard=0,this._selExtField=-1,this._templateName="",this._templateIncludeEntities=!1,this._templateError="",this._previewBoxes={},this._previewExpanded=!1,this._barAtTop=localStorage.getItem("mc-expanded-bar-top")==="1",this._onWindowResize=()=>this._sizeExpandedCanvas(),this._pickerStyleScheduled=!1,this._pickerStyleRetries=0,this._mccustApplied=[],this._copiedFields=null,this._copySourceId=null,this._virtualClipboard=null,this._copiedField=null,this._copiedFieldSrc=null,this._copiedOption=null,this._dragSrc=null,this._cpOpenId=null,this._cpOpenAbove=!1,this._ggOpen=!1,this._ggTarget=null,this._wizStep=-1,this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizardShown=!1,this._oneOwnerChecked=!1,this._dragCard=-1,this._startX=0,this._startY=0,this._dragMembers=[],this._embDragMembers=[],this._dragPoint=-1,this._pStartX=0,this._pStartY=0,this._pStartPos={x:0,y:0},this._snapAxis=null,this._snapAnchor=null,this._dragZone=-1,this._zStartX=0,this._zStartY=0,this._zStartPos={x:0,y:0},this._resizeZone=-1,this._resizeCorner="br",this._zResizeStartBox={x:0,y:0,w:0,h:0},this._bgSelected=!1,this._bgMode=null,this._bgStartX=0,this._bgStartY=0,this._bgStart={L:0,T:0,baseW:0,baseH:0,totalW:0,totalH:0},this._selEmbCard=-1,this._dragEmbCard=-1,this._ecStartX=0,this._ecStartY=0,this._embEditorOpen=!1,this._embEditorYaml="",this._embEditorYamlError="",this._embNativeEditor=null,this._embEditorTarget=null,this._embEditorConfig=null,this._embPickerOpen=!1,this._embPickerSearch="",this._embPickerTarget=null,this._variantOpen="",this._variantError="",this._saveVariantFor="",this._saveVariantLabel="",this._variantImportError="",this._navTab="cards",this._navPanel="",this._navPath=[],this._panelScroll=new Map,this._lastScrollKey="",this._lastScrollDepth=0,this._listFilter="",this._listFilterKey="",this._undoStack=[],this._redoStack=[],this._undoSrc=null,this._undoLastPush=0,this._restoring=!1,this._onUndoKeydown=t=>{if(!(t.ctrlKey||t.metaKey)||t.altKey)return;const e=t.key.toLowerCase(),i=e==="z"&&!t.shiftKey,o=e==="y"||e==="z"&&t.shiftKey;if(!i&&!o)return;const s=t.composedPath()[0];if(s instanceof HTMLElement){const a=s.tagName;if(a==="INPUT"||a==="TEXTAREA"||a==="SELECT"||s.isContentEditable)return}t.preventDefault(),t.stopPropagation(),i?this._undo():this._redo()},this._toastMsg="",this._tutorialStep=-1,this._ptrDrag=null,this._dropKey=null,this._dropBefore=!1,this._suppressClick=!1,this._searchQuery="",this._searchActive=0,this._healthShowIgnored=!1,this._optionLayoutOn=new Set,this._colorOverridesOn=new Set,this._resetToWizard=()=>{window.confirm(`Reset all configuration and restart the setup wizard?

This will clear all cards, popover cards, embedded cards, virtuals, flows, zones, and background settings.

It also resets Global Defaults to their starting values — including your saved custom control variants — and clears the popover card defaults and EV count.`)&&(this._wiz={cardType:"",source:"auto",sunEntity:"sun.sun",dayImg:"",nightImg:"",evCount:0,evImgs:[],bgCount:"single",bgSwitchMode:"sun",bgEntity:"",singleImg:""},this._wizStep=0,this._emit({type:this._config.type,background:{},canvas:{},defaults:{font_family:"sans-serif",card:{background:"rgba(8,18,28,0.55)",border:!0,color:"#00d4ff",radius:10,padding:8},label:{font_size:13,color:"#cccccc"},value:{font_size:22,color:"#ffffff",font_weight:600}},cards:[]}))},this._cpMode="rgb"}_navPush(t,e,i){this._navPath=[...this._navPath,{key:t,label:e,...i?{hint:i}:{}}]}_crumbIndex(t,e){if(!e)return-1;const i=t.slice(t.indexOf(":")+1),o=e.findIndex(a=>{const r=a&&typeof a=="object"?a.id:void 0;return r!==void 0&&String(r)===i});if(o>=0)return o;const s=Number(i);return Number.isInteger(s)&&s>=0&&s<e.length?s:-1}_navScrollKey(){return`${this._navTab}|${this._navPanel}|${this._navPath.map(t=>t.key).join("/")}`}_navDeadEnd(t="This item no longer exists — it may have been removed in the YAML editor."){return n`
      <ha-alert alert-type="warning">${t}</ha-alert>
      <button class="ec-btn-add" style="margin-top:10px;" @click=${()=>this._navBack()}>← Back</button>
    `}_currentListFilter(){return this._listFilterKey===this._navScrollKey()?this._listFilter.trim().toLowerCase():""}_listFilterBox(t){return t<=7&&!this._currentListFilter()?_:n`
      <input class="ec-input ec-list-filter" type="search" placeholder="Filter…"
        .value=${this._listFilterKey===this._navScrollKey()?this._listFilter:""}
        @input=${e=>{this._listFilterKey=this._navScrollKey(),this._listFilter=e.target.value}}
      />
    `}_emptyAdd(t,e){return n`<button class="ec-empty ec-empty-action" @click=${e}>${t}</button>`}setConfig(t){this._assertOneOwnerInvariant();let e=!1;const i=(r,l)=>{let c=!1;const d=r.map((p,u)=>{const g={};return p.column==null&&(g.column=1),p.id||(g.id=`mc-auto-${l}f${u}`),Object.keys(g).length===0?p:(e=!0,c=!0,{...p,...g})});return c?d:r},o=(r,l)=>r.id?r:(e=!0,{...r,id:l}),s=(t.cards??[]).map((r,l)=>{const c=o(r,`mc-auto-card${l}`),d=i(c.fields,`card${l}-`);return d===c.fields?c:{...c,fields:d}}),a=(t.extended_cards??[]).map((r,l)=>{const c=o(r,`mc-auto-ext${l}`),d=i(c.fields,`ext${l}-`);return d===c.fields?c:{...c,fields:d}});if(e&&(t={...t,cards:s,...t.extended_cards?{extended_cards:a}:{}}),this._config&&JSON.stringify(this._config)!==JSON.stringify(t)&&this._pushUndo(this._config,"external"),this._config=t,Mt(t.defaults?.control_variants),this._truncateStaleNavPath(),!this._wizardShown){this._wizardShown=!0;const r=!t.background?.images?.day&&!t.background?.images?.night,l=(t.cards??[]).length===0;r&&l&&(this._wizStep=0)}}_truncateStaleNavPath(){const t=this._config;if(!t)return;const e=this._navPanel;let i=-1,o=-1,s=-1,a=-1;const r=d=>{switch(d){case"card":return e==="popover"?this._extCards():t.cards??[];case"field":return i<0?[]:(e==="popover"?this._extCards()[i]?.fields:t.cards?.[i]?.fields)??[];case"gs":return i>=0&&o>=0?t.cards?.[i]?.fields[o]?.graph_series??[]:[];case"egs":return i>=0&&o>=0?this._extCards()[i]?.fields[o]?.graph_series??[]:[];case"opt":return i>=0&&o>=0?t.cards?.[i]?.fields[o]?.options??[]:[];case"eopt":return i>=0&&o>=0?this._extCards()[i]?.fields[o]?.options??[]:[];case"emb":return this._embCards();case"virt":return this._virtuals();case"vin":return s>=0?this._virtuals()[s]?.inputs??[]:[];case"trig":return s>=0?this._virtuals()[s]?.triggers??[]:[];case"zone":return this._zones();case"flow":return this._flows();case"pt":return a>=0?this._flows()[a]?.points??[]:[];default:return null}};let l=this._navPath.length;for(let d=0;d<this._navPath.length;d++){const p=this._navPath[d].key,u=p.indexOf(":"),g=u>0?p.slice(0,u):p,m=r(g);if(m===null)continue;const f=this._crumbIndex(p,m);if(f<0){l=d;break}switch(g){case"card":i=f,e==="popover"?this._selExtCard=f:this._selCard=f;break;case"field":o=f,e==="popover"?this._selExtField=f:this._selField=f;break;case"gs":this._selSeries=f;break;case"egs":this._selExtSeries=f;break;case"opt":this._selOption=f;break;case"eopt":this._selExtOption=f;break;case"emb":this._selEmbCard=f;break;case"virt":s=f,this._selVirtual=f;break;case"vin":this._selVirtualInput=f;break;case"trig":this._selTrigger=f;break;case"zone":this._selZone=f;break;case"flow":a=f,this._selFlow=f;break;case"pt":this._selPoint=f;break}}l<this._navPath.length&&(this._navPath=this._navPath.slice(0,l));const c=(d,p)=>Math.min(d,p-1);this._selCard=c(this._selCard,t.cards?.length??0),this._selExtCard=c(this._selExtCard,this._extCards().length),this._selEmbCard=c(this._selEmbCard,this._embCards().length),this._selVirtual=c(this._selVirtual,this._virtuals().length),this._selZone=c(this._selZone,this._zones().length),this._selFlow=c(this._selFlow,this._flows().length)}_navigateTo(t,e,i=[]){this._navTab=t,this._navPanel=e,this._navPath=i.map(o=>({key:o.key,label:o.label??o.key.slice(o.key.indexOf(":")+1),...o.hint?{hint:o.hint}:{}})),this._selField=-1,this._selExtField=-1,this._selSeries=-1,this._selExtSeries=-1,this._selPoint=-1,this._selVirtualInput=-1,this._selTrigger=-1,this._truncateStaleNavPath()}_emit(t){const e=this._config;e&&e!==t&&!this._restoring&&this._pushUndo(e),this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_cloneCfg(t){return JSON.parse(JSON.stringify(t))}_undoEmitSource(){if(this._dragCard>=0)return`drag:card:${this._dragCard}:${this._startX},${this._startY}`;if(this._dragEmbCard>=0)return`drag:emb:${this._dragEmbCard}:${this._ecStartX},${this._ecStartY}`;if(this._dragZone>=0)return`drag:zone:${this._dragZone}:${this._zStartX},${this._zStartY}`;if(this._resizeZone>=0)return`resize:zone:${this._resizeZone}:${this._resizeCorner}:${this._zResizeStartBox.x},${this._zResizeStartBox.y}`;if(this._dragPoint>=0)return`drag:pt:${this._dragPoint}:${this._pStartX},${this._pStartY}`;if(this._bgMode)return`drag:bg:${this._bgMode}:${this._bgStartX},${this._bgStartY}`;const t=this.shadowRoot?.activeElement??null;return t?t.tagName==="BUTTON"?t.classList.contains("ec-num-step")?t:null:t:null}static _isGestureKey(t){return typeof t=="string"&&(t.startsWith("drag:")||t.startsWith("resize:"))}_endUndoGesture(){h._isGestureKey(this._undoSrc)&&(this._undoSrc=null)}_pushUndo(t,e){this._toastMsg="";const i=Date.now(),o=e??this._undoEmitSource(),s=o!==null&&o===this._undoSrc&&(h._isGestureKey(o)||i-this._undoLastPush<h._UNDO_COALESCE_MS);this._undoSrc=o,this._undoLastPush=i,s||(this._undoStack.push(this._cloneCfg(t)),this._undoStack.length>h._UNDO_LIMIT&&this._undoStack.shift()),this._redoStack=[]}_undo(){this._restore(this._undoStack,this._redoStack)}_redo(){this._restore(this._redoStack,this._undoStack)}_restore(t,e){const i=this._config;if(!t.length||!i)return;const o=t.pop();e.push(this._cloneCfg(i)),e.length>h._UNDO_LIMIT&&e.shift(),this._applySnapshot(o)}_applySnapshot(t){this._restoring=!0;try{this._emit(t)}finally{this._restoring=!1}this._undoSrc=null,this._toastMsg="",this._truncateStaleNavPath()}_showUndoToast(t){this._toastMsg=t,clearTimeout(this._toastTimer),this._toastTimer=window.setTimeout(()=>{this._toastMsg=""},6e3)}_renderUndoToast(){return this._toastMsg?n`
      <div class="ec-undo-toast" role="status">
        <span>${this._toastMsg}</span>
        <button class="ec-undo-toast-btn" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>Undo</button>
      </div>
    `:_}_finishWizard(){if(!this._config)return;const t=this._wiz;let e;if(t.cardType==="energy"){if(t.source!=="none"){e={source:t.source},t.source==="auto"&&(e.sun_entity=t.sunEntity||"sun.sun");const o={},s={};t.dayImg&&(o[0]=t.dayImg),t.nightImg&&t.source==="auto"&&(s[0]=t.nightImg);for(let a=0;a<t.evCount;a++){const r=t.evImgs[a];r?.day&&(o[String(a+1)]=r.day),r?.night&&t.source==="auto"&&(s[String(a+1)]=r.night)}e.images={},Object.keys(o).length>0&&(e.images.day=o),Object.keys(s).length>0&&(e.images.night=s)}}else if(t.bgCount==="single"&&t.singleImg)e={source:"day",images:{day:{0:t.singleImg}}};else if(t.bgCount==="multiple"){e=t.bgSwitchMode==="sun"?{source:"auto",sun_entity:t.sunEntity||"sun.sun"}:{source:"entity",mode_entity:t.bgEntity};const o={},s={};t.dayImg&&(o[0]=t.dayImg),t.nightImg&&(s[0]=t.nightImg),e.images={},Object.keys(o).length>0&&(e.images.day=o),Object.keys(s).length>0&&(e.images.night=s)}const i={...this._config};e&&(i.background=e),t.cardType==="energy"&&t.evCount>0&&(i.ev_count=t.evCount),this._wizStep=-1,this._emit(i),this._tutorialGo(0)}_tutorialGo(t){const e=h._TUTORIAL_STEPS;if(t<0||t>=e.length){this._tutorialStep=-1;return}const i=e[t].nav;this._navigateTo(i.tab,i.panel,i.path??[]),this._tutorialStep=t}_renderTutorial(){const t=h._TUTORIAL_STEPS,e=this._tutorialStep;if(e<0||e>=t.length)return _;const i=e===t.length-1;return n`
      <div class="ec-tour" role="dialog" aria-label="Editor tour">
        <div class="ec-tour-head">
          <span class="ec-tour-title">${t[e].title}</span>
          <span class="ec-tour-count">${e+1} / ${t.length}</span>
        </div>
        <p class="ec-tour-body">${t[e].body}</p>
        <div class="ec-tour-btns">
          <button class="ec-wiz-btn-ghost" @click=${()=>{this._tutorialStep=-1}}>Cancel</button>
          <span class="ec-tour-spacer"></span>
          ${e>0?n`<button class="ec-wiz-btn-ghost" @click=${()=>this._tutorialGo(e-1)}>← Back</button>`:_}
          <button class="ec-wiz-btn-primary" @click=${()=>i?this._tutorialStep=-1:this._tutorialGo(e+1)}>
            ${i?"Done":"Next →"}
          </button>
        </div>
      </div>
    `}_renderWizard(){const t=this._wizStep,e=this._wiz,i=s=>{this._wiz={...e,...s}},o=s=>{this._wizStep=s};return n`
      <div class="ec-wizard">
        ${t===0?n`
          <div class="ec-wiz-welcome">
            <div class="ec-wiz-icon">🎨</div>
            <h2 class="ec-wiz-title">Welcome to Mosaic Canvas Card</h2>
            <p class="ec-wiz-desc">A few quick questions will tailor the setup to your use case — or skip to jump straight into the editor.</p>
            <div class="ec-wiz-row ec-wiz-end">
              <button class="ec-wiz-btn-ghost" @click=${()=>this._finishWizard()}>Skip setup</button>
              <button class="ec-wiz-btn-primary" @click=${()=>o(1)}>Get started →</button>
            </div>
          </div>

        `:t===1?n`
          <h3 class="ec-wiz-heading">What will this card be used for?</h3>
          <p class="ec-wiz-desc">This determines what setup options you'll be asked about.</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${e.cardType==="energy"?" selected":""}"
              @click=${()=>i({cardType:"energy"})}>
              <span class="ec-wiz-type-icon">⚡</span>
              <span class="ec-wiz-type-title">Energy Dashboard</span>
              <span class="ec-wiz-type-desc">Solar, battery, grid flows with day/night switching and EV variants</span>
            </button>
            <button class="ec-wiz-type-btn${e.cardType==="general"?" selected":""}"
              @click=${()=>i({cardType:"general"})}>
              <span class="ec-wiz-type-icon">🗺️</span>
              <span class="ec-wiz-type-title">General Purpose</span>
              <span class="ec-wiz-type-desc">Any layout over a background image — floor plan, status board, custom display</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(0)}>← Back</button>
            <button class="ec-wiz-btn-primary" ?disabled=${!e.cardType}
              @click=${()=>o(e.cardType==="energy"?2:20)}>Next →</button>
          </div>

        `:t===2?n`
          <h3 class="ec-wiz-heading">Background</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Day/night switching</label>
            <select class="ec-wiz-select" .value=${e.source}
              @change=${s=>i({source:s.target.value})}>
              <option value="auto">Auto — follows sun entity</option>
              <option value="day">Day only — no switching</option>
              <option value="none">No background image</option>
            </select>
          </div>
          ${e.source==="auto"?n`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${e.sunEntity} allow-custom-entity
                @value-changed=${s=>i({sunEntity:s.detail.value})}
              ></ha-entity-picker>
            </div>
          `:_}
          ${e.source!=="none"?n`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Day image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-day.jpg"
                .value=${e.dayImg} @input=${s=>i({dayImg:s.target.value})}/>
            </div>
          `:_}
          ${e.source==="auto"?n`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Night image URL</label>
              <input class="ec-wiz-input" type="text" placeholder="/local/energy-night.jpg"
                .value=${e.nightImg} @input=${s=>i({nightImg:s.target.value})}/>
            </div>
          `:_}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(1)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>o(3)}>Next →</button>
          </div>

        `:t===3?n`
          <h3 class="ec-wiz-heading">EV Variants <span class="ec-wiz-optional">(optional)</span></h3>
          <p class="ec-wiz-desc">Show different backgrounds based on how many EVs are home charging.</p>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">EV charging slots (0 = no EV switching)</label>
            <input class="ec-wiz-input ec-wiz-input--short" type="number" min="0" max="3"
              .value=${String(e.evCount)}
              @input=${s=>{const a=Math.max(0,Math.min(3,parseInt(s.target.value)||0)),r=Array.from({length:a},(l,c)=>e.evImgs[c]??{day:"",night:""});i({evCount:a,evImgs:r})}}/>
          </div>
          ${e.evImgs.map((s,a)=>n`
            <div class="ec-wiz-ev-group">
              <div class="ec-wiz-ev-label">${a+1} EV${a>0?"s":""} charging</div>
              ${e.source!=="none"?n`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Day image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-day-${a+1}ev.jpg`}
                    .value=${s.day}
                    @input=${r=>{const l=e.evImgs.map((c,d)=>d===a?{...c,day:r.target.value}:c);i({evImgs:l})}}/>
                </div>
              `:_}
              ${e.source==="auto"?n`
                <div class="ec-wiz-field">
                  <label class="ec-wiz-label">Night image</label>
                  <input class="ec-wiz-input" type="text" .placeholder=${`/local/energy-night-${a+1}ev.jpg`}
                    .value=${s.night}
                    @input=${r=>{const l=e.evImgs.map((c,d)=>d===a?{...c,night:r.target.value}:c);i({evImgs:l})}}/>
                </div>
              `:_}
            </div>
          `)}
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(2)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:t===20?n`
          <h3 class="ec-wiz-heading">Background images</h3>
          <p class="ec-wiz-desc">Do you want a background image on this card?</p>
          <div class="ec-wiz-type-grid">
            <button class="ec-wiz-type-btn${e.bgCount==="none"?" selected":""}"
              @click=${()=>i({bgCount:"none"})}>
              <span class="ec-wiz-type-icon">⬜</span>
              <span class="ec-wiz-type-title">No background</span>
              <span class="ec-wiz-type-desc">Cards float over a plain or transparent background</span>
            </button>
            <button class="ec-wiz-type-btn${e.bgCount==="single"?" selected":""}"
              @click=${()=>i({bgCount:"single"})}>
              <span class="ec-wiz-type-icon">🖼️</span>
              <span class="ec-wiz-type-title">One image</span>
              <span class="ec-wiz-type-desc">A single static background image</span>
            </button>
            <button class="ec-wiz-type-btn${e.bgCount==="multiple"?" selected":""}"
              @click=${()=>i({bgCount:"multiple"})}>
              <span class="ec-wiz-type-icon">🔄</span>
              <span class="ec-wiz-type-title">Multiple images</span>
              <span class="ec-wiz-type-desc">Background changes based on time of day or an entity state</span>
            </button>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(1)}>← Back</button>
            <button class="ec-wiz-btn-primary"
              @click=${()=>{e.bgCount==="none"?this._finishWizard():e.bgCount==="single"?o(21):o(22)}}>Next →</button>
          </div>

        `:t===21?n`
          <h3 class="ec-wiz-heading">Background image</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">Image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/my-background.jpg"
              .value=${e.singleImg} @input=${s=>i({singleImg:s.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:t===22?n`
          <h3 class="ec-wiz-heading">Multiple backgrounds</h3>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">When should the image change?</label>
            <select class="ec-wiz-select" .value=${e.bgSwitchMode}
              @change=${s=>i({bgSwitchMode:s.target.value})}>
              <option value="sun">Time of day — follows the sun (day/night)</option>
              <option value="entity">Entity state — switches when an entity changes</option>
            </select>
          </div>
          ${e.bgSwitchMode==="sun"?n`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Sun entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${e.sunEntity} allow-custom-entity
                @value-changed=${s=>i({sunEntity:s.detail.value})}
              ></ha-entity-picker>
            </div>
          `:n`
            <div class="ec-wiz-field">
              <label class="ec-wiz-label">Trigger entity</label>
              <ha-entity-picker .hass=${this.hass} .value=${e.bgEntity} allow-custom-entity
                @value-changed=${s=>i({bgEntity:s.detail.value})}
              ></ha-entity-picker>
            </div>
            <p class="ec-wiz-desc" style="font-size:11px;margin-top:-4px;">Alternate image shows when entity state is "on", "night", or "true".</p>
          `}
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${e.bgSwitchMode==="sun"?"Day":"Main"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-main.jpg"
              .value=${e.dayImg} @input=${s=>i({dayImg:s.target.value})}/>
          </div>
          <div class="ec-wiz-field">
            <label class="ec-wiz-label">${e.bgSwitchMode==="sun"?"Night":"Alternate"} image URL</label>
            <input class="ec-wiz-input" type="text" placeholder="/local/background-alt.jpg"
              .value=${e.nightImg} @input=${s=>i({nightImg:s.target.value})}/>
          </div>
          <div class="ec-wiz-row ec-wiz-space">
            <button class="ec-wiz-btn-ghost" @click=${()=>o(20)}>← Back</button>
            <button class="ec-wiz-btn-primary" @click=${()=>this._finishWizard()}>Finish &amp; open editor</button>
          </div>

        `:_}
      </div>
    `}_updateCard(t,e){if(!this._config)return;const i=this._config.cards.map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,cards:i})}_updateCardBox(t,e){if(!this._config)return;const i=this._config.cards[t];i&&this._updateCard(t,{box:H(i.box??{},e)})}_updateField(t,e,i){if(!this._config)return;const o=this._config.cards[t];if(!o)return;const s=o.fields.map((a,r)=>r===e?H(a,i):a);this._updateCard(t,{fields:s})}_updateDefaults(t){this._config&&this._emit({...this._config,defaults:H(this._config.defaults,t)})}_updateCanvas(t){this._config&&this._emit({...this._config,canvas:H(this._config.canvas,t)})}_gridGeom(){const t=this._config?.canvas;if(t?.layout_mode!=="grid"||!t.grid)return null;const{totalW:e,totalH:i}=Y(this._config),o=Math.max(1,t.grid.columns||1),s=Math.max(1,t.grid.rows||1),a=t.grid.padding??0;return{cols:o,rows:s,padding:a,cellW:e/o,cellH:i/s,totalW:e,totalH:i}}_setLayoutMode(t){if(!this._config)return;const e={...this._config.canvas??{}};if(e.layout_mode=t,t==="grid"){e.grid||(e.grid={columns:10,rows:15,padding:0});const i=Math.max(1,e.grid.columns),o=Math.max(1,e.grid.rows),s=e.grid.padding??0,{totalW:a}=Y(this._config),r=a/i,l=this._config.cards.map(p=>{const u=this._previewBoxes[p.id],g=u?u.x+u.w/2:p.position.x,m=u?u.y+u.h/2:p.position.y,f=Math.min(i,Math.max(0,Math.round(g*i))),S=Math.min(o,Math.max(0,Math.round(m*o))),F=p.grid_span??Math.max(1,Math.min(i,Math.round((u?.w??0)*i)||1)),$=Math.max(8,F*r-s);return{...p,anchor:"center",grid_span:F,width:$,position:{x:E(f/i),y:E(S/o)}}}),c=this._embCards().map(p=>{const u=this._previewBoxes[p.id],g=u?u.x+u.w/2:p.position.x,m=u?u.y+u.h/2:p.position.y,f=Math.min(i,Math.max(0,Math.round(g*i))),S=Math.min(o,Math.max(0,Math.round(m*o))),F=p.grid_span??Math.max(1,Math.min(i,Math.round((u?.w??0)*i)||1)),$=Math.max(8,F*r-s);return{...p,anchor:"center",grid_span:F,width:$,position:{x:E(f/i),y:E(S/o)}}});this._emit({...this._config,canvas:e,cards:l,embedded_cards:c});const d=l.length+c.length;d&&this._showUndoToast(`${d} card${d===1?"":"s"} re-laid out for Grid`)}else this._emit({...this._config,canvas:e})}_renderGridOverlay(){const t=this._gridGeom();if(!t)return _;const{cols:e,rows:i}=t,o=[];for(let s=0;s<=e;s++)for(let a=0;a<=i;a++)o.push(n`<div class="ec-grid-dot" style="left:${s/e*100}%;top:${a/i*100}%;"></div>`);return n`<div class="ec-grid-overlay">${o}</div>`}_renderBgOverlay(){if(!this._config)return _;const t=Y(this._config),e=t.L/t.totalW*100,i=t.T/t.totalH*100,o=t.baseW/t.totalW*100,s=t.baseH/t.totalH*100;return n`
      <div class="ec-bg-ov${this._bgSelected?" selected":""}"
        style="left:${e}%;top:${i}%;width:${o}%;height:${s}%;"
        @pointerdown=${a=>this._onBgDown(a,"move")}
        title="Background image — drag to move, corners to resize">
        ${this._bgSelected?["tl","tr","bl","br"].map(a=>n`
          <div class="ec-bg-resize ec-bg-resize-${a}"
            @pointerdown=${r=>this._onBgDown(r,a)}></div>`):_}
      </div>`}_updateBackground(t){this._config&&this._emit({...this._config,background:H(this._config.background,t)})}_flows(){return this._config?.flows??[]}_updateFlow(t,e){if(!this._config)return;const i=this._flows().map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,flows:i})}_addFlow(){if(!this._config)return;const t={id:"flow-"+Date.now().toString(36),name:"Flow",style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},e=[...this._flows(),t];this._selFlow=e.length-1,this._selPoint=-1,this._emit({...this._config,flows:e})}_addFlowFromExpanded(){if(!this._config)return;const t=this._newFlowName.trim()||"Flow",e={id:"flow-"+Date.now().toString(36),name:t,style:"dashes",points:[{x:.4,y:.5},{x:.6,y:.5}]},i=[...this._flows(),e];this._selFlow=i.length-1,this._pendingFlowIdx=i.length-1,this._selPoint=-1,this._showAddFlowInput=!1,this._newFlowName="",this._emit({...this._config,flows:i})}_collapseExpanded(){this._pendingFlowIdx>=0?this._showFlowCompleteModal=!0:this._previewExpanded=!1}_goToFlow(){const t=this._pendingFlowIdx;this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1;const e=this._flows()[t];this._selFlow=e?t:-1,this._navigateTo("elements","flows",e?[{key:`flow:${e.id}`,label:e.name??e.id}]:[])}_removeFlow(t){if(!this._config)return;const e=this._flows().filter((i,o)=>o!==t);this._selFlow=Math.min(this._selFlow,Math.max(0,e.length-1)),e.length===0&&(this._selFlow=-1),this._selPoint=-1,this._emit({...this._config,flows:e}),this._showUndoToast("Flow removed")}_duplicateFlow(t){if(!this._config)return;const e=this._flows()[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("flow"),i.name&&(i.name+=" copy");const o=[...this._flows()];o.splice(t+1,0,i),this._selFlow=t+1,this._selPoint=-1,this._emit({...this._config,flows:o})}_updateFlowPoint(t,e,i){if(!this._config)return;const o=this._flows().map((s,a)=>{if(a!==t)return s;const r=s.points.map((l,c)=>c===e?H(l,i):l);return{...s,points:r}});this._emit({...this._config,flows:o})}_setPointKind(t,e,i){if(!this._config)return;const o=this._flows(),s=o[t];if(!s)return;const a=s.points[e];if(!a)return;const{dx:r,dy:l}=a;let c;if(i==="card")c={card:this._config.cards[0]?.id??"",side:"center",...r!=null?{dx:r}:{},...l!=null?{dy:l}:{}};else{const p=dt({...a,dx:void 0,dy:void 0},this._config.cards,this._previewBoxes);c={x:E(p.x),y:E(p.y),...r!=null?{dx:r}:{},...l!=null?{dy:l}:{}}}const d=o.map((p,u)=>{if(u!==t)return p;const g=p.points.map((m,f)=>f===e?c:m);return{...p,points:g}});this._emit({...this._config,flows:d})}_addFlowPoint(t){if(!this._config)return;const e=this._flows().map((i,o)=>o!==t?i:{...i,points:[...i.points,{x:0,y:0}]});this._emit({...this._config,flows:e})}_onFlowLayerClick(t){if(t.target!==t.currentTarget||!this._config)return;const e=this._flows(),i=e[this._selFlow];if(!i)return;const o=t.currentTarget,s=E(t.offsetX/o.clientWidth),a=E(t.offsetY/o.clientHeight),r=[...i.points],l=this._selPoint>=0?this._selPoint:r.length-1;r.splice(l+1,0,{x:s,y:a});const c=e.map((d,p)=>p===this._selFlow?{...d,points:r}:d);this._selPoint=l+1,this._emit({...this._config,flows:c})}_removeFlowPoint(t,e){if(!this._config)return;const i=this._flows().map((o,s)=>{if(s!==t)return o;const a=o.points.filter((r,l)=>l!==e);return{...o,points:a}});if(t===this._selFlow&&this._selPoint>=0){const o=i[t]?.points.length??0;this._selPoint=Math.min(this._selPoint>e?this._selPoint-1:this._selPoint,o-1)}this._emit({...this._config,flows:i}),this._showUndoToast("Point removed")}_duplicateFlowPoint(t,e){if(!this._config)return;const i=this._flows()[t],o=i?.points[e];if(!i||!o)return;const s=[...i.points];s.splice(e+1,0,h._deepClone(o)),t===this._selFlow&&(this._selPoint=e+1);const a=this._flows().map((r,l)=>l===t?{...r,points:s}:r);this._emit({...this._config,flows:a})}_virtuals(){return this._config?.virtuals??[]}_addVirtual(){if(!this._config)return;const e={id:`v${Date.now()}`,name:"New virtual",op:"add",inputs:[]},i=[...this._virtuals(),e];this._selVirtual=i.length-1,this._emit({...this._config,virtuals:i})}_updateVirtual(t,e){if(!this._config)return;const i=this._virtuals().map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,virtuals:i})}_removeVirtual(t){if(!this._config)return;const e=this._virtuals().filter((i,o)=>o!==t);this._selVirtual=Math.min(this._selVirtual,e.length-1),this._emit({...this._config,virtuals:e}),this._showUndoToast("Virtual entity removed")}_duplicateVirtual(t){if(!this._config)return;const e=this._virtuals()[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("v"),i.name&&(i.name+=" copy");const o=[...this._virtuals()];o.splice(t+1,0,i),this._selVirtual=t+1,this._emit({...this._config,virtuals:o})}_addVirtualInput(t){if(!this._config)return;const e=[...this._virtuals()[t]?.inputs??[],""];this._updateVirtual(t,{inputs:e})}_updateVirtualInput(t,e,i){const o=[...this._virtuals()[t]?.inputs??[]];o[e]=i,this._updateVirtual(t,{inputs:o})}_removeVirtualInput(t,e){const i=(this._virtuals()[t]?.inputs??[]).filter((o,s)=>s!==e);this._selVirtualInput>=0&&(this._selVirtualInput=Math.min(this._selVirtualInput>e?this._selVirtualInput-1:this._selVirtualInput,i.length-1)),this._updateVirtual(t,{inputs:i}),this._showUndoToast("Input removed")}_duplicateVirtualInput(t,e){const i=this._virtuals()[t];if(!i||i.inputs[e]===void 0)return;const o=[...i.inputs];o.splice(e+1,0,i.inputs[e]),this._selVirtualInput=e+1,this._updateVirtual(t,{inputs:o})}_duplicateTrigger(t,e){const i=this._virtuals()[t],o=i?.triggers?.[e];if(!i||!o)return;const s=h._deepClone(o);s.label&&(s.label+=" copy");const a=[...i.triggers??[]];a.splice(e+1,0,s),this._selTrigger=e+1,this._updateVirtual(t,{triggers:a})}_copyVirtual(t){const e=this._virtuals()[t];e&&(this._virtualClipboard={...e})}_pasteVirtual(){if(!this._config||!this._virtualClipboard)return;const t={...this._virtualClipboard,id:`v${Date.now()}`},e=[...this._virtuals(),t];this._selVirtual=e.length-1,this._emit({...this._config,virtuals:e})}_zones(){return this._config?.zones??[]}_addZone(){if(!this._config)return;const t={id:"zone-"+Date.now().toString(36),name:"Zone",position:{x:.5,y:.5},anchor:"center",width:120,height:70},e=[...this._zones(),t];this._selZone=e.length-1,this._emit({...this._config,zones:e})}_updateZone(t,e){if(!this._config)return;const i=this._zones().map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,zones:i})}_removeZone(t){if(!this._config)return;const e=this._zones().filter((i,o)=>o!==t);this._selZone=Math.min(this._selZone,e.length-1),e.length===0&&(this._selZone=-1),this._emit({...this._config,zones:e}),this._showUndoToast("Zone removed")}_duplicateZone(t){if(!this._config)return;const e=this._zones()[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("zone"),i.name&&(i.name+=" copy");const o=[...this._zones()];o.splice(t+1,0,i),this._selZone=t+1,this._emit({...this._config,zones:o})}_onZoneDown(t,e){t.preventDefault(),t.stopPropagation(),this._bgSelected=!1,this._selZone=e,this._syncNavTo("elements","zones",[{key:`zone:${this._zones()[e]?.id??e}`,label:this._zones()[e]?.name??this._zones()[e]?.id??`Zone ${e+1}`}]),this._dragZone=e,t.target.setPointerCapture(t.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=t.clientX,this._zStartY=t.clientY,this._zStartPos={...this._zones()[e]?.position??{x:0,y:0}}}_onZoneMove(t){if(this._dragZone<0||!this._zRect||!this._config)return;const e=E(this._zStartPos.x+(t.clientX-this._zStartX)/this._zRect.width),i=E(this._zStartPos.y+(t.clientY-this._zStartY)/this._zRect.height);this._updateZone(this._dragZone,{position:{x:e,y:i}})}_onZoneUp(t){this._dragZone>=0&&t.target.releasePointerCapture(t.pointerId),this._dragZone=-1}_zoneBox(t){const[e,i]=wt[t.anchor??v("anchor")??"top-left"],{totalW:o,totalH:s}=Y(this._config);return{x:t.position.x*o-e*t.width,y:t.position.y*s-i*t.height,w:t.width,h:t.height}}_onZoneResizeDown(t,e,i){t.preventDefault(),t.stopPropagation();const o=this._zones()[e];o&&(this._selZone=e,this._resizeZone=e,this._resizeCorner=i,t.target.setPointerCapture(t.pointerId),this._zRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._zStartX=t.clientX,this._zStartY=t.clientY,this._zResizeStartBox=this._zoneBox(o))}_onZoneResizeMove(t){if(this._resizeZone<0||!this._zRect||!this._config)return;const e=this._zones()[this._resizeZone];if(!e)return;const{totalW:i,totalH:o}=Y(this._config),s=(t.clientX-this._zStartX)/this._zRect.width*i,a=(t.clientY-this._zStartY)/this._zRect.height*o,r=this._zResizeStartBox,l=10,c=this._resizeCorner.includes("l")?r.x+r.w:r.x,d=this._resizeCorner.includes("t")?r.y+r.h:r.y,p=this._resizeCorner.includes("l")?r.x:r.x+r.w,u=this._resizeCorner.includes("t")?r.y:r.y+r.h;let g=p+s-c,m=u+a-d;const f=g>=0?1:-1,S=m>=0?1:-1;g=Math.max(l,Math.abs(g))*f,m=Math.max(l,Math.abs(m))*S;const F=f>=0?c:c+g,$=S>=0?d:d+m,k=Math.abs(g),y=Math.abs(m),[D,T]=wt[e.anchor??v("anchor")??"top-left"],I={x:E((F+D*k)/i),y:E(($+T*y)/o)};this._updateZone(this._resizeZone,{width:it(k),height:it(y),position:I})}_onZoneResizeUp(t){this._resizeZone>=0&&t.target.releasePointerCapture(t.pointerId),this._resizeZone=-1}_onBgDown(t,e){t.preventDefault(),t.stopPropagation(),this._bgSelected=!0,this._bgMode=e,t.target.setPointerCapture(t.pointerId),this._bgRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._bgStartX=t.clientX,this._bgStartY=t.clientY;const i=Y(this._config);this._bgStart={L:i.L,T:i.T,baseW:i.baseW,baseH:i.baseH,totalW:i.totalW,totalH:i.totalH}}_onBgMove(t){if(!this._bgMode||!this._bgRect||!this._config)return;const e=this._bgStart,i=(t.clientX-this._bgStartX)/this._bgRect.width*e.totalW,o=(t.clientY-this._bgStartY)/this._bgRect.height*e.totalH,s=this._gridGeom(),a=(m,f)=>Math.round(m/f)*f,r=20;let l,c,d,p;if(this._bgMode==="move")d=e.baseW,p=e.baseH,l=Math.min(Math.max(0,e.L+i),e.totalW-d),c=Math.min(Math.max(0,e.T+o),e.totalH-p),s&&(l=Math.min(Math.max(0,a(l,s.cellW)),e.totalW-d),c=Math.min(Math.max(0,a(c,s.cellH)),e.totalH-p));else{const m=this._bgMode.includes("l"),f=this._bgMode.includes("t"),S=m?-i:i,F=f?-o:o;let $=Math.abs(S)/e.baseW>=Math.abs(F)/e.baseH?(e.baseW+S)/e.baseW:(e.baseH+F)/e.baseH;const k=m?e.L+e.baseW:e.totalW-e.L,y=f?e.T+e.baseH:e.totalH-e.T,D=Math.min(k/e.baseW,y/e.baseH),T=Math.max(r/e.baseW,r/e.baseH);$=Math.min(Math.max($,T),D),d=e.baseW*$,p=e.baseH*$,l=m?e.L+e.baseW-d:e.L,c=f?e.T+e.baseH-p:e.T,s&&(d=Math.min(e.totalW,Math.max(s.cellW,a(d,s.cellW))),p=Math.min(e.totalH,d*(e.baseH/e.baseW)),l=m?e.L+e.baseW-d:e.L,c=f?e.T+e.baseH-p:e.T,l=Math.min(Math.max(0,a(l,s.cellW)),e.totalW-d),c=Math.min(Math.max(0,a(c,s.cellH)),e.totalH-p))}const u=e.totalW-d-l,g=e.totalH-p-c;this._updateCanvas({width:it(d),height:it(p),extend:{left:l>.5?it(l):void 0,top:c>.5?it(c):void 0,right:u>.5?it(u):void 0,bottom:g>.5?it(g):void 0}})}_onBgUp(t){this._bgMode&&t.target.releasePointerCapture(t.pointerId),this._bgMode=null}_embCards(){return this._config?.embedded_cards??[]}_addEmbCard(){if(!this._config)return;const t={id:"emb-"+Date.now().toString(36),name:"Embedded Card",position:{x:.5,y:.5},anchor:"center",width:200,card_config:{}},e=this._gridGeom();if(e){const{cols:o,rows:s,cellW:a,padding:r}=e,l=Math.round(o/2),c=Math.round(s/2),d=Math.max(1,Math.min(o,2));t.grid_span=d,t.width=Math.max(8,d*a-r),t.position={x:E(l/o),y:E(c/s)}}const i=[...this._embCards(),t];this._selEmbCard=i.length-1,this._emit({...this._config,embedded_cards:i})}_updateEmbCard(t,e){if(!this._config)return;const i=this._embCards().map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,embedded_cards:i})}_removeEmbCard(t){if(!this._config)return;const e=this._embCards().filter((i,o)=>o!==t);this._selEmbCard=Math.min(this._selEmbCard,e.length-1),e.length===0&&(this._selEmbCard=-1),this._selEmbCards=new Set([...this._selEmbCards].filter(i=>i!==t).map(i=>i>t?i-1:i)),this._emit({...this._config,embedded_cards:e}),this._showUndoToast("Embedded card removed")}_duplicateEmbCard(t){if(!this._config)return;const e=this._embCards()[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("emb"),i.name&&(i.name+=" copy");const o=[...this._embCards()];o.splice(t+1,0,i),this._selEmbCard=t+1,this._selEmbCards=new Set([t+1]),this._emit({...this._config,embedded_cards:o})}_onEmbCardDown(t,e){if(t.preventDefault(),t.stopPropagation(),this._bgSelected=!1,this._selEmbCard=e,this._syncNavTo("cards","embedded",[{key:`emb:${this._embCards()[e]?.id??e}`,label:this._embCards()[e]?.name??this._embCards()[e]?.id??`Embedded ${e+1}`}]),t.shiftKey||t.ctrlKey||t.metaKey){const a=new Set(this._selEmbCards);a.has(e)?a.delete(e):a.add(e),this._selEmbCards=a;return}const i=this._embCards(),o=i[e]?.group,s=o?i.map((a,r)=>({ec:a,i:r})).filter(({ec:a})=>a.group===o).map(({i:a})=>a):[e];if(this._selEmbCards=new Set(s),this._dragEmbCard=e,t.target.setPointerCapture(t.pointerId),this._ecRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._ecStartX=t.clientX,this._ecStartY=t.clientY,this._embDragMembers=s.map(a=>({idx:a,start:{...i[a]?.position??{x:0,y:0}}})),o){const a=this._config?.cards??[],r=a.map((l,c)=>({c:l,i:c})).filter(({c:l})=>l.group===o).map(({i:l})=>l);this._selCards=new Set(r),this._dragCard=r[0]??-1,this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=t.clientX,this._startY=t.clientY,this._dragMembers=r.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selCards=new Set,this._dragCard=-1,this._dragMembers=[]}_onEmbCardMove(t){if(this._dragEmbCard<0||!this._ecRect||!this._config)return;const e=(t.clientX-this._ecStartX)/this._ecRect.width,i=(t.clientY-this._ecStartY)/this._ecRect.height,o=this._embCards().map((a,r)=>{const l=this._embDragMembers.find(c=>c.idx===r);return l?{...a,position:{x:E(l.start.x+e),y:E(l.start.y+i)}}:a}),s=this._dragMembers.length>0?this._config.cards.map((a,r)=>{const l=this._dragMembers.find(c=>c.idx===r);return l?{...a,position:{x:E(l.start.x+e),y:E(l.start.y+i)}}:a}):this._config.cards;this._emit({...this._config,cards:s,embedded_cards:o})}_onEmbCardUp(t){this._dragEmbCard>=0&&t.target.releasePointerCapture(t.pointerId),this._dragEmbCard=-1}_embConfig(t){return t.kind==="std"?this._embCards()[t.idx]?.card_config:t.kind==="field"?this._config?.cards[t.ci]?.fields[t.fi]?.embed_card_config:this._extCards()[t.ci]?.fields[t.fi]?.embed_card_config}_embSetConfig(t,e){if(t.kind==="std"){this._updateEmbCard(t.idx,{card_config:e});return}if(t.kind==="field"){this._updateField(t.ci,t.fi,{embed_card_config:e});return}this._updateExtField(t.ci,t.fi,{embed_card_config:e})}async _openEmbEditor(t){this._embEditorTarget=t;const e=this._embConfig(t)??{};this._embEditorYaml=JSON.stringify(e,null,2),this._embNativeEditor=null;const i=String(e?.type??"");if(i)try{const o=await window.loadCardHelpers?.();if(o?.createCardElement)try{o.createCardElement(e)}catch{}const s=i.startsWith("custom:")?i.slice(7):`hui-${i}-card`;await Promise.race([customElements.whenDefined(s),new Promise(c=>setTimeout(c,5e3))]);const a=customElements.get(s);let r={...e};if(a?.getStubConfig)try{const c=Object.keys(this.hass?.states??{}),d=await a.getStubConfig(this.hass,c,c);d&&typeof d=="object"&&(r={...d,...r})}catch{}if(this._embEditorConfig=r,await Promise.race([customElements.whenDefined("hui-card-element-editor"),new Promise(c=>setTimeout(c,3e3))]),customElements.get("hui-card-element-editor")){const c=document.createElement("hui-card-element-editor");c.hass=this.hass,c.value=r,c.addEventListener("config-changed",d=>{d.stopPropagation();const p=d.detail;p?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,p.config)}),this._embNativeEditor=c}else{const c=a?.getConfigElement;if(c){const d=await c.call(a);if(d){try{d.setConfig?.(r)}catch{}d.hass=this.hass,d.addEventListener("config-changed",p=>{p.stopPropagation();const u=p.detail;u?.config&&this._embEditorTarget&&this._embSetConfig(this._embEditorTarget,u.config)}),this._embNativeEditor=d}}}}catch(o){console.warn("[mc-editor] native editor unavailable:",o)}this._embEditorOpen=!0}_closeEmbEditor(){this._embEditorOpen=!1,this._embEditorTarget=null,this._embNativeEditor=null,this._embEditorConfig=null,this._embEditorYamlError=""}_saveEmbEditorYaml(){if(this._embEditorTarget)try{const t=JSON.parse(this._embEditorYaml);this._embSetConfig(this._embEditorTarget,t),this._closeEmbEditor()}catch(t){this._embEditorYamlError="Invalid JSON: "+t.message}}async _openEmbPicker(t){this._embPickerTarget=t,this._embPickerSearch="",this._embPickerOpen=!0}async _pickEmbCardType(t){this._embPickerOpen=!1,this._embPickerSearch="";const e=this._embPickerTarget;if(!e)return;const i={...this._embConfig(e)??{},type:t};this._embSetConfig(e,i),await this._openEmbEditor(e)}_setBgImage(t,e,i){if(!this._config)return;const o=this._config.background??{},s={...o.images?.[t]??{}};i===""?delete s[e]:s[e]=i,this._updateBackground({images:{...o.images,[t]:s}})}_addCard(){if(!this._config)return;const t={id:"card-"+Date.now().toString(36),name:"Card",position:{x:.5,y:.5},anchor:"center",align:"center",fields:[]},e=this._gridGeom();if(e){const{cols:o,rows:s,cellW:a,padding:r}=e,l=Math.round(o/2),c=Math.round(s/2),d=Math.max(1,Math.min(o,2));t.grid_span=d,t.width=Math.max(8,d*a-r),t.position={x:E(l/o),y:E(c/s)}}const i=[...this._config.cards,t];this._selCard=i.length-1,this._selField=-1,this._emit({...this._config,cards:i})}_removeCard(t){if(!this._config)return;const e=this._config.cards.filter((i,o)=>o!==t);this._selCard=Math.min(this._selCard,Math.max(0,e.length-1)),this._selField=-1,this._selCards=new Set(Array.from(this._selCards).filter(i=>i!==t).map(i=>i>t?i-1:i)),this._emit({...this._config,cards:e}),this._showUndoToast("Card removed")}static _newId(t){return t+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,6)}static _deepClone(t){return JSON.parse(JSON.stringify(t))}_duplicateCard(t){if(!this._config)return;const e=this._config.cards[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("card"),i.fields=i.fields.map(s=>({...s,id:h._newId("f")})),i.name&&(i.name+=" copy");const o=[...this._config.cards];o.splice(t+1,0,i),this._selCard=t+1,this._selField=-1,this._selCards=new Set([t+1]),this._emit({...this._config,cards:o})}_copyFields(t){const e=this._config?.cards[t];e&&(this._copiedFields=e.fields.map(i=>({...i})),this._copySourceId=e.id)}_pasteFields(t){if(!this._copiedFields||!this._config)return;const e=this._copiedFields.map(o=>({...o,id:h._newId("f")})),i=this._config.cards.map((o,s)=>s===t?{...o,fields:[...o.fields,...e]}:o);this._emit({...this._config,cards:i})}_copyField(t,e,i=!1){const s=(i?this._extCards():this._config?.cards??[])[t],a=s?.fields[e];!s||!a||(this._copiedField={...a},this._copiedFieldSrc={isExt:i,cardId:s.id,fieldId:a.id})}_pasteField(t,e=!1){if(!this._copiedField||!this._config)return;const i={...this._copiedField,id:h._newId("f")};if(e){const o=this._extCards()[t];if(!o)return;this._selExtField=o.fields.length,this._updateExtCard(t,{fields:[...o.fields,i]})}else{const o=this._config.cards[t];if(!o)return;const s=[...o.fields,i],a=this._config.cards.map((r,l)=>l===t?{...r,fields:s}:r);this._selField=s.length-1,this._emit({...this._config,cards:a})}}_duplicateField(t,e,i=!1){if(!this._config)return;const o=i?this._extCards()[t]:this._config.cards[t],s=o?.fields[e];if(!o||!s)return;const a=h._deepClone(s);a.id=h._newId("f"),a.display_name&&(a.display_name+=" copy");const r=[...o.fields];r.splice(e+1,0,a),i?(this._selExtField=e+1,this._updateExtCard(t,{fields:r})):(this._selField=e+1,this._updateCard(t,{fields:r}))}_duplicateGraphSeries(t,e,i,o){const a=(o?this._extCards()[t]:this._config?.cards[t])?.fields[e],r=a?.graph_series?.[i];if(!a||!r)return;const l=h._deepClone(r);l.label&&(l.label+=" copy");const c=[...a.graph_series??[]];c.splice(i+1,0,l),o?this._selExtSeries=i+1:this._selSeries=i+1,this._updFor(t,e,o)({graph_series:c})}_addField(t){if(!this._config)return;const e=this._config.cards[t];if(!e)return;const i={id:"f-"+Date.now().toString(36),type:"value",column:1},o=[...e.fields,i];this._selField=o.length-1,this._updateCard(t,{fields:o})}_removeField(t,e){if(!this._config)return;const i=this._config.cards[t];if(!i)return;const o=i.fields.filter((s,a)=>a!==e);this._selField>=o.length&&(this._selField=o.length-1),this._updateCard(t,{fields:o}),this._showUndoToast("Field removed")}_extCards(){return this._config?.extended_cards??[]}_updateExtDefaults(t){this._config&&this._emit({...this._config,extended_card_defaults:H(this._config.extended_card_defaults??{},t)})}_addExtCard(){if(!this._config)return;const t={id:"ext-"+Date.now().toString(36),name:"Popover Card",columns:2,fields:[]},e=[...this._extCards(),t];this._selExtCard=e.length-1,this._selExtField=-1,this._emit({...this._config,extended_cards:e})}_removeExtCard(t){if(!this._config)return;const e=this._extCards().filter((i,o)=>o!==t);this._selExtCard=Math.min(this._selExtCard,Math.max(0,e.length-1)),this._selExtField=-1,this._emit({...this._config,extended_cards:e}),this._showUndoToast("Popover card removed")}_duplicateExtCard(t){if(!this._config)return;const e=this._extCards()[t];if(!e)return;const i=h._deepClone(e);i.id=h._newId("ext"),i.fields=i.fields.map(s=>({...s,id:h._newId("f")})),i.name&&(i.name+=" copy");const o=[...this._extCards()];o.splice(t+1,0,i),this._selExtCard=t+1,this._selExtField=-1,this._emit({...this._config,extended_cards:o})}_updateExtCard(t,e){if(!this._config)return;const i=this._extCards().map((o,s)=>s===t?H(o,e):o);this._emit({...this._config,extended_cards:i})}_updateExtCardBox(t,e){const i=this._extCards()[t];i&&this._updateExtCard(t,{box:H(i.box??{},e)})}_addExtField(t){if(!this._config)return;const e=this._extCards()[t];if(!e)return;const i={id:"f-"+Date.now().toString(36),type:"value",column:1},o=[...e.fields,i];this._selExtField=o.length-1,this._updateExtCard(t,{fields:o})}_removeExtField(t,e){const i=this._extCards()[t];if(!i)return;const o=i.fields.filter((s,a)=>a!==e);this._selExtField>=o.length&&(this._selExtField=o.length-1),this._updateExtCard(t,{fields:o}),this._showUndoToast("Field removed")}_stepNumInput(t,e){t.preventDefault();const o=t.currentTarget.closest(".ec-num-wrap")?.querySelector("input");if(o){try{e>0?o.stepUp():o.stepDown()}catch{const s=Number(o.step)||1,a=Number(o.value)||0;o.value=String(a+e*s)}o.dispatchEvent(new Event("change",{bubbles:!0}))}}_numWrap(t){return n`<span class="ec-num-wrap">${t}<span class="ec-num-steppers"><button type="button" class="ec-num-step" tabindex="-1" title="Decrease" @click=${e=>this._stepNumInput(e,-1)}>−</button><button type="button" class="ec-num-step" tabindex="-1" title="Increase" @click=${e=>this._stepNumInput(e,1)}>+</button></span></span>`}_numInput(t){return this._numWrap(n`<input class="ec-input ec-input-num" type="number"
      min=${t.min??_} max=${t.max??_} step=${t.step??_}
      placeholder=${t.placeholder??_} title=${t.title??_}
      .value=${t.value!=null?String(t.value):""}
      @change=${e=>{const i=e.target.value;t.onChange(i===""?void 0:Number(i))}}
    />`)}_numRow(t,e){return this._row(t,this._numInput(e))}_reorderArray(t,e,i,o){const s=[...t],[a]=s.splice(e,1),r=e<i?o?i-1:i:o?i:i+1;return s.splice(r,0,a),{arr:s,target:r}}_remapSelectionAfterMove(t,e,i){if(e===i||t.size===0)return t;const o=new Set;for(const s of t)s===e?o.add(i):e<i&&s>e&&s<=i?o.add(s-1):e>i&&s>=i&&s<e?o.add(s+1):o.add(s);return o}_moveCard(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._config.cards,t,e,i);this._selCard=s,this._selCards=this._remapSelectionAfterMove(this._selCards,t,s),this._emit({...this._config,cards:o})}_moveExtCard(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._extCards(),t,e,i);this._selExtCard=s,this._emit({...this._config,extended_cards:o})}_moveVirtual(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._virtuals(),t,e,i);this._selVirtual=s,this._emit({...this._config,virtuals:o})}_moveZone(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._zones(),t,e,i);this._selZone=s,this._emit({...this._config,zones:o})}_moveFlow(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._flows(),t,e,i);this._selFlow=s,this._emit({...this._config,flows:o})}_moveEmbCard(t,e,i){if(!this._config)return;const{arr:o,target:s}=this._reorderArray(this._embCards(),t,e,i);this._selEmbCard=s,this._selEmbCards=this._remapSelectionAfterMove(this._selEmbCards,t,s),this._emit({...this._config,embedded_cards:o})}_movePoint(t,e,i,o){if(!this._config)return;const s=this._flows()[t];if(!s)return;const{arr:a,target:r}=this._reorderArray(s.points,e,i,o);this._selPoint=r,this._updateFlow(t,{points:a})}_moveVirtualInput(t,e,i,o){if(!this._config)return;const s=this._virtuals()[t];if(!s)return;const{arr:a,target:r}=this._reorderArray(s.inputs,e,i,o);this._selVirtualInput=r,this._updateVirtual(t,{inputs:a})}_moveTrigger(t,e,i,o){if(!this._config)return;const s=this._virtuals()[t];if(!s)return;const{arr:a,target:r}=this._reorderArray(s.triggers??[],e,i,o);this._selTrigger=r,this._updateVirtual(t,{triggers:a})}_moveOption(t,e,i,o,s,a){const r=a?this._extCards()[t]?.fields[e]:this._config?.cards[t]?.fields[e];if(!r)return;const{arr:l,target:c}=this._reorderArray(r.options??[],i,o,s);a?this._selExtOption=c:this._selOption=c,this._updFor(t,e,a)({options:l})}_moveGraphSeries(t,e,i,o,s){const a=this._config?.cards[t]?.fields[e];if(!a)return;const{arr:r,target:l}=this._reorderArray(a.graph_series??[],i,o,s);this._selSeries=l,this._updateField(t,e,{graph_series:r})}_moveExtGraphSeries(t,e,i,o,s){const a=this._extCards()[t]?.fields[e];if(!a)return;const{arr:r,target:l}=this._reorderArray(a.graph_series??[],i,o,s);this._selExtSeries=l,this._updateExtField(t,e,{graph_series:r})}_moveField(t,e,i,o){if(!this._config)return;const s=this._config.cards[t];if(!s)return;const{arr:a,target:r}=this._reorderArray(s.fields,e,i,o);this._selField=r,this._updateCard(t,{fields:a})}_moveExtField(t,e,i,o){const s=this._extCards()[t];if(!s)return;const{arr:a,target:r}=this._reorderArray(s.fields,e,i,o);this._selExtField=r,this._updateExtCard(t,{fields:a})}_onItemPointerDown(t,e){if(this._suppressClick=!1,t.button!==0)return;const i=t.target;if(i.closest(".ec-item-card-actions"))return;const o=!!i.closest(".ec-drag-handle");if(t.pointerType!=="mouse"&&!o)return;const s=t.currentTarget,r=[...e.split(":").slice(0,-1),""].join(":"),l=[...this.renderRoot.querySelectorAll(`.ec-item-card[data-drag-key^="${r}"]`)];if(!(l.length<2)){try{s.setPointerCapture(t.pointerId)}catch{}this._ptrDrag={key:e,pointerId:t.pointerId,row:s,siblings:l,scroller:s.closest(".ec-panel-body"),startY:t.clientY,lastY:t.clientY,active:!1,raf:0},o&&(this._suppressClick=!0,t.preventDefault())}}_onItemPointerMove(t){const e=this._ptrDrag;if(!(!e||t.pointerId!==e.pointerId)){if(e.lastY=t.clientY,!e.active){if(Math.abs(t.clientY-e.startY)<h._PTR_DRAG_SLOP)return;e.active=!0,this._dragSrc=e.key,this._suppressClick=!0}t.preventDefault(),this._ptrTrack(),this._ptrTickScroll()}}_ptrTrack(){const t=this._ptrDrag;if(!t?.active)return;let e=null,i=!1;for(const o of t.siblings){const s=o.getBoundingClientRect();if(t.lastY>=s.top&&t.lastY<=s.bottom){e=o.dataset.dragKey??null,i=t.lastY<s.top+s.height/2;break}}if(!e&&t.siblings.length){const o=t.siblings[0].getBoundingClientRect(),s=t.siblings[t.siblings.length-1].getBoundingClientRect();t.lastY<o.top?(e=t.siblings[0].dataset.dragKey??null,i=!0):t.lastY>s.bottom&&(e=t.siblings[t.siblings.length-1].dataset.dragKey??null,i=!1)}e===t.key&&(e=null),(this._dropKey!==e||this._dropBefore!==i)&&(this._dropKey=e,this._dropBefore=i)}_ptrTickScroll(){const t=this._ptrDrag;if(!t?.active||!t.scroller)return;const e=h,i=t.scroller.getBoundingClientRect(),o=i.top+e._PTR_EDGE-t.lastY,s=t.lastY-(i.bottom-e._PTR_EDGE);if((o>0?-o:s>0?s:0)===0){t.raf&&(cancelAnimationFrame(t.raf),t.raf=0);return}if(t.raf)return;const r=()=>{const l=this._ptrDrag;if(!l?.active||!l.scroller)return;const c=l.scroller.getBoundingClientRect(),d=c.top+e._PTR_EDGE-l.lastY,p=l.lastY-(c.bottom-e._PTR_EDGE),u=d>0?-Math.min(d,e._PTR_EDGE):p>0?Math.min(p,e._PTR_EDGE):0;if(u===0){l.raf=0;return}l.scroller.scrollTop+=u/e._PTR_EDGE*e._PTR_SCROLL_MAX,this._ptrTrack(),l.raf=requestAnimationFrame(r)};t.raf=requestAnimationFrame(r)}_onItemPointerUp(t){const e=this._ptrDrag;if(!e||t.pointerId!==e.pointerId)return;const i=this._dropKey,o=this._dropBefore,s=e.active,a=e.key;this._ptrEndDrag(),s&&i&&i!==a&&this._moveByKeys(a,i,o)}_onItemPointerCancel(t){this._ptrDrag&&t.pointerId!==this._ptrDrag.pointerId||this._ptrEndDrag()}_ptrEndDrag(){const t=this._ptrDrag;if(t){t.raf&&cancelAnimationFrame(t.raf);try{t.row.releasePointerCapture(t.pointerId)}catch{}}this._ptrDrag=null,this._dragSrc=null,this._dropKey=null}_onItemCardKeydown(t,e,i){if(t.key==="Enter"||t.key===" "){if(t.target!==t.currentTarget)return;t.preventDefault(),i(t);return}if(t.altKey&&(t.key==="ArrowUp"||t.key==="ArrowDown")){t.preventDefault();const o=t.key==="ArrowUp",s=e.split(":"),a=Number(s[s.length-1])+(o?-1:1);if(a<0)return;const r=[...s.slice(0,-1),""].join(":"),l=this.renderRoot?.querySelectorAll(`.ec-item-card[data-drag-key^="${r}"]`);if(!l||a>=l.length)return;const c=[...s.slice(0,-1),String(a)].join(":");this._moveByKeys(e,c,o),this.updateComplete.then(()=>{this.renderRoot?.querySelector(`.ec-item-card[data-drag-key="${c}"]`)?.focus()})}}_moveByKeys(t,e,i){const[o,...s]=t.split(":"),[a,...r]=e.split(":");if(o!==a)return;const l=c=>c.every(d=>Number.isInteger(Number(d))&&Number(d)>=0);if(!(s.length===0||s.length!==r.length||!l(s)||!l(r))){if(o==="card")this._moveCard(Number(s[0]),Number(r[0]),i);else if(o==="field"){const[c,d]=s.map(Number),[p,u]=r.map(Number);if(c!==p)return;this._moveField(c,d,u,i)}else if(o==="extfield"){const[c,d]=s.map(Number),[p,u]=r.map(Number);if(c!==p)return;this._moveExtField(c,d,u,i)}else if(o==="extcard")this._moveExtCard(Number(s[0]),Number(r[0]),i);else if(o==="virt")this._moveVirtual(Number(s[0]),Number(r[0]),i);else if(o==="zone")this._moveZone(Number(s[0]),Number(r[0]),i);else if(o==="flow")this._moveFlow(Number(s[0]),Number(r[0]),i);else if(o==="emb")this._moveEmbCard(Number(s[0]),Number(r[0]),i);else if(o==="opt"||o==="eopt"){const[c,d,p]=s.map(Number),[u,g,m]=r.map(Number);if(c!==u||d!==g)return;this._moveOption(c,d,p,m,i,o==="eopt")}else if(o==="pt"){const[c,d]=s.map(Number),[p,u]=r.map(Number);if(c!==p)return;this._movePoint(c,d,u,i)}else if(o==="vin"){const[c,d]=s.map(Number),[p,u]=r.map(Number);if(c!==p)return;this._moveVirtualInput(c,d,u,i)}else if(o==="trig"){const[c,d]=s.map(Number),[p,u]=r.map(Number);if(c!==p)return;this._moveTrigger(c,d,u,i)}else if(o==="gs"){const[c,d,p]=s.map(Number),[u,g,m]=r.map(Number);if(c!==u||d!==g)return;this._moveGraphSeries(c,d,p,m,i)}else if(o==="egs"){const[c,d,p]=s.map(Number),[u,g,m]=r.map(Number);if(c!==u||d!==g)return;this._moveExtGraphSeries(c,d,p,m,i)}}}_updateExtField(t,e,i){const o=this._extCards()[t];if(!o)return;const s=o.fields.map((a,r)=>r===e?H(a,i):a);this._updateExtCard(t,{fields:s})}_alignCards(t){if(!this._config||this._selCards.size<2)return;const e=Array.from(this._selCards),i=this._config.cards,o=e.map(u=>({i:u,pos:{...i[u].position}})),s=o.map(u=>u.pos.x),a=o.map(u=>u.pos.y),r=Math.min(...s),l=Math.max(...s),c=Math.min(...a),d=Math.max(...a),p=i.map((u,g)=>{if(!this._selCards.has(g))return u;let{x:m,y:f}=u.position;return t==="left"&&(m=E(r)),t==="right"&&(m=E(l)),t==="centerH"&&(m=E((r+l)/2)),t==="top"&&(f=E(c)),t==="bottom"&&(f=E(d)),t==="middleV"&&(f=E((c+d)/2)),{...u,position:{x:m,y:f}}});this._emit({...this._config,cards:p})}_distribute(t){if(!this._config||this._selCards.size<2)return;const e=Array.from(this._selCards).sort((c,d)=>this._config.cards[c].position[t]-this._config.cards[d].position[t]),i=e.length,o=this._config.cards,s=o[e[0]].position[t],a=o[e[i-1]].position[t],r=i>1?(a-s)/(i-1):0,l=o.map((c,d)=>{const p=e.indexOf(d);if(p<0)return c;const u=E(s+r*p);return{...c,position:{...c.position,[t]:u}}});this._emit({...this._config,cards:l})}_distributeCanvas(t){if(!this._config||this._selCards.size<2)return;const e=Array.from(this._selCards).sort((a,r)=>this._config.cards[a].position[t]-this._config.cards[r].position[t]),i=e.length,s=this._config.cards.map((a,r)=>{const l=e.indexOf(r);if(l<0)return a;const c=E((l+1)/(i+1));return{...a,position:{...a.position,[t]:c}}});this._emit({...this._config,cards:s})}_alignGroupToCanvas(t){if(!this._config||this._selCards.size<1)return;const e=.5,i=Array.from(this._selCards),o=this._config.cards,s=i.map(c=>o[c].position[t]),a=(Math.min(...s)+Math.max(...s))/2,r=e-a,l=o.map((c,d)=>this._selCards.has(d)?{...c,position:{...c.position,[t]:E(c.position[t]+r)}}:c);this._emit({...this._config,cards:l})}_groupCards(){if(!this._config||this._selCards.size+this._selEmbCards.size<2)return;const t="g-"+Date.now().toString(36),e=this._config.cards.map((o,s)=>this._selCards.has(s)?{...o,group:t}:o),i=this._embCards().map((o,s)=>this._selEmbCards.has(s)?{...o,group:t}:o);this._emit({...this._config,cards:e,embedded_cards:i})}_ungroupCards(){if(!this._config)return;const t=this._config.cards.map((i,o)=>{if(!this._selCards.has(o))return i;const{group:s,...a}=i;return a}),e=this._embCards().map((i,o)=>{if(!this._selEmbCards.has(o))return i;const{group:s,...a}=i;return a});this._emit({...this._config,cards:t,embedded_cards:e})}_applyGroupGap(t,e){if(!this._config)return;const{totalW:i,totalH:o}=Y(this._config),s=t==="x"?i:o,a=t==="x"?o:i,r=this._config.cards,l=this._embCards(),c=[],d=(k,y,D)=>{const T=this._previewBoxes[D.id];if(!T)return;const I=D.anchor??v("anchor")??"top-left",U=(t==="x"?T.y:T.x)*a,lt=U+(t==="x"?T.h:T.w)*a;c.push({kind:k,idx:y,box:T,anchor:I,crossStart:U,crossEnd:lt})};for(const k of this._selCards){const y=r[k];y&&d("card",k,y)}for(const k of this._selEmbCards){const y=l[k];y&&d("emb",k,y)}if(c.length<2)return;const p=[...c].sort((k,y)=>k.crossStart-y.crossStart),u=[];let g=[],m=-1/0;for(const k of p)g.length===0||k.crossStart<m?(g.push(k),m=Math.max(m,k.crossEnd)):(u.push(g),g=[k],m=k.crossEnd);g.length>0&&u.push(g);const f=new Map,S=new Map;for(const k of u){if(k.length<2)continue;k.sort((T,I)=>t==="x"?T.box.x-I.box.x:T.box.y-I.box.y);const y=k[0];let D=(t==="x"?y.box.x:y.box.y)*s+(t==="x"?y.box.w:y.box.h)*s;for(let T=1;T<k.length;T++){const I=k[T],U=(t==="x"?I.box.w:I.box.h)*s,lt=D+e,[Ft,Dt]=wt[I.anchor],ht=E((lt+(t==="x"?Ft:Dt)*U)/s),ft=I.kind==="card"?r[I.idx]:l[I.idx],yt=t==="x"?{x:ht,y:ft.position.y}:{x:ft.position.x,y:ht};(I.kind==="card"?f:S).set(I.idx,yt),D=lt+U}}if(f.size===0&&S.size===0)return;const F=r.map((k,y)=>f.has(y)?{...k,position:f.get(y)}:k),$=l.map((k,y)=>S.has(y)?{...k,position:S.get(y)}:k);this._emit({...this._config,cards:F,embedded_cards:$})}_syncNavTo(t,e,i){this._navigateTo(t,e,i)}_onCardDown(t,e){if(t.preventDefault(),this._bgSelected=!1,t.altKey){const a=this._config?.cards??[],r=this._previewBoxes,l=this.renderRoot.querySelector(".ec-canvas-area");if(l&&Object.keys(r).length>0){const c=l.getBoundingClientRect(),d=(t.clientX-c.left)/c.width,p=(t.clientY-c.top)/c.height,u=a.map((g,m)=>({idx:m,box:r[g.id]})).filter(g=>!!g.box&&d>=g.box.x&&d<=g.box.x+g.box.w&&p>=g.box.y&&p<=g.box.y+g.box.h).map(g=>g.idx).sort((g,m)=>g-m);if(u.length>0){const g=u.indexOf(this._selCard),m=g>=0?u[(g+1)%u.length]:u[0];this._selCard=m,this._selField=-1,this._syncNavTo("cards","mosaic",[{key:`card:${a[m]?.id??m}`,label:a[m]?.name??`Card ${m+1}`}]);const f=a[m]?.group;this._selCards=new Set(f?a.map((S,F)=>({c:S,idx:F})).filter(({c:S})=>S.group===f).map(({idx:S})=>S):[m])}}return}if(this._selCard=e,this._selField=-1,this._syncNavTo("cards","mosaic",[{key:`card:${this._config?.cards[e]?.id??e}`,label:this._config?.cards[e]?.name??`Card ${e+1}`}]),t.shiftKey||t.ctrlKey||t.metaKey){const a=new Set(this._selCards);a.has(e)?a.delete(e):a.add(e),this._selCards=a;return}const i=this._config?.cards??[],o=i[e]?.group,s=o?i.map((a,r)=>({c:a,idx:r})).filter(({c:a})=>a.group===o).map(({idx:a})=>a):[e];if(this._selCards=new Set(s),this._dragCard=e,t.target.setPointerCapture(t.pointerId),this._hostRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._startX=t.clientX,this._startY=t.clientY,this._dragMembers=s.map(a=>({idx:a,start:{...i[a]?.position??{x:0,y:0}}})),o){const a=this._embCards(),r=a.map((l,c)=>({ec:l,idx:c})).filter(({ec:l})=>l.group===o).map(({idx:l})=>l);this._selEmbCards=new Set(r),this._embDragMembers=r.map(l=>({idx:l,start:{...a[l]?.position??{x:0,y:0}}}))}else this._selEmbCards=new Set,this._embDragMembers=[]}_onCardMove(t){if(this._dragCard<0||!this._hostRect||!this._config)return;const e=(t.clientX-this._startX)/this._hostRect.width,i=(t.clientY-this._startY)/this._hostRect.height,o=this._config.cards.map((a,r)=>{const l=this._dragMembers.find(c=>c.idx===r);return l?{...a,position:{x:E(l.start.x+e),y:E(l.start.y+i)}}:a}),s=this._embDragMembers.length>0?this._embCards().map((a,r)=>{const l=this._embDragMembers.find(c=>c.idx===r);return l?{...a,position:{x:E(l.start.x+e),y:E(l.start.y+i)}}:a}):this._embCards();this._emit({...this._config,cards:o,embedded_cards:s})}_onCardUp(t){const e=this._gridGeom();if(e&&this._config&&(this._dragMembers.length>0||this._embDragMembers.length>0)){const{cols:i,rows:o}=e,s=this._config.cards,a=this._embCards(),r=[];for(const l of this._dragMembers){const c=s[l.idx];c&&r.push({kind:"card",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}for(const l of this._embDragMembers){const c=a[l.idx];c&&r.push({kind:"emb",idx:l.idx,box:this._previewBoxes[c.id],pos:c.position})}if(r.length===1){const l=r[0],c=(l.kind==="card"?s[l.idx]?.anchor:a[l.idx]?.anchor)??v("anchor")??"top-left",[d,p]=wt[c],u=l.box?l.box.x+d*l.box.w:l.pos.x,g=l.box?l.box.y+p*l.box.h:l.pos.y,m=Math.min(i,Math.max(0,Math.round(u*i))),f=Math.min(o,Math.max(0,Math.round(g*o))),S={x:E(m/i),y:E(f/o)};if(l.kind==="card"){const F=s.map(($,k)=>k===l.idx?{...$,position:S}:$);this._emit({...this._config,cards:F})}else{const F=a.map(($,k)=>k===l.idx?{...$,position:S}:$);this._emit({...this._config,embedded_cards:F})}}else if(r.length>=2){let l=1/0,c=1/0,d=-1/0,p=-1/0;for(const $ of r)$.box?(l=Math.min(l,$.box.x),c=Math.min(c,$.box.y),d=Math.max(d,$.box.x+$.box.w),p=Math.max(p,$.box.y+$.box.h)):(l=Math.min(l,$.pos.x),c=Math.min(c,$.pos.y),d=Math.max(d,$.pos.x),p=Math.max(p,$.pos.y));const u={x:(l+d)/2,y:(c+p)/2},g=Math.min(i,Math.max(0,Math.round(u.x*i))),m=Math.min(o,Math.max(0,Math.round(u.y*o))),f={x:g/i-u.x,y:m/o-u.y},S=s.map(($,k)=>this._dragMembers.some(y=>y.idx===k)?{...$,position:{x:E($.position.x+f.x),y:E($.position.y+f.y)}}:$),F=a.map(($,k)=>this._embDragMembers.some(y=>y.idx===k)?{...$,position:{x:E($.position.x+f.x),y:E($.position.y+f.y)}}:$);this._emit({...this._config,cards:S,embedded_cards:F})}}t.target.releasePointerCapture(t.pointerId),this._dragCard=-1,this._dragMembers=[],this._embDragMembers=[]}_onPointDown(t,e){if(t.preventDefault(),t.stopPropagation(),this._selPoint=e,!this._config)return;const i=this._flows()[this._selFlow];if(!i)return;const o=i.points[e];if(o){if(t.shiftKey){this._removeFlowPoint(this._selFlow,e),this._selPoint=-1;return}this._syncNavTo("elements","flows",[{key:`flow:${i.id}`,label:i.name??i.id},{key:`pt:${e}`,label:`Point ${e+1}`}]),o.card==null&&(this._dragPoint=e,t.target.setPointerCapture(t.pointerId),this._pRect=this.renderRoot.querySelector(".ec-canvas-area").getBoundingClientRect(),this._pStartX=t.clientX,this._pStartY=t.clientY,this._pStartPos={x:o.x??0,y:o.y??0},this._snapAxis=null)}}_onPointMove(t){if(this._dragPoint<0||!this._pRect||!this._config)return;let e=E(this._pStartPos.x+(t.clientX-this._pStartX)/this._pRect.width),i=E(this._pStartPos.y+(t.clientY-this._pStartY)/this._pRect.height);const o=e,s=i;if(t.ctrlKey){const a=this._flows()[this._selFlow];if(a&&this._pRect){const r=this._config.cards,l=this._previewBoxes,c=this._dragPoint,d=c>0?a.points[c-1]:null,p=c<a.points.length-1?a.points[c+1]:null,u=d?dt(d,r,l):null,g=p?dt(p,r,l):null,m=this._pRect.width,f=this._pRect.height;if(u&&g){const S=Math.hypot((e-u.x)*m,(i-g.y)*f),F=Math.hypot((e-g.x)*m,(i-u.y)*f);S<=F?(e=u.x,i=g.y):(e=g.x,i=u.y)}else{const S=u??g;if(S){if(this._snapAxis===null){const F=t.clientX-this._pStartX,$=t.clientY-this._pStartY;Math.hypot(F,$)>4?this._snapAxis=Math.abs(F)>=Math.abs($)?"y":"x":this._snapAxis=Math.abs(e-S.x)*m<Math.abs(i-S.y)*f?"x":"y"}this._snapAxis==="x"?e=S.x:i=S.y}}}}{let r=!1;t:for(const l of this._config.cards){const c=this._previewBoxes[l.id];if(c)for(const d of["top","right","bottom","left"]){let p,u;switch(d){case"top":p=c.x+c.w/2,u=c.y;break;case"right":p=c.x+c.w,u=c.y+c.h/2;break;case"bottom":p=c.x+c.w/2,u=c.y+c.h;break;case"left":p=c.x,u=c.y+c.h/2;break}if(Math.hypot((o-p)*this._pRect.width,(s-u)*this._pRect.height)<=24){e=p,i=u,this._snapAnchor={card:l.id,side:d},r=!0;break t}}}r||(this._snapAnchor=null)}this._updateFlowPoint(this._selFlow,this._dragPoint,{x:e,y:i})}_onPointUp(t){this._dragPoint>=0&&(t.target.releasePointerCapture(t.pointerId),this._snapAnchor&&this._updateFlowPoint(this._selFlow,this._dragPoint,{card:this._snapAnchor.card,side:this._snapAnchor.side,x:void 0,y:void 0})),this._dragPoint=-1,this._snapAnchor=null,this._snapAxis=null}_ptSegDist(t,e,i,o,s,a){const r=s-i,l=a-o,c=r*r+l*l,d=c===0?0:Math.max(0,Math.min(1,((t-i)*r+(e-o)*l)/c));return Math.hypot(t-i-d*r,e-o-d*l)}_onCanvasAreaClick(t){t.target.closest(".ec-bg-ov,.ec-bg-resize")||(this._bgSelected=!1);const e=this._flows();if(e.length===0||t.target.closest(".ec-handle,.ec-card-ov,.ec-emb-handle,.ec-emb-ov,.ec-zone-handle,.ec-flow-node,.ec-snap"))return;const o=t.currentTarget.getBoundingClientRect(),s=t.clientX-o.left,a=t.clientY-o.top,r=this._config?.cards??[],l=10;let c=-1,d=1/0;for(let p=0;p<e.length;p++){const u=e[p].points.map(g=>{const m=dt(g,r,this._previewBoxes);return{x:m.x*o.width,y:m.y*o.height}});for(let g=0;g<u.length-1;g++){const m=this._ptSegDist(s,a,u[g].x,u[g].y,u[g+1].x,u[g+1].y);m<d&&(d=m,c=p)}}if(c>=0&&d<=l){this._selFlow=c,this._selPoint=-1;const p=e[c];this._syncNavTo("elements","flows",[{key:`flow:${p.id}`,label:p.name??p.id}])}}_syncPreviewDialog(){const t=this.renderRoot?.querySelector("dialog.ec-preview");if(!t)return;const e=t.matches(":modal");this._previewExpanded&&!e?(t.open&&t.close(),t.showModal()):!this._previewExpanded&&(e||!t.open)&&(t.open&&t.close(),t.show())}_sizeExpandedCanvas(){const t=this.renderRoot?.querySelector(".ec-canvas-area");if(!t)return;if(!this._previewExpanded){t.style.width&&t.style.removeProperty("width");return}const e=this.renderRoot?.querySelector(".ec-preview");if(!e)return;this._previewRO||(this._previewRO=new ResizeObserver(()=>this._sizeExpandedCanvas()),this._previewRO.observe(e),window.addEventListener("resize",this._onWindowResize));const{totalW:i,totalH:o}=Y(this._config);if(!i||!o)return;const s=this.renderRoot?.querySelector(".ec-expanded-bottom-bar"),a=e.clientWidth,r=window.innerHeight-(s?.offsetHeight??0);if(a<=0||r<=0)return;const l=`${Math.floor(Math.min(a,r*i/o))}px`;t.style.width!==l&&(t.style.width=l)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onUndoKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onUndoKeydown),clearTimeout(this._toastTimer),this._previewRO?.disconnect(),this._previewRO=void 0,window.removeEventListener("resize",this._onWindowResize)}updated(){const t=this.renderRoot?.querySelectorAll(Se);this._config&&t?.forEach(i=>i.setConfig(this._config)),this._syncPreviewDialog(),this._sizeExpandedCanvas();const e=this._navScrollKey();if(e!==this._lastScrollKey){const i=(this._navPanel?1:0)+this._navPath.length,o=this.renderRoot?.querySelector(".ec-panel-body");o&&(o.scrollTop=i<this._lastScrollDepth?this._panelScroll.get(e)??0:0),this.renderRoot?.querySelector(".ec-panel-header-title")?.focus({preventScroll:!0}),this._lastScrollKey=e,this._lastScrollDepth=i}if(this._previewExpanded&&(this._showAddFlowInput?this.renderRoot?.querySelector(".ec-flow-name-input")?.focus():this.renderRoot?.querySelector(".ec-preview")?.focus()),this._embEditorOpen&&this._embNativeEditor){const i=this.renderRoot.querySelector("#emb-native-slot");if(i&&!i.contains(this._embNativeEditor)){i.innerHTML="",i.appendChild(this._embNativeEditor);const o=this._embEditorConfig??(this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0);if(o){const s=this._embNativeEditor;try{s.setConfig?.(o)}catch{}s.value=o}this._embNativeEditor.hass=this.hass}}this._syncCustomColorVars(),this._pickerStyleRetries=0,this._stylePickers()}_syncCustomColorVars(){const t=ne(this._config?.defaults),e=t.map(([i])=>i.slice(9));for(const i of this._mccustApplied)e.includes(i)||this.style.removeProperty(`--mccust_${i}`);for(const[i,o]of t)this.style.setProperty(i,o);this._mccustApplied=e}_stylePickers(){[this._styleEntityPickers(),this._styleWalkedPickers()].some(Boolean)&&!this._pickerStyleScheduled&&this._pickerStyleRetries<60&&(this._pickerStyleScheduled=!0,this._pickerStyleRetries++,requestAnimationFrame(()=>{this._pickerStyleScheduled=!1,this._stylePickers()}))}_injectPickerStyle(t){const e=t?.shadowRoot;if(!e)return!1;if(e.querySelector("style[data-mc-picker]"))return!0;const i=document.createElement("style");return i.setAttribute("data-mc-picker",""),i.textContent=`
      :host {
        border-radius: 6px !important;
        min-height: ${h.PICKER_HEIGHT}px !important;
      }
      :host::after, :host::before { content: none !important; }
      #item > md-item {
        border-radius: 6px !important;
        color: var(--mce-primary) !important;
        min-height: ${h.PICKER_HEIGHT}px !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        font-size: 15px !important;
        --mdc-icon-size: 20px;
      }
    `,e.appendChild(i),!0}_findInShadow(t,e,i=6){let o=[t];for(let s=0;s<i&&o.length;s++){const a=[];for(const r of o){const l=r.shadowRoot;if(!l)continue;const c=l.querySelector(e);if(c)return c;l.querySelectorAll("*").forEach(d=>{d.shadowRoot&&a.push(d)})}o=a}return null}_styleWalkedPickers(){let t=!1;for(const e of h._WALKED_PICKERS){const i=this.renderRoot?.querySelectorAll(e);!i||i.length===0||i.forEach(o=>{const s=this._findInShadow(o,"ha-combo-box-item",8);this._injectPickerStyle(s)||(t=!0)})}return t}_styleEntityPickers(){const t=this.renderRoot?.querySelectorAll("ha-entity-picker");if(!t||t.length===0)return!1;let e=!1;return t.forEach(i=>{const o=i.shadowRoot?.querySelector("ha-generic-picker")?.shadowRoot?.querySelector("ha-picker-field")?.shadowRoot?.querySelector("ha-combo-box-item");this._injectPickerStyle(o)||(e=!0)}),e}_iconPicker(t,e,i){return n`<ha-icon-picker
      .hass=${this.hass}
      .value=${t??""}
      .placeholder=${i??""}
      @value-changed=${o=>{const s=o.detail.value;e(s||void 0)}}
    ></ha-icon-picker>`}_entitySelector(t){const{label:e="Entity",entity:i,onEntity:o,includeVirtuals:s=!0,attribute:a,onAttribute:r,attributePlaceholder:l}=t,c=i?.startsWith("virtual:")??!1,d=!i||Object.keys(this.hass?.states[i]?.attributes??{}).length>0;return n`
      ${this._row(e,c?n`<div style="display:flex;gap:4px;align-items:center;">
              <span class="ec-input" style="flex:1;opacity:0.8;">
                ${this._virtuals().find(p=>`virtual:${p.id}`===i)?.name??i}
              </span>
              <button class="ec-btn-clear" @click=${()=>o(void 0)} title="Switch to real entity">✕</button>
            </div>`:n`<ha-entity-picker
              .hass=${this.hass}
              .value=${i??""}
              allow-custom-entity
              @value-changed=${p=>o(p.detail.value)}
            ></ha-entity-picker>`)}
      ${s&&!c&&this._virtuals().length>0?this._row("Virtual Entity",n`<select class="ec-select"
          .value=${""}
          @change=${p=>{const u=p.target.value;u&&o(u),p.target.value=""}}
        >
          <option value="">(pick a virtual)</option>
          ${this._virtuals().map(p=>n`<option value=${"virtual:"+p.id}>${p.name}</option>`)}
        </select>`):_}
      ${r&&!c&&d?this._row("Attribute",n`<ha-selector
          class="ec-attr-picker"
          .hass=${this.hass}
          .selector=${{attribute:{entity_id:i||void 0}}}
          .value=${a}
          .placeholder=${l}
          .required=${!1}
          @value-changed=${p=>{const u=p.detail.value;r(typeof u=="string"&&u?u:void 0)}}
        ></ha-selector>`):_}
    `}_boxRows(t,e,i,o=!0){return n`
      ${this._row("Background",this._colorPicker(`${t}-bg`,e.background,s=>i({background:s}),{onClear:()=>i({background:void 0,background_alpha:void 0})}))}

      ${this._row("Gradient to",this._colorPicker(`${t}-bg2`,e.background2,s=>i({background2:s}),{onClear:()=>i({background2:void 0,background_angle:void 0})}))}

      ${e.background2?this._controlNumRow("Gradient angle (deg)",e.background_angle,"180",s=>i({background_angle:s}),0):_}

      ${this._row("Opacity",n`<div class="ec-opacity-row">
          <input type="range" min="0" max="1" step="0.01"
            .value=${String(e.background_alpha??v("box_background_alpha")??1)}
            @input=${s=>{const a=parseFloat(s.target.value);i({background_alpha:a})}}
          />
          <span class="ec-opacity-val">${Math.round((e.background_alpha??v("box_background_alpha")??1)*100)}%</span>
          <button class="ec-btn-clear" @click=${()=>i({background_alpha:void 0})} title="Clear">✕</button>
        </div>`)}

      ${this._row("Color",this._colorPicker(`${t}-col`,e.color,s=>i({color:s})))}

      ${this._row("Border",n`<input type="checkbox" .checked=${e.border??!1}
          @change=${s=>i({border:s.target.checked})}
        />`)}

      ${this._numRow("Border width (px)",{value:e.border_width,onChange:s=>i({border_width:s}),min:0,placeholder:"1"})}

      ${this._numRow("Radius (px)",{value:e.radius,onChange:s=>i({radius:s}),min:0,placeholder:"0"})}

      ${this._numRow("Padding (px)",{value:e.padding,onChange:s=>i({padding:s}),min:0,placeholder:"0"})}

      ${this._row("Glow",n`<input type="checkbox" .checked=${e.glow??!1}
          @change=${s=>i({glow:s.target.checked})}
        />`)}

      ${o?this._cssRow(e.extra_css,s=>i({extra_css:s})):_}

      ${this._numRow("Blur (px)",{value:e.blur,onChange:s=>i({blur:s}),min:0,placeholder:"0"})}
    `}_textRows(t,e,i,o=!0,s=!0,a=!0){return n`
      ${s?this._numRow("Font size (px)",{value:e.font_size,onChange:r=>i({font_size:r}),min:6,placeholder:"inherit"}):_}

      ${a?this._row("Color",this._colorPicker(`${t}-col`,e.color,r=>i({color:r}))):_}

      ${this._row("Font weight",n`<select class="ec-select"
          .value=${e.font_weight!=null?String(e.font_weight):""}
          @change=${r=>{const l=r.target.value;i({font_weight:l===""?void 0:Number(l)})}}
        >
          <option value="" .selected=${e.font_weight==null}>(inherit)</option>
          <option value="400" .selected=${e.font_weight===400}>400 — Normal</option>
          <option value="600" .selected=${e.font_weight===600}>600 — Semi-bold</option>
          <option value="700" .selected=${e.font_weight===700}>700 — Bold</option>
        </select>`)}

      ${this._row("Font family",n`<input class="ec-input" type="text" .value=${e.font_family??""}
          placeholder="inherit"
          @change=${r=>{const l=r.target.value;i({font_family:l===""?void 0:l})}}
        />`)}

      ${this._numRow("Letter spacing (px)",{value:e.letter_spacing,onChange:r=>i({letter_spacing:r}),placeholder:"0"})}

      ${o?this._cssRow(e.extra_css,r=>i({extra_css:r})):_}
    `}_cssRow(t,e){return this._row("Additional CSS",n`<textarea
      class="ec-input ec-css-input${this._isValidCss(t??"")?"":" ec-css-invalid"}"
      rows="2" spellcheck="false"
      placeholder="e.g. box-shadow: 0 0 8px red; --my-var: 4px;"
      .value=${t??""}
      @input=${i=>{const o=i.target;o.classList.toggle("ec-css-invalid",!this._isValidCss(o.value))}}
      @change=${i=>{const o=i.target.value.trim();e(o||void 0)}}
    ></textarea>`)}_isValidCss(t){const e=(t??"").trim();if(!e)return!0;if(/[{}]/.test(e))return!1;for(const i of e.split(";")){const o=i.trim();if(!o)continue;const s=o.indexOf(":");if(s<=0)return!1;const a=o.slice(0,s).trim();if(!o.slice(s+1).trim()||!/^(--[a-zA-Z0-9-]+|-?[a-zA-Z][a-zA-Z0-9-]*)$/.test(a))return!1}return!0}_renderAlignBar(){const t=Array.from(this._selCards).some(e=>this._config?.cards[e]?.group)||Array.from(this._selEmbCards).some(e=>this._embCards()[e]?.group);return n`
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
        ${t?n`<button class="ec-btn-align" @click=${()=>this._ungroupCards()} title="Remove group from selected cards">Ungroup</button>`:_}
      </div>
      ${t?n`
        <div class="ec-align-bar ec-align-bar-gap">
          <label class="ec-quick-field">
            <span>Column gap (px)</span>
            ${this._numInput({value:this._groupColGap,onChange:e=>this._groupColGap=e,min:0,placeholder:"e.g. 12"})}
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each row by this many px"
            @click=${()=>{this._groupColGap!=null&&this._applyGroupGap("x",this._groupColGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupColGap=void 0}}>Clear</button>

          <label class="ec-quick-field">
            <span>Row gap (px)</span>
            ${this._numInput({value:this._groupRowGap,onChange:e=>this._groupRowGap=e,min:0,placeholder:"e.g. 12"})}
          </label>
          <button class="ec-btn-align" title="Space grouped cards within each column by this many px"
            @click=${()=>{this._groupRowGap!=null&&this._applyGroupGap("y",this._groupRowGap)}}
          >Set</button>
          <button class="ec-btn-align" title="Clear this field" @click=${()=>{this._groupRowGap=void 0}}>Clear</button>
        </div>
        <p class="ec-hint">Column gap re-spaces cards whose rows overlap vertically (left-to-right neighbors); Row gap re-spaces cards whose columns overlap horizontally (top-to-bottom neighbors). Cards don't need to be pixel-perfectly aligned first.</p>
      `:_}
    `}_quickNum(t,e,i,o){return n`<label class="ec-quick-field">
      <span>${t}</span>
      ${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
        min=${o?.min??""} max=${o?.max??""}
        placeholder=${o?.placeholder??""}
        .value=${e!=null?String(e):""}
        @change=${s=>i(s.target.value)}
      />`)}
    </label>`}_renderCardQuickPanel(t){const e=this._config?.cards[t];if(!e)return _;const i=this._gridGeom();return n`
      <div class="ec-quick-panel">
        ${i?this._quickNum("Span",e.grid_span??1,o=>{const s=Math.max(1,Math.min(i.cols,Number(o)||1)),a=Math.max(8,s*i.cellW-i.padding);this._updateCard(t,{grid_span:s,width:a})},{min:1,max:i.cols}):_}
        ${this._quickNum("Width",e.width,o=>this._updateCard(t,{width:o===""?void 0:Number(o)}),{placeholder:"auto"})}
        ${this._quickNum("Field gap",e.field_gap,o=>this._updateCard(t,{field_gap:o===""?void 0:Number(o)}),{placeholder:"default"})}
        ${this._quickNum("Col gap",e.column_gap,o=>this._updateCard(t,{column_gap:o===""?void 0:Number(o)}),{placeholder:"default"})}
      </div>
    `}_renderEmbQuickPanel(t){const e=this._embCards()[t];if(!e)return _;const i=this._gridGeom();return n`
      <div class="ec-quick-panel">
        ${i?this._quickNum("Span",e.grid_span??1,o=>{const s=Math.max(1,Math.min(i.cols,Number(o)||1)),a=Math.max(8,s*i.cellW-i.padding);this._updateEmbCard(t,{grid_span:s,width:a})},{min:1,max:i.cols}):_}
        ${this._quickNum("Width",e.width,o=>this._updateEmbCard(t,{width:Number(o)}))}
        ${this._quickNum("Height",e.height,o=>this._updateEmbCard(t,{height:o===""?void 0:Number(o)}),{placeholder:"auto"})}
      </div>
    `}render(){if(!this._config)return _;if(this._wizStep>=0)return this._renderWizard();const{totalW:t,totalH:e}=Y(this._config),i=this._config.cards??[];return n`
      <div class="ec-version-bar">
        <span class="ec-version">Mosaic Canvas Card v${Zt} · build ${Oe}</span>
      </div>

      ${this._renderTutorial()}

      <!-- ── Live preview ── -->
      <dialog class="ec-preview${this._previewExpanded?" ec-preview--expanded":""}${this._previewExpanded&&this._barAtTop?" ec-bar-top":""}"
        @pointermove=${o=>{this._onCardMove(o),this._onPointMove(o),this._onZoneMove(o),this._onZoneResizeMove(o),this._onEmbCardMove(o),this._onBgMove(o)}}
        @pointerup=${o=>{this._onCardUp(o),this._onPointUp(o),this._onZoneUp(o),this._onZoneResizeUp(o),this._onEmbCardUp(o),this._onBgUp(o),this._endUndoGesture()}}
        @cancel=${o=>{o.preventDefault(),this._collapseExpanded()}}
        tabindex="-1"
      >
        ${this._previewExpanded?n`
        <div class="ec-canvas-area"
          @click=${o=>this._onCanvasAreaClick(o)}
        >
          ${Ne`<${me}
            class="ec-preview-card"
            .hass=${this.hass}
            ?editor=${!0}
            @ec-boxes-changed=${o=>{this._previewBoxes=o.detail.boxes}}
          ></${me}>`}
          ${this._renderGridOverlay()}
          <div class="ec-handles">
            ${this._renderBgOverlay()}
            ${i.map((o,s)=>{const a=`${s===this._selCard?" selected":""}${this._selCards.has(s)&&s!==this._selCard?" multi":""}${o.group?" grouped":""}`,r=this._previewBoxes[o.id];return r?n`
              <div
                class="ec-card-ov${a}"
                style="left:${r.x*100}%;top:${r.y*100}%;width:${r.w*100}%;height:${r.h*100}%;"
                @pointerdown=${l=>this._onCardDown(l,s)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${o.name??`Card ${s+1}`}
              ></div>`:n`
              <div
                class="ec-handle${a}"
                style="left:${o.position.x*100}%;top:${o.position.y*100}%;"
                @pointerdown=${l=>this._onCardDown(l,s)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${o.name??`Card ${s+1}`}
              ></div>`})}
            ${this._zones().map((o,s)=>{const a=this._zoneBox(o);return n`
              <div
                class="ec-zone-handle${s===this._selZone?" selected":""}"
                style="left:${a.x/t*100}%;top:${a.y/e*100}%;width:${a.w/t*100}%;height:${a.h/e*100}%;"
                @pointerdown=${r=>this._onZoneDown(r,s)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${o.name??`Zone ${s+1}`}
              >
                <span class="ec-zone-label">${o.name??`Zone ${s+1}`}</span>
                ${s===this._selZone?["tl","tr","bl","br"].map(r=>n`
                  <div
                    class="ec-zone-resize ec-zone-resize-${r}"
                    @pointerdown=${l=>this._onZoneResizeDown(l,s,r)}
                  ></div>`):_}
              </div>`})}
            ${this._embCards().map((o,s)=>{const a=`${s===this._selEmbCard?" selected":""}${this._selEmbCards.has(s)&&s!==this._selEmbCard?" multi":""}${o.group?" grouped":""}`,r=this._previewBoxes[o.id];return r?n`
              <div
                class="ec-emb-ov${a}"
                style="left:${r.x*100}%;top:${r.y*100}%;width:${r.w*100}%;height:${r.h*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,s)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${o.name??`Embedded ${s+1}`}
              ></div>`:n`
              <div
                class="ec-emb-handle${a}"
                style="left:${o.position.x*100}%;top:${o.position.y*100}%;"
                @pointerdown=${l=>this._onEmbCardDown(l,s)}
                @dblclick=${()=>this._collapseExpanded()}
                title=${o.name??`Embedded ${s+1}`}
              ></div>`})}
          </div>
          ${this._flows().length>0?n`
            <svg class="ec-flow-paths-overlay" viewBox="0 0 1 1" preserveAspectRatio="none">
              <defs>
                <filter id="ec-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.003" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              ${this._flows().map((o,s)=>{const a=o.points.map(l=>dt(l,i,this._previewBoxes)).map(l=>`${l.x},${l.y}`).join(" "),r=s===this._selFlow;return Le`
                  <polyline
                    class="ec-flow-hit"
                    points="${a}"
                    fill="none"
                    stroke="transparent"
                    stroke-width="16"
                    pointer-events="stroke"
                    vector-effect="non-scaling-stroke"
                    @dblclick=${()=>{this._selFlow=s,this._syncNavTo("elements","flows",[{key:`flow:${o.id}`,label:o.name??o.id}]),this._collapseExpanded()}}
                  ></polyline>
                  <polyline
                    points="${a}"
                    fill="none"
                    stroke="${r?"rgba(0,212,255,0.9)":"rgba(0,180,255,0.55)"}"
                    stroke-width="${r?3:2.5}"
                    stroke-dasharray="6 4"
                    vector-effect="non-scaling-stroke"
                    filter="url(#ec-flow-glow)"
                  ></polyline>`})}
            </svg>
          `:_}
          ${this._selFlow>=0?(()=>{const o=this._flows()[this._selFlow];if(!o)return _;const s=["top","right","bottom","left"];return n`
              <div class="ec-flow-layer"
                @click=${a=>this._onFlowLayerClick(a)}
              >
                ${this._selPoint>=0?i.map(a=>s.map(r=>{const l=this._previewBoxes[a.id];if(!l)return _;let c,d;switch(r){case"top":c=l.x+l.w/2,d=l.y;break;case"right":c=l.x+l.w,d=l.y+l.h/2;break;case"bottom":c=l.x+l.w/2,d=l.y+l.h;break;case"left":c=l.x,d=l.y+l.h/2;break;default:c=l.x+l.w/2,d=l.y+l.h/2;break}return n`<div
                    class="ec-snap"
                    style="left:${c*100}%;top:${d*100}%;"
                    @click=${p=>{p.stopPropagation(),this._updateFlowPoint(this._selFlow,this._selPoint,{card:a.id,side:r,x:void 0,y:void 0})}}
                  ></div>`})):_}
                ${o.points.map((a,r)=>{const l=dt(a,i,this._previewBoxes);return n`<div
                    class="ec-flow-node${r===this._selPoint?" selected":""}${a.card!=null?" anchored":" free"}"
                    style="left:${l.x*100}%;top:${l.y*100}%;"
                    @pointerdown=${c=>this._onPointDown(c,r)}
                    @dblclick=${()=>{this._syncNavTo("elements","flows",[{key:`flow:${o.id}`,label:o.name??o.id}]),this._collapseExpanded()}}
                  ></div>`})}
              </div>
            `})():_}
        </div>
        <div class="ec-expanded-bottom-bar">
            <div class="ec-bottom-bar-left">
              ${this._showAddFlowInput?n`
                <input class="ec-flow-name-input" type="text"
                  placeholder="Flow name"
                  .value=${this._newFlowName}
                  @input=${o=>{this._newFlowName=o.target.value}}
                  @keydown=${o=>{o.key==="Enter"&&this._addFlowFromExpanded(),o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),this._showAddFlowInput=!1,this._newFlowName="")}}
                >
                <button class="ec-btn-add" @click=${()=>this._addFlowFromExpanded()}>Add</button>
                <button class="ec-btn-remove" @click=${()=>{this._showAddFlowInput=!1,this._newFlowName=""}}>✕</button>
              `:n`
                <button class="ec-btn-add" @click=${()=>{this._showAddFlowInput=!0}}>+ Add Flow Line</button>
              `}
            </div>
            <div class="ec-bottom-bar-center">
              ${this._selCards.size+this._selEmbCards.size>=2?this._renderAlignBar():this._selCards.size===1&&this._selEmbCards.size===0?this._renderCardQuickPanel(Array.from(this._selCards)[0]):this._selEmbCards.size===1&&this._selCards.size===0?this._renderEmbQuickPanel(Array.from(this._selEmbCards)[0]):this._selFlow>=0?n`<span class="ec-hint-text">Flow selected — click card anchor points to connect endpoints</span>`:n`
                        <span class="ec-hint-text">Click on a flow to select it for editing or Add Flow to create a new one</span>
                        <span class="ec-hint-text">Click-drag a card to move it · Shift-click to multi-select · Double click to jump to configuration · Alt-click to cycle stacked cards</span>
                      `}
            </div>
            ${this._selCards.size+this._selEmbCards.size>=2?n`
              <button class="ec-btn-done" title="Finish multi-card editing"
                @click=${()=>{this._selCards=new Set,this._selEmbCards=new Set}}>✓ Done</button>
            `:this._selCards.size===1&&this._selEmbCards.size===0||this._selEmbCards.size===1&&this._selCards.size===0?n`
              <button class="ec-btn-done" title="Finish card editing"
                @click=${()=>{this._selCards=new Set,this._selEmbCards=new Set,this._selCard=-1,this._selEmbCard=-1}}>✓ Done</button>
            `:this._selFlow>=0?n`
              <button class="ec-btn-done" title="Finish flow editing"
                @click=${()=>{this._selFlow=-1}}>✓ Done</button>
            `:_}
            ${this._previewExpanded?n`
              <button class="ec-undo-btn" title="Undo (Ctrl+Z)" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>
                <ha-icon icon="mdi:undo"></ha-icon>
              </button>
              <button class="ec-undo-btn" title="Redo (Ctrl+Y)" ?disabled=${!this._redoStack.length} @click=${()=>this._redo()}>
                <ha-icon icon="mdi:redo"></ha-icon>
              </button>
              <button class="ec-side-close" title="Close Mosaic Editor Window" @click=${()=>this._collapseExpanded()}>Close Window</button>
            `:_}
          </div>
        `:n`
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
        ${this._previewExpanded?this._renderUndoToast():_}
      </dialog>

      ${this._previewExpanded?_:this._renderControls()}
      ${this._previewExpanded?_:this._renderUndoToast()}
    `}_navOpenPanel(t){this._navPanel=t,this._navPath=[]}_navBack(){this._navPath.length?this._navPath=this._navPath.slice(0,-1):this._navPanel=""}_navRow(t,e,i,o,s=0){return n`
      <button class="ec-nav-item" @click=${o}>
        <ha-icon class="ec-nav-item-icon" icon=${t}></ha-icon>
        <span class="ec-nav-item-text">
          <span class="ec-nav-item-label">${e}</span>
          ${i?n`<span class="ec-nav-item-hint">${i}</span>`:_}
        </span>
        ${s>0?n`<span class="ec-nav-card-badge"
          title="${s} item${s===1?"":"s"} to review">${s}</span>`:_}
        <ha-icon class="ec-nav-item-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_navBtn(t,e,i,o,s=0){return n`
      <button class="ec-nav-card" @click=${()=>this._navPush(t,e,i)}>
        <ha-icon class="ec-nav-card-icon" icon=${o}></ha-icon>
        <span class="ec-nav-card-text">
          <span class="ec-nav-card-label">${e}</span>
          ${i?n`<span class="ec-nav-card-hint">${i}</span>`:_}
        </span>
        ${_}
        <ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </button>
    `}_navMenu(t,e){return n`${t.map(i=>this._navBtn(i.key,i.label,i.hint,i.icon,Ct(e?.root,i.paths)))}`}_clearOverridesBtn(t,e){return _}static _findDef(t,e){return t.find(i=>i.key===e)}_assertOneOwnerInvariant(){if(this._oneOwnerChecked)return;this._oneOwnerChecked=!0;const t=h,e=[],i=(a,r)=>{const l=new Map;for(const c of r)for(const d of c)for(const p of d.paths??[]){const u=l.get(p);u&&u!==d.key?e.push(`${a}: "${p}" claimed by both "${u}" and "${d.key}"`):l.set(p,d.key)}};i("Mosaic Card",[t._CARD_SECTIONS]),i("Zone",[t._ZONE_SECTIONS]),i("Flow",[t._FLOW_SECTIONS]),i("Embedded Card",[t._EMB_SECTIONS]),i("Popover Card",[t._POPOVER_CARD_SECTIONS]),i("Global Defaults",[t._DEFAULTS_SECTIONS,t._CONTROL_DEFAULTS_SECTIONS,t._ELEM_LIB_SECTIONS,t._selectorDefaultsDefs(!1),t._selectorDefaultsDefs(!0)]);const o=[{id:"x",type:"value"},{id:"x",type:"icon"},{id:"x",type:"label"},{id:"x",type:"svg"},{id:"x",type:"svg",svg:"thermometer-vertical.svg"},{id:"x",type:"svg",svg:"battery-horizontal.svg"},{id:"x",type:"svg",svg:"inverter.svg"},{id:"x",type:"svg",svg:"gauge-arc.svg"},{id:"x",type:"graph"},{id:"x",type:"embedded_card"},{id:"x",type:"toggle"},{id:"x",type:"slider"},{id:"x",type:"dropdown"},{id:"x",type:"button_group"},{id:"x",type:"button_group",options_source:"manual"},{id:"x",type:"input"},{id:"x",type:"spinbox"},{id:"x",type:"button"}];for(const a of o){const r=a.type==="button_group"||a.type==="button",l=[];a.type==="button_group"&&(a.options_source??"entity")!=="manual"&&l.push(t._OPTION_LAYOUT_DEF,...t._fscsDefs(!1)),a.type==="button"&&l.push(...t._fscsDefs(!0));const c=r?this._fieldSectionDefs(a).filter(d=>d.key!=="fsec:controlstyle"):this._fieldSectionDefs(a);i(`Field (${a.type}${a.svg?`:${a.svg}`:""}${a.options_source?`:${a.options_source}`:""})`,[c,l])}const s=[{id:"x",name:"x",op:"add",inputs:[]},{id:"x",name:"x",op:"time_until",inputs:[]},{id:"x",name:"x",op:"statistic",inputs:[]}];for(const a of s)i(`Virtual (${a.op})`,[this._virtualSectionDefs(a)]);e.length&&console.error(`[mosaic-canvas-card] #75 one-owner check failed:
${e.join(`
`)}`)}_itemCard(t){const{dragKey:e,icon:i,label:o,sub:s,selected:a,multi:r,onClick:l,actions:c}=t,d=this._dropKey===e;return n`
      <div
        class="ec-item-card${a?" selected":""}${r?" multi":""}${this._dragSrc===e?" ec-dragging":""}${d?this._dropBefore?" ec-drop-before":" ec-drop-after":""}"
        role="button"
        tabindex="0"
        data-drag-key=${e}
        @pointerdown=${p=>this._onItemPointerDown(p,e)}
        @pointermove=${p=>this._onItemPointerMove(p)}
        @pointerup=${p=>this._onItemPointerUp(p)}
        @pointercancel=${p=>this._onItemPointerCancel(p)}
        @click=${p=>{if(this._suppressClick){this._suppressClick=!1;return}l(p)}}
        @keydown=${p=>this._onItemCardKeydown(p,e,l)}
      >
        <span class="ec-drag-handle" title="Drag to reorder"></span>
        <ha-icon class="ec-item-card-icon" icon=${i}></ha-icon>
        <span class="ec-item-card-text">
          <span class="ec-item-card-label">${o}</span>
          ${s?n`<span class="ec-item-card-sub">${s}</span>`:_}
        </span>
        <span class="ec-item-card-actions">${c??_}</span>
        <ha-icon class="ec-item-card-chevron" icon="mdi:chevron-right"></ha-icon>
      </div>
    `}_liveCrumbLabel(t,e){const i=this._config;if(!i)return e;const o=this._navPath[t]?.key??"";if(t===0)switch(this._navPanel){case"mosaic":return o.startsWith("card:")?i.cards[this._selCard]?.name??e:e;case"popover":return o.startsWith("card:")?this._extCards()[this._selExtCard]?.name??e:e;case"flows":return o.startsWith("flow:")?i.flows?.[this._selFlow]?.name??i.flows?.[this._selFlow]?.id??e:e;case"zones":return o.startsWith("zone:")?i.zones?.[this._selZone]?.name??i.zones?.[this._selZone]?.id??e:e;case"virtuals":return o.startsWith("virt:")&&(i.virtuals?.[this._selVirtual]?.name||i.virtuals?.[this._selVirtual]?.id)||e;case"embedded":return o.startsWith("emb:")?i.embedded_cards?.[this._selEmbCard]?.name??i.embedded_cards?.[this._selEmbCard]?.id??e:e;default:return e}const s=a=>this._navPanel==="mosaic"?i.cards[this._selCard]?.fields[a]:this._navPanel==="popover"?this._extCards()[this._selExtCard]?.fields[a]:void 0;if(o.startsWith("field:")){const a=this._navPanel==="mosaic"?i.cards[this._selCard]?.fields:this._navPanel==="popover"?this._extCards()[this._selExtCard]?.fields:void 0,r=s(this._crumbIndex(o,a));return r?this._fieldName(r):e}if(o.startsWith("gs:")||o.startsWith("egs:")){const a=Number(o.slice(o.indexOf(":")+1)),r=this._navPanel==="mosaic"?this._selField:this._selExtField,l=s(r)?.graph_series?.[a];return l&&(l.label||l.entity)||e}if(o.startsWith("opt:")||o.startsWith("eopt:")){const a=Number(o.slice(o.indexOf(":")+1)),r=this._navPanel==="mosaic"?this._selField:this._selExtField,l=s(r)?.options?.[a];return l?h._optionName(l,a):e}return e}_renderBreadcrumb(){const t=[{label:h._TAB_LABEL[this._navTab],onClick:()=>{this._navPanel="",this._navPath=[]}}];return this._navPanel&&(t.push({label:h._PANEL_META[this._navPanel]?.title??this._navPanel,onClick:()=>{this._navPath=[]}}),this._navPath.forEach((e,i)=>t.push({label:this._liveCrumbLabel(i,e.label),onClick:()=>{this._navPath=this._navPath.slice(0,i+1)}}))),n`
      <div class="ec-nav-toolbar">
        <button class="ec-undo-btn" title="Undo (Ctrl+Z)" ?disabled=${!this._undoStack.length} @click=${()=>this._undo()}>
          <ha-icon icon="mdi:undo"></ha-icon>
        </button>
        <button class="ec-undo-btn" title="Redo (Ctrl+Y)" ?disabled=${!this._redoStack.length} @click=${()=>this._redo()}>
          <ha-icon icon="mdi:redo"></ha-icon>
        </button>
      </div>
      <div class="ec-breadcrumb">
        ${t.map((e,i)=>n`
          <button class="ec-crumb${i===t.length-1?" ec-crumb--active":""}" @click=${e.onClick} title=${e.label}>${e.label}</button>
          ${i<t.length-1?n`<ha-icon class="ec-crumb-sep" icon="mdi:chevron-right"></ha-icon>`:_}
        `)}
      </div>
    `}_renderRibbonItems(){return n`${h._RIBBON_ITEMS.filter(t=>t.tab===this._navTab).map(t=>this._navRow(t.icon,t.label,t.hint,()=>this._navOpenPanel(t.panel),t.panel==="health"?this._health().issues.filter(e=>!e.ignored).length:0))}`}_buildSearchIndex(){const t=this._config;if(!t)return[];const e=h,i=[],o=p=>({key:p.key,label:p.label,hint:p.hint}),s=(p,u,g,m,f,S,F,$)=>{i.push({tab:p,panel:u,icon:g,label:m,hint:f,context:S,path:F,...$?{terms:$}:{}})},a=(p,u,g,m,f=[])=>{for(const S of m)s(p,u,S.icon,S.label,S.hint,g,[...f,o(S)],S.terms)};for(const p of e._RIBBON_ITEMS)s(p.tab,p.panel,p.icon,e._PANEL_META[p.panel]?.title??p.label,p.hint,e._TAB_LABEL[p.tab],[]);a("settings","canvas","Settings › Canvas",e._CANVAS_SECTIONS),a("settings","defaults","Settings › Global Defaults",e._DEFAULTS_SECTIONS);const r=e._DEFAULTS_SECTIONS.find(p=>p.key==="sec:control");if(r){a("settings","defaults","Global Defaults › Control Default",e._CONTROL_DEFAULTS_SECTIONS,[o(r)]);for(const p of e._CONTROL_DEFAULTS_SECTIONS)p.key!=="cd:selector"&&p.key!=="cd:button"||a("settings","defaults",`Control Default › ${p.label}`,e._selectorDefaultsDefs(p.key==="cd:button"),[o(r),o(p)])}const l=e._DEFAULTS_SECTIONS.find(p=>p.key==="sec:elements");l&&a("settings","defaults","Global Defaults › Element Library",e._ELEM_LIB_SECTIONS,[o(l)]),a("settings","templates","Settings › Templates",e._TEMPLATE_SECTIONS);const c=e._POPOVER_GLOBAL_DEFAULTS_DEF;s("cards","popover",c.icon,c.label,c.hint,"Cards › Popover Cards",[o(c)]);const d=(p,u,g,m,f,S,F)=>{f.forEach(($,k)=>{const y=this._fieldName($),D={key:`field:${$.id}`,label:y};s("cards",p,gt[$.type],y,this._fieldSub($),`${u} › ${m}`,[g,D]);for(const T of this._fieldSectionDefs($))if(s("cards",p,T.icon,T.label,T.hint,`${m} › ${y}`,[g,D,o(T)],T.terms),T.key==="fsec:controlstyle"&&($.type==="button_group"||$.type==="button")&&!this._controlStyleUsesGlobal($,this._idFor(S,k,F)))for(const I of e._fscsDefs($.type==="button"))s("cards",p,I.icon,I.label,I.hint,`${y} › ${T.label}`,[g,D,o(T),o(I)],I.terms)})};return(t.cards??[]).forEach((p,u)=>{const g=p.name??`Card ${u+1}`,m={key:`card:${p.id}`,label:g};s("cards","mosaic","mdi:view-dashboard",g,`${p.fields.length} field${p.fields.length===1?"":"s"}`,"Cards › Mosaic Cards",[m]);for(const f of e._CARD_SECTIONS)s("cards","mosaic",f.icon,f.label,f.hint,`Mosaic Cards › ${g}`,[m,o(f)],f.terms);d("mosaic","Mosaic Cards",m,g,p.fields,u,!1)}),this._extCards().forEach((p,u)=>{const g=p.name??`Popover Card ${u+1}`,m={key:`card:${p.id}`,label:g};s("cards","popover","mdi:picture-in-picture-bottom-right",g,`${p.fields.length} field${p.fields.length===1?"":"s"}`,"Cards › Popover Cards",[m]);for(const f of e._POPOVER_CARD_SECTIONS)s("cards","popover",f.icon,f.label,f.hint,`Popover Cards › ${g}`,[m,o(f)],f.terms);d("popover","Popover Cards",m,g,p.fields,u,!0)}),this._embCards().forEach(p=>{const u=p.name??p.id,g={key:`emb:${p.id}`,label:u};s("cards","embedded","mdi:widgets",u,p.card_config?.type??"No card type set","Cards › Embedded External Cards",[g]);for(const m of e._EMB_SECTIONS)s("cards","embedded",m.icon,m.label,m.hint,`Embedded External Cards › ${u}`,[g,o(m)],m.terms)}),this._flows().forEach(p=>{const u=p.name??p.id,g={key:`flow:${p.id}`,label:u};s("elements","flows","mdi:chart-timeline-variant",u,p.style??"dashes","Elements › Animated Flow Lines",[g]);for(const m of e._FLOW_SECTIONS)s("elements","flows",m.icon,m.label,m.hint,`Animated Flow Lines › ${u}`,[g,o(m)],m.terms)}),this._zones().forEach(p=>{const u=p.name??p.id,g={key:`zone:${p.id}`,label:u};s("elements","zones","mdi:gesture-tap-box",u,`${p.width}×${p.height}px`,"Elements › Clickable Zones",[g]);for(const m of e._ZONE_SECTIONS)s("elements","zones",m.icon,m.label,m.hint,`Clickable Zones › ${u}`,[g,o(m)],m.terms)}),this._virtuals().forEach(p=>{const u=p.name||p.id,g={key:`virt:${p.id}`,label:u};s("elements","virtuals",p.op==="time_until"?"mdi:progress-clock":"mdi:memory",u,e._VIRTUAL_OPS.find(m=>m.value===p.op)?.label??p.op,"Elements › Virtual Entities",[g]);for(const m of this._virtualSectionDefs(p))s("elements","virtuals",m.icon,m.label,m.hint,`Virtual Entities › ${u}`,[g,o(m)],m.terms)}),i}_searchResults(t){const e=t.toLowerCase(),i=e.split(/\s+/).filter(Boolean);if(!i.length)return[];const o=[];for(const s of this._buildSearchIndex()){const a=s.label.toLowerCase(),r=s.hint.toLowerCase(),l=s.terms?.toLowerCase()??"",c=s.context.toLowerCase();let d=0,p=0;for(const u of i)a.includes(u)?(d+=3,p++):r.includes(u)||l.includes(u)?(d+=2,p++):c.includes(u)&&(d+=1);p&&(a===e?d+=4:i.some(u=>a.startsWith(u))&&(d+=2),o.push({r:s,score:d}))}return o.sort((s,a)=>a.score-s.score),o.map(s=>s.r)}_searchNavigate(t){this._searchQuery="",this._searchActive=0,this._navigateTo(t.tab,t.panel,t.path)}_onSearchKeydown(t,e){const i=Math.min(e.length,h._SEARCH_LIMIT)-1,o=Math.max(0,Math.min(this._searchActive,i));if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),i<0)return;this._searchActive=t.key==="ArrowDown"?Math.min(o+1,i):Math.max(o-1,0),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".ec-search-result.active")?.scrollIntoView({block:"nearest"})})}else if(t.key==="Enter"){const s=e[o];s&&(t.preventDefault(),this._searchNavigate(s))}else t.key==="Escape"&&this._searchQuery&&(t.preventDefault(),t.stopPropagation(),this._searchQuery="",this._searchActive=0)}_renderSearchResults(t){if(!t.length)return n`<p id="ec-search-results" class="ec-empty ec-search-results">No screens match — try a section name or a setting, e.g. "ticks" or "card style".</p>`;const e=t.slice(0,h._SEARCH_LIMIT),i=Math.min(this._searchActive,e.length-1);return n`
      <div id="ec-search-results" class="ec-search-results" role="listbox" aria-label="Search results">
        ${e.map((o,s)=>n`
          <button id=${`ec-search-opt-${s}`} class="ec-nav-card ec-search-result${s===i?" active":""}"
            role="option" aria-selected=${s===i}
            @click=${()=>this._searchNavigate(o)}
            @mousemove=${()=>{this._searchActive!==s&&(this._searchActive=s)}}
          >
            <ha-icon class="ec-nav-card-icon" icon=${o.icon}></ha-icon>
            <span class="ec-nav-card-text">
              <span class="ec-nav-card-label">${o.label}</span>
              ${o.hint?n`<span class="ec-nav-card-hint">${o.hint}</span>`:_}
              <span class="ec-search-result-ctx">${o.context}</span>
            </span>
            <ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>
          </button>
        `)}
        ${t.length>e.length?n`<p class="ec-search-more">${t.length-e.length} more — keep typing to narrow</p>`:_}
      </div>
    `}_renderRibbon(){const t=[{key:"cards",icon:"mdi:view-grid",label:"Cards"},{key:"elements",icon:"mdi:shape",label:"Elements"},{key:"settings",icon:"mdi:cog",label:"Settings"}],e=this._searchQuery.trim(),i=e?this._searchResults(e):[],o=i.length?Math.min(this._searchActive,Math.min(i.length,h._SEARCH_LIMIT)-1):-1,s=Pi(this._health());return n`
      <input class="ec-input ec-nav-search" type="search"
        placeholder="Search all editor screens…"
        aria-label="Search all editor screens"
        role="combobox"
        aria-expanded=${i.length>0?"true":"false"}
        aria-controls="ec-search-results"
        aria-activedescendant=${o>=0?`ec-search-opt-${o}`:_}
        .value=${this._searchQuery}
        @input=${a=>{this._searchQuery=a.target.value,this._searchActive=0}}
        @keydown=${a=>this._onSearchKeydown(a,i)}
      />
      ${e?this._renderSearchResults(i):n`
      <div class="ec-nav-shell">
        <div class="ec-nav-rail">
          ${t.map(a=>n`
            <button class="ec-nav-tab${this._navTab===a.key?" active":""}"
              @click=${()=>{this._navTab=a.key,this._navPanel="",this._navPath=[]}}
            >
              <ha-icon icon=${a.icon}></ha-icon>
              <span>${a.label}</span>
              ${a.key==="settings"&&s>0?n`<span class="ec-nav-tab-badge"
                title="${s} configuration problem${s===1?"":"s"} — see Config Health">${s}</span>`:_}
            </button>
          `)}
        </div>
        <div class="ec-nav-list">${this._renderRibbonItems()}</div>
      </div>`}
    `}_renderPanelHost(){const t=h._PANEL_META[this._navPanel],e=this._navPath.length?this._navPath[this._navPath.length-1].label:t?.title??"";return n`
      <div class="ec-panel-header">
        <button class="ec-panel-back" @click=${()=>this._navBack()}>
          <ha-icon icon="mdi:arrow-left"></ha-icon> ${this._navPath.length?"Back":"Ribbon"}
        </button>
        <ha-icon class="ec-panel-header-icon" icon=${t?.icon??"mdi:tune"}></ha-icon>
        <span class="ec-panel-header-title" tabindex="-1">${e}</span>
        <div class="ec-panel-header-spacer"></div>
      </div>
      <div class="ec-panel-body"
        @scroll=${i=>this._panelScroll.set(this._navScrollKey(),i.target.scrollTop)}
      >
        ${(()=>{const i=this._navPath.length?this._navPath[this._navPath.length-1]?.hint:t?.desc;return i?n`<p class="ec-panel-desc">${i}</p>`:_})()}
        ${this._renderPanelBody()}
      </div>
    `}_renderPanelBody(){switch(this._navPanel){case"mosaic":return this._renderMosaicPanel();case"popover":return this._renderPopoverPanel();case"embedded":return this._renderEmbeddedPanel();case"flows":return this._renderFlowsRibbonPanel();case"zones":return this._renderZonesRibbonPanel();case"virtuals":return this._renderVirtualsRibbonPanel();case"canvas":return this._renderCanvasRibbonPanel();case"defaults":return this._renderDefaultsRibbonPanel();case"templates":return this._renderTemplatesRibbonPanel();case"health":return this._renderHealthPanel();default:return n``}}static _slotMap(t){const e=new Map;for(const i of t)for(const o of i.paths??[]){const s=o.split(".")[0];e.has(s)||e.set(s,i.key)}return e}static _labelMap(t){return new Map(t.map(e=>[e.key,e.label]))}_fieldSlotDefs(t){const e=h,i=[...this._fieldSectionDefs(t)];return t.type==="button_group"&&i.push(e._OPTION_LAYOUT_DEF),(t.type==="button_group"||t.type==="button")&&i.push(...e._fscsDefs(t.type==="button")),(t.type==="blank"||t.type==="rule")&&i.push(e._BLANK_RULE_DEF),i}static _healthOffered(){const t=Tt,e=_t;return{field:{type:[...Ht,"graph"],graph_type:Wt.map(i=>i.value),align:e,stat_characteristic:Bt.map(i=>i.value)},card:{anchor:t,align:e},extCard:{align:e},zone:{anchor:t},emb:{anchor:t},flow:{style:h._FLOW_STYLES},virtual:{op:h._VIRTUAL_OPS.map(i=>i.value)}}}_healthDefs(t,e){const i=h;switch(t){case"card":return i._CARD_SECTIONS;case"extCard":return i._POPOVER_CARD_SECTIONS;case"zone":return i._ZONE_SECTIONS;case"flow":return i._FLOW_SECTIONS;case"emb":return i._EMB_SECTIONS;case"canvas":return i._CANVAS_SECTIONS;case"field":return this._fieldSlotDefs(e);case"virtual":return this._virtualSectionDefs(e);default:return[]}}_healthContext(){const t=h;return{screens:(e,i)=>{const o=this._healthDefs(e,i);return{slots:t._slotMap(o),labels:t._labelMap(o)}},offered:t._healthOffered(),fieldName:e=>this._fieldName(e)}}_health(){const t=this._config,e=this.hass?.states,i=this._healthCache;if(i&&i.cfg===t&&i.states===e)return i.report;const o=zi(t,this.hass,this._healthContext());return this._healthCache={cfg:t,states:e,report:o},o}_healthRemovalScope(t){const e=this._config;if(!e)return;const i=(o,s)=>(o??[]).findIndex(a=>a.id===s);switch(t.kind){case"card":{const o=i(e.cards,t.itemId);return o<0?void 0:this._cardScope(o)}case"extCard":{const o=i(this._extCards(),t.itemId);return o<0?void 0:this._extCardScope(o)}case"field":{const o=t.extended?this._extCards():e.cards??[],s=i(o,t.cardId??"");if(s<0)return;const a=i(o[s]?.fields,t.itemId);return a<0?void 0:this._fieldScope(s,a,!!t.extended)}case"zone":{const o=i(this._zones(),t.itemId);return o<0?void 0:this._zoneScope(o)}case"flow":{const o=i(this._flows(),t.itemId);return o<0?void 0:this._flowScope(o)}case"emb":{const o=i(this._embCards(),t.itemId);return o<0?void 0:this._embScope(o)}case"virtual":{const o=i(this._virtuals(),t.itemId);return o<0?void 0:this._virtualScope(o)}default:return}}_healthRemove(t){const e=t.removal;if(!e)return;const i=this._healthRemovalScope(e);if(!i){this._showUndoToast("That item no longer exists — nothing removed");return}const o=i.root?.[e.key];window.confirm(`Remove “${e.key}” from the YAML?

${t.where}
Current value: ${JSON.stringify(o)??"unset"}

The key is deleted from the configuration and the slot falls back to whatever the defaults resolve. This editor has no screen for it, so putting it back means editing the YAML by hand.

Undo (Ctrl+Z) reverses this.`)&&(i.apply({[e.key]:void 0}),this._showUndoToast(`“${e.key}” removed`))}_healthIgnore(t,e){const i=this._config;if(!i)return;const o=i.health_ignore??[],s=e?o.includes(t)?o:[...o,t]:o.filter(a=>a!==t);this._emit(H(i,{health_ignore:s.length?s:void 0})),this._showUndoToast(e?"Row ignored":"Row restored")}_renderHealthPanel(){const t=this._health(),e=t.issues.filter(s=>!s.ignored),i=t.issues.filter(s=>s.ignored),o=Re.map(s=>({meta:s,rows:e.filter(a=>a.check===s.id)})).filter(s=>s.rows.length>0);return n`
      ${e.length===0?n`<ha-alert alert-type="success">${i.length?"No problems outside the ignored rows below.":"No problems found — every reference in this configuration resolves."}</ha-alert>`:_}
      ${o.map(s=>n`
        <div class="ec-section">
          <div class="ec-subsection-title ec-health-group-title">
            <ha-icon icon=${s.meta.icon}></ha-icon>
            <span>${s.meta.label}</span>
            <span class="ec-nav-card-badge">${s.rows.length}</span>
          </div>
          <p class="ec-hint">${s.meta.hint}</p>
          ${s.rows.map(a=>this._healthRow(a))}
        </div>
      `)}
      ${t.skipped.map(s=>n`<ha-alert alert-type="info">${s.reason}</ha-alert>`)}
      ${i.length?n`
        <div class="ec-section ec-health-ignored">
          <button class="ec-health-ignored-toggle"
            @click=${()=>{this._healthShowIgnored=!this._healthShowIgnored}}
          >
            <ha-icon icon=${this._healthShowIgnored?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            ${i.length} ignored — ${this._healthShowIgnored?"hide":"show"}
          </button>
          ${this._healthShowIgnored?i.map(s=>this._healthRow(s)):_}
        </div>
      `:_}
      ${t.coverage.map(s=>n`<p class="ec-hint ec-health-coverage">${s}</p>`)}
    `}_healthRow(t){const e=t.target;return n`
      <div class="ec-health-row ec-health-row--${t.severity}${t.ignored?" ec-health-row--ignored":""}">
        <button class="ec-health-row-body" ?disabled=${!e}
          title=${e?"Open the screen that owns this":"No screen holds this value"}
          @click=${()=>{e&&this._navigateTo(e.tab,e.panel,e.path)}}
        >
          <ha-icon class="ec-nav-card-icon"
            icon=${t.severity==="error"?"mdi:alert-circle-outline":"mdi:information-outline"}></ha-icon>
          <span class="ec-nav-card-text">
            <span class="ec-nav-card-label">${t.detail}</span>
            <span class="ec-health-row-where">${t.where}</span>
          </span>
          ${e?n`<ha-icon class="ec-nav-card-chevron" icon="mdi:chevron-right"></ha-icon>`:_}
        </button>
        <div class="ec-health-row-actions">
          ${t.removal&&!t.ignored?n`
            <button class="ec-health-btn ec-health-btn-remove"
              title="Delete this key from the YAML"
              @click=${()=>this._healthRemove(t)}
            >Remove</button>`:_}
          <button class="ec-health-btn ec-health-btn-ignore"
            title=${t.ignored?"Show this row again":"Hide this row from the Health screen"}
            @click=${()=>this._healthIgnore(t.id,!t.ignored)}
          >${t.ignored?"Un-ignore":"Ignore"}</button>
        </div>
      </div>
    `}_renderControls(){return n`
      <div class="ec-controls">
        ${this._renderBreadcrumb()}
        ${this._navPanel===""?this._renderRibbon():this._renderPanelHost()}
      </div>
    `}_renderMosaicPanel(){const t=this._config?.cards??[],e=this._navPath;if(e.length===0)return n`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addCard}>+ Mosaic Card</button>
        </div>
        ${t.length===0?this._emptyAdd("No mosaic cards yet — add one",()=>this._addCard()):t.map((a,r)=>this._itemCard({dragKey:`card:${r}`,icon:"mdi:view-dashboard",label:a.name??`Card ${r+1}`,sub:`${a.fields.length} field${a.fields.length===1?"":"s"}`,selected:r===this._selCard,multi:this._selCards.has(r),onClick:l=>{if(l.ctrlKey||l.metaKey){const c=new Set(this._selCards);c.has(r)?c.delete(r):c.add(r),this._selCards=c,this._selCard=r}else this._selCard=r,this._selField=-1,this._selCards=new Set([r]),this._navPush(`card:${a.id}`,a.name??`Card ${r+1}`)},actions:n`
                  ${this._copySourceId===a.id?n`<span class="ec-copy-badge">Copied</span>`:n`<button
                        class="ec-btn-copy"
                        @click=${l=>{l.stopPropagation(),this._copyFields(r)}}
                        title="Copy fields from this card"
                      >⎘</button>`}
                  ${this._copiedFields&&this._copySourceId!==a.id?n`<button
                        class="ec-btn-paste"
                        @click=${l=>{l.stopPropagation(),this._pasteFields(r)}}
                        title="Paste fields onto this card (adds to its existing fields)"
                      >⎗</button>`:_}
                  <button
                    class="ec-btn-dup"
                    @click=${l=>{l.stopPropagation(),this._duplicateCard(r)}}
                    title="Duplicate card"
                  >⧉</button>
                  <button
                    class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeCard(r)}}
                    title="Remove card"
                  >✕</button>
                `}))}
      `;const i=this._crumbIndex(e[0].key,t);this._selCard=i;const o=t[i];if(!o)return this._navDeadEnd();if(e.length===1)return n`
        ${this._cardSectionMenu(i)}
        ${this._renderFieldList(i,o)}
      `;const s=e[1].key;if(s.startsWith("field:")){const a=this._crumbIndex(s,o.fields);this._selField=a;const r=o.fields[a];if(!r)return this._navDeadEnd();if(e.length===4&&e[2].key==="fsec:series"&&e[3].key.startsWith("gs:")){const l=this._crumbIndex(e[3].key,r.graph_series);return this._selSeries=l,this._fieldSecGraphSeriesItem(i,a,r,l)}if(e.length===4&&e[2].key==="fsec:options"){if(e[3].key.startsWith("opt:")){const l=this._crumbIndex(e[3].key,r.options);return this._selOption=l,this._fieldSecOptionItem(i,a,r,l)}if(e[3].key==="optlayout")return n`
            ${this._clearOverridesBtn(h._OPTION_LAYOUT_DEF,this._fieldScope(i,a,!1))}
            <div class="ec-section">${this._optionLayoutEditor(r,this._updFor(i,a,!1),this._idFor(i,a,!1))}</div>
          `}return e.length===4&&e[2].key==="fsec:controlstyle"&&e[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(i,a,r,e[3].key):e.length===3?this._fieldSection(i,a,r,e[2].key):this._renderFieldPanel(i,a,r)}return this._cardSection(i,o,s)}_cardScope(t){return{root:this._config?.cards[t],apply:e=>this._updateCard(t,e)}}_cardSectionMenu(t){return this._navMenu(h._CARD_SECTIONS,this._cardScope(t))}_cardSection(t,e,i){const o=this._clearOverridesBtn(h._findDef(h._CARD_SECTIONS,i),this._cardScope(t));return n`${o}${(()=>{switch(i){case"sec:defaults":return this._cardSecDefaults(t,e);case"sec:style":return this._cardSecStyle(t,e);case"sec:text":return this._cardSecText(t,e);case"sec:visibility":return this._cardSecVisibility(t,e);case"sec:actions":return this._cardSecActions(t,e);case"sec:bg":return this._cardSecBg(t,e);default:return n``}})()}`}_cardSecDefaults(t,e){return n`
      <div class="ec-section">
        ${this._row("Name",n`<input class="ec-input" type="text" .value=${e.name??""}
            @change=${i=>this._updateCard(t,{name:i.target.value})}
          />`)}

        ${this._row("Anchor",n`<select class="ec-select"
            .value=${e.anchor??v("anchor")??"top-left"}
            @change=${i=>this._updateCard(t,{anchor:i.target.value})}
          >
            ${Tt.map(i=>n`<option value=${i} .selected=${(e.anchor??v("anchor")??"top-left")===i}>${Gt[i]}</option>`)}
          </select>`)}
        ${this._gridGeom()?n`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._row("Align",n`<select class="ec-select"
            .value=${e.align??v("align")??"left"}
            @change=${i=>this._updateCard(t,{align:i.target.value})}
          >
            ${_t.map(i=>n`<option value=${i} .selected=${(e.align??v("align")??"left")===i}>${i}</option>`)}
          </select>`)}

        ${this._optRow("Columns","1–8 content columns",e.columns===void 0,n`<select class="ec-select"
            .value=${String(e.columns??v("card_columns")??1)}
            @change=${i=>{const o=Number(i.target.value);this._updateCard(t,{columns:o})}}
          >
            <option value="1" .selected=${(e.columns??v("card_columns")??1)===1}>1</option>
            <option value="2" .selected=${(e.columns??v("card_columns")??1)===2}>2</option>
            <option value="3" .selected=${(e.columns??v("card_columns")??1)===3}>3</option>
            <option value="4" .selected=${(e.columns??v("card_columns")??1)===4}>4</option>
            <option value="5" .selected=${(e.columns??v("card_columns")??1)===5}>5</option>
            <option value="6" .selected=${(e.columns??v("card_columns")??1)===6}>6</option>
            <option value="7" .selected=${(e.columns??v("card_columns")??1)===7}>7</option>
            <option value="8" .selected=${(e.columns??v("card_columns")??1)===8}>8</option>
          </select>`,i=>this._updateCard(t,{columns:i?void 0:e.columns??v("card_columns")??1}))}

        ${this._gridGeom()?this._row("Columns (span)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(e.grid_span??1)}
            @change=${i=>{const o=this._gridGeom();if(!o)return;const s=Math.max(1,Math.min(o.cols,Number(i.target.value)||1)),a=Math.max(8,s*o.cellW-o.padding);this._updateCard(t,{grid_span:s,width:a})}}
          />`)}`):_}

        ${this._numRow("Width (px)",{value:e.width,onChange:i=>this._updateCard(t,{width:i}),min:20,placeholder:"auto"})}

        ${this._optRow("Field gap (px)","Vertical space between fields",e.field_gap===void 0,n`${this._numInput({value:e.field_gap??v("field_gap")??4,onChange:i=>this._updateCard(t,{field_gap:i}),min:0})}`,i=>this._updateCard(t,{field_gap:i?void 0:e.field_gap??v("field_gap")??4}))}

        ${this._optRow("Column gap (px)","Space between field columns",e.column_gap===void 0,n`${this._numInput({value:e.column_gap??v("column_gap")??3,onChange:i=>this._updateCard(t,{column_gap:i}),min:0})}`,i=>this._updateCard(t,{column_gap:i?void 0:e.column_gap??v("column_gap")??3}))}

        ${this._row("Transparent",n`<input type="checkbox" .checked=${e.transparent??!1}
            @change=${i=>this._updateCard(t,{transparent:i.target.checked||void 0})}
          />`)}
      </div>
    `}_cardSecVisibility(t,e){return n`
      <div class="ec-section">
        ${this._row("Entity",n`<ha-entity-picker
            .hass=${this.hass}
            .value=${e.visible_when?.entity??""}
            allow-custom-entity
            @value-changed=${i=>{const o=i.detail.value;o?this._updateCard(t,{visible_when:{entity:o,operator:e.visible_when?.operator??"==",value:e.visible_when?.value??"on"}}):this._updateCard(t,{visible_when:void 0})}}
          ></ha-entity-picker>`)}
        ${e.visible_when?n`
          ${this._row("Operator",n`<select class="ec-select"
              .value=${e.visible_when.operator}
              @change=${i=>this._updateCard(t,{visible_when:{...e.visible_when,operator:i.target.value}})}
            >
              ${[["==","Equals"],["!=","Not Equal"],[">","Greater Than"],["<","Less Than"],[">=","Greater Than - Equal To"],["<=","Less Than - Equal To"]].map(([i,o])=>n`<option value=${i} .selected=${e.visible_when.operator===i}>${o}</option>`)}
            </select>`)}
          ${this._row("Value",n`<input class="ec-input" type="text" .value=${e.visible_when.value}
              placeholder="on / off / 100 / home …"
              @change=${i=>this._updateCard(t,{visible_when:{...e.visible_when,value:i.target.value}})}
            />`)}
        `:_}
      </div>
    `}_cardSecStyle(t,e){return n`
      <div class="ec-section">
        ${e.transparent?n`<p class="ec-hint">This card is Transparent (set in Card Defaults) — box style is hidden while transparent.</p>`:n`
        ${this._row("Use global card style",n`<input type="checkbox" .checked=${e.box===void 0}
            @change=${i=>{i.target.checked?this._updateCard(t,{box:void 0}):this._updateCard(t,{box:{}})}}
          />`)}
        ${e.box!==void 0?n`
          <div class="ec-subsection-title">Box style</div>
          ${this._boxRows(`c${t}`,e.box,i=>this._updateCardBox(t,i))}
        `:_}
        `}
      </div>
    `}_cardSecText(t,e){return n`
      <div class="ec-section">
        ${this._row("Use global value style",n`<input type="checkbox" .checked=${e.value_style===void 0}
            @change=${i=>{i.target.checked?this._updateCard(t,{value_style:void 0}):this._updateCard(t,{value_style:{}})}}
          />`)}
        ${e.value_style!==void 0?n`
          <div class="ec-subsection-title">Value text style</div>
          ${this._textRows(`c${t}-vs`,e.value_style,i=>this._updateCard(t,{value_style:{...e.value_style,...i}}))}
        `:_}

        ${this._row("Use global label style",n`<input type="checkbox" .checked=${e.label_style===void 0}
            @change=${i=>{i.target.checked?this._updateCard(t,{label_style:void 0}):this._updateCard(t,{label_style:{}})}}
          />`)}
        ${e.label_style!==void 0?n`
          <div class="ec-subsection-title">Label text style</div>
          ${this._textRows(`c${t}-ls`,e.label_style,i=>this._updateCard(t,{label_style:{...e.label_style,...i}}))}
        `:_}
      </div>
    `}_cardSecActions(t,e){return n`
      <div class="ec-section">
        ${this._actionRows({tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},i=>this._updateCard(t,i))}
      </div>
    `}_cardSecBg(t,e){return n`
      <div class="ec-section">
            ${this._row("URL",n`<input class="ec-input" type="text"
                .value=${e.bg?.url??""}
                placeholder="/local/image.png or https://…"
                @change=${i=>{const o=i.target.value.trim();this._updateCard(t,{bg:o?{...e.bg,url:o}:void 0})}}
              />`)}
            ${e.bg?.url?n`
              ${this._row("Fit",n`<select class="ec-select"
                  .value=${e.bg.fit??"cover"}
                  @change=${i=>this._updateCard(t,{bg:{...e.bg,fit:i.target.value}})}
                >
                  <option value="cover"   .selected=${(e.bg.fit??"cover")==="cover"}>cover (fill &amp; crop)</option>
                  <option value="contain" .selected=${e.bg.fit==="contain"}>contain (letterbox)</option>
                  <option value="fill"    .selected=${e.bg.fit==="fill"}>fill (stretch)</option>
                  <option value="none"    .selected=${e.bg.fit==="none"}>none (natural size)</option>
                </select>`)}
              ${this._row("Opacity",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0" max="1" step="0.05"
                  .value=${String(e.bg.opacity??1)}
                  @change=${i=>{const o=parseFloat(i.target.value);this._updateCard(t,{bg:{...e.bg,opacity:isNaN(o)?void 0:Math.min(1,Math.max(0,o))}})}}
                />`)}`)}
              ${this._numRow("Width (px)",{value:e.bg.width,onChange:i=>this._updateCard(t,{bg:{...e.bg,width:i}}),min:1,placeholder:"fill card"})}
              ${this._numRow("Height (px)",{value:e.bg.height,onChange:i=>this._updateCard(t,{bg:{...e.bg,height:i}}),min:1,placeholder:"fill card"})}
              <div class="ec-subsection-title">Padding (px)</div>
              ${this._row("Top / Bottom",n`<div style="display:flex;gap:4px;">
                  ${this._numInput({value:e.bg.padding_top,onChange:i=>this._updateCard(t,{bg:{...e.bg,padding_top:i}}),min:0,placeholder:"Top"})}
                  ${this._numInput({value:e.bg.padding_bottom,onChange:i=>this._updateCard(t,{bg:{...e.bg,padding_bottom:i}}),min:0,placeholder:"Bottom"})}
                </div>`)}
              ${this._row("Left / Right",n`<div style="display:flex;gap:4px;">
                  ${this._numInput({value:e.bg.padding_left,onChange:i=>this._updateCard(t,{bg:{...e.bg,padding_left:i}}),min:0,placeholder:"Left"})}
                  ${this._numInput({value:e.bg.padding_right,onChange:i=>this._updateCard(t,{bg:{...e.bg,padding_right:i}}),min:0,placeholder:"Right"})}
                </div>`)}
            `:_}
      </div>
    `}_fieldName(t){return t.display_name??t.text??(t.entity?.startsWith("virtual:")?this._virtuals().find(e=>`virtual:${e.id}`===t.entity)?.name??t.entity:this.hass?.states[t.entity??""]?.attributes?.friendly_name??t.entity)??t.icon??"(untitled field)"}_fieldSub(t){const e=t.type==="graph"&&t.graph_type?t.graph_type:t.type==="svg"&&(t.shape||t.svg)?t.shape??t.svg.split("/").pop()?.replace(/\.svg$/i,"")??"":t.type==="embedded_card"&&t.embed_card_config?.type?String(t.embed_card_config.type):"";return`${t.column!=null?`C${t.column} · `:""}${zt[t.type]}${e?" · "+e:""}`}_renderFieldList(t,e){const i=e.fields;return n`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?n`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(t)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addField(t)}>+ Field</button>
        </div>
        ${this._listFilterBox(i.length)}
        ${i.length===0?this._emptyAdd("No fields yet — add one",()=>this._addField(t)):i.map((o,s)=>({f:o,fi:s})).filter(({f:o})=>{const s=this._currentListFilter();return!s||`${this._fieldName(o)} ${this._fieldSub(o)}`.toLowerCase().includes(s)}).map(({f:o,fi:s})=>this._itemCard({dragKey:`field:${t}:${s}`,icon:gt[o.type],label:this._fieldName(o),sub:this._fieldSub(o),selected:s===this._selField,onClick:()=>{this._selField=s,this._navPush(`field:${o.id}`,`Field ${s+1}`)},actions:n`
                  ${this._copiedFieldSrc?.isExt===!1&&this._copiedFieldSrc.cardId===e.id&&this._copiedFieldSrc.fieldId===o.id?n`<span class="ec-copy-badge">Copied</span>`:n`<button class="ec-btn-copy"
                        @click=${a=>{a.stopPropagation(),this._copyField(t,s,!1)}}
                        title="Copy this field">⎘</button>`}
                  <button class="ec-btn-dup"
                    @click=${a=>{a.stopPropagation(),this._duplicateField(t,s,!1)}}
                    title="Duplicate field">⧉</button>
                  <button class="ec-btn-remove"
                    @click=${a=>{a.stopPropagation(),this._removeField(t,s)}}
                    title="Remove">✕</button>
                `}))}
      </div>
    `}_isTimeUntilVirtual(t){if(!t.entity?.startsWith("virtual:"))return!1;const e=t.entity.slice(8);return this._config?.virtuals?.find(i=>i.id===e)?.op==="time_until"}_displayUnit(t,e){if(e!==void 0)return e;if(!t||t.startsWith("virtual:")||!this.hass)return"";const i=this.hass.states[t];if(!i)return"";const o=i.attributes?.unit_of_measurement??"";if((i.attributes?.device_class??"")==="power"){const a=this._config?.defaults?.power_unit;return a==="W"||a==="kW"?a:"W or kW"}return o==="kWh"||o==="MWh"?"kWh or MWh":o}_entityDecimalsHint(t){if(!t||t.startsWith("virtual:")||!this.hass)return;const i=this.hass.states[t]?.state?.match(/^-?\d+\.(\d+)$/);return i?i[1].length:void 0}_defaultStatType(t){if(!t||t.startsWith("virtual:")||!this.hass)return;const e=this.hass.states[t]?.attributes;if(!e)return;const i=e.state_class;if(i==="total"||i==="total_increasing")return"sum";if(i==="measurement")return"mean";const o=e.device_class;if(o&&h._SUM_DEVICE_CLASSES.has(o))return"sum"}_isThermometerSvg(t){return!!t.svg?.toLowerCase().includes("thermometer")}_isHorizontalThermometerSvg(t){return!!t.svg?.toLowerCase().includes("thermometer-horizontal")}_isBatterySvg(t){return!!t.svg?.toLowerCase().includes("battery")}_isInverterSvg(t){return!!t.svg?.toLowerCase().includes("inverter")}_isGaugeSvg(t){return!!t.svg?.toLowerCase().includes("gauge")}_elementLabel(t){return t.type==="graph"?Wt.find(e=>e.value===t.graph_type)?.label??t.graph_type??"Graph":t.svg?(t.svg.split("/").pop()?.replace(/\.svg$/i,"")??"").replace(/[-_]/g," ").replace(/\b\w/g,i=>i.toUpperCase())||"SVG element":"None selected"}_renderTuLayoutBuilder(t,e){const i=t.time_until_layout??[],o=c=>e({time_until_layout:[...i,c]}),s=c=>{const d=i.filter((p,u)=>u!==c);e({time_until_layout:d.length?d:void 0})},a=(c,d)=>{const p=[...i],u=c+d;u<0||u>=p.length||([p[c],p[u]]=[p[u],p[c]],e({time_until_layout:p}))},r=(c,d)=>{const p=[...i];p[c]={...p[c],...d},e({time_until_layout:p})},l=c=>c.type==="label"?n`<span class="ec-tu-chip ec-tu-chip--label">⏱ Time Until Label</span>`:c.type==="value"?n`<span class="ec-tu-chip ec-tu-chip--value">⟨value⟩</span>`:c.type==="newline"?n`<span class="ec-tu-chip ec-tu-chip--newline">↵ New Line</span>`:_;return n`
      <div class="ec-subsection-title">Time Until Layout</div>
      ${i.length===0?n`<p class="ec-empty">No items — use the buttons below to build the layout.</p>`:i.map((c,d)=>n`
            <div class="ec-list-row">
              <button class="ec-btn-reorder" ?disabled=${d===0}
                @click=${()=>a(d,-1)} title="Move up">▲</button>
              <button class="ec-btn-reorder" ?disabled=${d===i.length-1}
                @click=${()=>a(d,1)} title="Move down">▼</button>
              <span class="ec-list-label" style="flex:1;min-width:0;">
                ${c.type==="text"?n`<input class="ec-input" type="text" .value=${c.text??""}
                      placeholder="enter text"
                      @input=${p=>r(d,{text:p.target.value})}
                      style="width:100%;box-sizing:border-box;" />`:l(c)}
              </span>
              <button class="ec-btn-remove" @click=${()=>s(d)} title="Remove">✕</button>
            </div>
          `)}
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;">
        <button class="ec-btn-add" @click=${()=>o({type:"text",text:""})}>+ Text</button>
        <button class="ec-btn-add" @click=${()=>o({type:"label"})}>+ Label</button>
        <button class="ec-btn-add" @click=${()=>o({type:"newline"})}>↵ New Line</button>
        <button class="ec-btn-add" @click=${()=>o({type:"value"})}>+ Value</button>
      </div>
    `}_fieldHeader(t,e,i){return n`
        ${this._row("Type",n`<select class="ec-select"
            .value=${i.type==="graph"?"svg":i.type}
            @change=${o=>{const s=o.target.value;if(j(s)){const a=re(s);this._updateField(t,e,{type:s,...a?xt(s,a):{}})}else this._updateField(t,e,{type:s}),s==="svg"&&this._openGGPicker(t,e)}}
          >
            ${Ht.map(o=>n`<option value=${o} .selected=${(i.type==="graph"?"svg":i.type)===o}>${zt[o]}</option>`)}
          </select>`)}

        ${j(i.type)&&It(i.type).length>1?this._row("Variant",n`<select class="ec-select"
            .value=${i.variant??""}
            @change=${o=>{const s=o.target.value;this._updateField(t,e,xt(i.type,s))}}
          >
            ${this._variantOptions(i.type,i.variant)}
          </select>`):_}

        ${i.type==="svg"||i.type==="graph"?this._row("Element",n`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(i)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(t,e)}>Select SVG Element</button>
          </div>`):_}

        ${this._row("Display Name",n`<input class="ec-input" type="text"
            .value=${i.display_name??""}
            placeholder=${(i.entity&&!i.entity.startsWith("virtual:")?this.hass?.states[i.entity]?.attributes?.friendly_name:void 0)??"Friendly name for the field list"}
            @change=${o=>{const s=o.target.value.trim();this._updateField(t,e,{display_name:s===""?void 0:s})}}
          />`)}

        ${this._row("Column",n`<div style="display:flex;gap:4px;align-items:center">
            ${this._numWrap(n`<input class="ec-input ec-input-num-small" type="number" min="1" max="8"
              .value=${i.column!=null?String(i.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${o=>{const s=o.target.value;this._updateField(t,e,{column:s===""?void 0:Number(s)})}}
            />`)}
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            ${this._numWrap(n`<input class="ec-input ec-input-num-small" type="number" min="2" max="8"
              .value=${i.column_end!=null?String(i.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${o=>{const s=o.target.value;this._updateField(t,e,{column_end:s===""?void 0:Number(s)})}}
            />`)}
          </div>`)}
    `}_renderFieldPanel(t,e,i){return i.type==="blank"||i.type==="rule"?n`
        <div class="ec-section ec-section--fields">
          ${this._fieldHeader(t,e,i)}
          ${this._fieldSecBlankOrRule(t,e,i)}
        </div>
      `:n`
      <div class="ec-section ec-section--fields">
        ${this._fieldHeader(t,e,i)}
        ${this._fieldSectionMenu(i,t,e,!1)}
      </div>
    `}static _controlStylePathsFor(t){if(t==="button_group"||t==="button"){const i=t==="button"?"btn":"sel";return[...h._containerPathsForField(i),...J["sub:active"][i],...J["sub:inactive"][i]]}const e=ot;return[...ot.accent,...e[t]??[]]}static _containerPathsForField(t){return t==="btn"?Ni:J["sub:container"].sel}_fieldSectionDefs(t){const e=h,i=[],o=()=>{t.type==="button_group"&&(t.options_source??"entity")==="manual"||i.push({key:"fsec:control",label:"Entity & Action",hint:"Controlled entity + write action",icon:"mdi:database",terms:Rt,paths:["entity","read_attribute","control_service"]})},s=(a="Colors & container (override global)")=>{i.push({key:"fsec:controlstyle",label:"Control Style",hint:a,icon:"mdi:palette",paths:[...R("control_style",e._controlStylePathsFor(t.type)),...R("control_box",Ii)]})};if(t.type==="value"?(i.push({key:"fsec:source",label:"Value Source",hint:"Entity, virtual entity, time-until layout",icon:"mdi:database",paths:["entity","attribute"]}),i.push({key:"fsec:label",label:"Value Label",hint:"Optional label text & position",icon:"mdi:tag-text-outline",paths:["label","label_position","label_column"]})):t.type==="icon"?i.push({key:"fsec:icon",label:"Icon",hint:"mdi icon name",icon:"mdi:emoticon-outline",paths:["icon"]}):t.type==="label"?i.push({key:"fsec:content",label:"Content",hint:"Label text",icon:"mdi:format-text",paths:["text"]}):t.type==="svg"?(i.push({key:"fsec:source",label:"Value Source",hint:"Entity, fill source",icon:"mdi:database",paths:["entity","attribute","charging_entity","charging_attribute","tank_pct_entity","tank_pct_attribute","tank_volume_entity","tank_volume_attribute","tank_capacity_entity","tank_capacity_attribute"]}),this._isInverterSvg(t)||i.push({key:"fsec:range",label:"Range",hint:"Min / max value",icon:"mdi:arrow-expand-vertical",paths:["min","max"]}),i.push({key:"fsec:colors",label:"Colors",hint:"Fill direction, fill, gradient, svg color",icon:"mdi:palette",terms:"direction up down left right graduated tank line",paths:["fill_direction","fill_color","fill_color2","tank_color"]}),i.push({key:"fsec:size",label:"Size",hint:"Height, width",icon:"mdi:resize",paths:["width","height"]}),this._isInverterSvg(t)||i.push({key:"fsec:thresholds",label:"Color Thresholds",hint:"Value-driven fill color overrides",icon:"mdi:format-color-fill",paths:["thresholds"]}),this._isGaugeSvg(t)&&i.push({key:"fsec:gauge",label:"Gauge Labels",hint:"Min/max labels, value display",icon:"mdi:speedometer",terms:"size color centre center show current",paths:["gauge_min_label","gauge_max_label","gauge_show_value","gauge_label_size","gauge_label_color"]}),this._isThermometerSvg(t)&&i.push({key:"fsec:thermo",label:"Thermometer",hint:"Ticks, grid, temperature text",icon:"mdi:thermometer",terms:qt,paths:e._THERMO_PATHS})):t.type==="graph"?(i.push({key:"fsec:graph",label:"Graph Settings",hint:"Type, axes, legend, range, size",icon:"mdi:chart-bar",terms:"type axes legend min max width height history hours stroke fill opacity bar line stacked timeline gauge needle",paths:["graph_type","graph_show_axes","graph_show_legend","graph_min","graph_max","graph_hours","graph_stroke_width","graph_fill_opacity","width","height"]}),i.push({key:"fsec:series",label:"Series",hint:"Entities plotted on the graph",icon:"mdi:chart-line",paths:["graph_series"]}),i.push({key:"fsec:graphchrome",label:"Graph Chrome",hint:"Axis, grid, labels, gauge track, palette",icon:"mdi:format-paint",terms:"axis grid gridline zero baseline label unit legend track gauge palette colour color size",paths:e._GRAPH_CHROME_PATHS})):t.type==="embedded_card"?i.push({key:"fsec:embed",label:"Embedded Card",hint:"Card type, width, transparency",icon:"mdi:widgets",paths:["embed_card_config","width","embed_transparent","extra_css"]}):t.type==="toggle"?(o(),s()):t.type==="slider"?(o(),i.push({key:"fsec:sliderrange",label:"Range",hint:"Min / max / step, show value, unit",icon:"mdi:arrow-expand-horizontal",paths:["min","max","step","unit","show_value"]}),s()):t.type==="dropdown"||t.type==="button_group"?(o(),i.push({key:"fsec:options",label:"Options",hint:"Option source & manual list",icon:"mdi:format-list-bulleted",paths:["options_source","options_attribute","options","placeholder"]}),s()):t.type==="input"?(o(),i.push({key:"fsec:input",label:"Input",hint:"Mode, submit timing, placeholder",icon:"mdi:form-textbox",paths:["submit_on","placeholder","input_maxlength","input_password"]}),s()):t.type==="spinbox"?(o(),i.push({key:"fsec:sliderrange",label:"Range",hint:"Min / max / step, unit",icon:"mdi:arrow-expand-horizontal",paths:["min","max","step","unit","spinbox_decimals"]}),s()):t.type==="button"&&(o(),i.push({key:"fsec:options",label:"Button Layout",hint:"Icon & state position, text styles",icon:"mdi:gesture-tap-button",paths:["label","icon","button_value",...h._OPTION_LAYOUT_KEYS,...R("control_style",te)]}),s("Colors, border, padding (override global)")),j(t.type)&&i.push({key:"fsec:labels",label:"Labels",hint:"Icon + text rows around the control",icon:"mdi:label-outline",paths:["control_labels","control_labels_position","control_labels_gap","align"]}),t.type==="slider"&&i.push({key:"fsec:sliderpoints",label:"Track Labels",hint:"Left / center / right labels",icon:"mdi:format-horizontal-align-center",paths:["slider_labels"]}),(t.type==="value"||t.type==="icon")&&(i.push({key:"fsec:stats",label:"HA Statistics",hint:"Advanced statistics integration",icon:"mdi:chart-box-outline",paths:e._STAT_PATHS}),i.push({key:"fsec:display",label:"Display",hint:"Unit, decimals, hide below",icon:"mdi:eye-outline",paths:["unit","decimals","hide_below","show_time_until_label"]})),t.type!=="embedded_card"&&t.type!=="blank"&&t.type!=="rule"){const a=[...R("style",Ai),"extra_css"];j(t.type)||a.push("align"),i.push({key:"fsec:style",label:"Text Style",hint:"Align & value/label text style",icon:"mdi:format-title",terms:bt,paths:a}),j(t.type)||i.push({key:"fsec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Rt,paths:Jt})}return i}_fieldScope(t,e,i){const o=this._updFor(t,e,i);return{root:(i?this._extCards()[t]:this._config?.cards[t])?.fields[e],apply:o}}_fieldSectionMenu(t,e=-1,i=-1,o=!1){return this._navMenu(this._fieldSectionDefs(t),e<0?void 0:this._fieldScope(e,i,o))}_fieldSection(t,e,i,o,s=!1){return n`
      ${this._clearOverridesBtn(h._findDef(this._fieldSectionDefs(i),o),this._fieldScope(t,e,s))}
      ${this._fieldSectionBody(t,e,i,o,s)}
    `}_fieldSectionBody(t,e,i,o,s){switch(o){case"fsec:source":return i.type==="svg"?this._fieldSecSvgSource(t,e,i,s):this._fieldSecValueSource(t,e,i,s);case"fsec:control":return this._fieldSecControlSource(t,e,i,s);case"fsec:embed":return this._fieldSecEmbed(t,e,i,s);case"fsec:sliderrange":return this._fieldSecSliderRange(t,e,i,s);case"fsec:options":return this._fieldSecOptions(t,e,i,s);case"fsec:input":return this._fieldSecInput(t,e,i,s);case"fsec:controlstyle":return this._fieldSecControlStyle(t,e,i,s);case"fsec:labels":return this._fieldSecControlLabels(t,e,i,s);case"fsec:sliderpoints":return this._fieldSecSliderPoints(t,e,i,s);case"fsec:label":return this._fieldSecValueLabel(t,e,i,s);case"fsec:icon":return this._fieldSecIcon(t,e,i,s);case"fsec:content":return this._fieldSecLabelContent(t,e,i,s);case"fsec:range":return this._fieldSecSvgRange(t,e,i,s);case"fsec:colors":return this._fieldSecSvgColors(t,e,i,s);case"fsec:size":return this._fieldSecSvgSize(t,e,i,s);case"fsec:thresholds":return this._fieldSecSvgThresholds(t,e,i,s);case"fsec:gauge":return this._fieldSecSvgGauge(t,e,i,s);case"fsec:thermo":return this._fieldSecSvgThermo(t,e,i,s);case"fsec:graph":return this._fieldSecGraphSettings(t,e,i,s);case"fsec:series":return this._fieldSecGraphSeries(t,e,i,s);case"fsec:graphchrome":return this._fieldSecGraphChrome(t,e,i,s);case"fsec:stats":return this._fieldSecStats(t,e,i,s);case"fsec:display":return this._fieldSecDisplay(t,e,i,s);case"fsec:style":return this._fieldSecStyle(t,e,i,s);case"fsec:actions":return this._fieldSecActions(t,e,i,s);default:return n``}}_fieldSecBlankOrRule(t,e,i,o=!1){const s=this._updFor(t,e,o);return i.type!=="blank"?n`<p class="ec-hint">Horizontal rule — no options.</p>`:n`
        ${this._numRow("Gap (px)",{value:i.blank_gap,onChange:a=>s({blank_gap:a}),min:0,placeholder:"10"})}
    `}_updFor(t,e,i){return o=>i?this._updateExtField(t,e,o):this._updateField(t,e,o)}_fieldSecEmbed(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?{kind:"extfield",ci:t,fi:e}:{kind:"field",ci:t,fi:e},r=i.embed_card_config?.type?String(i.embed_card_config.type):"";return n`
      <div class="ec-section">
        ${this._row("Card Type",n`<span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${r||n`<span style="color:#555;font-style:italic;">not set</span>`}
          </span>`)}
        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker(a)}>
            ${r?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor(a)}>
            Edit Config…
          </button>
        </div>
        ${this._row("Width (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(i.width??300)}
            @change=${l=>s({width:Number(l.target.value)})}
          />`)}`)}
        <p class="ec-hint">Height is automatic — the embedded card sizes itself.</p>
        ${this._row("Transparent",n`<input type="checkbox" .checked=${i.embed_transparent??!1}
            @change=${l=>s({embed_transparent:l.target.checked})}
          />`)}
        ${this._cssRow(i.extra_css,l=>s({extra_css:l}))}
      </div>
    `}_idFor(t,e,i){const s=(i?this._extCards()[t]:this._config?.cards[t])?.fields[e]?.id,a=i?"e":"c";return s?`${a}${s}`:`${a}${t}f${e}`}_derivedService(t){const e=t.entity?.split(".")[0];if(!e)return"";const i=(...o)=>o.includes(e);switch(t.type){case"toggle":case"button":return"homeassistant.turn_on / turn_off";case"slider":case"spinbox":return i("input_number","number","counter")?`${e}.set_value`:"";case"dropdown":case"button_group":case"input":return i("input_select","select")?`${e}.select_option`:i("input_text","text")?`${e}.set_value`:"";default:return""}}_fieldSecControlSource(t,e,i,o=!1){const s=this._updFor(t,e,o),a=this._derivedService(i);return n`
      <div class="ec-section">
        ${this._entitySelector({entity:i.entity,onEntity:r=>s({entity:r}),attribute:i.read_attribute,onAttribute:r=>s({read_attribute:r}),attributePlaceholder:Be(i.options_attribute)})}
        <p class="ec-hint">The entity this control reads its value from and writes back to.</p>

        <div class="ec-subsection-title">When the value changes</div>
        <p class="ec-hint">Leave blank to drive the entity from its domain — a light toggles, an <code>input_number</code> takes a value, an <code>input_select</code> picks an option. Set one only when you need something else, e.g. <code>light.turn_on</code> to drive brightness rather than on/off. Variants like Brightness and Volume fill this in for you.</p>
        <p class="ec-hint">An option with its own entity ignores this and always uses that entity's domain default.</p>
        ${this._row("Action",n`<ha-service-picker
          .hass=${this.hass}
          .value=${i.control_service??""}
          placeholder=${a||"no automatic action for this entity"}
          @value-changed=${r=>{const l=r.detail.value;s({control_service:l||void 0})}}
        ></ha-service-picker>`)}

        ${this._saveAsVariantRows(i,this._idFor(t,e,o))}
      </div>
    `}_saveAsVariantRows(t,e){if(!j(t.type))return n``;if(!(this._saveVariantFor===e))return n`
        <div class="ec-subsection-title">Save as Variant</div>
        <p class="ec-hint">Store this field's settings as a reusable variant on this card. It then appears under <b>Custom</b> in every control field's Variant dropdown.</p>
        <button class="ec-btn-add" style="width:100%;"
          @click=${()=>{this._saveVariantFor=e,this._saveVariantLabel="",this._variantError=""}}
        >＋ Save as Variant…</button>
      `;const o=()=>{const s=this._saveVariantLabel.trim();if(!s){this._variantError="Label is required.";return}const a=t.type,r=At(a,s),l=le(t);this._updateVariants(a,c=>[...c,{id:r,label:s,...t.icon?{icon:t.icon}:{},...Object.keys(l).length?{preset:l}:{}}]),this._saveVariantFor="",this._saveVariantLabel="",this._variantError=""};return n`
      <div class="ec-subsection-title">Save as Variant</div>
      ${this._row("Label",n`<input class="ec-input" type="text" autofocus
          placeholder="e.g. Bedroom Dimmer"
          .value=${this._saveVariantLabel}
          @input=${s=>{this._saveVariantLabel=s.target.value}}
          @keydown=${s=>{s.key==="Enter"&&o()}}
        />`)}
      <p class="ec-hint">
        Saves ${Object.keys(le(t)).length} setting(s) from this field.
        Id will be <code>${this._saveVariantLabel.trim()?At(t.type,this._saveVariantLabel):"…"}</code>.
        The entity itself is not saved — a variant is a behaviour preset, not a binding.
      </p>
      ${this._variantError?n`<p style="color:#f44;font-size:12px;margin:0 0 6px;">${this._variantError}</p>`:_}
      <div style="display:flex;gap:6px;">
        <button class="ec-btn-add" style="flex:1;" @click=${o}>Save</button>
        <button class="ec-btn-add" style="flex:0 0 auto;"
          @click=${()=>{this._saveVariantFor="",this._variantError=""}}
        >Cancel</button>
      </div>
    `}_numberEntityRange(t){if(!t||!t.startsWith("number.")&&!t.startsWith("input_number.")||!this.hass)return{};const e=this.hass.states[t]?.attributes;if(!e)return{};const i=o=>typeof o=="number"?o:void 0;return{min:i(e.min),max:i(e.max),step:i(e.step)}}_fieldSecSliderRange(t,e,i,o=!1){const s=this._updFor(t,e,o),a=this._numberEntityRange(i.entity),r=(l,c,d)=>this._numRow(l,{value:i[c],onChange:p=>s({[c]:p}),placeholder:a[c]?.toString()??d});return n`
      <div class="ec-section">
        ${r("Min","min","0")}
        ${r("Max","max","100")}
        ${r("Step","step","1")}
        ${i.type==="spinbox"?this._controlNumRow("Decimals",i.spinbox_decimals,"auto",l=>s({spinbox_decimals:l}),0):_}
        ${this._row("Unit",n`<input class="ec-input" type="text" .value=${i.unit??""}
            placeholder=${this._displayUnit(i.entity,void 0)||"e.g. %"}
            @change=${l=>{const c=l.target.value;s({unit:c===""?void 0:c})}} />`)}
        ${i.type==="slider"?this._row("Show value",n`<input type="checkbox" class="ec-checkbox"
            .checked=${i.show_value??!0}
            @change=${l=>s({show_value:l.target.checked})} />`):_}
      </div>
    `}_controlLabelEditor(t,e,i){return n`
      ${this._row("Icon",this._iconPicker(e.icon,o=>i({icon:o})))}
      ${this._row("Text",n`<input class="ec-input" type="text" .value=${e.text??""}
          @change=${o=>{const s=o.target.value;i({text:s||void 0})}} />`)}
      <div class="ec-subsection-title">Text style</div>
      ${this._textRows(`${t}-st`,e.style??{},o=>i({style:{...e.style,...o}}),!1)}
    `}_fieldSecControlLabels(t,e,i,o=!1){const s=this._updFor(t,e,o),a=i.control_labels??[],r=c=>s({control_labels:c.length?c:void 0}),l=i.control_labels_position??"above";return n`
      <div class="ec-section">
        <p class="ec-hint">Stacked icon + text rows placed around the control. Each row has its own text style.</p>
        ${this._row("Position",n`<select class="ec-select" .value=${l}
            @change=${c=>s({control_labels_position:c.target.value})}
          >
            ${["above","below","left","right"].map(c=>n`<option value=${c} .selected=${l===c}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`)}
          </select>`)}
        ${this._row("Alignment",n`<select class="ec-select" .value=${i.align??"left"}
            @change=${c=>s({align:c.target.value})}
          >
            ${_t.map(c=>n`<option value=${c} .selected=${(i.align??"left")===c}>${c}</option>`)}
          </select>`)}
        <p class="ec-hint">Horizontal placement of the label rows against the control — <b>Position</b> covers where they sit. Above or below, the rows align to the control's width; beside it, they align to each other.</p>
        ${this._controlNumRow("Gap to control (px)",i.control_labels_gap,String(this._config?.defaults?.control_gap??v("control_gap")??4),c=>s({control_labels_gap:c}),0)}
        ${a.length===0?n`<p class="ec-empty">No label rows — click "+ Label row".</p>`:_}
        ${a.map((c,d)=>n`
          <div class="ec-section-header">
            <span class="ec-section-title">Row ${d+1}</span>
            <button class="ec-btn-remove" title="Remove row" @click=${()=>r(a.filter((p,u)=>u!==d))}>✕</button>
          </div>
          ${this._controlLabelEditor(`${this._idFor(t,e,o)}-lbl${d}`,c,p=>{const u=[...a];u[d]={...c,...p},r(u)})}
        `)}
        <button class="ec-btn-add" @click=${()=>r([...a,{}])}>+ Label row</button>
      </div>
    `}_fieldSecSliderPoints(t,e,i,o=!1){const s=this._updFor(t,e,o),a=i.slider_labels??{},r=(l,c)=>s({slider_labels:{...a,[l]:{...a[l],...c}}});return n`
      <div class="ec-section">
        <p class="ec-hint">Labels anchored to the track — left (min), center, right (max). Each has its own text style and optional live value.</p>
        ${["left","center","right"].map(l=>{const c=a[l]??{},d=`${this._idFor(t,e,o)}-pt-${l}`;return n`
            <div class="ec-slider-pt">
              <div class="ec-section-header"><span class="ec-section-title">${l.charAt(0).toUpperCase()+l.slice(1)}</span></div>
              ${this._entitySelector({label:"Value entity",entity:c.entity,onEntity:p=>r(l,{entity:p}),attribute:c.attribute,onAttribute:p=>r(l,{attribute:p})})}
              ${c.entity?n`<p class="ec-hint">Showing this entity's live value instead of Text below.</p>`:_}
              ${l!=="center"?this._controlNumRow("Gap from edge (px)",c.gap,"0",p=>r(l,{gap:p}),0):_}
              ${this._controlLabelEditor(d,c,p=>r(l,p))}
            </div>
          `})}
      </div>
    `}_fieldSecOptions(t,e,i,o=!1){const s=this._updFor(t,e,o),a=i.options_source??"entity",r=i.options??[],l=d=>s({options:d.length?d:void 0}),c=o?"eopt":"opt";return i.type==="button"?n`<div class="ec-section">
        <p class="ec-hint">A button is a single cell. Its icon, label and state come from the field's own <b>Entity &amp; Action</b> settings; the layout below places them.</p>
        ${this._row("Label",n`<input class="ec-input" type="text" .value=${i.label??""}
            @change=${d=>{const p=d.target.value;s({label:p||void 0})}} />`)}
        ${this._row("Icon",this._iconPicker(i.icon,d=>s({icon:d}),"from entity state"))}
        ${this._row("Press writes",n`<input class="ec-input" type="text" placeholder="toggle the entity" .value=${i.button_value??""}
            @change=${d=>{const p=d.target.value.trim();s({button_value:p||void 0})}} />`)}
        <p class="ec-hint">Leave <b>Press writes</b> blank to toggle the entity with its domain default action. Set a value and the button writes that instead, showing as active while the entity's state matches it.</p>
        ${this._optionLayoutEditor(i,s,this._idFor(t,e,o))}
      </div>`:n`
      <div class="ec-section">
        ${this._row("Options source",n`<select class="ec-select" .value=${a}
            @change=${d=>s({options_source:d.target.value})}
          >
            <option value="entity" .selected=${a==="entity"}>From entity</option>
            <option value="manual" .selected=${a==="manual"}>Manual list</option>
          </select>`)}
        <p class="ec-hint"><b>From entity</b> reads the choices the entity itself offers (an <code>input_select</code>'s options, a light's effects, a climate's modes). <b>Manual list</b> lets you write your own options — the only source that can give an option its own entity, icon or line.</p>
        ${_}
        ${i.type==="dropdown"?this._row("Placeholder",n`<input class="ec-input" type="text" .value=${i.placeholder??""} placeholder="—"
            @change=${d=>{const p=d.target.value;s({placeholder:p===""?void 0:p})}}
          />`):_}
        ${i.type==="dropdown"?n`<p class="ec-hint">Shown on the closed dropdown when the entity's state doesn't match any option — usually because it is unavailable or mid-change.</p>`:_}
        ${a==="entity"?n`
            ${this._row("Options attribute",n`<input class="ec-input" type="text" placeholder="options" .value=${i.options_attribute??""}
                @change=${d=>{const p=d.target.value.trim();s({options_attribute:p||void 0})}} />`)}
            <p class="ec-hint">Entity attribute holding the option list — e.g. <code>options</code>, <code>effect_list</code>, <code>source_list</code>, <code>hvac_modes</code>.</p>`:n`
            <div class="ec-subsection-title">Options — drag to reorder</div>
            <p class="ec-hint">Each option opens its own screen. Leave its <b>Entity</b> blank for a normal option that writes its value to the field's entity; set one and the option acts on <i>that</i> entity instead, showing its state and state icon — so one button group can drive several lights.</p>
            ${r.length===0?this._emptyAdd("No options yet — add one",()=>l([...r,{}])):r.map((d,p)=>this._itemCard({dragKey:`${c}:${t}:${e}:${p}`,icon:d.icon||(d.entity?"mdi:link-variant":"mdi:format-list-bulleted"),label:h._optionName(d,p),sub:h._optionSub(d),selected:p===(o?this._selExtOption:this._selOption),onClick:()=>{o?this._selExtOption=p:this._selOption=p,this._navPush(`${c}:${p}`,h._optionName(d,p))},actions:n`
                    <button class="ec-btn-copy" title="Copy this option"
                      @click=${u=>{u.stopPropagation(),this._copiedOption={...d}}}>⎘</button>
                    <button class="ec-btn-remove" title="Remove option"
                      @click=${u=>{u.stopPropagation(),l(r.filter((g,m)=>m!==p))}}>✕</button>
                  `}))}
            <div style="display:flex;gap:6px;margin-top:6px;">
              <button class="ec-btn-add" @click=${()=>l([...r,{}])}>+ Option</button>
              ${this._copiedOption?n`<button class="ec-btn-paste"
                @click=${()=>l([...r,{...this._copiedOption}])}
                title="Paste copied option">⎗ Option</button>`:_}
            </div>
            <p class="ec-hint"><b>Line</b> groups options into rows — options sharing a line number render on the same line, in order. Blank = line 1.</p>
          `}
        ${i.type==="button_group"?n`
          <div class="ec-subsection-title">Layout</div>
          ${(()=>{const d=h._OPTION_LAYOUT_DEF;return this._navBtn(d.key,d.label,d.hint,d.icon,Ct(i,d.paths))})()}
        `:_}
      </div>
    `}static _optionName(t,e){return t.label||t.value||t.entity||`Option ${e+1}`}static _optionSub(t){const e=[];return t.label&&t.value&&e.push(t.value),t.entity?e.push(t.entity):(t.value||t.label)&&e.push("writes to the field's entity"),t.line&&t.line>1&&e.push(`line ${t.line}`),(t.tap_action||t.hold_action||t.double_tap_action)&&e.push("has actions"),e.join(" · ")}_fieldSecOptionItem(t,e,i,o,s=!1){const a=this._updFor(t,e,s),r=i.options??[],l=r[o];if(!l)return this._navDeadEnd();const c=d=>{const p=[...r];p[o]={...l,...d},a({options:p})};return n`
      <div class="ec-section">
        ${this._row("Value",n`<input class="ec-input" type="text" placeholder="written to the entity" .value=${l.value??""}
            @change=${d=>{const p=d.target.value;c({value:p||void 0})}} />`)}
        ${this._row("Label",n`<input class="ec-input" type="text" placeholder="optional" .value=${l.label??""}
            @change=${d=>{const p=d.target.value;c({label:p||void 0})}} />`)}
        ${this._entitySelector({entity:l.entity,onEntity:d=>c({entity:d}),attribute:l.attribute,onAttribute:d=>c({attribute:d})})}
        <p class="ec-hint">Leave <b>Entity</b> blank and this option writes its value to the field's entity. Set one and it acts on that entity instead, with its domain default action.</p>
        ${this._row("Icon",this._iconPicker(l.icon,d=>c({icon:d}),"from entity state"))}
        ${this._controlNumRow("Line",l.line,"1",d=>c({line:d}),1)}
        ${i.type==="button_group"?n`
          <div class="ec-subsection-title">Cell layout</div>
          <p class="ec-hint">Overrides this option's placement only. <b>Inherit</b> follows the field's Option Layout.</p>
          ${this._row("Icon position",this._optionPosSelect(l.icon_position,d=>c({icon_position:d}),"Inherit"))}
          ${this._row("Show state",n`<select class="ec-select" .value=${l.show_state===void 0?"":l.show_state?"y":"n"}
              @change=${d=>{const p=d.target.value;c({show_state:p===""?void 0:p==="y"})}}
            >
              <option value="" .selected=${l.show_state===void 0}>Inherit</option>
              <option value="y" .selected=${l.show_state===!0}>Show</option>
              <option value="n" .selected=${l.show_state===!1}>Hide</option>
            </select>`)}
          ${l.show_state??i.option_show_state?this._row("State position",this._optionPosSelect(l.state_position,d=>c({state_position:d}),"Inherit")):_}
          <div class="ec-subsection-title">Actions</div>
          <p class="ec-hint">Run instead of this option's normal write. In a Perform Action's data, type <code>{{value}}</code> into any field to send this option's own value instead of a fixed one — typing it switches that field to free text, same as a template in the automation editor.</p>
          ${this._actionRows({tap_action:l.tap_action,hold_action:l.hold_action,double_tap_action:l.double_tap_action},d=>c(d))}
        `:_}
      </div>
    `}_optionPosSelect(t,e,i){const o=["above","below","left","right"],s=a=>a[0].toUpperCase()+a.slice(1);return n`<select class="ec-select" .value=${t??""}
      @change=${a=>{const r=a.target.value;e(r===""?void 0:r)}}
    >
      ${i?n`<option value="" .selected=${t===void 0}>${i}</option>`:_}
      ${o.map(a=>n`<option value=${a} .selected=${t===a}>${s(a)}</option>`)}
    </select>`}_optionLayoutEditor(t,e,i="f"){const o=(t.type==="button"?this._config?.defaults?.button_option_layout:this._config?.defaults?.option_layout)??{},s=h._OPTION_LAYOUT_KEYS.some(l=>t[l]!==void 0),a=h.SEPARATION_KEYS.some(l=>t.control_style?.[l]!==void 0),r=!s&&!a&&!this._optionLayoutOn.has(i);return n`
      <div class="ec-subsection-title">Option layout</div>
      ${this._row("Use global option layout",n`<input type="checkbox" .checked=${r}
          @change=${l=>{if(l.target.checked){this._optionLayoutOn.delete(i);const c={...t.control_style};for(const d of h.SEPARATION_KEYS)delete c[d];e({...Object.fromEntries(h._OPTION_LAYOUT_KEYS.map(d=>[d,void 0])),control_style:Object.keys(c).length?c:void 0})}else this._optionLayoutOn.add(i);this.requestUpdate()}}
        />`)}
      <p class="ec-hint">Inherits <b>Settings ▸ Global Defaults ▸ Control Default ▸ ${t.type==="button"?"Button":"Button Group"} ▸ Field Container</b>. Untick to set this field's own layout; each option can still override it individually.</p>
      ${r?_:this._optionLayoutRows({icon_position:t.option_icon_position,show_state:t.option_show_state,state_position:t.option_state_position,icon_style:t.option_icon_style,label_style:t.option_label_style,state_style:t.option_state_style},l=>{const c={};"icon_position"in l&&(c.option_icon_position=l.icon_position),"show_state"in l&&(c.option_show_state=l.show_state),"state_position"in l&&(c.option_state_position=l.state_position),"icon_style"in l&&(c.option_icon_style=l.icon_style),"label_style"in l&&(c.option_label_style=l.label_style),"state_style"in l&&(c.option_state_style=l.state_style),e(c)},`${i}-ol`,o)}
      ${r?_:this._optionSeparationRows(t.control_style??{},l=>e({control_style:{...t.control_style,...l}}),t.type==="button")}
    `}_optionLayoutRows(t,e,i,o={}){const s=t.show_state??o.show_state??!1;return n`
      <p class="ec-hint">The label is the anchor; the icon and state value sit around it. <b>Above</b> / <b>Below</b> take their own line, <b>Left</b> / <b>Right</b> share the label's line.</p>
      ${this._row("Icon position",this._optionPosSelect(t.icon_position??o.icon_position??"left",a=>e({icon_position:a})))}
      ${this._row("Show state value",n`<input type="checkbox" .checked=${s}
          @change=${a=>e({show_state:a.target.checked||void 0})}
        />`)}
      <p class="ec-hint">The state value comes from the option's own entity, so options need an entity for this to show anything.</p>
      ${s?this._row("State position",this._optionPosSelect(t.state_position??o.state_position??"below",a=>e({state_position:a}))):_}

      <p class="ec-hint">Weight and font for the text parts. <b>Colors and sizes</b> are set per state in <b>Active</b> / <b>Inactive State</b>.</p>
      <div class="ec-subsection-title">Icon style</div>
      ${this._textRows(`${i}-icon`,t.icon_style??{},a=>e({icon_style:{...t.icon_style,...a}}),!1,!1,!1)}
      <div class="ec-subsection-title">Label style</div>
      ${this._textRows(`${i}-label`,t.label_style??{},a=>e({label_style:{...t.label_style,...a}}),!1,!1,!1)}
      ${s?n`
        <div class="ec-subsection-title">State style</div>
        ${this._textRows(`${i}-state`,t.state_style??{},a=>e({state_style:{...t.state_style,...a}}),!1,!1,!1)}
      `:_}
    `}_fieldSecInput(t,e,i,o=!1){const s=this._updFor(t,e,o),a=i.submit_on??"change";return n`
      <div class="ec-section">
        ${this._row("Submit on",n`<select class="ec-select" .value=${a}
            @change=${r=>s({submit_on:r.target.value})}
          >
            <option value="change" .selected=${a==="change"}>Change (click away or Enter)</option>
            <option value="blur" .selected=${a==="blur"}>Click away</option>
            <option value="enter" .selected=${a==="enter"}>Enter only</option>
          </select>`)}
        ${this._row("Placeholder",n`<input class="ec-input" type="text" .value=${i.placeholder??""}
            @change=${r=>{const l=r.target.value;s({placeholder:l===""?void 0:l})}}
          />`)}
        ${this._controlNumRow("Max length",i.input_maxlength,"no limit",r=>s({input_maxlength:r}),1)}
        ${this._row("Password field",n`<input type="checkbox" .checked=${i.input_password??!1}
            @change=${r=>s({input_password:r.target.checked||void 0})}
          />`)}
      </div>
    `}_fieldSecValueSource(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          ${this._entitySelector({entity:i.entity,onEntity:a=>s({entity:a}),attribute:i.attribute,onAttribute:a=>s({attribute:a})})}
          ${this._isTimeUntilVirtual(i)?this._renderTuLayoutBuilder(i,a=>s(a)):_}
      </div>
    `}_fieldSecValueLabel(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          ${this._row("Value Label (Optional)",n`<input class="ec-input" type="text" .value=${i.label??""}
              placeholder="(optional)"
              @input=${a=>{const r=a.target.value;s({label:r||void 0})}}
            />`)}
          ${i.label?n`
            ${this._row("Value Label position",n`<select class="ec-select"
                .value=${i.label_position??v("label_position")??"above"}
                @change=${a=>s({label_position:a.target.value})}
              >
                <option value="above"  .selected=${(i.label_position??v("label_position")??"above")==="above"}>Above value</option>
                <option value="below"  .selected=${i.label_position==="below"}>Below value</option>
                <option value="left"   .selected=${i.label_position==="left"}>Left of value</option>
                <option value="right"  .selected=${i.label_position==="right"}>Right of value</option>
              </select>`)}
            ${o?this._numRow("Label column",{value:i.label_column,onChange:a=>s({label_column:a}),min:1,max:4,placeholder:"(same cell)"}):_}
          `:_}
      </div>
    `}_fieldSecLabelContent(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          ${this._row("Text",n`<input class="ec-input" type="text" .value=${i.text??""}
                @change=${a=>s({text:a.target.value})}
              />`)}
      </div>
    `}_fieldSecIcon(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          ${this._row("Icon",this._iconPicker(i.icon,a=>s({icon:a})))}
      </div>
    `}_fieldSecSvgSource(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">

          ${!i.svg||this._isThermometerSvg(i)||this._isBatterySvg(i)||this._isInverterSvg(i)||this._isGaugeSvg(i)?this._entitySelector({entity:i.entity,onEntity:a=>s({entity:a}),attribute:i.attribute,onAttribute:a=>s({attribute:a})}):_}
          ${this._isBatterySvg(i)?this._entitySelector({label:"Charging entity",entity:i.charging_entity,onEntity:a=>s({charging_entity:a}),attribute:i.charging_attribute,onAttribute:a=>s({charging_attribute:a})}):_}
          ${i.svg&&!this._isThermometerSvg(i)&&!this._isBatterySvg(i)&&!this._isInverterSvg(i)&&!this._isGaugeSvg(i)?n`
            <div class="ec-subsection-title" style="margin-top:6px">Tank fill source</div>
            ${this._entitySelector({label:"% entity",entity:i.tank_pct_entity,onEntity:a=>s({tank_pct_entity:a}),attribute:i.tank_pct_attribute,onAttribute:a=>s({tank_pct_attribute:a})})}
            ${this._entitySelector({label:"Flow In/Out Entity",entity:i.tank_volume_entity,onEntity:a=>s({tank_volume_entity:a}),attribute:i.tank_volume_attribute,onAttribute:a=>s({tank_volume_attribute:a})})}
            ${this._entitySelector({label:"Capacity entity",entity:i.tank_capacity_entity,onEntity:a=>s({tank_capacity_entity:a}),attribute:i.tank_capacity_attribute,onAttribute:a=>s({tank_capacity_attribute:a})})}
          `:_}
      </div>
    `}_fieldSecSvgRange(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
            ${this._numRow("Min value",{value:i.min,onChange:a=>s({min:a}),placeholder:"0"})}
            ${this._numRow("Max value",{value:i.max,onChange:a=>s({max:a}),placeholder:"100"})}
      </div>
    `}_fieldSecSvgColors(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`;return n`
      <div class="ec-section">
          ${i.svg&&!this._isInverterSvg(i)?this._row("Fill direction",n`<select class="ec-select"
              .value=${i.fill_direction??v("fill_direction")??"up"}
              @change=${r=>s({fill_direction:r.target.value})}
            >
              <option value="up"    .selected=${(i.fill_direction??v("fill_direction")??"up")==="up"}>Up (liquid rising)</option>
              <option value="down"  .selected=${i.fill_direction==="down"}>Down</option>
              <option value="left"  .selected=${i.fill_direction==="left"}>Left</option>
              <option value="right" .selected=${i.fill_direction==="right"}>Right</option>
            </select>`):_}
          ${this._row(this._isInverterSvg(i)?"Line color":"Fill color",this._colorPicker(`${a}-fc`,i.fill_color,r=>s({fill_color:r})))}
          ${this._isInverterSvg(i)?_:this._row("Top Graduated Color (Opt)",i.fill_color2?this._colorPicker(`${a}-fc2`,i.fill_color2,r=>s({fill_color2:r}),{clearTitle:"Remove gradient",onClear:()=>s({fill_color2:void 0})}):n`<button class="ec-lib-browse-btn" style="font-size:12px"
                  @click=${()=>s({fill_color2:i.fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
          ${i.svg&&!this._isThermometerSvg(i)&&!this._isBatterySvg(i)&&!this._isInverterSvg(i)&&!this._isGaugeSvg(i)?this._row("Tank color",this._colorPicker(`${a}-tkc`,i.tank_color,r=>s({tank_color:r}),{clearTitle:"Remove (use SVG default)",onClear:()=>s({tank_color:void 0})})):_}
      </div>
    `}_fieldSecSvgSize(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          ${this._numRow("Height (px)",{value:i.height,onChange:a=>s({height:a}),min:20,placeholder:"120"})}
          ${this._numRow("Width (px)",{value:i.width,onChange:a=>s({width:a}),min:10,placeholder:"auto"})}
      </div>
    `}_fieldSecSvgThresholds(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`;return n`
      <div class="ec-section">
            <p style="font-size:12px;color:#4a8aaa;margin:0 0 6px;">
              Each threshold sets the fill color when the entity value ≥ its level.
            </p>
            ${(i.thresholds??[]).map((r,l)=>n`
              <div class="ec-row">
                ${this._numWrap(n`<input class="ec-input ec-input-num" type="number" style="width:70px"
                  .value=${String(r.value)}
                  @change=${c=>{const d=[...i.thresholds??[]];d[l]={...r,value:Number(c.target.value)},s({thresholds:d})}}
                />`)}
                <div style="flex:1">
                  ${this._colorPicker(`${a}-t${l}`,r.color,c=>{const d=[...i.thresholds??[]];d[l]={...r,color:c??r.color},s({thresholds:d})},{clearable:!1})}
                  <button class="ec-btn-remove"
                    @click=${()=>{const c=(i.thresholds??[]).filter((d,p)=>p!==l);s({thresholds:c.length?c:void 0})}}
                    title="Remove">✕</button>
                </div>
              </div>
            `)}
            <button class="ec-btn-add" style="margin-top:4px;"
              @click=${()=>{const r=[...i.thresholds??[],{value:0,color:"#f44336"}];s({thresholds:r})}}>+ Threshold</button>
      </div>
    `}_fieldSecSvgGauge(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`;return n`
      <div class="ec-section">
            ${this._row("Min label",n`<input class="ec-input" type="text" .value=${i.gauge_min_label??""}
                placeholder="e.g. 0 kW"
                @change=${r=>{const l=r.target.value;s({gauge_min_label:l||void 0})}}
              />`)}
            ${this._row("Max label",n`<input class="ec-input" type="text" .value=${i.gauge_max_label??""}
                placeholder="e.g. 5 kW"
                @change=${r=>{const l=r.target.value;s({gauge_max_label:l||void 0})}}
              />`)}
            ${this._row("Show value",n`<label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" .checked=${i.gauge_show_value??!1}
                  @change=${r=>s({gauge_show_value:r.target.checked||void 0})}
                />
                <span>Display current value in centre</span>
              </label>`)}
            ${this._numRow("Label size (px)",{value:i.gauge_label_size,onChange:r=>s({gauge_label_size:r}),min:6,max:48,placeholder:"11"})}
            ${this._row("Label color",this._colorPicker(`${a}-glc`,i.gauge_label_color,r=>s({gauge_label_color:r}),{clearTitle:"Reset to default"}))}
      </div>
    `}_fieldSecSvgThermo(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`;return n`
      <div class="ec-section">
            ${this._row("Tick color",this._colorPicker(`${a}-ttc`,i.thermo_tick_color,r=>s({thermo_tick_color:r||void 0}),{clearTitle:"Reset to default"}))}
            ${this._row("Tick position",n`<select class="ec-select"
                .value=${i.thermo_text_position??v("thermo_text_position")??"right"}
                @change=${r=>s({thermo_text_position:r.target.value})}
              >
                ${["right","left","both"].map(r=>n`<option value=${r} .selected=${(i.thermo_text_position??v("thermo_text_position")??"right")===r}>${this._isHorizontalThermometerSvg(i)?{right:"Bottom",left:"Top",both:"Both"}[r]:r.charAt(0).toUpperCase()+r.slice(1)}</option>`)}
              </select>`)}
            ${this._row("Minor tick text",n`<input type="checkbox" class="ec-checkbox"
                .checked=${i.thermo_show_minor_tick_text??v("thermo_show_minor_tick_text")??!1}
                @change=${r=>s({thermo_show_minor_tick_text:r.target.checked})} />`)}
            ${this._numRow("Tick font size",{value:i.thermo_tick_font_size,onChange:r=>s({thermo_tick_font_size:r}),min:1,max:20,step:.5,placeholder:"4"})}
            ${this._numRow("Major tick length",{value:i.thermo_major_tick_length,onChange:r=>s({thermo_major_tick_length:r}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
            ${this._numRow("Major tick thickness",{value:i.thermo_major_tick_width,onChange:r=>s({thermo_major_tick_width:r}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
            ${this._numRow("Minor tick length",{value:i.thermo_minor_tick_length,onChange:r=>s({thermo_minor_tick_length:r}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
            ${this._numRow("Minor tick thickness",{value:i.thermo_minor_tick_width,onChange:r=>s({thermo_minor_tick_width:r}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
            ${this._row("Grid line color",this._colorPicker(`${a}-tgc`,i.thermo_grid_color,r=>s({thermo_grid_color:r||void 0}),{clearTitle:"Reset to default"}))}
            ${this._numRow("Above temperature transparency",{value:i.thermo_fill_opacity_above,onChange:r=>s({thermo_fill_opacity_above:r}),min:0,max:1,step:.05,placeholder:"0.5"})}
            ${this._numRow("Decimals",{value:i.thermo_decimals,onChange:r=>s({thermo_decimals:r}),min:0,max:4,step:1,placeholder:"1"})}
            ${this._row("Temperature value color",this._colorPicker(`${a}-tvc`,i.thermo_temp_color,r=>s({thermo_temp_color:r||void 0}),{clearTitle:"Reset to default"}))}
            ${this._numRow("Temperature value size",{value:i.thermo_temp_font_size,onChange:r=>s({thermo_temp_font_size:r}),min:4,max:30,step:.5,placeholder:"10"})}
      </div>
    `}_fieldSecGraphSettings(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">

          ${this._row("Type",n`<select class="ec-select"
              .value=${i.graph_type??v("graph_type")??"bar"}
              @change=${a=>s({graph_type:a.target.value})}
            >
              ${Wt.map(a=>n`<option value=${a.value} .selected=${(i.graph_type??v("graph_type")??"bar")===a.value}>${a.label}</option>`)}
            </select>`)}
          ${this._row("Show axes",n`<input type="checkbox" .checked=${i.graph_show_axes??v("graph_show_axes")??!0}
              @change=${a=>s({graph_show_axes:a.target.checked||void 0})}
            />`)}
          ${this._row("Show legend",n`<input type="checkbox" .checked=${i.graph_show_legend??v("graph_show_legend")??!1}
              @change=${a=>s({graph_show_legend:a.target.checked||void 0})}
            />`)}
          ${this._numRow("Min value",{value:i.graph_min,onChange:a=>s({graph_min:a}),placeholder:"auto"})}
          ${this._numRow("Max value",{value:i.graph_max,onChange:a=>s({graph_max:a}),placeholder:"auto"})}
          ${this._numRow("Width (px)",{value:i.width,onChange:a=>s({width:a}),min:60,placeholder:"auto"})}
          ${this._numRow("Height (px)",{value:i.height,onChange:a=>s({height:a}),min:40,placeholder:"auto"})}
          ${["line","area","state-timeline"].includes(i.graph_type??"")?this._numRow("History (hours)",{value:i.graph_hours,onChange:a=>s({graph_hours:a}),min:1,max:8760,placeholder:"24",title:"How many hours of history to fetch for line/area/sparkline charts"}):_}
          ${["line","area","state-timeline"].includes(i.graph_type??"")?n`
            ${this._numRow("Stroke width",{value:i.graph_stroke_width,onChange:a=>s({graph_stroke_width:a}),min:.5,max:10,step:.5,placeholder:"1.5"})}
            ${i.graph_type==="area"?this._numRow("Fill opacity",{value:i.graph_fill_opacity,onChange:a=>s({graph_fill_opacity:a}),min:0,max:1,step:.05,placeholder:"0.2"}):_}
          `:_}
      </div>
    `}_fieldSecGraphChrome(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`,r=(l,c,d,p)=>this._row(l,this._colorPicker(`${a}-${c}`,d,u=>s(p(u||void 0)),{clearTitle:"Reset to default"}));return n`
      <div class="ec-section">
        <p class="ec-hint">Empty means the shipped default. These stay fixed rather than following the
          theme — they sit over the card's background image, where the transparency is what keeps them legible.</p>
        ${r("Axis line","gac",i.graph_axis_color,l=>({graph_axis_color:l}))}
        ${r("Grid lines","ggc",i.graph_grid_color,l=>({graph_grid_color:l}))}
        ${r("Zero line","gzc",i.graph_zero_line_color,l=>({graph_zero_line_color:l}))}
        ${r("Empty-bar stub","gbc",i.graph_baseline_color,l=>({graph_baseline_color:l}))}
        ${r("Axis labels","glc",i.graph_label_color,l=>({graph_label_color:l}))}
        ${this._numRow("Label size (px)",{value:i.graph_label_size,onChange:l=>s({graph_label_size:l}),min:5,max:24,placeholder:"auto (per chart)",title:"Unset lets each chart keep its own natural label size"})}
        ${r("Unit label","guc",i.graph_unit_label_color,l=>({graph_unit_label_color:l}))}
        ${r("Legend label","gllc",i.graph_legend_label_color,l=>({graph_legend_label_color:l}))}
        ${r("In-bar label","gblc",i.graph_bar_label_color,l=>({graph_bar_label_color:l}))}
        ${r("Gauge track","ggtc",i.graph_gauge_track_color,l=>({graph_gauge_track_color:l}))}
        ${r("Gauge value text","ggvc",i.graph_gauge_value_color,l=>({graph_gauge_value_color:l}))}
        <div class="ec-subsection-title">Series palette</div>
        <p class="ec-hint">Colour cycle for series without a colour of their own. Series order picks
          from this list; a series with its own colour always wins.</p>
        ${(i.graph_palette??v("graph_palette")??[]).map((l,c)=>n`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            <span style="font-size:11px;opacity:0.6;white-space:nowrap;width:18px;">${c+1}</span>
            <div style="flex:1;min-width:0;">
              ${this._colorPicker(`${a}-gp${c}`,l,d=>{const p=[...i.graph_palette??v("graph_palette")??[]];p[c]=d??"",s({graph_palette:p})},{clearable:!1})}
            </div>
            <button class="ec-btn-remove" title="Remove" @click=${()=>{const d=[...i.graph_palette??v("graph_palette")??[]];d.splice(c,1),s({graph_palette:d.length?d:void 0})}}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>{const l=[...i.graph_palette??v("graph_palette")??[]];s({graph_palette:[...l,"#00d4ff"]})}}>+ Colour</button>
      </div>
    `}_fieldSecGraphSeries(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?"egs":"gs";return n`
      <div class="ec-section">
          <div class="ec-subsection-title">Series — drag to reorder</div>
          ${(i.graph_series??[]).length===0?this._emptyAdd("No series yet — add one",()=>s({graph_series:[...i.graph_series??[],{}]})):(i.graph_series??[]).map((r,l)=>this._itemCard({dragKey:`${a}:${t}:${e}:${l}`,icon:"mdi:chart-line",label:r.label||r.entity||`Series ${l+1}`,sub:r.label&&r.entity?r.entity:r.entity?`Series ${l+1}`:"No entity selected",selected:l===(o?this._selExtSeries:this._selSeries),onClick:()=>{o?this._selExtSeries=l:this._selSeries=l,this._navPush(`${a}:${l}`,r.label||r.entity||`Series ${l+1}`)},actions:n`
                  <button class="ec-btn-dup" title="Duplicate series"
                    @click=${c=>{c.stopPropagation(),this._duplicateGraphSeries(t,e,l,o)}}>⧉</button>
                  <button class="ec-btn-remove" title="Remove series"
                    @click=${c=>{c.stopPropagation();const d=(i.graph_series??[]).filter((p,u)=>u!==l);s({graph_series:d.length?d:void 0})}}>✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:6px;width:100%"
            @click=${()=>{const r=[...i.graph_series??[],{}];s({graph_series:r})}}>+ Series</button>
      </div>
    `}_fieldSecGraphSeriesItem(t,e,i,o,s=!1){const a=this._updFor(t,e,s),r=s?`ext${t}-f${e}`:`c${t}-f${e}`,l=(i.graph_series??[])[o];return l?n`
      <div class="ec-section">
              ${this._entitySelector({entity:l.entity,onEntity:c=>{const d=[...i.graph_series??[]],p=d[o].stat_type?void 0:this._defaultStatType(c);d[o]={...d[o],entity:c,...p?{stat_type:p}:{}},a({graph_series:d})},attribute:l.attribute,onAttribute:c=>{const d=[...i.graph_series??[]];d[o]={...d[o],attribute:c},a({graph_series:d})}})}
               ${this._row("Value Label (Optional)",n`<input class="ec-input" type="text" .value=${l.label??""}
                  placeholder="(from entity)"
                  @change=${c=>{const d=[...i.graph_series??[]],p=c.target.value;d[o]={...d[o],label:p||void 0},a({graph_series:d})}}
                />`)}
              ${this._row("Color",this._colorPicker(`${r}-s${o}-col`,l.color,c=>{const d=[...i.graph_series??[]];d[o]={...d[o],color:c},a({graph_series:d})},{clearTitle:"Reset to palette color"}))}
              ${this._row("Stat period",n`<select class="ec-select"
                  .value=${l.stat_period??""}
                  @change=${c=>{const d=[...i.graph_series??[]],p=c.target.value;d[o]={...d[o],stat_period:p||void 0},a({graph_series:d})}}
                >
                  <option value="">Live state</option>
                  <optgroup label="Calendar">
                    <option value="today"       .selected=${l.stat_period==="today"}>Today</option>
                    <option value="yesterday"   .selected=${l.stat_period==="yesterday"}>Yesterday</option>
                    <option value="this_week"   .selected=${l.stat_period==="this_week"}>This week</option>
                    <option value="last_week"   .selected=${l.stat_period==="last_week"}>Last week</option>
                    <option value="this_month"  .selected=${l.stat_period==="this_month"}>This month</option>
                    <option value="last_month"  .selected=${l.stat_period==="last_month"}>Last month</option>
                    <option value="this_year"   .selected=${l.stat_period==="this_year"}>This year</option>
                    <option value="last_year"   .selected=${l.stat_period==="last_year"}>Last year</option>
                  </optgroup>
                  <optgroup label="Rolling window">
                    <option value="last_30_minutes" .selected=${l.stat_period==="last_30_minutes"}>Last 30 minutes</option>
                    <option value="last_hour"        .selected=${l.stat_period==="last_hour"}>Last hour</option>
                    <option value="last_n_minutes"   .selected=${l.stat_period==="last_n_minutes"}>Last N minutes</option>
                    <option value="last_n_hours"     .selected=${l.stat_period==="last_n_hours"}>Last N hours</option>
                    <option value="last_n_days"      .selected=${l.stat_period==="last_n_days"}>Last N days</option>
                    <option value="last_n_months"    .selected=${l.stat_period==="last_n_months"}>Last N months</option>
                  </optgroup>
                </select>`)}
              ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(l.stat_period)?this._row(l.stat_period==="last_n_minutes"?"Number of minutes":l.stat_period==="last_n_hours"?"Number of hours":l.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(n`<input type="number" class="ec-input ec-input-num" min="1" step="1"
                  .value=${String(l.stat_period_n??"")}
                  placeholder="e.g. 3"
                  @change=${c=>{const d=parseInt(c.target.value,10),p=[...i.graph_series??[]];p[o]={...p[o],stat_period_n:isNaN(d)||d<1?void 0:d},a({graph_series:p})}}
                />`)):_}
              ${(()=>{const c=!l.stat_period&&Ge.includes(i.graph_type??v("graph_type")??"bar"),d=l.stat_type??(c?v("stat_type_history")??"mean":v("stat_type")??"sum"),p=!c||d==="difference";return n`
                  ${this._row("Stat type",n`<select class="ec-select"
                      .value=${d}
                      @change=${u=>{const g=[...i.graph_series??[]];g[o]={...g[o],stat_type:u.target.value},a({graph_series:g})}}
                    >
                      <option value="sum"  .selected=${d==="sum"}>Sum (total)</option>
                      ${p?n`<option value="difference" .selected=${d==="difference"}>
                        Difference (end − start)${c?" — not supported here":""}
                      </option>`:_}
                      <option value="mean" .selected=${d==="mean"}>Mean (average)</option>
                      <option value="max"  .selected=${d==="max"}>Maximum</option>
                      <option value="min"  .selected=${d==="min"}>Minimum</option>
                    </select>`)}
                  ${c?n`<p class="ec-hint">Applied per history bucket.${d==="difference"?' "Difference" has no meaning for history buckets — pick another type.':' "Difference" is offered only with a stat period.'}</p>`:_}
                `})()}
      </div>
    `:this._navDeadEnd()}_fieldSecStats(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Entity field at it.</p>
          ${this._row("Period",n`<select class="ec-select"
              .value=${i.stat_period??""}
              @change=${a=>{const r=a.target.value,l=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(r);s({stat_period:r||void 0,stat_period_n:l?i.stat_period_n??void 0:void 0,stat_period_start:r==="custom"?i.stat_period_start??void 0:void 0,stat_period_end:r==="custom"?i.stat_period_end??void 0:void 0})}}
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
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(i.stat_period)?this._row(i.stat_period==="last_n_minutes"?"Number of minutes":i.stat_period==="last_n_hours"?"Number of hours":i.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(n`<input type="number" class="ec-input ec-input-num" min="1" step="1"
              .value=${String(i.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${a=>{const r=parseInt(a.target.value,10);s({stat_period_n:isNaN(r)||r<1?void 0:r})}}
            />`)):_}
          ${i.stat_period==="custom"?n`
            ${this._row("Start",n`<input type="datetime-local" class="ec-input"
              .value=${i.stat_period_start??""}
              @change=${a=>s({stat_period_start:a.target.value||void 0})}
            />`)}
            ${this._row("End",n`<input type="datetime-local" class="ec-input"
              .value=${i.stat_period_end??""}
              @change=${a=>s({stat_period_end:a.target.value||void 0})}
            />`)}
          `:_}
          ${i.stat_period?this._row("Stat type",n`<select class="ec-select"
              .value=${i.stat_type??v("stat_type")??"sum"}
              @change=${a=>s({stat_type:a.target.value})}
            >
              <option value="sum"        .selected=${(i.stat_type??v("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${i.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${i.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${i.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${i.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${i.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${i.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",n`<select class="ec-select"
              .value=${i.stat_characteristic??""}
              @change=${a=>{const r=a.target.value;s({stat_characteristic:r||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(a=>n`
                <optgroup label="${a}">
                  ${Bt.filter(r=>r.group===a).map(r=>n`
                    <option value=${r.value} .selected=${i.stat_characteristic===r.value}>
                      ${r.label}${r.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${i.stat_characteristic==="percentile"?this._numRow("Percentile (1–99)",{value:i.stat_percentile,onChange:a=>s({stat_percentile:a}),min:1,max:99,placeholder:"50"}):_}
          ${this._numRow("Max age (hours)",{value:i.stat_max_age_hours,onChange:a=>s({stat_max_age_hours:a}),min:1,placeholder:"(none)"})}
          ${this._numRow("Sampling size",{value:i.stat_sampling_size,onChange:a=>s({stat_sampling_size:a}),min:1,placeholder:"(none)"})}
          ${i.stat_characteristic&&i.entity?n`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const a=Et(i.entity,i.stat_characteristic,i.stat_max_age_hours,i.stat_sampling_size,i.stat_percentile);navigator.clipboard.writeText(a)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${Et(i.entity,i.stat_characteristic,i.stat_max_age_hours,i.stat_sampling_size,i.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_fieldSecDisplay(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          <div class="ec-subsection-title">Display</div>
          ${this._row("Unit",n`<input class="ec-input" type="text" .value=${i.unit??""}
              placeholder=${this._displayUnit(i.entity,void 0)||"(from entity)"}
              @change=${a=>{const r=a.target.value;s({unit:r===""?void 0:r})}}
            />`)}
          ${this._numRow("Decimals",{value:i.decimals,onChange:a=>s({decimals:a}),min:0,max:6,placeholder:this._entityDecimalsHint(i.entity)?.toString()??"auto"})}
          ${this._numRow("Hide below",{value:i.hide_below,onChange:a=>s({hide_below:a}),min:0,placeholder:"(always show)",title:"Suppress this field when the absolute value is below this threshold"})}
          ${this._displayUnit(i.entity,i.unit)?n`<p class="ec-hint">Enter in ${this._displayUnit(i.entity,i.unit)}</p>`:_}
          ${i.entity?.startsWith("virtual:")&&!i.time_until_layout?.length?this._row("Show trigger label",n`<input type="checkbox"
              .checked=${i.show_time_until_label??!1}
              title="Prefix the value with the active trigger label (e.g. 'Reserve: 2h 10m')"
              @change=${a=>s({show_time_until_label:a.target.checked||void 0})}
            />`):_}
      </div>
    `}_fieldSecStyle(t,e,i,o=!1){const s=this._updFor(t,e,o),a=o?`ext${t}-f${e}`:`c${t}-f${e}`;return n`
      <div class="ec-section">
          ${j(i.type)?_:this._row("Align",n`<select class="ec-select"
              .value=${i.align??v("align")??"left"}
              @change=${r=>s({align:r.target.value})}
            >
              ${_t.map(r=>n`<option value=${r} .selected=${(i.align??v("align")??"left")===r}>${r}</option>`)}
            </select>`)}
          ${this._row("Use global text style",n`<input type="checkbox" .checked=${i.style===void 0}
              @change=${r=>{r.target.checked?s({style:void 0}):s({style:{}})}}
            />`)}
          ${i.style!==void 0?n`
            <div class="ec-subsection-title">Style overrides</div>
            ${this._textRows(`${a}-st`,i.style,r=>s({style:{...i.style,...r}}),be)}
          `:_}
          ${this._cssRow(i.extra_css,r=>s({extra_css:r}))}
      </div>
    `}_fieldSecActions(t,e,i,o=!1){const s=this._updFor(t,e,o);return n`
      <div class="ec-section">
          <div class="ec-subsection-title">Actions</div>
          ${this._actionRows({tap_action:i.tap_action,hold_action:i.hold_action,double_tap_action:i.double_tap_action},a=>s(a))}
      </div>
    `}_renderDefaultsRibbonPanel(){const t=this._navPath;if(t.length===0)return this._defaultsSectionMenu();if(t[0].key==="sec:elements")return t.length===1?this._elemLibMenu():this._elemLibSection(t[1].key);if(t[0].key==="sec:control"){if(t.length===1)return this._controlDefaultsMenu();const e=t[1].key;return e==="cd:selector"||e==="cd:button"?t.length===2?this._selectorDefaultsMenu(e):this._selectorDefaultsSection(e,t[2].key):this._controlDefaultsSection(e)}return this._defaultsSection(t[0].key)}_defaultsScope(){return{root:this._config?.defaults,apply:t=>this._updateDefaults(t)}}_defaultsSectionMenu(){return this._navMenu(h._DEFAULTS_SECTIONS,this._defaultsScope())}_defaultsSection(t){const e=this._config?.defaults??{},i=this._clearOverridesBtn(h._findDef(h._DEFAULTS_SECTIONS,t),this._defaultsScope());return n`${i}${this._defaultsSectionBody(e,t)}`}_defaultsSectionBody(t,e){return e==="sec:card"?this._defaultsSecCard(t):e==="sec:value"?n`<div class="ec-section">${this._textRows("d-value",t.value??{},i=>this._updateDefaults({value:{...t.value,...i}}))}</div>`:e==="sec:label"?n`<div class="ec-section">${this._textRows("d-label",t.label??{},i=>this._updateDefaults({label:{...t.label,...i}}))}</div>`:e==="sec:customcolors"?this._defaultsSecCustomColors():e==="sec:customvars"?this._defaultsSecCustomVars():e==="sec:layout"?this._defaultsSecLayout():e==="sec:reset"?this._defaultsSecReset():n``}_defaultsSecReset(){return n`
      <div class="ec-section">
        <ha-alert alert-type="warning">Clears all cards, flows, zones, and background settings, then restarts the setup wizard. This cannot be undone.</ha-alert>
        <div class="ec-wiz-reset-row">
          <button class="ec-wiz-btn-reset" @click=${this._resetToWizard}>⟳ Reset &amp; rerun setup wizard</button>
        </div>
      </div>
    `}_defaultsSecCard(t){const e=He(t);return n`
      <div class="ec-section">
        ${this._boxRows("d-card",t.card??{},i=>this._updateDefaults({card:{...t.card,...i}}))}

        <div class="ec-subsection-title">Card text</div>
        <p class="ec-hint">What every field, control label and popup title falls back to when nothing more specific is set. Cards sit over your background image, so this stays fixed rather than following the theme.</p>
        ${this._row("Default text color",this._colorPicker("d-cardtext",t.card_text_color,i=>this._updateDefaults({card_text_color:i||void 0}),{clearTitle:"Reset to default"}))}

        <div class="ec-subsection-title">Popups</div>
        <p class="ec-hint">How an expanded card or a popover looks when it opens over the dashboard.</p>
        ${this._row("Dimming",n`
          <select class="ec-select"
            @change=${i=>this._setPopupDimming(i.target.value)}
          >
            ${e===void 0?n`<option value="" selected>Custom</option>`:_}
            ${Object.keys(ut).map(i=>n`
              <option value=${i} .selected=${e===i}>${ut[i].label} — ${ut[i].hint}</option>`)}
          </select>`)}
        ${e===void 0?n`<p class="ec-hint">These colors were set by hand in YAML, so no preset describes them. Picking one replaces them.</p>`:_}
        ${this._numRow("Corner radius (px)",{value:t.overlay_panel_radius,onChange:i=>this._updateDefaults({overlay_panel_radius:i}),min:0,max:40,placeholder:String(v("overlay_panel_radius")??8)})}
      </div>
    `}_setPopupDimming(t){if(!(t in ut))return;const e=ut[t].values,i={};for(const o of Ce)i[o]=v(o)===e[o]?void 0:e[o];this._updateDefaults(i)}static _custName(t){return t.trim().replace(/[^a-zA-Z0-9_-]/g,"_")}_custDuplicateNames(){const t=new Set,e=new Set;for(const[i]of ne(this._config?.defaults)){const o=i.slice(9);t.has(o)&&e.add(o),t.add(o)}return e}_custNameInput(t,e,i){const o=t!==""&&e.has(t);return n`
      <span style="font-size:11px;opacity:0.6;white-space:nowrap;">mccust_</span>
      <input class="ec-input" type="text" placeholder="name" style="flex:0 1 110px;${o?"border-color:var(--error-color, #db4437);":""}"
        title=${o?"This name is used twice — colors and variables share one --mccust_ namespace, so only one of them will apply.":"Becomes --mccust_<name>."}
        .value=${t}
        @change=${s=>i(h._custName(s.target.value))} />
    `}_defaultsSecCustomColors(){const t=this._config?.defaults?.custom_colors??[],e=o=>this._updateDefaults({custom_colors:o.length?o:void 0}),i=this._custDuplicateNames();return n`
      <div class="ec-section">
        <p class="ec-hint">Reusable colors. Each becomes <code>--mccust_&lt;name&gt;</code>, and appears in every color picker's <b>CSS Mode</b> list. Specifying a custom theme variable is allowed in the RGB input field.</p>
        ${this._custDuplicateHint(i)}
        ${t.length===0?n`<p class="ec-empty">No custom colors — click "+ Color".</p>`:_}
        ${t.map((o,s)=>n`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            ${this._custNameInput(o.name,i,a=>{const r=[...t];r[s]={...o,name:a},e(r)})}
            <div style="flex:1;min-width:0;">
              ${this._colorPicker(`cust-${s}`,o.color,a=>{const r=[...t];r[s]={...o,color:a??""},e(r)},{clearable:!1})}
            </div>
            <button class="ec-btn-remove" title="Remove" @click=${()=>e(t.filter((a,r)=>r!==s))}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>e([...t,{name:`color${t.length+1}`,color:"#00d4ff"}])}>+ Color</button>
      </div>
    `}_custDuplicateHint(t){return t.size===0?_:n`<p class="ec-hint" style="color:var(--error-color, #db4437);">
      Used in both lists: ${[...t].map(e=>`mccust_${e}`).join(", ")}. Colors and variables
      share one <code>--mccust_</code> namespace, so only the variable will apply. Rename one of each pair.
    </p>`}_defaultsSecCustomVars(){const t=this._config?.defaults?.custom_vars??[],e=o=>this._updateDefaults({custom_vars:o.length?o:void 0}),i=this._custDuplicateNames();return n`
      <div class="ec-section">
        <p class="ec-hint">Reusable values of any kind — sizes, shadows, font stacks. Each becomes <code>--mccust_&lt;name&gt;</code> on the card, so <b>Extra CSS</b> anywhere in the card can use <code>var(--mccust_&lt;name&gt;)</code> instead of repeating the value.</p>
        <p class="ec-hint">These share the same namespace as <b>Custom Colors</b>, so a name can only be used in one list. Colors go in that list — only they appear in the color pickers' CSS Mode.</p>
        ${this._custDuplicateHint(i)}
        ${t.length===0?n`<p class="ec-empty">No custom variables — click "+ Variable".</p>`:_}
        ${t.map((o,s)=>n`
          <div class="ec-list-row" style="align-items:center;gap:6px;">
            ${this._custNameInput(o.name,i,a=>{const r=[...t];r[s]={...o,name:a},e(r)})}
            <input class="ec-input" type="text" placeholder="value (e.g. 8px, 0 2px 6px rgba(0,0,0,.4))" style="flex:1;min-width:0;"
              .value=${o.value}
              @change=${a=>{const r=[...t];r[s]={...o,value:a.target.value.trim()},e(r)}} />
            <button class="ec-btn-remove" title="Remove" @click=${()=>e(t.filter((a,r)=>r!==s))}>✕</button>
          </div>`)}
        <button class="ec-btn-add" @click=${()=>e([...t,{name:`var${t.length+1}`,value:""}])}>+ Variable</button>
      </div>
    `}_controlNumRow(t,e,i,o,s=1){return this._numRow(t,{value:e,onChange:o,placeholder:i,min:s})}static _separationOnly(t){if(!t)return;const e={};let i=!1;for(const o of h.SEPARATION_KEYS)t[o]!==void 0&&(e[o]=t[o],i=!0);return i?e:void 0}_optionSeparationRows(t,e,i=!1){if(i)return n`
        <div class="ec-subsection-title">Padding</div>
        ${this._csNumRow(t,e,"Button padding (px)","button_option_padding","5 / 10",0)}
      `;const o=(a,r,l)=>this._colorPicker(a,r,c=>l(c||void 0)),s=(t.button_group_option_gap??0)>0;return n`
      <div class="ec-subsection-title">Option separation</div>
      <p class="ec-hint">Set a gap to detach the options into discrete buttons — the shared outline and the divider lines between segments go away, and each option becomes its own cell. Leave the gap at 0 for the joined segmented look.</p>
      ${this._csNumRow(t,e,"Gap between options (px)","button_group_option_gap","0",0)}
      <div class="ec-subsection-title">${s?"Button group border (fallback for detached options)":"Segmented frame"}</div>
      <p class="ec-hint">${s?'The button group’s own border. It has no visible frame to draw once options are detached, but it stays the fallback for "Border per option" below whenever an option is left without its own override.':"The outline around the joined segmented row, and the divider lines between options."}</p>
      ${this._row("Border color",o("sel-bd",t.button_group_border_color,a=>e({button_group_border_color:a})))}
      ${this._csNumRow(t,e,"Border width (px)","button_group_border_width","1",0)}
      ${this._csNumRow(t,e,"Radius (px)","button_group_radius","7")}
      ${s?n`
        ${this._csNumRow(t,e,"Internal padding (px)","button_group_option_padding","5",0)}
        ${this._row("Border per option",n`<input type="checkbox" .checked=${t.button_group_option_border??!1}
            @change=${a=>e({button_group_option_border:a.target.checked||void 0})}
          />`)}
        ${t.button_group_option_border?n`
          <p class="ec-hint">Each option's own border. Leave these unset to reuse the button group's border color, width and radius.</p>
          ${this._row("Option border color",o("sel-obd",t.button_group_option_border_color,a=>e({button_group_option_border_color:a})))}
          ${this._csNumRow(t,e,"Option border width (px)","button_group_option_border_width","group width",0)}
          ${this._csNumRow(t,e,"Option border radius (px)","button_group_option_radius","group radius",0)}
        `:_}
        <div class="ec-subsection-title">Option extra CSS</div>
        <p class="ec-hint">Raw CSS applied to each separated option cell, so detached buttons can be fully styled.</p>
        ${this._cssRow(t.button_group_option_extra_css,a=>e({button_group_option_extra_css:a}))}
      `:_}
    `}_controlGradientAngleRow(t,e){return this._csNumRow(t,e,"Gradient angle (deg)","gradient_angle","180",0)}_gradientToRow(t,e,i,o,s,a){return n`
      ${this._row(e,this._colorPicker(t,i,r=>o(r||void 0)))}
      ${i?n`
        ${this._controlGradientAngleRow(s,a)}
        <p class="ec-hint">Shared by every gradient on this control.</p>
      `:_}
    `}_selectorStateRows(t,e,i,o,s){const a=(r,l,c)=>this._colorPicker(`${t}-${r}`,l,d=>c(d||void 0));if(o==="sub:active"||o==="sub:inactive"){const r=o==="sub:active";return s?r?n`
          <p class="ec-hint">Applied while the button's entity is on, or — with a value set — while the entity's state equals it.</p>
          ${this._row("Background",a("sel-sel",e.button_selected_color,l=>i({button_selected_color:l})))}
          ${this._gradientToRow(`${t}-sel-sel2`,"Background gradient to",e.button_selected_color2,l=>i({button_selected_color2:l}),e,i)}
          ${this._row("Label color",a("sel-selt",e.button_selected_text_color,l=>i({button_selected_text_color:l})))}
          ${this._row("Icon color",a("sel-selic",e.button_selected_icon_color,l=>i({button_selected_icon_color:l})))}
          ${this._row("State value color",a("sel-selst",e.button_selected_state_color,l=>i({button_selected_state_color:l})))}
        `:n`
          ${this._row("Background",a("sel-bg",e.button_bg,l=>i({button_bg:l})))}
          ${this._gradientToRow(`${t}-sel-bg2`,"Background gradient to",e.button_bg2,l=>i({button_bg2:l}),e,i)}
          ${this._row("Label color",a("sel-txt",e.button_text_color,l=>i({button_text_color:l})))}
          ${this._row("Icon color",a("sel-ic",e.button_icon_color,l=>i({button_icon_color:l})))}
          ${this._row("State value color",a("sel-st",e.button_state_color,l=>i({button_state_color:l})))}
          <p class="ec-hint">Icon and state value follow the label color unless given one of their own.</p>
        `:r?n`
        <p class="ec-hint">Applied to an option whose value is the entity's current state, or whose own entity is on.</p>
        ${this._row("Background",a("sel-sel",e.button_group_selected_color,l=>i({button_group_selected_color:l})))}
        ${this._gradientToRow(`${t}-sel-sel2`,"Background gradient to",e.button_group_selected_color2,l=>i({button_group_selected_color2:l}),e,i)}
        ${this._row("Label color",a("sel-selt",e.button_group_selected_text_color,l=>i({button_group_selected_text_color:l})))}
        ${this._row("Icon color",a("sel-selic",e.button_group_selected_icon_color,l=>i({button_group_selected_icon_color:l})))}
        ${this._row("State value color",a("sel-selst",e.button_group_selected_state_color,l=>i({button_group_selected_state_color:l})))}
      `:n`
        ${this._row("Background",a("sel-bg",e.button_group_bg,l=>i({button_group_bg:l})))}
        ${this._gradientToRow(`${t}-sel-bg2`,"Background gradient to",e.button_group_bg2,l=>i({button_group_bg2:l}),e,i)}
        ${this._row("Label color",a("sel-txt",e.button_group_text_color,l=>i({button_group_text_color:l})))}
        ${this._row("Icon color",a("sel-ic",e.button_group_icon_color,l=>i({button_group_icon_color:l})))}
        ${this._row("State value color",a("sel-st",e.button_group_state_color,l=>i({button_group_state_color:l})))}
        <p class="ec-hint">Icon and state value follow the label color unless given one of their own.</p>
      `}return s?n`
        ${this._row("Border color",a("sel-bd",e.button_border_color,r=>i({button_border_color:r})))}
        ${this._csNumRow(e,i,"Border width (px)","button_border_width","1",0)}
        ${this._csNumRow(e,i,"Radius (px)","button_radius","7")}
        ${this._csNumRow(e,i,"Padding (px)","button_option_padding","5 / 10",0)}
        ${this._csNumRow(e,i,"Label font size (px)","button_text_size","13")}
        ${this._csNumRow(e,i,"Icon font size (px)","button_icon_size","18")}
        ${this._csNumRow(e,i,"State value font size (px)","button_state_size","label size")}
      `:n`
      ${this._csNumRow(e,i,"Label font size (px)","button_group_text_size","13")}
      ${this._csNumRow(e,i,"Icon font size (px)","button_group_icon_size","18")}
      ${this._csNumRow(e,i,"State value font size (px)","button_group_state_size","label size")}
    `}_csNumRow(t,e,i,o,s,a=1){const r=v("control_style")?.[o];return this._controlNumRow(i,t[o],typeof r=="number"?String(r):s,l=>e({[o]:l}),a)}_csShadowRow(t,e,i,o,s){const a=v("control_style")?.[o];return this._row(i,n`<input class="ec-input" type="text" .value=${t[o]??""}
      placeholder=${typeof a=="string"?a:s}
      title="A full CSS box-shadow value. Use 'none' to remove the shadow."
      @change=${r=>e({[o]:r.target.value.trim()||void 0})}
    />`)}_controlStyleRows(t,e,i,o,s=!0){const a=(c,d,p)=>this._colorPicker(`${t}-${c}`,d,u=>p(u||void 0)),r=(c,d,p,u=1)=>this._csNumRow(e,o,c,d,p,u),l=(c,d,p)=>this._csShadowRow(e,o,c,d,p);return n`
      ${s?n`
        ${this._row("Accent",a("accent",e.accent_color,c=>o({accent_color:c})))}
        ${this._gradientToRow(`${t}-accent2`,"Accent gradient to",e.accent_color2,c=>o({accent_color2:c}),e,o)}
      `:_}
      ${i==="toggle"?n`
        <div class="ec-subsection-title">Toggle</div>
        ${this._row("On color",a("on",e.toggle_on_color,c=>o({toggle_on_color:c})))}
        ${this._gradientToRow(`${t}-on2`,"On gradient to",e.toggle_on_color2,c=>o({toggle_on_color2:c}),e,o)}
        ${this._row("Off color",a("off",e.toggle_off_color,c=>o({toggle_off_color:c})))}
        ${this._gradientToRow(`${t}-off2`,"Off gradient to",e.toggle_off_color2,c=>o({toggle_off_color2:c}),e,o)}
        <div class="ec-subsection-title">Toggle thumb</div>
        ${this._row("Thumb color",a("th-col",e.toggle_thumb_color,c=>o({toggle_thumb_color:c})))}
        ${r("Thumb size (px)","toggle_thumb_size","18")}
        ${r("Thumb radius (px)","toggle_thumb_radius","circle",0)}
        ${r("Thumb padding (px)","toggle_thumb_padding","2",0)}
        ${l("Thumb shadow","toggle_thumb_shadow","0 1px 3px rgba(0,0,0,0.5)")}
      `:_}
      ${i==="slider"?n`
        <div class="ec-subsection-title">Slider</div>
        ${this._row("Track color",a("track",e.slider_track_color,c=>o({slider_track_color:c})))}
        ${this._gradientToRow(`${t}-track2`,"Track gradient to",e.slider_track_color2,c=>o({slider_track_color2:c}),e,o)}
        ${this._row("Fill color",a("fill",e.slider_fill_color,c=>o({slider_fill_color:c})))}
        ${this._gradientToRow(`${t}-fill2`,"Fill gradient to",e.slider_fill_color2,c=>o({slider_fill_color2:c}),e,o)}
        ${r("Track height (px)","slider_height","6")}
        ${r("Track length (px)","slider_length","fill width",0)}
        ${r("Track radius (px)","slider_radius","pill",0)}
        ${this._row("Border",n`<input type="checkbox" .checked=${e.slider_border??!1}
            @change=${c=>o({slider_border:c.target.checked||void 0})}
          />`)}
        ${e.slider_border?n`
          ${this._row("Border color",a("track-bd",e.slider_border_color,c=>o({slider_border_color:c})))}
          ${r("Border width (px)","slider_border_width","1",0)}
          <p class="ec-hint">Uses the track radius above.</p>
        `:_}
        <div class="ec-subsection-title">Slider thumb</div>
        ${this._row("Thumb color",a("thumb",e.slider_thumb_color,c=>o({slider_thumb_color:c})))}
        ${r("Thumb size (px)","slider_thumb_size","16")}
        ${r("Thumb width (px)","slider_thumb_width","thumb size")}
        ${r("Thumb radius (px)","slider_thumb_radius","circle",0)}
        ${r("Thumb padding (px)","slider_thumb_padding","0",0)}
        ${l("Thumb shadow","slider_thumb_shadow","0 1px 4px rgba(0,0,0,0.5)")}
      `:_}
      ${i==="dropdown"?n`
        <div class="ec-subsection-title">Dropdown</div>
        ${this._row("Border",a("dd-bd",e.dropdown_border_color,c=>o({dropdown_border_color:c})))}
        ${this._row("Background",a("dd-bg",e.dropdown_bg,c=>o({dropdown_bg:c})))}
        ${this._gradientToRow(`${t}-dd-bg2`,"Background gradient to",e.dropdown_bg2,c=>o({dropdown_bg2:c}),e,o)}
        ${this._row("Menu background",a("dd-mbg",e.dropdown_menu_bg,c=>o({dropdown_menu_bg:c})))}
        ${this._gradientToRow(`${t}-dd-mbg2`,"Menu gradient to",e.dropdown_menu_bg2,c=>o({dropdown_menu_bg2:c}),e,o)}
        ${this._row("Menu border",a("dd-mbd",e.dropdown_menu_border_color,c=>o({dropdown_menu_border_color:c})))}
        ${this._row("Selected color",a("dd-sel",e.dropdown_selected_color,c=>o({dropdown_selected_color:c})))}
        ${this._gradientToRow(`${t}-dd-sel2`,"Selected gradient to",e.dropdown_selected_color2,c=>o({dropdown_selected_color2:c}),e,o)}
        ${r("Radius (px)","dropdown_radius","6")}
        ${r("Text size (px)","dropdown_text_size","13")}
        <div class="ec-subsection-title">Dropdown menu</div>
        ${r("Menu radius (px)","dropdown_menu_radius","8",0)}
        ${l("Menu shadow","dropdown_menu_shadow","0 6px 20px rgba(0,0,0,0.5)")}
        ${r("Option radius (px)","dropdown_option_radius","5",0)}
        ${this._row("Option text",a("dd-otx",e.dropdown_option_text_color,c=>o({dropdown_option_text_color:c})))}
        ${this._row("Option hover",a("dd-ohv",e.dropdown_option_hover_color,c=>o({dropdown_option_hover_color:c})))}
        <p class="ec-hint">The menu is opaque so it can cover the background image, which is why its
          option text is set here rather than inherited from the card.</p>
      `:_}
      ${i==="input"?n`
        <div class="ec-subsection-title">Input</div>
        ${this._row("Border",a("in-bd",e.input_border_color,c=>o({input_border_color:c})))}
        ${this._row("Background",a("in-bg",e.input_bg,c=>o({input_bg:c})))}
        ${this._gradientToRow(`${t}-in-bg2`,"Background gradient to",e.input_bg2,c=>o({input_bg2:c}),e,o)}
        ${this._row("Focus color",a("in-fc",e.input_focus_color,c=>o({input_focus_color:c})))}
        ${this._row("Placeholder",a("in-ph",e.input_placeholder_color,c=>o({input_placeholder_color:c})))}
        ${r("Radius (px)","input_radius","6")}
        ${r("Text size (px)","input_text_size","13")}
      `:_}
      ${i==="spinbox"?n`
        <div class="ec-subsection-title">Spin Box</div>
        ${this._row("Border",a("sp-bd",e.spinbox_border_color,c=>o({spinbox_border_color:c})))}
        ${this._row("Button background",a("sp-bg",e.spinbox_bg,c=>o({spinbox_bg:c})))}
        ${this._gradientToRow(`${t}-sp-bg2`,"Button gradient to",e.spinbox_bg2,c=>o({spinbox_bg2:c}),e,o)}
        ${this._row("Button hover",a("sp-hv",e.spinbox_button_hover_color,c=>o({spinbox_button_hover_color:c})))}
        ${this._gradientToRow(`${t}-sp-hv2`,"Hover gradient to",e.spinbox_button_hover_color2,c=>o({spinbox_button_hover_color2:c}),e,o)}
        ${r("Button width (px)","spinbox_button_width","30")}
        ${r("Button glyph size (px)","spinbox_button_font_size","18")}
        ${r("Radius (px)","spinbox_radius","7")}
        ${r("Text size (px)","spinbox_text_size","13")}
      `:_}
    `}_controlDefaultsMenu(){return this._navMenu(h._CONTROL_DEFAULTS_SECTIONS,this._defaultsScope())}_controlDefaultsSection(t){return n`
      ${this._clearOverridesBtn(h._findDef(h._CONTROL_DEFAULTS_SECTIONS,t),this._defaultsScope())}
      ${this._controlDefaultsSectionBody(t)}
    `}_controlDefaultsSectionBody(t){const e=this._config?.defaults??{},i=e.control_style??{},o=a=>this._updateDefaults({control_style:{...i,...a}});if(t==="cd:container")return n`<div class="ec-section">
        <p class="ec-hint">Box (background, border, radius, glow) applied behind every control. Per-field <b>Control Style</b> can override it.</p>
        ${this._boxRows("d-ctl-box",e.control??{},a=>this._updateDefaults({control:{...e.control,...a}}))}
      </div>`;if(t==="cd:common")return n`<div class="ec-section">
        <p class="ec-hint">The accent color is the fallback for slider fill, toggle-on, and each control's selected / focus state.</p>
        ${this._row("Accent",this._colorPicker("d-ctl-accent",i.accent_color,a=>o({accent_color:a||void 0})))}
        ${this._row("Accent gradient to",this._colorPicker("d-ctl-accent2",i.accent_color2,a=>o({accent_color2:a||void 0})))}
        <p class="ec-hint">Setting an accent gradient themes every surface that falls back to the accent — slider fill, toggle-on, dropdown / button group selected, spin box hover. Borders and focus outlines stay the flat accent color. Each surface stays flat until you give it a <b>gradient to</b> color of its own.</p>
        <div class="ec-subsection-title">Gradient angle</div>
        <p class="ec-hint">One angle for every gradient on every control. It also appears beside each <b>gradient to</b> color so you can adjust it there — they all edit this same value.</p>
        ${this._controlGradientAngleRow(i,o)}
      </div>`;if(t==="cd:density")return this._controlDensitySection(e);if(t==="cd:variants")return this._controlVariantsSection();const s=t.slice(3);return n`<div class="ec-section">${this._controlStyleRows("d-ctl",i,s,o,!1)}</div>`}_controlDensitySection(t){return n`<div class="ec-section">
      <p class="ec-hint">One set of knobs for how tight or loose <b>every</b> control is. Each sits below the per-field and per-card settings, so it can never override something you set on a specific field.</p>
      <p class="ec-hint">Leave them empty and each part of a control keeps its own natural size. Set one and the whole control surface scales off it, keeping the proportions — a slider's value readout stays a step smaller than its label, two label rows stay tighter than the gap to the control.</p>
      ${this._controlNumRow("Text size (px)",t.control_font_size,"natural (13)",e=>this._updateDefaults({control_font_size:e}),1)}
      ${this._row("Padding",n`<input class="ec-input" type="text" .value=${t.control_padding??""}
          placeholder="natural (5px 8px)"
          title="A full CSS padding value applied to every control's field box — the input, the dropdown trigger and its options, and each button group / button cell."
          @change=${e=>{const i=e.target.value.trim();this._updateDefaults({control_padding:i||void 0})}}
        />`)}
      ${this._controlNumRow("Gap (px)",t.control_gap,"natural (4)",e=>this._updateDefaults({control_gap:e}),0)}
      <p class="ec-hint">Every gap inside a control is a fixed multiple of this one: label rows sit at half, a control and its label at double.</p>
    </div>`}static _selectorDefaultsDefs(t){const e=t?"btn":"sel",i=t?"button_option_layout":"option_layout",o=[{key:"sub:container",label:"Field Container",hint:"Sizes, placement, text",icon:"mdi:card-outline",paths:[...R("control_style",J["sub:container"][e]),...R(i,Oi)]},{key:"sub:active",label:"Active State",hint:"Colors when the option is active",icon:"mdi:circle-slice-8",paths:R("control_style",J["sub:active"][e])},{key:"sub:inactive",label:"Inactive State",hint:"Colors when the option is inactive",icon:"mdi:circle-outline",paths:R("control_style",J["sub:inactive"][e])}];return t?o:[...o,{key:"sub:separation",label:"Option Separation",hint:"Frame border, gap, per-option style",icon:"mdi:dots-grid",paths:R("control_style",Qt)}]}_selectorDefaultsMenu(t){return this._navMenu(h._selectorDefaultsDefs(t==="cd:button"),this._defaultsScope())}_selectorDefaultsSection(t,e){return n`
      ${this._clearOverridesBtn(h._findDef(h._selectorDefaultsDefs(t==="cd:button"),e),this._defaultsScope())}
      ${this._selectorDefaultsSectionBody(t,e)}
    `}_selectorDefaultsSectionBody(t,e){const i=this._config?.defaults??{},o=i.control_style??{},s=c=>this._updateDefaults({control_style:{...o,...c}}),a=t==="cd:button";if(e==="sub:separation")return n`<div class="ec-section">${this._optionSeparationRows(o,s)}</div>`;if(e==="sub:active"||e==="sub:inactive")return n`<div class="ec-section">${this._selectorStateRows("d-ctl",o,s,e,a)}</div>`;const r=(a?i.button_option_layout:i.option_layout)??{},l=c=>this._updateDefaults(a?{button_option_layout:{...r,...c}}:{option_layout:{...r,...c}});return n`<div class="ec-section">
      ${this._selectorStateRows("d-ctl",o,s,"sub:container",a)}
      <div class="ec-subsection-title">Placement &amp; text</div>
      ${this._optionLayoutRows(r,l,"d-ol")}
    </div>`}_variantOptions(t,e){const i=s=>n`<option value=${s.id} .selected=${e===s.id}>${s.label}</option>`,o=We(t);return o.length?n`
      <optgroup label="Built-in">${$e(t).map(i)}</optgroup>
      <optgroup label="Custom">${o.map(i)}</optgroup>
    `:n`${It(t).map(i)}`}_updateVariants(t,e){const i=this._config?.defaults?.control_variants??{},o={...i,[t]:e([...i[t]??[]])};for(const a of Object.keys(o))o[a]?.length||delete o[a];const s=Object.keys(o).length?o:void 0;this._updateDefaults({control_variants:s}),Mt(s)}_controlVariantsSection(){const t=this._config?.defaults?.control_variants??{},e=xe.filter(o=>(t[o]??[]).length>0),i=e.reduce((o,s)=>o+(t[s]?.length??0),0);return n`
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
        ${i===0?n`<p class="ec-empty">No custom variants yet.</p>`:e.map(o=>n`
              <div class="ec-subsection-title">${zt[o]}</div>
              ${(t[o]??[]).map((s,a)=>this._variantRow(o,s,a))}
            `)}
      </div>
    `}_variantRow(t,e,i){const o=`${t}:${e.id}`,s=this._variantOpen===o,a=l=>this._updateVariants(t,c=>c.map((d,p)=>p===i?{...d,...l}:d)),r=Object.keys(e.preset??{}).length;return n`
      <div class="ec-list-row" style="flex-direction:column;align-items:stretch;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <ha-icon icon=${e.icon||gt[t]}></ha-icon>
          <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${e.label}</span>
          <span style="font-size:11px;opacity:0.55;white-space:nowrap;">${r} key${r===1?"":"s"}</span>
          <button class="ec-btn-add" style="padding:2px 8px;"
            @click=${()=>{this._variantOpen=s?"":o,this._variantError=""}}
          >${s?"Close":"Edit"}</button>
          <button class="ec-btn-add" style="padding:2px 8px;" title="Duplicate"
            @click=${()=>{const l=At(t,`${e.id}_copy`);this._updateVariants(t,c=>[...c,{...e,id:l,label:`${e.label} (copy)`}]),this._variantOpen=`${t}:${l}`}}
          >⧉</button>
          <button class="ec-btn-remove" title="Delete"
            @click=${()=>{window.confirm(`Delete variant "${e.label}"?

Fields already using it keep their current settings — they just lose the link to this variant.`)&&this._updateVariants(t,l=>l.filter((c,d)=>d!==i))}}
          >✕</button>
        </div>
        ${s?n`
          ${this._row("Label",n`<input class="ec-input" type="text" .value=${e.label}
              @change=${l=>{const c=l.target.value.trim();c?a({label:c}):l.target.value=e.label}} />`)}
          ${this._row("Icon",this._iconPicker(e.icon,l=>a({icon:l}),gt[t]))}
          ${this._row("Id",n`<span class="ec-input" style="opacity:0.6;">${e.id}</span>`)}
          <p class="ec-hint">The id is fixed after creation — fields store it to remember which variant they use. Rename the <b>Label</b> instead; that's what the Variant dropdown shows.</p>
          ${this._row("Domains",n`<input class="ec-input" type="text" placeholder="light, switch — blank for any" .value=${(e.domain??[]).join(", ")}
              @change=${l=>{const c=l.target.value.split(",").map(d=>d.trim()).filter(Boolean);a({domain:c.length?c:void 0})}} />`)}
          <div class="ec-subsection-title">Preset</div>
          <p class="ec-hint">Captured from the field this variant was saved from. Richer settings (labels, track labels, option lists) are easiest to author on a real field and re-capture with <b>Save as Variant</b>; this JSON is the escape hatch.</p>
          <textarea class="ec-input" rows="8" spellcheck="false"
            style="font-family:ui-monospace,monospace;font-size:11px;line-height:1.4;resize:vertical;"
            .value=${JSON.stringify(e.preset??{},null,2)}
            @change=${l=>{const c=l.target.value.trim();try{const d=c?JSON.parse(c):{};if(typeof d!="object"||d===null||Array.isArray(d))throw new Error("Preset must be a JSON object.");const p=Object.keys(d).filter(u=>!ke.includes(u));if(p.length)throw new Error(`Not preset keys: ${p.join(", ")}`);this._variantError="",a({preset:Object.keys(d).length?d:void 0})}catch(d){this._variantError=d instanceof Error?d.message:"Invalid JSON."}}}
          ></textarea>
          ${this._variantError?n`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._variantError}</p>`:_}
        `:_}
      </div>
    `}_controlStyleUsesGlobal(t,e){const i=t.control_style,o=h._separationOnly(i);return i===void 0||!this._colorOverridesOn.has(e)&&o!==void 0&&Object.keys(i).length===Object.keys(o).length}static _fscsDefs(t){const e=t?"btn":"sel";return[{key:"fscs:container",label:"Field Container",hint:"Border, radius, font sizes",icon:"mdi:card-outline",paths:R("control_style",h._containerPathsForField(e))},{key:"fscs:active",label:"Active State",hint:"Colors when the option is active",icon:"mdi:circle-slice-8",paths:R("control_style",J["sub:active"][e])},{key:"fscs:inactive",label:"Inactive State",hint:"Colors when the option is inactive",icon:"mdi:circle-outline",paths:R("control_style",J["sub:inactive"][e])}]}_fieldSecControlStyle(t,e,i,o=!1){const s=this._updFor(t,e,o),a=this._idFor(t,e,o),r=i.control_style,l=u=>s({control_style:{...i.control_style,...u}}),c=h._separationOnly(r),d=this._controlStyleUsesGlobal(i,a),p=i.type==="button_group"||i.type==="button";return n`
      <div class="ec-section">
        ${this._row("Use global control style",n`<input type="checkbox" .checked=${d}
            @change=${u=>{u.target.checked?(this._colorOverridesOn.delete(a),s({control_style:c})):(this._colorOverridesOn.add(a),s({control_style:{...r??{}}})),this.requestUpdate()}}
          />`)}
        ${d?_:p?this._navMenu(h._fscsDefs(i.type==="button"),this._fieldScope(t,e,o)):n`
          <div class="ec-subsection-title">Color overrides</div>
          ${this._controlStyleRows(`${a}-ctl`,r??{},i.type,l)}
        `}
        <div class="ec-subsection-title">Container box</div>
        ${this._row("Override container",n`<input type="checkbox" .checked=${i.control_box!==void 0}
            @change=${u=>s({control_box:u.target.checked?{}:void 0})}
          />`)}
        ${i.control_box!==void 0?this._boxRows(`${a}-ctlbox`,i.control_box,u=>s({control_box:{...i.control_box,...u}}),be):_}
        ${this._cssRow(i.extra_css,u=>s({extra_css:u}))}
      </div>
    `}_fieldControlStyleStateSection(t,e,i,o,s=!1){const a=this._updFor(t,e,s),r=this._idFor(t,e,s),l=i.control_style??{},c=p=>a({control_style:{...i.control_style,...p}}),d=o==="fscs:active"?"sub:active":o==="fscs:inactive"?"sub:inactive":"sub:container";return n`
      ${this._clearOverridesBtn(h._findDef(h._fscsDefs(i.type==="button"),o),this._fieldScope(t,e,s))}
      <div class="ec-section">${this._selectorStateRows(`${r}-ctl`,l,c,d,i.type==="button")}</div>
    `}_defaultsSecLayout(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
          ${this._row("Power unit",n`<select class="ec-select"
              .value=${t.power_unit??""}
              @change=${e=>{const i=e.target.value;this._updateDefaults({power_unit:i||void 0})}}
            >
              <option value=""   .selected=${!t.power_unit}>Auto (W / kW)</option>
              <option value="W"  .selected=${t.power_unit==="W"}>Always W</option>
              <option value="kW" .selected=${t.power_unit==="kW"}>Always kW</option>
            </select>`)}

          ${this._numRow("Stats refresh (min)",{value:t.stat_update_interval,onChange:e=>this._updateDefaults({stat_update_interval:e}),min:1,max:60,placeholder:"5"})}

          ${this._row("Font family",n`<input class="ec-input" type="text" .value=${t.font_family??""}
              placeholder="inherit"
              @change=${e=>{const i=e.target.value;this._updateDefaults({font_family:i===""?void 0:i})}}
            />`)}

          ${this._row("Font family – monospace",n`<input class="ec-input" type="text" .value=${t.mono_font_family??""}
              placeholder="'Courier New', monospace"
              @change=${e=>{const i=e.target.value;this._updateDefaults({mono_font_family:i===""?void 0:i})}}
            />`)}
          <p class="ec-hint">Only used where a fixed-width font is required (e.g. numeric counters, timers).</p>

          ${this._row("Card columns",n`<select class="ec-select"
              .value=${String(t.card_columns??v("card_columns")??1)}
              @change=${e=>{const i=Number(e.target.value);this._updateDefaults({card_columns:i===1?void 0:i})}}
            >
              <option value="1" .selected=${(t.card_columns??1)===1}>1</option>
              <option value="2" .selected=${(t.card_columns??1)===2}>2</option>
              <option value="3" .selected=${(t.card_columns??1)===3}>3</option>
              <option value="4" .selected=${(t.card_columns??1)===4}>4</option>
              <option value="5" .selected=${(t.card_columns??1)===5}>5</option>
              <option value="6" .selected=${(t.card_columns??1)===6}>6</option>
              <option value="7" .selected=${(t.card_columns??1)===7}>7</option>
              <option value="8" .selected=${(t.card_columns??1)===8}>8</option>
            </select>`)}

          ${this._numRow("Field gap (px)",{value:t.field_gap,onChange:e=>this._updateDefaults({field_gap:e}),min:0,placeholder:"4"})}
          ${this._numRow("Column gap (px)",{value:t.column_gap,onChange:e=>this._updateDefaults({column_gap:e}),min:0,placeholder:"3"})}
      </div>
    `}_elemLibMenu(){const t=h._ELEM_LIB_SECTIONS,e=this._currentListFilter(),i=this._config?.defaults;return n`
      ${this._listFilterBox(t.length)}
      ${t.filter(o=>!e||o.label.toLowerCase().includes(e)).map(o=>this._navBtn(o.key,o.label,o.hint,o.icon,Ct(i,o.paths)))}
    `}_elemLibSection(t){let e;switch(t){case"el:thermo-v":e=this._elemThermoV();break;case"el:thermo-h":e=this._elemThermoH();break;case"el:bat-h":e=this._elemBatH();break;case"el:bat-v":e=this._elemBatV();break;case"el:tank-cyl":e=this._elemTankCyl();break;case"el:tank-water":e=this._elemTankWater();break;case"el:tank-ferm":e=this._elemTankFerm();break;case"el:tank-cone":e=this._elemTankCone();break;case"el:inverter":e=this._elemInverter();break;case"el:gauge-arc":e=this._elemGaugeArc();break;default:return n``}const i=h.ELEM_CSS_KEY[t],o=this._config?.defaults??{};return n`
      ${this._clearOverridesBtn(h._findDef(h._ELEM_LIB_SECTIONS,t),this._defaultsScope())}
      ${e}
      <div class="ec-section">
        ${this._cssRow(o[i],s=>this._updateDefaults({[i]:s}))}
      </div>`}_elemThermoV(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-tc",t.thermo_tick_color,e=>this._updateDefaults({thermo_tick_color:e||void 0})))}
              ${this._row("Tick position",n`<select class="ec-select"
                  .value=${t.thermo_text_position??v("thermo_text_position")??"right"}
                  @change=${e=>this._updateDefaults({thermo_text_position:e.target.value})}
                >
                  ${["right","left","both"].map(e=>n`<option value=${e} .selected=${(t.thermo_text_position??v("thermo_text_position")??"right")===e}>${e.charAt(0).toUpperCase()+e.slice(1)}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",n`<input type="checkbox" class="ec-checkbox"
                  .checked=${t.thermo_show_minor_tick_text??v("thermo_show_minor_tick_text")??!1}
                  @change=${e=>this._updateDefaults({thermo_show_minor_tick_text:e.target.checked})} />`)}
              ${this._numRow("Tick font size",{value:t.thermo_tick_font_size,onChange:e=>this._updateDefaults({thermo_tick_font_size:e}),min:1,max:20,step:.5,placeholder:"4"})}
              ${this._numRow("Major tick length",{value:t.thermo_major_tick_length,onChange:e=>this._updateDefaults({thermo_major_tick_length:e}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Major tick thickness",{value:t.thermo_major_tick_width,onChange:e=>this._updateDefaults({thermo_major_tick_width:e}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick length",{value:t.thermo_minor_tick_length,onChange:e=>this._updateDefaults({thermo_minor_tick_length:e}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick thickness",{value:t.thermo_minor_tick_width,onChange:e=>this._updateDefaults({thermo_minor_tick_width:e}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._row("Grid line color",this._colorPicker("d-thermo-gc",t.thermo_grid_color,e=>this._updateDefaults({thermo_grid_color:e||void 0})))}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._numRow("Above temperature transparency",{value:t.thermo_fill_opacity_above,onChange:e=>this._updateDefaults({thermo_fill_opacity_above:e}),min:0,max:1,step:.05,placeholder:"0.5"})}
              ${this._numRow("Decimals",{value:t.thermo_decimals,onChange:e=>this._updateDefaults({thermo_decimals:e}),min:0,max:4,step:1,placeholder:"1"})}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-ttc",t.thermo_temp_color,e=>this._updateDefaults({thermo_temp_color:e||void 0})))}
              ${this._numRow("Temperature value size",{value:t.thermo_temp_font_size,onChange:e=>this._updateDefaults({thermo_temp_font_size:e}),min:4,max:30,step:.5,placeholder:"10"})}
              ${this._row("Fill color",this._colorPicker("d-thermo-fc",t.thermo_fill_color,e=>this._updateDefaults({thermo_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.thermo_fill_color2?n`${this._colorPicker("d-thermo-fc2",t.thermo_fill_color2,e=>this._updateDefaults({thermo_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_fill_color2:t.thermo_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemThermoH(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              <div class="ec-subsection-title">…– ticks</div>
              ${this._row("Tick color",this._colorPicker("d-thermo-h-tc",t.thermo_h_tick_color,e=>this._updateDefaults({thermo_h_tick_color:e||void 0})))}
              ${this._row("Tick position",n`<select class="ec-select"
                  .value=${t.thermo_h_text_position??v("thermo_h_text_position")??"right"}
                  @change=${e=>this._updateDefaults({thermo_h_text_position:e.target.value})}
                >
                  ${["right","left","both"].map(e=>n`<option value=${e} .selected=${(t.thermo_h_text_position??v("thermo_h_text_position")??"right")===e}>${{right:"Bottom",left:"Top",both:"Both"}[e]}</option>`)}
                </select>`)}
              ${this._row("Minor tick text",n`<input type="checkbox" class="ec-checkbox"
                  .checked=${t.thermo_h_show_minor_tick_text??v("thermo_h_show_minor_tick_text")??!1}
                  @change=${e=>this._updateDefaults({thermo_h_show_minor_tick_text:e.target.checked})} />`)}
              ${this._numRow("Tick font size",{value:t.thermo_h_tick_font_size,onChange:e=>this._updateDefaults({thermo_h_tick_font_size:e}),min:1,max:20,step:.5,placeholder:"4"})}
              ${this._numRow("Major tick length",{value:t.thermo_h_major_tick_length,onChange:e=>this._updateDefaults({thermo_h_major_tick_length:e}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Major tick thickness",{value:t.thermo_h_major_tick_width,onChange:e=>this._updateDefaults({thermo_h_major_tick_width:e}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick length",{value:t.thermo_h_minor_tick_length,onChange:e=>this._updateDefaults({thermo_h_minor_tick_length:e}),min:.5,max:20,step:.5,placeholder:"auto (from SVG)"})}
              ${this._numRow("Minor tick thickness",{value:t.thermo_h_minor_tick_width,onChange:e=>this._updateDefaults({thermo_h_minor_tick_width:e}),min:.1,max:5,step:.05,placeholder:"auto (from SVG)"})}
              ${this._row("Grid line color",this._colorPicker("d-thermo-h-gc",t.thermo_h_grid_color,e=>this._updateDefaults({thermo_h_grid_color:e||void 0})))}
              <div class="ec-subsection-title">Fill &amp; temperature</div>
              ${this._numRow("Above temperature transparency",{value:t.thermo_h_fill_opacity_above,onChange:e=>this._updateDefaults({thermo_h_fill_opacity_above:e}),min:0,max:1,step:.05,placeholder:"0.5"})}
              ${this._numRow("Decimals",{value:t.thermo_h_decimals,onChange:e=>this._updateDefaults({thermo_h_decimals:e}),min:0,max:4,step:1,placeholder:"1"})}
              ${this._row("Temperature value color",this._colorPicker("d-thermo-h-ttc",t.thermo_h_temp_color,e=>this._updateDefaults({thermo_h_temp_color:e||void 0})))}
              ${this._numRow("Temperature value size",{value:t.thermo_h_temp_font_size,onChange:e=>this._updateDefaults({thermo_h_temp_font_size:e}),min:4,max:30,step:.5,placeholder:"10"})}
              ${this._row("Fill color",this._colorPicker("d-thermo-h-fc",t.thermo_h_fill_color,e=>this._updateDefaults({thermo_h_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.thermo_h_fill_color2?n`${this._colorPicker("d-thermo-h-fc2",t.thermo_h_fill_color2,e=>this._updateDefaults({thermo_h_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({thermo_h_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({thermo_h_fill_color2:t.thermo_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemBatH(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-bh-fc",t.battery_h_fill_color,e=>this._updateDefaults({battery_h_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.battery_h_fill_color2?n`${this._colorPicker("d-bh-fc2",t.battery_h_fill_color2,e=>this._updateDefaults({battery_h_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_h_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_h_fill_color2:t.battery_h_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemBatV(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-bv-fc",t.battery_v_fill_color,e=>this._updateDefaults({battery_v_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.battery_v_fill_color2?n`${this._colorPicker("d-bv-fc2",t.battery_v_fill_color2,e=>this._updateDefaults({battery_v_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({battery_v_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({battery_v_fill_color2:t.battery_v_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
      </div>
    `}_elemTankCyl(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tc-fc",t.tank_cylinder_fill_color,e=>this._updateDefaults({tank_cylinder_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.tank_cylinder_fill_color2?n`${this._colorPicker("d-tc-fc2",t.tank_cylinder_fill_color2,e=>this._updateDefaults({tank_cylinder_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cylinder_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_fill_color2:t.tank_cylinder_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",n`<select class="ec-select"
                  .value=${t.tank_cylinder_fill_direction??"up"}
                  @change=${e=>this._updateDefaults({tank_cylinder_fill_direction:e.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",t.tank_cylinder_tank_color?n`${this._colorPicker("d-tc-wc",t.tank_cylinder_tank_color,e=>this._updateDefaults({tank_cylinder_tank_color:e||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cylinder_tank_color:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cylinder_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankWater(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tw-fc",t.tank_water_fill_color,e=>this._updateDefaults({tank_water_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.tank_water_fill_color2?n`${this._colorPicker("d-tw-fc2",t.tank_water_fill_color2,e=>this._updateDefaults({tank_water_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_water_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_fill_color2:t.tank_water_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",n`<select class="ec-select"
                  .value=${t.tank_water_fill_direction??"up"}
                  @change=${e=>this._updateDefaults({tank_water_fill_direction:e.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",t.tank_water_tank_color?n`${this._colorPicker("d-tw-wc",t.tank_water_tank_color,e=>this._updateDefaults({tank_water_tank_color:e||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_water_tank_color:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_water_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankFerm(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tf-fc",t.tank_fermenter_fill_color,e=>this._updateDefaults({tank_fermenter_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.tank_fermenter_fill_color2?n`${this._colorPicker("d-tf-fc2",t.tank_fermenter_fill_color2,e=>this._updateDefaults({tank_fermenter_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_fermenter_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_fill_color2:t.tank_fermenter_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",n`<select class="ec-select"
                  .value=${t.tank_fermenter_fill_direction??"up"}
                  @change=${e=>this._updateDefaults({tank_fermenter_fill_direction:e.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",t.tank_fermenter_tank_color?n`${this._colorPicker("d-tf-wc",t.tank_fermenter_tank_color,e=>this._updateDefaults({tank_fermenter_tank_color:e||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_fermenter_tank_color:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_fermenter_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemTankCone(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Fill color",this._colorPicker("d-tn-fc",t.tank_cone_fill_color,e=>this._updateDefaults({tank_cone_fill_color:e||void 0})))}
              ${this._row("Top Graduated Color (Opt)",t.tank_cone_fill_color2?n`${this._colorPicker("d-tn-fc2",t.tank_cone_fill_color2,e=>this._updateDefaults({tank_cone_fill_color2:e||void 0}),{clearTitle:"Remove gradient",onClear:()=>this._updateDefaults({tank_cone_fill_color2:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_fill_color2:t.tank_cone_fill_color??"#7ce800"})}>+ Add gradient end</button>`)}
              ${this._row("Fill direction",n`<select class="ec-select"
                  .value=${t.tank_cone_fill_direction??"up"}
                  @change=${e=>this._updateDefaults({tank_cone_fill_direction:e.target.value})}>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>`)}
              ${this._row("Tank wall color",t.tank_cone_tank_color?n`${this._colorPicker("d-tn-wc",t.tank_cone_tank_color,e=>this._updateDefaults({tank_cone_tank_color:e||void 0}),{clearTitle:"Remove (use SVG default)",onClear:()=>this._updateDefaults({tank_cone_tank_color:void 0})})}`:n`<button class="ec-lib-browse-btn" style="font-size:12px" @click=${()=>this._updateDefaults({tank_cone_tank_color:"#808080"})}>+ Set wall color</button>`)}
      </div>
    `}_elemInverter(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Line color",this._colorPicker("d-inv-lc",t.inverter_line_color,e=>this._updateDefaults({inverter_line_color:e||void 0})))}
      </div>
    `}_elemGaugeArc(){const t=this._config?.defaults??{};return n`
      <div class="ec-section">
              ${this._row("Needle color",this._colorPicker("d-ga-nc",t.gauge_arc_needle_color,e=>this._updateDefaults({gauge_arc_needle_color:e||void 0})))}
              ${this._row("Label color",this._colorPicker("d-ga-lc",t.gauge_arc_label_color,e=>this._updateDefaults({gauge_arc_label_color:e||void 0})))}
              ${this._numRow("Label size",{value:t.gauge_arc_label_size,onChange:e=>this._updateDefaults({gauge_arc_label_size:e}),min:6,max:24,step:1,placeholder:"11"})}
      </div>
    `}_extCardScope(t){return{root:this._extCards()[t],apply:e=>this._updateExtCard(t,e)}}_extDefaultsScope(){return{root:this._config?.extended_card_defaults,apply:t=>this._updateExtDefaults(t)}}_renderPopoverPanel(){const t=this._navPath,e=this._extCards();if(t.length===0){const a=h._POPOVER_GLOBAL_DEFAULTS_DEF;return n`
        ${this._navBtn(a.key,a.label,a.hint,a.icon,Ct(this._config?.extended_card_defaults,a.paths))}
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addExtCard}>+ Popover Card</button>
        </div>
        ${e.length===0?this._emptyAdd("No popover cards yet — add one",()=>this._addExtCard()):e.map((r,l)=>this._itemCard({dragKey:`extcard:${l}`,icon:"mdi:picture-in-picture-bottom-right",label:r.name??`Popover Card ${l+1}`,sub:`${r.fields.length} field${r.fields.length===1?"":"s"}`,selected:l===this._selExtCard,onClick:()=>{this._selExtCard=l,this._selExtField=-1,this._navPush(`card:${r.id}`,r.name??`Popover Card ${l+1}`)},actions:n`
                <button class="ec-btn-dup"
                  @click=${c=>{c.stopPropagation(),this._duplicateExtCard(l)}}
                  title="Duplicate card">⧉</button>
                <button class="ec-btn-remove"
                  @click=${c=>{c.stopPropagation(),this._removeExtCard(l)}}
                  title="Remove">✕</button>
              `}))}
      `}if(t.length===1&&t[0].key==="defaults-global")return n`
        ${this._clearOverridesBtn(h._POPOVER_GLOBAL_DEFAULTS_DEF,this._extDefaultsScope())}
        ${this._popoverGlobalDefaults()}
      `;const i=this._crumbIndex(t[0].key,e);this._selExtCard=i;const o=e[i];if(!o)return this._navDeadEnd();if(t.length===1)return n`
        ${this._navMenu(h._POPOVER_CARD_SECTIONS,this._extCardScope(i))}
        ${this._renderExtFieldList(i,o)}
      `;const s=t[1].key;if(s.startsWith("field:")){const a=this._crumbIndex(s,o.fields);this._selExtField=a;const r=o.fields[a];if(!r)return this._navDeadEnd();if(t.length===4&&t[2].key==="fsec:series"&&t[3].key.startsWith("egs:")){const l=this._crumbIndex(t[3].key,r.graph_series);return this._selExtSeries=l,this._fieldSecGraphSeriesItem(i,a,r,l,!0)}if(t.length===4&&t[2].key==="fsec:options"){if(t[3].key.startsWith("eopt:")){const l=this._crumbIndex(t[3].key,r.options);return this._selExtOption=l,this._fieldSecOptionItem(i,a,r,l,!0)}if(t[3].key==="optlayout")return n`
            ${this._clearOverridesBtn(h._OPTION_LAYOUT_DEF,this._fieldScope(i,a,!0))}
            <div class="ec-section">${this._optionLayoutEditor(r,this._updFor(i,a,!0),this._idFor(i,a,!0))}</div>
          `}return t.length===4&&t[2].key==="fsec:controlstyle"&&t[3].key.startsWith("fscs:")?this._fieldControlStyleStateSection(i,a,r,t[3].key,!0):t.length===3?this._fieldSection(i,a,r,t[2].key,!0):this._renderExtFieldPanel(i,a,r)}return this._popoverCardSection(i,o,s)}_popoverGlobalDefaults(){return this._config?n`
      <div class="ec-section">
              ${this._row("Columns (default)",n`<select class="ec-select"
                  .value=${String(this._config.extended_card_defaults?.columns??v("columns")??2)}
                  @change=${t=>this._updateExtDefaults({columns:Number(t.target.value)})}
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
              ${this._row("Width % (default)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="20" max="100"
                  .value=${this._config.extended_card_defaults?.width!=null?String(this._config.extended_card_defaults.width):""}
                  placeholder="70"
                  @change=${t=>{const e=t.target.value;this._updateExtDefaults({width:e===""?void 0:Number(e)})}}
                />`)}`)}
              ${this._row("Height % (default)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="10" max="100"
                  .value=${this._config.extended_card_defaults?.height!=null?String(this._config.extended_card_defaults.height):""}
                  placeholder="auto"
                  @change=${t=>{const e=t.target.value;this._updateExtDefaults({height:e===""?void 0:Number(e)})}}
                />`)}`)}
              ${this._row("Field gap (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.field_gap!=null?String(this._config.extended_card_defaults.field_gap):""}
                  placeholder="8"
                  @change=${t=>{const e=t.target.value;this._updateExtDefaults({field_gap:e===""?void 0:Number(e)})}}
                />`)}`)}
              ${this._row("Column gap (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
                  .value=${this._config.extended_card_defaults?.column_gap!=null?String(this._config.extended_card_defaults.column_gap):""}
                  placeholder="(from global)"
                  @change=${t=>{const e=t.target.value;this._updateExtDefaults({column_gap:e===""?void 0:Number(e)})}}
                />`)}`)}
              <div class="ec-subsection-title">Card default</div>
              ${this._boxRows("extd-card",this._config.extended_card_defaults?.card??{},t=>this._updateExtDefaults({card:{...this._config.extended_card_defaults?.card,...t}}))}
              <div class="ec-subsection-title">Label default</div>
              ${this._textRows("extd-lbl",this._config.extended_card_defaults?.label??{},t=>this._updateExtDefaults({label:{...this._config.extended_card_defaults?.label,...t}}))}
              <div class="ec-subsection-title">Value default</div>
              ${this._textRows("extd-val",this._config.extended_card_defaults?.value??{},t=>this._updateExtDefaults({value:{...this._config.extended_card_defaults?.value,...t}}))}
      </div>
    `:n``}_popoverCardSection(t,e,i){const o=()=>{switch(i){case"sec:defaults":return this._popoverSecDefaults(t,e);case"sec:style":return this._popoverSecStyle(t,e);case"sec:text":return this._popoverSecText(t,e);default:return n``}};return n`
      ${this._clearOverridesBtn(h._findDef(h._POPOVER_CARD_SECTIONS,i),this._extCardScope(t))}
      ${o()}
    `}_popoverSecDefaults(t,e){return n`
      <div class="ec-section">
        ${this._row("Name",n`<input class="ec-input" type="text" .value=${e.name??""}
            @change=${i=>this._updateExtCard(t,{name:i.target.value})}
          />`)}

        ${this._row("Columns",n`<select class="ec-select"
            .value=${String(e.columns??v("columns")??2)}
            @change=${i=>this._updateExtCard(t,{columns:Number(i.target.value)})}
          >
            <option value="1">1</option>
            <option value="2" .selected=${(e.columns??v("columns")??2)===2}>2</option>
            <option value="3" .selected=${e.columns===3}>3</option>
            <option value="4" .selected=${e.columns===4}>4</option>
            <option value="5" .selected=${e.columns===5}>5</option>
            <option value="6" .selected=${e.columns===6}>6</option>
            <option value="7" .selected=${e.columns===7}>7</option>
            <option value="8" .selected=${e.columns===8}>8</option>
          </select>`)}

        ${this._numRow("Width %",{value:e.width,onChange:i=>this._updateExtCard(t,{width:i}),min:20,max:100,placeholder:"(from defaults)"})}

        ${this._numRow("Height %",{value:e.height,onChange:i=>this._updateExtCard(t,{height:i}),min:10,max:100,placeholder:"auto"})}

        ${this._row("Align",n`<select class="ec-select"
            .value=${e.align??v("align")??"left"}
            @change=${i=>this._updateExtCard(t,{align:i.target.value})}
          >
            ${_t.map(i=>n`<option value=${i} .selected=${(e.align??v("align")??"left")===i}>${i}</option>`)}
          </select>`)}

        ${this._numRow("Field gap (px)",{value:e.field_gap,onChange:i=>this._updateExtCard(t,{field_gap:i}),min:0,placeholder:"(from defaults)"})}

        ${this._numRow("Column gap (px)",{value:e.column_gap,onChange:i=>this._updateExtCard(t,{column_gap:i}),min:0,placeholder:"(from defaults)"})}
      </div>
    `}_popoverSecStyle(t,e){return n`
      <div class="ec-section">
        ${this._boxRows(`ext${t}`,e.box??{},i=>this._updateExtCardBox(t,i))}
      </div>
    `}_popoverSecText(t,e){return n`
      <div class="ec-section">
        <div class="ec-subsection-title">Label Default</div>
        ${this._textRows(`ext${t}-ls`,e.label_style??{},i=>this._updateExtCard(t,{label_style:{...e.label_style,...i}}))}

        <div class="ec-subsection-title">Value Default</div>
        ${this._textRows(`ext${t}-vs`,e.value_style??{},i=>this._updateExtCard(t,{value_style:{...e.value_style,...i}}))}
      </div>
    `}_renderExtFieldList(t,e){const i=e.fields;return n`
      <div class="ec-section ec-section--fields">
        <div class="ec-section-header">
          <span class="ec-section-title">Fields</span>
          ${this._copiedField?n`<button class="ec-btn-paste"
            @click=${()=>this._pasteField(t,!0)}
            title="Paste copied field onto this card">⎗ Field</button>`:_}
          <button class="ec-btn-add" @click=${()=>this._addExtField(t)}>+ Field</button>
        </div>
        ${this._listFilterBox(i.length)}
        ${i.length===0?this._emptyAdd("No fields yet — add one",()=>this._addExtField(t)):i.map((o,s)=>({f:o,efi:s})).filter(({f:o})=>{const s=this._currentListFilter();return!s||`${this._fieldName(o)} ${this._fieldSub(o)}`.toLowerCase().includes(s)}).map(({f:o,efi:s})=>this._itemCard({dragKey:`extfield:${t}:${s}`,icon:gt[o.type],label:this._fieldName(o),sub:this._fieldSub(o),selected:s===this._selExtField,onClick:()=>{this._selExtField=s,this._navPush(`field:${o.id}`,`Field ${s+1}`)},actions:n`
                ${this._copiedFieldSrc?.isExt===!0&&this._copiedFieldSrc.cardId===e.id&&this._copiedFieldSrc.fieldId===o.id?n`<span class="ec-copy-badge">Copied</span>`:n`<button class="ec-btn-copy"
                      @click=${a=>{a.stopPropagation(),this._copyField(t,s,!0)}}
                      title="Copy this field">⎘</button>`}
                <button class="ec-btn-dup"
                  @click=${a=>{a.stopPropagation(),this._duplicateField(t,s,!0)}}
                  title="Duplicate field">⧉</button>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeExtField(t,s)}}
                  title="Remove">✕</button>
              `}))}
      </div>
    `}_extFieldHeader(t,e,i){const o=s=>this._updateExtField(t,e,s);return n`
        <div class="ec-section-header">
          <span class="ec-section-title">Field ${e+1}</span>
        </div>

        ${this._row("Type",n`<select class="ec-select"
            .value=${i.type==="graph"?"svg":i.type}
            @change=${s=>{const a=s.target.value;if(j(a)){const r=re(a);o({type:a,...r?xt(a,r):{}})}else o({type:a}),a==="svg"&&this._openGGPicker(t,e,!0)}}
          >
            ${Ht.map(s=>n`<option value=${s} .selected=${(i.type==="graph"?"svg":i.type)===s}>${zt[s]}</option>`)}
          </select>`)}

        ${j(i.type)&&It(i.type).length>1?this._row("Variant",n`<select class="ec-select"
            .value=${i.variant??""}
            @change=${s=>{const a=s.target.value;o(xt(i.type,a))}}
          >
            ${this._variantOptions(i.type,i.variant)}
          </select>`):_}

        ${i.type==="svg"||i.type==="graph"?this._row("Element",n`<div style="display:flex;gap:8px;align-items:center;">
            <span class="ec-input" style="flex:1;min-width:0;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${this._elementLabel(i)}</span>
            <button class="ec-lib-browse-btn" style="flex:0 0 auto;white-space:nowrap;" @click=${()=>this._openGGPicker(t,e,!0)}>⊞ Change type…</button>
          </div>`):_}

        ${this._row("Display Name",n`<input class="ec-input" type="text"
            .value=${i.display_name??""}
            placeholder="Friendly name for the field list"
            @change=${s=>{const a=s.target.value.trim();o({display_name:a===""?void 0:a})}}
          />`)}

        ${this._row("Column",n`<div style="display:flex;gap:4px;align-items:center">
            ${this._numWrap(n`<input class="ec-input ec-input-num-small" type="number" min="1" max="8"
              .value=${i.column!=null?String(i.column):""}
              placeholder="auto"
              title="Force this field into a specific column (1–8). Leave blank for auto flow."
              @change=${s=>{const a=s.target.value;o({column:a===""?void 0:Number(a)})}}
            />`)}
            <span style="font-size:11px;opacity:0.6">Span end (Opt)</span>
            ${this._numWrap(n`<input class="ec-input ec-input-num-small" type="number" min="2" max="8"
              .value=${i.column_end!=null?String(i.column_end):""}
              placeholder="–"
              title="Span End Column (Opt) — last column this field occupies"
              @change=${s=>{const a=s.target.value;o({column_end:a===""?void 0:Number(a)})}}
            />`)}
          </div>`)}
    `}_renderExtFieldPanel(t,e,i){return i.type==="blank"||i.type==="rule"?n`
        <div class="ec-section ec-section--fields">
          ${this._extFieldHeader(t,e,i)}
          ${this._fieldSecBlankOrRule(t,e,i,!0)}
        </div>
      `:n`
      <div class="ec-section ec-section--fields">
        ${this._extFieldHeader(t,e,i)}
        ${this._fieldSectionMenu(i,t,e,!0)}
      </div>
    `}_renderCanvasRibbonPanel(){const t=this._navPath;return t.length===0?this._canvasSectionMenu():this._canvasSection(t[0].key)}_canvasScope(){return{root:this._config,apply:t=>{this._config&&this._emit(H(this._config,t))}}}_canvasSectionMenu(){return this._navMenu(h._CANVAS_SECTIONS,this._canvasScope())}_canvasSection(t){const e=()=>{switch(t){case"sec:mode":return this._canvasSecMode();case"sec:size":return this._canvasSecSize();case"sec:box":return this._canvasSecBox();case"sec:bg":return n`<div class="ec-section">${this._renderBackgroundControls()}</div>`;default:return n``}};return n`
      ${this._clearOverridesBtn(h._findDef(h._CANVAS_SECTIONS,t),this._canvasScope())}
      ${e()}
    `}_gridEntryWarning(){const t=this._config?.cards?.length??0,e=this._embCards().length;if(!t&&!e)return _;const i=[];return t&&i.push(`${t} card${t===1?"":"s"}`),e&&i.push(`${e} embedded card${e===1?"":"s"}`),n`
      <ha-alert alert-type="warning">
        Switching to Grid re-lays out ${i.join(" and ")}: each one snaps to the nearest
        grid intersection, is re-anchored to its centre, and is resized to a whole number of
        columns. Switching back to Precision does not restore the old layout — use Ctrl+Z to
        undo.
      </ha-alert>
    `}_canvasSecMode(){const t=this._config?.canvas??{},e=t.layout_mode==="grid";return n`
      <div class="ec-section">
          <div class="ec-mode-tiles">
            <button type="button" class="ec-mode-tile${e?"":" active"}"
              @click=${()=>this._setLayoutMode("precision")}
            >
              <ha-icon icon="mdi:crosshairs-gps"></ha-icon>
              <span>Precision</span>
            </button>
            <button type="button" class="ec-mode-tile${e?" active":""}"
              @click=${()=>this._setLayoutMode("grid")}
            >
              <ha-icon icon="mdi:grid"></ha-icon>
              <span>Grid</span>
            </button>
          </div>

          ${e?_:this._gridEntryWarning()}

          ${t.layout_mode==="grid"?n`
            ${this._row("Grid columns",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(t.grid?.columns??10)}
                @change=${i=>{const o=Math.max(1,Number(i.target.value)||1);this._updateCanvas({grid:{...t.grid??{columns:10,rows:15},columns:o}})}}
              />`)}`)}

            ${this._row("Grid rows",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1"
                .value=${String(t.grid?.rows??15)}
                @change=${i=>{const o=Math.max(1,Number(i.target.value)||1);this._updateCanvas({grid:{...t.grid??{columns:10,rows:15},rows:o}})}}
              />`)}`)}

            ${this._row("Card padding (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
                .value=${String(t.grid?.padding??0)}
                @change=${i=>{const o=Math.max(0,Number(i.target.value)||0);this._updateCanvas({grid:{...t.grid??{columns:10,rows:15},padding:o}})}}
              />`)}`)}
          `:_}
      </div>
    `}_canvasSecSize(){const t=this._config?.canvas??{};return n`
      <div class="ec-section">
          ${this._numRow("Width (px)",{value:t.width,onChange:e=>this._updateCanvas({width:e}),min:1,placeholder:"image width"})}

          ${this._numRow("Height (px)",{value:t.height,onChange:e=>this._updateCanvas({height:e}),min:1,placeholder:"from aspect"})}

          ${this._row("Fit",n`<select class="ec-select"
              .value=${t.fit??v("background_fit")??"cover"}
              @change=${e=>this._updateCanvas({fit:e.target.value})}
            >
              <option value="cover" .selected=${(t.fit??v("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${t.fit==="contain"}>contain</option>
            </select>`)}
          <p class="ec-hint">The base fit for the background image. The Background section's own "Background fit" overrides this when set.</p>

          <div class="ec-subsection-title">Extend (px)</div>

          ${this._row("Top",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${t.extend?.top!=null?String(t.extend.top):""}
              placeholder="0"
              @change=${e=>{const i=e.target.value;this._updateCanvas({extend:{...t.extend,top:i===""?void 0:Number(i)}})}}
            />`)}`)}

          ${this._row("Right",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${t.extend?.right!=null?String(t.extend.right):""}
              placeholder="0"
              @change=${e=>{const i=e.target.value;this._updateCanvas({extend:{...t.extend,right:i===""?void 0:Number(i)}})}}
            />`)}`)}

          ${this._row("Bottom",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${t.extend?.bottom!=null?String(t.extend.bottom):""}
              placeholder="0"
              @change=${e=>{const i=e.target.value;this._updateCanvas({extend:{...t.extend,bottom:i===""?void 0:Number(i)}})}}
            />`)}`)}

          ${this._row("Left",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0"
              .value=${t.extend?.left!=null?String(t.extend.left):""}
              placeholder="0"
              @change=${e=>{const i=e.target.value;this._updateCanvas({extend:{...t.extend,left:i===""?void 0:Number(i)}})}}
            />`)}`)}
      </div>
    `}_canvasSecBox(){const t=this._config?.canvas??{};return n`
      <div class="ec-section">
          ${this._boxRows("cv",t.box??{},e=>this._updateCanvas({box:{...t.box,...e}}))}
      </div>
    `}_renderBackgroundControls(){if(!this._config)return n``;const t=this._config.background??{},e=t.source??"auto";return n`
          <div class="ec-subsection-title">Background</div>

          ${this._row("Source",n`<select class="ec-select"
              .value=${e}
              @change=${i=>this._updateBackground({source:i.target.value})}
            >
              <option value="auto" .selected=${e==="auto"}>auto (sun)</option>
              <option value="day" .selected=${e==="day"}>day</option>
              <option value="night" .selected=${e==="night"}>night</option>
              <option value="entity" .selected=${e==="entity"}>entity</option>
            </select>`)}

          ${e==="auto"||e===void 0?this._entitySelector({label:"Sun entity",entity:t.sun_entity,onEntity:i=>this._updateBackground({sun_entity:i}),attribute:t.sun_attribute,onAttribute:i=>this._updateBackground({sun_attribute:i})}):_}

          ${e==="entity"?this._entitySelector({label:"Mode entity",entity:t.mode_entity,onEntity:i=>this._updateBackground({mode_entity:i}),attribute:t.mode_attribute,onAttribute:i=>this._updateBackground({mode_attribute:i})}):_}

          ${this._row("Background fit",n`<select class="ec-select"
              .value=${t.fit??v("background_fit")??"cover"}
              @change=${i=>this._updateBackground({fit:i.target.value})}
            >
              <option value="cover" .selected=${(t.fit??v("background_fit")??"cover")==="cover"}>cover</option>
              <option value="contain" .selected=${t.fit==="contain"}>contain</option>
            </select>`)}
          <p class="ec-hint">Overrides the Canvas Size section's "Fit" when set. Leave unset to use that value.</p>

          ${this._numRow("EV count",{value:this._config.ev_count,onChange:i=>this._emit({...this._config,ev_count:i}),min:0,placeholder:"0"})}

          <div class="ec-subsection-title">Images</div>
          <p class="ec-hint">One Day and one Night image per EV variant — raising EV count adds rows.</p>

          ${(()=>{const i=Math.max(0,this._config?.ev_count??0),o=Array.from({length:i+1},(s,a)=>String(a));return["day","night"].map(s=>n`
              <div class="ec-subsection-title ec-subsection-title--minor">${s}</div>
              ${o.map(a=>this._row(`${s} / ${a} EV`,n`<input class="ec-input" type="text"
                  .value=${t.images?.[s]?.[a]??""}
                  placeholder="https://…"
                  @change=${r=>this._setBgImage(s,a,r.target.value)}
                />`))}
            `)})()}
    `}_renderTemplatesRibbonPanel(){const t=this._navPath;return t.length===0?this._navMenu(h._TEMPLATE_SECTIONS):t[0].key==="sec:import"?this._templatesSecImport():t[0].key==="sec:varexport"?this._templatesSecVariantExport():t[0].key==="sec:varimport"?this._templatesSecVariantImport():t[0].key==="sec:export"?this._templatesSecExport():(console.warn(`[mosaic-canvas-card] Templates panel: unknown section key "${t[0].key}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover."))}_templatesSecVariantExport(){const t=this._config?.defaults?.control_variants??{},e=Object.values(t).reduce((i,o)=>i+(o?.length??0),0);return n`
      <div class="ec-section">
        <p class="ec-hint">
          Exports only the custom control variants built in <b>Settings ▸ Global Defaults ▸ Control Default ▸ Variant Builder</b> —
          not the card layout. The file uses the same shape as Mosaic's built-in variant registry.
        </p>
        ${e===0?n`<p class="ec-empty">No custom variants to export.</p>`:n`
            ${this._row("Name",n`<input class="ec-input" type="text"
                .value=${this._templateName}
                placeholder="My Control Variants"
                @input=${i=>{this._templateName=i.target.value}}
              />`)}
            <p class="ec-hint">${e} variant${e===1?"":"s"} across ${Object.keys(t).length} control type${Object.keys(t).length===1?"":"s"}.</p>
            <button class="ec-btn-add" style="width:100%;"
              @click=${()=>fi(vi(t,this._templateName||"Mosaic Control Variants"))}
            >⬇ Download control variants</button>
          `}
      </div>
    `}_templatesSecVariantImport(){return this._config?n`
      <div class="ec-section">
        <p class="ec-hint">
          Merges variants from a file into this card. Unlike <b>Import Template</b>, this
          <b>does not touch your layout</b> — it only adds control variants. An incoming variant whose
          id is already used is imported under a new id, so nothing is overwritten.
        </p>
        <input type="file" accept=".json,application/json" style="display:none" id="ec-variant-import"
          @change=${t=>{const e=t.target.files?.[0];if(t.target.value="",!e||!this._config)return;const i=new FileReader;i.onload=o=>{const{pack:s,error:a}=yi(o.target?.result);if(a||!s){this._variantImportError=a??"Unknown error.";return}const r=this._config?.defaults?.control_variants??{},{merged:l,added:c,renamed:d}=xi(r,s);if(c===0){this._variantImportError="That file contained no control variants.";return}const p=d>0?`Import ${c} variant(s) from "${s.name}"?

${d} had an id already in use and will be imported under a new id.`:`Import ${c} variant(s) from "${s.name}"?`;window.confirm(p)&&(this._variantImportError="",this._updateDefaults({control_variants:l}),Mt(l))},i.readAsText(e)}}
        />
        <button class="ec-btn-add" style="width:100%;"
          @click=${()=>this.shadowRoot?.querySelector("#ec-variant-import")?.click()}
        >⬆ Import from file</button>
        ${this._variantImportError?n`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._variantImportError}</p>`:_}
      </div>
    `:n``}_templatesSecExport(){return this._config?n`
      <div class="ec-section">
          ${this._row("Name",n`<input class="ec-input" type="text"
              .value=${this._templateName}
              placeholder="My Mosaic Dashboard"
              @input=${t=>{this._templateName=t.target.value}}
            />`)}
          ${this._row("Include entities",n`<input type="checkbox" .checked=${this._templateIncludeEntities}
              @change=${t=>{this._templateIncludeEntities=t.target.checked}}
            />`)}
          ${this._templateIncludeEntities?_:n`<p class="ec-hint">Entity, device and area references are removed from the file, so the
                template can be shared — whoever imports it picks their own entities. References to this
                card's Virtuals are kept.</p>`}
          <button class="ec-btn-add" style="width:100%;margin-bottom:12px;"
            @click=${()=>{if(!this._config)return;const t=_i(this._config,this._templateName||"Mosaic Canvas Template",{includeEntities:this._templateIncludeEntities});gi(t)}}
          >⬇ Download template</button>
      </div>
    `:n``}_templatesSecImport(){return this._config?n`
      <div class="ec-section">
          <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
            Importing will replace the entire card configuration.
          </p>
          <input type="file" accept=".json,application/json"
            style="display:none"
            id="ec-template-import"
            @change=${t=>{const e=t.target.files?.[0];if(!e||!this._config)return;const i=new FileReader;i.onload=o=>{const s=o.target?.result,{template:a,error:r}=mi(s);if(r||!a){this._templateError=r??"Unknown error.";return}window.confirm(`Import "${a.name}"?

This will replace your entire card configuration.`)&&(this._templateError="",this._emit(bi(a,this._config.type)))},i.readAsText(e),t.target.value=""}}
          />
          <button class="ec-btn-add" style="width:100%;"
            @click=${()=>{this.shadowRoot?.querySelector("#ec-template-import")?.click()}}
          >⬆ Import from file</button>
          ${this._templateError?n`<p style="color:#f44;font-size:12px;margin:6px 0 0;">${this._templateError}</p>`:_}
      </div>
    `:n``}_virtualSectionDefs(t){const e=[{key:"sec:defaults",label:"Virtual Defaults",hint:"Name, operation, unit",icon:"mdi:tune",paths:["name","op","unit"]}];return t.op==="time_until"?(e.push({key:"sec:tu",label:"Time Until Settings",hint:"Mode, entities, capacity, labels",icon:"mdi:progress-clock",paths:["mode","value_entity","pct_entity","rate_entity","power_entity","rate_unit_override","recalc_above","recalc_below","capacity_entity","capacity","capacity_kwh","label_max","label_full","label_min","label_empty"]}),e.push({key:"sec:trig",label:"Extra Triggers",hint:"Up to 2 labelled thresholds",icon:"mdi:flag-outline",paths:["triggers"]})):t.op==="statistic"&&(e.push({key:"sec:value",label:"Value",hint:"Source entity + attribute",icon:"mdi:database-outline",paths:["entity","attribute"]}),e.push({key:"sec:stats",label:"HA Statistics",hint:"Period, stat type, advanced characteristic",icon:"mdi:chart-box-outline",paths:h._STAT_PATHS})),e}_virtualScope(t){return{root:this._virtuals()[t],apply:e=>this._updateVirtual(t,e)}}_renderVirtualsRibbonPanel(){const t=this._navPath,e=this._virtuals();if(t.length===0)return n`
        <div class="ec-section-header">
          <span></span>
          <div style="display:flex;gap:4px;">
            ${this._virtualClipboard?n`<button class="ec-btn-add" @click=${this._pasteVirtual} title="Paste virtual">⎘ Paste</button>`:_}
            <button class="ec-btn-add" @click=${this._addVirtual}>+ Virtual</button>
          </div>
        </div>
        ${e.length===0?this._emptyAdd("No virtuals yet — add one",()=>this._addVirtual()):e.map((a,r)=>this._itemCard({dragKey:`virt:${r}`,icon:a.op==="time_until"?"mdi:progress-clock":"mdi:memory",label:a.name||a.id,sub:h._VIRTUAL_OPS.find(l=>l.value===a.op)?.label??a.op,selected:r===this._selVirtual,onClick:()=>{this._selVirtual=r,this._navPush(`virt:${a.id}`,a.name||a.id)},actions:n`
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._copyVirtual(r)}}
                  title="Copy">⎘</button>
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateVirtual(r)}}
                  title="Duplicate virtual">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeVirtual(r)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(t[0].key,e);this._selVirtual=i;const o=e[i];if(!o)return this._navDeadEnd();if(t.length===1)return n`
        ${this._navMenu(this._virtualSectionDefs(o),this._virtualScope(i))}
        ${o.op==="time_until"||o.op==="statistic"?_:n`
          <div class="ec-subsection-title">Inputs (in order) — drag to reorder</div>
          ${o.inputs.length===0?this._emptyAdd("No inputs yet — add one",()=>this._addVirtualInput(i)):o.inputs.map((a,r)=>this._itemCard({dragKey:`vin:${i}:${r}`,icon:"mdi:import",label:a||`Input ${r+1}`,sub:a?`Input ${r+1}`:"No entity selected",selected:r===this._selVirtualInput,onClick:()=>{this._selVirtualInput=r,this._navPush(`vin:${r}`,a||`Input ${r+1}`)},actions:n`
                  <button class="ec-btn-dup"
                    @click=${l=>{l.stopPropagation(),this._duplicateVirtualInput(i,r)}}
                    title="Duplicate input">⧉</button>
                  <button class="ec-btn-remove"
                    @click=${l=>{l.stopPropagation(),this._removeVirtualInput(i,r)}}
                    title="Remove input">✕</button>
                `}))}
          <button class="ec-btn-add" style="margin-top:4px;"
            @click=${()=>this._addVirtualInput(i)}>+ Input</button>
        `}
      `;const s=t[1].key;if(s.startsWith("vin:")){const a=this._crumbIndex(s,o.inputs);return this._selVirtualInput=a,this._virtualSecInput(i,a)}if(t.length===3&&s==="sec:trig"&&t[2].key.startsWith("trig:")){const a=this._crumbIndex(t[2].key,o.triggers);return this._selTrigger=a,this._virtualSecTriggerItem(i,a)}return this._virtualSection(i,o,s)}_virtualSecInput(t,e){const i=this._virtuals()[t],o=i?.inputs[e];return!i||o===void 0?this._navDeadEnd():n`
      <div class="ec-section">
          ${this._row("Entity",n`<ha-entity-picker
              .hass=${this.hass}
              .value=${o}
              allow-custom-entity
              @value-changed=${s=>this._updateVirtualInput(t,e,s.detail.value)}
            ></ha-entity-picker>`)}
      </div>
    `}_virtualSection(t,e,i){return n`
      ${this._clearOverridesBtn(h._findDef(this._virtualSectionDefs(e),i),this._virtualScope(t))}
      ${this._virtualSectionBody(t,e,i)}
    `}_virtualSectionBody(t,e,i){return i==="sec:defaults"?this._virtualSecDefaults(t,e):i==="sec:tu"?this._virtualSecTu(t,e):i==="sec:trig"?this._virtualSecTrig(t,e):i==="sec:value"?this._virtualSecValue(t,e):i==="sec:stats"?this._virtualSecStats(t,e):n``}_virtualSecValue(t,e){return n`
      <div class="ec-section">
          ${this._entitySelector({entity:e.entity,onEntity:i=>this._updateVirtual(t,{entity:i}),attribute:e.attribute,onAttribute:i=>this._updateVirtual(t,{attribute:i})})}
      </div>
    `}_virtualSecStats(t,e){return n`
      <div class="ec-section">
          <div class="ec-subsection-title">HA Statistics integration</div>
          <p class="ec-hint">For advanced statistics (median, std dev, percentile, etc.) configure a Statistics integration sensor in HA and point the Value entity at it.</p>
          ${this._row("Period",n`<select class="ec-select"
              .value=${e.stat_period??""}
              @change=${i=>{const o=i.target.value,s=["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(o);this._updateVirtual(t,{stat_period:o||void 0,stat_period_n:s?e.stat_period_n??void 0:void 0,stat_period_start:o==="custom"?e.stat_period_start??void 0:void 0,stat_period_end:o==="custom"?e.stat_period_end??void 0:void 0})}}
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
          ${["last_n_minutes","last_n_hours","last_n_days","last_n_months"].includes(e.stat_period)?this._row(e.stat_period==="last_n_minutes"?"Number of minutes":e.stat_period==="last_n_hours"?"Number of hours":e.stat_period==="last_n_days"?"Number of days":"Number of months",this._numWrap(n`<input type="number" class="ec-input ec-input-num" min="1" step="1"
              .value=${String(e.stat_period_n??"")}
              placeholder="e.g. 3"
              @change=${i=>{const o=parseInt(i.target.value,10);this._updateVirtual(t,{stat_period_n:isNaN(o)||o<1?void 0:o})}}
            />`)):_}
          ${e.stat_period==="custom"?n`
            ${this._row("Start",n`<input type="datetime-local" class="ec-input"
              .value=${e.stat_period_start??""}
              @change=${i=>this._updateVirtual(t,{stat_period_start:i.target.value||void 0})}
            />`)}
            ${this._row("End",n`<input type="datetime-local" class="ec-input"
              .value=${e.stat_period_end??""}
              @change=${i=>this._updateVirtual(t,{stat_period_end:i.target.value||void 0})}
            />`)}
          `:_}
          ${e.stat_period?this._row("Stat type",n`<select class="ec-select"
              .value=${e.stat_type??v("stat_type")??"sum"}
              @change=${i=>this._updateVirtual(t,{stat_type:i.target.value})}
            >
              <option value="sum"        .selected=${(e.stat_type??v("stat_type")??"sum")==="sum"}>Sum (total)</option>
              <option value="difference" .selected=${e.stat_type==="difference"}>Difference (end − start)</option>
              <option value="mean"       .selected=${e.stat_type==="mean"}>Mean (average)</option>
              <option value="max"        .selected=${e.stat_type==="max"}>Maximum</option>
              <option value="min"        .selected=${e.stat_type==="min"}>Minimum</option>
              <option value="count"      .selected=${e.stat_type==="count"}>Count (buckets)</option>
              <option value="range"      .selected=${e.stat_type==="range"}>Range (max − min)</option>
            </select>`):_}

          ${this._row("Adv statistics mode (opt)",n`<select class="ec-select"
              .value=${e.stat_characteristic??""}
              @change=${i=>{const o=i.target.value;this._updateVirtual(t,{stat_characteristic:o||void 0})}}
            >
              <option value="">— none —</option>
              ${["Averages","Extremes","Spread","Change","Sums","Counts","Timestamps"].map(i=>n`
                <optgroup label="${i}">
                  ${Bt.filter(o=>o.group===i).map(o=>n`
                    <option value=${o.value} .selected=${e.stat_characteristic===o.value}>
                      ${o.label}${o.binary?" ✦":""}
                    </option>`)}
                </optgroup>`)}
            </select>`)}
          <p class="ec-hint" style="margin-top:2px">✦ also valid for binary sensors</p>
          ${e.stat_characteristic==="percentile"?this._numRow("Percentile (1–99)",{value:e.stat_percentile,onChange:i=>this._updateVirtual(t,{stat_percentile:i}),min:1,max:99,placeholder:"50"}):_}
          ${this._numRow("Max age (hours)",{value:e.stat_max_age_hours,onChange:i=>this._updateVirtual(t,{stat_max_age_hours:i}),min:1,placeholder:"(none)"})}
          ${this._numRow("Sampling size",{value:e.stat_sampling_size,onChange:i=>this._updateVirtual(t,{stat_sampling_size:i}),min:1,placeholder:"(none)"})}
          ${e.stat_characteristic&&e.entity?n`
            <div class="ec-stat-yaml">
              <div class="ec-stat-yaml-header">
                <span>HA configuration.yaml</span>
                <button class="ec-btn-copy" title="Copy YAML"
                  @click=${()=>{const i=Et(e.entity,e.stat_characteristic,e.stat_max_age_hours,e.stat_sampling_size,e.stat_percentile);navigator.clipboard.writeText(i)}}>⎘ Copy</button>
              </div>
              <pre class="ec-stat-yaml-code">${Et(e.entity,e.stat_characteristic,e.stat_max_age_hours,e.stat_sampling_size,e.stat_percentile)}</pre>
            </div>
          `:_}
      </div>
    `}_virtualSecDefaults(t,e){return n`
      <div class="ec-section">
              ${this._row("Name",n`<input class="ec-input" type="text" .value=${e.name}
                  @change=${i=>this._updateVirtual(t,{name:i.target.value})}
                />`)}

              ${this._row("Operation",n`<select class="ec-select"
                  .value=${e.op}
                  @change=${i=>this._updateVirtual(t,{op:i.target.value})}
                >
                  ${h._VIRTUAL_OPS.map(i=>n`<option value=${i.value} .selected=${e.op===i.value}>${i.label}</option>`)}
                </select>`)}

              ${e.op!=="time_until"?this._row("Unit override",n`<input class="ec-input" type="text" .value=${e.unit??""}
                  placeholder="(from inputs[0])"
                  @change=${i=>{const o=i.target.value;this._updateVirtual(t,{unit:o||void 0})}}
                />`):_}
      </div>
    `}_virtualSecTu(t,e){return n`
      <div class="ec-section">
                ${this._row("Mode",n`<select class="ec-select"
                    .value=${e.mode??v("virtual_mode")??"percent"}
                    @change=${i=>this._updateVirtual(t,{mode:i.target.value})}
                  >
                    <option value="percent"  .selected=${(e.mode??v("virtual_mode")??"percent")==="percent"}>% based</option>
                    <option value="absolute" .selected=${e.mode==="absolute"}>Absolute value</option>
                  </select>`)}

                ${this._row((e.mode??v("virtual_mode")??"percent")==="percent"?"% entity":"Current value entity",n`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${e.value_entity??e.pct_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(t,{value_entity:i.detail.value||void 0,pct_entity:void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate entity",n`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${e.rate_entity??e.power_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(t,{rate_entity:i.detail.value||void 0,power_entity:void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Rate unit override",n`<input class="ec-input" type="text"
                    .value=${e.rate_unit_override??""}
                    placeholder="auto-detect from entity"
                    @change=${i=>{const o=i.target.value;this._updateVirtual(t,{rate_unit_override:o||void 0})}}
                  />`)}
                <p class="ec-hint">Auto-detected from the rate entity; only set this if auto-detection fails.</p>

                ${this._row("Recalc above (rate)",this._numWrap(n`<input class="ec-input ec-input-num" type="number" step="any"
                    .value=${e.recalc_above!=null?String(e.recalc_above):""}
                    placeholder="e.g. 100"
                    @change=${i=>{const o=parseFloat(i.target.value);this._updateVirtual(t,{recalc_above:Number.isFinite(o)?o:void 0})}}
                  />`))}

                ${this._row("Recalc below (rate)",this._numWrap(n`<input class="ec-input ec-input-num" type="number" step="any"
                    .value=${e.recalc_below!=null?String(e.recalc_below):""}
                    placeholder="e.g. -160"
                    @change=${i=>{const o=parseFloat(i.target.value);this._updateVirtual(t,{recalc_below:Number.isFinite(o)?o:void 0})}}
                  />`))}
                <p class="ec-hint">Only recompute Time Until when the raw rate reading is above and/or below these (signed, in the rate entity's units). Inside the band the last value is frozen. Leave blank to always recalculate.</p>

                ${this._row("Capacity entity",n`<ha-entity-picker
                    .hass=${this.hass}
                    .value=${e.capacity_entity??""}
                    allow-custom-entity
                    @value-changed=${i=>this._updateVirtual(t,{capacity_entity:i.detail.value||void 0})}
                  ></ha-entity-picker>`)}

                ${this._row("Capacity (Manual)",this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="0" step="0.1"
                    .value=${String(e.capacity??e.capacity_kwh??"")}
                    placeholder="e.g. 13.5"
                    @change=${i=>{const o=parseFloat(i.target.value);this._updateVirtual(t,{capacity:Number.isFinite(o)?o:void 0,capacity_kwh:void 0})}}
                  />`))}

                ${this._row("Maximum label",n`<input class="ec-input" type="text"
                    .value=${e.label_max??e.label_full??""}
                    placeholder="Full"
                    @change=${i=>{const o=i.target.value;this._updateVirtual(t,{label_max:o||void 0,label_full:void 0})}}
                  />`)}

                ${this._row("Minimum label",n`<input class="ec-input" type="text"
                    .value=${e.label_min??e.label_empty??""}
                    placeholder="Empty"
                    @change=${i=>{const o=i.target.value;this._updateVirtual(t,{label_min:o||void 0,label_empty:void 0})}}
                  />`)}
      </div>
    `}_virtualSecTrig(t,e){return n`
      ${(e.triggers??[]).length===0?this._emptyAdd("No extra triggers yet — add one",()=>{const i=[...e.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(t,{triggers:i})}):(e.triggers??[]).map((i,o)=>this._itemCard({dragKey:`trig:${t}:${o}`,icon:"mdi:flag-outline",label:i.label||`Trigger ${o+1}`,sub:`${i.percent??i.value}${(e.mode??v("virtual_mode")??"percent")==="percent"?"%":""}`,selected:o===this._selTrigger,onClick:()=>{this._selTrigger=o,this._navPush(`trig:${o}`,i.label||`Trigger ${o+1}`)},actions:n`
              ${(e.triggers??[]).length<2?n`<button class="ec-btn-dup" title="Duplicate trigger"
                @click=${s=>{s.stopPropagation(),this._duplicateTrigger(t,o)}}>⧉</button>`:_}
              <button class="ec-btn-remove" title="Remove trigger"
                @click=${s=>{s.stopPropagation();const a=(e.triggers??[]).filter((r,l)=>l!==o);this._updateVirtual(t,{triggers:a.length?a:void 0})}}>✕</button>
            `}))}
      ${(e.triggers??[]).length<2?n`
        <button class="ec-btn-add" style="margin-top:6px"
          @click=${()=>{const i=[...e.triggers??[],{value:20,label:"Reserve"}];this._updateVirtual(t,{triggers:i})}}>+ Trigger</button>
      `:_}
      <p class="ec-hint" style="margin-top:10px">Auto-switches to the nearest trigger ahead in the current direction.</p>
    `}_virtualSecTriggerItem(t,e){const i=this._virtuals()[t],o=i?.triggers?.[e];return!i||!o?this._navDeadEnd():n`
      <div class="ec-section">
          ${this._row((i.mode??v("virtual_mode")??"percent")==="percent"?"Percent":"Value",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
              step="${(i.mode??v("virtual_mode")??"percent")==="percent"?"1":"any"}"
              .value=${String(o.percent??o.value)}
              @change=${s=>{const a=parseFloat(s.target.value),r=[...i.triggers??[]];r[e]={...r[e],value:Number.isFinite(a)?a:o.value},this._updateVirtual(t,{triggers:r})}}
            />`)}`)}
          ${this._row("Label",n`<input class="ec-input" type="text" .value=${o.label}
              placeholder="Label"
              @change=${s=>{const a=[...i.triggers??[]];a[e]={...a[e],label:s.target.value},this._updateVirtual(t,{triggers:a})}}
            />`)}
      </div>
    `}_zoneScope(t){return{root:this._zones()[t],apply:e=>this._updateZone(t,e)}}_renderZonesRibbonPanel(){const t=this._navPath,e=this._zones();if(t.length===0)return n`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Invisible hotspot regions that trigger actions when tapped. Drag the dashed handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addZone}>+ Clickable Zone</button>
        </div>
        ${e.length===0?this._emptyAdd("No clickable zones yet — add one",()=>this._addZone()):e.map((a,r)=>this._itemCard({dragKey:`zone:${r}`,icon:"mdi:gesture-tap-box",label:a.name??a.id,sub:`${a.width}×${a.height}px`,selected:r===this._selZone,onClick:()=>{this._selZone=r,this._navPush(`zone:${a.id}`,a.name??a.id)},actions:n`
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateZone(r)}}
                  title="Duplicate zone">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeZone(r)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(t[0].key,e);this._selZone=i;const o=e[i];if(!o)return this._navDeadEnd();if(t.length===1)return this._navMenu(h._ZONE_SECTIONS,this._zoneScope(i));const s=this._clearOverridesBtn(h._findDef(h._ZONE_SECTIONS,t[1].key),this._zoneScope(i));return t[1].key==="sec:actions"?n`${s}${this._zoneSecActions(i,o)}`:n`${s}${this._zoneSecDefaults(i,o)}`}_zoneSecDefaults(t,e){const{totalW:i,totalH:o}=Y(this._config);return n`
      <div class="ec-section">
              ${this._row("Name",n`<input class="ec-input" type="text" .value=${e.name??""}
                  @change=${s=>this._updateZone(t,{name:s.target.value||void 0})}
                />`)}

              ${this._row("X (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
                  .value=${String(Math.round(e.position.x*i))}
                  @change=${s=>this._updateZone(t,{position:{...e.position,x:Number(s.target.value)/i}})}
                />`)}`)}

              ${this._row("Y (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
                  .value=${String(Math.round(e.position.y*o))}
                  @change=${s=>this._updateZone(t,{position:{...e.position,y:Number(s.target.value)/o}})}
                />`)}`)}

              ${this._row("Anchor",n`<select class="ec-select"
                  .value=${e.anchor??v("anchor")??"top-left"}
                  @change=${s=>this._updateZone(t,{anchor:s.target.value})}
                >
                  ${Tt.map(s=>n`<option value=${s} .selected=${(e.anchor??v("anchor")??"top-left")===s}>${Gt[s]}</option>`)}
                </select>`)}

              ${this._row("Width (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(e.width)}
                  @change=${s=>this._updateZone(t,{width:Math.max(1,Number(s.target.value))})}
                />`)}`)}

              ${this._row("Height (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1"
                  .value=${String(e.height)}
                  @change=${s=>this._updateZone(t,{height:Math.max(1,Number(s.target.value))})}
                />`)}`)}

              ${this._row("Overlay color",this._colorPicker(`zone-${t}-overlay`,e.color,s=>this._updateZone(t,{color:s}),{clearTitle:"Clear"}))}

              ${this._numRow("Radius (px)",{value:e.radius,onChange:s=>this._updateZone(t,{radius:s}),min:0,placeholder:"0"})}
      </div>
    `}_zoneSecActions(t,e){return n`
      <div class="ec-section">
        ${this._actionRows({tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},i=>this._updateZone(t,i))}
      </div>
    `}_flowScope(t){return{root:this._flows()[t],apply:e=>this._updateFlow(t,e)}}_renderFlowsRibbonPanel(){const t=this._navPath,e=this._flows();if(t.length===0)return n`
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addFlow}>+ Flow Line</button>
        </div>
        ${e.length===0?this._emptyAdd("No animated flow lines yet — add one",()=>this._addFlow()):e.map((r,l)=>this._itemCard({dragKey:`flow:${l}`,icon:"mdi:chart-timeline-variant",label:r.name??r.id,sub:`${r.style??"dashes"}${r.entity?" · "+(r.entity.startsWith("virtual:")?this._virtuals().find(c=>`virtual:${c.id}`===r.entity)?.name??r.entity:r.entity):""}`,selected:l===this._selFlow,onClick:()=>{this._selFlow=l,this._selPoint=-1,this._navPush(`flow:${r.id}`,r.name??r.id)},actions:n`
                <button class="ec-btn-dup"
                  @click=${c=>{c.stopPropagation(),this._duplicateFlow(l)}}
                  title="Duplicate flow">⧉</button>
                <button class="ec-btn-remove"
                  @click=${c=>{c.stopPropagation(),this._removeFlow(l)}}
                  title="Remove flow">✕</button>
              `}))}
      `;const i=this._crumbIndex(t[0].key,e);this._selFlow=i;const o=e[i];if(!o)return this._navDeadEnd();if(t.length===1)return n`
        ${this._navMenu(h._FLOW_SECTIONS,this._flowScope(i))}
        ${this._renderFlowPoints(o)}
      `;const s=t[1].key;if(s.startsWith("pt:")){const r=this._crumbIndex(s,o.points);return this._selPoint=r,this._flowSecPoint(i,r)}const a=this._clearOverridesBtn(h._findDef(h._FLOW_SECTIONS,s),this._flowScope(i));switch(s){case"sec:speed":return n`${a}${this._flowSecSpeed(o)}`;case"sec:style":return n`${a}${this._flowSecStyle(o)}`;case"sec:defaults":return n`${a}${this._flowSecDefaults(o)}`;default:return console.warn(`[mosaic-canvas-card] Flows panel: unknown section key "${s}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover.")}}_flowSecDefaults(t){return n`
      <div class="ec-section">
              ${this._row("Name",n`<input class="ec-input" type="text" .value=${t.name??""}
                  @change=${e=>this._updateFlow(this._selFlow,{name:e.target.value})}
                />`)}

              ${this._row("Entity",t.entity?.startsWith("virtual:")?n`<div style="display:flex;gap:4px;align-items:center;">
                      <span class="ec-input" style="flex:1;opacity:0.8;">
                        ${this._virtuals().find(e=>`virtual:${e.id}`===t.entity)?.name??t.entity}
                      </span>
                      <button class="ec-btn-clear"
                        @click=${()=>this._updateFlow(this._selFlow,{entity:void 0})}
                        title="Switch to real entity">✕</button>
                    </div>`:n`<ha-entity-picker
                      .hass=${this.hass}
                      .value=${t.entity??""}
                      allow-custom-entity
                      @value-changed=${e=>this._updateFlow(this._selFlow,{entity:e.detail.value})}
                    ></ha-entity-picker>`)}
              ${!t.entity?.startsWith("virtual:")&&this._virtuals().length>0?this._row("Virtual Entity",n`<select class="ec-select"
                  .value=${""}
                  @change=${e=>{const i=e.target.value;i&&this._updateFlow(this._selFlow,{entity:i}),e.target.value=""}}
                >
                  <option value="">(pick a virtual)</option>
                  ${this._virtuals().map(e=>n`<option value=${"virtual:"+e.id}>${e.name}</option>`)}
                </select>`):_}

              ${this._numRow(`Min display power (${this._config?.defaults?.power_unit??"W"})`,{value:t.min_power,onChange:e=>this._updateFlow(this._selFlow,{min_power:e}),min:0,step:1,placeholder:"e.g. 5",title:"Hide flow when entity value is below this threshold — in your global power unit"})}

              ${this._row("Invert direction",n`<input type="checkbox"
                  .checked=${t.invert??!1}
                  @change=${e=>{const i=e.target.checked;this._updateFlow(this._selFlow,{invert:i||void 0})}}
                />`)}
      </div>
    `}_flowSecSpeed(t){const e=t.speed_min_duration??v("flow_speed_min_duration")??5,i=t.speed_max_duration??v("flow_speed_max_duration")??1;return n`
      <div class="ec-section">
              ${this._numRow(`Slowest animation value (${this._config?.defaults?.power_unit??"W"})`,{value:t.speed_min_value,onChange:o=>this._updateFlow(this._selFlow,{speed_min_value:o}),min:0,placeholder:"e.g. 100",title:"Entity value at which animation is slowest"})}

              ${this._numRow(`Fastest animation value (${this._config?.defaults?.power_unit??"W"})`,{value:t.speed_max_value,onChange:o=>this._updateFlow(this._selFlow,{speed_max_value:o}),min:0,placeholder:"e.g. 5000",title:"Entity value at which animation is fastest"})}

              ${this._row("Speed",n`<div class="ec-dual-range">
                  <span class="ec-dual-range-label">Slowest</span>
                  <div class="ec-dual-range-track">
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(e)}
                      style="direction:rtl"
                      @input=${o=>{const s=Number(o.target.value),a=t.speed_max_duration??v("flow_speed_max_duration")??1;this._updateFlow(this._selFlow,{speed_min_duration:Math.max(s,a)})}}
                    />
                    <input type="range" min="0.5" max="10" step="0.5"
                      .value=${String(i)}
                      style="direction:rtl"
                      @input=${o=>{const s=Number(o.target.value),a=t.speed_min_duration??v("flow_speed_min_duration")??5;this._updateFlow(this._selFlow,{speed_max_duration:Math.min(s,a)})}}
                    />
                  </div>
                  <span class="ec-dual-range-label">Fastest</span>
                </div>`)}
              ${t.speed_min_value==null||t.speed_max_value==null?n`<p class="ec-hint">Has no effect until both "Slowest"/"Fastest animation value" above are set — the animation speed stays fixed at Duration below.</p>`:_}

              ${this._numRow("Duration (s)",{value:t.duration,onChange:o=>this._updateFlow(this._selFlow,{duration:o}),min:.1,step:.1,placeholder:"2"})}
      </div>
    `}_flowSecStyle(t){return n`
      <div class="ec-section">
              ${this._row("Style",n`<select class="ec-select"
                  .value=${t.style??v("flow_style")??"dashes"}
                  @change=${e=>this._updateFlow(this._selFlow,{style:e.target.value})}
                >
                  ${h._FLOW_STYLES.map(e=>n`<option value=${e} .selected=${(t.style??v("flow_style")??"dashes")===e}>${e}</option>`)}
                </select>`)}

              ${this._row("Forward color",this._colorPicker(`flow-${this._selFlow}-fwd`,t.forward_color??t.color,e=>this._updateFlow(this._selFlow,{forward_color:e,color:void 0})))}

              ${this._row("Reverse color",this._colorPicker(`flow-${this._selFlow}-rev`,t.reverse_color,e=>this._updateFlow(this._selFlow,{reverse_color:e})))}

              ${this._numRow("Width (px)",{value:t.width,onChange:e=>this._updateFlow(this._selFlow,{width:e}),min:1,placeholder:"3"})}

              ${this._numRow("Particle count",{value:t.particle_count,onChange:e=>this._updateFlow(this._selFlow,{particle_count:e}),min:1,placeholder:"6"})}

              ${this._row("Curve",n`<select class="ec-select"
                  .value=${t.curve??v("flow_curve")??"straight"}
                  @change=${e=>this._updateFlow(this._selFlow,{curve:e.target.value})}
                >
                  <option value="straight" .selected=${(t.curve??v("flow_curve")??"straight")==="straight"}>straight</option>
                  <option value="rounded" .selected=${t.curve==="rounded"}>rounded</option>
                </select>`)}
      </div>
    `}_pointLabel(t,e){if(t.card!=null){const i=this._config?.cards.find(o=>o.id===t.card);return{label:`Point ${e+1}`,sub:`Card · ${i?.name??t.card} · ${t.side??"center"}`}}return{label:`Point ${e+1}`,sub:`Free · ${t.x??0}, ${t.y??0}`}}_renderFlowPoints(t){return n`
      <div class="ec-subsection-title">Points — drag to reorder</div>
      ${t.points.length===0?this._emptyAdd("No points yet — add one",()=>this._addFlowPoint(this._selFlow)):t.points.map((e,i)=>{const{label:o,sub:s}=this._pointLabel(e,i);return this._itemCard({dragKey:`pt:${this._selFlow}:${i}`,icon:e.card!=null?"mdi:radio-button-on":"mdi:radio-button-off",label:o,sub:s,selected:i===this._selPoint,onClick:()=>{this._selPoint=i,this._navPush(`pt:${i}`,`Point ${i+1}`)},actions:n`
                <button class="ec-btn-dup"
                  @click=${a=>{a.stopPropagation(),this._duplicateFlowPoint(this._selFlow,i)}}
                  title="Duplicate point">⧉</button>
                <button class="ec-btn-remove"
                  @click=${a=>{a.stopPropagation(),this._removeFlowPoint(this._selFlow,i)}}
                  title="Remove">✕</button>
              `})})}
      <button class="ec-btn-add" style="margin-top:4px;"
        @click=${()=>this._addFlowPoint(this._selFlow)}>+ Point</button>
    `}_flowSecPoint(t,e){const i=this._flows()[t],o=i?.points[e];if(!i||!o)return this._navDeadEnd();const s=o.card!=null?"card":"free";return n`
      <div class="ec-section">
                    ${this._row("Kind",n`<select class="ec-select"
                        .value=${s}
                        @change=${a=>this._setPointKind(t,e,a.target.value)}
                      >
                        <option value="free" .selected=${s==="free"}>Free (x/y)</option>
                        <option value="card" .selected=${s==="card"}>Card</option>
                      </select>`)}

                    ${s==="card"?n`
                      ${this._row("Card",n`<select class="ec-select"
                          .value=${o.card??""}
                          @change=${a=>this._updateFlowPoint(t,e,{card:a.target.value})}
                        >
                          ${this._config.cards.map(a=>n`
                            <option value=${a.id} .selected=${o.card===a.id}>${a.name??a.id}</option>
                          `)}
                        </select>`)}

                      ${this._row("Side",n`<select class="ec-select"
                          .value=${o.side??"center"}
                          @change=${a=>this._updateFlowPoint(t,e,{side:a.target.value})}
                        >
                          ${h._FLOW_SIDES.map(a=>n`<option value=${a} .selected=${(o.side??"center")===a}>${a}</option>`)}
                        </select>`)}
                    `:n`
                      ${this._row("X",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
                          .value=${String(o.x??0)}
                          @change=${a=>this._updateFlowPoint(t,e,{x:Number(a.target.value)})}
                        />`)}`)}

                      ${this._row("Y",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
                          .value=${String(o.y??0)}
                          @change=${a=>this._updateFlowPoint(t,e,{y:Number(a.target.value)})}
                        />`)}`)}
                    `}

                    <div class="ec-subsection-title">Offset (px)</div>
                    <p class="ec-hint">Nudges this point away from its base position (card edge or x/y) without moving the card.</p>
                    ${this._numRow("dx",{value:o.dx??0,onChange:a=>this._updateFlowPoint(t,e,{dx:a})})}
                    ${this._numRow("dy",{value:o.dy??0,onChange:a=>this._updateFlowPoint(t,e,{dy:a})})}
      </div>
    `}_actionHass(){const t=this.hass;if(!t)return;this._mergedServicesSrc!==t.services&&(this._mergedServicesSrc=t.services,this._mergedServices={...t.services,...h._PSEUDO_SERVICES});const e=t.localize;return{...t,services:this._mergedServices,localize:((i,...o)=>h._PSEUDO_TITLES[i]??e(i,...o))}}static _actionToServiceId(t){return!t||t.action==="none"?"":t.action==="call-service"?t.service??"":h._PSEUDO_ACTIONS.find(e=>e.action===t.action)?.id??""}static _serviceIdToAction(t,e){if(!t)return;const i=h._PSEUDO_ACTIONS.find(o=>o.id===t);if(!i)return{action:"call-service",service:t,target:e?.target,service_data:e?.service_data};switch(i.action){case"more-info":case"toggle":return{action:i.action,entity:e?.entity};case"navigate":return{action:"navigate",navigation_path:e?.navigation_path};case"url":return{action:"url",url_path:e?.url_path};case"open-extended":return{action:"open-extended",extended_card_id:e?.extended_card_id};default:return{action:i.action}}}_popoverCardRow(t,e){const i=this._config?.extended_cards??[];if(i.length===0)return n`
        <p class="ec-hint">No popover cards exist yet, so there is nothing to open.</p>
        <button class="ec-btn-add" @click=${()=>{this._navTab="cards",this._navPanel="popover",this._navPath=[]}}>
          Go to Popover Cards
        </button>
      `;const o=t.extended_card_id,s=o!=null&&o!==""&&!i.some(a=>a.id===o);return n`
      ${this._row("Popover card",n`<select class="ec-select"
          .value=${o??""}
          @change=${a=>e({...t,extended_card_id:a.target.value||void 0})}
        >
          <option value="" .selected=${!o}>(select)</option>
          ${i.map(a=>n`
            <option value=${a.id} .selected=${o===a.id}>${a.name??a.id}</option>
          `)}
        </select>`)}
      ${s?n`<ha-alert alert-type="warning">This action points at <code>${o}</code>, which no longer exists. Pick another popover card.</ha-alert>`:_}
    `}_actionPicker(t,e,i,o=""){const s=h._actionToServiceId(e);return n`
      ${this._row(t,n`<ha-service-picker
        .hass=${this._actionHass()}
        .value=${s}
        placeholder=${o}
        @value-changed=${a=>{a.stopPropagation();const r=a.detail.value??"";r!==s&&i(h._serviceIdToAction(r,e))}}
      ></ha-service-picker>`)}
      ${this._actionSubForm(e,i)}
    `}_actionSubForm(t,e){if(!t)return _;const i=(o,s,a,r)=>this._row(o,n`<input class="ec-input" type="text" .value=${s??""} placeholder=${a}
        @change=${l=>e(r(l.target.value.trim()||void 0))} />`);switch(t.action){case"call-service":return n`<ha-service-control
          .hass=${this.hass}
          .hidePicker=${!0}
          .value=${{action:t.service,target:t.target,data:t.service_data}}
          @value-changed=${o=>{o.stopPropagation();const s=o.detail.value??{};e({...t,service:s.action??t.service,target:s.target,service_data:s.data})}}
        ></ha-service-control>`;case"more-info":case"toggle":return this._row("Entity",n`<ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity??""}
          allow-custom-entity
          @value-changed=${o=>e({...t,entity:o.detail.value||void 0})}
        ></ha-entity-picker>`);case"navigate":return this._row("Path",n`<ha-selector
          class="ec-nav-picker"
          .hass=${this.hass}
          .selector=${h._NAV_SELECTOR}
          .value=${t.navigation_path??""}
          @value-changed=${o=>{o.stopPropagation();const s=o.detail.value;e({...t,navigation_path:s||void 0})}}
        ></ha-selector>`);case"url":return i("URL",t.url_path,"https://…",o=>({...t,url_path:o}));case"open-extended":return this._popoverCardRow(t,e);default:return _}}_actionRows(t,e,i=["tap_action","hold_action","double_tap_action"],o=""){return n`${i.map(s=>this._actionPicker(h._ACTION_LABELS[s],t[s],a=>e({[s]:a}),o))}`}_openGGPicker(t,e,i=!1){this._ggTarget={ci:t,fi:e,isExtended:i},this._ggOpen=!0}_pickGG(t,e){if(!this._ggTarget)return;const{ci:i,fi:o,isExtended:s}=this._ggTarget,a={type:t,...e};s?this._updateExtField(i,o,a):this._updateField(i,o,a),this._ggOpen=!1,this._ggTarget=null}_embScope(t){return{root:this._embCards()[t],apply:e=>this._updateEmbCard(t,e)}}_renderEmbeddedPanel(){const t=this._navPath,e=this._embCards();if(t.length===0)return n`
        <p style="font-size:12px;color:#4a8aaa;margin:0 0 8px;">
          Embed any HA Lovelace card as a positioned canvas element. Drag the ◈ handles in the preview to reposition.
        </p>
        <div class="ec-section-header">
          <span></span>
          <button class="ec-btn-add" @click=${this._addEmbCard}>+ Embedded External Card</button>
        </div>
        ${e.length===0?this._emptyAdd("No embedded external cards yet — add one",()=>this._addEmbCard()):e.map((a,r)=>this._itemCard({dragKey:`emb:${r}`,icon:"mdi:widgets",label:a.name??a.id,sub:a.card_config?.type??"No card type set",selected:r===this._selEmbCard,onClick:()=>{this._selEmbCard=r,this._navPush(`emb:${a.id}`,a.name??a.id)},actions:n`
                <button class="ec-btn-dup"
                  @click=${l=>{l.stopPropagation(),this._duplicateEmbCard(r)}}
                  title="Duplicate card">⧉</button>
                <button class="ec-btn-remove"
                  @click=${l=>{l.stopPropagation(),this._removeEmbCard(r)}}
                  title="Remove">✕</button>
              `}))}
      `;const i=this._crumbIndex(t[0].key,e);this._selEmbCard=i;const o=e[i];if(!o)return this._navDeadEnd();if(t.length===1)return this._navMenu(h._EMB_SECTIONS,this._embScope(i));const s=this._clearOverridesBtn(h._findDef(h._EMB_SECTIONS,t[1].key),this._embScope(i));switch(t[1].key){case"sec:pos":return n`${s}${this._embSecPos(i,o)}`;case"sec:appear":return n`${s}${this._embSecAppear(i,o)}`;case"sec:config":return n`${s}${this._embSecConfig(i,o)}`;default:return console.warn(`[mosaic-canvas-card] Embedded panel: unknown section key "${t[1].key}"`),this._navDeadEnd("This editor screen is unavailable — press Back to recover.")}}_embSecConfig(t,e){return n`
      <div class="ec-section">
        ${this._row("Name",n`<input class="ec-input" type="text" .value=${e.name??""}
            @change=${i=>this._updateEmbCard(t,{name:i.target.value||void 0})}
          />`)}

        ${this._row("Card Type",n`<span style="flex:1;min-width:0;font-family:monospace;font-size:12px;color:#5aadcc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
            ${e.card_config?.type?String(e.card_config.type):n`<span style="color:#555;font-style:italic;">not set</span>`}
          </span>`)}

        <div style="margin-top:8px;display:flex;gap:6px;">
          <button class="ec-btn-add" style="flex:1;" @click=${()=>this._openEmbPicker({kind:"std",idx:t})}>
            ${e.card_config?.type?"Change Type":"Pick Card Type"}
          </button>
          <button class="ec-btn-add" style="flex:1;" @click=${()=>void this._openEmbEditor({kind:"std",idx:t})}>
            Edit Config…
          </button>
        </div>
      </div>
    `}_embSecPos(t,e){const{totalW:i,totalH:o}=Y(this._config);return n`
      <div class="ec-section">
        ${this._row("X (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
            .value=${String(Math.round(e.position.x*i))}
            @change=${s=>this._updateEmbCard(t,{position:{...e.position,x:Number(s.target.value)/i}})}
          />`)}`)}

        ${this._row("Y (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number"
            .value=${String(Math.round(e.position.y*o))}
            @change=${s=>this._updateEmbCard(t,{position:{...e.position,y:Number(s.target.value)/o}})}
          />`)}`)}

        ${this._row("Anchor",n`<select class="ec-select"
            .value=${e.anchor??v("anchor")??"top-left"}
            @change=${s=>this._updateEmbCard(t,{anchor:s.target.value})}
          >
            ${Tt.map(s=>n`<option value=${s} .selected=${(e.anchor??v("anchor")??"top-left")===s}>${Gt[s]}</option>`)}
          </select>`)}
        ${this._gridGeom()?n`<p class="ec-hint">In grid mode, this is the point of the card snapped to the nearest grid intersection.</p>`:_}

        ${this._gridGeom()?this._row("Columns (span)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="1" max=${this._gridGeom().cols}
            .value=${String(e.grid_span??1)}
            @change=${s=>{const a=this._gridGeom();if(!a)return;const r=Math.max(1,Math.min(a.cols,Number(s.target.value)||1)),l=Math.max(8,r*a.cellW-a.padding);this._updateEmbCard(t,{grid_span:r,width:l})}}
          />`)}`):_}

        ${this._row("Width (px)",n`${this._numWrap(n`<input class="ec-input ec-input-num" type="number" min="20"
            .value=${String(e.width)}
            @change=${s=>this._updateEmbCard(t,{width:Number(s.target.value)})}
          />`)}`)}

        ${this._numRow("Height (px)",{value:e.height,onChange:s=>this._updateEmbCard(t,{height:s}),min:20,placeholder:"auto"})}
      </div>
    `}_embSecAppear(t,e){return n`
      <div class="ec-section">
        ${this._row("Transparent",n`<input type="checkbox" .checked=${e.transparent??!1}
            @change=${i=>this._updateEmbCard(t,{transparent:i.target.checked})}
          />`)}
        ${this._cssRow(e.extra_css,i=>this._updateEmbCard(t,{extra_css:i}))}
      </div>
    `}_renderEmbEditorModal(){if(!this._embEditorOpen)return _;const t=!!this._embNativeEditor,e=this._embEditorTarget?this._embConfig(this._embEditorTarget):void 0,i=e?String(e.type??""):"";return n`
      <div class="ec-lib-backdrop" @click=${this._closeEmbEditor}></div>
      <div class="ec-lib-modal" style="width:min(580px,94vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">${i||"Embedded Card"} — Config</span>
          <div style="display:flex;align-items:center;gap:8px;">
            ${t?n`
              <button class="ec-btn-ghost ec-btn-ghost--sm"
                @click=${()=>{this._embNativeEditor=null}}>
                Use JSON
              </button>`:_}
            <button class="ec-btn-clear" @click=${this._closeEmbEditor}>✕</button>
          </div>
        </div>

        ${t?n`
          <div id="emb-native-slot"
            style="padding:12px 16px;max-height:62vh;overflow-y:auto;box-sizing:border-box;"
            @config-changed=${o=>o.stopPropagation()}
          ></div>
          <div style="display:flex;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-add" style="padding:6px 18px;" @click=${this._closeEmbEditor}>Done</button>
          </div>
        `:n`
          <div style="padding:12px 16px;">
            <p style="font-size:12px;color:#888;margin:0 0 8px;">
              JSON object — <code style="color:#5aadcc">"type"</code> plus card-specific properties.
              ${i?n`<span style="color:#c87aff;"> (no visual editor available for this card type)</span>`:_}
            </p>
            <textarea
              style="width:100%;box-sizing:border-box;min-height:220px;font-family:monospace;font-size:13px;background:#060e18;color:#c8d8e8;border:1px solid rgba(0,212,255,0.25);border-radius:6px;padding:10px;resize:vertical;outline:none;"
              .value=${this._embEditorYaml}
              @input=${o=>{this._embEditorYaml=o.target.value,this._embEditorYamlError=""}}
              spellcheck="false"
            ></textarea>
            ${this._embEditorYamlError?n`<p style="font-size:12px;color:#ff6b6b;margin:6px 0 0;">${this._embEditorYamlError}</p>`:_}
          </div>
          <div style="display:flex;gap:8px;justify-content:flex-end;padding:0 16px 14px;">
            <button class="ec-btn-ghost" @click=${this._closeEmbEditor}>Cancel</button>
            <button class="ec-btn-add" style="padding:6px 16px;" @click=${this._saveEmbEditorYaml}>Save</button>
          </div>
        `}
      </div>
    `}_renderEmbPickerModal(){if(!this._embPickerOpen)return _;const t=window.customCards??[],e=Li.map(c=>({...c,source:"Built-in"})),i=t.map(c=>({type:c.type.startsWith("custom:")?c.type:`custom:${c.type}`,name:c.name??c.type,description:c.description,source:"Custom"})),o=new Set(e.map(c=>c.type)),s=[...e,...i.filter(c=>!o.has(c.type))],a=this._embPickerSearch.trim().toLowerCase(),r=a?s.filter(c=>c.name.toLowerCase().includes(a)||c.type.toLowerCase().includes(a)):s,l=s.some(c=>c.type===a||c.name.toLowerCase()===a);return n`
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
          ${r.map(c=>n`
            <div class="ec-list-row" style="cursor:pointer;padding:8px 10px;"
              @click=${()=>void this._pickEmbCardType(c.type)}>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;color:#c8d8e8;font-weight:500;">${c.name}</div>
                <div style="font-size:11px;color:#5aadcc;font-family:monospace;">${c.type}</div>
                ${c.description?n`<div style="font-size:11px;color:#666;margin-top:1px;">${c.description}</div>`:_}
              </div>
              <span style="font-size:10px;color:#375f78;padding-left:10px;white-space:nowrap;">${c.source}</span>
            </div>
          `)}
          ${a&&!l?n`
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
    `}_renderFlowCompleteModal(){if(!this._showFlowCompleteModal)return _;const t=this._flows()[this._pendingFlowIdx]?.name??"Flow";return n`
      <div class="ec-lib-backdrop"></div>
      <div class="ec-lib-modal" style="width:min(420px,92vw);">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Complete Flow Configuration</span>
        </div>
        <div style="padding:16px 20px;line-height:1.5;">
          <p style="margin:0 0 12px;">
            <strong>${t}</strong> was added. To set the entity, direction, and style,
            complete its configuration in the <strong>Flows</strong> section below.
          </p>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:0 20px 16px;">
          <button class="ec-btn-add" @click=${()=>this._goToFlow()}>Take Me There</button>
          <button class="ec-btn-align" @click=${()=>{this._showFlowCompleteModal=!1,this._previewExpanded=!1,this._pendingFlowIdx=-1}}>Close</button>
        </div>
      </div>
    `}_renderGGModal(){if(!this._ggOpen)return _;const t=r=>n`<img class="ec-lib-preview" src="${ye+r}" alt=""
      @error=${l=>{const c=l.target,d=document.createElement("div");d.className="ec-lib-thumb-placeholder",c.parentNode?.replaceChild(d,c)}} />`,e=[{value:15,color:"#ef4444"},{value:35,color:"#f59e0b"},{value:100,color:"#22c55e"}],i=[{label:"Thermometer",file:"thermometer.svg",fill_direction:"up",width:60,height:200},{label:"Thermometer (Horizontal)",file:"thermometer-horizontal.svg",fill_direction:"left",width:200,height:60},{label:"Arc Gauge",file:"gauge-arc.svg",fill_direction:"up",width:200,height:120},{label:"Battery (Vertical)",file:"battery-vertical.svg",fill_direction:"up",width:44,height:100,thresholds:e},{label:"Battery (Horizontal)",file:"battery-horizontal.svg",fill_direction:"left",width:100,height:44,thresholds:e},{label:"Tank (Cylinder)",file:"tank-cylinder.svg",fill_direction:"up",width:100,height:150},{label:"Tank - Water",file:"tank-water.svg",fill_direction:"up",width:80,height:95},{label:"Tank (Fermenter)",file:"tank-fermenter.svg",fill_direction:"up",width:60,height:165},{label:"Tank (Cone)",file:"tank-cone.svg",fill_direction:"up",width:80,height:150},{label:"Inverter",file:"inverter.svg",fill_direction:"up",width:100,height:100}],o=[{label:"Line",graph_type:"stat-line",thumb:"thumb_stat_line.webp"},{label:"Bar",graph_type:"bar",thumb:"thumb_stat_bar.webp"},{label:"Bar (Stacked)",graph_type:"bar-stacked",thumb:"thumb_statbar_stacked.webp"}],s=[{label:"With Unit (line)",graph_type:"line",thumb:"thumb_history_uom.webp"},{label:"No Unit (states)",graph_type:"state-timeline",thumb:"thumb_history_no_uom.webp"}],a=[{label:"Arc Gauge",graph_type:"gauge",thumb:"thumb_gauge_arc.webp"},{label:"Arc Gauge (Needle)",graph_type:"gauge-needle",thumb:"thumb_gauge_arc_needle.webp"}];return n`
      <div class="ec-lib-backdrop" @click=${()=>{this._ggOpen=!1}}></div>
      <div class="ec-lib-modal">
        <div class="ec-lib-header">
          <span class="ec-lib-title">Element Library</span>
          <button class="ec-btn-clear" @click=${()=>{this._ggOpen=!1}}>✕</button>
        </div>

        <div class="ec-lib-cat">SVG Elements</div>
        <div class="ec-lib-grid">
          ${i.map(r=>n`
            <button class="ec-lib-item" title="${r.label}"
              @click=${()=>this._pickGG("svg",{svg:ye+r.file,fill_direction:r.fill_direction,width:r.width,height:r.height,...r.thresholds?{thresholds:r.thresholds}:{}})}>
              ${t(r.file)}
              <span class="ec-lib-name">${r.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Statistics Graph</div>
        <div class="ec-lib-grid">
          ${o.map(r=>n`
            <button class="ec-lib-item" title="${r.label}"
              @click=${()=>this._pickGG("graph",{graph_type:r.graph_type})}>
              ${t(r.thumb)}
              <span class="ec-lib-name">${r.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">History Graph</div>
        <div class="ec-lib-grid">
          ${s.map(r=>n`
            <button class="ec-lib-item" title="${r.label}"
              @click=${()=>this._pickGG("graph",{graph_type:r.graph_type})}>
              ${t(r.thumb)}
              <span class="ec-lib-name">${r.label}</span>
            </button>
          `)}
        </div>

        <div class="ec-lib-cat">Gauge</div>
        <div class="ec-lib-grid">
          ${a.map(r=>n`
            <button class="ec-lib-item" title="${r.label}"
              @click=${()=>this._pickGG("graph",{graph_type:r.graph_type})}>
              ${t(r.thumb)}
              <span class="ec-lib-name">${r.label}</span>
            </button>
          `)}
        </div>
      </div>
    `}_row(t,e){return n`
      <label class="ec-row">
        <span class="ec-label">${t}</span>
        <div class="ec-control">${e}</div>
      </label>
    `}_optRow(t,e,i,o,s){return n`
      <div class="ec-row">
        <label class="ec-label">${t}${e?n`<span class="ec-label-hint">${e}</span>`:_}</label>
        <div class="ec-control ec-opt-control">
          <label class="ec-opt-inherit">
            <input type="checkbox" .checked=${i} @change=${a=>s(a.target.checked)} />
            Inherit
          </label>
          <div class="ec-opt-target${i?" ec-opt-target--disabled":""}">${o}</div>
        </div>
      </div>
    `}_colorPicker(t,e,i,o){const s=e??"",a=this._cpOpenId===t,{base:r,alpha:l}=Bi(s),c=/^#[0-9a-fA-F]{6}$/.test(r)?r:r?Gi(r,this):"#000000",d=s||"transparent",p=o?.clearable!==!1&&e!=null,u=["#ff0000","#ff4500","#ff8800","#ffff00","#00ff00","#00ff7f","#00ffff","#0000ff","#9400d3","#ff00ff","#ffffff","#00d4ff","#22c55e","#888888","#333333","#000000"],g=parseInt(c.slice(1,3),16),m=parseInt(c.slice(3,5),16),f=parseInt(c.slice(5,7),16),S=(y,D,T)=>`#${[y,D,T].map(I=>Math.max(0,Math.min(255,I)).toString(16).padStart(2,"0")).join("")}`,F=r!==""&&!/^#[0-9a-fA-F]{6}$/.test(r)&&!/^rgb/i.test(r),$=(y,D)=>{if(D>=1){i(y);return}const T=parseInt(y.slice(1,3),16),I=parseInt(y.slice(3,5),16),U=parseInt(y.slice(5,7),16);i(`rgba(${T},${I},${U},${Number(D.toFixed(3))})`)},k=y=>{F?i(we(r,y)):$(c,y)};return n`
      <div class="ec-cp-wrap">
        <div class="ec-color-row">
          <button class="ec-color-swatch-btn" title="Open color picker"
            style="--mce-swatch:${d}"
            @click=${y=>{if(y.stopPropagation(),!a){const D=y.currentTarget.getBoundingClientRect();this._cpOpenAbove=window.innerHeight-D.bottom<340}this._cpOpenId=a?null:t}}
          ></button>
          <input type="text" class="ec-color-text"
            .value=${s}
            placeholder="#rrggbb · rgb() · name"
            @change=${y=>{const D=y.target.value.trim();i(D||void 0)}}
          />
          ${p?n`<button class="ec-btn-clear" title="${o?.clearTitle??"Clear"}"
            @click=${o?.onClear??(()=>i(void 0))}>✕</button>`:_}
        </div>
        ${a?n`
          <div class="ec-cp-backdrop" @click=${()=>{this._cpOpenId=null}}></div>
          <div class="ec-cp-popup${this._cpOpenAbove?" ec-cp-popup--above":""}" @click=${y=>y.stopPropagation()}>
            <div class="ec-cp-modes">
              <button class="ec-cp-mode${this._cpMode==="rgb"?" active":""}"
                @click=${()=>{this._cpMode="rgb"}}>RGB Mode</button>
              <button class="ec-cp-mode${this._cpMode==="css"?" active":""}"
                @click=${()=>{this._cpMode="css"}}>CSS Mode</button>
            </div>
            ${this._cpMode==="css"?this._renderCpVars(i,l):n`
            <div class="ec-cp-main">
            <hex-color-picker
              .color=${c}
              @color-changed=${y=>$(y.detail.value,l)}
            ></hex-color-picker>
            <div class="ec-cp-rgb">
              ${["R","G","B"].map((y,D)=>{const T=[g,m,f][D];return n`<label class="ec-cp-rgb-label">${y}
                  <input type="number" class="ec-cp-rgb-input" min="0" max="255"
                    .value=${String(T)}
                    @change=${I=>{const U=Number(I.target.value);$(S(D===0?U:g,D===1?U:m,D===2?U:f),l)}}
                  />
                </label>`})}
            </div>
            <div class="ec-cp-presets">
              ${u.map(y=>n`
                <button class="ec-cp-preset" style="background:${y}" title="${y}"
                  @click=${()=>{$(y,l),this._cpOpenId=null}}
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
                  @input=${y=>k(parseFloat(y.target.value))}
                />
                <span class="ec-opacity-val">${Math.round(l*100)}%</span>
              </div>
            </div>
          </div>
        `:_}
      </div>
    `}_renderCpVars(t,e=1){const i=this._config?.defaults?.custom_colors??[],o=s=>{t(we(s,e)),this._cpOpenId=null};return n`
      <div class="ec-cp-vars">
        <div class="ec-cp-vars-title">Theme color</div>
        <div class="ec-cp-vars-hint">Select a standard HA or custom color variable</div>
        <div class="ec-cp-vars-list">
          ${Mi.map(s=>n`
            <button class="ec-cp-var-row" title="var(${s.name})" @click=${()=>o(`var(${s.name})`)}>
              <span class="ec-cp-var-chip" style="background:var(${s.name})"></span>
              <span class="ec-cp-var-name">${s.label}</span>
            </button>`)}
          ${i.length?n`<div class="ec-cp-vars-sep">Custom</div>`:_}
          ${i.map(s=>n`
            <button class="ec-cp-var-row" title="var(--mccust_${s.name})" @click=${()=>o(`var(--mccust_${s.name})`)}>
              <span class="ec-cp-var-chip" style="background:${s.color}"></span>
              <span class="ec-cp-var-name">mccust_${s.name}</span>
            </button>`)}
        </div>
      </div>
    `}};h._UNDO_LIMIT=50;h._UNDO_COALESCE_MS=1e3;h._TUTORIAL_STEPS=[{title:"Take a quick tour?",body:"Your card is set up. This short tour points out where everything lives — each step jumps the editor to the place it describes. Cancel any time.",nav:{tab:"cards",panel:""}},{title:"The Cards tab",body:"Everything that displays data: Mosaic Cards (your own layouts of values, labels and library elements), Popover Cards shown on a trigger action, and Embedded External Cards for placing any native or custom HA card on the canvas.",nav:{tab:"cards",panel:""}},{title:"The Elements tab",body:"Things that live on the canvas around your cards: Animated Flow Lines driven by entity values, Clickable Zones for bounded tap actions, and Virtual Entities — helper-like values computed from other entities.",nav:{tab:"elements",panel:""}},{title:"The Settings tab",body:"Card-wide configuration: the Canvas itself, Global Defaults inherited by every element, Templates for saving and loading whole layouts, and Config Health for finding broken references.",nav:{tab:"settings",panel:""}},{title:"Canvas defaults",body:"The Canvas panel holds the background images, day/night switching, aspect ratio and placement mode. The background you chose during setup can be changed here at any time.",nav:{tab:"settings",panel:"canvas"}},{title:"Card Defaults",body:"Global Defaults ▸ Card Default is the styling every Mosaic Card inherits — box style, text colour and popup behaviour. Set the look once here rather than per card; individual cards only need overrides.",nav:{tab:"settings",panel:"defaults",path:[{key:"sec:card",label:"Card Default"}]}},{title:"Your first Mosaic Card",body:"This is the Mosaic Card list. Press “+ Mosaic Card” to create one, open it, then press “+ Field”, set the field’s Type to Value and pick an entity — that puts a live value on the canvas.",nav:{tab:"cards",panel:"mosaic"}},{title:"The Mosaic Editor",body:"“Open Mosaic Editor Window” (above the tabs) opens the fullscreen drag editor — position cards, zones and flow points directly on your background. Double-click any element there to jump straight to its settings.",nav:{tab:"cards",panel:""}}];h._PTR_DRAG_SLOP=6;h._PTR_EDGE=44;h._PTR_SCROLL_MAX=16;h.PICKER_HEIGHT=30;h._WALKED_PICKERS=["ha-icon-picker",".ec-attr-picker","ha-service-picker",".ec-nav-picker"];h._TAB_LABEL={cards:"Cards",elements:"Elements",settings:"Settings"};h._PANEL_META={mosaic:{icon:"mdi:view-dashboard",title:"Mosaic Cards",desc:"Canvas cards holding value, label, icon, Element Library (SVG fills & graphs), blank and rule fields. Reorder fields to stack them; style per-card or inherit the global defaults."},popover:{icon:"mdi:picture-in-picture-bottom-right",title:"Popover Cards",desc:"Popup panels opened by an Open Popover action from a card, field or zone. Column-based layout with their own defaults."},embedded:{icon:"mdi:widgets",title:"Embedded External Cards",desc:"Embed any native or custom Home Assistant dashboard card directly onto the canvas."},flows:{icon:"mdi:chart-timeline-variant",title:"Animated Flow Lines",desc:"CSS-animated lines between canvas points. An entity value drives speed and direction; style is dashes, dots, fluid or particles."},zones:{icon:"mdi:gesture-tap-box",title:"Clickable Zones",desc:"Bounded clickable hotspots pinned to canvas coordinates, used to trigger tap / hold / double-tap actions."},virtuals:{icon:"mdi:memory",title:"Virtual Entities",desc:"Computed helper entities — add, subtract, mean, signed net or time-until — usable across every card without a HA helper."},canvas:{icon:"mdi:image-size-select-actual",title:"Canvas",desc:"Placement mode (Precision or Grid), base size, fit, extend margins, the canvas box and the background image set."},defaults:{icon:"mdi:palette",title:"Global Defaults",desc:"Default box, value and label styling plus fonts, gaps and element fill colors. Cards and fields inherit these unless overridden."},templates:{icon:"mdi:bookmark-multiple",title:"Templates",desc:"Save the current layout as a portable template, or import one to replace the configuration."},health:{icon:"mdi:stethoscope",title:"Config Health",desc:"Read-only checks over the whole configuration: references that no longer resolve, entities Home Assistant does not have, and values only reachable from the YAML editor. Every row opens the screen that owns it."}};h._RIBBON_ITEMS=[{tab:"cards",panel:"mosaic",icon:"mdi:view-dashboard",label:"Mosaic Card",hint:"Values, labels, icons & Element Library"},{tab:"cards",panel:"popover",icon:"mdi:picture-in-picture-bottom-right",label:"Popover Cards",hint:"Shown on a trigger action"},{tab:"cards",panel:"embedded",icon:"mdi:widgets",label:"Embedded External Cards",hint:"Any native or custom HA card"},{tab:"elements",panel:"flows",icon:"mdi:chart-timeline-variant",label:"Animated Flow Lines",hint:"Entity-driven CSS flows"},{tab:"elements",panel:"zones",icon:"mdi:gesture-tap-box",label:"Clickable Zones",hint:"Bounded action areas"},{tab:"elements",panel:"virtuals",icon:"mdi:memory",label:"Virtual Entities",hint:"Helper-like computed values"},{tab:"settings",panel:"canvas",icon:"mdi:image-size-select-actual",label:"Canvas",hint:"Background, aspect & placement mode"},{tab:"settings",panel:"defaults",icon:"mdi:palette",label:"Global Defaults",hint:"Inherited element styling"},{tab:"settings",panel:"templates",icon:"mdi:bookmark-multiple",label:"Templates",hint:"Import & export layout"},{tab:"settings",panel:"health",icon:"mdi:stethoscope",label:"Config Health",hint:"Broken references & YAML-only values"}];h._SEARCH_LIMIT=30;h._BLANK_RULE_DEF={key:"fsec:blankform",label:"Spacer",hint:"Gap height",icon:"mdi:crop-square-outline",paths:["blank_gap"]};h._CARD_BG_PATHS=["url","fit","opacity","width","height","padding_top","padding_bottom","padding_left","padding_right"];h._CARD_SECTIONS=[{key:"sec:defaults",label:"Card Defaults",hint:"Name, anchor, align, columns, gaps",icon:"mdi:tune",terms:"name anchor align columns span width gap transparent",paths:["name","anchor","align","columns","grid_span","width","field_gap","column_gap","transparent"]},{key:"sec:style",label:"Card Style",hint:"Transparent, background, border, glow",icon:"mdi:palette",terms:vt,paths:R("box",rt)},{key:"sec:text",label:"Text Styles",hint:"Value & label style",icon:"mdi:format-title",terms:bt,paths:[...R("value_style",Q),...R("label_style",Q)]},{key:"sec:visibility",label:"Card Visibility",hint:"Show / hide by condition",icon:"mdi:eye-outline",terms:"entity operator value condition show hide",paths:["visible_when"]},{key:"sec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Rt,paths:Jt},{key:"sec:bg",label:"Background Image",hint:"Image behind the card fields",icon:"mdi:image-outline",terms:"url fit opacity width height padding cover contain stretch",paths:R("bg",h._CARD_BG_PATHS)}];h._SUM_DEVICE_CLASSES=new Set(["energy","gas","water","volume","monetary"]);h._THERMO_PATHS=X("thermo_",Fe);h._GRAPH_CHROME_PATHS=["graph_axis_color","graph_grid_color","graph_zero_line_color","graph_baseline_color","graph_label_color","graph_label_size","graph_unit_label_color","graph_bar_label_color","graph_legend_label_color","graph_gauge_track_color","graph_gauge_value_color","graph_palette"];h._STAT_PATHS=["stat_type","stat_characteristic","stat_period","stat_period_start","stat_period_end","stat_period_n","stat_max_age_hours","stat_sampling_size","stat_percentile"];h._OPTION_LAYOUT_KEYS=["option_icon_position","option_show_state","option_state_position","option_icon_style","option_label_style","option_state_style"];h._OPTION_LAYOUT_DEF={key:"optlayout",label:"Option Layout",hint:"Icon & state position, sizes, separation",icon:"mdi:view-grid-outline",paths:[...h._OPTION_LAYOUT_KEYS,...R("control_style",Qt)]};h._DEFAULTS_SECTIONS=[{key:"sec:card",label:"Card Default",hint:"Box style, text color and popup behaviour",icon:"mdi:view-dashboard-outline",terms:`${vt} text colour color white contrast photo scrim backdrop dim overlay popover expand modal close button radius`,paths:[...R("card",rt),"card_text_color","overlay_panel_radius",...Ce]},{key:"sec:value",label:"Value Default",hint:"Default value text style",icon:"mdi:function-variant",terms:bt,paths:R("value",Q)},{key:"sec:label",label:"Label Default",hint:"Default label text style",icon:"mdi:format-title",terms:bt,paths:R("label",Q)},{key:"sec:control",label:"Control Default",hint:"Per-control style sections",icon:"mdi:toggle-switch-outline"},{key:"sec:customcolors",label:"Custom Colors",hint:"Reusable css color variables",icon:"mdi:language-css3",paths:["custom_colors"]},{key:"sec:customvars",label:"Custom Variables",hint:"Reusable sizes, shadows and other values",icon:"mdi:code-braces",paths:["custom_vars"]},{key:"sec:layout",label:"Layout & Fonts",hint:"Fonts, gaps, columns, units",icon:"mdi:format-size",paths:["power_unit","stat_update_interval","font_family","mono_font_family","card_columns","field_gap","column_gap"]},{key:"sec:elements",label:"Element Library",hint:"Thermometer, battery, tank, inverter, gauge",icon:"mdi:palette-swatch-outline"},{key:"sec:reset",label:"Reset & Rerun Wizard",hint:"Clear all cards, flows, zones & background",icon:"mdi:restore-alert"}];h.SEPARATION_KEYS=[...Qt,...te];h._CONTROL_DEFAULTS_SECTIONS=[{key:"cd:common",label:"Common",hint:"Accent color — themes every control",icon:"mdi:palette",paths:R("control_style",[...ot.accent,"gradient_angle"])},{key:"cd:density",label:"Density",hint:"Text size, padding and gap for every control",icon:"mdi:arrow-collapse-vertical",paths:["control_font_size","control_padding","control_gap"]},{key:"cd:toggle",label:"Toggle",hint:"On / off colors",icon:"mdi:toggle-switch-outline",paths:R("control_style",ot.toggle)},{key:"cd:slider",label:"Slider",hint:"Track, fill, thumb, height",icon:"mdi:tune-variant",paths:R("control_style",ot.slider)},{key:"cd:dropdown",label:"Dropdown",hint:"Border, background, menu, selected",icon:"mdi:form-dropdown",paths:R("control_style",ot.dropdown)},{key:"cd:selector",label:"Button Group",hint:"Container, active / inactive, separation",icon:"mdi:view-dashboard-variant-outline",terms:"selector segmented options option cells row wrap"},{key:"cd:input",label:"Input",hint:"Border, background, focus",icon:"mdi:form-textbox",paths:R("control_style",ot.input)},{key:"cd:spinbox",label:"Spin Box",hint:"Border, button, hover, width",icon:"mdi:numeric",paths:R("control_style",ot.spinbox)},{key:"cd:button",label:"Button",hint:"Container, active / inactive",icon:"mdi:gesture-tap-button"},{key:"cd:container",label:"Container Box",hint:"Box behind every control",icon:"mdi:square-rounded-outline",terms:vt,paths:R("control",rt)},{key:"cd:variants",label:"Variant Builder",hint:"Create and manage custom control variants",icon:"mdi:shape-plus"}];h._ELEM_LIB_SECTIONS=[{key:"el:thermo-v",label:"Thermometer (Vertical)",hint:"Ticks, grid, fill, temperature text",icon:"mdi:thermometer",terms:qt,paths:X("thermo_",ve)},{key:"el:thermo-h",label:"Thermometer (Horizontal)",hint:"Ticks, grid, fill, temperature text",icon:"mdi:thermometer",terms:qt,paths:X("thermo_h_",ve)},{key:"el:bat-h",label:"Battery (Horizontal)",hint:"Fill & gradient",icon:"mdi:battery",paths:X("battery_h_",fe)},{key:"el:bat-v",label:"Battery (Vertical)",hint:"Fill & gradient",icon:"mdi:battery",paths:X("battery_v_",fe)},{key:"el:tank-cyl",label:"Tank (Cylinder)",hint:"Fill, direction, wall",icon:"mdi:barrel",paths:X("tank_cylinder_",Pt)},{key:"el:tank-water",label:"Tank - Water",hint:"Fill, direction, wall",icon:"mdi:water",paths:X("tank_water_",Pt)},{key:"el:tank-ferm",label:"Tank - Fermenter",hint:"Fill, direction, wall",icon:"mdi:flask-outline",paths:X("tank_fermenter_",Pt)},{key:"el:tank-cone",label:"Tank - Cone",hint:"Fill, direction, wall",icon:"mdi:triangle-outline",paths:X("tank_cone_",Pt)},{key:"el:inverter",label:"Inverter",hint:"Line color",icon:"mdi:sine-wave",paths:["inverter_line_color","inverter_extra_css"]},{key:"el:gauge-arc",label:"Gauge (Arc)",hint:"Needle, label color & size",icon:"mdi:speedometer",paths:["gauge_arc_needle_color","gauge_arc_label_color","gauge_arc_label_size","gauge_arc_extra_css"]}];h.ELEM_CSS_KEY={"el:thermo-v":"thermo_extra_css","el:thermo-h":"thermo_h_extra_css","el:bat-h":"battery_h_extra_css","el:bat-v":"battery_v_extra_css","el:tank-cyl":"tank_cylinder_extra_css","el:tank-water":"tank_water_extra_css","el:tank-ferm":"tank_fermenter_extra_css","el:tank-cone":"tank_cone_extra_css","el:inverter":"inverter_extra_css","el:gauge-arc":"gauge_arc_extra_css"};h._POPOVER_GLOBAL_DEFAULTS_DEF={key:"defaults-global",label:"Popover Card Defaults",hint:"Default columns, size, gaps & style for every popover card",icon:"mdi:tune",paths:["columns","width","height","field_gap","column_gap",...R("card",rt),...R("label",Q),...R("value",Q)]};h._POPOVER_CARD_SECTIONS=[{key:"sec:defaults",label:"Card Defaults",hint:"Columns, width %, height %, gaps",icon:"mdi:tune",paths:["name","columns","width","height","align","field_gap","column_gap"]},{key:"sec:style",label:"Box Style",hint:"Background, border, glow, blur",icon:"mdi:palette",terms:vt,paths:R("box",rt)},{key:"sec:text",label:"Text Styles",hint:"Label & value style",icon:"mdi:format-title",terms:bt,paths:[...R("label_style",Q),...R("value_style",Q)]}];h._CANVAS_SECTIONS=[{key:"sec:mode",label:"Placement Mode",hint:"Precision or Grid",icon:"mdi:grid",paths:["canvas.layout_mode","canvas.grid.columns","canvas.grid.rows","canvas.grid.padding"]},{key:"sec:size",label:"Canvas Size",hint:"Base size, fit & extend",icon:"mdi:aspect-ratio",paths:["canvas.width","canvas.height","canvas.fit","canvas.extend.top","canvas.extend.right","canvas.extend.bottom","canvas.extend.left"]},{key:"sec:box",label:"Canvas Box",hint:"Canvas background & border",icon:"mdi:image-frame",terms:vt,paths:R("canvas.box",rt)},{key:"sec:bg",label:"Background",hint:"Source, images & EV count",icon:"mdi:image-multiple",paths:["background.source","background.sun_entity","background.sun_attribute","background.mode_entity","background.mode_attribute","background.fit","background.images","ev_count"]}];h._TEMPLATE_SECTIONS=[{key:"sec:export",label:"Export Template",hint:"Save the current layout as a file",icon:"mdi:download"},{key:"sec:import",label:"Import Template",hint:"Load a saved layout file",icon:"mdi:upload"},{key:"sec:varexport",label:"Export Control Variants",hint:"Save this card's custom variants as a file",icon:"mdi:shape-plus"},{key:"sec:varimport",label:"Import Control Variants",hint:"Merge custom variants from a file",icon:"mdi:shape-outline"}];h._VIRTUAL_OPS=[{value:"add",label:"Add (sum all)"},{value:"subtract",label:"Subtract (first − rest)"},{value:"mean",label:"Mean (average)"},{value:"signed_net",label:"Signed net (input[0] − input[1])"},{value:"time_until",label:"Time Until"},{value:"statistic",label:"Statistic"}];h._ZONE_SECTIONS=[{key:"sec:defaults",label:"Zone Defaults",hint:"Name, position, anchor, size, overlay",icon:"mdi:tune",terms:"name x y position width height color radius",paths:["name","position.x","position.y","anchor","width","height","color","radius"]},{key:"sec:actions",label:"Actions",hint:"Tap · hold · double tap",icon:"mdi:gesture-tap",terms:Rt,paths:Jt}];h._FLOW_STYLES=["dashes","dots","fluid","particles"];h._FLOW_SIDES=["top","right","bottom","left","center"];h._FLOW_SECTIONS=[{key:"sec:defaults",label:"Flow Defaults",hint:"Name, entity, min display power, invert",icon:"mdi:tune",paths:["name","entity","min_power","invert"]},{key:"sec:speed",label:"Speed",hint:"Slowest / fastest value → animation speed",icon:"mdi:speedometer",paths:["speed_min_value","speed_max_value","speed_min_duration","speed_max_duration","duration"]},{key:"sec:style",label:"Line Style",hint:"Style, colors, width, curve",icon:"mdi:brush-variant",terms:"dashes dots fluid particles duration count",paths:["style","forward_color","color","reverse_color","width","particle_count","curve"]}];h._ACTION_LABELS={tap_action:"Tap",hold_action:"Hold",double_tap_action:"Double tap"};h._PSEUDO_ACTIONS=[{id:"mosaic.open_popover",action:"open-extended",name:"Open Popover",description:"Show one of this card's popover cards."},{id:"mosaic.expand_card",action:"expand-card",name:"Expand Card",description:"Expand this card to fill the canvas."},{id:"mosaic.fire_dom_event",action:"fire-dom-event",name:"Fire DOM Event",description:"Fire a browser DOM event for another frontend add-on to pick up."},{id:"ui.more_info",action:"more-info",name:"More info",description:"Open the entity's more-info dialog."},{id:"ui.toggle",action:"toggle",name:"Toggle",description:"Toggle the entity."},{id:"ui.navigate",action:"navigate",name:"Navigate",description:"Go to another dashboard view."},{id:"ui.url",action:"url",name:"Open URL",description:"Open a link."},{id:"ui.assist",action:"assist",name:"Assist",description:"Open the Assist dialog."}];h._PSEUDO_SERVICES=(()=>{const t={};for(const e of h._PSEUDO_ACTIONS){const i=e.id.indexOf("."),o=e.id.slice(0,i);(t[o]??={})[e.id.slice(i+1)]={name:e.name,description:e.description,fields:{}}}return t})();h._PSEUDO_TITLES={"component.mosaic.title":"Mosaic","component.ui.title":"Interface"};h._NAV_SELECTOR={navigation:{}};h._EMB_SECTIONS=[{key:"sec:config",label:"Card Config",hint:"Pick card type & edit config",icon:"mdi:widgets",paths:["name","card_config"]},{key:"sec:pos",label:"Position & Size",hint:"Anchor, width, span, height",icon:"mdi:arrow-expand-all",paths:["position.x","position.y","anchor","grid_span","width","height"]},{key:"sec:appear",label:"Appearance",hint:"Transparent background",icon:"mdi:palette",paths:["transparent","extra_css"]}];h.styles=[Ue`
      :host {
        display: block;
        font-size: 16px;
        color: var(--primary-text-color);

        

        --mce-field-h: 30px;
        --mce-field-radius: 6px;
        --mce-field-font-size: 15px;
        --mce-field-bg: var(--secondary-background-color, rgba(0,8,18,0.7));
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
      .ec-wiz-optional { font-size: 12px; font-weight: 400; color: var(--secondary-text-color, #777); }
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
      .ec-wiz-input--short { width: 80px; }
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
      .ec-wiz-ev-group {
        background: var(--mce-fill-subtle); border: 1px solid var(--divider-color, rgba(255,255,255,0.08));
        border-radius: 8px; padding: 12px; margin-bottom: 10px;
      }
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
        background: var(--secondary-background-color, rgba(0,180,220,0.07));
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
        justify-content: flex-end;
        gap: 2px;
        padding: 4px 14px 0;
        background: var(--card-background-color, #070f1a);
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
        position: absolute;
        top: calc(100% + 4px);
        bottom: auto;
        left: 0;
        z-index: 9999;
        background: var(--card-background-color, #1a2332);
        border: 1px solid var(--divider-color, rgba(0,212,255,0.3));
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 8px 32px var(--mce-scrim);
        width: 220px;
        max-width: calc(100vw - 24px);
      }
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
      .ec-cp-popup--above { top: auto; bottom: calc(100% + 4px); }
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
      .ec-list-row.ec-dragging { opacity: 0.3; }
      .ec-list-row.ec-drag-over {
        outline: 1px solid var(--mce-accent);
        background: var(--mce-accent-fill);
        border-radius: 4px;
      }
      

      .ec-item-card.ec-drop-before { box-shadow: inset 0 3px 0 0 var(--mce-accent); }
      .ec-item-card.ec-drop-after { box-shadow: inset 0 -3px 0 0 var(--mce-accent); }
      

      .ec-btn-reorder {
        font-size: 12px;
        padding: 2px 5px;
        border: 1px solid var(--divider-color, rgba(0,212,255,0.15));
        border-radius: 4px;
        background: transparent;
        color: var(--secondary-text-color, #375f78);
        cursor: pointer;
        line-height: 1;
        transition: border-color 0.12s, color 0.12s, background 0.12s;
      }
      .ec-btn-reorder:hover:not(:disabled) {
        border-color: var(--mce-primary);
        color: var(--mce-primary);
        background: var(--mce-primary-fill);
      }
      .ec-btn-reorder:disabled { opacity: 0.2; cursor: default; }
      

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
    `];w([Ye({attribute:!1})],h.prototype,"hass",2);w([x()],h.prototype,"_config",2);w([x()],h.prototype,"_selCard",2);w([x()],h.prototype,"_selField",2);w([x()],h.prototype,"_selCards",2);w([x()],h.prototype,"_selEmbCards",2);w([x()],h.prototype,"_groupColGap",2);w([x()],h.prototype,"_groupRowGap",2);w([x()],h.prototype,"_selFlow",2);w([x()],h.prototype,"_showAddFlowInput",2);w([x()],h.prototype,"_newFlowName",2);w([x()],h.prototype,"_pendingFlowIdx",2);w([x()],h.prototype,"_showFlowCompleteModal",2);w([x()],h.prototype,"_selPoint",2);w([x()],h.prototype,"_selSeries",2);w([x()],h.prototype,"_selOption",2);w([x()],h.prototype,"_selExtOption",2);w([x()],h.prototype,"_selExtSeries",2);w([x()],h.prototype,"_selVirtual",2);w([x()],h.prototype,"_selVirtualInput",2);w([x()],h.prototype,"_selTrigger",2);w([x()],h.prototype,"_selZone",2);w([x()],h.prototype,"_selExtCard",2);w([x()],h.prototype,"_selExtField",2);w([x()],h.prototype,"_templateName",2);w([x()],h.prototype,"_templateIncludeEntities",2);w([x()],h.prototype,"_templateError",2);w([x()],h.prototype,"_previewBoxes",2);w([x()],h.prototype,"_previewExpanded",2);w([x()],h.prototype,"_barAtTop",2);w([x()],h.prototype,"_copiedFields",2);w([x()],h.prototype,"_copySourceId",2);w([x()],h.prototype,"_virtualClipboard",2);w([x()],h.prototype,"_copiedField",2);w([x()],h.prototype,"_copiedFieldSrc",2);w([x()],h.prototype,"_copiedOption",2);w([x()],h.prototype,"_dragSrc",2);w([x()],h.prototype,"_cpOpenId",2);w([x()],h.prototype,"_cpOpenAbove",2);w([x()],h.prototype,"_ggOpen",2);w([x()],h.prototype,"_wizStep",2);w([x()],h.prototype,"_wiz",2);w([x()],h.prototype,"_bgSelected",2);w([x()],h.prototype,"_selEmbCard",2);w([x()],h.prototype,"_embEditorOpen",2);w([x()],h.prototype,"_embEditorYaml",2);w([x()],h.prototype,"_embEditorYamlError",2);w([x()],h.prototype,"_embNativeEditor",2);w([x()],h.prototype,"_embPickerOpen",2);w([x()],h.prototype,"_embPickerSearch",2);w([x()],h.prototype,"_variantOpen",2);w([x()],h.prototype,"_variantError",2);w([x()],h.prototype,"_saveVariantFor",2);w([x()],h.prototype,"_saveVariantLabel",2);w([x()],h.prototype,"_variantImportError",2);w([x()],h.prototype,"_navTab",2);w([x()],h.prototype,"_navPanel",2);w([x()],h.prototype,"_navPath",2);w([x()],h.prototype,"_listFilter",2);w([x()],h.prototype,"_toastMsg",2);w([x()],h.prototype,"_tutorialStep",2);w([x()],h.prototype,"_dropKey",2);w([x()],h.prototype,"_dropBefore",2);w([x()],h.prototype,"_searchQuery",2);w([x()],h.prototype,"_searchActive",2);w([x()],h.prototype,"_healthShowIgnored",2);w([x()],h.prototype,"_cpMode",2);h=w([je(Ke)],h);export{h as MosaicCanvasEditor};
