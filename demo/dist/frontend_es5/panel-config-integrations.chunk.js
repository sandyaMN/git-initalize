(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-integrations"],{

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

 // Not duplicate, this is for typing.
// tslint:disable-next-line


var HaIconNext =
/*#__PURE__*/
function (_HaIcon) {
  _inherits(HaIconNext, _HaIcon);

  function HaIconNext() {
    _classCallCheck(this, HaIconNext);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaIconNext).apply(this, arguments));
  }

  _createClass(HaIconNext, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaIconNext.prototype), "connectedCallback", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        _this.icon = window.getComputedStyle(_this).direction === "ltr" ? "hass:chevron-right" : "hass:chevron-left";
      }, 100);
    }
  }]);

  return HaIconNext;
}(_ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"]);
customElements.define("ha-icon-next", HaIconNext);

/***/ }),

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");


var createConfigFlow = function createConfigFlow(hass, handler) {
  return hass.callApi("POST", "config/config_entries/flow", {
    handler: handler
  });
};
var fetchConfigFlow = function fetchConfigFlow(hass, flowId) {
  return hass.callApi("GET", "config/config_entries/flow/".concat(flowId));
};
var handleConfigFlowStep = function handleConfigFlowStep(hass, flowId, data) {
  return hass.callApi("POST", "config/config_entries/flow/".concat(flowId), data);
};
var deleteConfigFlow = function deleteConfigFlow(hass, flowId) {
  return hass.callApi("DELETE", "config/config_entries/flow/".concat(flowId));
};
var getConfigFlowHandlers = function getConfigFlowHandlers(hass) {
  return hass.callApi("GET", "config/config_entries/flow_handlers");
};

var fetchConfigFlowInProgress = function fetchConfigFlowInProgress(conn) {
  return conn.sendMessagePromise({
    type: "config_entries/flow/progress"
  });
};

var subscribeConfigFlowInProgressUpdates = function subscribeConfigFlowInProgressUpdates(conn, store) {
  return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () {
    return fetchConfigFlowInProgress(conn).then(function (flows) {
      return store.setState(flows, true);
    });
  }, 500, true), "config_entry_discovered");
};

var getConfigFlowInProgressCollection = function getConfigFlowInProgressCollection(conn) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
};
var subscribeConfigFlowInProgress = function subscribeConfigFlowInProgress(hass, onChange) {
  return getConfigFlowInProgressCollection(hass.connection).subscribe(onChange);
};
var localizeConfigFlowTitle = function localizeConfigFlowTitle(localize, flow) {
  var placeholders = flow.context.title_placeholders || {};
  var placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return localize("component.".concat(flow.handler, ".config.title"));
  }

  var args = [];
  placeholderKeys.forEach(function (key) {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize.apply(void 0, ["component.".concat(flow.handler, ".config.flow_title")].concat(args));
};

/***/ }),

/***/ "./src/data/options_flow.ts":
/*!**********************************!*\
  !*** ./src/data/options_flow.ts ***!
  \**********************************/
/*! exports provided: createOptionsFlow, fetchOptionsFlow, handleOptionsFlowStep, deleteOptionsFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptionsFlow", function() { return createOptionsFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOptionsFlow", function() { return fetchOptionsFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOptionsFlowStep", function() { return handleOptionsFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOptionsFlow", function() { return deleteOptionsFlow; });
var createOptionsFlow = function createOptionsFlow(hass, handler) {
  return hass.callApi("POST", "config/config_entries/options/flow", {
    handler: handler
  });
};
var fetchOptionsFlow = function fetchOptionsFlow(hass, flowId) {
  return hass.callApi("GET", "config/config_entries/options/flow/".concat(flowId));
};
var handleOptionsFlowStep = function handleOptionsFlowStep(hass, flowId, data) {
  return hass.callApi("POST", "config/config_entries/options/flow/".concat(flowId), data);
};
var deleteOptionsFlow = function deleteOptionsFlow(hass, flowId) {
  return hass.callApi("DELETE", "config/config_entries/options/flow/".concat(flowId));
};

/***/ }),

/***/ "./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts":
/*!********************************************************************************************!*\
  !*** ./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts ***!
  \********************************************************************************************/
/*! exports provided: loadConfigEntrySystemOptionsDialog, showConfigEntrySystemOptionsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigEntrySystemOptionsDialog", function() { return loadConfigEntrySystemOptionsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigEntrySystemOptionsDialog", function() { return showConfigEntrySystemOptionsDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadConfigEntrySystemOptionsDialog = function loadConfigEntrySystemOptionsDialog() {
  return Promise.all(/*! import() | config-entry-system-options */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~config-entry-system-options"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("config-entry-system-options")]).then(__webpack_require__.bind(null, /*! ./dialog-config-entry-system-options */ "./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts"));
};
var showConfigEntrySystemOptionsDialog = function showConfigEntrySystemOptionsDialog(element, systemLogDetailParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-config-entry-system-options",
    dialogImport: loadConfigEntrySystemOptionsDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        ", "\n        <p>\n          ", "\n        </p>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        <p>\n          ", "\n        </p>\n        ", "\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
var showConfigFlowDialog = function showConfigFlowDialog(element, dialogParams) {
  return Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, dialogParams, {
    loadDevicesAndAreas: true,
    getFlowHandlers: function getFlowHandlers(hass) {
      return Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_0__["getConfigFlowHandlers"])(hass).then(function (handlers) {
        return handlers.sort(function (handlerA, handlerB) {
          return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["caseInsensitiveCompare"])(hass.localize("component.".concat(handlerA, ".config.title")), hass.localize("component.".concat(handlerB, ".config.title")));
        });
      });
    },
    createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["createConfigFlow"],
    fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["fetchConfigFlow"],
    handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["handleConfigFlowStep"],
    deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["deleteConfigFlow"],
    renderAbortDescription: function renderAbortDescription(hass, step) {
      var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, "component.".concat(step.handler, ".config.abort.").concat(step.reason), step.description_placeholders);
      return description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), description) : "";
    },
    renderShowFormStepHeader: function renderShowFormStepHeader(hass, step) {
      return hass.localize("component.".concat(step.handler, ".config.step.").concat(step.step_id, ".title"));
    },
    renderShowFormStepDescription: function renderShowFormStepDescription(hass, step) {
      var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, "component.".concat(step.handler, ".config.step.").concat(step.step_id, ".description"), step.description_placeholders);
      return description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2(), description) : "";
    },
    renderShowFormStepFieldLabel: function renderShowFormStepFieldLabel(hass, step, field) {
      return hass.localize("component.".concat(step.handler, ".config.step.").concat(step.step_id, ".data.").concat(field.name));
    },
    renderShowFormStepFieldError: function renderShowFormStepFieldError(hass, step, error) {
      return hass.localize("component.".concat(step.handler, ".config.error.").concat(error));
    },
    renderExternalStepHeader: function renderExternalStepHeader(hass, step) {
      return hass.localize("component.".concat(step.handler, ".config.step.").concat(step.step_id, ".title"));
    },
    renderExternalStepDescription: function renderExternalStepDescription(hass, step) {
      var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, "component.".concat(step.handler, ".config.").concat(step.step_id, ".description"), step.description_placeholders);
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject3(), hass.localize("ui.panel.config.integrations.config_flow.external_step.description"), description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject4(), description) : "");
    },
    renderCreateEntryDescription: function renderCreateEntryDescription(hass, step) {
      var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, "component.".concat(step.handler, ".config.create_entry.").concat(step.description || "default"), step.description_placeholders);
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject5(), description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject6(), description) : "", hass.localize("ui.panel.config.integrations.config_flow.created_config", "name", step.title));
    }
  });
};

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadDataEntryFlowDialog = function loadDataEntryFlowDialog() {
  return Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(6), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e(12), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
};
var showFlowDialog = function showFlowDialog(element, dialogParams, flowConfig) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-data-entry-flow",
    dialogImport: loadDataEntryFlowDialog,
    dialogParams: Object.assign({}, dialogParams, {
      flowConfig: flowConfig
    })
  });
};

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-options-flow.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-options-flow.ts ***!
  \*************************************************************/
