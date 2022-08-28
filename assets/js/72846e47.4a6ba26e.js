"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9333],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20124:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(8539),l=["components"],s={description:"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},d="2164 - Sort Even and Odd Indices Independently (Easy)",p={unversionedId:"2100-2199/sort-even-and-odd-indices-independently-easy",id:"2100-2199/sort-even-and-odd-indices-independently-easy",title:"2164 - Sort Even and Odd Indices Independently (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/",source:"@site/solutions/2100-2199/2164-sort-even-and-odd-indices-independently-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/sort-even-and-odd-indices-independently-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/sort-even-and-odd-indices-independently-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2164-sort-even-and-odd-indices-independently-easy.md",tags:[],version:"current",sidebarPosition:2164,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},sidebar:"tutorialSidebar",previous:{title:"2163 - Minimum Difference in Sums After Removal of Elements (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-difference-in-sums-after-removal-of-elements-hard"},next:{title:"2165 - Smallest Value of the Rearranged Number (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/smallest-value-of-the-rearranged-number-medium"}},m={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2}],c={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2164---sort-even-and-odd-indices-independently-easy"},"2164 - Sort Even and Odd Indices Independently (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},"https://leetcode.com/problems/sort-even-and-odd-indices-independently/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given a ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),". Rearrange the values of ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," according to the following rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sort the values at ",(0,i.kt)("strong",{parentName:"li"},"odd indices")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," in ",(0,i.kt)("strong",{parentName:"li"},"non-increasing")," order.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"nums = [4,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"1")),(0,i.kt)("inlineCode",{parentName:"li"},",2,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3")),(0,i.kt)("inlineCode",{parentName:"li"},"]")," before this step, it becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"[4,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3")),(0,i.kt)("inlineCode",{parentName:"li"},",2,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"1")),(0,i.kt)("inlineCode",{parentName:"li"},"]")," after. The values at odd indices ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," are sorted in non-increasing order."))),(0,i.kt)("li",{parentName:"ol"},"Sort the values at ",(0,i.kt)("strong",{parentName:"li"},"even indices")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," in ",(0,i.kt)("strong",{parentName:"li"},"non-decreasing")," order.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, if ",(0,i.kt)("inlineCode",{parentName:"li"},"nums = ["),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"4")),(0,i.kt)("inlineCode",{parentName:"li"},",1,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2")),(0,i.kt)("inlineCode",{parentName:"li"},",3]")," before this step, it becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"["),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"2")),(0,i.kt)("inlineCode",{parentName:"li"},",1,"),(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"4")),(0,i.kt)("inlineCode",{parentName:"li"},",3]")," after. The values at even indices ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"2")," are sorted in non-decreasing order.")))),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the array formed after rearranging the values of")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [4,1,2,3]\nOutput: [2,3,4,1]\nExplanation: \nFirst, we sort the values present at odd indices (1 and 3) in non-increasing order.\nSo, nums changes from [4,1,2,3] to [4,3,2,1].\nNext, we sort the values present at even indices (0 and 2) in non-decreasing order.\nSo, nums changes from [4,1,2,3] to [2,3,4,1].\nThus, the array formed after rearranging the values is [2,3,4,1].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,1]\nOutput: [2,1]\nExplanation: \nSince there is exactly one odd index and one even index, no rearrangement of values takes place.\nThe resultant array formed is [2,1], which is the same as the initial array.  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 100"))),(0,i.kt)("h2",{id:"approach-1-iteration"},"Approach 1: Iteration"),(0,i.kt)("p",null,"The simplest approach is to store odd-indexed numbers and even-indexed numbers separately, then sort them and merge them. One approach to store them separately is to check the parity (odd or even) of the iterating variable ( ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," in this example solution), and store them to their corresponding lists."),(0,i.kt)("p",null,"We then sort the two lists. We note that odd-indexed numbers need to be ",(0,i.kt)("strong",{parentName:"p"},"non-increasing"),", so we need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"reverse"),". Another approach to sort in reverse order is ",(0,i.kt)("inlineCode",{parentName:"p"},"odds.sort(reverse = True)"),"."),(0,i.kt)("p",null,"We then put the numbers back to ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," using a similar method of retrieving the parity of the iterating variable."),(0,i.kt)(o.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def sortEvenOdd(self, nums: List[int]) -> List[int]:\n        \n        #initialize the two lists for odd-indexed numbers and even-indexed numbers\n        odds = []\n        evens = []\n        \n        #place the numbers into the two lists accordingly\n        for i in range(len(nums)):\n            if(i % 2 == 1):\n                odds.append(nums[i])\n            else:\n                evens.append(nums[i])\n                \n        #sort the two lists        \n        odds.sort()\n        evens.sort()\n        \n        #as we want odd-indexed numbers to be non-increasing, we need to reverse it\n        odds.reverse()\n        \n        #initialize result\n        result = []\n        \n        #iterate all numbers\n        for i in range(len(nums)):\n            \n            #put the numbers back \n            #we have i//2 because we take turns visiting odds and evens\n            if(i % 2 == 1):\n                result.append(odds[i//2])\n            else:\n                result.append(evens[i//2])\n        \n        #return result\n        return result\n")))}h.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);