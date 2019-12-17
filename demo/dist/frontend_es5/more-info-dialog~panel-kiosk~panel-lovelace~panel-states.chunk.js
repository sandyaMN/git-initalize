(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
var isComponentLoaded = function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
};

/***/ }),

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
  var parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
var leftPad = function leftPad(num) {
  return num < 10 ? "0".concat(num) : num;
};

function secondsToDuration(d) {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return "".concat(h, ":").concat(leftPad(m), ":").concat(leftPad(s));
  }

  if (m > 0) {
    return "".concat(m, ":").concat(leftPad(s));
  }

  if (s > 0) {
    return "" + s;
  }

  return null;
}

/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
var stopPropagation = function stopPropagation(ev) {
  return ev.stopPropagation();
};

/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
var supportsFeature = function supportsFeature(stateObj, feature) {
  // tslint:disable-next-line:no-bitwise
  return (stateObj.attributes.supported_features & feature) !== 0;
};

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

var timerTimeRemaining = function timerTimeRemaining(stateObj) {
  var timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    var now = new Date().getTime();
    var madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
};

/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
var timeCachePromiseFunc = function timeCachePromiseFunc(cacheKey, cacheTime, func, hass, entityId) {
  var _len,
      args,
      _key,
      cache,
      lastResult,
      result,
      _args = arguments;

  return regeneratorRuntime.async(function timeCachePromiseFunc$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          for (_len = _args.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
            args[_key - 5] = _args[_key];
          }

          cache = hass[cacheKey];

          if (!cache) {
            cache = hass[cacheKey] = {};
          }

          lastResult = cache[entityId];

          if (!lastResult) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", lastResult);

        case 6:
          result = func.apply(void 0, [hass, entityId].concat(args));
          cache[entityId] = result;
          result.then( // When successful, set timer to clear cache
          function () {
            return setTimeout(function () {
              cache[entityId] = undefined;
            }, cacheTime);
          }, // On failure, clear cache right away
          function () {
            cache[entityId] = undefined;
          });
          return _context.abrupt("return", result);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ }),

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n\n        .unit {\n          display: inline-block;\n          direction: ltr;\n        }\n      </style>\n\n      <div class=\"target\">\n        <template is=\"dom-if\" if=\"[[_hasKnownState(stateObj.state)]]\">\n          <span class=\"state-label\">\n            [[_localizeState(localize, stateObj)]]\n            <template is=\"dom-if\" if=\"[[_renderPreset(stateObj.attributes)]]\">\n              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]\n            </template>\n          </span>\n        </template>\n        <div class=\"unit\">[[computeTarget(hass, stateObj)]]</div>\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.climate.currently')]]:\n          <div class=\"unit\">[[currentStatus]]</div>\n        </div>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var HaClimateState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaClimateState, _LocalizeMixin);

  function HaClimateState() {
    _classCallCheck(this, HaClimateState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateState).apply(this, arguments));
  }

  _createClass(HaClimateState, [{
    key: "computeCurrentStatus",
    value: function computeCurrentStatus(hass, stateObj) {
      if (!hass || !stateObj) return null;

      if (stateObj.attributes.current_temperature != null) {
        return "".concat(stateObj.attributes.current_temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.current_humidity != null) {
        return "".concat(stateObj.attributes.current_humidity, " %");
      }

      return null;
    }
  }, {
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, "-").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
        return "".concat(stateObj.attributes.target_humidity_low, "-").concat(stateObj.attributes.target_humidity_high, "%");
      }

      if (stateObj.attributes.humidity != null) {
        return "".concat(stateObj.attributes.humidity, " %");
      }

      return "";
    }
  }, {
    key: "_hasKnownState",
    value: function _hasKnownState(state) {
      return state !== "unknown";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(localize, stateObj) {
      var stateString = localize("state.climate.".concat(stateObj.state));
      return stateObj.attributes.hvac_action ? "".concat(localize("state_attributes.climate.hvac_action.".concat(stateObj.attributes.hvac_action)), " (").concat(stateString, ")") : stateString;
    }
  }, {
    key: "_localizePreset",
    value: function _localizePreset(localize, preset) {
      return localize("state_attributes.climate.preset_mode.".concat(preset)) || preset;
    }
  }, {
    key: "_renderPreset",
    value: function _renderPreset(attributes) {
      return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"];
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        currentStatus: {
          type: String,
          computed: "computeCurrentStatus(hass, stateObj)"
        }
      };
    }
  }]);

  return HaClimateState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-climate-state", HaClimateState);