/*! exports provided: loadOptionsFlowDialog, showOptionsFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptionsFlowDialog", function() { return loadOptionsFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsFlowDialog", function() { return showOptionsFlowDialog; });
/* harmony import */ var _data_options_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/options_flow */ "./src/data/options_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          <p>", "</p>\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var loadOptionsFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
var showOptionsFlowDialog = function showOptionsFlowDialog(element, configEntry) {
  return Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, {
    startFlowHandler: configEntry.entry_id
  }, {
    loadDevicesAndAreas: false,
    createFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["createOptionsFlow"],
    fetchFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["fetchOptionsFlow"],
    handleFlowStep: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["handleOptionsFlowStep"],
    deleteFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["deleteOptionsFlow"],
    renderAbortDescription: function renderAbortDescription(hass, step) {
      var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, "component.".concat(configEntry.domain, ".options.abort.").concat(step.reason), step.description_placeholders);
      return description ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), description) : "";
    },
    renderShowFormStepHeader: function renderShowFormStepHeader(hass, _step) {
      return hass.localize("ui.dialogs.options_flow.form.header");
    },
    renderShowFormStepDescription: function renderShowFormStepDescription(_hass, _step) {
      return "";
    },
    renderShowFormStepFieldLabel: function renderShowFormStepFieldLabel(hass, step, field) {
      return hass.localize("component.".concat(configEntry.domain, ".options.step.").concat(step.step_id, ".data.").concat(field.name));
    },
    renderShowFormStepFieldError: function renderShowFormStepFieldError(hass, _step, error) {
      return hass.localize("component.".concat(configEntry.domain, ".options.error.").concat(error));
    },
    renderExternalStepHeader: function renderExternalStepHeader(_hass, _step) {
      return "";
    },
    renderExternalStepDescription: function renderExternalStepDescription(_hass, _step) {
      return "";
    },
    renderCreateEntryDescription: function renderCreateEntryDescription(hass, _step) {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2(), hass.localize("ui.dialogs.options_flow.success.description"));
    }
  });
};

/***/ }),

/***/ "./src/dialogs/confirmation/show-dialog-confirmation.ts":
/*!**************************************************************!*\
  !*** ./src/dialogs/confirmation/show-dialog-confirmation.ts ***!
  \**************************************************************/
/*! exports provided: loadConfirmationDialog, showConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfirmationDialog", function() { return loadConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadConfirmationDialog = function loadConfirmationDialog() {
  return Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-confirmation */ "./src/dialogs/confirmation/dialog-confirmation.ts"));
};
var showConfirmationDialog = function showConfirmationDialog(element, systemLogDetailParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-confirmation",
    dialogImport: loadConfirmationDialog,
    dialogParams: systemLogDetailParams
  });
};

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

/***/ "./src/panels/config/integrations/config-entry/ha-ce-entities-card.js":
/*!****************************************************************************!*\
  !*** ./src/panels/config/integrations/config-entry/ha-ce-entities-card.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/entity_registry */ "./src/data/entity_registry.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-card {\n          margin-top: 8px;\n          padding-bottom: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n      </style>\n      <ha-card header=\"[[heading]]\">\n        <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"entity\">\n          <paper-icon-item on-click=\"_openMoreInfo\">\n            <state-badge\n              state-obj=\"[[_computeStateObj(entity, hass)]]\"\n              slot=\"item-icon\"\n            ></state-badge>\n            <paper-item-body>\n              <div class=\"name\">[[_computeEntityName(entity, hass)]]</div>\n              <div class=\"secondary entity-id\">[[entity.entity_id]]</div>\n            </paper-item-body>\n          </paper-icon-item>\n        </template>\n      </ha-card>\n    "]);

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
 * @appliesMixin LocalizeMixIn
 * @appliesMixin EventsMixin
 */

var HaCeEntitiesCard =
/*#__PURE__*/
function (_LocalizeMixIn) {
  _inherits(HaCeEntitiesCard, _LocalizeMixIn);

  function HaCeEntitiesCard() {
    _classCallCheck(this, HaCeEntitiesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCeEntitiesCard).apply(this, arguments));
  }

  _createClass(HaCeEntitiesCard, [{
    key: "_computeStateObj",
    value: function _computeStateObj(entity, hass) {
      return hass.states[entity.entity_id];
    }
  }, {
    key: "_computeEntityName",
    value: function _computeEntityName(entity, hass) {
      return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["computeEntityRegistryName"])(hass, entity) || "(".concat(this.localize("ui.panel.config.integrations.config_entry.entity_unavailable"), ")");
    }
  }, {
    key: "_openMoreInfo",
    value: function _openMoreInfo(ev) {
      this.fire("hass-more-info", {
        entityId: ev.model.entity.entity_id
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
        heading: String,
        entities: Array,
        hass: Object
      };
    }
  }]);

  return HaCeEntitiesCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-ce-entities-card", HaCeEntitiesCard);

/***/ }),

