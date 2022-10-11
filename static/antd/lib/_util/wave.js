"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard").default,_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var styleForPseudo,_extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_createSuper2=_interopRequireDefault(require("@babel/runtime/helpers/createSuper")),_dynamicCSS=require("rc-util/lib/Dom/dynamicCSS"),_ref2=require("rc-util/lib/ref"),React=_interopRequireWildcard(require("react")),_configProvider=require("../config-provider"),_raf=_interopRequireDefault(require("./raf")),_reactNode=require("./reactNode");function isHidden(element){return"test"!==process.env.NODE_ENV&&(!element||null===element.offsetParent||element.hidden)}function getValidateContainer(nodeRoot){return nodeRoot instanceof Document?nodeRoot.body:Array.from(nodeRoot.childNodes).find((function(ele){return(null==ele?void 0:ele.nodeType)===Node.ELEMENT_NODE}))}function isNotGrey(color){var match=(color||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(match&&match[1]&&match[2]&&match[3])||!(match[1]===match[2]&&match[2]===match[3])}var InternalWave=function(_React$Component){(0,_inherits2.default)(InternalWave,_React$Component);var _super=(0,_createSuper2.default)(InternalWave);function InternalWave(){var _this;return(0,_classCallCheck2.default)(this,InternalWave),(_this=_super.apply(this,arguments)).containerRef=React.createRef(),_this.animationStart=!1,_this.destroyed=!1,_this.onClick=function(node,waveColor){var _a,_b,_this$props=_this.props,insertExtraNode=_this$props.insertExtraNode;if(!(_this$props.disabled||!node||isHidden(node)||node.className.indexOf("-leave")>=0)){_this.extraNode=document.createElement("div");var extraNode=(0,_assertThisInitialized2.default)(_this).extraNode,getPrefixCls=_this.context.getPrefixCls;extraNode.className="".concat(getPrefixCls(""),"-click-animating-node");var attributeName=_this.getAttributeName();if(node.setAttribute(attributeName,"true"),waveColor&&"#ffffff"!==waveColor&&"rgb(255, 255, 255)"!==waveColor&&isNotGrey(waveColor)&&!/rgba\((?:\d*, ){3}0\)/.test(waveColor)&&"transparent"!==waveColor){extraNode.style.borderColor=waveColor;var nodeRoot=(null===(_a=node.getRootNode)||void 0===_a?void 0:_a.call(node))||node.ownerDocument,nodeBody=null!==(_b=getValidateContainer(nodeRoot))&&void 0!==_b?_b:nodeRoot;styleForPseudo=(0,_dynamicCSS.updateCSS)("\n      [".concat(getPrefixCls(""),"-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor,";\n      }"),"antd-wave",{csp:_this.csp,attachTo:nodeBody})}insertExtraNode&&node.appendChild(extraNode),["transition","animation"].forEach((function(name){node.addEventListener("".concat(name,"start"),_this.onTransitionStart),node.addEventListener("".concat(name,"end"),_this.onTransitionEnd)}))}},_this.onTransitionStart=function(e){if(!_this.destroyed){var node=_this.containerRef.current;e&&e.target===node&&!_this.animationStart&&_this.resetEffect(node)}},_this.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&_this.resetEffect(e.target)},_this.bindAnimationEvent=function(node){if(node&&node.getAttribute&&!node.getAttribute("disabled")&&!(node.className.indexOf("disabled")>=0)){var onClick=function onClick(e){if("INPUT"!==e.target.tagName&&!isHidden(e.target)){_this.resetEffect(node);var waveColor=getComputedStyle(node).getPropertyValue("border-top-color")||getComputedStyle(node).getPropertyValue("border-color")||getComputedStyle(node).getPropertyValue("background-color");_this.clickWaveTimeoutId=window.setTimeout((function(){return _this.onClick(node,waveColor)}),0),_raf.default.cancel(_this.animationStartId),_this.animationStart=!0,_this.animationStartId=(0,_raf.default)((function(){_this.animationStart=!1}),10)}};return node.addEventListener("click",onClick,!0),{cancel:function cancel(){node.removeEventListener("click",onClick,!0)}}}},_this.renderWave=function(_ref){var csp=_ref.csp,children=_this.props.children;if(_this.csp=csp,!React.isValidElement(children))return children;var ref=_this.containerRef;return(0,_ref2.supportRef)(children)&&(ref=(0,_ref2.composeRef)(children.ref,_this.containerRef)),(0,_reactNode.cloneElement)(children,{ref})},_this}return(0,_createClass2.default)(InternalWave,[{key:"componentDidMount",value:function componentDidMount(){this.destroyed=!1;var node=this.containerRef.current;node&&1===node.nodeType&&(this.instance=this.bindAnimationEvent(node))}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function getAttributeName(){var getPrefixCls=this.context.getPrefixCls,insertExtraNode=this.props.insertExtraNode;return"".concat(getPrefixCls(""),insertExtraNode?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function resetEffect(node){var _this2=this;if(node&&node!==this.extraNode&&node instanceof Element){var insertExtraNode=this.props.insertExtraNode,attributeName=this.getAttributeName();node.setAttribute(attributeName,"false"),styleForPseudo&&(styleForPseudo.innerHTML=""),insertExtraNode&&this.extraNode&&node.contains(this.extraNode)&&node.removeChild(this.extraNode),["transition","animation"].forEach((function(name){node.removeEventListener("".concat(name,"start"),_this2.onTransitionStart),node.removeEventListener("".concat(name,"end"),_this2.onTransitionEnd)}))}}},{key:"render",value:function render(){return React.createElement(_configProvider.ConfigConsumer,null,this.renderWave)}}]),InternalWave}(React.Component);InternalWave.contextType=_configProvider.ConfigContext;var Wave=(0,React.forwardRef)((function(props,ref){return React.createElement(InternalWave,(0,_extends2.default)({ref},props))})),_default=Wave;exports.default=_default;