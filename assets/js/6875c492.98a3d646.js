"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[48610],{4118:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(63366),l=a(67294),n=a(86010),i=a(37422),o=a(39960),s=a(95999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",g="sidebarItem_spIe",d="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))})))))}var E=a(13102);function f(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return l.createElement(E.Zo,{component:f,props:e})}var v=a(87524);function N(e){var t=e.sidebar,a=(0,v.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(h,{sidebar:t}):null}var _=["sidebar","toc","children"];function k(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,_),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(N,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),l=a(95999),n=a(71750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},26244:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(67294),l=a(86010),n=a(95999),i=a(39960),o=a(44996),s=a(88824),m=a(18780),c=a(37823),u=a(86753),g="blogPostTitle_rzP5",d="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",h=a(20062);function E(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,o=t.email,s=n||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(E,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var b="authorCol_FlmR",v="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?v:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:b),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,E=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,o.C)().withBaseUrl,b=e.children,v=e.frontMatter,N=e.assets,k=e.metadata,Z=e.truncated,P=e.isBlogPostPage,w=void 0!==P&&P,y=k.date,T=k.formattedDate,I=k.permalink,L=k.tags,A=k.readingTime,F=k.title,M=k.editUrl,x=k.authors,C=null!=(t=N.image)?t:v.image,R=!w&&Z,S=L.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:g,itemProp:"headline"},w?F:r.createElement(i.Z,{itemProp:"url",to:I},F)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},T),void 0!==A&&r.createElement(r.Fragment,null," \xb7 ",E(A))),r.createElement(_,{authors:x,assets:N})),C&&r.createElement("meta",{itemProp:"image",content:f(C,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,b)),(S||Z)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",w&&p)},S&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},r.createElement(h.Z,{tags:L})),w&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:M})),R&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":S})},r.createElement(i.Z,{to:k.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:F})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(67294),l=a(39960),n=a(4118),i=a(26244),o=a(95999),s=a(88824),m=a(10833),c=a(35281),u=a(36299),g=a(14739),d=a(86010);function p(e){var t,a=e.tag,p=e.items,h=e.sidebar,E=e.listMetadata,f=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),b=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(a.count),tagName:a.label});return r.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},r.createElement(m.d,{title:b}),r.createElement(g.Z,{tag:"blog_tags_posts"}),r.createElement(n.Z,{sidebar:h},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,b),r.createElement(l.Z,{href:a.allTagsPath},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(u.Z,{metadata:E})))}},88824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(67294),l=a(52263),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}},30476:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),l=a(82390),n=a(9877),i=a(72360);function o(e){var t=e.names;if(!t)return null;var a=t.split(",");return r.createElement("div",{className:"tag-wrapper"},a.map((function(e,t){return r.createElement("span",{key:t,className:"topic-tag"},e)})))}var s=Object.assign({},l.Z,{SolutionAuthor:function(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"Written by ",t))},Tabs:n.Z,TabItem:i.Z,TutorialAuthors:function(e){var t=e.names.split(",");return r.createElement("div",{className:"tutorial-tag-wrapper"},t.length>1?"Authors: ":"Author: ",t.map((function(e,t){return r.createElement("span",{key:t,className:"author-tag tag"},e)})))},Table:function(e){var t=e.title,a=e.collectionLink,l=e.isSorted,n=void 0===l||l,i=e.data,s=i.some((function(e){return e.tags})),m={Easy:0,Medium:1,Hard:2},c=(n?i.sort((function(e,t){return m[e.difficulty]-m[t.difficulty]})):i).map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("a",{href:e.leetCodeLink,target:"_blank"},e.problemName)),r.createElement("td",null,e.difficulty),r.createElement("td",{style:{textAlign:"center"}},e.solutionLink&&r.createElement("a",{href:e.solutionLink,target:"_blank"},"View Solutions"),!e.solutionLink&&r.createElement("span",null,"N/A")),s&&r.createElement("td",null,r.createElement(o,{names:e.tags})))}));return r.createElement(r.Fragment,null,r.createElement("h3",null,t),a&&r.createElement("h4",null,"Start Practicing: ",r.createElement("a",{href:a,target:"_blank"},a)),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Problem Name"),r.createElement("th",null,"Difficulty"),r.createElement("th",null,"Solution Link"),s&&r.createElement("th",null,"Topic"))),r.createElement("tbody",null,c)))},Contributors:function(e){var t=e.names.split(",");return r.createElement("div",{className:"tutorial-tag-wrapper contributors"},t.length>1?"Contributors: ":"Contributor: ",t.map((function(e,t){return r.createElement("span",{key:t,className:"contributor-tag tag"},e)})))}})}}]);