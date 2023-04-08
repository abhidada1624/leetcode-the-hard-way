"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/optimal-partition-of-string/"},a="2405 - Optimal Partition of String (Medium)",s={unversionedId:"2400-2499/optimal-partition-of-string-medium",id:"2400-2499/optimal-partition-of-string-medium",title:"2405 - Optimal Partition of String (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/optimal-partition-of-string/",source:"@site/solutions/2400-2499/2405-optimal-partition-of-string-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/optimal-partition-of-string-medium",permalink:"/solutions/2400-2499/optimal-partition-of-string-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2405-optimal-partition-of-string-medium.md",tags:[],version:"current",sidebarPosition:2405,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/optimal-partition-of-string/"},sidebar:"tutorialSidebar",previous:{title:"2404 - Most Frequent Even Element (Easy)",permalink:"/solutions/2400-2499/most-frequent-even-element-easy"},next:{title:"2406 - Divide Intervals Into Minimum Number of Groups (Medium)",permalink:"/solutions/2400-2499/divide-intervals-into-minimum-number-of-groups-medium"}},p={},l=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],u=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const m={toc:l},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2405---optimal-partition-of-string-medium"},"2405 - Optimal Partition of String (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", partition the string into one or more ",(0,o.kt)("strong",{parentName:"p"},"substrings")," such that the characters in each substring are ",(0,o.kt)("strong",{parentName:"p"},"unique"),". That is, no letter appears in a single substring more than ",(0,o.kt)("strong",{parentName:"p"},"once"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum")," number of substrings in such a partition.")),(0,o.kt)("p",null,"Note that each character should belong to exactly one substring in a partition."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "abacaba"\nOutput: 4\nExplanation:\nTwo possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").\nIt can be shown that 4 is the minimum number of substrings needed.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "ssssss"\nOutput: 6\nExplanation:\nThe only valid partition is ("s","s","s","s","s","s").\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 105")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of only English lowercase letters.")),(0,o.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,o.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // the idea is to keep each partition as long as possible \n    // so that we could have the minimum number of substrings\n    int partitionString(string s) {\n        // the minimum number of substring is at least 1\n        // e.g. \"a\"\n        int ans = 1;\n        // cnt is used to count the frequency of each character\n        vector<int> cnt(26);\n        // for each character\n        for (auto& c : s) {\n            // we check if it exists before\n            // if so, then we should create a new partition\n            // because no letter appears in a single substring more than once\n            if (cnt[c - 'a']) {\n                // reset the counter\n                cnt = vector<int>(26);\n                // create a new partition\n                ans++;\n            }\n            // increase the frequency of the current character by 1\n            cnt[c - 'a']++;\n        } \n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0}}]);