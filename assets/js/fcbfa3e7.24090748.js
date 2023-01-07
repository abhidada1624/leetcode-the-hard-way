"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[38290],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,i(i({ref:e},m),{},{components:n})):a.createElement(h,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78732:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/"},l="134 - Gas Station (Medium)",p={unversionedId:"0100-0199/gas-station-medium",id:"0100-0199/gas-station-medium",title:"134 - Gas Station (Medium)",description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/",source:"@site/solutions/0100-0199/0134-gas-station-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/gas-station-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/gas-station-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0134-gas-station-medium.md",tags:[],version:"current",sidebarPosition:134,frontMatter:{description:"Author: @hirotake111 | https://leetcode.com/problems/gas-station/"},sidebar:"tutorialSidebar",previous:{title:"0127 - Word Ladder (Hard)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/word-ladder-hard"},next:{title:"0136 - Single Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/single-number-easy"}},m={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3}],c=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}},d=c("Tabs"),h=c("TabItem"),k=c("SolutionAuthor"),f={toc:u};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"134---gas-station-medium"},"134 - Gas Station (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/gas-station/"},"https://leetcode.com/problems/gas-station/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," gas stations along a circular route, where the amount of gas at the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," station is ",(0,o.kt)("inlineCode",{parentName:"p"},"gas[i]"),"."),(0,o.kt)("p",null,"You have a car with an unlimited gas tank and it costs ",(0,o.kt)("inlineCode",{parentName:"p"},"cost[i]")," of gas to travel from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," station to its next ",(0,o.kt)("inlineCode",{parentName:"p"},"(i + 1)th")," station. You begin the journey with an empty tank at one of the gas stations."),(0,o.kt)("p",null,"Given two integer arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"gas")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cost"),", return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),". If there exists a solution, it is guaranteed to be unique"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\nOutput: 3\nExplanation:\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: gas = [2,3,4], cost = [3,4,3]\nOutput: -1\nExplanation:\nYou can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == gas.length == cost.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= gas[i], cost[i] <= 10^4"))),(0,o.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two Pointers"),(0,o.kt)("p",null,"This approach includes 2 steps as follows:"),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"In the first place we can compare the sum of gas and the sum of cost. If the sum of cost is greater than the sum of gas, we can say there is no way to travel around the circuit with given input. Therefore return ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"Since we passed step 1 with given input, now we are sure there is at least one possible solution (starting index). And according to the problem description, there is only ONE.\nAt this point the only thing we need to do is to find the index which the sum of (",(0,o.kt)("inlineCode",{parentName:"p"},"gas[i]")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"cost[i]"),") is always positive for the rest of input (",(0,o.kt)("inlineCode",{parentName:"p"},"gas")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cost"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time Complexity: ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"n"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,o.kt)("li",{parentName:"ul"},"Space Complexity: ",(0,o.kt)("span",{parentName:"li",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mn",{parentName:"mrow"},"1"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},"1"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))))),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(k,{name:"@hirotake111",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        total_gas = -1\n        starting_index = -1\n\n        if sum(gas) - sum(cost) < 0:\n            return -1\n        # Now we are sure that there is at least ONE solution in this input\n        # (And according to the problem description, there is only ONE.)\n\n        for i, diff in enumerate([g - c for g, c in zip(gas, cost)]):\n            # If total gas is less than 0 we will seak next index that has a positive diff\n            if total_gas < 0:\n                if 0 <= diff:\n                    # We found the new index that has a positive diff\n                    # Update total gas and index\n                    total_gas = diff\n                    starting_index = i\n                continue\n\n            # total gas is positive - add diff to the total\n            total_gas += diff\n\n        return starting_index\n")))))}g.isMDXComponent=!0}}]);