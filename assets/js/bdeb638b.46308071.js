"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[93953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",tags:["Hash Map"]},l="2352 - Equal Row and Column Pairs (Medium)",i={unversionedId:"2300-2399/equal-row-and-column-pairs-medium",id:"2300-2399/equal-row-and-column-pairs-medium",title:"2352 - Equal Row and Column Pairs (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",source:"@site/solutions/2300-2399/2352-equal-row-and-column-pairs-medium.md",sourceDirName:"2300-2399",slug:"/2300-2399/equal-row-and-column-pairs-medium",permalink:"/solutions/2300-2399/equal-row-and-column-pairs-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2352-equal-row-and-column-pairs-medium.md",tags:[{label:"Hash Map",permalink:"/solutions/tags/hash-map"}],version:"current",sidebarPosition:2352,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/equal-row-and-column-pairs",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2351 - First Letter to Appear Twice (Easy)",permalink:"/solutions/2300-2399/first-letter-to-appear-twice-easy"},next:{title:"2354 - Number of Excellent Pairs (Hard)",permalink:"/solutions/2300-2399/number-of-excellent-pairs-hard"}},p={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],m=(s="SolutionAuthor",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2352---equal-row-and-column-pairs-medium"},"2352 - Equal Row and Column Pairs (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/equal-row-and-column-pairs"},"https://leetcode.com/problems/equal-row-and-column-pairs")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," ",(0,a.kt)("inlineCode",{parentName:"p"},"n x n")," integer matrix ",(0,a.kt)("inlineCode",{parentName:"p"},"grid"),", ",(0,a.kt)("em",{parentName:"p"},"return the number of pairs")," ",(0,a.kt)("inlineCode",{parentName:"p"},"(Ri, Cj)")," ",(0,a.kt)("em",{parentName:"p"},"such that row")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Ri")," ",(0,a.kt)("em",{parentName:"p"},"and column")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Cj")," ",(0,a.kt)("em",{parentName:"p"},"are equal"),"."),(0,a.kt)("p",null,"A row and column pair is considered equal if they contain the same elements in the same order (i.e. an equal array)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[3,2,1],[1,7,6],[2,7,7]]\nOutput: 1\nExplanation: There is 1 equal row and column pair:\n- (Row 2, Column 1): [2,7,7]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]\nOutput: 3\nExplanation: There are 3 equal row and column pairs:\n- (Row 0, Column 0): [3,1,2,2]\n- (Row 2, Column 2): [2,4,2,2]\n- (Row 3, Column 2): [2,4,2,2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == grid.length == grid[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n <= 200")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= grid[i][j] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,a.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int equalPairs(vector<vector<int>>& g) {\n        int n = g.size(), ans = 0;\n        // count the frequency of a vector\n        map<vector<int>, int> m;\n        // check all rows\n        for (int i = 0; i < n; i++) {\n            vector<int> tmp;\n            for (int j = 0; j < n; j++) tmp.push_back(g[i][j]);\n            // in example 1, we got {3,2,1}, {1,7,6}, {2,7,7}\n            m[tmp] += 1;\n        }\n        // check all cols\n        for (int j = 0; j < n; j++) {\n            vector<int> tmp;\n            for (int i = 0; i < n; i++) tmp.push_back(g[i][j]);\n            // in example 1, we got {3,1,2}, {2,7,7}, {1,6,7}\n            // since {2,7,7} has frequency of 1, we add it to answer \n            // otherwise, it would be adding 0\n            ans += m[tmp];\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);