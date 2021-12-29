"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53427],{70430:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={},s="Welcome",c={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"This is the documentation for the official IOTA Streams software. You can read more about core principles behind IOTA Streams in the following blog post.",source:"@site/external/streams/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/streams/welcome",editUrl:"https://github.com/iotaledger/streams/edit/develop/external/streams/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Overview",permalink:"/streams/overview/"}},u=[{value:"Warning",id:"warning",children:[],level:2},{value:"Joining the discussion",id:"joining-the-discussion",children:[],level:2},{value:"What you will find here",id:"what-you-will-find-here",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome"},"Welcome"),(0,i.kt)("p",null,"This is the documentation for the official IOTA Streams software. You can read more about core principles behind IOTA Streams in the following blog ",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-streams-alpha-7e91ee326ac0/"},"post"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"streams")," is an organizational tool for structuring and navigating secure data through the Tangle. Streams organizes data by ordering it in a uniform and interoperable structure Needless to say, it is also based on our official ",(0,i.kt)("inlineCode",{parentName:"p"},"one-source-code-of-truth")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library"),"."),(0,i.kt)("h2",{id:"warning"},"Warning"),(0,i.kt)("p",null,"This library is in active development. The library targets the Chrysalis network and does not work with the IOTA legacy network."),(0,i.kt)("p",null,"More information about Chrysalis components is available at ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome"},"documentation portal"),"."),(0,i.kt)("h2",{id:"joining-the-discussion"},"Joining the discussion"),(0,i.kt)("p",null,"If you want to get involved in discussions about this library, or you're looking for support, go to the #streams-discussion channel on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord"),"."),(0,i.kt)("h2",{id:"what-you-will-find-here"},"What you will find here"),(0,i.kt)("p",null,"This documentation has five paths:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Overview, an detailed overview of the streams library."),(0,i.kt)("li",{parentName:"ol"},"Libraries, all avaiable programming languages and their resources."),(0,i.kt)("li",{parentName:"ol"},"The Specification, detailed explaination requirements and functionality."),(0,i.kt)("li",{parentName:"ol"},"Contribute, how you can work on the streams software."),(0,i.kt)("li",{parentName:"ol"},"Get in touch, join the community and become part of the X-Team!")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);