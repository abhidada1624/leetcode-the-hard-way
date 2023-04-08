"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[95456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,c=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(c,l(l({ref:t},m),{},{components:r})):n.createElement(c,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},57835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"},l="0559 - Maximum Depth of N-ary Tree (Easy)",i={unversionedId:"0500-0599/maximum-depth-of-n-ary-tree-easy",id:"0500-0599/maximum-depth-of-n-ary-tree-easy",title:"0559 - Maximum Depth of N-ary Tree (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",source:"@site/solutions/0500-0599/0559-maximum-depth-of-n-ary-tree-easy.md",sourceDirName:"0500-0599",slug:"/0500-0599/maximum-depth-of-n-ary-tree-easy",permalink:"/solutions/0500-0599/maximum-depth-of-n-ary-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0559-maximum-depth-of-n-ary-tree-easy.md",tags:[],version:"current",sidebarPosition:559,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"},sidebar:"tutorialSidebar",previous:{title:"0557 - Reverse Words in a String III (Easy)",permalink:"/solutions/0500-0599/reverse-words-in-a-string-iii-easy"},next:{title:"0560 - Subarray Sum Equals K (Medium)",permalink:"/solutions/0500-0599/subarray-sum-equals-k-medium"}},p={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}],m=(u="SolutionAuthor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:s},h="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0559---maximum-depth-of-n-ary-tree-easy"},"0559 - Maximum Depth of N-ary Tree (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"},"https://leetcode.com/problems/maximum-depth-of-n-ary-tree/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a n-ary tree, find its maximum depth."),(0,a.kt)("p",null,"The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,3,2,4,null,5,6]\nOutput: 3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\nOutput: 5\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The total number of nodes is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 10^4]"),"."),(0,a.kt)("li",{parentName:"ul"},"The depth of the n-ary tree is less than or equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,a.kt)("h2",{id:"approach-1-dfs"},"Approach 1: DFS"),(0,a.kt)("p",null,"We should use the DFS template from ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/graph-theory/depth-first-search"},"DFS Guide"),". Instead of looking at the left and right child, we look at all children in an ",(0,a.kt)("em",{parentName:"p"},"n-ary tree.")," We find the deepest child and set it to the current ",(0,a.kt)("inlineCode",{parentName:"p"},"largestDepth"),", then we add one for counting the depth of the current level."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: A ",(0,a.kt)("strong",{parentName:"em"},"binary tree")," means each node at most has ",(0,a.kt)("strong",{parentName:"em"},"2 children")," (binary means 2). An ",(0,a.kt)("strong",{parentName:"em"},"n-ary")," tree means each node at most has ",(0,a.kt)("strong",{parentName:"em"},"n children"))),(0,a.kt)(m,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def maxDepth(self, root: 'Node') -> int:\n        \n        def dfs(node):\n            #there is a possibility the root is None\n            if(node is None):\n                return 0\n                \n            #initialize the largest depth\n            largestDepth = 0\n            \n            #iterate each child, and update the largest depth if appropriate\n            for child in node.children:\n                largestDepth = max(largestDepth, dfs(child))\n            \n            #don't forget to add the current level height!    \n            return largestDepth + 1\n        \n        #we start iterating from the root\n        return dfs(root)\n")))}c.isMDXComponent=!0}}]);