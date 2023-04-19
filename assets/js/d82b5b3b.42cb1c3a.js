"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[55879],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>h});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=m,h=c["".concat(l,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function h(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:m,r[1]=p;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},47890:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(87462),m=(t(67294),t(3905));const s={description:"Author: @ColeB2 | https://leetcode.com/problems/target-sum/",tags:["Array","Dynamic Programming","Backtracking"]},r="0494 - Target Sum (Medium)",p={unversionedId:"0400-0499/target-sum-medium",id:"0400-0499/target-sum-medium",title:"0494 - Target Sum (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/target-sum/",source:"@site/solutions/0400-0499/0494-target-sum-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/target-sum-medium",permalink:"/solutions/0400-0499/target-sum-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0494-target-sum-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:494,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/target-sum/",tags:["Array","Dynamic Programming","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"0493 - Reverse Pairs (Hard)",permalink:"/solutions/0400-0499/reverse-pairs-hard"},next:{title:"0496 - Next Greater Element I (Easy)",permalink:"/solutions/0400-0499/next-greater-element-i-easy"}},l={},i=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming - Memoization",id:"approach-1-dynamic-programming---memoization",level:2}],o=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)},c=o("Tabs"),N=o("TabItem"),k=o("SolutionAuthor"),h={toc:i},u="wrapper";function d(a){let{components:e,...t}=a;return(0,m.kt)(u,(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"0494---target-sum-medium"},"0494 - Target Sum (Medium)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/target-sum/"},"https://leetcode.com/problems/target-sum/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given an integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,m.kt)("p",null,"You want to build an ",(0,m.kt)("strong",{parentName:"p"},"expression")," out of nums by adding one of the symbols ",(0,m.kt)("inlineCode",{parentName:"p"},"'+'")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"'-'")," before each integer in nums and then concatenate all the integers."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"For example, if ",(0,m.kt)("inlineCode",{parentName:"li"},"nums = [2, 1]"),", you can add a ",(0,m.kt)("inlineCode",{parentName:"li"},"'+'")," before ",(0,m.kt)("inlineCode",{parentName:"li"},"2")," and a ",(0,m.kt)("inlineCode",{parentName:"li"},"'-'")," before ",(0,m.kt)("inlineCode",{parentName:"li"},"1")," and concatenate them to build the expression ",(0,m.kt)("inlineCode",{parentName:"li"},'"+2-1"'),".")),(0,m.kt)("p",null,"Return the number of different ",(0,m.kt)("strong",{parentName:"p"},"expressions")," that you can build, which evaluates to ",(0,m.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,1,1], target = 3\nOutput: 5\nExplanation: There are 5 ways to assign symbols to make the sum of nums be target 3.\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [1], target = 1\nOutput: 1\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 20")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 1000")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"0 <= sum(nums[i]) <= 1000")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"-1000 <= target <= 1000"))),(0,m.kt)("h2",{id:"approach-1-dynamic-programming---memoization"},"Approach 1: Dynamic Programming - Memoization"),(0,m.kt)("p",null,"For each number in ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," we can calculate and store the possible sums on each iteration, and continue to do that and count all the sums at the end. "),(0,m.kt)("p",null,"To improve that we can use a hash map, with our key, value pairs being the ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," as our key, and the number of times that sum occurs as the value. This avoids repeated work on each iteration and allows ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," access to the ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," number at the end instead of counting the occurrences of our target sum."),(0,m.kt)("p",null,"Time Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n * s)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the number of nums, and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," is the range of possible sums. Our for loops will loop over all numbers, and all possible sums."),(0,m.kt)("p",null,"Space Complexity: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(s)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," is the range of possible sums. Our ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"p")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," hash map will contain key, value pairs based on the number of sums we can create."),(0,m.kt)(c,{mdxType:"Tabs"},(0,m.kt)(N,{value:"python",label:"Python",mdxType:"TabItem"},(0,m.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\n        # initialize our memoization hash map.\n        dp = defaultdict(int)\n        # Start with sum 0 = 1. As at the start, we have a sum of 0, that\n        # occurs 1 time.\n        dp[0] = 1\n        # Iterate all our numbers in nums array:\n        for num in nums:\n            # initialize a new dp dict, as we don't need to remember\n            # each sum on each iteration, we just need the new sums\n            # we create on every pass.\n            new_dp = defaultdict(int)\n            # iterate over each key, value pair. \n            # _sum = keys which are our sums we created in dp.\n            # value = freq, which is the frequency of each sum.\n            for _sum, freq in dp.items():\n                # The new sums we create will be the _sum +/- num\n                # so our new keys will be _sum + num and _sum - num.\n                # The values or frequency of each will be all the \n                # frequencies that each original _sum occurred at in \n                # the original dp hash map.\n                new_dp[_sum + num] += freq\n                new_dp[_sum - num] += freq\n            # replace our old dp hash map with the new_dp hash map.\n            dp = new_dp\n        # Return the frequency of target in dp hash map.\n        return dp[target]\n")))))}d.isMDXComponent=!0}}]);