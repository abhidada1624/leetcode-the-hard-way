"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72974],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(d,s(s({ref:t},l),{},{components:n})):a.createElement(d,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a,r=n(87462),o=n(63366),s=(n(67294),n(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/backspace-string-compare/"},c="0844 - Backspace String Compare (Easy)",l={unversionedId:"0800-0899/backspace-string-compare-easy",id:"0800-0899/backspace-string-compare-easy",title:"0844 - Backspace String Compare (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/backspace-string-compare/",source:"@site/solutions/0800-0899/0844-backspace-string-compare-easy.md",sourceDirName:"0800-0899",slug:"/0800-0899/backspace-string-compare-easy",permalink:"/leetcode-the-hard-way/solutions/0800-0899/backspace-string-compare-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0844-backspace-string-compare-easy.md",tags:[],version:"current",sidebarPosition:844,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/backspace-string-compare/"},sidebar:"tutorialSidebar",previous:{title:"0841 - Keys and Rooms (Medium)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/keys-and-rooms-medium"},next:{title:"0847 - Shortest Path Visiting All Nodes (Hard)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/shortest-path-visiting-all-nodes-hard"}},m={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],k=(a="SolutionAuthor",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0844---backspace-string-compare-easy"},"0844 - Backspace String Compare (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/backspace-string-compare/"},"https://leetcode.com/problems/backspace-string-compare/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given two strings ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"t"),", return ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," ",(0,s.kt)("em",{parentName:"p"},"if they are equal when both are typed into empty text editors"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"'#'")," means a backspace character."),(0,s.kt)("p",null,"Note that after backspacing an empty text, the text will continue empty."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "ab#c", t = "ad#c"\nOutput: true\nExplanation: Both s and t become "ac".\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "ab##", t = "c#d#"\nOutput: true\nExplanation: Both s and t become "".\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: s = "a#c", t = "b"\nOutput: false\nExplanation: s becomes "c" while t becomes "b".\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= s.length, t.length <= 200")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"s")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"t")," only contain lowercase letters and ",(0,s.kt)("inlineCode",{parentName:"li"},"'#'")," characters.")),(0,s.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,s.kt)("p",null,"We build the final string for ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". If we see #, then we can only backspace if the final string is not empty. Otherwise, we add the character to the final string. Since we need to do the same thing on both string, it's better to write a function to build the string."),(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string process(string s) {\n        string res;\n        for (auto x : s) {\n            // include this character to final string\n            if (x != '#') res.push_back(x);\n            // pop the previous character if possible\n            else if (res.size()) res.pop_back();\n        }\n        return res;\n    }\n    bool backspaceCompare(string s, string t) {\n        // check if both are same after processed\n        return process(s) == process(t);\n    }\n};\n")))}h.isMDXComponent=!0}}]);