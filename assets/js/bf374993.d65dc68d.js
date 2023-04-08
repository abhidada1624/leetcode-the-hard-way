"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[38817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,g=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/largest-palindromic-number/"},a="2384 - Largest Palindromic Number (Medium)",l={unversionedId:"2300-2399/largest-palindromic-number-medium",id:"2300-2399/largest-palindromic-number-medium",title:"2384 - Largest Palindromic Number (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/largest-palindromic-number/",source:"@site/solutions/2300-2399/2384-largest-palindromic-number-medium.md",sourceDirName:"2300-2399",slug:"/2300-2399/largest-palindromic-number-medium",permalink:"/solutions/2300-2399/largest-palindromic-number-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2384-largest-palindromic-number-medium.md",tags:[],version:"current",sidebarPosition:2384,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/largest-palindromic-number/"},sidebar:"tutorialSidebar",previous:{title:"2383 - Minimum Hours of Training to Win a Competition (Easy)",permalink:"/solutions/2300-2399/minimum-hours-of-training-to-win-a-competition-easy"},next:{title:"2392 - Build a Matrix With Conditions (Hard)",permalink:"/solutions/2300-2399/build-a-matrix-with-conditions-hard"}},u={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting and Building String",id:"approach-1-counting-and-building-string",level:2}],m=(p="SolutionAuthor",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const c={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2384---largest-palindromic-number-medium"},"2384 - Largest Palindromic Number (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"num")," consisting of digits only."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"largest palindromic")," integer (in the form of a string) that can be formed using digits taken from"),(0,i.kt)("inlineCode",{parentName:"p"},"num"),". It should not contain ",(0,i.kt)("strong",{parentName:"p"},"leading zeroes"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You do ",(0,i.kt)("strong",{parentName:"li"},"not")," need to use all the digits of ",(0,i.kt)("inlineCode",{parentName:"li"},"num"),", but you must use ",(0,i.kt)("strong",{parentName:"li"},"at least")," one digit."),(0,i.kt)("li",{parentName:"ul"},"The digits can be reordered.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: num = "444947137"\nOutput: "7449447"\nExplanation: \nUse the digits "4449477" from "444947137" to form the palindromic integer "7449447".\nIt can be shown that "7449447" is the largest palindromic integer that can be formed.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: num = "00009"\nOutput: "9"\nExplanation: \nIt can be shown that "9" is the largest palindromic integer that can be formed.\nNote that the integer returned should not contain leading zeroes.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= num.length <= 105")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num")," consists of digits.")),(0,i.kt)("h2",{id:"approach-1-counting-and-building-string"},"Approach 1: Counting and Building String"),(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string largestPalindromic(string num) {\n        string l, m, r;\n        // count the frequency for each digit\n        int cnt[10] = {0};\n        for (auto &x : num) cnt[x - '0']++;\n        // build the left part\n        for (int i = 9; i >= 1; i--) {\n            // we need at least a frequency of 2\n            if (cnt[i] >= 2) {\n                // we take half of it because it is only the left part\n                l += string(cnt[i] / 2, i + '0');\n            }\n        }\n        // we can put some zeros as well for cases like 0099 -> 9009\n        if (cnt[0] >= 2) {\n            // however, we only do it when we've used some digits \n            // think of cases like 9\n            if (l.size()) {\n                l += string(cnt[0] / 2, '0');    \n            }\n        }\n        // build the middle part\n        for (int i = 9; i >= 0; i--) {\n            // we want to add the largest digit with odd count\n            if (cnt[i] & 1) {\n                m += i + '0';\n                // since we just need one, we can break here\n                break;\n            }\n        }\n        // handle case like 0000000\n        if (l.size() == 0 && m.size() == 0) {\n            return \"0\";\n        }\n        // build the right part\n        r = l;\n        // which is the mirror of the left part\n        reverse(r.begin(), r.end());\n        // return the final string\n        return l + m + r;\n    }\n};\n")))}g.isMDXComponent=!0}}]);