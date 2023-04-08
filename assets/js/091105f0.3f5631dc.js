"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,b=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(b,o(o({ref:n},m),{},{components:t})):a.createElement(b,o({ref:n},m))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},38422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/"},o="0191 - Number of 1 Bits (Easy)",l={unversionedId:"0100-0199/number-of-1-bits-easy",id:"0100-0199/number-of-1-bits-easy",title:"0191 - Number of 1 Bits (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/",source:"@site/solutions/0100-0199/0191-number-of-1-bits-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/number-of-1-bits-easy",permalink:"/solutions/0100-0199/number-of-1-bits-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0191-number-of-1-bits-easy.md",tags:[],version:"current",sidebarPosition:191,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/"},sidebar:"tutorialSidebar",previous:{title:"0188 - Best Time to Buy and Sell Stock IV (Hard)",permalink:"/solutions/0100-0199/best-time-to-buy-and-sell-stock-iv-hard"},next:{title:"0198 - House Robber (Medium)",permalink:"/solutions/0100-0199/house-robber-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Built-in Function",id:"approach-1-built-in-function",level:2},{value:"Approach 2: Bit Manipulation",id:"approach-2-bit-manipulation",level:2},{value:"Approach 3: n &amp; (n - 1)",id:"approach-3-n--n---1",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=m("Tabs"),c=m("TabItem"),h=m("SolutionAuthor"),b={toc:p},g="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0191---number-of-1-bits-easy"},"0191 - Number of 1 Bits (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-1-bits/"},"https://leetcode.com/problems/number-of-1-bits/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hamming_weight"},"Hamming weight"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned."),(0,r.kt)("li",{parentName:"ul"},"In Java, the compiler represents the signed integers using ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Two's_complement"},"2's complement notation"),". Therefore, in ",(0,r.kt)("strong",{parentName:"li"},"Example 3"),", the input represents the signed integer. ",(0,r.kt)("inlineCode",{parentName:"li"},"-3"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 00000000000000000000000000001011\nOutput: 3\nExplanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 00000000000000000000000010000000\nOutput: 1\nExplanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: n = 11111111111111111111111111111101\nOutput: 31\nExplanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits. \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The input must be a ",(0,r.kt)("strong",{parentName:"li"},"binary string")," of length ",(0,r.kt)("inlineCode",{parentName:"li"},"32"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Follow up:")," If this function is called many times, how would you optimize it?"),(0,r.kt)("h2",{id:"approach-1-built-in-function"},"Approach 1: Built-in Function"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // or return bitset<32>(n).count();\n        return __builtin_popcount(n);\n    }\n};\n"))),(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        return bin(n).count('1')\n"))),(0,r.kt)(c,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func hammingWeight(num uint32) int {\n    return bits.OnesCount32(num);\n}\n"))),(0,r.kt)(c,{value:"rs",label:"Rust",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"impl Solution {\n    pub fn hammingWeight (n: u32) -> i32 {\n        n.count_ones() as i32\n    }\n}\n"))),(0,r.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        return Integer.bitCount(n);\n    }\n}\n"))),(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function(n) {\n    return n.toString(2).split('1').length - 1\n};\n")))),(0,r.kt)("h2",{id:"approach-2-bit-manipulation"},"Approach 2: Bit Manipulation"),(0,r.kt)("p",null,"We check each parity of teach bit. Increase ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," by 1 if the bit is set."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        while (n) {\n            if (n & 1) ans++;\n            n >>= 1; // or n /= 2;\n        }\n        return ans;\n    }\n};\n"))),(0,r.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    // you need to treat n as an unsigned value\n    // \n    public int hammingWeight(int n) {\n        int ones = 0;\n        // n > 0, fails to return the correct the answer because of Integer MAX_VALUE. \n        // Integer.MAX_VALUE + 1 is -2147483648, so it's not greater than 0, so n will not enter into loop\n        while (n != 0) {\n            ones += (n & 1);\n            // Why can't we use n >>= 1?\n            // Since n is 32 bit binary number, >> operator does shift by keeping signed bit position same as before\n            // Take a look at SO reference - https://stackoverflow.com/questions/2811319/difference-between-and\n            n >>>= 1;\n        }\n        return ones;\n    }\n}\n"))),(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0\n        while n:\n            if (n & 1): res += 1\n            # same as --\x3e n //= 2\n            n >>= 1\n        return res \n"))),(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function(n) {\n    let res = 0;\n    while (n != 0) {\n        if (n & 1) res++;\n        n /= 2\n    }\n    return res;\n};\n")))),(0,r.kt)("h2",{id:"approach-3-n--n---1"},"Approach 3: n & (n - 1)"),(0,r.kt)("p",null,"We can optimise approach 2. Instead of checking all digits, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"n & (n - 1)")," to remove the rightmost set bit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"n     n     n - 1  n & (n - 1)\n--   ----   ----   -------\n 0   0000   0111    0000\n 1   0001   0000    0000\n 2   0010   0001    0000\n 3   0011   0010    0010\n 4   0100   0011    0000\n 5   0101   0100    0100\n 6   0110   0101    0100\n 7   0111   0110    0110\n 8   1000   0111    0000 \n 9   1001   1000    1000\n10   1010   1001    1000\n11   1011   1010    1010\n12   1100   1011    1000\n13   1101   1100    1100\n14   1110   1101    1100\n15   1111   1110    1110\n")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        for (; n; n = n & (n - 1)) ans++;\n        return ans;\n    }\n};\n"))),(0,r.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        int ones = 0;\n        // Since n is 32 bit binary number, count 1's till that range\n        for (int i = 0; i < 32; i++) {\n            ones += (n & 1);\n            n >>= 1;\n        }\n        return ones;\n    }\n}\n"))),(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(h,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0        \n        while n:\n            n = n & (n - 1)\n            res += 1\n        return res\n")))))}d.isMDXComponent=!0}}]);