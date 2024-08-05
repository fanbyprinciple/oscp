(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[41351],{1560:(r,t,n)=>{r.exports=n(94848)},83867:r=>{r.exports=function(){var r={};function t(){return t=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},t.apply(this,arguments)}function n(r,t){return n=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r},n(r,t)}r=function(){function r(){var r="undefined"!=typeof window&&window.React;if(this.name="react",this.lazy=0===arguments.length&&!r,!this.lazy&&(this.React=(arguments.length<=0?void 0:arguments[0])||r,!this.React))throw new Error("@bugsnag/plugin-react reference to `React` was undefined")}return r.prototype.load=function(r){if(!this.lazy){var t=o(this.React,r);return t.createErrorBoundary=function(){return t},t}var n=function(){throw new Error("@bugsnag/plugin-react was used incorrectly. Valid usage is as follows:\nPass React to the plugin constructor\n\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact(React)] })`\nand then call `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary()`\n\nOr if React is not available until after Bugsnag has started,\nconstruct the plugin with no arguments\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact()] })`,\nthen pass in React when available to construct your error boundary\n  `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)`")};return n.createErrorBoundary=function(t){if(!t)throw new Error("@bugsnag/plugin-react reference to `React` was undefined");return o(t,r)},n},r}();var e=function(r){for(var t=r.split(/\s*\n\s*/g),n="",e=0,o=t.length;e<o;e++)t[e].length&&(n+=(n.length?"\n":"")+t[e]);return n},o=function(r,o){return function(a){function s(r){var t;return(t=a.call(this,r)||this).state={error:null,info:null},t.handleClearError=t.handleClearError.bind(function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(t)),t}var i,u;u=a,(i=s).prototype=Object.create(u.prototype),i.prototype.constructor=i,n(i,u);var c=s.prototype;return c.handleClearError=function(){this.setState({error:null,info:null})},c.componentDidCatch=function(r,t){var n=this.props.onError,a=o.Event.create(r,!0,{severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},1);t&&t.componentStack&&(t.componentStack=e(t.componentStack)),a.addMetadata("react",t),o._notify(a,n),this.setState({error:r,info:t})},c.render=function(){if(this.state.error){var n=this.props.FallbackComponent;return n?r.createElement(n,t({},this.state,{clearError:this.handleClearError})):null}return this.props.children},s}(r.Component)};return r.formatComponentStack=e,r.default=r,r}()},5091:r=>{"use strict";r.exports=function(r,t,n){return t.cdn_enabled||n?t.aws_cloudfront_assets.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):"/"+r.replace(/^\/+/,"")}},82475:(r,t,n)=>{r.exports=n(16399)},93963:(r,t,n)=>{r.exports=n(8368)},85337:(r,t,n)=>{r.exports=n(392)},13962:(r,t,n)=>{r.exports=n(88458)},45932:(r,t,n)=>{r.exports=n(28478)}}]);