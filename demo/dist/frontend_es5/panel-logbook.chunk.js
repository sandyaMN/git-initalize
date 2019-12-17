(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-logbook"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions() ? function (dateObj, locales) {
  return dateObj.toLocaleDateString(locales, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
} : function (dateObj) {
  return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate");
});

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions() ? function (dateObj, locales) {
  return dateObj.toLocaleTimeString(locales, {
    hour: "numeric",
    minute: "2-digit"
  });
} : function (dateObj) {
  return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
});

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/logbook/ha-logbook-data.js":
/*!***********************************************!*\
  !*** ./src/panels/logbook/ha-logbook-data.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DATA_CACHE = {};
var ALL_ENTITIES = "*";

var HaLogbookData =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaLogbookData, _PolymerElement);

  function HaLogbookData() {
    _classCallCheck(this, HaLogbookData);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLogbookData).apply(this, arguments));
  }

  _createClass(HaLogbookData, [{
    key: "hassChanged",
    value: function hassChanged(newHass, oldHass) {
      if (!oldHass && this.filterDate) {
        this.updateData();
      }
    }
  }, {
    key: "filterDataChanged",
    value: function filterDataChanged(newValue, oldValue) {
      if (oldValue !== undefined) {
        this.updateData();
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      var _this = this;

      if (!this.hass) return;

      this._setIsLoading(true);

      this.getDate(this.filterDate, this.filterPeriod, this.filterEntity).then(function (logbookEntries) {
        _this._setEntries(logbookEntries);

        _this._setIsLoading(false);
      });
    }
  }, {
    key: "getDate",
    value: function getDate(date, period, entityId) {
      if (!entityId) entityId = ALL_ENTITIES;
      if (!DATA_CACHE[period]) DATA_CACHE[period] = [];
      if (!DATA_CACHE[period][date]) DATA_CACHE[period][date] = [];

      if (DATA_CACHE[period][date][entityId]) {
        return DATA_CACHE[period][date][entityId];
      }

      if (entityId !== ALL_ENTITIES && DATA_CACHE[period][date][ALL_ENTITIES]) {
        return DATA_CACHE[period][date][ALL_ENTITIES].then(function (entities) {
          return entities.filter(function (entity) {
            return entity.entity_id === entityId;
          });
        });
      }

      DATA_CACHE[period][date][entityId] = this._getFromServer(date, period, entityId);
      return DATA_CACHE[period][date][entityId];
    }
  }, {
    key: "_getFromServer",
    value: function _getFromServer(date, period, entityId) {
      var url = "logbook/" + date + "?period=" + period;

      if (entityId !== ALL_ENTITIES) {
        url += "&entity=" + entityId;
      }

      return this.hass.callApi("GET", url).then(function (logbookEntries) {
        logbookEntries.reverse();
        return logbookEntries;
      }, function () {
        return null;
      });
    }
  }, {
    key: "refreshLogbook",
    value: function refreshLogbook() {
      DATA_CACHE[this.filterPeriod][this.filterDate] = [];
      this.updateData();
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          observer: "hassChanged"
        },
        filterDate: {
          type: String,
          observer: "filterDataChanged"
        },
        filterPeriod: {
          type: Number,
          observer: "filterDataChanged"
        },
        filterEntity: {
          type: String,
          observer: "filterDataChanged"
        },
        isLoading: {
          type: Boolean,
          value: true,
          readOnly: true,
          notify: true
        },
        entries: {
          type: Object,
          value: null,
          readOnly: true,
          notify: true
        }
      };
    }
  }]);

  return HaLogbookData;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define("ha-logbook-data", HaLogbookData);

/***/ }),

