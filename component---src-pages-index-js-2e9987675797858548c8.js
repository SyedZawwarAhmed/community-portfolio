(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Qib":function(e,t,r){"use strict";r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return n.b})),r.d(t,"c",(function(){return o}));var a=r("ElpU"),n=r("BYIe"),o={getImageMap:function(e,t,r,a){return void 0===r&&(r=!1),void 0===a&&(a=3),e.reduce((function(e,n){var o=n.node.relativePath.match(t)[0];if(r)if(e.hasOwnProperty(o))e[o].length<=a&&e[o].push(n.node.childImageSharp.fluid);else{var l=[];l.push(n.node.childImageSharp.fluid),e[o]=l}else e[o]=n.node.childImageSharp.fluid;return e}),{})}}},IP2g:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r("7O5W"),n=r("17x9"),o=r.n(n),l=r("q1tI"),i=r.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=b(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{})}var y=!1;try{y=!0}catch(w){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:a.c.icon?a.c.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function O(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),n=r.icon,o=r.mask,l=r.symbol,i=r.className,c=r.title,f=r.titleId,b=h(n),d=g("classes",[].concat(m(function(e){var t,r=e.spin,a=e.pulse,n=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,f=e.size,u=e.rotation,p=e.pull,m=(s(t={"fa-spin":r,"fa-pulse":a,"fa-fw":n,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(p),null!=p),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),m(i.split(" ")))),w=g("transform","string"==typeof r.transform?a.c.transform(r.transform):r.transform),k=g("mask",h(o)),E=Object(a.a)(b,u({},d,{},w,{},k,{symbol:l,title:c,titleId:f}));if(!E)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var j=E.abstract,x={ref:t};return Object.keys(r).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(x[e]=r[e])})),v(j[0],x)}O.displayName="FontAwesomeIcon",O.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=d(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[b(t)]=a}return e}),{attrs:{}}),l=a.style,i=void 0===l?{}:l,c=p(a,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),t.apply(void 0,[r.tag,u({},o.attrs,{},c)].concat(m(n)))}.bind(null,i.a.createElement)},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),o=r("BYIe"),l=r("Kvkj"),i=r("7Qib"),c=r("7vrA"),s=r("2mvg"),f=r("IP2g");t.default=function(e){var t=e.data.site.siteMetadata,r=t.unemployed,u=t.firstName,p=t.lastName,m=Object(a.useContext)(o.b).dark;return n.a.createElement(l.b,null,n.a.createElement(i.a,{title:"Home"}),n.a.createElement(c.a,{className:"text-center pt-5 mt-5",fluid:!0},n.a.createElement(s.a,{width:"150",height:"150",fluid:!0,src:"images/cwa.png",alt:m?"Darth Vader":"R2-D2"}),r&&n.a.createElement("p",{className:"mt-2"},n.a.createElement("b",null," ","Learning amazing things, meeting amazing people, everyday! :)")),n.a.createElement(c.a,{className:"py-0 my-0"},n.a.createElement("h1",{style:{fontSize:"5rem",color:"black"}},n.a.createElement("span",{className:"first-name"},u)," ",n.a.createElement("span",{className:"last-name"},p)),n.a.createElement("p",null,n.a.createElement("i",null,"The one stop shop to have fun with amazing people, and to code of course."))),n.a.createElement("hr",{className:"my-3 w-25"}),n.a.createElement("div",{className:"d-md-inline-flex icons-container"},n.a.createElement("a",{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{icon:["fab","github"],className:"icons github",title:"Github"})),n.a.createElement("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{icon:["fab","linkedin"],className:"icons linkedin",title:"LinkedIn"})),n.a.createElement("a",{href:"https://www.freecodecamp.org",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{icon:["fab","free-code-camp"],className:"icons fcc",title:"FreeCodeCamp"})),n.a.createElement("a",{href:"https://www.hackerrank.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{icon:["fab","hackerrank"],className:"icons hr",title:"Hackerrank"})),n.a.createElement("a",{href:"mailto:johndoe@gmail.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{icon:["fas","envelope"],className:"icons mail",title:"e-mail"})),n.a.createElement("a",{href:"../../resume.pdf",target:"_blank",download:!0},n.a.createElement(f.a,{icon:["fas","file-alt"],className:"icons file",title:"Resume"})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2e9987675797858548c8.js.map