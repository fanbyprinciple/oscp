
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],i=0;i<ttq.methods.length;i++)ttq.setAndDefer(e,ttq.methods[i]);return e},ttq.load=function(e,i){var n="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=n,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=i||{};i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=n+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(i,e)},ttq.legacyLoad=function(t,e){ttq._i=ttq._i||{},ttq._i[t]=[],ttq._t=ttq._t||{},ttq._t[t]=+new Date,ttq._o=ttq._o||{},ttq._o[t]=e||{},ttq._legacy=ttq._legacy||[],ttq._legacy.push(t)};


  ttq.legacyLoad('C60IM7G68TKST8M2TQ70');
  ttq.page();
}(window, document, 'ttq');

window[window["TiktokAnalyticsObject"]]._env = {"env":"external","key":""};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';; if(!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'b43aac7a-2aca-11ee-979c-b8cef66fe2ec';window[window["TiktokAnalyticsObject"]]._plugins = {"AdvancedMatching":true,"AutoAdvancedMatching":true,"AutoConfig":true,"Callback":true,"DiagnosticsConsole":true,"Identify":true,"Monitor":false,"PerformanceInteraction":false,"Shopify":true,"WebFL":false};window[window["TiktokAnalyticsObject"]]._aam = {"in_form":false,"selectors":{"[class*=Btn]":9,"[class*=Button]":11,"[class*=btn]":8,"[class*=button]":10,"[id*=Btn]":14,"[id*=Button]":16,"[id*=btn]":13,"[id*=button]":15,"[role*=button]":12,"button[type='button']":6,"button[type='menu']":7,"button[type='reset']":5,"button[type='submit']":4,"input[type='button']":1,"input[type='image']":2,"input[type='submit']":3},"exclude_selectors":["[class*=cancel]","[role*=cancel]","[id*=cancel]","[class*=back]","[role*=back]","[id*=back]","[class*=return]","[role*=return]","[id*=return]"],"phone_regex":"^\\+?[0-9\\-\\.\\(\\)\\s]{7,25}$","phone_selectors":["phone","mobile","contact","pn"],"restricted_keywords":["ssn","unique","cc","card","cvv","cvc","cvn","creditcard","billing","security","social","pass","zip","address","license","gender","health","age","nationality","party","sex","political","affiliation","appointment","politics","family","parental"]};window[window["TiktokAnalyticsObject"]]._auto_config = {"open_graph":["audience"],"microdata":["audience"],"json_ld":["audience"],"meta":null};
!function(){function i(){return window&&window.TiktokAnalyticsObject||"ttq"}function t(){return window&&window[i()]}var n,o,e,a,c,r=[{id:"MWJhZjVkMzY4MA",map:{AutoAdvancedMatching:!1,Shopify:!1,Monitor:!1}},{id:"MWJhZjVkMzY4MQ",map:{AutoAdvancedMatching:!0,Shopify:!1,Monitor:!1}},{id:"MWJhZjVkMzY4Mg",map:{AutoAdvancedMatching:!1,Shopify:!0,Monitor:!1}},{id:"MWJhZjVkMzY4Mw",map:{AutoAdvancedMatching:!0,Shopify:!0,Monitor:!1}},{id:"MWJhZjVkMzY4NA",map:{AutoAdvancedMatching:!1,Shopify:!1,Monitor:!0}},{id:"MWJhZjVkMzY4NQ",map:{AutoAdvancedMatching:!0,Shopify:!1,Monitor:!0}},{id:"MWJhZjVkMzY4Ng",map:{AutoAdvancedMatching:!1,Shopify:!0,Monitor:!0}},{id:"MWJhZjVkMzY4Nw",map:{AutoAdvancedMatching:!0,Shopify:!0,Monitor:!0}}],d={"info":{"pixelCode":"C60IM7G68TKST8M2TQ70","name":"Studocu","status":0,"setupMode":0,"partner":"","advertiserID":"7013279908491231234","is_onsite":false,"firstPartyCookieEnabled":true},"plugins":{"Shopify":false,"AdvancedMatching":{"email":true,"phone_number":true},"AutoAdvancedMatching":{"auto_email":true,"auto_phone_number":true},"Callback":true,"Identify":true,"Monitor":true,"PerformanceInteraction":true,"WebFL":true,"AutoConfig":false,"DiagnosticsConsole":true},"rules":[{"code_id":7041877336471470081,"pixel_event_id":7041877336471470081,"trigger_type":"PAGEVIEW","conditions":[{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"sell/upload"}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"AddToCart\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"},{"code_id":7041877336471486465,"pixel_event_id":7041877336471486465,"trigger_type":"PAGEVIEW","conditions":[{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"upload/complete","dynamic_parameter":{}},{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"document/upload/complete","dynamic_parameter":{}}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"PlaceAnOrder\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"},{"code_id":7041877336471519233,"pixel_event_id":7041877336471519233,"trigger_type":"PAGEVIEW","conditions":[{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"/oops"}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"Contact\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"},{"code_id":7159130103367139330,"pixel_event_id":7159130103367139330,"trigger_type":"PAGEVIEW","conditions":[{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"/experts/question/"}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"AddToWishlist\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"},{"code_id":7041877336471502849,"pixel_event_id":7041877336471502849,"trigger_type":"CLICK","conditions":[{"variable_type":"ELEMENT","operator":"EQUALS","value":"#main-wrapper \u003e div \u003e div \u003e div._3d0d0e46c475._3efbeeb0975f._c3b2d27b5231 \u003e div:nth-child(2) \u003e form \u003e button"}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"SubmitForm\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"},{"code_id":7028633297483759618,"pixel_event_id":7028633297483759618,"trigger_type":"PAGEVIEW","conditions":[{"variable_type":"PAGE_URL","operator":"CONTAINS","value":"/en-us/institution/"}],"code":"\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C60IM7G68TKST8M2TQ70\").track(\"ViewContent\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"}]},p="https://analytics.tiktok.com/i18n/pixel/static/",M=t();M||(M=[],window&&(window[i()]=M)),Object.assign(d,{options:(n=d.info.pixelCode,(o=t()._o)&&o[n]||{})}),function(i){M._i||(M._i={});var t=i.info.pixelCode;t&&(M._i[t]||(M._i[t]=[]),Object.assign(M._i[t],i),M._i[t]._load=+new Date)}(d),e=function(i,t,n){var o=0<arguments.length&&void 0!==i?i:{},e=1<arguments.length?t:void 0,t=2<arguments.length?n:void 0,n=function(i,t){for(var n=0;n<i.length;n++)if(t.call(null,i[n],n))return i[n]}(r,function(i){var t=i.map;return function(i,t){for(var n=0;n<i.length;n++)if(!t.call(null,i[n],n))return!1;return!0}(Object.keys(t),function(i){return!(!o[i]||!e[i])===t[i]})});return n?t+"main.".concat(n.id,".js"):t+"main.".concat(r[0].id,".js")}(M._plugins,d.plugins,p),a=d.info.pixelCode,(void 0!==self.DedicatedWorkerGlobalScope?self instanceof self.DedicatedWorkerGlobalScope:"DedicatedWorkerGlobalScope"===self.constructor.name)?self.importScripts&&self.importScripts(e):((c=document.createElement("script")).type="text/javascript",c.async=!0,c.src=e,c.setAttribute("data-id",a),(a=document.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a))}();