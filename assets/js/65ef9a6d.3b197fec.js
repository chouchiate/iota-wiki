"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47826],{18821:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return f},default:function(){return h}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=n(31137),s=n(71871),c=["components"],u={},l="Posting Asynchronous Requests",p={unversionedId:"guide/schema/post",id:"guide/schema/post",isDocsHomePage:!1,title:"Posting Asynchronous Requests",description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle.",source:"@site/external/wasp/documentation/docs/guide/schema/post.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/post",permalink:"/wasp/guide/schema/post",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calling Functions",permalink:"/wasp/guide/schema/call"},next:{title:"Testing Smart Contracts",permalink:"/wasp/guide/schema/test"}},f=[],d={toc:f};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"posting-asynchronous-requests"},"Posting Asynchronous Requests"),(0,a.kt)("p",null,"Asynchronous function calls between smart contracts are posted as requests on the Tangle.\nThey allow you to invoke any smart contract function that is not a View on any smart\ncontract chain. You will notice that the behavior is very similar to a normal function\ncall, but instead of using the call() method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"func")," member in the function\ndescriptor you will now use the post() or post_to_chain() methods. The former posts the\nrequest within the current chain, and the latter takes the chain ID of the desired chain\nas parameter."),(0,a.kt)("p",null,"In addition to the previously discussed transfer_iotas() and of_contract() methods you can\nmodify the behavior further by providing a delay() in seconds, which enables delayed\nexecution of the request. Note that this is of particular interest to smart contracts that\nneed a delayed action, like betting contracts with a timed betting round, or to create\ntime-lock functionality in a smart contract. Here's how that works:"),(0,a.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"eor := ScFuncs.EndOfRound(ctx)\neor.Func.Delay(3600).TransferIotas(1).Post()\n"))),(0,a.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let eor = ScFuncs::end_of_round(ctx);\neor.func.delay(3600).transfer_iotas(1).post();\n")))),(0,a.kt)("p",null,"Note that an asynchronous request always needs to send at least 1 token, because it is\nposted as a request on the Tangle, and it is not possible to have a request without a\ntransfer. So if you post to a function that expects tokens you just specify the amount of\ntokens required, but if you post to a function that does not expect any tokens then you\nstill have to provide 1 iota."),(0,a.kt)("p",null,"Also note that providing a delay() before a call() will result in a run-time error. We do\nnot know the intention of the user until the actual call() or post() is encountered, so we\ncannot check for this at compile-time unless we are willing to accept a lot of extra\noverhead. It should not really be a problem because using delay() is rare, anyway, and\nusing it with call() cannot have been the intention."),(0,a.kt)("p",null,"The function that posts the request through the function descriptor will immediately\ncontinue execution and does not wait for its completion. Therefore, it is not possible to\ndirectly retrieve the return values from such a call."),(0,a.kt)("p",null,"If you need some return values you will have to create a mechanism that can do so, for\nexample by providing a callback chain/contract/function combination as part of the input\nparameters of the requested function, so that upon completion that function can\nasynchronously post the results to the indicated function. It will require a certain\ndegree of cooperation between both smart contracts. In the future we will probably be\nlooking at providing a generic mechanism for this."),(0,a.kt)("p",null,"In the next section we will look at how we can use the function descriptors when testing\nsmart contracts with Solo."))}h.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o=n(54179);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),s="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,o=e.block,u=e.defaultValue,l=e.values,p=e.groupId,f=e.className,d=r.Children.toArray(e.children),h=null!=l?l:d.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,y=a(),v=y.tabGroupChoices,b=y.setTabGroupChoices,g=(0,r.useState)(m),w=g[0],k=g[1],x=[];if(null!=p){var O=v[p];null!=O&&O!==w&&h.some((function(e){return e.value===O}))&&k(O)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;k(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,o,a,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);