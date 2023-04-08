"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",tags:["Tree","Depth-First Search","Backtracking"]},i="1443 - Minimum Time to Collect All Apples in a Tree (Medium)",p={unversionedId:"1400-1499/minimum-time-to-collect-all-apples-in-a-tree",id:"1400-1499/minimum-time-to-collect-all-apples-in-a-tree",title:"1443 - Minimum Time to Collect All Apples in a Tree (Medium)",description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",source:"@site/solutions/1400-1499/1443-minimum-time-to-collect-all-apples-in-a-tree.md",sourceDirName:"1400-1499",slug:"/1400-1499/minimum-time-to-collect-all-apples-in-a-tree",permalink:"/solutions/1400-1499/minimum-time-to-collect-all-apples-in-a-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1443-minimum-time-to-collect-all-apples-in-a-tree.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:1443,frontMatter:{description:"Author: @hirotake111, @wingkwong | https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",tags:["Tree","Depth-First Search","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"1434 - Number of Ways to Wear Different Hats to Each Other (Hard)",permalink:"/solutions/1400-1499/number-of-ways-to-wear-different-hats-to-each-other-hard"},next:{title:"1448 - Count Good Nodes in Binary Tree (Medium)",permalink:"/solutions/1400-1499/count-good-nodes-in-binary-tree-medium"}},o={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS + Backtracking",id:"approach-1-dfs--backtracking",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=m("Tabs"),d=m("TabItem"),u=m("SolutionAuthor"),h={toc:s},g="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1443---minimum-time-to-collect-all-apples-in-a-tree-medium"},"1443 - Minimum Time to Collect All Apples in a Tree (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/"},"https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given an undirected tree consisting of ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," vertices numbered from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1"),", which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. ",(0,r.kt)("em",{parentName:"p"},"Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at ",(0,r.kt)("strong",{parentName:"em"},"vertex 0")," and coming back to this vertex.")),(0,r.kt)("p",null,"The edges of the undirected tree are given in the array ",(0,r.kt)("inlineCode",{parentName:"p"},"edges"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"edges[i] = [ai, bi]")," means that exists an edge connecting the vertices ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bi"),". Additionally, there is a boolean array ",(0,r.kt)("inlineCode",{parentName:"p"},"hasApple"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"hasApple[i] = true")," means that vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," has an apple; otherwise, it does not have any apple."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]\nOutput: 8\nExplanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_2.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]\nOutput: 6\nExplanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]\nOutput: 0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 105")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edges.length == n - 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edges[i].length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= ai < bi <= n - 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromi < toi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasApple.length == n"))),(0,r.kt)("h2",{id:"approach-1-dfs--backtracking"},"Approach 1: DFS + Backtracking"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Let's make another array out of ",(0,r.kt)("inlineCode",{parentName:"li"},"edges")," and call it ",(0,r.kt)("inlineCode",{parentName:"li"},"graph"),", where each element ",(0,r.kt)("inlineCode",{parentName:"li"},"graph[i]")," contains neighbour edges."),(0,r.kt)("li",{parentName:"ol"},"Perform DFS + backtracking to calculate the minimum time in second using ",(0,r.kt)("inlineCode",{parentName:"li"},"graph"),".")),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(u,{name:"@hirotake111",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:\n        # Edge case: no apples - just return 0\n        if len(list(filter(lambda edge: edge, hasApple))) == 0:\n            return 0\n\n        # Create a graph using edges\n        graph: List[List[int]] = [[] for _ in range(n)]\n        for edge_a, edge_b in edges:\n            if edge_b not in graph[edge_a]:\n                graph[edge_a].append(edge_b)\n            if edge_a not in graph[edge_b]:\n                graph[edge_b].append(edge_a)\n\n        def dfs(current: int, parent: int) -> int:\n            sub_total = 0\n\n            for child in graph[current]:\n                # If child == parent, do nothing to prevent going back to the parent\n                # If not, this should be an index of a child edge\n                # -> perform dfs and add the result to sub total\n                if child != parent:\n                    sub_total += dfs(child, current)\n\n            # If the edge has apples in it, or  if children has apples,\n            # we need to visit it -> add extra 2\n            if hasApple[current] or 0 < sub_total:\n                return sub_total + 2\n            # Else, this edge has no apples, or no children that have apples.\n            # So we don't have to visit this edge -> just return 0\n            return 0\n\n        # In this approach dfs() assumes there is always a parent edge connected to it.\n        # But since root doesn't have it - the result has 2 extra unit of seconds.\n        # Therefore subtract 2 from the result of dfs()\n        return dfs(0, -1) - 2\n"))),(0,r.kt)(d,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)(u,{name:"@hirotake111",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func minTime(n int, edges [][]int, hasApple []bool) int {\n    // Edge case: no nodes containing apple\n    flag := false\n    for _, apple := range hasApple {\n        flag = flag || apple\n    }\n    if !flag {\n        return 0\n    }\n\n    // Create a graph\n    graph := make([][]int, n)\n    for _, edgeIndexes := range edges {\n        edgeA := edgeIndexes[0]\n        edgeB := edgeIndexes[1]\n        if !contains(graph[edgeA], edgeB) {\n            graph[edgeA] = append(graph[edgeA], edgeB)\n        }\n        if !contains(graph[edgeB], edgeA) {\n            graph[edgeB] = append(graph[edgeB], edgeA)\n        }\n    }\n\n    var dfs func(current, parent int) int\n    dfs = func(current, parent int) int {\n        subTotal := 0\n        for _, child := range graph[current] {\n            if child != parent {\n                // child index points to a child edge\n                subTotal += dfs(child, current)\n            }\n        }\n        if hasApple[current] || 0 < subTotal {\n            return subTotal + 2\n        }\n        return 0\n    }\n\n    return dfs(0, -1) - 2\n}\n\nfunc contains(edges []int, target int) bool {\n    for edge := range edges {\n        if edge == target {\n            return true\n        }\n    }\n    return false\n}\n\n"))),(0,r.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minTime(int n, vector<vector<int>>& edges, vector<bool>& hasApple) {\n        vector<vector<int>> g(n);\n        for (auto x : edges) {\n            g[x[0]].push_back(x[1]);\n            g[x[1]].push_back(x[0]);\n        }\n        // u = currenct vertex\n        // p = parent vertex\n        function<int(int, int)> dfs = [&] (int u, int p) {\n            int res = 0, t = 0;\n            for (auto v : g[u]) {\n                // if v is not same as p\n                if (p ^ v) {\n                    // calculate the child time\n                    t = dfs(v, u);\n                    // if there is an apple in the subtree, we need 2 seconds to collect it and head back\n                    // if we are in vertex 1, we need 4 seconds to collect all the apples in 4 & 5 \n                    // i.e. (1 -> 4, 4 -> 1, 1 -> 5, 5 -> 1)\n                    // how does 0 know that 1 has collected the apple? check the time, i.e. `t`\n                    // if t > 0, it means we got some apples in sub trees\n                    if (t > 0 || hasApple[v]) {\n                        res += t + 2;\n                    }\n                }\n            }\n            return res;\n        };\n        return dfs(0, -1);\n    }\n};\n")))))}k.isMDXComponent=!0}}]);