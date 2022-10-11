"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.cloneElement=cloneElement,exports.isFragment=isFragment,exports.isValidElement=void 0,exports.replaceElement=replaceElement;var React=_interopRequireWildcard(require("react")),isValidElement=React.isValidElement;function isFragment(child){return child&&child.type===React.Fragment}function replaceElement(element,replacement,props){return isValidElement(element)?React.cloneElement(element,"function"==typeof props?props(element.props||{}):props):replacement}function cloneElement(element,props){return replaceElement(element,element,props)}exports.isValidElement=isValidElement;