(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[992],{1143:function(e,t,n){"use strict";var r=n(5893),a=n(544),i=n.n(a);t.Z=function(e){var t=e.className,n=e.image,a=e.imageDescription,o=e.imageDescriptionUrl,l=e.centerImageDescription,s=e.imageDisplay,c=e.imageAltText;return(0,r.jsxs)("div",{className:"".concat(i()["image-styles__".concat(s)]," ").concat(t),children:[(0,r.jsx)("img",{src:n,alt:c}),a&&!o&&(0,r.jsx)("p",{className:"".concat(i()["image-styles__image-description"]," ").concat(l&&i()["image-styles__image-description__centered"]),children:a}),a&&o&&(0,r.jsx)("a",{href:o,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)("p",{className:"".concat(i()["image-styles__image-description"]," ").concat(l&&i()["image-styles__image-description__centered"]),children:a})})]})}},4465:function(e,t,n){"use strict";var r=n(5893),a=n(1664),i=n.n(a),o=n(626),l=n.n(o);t.Z=function(e){var t=e.className;return(0,r.jsxs)("div",{className:"".concat(l().navigation," ").concat(t),children:[(0,r.jsx)("div",{className:l().navigation__item,children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("div",{className:l().navigation__item,children:(0,r.jsx)(i(),{href:"case-study",children:(0,r.jsx)("a",{children:"Case Studies"})})}),(0,r.jsx)("div",{className:l().navigation__item,children:(0,r.jsx)(i(),{href:"about",children:(0,r.jsx)("a",{children:"About"})})})]})}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},l=n(1003),s=n(880),c=n(9246);var u={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var _=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),i=o.default.useMemo((function(){var t=a(l.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),_=i.href,d=i.as,m=o.default.useRef(_),g=o.default.useRef(d),y=e.children,p=e.replace,v=e.shallow,h=e.scroll,b=e.locale;"string"===typeof y&&(y=o.default.createElement("a",null,y));var x=(t=o.default.Children.only(y))&&"object"===typeof t&&t.ref,j=a(c.useIntersection({rootMargin:"200px"}),3),I=j[0],w=j[1],A=j[2],C=o.default.useCallback((function(e){g.current===d&&m.current===_||(A(),g.current=d,m.current=_),I(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[d,x,_,A,I]);o.default.useEffect((function(){var e=w&&n&&l.isLocalURL(_),t="undefined"!==typeof b?b:r&&r.locale,a=u[_+"%"+d+(t?"%"+t:"")];e&&!a&&f(r,_,d,{locale:t})}),[d,_,w,b,n,r]);var M={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:o}))}(e,r,_,d,p,v,h,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(_)&&f(r,_,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:r&&r.locale,S=r&&r.isLocaleDomain&&l.getDomainLocale(d,E,r&&r.locales,r&&r.domainLocales);M.href=S||l.addBasePath(l.addLocale(d,E,r&&r.defaultLocale))}return o.default.cloneElement(t,M)};t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=i.useRef(),f=a(i.useState(!1),2),_=f[0],d=f[1],m=a(i.useState(t?t.current:null),2),g=m[0],y=m[1],p=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||_||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:i,elements:a}),t}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:g,rootMargin:n}))}),[r,g,n,_]),v=i.useCallback((function(){d(!1)}),[]);return i.useEffect((function(){if(!l&&!_){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[_]),i.useEffect((function(){t&&y(t.current)}),[t]),[p,_,v]};var i=n(7294),o=n(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},2883:function(e){e.exports={content:"content_styles_content__AoWGq","content__double-col-left":"content_styles_content__double-col-left__OcPHj","content__double-col-right":"content_styles_content__double-col-right__6lNai"}},544:function(e){e.exports={"image-styles__inline":"image_styles_image-styles__inline__ISS1B","image-styles__aligned":"image_styles_image-styles__aligned__bQm6G","image-styles__full":"image_styles_image-styles__full__RxYz6","image-styles__center":"image_styles_image-styles__center__8fZbD","image-styles__right":"image_styles_image-styles__right__6xsZM","image-styles__max-right":"image_styles_image-styles__max-right__fvyl8","image-styles__max-left":"image_styles_image-styles__max-left__dC2en","image-styles__image-description":"image_styles_image-styles__image-description__enr8Q","image-styles__image-description__centered":"image_styles_image-styles__image-description__centered__R2WbG"}},626:function(e){e.exports={navigation:"navigation_styles_navigation__BIsum",navigation__item:"navigation_styles_navigation__item__gntIj"}},1664:function(e,t,n){e.exports=n(1551)}}]);