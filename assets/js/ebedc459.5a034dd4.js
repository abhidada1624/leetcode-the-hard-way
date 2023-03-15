"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10543],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,u(u({ref:n},s),{},{components:t})):r.createElement(f,u({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48960:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r,o=t(87462),a=t(63366),u=(t(67294),t(3905)),i=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/"},l="0327 - Count of Range Sum (Hard)",s={unversionedId:"0300-0399/count-of-range-sum-hard",id:"0300-0399/count-of-range-sum-hard",title:"0327 - Count of Range Sum (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/",source:"@site/solutions/0300-0399/0327-count-of-range-sum-hard.md",sourceDirName:"0300-0399",slug:"/0300-0399/count-of-range-sum-hard",permalink:"/solutions/0300-0399/count-of-range-sum-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0327-count-of-range-sum-hard.md",tags:[],version:"current",sidebarPosition:327,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/count-of-range-sum/"},sidebar:"tutorialSidebar",previous:{title:"0323 - Number of Connected Components in an Undirected Graph (Medium)",permalink:"/solutions/0300-0399/number-of-connected-components-in-an-undirected-graph-medium"},next:{title:"0332 - Reconstruct Itinerary (Hard)",permalink:"/solutions/0300-0399/reconstruct-itinerary-hard"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Ordered Set",id:"approach-1-ordered-set",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,u.kt)("div",e)}),f={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"0327---count-of-range-sum-hard"},"0327 - Count of Range Sum (Hard)"),(0,u.kt)("h2",{id:"problem-link"},"Problem Link"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-of-range-sum/"},"https://leetcode.com/problems/count-of-range-sum/")),(0,u.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,u.kt)("p",null,"Given an integer array ",(0,u.kt)("inlineCode",{parentName:"p"},"nums")," and two integers ",(0,u.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"upper"),", return ",(0,u.kt)("em",{parentName:"p"},"the number of range sums that lie in")," ",(0,u.kt)("inlineCode",{parentName:"p"},"[lower, upper]")," ",(0,u.kt)("em",{parentName:"p"},"inclusive"),"."),(0,u.kt)("p",null,"Range sum ",(0,u.kt)("inlineCode",{parentName:"p"},"S(i, j)")," is defined as the sum of the elements in ",(0,u.kt)("inlineCode",{parentName:"p"},"nums")," between indices ",(0,u.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"j")," inclusive, where ",(0,u.kt)("inlineCode",{parentName:"p"},"i <= j"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example 1:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [-2,5,-1], lower = -2, upper = 2\nOutput: 3\nExplanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example 2:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"Input: nums = [0], lower = 0, upper = 0\nOutput: 1\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Constraints:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"-10^5 <= lower <= upper <= 10^5")),(0,u.kt)("li",{parentName:"ul"},"The answer is ",(0,u.kt)("strong",{parentName:"li"},"guaranteed")," to fit in a ",(0,u.kt)("strong",{parentName:"li"},"32-bit")," integer.")),(0,u.kt)("h2",{id:"approach-1-ordered-set"},"Approach 1: Ordered Set"),(0,u.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <ext/pb_ds/assoc_container.hpp>\n#include <ext/pb_ds/tree_policy.hpp>\nusing namespace __gnu_pbds;\n\nclass Solution {\npublic:\n    tree<long long, null_type, less_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;\n    \n    // lower <= sum[j] - sum[i] <= upper\n    // sum[j] - sum[i] >= lower\n    // sum[j] - sum[i] <= upper\n    // where i < j\n    \n    // given sum[j], find the number of i such that \n    // 1. i < j \n    // 2. sum[j] - upper <= sum[i] <= sum[j] - lower\n    \n    int countRangeSum(vector<int>& nums, int lower, int upper) {\n        long long sum = 0, ans = 0;\n        // normalise as lower <= sum[j] - 0 <= upper\n        T.insert(0);\n        for (auto x : nums) {\n            // prefix sum\n            sum += x;\n            // count the range\n            ans += T.order_of_key(sum - lower + 1) - T.order_of_key(sum - upper);\n            // update T\n            T.insert(sum);\n        }\n        return ans;\n    }\n};\n")))}g.isMDXComponent=!0}}]);