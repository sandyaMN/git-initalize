(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[21],{

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
var UNAVAILABLE = "unavailable";
var ENTITY_COMPONENT_DOMAINS = ["air_quality", "alarm_control_panel", "alert", "automation", "binary_sensor", "calendar", "camera", "counter", "cover", "dominos", "fan", "geo_location", "group", "history_graph", "image_processing", "input_boolean", "input_datetime", "input_number", "input_select", "input_text", "light", "lock", "mailbox", "media_player", "person", "plant", "remember_the_milk", "remote", "scene", "script", "sensor", "switch", "timer", "utility_meter", "vacuum", "weather", "wink", "zha", "zwave"];

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

/***/ "./src/panels/developer-tools/service/developer-tools-service.js":
/*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n          display: block;\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .ha-form {\n          margin-right: 16px;\n          max-width: 400px;\n        }\n\n        mwc-button {\n          margin-top: 8px;\n        }\n\n        .description {\n          margin-top: 24px;\n          white-space: pre-wrap;\n        }\n\n        .header {\n          @apply --paper-font-title;\n        }\n\n        .attributes th {\n          text-align: left;\n        }\n\n        .attributes tr {\n          vertical-align: top;\n        }\n\n        .attributes tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #eee);\n        }\n\n        .attributes tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n\n        .attributes td:nth-child(3) {\n          white-space: pre-wrap;\n          word-break: break-word;\n        }\n\n        pre {\n          margin: 0;\n        }\n\n        h1 {\n          white-space: normal;\n        }\n\n        td {\n          padding: 4px;\n        }\n\n        .error {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <app-localstorage-document\n        key=\"panel-dev-service-state-domain-service\"\n        data=\"{{domainService}}\"\n      >\n      </app-localstorage-document>\n      <app-localstorage-document\n        key=\"[[_computeServicedataKey(domainService)]]\"\n        data=\"{{serviceData}}\"\n      >\n      </app-localstorage-document>\n\n      <div class=\"content\">\n        <p>\n          [[localize('ui.panel.developer-tools.tabs.services.description')]]\n        </p>\n\n        <div class=\"ha-form\">\n          <ha-service-picker\n            hass=\"[[hass]]\"\n            value=\"{{domainService}}\"\n          ></ha-service-picker>\n          <template is=\"dom-if\" if=\"[[_computeHasEntity(_attributes)]]\">\n            <ha-entity-picker\n              hass=\"[[hass]]\"\n              value=\"[[_computeEntityValue(parsedJSON)]]\"\n              on-change=\"_entityPicked\"\n              disabled=\"[[!validJSON]]\"\n              include-domains=\"[[_computeEntityDomainFilter(_domain)]]\"\n              allow-custom-entity\n            ></ha-entity-picker>\n          </template>\n          <p>[[localize('ui.panel.developer-tools.tabs.services.data')]]</p>\n          <ha-code-editor\n            mode=\"yaml\"\n            value=\"[[serviceData]]\"\n            error=\"[[!validJSON]]\"\n            on-value-changed=\"_yamlChanged\"\n          ></ha-code-editor>\n          <mwc-button on-click=\"_callService\" raised disabled=\"[[!validJSON]]\">\n            [[localize('ui.panel.developer-tools.tabs.services.call_service')]]\n          </mwc-button>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[!domainService]]\">\n          <h1>\n            [[localize('ui.panel.developer-tools.tabs.services.select_service')]]\n          </h1>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[domainService]]\">\n          <template is=\"dom-if\" if=\"[[!_description]]\">\n            <h1>\n              [[localize('ui.panel.developer-tools.tabs.services.no_description')]]\n            </h1>\n          </template>\n          <template is=\"dom-if\" if=\"[[_description]]\">\n            <h3>[[_description]]</h3>\n\n            <table class=\"attributes\">\n              <tr>\n                <th>\n                  [[localize('ui.panel.developer-tools.tabs.services.column_parameter')]]\n                </th>\n                <th>\n                  [[localize('ui.panel.developer-tools.tabs.services.column_description')]]\n                </th>\n                <th>\n                  [[localize('ui.panel.developer-tools.tabs.services.column_example')]]\n                </th>\n              </tr>\n              <template is=\"dom-if\" if=\"[[!_attributes.length]]\">\n                <tr>\n                  <td colspan=\"3\">\n                    [[localize('ui.panel.developer-tools.tabs.services.no_parameters')]]\n                  </td>\n                </tr>\n              </template>\n              <template is=\"dom-repeat\" items=\"[[_attributes]]\" as=\"attribute\">\n                <tr>\n                  <td><pre>[[attribute.key]]</pre></td>\n                  <td>[[attribute.description]]</td>\n                  <td>[[attribute.example]]</td>\n                </tr>\n              </template>\n            </table>\n\n            <template is=\"dom-if\" if=\"[[_attributes.length]]\">\n              <mwc-button on-click=\"_fillExampleData\">\n                [[localize('ui.panel.developer-tools.tabs.services.fill_example_data')]]\n              </mwc-button>\n            </template>\n          </template>\n        </template>\n      </div>\n    "]);

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












var ERROR_SENTINEL = {};
/*
 * @appliesMixin LocalizeMixin
 */

var HaPanelDevService =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPanelDevService, _LocalizeMixin);

  function HaPanelDevService() {
    _classCallCheck(this, HaPanelDevService);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelDevService).apply(this, arguments));
  }

  _createClass(HaPanelDevService, [{
    key: "_domainServiceChanged",
    value: function _domainServiceChanged() {
      this.serviceData = "";
    }
  }, {
    key: "_computeAttributesArray",
    value: function _computeAttributesArray(hass, domain, service) {
      var serviceDomains = hass.services;
      if (!(domain in serviceDomains)) return [];
      if (!(service in serviceDomains[domain])) return [];
      var fields = serviceDomains[domain][service].fields;
      return Object.keys(fields).map(function (field) {
        return Object.assign({
          key: field
        }, fields[field]);
      });
    }
  }, {
    key: "_computeDescription",
    value: function _computeDescription(hass, domain, service) {
      var serviceDomains = hass.services;
      if (!(domain in serviceDomains)) return undefined;
      if (!(service in serviceDomains[domain])) return undefined;
      return serviceDomains[domain][service].description;
    }
  }, {
    key: "_computeServicedataKey",
    value: function _computeServicedataKey(domainService) {
      return "panel-dev-service-state-servicedata.".concat(domainService);
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(domainService) {
      return domainService.split(".", 1)[0];
    }
  }, {
    key: "_computeService",
    value: function _computeService(domainService) {
      return domainService.split(".", 2)[1] || null;
    }
  }, {
    key: "_computeParsedServiceData",
    value: function _computeParsedServiceData(serviceData) {
      try {
        return serviceData.trim() ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(serviceData) : {};
      } catch (err) {
        return ERROR_SENTINEL;
      }
    }
  }, {
    key: "_computeValidJSON",
    value: function _computeValidJSON(parsedJSON) {
      return parsedJSON !== ERROR_SENTINEL;
    }
  }, {
    key: "_computeHasEntity",
    value: function _computeHasEntity(attributes) {
      return attributes.some(function (attr) {
        return attr.key === "entity_id";
      });
    }
  }, {
    key: "_computeEntityValue",
    value: function _computeEntityValue(parsedJSON) {
      return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
    }
  }, {
    key: "_computeEntityDomainFilter",
    value: function _computeEntityDomainFilter(domain) {
      return _data_entity__WEBPACK_IMPORTED_MODULE_4__["ENTITY_COMPONENT_DOMAINS"].includes(domain) ? [domain] : null;
    }
  }, {
    key: "_callService",
    value: function _callService() {
      if (this.parsedJSON === ERROR_SENTINEL) {
        // eslint-disable-next-line
        alert(this.hass.localize("ui.panel.developer-tools.tabs.services.alert_parsing_yaml", "data", this.serviceData));
        return;
      }

      this.hass.callService(this._domain, this._service, this.parsedJSON);
    }
  }, {
    key: "_fillExampleData",
    value: function _fillExampleData() {
      var example = {};

      this._attributes.forEach(function (attribute) {
        if (attribute.example) {
          var value = "";

          try {
            value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(attribute.example);
          } catch (err) {
            value = attribute.example;
          }

          example[attribute.key] = value;
        }
      });

      this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(example);
    }
  }, {
    key: "_entityPicked",
    value: function _entityPicked(ev) {
      this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(Object.assign({}, this.parsedJSON, {
        entity_id: ev.target.value
      }));
    }
  }, {
    key: "_yamlChanged",
    value: function _yamlChanged(ev) {
      this.serviceData = ev.detail.value;
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
        domainService: {
          type: String,
          observer: "_domainServiceChanged"
        },
        _domain: {
          type: String,
          computed: "_computeDomain(domainService)"
        },
        _service: {
          type: String,
          computed: "_computeService(domainService)"
        },
        serviceData: {
          type: String,
          value: ""
        },
        parsedJSON: {
          type: Object,
          computed: "_computeParsedServiceData(serviceData)"
        },
        validJSON: {
          type: Boolean,
          computed: "_computeValidJSON(parsedJSON)"
        },
        _attributes: {
          type: Array,
          computed: "_computeAttributesArray(hass, _domain, _service)"
        },
        _description: {
          type: String,
          computed: "_computeDescription(hass, _domain, _service)"
        }
      };
    }
  }]);

  return HaPanelDevService;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("developer-tools-service", HaPanelDevService);

