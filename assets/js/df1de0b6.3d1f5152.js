"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||b[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",tags:["Sorting"]},a="1356 - Sort Integers by The Number of 1 Bits (Easy)",s={unversionedId:"1300-1399/sort-integers-by-the-number-of-1-bits-easy",id:"1300-1399/sort-integers-by-the-number-of-1-bits-easy",title:"1356 - Sort Integers by The Number of 1 Bits (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",source:"@site/solutions/1300-1399/1356-sort-integers-by-the-number-of-1-bits-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/sort-integers-by-the-number-of-1-bits-easy",permalink:"/solutions/1300-1399/sort-integers-by-the-number-of-1-bits-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1356-sort-integers-by-the-number-of-1-bits-easy.md",tags:[{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:1356,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",tags:["Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1349 - Maximum Students Taking Exam (Hard)",permalink:"/solutions/1300-1399/maximum-students-taking-exam-hard"},next:{title:"1359 - Count All Valid Pickup and Delivery Options (Hard)",permalink:"/solutions/1300-1399/count-all-valid-pickup-and-delivery-options-hard"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + __builtin_popcount",id:"approach-1-sorting--__builtin_popcount",level:2}],u=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const b={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1356---sort-integers-by-the-number-of-1-bits-easy"},"1356 - Sort Integers by The Number of 1 Bits (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits"},"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),". Sort the integers in the array in ascending order by the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"'s in their binary representation and in case of two or more integers have the same number of ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"'s you have to sort them in ascending order."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the array after sorting it"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [0,1,2,3,4,5,6,7,8]\nOutput: [0,1,2,4,8,3,5,6,7]\nExplantion: [0] is the only integer with 0 bits.\n[1,2,4,8] all have 1 bit.\n[3,5,6] have 2 bits.\n[7] has 3 bits.\nThe sorted array by bits is [0,1,2,4,8,3,5,6,7]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]\nOutput: [1,2,4,8,16,32,64,128,256,512,1024]\nExplantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= arr.length <= 500")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= arr[i] <= 10^4"))),(0,o.kt)("h2",{id:"approach-1-sorting--__builtin_popcount"},"Approach 1: Sorting + __builtin_popcount"),(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> sortByBits(vector<int>& arr) {\n        sort(arr.begin(), arr.end(), [&](int a, int b){\n            // __builtin_popcount(x) returns the number of 1-bits set in an int x.\n            int x = __builtin_popcount(a), y = __builtin_popcount(b);\n            return x == y ? \n                // in case of two or more integers have the same number of 1's you have to sort them in ascending order\n                a < b : \n                // else sort the integers in the array in ascending order by the number of 1's in their binary representation \n                x < y;\n        });\n        return arr;\n    }\n};\n")))}d.isMDXComponent=!0}}]);