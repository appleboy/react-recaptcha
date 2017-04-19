(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRecaptcha"] = factory(require("react"));
	else
		root["ReactRecaptcha"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  className: _react.PropTypes.string,
	  onloadCallbackName: _react.PropTypes.string,
	  elementID: _react.PropTypes.string,
	  onloadCallback: _react.PropTypes.func,
	  verifyCallback: _react.PropTypes.func,
	  expiredCallback: _react.PropTypes.func,
	  render: _react.PropTypes.string,
	  sitekey: _react.PropTypes.string,
	  theme: _react.PropTypes.string,
	  type: _react.PropTypes.string,
	  verifyCallbackName: _react.PropTypes.string,
	  expiredCallbackName: _react.PropTypes.string,
	  size: _react.PropTypes.string,
	  tabindex: _react.PropTypes.string
	};

	var defaultProps = {
	  elementID: 'g-recaptcha',
	  onloadCallback: undefined,
	  onloadCallbackName: 'onloadCallback',
	  verifyCallback: undefined,
	  verifyCallbackName: 'verifyCallback',
	  expiredCallback: undefined,
	  expiredCallbackName: 'expiredCallback',
	  render: 'onload',
	  theme: 'light',
	  type: 'image',
	  size: 'normal',
	  tabindex: '0'
	};

	var isReady = function isReady() {
	  return typeof window !== 'undefined' && typeof window.grecaptcha !== 'undefined';
	};

	var readyCheck = void 0;

	var Recaptcha = function (_Component) {
	  _inherits(Recaptcha, _Component);

	  function Recaptcha(props) {
	    _classCallCheck(this, Recaptcha);

	    var _this = _possibleConstructorReturn(this, (Recaptcha.__proto__ || Object.getPrototypeOf(Recaptcha)).call(this, props));

	    _this._renderGrecaptcha = _this._renderGrecaptcha.bind(_this);
	    _this.execute = _this.execute.bind(_this);
	    _this.reset = _this.reset.bind(_this);
	    _this.state = {
	      ready: isReady(),
	      widget: null
	    };

	    if (!_this.state.ready) {
	      readyCheck = setInterval(_this._updateReadyState.bind(_this), 1000);
	    }
	    return _this;
	  }

	  _createClass(Recaptcha, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.ready) {
	        this._renderGrecaptcha();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props = this.props,
	          render = _props.render,
	          onloadCallback = _props.onloadCallback;


	      if (render === 'explicit' && onloadCallback && this.state.ready && !prevState.ready) {
	        this._renderGrecaptcha();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(readyCheck);
	    }
	  }, {
	    key: 'execute',
	    value: function execute() {
	      var _state = this.state,
	          ready = _state.ready,
	          widget = _state.widget;

	      if (ready && widget !== null) {
	        grecaptcha.execute(widget);
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var _state2 = this.state,
	          ready = _state2.ready,
	          widget = _state2.widget;

	      if (ready && widget !== null) {
	        grecaptcha.reset(widget);
	      }
	    }
	  }, {
	    key: '_updateReadyState',
	    value: function _updateReadyState() {
	      if (isReady()) {
	        this.setState({
	          ready: true
	        });

	        clearInterval(readyCheck);
	      }
	    }
	  }, {
	    key: '_renderGrecaptcha',
	    value: function _renderGrecaptcha() {
	      this.state.widget = grecaptcha.render(this.props.elementID, {
	        sitekey: this.props.sitekey,
	        callback: this.props.verifyCallback ? this.props.verifyCallback : undefined,
	        theme: this.props.theme,
	        type: this.props.type,
	        size: this.props.size,
	        tabindex: this.props.tabindex,
	        'expired-callback': this.props.expiredCallback ? this.props.expiredCallback : undefined
	      });

	      this.props.onloadCallback();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.render === 'explicit' && this.props.onloadCallback) {
	        return _react2.default.createElement('div', { id: this.props.elementID,
	          'data-onloadcallbackname': this.props.onloadCallbackName,
	          'data-verifycallbackname': this.props.verifyCallbackName
	        });
	      }

	      return _react2.default.createElement('div', { className: 'g-recaptcha',
	        'data-sitekey': this.props.sitekey,
	        'data-theme': this.props.theme,
	        'data-type': this.props.type,
	        'data-size': this.props.size,
	        'data-tabindex': this.props.tabindex
	      });
	    }
	  }]);

	  return Recaptcha;
	}(_react.Component);

	exports.default = Recaptcha;


	Recaptcha.propTypes = propTypes;
	Recaptcha.defaultProps = defaultProps;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;