/***/ "./src/panels/logbook/ha-logbook.js":
/*!******************************************!*\
  !*** ./src/panels/logbook/ha-logbook.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([rtl]) {\n          direction: ltr;\n        }\n\n        .entry {\n          @apply --paper-font-body1;\n          line-height: 2em;\n        }\n\n        .time {\n          width: 55px;\n          font-size: 0.8em;\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .date {\n          direction: rtl;\n        }\n\n        iron-icon {\n          margin: 0 8px 0 16px;\n          color: var(--primary-text-color);\n        }\n\n        .message {\n          color: var(--primary-text-color);\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[!entries.length]]\">\n        [[localize('ui.panel.logbook.entries_not_found')]]\n      </template>\n\n      <template is=\"dom-repeat\" items=\"[[entries]]\">\n        <template is=\"dom-if\" if=\"{{_needHeader(entries.*, index)}}\">\n          <h4 class=\"date\">[[_formatDate(item.when)]]</h4>\n        </template>\n\n        <div class=\"horizontal layout entry\">\n          <div class=\"time\">[[_formatTime(item.when)]]</div>\n          <iron-icon icon=\"[[_computeIcon(item.domain)]]\"></iron-icon>\n          <div class=\"message\" flex=\"\">\n            <template is=\"dom-if\" if=\"[[!item.entity_id]]\">\n              <span class=\"name\">[[item.name]]</span>\n            </template>\n            <template is=\"dom-if\" if=\"[[item.entity_id]]\">\n              <a href=\"#\" on-click=\"entityClicked\" class=\"name\"\n                >[[item.name]]</a\n              >\n            </template>\n            <span> </span> <span>[[item.message]]</span>\n          </div>\n        </div>\n      </template>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaLogbook =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaLogbook, _LocalizeMixin);

  function HaLogbook() {
    _classCallCheck(this, HaLogbook);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLogbook).apply(this, arguments));
  }

  _createClass(HaLogbook, [{
    key: "_formatTime",
    value: function _formatTime(date) {
      return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(date), this.hass.language);
    }
  }, {
    key: "_formatDate",
    value: function _formatDate(date) {
      return Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(date), this.hass.language);
    }
  }, {
    key: "_needHeader",
    value: function _needHeader(change, index) {
      if (!index) return true;
      var current = this.get("when", change.base[index]);
      var previous = this.get("when", change.base[index - 1]);
      return current && previous && new Date(current).toDateString() !== new Date(previous).toDateString();
    }
  }, {
    key: "_computeIcon",
    value: function _computeIcon(domain) {
      return Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_8__["domainIcon"])(domain);
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__["computeRTL"])(hass);
    }
  }, {
    key: "entityClicked",
    value: function entityClicked(ev) {
      ev.preventDefault();
      this.fire("hass-more-info", {
        entityId: ev.model.item.entity_id
      });
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
        entries: {
          type: Array,
          value: []
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaLogbook;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-logbook", HaLogbook);

/***/ }),

/***/ "./src/panels/logbook/ha-panel-logbook.js":
/*!************************************************!*\
  !*** ./src/panels/logbook/ha-panel-logbook.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_logbook_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-logbook-data */ "./src/panels/logbook/ha-logbook-data.js");
/* harmony import */ var _ha_logbook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-logbook */ "./src/panels/logbook/ha-logbook.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .content {\n          padding: 0 16px 16px;\n        }\n\n        paper-spinner {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n\n        .wrap {\n          margin-bottom: 24px;\n        }\n\n        vaadin-date-picker {\n          max-width: 200px;\n          margin-right: 16px;\n        }\n\n        paper-dropdown-menu {\n          max-width: 100px;\n          margin-right: 16px;\n          --paper-input-container-label-floating: {\n            padding-bottom: 10px;\n          }\n        }\n\n        :host([rtl]) paper-dropdown-menu {\n          text-align: right;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-entity-picker {\n          display: inline-block;\n          width: 100%;\n          max-width: 400px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      </style>\n\n      <ha-logbook-data\n        hass=\"[[hass]]\"\n        is-loading=\"{{isLoading}}\"\n        entries=\"{{entries}}\"\n        filter-date=\"[[_computeFilterDate(_currentDate)]]\"\n        filter-period=\"[[_computeFilterDays(_periodIndex)]]\"\n        filter-entity=\"[[entityId]]\"\n      ></ha-logbook-data>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-menu-button>\n            <div main-title>[[localize('panel.logbook')]]</div>\n            <paper-icon-button\n              icon=\"hass:refresh\"\n              on-click=\"refreshLogbook\"\n              hidden$=\"[[isLoading]]\"\n            ></paper-icon-button>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <paper-spinner\n            active=\"[[isLoading]]\"\n            hidden$=\"[[!isLoading]]\"\n            alt=\"[[localize('ui.common.loading')]]\"\n          ></paper-spinner>\n\n          <div class=\"flex layout horizontal wrap\">\n            <vaadin-date-picker\n              id=\"picker\"\n              value=\"{{_currentDate}}\"\n              label=\"[[localize('ui.panel.logbook.showing_entries')]]\"\n              disabled=\"[[isLoading]]\"\n              required\n            ></vaadin-date-picker>\n\n            <paper-dropdown-menu\n              label-float\n              label=\"[[localize('ui.panel.logbook.period')]]\"\n              disabled=\"[[isLoading]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_periodIndex}}\"\n              >\n                <paper-item\n                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item\n                >\n                <paper-item\n                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item\n                >\n                <paper-item\n                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item\n                >\n              </paper-listbox>\n            </paper-dropdown-menu>\n\n            <ha-entity-picker\n              hass=\"[[hass]]\"\n              value=\"{{_entityId}}\"\n              label=\"[[localize('ui.components.entity.entity-picker.entity')]]\"\n              disabled=\"[[isLoading]]\"\n              on-change=\"_entityPicked\"\n            ></ha-entity-picker>\n          </div>\n\n          <ha-logbook\n            hass=\"[[hass]]\"\n            entries=\"[[entries]]\"\n            hidden$=\"[[isLoading]]\"\n          ></ha-logbook>\n        </div>\n      </app-header-layout>\n    "]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















