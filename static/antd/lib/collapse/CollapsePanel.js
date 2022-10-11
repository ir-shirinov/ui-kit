"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_classnames=_interopRequireDefault(require("classnames")),_rcCollapse=_interopRequireDefault(require("rc-collapse")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_warning=_interopRequireDefault(require("../_util/warning")),CollapsePanel=function CollapsePanel(props){"production"!==process.env.NODE_ENV&&(0,_warning.default)(!("disabled"in props),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var getPrefixCls=React.useContext(_configProvider.ConfigContext).getPrefixCls,customizePrefixCls=props.prefixCls,_props$className=props.className,className=void 0===_props$className?"":_props$className,_props$showArrow=props.showArrow,showArrow=void 0===_props$showArrow||_props$showArrow,prefixCls=getPrefixCls("collapse",customizePrefixCls),collapsePanelClassName=(0,_classnames.default)((0,_defineProperty2.default)({},"".concat(prefixCls,"-no-arrow"),!showArrow),className);return React.createElement(_rcCollapse.default.Panel,(0,_extends2.default)({},props,{prefixCls,className:collapsePanelClassName}))},_default=CollapsePanel;exports.default=_default;