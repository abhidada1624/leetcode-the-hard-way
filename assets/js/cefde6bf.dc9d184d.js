"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69576],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),h=o(a),u=r,d=h["".concat(m,".").concat(u)]||h[u]||c[u]||s;return a?n.createElement(d,l(l({ref:t},i),{},{components:a})):n.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[h]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},l="0100 - Same Tree (Easy)",p={unversionedId:"0100-0199/same-tree-easy",id:"0100-0199/same-tree-easy",title:"0100 - Same Tree (Easy)",description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",source:"@site/solutions/0100-0199/0100-same-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/same-tree-easy",permalink:"/solutions/0100-0199/same-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0100-same-tree-easy.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:100,frontMatter:{description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/same-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0100 - 0199",permalink:"/solutions/category/0100---0199"},next:{title:"0101 - Symmetric Tree (Easy)",permalink:"/solutions/0100-0199/symmetric-tree-easy"}},m={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive Depth-First Search",id:"approach-1-recursive-depth-first-search",level:2},{value:"Approach 2: Iterative Depth-First Search",id:"approach-2-iterative-depth-first-search",level:2}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=i("Tabs"),c=i("TabItem"),u=i("SolutionAuthor"),d={toc:o},k="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0100---same-tree-easy"},"0100 - Same Tree (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/same-tree/"},"https://leetcode.com/problems/same-tree/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given the roots of two binary trees ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),", write a function to check if they are the same or not."),(0,r.kt)("p",null,"Two binary trees are considered the same if they are structurally identical, and the nodes have the same value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: p = [1,2,3], q = [1,2,3]\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: p = [1,2], q = [1,null,2]\nOutput: false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: p = [1,2,1], q = [1,1,2]\nOutput: false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes in both trees is in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 100]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^4 <= Node.val <= 10^4"))),(0,r.kt)("h2",{id:"approach-1-recursive-depth-first-search"},"Approach 1: Recursive Depth-First Search"),(0,r.kt)("p",null,"Very simply, a tree, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," is the same as a tree, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"q")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"q")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q")))))," if the structure of both trees is identical, and the values of the nodes are the same. Meaning at each step we must make sure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"p and q are both currently nodes, and their values are equal. If so, we can continue to check their subtrees."),(0,r.kt)("li",{parentName:"ol"},"If 1 isn't true. Then check if they are null nodes. If so we can return True. If one is null and the other isn't then we must return False.")),(0,r.kt)("p",null,"We can do the above as a recursive DFS solution."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," where n is the number of nodes in p/q. Since in the worst case, they will be completely similar trees, except for 1 child node, we will have to traverse each node in each tree."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(h)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," where h is the height of the tree. As by using a recursive DFS solution, we will only ever hold the current path inside our recursive call start, which will scale with the height of the tree."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # Check that p exists, q exists, and if they both exist that the values\n        # of the nodes are equal.\n        if p and q and p.val == q.val:\n            # If they are equal, recursively check left sub-tree of each node\n            # together and the right sub-tree of each node together.\n            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right,q.right)\n        # If above is false, we must check to see if they are either both null\n        # nodes, or if 1 is a child node and the other isn't\n        # In Python p is q will handle both cases.\n        # if both are None --\x3e return True\n        # if 1 is a node and the other is None, it will return False.\n        return p is q\n"))),(0,r.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function(p, q) {\n    // if both of them are empty\n    if (!p && !q) return true;\n    // if one of them is empty \n    // if the values are not the same\n    if (!p || !q || p.val != q.val) return false;\n    // recursive call\n    // are left and right subtree equal\n    return (isSameTree(p.left, q.left) && \n            isSameTree(p.right, q.right));\n};\n"))),(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // if both of them are empty\n        if (!p && !q) {\n            return true;\n        }\n        // if one of them is empty \n        // if the values are not the same\n        if (!p || !q || p->val != q->val) {\n            return false;\n        }\n        // recursive call\n        // are left and right subtree equal\n        return (isSameTree(p->left, q->left) &&\n                isSameTree(p->right, q->right));\n    }\n};\n")))),(0,r.kt)("h2",{id:"approach-2-iterative-depth-first-search"},"Approach 2: Iterative Depth-First Search"),(0,r.kt)("p",null,"Similar to the recursive approach above, we just have to create and maintain our own stack instead of utilizing the call stack."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," similar to above, we must traverse each node of p/q to check they are the same."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"h"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(h)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," also similarly, although with our own stack, we will only ever have the current path we are traversing in the stack."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # initialize our own stack to maintain, start with tuple of (p,q)\n        stack = [(p,q)]\n        # while the stack contains values:\n        while stack:\n            # pop of the nodes and assign them to two variables, we will use n,m.\n            n,m = stack.pop()\n            # if n and m are both nodes and the values are equal:\n            if n and m and n.val == m.val:\n                # add left sub-tree of n and m to the stack\n                stack.append((n.left, m.left))\n                # add right sub-tree of n and m to the stack\n                stack.append((n.right, m.right))\n            # if n does not equal m. Meaning either:\n            # n/m is a null node and the other isn't\n            # or both n and m have different values.\n            elif n != m:\n                # terminate early, return False\n                return False\n        # made it through the loop with no termination, which means the trees are\n        # the same. return True.\n        return True\n"))),(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        stack<pair<TreeNode*, TreeNode*>> st;\n        st.push({p, q});\n        while (!st.empty()) {\n            auto [node1, node2] = st.top();\n            st.pop();\n            if (!node1 && !node2) continue;\n            if (!node1 || !node2 || node1->val != node2->val) {\n                return false;\n            } else {\n                st.push({node1->left, node2->left});\n                st.push({node1->right, node2->right});\n            }\n        }\n        return true;\n    }\n};\n")))))}N.isMDXComponent=!0}}]);