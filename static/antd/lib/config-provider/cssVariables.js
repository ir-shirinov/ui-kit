"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStyle=getStyle,exports.registerTheme=registerTheme;var _colors=require("@ant-design/colors"),_tinycolor=require("@ctrl/tinycolor"),_canUseDom=_interopRequireDefault(require("rc-util/lib/Dom/canUseDom")),_dynamicCSS=require("rc-util/lib/Dom/dynamicCSS"),_warning=_interopRequireDefault(require("../_util/warning")),dynamicStyleMark="-ant-".concat(Date.now(),"-").concat(Math.random());function getStyle(globalPrefixCls,theme){var variables={},formatColor=function formatColor(color,updater){var clone=color.clone();return(clone=(null==updater?void 0:updater(clone))||clone).toRgbString()},fillColor=function fillColor(colorVal,type){var baseColor=new _tinycolor.TinyColor(colorVal),colorPalettes=(0,_colors.generate)(baseColor.toRgbString());variables["".concat(type,"-color")]=formatColor(baseColor),variables["".concat(type,"-color-disabled")]=colorPalettes[1],variables["".concat(type,"-color-hover")]=colorPalettes[4],variables["".concat(type,"-color-active")]=colorPalettes[6],variables["".concat(type,"-color-outline")]=baseColor.clone().setAlpha(.2).toRgbString(),variables["".concat(type,"-color-deprecated-bg")]=colorPalettes[0],variables["".concat(type,"-color-deprecated-border")]=colorPalettes[2]};if(theme.primaryColor){fillColor(theme.primaryColor,"primary");var primaryColor=new _tinycolor.TinyColor(theme.primaryColor),primaryColors=(0,_colors.generate)(primaryColor.toRgbString());primaryColors.forEach((function(color,index){variables["primary-".concat(index+1)]=color})),variables["primary-color-deprecated-l-35"]=formatColor(primaryColor,(function(c){return c.lighten(35)})),variables["primary-color-deprecated-l-20"]=formatColor(primaryColor,(function(c){return c.lighten(20)})),variables["primary-color-deprecated-t-20"]=formatColor(primaryColor,(function(c){return c.tint(20)})),variables["primary-color-deprecated-t-50"]=formatColor(primaryColor,(function(c){return c.tint(50)})),variables["primary-color-deprecated-f-12"]=formatColor(primaryColor,(function(c){return c.setAlpha(.12*c.getAlpha())}));var primaryActiveColor=new _tinycolor.TinyColor(primaryColors[0]);variables["primary-color-active-deprecated-f-30"]=formatColor(primaryActiveColor,(function(c){return c.setAlpha(.3*c.getAlpha())})),variables["primary-color-active-deprecated-d-02"]=formatColor(primaryActiveColor,(function(c){return c.darken(2)}))}theme.successColor&&fillColor(theme.successColor,"success"),theme.warningColor&&fillColor(theme.warningColor,"warning"),theme.errorColor&&fillColor(theme.errorColor,"error"),theme.infoColor&&fillColor(theme.infoColor,"info");var cssList=Object.keys(variables).map((function(key){return"--".concat(globalPrefixCls,"-").concat(key,": ").concat(variables[key],";")}));return"\n  :root {\n    ".concat(cssList.join("\n"),"\n  }\n  ").trim()}function registerTheme(globalPrefixCls,theme){var style=getStyle(globalPrefixCls,theme);(0,_canUseDom.default)()?(0,_dynamicCSS.updateCSS)(style,"".concat(dynamicStyleMark,"-dynamic-theme")):"production"!==process.env.NODE_ENV&&(0,_warning.default)(!1,"ConfigProvider","SSR do not support dynamic theme with css variables.")}