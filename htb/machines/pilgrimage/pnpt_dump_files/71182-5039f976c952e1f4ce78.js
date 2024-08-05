"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71182],{53520:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(40453),u=t.n(r),l=t(14903),o=t.n(l),c=t(2784),s=t(57903);function a(e,n){const[t,r]=(0,c.useState)(null),l=(0,c.useMemo)((()=>{var e;return null!==(e=null==n?void 0:n.trackingAction)&&void 0!==e?e:null}),[null==n?void 0:n.trackingAction]);(0,c.useEffect)((()=>{null!=n&&n.toggleFirstItem&&r(e[0])}),[]);const a=(0,s.I0)(),i=(0,c.useCallback)((e=>t===e?(l&&a(l(e,!1)),r(null)):(l&&a(l(e,!0)),r(e))),[a,t,r,l]),d=(0,c.useRef)(u()(e).call(e,Boolean)),f=(0,c.useMemo)((()=>{var e;return o()(e=d.current).call(e,(e=>()=>{var t;null==n||null===(t=n.callbackOnToggle)||void 0===t||t.call(n),i(e)}))}),[i,n]);return{isOpenBooleans:(0,c.useMemo)((()=>{var e;return o()(e=d.current).call(e,(e=>e===t))}),[t]),toggleCallbacks:f,closeAllAccordions:(0,c.useCallback)((()=>{t&&i(t)}),[t,i])}}},60686:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(2784),u=t(83096);function l(e,{isEnabled:n=!0,childrenElementRef:t=null}={}){(0,r.useEffect)((()=>{const r=e.current;if(n&&r)return(0,u.Qp)(r,{allowTouchMove:e=>{for(;e&&e!==document.body;){var n;if(null!=t&&null!==(n=t.current)&&void 0!==n&&n.contains(e))return!0;e=e.parentElement}return!1}}),()=>(0,u.tG)(r)}),[e,n,t])}},77717:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(6087),u=t.n(r),l=t(2784),o=t(36808),c=t(28441);const s=()=>{const e=(0,c.C5)(),[n,t]=(0,l.useState)(null),r=(0,l.useCallback)((()=>{const e=document.querySelector("html");var n;e&&t(u()(n=window.getComputedStyle(e).getPropertyValue("--breakpoint")).call(n))}),[]);return(0,l.useEffect)((()=>{r()}),[r]),(0,l.useEffect)((()=>{const n=(0,o.D)(r,200);return e&&window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[r,e]),n}},9570:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(63305),u=t.n(r),l=t(2784);function o(e,n){const[t,r]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{let l;return e&&!t?r(!0):!e&&t&&(l=u()((()=>r(!1)),n)),()=>clearTimeout(l)}),[e,n,t]),t}},80911:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(2784);function u(e,n,t,u){const l=(0,r.useRef)(n);(0,r.useEffect)((()=>{l.current=n}),[n]),(0,r.useEffect)((()=>{if(!t)return;const{throttle:n,...r}=u||{};if(!t.addEventListener)return void console.warn("The given element does not support `addEventListener`",t,e);let o=0;const c=n?e=>{0!==o&&o%n!=0||(l.current(e),o=0),o+=1}:e=>l.current(e);return t.addEventListener(e,c,r),()=>t.removeEventListener(e,c,r)}),[e,t,u])}},28794:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(2784);function u(e,{enabled:n=!0}={}){const[t,u]=(0,r.useState)(n?void 0:e);return(0,r.useEffect)((()=>{u(e)}),[e]),t}},56889:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(2784),u=t(80911),l=t(28441);function o(e,{isEnabled:n=!0}={}){const t=(0,l.C5)()?document:null,o=(0,r.useCallback)((t=>{const r=t.key||t.keyCode;("Escape"===r||"Esc"===r||27===r)&&n&&e&&(t.preventDefault(),e())}),[e,n]);(0,u.Z)("keydown",o,t)}},36054:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2784),u=t(83865),l=t(11855),o=t(16180);function c(e,n){const t=(0,o.Z)();return(0,r.useCallback)((r=>n?(0,u.Y)(r)?n(r):(r.preventDefault(),(0,l.i)((async()=>n(r))).finally((()=>t(e)))):r),[e,n,t])}},95821:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2784),u=t(57903),l=t(67319),o=t(62824);function c(e,n){const t=(0,u.v9)(o.aN);return(0,r.useMemo)((()=>(0,l.lV)(e,n,t)),[e,n,t])}},70406:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(63305),u=t.n(r),l=t(2784);function o(e,n=0){const t=(0,l.useRef)(e);(0,l.useLayoutEffect)((()=>{t.current=e}),[e]),(0,l.useEffect)((()=>{const e=u()((()=>t.current()),n);return()=>clearTimeout(e)}),[n])}},25035:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2784),u=t(36808),l=t(28441);const o=e=>({width:e?window.innerWidth:null,height:e?window.innerHeight:null});function c(){const e=(0,l.C5)(),[n,t]=(0,r.useState)(o(e));return(0,r.useEffect)((()=>{const n=(0,u.D)((()=>t(o(e))),200);return e&&window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e]),n}}}]);