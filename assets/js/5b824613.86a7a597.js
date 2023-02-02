"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2170],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=m(t),d=r,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return t?n.createElement(u,i(i({ref:a},p),{},{components:t})):n.createElement(u,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<s;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},39479:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),i=["components"],o={description:"Author: @ColeB2 | https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",tags:["String","Tree","Depth-First Search","Breadth-First Search","Design","Binary Tree"]},l="0297 - Serialize and Deserialize Binary Tree (Hard)",m={unversionedId:"0200-0299/serialize-and-deserialize-binary-tree-hard",id:"0200-0299/serialize-and-deserialize-binary-tree-hard",title:"0297 - Serialize and Deserialize Binary Tree (Hard)",description:"Author: @ColeB2 | https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",source:"@site/solutions/0200-0299/0297-serialize-and-deserialize-binary-tree-hard.md",sourceDirName:"0200-0299",slug:"/0200-0299/serialize-and-deserialize-binary-tree-hard",permalink:"/solutions/0200-0299/serialize-and-deserialize-binary-tree-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0297-serialize-and-deserialize-binary-tree-hard.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:297,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",tags:["String","Tree","Depth-First Search","Breadth-First Search","Design","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0287 - Find the Duplicate Number (Medium)",permalink:"/solutions/0200-0299/find-the-duplicate-number-medium"},next:{title:"0298 - Binary Tree Longest Consecutive Sequence (Medium)",permalink:"/solutions/0200-0299/binary-tree-longest-consecutive-sequence-medium"}},p={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Breadth-First Search",id:"approach-1-breadth-first-search",level:2}],h=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},d=h("Tabs"),u=h("TabItem"),N=h("SolutionAuthor"),k={toc:c};function g(e){var a=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0297---serialize-and-deserialize-binary-tree-hard"},"0297 - Serialize and Deserialize Binary Tree (Hard)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment."),(0,s.kt)("p",null,"Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Clarification:")," The input/output format is the same as ",(0,s.kt)("a",{parentName:"p",href:"https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-"},"how LeetCode serializes a binary tree"),". You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = [1,2,3,null,null,4,5]\nOutput: [1,2,3,null,null,4,5]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: []\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,s.kt)("inlineCode",{parentName:"li"},"[0, 10^4]"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-1000 <= Node.val <= 1000"))),(0,s.kt)("h2",{id:"approach-1-breadth-first-search"},"Approach 1: Breadth-First Search"),(0,s.kt)("p",null,"We can use a queue/BFS to order our nodes in a level order traversal. That means looping through level by level and appending them to a string or an array. Note for Python, and potentially any other languages that use immutable strings, we will use an array first, then convert our serialized array into a string after like the question asks. Python we can use .join method (This prevents remaking the string during each concatenation). We will also need to separate our nodes in the string with a separator, and use a character to denote a null node."),(0,s.kt)("p",null,"Serializing:\nTime Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". We must read each node, and then convert it to a serialized form. We can't skip nodes."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Our queue to perform BFS will have ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n/2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/2")))))," nodes in the last layer, and if we use an array to serialize before we convert to a string, the array will have ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," elements."),(0,s.kt)("p",null,"The tricky part then becomes deserializing. To deserialize we must read our input string and determine what a node will be (values between our separators), then we will need ways to determine which node is which child, and whether it is the left or right child. (In Python we can simplify this using our array.split(), otherwise we would need to track start and end points of the string, then splice the string around those start and end points to get the values.)"),(0,s.kt)("p",null,"Again we can use a queue to solve which node is child of which. By appending all nodes to the queue and using a boolean to determine whether the next node being read in is the left or right child. If it is the right child, we can then pop the node out of the queue, and start adding children to the new node in front of the queue."),(0,s.kt)("p",null,"Deserializing:\nTime Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". We must process each node."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", We must create ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," nodes, and we will also need up to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," space for our queue, and potentially more if we convert our string to an array first."),(0,s.kt)(d,{mdxType:"Tabs"},(0,s.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode(object):\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\nclass Codec:\n    def serialize(self, root):\n        \"\"\"Encodes a tree to a single string.\n        \n        :type root: TreeNode\n        :rtype: str\n\n        Time: O(n)\n        - process each node\n        - O(n) ''.join(arr) at the end.\n        Space: O(n)\n        - queue up to n space.\n        - array to hold our values will need n space.\n        \"\"\"\n        # create empty array to hold our values\n        arr = []\n        # initialize our queue with our root node.\n        q = deque([root])\n        # while our queue has values,\n        while q:\n            # loop through current level.\n            for n in range(len(q)):\n                # pop left most node in queue\n                node = q.popleft()\n                # if node is not a null node\n                if node:\n                    # add nodes value as a string to our array.\n                    arr.append(str(node.val))\n                    # add the left and right children.\n                    q.append(node.left)\n                    q.append(node.right)\n                else:\n                    # null node -> add a null value, we will use 'X'. Could\n                    # use anything as long as it isn't our spacing character\n                    # or a number value.\n                    arr.append('X')\n        # question asks for it as a string, convert to a string at the end to\n        # to only do O(n) work. If we used a string instead of an array, string\n        # concatenation would mean we'd have to recreate the string each step.\n        return \"#\".join(arr)\n\n\n    def deserialize(self, data):\n        \"\"\"Decodes your encoded data to tree.\n        \n        :type data: str\n        :rtype: TreeNode\n        Time: O(n)\n        - process each node\n        - O(n) to split our string into an array for easier traversal.\n        Space: O(n)\n        - recreate our tree with n nodes.\n        - array will take up n space.\n        - queue will take up to n space.\n        \"\"\"\n        # Base Case\n        if data == 'X':\n            return None\n        # Turn our encoded string into an array of values. We do it this way\n        # to simplify the reading of the data.\n        arr = data.split('#')\n        # Create root using first value in tree\n        root = TreeNode(int(arr[0]))\n        # create q, used to help add children\n        q = deque([root])\n        # boolean to tell us whether the child is left or right child.\n        right = False\n        # loop through all the nodes, except first which we already made.\n        for i in range(1, len(arr)):\n            # get the value, maybe a null node.\n            val = arr[i]\n            # null node, which we said was 'X'\n            if val == 'X':\n                # set the node to be None\n                node = None\n            else:\n                # not a null node, create the tree node, add it to the queue.\n                node = TreeNode(int(val))\n                # since it is in the queue, it will receive children later.\n                q.append(node)\n            #Handle Children\n            # if right == true, it means next child is first value in the queue's\n            # right child.\n            if right:\n                # set current node to be the right child\n                q[0].right = node\n                # pop the node, since it no longer needs children\n                q.popleft()\n                # set right to false as the next node first child will be a \n                # left child.\n                right = False\n            # right == false, next child is the first value in the queue's left\n            # child.\n            else:\n                # set current node to be the left child\n                q[0].left = node\n                # update right variable, to denote we need to set right child\n                # on the next iteration.\n                right = True\n        # Finally we can return the root of our tree.\n        return root\n")))))}g.isMDXComponent=!0}}]);