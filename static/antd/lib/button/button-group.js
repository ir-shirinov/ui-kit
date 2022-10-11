"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GroupSizeContext=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classnames=_interopRequireDefault(require("classnames")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_warning=_interopRequireDefault(require("../_util/warning")),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},GroupSizeContext=React.createContext(void 0);exports.GroupSizeContext=GroupSizeContext;var ButtonGroup=function ButtonGroup(props){var _classNames,_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,customizePrefixCls=props.prefixCls,size=props.size,className=props.className,others=__rest(props,["prefixCls","size","className"]),prefixCls=getPrefixCls("btn-group",customizePrefixCls),sizeCls="";switch(size){case"large":sizeCls="lg";break;case"small":sizeCls="sm";break;case"middle":case void 0:break;default:"production"!==process.env.NODE_ENV&&(0,_warning.default)(!size,"Button.Group","Invalid prop `size`.")}var classes=(0,_classnames.default)(prefixCls,(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(sizeCls),sizeCls),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames),className);return React.createElement(GroupSizeContext.Provider,{value:size},React.createElement("div",(0,_extends2.default)({},others,{className:classes})))},_default=ButtonGroup;exports.default=_default;