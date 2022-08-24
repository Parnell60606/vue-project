import{l as ee,M as $,N as oe,t as U,v as z,Q as te,x as V,y as A,ad as I,u as E,a6 as re,J as w,q as F,V as R,U as S,n as _,W as T,j as ne,z as M,$ as ae,ae as ie,A as D,a7 as H,B as de,bB as se,bC as le,i as P}from"./index.2f0593f2.js";const ue={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px"},ce=e=>{const{borderColor:n,primaryColor:o,baseColor:a,textColorDisabled:i,inputColorDisabled:h,textColor2:t,opacityDisabled:d,borderRadius:u,fontSizeSmall:g,fontSizeMedium:v,fontSizeLarge:m,heightSmall:c,heightMedium:x,heightLarge:p,lineHeight:C}=e;return Object.assign(Object.assign({},ue),{labelLineHeight:C,buttonHeightSmall:c,buttonHeightMedium:x,buttonHeightLarge:p,fontSizeSmall:g,fontSizeMedium:v,fontSizeLarge:m,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${o}`,boxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${$(o,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${o}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:a,colorDisabled:h,textColor:t,textColorDisabled:i,dotColorActive:o,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:o,buttonBorderColorHover:n,buttonColor:a,buttonColorActive:a,buttonTextColor:t,buttonTextColorActive:o,buttonTextColorHover:o,opacityDisabled:d,buttonBoxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${$(o,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:u})},be={name:"Radio",common:ee,self:ce},he=be,fe={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(re("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},j=oe("n-radio-group");function ge(e){const n=U(e,{mergedSize(r){const{size:s}=e;if(s!==void 0)return s;if(t){const{mergedSizeRef:{value:b}}=t;if(b!==void 0)return b}return r?r.mergedSize.value:"medium"},mergedDisabled(r){return!!(e.disabled||t!=null&&t.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:o,mergedDisabledRef:a}=n,i=z(null),h=z(null),t=te(j,null),d=z(e.defaultChecked),u=V(e,"checked"),g=A(u,d),v=I(()=>t?t.valueRef.value===e.value:g.value),m=I(()=>{const{name:r}=e;if(r!==void 0)return r;if(t)return t.nameRef.value}),c=z(!1);function x(){if(t){const{doUpdateValue:r}=t,{value:s}=e;w(r,s)}else{const{onUpdateChecked:r,"onUpdate:checked":s}=e,{nTriggerFormInput:b,nTriggerFormChange:l}=n;r&&w(r,!0),s&&w(s,!0),b(),l(),d.value=!0}}function p(){a.value||v.value||x()}function C(){p()}function k(){c.value=!1}function y(){c.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:E(e).mergedClsPrefixRef,inputRef:i,labelRef:h,mergedName:m,mergedDisabled:a,uncontrolledChecked:d,renderSafeChecked:v,focus:c,mergedSize:o,handleRadioInputChange:C,handleRadioInputBlur:k,handleRadioInputFocus:y}}ge.props=fe;const ve=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[R("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[S("checked",{backgroundColor:"var(--n-button-border-color-active)"}),S("disabled",{opacity:"var(--n-opacity-disabled)"})]),S("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),R("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),R("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),_("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[R("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),_("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[R("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),T("disabled",`
 cursor: pointer;
 `,[_("&:hover",[R("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),T("checked",{color:"var(--n-button-text-color-hover)"})]),S("focus",[_("&:not(:active)",[R("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),S("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function pe(e,n,o){var a;const i=[];let h=!1;for(let t=0;t<e.length;++t){const d=e[t],u=(a=d.type)===null||a===void 0?void 0:a.name;u==="RadioButton"&&(h=!0);const g=d.props;if(u!=="RadioButton"){i.push(d);continue}if(t===0)i.push(d);else{const v=i[i.length-1].props,m=n===v.value,c=v.disabled,x=n===g.value,p=g.disabled,C=(m?2:0)+(c?0:1),k=(x?2:0)+(p?0:1),y={[`${o}-radio-group__splitor--disabled`]:c,[`${o}-radio-group__splitor--checked`]:m},r={[`${o}-radio-group__splitor--disabled`]:p,[`${o}-radio-group__splitor--checked`]:x},s=C<k?r:y;i.push(P("div",{class:[`${o}-radio-group__splitor`,s]}),d)}}return{children:i,isButtonGroup:h}}const me=Object.assign(Object.assign({},M.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ce=ne({name:"RadioGroup",props:me,setup(e){const n=z(null),{mergedSizeRef:o,mergedDisabledRef:a,nTriggerFormChange:i,nTriggerFormInput:h,nTriggerFormBlur:t,nTriggerFormFocus:d}=U(e),{mergedClsPrefixRef:u,inlineThemeDisabled:g,mergedRtlRef:v}=E(e),m=M("Radio","-radio-group",ve,he,e,u),c=z(e.defaultValue),x=V(e,"value"),p=A(x,c);function C(l){const{onUpdateValue:f,"onUpdate:value":B}=e;f&&w(f,l),B&&w(B,l),c.value=l,i(),h()}function k(l){const{value:f}=n;!f||f.contains(l.relatedTarget)||d()}function y(l){const{value:f}=n;!f||f.contains(l.relatedTarget)||t()}ae(j,{mergedClsPrefixRef:u,nameRef:V(e,"name"),valueRef:p,disabledRef:a,mergedSizeRef:o,doUpdateValue:C});const r=ie("Radio",v,u),s=D(()=>{const{value:l}=o,{common:{cubicBezierEaseInOut:f},self:{buttonBorderColor:B,buttonBorderColorActive:L,buttonBorderRadius:G,buttonBoxShadow:N,buttonBoxShadowFocus:O,buttonBoxShadowHover:K,buttonColorActive:q,buttonTextColor:J,buttonTextColorActive:Q,buttonTextColorHover:W,opacityDisabled:X,[H("buttonHeight",l)]:Y,[H("fontSize",l)]:Z}}=m.value;return{"--n-font-size":Z,"--n-bezier":f,"--n-button-border-color":B,"--n-button-border-color-active":L,"--n-button-border-radius":G,"--n-button-box-shadow":N,"--n-button-box-shadow-focus":O,"--n-button-box-shadow-hover":K,"--n-button-color-active":q,"--n-button-text-color":J,"--n-button-text-color-hover":W,"--n-button-text-color-active":Q,"--n-height":Y,"--n-opacity-disabled":X}}),b=g?de("radio-group",D(()=>o.value[0]),s,e):void 0;return{selfElRef:n,rtlEnabled:r,mergedClsPrefix:u,mergedValue:p,handleFocusout:y,handleFocusin:k,cssVars:g?void 0:s,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{mergedValue:n,mergedClsPrefix:o,handleFocusin:a,handleFocusout:i}=this,{children:h,isButtonGroup:t}=pe(se(le(this)),n,o);return(e=this.onRender)===null||e===void 0||e.call(this),P("div",{onFocusin:a,onFocusout:i,ref:"selfElRef",class:[`${o}-radio-group`,this.rtlEnabled&&`${o}-radio-group--rtl`,this.themeClass,t&&`${o}-radio-group--button-group`],style:this.cssVars},h)}});export{Ce as _,he as r,ge as s};
