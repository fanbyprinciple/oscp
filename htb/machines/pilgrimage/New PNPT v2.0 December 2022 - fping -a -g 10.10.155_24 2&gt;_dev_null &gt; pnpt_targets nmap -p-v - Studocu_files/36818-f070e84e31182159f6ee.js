/*! For license information please see 36818-f070e84e31182159f6ee.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[36818],{54847:(e,t,r)=>{var o=r(16737);t.DF={prefix:o.prefix,iconName:o.iconName,icon:[o.width,o.height,o.aliases,o.unicode,o.svgPathData]},t.NB=t.DF,o.prefix,o.iconName,o.width,o.height,o.aliases,o.unicode,o.svgPathData,o.aliases},16737:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r="xmark",o=[128473,10005,10006,10060,215,"close","multiply","remove","times"],n="f00d",i="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";t.definition={prefix:"fas",iconName:r,icon:[384,512,o,n,i]},t.faXmark=t.definition,t.prefix="fas",t.iconName=r,t.width=384,t.height=512,t.ligatures=o,t.unicode=n,t.svgPathData=i,t.aliases=o},49929:(e,t,r)=>{r.d(t,{G:()=>O});var o=r(81674),n=r(13980),i=r.n(n),a=r(2784);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var m=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,o=t.indexOf(":"),n=y(t.slice(0,o)),i=t.slice(o+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[n]=i,e}),{})}var v=!1;try{v=!0}catch(e){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:o.Qc.icon?o.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var O=a.forwardRef((function(e,t){var r=e.icon,n=e.mask,i=e.symbol,a=e.className,s=e.title,c=e.titleId,f=e.maskId,d=h(r),y=g("classes",[].concat(p(function(e){var t,r=e.beat,o=e.fade,n=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,d=e.fixedWidth,y=e.inverse,m=e.border,b=e.listItem,v=e.flip,h=e.size,g=e.rotation,O=e.pull,x=(u(t={"fa-beat":r,"fa-fade":o,"fa-beat-fade":n,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":d,"fa-inverse":y,"fa-border":m,"fa-li":b,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(h),null!=h),u(t,"fa-rotate-".concat(g),null!=g&&0!==g),u(t,"fa-pull-".concat(O),null!=O),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(e)),p(a.split(" ")))),m=g("transform","string"==typeof e.transform?o.Qc.transform(e.transform):e.transform),b=g("mask",h(n)),w=(0,o.qv)(d,l(l(l(l({},y),m),b),{},{symbol:i,title:s,titleId:c,maskId:f}));if(!w)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var j=w.abstract,S={ref:t};return Object.keys(e).forEach((function(t){O.defaultProps.hasOwnProperty(t)||(S[t]=e[t])})),x(j[0],S)}));O.displayName="FontAwesomeIcon",O.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},O.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var x=function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var o=r.attributes[t];switch(t){case"class":e.attrs.className=o,delete r.attributes.class;break;case"style":e.attrs.style=b(o);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=o:e.attrs[y(t)]=o}return e}),{attrs:{}}),a=o.style,s=void 0===a?{}:a,c=f(o,m);return i.attrs.style=l(l({},i.attrs.style),s),t.apply(void 0,[r.tag,l(l({},i.attrs),c)].concat(p(n)))}.bind(null,a.createElement)},98298:(e,t,r)=>{var o=r(78996),n=r(81785),i=function(e,t){return Object.keys(e).sort(t).reduce((function(t,r){return e[r]&&(t[r]=e[r]),t}),{})},a={document:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"View",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.forceLocale,a=void 0!==i&&i,s="undefined";e.institution&&void 0!==e.institution.name&&(s=e.institution.name);var l=void 0;void 0!==e.title?l=e.title:void 0!==e.name&&(l=e.name);var c={institutionName:o(s),courseName:e.course&&o(e.course.name)||"undefined",documentName:o(l),id:e.id};return a&&e.institution.region&&(c.locale=e.institution.region),n.route("document"+t,c)},course:function(e,t){var r="";void 0!==t&&!0===t&&(r="Followers");var i={courseName:o(e.name),courseId:e.id||"undefined"};return e.institution?(i.institutionName=o(e.institution.name),n.route("institution.course"+r,i)):n.route("degree.course"+r,i)},courseGroup:function(e,t){var r={courseName:o(e.name),courseId:e.id||"undefined"};return null!=t&&(r.postId=t.id),e.institution?(r.institutionName=o(e.institution.name),n.route("institution.course.questions.index",r)):n.route("degree.course.group.index",r)},institution:function(e){var t={institutionName:o(e.name),id:e.id};return 3===e.level?n.route("high-schools.show",t):n.route("institution",t)},book:function(e,t){var r,i="",a="unknown";void 0!==t&&!0===t&&(i="Followers"),r=void 0===e.title&&void 0!==e.name?e.name:e.title,e.authors&&e.authors.length?a=e.authors.join(", "):e.author&&(a=e.author);var s={title:o(r),author:o(a),id:e.id};return n.route("book"+i,s)},studylist:function(e,t){var r="studylists.show";return void 0!==t&&!0===t&&(r="studylists.followers"),n.route(r,{name:o(e.name),studylistId:e.id})},study:function(e){return n.route("studies.show",{studyId:e.id,studyName:o(e.name),studyType:o(e.type)})},degree:function(e){return n.route("degrees.show",{degreeId:e.id,degreeName:o(e.name)})},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.normalize,a=void 0!==o&&o,s=i(t),l=a?e.replace(/\s+/g,"-").toLowerCase():e;return s.q=encodeURIComponent(l),n.route("search",s)}};e.exports=a},78996:e=>{var t={0:["°","₀","۰","０"],1:["¹","₁","۱","１"],2:["²","₂","۲","２"],3:["³","₃","۳","３"],4:["⁴","₄","۴","٤","４"],5:["⁵","₅","۵","٥","５"],6:["⁶","₆","۶","٦","６"],7:["⁷","₇","۷","７"],8:["⁸","₈","۸","８"],9:["⁹","₉","۹","９"],a:["à","á","ả","ã","ạ","ă","ắ","ằ","ẳ","ẵ","ặ","â","ấ","ầ","ẩ","ẫ","ậ","ā","ą","å","α","ά","ἀ","ἁ","ἂ","ἃ","ἄ","ἅ","ἆ","ἇ","ᾀ","ᾁ","ᾂ","ᾃ","ᾄ","ᾅ","ᾆ","ᾇ","ὰ","ά","ᾰ","ᾱ","ᾲ","ᾳ","ᾴ","ᾶ","ᾷ","а","أ","အ","ာ","ါ","ǻ","ǎ","ª","ა","अ","ا","ａ","ä"],b:["б","β","ب","ဗ","ბ","ｂ"],c:["ç","ć","č","ĉ","ċ","ｃ"],d:["ď","ð","đ","ƌ","ȡ","ɖ","ɗ","ᵭ","ᶁ","ᶑ","д","δ","د","ض","ဍ","ဒ","დ","ｄ"],e:["é","è","ẻ","ẽ","ẹ","ê","ế","ề","ể","ễ","ệ","ë","ē","ę","ě","ĕ","ė","ε","έ","ἐ","ἑ","ἒ","ἓ","ἔ","ἕ","ὲ","έ","е","ё","э","є","ə","ဧ","ေ","ဲ","ე","ए","إ","ئ","ｅ"],f:["ф","φ","ف","ƒ","ფ","ｆ"],g:["ĝ","ğ","ġ","ģ","г","ґ","γ","ဂ","გ","گ","ｇ"],h:["ĥ","ħ","η","ή","ح","ه","ဟ","ှ","ჰ","ｈ"],i:["í","ì","ỉ","ĩ","ị","î","ï","ī","ĭ","į","ı","ι","ί","ϊ","ΐ","ἰ","ἱ","ἲ","ἳ","ἴ","ἵ","ἶ","ἷ","ὶ","ί","ῐ","ῑ","ῒ","ΐ","ῖ","ῗ","і","ї","и","ဣ","ိ","ီ","ည်","ǐ","ი","इ","ی","ｉ"],j:["ĵ","ј","Ј","ჯ","ج","ｊ"],k:["ķ","ĸ","к","κ","Ķ","ق","ك","က","კ","ქ","ک","ｋ"],l:["ł","ľ","ĺ","ļ","ŀ","л","λ","ل","လ","ლ","ｌ"],m:["м","μ","م","မ","მ","ｍ"],n:["ñ","ń","ň","ņ","ŉ","ŋ","ν","н","ن","န","ნ","ｎ"],o:["ó","ò","ỏ","õ","ọ","ô","ố","ồ","ổ","ỗ","ộ","ơ","ớ","ờ","ở","ỡ","ợ","ø","ō","ő","ŏ","ο","ὀ","ὁ","ὂ","ὃ","ὄ","ὅ","ὸ","ό","о","و","θ","ို","ǒ","ǿ","º","ო","ओ","ｏ","ö"],p:["п","π","ပ","პ","پ","ｐ"],q:["ყ","ｑ"],r:["ŕ","ř","ŗ","р","ρ","ر","რ","ｒ"],s:["ś","š","ş","с","σ","ș","ς","س","ص","စ","ſ","ს","ｓ"],t:["ť","ţ","т","τ","ț","ت","ط","ဋ","တ","ŧ","თ","ტ","ｔ"],u:["ú","ù","ủ","ũ","ụ","ư","ứ","ừ","ử","ữ","ự","û","ū","ů","ű","ŭ","ų","µ","у","ဉ","ု","ူ","ǔ","ǖ","ǘ","ǚ","ǜ","უ","उ","ｕ","ў","ü"],v:["в","ვ","ϐ","ｖ"],w:["ŵ","ω","ώ","ဝ","ွ","ｗ"],x:["χ","ξ","ｘ"],y:["ý","ỳ","ỷ","ỹ","ỵ","ÿ","ŷ","й","ы","υ","ϋ","ύ","ΰ","ي","ယ","ｙ"],z:["ź","ž","ż","з","ζ","ز","ဇ","ზ","ｚ"],aa:["ع","आ","آ"],ae:["æ","ǽ"],ai:["ऐ"],ch:["ч","ჩ","ჭ","چ"],dj:["ђ","đ"],dz:["џ","ძ"],ei:["ऍ"],gh:["غ","ღ"],ii:["ई"],ij:["ĳ"],kh:["х","خ","ხ"],lj:["љ"],nj:["њ"],oe:["œ","ؤ"],oi:["ऑ"],oii:["ऒ"],ps:["ψ"],sh:["ш","შ","ش"],shch:["щ"],ss:["ß"],sx:["ŝ"],th:["þ","ϑ","ث","ذ","ظ"],ts:["ц","ც","წ"],uu:["ऊ"],ya:["я"],yu:["ю"],zh:["ж","ჟ","ژ"],"(c)":["©"],A:["Á","À","Ả","Ã","Ạ","Ă","Ắ","Ằ","Ẳ","Ẵ","Ặ","Â","Ấ","Ầ","Ẩ","Ẫ","Ậ","Å","Ā","Ą","Α","Ά","Ἀ","Ἁ","Ἂ","Ἃ","Ἄ","Ἅ","Ἆ","Ἇ","ᾈ","ᾉ","ᾊ","ᾋ","ᾌ","ᾍ","ᾎ","ᾏ","Ᾰ","Ᾱ","Ὰ","Ά","ᾼ","А","Ǻ","Ǎ","Ａ","Ä"],B:["Б","Β","ब","Ｂ"],C:["Ç","Ć","Č","Ĉ","Ċ","Ｃ"],D:["Ď","Ð","Đ","Ɖ","Ɗ","Ƌ","ᴅ","ᴆ","Д","Δ","Ｄ"],E:["É","È","Ẻ","Ẽ","Ẹ","Ê","Ế","Ề","Ể","Ễ","Ệ","Ë","Ē","Ę","Ě","Ĕ","Ė","Ε","Έ","Ἐ","Ἑ","Ἒ","Ἓ","Ἔ","Ἕ","Έ","Ὲ","Е","Ё","Э","Є","Ə","Ｅ"],F:["Ф","Φ","Ｆ"],G:["Ğ","Ġ","Ģ","Г","Ґ","Γ","Ｇ"],H:["Η","Ή","Ħ","Ｈ"],I:["Í","Ì","Ỉ","Ĩ","Ị","Î","Ï","Ī","Ĭ","Į","İ","Ι","Ί","Ϊ","Ἰ","Ἱ","Ἳ","Ἴ","Ἵ","Ἶ","Ἷ","Ῐ","Ῑ","Ὶ","Ί","И","І","Ї","Ǐ","ϒ","Ｉ"],J:["Ｊ"],K:["К","Κ","Ｋ"],L:["Ĺ","Ł","Л","Λ","Ļ","Ľ","Ŀ","ल","Ｌ"],M:["М","Μ","Ｍ"],N:["Ń","Ñ","Ň","Ņ","Ŋ","Н","Ν","Ｎ"],O:["Ó","Ò","Ỏ","Õ","Ọ","Ô","Ố","Ồ","Ổ","Ỗ","Ộ","Ơ","Ớ","Ờ","Ở","Ỡ","Ợ","Ø","Ō","Ő","Ŏ","Ο","Ό","Ὀ","Ὁ","Ὂ","Ὃ","Ὄ","Ὅ","Ὸ","Ό","О","Θ","Ө","Ǒ","Ǿ","Ｏ","Ö"],P:["П","Π","Ｐ"],Q:["Ｑ"],R:["Ř","Ŕ","Р","Ρ","Ŗ","Ｒ"],S:["Ş","Ŝ","Ș","Š","Ś","С","Σ","Ｓ"],T:["Ť","Ţ","Ŧ","Ț","Т","Τ","Ｔ"],U:["Ú","Ù","Ủ","Ũ","Ụ","Ư","Ứ","Ừ","Ử","Ữ","Ự","Û","Ū","Ů","Ű","Ŭ","Ų","У","Ǔ","Ǖ","Ǘ","Ǚ","Ǜ","Ｕ","Ў","Ü"],V:["В","Ｖ"],W:["Ω","Ώ","Ŵ","Ｗ"],X:["Χ","Ξ","Ｘ"],Y:["Ý","Ỳ","Ỷ","Ỹ","Ỵ","Ÿ","Ῠ","Ῡ","Ὺ","Ύ","Ы","Й","Υ","Ϋ","Ŷ","Ｙ"],Z:["Ź","Ž","Ż","З","Ζ","Ｚ"],AE:["Æ","Ǽ"],Ch:["Ч"],Dj:["Ђ"],Dz:["Џ"],Gx:["Ĝ"],Hx:["Ĥ"],Ij:["Ĳ"],Jx:["Ĵ"],Kh:["Х"],Lj:["Љ"],Nj:["Њ"],Oe:["Œ"],Ps:["Ψ"],Sh:["Ш"],Shch:["Щ"],Ss:["ẞ"],Th:["Þ"],Ts:["Ц"],Ya:["Я"],Yu:["Ю"],Zh:["Ж"]," ":["Â ","â","â","â","â","â","â","â","â","â","â","â","â¯","â","ã","ï¾ "]};e.exports=function(e,r){if(null===e)return"undefined";e=String(e),r=Object(r);var o={delimiter:"-",limit:void 0,lowercase:!0,replacements:{},transliterate:!0};for(var n in o)r.hasOwnProperty(n)||(r[n]=o[n]);for(var i in r.replacements)e=e.replace(RegExp(i,"g"),r.replacements[i]);var a=RegExp("@","ig");e=e.replace(a,r.delimiter),r.transliterate&&Object.keys(t).forEach((function(r){var o=t[r];e=e.replace(RegExp("("+o.join("|")+")","g"),r)}));var s=e,l=void 0;try{l=RegExp("[^-\\p{L}\\p{N} _"+r.delimiter+"]","giu")}catch(e){l=RegExp("[^"+r.delimiter+"'\\d\\w\\s\\u4e00-\\u9eff]+","gi")}(e=e.replace(l,"")).length||(e=s),e=e.toLowerCase();var c=RegExp("_","ig");e=e.replace(c,r.delimiter);var u=RegExp("["+r.delimiter+"\\s]+","ig");return(e=(e=(e=e.replace(u,r.delimiter)).replace(RegExp("["+r.delimiter+"]{2,}","g"),r.delimiter)).replace(RegExp("(^"+r.delimiter+"|"+r.delimiter+"$)","g"),""))||"undefined"}},73463:(e,t,r)=>{var o=r(73887),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return o.isMemo(e)?a:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(y){var n=d(r);n&&n!==y&&e(t,n,o)}var a=u(r);f&&(a=a.concat(f(r)));for(var s=l(t),m=l(r),b=0;b<a.length;++b){var v=a[b];if(!(i[v]||o&&o[v]||m&&m[v]||s&&s[v])){var h=p(r,v);try{c(t,v,h)}catch(e){}}}}return t}},43459:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case p:case b:case m:case l:return e;default:return t}}case n:return t}}}function w(e){return x(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=m,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||x(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===b},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===a||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===O||e.$$typeof===v)},t.typeOf=x},73887:(e,t,r)=>{e.exports=r(43459)}}]);