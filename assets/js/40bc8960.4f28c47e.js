"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(o,".").concat(b)]||m[b]||c[b]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},11531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",hide_table_of_contents:!1,keywords:["leetcode","template","bit manipulation"]},s=void 0,l={unversionedId:"bit-manipulation",id:"bit-manipulation",title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",source:"@site/templates/bit-manipulation.md",sourceDirName:".",slug:"/bit-manipulation",permalink:"/templates/bit-manipulation",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/bit-manipulation.md",tags:[],version:"current",frontMatter:{title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",hide_table_of_contents:!1,keywords:["leetcode","template","bit manipulation"]},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/templates/binary-search"},next:{title:"Euler Path",permalink:"/templates/euler"}},o={},p=[{value:"Sum of Submask",id:"sum-of-submask",level:3},{value:"Sum of Super Mask",id:"sum-of-super-mask",level:3},{value:"Largest Bit Set",id:"largest-bit-set",level:3},{value:"Lowest Bit Set",id:"lowest-bit-set",level:3},{value:"Index of Lowest Bit Set",id:"index-of-lowest-bit-set",level:3},{value:"Enumerating all submasks of a given mask",id:"enumerating-all-submasks-of-a-given-mask",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Tabs"),c=u("TabItem"),b={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"sum-of-submask"},"Sum of Submask"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_out, typename T_in>\nvector<T_out> submask_sums(int n, const vector<T_in> &values) {\n    assert(int(values.size()) == 1 << n);\n    vector<T_out> dp(values.begin(), values.end());\n    for (int i = 0; i < n; i++)\n        for (int base = 0; base < 1 << n; base += 1 << (i + 1))\n            for (int mask = base; mask < base + (1 << i); mask++)\n                dp[mask + (1 << i)] += dp[mask];\n    return dp;\n}\n")))),(0,r.kt)("h3",{id:"sum-of-super-mask"},"Sum of Super Mask"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_out, typename T_in>\nvector<T_out> supermask_sums(int n, vector<T_in> values) {\n    reverse(values.begin(), values.end());\n    vector<T_out> result = submask_sums<T_out>(n, values);\n    reverse(result.begin(), result.end());\n    return result;\n}\n")))),(0,r.kt)("h3",{id:"largest-bit-set"},"Largest Bit Set"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int largest_bit(int x) {\n    return x == 0 ? -1 : 31 - __builtin_clz(x);\n}\n")))),(0,r.kt)("h3",{id:"lowest-bit-set"},"Lowest Bit Set"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int lowest_bit(int x) {\n    return x & (-x);\n}\n")))),(0,r.kt)("h3",{id:"index-of-lowest-bit-set"},"Index of Lowest Bit Set"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int lowest_bit_index(int x) {\n    // 1 based\n    // __builtin_ffs(10) = 2 (10[1]0)\n    return __builtin_ffs(x);\n}\n")))),(0,r.kt)("h3",{id:"enumerating-all-submasks-of-a-given-mask"},"Enumerating all submasks of a given mask"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"for (int s = m; s; s = (s - 1) & m) {\n    // use s\n}\n")))))}f.isMDXComponent=!0}}]);