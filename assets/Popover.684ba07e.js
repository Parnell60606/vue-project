import{ai as oe,aj as ae,ak as re,al as te,am as en,an as nn,ao as be,ap as rn,aq as W,ar as G,as as Ue,at as ve,au as tn,av as Ae,aw as on,ax as _e,ay as Oe,az as V,aA as an,aB as Te,aC as sn,aD as ln,aE as me,aF as dn,aG as un,aH as fn,aI as ke,aJ as cn,aK as vn,aL as hn,aM as gn,aN as pn,R as wn,g as D,h as B,aO as ie,aP as se,i as Z,aQ as bn,j as je,u as mn,k as ye,z as L,C as yn,aR as Sn,l as J,m as $n,A as An,aS as _n,K as q,J as Q,aT as On,aU as Tn,aV as xn,n as S,aW as Pn,aX as xe,x as Cn,Y as le,aY as Pe,aZ as Ce,a_ as Mn,M as En,a$ as Je,b0 as de,F as Rn,b1 as Bn,b2 as In,b3 as Dn,H as Me,b4 as Ln,b5 as Ee,Q as Fn,b6 as zn,b7 as Nn,e as Hn,b8 as X}from"./index.a36aaae0.js";import{u as ee,V as Kn,a as Wn,b as Gn}from"./utils.d90fd99d.js";let ue;function Un(){return ue===void 0&&(ue=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),ue}const K="@@mmoContext",kn={mounted(e,{value:n}){e[K]={handler:void 0},typeof n=="function"&&(e[K].handler=n,oe("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[K];typeof n=="function"?r.handler?r.handler!==n&&(ae("mousemoveoutside",e,r.handler),r.handler=n,oe("mousemoveoutside",e,n)):(e[K].handler=n,oe("mousemoveoutside",e,n)):r.handler&&(ae("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[K];n&&ae("mousemoveoutside",e,n),e[K].handler=void 0}},jn=kn;var Jn=re(te,"WeakMap");const he=Jn;var Xn=en(Object.keys,Object);const Yn=Xn;var Vn=Object.prototype,qn=Vn.hasOwnProperty;function Qn(e){if(!nn(e))return Yn(e);var n=[];for(var r in Object(e))qn.call(e,r)&&r!="constructor"&&n.push(r);return n}function Se(e){return be(e)?rn(e):Qn(e)}function Zn(e,n){for(var r=-1,t=n.length,a=e.length;++r<t;)e[a+r]=n[r];return e}function er(e,n){for(var r=-1,t=e==null?0:e.length,a=0,o=[];++r<t;){var i=e[r];n(i,r,e)&&(o[a++]=i)}return o}function nr(){return[]}var rr=Object.prototype,tr=rr.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,or=Re?function(e){return e==null?[]:(e=Object(e),er(Re(e),function(n){return tr.call(e,n)}))}:nr;const ar=or;function ir(e,n,r){var t=n(e);return W(e)?t:Zn(t,r(e))}function Be(e){return ir(e,Se,ar)}var sr=re(te,"DataView");const ge=sr;var lr=re(te,"Promise");const pe=lr;var dr=re(te,"Set");const we=dr;var Ie="[object Map]",ur="[object Object]",De="[object Promise]",Le="[object Set]",Fe="[object WeakMap]",ze="[object DataView]",fr=G(ge),cr=G(ve),vr=G(pe),hr=G(we),gr=G(he),F=Ue;(ge&&F(new ge(new ArrayBuffer(1)))!=ze||ve&&F(new ve)!=Ie||pe&&F(pe.resolve())!=De||we&&F(new we)!=Le||he&&F(new he)!=Fe)&&(F=function(e){var n=Ue(e),r=n==ur?e.constructor:void 0,t=r?G(r):"";if(t)switch(t){case fr:return ze;case cr:return Ie;case vr:return De;case hr:return Le;case gr:return Fe}return n});const Ne=F;var pr="__lodash_hash_undefined__";function wr(e){return this.__data__.set(e,pr),this}function br(e){return this.__data__.has(e)}function ne(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new tn;++n<r;)this.add(e[n])}ne.prototype.add=ne.prototype.push=wr;ne.prototype.has=br;function mr(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function yr(e,n){return e.has(n)}var Sr=1,$r=2;function Xe(e,n,r,t,a,o){var i=r&Sr,s=e.length,l=n.length;if(s!=l&&!(i&&l>s))return!1;var u=o.get(e),f=o.get(n);if(u&&f)return u==n&&f==e;var p=-1,v=!0,m=r&$r?new ne:void 0;for(o.set(e,n),o.set(n,e);++p<s;){var y=e[p],c=n[p];if(t)var x=i?t(c,y,p,n,e,o):t(y,c,p,e,n,o);if(x!==void 0){if(x)continue;v=!1;break}if(m){if(!mr(n,function(A,_){if(!yr(m,_)&&(y===A||a(y,A,r,t,o)))return m.push(_)})){v=!1;break}}else if(!(y===c||a(y,c,r,t,o))){v=!1;break}}return o.delete(e),o.delete(n),v}function Ar(e){var n=-1,r=Array(e.size);return e.forEach(function(t,a){r[++n]=[a,t]}),r}function _r(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var Or=1,Tr=2,xr="[object Boolean]",Pr="[object Date]",Cr="[object Error]",Mr="[object Map]",Er="[object Number]",Rr="[object RegExp]",Br="[object Set]",Ir="[object String]",Dr="[object Symbol]",Lr="[object ArrayBuffer]",Fr="[object DataView]",He=Ae?Ae.prototype:void 0,fe=He?He.valueOf:void 0;function zr(e,n,r,t,a,o,i){switch(r){case Fr:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Lr:return!(e.byteLength!=n.byteLength||!o(new _e(e),new _e(n)));case xr:case Pr:case Er:return on(+e,+n);case Cr:return e.name==n.name&&e.message==n.message;case Rr:case Ir:return e==n+"";case Mr:var s=Ar;case Br:var l=t&Or;if(s||(s=_r),e.size!=n.size&&!l)return!1;var u=i.get(e);if(u)return u==n;t|=Tr,i.set(e,n);var f=Xe(s(e),s(n),t,a,o,i);return i.delete(e),f;case Dr:if(fe)return fe.call(e)==fe.call(n)}return!1}var Nr=1,Hr=Object.prototype,Kr=Hr.hasOwnProperty;function Wr(e,n,r,t,a,o){var i=r&Nr,s=Be(e),l=s.length,u=Be(n),f=u.length;if(l!=f&&!i)return!1;for(var p=l;p--;){var v=s[p];if(!(i?v in n:Kr.call(n,v)))return!1}var m=o.get(e),y=o.get(n);if(m&&y)return m==n&&y==e;var c=!0;o.set(e,n),o.set(n,e);for(var x=i;++p<l;){v=s[p];var A=e[v],_=n[v];if(t)var z=i?t(_,A,v,n,e,o):t(A,_,v,e,n,o);if(!(z===void 0?A===_||a(A,_,r,t,o):z)){c=!1;break}x||(x=v=="constructor")}if(c&&!x){var M=e.constructor,C=n.constructor;M!=C&&"constructor"in e&&"constructor"in n&&!(typeof M=="function"&&M instanceof M&&typeof C=="function"&&C instanceof C)&&(c=!1)}return o.delete(e),o.delete(n),c}var Gr=1,Ke="[object Arguments]",We="[object Array]",Y="[object Object]",Ur=Object.prototype,Ge=Ur.hasOwnProperty;function kr(e,n,r,t,a,o){var i=W(e),s=W(n),l=i?We:Ne(e),u=s?We:Ne(n);l=l==Ke?Y:l,u=u==Ke?Y:u;var f=l==Y,p=u==Y,v=l==u;if(v&&Oe(e)){if(!Oe(n))return!1;i=!0,f=!1}if(v&&!f)return o||(o=new V),i||an(e)?Xe(e,n,r,t,a,o):zr(e,n,l,r,t,a,o);if(!(r&Gr)){var m=f&&Ge.call(e,"__wrapped__"),y=p&&Ge.call(n,"__wrapped__");if(m||y){var c=m?e.value():e,x=y?n.value():n;return o||(o=new V),a(c,x,r,t,o)}}return v?(o||(o=new V),Wr(e,n,r,t,a,o)):!1}function $e(e,n,r,t,a){return e===n?!0:e==null||n==null||!Te(e)&&!Te(n)?e!==e&&n!==n:kr(e,n,r,t,$e,a)}var jr=1,Jr=2;function Xr(e,n,r,t){var a=r.length,o=a,i=!t;if(e==null)return!o;for(e=Object(e);a--;){var s=r[a];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<o;){s=r[a];var l=s[0],u=e[l],f=s[1];if(i&&s[2]){if(u===void 0&&!(l in e))return!1}else{var p=new V;if(t)var v=t(u,f,l,e,n,p);if(!(v===void 0?$e(f,u,jr|Jr,t,p):v))return!1}}return!0}function Ye(e){return e===e&&!sn(e)}function Yr(e){for(var n=Se(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Ye(a)]}return n}function Ve(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function Vr(e){var n=Yr(e);return n.length==1&&n[0][2]?Ve(n[0][0],n[0][1]):function(r){return r===e||Xr(r,e,n)}}function qr(e,n){return e!=null&&n in Object(e)}function Qr(e,n,r){n=ln(n,e);for(var t=-1,a=n.length,o=!1;++t<a;){var i=me(n[t]);if(!(o=e!=null&&r(e,i)))break;e=e[i]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&dn(a)&&un(i,a)&&(W(e)||fn(e)))}function Zr(e,n){return e!=null&&Qr(e,n,qr)}var et=1,nt=2;function rt(e,n){return ke(e)&&Ye(n)?Ve(me(e),n):function(r){var t=cn(r,e);return t===void 0&&t===n?Zr(r,e):$e(n,t,et|nt)}}function tt(e){return function(n){return n==null?void 0:n[e]}}function ot(e){return function(n){return vn(n,e)}}function at(e){return ke(e)?tt(me(e)):ot(e)}function it(e){return typeof e=="function"?e:e==null?hn:typeof e=="object"?W(e)?rt(e[0],e[1]):Vr(e):at(e)}function st(e,n){return e&&gn(e,n,Se)}function lt(e,n){return function(r,t){if(r==null)return r;if(!be(r))return e(r,t);for(var a=r.length,o=n?a:-1,i=Object(r);(n?o--:++o<a)&&t(i[o],o,i)!==!1;);return r}}var dt=lt(st);const ut=dt;function ft(e,n){var r=-1,t=be(e)?Array(e.length):[];return ut(e,function(a,o,i){t[++r]=n(a,o,i)}),t}function ct(e,n){var r=W(e)?pn:ft;return r(e,it(n))}const vt={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},ht=e=>{const{boxShadow2:n,popoverColor:r,textColor2:t,borderRadius:a,fontSize:o,dividerColor:i}=e;return Object.assign(Object.assign({},vt),{fontSize:o,borderRadius:a,color:r,dividerColor:i,textColor:t,boxShadow:n})},gt={name:"Popover",common:wn,self:ht},pt=gt,ce={top:"bottom",bottom:"top",left:"right",right:"left"},b="var(--n-arrow-height) * 1.414",wt=D([B("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[D(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ie("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[ie("scrollable",[ie("show-header-or-footer","padding: var(--n-padding);")])]),se("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),se("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Z("scrollable, show-header-or-footer",[se("content",`
 padding: var(--n-padding);
 `)])]),B("popover-shared",`
 transform-origin: inherit;
 `,[B("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[B("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${b});
 height: calc(${b});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),D("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),D("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),D("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),D("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${b} / -2);
 left: calc(${R("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${b} / -2);
 right: calc(${R("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${b} / -2);
 left: calc(${R("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${b} / -2);
 transform: translateX(calc(${b} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${b} / -2);
 right: calc(${R("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${b} / -2);
 top: calc(${R("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${b} / -2);
 bottom: calc(${R("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${b} / -2);
 top: calc(${R("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${b} / -2);
 transform: translateY(calc(${b} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${b} / -2);
 bottom: calc(${R("right-end")} + var(--v-offset-top));
 `),...ct({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",s=`calc((${`var(--v-target-${t}, 0px)`} - ${b}) / 2)`,l=R(a);return D(`[v-placement="${a}"] >`,[B("popover-shared",[Z("center-arrow",[B("popover-arrow",`${n}: calc(max(${s}, ${l}) ${o?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function R(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return D(`[v-placement="${e}"] >`,[B("popover-shared",`
 margin-${ce[r]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${ce[r]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),bn("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${ce[r]}: auto;
 ${t}
 `,[B("popover-arrow",n)])])])}const qe=Object.assign(Object.assign({},ye.props),{to:ee.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),bt=({arrowStyle:e,clsPrefix:n})=>S("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},S("div",{class:`${n}-popover-arrow`,style:e})),mt=je({name:"PopoverBody",inheritAttrs:!1,props:qe,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=mn(e),i=ye("Popover","-popover",wt,pt,e,a),s=L(null),l=yn("NPopover"),u=L(null),f=L(e.show),p=L(!1);Sn(()=>{const{show:h}=e;h&&!Un()&&!e.internalDeactivateImmediately&&(p.value=!0)});const v=J(()=>{const{trigger:h,onClickoutside:$}=e,O=[],{positionManuallyRef:{value:g}}=l;return g||(h==="click"&&!$&&O.push([xe,M,void 0,{capture:!0}]),h==="hover"&&O.push([jn,z])),$&&O.push([xe,M,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&O.push([Cn,e.show]),O}),m=J(()=>{const h=e.width==="trigger"?void 0:le(e.width),$=[];h&&$.push({width:h});const{maxWidth:O,minWidth:g}=e;return O&&$.push({maxWidth:le(O)}),g&&$.push({maxWidth:le(g)}),o||$.push(y.value),$}),y=J(()=>{const{common:{cubicBezierEaseInOut:h,cubicBezierEaseIn:$,cubicBezierEaseOut:O},self:{space:g,spaceArrow:k,padding:j,fontSize:I,textColor:d,dividerColor:w,color:T,boxShadow:N,borderRadius:H,arrowHeight:E,arrowOffset:Qe,arrowOffsetVertical:Ze}}=i.value;return{"--n-box-shadow":N,"--n-bezier":h,"--n-bezier-ease-in":$,"--n-bezier-ease-out":O,"--n-font-size":I,"--n-text-color":d,"--n-color":T,"--n-divider-color":w,"--n-border-radius":H,"--n-arrow-height":E,"--n-arrow-offset":Qe,"--n-arrow-offset-vertical":Ze,"--n-padding":j,"--n-space":g,"--n-space-arrow":k}}),c=o?$n("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:x}),An(()=>{l.setBodyInstance(null)}),_n(q(e,"show"),h=>{e.animated||(h?f.value=!0:f.value=!1)});function x(){var h;(h=s.value)===null||h===void 0||h.syncPosition()}function A(h){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(h)}function _(h){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(h)}function z(h){e.trigger==="hover"&&!C().contains(Pe(h))&&l.handleMouseMoveOutside(h)}function M(h){(e.trigger==="click"&&!C().contains(Pe(h))||e.onClickoutside)&&l.handleClickOutside(h)}function C(){return l.getTriggerElement()}Q(On,u),Q(Tn,null),Q(xn,null);function U(){if(c==null||c.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let $;const O=l.internalRenderBodyRef.value,{value:g}=a;if(O)$=O([`${g}-popover-shared`,c==null?void 0:c.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],u,m.value,A,_);else{const{value:k}=l.extraClassRef,{internalTrapFocus:j}=e,I=!Ce(n.header)||!Ce(n.footer),d=()=>{var w;const T=I?S(Rn,null,de(n.header,E=>E?S("div",{class:`${g}-popover__header`,style:e.headerStyle},E):null),de(n.default,E=>E?S("div",{class:`${g}-popover__content`,style:e.contentStyle},n):null),de(n.footer,E=>E?S("div",{class:`${g}-popover__footer`,style:e.footerStyle},E):null)):e.scrollable?(w=n.default)===null||w===void 0?void 0:w.call(n):S("div",{class:`${g}-popover__content`,style:e.contentStyle},n),N=e.scrollable?S(Bn,{contentClass:I?void 0:`${g}-popover__content`,contentStyle:I?void 0:e.contentStyle},{default:()=>T}):T,H=e.showArrow?bt({arrowStyle:e.arrowStyle,clsPrefix:g}):null;return[N,H]};$=S("div",En({class:[`${g}-popover`,`${g}-popover-shared`,c==null?void 0:c.themeClass.value,k.map(w=>`${g}-${w}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:I,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:l.handleKeydown,onMouseenter:A,onMouseleave:_},r),j?S(Mn,{active:e.show,autoFocus:!0},{default:d}):d())}return Je($,v.value)}return{displayed:p,namespace:t,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:ee(e),followerEnabled:f,renderContentNode:U}},render(){return S(Kn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ee.tdkey},{default:()=>this.animated?S(Pn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),yt=Object.keys(qe),St={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function $t(e,n,r){St[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=r[t];a?e.props[t]=(...i)=>{a(...i),o(...i)}:e.props[t]=o})}const At=Hn("").type,_t={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ee.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Ot=Object.assign(Object.assign(Object.assign({},ye.props),_t),{internalOnAfterLeave:Function,internalRenderBody:Function}),Pt=je({name:"Popover",inheritAttrs:!1,props:Ot,__popover__:!0,setup(e){const n=In(),r=L(null),t=J(()=>e.show),a=L(e.defaultShow),o=Dn(t,a),i=Me(()=>e.disabled?!1:o.value),s=()=>{if(e.disabled)return!0;const{getDisabled:d}=e;return!!(d!=null&&d())},l=()=>s()?!1:o.value,u=Ln(e,["arrow","showArrow"]),f=J(()=>e.overlap?!1:u.value);let p=null;const v=L(null),m=L(null),y=Me(()=>e.x!==void 0&&e.y!==void 0);function c(d){const{"onUpdate:show":w,onUpdateShow:T,onShow:N,onHide:H}=e;a.value=d,w&&X(w,d),T&&X(T,d),d&&N&&X(N,!0),d&&H&&X(H,!1)}function x(){p&&p.syncPosition()}function A(){const{value:d}=v;d&&(window.clearTimeout(d),v.value=null)}function _(){const{value:d}=m;d&&(window.clearTimeout(d),m.value=null)}function z(){const d=s();if(e.trigger==="focus"&&!d){if(l())return;c(!0)}}function M(){const d=s();if(e.trigger==="focus"&&!d){if(!l())return;c(!1)}}function C(){const d=s();if(e.trigger==="hover"&&!d){if(_(),v.value!==null||l())return;const w=()=>{c(!0),v.value=null},{delay:T}=e;T===0?w():v.value=window.setTimeout(w,T)}}function U(){const d=s();if(e.trigger==="hover"&&!d){if(A(),m.value!==null||!l())return;const w=()=>{c(!1),m.value=null},{duration:T}=e;T===0?w():m.value=window.setTimeout(w,T)}}function h(){U()}function $(d){var w;!l()||(e.trigger==="click"&&(A(),_(),c(!1)),(w=e.onClickoutside)===null||w===void 0||w.call(e,d))}function O(){if(e.trigger==="click"&&!s()){A(),_();const d=!l();c(d)}}function g(d){!e.internalTrapFocus||d.key==="Escape"&&(A(),_(),c(!1))}function k(d){a.value=d}function j(){var d;return(d=r.value)===null||d===void 0?void 0:d.targetRef}function I(d){p=d}return Q("NPopover",{getTriggerElement:j,handleKeydown:g,handleMouseEnter:C,handleMouseLeave:U,handleClickOutside:$,handleMouseMoveOutside:h,setBodyInstance:I,positionManuallyRef:y,isMountedRef:n,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),{binderInstRef:r,positionManually:y,mergedShowConsideringDisabledProp:i,uncontrolledShow:a,mergedShowArrow:f,getMergedShow:l,setShow:k,handleClick:O,handleMouseEnter:C,handleMouseLeave:U,handleFocus:z,handleBlur:M,syncPosition:x}},render(){var e;const{positionManually:n,$slots:r}=this;let t,a=!1;if(!n&&(r.activator?t=Ee(r,"activator"):t=Ee(r,"trigger"),t)){t=Fn(t),t=t.type===At?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:i}=this,s=[o,...i],l={onBlur:u=>{s.forEach(f=>{f.onBlur(u)})},onFocus:u=>{s.forEach(f=>{f.onFocus(u)})},onClick:u=>{s.forEach(f=>{f.onClick(u)})},onMouseenter:u=>{s.forEach(f=>{f.onMouseenter(u)})},onMouseleave:u=>{s.forEach(f=>{f.onMouseleave(u)})}};$t(t,i?"nested":n?"manual":this.trigger,l)}}return S(Gn,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Je(S("div",{style:{position:"fixed",inset:0}}),[[zn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:S(Wn,null,{default:()=>t}),S(mt,Nn(this.$props,yt,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var i,s;return(s=(i=this.$slots).default)===null||s===void 0?void 0:s.call(i)},header:()=>{var i,s;return(s=(i=this.$slots).header)===null||s===void 0?void 0:s.call(i)},footer:()=>{var i,s;return(s=(i=this.$slots).footer)===null||s===void 0?void 0:s.call(i)}})]}})}});export{Pt as _,_t as a,pt as p,bt as r};