/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .state {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div class=\"state\">\n        <paper-icon-button\n          aria-label=\"Open cover\"\n          icon=\"hass:arrow-up\"\n          on-click=\"onOpenTap\"\n          invisible$=\"[[!entityObj.supportsOpen]]\"\n          disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=\"Stop the cover from moving\"\n          icon=\"hass:stop\"\n          on-click=\"onStopTap\"\n          invisible$=\"[[!entityObj.supportsStop]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=\"Close cover\"\n          icon=\"hass:arrow-down\"\n          on-click=\"onCloseTap\"\n          invisible$=\"[[!entityObj.supportsClose]]\"\n          disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HaCoverControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverControls, _PolymerElement);

  function HaCoverControls() {
    _classCallCheck(this, HaCoverControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverControls).apply(this, arguments));
  }

  _createClass(HaCoverControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
    }
  }, {
    key: "onOpenTap",
    value: function onOpenTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCover();
    }
  }, {
    key: "onCloseTap",
    value: function onCloseTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCover();
    }
  }, {
    key: "onStopTap",
    value: function onStopTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCover();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-cover-controls", HaCoverControls);

/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <paper-icon-button\n        aria-label=\"Open cover tilt\"\n        icon=\"hass:arrow-top-right\"\n        on-click=\"onOpenTiltTap\"\n        title=\"Open tilt\"\n        invisible$=\"[[!entityObj.supportsOpenTilt]]\"\n        disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n      <paper-icon-button\n        aria-label=\"Stop cover from moving\"\n        icon=\"hass:stop\"\n        on-click=\"onStopTiltTap\"\n        invisible$=\"[[!entityObj.supportsStopTilt]]\"\n        title=\"Stop tilt\"\n      ></paper-icon-button>\n      <paper-icon-button\n        aria-label=\"Close cover tilt\"\n        icon=\"hass:arrow-bottom-left\"\n        on-click=\"onCloseTiltTap\"\n        title=\"Close tilt\"\n        invisible$=\"[[!entityObj.supportsCloseTilt]]\"\n        disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var HaCoverTiltControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverTiltControls, _PolymerElement);

  function HaCoverTiltControls() {
    _classCallCheck(this, HaCoverTiltControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverTiltControls).apply(this, arguments));
  }

  _createClass(HaCoverTiltControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyOpenTilt && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyClosedTilt && !assumedState;
    }
  }, {
    key: "onOpenTiltTap",
    value: function onOpenTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCoverTilt();
    }
  }, {
    key: "onCloseTiltTap",
    value: function onCloseTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCoverTilt();
    }
  }, {
    key: "onStopTiltTap",
    value: function onStopTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCoverTilt();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverTiltControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-slider.js":
/*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PaperSliderClass = customElements.get("paper-slider");
var subTemplate;

var HaSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaSlider, _PaperSliderClass);

  function HaSlider() {
    _classCallCheck(this, HaSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSlider).apply(this, arguments));
  }

  _createClass(HaSlider, [{
    key: "_calcStep",
    value: function _calcStep(value) {
      if (!this.step) {
        return parseFloat(value);
      }

      var numSteps = Math.round((value - this.min) / this.step);
      var stepStr = this.step.toString();
      var stepPointAt = stepStr.indexOf(".");

      if (stepPointAt !== -1) {
        /**
         * For small values of this.step, if we calculate the step using
         * For non-integer values of this.step, if we calculate the step using
         * `Math.round(value / step) * step` we may hit a precision point issue
         * eg. 0.1 * 0.2 =  0.020000000000000004
         * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
         *
         * as a work around we can round with the decimal precision of `step`
         */
        var precision = Math.pow(10, stepStr.length - stepPointAt - 1);
        return Math.round((numSteps * this.step + this.min) * precision) / precision;
      }

      return numSteps * this.step + this.min;
    }
  }], [{
    key: "template",
    get: function get() {
      if (!subTemplate) {
        subTemplate = PaperSliderClass.template.cloneNode(true);
        var superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

        superStyle.appendChild(document.createTextNode("\n          :host([dir=\"rtl\"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        "));
      }

      return subTemplate;
    }
  }]);

  return HaSlider;
}(PaperSliderClass);

customElements.define("ha-slider", HaSlider);

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
var hassUrl = "".concat(location.protocol, "//").concat(location.host);
var getSignedPath = function getSignedPath(hass, path) {
  return hass.callWS({
    type: "auth/sign_path",
    path: path
  });
};
var fetchAuthProviders = function fetchAuthProviders() {
  return fetch("/auth/providers", {
    credentials: "same-origin"
  });
};

/***/ }),

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnail", function() { return fetchThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");


var CAMERA_SUPPORT_ON_OFF = 1;
var CAMERA_SUPPORT_STREAM = 2;
var computeMJPEGStreamUrl = function computeMJPEGStreamUrl(entity) {
  return "/api/camera_proxy_stream/".concat(entity.entity_id, "?token=").concat(entity.attributes.access_token);
};
var fetchThumbnailUrlWithCache = function fetchThumbnailUrlWithCache(hass, entityId) {
  return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
};
var fetchThumbnailUrl = function fetchThumbnailUrl(hass, entityId) {
  var path;
  return regeneratorRuntime.async(function fetchThumbnailUrl$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, "/api/camera_proxy/".concat(entityId)));

        case 2:
          path = _context.sent;
          return _context.abrupt("return", hass.hassUrl(path.path));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};
var fetchThumbnail = function fetchThumbnail(hass, entityId) {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
var fetchStreamUrl = function fetchStreamUrl(hass, entityId, format) {
  var data, stream;
  return regeneratorRuntime.async(function fetchStreamUrl$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = {
            type: "camera/stream",
            entity_id: entityId
          };

          if (format) {
            // @ts-ignore
            data.format = format;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(hass.callWS(data));

        case 4:
          stream = _context2.sent;
          stream.url = hass.hassUrl(stream.url);
          return _context2.abrupt("return", stream);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};
var fetchCameraPrefs = function fetchCameraPrefs(hass, entityId) {
  return hass.callWS({
    type: "camera/get_prefs",
    entity_id: entityId
  });
};
var updateCameraPrefs = function updateCameraPrefs(hass, entityId, prefs) {
  return hass.callWS(Object.assign({
    type: "camera/update_prefs",
    entity_id: entityId
  }, prefs));
};

/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
var CLIMATE_PRESET_NONE = "none";
var CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
var CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
var CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
var CLIMATE_SUPPORT_FAN_MODE = 8;
var CLIMATE_SUPPORT_PRESET_MODE = 16;
var CLIMATE_SUPPORT_SWING_MODE = 32;
var CLIMATE_SUPPORT_AUX_HEAT = 64;
var hvacModeOrdering = {
  auto: 1,
  heat_cool: 2,
  heat: 3,
  cool: 4,
  dry: 5,
  fan_only: 6,
  off: 7
};
var compareClimateHvacModes = function compareClimateHvacModes(mode1, mode2) {
  return hvacModeOrdering[mode1] - hvacModeOrdering[mode2];
};

/***/ }),

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
var setInputSelectOption = function setInputSelectOption(hass, entity, option) {
  return hass.callService("input_select", "select_option", {
    option: option,
    entity_id: entity
  });
};

/***/ }),

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
var SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
var activateScene = function activateScene(hass, entityId) {
  return hass.callService("scene", "turn_on", {
    entity_id: entityId
  });
};
var applyScene = function applyScene(hass, entities) {
  return hass.callService("scene", "apply", {
    entities: entities
  });
};
var getSceneConfig = function getSceneConfig(hass, sceneId) {
  return hass.callApi("GET", "config/scene/config/".concat(sceneId));
};
var saveScene = function saveScene(hass, sceneId, config) {
  return hass.callApi("POST", "config/scene/config/".concat(sceneId), config);
};
var deleteScene = function deleteScene(hass, id) {
  return hass.callApi("DELETE", "config/scene/config/".concat(id));
};

