"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48610],{99703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(95999),r=a(32244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(9460),r=a(30390);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},41714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(34334),r=a(95999),s=a(88824),o=a(10833),i=a(35281),c=a(39960),m=a(39058),u=a(99703),g=a(90197),p=a(79985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(o.d,{title:a}),l.createElement(g.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const o=d(t);return l.createElement(m.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(c.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(p.Z,{items:a}),l.createElement(u.Z,{metadata:s}))}function b(e){return l.createElement(o.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},l.createElement(E,e),l.createElement(h,e))}},30476:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(11298),r=a(74866),s=a(85162);function o(e){let{names:t}=e;if(!t)return null;const a=t.split(",");return l.createElement("div",{className:"tag-wrapper"},a.map(((e,t)=>l.createElement("span",{key:t,className:"topic-tag"},e))))}const i={...n.Z,SolutionAuthor:function(e){let{name:t}=e;return l.createElement("div",{className:"solution-author-wrapper"},l.createElement("span",null,"Written by ",t))},Tabs:r.Z,TabItem:s.Z,TutorialAuthors:function(e){let{names:t}=e;const a=t.split(",");return l.createElement("div",{className:"tutorial-tag-wrapper"},a.length>1?"Authors: ":"Author: ",a.map(((e,t)=>l.createElement("span",{key:t,className:"author-tag tag"},e))))},Table:function(e){let{title:t,collectionLink:a,isSorted:n=!0,data:r}=e;const s=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},c=(n?r.sort(((e,t)=>i[e.difficulty]-i[t.difficulty])):r).map(((e,t)=>{return l.createElement("tr",{key:t},l.createElement("td",null,l.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),l.createElement("td",{className:(a=e.difficulty,a.toLowerCase())},e.difficulty),l.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&l.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&l.createElement("span",null,"N/A")),s&&l.createElement("td",null,l.createElement(o,{names:e.tags})));var a}));return l.createElement(l.Fragment,null,l.createElement("h3",null,t),a&&l.createElement("h4",null,"Start Practicing: ",l.createElement("a",{href:a,target:"_blank"},a)),l.createElement("table",{class:"suggested-problem-table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Problem Name"),l.createElement("th",null,"Difficulty"),l.createElement("th",null,"Solution Link"),s&&l.createElement("th",null,"Topic"))),l.createElement("tbody",null,c)))},Contributors:function(e){let{names:t}=e;const a=t.split(",");return l.createElement("div",{className:"tutorial-tag-wrapper contributors"},a.length>1?"Contributors: ":"Contributor: ",a.map(((e,t)=>l.createElement("span",{key:t,className:"contributor-tag tag"},e))))}}}}]);