(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-cloud"],{

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

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

/***/ "./src/data/alexa.ts":
/*!***************************!*\
  !*** ./src/data/alexa.ts ***!
  \***************************/
/*! exports provided: fetchCloudAlexaEntities, syncCloudAlexaEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudAlexaEntities", function() { return fetchCloudAlexaEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncCloudAlexaEntities", function() { return syncCloudAlexaEntities; });
const fetchCloudAlexaEntities = hass => hass.callWS({
  type: "cloud/alexa/entities"
});
const syncCloudAlexaEntities = hass => hass.callWS({
  type: "cloud/alexa/sync"
});

/***/ }),

/***/ "./src/data/webhook.ts":
/*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
/*! exports provided: fetchWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWebhooks", function() { return fetchWebhooks; });
const fetchWebhooks = hass => hass.callWS({
  type: "webhook/list"
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

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");


/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  navigate(...args) {
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
  }

}));

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-account.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-account.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cloud-webhooks */ "./src/panels/config/cloud/account/cloud-webhooks.ts");
/* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cloud-alexa-pref */ "./src/panels/config/cloud/account/cloud-alexa-pref.ts");
/* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cloud-google-pref */ "./src/panels/config/cloud/account/cloud-google-pref.ts");
/* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cloud-remote-pref */ "./src/panels/config/cloud/account/cloud-remote-pref.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");

















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudAccount extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex ha-style">
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        .account-row {
          display: flex;
          padding: 0 16px;
        }
        mwc-button {
          align-self: center;
        }
        .soon {
          font-style: italic;
          margin-top: 24px;
          text-align: center;
        }
        .nowrap {
          white-space: nowrap;
        }
        .wrap {
          white-space: normal;
        }
        .status {
          text-transform: capitalize;
          padding: 16px;
        }
        a {
          color: var(--primary-color);
        }
      </style>
      <hass-subpage header="[[localize('ui.panel.config.cloud.caption')]]">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.caption')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.account.thank_you_note')]]
              </p>
            </div>

            <ha-card
              header="[[localize('ui.panel.config.cloud.account.nabu_casa_account')]]"
            >
              <div class="account-row">
                <paper-item-body two-line="">
                  [[cloudStatus.email]]
                  <div secondary class="wrap">
                    [[_formatSubscription(_subscription)]]
                  </div>
                </paper-item-body>
              </div>

              <div class="account-row">
                <paper-item-body
                  >[[localize('ui.panel.config.cloud.account.connection_status')]]</paper-item-body
                >
                <div class="status">[[cloudStatus.cloud]]</div>
              </div>

              <div class="card-actions">
                <a href="https://account.nabucasa.com" target="_blank"
                  ><mwc-button
                    >[[localize('ui.panel.config.cloud.account.manage_account')]]</mwc-button
                  ></a
                >
                <mwc-button style="float: right" on-click="handleLogout"
                  >[[localize('ui.panel.config.cloud.account.sign_out')]]</mwc-button
                >
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.account.integrations')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.account.integrations_introduction')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.account.integrations_introduction2')]]
                <a href="https://www.nabucasa.com" target="_blank"
                  >[[localize('ui.panel.config.cloud.account.integrations_link_all_features')]]</a
                >.
              </p>
            </div>

            <cloud-remote-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-remote-pref>

            <cloud-alexa-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-alexa-pref>

            <cloud-google-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-google-pref>

            <cloud-webhooks
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-webhooks>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      cloudStatus: Object,
      _subscription: {
        type: Object,
        value: null
      }
    };
  }

  ready() {
    super.ready();

    this._fetchSubscriptionInfo();
  }

  _computeRemoteConnected(connected) {
    return connected ? this.hass.localize("ui.panel.config.cloud.account.connected") : this.hass.localize("ui.panel.config.cloud.account.not_connected");
  }

  async _fetchSubscriptionInfo() {
    this._subscription = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_14__["fetchCloudSubscriptionInfo"])(this.hass);

    if (this._subscription.provider && this.cloudStatus && this.cloudStatus.cloud !== "connected") {
      this.fire("ha-refresh-cloud-status");
    }
  }

  handleLogout() {
    this.hass.callApi("post", "cloud/logout").then(() => this.fire("ha-refresh-cloud-status"));
  }

  _formatSubscription(subInfo) {
    if (subInfo === null) {
      return this.hass.localize("ui.panel.config.cloud.account.fetching_subscription");
    }

    let description = subInfo.human_description;

    if (subInfo.plan_renewal_date) {
      description = description.replace("{periodEnd}", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(subInfo.plan_renewal_date * 1000), this.hass.language));
    }

    return description;
  }

}

customElements.define("cloud-account", CloudAccount);

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-alexa-pref.ts":
/*!*************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-alexa-pref.ts ***!
  \*************************************************************/
