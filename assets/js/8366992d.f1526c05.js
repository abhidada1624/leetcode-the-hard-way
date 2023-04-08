"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35693],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=l(t),h=r,d=c["".concat(i,".").concat(h)]||c[h]||u[h]||s;return t?n.createElement(d,m(m({ref:a},o),{},{components:t})):n.createElement(d,m({ref:a},o))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:r,m[1]=p;for(var l=2;l<s;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},15686:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/"},m="0287 - Find the Duplicate Number (Medium)",p={unversionedId:"0200-0299/find-the-duplicate-number-medium",id:"0200-0299/find-the-duplicate-number-medium",title:"0287 - Find the Duplicate Number (Medium)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/",source:"@site/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/find-the-duplicate-number-medium",permalink:"/solutions/0200-0299/find-the-duplicate-number-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0287-find-the-duplicate-number-medium.md",tags:[],version:"current",sidebarPosition:287,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/"},sidebar:"tutorialSidebar",previous:{title:"0286 - Walls and Gates (Medium)",permalink:"/solutions/0200-0299/walls-and-gates-medium"},next:{title:"0290 - Word Pattern (Easy)",permalink:"/solutions/0200-0299/word-pattern-easy"}},i={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking",id:"approach-1-bit-masking",level:2},{value:"Approach 2: Index based",id:"approach-2-index-based",level:2},{value:"Approach 3: Floyd&#39;s Tortoise and Hare (cycle detection)",id:"approach-3-floyds-tortoise-and-hare-cycle-detection",level:2}],o=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=o("Tabs"),u=o("TabItem"),h=o("SolutionAuthor"),d={toc:l},k="wrapper";function N(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0287---find-the-duplicate-number-medium"},"0287 - Find the Duplicate Number (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-the-duplicate-number/"},"https://leetcode.com/problems/find-the-duplicate-number/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given an array of integers ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"n + 1")," integers where each integer is in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, n]")," inclusive."),(0,r.kt)("p",null,"There is only ",(0,r.kt)("strong",{parentName:"p"},"one repeated number")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,r.kt)("em",{parentName:"p"},"this repeated number"),"."),(0,r.kt)("p",null,"You must solve the problem ",(0,r.kt)("strong",{parentName:"p"},"without")," modifying the array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," and uses only constant extra space."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1,3,4,2,2]\nOutput: 2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [3,1,3,4,2]\nOutput: 3\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nums.length == n + 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= n")),(0,r.kt)("li",{parentName:"ul"},"All the integers in ",(0,r.kt)("inlineCode",{parentName:"li"},"nums")," appear only ",(0,r.kt)("strong",{parentName:"li"},"once")," except for ",(0,r.kt)("strong",{parentName:"li"},"precisely one integer")," which appears ",(0,r.kt)("strong",{parentName:"li"},"two or more")," times.")),(0,r.kt)("h2",{id:"approach-1-bit-masking"},"Approach 1: Bit Masking"),(0,r.kt)("p",null,"We iterate each bit one by one. We calculate the expected bit count and the actual bit count. If the actual one is greater than the expected one, then it means this bit is part of the duplicate number."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(u,{value:"c++",label:"C++",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        int duplicate = 0, n = nums.size() - 1;\n        // iterate each bit one by one\n        for(int i = 0; i < 31; i++) {\n            long expected = 0, actual = 0;\n            // the integer range [1, n] inclusive\n            // iterate each integer to calculate the expected bit count\n            for(int j = 1; j <= n; j++) expected += (1 << i) & j;\n            // iterate each number to calculate the actual bit count\n            for(int j : nums) actual += (1 << i) & j;\n            // if actual one is greater than the expected one\n            // then this bit is part of the duplicate number\n            if(actual > expected) duplicate |= (1 << i);\n        }\n        return duplicate;\n    }\n};\n")))),(0,r.kt)("h2",{id:"approach-2-index-based"},"Approach 2: Index based"),(0,r.kt)("p",null,"As per problem constraint, all numbers starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"1 to N"),". So shift all numbers to the exact index (",(0,r.kt)("inlineCode",{parentName:"p"},"num - 1"),") positions and find the duplicate. Here, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," can be placed in index ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"))))),", like wise shift all the numbers one by one, at last, in the last index we will be having the duplicate number."),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n is the number of elements in the array"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int findDuplicate(int[] nums) {\n        int i = 0;\n        while (i < arr.length) {\n            if (arr[i] != i + 1) {\n                if (arr[arr[i] - 1] != arr[i]) {\n                    int j = arr[i] - 1;\n                    int temp = arr[i];\n                    arr[i] = arr[j];\n                    arr[j] = temp;\n                } else {\n                    return arr[i];\n                }\n            } else {\n                i++;\n            }\n        }\n        return -1;\n    }\n}\n")))),(0,r.kt)("h2",{id:"approach-3-floyds-tortoise-and-hare-cycle-detection"},"Approach 3: Floyd's Tortoise and Hare (cycle detection)"),(0,r.kt)("p",null,"Solving this in linear time and constant space requires Floyd's Tortoise and Hare algorithm. "),(0,r.kt)("p",null,"It's a simple cycle detection algorithm, where one pointer traverses twice as fast as another, once two pointers meet, we can trace back to where the cycle begins."),(0,r.kt)("p",null,"Time complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where n is the number of elements in the array"),(0,r.kt)("p",null,"Space complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int findDuplicate(int[] nums) {\n        int slow = nums[0];\n        int fast = nums[nums[0]];\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[nums[fast]];\n        }\n        fast = 0;\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[fast];\n        }\n        return slow;\n    }\n}\n"))),(0,r.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findDuplicate = function(nums) {\n    let slow = 0;\n    let fast = 0;\n    while (true) {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n        if (slow == fast) break;\n    }\n    fast = 0;\n    while (true) {\n        slow = nums[slow];\n        fast = nums[fast];\n        if (slow == fast) return slow;\n    }\n};\n"))),(0,r.kt)(u,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findDuplicate(self, nums: List[int]) -> int:\n        slow, fast = 0, 0 \n        while True:\n            slow = nums[slow]\n            fast = nums[nums[fast]]\n            if slow == fast:\n                break\n        \n        fast = 0\n        while True:\n            slow = nums[slow]\n            fast = nums[fast]\n            if slow == fast:\n                return slow \n")))))}N.isMDXComponent=!0}}]);