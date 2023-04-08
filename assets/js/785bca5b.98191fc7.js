"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40619],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/numbers-with-same-consecutive-differences/",tags:["Backtracking","Breadth-First Search"]},a="0967 - Numbers With Same Consecutive Differences (Medium)",s={unversionedId:"0900-0999/numbers-with-same-consecutive-differences-medium",id:"0900-0999/numbers-with-same-consecutive-differences-medium",title:"0967 - Numbers With Same Consecutive Differences (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/numbers-with-same-consecutive-differences/",source:"@site/solutions/0900-0999/0967-numbers-with-same-consecutive-differences-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/numbers-with-same-consecutive-differences-medium",permalink:"/solutions/0900-0999/numbers-with-same-consecutive-differences-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0967-numbers-with-same-consecutive-differences-medium.md",tags:[{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"}],version:"current",sidebarPosition:967,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/numbers-with-same-consecutive-differences/",tags:["Backtracking","Breadth-First Search"]},sidebar:"tutorialSidebar",previous:{title:"0952 - Largest Component Size by Common Factor (Hard)",permalink:"/solutions/0900-0999/largest-component-size-by-common-factor-hard"},next:{title:"0973 - K Closest Points to Origin (Medium)",permalink:"/solutions/0900-0999/k-closest-points-to-origin-medium"}},u={},l=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],c=(p="SolutionAuthor",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const m={toc:l},d="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0967---numbers-with-same-consecutive-differences-medium"},"0967 - Numbers With Same Consecutive Differences (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Return all ",(0,i.kt)("strong",{parentName:"p"},"non-negative")," integers of length ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," such that the absolute difference between every two consecutive digits is ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"every")," number in the answer ",(0,i.kt)("strong",{parentName:"p"},"must not")," have leading zeros. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"01")," has one leading zero and is invalid."),(0,i.kt)("p",null,"You may return the answer in ",(0,i.kt)("strong",{parentName:"p"},"any order"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 3, k = 7\nOutput: [181,292,707,818,929]\nExplanation: Note that 070 is not a valid number, because it has leading zeroes.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 2, k = 1\nOutput: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= n <= 9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= k <= 9"))),(0,i.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,i.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(2 ^ n)\n// Space Complexity: O(2 ^ n)\nclass Solution {\npublic:\n    // The idea is to use BFS to try appending 0 - 9 to each number \n    // starting from a single digit 1 - 9 until the number has n digits\n    vector<int> numsSameConsecDiff(int n, int k) {\n        // push all numbers with single digit to a deque\n        deque<int> q{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };\n        // do the following logic n - 1 times\n        while (--n > 0) {\n            // get the queue size\n            int sz = q.size();\n            // for each item in the current queue,\n            // do the following logic\n            for (int i = 0; i < sz; i++) {\n                // get the first number from the queue\n                int p = q.front();\n                // pop it\n                q.pop_front();\n                // we can potentially add 0 to 9 to the current number p\n                for (int j = 0; j < 10; j++) {\n                    // we use p % 10 to get the last digit of p\n                    // then get the difference with j\n                    // since (p % 10) - j can be negative and positive\n                    // we use abs to cover both case\n                  if (abs((p % 10) - j) == k) {\n                    // if the difference is equal to k\n                    // we can include digit j \n                    // so multiply the current number by 10 and add j\n                    q.push_back(p * 10 + j);\n                  }\n                }\n          }\n        }\n        // return all numbers in deque, return them in vector<int>\n        return vector<int>{q.begin(), q.end()};\n    }\n};\n")),(0,i.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(2 ^ n)\n# Space Complexity: O(2 ^ n)\nclass Solution:\n    # The idea is to use BFS to try appending 0 - 9 to each number \n    # starting from a single digit 1 - 9 until the number has n digits\n    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:\n        # init ans\n        ans = []\n        # push all numbers with single digit to a deque\n        # (1, d) : (current position, number)\n        d = deque((1, d) for d in range(1, 10))\n        # while the queue is not empty\n        while d:\n            # pop the first element from the deque\n            pos, num = d.pop()\n            # if the current position is n, \n            if pos == n:\n                # then we can append num to ans\n                ans.append(num)\n            else:\n                # otherwise, we can iterate 0 to 9\n                for j in range(10):\n                    # and use num % 10 to get the last digit of num\n                    # then get the difference with j\n                    # since (num % 10) - j can be negative and positive\n                    # we use abs to cover both case\n                    if abs(num % 10 - j) == k:\n                        # if the difference is equal to k\n                        # we can include digit j \n                        # so multiply the current number by 10 and add j\n                        d.append((pos + 1, num * 10 + j))\n        # return the final ans\n        return ans\n")))}f.isMDXComponent=!0}}]);