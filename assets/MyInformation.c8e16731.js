import{i as V,j as m,k as R,u as S,l as b,m as x,n as w,bE as D,q as _,t as F,ao as P,c7 as j,aF as E,c9 as H,o as i,c as y,a as d,w as s,F as I,d as v,aJ as K,aK as M,x as U,aG as f,cb as g,aH as u,g as c,a1 as q}from"./index.18e137ba.js";const A=V("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[m("strong",`
 font-weight: var(--n-font-weight-strong);
 `),m("italic",{fontStyle:"italic"}),m("underline",{textDecoration:"underline"}),m("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),G=Object.assign(Object.assign({},b.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),J=R({name:"Text",props:G,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:a}=S(n),t=b("Typography","-text",A,F,n,e),r=x(()=>{const{depth:h,type:l}=n,p=l==="default"?h===void 0?"textColor":`textColor${h}Depth`:P("textColor",l),{common:{fontWeightStrong:C,fontFamilyMono:B,cubicBezierEaseInOut:k},self:{codeTextColor:N,codeBorderRadius:$,codeColor:z,codeBorder:O,[p]:T}}=t.value;return{"--n-bezier":k,"--n-text-color":T,"--n-font-weight-strong":C,"--n-font-famliy-mono":B,"--n-code-border-radius":$,"--n-code-text-color":N,"--n-code-color":z,"--n-code-border":O}}),o=a?w("text",x(()=>`${n.type[0]}${n.depth||""}`),r,n):void 0;return{mergedClsPrefix:e,compitableTag:D(n,["as","tag"]),cssVars:a?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n,e,a;const{mergedClsPrefix:t}=this;(n=this.onRender)===null||n===void 0||n.call(this);const r=[`${t}-text`,this.themeClass,{[`${t}-text--code`]:this.code,[`${t}-text--delete`]:this.delete,[`${t}-text--strong`]:this.strong,[`${t}-text--italic`]:this.italic,[`${t}-text--underline`]:this.underline}],o=(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e);return this.code?_("code",{class:r,style:this.cssVars},this.delete?_("del",null,o):o):this.delete?_("del",{class:r,style:this.cssVars},o):_(this.compitableTag||"span",{class:r,style:this.cssVars},o)}}),L=v("h1",null,"\u6211\u7684\u5E33\u6236",-1),W=c("\u7528\u6236\u9084\u6C92\u4E0A\u50B3\u5927\u982D\u8CBC"),Q=c("\u4E0A\u50B3\u5927\u982D\u8CBC"),X=c("\u60A8\u5C1A\u672A\u5EFA\u7ACB\u4EFB\u4F55\u8A02\u55AE"),Y={key:1},ee={__name:"MyInformation",setup(n){j();const e=E({account:"",userName:"",email:"",avatar:"",pastOrders:""});return(async()=>{try{const{data:t}=await K.get("/users/getuser");e.account=t.result.account,e.userName=t.result.userName,e.email=t.result.email,e.phone=t.result.phone,e.avatar=t.result.avatar,e.pastOrders=t.result.pastOrders,console.log(e)}catch(t){console.log(t),M.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(t,r)=>{const o=J,h=q,l=H,p=U;return i(),y(I,null,[L,d(p,{title:"\u500B\u4EBA\u8CC7\u6599","header-style":"padding: 50px;","content-style":"padding: 50px;","footer-style":"padding: 50px;",size:"large",segmented:{content:!0,footer:"soft"},hoverable:""},{"header-extra":s(()=>[v("div",null,[e.avatar?g("",!0):(i(),f(o,{key:0,depth:"3"},{default:s(()=>[W]),_:1})),e.avatar?g("",!0):(i(),f(h,{key:1,secondary:"",round:""},{default:s(()=>[Q]),_:1}))])]),footer:s(()=>[e.pastOrders.length===0?(i(),f(o,{key:0,depth:"3"},{default:s(()=>[X]),_:1})):g("",!0),e.pastOrders.length!==0?(i(),y("div",Y,u(e.pastOrders),1)):g("",!0)]),default:s(()=>[d(l,null,{default:s(()=>[c("\u7528\u6236\u540D\uFF1A"+u(e.userName),1)]),_:1}),d(l,null,{default:s(()=>[c("\u5E33\u865F\uFF1A"+u(e.account),1)]),_:1}),d(l,null,{default:s(()=>[c("email\uFF1A"+u(e.email),1)]),_:1}),d(l,null,{default:s(()=>[c("\u96FB\u8A71\uFF1A"+u(e.phone),1)]),_:1})]),_:1})],64)}}};export{ee as default};
