(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zwave"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
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






/**
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function () {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./src/common/config/is_pwa.ts":
/*!*************************************!*\
  !*** ./src/common/config/is_pwa.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPwa; });
/** Return if the displaymode is in standalone mode (PWA). */
function isPwa() {
  return window.matchMedia("(display-mode: standalone)").matches;
}

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: sortStatesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStatesByName", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");
/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statessortStatesByName);
 */

const sortStatesByName = (entityA, entityB) => {
  const nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
  const nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

/***/ }),

/***/ "./src/components/buttons/ha-call-api-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-call-api-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




class HaCallApiButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  constructor() {
    super();
    this.method = "POST";
    this.data = {};
    this.disabled = false;
    this.progress = false;
  }

  static get properties() {
    return {
      hass: {},
      progress: Boolean,
      path: String,
      method: String,
      data: {},
      disabled: Boolean
    };
  }

  get progressButton() {
    return this.renderRoot.querySelector("ha-progress-button");
  }

  async _buttonTapped() {
    this.progress = true;
    const eventData = {
      method: this.method,
      path: this.path,
      data: this.data
    };

    try {
      const resp = await this.hass.callApi(this.method, this.path, this.data);
      this.progress = false;
      this.progressButton.actionSuccess();
      eventData.success = true;
      eventData.response = resp;
    } catch (err) {
      this.progress = false;
      this.progressButton.actionError();
      eventData.success = false;
      eventData.response = err;
    }

    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-api-called", eventData);
  }

}

customElements.define("ha-call-api-button", HaCallApiButton);

/***/ }),

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/confirmation/show-dialog-confirmation */ "./src/dialogs/confirmation/show-dialog-confirmation.ts");





/*
 * @appliesMixin EventsMixin
 */

class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      },
      confirmation: {
        type: String
      }
    };
  }

  callService() {
    this.progress = true;
    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("hass-service-called", eventData);
    });
  }

  buttonTapped() {
    if (this.confirmation) {
      Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_4__["showConfirmationDialog"])(this, {
        text: this.confirmation,
        confirm: () => this.callService()
      });
    } else {
      this.callService();
    }
  }

}

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

/***/ }),

/***/ "./src/components/ha-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class HaServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      [[_getDescription(hass, domain, service)]]
    `;
  }

  static get properties() {
    return {
      hass: Object,
      domain: String,
      service: String
    };
  }

  _getDescription(hass, domain, service) {
    var domainServices = hass.services[domain];
    if (!domainServices) return "";
    var serviceObject = domainServices[service];
    if (!serviceObject) return "";
    return serviceObject.description;
  }

}

customElements.define("ha-service-description", HaServiceDescription);

/***/ }),

/***/ "./src/data/zwave.ts":
/*!***************************!*\
  !*** ./src/data/zwave.ts ***!
  \***************************/
/*! exports provided: ZWAVE_NETWORK_STATE_STOPPED, ZWAVE_NETWORK_STATE_FAILED, ZWAVE_NETWORK_STATE_STARTED, ZWAVE_NETWORK_STATE_AWAKED, ZWAVE_NETWORK_STATE_READY, fetchNetworkStatus, fetchValues, fetchNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STOPPED", function() { return ZWAVE_NETWORK_STATE_STOPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_FAILED", function() { return ZWAVE_NETWORK_STATE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STARTED", function() { return ZWAVE_NETWORK_STATE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_AWAKED", function() { return ZWAVE_NETWORK_STATE_AWAKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_READY", function() { return ZWAVE_NETWORK_STATE_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNetworkStatus", function() { return fetchNetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchValues", function() { return fetchValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNodeConfig", function() { return fetchNodeConfig; });
const ZWAVE_NETWORK_STATE_STOPPED = 0;
const ZWAVE_NETWORK_STATE_FAILED = 1;
const ZWAVE_NETWORK_STATE_STARTED = 5;
const ZWAVE_NETWORK_STATE_AWAKED = 7;
const ZWAVE_NETWORK_STATE_READY = 10;
const fetchNetworkStatus = hass => hass.callWS({
  type: "zwave/network_status"
});
const fetchValues = (hass, nodeId) => hass.callApi("GET", `zwave/values/${nodeId}`);
const fetchNodeConfig = (hass, nodeId) => hass.callApi("GET", `zwave/config/${nodeId}`);

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

/***/ "./src/layouts/ha-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class HaAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }

}

customElements.define("ha-app-layout", HaAppLayout);

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

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");




class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      narrow: {
        type: Boolean
      },
      isWide: {
        type: Boolean,
        value: false
      }
    };
  }

  computeContentClasses(isWide) {
    var classes = "content ";
    return isWide ? classes : classes + "narrow";
  }

  computeClasses(isWide) {
    var classes = "together layout ";
    return classes + (isWide ? "horizontal" : "vertical narrow");
  }

}

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild(documentContainer.content);

/***/ }),

/***/ "./src/panels/config/zwave/ha-config-zwave.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/ha-config-zwave.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _zwave_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zwave-groups */ "./src/panels/config/zwave/zwave-groups.js");
/* harmony import */ var _zwave_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zwave-log */ "./src/panels/config/zwave/zwave-log.js");
/* harmony import */ var _zwave_network__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zwave-network */ "./src/panels/config/zwave/zwave-network.ts");
/* harmony import */ var _zwave_node_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zwave-node-config */ "./src/panels/config/zwave/zwave-node-config.ts");
/* harmony import */ var _zwave_usercodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zwave-usercodes */ "./src/panels/config/zwave/zwave-usercodes.js");
/* harmony import */ var _zwave_values__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zwave-values */ "./src/panels/config/zwave/zwave-values.ts");
/* harmony import */ var _zwave_node_protection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./zwave-node-protection */ "./src/panels/config/zwave/zwave-node-protection.js");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






























/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaConfigZwave extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <style include="iron-flex ha-style ha-form-style">
        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        .node-info {
          margin-left: 16px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="_backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title="">
              [[localize('ui.panel.config.zwave.caption')]]
            </div>
          </app-toolbar>
        </app-header>

        <zwave-network
          id="zwave-network"
          is-wide="[[isWide]]"
          hass="[[hass]]"
        ></zwave-network>

        <!-- Node card -->
        <ha-config-section is-wide="[[isWide]]">
          <div class="sectionHeader" slot="header">
            <span>Z-Wave Node Management</span>
            <paper-icon-button
              class="toggle-help-icon"
              on-click="toggleHelp"
              icon="hass:help-circle"
            ></paper-icon-button>
          </div>
          <span slot="introduction">
            Run Z-Wave commands that affect a single node. Pick a node to see a
            list of available commands.
          </span>

          <ha-card class="content">
            <div class="device-picker">
              <paper-dropdown-menu dynamic-align="" label="Nodes" class="flex">
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{selectedNode}}"
                >
                  <template is="dom-repeat" items="[[nodes]]" as="state">
                    <paper-item>[[computeSelectCaption(state)]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            <template is="dom-if" if="[[!computeIsNodeSelected(selectedNode)]]">
              <template is="dom-if" if="[[showHelp]]">
                <div style="color: grey; padding: 12px">
                  Select node to view per-node options
                </div>
              </template>
            </template>

            <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Refresh Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <template is="dom-if" if="[[nodeFailed]]">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Remove Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>

                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Replace Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                </template>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Print Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  service-data="[[computeHealNodeServiceData(selectedNode)]]"
                >
                  Heal Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Test Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>
                <mwc-button on-click="_nodeMoreInfo"
                  >Node Information</mwc-button
                >
              </div>

              <div class="device-picker">
                <paper-dropdown-menu
                  label="Entities of this node"
                  dynamic-align=""
                  class="flex"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    selected="{{selectedEntity}}"
                  >
                    <template is="dom-repeat" items="[[entities]]" as="state">
                      <paper-item>[[state.entity_id]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <template
                is="dom-if"
                if="[[!computeIsEntitySelected(selectedEntity)]]"
              >
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    service-data="[[computeRefreshEntityServiceData(selectedEntity)]]"
                  >
                    Refresh Entity
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                  <mwc-button on-click="_entityMoreInfo"
                    >Entity Information</mwc-button
                  >
                </div>
                <div class="form-group">
                  <paper-checkbox
                    checked="{{entityIgnored}}"
                    class="form-control"
                  >
                    Exclude this entity from Home Assistant
                  </paper-checkbox>
                  <paper-input
                    disabled="{{entityIgnored}}"
                    label="Polling intensity"
                    type="number"
                    min="0"
                    value="{{entityPollingIntensity}}"
                  >
                  </paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="set_poll_intensity"
                    service-data="[[computePollIntensityServiceData(entityPollingIntensity)]]"
                  >
                    Save
                  </ha-call-service-button>
                </div>
              </template>
            </template>
          </ha-card>

          <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
            <!-- Value card -->
            <zwave-values
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              values="[[values]]"
            ></zwave-values>

            <!-- Group card -->
            <zwave-groups
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              groups="[[groups]]"
            ></zwave-groups>

            <!-- Config card -->
            <zwave-node-config
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              config="[[config]]"
            ></zwave-node-config>
          </template>

          <!-- Protection card -->
          <template is="dom-if" if="{{_protectionNode}}">
            <zwave-node-protection
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              protection="[[_protection]]"
            ></zwave-node-protection>
          </template>

          <!-- User Codes -->
          <template is="dom-if" if="{{hasNodeUserCodes}}">
            <zwave-usercodes
              id="zwave-usercodes"
              hass="[[hass]]"
              nodes="[[nodes]]"
              user-codes="[[userCodes]]"
              selected-node="[[selectedNode]]"
            ></zwave-usercodes>
          </template>
        </ha-config-section>

        <!-- Ozw log -->
        <ozw-log is-wide="[[isWide]]" hass="[[hass]]"></ozw-log>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      nodes: {
        type: Array,
        computed: "computeNodes(hass)"
      },
      selectedNode: {
        type: Number,
        value: -1,
        observer: "selectedNodeChanged"
      },
      nodeFailed: {
        type: Boolean,
        value: false
      },
      config: {
        type: Array,
        value: () => []
      },
      entities: {
        type: Array,
        computed: "computeEntities(selectedNode)"
      },
      selectedEntity: {
        type: Number,
        value: -1,
        observer: "selectedEntityChanged"
      },
      values: {
        type: Array
      },
      groups: {
        type: Array
      },
      userCodes: {
        type: Array,
        value: () => []
      },
      hasNodeUserCodes: {
        type: Boolean,
        value: false
      },
      showHelp: {
        type: Boolean,
        value: false
      },
      entityIgnored: Boolean,
      entityPollingIntensity: {
        type: Number,
        value: 0
      },
      _protection: {
        type: Array,
        value: () => []
      },
      _protectionNode: {
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success && ev.detail.service === "set_poll_intensity") {
      this._saveEntity();
    }
  }

  computeNodes(hass) {
    return Object.keys(hass.states).map(key => hass.states[key]).filter(ent => ent.entity_id.match("zwave[.]")).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
  }

  computeEntities(selectedNode) {
    if (!this.nodes || selectedNode === -1) return -1;
    const nodeid = this.nodes[this.selectedNode].attributes.node_id;
    const hass = this.hass;
    return Object.keys(this.hass.states).map(key => hass.states[key]).filter(ent => {
      if (ent.attributes.node_id === undefined) {
        return false;
      }

      return !ent.attributes.hidden && "node_id" in ent.attributes && ent.attributes.node_id === nodeid && !ent.entity_id.match("zwave[.]");
    }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
  }

  selectedNodeChanged(selectedNode) {
    if (selectedNode === -1) return;
    this.selectedEntity = -1;
    this.hass.callApi("GET", `zwave/config/${this.nodes[selectedNode].attributes.node_id}`).then(configs => {
      this.config = this._objToArray(configs);
    });
    this.hass.callApi("GET", `zwave/values/${this.nodes[selectedNode].attributes.node_id}`).then(values => {
      this.values = this._objToArray(values);
    });
    this.hass.callApi("GET", `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`).then(groups => {
      this.groups = this._objToArray(groups);
    });
    this.hasNodeUserCodes = false;
    this.notifyPath("hasNodeUserCodes");
    this.hass.callApi("GET", `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`).then(usercodes => {
      this.userCodes = this._objToArray(usercodes);
      this.hasNodeUserCodes = this.userCodes.length > 0;
      this.notifyPath("hasNodeUserCodes");
    });
    this.hass.callApi("GET", `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`).then(protections => {
      this._protection = this._objToArray(protections);

      if (this._protection) {
        if (this._protection.length === 0) {
          return;
        }

        this._protectionNode = true;
      }
    });
    this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
  }

  selectedEntityChanged(selectedEntity) {
    if (selectedEntity === -1) return;
    this.hass.callApi("GET", `zwave/values/${this.nodes[this.selectedNode].attributes.node_id}`).then(values => {
      this.values = this._objToArray(values);
    });
    const valueId = this.entities[selectedEntity].attributes.value_id;
    const valueData = this.values.find(obj => obj.key === valueId);
    const valueIndex = this.values.indexOf(valueData);
    this.hass.callApi("GET", `config/zwave/device_config/${this.entities[selectedEntity].entity_id}`).then(data => {
      this.setProperties({
        entityIgnored: data.ignored || false,
        entityPollingIntensity: this.values[valueIndex].value.poll_intensity
      });
    }).catch(() => {
      this.setProperties({
        entityIgnored: false,
        entityPollingIntensity: this.values[valueIndex].value.poll_intensity
      });
    });
  }

  computeSelectCaption(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj) + " (Node:" + stateObj.attributes.node_id + " " + stateObj.attributes.query_stage + ")";
  }

  computeSelectCaptionEnt(stateObj) {
    return Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__["computeStateDomain"])(stateObj) + "." + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj);
  }

  computeIsNodeSelected() {
    return this.nodes && this.selectedNode !== -1;
  }

  computeIsEntitySelected(selectedEntity) {
    return selectedEntity === -1;
  }

  computeNodeServiceData(selectedNode) {
    return {
      node_id: this.nodes[selectedNode].attributes.node_id
    };
  }

  computeHealNodeServiceData(selectedNode) {
    return {
      node_id: this.nodes[selectedNode].attributes.node_id,
      return_routes: true
    };
  }

  computeRefreshEntityServiceData(selectedEntity) {
    if (selectedEntity === -1) return -1;
    return {
      entity_id: this.entities[selectedEntity].entity_id
    };
  }

  computePollIntensityServiceData(entityPollingIntensity) {
    if (!this.selectedNode === -1 || this.selectedEntity === -1) return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      value_id: this.entities[this.selectedEntity].attributes.value_id,
      poll_intensity: parseInt(entityPollingIntensity)
    };
  }

  _nodeMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.nodes[this.selectedNode].entity_id
    });
  }

  _entityMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.entities[this.selectedEntity].entity_id
    });
  }

  _saveEntity() {
    const data = {
      ignored: this.entityIgnored,
      polling_intensity: parseInt(this.entityPollingIntensity)
    };
    return this.hass.callApi("POST", `config/zwave/device_config/${this.entities[this.selectedEntity].entity_id}`, data);
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
  }

  _objToArray(obj) {
    const array = [];
    Object.keys(obj).forEach(key => {
      array.push({
        key,
        value: obj[key]
      });
    });
    return array;
  }

  _backTapped() {
    history.back();
  }

}

customElements.define("ha-config-zwave", HaConfigZwave);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-groups.js":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-groups.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");









class ZwaveGroups extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 12px;
        }
      </style>
      <ha-card class="content" header="Node group associations">
        <!-- TODO make api for getting groups and members -->
        <div class="device-picker">
          <paper-dropdown-menu label="Group" dynamic-align="" class="flex">
            <paper-listbox
              slot="dropdown-content"
              selected="{{_selectedGroup}}"
            >
              <template is="dom-repeat" items="[[groups]]" as="state">
                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <template is="dom-if" if="[[_computeIsGroupSelected(_selectedGroup)]]">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Node to control"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedTargetNode}}"
              >
                <template is="dom-repeat" items="[[nodes]]" as="state">
                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="help-text">
            <span>Other Nodes in this group:</span>
            <template is="dom-repeat" items="[[_otherGroupNodes]]" as="state">
              <div>[[state]]</div>
            </template>
          </div>
          <div class="help-text">
            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>
          </div>
        </template>

        <template
          is="dom-if"
          if="[[_computeIsTargetNodeSelected(_selectedTargetNode)]]"
        >
          <div class="card-actions">
            <template is="dom-if" if="[[!_noAssociationsLeft]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_addAssocServiceData]]"
              >
                Add To Group
              </ha-call-service-button>
            </template>
            <template
              is="dom-if"
              if="[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]"
            >
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeAssocServiceData]]"
              >
                Remove From Group
              </ha-call-service-button>
            </template>
            <template is="dom-if" if="[[_isBroadcastNodeInGroup]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeBroadcastNodeServiceData]]"
              >
                Remove Broadcast
              </ha-call-service-button>
            </template>
          </div>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      groups: Array,
      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged"
      },
      _selectedTargetNode: {
        type: Number,
        value: -1,
        observer: "_selectedTargetNodeChanged"
      },
      _selectedGroup: {
        type: Number,
        value: -1
      },
      _otherGroupNodes: {
        type: Array,
        value: -1,
        computed: "_computeOtherGroupNodes(_selectedGroup)"
      },
      _maxAssociations: {
        type: String,
        value: "",
        computed: "_computeMaxAssociations(_selectedGroup)"
      },
      _noAssociationsLeft: {
        type: Boolean,
        value: true,
        computed: "_computeAssociationsLeft(_selectedGroup)"
      },
      _addAssocServiceData: {
        type: String,
        value: ""
      },
      _removeAssocServiceData: {
        type: String,
        value: ""
      },
      _removeBroadcastNodeServiceData: {
        type: String,
        value: ""
      },
      _isBroadcastNodeInGroup: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ["_selectedGroupChanged(groups, _selectedGroup)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshGroups(this.selectedNode);
      }, 5000);
    }
  }

  _computeAssociationsLeft(selectedGroup) {
    if (selectedGroup === -1) return true;
    return this._maxAssociations === this._otherGroupNodes.length;
  }

  _computeMaxAssociations(selectedGroup) {
    if (selectedGroup === -1) return -1;
    const maxAssociations = this.groups[selectedGroup].value.max_associations;
    if (!maxAssociations) return "None";
    return maxAssociations;
  }

  _computeOtherGroupNodes(selectedGroup) {
    if (selectedGroup === -1) return -1;
    this.setProperties({
      _isBroadcastNodeInGroup: false
    });
    const associations = Object.values(this.groups[selectedGroup].value.association_instances);
    if (!associations.length) return ["None"];
    return associations.map(assoc => {
      if (!assoc.length || assoc.length !== 2) {
        return `Unknown Node: ${assoc}`;
      }

      const id = assoc[0];
      const instance = assoc[1];
      const node = this.nodes.find(n => n.attributes.node_id === id);

      if (id === 255) {
        this.setProperties({
          _isBroadcastNodeInGroup: true,
          _removeBroadcastNodeServiceData: {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            association: "remove",
            target_node_id: 255,
            group: this.groups[selectedGroup].key
          }
        });
      }

      if (!node) {
        return `Unknown Node (${id}: (${instance} ? ${id}.${instance} : ${id}))`;
      }

      let caption = this._computeSelectCaption(node);

      if (instance) {
        caption += `/ Instance: ${instance}`;
      }

      return caption;
    });
  }

  _computeTargetInGroup(selectedGroup, selectedTargetNode) {
    if (selectedGroup === -1 || selectedTargetNode === -1) return false;
    const associations = Object.values(this.groups[selectedGroup].value.associations);
    if (!associations.length) return false;
    return associations.indexOf(this.nodes[selectedTargetNode].attributes.node_id) !== -1;
  }

  _computeSelectCaption(stateObj) {
    return `${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj)}
      (Node: ${stateObj.attributes.node_id}
      ${stateObj.attributes.query_stage})`;
  }

  _computeSelectCaptionGroup(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _computeIsTargetNodeSelected(selectedTargetNode) {
    return this.nodes && selectedTargetNode !== -1;
  }

  _computeIsGroupSelected(selectedGroup) {
    return this.nodes && this.selectedNode !== -1 && selectedGroup !== -1;
  }

  _computeAssocServiceData(selectedGroup, type) {
    if (!this.groups === -1 || selectedGroup === -1 || this.selectedNode === -1 || this._selectedTargetNode === -1) return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      association: type,
      target_node_id: this.nodes[this._selectedTargetNode].attributes.node_id,
      group: this.groups[selectedGroup].key
    };
  }

  async _refreshGroups(selectedNode) {
    const groupData = [];
    const groups = await this.hass.callApi("GET", `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(groups).forEach(key => {
      groupData.push({
        key,
        value: groups[key]
      });
    });
    this.setProperties({
      groups: groupData,
      _maxAssociations: groupData[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(groupData[this._selectedGroup].value.associations),
      _isBroadcastNodeInGroup: false
    });
    const oldGroup = this._selectedGroup;
    this.setProperties({
      _selectedGroup: -1
    });
    this.setProperties({
      _selectedGroup: oldGroup
    });
  }

  _selectedGroupChanged() {
    if (this._selectedGroup === -1) return;
    this.setProperties({
      _maxAssociations: this.groups[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(this.groups[this._selectedGroup].value.associations)
    });
  }

  _selectedTargetNodeChanged() {
    if (this._selectedGroup === -1) return;

    if (this._computeTargetInGroup(this._selectedGroup, this._selectedTargetNode)) {
      this.setProperties({
        _removeAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "remove")
      });
    } else {
      this.setProperties({
        _addAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "add")
      });
    }
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({
      _selectedTargetNode: -1,
      _selectedGroup: -1
    });
  }

}

