"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[91005],{7782:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var n=a(2784),s=a(72779),o=a.n(s),t=a(53120),l=a(32601),i=a(77517),c=a(52322);function m({type:e="text",id:r,placeholder:a="",formGroupClassName:s,hideErrors:m=!1,forceErrorFeedback:d=!1,hideWarnings:h=!1,maxLength:u=255,label:p,extraInfoMessage:_,inputClassName:f,...g}){const L=(0,n.useCallback)((({input:n,meta:{touched:t,error:p,warning:g,active:L},fieldLabel:x,...E})=>{const b=!m&&t&&p,A=!h&&t&&g&&!p&&!L;return(0,c.jsx)("div",{className:o()("form-group",{"has-error":t&&p,"has-warning":A},s),children:(0,c.jsx)(l.Z,{type:e,placeholder:a,label:x,extraInfoMessage:_,id:r||`input-${n.name}`,showError:b,error:p,showWarning:A,warning:g,maxLength:u,inputClassName:o()(f,{[i.Z.hasError]:d&&t&&p}),...n,...E,name:n.name})})}),[_,s,m,h,r,u,a,e,f]);return(0,c.jsx)(t.Z,{component:L,fieldLabel:p,...g})}const d=(0,n.memo)(m)}}]);