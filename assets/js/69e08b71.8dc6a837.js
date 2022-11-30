"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[59905],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=o(t),h=s,k=N["".concat(i,".").concat(h)]||N[h]||c[h]||m;return t?n.createElement(k,r(r({ref:e},l),{},{components:t})):n.createElement(k,r({ref:e},l))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},55115:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=t(87462),s=t(63366),m=(t(67294),t(3905)),r=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/permutation-in-string/"},i="0567 - Permutation in String (Medium)",o={unversionedId:"0500-0599/permutation-in-string-medium",id:"0500-0599/permutation-in-string-medium",title:"0567 - Permutation in String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/permutation-in-string/",source:"@site/solutions/0500-0599/0567-permutation-in-string-medium.md",sourceDirName:"0500-0599",slug:"/0500-0599/permutation-in-string-medium",permalink:"/leetcode-the-hard-way/solutions/0500-0599/permutation-in-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0567-permutation-in-string-medium.md",tags:[],version:"current",sidebarPosition:567,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/permutation-in-string/"},sidebar:"tutorialSidebar",previous:{title:"0560 - Subarray Sum Equals K (Medium)",permalink:"/leetcode-the-hard-way/solutions/0500-0599/subarray-sum-equals-k-medium"},next:{title:"0572 - Subtree of Another Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0500-0599/subtree-of-another-tree-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2},{value:"Approach 2: Sliding Window - Track Matches",id:"approach-2-sliding-window---track-matches",level:2}],N=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)}},h=N("Tabs"),k=N("TabItem"),w=N("SolutionAuthor"),u={toc:c};function d(a){var e=a.components,t=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"0567---permutation-in-string-medium"},"0567 - Permutation in String (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/permutation-in-string/"},"https://leetcode.com/problems/permutation-in-string/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"Given two strings ",(0,m.kt)("inlineCode",{parentName:"p"},"s1")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"s2"),", return ",(0,m.kt)("inlineCode",{parentName:"p"},"true")," ",(0,m.kt)("em",{parentName:"p"},"if")," ",(0,m.kt)("inlineCode",{parentName:"p"},"s2")," ",(0,m.kt)("em",{parentName:"p"},"contains a permutation of")," ",(0,m.kt)("inlineCode",{parentName:"p"},"s1"),(0,m.kt)("em",{parentName:"p"},", or")," ",(0,m.kt)("inlineCode",{parentName:"p"},"false")," ",(0,m.kt)("em",{parentName:"p"},"otherwise"),"."),(0,m.kt)("p",null,"In other words, return ",(0,m.kt)("inlineCode",{parentName:"p"},"true")," if one of ",(0,m.kt)("inlineCode",{parentName:"p"},"s1"),"'s permutations is the substring of ",(0,m.kt)("inlineCode",{parentName:"p"},"s2"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},'Input: s1 = "ab", s2 = "eidbaooo"\nOutput: true\nExplanation: s2 contains one permutation of s1 ("ba").\n')),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},'Input: s1 = "ab", s2 = "eidboaoo"\nOutput: false \n')),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= s1.length, s2.length <= 10^4")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"s1")," and ",(0,m.kt)("inlineCode",{parentName:"li"},"s2")," consist of lowercase English letters.")),(0,m.kt)("h2",{id:"approach-1-sliding-window"},"Approach 1: Sliding Window"),(0,m.kt)("p",null,"The solution is almost same as ",(0,m.kt)("a",{parentName:"p",href:"../0400-0499/find-all-anagrams-in-a-string-medium"},"0438 - Find All Anagrams in a String (Medium)"),". The general idea is to count the character occurrences as the string order doesn't matter, and check if there is a window with the same length as ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," contains the same set of occurrences."),(0,m.kt)("p",null,"We first use a hash map ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," count the occurrences for each character in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),". Then we apply sliding window. We use a pointer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"i")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," to track the window starting point and use a pointer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," to track the window ending point in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"))))),". We increase the pointer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," to count the occurrences in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2")))))," and put the result in another hash map ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"w")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"now")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w")))))," until the window size ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j - i + 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," is equal to the length of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),". Then we compare if both hash maps are identical. If so, return the answer immediately. If not, then we need to remove the leftmost element within this window. Continue the same process until the pointer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"i")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," reaches the end of the string."),(0,m.kt)(h,{mdxType:"Tabs"},(0,m.kt)(k,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,m.kt)(w,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        // target for s1, now for s2\n        vector<int> target(26), now(26);\n        int n = (int) s1.size(), m = (int) s2.size(), j = 0;\n        // count the occurrences for characters in s1\n        for (auto x : s1) target[x - 'a']++;\n        // apply sliding window. pointer i is the starting position\n        for (int i = 0; i < m; i++) {\n          // pointer j is the ending position \n          // j - i + 1 = window size\n          // we count the occurrences for characters in s2 within the window\n          while (j < m && j - i + 1 <= n) now[s2[j++] - 'a']++;\n          // check if both hash maps are same or not\n          // if they are same, return true\n          if (now == target) return true;\n          // if they are not same, remove the leftmost element and move forward\n          now[s2[i] - 'a']--;\n      }\n      // no permutation is the substring of s2. return false here\n      return false;\n    }\n};\n")),(0,m.kt)("p",null,"We can also do it without pointer ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"j")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        // target for s1, now for s2\n        vector<int> target(26), now(26);\n        int n = (int) s1.size(), m = (int) s2.size();\n        // count the occurrences for characters in s1\n        for (auto x : s1) target[x - 'a']++;\n        for (int i = 0; i < m; i++) {\n            // count the occurrences for characters in s2\n            now[s2[i] - 'a']++;\n            // remove the leftmost element in the window\n            if (i >= n) now[s2[i - n] - 'a']--;\n            // check both hash maps are same\n            if (now == target) {\n                return true;\n            }\n        }\n        // no permutation is the substring of s2. return false here\n        return false;\n    }\n};\n")))),(0,m.kt)("h2",{id:"approach-2-sliding-window---track-matches"},"Approach 2: Sliding Window - Track Matches"),(0,m.kt)("p",null,"Similar to Approach 1 but with a slight improvement. We will still create a sliding window, and a hash map to count the characters in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),". But, instead of creating a second hash map to count the characters in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"))))),", we will use the first hash map, and just decrement the count every time a character comes into our window, and increment a ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"matches")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es")))))," variable when ever the counter's character count for that character reaches 0. (Must also then decrement ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"matches")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es")))))," when the character count is no longer 0). Thus removing the need to do a worst case, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"26"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(26)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"26"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," check of both counters on each iteration to check that they are equal."),(0,m.kt)("p",null,"Time Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n+m)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the length of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"2")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s2")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"))))),", and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," is the length of ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,m.kt)("p",null,"Space Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(c)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"c")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))," is the unique number of characters in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," to create our hash map."),(0,m.kt)(h,{mdxType:"Tabs"},(0,m.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,m.kt)(w,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        # We are going to create a counter to count the letters of s1, then\n        # as we come accross them in s2, decrement them. If we ever reach\n        # a point, where all out values in the counter reach 0, we know we\n        # have a window with all the proper character in it and can return True.\n        # 1. Build a hash map that contains count of all characters in s1.\n        # Note: we could also use collections.Counter(s1) as a python built\n        # in, both should take O(m) time, where m is the length of s1.\n        counter = {}\n        for ch in s1:\n            if ch not in counter:\n                counter[ch] = 0\n            counter[ch] += 1\n        # Initialize variables to track number of matches, that our window\n        # has with s1, and window_size, length of s1.\n        matches = 0\n        window_size = len(s1)\n        # Loop through all the letters in s2, tracking i, the index and ch\n        # which is the character directly coming into our sliding window.\n        for i, ch in enumerate(s2):\n            # check that the incoming character is a character in our counter.\n            if ch in counter:\n                # decrement the counter, as it matches with our window.\n                counter[ch] -= 1\n                # if number of characters reaches 0, we know we have the same amount\n                # of characters in s1, as we do our window sliding across s2. \n                if counter[ch] == 0:\n                    # So we increment matches.\n                    matches += 1\n            # Check that window we created is proper size to have letters start leaving window.\n            if i >= window_size:\n                # Set variable to left character, which is character leaving the window.\n                left_ch = s2[i-window_size]\n                # Check that the leaving character is in our counter, if not, we don\'t need to do anything.\n                if left_ch in counter:\n                    # Leaving character is in s1, so now we check if our count of characters is 0.\n                    # If it is 0, we know that the leaving character caused our\n                    # window to no longer have same number of ch as s1. \n                    if counter[left_ch] == 0:\n                        # So we decrement matches.\n                        matches -= 1\n                    # Increment counter, since the letter we needed, left the window.\n                    counter[left_ch] += 1\n            # check that the number of matches is equal to the size of our counter.\n            # Note we use len(counter) as string "aabbcc" produce a counter of size 3.\n            if matches == len(counter):\n                return True\n        # We made it through without triggering true, return False.\n        return False\n')))))}d.isMDXComponent=!0}}]);