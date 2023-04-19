"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3285],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),o=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(t),c=r,k=u["".concat(l,".").concat(c)]||u[c]||h[c]||m;return t?a.createElement(k,s(s({ref:n},p),{},{components:t})):a.createElement(k,s({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<m;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>i,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const m={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/"},s="0496 - Next Greater Element I (Easy)",i={unversionedId:"0400-0499/next-greater-element-i-easy",id:"0400-0499/next-greater-element-i-easy",title:"0496 - Next Greater Element I (Easy)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/",source:"@site/solutions/0400-0499/0496-next-greater-element-i-easy.md",sourceDirName:"0400-0499",slug:"/0400-0499/next-greater-element-i-easy",permalink:"/solutions/0400-0499/next-greater-element-i-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0496-next-greater-element-i-easy.md",tags:[],version:"current",sidebarPosition:496,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/"},sidebar:"tutorialSidebar",previous:{title:"0494 - Target Sum (Medium)",permalink:"/solutions/0400-0499/target-sum-medium"},next:{title:"0454 -  4Sum II (Medium)",permalink:"/solutions/0400-0499/0454-4sum-ii-medium"}},l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map + Stack",id:"approach-1-hash-map--stack",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=p("Tabs"),h=p("TabItem"),c=p("SolutionAuthor"),k={toc:o},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0496---next-greater-element-i-easy"},"0496 - Next Greater Element I (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/next-greater-element-i/"},"https://leetcode.com/problems/next-greater-element-i/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"next greater element")," of some element ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," in an array is the ",(0,r.kt)("strong",{parentName:"p"},"first greater")," element that is ",(0,r.kt)("strong",{parentName:"p"},"to the right")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," in the same array."),(0,r.kt)("p",null,"You are given two ",(0,r.kt)("strong",{parentName:"p"},"distinct 0-indexed")," integer arrays ",(0,r.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"nums1")," is a subset of ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2"),"."),(0,r.kt)("p",null,"For each ",(0,r.kt)("inlineCode",{parentName:"p"},"0 <= i < nums1.length"),", find the index ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"nums1[i] == nums2[j]")," and determine the ",(0,r.kt)("strong",{parentName:"p"},"next greater element")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2[j]")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2"),". If there is no next greater element, then the answer for this query is ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"an array")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ans")," ",(0,r.kt)("em",{parentName:"p"},"of length")," ",(0,r.kt)("inlineCode",{parentName:"p"},"nums1.length")," ",(0,r.kt)("em",{parentName:"p"},"such that")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ans[i]")," ",(0,r.kt)("em",{parentName:"p"},"is the ",(0,r.kt)("strong",{parentName:"em"},"next greater element")," as described above.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums1 = [4,1,2], nums2 = [1,3,4,2]\nOutput: [-1,3,-1]\nExplanation: The next greater element for each value of nums1 is as follows:\n- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.\n- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.\n- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums1 = [2,4], nums2 = [1,2,3,4]\nOutput: [3,-1]\nExplanation: The next greater element for each value of nums1 is as follows:\n- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.\n- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length <= nums2.length <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= nums1[i], nums2[i] <= 10^4")),(0,r.kt)("li",{parentName:"ul"},"All integers in ",(0,r.kt)("inlineCode",{parentName:"li"},"nums1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nums2")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),"."),(0,r.kt)("li",{parentName:"ul"},"All the integers of ",(0,r.kt)("inlineCode",{parentName:"li"},"nums1")," also appear in ",(0,r.kt)("inlineCode",{parentName:"li"},"nums2"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Follow up:")," Could you find an ",(0,r.kt)("inlineCode",{parentName:"p"},"O(nums1.length + nums2.length)")," solution?"),(0,r.kt)("h2",{id:"approach-1-hash-map--stack"},"Approach 1: Hash Map + Stack"),(0,r.kt)("p",null,"The first thing we need to do is to store the ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(value, index)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," pair from ",(0,r.kt)("inlineCode",{parentName:"p"},"nums1")," in a hash map."),(0,r.kt)("p",null,"Then we need to find the ",(0,r.kt)("em",{parentName:"p"},"next greater element")," of all elements in ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2"),". This can be achieved by using a stack. If the current element is greater than the last element of the stack, we know the next greater element of the last element of the stack is the current element. We can access the index of the last element of the stack with ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_map")," (if it exists). Then we can put the current","_","element in result."),(0,r.kt)("p",null,"After processing ",(0,r.kt)("inlineCode",{parentName:"p"},"nums2"),", we need to assign ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," to the elements still in the stack (no ",(0,r.kt)("em",{parentName:"p"},"next greater element"),") with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_map"),"."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(c,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        \n        #initialize hash map to store the (value, index) pair in nums1\n        hash_map = {}\n        \n        #put (value, index) pair of nums1 in hash_map\n        for i in range(len(nums1)):\n            hash_map[nums1[i]] = i\n        \n        \n        #initialize result list    \n        result = [0] * len(nums1)\n        \n        #initialize stack list\n        stack = []\n        \n        #iterate all elements in nums2\n        for i in range(len(nums2)):\n            \n            current_number = nums2[i]\n            \n            #if current_number is larger than the last element in stack\n            #current_number is the next greater element of the last number in stack\n            while(stack and current_number > stack[-1]):\n                \n                #we need to check if the last number in stack is in nums1 \n                if(stack[-1] in hash_map):\n                    \n                    #we can get its index from hash_map\n                    index_in_nums1 = hash_map[stack[-1]]\n                    \n                    #we then set the corresponding position in result to current_number\n                    result[index_in_nums1] = current_number\n                    \n                #remove the last element in stack after processing\n                stack.pop()\n                \n            #add current_number to stack, trying to find the next greater element\n            stack.append(current_number)\n        \n        #for the numbers that do not have a next greater element, set it to -1\n        for remaining_number in stack:\n            \n            #we need to check if remaining_number is in nums1\n            if(remaining_number in hash_map):\n                \n                #we can get its index in nums1 from hash_map\n                index_in_nums1 = hash_map[remaining_number]\n    \n                #set its position in result to -1 (no greater element)\n                result[index_in_nums1] = -1\n        \n        #return result\n        return result\n"))),(0,r.kt)(h,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)(c,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"use std::collections::HashMap;\n\nimpl Solution {\n    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {\n        let mut s = Vec::new();\n        let mut m = HashMap::new();\n        let mut ans = Vec::new();\n        for x in nums2 {\n            while let Some(&top) = s.last() {\n                if x <= top {\n                    break;\n                } \n                m.insert(top, x);\n                s.pop();\n            }\n            s.push(x);\n        }\n        for x in nums1 { \n            ans.push(m.get(&x).copied().unwrap_or(-1));\n        }\n        ans\n    }\n}\n")))))}g.isMDXComponent=!0}}]);