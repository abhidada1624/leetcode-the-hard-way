"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72269],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/"},a="0278 - First Bad Version (Easy)",s={unversionedId:"0200-0299/first-bad-version-easy",id:"0200-0299/first-bad-version-easy",title:"0278 - First Bad Version (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/",source:"@site/solutions/0200-0299/0278-first-bad-version-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/first-bad-version-easy",permalink:"/solutions/0200-0299/first-bad-version-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0278-first-bad-version-easy.md",tags:[],version:"current",sidebarPosition:278,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/"},sidebar:"tutorialSidebar",previous:{title:"0268 - Missing Number (Easy)",permalink:"/solutions/0200-0299/missing-number-easy"},next:{title:"0283 - Move Zeroes (Easy)",permalink:"/solutions/0200-0299/move-zeroes-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},u=d("Tabs"),c=d("TabItem"),m=d("SolutionAuthor"),f={toc:p},b="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(b,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0278---first-bad-version-easy"},"0278 - First Bad Version (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-bad-version/"},"https://leetcode.com/problems/first-bad-version/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad."),(0,o.kt)("p",null,"Suppose you have ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," versions ",(0,o.kt)("inlineCode",{parentName:"p"},"[1, 2, ..., n]")," and you want to find out the first bad one, which causes all the following ones to be bad."),(0,o.kt)("p",null,"You are given an API ",(0,o.kt)("inlineCode",{parentName:"p"},"bool isBadVersion(version)")," which returns whether ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, bad = 4\nOutput: 4\nExplanation:\ncall isBadVersion(3) -> false\ncall isBadVersion(5) -> true\ncall isBadVersion(4) -> true\nThen 4 is the first bad version.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 1, bad = 1\nOutput: 1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= bad <= n <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-binary-search"},"Approach 1: Binary Search"),(0,o.kt)("admonition",{title:"Prerequisite",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../tutorials/basic-topics/binary-search"},"Binary Search")))),(0,o.kt)(u,{mdxType:"Tabs"},(0,o.kt)(c,{value:"c++",label:"C++",mdxType:"TabItem"},(0,o.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// The API isBadVersion is defined for you.\n// bool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        // init possible range\n        int l = 1, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            // [F,F,..,F,T,T,T,..,T]\n            // exclude m\n            if (!isBadVersion(m)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n"))),(0,o.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(m,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for isBadVersion()\n * \n * @param {integer} version number\n * @return {boolean} whether the version is bad\n * isBadVersion = function(version) {\n *     ...\n * };\n */\n\n/**\n * @param {function} isBadVersion()\n * @return {function}\n */\nvar solution = function(isBadVersion) {\n    /**\n     * @param {integer} n Total versions\n     * @return {integer} The first bad version\n     */\n    return function(n) {\n        let l = 1;\n        let r = n;\n        while (l < r) {\n            let mid = Math.floor((l + r) / 2);\n            if (!isBadVersion(mid)) l = mid + 1;\n            else r = mid;\n        }\n        return l;\n    };\n};\n"))),(0,o.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# The isBadVersion API is already defined for you.\n# def isBadVersion(version: int) -> bool:\n\nclass Solution:\n    def firstBadVersion(self, n: int) -> int:\n        l, r = 1, n\n        while l < r:\n            mid = (l + r) // 2\n            if (isBadVersion(mid)):\n                r = mid\n            else:\n                l = mid + 1\n        return l \n")))))}h.isMDXComponent=!0}}]);