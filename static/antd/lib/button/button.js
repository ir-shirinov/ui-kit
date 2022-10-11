"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertLegacyProps=convertLegacyProps,exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_classnames=_interopRequireDefault(require("classnames")),_omit=_interopRequireDefault(require("rc-util/lib/omit")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_DisabledContext=_interopRequireDefault(require("../config-provider/DisabledContext")),_SizeContext=_interopRequireDefault(require("../config-provider/SizeContext")),_reactNode=require("../_util/reactNode"),_type=require("../_util/type"),_warning=_interopRequireDefault(require("../_util/warning")),_wave=_interopRequireDefault(require("../_util/wave")),_buttonGroup=_interopRequireWildcard(require("./button-group")),_LoadingIcon=_interopRequireDefault(require("./LoadingIcon")),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},rxTwoCNChar=/^[\u4e00-\u9fa5]{2}$/,isTwoCNChar=rxTwoCNChar.test.bind(rxTwoCNChar);function isString(str){return"string"==typeof str}function isUnBorderedButtonType(type){return"text"===type||"link"===type}function isReactFragment(node){return React.isValidElement(node)&&node.type===React.Fragment}function insertSpace(child,needInserted){if(null!=child){var SPACE=needInserted?" ":"";return"string"!=typeof child&&"number"!=typeof child&&isString(child.type)&&isTwoCNChar(child.props.children)?(0,_reactNode.cloneElement)(child,{children:child.props.children.split("").join(SPACE)}):"string"==typeof child?isTwoCNChar(child)?React.createElement("span",null,child.split("").join(SPACE)):React.createElement("span",null,child):isReactFragment(child)?React.createElement("span",null,child):child}}function spaceChildren(children,needInserted){var isPrevChildPure=!1,childList=[];return React.Children.forEach(children,(function(child){var type=(0,_typeof2.default)(child),isCurrentChildPure="string"===type||"number"===type;if(isPrevChildPure&&isCurrentChildPure){var lastIndex=childList.length-1,lastChild=childList[lastIndex];childList[lastIndex]="".concat(lastChild).concat(child)}else childList.push(child);isPrevChildPure=isCurrentChildPure})),React.Children.map(childList,(function(child){return insertSpace(child,needInserted)}))}var ButtonTypes=(0,_type.tuple)("default","primary","ghost","dashed","link","text"),ButtonShapes=(0,_type.tuple)("default","circle","round"),ButtonHTMLTypes=(0,_type.tuple)("submit","button","reset");function convertLegacyProps(type){return"danger"===type?{danger:!0}:{type}}var InternalButton=function InternalButton(props,ref){var _classNames,_props$loading=props.loading,loading=void 0!==_props$loading&&_props$loading,customizePrefixCls=props.prefixCls,_props$type=props.type,type=void 0===_props$type?"default":_props$type,danger=props.danger,_props$shape=props.shape,shape=void 0===_props$shape?"default":_props$shape,customizeSize=props.size,customDisabled=props.disabled,className=props.className,children=props.children,icon=props.icon,_props$ghost=props.ghost,ghost=void 0!==_props$ghost&&_props$ghost,_props$block=props.block,block=void 0!==_props$block&&_props$block,_props$htmlType=props.htmlType,htmlType=void 0===_props$htmlType?"button":_props$htmlType,rest=__rest(props,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),size=React.useContext(_SizeContext.default),disabled=React.useContext(_DisabledContext.default),mergedDisabled=customDisabled||disabled,groupSize=React.useContext(_buttonGroup.GroupSizeContext),_React$useState=React.useState(!!loading),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),innerLoading=_React$useState2[0],setLoading=_React$useState2[1],_React$useState3=React.useState(!1),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),hasTwoCNChar=_React$useState4[0],setHasTwoCNChar=_React$useState4[1],_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,autoInsertSpaceInButton=_React$useContext.autoInsertSpaceInButton,direction=_React$useContext.direction,buttonRef=ref||React.createRef(),isNeedInserted=function isNeedInserted(){return 1===React.Children.count(children)&&!icon&&!isUnBorderedButtonType(type)},loadingOrDelay="boolean"==typeof loading?loading:(null==loading?void 0:loading.delay)||!0;React.useEffect((function(){var delayTimer=null;return"number"==typeof loadingOrDelay?delayTimer=window.setTimeout((function(){delayTimer=null,setLoading(loadingOrDelay)}),loadingOrDelay):setLoading(loadingOrDelay),function(){delayTimer&&(window.clearTimeout(delayTimer),delayTimer=null)}}),[loadingOrDelay]),React.useEffect((function fixTwoCNChar(){if(buttonRef&&buttonRef.current&&!1!==autoInsertSpaceInButton){var buttonText=buttonRef.current.textContent;isNeedInserted()&&isTwoCNChar(buttonText)?hasTwoCNChar||setHasTwoCNChar(!0):hasTwoCNChar&&setHasTwoCNChar(!1)}}),[buttonRef]);var handleClick=function handleClick(e){var onClick=props.onClick;innerLoading||mergedDisabled?e.preventDefault():null==onClick||onClick(e)};"production"!==process.env.NODE_ENV&&(0,_warning.default)(!("string"==typeof icon&&icon.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon,"` at https://ant.design/components/icon")),"production"!==process.env.NODE_ENV&&(0,_warning.default)(!(ghost&&isUnBorderedButtonType(type)),"Button","`link` or `text` button can't be a `ghost` button.");var prefixCls=getPrefixCls("btn",customizePrefixCls),autoInsertSpace=!1!==autoInsertSpaceInButton,sizeFullname=groupSize||customizeSize||size,sizeCls=sizeFullname&&{large:"lg",small:"sm",middle:void 0}[sizeFullname]||"",iconType=innerLoading?"loading":icon,linkButtonRestProps=(0,_omit.default)(rest,["navigate"]),classes=(0,_classnames.default)(prefixCls,(_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(shape),"default"!==shape&&shape),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(type),type),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-").concat(sizeCls),sizeCls),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-icon-only"),!children&&0!==children&&!!iconType),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-background-ghost"),ghost&&!isUnBorderedButtonType(type)),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-loading"),innerLoading),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-two-chinese-chars"),hasTwoCNChar&&autoInsertSpace&&!innerLoading),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-block"),block),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-dangerous"),!!danger),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-rtl"),"rtl"===direction),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-disabled"),void 0!==linkButtonRestProps.href&&mergedDisabled),_classNames),className),iconNode=icon&&!innerLoading?icon:React.createElement(_LoadingIcon.default,{existIcon:!!icon,prefixCls,loading:!!innerLoading}),kids=children||0===children?spaceChildren(children,isNeedInserted()&&autoInsertSpace):null;if(void 0!==linkButtonRestProps.href)return React.createElement("a",(0,_extends2.default)({},linkButtonRestProps,{className:classes,onClick:handleClick,ref:buttonRef}),iconNode,kids);var buttonNode=React.createElement("button",(0,_extends2.default)({},rest,{type:htmlType,className:classes,onClick:handleClick,disabled:mergedDisabled,ref:buttonRef}),iconNode,kids);return isUnBorderedButtonType(type)?buttonNode:React.createElement(_wave.default,{disabled:!!innerLoading},buttonNode)},Button=React.forwardRef(InternalButton);"production"!==process.env.NODE_ENV&&(Button.displayName="Button"),Button.Group=_buttonGroup.default,Button.__ANT_BUTTON=!0;var _default=Button;exports.default=_default;