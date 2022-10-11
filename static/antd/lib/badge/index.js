"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_classnames=_interopRequireDefault(require("classnames")),_rcMotion=_interopRequireDefault(require("rc-motion")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_reactNode=require("../_util/reactNode"),_Ribbon=_interopRequireDefault(require("./Ribbon")),_ScrollNumber=_interopRequireDefault(require("./ScrollNumber")),_utils=require("./utils"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Badge=function Badge(_a){var _classNames,_classNames2,customizePrefixCls=_a.prefixCls,customizeScrollNumberPrefixCls=_a.scrollNumberPrefixCls,children=_a.children,status=_a.status,text=_a.text,color=_a.color,_a$count=_a.count,count=void 0===_a$count?null:_a$count,_a$overflowCount=_a.overflowCount,overflowCount=void 0===_a$overflowCount?99:_a$overflowCount,_a$dot=_a.dot,dot=void 0!==_a$dot&&_a$dot,_a$size=_a.size,size=void 0===_a$size?"default":_a$size,title=_a.title,offset=_a.offset,style=_a.style,className=_a.className,_a$showZero=_a.showZero,showZero=void 0!==_a$showZero&&_a$showZero,restProps=__rest(_a,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,prefixCls=getPrefixCls("badge",customizePrefixCls),numberedDisplayCount=count>overflowCount?"".concat(overflowCount,"+"):count,hasStatus=null!=status||null!=color,isZero="0"===numberedDisplayCount||0===numberedDisplayCount,showAsDot=dot&&!isZero,mergedCount=showAsDot?"":numberedDisplayCount,isHidden=(0,React.useMemo)((function(){return(null==mergedCount||""===mergedCount||isZero&&!showZero)&&!showAsDot}),[mergedCount,isZero,showZero,showAsDot]),countRef=(0,React.useRef)(count);isHidden||(countRef.current=count);var livingCount=countRef.current,displayCountRef=(0,React.useRef)(mergedCount);isHidden||(displayCountRef.current=mergedCount);var displayCount=displayCountRef.current,isDotRef=(0,React.useRef)(showAsDot);isHidden||(isDotRef.current=showAsDot);var mergedStyle=(0,React.useMemo)((function(){if(!offset)return(0,_extends2.default)({},style);var offsetStyle={marginTop:offset[1]};return"rtl"===direction?offsetStyle.left=parseInt(offset[0],10):offsetStyle.right=-parseInt(offset[0],10),(0,_extends2.default)((0,_extends2.default)({},offsetStyle),style)}),[direction,offset,style]),titleNode=null!=title?title:"string"==typeof livingCount||"number"==typeof livingCount?livingCount:void 0,statusTextNode=isHidden||!text?null:React.createElement("span",{className:"".concat(prefixCls,"-status-text")},text),displayNode=livingCount&&"object"===(0,_typeof2.default)(livingCount)?(0,_reactNode.cloneElement)(livingCount,(function(oriProps){return{style:(0,_extends2.default)((0,_extends2.default)({},mergedStyle),oriProps.style)}})):void 0,statusCls=(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-status-dot"),hasStatus),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-status-").concat(status),!!status),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-status-").concat(color),(0,_utils.isPresetColor)(color)),_classNames)),statusStyle={};color&&!(0,_utils.isPresetColor)(color)&&(statusStyle.background=color);var badgeClassName=(0,_classnames.default)(prefixCls,(_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-status"),hasStatus),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-not-a-wrapper"),!children),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-rtl"),"rtl"===direction),_classNames2),className);if(!children&&hasStatus){var statusTextColor=mergedStyle.color;return React.createElement("span",(0,_extends2.default)({},restProps,{className:badgeClassName,style:mergedStyle}),React.createElement("span",{className:statusCls,style:statusStyle}),text&&React.createElement("span",{style:{color:statusTextColor},className:"".concat(prefixCls,"-status-text")},text))}return React.createElement("span",(0,_extends2.default)({},restProps,{className:badgeClassName}),children,React.createElement(_rcMotion.default,{visible:!isHidden,motionName:"".concat(prefixCls,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(_ref){var _classNames3,motionClassName=_ref.className,scrollNumberPrefixCls=getPrefixCls("scroll-number",customizeScrollNumberPrefixCls),isDot=isDotRef.current,scrollNumberCls=(0,_classnames.default)((_classNames3={},(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-dot"),isDot),(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-count"),!isDot),(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-count-sm"),"small"===size),(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-multiple-words"),!isDot&&displayCount&&displayCount.toString().length>1),(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-status-").concat(status),!!status),(0,_defineProperty2.default)(_classNames3,"".concat(prefixCls,"-status-").concat(color),(0,_utils.isPresetColor)(color)),_classNames3)),scrollNumberStyle=(0,_extends2.default)({},mergedStyle);return color&&!(0,_utils.isPresetColor)(color)&&((scrollNumberStyle=scrollNumberStyle||{}).background=color),React.createElement(_ScrollNumber.default,{prefixCls:scrollNumberPrefixCls,show:!isHidden,motionClassName,className:scrollNumberCls,count:displayCount,title:titleNode,style:scrollNumberStyle,key:"scrollNumber"},displayNode)})),statusTextNode)};Badge.Ribbon=_Ribbon.default;var _default=Badge;exports.default=_default;