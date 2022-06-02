"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4357],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14394:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={},l="2182 - Construct String With Repeat Limit (Medium)",s={unversionedId:"2100-2199/construct-string-with-repeat-limit-medium",id:"2100-2199/construct-string-with-repeat-limit-medium",title:"2182 - Construct String With Repeat Limit (Medium)",description:"Problem Statement",source:"@site/solutions/2100-2199/2182-construct-string-with-repeat-limit-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/construct-string-with-repeat-limit-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/construct-string-with-repeat-limit-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2182-construct-string-with-repeat-limit-medium.md",tags:[],version:"current",sidebarPosition:2182,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2181 - Merge Nodes in Between Zeros (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/merge-nodes-in-between-zeros-medium"},next:{title:"2183 -  Count Array Pairs Divisible by K (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-array-pairs-divisible-by-k-hard"}},c={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2182---construct-string-with-repeat-limit-medium"},"2182 - Construct String With Repeat Limit (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"repeatLimit"),". Construct a new string ",(0,i.kt)("inlineCode",{parentName:"p"},"repeatLimitedString")," using the characters of ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," such that no letter appears ",(0,i.kt)("strong",{parentName:"p"},"more than")," ",(0,i.kt)("inlineCode",{parentName:"p"},"repeatLimit")," times ",(0,i.kt)("strong",{parentName:"p"},"in a row"),". You do ",(0,i.kt)("strong",{parentName:"p"},"not")," have to use all characters from ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"lexicographically largest")," ")," ",(0,i.kt)("inlineCode",{parentName:"p"},"repeatLimitedString")," ",(0,i.kt)("em",{parentName:"p"},"possible"),"."),(0,i.kt)("p",null,"A string ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," is ",(0,i.kt)("strong",{parentName:"p"},"lexicographically larger")," than a string ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," if in the first position where ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," differ, string ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," has a letter that appears later in the alphabet than the corresponding letter in ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),". If the first ",(0,i.kt)("inlineCode",{parentName:"p"},"min(a.length, b.length)")," characters do not differ, then the longer string is the lexicographically larger one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "cczazcc", repeatLimit = 3\nOutput: "zzcccac"\nExplanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".\nThe letter \'a\' appears at most 1 time in a row.\nThe letter \'c\' appears at most 3 times in a row.\nThe letter \'z\' appears at most 2 times in a row.\nHence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.\nThe string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".\nNote that the string "zzcccca" is lexicographically larger but the letter \'c\' appears more than 3 times in a row, so it is not a valid repeatLimitedString.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "aababab", repeatLimit = 2\nOutput: "bbabaa"\nExplanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa". \nThe letter \'a\' appears at most 2 times in a row.\nThe letter \'b\' appears at most 2 times in a row.\nHence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.\nThe string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".\nNote that the string "bbabaaa" is lexicographically larger but the letter \'a\' appears more than 2 times in a row, so it is not a valid repeatLimitedString.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= repeatLimit <= s.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," consists of lowercase English letters.")),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0}}]);