customElements.define("zwave-groups", ZwaveGroups);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-log.js":
/*!**********************************************!*\
  !*** ./src/panels/config/zwave/zwave-log.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/config/is_pwa */ "./src/common/config/is_pwa.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");










let registeredDialog = false;

class OzwLog extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style include="iron-flex ha-style">
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 24px;
      }

    </style>
    <ha-config-section is-wide="[[isWide]]">
      <span slot="header">
        [[localize('ui.panel.config.zwave.ozw_log.header')]]
      </span>
      <span slot="introduction">
        [[localize('ui.panel.config.zwave.ozw_log.introduction')]]
      </span>
      <ha-card class="content">
        <div class="device-picker">
          <paper-input label="Number of last log lines." type="number" min="0" max="1000" step="10" value="{{numLogLines}}">
          </paper-input>
        </div>
        <div class="card-actions">
          <mwc-button raised="true" on-click="_openLogWindow">Load</mwc-button>
          <mwc-button raised="true" on-click="_tailLog" disabled="{{_completeLog}}">Tail</mwc-button>
      </ha-card>
    </ha-config-section>
`;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: {
        type: Boolean,
        value: false
      },
      _ozwLogs: String,
      _completeLog: {
        type: Boolean,
        value: true
      },
      numLogLines: {
        type: Number,
        value: 0,
        observer: "_isCompleteLog"
      },
      _intervalId: String,
      tail: Boolean
    };
  }

  async _tailLog() {
    this.setProperties({
      tail: true
    });
    const ozwWindow = await this._openLogWindow();

    if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
      this.setProperties({
        _intervalId: setInterval(() => {
          this._refreshLog(ozwWindow);
        }, 1500)
      });
    }
  }

  async _openLogWindow() {
    const info = await this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);
    this.setProperties({
      _ozwLogs: info
    });

    if (Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
      this._showOzwlogDialog();

      return -1;
    }

    const ozwWindow = open("", "ozwLog", "toolbar");
    ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    return ozwWindow;
  }

  async _refreshLog(ozwWindow) {
    if (ozwWindow.closed === true) {
      clearInterval(this._intervalId);
      this.setProperties({
        _intervalId: null
      });
    } else {
      const info = await this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);
      this.setProperties({
        _ozwLogs: info
      });
      ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    }
  }

  _isCompleteLog() {
    if (this.numLogLines !== "0") {
      this.setProperties({
        _completeLog: false
      });
    } else {
      this.setProperties({
        _completeLog: true
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-ozwlog-dialog",
        dialogTag: "zwave-log-dialog",
        dialogImport: () => Promise.all(/*! import() | zwave-log-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("zwave-log-dialog")]).then(__webpack_require__.bind(null, /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js"))
      });
    }
  }

  _showOzwlogDialog() {
    this.fire("show-ozwlog-dialog", {
      hass: this.hass,
      _numLogLines: this.numLogLines,
      _ozwLog: this._ozwLogs,
      _tail: this.tail,
      dialogClosedCallback: () => this._dialogClosed()
    });
  }

  _dialogClosed() {
    this.setProperties({
      tail: false
    });
  }

}

customElements.define("ozw-log", OzwLog);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-network.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zwave/zwave-network.ts ***!
  \**************************************************/
/*! exports provided: ZwaveNetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNetwork", function() { return ZwaveNetwork; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
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












let ZwaveNetwork = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("zwave-network")], function (_initialize, _LitElement) {
  class ZwaveNetwork extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZwaveNetwork,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_showHelp",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_networkStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_unsubs",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._unsubscribe();
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(ZwaveNetwork.prototype), "firstUpdated", this).call(this, changedProps);

        this._getNetworkStatus();

        this._subscribe();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>
            ${this.hass.localize("ui.panel.config.zwave.network_management.header")}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <div slot="introduction">
          ${this.hass.localize("ui.panel.config.zwave.network_management.introduction")}
          <p>
            <a
              href="https://www.home-assistant.io/docs/z-wave/control-panel/"
              target="_blank"
            >
              ${this.hass.localize("ui.panel.config.zwave.learn_more")}
            </a>
          </p>
        </div>

        ${this._networkStatus ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
              <ha-card class="content network-status">
                <div class="details">
                  ${this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_STOPPED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <ha-icon icon="hass:close"></ha-icon>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_stopped")}
                      ` : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_STARTED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <paper-spinner active></paper-spinner>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_starting")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_starting_note")}
                        </small>
                      ` : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        <ha-icon icon="hass:checkbox-marked-circle"> </ha-icon>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_started")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_some_queried")}
                        </small>
                      ` : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_READY"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_started")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_all_queried")}
                        </small>
                      ` : ""}
                </div>
                <div class="card-actions">
                  ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this._generateServiceButton("stop_network")}
                        ${this._generateServiceButton("heal_network")}
                        ${this._generateServiceButton("test_network")}
                      ` : lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                        ${this._generateServiceButton("start_network")}
                      `}
                </div>
                ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                      <div class="card-actions">
                        ${this._generateServiceButton("soft_reset")}
                        <ha-call-api-button
                          .hass=${this.hass}
                          path="zwave/saveconfig"
                        >
                          ${this.hass.localize("ui.panel.config.zwave.services.save_config")}
                        </ha-call-api-button>
                      </div>
                    ` : ""}
              </ha-card>
              ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
                    <ha-card class="content">
                      <div class="card-actions">
                        ${this._generateServiceButton("add_node_secure")}
                        ${this._generateServiceButton("add_node")}
                        ${this._generateServiceButton("remove_node")}
                      </div>
                      <div class="card-actions">
                        ${this._generateServiceButton("cancel_command")}
                      </div>
                    </ha-card>
                  ` : ""}
            ` : ""}
      </ha-config-section>
    `;
      }
    }, {
      kind: "method",
      key: "_getNetworkStatus",
      value: async function _getNetworkStatus() {
        this._networkStatus = await Object(_data_zwave__WEBPACK_IMPORTED_MODULE_4__["fetchNetworkStatus"])(this.hass);
      }
    }, {
      kind: "method",
      key: "_subscribe",
      value: function _subscribe() {
        this._unsubs = ["zwave.network_start", "zwave.network_stop", "zwave.network_ready", "zwave.network_complete", "zwave.network_complete_some_dead"].map(e => this.hass.connection.subscribeEvents(event => this._handleEvent(event), e));
      }
    }, {
      kind: "method",
      key: "_unsubscribe",
      value: function _unsubscribe() {
        while (this._unsubs.length) {
          this._unsubs.pop().then(unsub => unsub());
        }
      }
    }, {
      kind: "method",
      key: "_handleEvent",
      value: function _handleEvent(event) {
        if (event.event_type === "zwave.network_start") {
          // Optimistically set the state, wait 1s and poll the backend
          // The backend will still report a state of 0 when the 'network_start'
          // event is first fired.
          if (this._networkStatus) {
            this._networkStatus = Object.assign({}, this._networkStatus, {
              state: 5
            });
          }

          setTimeout(() => this._getNetworkStatus, 1000);
        } else {
          this._getNetworkStatus();
        }
      }
    }, {
      kind: "method",
      key: "_onHelpTap",
      value: function _onHelpTap() {
        this._showHelp = !this._showHelp;
      }
    }, {
      kind: "method",
      key: "_generateServiceButton",
      value: function _generateServiceButton(service) {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-call-service-button
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
      >
        ${this.hass.localize("ui.panel.config.zwave.services." + service)}
      </ha-call-service-button>
      <ha-service-description
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
        ?hidden=${!this._showHelp}
      >
      </ha-service-description>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        .network-status {
          text-align: center;
        }

        .network-status div.details {
          font-size: 1.5rem;
          padding: 24px;
        }

        .network-status ha-icon {
          display: block;
          margin: 0px auto 16px;
          width: 48px;
          height: 48px;
        }

        .network-status small {
          font-size: 1rem;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
          padding: 0 8px 12px;
        }

        [hidden] {
          display: none;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-config.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-config.ts ***!
  \******************************************************/
/*! exports provided: ZwaveNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNodeConfig", function() { return ZwaveNodeConfig; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");
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










let ZwaveNodeConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("zwave-node-config")], function (_initialize, _LitElement) {
  class ZwaveNodeConfig extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZwaveNodeConfig,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "nodes",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "config",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "selectedNode",

      value() {
        return -1;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_configItem",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_wakeupInput",

      value() {
        return -1;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_selectedConfigParameter",

      value() {
        return -1;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_selectedConfigValue",

      value() {
        return -1;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="content">
        <ha-card
          .header=${this.hass.localize("ui.panel.config.zwave.node_config.header")}
        >
          ${"wake_up_interval" in this.nodes[this.selectedNode].attributes ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <div class="card-actions">
                  <paper-input
                    .floatLabel="${this.hass.localize("ui.panel.config.zwave.common.wakeup_interval")}"
                    type="number"
                    .value=${this._wakeupInput !== -1 ? this._wakeupInput : this.hass.localize("ui.panel.config.zwave.common.unknown")}
                    @value-changed=${this._onWakeupIntervalChanged}
                    .placeholder=${this.nodes[this.selectedNode].attributes.wake_up_interval ? this.nodes[this.selectedNode].attributes.wake_up_interval : this.hass.localize("ui.panel.config.zwave.common.unknown")}
                  >
                    <div suffix>
                      ${this.hass.localize("ui.panel.config.zwave.node_config.seconds")}
                    </div>
                  </paper-input>
                  <ha-call-service-button
                    .hass=${this.hass}
                    domain="zwave"
                    service="set_wakeup"
                    .serviceData=${this._computeWakeupServiceData(this._wakeupInput)}
                  >
                    ${this.hass.localize("ui.panel.config.zwave.node_config.set_wakeup")}
                  </ha-call-service-button>
                </div>
              ` : ""}
          <div class="device-picker">
            <paper-dropdown-menu
              .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_parameter")}
              dynamic-align
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._selectedConfigParameter}
                @iron-select=${this._selectedConfigParameterChanged}
              >
                ${this.config.map(state => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                    <paper-item>
                      ${state.key}: ${state.value.label}
                    </paper-item>
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this._configItem ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                ${this._configItem.value.type === "List" ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <div class="device-picker">
                        <paper-dropdown-menu
                          .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_value")}
                          dynamic-align
                          class="flex"
                          .placeholder=${this._configItem.value.data}
                        >
                          <paper-listbox
                            slot="dropdown-content"
                            .selected=${this._configItem.value.data}
                            @iron-select=${this._configValueSelectChanged}
                          >
                            ${this._configItem.value.data_items.map(state => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                                <paper-item>${state}</paper-item>
                              `)}
                          </paper-listbox>
                        </paper-dropdown-menu>
                      </div>
                    ` : ""}
                ${["Byte", "Short", "Int"].includes(this._configItem.value.type) ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <div class="card-actions">
                        <paper-input
                          .label=${this._configItem.value.data_items}
                          type="number"
                          .value=${this._configItem.value.data}
                          .max=${this._configItem.value.max}
                          .min=${this._configItem.value.min}
                          @value-changed=${this._configValueInputChanged}
                        >
                        </paper-input>
                      </div>
                    ` : ""}
                ${["Bool", "Button"].includes(this._configItem.value.type) ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <div class="device-picker">
                        <paper-dropdown-menu
                          .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_value")}
                          class="flex"
                          dynamic-align
                          .placeholder=${this._configItem.value.data}
                        >
                          <paper-listbox
                            slot="dropdown-content"
                            .selected=${this._configItem.value.data}
                            @iron-select=${this._configValueSelectChanged}
                          >
                            <paper-item>
                              ${this.hass.localize("ui.panel.config.zwave.node_config.true")}
                            </paper-item>
                            <paper-item>
                              ${this.hass.localize("ui.panel.config.zwave.node_config.false")}
                            </paper-item>
                          </paper-listbox>
                        </paper-dropdown-menu>
                      </div>
                    ` : ""}
                <div class="help-text">
                  <span>${this._configItem.value.help}</span>
                </div>
                ${["Bool", "Button", "Byte", "Short", "Int", "List"].includes(this._configItem.value.type) ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <div class="card-actions">
                        <ha-call-service-button
                          .hass=${this.hass}
                          domain="zwave"
                          service="set_config_parameter"
                          .serviceData=${this._computeSetConfigParameterServiceData()}
                        >
                          ${this.hass.localize("ui.panel.config.zwave.node_config.set_config_parameter")}
                        </ha-call-service-button>
                      </div>
                    ` : ""}
              ` : ""}
        </ha-card>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
      `];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(ZwaveNodeConfig.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(ZwaveNodeConfig.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("selectedNode")) {
          this._nodesChanged();
        }
      }
    }, {
      kind: "method",
      key: "serviceCalled",
      value: function serviceCalled(ev) {
        if (ev.detail.success) {
          setTimeout(() => {
            this._refreshConfig(this.selectedNode);
          }, 5000);
        }
      }
    }, {
      kind: "method",
      key: "_nodesChanged",
      value: function _nodesChanged() {
        if (!this.nodes) {
          return;
        }

        this._configItem = undefined;
        this._wakeupInput = this.nodes[this.selectedNode].attributes.hasOwnProperty("wake_up_interval") ? this.nodes[this.selectedNode].attributes.wake_up_interval : -1;
      }
    }, {
      kind: "method",
      key: "_onWakeupIntervalChanged",
      value: function _onWakeupIntervalChanged(value) {
        this._wakeupInput = value.detail.value;
      }
    }, {
      kind: "method",
      key: "_computeWakeupServiceData",
      value: function _computeWakeupServiceData(wakeupInput) {
        return {
          node_id: this.nodes[this.selectedNode].attributes.node_id,
          value: wakeupInput
        };
      }
    }, {
      kind: "method",
      key: "_computeSetConfigParameterServiceData",
      value: function _computeSetConfigParameterServiceData() {
        if (this.selectedNode === -1 || typeof this._configItem === "undefined") {
          return false;
        }

        let valueData = "";

        if (["Short", "Byte", "Int"].includes(this._configItem.value.type)) {
          valueData = typeof this._selectedConfigValue === "string" ? parseInt(this._selectedConfigValue, 10) : this._selectedConfigValue;
        }

        if (["Bool", "Button", "List"].includes(this._configItem.value.type)) {
          valueData = this._selectedConfigValue;
        }

        return {
          node_id: this.nodes[this.selectedNode].attributes.node_id,
          parameter: this._configItem.key,
          value: valueData
        };
      }
    }, {
      kind: "method",
      key: "_selectedConfigParameterChanged",
      value: function _selectedConfigParameterChanged(event) {
        if (event.target.selected === -1) {
          return;
        }

        this._selectedConfigParameter = event.target.selected;
        this._configItem = this.config[event.target.selected];
      }
    }, {
      kind: "method",
      key: "_configValueSelectChanged",
      value: function _configValueSelectChanged(event) {
        if (event.target.selected === -1) {
          return;
        }

        this._selectedConfigValue = event.target.selectedItem.textContent;
      }
    }, {
      kind: "method",
      key: "_configValueInputChanged",
      value: function _configValueInputChanged(value) {
        this._selectedConfigValue = value.detail.value;
      }
    }, {
      kind: "method",
      key: "_refreshConfig",
      value: async function _refreshConfig(selectedNode) {
        const configData = [];
        const config = await Object(_data_zwave__WEBPACK_IMPORTED_MODULE_8__["fetchNodeConfig"])(this.hass, this.nodes[selectedNode].attributes.node_id);
        Object.keys(config).forEach(key => {
          configData.push({
            key: parseInt(key, 10),
            value: config[key]
          });
        });
        this.config = configData;
        this._configItem = this.config[this._selectedConfigParameter];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-protection.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-protection.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









class ZwaveNodeProtection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="iron-flex ha-style">
      .card-actions.warning ha-call-api-button {
        color: var(--google-red-500);
      }
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        padding: 0 24px 24px 24px;
        }

    </style>
      <div class="content">
        <ha-card header="Node protection">
          <div class="device-picker">
          <paper-dropdown-menu label="Protection" dynamic-align class="flex" placeholder="{{_loadedProtectionValue}}">
            <paper-listbox slot="dropdown-content" selected="{{_selectedProtectionParameter}}">
              <template is="dom-repeat" items="[[_protectionOptions]]" as="state">
                <paper-item>[[state]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
          </div>
          <div class="card-actions">
            <ha-call-api-button
              hass="[[hass]]"
              path="[[_nodePath]]"
              data="[[_protectionData]]">
              Set Protection
            </ha-call-service-button>
          </div>
        </ha-card>
      </div>
`;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      selectedNode: {
        type: Number,
        value: -1
      },
      protectionNode: {
        type: Boolean,
        value: false
      },
      _protectionValueID: {
        type: Number,
        value: -1
      },
      _selectedProtectionParameter: {
        type: Number,
        value: -1,
        observer: "_computeProtectionData"
      },
      _protectionOptions: Array,
      _protection: {
        type: Array,
        value: () => []
      },
      _loadedProtectionValue: {
        type: String,
        value: ""
      },
      _protectionData: {
        type: Object,
        value: {}
      },
      _nodePath: String
    };
  }

  static get observers() {
    return ["_nodesChanged(nodes, selectedNode)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-api-called", ev => this.apiCalled(ev));
  }

  apiCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshProtection(this.selectedNode);
      }, 5000);
    }
  }

  _nodesChanged() {
    if (!this.nodes) return;

    if (this.protection) {
      if (this.protection.length === 0) {
        return;
      }

      this.setProperties({
        protectionNode: true,
        _protectionOptions: this.protection[0].value,
        _loadedProtectionValue: this.protection[1].value,
        _protectionValueID: this.protection[2].value
      });
    }
  }

  async _refreshProtection(selectedNode) {
    const protectionValues = [];
    const protections = await this.hass.callApi("GET", `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(protections).forEach(key => {
      protectionValues.push({
        key,
        value: protections[key]
      });
    });
    this.setProperties({
      _protection: protectionValues,
      _selectedProtectionParameter: -1,
      _loadedProtectionValue: this.protection[1].value
    });
  }

  _computeProtectionData(selectedProtectionParameter) {
    if (this.selectedNode === -1 || selectedProtectionParameter === -1) return;
    this._protectionData = {
      selection: this._protectionOptions[selectedProtectionParameter],
      value_id: this._protectionValueID
    };
    this._nodePath = `zwave/protection/${this.nodes[this.selectedNode].attributes.node_id}`;
  }

}

customElements.define("zwave-node-protection", ZwaveNodeProtection);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-usercodes.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/zwave-usercodes.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









class ZwaveUsercodes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node user codes">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Code slot"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedUserCode}}"
              >
                <template is="dom-repeat" items="[[userCodes]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <template is="dom-if" if="[[_isUserCodeSelected(_selectedUserCode)]]">
            <div class="card-actions">
              <paper-input
                label="User code"
                type="text"
                allowed-pattern="[0-9,a-f,x,\\\\]"
                maxlength="40"
                minlength="16"
                value="{{_selectedUserCodeValue}}"
              >
              </paper-input>
              <pre>Ascii: [[_computedCodeOutput]]</pre>
            </div>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="set_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, "Add")]]'
              >
                Set Usercode
              </ha-call-service-button>
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="clear_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCode, "Delete")]]'
              >
                Delete Usercode
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged"
      },
      userCodes: Object,
      _selectedUserCode: {
        type: Number,
        value: -1,
        observer: "_selectedUserCodeChanged"
      },
      _selectedUserCodeValue: String,
      _computedCodeOutput: {
        type: String,
        value: ""
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshUserCodes(this.selectedNode);
      }, 5000);
    }
  }

  _isUserCodeSelected(selectedUserCode) {
    if (selectedUserCode === -1) return false;
    return true;
  }

  _computeSelectCaptionUserCodes(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _selectedUserCodeChanged(selectedUserCode) {
    if (this._selectedUserCode === -1 || selectedUserCode === -1) return;
    const value = this.userCodes[selectedUserCode].value.code;
    this.setProperties({
      _selectedUserCodeValue: this._a2hex(value),
      _computedCodeOutput: `[${this._hex2a(this._a2hex(value))}]`
    });
  }

  _computeUserCodeServiceData(selectedUserCodeValue, type) {
    if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
    let serviceData = null;
    let valueData = null;

    if (type === "Add") {
      valueData = this._hex2a(selectedUserCodeValue);
      this._computedCodeOutput = `[${valueData}]`;
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode,
        usercode: valueData
      };
    }

    if (type === "Delete") {
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode
      };
    }

    return serviceData;
  }

  async _refreshUserCodes(selectedNode) {
    this.setProperties({
      _selectedUserCodeValue: ""
    });
    const userCodes = [];
    const userCodeData = await this.hass.callApi("GET", `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(userCodeData).forEach(key => {
      userCodes.push({
        key,
        value: userCodeData[key]
      });
    });
    this.setProperties({
      userCodes: userCodes
    });

    this._selectedUserCodeChanged(this._selectedUserCode);
  }

  _a2hex(str) {
    const arr = [];
    let output = "";

    for (let i = 0, l = str.length; i < l; i++) {
      const hex = Number(str.charCodeAt(i)).toString(16);

      if (hex === "0") {
        output = "00";
      } else {
        output = hex;
      }

      arr.push("\\x" + output);
    }

    return arr.join("");
  }

  _hex2a(hexx) {
    const hex = hexx.toString();
    const hexMod = hex.replace(/\\x/g, "");
    let str = "";

    for (let i = 0; i < hexMod.length; i += 2) {
      str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
    }

    return str;
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({
      _selecteduserCode: -1
    });
  }

}

