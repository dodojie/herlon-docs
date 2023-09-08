"use strict";(self.webpackChunkherlon_doc=self.webpackChunkherlon_doc||[]).push([[3783],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="\u591a\u7f51\u5173\u90e8\u7f72",l={unversionedId:"manual/function/zigbee/sa/multi-gateway",id:"manual/function/zigbee/sa/multi-gateway",title:"\u591a\u7f51\u5173\u90e8\u7f72",description:"\u591a\u7f51\u5173\u90e8\u7f72\u7684\u5173\u952e\u70b9\u662f\u52a1\u5fc5\u7ed9\u6bcf\u4e2a\u7f51\u5173\u5206\u914d\u4e0d\u4e00\u6837\u4e14\u552f\u4e00\u7684PanID\uff0c\u9ed8\u8ba4sa\u6a21\u5f0f\u7684PanID\u4f1a\u6839\u636e\u7f51\u5173\u7684mac\u968f\u673a\u751f\u6210\uff0c\u6240\u4ee5\u4e00\u822c\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u5982\u679c\u591a\u4e2a\u7f51\u5173PanID\u51b2\u7a81\u4e86\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4fee\u6539\u3002",source:"@site/docs/manual/04-function/02-zigbee/02-sa/04-multi-gateway.md",sourceDirName:"manual/04-function/02-zigbee/02-sa",slug:"/manual/function/zigbee/sa/multi-gateway",permalink:"/herlon-docs/docs/manual/function/zigbee/sa/multi-gateway",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"manual",previous:{title:"MQTT\u8bf4\u660e",permalink:"/herlon-docs/docs/manual/function/zigbee/sa/mqtt"},next:{title:"NSA\u6a21\u5f0f",permalink:"/herlon-docs/docs/category/nsa\u6a21\u5f0f"}},c={},p=[{value:"\u67e5\u8be2\u7f51\u5173\u53c2\u6570",id:"\u67e5\u8be2\u7f51\u5173\u53c2\u6570",level:3},{value:"\u4fee\u6539PanID",id:"\u4fee\u6539panid",level:3}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u591a\u7f51\u5173\u90e8\u7f72"},"\u591a\u7f51\u5173\u90e8\u7f72"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u591a\u7f51\u5173\u90e8\u7f72\u7684\u5173\u952e\u70b9\u662f\u52a1\u5fc5\u7ed9\u6bcf\u4e2a\u7f51\u5173\u5206\u914d\u4e0d\u4e00\u6837\u4e14\u552f\u4e00\u7684PanID\uff0c\u9ed8\u8ba4sa\u6a21\u5f0f\u7684PanID\u4f1a\u6839\u636e\u7f51\u5173\u7684mac\u968f\u673a\u751f\u6210\uff0c\u6240\u4ee5\u4e00\u822c\u60c5\u51b5\u4e0b\u65e0\u9700\u4fee\u6539\u4e5f\u4e0d\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u5982\u679c\u591a\u4e2a\u7f51\u5173PanID\u51b2\u7a81\u4e86\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4fee\u6539\u3002"))),(0,r.kt)("h3",{id:"\u67e5\u8be2\u7f51\u5173\u53c2\u6570"},"\u67e5\u8be2\u7f51\u5173\u53c2\u6570"),(0,r.kt)("p",null,"\u7f51\u5173\u7ba1\u7406\u4e3b\u9875\u9762\uff0c\u4f9d\u6b21\u70b9\u51fb\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Consoles")," ---\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0")," \uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u56de\u8f66\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ZbConfig\n")),(0,r.kt)("p",null,"\u63a7\u5236\u53f0\u4f1a\u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'RESULT = {"ZbConfig":{"Channel":11,"PanID":"0x09C0","ExtPanID":"0xCCCCCCCC46EF49C0","KeyL":"0x46EF49C005600000","KeyH":"0x46EF49C005600000","TxRadio":20}}\n')),(0,r.kt)("p",null,"\u6838\u5bf9\u591a\u4e2a\u7f51\u5173\u7684PanID\u662f\u5426\u51b2\u7a81\uff0c\u5982\u679c\u51b2\u7a81\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u4fee\u6539\u5176\u4e2d\u4e00\u4e2a\u7f51\u5173\u7684PanID\u3002"),(0,r.kt)("h3",{id:"\u4fee\u6539panid"},"\u4fee\u6539PanID"),(0,r.kt)("p",null,"\u7f51\u5173\u7ba1\u7406\u4e3b\u9875\u9762\uff0c\u4f9d\u6b21\u70b9\u51fb\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Consoles")," ---\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0")," \uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u56de\u8f66\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ZbConfig {"PanID":"0x1234"}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0x1234"),"\u53ef\u81ea\u884c\u4fee\u6539"))}u.isMDXComponent=!0}}]);