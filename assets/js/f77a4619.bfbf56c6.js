"use strict";(self.webpackChunkherlon_doc=self.webpackChunkherlon_doc||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:d,values:v,groupId:b,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const z=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==O&&(x(t),T(a),null!=b&&w(b,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:z,onClick:z},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={},s="USB",u={unversionedId:"manual/function/zigbee/nsa/USB",id:"manual/function/zigbee/nsa/USB",title:"USB",description:"\u62e8\u52a8\u5f00\u5173",source:"@site/docs/manual/04-function/02-zigbee/03-nsa/02-USB.md",sourceDirName:"manual/04-function/02-zigbee/03-nsa",slug:"/manual/function/zigbee/nsa/USB",permalink:"/herlon-docs/docs/manual/function/zigbee/nsa/USB",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"manual",previous:{title:"TCP",permalink:"/herlon-docs/docs/manual/function/zigbee/nsa/TCP"},next:{title:"\u6811\u8393\u6d3e",permalink:"/herlon-docs/docs/manual/function/zigbee/nsa/\u6811\u8393\u6d3e"}},c={},m=[{value:"\u62e8\u52a8\u5f00\u5173",id:"\u62e8\u52a8\u5f00\u5173",level:2},{value:"\u4e0a\u4f4d\u673a\u914d\u7f6e",id:"\u4e0a\u4f4d\u673a\u914d\u7f6e",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usb"},"USB"),(0,r.kt)("h2",{id:"\u62e8\u52a8\u5f00\u5173"},"\u62e8\u52a8\u5f00\u5173"),(0,r.kt)("p",null,"\u62e8\u52a8\u5f00\u5173\u5207\u6362\u5230\u5982\u4e0b\u72b6\u6001\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OFF"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"OFF")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u786e\u8ba4\u62e8\u52a8\u5f00\u5173\u662f\u5426\u5df2\u8bbe\u7f6e\u6b63\u786e\uff0c\u5426\u5219zigbee\u529f\u80fd\u5728\u6b64\u6a21\u5f0f\u4e0b\u5c06\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"))),(0,r.kt)("h2",{id:"\u4e0a\u4f4d\u673a\u914d\u7f6e"},"\u4e0a\u4f4d\u673a\u914d\u7f6e"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Z2M",label:"Z2M",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u6253\u5f00z2m\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," ,\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5f00\u542fha\u81ea\u52a8\u53d1\u73b0\nhomeassistant: true\n\n# \u5f00\u542f\u914d\u5bf9\u6a21\u5f0f\npermit_join: true\n\n# \u5f00\u542f\u524d\u7aef\u7f51\u9875\u7ba1\u7406(\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a8080)\nfrontend: true\n\n# MQTT\u914d\u7f6e\nmqtt:\n  # mqtt\u53d1\u5e03\u4e3b\u9898\u524d\u7f00\n  base_topic: zigbee2mqtt\n  # mqtt\u670d\u52a1\u5668\u5730\u5740(\u8bf7\u52a1\u5fc5\u6539\u6210\u81ea\u5df1\u7684\u670d\u52a1\u5668\u5730\u5740)\n  server: 'mqtt://192.168.100.1:1883'\n  # mqtt\u8d26\u53f7\u5bc6\u7801\uff0c\u5982\u679c\u6709\u8d26\u53f7\u5bc6\u7801\u8bf7\u53bb\u6389\u524d\u9762\u7684\u6ce8\u91ca\uff0c\u5982\u679c\u6ca1\u6709\u65e0\u9700\u4fee\u6539\u3002\n  # user: my_user\n  # password: my_password\n\n# \u4e32\u53e3\u8bbe\u7f6e(\u52a1\u5fc5\u8ddf\u6b64\u5904\u914d\u7f6e\u4e00\u81f4\uff0c\u8bf7\u52ff\u4fee\u6539)\nserial:\n  port: /dev/ttyUSB0\n"))),(0,r.kt)(o.Z,{value:"ZHA",label:"ZHA",mdxType:"TabItem"},(0,r.kt)("p",null,"homeassistant\u641c\u7d22\u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"zha")," \u5e76\u6dfb\u52a0 ---\x3e \u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0 - USB Serial, s/n: n/a"),"\u63d0\u4ea4(\u5982\u679c\u6ca1\u51fa\u73b0\u6b64\u4e32\u53e3\u5730\u5740\uff0c\u90a3\u4e48\u8bc1\u660e\u6ca1\u6709\u6210\u529f\u5c06\u4e32\u53e3\u5f15\u5165\u5230hass\u5bb9\u5668\u5185\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8bbe\u7f6e)"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679cdocker\u90e8\u7f72\u7684zigbee2mqtt\u6216\u8005homeassistant\uff0c\u8bf7\u5728docker\u90e8\u7f72\u547d\u4ee4\u4e2d\u52a0\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"--device=/dev/ttyUSB0"),"\u53c2\u6570\uff0c\u5c06\u4e32\u53e3\u5f15\u5165\u5230docker\u5bb9\u5668\u4e2d\uff0c\u5426\u5219\u5bb9\u5668\u65e0\u6cd5\u4f7f\u7528\u4e32\u53e3\u3002"))))}d.isMDXComponent=!0}}]);