/*
 * @appliesMixin LocalizeMixin
 */

var HaPanelLogbook =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPanelLogbook, _LocalizeMixin);

  function HaPanelLogbook() {
    _classCallCheck(this, HaPanelLogbook);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelLogbook).apply(this, arguments));
  }

  _createClass(HaPanelLogbook, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaPanelLogbook.prototype), "connectedCallback", this).call(this); // We are unable to parse date because we use intl api to render date


      this.$.picker.set("i18n.parseDate", null);
      this.$.picker.set("i18n.formatDate", function (date) {
        return Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(date.year, date.month, date.day), _this.hass.language);
      });
    }
  }, {
    key: "_computeFilterDate",
    value: function _computeFilterDate(_currentDate) {
      if (!_currentDate) return undefined;

      var parts = _currentDate.split("-");

      parts[1] = parseInt(parts[1]) - 1;
      return new Date(parts[0], parts[1], parts[2]).toISOString();
    }
  }, {
    key: "_computeFilterDays",
    value: function _computeFilterDays(periodIndex) {
      switch (periodIndex) {
        case 1:
          return 3;

        case 2:
          return 7;

        default:
          return 1;
      }
    }
  }, {
    key: "_entityPicked",
    value: function _entityPicked(ev) {
      this._setEntityId(ev.target.value);
    }
  }, {
    key: "refreshLogbook",
    value: function refreshLogbook() {
      this.shadowRoot.querySelector("ha-logbook-data").refreshLogbook();
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        narrow: Boolean,
        // ISO8601 formatted date string
        _currentDate: {
          type: String,
          value: function value() {
            var value = new Date();
            var today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
            return today.toISOString().split("T")[0];
          }
        },
        _periodIndex: {
          type: Number,
          value: 0
        },
        _entityId: {
          type: String,
          value: ""
        },
        entityId: {
          type: String,
          value: "",
          readOnly: true
        },
        isLoading: {
          type: Boolean
        },
        entries: {
          type: Array
        },
        datePicker: {
          type: Object
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaPanelLogbook;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]));

customElements.define("ha-panel-logbook", HaPanelLogbook);

