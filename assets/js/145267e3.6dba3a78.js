"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,f=s["".concat(m,".").concat(d)]||s[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"},i="2571 - Minimum Operations to Reduce an Integer to 0 (Easy)",p={unversionedId:"2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",id:"2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",title:"2571 - Minimum Operations to Reduce an Integer to 0 (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/",source:"@site/solutions/2500-2599/2571-minimum-operations-to-reduce-an-integer-to-0-easy.md",sourceDirName:"2500-2599",slug:"/2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",permalink:"/solutions/2500-2599/minimum-operations-to-reduce-an-integer-to-0-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2571-minimum-operations-to-reduce-an-integer-to-0-easy.md",tags:[],version:"current",sidebarPosition:2571,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"},sidebar:"tutorialSidebar",previous:{title:"2535 - Difference Between Element Sum and Digit Sum of an Array (Easy)",permalink:"/solutions/2500-2599/difference-between-element-sum-and-digit-sum-of-an-array-easy"}},m={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=u("Tabs"),c=u("TabItem"),d=u("SolutionAuthor"),f={toc:l},g="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2571---minimum-operations-to-reduce-an-integer-to-0-easy"},"2571 - Minimum Operations to Reduce an Integer to 0 (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/"},"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a positive integer ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", you can do the following operation ",(0,o.kt)("strong",{parentName:"p"},"any")," number of times:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add or subtract a ",(0,o.kt)("strong",{parentName:"li"},"power")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"n"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum")," number of operations to make"),(0,o.kt)("inlineCode",{parentName:"p"},"n"),(0,o.kt)("em",{parentName:"p"},"equal to"),(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("p",null,"A number ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is power of ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"x == 2i"),"\xa0where ",(0,o.kt)("inlineCode",{parentName:"p"},"i >= 0"),(0,o.kt)("em",{parentName:"p"},".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 39\nOutput: 3\nExplanation: We can do the following operations:\n- Add 20 = 1 to n, so now n = 40.\n- Subtract 23 = 8 from n, so now n = 32.\n- Subtract 25 = 32 from n, so now n = 0.\nIt can be shown that 3 is the minimum number of operations we need to make n equal to 0.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 54\nOutput: 3\nExplanation: We can do the following operations:\n- Add 21 = 2 to n, so now n = 56.\n- Add 23 = 8 to n, so now n = 64.\n- Subtract 26 = 64 from n, so now n = 0.\nSo the minimum number of operations is 3.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-dp"},"Approach 1: DP"),(0,o.kt)(s,{mdxType:"Tabs"},(0,o.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minOperations(self, n: int) -> int:\n        # precompute power of 2\n        p = {1 << i for i in range(20)}\n        def dp(x):\n            # reach 0 -> 0 operation\n            if x == 0: return 0\n            # if x is a power of 2, \n            # we need 1 operation (i.e. subtract itself)\n            if x in p: return 1\n            # otherwise we either add / subtract the lsb to x\n            # e.g. 0111 -> 1000 -> 0000\n            # e.g. 1001 -> 1000 -> 0000\n            return min(dp(x + (x & -x)), dp(x - (x & -x))) + 1\n        return dp(n)\n")))))}k.isMDXComponent=!0}}]);