"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},i="0421 - Maximum XOR of Two Numbers in an Array",m={unversionedId:"0400-0499/maximum-xor-of-two-numbers-in-an-array",id:"0400-0499/maximum-xor-of-two-numbers-in-an-array",title:"0421 - Maximum XOR of Two Numbers in an Array",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",source:"@site/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md",sourceDirName:"0400-0499",slug:"/0400-0499/maximum-xor-of-two-numbers-in-an-array",permalink:"/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md",tags:[],version:"current",sidebarPosition:421,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"0417 - Pacific Atlantic Water Flow (Medium)",permalink:"/solutions/0400-0499/pacific-atlantic-water-flow-medium"},next:{title:"0424 - Longest Repeating Character Replacement (Medium)",permalink:"/solutions/0400-0499/longest-repeating-character-replacement-medium"}},l={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking + Set + Two Sum Idea",id:"approach-1-bit-masking--set--two-sum-idea",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0421---maximum-xor-of-two-numbers-in-an-array"},"0421 - Maximum XOR of Two Numbers in an Array"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,a.kt)("em",{parentName:"p"},"the maximum result of")," ",(0,a.kt)("inlineCode",{parentName:"p"},"nums[i] XOR nums[j]"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"0 <= i <= j < n"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,10,5,25,2,8]\nOutput: 28\nExplanation: The maximum result is 5 XOR 25 = 28.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]\nOutput: 127 \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 2 * 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 2^31 - 1"))),(0,a.kt)("h2",{id:"approach-1-bit-masking--set--two-sum-idea"},"Approach 1: Bit Masking + Set + Two Sum Idea"),(0,a.kt)("p",null,"In order to maximise the answer, we can construct the max XOR from the leftmost bit. The best answer is always all bits set. Hence, we can check bit by bit. We need to find two numbers such that its XOR starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"1000...000"),", then find ",(0,a.kt)("inlineCode",{parentName:"p"},"1100..000,")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"1110...000"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"1111...000")," and till ",(0,a.kt)("inlineCode",{parentName:"p"},"1111...111"),". We build each mask to extract the prefix of length ",(0,a.kt)("inlineCode",{parentName:"p"},"(L - i)")," in binary representation of each number by using ",(0,a.kt)("inlineCode",{parentName:"p"},"num & mask"),". Then apply Two Sum idea, if the complement exists in the set, then we can update answer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findMaximumXOR(vector<int>& nums) {\n        int ans = 0, mask = 0;\n        for(int i = 31; i >= 0; i--){\n           unordered_set<int> s;\n            mask |= (1 << i);\n            for (auto x : nums) s.insert(mask & x);\n            int best = ans | (1 << i);\n            for(auto pref : s){\n                if(s.find(pref ^ best) != s.end()){\n                    ans = best;\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}c.isMDXComponent=!0}}]);