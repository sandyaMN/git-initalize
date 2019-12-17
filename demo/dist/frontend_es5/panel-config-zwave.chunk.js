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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
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

  _updateLayoutStates: function _updateLayoutStates() {
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
var computeObjectId = function computeObjectId(entityId) {
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

var computeStateDomain = function computeStateDomain(stateObj) {
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

var computeStateName = function computeStateName(stateObj) {
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

var sortStatesByName = function sortStatesByName(entityA, entityB) {
  var nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
  var nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-progress-button\n        id=\"progress\"\n        progress=\"[[progress]]\"\n        on-click=\"buttonTapped\"\n        ><slot></slot\n      ></ha-progress-button>\n    "]);

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

var HaCallServiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCallServiceButton, _EventsMixin);

  function HaCallServiceButton() {
    _classCallCheck(this, HaCallServiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCallServiceButton).apply(this, arguments));
  }

  _createClass(HaCallServiceButton, [{
    key: "callService",
    value: function callService() {
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
  }, {
    key: "buttonTapped",
    value: function buttonTapped() {
      var _this = this;

      if (this.confirmation) {
        Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_4__["showConfirmationDialog"])(this, {
          text: this.confirmation,
          confirm: function confirm() {
            return _this.callService();
          }
        });
      } else {
        this.callService();
      }
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
  }]);

  return HaCallServiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-call-service-button", HaCallServiceButton);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      [[_getDescription(hass, domain, service)]]\n    "]);

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




var HaServiceDescription =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaServiceDescription, _PolymerElement);

  function HaServiceDescription() {
    _classCallCheck(this, HaServiceDescription);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaServiceDescription).apply(this, arguments));
  }

  _createClass(HaServiceDescription, [{
    key: "_getDescription",
    value: function _getDescription(hass, domain, service) {
      var domainServices = hass.services[domain];
      if (!domainServices) return "";
      var serviceObject = domainServices[service];
      if (!serviceObject) return "";
      return serviceObject.description;
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
        domain: String,
        service: String
      };
    }
  }]);

  return HaServiceDescription;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
var ZWAVE_NETWORK_STATE_STOPPED = 0;
var ZWAVE_NETWORK_STATE_FAILED = 1;
var ZWAVE_NETWORK_STATE_STARTED = 5;
var ZWAVE_NETWORK_STATE_AWAKED = 7;
var ZWAVE_NETWORK_STATE_READY = 10;
var fetchNetworkStatus = function fetchNetworkStatus(hass) {
  return hass.callWS({
    type: "zwave/network_status"
  });
};
var fetchValues = function fetchValues(hass, nodeId) {
  return hass.callApi("GET", "zwave/values/".concat(nodeId));
};
var fetchNodeConfig = function fetchNodeConfig(hass, nodeId) {
  return hass.callApi("GET", "zwave/config/".concat(nodeId));
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot=\"header\"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot=\"header\"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot=\"header\"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot=\"header\"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using 'transform' will cause 'position: fixed' elements to behave like\n           'position: absolute' relative to this element. */\n          transform: translate(0);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id=\"wrapper\" class=\"initializing\">\n        <slot id=\"headerSlot\" name=\"header\"></slot>\n\n        <div id=\"contentContainer\"><slot></slot></div>\n        <slot id=\"fab\" name=\"fab\"></slot>\n      </div>\n    "], ["\n      <style>\n        :host {\n          display: block;\n          /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n          position: relative;\n          z-index: 0;\n        }\n\n        #wrapper ::slotted([slot=\"header\"]) {\n          @apply --layout-fixed-top;\n          z-index: 1;\n        }\n\n        #wrapper.initializing ::slotted([slot=\"header\"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) {\n          height: 100%;\n        }\n\n        :host([has-scrolling-region]) #wrapper ::slotted([slot=\"header\"]) {\n          position: absolute;\n        }\n\n        :host([has-scrolling-region])\n          #wrapper.initializing\n          ::slotted([slot=\"header\"]) {\n          position: relative;\n        }\n\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          @apply --layout-fit;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n          position: relative;\n        }\n\n        #contentContainer {\n          /* Create a stacking context here so that all children appear below the header. */\n          position: relative;\n          z-index: 0;\n          /* Using 'transform' will cause 'position: fixed' elements to behave like\n           'position: absolute' relative to this element. */\n          transform: translate(0);\n        }\n\n        @media print {\n          :host([has-scrolling-region]) #wrapper #contentContainer {\n            overflow-y: visible;\n          }\n        }\n      </style>\n\n      <div id=\"wrapper\" class=\"initializing\">\n        <slot id=\"headerSlot\" name=\"header\"></slot>\n\n        <div id=\"contentContainer\"><slot></slot></div>\n        <slot id=\"fab\" name=\"fab\"></slot>\n      </div>\n    "]);

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




var HaAppLayout =
/*#__PURE__*/
function (_customElements$get) {
  _inherits(HaAppLayout, _customElements$get);

  function HaAppLayout() {
    _classCallCheck(this, HaAppLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaAppLayout).apply(this, arguments));
  }

  _createClass(HaAppLayout, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }]);

  return HaAppLayout;
}(customElements.get("app-header-layout"));

customElements.define("ha-app-layout", HaAppLayout);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = "<dom-module id=\"ha-form-style\">\n  <template>\n    <style>\n      .form-group {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        padding: 8px 16px;\n      }\n\n      .form-group label {\n        @apply --layout-flex-2;\n      }\n\n      .form-group .form-control {\n        @apply --layout-flex;\n      }\n\n      .form-group.vertical {\n        @apply --layout-vertical;\n        @apply --layout-start;\n      }\n\n      paper-dropdown-menu.form-control {\n        margin: -9px 0;\n      }\n    </style>\n  </template>\n</dom-module>";
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style ha-form-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        .sectionHeader {\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .node-info {\n          margin-left: 16px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-app-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"_backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title=\"\">\n              [[localize('ui.panel.config.zwave.caption')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <zwave-network\n          id=\"zwave-network\"\n          is-wide=\"[[isWide]]\"\n          hass=\"[[hass]]\"\n        ></zwave-network>\n\n        <!-- Node card -->\n        <ha-config-section is-wide=\"[[isWide]]\">\n          <div class=\"sectionHeader\" slot=\"header\">\n            <span>Z-Wave Node Management</span>\n            <paper-icon-button\n              class=\"toggle-help-icon\"\n              on-click=\"toggleHelp\"\n              icon=\"hass:help-circle\"\n            ></paper-icon-button>\n          </div>\n          <span slot=\"introduction\">\n            Run Z-Wave commands that affect a single node. Pick a node to see a\n            list of available commands.\n          </span>\n\n          <ha-card class=\"content\">\n            <div class=\"device-picker\">\n              <paper-dropdown-menu dynamic-align=\"\" label=\"Nodes\" class=\"flex\">\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"{{selectedNode}}\"\n                >\n                  <template is=\"dom-repeat\" items=\"[[nodes]]\" as=\"state\">\n                    <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                  </template>\n                </paper-listbox>\n              </paper-dropdown-menu>\n            </div>\n            <template is=\"dom-if\" if=\"[[!computeIsNodeSelected(selectedNode)]]\">\n              <template is=\"dom-if\" if=\"[[showHelp]]\">\n                <div style=\"color: grey; padding: 12px\">\n                  Select node to view per-node options\n                </div>\n              </template>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[computeIsNodeSelected(selectedNode)]]\">\n              <div class=\"card-actions\">\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"refresh_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Refresh Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"refresh_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <template is=\"dom-if\" if=\"[[nodeFailed]]\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"remove_failed_node\"\n                    service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                  >\n                    Remove Failed Node\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"remove_failed_node\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"replace_failed_node\"\n                    service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                  >\n                    Replace Failed Node\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"replace_failed_node\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n                </template>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"print_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Print Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"print_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"heal_node\"\n                  service-data=\"[[computeHealNodeServiceData(selectedNode)]]\"\n                >\n                  Heal Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"heal_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n\n                <ha-call-service-button\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"test_node\"\n                  service-data=\"[[computeNodeServiceData(selectedNode)]]\"\n                >\n                  Test Node\n                </ha-call-service-button>\n                <ha-service-description\n                  hass=\"[[hass]]\"\n                  domain=\"zwave\"\n                  service=\"test_node\"\n                  hidden$=\"[[!showHelp]]\"\n                >\n                </ha-service-description>\n                <mwc-button on-click=\"_nodeMoreInfo\"\n                  >Node Information</mwc-button\n                >\n              </div>\n\n              <div class=\"device-picker\">\n                <paper-dropdown-menu\n                  label=\"Entities of this node\"\n                  dynamic-align=\"\"\n                  class=\"flex\"\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    selected=\"{{selectedEntity}}\"\n                  >\n                    <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"state\">\n                      <paper-item>[[state.entity_id]]</paper-item>\n                    </template>\n                  </paper-listbox>\n                </paper-dropdown-menu>\n              </div>\n              <template\n                is=\"dom-if\"\n                if=\"[[!computeIsEntitySelected(selectedEntity)]]\"\n              >\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"refresh_entity\"\n                    service-data=\"[[computeRefreshEntityServiceData(selectedEntity)]]\"\n                  >\n                    Refresh Entity\n                  </ha-call-service-button>\n                  <ha-service-description\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"refresh_entity\"\n                    hidden$=\"[[!showHelp]]\"\n                  >\n                  </ha-service-description>\n                  <mwc-button on-click=\"_entityMoreInfo\"\n                    >Entity Information</mwc-button\n                  >\n                </div>\n                <div class=\"form-group\">\n                  <paper-checkbox\n                    checked=\"{{entityIgnored}}\"\n                    class=\"form-control\"\n                  >\n                    Exclude this entity from Home Assistant\n                  </paper-checkbox>\n                  <paper-input\n                    disabled=\"{{entityIgnored}}\"\n                    label=\"Polling intensity\"\n                    type=\"number\"\n                    min=\"0\"\n                    value=\"{{entityPollingIntensity}}\"\n                  >\n                  </paper-input>\n                </div>\n                <div class=\"card-actions\">\n                  <ha-call-service-button\n                    hass=\"[[hass]]\"\n                    domain=\"zwave\"\n                    service=\"set_poll_intensity\"\n                    service-data=\"[[computePollIntensityServiceData(entityPollingIntensity)]]\"\n                  >\n                    Save\n                  </ha-call-service-button>\n                </div>\n              </template>\n            </template>\n          </ha-card>\n\n          <template is=\"dom-if\" if=\"[[computeIsNodeSelected(selectedNode)]]\">\n            <!-- Value card -->\n            <zwave-values\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              values=\"[[values]]\"\n            ></zwave-values>\n\n            <!-- Group card -->\n            <zwave-groups\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              groups=\"[[groups]]\"\n            ></zwave-groups>\n\n            <!-- Config card -->\n            <zwave-node-config\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              config=\"[[config]]\"\n            ></zwave-node-config>\n          </template>\n\n          <!-- Protection card -->\n          <template is=\"dom-if\" if=\"{{_protectionNode}}\">\n            <zwave-node-protection\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              selected-node=\"[[selectedNode]]\"\n              protection=\"[[_protection]]\"\n            ></zwave-node-protection>\n          </template>\n\n          <!-- User Codes -->\n          <template is=\"dom-if\" if=\"{{hasNodeUserCodes}}\">\n            <zwave-usercodes\n              id=\"zwave-usercodes\"\n              hass=\"[[hass]]\"\n              nodes=\"[[nodes]]\"\n              user-codes=\"[[userCodes]]\"\n              selected-node=\"[[selectedNode]]\"\n            ></zwave-usercodes>\n          </template>\n        </ha-config-section>\n\n        <!-- Ozw log -->\n        <ozw-log is-wide=\"[[isWide]]\" hass=\"[[hass]]\"></ozw-log>\n      </ha-app-layout>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaConfigZwave =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigZwave, _LocalizeMixin);

  function HaConfigZwave() {
    _classCallCheck(this, HaConfigZwave);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigZwave).apply(this, arguments));
  }

  _createClass(HaConfigZwave, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaConfigZwave.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      if (ev.detail.success && ev.detail.service === "set_poll_intensity") {
        this._saveEntity();
      }
    }
  }, {
    key: "computeNodes",
    value: function computeNodes(hass) {
      return Object.keys(hass.states).map(function (key) {
        return hass.states[key];
      }).filter(function (ent) {
        return ent.entity_id.match("zwave[.]");
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
    }
  }, {
    key: "computeEntities",
    value: function computeEntities(selectedNode) {
      if (!this.nodes || selectedNode === -1) return -1;
      var nodeid = this.nodes[this.selectedNode].attributes.node_id;
      var hass = this.hass;
      return Object.keys(this.hass.states).map(function (key) {
        return hass.states[key];
      }).filter(function (ent) {
        if (ent.attributes.node_id === undefined) {
          return false;
        }

        return !ent.attributes.hidden && "node_id" in ent.attributes && ent.attributes.node_id === nodeid && !ent.entity_id.match("zwave[.]");
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
    }
  }, {
    key: "selectedNodeChanged",
    value: function selectedNodeChanged(selectedNode) {
      var _this2 = this;

      if (selectedNode === -1) return;
      this.selectedEntity = -1;
      this.hass.callApi("GET", "zwave/config/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (configs) {
        _this2.config = _this2._objToArray(configs);
      });
      this.hass.callApi("GET", "zwave/values/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (values) {
        _this2.values = _this2._objToArray(values);
      });
      this.hass.callApi("GET", "zwave/groups/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (groups) {
        _this2.groups = _this2._objToArray(groups);
      });
      this.hasNodeUserCodes = false;
      this.notifyPath("hasNodeUserCodes");
      this.hass.callApi("GET", "zwave/usercodes/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (usercodes) {
        _this2.userCodes = _this2._objToArray(usercodes);
        _this2.hasNodeUserCodes = _this2.userCodes.length > 0;

        _this2.notifyPath("hasNodeUserCodes");
      });
      this.hass.callApi("GET", "zwave/protection/".concat(this.nodes[selectedNode].attributes.node_id)).then(function (protections) {
        _this2._protection = _this2._objToArray(protections);

        if (_this2._protection) {
          if (_this2._protection.length === 0) {
            return;
          }

          _this2._protectionNode = true;
        }
      });
      this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
    }
  }, {
    key: "selectedEntityChanged",
    value: function selectedEntityChanged(selectedEntity) {
      var _this3 = this;

      if (selectedEntity === -1) return;
      this.hass.callApi("GET", "zwave/values/".concat(this.nodes[this.selectedNode].attributes.node_id)).then(function (values) {
        _this3.values = _this3._objToArray(values);
      });
      var valueId = this.entities[selectedEntity].attributes.value_id;
      var valueData = this.values.find(function (obj) {
        return obj.key === valueId;
      });
      var valueIndex = this.values.indexOf(valueData);
      this.hass.callApi("GET", "config/zwave/device_config/".concat(this.entities[selectedEntity].entity_id)).then(function (data) {
        _this3.setProperties({
          entityIgnored: data.ignored || false,
          entityPollingIntensity: _this3.values[valueIndex].value.poll_intensity
        });
      })["catch"](function () {
        _this3.setProperties({
          entityIgnored: false,
          entityPollingIntensity: _this3.values[valueIndex].value.poll_intensity
        });
      });
    }
  }, {
    key: "computeSelectCaption",
    value: function computeSelectCaption(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj) + " (Node:" + stateObj.attributes.node_id + " " + stateObj.attributes.query_stage + ")";
    }
  }, {
    key: "computeSelectCaptionEnt",
    value: function computeSelectCaptionEnt(stateObj) {
      return Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__["computeStateDomain"])(stateObj) + "." + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeIsNodeSelected",
    value: function computeIsNodeSelected() {
      return this.nodes && this.selectedNode !== -1;
    }
  }, {
    key: "computeIsEntitySelected",
    value: function computeIsEntitySelected(selectedEntity) {
      return selectedEntity === -1;
    }
  }, {
    key: "computeNodeServiceData",
    value: function computeNodeServiceData(selectedNode) {
      return {
        node_id: this.nodes[selectedNode].attributes.node_id
      };
    }
  }, {
    key: "computeHealNodeServiceData",
    value: function computeHealNodeServiceData(selectedNode) {
      return {
        node_id: this.nodes[selectedNode].attributes.node_id,
        return_routes: true
      };
    }
  }, {
    key: "computeRefreshEntityServiceData",
    value: function computeRefreshEntityServiceData(selectedEntity) {
      if (selectedEntity === -1) return -1;
      return {
        entity_id: this.entities[selectedEntity].entity_id
      };
    }
  }, {
    key: "computePollIntensityServiceData",
    value: function computePollIntensityServiceData(entityPollingIntensity) {
      if (!this.selectedNode === -1 || this.selectedEntity === -1) return -1;
      return {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        value_id: this.entities[this.selectedEntity].attributes.value_id,
        poll_intensity: parseInt(entityPollingIntensity)
      };
    }
  }, {
    key: "_nodeMoreInfo",
    value: function _nodeMoreInfo() {
      this.fire("hass-more-info", {
        entityId: this.nodes[this.selectedNode].entity_id
      });
    }
  }, {
    key: "_entityMoreInfo",
    value: function _entityMoreInfo() {
      this.fire("hass-more-info", {
        entityId: this.entities[this.selectedEntity].entity_id
      });
    }
  }, {
    key: "_saveEntity",
    value: function _saveEntity() {
      var data = {
        ignored: this.entityIgnored,
        polling_intensity: parseInt(this.entityPollingIntensity)
      };
      return this.hass.callApi("POST", "config/zwave/device_config/".concat(this.entities[this.selectedEntity].entity_id), data);
    }
  }, {
    key: "toggleHelp",
    value: function toggleHelp() {
      this.showHelp = !this.showHelp;
    }
  }, {
    key: "_objToArray",
    value: function _objToArray(obj) {
      var array = [];
      Object.keys(obj).forEach(function (key) {
        array.push({
          key: key,
          value: obj[key]
        });
      });
      return array;
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      history.back();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
          value: function value() {
            return [];
          }
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
          value: function value() {
            return [];
          }
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
          value: function value() {
            return [];
          }
        },
        _protectionNode: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigZwave;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 12px;\n        }\n      </style>\n      <ha-card class=\"content\" header=\"Node group associations\">\n        <!-- TODO make api for getting groups and members -->\n        <div class=\"device-picker\">\n          <paper-dropdown-menu label=\"Group\" dynamic-align=\"\" class=\"flex\">\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"{{_selectedGroup}}\"\n            >\n              <template is=\"dom-repeat\" items=\"[[groups]]\" as=\"state\">\n                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        <template is=\"dom-if\" if=\"[[_computeIsGroupSelected(_selectedGroup)]]\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Node to control\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedTargetNode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[nodes]]\" as=\"state\">\n                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class=\"help-text\">\n            <span>Other Nodes in this group:</span>\n            <template is=\"dom-repeat\" items=\"[[_otherGroupNodes]]\" as=\"state\">\n              <div>[[state]]</div>\n            </template>\n          </div>\n          <div class=\"help-text\">\n            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>\n          </div>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if=\"[[_computeIsTargetNodeSelected(_selectedTargetNode)]]\"\n        >\n          <div class=\"card-actions\">\n            <template is=\"dom-if\" if=\"[[!_noAssociationsLeft]]\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_addAssocServiceData]]\"\n              >\n                Add To Group\n              </ha-call-service-button>\n            </template>\n            <template\n              is=\"dom-if\"\n              if=\"[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]\"\n            >\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_removeAssocServiceData]]\"\n              >\n                Remove From Group\n              </ha-call-service-button>\n            </template>\n            <template is=\"dom-if\" if=\"[[_isBroadcastNodeInGroup]]\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"zwave\"\n                service=\"change_association\"\n                service-data=\"[[_removeBroadcastNodeServiceData]]\"\n              >\n                Remove Broadcast\n              </ha-call-service-button>\n            </template>\n          </div>\n        </template>\n      </ha-card>\n    "]);

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










