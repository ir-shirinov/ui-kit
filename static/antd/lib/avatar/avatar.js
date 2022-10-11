"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_classnames=_interopRequireDefault(require("classnames")),_rcResizeObserver=_interopRequireDefault(require("rc-resize-observer")),_ref=require("rc-util/lib/ref"),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_useBreakpoint=_interopRequireDefault(require("../grid/hooks/useBreakpoint")),_responsiveObserve=require("../_util/responsiveObserve"),_warning=_interopRequireDefault(require("../_util/warning")),_SizeContext=_interopRequireDefault(require("./SizeContext")),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InternalAvatar=function InternalAvatar(props,ref){var _classNames,_classNames2,groupSize=React.useContext(_SizeContext.default),_React$useState=React.useState(1),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),scale=_React$useState2[0],setScale=_React$useState2[1],_React$useState3=React.useState(!1),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),mounted=_React$useState4[0],setMounted=_React$useState4[1],_React$useState5=React.useState(!0),_React$useState6=(0,_slicedToArray2.default)(_React$useState5,2),isImgExist=_React$useState6[0],setIsImgExist=_React$useState6[1],avatarNodeRef=React.useRef(null),avatarChildrenRef=React.useRef(null),avatarNodeMergeRef=(0,_ref.composeRef)(ref,avatarNodeRef),getPrefixCls=React.useContext(_configProvider.ConfigContext).getPrefixCls,setScaleParam=function setScaleParam(){if(avatarChildrenRef.current&&avatarNodeRef.current){var childrenWidth=avatarChildrenRef.current.offsetWidth,nodeWidth=avatarNodeRef.current.offsetWidth;if(0!==childrenWidth&&0!==nodeWidth){var _props$gap=props.gap,gap=void 0===_props$gap?4:_props$gap;2*gap<nodeWidth&&setScale(nodeWidth-2*gap<childrenWidth?(nodeWidth-2*gap)/childrenWidth:1)}}};React.useEffect((function(){setMounted(!0)}),[]),React.useEffect((function(){setIsImgExist(!0),setScale(1)}),[props.src]),React.useEffect((function(){setScaleParam()}),[props.gap]);var customizePrefixCls=props.prefixCls,_props$shape=props.shape,shape=void 0===_props$shape?"circle":_props$shape,_props$size=props.size,customSize=void 0===_props$size?"default":_props$size,src=props.src,srcSet=props.srcSet,icon=props.icon,className=props.className,alt=props.alt,draggable=props.draggable,children=props.children,crossOrigin=props.crossOrigin,others=__rest(props,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),size="default"===customSize?groupSize:customSize,needResponsive=Object.keys("object"===(0,_typeof2.default)(size)&&size||{}).some((function(key){return["xs","sm","md","lg","xl","xxl"].includes(key)})),screens=(0,_useBreakpoint.default)(needResponsive),responsiveSizeStyle=React.useMemo((function(){if("object"!==(0,_typeof2.default)(size))return{};var currentBreakpoint=_responsiveObserve.responsiveArray.find((function(screen){return screens[screen]})),currentSize=size[currentBreakpoint];return currentSize?{width:currentSize,height:currentSize,lineHeight:"".concat(currentSize,"px"),fontSize:icon?currentSize/2:18}:{}}),[screens,size]);"production"!==process.env.NODE_ENV&&(0,_warning.default)(!("string"==typeof icon&&icon.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon,"` at https://ant.design/components/icon"));var childrenToRender,prefixCls=getPrefixCls("avatar",customizePrefixCls),sizeCls=(0,_classnames.default)((_classNames={},(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-lg"),"large"===size),(0,_defineProperty2.default)(_classNames,"".concat(prefixCls,"-sm"),"small"===size),_classNames)),hasImageElement=React.isValidElement(src),classString=(0,_classnames.default)(prefixCls,sizeCls,(_classNames2={},(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-").concat(shape),!!shape),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-image"),hasImageElement||src&&isImgExist),(0,_defineProperty2.default)(_classNames2,"".concat(prefixCls,"-icon"),!!icon),_classNames2),className),sizeStyle="number"==typeof size?{width:size,height:size,lineHeight:"".concat(size,"px"),fontSize:icon?size/2:18}:{};if("string"==typeof src&&isImgExist)childrenToRender=React.createElement("img",{src,draggable,srcSet,onError:function handleImgLoadError(){var onError=props.onError;!1!==(onError?onError():void 0)&&setIsImgExist(!1)},alt,crossOrigin});else if(hasImageElement)childrenToRender=src;else if(icon)childrenToRender=icon;else if(mounted||1!==scale){var transformString="scale(".concat(scale,") translateX(-50%)"),childrenStyle={msTransform:transformString,WebkitTransform:transformString,transform:transformString},sizeChildrenStyle="number"==typeof size?{lineHeight:"".concat(size,"px")}:{};childrenToRender=React.createElement(_rcResizeObserver.default,{onResize:setScaleParam},React.createElement("span",{className:"".concat(prefixCls,"-string"),ref:avatarChildrenRef,style:(0,_extends2.default)((0,_extends2.default)({},sizeChildrenStyle),childrenStyle)},children))}else childrenToRender=React.createElement("span",{className:"".concat(prefixCls,"-string"),style:{opacity:0},ref:avatarChildrenRef},children);return delete others.onError,delete others.gap,React.createElement("span",(0,_extends2.default)({},others,{style:(0,_extends2.default)((0,_extends2.default)((0,_extends2.default)({},sizeStyle),responsiveSizeStyle),others.style),className:classString,ref:avatarNodeMergeRef}),childrenToRender)},Avatar=React.forwardRef(InternalAvatar);"production"!==process.env.NODE_ENV&&(Avatar.displayName="Avatar");var _default=Avatar;exports.default=_default;