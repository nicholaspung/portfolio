(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{231:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(235),i=a(94),c=(a(38),a(239)),s=a(223),l=a.n(s),u=a(233),m=function(){var e=Object(u.b)().author;return r.a.createElement("div",{className:l.a.author},r.a.createElement("p",{className:l.a.author__bio},e.bio,r.a.createElement("a",{className:l.a["author__bio-twitter"],href:Object(c.a)("github",e.contacts.github),rel:"noopener noreferrer",target:"_blank"},r.a.createElement("strong",null,e.name)," on Github")))},d=a(288),f=a.n(d),p=function(e){var t=e.postTitle,a=e.postSlug,n=Object(u.b)(),o=n.url,i=n.disqusShortname;return i?r.a.createElement(f.a,{shortname:i,identifier:t,title:t,url:o+a}):null},h=a(224),v=a.n(h),b=function(e){var t=e.body,a=e.title;return r.a.createElement("div",{className:v.a.content},r.a.createElement("h1",{className:v.a.content__title},a),r.a.createElement("div",{className:v.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},g=a(243),E=a.n(g),w=a(225),k=a.n(w),y=function(e){var t=e.date;return r.a.createElement("div",{className:k.a.meta},r.a.createElement("p",{className:k.a.meta__date},"Published ",E()(t).format("D MMM YYYY")))},_=a(226),N=a.n(_),M=function(e){var t=e.tags,a=e.tagSlugs;return r.a.createElement("div",{className:N.a.tags},r.a.createElement("ul",{className:N.a.tags__list},a&&a.map(function(e,a){return r.a.createElement("li",{className:N.a["tags__list-item"],key:t[a]},r.a.createElement(i.Link,{to:e,className:N.a["tags__list-item-link"]},t[a]))})))},T=a(227),O=a.n(T),P=function(e){var t=e.post,a=t.html,n=t.fields,o=n.tagSlugs,c=n.slug,s=t.frontmatter,l=s.tags,u=s.title,d=s.date;return r.a.createElement("div",{className:O.a.post},r.a.createElement(i.Link,{className:O.a["post__home-button"],to:"/posts"},"All Posts"),r.a.createElement("div",{className:O.a.post__content},r.a.createElement(b,{body:a,title:u})),r.a.createElement("div",{className:O.a.post__footer},r.a.createElement(y,{date:d}),l&&o&&r.a.createElement(M,{tags:l,tagSlugs:o}),r.a.createElement(m,null)),r.a.createElement("div",{className:O.a.post__comments},r.a.createElement(p,{postSlug:c,postTitle:t.frontmatter.title})))};a.d(t,"query",function(){return S});var S="2166023545";t.default=function(e){var t=e.data,a=Object(u.b)(),n=a.title,i=a.subtitle,c=t.markdownRemark.frontmatter,s=c.title,l=c.description,m=null!==l?l:i;return r.a.createElement(o.a,{title:s+" - "+n,description:m},r.a.createElement(P,{post:t.markdownRemark}))}},233:function(e,t,a){"use strict";var n=a(236),r=function(){return n.data.site.siteMetadata},o=a(237),i=function(){return o.data.allMarkdownRemark.group},c=a(238),s=function(){return c.data.allMarkdownRemark.group};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return s})},234:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LINKEDIN:{path:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",viewBox:"0 0 24 24"},GITHUBLINK:{path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",viewBox:"0 0 24 24"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(242),i=a.n(o),c=a(206),s=a.n(c),l=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:s.a.layout},r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{property:"og:site_name",content:a}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:title",content:a})),t)};a.d(t,"a",function(){return l})},236:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Nicholas Pung",bio:"Software Developer. Podcast Aficionado. Powerlifting Enthusiast. All things health and wellness. Join me as I learn how to be the best programmer I can be.",photo:"/photo.jpg",contacts:{email:"nicholaspungdev@gmail.com",github:"nicholaspung",linkedin:"/in/nicholas-pung"}},menu:[{label:"Projects",path:"/"},{label:"Posts",path:"/posts"},{label:"About me",path:"/pages/about"}],url:"https://lumen.netlify.com",title:"Portfolio by Nicholas Pung",subtitle:"Learnings of a Web Developer",copyright:"© All rights reserved.",disqusShortname:""}}}}},237:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"What I Learned",totalCount:1}]}}}},238:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"NodeJS",totalCount:1},{fieldValue:"PassportJS",totalCount:1}]}}}},239:function(e,t,a){"use strict";var n=a(234),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"vkontakte":t=n.a.VKONTAKTE;break;case"telegram":t=n.a.TELEGRAM;break;case"email":t=n.a.EMAIL;break;case"rss":t=n.a.RSS;break;case"linkedin":t=n.a.LINKEDIN;break;case"githublink":t=n.a.GITHUBLINK;break;default:t={}}return t},o=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="https://t.me/"+t;break;case"email":a="mailto:"+t;break;case"linkedin":a="https://linkedin.com/"+t;break;default:a=t}return a};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o})},288:function(e,t,a){"use strict";e.exports=a(289)},289:function(e,t,a){"use strict";a(10),a(51),a(140),a(30),a(31),a(16),a(50),a(141),a(39),a(139),a(96),a(17),a(97),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=c(a(0)),i=c(a(54));function c(e){return e&&e.__esModule?e:{default:e}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],l=!1;function u(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,a){return s.some(function(e){return e===a})?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))},{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!l){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),l=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};s.forEach(function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}();m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m}}]);
//# sourceMappingURL=component---src-templates-post-template-js-0318fdbd46ce8be10ca9.js.map