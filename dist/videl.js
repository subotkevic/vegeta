!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Videl=t():e.Videl=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=14)}([function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},function(e,t,n){"use strict";function r(e,t){t=Object.assign(s,t||{}),Object.keys(o.a).forEach(function(n){e.component(""+t.componentPrefix+n,o.a[n])}),e.prototype.$videl={load:i.a}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),i=n(7),s={componentPrefix:"Vd"};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){var t=!0,n=!1,o=void 0;try{for(var s,a=u[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var c=s.value,v=c+"-"+e;d.push(v),p.push(i(v)),Object.assign(f,r({},v,Boolean));var y=!0,b=!1,h=void 0;try{for(var m,w=l[Symbol.iterator]();!(y=(m=w.next()).done);y=!0){var x=m.value,_=v+"-"+x;d.push(_),p.push(i(_)),Object.assign(f,r({},_,Boolean))}}catch(e){b=!0,h=e}finally{try{!y&&w.return&&w.return()}finally{if(b)throw h}}}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function i(e){return e.replace(/(\-[a-z0-9])/g,function(e){return e.toUpperCase().replace("-","")})}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=["three-quarters","two-thirds","half","one-third","one-quarter"],u=["is","is-offset"],l=["mobile","tablet","desktop"],c=[1,2,3,4,5,6,7,8,9,10,11,12],f={"is-narrow":Boolean,"is-narrow-mobile":Boolean,"is-narrow-tablet":Boolean,"is-narrow-desktop":Boolean},d=[],p=[],v=!0,y=!1,b=void 0;try{for(var h,m=a[Symbol.iterator]();!(v=(h=m.next()).done);v=!0){o(h.value)}}catch(e){y=!0,b=e}finally{try{!v&&m.return&&m.return()}finally{if(y)throw b}}var w=!0,x=!1,_=void 0;try{for(var j,O=c[Symbol.iterator]();!(w=(j=O.next()).done);w=!0){o(j.value)}}catch(e){x=!0,_=e}finally{try{!w&&O.return&&O.return()}finally{if(x)throw _}}t.default={data:function(){return{sizingClasses:{}}},created:function(){var e=!0,t=!1,n=void 0;try{for(var o,i=d.entries()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=s(o.value,2),u=a[0];a[1];Object.assign(this.sizingClasses,r({},d[u],this[p[u]]))}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}},computed:{classes:function e(){var e={"is-narrow":this.isNarrow,"is-narrow-mobile":this.isNarrowMobile,"is-narrow-tablet":this.isNarrowTablet,"is-narrow-desktop":this.isNarrowDesktop};return Object.assign(this.sizingClasses,e)}},props:f}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{"is-mobile":Boolean,"is-desktop":Boolean,"is-multiline":Boolean,"is-gapless":Boolean},computed:{classes:function(){return{"is-mobile":this.isMobile,"is-desktop":this.isDesktop,"is-multiline":this.isMultiline,"is-gapless":this.isGapless}}}}},function(e,t,n){"use strict";var r=n(10),o=n.n(r),i=n(9),s=n.n(i),a=n(8),u=n.n(a);t.a={Columns:o.a,Column:s.a,Button:u.a}},function(e,t,n){"use strict";function r(e){return"complete"===document.readyState?setTimeout(e,0):"interactive"===document.readyState?setTimeout(function(){return r(e)},150):void document.addEventListener("DOMContentLoaded",e)}t.a=r},function(e,t,n){var r=n(0)(n(3),n(13),null,null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(4),n(11),null,null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(5),n(12),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"column",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"columns",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"button"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){n(1),e.exports=n(2)}])});