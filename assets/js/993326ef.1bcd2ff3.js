"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56693],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=l(a),c=s,d=h["".concat(m,".").concat(c)]||h[c]||u[c]||r;return a?n.createElement(d,i(i({ref:t},o),{},{components:a})):n.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[h]="string"==typeof e?e:s,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={description:"Author: @1SundayMorning | https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/"},i="2232 -  Minimize Result by Adding Parentheses to Expression (Medium)",p={unversionedId:"2200-2299/minimize-result-by-adding-parentheses-to-expression-medium",id:"2200-2299/minimize-result-by-adding-parentheses-to-expression-medium",title:"2232 -  Minimize Result by Adding Parentheses to Expression (Medium)",description:"Author: @1SundayMorning | https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/",source:"@site/solutions/2200-2299/2232-minimize-result-by-adding-parentheses-to-expression-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimize-result-by-adding-parentheses-to-expression-medium",permalink:"/solutions/2200-2299/minimize-result-by-adding-parentheses-to-expression-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2232-minimize-result-by-adding-parentheses-to-expression-medium.md",tags:[],version:"current",sidebarPosition:2232,frontMatter:{description:"Author: @1SundayMorning | https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/"},sidebar:"tutorialSidebar",previous:{title:"2231 -  Largest Number After Digit Swaps by Parity (Easy)",permalink:"/solutions/2200-2299/largest-number-after-digit-swaps-by-parity-easy"},next:{title:"2233 - Maximum Product After K Increments (Medium)",permalink:"/solutions/2200-2299/maximum-product-after-k-increments-medium"}},m={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative",id:"approach-1-iterative",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},h=o("Tabs"),u=o("TabItem"),c=o("SolutionAuthor"),d={toc:l},N="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(N,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2232----minimize-result-by-adding-parentheses-to-expression-medium"},"2232 -  Minimize Result by Adding Parentheses to Expression (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/"},"https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given a ",(0,s.kt)("strong",{parentName:"p"},"0-indexed")," string expression of the form ",(0,s.kt)("inlineCode",{parentName:"p"},'"<num1>+<num2>"')," where ",(0,s.kt)("inlineCode",{parentName:"p"},"<num1>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<num2>")," represent positive integers."),(0,s.kt)("p",null,"Add a pair of parentheses to expression such that after the addition of parentheses, expression is a ",(0,s.kt)("strong",{parentName:"p"},"valid")," mathematical expression and evaluates to the ",(0,s.kt)("strong",{parentName:"p"},"smallest")," possible value. The left parenthesis ",(0,s.kt)("strong",{parentName:"p"},"must")," be added to the left of '+' and the right parenthesis ",(0,s.kt)("strong",{parentName:"p"},"must")," be added to the right of '+'."),(0,s.kt)("p",null,"Return expression after adding a pair of parentheses such that expression evaluates to the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"smallest"))," possible value. If there are multiple answers that yield the same result, return any of them."),(0,s.kt)("p",null,"The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: expression = "247+38"\nOutput: "2(47+38)"\nExplanation: The expression evaluates to 2 * (47 + 38) = 2 * 85 = 170.\nNote that "2(4)7+38" is invalid because the right parenthesis must be to the right of the \'+\'.\nIt can be shown that 170 is the smallest possible value.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: expression = "12+34"\nOutput: "1(2+3)4"\nExplanation: The expression evaluates to 1 * (2 + 3) * 4 = 1 * 5 * 4 = 20.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: expression = "999+999"\nOutput: "(999+999)"\nExplanation: The expression evaluates to 999 + 999 = 1998.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"3 <= expression.length <= 10")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expression consists of digits from '1' to '9' and '+'.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expression starts and ends with digits.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expression contains exactly one '+'.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"The original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer."))),(0,s.kt)("h2",{id:"approach-1-iterative"},"Approach 1: Iterative"),(0,s.kt)("p",null,"To solve, separate the expression into the two operands of the sum expression."),(0,s.kt)("p",null,"Then, iteratively place the open and close parenthesis at every possible location in the left and right substrings"),(0,s.kt)("p",null,"Next, evaluate the expression by computing the inner sum, and then multiplying the outer values contained in the substrings\noutside of the parenthesis."),(0,s.kt)("p",null,"Compare the result of the expression to the current minimum, and if it's lower, save the minimum and the locations of the\nopen and close parenthesis."),(0,s.kt)("p",null,"Once all possible expressions have been evaluated, construct the final expression using the saved locations of the open and\nclose parenthesis."),(0,s.kt)("p",null,"Return the expression."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(a * b)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n * a * b)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," are the length of the left and right operands of the input sum"),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(c,{name:"@1SundayMorning",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string minimizeResult(string expression) {\n        // find the location of the plus and separate the left and right operands\n        int plus_idx = 0;\n        while (expression[plus_idx] != \'+\') {\n            plus_idx++;\n        }\n        \n        string left = expression.substr(0, plus_idx);\n        string right = expression.substr(plus_idx + 1, expression.length() - plus_idx);\n        \n        // set initial value of min to be INT_MAX\n        int min = INT_MAX;\n        int final_p1 = 0;\n        int final_p2 = 0;\n        \n        // iterate through all valid parenthesis locations in each of the\n        // left and right operands\n        for(int p1 = 0; p1 < left.length(); p1++) {\n            for (int p2 = 1; p2 <= right.length(); p2++) {\n                // saving the substrings on either side of the parenthesis\n                // to be converted to integers later\n                string left_mul_str = left.substr(0, p1);\n                string left_sum_str = left.substr(p1);\n                string right_sum_str = right.substr(0, p2);\n                string right_mul_str = right.substr(p2);\n                \n                // in the case where the entire expression is enclosed in parenthesis, \n                // set left mul and right mul to none.\n                // This will be the case when their respective substrings are empty.\n                int left_mul = 1;\n                int left_sum = stoi(left_sum_str);\n                int right_sum = stoi(right_sum_str);\n                int right_mul = 1;\n                \n                if (!left_mul_str.empty())\n                    left_mul = stoi(left_mul_str);\n                if (!right_mul_str.empty()) {\n                    right_mul = stoi(right_mul_str);\n                }\n                \n                // evaluate the expression.\n                int exp_result = left_mul * (left_sum + right_sum) * right_mul;\n                \n                // if final value is our new min, save the indices of the parenthesis\n                if (exp_result < min) {\n                    min = exp_result;\n                    final_p1 = p1;\n                    final_p2 = p2;\n                }\n            }\n        }\n        \n        // construct and return the final expression with parenthesis added\n        return left.substr(0, final_p1) +     \\\n            "(" + left.substr(final_p1) +     \\\n            "+" + right.substr(0, final_p2) + \\\n            ")" + right.substr(final_p2);\n    }\n};\n')))))}k.isMDXComponent=!0}}]);