var ZwaveGroups =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveGroups, _PolymerElement);

  function ZwaveGroups() {
    _classCallCheck(this, ZwaveGroups);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveGroups).apply(this, arguments));
  }

  _createClass(ZwaveGroups, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveGroups.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshGroups(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_computeAssociationsLeft",
    value: function _computeAssociationsLeft(selectedGroup) {
      if (selectedGroup === -1) return true;
      return this._maxAssociations === this._otherGroupNodes.length;
    }
  }, {
    key: "_computeMaxAssociations",
    value: function _computeMaxAssociations(selectedGroup) {
      if (selectedGroup === -1) return -1;
      var maxAssociations = this.groups[selectedGroup].value.max_associations;
      if (!maxAssociations) return "None";
      return maxAssociations;
    }
  }, {
    key: "_computeOtherGroupNodes",
    value: function _computeOtherGroupNodes(selectedGroup) {
      var _this3 = this;

      if (selectedGroup === -1) return -1;
      this.setProperties({
        _isBroadcastNodeInGroup: false
      });
      var associations = Object.values(this.groups[selectedGroup].value.association_instances);
      if (!associations.length) return ["None"];
      return associations.map(function (assoc) {
        if (!assoc.length || assoc.length !== 2) {
          return "Unknown Node: ".concat(assoc);
        }

        var id = assoc[0];
        var instance = assoc[1];

        var node = _this3.nodes.find(function (n) {
          return n.attributes.node_id === id;
        });

        if (id === 255) {
          _this3.setProperties({
            _isBroadcastNodeInGroup: true,
            _removeBroadcastNodeServiceData: {
              node_id: _this3.nodes[_this3.selectedNode].attributes.node_id,
              association: "remove",
              target_node_id: 255,
              group: _this3.groups[selectedGroup].key
            }
          });
        }

        if (!node) {
          return "Unknown Node (".concat(id, ": (").concat(instance, " ? ").concat(id, ".").concat(instance, " : ").concat(id, "))");
        }

        var caption = _this3._computeSelectCaption(node);

        if (instance) {
          caption += "/ Instance: ".concat(instance);
        }

        return caption;
      });
    }
  }, {
    key: "_computeTargetInGroup",
    value: function _computeTargetInGroup(selectedGroup, selectedTargetNode) {
      if (selectedGroup === -1 || selectedTargetNode === -1) return false;
      var associations = Object.values(this.groups[selectedGroup].value.associations);
      if (!associations.length) return false;
      return associations.indexOf(this.nodes[selectedTargetNode].attributes.node_id) !== -1;
    }
  }, {
    key: "_computeSelectCaption",
    value: function _computeSelectCaption(stateObj) {
      return "".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj), "\n      (Node: ").concat(stateObj.attributes.node_id, "\n      ").concat(stateObj.attributes.query_stage, ")");
    }
  }, {
    key: "_computeSelectCaptionGroup",
    value: function _computeSelectCaptionGroup(stateObj) {
      return "".concat(stateObj.key, ": ").concat(stateObj.value.label);
    }
  }, {
    key: "_computeIsTargetNodeSelected",
    value: function _computeIsTargetNodeSelected(selectedTargetNode) {
      return this.nodes && selectedTargetNode !== -1;
    }
  }, {
    key: "_computeIsGroupSelected",
    value: function _computeIsGroupSelected(selectedGroup) {
      return this.nodes && this.selectedNode !== -1 && selectedGroup !== -1;
    }
  }, {
    key: "_computeAssocServiceData",
    value: function _computeAssocServiceData(selectedGroup, type) {
      if (!this.groups === -1 || selectedGroup === -1 || this.selectedNode === -1 || this._selectedTargetNode === -1) return -1;
      return {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        association: type,
        target_node_id: this.nodes[this._selectedTargetNode].attributes.node_id,
        group: this.groups[selectedGroup].key
      };
    }
  }, {
    key: "_refreshGroups",
    value: function _refreshGroups(selectedNode) {
      var groupData, groups, oldGroup;
      return regeneratorRuntime.async(function _refreshGroups$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              groupData = [];
              _context.next = 3;
              return regeneratorRuntime.awrap(this.hass.callApi("GET", "zwave/groups/".concat(this.nodes[selectedNode].attributes.node_id)));

            case 3:
              groups = _context.sent;
              Object.keys(groups).forEach(function (key) {
                groupData.push({
                  key: key,
                  value: groups[key]
                });
              });
              this.setProperties({
                groups: groupData,
                _maxAssociations: groupData[this._selectedGroup].value.max_associations,
                _otherGroupNodes: Object.values(groupData[this._selectedGroup].value.associations),
                _isBroadcastNodeInGroup: false
              });
              oldGroup = this._selectedGroup;
              this.setProperties({
                _selectedGroup: -1
              });
              this.setProperties({
                _selectedGroup: oldGroup
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_selectedGroupChanged",
    value: function _selectedGroupChanged() {
      if (this._selectedGroup === -1) return;
      this.setProperties({
        _maxAssociations: this.groups[this._selectedGroup].value.max_associations,
        _otherGroupNodes: Object.values(this.groups[this._selectedGroup].value.associations)
      });
    }
  }, {
    key: "_selectedTargetNodeChanged",
    value: function _selectedTargetNodeChanged() {
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
  }, {
    key: "_selectedNodeChanged",
    value: function _selectedNodeChanged() {
      if (this.selectedNode === -1) return;
      this.setProperties({
        _selectedTargetNode: -1,
        _selectedGroup: -1
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ["_selectedGroupChanged(groups, _selectedGroup)"];
    }
  }]);

  return ZwaveGroups;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"iron-flex ha-style\">\n      .content {\n        margin-top: 24px;\n      }\n\n      ha-card {\n        margin: 0 auto;\n        max-width: 600px;\n      }\n\n      .device-picker {\n        padding-left: 24px;\n        padding-right: 24px;\n        padding-bottom: 24px;\n      }\n\n    </style>\n    <ha-config-section is-wide=\"[[isWide]]\">\n      <span slot=\"header\">\n        [[localize('ui.panel.config.zwave.ozw_log.header')]]\n      </span>\n      <span slot=\"introduction\">\n        [[localize('ui.panel.config.zwave.ozw_log.introduction')]]\n      </span>\n      <ha-card class=\"content\">\n        <div class=\"device-picker\">\n          <paper-input label=\"Number of last log lines.\" type=\"number\" min=\"0\" max=\"1000\" step=\"10\" value=\"{{numLogLines}}\">\n          </paper-input>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button raised=\"true\" on-click=\"_openLogWindow\">Load</mwc-button>\n          <mwc-button raised=\"true\" on-click=\"_tailLog\" disabled=\"{{_completeLog}}\">Tail</mwc-button>\n      </ha-card>\n    </ha-config-section>\n"]);

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











var registeredDialog = false;

var OzwLog =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(OzwLog, _LocalizeMixin);

  function OzwLog() {
    _classCallCheck(this, OzwLog);

    return _possibleConstructorReturn(this, _getPrototypeOf(OzwLog).apply(this, arguments));
  }

  _createClass(OzwLog, [{
    key: "_tailLog",
    value: function _tailLog() {
      var _this = this;

      var ozwWindow;
      return regeneratorRuntime.async(function _tailLog$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setProperties({
                tail: true
              });
              _context.next = 3;
              return regeneratorRuntime.awrap(this._openLogWindow());

            case 3:
              ozwWindow = _context.sent;

              if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
                this.setProperties({
                  _intervalId: setInterval(function () {
                    _this._refreshLog(ozwWindow);
                  }, 1500)
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_openLogWindow",
    value: function _openLogWindow() {
      var info, ozwWindow;
      return regeneratorRuntime.async(function _openLogWindow$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines));

            case 2:
              info = _context2.sent;
              this.setProperties({
                _ozwLogs: info
              });

              if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
                _context2.next = 7;
                break;
              }

              this._showOzwlogDialog();

              return _context2.abrupt("return", -1);

            case 7:
              ozwWindow = open("", "ozwLog", "toolbar");
              ozwWindow.document.body.innerHTML = "<pre>".concat(this._ozwLogs, "</pre>");
              return _context2.abrupt("return", ozwWindow);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_refreshLog",
    value: function _refreshLog(ozwWindow) {
      var info;
      return regeneratorRuntime.async(function _refreshLog$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(ozwWindow.closed === true)) {
                _context3.next = 5;
                break;
              }

              clearInterval(this._intervalId);
              this.setProperties({
                _intervalId: null
              });
              _context3.next = 10;
              break;

            case 5:
              _context3.next = 7;
              return regeneratorRuntime.awrap(this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines));

            case 7:
              info = _context3.sent;
              this.setProperties({
                _ozwLogs: info
              });
              ozwWindow.document.body.innerHTML = "<pre>".concat(this._ozwLogs, "</pre>");

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_isCompleteLog",
    value: function _isCompleteLog() {
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
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(OzwLog.prototype), "connectedCallback", this).call(this);

      if (!registeredDialog) {
        registeredDialog = true;
        this.fire("register-dialog", {
          dialogShowEvent: "show-ozwlog-dialog",
          dialogTag: "zwave-log-dialog",
          dialogImport: function dialogImport() {
            return Promise.all(/*! import() | zwave-log-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("zwave-log-dialog")]).then(__webpack_require__.bind(null, /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js"));
          }
        });
      }
    }
  }, {
    key: "_showOzwlogDialog",
    value: function _showOzwlogDialog() {
      var _this2 = this;

      this.fire("show-ozwlog-dialog", {
        hass: this.hass,
        _numLogLines: this.numLogLines,
        _ozwLog: this._ozwLogs,
        _tail: this.tail,
        dialogClosedCallback: function dialogClosedCallback() {
          return _this2._dialogClosed();
        }
      });
    }
  }, {
    key: "_dialogClosed",
    value: function _dialogClosed() {
      this.setProperties({
        tail: false
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return OzwLog;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        .content {\n          margin-top: 24px;\n        }\n\n        .sectionHeader {\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .network-status {\n          text-align: center;\n        }\n\n        .network-status div.details {\n          font-size: 1.5rem;\n          padding: 24px;\n        }\n\n        .network-status ha-icon {\n          display: block;\n          margin: 0px auto 16px;\n          width: 48px;\n          height: 48px;\n        }\n\n        .network-status small {\n          font-size: 1rem;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n          padding: 0 8px 12px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      <ha-call-service-button\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n      >\n        ", "\n      </ha-call-service-button>\n      <ha-service-description\n        .hass=", "\n        domain=\"zwave\"\n        service=\"", "\"\n        ?hidden=", "\n      >\n      </ha-service-description>\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n                    <ha-card class=\"content\">\n                      <div class=\"card-actions\">\n                        ", "\n                        ", "\n                        ", "\n                      </div>\n                      <div class=\"card-actions\">\n                        ", "\n                      </div>\n                    </ha-card>\n                  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"card-actions\">\n                        ", "\n                        <ha-call-api-button\n                          .hass=", "\n                          path=\"zwave/saveconfig\"\n                        >\n                          ", "\n                        </ha-call-api-button>\n                      </div>\n                    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                        ", "\n                      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                        ", "\n                        ", "\n                        ", "\n                      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                        <ha-icon icon=\"hass:checkbox-marked-circle\"> </ha-icon>\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                        <paper-spinner active></paper-spinner>\n                        ", "<br />\n                        <small>\n                          ", "\n                        </small>\n                      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                        <ha-icon icon=\"hass:close\"></ha-icon>\n                        ", "\n                      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <ha-card class=\"content network-status\">\n                <div class=\"details\">\n                  ", "\n                </div>\n                <div class=\"card-actions\">\n                  ", "\n                </div>\n                ", "\n              </ha-card>\n              ", "\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-config-section .isWide=\"", "\">\n        <div class=\"sectionHeader\" slot=\"header\">\n          <span>\n            ", "\n          </span>\n          <paper-icon-button\n            class=\"toggle-help-icon\"\n            @click=\"", "\"\n            icon=\"hass:help-circle\"\n          ></paper-icon-button>\n        </div>\n        <div slot=\"introduction\">\n          ", "\n          <p>\n            <a\n              href=\"https://www.home-assistant.io/docs/z-wave/control-panel/\"\n              target=\"_blank\"\n            >\n              ", "\n            </a>\n          </p>\n        </div>\n\n        ", "\n      </ha-config-section>\n    "]);

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












var ZwaveNetwork = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("zwave-network")], function (_initialize, _LitElement) {
  var ZwaveNetwork =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(ZwaveNetwork, _LitElement2);

    function ZwaveNetwork() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ZwaveNetwork);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZwaveNetwork)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return ZwaveNetwork;
  }(_LitElement);

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
      value: function value() {
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
      value: function value() {
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
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.isWide, this.hass.localize("ui.panel.config.zwave.network_management.header"), this._onHelpTap, this.hass.localize("ui.panel.config.zwave.network_management.introduction"), this.hass.localize("ui.panel.config.zwave.learn_more"), this._networkStatus ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2(), this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_STOPPED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject3(), this.hass.localize("ui.panel.config.zwave.network_status.network_stopped")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_STARTED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject4(), this.hass.localize("ui.panel.config.zwave.network_status.network_starting"), this.hass.localize("ui.panel.config.zwave.network_status.network_starting_note")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject5(), this.hass.localize("ui.panel.config.zwave.network_status.network_started"), this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_some_queried")) : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_READY"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject6(), this.hass.localize("ui.panel.config.zwave.network_status.network_started"), this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_all_queried")) : "", this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject7(), this._generateServiceButton("stop_network"), this._generateServiceButton("heal_network"), this._generateServiceButton("test_network")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject8(), this._generateServiceButton("start_network")), this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject9(), this._generateServiceButton("soft_reset"), this.hass, this.hass.localize("ui.panel.config.zwave.services.save_config")) : "", this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_4__["ZWAVE_NETWORK_STATE_AWAKED"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject10(), this._generateServiceButton("add_node_secure"), this._generateServiceButton("add_node"), this._generateServiceButton("remove_node"), this._generateServiceButton("cancel_command")) : "") : "");
      }
    }, {
      kind: "method",
      key: "_getNetworkStatus",
      value: function _getNetworkStatus() {
        return regeneratorRuntime.async(function _getNetworkStatus$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(Object(_data_zwave__WEBPACK_IMPORTED_MODULE_4__["fetchNetworkStatus"])(this.hass));

              case 2:
                this._networkStatus = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_subscribe",
      value: function _subscribe() {
        var _this2 = this;

        this._unsubs = ["zwave.network_start", "zwave.network_stop", "zwave.network_ready", "zwave.network_complete", "zwave.network_complete_some_dead"].map(function (e) {
          return _this2.hass.connection.subscribeEvents(function (event) {
            return _this2._handleEvent(event);
          }, e);
        });
      }
    }, {
      kind: "method",
      key: "_unsubscribe",
      value: function _unsubscribe() {
        while (this._unsubs.length) {
          this._unsubs.pop().then(function (unsub) {
            return unsub();
          });
        }
      }
    }, {
      kind: "method",
      key: "_handleEvent",
      value: function _handleEvent(event) {
        var _this3 = this;

        if (event.event_type === "zwave.network_start") {
          // Optimistically set the state, wait 1s and poll the backend
          // The backend will still report a state of 0 when the 'network_start'
          // event is first fired.
          if (this._networkStatus) {
            this._networkStatus = Object.assign({}, this._networkStatus, {
              state: 5
            });
          }

          setTimeout(function () {
            return _this3._getNetworkStatus;
          }, 1000);
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
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject11(), this.hass, service, this.hass.localize("ui.panel.config.zwave.services." + service), this.hass, service, !this._showHelp);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject12())];
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"card-actions\">\n                        <ha-call-service-button\n                          .hass=", "\n                          domain=\"zwave\"\n                          service=\"set_config_parameter\"\n                          .serviceData=", "\n                        >\n                          ", "\n                        </ha-call-service-button>\n                      </div>\n                    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=", "\n                          class=\"flex\"\n                          dynamic-align\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            <paper-item>\n                              ", "\n                            </paper-item>\n                            <paper-item>\n                              ", "\n                            </paper-item>\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"card-actions\">\n                        <paper-input\n                          .label=", "\n                          type=\"number\"\n                          .value=", "\n                          .max=", "\n                          .min=", "\n                          @value-changed=", "\n                        >\n                        </paper-input>\n                      </div>\n                    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                                <paper-item>", "</paper-item>\n                              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                      <div class=\"device-picker\">\n                        <paper-dropdown-menu\n                          .label=", "\n                          dynamic-align\n                          class=\"flex\"\n                          .placeholder=", "\n                        >\n                          <paper-listbox\n                            slot=\"dropdown-content\"\n                            .selected=", "\n                            @iron-select=", "\n                          >\n                            ", "\n                          </paper-listbox>\n                        </paper-dropdown-menu>\n                      </div>\n                    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                ", "\n                ", "\n                ", "\n                <div class=\"help-text\">\n                  <span>", "</span>\n                </div>\n                ", "\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                    <paper-item>\n                      ", ": ", "\n                    </paper-item>\n                  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"card-actions\">\n                  <paper-input\n                    .floatLabel=\"", "\"\n                    type=\"number\"\n                    .value=", "\n                    @value-changed=", "\n                    .placeholder=", "\n                  >\n                    <div suffix>\n                      ", "\n                    </div>\n                  </paper-input>\n                  <ha-call-service-button\n                    .hass=", "\n                    domain=\"zwave\"\n                    service=\"set_wakeup\"\n                    .serviceData=", "\n                  >\n                    ", "\n                  </ha-call-service-button>\n                </div>\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"content\">\n        <ha-card\n          .header=", "\n        >\n          ", "\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=", "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n                @iron-select=", "\n              >\n                ", "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ", "\n        </ha-card>\n      </div>\n    "]);

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










var ZwaveNodeConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("zwave-node-config")], function (_initialize, _LitElement) {
  var ZwaveNodeConfig =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(ZwaveNodeConfig, _LitElement2);

    function ZwaveNodeConfig() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ZwaveNodeConfig);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZwaveNodeConfig)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return ZwaveNodeConfig;
  }(_LitElement);

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
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "config",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "selectedNode",
      value: function value() {
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
      value: function value() {
        return -1;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_selectedConfigParameter",
      value: function value() {
        return -1;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_selectedConfigValue",
      value: function value() {
        return -1;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this.hass.localize("ui.panel.config.zwave.node_config.header"), "wake_up_interval" in this.nodes[this.selectedNode].attributes ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this.hass.localize("ui.panel.config.zwave.common.wakeup_interval"), this._wakeupInput !== -1 ? this._wakeupInput : this.hass.localize("ui.panel.config.zwave.common.unknown"), this._onWakeupIntervalChanged, this.nodes[this.selectedNode].attributes.wake_up_interval ? this.nodes[this.selectedNode].attributes.wake_up_interval : this.hass.localize("ui.panel.config.zwave.common.unknown"), this.hass.localize("ui.panel.config.zwave.node_config.seconds"), this.hass, this._computeWakeupServiceData(this._wakeupInput), this.hass.localize("ui.panel.config.zwave.node_config.set_wakeup")) : "", this.hass.localize("ui.panel.config.zwave.node_config.config_parameter"), this._selectedConfigParameter, this._selectedConfigParameterChanged, this.config.map(function (state) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), state.key, state.value.label);
        }), this._configItem ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject4(), this._configItem.value.type === "List" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject5(), this.hass.localize("ui.panel.config.zwave.node_config.config_value"), this._configItem.value.data, this._configItem.value.data, this._configValueSelectChanged, this._configItem.value.data_items.map(function (state) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject6(), state);
        })) : "", ["Byte", "Short", "Int"].includes(this._configItem.value.type) ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject7(), this._configItem.value.data_items, this._configItem.value.data, this._configItem.value.max, this._configItem.value.min, this._configValueInputChanged) : "", ["Bool", "Button"].includes(this._configItem.value.type) ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject8(), this.hass.localize("ui.panel.config.zwave.node_config.config_value"), this._configItem.value.data, this._configItem.value.data, this._configValueSelectChanged, this.hass.localize("ui.panel.config.zwave.node_config.true"), this.hass.localize("ui.panel.config.zwave.node_config.false")) : "", this._configItem.value.help, ["Bool", "Button", "Byte", "Short", "Int", "List"].includes(this._configItem.value.type) ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject9(), this.hass, this._computeSetConfigParameterServiceData(), this.hass.localize("ui.panel.config.zwave.node_config.set_config_parameter")) : "") : "");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject10())];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this2 = this;

        _get(_getPrototypeOf(ZwaveNodeConfig.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("hass-service-called", function (ev) {
          return _this2.serviceCalled(ev);
        });
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
        var _this3 = this;

        if (ev.detail.success) {
          setTimeout(function () {
            _this3._refreshConfig(_this3.selectedNode);
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

        var valueData = "";

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
      value: function _refreshConfig(selectedNode) {
        var configData, config;
        return regeneratorRuntime.async(function _refreshConfig$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                configData = [];
                _context.next = 3;
                return regeneratorRuntime.awrap(Object(_data_zwave__WEBPACK_IMPORTED_MODULE_8__["fetchNodeConfig"])(this.hass, this.nodes[selectedNode].attributes.node_id));

              case 3:
                config = _context.sent;
                Object.keys(config).forEach(function (key) {
                  configData.push({
                    key: parseInt(key, 10),
                    value: config[key]
                  });
                });
                this.config = configData;
                this._configItem = this.config[this._selectedConfigParameter];

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"iron-flex ha-style\">\n      .card-actions.warning ha-call-api-button {\n        color: var(--google-red-500);\n      }\n      .content {\n        margin-top: 24px;\n      }\n\n      ha-card {\n        margin: 0 auto;\n        max-width: 600px;\n      }\n\n      .device-picker {\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        padding: 0 24px 24px 24px;\n        }\n\n    </style>\n      <div class=\"content\">\n        <ha-card header=\"Node protection\">\n          <div class=\"device-picker\">\n          <paper-dropdown-menu label=\"Protection\" dynamic-align class=\"flex\" placeholder=\"{{_loadedProtectionValue}}\">\n            <paper-listbox slot=\"dropdown-content\" selected=\"{{_selectedProtectionParameter}}\">\n              <template is=\"dom-repeat\" items=\"[[_protectionOptions]]\" as=\"state\">\n                <paper-item>[[state]]</paper-item>\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n          </div>\n          <div class=\"card-actions\">\n            <ha-call-api-button\n              hass=\"[[hass]]\"\n              path=\"[[_nodePath]]\"\n              data=\"[[_protectionData]]\">\n              Set Protection\n            </ha-call-service-button>\n          </div>\n        </ha-card>\n      </div>\n"]);

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










var ZwaveNodeProtection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveNodeProtection, _PolymerElement);

  function ZwaveNodeProtection() {
    _classCallCheck(this, ZwaveNodeProtection);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveNodeProtection).apply(this, arguments));
  }

  _createClass(ZwaveNodeProtection, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveNodeProtection.prototype), "ready", this).call(this);

      this.addEventListener("hass-api-called", function (ev) {
        return _this.apiCalled(ev);
      });
    }
  }, {
    key: "apiCalled",
    value: function apiCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshProtection(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_nodesChanged",
    value: function _nodesChanged() {
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
  }, {
    key: "_refreshProtection",
    value: function _refreshProtection(selectedNode) {
      var protectionValues, protections;
      return regeneratorRuntime.async(function _refreshProtection$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              protectionValues = [];
              _context.next = 3;
              return regeneratorRuntime.awrap(this.hass.callApi("GET", "zwave/protection/".concat(this.nodes[selectedNode].attributes.node_id)));

            case 3:
              protections = _context.sent;
              Object.keys(protections).forEach(function (key) {
                protectionValues.push({
                  key: key,
                  value: protections[key]
                });
              });
              this.setProperties({
                _protection: protectionValues,
                _selectedProtectionParameter: -1,
                _loadedProtectionValue: this.protection[1].value
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_computeProtectionData",
    value: function _computeProtectionData(selectedProtectionParameter) {
      if (this.selectedNode === -1 || selectedProtectionParameter === -1) return;
      this._protectionData = {
        selection: this._protectionOptions[selectedProtectionParameter],
        value_id: this._protectionValueID
      };
      this._nodePath = "zwave/protection/".concat(this.nodes[this.selectedNode].attributes.node_id);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
          value: function value() {
            return [];
          }
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
  }, {
    key: "observers",
    get: function get() {
      return ["_nodesChanged(nodes, selectedNode)"];
    }
  }]);

  return ZwaveNodeProtection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n      </style>\n      <div class=\"content\">\n        <ha-card header=\"Node user codes\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Code slot\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedUserCode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[userCodes]]\" as=\"state\">\n                  <paper-item\n                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item\n                  >\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <template is=\"dom-if\" if=\"[[_isUserCodeSelected(_selectedUserCode)]]\">\n            <div class=\"card-actions\">\n              <paper-input\n                label=\"User code\"\n                type=\"text\"\n                allowed-pattern=\"[0-9,a-f,x,\\\\]\"\n                maxlength=\"40\"\n                minlength=\"16\"\n                value=\"{{_selectedUserCodeValue}}\"\n              >\n              </paper-input>\n              <pre>Ascii: [[_computedCodeOutput]]</pre>\n            </div>\n            <div class=\"card-actions\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"set_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, \"Add\")]]'\n              >\n                Set Usercode\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"clear_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCode, \"Delete\")]]'\n              >\n                Delete Usercode\n              </ha-call-service-button>\n            </div>\n          </template>\n        </ha-card>\n      </div>\n    "], ["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n      </style>\n      <div class=\"content\">\n        <ha-card header=\"Node user codes\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"Code slot\"\n              dynamic-align=\"\"\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_selectedUserCode}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[userCodes]]\" as=\"state\">\n                  <paper-item\n                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item\n                  >\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <template is=\"dom-if\" if=\"[[_isUserCodeSelected(_selectedUserCode)]]\">\n            <div class=\"card-actions\">\n              <paper-input\n                label=\"User code\"\n                type=\"text\"\n                allowed-pattern=\"[0-9,a-f,x,\\\\\\\\]\"\n                maxlength=\"40\"\n                minlength=\"16\"\n                value=\"{{_selectedUserCodeValue}}\"\n              >\n              </paper-input>\n              <pre>Ascii: [[_computedCodeOutput]]</pre>\n            </div>\n            <div class=\"card-actions\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"set_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, \"Add\")]]'\n              >\n                Set Usercode\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"lock\"\n                service=\"clear_usercode\"\n                service-data='[[_computeUserCodeServiceData(_selectedUserCode, \"Delete\")]]'\n              >\n                Delete Usercode\n              </ha-call-service-button>\n            </div>\n          </template>\n        </ha-card>\n      </div>\n    "]);

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










var ZwaveUsercodes =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(ZwaveUsercodes, _PolymerElement);

  function ZwaveUsercodes() {
    _classCallCheck(this, ZwaveUsercodes);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZwaveUsercodes).apply(this, arguments));
  }

  _createClass(ZwaveUsercodes, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(ZwaveUsercodes.prototype), "ready", this).call(this);

      this.addEventListener("hass-service-called", function (ev) {
        return _this.serviceCalled(ev);
      });
    }
  }, {
    key: "serviceCalled",
    value: function serviceCalled(ev) {
      var _this2 = this;

      if (ev.detail.success) {
        setTimeout(function () {
          _this2._refreshUserCodes(_this2.selectedNode);
        }, 5000);
      }
    }
  }, {
    key: "_isUserCodeSelected",
    value: function _isUserCodeSelected(selectedUserCode) {
      if (selectedUserCode === -1) return false;
      return true;
    }
  }, {
    key: "_computeSelectCaptionUserCodes",
    value: function _computeSelectCaptionUserCodes(stateObj) {
      return "".concat(stateObj.key, ": ").concat(stateObj.value.label);
    }
  }, {
    key: "_selectedUserCodeChanged",
    value: function _selectedUserCodeChanged(selectedUserCode) {
      if (this._selectedUserCode === -1 || selectedUserCode === -1) return;
      var value = this.userCodes[selectedUserCode].value.code;
      this.setProperties({
        _selectedUserCodeValue: this._a2hex(value),
        _computedCodeOutput: "[".concat(this._hex2a(this._a2hex(value)), "]")
      });
    }
  }, {
    key: "_computeUserCodeServiceData",
    value: function _computeUserCodeServiceData(selectedUserCodeValue, type) {
      if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
      var serviceData = null;
      var valueData = null;

      if (type === "Add") {
        valueData = this._hex2a(selectedUserCodeValue);
        this._computedCodeOutput = "[".concat(valueData, "]");
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
  }, {
    key: "_refreshUserCodes",
    value: function _refreshUserCodes(selectedNode) {
      var userCodes, userCodeData;
      return regeneratorRuntime.async(function _refreshUserCodes$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setProperties({
                _selectedUserCodeValue: ""
              });
              userCodes = [];
              _context.next = 4;
              return regeneratorRuntime.awrap(this.hass.callApi("GET", "zwave/usercodes/".concat(this.nodes[selectedNode].attributes.node_id)));

            case 4:
              userCodeData = _context.sent;
              Object.keys(userCodeData).forEach(function (key) {
                userCodes.push({
                  key: key,
                  value: userCodeData[key]
                });
              });
              this.setProperties({
                userCodes: userCodes
              });

              this._selectedUserCodeChanged(this._selectedUserCode);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_a2hex",
    value: function _a2hex(str) {
      var arr = [];
      var output = "";

      for (var i = 0, l = str.length; i < l; i++) {
        var hex = Number(str.charCodeAt(i)).toString(16);

        if (hex === "0") {
          output = "00";
        } else {
          output = hex;
        }

        arr.push("\\x" + output);
      }

      return arr.join("");
    }
  }, {
    key: "_hex2a",
    value: function _hex2a(hexx) {
      var hex = hexx.toString();
      var hexMod = hex.replace(/\\x/g, "");
      var str = "";

      for (var i = 0; i < hexMod.length; i += 2) {
        str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
      }

      return str;
    }
  }, {
    key: "_selectedNodeChanged",
    value: function _selectedNodeChanged() {
      if (this.selectedNode === -1) return;
      this.setProperties({
        _selecteduserCode: -1
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return ZwaveUsercodes;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          @apply --layout-center-center;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 24px;\n          padding-right: 24px;\n          padding-bottom: 24px;\n        }\n\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .help-text {\n          padding-left: 24px;\n          padding-right: 24px;\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                    <paper-item>\n                      ", "\n                    </paper-item>\n                  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"content\">\n        <ha-card\n          .header=", "\n        >\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              .label=", "\n              dynamic-align\n              class=\"flex\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                .selected=", "\n              >\n                ", "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n        </ha-card>\n      </div>\n    "]);

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








var ZwaveValues = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zwave-values")], function (_initialize, _LitElement) {
  var ZwaveValues =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(ZwaveValues, _LitElement2);

    function ZwaveValues() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ZwaveValues);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZwaveValues)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return ZwaveValues;
  }(_LitElement);

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
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_selectedValue",
      value: function value() {
        return -1;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject(), this.hass.localize("ui.panel.config.zwave.values.header"), this.hass.localize("ui.panel.config.zwave.common.value"), this._selectedValue, this.values.map(function (item) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject2(), _this2._computeCaption(item));
        }));
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3())];
      }
    }, {
      kind: "method",
      key: "_computeCaption",
      value: function _computeCaption(item) {
        var out = "".concat(item.value.label);
        out += " (".concat(this.hass.localize("ui.panel.config.zwave.common.instance"), ":");
        out += " ".concat(item.value.instance, ",");
        out += " ".concat(this.hass.localize("ui.panel.config.zwave.common.index"), ":");
        out += " ".concat(item.value.index, ")");
        return out;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXp3YXZlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfcHdhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3p3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpcm1hdGlvbi9zaG93LWRpYWxvZy1jb25maXJtYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvaGEtYXBwLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1mb3JtLXN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL2hhLWNvbmZpZy16d2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1ncm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLW5ldHdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbm9kZS1jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtbm9kZS1wcm90ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLXVzZXJjb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS12YWx1ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7QXBwTGF5b3V0QmVoYXZpb3J9IGZyb20gJy4uL2FwcC1sYXlvdXQtYmVoYXZpb3IvYXBwLWxheW91dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuYXBwLWhlYWRlci1sYXlvdXQgaXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwb3NpdGlvbnMgYW4gYXBwLWhlYWRlciBhbmQgb3RoZXJcbmNvbnRlbnQuIFRoaXMgZWxlbWVudCB1c2VzIHRoZSBkb2N1bWVudCBzY3JvbGwgYnkgZGVmYXVsdCwgYnV0IGl0IGNhbiBhbHNvXG5kZWZpbmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuXG5Vc2luZyB0aGUgZG9jdW1lbnQgc2Nyb2xsOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQ+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cblVzaW5nIGFuIG93biBzY3JvbGxpbmcgcmVnaW9uOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24gc3R5bGU9XCJ3aWR0aDogMzAwcHg7IGhlaWdodDogNDAwcHg7XCI+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkFkZCB0aGUgYGZ1bGxibGVlZGAgYXR0cmlidXRlIHRvIGFwcC1oZWFkZXItbGF5b3V0IHRvIG1ha2UgaXQgZml0IHRoZSBzaXplIG9mXG5pdHMgY29udGFpbmVyOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgZnVsbGJsZWVkPlxuIC4uLlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5AZ3JvdXAgQXBwIEVsZW1lbnRzXG5AZWxlbWVudCBhcHAtaGVhZGVyLWxheW91dFxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zaW1wbGUuaHRtbCBTaW1wbGUgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9tdXNpYy5odG1sIE11c2ljIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vZm9vdGVyLmh0bWwgRm9vdGVyIERlbW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlcixcbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnYXBwLWhlYWRlci1sYXlvdXQnLFxuICBiZWhhdmlvcnM6IFtBcHBMYXlvdXRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBjdXJyZW50IGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBkb2N1bWVudCBzY3JvbGwgdG8gY29udHJvbCB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhhc1Njcm9sbGluZ1JlZ2lvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydyZXNldExheW91dChpc0F0dGFjaGVkLCBoYXNTY3JvbGxpbmdSZWdpb24pJ10sXG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhcHAtaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBoZWFkZXJcbiAgICovXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvbSh0aGlzLiQuaGVhZGVyU2xvdCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpWzBdO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhaGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbGl6aW5nIGNsYXNzLCB3aGljaCBzdGF0aWNseSBwb3NpdGlvbnMgdGhlIGhlYWRlciBhbmRcbiAgICAvLyB0aGUgY29udGVudCB1bnRpbCB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy4kLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgLy8gVXBkYXRlIHNjcm9sbCB0YXJnZXQuXG4gICAgaGVhZGVyLnNjcm9sbFRhcmdldCA9IHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uID9cbiAgICAgICAgdGhpcy4kLmNvbnRlbnRDb250YWluZXIgOlxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vIEdldCBoZWFkZXIgaGVpZ2h0IGhlcmUgc28gdGhhdCBzdHlsZSByZWFkcyBhcmUgYmF0Y2hlZCB0b2dldGhlciBiZWZvcmVcbiAgICAvLyBzdHlsZSB3cml0ZXMgKGkuZS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYmVsb3cpLlxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFVwZGF0ZSB0aGUgaGVhZGVyIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICBoZWFkZXIuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9IHJpZ2h0T2Zmc2V0ICsgJ3B4JztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGNvbnRhaW5lciBwb3NpdGlvbi5cbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZTtcbiAgICBpZiAoaGVhZGVyLmZpeGVkICYmICFoZWFkZXIuY29uZGVuc2VzICYmIHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHNpemUgZG9lcyBub3QgY2hhbmdlIGFuZCB3ZSdyZSB1c2luZyBhIHNjcm9sbGluZyByZWdpb24sXG4gICAgICAvLyBleGNsdWRlIHRoZSBoZWFkZXIgYXJlYSBmcm9tIHRoZSBzY3JvbGxpbmcgcmVnaW9uIHNvIHRoYXQgdGhlIGhlYWRlclxuICAgICAgLy8gZG9lc24ndCBvdmVybGFwIHRoZSBzY3JvbGxiYXIuXG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKiogUmV0dXJuIGlmIHRoZSBkaXNwbGF5bW9kZSBpcyBpbiBzdGFuZGFsb25lIG1vZGUgKFBXQSkuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1B3YSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSlcIikubWF0Y2hlcztcbn1cbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEb21haW4gPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCIvKipcbiAqIFNvcnQgZnVuY3Rpb24gdG8gaGVscCBzb3J0IHN0YXRlcyBieSBuYW1lXG4gKlxuICogVXNhZ2U6XG4gKiAgIGNvbnN0IHN0YXRlcyA9IFtzdGF0ZTEsIHN0YXRlMl1cbiAqICAgc3RhdGVzLnNvcnQoc3RhdGVzc29ydFN0YXRlc0J5TmFtZSk7XG4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBzb3J0U3RhdGVzQnlOYW1lID0gKGVudGl0eUE6IEhhc3NFbnRpdHksIGVudGl0eUI6IEhhc3NFbnRpdHkpID0+IHtcbiAgY29uc3QgbmFtZUEgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUEpO1xuICBjb25zdCBuYW1lQiA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5Qik7XG4gIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vZGlhbG9ncy9jb25maXJtYXRpb24vc2hvdy1kaWFsb2ctY29uZmlybWF0aW9uXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKCkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGV2ZW50RGF0YSA9IHtcbiAgICAgIGRvbWFpbjogdGhpcy5kb21haW4sXG4gICAgICBzZXJ2aWNlOiB0aGlzLnNlcnZpY2UsXG4gICAgICBzZXJ2aWNlRGF0YTogdGhpcy5zZXJ2aWNlRGF0YSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZSwgdGhpcy5zZXJ2aWNlRGF0YSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uU3VjY2VzcygpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvbkVycm9yKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsLmZpcmUoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIGV2ZW50RGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24pIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpcm1hdGlvbixcbiAgICAgICAgY29uZmlybTogKCkgPT4gdGhpcy5jYWxsU2VydmljZSgpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsbFNlcnZpY2UoKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhU2VydmljZURlc2NyaXB0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgW1tfZ2V0RGVzY3JpcHRpb24oaGFzcywgZG9tYWluLCBzZXJ2aWNlKV1dXG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXREZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICB2YXIgZG9tYWluU2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gICAgaWYgKCFkb21haW5TZXJ2aWNlcykgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHNlcnZpY2VPYmplY3QgPSBkb21haW5TZXJ2aWNlc1tzZXJ2aWNlXTtcbiAgICBpZiAoIXNlcnZpY2VPYmplY3QpIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBzZXJ2aWNlT2JqZWN0LmRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtZGVzY3JpcHRpb25cIiwgSGFTZXJ2aWNlRGVzY3JpcHRpb24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlTmV0d29ya1N0YXR1cyB7XG4gIHN0YXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVWYWx1ZSB7XG4gIGtleTogbnVtYmVyO1xuICB2YWx1ZToge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgaW5zdGFuY2U6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBvbGxfaW50ZW5zaXR5OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVDb25maWdJdGVtIHtcbiAga2V5OiBudW1iZXI7XG4gIHZhbHVlOiB7XG4gICAgZGF0YTogYW55O1xuICAgIGRhdGFfaXRlbXM6IGFueVtdO1xuICAgIGhlbHA6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG1heDogbnVtYmVyO1xuICAgIG1pbjogbnVtYmVyO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZUNvbmZpZ1NlcnZpY2VEYXRhIHtcbiAgbm9kZV9pZDogbnVtYmVyO1xuICBwYXJhbWV0ZXI6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZU5vZGUge1xuICBhdHRyaWJ1dGVzOiBaV2F2ZUF0dHJpYnV0ZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVBdHRyaWJ1dGVzIHtcbiAgbm9kZV9pZDogbnVtYmVyO1xuICB3YWtlX3VwX2ludGVydmFsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9TVE9QUEVEID0gMDtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX0ZBSUxFRCA9IDE7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVEID0gNTtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRCA9IDc7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9SRUFEWSA9IDEwO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hOZXR3b3JrU3RhdHVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50XG4pOiBQcm9taXNlPFpXYXZlTmV0d29ya1N0YXR1cz4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiendhdmUvbmV0d29ya19zdGF0dXNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFZhbHVlcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBub2RlSWQ6IG51bWJlcikgPT5cbiAgaGFzcy5jYWxsQXBpPFpXYXZlVmFsdWVbXT4oXCJHRVRcIiwgYHp3YXZlL3ZhbHVlcy8ke25vZGVJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTm9kZUNvbmZpZyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBub2RlSWQ6IG51bWJlcikgPT5cbiAgaGFzcy5jYWxsQXBpPFpXYXZlQ29uZmlnSXRlbVtdPihcIkdFVFwiLCBgendhdmUvY29uZmlnLyR7bm9kZUlkfWApO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbmZpcm1CdG5UZXh0Pzogc3RyaW5nO1xuICBjYW5jZWxCdG5UZXh0Pzogc3RyaW5nO1xuICBjb25maXJtOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpcm1hdGlvbkRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctY29uZmlybWF0aW9uXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctY29uZmlybWF0aW9uXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlybWF0aW9uRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcblRoaXMgY29kZSBpcyBjb3BpZWQgZnJvbSBhcHAtaGVhZGVyLWxheW91dC5cbidmdWxsYmxlZWQnIHN1cHBvcnQgaXMgcmVtb3ZlZCBhcyBIb21lIEFzc2lzc3RhbnQgZG9lc24ndCB1c2UgaXQuXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBpcyBhZGRlZC5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUFwcExheW91dCBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldChcImFwcC1oZWFkZXItbGF5b3V0XCIpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSlcbiAgICAgICAgICAjd3JhcHBlci5pbml0aWFsaXppbmdcbiAgICAgICAgICA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAvKiBVc2luZyAndHJhbnNmb3JtJyB3aWxsIGNhdXNlICdwb3NpdGlvbjogZml4ZWQnIGVsZW1lbnRzIHRvIGJlaGF2ZSBsaWtlXG4gICAgICAgICAgICdwb3NpdGlvbjogYWJzb2x1dGUnIHJlbGF0aXZlIHRvIHRoaXMgZWxlbWVudC4gKi9cbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPHNsb3QgaWQ9XCJmYWJcIiBuYW1lPVwiZmFiXCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYXBwLWxheW91dFwiLCBIYUFwcExheW91dCk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWZvcm0tc3R5bGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LTI7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAudmVydGljYWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2hhLWZvcm0tc3R5bGVcIjtcbmltcG9ydCBcIi4vendhdmUtZ3JvdXBzXCI7XG5pbXBvcnQgXCIuL3p3YXZlLWxvZ1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1uZXR3b3JrXCI7XG5pbXBvcnQgXCIuL3p3YXZlLW5vZGUtY29uZmlnXCI7XG5pbXBvcnQgXCIuL3p3YXZlLXVzZXJjb2Rlc1wiO1xuaW1wb3J0IFwiLi96d2F2ZS12YWx1ZXNcIjtcbmltcG9ydCBcIi4vendhdmUtbm9kZS1wcm90ZWN0aW9uXCI7XG5cbmltcG9ydCB7IHNvcnRTdGF0ZXNCeU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ29uZmlnWndhdmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGUgaGEtZm9ybS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub2RlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1hcHAtbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPVwiXCI+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD1cIlwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2JhY2tUYXBwZWRcIlxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT1cIlwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuendhdmUuY2FwdGlvbicpXV1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8endhdmUtbmV0d29ya1xuICAgICAgICAgIGlkPVwiendhdmUtbmV0d29ya1wiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgID48L3p3YXZlLW5ldHdvcms+XG5cbiAgICAgICAgPCEtLSBOb2RlIGNhcmQgLS0+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uSGVhZGVyXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4+Wi1XYXZlIE5vZGUgTWFuYWdlbWVudDwvc3Bhbj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cInRvZ2dsZUhlbHBcIlxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBSdW4gWi1XYXZlIGNvbW1hbmRzIHRoYXQgYWZmZWN0IGEgc2luZ2xlIG5vZGUuIFBpY2sgYSBub2RlIHRvIHNlZSBhXG4gICAgICAgICAgICBsaXN0IG9mIGF2YWlsYWJsZSBjb21tYW5kcy5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGR5bmFtaWMtYWxpZ249XCJcIiBsYWJlbD1cIk5vZGVzXCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZE5vZGV9fVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tub2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFjb21wdXRlSXNOb2RlU2VsZWN0ZWQoc2VsZWN0ZWROb2RlKV1dXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93SGVscF1dXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiBncmV5OyBwYWRkaW5nOiAxMnB4XCI+XG4gICAgICAgICAgICAgICAgICBTZWxlY3Qgbm9kZSB0byB2aWV3IHBlci1ub2RlIG9wdGlvbnNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlSXNOb2RlU2VsZWN0ZWQoc2VsZWN0ZWROb2RlKV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVmcmVzaCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlZnJlc2hfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tub2RlRmFpbGVkXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlbW92ZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZW1vdmUgRmFpbGVkIE5vZGVcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlbW92ZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVwbGFjZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZXBsYWNlIEZhaWxlZCBOb2RlXG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZXBsYWNlX2ZhaWxlZF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJwcmludF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByaW50IE5vZGVcbiAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicHJpbnRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cImhlYWxfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVIZWFsTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSGVhbCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cImhlYWxfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cblxuICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInRlc3Rfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZXN0IE5vZGVcbiAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwidGVzdF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX25vZGVNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgICA+Tm9kZSBJbmZvcm1hdGlvbjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbnRpdGllcyBvZiB0aGlzIG5vZGVcIlxuICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkRW50aXR5fX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudGl0aWVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tzdGF0ZS5lbnRpdHlfaWRdXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgICAgaWY9XCJbWyFjb21wdXRlSXNFbnRpdHlTZWxlY3RlZChzZWxlY3RlZEVudGl0eSldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX2VudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZVJlZnJlc2hFbnRpdHlTZXJ2aWNlRGF0YShzZWxlY3RlZEVudGl0eSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlZnJlc2ggRW50aXR5XG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX2VudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2VudGl0eU1vcmVJbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgPkVudGl0eSBJbmZvcm1hdGlvbjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cInt7ZW50aXR5SWdub3JlZH19XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFeGNsdWRlIHRoaXMgZW50aXR5IGZyb20gSG9tZSBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9sbGluZyBpbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbnRpdHlQb2xsaW5nSW50ZW5zaXR5fX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfcG9sbF9pbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVQb2xsSW50ZW5zaXR5U2VydmljZURhdGEoZW50aXR5UG9sbGluZ0ludGVuc2l0eSldXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVJc05vZGVTZWxlY3RlZChzZWxlY3RlZE5vZGUpXV1cIj5cbiAgICAgICAgICAgIDwhLS0gVmFsdWUgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS12YWx1ZXNcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIHZhbHVlcz1cIltbdmFsdWVzXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdmFsdWVzPlxuXG4gICAgICAgICAgICA8IS0tIEdyb3VwIGNhcmQgLS0+XG4gICAgICAgICAgICA8endhdmUtZ3JvdXBzXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBncm91cHM9XCJbW2dyb3Vwc11dXCJcbiAgICAgICAgICAgID48L3p3YXZlLWdyb3Vwcz5cblxuICAgICAgICAgICAgPCEtLSBDb25maWcgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS1ub2RlLWNvbmZpZ1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgY29uZmlnPVwiW1tjb25maWddXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS1ub2RlLWNvbmZpZz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBQcm90ZWN0aW9uIGNhcmQgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJ7e19wcm90ZWN0aW9uTm9kZX19XCI+XG4gICAgICAgICAgICA8endhdmUtbm9kZS1wcm90ZWN0aW9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBwcm90ZWN0aW9uPVwiW1tfcHJvdGVjdGlvbl1dXCJcbiAgICAgICAgICAgID48L3p3YXZlLW5vZGUtcHJvdGVjdGlvbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPCEtLSBVc2VyIENvZGVzIC0tPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwie3toYXNOb2RlVXNlckNvZGVzfX1cIj5cbiAgICAgICAgICAgIDx6d2F2ZS11c2VyY29kZXNcbiAgICAgICAgICAgICAgaWQ9XCJ6d2F2ZS11c2VyY29kZXNcIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHVzZXItY29kZXM9XCJbW3VzZXJDb2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtdXNlcmNvZGVzPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPCEtLSBPencgbG9nIC0tPlxuICAgICAgICA8b3p3LWxvZyBpcy13aWRlPVwiW1tpc1dpZGVdXVwiIGhhc3M9XCJbW2hhc3NdXVwiPjwvb3p3LWxvZz5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbm9kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVOb2RlcyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWxlY3RlZE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBub2RlRmFpbGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdGllcyhzZWxlY3RlZE5vZGUpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZEVudGl0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWRFbnRpdHlDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICB2YWx1ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBncm91cHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICB1c2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGhhc05vZGVVc2VyQ29kZXM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc2hvd0hlbHA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWdub3JlZDogQm9vbGVhbixcblxuICAgICAgZW50aXR5UG9sbGluZ0ludGVuc2l0eToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb246IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIF9wcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5zZXJ2aWNlID09PSBcInNldF9wb2xsX2ludGVuc2l0eVwiKSB7XG4gICAgICB0aGlzLl9zYXZlRW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZU5vZGVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IGVudC5lbnRpdHlfaWQubWF0Y2goXCJ6d2F2ZVsuXVwiKSlcbiAgICAgIC5zb3J0KHNvcnRTdGF0ZXNCeU5hbWUpO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKHNlbGVjdGVkTm9kZSkge1xuICAgIGlmICghdGhpcy5ub2RlcyB8fCBzZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgY29uc3Qgbm9kZWlkID0gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkO1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuZmlsdGVyKChlbnQpID0+IHtcbiAgICAgICAgaWYgKGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFlbnQuYXR0cmlidXRlcy5oaWRkZW4gJiZcbiAgICAgICAgICBcIm5vZGVfaWRcIiBpbiBlbnQuYXR0cmlidXRlcyAmJlxuICAgICAgICAgIGVudC5hdHRyaWJ1dGVzLm5vZGVfaWQgPT09IG5vZGVpZCAmJlxuICAgICAgICAgICFlbnQuZW50aXR5X2lkLm1hdGNoKFwiendhdmVbLl1cIilcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuc29ydChzb3J0U3RhdGVzQnlOYW1lKTtcbiAgfVxuXG4gIHNlbGVjdGVkTm9kZUNoYW5nZWQoc2VsZWN0ZWROb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gLTE7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvY29uZmlnLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoY29uZmlncykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX29ialRvQXJyYXkoY29uZmlncyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLl9vYmpUb0FycmF5KHZhbHVlcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9ncm91cHMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChncm91cHMpID0+IHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLl9vYmpUb0FycmF5KGdyb3Vwcyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaGFzTm9kZVVzZXJDb2RlcyA9IGZhbHNlO1xuICAgIHRoaXMubm90aWZ5UGF0aChcImhhc05vZGVVc2VyQ29kZXNcIik7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHVzZXJjb2RlcykgPT4ge1xuICAgICAgICB0aGlzLnVzZXJDb2RlcyA9IHRoaXMuX29ialRvQXJyYXkodXNlcmNvZGVzKTtcbiAgICAgICAgdGhpcy5oYXNOb2RlVXNlckNvZGVzID0gdGhpcy51c2VyQ29kZXMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5ub3RpZnlQYXRoKFwiaGFzTm9kZVVzZXJDb2Rlc1wiKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9wcm90ZWN0aW9uLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigocHJvdGVjdGlvbnMpID0+IHtcbiAgICAgICAgdGhpcy5fcHJvdGVjdGlvbiA9IHRoaXMuX29ialRvQXJyYXkocHJvdGVjdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5fcHJvdGVjdGlvbikge1xuICAgICAgICAgIGlmICh0aGlzLl9wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9wcm90ZWN0aW9uTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5ub2RlRmFpbGVkID0gdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMuaXNfZmFpbGVkO1xuICB9XG5cbiAgc2VsZWN0ZWRFbnRpdHlDaGFuZ2VkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS92YWx1ZXMvJHt0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuX29ialRvQXJyYXkodmFsdWVzKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWVJZCA9IHRoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmF0dHJpYnV0ZXMudmFsdWVfaWQ7XG4gICAgY29uc3QgdmFsdWVEYXRhID0gdGhpcy52YWx1ZXMuZmluZCgob2JqKSA9PiBvYmoua2V5ID09PSB2YWx1ZUlkKTtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZURhdGEpO1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGBjb25maWcvendhdmUvZGV2aWNlX2NvbmZpZy8ke3RoaXMuZW50aXRpZXNbc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIGVudGl0eUlnbm9yZWQ6IGRhdGEuaWdub3JlZCB8fCBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBlbnRpdHlJZ25vcmVkOiBmYWxzZSxcbiAgICAgICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB0aGlzLnZhbHVlc1t2YWx1ZUluZGV4XS52YWx1ZS5wb2xsX2ludGVuc2l0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopICtcbiAgICAgIFwiIChOb2RlOlwiICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubm9kZV9pZCArXG4gICAgICBcIiBcIiArXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlICtcbiAgICAgIFwiKVwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RDYXB0aW9uRW50KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgKyBcIi5cIiArIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUlzTm9kZVNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHRoaXMuc2VsZWN0ZWROb2RlICE9PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVJc0VudGl0eVNlbGVjdGVkKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkRW50aXR5ID09PSAtMTtcbiAgfVxuXG4gIGNvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHsgbm9kZV9pZDogdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCB9O1xuICB9XG5cbiAgY29tcHV0ZUhlYWxOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICByZXR1cm5fcm91dGVzOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUmVmcmVzaEVudGl0eVNlcnZpY2VEYXRhKHNlbGVjdGVkRW50aXR5KSB7XG4gICAgaWYgKHNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7IGVudGl0eV9pZDogdGhpcy5lbnRpdGllc1tzZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkIH07XG4gIH1cblxuICBjb21wdXRlUG9sbEludGVuc2l0eVNlcnZpY2VEYXRhKGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCB0aGlzLnNlbGVjdGVkRW50aXR5ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiB7XG4gICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICB2YWx1ZV9pZDogdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5hdHRyaWJ1dGVzLnZhbHVlX2lkLFxuICAgICAgcG9sbF9pbnRlbnNpdHk6IHBhcnNlSW50KGVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gIH1cblxuICBfbm9kZU1vcmVJbmZvKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBfZW50aXR5TW9yZUluZm8oKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuZW50aXRpZXNbdGhpcy5zZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVFbnRpdHkoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGlnbm9yZWQ6IHRoaXMuZW50aXR5SWdub3JlZCxcbiAgICAgIHBvbGxpbmdfaW50ZW5zaXR5OiBwYXJzZUludCh0aGlzLmVudGl0eVBvbGxpbmdJbnRlbnNpdHkpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBgY29uZmlnL3p3YXZlL2RldmljZV9jb25maWcvJHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWRcbiAgICAgIH1gLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVIZWxwKCkge1xuICAgIHRoaXMuc2hvd0hlbHAgPSAhdGhpcy5zaG93SGVscDtcbiAgfVxuXG4gIF9vYmpUb0FycmF5KG9iaikge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBvYmpba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy16d2F2ZVwiLCBIYUNvbmZpZ1p3YXZlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jbGFzcyBad2F2ZUdyb3VwcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCIgaGVhZGVyPVwiTm9kZSBncm91cCBhc3NvY2lhdGlvbnNcIj5cbiAgICAgICAgPCEtLSBUT0RPIG1ha2UgYXBpIGZvciBnZXR0aW5nIGdyb3VwcyBhbmQgbWVtYmVycyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIkdyb3VwXCIgZHluYW1pYy1hbGlnbj1cIlwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkR3JvdXB9fVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZ3JvdXBzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tfY29tcHV0ZVNlbGVjdENhcHRpb25Hcm91cChzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvbXB1dGVJc0dyb3VwU2VsZWN0ZWQoX3NlbGVjdGVkR3JvdXApXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJOb2RlIHRvIGNvbnRyb2xcIlxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19zZWxlY3RlZFRhcmdldE5vZGV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW25vZGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj5PdGhlciBOb2RlcyBpbiB0aGlzIGdyb3VwOjwvc3Bhbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX290aGVyR3JvdXBOb2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2Pltbc3RhdGVdXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICA8c3Bhbj5NYXggQXNzb2NpYXRpb25zOjwvc3Bhbj4gPHNwYW4+W1tfbWF4QXNzb2NpYXRpb25zXV08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzVGFyZ2V0Tm9kZVNlbGVjdGVkKF9zZWxlY3RlZFRhcmdldE5vZGUpXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfbm9Bc3NvY2lhdGlvbnNMZWZ0XV1cIj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19hZGRBc3NvY1NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIFRvIEdyb3VwXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICBpZj1cIltbX2NvbXB1dGVUYXJnZXRJbkdyb3VwKF9zZWxlY3RlZEdyb3VwLCBfc2VsZWN0ZWRUYXJnZXROb2RlKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19yZW1vdmVBc3NvY1NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIEZyb20gR3JvdXBcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cF1dXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNoYW5nZV9hc3NvY2lhdGlvblwiXG4gICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tfcmVtb3ZlQnJvYWRjYXN0Tm9kZVNlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlIEJyb2FkY2FzdFxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBncm91cHM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkVGFyZ2V0Tm9kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3NlbGVjdGVkVGFyZ2V0Tm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZEdyb3VwOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgfSxcblxuICAgICAgX290aGVyR3JvdXBOb2Rlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU90aGVyR3JvdXBOb2Rlcyhfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9tYXhBc3NvY2lhdGlvbnM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVNYXhBc3NvY2lhdGlvbnMoX3NlbGVjdGVkR3JvdXApXCIsXG4gICAgICB9LFxuXG4gICAgICBfbm9Bc3NvY2lhdGlvbnNMZWZ0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUFzc29jaWF0aW9uc0xlZnQoX3NlbGVjdGVkR3JvdXApXCIsXG4gICAgICB9LFxuXG4gICAgICBfYWRkQXNzb2NTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbW92ZUFzc29jU2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfc2VsZWN0ZWRHcm91cENoYW5nZWQoZ3JvdXBzLCBfc2VsZWN0ZWRHcm91cClcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBzZXJ2aWNlQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEdyb3Vwcyh0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUFzc29jaWF0aW9uc0xlZnQoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX21heEFzc29jaWF0aW9ucyA9PT0gdGhpcy5fb3RoZXJHcm91cE5vZGVzLmxlbmd0aDtcbiAgfVxuXG4gIF9jb21wdXRlTWF4QXNzb2NpYXRpb25zKHNlbGVjdGVkR3JvdXApIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybiAtMTtcbiAgICBjb25zdCBtYXhBc3NvY2lhdGlvbnMgPSB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zO1xuICAgIGlmICghbWF4QXNzb2NpYXRpb25zKSByZXR1cm4gXCJOb25lXCI7XG4gICAgcmV0dXJuIG1heEFzc29jaWF0aW9ucztcbiAgfVxuXG4gIF9jb21wdXRlT3RoZXJHcm91cE5vZGVzKHNlbGVjdGVkR3JvdXApIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybiAtMTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDogZmFsc2UgfSk7XG4gICAgY29uc3QgYXNzb2NpYXRpb25zID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgIHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uX2luc3RhbmNlc1xuICAgICk7XG4gICAgaWYgKCFhc3NvY2lhdGlvbnMubGVuZ3RoKSByZXR1cm4gW1wiTm9uZVwiXTtcbiAgICByZXR1cm4gYXNzb2NpYXRpb25zLm1hcCgoYXNzb2MpID0+IHtcbiAgICAgIGlmICghYXNzb2MubGVuZ3RoIHx8IGFzc29jLmxlbmd0aCAhPT0gMikge1xuICAgICAgICByZXR1cm4gYFVua25vd24gTm9kZTogJHthc3NvY31gO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSBhc3NvY1swXTtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gYXNzb2NbMV07XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5ub2Rlcy5maW5kKChuKSA9PiBuLmF0dHJpYnV0ZXMubm9kZV9pZCA9PT0gaWQpO1xuICAgICAgaWYgKGlkID09PSAyNTUpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBfaXNCcm9hZGNhc3ROb2RlSW5Hcm91cDogdHJ1ZSxcbiAgICAgICAgICBfcmVtb3ZlQnJvYWRjYXN0Tm9kZVNlcnZpY2VEYXRhOiB7XG4gICAgICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgICAgICBhc3NvY2lhdGlvbjogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIHRhcmdldF9ub2RlX2lkOiAyNTUsXG4gICAgICAgICAgICBncm91cDogdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0ua2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybiBgVW5rbm93biBOb2RlICgke2lkfTogKCR7aW5zdGFuY2V9ID8gJHtpZH0uJHtpbnN0YW5jZX0gOiAke2lkfSkpYDtcbiAgICAgIH1cbiAgICAgIGxldCBjYXB0aW9uID0gdGhpcy5fY29tcHV0ZVNlbGVjdENhcHRpb24obm9kZSk7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgY2FwdGlvbiArPSBgLyBJbnN0YW5jZTogJHtpbnN0YW5jZX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHRpb247XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZVRhcmdldEluR3JvdXAoc2VsZWN0ZWRHcm91cCwgc2VsZWN0ZWRUYXJnZXROb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xIHx8IHNlbGVjdGVkVGFyZ2V0Tm9kZSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhc3NvY2lhdGlvbnMgPSBPYmplY3QudmFsdWVzKFxuICAgICAgdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgKTtcbiAgICBpZiAoIWFzc29jaWF0aW9ucy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgYXNzb2NpYXRpb25zLmluZGV4T2YoXG4gICAgICAgIHRoaXMubm9kZXNbc2VsZWN0ZWRUYXJnZXROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICAgICkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBgJHtjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKX1cbiAgICAgIChOb2RlOiAke3N0YXRlT2JqLmF0dHJpYnV0ZXMubm9kZV9pZH1cbiAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZX0pYDtcbiAgfVxuXG4gIF9jb21wdXRlU2VsZWN0Q2FwdGlvbkdyb3VwKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke3N0YXRlT2JqLmtleX06ICR7c3RhdGVPYmoudmFsdWUubGFiZWx9YDtcbiAgfVxuXG4gIF9jb21wdXRlSXNUYXJnZXROb2RlU2VsZWN0ZWQoc2VsZWN0ZWRUYXJnZXROb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMgJiYgc2VsZWN0ZWRUYXJnZXROb2RlICE9PSAtMTtcbiAgfVxuXG4gIF9jb21wdXRlSXNHcm91cFNlbGVjdGVkKHNlbGVjdGVkR3JvdXApIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyAmJiB0aGlzLnNlbGVjdGVkTm9kZSAhPT0gLTEgJiYgc2VsZWN0ZWRHcm91cCAhPT0gLTE7XG4gIH1cblxuICBfY29tcHV0ZUFzc29jU2VydmljZURhdGEoc2VsZWN0ZWRHcm91cCwgdHlwZSkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmdyb3VwcyA9PT0gLTEgfHxcbiAgICAgIHNlbGVjdGVkR3JvdXAgPT09IC0xIHx8XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFyZ2V0Tm9kZSA9PT0gLTFcbiAgICApXG4gICAgICByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIGFzc29jaWF0aW9uOiB0eXBlLFxuICAgICAgdGFyZ2V0X25vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICBncm91cDogdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0ua2V5LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaEdyb3VwcyhzZWxlY3RlZE5vZGUpIHtcbiAgICBjb25zdCBncm91cERhdGEgPSBbXTtcbiAgICBjb25zdCBncm91cHMgPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiR0VUXCIsXG4gICAgICBgendhdmUvZ3JvdXBzLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgKTtcbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZ3JvdXBEYXRhLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlOiBncm91cHNba2V5XSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBncm91cHM6IGdyb3VwRGF0YSxcbiAgICAgIF9tYXhBc3NvY2lhdGlvbnM6IGdyb3VwRGF0YVt0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zLFxuICAgICAgX290aGVyR3JvdXBOb2RlczogT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgZ3JvdXBEYXRhW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uc1xuICAgICAgKSxcbiAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBvbGRHcm91cCA9IHRoaXMuX3NlbGVjdGVkR3JvdXA7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkR3JvdXA6IC0xIH0pO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZEdyb3VwOiBvbGRHcm91cCB9KTtcbiAgfVxuXG4gIF9zZWxlY3RlZEdyb3VwQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRHcm91cCA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX21heEFzc29jaWF0aW9uczogdGhpcy5ncm91cHNbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUubWF4X2Fzc29jaWF0aW9ucyxcbiAgICAgIF9vdGhlckdyb3VwTm9kZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIHRoaXMuZ3JvdXBzW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLmFzc29jaWF0aW9uc1xuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3RlZFRhcmdldE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX2NvbXB1dGVUYXJnZXRJbkdyb3VwKHRoaXMuX3NlbGVjdGVkR3JvdXAsIHRoaXMuX3NlbGVjdGVkVGFyZ2V0Tm9kZSlcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9yZW1vdmVBc3NvY1NlcnZpY2VEYXRhOiB0aGlzLl9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEdyb3VwLFxuICAgICAgICAgIFwicmVtb3ZlXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfYWRkQXNzb2NTZXJ2aWNlRGF0YTogdGhpcy5fY29tcHV0ZUFzc29jU2VydmljZURhdGEoXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRHcm91cCxcbiAgICAgICAgICBcImFkZFwiXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0ZWROb2RlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkVGFyZ2V0Tm9kZTogLTEsIF9zZWxlY3RlZEdyb3VwOiAtMSB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ncm91cHNcIiwgWndhdmVHcm91cHMpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBpc1B3YSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19wd2FcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuXG5jbGFzcyBPendMb2cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnp3YXZlLm96d19sb2cuaGVhZGVyJyldXVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuendhdmUub3p3X2xvZy5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICA8L3NwYW4+XG4gICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJOdW1iZXIgb2YgbGFzdCBsb2cgbGluZXMuXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgc3RlcD1cIjEwXCIgdmFsdWU9XCJ7e251bUxvZ0xpbmVzfX1cIj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cInRydWVcIiBvbi1jbGljaz1cIl9vcGVuTG9nV2luZG93XCI+TG9hZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQ9XCJ0cnVlXCIgb24tY2xpY2s9XCJfdGFpbExvZ1wiIGRpc2FibGVkPVwie3tfY29tcGxldGVMb2d9fVwiPlRhaWw8L213Yy1idXR0b24+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgPC9oYS1jb25maWctc2VjdGlvbj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIF9vendMb2dzOiBTdHJpbmcsXG5cbiAgICAgIF9jb21wbGV0ZUxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIG51bUxvZ0xpbmVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcIl9pc0NvbXBsZXRlTG9nXCIsXG4gICAgICB9LFxuXG4gICAgICBfaW50ZXJ2YWxJZDogU3RyaW5nLFxuXG4gICAgICB0YWlsOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBfdGFpbExvZygpIHtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB0YWlsOiB0cnVlIH0pO1xuICAgIGNvbnN0IG96d1dpbmRvdyA9IGF3YWl0IHRoaXMuX29wZW5Mb2dXaW5kb3coKTtcbiAgICBpZiAoIWlzUHdhKCkpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9pbnRlcnZhbElkOiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVmcmVzaExvZyhvendXaW5kb3cpO1xuICAgICAgICB9LCAxNTAwKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vcGVuTG9nV2luZG93KCkge1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcInp3YXZlL296d2xvZz9saW5lcz1cIiArIHRoaXMubnVtTG9nTGluZXNcbiAgICApO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgIGlmIChpc1B3YSgpKSB7XG4gICAgICB0aGlzLl9zaG93T3p3bG9nRGlhbG9nKCk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGNvbnN0IG96d1dpbmRvdyA9IG9wZW4oXCJcIiwgXCJvendMb2dcIiwgXCJ0b29sYmFyXCIpO1xuICAgIG96d1dpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlPiR7dGhpcy5fb3p3TG9nc308L3ByZT5gO1xuICAgIHJldHVybiBvendXaW5kb3c7XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaExvZyhvendXaW5kb3cpIHtcbiAgICBpZiAob3p3V2luZG93LmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9pbnRlcnZhbElkOiBudWxsIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIFwiendhdmUvb3p3bG9nP2xpbmVzPVwiICsgdGhpcy5udW1Mb2dMaW5lc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9vendMb2dzOiBpbmZvIH0pO1xuICAgICAgb3p3V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmU+JHt0aGlzLl9vendMb2dzfTwvcHJlPmA7XG4gICAgfVxuICB9XG5cbiAgX2lzQ29tcGxldGVMb2coKSB7XG4gICAgaWYgKHRoaXMubnVtTG9nTGluZXMgIT09IFwiMFwiKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfY29tcGxldGVMb2c6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctb3p3bG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiendhdmUtbG9nLWRpYWxvZ1wiLFxuICAgICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6d2F2ZS1sb2ctZGlhbG9nXCIgKi8gXCIuL3p3YXZlLWxvZy1kaWFsb2dcIlxuICAgICAgICAgICksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2hvd096d2xvZ0RpYWxvZygpIHtcbiAgICB0aGlzLmZpcmUoXCJzaG93LW96d2xvZy1kaWFsb2dcIiwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgX251bUxvZ0xpbmVzOiB0aGlzLm51bUxvZ0xpbmVzLFxuICAgICAgX296d0xvZzogdGhpcy5fb3p3TG9ncyxcbiAgICAgIF90YWlsOiB0aGlzLnRhaWwsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gdGhpcy5fZGlhbG9nQ2xvc2VkKCksXG4gICAgfSk7XG4gIH1cblxuICBfZGlhbG9nQ2xvc2VkKCkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICB0YWlsOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3p3LWxvZ1wiLCBPendMb2cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBmZXRjaE5ldHdvcmtTdGF0dXMsXG4gIFpXYXZlTmV0d29ya1N0YXR1cyxcbiAgWldBVkVfTkVUV09SS19TVEFURV9TVE9QUEVELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURUQsXG4gIFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6d2F2ZS1uZXR3b3JrXCIpXG5leHBvcnQgY2xhc3MgWndhdmVOZXR3b3JrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25ldHdvcmtTdGF0dXM/OiBaV2F2ZU5ldHdvcmtTdGF0dXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Vuc3ViczogQXJyYXk8UHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+PiA9IFtdO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9nZXROZXR3b3JrU3RhdHVzKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uSGVhZGVyXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX21hbmFnZW1lbnQuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25IZWxwVGFwfVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX21hbmFnZW1lbnQuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3Mvei13YXZlL2NvbnRyb2wtcGFuZWwvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXNcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudCBuZXR3b3JrLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiaGFzczpjbG9zZVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdG9wcGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfU1RBUlRFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0aW5nX25vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA9PT0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiPiA8L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkX25vdGVfc29tZV9xdWVyaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfUkVBRFlcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZF9ub3RlX2FsbF9xdWVyaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID49IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic3RvcF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJoZWFsX25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInRlc3RfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic3RhcnRfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic29mdF9yZXNldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJ6d2F2ZS9zYXZlY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLnNlcnZpY2VzLnNhdmVfY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1hcGktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID49IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImFkZF9ub2RlX3NlY3VyZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiYWRkX25vZGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInJlbW92ZV9ub2RlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiY2FuY2VsX2NvbW1hbmRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0TmV0d29ya1N0YXR1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gYXdhaXQgZmV0Y2hOZXR3b3JrU3RhdHVzKHRoaXMuaGFzcyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3VicyA9IFtcbiAgICAgIFwiendhdmUubmV0d29ya19zdGFydFwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX3N0b3BcIixcbiAgICAgIFwiendhdmUubmV0d29ya19yZWFkeVwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX2NvbXBsZXRlXCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfY29tcGxldGVfc29tZV9kZWFkXCIsXG4gICAgXS5tYXAoKGUpID0+XG4gICAgICB0aGlzLmhhc3MhLmNvbm5lY3Rpb24uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2hhbmRsZUV2ZW50KGV2ZW50KSxcbiAgICAgICAgZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5fdW5zdWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fdW5zdWJzLnBvcCgpIS50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZXZlbnRfdHlwZSA9PT0gXCJ6d2F2ZS5uZXR3b3JrX3N0YXJ0XCIpIHtcbiAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHNldCB0aGUgc3RhdGUsIHdhaXQgMXMgYW5kIHBvbGwgdGhlIGJhY2tlbmRcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHdpbGwgc3RpbGwgcmVwb3J0IGEgc3RhdGUgb2YgMCB3aGVuIHRoZSAnbmV0d29ya19zdGFydCdcbiAgICAgIC8vIGV2ZW50IGlzIGZpcnN0IGZpcmVkLlxuICAgICAgaWYgKHRoaXMuX25ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IHsgLi4udGhpcy5fbmV0d29ya1N0YXR1cywgc3RhdGU6IDUgfTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZ2V0TmV0d29ya1N0YXR1cywgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldE5ldHdvcmtTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oc2VydmljZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICBzZXJ2aWNlPVwiJHtzZXJ2aWNlfVwiXG4gICAgICA+XG4gICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5zZXJ2aWNlcy5cIiArIHNlcnZpY2UpfVxuICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgc2VydmljZT1cIiR7c2VydmljZX1cIlxuICAgICAgICA/aGlkZGVuPSR7IXRoaXMuX3Nob3dIZWxwfVxuICAgICAgPlxuICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgZGl2LmRldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgaGEtaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxNnB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLW5ldHdvcmtcIjogWndhdmVOZXR3b3JrO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQge1xuICBaV2F2ZUNvbmZpZ0l0ZW0sXG4gIFpXYXZlTm9kZSxcbiAgWldhdmVDb25maWdTZXJ2aWNlRGF0YSxcbiAgZmV0Y2hOb2RlQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInp3YXZlLW5vZGUtY29uZmlnXCIpXG5leHBvcnQgY2xhc3MgWndhdmVOb2RlQ29uZmlnIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5vZGVzOiBaV2F2ZU5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnOiBaV2F2ZUNvbmZpZ0l0ZW1bXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0ZWROb2RlOiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnSXRlbT86IFpXYXZlQ29uZmlnSXRlbTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd2FrZXVwSW5wdXQ6IG51bWJlciA9IC0xO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcjogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkQ29uZmlnVmFsdWU6IG51bWJlciB8IHN0cmluZyA9IC0xO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5oZWFkZXJcIlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICAke1wid2FrZV91cF9pbnRlcnZhbFwiIGluIHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLmZsb2F0TGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLndha2V1cF9pbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3dha2V1cElucHV0ICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fd2FrZXVwSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi51bmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fb25XYWtldXBJbnRlcnZhbENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcj0ke3RoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAud2FrZV91cF9pbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAud2FrZV91cF9pbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLnVua25vd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdWZmaXg+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuc2Vjb25kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInNldF93YWtldXBcIlxuICAgICAgICAgICAgICAgICAgICAuc2VydmljZURhdGE9JHt0aGlzLl9jb21wdXRlV2FrZXVwU2VydmljZURhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2FrZXVwSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNldF93YWtldXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3BhcmFtZXRlclwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJ9XG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJDaGFuZ2VkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbmZpZy5tYXAoXG4gICAgICAgICAgICAgICAgICAoc3RhdGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICR7c3RhdGUua2V5fTogJHtzdGF0ZS52YWx1ZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW1cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZSA9PT0gXCJMaXN0XCJcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5jb25maWdfdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcj0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX2NvbmZpZ1ZhbHVlU2VsZWN0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhX2l0ZW1zLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHtzdGF0ZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHtbXCJCeXRlXCIsIFwiU2hvcnRcIiwgXCJJbnRcIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGFfaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXg9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLm1heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUubWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2NvbmZpZ1ZhbHVlSW5wdXRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7W1wiQm9vbFwiLCBcIkJ1dHRvblwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtLnZhbHVlLnR5cGUpXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcudHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5oZWxwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAke1tcIkJvb2xcIiwgXCJCdXR0b25cIiwgXCJCeXRlXCIsIFwiU2hvcnRcIiwgXCJJbnRcIiwgXCJMaXN0XCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfY29uZmlnX3BhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXJ2aWNlRGF0YT0ke3RoaXMuX2NvbXB1dGVTZXRDb25maWdQYXJhbWV0ZXJTZXJ2aWNlRGF0YSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuc2V0X2NvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwic2VsZWN0ZWROb2RlXCIpKSB7XG4gICAgICB0aGlzLl9ub2Rlc0NoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcnZpY2VDYWxsZWQoZXYpOiB2b2lkIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoQ29uZmlnKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vZGVzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl93YWtldXBJbnB1dCA9IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoXG4gICAgICBcIndha2VfdXBfaW50ZXJ2YWxcIlxuICAgIClcbiAgICAgID8gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy53YWtlX3VwX2ludGVydmFsIVxuICAgICAgOiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgX29uV2FrZXVwSW50ZXJ2YWxDaGFuZ2VkKHZhbHVlOiBDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3dha2V1cElucHV0ID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVXYWtldXBTZXJ2aWNlRGF0YSh3YWtldXBJbnB1dDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHZhbHVlOiB3YWtldXBJbnB1dCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVNldENvbmZpZ1BhcmFtZXRlclNlcnZpY2VEYXRhKCk6XG4gICAgfCBaV2F2ZUNvbmZpZ1NlcnZpY2VEYXRhXG4gICAgfCBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8IHR5cGVvZiB0aGlzLl9jb25maWdJdGVtID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB2YWx1ZURhdGE6IG51bWJlciB8IHN0cmluZyA9IFwiXCI7XG4gICAgaWYgKFtcIlNob3J0XCIsIFwiQnl0ZVwiLCBcIkludFwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtIS52YWx1ZS50eXBlKSkge1xuICAgICAgdmFsdWVEYXRhID1cbiAgICAgICAgdHlwZW9mIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IHBhcnNlSW50KHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUsIDEwKVxuICAgICAgICAgIDogdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZTtcbiAgICB9XG4gICAgaWYgKFtcIkJvb2xcIiwgXCJCdXR0b25cIiwgXCJMaXN0XCJdLmluY2x1ZGVzKHRoaXMuX2NvbmZpZ0l0ZW0hLnZhbHVlLnR5cGUpKSB7XG4gICAgICB2YWx1ZURhdGEgPSB0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgcGFyYW1ldGVyOiB0aGlzLl9jb25maWdJdGVtLmtleSxcbiAgICAgIHZhbHVlOiB2YWx1ZURhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IS5zZWxlY3RlZCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIgPSBldmVudC50YXJnZXQhLnNlbGVjdGVkO1xuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB0aGlzLmNvbmZpZ1tldmVudC50YXJnZXQhLnNlbGVjdGVkXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1ZhbHVlU2VsZWN0Q2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IS5zZWxlY3RlZCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZSA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnVmFsdWVJbnB1dENoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZSA9IHZhbHVlLmRldGFpbCEudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWZyZXNoQ29uZmlnKHNlbGVjdGVkTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbmZpZ0RhdGE6IFpXYXZlQ29uZmlnSXRlbVtdID0gW107XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZmV0Y2hOb2RlQ29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZFxuICAgICk7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uZmlnRGF0YS5wdXNoKHtcbiAgICAgICAga2V5OiBwYXJzZUludChrZXksIDEwKSxcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ0RhdGE7XG4gICAgdGhpcy5fY29uZmlnSXRlbSA9IHRoaXMuY29uZmlnW3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZUV2ZW50IHtcbiAgZGV0YWlsPzoge1xuICAgIHZhbHVlPzogYW55O1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaWNrZXJUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHNlbGVjdGVkOiBudW1iZXI7XG4gIHNlbGVjdGVkSXRlbT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtU2VsZWN0ZWRFdmVudCB7XG4gIHRhcmdldD86IFBpY2tlclRhcmdldDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLW5vZGUtY29uZmlnXCI6IFp3YXZlTm9kZUNvbmZpZztcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZU5vZGVQcm90ZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1hcGktYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgcHJvdGVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJQcm90ZWN0aW9uXCIgZHluYW1pYy1hbGlnbiBjbGFzcz1cImZsZXhcIiBwbGFjZWhvbGRlcj1cInt7X2xvYWRlZFByb3RlY3Rpb25WYWx1ZX19XCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyfX1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfcHJvdGVjdGlvbk9wdGlvbnNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW3N0YXRlXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgcGF0aD1cIltbX25vZGVQYXRoXV1cIlxuICAgICAgICAgICAgICBkYXRhPVwiW1tfcHJvdGVjdGlvbkRhdGFdXVwiPlxuICAgICAgICAgICAgICBTZXQgUHJvdGVjdGlvblxuICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBwcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvblZhbHVlSUQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfY29tcHV0ZVByb3RlY3Rpb25EYXRhXCIsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvbk9wdGlvbnM6IEFycmF5LFxuXG4gICAgICBfcHJvdGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgX2xvYWRlZFByb3RlY3Rpb25WYWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25EYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgX25vZGVQYXRoOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfbm9kZXNDaGFuZ2VkKG5vZGVzLCBzZWxlY3RlZE5vZGUpXCJdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLWFwaS1jYWxsZWRcIiwgKGV2KSA9PiB0aGlzLmFwaUNhbGxlZChldikpO1xuICB9XG5cbiAgYXBpQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaFByb3RlY3Rpb24odGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX25vZGVzQ2hhbmdlZCgpIHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm90ZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBwcm90ZWN0aW9uTm9kZTogdHJ1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25PcHRpb25zOiB0aGlzLnByb3RlY3Rpb25bMF0udmFsdWUsXG4gICAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25WYWx1ZUlEOiB0aGlzLnByb3RlY3Rpb25bMl0udmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaFByb3RlY3Rpb24oc2VsZWN0ZWROb2RlKSB7XG4gICAgY29uc3QgcHJvdGVjdGlvblZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IHByb3RlY3Rpb25zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3Byb3RlY3Rpb24vJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHByb3RlY3Rpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHByb3RlY3Rpb25WYWx1ZXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHByb3RlY3Rpb25zW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX3Byb3RlY3Rpb246IHByb3RlY3Rpb25WYWx1ZXMsXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiAtMSxcbiAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUHJvdGVjdGlvbkRhdGEoc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCBzZWxlY3RlZFByb3RlY3Rpb25QYXJhbWV0ZXIgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5fcHJvdGVjdGlvbkRhdGEgPSB7XG4gICAgICBzZWxlY3Rpb246IHRoaXMuX3Byb3RlY3Rpb25PcHRpb25zW3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcl0sXG4gICAgICB2YWx1ZV9pZDogdGhpcy5fcHJvdGVjdGlvblZhbHVlSUQsXG4gICAgfTtcbiAgICB0aGlzLl9ub2RlUGF0aCA9IGB6d2F2ZS9wcm90ZWN0aW9uLyR7XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICB9YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ub2RlLXByb3RlY3Rpb25cIiwgWndhdmVOb2RlUHJvdGVjdGlvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZVVzZXJjb2RlcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgdXNlciBjb2Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIkNvZGUgc2xvdFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkVXNlckNvZGV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3VzZXJDb2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uVXNlckNvZGVzKHN0YXRlKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc1VzZXJDb2RlU2VsZWN0ZWQoX3NlbGVjdGVkVXNlckNvZGUpXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VyIGNvZGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbMC05LGEtZix4LFxcXFxcXFxcXVwiXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNDBcIlxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3NlbGVjdGVkVXNlckNvZGVWYWx1ZX19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cHJlPkFzY2lpOiBbW19jb21wdXRlZENvZGVPdXRwdXRdXTwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJsb2NrXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlVmFsdWUsIFwiQWRkXCIpXV0nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXQgVXNlcmNvZGVcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNsZWFyX3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlLCBcIkRlbGV0ZVwiKV1dJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlIFVzZXJjb2RlXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgdXNlckNvZGVzOiBPYmplY3QsXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWRVc2VyQ29kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFN0cmluZyxcblxuICAgICAgX2NvbXB1dGVkQ29kZU91dHB1dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgc2VydmljZUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hVc2VyQ29kZXModGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzVXNlckNvZGVTZWxlY3RlZChzZWxlY3RlZFVzZXJDb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkVXNlckNvZGUgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY29tcHV0ZVNlbGVjdENhcHRpb25Vc2VyQ29kZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7c3RhdGVPYmoua2V5fTogJHtzdGF0ZU9iai52YWx1ZS5sYWJlbH1gO1xuICB9XG5cbiAgX3NlbGVjdGVkVXNlckNvZGVDaGFuZ2VkKHNlbGVjdGVkVXNlckNvZGUpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEgfHwgc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudXNlckNvZGVzW3NlbGVjdGVkVXNlckNvZGVdLnZhbHVlLmNvZGU7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IHRoaXMuX2EyaGV4KHZhbHVlKSxcbiAgICAgIF9jb21wdXRlZENvZGVPdXRwdXQ6IGBbJHt0aGlzLl9oZXgyYSh0aGlzLl9hMmhleCh2YWx1ZSkpfV1gLFxuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgIXNlbGVjdGVkVXNlckNvZGVWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGxldCBzZXJ2aWNlRGF0YSA9IG51bGw7XG4gICAgbGV0IHZhbHVlRGF0YSA9IG51bGw7XG4gICAgaWYgKHR5cGUgPT09IFwiQWRkXCIpIHtcbiAgICAgIHZhbHVlRGF0YSA9IHRoaXMuX2hleDJhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSk7XG4gICAgICB0aGlzLl9jb21wdXRlZENvZGVPdXRwdXQgPSBgWyR7dmFsdWVEYXRhfV1gO1xuICAgICAgc2VydmljZURhdGEgPSB7XG4gICAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgICAgY29kZV9zbG90OiB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlLFxuICAgICAgICB1c2VyY29kZTogdmFsdWVEYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwiRGVsZXRlXCIpIHtcbiAgICAgIHNlcnZpY2VEYXRhID0ge1xuICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgIGNvZGVfc2xvdDogdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlRGF0YTtcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoVXNlckNvZGVzKHNlbGVjdGVkTm9kZSkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFwiXCIgfSk7XG4gICAgY29uc3QgdXNlckNvZGVzID0gW107XG4gICAgY29uc3QgdXNlckNvZGVEYXRhID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICk7XG4gICAgT2JqZWN0LmtleXModXNlckNvZGVEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHVzZXJDb2Rlcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogdXNlckNvZGVEYXRhW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB1c2VyQ29kZXM6IHVzZXJDb2RlcyB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlQ2hhbmdlZCh0aGlzLl9zZWxlY3RlZFVzZXJDb2RlKTtcbiAgfVxuXG4gIF9hMmhleChzdHIpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGhleCA9IE51bWJlcihzdHIuY2hhckNvZGVBdChpKSkudG9TdHJpbmcoMTYpO1xuICAgICAgaWYgKGhleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gXCIwMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gaGV4O1xuICAgICAgfVxuICAgICAgYXJyLnB1c2goXCJcXFxceFwiICsgb3V0cHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5qb2luKFwiXCIpO1xuICB9XG5cbiAgX2hleDJhKGhleHgpIHtcbiAgICBjb25zdCBoZXggPSBoZXh4LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGV4TW9kID0gaGV4LnJlcGxhY2UoL1xcXFx4L2csIFwiXCIpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4TW9kLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXhNb2Quc3Vic3RyKGksIDIpLCAxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX3NlbGVjdGVkTm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZHVzZXJDb2RlOiAtMSB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS11c2VyY29kZXNcIiwgWndhdmVVc2VyY29kZXMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgWldhdmVWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3p3YXZlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtdmFsdWVzXCIpXG5leHBvcnQgY2xhc3MgWndhdmVWYWx1ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWVzOiBaV2F2ZVZhbHVlW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRWYWx1ZTogbnVtYmVyID0gLTE7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLnZhbHVlcy5oZWFkZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi52YWx1ZVwiKX1cbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9zZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnZhbHVlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlQ2FwdGlvbihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVDYXB0aW9uKGl0ZW0pIHtcbiAgICBsZXQgb3V0ID0gYCR7aXRlbS52YWx1ZS5sYWJlbH1gO1xuICAgIG91dCArPSBgICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24uaW5zdGFuY2VcIil9OmA7XG4gICAgb3V0ICs9IGAgJHtpdGVtLnZhbHVlLmluc3RhbmNlfSxgO1xuICAgIG91dCArPSBgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi5pbmRleFwiKX06YDtcbiAgICBvdXQgKz0gYCAke2l0ZW0udmFsdWUuaW5kZXh9KWA7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiendhdmUtdmFsdWVzXCI6IFp3YXZlVmFsdWVzO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0lBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUE5RUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTs7OztBQXhDQTtBQUNBO0FBaUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcEJBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUFiQTtBQUNBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFJQTtBQURBO0FBSEE7QUFPQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQSw2OUJBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7O0FBU0E7Ozs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBc0VBOzs7O0FBeEVBO0FBQ0E7QUF5RUE7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFFQTtBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBNlpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBN25CQTtBQUNBO0FBeVVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXhFQTtBQTZFQTs7OztBQTNaQTtBQUNBO0FBZ29CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFzTEE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUE5VkE7QUFDQTtBQThHQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4REE7QUE2REE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXBMQTtBQUNBO0FBaVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7O0FBRUE7QUFDQTs7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxxV0FFQTtBQUZBO0FBSEE7QUFRQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBakpBO0FBQ0E7QUFvQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBdkJBO0FBeUJBOzs7O0FBbEVBO0FBQ0E7QUFtSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQXlIQTtBQTNJQTtBQUFBO0FBQUE7QUFBQTtBQTZJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0lBO0FBQUE7QUFBQTtBQUFBO0FBaUpBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7QUFBQTtBQUZBO0FBTUE7QUE5SkE7QUFBQTtBQUFBO0FBQUE7QUFpS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBcEtBO0FBQUE7QUFBQTtBQUFBO0FBc0tBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbExBO0FBQUE7QUFBQTtBQUFBO0FBcUxBO0FBQ0E7QUF0TEE7QUFBQTtBQUFBO0FBQUE7QUF5TEE7QUFnQkE7QUF6TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRNQTtBQTJEQTtBQXZRQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBZ0VBO0FBQUE7QUE0QkE7QUFBQTtBQWlGQTtBQXhMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkxBO0FBMkNBO0FBdE9BO0FBQUE7QUFBQTtBQUFBO0FBd09BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUE3T0E7QUFBQTtBQUFBO0FBQUE7QUFnUEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcFBBO0FBQUE7QUFBQTtBQUFBO0FBc1BBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1UEE7QUFBQTtBQUFBO0FBQUE7QUErUEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUF4UUE7QUFBQTtBQUFBO0FBQUE7QUEyUUE7QUFDQTtBQTVRQTtBQUFBO0FBQUE7QUFBQTtBQStRQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBblJBO0FBQUE7QUFBQTtBQUFBO0FBd1JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUExU0E7QUFBQTtBQUFBO0FBQUE7QUE2U0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFsVEE7QUFBQTtBQUFBO0FBQUE7QUFxVEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBelRBO0FBQUE7QUFBQTtBQUFBO0FBNFRBO0FBQ0E7QUE3VEE7QUFBQTtBQUFBO0FBQUE7QUErVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9UQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOzs7QUFFQTs7Ozs7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7OztBQTFKQTtBQUNBO0FBMkNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQTNDQTtBQTZDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBakdBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEyR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBOU1BO0FBQ0E7QUEyRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBOzs7O0FBekdBO0FBQ0E7QUFpTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFHQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFnQkE7QUFBQTtBQVlBO0FBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7QUEyQ0E7QUFoRkE7QUFBQTtBQUFBO0FBQUE7QUFtRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6RkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=