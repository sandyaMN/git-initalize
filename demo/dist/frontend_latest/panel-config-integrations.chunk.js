(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-integrations"],{

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/*
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

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
 // Not duplicate, this is for typing.
// tslint:disable-next-line


class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "hass:chevron-right" : "hass:chevron-left";
    }, 100);
  }

}
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


const createConfigFlow = (hass, handler) => hass.callApi("POST", "config/config_entries/flow", {
  handler
});
const fetchConfigFlow = (hass, flowId) => hass.callApi("GET", `config/config_entries/flow/${flowId}`);
const handleConfigFlowStep = (hass, flowId, data) => hass.callApi("POST", `config/config_entries/flow/${flowId}`, data);
const deleteConfigFlow = (hass, flowId) => hass.callApi("DELETE", `config/config_entries/flow/${flowId}`);
const getConfigFlowHandlers = hass => hass.callApi("GET", "config/config_entries/flow_handlers");

const fetchConfigFlowInProgress = conn => conn.sendMessagePromise({
  type: "config_entries/flow/progress"
});

const subscribeConfigFlowInProgressUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => fetchConfigFlowInProgress(conn).then(flows => store.setState(flows, true)), 500, true), "config_entry_discovered");

const getConfigFlowInProgressCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
const subscribeConfigFlowInProgress = (hass, onChange) => getConfigFlowInProgressCollection(hass.connection).subscribe(onChange);
const localizeConfigFlowTitle = (localize, flow) => {
  const placeholders = flow.context.title_placeholders || {};
  const placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return localize(`component.${flow.handler}.config.title`);
  }

  const args = [];
  placeholderKeys.forEach(key => {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize(`component.${flow.handler}.config.flow_title`, ...args);
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
const createOptionsFlow = (hass, handler) => hass.callApi("POST", "config/config_entries/options/flow", {
  handler
});
const fetchOptionsFlow = (hass, flowId) => hass.callApi("GET", `config/config_entries/options/flow/${flowId}`);
const handleOptionsFlowStep = (hass, flowId, data) => hass.callApi("POST", `config/config_entries/options/flow/${flowId}`, data);
const deleteOptionsFlow = (hass, flowId) => hass.callApi("DELETE", `config/config_entries/options/flow/${flowId}`);

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

const loadConfigEntrySystemOptionsDialog = () => Promise.all(/*! import() | config-entry-system-options */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~config-entry-system-options"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("config-entry-system-options")]).then(__webpack_require__.bind(null, /*! ./dialog-config-entry-system-options */ "./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts"));
const showConfigEntrySystemOptionsDialog = (element, systemLogDetailParams) => {
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





const loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
const showConfigFlowDialog = (element, dialogParams) => Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, dialogParams, {
  loadDevicesAndAreas: true,
  getFlowHandlers: hass => Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_0__["getConfigFlowHandlers"])(hass).then(handlers => handlers.sort((handlerA, handlerB) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["caseInsensitiveCompare"])(hass.localize(`component.${handlerA}.config.title`), hass.localize(`component.${handlerB}.config.title`)))),
  createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["createConfigFlow"],
  fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["fetchConfigFlow"],
  handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["handleConfigFlowStep"],
  deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["deleteConfigFlow"],

  renderAbortDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.abort.${step.reason}`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <ha-markdown allowsvg .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderShowFormStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.step.${step.step_id}.description`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <ha-markdown allowsvg .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepFieldLabel(hass, step, field) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.data.${field.name}`);
  },

  renderShowFormStepFieldError(hass, step, error) {
    return hass.localize(`component.${step.handler}.config.error.${error}`);
  },

  renderExternalStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderExternalStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.${step.step_id}.description`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-markdown allowsvg .content=${description}></ha-markdown>
            ` : ""}
      `;
  },

  renderCreateEntryDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.create_entry.${step.description || "default"}`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-markdown allowsvg .content=${description}></ha-markdown>
            ` : ""}
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.created_config", "name", step.title)}
        </p>
      `;
  }

});

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

const loadDataEntryFlowDialog = () => Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(6), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e(9), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
const showFlowDialog = (element, dialogParams, flowConfig) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-data-entry-flow",
    dialogImport: loadDataEntryFlowDialog,
    dialogParams: Object.assign({}, dialogParams, {
      flowConfig
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




const loadOptionsFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
const showOptionsFlowDialog = (element, configEntry) => Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, {
  startFlowHandler: configEntry.entry_id
}, {
  loadDevicesAndAreas: false,
  createFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["createOptionsFlow"],
  fetchFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["fetchOptionsFlow"],
  handleFlowStep: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["handleOptionsFlowStep"],
  deleteFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_0__["deleteOptionsFlow"],

  renderAbortDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${configEntry.domain}.options.abort.${step.reason}`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-markdown allowsvg .content=${description}></ha-markdown>
            ` : "";
  },

  renderShowFormStepHeader(hass, _step) {
    return hass.localize(`ui.dialogs.options_flow.form.header`);
  },

  renderShowFormStepDescription(_hass, _step) {
    return "";
  },

  renderShowFormStepFieldLabel(hass, step, field) {
    return hass.localize(`component.${configEntry.domain}.options.step.${step.step_id}.data.${field.name}`);
  },

  renderShowFormStepFieldError(hass, _step, error) {
    return hass.localize(`component.${configEntry.domain}.options.error.${error}`);
  },

  renderExternalStepHeader(_hass, _step) {
    return "";
  },

  renderExternalStepDescription(_hass, _step) {
    return "";
  },

  renderCreateEntryDescription(hass, _step) {
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
          <p>${hass.localize(`ui.dialogs.options_flow.success.description`)}</p>
        `;
  }

});

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

const loadConfirmationDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-confirmation */ "./src/dialogs/confirmation/dialog-confirmation.ts"));
const showConfirmationDialog = (element, systemLogDetailParams) => {
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

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
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
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

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

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
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

  __computeLocalize(localize) {
    return localize;
  }

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










/*
 * @appliesMixin LocalizeMixIn
 * @appliesMixin EventsMixin
 */

class HaCeEntitiesCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        ha-card {
          margin-top: 8px;
          padding-bottom: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      </style>
      <ha-card header="[[heading]]">
        <template is="dom-repeat" items="[[entities]]" as="entity">
          <paper-icon-item on-click="_openMoreInfo">
            <state-badge
              state-obj="[[_computeStateObj(entity, hass)]]"
              slot="item-icon"
            ></state-badge>
            <paper-item-body>
              <div class="name">[[_computeEntityName(entity, hass)]]</div>
              <div class="secondary entity-id">[[entity.entity_id]]</div>
            </paper-item-body>
          </paper-icon-item>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      heading: String,
      entities: Array,
      hass: Object
    };
  }

  _computeStateObj(entity, hass) {
    return hass.states[entity.entity_id];
  }

  _computeEntityName(entity, hass) {
    return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["computeEntityRegistryName"])(hass, entity) || `(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`;
  }

  _openMoreInfo(ev) {
    this.fire("hass-more-info", {
      entityId: ev.model.entity.entity_id
    });
  }

}

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
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














