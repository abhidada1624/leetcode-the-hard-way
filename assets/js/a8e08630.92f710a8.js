"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[95922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/rearrange-array-elements-by-sign/"},o="2149 - Rearrange Array Elements by Sign (Medium)",l={unversionedId:"2100-2199/rearrange-array-elements-by-sign-medium",id:"2100-2199/rearrange-array-elements-by-sign-medium",title:"2149 - Rearrange Array Elements by Sign (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/rearrange-array-elements-by-sign/",source:"@site/solutions/2100-2199/2149-rearrange-array-elements-by-sign-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/rearrange-array-elements-by-sign-medium",permalink:"/solutions/2100-2199/rearrange-array-elements-by-sign-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2149-rearrange-array-elements-by-sign-medium.md",tags:[],version:"current",sidebarPosition:2149,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/rearrange-array-elements-by-sign/"},sidebar:"tutorialSidebar",previous:{title:"2148 - Count Elements With Strictly Smaller and Greater Elements (Easy)",permalink:"/solutions/2100-2199/count-elements-with-strictly-smaller-and-greater-elements-easy"},next:{title:"2150 - Find All Lonely Numbers in the Array (Medium)",permalink:"/solutions/2100-2199/find-all-lonely-numbers-in-the-array-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Split and Combine",id:"approach-1-split-and-combine",level:2}],m=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:p},g="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2149---rearrange-array-elements-by-sign-medium"},"2149 - Rearrange Array Elements by Sign (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rearrange-array-elements-by-sign/"},"https://leetcode.com/problems/rearrange-array-elements-by-sign/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,a.kt)("strong",{parentName:"p"},"even")," length consisting of an ",(0,a.kt)("strong",{parentName:"p"},"equal")," number of positive and negative integers."),(0,a.kt)("p",null,"You should ",(0,a.kt)("strong",{parentName:"p"},"rearrange")," the elements of ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," such that the modified array follows the given conditions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Every ",(0,a.kt)("strong",{parentName:"li"},"consecutive pair")," of integers have ",(0,a.kt)("strong",{parentName:"li"},"opposite signs"),"."),(0,a.kt)("li",{parentName:"ol"},"For all integers with the same sign, the ",(0,a.kt)("strong",{parentName:"li"},"order")," in which they were present in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," is ",(0,a.kt)("strong",{parentName:"li"},"preserved"),"."),(0,a.kt)("li",{parentName:"ol"},"The rearranged array begins with a positive integer.")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the modified array after rearranging the elements to satisfy the aforementioned conditions"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,1,-2,-5,2,-4]\nOutput: [3,-2,1,-5,2,-4]\nExplanation:\nThe positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].\nThe only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].\nOther ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [-1,1]\nOutput: [1,-1]\nExplanation:\n1 is the only positive integer and -1 the only negative integer in nums.\nSo nums is rearranged to [1,-1].\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 2 * 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums.length")," is ",(0,a.kt)("strong",{parentName:"li"},"even")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= |nums[i]| <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums")," consists of ",(0,a.kt)("strong",{parentName:"li"},"equal")," number of positive and negative integers.")),(0,a.kt)("h2",{id:"approach-1-split-and-combine"},"Approach 1: Split and Combine"),(0,a.kt)("p",null,"The idea is to split the input into two vectors - positive and negative. Then iterate both vector to build the final answer."),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> rearrangeArray(vector<int>& nums) {\n        vector<int> pos, neg;\n        for (auto x : nums) {\n            if (x >= 0) pos.push_back(x);\n            else neg.push_back(x);\n        }\n        int i = 0, j = 0, n = pos.size(), m = neg.size();\n        vector<int> ans;\n        while (i < n && j < m) {\n            ans.push_back(pos[i++]);\n            ans.push_back(neg[j++]);\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0}}]);