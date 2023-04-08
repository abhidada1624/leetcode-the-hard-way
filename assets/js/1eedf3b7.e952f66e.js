"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[91990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/adding-spaces-to-a-string/"},o="2109 - Adding Spaces to a String (Medium)",s={unversionedId:"2100-2199/adding-spaces-to-a-string-medium",id:"2100-2199/adding-spaces-to-a-string-medium",title:"2109 - Adding Spaces to a String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/adding-spaces-to-a-string/",source:"@site/solutions/2100-2199/2109-adding-spaces-to-a-string-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/adding-spaces-to-a-string-medium",permalink:"/solutions/2100-2199/adding-spaces-to-a-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2109-adding-spaces-to-a-string-medium.md",tags:[],version:"current",sidebarPosition:2109,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/adding-spaces-to-a-string/"},sidebar:"tutorialSidebar",previous:{title:"2108 - Find First Palindromic String in the Array (Easy)",permalink:"/solutions/2100-2199/find-first-palindromic-string-in-the-array-easy"},next:{title:"2110 - Number of Smooth Descent Periods of a Stock (Medium)",permalink:"/solutions/2100-2199/number-of-smooth-descent-periods-of-a-stock-medium"}},p={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}],c=(d="SolutionAuthor",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2109---adding-spaces-to-a-string-medium"},"2109 - Adding Spaces to a String (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/adding-spaces-to-a-string/"},"https://leetcode.com/problems/adding-spaces-to-a-string/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," string ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," and a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"spaces")," that describes the indices in the original string where spaces will be added. Each space should be inserted ",(0,a.kt)("strong",{parentName:"p"},"before")," the character at the given index."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For example, given ",(0,a.kt)("inlineCode",{parentName:"li"},'s = "EnjoyYourCoffee"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},"spaces = [5, 9]"),", we place spaces before ",(0,a.kt)("inlineCode",{parentName:"li"},"'Y'")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"'C'"),", which are at indices ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"9")," respectively. Thus, we obtain ",(0,a.kt)("inlineCode",{parentName:"li"},'"Enjoy`` '),(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Y")),(0,a.kt)("inlineCode",{parentName:"li"},"our`` "),(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"C")),(0,a.kt)("inlineCode",{parentName:"li"},'offee"'),".")),(0,a.kt)("p",null,"Return *",(0,a.kt)("strong",{parentName:"p"},"* _the modified string "),"after** the spaces have been added._"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]\nOutput: "Leetcode Helps Me Learn"\nExplanation: \nThe indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".\nWe then place spaces before those characters.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "icodeinpython", spaces = [1,5,7,9]\nOutput: "i code in py thon"\nExplanation:\nThe indices 1, 5, 7, and 9 correspond to the underlined characters in "icodeinpython".\nWe then place spaces before those characters.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "spacing", spaces = [0,1,2,3,4,5,6]\nOutput: " s p a c i n g"\nExplanation:\nWe are also able to place spaces before the first character of the string.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 3 * 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," consists only of lowercase and uppercase English letters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= spaces.length <= 3 * 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= spaces[i] <= s.length - 1")),(0,a.kt)("li",{parentName:"ul"},"All the values of ",(0,a.kt)("inlineCode",{parentName:"li"},"spaces")," are ",(0,a.kt)("strong",{parentName:"li"},"strictly increasing"),".")),(0,a.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,a.kt)("p",null,"We iterate the string using pointer ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," and iterate spaces using pointer ",(0,a.kt)("inlineCode",{parentName:"p"},"j"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"spaces[j]")," , then we need to add a space there and increase pointer ",(0,a.kt)("inlineCode",{parentName:"p"},"j"),"."),(0,a.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string addSpaces(string s, vector<int>& spaces) {\n        string ans;\n        int j = 0, m = spaces.size();\n        for (int i = 0; i < s.size(); i++) {\n            if (j < m && i == spaces[j]) ans += " ", j++;\n            ans += s[i];\n        }\n        return ans;\n    }\n};\n')))}g.isMDXComponent=!0}}]);