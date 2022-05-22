"use strict";(self.webpackChunkrng_wiki=self.webpackChunkrng_wiki||[]).push([[192],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2586:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={},l="\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210",p={unversionedId:"principle/gen3/Em/schemas/stationary",id:"principle/gen3/Em/schemas/stationary",title:"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210",description:"\u57fa\u672c\u5f62",source:"@site/docs/principle/gen3/Em/schemas/stationary.md",sourceDirName:"principle/gen3/Em/schemas",slug:"/principle/gen3/Em/schemas/stationary",permalink:"/rng-wiki/docs/principle/gen3/Em/schemas/stationary",draft:!1,editUrl:"https://github.com/mizuyoukanao/rng-wiki/blob/main/docs/principle/gen3/Em/schemas/stationary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BV\u4fdd\u5b58",permalink:"/rng-wiki/docs/principle/gen3/Em/battleVideo"},next:{title:"\u91ce\u751f\u751f\u6210",permalink:"/rng-wiki/docs/principle/gen3/Em/schemas/wild"}},u={},s=[{value:"\u57fa\u672c\u5f62",id:"\u57fa\u672c\u5f62",level:2},{value:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec",id:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210"},"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210"),(0,o.kt)("h2",{id:"\u57fa\u672c\u5f62"},"\u57fa\u672c\u5f62"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LID = getRand()\nHID = getRand()\nPID = LID | (HID << 16)\n// *1\nHAB = getRand()\n// *2\nSCD = getRand()\n\nIVs = {\n  H: HAB & 0x1F,\n  A: (HAB >> 5) & 0x1F,\n  B: (HAB >> 10) & 0x1F,\n  C: (SCD >> 5) & 0x1F,\n  D: (SCD >> 10) & 0x1F,\n  S: SCD & 0x1F\n}\n")),(0,o.kt)("h2",{id:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec"},"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec"),(0,o.kt)("p",null,"\u500b\u4f53\u751f\u6210\u306e\u9014\u4e2d\u3067\u63cf\u753b\u306e\u5272\u8fbc\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u3002\n\u63cf\u753b\u51e6\u7406\u306b\u306f\u4e71\u6570\u6d88\u8cbb\u304c1\u56de\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u751f\u6210\u3055\u308c\u308b\u500b\u4f53\u3082\u3001\u5272\u8fbc\u304c\u5165\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u3082\u306e\u3068\u306f\u9055\u3046\u3082\u306e\u306b\u306a\u308b\u3002\n\u4fd7\u306b\u3001\u5272\u308a\u8fbc\u307f\u306e\u5165\u3063\u3066\u3044\u306a\u3044\u30d1\u30bf\u30fc\u30f3\u306f",(0,o.kt)("strong",null,"Method1"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*1"),"\u306e\u4f4d\u7f6e\u3067\u5272\u8fbc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u306f",(0,o.kt)("strong",null,"Method2"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*2"),"\u306e\u4f4d\u7f6e\u3067\u5272\u308a\u8fbc\u307f\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u306f",(0,o.kt)("strong",null,"Method4"),"\u3068\u547c\u3070\u308c\u308b\u3002"),(0,o.kt)("p",null,"\u5272\u8fbc\u304c\u5165\u308b\u306e\u306f\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u9593\u306b\u500b\u4f53\u751f\u6210\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308a\u3001\u500b\u4f53\u751f\u6210\u307e\u3067\u306e\u51e6\u7406\u304c\u91cd\u3044\u307b\u3069\n",(0,o.kt)("inlineCode",{parentName:"p"},"Method1 < Method4 < Method2"),"\n\u3068\u3044\u3046\u98a8\u306b\u751f\u6210\u30d1\u30bf\u30fc\u30f3\u304c\u5909\u52d5\u3059\u308b\u3002\n\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u306e\u5834\u5408\u306f\u91ce\u751f\u3084\u5b75\u5316\u3068\u7570\u306a\u308a\u3001\u500b\u4f53\u751f\u6210\u307e\u3067\u306b\u91cd\u3044\u51e6\u7406\u304c\u5165\u308b\u3053\u3068\u304c\u5c11\u306a\u3044\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u304cMethod1\u3067\u751f\u6210\u3055\u308c\u308b\u3002\n\u3057\u304b\u3057\u3001\u30dd\u30b1\u30e2\u30f3\u30dc\u30c3\u30af\u30b9\u3067RS\u3092\u30d7\u30ec\u30a4\u3059\u308b\u5834\u5408\u306a\u3069\u3001\u3054\u304f\u9650\u3089\u308c\u305f\u72b6\u6cc1\u306b\u304a\u3044\u3066\u306fMethod4\u500b\u4f53\u304c\u751f\u6210\u3055\u308c\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3055\u308c\u3066\u3044\u308b\u3002"),(0,o.kt)("h2",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027"),(0,o.kt)("p",null,"4\u4e16\u4ee3\u4ee5\u964d\u3068\u306f\u7570\u306a\u308a\u30013\u4e16\u4ee3\u3067\u306f\u30b7\u30f3\u30af\u30ed\u306a\u3069\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027\u304c\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u306b\u5bfe\u3057\u3066\u306f\u52b9\u679c\u3092\u767a\u63ee\u3057\u306a\u3044\u3002"))}d.isMDXComponent=!0}}]);