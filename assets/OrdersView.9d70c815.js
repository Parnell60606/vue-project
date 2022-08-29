import{R as D,bV as a,g as o,h as f,i as h,aO as I,bW as K,bX as X,j as Z,u as q,k as M,bt as A,l as P,m as G,n as J,Z as x,a2 as S,o as _,c as z,a as Q,w as U,F as k,d as e,a8 as Y,c9 as oo,a4 as ro}from"./index.a36aaae0.js";const eo={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},to=t=>{const{dividerColor:r,cardColor:l,modalColor:s,popoverColor:n,tableHeaderColor:c,tableColorStriped:i,textColor1:d,textColor2:b,borderRadius:g,fontWeightStrong:u,lineHeight:p,fontSizeSmall:m,fontSizeMedium:v,fontSizeLarge:C}=t;return Object.assign(Object.assign({},eo),{fontSizeSmall:m,fontSizeMedium:v,fontSizeLarge:C,lineHeight:p,borderRadius:g,borderColor:a(l,r),borderColorModal:a(s,r),borderColorPopover:a(n,r),tdColor:l,tdColorModal:s,tdColorPopover:n,tdColorStriped:a(l,i),tdColorStripedModal:a(s,i),tdColorStripedPopover:a(n,i),thColor:a(l,c),thColorModal:a(s,c),thColorPopover:a(n,c),thTextColor:d,tdTextColor:b,thFontWeight:u})},lo={name:"Table",common:D,self:to},no=lo,ao=o([f("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),h("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),h("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),h("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),h("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),I("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),K(f("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),X(f("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),io=Object.assign(Object.assign({},M.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),so=Z({name:"Table",props:io,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedRtlRef:s}=q(t),n=M("Table","-table",ao,no,t,r),c=A("Table",s,r),i=P(()=>{const{size:b}=t,{self:{borderColor:g,tdColor:u,tdColorModal:p,tdColorPopover:m,thColor:v,thColorModal:C,thColorPopover:y,thTextColor:R,tdTextColor:B,borderRadius:w,thFontWeight:T,lineHeight:L,borderColorModal:$,borderColorPopover:V,tdColorStriped:O,tdColorStripedModal:j,tdColorStripedPopover:E,[x("fontSize",b)]:F,[x("tdPadding",b)]:H,[x("thPadding",b)]:W},common:{cubicBezierEaseInOut:N}}=n.value;return{"--n-bezier":N,"--n-td-color":u,"--n-td-color-modal":p,"--n-td-color-popover":m,"--n-td-text-color":B,"--n-border-color":g,"--n-border-color-modal":$,"--n-border-color-popover":V,"--n-border-radius":w,"--n-font-size":F,"--n-th-color":v,"--n-th-color-modal":C,"--n-th-color-popover":y,"--n-th-font-weight":T,"--n-th-text-color":R,"--n-line-height":L,"--n-td-padding":H,"--n-th-padding":W,"--n-td-color-striped":O,"--n-td-color-striped-modal":j,"--n-td-color-striped-popover":E}}),d=l?G("table",P(()=>t.size[0]),i,t):void 0;return{rtlEnabled:c,mergedClsPrefix:r,cssVars:l?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var t;const{mergedClsPrefix:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),J("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),co=e("h1",null,"\u5168\u90E8\u8A02\u55AE",-1),bo=e("thead",null,[e("tr",null,[e("th",null,"\u8A02\u4F4D\u78BA\u8A8D"),e("th",null,"\u5BA2\u6236\u540D\u7A31"),e("th",null,"\u8A02\u4F4D\u65E5\u671F"),e("th",null,"\u8A02\u4F4D\u6642\u9593"),e("th",null,"\u8A02\u4F4D\u4EBA\u6578"),e("th",null,"\u5099\u8A3B")])],-1),ho=e("td",null,"44",-1),go=e("td",null,"444",-1),uo=e("td",null,"...",-1),po=e("td",null,"4444",-1),mo=e("td",null,"...",-1),Co={__name:"OrdersView",setup(t){const r=S([]),l=S({_id:"",orderStatus:""});return(async()=>{try{console.log(data.result[0]),l._id=data.result[1]._id,l.orderStatus=data.result.orderStatus}catch(n){console.log(n),Y.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(n,c)=>{const i=so;return _(),z(k,null,[co,Q(i,{striped:""},{default:U(()=>[bo,e("tbody",null,[(_(!0),z(k,null,oo(r,d=>(_(),z("tr",{key:d._id},[e("td",null,ro(d._id),1),ho,go,uo,po,mo]))),128))])]),_:1})],64)}}};export{Co as default};
