"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[52696,46958],{85875:(e,r,n)=>{n.d(r,{Z:()=>I});var t=n(9230),s=n.n(t),o=n(25431),i=n.n(o),c=n(63305),a=n.n(c),l=n(22583),u=n.n(l),d=n(10934),h=n.n(d),m=n(14903),v=n.n(m),f=n(2784),g=n(72779),p=n.n(g),b=n(45595),y=n(78224),w=n(11881),P=n(11793),C=n(84429),R=n(27024),Z=n(28441),k=n(2841),x=n(64663),A=n(80911),B=n(32590),S=n(74537),D=n(54705),$=n(31674),_=n(52322);const j=(0,b.ZP)({resolved:{},chunkName:()=>"partials-Toolbar-ViewerToolbar",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(80801),n.e(81080),n.e(6056),n.e(92947),n.e(85243),n.e(57920),n.e(42642),n.e(8522)]).then(n.bind(n,57982)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>57982}),M=(0,b.ZP)({resolved:{},chunkName:()=>"partials-Details-ViewerDetails",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(63301),n.e(78122),n.e(83082),n.e(89341),n.e(53160)]).then(n.bind(n,82058)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>82058}),N=(0,b.ZP)({resolved:{},chunkName:()=>"partials-DocumentPage-DocumentPage",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(7257),n.e(95441)]).then(n.bind(n,9773)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>9773}),L=(0,b.ZP)({resolved:{},chunkName:()=>"ViewerLiquid",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(85402),n.e(1892)]).then(n.bind(n,71837)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>71837}),T=(0,b.ZP)({resolved:{},chunkName:()=>"partials-ViewerLoader-ViewerLoader",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>n.e(24497).then(n.bind(n,78669)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>78669}),q=(0,b.ZP)({resolved:{},chunkName:()=>"partials-ViewerTopBar-ViewerTopBar",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(86577),n.e(73990),n.e(80801),n.e(6056),n.e(59578),n.e(98085),n.e(92160),n.e(13005),n.e(61074),n.e(1848),n.e(26425),n.e(42642),n.e(73581)]).then(n.bind(n,9077)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>9077});const I=e=>{const{viewerDocument:r,isApp:n,isLiquidModeOn:t,isSidebarOpen:o,onCurrentPageChange:c,onShareClick:l,onShowReportDocumentModal:d,pages:m,previewTextElement:g,relatedDocumentsElement:b,renderPremiumBanner:I,structure:E,showAdSenseAd:H,navigationStartTime:W}=e,[O,F]=(0,f.useState)(!1),[V,Y]=(0,f.useState)("undefined"!=typeof window&&window.documentViewerInitialZoom||1),[K,z]=(0,f.useState)(1),[U,X]=(0,f.useState)(!0),Q=(0,f.useRef)(null),G=(0,f.useRef)(null),J=(0,f.useRef)(null),ee=(0,f.useRef)(null),re=(0,f.useRef)([]),ne=(0,f.useRef)(null),te=(0,f.useRef)(null),se=(0,f.useRef)(null),oe=(0,f.useRef)(!1),ie=(0,f.useRef)(0),ce=(0,f.useRef)(0),ae=(0,f.useRef)(!1),le=(0,f.useRef)(!1),[ue,de]=(0,f.useState)(s()()),he=(0,$.Z)(),me=(0,f.useCallback)((e=>re.current[e-1]),[]),ve=(0,f.useCallback)(((e,r)=>re.current[r]=e),[]),fe=(0,f.useRef)(1),ge=(0,f.useRef)(P.m6);(0,f.useEffect)((()=>(fe.current=i()(m).call(m,((e,r)=>{const n=me(r.pageNumber);return r.html&&n?Math.max(e,n.offsetWidth):e}),1),void(ge.current=1===fe.current?P.m6:P.er/fe.current))),[m]);const pe=(0,f.useRef)(null);(0,f.useEffect)((()=>{pe.current=he?ne.current:te.current}),[he]);const be=(0,f.useCallback)((e=>function(e,r,n,t=!1){return!(!t||n)&&(e>P.uC||e%P.$Y==0||2===r&&2===e)}(e,m.length,n,r.preview)),[r.preview,n,m.length]),{getInlinePremiumBannerElementHeightBefore:ye,getRecommendationBannerElementHeightBefore:we,renderFloatPremiumBanner:Pe,renderInlinePremiumBannerBefore:Ce,renderBottomRecommendationsBanner:Re,renderInlineRecommendationsBannerAfter:Ze,recommendationsPosition:ke,scaleBanners:xe}=(0,B.ZP)(be,I),Ae=(0,f.useRef)([]),Be=(0,f.useRef)([]);(0,x.Z)((function(){Ae.current=[],Be.current=[]}),[me,ye,we,n,V,m.length,he]);const Se=(0,f.useCallback)((function e(r,t){if(t===V&&void 0!==Ae.current[r-1])return Ae.current[r-1];if(1===r){const e=n&&Q.current?Q.current.offsetHeight+P.Ng:0;return t===V&&(Ae.current[r-1]=e),e}const s=ye(r)+we(r),o=r-1,i=me(o),c=i?i.offsetHeight*t:0;let a=Ae.current[o-1];void 0!==a&&t===V||(a=e(o,t));const l=a+s+c+P.Ng;return t===V&&(Ae.current[r-1]=l),l}),[me,ye,we,n,V]),De=(0,f.useCallback)((e=>{if(!pe.current)return;if(1===e)return void(pe.current.scrollTop=0);let r=Se(e,V)-ye(e);var n;he&&se.current&&(r+=(null===(n=se.current)||void 0===n?void 0:n.getBoundingClientRect().height)-P.P4),pe.current.scrollTop=r}),[Se,ye,he,V]),$e=(0,f.useCallback)((e=>{var r;null===(r=pe.current)||void 0===r||r.scrollTo({top:Se(e+1,V),behavior:"smooth"})}),[V,Se]),_e=(0,f.useCallback)((e=>{if(!oe.current||!pe.current)return;const r=Math.max(Math.min(e,P.sZ),P.Zj),n=1/r,t=r/V,{scrollTop:o,scrollLeft:i,clientWidth:c,clientHeight:a}=pe.current,l=me(K);if(!l)return;const u=l.offsetWidth,d=l.offsetHeight,h=u*r,m=d*r,v=d*V;xe(c,fe.current,n);const f=Math.round(fe.current*r);if(ie.current=0,ce.current=0,f<c&&f>h)ce.current=Math.round((c-h)/2+(c-f)/2);else if(f>c&&h<c)ce.current=Math.round((f-h)/2-(c-h)/2);else if(f>c&&h>c){const e=(c-c*t)/2;ce.current=Math.round(i*t-e)}if(0!==o){const e=(a-a*t)/2,n=Se(K,r),s=o-Se(K,V);ie.current=n+s*t-e}else ie.current=(m-v)/2;Y(r),le.current&&de(s()())}),[me,Se,K,xe,V]),je=(0,f.useCallback)((()=>{const e=Math.ceil(100*V)/100,r=e-e%P.YK+P.YK;_e(r===V?V+P.YK:r)}),[V,_e]),Me=(0,f.useCallback)((()=>{const e=Math.floor(100*V)/100,r=e-e%P.YK;_e(r===V?V-P.YK:r)}),[V,_e]),Ne=(0,f.useCallback)((()=>{const e=me(K);if(!pe.current||!e)return;const{clientWidth:r}=pe.current,n=e.offsetWidth,t=r-P.iI;ae.current=!0,_e(t/n)}),[K,me,_e]),Le=(0,f.useCallback)((()=>{const e=me(K);if(!pe.current||!e)return;const r=e.offsetHeight+P.Ng,n=pe.current.clientHeight;ae.current=!0,_e(n/r)}),[K,me,_e]),Te=(0,f.useCallback)((()=>{const e=me(K);if(!e||!pe.current)return!1;const r=e.offsetWidth,n=pe.current.clientWidth-P.iI;return r*ge.current>n?_e(n/r):_e(ge.current),!0}),[K,me,_e]),qe=(0,f.useRef)(0),Ie=(0,f.useCallback)((()=>{ae.current=!0,le.current=!0,new(u())(((e,r)=>{a()((()=>{Te()?e():r()}))})).catch((e=>{if(qe.current<5)return qe.current+=1,new(u())((e=>{a()((()=>{e(Ie())}),P.uW)}));(0,R.S)(r),(0,R.C)(e,{id:r.id})}))}),[]),Ee=(0,f.useCallback)((()=>{return pe.current?he?pe.current.scrollTop-((null===(e=se.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0):pe.current.scrollTop:0;var e}),[he]),He=(0,f.useCallback)((e=>{var r;if(!pe.current)return{top:1,middle:1,bottom:1};const n=m.length,t=Ee();function s(e,r){const n=e-1;if(void 0!==Be.current[n])return Be.current[n];const t=re.current[n];if(!t)return Number.POSITIVE_INFINITY;const s=Se(e,r)+t.offsetHeight*r;return Be.current[n]=s,s}let o=e,i=s(null!==(r=o)&&void 0!==r?r:1,V);if(!o)for(o=1;o<n&&t>i;)o+=1,i=s(o,V);let c=o;const a=t+.5*pe.current.clientHeight;for(;c<n&&a>i;)c+=1,i=s(c,V);let l=c;const u=a+pe.current.clientHeight;for(;l<n&&u>i;)l+=1,i=s(l,V);return{top:o,middle:c,bottom:l}}),[Se,Ee,m.length,V]),We=(0,f.useCallback)(((e,r)=>{const n=me(e);return!!n&&!!(n.children[0]&&n.children[0]instanceof HTMLElement)&&(n.children[0].style.display=r?"block":"none",!0)}),[me]),{handlePageContentLoaded:Oe,isDocumentLoaded:Fe,loadAndDisplayPages:Ve}=(0,D.ZP)(e,oe,We,Ie,W,r.assets.validity),Ye=(0,f.useCallback)((()=>{var e;return window.innerHeight-((null===(e=se.current)||void 0===e?void 0:e.getBoundingClientRect().bottom)||0)}),[]),Ke=(0,f.useCallback)((e=>{const r=He();z(r.middle),oe.current?Ve(r):e.preventDefault()}),[He,Ve]),ze=(0,f.useCallback)((e=>{if(he&&(Ke(e),se.current)){const e=se.current.getBoundingClientRect().bottom-P.P4;F(e<=0);const r=Ye()>P.nS;X(!t&&oe.current&&r)}}),[Ye,t,he,Ke]),Ue=(0,f.useCallback)((e=>{X(!e)}),[]),Xe=(0,f.useCallback)((e=>{if(he)return;Ke(e);const{scrollTop:r}=e.currentTarget;F(r>0)}),[he,Ke]),Qe=(0,f.useCallback)((e=>{const r=h()(e,10);r>0&&r<=m.length&&(z(r),De(r))}),[De,z,m.length]);(0,A.Z)("resize",Te,(0,Z.C5)()?window:null),(0,S.ZP)(V,_e),(0,x.Z)((()=>{pe.current&&(pe.current.scrollTop=ie.current,pe.current.scrollLeft=ce.current,(()=>{const e=J.current,r=G.current;if(!(e&&pe.current&&ee.current&&r))return;let n;if(e.style.transform=`scale(${V})`,e.style.width=`${Math.max(100/V,fe.current/pe.current.offsetWidth*100)}%`,e.style.height=100/V+"%",1===m.length){const e=me(1);if(!e)return;n=e.offsetHeight*V}else n=ee.current.offsetHeight*V;r.style.height=`${Math.round(n)}px`,r.style.willChange="",a()((()=>{r.style.willChange="transform"}))})(),ae.current&&(De(K),ae.current=!1),Je.current&&(Ae.current=[],Be.current=[],Je.current=!1))}),[V,ue]),(0,x.Z)((()=>{null==c||c(K)}),[K]),(0,x.Z)((()=>{Fe&&"inline"===ke&&Te()}),[o]);const Ge=(0,f.useRef)(!1),Je=(0,f.useRef)(!1);return(0,x.Z)((()=>{Ge.current?a()((()=>{ae.current=!0,le.current=!0,Je.current=!0,Te()})):a()((()=>{Je.current=!0,Ge.current=!0,Ie()}),P.uW)}),[he]),(0,_.jsxs)("div",{id:"viewer-wrapper",className:p()(k.Z.viewerWrapper,{[k.Z.isApp]:n,[k.Z.isMobile]:he}),onScroll:ze,ref:ne,children:[H&&(0,_.jsx)(w.Z,{isShowTopBarScrolled:O}),!n&&d&&(0,_.jsx)(q,{isMobile:he,isShowTopBarScrolled:O,onShareClick:l,onShowReportDocumentModal:d,onToggleInfoBox:Ue,viewerDocument:r,topBarRef:se}),(0,_.jsxs)("article",{id:C.w0,className:k.Z.documentWrapper,style:{contentVisibility:t?"hidden":"visible"},onScroll:Xe,ref:te,tabIndex:0,children:[Pe(),(0,_.jsx)("div",{ref:Q,children:n&&(0,_.jsx)(M,{viewerDocument:r})}),(0,_.jsx)("div",{ref:G,className:k.Z.descaler,suppressHydrationWarning:!0,children:(0,_.jsx)("div",{className:"p2hv",id:P.jL,ref:J,suppressHydrationWarning:!0,children:(0,_.jsxs)("div",{id:P.fl,ref:ee,children:[!Fe&&(0,_.jsx)(T,{}),Fe&&v()(m).call(m,((e,r)=>{const n=r+1,t=be(n);return(0,_.jsxs)(f.Fragment,{children:[Ce(n,`banner_${r}`,V),(0,_.jsx)(N,{pageNumber:e.pageNumber,pageHtml:e.html,pageStructure:E[r],onPageContentLoaded:Oe,isBlurred:t,zoom:V,setPageRef:ve}),Ze(n,$e,V)]},`page-${n}`)}))]})})}),!n&&(0,_.jsxs)("div",{className:k.Z.bottomSection,children:[Re(),he&&(0,_.jsxs)(_.Fragment,{children:[b,g]}),(0,_.jsx)(y.default,{className:k.Z.viewerFooter})]})]}),t&&d&&(0,_.jsx)(L,{viewerDocument:r,onScroll:Xe,onShowReportDocumentModal:d}),U&&!n&&(0,_.jsx)(j,{currentPage:K,viewerDocumentId:r.id,numberOfPages:m.length,onPageChange:Qe,currentZoom:V,minZoomLevel:P.Zj,maxZoomLevel:P.sZ,isMobile:he,onZoomInClick:je,onZoomOutClick:Me,onFitWidthClick:Ne,onFitHeightClick:Le,containerElementRef:J})]})}},67305:(e,r,n)=>{n.d(r,{Z:()=>A});var t=n(2784),s=n(57903),o=n(45595),i=n(45868),c=n(30242),a=n(62824),l=n(7863),u=n(58608),d=n(73607),h=n(43870),m=n(25374),v=n(48209),f=n(18800),g=n(73554),p=n(92555),b=n(65764),y=n(24786),w=n(85875),P=n(63175),C=n(52828),R=n(52322);const Z=(0,o.ZP)({resolved:{},chunkName:()=>"PreviewBanner-PreviewBannerContainer",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>n.e(98635).then(n.bind(n,63309)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>63309}),k=(0,o.ZP)({resolved:{},chunkName:()=>"RelatedDocuments-RelatedDocuments",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(53150),n.e(24746)]).then(n.bind(n,55832)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>55832}),x=(0,o.ZP)({resolved:{},chunkName:()=>"DocumentPreviewText-DocumentPreviewText",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.resolve().then(n.bind(n,71127)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>71127});const A=function({viewerDocument:e,isSidebarOpen:r=!1,onShowReportDocumentModal:n,onCurrentPageChange:o,navigationStartTime:A}){const B=(0,s.v9)(u.cP),S=(0,s.v9)(m.Qk),D=(0,s.v9)(a.EM),$=(0,s.v9)(h.Ni),_=(0,s.v9)(h.os),j=(0,s.v9)(l.ex),M=(0,s.v9)(d.e),N=(0,s.v9)(v.A),{pages:L,structure:T,loadPage:q,numberOfPagesLoaded:I}=(0,i.Z)(),{hasPremiumBanner:E,hasInlinePremiumBanner:H}=(0,c.Z)(),W=(0,s.I0)(),O=(0,t.useCallback)(((e,r,n)=>W((0,g.Z)(r,e,"Viewer Bottom",n))),[W]),F=(0,t.useCallback)((()=>W((0,f.Z)())),[W]),V=(0,t.useCallback)((()=>{if(!B&&E){const{previewCTA:r}=e;return(0,R.jsx)(Z,{isInline:H,totalPages:e.pages,previewCTA:r,userLatestRecurringPayment:j})}}),[e,H,E,B,j]),Y=(0,t.useMemo)((()=>{if((null==$?void 0:$.length)>0||(null==_?void 0:_.length)>0)return(0,R.jsxs)(t.Fragment,{children:[$.length>0&&(0,R.jsx)(k,{className:y.Z.relatedDocuments,relatedDocuments:$,dataTestSelector:"tier1-end-of-doc-related-documents",onRelatedDocumentClicked:O,tier:1}),_.length>0&&(0,R.jsx)(k,{className:y.Z.relatedDocuments,relatedDocuments:_,dataTestSelector:"tier2-end-of-doc-related-documents",onRelatedDocumentClicked:O,tier:2})]})}),[O,$,_]),K=(0,t.useMemo)((()=>{if(!D)return(0,R.jsx)(x,{testSelector:"document-preview-text-bottom"})}),[D]),z=(0,t.useCallback)((()=>{navigator.share?W((0,b.Z)(e.id,"Top Bar")):W((0,p.Z)("Top Bar"))}),[W,e.id]);return(0,R.jsxs)(t.Fragment,{children:[(0,R.jsx)(w.Z,{pages:L,structure:T,loadPage:q,numberOfPagesLoaded:I,viewerDocument:e,isSidebarOpen:r,renderPremiumBanner:V,onLastPageView:F,isApp:B,isMobile:M,relatedDocumentsElement:Y,onShowReportDocumentModal:n,onCurrentPageChange:o,previewTextElement:K,onShareClick:z,isLiquidModeOn:S===C.Og,showAdSenseAd:N,navigationStartTime:A}),(0,R.jsx)("div",{children:I>0&&(0,R.jsx)(P.Z,{})})]})}},11793:(e,r,n)=>{n.d(r,{$Y:()=>u,Dp:()=>h,Ng:()=>d,P4:()=>b,YK:()=>o,Zj:()=>t,eW:()=>v,er:()=>c,fl:()=>f,h2:()=>m,iI:()=>a,jL:()=>g,m6:()=>i,nS:()=>p,sZ:()=>s,uC:()=>l,uW:()=>y});const t=.25,s=4,o=.25,i=1.25,c=1024,a=22,l=20,u=3,d=34,h=20,m="banner-wrapper",v=6,f="page-container",g="page-container-wrapper",p=200,b=50,y=300},32590:(e,r,n)=>{n.d(r,{ZP:()=>p});var t=n(21463),s=n.n(t),o=n(2921),i=n.n(o),c=n(2784),a=n(45595),l=n(11793),u=n(30242),d=n(52322);const h=(0,a.ZP)({resolved:{},chunkName:()=>"partials-Banners-FloatPremiumBanner-FloatPremiumBanner",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>n.e(89696).then(n.bind(n,58011)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>58011}),m=(0,a.ZP)({resolved:{},chunkName:()=>"partials-Banners-InlineBanner-InlineBanner",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>n.e(97853).then(n.bind(n,27488)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>27488}),v=(0,a.ZP)({resolved:{},chunkName:()=>"partials-Banners-RecommendationsBanner-RecommendationsBanner",isReady(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!n.m[r]},importAsync:()=>Promise.all([n.e(35220),n.e(97476),n.e(53150),n.e(21963),n.e(18360),n.e(56680),n.e(22452),n.e(78243),n.e(28612),n.e(78042),n.e(95462),n.e(45444),n.e(48994),n.e(78122),n.e(75729),n.e(83082),n.e(44530),n.e(77027),n.e(1893)]).then(n.bind(n,86278)),requireAsync(e){var r=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return r.resolved[n]=!0,e}))},requireSync(e){var r=this.resolve(e);return n(r)},resolve:()=>86278}),f="recommendation_banner";function g(e,r){var n;const t=null===(n=e[r])||void 0===n?void 0:n.children[0];return t instanceof HTMLElement?t:void 0}const p=(e,r)=>{const n=(0,c.useRef)({}),t=(0,c.useRef)(null),{hasFloatPremiumBanner:o,hasInlinePremiumBanner:a,recommendationsPosition:p}=(0,u.Z)(),b=(e,r)=>{e?n.current[r]=e:delete n.current[r],null===t.current&&e&&(t.current=r)},y=(0,c.useCallback)((r=>a&&e(r)),[a,e]),w=(0,c.useCallback)((e=>{if(null===t.current||!y(e))return 0;const r=g(n.current,t.current);return r?r.offsetHeight+l.Ng:0}),[y]),P=(0,c.useCallback)((e=>"inline"===p&&l.eW===e),[p]),C=(0,c.useCallback)((e=>{if(!P(e-1))return 0;const r=g(n.current,f);return r?r.offsetHeight+l.Ng:0}),[P]),R=(0,c.useCallback)(((e,r,t)=>{var o;const c=function(e,r){const n=.95*e;return n>r&&r>1?r:n}(e,r);s()(o=i()(n.current)).call(o,(r=>{const s=n.current[r],o=g(n.current,r);if(!s||!o)return;const i=function(e,r){return{transform:`scale(${e})`,width:`${Math.floor(r)}px`}}(t,r===f?e:c);o.style.transform=i.transform,o.style.width=i.width;const a=function(e,r){return{height:`${Math.floor(r*e)}px`}}(t,o.offsetHeight);s.style.height=a.height}))}),[]);return{getInlinePremiumBannerElementHeightBefore:w,getRecommendationBannerElementHeightBefore:C,renderFloatPremiumBanner:()=>o?(0,d.jsx)(h,{children:r()}):null,renderInlinePremiumBannerBefore:(e,n,t)=>y(e)?(0,d.jsx)(m,{bannerKey:n,setBannerWrapperRef:b,zoom:t,children:r()}):null,renderBottomRecommendationsBanner:()=>"bottom"!==p?null:(0,d.jsx)(v,{}),renderInlineRecommendationsBannerAfter:(e,r,n)=>P(e)?(0,d.jsx)(m,{align:"wide",bannerKey:f,zoom:n,setBannerWrapperRef:b,children:(0,d.jsx)(v,{handleScrollAfterPage:r,isInline:!0})}):null,recommendationsPosition:p,scaleBanners:R}}},31674:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(80911),s=n(2784),o=n(28441),i=n(57903),c=n(73607);function a(){const e=(0,i.v9)(c.e),[r,n]=(0,s.useState)(e);return(0,s.useEffect)((()=>{n(window.innerWidth<1200)}),[]),(0,t.Z)("resize",(()=>{n(window.innerWidth<1200)}),(0,o.C5)()?window:null),r}},54705:(e,r,n)=>{n.d(r,{ZP:()=>f,uc:()=>v});var t=n(9230),s=n.n(t),o=n(14903),i=n.n(o),c=n(21463),a=n.n(c),l=n(2784),u=n(80601),d=n(27024),h=n(12331),m=n(89644);const v=1,f=({pages:e,numberOfPagesLoaded:r,structure:n,loadPage:t,viewerDocument:o,onLastPageView:c},v,f,g,p,b)=>{const y=(0,l.useRef)(r),w=n.length>0&&y.current>0,P=(0,l.useRef)(r),C=(0,l.useRef)(i()(e).call(e,((e,n)=>({isLoaded:n<r,isShown:n<r})))),R=(0,l.useRef)(!1),Z=(0,l.useCallback)((()=>{P.current+=1,!v.current&&P.current>=Math.min(e.length,2)&&(v.current=!0,g())}),[e.length,g,v]),k=(0,l.useCallback)(((e,r=!1)=>{f(e,r)&&(C.current[e-1].isShown=r)}),[f]),x=(0,l.useCallback)((e=>k(e,!0)),[k]),A=(0,l.useCallback)((e=>k(e,!1)),[k]),B=(0,l.useCallback)((r=>{const n=r-1;C.current[n].isLoaded||(y.current+=1,C.current[n].isLoaded=!0,t(r,e[n].url).catch((e=>{if(e instanceof h.Z){if(function(e,r,n){var t;if(!(e.originalError instanceof m.AxiosError))return!1;const o=s()()-r,i=1e3*(n-60);return(403===(null===(t=e.originalError.response)||void 0===t?void 0:t.status)||"ERR_NETWORK"===e.originalError.code)&&o>i}(e,p,b))return void(R.current||(R.current=!0,window.location.reload()));A(r),y.current-=1,C.current[n].isLoaded=!1}(0,d.C)(e.originalError,{id:o.id})})))}),[b,A,t,p,e,o.id]),S=(0,l.useCallback)(((r,n=r)=>{const t=e.length,s=Math.max(r,1),o=Math.min(n,t);if(y.current<t)for(let e=s;e<=o;e+=1)B(e)}),[e.length,B]),D=(0,l.useRef)(!1),$=(0,l.useCallback)((r=>{const n=r.top,t=r.bottom,s=e.length;t!==s||D.current||(D.current=!0,c()),S(n,t),a()(e).call(e,((e,r)=>{const s=r+1,o=n<=s&&s<=t;C.current[r].isLoaded&&C.current[r].isShown!==o&&(o?x(s):A(s))}));const o=n-10;S(t+1,t+10),S(o,n-1)}),[A,S,c,e,x]);return(0,u.FI)((()=>{const r=e.length;S(1,Math.min(3,r)),x(1),r>3&&S(4,Math.min(10,r))})),{handlePageContentLoaded:Z,isDocumentLoaded:w,loadAndDisplayPages:$}}},74537:(e,r,n)=>{n.d(r,{ZP:()=>a});var t=n(87021),s=n.n(t),o=n(2784),i=n(28441),c=n(80911);const a=function(e,r){const n=(0,o.useRef)(0),t=(0,o.useRef)(!1),a=(0,o.useRef)(null),l=(0,o.useCallback)((({touches:e,shiftKey:r})=>{2===e.length&&(n.current=0,t.current=!0),1===e.length&&r&&(n.current=0,t.current=!0,a.current=e[0])}),[]),u=(0,o.useCallback)((()=>{t.current&&(t.current=!1,a.current=null)}),[]),d=(0,o.useCallback)((o=>{if(!t.current)return;o.preventDefault();const i=(c=a.current,l=o.touches[0],u=o.touches[1],c?.2*Math.floor((l.pageY-c.pageY)/2):u?s()(l.pageX-u.pageX,l.pageY-u.pageY):0);var c,l,u;const d=function(e,r,n){return 0===e||0===r||e*r<0?n:e<0?n*(r/e):n*(e/r)}(i,n.current,e);n.current=i,d!==e&&r(d)}),[e,r]),h=(0,i.C5)()?window:null;(0,c.Z)("touchstart",l,h),(0,c.Z)("touchmove",d,h,{throttle:3}),(0,c.Z)("touchend",u,h)}},30242:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(57903),s=n(43870),o=n(78096),i=n(25374),c=n(31674),a=n(11793);const l=()=>{const e=(0,t.v9)(o.x$),r=(0,c.Z)(),{pages:n}=e,l=(0,t.v9)(i.jA),u=(0,t.v9)(i.qC),d=r&&l,h=!r&&u,m=!(0,t.v9)(s.i$)||d||h?void 0:(e=>e>a.eW?"inline":"bottom")(n);return{hasPremiumBanner:d||h,hasInlinePremiumBanner:d,hasFloatPremiumBanner:h,recommendationsPosition:m}}},58419:(e,r,n)=>{n.d(r,{Z:()=>t});const t=function(e){return/(<a.+?)/gm.test(e)?function(e){return e.replace(/<a(.*?)\s+href=".*?"/gm,"<span$1").replace(/<\/a>/g,"</span>")}(e):e}},51991:(e,r,n)=>{n.d(r,{Z:()=>t});const t=function(e,r,n,t,s){const o=/<img.*?src="(data:image\/[^;]+;base64[^"]+)/.test(e);return!o&&s?function(e,r,n){return e.replace(/<img([^>]*)\ssrc=(['"])([^>]*)\2([^>]*)\/>/gi,`<picture>\n <source media="(min-width: 1024px)" srcset="${r}$3?class=docbglg 1x, ${r}$3?class=docbgxl 2x">\n <source media="(min-width: 768px)" srcset="${r}$3?class=docbgmd 1x, ${r}$3?class=docbglg 2x">\n <source media="(min-width: 375px)" srcset="${r}$3?class=docbgsm 1x, ${r}$3?class=docbgmd 2x">\n <img$1 src="${r}$3" srcset="${r}$3?class=docbgxs 1x, ${r}$3?class=docbgsm 2x" ${n>1?'loading="lazy" fetchpriority="low" decoding="async"':'fetchpriority="high" decoding="auto"'}>\n</picture>`)}(e,r,t):o?e:function(e,r,n){return e.replace(/<img([^>]*)\ssrc=(['"])([^>]*)\2([^>]*)\/>/gi,`<img$1 src=$2${r}$3${n}$2$4 loading="lazy"/>`)}(e,r,n)}},2841:(e,r,n)=>{n.d(r,{Z:()=>t});const t={"viewer-wrapper":"_3368ac8a536b",viewerWrapper:"_3368ac8a536b","is-app":"_ec038b23870a",isApp:"_ec038b23870a","viewer-footer":"_3cb976d2b79b",viewerFooter:"_3cb976d2b79b","is-mobile":"_c85fd0516fb1",isMobile:"_c85fd0516fb1","document-wrapper":"_5616026bd798",documentWrapper:"_5616026bd798",descaler:"_98347cadbf73","bottom-section":"_1049596bb44e",bottomSection:"_1049596bb44e",h1:"_4a3a9cb27767",h2:"_78779bb4ca67",h3:"_35be85ea8718",h4:"_c55dcd2eba05",h5:"_4f04aa46f42d",h6:"_2bfa9b24f2b1"}},24786:(e,r,n)=>{n.d(r,{Z:()=>t});const t={"related-documents":"_ba56c0a3e5e9",relatedDocuments:"_ba56c0a3e5e9","is-mobile":"_d82241158d68",isMobile:"_d82241158d68"}}}]);