/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* eslint-enable no-bitwise */

var CoverEntity =
/*#__PURE__*/
function () {
  function CoverEntity(hass, stateObj) {
    _classCallCheck(this, CoverEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(CoverEntity, [{
    key: "openCover",
    value: function openCover() {
      this.callService("open_cover");
    }
  }, {
    key: "closeCover",
    value: function closeCover() {
      this.callService("close_cover");
    }
  }, {
    key: "stopCover",
    value: function stopCover() {
      this.callService("stop_cover");
    }
  }, {
    key: "openCoverTilt",
    value: function openCoverTilt() {
      this.callService("open_cover_tilt");
    }
  }, {
    key: "closeCoverTilt",
    value: function closeCoverTilt() {
      this.callService("close_cover_tilt");
    }
  }, {
    key: "stopCoverTilt",
    value: function stopCoverTilt() {
      this.callService("stop_cover_tilt");
    }
  }, {
    key: "setCoverPosition",
    value: function setCoverPosition(position) {
      this.callService("set_cover_position", {
        position: position
      });
    }
  }, {
    key: "setCoverTiltPosition",
    value: function setCoverTiltPosition(tiltPosition) {
      this.callService("set_cover_tilt_position", {
        tilt_position: tiltPosition
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("cover", service, data);
    }
  }, {
    key: "isFullyOpen",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 100;
      }

      return this.stateObj.state === "open";
    }
  }, {
    key: "isFullyClosed",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 0;
      }

      return this.stateObj.state === "closed";
    }
  }, {
    key: "isFullyOpenTilt",
    get: function get() {
      return this._attr.current_tilt_position === 100;
    }
  }, {
    key: "isFullyClosedTilt",
    get: function get() {
      return this._attr.current_tilt_position === 0;
    }
  }, {
    key: "isOpening",
    get: function get() {
      return this.stateObj.state === "opening";
    }
  }, {
    key: "isClosing",
    get: function get() {
      return this.stateObj.state === "closing";
    }
  }, {
    key: "supportsOpen",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsClose",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
    }
  }, {
    key: "supportsSetPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsStop",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsOpenTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsCloseTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsStopTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
    }
  }, {
    key: "supportsSetTiltPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "isTiltOnly",
    get: function get() {
      var supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
      var supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
      return supportsTilt && !supportsCover;
    }
  }]);

  return CoverEntity;
}();


var supportsOpen = function supportsOpen(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
};
var supportsClose = function supportsClose(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
};
var supportsSetPosition = function supportsSetPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
};
var supportsStop = function supportsStop(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
};
var supportsOpenTilt = function supportsOpenTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
};
var supportsCloseTilt = function supportsCloseTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
};
var supportsStopTilt = function supportsStopTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
};
var supportsSetTiltPosition = function supportsSetTiltPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
};
function isTiltOnly(stateObj) {
  var supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  var supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ }),

