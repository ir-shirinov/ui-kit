"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfigContext=exports.ConfigConsumer=void 0,exports.withConfigConsumer=withConfigConsumer;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),React=_interopRequireWildcard(require("react")),defaultGetPrefixCls=function defaultGetPrefixCls(suffixCls,customizePrefixCls){return customizePrefixCls||(suffixCls?"ant-".concat(suffixCls):"ant")},ConfigContext=React.createContext({getPrefixCls:defaultGetPrefixCls});exports.ConfigContext=ConfigContext;var ConfigConsumer=ConfigContext.Consumer;function withConfigConsumer(config){return function withConfigConsumerFunc(Component){var SFC=function SFC(props){return React.createElement(ConfigConsumer,null,(function(configProps){var basicPrefixCls=config.prefixCls,prefixCls=(0,configProps.getPrefixCls)(basicPrefixCls,props.prefixCls);return React.createElement(Component,(0,_extends2.default)({},configProps,props,{prefixCls}))}))},cons=Component.constructor,name=cons&&cons.displayName||Component.name||"Component";return"production"!==process.env.NODE_ENV&&(SFC.displayName="withConfigConsumer(".concat(name,")")),SFC}}exports.ConfigConsumer=ConfigConsumer;