import{y as j,z,q as S,A as N,B as H,C as J,m as L,D as U,E as b,t as E,G as W,H as Y,u as Z,I as B,J as K,K as ee,L as I,M as te,O,V as se,P as ne,Q as re,R as P}from"./index.3f8bda9d.js";let M=[];const T=new WeakMap;function ie(){M.forEach(e=>e(...T.get(e))),M=[]}function oe(e,...t){T.set(e,t),!M.includes(e)&&M.push(e)===1&&requestAnimationFrame(ie)}function ae(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,s]=r.split(":");s===void 0?t[""]=n:t[n]=s}),t}function C(e,t){var r;if(e==null)return;const n=ae(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const i=t[s];if(i in n)return n[i]}return n[""]}else{let s,i=-1;return Object.keys(n).forEach(o=>{const a=Number(o);!Number.isNaN(a)&&t>=a&&a>=i&&(i=a,s=n[o])}),s}}function le(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===j);return!!(r&&r.value===!1)}const fe={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ue(e){return`(min-width: ${e}px)`}const G={};function de(e=fe){if(!z)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=N({}),r=Object.keys(e),n=(s,i)=>{s.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(s=>{const i=e[s];let o,a;G[i]===void 0?(o=window.matchMedia(ue(i)),o.addEventListener?o.addEventListener("change",d=>{a.forEach(f=>{f(d,s)})}):o.addListener&&o.addListener(d=>{a.forEach(f=>{f(d,s)})}),a=new Set,G[i]={mql:o,cbs:a}):(o=G[i].mql,a=G[i].cbs),a.add(n),o.matches&&a.forEach(d=>{d(o,s)})}),H(()=>{r.forEach(s=>{const{cbs:i}=G[e[s]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:s}=t;return r.filter(i=>s[i])})}const V=1,q=J("n-grid"),Q=1,X={span:{type:[Number,String],default:Q},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},he=W(X),me=L({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:X,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:s}=U(q),i=Y();return{overflow:n,itemStyle:r,layoutShiftDisabled:s,mergedXGap:S(()=>b(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:o=Q,privateShow:a=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:_}=t,g=b(_||0);return{display:a?"":"none",gridColumn:`${d!=null?d:`span ${o}`} / span ${o}`,marginLeft:f?`calc((100% - (${o} - 1) * ${g}) / ${o} * ${f} + ${g} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),pe={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},F=24,D="__ssr__",ce={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:F},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Se=L({name:"Grid",inheritAttrs:!1,props:ce,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=Z(e),n=/^\d+$/,s=N(void 0),i=de((r==null?void 0:r.value)||pe),o=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),a=S(()=>{if(!!o.value)return e.responsive==="self"?s.value:i.value}),d=B(()=>{var u;return(u=Number(C(e.cols.toString(),a.value)))!==null&&u!==void 0?u:F}),f=B(()=>C(e.xGap.toString(),a.value)),_=B(()=>C(e.yGap.toString(),a.value)),g=u=>{s.value=u.contentRect.width},v=u=>{oe(g,u)},x=N(!1),y=S(()=>{if(e.responsive==="self")return v}),p=N(!1),h=N();return K(()=>{const{value:u}=h;u&&u.hasAttribute(D)&&(u.removeAttribute(D),p.value=!0)}),ee(q,{layoutShiftDisabledRef:I(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:I(e,"itemStyle"),xGapRef:f,overflowRef:x}),{isSsr:!te,contentEl:h,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:b(e.xGap),rowGap:b(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:b(f.value),rowGap:b(_.value)}),isResponsive:o,responsiveQuery:a,responsiveCols:d,handleResize:y,overflow:x}},render(){if(this.layoutShiftDisabled)return E("div",O({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,s,i,o,a;this.overflow=!1;const d=ne(re(this)),f=[],{collapsed:_,collapsedRows:g,responsiveCols:v,responsiveQuery:x}=this;d.forEach(l=>{var $,m,c,R;if((($=l==null?void 0:l.type)===null||$===void 0?void 0:$.__GRID_ITEM__)!==!0)return;if(le(l)){const w=P(l);w.props?w.props.privateShow=!1:w.props={privateShow:!1},f.push({child:w,rawChildSpan:0});return}l.dirs=((m=l.dirs)===null||m===void 0?void 0:m.filter(({dir:w})=>w!==j))||null;const k=P(l),A=Number((R=C((c=k.props)===null||c===void 0?void 0:c.span,x))!==null&&R!==void 0?R:V);A!==0&&f.push({child:k,rawChildSpan:A})});let y=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p!=null&&p.props){const l=(r=p.props)===null||r===void 0?void 0:r.suffix;l!==void 0&&l!==!1&&(y=(s=(n=p.props)===null||n===void 0?void 0:n.span)!==null&&s!==void 0?s:V,p.props.privateSpan=y,p.props.privateColStart=v+1-y,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let h=0,u=!1;for(const{child:l,rawChildSpan:$}of f){if(u&&(this.overflow=!0),!u){const m=Number((a=C((o=l.props)===null||o===void 0?void 0:o.offset,x))!==null&&a!==void 0?a:0),c=Math.min($+m,v);if(l.props?(l.props.privateSpan=c,l.props.privateOffset=m):l.props={privateSpan:c,privateOffset:m},_){const R=h%v;c+R>v&&(h+=v-R),c+h+y>g*v?u=!0:h+=c}}u&&(l.props?l.props.privateShow!==!0&&(l.props.privateShow=!1):l.props={privateShow:!1})}return E("div",O({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[D]:this.isSsr||void 0},this.$attrs),f.map(({child:l})=>l))};return this.isResponsive&&this.responsive==="self"?E(se,{onResize:this.handleResize},{default:e}):e()}});export{Se as _,me as a,X as b,oe as c,he as g};
