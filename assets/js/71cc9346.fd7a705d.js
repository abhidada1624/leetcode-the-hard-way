"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[83027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||c[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},27485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @ganajayant | https://leetcode.com/problems/intersection-of-two-arrays/"},i="0349 - Intersection of Two Arrays (Easy)",s={unversionedId:"0300-0399/intersection-of-two-arrays-easy",id:"0300-0399/intersection-of-two-arrays-easy",title:"0349 - Intersection of Two Arrays (Easy)",description:"Author: @ganajayant | https://leetcode.com/problems/intersection-of-two-arrays/",source:"@site/solutions/0300-0399/0349-intersection-of-two-arrays-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/intersection-of-two-arrays-easy",permalink:"/solutions/0300-0399/intersection-of-two-arrays-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0349-intersection-of-two-arrays-easy.md",tags:[],version:"current",sidebarPosition:349,frontMatter:{description:"Author: @ganajayant | https://leetcode.com/problems/intersection-of-two-arrays/"},sidebar:"tutorialSidebar",previous:{title:"0347 - Top K Frequent Elements (Medium)",permalink:"/solutions/0300-0399/top-k-frequent-elements-medium"},next:{title:"0355 - Design Twitter (Medium)",permalink:"/solutions/0300-0399/design-twitter-medium"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashMap",id:"approach-1-hashmap",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Tabs"),c=u("TabItem"),y=u("SolutionAuthor"),d={toc:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0349---intersection-of-two-arrays-easy"},"0349 - Intersection of Two Arrays (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/intersection-of-two-arrays/"},"https://leetcode.com/problems/intersection-of-two-arrays/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums1 = [1,2,2,1], nums2 = [2,2]\nOutput: [2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\nOutput: [9,4]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length, nums2.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= nums1[i], nums2[i] <= 1000")," ")),(0,a.kt)("h2",{id:"approach-1-hashmap"},"Approach 1: HashMap"),(0,a.kt)("p",null,"1) Insert all elements from first array into hash table (set)."),(0,a.kt)("p",null,"2) for each element i in second array if it is present in our hash table insert into result list & remove that element from our hash table so we again not insert into result."),(0,a.kt)("p",null,"3) return result. "),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(y,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        HashMap<Integer, Integer> hm = new HashMap<>();\n        for (int i : nums1) {\n            if (hm.containsKey(i)) {\n                hm.put(i, hm.get(i) + 1);\n            } else {\n                hm.put(i, 1);\n            }\n        }\n        LinkedList<Integer> ll = new LinkedList<>();\n        for (int i : nums2) {\n            if (hm.containsKey(i)) {\n                if (hm.get(i) >= 1) {\n                    hm.put(i, hm.get(i) - 1);\n                    if (!ll.contains(i)) {\n                        ll.add(i);\n                    }\n                }\n            }\n        }\n        int ar[] = new int[ll.size()];\n        for (int i = 0; i < ar.length; i++) {\n            ar[i] = ll.get(i);\n        }\n        return ar;\n    }\n}\n")))))}h.isMDXComponent=!0}}]);