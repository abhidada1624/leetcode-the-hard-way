"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},o="0028 - Find the Index of the First Occurrence in a String (Easy)",s={unversionedId:"0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",id:"0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",title:"0028 - Find the Index of the First Occurrence in a String (Easy)",description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",source:"@site/solutions/0000-0099/0028-find-the-index-of-the-first-occurrence-in-a-string-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",permalink:"/solutions/0000-0099/find-the-index-of-the-first-occurrence-in-a-string-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0028-find-the-index-of-the-first-occurrence-in-a-string-easy.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{description:"Author: @la-la-Cute, @ganajayant, @radojicic23 | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},sidebar:"tutorialSidebar",previous:{title:"0026 - Remove Duplicates from Sorted Array (Easy)",permalink:"/solutions/0000-0099/Remove-Duplicates-from-Sorted-Array-easy"},next:{title:"0033 - Search in Rotated Sorted Array (Medium)",permalink:"/solutions/0000-0099/search-in-rotated-sorted-array-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Rolling Hash",id:"approach-1-rolling-hash",level:2},{value:"Approach 2: Index Of",id:"approach-2-index-of",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},h=p("Tabs"),d=p("TabItem"),u=p("SolutionAuthor"),m={toc:c},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0028---find-the-index-of-the-first-occurrence-in-a-string-easy"},"0028 - Find the Index of the First Occurrence in a String (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"},"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Implement ",(0,a.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/cstring/strstr/"},"strStr()"),"."),(0,a.kt)("p",null,"Return the index of the first occurrence of needle in haystack, or ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"needle")," is not part of ",(0,a.kt)("inlineCode",{parentName:"p"},"haystack"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clarification:")),(0,a.kt)("p",null,"What should we return when ",(0,a.kt)("inlineCode",{parentName:"p"},"needle")," is an empty string? This is a great question to ask during an interview."),(0,a.kt)("p",null,"For the purpose of this problem, we will return 0 when ",(0,a.kt)("inlineCode",{parentName:"p"},"needle")," is an empty string. This is consistent to C's ",(0,a.kt)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/cstring/strstr/"},"strstr()")," and Java's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)"},"indexOf()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: haystack = "hello", needle = "ll"\nOutput: 2\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: haystack = "aaaaa", needle = "bba"\nOutput: -1\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: haystack = "", needle = ""\nOutput: 0\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= haystack.length, needle.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"haystack")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"needle")," consist of only lower-case English characters.")),(0,a.kt)("h2",{id:"approach-1-rolling-hash"},"Approach 1: Rolling Hash"),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(u,{name:"@la-la-Cute",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    """Searching for substring in a string - using Rolling hash (the Rabin-Karp algorithm)"""\n\n    def strStr(self, s: str, pattern: str) -> int:\n        # Before anything else, check if `pattern` is an empty string, in which case we return 0 as required by the problem.\n        if not pattern:\n            return 0\n        # Choose a prime number for the base and a modulus, denoted by d and q respectively.\n        PRIME, MOD = 100007, 500000\n        # For better readability, here we assign the lengths of `s` and `pattern` to the variables n and m respectively.\n        n, m = len(s), len(pattern)\n        # Precompute d ^ (m - 1) mod q, where d is the base chosen, m is len(pattern) and q is the modulus chosen.\n        #   Note: it is important this value be computed efficiently. One way is to use the built-in pow.\n        h = pow(PRIME, m - 1, MOD)\n        # Compute the hash value of `pattern`. This can be done by simply applying the formula.\n        hash_val = sum(ord(c) * pow(PRIME, m - 1 - i, MOD) for i, c in enumerate(pattern)) % MOD\n        # Initialize a dictionary which maps indices to the hash values of their respective substrings.\n        #   Specifically, t[i] is the hash value of s[i: i + m] (i.e., an m-sized substring of `s` starting at index `i`)\n        t = {}\n\n        # Calculate the hash value of all substrings of `s`, the number of which is n - m.\n        for idx in range(n - m + 1):\n            # If idx == 0, compute the hash value of the first substring. Just like the way we do it for `pattern` above.\n            if idx == 0:\n                t[0] = sum(ord(s[j]) * pow(PRIME, m - 1 - j, MOD) for j in range(m)) % MOD\n            else:\n                # For i > 0, here comes the essence of "rolling hash", \n                #   whereby we manage to compute t[i - 1] with little work.\n                #\n                # EXPLANATION:\n                #   The formula for t[i] is given by:\n                #       (the sum of s_k * d ^ (m + i - 1 - k) for i <= k < i + m) mod q\n                #       where s_k is the numerical value for the s[k] (here we use the ASCII value).\n                #   Then, observe that, for two successive substrings of length m,\n                #       or using Python\'s slicing syntax, s[i: i + m] and s[i + 1: i + m + 1],\n                #       one can say they differ by \n                #           i) the previously leftmost character, which is now dropped, and,\n                #           ii) the currently rightmost character, which is new part of the substring.\n                #   In other words, the other m - 1 characters are basically unaffected \n                #       except that their positions are shifted leftward by one index.\n                #       These charachers, alongside the differing ones, make up of both t[i - 1] and t[i], \n                #       with the only difference of the power that is increased by 1.\n                #   To compute t[i] from t[i - 1],\n                #       firstly, find s_k * d ^ (m + i - 1 - k) for the leftmost character to be dropped,\n                #           that is, to multiply ord(s[i - 1]) by d ^ (m - 1) = h (precomputed),\n                #           and take that amount off t[i - 1];\n                #       secondly, multiply the result by d, adjusting for the power of d having increased by one \n                #           (with respect to each characher).\n                #       thirdly, add the last part of t[i], that of the character on the right end, \n                #           given by ord(s[i + m - 1]), to the sum.\n                #       finally, don\'t forget the modulo operation.\n                t[idx] = (PRIME * (t[idx - 1] - ord(s[idx - 1]) * h) + ord(s[idx + m - 1])) % MOD\n            # If two strings are identical, they must have the same hash value.\n            # However, beware of "spurious hits", where two different strings happen to share the same hash value.\n            # As such, we compare the substring against `pattern` to verify the result.\n            if t[idx] == hash_val and s[idx : idx + m] == pattern:\n                return idx\n        return -1\n')))),(0,a.kt)("h2",{id:"approach-2-index-of"},"Approach 2: Index Of"),(0,a.kt)("p",null,"using method in string indexOf gives the first index of needle if it appeared in haystack"),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int strStr(String haystack, String needle) {\n        if (needle.isEmpty()) {\n            return 0;\n        }\n        return haystack.indexOf(needle);\n    }\n}\n"))),(0,a.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        if (needle.empty()) {\n            return 0;\n        }\n        return haystack.find(needle);\n    }\n};\n"))),(0,a.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        if len(needle) == 0:\n            return 0\n        return haystack.find(needle)\n"))),(0,a.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */\nvar strStr = function(haystack, needle) {\n    if (needle.length == 0) {\n        return 0;\n    }\n    return haystack.indexOf(needle);\n};\n")))))}y.isMDXComponent=!0}}]);