/***/ "./src/panels/config/integrations/config-entry/ha-config-entry-page.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/config/integrations/config-entry/ha-config-entry-page.ts ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _devices_ha_devices_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../devices/ha-devices-data-table */ "./src/panels/config/devices/ha-devices-data-table.ts");
/* harmony import */ var _ha_ce_entities_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-ce-entities-card */ "./src/panels/config/integrations/config-entry/ha-ce-entities-card.js");
/* harmony import */ var _dialogs_config_flow_show_dialog_options_flow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../dialogs/config-flow/show-dialog-options-flow */ "./src/dialogs/config-flow/show-dialog-options-flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _dialogs_config_entry_system_options_show_dialog_config_entry_system_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../dialogs/config-entry-system-options/show-dialog-config-entry-system-options */ "./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts");
/* harmony import */ var _dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../dialogs/confirmation/show-dialog-confirmation */ "./src/dialogs/confirmation/show-dialog-confirmation.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      .content {\n        padding: 4px;\n      }\n      p {\n        text-align: center;\n      }\n      ha-devices-data-table {\n        width: 100%;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <ha-ce-entities-card\n                  .heading=", "\n                  .entities=", "\n                  .hass=", "\n                  .narrow=", "\n                ></ha-ce-entities-card>\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                <ha-devices-data-table\n                  .hass=", "\n                  .narrow=", "\n                  .devices=", "\n                  .entries=", "\n                  .entities=", "\n                  .areas=", "\n                ></ha-devices-data-table>\n              "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <p>\n                  ", "\n                </p>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <paper-icon-button\n                slot=\"toolbar-icon\"\n                icon=\"hass:settings\"\n                @click=", "\n                title=", "\n              ></paper-icon-button>\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <hass-subpage .header=", ">\n        ", "\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:message-settings-variant\"\n          title=", "\n          @click=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:delete\"\n          title=", "\n          @click=", "\n        ></paper-icon-button>\n\n        <div class=\"content\">\n          ", "\n          ", "\n        </div>\n      </hass-subpage>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <hass-error-screen\n          error=\"", "\"\n        ></hass-error-screen>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var HaConfigEntryPage = _decorate(null, function (_initialize, _LitElement) {
  var HaConfigEntryPage =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaConfigEntryPage, _LitElement2);

    function HaConfigEntryPage() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaConfigEntryPage);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaConfigEntryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaConfigEntryPage;
  }(_LitElement);

  return {
    F: HaConfigEntryPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "configEntryId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "configEntries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "entityRegistryEntries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "deviceRegistryEntries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "areas",
      value: void 0
    }, {
      kind: "get",
      key: "_configEntry",
      value: function _configEntry() {
        var _this2 = this;

        return this.configEntries ? this.configEntries.find(function (entry) {
          return entry.entry_id === _this2.configEntryId;
        }) : undefined;
      }
    }, {
      kind: "field",
      key: "_computeConfigEntryDevices",
      value: function value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function (configEntry, devices) {
          if (!devices) {
            return [];
          }

          return devices.filter(function (device) {
            return device.config_entries.includes(configEntry.entry_id);
          });
        });
      }
    }, {
      kind: "field",
      key: "_computeNoDeviceEntities",
      value: function value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function (configEntry, entities) {
          if (!entities) {
            return [];
          }

          return entities.filter(function (ent) {
            return !ent.device_id && ent.config_entry_id === configEntry.entry_id;
          });
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var configEntry = this._configEntry;

        if (!configEntry) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject(), this.hass.localize("ui.panel.config.integrations.integration_not_found"));
        }

        var configEntryDevices = this._computeConfigEntryDevices(configEntry, this.deviceRegistryEntries);

        var noDeviceEntities = this._computeNoDeviceEntities(configEntry, this.entityRegistryEntries);

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject2(), configEntry.title, configEntry.supports_options ? Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject3(), this._showSettings, this.hass.localize("ui.panel.config.integrations.config_entry.settings_button", "integration", configEntry.title)) : "", this.hass.localize("ui.panel.config.integrations.config_entry.system_options_button", "integration", configEntry.title), this._showSystemOptions, this.hass.localize("ui.panel.config.integrations.config_entry.delete_button", "integration", configEntry.title), this._confirmRemoveEntry, configEntryDevices.length === 0 && noDeviceEntities.length === 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject4(), this.hass.localize("ui.panel.config.integrations.config_entry.no_devices")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject5(), this.hass, this.narrow, configEntryDevices, this.configEntries, this.entityRegistryEntries, this.areas), noDeviceEntities.length > 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject6(), this.hass.localize("ui.panel.config.integrations.config_entry.no_device"), noDeviceEntities, this.hass, this.narrow) : "");
      }
    }, {
      kind: "method",
      key: "_showSettings",
      value: function _showSettings() {
        Object(_dialogs_config_flow_show_dialog_options_flow__WEBPACK_IMPORTED_MODULE_5__["showOptionsFlowDialog"])(this, this._configEntry);
      }
    }, {
      kind: "method",
      key: "_showSystemOptions",
      value: function _showSystemOptions() {
        Object(_dialogs_config_entry_system_options_show_dialog_config_entry_system_options__WEBPACK_IMPORTED_MODULE_10__["showConfigEntrySystemOptionsDialog"])(this, {
          entry: this._configEntry
        });
      }
    }, {
      kind: "method",
      key: "_confirmRemoveEntry",
      value: function _confirmRemoveEntry() {
        var _this3 = this;

        Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_11__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.config.integrations.config_entry.delete_confirm"),
          confirm: function confirm() {
            return _this3._removeEntry();
          }
        });
      }
    }, {
      kind: "method",
      key: "_removeEntry",
      value: function _removeEntry() {
        var _this4 = this;

        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_8__["deleteConfigEntry"])(this.hass, this.configEntryId).then(function (result) {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(_this4, "hass-reload-entries");

          if (result.require_restart) {
            alert(_this4.hass.localize("ui.panel.config.integrations.config_entry.restart_confirm"));
          }

          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(_this4, "/config/integrations/dashboard", true);
        });
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject7());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

customElements.define("ha-config-entry-page", HaConfigEntryPage);

/***/ }),

/***/ "./src/panels/config/integrations/ha-config-entries-dashboard.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entries-dashboard.ts ***!
  \***********************************************************************/
