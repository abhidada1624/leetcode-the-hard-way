"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7382],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71986:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(8539),["components"]),l={description:"Author: @wingkwong | https://leetcode.com/problems/arranging-coins/"},s="0441 - Arranging Coins (Easy)",p={unversionedId:"0400-0499/arranging-coins-easy",id:"0400-0499/arranging-coins-easy",title:"0441 - Arranging Coins (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/arranging-coins/",source:"@site/solutions/0400-0499/0441-arranging-coins-easy.md",sourceDirName:"0400-0499",slug:"/0400-0499/arranging-coins-easy",permalink:"/leetcode-the-hard-way/solutions/0400-0499/arranging-coins-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0400-0499/0441-arranging-coins-easy.md",tags:[],version:"current",sidebarPosition:441,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/arranging-coins/"},sidebar:"tutorialSidebar",previous:{title:"0438 - Find All Anagrams in a String (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/find-all-anagrams-in-a-string-medium"},next:{title:"0452 - Minimum Number of Arrows to Burst Balloons (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/minimum-number-of-arrows-to-burst-balloons-medium"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}],m={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0441---arranging-coins-easy"},"0441 - Arranging Coins (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/arranging-coins/"},"https://leetcode.com/problems/arranging-coins/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You have ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," coins and you want to build a staircase with these coins. The staircase consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," rows where the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," row has exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," coins. The last row of the staircase ",(0,o.kt)("strong",{parentName:"p"},"may be")," incomplete."),(0,o.kt)("p",null,"Given the integer ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,o.kt)("em",{parentName:"p"},"the number of ",(0,o.kt)("strong",{parentName:"em"},"complete rows")," of the staircase you will build"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5\nOutput: 2\nExplanation: Because the 3rd row is incomplete, we return 2.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 8\nOutput: 3\nExplanation: Because the 4th row is incomplete, we return 3.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-math"},"Approach 1: Math"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int arrangeCoins(int n) {\n        // Gauss' formula\n        // k * (k + 1) / 2 <= n\n        // k * (k + 1 / 2) ^ 2 - 1 / 4 <= n\n        // k = sqrt(2 * n + 1 / 4) - 1 / 2\n        return sqrt(2 *(long long) n + 0.25) - 0.5;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-binary-search"},"Approach 2: Binary Search"),(0,o.kt)("p",null,"Prerequisite: ",(0,o.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int arrangeCoins(int n) {\n        // init possible range\n        long long l = 1, r = n;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the upper one\n            long long m = l + (r - l + 1) / 2;\n            // for m rows, how many coins can be put?\n            long long total = m * (m + 1) / 2;\n            // exclude m\n            if (n < total) r = m - 1;\n            // include m\n            else l = m;\n        } \n        return l;\n    }\n};\n")))}g.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);