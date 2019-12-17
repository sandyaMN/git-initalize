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
const isComponentLoaded = (hass, component) => hass && hass.config.components.indexOf(component) !== -1;

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
  const parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
  const compareTime = options.compareTime || new Date();
  let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  const tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  let timeDesc;

  for (let i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
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
const leftPad = num => num < 10 ? `0${num}` : num;

function secondsToDuration(d) {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return `${h}:${leftPad(m)}:${leftPad(s)}`;
  }

  if (m > 0) {
    return `${m}:${leftPad(s)}`;
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
const stopPropagation = ev => ev.stopPropagation();

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
const supportsFeature = (stateObj, feature) => {
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

const timerTimeRemaining = stateObj => {
  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    const now = new Date().getTime();
    const madeActive = new Date(stateObj.last_changed).getTime();
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
const timeCachePromiseFunc = async (cacheKey, cacheTime, func, hass, entityId, ...args) => {
  let cache = hass[cacheKey];

  if (!cache) {
    cache = hass[cacheKey] = {};
  }

  const lastResult = cache[entityId];

  if (lastResult) {
    return lastResult;
  }

  const result = func(hass, entityId, ...args);
  cache[entityId] = result;
  result.then( // When successful, set timer to clear cache
  () => setTimeout(() => {
    cache[entityId] = undefined;
  }, cacheTime), // On failure, clear cache right away
  () => {
    cache[entityId] = undefined;
  });
  return result;
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




/*
 * @appliesMixin LocalizeMixin
 */

class HaClimateState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      currentStatus: {
        type: String,
        computed: "computeCurrentStatus(hass, stateObj)"
      }
    };
  }

  computeCurrentStatus(hass, stateObj) {
    if (!hass || !stateObj) return null;

    if (stateObj.attributes.current_temperature != null) {
      return `${stateObj.attributes.current_temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.current_humidity != null) {
      return `${stateObj.attributes.current_humidity} %`;
    }

    return null;
  }

  computeTarget(hass, stateObj) {
    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

    if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
      return `${stateObj.attributes.target_temp_low}-${stateObj.attributes.target_temp_high} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
      return `${stateObj.attributes.target_humidity_low}-${stateObj.attributes.target_humidity_high}%`;
    }

    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(localize, stateObj) {
    const stateString = localize(`state.climate.${stateObj.state}`);
    return stateObj.attributes.hvac_action ? `${localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`)} (${stateString})` : stateString;
  }

  _localizePreset(localize, preset) {
    return localize(`state_attributes.climate.preset_mode.${preset}`) || preset;
  }

  _renderPreset(attributes) {
    return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"];
  }

}

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





class HaCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
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

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
  }

  onOpenTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCover();
  }

  onCloseTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCover();
  }

  onStopTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCover();
  }

}

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






class HaCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
  }

  static get properties() {
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

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyOpenTilt && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyClosedTilt && !assumedState;
  }

  onOpenTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCoverTilt();
  }

  onCloseTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCoverTilt();
  }

  onStopTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCoverTilt();
  }

}

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class HaRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      hass: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged"
      },
      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged"
      },
      parsedDateTime: Object
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback(); // update every 60 seconds

    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;
    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;
    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }

}

customElements.define("ha-relative-time", HaRelativeTime);

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

const PaperSliderClass = customElements.get("paper-slider");
let subTemplate;

class HaSlider extends PaperSliderClass {
  static get template() {
    if (!subTemplate) {
      subTemplate = PaperSliderClass.template.cloneNode(true);
      const superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

      superStyle.appendChild(document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }
        `));
    }

    return subTemplate;
  }

  _calcStep(value) {
    if (!this.step) {
      return parseFloat(value);
    }

    const numSteps = Math.round((value - this.min) / this.step);
    const stepStr = this.step.toString();
    const stepPointAt = stepStr.indexOf(".");

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
      const precision = 10 ** (stepStr.length - stepPointAt - 1);
      return Math.round((numSteps * this.step + this.min) * precision) / precision;
    }

    return numSteps * this.step + this.min;
  }

}

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
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({
  type: "auth/sign_path",
  path
});
const fetchAuthProviders = () => fetch("/auth/providers", {
  credentials: "same-origin"
});

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