/***/ "./src/util/hass-media-player-model.js":
/*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEntity; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MediaPlayerEntity =
/*#__PURE__*/
function () {
  function MediaPlayerEntity(hass, stateObj) {
    _classCallCheck(this, MediaPlayerEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(MediaPlayerEntity, [{
    key: "mediaPlayPause",
    value: function mediaPlayPause() {
      this.callService("media_play_pause");
    }
  }, {
    key: "nextTrack",
    value: function nextTrack() {
      this.callService("media_next_track");
    }
  }, {
    key: "playbackControl",
    value: function playbackControl() {
      this.callService("media_play_pause");
    }
  }, {
    key: "previousTrack",
    value: function previousTrack() {
      this.callService("media_previous_track");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this.callService("volume_set", {
        volume_level: volume
      });
    }
  }, {
    key: "togglePower",
    value: function togglePower() {
      if (this.isOff) {
        this.turnOn();
      } else {
        this.turnOff();
      }
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      this.callService("turn_off");
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      this.callService("turn_on");
    }
  }, {
    key: "volumeDown",
    value: function volumeDown() {
      this.callService("volume_down");
    }
  }, {
    key: "volumeMute",
    value: function volumeMute(mute) {
      if (!this.supportsVolumeMute) {
        throw new Error("Muting volume not supported");
      }

      this.callService("volume_mute", {
        is_volume_muted: mute
      });
    }
  }, {
    key: "volumeUp",
    value: function volumeUp() {
      this.callService("volume_up");
    }
  }, {
    key: "selectSource",
    value: function selectSource(source) {
      this.callService("select_source", {
        source: source
      });
    }
  }, {
    key: "selectSoundMode",
    value: function selectSoundMode(soundMode) {
      this.callService("select_sound_mode", {
        sound_mode: soundMode
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("media_player", service, data);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "isIdle",
    get: function get() {
      return this.stateObj.state === "idle";
    }
  }, {
    key: "isMuted",
    get: function get() {
      return this._attr.is_volume_muted;
    }
  }, {
    key: "isPaused",
    get: function get() {
      return this.stateObj.state === "paused";
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.stateObj.state === "playing";
    }
  }, {
    key: "isMusic",
    get: function get() {
      return this._attr.media_content_type === "music";
    }
  }, {
    key: "isTVShow",
    get: function get() {
      return this._attr.media_content_type === "tvshow";
    }
  }, {
    key: "hasMediaControl",
    get: function get() {
      return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
    }
  }, {
    key: "volumeSliderValue",
    get: function get() {
      return this._attr.volume_level * 100;
    }
  }, {
    key: "showProgress",
    get: function get() {
      return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
    }
  }, {
    key: "currentProgress",
    get: function get() {
      var progress = this._attr.media_position;

      if (this.isPlaying) {
        progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
      }

      return progress;
    }
  }, {
    key: "supportsPause",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsVolumeSet",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsVolumeMute",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsPreviousTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsNextTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsTurnOn",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "supportsTurnOff",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
    }
  }, {
    key: "supportsPlayMedia",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
    }
  }, {
    key: "supportsVolumeButtons",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
    }
  }, {
    key: "supportsSelectSource",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
    }
  }, {
    key: "supportsSelectSoundMode",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
    }
  }, {
    key: "supportsPlay",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
    }
  }, {
    key: "primaryTitle",
    get: function get() {
      return this._attr.media_title;
    }
  }, {
    key: "secondaryTitle",
    get: function get() {
      if (this.isMusic) {
        return this._attr.media_artist;
      }

      if (this.isTVShow) {
        var text = this._attr.media_series_title;

        if (this._attr.media_season) {
          text += " S" + this._attr.media_season;

          if (this._attr.media_episode) {
            text += "E" + this._attr.media_episode;
          }
        }

        return text;
      }

      if (this._attr.app_name) {
        return this._attr.app_name;
      }

      return "";
    }
  }, {
    key: "source",
    get: function get() {
      return this._attr.source;
    }
  }, {
    key: "sourceList",
    get: function get() {
      return this._attr.source_list;
    }
  }, {
    key: "soundMode",
    get: function get() {
      return this._attr.sound_mode;
    }
  }, {
    key: "soundModeList",
    get: function get() {
      return this._attr.sound_mode_list;
    }
  }]);

  return MediaPlayerEntity;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiA9PiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR1cmF0aW9uVG9TZWNvbmRzKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgcmV0dXJuIHBhcnRzWzBdICogMzYwMCArIHBhcnRzWzFdICogNjAgKyBwYXJ0c1syXTtcbn1cbiIsImNvbnN0IGxlZnRQYWQgPSAobnVtOiBudW1iZXIpID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlY29uZHNUb0R1cmF0aW9uKGQ6IG51bWJlcikge1xuICBjb25zdCBoID0gTWF0aC5mbG9vcihkIC8gMzYwMCk7XG4gIGNvbnN0IG0gPSBNYXRoLmZsb29yKChkICUgMzYwMCkgLyA2MCk7XG4gIGNvbnN0IHMgPSBNYXRoLmZsb29yKChkICUgMzYwMCkgJSA2MCk7XG5cbiAgaWYgKGggPiAwKSB7XG4gICAgcmV0dXJuIGAke2h9OiR7bGVmdFBhZChtKX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKG0gPiAwKSB7XG4gICAgcmV0dXJuIGAke219OiR7bGVmdFBhZChzKX1gO1xuICB9XG4gIGlmIChzID4gMCkge1xuICAgIHJldHVybiBcIlwiICsgcztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmVhdHVyZSA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGZlYXR1cmU6IG51bWJlclxuKTogYm9vbGVhbiA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gIHJldHVybiAoc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMhICYgZmVhdHVyZSkgIT09IDA7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBkdXJhdGlvblRvU2Vjb25kcyBmcm9tIFwiLi4vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kc1wiO1xuXG5leHBvcnQgY29uc3QgdGltZXJUaW1lUmVtYWluaW5nID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGxldCB0aW1lUmVtYWluaW5nID0gZHVyYXRpb25Ub1NlY29uZHMoc3RhdGVPYmouYXR0cmlidXRlcy5yZW1haW5pbmcpO1xuXG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IG1hZGVBY3RpdmUgPSBuZXcgRGF0ZShzdGF0ZU9iai5sYXN0X2NoYW5nZWQpLmdldFRpbWUoKTtcbiAgICB0aW1lUmVtYWluaW5nID0gTWF0aC5tYXgodGltZVJlbWFpbmluZyAtIChub3cgLSBtYWRlQWN0aXZlKSAvIDEwMDAsIDApO1xuICB9XG5cbiAgcmV0dXJuIHRpbWVSZW1haW5pbmc7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUmVzdWx0Q2FjaGU8VD4ge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IFByb21pc2U8VD4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lQ2FjaGVQcm9taXNlRnVuYyA9IGFzeW5jIDxUPihcbiAgY2FjaGVLZXk6IHN0cmluZyxcbiAgY2FjaGVUaW1lOiBudW1iZXIsXG4gIGZ1bmM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0eUlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogdW5rbm93bltdXG4gICkgPT4gUHJvbWlzZTxUPixcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgLi4uYXJnczogdW5rbm93bltdXG4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgbGV0IGNhY2hlOiBSZXN1bHRDYWNoZTxUPiB8IHVuZGVmaW5lZCA9IChoYXNzIGFzIGFueSlbY2FjaGVLZXldO1xuXG4gIGlmICghY2FjaGUpIHtcbiAgICBjYWNoZSA9IGhhc3NbY2FjaGVLZXldID0ge307XG4gIH1cblxuICBjb25zdCBsYXN0UmVzdWx0ID0gY2FjaGVbZW50aXR5SWRdO1xuXG4gIGlmIChsYXN0UmVzdWx0KSB7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmdW5jKGhhc3MsIGVudGl0eUlkLCAuLi5hcmdzKTtcbiAgY2FjaGVbZW50aXR5SWRdID0gcmVzdWx0O1xuXG4gIHJlc3VsdC50aGVuKFxuICAgIC8vIFdoZW4gc3VjY2Vzc2Z1bCwgc2V0IHRpbWVyIHRvIGNsZWFyIGNhY2hlXG4gICAgKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgICAgfSwgY2FjaGVUaW1lKSxcbiAgICAvLyBPbiBmYWlsdXJlLCBjbGVhciBjYWNoZSByaWdodCBhd2F5XG4gICAgKCkgPT4ge1xuICAgICAgY2FjaGUhW2VudGl0eUlkXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBDTElNQVRFX1BSRVNFVF9OT05FIH0gZnJvbSBcIi4uL2RhdGEvY2xpbWF0ZVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZVN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51bml0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19oYXNLbm93blN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPlxuICAgICAgICAgICAgW1tfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopXV1cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfcmVuZGVyUHJlc2V0KHN0YXRlT2JqLmF0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgICAgLSBbW19sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZSldXVxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQuY2xpbWF0ZS5jdXJyZW50bHknKV1dOlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjdXJyZW50U3RhdHVzXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjdXJyZW50U3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUN1cnJlbnRTdGF0dXMoaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZX0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHl9ICVgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd30tJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2h9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2xvd30tJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdofSVgO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfaGFzS25vd25TdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZSAhPT0gXCJ1bmtub3duXCI7XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IGxvY2FsaXplKGBzdGF0ZS5jbGltYXRlLiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgID8gYCR7bG9jYWxpemUoXG4gICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5odmFjX2FjdGlvbi4ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb259YFxuICAgICAgICApfSAoJHtzdGF0ZVN0cmluZ30pYFxuICAgICAgOiBzdGF0ZVN0cmluZztcbiAgfVxuXG4gIF9sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgcHJlc2V0KSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHtwcmVzZXR9YCkgfHwgcHJlc2V0O1xuICB9XG5cbiAgX3JlbmRlclByZXNldChhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGF0dHJpYnV0ZXMucHJlc2V0X21vZGUgJiYgYXR0cmlidXRlcy5wcmVzZXRfbW9kZSAhPT0gQ0xJTUFURV9QUkVTRVRfTk9ORVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNsaW1hdGUtc3RhdGVcIiwgSGFDbGltYXRlU3RhdGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyQ29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjb3ZlclwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdXBcIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzT3Blbl1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIHRoZSBjb3ZlciBmcm9tIG1vdmluZ1wiXG4gICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNvdmVyXCJcbiAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy1kb3duXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZV1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5T3BlbiB8fCBlbnRpdHlPYmouaXNPcGVuaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiAoZW50aXR5T2JqLmlzRnVsbHlDbG9zZWQgfHwgZW50aXR5T2JqLmlzQ2xvc2luZykgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIG9uT3BlblRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlcigpO1xuICB9XG5cbiAgb25DbG9zZVRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLmNsb3NlQ292ZXIoKTtcbiAgfVxuXG4gIG9uU3RvcFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlcigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvdmVyLWNvbnRyb2xzXCIsIEhhQ292ZXJDb250cm9scyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyVGlsdENvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXIgdGlsdFwiXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LXRvcC1yaWdodFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiT3BlbiB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c09wZW5UaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGlsdFRhcFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wVGlsdF1dXCJcbiAgICAgICAgdGl0bGU9XCJTdG9wIHRpbHRcIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNvdmVyIHRpbHRcIlxuICAgICAgICBpY29uPVwiaGFzczphcnJvdy1ib3R0b20tbGVmdFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRpbHRUYXBcIlxuICAgICAgICB0aXRsZT1cIkNsb3NlIHRpbHRcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzQ2xvc2VUaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiBlbnRpdHlPYmouaXNGdWxseU9wZW5UaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uU3RvcFRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXJUaWx0KCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItdGlsdC1jb250cm9sc1wiLCBIYUNvdmVyVGlsdENvbnRyb2xzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlclwiO1xuXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xubGV0IHN1YlRlbXBsYXRlO1xuXG5jbGFzcyBIYVNsaWRlciBleHRlbmRzIFBhcGVyU2xpZGVyQ2xhc3Mge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGlmICghc3ViVGVtcGxhdGUpIHtcbiAgICAgIHN1YlRlbXBsYXRlID0gUGFwZXJTbGlkZXJDbGFzcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyU3R5bGUgPSBzdWJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcblxuICAgICAgLy8gYXBwZW5kIHN0eWxlIHRvIGFkZCBtaXJyb3Jpbmcgb2YgcGluIGluIFJUTFxuICAgICAgc3VwZXJTdHlsZS5hcHBlbmRDaGlsZChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAgIDpob3N0KFtkaXI9XCJydGxcIl0pICNzbGlkZXJDb250YWluZXIucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzdWJUZW1wbGF0ZTtcbiAgfVxuXG4gIF9jYWxjU3RlcCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5zdGVwKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbnVtU3RlcHMgPSBNYXRoLnJvdW5kKCh2YWx1ZSAtIHRoaXMubWluKSAvIHRoaXMuc3RlcCk7XG4gICAgY29uc3Qgc3RlcFN0ciA9IHRoaXMuc3RlcC50b1N0cmluZygpO1xuICAgIGNvbnN0IHN0ZXBQb2ludEF0ID0gc3RlcFN0ci5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoc3RlcFBvaW50QXQgIT09IC0xKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBzbWFsbCB2YWx1ZXMgb2YgdGhpcy5zdGVwLCBpZiB3ZSBjYWxjdWxhdGUgdGhlIHN0ZXAgdXNpbmdcbiAgICAgICAqIEZvciBub24taW50ZWdlciB2YWx1ZXMgb2YgdGhpcy5zdGVwLCBpZiB3ZSBjYWxjdWxhdGUgdGhlIHN0ZXAgdXNpbmdcbiAgICAgICAqIGBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwYCB3ZSBtYXkgaGl0IGEgcHJlY2lzaW9uIHBvaW50IGlzc3VlXG4gICAgICAgKiBlZy4gMC4xICogMC4yID0gIDAuMDIwMDAwMDAwMDAwMDAwMDA0XG4gICAgICAgKiBodHRwOi8vZG9jcy5vcmFjbGUuY29tL2NkL0UxOTk1Ny0wMS84MDYtMzU2OC9uY2dfZ29sZGJlcmcuaHRtbFxuICAgICAgICpcbiAgICAgICAqIGFzIGEgd29yayBhcm91bmQgd2UgY2FuIHJvdW5kIHdpdGggdGhlIGRlY2ltYWwgcHJlY2lzaW9uIG9mIGBzdGVwYFxuICAgICAgICovXG4gICAgICBjb25zdCBwcmVjaXNpb24gPSAxMCAqKiAoc3RlcFN0ci5sZW5ndGggLSBzdGVwUG9pbnRBdCAtIDEpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgTWF0aC5yb3VuZCgobnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbikgKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBudW1TdGVwcyAqIHRoaXMuc3RlcCArIHRoaXMubWluO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zbGlkZXJcIiwgSGFTbGlkZXIpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWwge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUGF0aCB7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhc3NVcmwgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVkUGF0aCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNpZ25lZFBhdGg+ID0+IGhhc3MuY2FsbFdTKHsgdHlwZTogXCJhdXRoL3NpZ25fcGF0aFwiLCBwYXRoIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoUHJvdmlkZXJzID0gKCkgPT5cbiAgZmV0Y2goXCIvYXV0aC9wcm92aWRlcnNcIiwge1xuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgQ2FtZXJhRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0aW1lQ2FjaGVQcm9taXNlRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2VcIjtcbmltcG9ydCB7IGdldFNpZ25lZFBhdGggfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9PTl9PRkYgPSAxO1xuZXhwb3J0IGNvbnN0IENBTUVSQV9TVVBQT1JUX1NUUkVBTSA9IDI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUHJlZmVyZW5jZXMge1xuICBwcmVsb2FkX3N0cmVhbTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFUaHVtYm5haWwge1xuICBjb250ZW50X3R5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZU1KUEVHU3RyZWFtVXJsID0gKGVudGl0eTogQ2FtZXJhRW50aXR5KSA9PlxuICBgL2FwaS9jYW1lcmFfcHJveHlfc3RyZWFtLyR7ZW50aXR5LmVudGl0eV9pZH0/dG9rZW49JHtlbnRpdHkuYXR0cmlidXRlcy5hY2Nlc3NfdG9rZW59YDtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsVXJsV2l0aENhY2hlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+XG4gIHRpbWVDYWNoZVByb21pc2VGdW5jKFxuICAgIFwiX2NhbWVyYVRtYlVybFwiLFxuICAgIDkwMDAsXG4gICAgZmV0Y2hUaHVtYm5haWxVcmwsXG4gICAgaGFzcyxcbiAgICBlbnRpdHlJZFxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWxVcmwgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBwYXRoID0gYXdhaXQgZ2V0U2lnbmVkUGF0aChoYXNzLCBgL2FwaS9jYW1lcmFfcHJveHkvJHtlbnRpdHlJZH1gKTtcbiAgcmV0dXJuIGhhc3MuaGFzc1VybChwYXRoLnBhdGgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXCIpO1xuICByZXR1cm4gaGFzcy5jYWxsV1M8Q2FtZXJhVGh1bWJuYWlsPih7XG4gICAgdHlwZTogXCJjYW1lcmFfdGh1bWJuYWlsXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTdHJlYW1VcmwgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGZvcm1hdD86IFwiaGxzXCJcbikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHR5cGU6IFwiY2FtZXJhL3N0cmVhbVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH07XG4gIGlmIChmb3JtYXQpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZGF0YS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgY29uc3Qgc3RyZWFtID0gYXdhaXQgaGFzcy5jYWxsV1M8U3RyZWFtPihkYXRhKTtcbiAgc3RyZWFtLnVybCA9IGhhc3MuaGFzc1VybChzdHJlYW0udXJsKTtcbiAgcmV0dXJuIHN0cmVhbTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhbWVyYVByZWZzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvZ2V0X3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYW1lcmFQcmVmcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgcHJlZnM6IHtcbiAgICBwcmVsb2FkX3N0cmVhbT86IGJvb2xlYW47XG4gIH1cbikgPT5cbiAgaGFzcy5jYWxsV1M8Q2FtZXJhUHJlZmVyZW5jZXM+KHtcbiAgICB0eXBlOiBcImNhbWVyYS91cGRhdGVfcHJlZnNcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnByZWZzLFxuICB9KTtcbiIsImltcG9ydCB7XG4gIEhhc3NFbnRpdHlCYXNlLFxuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgdHlwZSBIdmFjTW9kZSA9XG4gIHwgXCJvZmZcIlxuICB8IFwiaGVhdFwiXG4gIHwgXCJjb29sXCJcbiAgfCBcImhlYXRfY29vbFwiXG4gIHwgXCJhdXRvXCJcbiAgfCBcImRyeVwiXG4gIHwgXCJmYW5fb25seVwiO1xuXG5leHBvcnQgY29uc3QgQ0xJTUFURV9QUkVTRVRfTk9ORSA9IFwibm9uZVwiO1xuXG5leHBvcnQgdHlwZSBIdmFjQWN0aW9uID0gXCJvZmZcIiB8IFwiaGVhdGluZ1wiIHwgXCJjb29saW5nXCIgfCBcImRyeWluZ1wiIHwgXCJpZGxlXCI7XG5cbmV4cG9ydCB0eXBlIENsaW1hdGVFbnRpdHkgPSBIYXNzRW50aXR5QmFzZSAmIHtcbiAgYXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgJiB7XG4gICAgaHZhY19tb2RlOiBIdmFjTW9kZTtcbiAgICBodmFjX21vZGVzOiBIdmFjTW9kZVtdO1xuICAgIGh2YWNfYWN0aW9uPzogSHZhY0FjdGlvbjtcbiAgICBjdXJyZW50X3RlbXBlcmF0dXJlOiBudW1iZXI7XG4gICAgbWluX3RlbXA6IG51bWJlcjtcbiAgICBtYXhfdGVtcDogbnVtYmVyO1xuICAgIHRlbXBlcmF0dXJlOiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfc3RlcD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9oaWdoPzogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX2xvdz86IG51bWJlcjtcbiAgICBodW1pZGl0eT86IG51bWJlcjtcbiAgICBjdXJyZW50X2h1bWlkaXR5PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9sb3c/OiBudW1iZXI7XG4gICAgdGFyZ2V0X2h1bWlkaXR5X2hpZ2g/OiBudW1iZXI7XG4gICAgbWluX2h1bWlkaXR5PzogbnVtYmVyO1xuICAgIG1heF9odW1pZGl0eT86IG51bWJlcjtcbiAgICBmYW5fbW9kZT86IHN0cmluZztcbiAgICBmYW5fbW9kZXM/OiBzdHJpbmdbXTtcbiAgICBwcmVzZXRfbW9kZT86IHN0cmluZztcbiAgICBwcmVzZXRfbW9kZXM/OiBzdHJpbmdbXTtcbiAgICBzd2luZ19tb2RlPzogc3RyaW5nO1xuICAgIHN3aW5nX21vZGVzPzogc3RyaW5nW107XG4gICAgYXV4X2hlYXQ/OiBcIm9uXCIgfCBcIm9mZlwiO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkUgPSAxO1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVfUkFOR0UgPSAyO1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFkgPSA0O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9GQU5fTU9ERSA9IDg7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1BSRVNFVF9NT0RFID0gMTY7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1NXSU5HX01PREUgPSAzMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfQVVYX0hFQVQgPSA2NDtcblxuY29uc3QgaHZhY01vZGVPcmRlcmluZzogeyBba2V5IGluIEh2YWNNb2RlXTogbnVtYmVyIH0gPSB7XG4gIGF1dG86IDEsXG4gIGhlYXRfY29vbDogMixcbiAgaGVhdDogMyxcbiAgY29vbDogNCxcbiAgZHJ5OiA1LFxuICBmYW5fb25seTogNixcbiAgb2ZmOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVDbGltYXRlSHZhY01vZGVzID0gKG1vZGUxOiBIdmFjTW9kZSwgbW9kZTI6IEh2YWNNb2RlKSA9PlxuICBodmFjTW9kZU9yZGVyaW5nW21vZGUxXSAtIGh2YWNNb2RlT3JkZXJpbmdbbW9kZTJdO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0SW5wdXRTZWxlY3RPcHRpb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eTogc3RyaW5nLFxuICBvcHRpb246IHN0cmluZ1xuKSA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfc2VsZWN0XCIsIFwic2VsZWN0X29wdGlvblwiLCB7XG4gICAgb3B0aW9uLFxuICAgIGVudGl0eV9pZDogZW50aXR5LFxuICB9KTtcbiIsImltcG9ydCB7XG4gIEhhc3NFbnRpdHlCYXNlLFxuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBTZXJ2aWNlQ2FsbFJlc3BvbnNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBTQ0VORV9JR05PUkVEX0RPTUFJTlMgPSBbXG4gIFwic2Vuc29yXCIsXG4gIFwiYmluYXJ5X3NlbnNvclwiLFxuICBcImRldmljZV90cmFja2VyXCIsXG4gIFwicGVyc29uXCIsXG4gIFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIixcbiAgXCJjb25maWd1cmF0aW9uXCIsXG4gIFwiaW1hZ2VfcHJvY2Vzc2luZ1wiLFxuICBcInN1blwiLFxuICBcIndlYXRoZXJcIixcbiAgXCJ6b25lXCIsXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lRW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHsgaWQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IFNjZW5lRW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVFbnRpdGllcyB7XG4gIFtlbnRpdHlJZDogc3RyaW5nXTogc3RyaW5nIHwgeyBzdGF0ZTogc3RyaW5nOyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlU2NlbmUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8U2VydmljZUNhbGxSZXNwb25zZT4gPT5cbiAgaGFzcy5jYWxsU2VydmljZShcInNjZW5lXCIsIFwidHVybl9vblwiLCB7IGVudGl0eV9pZDogZW50aXR5SWQgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBseVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllczogU2NlbmVFbnRpdGllc1xuKTogUHJvbWlzZTxTZXJ2aWNlQ2FsbFJlc3BvbnNlPiA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKFwic2NlbmVcIiwgXCJhcHBseVwiLCB7IGVudGl0aWVzIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2NlbmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHNjZW5lSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxTY2VuZUNvbmZpZz4gPT5cbiAgaGFzcy5jYWxsQXBpPFNjZW5lQ29uZmlnPihcIkdFVFwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke3NjZW5lSWR9YCk7XG5cbmV4cG9ydCBjb25zdCBzYXZlU2NlbmUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHNjZW5lSWQ6IHN0cmluZyxcbiAgY29uZmlnOiBTY2VuZUNvbmZpZ1xuKSA9PiBoYXNzLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gLCBjb25maWcpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NlbmUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7aWR9YCk7XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbi8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ292ZXJFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHN0YXRlT2JqO1xuICAgIHRoaXMuX2F0dHIgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2ZlYXQgPSB0aGlzLl9hdHRyLnN1cHBvcnRlZF9mZWF0dXJlcztcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlbigpIHtcbiAgICBpZiAodGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gPT09IDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlblwiO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAxMDA7XG4gIH1cblxuICBnZXQgaXNGdWxseUNsb3NlZFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzT3BlbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvcGVuaW5nXCI7XG4gIH1cblxuICBnZXQgaXNDbG9zaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImNsb3NpbmdcIjtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW4oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0Nsb3NlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzT3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZVRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTdG9wVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDY0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldFRpbHRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEyOCk7XG4gIH1cblxuICBnZXQgaXNUaWx0T25seSgpIHtcbiAgICBjb25zdCBzdXBwb3J0c0NvdmVyID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuIHx8IHRoaXMuc3VwcG9ydHNDbG9zZSB8fCB0aGlzLnN1cHBvcnRzU3RvcDtcbiAgICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgICAgdGhpcy5zdXBwb3J0c09wZW5UaWx0IHx8IHRoaXMuc3VwcG9ydHNDbG9zZVRpbHQgfHwgdGhpcy5zdXBwb3J0c1N0b3BUaWx0O1xuICAgIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG4gIH1cblxuICBvcGVuQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3ZlclwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3ZlclwiKTtcbiAgfVxuXG4gIG9wZW5Db3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIGNsb3NlQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc3RvcENvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc2V0Q292ZXJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfcG9zaXRpb25cIiwgeyBwb3NpdGlvbiB9KTtcbiAgfVxuXG4gIHNldENvdmVyVGlsdFBvc2l0aW9uKHRpbHRQb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfdGlsdF9wb3NpdGlvblwiLCB7XG4gICAgICB0aWx0X3Bvc2l0aW9uOiB0aWx0UG9zaXRpb24sXG4gICAgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJjb3ZlclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZSA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3AgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW5UaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDE2KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2VUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDMyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcFRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+XG4gIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTI4KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGlsdE9ubHkoc3RhdGVPYmopIHtcbiAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgc3VwcG9ydHNPcGVuKHN0YXRlT2JqKSB8fCBzdXBwb3J0c0Nsb3NlKHN0YXRlT2JqKSB8fCBzdXBwb3J0c1N0b3Aoc3RhdGVPYmopO1xuICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgIHN1cHBvcnRzT3BlblRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNDbG9zZVRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNTdG9wVGlsdChzdGF0ZU9iaik7XG4gIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG59XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUGxheWVyRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaGFzcywgc3RhdGVPYmopIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib2ZmXCI7XG4gIH1cblxuICBnZXQgaXNJZGxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImlkbGVcIjtcbiAgfVxuXG4gIGdldCBpc011dGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmlzX3ZvbHVtZV9tdXRlZDtcbiAgfVxuXG4gIGdldCBpc1BhdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIjtcbiAgfVxuXG4gIGdldCBpc1BsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGxheWluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzTXVzaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfY29udGVudF90eXBlID09PSBcIm11c2ljXCI7XG4gIH1cblxuICBnZXQgaXNUVlNob3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfY29udGVudF90eXBlID09PSBcInR2c2hvd1wiO1xuICB9XG5cbiAgZ2V0IGhhc01lZGlhQ29udHJvbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgW1wicGxheWluZ1wiLCBcInBhdXNlZFwiLCBcInVua25vd25cIiwgXCJvblwiXS5pbmRleE9mKHRoaXMuc3RhdGVPYmouc3RhdGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgdm9sdW1lU2xpZGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIudm9sdW1lX2xldmVsICogMTAwO1xuICB9XG5cbiAgZ2V0IHNob3dQcm9ncmVzcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNQbGF5aW5nIHx8IHRoaXMuaXNQYXVzZWQpICYmXG4gICAgICBcIm1lZGlhX2R1cmF0aW9uXCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICBcIm1lZGlhX3Bvc2l0aW9uXCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICBcIm1lZGlhX3Bvc2l0aW9uX3VwZGF0ZWRfYXRcIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgICApO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQcm9ncmVzcygpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLl9hdHRyLm1lZGlhX3Bvc2l0aW9uO1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgcHJvZ3Jlc3MgKz1cbiAgICAgICAgKERhdGUubm93KCkgLVxuICAgICAgICAgIG5ldyBEYXRlKHRoaXMuX2F0dHIubWVkaWFfcG9zaXRpb25fdXBkYXRlZF9hdCkuZ2V0VGltZSgpKSAvXG4gICAgICAgIDEwMDAuMDtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGF1c2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZVNldCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lTXV0ZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUHJldmlvdXNUcmFjaygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c05leHRUcmFjaygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDMyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1R1cm5PbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEyOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNUdXJuT2ZmKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMjU2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BsYXlNZWRpYSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDUxMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVCdXR0b25zKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTAyNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZWxlY3RTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyMDQ4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NlbGVjdFNvdW5kTW9kZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDY1NTM2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BsYXkoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNjM4NCk7XG4gIH1cblxuICBnZXQgcHJpbWFyeVRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX3RpdGxlO1xuICB9XG5cbiAgZ2V0IHNlY29uZGFyeVRpdGxlKCkge1xuICAgIGlmICh0aGlzLmlzTXVzaWMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2FydGlzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNUVlNob3cpIHtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5fYXR0ci5tZWRpYV9zZXJpZXNfdGl0bGU7XG5cbiAgICAgIGlmICh0aGlzLl9hdHRyLm1lZGlhX3NlYXNvbikge1xuICAgICAgICB0ZXh0ICs9IFwiIFNcIiArIHRoaXMuX2F0dHIubWVkaWFfc2Vhc29uO1xuXG4gICAgICAgIGlmICh0aGlzLl9hdHRyLm1lZGlhX2VwaXNvZGUpIHtcbiAgICAgICAgICB0ZXh0ICs9IFwiRVwiICsgdGhpcy5fYXR0ci5tZWRpYV9lcGlzb2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXR0ci5hcHBfbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuYXBwX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VyY2U7XG4gIH1cblxuICBnZXQgc291cmNlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VyY2VfbGlzdDtcbiAgfVxuXG4gIGdldCBzb3VuZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291bmRfbW9kZTtcbiAgfVxuXG4gIGdldCBzb3VuZE1vZGVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdW5kX21vZGVfbGlzdDtcbiAgfVxuXG4gIG1lZGlhUGxheVBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5X3BhdXNlXCIpO1xuICB9XG5cbiAgbmV4dFRyYWNrKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9uZXh0X3RyYWNrXCIpO1xuICB9XG5cbiAgcGxheWJhY2tDb250cm9sKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5X3BhdXNlXCIpO1xuICB9XG5cbiAgcHJldmlvdXNUcmFjaygpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcHJldmlvdXNfdHJhY2tcIik7XG4gIH1cblxuICBzZXRWb2x1bWUodm9sdW1lKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9zZXRcIiwgeyB2b2x1bWVfbGV2ZWw6IHZvbHVtZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBvd2VyKCkge1xuICAgIGlmICh0aGlzLmlzT2ZmKSB7XG4gICAgICB0aGlzLnR1cm5PbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR1cm5PZmYoKTtcbiAgICB9XG4gIH1cblxuICB0dXJuT2ZmKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ0dXJuX29mZlwiKTtcbiAgfVxuXG4gIHR1cm5PbigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidHVybl9vblwiKTtcbiAgfVxuXG4gIHZvbHVtZURvd24oKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9kb3duXCIpO1xuICB9XG5cbiAgdm9sdW1lTXV0ZShtdXRlKSB7XG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzVm9sdW1lTXV0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXV0aW5nIHZvbHVtZSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH1cbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX211dGVcIiwgeyBpc192b2x1bWVfbXV0ZWQ6IG11dGUgfSk7XG4gIH1cblxuICB2b2x1bWVVcCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX3VwXCIpO1xuICB9XG5cbiAgc2VsZWN0U291cmNlKHNvdXJjZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZWxlY3Rfc291cmNlXCIsIHsgc291cmNlIH0pO1xuICB9XG5cbiAgc2VsZWN0U291bmRNb2RlKHNvdW5kTW9kZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZWxlY3Rfc291bmRfbW9kZVwiLCB7IHNvdW5kX21vZGU6IHNvdW5kTW9kZSB9KTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RcblxuICBjYWxsU2VydmljZShzZXJ2aWNlLCBkYXRhID0ge30pIHtcbiAgICBkYXRhLmVudGl0eV9pZCA9IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXllclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBd0JBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFwQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBdEhBO0FBQ0E7QUErQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBNURBO0FBQ0E7QUF3SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUVBO0FBQ0E7QUFpQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUFsREE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUEvRUE7QUFDQTtBQWtDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTs7OztBQW5EQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBbEJBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFDQTtBQURBO0FBYUE7QUFDQTtBQWRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBUUE7QUFDQTtBQUZBO0FBUEE7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTs7Ozs7Ozs7Ozs7O0FDS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUFBO0FBSUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUlBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBRUE7QUFDQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXVFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQTdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7Ozs7OztBQTVFQTtBQXdIQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXNKQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyTkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9