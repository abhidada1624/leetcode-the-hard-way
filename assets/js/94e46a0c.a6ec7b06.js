"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[68213],{3905:(a,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>h});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function m(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)e=m[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var i=n.createContext({}),o=function(a){var t=n.useContext(i),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},l=function(a){var t=o(a.components);return n.createElement(i.Provider,{value:t},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),c=o(e),k=s,h=c["".concat(i,".").concat(k)]||c[k]||N[k]||m;return e?n.createElement(h,r(r({ref:t},l),{},{components:e})):n.createElement(h,r({ref:t},l))}));function h(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var m=e.length,r=new Array(m);r[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=a,p[c]="string"==typeof a?a:s,r[1]=p;for(var o=2;o<m;o++)r[o]=e[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},58932:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=e(87462),s=(e(67294),e(3905));const m={description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/min-cost-climbing-stairs/",tags:["Array","Dynamic Programming"]},r="0746 - Min Cost Climbing Stairs (Easy)",p={unversionedId:"0700-0799/min-cost-climbing-stairs-easy",id:"0700-0799/min-cost-climbing-stairs-easy",title:"0746 - Min Cost Climbing Stairs (Easy)",description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/min-cost-climbing-stairs/",source:"@site/solutions/0700-0799/0746-min-cost-climbing-stairs-easy.md",sourceDirName:"0700-0799",slug:"/0700-0799/min-cost-climbing-stairs-easy",permalink:"/solutions/0700-0799/min-cost-climbing-stairs-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0746-min-cost-climbing-stairs-easy.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:746,frontMatter:{description:"Author: @ColeB2, @wingkwong | https://leetcode.com/problems/min-cost-climbing-stairs/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0744 - Find Smallest Letter Greater Than Target (Easy)",permalink:"/solutions/0700-0799/find-smallest-letter-greater-than-target-easy"},next:{title:"0763 - Partition Labels (Medium)",permalink:"/solutions/0700-0799/partition-labels-medium"}},i={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],l=a=>function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=l("Tabs"),N=l("TabItem"),k=l("SolutionAuthor"),h={toc:o},d="wrapper";function u(a){let{components:t,...e}=a;return(0,s.kt)(d,(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0746---min-cost-climbing-stairs-easy"},"0746 - Min Cost Climbing Stairs (Easy)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/min-cost-climbing-stairs/"},"https://leetcode.com/problems/min-cost-climbing-stairs/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"cost")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"cost[i]")," is the cost of ",(0,s.kt)("inlineCode",{parentName:"p"},"ith")," step on a staircase. Once you pay the cost, you can either climb one or two steps."),(0,s.kt)("p",null,"You can either start from the step with index ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),", or the step with index ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,s.kt)("p",null,"Return ",(0,s.kt)("em",{parentName:"p"},"the minimum cost to reach the top of the floor"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: cost = [10,15,20]\nOutput: 15\nExplanation: You will start at index 1.\n- Pay 15 and climb two steps to reach the top.\nThe total cost is 15.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: cost = [1,100,1,1,1,100,1,1,100,1]\nOutput: 6\nExplanation: You will start at index 0.\n- Pay 1 and climb two steps to reach index 2.\n- Pay 1 and climb two steps to reach index 4.\n- Pay 1 and climb two steps to reach index 6.\n- Pay 1 and climb one step to reach index 7.\n- Pay 1 and climb two steps to reach index 9.\n- Pay 1 and climb one step to reach the top.\nThe total cost is 6.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"2 <= cost.length <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= cost[i] <= 999"))),(0,s.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,s.kt)("p",null,"For each step, starting at the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3")))))," step (step index ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," in a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0-indexed")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," array), we can calculate the min cost it would take to reach that step. The min cost to reach any given step would be the min cost to reach the step directly behind it, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," steps behind it."),(0,s.kt)("p",null,"By starting at step ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"))))),", we can add the cost from step ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3")))))," directly to either the smallest of step ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," or ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),", since we can start from either of those steps. Then we can continue to calculate the min cost for steps ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"6..."),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4,5,6...n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"6..."),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n is the number of steps. We are going to calculate the min cost of each step in the cost array."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," we can reuse the cost array to overwrite the min cost to reach each step."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minCostClimbingStairs(self, cost: List[int]) -> int:\n        # loop from the 3rd step, (2 indexed step in 0-indexed list) \n        # until the end of the cost array\n        for i in range(2, len(cost)):\n            # calculate the cost of the ith step. The cost will be the\n            # cost of the current step, plus the smaller of the i-1, i-2\n            # step behind us.\n            cost[i] += min(cost[i - 1], cost[i - 2])\n        # Return the smallest of the last 2 steps. Since we can either\n        # stand on the last step and step to the final floor, or the\n        # step below that and take 2 steps to reach the final floor.\n        return min(cost[-1], cost[-2])\n"))),(0,s.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minCostClimbingStairs(vector<int>& cost) {\n        int n = cost.size();\n        int dp[n + 1];\n        memset(dp, 0, sizeof(dp));\n        dp[0] = cost[0];\n        dp[1] = cost[1];\n        for (int i = 2; i <= n; i++) {\n            dp[i] = min(dp[i - 1], dp[i - 2]) + (i == n ? 0 : cost[i]);\n        }\n        return dp[n];\n    }\n};\n"))),(0,s.kt)(N,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kt"},"class Solution {\n    fun minCostClimbingStairs(cost: IntArray): Int {\n        val n = cost.size\n        val dp = IntArray(n + 1)\n        dp[0] = cost[0]\n        dp[1] = cost[1]\n        for (i in 2 .. n) {\n            dp[i] = minOf(dp[i - 1], dp[i - 2]) + if (i == n) 0 else cost[i]\n        }\n        return dp[n]\n    }\n}\n")))))}u.isMDXComponent=!0}}]);