let HaConfigEntryPage = _decorate(null, function (_initialize, _LitElement) {
  class HaConfigEntryPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

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
        return this.configEntries ? this.configEntries.find(entry => entry.entry_id === this.configEntryId) : undefined;
      }
    }, {
      kind: "field",
      key: "_computeConfigEntryDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])((configEntry, devices) => {
          if (!devices) {
            return [];
          }

          return devices.filter(device => device.config_entries.includes(configEntry.entry_id));
        });
      }

    }, {
      kind: "field",
      key: "_computeNoDeviceEntities",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])((configEntry, entities) => {
          if (!entities) {
            return [];
          }

          return entities.filter(ent => !ent.device_id && ent.config_entry_id === configEntry.entry_id);
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const configEntry = this._configEntry;

        if (!configEntry) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
        <hass-error-screen
          error="${this.hass.localize("ui.panel.config.integrations.integration_not_found")}"
        ></hass-error-screen>
      `;
        }

        const configEntryDevices = this._computeConfigEntryDevices(configEntry, this.deviceRegistryEntries);

        const noDeviceEntities = this._computeNoDeviceEntities(configEntry, this.entityRegistryEntries);

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <hass-subpage .header=${configEntry.title}>
        ${configEntry.supports_options ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <paper-icon-button
                slot="toolbar-icon"
                icon="hass:settings"
                @click=${this._showSettings}
                title=${this.hass.localize("ui.panel.config.integrations.config_entry.settings_button", "integration", configEntry.title)}
              ></paper-icon-button>
            ` : ""}
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:message-settings-variant"
          title=${this.hass.localize("ui.panel.config.integrations.config_entry.system_options_button", "integration", configEntry.title)}
          @click=${this._showSystemOptions}
        ></paper-icon-button>
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:delete"
          title=${this.hass.localize("ui.panel.config.integrations.config_entry.delete_button", "integration", configEntry.title)}
          @click=${this._confirmRemoveEntry}
        ></paper-icon-button>

        <div class="content">
          ${configEntryDevices.length === 0 && noDeviceEntities.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <p>
                  ${this.hass.localize("ui.panel.config.integrations.config_entry.no_devices")}
                </p>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <ha-devices-data-table
                  .hass=${this.hass}
                  .narrow=${this.narrow}
                  .devices=${configEntryDevices}
                  .entries=${this.configEntries}
                  .entities=${this.entityRegistryEntries}
                  .areas=${this.areas}
                ></ha-devices-data-table>
              `}
          ${noDeviceEntities.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <ha-ce-entities-card
                  .heading=${this.hass.localize("ui.panel.config.integrations.config_entry.no_device")}
                  .entities=${noDeviceEntities}
                  .hass=${this.hass}
                  .narrow=${this.narrow}
                ></ha-ce-entities-card>
              ` : ""}
        </div>
      </hass-subpage>
    `;
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
        Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_11__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.config.integrations.config_entry.delete_confirm"),
          confirm: () => this._removeEntry()
        });
      }
    }, {
      kind: "method",
      key: "_removeEntry",
      value: function _removeEntry() {
        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_8__["deleteConfigEntry"])(this.hass, this.configEntryId).then(result => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "hass-reload-entries");

          if (result.require_restart) {
            alert(this.hass.localize("ui.panel.config.integrations.config_entry.restart_confirm"));
          }

          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(this, "/config/integrations/dashboard", true);
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      .content {
        padding: 4px;
      }
      p {
        text-align: center;
      }
      ha-devices-data-table {
        width: 100%;
      }
    `;
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
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





















let HaConfigManagerDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_18__["customElement"])("ha-config-entries-dashboard")], function (_initialize, _LitElement) {
  class HaConfigManagerDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

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
        return lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
      <hass-subpage
        header=${this.hass.localize("ui.panel.config.integrations.caption")}
      >
        ${this.configEntriesInProgress.length ? lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
              <ha-config-section>
                <span slot="header"
                  >${this.hass.localize("ui.panel.config.integrations.discovered")}</span
                >
                <ha-card>
                  ${this.configEntriesInProgress.map(flow => lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
                      <div class="config-entry-row">
                        <paper-item-body>
                          ${Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_17__["localizeConfigFlowTitle"])(this.hass.localize, flow)}
                        </paper-item-body>
                        <mwc-button
                          @click=${this._continueFlow}
                          data-id="${flow.flow_id}"
                          >${this.hass.localize("ui.panel.config.integrations.configure")}</mwc-button
                        >
                      </div>
                    `)}
                </ha-card>
              </ha-config-section>
            ` : ""}

        <ha-config-section class="configured">
          <span slot="header"
            >${this.hass.localize("ui.panel.config.integrations.configured")}</span
          >
          <ha-card>
            ${this.entityRegistryEntries.length ? this.configEntries.map((item, idx) => lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
                    <a
                      href="/config/integrations/config_entry/${item.entry_id}"
                    >
                      <paper-item data-index=${idx}>
                        <paper-item-body two-line>
                          <div>
                            ${this.hass.localize(`component.${item.domain}.config.title`)}:
                            ${item.title}
                          </div>
                          <div secondary>
                            ${this._getEntities(item).map(entity => lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
                                <span>
                                  <ha-state-icon
                                    .stateObj=${entity}
                                  ></ha-state-icon>
                                  <paper-tooltip position="bottom"
                                    >${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(entity)}</paper-tooltip
                                  >
                                </span>
                              `)}
                          </div>
                        </paper-item-body>
                        <ha-icon-next></ha-icon-next>
                      </paper-item>
                    </a>
                  `) : lit_element__WEBPACK_IMPORTED_MODULE_18__["html"]`
                  <div class="config-entry-row">
                    <paper-item-body two-line>
                      <div>
                        ${this.hass.localize("ui.panel.config.integrations.none")}
                      </div>
                    </paper-item-body>
                  </div>
                `}
          </ha-card>
        </ha-config-section>

        <ha-fab
          icon="hass:plus"
          title=${this.hass.localize("ui.panel.config.integrations.new")}
          @click=${this._createFlow}
          ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__["computeRTL"])(this.hass)}
        ></ha-fab>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_createFlow",
      value: function _createFlow() {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__["showConfigFlowDialog"])(this, {
          dialogClosedCallback: () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_19__["fireEvent"])(this, "hass-reload-entries"),
          showAdvanced: this.showAdvanced
        });
      }
    }, {
      kind: "method",
      key: "_continueFlow",
      value: function _continueFlow(ev) {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_16__["showConfigFlowDialog"])(this, {
          continueFlowId: ev.target.getAttribute("data-id") || undefined,
          dialogClosedCallback: () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_19__["fireEvent"])(this, "hass-reload-entries")
        });
      }
    }, {
      kind: "method",
      key: "_getEntities",
      value: function _getEntities(configEntry) {
        if (!this.entityRegistryEntries) {
          return [];
        }

        const states = [];
        this.entityRegistryEntries.forEach(entity => {
          if (entity.config_entry_id === configEntry.entry_id && entity.entity_id in this.hass.states) {
            states.push(this.hass.states[entity.entity_id]);
          }
        });
        return states;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_18__["css"]`
      ha-card {
        overflow: hidden;
      }
      mwc-button {
        top: 3px;
        margin-right: -0.57em;
      }
      .config-entry-row {
        display: flex;
        padding: 0 16px;
      }
      ha-icon {
        cursor: pointer;
        margin: 8px;
      }
      .configured a {
        color: var(--primary-text-color);
        text-decoration: none;
      }
      ha-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }

      ha-fab[rtl] {
        right: auto;
        left: 16px;
      }
    `;
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
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













let HaConfigIntegrations = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-integrations")], function (_initialize, _HassRouterPage) {
  class HaConfigIntegrations extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

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

      value() {
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

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_configEntriesInProgress",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entityRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_deviceRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_areas",

      value() {
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
        _get(_getPrototypeOf(HaConfigIntegrations.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("hass-reload-entries", () => {
          this._loadData();

          Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["getConfigFlowInProgressCollection"])(this.hass.connection).refresh();
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
        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_7__["getConfigEntries"])(this.hass).then(configEntries => {
          this._configEntries = configEntries.sort((conf1, conf2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(conf1.title, conf2.title));
        });

        if (this._unsubs) {
          return;
        }

        this._unsubs = [Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_5__["subscribeAreaRegistry"])(this.hass.connection, areas => {
          this._areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_8__["subscribeEntityRegistry"])(this.hass.connection, entries => {
          this._entityRegistryEntries = entries;
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"])(this.hass.connection, entries => {
          this._deviceRegistryEntries = entries;
        }), Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["subscribeConfigFlowInProgress"])(this.hass, flowsInProgress => {
          this._configEntriesInProgress = flowsInProgress;
        })];
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_6__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29uZmlnX2Zsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvb3B0aW9uc19mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9ucy9zaG93LWRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLW9wdGlvbnMtZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maXJtYXRpb24vc2hvdy1kaWFsb2ctY29uZmlybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL2NvbmZpZy1lbnRyeS9oYS1jZS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9jb25maWctZW50cnkvaGEtY29uZmlnLWVudHJ5LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL2hhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWludGVncmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcbkEgc2V0IG9mIGxheW91dCBjbGFzc2VzIHRoYXQgbGV0IHlvdSBzcGVjaWZ5IGxheW91dCBwcm9wZXJ0aWVzIGRpcmVjdGx5IGluXG5tYXJrdXAuIFlvdSBtdXN0IGluY2x1ZGUgdGhpcyBmaWxlIGluIGV2ZXJ5IGVsZW1lbnQgdGhhdCBuZWVkcyB0byB1c2UgdGhlbS5cblxuU2FtcGxlIHVzZTpcblxuICAgIGltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXMuanMnO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnRlc3QgeyB3aWR0aDogMTAwcHg7IH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdFwiPmhvcml6b250YWwgbGF5b3V0IGNlbnRlciBhbGlnbm1lbnQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcblxuVGhlIGZvbGxvd2luZyBpbXBvcnRzIGFyZSBhdmFpbGFibGU6XG4gLSBpcm9uLWZsZXhcbiAtIGlyb24tZmxleC1yZXZlcnNlXG4gLSBpcm9uLWZsZXgtYWxpZ25tZW50XG4gLSBpcm9uLWZsZXgtZmFjdG9yc1xuIC0gaXJvbi1wb3NpdGlvbmluZ1xuKi9cblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuLyogTW9zdCBjb21tb24gdXNlZCBmbGV4IHN0eWxlcyovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLFxuICAgICAgLmxheW91dC52ZXJ0aWNhbCB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5ob3Jpem9udGFsIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cblxuICAgICAgLmxheW91dC52ZXJ0aWNhbCB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQud3JhcCB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQubm8td3JhcCB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1qdXN0aWZpZWQsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZmxleCB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LWF1dG8ge1xuICAgICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICAgIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuZmxleC1ub25lIHtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogQmFzaWMgZmxleGJveCByZXZlcnNlIHN0eWxlcyAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtcmV2ZXJzZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLXJldmVyc2UsXG4gICAgICAubGF5b3V0LnZlcnRpY2FsLXJldmVyc2Uge1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQudmVydGljYWwtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQud3JhcC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogRmxleGJveCBhbGlnbm1lbnQgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LWFsaWdubWVudFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbm1lbnQgaW4gY3Jvc3MgYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydCB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZCB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYmFzZWxpbmUge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWxpZ25tZW50IGluIG1haW4gYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItanVzdGlmaWVkLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYXJvdW5kLWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VsZiBhbGlnbm1lbnQuXG4gICAgICAgKi9cbiAgICAgIC5zZWxmLXN0YXJ0IHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtY2VudGVyIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtZW5kIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtc3RyZXRjaCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWJhc2VsaW5lIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBtdWx0aS1saW5lIGFsaWdubWVudCBpbiBtYWluIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RhcnQ7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGVuZDsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmJldHdlZW4tYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazoganVzdGlmeTsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5hcm91bmQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZGlzdHJpYnV0ZTsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogTm9uLWZsZXhib3ggcG9zaXRpb25pbmcgaGVscGVyIHN0eWxlcyAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtZmFjdG9yc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZsZXgsXG4gICAgICAuZmxleC0xIHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMiB7XG4gICAgICAgIC1tcy1mbGV4OiAyO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDI7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTMge1xuICAgICAgICAtbXMtZmxleDogMztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAzO1xuICAgICAgICBmbGV4OiAzO1xuICAgICAgfVxuXG4gICAgICAuZmxleC00IHtcbiAgICAgICAgLW1zLWZsZXg6IDQ7XG4gICAgICAgIC13ZWJraXQtZmxleDogNDtcbiAgICAgICAgZmxleDogNDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNSB7XG4gICAgICAgIC1tcy1mbGV4OiA1O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDU7XG4gICAgICAgIGZsZXg6IDU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTYge1xuICAgICAgICAtbXMtZmxleDogNjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA2O1xuICAgICAgICBmbGV4OiA2O1xuICAgICAgfVxuXG4gICAgICAuZmxleC03IHtcbiAgICAgICAgLW1zLWZsZXg6IDc7XG4gICAgICAgIC13ZWJraXQtZmxleDogNztcbiAgICAgICAgZmxleDogNztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtOCB7XG4gICAgICAgIC1tcy1mbGV4OiA4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDg7XG4gICAgICAgIGZsZXg6IDg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTkge1xuICAgICAgICAtbXMtZmxleDogOTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA5O1xuICAgICAgICBmbGV4OiA5O1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMCB7XG4gICAgICAgIC1tcy1mbGV4OiAxMDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMDtcbiAgICAgICAgZmxleDogMTA7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTExIHtcbiAgICAgICAgLW1zLWZsZXg6IDExO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDExO1xuICAgICAgICBmbGV4OiAxMTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTIge1xuICAgICAgICAtbXMtZmxleDogMTI7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTI7XG4gICAgICAgIGZsZXg6IDEyO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48ZG9tLW1vZHVsZSBpZD1cImlyb24tcG9zaXRpb25pbmdcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmludmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAucmVsYXRpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgYm9keS5mdWxsYmxlZWQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAvKiBmaXhlZCBwb3NpdGlvbiAqL1xuICAgICAgLmZpeGVkLWJvdHRvbSxcbiAgICAgIC5maXhlZC1sZWZ0LFxuICAgICAgLmZpeGVkLXJpZ2h0LFxuICAgICAgLmZpeGVkLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLWJvdHRvbSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcCwgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzIH0gZnJvbSBcIi4vZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcIlBPU1RcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiLCB7XG4gICAgaGFuZGxlcixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJHRVRcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ29uZmlnRmxvd1N0ZXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWAsXG4gICAgZGF0YVxuICApO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dIYW5kbGVycyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8c3RyaW5nW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dfaGFuZGxlcnNcIik7XG5cbmNvbnN0IGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvZmxvdy9wcm9ncmVzc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uPERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdPihcbiAgICBjb25uLFxuICAgIFwiX2NvbmZpZ0Zsb3dQcm9ncmVzc1wiLFxuICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG4gICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgb25DaGFuZ2U6IChmbG93czogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10pID0+IHZvaWRcbikgPT4gZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKGhhc3MuY29ubmVjdGlvbikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBmbG93OiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NcbikgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlcnMgPSBmbG93LmNvbnRleHQudGl0bGVfcGxhY2Vob2xkZXJzIHx8IHt9O1xuICBjb25zdCBwbGFjZWhvbGRlcktleXMgPSBPYmplY3Qua2V5cyhwbGFjZWhvbGRlcnMpO1xuICBpZiAocGxhY2Vob2xkZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgY29tcG9uZW50LiR7Zmxvdy5oYW5kbGVyfS5jb25maWcudGl0bGVgKTtcbiAgfVxuICBjb25zdCBhcmdzOiBzdHJpbmdbXSA9IFtdO1xuICBwbGFjZWhvbGRlcktleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgYXJncy5wdXNoKGtleSk7XG4gICAgYXJncy5wdXNoKHBsYWNlaG9sZGVyc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBsb2NhbGl6ZShgY29tcG9uZW50LiR7Zmxvdy5oYW5kbGVyfS5jb25maWcuZmxvd190aXRsZWAsIC4uLmFyZ3MpO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwIH0gZnJvbSBcIi4vZGF0YV9lbnRyeV9mbG93XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVPcHRpb25zRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBoYW5kbGVyOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgXCJjb25maWcvY29uZmlnX2VudHJpZXMvb3B0aW9ucy9mbG93XCIsXG4gICAge1xuICAgICAgaGFuZGxlcixcbiAgICB9XG4gICk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE9wdGlvbnNGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFxuICAgIFwiR0VUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9vcHRpb25zL2Zsb3cvJHtmbG93SWR9YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlT3B0aW9uc0Zsb3dTdGVwID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBmbG93SWQ6IHN0cmluZyxcbiAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFxuICAgIFwiUE9TVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvb3B0aW9ucy9mbG93LyR7Zmxvd0lkfWAsXG4gICAgZGF0YVxuICApO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlT3B0aW9uc0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL29wdGlvbnMvZmxvdy8ke2Zsb3dJZH1gKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXMge1xuICBlbnRyeTogQ29uZmlnRW50cnk7XG4gIC8vIHVwZGF0ZUVudHJ5OiAoXG4gIC8vICAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuICAvLyApID0+IFByb21pc2U8dW5rbm93bj47XG4gIC8vIHJlbW92ZUVudHJ5OiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiICovIFwiLi9kaWFsb2ctY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHN5c3RlbUxvZ0RldGFpbFBhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzLFxuICBmZXRjaENvbmZpZ0Zsb3csXG4gIGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICBkZWxldGVDb25maWdGbG93LFxuICBjcmVhdGVDb25maWdGbG93LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgbG9jYWxpemVLZXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHtcbiAgc2hvd0Zsb3dEaWFsb2csXG4gIERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsXG4gIGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnRmxvd0RpYWxvZyA9IGxvYWREYXRhRW50cnlGbG93RGlhbG9nO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpZ0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IE9taXQ8RGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcywgXCJmbG93Q29uZmlnXCI+XG4pOiB2b2lkID0+XG4gIHNob3dGbG93RGlhbG9nKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywge1xuICAgIGxvYWREZXZpY2VzQW5kQXJlYXM6IHRydWUsXG4gICAgZ2V0Rmxvd0hhbmRsZXJzOiAoaGFzcykgPT5cbiAgICAgIGdldENvbmZpZ0Zsb3dIYW5kbGVycyhoYXNzKS50aGVuKChoYW5kbGVycykgPT5cbiAgICAgICAgaGFuZGxlcnMuc29ydCgoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUoXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtoYW5kbGVyQX0uY29uZmlnLnRpdGxlYCksXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtoYW5kbGVyQn0uY29uZmlnLnRpdGxlYClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgY3JlYXRlRmxvdzogY3JlYXRlQ29uZmlnRmxvdyxcbiAgICBmZXRjaEZsb3c6IGZldGNoQ29uZmlnRmxvdyxcbiAgICBoYW5kbGVGbG93U3RlcDogaGFuZGxlQ29uZmlnRmxvd1N0ZXAsXG4gICAgZGVsZXRlRmxvdzogZGVsZXRlQ29uZmlnRmxvdyxcblxuICAgIHJlbmRlckFib3J0RGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmFib3J0LiR7c3RlcC5yZWFzb259YCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIjtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKGhhc3MsIHN0ZXApIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIjtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbChoYXNzLCBzdGVwLCBmaWVsZCkge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5zdGVwLiR7c3RlcC5zdGVwX2lkfS5kYXRhLiR7ZmllbGQubmFtZX1gXG4gICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZEVycm9yKGhhc3MsIHN0ZXAsIGVycm9yKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuZXJyb3IuJHtlcnJvcn1gKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKGhhc3MsIHN0ZXApIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8cD5cbiAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuZXh0ZXJuYWxfc3RlcC5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wPlxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICBgO1xuICAgIH0sXG5cbiAgICByZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5jcmVhdGVfZW50cnkuJHtzdGVwLmRlc2NyaXB0aW9uIHx8XG4gICAgICAgICAgXCJkZWZhdWx0XCJ9YCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxwPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5jcmVhdGVkX2NvbmZpZ1wiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBzdGVwLnRpdGxlXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wPlxuICAgICAgYDtcbiAgICB9LFxuICB9KTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5LFxuICBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsLFxuICBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gIERhdGFFbnRyeUZsb3dTdGVwLFxuICBEYXRhRW50cnlGbG93U3RlcEFib3J0LFxuICBGaWVsZFNjaGVtYSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxvd0NvbmZpZyB7XG4gIGxvYWREZXZpY2VzQW5kQXJlYXM6IGJvb2xlYW47XG5cbiAgZ2V0Rmxvd0hhbmRsZXJzPzogKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+IFByb21pc2U8c3RyaW5nW10+O1xuXG4gIGNyZWF0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgZmV0Y2hGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgaGFuZGxlRmxvd1N0ZXAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBmbG93SWQ6IHN0cmluZyxcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGRlbGV0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+O1xuXG4gIHJlbmRlckFib3J0RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEFib3J0XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm1cbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICAgIGZpZWxkOiBGaWVsZFNjaGVtYVxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbiAgICBlcnJvcjogc3RyaW5nXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWxcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xuXG4gIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zIHtcbiAgc3RhcnRGbG93SGFuZGxlcj86IHN0cmluZztcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrPzogKHBhcmFtczogeyBmbG93RmluaXNoZWQ6IGJvb2xlYW4gfSkgPT4gdm9pZDtcbiAgZmxvd0NvbmZpZzogRmxvd0NvbmZpZztcbiAgc2hvd0FkdmFuY2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhRW50cnlGbG93RGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIgKi8gXCIuL2RpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IE9taXQ8RGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcywgXCJmbG93Q29uZmlnXCI+LFxuICBmbG93Q29uZmlnOiBGbG93Q29uZmlnXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZGF0YS1lbnRyeS1mbG93XCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgIGZsb3dDb25maWcsXG4gICAgfSxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZmV0Y2hPcHRpb25zRmxvdyxcbiAgaGFuZGxlT3B0aW9uc0Zsb3dTdGVwLFxuICBkZWxldGVPcHRpb25zRmxvdyxcbiAgY3JlYXRlT3B0aW9uc0Zsb3csXG59IGZyb20gXCIuLi8uLi9kYXRhL29wdGlvbnNfZmxvd1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgbG9jYWxpemVLZXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHtcbiAgc2hvd0Zsb3dEaWFsb2csXG4gIGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRPcHRpb25zRmxvd0RpYWxvZyA9IGxvYWREYXRhRW50cnlGbG93RGlhbG9nO1xuXG5leHBvcnQgY29uc3Qgc2hvd09wdGlvbnNGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY29uZmlnRW50cnk6IENvbmZpZ0VudHJ5XG4pOiB2b2lkID0+XG4gIHNob3dGbG93RGlhbG9nKFxuICAgIGVsZW1lbnQsXG4gICAge1xuICAgICAgc3RhcnRGbG93SGFuZGxlcjogY29uZmlnRW50cnkuZW50cnlfaWQsXG4gICAgfSxcbiAgICB7XG4gICAgICBsb2FkRGV2aWNlc0FuZEFyZWFzOiBmYWxzZSxcbiAgICAgIGNyZWF0ZUZsb3c6IGNyZWF0ZU9wdGlvbnNGbG93LFxuICAgICAgZmV0Y2hGbG93OiBmZXRjaE9wdGlvbnNGbG93LFxuICAgICAgaGFuZGxlRmxvd1N0ZXA6IGhhbmRsZU9wdGlvbnNGbG93U3RlcCxcbiAgICAgIGRlbGV0ZUZsb3c6IGRlbGV0ZU9wdGlvbnNGbG93LFxuXG4gICAgICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICAgIGBjb21wb25lbnQuJHtjb25maWdFbnRyeS5kb21haW59Lm9wdGlvbnMuYWJvcnQuJHtzdGVwLnJlYXNvbn1gLFxuICAgICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCI7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIoaGFzcywgX3N0ZXApIHtcbiAgICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoYHVpLmRpYWxvZ3Mub3B0aW9uc19mbG93LmZvcm0uaGVhZGVyYCk7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihfaGFzcywgX3N0ZXApIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKGhhc3MsIHN0ZXAsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICAgIGBjb21wb25lbnQuJHtjb25maWdFbnRyeS5kb21haW59Lm9wdGlvbnMuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGF0YS4ke2ZpZWxkLm5hbWV9YFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihoYXNzLCBfc3RlcCwgZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke2NvbmZpZ0VudHJ5LmRvbWFpbn0ub3B0aW9ucy5lcnJvci4ke2Vycm9yfWBcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlckV4dGVybmFsU3RlcEhlYWRlcihfaGFzcywgX3N0ZXApIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbihfaGFzcywgX3N0ZXApIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKGhhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgIDxwPiR7aGFzcy5sb2NhbGl6ZShgdWkuZGlhbG9ncy5vcHRpb25zX2Zsb3cuc3VjY2Vzcy5kZXNjcmlwdGlvbmApfTwvcD5cbiAgICAgICAgYDtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbmZpcm1CdG5UZXh0Pzogc3RyaW5nO1xuICBjYW5jZWxCdG5UZXh0Pzogc3RyaW5nO1xuICBjb25maXJtOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpcm1hdGlvbkRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctY29uZmlybWF0aW9uXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctY29uZmlybWF0aW9uXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlybWF0aW9uRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhJbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IHsgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peEluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2VFbnRpdGllc0NhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peEluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2hlYWRpbmddXVwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudGl0aWVzXV1cIiBhcz1cImVudGl0eVwiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gb24tY2xpY2s9XCJfb3Blbk1vcmVJbmZvXCI+XG4gICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tfY29tcHV0ZVN0YXRlT2JqKGVudGl0eSwgaGFzcyldXVwiXG4gICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSwgaGFzcyldXTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5IGVudGl0eS1pZFwiPltbZW50aXR5LmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkaW5nOiBTdHJpbmcsXG4gICAgICBlbnRpdGllczogQXJyYXksXG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVPYmooZW50aXR5LCBoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlOYW1lKGVudGl0eSwgaGFzcykge1xuICAgIHJldHVybiAoXG4gICAgICBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lKGhhc3MsIGVudGl0eSkgfHxcbiAgICAgIGAoJHt0aGlzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmVudGl0eV91bmF2YWlsYWJsZVwiXG4gICAgICApfSlgXG4gICAgKTtcbiAgfVxuXG4gIF9vcGVuTW9yZUluZm8oZXYpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBldi5tb2RlbC5lbnRpdHkuZW50aXR5X2lkIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNlLWVudGl0aWVzLWNhcmRcIiwgSGFDZUVudGl0aWVzQ2FyZCk7XG4iLCJpbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3MtZXJyb3Itc2NyZWVuXCI7XG5cbmltcG9ydCBcIi4uLy4uL2RldmljZXMvaGEtZGV2aWNlcy1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuL2hhLWNlLWVudGl0aWVzLWNhcmRcIjtcbmltcG9ydCB7IHNob3dPcHRpb25zRmxvd0RpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLW9wdGlvbnMtZmxvd1wiO1xuaW1wb3J0IHsgcHJvcGVydHksIExpdEVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzLCBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENvbmZpZ0VudHJ5LFxuICBkZWxldGVDb25maWdFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERldmljZVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7IEFyZWFSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2NvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9ucy9zaG93LWRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9jb25maXJtYXRpb24vc2hvdy1kaWFsb2ctY29uZmlybWF0aW9uXCI7XG5cbmNsYXNzIEhhQ29uZmlnRW50cnlQYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb25maWdFbnRyeUlkITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnRW50cmllcyE6IENvbmZpZ0VudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdHlSZWdpc3RyeUVudHJpZXMhOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZpY2VSZWdpc3RyeUVudHJpZXMhOiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhcmVhcyE6IEFyZWFSZWdpc3RyeUVudHJ5W107XG5cbiAgcHJpdmF0ZSBnZXQgX2NvbmZpZ0VudHJ5KCk6IENvbmZpZ0VudHJ5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdFbnRyaWVzXG4gICAgICA/IHRoaXMuY29uZmlnRW50cmllcy5maW5kKFxuICAgICAgICAgIChlbnRyeSkgPT4gZW50cnkuZW50cnlfaWQgPT09IHRoaXMuY29uZmlnRW50cnlJZFxuICAgICAgICApXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVDb25maWdFbnRyeURldmljZXMgPSBtZW1vaXplT25lKFxuICAgIChjb25maWdFbnRyeTogQ29uZmlnRW50cnksIGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4ge1xuICAgICAgaWYgKCFkZXZpY2VzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PlxuICAgICAgICBkZXZpY2UuY29uZmlnX2VudHJpZXMuaW5jbHVkZXMoY29uZmlnRW50cnkuZW50cnlfaWQpXG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBwcml2YXRlIF9jb21wdXRlTm9EZXZpY2VFbnRpdGllcyA9IG1lbW9pemVPbmUoXG4gICAgKGNvbmZpZ0VudHJ5OiBDb25maWdFbnRyeSwgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4ge1xuICAgICAgaWYgKCFlbnRpdGllcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKFxuICAgICAgICAoZW50KSA9PiAhZW50LmRldmljZV9pZCAmJiBlbnQuY29uZmlnX2VudHJ5X2lkID09PSBjb25maWdFbnRyeS5lbnRyeV9pZFxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb25maWdFbnRyeSA9IHRoaXMuX2NvbmZpZ0VudHJ5O1xuXG4gICAgaWYgKCFjb25maWdFbnRyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWVycm9yLXNjcmVlblxuICAgICAgICAgIGVycm9yPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuaW50ZWdyYXRpb25fbm90X2ZvdW5kXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgID48L2hhc3MtZXJyb3Itc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWdFbnRyeURldmljZXMgPSB0aGlzLl9jb21wdXRlQ29uZmlnRW50cnlEZXZpY2VzKFxuICAgICAgY29uZmlnRW50cnksXG4gICAgICB0aGlzLmRldmljZVJlZ2lzdHJ5RW50cmllc1xuICAgICk7XG5cbiAgICBjb25zdCBub0RldmljZUVudGl0aWVzID0gdGhpcy5fY29tcHV0ZU5vRGV2aWNlRW50aXRpZXMoXG4gICAgICBjb25maWdFbnRyeSxcbiAgICAgIHRoaXMuZW50aXR5UmVnaXN0cnlFbnRyaWVzXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZSAuaGVhZGVyPSR7Y29uZmlnRW50cnkudGl0bGV9PlxuICAgICAgICAke2NvbmZpZ0VudHJ5LnN1cHBvcnRzX29wdGlvbnNcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93U2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgdGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LnNldHRpbmdzX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnRlZ3JhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgY29uZmlnRW50cnkudGl0bGVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgIGljb249XCJoYXNzOm1lc3NhZ2Utc2V0dGluZ3MtdmFyaWFudFwiXG4gICAgICAgICAgdGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LnN5c3RlbV9vcHRpb25zX2J1dHRvblwiLFxuICAgICAgICAgICAgXCJpbnRlZ3JhdGlvblwiLFxuICAgICAgICAgICAgY29uZmlnRW50cnkudGl0bGVcbiAgICAgICAgICApfVxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dTeXN0ZW1PcHRpb25zfVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkuZGVsZXRlX2J1dHRvblwiLFxuICAgICAgICAgICAgXCJpbnRlZ3JhdGlvblwiLFxuICAgICAgICAgICAgY29uZmlnRW50cnkudGl0bGVcbiAgICAgICAgICApfVxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NvbmZpcm1SZW1vdmVFbnRyeX1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAke2NvbmZpZ0VudHJ5RGV2aWNlcy5sZW5ndGggPT09IDAgJiYgbm9EZXZpY2VFbnRpdGllcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm5vX2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtZGV2aWNlcy1kYXRhLXRhYmxlXG4gICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgICAgICAgIC5kZXZpY2VzPSR7Y29uZmlnRW50cnlEZXZpY2VzfVxuICAgICAgICAgICAgICAgICAgLmVudHJpZXM9JHt0aGlzLmNvbmZpZ0VudHJpZXN9XG4gICAgICAgICAgICAgICAgICAuZW50aXRpZXM9JHt0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllc31cbiAgICAgICAgICAgICAgICAgIC5hcmVhcz0ke3RoaXMuYXJlYXN9XG4gICAgICAgICAgICAgICAgPjwvaGEtZGV2aWNlcy1kYXRhLXRhYmxlPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICR7bm9EZXZpY2VFbnRpdGllcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGhhLWNlLWVudGl0aWVzLWNhcmRcbiAgICAgICAgICAgICAgICAgIC5oZWFkaW5nPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm5vX2RldmljZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgLmVudGl0aWVzPSR7bm9EZXZpY2VFbnRpdGllc31cbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAgID48L2hhLWNlLWVudGl0aWVzLWNhcmQ+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd1NldHRpbmdzKCkge1xuICAgIHNob3dPcHRpb25zRmxvd0RpYWxvZyh0aGlzLCB0aGlzLl9jb25maWdFbnRyeSEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd1N5c3RlbU9wdGlvbnMoKSB7XG4gICAgc2hvd0NvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRyeTogdGhpcy5fY29uZmlnRW50cnkhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlybVJlbW92ZUVudHJ5KCkge1xuICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgdGV4dDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5LmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICksXG4gICAgICBjb25maXJtOiAoKSA9PiB0aGlzLl9yZW1vdmVFbnRyeSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlRW50cnkoKSB7XG4gICAgZGVsZXRlQ29uZmlnRW50cnkodGhpcy5oYXNzLCB0aGlzLmNvbmZpZ0VudHJ5SWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKTtcbiAgICAgIGlmIChyZXN1bHQucmVxdWlyZV9yZXN0YXJ0KSB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkucmVzdGFydF9jb25maXJtXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvaW50ZWdyYXRpb25zL2Rhc2hib2FyZFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLWRldmljZXMtZGF0YS10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWVudHJ5LXBhZ2VcIiwgSGFDb25maWdFbnRyeVBhZ2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWljb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dQcm9ncmVzcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiKVxuZXhwb3J0IGNsYXNzIEhhQ29uZmlnTWFuYWdlckRhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QWR2YW5jZWQhOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgY29uZmlnRW50cmllcyE6IENvbmZpZ0VudHJ5W107XG5cbiAgLyoqXG4gICAqIEVudGl0eSBSZWdpc3RyeSBlbnRyaWVzLlxuICAgKi9cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBlbnRpdHlSZWdpc3RyeUVudHJpZXMhOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgZmxvd3MgdGhhdCBhcmUgaW4gcHJvZ3Jlc3MgYW5kIGhhdmUgbm90IGJlZW4gc3RhcnRlZCBieSBhIHVzZXIuXG4gICAqIEZvciBleGFtcGxlLCBjYW4gYmUgZGlzY292ZXJlZCBkZXZpY2VzIHRoYXQgcmVxdWlyZSBtb3JlIGNvbmZpZy5cbiAgICovXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgY29uZmlnRW50cmllc0luUHJvZ3Jlc3MhOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBsb2FkQ29uZmlnRmxvd0RpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY2FwdGlvblwiKX1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLmNvbmZpZ0VudHJpZXNJblByb2dyZXNzLmxlbmd0aFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuZGlzY292ZXJlZFwiXG4gICAgICAgICAgICAgICAgICApfTwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5jb25maWdFbnRyaWVzSW5Qcm9ncmVzcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChmbG93KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctZW50cnktcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2xvY2FsaXplQ29uZmlnRmxvd1RpdGxlKHRoaXMuaGFzcy5sb2NhbGl6ZSwgZmxvdyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NvbnRpbnVlRmxvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7Zmxvdy5mbG93X2lkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlndXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBjbGFzcz1cImNvbmZpZ3VyZWRcIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ3VyZWRcIlxuICAgICAgICAgICAgKX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAke3RoaXMuZW50aXR5UmVnaXN0cnlFbnRyaWVzLmxlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMuY29uZmlnRW50cmllcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoaXRlbTogYW55LCBpZHgpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25maWcvaW50ZWdyYXRpb25zL2NvbmZpZ19lbnRyeS8ke2l0ZW0uZW50cnlfaWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRhdGEtaW5kZXg9JHtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb21wb25lbnQuJHtpdGVtLmRvbWFpbn0uY29uZmlnLnRpdGxlYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2V0RW50aXRpZXMoaXRlbSkubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudGl0eSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLXN0YXRlLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke2VudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1zdGF0ZS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke2NvbXB1dGVTdGF0ZU5hbWUoZW50aXR5KX08L3BhcGVyLXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWctZW50cnktcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMubm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1mYWJcbiAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMubmV3XCIpfVxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUZsb3d9XG4gICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzISl9XG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbG93KCkge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiBmaXJlRXZlbnQodGhpcywgXCJoYXNzLXJlbG9hZC1lbnRyaWVzXCIpLFxuICAgICAgc2hvd0FkdmFuY2VkOiB0aGlzLnNob3dBZHZhbmNlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRpbnVlRmxvdyhldjogRXZlbnQpIHtcbiAgICBzaG93Q29uZmlnRmxvd0RpYWxvZyh0aGlzLCB7XG4gICAgICBjb250aW51ZUZsb3dJZDpcbiAgICAgICAgKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSB8fCB1bmRlZmluZWQsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEVudGl0aWVzKGNvbmZpZ0VudHJ5OiBDb25maWdFbnRyeSk6IEhhc3NFbnRpdHlbXSB7XG4gICAgaWYgKCF0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllcykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZXM6IEhhc3NFbnRpdHlbXSA9IFtdO1xuICAgIHRoaXMuZW50aXR5UmVnaXN0cnlFbnRyaWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRpdHkuY29uZmlnX2VudHJ5X2lkID09PSBjb25maWdFbnRyeS5lbnRyeV9pZCAmJlxuICAgICAgICBlbnRpdHkuZW50aXR5X2lkIGluIHRoaXMuaGFzcy5zdGF0ZXNcbiAgICAgICkge1xuICAgICAgICBzdGF0ZXMucHVzaCh0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICB9XG4gICAgICAuY29uZmlnLWVudHJ5LXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgfVxuICAgICAgLmNvbmZpZ3VyZWQgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGhhLWZhYltydGxdIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkXCI7XG5pbXBvcnQgXCIuL2NvbmZpZy1lbnRyeS9oYS1jb25maWctZW50cnktcGFnZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEhhc3NSb3V0ZXJQYWdlLFxuICBSb3V0ZXJPcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdFbnRyeSwgZ2V0Q29uZmlnRW50cmllcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24sXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGFzcy1yZWxvYWQtZW50cmllc1wiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctaW50ZWdyYXRpb25zXCIpXG5jbGFzcyBIYUNvbmZpZ0ludGVncmF0aW9ucyBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJvdXRlck9wdGlvbnM6IFJvdXRlck9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdFBhZ2U6IFwiZGFzaGJvYXJkXCIsXG4gICAgcm91dGVzOiB7XG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZ19lbnRyeToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWVudHJ5LXBhZ2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbnRyaWVzOiBDb25maWdFbnRyeVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0VudHJpZXNJblByb2dyZXNzOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdHlSZWdpc3RyeUVudHJpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VSZWdpc3RyeUVudHJpZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gIHByaXZhdGUgX3Vuc3Vicz86IFVuc3Vic2NyaWJlRnVuY1tdO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YnMpIHtcbiAgICAgIHdoaWxlICh0aGlzLl91bnN1YnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vicy5wb3AoKSEoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Vuc3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3MtcmVsb2FkLWVudHJpZXNcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICAgIGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbih0aGlzLmhhc3MuY29ubmVjdGlvbikucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoIXRoaXMuX3Vuc3VicyAmJiBjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKHBhZ2VFbCkge1xuICAgIHBhZ2VFbC5oYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgcGFnZUVsLmVudGl0eVJlZ2lzdHJ5RW50cmllcyA9IHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcztcbiAgICBwYWdlRWwuY29uZmlnRW50cmllcyA9IHRoaXMuX2NvbmZpZ0VudHJpZXM7XG4gICAgcGFnZUVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIHBhZ2VFbC5zaG93QWR2YW5jZWQgPSB0aGlzLnNob3dBZHZhbmNlZDtcblxuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA9PT0gXCJkYXNoYm9hcmRcIikge1xuICAgICAgcGFnZUVsLmNvbmZpZ0VudHJpZXNJblByb2dyZXNzID0gdGhpcy5fY29uZmlnRW50cmllc0luUHJvZ3Jlc3M7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGFnZUVsLmNvbmZpZ0VudHJ5SWQgPSB0aGlzLnJvdXRlVGFpbC5wYXRoLnN1YnN0cigxKTtcbiAgICBwYWdlRWwuZGV2aWNlUmVnaXN0cnlFbnRyaWVzID0gdGhpcy5fZGV2aWNlUmVnaXN0cnlFbnRyaWVzO1xuICAgIHBhZ2VFbC5hcmVhcyA9IHRoaXMuX2FyZWFzO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZERhdGEoKSB7XG4gICAgZ2V0Q29uZmlnRW50cmllcyh0aGlzLmhhc3MpLnRoZW4oKGNvbmZpZ0VudHJpZXMpID0+IHtcbiAgICAgIHRoaXMuX2NvbmZpZ0VudHJpZXMgPSBjb25maWdFbnRyaWVzLnNvcnQoKGNvbmYxLCBjb25mMikgPT5cbiAgICAgICAgY29tcGFyZShjb25mMS50aXRsZSwgY29uZjIudGl0bGUpXG4gICAgICApO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl91bnN1YnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdW5zdWJzID0gW1xuICAgICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoYXJlYXMpID0+IHtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoZW50cmllcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VSZWdpc3RyeUVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyh0aGlzLmhhc3MsIChmbG93c0luUHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgdGhpcy5fY29uZmlnRW50cmllc0luUHJvZ3Jlc3MgPSBmbG93c0luUHJvZ3Jlc3M7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctaW50ZWdyYXRpb25zXCI6IEhhQ29uZmlnSW50ZWdyYXRpb25zO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpWkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDMWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFaQTtBQW9CQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQVdBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBUUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQURBO0FBS0E7QUFNQTtBQVdBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBLG02QkFFQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUE7O0FBSUE7QUFFQTtBQUZBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUZBOztBQU1BOztBQVBBO0FBY0E7QUFDQTtBQTdHQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErRUEsbTVDQUVBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFIQTtBQVFBOzs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFPQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF0REE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUEsaTNCQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUF2REE7QUFDQTtBQXdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFLQTs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBOztBQU5BOzs7O0FBaUJBO0FBS0E7Ozs7O0FBS0E7QUFLQTs7OztBQUlBOztBQUdBOztBQUhBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBR0E7QUFDQTtBQUNBOztBQVJBOzs7QUF4REE7QUF1RUE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU1BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBQUE7QUFXQTs7O0FBcExBO0FBQ0E7QUFzTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBV0E7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7QUFLQTs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7O0FBRUE7O0FBRUE7OztBQUlBOzs7QUFLQTs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBVEE7OztBQVRBO0FBQ0E7OztBQStCQTs7O0FBS0E7O0FBSUE7O0FBRUE7OztBQUdBO0FBR0E7OztBQUdBOzs7QUFJQTs7O0FBR0E7OztBQVBBOzs7Ozs7QUFkQTs7OztBQXFDQTs7OztBQU1BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQTdGQTtBQWlHQTtBQXhIQTtBQUFBO0FBQUE7QUFBQTtBQTJIQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBL0hBO0FBQUE7QUFBQTtBQUFBO0FBa0lBO0FBQ0E7QUFFQTtBQUhBO0FBS0E7QUF2SUE7QUFBQTtBQUFBO0FBQUE7QUEwSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdDQTtBQXpMQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBV0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUpBO0FBRkE7Ozs7O0FBWUE7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBcEdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=