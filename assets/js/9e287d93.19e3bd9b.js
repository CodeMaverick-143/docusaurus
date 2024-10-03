"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94882],{59273:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(62540),s=n(63696),l=n(52711),i=n(49519);let o=s.forwardRef(function({name:e,children:t},n){let o=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),a=e?`${e}-${o}`:o,d=`#${a}`,c=(0,i.W6)();return(0,l.A)().collectAnchor(a),(0,r.jsx)("tr",{id:a,tabIndex:0,ref:c.location.hash===d?n:void 0,onClick:e=>{var t;let n="TD"===e.target.tagName.toUpperCase(),r=!!(null===(t=window.getSelection())||void 0===t?void 0:t.toString());n&&!r&&c.push(d)},onKeyDown:e=>{"Enter"===e.key&&c.push(d)},children:t.props.children})});function a({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[n,l]=s.Children.toArray(e.props.children),i=(0,s.useRef)(null);(0,s.useEffect)(()=>{var e;null===(e=i.current)||void 0===e||e.focus()},[i]);let a=s.Children.map(l.props.children,e=>(0,r.jsx)(o,{name:t,ref:i,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[n,(0,r.jsx)("tbody",{children:a})]})}},18842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});let r=JSON.parse('{"id":"api/misc/eslint-plugin/no-untranslated-text","title":"no-untranslated-text","description":"Enforce text labels in JSX to be wrapped by translate calls.","source":"@site/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1727962081000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},"sidebar":"api","previous":{"title":"no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"},"next":{"title":"prefer-docusaurus-heading","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"}}');var s=n(62540),l=n(43023),i=n(59273);let o={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},a="no-untranslated-text",d={},c=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"no-untranslated-text",children:"no-untranslated-text"})}),"\n","\n",(0,s.jsx)(t.p,{children:"Enforce text labels in JSX to be wrapped by translate calls."}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"})," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."]}),"\n",(0,s.jsx)(t.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is not translated\n<Component>Hello World</Component>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.A,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ignoredStrings"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{children:"Text labels that only contain strings in this list will not be reported."})]})})]})}),"\n",(0,s.jsx)(t.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,s.jsxs)(t.p,{children:["If you're not using the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"}),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."]}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(63696);let s={},l=r.createContext(s);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);