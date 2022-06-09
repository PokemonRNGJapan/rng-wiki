"use strict";(self.webpackChunkrng_wiki=self.webpackChunkrng_wiki||[]).push([[4521],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6479:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l="\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210",u={unversionedId:"gen3-co-xd/schemas/stationary",id:"gen3-co-xd/schemas/stationary",title:"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210",description:"\u57fa\u672c\u5f62",source:"@site/docs/gen3-co-xd/schemas/stationary.md",sourceDirName:"gen3-co-xd/schemas",slug:"/gen3-co-xd/schemas/stationary",permalink:"/rng-wiki/docs/gen3-co-xd/schemas/stationary",draft:!1,editUrl:"https://github.com/mizuyoukanao/rng-wiki/blob/main/docs/gen3-co-xd/schemas/stationary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BV\u4fdd\u5b58",permalink:"/rng-wiki/docs/gen3-co-xd/battleVideo"},next:{title:"\u91ce\u751f\u751f\u6210",permalink:"/rng-wiki/docs/gen3-co-xd/schemas/wild"}},s={},p=[{value:"\u57fa\u672c\u5f62",id:"\u57fa\u672c\u5f62",level:2},{value:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec",id:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210"},"\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u751f\u6210"),(0,a.kt)("h2",{id:"\u57fa\u672c\u5f62"},"\u57fa\u672c\u5f62"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"LID = getRand()\nHID = getRand()\nPID = LID | (HID << 16)\n// *1\nHAB = getRand()\n// *2\nSCD = getRand()\n\nIVs = {\n  H: HAB & 0x1F,\n  A: (HAB >> 5) & 0x1F,\n  B: (HAB >> 10) & 0x1F,\n  C: (SCD >> 5) & 0x1F,\n  D: (SCD >> 10) & 0x1F,\n  S: SCD & 0x1F\n}\n")),(0,a.kt)("h2",{id:"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec"},"\u5272\u308a\u8fbc\u307f\u306b\u3088\u308b\u4e71\u6570\u306e\u30ba\u30ec"),(0,a.kt)("p",null,"\u500b\u4f53\u751f\u6210\u306e\u9014\u4e2d\u3067\u63cf\u753b\u306e\u5272\u8fbc\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u3002\n\u63cf\u753b\u51e6\u7406\u306b\u306f\u4e71\u6570\u6d88\u8cbb\u304c1\u56de\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u751f\u6210\u3055\u308c\u308b\u500b\u4f53\u3082\u3001\u5272\u8fbc\u304c\u5165\u3089\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u3082\u306e\u3068\u306f\u9055\u3046\u3082\u306e\u306b\u306a\u308b\u3002\n\u4fd7\u306b\u3001\u5272\u308a\u8fbc\u307f\u306e\u5165\u3063\u3066\u3044\u306a\u3044\u30d1\u30bf\u30fc\u30f3\u306f",(0,a.kt)("strong",null,"Method1"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"*1"),"\u306e\u4f4d\u7f6e\u3067\u5272\u8fbc\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u306f",(0,a.kt)("strong",null,"Method2"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"*2"),"\u306e\u4f4d\u7f6e\u3067\u5272\u308a\u8fbc\u307f\u304c\u767a\u751f\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u306f",(0,a.kt)("strong",null,"Method4"),"\u3068\u547c\u3070\u308c\u308b\u3002"),(0,a.kt)("p",null,"\u5272\u8fbc\u304c\u5165\u308b\u306e\u306f\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u9593\u306b\u500b\u4f53\u751f\u6210\u304c\u5b8c\u4e86\u3057\u306a\u304b\u3063\u305f\u3068\u3044\u3046\u3053\u3068\u3067\u3042\u308a\u3001\u500b\u4f53\u751f\u6210\u307e\u3067\u306e\u51e6\u7406\u304c\u91cd\u3044\u307b\u3069\n",(0,a.kt)("inlineCode",{parentName:"p"},"Method1 < Method4 < Method2"),"\n\u3068\u3044\u3046\u98a8\u306b\u751f\u6210\u30d1\u30bf\u30fc\u30f3\u304c\u5909\u52d5\u3059\u308b\u3002\n\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u306e\u5834\u5408\u306f\u91ce\u751f\u3084\u5b75\u5316\u3068\u7570\u306a\u308a\u3001\u500b\u4f53\u751f\u6210\u307e\u3067\u306b\u91cd\u3044\u51e6\u7406\u304c\u5165\u308b\u3053\u3068\u304c\u5c11\u306a\u3044\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u304cMethod1\u3067\u751f\u6210\u3055\u308c\u308b\u3002\n\u3057\u304b\u3057\u3001\u30dd\u30b1\u30e2\u30f3\u30dc\u30c3\u30af\u30b9\u3067RS\u3092\u30d7\u30ec\u30a4\u3059\u308b\u5834\u5408\u306a\u3069\u3001\u3054\u304f\u9650\u3089\u308c\u305f\u72b6\u6cc1\u306b\u304a\u3044\u3066\u306fMethod4\u500b\u4f53\u304c\u751f\u6210\u3055\u308c\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3055\u308c\u3066\u3044\u308b\u3002"),(0,a.kt)("h2",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027"),(0,a.kt)("p",null,"4\u4e16\u4ee3\u4ee5\u964d\u3068\u306f\u7570\u306a\u308a\u30013\u4e16\u4ee3\u3067\u306f\u30b7\u30f3\u30af\u30ed\u306a\u3069\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u7279\u6027\u304c\u56fa\u5b9a\u30b7\u30f3\u30dc\u30eb\u306b\u5bfe\u3057\u3066\u306f\u52b9\u679c\u3092\u767a\u63ee\u3057\u306a\u3044\u3002"))}f.isMDXComponent=!0}}]);