/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = "\n<dom-module id=\"ha-date-picker-text-field-styles\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style>\n      :host {\n        padding: 8px 0;\n      }\n\n      [part~=\"label\"] {\n        top: 6px;\n        font-size: var(--paper-font-subhead_-_font-size);\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      :host([focused]) [part~=\"label\"] {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n\n      [part~=\"input-field\"] {\n        color: var(--primary-text-color);\n        top: 3px;\n      }\n\n      [part~=\"input-field\"]::before, [part~=\"input-field\"]::after {\n        background-color: var(--paper-input-container-color, var(--secondary-text-color));\n        opacity: 1;\n      }\n\n      :host([focused]) [part~=\"input-field\"]::before, :host([focused]) [part~=\"input-field\"]::after {\n        background-color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n\n      [part~=\"value\"] {\n        font-size: var(--paper-font-subhead_-_font-size);\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id=\"ha-date-picker-button-styles\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host([part~=\"today-button\"]) [part~=\"button\"]::before {\n        content: \"\u29BF\";\n        color: var(--primary-color);\n      }\n\n      [part~=\"button\"] {\n        font-family: inherit;\n        font-size: var(--paper-font-subhead_-_font-size);\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n        color: inherit;\n      }\n\n      [part~=\"button\"]:focus {\n        outline: none;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id=\"ha-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"vaadin-date-picker-overlay-default-theme\">\n      [part~=\"toolbar\"] {\n        padding: 0.3em;\n        background-color: var(--secondary-background-color);\n      }\n\n      [part=\"years\"] {\n        background-color: var(--secondary-text-color);\n        --material-body-text-color: var(--primary-background-color);\n      }\n\n      [part=\"overlay\"] {\n        background-color: var(--primary-background-color);\n        --material-body-text-color: var(--secondary-text-color);\n      }\n\n    </style>\n  </template>\n</dom-module>\n<dom-module id=\"ha-date-picker-month-styles\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style include=\"vaadin-month-calendar-default-theme\">\n      [part=\"date\"][today] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module>\n";
document.head.appendChild(documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG9nYm9vay9oYS1sb2dib29rLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLWxvZ2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLXBhbmVsLWxvZ2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9oYS1kYXRlLXBpY2tlci1zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bURhdGVcIik7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNvbnN0IERBVEFfQ0FDSEUgPSB7fTtcbmNvbnN0IEFMTF9FTlRJVElFUyA9IFwiKlwiO1xuXG5jbGFzcyBIYUxvZ2Jvb2tEYXRhIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyRGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImZpbHRlckRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJQZXJpb2Q6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJmaWx0ZXJEYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyRW50aXR5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZmlsdGVyRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGVudHJpZXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKG5ld0hhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIW9sZEhhc3MgJiYgdGhpcy5maWx0ZXJEYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuaGFzcykgcmV0dXJuO1xuXG4gICAgdGhpcy5fc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdGhpcy5nZXREYXRlKHRoaXMuZmlsdGVyRGF0ZSwgdGhpcy5maWx0ZXJQZXJpb2QsIHRoaXMuZmlsdGVyRW50aXR5KS50aGVuKFxuICAgICAgKGxvZ2Jvb2tFbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldEVudHJpZXMobG9nYm9va0VudHJpZXMpO1xuICAgICAgICB0aGlzLl9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXREYXRlKGRhdGUsIHBlcmlvZCwgZW50aXR5SWQpIHtcbiAgICBpZiAoIWVudGl0eUlkKSBlbnRpdHlJZCA9IEFMTF9FTlRJVElFUztcblxuICAgIGlmICghREFUQV9DQUNIRVtwZXJpb2RdKSBEQVRBX0NBQ0hFW3BlcmlvZF0gPSBbXTtcbiAgICBpZiAoIURBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXSkgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdID0gW107XG5cbiAgICBpZiAoREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXSkge1xuICAgICAgcmV0dXJuIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtlbnRpdHlJZF07XG4gICAgfVxuXG4gICAgaWYgKGVudGl0eUlkICE9PSBBTExfRU5USVRJRVMgJiYgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW0FMTF9FTlRJVElFU10pIHtcbiAgICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bQUxMX0VOVElUSUVTXS50aGVuKGZ1bmN0aW9uKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBlbnRpdGllcy5maWx0ZXIoZnVuY3Rpb24oZW50aXR5KSB7XG4gICAgICAgICAgcmV0dXJuIGVudGl0eS5lbnRpdHlfaWQgPT09IGVudGl0eUlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtlbnRpdHlJZF0gPSB0aGlzLl9nZXRGcm9tU2VydmVyKFxuICAgICAgZGF0ZSxcbiAgICAgIHBlcmlvZCxcbiAgICAgIGVudGl0eUlkXG4gICAgKTtcbiAgICByZXR1cm4gREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXTtcbiAgfVxuXG4gIF9nZXRGcm9tU2VydmVyKGRhdGUsIHBlcmlvZCwgZW50aXR5SWQpIHtcbiAgICBsZXQgdXJsID0gXCJsb2dib29rL1wiICsgZGF0ZSArIFwiP3BlcmlvZD1cIiArIHBlcmlvZDtcbiAgICBpZiAoZW50aXR5SWQgIT09IEFMTF9FTlRJVElFUykge1xuICAgICAgdXJsICs9IFwiJmVudGl0eT1cIiArIGVudGl0eUlkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmhhc3MuY2FsbEFwaShcIkdFVFwiLCB1cmwpLnRoZW4oXG4gICAgICBmdW5jdGlvbihsb2dib29rRW50cmllcykge1xuICAgICAgICBsb2dib29rRW50cmllcy5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsb2dib29rRW50cmllcztcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hMb2dib29rKCkge1xuICAgIERBVEFfQ0FDSEVbdGhpcy5maWx0ZXJQZXJpb2RdW3RoaXMuZmlsdGVyRGF0ZV0gPSBbXTtcbiAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sb2dib29rLWRhdGFcIiwgSGFMb2dib29rRGF0YSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhTG9nYm9vayBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZW50cnkge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lIHtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmRhdGUge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG5cbiAgICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDAgOHB4IDAgMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFlbnRyaWVzLmxlbmd0aF1dXCI+XG4gICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmxvZ2Jvb2suZW50cmllc19ub3RfZm91bmQnKV1dXG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudHJpZXNdXVwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cInt7X25lZWRIZWFkZXIoZW50cmllcy4qLCBpbmRleCl9fVwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cImRhdGVcIj5bW19mb3JtYXREYXRlKGl0ZW0ud2hlbildXTwvaDQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwgbGF5b3V0IGVudHJ5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5bW19mb3JtYXRUaW1lKGl0ZW0ud2hlbildXTwvZGl2PlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cIltbX2NvbXB1dGVJY29uKGl0ZW0uZG9tYWluKV1dXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIiBmbGV4PVwiXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWl0ZW0uZW50aXR5X2lkXV1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+W1tpdGVtLm5hbWVdXTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaXRlbS5lbnRpdHlfaWRdXVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uLWNsaWNrPVwiZW50aXR5Q2xpY2tlZFwiIGNsYXNzPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgPltbaXRlbS5uYW1lXV08L2FcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxzcGFuPiA8L3NwYW4+IDxzcGFuPltbaXRlbS5tZXNzYWdlXV08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVudHJpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2Zvcm1hdFRpbWUoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGUpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICB9XG5cbiAgX2Zvcm1hdERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICB9XG5cbiAgX25lZWRIZWFkZXIoY2hhbmdlLCBpbmRleCkge1xuICAgIGlmICghaW5kZXgpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldChcIndoZW5cIiwgY2hhbmdlLmJhc2VbaW5kZXhdKTtcbiAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuZ2V0KFwid2hlblwiLCBjaGFuZ2UuYmFzZVtpbmRleCAtIDFdKTtcbiAgICByZXR1cm4gKFxuICAgICAgY3VycmVudCAmJlxuICAgICAgcHJldmlvdXMgJiZcbiAgICAgIG5ldyBEYXRlKGN1cnJlbnQpLnRvRGF0ZVN0cmluZygpICE9PSBuZXcgRGF0ZShwcmV2aW91cykudG9EYXRlU3RyaW5nKClcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVJY29uKGRvbWFpbikge1xuICAgIHJldHVybiBkb21haW5JY29uKGRvbWFpbik7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cblxuICBlbnRpdHlDbGlja2VkKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBldi5tb2RlbC5pdGVtLmVudGl0eV9pZCB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sb2dib29rXCIsIEhhTG9nYm9vayk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9oYS1sb2dib29rLWRhdGFcIjtcbmltcG9ydCBcIi4vaGEtbG9nYm9va1wiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbExvZ2Jvb2sgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhYWRpbi1kYXRlLXBpY2tlciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZzoge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZW50aXR5LXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtbG9nYm9vay1kYXRhXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIGlzLWxvYWRpbmc9XCJ7e2lzTG9hZGluZ319XCJcbiAgICAgICAgZW50cmllcz1cInt7ZW50cmllc319XCJcbiAgICAgICAgZmlsdGVyLWRhdGU9XCJbW19jb21wdXRlRmlsdGVyRGF0ZShfY3VycmVudERhdGUpXV1cIlxuICAgICAgICBmaWx0ZXItcGVyaW9kPVwiW1tfY29tcHV0ZUZpbHRlckRheXMoX3BlcmlvZEluZGV4KV1dXCJcbiAgICAgICAgZmlsdGVyLWVudGl0eT1cIltbZW50aXR5SWRdXVwiXG4gICAgICA+PC9oYS1sb2dib29rLWRhdGE+XG5cbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLmxvZ2Jvb2snKV1dPC9kaXY+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cmVmcmVzaFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwicmVmcmVzaExvZ2Jvb2tcIlxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgYWN0aXZlPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgYWx0PVwiW1tsb2NhbGl6ZSgndWkuY29tbW9uLmxvYWRpbmcnKV1dXCJcbiAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGF5b3V0IGhvcml6b250YWwgd3JhcFwiPlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cInBpY2tlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfY3VycmVudERhdGV9fVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwubG9nYm9vay5zaG93aW5nX2VudHJpZXMnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cblxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5sb2dib29rLnBlcmlvZCcpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3BlcmlvZEluZGV4fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLndlZWsnLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfZW50aXR5SWR9fVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHknKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgICAgb24tY2hhbmdlPVwiX2VudGl0eVBpY2tlZFwiXG4gICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhhLWxvZ2Jvb2tcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBlbnRyaWVzPVwiW1tlbnRyaWVzXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgID48L2hhLWxvZ2Jvb2s+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG5cbiAgICAgIC8vIElTTzg2MDEgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gICAgICBfY3VycmVudERhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLlVUQyh2YWx1ZS5nZXRGdWxsWWVhcigpLCB2YWx1ZS5nZXRNb250aCgpLCB2YWx1ZS5nZXREYXRlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBfcGVyaW9kSW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIF9lbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGVudHJpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBkYXRlUGlja2VyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIFdlIGFyZSB1bmFibGUgdG8gcGFyc2UgZGF0ZSBiZWNhdXNlIHdlIHVzZSBpbnRsIGFwaSB0byByZW5kZXIgZGF0ZVxuICAgIHRoaXMuJC5waWNrZXIuc2V0KFwiaTE4bi5wYXJzZURhdGVcIiwgbnVsbCk7XG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLmZvcm1hdERhdGVcIiwgKGRhdGUpID0+XG4gICAgICBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlRmlsdGVyRGF0ZShfY3VycmVudERhdGUpIHtcbiAgICBpZiAoIV9jdXJyZW50RGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFydHMgPSBfY3VycmVudERhdGUuc3BsaXQoXCItXCIpO1xuICAgIHBhcnRzWzFdID0gcGFyc2VJbnQocGFydHNbMV0pIC0gMTtcbiAgICByZXR1cm4gbmV3IERhdGUocGFydHNbMF0sIHBhcnRzWzFdLCBwYXJ0c1syXSkudG9JU09TdHJpbmcoKTtcbiAgfVxuXG4gIF9jb21wdXRlRmlsdGVyRGF5cyhwZXJpb2RJbmRleCkge1xuICAgIHN3aXRjaCAocGVyaW9kSW5kZXgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG5cbiAgX2VudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMuX3NldEVudGl0eUlkKGV2LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZWZyZXNoTG9nYm9vaygpIHtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImhhLWxvZ2Jvb2stZGF0YVwiKS5yZWZyZXNoTG9nYm9vaygpO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLWxvZ2Jvb2tcIiwgSGFQYW5lbExvZ2Jvb2spO1xuIiwiY29uc3QgZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuXG5kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLXRleHQtZmllbGQtc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLXRleHQtZmllbGRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImxhYmVsXCJdIHtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1zaXplKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUsIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YmVmb3JlLCA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1zaXplKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci1idXR0b24tc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWJ1dHRvblwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW3BhcnR+PVwidG9kYXktYnV0dG9uXCJdKSBbcGFydH49XCJidXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwi4qa/XCI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1zaXplKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDQ4cHgpO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICBbcGFydH49XCJ0b29sYmFyXCJdIHtcbiAgICAgICAgcGFkZGluZzogMC4zZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci1tb250aC1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tbW9udGgtY2FsZW5kYXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyLWRlZmF1bHQtdGhlbWVcIj5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVt0b2RheV0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFNQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQTdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUE1QkE7QUFtQ0E7Ozs7QUFyQ0E7QUFDQTtBQWdIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBd0ZBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQXJIQTtBQUNBO0FBa0VBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFlQTs7OztBQXRGQTtBQUNBO0FBd0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXlMQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTdOQTtBQUNBO0FBZ0lBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQTVDQTtBQWtEQTs7OztBQXZMQTtBQUNBO0FBZ09BOzs7Ozs7Ozs7OztBQzFQQTtBQUNBO0FBRUE7QUErRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==