/*! exports provided: CloudAlexaPref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudAlexaPref", function() { return CloudAlexaPref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");
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




 // tslint:disable-next-line: no-duplicate-imports




let CloudAlexaPref = _decorate(null, function (_initialize, _LitElement) {
  class CloudAlexaPref extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudAlexaPref,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_syncing",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.cloudStatus) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          alexa_enabled,
          alexa_report_state
        } = this.cloudStatus.prefs;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.alexa.title")}
      >
        <div class="switch">
          <ha-switch
            .checked=${alexa_enabled}
            @change=${this._enabledToggleChanged}
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.alexa.info")}
          <ul>
            <li>
              <a
                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.alexa.enable_ha_skill")}
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/amazon_alexa/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.alexa.config_documentation")}
              </a>
            </li>
          </ul>
          ${alexa_enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="state-reporting">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.alexa.enable_state_reporting")}
                  </h3>
                  <div class="state-reporting-switch">
                    <ha-switch
                      .checked=${alexa_report_state}
                      @change=${this._reportToggleChanged}
                    ></ha-switch>
                  </div>
                </div>
                <p>
                  ${this.hass.localize("ui.panel.config.cloud.account.alexa.info_state_reporting")}
                </p>
              ` : ""}
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._handleSync} .disabled=${this._syncing}>
            ${this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities")}
          </mwc-button>
          <div class="spacer"></div>
          <a href="/config/cloud/alexa">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.alexa.manage_entities")}</mwc-button
            >
          </a>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "_handleSync",
      value: async function _handleSync() {
        this._syncing = true;

        try {
          await Object(_data_alexa__WEBPACK_IMPORTED_MODULE_6__["syncCloudAlexaEntities"])(this.hass);
        } catch (err) {
          alert(`${this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities_error")} ${err.body.message}`);
        } finally {
          this._syncing = false;
        }
      }
    }, {
      kind: "method",
      key: "_enabledToggleChanged",
      value: async function _enabledToggleChanged(ev) {
        const toggle = ev.target;

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_5__["updateCloudPref"])(this.hass, {
            alexa_enabled: toggle.checked
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "method",
      key: "_reportToggleChanged",
      value: async function _reportToggleChanged(ev) {
        const toggle = ev.target;

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_5__["updateCloudPref"])(this.hass, {
            alexa_report_state: toggle.checked
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          alert(`${this.hass.localize("ui.panel.config.cloud.account.alexa.state_reporting_error", "enable_disable", this.hass.localize(toggle.checked ? "ui.panel.config.cloud.account.alexa.enable" : "ui.panel.config.cloud.account.alexa.disable"))} ${err.message}`);
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      .state-reporting {
        display: flex;
        margin-top: 1.5em;
      }
      .state-reporting + p {
        margin-top: 0.5em;
      }
      .state-reporting h3 {
        flex-grow: 1;
        margin: 0;
      }
      .state-reporting-switch {
        margin-top: 0.25em;
        margin-right: 7px;
        margin-left: 0.5em;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("cloud-alexa-pref", CloudAlexaPref);

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-google-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-google-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudGooglePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudGooglePref", function() { return CloudGooglePref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
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





 // tslint:disable-next-line




let CloudGooglePref = _decorate(null, function (_initialize, _LitElement) {
  class CloudGooglePref extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudGooglePref,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.cloudStatus) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          google_enabled,
          google_report_state,
          google_secure_devices_pin
        } = this.cloudStatus.prefs;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.google.title")}
      >
        <div class="switch">
          <ha-switch
            id="google_enabled"
            .checked="${google_enabled}"
            @change="${this._enableToggleChanged}"
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.google.info")}
          <ul>
            <li>
              <a
                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.google.enable_ha_skill")}
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/google_assistant/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.google.config_documentation")}
              </a>
            </li>
          </ul>
          ${google_enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="state-reporting">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.google.enable_state_reporting")}
                  </h3>
                  <div class="state-reporting-switch">
                    <ha-switch
                      .checked=${google_report_state}
                      @change=${this._reportToggleChanged}
                    ></ha-switch>
                  </div>
                </div>
                <p>
                  ${this.hass.localize("ui.panel.config.cloud.account.google.info_state_reporting")}
                </p>
                <div class="secure_devices">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.google.security_devices")}
                  </h3>
                  ${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_info")}
                  <paper-input
                    label="${this.hass.localize("ui.panel.config.cloud.account.google.devices_pin")}"
                    id="google_secure_devices_pin"
                    placeholder="${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_hint")}"
                    .value=${google_secure_devices_pin || ""}
                    @change="${this._pinChanged}"
                  ></paper-input>
                </div>
              ` : ""}
        </div>
        <div class="card-actions">
          <ha-call-api-button
            .hass="${this.hass}"
            .disabled="${!google_enabled}"
            path="cloud/google_actions/sync"
          >
            ${this.hass.localize("ui.panel.config.cloud.account.google.sync_entities")}
          </ha-call-api-button>
          <div class="spacer"></div>
          <a href="/config/cloud/google-assistant">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.google.manage_entities")}</mwc-button
            >
          </a>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "_enableToggleChanged",
      value: async function _enableToggleChanged(ev) {
        const toggle = ev.target;

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
            [toggle.id]: toggle.checked
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "method",
      key: "_reportToggleChanged",
      value: async function _reportToggleChanged(ev) {
        const toggle = ev.target;

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
            google_report_state: toggle.checked
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          alert(`Unable to ${toggle.checked ? "enable" : "disable"} report state. ${err.message}`);
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "method",
      key: "_pinChanged",
      value: async function _pinChanged(ev) {
        const input = ev.target;

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
            [input.id]: input.value || null
          });
          Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_7__["showSaveSuccessToast"])(this, this.hass);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          alert(`${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_error")} ${err.message}`);
          input.value = this.cloudStatus.prefs.google_secure_devices_pin;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      ha-call-api-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      .secure_devices {
        padding-top: 8px;
      }
      paper-input {
        width: 250px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      .state-reporting {
        display: flex;
        margin-top: 1.5em;
      }
      .state-reporting + p {
        margin-top: 0.5em;
      }
      h3 {
        margin: 0 0 8px 0;
      }
      .state-reporting h3 {
        flex-grow: 1;
        margin: 0;
      }
      .state-reporting-switch {
        margin-top: 0.25em;
        margin-right: 7px;
        margin-left: 0.5em;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("cloud-google-pref", CloudGooglePref);

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-remote-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-remote-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudRemotePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRemotePref", function() { return CloudRemotePref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog-cloud-certificate/show-dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts");
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





 // tslint:disable-next-line




let CloudRemotePref = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("cloud-remote-pref")], function (_initialize, _LitElement) {
  class CloudRemotePref extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudRemotePref,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.cloudStatus) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          remote_connected,
          remote_domain,
          remote_certificate
        } = this.cloudStatus;

        if (!remote_certificate) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-card
          header=${this.hass.localize("ui.panel.config.cloud.account.remote.title")}
        >
          <div class="preparing">
            ${this.hass.localize("ui.panel.config.cloud.account.remote.access_is_being_prepared")}
          </div>
        </ha-card>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.remote.title")}
      >
        <div class="switch">
          <ha-switch
            .checked="${remote_connected}"
            @change="${this._toggleChanged}"
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.remote.info")}
          ${remote_connected ? this.hass.localize("ui.panel.config.cloud.account.remote.instance_is_available") : this.hass.localize("ui.panel.config.cloud.account.remote.instance_will_be_available")}
          <a href="https://${remote_domain}" target="_blank" class="break-word">
            https://${remote_domain}</a
          >.
        </div>
        <div class="card-actions">
          <a href="https://www.nabucasa.com/config/remote/" target="_blank">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.remote.link_learn_how_it_works")}</mwc-button
            >
          </a>
          ${remote_certificate ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="spacer"></div>
                <mwc-button @click=${this._openCertInfo}>
                  ${this.hass.localize("ui.panel.config.cloud.account.remote.certificate_info")}
                </mwc-button>
              ` : ""}
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "_openCertInfo",
      value: function _openCertInfo() {
        Object(_dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__["showCloudCertificateDialog"])(this, {
          certificateInfo: this.cloudStatus.remote_certificate
        });
      }
    }, {
      kind: "method",
      key: "_toggleChanged",
      value: async function _toggleChanged(ev) {
        const toggle = ev.target;

        try {
          if (toggle.checked) {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["connectCloudRemote"])(this.hass);
          } else {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["disconnectCloudRemote"])(this.hass);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        } catch (err) {
          alert(err.message);
          toggle.checked = !toggle.checked;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .preparing {
        padding: 0 16px 16px;
      }
      a {
        color: var(--primary-color);
      }
      .break-word {
        overflow-wrap: break-word;
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-webhooks.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-webhooks.ts ***!
  \***********************************************************/
/*! exports provided: CloudWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudWebhooks", function() { return CloudWebhooks; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/webhook */ "./src/data/webhook.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-manage-cloudhook/show-dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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










