"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),h=i,d=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905));const o={title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},a=void 0,l={unversionedId:"graph-theory/minimum-spanning-tree",id:"graph-theory/minimum-spanning-tree",title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",source:"@site/tutorials/graph-theory/minimum-spanning-tree.md",sourceDirName:"graph-theory",slug:"/graph-theory/minimum-spanning-tree",permalink:"/tutorials/graph-theory/minimum-spanning-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/minimum-spanning-tree.md",tags:[],version:"current",frontMatter:{title:"Minimum Spanning Tree",description:"A minimum spanning tree is a subset of the edges of a connected undirected graph with the minimum possible total edge weight and it does not contain any cycles.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","minimum spanning tree","mst","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Lowest Common Ancestor(LCA)",permalink:"/tutorials/graph-theory/lca"},next:{title:"Tarjan's Algorithm",permalink:"/tutorials/graph-theory/tarjans-algorithm"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Kruskal&#39;s Algorithm",id:"kruskals-algorithm",level:3},{value:"Prim&#39;s Algorithm",id:"prims-algorithm",level:3},{value:"Boruvka&#39;s Algorithm",id:"boruvkas-algorithm",level:3}],u=(c="TutorialAuthors",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const p={toc:m},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A Minimum Spanning Tree (MST) is a subset of the edges of a connected, undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. There are different algorithms that can be used to find the MST of a graph, such as Kruskal's algorithm, Prim's algorithm and Boruvka's algorithm. "),(0,i.kt)("h3",{id:"kruskals-algorithm"},"Kruskal's Algorithm"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../graph-theory/kruskals-algorithm"},"See Here")),(0,i.kt)("h3",{id:"prims-algorithm"},"Prim's Algorithm"),(0,i.kt)("p",null,"Not Available Yet"),(0,i.kt)("h3",{id:"boruvkas-algorithm"},"Boruvka's Algorithm"),(0,i.kt)("p",null,"Not Available Yet"))}d.isMDXComponent=!0}}]);