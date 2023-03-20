"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57299],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||s;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88100:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/network-delay-time/",tags:["Depth-First Search","Breadth-First Search","Graph","Heap (Priority Queue)","Shortest Path"]},o="0743 - Network Delay Time (Medium)",p={unversionedId:"0700-0799/network-delay-time-medium",id:"0700-0799/network-delay-time-medium",title:"0743 - Network Delay Time (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/network-delay-time/",source:"@site/solutions/0700-0799/0743-network-delay-time-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/network-delay-time-medium",permalink:"/solutions/0700-0799/network-delay-time-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0743-network-delay-time-medium.md",tags:[{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Graph",permalink:"/solutions/tags/graph"},{label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"},{label:"Shortest Path",permalink:"/solutions/tags/shortest-path"}],version:"current",sidebarPosition:743,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/network-delay-time/",tags:["Depth-First Search","Breadth-First Search","Graph","Heap (Priority Queue)","Shortest Path"]},sidebar:"tutorialSidebar",previous:{title:"0740 - Delete and Earn (Medium)",permalink:"/solutions/0700-0799/delete-and-earn-medium"},next:{title:"0744 - Find Smallest Letter Greater Than Target (Easy)",permalink:"/solutions/0700-0799/find-smallest-letter-greater-than-target-easy"}},l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dijkstra",id:"approach-1-dijkstra",level:2},{value:"Approach 2: Bellman Ford",id:"approach-2-bellman-ford",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},u=c("Tabs"),h=c("TabItem"),k=c("SolutionAuthor"),N={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0743---network-delay-time-medium"},"0743 - Network Delay Time (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/network-delay-time/"},"https://leetcode.com/problems/network-delay-time/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a network of ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," nodes, labeled from ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),". You are also given ",(0,s.kt)("inlineCode",{parentName:"p"},"times"),", a list of travel times as directed edges ",(0,s.kt)("inlineCode",{parentName:"p"},"times[i] = (ui, vi, wi)"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"ui")," is the source node, ",(0,s.kt)("inlineCode",{parentName:"p"},"vi")," is the target node, and ",(0,s.kt)("inlineCode",{parentName:"p"},"wi")," is the time it takes for a signal to travel from source to target."),(0,s.kt)("p",null,"We will send a signal from a given node ",(0,s.kt)("inlineCode",{parentName:"p"},"k"),". Return the time it takes for all the ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," nodes to receive the signal. If it is impossible for all the ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," nodes to receive the signal, return ",(0,s.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2\nOutput: 2\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: times = [[1,2,1]], n = 2, k = 1\nOutput: 1\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: times = [[1,2,1]], n = 2, k = 2\nOutput: -1\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= k <= n <= 100")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= times.length <= 6000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"times[i].length == 3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= ui, vi <= n")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ui != vi")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= wi <= 100")),(0,s.kt)("li",{parentName:"ul"},"All the pairs ",(0,s.kt)("inlineCode",{parentName:"li"},"(ui, vi)")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),". (i.e., no multiple edges.)")),(0,s.kt)("h2",{id:"approach-1-dijkstra"},"Approach 1: Dijkstra"),(0,s.kt)("p",null,"If we know the time between the starting node and other nodes, then the answer would be the max time. In example 1, if node 2 goes to node 4, it takes 2 seconds. If node 2 goes to to node 1, it takes 1 second. If we take the max time, then other cases would be covered as well."),(0,s.kt)("p",null,"Therefore, the problem is now asking to find out the max time it takes from the starting node to an arbitrary node. To calculate the shortest path from node A to node B, we can use Dijkstra. Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d[i]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the time that is required to reach from the starting point to node ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),". We initialise each time as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mn",{parentName:"mrow"},"9")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1e9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord"},"9"))))),". After calling dijkstra function, if there is one node that need ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mn",{parentName:"mrow"},"9")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"time = 1e9")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord"},"9")))))," to reach, then it means this node is unreachable. We can return ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," in this case. Otherwise, return the max one."),(0,s.kt)(u,{mdxType:"Tabs"},(0,s.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    template<typename T_pair, typename T_vector>\n    void dijkstra(T_pair &g, T_vector &dist, int start) {\n      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n      dist[start] = 0;\n      pq.push({start, 0});\n      while (!pq.empty()) {\n        auto [u_node, u_cost] = pq.top(); pq.pop();\n        if (u_cost > dist[u_node]) continue;\n        for (auto [v_node, v_cost] : g[u_node]) {\n          if (dist[v_node] > dist[u_node] + v_cost) {\n            dist[v_node] = dist[u_node] + v_cost;\n            pq.push({v_node, dist[v_node]});\n          }\n        }\n      }\n    }\n\n    int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n        vector<vector<pair<int, int>>> g(n + 1);\n        for (auto x : times) g[x[0]].push_back({x[1], x[2]});\n        vector<int> d(n + 1, 1e9);\n        dijkstra(g, d, k);\n        int ans = *max_element(d.begin() + 1, d.end());\n        return ans == 1e9 ? -1 : ans;\n    }\n};\n"))),(0,s.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    # Time: O(E log V) where E is the number of Edges and V is the\n    # number of vertices in the graph. We use a heap to maintain the\n    # shortest paths of each node, and each edge is added at most once.\n    # Results in O(E log E) operations, since E is at most O(V^2)\n    # we can simplify: ElogV^2 -> 2ElogV -> ElogV\n    # Space Complexity: O(V). Algorithm uses a set to track visited nodes\n    # Have at most V elements, and a heap to store distances, which can\n    # at most hold V elements.\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        # Build our adjacency list to traverse graph\n        adj_list = [[] for _ in range(n + 1)]\n        for (u,v,w) in times:\n            adj_list[u].append((v,w))\n        # initialize our heap, visited set.\n        # Heap items (time, node) Where time is current time.\n        heap = [(0,k)]\n        visited = set()\n        # Loop through all our values in the heap.\n        while heap:\n            # pop the current time and node\n            t, node = heapq.heappop(heap)\n            # Add node to our visited set, and check if we reached all\n            visited.add(node)\n            if len(visited) == n:\n                # reached all nodes, return the time.\n                return t\n            # Loop through all nodes neighbours.\n            for ni, ti in adj_list[node]:\n                # If we haven't processed node before.\n                if ni not in visited:\n                    # Push time and node to heap.\n                    # Times from our times list are times from previous\n                    # node to now, and time we track is global time.\n                    # So we add time to the node, with the global time.\n                    heapq.heappush(heap, (t + ti, ni))\n        # If we went through our whole heap without our visited ever\n        # reaching n, it means we can't visit all nodes, so return -1.\n        return -1\n")))),(0,s.kt)("h2",{id:"approach-2-bellman-ford"},"Approach 2: Bellman Ford"),(0,s.kt)(u,{mdxType:"Tabs"},(0,s.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    template<typename T_a3, typename T_vector>\n    void bellman_ford(T_a3 &g, T_vector &dist, int src, int mx_edges) {\n        // dist[i] : dist to reach node j using at most i edges from src\n        dist[src] = 0;\n        for (int i = 0; i <= mx_edges; i++) {\n            T_vector ndist = dist;\n            for (auto x : g) {\n                auto [from, to, cost] = x;\n                ndist[to] = min(ndist[to], dist[from] + cost);\n            }\n            dist = ndist;\n        }\n    }\n    \n    int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n        vector<array<int, 3>> g;\n        vector<int> dist(n, 1e9);\n        for (auto x : times) g.push_back({x[0] - 1, x[1] - 1, x[2]});\n        bellman_ford(g, dist, k - 1, n);\n        int mx = *max_element(dist.begin(), dist.end());\n        return mx == 1e9 ? -1 : mx;\n    }\n};\n")))))}g.isMDXComponent=!0}}]);