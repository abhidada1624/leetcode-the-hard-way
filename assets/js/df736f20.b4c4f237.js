"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[88283],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=o(t),u=s,k=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return t?n.createElement(k,i(i({ref:a},l),{},{components:t})):n.createElement(k,i({ref:a},l))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,i[1]=m;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40738:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return w},frontMatter:function(){return m},metadata:function(){return o},suggestedProblems:function(){return h},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),i=["components"],m={title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},p=void 0,o={unversionedId:"basic-topics/hash-map",id:"basic-topics/hash-map",title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",source:"@site/tutorials/basic-topics/hash-map.md",sourceDirName:"basic-topics",slug:"/basic-topics/hash-map",permalink:"/tutorials/basic-topics/hash-map",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/hash-map.md",tags:[],version:"current",frontMatter:{title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Greedy",permalink:"/tutorials/basic-topics/greedy"},next:{title:"Heap (Priority Queue)",permalink:"/tutorials/basic-topics/heap"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Example: 0001 - Two Sum (Easy)",id:"example-0001---two-sum-easy",level:2}],h=[{problemName:"0217 - Contains Duplicate",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate/",solutionLink:"../../solutions/0200-0299/contains-duplicate-easy"},{problemName:"0219 - Contains Duplicate II",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate-ii/",solutionLink:"../../solutions/0200-0299/contains-duplicate-ii-easy"},{problemName:"0003 - Longest Substring Without Repeating Characters",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",solutionLink:"../../solutions/0000-0099/longest-substring-without-repeating-characters-medium"},{problemName:"0706 - Design HashMap",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/design-hashmap/",solutionLink:"../../solutions/0700-0799/design-hashmap-medium"}],u=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},k=u("TutorialAuthors"),d=u("Tabs"),N=u("TabItem"),g=u("SolutionAuthor"),y=u("Table"),f={toc:c,suggestedProblems:h};function w(e){var a=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(k,{names:"@heiheihang, @wingkwong",mdxType:"TutorialAuthors"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'A Hash map, also known as a hash table, is a data structure that stores key-value pairs and uses a hash function to map keys to their corresponding values. The hash function takes a key as input, performs some calculations on it, and returns an index (also known as a "hash code") where the value corresponding to that key can be found.'),(0,r.kt)("p",null,"The basic idea behind a hash map is to use the key to quickly locate the corresponding value in the table, without having to search through all the elements one by one, like in a linear search. The time complexity of a hash map is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," on average, which is much faster than a linear search ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,r.kt)("p",null,'A hash map is implemented as an array of "buckets", where each bucket can store one or more key-value pairs. When a key is hashed, the hash function calculates the index of the bucket where the key-value pair should be stored. If two keys hash to the same index, it is called a collision, and there are different strategies to handle collisions, such as chaining or open addressing.'),(0,r.kt)("p",null,"Hash maps are widely used in many applications, such as databases, caches, and programming languages. They are also used as an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays. Hash maps have a few advantages over other data structures such as arrays and linked lists:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hash maps have constant time complexity for inserting, retrieving and removing elements, which makes them more efficient than arrays and linked lists, which have linear time complexity."),(0,r.kt)("li",{parentName:"ul"},"Hash maps can store any type of data as a key, while arrays can only store integers as keys."),(0,r.kt)("li",{parentName:"ul"},"Hash maps can be resized dynamically, which allows them to adapt to changing data and usage patterns.")),(0,r.kt)("p",null,"In conclusion, a hash map is a data structure that stores key-value pairs and uses a hash function to quickly locate values based on keys. It has an average time complexity of O(1), which makes it more efficient than other data structures such as arrays and linked lists. Hash maps are widely used in many applications and are an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays."),(0,r.kt)("h2",{id:"example-0001---two-sum-easy"},"Example: ",(0,r.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/two-sum/"},"0001 - Two Sum (Easy)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Given an array of integers ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,r.kt)("em",{parentName:"p"},"indices of the two numbers such that they add up to ",(0,r.kt)("inlineCode",{parentName:"em"},"target")),"."),(0,r.kt)("p",{parentName:"blockquote"},"You may assume that each input would have ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"exactly")),(0,r.kt)("strong",{parentName:"p"}," one solution"),", and you may not use the ",(0,r.kt)("em",{parentName:"p"},"same")," element twice."),(0,r.kt)("p",{parentName:"blockquote"},"You can return the answer in any order.")),(0,r.kt)("p",null,"For example, given the following input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nums = [2,7,11,15], target = 9\n")),(0,r.kt)("p",null,"We can see that the first two elements (",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," ) add up to the target (",(0,r.kt)("inlineCode",{parentName:"p"},"9)"),". So we need to return ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,1]")," , as these two indices refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," ."),(0,r.kt)("p",null,"The naive way to solve this problem is to use a nested for-loop:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(N,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(g,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # locate the first element\n        for i in range(len(nums)):\n            # search the second element from i + 1\n            for j in range(i+1, len(nums)):\n                # check if they add up to target\n                if(nums[i] + nums[j] == target):\n                    # return the two indices if they do\n                    return [i, j]\n        return -1    \n"))),(0,r.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] + nums[j] == target) {\n                    return {i, j};\n                }\n            }\n        }\n        return {-1, -1};\n    }\n};\n"))),(0,r.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[i] + nums[j] == target) {\n                    return new int[] {i, j};\n                }\n            }\n        }\n        return new int[] {-1, -1};\n    }\n}\n")))),(0,r.kt)("p",null,"We observe that with a nested for-loop, the runtime complexity is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Let us look at how hash map can help us here."),(0,r.kt)("p",null,"Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(N,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(g,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# we use {} to initialize a hash map\nhash_map = {}\n\n# we want to map the (value, index) pair in this list\ninput_1 = [2,7,11,15]\n\n# we put the (value, index) pair to the hash map\nhash_map[2] = 0 \nhash_map[7] = 1\nhash_map[11] = 2\nhash_map[15] = 3\n"))),(0,r.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// initialize a hash map\nunordered_map<int, int> hash_map;\n\n// sample\nvector<int> input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.size(); i++) {\n    hash_map[input_1[i]] = i;\n}\n"))),(0,r.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// initialize a hash map\nHashMap<Integer, Integer> hash_map = new HashMap<Integer, Integer>();\n\n// sample\nint[] input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.length; i++) {\n    hash_map.put(input_1[i], i);\n}\n")))),(0,r.kt)("p",null,"The special feature of hash map is that, from now on, if we want to know a value exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"input_1")," or not, we can just perform:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(N,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)(g,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'if( 7 in hash_map):\n    print("7 is in input_1")\nelse:\n    print("7 is not in input_1")\n'))),(0,r.kt)(N,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'if (hash_map.find(7) != hash_map.end()) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n\n// or we can use count\nif (hash_map.count(7)) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n'))),(0,r.kt)(N,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'if (hash_map.containsKey(7)){\n    System.out.println("7 is in input_1");\n} else {\n    System.out.println("7 is not in input_1");\n}\n')))),(0,r.kt)("p",null,"This operation only takes ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time! Without hash map, we would need to iterate the input to search for a specific element."),(0,r.kt)("p",null,"After understanding Hash Map, are you able to solve ",(0,r.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/two-sum"},"Two Sum")," in ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time?"),(0,r.kt)(y,{title:"Suggested Problems",data:h,mdxType:"Table"}))}w.isMDXComponent=!0}}]);