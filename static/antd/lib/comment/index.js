"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classnames=_interopRequireDefault(require("classnames")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Comment=function Comment(_a){var actions=_a.actions,author=_a.author,avatar=_a.avatar,children=_a.children,className=_a.className,content=_a.content,customizePrefixCls=_a.prefixCls,datetime=_a.datetime,otherProps=__rest(_a,["actions","author","avatar","children","className","content","prefixCls","datetime"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,prefixCls=getPrefixCls("comment",customizePrefixCls),avatarDom=avatar?React.createElement("div",{className:"".concat(prefixCls,"-avatar")},"string"==typeof avatar?React.createElement("img",{src:avatar,alt:"comment-avatar"}):avatar):null,actionDom=actions&&actions.length?React.createElement("ul",{className:"".concat(prefixCls,"-actions")},actions.map((function(action,index){return React.createElement("li",{key:"action-".concat(index)},action)}))):null,authorContent=(author||datetime)&&React.createElement("div",{className:"".concat(prefixCls,"-content-author")},author&&React.createElement("span",{className:"".concat(prefixCls,"-content-author-name")},author),datetime&&React.createElement("span",{className:"".concat(prefixCls,"-content-author-time")},datetime)),contentDom=React.createElement("div",{className:"".concat(prefixCls,"-content")},authorContent,React.createElement("div",{className:"".concat(prefixCls,"-content-detail")},content),actionDom),cls=(0,_classnames.default)(prefixCls,(0,_defineProperty2.default)({},"".concat(prefixCls,"-rtl"),"rtl"===direction),className);return React.createElement("div",(0,_extends2.default)({},otherProps,{className:cls}),React.createElement("div",{className:"".concat(prefixCls,"-inner")},avatarDom,contentDom),children?function renderNested(prefixCls,nestedChildren){return React.createElement("div",{className:(0,_classnames.default)("".concat(prefixCls,"-nested"))},nestedChildren)}(prefixCls,children):null)},_default=Comment;exports.default=_default;