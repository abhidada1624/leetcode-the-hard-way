"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[19045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-in-intervals"},o="2276 - Count Integers in Intervals (Hard)",l={unversionedId:"2200-2299/count-integers-in-intervals-hard",id:"2200-2299/count-integers-in-intervals-hard",title:"2276 - Count Integers in Intervals (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-in-intervals",source:"@site/solutions/2200-2299/2276-count-integers-in-intervals-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/count-integers-in-intervals-hard",permalink:"/solutions/2200-2299/count-integers-in-intervals-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2276-count-integers-in-intervals-hard.md",tags:[],version:"current",sidebarPosition:2276,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-integers-in-intervals"},sidebar:"tutorialSidebar",previous:{title:"2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)",permalink:"/solutions/2200-2299/largest-combination-with-bitwise-and-greater-than-zero-medium"},next:{title:"2278 - Percentage of Letter in String (Easy)",permalink:"/solutions/2200-2299/percentage-of-letter-in-string"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sweep Line &amp; Merge",id:"approach-1-sweep-line--merge",level:2}],u=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2276---count-integers-in-intervals-hard"},"2276 - Count Integers in Intervals (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-integers-in-intervals"},"https://leetcode.com/problems/count-integers-in-intervals")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an ",(0,a.kt)("strong",{parentName:"p"},"empty")," set of intervals, implement a data structure that can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add")," an interval to the set of intervals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Count")," the number of integers that are present in ",(0,a.kt)("strong",{parentName:"li"},"at least one")," interval.")),(0,a.kt)("p",null,"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"CountIntervals")," class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CountIntervals()")," Initializes the object with an empty set of intervals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void add(int left, int right)")," Adds the interval ",(0,a.kt)("inlineCode",{parentName:"li"},"[left, right]")," to the set of intervals."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int count()")," Returns the number of integers that are present in ",(0,a.kt)("strong",{parentName:"li"},"at least one")," interval.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," that an interval ",(0,a.kt)("inlineCode",{parentName:"p"},"[left, right]")," denotes all the integers ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"left <= x <= right"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input\n["CountIntervals", "add", "add", "count", "add", "count"]\n[[], [2, 3], [7, 10], [], [5, 8], []]\nOutput\n[null, null, null, 6, null, 8]\n\nExplanation\nCountIntervals countIntervals = new CountIntervals(); // initialize the object with an empty set of intervals. \ncountIntervals.add(2, 3);  // add [2, 3] to the set of intervals.\ncountIntervals.add(7, 10); // add [7, 10] to the set of intervals.\ncountIntervals.count();    // return 6\n                           // the integers 2 and 3 are present in the interval [2, 3].\n                           // the integers 7, 8, 9, and 10 are present in the interval [7, 10].\ncountIntervals.add(5, 8);  // add [5, 8] to the set of intervals.\ncountIntervals.count();    // return 8\n                           // the integers 2 and 3 are present in the interval [2, 3].\n                           // the integers 5 and 6 are present in the interval [5, 8].\n                           // the integers 7 and 8 are present in the intervals [5, 8] and [7, 10].\n                           // the integers 9 and 10 are present in the interval [7, 10].\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= left <= right <= 10^9")),(0,a.kt)("li",{parentName:"ul"},"At most ",(0,a.kt)("inlineCode",{parentName:"li"},"105")," calls ",(0,a.kt)("strong",{parentName:"li"},"in total")," will be made to ",(0,a.kt)("inlineCode",{parentName:"li"},"add")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),"."),(0,a.kt)("li",{parentName:"ul"},"At least ",(0,a.kt)("strong",{parentName:"li"},"one")," call will be made to ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),".")),(0,a.kt)("h2",{id:"approach-1-sweep-line--merge"},"Approach 1: Sweep Line & Merge"),(0,a.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class CountIntervals {\npublic:\n    CountIntervals() {\n        modified = 0;\n        res = 0;\n    }\n    \n    void add(int left, int right) {\n        // in\n        m[left] += 1;\n        // out\n        m[right + 1] -= 1;\n        // mark as modified to check if we need to recalculate the count\n        modified = 1;\n    }\n    \n    int count() {\n        if (modified) {\n            res = 0;\n            map<int, int> m2;\n            int l = 0, n = 0;\n            for (auto& x : m) {\n                // start of interval\n                if (n == 0) l = x.first;\n                n += x.second;\n                // end of interval\n                if (n == 0) {\n                    // update the new map\n                    m2[l] += 1;\n                    m2[x.first] -= 1;\n                    // calculate the range\n                    res += x.first - l;\n                }\n            }\n            // replace the map \n            m = m2;\n        }\n        modified = 0;\n        return res;\n    }\nprivate:\n    map<int, int> m;\n    int modified, res;\n};\n\n/**\n * Your CountIntervals object will be instantiated and called as such:\n * CountIntervals* obj = new CountIntervals();\n * obj->add(left,right);\n * int param_2 = obj->count();\n */\n\n")))}h.isMDXComponent=!0}}]);