let CloudWebhooks = _decorate(null, function (_initialize, _LitElement) {
  class CloudWebhooks extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this._progress = [];
    }

  }

  return {
    F: CloudWebhooks,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cloudHooks",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_localHooks",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_progress",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(CloudWebhooks.prototype), "connectedCallback", this).call(this);

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.renderStyle()}
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.webhooks.title")}
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.info")}
          ${this._renderBody()}

          <div class="footer">
            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">
              ${this.hass.localize("ui.panel.config.cloud.account.webhooks.link_learn_more")}
            </a>
          </div>
        </div>
      </ha-card>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(CloudWebhooks.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus") && this.cloudStatus) {
          this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
        }
      }
    }, {
      kind: "method",
      key: "_renderBody",
      value: function _renderBody() {
        if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.loading")}
        </div>
      `;
        }

        if (this._localHooks.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="body-text">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet")}
          <a href="/config/integrations"
            >${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_integration")}</a
          >
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet2")}
          <a href="/config/automation/new"
            >${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_automation")}</a
          >.
        </div>
      `;
        }

        return this._localHooks.map(entry => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div class="webhook" .entry="${entry}">
          <paper-item-body two-line>
            <div>
              ${entry.name}
              ${entry.domain === entry.name.toLowerCase() ? "" : ` (${entry.domain})`}
            </div>
            <div secondary>${entry.webhook_id}</div>
          </paper-item-body>
          ${this._progress.includes(entry.webhook_id) ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="progress">
                  <paper-spinner active></paper-spinner>
                </div>
              ` : this._cloudHooks[entry.webhook_id] ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button @click="${this._handleManageButton}">
                  ${this.hass.localize("ui.panel.config.cloud.account.webhooks.manage")}
                </mwc-button>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <ha-switch @click="${this._enableWebhook}"></ha-switch>
              `}
        </div>
      `);
      }
    }, {
      kind: "method",
      key: "_showDialog",
      value: function _showDialog(webhookId) {
        const webhook = this._localHooks.find(ent => ent.webhook_id === webhookId);

        const cloudhook = this._cloudHooks[webhookId];
        Object(_dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__["showManageCloudhookDialog"])(this, {
          webhook,
          cloudhook,
          disableHook: () => this._disableWebhook(webhookId)
        });
      }
    }, {
      kind: "method",
      key: "_handleManageButton",
      value: function _handleManageButton(ev) {
        const entry = ev.currentTarget.parentElement.entry;

        this._showDialog(entry.webhook_id);
      }
    }, {
      kind: "method",
      key: "_enableWebhook",
      value: async function _enableWebhook(ev) {
        const entry = ev.currentTarget.parentElement.entry;
        this._progress = [...this._progress, entry.webhook_id];
        let updatedWebhook;

        try {
          updatedWebhook = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["createCloudhook"])(this.hass, entry.webhook_id);
        } catch (err) {
          alert(err.message);
          return;
        } finally {
          this._progress = this._progress.filter(wid => wid !== entry.webhook_id);
        }

        this._cloudHooks = Object.assign({}, this._cloudHooks, {
          [entry.webhook_id]: updatedWebhook
        }); // Only open dialog if we're not also enabling others, otherwise it's confusing

        if (this._progress.length === 0) {
          this._showDialog(entry.webhook_id);
        }
      }
    }, {
      kind: "method",
      key: "_disableWebhook",
      value: async function _disableWebhook(webhookId) {
        this._progress = [...this._progress, webhookId];

        try {
          await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["deleteCloudhook"])(this.hass, webhookId);
        } catch (err) {
          alert(`${this.hass.localize("ui.panel.config.cloud.account.webhooks.disable_hook_error_msg")} ${err.message}`);
          return;
        } finally {
          this._progress = this._progress.filter(wid => wid !== webhookId);
        } // Remove cloud related parts from entry.


        const _ref = this._cloudHooks,
              newHooks = _objectWithoutPropertiesLoose(_ref, [webhookId].map(_toPropertyKey));

        this._cloudHooks = newHooks;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        this._localHooks = this.hass.config.components.includes("webhook") ? await Object(_data_webhook__WEBPACK_IMPORTED_MODULE_6__["fetchWebhooks"])(this.hass) : [];
      }
    }, {
      kind: "method",
      key: "renderStyle",
      value: function renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .body-text {
          padding: 8px 0;
        }
        .webhook {
          display: flex;
          padding: 4px 0;
        }
        .progress {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer {
          padding-top: 16px;
        }
        .body-text a,
        .footer a {
          color: var(--primary-color);
        }
      </style>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("cloud-webhooks", CloudWebhooks);

/***/ }),

/***/ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts":
/*!*******************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts ***!
  \*******************************************************************************************/
/*! exports provided: showCloudCertificateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCloudCertificateDialog", function() { return showCloudCertificateDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showCloudCertificateDialog = (element, webhookDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-cloud-certificate",
    dialogImport: () => Promise.all(/*! import() | dialog-cloud-certificate */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("dialog-cloud-certificate")]).then(__webpack_require__.bind(null, /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts")),
    dialogParams: webhookDialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts":
/*!*****************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts ***!
  \*****************************************************************************************/
/*! exports provided: showManageCloudhookDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showManageCloudhookDialog", function() { return showManageCloudhookDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showManageCloudhookDialog = (element, webhookDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-manage-cloudhook",
    dialogImport: () => Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts")),
    dialogParams: webhookDialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_cloud_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/cloud-account */ "./src/panels/config/cloud/account/cloud-account.js");
/* harmony import */ var _login_cloud_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/cloud-login */ "./src/panels/config/cloud/login/cloud-login.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
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






const LOGGED_IN_URLS = ["account", "google-assistant", "alexa"];
const NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];

let HaConfigCloud = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-config-cloud")], function (_initialize, _HassRouterPage) {
  class HaConfigCloud extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigCloud,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "login",
          showLoading: true,
          initialLoad: () => this._cloudStatusLoaded,
          // Guard the different pages based on if we're logged in.
          beforeRender: page => {
            if (this.cloudStatus.logged_in) {
              if (!LOGGED_IN_URLS.includes(page)) {
                return "account";
              }
            } else {
              if (!NOT_LOGGED_IN_URLS.includes(page)) {
                return "login";
              }
            }

            return undefined;
          },
          routes: {
            login: {
              tag: "cloud-login"
            },
            register: {
              tag: "cloud-register",
              load: () => __webpack_require__.e(/*! import() | cloud-register */ "cloud-register").then(__webpack_require__.bind(null, /*! ./register/cloud-register */ "./src/panels/config/cloud/register/cloud-register.js"))
            },
            "forgot-password": {
              tag: "cloud-forgot-password",
              load: () => __webpack_require__.e(/*! import() | cloud-forgot-password */ "cloud-forgot-password").then(__webpack_require__.bind(null, /*! ./forgot-password/cloud-forgot-password */ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js"))
            },
            account: {
              tag: "cloud-account"
            },
            "google-assistant": {
              tag: "cloud-google-assistant",
              load: () => Promise.all(/*! import() | cloud-google-assistant */[__webpack_require__.e(5), __webpack_require__.e("cloud-google-assistant")]).then(__webpack_require__.bind(null, /*! ./google-assistant/cloud-google-assistant */ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts"))
            },
            alexa: {
              tag: "cloud-alexa",
              load: () => Promise.all(/*! import() | cloud-alexa */[__webpack_require__.e(5), __webpack_require__.e("cloud-alexa")]).then(__webpack_require__.bind(null, /*! ./alexa/cloud-alexa */ "./src/panels/config/cloud/alexa/cloud-alexa.ts"))
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_flashMessage",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_loginEmail",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "_resolveCloudStatusLoaded",
      value: void 0
    }, {
      kind: "field",
      key: "_cloudStatusLoaded",

      value() {
        return new Promise(resolve => {
          this._resolveCloudStatusLoaded = resolve;
        });
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaConfigCloud.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("cloud-done", ev => {
          this._flashMessage = ev.detail.flashMessage;
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, "/config/cloud/login");
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigCloud.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          const oldStatus = changedProps.get("cloudStatus");

          if (oldStatus === undefined) {
            this._resolveCloudStatusLoaded();
          } else if (oldStatus.logged_in !== this.cloudStatus.logged_in) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, this.route.prefix, true);
          }
        }
      }
    }, {
      kind: "method",
      key: "createElement",
      value: function createElement(tag) {
        const el = _get(_getPrototypeOf(HaConfigCloud.prototype), "createElement", this).call(this, tag);

        el.addEventListener("email-changed", ev => {
          this._loginEmail = ev.detail.value;
        });
        el.addEventListener("flash-message-changed", ev => {
          this._flashMessage = ev.detail.value;
        });
        return el;
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        // We are not going to update if the current page if we are not logged in
        // and the current page requires being logged in. Happens when we log out.
        if (this.cloudStatus && !this.cloudStatus.logged_in && LOGGED_IN_URLS.includes(this._currentPage)) {
          return;
        }

        if ("setProperties" in el) {
          // As long as we have Polymer pages
          el.setProperties({
            hass: this.hass,
            email: this._loginEmail,
            isWide: this.isWide,
            cloudStatus: this.cloudStatus,
            flashMessage: this._flashMessage
          });
        } else {
          el.hass = this.hass;
          el.email = this._loginEmail;
          el.isWide = this.isWide;
          el.narrow = this.narrow;
          el.cloudStatus = this.cloudStatus;
          el.flashMessage = this._flashMessage;
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__["HassRouterPage"]);

/***/ }),

/***/ "./src/panels/config/cloud/login/cloud-login.js":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/login/cloud-login.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");

















/*
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudLogin extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card .card-header {
          margin-bottom: -8px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        [hidden] {
          display: none;
        }
        .flash-msg {
          padding-right: 44px;
        }
        .flash-msg paper-icon-button {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--secondary-text-color);
        }
      </style>
      <hass-subpage header="[[localize('ui.panel.config.cloud.caption')]]">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.caption')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.login.introduction')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.login.introduction2')]]
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >
                [[localize('ui.panel.config.cloud.login.introduction2a')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.login.introduction3')]]
              </p>
              <p>
                <a href="https://www.nabucasa.com" target="_blank"
                  >[[localize('ui.panel.config.cloud.login.learn_more_link')]]</a
                >
              </p>
            </div>

            <ha-card hidden$="[[!flashMessage]]">
              <div class="card-content flash-msg">
                [[flashMessage]]
                <paper-icon-button icon="hass:close" on-click="_dismissFlash"
                  >[[localize('ui.panel.config.cloud.login.dismiss')]]</paper-icon-button
                >
                <paper-ripple id="flashRipple" noink=""></paper-ripple>
              </div>
            </ha-card>

            <ha-card
              header="[[localize('ui.panel.config.cloud.login.sign_in')]]"
            >
              <div class="card-content">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
                <paper-input
                  label="[[localize('ui.panel.config.cloud.login.email')]]"
                  id="email"
                  type="email"
                  value="{{email}}"
                  on-keydown="_keyDown"
                  error-message="[[localize('ui.panel.config.cloud.login.email_error_msg')]]"
                ></paper-input>
                <paper-input
                  id="password"
                  label="[[localize('ui.panel.config.cloud.login.password')]]"
                  value="{{_password}}"
                  type="password"
                  on-keydown="_keyDown"
                  error-message="[[localize('ui.panel.config.cloud.login.password_error_msg')]]"
                ></paper-input>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  on-click="_handleLogin"
                  progress="[[_requestInProgress]]"
                  >[[localize('ui.panel.config.cloud.login.sign_in')]]</ha-progress-button
                >
                <button
                  class="link"
                  hidden="[[_requestInProgress]]"
                  on-click="_handleForgotPassword"
                >
                  [[localize('ui.panel.config.cloud.login.forgot_password')]]
                </button>
              </div>
            </ha-card>

            <ha-card>
              <paper-item on-click="_handleRegister">
                <paper-item-body two-line="">
                  [[localize('ui.panel.config.cloud.login.start_trial')]]
                  <div secondary="">
                    [[localize('ui.panel.config.cloud.login.trial_info')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true
      },
      _password: {
        type: String,
        value: ""
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      flashMessage: {
        type: String,
        notify: true
      },
      _error: String
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.flashMessage) {
      // Wait for DOM to be drawn
      requestAnimationFrame(() => requestAnimationFrame(() => this.$.flashRipple.simulatedRipple()));
    }
  }

  _inputChanged() {
    this.$.email.invalid = false;
    this.$.password.invalid = false;
    this._error = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleLogin();

      ev.preventDefault();
    }
  }

  _handleLogin() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;
    this._requestInProgress = true;
    this.hass.callApi("post", "cloud/login", {
      email: this.email,
      password: this._password
    }).then(() => {
      this.fire("ha-refresh-cloud-status");
      this.setProperties({
        email: "",
        _password: ""
      });
    }, err => {
      // Do this before setProperties because changing it clears errors.
      this._password = "";
      const errCode = err && err.body && err.body.code;

      if (errCode === "PasswordChangeRequired") {
        alert("[[localize('ui.panel.config.cloud.login.alert_password_change_required')]]");
        this.navigate("/config/cloud/forgot-password");
        return;
      }

      const props = {
        _requestInProgress: false,
        _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
      };

      if (errCode === "UserNotConfirmed") {
        props._error = "[[localize('ui.panel.config.cloud.login.alert_email_confirm_necessary')]]";
      }

      this.setProperties(props);
      this.$.email.focus();
    });
  }

  _handleRegister() {
    this.flashMessage = "";
    this.navigate("/config/cloud/register");
  }

  _handleForgotPassword() {
    this.flashMessage = "";
    this.navigate("/config/cloud/forgot-password");
  }

  _dismissFlash() {
    // give some time to let the ripple finish.
    setTimeout(() => {
      this.flashMessage = "";
    }, 200);
  }

}

customElements.define("cloud-login", CloudLogin);

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

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, hass) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
  message: hass.localize("ui.common.successfully_saved")
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNsb3VkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hbGV4YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93ZWJob29rLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1hbGV4YS1wcmVmLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtZ29vZ2xlLXByZWYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1yZW1vdGUtcHJlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLXdlYmhvb2tzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9zaG93LWRpYWxvZy1tYW5hZ2UtY2xvdWRob29rLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9sb2dpbi9jbG91ZC1sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKTtcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuY2xhc3MgSGFDYWxsQXBpQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgLnByb2dyZXNzPVwiJHt0aGlzLnByb2dyZXNzfVwiXG4gICAgICAgIEBjbGljaz1cIiR7dGhpcy5fYnV0dG9uVGFwcGVkfVwiXG4gICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5kaXNhYmxlZH1cIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIHByb2dyZXNzOiBCb29sZWFuLFxuICAgICAgcGF0aDogU3RyaW5nLFxuICAgICAgbWV0aG9kOiBTdHJpbmcsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIpO1xuICB9XG5cbiAgYXN5bmMgX2J1dHRvblRhcHBlZCgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICBjb25zdCBldmVudERhdGEgPSB7XG4gICAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgICAgcGF0aDogdGhpcy5wYXRoLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKHRoaXMubWV0aG9kLCB0aGlzLnBhdGgsIHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICB0aGlzLnByb2dyZXNzQnV0dG9uLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIGV2ZW50RGF0YS5yZXNwb25zZSA9IHJlc3A7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICB0aGlzLnByb2dyZXNzQnV0dG9uLmFjdGlvbkVycm9yKCk7XG4gICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgZXZlbnREYXRhLnJlc3BvbnNlID0gZXJyO1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtYXBpLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtYXBpLWJ1dHRvblwiLCBIYUNhbGxBcGlCdXR0b24pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFQcm9ncmVzc0J1dHRvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIG13Yy1idXR0b24ge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1ncmVlbi01MDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3IgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgaWQ9XCJidXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlRGlzYWJsZWQoZGlzYWJsZWQsIHByb2dyZXNzKV1dXCJcbiAgICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Byb2dyZXNzXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj48cGFwZXItc3Bpbm5lciBhY3RpdmU9XCJcIj48L3BhcGVyLXNwaW5uZXI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRlbXBDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy4kLmNvbnRhaW5lci5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHRoaXMuYnV0dG9uVGFwcGVkKGV2KSk7XG4gIH1cblxuICBidXR0b25UYXBwZWQoZXYpIHtcbiAgICBpZiAodGhpcy5wcm9ncmVzcykgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBhY3Rpb25TdWNjZXNzKCkge1xuICAgIHRoaXMudGVtcENsYXNzKFwic3VjY2Vzc1wiKTtcbiAgfVxuXG4gIGFjdGlvbkVycm9yKCkge1xuICAgIHRoaXMudGVtcENsYXNzKFwiZXJyb3JcIik7XG4gIH1cblxuICBjb21wdXRlRGlzYWJsZWQoZGlzYWJsZWQsIHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIGRpc2FibGVkIHx8IHByb2dyZXNzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXByb2dyZXNzLWJ1dHRvblwiLCBIYVByb2dyZXNzQnV0dG9uKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4vaGEtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uTmV4dCBleHRlbmRzIEhhSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXhhRW50aXR5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIGRpc3BsYXlfY2F0ZWdvcmllczogc3RyaW5nW107XG4gIGludGVyZmFjZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8QWxleGFFbnRpdHlbXT4oeyB0eXBlOiBcImNsb3VkL2FsZXhhL2VudGl0aWVzXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBzeW5jQ2xvdWRBbGV4YUVudGl0aWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHsgdHlwZTogXCJjbG91ZC9hbGV4YS9zeW5jXCIgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViaG9vayB7XG4gIHdlYmhvb2tfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoV2ViaG9va3MgPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8V2ViaG9va1tdPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ3ZWJob29rL2xpc3RcIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLXdlYmhvb2tzXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLWFsZXhhLXByZWZcIjtcbmltcG9ydCBcIi4vY2xvdWQtZ29vZ2xlLXByZWZcIjtcbmltcG9ydCBcIi4vY2xvdWQtcmVtb3RlLXByZWZcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IHsgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRBY2NvdW50IGV4dGVuZHMgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIHtcbiAgICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvdW50LXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zb29uIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm5vd3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb24nKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5jYXB0aW9uJyldXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnRoYW5rX3lvdV9ub3RlJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQubmFidV9jYXNhX2FjY291bnQnKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY291bnQtcm93XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgW1tjbG91ZFN0YXR1cy5lbWFpbF1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeSBjbGFzcz1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tfZm9ybWF0U3Vic2NyaXB0aW9uKF9zdWJzY3JpcHRpb24pXV1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5XG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuY29ubmVjdGlvbl9zdGF0dXMnKV1dPC9wYXBlci1pdGVtLWJvZHlcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPltbY2xvdWRTdGF0dXMuY2xvdWRdXTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWNjb3VudC5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPjxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5tYW5hZ2VfYWNjb3VudCcpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID48L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gc3R5bGU9XCJmbG9hdDogcmlnaHRcIiBvbi1jbGljaz1cImhhbmRsZUxvZ291dFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuc2lnbl9vdXQnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9ucycpXV08L3NwYW5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5pbnRlZ3JhdGlvbnNfaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9uc19pbnRyb2R1Y3Rpb24yJyldXVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9uc19saW5rX2FsbF9mZWF0dXJlcycpXV08L2FcbiAgICAgICAgICAgICAgICA+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGNsb3VkLXJlbW90ZS1wcmVmXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC1yZW1vdGUtcHJlZj5cblxuICAgICAgICAgICAgPGNsb3VkLWFsZXhhLXByZWZcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLWFsZXhhLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC1nb29nbGUtcHJlZlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtZ29vZ2xlLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC13ZWJob29rc1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtd2ViaG9va3M+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBjbG91ZFN0YXR1czogT2JqZWN0LFxuICAgICAgX3N1YnNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9mZXRjaFN1YnNjcmlwdGlvbkluZm8oKTtcbiAgfVxuXG4gIF9jb21wdXRlUmVtb3RlQ29ubmVjdGVkKGNvbm5lY3RlZCkge1xuICAgIHJldHVybiBjb25uZWN0ZWRcbiAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuY29ubmVjdGVkXCIpXG4gICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lm5vdF9jb25uZWN0ZWRcIik7XG4gIH1cblxuICBhc3luYyBfZmV0Y2hTdWJzY3JpcHRpb25JbmZvKCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGF3YWl0IGZldGNoQ2xvdWRTdWJzY3JpcHRpb25JbmZvKHRoaXMuaGFzcyk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnByb3ZpZGVyICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmNsb3VkICE9PSBcImNvbm5lY3RlZFwiXG4gICAgKSB7XG4gICAgICB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dvdXQoKSB7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9sb2dvdXRcIilcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZmlyZShcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpKTtcbiAgfVxuXG4gIF9mb3JtYXRTdWJzY3JpcHRpb24oc3ViSW5mbykge1xuICAgIGlmIChzdWJJbmZvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmZldGNoaW5nX3N1YnNjcmlwdGlvblwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHN1YkluZm8uaHVtYW5fZGVzY3JpcHRpb247XG5cbiAgICBpZiAoc3ViSW5mby5wbGFuX3JlbmV3YWxfZGF0ZSkge1xuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5yZXBsYWNlKFxuICAgICAgICBcIntwZXJpb2RFbmR9XCIsXG4gICAgICAgIGZvcm1hdERhdGVUaW1lKFxuICAgICAgICAgIG5ldyBEYXRlKHN1YkluZm8ucGxhbl9yZW5ld2FsX2RhdGUgKiAxMDAwKSxcbiAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtYWNjb3VudFwiLCBDbG91ZEFjY291bnQpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgc3luY0Nsb3VkQWxleGFFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2FsZXhhXCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEFsZXhhUHJlZiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N5bmNpbmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWxleGFfZW5hYmxlZCwgYWxleGFfcmVwb3J0X3N0YXRlIH0gPSB0aGlzLmNsb3VkU3RhdHVzIS5wcmVmcztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPSR7YWxleGFfZW5hYmxlZH1cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbmFibGVkVG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuaW5mb1wiKX1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2tpbGxzLXN0b3JlLmFtYXpvbi5jb20vZGVlcGxpbmsvZHAvQjA3NzJKMVFLQj9kZXZpY2VUeXBlPWFwcFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuZW5hYmxlX2hhX3NraWxsXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL2FtYXpvbl9hbGV4YS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmNvbmZpZ19kb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgJHthbGV4YV9lbmFibGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlLXJlcG9ydGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5lbmFibGVfc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHthbGV4YV9yZXBvcnRfc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3JlcG9ydFRvZ2dsZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgID48L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmluZm9fc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5faGFuZGxlU3luY30gLmRpc2FibGVkPSR7dGhpcy5fc3luY2luZ30+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuc3luY19lbnRpdGllc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvYWxleGFcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5tYW5hZ2VfZW50aXRpZXNcIlxuICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVN5bmMoKSB7XG4gICAgdGhpcy5fc3luY2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN5bmNDbG91ZEFsZXhhRW50aXRpZXModGhpcy5oYXNzISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLnN5bmNfZW50aXRpZXNfZXJyb3JcIlxuICAgICAgICApfSAke2Vyci5ib2R5Lm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3luY2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZWRUb2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIEhhU3dpdGNoO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVDbG91ZFByZWYodGhpcy5oYXNzISwgeyBhbGV4YV9lbmFibGVkOiB0b2dnbGUuY2hlY2tlZCEgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlcG9ydFRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIGFsZXhhX3JlcG9ydF9zdGF0ZTogdG9nZ2xlLmNoZWNrZWQhLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuc3RhdGVfcmVwb3J0aW5nX2Vycm9yXCIsXG4gICAgICAgICAgXCJlbmFibGVfZGlzYWJsZVwiLFxuICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICB0b2dnbGUuY2hlY2tlZFxuICAgICAgICAgICAgICA/IFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuZW5hYmxlXCJcbiAgICAgICAgICAgICAgOiBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmRpc2FibGVcIlxuICAgICAgICAgIClcbiAgICAgICAgKX0gJHtlcnIubWVzc2FnZX1gXG4gICAgICApO1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZyBoMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZy1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGEtcHJlZlwiOiBDbG91ZEFsZXhhUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1hbGV4YS1wcmVmXCIsIENsb3VkQWxleGFQcmVmKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IHNob3dTYXZlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRHb29nbGVQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGdvb2dsZV9lbmFibGVkLFxuICAgICAgZ29vZ2xlX3JlcG9ydF9zdGF0ZSxcbiAgICAgIGdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW4sXG4gICAgfSA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUudGl0bGVcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoXCI+XG4gICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJnb29nbGVfZW5hYmxlZFwiXG4gICAgICAgICAgICAuY2hlY2tlZD1cIiR7Z29vZ2xlX2VuYWJsZWR9XCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX2VuYWJsZVRvZ2dsZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmluZm9cIil9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Fzc2lzdGFudC5nb29nbGUuY29tL3NlcnZpY2VzL2EvdWlkLzAwMDAwMDkxZmQ1ZmI4NzU/aGw9ZW4tVVNcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbmFibGVfaGFfc2tpbGxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvZ29vZ2xlX2Fzc2lzdGFudC9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5jb25maWdfZG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgICR7Z29vZ2xlX2VuYWJsZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbmFibGVfc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtnb29nbGVfcmVwb3J0X3N0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9yZXBvcnRUb2dnbGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuaW5mb19zdGF0ZV9yZXBvcnRpbmdcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3VyZV9kZXZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5zZWN1cml0eV9kZXZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmVudGVyX3Bpbl9pbmZvXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZGV2aWNlc19waW5cIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmVudGVyX3Bpbl9oaW50XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtnb29nbGVfc2VjdXJlX2RldmljZXNfcGluIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3BpbkNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGhhLWNhbGwtYXBpLWJ1dHRvblxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmRpc2FibGVkPVwiJHshZ29vZ2xlX2VuYWJsZWR9XCJcbiAgICAgICAgICAgIHBhdGg9XCJjbG91ZC9nb29nbGVfYWN0aW9ucy9zeW5jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLnN5bmNfZW50aXRpZXNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2hhLWNhbGwtYXBpLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvZ29vZ2xlLWFzc2lzdGFudFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5tYW5hZ2VfZW50aXRpZXNcIlxuICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZVRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7IFt0b2dnbGUuaWRdOiB0b2dnbGUuY2hlY2tlZCEgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlcG9ydFRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIGdvb2dsZV9yZXBvcnRfc3RhdGU6IHRvZ2dsZS5jaGVja2VkISxcbiAgICAgIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYFVuYWJsZSB0byAke3RvZ2dsZS5jaGVja2VkID8gXCJlbmFibGVcIiA6IFwiZGlzYWJsZVwifSByZXBvcnQgc3RhdGUuICR7XG4gICAgICAgICAgZXJyLm1lc3NhZ2VcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9waW5DaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIFtpbnB1dC5pZF06IGlucHV0LnZhbHVlIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHNob3dTYXZlU3VjY2Vzc1RvYXN0KHRoaXMsIHRoaXMuaGFzcyEpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbnRlcl9waW5fZXJyb3JcIlxuICAgICAgICApfSAke2Vyci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuY2xvdWRTdGF0dXMhLnByZWZzLmdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW47XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICBoYS1jYWxsLWFwaS1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuc2VjdXJlX2RldmljZXMge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcgaDMge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmctc3dpdGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1wcmVmXCI6IENsb3VkR29vZ2xlUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1nb29nbGUtcHJlZlwiLCBDbG91ZEdvb2dsZVByZWYpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjb25uZWN0Q2xvdWRSZW1vdGUsXG4gIGRpc2Nvbm5lY3RDbG91ZFJlbW90ZSxcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLXJlbW90ZS1wcmVmXCIpXG5leHBvcnQgY2xhc3MgQ2xvdWRSZW1vdGVQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHJlbW90ZV9jb25uZWN0ZWQsXG4gICAgICByZW1vdGVfZG9tYWluLFxuICAgICAgcmVtb3RlX2NlcnRpZmljYXRlLFxuICAgIH0gPSB0aGlzLmNsb3VkU3RhdHVzO1xuXG4gICAgaWYgKCFyZW1vdGVfY2VydGlmaWNhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS50aXRsZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVwYXJpbmdcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuYWNjZXNzX2lzX2JlaW5nX3ByZXBhcmVkXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPVwiJHtyZW1vdGVfY29ubmVjdGVkfVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl90b2dnbGVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5pbmZvXCIpfVxuICAgICAgICAgICR7cmVtb3RlX2Nvbm5lY3RlZFxuICAgICAgICAgICAgPyB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmluc3RhbmNlX2lzX2F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5pbnN0YW5jZV93aWxsX2JlX2F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vJHtyZW1vdGVfZG9tYWlufVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnJlYWstd29yZFwiPlxuICAgICAgICAgICAgaHR0cHM6Ly8ke3JlbW90ZV9kb21haW59PC9hXG4gICAgICAgICAgPi5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tL2NvbmZpZy9yZW1vdGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmxpbmtfbGVhcm5faG93X2l0X3dvcmtzXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgJHtyZW1vdGVfY2VydGlmaWNhdGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fb3BlbkNlcnRJbmZvfT5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuY2VydGlmaWNhdGVfaW5mb1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkNlcnRJbmZvKCkge1xuICAgIHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nKHRoaXMsIHtcbiAgICAgIGNlcnRpZmljYXRlSW5mbzogdGhpcy5jbG91ZFN0YXR1cyEucmVtb3RlX2NlcnRpZmljYXRlISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RDbG91ZFJlbW90ZSh0aGlzLmhhc3MhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGRpc2Nvbm5lY3RDbG91ZFJlbW90ZSh0aGlzLmhhc3MhKTtcbiAgICAgIH1cbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnByZXBhcmluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5icmVhay13b3JkIHtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtcmVtb3RlLXByZWZcIjogQ2xvdWRSZW1vdGVQcmVmO1xuICB9XG59XG4iLCJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcywgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFdlYmhvb2tFcnJvciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgV2ViaG9vaywgZmV0Y2hXZWJob29rcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3dlYmhvb2tcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNsb3VkaG9vayxcbiAgZGVsZXRlQ2xvdWRob29rLFxuICBDbG91ZFdlYmhvb2ssXG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjtcblxuZXhwb3J0IGNsYXNzIENsb3VkV2ViaG9va3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jbG91ZEhvb2tzPzogeyBbd2ViaG9va0lkOiBzdHJpbmddOiBDbG91ZFdlYmhvb2sgfTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9jYWxIb29rcz86IFdlYmhvb2tbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcHJvZ3Jlc3M6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5yZW5kZXJTdHlsZSgpfVxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLmluZm9cIil9XG4gICAgICAgICAgJHt0aGlzLl9yZW5kZXJCb2R5KCl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tL2NvbmZpZy93ZWJob29rc1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5saW5rX2xlYXJuX21vcmVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpICYmIHRoaXMuY2xvdWRTdGF0dXMpIHtcbiAgICAgIHRoaXMuX2Nsb3VkSG9va3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmNsb3VkaG9va3MgfHwge307XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQm9keSgpIHtcbiAgICBpZiAoIXRoaXMuY2xvdWRTdGF0dXMgfHwgIXRoaXMuX2xvY2FsSG9va3MgfHwgIXRoaXMuX2Nsb3VkSG9va3MpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS10ZXh0XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5sb2FkaW5nXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xvY2FsSG9va3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktdGV4dFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3Mubm9faG9va3NfeWV0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9uc1wiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLm5vX2hvb2tzX3lldF9saW5rX2ludGVncmF0aW9uXCJcbiAgICAgICAgICAgICl9PC9hXG4gICAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3Mubm9faG9va3NfeWV0MlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9hdXRvbWF0aW9uL25ld1wiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLm5vX2hvb2tzX3lldF9saW5rX2F1dG9tYXRpb25cIlxuICAgICAgICAgICAgKX08L2FcbiAgICAgICAgICA+LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsSG9va3MubWFwKFxuICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid2ViaG9va1wiIC5lbnRyeT1cIiR7ZW50cnl9XCI+XG4gICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgJHtlbnRyeS5kb21haW4gPT09IGVudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCAoJHtlbnRyeS5kb21haW59KWB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PiR7ZW50cnkud2ViaG9va19pZH08L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAke3RoaXMuX3Byb2dyZXNzLmluY2x1ZGVzKGVudHJ5LndlYmhvb2tfaWQpXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IHRoaXMuX2Nsb3VkSG9va3MhW2VudHJ5LndlYmhvb2tfaWRdXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVNYW5hZ2VCdXR0b259XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MubWFuYWdlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgPGhhLXN3aXRjaCBAY2xpY2s9XCIke3RoaXMuX2VuYWJsZVdlYmhvb2t9XCI+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9zaG93RGlhbG9nKHdlYmhvb2tJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgd2ViaG9vayA9IHRoaXMuX2xvY2FsSG9va3MhLmZpbmQoXG4gICAgICAoZW50KSA9PiBlbnQud2ViaG9va19pZCA9PT0gd2ViaG9va0lkXG4gICAgKSE7XG4gICAgY29uc3QgY2xvdWRob29rID0gdGhpcy5fY2xvdWRIb29rcyFbd2ViaG9va0lkXTtcbiAgICBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nKHRoaXMsIHtcbiAgICAgIHdlYmhvb2ssXG4gICAgICBjbG91ZGhvb2ssXG4gICAgICBkaXNhYmxlSG9vazogKCkgPT4gdGhpcy5fZGlzYWJsZVdlYmhvb2sod2ViaG9va0lkKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hbmFnZUJ1dHRvbihldjogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5wYXJlbnRFbGVtZW50LmVudHJ5IGFzIFdlYmhvb2s7XG4gICAgdGhpcy5fc2hvd0RpYWxvZyhlbnRyeS53ZWJob29rX2lkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZVdlYmhvb2soZXY6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBlbnRyeSA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkucGFyZW50RWxlbWVudC5lbnRyeTtcbiAgICB0aGlzLl9wcm9ncmVzcyA9IFsuLi50aGlzLl9wcm9ncmVzcywgZW50cnkud2ViaG9va19pZF07XG4gICAgbGV0IHVwZGF0ZWRXZWJob29rO1xuXG4gICAgdHJ5IHtcbiAgICAgIHVwZGF0ZWRXZWJob29rID0gYXdhaXQgY3JlYXRlQ2xvdWRob29rKHRoaXMuaGFzcyEsIGVudHJ5LndlYmhvb2tfaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoKGVyciBhcyBXZWJob29rRXJyb3IpLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9wcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzLmZpbHRlcigod2lkKSA9PiB3aWQgIT09IGVudHJ5LndlYmhvb2tfaWQpO1xuICAgIH1cblxuICAgIHRoaXMuX2Nsb3VkSG9va3MgPSB7XG4gICAgICAuLi50aGlzLl9jbG91ZEhvb2tzLFxuICAgICAgW2VudHJ5LndlYmhvb2tfaWRdOiB1cGRhdGVkV2ViaG9vayxcbiAgICB9O1xuXG4gICAgLy8gT25seSBvcGVuIGRpYWxvZyBpZiB3ZSdyZSBub3QgYWxzbyBlbmFibGluZyBvdGhlcnMsIG90aGVyd2lzZSBpdCdzIGNvbmZ1c2luZ1xuICAgIGlmICh0aGlzLl9wcm9ncmVzcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX3Nob3dEaWFsb2coZW50cnkud2ViaG9va19pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGlzYWJsZVdlYmhvb2sod2ViaG9va0lkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9ncmVzcyA9IFsuLi50aGlzLl9wcm9ncmVzcywgd2ViaG9va0lkXTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlQ2xvdWRob29rKHRoaXMuaGFzcyEsIHdlYmhvb2tJZCEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5kaXNhYmxlX2hvb2tfZXJyb3JfbXNnXCJcbiAgICAgICAgKX0gJHsoZXJyIGFzIFdlYmhvb2tFcnJvcikubWVzc2FnZX1gXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9wcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzLmZpbHRlcigod2lkKSA9PiB3aWQgIT09IHdlYmhvb2tJZCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGNsb3VkIHJlbGF0ZWQgcGFydHMgZnJvbSBlbnRyeS5cbiAgICBjb25zdCB7IFt3ZWJob29rSWRdOiBkaXNhYmxlZEhvb2ssIC4uLm5ld0hvb2tzIH0gPSB0aGlzLl9jbG91ZEhvb2tzITtcbiAgICB0aGlzLl9jbG91ZEhvb2tzID0gbmV3SG9va3M7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgdGhpcy5fbG9jYWxIb29rcyA9IHRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJ3ZWJob29rXCIpXG4gICAgICA/IGF3YWl0IGZldGNoV2ViaG9va3ModGhpcy5oYXNzISlcbiAgICAgIDogW107XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0eWxlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuYm9keS10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgfVxuICAgICAgICAud2ViaG9vayB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHktdGV4dCBhLFxuICAgICAgICAuZm9vdGVyIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC13ZWJob29rc1wiOiBDbG91ZFdlYmhvb2tzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLXdlYmhvb2tzXCIsIENsb3VkV2ViaG9va3MpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ2VydGlmaWNhdGVJbmZvcm1hdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRDZXJ0aWZpY2F0ZVBhcmFtcyB7XG4gIGNlcnRpZmljYXRlSW5mbzogQ2VydGlmaWNhdGVJbmZvcm1hdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgd2ViaG9va0RpYWxvZ1BhcmFtczogQ2xvdWRDZXJ0aWZpY2F0ZVBhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiICovIFwiLi9kaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIlxuICAgICAgKSxcbiAgICBkaWFsb2dQYXJhbXM6IHdlYmhvb2tEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFdlYmhvb2sgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS93ZWJob29rXCI7XG5pbXBvcnQgeyBDbG91ZFdlYmhvb2sgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYmhvb2tEaWFsb2dQYXJhbXMge1xuICB3ZWJob29rOiBXZWJob29rO1xuICBjbG91ZGhvb2s6IENsb3VkV2ViaG9vaztcbiAgZGlzYWJsZUhvb2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgd2ViaG9va0RpYWxvZ1BhcmFtczogV2ViaG9va0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCJcbiAgICAgICksXG4gICAgZGlhbG9nUGFyYW1zOiB3ZWJob29rRGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgXCIuL2FjY291bnQvY2xvdWQtYWNjb3VudFwiO1xuaW1wb3J0IFwiLi9sb2dpbi9jbG91ZC1sb2dpblwiO1xuaW1wb3J0IHtcbiAgSGFzc1JvdXRlclBhZ2UsXG4gIFJvdXRlck9wdGlvbnMsXG59IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgTE9HR0VEX0lOX1VSTFMgPSBbXCJhY2NvdW50XCIsIFwiZ29vZ2xlLWFzc2lzdGFudFwiLCBcImFsZXhhXCJdO1xuY29uc3QgTk9UX0xPR0dFRF9JTl9VUkxTID0gW1wibG9naW5cIiwgXCJyZWdpc3RlclwiLCBcImZvcmdvdC1wYXNzd29yZFwiXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctY2xvdWRcIilcbmNsYXNzIEhhQ29uZmlnQ2xvdWQgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzITogQ2xvdWRTdGF0dXM7XG5cbiAgcHJvdGVjdGVkIHJvdXRlck9wdGlvbnM6IFJvdXRlck9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdFBhZ2U6IFwibG9naW5cIixcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICBpbml0aWFsTG9hZDogKCkgPT4gdGhpcy5fY2xvdWRTdGF0dXNMb2FkZWQsXG4gICAgLy8gR3VhcmQgdGhlIGRpZmZlcmVudCBwYWdlcyBiYXNlZCBvbiBpZiB3ZSdyZSBsb2dnZWQgaW4uXG4gICAgYmVmb3JlUmVuZGVyOiAocGFnZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4pIHtcbiAgICAgICAgaWYgKCFMT0dHRURfSU5fVVJMUy5pbmNsdWRlcyhwYWdlKSkge1xuICAgICAgICAgIHJldHVybiBcImFjY291bnRcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFOT1RfTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gXCJsb2dpblwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgcm91dGVzOiB7XG4gICAgICBsb2dpbjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtbG9naW5cIixcbiAgICAgIH0sXG4gICAgICByZWdpc3Rlcjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtcmVnaXN0ZXJcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLXJlZ2lzdGVyXCIgKi8gXCIuL3JlZ2lzdGVyL2Nsb3VkLXJlZ2lzdGVyXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIFwiZm9yZ290LXBhc3N3b3JkXCI6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWZvcmdvdC1wYXNzd29yZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIgKi8gXCIuL2ZvcmdvdC1wYXNzd29yZC9jbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgYWNjb3VudDoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtYWNjb3VudFwiLFxuICAgICAgfSxcbiAgICAgIFwiZ29vZ2xlLWFzc2lzdGFudFwiOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIgKi8gXCIuL2dvb2dsZS1hc3Npc3RhbnQvY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBhbGV4YToge1xuICAgICAgICB0YWc6IFwiY2xvdWQtYWxleGFcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1hbGV4YVwiICovIFwiLi9hbGV4YS9jbG91ZC1hbGV4YVwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2dpbkVtYWlsID0gXCJcIjtcbiAgcHJpdmF0ZSBfcmVzb2x2ZUNsb3VkU3RhdHVzTG9hZGVkITogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY2xvdWRTdGF0dXNMb2FkZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHRoaXMuX3Jlc29sdmVDbG91ZFN0YXR1c0xvYWRlZCA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xvdWQtZG9uZVwiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX2ZsYXNoTWVzc2FnZSA9IChldiBhcyBhbnkpLmRldGFpbC5mbGFzaE1lc3NhZ2U7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvY2xvdWQvbG9naW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpKSB7XG4gICAgICBjb25zdCBvbGRTdGF0dXMgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiY2xvdWRTdGF0dXNcIikgYXNcbiAgICAgICAgfCBDbG91ZFN0YXR1c1xuICAgICAgICB8IHVuZGVmaW5lZDtcbiAgICAgIGlmIChvbGRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlQ2xvdWRTdGF0dXNMb2FkZWQoKTtcbiAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzLmxvZ2dlZF9pbiAhPT0gdGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4pIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgdGhpcy5yb3V0ZS5wcmVmaXgsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50KHRhZzogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSBzdXBlci5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImVtYWlsLWNoYW5nZWRcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9sb2dpbkVtYWlsID0gKGV2IGFzIFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikuZGV0YWlsLnZhbHVlO1xuICAgIH0pO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmbGFzaC1tZXNzYWdlLWNoYW5nZWRcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9mbGFzaE1lc3NhZ2UgPSAoZXYgYXMgUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KS5kZXRhaWwudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCkge1xuICAgIC8vIFdlIGFyZSBub3QgZ29pbmcgdG8gdXBkYXRlIGlmIHRoZSBjdXJyZW50IHBhZ2UgaWYgd2UgYXJlIG5vdCBsb2dnZWQgaW5cbiAgICAvLyBhbmQgdGhlIGN1cnJlbnQgcGFnZSByZXF1aXJlcyBiZWluZyBsb2dnZWQgaW4uIEhhcHBlbnMgd2hlbiB3ZSBsb2cgb3V0LlxuICAgIGlmIChcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMgJiZcbiAgICAgICF0aGlzLmNsb3VkU3RhdHVzLmxvZ2dlZF9pbiAmJlxuICAgICAgTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXModGhpcy5fY3VycmVudFBhZ2UpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIGVsKSB7XG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGhhdmUgUG9seW1lciBwYWdlc1xuICAgICAgKGVsIGFzIFBvbHltZXJFbGVtZW50KS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICBlbWFpbDogdGhpcy5fbG9naW5FbWFpbCxcbiAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgY2xvdWRTdGF0dXM6IHRoaXMuY2xvdWRTdGF0dXMsXG4gICAgICAgIGZsYXNoTWVzc2FnZTogdGhpcy5fZmxhc2hNZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgICBlbC5lbWFpbCA9IHRoaXMuX2xvZ2luRW1haWw7XG4gICAgICBlbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgICAgZWwuY2xvdWRTdGF0dXMgPSB0aGlzLmNsb3VkU3RhdHVzO1xuICAgICAgZWwuZmxhc2hNZXNzYWdlID0gdGhpcy5fZmxhc2hNZXNzYWdlO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLWNsb3VkXCI6IEhhQ29uZmlnQ2xvdWQ7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbi8qXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBDbG91ZExvZ2luIGV4dGVuZHMgTG9jYWxpemVNaXhpbihcbiAgTmF2aWdhdGVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpXG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSB7XG4gICAgICAgICAgbWFyZ2luOiAtMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZmxhc2gtbXNnIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mbGFzaC1tc2cgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICByaWdodDogOHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5jYXB0aW9uJyldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuY2FwdGlvbicpXV08L3NwYW5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5pbnRyb2R1Y3Rpb24yJyldXVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPk5hYnUmbmJzcDtDYXNhLCZuYnNwO0luYzwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uaW50cm9kdWN0aW9uMmEnKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmludHJvZHVjdGlvbjMnKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmxlYXJuX21vcmVfbGluaycpXV08L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGEtY2FyZCBoaWRkZW4kPVwiW1shZmxhc2hNZXNzYWdlXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBmbGFzaC1tc2dcIj5cbiAgICAgICAgICAgICAgICBbW2ZsYXNoTWVzc2FnZV1dXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJoYXNzOmNsb3NlXCIgb24tY2xpY2s9XCJfZGlzbWlzc0ZsYXNoXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uZGlzbWlzcycpXV08L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1yaXBwbGUgaWQ9XCJmbGFzaFJpcHBsZVwiIG5vaW5rPVwiXCI+PC9wYXBlci1yaXBwbGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uc2lnbl9pbicpXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgaGlkZGVuJD1cIltbIV9lcnJvcl1dXCI+W1tfZXJyb3JdXTwvZGl2PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uZW1haWwnKV1dXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbWFpbH19XCJcbiAgICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmVtYWlsX2Vycm9yX21zZycpXV1cIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19wYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBvbi1rZXlkb3duPVwiX2tleURvd25cIlxuICAgICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5wYXNzd29yZF9lcnJvcl9tc2cnKV1dXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVMb2dpblwiXG4gICAgICAgICAgICAgICAgICBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5zaWduX2luJyldXTwvaGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICBoaWRkZW49XCJbW19yZXF1ZXN0SW5Qcm9ncmVzc11dXCJcbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZUZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uZm9yZ290X3Bhc3N3b3JkJyldXVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uLWNsaWNrPVwiX2hhbmRsZVJlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnN0YXJ0X3RyaWFsJyldXVxuICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnRyaWFsX2luZm8nKV1dXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8aGEtaWNvbi1uZXh0PjwvaGEtaWNvbi1uZXh0PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGZsYXNoTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIl9pbnB1dENoYW5nZWQoZW1haWwsIF9wYXNzd29yZClcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLmZsYXNoTWVzc2FnZSkge1xuICAgICAgLy8gV2FpdCBmb3IgRE9NIHRvIGJlIGRyYXduXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuJC5mbGFzaFJpcHBsZS5zaW11bGF0ZWRSaXBwbGUoKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgX2lucHV0Q2hhbmdlZCgpIHtcbiAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuJC5wYXNzd29yZC5pbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5fZXJyb3IgPSBmYWxzZTtcbiAgfVxuXG4gIF9rZXlEb3duKGV2KSB7XG4gICAgLy8gdmFsaWRhdGUgb24gZW50ZXJcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUxvZ2luKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVMb2dpbigpIHtcbiAgICBsZXQgaW52YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLmVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSB0cnVlO1xuICAgICAgdGhpcy4kLmVtYWlsLmZvY3VzKCk7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgdGhpcy4kLnBhc3N3b3JkLmludmFsaWQgPSB0cnVlO1xuXG4gICAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuJC5wYXNzd29yZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL2xvZ2luXCIsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLl9wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlyZShcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgIF9wYXNzd29yZDogXCJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIC8vIERvIHRoaXMgYmVmb3JlIHNldFByb3BlcnRpZXMgYmVjYXVzZSBjaGFuZ2luZyBpdCBjbGVhcnMgZXJyb3JzLlxuICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAgIGNvbnN0IGVyckNvZGUgPSBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkuY29kZTtcbiAgICAgICAgICBpZiAoZXJyQ29kZSA9PT0gXCJQYXNzd29yZENoYW5nZVJlcXVpcmVkXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICBcIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5hbGVydF9wYXNzd29yZF9jaGFuZ2VfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFwiL2NvbmZpZy9jbG91ZC9mb3Jnb3QtcGFzc3dvcmRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChlcnJDb2RlID09PSBcIlVzZXJOb3RDb25maXJtZWRcIikge1xuICAgICAgICAgICAgcHJvcHMuX2Vycm9yID1cbiAgICAgICAgICAgICAgXCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uYWxlcnRfZW1haWxfY29uZmlybV9uZWNlc3NhcnknKV1dXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BzKTtcbiAgICAgICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIF9oYW5kbGVSZWdpc3RlcigpIHtcbiAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvY2xvdWQvcmVnaXN0ZXJcIik7XG4gIH1cblxuICBfaGFuZGxlRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2Nsb3VkL2ZvcmdvdC1wYXNzd29yZFwiKTtcbiAgfVxuXG4gIF9kaXNtaXNzRmxhc2goKSB7XG4gICAgLy8gZ2l2ZSBzb21lIHRpbWUgdG8gbGV0IHRoZSByaXBwbGUgZmluaXNoLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICAgIH0sIDIwMCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtbG9naW5cIiwgQ2xvdWRMb2dpbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJpbXBvcnQgeyBzaG93VG9hc3QgfSBmcm9tIFwiLi90b2FzdFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NhdmVTdWNjZXNzVG9hc3QgPSAoZWw6IEhUTUxFbGVtZW50LCBoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBzaG93VG9hc3QoZWwsIHtcbiAgICBtZXNzYWdlOiBoYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zdWNjZXNzZnVsbHlfc2F2ZWRcIiksXG4gIH0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTtBQUNBO0FBMkRBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoR0E7QUFDQTtBQWlHQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFaQTtBQW9CQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7QUFEQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUxBO0FBQ0E7QUEyTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBRUE7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFVQTs7OztBQU1BOzs7QUFJQTs7OztBQU1BO0FBQ0E7Ozs7O0FBS0E7O0FBaEJBOzs7QUF3QkE7QUFDQTs7Ozs7QUFPQTs7Ozs7QUFwRUE7QUE0RUE7QUF4RkE7QUFBQTtBQUFBO0FBQUE7QUEyRkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUF2R0E7QUFBQTtBQUFBO0FBQUE7QUEwR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpIQTtBQUFBO0FBQUE7QUFBQTtBQW9IQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUF4SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUNBO0FBOUtBO0FBQUE7QUFBQTtBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOztBQUVBOzs7OztBQU9BO0FBQ0E7Ozs7QUFJQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVVBOzs7O0FBTUE7OztBQUlBOzs7O0FBTUE7QUFDQTs7Ozs7QUFLQTs7OztBQU1BOztBQUlBOztBQUlBOztBQUlBO0FBR0E7QUFDQTs7O0FBdENBOzs7O0FBOENBO0FBQ0E7OztBQUdBOzs7OztBQU9BOzs7OztBQTlGQTtBQXNHQTtBQXJIQTtBQUFBO0FBQUE7QUFBQTtBQXdIQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0hBO0FBQUE7QUFBQTtBQUFBO0FBa0lBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQWhKQTtBQUFBO0FBQUE7QUFBQTtBQW1KQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQWxLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0RBO0FBck5BO0FBQUE7QUFBQTtBQThOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUtBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTs7O0FBS0E7OztBQVBBO0FBYUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBTUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7QUFNQTs7O0FBS0E7O0FBR0E7QUFDQTs7QUFKQTs7O0FBakNBO0FBOENBO0FBN0VBO0FBQUE7QUFBQTtBQUFBO0FBZ0ZBO0FBQ0E7QUFEQTtBQUdBO0FBbkZBO0FBQUE7QUFBQTtBQUFBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlCQTtBQS9IQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBOzs7OztBQWJBO0FBcUJBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBMENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUNBOztBQUVBOztBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBSUE7O0FBSUE7O0FBSUE7OztBQWRBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBOztBQUlBOztBQUVBOzs7O0FBQUE7QUFRQTtBQUNBOztBQUhBO0FBU0E7QUFDQTs7QUE1QkE7QUFnQ0E7QUFsSEE7QUFBQTtBQUFBO0FBQUE7QUFxSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBOUhBO0FBQUE7QUFBQTtBQUFBO0FBaUlBO0FBQ0E7QUFBQTtBQUNBO0FBbklBO0FBQUE7QUFBQTtBQUFBO0FBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQTVKQTtBQUFBO0FBQUE7QUFBQTtBQStKQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBaExBO0FBQUE7QUFBQTtBQUFBO0FBbUxBO0FBR0E7QUF0TEE7QUFBQTtBQUFBO0FBQUE7QUF5TEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3QkE7QUFqTkE7QUFBQTtBQUFBO0FBME5BOzs7Ozs7Ozs7Ozs7QUM1T0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUlBO0FBQ0E7QUFDQSwyaUJBRUE7QUFFQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBSUE7QUFDQTtBQUNBLDRtQkFFQTtBQUVBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBLGdPQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsMFFBRUE7QUFKQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQSx3VEFFQTtBQUpBO0FBT0E7QUFDQTtBQUNBLHNQQUNBO0FBSEE7QUE1QkE7QUFqQkE7Ozs7O0FBcURBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWpJQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuUkE7QUFDQTtBQW9SQTs7Ozs7Ozs7Ozs7O0FDL1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFGQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==