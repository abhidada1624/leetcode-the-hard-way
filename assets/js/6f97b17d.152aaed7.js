"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48468],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={description:"Author: @tostream, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/palindrome-number/"},p="0009 - Palindrome Number (Easy)",u={unversionedId:"0000-0099/palindrome-number-easy",id:"0000-0099/palindrome-number-easy",title:"0009 - Palindrome Number (Easy)",description:"Author: @tostream, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/palindrome-number/",source:"@site/solutions/0000-0099/0009-palindrome-number-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/palindrome-number-easy",permalink:"/solutions/0000-0099/palindrome-number-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0009-palindrome-number-easy.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Author: @tostream, @ganajayant, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/palindrome-number/"},sidebar:"tutorialSidebar",previous:{title:"0007 - Reverse Integer (Medium)",permalink:"/solutions/0000-0099/reverse-integer-medium"},next:{title:"0011 - Container With Most Water (Medium)",permalink:"/solutions/0000-0099/container-with-most-water-medium"}},s={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Convert to string",id:"approach-1-convert-to-string",level:2},{value:"Approach 2: Calculation",id:"approach-2-calculation",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},d=c("Tabs"),b=c("TabItem"),f=c("SolutionAuthor"),h={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0009---palindrome-number-easy"},"0009 - Palindrome Number (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindrome-number/"},"https://leetcode.com/problems/palindrome-number/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is palindrome integer."),(0,o.kt)("p",null,"An integer is a ",(0,o.kt)("strong",{parentName:"p"},"palindrome")," when it reads the same backward as forward."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"121")," is a palindrome while ",(0,o.kt)("inlineCode",{parentName:"li"},"123")," is not.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: x = 10\nOutput: false\nExplanation: Reads 01 from right to left. Therefore it is not a palindrome.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-2^31 <= x <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-convert-to-string"},"Approach 1: Convert to string"),(0,o.kt)("p",null,"Convert the integer value to string format and compare it one by one."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@tostream",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        #str: convert to string\n        #[::-1]: read from the end\n        return str(x) == str(x)[::-1]\n"))),(0,o.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isPalindrome(int x) {\n        String str = Integer.toString(x);\n        StringBuilder rev = new StringBuilder(str).reverse();\n        return rev.toString().equals(str);\n    }\n}\n"))),(0,o.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(f,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {number} x\n * @return {boolean}\n */\nvar isPalindrome = function(x) {\n    var str = x.toString();\n    return str.split("").reverse().join("") == x.toString();\n};\n')))),(0,o.kt)("h2",{id:"approach-2-calculation"},"Approach 2: Calculation"),(0,o.kt)("p",null,"Calculate the reversed number."),(0,o.kt)("p",null,"In JavaScript, we have used ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.is(..)")," for value comparison, It's a ES6 feature and makes value comparisons in an even more strict fashion than the === comparison."),(0,o.kt)("p",null,"References from MDN and You Don't Know JS (Behind the scenes polyfills of ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.is"),"). "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#objectis-static-function"},"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch6.md#objectis-static-function"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch1.md#shimspolyfills"},"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch1.md#shimspolyfills"))),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@tostream",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        in_num = x\n        reverser = 0\n        while in_num > 0:\n            reverser = reverser * 10 + checker % 10\n            in_num = in_num//10\n        return reverser == x\n"))),(0,o.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isPalindrome(int x) {\n        if (x < 0) {\n            return false;\n        } else {\n            int result = 0;\n            int n = x;\n            while (n > 0) {\n                int r = n % 10;\n                result = result * 10 + r;\n                n /= 10;\n            }\n            return result == x;\n        }\n    }\n}\n"))),(0,o.kt)(b,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(f,{name:"@MithunPrabhu777",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var isPalindrome = function(x) {\n    if (x < 0 || x > 0 && Object.is(x % 10, 0)) return false;\n    let n = x;\n    let num = 0;\n    while (x > 0) {\n        num = (num * 10) + (x % 10);\n        x = Math.floor(x / 10);\n    }\n    return Object.is(n, num);\n};\n")))))}k.isMDXComponent=!0}}]);