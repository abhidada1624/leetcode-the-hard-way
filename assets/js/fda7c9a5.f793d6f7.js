"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[83866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(o,".").concat(h)]||p[h]||c[h]||s;return n?a.createElement(d,m(m({ref:t},u),{},{components:n})):a.createElement(d,m({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,m=new Array(s);m[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,m[1]=i;for(var l=2;l<s;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={description:"Author: @Dhanu084 | https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",tags:["Array","Hash Table","Sliding Window"]},m="2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)",i={unversionedId:"2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium",id:"2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium",title:"2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)",description:"Author: @Dhanu084 | https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",source:"@site/solutions/2400-2499/2461-maximum-sum-of-distinct-subarrays-with-length-k-medium.md",sourceDirName:"2400-2499",slug:"/2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium",permalink:"/solutions/2400-2499/maximum-sum-of-distinct-subarrays-with-length-k-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2461-maximum-sum-of-distinct-subarrays-with-length-k-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Sliding Window",permalink:"/solutions/tags/sliding-window"}],version:"current",sidebarPosition:2461,frontMatter:{description:"Author: @Dhanu084 | https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",tags:["Array","Hash Table","Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"2445 - Number of Nodes With Value One (Medium)",permalink:"/solutions/2400-2499/number-of-nodes-with-value-one-medium"},next:{title:"2477 - Minimum Fuel Cost to Report to the Capital (Medium)",permalink:"/solutions/2400-2499/minimum-fuel-cost-to-report-to-the-capital-medium"}},o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("Tabs"),c=u("TabItem"),h=u("SolutionAuthor"),d={toc:l},f="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2461---maximum-sum-of-distinct-subarrays-with-length-k-medium"},"2461 - Maximum Sum of Distinct Subarrays With Length K (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/"},"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:"),(0,r.kt)("p",null,"The length of the subarray is k, and\nAll the elements of the subarray are distinct.\nReturn the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0."),(0,r.kt)("p",null,"A subarray is a contiguous non-empty sequence of elements within an array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1,5,4,2,9,9,9], k = 3\nOutput: 15\nExplanation: The subarrays of nums with length 3 are:\n- [1,5,4] which meets the requirements and has a sum of 10.\n- [5,4,2] which meets the requirements and has a sum of 11.\n- [4,2,9] which meets the requirements and has a sum of 15.\n- [2,9,9] which does not meet the requirements because the element 9 is repeated.\n- [9,9,9] which does not meet the requirements because the element 9 is repeated.\nWe return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [4,4,4], k = 3\nOutput: 0\nExplanation: The subarrays of nums with length 3 are:\n- [4,4,4] which does not meet the requirements because the element 4 is repeated.\nWe return 0 because no subarrays meet the conditions.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 <= k <= nums.length <= 10^5"),(0,r.kt)("li",{parentName:"ul"},"1 <= nums","[i]"," <= 10^5")),(0,r.kt)("h2",{id:"approach-1-sliding-window"},"Approach 1: Sliding Window"),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n is the length of the array"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(k)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where k is the length of the dictionary/hashmap"),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@dhanu084",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def maximumSubarraySum(self, nums: List[int], k: int) -> int:\n        left = 0\n        max_sum = current_sum = 0\n        n = len(nums)\n        # use dictionary instead of set to store frequencies, as the array can consist duplicates\n        seen = {}\n        for right in range(n):\n            seen[nums[right]] = seen.get(nums[right], 0) + 1\n            # current sum keeps track of the sum of the subarray of size k\n            current_sum += nums[right]\n            '''\n                when the difference between right and left becomes k\n                start reducing the value pointed by left pointer if the frequency of the number > 1\n                else if the frequency is 1 we can just delete the entry\n                eg Input : [3,3,3,3] and k = 2\n                seen dictionary value for first subarray will be {3:2}\n                when you move to next k range , it must be decremted to {3:1}\n\n                eg Input: [1,5,4,2,9,9,9], k = 3\n                seen dictionary value for first subarray will be {1:1,5:1,4:1}\n                when moved to next k range remove the first 1 resulting in {5:1,4:1}\n\n            '''\n            if right - left + 1 == k:\n                '''\n                    if length of seen == k, this check is necessary to ensure\n                    that we have no duplicates in the current subarray\n                    Only after this check update the answer\n                '''\n                if len(seen) == k:\n                    max_sum = max(max_sum, current_sum)\n                if seen[nums[left]] > 1:\n                    seen[nums[left]] -= 1\n                else:\n                    seen.pop(nums[left])\n                '''\n                    once value at left pointer is decreased or popped\n                    from dictionary , remove its value from current sum\n                    and increase left pointer\n                '''\n                current_sum -= nums[left]\n                left += 1\n        return max_sum\n")))))}k.isMDXComponent=!0}}]);