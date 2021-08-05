(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8550],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47726:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=t(74034),i=t(79973),r=(t(67294),t(3905)),o={id:"use-linking",title:"useLinking",sidebar_label:"useLinking"},s={unversionedId:"use-linking",id:"version-5.x/use-linking",isDocsHomePage:!1,title:"useLinking",description:"The useLinking hook lets us handle deep links in our apps. This is used internally by React Navigation to implement deep linking support.",source:"@site/versioned_docs/version-5.x/use-linking.md",sourceDirName:".",slug:"/use-linking",permalink:"/docs/5.x/use-linking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-linking.md",version:"5.x",sidebar_label:"useLinking",frontMatter:{id:"use-linking",title:"useLinking",sidebar_label:"useLinking"},sidebar:"version-5.x/docs",previous:{title:"useLinkBuilder",permalink:"/docs/5.x/use-link-builder"},next:{title:"useScrollToTop",permalink:"/docs/5.x/use-scroll-to-top"}},l=[{value:"Options",id:"options",children:[]}],p={toc:l};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useLinking")," hook lets us handle deep links in our apps. This is used internally by React Navigation to implement deep linking support."),(0,r.kt)("p",null,"You should use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-container#linking"},(0,r.kt)("inlineCode",{parentName:"a"},"linking")," prop on ",(0,r.kt)("inlineCode",{parentName:"a"},"NavigationContainer"))," instead of using this hook directly.\nThis documentation exists for users who were already using this hook before the ",(0,r.kt)("inlineCode",{parentName:"p"},"linking")," prop was added."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useLinking , NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  const ref = React.useRef();\n\n  const { getInitialState } = useLinking(ref, {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      }\n    },\n  });\n\n  const [isReady, setIsReady] = React.useState(false);\n  const [initialState, setInitialState] = React.useState();\n\n  React.useEffect(() => {\n    getInitialState()\n      .catch(() => {})\n      .then(state => {\n        if (state !== undefined) {\n          setInitialState(state);\n        }\n\n        setIsReady(true);\n      });\n  }, [getInitialState]);\n\n  if (!isReady) {\n    return null;\n  }\n\n  return (\n    <NavigationContainer initialState={initialState} ref={ref}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/deep-linking"},"deep linking guide")," for a complete guide on how to configure deep linking."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"prefixes"},(0,r.kt)("inlineCode",{parentName:"h4"},"prefixes")),(0,r.kt)("p",null,"URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"universal links"),"."),(0,r.kt)("p",null,"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n});\n")),(0,r.kt)("p",null,"This is only supported on iOS and Android."),(0,r.kt)("h4",{id:"config"},(0,r.kt)("inlineCode",{parentName:"h4"},"config")),(0,r.kt)("p",null,"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."),(0,r.kt)("p",null,"For example, if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog")," screen inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," screen and want it to handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"item/:id")," pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n")),(0,r.kt)("p",null,"The options for parsing can be an object or a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n")),(0,r.kt)("p",null,"When a string is specified, it's equivalent to providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," option."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," option is a pattern to match against the path. Any segments starting with ",(0,r.kt)("inlineCode",{parentName:"p"},":")," are recognized as a param with the same name. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"item/42")," will be parsed to ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: 'item', params: { id: '42' } }"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRouteName")," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n")),(0,r.kt)("p",null,"and URL : ",(0,r.kt)("inlineCode",{parentName:"p"},"/item/42"),", the state will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n")),(0,r.kt)("p",null,"If no custom function is provided for parsing a param, it'll be parsed as a string."),(0,r.kt)("h4",{id:"enabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"enabled")),(0,r.kt)("p",null,"Optional boolean to enable or disable the linking integration. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"getstatefrompath"},(0,r.kt)("inlineCode",{parentName:"h4"},"getStateFromPath")),(0,r.kt)("p",null,"You can optionally override the way React Navigation parses deep links to a state object by providing your own implementation."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getStateFromPath(path, config) {\n    // Return a state object here\n    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n  }\n});\n")),(0,r.kt)("h4",{id:"getpathfromstate"},(0,r.kt)("inlineCode",{parentName:"h4"},"getPathFromState")),(0,r.kt)("p",null,"You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",(0,r.kt)("inlineCode",{parentName:"p"},"getStateFromPath"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getPathFromState(state, config) {\n    // Return a path string here\n    // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n  }\n});\n")))}u.isMDXComponent=!0}}]);