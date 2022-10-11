"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GroupContext=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_classnames=_interopRequireDefault(require("classnames")),_omit=_interopRequireDefault(require("rc-util/lib/omit")),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_Checkbox=_interopRequireDefault(require("./Checkbox")),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},GroupContext=React.createContext(null);exports.GroupContext=GroupContext;var InternalCheckboxGroup=function InternalCheckboxGroup(_a,ref){var defaultValue=_a.defaultValue,children=_a.children,_a$options=_a.options,options=void 0===_a$options?[]:_a$options,customizePrefixCls=_a.prefixCls,className=_a.className,style=_a.style,onChange=_a.onChange,restProps=__rest(_a,["defaultValue","children","options","prefixCls","className","style","onChange"]),_React$useContext=React.useContext(_configProvider.ConfigContext),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useState=React.useState(restProps.value||defaultValue||[]),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_React$useState3=React.useState([]),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),registeredValues=_React$useState4[0],setRegisteredValues=_React$useState4[1];React.useEffect((function(){"value"in restProps&&setValue(restProps.value||[])}),[restProps.value]);var getOptions=function getOptions(){return options.map((function(option){return"string"==typeof option||"number"==typeof option?{label:option,value:option}:option}))},prefixCls=getPrefixCls("checkbox",customizePrefixCls),groupPrefixCls="".concat(prefixCls,"-group"),domProps=(0,_omit.default)(restProps,["value","disabled"]);options&&options.length>0&&(children=getOptions().map((function(option){return React.createElement(_Checkbox.default,{prefixCls,key:option.value.toString(),disabled:"disabled"in option?option.disabled:restProps.disabled,value:option.value,checked:-1!==value.indexOf(option.value),onChange:option.onChange,className:"".concat(groupPrefixCls,"-item"),style:option.style},option.label)})));var context={toggleOption:function toggleOption(option){var optionIndex=value.indexOf(option.value),newValue=(0,_toConsumableArray2.default)(value);-1===optionIndex?newValue.push(option.value):newValue.splice(optionIndex,1),"value"in restProps||setValue(newValue);var opts=getOptions();null==onChange||onChange(newValue.filter((function(val){return-1!==registeredValues.indexOf(val)})).sort((function(a,b){return opts.findIndex((function(opt){return opt.value===a}))-opts.findIndex((function(opt){return opt.value===b}))})))},value,disabled:restProps.disabled,name:restProps.name,registerValue:function registerValue(val){setRegisteredValues((function(prevValues){return[].concat((0,_toConsumableArray2.default)(prevValues),[val])}))},cancelValue:function cancelValue(val){setRegisteredValues((function(prevValues){return prevValues.filter((function(v){return v!==val}))}))}},classString=(0,_classnames.default)(groupPrefixCls,(0,_defineProperty2.default)({},"".concat(groupPrefixCls,"-rtl"),"rtl"===direction),className);return React.createElement("div",(0,_extends2.default)({className:classString,style},domProps,{ref}),React.createElement(GroupContext.Provider,{value:context},children))},CheckboxGroup=React.forwardRef(InternalCheckboxGroup),_default=React.memo(CheckboxGroup);exports.default=_default;