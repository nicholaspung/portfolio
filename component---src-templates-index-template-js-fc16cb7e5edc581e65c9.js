(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(235),l=a(240),i=a(241),o=a(243),s=a.n(o),m=a(218),u=a.n(m),h=function(e){var t=e.edges;return c.a.createElement("div",{className:u.a["project-feed"]},c.a.createElement("h1",{className:u.a["project-feed__h1"]},"Projects"),t.map(function(e){return c.a.createElement("div",{className:u.a["project-feed__item"],key:e.node.fields.slug},c.a.createElement("div",{className:u.a["project-feed__item-meta"]},c.a.createElement("time",{className:u.a["project-feed__item-meta-time"],dateTime:s()(e.node.frontmatter.date).format("MMMM D, YYYY")},s()(e.node.frontmatter.date).format("MMMM YYYY"))),c.a.createElement("h2",{className:u.a["project-feed__item-title"]},c.a.createElement("div",{className:u.a["project-feed__item-title-link"]},e.node.frontmatter.title)),c.a.createElement("div",{className:u.a["project-feed__item-content"]},c.a.createElement("div",{className:u.a["project-feed__item-content-body"],dangerouslySetInnerHTML:{__html:e.node.html}}),c.a.createElement("div",{className:u.a["project-feed__item-content-description"]},c.a.createElement("p",null,e.node.frontmatter.description),c.a.createElement("p",null,"Technologies Used: ",e.node.frontmatter.category),c.a.createElement("a",{className:u.a["project-feed__item-content-description-link"],href:""+e.node.frontmatter.slug},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),c.a.createElement("span",null,"Link to Project")))))}))},d=a(233);a.d(t,"query",function(){return v});var v="990711894";t.default=function(e){var t=e.data,a=(e.pageContext,Object(d.b)()),n=a.title,o=a.subtitle,s=t.allMarkdownRemark.edges;return c.a.createElement(r.a,{title:n,description:o},c.a.createElement(l.a,{isIndex:!0}),c.a.createElement(i.a,null,c.a.createElement(h,{edges:s})))}},233:function(e,t,a){"use strict";var n=a(236),c=function(){return n.data.site.siteMetadata},r=a(237),l=function(){return r.data.allMarkdownRemark.group},i=a(238),o=function(){return i.data.allMarkdownRemark.group};a.d(t,"b",function(){return c}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return o})},234:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LINKEDIN:{path:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",viewBox:"0 0 24 24"},GITHUBLINK:{path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",viewBox:"0 0 24 24"}},c={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return c})},235:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(242),l=a.n(r),i=a(206),o=a.n(i),s=function(e){var t=e.children,a=e.title,n=e.description;return c.a.createElement("div",{className:o.a.layout},c.a.createElement(l.a,null,c.a.createElement("html",{lang:"en"}),c.a.createElement("title",null,a),c.a.createElement("meta",{name:"description",content:n}),c.a.createElement("meta",{property:"og:site_name",content:a}),c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:title",content:a})),t)};a.d(t,"a",function(){return s})},236:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Nicholas Pung",bio:"Software Developer. Podcast Aficionado. Powerlifting Enthusiast. All things health and wellness. Join me as I learn how to be the best programmer I can be.",photo:"/photo.jpg",contacts:{email:"nicholaspungdev@gmail.com",github:"nicholaspung",linkedin:"/in/nicholas-pung"}},menu:[{label:"Projects",path:"/"},{label:"Posts",path:"/posts"},{label:"About me",path:"/pages/about"}],url:"https://lumen.netlify.com",title:"Portfolio by Nicholas Pung",subtitle:"Learnings of a Web Developer",copyright:"© All rights reserved.",disqusShortname:""}}}}},237:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"What I Learned",totalCount:1}]}}}},238:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"NodeJS",totalCount:1},{fieldValue:"PassportJS",totalCount:1}]}}}},239:function(e,t,a){"use strict";var n=a(234),c=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"vkontakte":t=n.a.VKONTAKTE;break;case"telegram":t=n.a.TELEGRAM;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;case"linkedin":t=n.a.LINKEDIN;break;case"githublink":t=n.a.GITHUBLINK;break;default:t={}}return t},r=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="https://t.me/"+t;break;case"email":a="mailto:"+t;break;case"linkedin":a="https://linkedin.com/"+t;break;default:a=t}return a};a.d(t,"b",function(){return c}),a.d(t,"a",function(){return r})},240:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(38),a(94)),l=a(207),i=a.n(l),o=function(e){var t=e.author,a=e.isIndex;return c.a.createElement("div",{className:i.a.author},c.a.createElement(r.Link,{to:"/"},c.a.createElement("img",{src:Object(r.withPrefix)(t.photo),className:i.a.author__photo,width:"75",height:"75",alt:t.name})),a?c.a.createElement("h1",{className:i.a.author__title},c.a.createElement(r.Link,{className:i.a["author__title-link"],to:"/"},t.name)):c.a.createElement("h2",{className:i.a.author__title},c.a.createElement(r.Link,{className:i.a["author__title-link"],to:"/"},t.name)),c.a.createElement("p",{className:i.a.author__subtitle},t.bio))},s=(a(30),a(31),a(16),a(50),a(239)),m=a(208),u=a.n(m),h=function(e){var t=e.name,a=e.icon;return c.a.createElement("svg",{className:u.a.icon,viewBox:a.viewBox},c.a.createElement("title",null,t),c.a.createElement("path",{d:a.path}))},d=a(209),v=a.n(d),p=function(e){var t=e.contacts;return c.a.createElement("div",{className:v.a.contacts},c.a.createElement("ul",{className:v.a.contacts__list},Object.keys(t).map(function(e){return t[e]?c.a.createElement("li",{className:v.a["contacts__list-item"],key:e},c.a.createElement("a",{className:v.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},c.a.createElement(h,{name:e,icon:Object(s.b)(e)}))):null})))},f=a(210),E=a.n(f),_=function(e){var t=e.copyright;return c.a.createElement("div",{className:E.a.copyright},t)},b=a(211),k=a.n(b),g=function(e){var t=e.menu;return c.a.createElement("nav",{className:k.a.menu},c.a.createElement("ul",{className:k.a.menu__list},t.map(function(e){return c.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},c.a.createElement(r.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))})))},N=a(212),w=a.n(N),M=a(233),j=function(e){var t=e.isIndex,a=Object(M.b)(),n=a.author,r=a.copyright,l=a.menu;return c.a.createElement("div",{className:w.a.sidebar},c.a.createElement("div",{className:w.a.sidebar__inner},c.a.createElement(o,{author:n,isIndex:t}),c.a.createElement(g,{menu:l}),c.a.createElement(p,{contacts:n.contacts}),c.a.createElement(_,{copyright:r})))};a.d(t,"a",function(){return j})},241:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(213),l=a.n(r),i=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)(function(){r.current.scrollIntoView()}),c.a.createElement("div",{ref:r,className:l.a.page},c.a.createElement("div",{className:l.a.page__inner},t&&c.a.createElement("h1",{className:l.a.page__title},t),c.a.createElement("div",{className:l.a.page__body},a)))};a.d(t,"a",function(){return i})}}]);
//# sourceMappingURL=component---src-templates-index-template-js-fc16cb7e5edc581e65c9.js.map