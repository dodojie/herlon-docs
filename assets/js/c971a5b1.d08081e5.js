"use strict";(self.webpackChunkherlon_doc=self.webpackChunkherlon_doc||[]).push([[5210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>T,frontMatter:()=>y,metadata:()=>g,toc:()=>w});var r=n(7462),a=n(7294),l=n(3905),o=n(6010),u=n(2389),s=n(7392),i=n(7094),c=n(2466);const m="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:u,defaultValue:d,values:b,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[T,E]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&E(e)}const z=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==T&&(N(t),E(r),null!=f&&O(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;n=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;n=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},v)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:z,onClick:z},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,u.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function v(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,r),hidden:n},t)}const y={},h="\u5b89\u88c5zigbee2mqtt",g={unversionedId:"manual/z2m/install-z2m",id:"manual/z2m/install-z2m",title:"\u5b89\u88c5zigbee2mqtt",description:"",source:"@site/docs/manual/04-z2m/02-install-z2m.md",sourceDirName:"manual/04-z2m",slug:"/manual/z2m/install-z2m",permalink:"/herlon-docs/docs/manual/z2m/install-z2m",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"manual",previous:{title:"\u4ecb\u7ecd",permalink:"/herlon-docs/docs/manual/z2m/intro"},next:{title:"\u652f\u6301\u7684zigbee\u8bbe\u5907\u5217\u8868",permalink:"/herlon-docs/docs/manual/z2m/supported-devices"}},k={},w=[],O={toc:w};function T(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b89\u88c5zigbee2mqtt"},"\u5b89\u88c5zigbee2mqtt"),(0,l.kt)(b,{mdxType:"Tabs"},(0,l.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,l.kt)(v,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,l.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))))}T.isMDXComponent=!0}}]);