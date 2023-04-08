"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85391],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",tags:["Array"]},i="0896 - Monotonic Array (Easy)",p={unversionedId:"0800-0899/monotonic-array-easy",id:"0800-0899/monotonic-array-easy",title:"0896 - Monotonic Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",source:"@site/solutions/0800-0899/0896-monotonic-array-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/monotonic-array-easy",permalink:"/solutions/0800-0899/monotonic-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0896-monotonic-array-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"}],version:"current",sidebarPosition:896,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/monotonic-array/",tags:["Array"]},sidebar:"tutorialSidebar",previous:{title:"0881 - Boats to Save People (Medium)",permalink:"/solutions/0800-0899/boats-to-save-people-medium"},next:{title:"0899 - Orderly Queue (Hard)",permalink:"/solutions/0800-0899/orderly-queue-hard"}},l={},s=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Loops",id:"approach-1-two-loops",level:2},{value:"Approach 2: One Pass",id:"approach-2-one-pass",level:2}],c=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:s},d="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0896---monotonic-array-easy"},"0896 - Monotonic Array (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"An array is ",(0,o.kt)("strong",{parentName:"p"},"monotonic")," if it is either monotone increasing or monotone decreasing."),(0,o.kt)("p",null,"An array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," is monotone increasing if for all ",(0,o.kt)("inlineCode",{parentName:"p"},"i <= j"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i] <= nums[j]"),". An array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," is monotone decreasing if for all ",(0,o.kt)("inlineCode",{parentName:"p"},"i <= j"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i] >= nums[j]"),"."),(0,o.kt)("p",null,"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),(0,o.kt)("em",{parentName:"p"},"if the given array is monotonic, or"),(0,o.kt)("inlineCode",{parentName:"p"},"false"),(0,o.kt)("em",{parentName:"p"},"otherwise"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,2,3]\nOutput: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [6,5,4,4]\nOutput: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2]\nOutput: false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^5 <= nums[i] <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-two-loops"},"Approach 1: Two Loops"),(0,o.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isMonotonic(vector<int>& nums) {\n        int n = nums.size(), ok = 1;\n        // check for monotone increasing\n        for (int i = 1 ; i < n; i++) ok &= nums[i - 1] <= nums[i];\n        // if it is monotone increasing, return true\n        if (ok) return true;\n        // reset ok\n        ok = 1;\n        // check for monotone decreasing\n        for (int i = n - 2; i >= 0; i--) ok &= nums[i] >= nums[i + 1];\n        // return the answer\n        return ok;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-one-pass"},"Approach 2: One Pass"),(0,o.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isMonotonic(vector<int>& nums) {\n        int n = nums.size(), inc = 1, dec = 1;\n        for (int i = 1 ; i < n; i++) {\n            // check for monotone increasing\n            inc &= nums[i - 1] <= nums[i];\n            // check for monotone decreasing\n            dec &= nums[i - 1] >= nums[i]; \n        }\n        // the given is monotonic if either one is true\n        return inc || dec;\n    }\n};\n")))}y.isMDXComponent=!0}}]);