/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */

/* eslint-disable */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */

Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],
  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: "__computeStorage(sessionOnly)"
    }
  },
  observers: ["__storageSourceChanged(storage, key)"],
  attached: function attached() {
    this.listen(window, "storage", "__onStorage");
    this.listen(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },
  detached: function detached() {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function saveValue(key) {
    try {
      this.__setStorageValue(
      /*{@type if (key ty){String}}*/
      key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key =
    /** @type {String} */
    key;
    return Promise.resolve();
  },
  reset: function reset() {
    this.key = null;
    this.data = this.zeroValue;
  },
  destroy: function destroy() {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },
  getStoredValue: function getStoredValue(path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },
  setStoredValue: function setStoredValue(path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },
  __computeStorage: function __computeStorage(sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },
  __storageSourceChanged: function __storageSourceChanged(storage, key) {
    this._initializeStoredValue();
  },
  __onStorage: function __onStorage(event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", this.__parseValueFromStorage());
    });
  },
  __onAppLocalStorageChanged: function __onAppLocalStorageChanged(event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", event.detail.data);
    });
  },
  __parseValueFromStorage: function __parseValueFromStorage() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },
  __setStorageValue: function __setStorageValue(key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVOQVZBSUxBQkxFID0gXCJ1bmF2YWlsYWJsZVwiO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TID0gW1xuICBcImFpcl9xdWFsaXR5XCIsXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImFsZXJ0XCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJjYWxlbmRhclwiLFxuICBcImNhbWVyYVwiLFxuICBcImNvdW50ZXJcIixcbiAgXCJjb3ZlclwiLFxuICBcImRvbWlub3NcIixcbiAgXCJmYW5cIixcbiAgXCJnZW9fbG9jYXRpb25cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbWFnZV9wcm9jZXNzaW5nXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1haWxib3hcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJwZXJzb25cIixcbiAgXCJwbGFudFwiLFxuICBcInJlbWVtYmVyX3RoZV9taWxrXCIsXG4gIFwicmVtb3RlXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJ0aW1lclwiLFxuICBcInV0aWxpdHlfbWV0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwid2lua1wiLFxuICBcInpoYVwiLFxuICBcInp3YXZlXCIsXG5dO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IHsgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBFUlJPUl9TRU5USU5FTCA9IHt9O1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVBhbmVsRGV2U2VydmljZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYS1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdGgge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0ciB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1hbHRlcm5hdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yLCAjZWVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwicGFuZWwtZGV2LXNlcnZpY2Utc3RhdGUtZG9tYWluLXNlcnZpY2VcIlxuICAgICAgICBkYXRhPVwie3tkb21haW5TZXJ2aWNlfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwiW1tfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpXV1cIlxuICAgICAgICBkYXRhPVwie3tzZXJ2aWNlRGF0YX19XCJcbiAgICAgID5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMuZGVzY3JpcHRpb24nKV1dXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGEtZm9ybVwiPlxuICAgICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tkb21haW5TZXJ2aWNlfX1cIlxuICAgICAgICAgID48L2hhLXNlcnZpY2UtcGlja2VyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZUhhc0VudGl0eShfYXR0cmlidXRlcyldXVwiPlxuICAgICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJbW19jb21wdXRlRW50aXR5VmFsdWUocGFyc2VkSlNPTildXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9lbnRpdHlQaWNrZWRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgICAgaW5jbHVkZS1kb21haW5zPVwiW1tfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihfZG9tYWluKV1dXCJcbiAgICAgICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxwPltbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmRhdGEnKV1dPC9wPlxuICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgdmFsdWU9XCJbW3NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgZXJyb3I9XCJbWyF2YWxpZEpTT05dXVwiXG4gICAgICAgICAgICBvbi12YWx1ZS1jaGFuZ2VkPVwiX3lhbWxDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1jb2RlLWVkaXRvcj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiIHJhaXNlZCBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jYWxsX3NlcnZpY2UnKV1dXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLnNlbGVjdF9zZXJ2aWNlJyldXVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2Rlc2NyaXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMubm9fZGVzY3JpcHRpb24nKV1dXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19kZXNjcmlwdGlvbl1dXCI+XG4gICAgICAgICAgICA8aDM+W1tfZGVzY3JpcHRpb25dXTwvaDM+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImF0dHJpYnV0ZXNcIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmNvbHVtbl9wYXJhbWV0ZXInKV1dXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jb2x1bW5fZGVzY3JpcHRpb24nKV1dXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jb2x1bW5fZXhhbXBsZScpXV1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9hdHRyaWJ1dGVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLm5vX3BhcmFtZXRlcnMnKV1dXG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2F0dHJpYnV0ZXNdXVwiIGFzPVwiYXR0cmlidXRlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPjxwcmU+W1thdHRyaWJ1dGUua2V5XV08L3ByZT48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmRlc2NyaXB0aW9uXV08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmV4YW1wbGVdXTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfYXR0cmlidXRlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9maWxsRXhhbXBsZURhdGFcIj5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5maWxsX2V4YW1wbGVfZGF0YScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBkb21haW5TZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2RvbWFpblNlcnZpY2VDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVTZXJ2aWNlKGRvbWFpblNlcnZpY2UpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkSlNPTjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUGFyc2VkU2VydmljZURhdGEoc2VydmljZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICB2YWxpZEpTT046IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTilcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUF0dHJpYnV0ZXNBcnJheShoYXNzLCBfZG9tYWluLCBfc2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRGVzY3JpcHRpb24oaGFzcywgX2RvbWFpbiwgX3NlcnZpY2UpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfZG9tYWluU2VydmljZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZXNBcnJheShoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IGhhc3Muc2VydmljZXM7XG4gICAgaWYgKCEoZG9tYWluIGluIHNlcnZpY2VEb21haW5zKSkgcmV0dXJuIFtdO1xuICAgIGlmICghKHNlcnZpY2UgaW4gc2VydmljZURvbWFpbnNbZG9tYWluXSkpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGZpZWxkcyA9IHNlcnZpY2VEb21haW5zW2RvbWFpbl1bc2VydmljZV0uZmllbGRzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHMpLm1hcChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgcmV0dXJuIHsga2V5OiBmaWVsZCwgLi4uZmllbGRzW2ZpZWxkXSB9O1xuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IGhhc3Muc2VydmljZXM7XG4gICAgaWYgKCEoZG9tYWluIGluIHNlcnZpY2VEb21haW5zKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIShzZXJ2aWNlIGluIHNlcnZpY2VEb21haW5zW2RvbWFpbl0pKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzZXJ2aWNlRG9tYWluc1tkb21haW5dW3NlcnZpY2VdLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgX2NvbXB1dGVTZXJ2aWNlZGF0YUtleShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGBwYW5lbC1kZXYtc2VydmljZS1zdGF0ZS1zZXJ2aWNlZGF0YS4ke2RvbWFpblNlcnZpY2V9YDtcbiAgfVxuXG4gIF9jb21wdXRlRG9tYWluKGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gZG9tYWluU2VydmljZS5zcGxpdChcIi5cIiwgMSlbMF07XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAyKVsxXSB8fCBudWxsO1xuICB9XG5cbiAgX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc2VydmljZURhdGEudHJpbSgpID8gc2FmZUxvYWQoc2VydmljZURhdGEpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF9jb21wdXRlSGFzRW50aXR5KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiBhdHRyLmtleSA9PT0gXCJlbnRpdHlfaWRcIik7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwgPyBcIlwiIDogcGFyc2VkSlNPTi5lbnRpdHlfaWQ7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihkb21haW4pIHtcbiAgICByZXR1cm4gRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TLmluY2x1ZGVzKGRvbWFpbikgPyBbZG9tYWluXSA6IG51bGw7XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoKSB7XG4gICAgaWYgKHRoaXMucGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgYWxlcnQoXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmFsZXJ0X3BhcnNpbmdfeWFtbFwiLFxuICAgICAgICAgIFwiZGF0YVwiLFxuICAgICAgICAgIHRoaXMuc2VydmljZURhdGFcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5fZG9tYWluLCB0aGlzLl9zZXJ2aWNlLCB0aGlzLnBhcnNlZEpTT04pO1xuICB9XG5cbiAgX2ZpbGxFeGFtcGxlRGF0YSgpIHtcbiAgICBjb25zdCBleGFtcGxlID0ge307XG4gICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChhdHRyaWJ1dGUuZXhhbXBsZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbHVlID0gc2FmZUxvYWQoYXR0cmlidXRlLmV4YW1wbGUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZS5leGFtcGxlO1xuICAgICAgICB9XG4gICAgICAgIGV4YW1wbGVbYXR0cmlidXRlLmtleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gc2FmZUR1bXAoZXhhbXBsZSk7XG4gIH1cblxuICBfZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IHNhZmVEdW1wKHtcbiAgICAgIC4uLnRoaXMucGFyc2VkSlNPTixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgX3lhbWxDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtc2VydmljZVwiLCBIYVBhbmVsRGV2U2VydmljZSk7XG4iLCIvKiBGb3JrZWQgYmVjYXVzZSBpdCBjb250YWluZWQgYW4gaW1wb3J0Lm1ldGEgd2hpY2ggd2VicGFjayBkb2Vzbid0IHN1cHBvcnQuICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCB7IEFwcFN0b3JhZ2VCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9hcHAtc3RvcmFnZS9hcHAtc3RvcmFnZS1iZWhhdmlvclwiO1xuaW1wb3J0IHsgUG9seW1lciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeVwiO1xuXG4vKipcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgc3luY2hyb25pemVzIHN0b3JhZ2UgYmV0d2VlbiBhbiBpbi1tZW1vcnlcbiAqIHZhbHVlIGFuZCBhIGxvY2F0aW9uIGluIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlIHN5c3RlbS5cbiAqXG4gKiBsb2NhbFN0b3JhZ2UgaXMgYSBzaW1wbGUgYW5kIHdpZGVseSBzdXBwb3J0ZWQgc3RvcmFnZSBBUEkgdGhhdCBwcm92aWRlcyBib3RoXG4gKiBwZXJtYW5lbnQgYW5kIHNlc3Npb24tYmFzZWQgc3RvcmFnZSBvcHRpb25zLiBVc2luZyBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gKiB5b3UgY2FuIGVhc2lseSBpbnRlZ3JhdGUgbG9jYWxTdG9yYWdlIGludG8geW91ciBhcHAgdmlhIG5vcm1hbCBQb2x5bWVyXG4gKiBkYXRhYmluZGluZy5cbiAqXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGlzIHRoZSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgYW4gZWxlbWVudFxuICogdGhhdCB1c2VzIGBBcHBTdG9yYWdlQmVoYXZpb3JgLiBSZWFkaW5nIGl0cyBjb2RlIGlzIGEgZ29vZCB3YXkgdG8gZ2V0XG4gKiBzdGFydGVkIHdyaXRpbmcgeW91ciBvd24gc3RvcmFnZSBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGUgdXNlOlxuICpcbiAqICAgICA8cGFwZXItaW5wdXQgdmFsdWU9XCJ7e3NlYXJjaH19XCI+PC9wYXBlci1pbnB1dD5cbiAqICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBrZXk9XCJzZWFyY2hcIiBkYXRhPVwie3tzZWFyY2h9fVwiPlxuICogICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAqXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGF1dG9tYXRpY2FsbHkgc3luY2hyb25pemVzIGNoYW5nZXMgdG8gdGhlXG4gKiBzYW1lIGtleSBhY3Jvc3MgbXVsdGlwbGUgdGFicy5cbiAqXG4gKiBPbmx5IHN1cHBvcnRzIHN0b3JpbmcgSlNPTi1zZXJpYWxpemFibGUgdmFsdWVzLlxuICovXG5Qb2x5bWVyKHtcbiAgaXM6IFwiYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiLFxuICBiZWhhdmlvcnM6IFtBcHBTdG9yYWdlQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsb2dpY2FsIGxvY2F0aW9uIHRvIHN0b3JlIHRoZSBkYXRhLlxuICAgICAqXG4gICAgICogQHR5cGV7U3RyaW5nfVxuICAgICAqL1xuICAgIGtleTogeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGRhdGEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNsZWFyZWQgZnJvbSBzdG9yYWdlIHdoZW5cbiAgICAgKiB0aGUgcGFnZSBzZXNzaW9uIGVuZHMgKGkuZS4gd2hlbiB0aGUgdXNlciBoYXMgbmF2aWdhdGVkIGF3YXkgZnJvbVxuICAgICAqIHRoZSBwYWdlKS5cbiAgICAgKi9cbiAgICBzZXNzaW9uT25seTogeyB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UgfSxcblxuICAgIC8qKlxuICAgICAqIEVpdGhlciBgd2luZG93LmxvY2FsU3RvcmFnZWAgb3IgYHdpbmRvdy5zZXNzaW9uU3RvcmFnZWAsIGRlcGVuZGluZyBvblxuICAgICAqIGB0aGlzLnNlc3Npb25Pbmx5YC5cbiAgICAgKi9cbiAgICBzdG9yYWdlOiB7IHR5cGU6IE9iamVjdCwgY29tcHV0ZWQ6IFwiX19jb21wdXRlU3RvcmFnZShzZXNzaW9uT25seSlcIiB9LFxuICB9LFxuXG4gIG9ic2VydmVyczogW1wiX19zdG9yYWdlU291cmNlQ2hhbmdlZChzdG9yYWdlLCBrZXkpXCJdLFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xuICAgIHRoaXMubGlzdGVuKFxuICAgICAgd2luZG93LnRvcCxcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxuICAgICAgXCJfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZFwiXG4gICAgKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51bmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xuICAgIHRoaXMudW5saXN0ZW4oXG4gICAgICB3aW5kb3cudG9wLFxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcbiAgICApO1xuICB9LFxuXG4gIGdldCBpc05ldygpIHtcbiAgICByZXR1cm4gIXRoaXMua2V5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4ga2V5LCBhbmQgaWYgc3VjY2Vzc2Z1bCwgdXBkYXRlcyB0aGlzLmtleS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBrZXkgVGhlIG5ldyBrZXkgdG8gdXNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgc2F2ZVZhbHVlOiBmdW5jdGlvbihrZXkpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX3NldFN0b3JhZ2VWYWx1ZSgvKntAdHlwZSBpZiAoa2V5IHR5KXtTdHJpbmd9fSovIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSAvKiogQHR5cGUge1N0cmluZ30gKi8gKGtleSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnplcm9WYWx1ZTtcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAodGhpcy5rZXkgIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KHBhdGgsIHsgZGF0YTogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKHRoaXMua2V5LCB0aGlzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlyZShcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIiwgdGhpcywgeyBub2RlOiB3aW5kb3cudG9wIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIF9fY29tcHV0ZVN0b3JhZ2U6IGZ1bmN0aW9uKHNlc3Npb25Pbmx5KSB7XG4gICAgcmV0dXJuIHNlc3Npb25Pbmx5ID8gd2luZG93LnNlc3Npb25TdG9yYWdlIDogd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSxcblxuICBfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkOiBmdW5jdGlvbihzdG9yYWdlLCBrZXkpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RvcmVkVmFsdWUoKTtcbiAgfSxcblxuICBfX29uU3RvcmFnZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSB0aGlzLmtleSB8fCBldmVudC5zdG9yYWdlQXJlYSAhPT0gdGhpcy5zdG9yYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldChcImRhdGFcIiwgdGhpcy5fX3BhcnNlVmFsdWVGcm9tU3RvcmFnZSgpKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5kZXRhaWwgPT09IHRoaXMgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5rZXkgIT09IHRoaXMua2V5IHx8XG4gICAgICBldmVudC5kZXRhaWwuc3RvcmFnZSAhPT0gdGhpcy5zdG9yYWdlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXQoXCJkYXRhXCIsIGV2ZW50LmRldGFpbC5kYXRhKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX3BhcnNlVmFsdWVGcm9tU3RvcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSB2YWx1ZSBmcm9tIHN0b3JhZ2UgZm9yXCIsIHRoaXMua2V5KTtcbiAgICB9XG4gIH0sXG5cbiAgX19zZXRTdG9yYWdlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB2YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9LFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBc05BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF4VEE7QUFDQTtBQWtLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4Q0E7QUE2Q0E7Ozs7QUFwTkE7QUFDQTtBQTJUQTs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==