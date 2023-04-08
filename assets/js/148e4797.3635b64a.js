"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[60540],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>u});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=l(t),h=s,u=c["".concat(o,".").concat(h)]||c[h]||k[h]||r;return t?n.createElement(u,m(m({ref:a},i),{},{components:t})):n.createElement(u,m({ref:a},i))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=h;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[c]="string"==typeof e?e:s,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},54931:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const r={description:"Author: @ColeB2 | https://leetcode.com/problems/n-queens/",tags:["Array","Backtracking"]},m="0051 - N-Queens (Hard)",p={unversionedId:"0000-0099/n-queens-hard",id:"0000-0099/n-queens-hard",title:"0051 - N-Queens (Hard)",description:"Author: @ColeB2 | https://leetcode.com/problems/n-queens/",source:"@site/solutions/0000-0099/0051-n-queens-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/n-queens-hard",permalink:"/solutions/0000-0099/n-queens-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0051-n-queens-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:51,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/n-queens/",tags:["Array","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"0050 - Pow(x, n) (Medium)",permalink:"/solutions/0000-0099/pow-x-n-medium"},next:{title:"0057 - Insert Interval (Medium)",permalink:"/solutions/0000-0099/insert-interval-medium"}},o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)},c=i("Tabs"),k=i("TabItem"),h=i("SolutionAuthor"),u={toc:l},N="wrapper";function d(e){let{components:a,...t}=e;return(0,s.kt)(N,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0051---n-queens-hard"},"0051 - N-Queens (Hard)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/n-queens/"},"https://leetcode.com/problems/n-queens/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"n-queens")," puzzle is the problem of placing ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," queens on an ",(0,s.kt)("inlineCode",{parentName:"p"},"n x n")," chessboard such that no two queens attack each other."),(0,s.kt)("p",null,"Given an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,s.kt)("em",{parentName:"p"},"all distinct solutions to the ",(0,s.kt)("strong",{parentName:"em"},"n-queens puzzle")),". You may return the answer in ",(0,s.kt)("strong",{parentName:"p"},"any")," order."),(0,s.kt)("p",null,"Each solution contains a distinct board configuration of the n-queens' placement, where ",(0,s.kt)("inlineCode",{parentName:"p"},"'Q'")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"'.'")," both indicate a queen and an empty space, respectively."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/11/13/queens.jpg",alt:null})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: n = 4\nOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\nExplanation: There exist two distinct solutions to the 4-queens puzzle as shown above\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: n = 1\nOutput: [["Q"]]\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"1 <= n <= 9")),(0,s.kt)("h2",{id:"approach-1-backtracking"},"Approach 1: Backtracking"),(0,s.kt)("p",null,"Once you understand how the queen moves, which is straight in both the orthogonal and diagonal directions, then it becomes a fairly straightforward backtracking problem."),(0,s.kt)("p",null,"Knowing how a queen moves, we know we can only place one queen per row, so for each row we have to find a valid square to place the queen. So the backtracking comes in by trying to place a queen on all valid squares and continuing, and if it ever doesn't work, we backtrack and try the next valid square in that row."),(0,s.kt)("p",null,"How do we track valid squares? We can use sets for ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," access, to see if the square is valid. We know we can only ever place one queen in any row, so no need to use a set there as we can track our row during our backtracking and just move on to the next row. We can also easily use a set to track valid columns, by just adding the current column of the queen we just placed into the set. How do we track diagonals?"),(0,s.kt)("p",null,"We will use 2 sets, one for diagonal going forward, and one for diagonal going backwards. That is any diagonal going from left to right, bottom to top will all have the same coordinate integer if we add the row and columns together. Also any diagonal going from right to left, bottom to top, will also have the same coordinate integer if we subtract the row from the column position. See the below diagram."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"4x4 Board\nDiagonals\nx  0 1 2 3\n  ---------\n0 |0 1 2 3\n1 |1 2 3 4\n2 |2 3 4 5\n3 |3 4 5 6\nBackward Diagonals\nx   0  1  2 3\n  -----------\n0 | 0  1  2 3\n1 |-1  0  1 2 \n2 |-2 -1  0 1\n3 |-3 -2 -1 0\n")),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n!)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!)")))))," where n is the size of the board. You can imagine we have n choice to make for the first row, then after that for each choice we have ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," choices for the 2nd row, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n-2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," for the 3rd, etc. as placing a queen removes that column from each row."),(0,s.kt)("p",null,"Space Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," our board will be of size ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n*n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4653em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"."),(0,s.kt)(c,{mdxType:"Tabs"},(0,s.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(h,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        # initialize our return list and our board\n        n_queens = []\n        # Note our board will be a list of lists where each cell is\n        # a list containing a string character. As this gives us \n        # more efficient access to each cell to replace it with\n        # either a 'Q' or a '.'\n        board = [['.'] * n for _ in range(n)]\n        # Our sets to track valid squares.\n        col, dia, dia_b = set(), set(), set()\n        # recursive backtracking algorithm\n        def backtracking(r):\n            # if our row, r every reaches n. It means we successfully\n            # placed a queen in all n rows.\n            if r == n:\n                # create a copy of the board, join method will join\n                # all our list of strings, into a single string for that\n                # row. ie: ['.']['.']['.']['Q'] => ['...Q']\n                board_copy = [''.join(row) for row in board]\n                n_queens.append(board_copy)\n                return\n            # check all our columns in current row.\n            for c in range(n):\n                # check if square is valid, if it isn't backtrack.\n                if c in col or (r + c) in dia or (c - r) in dia_b:\n                    continue\n                # found valid square, add the squares queen touches\n                # to the proper sets.\n                col.add(c)\n                dia.add(r + c)\n                dia_b.add(c - r)\n                # update board to reflect\n                board[r][c] = 'Q'\n                # continue down the decision tree onto the next row.\n                backtracking(r + 1)\n                # Backtrack from previous call-> remove all values\n                # from the sets\n                col.remove(c)\n                dia.remove(r + c)\n                dia_b.remove(c - r)\n                # reset that board position for the next iteration.\n                board[r][c] = '.'\n        # call the algorithm starting at 0, and return our answer.\n        backtracking(0)\n        return n_queens\n\n")))))}d.isMDXComponent=!0}}]);