const CAMERA_SUPPORT_ON_OFF = 1;
const CAMERA_SUPPORT_STREAM = 2;
const computeMJPEGStreamUrl = entity => `/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;
const fetchThumbnailUrlWithCache = (hass, entityId) => Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
const fetchThumbnailUrl = async (hass, entityId) => {
  const path = await Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, `/api/camera_proxy/${entityId}`);
  return hass.hassUrl(path.path);
};
const fetchThumbnail = (hass, entityId) => {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
const fetchStreamUrl = async (hass, entityId, format) => {
  const data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  const stream = await hass.callWS(data);
  stream.url = hass.hassUrl(stream.url);
  return stream;
};
const fetchCameraPrefs = (hass, entityId) => hass.callWS({
  type: "camera/get_prefs",
  entity_id: entityId
});
const updateCameraPrefs = (hass, entityId, prefs) => hass.callWS(Object.assign({
  type: "camera/update_prefs",
  entity_id: entityId
}, prefs));

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
const CLIMATE_PRESET_NONE = "none";
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const CLIMATE_SUPPORT_AUX_HEAT = 64;
const hvacModeOrdering = {
  auto: 1,
  heat_cool: 2,
  heat: 3,
  cool: 4,
  dry: 5,
  fan_only: 6,
  off: 7
};
const compareClimateHvacModes = (mode1, mode2) => hvacModeOrdering[mode1] - hvacModeOrdering[mode2];

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
const setInputSelectOption = (hass, entity, option) => hass.callService("input_select", "select_option", {
  option,
  entity_id: entity
});

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
const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
const activateScene = (hass, entityId) => hass.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (hass, entities) => hass.callService("scene", "apply", {
  entities
});
const getSceneConfig = (hass, sceneId) => hass.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (hass, sceneId, config) => hass.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (hass, id) => hass.callApi("DELETE", `config/scene/config/${id}`);

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

/* eslint-enable no-bitwise */

class CoverEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isFullyOpen() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 100;
    }

    return this.stateObj.state === "open";
  }

  get isFullyClosed() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 0;
    }

    return this.stateObj.state === "closed";
  }

  get isFullyOpenTilt() {
    return this._attr.current_tilt_position === 100;
  }

  get isFullyClosedTilt() {
    return this._attr.current_tilt_position === 0;
  }

  get isOpening() {
    return this.stateObj.state === "opening";
  }

  get isClosing() {
    return this.stateObj.state === "closing";
  }

  get supportsOpen() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsClose() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
  }

  get supportsSetPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsStop() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsOpenTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsCloseTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsStopTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
  }

  get supportsSetTiltPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get isTiltOnly() {
    const supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
    const supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
    return supportsTilt && !supportsCover;
  }

  openCover() {
    this.callService("open_cover");
  }

  closeCover() {
    this.callService("close_cover");
  }

  stopCover() {
    this.callService("stop_cover");
  }

  openCoverTilt() {
    this.callService("open_cover_tilt");
  }

  closeCoverTilt() {
    this.callService("close_cover_tilt");
  }

  stopCoverTilt() {
    this.callService("stop_cover_tilt");
  }

  setCoverPosition(position) {
    this.callService("set_cover_position", {
      position
    });
  }

  setCoverTiltPosition(tiltPosition) {
    this.callService("set_cover_tilt_position", {
      tilt_position: tiltPosition
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("cover", service, data);
  }

}
const supportsOpen = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
const supportsClose = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
const supportsSetPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
const supportsStop = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
const supportsOpenTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
const supportsCloseTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
const supportsStopTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
const supportsSetTiltPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
function isTiltOnly(stateObj) {
  const supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  const supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
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

class MediaPlayerEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get isIdle() {
    return this.stateObj.state === "idle";
  }

  get isMuted() {
    return this._attr.is_volume_muted;
  }

  get isPaused() {
    return this.stateObj.state === "paused";
  }

  get isPlaying() {
    return this.stateObj.state === "playing";
  }

  get isMusic() {
    return this._attr.media_content_type === "music";
  }

  get isTVShow() {
    return this._attr.media_content_type === "tvshow";
  }

  get hasMediaControl() {
    return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
  }

  get volumeSliderValue() {
    return this._attr.volume_level * 100;
  }

  get showProgress() {
    return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
  }

  get currentProgress() {
    var progress = this._attr.media_position;

    if (this.isPlaying) {
      progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
    }

    return progress;
  }

  get supportsPause() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsVolumeSet() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsVolumeMute() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsPreviousTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsNextTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsTurnOn() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get supportsTurnOff() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
  }

  get supportsPlayMedia() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
  }

  get supportsVolumeButtons() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
  }

  get supportsSelectSource() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
  }

  get supportsSelectSoundMode() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
  }

  get supportsPlay() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
  }

  get primaryTitle() {
    return this._attr.media_title;
  }

  get secondaryTitle() {
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

  get source() {
    return this._attr.source;
  }

  get sourceList() {
    return this._attr.source_list;
  }

  get soundMode() {
    return this._attr.sound_mode;
  }

  get soundModeList() {
    return this._attr.sound_mode_list;
  }

  mediaPlayPause() {
    this.callService("media_play_pause");
  }

  nextTrack() {
    this.callService("media_next_track");
  }

  playbackControl() {
    this.callService("media_play_pause");
  }

  previousTrack() {
    this.callService("media_previous_track");
  }

  setVolume(volume) {
    this.callService("volume_set", {
      volume_level: volume
    });
  }

  togglePower() {
    if (this.isOff) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }

  turnOff() {
    this.callService("turn_off");
  }

  turnOn() {
    this.callService("turn_on");
  }

  volumeDown() {
    this.callService("volume_down");
  }

  volumeMute(mute) {
    if (!this.supportsVolumeMute) {
      throw new Error("Muting volume not supported");
    }

    this.callService("volume_mute", {
      is_volume_muted: mute
    });
  }

  volumeUp() {
    this.callService("volume_up");
  }

  selectSource(source) {
    this.callService("select_source", {
      source
    });
  }

  selectSoundMode(soundMode) {
    this.callService("select_sound_mode", {
      sound_mode: soundMode
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("media_player", service, data);
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3N0b3BfcHJvcGFnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiA9PiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR1cmF0aW9uVG9TZWNvbmRzKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgcmV0dXJuIHBhcnRzWzBdICogMzYwMCArIHBhcnRzWzFdICogNjAgKyBwYXJ0c1syXTtcbn1cbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiY29uc3QgbGVmdFBhZCA9IChudW06IG51bWJlcikgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vjb25kc1RvRHVyYXRpb24oZDogbnVtYmVyKSB7XG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKGQgLyAzNjAwKTtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAlIDYwKTtcblxuICBpZiAoaCA+IDApIHtcbiAgICByZXR1cm4gYCR7aH06JHtsZWZ0UGFkKG0pfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAobSA+IDApIHtcbiAgICByZXR1cm4gYCR7bX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKHMgPiAwKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lclRpbWVSZW1haW5pbmcgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBkdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlbWFpbmluZyk7XG5cbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgbWFkZUFjdGl2ZSA9IG5ldyBEYXRlKHN0YXRlT2JqLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuICAgIHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aW1lUmVtYWluaW5nIC0gKG5vdyAtIG1hZGVBY3RpdmUpIC8gMTAwMCwgMCk7XG4gIH1cblxuICByZXR1cm4gdGltZVJlbWFpbmluZztcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBSZXN1bHRDYWNoZTxUPiB7XG4gIFtlbnRpdHlJZDogc3RyaW5nXTogUHJvbWlzZTxUPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVDYWNoZVByb21pc2VGdW5jID0gYXN5bmMgPFQ+KFxuICBjYWNoZUtleTogc3RyaW5nLFxuICBjYWNoZVRpbWU6IG51bWJlcixcbiAgZnVuYzogKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgZW50aXR5SWQ6IHN0cmluZyxcbiAgICAuLi5hcmdzOiB1bmtub3duW11cbiAgKSA9PiBQcm9taXNlPFQ+LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICAuLi5hcmdzOiB1bmtub3duW11cbik6IFByb21pc2U8VD4gPT4ge1xuICBsZXQgY2FjaGU6IFJlc3VsdENhY2hlPFQ+IHwgdW5kZWZpbmVkID0gKGhhc3MgYXMgYW55KVtjYWNoZUtleV07XG5cbiAgaWYgKCFjYWNoZSkge1xuICAgIGNhY2hlID0gaGFzc1tjYWNoZUtleV0gPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGxhc3RSZXN1bHQgPSBjYWNoZVtlbnRpdHlJZF07XG5cbiAgaWYgKGxhc3RSZXN1bHQpIHtcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZ1bmMoaGFzcywgZW50aXR5SWQsIC4uLmFyZ3MpO1xuICBjYWNoZVtlbnRpdHlJZF0gPSByZXN1bHQ7XG5cbiAgcmVzdWx0LnRoZW4oXG4gICAgLy8gV2hlbiBzdWNjZXNzZnVsLCBzZXQgdGltZXIgdG8gY2xlYXIgY2FjaGVcbiAgICAoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgICB9LCBjYWNoZVRpbWUpLFxuICAgIC8vIE9uIGZhaWx1cmUsIGNsZWFyIGNhY2hlIHJpZ2h0IGF3YXlcbiAgICAoKSA9PiB7XG4gICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IENMSU1BVEVfUFJFU0VUX05PTkUgfSBmcm9tIFwiLi4vZGF0YS9jbGltYXRlXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDbGltYXRlU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YXJnZXQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVuaXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhcmdldFwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2hhc0tub3duU3RhdGUoc3RhdGVPYmouc3RhdGUpXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRlLWxhYmVsXCI+XG4gICAgICAgICAgICBbW19sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iaildXVxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19yZW5kZXJQcmVzZXQoc3RhdGVPYmouYXR0cmlidXRlcyldXVwiPlxuICAgICAgICAgICAgICAtIFtbX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlKV1dXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2NvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY3VycmVudFN0YXR1c11dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5jbGltYXRlLmN1cnJlbnRseScpXV06XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2N1cnJlbnRTdGF0dXNdXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGN1cnJlbnRTdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDdXJyZW50U3RhdHVzKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlfSAke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eX0gJWA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIC8vIFdlJ3JlIHVzaW5nIFwiIT0gbnVsbFwiIG9uIHB1cnBvc2Ugc28gdGhhdCB3ZSBtYXRjaCBib3RoIG51bGwgYW5kIHVuZGVmaW5lZC5cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyAhPSBudWxsICYmXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fS0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaH0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93fS0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2h9JWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlYDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIF9oYXNLbm93blN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBcInVua25vd25cIjtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IHN0YXRlU3RyaW5nID0gbG9jYWxpemUoYHN0YXRlLmNsaW1hdGUuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5odmFjX2FjdGlvblxuICAgICAgPyBgJHtsb2NhbGl6ZShcbiAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLmh2YWNfYWN0aW9uLiR7c3RhdGVPYmouYXR0cmlidXRlcy5odmFjX2FjdGlvbn1gXG4gICAgICAgICl9ICgke3N0YXRlU3RyaW5nfSlgXG4gICAgICA6IHN0YXRlU3RyaW5nO1xuICB9XG5cbiAgX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBwcmVzZXQpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5wcmVzZXRfbW9kZS4ke3ByZXNldH1gKSB8fCBwcmVzZXQ7XG4gIH1cblxuICBfcmVuZGVyUHJlc2V0KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYXR0cmlidXRlcy5wcmVzZXRfbW9kZSAmJiBhdHRyaWJ1dGVzLnByZXNldF9tb2RlICE9PSBDTElNQVRFX1BSRVNFVF9OT05FXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2xpbWF0ZS1zdGF0ZVwiLCBIYUNsaW1hdGVTdGF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIEhhQ292ZXJDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRlXCI+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIGNvdmVyXCJcbiAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlN0b3AgdGhlIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uU3RvcFRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BdXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgY292ZXJcIlxuICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiAoZW50aXR5T2JqLmlzRnVsbHlPcGVuIHx8IGVudGl0eU9iai5pc09wZW5pbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIChlbnRpdHlPYmouaXNGdWxseUNsb3NlZCB8fCBlbnRpdHlPYmouaXNDbG9zaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyKCk7XG4gIH1cblxuICBvbkNsb3NlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlcigpO1xuICB9XG5cbiAgb25TdG9wVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouc3RvcENvdmVyKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItY29udHJvbHNcIiwgSGFDb3ZlckNvbnRyb2xzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIEhhQ292ZXJUaWx0Q29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjb3ZlciB0aWx0XCJcbiAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdG9wLXJpZ2h0XCJcbiAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UaWx0VGFwXCJcbiAgICAgICAgdGl0bGU9XCJPcGVuIHRpbHRcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzT3BlblRpbHRdXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN0b3AgY292ZXIgZnJvbSBtb3ZpbmdcIlxuICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUaWx0VGFwXCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BUaWx0XV1cIlxuICAgICAgICB0aXRsZT1cIlN0b3AgdGlsdFwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgY292ZXIgdGlsdFwiXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LWJvdHRvbS1sZWZ0XCJcbiAgICAgICAgb24tY2xpY2s9XCJvbkNsb3NlVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgdGlsdFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZVRpbHRdXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5T3BlblRpbHQgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlDbG9zZWRUaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25DbG9zZVRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25TdG9wVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlclRpbHQoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci10aWx0LWNvbnRyb2xzXCIsIEhhQ292ZXJUaWx0Q29udHJvbHMpO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUmVsYXRpdmVUaW1lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBkYXRldGltZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkRGF0ZVRpbWU6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlID0gdGhpcy51cGRhdGVSZWxhdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyB1cGRhdGUgZXZlcnkgNjAgc2Vjb25kc1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVJlbGF0aXZlLCA2MDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH1cblxuICBkYXRldGltZUNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbCA/IG5ldyBEYXRlKG5ld1ZhbCkgOiBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgZGF0ZXRpbWVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICB1cGRhdGVSZWxhdGl2ZSgpIHtcbiAgICBjb25zdCByb290ID0gZG9tKHRoaXMpO1xuICAgIGlmICghdGhpcy5wYXJzZWREYXRlVGltZSkge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSB0aGlzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLm5ldmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHJlbGF0aXZlVGltZSh0aGlzLnBhcnNlZERhdGVUaW1lLCB0aGlzLmxvY2FsaXplKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcmVsYXRpdmUtdGltZVwiLCBIYVJlbGF0aXZlVGltZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXJcIjtcblxuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcbmxldCBzdWJUZW1wbGF0ZTtcblxuY2xhc3MgSGFTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXN1YlRlbXBsYXRlKSB7XG4gICAgICBzdWJUZW1wbGF0ZSA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBjb25zdCBzdXBlclN0eWxlID0gc3ViVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIik7XG5cbiAgICAgIC8vIGFwcGVuZCBzdHlsZSB0byBhZGQgbWlycm9yaW5nIG9mIHBpbiBpbiBSVExcbiAgICAgIHN1cGVyU3R5bGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAjc2xpZGVyQ29udGFpbmVyLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc3ViVGVtcGxhdGU7XG4gIH1cblxuICBfY2FsY1N0ZXAodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuc3RlcCkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bVN0ZXBzID0gTWF0aC5yb3VuZCgodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApO1xuICAgIGNvbnN0IHN0ZXBTdHIgPSB0aGlzLnN0ZXAudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzdGVwUG9pbnRBdCA9IHN0ZXBTdHIuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKHN0ZXBQb2ludEF0ICE9PSAtMSkge1xuICAgICAgLyoqXG4gICAgICAgKiBGb3Igc21hbGwgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBGb3Igbm9uLWludGVnZXIgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBgTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcGAgd2UgbWF5IGhpdCBhIHByZWNpc2lvbiBwb2ludCBpc3N1ZVxuICAgICAgICogZWcuIDAuMSAqIDAuMiA9ICAwLjAyMDAwMDAwMDAwMDAwMDAwNFxuICAgICAgICogaHR0cDovL2RvY3Mub3JhY2xlLmNvbS9jZC9FMTk5NTctMDEvODA2LTM1NjgvbmNnX2dvbGRiZXJnLmh0bWxcbiAgICAgICAqXG4gICAgICAgKiBhcyBhIHdvcmsgYXJvdW5kIHdlIGNhbiByb3VuZCB3aXRoIHRoZSBkZWNpbWFsIHByZWNpc2lvbiBvZiBgc3RlcGBcbiAgICAgICAqL1xuICAgICAgY29uc3QgcHJlY2lzaW9uID0gMTAgKiogKHN0ZXBTdHIubGVuZ3RoIC0gc3RlcFBvaW50QXQgLSAxKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIE1hdGgucm91bmQoKG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW4pICogcHJlY2lzaW9uKSAvIHByZWNpc2lvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2xpZGVyXCIsIEhhU2xpZGVyKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFsIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFBhdGgge1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNzVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTaWduZWRQYXRoPiA9PiBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiYXV0aC9zaWduX3BhdGhcIiwgcGF0aCB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aFByb3ZpZGVycyA9ICgpID0+XG4gIGZldGNoKFwiL2F1dGgvcHJvdmlkZXJzXCIsIHtcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGltZUNhY2hlUHJvbWlzZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlXCI7XG5pbXBvcnQgeyBnZXRTaWduZWRQYXRoIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgQ0FNRVJBX1NVUFBPUlRfT05fT0ZGID0gMTtcbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9TVFJFQU0gPSAyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZWZlcmVuY2VzIHtcbiAgcHJlbG9hZF9zdHJlYW06IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhVGh1bWJuYWlsIHtcbiAgY29udGVudF90eXBlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW0ge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVNSlBFR1N0cmVhbVVybCA9IChlbnRpdHk6IENhbWVyYUVudGl0eSkgPT5cbiAgYC9hcGkvY2FtZXJhX3Byb3h5X3N0cmVhbS8ke2VudGl0eS5lbnRpdHlfaWR9P3Rva2VuPSR7ZW50aXR5LmF0dHJpYnV0ZXMuYWNjZXNzX3Rva2VufWA7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PlxuICB0aW1lQ2FjaGVQcm9taXNlRnVuYyhcbiAgICBcIl9jYW1lcmFUbWJVcmxcIixcbiAgICA5MDAwLFxuICAgIGZldGNoVGh1bWJuYWlsVXJsLFxuICAgIGhhc3MsXG4gICAgZW50aXR5SWRcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgcGF0aCA9IGF3YWl0IGdldFNpZ25lZFBhdGgoaGFzcywgYC9hcGkvY2FtZXJhX3Byb3h5LyR7ZW50aXR5SWR9YCk7XG4gIHJldHVybiBoYXNzLmhhc3NVcmwocGF0aC5wYXRoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgcmV0dXJuIGhhc3MuY2FsbFdTPENhbWVyYVRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwiY2FtZXJhX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU3RyZWFtVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBmb3JtYXQ/OiBcImhsc1wiXG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0eXBlOiBcImNhbWVyYS9zdHJlYW1cIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9O1xuICBpZiAoZm9ybWF0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGRhdGEuZm9ybWF0ID0gZm9ybWF0O1xuICB9XG4gIGNvbnN0IHN0cmVhbSA9IGF3YWl0IGhhc3MuY2FsbFdTPFN0cmVhbT4oZGF0YSk7XG4gIHN0cmVhbS51cmwgPSBoYXNzLmhhc3NVcmwoc3RyZWFtLnVybCk7XG4gIHJldHVybiBzdHJlYW07XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYW1lcmFQcmVmcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL2dldF9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FtZXJhUHJlZnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHByZWZzOiB7XG4gICAgcHJlbG9hZF9zdHJlYW0/OiBib29sZWFuO1xuICB9XG4pID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvdXBkYXRlX3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IHR5cGUgSHZhY01vZGUgPVxuICB8IFwib2ZmXCJcbiAgfCBcImhlYXRcIlxuICB8IFwiY29vbFwiXG4gIHwgXCJoZWF0X2Nvb2xcIlxuICB8IFwiYXV0b1wiXG4gIHwgXCJkcnlcIlxuICB8IFwiZmFuX29ubHlcIjtcblxuZXhwb3J0IGNvbnN0IENMSU1BVEVfUFJFU0VUX05PTkUgPSBcIm5vbmVcIjtcblxuZXhwb3J0IHR5cGUgSHZhY0FjdGlvbiA9IFwib2ZmXCIgfCBcImhlYXRpbmdcIiB8IFwiY29vbGluZ1wiIHwgXCJkcnlpbmdcIiB8IFwiaWRsZVwiO1xuXG5leHBvcnQgdHlwZSBDbGltYXRlRW50aXR5ID0gSGFzc0VudGl0eUJhc2UgJiB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGh2YWNfbW9kZTogSHZhY01vZGU7XG4gICAgaHZhY19tb2RlczogSHZhY01vZGVbXTtcbiAgICBodmFjX2FjdGlvbj86IEh2YWNBY3Rpb247XG4gICAgY3VycmVudF90ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIG1pbl90ZW1wOiBudW1iZXI7XG4gICAgbWF4X3RlbXA6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX3N0ZXA/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfaGlnaD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9sb3c/OiBudW1iZXI7XG4gICAgaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgY3VycmVudF9odW1pZGl0eT86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfbG93PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9oaWdoPzogbnVtYmVyO1xuICAgIG1pbl9odW1pZGl0eT86IG51bWJlcjtcbiAgICBtYXhfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgZmFuX21vZGU/OiBzdHJpbmc7XG4gICAgZmFuX21vZGVzPzogc3RyaW5nW107XG4gICAgcHJlc2V0X21vZGU/OiBzdHJpbmc7XG4gICAgcHJlc2V0X21vZGVzPzogc3RyaW5nW107XG4gICAgc3dpbmdfbW9kZT86IHN0cmluZztcbiAgICBzd2luZ19tb2Rlcz86IHN0cmluZ1tdO1xuICAgIGF1eF9oZWF0PzogXCJvblwiIHwgXCJvZmZcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFID0gMTtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFID0gMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZID0gNDtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUgPSA4O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFID0gMzI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUID0gNjQ7XG5cbmNvbnN0IGh2YWNNb2RlT3JkZXJpbmc6IHsgW2tleSBpbiBIdmFjTW9kZV06IG51bWJlciB9ID0ge1xuICBhdXRvOiAxLFxuICBoZWF0X2Nvb2w6IDIsXG4gIGhlYXQ6IDMsXG4gIGNvb2w6IDQsXG4gIGRyeTogNSxcbiAgZmFuX29ubHk6IDYsXG4gIG9mZjogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcyA9IChtb2RlMTogSHZhY01vZGUsIG1vZGUyOiBIdmFjTW9kZSkgPT5cbiAgaHZhY01vZGVPcmRlcmluZ1ttb2RlMV0gLSBodmFjTW9kZU9yZGVyaW5nW21vZGUyXTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNldElucHV0U2VsZWN0T3B0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHk6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsU2VydmljZShcImlucHV0X3NlbGVjdFwiLCBcInNlbGVjdF9vcHRpb25cIiwge1xuICAgIG9wdGlvbixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgU2VydmljZUNhbGxSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0eSBleHRlbmRzIEhhc3NFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgJiB7IGlkPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBTY2VuZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lRW50aXRpZXMge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IHN0cmluZyB8IHsgc3RhdGU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJzY2VuZVwiLCBcInR1cm5fb25cIiwgeyBlbnRpdHlfaWQ6IGVudGl0eUlkIH0pO1xuXG5leHBvcnQgY29uc3QgYXBwbHlTY2VuZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IFNjZW5lRW50aXRpZXNcbik6IFByb21pc2U8U2VydmljZUNhbGxSZXNwb25zZT4gPT5cbiAgaGFzcy5jYWxsU2VydmljZShcInNjZW5lXCIsIFwiYXBwbHlcIiwgeyBlbnRpdGllcyB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFNjZW5lQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmdcbik6IFByb21pc2U8U2NlbmVDb25maWc+ID0+XG4gIGhhc3MuY2FsbEFwaTxTY2VuZUNvbmZpZz4oXCJHRVRcIiwgYGNvbmZpZy9zY2VuZS9jb25maWcvJHtzY2VuZUlkfWApO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmcsXG4gIGNvbmZpZzogU2NlbmVDb25maWdcbikgPT4gaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke3NjZW5lSWR9YCwgY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjZW5lID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke2lkfWApO1xuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaGFzcywgc3RhdGVPYmopIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW4oKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5cIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2VkXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW5UaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMTAwO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMDtcbiAgfVxuXG4gIGdldCBpc09wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlbmluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zaW5nXCI7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3AoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW5UaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2VUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcFRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IGlzVGlsdE9ubHkoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlbiB8fCB0aGlzLnN1cHBvcnRzQ2xvc2UgfHwgdGhpcy5zdXBwb3J0c1N0b3A7XG4gICAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuVGlsdCB8fCB0aGlzLnN1cHBvcnRzQ2xvc2VUaWx0IHx8IHRoaXMuc3VwcG9ydHNTdG9wVGlsdDtcbiAgICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xuICB9XG5cbiAgb3BlbkNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyXCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJcIik7XG4gIH1cblxuICBzdG9wQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJcIik7XG4gIH1cblxuICBvcGVuQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHNldENvdmVyUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3Bvc2l0aW9uXCIsIHsgcG9zaXRpb24gfSk7XG4gIH1cblxuICBzZXRDb3ZlclRpbHRQb3NpdGlvbih0aWx0UG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3RpbHRfcG9zaXRpb25cIiwge1xuICAgICAgdGlsdF9wb3NpdGlvbjogdGlsdFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY292ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzT3BlbiA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2UgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1NldFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTdG9wID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDgpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Nsb3NlVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAzMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3BUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDY0KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PlxuICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEyOCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbHRPbmx5KHN0YXRlT2JqKSB7XG4gIGNvbnN0IHN1cHBvcnRzQ292ZXIgPVxuICAgIHN1cHBvcnRzT3BlbihzdGF0ZU9iaikgfHwgc3VwcG9ydHNDbG9zZShzdGF0ZU9iaikgfHwgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKTtcbiAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICBzdXBwb3J0c09wZW5UaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzQ2xvc2VUaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzU3RvcFRpbHQoc3RhdGVPYmopO1xuICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xufVxuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVBsYXllckVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLnN0YXRlT2JqID0gc3RhdGVPYmo7XG4gICAgdGhpcy5fYXR0ciA9IHN0YXRlT2JqLmF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fZmVhdCA9IHRoaXMuX2F0dHIuc3VwcG9ydGVkX2ZlYXR1cmVzO1xuICB9XG5cbiAgZ2V0IGlzT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG5cbiAgZ2V0IGlzSWRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJpZGxlXCI7XG4gIH1cblxuICBnZXQgaXNNdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5pc192b2x1bWVfbXV0ZWQ7XG4gIH1cblxuICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCI7XG4gIH1cblxuICBnZXQgaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcInBsYXlpbmdcIjtcbiAgfVxuXG4gIGdldCBpc011c2ljKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJtdXNpY1wiO1xuICB9XG5cbiAgZ2V0IGlzVFZTaG93KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJ0dnNob3dcIjtcbiAgfVxuXG4gIGdldCBoYXNNZWRpYUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFtcInBsYXlpbmdcIiwgXCJwYXVzZWRcIiwgXCJ1bmtub3duXCIsIFwib25cIl0uaW5kZXhPZih0aGlzLnN0YXRlT2JqLnN0YXRlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZvbHVtZVNsaWRlclZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnZvbHVtZV9sZXZlbCAqIDEwMDtcbiAgfVxuXG4gIGdldCBzaG93UHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzUGxheWluZyB8fCB0aGlzLmlzUGF1c2VkKSAmJlxuICAgICAgXCJtZWRpYV9kdXJhdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvbl91cGRhdGVkX2F0XCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UHJvZ3Jlc3MoKSB7XG4gICAgdmFyIHByb2dyZXNzID0gdGhpcy5fYXR0ci5tZWRpYV9wb3NpdGlvbjtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHByb2dyZXNzICs9XG4gICAgICAgIChEYXRlLm5vdygpIC1cbiAgICAgICAgICBuZXcgRGF0ZSh0aGlzLl9hdHRyLm1lZGlhX3Bvc2l0aW9uX3VwZGF0ZWRfYXQpLmdldFRpbWUoKSkgL1xuICAgICAgICAxMDAwLjA7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmVzcztcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BhdXNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVTZXQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZU11dGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ByZXZpb3VzVHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNOZXh0VHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNUdXJuT24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVHVybk9mZigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDI1Nik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5TWVkaWEoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lQnV0dG9ucygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEwMjQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2VsZWN0U291cmNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMjA0OCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZWxlY3RTb3VuZE1vZGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NTUzNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYzODQpO1xuICB9XG5cbiAgZ2V0IHByaW1hcnlUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV90aXRsZTtcbiAgfVxuXG4gIGdldCBzZWNvbmRhcnlUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5pc011c2ljKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9hcnRpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVFZTaG93KSB7XG4gICAgICB2YXIgdGV4dCA9IHRoaXMuX2F0dHIubWVkaWFfc2VyaWVzX3RpdGxlO1xuXG4gICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9zZWFzb24pIHtcbiAgICAgICAgdGV4dCArPSBcIiBTXCIgKyB0aGlzLl9hdHRyLm1lZGlhX3NlYXNvbjtcblxuICAgICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9lcGlzb2RlKSB7XG4gICAgICAgICAgdGV4dCArPSBcIkVcIiArIHRoaXMuX2F0dHIubWVkaWFfZXBpc29kZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F0dHIuYXBwX25hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmFwcF9uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlO1xuICB9XG5cbiAgZ2V0IHNvdXJjZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlX2xpc3Q7XG4gIH1cblxuICBnZXQgc291bmRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdW5kX21vZGU7XG4gIH1cblxuICBnZXQgc291bmRNb2RlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VuZF9tb2RlX2xpc3Q7XG4gIH1cblxuICBtZWRpYVBsYXlQYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIG5leHRUcmFjaygpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfbmV4dF90cmFja1wiKTtcbiAgfVxuXG4gIHBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIHByZXZpb3VzVHJhY2soKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3ByZXZpb3VzX3RyYWNrXCIpO1xuICB9XG5cbiAgc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfc2V0XCIsIHsgdm9sdW1lX2xldmVsOiB2b2x1bWUgfSk7XG4gIH1cblxuICB0b2dnbGVQb3dlcigpIHtcbiAgICBpZiAodGhpcy5pc09mZikge1xuICAgICAgdGhpcy50dXJuT24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgfVxuICB9XG5cbiAgdHVybk9mZigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidHVybl9vZmZcIik7XG4gIH1cblxuICB0dXJuT24oKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInR1cm5fb25cIik7XG4gIH1cblxuICB2b2x1bWVEb3duKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfZG93blwiKTtcbiAgfVxuXG4gIHZvbHVtZU11dGUobXV0ZSkge1xuICAgIGlmICghdGhpcy5zdXBwb3J0c1ZvbHVtZU11dGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11dGluZyB2b2x1bWUgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9tdXRlXCIsIHsgaXNfdm9sdW1lX211dGVkOiBtdXRlIH0pO1xuICB9XG5cbiAgdm9sdW1lVXAoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV91cFwiKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZShzb3VyY2UpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdXJjZVwiLCB7IHNvdXJjZSB9KTtcbiAgfVxuXG4gIHNlbGVjdFNvdW5kTW9kZShzb3VuZE1vZGUpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdW5kX21vZGVcIiwgeyBzb3VuZF9tb2RlOiBzb3VuZE1vZGUgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQXhIQTtBQUNBO0FBd0hBOzs7Ozs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoRkE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRkE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQXVEQTs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBR0E7QUFZQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBUUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBSUE7QUFBQTtBQUVBO0FBSUE7QUFBQTtBQUVBO0FBTUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRIQTtBQXdIQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5TkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==