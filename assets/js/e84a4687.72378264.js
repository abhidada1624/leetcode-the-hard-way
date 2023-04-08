"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56436],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return t?n.createElement(g,l(l({ref:r},d),{},{components:t})):n.createElement(g,l({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24176:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",tags:["Tree","Breadth-First Search","Binary Tree"]},l="0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",i={unversionedId:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",id:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",source:"@site/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/binary-tree-zigzag-level-order-traversal-medium",permalink:"/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:103,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",tags:["Tree","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0102 - Binary Tree Level Order Traversal (Medium)",permalink:"/solutions/0100-0199/binary-tree-level-order-traversal-medium"},next:{title:"0104 - Maximum Depth of Binary Tree (Easy)",permalink:"/solutions/0100-0199/maximum-depth-of-binary-tree-easy"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=d("Tabs"),m=d("TabItem"),c=d("SolutionAuthor"),g={toc:p},v="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(v,(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0103----binary-tree-zigzag-level-order-traversal-medium"},"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,a.kt)("em",{parentName:"p"},"the zigzag level order traversal of its nodes' values"),". (i.e., from left to right, then right to left for the next level and alternate between)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1]\nOutput: [[1]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: []\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,a.kt)("inlineCode",{parentName:"li"},"[0, 2000]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,a.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(m,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    # Level traversal -> BFS\n    # reverse the list for odd-index level\n    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        # if there is no root, then return []\n        if not root: return []\n        # init ans and queue with initial node `root`\n        ans, q = [], [root]\n        # BFS\n        while q:\n            # direction - 1 for even-index level and -1 for odd-index level\n            d = -1 if len(ans) % 2 == 1 else 1\n            # put all node values to a list with the correct direction \n            # and add to `ans` \n            ans.append([n.val for n in q][::d])\n            # for each node in the queue, \n            # we add the left or right node to the queue if applicable\n            q = [n for node in q for n in (node.left, node.right) if n]\n        return ans\n")))))}f.isMDXComponent=!0}}]);