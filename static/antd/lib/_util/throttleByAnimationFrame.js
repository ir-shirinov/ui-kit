"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttleByAnimationFrame=throttleByAnimationFrame,exports.throttleByAnimationFrameDecorator=throttleByAnimationFrameDecorator;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_raf=_interopRequireDefault(require("rc-util/lib/raf"));function throttleByAnimationFrame(fn){var requestId,later=function later(args){return function(){requestId=null,fn.apply(void 0,(0,_toConsumableArray2.default)(args))}},throttled=function throttled(){if(null==requestId){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];requestId=(0,_raf.default)(later(args))}};return throttled.cancel=function(){_raf.default.cancel(requestId),requestId=null},throttled}function throttleByAnimationFrameDecorator(){return function throttle(target,key,descriptor){var fn=descriptor.value,definingProperty=!1;return{configurable:!0,get:function get(){if(definingProperty||this===target.prototype||this.hasOwnProperty(key))return fn;var boundFn=throttleByAnimationFrame(fn.bind(this));return definingProperty=!0,Object.defineProperty(this,key,{value:boundFn,configurable:!0,writable:!0}),definingProperty=!1,boundFn}}}}