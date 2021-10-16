"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23966],{19058:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],s={id:"smart-contracts-tangle",title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",keywords:["Tangle","Smart Contracts","wasp","ISCP"]},c=void 0,l={unversionedId:"future/smart-contracts/smart-contracts-tangle",id:"future/smart-contracts/smart-contracts-tangle",isDocsHomePage:!1,title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",source:"@site/internal/learn/future/smart-contracts/07_tangle.md",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-tangle",permalink:"/learn/future/smart-contracts/smart-contracts-tangle",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/smart-contracts/07_tangle.md",tags:[],version:"current",lastUpdatedAt:1634139345,formattedLastUpdatedAt:"10/13/2021",sidebarPosition:7,frontMatter:{id:"smart-contracts-tangle",title:"IOTA Tangle",description:"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle.",keywords:["Tangle","Smart Contracts","wasp","ISCP"]},sidebar:"learn",previous:{title:"Consensus",permalink:"/learn/future/smart-contracts/smart-contracts-consensus"}},u=[{value:"\ud83c\udfd7 Work in Progress",id:"-work-in-progress",children:[],level:2}],p={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-work-in-progress"},"\ud83c\udfd7 Work in Progress"),(0,o.kt)("p",null,"In this article you will learn how the IOTA Smart Contracts interact with the IOTA Tangle."),(0,o.kt)("p",null,"Smart contracts are essential across many of IOTA\u2019s verticals including ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/global-trade-and-supply-chains"},"Supply Chain"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/smart-city"},"Smart Cities"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/industrial-iot"},"Industrial IoT")," amongst others. IOTA Smart Contracts can automate contractual obligations within many industries."),(0,o.kt)("p",null,"Thanks to the Tangle\u2019s properties of scalability, high throughput, and feeless transactions, IOTA Smart Contracts have many benefits,"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/content/images/downloaded_images/an-introduction-to-iota-smart-contracts-16ea6f247936/0-dHkoFWGVvRebra9u.jpg"},(0,o.kt)("img",{parentName:"a",src:"https://blog.iota.org/content/images/downloaded_images/an-introduction-to-iota-smart-contracts-16ea6f247936/0-dHkoFWGVvRebra9u.jpg",alt:null}))),(0,o.kt)("p",null,"To facilitate IOTA\u2019s use cases, including the Internet of Things, IOTA smart contracts run on top of the base layer, \u201doff-Tangle\u201d."),(0,o.kt)("p",null,"Although Ethereum\u2019s \u201con-chain\u201d smart contracts are popular due to their properties, they have some significant drawbacks. The most salient one is that for every smart contract in existence every node needs to keep a copy of the contract\u2019s program code and state. Every node in the network has to execute the exact same code when the smart contract is triggered."),(0,o.kt)("p",null,"There is no limit to the number of nodes that have to run this identical code just to generate a single result. And as the network grows, the amount of processing needed to produce that same result increases. This is a huge barrier to scalability."),(0,o.kt)("p",null,"In addition to the transaction fees you need to pay to be considered for inclusion in the ledger, you also need to pay gas fees to keep the program running long enough for it to complete. This means the cost to run these smart contracts becomes prohibitively high for anything but certain classes of use cases where the cost overhead is relatively insignificant."),(0,o.kt)("p",null,"This is why IOTA Smart Contracts are not implemented as part of the core protocol but as a layer 2 protocol to leverages all advantages."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://i.imgur.com/Ynv8bYc.png"},(0,o.kt)("img",{parentName:"a",src:"https://i.imgur.com/Ynv8bYc.png",alt:null}))))}m.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(r),h=a,g=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);