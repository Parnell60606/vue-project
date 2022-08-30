import{R as f,i as y,j as l,h as d,l as m,k as v,u as b,m as a,n as C,bp as $,q as h,M as _,Y as z}from"./index.be881449.js";const D=e=>{const{textColorBase:o,opacity1:i,opacity2:s,opacity3:c,opacity4:n,opacity5:t}=e;return{color:o,opacity1Depth:i,opacity2Depth:s,opacity3Depth:c,opacity4Depth:n,opacity5Depth:t}},R={name:"Icon",common:f,self:D},x=R,S=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),I=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),j=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:I,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=b(e),s=m("Icon","-icon",S,x,e,o),c=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:r},self:p}=s.value;if(t!==void 0){const{color:u,[`opacity${t}Depth`]:g}=p;return{"--n-bezier":r,"--n-color":u,"--n-opacity":g}}return{"--n-bezier":r,"--n-color":"","--n-opacity":""}}),n=i?C("icon",a(()=>`${e.depth||"d"}`),c,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:t,color:r}=e;return{fontSize:z(t),color:r}}),cssVars:i?void 0:c,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:s,component:c,onRender:n,themeClass:t}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),h("i",_(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),c?h(c):this.$slots)}});export{j as N};