customElements.define("zwave-usercodes", ZwaveUsercodes);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-values.ts":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-values.ts ***!
  \*************************************************/
/*! exports provided: ZwaveValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveValues", function() { return ZwaveValues; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
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








let ZwaveValues = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zwave-values")], function (_initialize, _LitElement) {
  class ZwaveValues extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZwaveValues,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "values",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedValue",

      value() {
        return -1;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <div class="content">
        <ha-card
          .header=${this.hass.localize("ui.panel.config.zwave.values.header")}
        >
          <div class="device-picker">
            <paper-dropdown-menu
              .label=${this.hass.localize("ui.panel.config.zwave.common.value")}
              dynamic-align
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._selectedValue}
              >
                ${this.values.map(item => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                    <paper-item>
                      ${this._computeCaption(item)}
                    </paper-item>
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </ha-card>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_computeCaption",
      value: function _computeCaption(item) {
        let out = `${item.value.label}`;
        out += ` (${this.hass.localize("ui.panel.config.zwave.common.instance")}:`;
        out += ` ${item.value.instance},`;
        out += ` ${this.hass.localize("ui.panel.config.zwave.common.index")}:`;
        out += ` ${item.value.index})`;
        return out;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXp3YXZlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfcHdhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3p3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpcm1hdGlvbi9zaG93LWRpYWxvZy1jb25maXJtYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvaGEtYXBwLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvaGEtY29uZmlnLXp3YXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLWdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbmV0d29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLWNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ub2RlLXByb3RlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtdXNlcmNvZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLXZhbHVlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtBcHBMYXlvdXRCZWhhdmlvcn0gZnJvbSAnLi4vYXBwLWxheW91dC1iZWhhdmlvci9hcHAtbGF5b3V0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5hcHAtaGVhZGVyLWxheW91dCBpcyBhIHdyYXBwZXIgZWxlbWVudCB0aGF0IHBvc2l0aW9ucyBhbiBhcHAtaGVhZGVyIGFuZCBvdGhlclxuY29udGVudC4gVGhpcyBlbGVtZW50IHVzZXMgdGhlIGRvY3VtZW50IHNjcm9sbCBieSBkZWZhdWx0LCBidXQgaXQgY2FuIGFsc29cbmRlZmluZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG5cblVzaW5nIHRoZSBkb2N1bWVudCBzY3JvbGw6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dD5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuVXNpbmcgYW4gb3duIHNjcm9sbGluZyByZWdpb246XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbiBzdHlsZT1cIndpZHRoOiAzMDBweDsgaGVpZ2h0OiA0MDBweDtcIj5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQWRkIHRoZSBgZnVsbGJsZWVkYCBhdHRyaWJ1dGUgdG8gYXBwLWhlYWRlci1sYXlvdXQgdG8gbWFrZSBpdCBmaXQgdGhlIHNpemUgb2Zcbml0cyBjb250YWluZXI6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBmdWxsYmxlZWQ+XG4gLi4uXG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkBncm91cCBBcHAgRWxlbWVudHNcbkBlbGVtZW50IGFwcC1oZWFkZXItbGF5b3V0XG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3NpbXBsZS5odG1sIFNpbXBsZSBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL211c2ljLmh0bWwgTXVzaWMgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9mb290ZXIuaHRtbCBGb290ZXIgRGVtb1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyLFxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtaGVhZGVyLWxheW91dCcsXG4gIGJlaGF2aW9yczogW0FwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB3aWxsIGhhdmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGRvY3VtZW50IHNjcm9sbCB0byBjb250cm9sIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaGFzU2Nyb2xsaW5nUmVnaW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ3Jlc2V0TGF5b3V0KGlzQXR0YWNoZWQsIGhhc1Njcm9sbGluZ1JlZ2lvbiknXSxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFwcC1oZWFkZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGhlYWRlclxuICAgKi9cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMuJC5oZWFkZXJTbG90KS5nZXREaXN0cmlidXRlZE5vZGVzKClbMF07XG4gIH0sXG5cbiAgX3VwZGF0ZUxheW91dFN0YXRlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICFoZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsaXppbmcgY2xhc3MsIHdoaWNoIHN0YXRpY2x5IHBvc2l0aW9ucyB0aGUgaGVhZGVyIGFuZFxuICAgIC8vIHRoZSBjb250ZW50IHVudGlsIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLiQud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsaXppbmcnKTtcbiAgICAvLyBVcGRhdGUgc2Nyb2xsIHRhcmdldC5cbiAgICBoZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24gP1xuICAgICAgICB0aGlzLiQuY29udGVudENvbnRhaW5lciA6XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gR2V0IGhlYWRlciBoZWlnaHQgaGVyZSBzbyB0aGF0IHN0eWxlIHJlYWRzIGFyZSBiYXRjaGVkIHRvZ2V0aGVyIGJlZm9yZVxuICAgIC8vIHN0eWxlIHdyaXRlcyAoaS5lLiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBiZWxvdykuXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gVXBkYXRlIHRoZSBoZWFkZXIgcG9zaXRpb24uXG4gICAgaWYgKCF0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodE9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gcmlnaHRPZmZzZXQgKyAncHgnO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyIHBvc2l0aW9uLlxuICAgIHZhciBjb250YWluZXJTdHlsZSA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlO1xuICAgIGlmIChoZWFkZXIuZml4ZWQgJiYgIWhlYWRlci5jb25kZW5zZXMgJiYgdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgc2l6ZSBkb2VzIG5vdCBjaGFuZ2UgYW5kIHdlJ3JlIHVzaW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbixcbiAgICAgIC8vIGV4Y2x1ZGUgdGhlIGhlYWRlciBhcmVhIGZyb20gdGhlIHNjcm9sbGluZyByZWdpb24gc28gdGhhdCB0aGUgaGVhZGVyXG4gICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgdGhlIHNjcm9sbGJhci5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKiBSZXR1cm4gaWYgdGhlIGRpc3BsYXltb2RlIGlzIGluIHN0YW5kYWxvbmUgbW9kZSAoUFdBKS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUHdhKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzO1xufVxuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKlxuICogU29ydCBmdW5jdGlvbiB0byBoZWxwIHNvcnQgc3RhdGVzIGJ5IG5hbWVcbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3Qgc3RhdGVzID0gW3N0YXRlMSwgc3RhdGUyXVxuICogICBzdGF0ZXMuc29ydChzdGF0ZXNzb3J0U3RhdGVzQnlOYW1lKTtcbiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGNvbnN0IHNvcnRTdGF0ZXNCeU5hbWUgPSAoZW50aXR5QTogSGFzc0VudGl0eSwgZW50aXR5QjogSGFzc0VudGl0eSkgPT4ge1xuICBjb25zdCBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gIGNvbnN0IG5hbWVCID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlCKTtcbiAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmNsYXNzIEhhQ2FsbEFwaUJ1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgIC5wcm9ncmVzcz1cIiR7dGhpcy5wcm9ncmVzc31cIlxuICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2J1dHRvblRhcHBlZH1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgPjxzbG90Pjwvc2xvdFxuICAgICAgPjwvaGEtcHJvZ3Jlc3MtYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWV0aG9kID0gXCJQT1NUXCI7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBwcm9ncmVzczogQm9vbGVhbixcbiAgICAgIHBhdGg6IFN0cmluZyxcbiAgICAgIG1ldGhvZDogU3RyaW5nLFxuICAgICAgZGF0YToge30sXG4gICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzQnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcImhhLXByb2dyZXNzLWJ1dHRvblwiKTtcbiAgfVxuXG4gIGFzeW5jIF9idXR0b25UYXBwZWQoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRydWU7XG4gICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaSh0aGlzLm1ldGhvZCwgdGhpcy5wYXRoLCB0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9ncmVzc0J1dHRvbi5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICBldmVudERhdGEucmVzcG9uc2UgPSByZXNwO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9ncmVzc0J1dHRvbi5hY3Rpb25FcnJvcigpO1xuICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIGV2ZW50RGF0YS5yZXNwb25zZSA9IGVycjtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLWFwaS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYWxsLWFwaS1idXR0b25cIiwgSGFDYWxsQXBpQnV0dG9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvY29uZmlybWF0aW9uL3Nob3ctZGlhbG9nLWNvbmZpcm1hdGlvblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjYWxsU2VydmljZSgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uKSB7XG4gICAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuY2FsbFNlcnZpY2UoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxTZXJ2aWNlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFTZXJ2aWNlRGVzY3JpcHRpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICBbW19nZXREZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpXV1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2U6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgX2dldERlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIHZhciBkb21haW5TZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgICBpZiAoIWRvbWFpblNlcnZpY2VzKSByZXR1cm4gXCJcIjtcbiAgICB2YXIgc2VydmljZU9iamVjdCA9IGRvbWFpblNlcnZpY2VzW3NlcnZpY2VdO1xuICAgIGlmICghc2VydmljZU9iamVjdCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIHNlcnZpY2VPYmplY3QuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2VydmljZS1kZXNjcmlwdGlvblwiLCBIYVNlcnZpY2VEZXNjcmlwdGlvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVOZXR3b3JrU3RhdHVzIHtcbiAgc3RhdGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZVZhbHVlIHtcbiAga2V5OiBudW1iZXI7XG4gIHZhbHVlOiB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBpbnN0YW5jZTogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcG9sbF9pbnRlbnNpdHk6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZUNvbmZpZ0l0ZW0ge1xuICBrZXk6IG51bWJlcjtcbiAgdmFsdWU6IHtcbiAgICBkYXRhOiBhbnk7XG4gICAgZGF0YV9pdGVtczogYW55W107XG4gICAgaGVscDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgbWluOiBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlQ29uZmlnU2VydmljZURhdGEge1xuICBub2RlX2lkOiBudW1iZXI7XG4gIHBhcmFtZXRlcjogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlTm9kZSB7XG4gIGF0dHJpYnV0ZXM6IFpXYXZlQXR0cmlidXRlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZUF0dHJpYnV0ZXMge1xuICBub2RlX2lkOiBudW1iZXI7XG4gIHdha2VfdXBfaW50ZXJ2YWw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUT1BQRUQgPSAwO1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfRkFJTEVEID0gMTtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURUQgPSA1O1xuZXhwb3J0IGNvbnN0IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEID0gNztcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZID0gMTA7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE5ldHdvcmtTdGF0dXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IFByb21pc2U8WldhdmVOZXR3b3JrU3RhdHVzPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6d2F2ZS9uZXR3b3JrX3N0YXR1c1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVmFsdWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIG5vZGVJZDogbnVtYmVyKSA9PlxuICBoYXNzLmNhbGxBcGk8WldhdmVWYWx1ZVtdPihcIkdFVFwiLCBgendhdmUvdmFsdWVzLyR7bm9kZUlkfWApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hOb2RlQ29uZmlnID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIG5vZGVJZDogbnVtYmVyKSA9PlxuICBoYXNzLmNhbGxBcGk8WldhdmVDb25maWdJdGVtW10+KFwiR0VUXCIsIGB6d2F2ZS9jb25maWcvJHtub2RlSWR9YCk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgY29uZmlybUJ0blRleHQ/OiBzdHJpbmc7XG4gIGNhbmNlbEJ0blRleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm06ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlybWF0aW9uRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1jb25maXJtYXRpb25cIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1jb25maXJtYXRpb25cIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRDb25maXJtYXRpb25EaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGFwcC1oZWFkZXItbGF5b3V0LlxuJ2Z1bGxibGVlZCcgc3VwcG9ydCBpcyByZW1vdmVkIGFzIEhvbWUgQXNzaXNzdGFudCBkb2Vzbid0IHVzZSBpdC5cbnRyYW5zZm9ybTogdHJhbnNsYXRlKDApIGlzIGFkZGVkLlxuKi9cbi8qXG4gIEZJWE1FKHBvbHltZXItbW9kdWxpemVyKTogdGhlIGFib3ZlIGNvbW1lbnRzIHdlcmUgZXh0cmFjdGVkXG4gIGZyb20gSFRNTCBhbmQgbWF5IGJlIG91dCBvZiBwbGFjZSBoZXJlLiBSZXZpZXcgdGhlbSBhbmRcbiAgdGhlbiBkZWxldGUgdGhpcyBjb21tZW50IVxuKi9cbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQXBwTGF5b3V0IGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KFwiYXBwLWhlYWRlci1sYXlvdXRcIikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKVxuICAgICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZ1xuICAgICAgICAgIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIC8qIFVzaW5nICd0cmFuc2Zvcm0nIHdpbGwgY2F1c2UgJ3Bvc2l0aW9uOiBmaXhlZCcgZWxlbWVudHMgdG8gYmVoYXZlIGxpa2VcbiAgICAgICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgcmVsYXRpdmUgdG8gdGhpcyBlbGVtZW50LiAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdCBpZD1cImZhYlwiIG5hbWU9XCJmYWJcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1hcHAtbGF5b3V0XCIsIEhhQXBwTGF5b3V0KTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIiwiY29uc3QgZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuXG5kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJoYS1mb3JtLXN0eWxlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC0yO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwLnZlcnRpY2FsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUuZm9ybS1jb250cm9sIHtcbiAgICAgICAgbWFyZ2luOiAtOXB4IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuLi9oYS1mb3JtLXN0eWxlXCI7XG5pbXBvcnQgXCIuL3p3YXZlLWdyb3Vwc1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1sb2dcIjtcbmltcG9ydCBcIi4vendhdmUtbmV0d29ya1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1ub2RlLWNvbmZpZ1wiO1xuaW1wb3J0IFwiLi96d2F2ZS11c2VyY29kZXNcIjtcbmltcG9ydCBcIi4vendhdmUtdmFsdWVzXCI7XG5pbXBvcnQgXCIuL3p3YXZlLW5vZGUtcHJvdGVjdGlvblwiO1xuXG5pbXBvcnQgeyBzb3J0U3RhdGVzQnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVzX3NvcnRfYnlfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ1p3YXZlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlIGhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbkhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj1cIlwiPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ9XCJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIl9iYWNrVGFwcGVkXCJcbiAgICAgICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU9XCJcIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnp3YXZlLmNhcHRpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPHp3YXZlLW5ldHdvcmtcbiAgICAgICAgICBpZD1cInp3YXZlLW5ldHdvcmtcIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICA+PC96d2F2ZS1uZXR3b3JrPlxuXG4gICAgICAgIDwhLS0gTm9kZSBjYXJkIC0tPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlotV2F2ZSBOb2RlIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJ0b2dnbGVIZWxwXCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgUnVuIFotV2F2ZSBjb21tYW5kcyB0aGF0IGFmZmVjdCBhIHNpbmdsZSBub2RlLiBQaWNrIGEgbm9kZSB0byBzZWUgYVxuICAgICAgICAgICAgbGlzdCBvZiBhdmFpbGFibGUgY29tbWFuZHMuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBkeW5hbWljLWFsaWduPVwiXCIgbGFiZWw9XCJOb2Rlc1wiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWROb2RlfX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0hlbHBdXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogZ3JleTsgcGFkZGluZzogMTJweFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IG5vZGUgdG8gdmlldyBwZXItbm9kZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZnJlc2ggTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbbm9kZUZhaWxlZF1dXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIEZhaWxlZCBOb2RlXG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlcGxhY2VfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVwbGFjZSBGYWlsZWQgTm9kZVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVwbGFjZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicHJpbnRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcmludCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInByaW50X25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlSGVhbE5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEhlYWwgTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJ0ZXN0X25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGVzdCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInRlc3Rfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9ub2RlTW9yZUluZm9cIlxuICAgICAgICAgICAgICAgICAgPk5vZGUgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50aXRpZXMgb2YgdGhpcyBub2RlXCJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZEVudGl0eX19XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbc3RhdGUuZW50aXR5X2lkXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1shY29tcHV0ZUlzRW50aXR5U2VsZWN0ZWQoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVSZWZyZXNoRW50aXR5U2VydmljZURhdGEoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZWZyZXNoIEVudGl0eVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9lbnRpdHlNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgID5FbnRpdHkgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRXhjbHVkZSB0aGlzIGVudGl0eSBmcm9tIEhvbWUgQXNzaXN0YW50XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwie3tlbnRpdHlJZ25vcmVkfX1cIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvbGxpbmcgaW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7ZW50aXR5UG9sbGluZ0ludGVuc2l0eX19XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3BvbGxfaW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlUG9sbEludGVuc2l0eVNlcnZpY2VEYXRhKGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlSXNOb2RlU2VsZWN0ZWQoc2VsZWN0ZWROb2RlKV1dXCI+XG4gICAgICAgICAgICA8IS0tIFZhbHVlIGNhcmQgLS0+XG4gICAgICAgICAgICA8endhdmUtdmFsdWVzXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICB2YWx1ZXM9XCJbW3ZhbHVlc11dXCJcbiAgICAgICAgICAgID48L3p3YXZlLXZhbHVlcz5cblxuICAgICAgICAgICAgPCEtLSBHcm91cCBjYXJkIC0tPlxuICAgICAgICAgICAgPHp3YXZlLWdyb3Vwc1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgZ3JvdXBzPVwiW1tncm91cHNdXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS1ncm91cHM+XG5cbiAgICAgICAgICAgIDwhLS0gQ29uZmlnIGNhcmQgLS0+XG4gICAgICAgICAgICA8endhdmUtbm9kZS1jb25maWdcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIGNvbmZpZz1cIltbY29uZmlnXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtbm9kZS1jb25maWc+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDwhLS0gUHJvdGVjdGlvbiBjYXJkIC0tPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwie3tfcHJvdGVjdGlvbk5vZGV9fVwiPlxuICAgICAgICAgICAgPHp3YXZlLW5vZGUtcHJvdGVjdGlvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgcHJvdGVjdGlvbj1cIltbX3Byb3RlY3Rpb25dXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS1ub2RlLXByb3RlY3Rpb24+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDwhLS0gVXNlciBDb2RlcyAtLT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cInt7aGFzTm9kZVVzZXJDb2Rlc319XCI+XG4gICAgICAgICAgICA8endhdmUtdXNlcmNvZGVzXG4gICAgICAgICAgICAgIGlkPVwiendhdmUtdXNlcmNvZGVzXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICB1c2VyLWNvZGVzPVwiW1t1c2VyQ29kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgID48L3p3YXZlLXVzZXJjb2Rlcz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDwhLS0gT3p3IGxvZyAtLT5cbiAgICAgICAgPG96dy1sb2cgaXMtd2lkZT1cIltbaXNXaWRlXV1cIiBoYXNzPVwiW1toYXNzXV1cIj48L296dy1sb2c+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlTm9kZXMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkTm9kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbm9kZUZhaWxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXRpZXMoc2VsZWN0ZWROb2RlKVwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRFbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcInNlbGVjdGVkRW50aXR5Q2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgdmFsdWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcblxuICAgICAgZ3JvdXBzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcblxuICAgICAgdXNlckNvZGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuXG4gICAgICBoYXNOb2RlVXNlckNvZGVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHNob3dIZWxwOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUlnbm9yZWQ6IEJvb2xlYW4sXG5cbiAgICAgIGVudGl0eVBvbGxpbmdJbnRlbnNpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvbk5vZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgc2VydmljZUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2VzcyAmJiBldi5kZXRhaWwuc2VydmljZSA9PT0gXCJzZXRfcG9sbF9pbnRlbnNpdHlcIikge1xuICAgICAgdGhpcy5fc2F2ZUVudGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVOb2RlcyhoYXNzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLm1hcCgoa2V5KSA9PiBoYXNzLnN0YXRlc1trZXldKVxuICAgICAgLmZpbHRlcigoZW50KSA9PiBlbnQuZW50aXR5X2lkLm1hdGNoKFwiendhdmVbLl1cIikpXG4gICAgICAuc29ydChzb3J0U3RhdGVzQnlOYW1lKTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdGllcyhzZWxlY3RlZE5vZGUpIHtcbiAgICBpZiAoIXRoaXMubm9kZXMgfHwgc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIGNvbnN0IG5vZGVpZCA9IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZDtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhc3Muc3RhdGVzKVxuICAgICAgLm1hcCgoa2V5KSA9PiBoYXNzLnN0YXRlc1trZXldKVxuICAgICAgLmZpbHRlcigoZW50KSA9PiB7XG4gICAgICAgIGlmIChlbnQuYXR0cmlidXRlcy5ub2RlX2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAhZW50LmF0dHJpYnV0ZXMuaGlkZGVuICYmXG4gICAgICAgICAgXCJub2RlX2lkXCIgaW4gZW50LmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICBlbnQuYXR0cmlidXRlcy5ub2RlX2lkID09PSBub2RlaWQgJiZcbiAgICAgICAgICAhZW50LmVudGl0eV9pZC5tYXRjaChcInp3YXZlWy5dXCIpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLnNvcnQoc29ydFN0YXRlc0J5TmFtZSk7XG4gIH1cblxuICBzZWxlY3RlZE5vZGVDaGFuZ2VkKHNlbGVjdGVkTm9kZSkge1xuICAgIGlmIChzZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IC0xO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL2NvbmZpZy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKGNvbmZpZ3MpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9vYmpUb0FycmF5KGNvbmZpZ3MpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvdmFsdWVzLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy5fb2JqVG9BcnJheSh2YWx1ZXMpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvZ3JvdXBzLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoZ3JvdXBzKSA9PiB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5fb2JqVG9BcnJheShncm91cHMpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmhhc05vZGVVc2VyQ29kZXMgPSBmYWxzZTtcbiAgICB0aGlzLm5vdGlmeVBhdGgoXCJoYXNOb2RlVXNlckNvZGVzXCIpO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS91c2VyY29kZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKCh1c2VyY29kZXMpID0+IHtcbiAgICAgICAgdGhpcy51c2VyQ29kZXMgPSB0aGlzLl9vYmpUb0FycmF5KHVzZXJjb2Rlcyk7XG4gICAgICAgIHRoaXMuaGFzTm9kZVVzZXJDb2RlcyA9IHRoaXMudXNlckNvZGVzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMubm90aWZ5UGF0aChcImhhc05vZGVVc2VyQ29kZXNcIik7XG4gICAgICB9KTtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvcHJvdGVjdGlvbi8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHByb3RlY3Rpb25zKSA9PiB7XG4gICAgICAgIHRoaXMuX3Byb3RlY3Rpb24gPSB0aGlzLl9vYmpUb0FycmF5KHByb3RlY3Rpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuX3Byb3RlY3Rpb24pIHtcbiAgICAgICAgICBpZiAodGhpcy5fcHJvdGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fcHJvdGVjdGlvbk5vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMubm9kZUZhaWxlZCA9IHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLmlzX2ZhaWxlZDtcbiAgfVxuXG4gIHNlbGVjdGVkRW50aXR5Q2hhbmdlZChzZWxlY3RlZEVudGl0eSkge1xuICAgIGlmIChzZWxlY3RlZEVudGl0eSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvdmFsdWVzLyR7dGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLl9vYmpUb0FycmF5KHZhbHVlcyk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IHZhbHVlSWQgPSB0aGlzLmVudGl0aWVzW3NlbGVjdGVkRW50aXR5XS5hdHRyaWJ1dGVzLnZhbHVlX2lkO1xuICAgIGNvbnN0IHZhbHVlRGF0YSA9IHRoaXMudmFsdWVzLmZpbmQoKG9iaikgPT4gb2JqLmtleSA9PT0gdmFsdWVJZCk7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWVEYXRhKTtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgY29uZmlnL3p3YXZlL2RldmljZV9jb25maWcvJHt0aGlzLmVudGl0aWVzW3NlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBlbnRpdHlJZ25vcmVkOiBkYXRhLmlnbm9yZWQgfHwgZmFsc2UsXG4gICAgICAgICAgZW50aXR5UG9sbGluZ0ludGVuc2l0eTogdGhpcy52YWx1ZXNbdmFsdWVJbmRleF0udmFsdWUucG9sbF9pbnRlbnNpdHksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgZW50aXR5SWdub3JlZDogZmFsc2UsXG4gICAgICAgICAgZW50aXR5UG9sbGluZ0ludGVuc2l0eTogdGhpcy52YWx1ZXNbdmFsdWVJbmRleF0udmFsdWUucG9sbF9pbnRlbnNpdHksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSArXG4gICAgICBcIiAoTm9kZTpcIiArXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm5vZGVfaWQgK1xuICAgICAgXCIgXCIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZSArXG4gICAgICBcIilcIlxuICAgICk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0Q2FwdGlvbkVudChzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICsgXCIuXCIgKyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVJc05vZGVTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyAmJiB0aGlzLnNlbGVjdGVkTm9kZSAhPT0gLTE7XG4gIH1cblxuICBjb21wdXRlSXNFbnRpdHlTZWxlY3RlZChzZWxlY3RlZEVudGl0eSkge1xuICAgIHJldHVybiBzZWxlY3RlZEVudGl0eSA9PT0gLTE7XG4gIH1cblxuICBjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSkge1xuICAgIHJldHVybiB7IG5vZGVfaWQ6IHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQgfTtcbiAgfVxuXG4gIGNvbXB1dGVIZWFsTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgcmV0dXJuX3JvdXRlczogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVJlZnJlc2hFbnRpdHlTZXJ2aWNlRGF0YShzZWxlY3RlZEVudGl0eSkge1xuICAgIGlmIChzZWxlY3RlZEVudGl0eSA9PT0gLTEpIHJldHVybiAtMTtcbiAgICByZXR1cm4geyBlbnRpdHlfaWQ6IHRoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZCB9O1xuICB9XG5cbiAgY29tcHV0ZVBvbGxJbnRlbnNpdHlTZXJ2aWNlRGF0YShlbnRpdHlQb2xsaW5nSW50ZW5zaXR5KSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgdGhpcy5zZWxlY3RlZEVudGl0eSA9PT0gLTEpIHJldHVybiAtMTtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgdmFsdWVfaWQ6IHRoaXMuZW50aXRpZXNbdGhpcy5zZWxlY3RlZEVudGl0eV0uYXR0cmlidXRlcy52YWx1ZV9pZCxcbiAgICAgIHBvbGxfaW50ZW5zaXR5OiBwYXJzZUludChlbnRpdHlQb2xsaW5nSW50ZW5zaXR5KSxcbiAgICB9O1xuICB9XG5cbiAgX25vZGVNb3JlSW5mbygpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgX2VudGl0eU1vcmVJbmZvKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLmVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIF9zYXZlRW50aXR5KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpZ25vcmVkOiB0aGlzLmVudGl0eUlnbm9yZWQsXG4gICAgICBwb2xsaW5nX2ludGVuc2l0eTogcGFyc2VJbnQodGhpcy5lbnRpdHlQb2xsaW5nSW50ZW5zaXR5KSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgYGNvbmZpZy96d2F2ZS9kZXZpY2VfY29uZmlnLyR7XG4gICAgICAgIHRoaXMuZW50aXRpZXNbdGhpcy5zZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkXG4gICAgICB9YCxcbiAgICAgIGRhdGFcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlSGVscCgpIHtcbiAgICB0aGlzLnNob3dIZWxwID0gIXRoaXMuc2hvd0hlbHA7XG4gIH1cblxuICBfb2JqVG9BcnJheShvYmopIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogb2JqW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBfYmFja1RhcHBlZCgpIHtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctendhdmVcIiwgSGFDb25maWdad2F2ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuY2xhc3MgWndhdmVHcm91cHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiIGhlYWRlcj1cIk5vZGUgZ3JvdXAgYXNzb2NpYXRpb25zXCI+XG4gICAgICAgIDwhLS0gVE9ETyBtYWtlIGFwaSBmb3IgZ2V0dGluZyBncm91cHMgYW5kIG1lbWJlcnMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJHcm91cFwiIGR5bmFtaWMtYWxpZ249XCJcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZEdyb3VwfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2dyb3Vwc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uR3JvdXAoc3RhdGUpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlSXNHcm91cFNlbGVjdGVkKF9zZWxlY3RlZEdyb3VwKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsPVwiTm9kZSB0byBjb250cm9sXCJcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRUYXJnZXROb2RlfX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tub2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tfY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGUpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+T3RoZXIgTm9kZXMgaW4gdGhpcyBncm91cDo8L3NwYW4+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19vdGhlckdyb3VwTm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgPGRpdj5bW3N0YXRlXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+TWF4IEFzc29jaWF0aW9uczo8L3NwYW4+IDxzcGFuPltbX21heEFzc29jaWF0aW9uc11dPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj1cIltbX2NvbXB1dGVJc1RhcmdldE5vZGVTZWxlY3RlZChfc2VsZWN0ZWRUYXJnZXROb2RlKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX25vQXNzb2NpYXRpb25zTGVmdF1dXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNoYW5nZV9hc3NvY2lhdGlvblwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfYWRkQXNzb2NTZXJ2aWNlRGF0YV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCBUbyBHcm91cFxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgaWY9XCJbW19jb21wdXRlVGFyZ2V0SW5Hcm91cChfc2VsZWN0ZWRHcm91cCwgX3NlbGVjdGVkVGFyZ2V0Tm9kZSldXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNoYW5nZV9hc3NvY2lhdGlvblwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfcmVtb3ZlQXNzb2NTZXJ2aWNlRGF0YV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZSBGcm9tIEdyb3VwXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXBdXVwiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjaGFuZ2VfYXNzb2NpYXRpb25cIlxuICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbX3JlbW92ZUJyb2FkY2FzdE5vZGVTZXJ2aWNlRGF0YV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZSBCcm9hZGNhc3RcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIG5vZGVzOiBBcnJheSxcblxuICAgICAgZ3JvdXBzOiBBcnJheSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkTm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZFRhcmdldE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zZWxlY3RlZFRhcmdldE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRHcm91cDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgIH0sXG5cbiAgICAgIF9vdGhlckdyb3VwTm9kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVPdGhlckdyb3VwTm9kZXMoX3NlbGVjdGVkR3JvdXApXCIsXG4gICAgICB9LFxuXG4gICAgICBfbWF4QXNzb2NpYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlTWF4QXNzb2NpYXRpb25zKF9zZWxlY3RlZEdyb3VwKVwiLFxuICAgICAgfSxcblxuICAgICAgX25vQXNzb2NpYXRpb25zTGVmdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVBc3NvY2lhdGlvbnNMZWZ0KF9zZWxlY3RlZEdyb3VwKVwiLFxuICAgICAgfSxcblxuICAgICAgX2FkZEFzc29jU2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9yZW1vdmVBc3NvY1NlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfcmVtb3ZlQnJvYWRjYXN0Tm9kZVNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX3NlbGVjdGVkR3JvdXBDaGFuZ2VkKGdyb3VwcywgX3NlbGVjdGVkR3JvdXApXCJdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgc2VydmljZUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hHcm91cHModGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVBc3NvY2lhdGlvbnNMZWZ0KHNlbGVjdGVkR3JvdXApIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9tYXhBc3NvY2lhdGlvbnMgPT09IHRoaXMuX290aGVyR3JvdXBOb2Rlcy5sZW5ndGg7XG4gIH1cblxuICBfY29tcHV0ZU1heEFzc29jaWF0aW9ucyhzZWxlY3RlZEdyb3VwKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgY29uc3QgbWF4QXNzb2NpYXRpb25zID0gdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0udmFsdWUubWF4X2Fzc29jaWF0aW9ucztcbiAgICBpZiAoIW1heEFzc29jaWF0aW9ucykgcmV0dXJuIFwiTm9uZVwiO1xuICAgIHJldHVybiBtYXhBc3NvY2lhdGlvbnM7XG4gIH1cblxuICBfY29tcHV0ZU90aGVyR3JvdXBOb2RlcyhzZWxlY3RlZEdyb3VwKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGFzc29jaWF0aW9ucyA9IE9iamVjdC52YWx1ZXMoXG4gICAgICB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS52YWx1ZS5hc3NvY2lhdGlvbl9pbnN0YW5jZXNcbiAgICApO1xuICAgIGlmICghYXNzb2NpYXRpb25zLmxlbmd0aCkgcmV0dXJuIFtcIk5vbmVcIl07XG4gICAgcmV0dXJuIGFzc29jaWF0aW9ucy5tYXAoKGFzc29jKSA9PiB7XG4gICAgICBpZiAoIWFzc29jLmxlbmd0aCB8fCBhc3NvYy5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgcmV0dXJuIGBVbmtub3duIE5vZGU6ICR7YXNzb2N9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkID0gYXNzb2NbMF07XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGFzc29jWzFdO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZXMuZmluZCgobikgPT4gbi5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IGlkKTtcbiAgICAgIGlmIChpZCA9PT0gMjU1KSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IHRydWUsXG4gICAgICAgICAgX3JlbW92ZUJyb2FkY2FzdE5vZGVTZXJ2aWNlRGF0YToge1xuICAgICAgICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgICAgICAgYXNzb2NpYXRpb246IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICB0YXJnZXRfbm9kZV9pZDogMjU1LFxuICAgICAgICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLmtleSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm4gYFVua25vd24gTm9kZSAoJHtpZH06ICgke2luc3RhbmNlfSA/ICR7aWR9LiR7aW5zdGFuY2V9IDogJHtpZH0pKWA7XG4gICAgICB9XG4gICAgICBsZXQgY2FwdGlvbiA9IHRoaXMuX2NvbXB1dGVTZWxlY3RDYXB0aW9uKG5vZGUpO1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGNhcHRpb24gKz0gYC8gSW5zdGFuY2U6ICR7aW5zdGFuY2V9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVUYXJnZXRJbkdyb3VwKHNlbGVjdGVkR3JvdXAsIHNlbGVjdGVkVGFyZ2V0Tm9kZSkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSB8fCBzZWxlY3RlZFRhcmdldE5vZGUgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYXNzb2NpYXRpb25zID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgIHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uc1xuICAgICk7XG4gICAgaWYgKCFhc3NvY2lhdGlvbnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIGFzc29jaWF0aW9ucy5pbmRleE9mKFxuICAgICAgICB0aGlzLm5vZGVzW3NlbGVjdGVkVGFyZ2V0Tm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkXG4gICAgICApICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7Y29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iail9XG4gICAgICAoTm9kZTogJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm5vZGVfaWR9XG4gICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMucXVlcnlfc3RhZ2V9KWA7XG4gIH1cblxuICBfY29tcHV0ZVNlbGVjdENhcHRpb25Hcm91cChzdGF0ZU9iaikge1xuICAgIHJldHVybiBgJHtzdGF0ZU9iai5rZXl9OiAke3N0YXRlT2JqLnZhbHVlLmxhYmVsfWA7XG4gIH1cblxuICBfY29tcHV0ZUlzVGFyZ2V0Tm9kZVNlbGVjdGVkKHNlbGVjdGVkVGFyZ2V0Tm9kZSkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHNlbGVjdGVkVGFyZ2V0Tm9kZSAhPT0gLTE7XG4gIH1cblxuICBfY29tcHV0ZUlzR3JvdXBTZWxlY3RlZChzZWxlY3RlZEdyb3VwKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMgJiYgdGhpcy5zZWxlY3RlZE5vZGUgIT09IC0xICYmIHNlbGVjdGVkR3JvdXAgIT09IC0xO1xuICB9XG5cbiAgX2NvbXB1dGVBc3NvY1NlcnZpY2VEYXRhKHNlbGVjdGVkR3JvdXAsIHR5cGUpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5ncm91cHMgPT09IC0xIHx8XG4gICAgICBzZWxlY3RlZEdyb3VwID09PSAtMSB8fFxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhcmdldE5vZGUgPT09IC0xXG4gICAgKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICBhc3NvY2lhdGlvbjogdHlwZSxcbiAgICAgIHRhcmdldF9ub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuX3NlbGVjdGVkVGFyZ2V0Tm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLmtleSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgX3JlZnJlc2hHcm91cHMoc2VsZWN0ZWROb2RlKSB7XG4gICAgY29uc3QgZ3JvdXBEYXRhID0gW107XG4gICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL2dyb3Vwcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICk7XG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGdyb3VwRGF0YS5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogZ3JvdXBzW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgZ3JvdXBzOiBncm91cERhdGEsXG4gICAgICBfbWF4QXNzb2NpYXRpb25zOiBncm91cERhdGFbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUubWF4X2Fzc29jaWF0aW9ucyxcbiAgICAgIF9vdGhlckdyb3VwTm9kZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIGdyb3VwRGF0YVt0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5hc3NvY2lhdGlvbnNcbiAgICAgICksXG4gICAgICBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3Qgb2xkR3JvdXAgPSB0aGlzLl9zZWxlY3RlZEdyb3VwO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZEdyb3VwOiAtMSB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRHcm91cDogb2xkR3JvdXAgfSk7XG4gIH1cblxuICBfc2VsZWN0ZWRHcm91cENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9tYXhBc3NvY2lhdGlvbnM6IHRoaXMuZ3JvdXBzW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLm1heF9hc3NvY2lhdGlvbnMsXG4gICAgICBfb3RoZXJHcm91cE5vZGVzOiBPYmplY3QudmFsdWVzKFxuICAgICAgICB0aGlzLmdyb3Vwc1t0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5hc3NvY2lhdGlvbnNcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0ZWRUYXJnZXROb2RlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybjtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9jb21wdXRlVGFyZ2V0SW5Hcm91cCh0aGlzLl9zZWxlY3RlZEdyb3VwLCB0aGlzLl9zZWxlY3RlZFRhcmdldE5vZGUpXG4gICAgKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfcmVtb3ZlQXNzb2NTZXJ2aWNlRGF0YTogdGhpcy5fY29tcHV0ZUFzc29jU2VydmljZURhdGEoXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRHcm91cCxcbiAgICAgICAgICBcInJlbW92ZVwiXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgX2FkZEFzc29jU2VydmljZURhdGE6IHRoaXMuX2NvbXB1dGVBc3NvY1NlcnZpY2VEYXRhKFxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkR3JvdXAsXG4gICAgICAgICAgXCJhZGRcIlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkTm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZFRhcmdldE5vZGU6IC0xLCBfc2VsZWN0ZWRHcm91cDogLTEgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiendhdmUtZ3JvdXBzXCIsIFp3YXZlR3JvdXBzKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgaXNQd2EgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25maWcvaXNfcHdhXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcblxuY2xhc3MgT3p3TG9nIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG4gICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy56d2F2ZS5vendfbG9nLmhlYWRlcicpXV1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnp3YXZlLm96d19sb2cuaW50cm9kdWN0aW9uJyldXVxuICAgICAgPC9zcGFuPlxuICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiTnVtYmVyIG9mIGxhc3QgbG9nIGxpbmVzLlwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbWF4PVwiMTAwMFwiIHN0ZXA9XCIxMFwiIHZhbHVlPVwie3tudW1Mb2dMaW5lc319XCI+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQ9XCJ0cnVlXCIgb24tY2xpY2s9XCJfb3BlbkxvZ1dpbmRvd1wiPkxvYWQ8L213Yy1idXR0b24+XG4gICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPVwidHJ1ZVwiIG9uLWNsaWNrPVwiX3RhaWxMb2dcIiBkaXNhYmxlZD1cInt7X2NvbXBsZXRlTG9nfX1cIj5UYWlsPC9td2MtYnV0dG9uPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfb3p3TG9nczogU3RyaW5nLFxuXG4gICAgICBfY29tcGxldGVMb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBudW1Mb2dMaW5lczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvYnNlcnZlcjogXCJfaXNDb21wbGV0ZUxvZ1wiLFxuICAgICAgfSxcblxuICAgICAgX2ludGVydmFsSWQ6IFN0cmluZyxcblxuICAgICAgdGFpbDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgX3RhaWxMb2coKSB7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdGFpbDogdHJ1ZSB9KTtcbiAgICBjb25zdCBvendXaW5kb3cgPSBhd2FpdCB0aGlzLl9vcGVuTG9nV2luZG93KCk7XG4gICAgaWYgKCFpc1B3YSgpKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfaW50ZXJ2YWxJZDogc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlZnJlc2hMb2cob3p3V2luZG93KTtcbiAgICAgICAgfSwgMTUwMCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfb3BlbkxvZ1dpbmRvdygpIHtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCJ6d2F2ZS9vendsb2c/bGluZXM9XCIgKyB0aGlzLm51bUxvZ0xpbmVzXG4gICAgKTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfb3p3TG9nczogaW5mbyB9KTtcbiAgICBpZiAoaXNQd2EoKSkge1xuICAgICAgdGhpcy5fc2hvd096d2xvZ0RpYWxvZygpO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBjb25zdCBvendXaW5kb3cgPSBvcGVuKFwiXCIsIFwib3p3TG9nXCIsIFwidG9vbGJhclwiKTtcbiAgICBvendXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZT4ke3RoaXMuX296d0xvZ3N9PC9wcmU+YDtcbiAgICByZXR1cm4gb3p3V2luZG93O1xuICB9XG5cbiAgYXN5bmMgX3JlZnJlc2hMb2cob3p3V2luZG93KSB7XG4gICAgaWYgKG96d1dpbmRvdy5jbG9zZWQgPT09IHRydWUpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfaW50ZXJ2YWxJZDogbnVsbCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBcInp3YXZlL296d2xvZz9saW5lcz1cIiArIHRoaXMubnVtTG9nTGluZXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfb3p3TG9nczogaW5mbyB9KTtcbiAgICAgIG96d1dpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlPiR7dGhpcy5fb3p3TG9nc308L3ByZT5gO1xuICAgIH1cbiAgfVxuXG4gIF9pc0NvbXBsZXRlTG9nKCkge1xuICAgIGlmICh0aGlzLm51bUxvZ0xpbmVzICE9PSBcIjBcIikge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX2NvbXBsZXRlTG9nOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX2NvbXBsZXRlTG9nOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyZShcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LW96d2xvZy1kaWFsb2dcIixcbiAgICAgICAgZGlhbG9nVGFnOiBcInp3YXZlLWxvZy1kaWFsb2dcIixcbiAgICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiendhdmUtbG9nLWRpYWxvZ1wiICovIFwiLi96d2F2ZS1sb2ctZGlhbG9nXCJcbiAgICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dPendsb2dEaWFsb2coKSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1vendsb2ctZGlhbG9nXCIsIHtcbiAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgIF9udW1Mb2dMaW5lczogdGhpcy5udW1Mb2dMaW5lcyxcbiAgICAgIF9vendMb2c6IHRoaXMuX296d0xvZ3MsXG4gICAgICBfdGFpbDogdGhpcy50YWlsLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHRoaXMuX2RpYWxvZ0Nsb3NlZCgpLFxuICAgIH0pO1xuICB9XG5cbiAgX2RpYWxvZ0Nsb3NlZCgpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgdGFpbDogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm96dy1sb2dcIiwgT3p3TG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgZmV0Y2hOZXR3b3JrU3RhdHVzLFxuICBaV2F2ZU5ldHdvcmtTdGF0dXMsXG4gIFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRCxcbiAgWldBVkVfTkVUV09SS19TVEFURV9SRUFEWSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvendhdmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtYXBpLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtbmV0d29ya1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlTmV0d29yayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93SGVscCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uZXR3b3JrU3RhdHVzPzogWldhdmVOZXR3b3JrU3RhdHVzO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bnN1YnM6IEFycmF5PFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPj4gPSBbXTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZ2V0TmV0d29ya1N0YXR1cygpO1xuICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19tYW5hZ2VtZW50LmhlYWRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19tYW5hZ2VtZW50LmludHJvZHVjdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9kb2NzL3otd2F2ZS9jb250cm9sLXBhbmVsL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5sZWFybl9tb3JlXCIpfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnQgbmV0d29yay1zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUT1BQRURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6Y2xvc2VcIj48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RvcHBlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGluZ19ub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIj4gPC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZF9ub3RlX3NvbWVfcXVlcmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID09PSBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRfbm90ZV9hbGxfcXVlcmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInN0b3BfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiaGVhbF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJ0ZXN0X25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInN0YXJ0X25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPj0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInNvZnRfcmVzZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtY2FsbC1hcGktYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiendhdmUvc2F2ZWNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5zZXJ2aWNlcy5zYXZlX2NvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtYXBpLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJhZGRfbm9kZV9zZWN1cmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImFkZF9ub2RlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJyZW1vdmVfbm9kZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImNhbmNlbF9jb21tYW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldE5ldHdvcmtTdGF0dXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IGF3YWl0IGZldGNoTmV0d29ya1N0YXR1cyh0aGlzLmhhc3MhKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YnMgPSBbXG4gICAgICBcInp3YXZlLm5ldHdvcmtfc3RhcnRcIixcbiAgICAgIFwiendhdmUubmV0d29ya19zdG9wXCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfcmVhZHlcIixcbiAgICAgIFwiendhdmUubmV0d29ya19jb21wbGV0ZVwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX2NvbXBsZXRlX3NvbWVfZGVhZFwiLFxuICAgIF0ubWFwKChlKSA9PlxuICAgICAgdGhpcy5oYXNzIS5jb25uZWN0aW9uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVFdmVudChldmVudCksXG4gICAgICAgIGVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgd2hpbGUgKHRoaXMuX3Vuc3Vicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Vuc3Vicy5wb3AoKSEudGhlbigodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmV2ZW50X3R5cGUgPT09IFwiendhdmUubmV0d29ya19zdGFydFwiKSB7XG4gICAgICAvLyBPcHRpbWlzdGljYWxseSBzZXQgdGhlIHN0YXRlLCB3YWl0IDFzIGFuZCBwb2xsIHRoZSBiYWNrZW5kXG4gICAgICAvLyBUaGUgYmFja2VuZCB3aWxsIHN0aWxsIHJlcG9ydCBhIHN0YXRlIG9mIDAgd2hlbiB0aGUgJ25ldHdvcmtfc3RhcnQnXG4gICAgICAvLyBldmVudCBpcyBmaXJzdCBmaXJlZC5cbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSB7IC4uLnRoaXMuX25ldHdvcmtTdGF0dXMsIHN0YXRlOiA1IH07XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2dldE5ldHdvcmtTdGF0dXMsIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nZXROZXR3b3JrU3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKHNlcnZpY2U6IHN0cmluZykge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgc2VydmljZT1cIiR7c2VydmljZX1cIlxuICAgICAgPlxuICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuendhdmUuc2VydmljZXMuXCIgKyBzZXJ2aWNlKX1cbiAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgIHNlcnZpY2U9XCIke3NlcnZpY2V9XCJcbiAgICAgICAgP2hpZGRlbj0keyF0aGlzLl9zaG93SGVscH1cbiAgICAgID5cbiAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIGhhLWljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTZweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6d2F2ZS1uZXR3b3JrXCI6IFp3YXZlTmV0d29yaztcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHtcbiAgWldhdmVDb25maWdJdGVtLFxuICBaV2F2ZU5vZGUsXG4gIFpXYXZlQ29uZmlnU2VydmljZURhdGEsXG4gIGZldGNoTm9kZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvendhdmVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6d2F2ZS1ub2RlLWNvbmZpZ1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlTm9kZUNvbmZpZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub2RlczogWldhdmVOb2RlW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZzogWldhdmVDb25maWdJdGVtW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNlbGVjdGVkTm9kZTogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0l0ZW0/OiBaV2F2ZUNvbmZpZ0l0ZW07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dha2V1cElucHV0OiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXI6IG51bWJlciA9IC0xO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1ZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAtMTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuaGVhZGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgJHtcIndha2VfdXBfaW50ZXJ2YWxcIiBpbiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIC5mbG9hdExhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi53YWtldXBfaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl93YWtldXBJbnB1dCAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3dha2V1cElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24udW5rbm93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX29uV2FrZXVwSW50ZXJ2YWxDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgLndha2VfdXBfaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLndha2VfdXBfaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi51bmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3VmZml4PlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNlY29uZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfd2FrZXVwXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPSR7dGhpcy5fY29tcHV0ZVdha2V1cFNlcnZpY2VEYXRhKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dha2V1cElucHV0XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5zZXRfd2FrZXVwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmNvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyfVxuICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jb25maWcubWFwKFxuICAgICAgICAgICAgICAgICAgKHN0YXRlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAke3N0YXRlLmtleX06ICR7c3RhdGUudmFsdWUubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9jb25maWdJdGVtXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLnR5cGUgPT09IFwiTGlzdFwiXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YV9pdGVtcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7c3RhdGV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7W1wiQnl0ZVwiLCBcIlNob3J0XCIsIFwiSW50XCJdLmluY2x1ZGVzKHRoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZSlcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhX2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWF4PSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5tYXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5taW49JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLm1pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9jb25maWdWYWx1ZUlucHV0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke1tcIkJvb2xcIiwgXCJCdXR0b25cIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmNvbmZpZ192YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fY29uZmlnVmFsdWVTZWxlY3RDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLmZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuaGVscH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgJHtbXCJCb29sXCIsIFwiQnV0dG9uXCIsIFwiQnl0ZVwiLCBcIlNob3J0XCIsIFwiSW50XCIsIFwiTGlzdFwiXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X2NvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VydmljZURhdGE9JHt0aGlzLl9jb21wdXRlU2V0Q29uZmlnUGFyYW1ldGVyU2VydmljZURhdGEoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNldF9jb25maWdfcGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInNlbGVjdGVkTm9kZVwiKSkge1xuICAgICAgdGhpcy5fbm9kZXNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXJ2aWNlQ2FsbGVkKGV2KTogdm9pZCB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaENvbmZpZyh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fd2FrZXVwSW5wdXQgPSB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KFxuICAgICAgXCJ3YWtlX3VwX2ludGVydmFsXCJcbiAgICApXG4gICAgICA/IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMud2FrZV91cF9pbnRlcnZhbCFcbiAgICAgIDogLTE7XG4gIH1cblxuICBwcml2YXRlIF9vbldha2V1cEludGVydmFsQ2hhbmdlZCh2YWx1ZTogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl93YWtldXBJbnB1dCA9IHZhbHVlLmRldGFpbCEudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlV2FrZXVwU2VydmljZURhdGEod2FrZXVwSW5wdXQ6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZTogd2FrZXVwSW5wdXQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVTZXRDb25maWdQYXJhbWV0ZXJTZXJ2aWNlRGF0YSgpOlxuICAgIHwgWldhdmVDb25maWdTZXJ2aWNlRGF0YVxuICAgIHwgYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCB0eXBlb2YgdGhpcy5fY29uZmlnSXRlbSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdmFsdWVEYXRhOiBudW1iZXIgfCBzdHJpbmcgPSBcIlwiO1xuICAgIGlmIChbXCJTaG9ydFwiLCBcIkJ5dGVcIiwgXCJJbnRcIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbSEudmFsdWUudHlwZSkpIHtcbiAgICAgIHZhbHVlRGF0YSA9XG4gICAgICAgIHR5cGVvZiB0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBwYXJzZUludCh0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlLCAxMClcbiAgICAgICAgICA6IHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWU7XG4gICAgfVxuICAgIGlmIChbXCJCb29sXCIsIFwiQnV0dG9uXCIsIFwiTGlzdFwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtIS52YWx1ZS50eXBlKSkge1xuICAgICAgdmFsdWVEYXRhID0gdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHBhcmFtZXRlcjogdGhpcy5fY29uZmlnSXRlbS5rZXksXG4gICAgICB2YWx1ZTogdmFsdWVEYXRhLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlckNoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyID0gZXZlbnQudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICB0aGlzLl9jb25maWdJdGVtID0gdGhpcy5jb25maWdbZXZlbnQudGFyZ2V0IS5zZWxlY3RlZF07XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPSBldmVudC50YXJnZXQhLnNlbGVjdGVkSXRlbS50ZXh0Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1ZhbHVlSW5wdXRDaGFuZ2VkKHZhbHVlOiBDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVmcmVzaENvbmZpZyhzZWxlY3RlZE5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWdEYXRhOiBaV2F2ZUNvbmZpZ0l0ZW1bXSA9IFtdO1xuICAgIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGZldGNoTm9kZUNvbmZpZyhcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICApO1xuXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbmZpZ0RhdGEucHVzaCh7XG4gICAgICAgIGtleTogcGFyc2VJbnQoa2V5LCAxMCksXG4gICAgICAgIHZhbHVlOiBjb25maWdba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWdEYXRhO1xuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB0aGlzLmNvbmZpZ1t0aGlzLl9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcl07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICB2YWx1ZT86IGFueTtcbiAgfTtcbiAgdGFyZ2V0PzogRXZlbnRUYXJnZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlja2VyVGFyZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBzZWxlY3RlZDogbnVtYmVyO1xuICBzZWxlY3RlZEl0ZW0/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbVNlbGVjdGVkRXZlbnQge1xuICB0YXJnZXQ/OiBQaWNrZXJUYXJnZXQ7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6d2F2ZS1ub2RlLWNvbmZpZ1wiOiBad2F2ZU5vZGVDb25maWc7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuY2xhc3MgWndhdmVOb2RlUHJvdGVjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtYXBpLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweCAyNHB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJOb2RlIHByb3RlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiUHJvdGVjdGlvblwiIGR5bmFtaWMtYWxpZ24gY2xhc3M9XCJmbGV4XCIgcGxhY2Vob2xkZXI9XCJ7e19sb2FkZWRQcm90ZWN0aW9uVmFsdWV9fVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBzZWxlY3RlZD1cInt7X3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcn19XCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX3Byb3RlY3Rpb25PcHRpb25zXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tzdGF0ZV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8aGEtY2FsbC1hcGktYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhdGg9XCJbW19ub2RlUGF0aF1dXCJcbiAgICAgICAgICAgICAgZGF0YT1cIltbX3Byb3RlY3Rpb25EYXRhXV1cIj5cbiAgICAgICAgICAgICAgU2V0IFByb3RlY3Rpb25cbiAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIG5vZGVzOiBBcnJheSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgcHJvdGVjdGlvbk5vZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25WYWx1ZUlEOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2NvbXB1dGVQcm90ZWN0aW9uRGF0YVwiLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25PcHRpb25zOiBBcnJheSxcblxuICAgICAgX3Byb3RlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIF9ub2RlUGF0aDogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX25vZGVzQ2hhbmdlZChub2Rlcywgc2VsZWN0ZWROb2RlKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1hcGktY2FsbGVkXCIsIChldikgPT4gdGhpcy5hcGlDYWxsZWQoZXYpKTtcbiAgfVxuXG4gIGFwaUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hQcm90ZWN0aW9uKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9ub2Rlc0NoYW5nZWQoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSByZXR1cm47XG4gICAgaWYgKHRoaXMucHJvdGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvdGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgcHJvdGVjdGlvbk5vZGU6IHRydWUsXG4gICAgICAgIF9wcm90ZWN0aW9uT3B0aW9uczogdGhpcy5wcm90ZWN0aW9uWzBdLnZhbHVlLFxuICAgICAgICBfbG9hZGVkUHJvdGVjdGlvblZhbHVlOiB0aGlzLnByb3RlY3Rpb25bMV0udmFsdWUsXG4gICAgICAgIF9wcm90ZWN0aW9uVmFsdWVJRDogdGhpcy5wcm90ZWN0aW9uWzJdLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX3JlZnJlc2hQcm90ZWN0aW9uKHNlbGVjdGVkTm9kZSkge1xuICAgIGNvbnN0IHByb3RlY3Rpb25WYWx1ZXMgPSBbXTtcbiAgICBjb25zdCBwcm90ZWN0aW9ucyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS9wcm90ZWN0aW9uLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgKTtcbiAgICBPYmplY3Qua2V5cyhwcm90ZWN0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwcm90ZWN0aW9uVmFsdWVzLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBwcm90ZWN0aW9uc1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9wcm90ZWN0aW9uOiBwcm90ZWN0aW9uVmFsdWVzLFxuICAgICAgX3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcjogLTEsXG4gICAgICBfbG9hZGVkUHJvdGVjdGlvblZhbHVlOiB0aGlzLnByb3RlY3Rpb25bMV0udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZVByb3RlY3Rpb25EYXRhKHNlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb3RlY3Rpb25EYXRhID0ge1xuICAgICAgc2VsZWN0aW9uOiB0aGlzLl9wcm90ZWN0aW9uT3B0aW9uc1tzZWxlY3RlZFByb3RlY3Rpb25QYXJhbWV0ZXJdLFxuICAgICAgdmFsdWVfaWQ6IHRoaXMuX3Byb3RlY3Rpb25WYWx1ZUlELFxuICAgIH07XG4gICAgdGhpcy5fbm9kZVBhdGggPSBgendhdmUvcHJvdGVjdGlvbi8ke1xuICAgICAgdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkXG4gICAgfWA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiendhdmUtbm9kZS1wcm90ZWN0aW9uXCIsIFp3YXZlTm9kZVByb3RlY3Rpb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuY2xhc3MgWndhdmVVc2VyY29kZXMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJOb2RlIHVzZXIgY29kZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb2RlIHNsb3RcIlxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZFVzZXJDb2RlfX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t1c2VyQ29kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5bW19jb21wdXRlU2VsZWN0Q2FwdGlvblVzZXJDb2RlcyhzdGF0ZSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNVc2VyQ29kZVNlbGVjdGVkKF9zZWxlY3RlZFVzZXJDb2RlKV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlciBjb2RlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOSxhLWYseCxcXFxcXFxcXF1cIlxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19zZWxlY3RlZFVzZXJDb2RlVmFsdWV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPHByZT5Bc2NpaTogW1tfY29tcHV0ZWRDb2RlT3V0cHV0XV08L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cInNldF91c2VyY29kZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPSdbW19jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlLCBcIkFkZFwiKV1dJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2V0IFVzZXJjb2RlXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cImxvY2tcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjbGVhcl91c2VyY29kZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPSdbW19jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShfc2VsZWN0ZWRVc2VyQ29kZSwgXCJEZWxldGVcIildXSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZSBVc2VyY29kZVxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIG5vZGVzOiBBcnJheSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkTm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHVzZXJDb2RlczogT2JqZWN0LFxuXG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkVXNlckNvZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiBTdHJpbmcsXG5cbiAgICAgIF9jb21wdXRlZENvZGVPdXRwdXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VDYWxsZWQoZXYpIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoVXNlckNvZGVzKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9pc1VzZXJDb2RlU2VsZWN0ZWQoc2VsZWN0ZWRVc2VyQ29kZSkge1xuICAgIGlmIChzZWxlY3RlZFVzZXJDb2RlID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uVXNlckNvZGVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke3N0YXRlT2JqLmtleX06ICR7c3RhdGVPYmoudmFsdWUubGFiZWx9YDtcbiAgfVxuXG4gIF9zZWxlY3RlZFVzZXJDb2RlQ2hhbmdlZChzZWxlY3RlZFVzZXJDb2RlKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkVXNlckNvZGUgPT09IC0xIHx8IHNlbGVjdGVkVXNlckNvZGUgPT09IC0xKSByZXR1cm47XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnVzZXJDb2Rlc1tzZWxlY3RlZFVzZXJDb2RlXS52YWx1ZS5jb2RlO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiB0aGlzLl9hMmhleCh2YWx1ZSksXG4gICAgICBfY29tcHV0ZWRDb2RlT3V0cHV0OiBgWyR7dGhpcy5faGV4MmEodGhpcy5fYTJoZXgodmFsdWUpKX1dYCxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlVXNlckNvZGVTZXJ2aWNlRGF0YShzZWxlY3RlZFVzZXJDb2RlVmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8ICFzZWxlY3RlZFVzZXJDb2RlVmFsdWUpIHJldHVybiAtMTtcbiAgICBsZXQgc2VydmljZURhdGEgPSBudWxsO1xuICAgIGxldCB2YWx1ZURhdGEgPSBudWxsO1xuICAgIGlmICh0eXBlID09PSBcIkFkZFwiKSB7XG4gICAgICB2YWx1ZURhdGEgPSB0aGlzLl9oZXgyYShzZWxlY3RlZFVzZXJDb2RlVmFsdWUpO1xuICAgICAgdGhpcy5fY29tcHV0ZWRDb2RlT3V0cHV0ID0gYFske3ZhbHVlRGF0YX1dYDtcbiAgICAgIHNlcnZpY2VEYXRhID0ge1xuICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgIGNvZGVfc2xvdDogdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSxcbiAgICAgICAgdXNlcmNvZGU6IHZhbHVlRGF0YSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcIkRlbGV0ZVwiKSB7XG4gICAgICBzZXJ2aWNlRGF0YSA9IHtcbiAgICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgICBjb2RlX3Nsb3Q6IHRoaXMuX3NlbGVjdGVkVXNlckNvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZURhdGE7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaFVzZXJDb2RlcyhzZWxlY3RlZE5vZGUpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRVc2VyQ29kZVZhbHVlOiBcIlwiIH0pO1xuICAgIGNvbnN0IHVzZXJDb2RlcyA9IFtdO1xuICAgIGNvbnN0IHVzZXJDb2RlRGF0YSA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS91c2VyY29kZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHVzZXJDb2RlRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB1c2VyQ29kZXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHVzZXJDb2RlRGF0YVtrZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdXNlckNvZGVzOiB1c2VyQ29kZXMgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZUNoYW5nZWQodGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSk7XG4gIH1cblxuICBfYTJoZXgoc3RyKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBoZXggPSBOdW1iZXIoc3RyLmNoYXJDb2RlQXQoaSkpLnRvU3RyaW5nKDE2KTtcbiAgICAgIGlmIChoZXggPT09IFwiMFwiKSB7XG4gICAgICAgIG91dHB1dCA9IFwiMDBcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IGhleDtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKFwiXFxcXHhcIiArIG91dHB1dCk7XG4gICAgfVxuICAgIHJldHVybiBhcnIuam9pbihcIlwiKTtcbiAgfVxuXG4gIF9oZXgyYShoZXh4KSB7XG4gICAgY29uc3QgaGV4ID0gaGV4eC50b1N0cmluZygpO1xuICAgIGNvbnN0IGhleE1vZCA9IGhleC5yZXBsYWNlKC9cXFxceC9nLCBcIlwiKTtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhleE1vZC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4TW9kLnN1YnN0cihpLCAyKSwgMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIF9zZWxlY3RlZE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWR1c2VyQ29kZTogLTEgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiendhdmUtdXNlcmNvZGVzXCIsIFp3YXZlVXNlcmNvZGVzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IFpXYXZlVmFsdWUgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInp3YXZlLXZhbHVlc1wiKVxuZXhwb3J0IGNsYXNzIFp3YXZlVmFsdWVzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlczogWldhdmVWYWx1ZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkVmFsdWU6IG51bWJlciA9IC0xO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS52YWx1ZXMuaGVhZGVyXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24udmFsdWVcIil9XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy52YWx1ZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fY29tcHV0ZUNhcHRpb24oaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlQ2FwdGlvbihpdGVtKSB7XG4gICAgbGV0IG91dCA9IGAke2l0ZW0udmFsdWUubGFiZWx9YDtcbiAgICBvdXQgKz0gYCAoJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLmluc3RhbmNlXCIpfTpgO1xuICAgIG91dCArPSBgICR7aXRlbS52YWx1ZS5pbnN0YW5jZX0sYDtcbiAgICBvdXQgKz0gYCAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24uaW5kZXhcIil9OmA7XG4gICAgb3V0ICs9IGAgJHtpdGVtLnZhbHVlLmluZGV4fSlgO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLXZhbHVlc1wiOiBad2F2ZVZhbHVlcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFnRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3SUE7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMURBO0FBQ0E7QUEyREE7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhGQTtBQUNBO0FBaUZBOzs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoR0E7QUFDQTtBQWlHQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFEQTtBQUlBO0FBR0E7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUEsaTNCQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNFQTtBQUNBO0FBekVBO0FBQ0E7QUF5RUE7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFGQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXhFQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvbkJBO0FBQ0E7QUFnb0JBOzs7Ozs7Ozs7Ozs7QUN2cUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXhEQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFoV0E7QUFDQTtBQWlXQTs7Ozs7Ozs7Ozs7O0FDN1dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhXQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQW5KQTtBQUNBO0FBbUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUNBO0FBRUE7QUFXQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBOzs7QUFHQTs7OztBQU1BOzs7OztBQUtBOzs7Ozs7QUFRQTs7Ozs7QUFLQTs7O0FBSUE7O0FBR0E7QUFIQTs7QUFVQTs7QUFJQTs7QUFQQTs7QUFlQTs7QUFJQTs7QUFQQTtBQWNBOztBQUlBOztBQU5BOzs7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTs7QUFFQTs7QUFHQTs7QUFFQTs7O0FBR0E7OztBQVJBOztBQWdCQTs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBVEE7QUEzRUE7O0FBNUJBO0FBeUhBO0FBM0lBO0FBQUE7QUFBQTtBQUFBO0FBOElBO0FBQ0E7QUEvSUE7QUFBQTtBQUFBO0FBQUE7QUFrSkE7QUFZQTtBQTlKQTtBQUFBO0FBQUE7QUFBQTtBQWlLQTtBQUNBO0FBQ0E7QUFDQTtBQXBLQTtBQUFBO0FBQUE7QUFBQTtBQXVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsTEE7QUFBQTtBQUFBO0FBQUE7QUFxTEE7QUFDQTtBQXRMQTtBQUFBO0FBQUE7QUFBQTtBQXlMQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBWkE7QUFnQkE7QUF6TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkRBO0FBdlFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQVFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7O0FBR0E7O0FBSUE7OztBQUlBOztBQUlBO0FBS0E7QUFDQTs7O0FBU0E7Ozs7QUFNQTs7O0FBR0E7O0FBSUE7OztBQXBDQTs7O0FBNkNBOzs7Ozs7QUFRQTtBQUNBOztBQUVBOztBQUdBOztBQUhBOzs7O0FBVUE7QUFFQTs7O0FBSUE7OztBQUtBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBRkE7Ozs7QUFoQkE7QUEwQkE7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBVEE7QUFlQTs7O0FBSUE7OztBQUtBOzs7O0FBSUE7QUFDQTs7O0FBR0E7OztBQUtBOzs7OztBQXRCQTs7QUFnQ0E7O0FBRUE7OztBQU1BOzs7QUFHQTs7QUFFQTs7O0FBWEE7QUE3RUE7OztBQXpFQTtBQTZLQTtBQXhMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJDQTtBQXRPQTtBQUFBO0FBQUE7QUFBQTtBQXlPQTtBQUNBO0FBQUE7QUFHQTtBQTdPQTtBQUFBO0FBQUE7QUFBQTtBQWdQQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwUEE7QUFBQTtBQUFBO0FBQUE7QUF1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNVBBO0FBQUE7QUFBQTtBQUFBO0FBK1BBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBeFFBO0FBQUE7QUFBQTtBQUFBO0FBMlFBO0FBQ0E7QUE1UUE7QUFBQTtBQUFBO0FBQUE7QUErUUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQW5SQTtBQUFBO0FBQUE7QUFBQTtBQXdSQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBMVNBO0FBQUE7QUFBQTtBQUFBO0FBNlNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbFRBO0FBQUE7QUFBQTtBQUFBO0FBcVRBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXpUQTtBQUFBO0FBQUE7QUFBQTtBQTRUQTtBQUNBO0FBN1RBO0FBQUE7QUFBQTtBQUFBO0FBZ1VBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUEvVUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQTNDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQTVKQTtBQUNBO0FBNkpBOzs7Ozs7Ozs7Ozs7QUN4S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWhOQTtBQUNBO0FBaU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFHQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTUE7OztBQUdBOzs7O0FBSUE7Ozs7OztBQU1BOztBQUVBOztBQUdBOztBQUhBOzs7Ozs7QUFmQTtBQTRCQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJDQTtBQWhGQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpGQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==