/*! exports provided: HaConfigManagerDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigManagerDashboard", function() { return HaConfigManagerDashboard; });
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ha-card {\n        overflow: hidden;\n      }\n      mwc-button {\n        top: 3px;\n        margin-right: -0.57em;\n      }\n      .config-entry-row {\n        display: flex;\n        padding: 0 16px;\n      }\n      ha-icon {\n        cursor: pointer;\n        margin: 8px;\n      }\n      .configured a {\n        color: var(--primary-text-color);\n        text-decoration: none;\n      }\n      ha-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      ha-fab[rtl] {\n        right: auto;\n        left: 16px;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"config-entry-row\">\n                    <paper-item-body two-line>\n                      <div>\n                        ", "\n                      </div>\n                    </paper-item-body>\n                  </div>\n                "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                                <span>\n                                  <ha-state-icon\n                                    .stateObj=", "\n                                  ></ha-state-icon>\n                                  <paper-tooltip position=\"bottom\"\n                                    >", "</paper-tooltip\n                                  >\n                                </span>\n                              "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                    <a\n                      href=\"/config/integrations/config_entry/", "\"\n                    >\n                      <paper-item data-index=", ">\n                        <paper-item-body two-line>\n                          <div>\n                            ", ":\n                            ", "\n                          </div>\n                          <div secondary>\n                            ", "\n                          </div>\n                        </paper-item-body>\n                        <ha-icon-next></ha-icon-next>\n                      </paper-item>\n                    </a>\n                  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"config-entry-row\">\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                        <mwc-button\n                          @click=", "\n                          data-id=\"", "\"\n                          >", "</mwc-button\n                        >\n                      </div>\n                    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <ha-config-section>\n                <span slot=\"header\"\n                  >", "</span\n                >\n                <ha-card>\n                  ", "\n                </ha-card>\n              </ha-config-section>\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <hass-subpage\n        header=", "\n      >\n        ", "\n\n        <ha-config-section class=\"configured\">\n          <span slot=\"header\"\n            >", "</span\n          >\n          <ha-card>\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <ha-fab\n          icon=\"hass:plus\"\n          title=", "\n          @click=", "\n          ?rtl=", "\n        ></ha-fab>\n      </hass-subpage>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





















var HaConfigManagerDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["customElement"])("ha-config-entries-dashboard")], function (_initialize, _LitElement) {
  var HaConfigManagerDashboard =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaConfigManagerDashboard, _LitElement2);

    function HaConfigManagerDashboard() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaConfigManagerDashboard);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaConfigManagerDashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaConfigManagerDashboard;
  }(_LitElement);

  return {
    F: HaConfigManagerDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["property"])()],
      key: "configEntries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["property"])()],
      key: "entityRegistryEntries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["property"])()],
      key: "configEntriesInProgress",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Entity Registry entries.
       */

      /**
       * Current flows that are in progress and have not been started by a user.
       * For example, can be discovered devices that require more config.
       */
      function connectedCallback() {
        _get(_getPrototypeOf(HaConfigManagerDashboard.prototype), "connectedCallback", this).call(this);

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__["loadConfigFlowDialog"])();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject(), this.hass.localize("ui.panel.config.integrations.caption"), this.configEntriesInProgress.length ? Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject2(), this.hass.localize("ui.panel.config.integrations.discovered"), this.configEntriesInProgress.map(function (flow) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject3(), Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_17__["localizeConfigFlowTitle"])(_this2.hass.localize, flow), _this2._continueFlow, flow.flow_id, _this2.hass.localize("ui.panel.config.integrations.configure"));
        })) : "", this.hass.localize("ui.panel.config.integrations.configured"), this.entityRegistryEntries.length ? this.configEntries.map(function (item, idx) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject4(), item.entry_id, idx, _this2.hass.localize("component.".concat(item.domain, ".config.title")), item.title, _this2._getEntities(item).map(function (entity) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject5(), entity, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(entity));
          }));
        }) : Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["html"])(_templateObject6(), this.hass.localize("ui.panel.config.integrations.none")), this.hass.localize("ui.panel.config.integrations.new"), this._createFlow, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__["computeRTL"])(this.hass));
      }
    }, {
      kind: "method",
      key: "_createFlow",
      value: function _createFlow() {
        var _this3 = this;

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__["showConfigFlowDialog"])(this, {
          dialogClosedCallback: function dialogClosedCallback() {
            return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_19__["fireEvent"])(_this3, "hass-reload-entries");
          },
          showAdvanced: this.showAdvanced
        });
      }
    }, {
      kind: "method",
      key: "_continueFlow",
      value: function _continueFlow(ev) {
        var _this4 = this;

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__["showConfigFlowDialog"])(this, {
          continueFlowId: ev.target.getAttribute("data-id") || undefined,
          dialogClosedCallback: function dialogClosedCallback() {
            return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_19__["fireEvent"])(_this4, "hass-reload-entries");
          }
        });
      }
    }, {
      kind: "method",
      key: "_getEntities",
      value: function _getEntities(configEntry) {
        var _this5 = this;

        if (!this.entityRegistryEntries) {
          return [];
        }

        var states = [];
        this.entityRegistryEntries.forEach(function (entity) {
          if (entity.config_entry_id === configEntry.entry_id && entity.entity_id in _this5.hass.states) {
            states.push(_this5.hass.states[entity.entity_id]);
          }
        });
        return states;
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["css"])(_templateObject7());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_18__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/integrations/ha-config-integrations.ts":
/*!******************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-integrations.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_config_entries_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-config-entries-dashboard */ "./src/panels/config/integrations/ha-config-entries-dashboard.ts");
/* harmony import */ var _config_entry_ha_config_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-entry/ha-config-entry-page */ "./src/panels/config/integrations/config-entry/ha-config-entry-page.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/config_flow */ "./src/data/config_flow.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var HaConfigIntegrations = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-integrations")], function (_initialize, _HassRouterPage) {
  var HaConfigIntegrations =
  /*#__PURE__*/
  function (_HassRouterPage2) {
    _inherits(HaConfigIntegrations, _HassRouterPage2);

    function HaConfigIntegrations() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaConfigIntegrations);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaConfigIntegrations)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaConfigIntegrations;
  }(_HassRouterPage);

  return {
    F: HaConfigIntegrations,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",
      value: function value() {
        return {
          defaultPage: "dashboard",
          routes: {
            dashboard: {
              tag: "ha-config-entries-dashboard"
            },
            config_entry: {
              tag: "ha-config-entry-page"
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_configEntries",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_configEntriesInProgress",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entityRegistryEntries",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_deviceRegistryEntries",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_areas",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "_unsubs",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaConfigIntegrations.prototype), "connectedCallback", this).call(this);

        if (!this.hass) {
          return;
        }

        this._loadData();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaConfigIntegrations.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubs) {
          while (this._unsubs.length) {
            this._unsubs.pop()();
          }

          this._unsubs = undefined;
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this2 = this;

        _get(_getPrototypeOf(HaConfigIntegrations.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("hass-reload-entries", function () {
          _this2._loadData();

          Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["getConfigFlowInProgressCollection"])(_this2.hass.connection).refresh();
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigIntegrations.prototype), "updated", this).call(this, changedProps);

        if (!this._unsubs && changedProps.has("hass")) {
          this._loadData();
        }
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl) {
        pageEl.hass = this.hass;
        pageEl.entityRegistryEntries = this._entityRegistryEntries;
        pageEl.configEntries = this._configEntries;
        pageEl.narrow = this.narrow;
        pageEl.showAdvanced = this.showAdvanced;

        if (this._currentPage === "dashboard") {
          pageEl.configEntriesInProgress = this._configEntriesInProgress;
          return;
        }

        pageEl.configEntryId = this.routeTail.path.substr(1);
        pageEl.deviceRegistryEntries = this._deviceRegistryEntries;
        pageEl.areas = this._areas;
      }
    }, {
      kind: "method",
      key: "_loadData",
      value: function _loadData() {
        var _this3 = this;

        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_7__["getConfigEntries"])(this.hass).then(function (configEntries) {
          _this3._configEntries = configEntries.sort(function (conf1, conf2) {
            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(conf1.title, conf2.title);
          });
        });

        if (this._unsubs) {
          return;
        }

        this._unsubs = [Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_5__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
          _this3._areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_8__["subscribeEntityRegistry"])(this.hass.connection, function (entries) {
          _this3._entityRegistryEntries = entries;
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"])(this.hass.connection, function (entries) {
          _this3._deviceRegistryEntries = entries;
        }), Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["subscribeConfigFlowInProgress"])(this.hass, function (flowsInProgress) {
          _this3._configEntriesInProgress = flowsInProgress;
        })];
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_6__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb25maWdfZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9vcHRpb25zX2Zsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zL3Nob3ctZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1jb25maWctZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctb3B0aW9ucy1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpcm1hdGlvbi9zaG93LWRpYWxvZy1jb25maXJtYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvY29uZmlnLWVudHJ5L2hhLWNlLWVudGl0aWVzLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL2NvbmZpZy1lbnRyeS9oYS1jb25maWctZW50cnktcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jb25maWctaW50ZWdyYXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4vaGEtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uTmV4dCBleHRlbmRzIEhhSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXAsIERhdGFFbnRyeUZsb3dQcm9ncmVzcyB9IGZyb20gXCIuL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcbmltcG9ydCB7IGdldENvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBoYW5kbGVyOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXCJQT1NUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dcIiwge1xuICAgIGhhbmRsZXIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFxuICAgIFwiR0VUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBmbG93SWQ6IHN0cmluZyxcbiAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFxuICAgIFwiUE9TVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gLFxuICAgIGRhdGFcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdGbG93SGFuZGxlcnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPHN0cmluZ1tdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93X2hhbmRsZXJzXCIpO1xuXG5jb25zdCBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL2Zsb3cvcHJvZ3Jlc3NcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzKGNvbm4pLnRoZW4oKGZsb3dzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGZsb3dzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJjb25maWdfZW50cnlfZGlzY292ZXJlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbjxEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXT4oXG4gICAgY29ubixcbiAgICBcIl9jb25maWdGbG93UHJvZ3Jlc3NcIixcbiAgICBmZXRjaENvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICAgIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzVXBkYXRlc1xuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIG9uQ2hhbmdlOiAoZmxvd3M6IERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdKSA9PiB2b2lkXG4pID0+IGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbihoYXNzLmNvbm5lY3Rpb24pLnN1YnNjcmliZShvbkNoYW5nZSk7XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgZmxvdzogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzXG4pID0+IHtcbiAgY29uc3QgcGxhY2Vob2xkZXJzID0gZmxvdy5jb250ZXh0LnRpdGxlX3BsYWNlaG9sZGVycyB8fCB7fTtcbiAgY29uc3QgcGxhY2Vob2xkZXJLZXlzID0gT2JqZWN0LmtleXMocGxhY2Vob2xkZXJzKTtcbiAgaWYgKHBsYWNlaG9sZGVyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLnRpdGxlYCk7XG4gIH1cbiAgY29uc3QgYXJnczogc3RyaW5nW10gPSBbXTtcbiAgcGxhY2Vob2xkZXJLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGFyZ3MucHVzaChrZXkpO1xuICAgIGFyZ3MucHVzaChwbGFjZWhvbGRlcnNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gbG9jYWxpemUoYGNvbXBvbmVudC4ke2Zsb3cuaGFuZGxlcn0uY29uZmlnLmZsb3dfdGl0bGVgLCAuLi5hcmdzKTtcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcCB9IGZyb20gXCIuL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlT3B0aW9uc0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFxuICAgIFwiUE9TVFwiLFxuICAgIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL29wdGlvbnMvZmxvd1wiLFxuICAgIHtcbiAgICAgIGhhbmRsZXIsXG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hPcHRpb25zRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIkdFVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvb3B0aW9ucy9mbG93LyR7Zmxvd0lkfWBcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU9wdGlvbnNGbG93U3RlcCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZmxvd0lkOiBzdHJpbmcsXG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL29wdGlvbnMvZmxvdy8ke2Zsb3dJZH1gLFxuICAgIGRhdGFcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU9wdGlvbnNGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9vcHRpb25zL2Zsb3cvJHtmbG93SWR9YCk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBDb25maWdFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk6IENvbmZpZ0VudHJ5O1xuICAvLyB1cGRhdGVFbnRyeTogKFxuICAvLyAgIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbiAgLy8gKSA9PiBQcm9taXNlPHVua25vd24+O1xuICAvLyByZW1vdmVFbnRyeTogKCkgPT4gUHJvbWlzZTxib29sZWFuPjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIiAqLyBcIi4vZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGdldENvbmZpZ0Zsb3dIYW5kbGVycyxcbiAgZmV0Y2hDb25maWdGbG93LFxuICBoYW5kbGVDb25maWdGbG93U3RlcCxcbiAgZGVsZXRlQ29uZmlnRmxvdyxcbiAgY3JlYXRlQ29uZmlnRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2Zsb3dcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7XG4gIHNob3dGbG93RGlhbG9nLFxuICBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLFxuICBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5pbXBvcnQgeyBjYXNlSW5zZW5zaXRpdmVDb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZztcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maWdGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPlxuKTogdm9pZCA9PlxuICBzaG93Rmxvd0RpYWxvZyhlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHtcbiAgICBsb2FkRGV2aWNlc0FuZEFyZWFzOiB0cnVlLFxuICAgIGdldEZsb3dIYW5kbGVyczogKGhhc3MpID0+XG4gICAgICBnZXRDb25maWdGbG93SGFuZGxlcnMoaGFzcykudGhlbigoaGFuZGxlcnMpID0+XG4gICAgICAgIGhhbmRsZXJzLnNvcnQoKGhhbmRsZXJBLCBoYW5kbGVyQikgPT5cbiAgICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckF9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgIGNyZWF0ZUZsb3c6IGNyZWF0ZUNvbmZpZ0Zsb3csXG4gICAgZmV0Y2hGbG93OiBmZXRjaENvbmZpZ0Zsb3csXG4gICAgaGFuZGxlRmxvd1N0ZXA6IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICAgIGRlbGV0ZUZsb3c6IGRlbGV0ZUNvbmZpZ0Zsb3csXG5cbiAgICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5hYm9ydC4ke3N0ZXAucmVhc29ufWAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEhlYWRlcihoYXNzLCBzdGVwKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwoaGFzcywgc3RlcCwgZmllbGQpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGF0YS4ke2ZpZWxkLm5hbWV9YFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihoYXNzLCBzdGVwLCBlcnJvcikge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmVycm9yLiR7ZXJyb3J9YCk7XG4gICAgfSxcblxuICAgIHJlbmRlckV4dGVybmFsU3RlcEhlYWRlcihoYXNzLCBzdGVwKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLiR7c3RlcC5zdGVwX2lkfS5kZXNjcmlwdGlvbmAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmV4dGVybmFsX3N0ZXAuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgYDtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuY3JlYXRlX2VudHJ5LiR7c3RlcC5kZXNjcmlwdGlvbiB8fFxuICAgICAgICAgIFwiZGVmYXVsdFwifWAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cD5cbiAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuY3JlYXRlZF9jb25maWdcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgc3RlcC50aXRsZVxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeSxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICBEYXRhRW50cnlGbG93U3RlcCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydCxcbiAgRmllbGRTY2hlbWEsXG59IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsb3dDb25maWcge1xuICBsb2FkRGV2aWNlc0FuZEFyZWFzOiBib29sZWFuO1xuXG4gIGdldEZsb3dIYW5kbGVycz86IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcblxuICBjcmVhdGVGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZyk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGZldGNoRmxvdyhoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZyk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGhhbmRsZUZsb3dTdGVwKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgZmxvd0lkOiBzdHJpbmcsXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcblxuICBkZWxldGVGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPjtcblxuICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydFxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IHN0cmluZztcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybVxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbiAgICBmaWVsZDogRmllbGRTY2hlbWFcbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gICAgZXJyb3I6IHN0cmluZ1xuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbFxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeVxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyB7XG4gIHN0YXJ0Rmxvd0hhbmRsZXI/OiBzdHJpbmc7XG4gIGNvbnRpbnVlRmxvd0lkPzogc3RyaW5nO1xuICBkaWFsb2dDbG9zZWRDYWxsYmFjaz86IChwYXJhbXM6IHsgZmxvd0ZpbmlzaGVkOiBib29sZWFuIH0pID0+IHZvaWQ7XG4gIGZsb3dDb25maWc6IEZsb3dDb25maWc7XG4gIHNob3dBZHZhbmNlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jb25maWctZmxvd1wiICovIFwiLi9kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPixcbiAgZmxvd0NvbmZpZzogRmxvd0NvbmZpZ1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERhdGFFbnRyeUZsb3dEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICBmbG93Q29uZmlnLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGZldGNoT3B0aW9uc0Zsb3csXG4gIGhhbmRsZU9wdGlvbnNGbG93U3RlcCxcbiAgZGVsZXRlT3B0aW9uc0Zsb3csXG4gIGNyZWF0ZU9wdGlvbnNGbG93LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9vcHRpb25zX2Zsb3dcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7XG4gIHNob3dGbG93RGlhbG9nLFxuICBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5pbXBvcnQgeyBDb25maWdFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkT3B0aW9uc0Zsb3dEaWFsb2cgPSBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZztcblxuZXhwb3J0IGNvbnN0IHNob3dPcHRpb25zRmxvd0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGNvbmZpZ0VudHJ5OiBDb25maWdFbnRyeVxuKTogdm9pZCA9PlxuICBzaG93Rmxvd0RpYWxvZyhcbiAgICBlbGVtZW50LFxuICAgIHtcbiAgICAgIHN0YXJ0Rmxvd0hhbmRsZXI6IGNvbmZpZ0VudHJ5LmVudHJ5X2lkLFxuICAgIH0sXG4gICAge1xuICAgICAgbG9hZERldmljZXNBbmRBcmVhczogZmFsc2UsXG4gICAgICBjcmVhdGVGbG93OiBjcmVhdGVPcHRpb25zRmxvdyxcbiAgICAgIGZldGNoRmxvdzogZmV0Y2hPcHRpb25zRmxvdyxcbiAgICAgIGhhbmRsZUZsb3dTdGVwOiBoYW5kbGVPcHRpb25zRmxvd1N0ZXAsXG4gICAgICBkZWxldGVGbG93OiBkZWxldGVPcHRpb25zRmxvdyxcblxuICAgICAgcmVuZGVyQWJvcnREZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgICBgY29tcG9uZW50LiR7Y29uZmlnRW50cnkuZG9tYWlufS5vcHRpb25zLmFib3J0LiR7c3RlcC5yZWFzb259YCxcbiAgICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKGhhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKGB1aS5kaWFsb2dzLm9wdGlvbnNfZmxvdy5mb3JtLmhlYWRlcmApO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyU2hvd0Zvcm1TdGVwRGVzY3JpcHRpb24oX2hhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbChoYXNzLCBzdGVwLCBmaWVsZCkge1xuICAgICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBgY29tcG9uZW50LiR7Y29uZmlnRW50cnkuZG9tYWlufS5vcHRpb25zLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtmaWVsZC5uYW1lfWBcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoaGFzcywgX3N0ZXAsIGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICAgIGBjb21wb25lbnQuJHtjb25maWdFbnRyeS5kb21haW59Lm9wdGlvbnMuZXJyb3IuJHtlcnJvcn1gXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoX2hhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oX2hhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihoYXNzLCBfc3RlcCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICA8cD4ke2hhc3MubG9jYWxpemUoYHVpLmRpYWxvZ3Mub3B0aW9uc19mbG93LnN1Y2Nlc3MuZGVzY3JpcHRpb25gKX08L3A+XG4gICAgICAgIGA7XG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMge1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBjb25maXJtQnRuVGV4dD86IHN0cmluZztcbiAgY2FuY2VsQnRuVGV4dD86IHN0cmluZztcbiAgY29uZmlybTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRDb25maXJtYXRpb25EaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWNvbmZpcm1hdGlvblwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNvbmZpcm1hdGlvblwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZENvbmZpcm1hdGlvbkRpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHN5c3RlbUxvZ0RldGFpbFBhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4SW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB7IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhJblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNlRW50aXRpZXNDYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhJbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1toZWFkaW5nXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJlbnRpdHlcIj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIG9uLWNsaWNrPVwiX29wZW5Nb3JlSW5mb1wiPlxuICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbX2NvbXB1dGVTdGF0ZU9iaihlbnRpdHksIGhhc3MpXV1cIlxuICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5bW19jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeSBlbnRpdHktaWRcIj5bW2VudGl0eS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGluZzogU3RyaW5nLFxuICAgICAgZW50aXRpZXM6IEFycmF5LFxuICAgICAgaGFzczogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiBoYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgfVxuXG4gIF9jb21wdXRlRW50aXR5TmFtZShlbnRpdHksIGhhc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZShoYXNzLCBlbnRpdHkpIHx8XG4gICAgICBgKCR7dGhpcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5lbnRpdHlfdW5hdmFpbGFibGVcIlxuICAgICAgKX0pYFxuICAgICk7XG4gIH1cblxuICBfb3Blbk1vcmVJbmZvKGV2KSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZXYubW9kZWwuZW50aXR5LmVudGl0eV9pZCB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jZS1lbnRpdGllcy1jYXJkXCIsIEhhQ2VFbnRpdGllc0NhcmQpO1xuIiwiaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWVycm9yLXNjcmVlblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9kZXZpY2VzL2hhLWRldmljZXMtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiLi9oYS1jZS1lbnRpdGllcy1jYXJkXCI7XG5pbXBvcnQgeyBzaG93T3B0aW9uc0Zsb3dEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1vcHRpb25zLWZsb3dcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBMaXRFbGVtZW50LCBDU1NSZXN1bHQsIGNzcywgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDb25maWdFbnRyeSxcbiAgZGVsZXRlQ29uZmlnRW50cnksXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBEZXZpY2VSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBBcmVhUmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNob3dDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMvc2hvdy1kaWFsb2ctY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zXCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvY29uZmlybWF0aW9uL3Nob3ctZGlhbG9nLWNvbmZpcm1hdGlvblwiO1xuXG5jbGFzcyBIYUNvbmZpZ0VudHJ5UGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnRW50cnlJZCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZ0VudHJpZXMhOiBDb25maWdFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5UmVnaXN0cnlFbnRyaWVzITogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlUmVnaXN0cnlFbnRyaWVzITogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXJlYXMhOiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuXG4gIHByaXZhdGUgZ2V0IF9jb25maWdFbnRyeSgpOiBDb25maWdFbnRyeSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnRW50cmllc1xuICAgICAgPyB0aGlzLmNvbmZpZ0VudHJpZXMuZmluZChcbiAgICAgICAgICAoZW50cnkpID0+IGVudHJ5LmVudHJ5X2lkID09PSB0aGlzLmNvbmZpZ0VudHJ5SWRcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlQ29uZmlnRW50cnlEZXZpY2VzID0gbWVtb2l6ZU9uZShcbiAgICAoY29uZmlnRW50cnk6IENvbmZpZ0VudHJ5LCBkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHtcbiAgICAgIGlmICghZGV2aWNlcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT5cbiAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmluY2x1ZGVzKGNvbmZpZ0VudHJ5LmVudHJ5X2lkKVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZU5vRGV2aWNlRW50aXRpZXMgPSBtZW1vaXplT25lKFxuICAgIChjb25maWdFbnRyeTogQ29uZmlnRW50cnksIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHtcbiAgICAgIGlmICghZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihcbiAgICAgICAgKGVudCkgPT4gIWVudC5kZXZpY2VfaWQgJiYgZW50LmNvbmZpZ19lbnRyeV9pZCA9PT0gY29uZmlnRW50cnkuZW50cnlfaWRcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY29uZmlnRW50cnkgPSB0aGlzLl9jb25maWdFbnRyeTtcblxuICAgIGlmICghY29uZmlnRW50cnkpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1lcnJvci1zY3JlZW5cbiAgICAgICAgICBlcnJvcj1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmludGVncmF0aW9uX25vdF9mb3VuZFwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICA+PC9oYXNzLWVycm9yLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnRW50cnlEZXZpY2VzID0gdGhpcy5fY29tcHV0ZUNvbmZpZ0VudHJ5RGV2aWNlcyhcbiAgICAgIGNvbmZpZ0VudHJ5LFxuICAgICAgdGhpcy5kZXZpY2VSZWdpc3RyeUVudHJpZXNcbiAgICApO1xuXG4gICAgY29uc3Qgbm9EZXZpY2VFbnRpdGllcyA9IHRoaXMuX2NvbXB1dGVOb0RldmljZUVudGl0aWVzKFxuICAgICAgY29uZmlnRW50cnksXG4gICAgICB0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgLmhlYWRlcj0ke2NvbmZpZ0VudHJ5LnRpdGxlfT5cbiAgICAgICAgJHtjb25maWdFbnRyeS5zdXBwb3J0c19vcHRpb25zXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd1NldHRpbmdzfVxuICAgICAgICAgICAgICAgIHRpdGxlPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5zZXR0aW5nc19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIFwiaW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnRpdGxlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczptZXNzYWdlLXNldHRpbmdzLXZhcmlhbnRcIlxuICAgICAgICAgIHRpdGxlPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5zeXN0ZW1fb3B0aW9uc19idXR0b25cIixcbiAgICAgICAgICAgIFwiaW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnRpdGxlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93U3lzdGVtT3B0aW9uc31cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgIGljb249XCJoYXNzOmRlbGV0ZVwiXG4gICAgICAgICAgdGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmRlbGV0ZV9idXR0b25cIixcbiAgICAgICAgICAgIFwiaW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnRpdGxlXG4gICAgICAgICAgKX1cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jb25maXJtUmVtb3ZlRW50cnl9XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHtjb25maWdFbnRyeURldmljZXMubGVuZ3RoID09PSAwICYmIG5vRGV2aWNlRW50aXRpZXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5ub19kZXZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgPGhhLWRldmljZXMtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAuZGV2aWNlcz0ke2NvbmZpZ0VudHJ5RGV2aWNlc31cbiAgICAgICAgICAgICAgICAgIC5lbnRyaWVzPSR7dGhpcy5jb25maWdFbnRyaWVzfVxuICAgICAgICAgICAgICAgICAgLmVudGl0aWVzPSR7dGhpcy5lbnRpdHlSZWdpc3RyeUVudHJpZXN9XG4gICAgICAgICAgICAgICAgICAuYXJlYXM9JHt0aGlzLmFyZWFzfVxuICAgICAgICAgICAgICAgID48L2hhLWRldmljZXMtZGF0YS10YWJsZT5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAke25vRGV2aWNlRW50aXRpZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxoYS1jZS1lbnRpdGllcy1jYXJkXG4gICAgICAgICAgICAgICAgICAuaGVhZGluZz0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5ub19kZXZpY2VcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC5lbnRpdGllcz0ke25vRGV2aWNlRW50aXRpZXN9XG4gICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgICAgICA+PC9oYS1jZS1lbnRpdGllcy1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dTZXR0aW5ncygpIHtcbiAgICBzaG93T3B0aW9uc0Zsb3dEaWFsb2codGhpcywgdGhpcy5fY29uZmlnRW50cnkhKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dTeXN0ZW1PcHRpb25zKCkge1xuICAgIHNob3dDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2codGhpcywge1xuICAgICAgZW50cnk6IHRoaXMuX2NvbmZpZ0VudHJ5ISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpcm1SZW1vdmVFbnRyeSgpIHtcbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRleHQ6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19lbnRyeS5kZWxldGVfY29uZmlybVwiXG4gICAgICApLFxuICAgICAgY29uZmlybTogKCkgPT4gdGhpcy5fcmVtb3ZlRW50cnkoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUVudHJ5KCkge1xuICAgIGRlbGV0ZUNvbmZpZ0VudHJ5KHRoaXMuaGFzcywgdGhpcy5jb25maWdFbnRyeUlkKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtcmVsb2FkLWVudHJpZXNcIik7XG4gICAgICBpZiAocmVzdWx0LnJlcXVpcmVfcmVzdGFydCkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LnJlc3RhcnRfY29uZmlybVwiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgbmF2aWdhdGUodGhpcywgXCIvY29uZmlnL2ludGVncmF0aW9ucy9kYXNoYm9hcmRcIiwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1kZXZpY2VzLWRhdGEtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1lbnRyeS1wYWdlXCIsIEhhQ29uZmlnRW50cnlQYWdlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgbG9hZENvbmZpZ0Zsb3dEaWFsb2csXG4gIHNob3dDb25maWdGbG93RGlhbG9nLFxufSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1jb25maWctZmxvd1wiO1xuaW1wb3J0IHsgbG9jYWxpemVDb25maWdGbG93VGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctZW50cmllcy1kYXNoYm9hcmRcIilcbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ01hbmFnZXJEYXNoYm9hcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FkdmFuY2VkITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIGNvbmZpZ0VudHJpZXMhOiBDb25maWdFbnRyeVtdO1xuXG4gIC8qKlxuICAgKiBFbnRpdHkgUmVnaXN0cnkgZW50cmllcy5cbiAgICovXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZW50aXR5UmVnaXN0cnlFbnRyaWVzITogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IGZsb3dzIHRoYXQgYXJlIGluIHByb2dyZXNzIGFuZCBoYXZlIG5vdCBiZWVuIHN0YXJ0ZWQgYnkgYSB1c2VyLlxuICAgKiBGb3IgZXhhbXBsZSwgY2FuIGJlIGRpc2NvdmVyZWQgZGV2aWNlcyB0aGF0IHJlcXVpcmUgbW9yZSBjb25maWcuXG4gICAqL1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGNvbmZpZ0VudHJpZXNJblByb2dyZXNzITogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgbG9hZENvbmZpZ0Zsb3dEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNhcHRpb25cIil9XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5jb25maWdFbnRyaWVzSW5Qcm9ncmVzcy5sZW5ndGhcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmRpc2NvdmVyZWRcIlxuICAgICAgICAgICAgICAgICAgKX08L3NwYW5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuY29uZmlnRW50cmllc0luUHJvZ3Jlc3MubWFwKFxuICAgICAgICAgICAgICAgICAgICAoZmxvdykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnLWVudHJ5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSh0aGlzLmhhc3MubG9jYWxpemUsIGZsb3cpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jb250aW51ZUZsb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke2Zsb3cuZmxvd19pZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ3VyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gY2xhc3M9XCJjb25maWd1cmVkXCI+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWd1cmVkXCJcbiAgICAgICAgICAgICl9PC9zcGFuXG4gICAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllcy5sZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLmNvbmZpZ0VudHJpZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGl0ZW06IGFueSwgaWR4KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9ucy9jb25maWdfZW50cnkvJHtpdGVtLmVudHJ5X2lkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkYXRhLWluZGV4PSR7aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY29tcG9uZW50LiR7aXRlbS5kb21haW59LmNvbmZpZy50aXRsZWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dldEVudGl0aWVzKGl0ZW0pLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbnRpdHkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zdGF0ZS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtlbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtc3RhdGUtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+JHtjb21wdXRlU3RhdGVOYW1lKGVudGl0eSl9PC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnLWVudHJ5LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgdGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ld1wiKX1cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jcmVhdGVGbG93fVxuICAgICAgICAgID9ydGw9JHtjb21wdXRlUlRMKHRoaXMuaGFzcyEpfVxuICAgICAgICA+PC9oYS1mYWI+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvdygpIHtcbiAgICBzaG93Q29uZmlnRmxvd0RpYWxvZyh0aGlzLCB7XG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKSxcbiAgICAgIHNob3dBZHZhbmNlZDogdGhpcy5zaG93QWR2YW5jZWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb250aW51ZUZsb3coZXY6IEV2ZW50KSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgY29udGludWVGbG93SWQ6XG4gICAgICAgIChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgfHwgdW5kZWZpbmVkLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IGZpcmVFdmVudCh0aGlzLCBcImhhc3MtcmVsb2FkLWVudHJpZXNcIiksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbnRpdGllcyhjb25maWdFbnRyeTogQ29uZmlnRW50cnkpOiBIYXNzRW50aXR5W10ge1xuICAgIGlmICghdGhpcy5lbnRpdHlSZWdpc3RyeUVudHJpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVzOiBIYXNzRW50aXR5W10gPSBbXTtcbiAgICB0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50aXR5LmNvbmZpZ19lbnRyeV9pZCA9PT0gY29uZmlnRW50cnkuZW50cnlfaWQgJiZcbiAgICAgICAgZW50aXR5LmVudGl0eV9pZCBpbiB0aGlzLmhhc3Muc3RhdGVzXG4gICAgICApIHtcbiAgICAgICAgc3RhdGVzLnB1c2godGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgfVxuICAgICAgLmNvbmZpZy1lbnRyeS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgIH1cbiAgICAgIC5jb25maWd1cmVkIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgaGEtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiO1xuaW1wb3J0IFwiLi9jb25maWctZW50cnkvaGEtY29uZmlnLWVudHJ5LXBhZ2VcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnksIGdldENvbmZpZ0VudHJpZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyxcbiAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3MtcmVsb2FkLWVudHJpZXNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLWludGVncmF0aW9uc1wiKVxuY2xhc3MgSGFDb25maWdJbnRlZ3JhdGlvbnMgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QWR2YW5jZWQhOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIHJvdXRlczoge1xuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZW50cmllcy1kYXNoYm9hcmRcIixcbiAgICAgIH0sXG4gICAgICBjb25maWdfZW50cnk6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1lbnRyeS1wYWdlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRW50cmllczogQ29uZmlnRW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbnRyaWVzSW5Qcm9ncmVzczogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXR5UmVnaXN0cnlFbnRyaWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlUmVnaXN0cnlFbnRyaWVzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYXM6IEFyZWFSZWdpc3RyeUVudHJ5W10gPSBbXTtcblxuICBwcml2YXRlIF91bnN1YnM/OiBVbnN1YnNjcmliZUZ1bmNbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvYWREYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJzKSB7XG4gICAgICB3aGlsZSAodGhpcy5fdW5zdWJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl91bnN1YnMucG9wKCkhKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl91bnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2xvYWREYXRhKCk7XG4gICAgICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24odGhpcy5oYXNzLmNvbm5lY3Rpb24pLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl91bnN1YnMgJiYgY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgIHRoaXMuX2xvYWREYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChwYWdlRWwpIHtcbiAgICBwYWdlRWwuaGFzcyA9IHRoaXMuaGFzcztcblxuICAgIHBhZ2VFbC5lbnRpdHlSZWdpc3RyeUVudHJpZXMgPSB0aGlzLl9lbnRpdHlSZWdpc3RyeUVudHJpZXM7XG4gICAgcGFnZUVsLmNvbmZpZ0VudHJpZXMgPSB0aGlzLl9jb25maWdFbnRyaWVzO1xuICAgIHBhZ2VFbC5uYXJyb3cgPSB0aGlzLm5hcnJvdztcbiAgICBwYWdlRWwuc2hvd0FkdmFuY2VkID0gdGhpcy5zaG93QWR2YW5jZWQ7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZGFzaGJvYXJkXCIpIHtcbiAgICAgIHBhZ2VFbC5jb25maWdFbnRyaWVzSW5Qcm9ncmVzcyA9IHRoaXMuX2NvbmZpZ0VudHJpZXNJblByb2dyZXNzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhZ2VFbC5jb25maWdFbnRyeUlkID0gdGhpcy5yb3V0ZVRhaWwucGF0aC5zdWJzdHIoMSk7XG4gICAgcGFnZUVsLmRldmljZVJlZ2lzdHJ5RW50cmllcyA9IHRoaXMuX2RldmljZVJlZ2lzdHJ5RW50cmllcztcbiAgICBwYWdlRWwuYXJlYXMgPSB0aGlzLl9hcmVhcztcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWREYXRhKCkge1xuICAgIGdldENvbmZpZ0VudHJpZXModGhpcy5oYXNzKS50aGVuKChjb25maWdFbnRyaWVzKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWdFbnRyaWVzID0gY29uZmlnRW50cmllcy5zb3J0KChjb25mMSwgY29uZjIpID0+XG4gICAgICAgIGNvbXBhcmUoY29uZjEudGl0bGUsIGNvbmYyLnRpdGxlKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fdW5zdWJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Vuc3VicyA9IFtcbiAgICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGFyZWFzKSA9PiB7XG4gICAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoZW50cmllcykgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdHlSZWdpc3RyeUVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZGV2aWNlUmVnaXN0cnlFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3ModGhpcy5oYXNzLCAoZmxvd3NJblByb2dyZXNzKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0VudHJpZXNJblByb2dyZXNzID0gZmxvd3NJblByb2dyZXNzO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLWludGVncmF0aW9uc1wiOiBIYUNvbmZpZ0ludGVncmF0aW9ucztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFYQTtBQUNBO0FBREE7QUFBQTtBQW9CQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUEsMjNCQUVBO0FBRkE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBREE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFNQTtBQVlBO0FBRUE7QUFDQTtBQU9BO0FBY0E7QUE1R0E7QUFKQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErRUE7QUFBQSx1M0NBRUE7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSEE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFPQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBckRBO0FBVEE7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQSw2OUJBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQXJEQTtBQUNBO0FBMkJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQXJDQTtBQUNBO0FBd0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUF1RUE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBTUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBV0E7OztBQXBMQTtBQUNBO0FBc0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQVdBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7OztBQUtBOzs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBQUE7QUFjQTtBQUFBO0FBNkJBO0FBY0E7QUFBQTtBQWRBO0FBc0RBO0FBeEhBO0FBQUE7QUFBQTtBQUFBO0FBMEhBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQS9IQTtBQUFBO0FBQUE7QUFBQTtBQWlJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUF2SUE7QUFBQTtBQUFBO0FBQUE7QUF5SUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUpBO0FBZ0NBO0FBekxBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFXQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQUZBOzs7O0FBWUE7OztBQUFBOzs7O0FBQ0E7OztBQUFBOzs7O0FBQ0E7OztBQUFBOzs7O0FBQ0E7OztBQUFBOzs7O0FBQ0E7OztBQUFBOzs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFwR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==