"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[83917],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=o(a),h=r,N=c["".concat(m,".").concat(h)]||c[h]||k[h]||s;return a?n.createElement(N,l(l({ref:t},i),{},{components:a})):n.createElement(N,l({ref:t},i))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=h;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},l="2194 - Cells in a Range on an Excel Sheet (Easy)",p={unversionedId:"2100-2199/cells-in-a-range-on-an-excel-sheet-easy",id:"2100-2199/cells-in-a-range-on-an-excel-sheet-easy",title:"2194 - Cells in a Range on an Excel Sheet (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",source:"@site/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/cells-in-a-range-on-an-excel-sheet-easy",permalink:"/solutions/2100-2199/cells-in-a-range-on-an-excel-sheet-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md",tags:[],version:"current",sidebarPosition:2194,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},sidebar:"tutorialSidebar",previous:{title:"2193 - Minimum Number of Moves to Make Palindrome (Hard)",permalink:"/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard"},next:{title:"2195 - Append K Integers With Minimal Sum (Medium)",permalink:"/solutions/2100-2199/append-k-integers-with-minimal-sum-medium"}},m={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Loops",id:"approach-1-loops",level:2}],i=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const k={toc:o},h="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2194---cells-in-a-range-on-an-excel-sheet-easy"},"2194 - Cells in a Range on an Excel Sheet (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"A cell ",(0,r.kt)("inlineCode",{parentName:"p"},"(r, c)")," of an excel sheet is represented as a string ",(0,r.kt)("inlineCode",{parentName:"p"},'"<col><row>"')," where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<col>")," denotes the column number ",(0,r.kt)("inlineCode",{parentName:"li"},"c")," of the cell. It is represented by ",(0,r.kt)("strong",{parentName:"li"},"alphabetical letters"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"1st")," column is denoted by ",(0,r.kt)("inlineCode",{parentName:"li"},"'A'"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"2nd")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"'B'"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"3rd")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"'C'"),", and so on."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<row>")," is the row number ",(0,r.kt)("inlineCode",{parentName:"li"},"r")," of the cell. The ",(0,r.kt)("inlineCode",{parentName:"li"},"rth")," row is represented by the ",(0,r.kt)("strong",{parentName:"li"},"integer")," ",(0,r.kt)("inlineCode",{parentName:"li"},"r"),".")),(0,r.kt)("p",null,"You are given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," in the format ",(0,r.kt)("inlineCode",{parentName:"p"},'"<col1><row1>:<col2><row2>"'),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<col1>")," represents the column ",(0,r.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<row1>")," represents the row ",(0,r.kt)("inlineCode",{parentName:"p"},"r1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<col2>")," represents the column ",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<row2>")," represents the row ",(0,r.kt)("inlineCode",{parentName:"p"},"r2"),", such that ",(0,r.kt)("inlineCode",{parentName:"p"},"r1 <= r2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"c1 <= c2"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"list of cells"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"(x, y)")," ",(0,r.kt)("em",{parentName:"p"},"such that")," ",(0,r.kt)("inlineCode",{parentName:"p"},"r1 <= x <= r2")," ",(0,r.kt)("em",{parentName:"p"},"and")," ",(0,r.kt)("inlineCode",{parentName:"p"},"c1 <= y <= c2"),". The cells should be represented as ",(0,r.kt)("strong",{parentName:"p"},"strings")," in the format mentioned above and be sorted in ",(0,r.kt)("strong",{parentName:"p"},"non-decreasing")," order first by columns and then by rows."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "K1:L2"\nOutput: ["K1","K2","L1","L2"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrows denote the order in which the cells should be presented.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "A1:F1"\nOutput: ["A1","B1","C1","D1","E1","F1"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrow denotes the order in which the cells should be presented.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s.length == 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'A' <= s[0] <= s[3] <= 'Z'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'1' <= s[1] <= s[4] <= '9'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of uppercase English letters, digits and ",(0,r.kt)("inlineCode",{parentName:"li"},"':'"),".")),(0,r.kt)("h2",{id:"approach-1-loops"},"Approach 1: Loops"),(0,r.kt)("p",null,"Iterate each letter from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[0]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"3"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[3]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and iterate each number from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[1]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"4"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s[4]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," to build the answer."),(0,r.kt)(i,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<string> cellsInRange(string s) {\n        vector<string> ans;\n        // iterate each letter\n        for (char x = s[0]; x <= s[3]; x++) {\n            // iterate each number\n            for (int y = s[1] - '0'; y <= s[4] - '0'; y++) {\n                // build the answer\n                ans.push_back(x + to_string(y));\n            }\n        }\n        return ans;\n    }\n};\n")))}N.isMDXComponent=!0}}]);