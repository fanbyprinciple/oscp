"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[75729],{75729:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(35784),l=r.n(a),i=r(15891),s=r.n(i),c=r(48621),n=r.n(c),d=r(21463),o=r.n(d),f=r(2784),u=r(57903),h=r(72779),_=r.n(h),b=r(51591),g=r(48994),m=r(73607),S=r(76246),x=r(64765),A=r(97476),p=r(35220);const E={"carousel-wrapper":"_7acebb2bc28c",carouselWrapper:"_7acebb2bc28c","full-fit":"_f67463b9ef2a",fullFit:"_f67463b9ef2a","hide-gradient":"_1b85578a5b38",hideGradient:"_1b85578a5b38",list:"_3c3bc9096c39","left-side-gradient":"_a5de6dc66bd9",leftSideGradient:"_a5de6dc66bd9","right-side-gradient":"_f1dfa0f351a4",rightSideGradient:"_f1dfa0f351a4","both-sides-gradient":"_ad2331cac1da",bothSidesGradient:"_ad2331cac1da","left-arrow":"_12830788bc65",leftArrow:"_12830788bc65","right-arrow":"_57d9c24ae473",rightArrow:"_57d9c24ae473"};var w=r(51597),G=r(52322);const j=function({children:e,testSelector:t,component:r="ul",mode:a="normal",className:i,listClassName:c,label:d,hideGradient:h,isWithHiddenItems:j}){const v=(0,f.useRef)(null),L=(0,u.v9)(m.e),[N,C]=(0,f.useState)(null),[D,Z]=(0,f.useState)(null),[W,y]=(0,f.useState)(null),[H,O]=(0,f.useState)(!1),[B,F]=(0,f.useState)(!1),[I,k,z]=(0,g.Z)();(0,f.useEffect)((()=>{z({root:v.current,threshold:L?1:.95}),D&&N&&I([D,N])}),[v,L,D,N,I,z]),(0,f.useEffect)((()=>{var e,t;if(!v.current)return;Z(v.current.firstElementChild);const r=j?l()(e=s()(t=n()(v.current.children)).call(t)).call(e,(e=>e instanceof HTMLElement&&e.offsetWidth>0)):v.current.lastElementChild;C(r);const a=.75*(v.current.offsetWidth-104);y(a<100?100:a)}),[j,v,e]),(0,f.useLayoutEffect)((()=>{D&&N&&(null==k||o()(k).call(k,(e=>{e.target===D&&O(!e.isIntersecting),e.target===N&&F(!e.isIntersecting)})))}),[D,N,k]);const K=e=>{v.current&&!(0,w.xb)(W)&&v.current.scrollBy({top:0,left:e?-W:W,behavior:"smooth"})};return(0,G.jsxs)("section",{className:_()(E.carouselWrapper,E[a],i),"aria-label":d,children:[H&&(0,G.jsx)("div",{className:_()(E.leftArrow,{[E.fullFit]:"full-fit"===a}),children:(0,G.jsx)(S.Z,{color:"text-gray",size:"medium-round",onClick:()=>K(!0),testSelector:"carousel-arrow-left","aria-label":b.Z.get("previous"),children:(0,G.jsx)(x.default,{icon:A.A3,"aria-hidden":!0})})}),B&&(0,G.jsx)("div",{className:_()(E.rightArrow,{[E.fullFit]:"full-fit"===a}),children:(0,G.jsx)(S.Z,{color:"text-gray",size:"medium-round",onClick:()=>K(!1),testSelector:"carousel-arrow-right","aria-label":b.Z.get("next"),children:(0,G.jsx)(x.default,{icon:p._t,"aria-hidden":!0})})}),(0,G.jsx)(r,{ref:v,className:_()(E.list,{[E.leftSideGradient]:H&&!B,[E.rightSideGradient]:B&&!H,[E.bothSidesGradient]:H&&B,[E.hideGradient]:h},E[a],c),children:e})]})}}}]);