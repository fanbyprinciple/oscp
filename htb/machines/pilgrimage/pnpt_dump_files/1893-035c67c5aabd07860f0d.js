"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1893],{86278:(e,n,i)=>{i.r(n),i.d(n,{default:()=>p});var s=i(72779),o=i.n(s),t=i(57903),r=i(71488),a=i.n(r),c=i(2784),d=i(43870),l=i(75378),u=i(77027),m=i(93124),h=i(89251),_=i(94774);var b=i(52322);const f=function({isInline:e,onScrollAfterRecommendations:n}){const i=(0,t.v9)(d.bc),s=(0,c.useMemo)((()=>a()(i).call(i,0,4)),[i]),o=(0,c.useMemo)((()=>a()(i).call(i,0,8)),[i]);return(0,b.jsx)("div",{className:"_a48f31df7daf",children:(0,b.jsxs)("div",{className:"_da69736a220d",children:[(0,b.jsxs)("div",{className:"_a15b6d0c5799",children:[(0,b.jsx)(m.Z,{component:"h3",size:"normal",color:"default",weight:"bold",className:"_fdfe2f26478a",children:(0,b.jsx)(h.Z,{id:"recommended_for_you"})}),e&&n&&(0,b.jsx)(_.Z,{onClick:n,testSelector:"document-recommendations-scroll-button"})]}),(0,b.jsx)("div",{className:"_91e633c80d33",children:(0,b.jsx)(l.Z,{documents:s,thumbnailPreferredSize:"medium",withMobileView:!1,size:"small",isFit:!1,direction:"horizontal",origin:"viewer-recommendation",areLinksObfuscated:!0})}),(0,b.jsx)("div",{className:"_7379e4912b0a",children:(0,b.jsx)(u.Z,{documents:o,origin:"viewer-recommendation",visibleThumbnailsAmount:5,areLinksObfuscated:!0})})]})})};var v=i(5934),x=i(11793);const j="_2ab9e90f50f1",g="_fd0f37f89ae0";function p({handleScrollAfterPage:e,isInline:n=!1}){return(0,t.v9)(d.uW)?(0,b.jsx)("div",{className:o()(j,{[g]:!n}),children:(0,b.jsx)(v.Z,{onScrollAfterRecommendations:()=>null==e?void 0:e(x.eW),isInline:n})}):(0,b.jsx)("div",{className:o()(j,{[g]:!n}),children:(0,b.jsx)(f,{onScrollAfterRecommendations:()=>null==e?void 0:e(x.eW),isInline:n})})}},5934:(e,n,i)=>{i.d(n,{Z:()=>S});var s=i(6087),o=i.n(s),t=i(57903),r=i(45595),a=i(72779),c=i.n(a),d=i(43870),l=i(78096),u=i(77027),m=i(75378),h=i(94774),_=i(15204),b=i(23896),f=i(83082),v=i(89251),x=i(78122),j=i(4641),g=i(16180),p=i(52322);const Z=(0,r.ZP)({resolved:{},chunkName:()=>"IllustrationCard-IllustrationCard",isReady(e){var n=this.resolve(e);return!0===this.resolved[n]&&!!i.m[n]},importAsync:()=>Promise.all([i.e(83409),i.e(29834)]).then(i.bind(i,83689)),requireAsync(e){var n=this,i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((function(e){return n.resolved[i]=!0,e}))},requireSync(e){var n=this.resolve(e);return i(n)},resolve:()=>83689}),N="course-suggestion",C=({institution:e,course:n})=>(0,p.jsxs)("div",{className:j.Z.additionalInfoWrapper,children:[(0,p.jsx)(_.Z,{institution:e,origin:"document-viewer",testSelector:"document-viewer-course-institution",className:j.Z.institutionLink,truncateLength:28,isInstitutionFromCourse:!0,color:"gray",hasDuotoneIcon:!0,withIcon:!0}),(0,p.jsx)(b.Z,{documentCount:n.documentCount,displayTooltip:!1,tagContentClassName:j.Z.documentTag,tagWrapperClassName:j.Z.tagWrapper})]}),k=({currentCourse:e})=>{var n;const i=o()(n=e.name).call(n).length>35;return(0,p.jsx)(f.Z,{className:c()(j.Z.headingLink,{[j.Z.longHeadingWrapper]:i}),course:e,origin:N})};const S=function({isInline:e,onScrollAfterRecommendations:n}){const i=(0,t.v9)(d.Xj),s=(0,t.v9)(l.i_),o=(0,t.v9)(l.uZ),r=s.code?`(${s.code})`:"",a=o||s.institution,c=(0,x.u)(s,N),_=(0,g.Z)();return(0,p.jsx)("div",{className:j.Z.recommendationsWrapper,children:(0,p.jsxs)("div",{className:j.Z.container,children:[(0,p.jsx)("div",{className:j.Z.header,children:e&&n&&(0,p.jsx)(h.Z,{onClick:n,testSelector:"document-course-recommendations-section-scroll-button"})}),(0,p.jsxs)("div",{className:j.Z.hiddenFromTablet,children:[(0,p.jsx)(Z,{heading:(0,p.jsx)(k,{currentCourse:s}),subheading:r,buttonText:(0,p.jsx)(v.Z,{id:"go_to_course"}),illustration:"course",additionalInfo:(0,p.jsx)(C,{institution:a,course:s}),onClick:()=>_(c),color:"green",dataTestSelector:"course-illustration-card"}),(0,p.jsx)(m.Z,{documents:i,thumbnailPreferredSize:"medium",withMobileView:!1,size:"small",isFit:!1,direction:"horizontal",origin:N,areLinksObfuscated:!0})]}),(0,p.jsxs)("div",{className:j.Z.hiddenMobile,children:[(0,p.jsx)(Z,{heading:(0,p.jsx)(k,{currentCourse:s}),subheading:r,buttonText:(0,p.jsx)(v.Z,{id:"go_to_course"}),illustration:"course",additionalInfo:(0,p.jsx)(C,{institution:a,course:s}),onClick:()=>_(c),color:"green",dataTestSelector:"course-illustration-card"}),(0,p.jsx)("div",{className:j.Z.documentsCarousel,children:(0,p.jsx)(u.Z,{documents:i,origin:N,visibleThumbnailsAmount:4,areLinksObfuscated:!0})})]})]})})}},94774:(e,n,i)=>{i.d(n,{Z:()=>c});var s=i(56680),o=i(76246),t=i(64765),r=i(89251),a=i(52322);const c=({onClick:e,color:n="text-blue",className:i,testSelector:c,component:d="button"})=>(0,a.jsxs)(o.Z,{component:d,size:"minimal",color:n,onClick:e,className:i,testSelector:c,children:[(0,a.jsx)(t.default,{icon:s.r5,size:"s"}),(0,a.jsx)("span",{children:(0,a.jsx)(r.Z,{id:"document_continues_below"})})]})},4641:(e,n,i)=>{i.d(n,{Z:()=>s});const s={"recommendations-wrapper":"_fee4e2220a9d",recommendationsWrapper:"_fee4e2220a9d",container:"_c8ca13e479b1",header:"_6d67e3886f52","hidden-mobile":"_9695d973f086",hiddenMobile:"_9695d973f086","hidden-from-tablet":"_0165737785eb",hiddenFromTablet:"_0165737785eb","documents-carousel":"_60ae896b498b",documentsCarousel:"_60ae896b498b","institution-link":"_ef2b19e505c5",institutionLink:"_ef2b19e505c5","tag-wrapper":"_60accde80785",tagWrapper:"_60accde80785","document-tag":"_537be283c356",documentTag:"_537be283c356","additional-info-wrapper":"_8030db70812b",additionalInfoWrapper:"_8030db70812b","heading-link":"_62162ae7d7a1",headingLink:"_62162ae7d7a1","long-heading-wrapper":"_3501551d954d",longHeadingWrapper:"_3501551d954d"}}}]);